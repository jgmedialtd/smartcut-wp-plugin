import { r as K, w as Ue, c as T, Y as gt, Z as lt, W as Ns, n as vt, K as Fn, d as Qe, o as gn, E as xa, _ as jo, H as Ft, a as R, b as O, q as De, $ as Ro, M as Qn, f as Z, j as Ie, u as A, e as se, a0 as Ai, t as ve, s as Go, x as xs, l as St, F as Ze, k as at, C as qo, a1 as fn, p as Oi, v as _o, y as Ei, z as Uo, O as ps, g as je, m as mn, J as Ps, A as bt, P as Wo, a2 as kt, h as wn, I as zo, U as Ho, V as Ko } from "./vendor-vue-BJlZsQnE.js";
import { be as Re, bf as dn, aT as Zo, bb as Pa, bg as cn, bh as Kn, bi as Ca, bj as Ia, bk as Aa, bl as Li, bm as yn, bn as Bs, bo as Jo, bp as Yo, bq as Xo, br as Oa, bs as La, bt as Ki, bu as Qo, bv as di, bw as Fi, bx as el, ba as fi, I as pi, x as Tn, b9 as Zt, w as $n, i as kn, H as Dt, aX as tl, by as Vs, bz as nl, b3 as Rn, bA as Gn, b6 as qn, F as _n, bB as Ds, bC as js, bD as il, m as Rs, A as sl, _ as al, aR as ol, bE as ll, aQ as Fa, bF as rl, a8 as xi, bG as cl, bH as ul, aJ as dl, bI as fl, aK as pl, aM as hl, aO as gl, aN as ml, aL as An, c as me, v as Ke, bJ as hi, bK as vl, bL as Ta, bM as bl, f as Ht, bN as yl, bO as Gs, t as wl, e as on, y as kl, r as Zi, z as Sl, q as xl, bP as Pl, bQ as hs, b5 as Cl, bR as Il, bS as Al, bT as Ol, bU as Ll, bV as $a, bW as Fl, bX as Tl, bY as Ji, bZ as $l, b_ as El, b$ as Ea, c0 as Ma, c1 as Ml, c2 as Nl, c3 as Bl, c4 as Vl, c5 as Dl, c6 as jl, c7 as Rl, c8 as gs, c9 as Gl, ca as ql, cb as _l, cc as Ul, cd as Wl, ce as pn, cf as Yi, cg as zl, g as un, ch as qs, ci as Xi, cj as Hl, ck as _s, o as Us, b as Ws, u as Qi, s as es } from "./result.zod-B05sXwuC.js";
import { s as ts, d as Kl, u as Zl, l as ns, b as Jl } from "./i18n-DT7wACvc.js";
import { H as Zn, Z as gi, o as H, j as ue, t as _, i as v, q as zs, I as jt, J as Yl, n as ce, k as Rt, u as _e, m as Pe, K as Hs, L as mi, M as Xl, N as Ql, O as Ks, Q as er, S as vi, T as is, U as ss, V as as, l as tr, h as Le, W as nr } from "./vendor-CFKbllLs.js";
import "./vendor-i18next-2OYl82kj.js";
import { f as ir, d as sr, l as Vt, e as ms, c as vs, i as Xe, r as Bt, g as Pi, h as ar } from "./vendor-d3-DNaL3zcO.js";
import { a as or } from "./vendor-lodash-B8VQpKjD.js";
import { o as lr, f as rr, s as cr, a as ur } from "./vendor-floating-ui-DZfk4g77.js";
import { t as Se } from "./i18n-Ck7sLK64.js";
import { _ as Mn } from "./Launch-CP9cQM76.js";
import { b as Jn } from "./environment-BeBZzWz6.js";
function Na(t, e = "cc") {
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
const Ba = {
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
function dr(t) {
  return t !== 0 && t !== 1 && t !== 2 ? !1 : Ba[t].sidesLMatchShapeL;
}
function fr(t) {
  return t !== 0 && t !== 1 && t !== 2 ? [] : Ba[t].affectedExtraTypes;
}
function Ci(t = 0, e, n = null, i = null, s = null) {
  if (!Re(n) && !dn || i === "stock") return !1;
  let a, o;
  if (Re(n) ? a = n.orientationLock : dn(n) ? a = "l" : i === "shape" && (a = s), t === 0 || dn(n))
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
function pr(t, e, n = null, i = null, s = null) {
  if (!Re(n) || i === "shape") return !1;
  let a;
  return t === 0 || t === 1 || t === 2 ? Ci(t, e, n, i, s) ? "cc" : !1 : a;
}
function hr(t, e = []) {
  if (!t?.length) return [];
  const n = t.map((i) => i && typeof i.getType == "function" ? i : Zo(i)).filter((i) => i instanceof Pa);
  return e.length && gr(n, e), n;
}
function gr(t = [], e = []) {
  t.length && e.length && t.forEach((n) => {
    n.shapeIds = n.shapeIds.filter((i) => e.find((s) => s.autoId === i));
  });
}
let hn = null;
if (Jn())
  try {
    hn = require("~/helpers/applicationSettings").applicationSettings;
  } catch (t) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", t);
  }
function Un(t, e, n = {}) {
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
  if (!Jn()) {
    const o = K((() => {
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
    return Ue(o, (l) => {
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
  if (Jn()) {
    if (!hn)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), K(e);
    const o = K((() => {
      try {
        const l = hn.getString(t);
        if (l)
          return i.read(l);
      } catch (l) {
        console.error("[useCrossPlatformStorage] Failed to load", t, "from ApplicationSettings:", l);
      }
      return e;
    })());
    return Ue(o, (l) => {
      try {
        const r = i.write(l);
        hn.setString(t, r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to save", t, "to ApplicationSettings:", r);
      }
    }, { deep: !0 }), o;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", t, "- using in-memory fallback"), K(e);
}
function Zs(t) {
  try {
    return Jn() ? hn ? hn.getString(t) : null : typeof window < "u" && window.localStorage ? localStorage.getItem(t) : null;
  } catch (e) {
    return console.error(`[getStorageValue] Error getting storage value for key ${t}:`, e), null;
  }
}
function Js(t) {
  try {
    Jn() ? hn && hn.remove(t) : typeof window < "u" && window.localStorage && localStorage.removeItem(t);
  } catch (e) {
    console.error(`[removeStorageValue] Error removing storage value for key ${t}:`, e);
  }
}
const Va = "cle-extras-config", mr = () => {
  try {
    const t = localStorage.getItem(Va);
    return t ? JSON.parse(t) : {};
  } catch {
    return {};
  }
}, vr = (t) => {
  try {
    localStorage.setItem(Va, JSON.stringify(t));
  } catch {
  }
}, Yn = K(mr()), bs = (t, e) => {
  Yn.value[t] = e, vr(Yn.value);
}, Jt = (t) => Yn.value[t] || null, br = () => Yn.value;
let Ys = !1;
const yr = () => {
  Ys || (el({
    getExtrasConfig: Jt,
    getAllExtrasConfigs: br,
    setExtrasConfig: bs
  }), Ys = !0);
}, wr = (t, e) => {
  const n = Jt(t);
  if (!n || !n.options || n.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const i = n.options[0], s = Array.isArray(i) && typeof i[0] == "string" ? i : [];
  if (s.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = (r) => n.options.length > 1 ? r.includes("|") ? n.pricing && Object.keys(n.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(n.pricing, r) ? !0 : Object.keys(n.pricing).some((k) => k.startsWith(r + "|") || k === r) : r.split("|").every((m, k) => {
    if (k >= n.options.length) return !1;
    const p = n.options[k];
    return Array.isArray(p) && typeof p[0] == "string" && p.includes(m);
  }) : n.options.some((h) => Array.isArray(h) && typeof h[0] == "string" && h.includes(r)) : s.includes(r), o = /* @__PURE__ */ new Set();
  let l = 0;
  return e.forEach((r) => {
    if (!r.extras?.[t]) return;
    const h = r.extras[t].sides || {};
    Object.entries(h).forEach(([k, p]) => {
      typeof p == "string" && p && !a(p) && (o.add(p), h[k] = "", l++);
    });
    const m = r.extras[t].faces || {};
    Object.entries(m).forEach(([k, p]) => {
      typeof p == "string" && p && !a(p) && (o.add(p), m[k] = "", l++);
    });
  }), {
    cleanedCount: l,
    invalidOptions: Array.from(o)
  };
}, kr = (t) => {
  yr();
  const {
    shape: e,
    extraType: n,
    allOptions: i,
    labels: s,
    userFriendlyFieldMap: a,
    allowCustomNames: o,
    customNames: l = K([]),
    enablePricing: r = !1,
    pricing: h,
    displayNames: m,
    locations: k = K([]),
    locationGroups: p = K([]),
    orientationModel: F = 0,
    getAvailablePricingOptions: I,
    getPrice: B,
    findExtrasPrice: M,
    formatPrice: V
  } = t, U = T(() => Ns(i) ? i.value : i), Q = T(() => Ns(m) ? m.value : m), he = () => {
    const d = Jt(n), b = U.value?.length ? U.value : d?.options || [], D = d?.labels || s;
    cn(e.value, n, b, D, l.value);
  };
  he(), Ue(
    () => e.value?.extras?.[n],
    (d) => {
      if (d) {
        const b = d?.sides || {}, D = d?.options?.sides || {};
        let G = !1;
        for (const [X, le] of Object.entries(b))
          if (typeof le == "string") {
            if (le.includes("|") && !D[X]) {
              G = !0;
              break;
            } else if (le !== "" && !D[X]) {
              G = !0;
              break;
            }
          }
        G && he();
      }
    },
    { immediate: !1 }
  );
  const $ = T(() => Yn.value[n] || null), N = T(() => {
    const d = U.value?.length ? U.value : $.value?.options || [];
    if (d.length > 1)
      return "multiple";
    const D = (d[0] || []).filter((we) => typeof we == "string"), G = (l.value || []).filter((we) => typeof we == "string"), le = Array.from(/* @__PURE__ */ new Set([...D, ...G])).length;
    return le === 0 ? "boolean" : le === 1 ? "single" : "multiple";
  }), ee = T(() => Fi(n)), y = T(() => k.value && k.value.length > 0 ? k.value.filter((d) => d !== "all" && d !== "faces" && d !== "sides") : ee.value), j = T(() => y.value.filter((d) => Kn(d) === "face")), S = T(() => y.value.filter((d) => Kn(d) === "side")), J = T(() => Ia(n)), ne = T(() => Ca(n)), ae = T(() => Aa(n)), oe = () => $.value?.options && $.value.options.length > 1, Me = (d, b, D) => {
    const { singleOption: G = We(), operation: X } = D;
    switch (b) {
      case "boolean":
        return !!d;
      case "single":
        return G ? X === "process" || X === "set" ? d && G ? G : "" : d === G ? G : "" : !!d;
      case "multiple":
        return d || "";
      default:
        return d;
    }
  }, Y = (d, b, D) => Me(b, D, { operation: "process" }), pe = (d, b, D, G, X, le) => {
    switch (le) {
      case "boolean":
        di(d, b, D, G, !!X);
        break;
      case "single": {
        const we = We();
        di(d, b, D, G, X ? we : "");
        break;
      }
      case "multiple":
        di(d, b, D, G, X || "");
        break;
    }
  }, q = (d, b, D = {}) => {
    const G = D.singleOption || We();
    return D.allowCustomNames, Me(d, b, {
      operation: "get",
      singleOption: G
    });
  }, de = (d, b, D, G) => {
    switch (G) {
      case "boolean":
        return !!d;
      case "single": {
        const X = We();
        if (X) {
          const le = b.map((be) => yn(e.value, n, be, D)), we = le.every((be) => be === X || be === !0), Ae = le.every((be) => !be || be === "");
          return we ? X : Ae ? "" : null;
        }
        return !!d;
      }
      case "multiple":
        return typeof d == "string" ? d : d || "";
      default:
        return d;
    }
  }, $e = (d, b, D, G = !1) => {
    if (G)
      d.forEach((X) => tt(X, b, D));
    else {
      const X = s[b] || "", le = Y(X, D, N.value);
      d.forEach((we) => {
        pe(e.value, n, we, X, le, N.value);
      });
    }
  }, re = (d, b) => {
    if (oe()) {
      const D = s[b] || "", G = d.map((Ae) => {
        const be = yn(e.value, n, Ae, D);
        return be === !0 ? it(b)[0] || "" : String(be || "");
      }), X = G[0] || "";
      return G.every((Ae) => Ae === X) ? X : null;
    } else {
      const D = s[b] || "";
      if (N.value === "single") {
        const X = We();
        if (X) {
          const le = d.map((be) => yn(e.value, n, be, D)), we = le.every((be) => be === X || be === !0), Ae = le.every((be) => !be || be === "");
          return we ? X : Ae ? "" : null;
        }
      }
      const G = Bs(e.value, n, d, D, N.value);
      return N.value === "multiple" && G === !1 && d.every((le) => {
        const we = yn(e.value, n, le, D, N.value);
        return we === "" || we === !1 || we === null || we === void 0;
      }) ? "" : G;
    }
  }, rt = (d) => {
    const { location: b, locationType: D = "single", optionIndex: G, stateValue: X, isAggregate: le = !1 } = d, we = it(G), Ae = we.length > 1 ? "select" : "checkbox", be = le ? Te(G, b && x(b) ? b : D) : Te(G, b), ft = N.value === "multiple" && be.length === 1 && r && G > 0;
    if (ft && be[0]) {
      if (le) {
        let pt = [];
        D === "all" ? pt = y.value : D === "faces" ? pt = j.value : D === "sides" ? pt = S.value : b && x(b) && (pt = w(b)), pt.forEach((Dn) => {
          const xn = ze(Dn, G);
          (!xn || xn !== be[0]) && tt(Dn, G, be[0]);
        });
      } else if (b) {
        const pt = ze(b, G);
        (!pt || pt !== be[0]) && tt(b, G, be[0]);
      }
    }
    let Ce = !1;
    const Ee = Jt(n);
    if (Ee?.optionLocations && b && b !== "all" && Ae === "checkbox" && we.length === 1) {
      const pt = Ee.optionLocations[we[0]];
      pt && !pt.includes(b) && (Ce = !0);
    }
    const Ge = N.value === "multiple" && (be.length === 0 || ft), Et = X !== void 0 ? X : b ? ze(b, G) : null, Mt = Ae === "select" ? He(b || D, G) : void 0, Bn = Ae === "checkbox" && we.length === 1 ? we[0] : void 0;
    let Vn, ai;
    return Ae === "checkbox" && we.length === 1 && (Vn = we[0], ai = ""), {
      inputType: Ae,
      // Alias for backward compatibility
      type: Ae,
      value: Et,
      options: Mt,
      disabled: Ge,
      hidden: Ce,
      label: Bn,
      indeterminate: Et === null && Ae === "checkbox",
      trueValue: Vn,
      falseValue: ai
    };
  }, nt = (d, b, D) => rt({
    locationType: d,
    optionIndex: b,
    stateValue: D,
    isAggregate: !0
  }), tt = (d, b, D) => {
    const G = s[b] || "";
    if (oe()) {
      const X = et(d, b);
      let le;
      if (X === "checkbox") {
        const Ae = it(b)[0];
        le = D ? Ae : "";
      } else
        le = D || "";
      di(e.value, n, d, G, le);
    } else
      pe(e.value, n, d, G, D, N.value);
  }, ze = (d, b) => {
    const D = s[b] || "";
    if (oe()) {
      const G = yn(e.value, n, d, D);
      if (et(d, b) === "checkbox") {
        const we = it(b)[0];
        return G === !0 || G === we ? we : "";
      } else
        return G || "";
    } else {
      const G = yn(e.value, n, d, D, N.value);
      return q(G, N.value);
    }
  }, Pt = (d, b) => {
    $e(y.value, d, b, oe());
  }, ct = (d) => {
    if (oe()) {
      const b = s[d] || "", D = y.value.map((le) => {
        const we = yn(e.value, n, le, b);
        return we === !0 ? it(d)[0] || "" : String(we || "");
      }), G = D[0] || "";
      return D.every((le) => le === G) ? G : null;
    } else {
      const b = s[d] || "", D = Bs(e.value, n, y.value, b, N.value);
      return de(D, y.value, b, N.value);
    }
  }, en = () => {
    Ki(e.value, n, y.value, N.value), lt(e);
  }, Ct = (d) => d === "faces" ? {
    locations: j.value,
    isSupported: J.value
  } : {
    locations: S.value,
    isSupported: ne.value
  }, ot = (d, b, D) => {
    const { locations: G, isSupported: X } = Ct(d);
    X && $e(G, b, D, oe());
  }, It = (d, b) => {
    const { locations: D, isSupported: G } = Ct(d);
    return G ? re(D, b) : null;
  }, ut = (d) => {
    const { locations: b, isSupported: D } = Ct(d);
    D && (Ki(e.value, n, b, N.value), lt(e));
  }, tn = (d, b) => {
    const { isSupported: D } = Ct(d);
    if (!D) return { type: "checkbox", value: !1 };
    const G = It(d, b);
    return nt(d, b, G);
  }, At = (d, b) => {
    ot("faces", d, b);
  }, Je = (d, b) => {
    ot("sides", d, b);
  }, Gt = (d) => It("faces", d), Tt = (d) => It("sides", d), nn = () => {
    ut("faces");
  }, ge = () => {
    ut("sides");
  }, P = (d) => p.value.find((b) => b.id === d), x = (d) => ["all", "faces", "sides"].includes(d) ? !1 : !d.includes("."), w = (d) => {
    const b = P(d);
    return b ? b.locations.filter((D) => y.value.includes(D)) : [];
  }, W = (d, b, D) => {
    const G = w(d);
    G.length !== 0 && (G.forEach((X) => tt(X, b, D)), lt(e));
  }, E = (d, b) => {
    const D = w(d);
    if (D.length === 0) return null;
    const G = re(D, b);
    return !oe() && (G === null || G === !1 || G === "") ? "" : G;
  }, te = (d) => {
    const b = w(d);
    b.length !== 0 && (Ki(e.value, n, b, N.value), lt(e));
  }, ye = (d, b) => {
    const D = E(d, b), G = P(d);
    return rt({
      location: d,
      optionIndex: b,
      stateValue: D,
      isAggregate: !0,
      customLabel: G?.label
    });
  }, Fe = (d) => {
    Qo(e.value, n, d, N.value), lt(e);
  }, dt = (d) => d === "all" ? y.value.some((b) => !!ze(b, 0)) : d === "faces" && J.value ? j.value.some((b) => !!ze(b, 0)) : d === "sides" && ne.value ? S.value.some((b) => !!ze(b, 0)) : x(d) ? w(d).some((D) => !!ze(D, 0)) : y.value.includes(d) ? !!ze(d, 0) : !1, yt = (d) => {
    if (d === "all") return Se("general.all");
    if (d === "faces") return `${Se("general.all")} ${Se("machining.face_other")}`;
    if (d === "sides") return `${Se("general.all")} ${Se("woodwork.edge_other")}`;
    if (x(d)) {
      const G = P(d);
      if (G) return G.label;
    }
    if (d.startsWith("face.")) {
      const X = `faces.${d.replace("face.", "")}`;
      return Se(X);
    }
    if (d.startsWith("side.")) {
      let G = d.replace("side.", "");
      (F === 1 || F === 2) && e.value && e.value.w > e.value.l && (G = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[G] || G);
      const X = `sides.${G}`;
      return Se(X);
    }
    const b = `fields.${d}`, D = Se(b);
    return D !== b ? D : a?.[d] ? a[d] : d;
  }, et = (d, b) => N.value === "boolean" ? "checkbox" : it(b).length > 1 ? "select" : "checkbox", xe = (d, b) => rt({
    location: d,
    optionIndex: b,
    isAggregate: !1
  }), Ne = (d) => {
    const b = ct(d);
    return nt("all", d, b);
  }, $t = (d) => tn("faces", d), qe = (d) => tn("sides", d), wt = (d, b) => d === "all" ? Ne(b) : d === "faces" ? $t(b) : d === "sides" ? qe(b) : x(d) ? ye(d, b) : xe(d, b), Te = (d, b) => {
    const D = Jt(n), X = (U.value?.length ? U.value : D?.options || [])[d];
    if (!X || X[0] === !0)
      return [];
    const le = b && typeof b == "string" && (b.startsWith("face.") || b.startsWith("side.")), we = b && typeof b == "string" && x(b), Ae = !le && (b === "all" || b === "faces" || b === "sides" || we);
    if (Array.isArray(X) && X.length === 1 && typeof X[0] == "string" && !(r && I && (le || Ae) && d > 0))
      return X;
    if (r && I && le) {
      const Ce = [];
      if (d > 0)
        for (let Ee = 0; Ee < d; Ee++) {
          const Ge = ze(b, Ee);
          if (typeof Ge == "string" && Ge)
            Ce.push(Ge);
          else if (typeof Ge == "boolean")
            Ce.push(Ge);
          else {
            const Et = Jt(n), Mt = Li(e.value, n, b);
            return Mt && typeof Mt == "object" && !Array.isArray(Mt) && Object.keys(Mt).length > 1 && Et?.options[d] ? Et.options[d] : [];
          }
        }
      return I(h, Ce, d);
    }
    if (r && I && Ae) {
      const Ce = [];
      if (d > 0)
        for (let Ee = 0; Ee < d; Ee++) {
          let Ge;
          if (b === "all" ? Ge = ct(Ee) : b === "faces" ? Ge = Gt(Ee) : b === "sides" ? Ge = Tt(Ee) : we && typeof b == "string" && (Ge = E(b, Ee)), typeof Ge == "string" && Ge)
            Ce.push(Ge);
          else if (typeof Ge == "boolean")
            Ce.push(Ge);
          else
            return [];
        }
      return I(h, Ce, d);
    }
    const be = X, ft = o ? (l.value || []).filter((Ce) => typeof Ce == "string") : [];
    return [.../* @__PURE__ */ new Set([...be, ...ft])];
  }, He = (d, b) => {
    const D = Jt(n), X = (U.value?.length ? U.value : D?.options)?.[b] || [], le = o && l.value ? l.value.filter((Ee) => typeof Ee == "string") : [];
    let we = [.../* @__PURE__ */ new Set([...X, ...le])];
    D?.optionLocations && d && d !== "all" && (we = we.filter((Ee) => {
      const Ge = D.optionLocations[Ee];
      return Ge ? Ge.includes(d) : !0;
    }));
    const Ae = Te(b, d), be = new Set(Ae), ft = Q.value ?? D?.displayNames;
    return we.map((Ee) => ({
      value: Ee,
      label: ft?.[Ee] || Ee,
      disabled: !be.has(Ee)
    }));
  }, We = () => {
    const d = Te(0);
    return d.length === 1 ? d[0] : void 0;
  }, ei = (d) => {
    const b = Te(d);
    return b.length === 1 ? b[0] : void 0;
  }, it = (d) => {
    const b = Jt(n), D = U.value?.length ? U.value : b?.options;
    let G = [];
    if (D && D[d] && Array.isArray(D[d])) {
      const le = D[d];
      Array.isArray(le) && le.every((we) => typeof we == "string") && (G = le);
    }
    const X = o && l.value ? l.value.filter((le) => typeof le == "string") : [];
    return [.../* @__PURE__ */ new Set([...G, ...X])];
  }, qt = (d, b = 0) => {
    if (d === "all" || d === "faces" || d === "sides")
      return "";
    if (x(d)) {
      const G = P(d);
      return G?.price !== void 0 && E(d, b) ? V ? V(G.price) : G.price.toString() : "";
    }
    if (!r || !B)
      return "";
    if (!y.value.includes(d))
      return "N/A";
    const D = B(e.value, n, d, M);
    return D ? V ? V(D) : D.toString() : "N/A";
  }, _t = (d) => !r || !B ? !1 : B(e.value, n, d, M), Ut = T(() => y.value.length > 1), Wt = T(() => ee.value.length > 1), ti = () => {
    if (k.value && k.value.length > 0) {
      const G = [];
      return p.value && p.value.length > 0 && p.value.forEach((X) => G.push(X.id)), G.push(...k.value), G;
    }
    const d = [];
    p.value && p.value.length > 0 && p.value.forEach((G) => d.push(G.id)), Ut.value && d.push("all"), Wt.value && (Oa(n).length > 0 && d.push("faces"), La(n).length > 0 && d.push("sides"));
    const b = /* @__PURE__ */ new Set();
    p.value && p.value.length > 0 && p.value.forEach((G) => {
      G.hideIndividualLocations && G.locations.forEach((X) => b.add(X));
    });
    const D = ee.value.filter((G) => !b.has(G));
    return d.push(...D), d;
  }, ni = () => N.value === "multiple", Nn = () => {
    const d = 1 + U.value.length, b = N.value === "multiple", D = r, G = d + (b ? 1 : 0) + (D ? 1 : 0);
    return {
      columns: G,
      style: `repeat(${G}, max-content)`
    };
  }, sn = (d) => d === "all" ? "all" : d === "faces" ? "faces" : d === "sides" ? "sides" : "individual", vn = (d) => Kn(d), an = (d) => {
    if (d === "all")
      return Ut.value;
    if (x(d))
      return P(d) ? w(d).length > 0 : !1;
    if (k.value && k.value.length > 0)
      return k.value.includes(d);
    const b = sn(d);
    return b === "all" ? Ut.value : b === "faces" || b === "sides" ? b === "faces" && J.value && j.value.length > 0 || b === "sides" && ne.value && S.value.length > 0 ? Wt.value : !1 : ee.value.includes(d);
  }, Bi = (d) => {
    Xo(d, n, l);
  }, bn = (d) => {
    Yo([e.value], n, d, s);
  }, ii = (d) => {
    Jo([e.value], n, d);
  }, zt = (d, b, D) => {
    if (d === "all")
      Pt(b, D);
    else if (d === "faces")
      At(b, D);
    else if (d === "sides")
      Je(b, D);
    else if (x(d)) {
      let X = D;
      if (!oe() && typeof D == "boolean") {
        const le = it(b);
        le.length === 1 && (X = D ? le[0] : "");
      }
      if (!oe() && X) {
        const le = w(d), we = new Set(le);
        p.value && (p.value.forEach((Ae) => {
          Ae.id !== d && w(Ae.id).filter((Ce) => !we.has(Ce)).forEach((Ce) => {
            tt(Ce, b, "");
          });
        }), lt(e));
      }
      W(d, b, X);
    } else
      tt(d, b, D), oe() || lt(e);
    const G = s.length;
    for (let X = b + 1; X < G; X++) {
      let le;
      if (d === "all" ? le = ct(X) : d === "faces" ? le = Gt(X) : d === "sides" ? le = Tt(X) : x(d) ? le = E(d, X) : le = ze(d, X), !le)
        continue;
      const we = Te(X, d);
      let Ae = !1;
      if (typeof le == "string" ? Ae = we.includes(le) : typeof le == "boolean" && le === !0 && (Ae = we.length > 0), !Ae) {
        const be = et(d, X) === "checkbox" ? !1 : "";
        d === "all" ? Pt(X, be) : d === "faces" ? At(X, be) : d === "sides" ? Je(X, be) : x(d) ? W(d, X, be) : tt(d, X, be);
      }
    }
  }, Vi = (d, b = !0) => b && !confirm(`Delete ${n} for ${yt(d)}?`) ? !1 : (d === "all" ? en() : d === "faces" ? nn() : d === "sides" ? ge() : x(d) ? te(d) : Fe(d), !0), Di = () => {
    const d = e.value[n], b = e.value[`${n}Options`];
    return !(!d || typeof d != "object" || !b || typeof b != "object" || J.value && (!("faces" in d) || !("faces" in b)) || ne.value && (!("sides" in d) || !("sides" in b)));
  }, Sn = () => {
    const d = [], b = e.value[n], D = e.value[`${n}Options`];
    return !b || typeof b != "object" ? d.push(`Missing or invalid ${n} property in shape`) : (J.value && !("faces" in b) && d.push(`Missing faces property in ${n}`), ne.value && !("sides" in b) && d.push(`Missing sides property in ${n}`)), !D || typeof D != "object" ? d.push(`Missing or invalid ${n}Options property in shape`) : (J.value && !("faces" in D) && d.push(`Missing faces property in ${n}Options`), ne.value && !("sides" in D) && d.push(`Missing sides property in ${n}Options`)), d;
  }, si = (d) => {
    const b = [];
    if (!d || !Object.keys(d).length)
      return { valid: !0, errors: b };
    const D = Object.keys(d), G = Math.max(...D.map((X) => X.split("|").length));
    if (G <= 1)
      return { valid: !0, errors: b };
    for (const X of y.value) {
      let le;
      if (oe()) {
        const be = Li(e.value, n, X);
        be && typeof be == "object" && !Array.isArray(be) ? le = s.map((Ce) => {
          const Ee = be[Ce];
          if (Ee === !0) {
            const Ge = s.indexOf(Ce);
            return it(Ge)[0] || "";
          }
          return String(Ee || "");
        }).join("|") : le = "";
      } else {
        const be = ze(X, 0);
        le = typeof be == "string" ? be : "";
      }
      if (!le || le === "")
        continue;
      const we = le.includes("|") ? le.split("|") : [le], Ae = we.filter((be) => be.trim() !== "").length;
      if (Ae > 0 && Ae < G) {
        const be = we.join("|"), ft = D.some((Ee) => Ee.startsWith(be + "|")), Ce = D.includes(be);
        if (ft && !Ce) {
          const Ee = G - Ae, Ge = we.filter((Mt) => Mt.trim() !== "").join(", "), Et = yt(X);
          b.push(`${n} selection incomplete for ${Et}. Selected: "${Ge}" but ${Ee} more level${Ee > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: b.length === 0, errors: b };
  }, ji = (d) => si(d).errors, Ri = T(() => ti().map((d) => ({
    location: d,
    label: yt(d),
    isAggregate: ["all", "faces", "sides"].includes(d) || x(d)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: N,
    // Raw computed ref (not readonly wrapped)
    allLocations: gt(y),
    faceLocations: gt(j),
    sideLocations: gt(S),
    shouldShowAll: Ut,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: gt(Wt),
    renderLocations: gt(Ri),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: gt(J),
    supportsSides: gt(ne),
    supportsBoth: gt(ae),
    // Core operations
    setValue: tt,
    getValue: ze,
    setAll: Pt,
    getAll: ct,
    getAllState: ct,
    // Alias for backward compatibility
    deleteSingle: Fe,
    deleteAll: en,
    canDelete: dt,
    // Group-specific operations
    setAllFaces: At,
    setAllSides: Je,
    getAllFaces: Gt,
    getAllSides: Tt,
    deleteAllFaces: nn,
    deleteAllSides: ge,
    // UI helpers
    getLocationLabel: yt,
    getInputType: et,
    getInputConfig: xe,
    getAllInputConfig: Ne,
    getAllFacesInputConfig: $t,
    getAllSidesInputConfig: qe,
    getInputConfigForLocation: wt,
    getSelectOptions: He,
    getSingleOptionLabel: ei,
    // Pricing
    getPriceDisplay: qt,
    getCalculatedPrice: _t,
    // Layout & rendering
    getRenderLocations: ti,
    shouldShowDeleteButton: ni,
    getGridConfig: Nn,
    getLocationGroup: sn,
    getLocationScope: vn,
    isLocationVisible: an,
    // Options management
    getAvailableOptions: Te,
    getSingleAvailableOption: We,
    // Initialization & migration
    initialize: he,
    initializeExtra: he,
    // Alias for backward compatibility
    initializeCustomNames: Bi,
    migrateToSingle: bn,
    migrateToBoolean: ii,
    // Event handlers
    handleInputChange: zt,
    handleDelete: Vi,
    // Validation
    validateShape: Di,
    getValidationErrors: Sn,
    validateIncompleteSelections: si,
    getIncompleteSelectionErrors: ji,
    // Debug helpers (development only)
    getDebugInfo: (d, b) => ({
      mode: N.value,
      location: d,
      optionIndex: b,
      value: y.value.includes(d) ? ze(d, b) : "N/A",
      inputType: et(d, b),
      canDelete: dt(d),
      allState: ct(b),
      availableOptions: Te(b),
      locationGroup: sn(d),
      config: $.value,
      supportsFaces: J.value,
      supportsSides: ne.value,
      supportsBoth: ae.value,
      ...J.value && {
        allFacesState: Gt(b)
      },
      ...ne.value && {
        allSidesState: Tt(b)
      },
      ...y.value.includes(d) && {
        locationScope: vn(d)
      }
    })
  };
}, Sr = (t) => {
  const {
    customNames: e,
    usedNames: n,
    allowCustomNames: i,
    getSelectOptions: s,
    onCustomNameAdded: a,
    onCustomNameDeleted: o
  } = t, l = K(""), r = T(() => i && l.value?.trim()), h = T(() => !i || !e.value || e.value.length === 0 || e.value.length === 1 && e.value[0] === !0 ? !0 : e.value.filter((I) => typeof I == "string").every((I) => n.value.includes(I))), m = T(() => {
    const F = [];
    if (i && e.value && e.value.length > 0) {
      if (e.value.length === 1 && e.value[0] === !0)
        return F;
      const B = [...e.value.filter((M) => typeof M == "string")].sort();
      F.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), B.forEach((M) => {
        (n.value?.includes(M) ?? !1) || F.push({
          id: `delete-${M}`,
          label: `Delete "${M}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return F;
  }), k = () => {
    const F = l.value?.trim();
    if (!F) return;
    if (s("", 0).map((B) => B.value).includes(F)) {
      l.value = "";
      return;
    }
    a(F), l.value = "";
  }, p = (F) => {
    const I = F.item || F;
    if (I.id?.startsWith("delete-")) {
      const B = I.id.replace("delete-", "");
      if (n.value?.includes(B)) {
        console.warn(`Cannot delete ${t.extraType} type "${B}" - it is currently in use`);
        return;
      }
      o(B);
    }
  };
  return {
    newCustomName: l,
    canAddCustomName: gt(r),
    isActionMenuDisabled: gt(h),
    customNameActions: m,
    handleAddCustomName: k,
    handleCustomNameAction: p
  };
}, xr = (t) => {
  const {
    extraType: e,
    labels: n,
    shapeIndex: i,
    enablePricing: s,
    shouldShowAll: a,
    locations: o,
    locationGroups: l = K([]),
    shape: r = K(null),
    orientationModel: h = 0,
    getInputType: m,
    getInputConfig: k,
    getAllInputConfig: p,
    getInputConfigForLocation: F,
    canDelete: I,
    getLocationLabel: B,
    shouldShowDeleteButton: M
  } = t, V = T(() => {
    const ee = [], y = /* @__PURE__ */ new Set();
    if (l.value && l.value.length > 0 && l.value.forEach((S) => {
      S.hideIndividualLocations && S.locations.forEach((J) => y.add(J));
    }), l.value && l.value.length > 0 && l.value.forEach((S) => ee.push(S.id)), a.value && ee.push("all"), o.value && o.value.length > 0)
      ee.push(...o.value.filter((S) => S !== "all" && !y.has(S)));
    else {
      const S = Fi(e), J = Aa(e), ne = Ia(e), ae = Ca(e);
      J && ne && ae && (Oa(e).length > 0 && ee.push("faces"), La(e).length > 0 && ee.push("sides")), ee.push(...S.filter((Me) => !y.has(Me)));
    }
    let j = Array.from(new Set(ee));
    if ((h === 1 || h === 2) && r.value && r.value.w > r.value.l) {
      const S = ["side.l1", "side.l2", "side.w1", "side.w2"], J = j.map((ne, ae) => ({ loc: ne, i: ae })).filter((ne) => S.includes(ne.loc));
      if (J.length > 0) {
        const ne = J[0].i, ae = J.filter((Y) => Y.loc.includes(".w")).sort((Y, pe) => Y.loc.localeCompare(pe.loc)), oe = J.filter((Y) => Y.loc.includes(".l")).sort((Y, pe) => Y.loc.localeCompare(pe.loc)), Me = [...ae.map((Y) => Y.loc), ...oe.map((Y) => Y.loc)];
        j = j.filter((Y) => !S.includes(Y)), j.splice(ne, 0, ...Me);
      }
    }
    return j;
  }), U = T(() => `1fr${s ? " max-content" : ""}`), Q = (ee, y) => `${e}-${ee}-${n[y]}-${y}-${i}`, he = (ee) => {
    const y = B(ee);
    return `Delete ${e} for ${y}`;
  }, $ = (ee) => ({
    show: M(ee),
    enabled: I(ee),
    ariaLabel: he(ee)
  }), N = (ee, y) => m(ee, y);
  return {
    renderLocations: gt(V),
    gridStyle: gt(U),
    getInputId: Q,
    getDeleteAriaLabel: he,
    getInputConfigForLocation: F,
    getDeleteConfig: $,
    getInputTypeForLocation: N,
    // Re-export the passed functions for consistency
    getInputType: m,
    getInputConfig: k,
    getAllInputConfig: p,
    canDelete: I,
    shouldShowDeleteButton: M,
    getLocationLabel: B
  };
};
function Da(t) {
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
function Pr(t) {
  return t.map((e) => {
    const n = e.path.length > 0 ? e.path.join(".") : "root", i = Da(e), s = nl(e.message, i);
    return `[${n}] ${s}`;
  });
}
function Wn(t, e) {
  const n = t.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    errors: n.success ? void 0 : n.error.issues
  };
}
function Cr(t = {}) {
  try {
    let e = function(P) {
      if (!P || typeof P != "object") return P;
      const x = { ...P };
      if (delete x.issues, delete x.warnings, x.trim && typeof x.trim == "object") {
        const w = x.trim;
        ("x1" in w || "x2" in w || "y1" in w || "y2" in w) && (x.trim = {
          l1: w.y1 ?? w.l1 ?? 0,
          l2: w.y2 ?? w.l2 ?? 0,
          w1: w.x1 ?? w.w1 ?? 0,
          w2: w.x2 ?? w.w2 ?? 0
        });
      }
      if (x.extras?.banding?.sides && typeof x.extras.banding.sides == "object") {
        const w = x.extras.banding.sides;
        ("x1" in w || "x2" in w || "y1" in w || "y2" in w) && (x.extras.banding.sides = {
          l1: w.y1 ?? w.l1,
          l2: w.y2 ?? w.l2,
          w1: w.x1 ?? w.w1,
          w2: w.x2 ?? w.w2
        });
      }
      if (x.extras?.finish?.sides && typeof x.extras.finish.sides == "object") {
        const w = x.extras.finish.sides;
        ("x1" in w || "x2" in w || "y1" in w || "y2" in w) && (x.extras.finish.sides = {
          l1: w.y1 ?? w.l1,
          l2: w.y2 ?? w.l2,
          w1: w.x1 ?? w.w1,
          w2: w.x2 ?? w.w2
        });
      }
      if (x.extras?.planing?.sides && typeof x.extras.planing.sides == "object") {
        const w = x.extras.planing.sides;
        ("x1" in w || "x2" in w || "y1" in w || "y2" in w) && (x.extras.planing.sides = {
          l1: w.y1 ?? w.l1,
          l2: w.y2 ?? w.l2,
          w1: w.x1 ?? w.w1,
          w2: w.x2 ?? w.w2
        });
      }
      if (x.efficiencyOptions?.primaryCompression) {
        const w = x.efficiencyOptions.primaryCompression;
        w === "x" ? x.efficiencyOptions = {
          ...x.efficiencyOptions,
          primaryCompression: "l"
        } : w === "y" && (x.efficiencyOptions = {
          ...x.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const w in x)
        x[w] === null && delete x[w];
      return x;
    }, n = function(P, x) {
      if (!Array.isArray(P))
        return [];
      const w = [];
      for (let W = 0; W < P.length; W++) {
        const E = P[W], te = e(E);
        try {
          const ye = {
            ...te,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          E.autoId && (ye.autoId = E.autoId), delete ye.issues, delete ye.warnings;
          const Fe = new fi(ye, x);
          w.push(Fe);
        } catch (ye) {
          console.error(`Failed to create InputShape at index ${W}:`, ye);
        }
      }
      return w;
    }, i = function(P, x) {
      if (!Array.isArray(P)) return [];
      const w = [];
      for (let W = 0; W < P.length; W++) {
        const E = P[W], te = e(E);
        try {
          const ye = {
            ...te,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          E.autoId && (ye.autoId = E.autoId);
          const Fe = new pi(ye, x);
          w.push(Fe);
        } catch (ye) {
          console.error(`Failed to create InputStock at index ${W}:`, ye);
        }
      }
      return w;
    }, s = function(P) {
      const x = e(P), w = Wn(Tn, x);
      if (w.success && w.data) {
        const W = {
          ...w.data,
          issues: [],
          warnings: []
        };
        return P?.autoId && (W.autoId = P.autoId), new Zt(W);
      } else
        return console.error("Failed to parse input saw:", w.errors), new Zt({});
    }, a = function(P, x) {
      return Array.isArray(P) ? x && x.length ? hr(P, x) : P.map((w) => new Pa(w)).filter(Boolean) : [];
    }, o = function(P = {}) {
      try {
        const W = { ...Zn(
          (te) => {
            if (typeof te != "object" || te === null) return te;
            const ye = { ...te };
            for (const Fe in ye)
              ye[Fe] === null && delete ye[Fe];
            return ye;
          },
          $n
        ).parse(P), isNew: !0 }, E = new fi(W, ne);
        return E.createId(ae.value.length), ae.value.push(E), E;
      } catch (x) {
        return x instanceof gi && (console.error("Shape validation failed:", x.issues), U("part", "Invalid shape data", x.issues)), null;
      }
    }, l = function(P = {}) {
      try {
        const w = { ...kn.parse(P), isNew: !0 }, W = new pi(w, ne);
        return W.createId(oe.value.length), oe.value.push(W), W;
      } catch (x) {
        return x instanceof gi && (console.error("Stock validation failed:", x.issues), U("stock", "Invalid stock data", x.issues)), null;
      }
    }, r = function(P) {
      try {
        const x = P.toData(), w = $n.parse(x);
        return new fi(w, ne);
      } catch (x) {
        return x instanceof gi && (console.error("Shape clone validation failed:", x.issues), U("part", "Invalid shape data during cloning", x.issues)), null;
      }
    }, h = function(P) {
      try {
        const x = P.toData(), w = kn.parse(x);
        return new pi(w, ne);
      } catch (x) {
        return x instanceof gi && (console.error("Stock clone validation failed:", x.issues), U("stock", "Invalid stock data during cloning", x.issues)), null;
      }
    }, m = function(P, x) {
      const w = ae.value.findIndex((ye) => ye.autoId === P);
      if (w === -1) return !1;
      const W = ae.value[w], E = { ...W.toData(), ...x }, te = Wn($n, E);
      if (te.success && te.data) {
        if (W.update(te.data), !W.isNew) {
          const ye = Object.keys(x);
          W.validate({ fields: ye, index: w });
        }
        return !0;
      } else {
        const ye = te.errors ? Pr(te.errors) : [];
        console.error("Shape update validation failed:", ye);
        const Fe = te.errors?.[0];
        if (Fe) {
          const dt = Da(Fe);
          new Dt({
            category: ["part"],
            message: Fe.message,
            // This is the translation key from Zod error map
            params: dt,
            issues: q.value
          });
        } else
          U("part", "Invalid shape update");
        return !1;
      }
    }, k = function(P, x) {
      const w = ae.value.findIndex((E) => E.autoId === P);
      if (w === -1) return !1;
      const W = ae.value[w];
      return W.validate({ fields: [x], index: w }), W.issues.length === 0;
    }, p = function(P, x) {
      const w = oe.value.find((te) => te.autoId === P);
      if (!w) return !1;
      const W = { ...w.toData(), ...x }, E = Wn(kn, W);
      return E.success && E.data ? (w.update(E.data), w.isNew || V(), !0) : (console.error("Stock update validation failed:", E.errors), U("stock", "Invalid stock update", E.errors), !1);
    }, F = function(P, x) {
      const w = oe.value.findIndex((E) => E.autoId === P);
      if (w === -1) return !1;
      const W = oe.value[w];
      return W.validate({ fields: [x], index: w }), lt(oe), W.issues.length === 0;
    }, I = function(P) {
      if (ae.value.length === 1) return !1;
      const x = ae.value.findIndex((w) => w.autoId === P);
      return x === -1 ? !1 : (ae.value.splice(x, 1), !0);
    }, B = function(P) {
      if (oe.value.length === 1) return !1;
      const x = oe.value.findIndex((w) => w.autoId === P);
      return x === -1 ? !1 : (oe.value.splice(x, 1), !0);
    }, M = function(P) {
      de.value = !0;
      const x = [];
      try {
        ae.value.forEach((w) => w.issues.length = 0);
        for (let w = 0; w < ae.value.length; w++) {
          const W = ae.value[w];
          if (W.isNew)
            continue;
          const E = W.validate({
            inputStockList: oe.value,
            index: w,
            stockType: P?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: P
          });
          x.push(...E);
        }
        ae.value.some((w) => Number(w.q) > 0) || new Dt({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: x
        });
      } finally {
        de.value = !1;
      }
      return q.value = x, x;
    }, V = function(P) {
      de.value = !0;
      const x = [];
      try {
        oe.value.forEach((w) => w.issues.length = 0);
        for (let w = 0; w < oe.value.length; w++) {
          const E = oe.value[w].validate({ saw: P }, w);
          x.push(...E);
        }
        oe.value.some((w) => Number(w.q) > 0 || w.autoAdd) || new Dt({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: x
        });
      } finally {
        de.value = !1;
      }
      return q.value = x, x;
    }, U = function(P, x, w) {
      new Dt({
        category: [P],
        message: x,
        issues: q.value
      }), w && console.log("Validation details:", w);
    }, Q = function() {
      q.value = [], ae.value.forEach((P) => P.issues.length = 0), oe.value.forEach((P) => P.issues.length = 0);
    }, he = function(P = {}) {
      const x = [], w = [], W = P.inputShapesOverride ?? ae.value;
      if (!W.length)
        return { shapeList: [], issues: [] };
      for (let E = 0; E < W.length; E++) {
        const te = W[E];
        if (!te.q) continue;
        te.createId(E), te.applyPartTrim(P.trim, P.stockType);
        const ye = te.toShape();
        x.push(ye), w.push(...ye.issues);
      }
      return { shapeList: x, issues: w };
    }, $ = function(P) {
      if (!oe.value.length)
        return { stockList: [], issues: [] };
      const x = [], w = [];
      for (let W = 0; W < oe.value.length; W++) {
        const E = oe.value[W];
        if (!E.q && !E.autoAdd) continue;
        E.createId(W), E.saw = P;
        const te = E.toStock();
        x.push(te), w.push(...te.issues);
      }
      return { stockList: x, issues: w };
    }, N = function(P, x = ne) {
      const w = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (P.saw) {
        const W = Wn(Tn, e(P.saw));
        if (W.success && W.data) {
          const E = { ...W.data };
          P.saw?.autoId && (E.autoId = P.saw.autoId), Me.value = new Zt(E), w.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", W.errors), w.saw.failed = !0;
      }
      if (P.shapes) {
        const W = n(P.shapes, x);
        w.shapes.success = W.length, w.shapes.failed = P.shapes.length - W.length, ae.value = W;
      }
      if (P.stock) {
        const W = i(P.stock, x);
        w.stock.success = W.length, w.stock.failed = P.stock.length - W.length, oe.value = W;
      }
      if (P.groups) {
        const W = a(P.groups);
        w.groups.success = W.length, w.groups.failed = P.groups.length - W.length, Y.value = W;
      }
      return P.extrasOptions && (pe.value = { ...P.extrasOptions }), w;
    }, ee = function() {
      return {
        shapes: ae.value.map((P) => P.toData()),
        stock: oe.value.map((P) => P.toData()),
        inputUserGroups: Y.value.map((P) => P.toData()),
        extrasOptions: pe.value
      };
    }, y = function() {
      ae.value = [], oe.value = [], Y.value = [], Q();
    }, j = function(P) {
      const x = { ...Me.value.toData(), ...P }, w = Wn(Tn, x);
      return w.success && w.data ? (Me.value.update(w.data), !0) : (console.error("InputSaw update validation failed:", w.errors), U("saw", "Invalid saw update", w.errors), !1);
    }, S = function() {
      Me.value = new Zt({});
    }, J = function() {
      const P = Me.value.validate();
      return q.value = [...q.value.filter((x) => x.category?.[0] !== "saw"), ...P], P;
    };
    const { numberFormat: ne = "decimal" } = t, ae = Un("inputs/inputShapes", [], {
      serializer: {
        read: (P) => {
          if (!P) {
            const W = "GlobalStore/inputShapes", E = Zs(W);
            if (E)
              P = E, Js(W);
            else return [];
          }
          let x;
          try {
            x = JSON.parse(P);
          } catch (W) {
            return console.error("Failed to parse input shapes JSON:", W), [];
          }
          return n(x, ne);
        },
        write: (P) => {
          const w = P.filter((E) => !E?.multiEdit).map((E) => E.toData());
          return JSON.stringify(w);
        }
      },
      listenToStorageChanges: !1
    }), oe = Un("inputs/inputStock", [], {
      serializer: {
        read: (P) => {
          if (!P) return [];
          let x;
          try {
            x = JSON.parse(P);
          } catch (W) {
            return console.error("  Failed to parse stock JSON:", W), [];
          }
          return i(x, ne);
        },
        write: (P) => {
          const w = P.filter((E) => !E?.multiEdit).map((E) => E.toData());
          return JSON.stringify(w);
        }
      },
      listenToStorageChanges: !1
    }), Me = Un("inputs/inputSaw", new Zt({}), {
      serializer: {
        read: (P) => {
          if (!P) {
            const w = Zs("saw");
            if (w)
              P = w, Js("saw");
            else return new Zt({});
          }
          try {
            const x = JSON.parse(P);
            return s(x);
          } catch (x) {
            return console.error("  Failed to parse saw JSON:", x), new Zt({});
          }
        },
        write: (P) => {
          if (!P)
            return JSON.stringify({});
          const x = P.toData();
          return JSON.stringify(x);
        }
      },
      listenToStorageChanges: !1
    }), Y = Un("inputs/inputUserGroups", [], {
      serializer: {
        read: (P) => a(P ? JSON.parse(P) : []),
        write: (P) => JSON.stringify(P.map((x) => x.toData()))
      }
    }), pe = Un("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (P) => {
          if (!P) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(P);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (P) => JSON.stringify(P)
      }
    }), q = K([]), de = K(!1);
    ae.value.length === 0 && (ae.value = [new fi({ isNew: !0 })]), oe.value.length === 0 && (oe.value = [new pi({ isNew: !0 })]);
    const $e = T(() => ae.value.reduce((P, x) => {
      const w = Number(x?.q);
      return w && w > 0 && !x?.multiEdit ? P + w : P;
    }, 0)), re = T(() => oe.value.reduce((P, x) => {
      const w = Number(x?.q);
      return w && w > 0 && !x?.multiEdit ? P + w : P;
    }, 0)), rt = T(() => ae.value.reduce((P, x) => x?.multiEdit ? P : P + 1, 0)), nt = T(() => oe.value.reduce((P, x) => x?.multiEdit ? P : P + 1, 0)), tt = T(() => q.value.length > 0), ze = () => [
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
    ], Pt = K(null), ct = K(null), en = () => {
      Pt.value = null;
    }, Ct = Q, ot = (P = null) => {
      const x = P?.inputShapesOverride ?? ae.value, w = M(P?.saw || void 0);
      if (x.length) {
        tl(x, oe.value, P?.saw || Me.value);
        const W = x.flatMap((E) => E.issues);
        return [...w, ...W];
      }
      return w;
    }, It = async (P, x = "decimal") => {
      const w = P?.inputSaw, W = P?.inputShapes, E = P?.inputStock, te = P?.inputUserGroups, ye = N({
        saw: w,
        shapes: W,
        stock: E,
        groups: te
      }, x);
      return lt(ae), lt(oe), await vt(), ye;
    }, ut = (P, x = "decimal") => N({ shapes: P }, x).shapes.success > 0, tn = (P, x = "decimal") => N({ stock: P }, x).stock.success > 0, At = (P, x, w, W, E) => {
      x[0]?.length > 0 && (pe.value[P] || (pe.value[P] = { options: [] }), pe.value[P].options = [...x[0]]), w && W && x.length > 0 ? bs(P, {
        options: x,
        // Use all columns extracted from pricing
        labels: w,
        pricing: W,
        displayNames: E
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: w, pricingData: W, pricingOptionsLength: x.length });
    }, Je = () => {
      if (!Object.values(pe.value).some(
        (w) => w.options.length > 0
      )) return;
      const x = (w, W) => {
        const E = {};
        for (const te of W)
          E[te] = [...w];
        return E;
      };
      return {
        banding: pe.value.banding.options.length > 0 ? {
          options: {
            sides: x(pe.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: pe.value.finish.options.length > 0 ? {
          options: {
            faces: x(pe.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: pe.value.planing.options.length > 0 ? {
          options: {
            sides: x(pe.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: x(pe.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, Gt = (P) => {
      if (!oe.value.length) return "n";
      const x = P.material, w = P.t, W = oe.value.filter((Fe) => Fe.material === x && Fe.t === w);
      if (!W.length)
        return "n";
      let E = !1, te = !1, ye = !1;
      for (const Fe of W)
        Fe.grain === "l" ? (E = !0, te = !0) : Fe.grain === "w" && (E = !0, ye = !0);
      return E ? te && ye ? "y" : te ? "l" : ye ? "w" : "n" : "n";
    }, Tt = (P) => {
      for (const x of ae.value)
        Vs(x, P);
      for (const x of oe.value)
        Vs(x, P);
    };
    let nn = !1;
    return Ue(ae, (P) => {
      nn || !P.length || vt(() => {
        const x = ["banding", "finish", "planing"], w = [];
        x.forEach((W) => {
          const E = /* @__PURE__ */ new Set();
          if (P.forEach((te) => {
            const ye = te.extras?.[W];
            ye && (ye.faces && Object.values(ye.faces).forEach((Fe) => {
              typeof Fe == "string" && Fe.trim() && Fe !== "Y" && E.add(Fe);
            }), ye.sides && Object.values(ye.sides).forEach((Fe) => {
              typeof Fe == "string" && Fe.trim() && Fe !== "Y" && E.add(Fe);
            }));
          }), E.size > 0) {
            const te = Jt(W);
            if (te) {
              const ye = te.options[0];
              if (Array.isArray(ye) && (ye.length === 0 || typeof ye[0] == "string")) {
                const Fe = new Set(ye), dt = Array.from(E).filter((yt) => !Fe.has(yt));
                if (dt.length > 0) {
                  const yt = [...ye, ...dt];
                  bs(W, {
                    ...te,
                    options: [yt, ...te.options.slice(1)]
                  });
                }
              }
            }
          }
        }), x.forEach((W) => {
          const E = wr(W, P);
          E.cleanedCount > 0 && w.push(
            `${W}: ${E.invalidOptions.join(", ")}`
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
        }, 500)), nn = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: oe,
        inputShapes: ae,
        inputUserGroups: Y,
        currentInputShape: Pt,
        selectedSaw: ct,
        inputSaw: Me
      },
      // State
      inputShapes: ae,
      inputStock: oe,
      inputUserGroups: Y,
      inputSaw: Me,
      currentInputShape: Pt,
      selectedSaw: ct,
      validationIssues: q,
      isValidating: de,
      // Computed
      totalInputShapes: $e,
      totalInputStock: re,
      totalInputShapeLines: rt,
      totalInputStockLines: nt,
      hasValidationIssues: tt,
      // Actions
      addInputShape: o,
      addInputStock: l,
      cloneInputShape: r,
      cloneInputStock: h,
      updateInputShape: m,
      updateInputStock: p,
      updateInputSaw: j,
      removeInputShape: I,
      removeInputStock: B,
      reset: en,
      resetInputSaw: S,
      clear: y,
      clearIssues: Ct,
      // Validation
      validateInputShapes: ot,
      validateInputShapeField: k,
      validateInputStock: V,
      validateInputStockField: F,
      validateInputSaw: J,
      clearValidationIssues: Q,
      // Conversion
      createShapeList: he,
      createStockList: $,
      // Import/Export/Update
      importData: N,
      exportData: ee,
      updateInputs: It,
      importInputShapes: ut,
      importInputStock: tn,
      // Additional functions
      getShapeGrainSummary: Gt,
      updateNumberFormat: Tt,
      getSpecialShapeFields: ze,
      // Extras Options Management
      extrasOptions: pe,
      setExtrasOptionsFromPricing: At,
      getCentralizedOptions: Je
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let os = null;
function ja(t = { numberFormat: "decimal" }) {
  try {
    return os || (os = Cr(t)), os;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
function Ir() {
  const t = Date.now(), e = Math.random().toString(36).substring(2, 15), n = Math.random().toString(36).substring(2, 15);
  return `${t.toString(36)}-${e}-${n}`;
}
const ln = K([]), Ar = 6;
function Ra() {
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
      id: Ir(),
      message: ts(n),
      additional: s.length > 5 ? s.slice(0, 5).map((h) => ts(h)).join("<br>") + "<br>..." : s.slice(0, 5).map((h) => ts(h)).join("<br>"),
      type: i,
      persistent: a.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: o
    }, r = a.maxNotices ?? Ar;
    if (ln.value.length >= r) {
      const h = ln.value.findIndex((m) => !m.persistent);
      if (h !== -1)
        ln.value.splice(h, 1);
      else if (!l.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), l.id;
    }
    return ln.value.push(l), !l.persistent && a.timeout !== 0 && setTimeout(() => e(l.id), a.timeout || 6e3), l.id;
  }, e = (n) => {
    ln.value.findIndex((s) => s.id === n) !== -1 && (ln.value = ln.value.filter((s) => s.id !== n));
  };
  return {
    notices: ln,
    addNotice: t,
    dismissNotice: e
  };
}
class Xs {
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
    const n = e.banding, i = "_banding" in e ? e._banding : void 0, s = Re(e) ? e.bandingOptions : void 0;
    if (!n && !i && !s) return !1;
    if (n && n instanceof Rn) {
      const m = n.sides;
      if (m && typeof m == "object" && ("x1" in m || "x2" in m || "y1" in m || "y2" in m)) {
        const p = this.migrateSideNames(m);
        return n.sides = p, !0;
      }
      return !1;
    }
    const a = {}, o = {}, l = { sides: {} };
    if (n && typeof n == "object") {
      const m = this.migrateSideNames(n);
      for (const [k, p] of Object.entries(m))
        Gn.includes(k) && (a[k] = p);
    }
    if (i && typeof i == "object") {
      const m = this.migrateSideNames(i);
      for (const [k, p] of Object.entries(m))
        Gn.includes(k) && (o[k] = p);
    }
    if (s && typeof s == "object") {
      s.all && (l.sides.all = s.all);
      for (const [m, k] of Object.entries(s))
        m !== "all" && Gn.includes(m) && k && (l.sides[m] = k);
    }
    const r = new Rn(Object.keys(a).length > 0 ? { sides: a } : {}), h = Object.keys(o).length > 0 ? new Rn({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = r : Re(e) && (e.banding = r), h && "_banding" in e && (e._banding = h), Re(e) && s && (e.bandingOptions = l), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const n = e.finish, i = "_finish" in e ? e._finish : void 0, s = Re(e) ? e.finishOptions : void 0;
    if (!n && !i && !s || n && n instanceof qn)
      return !1;
    const a = {}, o = {}, l = { faces: {} };
    if (n && typeof n == "object")
      for (const [m, k] of Object.entries(n))
        _n.includes(m) && (a[m] = k);
    if (i && typeof i == "object")
      for (const [m, k] of Object.entries(i))
        _n.includes(m) && (o[m] = k);
    if (s && typeof s == "object") {
      s.all && (l.faces.all = s.all);
      for (const [m, k] of Object.entries(s))
        m !== "all" && _n.includes(m) && k && (l.faces[m] = k);
    }
    const r = new qn(Object.keys(a).length > 0 ? { faces: a } : {}), h = Object.keys(o).length > 0 ? new qn({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = r : Re(e) && (e.finish = r), h && "_finish" in e && (e._finish = h), Re(e) && s && (e.finishOptions = l), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(e) {
    let n = !1;
    const i = "extras" in e && e.extras ? e.extras : e;
    if (i.banding) {
      const s = Ds("banding");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Gn) {
          const o = `side.${a}`, l = Li(e, "banding", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const h = { ...l };
            for (const m of s.labels)
              if (h[m] === !0) {
                const p = s.labels.indexOf(m);
                if (p !== -1 && s.options[p] && Array.isArray(s.options[p])) {
                  const F = s.options[p];
                  F.length === 1 && (h[m] = F[0], r = !0);
                }
              }
            r && (js(e, "banding", o, h), n = !0);
          }
        }
    }
    if (i.finish) {
      const s = Ds("finish");
      if (s && s.labels && s.labels.length > 1)
        for (const a of _n) {
          const o = `face.${a}`, l = Li(e, "finish", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const h = { ...l };
            for (const m of s.labels)
              if (h[m] === !0) {
                const p = s.labels.indexOf(m);
                if (p !== -1 && s.options[p] && Array.isArray(s.options[p])) {
                  const F = s.options[p];
                  F.length === 1 && (h[m] = F[0], r = !0);
                }
              }
            r && (js(e, "finish", o, h), n = !0);
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
    if (n && typeof n == "object" && !(n instanceof Rn) && !("sides" in n) && !("faces" in n))
      return !0;
    if ("_banding" in e) {
      const s = e._banding;
      if (s && typeof s == "object" && !(s instanceof Rn) && !("sides" in s) && !("faces" in s))
        return !0;
    }
    const i = e.finish;
    if (i && typeof i == "object" && !(i instanceof qn) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_finish" in e) {
      const s = e._finish;
      if (s && typeof s == "object" && !(s instanceof qn) && !("sides" in s) && !("faces" in s))
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
          const s = Object.keys(n.sides).filter((a) => !Gn.includes(a));
          if (s.length > 0)
            throw new Error(`Invalid side keys in banding: ${s.join(", ")}`);
        }
      }
      const i = e.finish;
      if (i) {
        if ("sides" in i && i.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in i && i.faces) {
          const s = Object.keys(i.faces).filter((a) => !_n.includes(a));
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
    return "_banding" in e && e._banding && (n._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (n._finish = JSON.parse(JSON.stringify(e._finish))), Re(e) && (e.bandingOptions && (n.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (n.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), n;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, n) {
    "extras" in e && e.extras ? (n.banding && (e.extras.banding = n.banding), n.finish && (e.extras.finish = n.finish)) : Re(e) && (n.banding && (e.banding = n.banding), n.finish && (e.finish = n.finish)), n._banding && "_banding" in e && (e._banding = n._banding), n._finish && "_finish" in e && (e._finish = n._finish), Re(e) && (n.bandingOptions && (e.bandingOptions = n.bandingOptions), n.finishOptions && (e.finishOptions = n.finishOptions));
  }
}
const Or = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Lr = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function ys(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function Fr(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function Ti(t = !1) {
  return {
    a: t,
    b: t
  };
}
function Tr(t = !1) {
  return {
    sides: ys(t),
    faces: Ti(t)
  };
}
function $r(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function Er(t) {
  const e = {};
  for (const [n, i] of Object.entries(Or))
    n in t && (e[i] = t[n]);
  return e;
}
function Mr(t) {
  const e = {};
  for (const [n, i] of Object.entries(Lr))
    n in t && (e[i] = t[n]);
  return e;
}
function mt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function Yt(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, n = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && n && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const s = Er(t), a = {};
    return "l1" in s && (a.l1 = mt(s.l1)), "l2" in s && (a.l2 = mt(s.l2)), "w1" in s && (a.w1 = mt(s.w1)), "w2" in s && (a.w2 = mt(s.w2)), a;
  }
  const i = {};
  return "l1" in t && (i.l1 = mt(t.l1)), "l2" in t && (i.l2 = mt(t.l2)), "w1" in t && (i.w1 = mt(t.w1)), "w2" in t && (i.w2 = mt(t.w2)), Object.keys(i).length > 0 ? i : t;
}
function Nr(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function On(t) {
  return !t || !Array.isArray(t) ? t : t.map(Nr);
}
function Br(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [n, i] of Object.entries(t.banding))
      i === !0 || i === !1 ? e[n] = i : typeof i == "number" ? e[n] = mt(i) : typeof i == "string" && i.length > 0 && (e[n] = i);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [n, i] of Object.entries(t.bandingType))
      if (t.banding) {
        const s = e[n];
        (s === !0 || typeof s == "string" && s.length > 0) && (typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i)));
      } else
        typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i));
  return Object.keys(e).length > 0 ? e : void 0;
}
function ws(t) {
  return t && Mr(t);
}
function Vr(t) {
  t?.type && delete t.type, Dr.call(this, t), jr.call(this, t), Rr.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => ks(e));
}
function Dr(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function jr(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function Rr(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function ks(t) {
  !t || typeof t != "object" || (Xs.needsMigration(t) && Xs.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Ga(t) {
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
function Zp(t) {
  if (!(!t || typeof t != "object")) {
    if (Vr(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = Yt(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = Yt(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = Yt(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: Yt(e.trim)
    } : e)), t.options) {
      if (Ga(t.options), t.options.bandingLocations && (t.options.bandingLocations = On(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = On(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = On(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const n = t.options.extrasLocationGroups[e];
          n && Array.isArray(n) && n.forEach((i) => {
            i.locations && (i.locations = On(i.locations));
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
        n.locations && Array.isArray(n.locations) && (n.locations = On(n.locations)), n.groups && Array.isArray(n.groups) && n.groups.forEach((i) => {
          i.locations && (i.locations = On(i.locations));
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => ks(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && ks(t);
  }
}
function Gr(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = qr(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(_r)), Array.isArray(e.parts) && (e.parts = e.parts.map(Ur)), e;
}
function qr(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const n = e.efficiencyOptions.primaryCompression;
    n === "x" ? e.efficiencyOptions.primaryCompression = "l" : n === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), e.cutPreference === "flex" ? e.cutPreference = "l" : e.cutPreference === "" && (e.cutPreference = void 0), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function _r(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = Yt(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function Ur(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const n = Br(e);
    n && Object.keys(n).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = Yt(n)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = Yt(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const n = {};
      "a" in e.finish && (n.a = mt(e.finish.a)), "b" in e.finish && (n.b = mt(e.finish.b)), e.extras.finish.faces = n;
    } else
      e.extras.finish.sides = Yt(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = Yt(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const n = e.extras.finish.faces;
    "a" in n && (n.a = mt(n.a)), "b" in n && (n.b = mt(n.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
function xt(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(xt);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || (e[n] = xt(i));
  return e;
}
function $i(t) {
  if (!t || typeof t != "object") return null;
  if (Array.isArray(t)) return t.map($i);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || n === "enabled" || n === "type" || n === "issues" || n === "warnings" || (e[n] = i && typeof i == "object" ? $i(i) : i);
  return Object.keys(e).length > 0 ? e : null;
}
function qa(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: n,
    autoId: i,
    issues: s,
    warnings: a,
    ...o
  } = t;
  return xt(o);
}
function Wr(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function zr(t) {
  return t.rot !== void 0 ? t.rot ? 1 : 0 : t.rotated !== void 0 ? t.rotated ? 1 : 0 : t.isRotated !== void 0 ? t.isRotated ? 1 : 0 : t.w > t.l ? 1 : 0;
}
H({
  // Job metadata
  jobId: _().describe("Job identifier"),
  // Input configuration (preserved)
  saw: Tn.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ue(ol).describe("Stock items"),
  parts: ue(Rs).describe("Parts with coordinates and properties"),
  cuts: ue(al).optional().describe("Cut instructions"),
  offcuts: ue(sl).optional().describe("Remaining offcut pieces"),
  unusableParts: ue(Rs).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: il.describe("Complete analysis and metrics")
});
H({
  saw: Tn.describe("Saw configuration"),
  stock: ue(kn).describe("Stock items"),
  parts: ue($n).describe("Parts to cut"),
  groups: ue(ll).optional().describe("User-defined part groups with XY positions"),
  webhook: v().url().optional().describe("Webhook URL for async result delivery")
});
H({
  error: v().describe("Error message"),
  details: zs().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: jt("V3").describe("API version"),
  help: v().optional().describe("Helpful migration guidance"),
  example: zs().optional().describe("Example of correct format"),
  docs: v().url().optional().describe("Link to V3 documentation")
});
function Hr(t) {
  if (!t) return null;
  const {
    fitsAll: e,
    fitsAny: n,
    largestShape: i,
    smallestShape: s,
    ...a
  } = t;
  return xt(a);
}
function Kr(t) {
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
    trim: xt(t.trim),
    cost: t.cost ?? 0,
    notes: t.notes ?? "",
    code: t.code,
    analysis: Hr(t.analysis),
    stack: t.stack?.number ?? 1,
    customData: xt(t.customData)
  } : null;
}
function Zr(t, e) {
  if (!t) return null;
  let n = null;
  const i = Wr(t.stock);
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
    rot: zr(t),
    added: t.added ?? !1,
    notes: t.notes ?? "",
    code: t.code,
    stock: n,
    trim: xt(t.trim),
    extras: $i(t.extras),
    customData: xt(t.customData)
  };
  return t.machining && (s.machining = qa(t.machining)), s;
}
function Jr(t) {
  if (!t) return null;
  const e = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    notes: t.notes ?? "",
    trim: xt(t.trim),
    extras: $i(t.extras),
    customData: xt(t.customData)
  };
  return t.machining && (e.machining = qa(t.machining)), t.issues && Array.isArray(t.issues) && t.issues.length > 0 ? e.issues = t.issues.map((n) => ({
    message: Kl(n.message) || n.message,
    type: n.type,
    category: n.category,
    field: n.field
  })) : e.issues = [], e;
}
function Yr(t) {
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
function Xr(t) {
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
function Qr(t) {
  const e = t.stockList || t.stock || [], n = /* @__PURE__ */ new Map();
  for (const h of e) {
    const m = { id: h.id || "" };
    h.code && (m.code = h.code), h.id && n.set(h.id, m), h.autoId && h.autoId !== h.id && n.set(h.autoId, m);
  }
  const i = e.map(Kr), s = (t.shapeList || t.parts || []).map((h) => Zr(h, n)), a = (t.unusableShapes || []).map(Jr), o = (t.cutList || t.cuts || []).map(Yr), l = (t.offcuts || []).map(Xr);
  return {
    jobId: t.jobId,
    saw: xt(t.saw),
    stock: i,
    parts: s,
    cuts: o,
    offcuts: l,
    unusableParts: a,
    metadata: xt(t.metadata)
  };
}
let bi = null;
function ec() {
  const t = K(null), e = K(null), n = K(null), i = Fn([]), s = Fn([]), a = Fn([]), o = Fn([]), l = K([]), r = K(null), h = Fn([]), m = K(null), k = K(null), p = K({});
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
    currentCutIndex: m,
    activeShape: k,
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
      currentCutIndex: m,
      cuttingPlans: p
    }
  };
}
function Mi() {
  if (bi) return bi;
  const t = ec(), e = T(() => t.activeStockAutoId.value ? ae(t.activeStockAutoId.value) : []), n = T(() => !t.activeStockAutoId.value || !t.stockList.value?.length ? null : ne(t.activeStockAutoId.value)), i = T(() => !n.value || !t.cutList.value?.length ? [] : Me(n.value.autoId)), s = T(() => !n.value || !t.segmentList.value?.length ? [] : oe(t.activeStockAutoId.value)), a = T(() => t.stockList.value?.length ? Y(t.stockList.value) : []), o = T(() => t.shapeList.value.filter((q) => q.added)), l = T(() => t.shapeList.value?.length ? t.shapeList.value.filter((q) => !q.added) : []), r = T(() => t.shapeList.value?.length ? ul(t.shapeList.value) : []), h = T(() => t.shapeList.value?.length ? t.shapeList.value.filter((q) => !q.duplicate) : []), m = T(() => h.value.filter((q) => q.added)), k = T(() => t.stockList.value?.length ? t.stockList.value.filter((q) => q.used && !q.duplicate) : []), p = T(() => k.value.filter((q) => q.used)), F = T(() => t.cutList.value?.length ? i.value.reduce((q, de) => q + de.area, 0) : 0), I = T(() => !t.stockList.value?.length || !n.value ? 0 : n.value ? n.value.area : 0), B = T(() => !t.shapeList.value?.length || !e.value ? 0 : e.value ? e.value.reduce((q, de) => q + de.area, 0) : 0), M = T(() => !t.cutList.value?.length || !n.value ? null : n.value.cutType), V = T(() => t.stockList.value?.length ? t.stockList.value.filter((de) => de.used && !de.isStacked) : []), U = T(() => t.stockList.value?.length ? cl(n.value, t.stockList.value) : 0), Q = T(() => {
    if (!t.stockList.value?.length) return 0;
    let q = I.value ? (F.value + B.value) / I.value : null;
    return q > 1 && (q = 1), q;
  }), he = T(() => t.activeStockAutoId.value && t.cuttingPlans.value?.[t.activeStockAutoId.value] || null), $ = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, N = () => {
    t.saw.value = null, t.activeStockAutoId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [], t.cuttingPlans.value = {};
  }, ee = (q, de) => {
    q in this && this[q]?.sort(xi[de]);
  }, y = (q) => {
    lt(q);
  }, j = () => {
    lt(t.shapeList);
  }, S = () => {
    lt(t.stockList);
  }, J = (q) => {
    if (!q?.shapeList?.some((de) => de.added)) {
      N();
      return;
    }
    t.metadata.value = q.metadata, t.unusableShapes.value = q.unusableShapes || [];
    try {
      q?.saw && (t.saw.value = new Fa(q.saw));
      const de = rl(q, {
        preventAutoRotation: !0
      });
      t.stockList.value = de.stockList, t.shapeList.value = de.shapeList, t.cutList.value = de.cutList, t.segmentList.value = de.segmentList, t.offcuts.value = de.offcuts, t.cuttingPlans.value = q.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((re) => lt(t[re])), t.activeStockAutoId.value = Y(t.stockList.value)?.[0]?.autoId || null;
    } catch (de) {
      console.error("Error updating from result", de);
    }
  }, ne = (q) => t.stockList.value?.length ? t.stockList.value.find((de) => de.autoId === q) : null, ae = (q) => t.shapeList.value?.length ? t.shapeList.value.filter((de) => de.added && de?.stock?.autoId === q) : [], oe = (q) => t.segmentList.value?.length ? t.segmentList.value.filter(($e) => $e?.stock?.autoId === q) : [], Me = (q) => {
    const de = t?.cutList?.value;
    return !de && !de.length ? [] : de.filter(($e) => $e?.stock?.autoId === q).sort(($e, re) => $e?.guillotineState?.order - re?.guillotineState?.order);
  }, Y = (q) => q?.length ? q.filter((de) => de.used === !0) : [], pe = (q) => {
    t.activeStockAutoId.value !== q && (t.activeShape.value = null, t.activeStockAutoId.value = q);
  };
  return bi = {
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
    uniqueAddedShapes: m,
    unplacedShapeTally: r,
    uniqueStock: k,
    uniqueUsedStock: p,
    activeStock: n,
    activeCuts: i,
    activeCutsArea: F,
    activeCutType: M,
    usedStock: a,
    stackedStock: V,
    activeStockArea: I,
    activeShapeArea: B,
    activeStockStackCount: U,
    activeTotalArea: Q,
    activeSegments: s,
    cuttingPlan: he,
    // methods
    reset: $,
    clear: N,
    sortItems: ee,
    update: y,
    updateShapes: j,
    updateStock: S,
    updateFromResult: J,
    getStock: ne,
    getShapes: ae,
    getSegments: oe,
    getCuts: Me,
    setActiveStockAutoId: pe
  }, bi;
}
function tc(t) {
  const e = t.x, n = t.x + t.l, i = Vt().domain([e, n]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(n)]), s = t.y, a = t.y + t.w, o = Vt().domain([s, a]).range([this.scales.yPositionScale(s), this.scales.yPositionScale(a)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(ms(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(ms(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(vs(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(vs(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function nc() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(ir(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(sr(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function _a(t, e, n) {
  !n || !t?.length || t.forEach((i, s) => {
    const [a, o] = i;
    n === "x" ? ic.call(this, a, o, e[s]) : sc.call(this, a, o, e[s]);
  });
}
function ic(t, e, n) {
  const i = Vt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), s = Ua(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(ms(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, r) => r[l]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function sc(t, e, n) {
  const i = Vt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), s = Ua(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(vs(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  ac(a), this.axes.cutMeasurementYAxes.push(a);
}
function Ua(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function ac(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, n, i) => i[n]?.getBBox()?.height + 10).attr("dx", (e, n, i) => i[n]?.getBBox()?.width / 4).attr("transform", (e, n, i) => "rotate(90) translate(" + i[n]?.getBBox()?.width / 4 + ")");
}
function Xn() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function oc() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Ni() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Cs(t) {
  return t.autoId;
}
function lc(t, e) {
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
function ls({ parent: t, near: e, far: n, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, n, ...i].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, Cs).join(
    (a) => a.append("rect").attr("class", "segment").call((o) => Qs.call(this, o)),
    (a) => a.call((o) => Qs.call(this, o)),
    (a) => a.remove()
  ), this.state.env === "development" && rc.call(this, s), !this.settings.app && this.state.env === "development" && cc.call(this);
}
function Qs(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, n) => e.id !== "root" && n === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function rc(t) {
  this.selections.segmentGroup.selectAll("text").data(t, Cs).join(
    (e) => e.append("text").attr("class", "segment-text").call((n) => ea.call(this, n)),
    (e) => e.call((n) => ea.call(this, n)),
    (e) => e.remove()
  );
}
function ea(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function cc() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function Wa(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let n;
  if (e) {
    for (const s of this.props.segments.value)
      if (n = lc(s, e), n) break;
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
function za(t, e = []) {
  if (!t) return e;
  if (t.offcut && e.push(t), t.children && Array.isArray(t.children))
    for (const n of t.children)
      za(n, e);
  return e;
}
function uc() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const t = [];
  for (const n of this.props.segments.value)
    za(n, t);
  if (!t.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const e = (n) => n.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(t, Cs).join(
    (n) => n.append("rect").attr("class", "segment offcut").call(e),
    (n) => n.call(e),
    (n) => n.remove()
  );
}
const { currentCutIndex: dc } = Mi();
function fc() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => ta.call(this, e)),
    (t) => t.call((e) => ta.call(this, e)),
    (t) => t.remove()
  ), Za.call(this));
}
function ta(t) {
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
function Ha(t, e, n) {
  return t.guillotineState.parentSegmentID === e && n && t.guillotineState.segmentCutOrder < n;
}
function Ka(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function pc(t, e, n) {
  this.selections.cutLines.style("visibility", (i) => typeof t.guillotineState?.[n] == "number" && typeof i.guillotineState?.[n] == "number" && i.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("offcut-cut", !1), this.selections.cutLines.classed("offcut-cut", (i, s) => s === e);
}
function hc(t, e, n, i) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] || !i && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), dc.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden")), this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[n] === t.guillotineState[n]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), i || mc.call(this, t, e);
}
function gc(t, e, n, i, s) {
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
    this.state.device === "desktop" && !t.isTrim && _a.call(this, a, o, i);
  }
  this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (o, l) => l === e);
}
function Za() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1).classed("offcut-cut", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), Xn.call(this), Ni.call(this);
}
function mc(t, e) {
  const n = t?.guillotineState?.segmentCutOrder;
  if (n == null) return;
  this.selections.cutLines.classed("completed", (k) => Ha(k, e, n)), this.selections.cutLines.classed("inside-segment", (k) => Ka(k, e));
  const i = Wa.call(this, t);
  if (i === !1) return;
  const { parent: s, children: a } = i, { near: o } = Ja(t, a);
  if (!o) return;
  let l = [], r;
  const h = this.getHalfBladeWidth(t.stock), m = t.dimension === "l" ? "y" : "x";
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
  ], r = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && r && _a.call(this, l, r, m);
}
function vc(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  const n = this.props.cuts.value[t];
  if (!n) return;
  if (Xn.call(this), Ni.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const I = this.selections.cutLines.nodes()[t].parentElement;
    if (!I) return;
    Xe(I).raise();
  }
  const i = n.guillotineState?.parentSegmentID, s = this.getHalfBladeWidth(n.stock), a = n.dimension === "l" ? "y" : "x", o = n?.stock?.trim, l = e === "ptx" ? "ptxOrder" : "order";
  if (n.isTrim && ["guillotine", "beam"].includes(n?.stock?.cutType)) {
    pc.call(this, n, t, l), na.call(this, n, t, i), this.removeSegments();
    return;
  }
  if (["guillotine", "beam"].includes(n?.stock?.cutType) && i !== null && typeof i < "u" ? hc.call(this, n, i, l, e) : gc.call(this, n, t, o, a, s), na.call(this, n, t, i), e === "ptx") {
    this.removeSegments();
    return;
  }
  const r = Wa.call(this, n);
  if (r === !1)
    return;
  const { parent: h, children: m } = r;
  if (!n?.guillotineState?.parentSegmentID)
    return ls.call(this, { parent: h });
  if (n.stock?.cutType === "beam" && h.phase === 0) {
    const B = this.props.segments.value.find((N) => N.stock?.autoId === n.stock?.autoId)?.children || m, M = B.find((N) => N.offcut === !0 && N.y === 0 && N.isTrimOffcut === !0), V = B.find((N) => N.offcut === !0 && N !== M && N.y + N.w >= n.stock.w - (n.stock.trim?.l2 || 0)), U = B.filter((N) => !N.offcut), Q = U.find((N) => N.type === "near"), he = U.find((N) => N.type === "far"), $ = [M, V].filter(Boolean);
    return ls.call(this, { parent: h, near: Q, far: he, offcuts: $ });
  }
  const { near: k, far: p, offcuts: F } = Ja(n, m);
  ls.call(this, { parent: h, near: k, far: p, offcuts: F });
}
function Ja(t, e) {
  const n = t.dimension === "l" ? "y" : "x", i = t.dimension === "l" ? "w" : "l", s = t.stock?.cutType === "beam";
  let a, o;
  if (s)
    a = e.find((r) => r.type === "near" && !r.offcut), o = e.find((r) => r.type === "far" && !r.offcut);
  else {
    const h = t[n + "1"], m = t.stock.halfBladeWidth;
    a = e.find((k) => k.type === "near" && Math.abs(k[n] + k[i] - (h - m)) < 1e-6), o = e.find((k) => k.type === "far" && Math.abs(k[n] - (h + m)) < 1e-6);
  }
  const l = e.filter((r) => r.offcut === !0 && r !== a && r !== o);
  return { near: a, far: o, offcuts: l };
}
function na(t, e, n) {
  this.selections.cutLines.attr("stroke-width", (i, s) => {
    const a = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let o = Math.max(1, Math.ceil(a));
    const l = t?.guillotineState?.segmentCutOrder;
    return (Ha(i, n, l) || Ka(i, n)) && (o += 1), s === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (o = 5), o;
  });
}
function bc() {
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
function yc(t) {
  if (this.selections.cuttingPathGroup) {
    if (t === null) {
      this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", 1);
      return;
    }
    this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", (e, n) => n <= t ? 1 : 0.15), this.selections.cuttingPathGroup.selectAll(".contour").classed("active", (e, n) => n === t);
  }
}
function wc() {
  Ya.call(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.remove(), this.selections.cuttingPathGroup = null);
}
const Qt = /* @__PURE__ */ new WeakMap();
function kc(t, e, n) {
  const i = [];
  let s = 0, a = e(0), o = n(0);
  const l = (r, h, m) => {
    const k = r - a, p = h - o;
    s += Math.sqrt(k * k + p * p), i.push({ sx: r, sy: h, type: m, cumDist: s }), a = r, o = h;
  };
  return i.push({ sx: a, sy: o, type: "rapid", cumDist: 0 }), t.contours.forEach((r, h) => {
    const m = r.leadIn.length > 0 ? r.leadIn[0] : r.contour[0];
    if (!m) return;
    l(e(m.x), n(m.y), "rapid");
    const k = [
      ...r.leadIn,
      ...r.contour,
      ...r.leadOut
    ];
    for (let p = 1; p < k.length; p++) {
      const F = k[p];
      l(e(F.x), n(F.y), "cutting");
    }
  }), i;
}
function Sc(t, e) {
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
function xc() {
  if (!this.props.cuttingPlan?.value || !this.selections.cuttingPathGroup) return;
  const t = this.props.cuttingPlan.value;
  if (!t.contours?.length) return;
  let e = Qt.get(this);
  if (!e || !e.waypoints.length) {
    const a = this.scales.xPositionScale, o = this.scales.yPositionScale, l = kc(t, a, o);
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
    }, Qt.set(this, e);
  } else
    e.playing = !0, e.lastTime = null;
  this.selections.cuttingPathGroup.select(".cutting-path-dot").empty() && this.selections.cuttingPathGroup.append("circle").attr("class", "cutting-path-dot").attr("r", 4).attr("fill", "#000").attr("stroke", "#fff").attr("stroke-width", 1.5), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-cut").attr("fill", "none").attr("stroke-width", 2).attr("stroke", "#000").attr("opacity", 0.6), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-rapid").attr("fill", "none").attr("stroke-width", 1.5).attr("stroke", "#000").attr("stroke-dasharray", "2,3").attr("opacity", 0.6);
  const i = this, s = (a) => {
    if (!e.playing) return;
    e.lastTime === null && (e.lastTime = a);
    const o = (a - e.lastTime) / 1e3;
    e.lastTime = a, e.progress += e.speed * o, e.progress >= 1 && (e.progress = 1, e.playing = !1);
    const l = e.progress * e.totalDistance, r = Sc(e.waypoints, l);
    i.selections.cuttingPathGroup.select(".cutting-path-dot").attr("cx", r.sx).attr("cy", r.sy).attr("fill", "#000");
    let m = "", k = "", p = null;
    for (let F = 0; F < e.waypoints.length; F++) {
      const I = e.waypoints[F];
      if (I.cumDist > l) break;
      I.type === "cutting" ? ((!p || p.type !== "cutting") && (m += ` M ${p ? p.sx : I.sx} ${p ? p.sy : I.sy}`), m += ` L ${I.sx} ${I.sy}`) : ((!p || p.type !== "rapid") && (k += ` M ${p ? p.sx : I.sx} ${p ? p.sy : I.sy}`), k += ` L ${I.sx} ${I.sy}`), p = I;
    }
    e.progress < 1 && p && (r.type === "cutting" ? m += ` L ${r.sx} ${r.sy}` : k += ` L ${r.sx} ${r.sy}`), i.selections.cuttingPathGroup.select(".cutting-path-trail-cut").attr("d", m), i.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").attr("d", k), e.playing && (e.rafId = requestAnimationFrame(s));
  };
  e.rafId && cancelAnimationFrame(e.rafId), e.rafId = requestAnimationFrame(s);
}
function Pc() {
  const t = Qt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null);
}
function Ya() {
  const t = Qt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), Qt.delete(this)), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function Cc() {
  const t = Qt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null), Qt.delete(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function Ic() {
  return Qt.get(this)?.playing ?? !1;
}
function Ac(t) {
  const e = Qt.get(this);
  e && (e.speed = t);
}
function Oc(t) {
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
  const i = dl(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let s;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let o = function(m) {
        return `${m.x1}-${m.y1}-${m.x2}-${m.y2}`;
      }, l = function(m) {
        m.attr("class", "ray").attr("x1", (k) => this.scales.xPositionScale(k.x1)).attr("x2", (k) => this.scales.xPositionScale(k.x2)).attr("y1", (k) => this.scales.yPositionScale(k.y1)).attr("y2", (k) => this.scales.yPositionScale(k.y2));
      };
      if (this.state.env !== "development") return;
      const h = fl(this.props.shapes.value, this.props.stock.value).flatMap((m) => Object.values(m.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(h, o).join(
        (m) => m.append("line").call((k) => l.call(this, k)),
        (m) => m.call((k) => l.call(this, k)),
        (m) => m.remove()
      );
    }
    s = pl(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new hl();
  for (const o of i.toArray()) {
    const l = gl(t, o, this.props.stock.value);
    l && a.addPoints(l.toArray());
  }
  if (s) {
    const o = s.toArray();
    for (const l of o) {
      const r = ml(t, l, this.props.stock.value);
      r && a.addPoints(r.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const o = this.props.stock.value;
    [
      new An(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new An(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new An(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.trim.l1 ?? 0
      ),
      new An(
        o.trim.w1 ?? 0,
        o.w - t.w - (o.trim.l2 ?? 0)
      ),
      new An(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.w - t.w - (o.trim.l2 ?? 0)
      )
    ].forEach((l) => a.add(l)), e = a.toArray();
  } else {
    const o = this.props.stock.value;
    a.add(new An(o.trim.w1 ?? 0, o.trim.l1 ?? 0)), e = a.toArray();
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
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), Lc.call(this, e, t), Fc.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Lc(t, e) {
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
      s.stopPropagation(), Xe(this).classed("hover", !0), Xe(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), Xe(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Fc(t, e) {
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
      s.stopPropagation(), Xe(this).classed("hover", !0);
      const a = Xe(this).attr("data-id"), o = Xe(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), Xe(this).classed("hover", !1);
      const a = Xe(this).attr("data-id");
      Xe(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function yi(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function Tc() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => yi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => ia.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.classed("hidden", !1).text((e) => ia.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => yi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => sa.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.classed("hidden", !1).text((e) => sa.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => yi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => aa.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.classed("hidden", !1).text((e) => aa.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => yi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => oa.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, n, i) => {
      const s = i[n], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(s.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    }),
    (t) => t.classed("hidden", !1).text((e) => oa.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("transform", (e, n, i) => {
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
function ia(t) {
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
function sa(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function aa(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : me({ v: t.l, o: this.numberConfig }).toString();
}
function oa(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : me({ v: t.w, o: this.numberConfig }).toString();
}
function $c() {
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
const Ec = (t) => t.id;
function Mc() {
  if (!this.props.containerWidth) return;
  Xn.call(this);
  const t = this.props.shapes.value.reduce((e, n) => {
    const i = parseInt(n.parentId);
    return i > e ? i : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Bc.call(this), Nc.call(this), $c.call(this);
}
function Nc() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Ec).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return la.call(this, e), ra.call(this, e), e.on("mousedown", ca.bind(this)), e;
    },
    (t) => (la.call(this, t), ra.call(this, t), t.on("mousedown", ca.bind(this)), t),
    (t) => t.remove()
  ), Uc.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Tc.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Bc() {
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
  this.scales.scoreColorScale = Pi([Bt(251, 224, 255), Bt(122, 0, 138)]).domain([n, i]);
}
function Vc(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function Dc(t, e) {
  const n = e.outline;
  if (!n || n.length < 3) return "";
  const i = e.nestingRotation || 0;
  let s;
  if (e.holes?.length) {
    let I = 1 / 0, B = 1 / 0, M = -1 / 0, V = -1 / 0;
    for (const U of n)
      U.x < I && (I = U.x), U.y < B && (B = U.y), U.x > M && (M = U.x), U.y > V && (V = U.y);
    s = [
      { x: I, y: B },
      { x: M, y: B },
      { x: M, y: V },
      { x: I, y: V },
      { x: I, y: B }
    ];
  } else
    s = n;
  const a = [s];
  if (e.holes?.length)
    for (const I of e.holes)
      I.length >= 3 && a.push(I);
  let o = 0, l = 0;
  for (const I of n)
    o += I.x, l += I.y;
  o /= n.length, l /= n.length;
  const r = Math.cos(i), h = Math.sin(i), m = a.map(
    (I) => I.map((B) => {
      if (i === 0) return { x: B.x, y: B.y };
      const M = B.x - o, V = B.y - l;
      return {
        x: r * M - h * V + o,
        y: h * M + r * V + l
      };
    })
  );
  let k = 1 / 0, p = 1 / 0;
  for (const I of m)
    for (const B of I)
      B.x < k && (k = B.x), B.y < p && (p = B.y);
  return m.map((I) => I.map((M) => ({
    x: t.scales.xPositionScale(M.x - k + (e.x || 0)),
    y: t.scales.yPositionScale(M.y - p + (e.y || 0))
  })).map(
    (M, V) => (V === 0 ? "M" : "L") + ` ${M.x} ${M.y}`
  ).join(" ") + " Z").join(" ");
}
function la(t) {
  const e = this;
  t.selectAll(".shape").remove(), t.each(function(i) {
    const s = Xe(this);
    Vc(i) ? s.insert("path", ":first-child").datum(i).attr("class", "shape").attr("d", (a) => Dc(e, a)).attr("fill-rule", "evenodd").style("fill", (a) => En.call(e, a)) : s.insert("rect", ":first-child").datum(i).attr("class", "shape").attr("x", (a) => e.getRectangleCoordinate(a, "x")).attr("y", (a) => e.getRectangleCoordinate(a, "y")).attr("width", (a) => e.getWidthAttribute(a)).attr("height", (a) => e.getHeightAttribute(a)).style("fill", (a) => En.call(e, a));
  });
  const n = t.selectAll(".shape");
  this.selections.shapeRectangles ? this.selections.shapeRectangles = ar(
    this.selections.shapeRectangles.nodes().concat(n.nodes())
  ) : this.selections.shapeRectangles = n;
}
function ra(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const n = Xe(e.target);
    n.classed("hover", !0), n.classed("selected") || n.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, n) => {
    const i = Xe(e.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", En.call(this, n));
  }, { passive: !0 });
}
function ca(t, e) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && jc.call(this, t, e), (this.settings.app || this.settings.embed) && qc.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (Ni.call(this), tc.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function jc(t, e) {
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
        ], Gc.call(this, e);
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
    console.table(Rc(e, n));
  }
}
function Rc(t, e) {
  return e.reduce((n, i) => {
    const s = Zc(t, i);
    return n[i] = Array.isArray(s) ? s.join(", ") : s, n;
  }, {});
}
function Gc(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineState?.myStripParent;
  e && this.selections.shapeWrappers.filter((s) => s.id === e || s.group.addedAsGroup === e).select(".shape").classed("highlight-a", !0);
  const n = this.props.shapes.value.find((i) => i.id === e)?.guillotineState?.myStripParent;
  n && this.selections.shapeWrappers.filter((s) => s.id === n || s.group.addedAsGroup === e).select(".shape").classed("highlight-b", !0);
}
function qc(t, e) {
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
      color: En.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(n), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function En(t) {
  const e = Bt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return Bt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return Bt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const s = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${s.map((l, r) => Math.round(l + t.guillotineState.myPhase / 5 * (a[r] - l))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return Bt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return Bt(139, 171, 46);
        break;
      case "placementOrder": {
        const s = this.props.shapes.value.reduce((a, o) => {
          const l = o.placementOrder ?? 0;
          return l > a ? l : a;
        }, 0);
        if (s > 0 && typeof t.placementOrder == "number") {
          const a = [0, 115, 255], o = [255, 50, 50], l = t.placementOrder / s;
          return `rgb(${a.map((h, m) => Math.round(h + l * (o[m] - h))).join(",")})`;
        }
        break;
      }
      case "score": {
        const s = t?.bestScore?.total ? this.scales.scoreColorScale(t.bestScore.total) : null;
        if (s != null && typeof s.toString == "function")
          return s;
        if (s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number")
          return console.warn("Detected corrupted score color object from scale:", s, "for shape:", t), Bt(s.r, s.g, s.b, s.opacity ?? 1);
      }
    }
  const n = parseInt(t.parentId);
  let i;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? i = this.scales.shapeColorScale(n) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), i = null), i != null && typeof i.toString == "function" ? i : i != null && typeof i.r == "number" && typeof i.g == "number" && typeof i.b == "number" ? Bt(i.r, i.g, i.b, i.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, i), e);
}
const ua = 3;
function _c(t) {
  const e = [];
  for (const n of t) {
    const i = n.extras?.banding;
    if (n.added && i?.sides)
      for (const [s, a] of Object.entries(i.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(s)) continue;
        let o = s;
        if (n.rot) {
          const r = Na({ [s]: !0 }, "cc");
          o = Object.keys(r)[0];
        }
        const l = Wc.call(this, n, o);
        l && e.push(l);
      }
  }
  return e;
}
function da(t) {
  const e = ua / 2;
  return t.attr("class", "banding").attr("x1", (n) => this.scales.xPositionScale(n.l1) + wi.call(this, n.type, "x", e)).attr("x2", (n) => this.scales.xPositionScale(n.l2) + wi.call(this, n.type, "x", e)).attr("y1", (n) => this.scales.yPositionScale(n.w1) + wi.call(this, n.type, "y", e)).attr("y2", (n) => this.scales.yPositionScale(n.w2) + wi.call(this, n.type, "y", e)).attr("stroke-width", ua).attr("stroke", "white");
}
function Uc(t) {
  if (!this.settings.main) return;
  const e = _c.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (n, i) => i).join(
    (n) => n.append("line").call((i) => da.call(this, i)),
    (n) => n.call((i) => da.call(this, i)),
    (n) => n.remove()
  );
}
function wi(t, e, n) {
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
function Wc(t, e) {
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
function zc(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const fa = (t) => t.id;
function pa(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function ha(t) {
  return t.style("fill", (e) => `url(#grain-${e.grain || "n"})`).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Hc() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), nc.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], fa).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => pa.call(this, e)),
    (t) => t.call((e) => pa.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], fa).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => ha.call(this, e)),
    (t) => t.call((e) => ha.call(this, e)),
    (t) => t.remove()
  );
}
function Kc(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function Zc(t, e) {
  return or(t, e);
}
class Jc {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = Xe(e.elementID), this.selections.el === null)) return;
    const n = this.selections.el.node();
    n !== null && (this.selections.htmlEl = n, this.scales = {
      xScale: Vt(),
      yScale: Vt(),
      yPositionScale: Vt(),
      xPositionScale: Vt(),
      yAxisScale: Vt(),
      measurementScale: Vt(),
      shapeColorScale: Pi(),
      scoreColorScale: Pi()
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
    }, i = (s, a) => Bt("#" + (Kc(s?.replace("#", "")) ? s.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(n).map(([s, a]) => [
        s,
        i(e.colors?.[s], a)
      ])
    ), this.scales.shapeColorScale = Pi([
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
      this.selections.svgCanvas = Xe(e);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(e, n, i) {
    this.numberConfig && (e && (this.numberConfig.numberFormat = e), n && (this.numberConfig.decimalPlaces = n), i && (this.numberConfig.fractionRoundTo = i));
  }
  formatNumber = (e) => {
    const n = me({
      v: e,
      o: this.numberConfig
    });
    if (n !== null) return n.toString();
  };
  trimNameToFit(e, n) {
    function i(s, a, o) {
      const l = o[a], r = Xe(l);
      r.text(s.name);
      let h = r.text();
      const m = r.node();
      if (!m) return;
      let k = m.getComputedTextLength();
      const p = this.getWidthAttribute(s) - 20;
      for (; k > p && h.length > 0; )
        h = h.slice(0, -1), r.text(h.length ? h + "..." : ""), k = r.node().getComputedTextLength();
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
    const n = this.selections.shapeWrappers.filter((i) => i.id === e);
    return n.empty() ? null : n.node();
  }
  findShape(e) {
    const n = this.findShapeElement.call(this, e);
    n && this.selectShape.call(this, n);
  }
  selectShape(e) {
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => En.call(this, i));
    const n = Xe(e).select(".shape");
    if (n) {
      n.classed("selected", !0), n.style("fill", this.config.colors.partSelected.toString());
      const i = Xe(e).datum();
      this.callbacks.onShapeSelect(i, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Mc.call(this);
  }
  drawStock() {
    Hc.call(this);
  }
  drawCuts() {
    fc.call(this);
  }
  drawCuttingPath() {
    bc.call(this);
  }
  removeCuttingPath() {
    wc.call(this);
  }
  showCuttingPathStep(e) {
    yc.call(this, e);
  }
  animateCuttingPath() {
    xc.call(this);
  }
  pauseCuttingPathAnimation() {
    Pc.call(this);
  }
  stopCuttingPathAnimation() {
    Ya.call(this);
  }
  resetCuttingPathAnimation() {
    Cc.call(this);
  }
  isCuttingPathAnimating() {
    return Ic.call(this);
  }
  setCuttingPathAnimationSpeed(e) {
    Ac.call(this, e);
  }
  drawAllOffcuts() {
    uc.call(this);
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
    return Ke(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const n = e.bladeWidth;
    return n !== void 0 && n > 0 ? n / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), Xn.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), oc.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Ni.call(this);
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
    if (hi(e) && e.outline?.length >= 3)
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
    if (hi(e) && e.outline?.length >= 3) return !0;
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox();
    if (a.width === 0 && a.height === 0) return !1;
    const o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return a.width >= o || l < 40;
  }
  isLengthHidden(e, n, i) {
    if (hi(e) && e.outline?.length >= 3) return !0;
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
    if (hi(e) && e.outline?.length >= 3) return !0;
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
      Xe(this).classed("hover", !0);
    }).on("mouseout", function() {
      Xe(this).classed("hover", !1);
    });
  }
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => En.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const n = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    Xn.call(this);
  }
  updateShapeVisibility() {
    zc.call(this);
  }
  drawPositions(e) {
    return Oc.call(this, e);
  }
  showCut(e) {
    vc.call(this, e);
  }
  resetCuts() {
    Za.call(this);
  }
}
const Yc = ["id"], Xc = /* @__PURE__ */ Qe({
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
    moveMode: { default: () => K(!1) }
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
      getShapes: m,
      getSegments: k,
      getCuts: p,
      cuttingPlan: F
    } = Mi(), I = t, B = n, M = (ge) => {
      B("part-click", ge);
    }, V = (ge) => {
      B("shape-colour-update", ge);
    }, U = (ge, P) => {
      ge?.autoId && B("shape-select", ge.autoId, P);
    }, Q = (ge) => {
      ge && B("add-to-parts-bin", ge);
    }, he = (ge, P) => {
      ge && B("move-shape", ge, P);
    }, $ = K(0), N = K(0), ee = K(null);
    let y, j = K(!1);
    const S = Ft({
      debug: "",
      stretched: !1
    }), J = () => {
      y?.state && (S.stretched = y.state.stretched);
    };
    gn(() => q());
    const ne = T(() => ({
      format: I.numberFormat,
      decimals: I.decimalPlaces
    })), ae = T(() => I.stockAutoId ? h(I.stockAutoId) : s.value), oe = T(() => I.stockAutoId ? m(I.stockAutoId) : a.value), Me = T(() => I.main ? I.stockAutoId ? p(I.stockAutoId) : o.value : []), Y = T(() => I.main ? I.stockAutoId ? k(I.stockAutoId) : l.value : []);
    xa(ee, (ge) => {
      const P = ge[0], { width: x, height: w } = P.contentRect;
      x > 0 && ($.value = x), B("resize", { width: x, height: w });
    }), jo(
      $,
      (ge) => {
        y && (ge <= 0 || (y.setDevice(), y.resetShapeAxes(), y.removeCuttingPath(), y.drawAll(), J(), r.value !== null && (y.toggleSegments(!0), y.showCut(r.value))));
      },
      { throttle: 100 }
    );
    let pe = !1;
    Ue(() => ae.value, (ge) => {
      ge && ($.value <= 0 || (pe = !0, y.setDevice(), y.resetCuts(), y.removeSegments(), y.resetShapeAxes(), y.removeCuttingPath(), y.drawAll(), J(), vt(() => pe = !1)));
    }, { immediate: !1 }), Ue(() => oe.value, (ge) => {
      pe || ge && ($.value <= 0 || (y.setDevice(), y.drawShapes()));
    }, { immediate: !1, deep: !0 }), I.main && (Ue(() => Me.value, () => {
      pe || $.value <= 0 || y.drawCuts();
    }, { immediate: !1, deep: !0 }), Ue(r, () => {
      r.value !== null && ($.value <= 0 || (y.toggleSegments(!0), y.showCut(r.value)));
    }, { immediate: !1 }), Ue(ne, (ge) => {
      y.updateNumberFormat(ge.format, ge.decimals, null);
    }, { immediate: !1 }));
    const q = () => {
      const ge = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${I.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: I.numberFormat,
          decimalPlaces: I.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: I.colors || null,
        settings: {
          main: I.main,
          app: I.app,
          embed: I.embed,
          flipY: I.flipY,
          flipX: !1
        },
        props: {
          containerHeight: N,
          containerWidth: $,
          stock: ae,
          shapes: oe,
          cuts: Me,
          segments: Y,
          stockList: i.stockList,
          cuttingPlan: F,
          moveMode: I.moveMode,
          app: I.app
        },
        options: {
          disableClick: I.disableClick,
          enableStretch: I.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: V,
          onShapeSelect: U,
          onAddToPartsBin: Q,
          onMoveShape: he,
          onPartClick: M
        }
      };
      y = new Jc(ge), S.debug = y.state.debug, j.value = !0;
    }, de = (ge = !1) => {
      y && y.toggleShapes(ge);
    }, $e = (ge = !1) => {
      y && y.toggleCuts(ge);
    }, re = (ge = !1) => {
      y && y.toggleSegments(ge);
    }, rt = () => {
      y && y.drawShapes();
    }, nt = () => {
      y && (y.drawStock(), J());
    }, tt = () => {
      y && (y.toggleSegments(!1), y.resetCuts());
    }, ze = (ge) => {
      y && (y.toggleSegments(!0), y.showCut(ge));
    }, Pt = (ge) => y ? y.drawPositions(ge) : !1, ct = () => {
      y && y.removePositions();
    }, en = (ge) => {
      y && y.findShape(ge);
    }, Ct = () => {
      y && y.clearSelection();
    }, ot = (ge) => y ? y.requiresStretch(ge) : !1, It = (ge) => {
      y?.options && (y.options.enableStretch = ge, y.setAspectRatio(), y.drawAll(), J());
    }, ut = () => y?.options?.enableStretch ?? !0;
    return Ue(() => I.flipY, (ge) => {
      y?.settings && (y.settings.flipY = ge, y.setAspectRatio(), y.drawAll());
    }), Ue(() => S.debug, (ge) => {
      y?.state && (y.state.debug = ge);
    }), e({
      loaded: j,
      toggleShapes: de,
      toggleCuts: $e,
      toggleSegments: re,
      drawShapes: rt,
      drawStock: nt,
      drawPositions: Pt,
      resetPositions: ct,
      findShape: en,
      clearSelection: Ct,
      resetCuts: tt,
      showCut: ze,
      requiresStretch: ot,
      setEnableStretch: It,
      getEnableStretch: ut,
      animateCuttingPath: () => {
        y && y.animateCuttingPath();
      },
      pauseCuttingPathAnimation: () => {
        y && y.pauseCuttingPathAnimation();
      },
      stopCuttingPathAnimation: () => {
        y && y.stopCuttingPathAnimation();
      },
      resetCuttingPathAnimation: () => {
        y && y.resetCuttingPathAnimation();
      },
      isCuttingPathAnimating: () => y?.isCuttingPathAnimating() ?? !1,
      setCuttingPathAnimationSpeed: (ge) => {
        y && y.setCuttingPathAnimationSpeed(ge);
      },
      state: S,
      get stretched() {
        return S.stretched;
      },
      set moving(ge) {
        y?.state && (y.state.moving = ge);
      }
    }), (ge, P) => (O(), R("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: ee,
      class: De([{ app: t.app }, "diagram-container"])
    }, null, 10, Yc));
  }
}), Lt = K(null);
let Qc = 0;
function eu(t) {
  const e = t || `action-menu-${++Qc}-${Date.now()}`, n = T({
    get: () => Lt.value === e,
    set: (m) => {
      m ? Lt.value = e : Lt.value === e && (Lt.value = null);
    }
  }), i = () => {
    Lt.value = e;
  }, s = () => {
    Lt.value === e && (Lt.value = null);
  }, a = () => {
    Lt.value = null;
  }, o = () => {
    n.value = !n.value;
  }, l = T(() => Lt.value !== null), r = T(() => Lt.value), h = T(() => Lt.value === e);
  return {
    // Instance-specific
    id: gt(K(e)),
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
const tu = { class: "action-menu" }, nu = ["textContent"], iu = {
  key: 0,
  class: "menu-divider"
}, su = {
  key: 1,
  class: "group-label"
}, au = /* @__PURE__ */ Qe({
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
    const n = t, i = e, { isOpen: s, close: a, toggle: o } = eu(n.menuId), l = K(), r = K(), h = T(() => n.disabled), m = T(() => n.label), k = T(() => n.showLabel), p = T(() => n.icon), { floatingStyles: F } = Ro(l, r, {
      placement: n.placement,
      whileElementsMounted: ur,
      middleware: [
        lr(n.offset),
        rr(),
        cr({ padding: 8 })
      ]
    }), I = (S) => {
      if (!S) return ["fas", "question"];
      if (typeof S == "function" && (S = S(n)), Array.isArray(S))
        return S;
      if (typeof S == "string") {
        const J = S.split(" ");
        if (J.length >= 2) {
          const ne = J[0], ae = J.slice(1).join("-").replace("fa-", "");
          return [ne, ae];
        }
        return ["fas", S.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, B = T(() => I(p.value)), M = (S) => typeof S.active == "function" ? S.active(n) : typeof S.active == "boolean" ? S.active : !1, V = (S) => {
      if (!S.href) return !1;
      try {
        const J = typeof S.href == "function" ? S.href(n) : S.href;
        return new URL(J, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, U = (S) => S.href ? "a" : "div", Q = (S) => {
      const J = {};
      if (S.href) {
        const ne = typeof S.href == "function" ? S.href(n) : S.href;
        if (J.href = ne, V(S)) {
          const ae = typeof S.target == "function" ? S.target(n) : S.target;
          J.target = ae || "_blank", J.rel = S.rel || "noopener noreferrer";
        } else if (S.target) {
          const ae = typeof S.target == "function" ? S.target(n) : S.target;
          J.target = ae;
        }
        S.rel && (J.rel = S.rel);
      }
      return S.attrs && Object.assign(J, S.attrs), J;
    }, he = T(() => n.menuItems.map((S) => {
      const J = { ...S };
      return typeof S.href == "function" && (J.href = S.href(n)), typeof S.icon == "function" && (J.icon = S.icon(n)), typeof S.disabled == "function" && (J.disabled = S.disabled(n)), typeof S.label == "function" && (J.label = S.label(n)), typeof S.variant == "function" && (J.variant = S.variant(n)), typeof S.active == "function" && (J.active = S.active(n)), typeof S.target == "function" && (J.target = S.target(n)), typeof S.show == "function" && (J.show = S.show(n)), J;
    })), $ = (S) => {
      S.stopPropagation(), S.preventDefault(), !h.value && o();
    }, N = (S, J) => {
      if (J.stopPropagation(), S.disabled && !S.href) {
        J.preventDefault();
        return;
      }
      if (typeof S.action == "function" && S.action(S) === !1 && S.href) {
        J.preventDefault();
        return;
      }
      i("action", {
        id: S.id,
        item: S
      }), S.href && n.closeOnLinkClick ? a() : S.href || a();
    }, ee = (S) => {
      const J = [];
      if (S.variant) {
        const ae = typeof S.variant == "function" ? S.variant(n) : S.variant;
        J.push(`variant-${ae}`);
      }
      if ((typeof S.disabled == "function" ? S.disabled(n) : S.disabled) && !S.href && J.push("disabled"), M(S) && J.push("active"), S.href && J.push("menu-link"), V(S) && J.push("external-link"), S.class) {
        const ae = typeof S.class == "function" ? S.class(n) : S.class;
        J.push(ae);
      }
      return J.join(" ");
    }, y = (S) => {
      const J = S.target;
      s.value && l.value && r.value && !l.value.contains(J) && !r.value.contains(J) && a();
    }, j = (S) => {
      S.key === "Escape" && s.value && a();
    };
    return gn(() => {
      document.addEventListener("click", y), document.addEventListener("keydown", j);
    }), Qn(() => {
      document.removeEventListener("click", y), document.removeEventListener("keydown", j);
    }), (S, J) => (O(), R("div", tu, [
      Z("div", {
        ref_key: "trigger",
        ref: l,
        onClick: $,
        class: De(["actions-btn", { active: A(s), disabled: h.value }])
      }, [
        p.value ? (O(), Ie(A(Ai), {
          key: 0,
          icon: B.value,
          class: "icon"
        }, null, 8, ["icon"])) : se("", !0),
        k.value ? (O(), R("span", {
          key: 1,
          class: "label",
          textContent: ve(m.value)
        }, null, 8, nu)) : se("", !0)
      ], 2),
      (O(), Ie(Go, { to: "body" }, [
        A(s) && !h.value ? (O(), R("div", {
          key: 0,
          ref_key: "floating",
          ref: r,
          style: St(A(F)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: J[0] || (J[0] = xs(() => {
          }, ["stop"]))
        }, [
          (O(!0), R(Ze, null, at(he.value, (ne, ae) => (O(), R(Ze, { key: ae }, [
            ne.type === "divider" ? (O(), R("div", iu)) : ne.type === "group" ? (O(), R("div", su, ve(ne.label), 1)) : ne.show !== !1 ? (O(), Ie(qo(U(ne)), fn({
              key: 2,
              ref_for: !0
            }, Q(ne), {
              onClick: (oe) => N(ne, oe),
              id: ne.id,
              class: ["menu-item", ee(ne)],
              disabled: ne.disabled && !ne.href
            }), {
              default: Oi(() => [
                ne.icon || M(ne) ? (O(), Ie(A(Ai), {
                  key: 0,
                  icon: M(ne) ? ["fass", "check"] : I(ne.icon)
                }, null, 8, ["icon"])) : se("", !0),
                Z("span", null, ve(ne.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : se("", !0)
          ], 64))), 128))
        ], 4)) : se("", !0),
        A(s) && !h.value ? (O(), R("div", {
          key: 1,
          class: "backdrop",
          onClick: J[1] || (J[1] = //@ts-ignore
          (...ne) => A(a) && A(a)(...ne))
        })) : se("", !0)
      ]))
    ]));
  }
}), ga = (t, e, n) => {
  if (e === "unitDependent")
    if (n === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const i = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), s = Ta(t);
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
function ou({
  props: t,
  emit: e,
  isMounted: n
}) {
  const i = K({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), s = (l, r = !1) => {
    if (l == null || l === "") {
      const m = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? m ? { value: null, valid: !1, message: "field_required" } : { value: l === null ? null : "", valid: !0 } : vl(l, "decimal", m);
    }
    const h = String(l);
    switch (t.type) {
      case "string":
        return { value: h, valid: !0 };
      case "unitDependent":
        if (r)
          return ga(h, t.type, t.numberFormat);
        try {
          const m = me({
            v: l,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof m == "number") {
            let k = m, p = !0, F;
            return typeof t.min == "number" && k < t.min && (k = t.min, p = !1, F = "below_min"), typeof t.max == "number" && k > t.max && (k = t.max, p = !1, F = "above_max"), { value: k, valid: p, message: F };
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
        if (r)
          return ga(h, t.type);
        try {
          const k = me({
            v: l,
            nf: "decimal"
          });
          if (k === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let p = k;
          if (t.type === "integer" && (p = Math.round(p)), t.allowZero === !1 && p === 0)
            return {
              value: p,
              valid: !1,
              message: "zero_not_allowed"
            };
          let F = !0, I;
          return typeof t.min == "number" && p < t.min && (p = t.min, F = !1, I = "below_min"), typeof t.max == "number" && p > t.max && (p = t.max, F = !1, I = "above_max"), { value: p, valid: F, message: I };
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
          const m = s(r.value, !1);
          a(m, !1) && (e("update:value", m.value), e("validation", m, t.id)), i.value.isMouseDown = !1;
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
              const r = l.target, h = r.value, m = r.selectionStart || 0, k = h.substring(0, m);
              if (l.key === "/" && h.includes("/")) {
                l.preventDefault();
                return;
              }
              if (l.key === " " && /\s$/.test(k)) {
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
          if (!Ta(h)) {
            l.preventDefault(), e("validation", {
              value: h,
              valid: !1,
              message: `Pasted text "${r}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (h !== r) {
            l.preventDefault();
            const m = l.target;
            m.value = h;
            const k = s(h, !0);
            e("validation", k, t.id), e("input", h);
          }
        }
        e("paste", l);
      }
    },
    processValue: s
  };
}
function lu({
  props: t,
  emit: e,
  isMounted: n
}) {
  const i = K({
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
function ru({
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
const cu = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], uu = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = K(!0), a = K(null), o = T(() => n.value === n.trueValue), {
      handleCheckboxChange: l,
      handleFocus: r,
      handleBlur: h
    } = ru({
      props: n,
      emit: i,
      isMounted: s
    });
    return (m, k) => (O(), R("input", {
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
      onChange: k[0] || (k[0] = //@ts-ignore
      (...p) => A(l) && A(l)(...p)),
      onFocus: k[1] || (k[1] = //@ts-ignore
      (...p) => A(r) && A(r)(...p)),
      onBlur: k[2] || (k[2] = //@ts-ignore
      (...p) => A(h) && A(h)(...p))
    }, null, 40, cu));
  }
}), du = ["for"], ki = /* @__PURE__ */ Qe({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (O(), R("label", {
      for: t.id,
      class: "input-label"
    }, ve(t.label), 9, du));
  }
}), fu = ["id", "disabled", "aria-label"], pu = { class: "multiselect__text" }, hu = {
  key: 0,
  class: "multiselect__dropdown"
}, gu = ["checked", "disabled", "onChange"], mu = { class: "multiselect__option-label" }, vu = {
  key: 1,
  class: "multiselect__no-results"
}, bu = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = K(!1), a = K(null), o = K(null), l = K(""), r = T(() => {
      const B = n.value;
      return B ? Array.isArray(B) ? new Set(B.map(String)) : new Set(String(B).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), h = T(() => n.options.map((B) => ({
      value: B.value,
      label: B.label ?? String(B.value),
      hidden: B.hidden ?? !1,
      disabled: B.disabled ?? !1
    }))), m = T(() => {
      if (!l.value) return h.value;
      const B = l.value.toLowerCase();
      return h.value.filter(
        (M) => (M.label ?? String(M.value)).toLowerCase().includes(B)
      );
    }), k = T(() => {
      const B = r.value.size;
      if (B === 0) return n.placeholder || "All";
      if (B === 1) {
        const M = [...r.value][0];
        return h.value.find((U) => String(U.value) === M)?.label || M;
      }
      return `${B} selected`;
    });
    function p() {
      n.disabled || (s.value = !s.value, s.value && (l.value = "", n.searchable && vt(() => o.value?.focus())));
    }
    function F(B) {
      const M = String(B), V = new Set(r.value);
      V.has(M) ? V.delete(M) : V.add(M), i("update:value", [...V]);
    }
    function I(B) {
      a.value && !a.value.contains(B.target) && (s.value = !1);
    }
    return gn(() => document.addEventListener("click", I)), _o(() => document.removeEventListener("click", I)), (B, M) => (O(), R("div", {
      class: "multiselect",
      ref_key: "rootRef",
      ref: a
    }, [
      Z("button", {
        type: "button",
        class: "multiselect__trigger",
        id: n.id,
        disabled: n.disabled,
        "aria-label": n.ariaLabel,
        onClick: p
      }, [
        Z("span", pu, ve(k.value), 1)
      ], 8, fu),
      s.value ? (O(), R("div", hu, [
        n.searchable ? Ei((O(), R("input", {
          key: 0,
          ref_key: "searchRef",
          ref: o,
          "onUpdate:modelValue": M[0] || (M[0] = (V) => l.value = V),
          type: "text",
          class: "multiselect__search",
          placeholder: "Search...",
          onClick: M[1] || (M[1] = xs(() => {
          }, ["stop"]))
        }, null, 512)), [
          [Uo, l.value]
        ]) : se("", !0),
        (O(!0), R(Ze, null, at(m.value, (V) => (O(), R("label", {
          key: V.value,
          class: De(["multiselect__option", { "multiselect__option--zero": V.hidden }])
        }, [
          Z("input", {
            type: "checkbox",
            checked: r.value.has(String(V.value)),
            disabled: V.disabled,
            onChange: (U) => F(V.value)
          }, null, 40, gu),
          Z("span", mu, ve(V.label), 1)
        ], 2))), 128)),
        n.searchable && m.value.length === 0 ? (O(), R("div", vu, " No matches ")) : se("", !0)
      ])) : se("", !0)
    ], 512));
  }
}), yu = /* @__PURE__ */ Mn(bu, [["__scopeId", "data-v-75036be8"]]), wu = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], ku = ["disabled", "selected"], Su = {
  key: 0,
  value: " "
}, xu = ["hidden", "value", "disabled"], Pu = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = K(!0), a = K(null), o = T(() => n.options.map((r) => ({
      value: r.value,
      label: r.label?.toUpperCase() ?? r.value?.toString()?.toUpperCase(),
      hidden: r.hidden ?? !1,
      disabled: r.disabled ?? !1
    }))), {
      handleSelectChange: l
    } = lu({
      props: n,
      emit: i,
      isMounted: s
    });
    return (r, h) => (O(), R("select", fn(r.$attrs, {
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
      (...m) => A(l) && A(l)(...m))
    }), [
      Z("option", {
        value: "",
        disabled: n.selectFirstOptionDisabled,
        selected: !n.value
      }, ve(n.text?.select?.toUpperCase() ?? "SELECT"), 9, ku),
      n.multiEdit ? (O(), R("option", Su, ve(n.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : se("", !0),
      (O(!0), R(Ze, null, at(o.value, (m) => (O(), R("option", {
        key: m.value,
        hidden: m.hidden,
        value: m.value,
        disabled: m.disabled
      }, ve(m.label), 9, xu))), 128))
    ], 16, wu));
  }
}), Cu = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], Ss = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = K(!0), a = K(null), {
      handleInput: o,
      handleMouseDown: l,
      handleMouseUp: r,
      handleFocus: h,
      handleBlur: m,
      handleKeydown: k,
      handleCompositionStart: p,
      handleCompositionEnd: F,
      handlePaste: I
    } = ou({
      props: n,
      emit: i,
      isMounted: s
    }), B = (M) => {
      const V = M.getBoundingClientRect(), U = window.getComputedStyle(M);
      return V.width > 0 && V.height > 0 && U.display !== "none" && U.visibility !== "hidden";
    };
    return gn(() => {
      Ke(n.default) && (n.value === void 0 || n.value === null) && i("update:value", n.default), n.focus && a.value && B(a.value) && vt(() => a.value.focus());
    }), Qn(() => {
      s.value = !1;
    }), (M, V) => (O(), R("input", fn(M.$attrs, {
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
      (...U) => A(o) && A(o)(...U)),
      onFocus: V[1] || (V[1] = //@ts-ignore
      (...U) => A(h) && A(h)(...U)),
      onBlur: V[2] || (V[2] = //@ts-ignore
      (...U) => A(m) && A(m)(...U)),
      onKeydown: V[3] || (V[3] = //@ts-ignore
      (...U) => A(k) && A(k)(...U)),
      onCompositionstart: V[4] || (V[4] = //@ts-ignore
      (...U) => A(p) && A(p)(...U)),
      onCompositionend: V[5] || (V[5] = //@ts-ignore
      (...U) => A(F) && A(F)(...U)),
      onPaste: V[6] || (V[6] = //@ts-ignore
      (...U) => A(I) && A(I)(...U)),
      onMousedown: V[7] || (V[7] = //@ts-ignore
      (...U) => A(l) && A(l)(...U)),
      onMouseup: V[8] || (V[8] = //@ts-ignore
      (...U) => A(r) && A(r)(...U))
    }), null, 16, Cu));
  }
}), Iu = ["data-field-id"], Au = {
  key: 0,
  class: "input-label-group"
}, Ou = {
  key: 1,
  class: "password-input-wrapper"
}, Lu = ["aria-label"], Fu = ["disabled", "selected"], Tu = {
  key: 0,
  value: " "
}, $u = ["hidden", "value", "disabled"], Eu = ["id", "name", "value", "disabled"], Mu = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Nu = {
  key: 2,
  class: "help-text"
}, Hn = /* @__PURE__ */ Qe({
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
    const n = e, i = t, s = K(null), a = K(null), o = K(!0), l = K(i.numberFormat), r = K(!1), h = T(() => i.custom ? "custom-" + i.id : i.id), m = T(() => `${h.value}-error`), k = T(() => i.label || i.placeholder), p = T(() => J(i.type, i.numberFormat, r.value)), F = T(() => ne(i.type, i.numberFormat)), I = T(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(i.type)), B = T(() => {
      let Y = i.value;
      if (i.multiEdit && (Y === 0 || Y === 1)) return null;
      if (i.type !== "unitDependent" || !Y) return Y;
      try {
        return me({ v: Y, nf: i.numberFormat });
      } catch {
        return i.numberFormat === "decimal" ? 0 : "0";
      }
    }), M = T(() => i.options.map((Y) => ({
      value: Y.value,
      label: Y.label || Y.value?.toString(),
      hidden: Y.hidden || !1,
      disabled: Y.disabled || !1
    }))), V = T(() => M.value.map((Y) => {
      const pe = Y.label ? Se(Y.label) : Y.value?.toString();
      return {
        ...Y,
        // Translate the label key first, then uppercase the translated result
        label: pe?.toUpperCase() || Y.value?.toString().toUpperCase()
      };
    })), U = T(() => ({
      input: !0,
      issue: i.issue || !o.value,
      warning: i.warning,
      required: i.required,
      disabled: i.disabled
    })), Q = T(() => ({
      id: h.value,
      name: i.name,
      value: i.value,
      disabled: i.disabled,
      readonly: i.readonly,
      required: i.required,
      "aria-label": k.value,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.issue ? m.value : void 0
    })), he = T(() => ({
      ...Q.value,
      type: i.type,
      inputMode: F.value,
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
    })), $ = T(() => ({
      ...Q.value,
      trueValue: i.trueValue,
      falseValue: i.falseValue
    })), N = T(() => ({
      ...Q.value,
      options: V.value,
      selectFirstOptionDisabled: i.selectFirstOptionDisabled,
      multiEdit: i.multiEdit,
      numberFormat: i.numberFormat,
      text: i.text,
      output: i.output
    })), ee = T(() => (i.text?.select || "SELECT").toUpperCase()), y = T(() => (i.text?.delete || "DELETE").toUpperCase()), j = (Y) => {
      a.value = Y;
    }, S = (Y) => i.label && i.enableLabel && i.labelPosition === Y, J = (Y, pe, q) => {
      switch (Y) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return pe === "fraction" ? "text" : "number";
        case "password":
          return q ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, ne = (Y, pe) => {
      if (Y === "unitDependent")
        return pe === "fraction" ? "text" : "decimal";
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
    }, ae = (Y) => {
      n("update:value", Y);
    }, oe = (Y, pe) => {
      Y.valid === void 0 || Y.valid === !0 ? (o.value = !0, n("validation", s.value, Y)) : Y.valid === !1 && Y.message && (o.value = !1, console.warn(`Field validation error for field ${pe} - ${Y.message}`), n("validation", s.value, Y));
    }, Me = () => {
      n("blur");
    };
    return Ue(() => i.numberFormat, (Y, pe) => {
      if (i.shouldConvertNumberFormat !== !1) {
        if (i.type === "unitDependent" && Y !== pe && i.value !== null && i.value !== void 0 && i.value !== "")
          try {
            const q = me({ v: i.value, nf: Y });
            n("update:value", q);
          } catch {
            n("update:value", Y === "decimal" ? 0 : "0");
          }
        l.value = Y;
      }
    }), (Y, pe) => (O(), R("div", {
      ref_key: "fieldRef",
      ref: s,
      class: De(["input-wrapper", U.value]),
      "data-field-id": h.value
    }, [
      t.type === "checkbox" ? (O(), R("div", Au, [
        S("first") ? (O(), Ie(ki, {
          key: 0,
          id: h.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0),
        t.type === "checkbox" ? (O(), Ie(uu, fn({
          key: 1,
          ref: j,
          type: "checkbox"
        }, $.value, {
          value: t.value,
          "onUpdate:value": pe[0] || (pe[0] = (q) => n("update:value", q))
        }), null, 16, ["value"])) : se("", !0),
        S("last") ? (O(), Ie(ki, {
          key: 2,
          id: h.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0)
      ])) : (O(), R(Ze, { key: 1 }, [
        S("first") ? (O(), Ie(ki, {
          key: 0,
          id: h.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0),
        t.type === "password" ? (O(), R("div", Ou, [
          je(Ss, fn({ ref: j }, he.value, {
            name: i.name,
            "input-type": p.value,
            "input-mode": F.value,
            value: B.value,
            "disable-required-validation": t.disableRequiredValidation,
            onValidation: oe,
            "onUpdate:value": ae,
            onBlur: Me
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          Z("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": r.value ? "Hide password" : "Show password",
            onClick: pe[1] || (pe[1] = (q) => r.value = !r.value)
          }, ve(r.value ? "🙈" : "👁"), 9, Lu)
        ])) : I.value ? (O(), Ie(Ss, fn({
          key: 2,
          ref: j
        }, he.value, {
          name: i.name,
          "input-type": p.value,
          "input-mode": F.value,
          value: B.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: oe,
          "onUpdate:value": ae,
          onBlur: Me
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (O(), Ie(Pu, fn({
          key: 3,
          ref: j
        }, N.value, {
          name: i.name,
          "onUpdate:value": pe[2] || (pe[2] = (q) => n("update:value", q))
        }), {
          default: Oi(() => [
            Z("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, ve(ee.value), 9, Fu),
            t.multiEdit ? (O(), R("option", Tu, ve(y.value), 1)) : se("", !0),
            (O(!0), R(Ze, null, at(V.value, (q) => (O(), R("option", {
              key: q.value,
              hidden: q.hidden,
              value: q.value,
              disabled: q.disabled
            }, ve(q.label), 9, $u))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : t.type === "multiselect" ? (O(), Ie(yu, {
          key: 4,
          ref: j,
          id: h.value,
          name: i.name,
          value: t.value,
          options: M.value,
          disabled: t.disabled,
          readonly: t.readonly,
          "aria-label": k.value,
          placeholder: t.placeholder,
          searchable: i.searchable,
          "onUpdate:value": pe[3] || (pe[3] = (q) => n("update:value", q))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : t.type === "color" ? (O(), R("input", {
          key: 5,
          id: h.value,
          name: i.name || h.value,
          ref: j,
          type: "color",
          value: t.value,
          disabled: t.disabled,
          onInput: pe[4] || (pe[4] = (q) => n("update:value", q.target.value))
        }, null, 40, Eu)) : t.type === "textarea" ? (O(), R("textarea", {
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
          onInput: pe[5] || (pe[5] = (q) => n("update:value", q.target.value))
        }, null, 40, Mu)) : se("", !0),
        S("last") ? (O(), Ie(ki, {
          key: 7,
          id: h.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : se("", !0)
      ], 64)),
      t.info ? (O(), R("small", Nu, ve(t.info), 1)) : se("", !0),
      ps(Y.$slots, "default")
    ], 10, Iu));
  }
}), Bu = {
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
}, Vu = {
  key: 0,
  class: "title"
}, Du = ["onClick"], ju = { class: "ov-label" }, Ru = {
  key: 0,
  class: "ov-count"
}, Gu = ["onClick"], qu = { class: "ov-body" }, _u = {
  key: 0,
  class: "ov-row"
}, Uu = { class: "ov-key" }, Wu = ["onClick"], zu = {
  key: 0,
  class: "ov-inline-array"
}, Hu = ["onClick"], Ku = {
  key: 2,
  class: "ov-null"
}, Zu = { key: 3 };
function Ju(t, e, n, i, s, a) {
  const o = mn("ObjectViewer", !0);
  return O(), R("div", {
    ref: "container",
    class: De(["smartcut-object-viewer main", { "has-scroll": s.hasScroll, "at-bottom": s.atBottom }]),
    onScroll: e[0] || (e[0] = (...l) => a.handleScroll && a.handleScroll(...l))
  }, [
    n.title ? (O(), R("div", Vu, ve(n.title), 1)) : se("", !0),
    (O(!0), R(Ze, null, at(n.data, (l, r) => (O(), R("div", {
      key: r,
      class: "ov-node"
    }, [
      Z("div", {
        class: "ov-header",
        onClick: (h) => a.toggle(r)
      }, [
        (O(), R("svg", {
          class: De(["ov-chevron", { "is-open": s.expanded[r] }]),
          width: "10",
          height: "10",
          viewBox: "0 0 10 10"
        }, [...e[1] || (e[1] = [
          Z("path", {
            d: "M3 1 L7 5 L3 9",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])], 2)),
        Z("span", ju, ve(n.paths[r] ?? r), 1),
        a.isObjectOrArray(l) ? (O(), R("span", Ru, ve(Object.keys(l).length), 1)) : se("", !0),
        Z("span", {
          class: "ov-copy",
          title: "Copy as JSON",
          onClick: xs((h) => a.copyToClipboard(l, n.paths[r] ?? r), ["stop"])
        }, [...e[2] || (e[2] = [
          Z("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            Z("rect", {
              x: "5",
              y: "5",
              width: "9",
              height: "9",
              rx: "1"
            }),
            Z("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
          ], -1)
        ])], 8, Gu)
      ], 8, Du),
      Ei(Z("div", qu, [
        a.isObjectOrArray(l) ? (O(!0), R(Ze, { key: 1 }, at(l, (h, m) => (O(), R("div", {
          key: m,
          class: "ov-row"
        }, [
          Z("span", Uu, ve(m) + ":", 1),
          a.isObjectOrArray(h) && h !== null && !a.isSimpleArray(h) ? (O(), R("span", {
            key: 0,
            class: "ov-copy ov-copy-inline",
            title: "Copy all as JSON",
            onClick: (k) => a.copyToClipboard(h, m)
          }, [...e[3] || (e[3] = [
            Z("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              Z("rect", {
                x: "5",
                y: "5",
                width: "9",
                height: "9",
                rx: "1"
              }),
              Z("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
            ], -1)
          ])], 8, Wu)) : se("", !0),
          Z("span", {
            class: De(["ov-val", a.getValueType(h)])
          }, [
            a.isSimpleArray(h) ? (O(), R("span", zu, [
              bt(" [" + ve(h.map((k) => a.formatValue(k)).join(", ")) + "] ", 1),
              Z("span", {
                class: "ov-copy ov-copy-inline",
                title: "Copy as JSON",
                onClick: (k) => a.copyToClipboard(h, m)
              }, [...e[4] || (e[4] = [
                Z("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  Z("rect", {
                    x: "5",
                    y: "5",
                    width: "9",
                    height: "9",
                    rx: "1"
                  }),
                  Z("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
                ], -1)
              ])], 8, Hu)
            ])) : a.isObjectOrArray(h) && h !== null ? (O(), Ie(o, {
              key: 1,
              data: Array.isArray(h) ? h : [h],
              paths: a.getArrayPaths(h, m),
              root: !1
            }, null, 8, ["data", "paths"])) : h === null ? (O(), R("span", Ku, "null")) : (O(), R("span", Zu, ve(a.formatValue(h)), 1))
          ], 2)
        ]))), 128)) : (O(), R("div", _u, [
          Z("span", {
            class: De(["ov-val", a.getValueType(l)])
          }, ve(a.formatValue(l)), 3)
        ]))
      ], 512), [
        [Ps, s.expanded[r]]
      ])
    ]))), 128))
  ], 34);
}
const Xa = /* @__PURE__ */ Mn(Bu, [["render", Ju]]), Yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Xa }, Symbol.toStringTag, { value: "Module" })), Xu = {
  key: 0,
  class: "action-bar"
}, Qu = { class: "add-custom" }, ed = ["disabled"], td = { class: "c-field-action extras-field-group" }, nd = ["disabled", "title", "onClick"], id = {
  key: 0,
  class: "price"
}, sd = /* @__PURE__ */ Qe({
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
      getLocationLabel: m,
      getInputType: k,
      getInputConfigForLocation: p,
      getSelectOptions: F,
      getPriceDisplay: I,
      shouldShowDeleteButton: B,
      getLocationGroup: M,
      isLocationVisible: V,
      handleInputChange: U,
      handleDelete: Q
    } = kr({
      shape: kt(i, "shape"),
      extraType: i.extraType,
      allOptions: kt(i, "allOptions"),
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: kt(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      displayNames: kt(i, "displayNames"),
      orientationModel: i.orientationModel,
      stockGrain: i.stockGrain,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: kt(i, "locations"),
      locationGroups: kt(i, "locationGroups")
    }), {
      newCustomName: he,
      canAddCustomName: $,
      isActionMenuDisabled: N,
      customNameActions: ee,
      handleAddCustomName: y,
      handleCustomNameAction: j
    } = Sr({
      extraType: i.extraType,
      customNames: kt(i, "customNames"),
      usedNames: kt(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: F,
      onCustomNameAdded: (q) => s("custom-name-added", i.extraType, q),
      onCustomNameDeleted: (q) => s("custom-name-deleted", i.extraType, q)
    }), {
      renderLocations: S,
      getInputId: J,
      getDeleteConfig: ne
    } = xr({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      shouldShowAll: o,
      getInputType: k,
      getInputConfig: (q, de) => p(q, de),
      getAllInputConfig: (q) => p("all", q),
      getInputConfigForLocation: p,
      canDelete: h,
      getLocationLabel: m,
      shouldShowDeleteButton: B,
      locations: kt(i, "locations"),
      locationGroups: kt(i, "locationGroups"),
      shape: kt(i, "shape"),
      orientationModel: i.orientationModel
    }), ae = K(!1), oe = T(() => (q) => {
      const de = M(q);
      return de === "all" || de === "faces" || de === "sides";
    }), Me = T(() => (q) => Fi(i.extraType).includes(q) ? Kn(q) === "face" : !1), Y = T(() => (q) => Fi(i.extraType).includes(q) ? Kn(q) === "side" : !1), pe = T(() => (q) => i.shape.issues?.some((de) => de.category?.includes("extras") && de.field?.some(($e) => $e[0] === "extras" && $e[1] === i.extraType && $e[2] === q)) ?? !1);
    return gn(() => {
      const de = i.shape.extras?.[i.extraType];
      if (!de || typeof de != "object") {
        ae.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (l.value && !("faces" in de)) {
        ae.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (r.value && !("sides" in de)) {
        ae.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (q, de) => {
      const $e = mn("FontAwesomeIcon");
      return ae.value ? se("", !0) : (O(), R("div", {
        key: 0,
        class: De(["extras group", [t.extraType]]),
        style: St({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (O(), R("div", Xu, [
          Z("div", Qu, [
            je(Ss, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: A(he),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": de[0] || (de[0] = (re) => he.value = re || ""),
              onKeydown: Wo(A(y), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            Z("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !A($),
              onClick: de[1] || (de[1] = //@ts-ignore
              (...re) => A(y) && A(y)(...re))
            }, " Add ", 8, ed)
          ]),
          je(au, {
            "menu-items": A(ee),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: A(N),
            onAction: A(j)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : se("", !0),
        Z("div", {
          class: "inputs extras-grid grid-layout",
          style: St({ "grid-template-columns": t.enablePricing ? "1fr max-content" : "1fr" })
        }, [
          (O(!0), R(Ze, null, at(A(S), (re) => (O(), R(Ze, { key: re }, [
            A(V)(re) ? (O(), R(Ze, { key: 0 }, [
              Z("div", td, [
                Z("label", {
                  class: De(["extras-location-label", {
                    "group-label": oe.value(re),
                    "face-label": Me.value(re),
                    "side-label": Y.value(re),
                    "has-validation-issue": pe.value(re)
                  }])
                }, ve(A(m)(re)), 3),
                (O(!0), R(Ze, null, at(t.allOptions, (rt, nt) => (O(), Ie(Hn, fn({
                  key: `${re}-${nt}`,
                  id: A(J)(re, nt),
                  "data-field": `${t.extraType}-${re}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": nt
                }, { ref_for: !0 }, A(p)(re, nt), {
                  "onUpdate:value": (tt) => A(U)(re, nt, tt)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                A(ne)(re).show ? (O(), R("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !A(ne)(re).enabled,
                  title: A(ne)(re).ariaLabel,
                  onClick: (rt) => A(Q)(re)
                }, [
                  je($e, { icon: ["fass", "trash"] })
                ], 8, nd)) : se("", !0)
              ]),
              t.enablePricing ? (O(), R("div", id, ve(A(I)(re)), 1)) : se("", !0)
            ], 64)) : se("", !0)
          ], 64))), 128))
        ], 4),
        i.debug ? (O(), Ie(Xa, {
          key: 1,
          title: `${t.extraType} debug`,
          data: [{
            extraType: t.extraType,
            mode: A(a),
            allOptions: i.allOptions,
            labels: i.labels,
            pricing: i.pricing,
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
        }, null, 8, ["title", "data", "paths"])) : se("", !0)
      ], 6));
    };
  }
}), rs = /* @__PURE__ */ Mn(sd, [["__scopeId", "data-v-3e97d2be"]]);
let ht = null;
function ad(t, e) {
  return ht = ld(t, e), ht;
}
function Qa(t) {
  if (!ht) throw new Error("Pagination not initialized");
  return {
    items: T(() => ht.getItems(t)),
    currentPage: T(() => ht.getCurrentPage(t)),
    currentIndex: T(() => ht.getCurrentIndex(t)),
    totalPages: T(() => ht.paginatedArrays.value.get(t)?.totalPages || 0),
    itemsPerPage: T(() => ht.getItemsPerPage(t)),
    resetPagination: () => ht.resetPagination(t),
    nextPage: () => ht.nextPage(t),
    previousPage: () => ht.previousPage(t),
    goToPage: (e) => ht.goToPage(t, e),
    setItemsPerPage: (e) => ht.setItemsPerPage(t, e)
  };
}
function od(t, e) {
  const n = Qa(t);
  return n.setItemsPerPage(e), n;
}
function ld(t, e) {
  const n = /* @__PURE__ */ new Map(), i = K({}), s = ($, N) => {
    if ("value" in N) {
      const ee = e[$]?.alwaysInclude;
      Ue(
        () => {
          const y = N.value;
          return ee ? y.filter((j) => !ee(j)).length : y.length;
        },
        (y, j) => {
          const S = i.value[$];
          if (!S) return;
          const J = Math.ceil(y / S.itemsPerPage);
          if (y > j) {
            const ne = Math.ceil(y / S.itemsPerPage), ae = S.currentPage * S.itemsPerPage;
            y > ae && S.currentPage < ne && (S.currentPage = ne);
          } else y < j && S.currentPage > J && (S.currentPage = Math.max(1, J));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(t).forEach(([$, N]) => {
    const ee = e[$];
    if (!ee)
      throw new Error(`Missing pagination options for array: ${$}`);
    n.set($, N), i.value[$] = {
      currentPage: ee.initialPage || 1,
      itemsPerPage: ee.itemsPerPage
    }, s($, N);
  });
  const a = ($, N) => {
    const ee = i.value[$];
    if (!ee) return;
    const y = o($);
    ee.currentPage = Math.max(1, Math.min(N, y));
  }, o = ($) => {
    const N = n.get($);
    if (!N) return 0;
    const ee = A(N), y = i.value[$];
    if (!y) return 0;
    const j = e[$], S = j?.alwaysInclude ? ee.filter((J) => !j.alwaysInclude(J)) : ee;
    return Math.max(1, Math.ceil(S.length / y.itemsPerPage));
  }, l = T(() => {
    const $ = /* @__PURE__ */ new Map();
    return n.forEach((N, ee) => {
      const y = A(N), j = Array.isArray(y) ? y : [], S = i.value[ee], J = e[ee], ne = J?.alwaysInclude ? j.filter(J.alwaysInclude) : [], ae = J?.alwaysInclude ? j.filter((q) => !J.alwaysInclude(q)) : j, oe = Math.ceil(ae.length / S.itemsPerPage), Me = (S.currentPage - 1) * S.itemsPerPage, Y = Me + S.itemsPerPage, pe = [
        ...ne,
        ...ae.slice(Me, Y)
      ];
      $.set(ee, {
        items: pe,
        currentPage: S.currentPage,
        totalPages: oe,
        isLastPage: S.currentPage >= oe,
        hasNextPage: S.currentPage < oe,
        hasPreviousPage: S.currentPage > 1
      });
    }), $;
  });
  return {
    paginatedArrays: l,
    addArray: ($, N, ee) => {
      n.set($, N), i.value[$] = {
        currentPage: ee.initialPage || 1,
        itemsPerPage: ee.itemsPerPage
      }, e[$] = ee, s($, N);
    },
    removeArray: ($) => {
      n.delete($);
      const N = { ...i.value };
      delete N[$], i.value = N;
    },
    hasArray: ($) => n.has($),
    clearArrays: () => {
      n.clear(), i.value = {};
    },
    goToPage: a,
    nextPage: ($) => {
      const N = i.value[$];
      N && a($, N.currentPage + 1);
    },
    previousPage: ($) => {
      const N = i.value[$];
      N && a($, N.currentPage - 1);
    },
    resetPagination: ($) => {
      if ($) {
        const N = i.value[$];
        N && (N.currentPage = 1);
      } else
        Object.values(i.value).forEach((N) => {
          N.currentPage = 1;
        });
    },
    getCurrentPage: ($) => i.value[$]?.currentPage || 1,
    getCurrentIndex: ($) => {
      const N = i.value[$];
      return N ? (N.currentPage - 1) * N.itemsPerPage : 0;
    },
    getItemsPerPage: ($) => {
      const N = i.value[$];
      if (!N) throw new Error(`No pagination state found for key: ${$}`);
      return N.itemsPerPage;
    },
    setItemsPerPage: ($, N) => {
      const ee = i.value[$];
      ee && (ee.itemsPerPage = N, a($, ee.currentPage));
    },
    getStartIndex: ($) => {
      const N = i.value[$];
      return N ? (N.currentPage - 1) * N.itemsPerPage : 0;
    },
    getItems: ($) => l.value.get($)?.items || []
  };
}
const rd = {
  key: 0,
  class: "menu pagination"
}, cd = { class: "c-btn-group" }, ud = { class: "pagination-info font-sm" }, dd = /* @__PURE__ */ Qe({
  __name: "Pagination",
  props: {
    arrayKey: {},
    disabled: { type: Boolean, default: !1 },
    maxPage: { default: 0 },
    itemsPerPage: { default: 20 }
  },
  setup(t) {
    const e = t, { currentPage: n, totalPages: i, goToPage: s } = od(e.arrayKey, e.itemsPerPage), a = () => {
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
    return (h, m) => {
      const k = mn("FontAwesomeIcon");
      return A(i) > 1 ? (O(), R("div", rd, [
        Z("div", cd, [
          Z("button", {
            type: "button",
            class: De(["c-btn first", { disabled: t.disabled || A(n) === 1 }]),
            onClick: a
          }, [
            je(k, { icon: ["fass", "chevrons-left"] }),
            bt(ve(A(Se)("pagination.first")), 1)
          ], 2),
          Z("button", {
            type: "button",
            class: De(["c-btn prev", { disabled: t.disabled || A(n) === 1 }]),
            onClick: o
          }, [
            je(k, { icon: ["fass", "chevron-left"] }),
            bt(ve(A(Se)("pagination.previous")), 1)
          ], 2),
          Z("button", {
            type: "button",
            class: De(["c-btn next", { disabled: t.disabled || A(n) >= A(i) || t.maxPage > 0 && A(n) >= t.maxPage }]),
            onClick: l
          }, [
            bt(ve(A(Se)("pagination.next")), 1),
            je(k, { icon: ["fass", "chevron-right"] })
          ], 2),
          Z("button", {
            type: "button",
            class: De(["c-btn last", { disabled: t.disabled || A(n) >= A(i) || t.maxPage > 0 && A(n) >= t.maxPage }]),
            onClick: r
          }, [
            bt(ve(A(Se)("pagination.last")), 1),
            je(k, { icon: ["fass", "chevrons-right"] })
          ], 2)
        ]),
        Z("div", ud, ve(A(Se)("pagination.page")) + " " + ve(A(n)) + " / " + ve(A(i)), 1)
      ])) : se("", !0);
    };
  }
});
function fd(t) {
  const e = K({
    key: null,
    function: null,
    sortingKey: null,
    definition: null
  }), n = K("asc"), i = K(!1), s = (l, r) => l == null && r == null ? 0 : l == null ? 1 : r == null ? -1 : typeof l == "string" && typeof r == "string" ? l.localeCompare(r) : typeof l == "number" && typeof r == "number" ? l - r : String(l).localeCompare(String(r)), a = (l) => typeof l == "function" ? (e.value = { ...e.value, function: l, key: null, sortingKey: null }, l) : typeof l == "string" && l in xi ? (e.value = { ...e.value, sortingKey: l, key: null, function: null }, xi[l]) : Array.isArray(l) ? (e.value = { ...e.value, definition: l, key: null, function: null, sortingKey: null }, bl(l)) : (e.value = { ...e.value, key: l, function: null, sortingKey: null }, (r, h) => {
    const m = r[l], k = h[l];
    return s(m, k);
  });
  return {
    sort: (l) => {
      const r = typeof l == "function" && l === e.value.function || typeof l == "string" && l in xi && l === e.value.sortingKey || Array.isArray(l) && JSON.stringify(l) === JSON.stringify(e.value.definition) || l === e.value.key;
      i.value ? r ? n.value = n.value === "asc" ? "desc" : "asc" : n.value = "desc" : (n.value = "desc", i.value = !0);
      const h = a(l);
      t.value.sort((m, k) => {
        const p = h(m, k);
        return n.value === "desc" ? -p : p;
      }), lt(t);
    },
    key: T(() => e.value.key),
    direction: T(() => n.value),
    sortingKey: T(() => e.value.sortingKey),
    sortFn: T(() => e.value.function),
    definition: T(() => e.value.definition)
  };
}
const pd = (t) => ![
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
].includes(t), hd = { class: "label" }, gd = { class: "c-btn-group" }, md = ["onClick"], vd = ["onClick"], bd = ["onClick"], yd = /* @__PURE__ */ Qe({
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
    const e = t, { sort: n, key: i, direction: s, sortingKey: a, sortFn: o } = fd(e.list), l = (m) => m.replace(/([A-Z])/g, " $1").replace(/^./, (k) => k.toUpperCase()).trim(), r = (m) => m.replace(/([A-Z])/g, " $1").replace(/^./, (k) => k.toUpperCase()).trim(), h = (m) => {
      e.disabled || n(m);
    };
    return (m, k) => {
      const p = mn("FontAwesomeIcon");
      return O(), R("div", {
        class: De(["menu sorting", { disabled: t.disabled }])
      }, [
        Z("div", hd, ve(e.label), 1),
        Z("div", gd, [
          (O(!0), R(Ze, null, at(t.sortKeys, (F) => (O(), R("button", {
            type: "button",
            key: F.key,
            class: De(["c-btn", {
              selected: A(a) === F.key
            }]),
            onClick: (I) => h(F.key)
          }, [
            A(a) === F.key && A(pd)(F.key) ? (O(), Ie(p, {
              key: 0,
              icon: ["fass", A(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : se("", !0),
            bt(" " + ve(F.label || l(F.key)), 1)
          ], 10, md))), 128)),
          (O(!0), R(Ze, null, at(t.objectKeys, (F) => (O(), R("button", {
            type: "button",
            key: F.key,
            class: De(["c-btn", {
              selected: A(i) === F.key
            }]),
            onClick: (I) => h(F.key)
          }, [
            A(i) === F.key ? (O(), Ie(p, {
              key: 0,
              icon: ["fass", A(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : se("", !0),
            bt(" " + ve(F.label || r(F.key)), 1)
          ], 10, vd))), 128)),
          (O(!0), R(Ze, null, at(t.sortFunctions, (F, I) => (O(), R("button", {
            type: "button",
            key: I,
            class: De(["c-btn", {
              selected: A(o) === F.function
            }]),
            onClick: (B) => h(F.function)
          }, [
            A(o) === F.function ? (O(), Ie(p, {
              key: 0,
              icon: ["fass", A(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : se("", !0),
            bt(" " + ve(F.label || `${t.label} ${I + 1}`), 1)
          ], 10, bd))), 128))
        ])
      ], 2);
    };
  }
}), wd = {
  key: 1,
  class: "active-stock-info"
}, kd = {
  key: 0,
  style: { color: "grey" }
}, Sd = ["onMousedown"], xd = {
  key: 0,
  class: "stack font-sm"
}, Pd = { class: "name" }, Cd = /* @__PURE__ */ Qe({
  __name: "Navigation",
  props: {
    useStack: { type: Boolean, default: !0 },
    display: { type: Boolean, default: !0 },
    flipY: { type: Boolean, default: !1 },
    showSorting: { type: Boolean, default: !0 }
  },
  emits: ["show"],
  setup(t, { emit: e }) {
    const { r: n, stackedStock: i, activeStock: s } = Mi(), { items: a } = Qa("stockList"), o = wn(() => import("./Diagram-7UZ1uKK7.js")), l = wn(() => import("./StockNavigation-CwjuNhT0.js")), r = K(null), h = K(null), m = K(null), k = t, p = K(0), { stop: F } = xa(r, zo((Q) => {
      const he = Q[0], { width: $ } = he.contentRect;
      $ > 0 && (p.value = $);
    }, 100)), I = T(() => {
      const Q = s.value;
      if (!Q) return "";
      const he = [Q.id];
      return Q.name && he.push(Q.name), Q.material && he.push(Q.material), he.join(" • ");
    }), B = T(() => {
      const $ = Math.floor((p.value + 10) / 210);
      return Math.max($, 1);
    }), M = (Q) => {
      let he = "";
      return Q.t && (he = Q.t.toString()), Q.name ? `${Q.id}: ${Q.name.toUpperCase()}${he ? "-" + he : ""}` : Q.material ? `${Q.id}: ${Q.material.toUpperCase()}${he ? "-" + he : ""}` : Q.id;
    }, V = e, U = (Q) => {
      V("show", Q);
    };
    return Qn(() => F()), (Q, he) => k.display ? (O(), R("div", {
      key: 0,
      id: "navigation",
      ref_key: "navigationRef",
      ref: r
    }, [
      k.showSorting ? (O(), Ie(yd, {
        key: 0,
        list: A(n).stockList,
        label: "Sort stock",
        "object-keys": [{ key: "id", label: "ID" }, { key: "l", label: "Length" }, { key: "w", label: "Width" }]
      }, null, 8, ["list"])) : se("", !0),
      A(s) ? (O(), R("div", wd, [
        bt(ve(I.value) + " ", 1),
        A(s).code ? (O(), R("div", kd, ve(A(s).code), 1)) : se("", !0)
      ])) : se("", !0),
      p.value <= 900 ? (O(), Ie(A(l), {
        key: 2,
        ref_key: "stockNavigationRef",
        ref: h,
        "stock-list": A(i),
        embed: !1,
        "use-stack": k.useStack,
        "active-stock-id": A(n).activeStockAutoId.value,
        onShowStock: U
      }, null, 8, ["stock-list", "use-stack", "active-stock-id"])) : se("", !0),
      p.value > 900 ? (O(), R("div", {
        key: 3,
        id: "navigation-wrapper",
        style: St({ gridTemplateColumns: `repeat(${B.value}, 1fr)` })
      }, [
        (O(!0), R(Ze, null, at(A(a), ($, N) => (O(), R("div", {
          key: $.autoId,
          onMousedown: (ee) => U($.autoId),
          class: De({ selected: $.autoId === A(n).activeStockAutoId.value })
        }, [
          typeof $?.stack?.number == "number" && $.stack.number > 1 ? (O(), R("div", xd, ve($.stack.number), 1)) : se("", !0),
          je(A(o), {
            "element-id": `nav-diagram-${N}`,
            main: !1,
            "stock-auto-id": $.autoId,
            "flip-y": k.flipY
          }, null, 8, ["element-id", "stock-auto-id", "flip-y"]),
          Z("div", Pd, ve(M($)), 1)
        ], 42, Sd))), 128))
      ], 4)) : se("", !0),
      p.value > 900 ? (O(), Ie(dd, {
        key: 4,
        ref_key: "paginationRef",
        ref: m,
        "array-key": "stockList",
        "items-per-page": 10
      }, null, 512)) : se("", !0)
    ], 512)) : se("", !0);
  }
}), Id = {
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
}, Ad = { id: "spinner" }, Od = ["width", "height"], Ld = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Fd(t, e, n, i, s, a) {
  return O(), R("div", Ad, [
    n.complete ? se("", !0) : (O(), R("svg", {
      key: 0,
      class: "loading",
      style: St({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      Ho('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, Od)),
    n.complete ? (O(), R("svg", {
      key: 1,
      class: "complete",
      style: St({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      Z("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : se("", !0),
    n.showNumber ? (O(), R("div", Ld, ve(n.number), 1)) : se("", !0)
  ]);
}
const ma = /* @__PURE__ */ Mn(Id, [["render", Fd]]), Td = { id: "mini-stock-nav" }, $d = ["onMousedown"], Ed = { class: "id" }, Md = /* @__PURE__ */ Qe({
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
    return (a, o) => (O(), R("div", Td, [
      (O(!0), R(Ze, null, at(n.stockList, (l, r) => (O(), R("button", {
        type: "button",
        key: r,
        class: De(["c-btn c-btn--col-4 c-btn--sm", { selected: l.autoId === n.activeStockId }]),
        style: St({
          backgroundColor: l.autoId === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
        }),
        onMousedown: (h) => s(l.autoId)
      }, [
        Z("div", Ed, ve(r + 1), 1),
        Ei(Z("div", { class: "stack" }, ve(l.stack.number), 513), [
          [Ps, typeof l?.stack?.number == "number" && l.stack.number > 1]
        ])
      ], 46, $d))), 128))
    ]));
  }
}), va = K({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function eo() {
  return {
    progress: va,
    reset: () => {
      va.value = {
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
const Nd = Yl(() => H({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: Ht(
    ce().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: Ht(
    v().optional(),
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
  t: Ht(
    _e([_(), v()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
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
  q: Ht(
    _().int().positive().default(1),
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
  name: yl({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: Ht(
    Rt(["n", "l", "w"]).default("n").optional(),
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
  banding: Ht(
    ce().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: Ht(
    H({
      enabled: ce().default(!1),
      type: v().optional(),
      sides: _().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: Ht(
    H({
      enabled: ce().default(!1),
      operations: ue(Pe()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: Ht(
    ce().default(!1),
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
function Bd(t) {
  const e = Nd._def.getter();
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
class Vd {
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
    if (n instanceof Hs) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof mi)
          return this.isIntegerNumber(s) ? "integer" : "number";
    }
    return n instanceof mi ? this.isIntegerNumber(n) ? "integer" : "number" : n instanceof Xl ? "string" : n instanceof Ql ? "boolean" : n instanceof Ks || n._def?.typeName === "ZodNativeEnum" ? "enum" : n instanceof er ? "array" : n instanceof vi ? "object" : "string";
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
    if (n instanceof Hs) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof mi) {
          this.extractNumberConstraints(e, s), e.type = "number";
          break;
        }
    } else n instanceof mi && this.extractNumberConstraints(e, n);
    if (!e.options) {
      if (n instanceof Ks) {
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
    if (e instanceof is || e instanceof ss)
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
    return e._def?.typeName === "ZodEffects" ? this.isOptional(e._def?.schema) : e instanceof as ? this.isOptional(e._def?.innerType) : !1;
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
    if (e instanceof is || e instanceof ss)
      return this.unwrapField(e._def?.innerType);
    if (e instanceof as || i === "ZodDefault")
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
    if (e instanceof as) {
      const n = e._def?.defaultValue;
      return typeof n == "function" ? n() : n;
    }
    if (e.constructor?.name === "ZodPipe" || e._def?.type === "pipe") {
      const n = e._def?.in;
      if (n)
        return this.getDefaultValue(n);
    }
    if (e instanceof is || e instanceof ss) {
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
    return e instanceof vi;
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
    if (n instanceof vi) {
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
    if (!(i instanceof vi))
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
const ba = new Vd();
function Dd(t, e = {}) {
  const n = K([]), i = K([]), s = K(/* @__PURE__ */ new Map()), a = K(/* @__PURE__ */ new Map()), o = (F) => {
    let I = ba.generateFields(t);
    e.overrides && (I = I.map((M) => {
      const V = e.overrides[M.name];
      if (V) {
        const U = { ...M, ...V };
        return V.min === void 0 && M.min !== void 0 && (U.min = M.min), V.max === void 0 && M.max !== void 0 && (U.max = M.max), U;
      }
      return M;
    })), a.value.clear();
    for (const M of I)
      a.value.set(M.name, M);
    const B = F || e.allowedFieldIds;
    if (B && B.length > 0) {
      const M = B, V = /* @__PURE__ */ new Map();
      for (const Q of I)
        V.set(Q.name, Q);
      const U = [];
      for (const Q of M) {
        const he = V.get(Q);
        he && U.push(he);
      }
      I = U;
    }
    e.filter && (I = I.filter(e.filter)), n.value = I, s.value.clear();
    for (const M of I)
      s.value.set(M.name, M);
    e.grouped && (i.value = ba.groupFields(I));
  };
  o();
  const l = (F) => s.value.get(F), r = (F) => a.value.get(F), h = () => a.value, m = (F, I) => {
    const B = s.value.get(F);
    B && Object.assign(B, I);
  }, k = (F) => {
    const I = l(F);
    return !(!I || I.hidden);
  }, p = (F) => {
    const I = l(F);
    if (!I) return {};
    const B = {};
    return I.required && (B.required = !0), I.type === "number" && (I.min !== void 0 && (B.min = I.min), I.max !== void 0 && (B.max = I.max)), B;
  };
  return {
    fields: T(() => n.value),
    groups: T(() => i.value),
    fieldMap: T(() => s.value),
    allFieldsMap: T(() => a.value),
    getField: l,
    getFieldMetadata: r,
    getAllFieldMetadata: h,
    updateField: m,
    isFieldVisible: k,
    getFieldValidation: p,
    regenerateFields: o
  };
}
function jd(t) {
  const { stockType: e, materials: n = [], minDimension: i = 0 } = t, s = Bd(e), a = {
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
  }), Dd(s, {
    ...t,
    overrides: { ...a, ...t.overrides }
  });
}
const { progress: Kt, reset: ya } = eo();
function Rd(t) {
  const e = "https://api.cutlistevo.com/";
  let n;
  const i = () => {
    n = tr(e, {
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
      Kt.value.complete = !0, t.callbacks?.onResult?.(o), n.disconnect();
    }), n.on("queued", () => {
      ya(), Kt.value.queued = !0;
    }), n.on("started", () => {
      Kt.value.started = !0;
    }), n.on("progress", (o) => {
      o?.data?.message === "result" ? Kt.value.resultCount++ : (Kt.value.stockCount = o.data.stockCount, Kt.value.shapeCount = o.data.shapeCount), o?.data?.phase && (Kt.value.phase = o.data.phase), o?.data?.placed !== void 0 && (Kt.value.placed = o.data.placed, Kt.value.total = o.data.total);
    }), n.on("user", (o) => {
      t.callbacks?.onUser?.(o);
    }), n.on("error", (o) => {
      t.refs?.thinking && (t.refs.thinking.value = !1), ya(), t.callbacks?.onError?.(o);
    });
  }, s = () => n?.disconnect(), a = () => n?.connect();
  return i(), {
    socket: n,
    connect: a,
    disconnect: s
  };
}
class rn extends Error {
  constructor(e, n) {
    super(e), this.code = n, this.name = "FormulaError";
  }
}
class Is {
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
      if (n === 0) throw new rn("Division by zero", "DIVISION_BY_ZERO");
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
      const [h, m] = r.split(".");
      if (!e.nodes.has(r)) {
        const B = s[h];
        if (B)
          return m === "q" ? B.q : B[m];
        throw new Error(`Node not found: ${r}`);
      }
      if (o.has(r))
        throw new Error(`Circular dependency detected at ${r}`);
      const k = e.nodes.get(r);
      if (typeof k.formula == "number")
        return a.set(r, k.formula), k.formula;
      o.add(r);
      const p = e.edges.get(r) || /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
      for (const B of p)
        if (B.startsWith("input.")) {
          const M = B.split(".")[1];
          F.set(B, i[M]);
        } else
          F.set(B, l(B));
      const I = this.evaluateFormulaWithDeps(k.formula, F, i);
      return a.set(r, I), o.delete(r), I;
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
    if (!this.spec?.inputs) throw new rn("No input specifications defined", "NO_INPUTS");
    for (const [n, i] of Object.entries(this.spec.inputs)) {
      const s = e[n];
      if (s === void 0)
        throw new rn(`Missing required input: ${n}`, "MISSING_INPUT");
      if (s < i.min || s > i.max)
        throw new rn(`Input ${n} value ${s} out of range [min: ${i.min}, max: ${i.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new rn("No input specifications defined", "NO_INPUTS");
    const n = Object.keys(this.spec.inputs);
    if (e.length !== n.length)
      throw new rn(`Expected ${n.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let i = 0;
    for (const s of e) {
      const a = n[i], o = this.spec.inputs[a];
      if (s.value === null || s.value === void 0)
        throw new rn(`Missing value for field ${i}`, "MISSING_FIELD_VALUE");
      if (s.value < o.min || s.value > o.max)
        throw new rn(`Field ${i} value ${s.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
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
const Xt = H({
  min: _().min(0).optional(),
  max: _().min(0).optional()
}).optional(), Gd = H({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: v().min(1),
  // Dimension constraints for this location
  longSide: Xt,
  shortSide: Xt,
  t: Xt,
  // Formula-based validation
  formula: v().optional(),
  // Custom message for this location
  message: v().optional()
}), cs = H({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: Xt,
  shortSide: Xt,
  t: Xt,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: v().optional(),
  // Custom validation message (optional)
  message: v().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: ue(Gd).optional()
}), qd = H({
  banding: cs.optional(),
  finish: cs.optional(),
  planing: cs.optional()
}).optional();
function _d(t, e) {
  try {
    const n = new Is({}), i = n.parse(t);
    return !!n.evaluate(i, {
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0,
      t: e.t || 0
    });
  } catch (n) {
    return console.warn("Formula evaluation error:", n, "Formula:", t), !0;
  }
}
function Ud(t, e, n) {
  const i = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : "short side", s = t.constraint === "min" ? "minimum" : "maximum";
  return `${t.location ? `${t.location}: ` : ""}${e.charAt(0).toUpperCase() + e.slice(1)} requires ${i} ${s} of ${t.limit} (current: ${t.value})`;
}
function Wd(t, e, n) {
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
function zd(t, e, n, i) {
  const { rule: s, message: a, source: o } = Wd(e, n, i), l = [], r = (m, k, p) => {
    k == null || p === void 0 || (p.min !== void 0 && k < p.min && l.push({
      valid: !1,
      dimension: m,
      value: k,
      constraint: "min",
      limit: p.min,
      location: n
    }), p.max !== void 0 && k > p.max && l.push({
      valid: !1,
      dimension: m,
      value: k,
      constraint: "max",
      limit: p.max,
      location: n
    }));
  };
  r("longSide", t.longSide, s.longSide), r("shortSide", t.shortSide, s.shortSide);
  const h = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(h) || r("t", h, s.t), s.formula && (_d(s.formula, {
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
H({
  // Context - using z.any() for complex external types
  job: Pe().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: v().nullable().default(null).describe("Socket.io connection ID"),
  user: Pe().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: Pe().describe("Configuration object"),
  // Type: Config
  api: ce().nullable().default(null).describe("API mode flag"),
  app: ce().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: Sl("Saw").describe("Saw configuration"),
  stockList: on("Stock").default([]).describe("List of stock materials"),
  shapeList: Zi(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: on("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: on("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: on("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Zi(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Zi(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: kl,
  // Results storage
  cutList: on("Cut").default([]).describe("List of cuts to make"),
  segmentList: on("Segment").default([]).describe("List of segments"),
  offcuts: on("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: on("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: ce().default(!1).describe("Use inventory system"),
  successMetric: v().default(xl.successMetric).describe("Metric for optimization success"),
  enableEvo: ce().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Le(v(), Pe()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: Pe().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: Pe().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: H({
    placement: _().default(0),
    group: _().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: ce().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: ce().default(!1).describe("Run guillotine second pass"),
  runningEvo: ce().default(!1).describe("Currently running evolution"),
  evolutionVisData: ue(Le(v(), nr())).default([]).describe("Evolution visualization data"),
  final: ce().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: ce().default(!1).describe("Has minimum spacing requirement")
});
const Hd = Rt(["decimal", "fraction"]), Kd = H({
  job: Pe().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: Tn.extend({ autoId: v().optional(), __entityType: v().optional() }),
  inputShapes: ue($n.extend({ autoId: v().optional(), __entityType: v().optional() })),
  inputStock: ue(kn.extend({ autoId: v().optional(), __entityType: v().optional() })),
  inputUserGroups: ue(wl.extend({ autoId: v().optional(), __entityType: v().optional() })).optional(),
  // Number format for conversion
  numberFormat: Hd.optional(),
  // Algorithm configuration
  enableEvo: ce().default(!0),
  weighting: Pe().optional(),
  successMetric: v().optional(),
  useInventory: ce().default(!1),
  // Context
  socketId: v().optional(),
  user: Pe().optional(),
  // IUser type
  // Application flags
  widget: ce().optional(),
  api: ce().optional(),
  app: ce().optional(),
  domain: v().optional(),
  // Extras options (centralized configuration)
  extrasOptions: H({
    banding: H({
      options: H({
        sides: Le(v(), ue(v())).optional()
      }).optional()
    }).optional(),
    finish: H({
      options: H({
        faces: Le(v(), ue(v())).optional()
      }).optional()
    }).optional(),
    planing: H({
      options: H({
        sides: Le(v(), ue(v())).optional(),
        faces: Le(v(), ue(v())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: Pe().optional(),
  v: _().optional(),
  // API version
  webhook: v().optional(),
  //source
  sourceVersion: v().nullish(),
  source: v().optional()
});
H({
  job: Pe().optional(),
  // Type: Job from BullMQ
  saw: Pe(),
  // Runtime Saw instance
  shapeList: ue(Pe()),
  // Runtime Shape instances
  stockList: ue(Pe()),
  // Runtime Stock instances
  userGroups: ue(Pe()).optional(),
  // Runtime Group instances
  enableEvo: ce(),
  weighting: Pe().optional(),
  successMetric: v().optional(),
  useInventory: ce(),
  socketId: v().optional(),
  user: Pe().optional(),
  widget: ce().optional(),
  api: ce().optional(),
  app: ce().optional(),
  domain: v().optional(),
  config: Pe().optional(),
  v: _().optional(),
  webhook: v().optional()
});
const { addNotice: Ln } = Ra();
let us = null;
function Zd() {
  return us || (us = ja()), us;
}
function wa(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Jd(t) {
  const e = t.t, n = [];
  try {
    const { inputs: i, validateInputShapes: s, validateInputStock: a } = Zd(), o = t.inputShapes ?? i.inputShapes.value, l = t.inputStock ?? i.inputStock.value, r = t.inputUserGroups ?? i.inputUserGroups?.value ?? [], h = wa(o), m = wa(l);
    if (h.forEach((M) => M.isNew = !1), m.forEach((M) => M.isNew = !1), !t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const M = h.reduce((U, Q) => U + (Q.q || 1), 0), V = m.reduce((U, Q) => U + (Q.q || 1), 0);
      if (M > t.maxShapes || V > t.maxStock)
        return Ln({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: n };
    }
    if (!h.length)
      return Ln({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: n };
    if (!t.useInventory && !m.length)
      return Ln({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: n };
    let k;
    if (t.useInventory && t.selectedSaw)
      k = t.selectedSaw;
    else if (t.inputSaw instanceof Zt) {
      const M = t.inputSaw.validate();
      n.push(...M), k = t.inputSaw.toData();
    } else {
      k = t.inputSaw;
      const M = new Fa(k);
      n.push(...M.issues);
    }
    const p = s({
      saw: k,
      partTrim: me({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: h
    });
    if (n.push(...p), t.useInventory) {
      if (t.materialStore)
        for (const M of h)
          M.material || n.push(new Dt({
            item: M,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const M = a(k);
      n.push(...M);
    }
    if (r.length > 0) {
      r.forEach((V) => V.populateParentID(h));
      const M = Pl(r, h);
      n.push(...M);
    }
    await Xd(h, t, n);
    const F = hs(n);
    if (F.length > 0) {
      const M = {
        saw: F.filter((V) => V.category?.includes("saw")),
        stock: F.filter((V) => V.category?.includes("stock")),
        part: F.filter((V) => V.category?.includes("part") && !V.category?.includes("extras")),
        extras: F.filter((V) => V.category?.includes("extras")),
        group: F.filter((V) => V.category?.includes("group"))
      };
      for (const [V, U] of Object.entries(M))
        if (U.length > 0) {
          Ln({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: V }),
            additional: U.map((Q) => e(Q.message))
          });
          break;
        }
      return { valid: !1, issues: n };
    }
    const I = {
      inputSaw: k,
      inputShapes: h.map((M) => M.toData()),
      inputStock: m.map((M) => M.toData()),
      inputGroups: r.map((M) => M.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, B = Kd.safeParse(I);
    return B.success ? {
      valid: !0,
      issues: n,
      sawData: k
    } : (console.error("[Validation] Zod validation failed:", B.error.issues), Ln({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: B.error.issues.map((M) => `${M.path.join(".")}: ${M.message}`)
    }), { valid: !1, issues: n });
  } catch (i) {
    return console.error("[Validation] error:", i), Ln({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [i?.message ?? ""]
    }), { valid: !1, issues: n };
  }
}
function Yd(t, e) {
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
async function Xd(t, e, n) {
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
      if (e.extrasValidationRules && Cl.hasExtras(s, a)) {
        const m = e.extrasValidationRules?.[a], k = e.extrasLocationGroups?.[a], p = m?.locations && m.locations.length > 0, F = k?.some((I) => I.rules);
        if (p || F) {
          const I = Yd(s, a), B = (k || []).map((U) => ({
            id: U.id,
            locations: U.locations,
            rules: U.rules
          })), M = m || {}, V = /* @__PURE__ */ new Set();
          for (const U of I) {
            const Q = zd(
              s,
              M,
              U,
              B
            );
            if (!Q.valid) {
              if (Q.source === "group") {
                const he = B.find(
                  ($) => $.rules && $.locations.includes(U)
                );
                if (he && V.has(he.id))
                  continue;
                he && V.add(he.id);
              }
              if (Q.message) {
                const he = new Dt({
                  item: s,
                  category: ["part", "extras"],
                  message: Q.message,
                  field: [["extras", a, U]],
                  shouldTranslate: !1
                });
                n.push(he);
              } else
                Q.violations.forEach((he) => {
                  const $ = Ud(he, a), N = new Dt({
                    item: s,
                    category: ["part", "extras"],
                    message: $,
                    field: [["extras", a, U]],
                    shouldTranslate: !1
                  });
                  n.push(N);
                });
            }
          }
        } else {
          const I = Il(s, a, e.extrasValidationRules);
          I.valid || I.violations.forEach((B) => {
            const M = Al(a, B, I.message);
            n.push(new Dt({
              item: s,
              category: ["part", "extras"],
              message: M,
              field: [["extras", a]],
              shouldTranslate: !1
            }));
          });
        }
      }
      if (!l || !Object.keys(l).length)
        continue;
      const r = Ol(s, a, l, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((h) => {
        n.push(new Dt({
          item: s,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: Ll(h, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, h]]
        }));
      });
    }
}
const Qd = new Is({});
function ef(t) {
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
function tf(t, e) {
  const n = [], i = t.filter((s) => s.enabled !== !1);
  for (let s = 0; s < e.length; s++) {
    const a = e[s], o = ef(a);
    for (const l of i)
      try {
        Qd.evaluateExpression(l.formula, o) || n.push({
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
const nf = H({
  longSide: Xt,
  shortSide: Xt,
  t: Xt,
  formula: v().optional(),
  message: v().optional()
}).optional(), Ii = H({
  // Unique identifier for this group (used internally)
  id: v().min(1),
  // Display label for the group (shown in UI)
  label: v().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ue(v().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: _().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: ce().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: nf
}), sf = H({
  banding: ue(Ii).optional(),
  finish: ue(Ii).optional(),
  planing: ue(Ii).optional()
}).optional(), af = Rt(["decimal", "fraction"]), of = Rt(Tl), ka = _e([
  jt(0),
  jt(1),
  jt(2)
]).catch(0), lf = H({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: v().optional(),
  partB: v().optional(),
  partSelected: v().optional(),
  stock: v().optional(),
  text: v().optional(),
  // Checkout-specific colors
  button: v(),
  buttonText: v()
}), st = (t) => Zn((e) => e ?? t, ce()), rf = H({
  banding: st(!1),
  finish: st(!1),
  planing: st(!1),
  orientation: st(!0),
  diagram: st(!0),
  focus: st(!0),
  machining: st(!1),
  csvImport: st(!1),
  click: st(!0),
  partName: st(!0),
  progressNumber: st(!0),
  pagination: st(!1),
  fullStock: st(!1),
  imageUpload: st(!1),
  diagramNav: st(!1),
  debug: st(!1)
}), cf = H({
  // Localization
  locale: v().default("en-US"),
  currency: v().default("USD"),
  apiVersion: _().min(2).default(3),
  // Number formatting
  numberFormat: af.default("decimal"),
  decimalPlaces: _().min(0).max(10).default(2),
  fractionRoundTo: _().default(0),
  // Stock configuration
  stockSelection: of.optional(),
  stockGrain: Fl.optional(),
  // Part configuration
  minSpacing: $a.optional(),
  maxParts: _().min(0).default(0),
  orientationModel: ka.default(0),
  resultOrientationModel: ka.default(0),
  minDimension: _().min(0).default(0),
  partTrim: Zn((t) => t ?? void 0, _().min(0).optional()),
  partsPerPage: Zn((t) => t ?? void 0, _().min(1).default(10)),
  // UI configuration
  debug: ce().default(!1),
  enable: rf.default({
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
  colors: lf.default({
    button: "#118ab2",
    buttonText: "#ffffff"
  }),
  // Custom fields
  customFields: ue(Pe()).optional(),
  fieldOrder: Zn((t) => t ?? void 0, ue(v()).optional()),
  // Extras location filtering
  bandingLocations: ue(Ji).optional(),
  finishLocations: ue(Ji).optional(),
  planingLocations: ue(Ji).optional(),
  // Extras location groups
  extrasLocationGroups: sf,
  // Extras validation rules
  extrasValidationRules: qd
}), zn = H({
  min: _().min(0).nullable().optional(),
  max: _().min(0).nullable().optional()
}).nullable().optional(), uf = H({
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: zn,
  shortSide: zn,
  // Direct dimension constraints (as stored by admin panel)
  l: zn,
  w: zn,
  t: zn,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: H({
    // At least one side must be >= primaryMin
    primaryMin: _().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: _().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: v().nullable().optional(),
  // Custom validation message (optional)
  message: v().nullable().optional()
});
function df(t, e) {
  const n = [], i = t.l || 0, s = t.w || 0, a = t.longSide ?? Math.max(i, s), o = t.shortSide ?? Math.min(i, s), l = (r, h, m) => {
    m != null && (m.min !== void 0 && m.min !== null && h < m.min && n.push({
      valid: !1,
      dimension: r,
      value: h,
      constraint: "min",
      limit: m.min
    }), m.max !== void 0 && m.max !== null && h > m.max && n.push({
      valid: !1,
      dimension: r,
      value: h,
      constraint: "max",
      limit: m.max
    }));
  };
  if (l("longSide", a, e.longSide), l("shortSide", o, e.shortSide), l("longSide", i, e.l), l("shortSide", s, e.w), e.crossDimensionalRule) {
    const { primaryMin: r, secondaryMin: h } = e.crossDimensionalRule, m = t.l || 0, k = t.w || 0;
    if (r != null && h != null) {
      const p = m >= r && k >= h, F = k >= r && m >= h;
      !p && !F && n.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${r} mm and the other side must be ≥ ${h} mm`
      });
    }
  }
  return e.formula && (ff(e.formula, {
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
function ff(t, e) {
  try {
    const n = new Is({}), i = n.parse(t);
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
function pf(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, n = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${n} of ${t.limit} (current: ${t.value})`;
}
Rt([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const hf = Le(
  v(),
  _().min(0)
).default({}), gf = H({
  banding: v().optional(),
  finish: v().optional(),
  planing: v().optional(),
  machining: v().optional()
}).optional(), mf = H({
  name: v().trim().min(1),
  db_id: v().optional(),
  code: v().optional(),
  thicknesses: ue(
    _e([
      v().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      _()
    ])
  ).min(1),
  widths: ue(
    _e([
      v().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      _()
    ])
  ).optional(),
  extras: gf
}), ds = H({
  labels: ue(v()).default([]),
  pricing: Le(v(), _().min(0)).default({}),
  options: Pe().optional(),
  keys: ue(v()).optional(),
  // if not all the default keys should be set
  locations: ue(v()).optional(),
  // available locations for this extras type
  groups: ue(Ii).optional(),
  // custom location groups
  rules: Pe().optional(),
  // validation rules for this extras type
  displayNames: Le(v(), v()).optional()
  // slug key → product name for dropdown display
});
H({
  success: ce(),
  price: _().optional(),
  error: v().optional(),
  cacheHit: ce().optional()
});
H({
  valid: ce(),
  errors: ue(v()),
  warnings: ue(v())
});
H({
  pricing: hf,
  labels: ue(v()),
  options: ue(ue(v())),
  // Simplified to string arrays only
  keys: ue(v()),
  maxLevels: _().min(1)
});
H({
  enableCaching: ce().default(!0),
  enableLogging: ce().default(!1),
  maxCacheSize: _().min(1).default(1e3)
});
const to = Rt(["select", "multiselect", "range", "boolean", "search"]), no = Rt(["asc", "desc"]), io = Rt(["grid", "list"]), Si = H({
  _id: v(),
  name: v(),
  labels: ue(v()).optional(),
  pricing: Le(v(), _()).optional(),
  price: _().optional()
}), vf = H({
  banding: Si.optional(),
  finish: Si.optional(),
  planing: Si.optional(),
  machining: Si.optional()
}).optional(), bf = H({
  enabled: ce(),
  price: _(),
  description: v().optional(),
  maxQuantity: _().optional()
}).optional(), yf = H({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: $l,
  name: v().optional().describe("User-friendly display name"),
  description: v().optional().describe("Detailed description"),
  code: v().optional().describe("Internal material/product code"),
  // Categorization
  category: v().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: v().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: vf.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: bf.describe("Sample ordering configuration"),
  // UI metadata
  minQuantity: _().int().positive().nullable().optional().describe("Minimum order quantity")
});
kn.merge(yf).describe("Stock option with filtering and display metadata");
const wf = H({
  field: v().describe("Property name to filter on"),
  type: to,
  label: v().describe("Display label"),
  custom: ce().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: _().nullable().optional().describe("Minimum value for range filter"),
  max: _().nullable().optional().describe("Maximum value for range filter"),
  step: _().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: ue(H({
    label: v(),
    value: Pe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: ce().default(!0).describe("Whether filter is visible"),
  collapsible: ce().default(!0).describe("Whether filter panel is collapsible"),
  order: _().int().nullable().optional().describe("Display order")
}), kf = H({
  field: v().describe("Field to sort by"),
  order: no,
  label: v().optional().describe("Display label for sort option")
}), As = H({
  // Filter configuration
  availableFilters: ue(wf).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ue(v()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: kf.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  mode: v().default("stock").optional().describe("Filter mode"),
  displayMode: io.default("grid").describe("Default display mode"),
  itemsPerPage: _().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: ce().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: ce().default(!0).describe("Allow multiple stock selection"),
  maxSelection: _().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), Sf = H({
  field: v(),
  value: Pe(),
  type: to
});
H({
  // Active filters
  activeFilters: ue(Sf).default([]).describe("Currently active filters"),
  // Search
  searchQuery: v().default("").describe("Current search query"),
  // Sort
  sortBy: v().default("cost").describe("Current sort field"),
  sortOrder: no.default("asc").describe("Current sort order"),
  // Display
  displayMode: io.default("grid").describe("Current display mode"),
  currentPage: _().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ue(v()).default([]).describe("IDs of selected stock items")
});
function Jp() {
  return As.parse({});
}
const so = H({}).passthrough(), ao = H({
  l: _(),
  w: _(),
  t: _().nullable(),
  q: _(),
  stockId: v()
}), oo = El.partial(), lo = H({
  holes: ue(H({
    x: _(),
    y: _(),
    diameter: _(),
    depth: _().optional(),
    face: _().optional(),
    type: v().optional()
  })).optional(),
  hingeHoles: ue(H({
    position: _(),
    side: v(),
    face: _().optional(),
    numHoles: _().optional(),
    diameter: _().optional(),
    depth: _().optional(),
    hingeLength: _().optional(),
    distanceFromEdge: _().optional(),
    outerSpacing: _().optional()
  })).optional(),
  corners: ue(H({
    index: _(),
    type: v().nullable().optional(),
    size: _().nullable().optional()
  })).optional()
}), ro = H({
  bladeWidth: _().optional(),
  cutType: v().optional(),
  cutPreference: v().optional(),
  stackHeight: _().optional()
}), xf = H({
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  orientationLock: Ea.nullable(),
  q: _(),
  name: v().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Le(v(), _e([v(), ce()])).nullable().optional(),
  finish: Le(v(), _e([v(), ce()])).nullable().optional(),
  planing: Le(v(), _e([v(), ce()])).nullable().optional(),
  customData: Le(v(), Pe()).nullable().optional()
}), Pf = H({
  id: v(),
  name: v().nullable(),
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  q: _(),
  trim: H({
    x1: _(),
    x2: _(),
    y1: _(),
    y2: _()
  }).nullable().optional(),
  cost: _().nullable().optional(),
  db_id: v().nullable().optional(),
  code: v().nullable().optional(),
  analysis: oo.nullable().optional(),
  customData: Le(v(), Pe()).nullable().optional()
}), Cf = H({
  id: v().optional(),
  name: v().optional(),
  l: _(),
  w: _(),
  t: _().nullable().optional(),
  material: v().optional(),
  q: _().optional(),
  orientationLock: _e([
    jt(""),
    jt("l"),
    jt("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Le(v(), _e([v(), ce()])).nullable().optional(),
  finish: Le(v(), _e([v(), ce()])).nullable().optional(),
  planing: Le(v(), _e([v(), ce()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: H({
    banding: H({
      sides: Le(v(), _e([v(), ce()]))
    }).nullable().optional(),
    finish: H({
      faces: Le(v(), _e([v(), ce()]))
    }).nullable().optional(),
    planing: H({
      sides: Le(v(), _e([v(), ce()])).optional(),
      faces: Le(v(), _e([v(), ce()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: lo.optional(),
  stock: H({
    db_id: v().optional(),
    code: v().optional(),
    material: v().optional(),
    thickness: _().optional()
  }).nullable().optional(),
  customData: Le(v(), Pe()).nullable().optional()
});
H({
  jobId: _(),
  metadata: Ma.optional(),
  parts: ue(xf),
  stock: ue(Pf),
  offcuts: ue(ao),
  inputs: H({
    parts: ue(Cf),
    saw: ro.optional()
  }),
  apiResultV3: so.optional()
});
const If = H({
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  orientationLock: Ea.nullable(),
  q: _(),
  name: v().nullable(),
  // V3 format: nested extras structure
  extras: H({
    banding: H({
      sides: Le(v(), _e([v(), ce()]))
    }).nullable().optional(),
    finish: H({
      faces: Le(v(), _e([v(), ce()]))
    }).nullable().optional(),
    planing: H({
      sides: Le(v(), _e([v(), ce()])).optional(),
      faces: Le(v(), _e([v(), ce()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Le(v(), Pe()).nullable().optional()
}), Af = H({
  id: v(),
  name: v().nullable(),
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  q: _(),
  trim: H({
    l1: _().optional(),
    l2: _().optional(),
    w1: _().optional(),
    w2: _().optional()
  }).nullable().optional(),
  cost: _().nullable().optional(),
  db_id: v().nullable().optional(),
  code: v().nullable().optional(),
  analysis: oo.nullable().optional(),
  // New stock fields
  color: Ml.nullable(),
  weight: _().positive().nullable().optional(),
  imageUrl: v().nullable().optional(),
  tags: ue(v()).nullable().optional(),
  available: ce().nullable().optional(),
  customData: Le(v(), Pe()).nullable().optional()
}), Of = H({
  id: v().optional(),
  name: v().optional(),
  l: _(),
  w: _(),
  t: _().nullable().optional(),
  material: v().optional(),
  q: _().optional(),
  orientationLock: _e([
    jt(""),
    jt("l"),
    jt("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: H({
    banding: H({
      sides: Le(v(), _e([v(), ce()]))
    }).nullable().optional(),
    finish: H({
      faces: Le(v(), _e([v(), ce()]))
    }).nullable().optional(),
    planing: H({
      sides: Le(v(), _e([v(), ce()])).optional(),
      faces: Le(v(), _e([v(), ce()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: lo.optional(),
  stock: H({
    db_id: v().optional(),
    code: v().optional(),
    material: v().optional(),
    thickness: _().optional()
  }).nullable().optional(),
  customData: Le(v(), Pe()).nullable().optional()
});
H({
  jobId: _(),
  metadata: Ma.optional(),
  parts: ue(If),
  stock: ue(Af),
  offcuts: ue(ao),
  inputs: H({
    parts: ue(Of),
    saw: ro.optional()
  }),
  apiResultV3: so.optional()
});
function co(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: t?.stock?.id || t?.stock?.parentId || ""
  };
}
function uo(t) {
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
const Lf = H({
  stockSelection: ql.optional(),
  stackingMode: Gl.optional(),
  minSpacing: $a.optional()
}).optional(), Ff = H({
  stockType: Rt([...gs]).optional(),
  bladeWidth: _e([
    Rl,
    v()
  ]).optional(),
  cutType: jl,
  cutPreference: Dl,
  stackHeight: Vl,
  guillotineOptions: Bl,
  efficiencyOptions: Nl.optional(),
  options: Lf
}).optional(), Tf = H({
  holes: _().min(0).nullable().optional(),
  corners: _().min(0).nullable().optional()
}).optional(), $f = $n.pick({
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
  banding: Wl.nullable().optional(),
  finish: Ul.nullable().optional(),
  planing: _l.nullable().optional(),
  stockId: v().nullable().optional()
}), Ef = H({
  stock: ue(kn).default([]),
  parts: ue($f).optional(),
  options: cf,
  type: v().optional(),
  // variable | simple
  materials: ue(mf).optional(),
  banding: ds.nullable().optional(),
  finish: ds.nullable().optional(),
  planing: ds.nullable().optional(),
  machining: Pe().optional(),
  machiningPricing: Tf,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: Pe().optional(),
  partRules: uf.optional(),
  customValidation: H({
    enabled: ce(),
    rules: ue(Pe())
  }).optional(),
  saw: Ff,
  stockFilter: H({
    enabled: ce().optional(),
    serverMode: ce().optional(),
    config: As.optional()
  }).optional(),
  // Product catalog configuration
  products: H({
    enabled: ce().optional(),
    showCategories: ce().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: H({
    baseUrl: v(),
    orgSlug: v(),
    isCustomDomain: ce().optional()
  }).optional(),
  // Admin configuration (formula pricing, etc.)
  config: H({
    formulaPricing: H({
      enabled: ce(),
      url: v().nullable().optional(),
      spec: Pe().nullable().optional()
    }).optional()
  }).optional()
});
H({
  slug: v().optional(),
  company: H({
    name: v(),
    contactEmail: v(),
    phone: v().optional(),
    address: v().optional()
  }),
  branding: H({
    logo: v().optional(),
    favicon: v().optional(),
    colors: H({
      button: v(),
      buttonText: v(),
      headerBackground: v().optional(),
      headerText: v().optional(),
      partA: v().optional(),
      partB: v().optional(),
      partSelected: v().optional(),
      stock: v().optional(),
      text: v().optional()
    }),
    showCredit: ce().optional()
  }),
  config: H({
    stockCount: _().optional(),
    stock: ue(Pe()).optional(),
    materials: ue(Pe()).optional(),
    options: Pe().optional(),
    pricing: Pe().optional(),
    banding: Pe().optional(),
    finish: Pe().optional(),
    planing: Pe().optional(),
    machining: Pe().optional(),
    bandingPricing: Le(v(), _()).optional(),
    finishPricing: Le(v(), _()).optional(),
    planingPricing: Le(v(), _()).optional(),
    machiningPricing: Le(v(), _()).optional(),
    saw: Pe().optional(),
    shipping: H({
      enabled: ce(),
      originCountry: v().optional()
    }).optional(),
    stockFilter: H({
      config: As.optional()
    }).optional(),
    partRules: Pe().optional(),
    customFields: ue(Pe()).optional(),
    termsUrl: v().optional(),
    termsContent: v().optional(),
    tracking: H({
      gaMeasurementId: v().optional(),
      gtmContainerId: v().optional()
    }).optional(),
    customValidation: H({
      enabled: ce(),
      rules: ue(Pe())
    }).optional(),
    importSettings: H({
      grouping: Rt(["material", "material-variant", "auto"]).optional(),
      codeRegex: v().optional()
    }).optional()
  }),
  stripe: H({
    enabled: ce(),
    publishableKey: v().optional(),
    currency: v().optional()
  }).optional()
});
function Mf(t) {
  const e = Ef.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function Nf(t) {
  const e = Mf(t);
  if (!e.success) {
    const n = e.error?.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", n), new Error(`Invalid checkout data: ${n}`);
  }
  return e.data;
}
function Nt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function Bf(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, n = {};
    if (Ke(e.a) || Ke(e.b) || Ke(e.c) || Ke(e.d))
      n.x1 = Ke(e.a) ? Nt(e.a) : !1, n.y1 = Ke(e.b) ? Nt(e.b) : !1, n.x2 = Ke(e.c) ? Nt(e.c) : !1, n.y2 = Ke(e.d) ? Nt(e.d) : !1;
    else {
      const s = ws(e);
      n.x1 = Ke(s.x1) ? Nt(s.x1) : !1, n.x2 = Ke(s.x2) ? Nt(s.x2) : !1, n.y1 = Ke(s.y1) ? Nt(s.y1) : !1, n.y2 = Ke(s.y2) ? Nt(s.y2) : !1;
    }
    t.banding = n;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, n = {};
    n.a = Ke(e.a) ? Nt(e.a) : !1, n.b = Ke(e.b) ? Nt(e.b) : !1, t.finish = n;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, n = {}, i = ws(e.sides || {});
    e.sides && (Ke(i.x1) && (n.x1 = i.x1), Ke(i.x2) && (n.x2 = i.x2), Ke(i.y1) && (n.y1 = i.y1), Ke(i.y2) && (n.y2 = i.y2)), e.faces && (Ke(e.faces.a) && (n.a = e.faces.a), Ke(e.faces.b) && (n.b = e.faces.b)), Object.keys(n).length > 0 && (t.planing = n);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function Vf(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const n = Math.max(t.l, t.w), i = Math.min(t.l, t.w);
    t.w > t.l && (t.l = n, t.w = i);
  }
  return t;
}
function fo(t, e = 0) {
  debugger;
  return e === 0 || t.forEach((n) => Vf(n, e)), t;
}
function po(t) {
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
function Df(t, e, n, i, s, a, o, l) {
  const r = uo(i), h = e.map((p) => {
    const F = {
      l: p.l,
      w: p.w,
      t: p?.t ?? null,
      material: p.material ?? null,
      orientationLock: p.orientationLock ?? null,
      q: o?.addedPartTally?.[p.parentId] || p.q,
      name: p.name ?? null,
      customData: p.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: Fr(),
      finish: Ti(),
      planing: $r()
    }, I = { ...p };
    return Bf(I), I.banding && (F.banding = I.banding), I.finish && (F.finish = I.finish), I.planing && (F.planing = I.planing), F;
  }), m = n.map((p) => {
    const F = {
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
    return p?.trim && (F.trim = ws(p.trim)), F;
  }), k = {
    parts: a.map((p) => {
      const F = {
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
      p.extras && (F.extras = {}, p.extras.banding?.sides && (F.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && (F.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && (F.extras.planing = {
        ...p.extras.planing.sides && { sides: p.extras.planing.sides },
        ...p.extras.planing.faces && { faces: p.extras.planing.faces }
      }));
      const I = po(p);
      return I && (F.machining = I), F;
    })
  };
  return l && fo(h, l), {
    jobId: t,
    metadata: o,
    parts: h,
    stock: m,
    offcuts: s?.map(co) || [],
    inputs: k
  };
}
function jf(t, e, n, i, s, a, o, l) {
  const r = uo(i), h = e.map((p) => {
    const F = {
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
        banding: { sides: ys() },
        finish: { faces: Ti() },
        planing: Tr()
      }
    };
    return p.extras && (p.extras.banding?.sides && (F.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && (F.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && (F.extras.planing = {
      sides: p.extras.planing.sides || ys(),
      faces: p.extras.planing.faces || Ti()
    })), F;
  }), m = n.map((p) => ({
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
  })), k = {
    parts: a.map((p) => {
      const F = {
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
      p.extras && (F.extras = {}, p.extras.banding?.sides && (F.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && (F.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && (F.extras.planing = {
        ...p.extras.planing.sides && { sides: p.extras.planing.sides },
        ...p.extras.planing.faces && { faces: p.extras.planing.faces }
      }));
      const I = po(p);
      return I && (F.machining = I), F;
    })
  };
  return l && fo(h, l), {
    jobId: t,
    metadata: o,
    parts: h,
    stock: m,
    offcuts: s?.map(co) || [],
    inputs: k
  };
}
const Rf = ["id", "data-index"], Gf = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = K({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), a = () => {
      if (!n.inputShape) return;
      let r = {
        l1: pn(n.inputShape, "banding", "side.l1"),
        l2: pn(n.inputShape, "banding", "side.l2"),
        w1: pn(n.inputShape, "banding", "side.w1"),
        w2: pn(n.inputShape, "banding", "side.w2")
      };
      const h = pr(
        n.orientationModel,
        n.stockGrain,
        n.inputShape
      );
      h && (r = Na(r, h)), s.value = r;
    };
    Ue([
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
    return gn(() => {
      document.getElementById(n.id)?.addEventListener("keydown", o);
    }), Qn(() => {
      document.getElementById(n.id)?.removeEventListener("keydown", o);
    }), (r, h) => (O(), R("div", {
      id: t.id,
      class: De(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: l
    }, [
      Z("div", {
        class: De(["outer", {
          l1: s.value.l1,
          l2: s.value.l2,
          w1: s.value.w1,
          w2: s.value.w2
        }])
      }, [...h[0] || (h[0] = [
        Z("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Rf));
  }
}), qf = ["id", "data-index", "disabled"], _f = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = T(() => n.inputShape ? pn(n.inputShape, "finish", "face.a") : !1), a = T(() => n.inputShape ? pn(n.inputShape, "finish", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const h = mn("FontAwesomeIcon");
      return O(), R("button", {
        id: t.id,
        class: De(["c-btn finish-button", {
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
        je(h, { icon: ["fass", "spray-can"] })
      ], 10, qf);
    };
  }
});
function Uf(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Wf(t) {
  const e = Uf(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((n) => n && n.type && n.size > 0)) : !1;
}
const zf = Qe({
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
      return Wf(this.inputShape);
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
}), Hf = ["id", "disabled"];
function Kf(t, e, n, i, s, a) {
  const o = mn("FontAwesomeIcon");
  return O(), R("button", {
    id: t.id,
    class: De(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...l) => t.openMachining && t.openMachining(...l))
  }, [
    je(o, { icon: ["fass", "hammer"] })
  ], 10, Hf);
}
const Zf = /* @__PURE__ */ Mn(zf, [["render", Kf]]), Jf = ["id"], Yf = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Xf = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Qf = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, ep = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, tp = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, np = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, ip = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Sa = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = K(0), a = K(!1), o = (y, j, S, J) => {
      if (!Re(S) || j === 0)
        return y;
      const ne = l();
      return j === 1 || j === 2 && J !== "n" && y ? ne : y;
    }, l = (y) => {
      const j = { ...n, ...y };
      if (!j.rectangle || !Re(j.rectangle)) return "";
      let S = "";
      switch (j.orientationModel) {
        case 0:
          S = Q.value;
          break;
        case 1:
          j.stockGrain === "y" || j.stockGrain === "n" ? S = j.rectangle.l >= j.rectangle.w ? "l" : "w" : j.rectangle.l >= j.rectangle.w ? S = j.stockGrain : S = S = j.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          S = j.rectangle.l >= j.rectangle.w ? "l" : "w";
          break;
      }
      return S;
    }, r = () => {
      if (n.disabled || V.value.length <= 1)
        return;
      const y = h(Q.value);
      "multiEdit" in n.rectangle && n.rectangle.multiEdit && Q.value === "" && s.value !== y && s.value === 0 && (s.value = y);
      let S = null;
      [1, 2].includes(n.orientationModel) ? S = k() : S = m(), s.value = S;
    }, h = (y) => {
      const j = V.value.findIndex((S) => S === y);
      return j === -1 ? 0 : j;
    }, m = () => {
      let y = s.value + 1;
      return y > V.value.length - 1 && (y = 0), y;
    }, k = () => {
      let y = 0;
      if (Q.value === "") {
        const j = l();
        y = V.value.findIndex((S) => S === j);
      } else
        y = V.value.findIndex((j) => j === "");
      return y;
    }, p = (y) => {
      i("updateOrientation", y);
    }, F = () => {
      const y = Q.value;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit)
        return y === " " ? " " : y === "" ? "" : y === "l" ? "l" : y === "w" ? "w" : "default";
      switch (n.orientationModel) {
        case 0:
          return y === " " ? " " : y ? n.stockGrain === "n" ? y || n.shapeOrientation || "default" : n.stockGrain === "w" ? y === "w" ? "w" : "l" : y === "l" ? "l" : "w" : "default";
        case 1:
          return y === " " ? " " : y ? n.stockGrain === "n" ? y || n.shapeOrientation || "default" : n.stockGrain === "w" ? y === "w" ? "w" : "l" : y === "l" ? "l" : "w" : "default";
        case 2:
          return y === " " ? " " : y ? n.stockGrain === "n" ? y || n.shapeOrientation || "default" : n.stockGrain === "w" ? y === "w" ? "w" : "l" : y === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, I = () => {
      if (!n.rectangle)
        return;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit && !Q.value) {
        M("");
        return;
      }
      const y = o(
        Q.value,
        n.orientationModel,
        n.rectangle,
        n.stockGrain
      );
      if (y !== Q.value) {
        M(y);
        return;
      }
      if (!a.value || s.value === -1) {
        const j = h(Q.value);
        s.value = j;
      }
      if (Re(n.rectangle)) {
        if (n.orientationModel === 1) {
          const j = $.value ? l() : Q.value;
          M(j);
          return;
        }
        if (n.orientationModel === 2) {
          let j;
          $.value ? j = n.stockGrain !== "n" ? l() : "" : j = Q.value, M(j);
        }
      }
    }, B = K(!1), M = (y) => {
      const j = h(y);
      B.value = !0, s.value = j, B.value = !1, p(y);
    }, V = T(() => {
      if (!n.rectangle) return ["l", "w"];
      if (dn(n.rectangle)) return ["l", "w"];
      let y = ["", "l", "w"];
      return n.rectangle.multiEdit ? [" ", "", "l", "w"] : (U.value && (y = y.filter((j) => j !== "w")), y);
    }), U = T(() => Re(n.rectangle) || Yi(n.rectangle) ? n.rectangle.isSquare : n.rectangleType && n.rectangle?.l && n.rectangle?.w ? n.rectangle?.l === n.rectangle?.w : !1), Q = T(() => {
      let y = "";
      if (dn(n.rectangle))
        y = n.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Re(n.rectangle)) {
        const j = n.rectangle.orientationLock;
        y = j === null ? "" : j;
      } else if (Yi(n.rectangle)) {
        const S = n.rectangle.grain ?? "";
        S === "l" || S === "w" || S === "" || S === " " ? y = S : y = "";
      }
      return y;
    }), he = T(() => dn(n.rectangle) || !n.rectangle ? {
      l: null,
      w: null
    } : {
      l: n.rectangle.l,
      w: n.rectangle.w
    }), $ = T(() => !he.value.l && !he.value.w), N = T(() => dn(n.rectangle) ? !1 : Ci(
      n.orientationModel,
      n.stockGrain,
      n.rectangle,
      n.rectangleType,
      n.shapeOrientation
    )), ee = T(() => {
      if (!n.rectangle)
        return n.shapeOrientation ? "noGrain" : "freeRotation";
      if (Yi(n.rectangle) || n.rectangleType === "stock") {
        const ne = n.rectangle.grain;
        return "multiEdit" in n.rectangle && n.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ne] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ne] || "noGrain";
      }
      const y = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, j = n.stockGrain || "default";
      let S = "default";
      Re(n.rectangle) || n.rectangleType === "shape" ? S = F() : dn(n.rectangle) && (S = n.rectangle.direction || "default");
      const J = y[j]?.[S];
      return J || y[j]?.default || "freeRotation";
    });
    return Ue(s, (y, j) => {
      a.value && j !== void 0 && (B.value || p(V.value[y]));
    }, { immediate: !1 }), Ue(he, (y, j) => {
      if (!n.rectangle || n.orientationModel === 0 || !Re(n.rectangle) || Re(n.rectangle) && (n.orientationModel === 2 && j.l && j.w && !Q.value || n.stockGrain === "n" && !Q.value))
        return;
      const S = l();
      Q.value !== S && p(S);
    }, { immediate: !1 }), Ue(() => n.stockGrain, (y, j) => {
      y !== j && I();
    }, { immediate: !0 }), gn(() => {
      I(), vt(() => a.value = !0);
    }), (y, j) => (O(), R("button", {
      type: "button",
      id: t.id,
      class: De(["c-btn orientation-button", { rot: N.value, square: U.value, disabled: t.disabled, [ee.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: r
    }, [
      ee.value === "delete" ? (O(), R("svg", Yf, [...j[0] || (j[0] = [
        Z("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : se("", !0),
      ee.value === "noChange" ? (O(), R("svg", Xf, [...j[1] || (j[1] = [
        Z("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : se("", !0),
      ee.value === "freeRotation" ? (O(), R("svg", Qf, [...j[2] || (j[2] = [
        Z("g", null, [
          Z("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          Z("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          Z("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          Z("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : se("", !0),
      ee.value === "leftRight" ? (O(), R("svg", ep, [...j[3] || (j[3] = [
        Z("g", null, [
          Z("path", { d: "m5.408 19.408h61.095" }),
          Z("g", null, [
            Z("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            Z("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : se("", !0),
      ee.value === "topBottom" ? (O(), R("svg", tp, [...j[4] || (j[4] = [
        Z("g", null, [
          Z("path", { d: "m19.408 66.503v-61.095" }),
          Z("g", null, [
            Z("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            Z("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : se("", !0),
      ee.value === "grainLeftRight" ? (O(), R("svg", np, [...j[5] || (j[5] = [
        Z("g", null, [
          Z("path", { d: "m3 3h99.887" }),
          Z("path", { d: "m3.113 32h99.887" }),
          Z("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : se("", !0),
      ee.value === "grainTopBottom" ? (O(), R("svg", ip, [...j[6] || (j[6] = [
        Z("g", null, [
          Z("path", { d: "m61 3v99.887" }),
          Z("path", { d: "m32 3.113v99.887" }),
          Z("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : se("", !0)
    ], 10, Jf));
  }
}), sp = ["id", "data-index", "disabled"], ap = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = T(() => n.inputShape ? pn(n.inputShape, "planing", "face.a") : !1), a = T(() => n.inputShape ? pn(n.inputShape, "planing", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const h = mn("FontAwesomeIcon");
      return O(), R("button", {
        id: t.id,
        class: De(["c-btn planing-button", {
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
        je(h, { icon: ["fass", "hammer"] })
      ], 10, sp);
    };
  }
});
function op(t, e, n) {
  let i = null;
  Ue(
    () => t.value ? { l: t.value.l, w: t.value.w } : null,
    (s) => {
      const a = typeof e == "number" ? e : e.value;
      if (!dr(a) || !s || !t.value) return;
      const o = s.w > s.l;
      if (i === null) {
        i = o;
        return;
      }
      if (i !== o) {
        const l = fr(a);
        for (const r of l)
          zl(t.value, r);
        i = o;
      }
    },
    { immediate: !0 }
  );
}
const lp = {
  key: 0,
  class: "info"
}, rp = ["disabled"], cp = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = T(() => n.field.name === "banding" && Re(n.item) ? n.item : null);
    op(s, kt(n, "orientationModel"));
    const a = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], o = T(() => a.includes(n.field.name) || n.field.name === "material" && n.typePrefix === "part" || n.field.name === "t" && n.thicknessOptions?.length > 0 || n.field.name === "w" && n.widthOptions?.length > 0), l = T(() => {
      try {
        const $ = n.field.propertyPath || n.field.name;
        return $.includes(".") ? un(n.item, $) ?? null : n.item[$] ?? null;
      } catch ($) {
        return console.error("[CheckoutField] Error getting field value:", $), null;
      }
    }), r = T(() => {
      if (n.field.custom && n.field.type) {
        const ee = n.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(ee))
          return ee;
      }
      const $ = {
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
      const N = $[n.field.type];
      return N || "string";
    }), h = T(() => n.field.output ? n.field.output : null), m = T(() => n.field.options || []), k = T(() => !!n.fullStockDisabled), p = T(() => n.item.isNew ? !1 : qs(n.item, [n.field.name])), F = T(() => n.item.isNew ? !1 : qs(n.item, [n.field.name], !0)), I = T(() => n.multiEdit || n.item.isNew || !1), B = T(() => n.materialOptions?.length > 0 && Re(n.item) ? !n.item.material : !1), M = T(() => n.widthOptions?.length === 1), V = T(() => n.field.info ? typeof n.field.info == "string" ? n.field.info : typeof n.field.info == "object" && l.value !== null && n.field.info[l.value] || null : null), U = ($) => {
      i("update", $);
    }, Q = ($, N) => {
      i("validation", $, N);
    }, he = () => {
      i("blur");
    };
    return ($, N) => o.value ? (O(), R(Ze, { key: 1 }, [
      t.field.name === "orientationLock" ? (O(), Ie(Sa, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        disabled: k.value,
        onUpdateOrientation: U
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "grain" ? (O(), Ie(Sa, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        disabled: k.value,
        onUpdateOrientation: U
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "banding" ? (O(), Ie(Gf, {
        key: 2,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        index: t.index,
        disabled: k.value || t.materialExtrasDisabled?.banding,
        onClicked: N[0] || (N[0] = (ee) => $.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : t.field.name === "finish" ? (O(), Ie(_f, {
        key: 3,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: k.value || t.materialExtrasDisabled?.finish,
        onClicked: N[1] || (N[1] = (ee) => $.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "planing" ? (O(), Ie(ap, {
        key: 4,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: k.value || t.materialExtrasDisabled?.planing,
        onClicked: N[2] || (N[2] = (ee) => $.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "machining" ? (O(), Ie(Zf, {
        key: 5,
        "input-shape": A(Re)(t.item) ? t.item : null,
        disabled: k.value || t.materialExtrasDisabled?.machining,
        onOpen: N[3] || (N[3] = (ee) => $.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : t.field.name === "material" && t.typePrefix === "part" ? (O(), Ie(Hn, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(Se)(t.field.label || "fields.material"),
        placeholder: A(Se)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: A(Se)("actions.select"),
          delete: A(Se)("actions.delete")
        },
        "onUpdate:value": U,
        onValidation: Q
      }, {
        default: Oi(() => [
          ps($.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (O(), Ie(Hn, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(Se)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: B.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(Se)("actions.select"),
          delete: A(Se)("actions.delete")
        },
        output: "number",
        "onUpdate:value": U,
        onValidation: Q
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (O(), Ie(Hn, {
        key: 8,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(Se)(t.field.label || "fields.w"),
        "enable-label": !1,
        options: t.widthOptions,
        readonly: t.readonly,
        disabled: M.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(Se)("actions.select"),
          delete: A(Se)("actions.delete")
        },
        output: "number",
        "onUpdate:value": U,
        onValidation: Q
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (O(), R("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: N[4] || (N[4] = (ee) => $.$emit("open-image-upload"))
      }, [
        je(A(Ai), { icon: ["fass", "image"] })
      ], 8, rp)) : se("", !0)
    ], 64)) : (O(), Ie(Hn, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: l.value,
      label: A(Se)(t.field.label || t.field.name),
      placeholder: A(Se)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: h.value,
      options: m.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || k.value,
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
      warning: F.value,
      "disable-required-validation": I.value,
      "onUpdate:value": U,
      onValidation: Q,
      onBlur: he
    }, {
      default: Oi(() => [
        V.value ? (O(), R("p", lp, [
          je(A(Ai), { icon: ["fass", "info-circle"] }),
          bt(" " + ve(V.value), 1)
        ])) : se("", !0),
        ps($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), up = { class: "checkout-calculator-wrapper" }, dp = {
  key: 0,
  class: "row table-heading"
}, fp = {
  key: 0,
  class: "cell center"
}, pp = { class: "cell" }, hp = {
  key: 0,
  class: "cell"
}, gp = ["onClick"], mp = { class: "cell" }, vp = ["disabled", "aria-label", "onClick"], bp = { class: "button-wrapper main" }, yp = ["aria-label"], wp = ["aria-label", "disabled"], kp = ["aria-label"], Sp = { id: "part-count" }, xp = {
  key: 2,
  class: "pagination-controls"
}, Pp = { class: "c-btn-group" }, Cp = ["disabled"], Ip = ["disabled"], Ap = { class: "pagination-info" }, Op = ["disabled"], Lp = ["disabled"], Fp = {
  key: 4,
  id: "messages"
}, Tp = {
  key: 0,
  class: "heading"
}, $p = { class: "content" }, Ep = {
  key: 5,
  id: "progress"
}, Mp = { id: "diagram-wrapper" }, Np = {
  key: 0,
  id: "stack"
}, Bp = {
  key: 4,
  class: "debug"
}, fs = !1, Vp = /* @__PURE__ */ Qe({
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
    const i = wn(() => import("./InputIssues-qMiuTvMn.js")), s = wn(() => import("./Machining-Su8We_IZ.js")), a = wn(() => import("./ImportCSV-8-nQ6N0d.js")), o = wn(() => Promise.resolve().then(() => Yu)), l = wn(() => import("./ImageUpload-Dk10FsOg.js")), {
      inputs: r,
      totalInputShapes: h,
      getShapeGrainSummary: m,
      updateNumberFormat: k,
      validateInputStock: p,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: F,
      addInputShape: I,
      addInputStock: B,
      cloneInputShape: M,
      updateInputShape: V,
      validationIssues: U,
      setExtrasOptionsFromPricing: Q,
      getCentralizedOptions: he
    } = ja(), { r: $, updateFromResult: N, stackedStock: ee, uniqueAddedShapes: y, uniqueUsedStock: j, usedStock: S, activeStockAutoId: J, activeStock: ne, setActiveStockAutoId: ae } = Mi();
    ad({
      stockList: $.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: oe, reset: Me } = eo(), { addNotice: Y } = Ra(), pe = T(() => r.inputShapes.value.filter(Re)), q = (c) => !c || !Array.isArray(c) ? [] : c.map((f) => Gr({ parts: [f] }).parts?.[0] || f), de = !1, $e = t, re = n, rt = K(!1), nt = "production", tt = K(navigator?.language || "en-US"), ze = Fn(null), Pt = window.location.hostname, ct = K(!1), en = K(!0), Ct = Ko("Checkout/currentURL", window.location.href), ot = K([]), It = K(null), ut = K(null), tn = K(!1), At = K(!1), Je = K(!1), Gt = K(!1), Tt = K(!1), nn = K(Hl()), ge = K(!1), P = K(1), x = K(10), { socket: w } = Rd({
      refs: {
        connected: ct,
        thinking: Je
      },
      callbacks: {
        onResult(c) {
          const f = c.optimisation;
          if (N(f), !f.shapeList?.length || !f.stockList?.length) {
            Me(), Y({
              type: "error",
              message: Se("errors.calculation.no_result"),
              additional: [Se("errors.validation.check_inputs")]
            }), Je.value = !1;
            return;
          }
          if ((E.apiVersion || 3) === 2 ? ut.value = Df(
            c.jobId,
            y.value,
            j.value,
            S.value,
            $.offcuts?.value || [],
            r.inputShapes.value,
            $.metadata.value,
            E.resultOrientationModel
          ) : ut.value = jf(
            c.jobId,
            y.value,
            j.value,
            S.value,
            $.offcuts?.value || [],
            r.inputShapes.value,
            $.metadata.value,
            E.resultOrientationModel
          ), $?.metadata?.value?.unplacedParts?.length) {
            const u = $.metadata.value.unplacedParts.map((C) => C.id).join();
            Y({
              type: "warning",
              message: Se("errors.validation.parts_not_fit", { count: $.metadata.value.unplacedParts.length }) + ": " + u
            });
          }
          ut.value && (ut.value.apiResultV3 = Qr({
            jobId: c.jobId,
            saw: f.saw,
            stockList: f.stockList,
            shapeList: f.shapeList,
            cutList: f.cutList,
            offcuts: $.offcuts?.value || [],
            unusableShapes: f.unusableShapes,
            metadata: $.metadata.value
          }), re("result", ut.value)), Je.value = !1;
        },
        onUser(c) {
          ze.value = c;
        },
        onConnectError(c) {
          Y({
            type: "error",
            message: Se("errors.network.cannot_connect"),
            additional: [c]
          });
        },
        onError(c) {
          Y({
            type: "error",
            message: Se("errors.general.error_occurred"),
            additional: [c]
          });
        }
      }
    }), W = {
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
    }, E = Ft(W), te = Ft({
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
    }), ye = K(null), Fe = K(!1), dt = K(""), yt = K("");
    Ue(U, (c) => {
      c?.length > 0 ? (Fe.value = !0, dt.value = "Validation Errors", yt.value = c.map((f) => `${f.message} (${f.category.join(", ")})`).join(`

`)) : dt.value === "Validation Errors" && (Fe.value = !1, dt.value = "", yt.value = "");
    }, { deep: !0 });
    const et = Ft({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), xe = K([]), Ne = K([]), $t = K([]), qe = K([]), wt = Ft({
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
    }), Te = Ft({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2"]
    }), He = Ft({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["a", "b"]
    }), We = Ft({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), ei = K(null), it = Ft({}), qt = Ft({}), _t = Ft({}), Ut = K(null), Wt = K(null), ti = T(() => ({
      banding: it.rules,
      finish: qt.rules,
      planing: _t.rules
    })), ni = T(() => jd({
      stockType: te.stockType || "sheet",
      materials: xe.value,
      minDimension: E.minDimension,
      ...E.fieldOrder && E.fieldOrder.length > 0 ? { allowedFieldIds: E.fieldOrder } : {}
    })), Nn = K([]), sn = K({
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
    }), vn = T(() => {
      const c = ni.value.fields.value, f = ni.value.allFieldsMap.value, g = c.filter((fe) => sn.value[fe.name] ?? !0), u = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], C = [];
      let L = null;
      const z = g.filter((fe) => fe.name !== "fullStock");
      sn.value.fullStock && (L = g.find((fe) => fe.name === "fullStock") || f.get("fullStock"));
      for (const fe of u) {
        const Ve = sn.value[fe], Oe = z.find((Be) => Be.name === fe);
        if (Ve && !Oe) {
          const Be = f.get(fe);
          Be && C.push(Be);
        }
      }
      const ke = Nn.value || [];
      return [
        ...L ? [L] : [],
        ...z,
        ...C,
        ...ke
      ];
    }), an = T(() => vn.value.length + 2), Bi = T(() => {
      const c = {
        id: 34,
        del: 32
      }, f = {
        id: `${c.id}px`,
        del: `${c.del}px`
      }, g = [];
      for (const u of vn.value) {
        if (u.name === "trim") continue;
        const C = u.w ?? "minmax(20px, 1fr)";
        g.push(C);
      }
      return g.unshift(f.id), g.push(f.del), g.join(" ");
    }), bn = T(() => E.enable?.pagination), ii = T(() => $e.diagramNav || E.enable?.diagramNav), zt = T(() => bn.value ? Math.ceil(pe.value.length / x.value) : 1), Vi = T(() => {
      if (!bn.value) return pe.value;
      const c = (P.value - 1) * x.value, f = c + x.value;
      return pe.value.slice(c, f);
    }), Di = T(() => bn.value ? (P.value - 1) * x.value : 0), Sn = (c) => {
      c < 1 && (c = 1), c > zt.value && (c = zt.value), P.value = c;
    }, si = () => Sn(1), ji = () => Sn(P.value - 1), Ri = () => Sn(P.value + 1), d = () => Sn(zt.value), b = T(() => E.debug || E.enable?.debug), D = T(() => {
      try {
        const c = localStorage.getItem("inputs/inputStock");
        if (!c) return "(empty)";
        const f = JSON.parse(c);
        return JSON.stringify(f.map((g) => ({ material: g.material, db_id: g.db_id, l: g.l, w: g.w, t: g.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), G = T(() => {
      try {
        const c = localStorage.getItem("stock-filter-selections");
        return c || "(empty)";
      } catch {
        return "(read error)";
      }
    }), X = T(() => ({
      "--btn-color": E.colors.buttonText,
      "--btn-bg": E.colors.button,
      "--btn-hover-bg": le(E.colors.button, -8),
      "--btn-focus-ring": E.colors.button
    }));
    function le(c, f) {
      const g = c.replace("#", ""), u = parseInt(g, 16), C = Math.round(2.55 * f), L = (u >> 16) + C, z = (u >> 8 & 255) + C, ke = (u & 255) + C;
      return `#${(16777216 + (L < 255 ? L < 1 ? 0 : L : 255) * 65536 + (z < 255 ? z < 1 ? 0 : z : 255) * 256 + (ke < 255 ? ke < 1 ? 0 : ke : 255)).toString(16).slice(1)}`;
    }
    const we = {
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
    }, Ae = T(() => $e.showCredit !== void 0 ? $e.showCredit : ze.value ? !(ze.value && ze.value?.api?.whiteLabel) : !0), be = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (c) => {
        const f = ["efficiency", "smallest"];
        c && !f.includes(c) ? console.warn(`${c} is not a valid stockSelection, expected ${f.join("|")}`) : te.options.stockSelection = c;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (c) => {
        te.options.minSpacing = c;
      },
      maxParts: (c) => {
        E.maxParts = c;
      },
      partsPerPage: (c) => {
        c && c > 0 && (x.value = c, E.partsPerPage = c);
      },
      locale: (c) => {
        tt.value = c.replace(/_/g, "-");
      },
      enable: (c) => {
        const f = {
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
          for (const g in W.enable)
            g in c && (E.enable[g] = c[g]);
          for (const g in f) {
            const u = f[g], C = un(c, [u]), L = W.enable[u];
            Ce(g, C !== void 0 ? C : L);
          }
          Tt.value = un(c, ["csvImport"]) ?? W.enable?.csvImport;
        }
      },
      colors: (c) => {
        if (c)
          for (const f in W.colors)
            f in c && (E.colors[f] = c[f]);
      },
      orientationModel: (c) => {
        if (![0, 1, 2].includes(c)) {
          E.orientationModel = 0;
          return;
        }
        E.orientationModel = c;
      },
      numberFormat: (c) => {
        if (!["decimal", "fraction"].includes(c)) {
          E.numberFormat = "decimal";
          return;
        }
        E.numberFormat = c;
      },
      customFields: (c) => {
        if (!Array.isArray(c) || !c?.length)
          return;
        const f = [];
        c.forEach((g) => {
          const u = Ee(g.id), C = {
            ...g,
            custom: !0,
            id: u,
            name: u,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + u,
            fieldMap: "customData." + u
          };
          g.type === "checkbox" && (C.w = "32px"), g.type === "integer" || g.type === "float" ? C.output = g.output ?? "number" : g.type === "select" && (C.output = g.output ?? "string", C.options = g.options), f.push(C);
        }), Nn.value = f, vt(() => {
          for (const g of r.inputShapes.value)
            g.customData = c.reduce((u, C) => {
              const L = Ee(C.id);
              return u[L] = g.customData?.[L] || C.default || "", u;
            }, {});
        });
      }
    }, ft = (c) => {
      b.value && re("log", ["checkout init...", c]), c?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), c?.parts && (c.parts = q(c.parts));
      let f;
      try {
        f = Nf(c);
      } catch (u) {
        console.error("[init] validation FAILED:", u.message), re("error", u.message || "Invalid init data");
        return;
      }
      if (f.saw) {
        const u = f.saw;
        if (u.stockType !== void 0 && (gs.includes(u.stockType) || console.warn(`${u.stockType} is not a valid stockType, expected ${gs.join("|")}`), te.stockType = u.stockType, u.stockType === "linear" && (te.cutType = void 0, te.cutPreference = void 0)), u.bladeWidth !== void 0) {
          const C = typeof u.bladeWidth == "string" ? parseFloat(u.bladeWidth) : u.bladeWidth;
          C >= 0 ? te.bladeWidth = C : console.warn(`SmartCut - you provided an incorrect blade width of: ${u.bladeWidth}`);
        }
        if (u.cutType !== void 0 && (te.cutType = u.cutType), u.cutPreference !== void 0 && (_s.includes(u.cutPreference) ? te.cutPreference = u.cutPreference : console.warn(`SmartCut - cut preference ${u.cutPreference || "N/A"} is not valid. Expected: ${_s.join("|")}`)), u.guillotineOptions !== void 0 && typeof u.guillotineOptions == "object" && Object.assign(te.guillotineOptions, u.guillotineOptions), u.stackHeight !== void 0) {
          const C = typeof u.stackHeight == "string" ? parseFloat(u.stackHeight) : u.stackHeight;
          te.stackHeight = C;
        }
        u.efficiencyOptions !== void 0 && typeof u.efficiencyOptions == "object" && Object.assign(te.efficiencyOptions, u.efficiencyOptions), u.options !== void 0 && typeof u.options == "object" && (u.options.stockSelection !== void 0 && (te.options.stockSelection = u.options.stockSelection), u.options.stackingMode !== void 0 && (te.options.stackingMode = u.options.stackingMode), u.options.minSpacing !== void 0 && (te.options.minSpacing = u.options.minSpacing));
      }
      if (f?.options) {
        const u = f.options;
        Ga(u);
        const C = ["stockType", "bladeWidth"];
        if (!f.saw && !c?.stockFilterEnabled)
          re("error", `Saw configuration is required. Missing properties: ${C.join(", ")}`);
        else if (f.saw) {
          const z = C.filter((ke) => !(ke in f.saw));
          z.length > 0 && re("error", `Missing required saw properties: ${z.join(", ")}`), (f.saw.cutType === "guillotine" || f.saw.cutType === "beam") && !("cutPreference" in f.saw) && re("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const L = ["enable", "colors"];
        for (const z in u)
          L.includes(z) || (E[z] = u[z]), z in be && be[z]?.(u[z]);
      }
      if (f.options.colors && "colors" in be && be.colors(f.options.colors), f.banding) {
        const u = f.banding;
        "locations" in u && u.locations && (it.locations = u.locations), "groups" in u && u.groups && (it.groups = u.groups), "rules" in u && u.rules && (it.rules = u.rules);
      }
      if (f.finish) {
        const u = f.finish;
        "locations" in u && u.locations && (qt.locations = u.locations), "groups" in u && u.groups && (qt.groups = u.groups), "rules" in u && u.rules && (qt.rules = u.rules);
      }
      if (f.planing) {
        const u = f.planing;
        "locations" in u && u.locations && (_t.locations = u.locations), "groups" in u && u.groups && (_t.groups = u.groups), "rules" in u && u.rules && (_t.rules = u.rules);
      }
      f.partRules && (Ut.value = f.partRules), f.customValidation && (Wt.value = f.customValidation), Hi("banding", f), Hi("finish", f), Hi("planing", f), Vn(f), Ls(f), r.inputShapes.value.length && Es(), At.value = !0, b.value && re("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), vt(() => {
        Ae.value && !Co() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), f.parts?.length && vt(() => {
        b.value && re("log", ["loading parts via init..."]), r.inputShapes.value.length = 0;
        let u = 0;
        for (const L of f.parts) {
          const z = li(L);
          z ? z.issues?.length && b.value && re("log", [`SmartCut - issues found while importing part at index ${u}`, z.issues]) : b.value && re("log", [`SmartCut - error loading part at index ${u}`, L]), u++;
        }
        r.inputShapes.value.flatMap((L) => hs(L.issues)).length && Y({
          type: "error",
          message: Se("errors.general.issues_found")
        }), b.value && re("log", [`loaded ${r.inputShapes.value.length} parts via init`]);
      });
    }, Ce = (c, f = !1) => {
      sn.value[c] = f;
    }, Ee = (c) => c ? Jl(c)?.toLowerCase() : null, Ge = (c, f, g) => {
      try {
        if (!c || !f) return;
        const C = g !== null && g !== "" && g !== void 0 && !["orientationLock", "grain"].includes(f), L = (ie, fe) => {
          if (!V(ie.autoId, fe)) {
            for (const [Oe, Be] of Object.entries(fe))
              es(ie, Oe, Be);
            ie.isNew || ie.validate({ fields: Object.keys(fe) });
          }
        }, z = (ie, fe, Ve) => {
          const Oe = fe ?? ie.material, Be = Ve ?? ie.t, Ot = r.inputStock.value.find((In) => {
            const Vo = !Oe || In.material === Oe, Do = Be == null || me({ v: In.t }) === me({ v: Be });
            return Vo && Do;
          });
          return Ot ? { l: me({ v: Ot.l }), w: me({ v: Ot.w }) } : null;
        };
        if (f === "material" && (!g || g === "")) {
          const ie = { material: null, t: null };
          te.stockType === "linear" && (ie.w = null), L(c, ie);
          return;
        }
        if (f === "material" && g && xe.value?.length) {
          const ie = xe.value.find((fe) => fe.name === g);
          if (ie) {
            const fe = { material: g };
            if (c.t != null) {
              const Oe = me({ v: c.t });
              !ie.thicknesses.some((Be) => me({ v: Be }) === Oe) && ie.thicknesses.length > 0 && (fe.t = me({ v: ie.thicknesses[0] }));
            }
            if (te.stockType === "linear" && c.w != null && ie.widths) {
              const Oe = me({ v: c.w });
              !ie.widths.some((Be) => me({ v: Be }) === Oe) && ie.widths.length > 0 && (fe.w = me({ v: ie.widths[0] }));
            }
            L(c, fe), Cn(c, ie), Pn(c);
            const Ve = r.inputShapes.value.indexOf(c);
            for (const Oe of ["banding", "finish", "planing"])
              if (et[Oe] === Ve) {
                const Be = Ye(c, Oe);
                Be.options.length && Q(Oe, Be.options, Be.labels, Be.pricing);
              }
            return;
          }
        }
        if (f === "fullStock")
          if (g === !0) {
            const ie = z(c);
            if (ie) {
              L(c, { fullStock: !0, l: ie.l, w: ie.w });
              return;
            }
          } else {
            L(c, { fullStock: !1, l: null, w: null });
            return;
          }
        if ((f === "material" || f === "t") && c.fullStock) {
          const ie = z(
            c,
            f === "material" ? g : void 0,
            f === "t" ? g : void 0
          );
          if (ie) {
            L(c, { [f]: g, l: ie.l, w: ie.w });
            return;
          }
        }
        if (c.isNew)
          if (C)
            c.isNew = !1;
          else {
            es(c, f, g);
            return;
          }
        let ke;
        if (f.includes(".")) {
          const ie = f.split("."), fe = ie[0], Ve = ie.slice(1).join("."), Be = { ...c[fe] || {} };
          es(Be, Ve, g), ke = { [fe]: Be };
        } else
          ke = { [f]: g };
        L(c, ke), f === "t" && te.stockType === "linear" && xe.value?.length && c.material && vt(() => {
          const ie = Os(c);
          if (ie.length > 0 && c.w != null) {
            const fe = me({ v: c.w });
            ie.some((Ve) => me({ v: Ve }) === fe) || L(c, { w: me({ v: ie[0] }) });
          }
        });
      } catch (u) {
        console.error("[CHECKOUT] Error updating field:", u);
      }
    }, Et = () => {
    }, Mt = (c, f) => {
      c?.isNew && (c.isNew = !1), c.validate({ fields: [f] }), ["l", "w", "t"].includes(f) && Bn(c);
    }, Bn = (c) => {
      if (Ut.value && c && !c.isNew && !(!c.l && !c.w))
        try {
          const f = df(c, Ut.value);
          if (c.issues && (c.issues = c.issues.filter((g) => !g.category?.includes("part"))), !f.valid && f.violations.length > 0)
            for (const g of f.violations) {
              const u = pf(g), C = g.dimension === "longSide" ? "l" : g.dimension === "shortSide" ? "w" : null;
              new Dt({
                item: c,
                type: "error",
                category: ["part"],
                field: C ? [[C]] : [],
                message: u,
                shouldTranslate: !1
              });
            }
        } catch (f) {
          console.error("[CHECKOUT] Error validating part:", f);
        }
    }, Vn = (c) => {
      if (un(E, ["enable", "machining"]) && c?.machining) {
        for (const f in wt)
          c.machining[f] && (wt[f] = c.machining[f]);
        if (["holes", "hingeHoles"].forEach((f) => {
          c?.machining?.[f] && (wt[f].enabled = c?.machining?.[f].enabled);
        }), c?.machining?.corners?.types?.length && (wt.corners.enabled = !0, wt.corners.types = c.machining.corners.types), c.banding && c?.options?.enable?.banding) {
          if (!Te) return;
          wt.banding = {
            enabled: !0
          }, Te.options.length && (wt.banding.options = Te.options), Te.labels.length && (wt.banding.labels = Te.labels), Us(Te.pricing) && (wt.banding.pricing = Te.pricing);
        }
      }
    }, ai = (c = null) => {
      ye.value = c, c && Re(c) && c.l && c.w ? rt.value = !0 : alert(Se("machining.enter_dimensions_first"));
    }, pt = () => {
      rt.value = !1;
    }, Dn = (c = []) => {
      if (Ne.value = [], $t.value = [], Ce("t", !1), !!c.length) {
        for (const f of c)
          if (f?.t)
            if (typeof f.t == "string" && f.t.includes(",")) {
              const g = oi(f.t, !0);
              g.length === 2 ? (yo(g), Ce("t", !0), f.t = Ne.value[0]) : re("error", "bonded thickness found which does not have 2 options");
            } else Ne.value.includes(f.t) || Ne.value.push(f.t);
        Ne.value.length > 1 && Ce("t", !0);
      }
    }, xn = (c = []) => {
      if (qe.value = [], !c.length) {
        Ce("w", !1);
        return;
      }
      for (const f of c) {
        if (!f?.w) continue;
        const g = me({ v: f.w });
        qe.value.includes(g) || qe.value.push(g);
      }
      qe.value.length >= 1 ? Ce("w", !0) : Ce("w", !1);
    }, ho = (c) => {
      if (!c) return { thicknesses: [], bondedThicknesses: [] };
      if (!xe.value?.length)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      if (!c.material)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      const f = xe.value.find((C) => C.name === c.material);
      if (!f)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      const g = [...f.thicknesses], u = [];
      for (let C = 0; C < g.length; C++) {
        const L = g[C], z = oi(L), ke = [];
        if (z.length) {
          for (const ie of z)
            g[C] = ie, ke.push(C);
          C++;
        }
        ke.length && u.push(ke);
      }
      return {
        thicknesses: g,
        bondedThicknesses: u
      };
    }, Os = (c) => {
      if (!c) return [];
      if (!xe.value?.length || !c.material)
        return qe.value;
      const f = xe.value.find((g) => g.name === c.material);
      if (!f)
        return qe.value;
      if (c.t != null && r.inputStock?.value?.length) {
        const g = me({ v: c.t }), u = /* @__PURE__ */ new Set();
        for (const C of r.inputStock.value)
          C.material?.toUpperCase() === c.material && me({ v: C.t }) === g && C.w != null && u.add(me({ v: C.w }));
        if (u.size > 0)
          return Array.from(u).sort((C, L) => C - L);
      }
      return f.widths || qe.value;
    }, go = (c) => c === "banding" ? Te : c === "finish" ? He : c === "planing" ? We : null, mo = (c, f) => zi(c?.stock?.db_id)?.customData?.stockExtras?.[f], Ye = (c, f) => {
      const g = go(f), u = {
        options: g?.options ?? [],
        labels: g?.labels ?? [],
        pricing: g?.pricing ?? {},
        displayNames: g?.displayNames ?? {}
      };
      if (!c?.material) return u;
      const C = mo(c, f);
      if (!C) return u;
      const L = C.pricing && typeof C.pricing == "object" ? C.pricing : { [C.name]: C.price ?? 0 }, z = C.labels?.length ? C.labels : [f.charAt(0).toUpperCase() + f.slice(1)], ke = ci(L), ie = C.displayNames && typeof C.displayNames == "object" ? C.displayNames : g?.displayNames ?? {};
      return { options: ke, labels: z, pricing: L, displayNames: ie, locations: C.locations?.length ? C.locations : void 0 };
    }, Gi = (c, f) => Ye(c, f).options, vo = (c) => {
      const f = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!c?.material) return f;
      const u = zi(c?.stock?.db_id)?.customData?.stockExtras;
      return u ? {
        banding: !u.banding,
        finish: !u.finish,
        planing: !u.planing,
        machining: !u.machining
      } : f;
    }, Ls = (c) => {
      if (c?.stock?.some((f) => f?.material)) {
        xe.value = [], Ne.value = [], $t.value = [];
        const f = /* @__PURE__ */ new Map();
        for (const C of c.stock) {
          if (!C.material) continue;
          const L = ri(C);
          f.has(L) || f.set(L, { db_id: C.db_id, code: C.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), C.t != null && (typeof C.t == "string" && C.t.includes(",") ? f.get(L)?.thicknesses.add(C.t) : f.get(L)?.thicknesses.add(me({ v: C.t }))), te.stockType === "linear" && C.w != null && f.get(L)?.widths.add(me({ v: C.w }));
        }
        const g = Array.from(f.entries()).map(([C, L]) => {
          const z = [], ke = [];
          for (const ie of L.thicknesses)
            typeof ie == "string" && ie.includes(",") ? ke.push(ie) : z.push(me({ v: ie }));
          return { name: C, sets: L, regularThicknesses: z, bondedStrings: ke };
        });
        xe.value = g.map(({ name: C, sets: L, regularThicknesses: z }) => {
          const ke = {
            name: C,
            db_id: L.db_id,
            code: L.code,
            thicknesses: z.sort((ie, fe) => ie - fe)
          };
          return te.stockType === "linear" && L.widths.size > 0 && (ke.widths = Array.from(L.widths).sort((ie, fe) => ie - fe)), ke;
        });
        const u = /* @__PURE__ */ new Set();
        for (const C of xe.value)
          for (const L of C.thicknesses)
            u.add(me({ v: L }));
        Ne.value = Array.from(u).sort((C, L) => C - L);
        for (let C = 0; C < g.length; C++) {
          const { bondedStrings: L } = g[C], z = xe.value[C];
          for (const ke of L) {
            const ie = oi(ke, !0);
            if (ie.length !== 2) continue;
            const fe = [];
            for (const Ve of ie) {
              const Oe = me({ v: Ve });
              let Be = Ne.value.findIndex((Ot) => me({ v: Ot }) === Oe);
              Be === -1 ? (Ne.value.push(Oe), z.thicknesses.push(Oe), Be = Ne.value.length - 1) : z.thicknesses.some((Ot) => me({ v: Ot }) === Oe) || z.thicknesses.push(Oe), fe.push(Be);
            }
            $t.value.push(fe);
          }
        }
        if (te.stockType === "linear") {
          const C = /* @__PURE__ */ new Set();
          for (const L of xe.value)
            if (L.widths)
              for (const z of L.widths)
                C.add(me({ v: z }));
          qe.value = Array.from(C).sort((L, z) => L - z);
        }
        xe.value.length > 1 ? Ce("material", !0) : Ce("material", !1), Ne.value.length > 1 ? Ce("t", !0) : Ce("t", !1), te.stockType === "linear" && qe.value.length > 1 ? Ce("w", !0) : te.stockType === "linear" && Ce("w", !1);
      } else
        Dn(c.stock);
      te.stockType === "linear" && !xe.value?.length && xn(c.stock);
    }, bo = (c) => {
      if (!c?.length) {
        xe.value = [], Ne.value = [], qe.value = [];
        return;
      }
      if (c.some((g) => g?.material)) {
        const g = /* @__PURE__ */ new Map();
        $t.value = [];
        for (const L of c) {
          if (!L.material) continue;
          const z = ri(L);
          g.has(z) || g.set(z, { db_id: L.db_id, code: L.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), L.t != null && (typeof L.t == "string" && L.t.includes(",") ? g.get(z)?.thicknesses.add(L.t) : g.get(z)?.thicknesses.add(me({ v: L.t }))), te.stockType === "linear" && L.w != null && g.get(z)?.widths.add(me({ v: L.w }));
        }
        const u = Array.from(g.entries()).map(([L, z]) => {
          const ke = [], ie = [];
          for (const fe of z.thicknesses)
            typeof fe == "string" && fe.includes(",") ? ie.push(fe) : ke.push(me({ v: fe }));
          return { name: L, sets: z, regularThicknesses: ke, bondedStrings: ie };
        });
        xe.value = u.map(({ name: L, sets: z, regularThicknesses: ke }) => {
          const ie = {
            name: L,
            db_id: z.db_id,
            code: z.code,
            thicknesses: ke.sort((fe, Ve) => fe - Ve)
          };
          return te.stockType === "linear" && z.widths.size > 0 && (ie.widths = Array.from(z.widths).sort((fe, Ve) => fe - Ve)), ie;
        });
        const C = /* @__PURE__ */ new Set();
        for (const L of xe.value)
          for (const z of L.thicknesses)
            C.add(me({ v: z }));
        Ne.value = Array.from(C).sort((L, z) => L - z);
        for (let L = 0; L < u.length; L++) {
          const { bondedStrings: z } = u[L], ke = xe.value[L];
          for (const ie of z) {
            const fe = oi(ie, !0);
            if (fe.length !== 2) continue;
            const Ve = [];
            for (const Oe of fe) {
              const Be = me({ v: Oe });
              let Ot = Ne.value.findIndex((In) => me({ v: In }) === Be);
              Ot === -1 ? (Ne.value.push(Be), ke.thicknesses.push(Be), Ot = Ne.value.length - 1) : ke.thicknesses.some((In) => me({ v: In }) === Be) || ke.thicknesses.push(Be), Ve.push(Ot);
            }
            $t.value.push(Ve);
          }
        }
        if (te.stockType === "linear") {
          const L = /* @__PURE__ */ new Set();
          for (const z of xe.value)
            if (z.widths)
              for (const ke of z.widths)
                L.add(me({ v: ke }));
          qe.value = Array.from(L).sort((z, ke) => z - ke);
        }
        Ce("material", xe.value.length > 1), Ce("t", Ne.value.length > 1), te.stockType === "linear" && Ce("w", qe.value.length > 1);
      } else
        Dn(c), te.stockType === "linear" && xn(c);
    }, yo = (c, f = null) => {
      if (!Array.isArray(c)) {
        re("error", "addBondedThicknesses expects an array");
        return;
      }
      const g = [];
      for (let u of c)
        E.numberFormat === "decimal" && (u = parseFloat(u)), Ne.value.push(u), f && f.thicknesses.push(u), g.push(Ne.value.length - 1);
      $t.value.push(g);
    }, wo = (c) => {
      const { thicknesses: f } = ho(c);
      return f?.length ? f.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, ko = (c) => {
      const f = Os(c);
      return f?.length ? f.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, oi = (c, f = !1) => {
      if (typeof c == "string" && c.includes(",")) {
        const g = c.split(",");
        if (g.length === 2) {
          const u = parseFloat(g[0]), C = parseFloat(g[1]);
          !isNaN(u) && !isNaN(C) && C !== u * 2 && Y({
            type: "warning",
            message: `Bonded thickness "${c}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return f ? g.map((u) => me({ v: u })) : g;
      }
      return [];
    }, So = () => {
      ge.value ? Po() : xo();
    }, xo = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), ge.value = !0;
    }, Po = () => {
      document.exitFullscreen && document.exitFullscreen(), ge.value = !1;
    }, Co = () => {
      if (ze.value?.api?.whiteLabel) return !0;
      let c = !0;
      const f = document.querySelector("#smartcut-checkout a#credit");
      if (!f) return c = !1;
      const g = window.getComputedStyle(f);
      return g.display === "none" || g.display === "hidden" || g.opacity === "0" || g.color === "transparent" || g.position !== "absolute" || g.color !== "#4e4e4e" && g.color !== "rgb(78, 78, 78)" ? c = !1 : (en.value = c, c);
    }, qi = T(() => typeof $e.findExtrasPrice == "function"), Fs = (c, f) => {
      let g, u;
      switch (f) {
        case "banding":
          g = Te.options, u = Te.labels;
          break;
        case "finish":
          g = He.options, u = He.labels;
          break;
        case "planing":
          g = We.options, u = We.labels;
          break;
        default:
          g = [], u = [];
      }
      cn(c, f, g, u);
    }, Ts = (c) => {
      const f = Object.keys(c);
      return Math.max(...f.map((u) => u.split("|").length));
    }, jn = (c, f, g) => {
      if (!c)
        return [];
      if (g > 0 && !f[g - 1])
        return [];
      const u = /* @__PURE__ */ new Set();
      for (const L of Object.keys(c)) {
        const z = L.split("|");
        if (z.length > g) {
          let ke = !0;
          for (let ie = 0; ie < g; ie++) {
            const fe = f[ie], Ve = z[ie];
            if (fe && fe !== Ve) {
              ke = !1;
              break;
            }
          }
          ke && u.add(z[g]);
        }
      }
      return Array.from(u);
    }, _i = (c, f, g, u) => {
      const C = Ye(c, f);
      return Xi(c, f, g, (z, ke) => {
        const ie = ke.filter((fe) => fe?.trim()).join("|");
        return ie && C.pricing[ie] !== void 0 ? C.pricing[ie] : u ? u(z, ke) : null;
      }, C.options, C.labels);
    }, Io = (c, f, g) => {
      let u, C;
      switch (f) {
        case "banding":
          u = Te.options, C = Te.labels;
          break;
        case "finish":
          u = He.options, C = He.labels;
          break;
        case "planing":
          u = We.options, C = We.labels;
          break;
        default:
          u = [], C = [];
      }
      return Xi(c, f, g, $e.findExtrasPrice, u, C);
    }, Ao = K({}), Oo = (c) => {
      const f = ot.value.findIndex((g) => g.shapeId === c.shapeId);
      f !== -1 ? ot.value[f] = c : ot.value.push(c), window.smartcutImages = ot.value;
    }, Lo = (c) => {
      ot.value = ot.value.filter((f) => f.shapeId !== c), window.smartcutImages = ot.value;
    }, Fo = (c) => {
      It.value = It.value === c ? null : c;
    }, Ui = (c = 1) => {
      for (let f = c; f--; ) {
        let g = {
          l: null,
          w: te.stockType === "linear" && qe.value.length === 1 ? qe.value[0] : null,
          t: Ne.value.length ? Ne.value[0] : null,
          q: 1,
          material: xe.value?.length === 1 ? xe.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const C = r.inputShapes.value[r.inputShapes.value.length - 1];
          g.material = C.material, g.t = C.t, te.stockType === "linear" && C.w && (g.w = C.w);
        }
        const u = I(g);
        u && (Te?.labels?.length && cn(u, "banding", Te.options, Te.labels), He?.labels?.length && cn(u, "finish", He.options, He.labels), We?.labels?.length && cn(u, "planing", We.options, We.labels));
      }
    }, li = (c = {}) => {
      const f = {
        q: 1,
        // Always set quantity to 1
        ...c
      }, g = I(f);
      return g && (te.stockType === "linear" && qe.value.length === 1 && !g.w && (g.w = qe.value[0]), Ne.value.length && !g.t && (g.t = Ne.value[0]), xe.value?.length === 1 && !g.material && (g.material = xe.value[0].name), Te?.labels?.length && cn(g, "banding", Te.options, Te.labels), He?.labels?.length && cn(g, "finish", He.options, He.labels), We?.labels?.length && cn(g, "planing", We.options, We.labels)), g;
    }, To = (c) => {
      if (Ne.value.length)
        for (const f of c) {
          if (!f.t) continue;
          const g = Ne.value.findIndex(
            (L) => me({ v: L }) === f.t
          ), u = $t.value.find((L) => L.includes(g));
          if (!u) continue;
          const C = Math.min(
            ...u.map((L) => Ne.value[L])
          );
          me({ v: f.t }) > C && (f.q = Number(f.q) * (me({ v: f.t }) / C), f.notes = `Bond to form ${f.t.valueOf()}`, f.t = C);
        }
    }, $s = () => {
      Me(), ae(null), $.stockList.value = [], $.shapeList.value = [], $.cutList.value = [];
    }, Wi = () => {
      r.inputShapes.value.length = 0, $e.inputType !== "formula" && vt(() => Ui());
    }, zi = (c) => {
      if (c)
        return r.inputStock.value.find((f) => f.db_id === c);
    }, Pn = (c) => {
      c.extras && (c.extras.banding = null, c.extras.finish = null, c.extras.planing = null);
    }, ri = (c) => (c.customData?.stockName || c.material || "").toUpperCase(), $o = (c, f) => {
      const g = c.toUpperCase();
      return r.inputStock.value.find((u) => ri(u) === g && me({ v: u.t }) === f);
    }, Cn = (c, f) => {
      const g = me({ v: c.t }), u = $o(f.name, g);
      c.stock = {
        db_id: u?.db_id || f.db_id,
        code: u?.code || f.code,
        material: f.name,
        thickness: g
      };
    }, Es = () => {
      for (const c of r.inputShapes.value) {
        const f = c.stock, g = c.material?.toUpperCase();
        let u = null;
        if (f?.db_id) {
          const C = zi(f.db_id);
          C && (u = xe.value.find((L) => L.name === ri(C))), u || (u = xe.value.find((L) => L.db_id && L.db_id === f.db_id));
        }
        if (!u && f?.code && (u = xe.value.find((C) => C.code && C.code === f.code)), !u && g && (u = xe.value.find((C) => C.name === g)), u)
          c.material = u.name, Cn(c, u), c.t != null && !u.thicknesses.includes(me({ v: c.t })) && (c.t = null, c.stock = null, Pn(c));
        else {
          if ((f?.db_id || f?.code) && !xe.value?.length)
            continue;
          if (xe.value?.length === 1) {
            const C = xe.value[0], L = c.material !== C.name;
            c.material = C.name, C.thicknesses.includes(me({ v: c.t })) || (c.t = me({ v: C.thicknesses[0] })), Cn(c, C), L && Pn(c);
          } else if (xe.value?.length > 1 && c.t) {
            const C = xe.value.find((L) => L.thicknesses.some((z) => me({ v: z }) === me({ v: c.t })));
            C ? (c.material !== C.name && Pn(c), c.material = C.name, Cn(c, C)) : (Pn(c), c.material = xe.value[0].name, c.t = me({ v: xe.value[0].thicknesses[0] }), Cn(c, xe.value[0]));
          } else xe.value?.length > 1 ? (Pn(c), c.material = xe.value[0].name, c.t = me({ v: xe.value[0].thicknesses[0] }), Cn(c, xe.value[0])) : !c.t && r.inputStock.value[0]?.t && (c.t = me({ v: r.inputStock.value[0].t }));
        }
      }
    }, Eo = async () => {
      if (re("calculating"), Je.value) return !1;
      Je.value = !0, Gt.value = !1, Es();
      const c = await Jd({
        t: Se,
        partTrim: E.partTrim,
        maxShapes: E.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Te.pricing,
        finishPricing: He.pricing,
        planingPricing: We.pricing,
        findExtrasPrice: $e.findExtrasPrice,
        getShapeExtrasPricing: (L, z) => Ye(L, z).pricing,
        extrasValidationRules: ti.value,
        extrasLocationGroups: {
          banding: it.groups,
          finish: qt.groups,
          planing: _t.groups
        },
        onLimit: () => {
          Y({
            type: "error",
            message: Se("limits.max_parts") + " " + E.maxParts
          });
        }
      });
      if (Ut.value)
        for (const L of r.inputShapes.value)
          Bn(L);
      const f = r.inputShapes.value.flatMap((L) => L.issues || []).filter((L) => L.type === "error" && L.category?.includes("part") && !L.category?.includes("extras"));
      if (f.length > 0) {
        Y({
          type: "error",
          message: Se("errors.validation.inputs_issue", { 0: "part" }),
          additional: f.map((L) => L.message)
        }), re("validation-error"), Je.value = !1;
        return;
      }
      if (!c.valid) {
        re("validation-error"), Je.value = !1;
        return;
      }
      $s(), r.inputShapes.value.forEach((L, z) => {
        L.createId(z);
      }), r.inputStock.value.forEach((L, z) => {
        L.createId(z);
      });
      const g = r.inputShapes.value.map((L) => M(L)).filter(Boolean);
      if (g.length !== r.inputShapes.value.length)
        return Y({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), Je.value = !1, !1;
      To(g), b.value && re("log", [
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((L) => ({ l: L.l, w: L.w })),
        "parts",
        g.map((L) => ({ l: L.l, w: L.w }))
      ]);
      const u = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: g.map((L) => L.toData()),
        inputStock: r.inputStock.value.map((L) => L.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Pt,
        extrasOptions: he(),
        source: "checkout",
        sourceVersion: "4.1.25"
      };
      if (Wt.value?.enabled && Wt.value?.rules?.length > 0) {
        const L = tf(
          Wt.value.rules,
          r.inputShapes.value.map((z) => z.toData())
        );
        if (!L.valid) {
          for (const z of L.errors) {
            const ke = z.partName ? `Part "${z.partName}"` : `Part ${z.partIndex + 1}`;
            Y({
              type: "error",
              message: `${ke}: ${z.message}`
            });
          }
          Je.value = !1;
          return;
        }
      }
      re("before-calculate", u);
      const C = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: u,
          error: null
        }
      });
      if (window.dispatchEvent(C), C.defaultPrevented) {
        C.detail.error && Y({
          type: "error",
          message: C.detail.error
        }), Je.value = !1;
        return;
      }
      await w.connect(), w.emit("calculate", u);
    }, Hi = (c, f) => {
      if (Ce(c, !1), !c || !f || !f?.[c] || !un(E, ["enable", c]))
        return;
      const g = [c, "pricing"];
      if (!Ws(f, g)) {
        re("error", `${g.join(".")} not found in sent data`);
        return;
      }
      const u = un(f, g);
      if (typeof u != "object") {
        re("error", `${g.join(".")} data must be an object`);
        return;
      }
      if (!Us(u)) {
        re("error", `if provided, ${g.join(".")} data must contain some values`);
        return;
      }
      const C = Object.keys(u), L = Object.values(u);
      if (!C.length) {
        re("error", `no ${g.join(".")} pricing found`);
        return;
      }
      const z = /,/;
      for (const Oe of C)
        if (z.test(Oe)) {
          re("error", `${g} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (L.some((Oe) => isNaN(Oe))) {
        re("error", `${g} values must be a number`);
        return;
      }
      const ke = Ts(u), ie = [c, "labels"];
      let fe = [];
      if (Ws(f, ie))
        fe = un(f, ie);
      else {
        re("error", `${ie.join(".")} not found`);
        return;
      }
      if (!fe) {
        re("error", `${ie.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(fe)) {
        re("error", `${ie.join(".")} data must be an array`);
        return;
      }
      if (!fe?.length) {
        re("error", `if provided, ${ie.join(".")} data must contain values`);
        return;
      }
      if (fe.length !== ke) {
        re("error", `${ie.join(".")} length (${fe.length}) must match the number of levels in ${g.join(".")} (${ke})`);
        return;
      }
      const Ve = un(f, [c, "displayNames"]) || void 0;
      switch (c) {
        case "banding": {
          Te.labels = fe, Te.pricing = u, Te.displayNames = Ve || {};
          const Oe = ci(u);
          Te.options = Oe, Q("banding", Oe, fe, u, Ve);
          break;
        }
        case "finish": {
          He.labels = fe, He.pricing = u, He.displayNames = Ve || {};
          const Oe = ci(u);
          He.options = Oe, Q("finish", Oe, fe, u, Ve);
          break;
        }
        case "planing": {
          We.labels = fe, We.pricing = u, We.displayNames = Ve || {};
          const Oe = ci(u);
          We.options = Oe, Q("planing", Oe, fe, u, Ve);
          break;
        }
      }
      if (ei.value = he(), Ce(c, !0), !!r.inputShapes.value?.length)
        for (const Oe of r.inputShapes.value)
          Fs(Oe, c);
    }, ci = (c) => {
      const f = [], g = Object.keys(c), u = Ts(c);
      for (let C = u; C--; ) f.push(/* @__PURE__ */ new Set());
      for (const C of g) {
        const L = C.split("|");
        u > 1 && L.length !== u || L.forEach((z, ke) => f[ke].add(z));
      }
      for (let C = 0; C < u; C++)
        f[C] = Array.from(f[C]);
      return f;
    }, ui = (c, f) => {
      if (!f) return;
      c !== "info" && Object.keys(et).forEach((u) => {
        u !== c && u !== "info" && (et[u] = null);
      });
      const g = r.inputShapes.value.indexOf(f);
      if (et[c] === g)
        ye.value = null, et[c] = null, Ao.value[c] = void 0;
      else if (ye.value = f, et[c] = g, c !== "info") {
        const u = Ye(f, c);
        u.options.length && Q(
          c,
          u.options,
          u.labels,
          u.pricing
        );
      }
    }, Ms = (c) => {
      b.value && re("log", ["load event received"]), At.value && Mo(c.detail);
    }, Mo = (c) => {
      if (b.value && re("log", ["loading parts..."]), !c || !c?.inputs?.parts?.length) {
        b.value && re("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let f = 0;
      for (const u of c.inputs.parts) {
        const C = li(u);
        C ? C.issues?.length && b.value && re("log", [`SmartCut - issues found while importing part at index ${f}`, C.issues]) : b.value && re("log", [`SmartCut - error loading part at index ${f}`, u]), f++;
      }
      r.inputShapes.value.flatMap((u) => hs(u.issues)).length && Y({
        type: "error",
        message: Se("errors.general.issues_found")
      }), b.value && re("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, No = (c) => {
      r.inputShapes.value.length = 0, vt(() => {
        for (const f of c)
          f.t = r.inputStock.value?.[0]?.t ?? null, te.stockType === "linear" && qe.value.length === 1 && !f.w && (f.w = qe.value[0]), li(f);
      });
    };
    Ue(() => $e.inputStock, (c) => {
      if ($s(), Array.isArray(c) || console.warn("SmartCut - stock must be passed as an array"), !c?.length) return;
      r.inputStock.value.length = 0;
      const f = c.map((g) => g.toData());
      bo(f);
      for (const g of c)
        B({
          ...g.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", g), Y({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (r.inputStock.value.length) {
        r.inputShapes.value.length || $e.inputType !== "formula" && vt(() => {
          r.inputShapes.value.length || Ui();
        });
        const g = p(r.inputSaw.value);
        g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), Y({
          type: "error",
          message: Se("errors.validation.stock_issue"),
          additional: g.map((u) => u.message)
        }));
      }
    }, { immediate: !0 }), Ue(r.inputShapes, (c) => {
      re("inputs-changed"), c.forEach((f) => {
        te.stockType === "linear" && qe.value.length && (!f.w || !qe.value.includes(me({ v: f.w }))) && (f.w = qe.value[0]);
        const g = xe.value.find((u) => u.name === f.material);
        g && (g.thicknesses.includes(me({ v: f.t })) || (f.t = me({ v: g.thicknesses[0] })));
      });
    }, { deep: !0 }), Ue(() => pe.value.length, (c, f) => {
      if (bn.value) {
        if (c > f) {
          const g = Math.ceil(c / x.value);
          P.value < g && (P.value = g);
        } else if (c < f) {
          const g = Math.ceil(c / x.value);
          P.value > g && (P.value = Math.max(1, g));
        }
      }
    }), Ue(() => E.numberFormat, (c) => {
      k(c);
    }), Ue(r.inputStock, (c) => {
      te.stockType === "linear" && xn(c.map((f) => f.toData()));
    }, { deep: !0 }), Ue(() => te, (c) => {
      r.inputSaw.value = new Zt(c);
    }, { deep: !0 }), gn(async () => {
      if (tn.value) return;
      tn.value = !0;
      const c = new URL(window.location.href), f = c.searchParams.toString(), g = c.origin + c.pathname + (f ? `?${f}` : "");
      Ct.value !== g && Wi(), Ct.value = g, tt.value = E.locale, await w.connect(), w.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ms);
    });
    const Bo = () => {
      w && w.disconnect();
    };
    return Qn(() => {
      window.removeEventListener("smartcut/load", Ms), Bo(), delete window.smartcutCheckout;
    }), e({
      init: ft,
      clear: Wi,
      getAvailablePricingOptions: jn,
      getExtrasPrice: Io,
      formatPrice: $e.formatPrice,
      findExtrasPrice: $e.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: Fs,
      createAndAddInputShape: li,
      initMaterialsThicknesses: Ls
    }), (c, f) => {
      const g = mn("FontAwesomeIcon");
      return O(), R("div", up, [
        b.value || de ? (O(), Ie(A(o), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: A(r).inputStock.value.map((u) => ({ material: u.material, db_id: u.db_id || null, code: u.code || null, l: u.l, w: u.w, t: u.t, stockExtras: u.customData?.stockExtras })),
            materials: xe.value.map((u) => ({ name: u.name, thicknesses: u.thicknesses, db_id: u.db_id, code: u.code })),
            inputShapesStockRefs: A(r).inputShapes.value.map((u) => ({ material: u.material || "?", t: u.t, stock: u.stock || null })),
            localStorage: { inputStock: D.value, stockFilterSelections: G.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : se("", !0),
        At.value ? se("", !0) : (O(), Ie(ma, {
          key: 1,
          size: 50,
          "show-number": !1
        })),
        ye.value?.machining && rt.value ? (O(), Ie(A(s), {
          key: 2,
          "input-shape": ye.value,
          "onUpdate:inputShape": f[0] || (f[0] = (u) => ye.value = u),
          translate: !0,
          options: wt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": A(Xi),
          "get-available-pricing-options": jn,
          "format-price": t.formatPrice,
          onClose: pt
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : se("", !0),
        At.value ? (O(), R("section", {
          key: 3,
          id: "smartcut-checkout",
          class: De(["smartcut-content", { fullscreen: ge.value }]),
          style: St(X.value)
        }, [
          nn.value && !t.readonly ? (O(), R("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: f[1] || (f[1] = (u) => So())
          }, [
            je(g, { icon: ["fass", "expand"] }),
            bt(" " + ve(A(Se)("general.full_screen")), 1)
          ])) : se("", !0),
          Ae.value ? (O(), R("a", {
            key: 1,
            id: "credit",
            style: we,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, ve(A(Zl)(A(Se)("general.powered_by"))), 1)) : se("", !0),
          Z("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: St({ "grid-template-columns": Bi.value })
          }, [
            A(r).inputShapes.value.length ? (O(), R("div", dp, [
              f[6] || (f[6] = Z("div", { class: "cell id" }, null, -1)),
              (O(!0), R(Ze, null, at(vn.value, (u) => (O(), R("div", {
                key: u.name,
                class: De(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(u.name) || u.type === "boolean" }])
              }, ve(A(Se)(u.label)), 3))), 128)),
              A(nt) === "development" && fs ? (O(), R("div", fp, " Info ")) : se("", !0),
              f[7] || (f[7] = Z("div", { class: "cell del" }, null, -1))
            ])) : se("", !0),
            (O(!0), R(Ze, null, at(Vi.value, (u, C) => (O(), R("div", {
              key: u.autoId,
              class: "row inputs"
            }, [
              Z("div", pp, [
                Z("div", {
                  class: "id",
                  style: St({
                    background: E.colors.partA,
                    color: E.colors.text
                  })
                }, ve(Di.value + C + 1), 5)
              ]),
              (O(!0), R(Ze, null, at(vn.value, (L) => (O(), R("div", {
                key: L.name,
                class: "cell"
              }, [
                u ? (O(), Ie(cp, {
                  key: 0,
                  field: L,
                  item: u,
                  index: C,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": E.numberFormat,
                  "orientation-model": E.orientationModel,
                  "stock-grain": A(m)(u),
                  "material-options": xe.value?.map((z) => ({ label: z.name, value: z.name })) || [],
                  "thickness-options": L.name === "t" ? wo(u) : [],
                  "width-options": L.name === "w" && te.stockType === "linear" ? ko(u) : [],
                  "banding-enabled": et.banding === C ? u : null,
                  "full-stock-disabled": u.fullStock && !["material", "t", "q", "fullStock"].includes(L.name),
                  "material-extras-disabled": vo(u),
                  onUpdate: (z) => Ge(u, L.propertyPath || L.fieldMap || L.name, z),
                  onValidation: f[2] || (f[2] = (z, ke) => Et()),
                  onBlur: () => Mt(u, L.name),
                  onOpenBanding: (z) => ui("banding", u),
                  onOpenMachining: (z) => ai(u),
                  onOpenFinish: (z) => ui("finish", u),
                  onOpenPlaning: (z) => ui("planing", u),
                  onOpenImageUpload: (z) => Fo(C)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : se("", !0)
              ]))), 128)),
              A(nt) === "development" && fs ? (O(), R("div", hp, [
                Z("button", {
                  class: De(["c-btn", { selected: et.info === C }]),
                  type: "button",
                  onClick: (L) => ui("info", u)
                }, " i ", 10, gp)
              ])) : se("", !0),
              Z("div", mp, [
                Z("button", {
                  disabled: A(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${A(Se)("actions.remove")} ${A(ns)(A(Se)("woodwork.part"))}`,
                  onClick: (L) => A(F)(u.autoId)
                }, [
                  je(g, { icon: ["fass", "trash"] })
                ], 8, vp)
              ]),
              je(A(i), {
                item: u,
                "num-columns": an.value
              }, null, 8, ["item", "num-columns"]),
              et.banding === C && Gi(u, "banding").length > 0 && qi.value ? (O(), Ie(rs, {
                key: "banding-" + (u?.material || ""),
                shape: u,
                "shape-index": C,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Te.keys,
                "all-options": Ye(u, "banding").options,
                pricing: Ye(u, "banding").pricing,
                "display-names": Ye(u, "banding").displayNames,
                labels: Ye(u, "banding").labels,
                locations: Ye(u, "banding").locations || it.locations,
                "location-groups": it.groups,
                "user-friendly-field-map": A(Qi),
                "part-columns": an.value,
                "format-price": t.formatPrice,
                "find-extras-price": $e.findExtrasPrice,
                "get-price": _i,
                "orientation-model": E.orientationModel,
                "stock-grain": A(m)(u),
                "get-available-pricing-options": jn,
                "allow-custom-names": !1,
                debug: b.value
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : se("", !0),
              et.finish === C && Gi(u, "finish").length > 0 && qi.value ? (O(), Ie(rs, {
                key: "finish-" + (u?.material || ""),
                shape: u,
                "shape-index": C,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": He.keys,
                "all-options": Ye(u, "finish").options,
                pricing: Ye(u, "finish").pricing,
                "display-names": Ye(u, "finish").displayNames,
                labels: Ye(u, "finish").labels,
                locations: Ye(u, "finish").locations || qt.locations,
                "location-groups": qt.groups,
                "user-friendly-field-map": A(Qi),
                "part-columns": an.value,
                "format-price": t.formatPrice,
                "find-extras-price": $e.findExtrasPrice,
                "get-price": _i,
                "orientation-model": E.orientationModel,
                "stock-grain": A(m)(u),
                "get-available-pricing-options": jn,
                "allow-custom-names": !1,
                debug: b.value
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : se("", !0),
              et.planing === C && Gi(u, "planing").length > 0 && qi.value ? (O(), Ie(rs, {
                key: "planing-" + (u?.material || ""),
                shape: u,
                "shape-index": C,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": We.keys,
                "all-options": Ye(u, "planing").options,
                pricing: Ye(u, "planing").pricing,
                "display-names": Ye(u, "planing").displayNames,
                labels: Ye(u, "planing").labels,
                locations: Ye(u, "planing").locations || _t.locations,
                "location-groups": _t.groups,
                "user-friendly-field-map": A(Qi),
                "part-columns": an.value,
                "format-price": t.formatPrice,
                "find-extras-price": $e.findExtrasPrice,
                "get-price": _i,
                "orientation-model": E.orientationModel,
                "stock-grain": A(m)(u),
                "get-available-pricing-options": jn,
                "allow-custom-names": !1,
                debug: b.value
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : se("", !0),
              et.info === C ? (O(), R("div", {
                key: 4,
                id: "shape-info",
                style: St({ "grid-column-end": "span " + an.value })
              }, [
                Z("div", null, ve(u?.banding), 1),
                Z("div", null, ve(ei.value?.banding?.options || "No options"), 1)
              ], 4)) : se("", !0),
              It.value === C ? (O(), Ie(A(l), {
                key: 5,
                prefix: (C + 1).toString(),
                "unique-id": u.autoId,
                "shape-id": u.autoId,
                style: St({ "grid-column-end": "span " + an.value }),
                images: ot.value,
                onUpdate: Oo,
                onRemove: Lo
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : se("", !0)
            ]))), 128))
          ], 4),
          Z("div", bp, [
            t.readonly ? se("", !0) : (O(), R("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${A(Se)("actions.add")} ${A(ns)(A(Se)("woodwork.part"))}`,
              onClick: f[3] || (f[3] = (u) => Ui())
            }, [
              je(g, { icon: ["fass", "plus-large"] }),
              bt(" " + ve(`${A(Se)("actions.add")} ${A(ns)(A(Se)("woodwork.part"))}`), 1)
            ], 8, yp)),
            Z("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": A(Se)("actions.calculate"),
              disabled: !A(r).inputStock.value?.length || Je.value,
              onClick: f[4] || (f[4] = (u) => Eo())
            }, [
              je(g, { icon: ["fass", "calculator"] }),
              bt(ve(A(Se)("actions.calculate")), 1)
            ], 8, wp),
            t.readonly ? se("", !0) : (O(), R("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": A(Se)("actions.clear"),
              onClick: f[5] || (f[5] = (u) => Wi())
            }, [
              je(g, { icon: ["fass", "trash"] })
            ], 8, kp)),
            Z("div", Sp, ve(A(h)) + ve(E?.maxParts ? "/" + E.maxParts : ""), 1)
          ]),
          bn.value && zt.value > 1 ? (O(), R("div", xp, [
            Z("div", Pp, [
              Z("button", {
                type: "button",
                class: "c-btn",
                disabled: P.value === 1,
                onClick: si
              }, [
                je(g, { icon: ["fass", "chevrons-left"] })
              ], 8, Cp),
              Z("button", {
                type: "button",
                class: "c-btn",
                disabled: P.value === 1,
                onClick: ji
              }, [
                je(g, { icon: ["fass", "chevron-left"] })
              ], 8, Ip),
              Z("span", Ap, ve(P.value) + " / " + ve(zt.value), 1),
              Z("button", {
                type: "button",
                class: "c-btn",
                disabled: P.value >= zt.value,
                onClick: Ri
              }, [
                je(g, { icon: ["fass", "chevron-right"] })
              ], 8, Op),
              Z("button", {
                type: "button",
                class: "c-btn",
                disabled: P.value >= zt.value,
                onClick: d
              }, [
                je(g, { icon: ["fass", "chevrons-right"] })
              ], 8, Lp)
            ])
          ])) : se("", !0),
          Tt.value && !t.readonly ? (O(), Ie(A(a), {
            key: 3,
            ref: "import",
            "number-format": E.numberFormat,
            "custom-fields": Nn.value,
            "banding-options": Te.options,
            "banding-labels": Te.labels,
            "finish-options": He.options,
            "finish-labels": He.labels,
            onImport: No
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : se("", !0),
          Fe.value ? (O(), R("div", Fp, [
            dt.value ? (O(), R("div", Tp, ve(dt.value), 1)) : se("", !0),
            Z("pre", $p, ve(yt.value), 1)
          ])) : se("", !0),
          (E.enable?.diagram ? Je.value && !A(oe).complete : Je.value || A(oe).complete) ? (O(), R("div", Ep, [
            je(ma, {
              size: 50,
              number: A(oe).shapeCount,
              complete: A(oe).complete,
              "show-number": E.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : se("", !0),
          Ei(Z("div", Mp, [
            A(ne)?.saw?.stockType !== "roll" ? (O(), R("div", Np, ve(A(ne)?.stack?.number ? A(ne).stack.number : 1), 1)) : se("", !0),
            je(Xc, {
              "element-id": "diagram",
              "number-format": E.numberFormat,
              "decimal-places": E.decimalPlaces,
              colors: E.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [Ps, E.enable?.diagram && A(oe).complete]
          ]),
          ii.value && E.enable?.diagram && A(ee).length > 1 && A(oe).complete ? (O(), Ie(Cd, {
            key: 6,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: A(ae)
          }, null, 8, ["onShow"])) : se("", !0),
          !ii.value && E.enable?.diagram && A(ee).length > 1 && A(oe).complete ? (O(), Ie(Md, {
            key: 7,
            ref: "stockNavigation",
            "active-stock-id": A(J),
            "stock-list": A(ee),
            "primary-color": E.colors.stock?.replace("#", ""),
            "secondary-color": E.colors.partA?.replace("#", ""),
            onShowStock: A(ae)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : se("", !0)
        ], 6)) : se("", !0),
        A(nt) === "development" && fs ? (O(), R("div", Bp, [
          je(A(o), {
            data: [A(r)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          f[8] || (f[8] = Z("div", null, "Result data", -1)),
          je(A(o), {
            data: [ut.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : se("", !0)
      ]);
    };
  }
}), Yp = /* @__PURE__ */ Mn(Vp, [["__scopeId", "data-v-649251bf"]]);
export {
  rs as E,
  Is as F,
  Yu as O,
  Xc as _,
  Md as a,
  Hn as b,
  ja as c,
  Yp as d,
  Jp as e,
  Wf as h,
  Zp as m,
  Ra as u
};

import { r as z, w as Re, c as T, Y as rt, Z as st, n as gt, d as Qe, a as K, b as B, F as at, k as qt, l as xt, p as tt, f as re, y as aa, t as Oe, L as oa, D as kn, o as fn, H as mo, _ as vo, J as wt, $ as bo, S as gi, j as $e, u as L, e as ue, a0 as ci, s as yo, x as wo, C as xo, a1 as tn, q as ui, N as Ji, g as Ge, m as Wn, O as So, a2 as Ot, U as ko, A as ai, V as Co, h as Fn } from "./vendor-vue-XczpOw2V.js";
import { bd as Be, be as Qt, aT as Po, ba as la, bf as Yt, bg as Gn, bh as ra, bi as ca, bj as ua, bk as di, bl as un, bm as bs, bn as Ao, bo as Io, bp as Oo, bq as da, br as fa, bs as Ti, bt as Lo, bu as Zn, bv as fi, bw as Fo, b9 as Kn, I as Jn, x as Cn, b8 as Rt, w as Pn, i as dn, H as Tt, aX as To, bx as ys, by as Eo, b2 as Tn, bz as En, b5 as $n, F as Mn, bA as ws, bB as xs, bC as $o, m as Ss, A as Mo, _ as No, aR as Bo, bD as Vo, aQ as pa, bE as Do, a8 as Go, bF as Ro, bG as jo, aJ as qo, bH as Uo, aK as Wo, aM as zo, aO as _o, aN as Ho, aL as wn, c as me, v as ze, bI as Zo, bJ as ha, f as Dt, bK as Ko, bL as ks, t as Jo, e as Zt, y as Yo, r as Ei, z as Xo, q as Qo, bM as el, bN as Yi, b4 as tl, bO as nl, bP as il, bQ as sl, bR as al, bS as ga, bT as ol, bU as ll, bV as $i, bW as rl, bX as ma, bY as va, bZ as cl, b_ as ul, b$ as dl, c0 as fl, c1 as pl, c2 as hl, c3 as gl, c4 as Xi, c5 as ml, c6 as vl, c7 as bl, c8 as yl, c9 as wl, ca as nn, cb as Mi, cc as xl, a as Xt, cd as Cs, ce as Ni, cf as Sl, cg as Ps, o as As, b as Is, u as Bi, s as Vi } from "./result.zod-Jpm7fspL.js";
import { G as Rn, Z as Yn, o as Z, j as ie, q as W, i as S, n as Os, H as Et, I as kl, m as ce, k as $t, u as He, l as Ie, J as Ls, K as Xn, L as Cl, M as Pl, N as Fs, O as Al, Q as Qn, S as Di, T as Gi, U as Ri, V as Il, h as Me, W as Ol } from "./vendor-BwVe8GCL.js";
import { s as ji, u as Ll, l as qi, b as Fl } from "./i18n-DT7wACvc.js";
import "./vendor-i18next-2OYl82kj.js";
import { f as Tl, d as El, l as Ft, e as Qi, c as es, i as Ze, r as Lt, g as oi, h as $l } from "./vendor-d3-DNaL3zcO.js";
import { a as Ml } from "./vendor-lodash-B8VQpKjD.js";
import { o as Nl, f as Bl, s as Vl, a as Dl } from "./vendor-floating-ui-DZfk4g77.js";
import { t as ye } from "./i18n-CYUWq18B.js";
import { _ as mi } from "./Launch-MjRX7mQF.js";
import { b as jn } from "./environment-BeBZzWz6.js";
function ba(t, e = "cc") {
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
const ya = {
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
function Gl(t) {
  return t !== 0 && t !== 1 && t !== 2 ? !1 : ya[t].sidesLMatchShapeL;
}
function Rl(t) {
  return t !== 0 && t !== 1 && t !== 2 ? [] : ya[t].affectedExtraTypes;
}
function li(t = 0, e, n = null, i = null, s = null) {
  if (!Be(n) && !Qt || i === "stock") return !1;
  let a, o;
  if (Be(n) ? a = n.orientationLock : Qt(n) ? a = "l" : i === "shape" && (a = s), t === 0 || Qt(n))
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
function jl(t, e, n = null, i = null, s = null) {
  if (!Be(n) || i === "shape") return !1;
  let a;
  return t === 0 || t === 1 || t === 2 ? li(t, e, n, i, s) ? "cc" : !1 : a;
}
function ql(t, e = []) {
  if (!t?.length) return [];
  const n = t.map((i) => i && typeof i.getType == "function" ? i : Po(i)).filter((i) => i instanceof la);
  return e.length && Ul(n, e), n;
}
function Ul(t = [], e = []) {
  t.length && e.length && t.forEach((n) => {
    n.shapeIds = n.shapeIds.filter((i) => e.find((s) => s.autoId === i));
  });
}
let sn = null;
if (jn())
  try {
    sn = require("~/helpers/applicationSettings").applicationSettings;
  } catch (t) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", t);
  }
function Nn(t, e, n = {}) {
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
  if (!jn()) {
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
    return Re(o, (l) => {
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
  if (jn()) {
    if (!sn)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), z(e);
    const o = z((() => {
      try {
        const l = sn.getString(t);
        if (l)
          return i.read(l);
      } catch (l) {
        console.error("[useCrossPlatformStorage] Failed to load", t, "from ApplicationSettings:", l);
      }
      return e;
    })());
    return Re(o, (l) => {
      try {
        const r = i.write(l);
        sn.setString(t, r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to save", t, "to ApplicationSettings:", r);
      }
    }, { deep: !0 }), o;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", t, "- using in-memory fallback"), z(e);
}
function Ts(t) {
  try {
    return jn() ? sn ? sn.getString(t) : null : typeof window < "u" && window.localStorage ? localStorage.getItem(t) : null;
  } catch (e) {
    return console.error(`[getStorageValue] Error getting storage value for key ${t}:`, e), null;
  }
}
function Es(t) {
  try {
    jn() ? sn && sn.remove(t) : typeof window < "u" && window.localStorage && localStorage.removeItem(t);
  } catch (e) {
    console.error(`[removeStorageValue] Error removing storage value for key ${t}:`, e);
  }
}
const wa = "cle-extras-config", Wl = () => {
  try {
    const t = localStorage.getItem(wa);
    return t ? JSON.parse(t) : {};
  } catch {
    return {};
  }
}, zl = (t) => {
  try {
    localStorage.setItem(wa, JSON.stringify(t));
  } catch {
  }
}, qn = z(Wl()), ts = (t, e) => {
  qn.value[t] = e, zl(qn.value);
}, en = (t) => qn.value[t] || null, _l = () => qn.value;
let $s = !1;
const Hl = () => {
  $s || (Fo({
    getExtrasConfig: en,
    getAllExtrasConfigs: _l,
    setExtrasConfig: ts
  }), $s = !0);
}, Zl = (t, e) => {
  const n = en(t);
  if (!n || !n.options || n.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const i = n.options[0], s = Array.isArray(i) && typeof i[0] == "string" ? i : [];
  if (s.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = (r) => n.options.length > 1 ? r.includes("|") ? n.pricing && Object.keys(n.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(n.pricing, r) ? !0 : Object.keys(n.pricing).some((y) => y.startsWith(r + "|") || y === r) : r.split("|").every((v, y) => {
    if (y >= n.options.length) return !1;
    const p = n.options[y];
    return Array.isArray(p) && typeof p[0] == "string" && p.includes(v);
  }) : n.options.some((h) => Array.isArray(h) && typeof h[0] == "string" && h.includes(r)) : s.includes(r), o = /* @__PURE__ */ new Set();
  let l = 0;
  return e.forEach((r) => {
    if (!r.extras?.[t]) return;
    const h = r.extras[t].sides || {};
    Object.entries(h).forEach(([y, p]) => {
      typeof p == "string" && p && !a(p) && (o.add(p), h[y] = "", l++);
    });
    const v = r.extras[t].faces || {};
    Object.entries(v).forEach(([y, p]) => {
      typeof p == "string" && p && !a(p) && (o.add(p), v[y] = "", l++);
    });
  }), {
    cleanedCount: l,
    invalidOptions: Array.from(o)
  };
}, Kl = (t) => {
  Hl();
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
    locations: v = z([]),
    locationGroups: y = z([]),
    orientationModel: p = 0,
    getAvailablePricingOptions: O,
    getPrice: A,
    findExtrasPrice: j,
    formatPrice: D
  } = t, G = () => {
    const u = en(n), b = u?.options || i, V = u?.labels || s;
    Yt(e.value, n, b, V, l.value);
  };
  G(), Re(
    () => e.value?.extras?.[n],
    (u) => {
      if (u) {
        const b = u?.sides || {}, V = u?.options?.sides || {};
        let N = !1;
        for (const [R, se] of Object.entries(b))
          if (typeof se == "string") {
            if (se.includes("|") && !V[R]) {
              N = !0;
              break;
            } else if (se !== "" && !V[R]) {
              N = !0;
              break;
            }
          }
        N && G();
      }
    },
    { immediate: !1 }
  );
  const q = T(() => qn.value[n] || null), U = T(() => {
    const b = q.value?.options || i;
    if (b.length > 1)
      return "multiple";
    const N = (b[0] || []).filter((ke) => typeof ke == "string"), R = (l.value || []).filter((ke) => typeof ke == "string"), ve = Array.from(/* @__PURE__ */ new Set([...N, ...R])).length;
    return ve === 0 ? "boolean" : ve === 1 ? "single" : "multiple";
  }), Ce = T(() => fi(n)), Y = T(() => v.value && v.value.length > 0 ? v.value.filter((u) => u !== "all" && u !== "faces" && u !== "sides") : Ce.value), le = T(() => Y.value.filter((u) => Gn(u) === "face")), xe = T(() => Y.value.filter((u) => Gn(u) === "side")), C = T(() => ca(n)), M = T(() => ra(n)), P = T(() => ua(n)), H = () => q.value?.options && q.value.options.length > 1, ee = (u, b, V) => {
    const { singleOption: N = Ae(), operation: R } = V;
    switch (b) {
      case "boolean":
        return !!u;
      case "single":
        return N ? R === "process" || R === "set" ? u && N ? N : "" : u === N ? N : "" : !!u;
      case "multiple":
        return u || "";
      default:
        return u;
    }
  }, ne = (u, b, V) => ee(b, V, { operation: "process" }), ae = (u, b, V, N, R, se) => {
    switch (se) {
      case "boolean":
        Zn(u, b, V, N, !!R);
        break;
      case "single": {
        const ve = Ae();
        Zn(u, b, V, N, R ? ve : "");
        break;
      }
      case "multiple":
        Zn(u, b, V, N, R || "");
        break;
    }
  }, Fe = (u, b, V = {}) => {
    const N = V.singleOption || Ae();
    return V.allowCustomNames, ee(u, b, {
      operation: "get",
      singleOption: N
    });
  }, J = (u, b, V, N) => {
    switch (N) {
      case "boolean":
        return !!u;
      case "single": {
        const R = Ae();
        if (R) {
          const se = b.map((te) => un(e.value, n, te, V)), ve = se.every((te) => te === R || te === !0), ke = se.every((te) => !te || te === "");
          return ve ? R : ke ? "" : null;
        }
        return !!u;
      }
      case "multiple":
        return typeof u == "string" ? u : u || "";
      default:
        return u;
    }
  }, de = (u, b, V, N = !1) => {
    if (N)
      u.forEach((R) => Se(R, b, V));
    else {
      const R = s[b] || "", se = ne(R, V, U.value);
      u.forEach((ve) => {
        ae(e.value, n, ve, R, se, U.value);
      });
    }
  }, E = (u, b) => {
    if (H()) {
      const V = s[b] || "", N = u.map((ke) => {
        const te = un(e.value, n, ke, V);
        return te === !0 ? Te(b)[0] || "" : String(te || "");
      }), R = N[0] || "";
      return N.every((ke) => ke === R) ? R : null;
    } else {
      const V = s[b] || "";
      if (U.value === "single") {
        const R = Ae();
        if (R) {
          const se = u.map((te) => un(e.value, n, te, V)), ve = se.every((te) => te === R || te === !0), ke = se.every((te) => !te || te === "");
          return ve ? R : ke ? "" : null;
        }
      }
      const N = bs(e.value, n, u, V, U.value);
      return U.value === "multiple" && N === !1 && u.every((se) => {
        const ve = un(e.value, n, se, V, U.value);
        return ve === "" || ve === !1 || ve === null || ve === void 0;
      }) ? "" : N;
    }
  }, _ = (u) => {
    const { location: b, locationType: V = "single", optionIndex: N, stateValue: R, isAggregate: se = !1 } = u, ve = Te(N), ke = ve.length > 1 ? "select" : "checkbox", te = se ? Le(N, b && We(b) ? b : V) : Le(N, b), lt = U.value === "multiple" && te.length === 1 && r && N > 0;
    if (lt && te[0]) {
      if (se) {
        let bt = [];
        V === "all" ? bt = Y.value : V === "faces" ? bt = le.value : V === "sides" ? bt = xe.value : b && We(b) && (bt = X(b)), bt.forEach((On) => {
          const yn = je(On, N);
          (!yn || yn !== te[0]) && Se(On, N, te[0]);
        });
      } else if (b) {
        const bt = je(b, N);
        (!bt || bt !== te[0]) && Se(b, N, te[0]);
      }
    }
    const Ee = U.value === "multiple" && (te.length === 0 || lt), qe = R !== void 0 ? R : b ? je(b, N) : null, Ue = ke === "select" ? ot(b || V, N) : void 0, At = ke === "checkbox" && ve.length === 1 ? ve[0] : void 0;
    let vt, In;
    return ke === "checkbox" && ve.length === 1 && (vt = ve[0], In = ""), {
      inputType: ke,
      // Alias for backward compatibility
      type: ke,
      value: qe,
      options: Ue,
      disabled: Ee,
      label: At,
      indeterminate: qe === null && ke === "checkbox",
      trueValue: vt,
      falseValue: In
    };
  }, fe = (u, b, V) => _({
    locationType: u,
    optionIndex: b,
    stateValue: V,
    isAggregate: !0
  }), Se = (u, b, V) => {
    const N = s[b] || "";
    if (H()) {
      const R = Pe(u, b);
      let se;
      if (R === "checkbox") {
        const ke = Te(b)[0];
        se = V ? ke : "";
      } else
        se = V || "";
      Zn(e.value, n, u, N, se);
    } else
      ae(e.value, n, u, N, V, U.value);
  }, je = (u, b) => {
    const V = s[b] || "";
    if (H()) {
      const N = un(e.value, n, u, V);
      if (Pe(u, b) === "checkbox") {
        const ve = Te(b)[0];
        return N === !0 || N === ve ? ve : "";
      } else
        return N || "";
    } else {
      const N = un(e.value, n, u, V, U.value);
      return Fe(N, U.value);
    }
  }, Xe = (u, b) => {
    de(Y.value, u, b, H());
  }, Je = (u) => {
    if (H()) {
      const b = s[u] || "", V = Y.value.map((se) => {
        const ve = un(e.value, n, se, b);
        return ve === !0 ? Te(u)[0] || "" : String(ve || "");
      }), N = V[0] || "";
      return V.every((se) => se === N) ? N : null;
    } else {
      const b = s[u] || "", V = bs(e.value, n, Y.value, b, U.value);
      return J(V, Y.value, b, U.value);
    }
  }, zt = () => {
    Ti(e.value, n, Y.value, U.value), st(e);
  }, ut = (u) => u === "faces" ? {
    locations: le.value,
    isSupported: C.value
  } : {
    locations: xe.value,
    isSupported: M.value
  }, Mt = (u, b, V) => {
    const { locations: N, isSupported: R } = ut(u);
    R && de(N, b, V, H());
  }, St = (u, b) => {
    const { locations: V, isSupported: N } = ut(u);
    return N ? E(V, b) : null;
  }, et = (u) => {
    const { locations: b, isSupported: V } = ut(u);
    V && (Ti(e.value, n, b, U.value), st(e));
  }, kt = (u, b) => {
    const { isSupported: V } = ut(u);
    if (!V) return { type: "checkbox", value: !1 };
    const N = St(u, b);
    return fe(u, b, N);
  }, nt = (u, b) => {
    Mt("faces", u, b);
  }, Ct = (u, b) => {
    Mt("sides", u, b);
  }, dt = (u) => St("faces", u), _e = (u) => St("sides", u), an = () => {
    et("faces");
  }, _t = () => {
    et("sides");
  }, Pt = (u) => y.value.find((b) => b.id === u), We = (u) => ["all", "faces", "sides"].includes(u) ? !1 : !u.includes("."), X = (u) => {
    const b = Pt(u);
    return b ? b.locations.filter((V) => Y.value.includes(V)) : [];
  }, x = (u, b, V) => {
    const N = X(u);
    N.length !== 0 && (N.forEach((R) => Se(R, b, V)), st(e));
  }, w = (u, b) => {
    const V = X(u);
    if (V.length === 0) return null;
    const N = E(V, b);
    return !H() && (N === null || N === !1 || N === "") ? "" : N;
  }, m = (u) => {
    const b = X(u);
    b.length !== 0 && (Ti(e.value, n, b, U.value), st(e));
  }, I = (u, b) => {
    const V = w(u, b), N = Pt(u);
    return _({
      location: u,
      optionIndex: b,
      stateValue: V,
      isAggregate: !0,
      customLabel: N?.label
    });
  }, $ = (u) => {
    Lo(e.value, n, u, U.value), st(e);
  }, he = (u) => u === "all" ? Y.value.some((b) => !!je(b, 0)) : u === "faces" && C.value ? le.value.some((b) => !!je(b, 0)) : u === "sides" && M.value ? xe.value.some((b) => !!je(b, 0)) : We(u) ? X(u).some((V) => !!je(V, 0)) : Y.value.includes(u) ? !!je(u, 0) : !1, ge = (u) => {
    if (u === "all") return ye("general.all");
    if (u === "faces") return `${ye("general.all")} ${ye("machining.face_other")}`;
    if (u === "sides") return `${ye("general.all")} ${ye("woodwork.edge_other")}`;
    if (We(u)) {
      const N = Pt(u);
      if (N) return N.label;
    }
    if (u.startsWith("face.")) {
      const R = `faces.${u.replace("face.", "")}`;
      return ye(R);
    }
    if (u.startsWith("side.")) {
      let N = u.replace("side.", "");
      (p === 1 || p === 2) && e.value && e.value.w > e.value.l && (N = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[N] || N);
      const R = `sides.${N}`;
      return ye(R);
    }
    const b = `fields.${u}`, V = ye(b);
    return V !== b ? V : a?.[u] ? a[u] : u;
  }, Pe = (u, b) => U.value === "boolean" ? "checkbox" : Te(b).length > 1 ? "select" : "checkbox", Nt = (u, b) => _({
    location: u,
    optionIndex: b,
    isAggregate: !1
  }), Ye = (u) => {
    const b = Je(u);
    return fe("all", u, b);
  }, be = (u) => kt("faces", u), Ne = (u) => kt("sides", u), pn = (u, b) => u === "all" ? Ye(b) : u === "faces" ? be(b) : u === "sides" ? Ne(b) : We(u) ? I(u, b) : Nt(u, b), Le = (u, b) => {
    const R = (en(n)?.options || i)[u];
    if (!R || R[0] === !0)
      return [];
    const se = b && typeof b == "string" && (b.startsWith("face.") || b.startsWith("side.")), ve = b && typeof b == "string" && We(b), ke = !se && (b === "all" || b === "faces" || b === "sides" || ve);
    if (Array.isArray(R) && R.length === 1 && typeof R[0] == "string" && !(r && O && (se || ke) && u > 0))
      return R;
    if (r && O && se) {
      const Ee = [];
      if (u > 0)
        for (let qe = 0; qe < u; qe++) {
          const Ue = je(b, qe);
          if (typeof Ue == "string" && Ue)
            Ee.push(Ue);
          else if (typeof Ue == "boolean")
            Ee.push(Ue);
          else {
            const At = en(n), vt = di(e.value, n, b);
            return vt && typeof vt == "object" && !Array.isArray(vt) && Object.keys(vt).length > 1 && At?.options[u] ? At.options[u] : [];
          }
        }
      return O(h, Ee, u);
    }
    if (r && O && ke) {
      const Ee = [];
      if (u > 0)
        for (let qe = 0; qe < u; qe++) {
          let Ue;
          if (b === "all" ? Ue = Je(qe) : b === "faces" ? Ue = dt(qe) : b === "sides" ? Ue = _e(qe) : ve && typeof b == "string" && (Ue = w(b, qe)), typeof Ue == "string" && Ue)
            Ee.push(Ue);
          else if (typeof Ue == "boolean")
            Ee.push(Ue);
          else
            return [];
        }
      return O(h, Ee, u);
    }
    const te = R, lt = o ? (l.value || []).filter((Ee) => typeof Ee == "string") : [];
    return [.../* @__PURE__ */ new Set([...te, ...lt])];
  }, ot = (u, b) => {
    const V = en(n), N = V?.options[b] || [], R = o && l.value ? l.value.filter((Ee) => typeof Ee == "string") : [], se = [.../* @__PURE__ */ new Set([...N, ...R])], ve = Le(b, u), ke = new Set(ve), te = V?.displayNames;
    return se.map((Ee) => ({
      value: Ee,
      label: te?.[Ee] || Ee,
      disabled: !ke.has(Ee)
    }));
  }, Ae = () => {
    const u = Le(0);
    return u.length === 1 ? u[0] : void 0;
  }, De = (u) => {
    const b = Le(u);
    return b.length === 1 ? b[0] : void 0;
  }, Te = (u) => {
    const b = en(n);
    let V = [];
    if (b?.options && b.options[u] && Array.isArray(b.options[u])) {
      const R = b.options[u];
      Array.isArray(R) && R.every((se) => typeof se == "string") && (V = R);
    }
    const N = o && l.value ? l.value.filter((R) => typeof R == "string") : [];
    return [.../* @__PURE__ */ new Set([...V, ...N])];
  }, zn = (u, b = 0) => {
    if (u === "all" || u === "faces" || u === "sides")
      return "";
    if (We(u)) {
      const N = Pt(u);
      return N?.price !== void 0 && w(u, b) ? D ? D(N.price) : N.price.toString() : "";
    }
    if (!r || !A)
      return "";
    if (!Y.value.includes(u))
      return "N/A";
    const V = A(e.value, n, u, j);
    return V ? D ? D(V) : V.toString() : "N/A";
  }, Bt = (u) => !r || !A ? !1 : A(e.value, n, u, j), ft = T(() => Y.value.length > 1), pt = T(() => Ce.value.length > 1), on = () => {
    if (v.value && v.value.length > 0) {
      const N = [];
      return y.value && y.value.length > 0 && y.value.forEach((R) => N.push(R.id)), N.push(...v.value), N;
    }
    const u = [];
    y.value && y.value.length > 0 && y.value.forEach((N) => u.push(N.id)), ft.value && u.push("all"), pt.value && (da(n).length > 0 && u.push("faces"), fa(n).length > 0 && u.push("sides"));
    const b = /* @__PURE__ */ new Set();
    y.value && y.value.length > 0 && y.value.forEach((N) => {
      N.hideIndividualLocations && N.locations.forEach((R) => b.add(R));
    });
    const V = Ce.value.filter((N) => !b.has(N));
    return u.push(...V), u;
  }, hn = () => U.value === "multiple", bi = () => {
    const u = 1 + i.length, b = U.value === "multiple", V = r, N = u + (b ? 1 : 0) + (V ? 1 : 0);
    return {
      columns: N,
      style: `repeat(${N}, max-content)`
    };
  }, gn = (u) => u === "all" ? "all" : u === "faces" ? "faces" : u === "sides" ? "sides" : "individual", mn = (u) => Gn(u), vn = (u) => {
    if (u === "all")
      return ft.value;
    if (We(u))
      return Pt(u) ? X(u).length > 0 : !1;
    if (v.value && v.value.length > 0)
      return v.value.includes(u);
    const b = gn(u);
    return b === "all" ? ft.value : b === "faces" || b === "sides" ? b === "faces" && C.value && le.value.length > 0 || b === "sides" && M.value && xe.value.length > 0 ? pt.value : !1 : Ce.value.includes(u);
  }, bn = (u) => {
    Oo(u, n, l);
  }, Ht = (u) => {
    Io([e.value], n, u, s);
  }, yi = (u) => {
    Ao([e.value], n, u);
  }, ln = (u, b, V) => {
    if (u === "all")
      Xe(b, V);
    else if (u === "faces")
      nt(b, V);
    else if (u === "sides")
      Ct(b, V);
    else if (We(u)) {
      let R = V;
      if (!H() && typeof V == "boolean") {
        const se = Te(b);
        se.length === 1 && (R = V ? se[0] : "");
      }
      if (!H() && R) {
        const se = X(u), ve = new Set(se);
        y.value && (y.value.forEach((ke) => {
          ke.id !== u && X(ke.id).filter((Ee) => !ve.has(Ee)).forEach((Ee) => {
            Se(Ee, b, "");
          });
        }), st(e));
      }
      x(u, b, R);
    } else
      Se(u, b, V), H() || st(e);
    const N = s.length;
    for (let R = b + 1; R < N; R++) {
      let se;
      if (u === "all" ? se = Je(R) : u === "faces" ? se = dt(R) : u === "sides" ? se = _e(R) : We(u) ? se = w(u, R) : se = je(u, R), !se)
        continue;
      const ve = Le(R, u);
      let ke = !1;
      if (typeof se == "string" ? ke = ve.includes(se) : typeof se == "boolean" && se === !0 && (ke = ve.length > 0), !ke) {
        const te = Pe(u, R) === "checkbox" ? !1 : "";
        u === "all" ? Xe(R, te) : u === "faces" ? nt(R, te) : u === "sides" ? Ct(R, te) : We(u) ? x(u, R, te) : Se(u, R, te);
      }
    }
  }, Vt = (u, b = !0) => b && !confirm(`Delete ${n} for ${ge(u)}?`) ? !1 : (u === "all" ? zt() : u === "faces" ? an() : u === "sides" ? _t() : We(u) ? m(u) : $(u), !0), wi = () => {
    const u = e.value[n], b = e.value[`${n}Options`];
    return !(!u || typeof u != "object" || !b || typeof b != "object" || C.value && (!("faces" in u) || !("faces" in b)) || M.value && (!("sides" in u) || !("sides" in b)));
  }, xi = () => {
    const u = [], b = e.value[n], V = e.value[`${n}Options`];
    return !b || typeof b != "object" ? u.push(`Missing or invalid ${n} property in shape`) : (C.value && !("faces" in b) && u.push(`Missing faces property in ${n}`), M.value && !("sides" in b) && u.push(`Missing sides property in ${n}`)), !V || typeof V != "object" ? u.push(`Missing or invalid ${n}Options property in shape`) : (C.value && !("faces" in V) && u.push(`Missing faces property in ${n}Options`), M.value && !("sides" in V) && u.push(`Missing sides property in ${n}Options`)), u;
  }, rn = (u) => {
    const b = [];
    if (!u || !Object.keys(u).length)
      return { valid: !0, errors: b };
    const V = Object.keys(u), N = Math.max(...V.map((R) => R.split("|").length));
    if (N <= 1)
      return { valid: !0, errors: b };
    for (const R of Y.value) {
      let se;
      if (H()) {
        const te = di(e.value, n, R);
        te && typeof te == "object" && !Array.isArray(te) ? se = s.map((Ee) => {
          const qe = te[Ee];
          if (qe === !0) {
            const Ue = s.indexOf(Ee);
            return Te(Ue)[0] || "";
          }
          return String(qe || "");
        }).join("|") : se = "";
      } else {
        const te = je(R, 0);
        se = typeof te == "string" ? te : "";
      }
      if (!se || se === "")
        continue;
      const ve = se.includes("|") ? se.split("|") : [se], ke = ve.filter((te) => te.trim() !== "").length;
      if (ke > 0 && ke < N) {
        const te = ve.join("|"), lt = V.some((qe) => qe.startsWith(te + "|")), Ee = V.includes(te);
        if (lt && !Ee) {
          const qe = N - ke, Ue = ve.filter((vt) => vt.trim() !== "").join(", "), At = ge(R);
          b.push(`${n} selection incomplete for ${At}. Selected: "${Ue}" but ${qe} more level${qe > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: b.length === 0, errors: b };
  }, Si = (u) => rn(u).errors, ki = T(() => on().map((u) => ({
    location: u,
    label: ge(u),
    isAggregate: ["all", "faces", "sides"].includes(u) || We(u)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: U,
    // Raw computed ref (not readonly wrapped)
    allLocations: rt(Y),
    faceLocations: rt(le),
    sideLocations: rt(xe),
    shouldShowAll: ft,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: rt(pt),
    renderLocations: rt(ki),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: rt(C),
    supportsSides: rt(M),
    supportsBoth: rt(P),
    // Core operations
    setValue: Se,
    getValue: je,
    setAll: Xe,
    getAll: Je,
    getAllState: Je,
    // Alias for backward compatibility
    deleteSingle: $,
    deleteAll: zt,
    canDelete: he,
    // Group-specific operations
    setAllFaces: nt,
    setAllSides: Ct,
    getAllFaces: dt,
    getAllSides: _e,
    deleteAllFaces: an,
    deleteAllSides: _t,
    // UI helpers
    getLocationLabel: ge,
    getInputType: Pe,
    getInputConfig: Nt,
    getAllInputConfig: Ye,
    getAllFacesInputConfig: be,
    getAllSidesInputConfig: Ne,
    getInputConfigForLocation: pn,
    getSelectOptions: ot,
    getSingleOptionLabel: De,
    // Pricing
    getPriceDisplay: zn,
    getCalculatedPrice: Bt,
    // Layout & rendering
    getRenderLocations: on,
    shouldShowDeleteButton: hn,
    getGridConfig: bi,
    getLocationGroup: gn,
    getLocationScope: mn,
    isLocationVisible: vn,
    // Options management
    getAvailableOptions: Le,
    getSingleAvailableOption: Ae,
    // Initialization & migration
    initialize: G,
    initializeExtra: G,
    // Alias for backward compatibility
    initializeCustomNames: bn,
    migrateToSingle: Ht,
    migrateToBoolean: yi,
    // Event handlers
    handleInputChange: ln,
    handleDelete: Vt,
    // Validation
    validateShape: wi,
    getValidationErrors: xi,
    validateIncompleteSelections: rn,
    getIncompleteSelectionErrors: Si,
    // Debug helpers (development only)
    getDebugInfo: (u, b) => ({
      mode: U.value,
      location: u,
      optionIndex: b,
      value: Y.value.includes(u) ? je(u, b) : "N/A",
      inputType: Pe(u, b),
      canDelete: he(u),
      allState: Je(b),
      availableOptions: Le(b),
      locationGroup: gn(u),
      config: q.value,
      supportsFaces: C.value,
      supportsSides: M.value,
      supportsBoth: P.value,
      ...C.value && {
        allFacesState: dt(b)
      },
      ...M.value && {
        allSidesState: _e(b)
      },
      ...Y.value.includes(u) && {
        locationScope: mn(u)
      }
    })
  };
}, Jl = (t) => {
  const {
    customNames: e,
    usedNames: n,
    allowCustomNames: i,
    getSelectOptions: s,
    onCustomNameAdded: a,
    onCustomNameDeleted: o
  } = t, l = z(""), r = T(() => i && l.value?.trim()), h = T(() => !i || !e.value || e.value.length === 0 || e.value.length === 1 && e.value[0] === !0 ? !0 : e.value.filter((A) => typeof A == "string").every((A) => n.value.includes(A))), v = T(() => {
    const O = [];
    if (i && e.value && e.value.length > 0) {
      if (e.value.length === 1 && e.value[0] === !0)
        return O;
      const j = [...e.value.filter((D) => typeof D == "string")].sort();
      O.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), j.forEach((D) => {
        (n.value?.includes(D) ?? !1) || O.push({
          id: `delete-${D}`,
          label: `Delete "${D}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return O;
  }), y = () => {
    const O = l.value?.trim();
    if (!O) return;
    if (s("", 0).map((j) => j.value).includes(O)) {
      l.value = "";
      return;
    }
    a(O), l.value = "";
  }, p = (O) => {
    const A = O.item || O;
    if (A.id?.startsWith("delete-")) {
      const j = A.id.replace("delete-", "");
      if (n.value?.includes(j)) {
        console.warn(`Cannot delete ${t.extraType} type "${j}" - it is currently in use`);
        return;
      }
      o(j);
    }
  };
  return {
    newCustomName: l,
    canAddCustomName: rt(r),
    isActionMenuDisabled: rt(h),
    customNameActions: v,
    handleAddCustomName: y,
    handleCustomNameAction: p
  };
}, Yl = (t) => {
  const {
    extraType: e,
    allOptions: n,
    labels: i,
    shapeIndex: s,
    enablePricing: a,
    mode: o,
    shouldShowAll: l,
    locations: r,
    locationGroups: h = z([]),
    shape: v = z(null),
    orientationModel: y = 0,
    getInputType: p,
    getInputConfig: O,
    getAllInputConfig: A,
    getInputConfigForLocation: j,
    canDelete: D,
    getLocationLabel: G,
    shouldShowDeleteButton: q
  } = t, U = T(() => {
    const M = [], P = /* @__PURE__ */ new Set();
    if (h.value && h.value.length > 0 && h.value.forEach((ee) => {
      ee.hideIndividualLocations && ee.locations.forEach((ne) => P.add(ne));
    }), h.value && h.value.length > 0 && h.value.forEach((ee) => M.push(ee.id)), l.value && M.push("all"), r.value && r.value.length > 0)
      M.push(...r.value.filter((ee) => ee !== "all" && !P.has(ee)));
    else {
      const ee = fi(e), ne = ua(e), ae = ca(e), Fe = ra(e);
      ne && ae && Fe && (da(e).length > 0 && M.push("faces"), fa(e).length > 0 && M.push("sides")), M.push(...ee.filter((de) => !P.has(de)));
    }
    let H = Array.from(new Set(M));
    if ((y === 1 || y === 2) && v.value && v.value.w > v.value.l) {
      const ee = ["side.l1", "side.l2", "side.w1", "side.w2"], ne = H.map((ae, Fe) => ({ loc: ae, i: Fe })).filter((ae) => ee.includes(ae.loc));
      if (ne.length > 0) {
        const ae = ne[0].i, Fe = ne.filter((E) => E.loc.includes(".w")).sort((E, _) => E.loc.localeCompare(_.loc)), J = ne.filter((E) => E.loc.includes(".l")).sort((E, _) => E.loc.localeCompare(_.loc)), de = [...Fe.map((E) => E.loc), ...J.map((E) => E.loc)];
        H = H.filter((E) => !ee.includes(E)), H.splice(ae, 0, ...de);
      }
    }
    return H;
  }), Ce = T(() => {
    const M = 1 + n.length, P = o.value === "multiple", H = a;
    return `repeat(${M + (P ? 1 : 0) + (H ? 1 : 0)}, max-content)`;
  }), Y = (M, P) => `${e}-${M}-${i[P]}-${P}-${s}`, le = (M) => {
    const P = G(M);
    return `Delete ${e} for ${P}`;
  }, xe = (M) => ({
    show: q(M),
    enabled: D(M),
    ariaLabel: le(M)
  }), C = (M, P) => p(M, P);
  return {
    renderLocations: rt(U),
    gridStyle: rt(Ce),
    getInputId: Y,
    getDeleteAriaLabel: le,
    getInputConfigForLocation: j,
    getDeleteConfig: xe,
    getInputTypeForLocation: C,
    // Re-export the passed functions for consistency
    getInputType: p,
    getInputConfig: O,
    getAllInputConfig: A,
    canDelete: D,
    shouldShowDeleteButton: q,
    getLocationLabel: G
  };
};
function xa(t) {
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
function Xl(t) {
  return t.map((e) => {
    const n = e.path.length > 0 ? e.path.join(".") : "root", i = xa(e), s = Eo(e.message, i);
    return `[${n}] ${s}`;
  });
}
function Bn(t, e) {
  const n = t.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    errors: n.success ? void 0 : n.error.issues
  };
}
function Ql(t = {}) {
  try {
    let e = function(x) {
      if (!x || typeof x != "object") return x;
      const w = { ...x };
      if (delete w.issues, delete w.warnings, w.trim && typeof w.trim == "object") {
        const m = w.trim;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (w.trim = {
          l1: m.y1 ?? m.l1 ?? 0,
          l2: m.y2 ?? m.l2 ?? 0,
          w1: m.x1 ?? m.w1 ?? 0,
          w2: m.x2 ?? m.w2 ?? 0
        });
      }
      if (w.extras?.banding?.sides && typeof w.extras.banding.sides == "object") {
        const m = w.extras.banding.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (w.extras.banding.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (w.extras?.finish?.sides && typeof w.extras.finish.sides == "object") {
        const m = w.extras.finish.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (w.extras.finish.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (w.extras?.planing?.sides && typeof w.extras.planing.sides == "object") {
        const m = w.extras.planing.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (w.extras.planing.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (w.efficiencyOptions?.primaryCompression) {
        const m = w.efficiencyOptions.primaryCompression;
        m === "x" ? w.efficiencyOptions = {
          ...w.efficiencyOptions,
          primaryCompression: "l"
        } : m === "y" && (w.efficiencyOptions = {
          ...w.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const m in w)
        w[m] === null && delete w[m];
      return w;
    }, n = function(x, w) {
      if (!Array.isArray(x))
        return [];
      const m = [];
      for (let I = 0; I < x.length; I++) {
        const $ = x[I], he = e($);
        try {
          const ge = {
            ...he,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          $.autoId && (ge.autoId = $.autoId), delete ge.issues, delete ge.warnings;
          const Pe = new Kn(ge, w);
          m.push(Pe);
        } catch (ge) {
          console.error(`Failed to create InputShape at index ${I}:`, ge);
        }
      }
      return m;
    }, i = function(x, w) {
      if (!Array.isArray(x)) return [];
      const m = [];
      for (let I = 0; I < x.length; I++) {
        const $ = x[I], he = e($);
        try {
          const ge = {
            ...he,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          $.autoId && (ge.autoId = $.autoId);
          const Pe = new Jn(ge, w);
          m.push(Pe);
        } catch (ge) {
          console.error(`Failed to create InputStock at index ${I}:`, ge);
        }
      }
      return m;
    }, s = function(x) {
      const w = e(x), m = Bn(Cn, w);
      if (m.success && m.data) {
        const I = {
          ...m.data,
          issues: [],
          warnings: []
        };
        return x?.autoId && (I.autoId = x.autoId), new Rt(I);
      } else
        return console.error("Failed to parse input saw:", m.errors), new Rt({});
    }, a = function(x, w) {
      return Array.isArray(x) ? w && w.length ? ql(x, w) : x.map((m) => new la(m)).filter(Boolean) : [];
    }, o = function(x = {}) {
      try {
        const I = { ...Rn(
          (he) => {
            if (typeof he != "object" || he === null) return he;
            const ge = { ...he };
            for (const Pe in ge)
              ge[Pe] === null && delete ge[Pe];
            return ge;
          },
          Pn
        ).parse(x), isNew: !0 }, $ = new Kn(I, ee);
        return $.createId(ne.value.length), ne.value.push($), $;
      } catch (w) {
        return w instanceof Yn && (console.error("Shape validation failed:", w.issues), q("part", "Invalid shape data", w.issues)), null;
      }
    }, l = function(x = {}) {
      try {
        const m = { ...dn.parse(x), isNew: !0 }, I = new Jn(m, ee);
        return I.createId(ae.value.length), ae.value.push(I), I;
      } catch (w) {
        return w instanceof Yn && (console.error("Stock validation failed:", w.issues), q("stock", "Invalid stock data", w.issues)), null;
      }
    }, r = function(x) {
      try {
        const w = x.toData(), m = Pn.parse(w);
        return new Kn(m, ee);
      } catch (w) {
        return w instanceof Yn && (console.error("Shape clone validation failed:", w.issues), q("part", "Invalid shape data during cloning", w.issues)), null;
      }
    }, h = function(x) {
      try {
        const w = x.toData(), m = dn.parse(w);
        return new Jn(m, ee);
      } catch (w) {
        return w instanceof Yn && (console.error("Stock clone validation failed:", w.issues), q("stock", "Invalid stock data during cloning", w.issues)), null;
      }
    }, v = function(x, w) {
      const m = ne.value.find((he) => he.autoId === x);
      if (!m) return !1;
      const I = { ...m.toData(), ...w }, $ = Bn(Pn, I);
      if ($.success && $.data) {
        if (m.update($.data), !m.isNew) {
          const he = Object.keys(w);
          m.validate({ fields: he });
        }
        return !0;
      } else {
        const he = $.errors ? Xl($.errors) : [];
        console.error("Shape update validation failed:", he);
        const ge = $.errors?.[0];
        if (ge) {
          const Pe = xa(ge);
          new Tt({
            category: ["part"],
            message: ge.message,
            // This is the translation key from Zod error map
            params: Pe,
            issues: E.value
          });
        } else
          q("part", "Invalid shape update");
        return !1;
      }
    }, y = function(x, w) {
      const m = ne.value.findIndex(($) => $.autoId === x);
      if (m === -1) return !1;
      const I = ne.value[m];
      return I.validate({ fields: [w] }), I.issues.length === 0;
    }, p = function(x, w) {
      const m = ae.value.find((he) => he.autoId === x);
      if (!m) return !1;
      const I = { ...m.toData(), ...w }, $ = Bn(dn, I);
      return $.success && $.data ? (m.update($.data), m.isNew || G(), !0) : (console.error("Stock update validation failed:", $.errors), q("stock", "Invalid stock update", $.errors), !1);
    }, O = function(x, w) {
      const m = ae.value.findIndex(($) => $.autoId === x);
      if (m === -1) return !1;
      const I = ae.value[m];
      return I.validate({ fields: [w] }), st(ae), I.issues.length === 0;
    }, A = function(x) {
      if (ne.value.length === 1) return !1;
      const w = ne.value.findIndex((m) => m.autoId === x);
      return w === -1 ? !1 : (ne.value.splice(w, 1), !0);
    }, j = function(x) {
      if (ae.value.length === 1) return !1;
      const w = ae.value.findIndex((m) => m.autoId === x);
      return w === -1 ? !1 : (ae.value.splice(w, 1), !0);
    }, D = function(x) {
      _.value = !0;
      const w = [];
      try {
        ne.value.forEach((m) => m.issues.length = 0);
        for (let m = 0; m < ne.value.length; m++) {
          const I = ne.value[m];
          if (I.isNew)
            continue;
          const $ = I.validate({
            inputStockList: ae.value,
            index: m,
            stockType: x?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: x
          });
          w.push(...$);
        }
        ne.value.some((m) => Number(m.q) > 0) || new Tt({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: w
        });
      } finally {
        _.value = !1;
      }
      return E.value = w, w;
    }, G = function(x) {
      _.value = !0;
      const w = [];
      try {
        ae.value.forEach((m) => m.issues.length = 0);
        for (let m = 0; m < ae.value.length; m++) {
          const $ = ae.value[m].validate({ saw: x }, m);
          w.push(...$);
        }
        ae.value.some((m) => Number(m.q) > 0 || m.autoAdd) || new Tt({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: w
        });
      } finally {
        _.value = !1;
      }
      return E.value = w, w;
    }, q = function(x, w, m) {
      new Tt({
        category: [x],
        message: w,
        issues: E.value
      }), m && console.log("Validation details:", m);
    }, U = function() {
      E.value = [], ne.value.forEach((x) => x.issues.length = 0), ae.value.forEach((x) => x.issues.length = 0);
    }, Ce = function(x = {}) {
      const w = [], m = [], I = x.inputShapesOverride ?? ne.value;
      if (!I.length)
        return { shapeList: [], issues: [] };
      for (let $ = 0; $ < I.length; $++) {
        const he = I[$];
        if (!he.q) continue;
        he.createId($), he.applyPartTrim(x.trim, x.stockType);
        const ge = he.toShape();
        w.push(ge), m.push(...ge.issues);
      }
      return { shapeList: w, issues: m };
    }, Y = function(x) {
      if (!ae.value.length)
        return { stockList: [], issues: [] };
      const w = [], m = [];
      for (let I = 0; I < ae.value.length; I++) {
        const $ = ae.value[I];
        if (!$.q && !$.autoAdd) continue;
        $.createId(I), $.saw = x;
        const he = $.toStock();
        w.push(he), m.push(...he.issues);
      }
      return { stockList: w, issues: m };
    }, le = function(x, w = ee) {
      const m = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (x.saw) {
        const I = Bn(Cn, e(x.saw));
        if (I.success && I.data) {
          const $ = { ...I.data };
          x.saw?.autoId && ($.autoId = x.saw.autoId), Fe.value = new Rt($), m.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", I.errors), m.saw.failed = !0;
      }
      if (x.shapes) {
        const I = n(x.shapes, w);
        m.shapes.success = I.length, m.shapes.failed = x.shapes.length - I.length, ne.value = I;
      }
      if (x.stock) {
        const I = i(x.stock, w);
        m.stock.success = I.length, m.stock.failed = x.stock.length - I.length, ae.value = I;
      }
      if (x.groups) {
        const I = a(x.groups);
        m.groups.success = I.length, m.groups.failed = x.groups.length - I.length, J.value = I;
      }
      return x.extrasOptions && (de.value = { ...x.extrasOptions }), m;
    }, xe = function() {
      return {
        shapes: ne.value.map((x) => x.toData()),
        stock: ae.value.map((x) => x.toData()),
        inputUserGroups: J.value.map((x) => x.toData()),
        extrasOptions: de.value
      };
    }, C = function() {
      ne.value = [], ae.value = [], J.value = [], U();
    }, M = function(x) {
      const w = { ...Fe.value.toData(), ...x }, m = Bn(Cn, w);
      return m.success && m.data ? (Fe.value.update(m.data), !0) : (console.error("InputSaw update validation failed:", m.errors), q("saw", "Invalid saw update", m.errors), !1);
    }, P = function() {
      Fe.value = new Rt({});
    }, H = function() {
      const x = Fe.value.validate();
      return E.value = [...E.value.filter((w) => w.category?.[0] !== "saw"), ...x], x;
    };
    const { numberFormat: ee = "decimal" } = t, ne = Nn("inputs/inputShapes", [], {
      serializer: {
        read: (x) => {
          if (!x) {
            const I = "GlobalStore/inputShapes", $ = Ts(I);
            if ($)
              x = $, Es(I);
            else return [];
          }
          let w;
          try {
            w = JSON.parse(x);
          } catch (I) {
            return console.error("Failed to parse input shapes JSON:", I), [];
          }
          return n(w, ee);
        },
        write: (x) => {
          const m = x.filter(($) => !$?.multiEdit).map(($) => $.toData());
          return JSON.stringify(m);
        }
      },
      listenToStorageChanges: !1
    }), ae = Nn("inputs/inputStock", [], {
      serializer: {
        read: (x) => {
          if (!x) return [];
          let w;
          try {
            w = JSON.parse(x);
          } catch (I) {
            return console.error("  Failed to parse stock JSON:", I), [];
          }
          return i(w, ee);
        },
        write: (x) => {
          const m = x.filter(($) => !$?.multiEdit).map(($) => $.toData());
          return JSON.stringify(m);
        }
      },
      listenToStorageChanges: !1
    }), Fe = Nn("inputs/inputSaw", new Rt({}), {
      serializer: {
        read: (x) => {
          if (!x) {
            const m = Ts("saw");
            if (m)
              x = m, Es("saw");
            else return new Rt({});
          }
          try {
            const w = JSON.parse(x);
            return s(w);
          } catch (w) {
            return console.error("  Failed to parse saw JSON:", w), new Rt({});
          }
        },
        write: (x) => {
          if (!x)
            return JSON.stringify({});
          const w = x.toData();
          return JSON.stringify(w);
        }
      },
      listenToStorageChanges: !1
    }), J = Nn("inputs/inputUserGroups", [], {
      serializer: {
        read: (x) => a(x ? JSON.parse(x) : []),
        write: (x) => JSON.stringify(x.map((w) => w.toData()))
      }
    }), de = Nn("inputs/extrasOptions", {
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
    }), E = z([]), _ = z(!1);
    ne.value.length === 0 && (ne.value = [new Kn({ isNew: !0 })]), ae.value.length === 0 && (ae.value = [new Jn({ isNew: !0 })]);
    const fe = T(() => ne.value.reduce((x, w) => {
      const m = Number(w?.q);
      return m && m > 0 && !w?.multiEdit ? x + m : x;
    }, 0)), Se = T(() => ae.value.reduce((x, w) => {
      const m = Number(w?.q);
      return m && m > 0 && !w?.multiEdit ? x + m : x;
    }, 0)), je = T(() => ne.value.reduce((x, w) => w?.multiEdit ? x : x + 1, 0)), Xe = T(() => ae.value.reduce((x, w) => w?.multiEdit ? x : x + 1, 0)), Je = T(() => E.value.length > 0), zt = () => [
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
    ], ut = z(null), Mt = z(null), St = () => {
      ut.value = null;
    }, et = U, kt = (x = null) => {
      const w = x?.inputShapesOverride ?? ne.value, m = D(x?.saw || void 0);
      if (w.length) {
        To(w, ae.value, x?.saw || Fe.value);
        const I = w.flatMap(($) => $.issues);
        return [...m, ...I];
      }
      return m;
    }, nt = async (x, w = "decimal") => {
      const m = x?.inputSaw, I = x?.inputShapes, $ = x?.inputStock, he = x?.inputUserGroups, ge = le({
        saw: m,
        shapes: I,
        stock: $,
        groups: he
      }, w);
      return st(ne), st(ae), await gt(), ge;
    }, Ct = (x, w = "decimal") => le({ shapes: x }, w).shapes.success > 0, dt = (x, w = "decimal") => le({ stock: x }, w).stock.success > 0, _e = (x, w, m, I, $) => {
      w[0]?.length > 0 && (de.value[x] || (de.value[x] = { options: [] }), de.value[x].options = [...w[0]]), m && I && w.length > 0 ? ts(x, {
        options: w,
        // Use all columns extracted from pricing
        labels: m,
        pricing: I,
        displayNames: $
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: m, pricingData: I, pricingOptionsLength: w.length });
    }, an = () => {
      if (!Object.values(de.value).some(
        (m) => m.options.length > 0
      )) return;
      const w = (m, I) => {
        const $ = {};
        for (const he of I)
          $[he] = [...m];
        return $;
      };
      return {
        banding: de.value.banding.options.length > 0 ? {
          options: {
            sides: w(de.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: de.value.finish.options.length > 0 ? {
          options: {
            faces: w(de.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: de.value.planing.options.length > 0 ? {
          options: {
            sides: w(de.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: w(de.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, _t = (x) => {
      if (!ae.value.length) return "n";
      const w = x.material, m = x.t, I = ae.value.filter((Pe) => Pe.material === w && Pe.t === m);
      if (!I.length)
        return "n";
      let $ = !1, he = !1, ge = !1;
      for (const Pe of I)
        Pe.grain === "l" ? ($ = !0, he = !0) : Pe.grain === "w" && ($ = !0, ge = !0);
      return $ ? he && ge ? "y" : he ? "l" : ge ? "w" : "n" : "n";
    }, Pt = (x) => {
      for (const w of ne.value)
        ys(w, x);
      for (const w of ae.value)
        ys(w, x);
    };
    let We = !1;
    return Re(ne, (x) => {
      We || !x.length || gt(() => {
        const w = ["banding", "finish", "planing"], m = [];
        w.forEach((I) => {
          const $ = /* @__PURE__ */ new Set();
          if (x.forEach((he) => {
            const ge = he.extras?.[I];
            ge && (ge.faces && Object.values(ge.faces).forEach((Pe) => {
              typeof Pe == "string" && Pe.trim() && Pe !== "Y" && $.add(Pe);
            }), ge.sides && Object.values(ge.sides).forEach((Pe) => {
              typeof Pe == "string" && Pe.trim() && Pe !== "Y" && $.add(Pe);
            }));
          }), $.size > 0) {
            const he = en(I);
            if (he) {
              const ge = he.options[0];
              if (Array.isArray(ge) && (ge.length === 0 || typeof ge[0] == "string")) {
                const Pe = new Set(ge), Nt = Array.from($).filter((Ye) => !Pe.has(Ye));
                if (Nt.length > 0) {
                  const Ye = [...ge, ...Nt];
                  ts(I, {
                    ...he,
                    options: [Ye, ...he.options.slice(1)]
                  });
                }
              }
            }
          }
        }), w.forEach((I) => {
          const $ = Zl(I, x);
          $.cleanedCount > 0 && m.push(
            `${I}: ${$.invalidOptions.join(", ")}`
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
        }, 500)), We = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: ae,
        inputShapes: ne,
        inputUserGroups: J,
        currentInputShape: ut,
        selectedSaw: Mt,
        inputSaw: Fe
      },
      // State
      inputShapes: ne,
      inputStock: ae,
      inputUserGroups: J,
      inputSaw: Fe,
      currentInputShape: ut,
      selectedSaw: Mt,
      validationIssues: E,
      isValidating: _,
      // Computed
      totalInputShapes: fe,
      totalInputStock: Se,
      totalInputShapeLines: je,
      totalInputStockLines: Xe,
      hasValidationIssues: Je,
      // Actions
      addInputShape: o,
      addInputStock: l,
      cloneInputShape: r,
      cloneInputStock: h,
      updateInputShape: v,
      updateInputStock: p,
      updateInputSaw: M,
      removeInputShape: A,
      removeInputStock: j,
      reset: St,
      resetInputSaw: P,
      clear: C,
      clearIssues: et,
      // Validation
      validateInputShapes: kt,
      validateInputShapeField: y,
      validateInputStock: G,
      validateInputStockField: O,
      validateInputSaw: H,
      clearValidationIssues: U,
      // Conversion
      createShapeList: Ce,
      createStockList: Y,
      // Import/Export/Update
      importData: le,
      exportData: xe,
      updateInputs: nt,
      importInputShapes: Ct,
      importInputStock: dt,
      // Additional functions
      getShapeGrainSummary: _t,
      updateNumberFormat: Pt,
      getSpecialShapeFields: zt,
      // Extras Options Management
      extrasOptions: de,
      setExtrasOptionsFromPricing: _e,
      getCentralizedOptions: an
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let Ui = null;
function Sa(t = { numberFormat: "decimal" }) {
  try {
    return Ui || (Ui = Ql(t)), Ui;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
class Ms {
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
    const n = e.banding, i = "_banding" in e ? e._banding : void 0, s = Be(e) ? e.bandingOptions : void 0;
    if (!n && !i && !s) return !1;
    if (n && n instanceof Tn) {
      const v = n.sides;
      if (v && typeof v == "object" && ("x1" in v || "x2" in v || "y1" in v || "y2" in v)) {
        const p = this.migrateSideNames(v);
        return n.sides = p, !0;
      }
      return !1;
    }
    const a = {}, o = {}, l = { sides: {} };
    if (n && typeof n == "object") {
      const v = this.migrateSideNames(n);
      for (const [y, p] of Object.entries(v))
        En.includes(y) && (a[y] = p);
    }
    if (i && typeof i == "object") {
      const v = this.migrateSideNames(i);
      for (const [y, p] of Object.entries(v))
        En.includes(y) && (o[y] = p);
    }
    if (s && typeof s == "object") {
      s.all && (l.sides.all = s.all);
      for (const [v, y] of Object.entries(s))
        v !== "all" && En.includes(v) && y && (l.sides[v] = y);
    }
    const r = new Tn(Object.keys(a).length > 0 ? { sides: a } : {}), h = Object.keys(o).length > 0 ? new Tn({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = r : Be(e) && (e.banding = r), h && "_banding" in e && (e._banding = h), Be(e) && s && (e.bandingOptions = l), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const n = e.finish, i = "_finish" in e ? e._finish : void 0, s = Be(e) ? e.finishOptions : void 0;
    if (!n && !i && !s || n && n instanceof $n)
      return !1;
    const a = {}, o = {}, l = { faces: {} };
    if (n && typeof n == "object")
      for (const [v, y] of Object.entries(n))
        Mn.includes(v) && (a[v] = y);
    if (i && typeof i == "object")
      for (const [v, y] of Object.entries(i))
        Mn.includes(v) && (o[v] = y);
    if (s && typeof s == "object") {
      s.all && (l.faces.all = s.all);
      for (const [v, y] of Object.entries(s))
        v !== "all" && Mn.includes(v) && y && (l.faces[v] = y);
    }
    const r = new $n(Object.keys(a).length > 0 ? { faces: a } : {}), h = Object.keys(o).length > 0 ? new $n({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = r : Be(e) && (e.finish = r), h && "_finish" in e && (e._finish = h), Be(e) && s && (e.finishOptions = l), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(e) {
    let n = !1;
    const i = "extras" in e && e.extras ? e.extras : e;
    if (i.banding) {
      const s = ws("banding");
      if (s && s.labels && s.labels.length > 1)
        for (const a of En) {
          const o = `side.${a}`, l = di(e, "banding", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const h = { ...l };
            for (const v of s.labels)
              if (h[v] === !0) {
                const p = s.labels.indexOf(v);
                if (p !== -1 && s.options[p] && Array.isArray(s.options[p])) {
                  const O = s.options[p];
                  O.length === 1 && (h[v] = O[0], r = !0);
                }
              }
            r && (xs(e, "banding", o, h), n = !0);
          }
        }
    }
    if (i.finish) {
      const s = ws("finish");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Mn) {
          const o = `face.${a}`, l = di(e, "finish", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const h = { ...l };
            for (const v of s.labels)
              if (h[v] === !0) {
                const p = s.labels.indexOf(v);
                if (p !== -1 && s.options[p] && Array.isArray(s.options[p])) {
                  const O = s.options[p];
                  O.length === 1 && (h[v] = O[0], r = !0);
                }
              }
            r && (xs(e, "finish", o, h), n = !0);
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
    if (n && typeof n == "object" && !(n instanceof Tn) && !("sides" in n) && !("faces" in n))
      return !0;
    if ("_banding" in e) {
      const s = e._banding;
      if (s && typeof s == "object" && !(s instanceof Tn) && !("sides" in s) && !("faces" in s))
        return !0;
    }
    const i = e.finish;
    if (i && typeof i == "object" && !(i instanceof $n) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_finish" in e) {
      const s = e._finish;
      if (s && typeof s == "object" && !(s instanceof $n) && !("sides" in s) && !("faces" in s))
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
          const s = Object.keys(n.sides).filter((a) => !En.includes(a));
          if (s.length > 0)
            throw new Error(`Invalid side keys in banding: ${s.join(", ")}`);
        }
      }
      const i = e.finish;
      if (i) {
        if ("sides" in i && i.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in i && i.faces) {
          const s = Object.keys(i.faces).filter((a) => !Mn.includes(a));
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
    return "_banding" in e && e._banding && (n._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (n._finish = JSON.parse(JSON.stringify(e._finish))), Be(e) && (e.bandingOptions && (n.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (n.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), n;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, n) {
    "extras" in e && e.extras ? (n.banding && (e.extras.banding = n.banding), n.finish && (e.extras.finish = n.finish)) : Be(e) && (n.banding && (e.banding = n.banding), n.finish && (e.finish = n.finish)), n._banding && "_banding" in e && (e._banding = n._banding), n._finish && "_finish" in e && (e._finish = n._finish), Be(e) && (n.bandingOptions && (e.bandingOptions = n.bandingOptions), n.finishOptions && (e.finishOptions = n.finishOptions));
  }
}
const er = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, tr = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function ns(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function nr(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function pi(t = !1) {
  return {
    a: t,
    b: t
  };
}
function ir(t = !1) {
  return {
    sides: ns(t),
    faces: pi(t)
  };
}
function sr(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function ar(t) {
  const e = {};
  for (const [n, i] of Object.entries(er))
    n in t && (e[i] = t[n]);
  return e;
}
function or(t) {
  const e = {};
  for (const [n, i] of Object.entries(tr))
    n in t && (e[i] = t[n]);
  return e;
}
function ct(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function jt(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, n = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && n && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const s = ar(t), a = {};
    return "l1" in s && (a.l1 = ct(s.l1)), "l2" in s && (a.l2 = ct(s.l2)), "w1" in s && (a.w1 = ct(s.w1)), "w2" in s && (a.w2 = ct(s.w2)), a;
  }
  const i = {};
  return "l1" in t && (i.l1 = ct(t.l1)), "l2" in t && (i.l2 = ct(t.l2)), "w1" in t && (i.w1 = ct(t.w1)), "w2" in t && (i.w2 = ct(t.w2)), Object.keys(i).length > 0 ? i : t;
}
function lr(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function xn(t) {
  return !t || !Array.isArray(t) ? t : t.map(lr);
}
function rr(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [n, i] of Object.entries(t.banding))
      i === !0 || i === !1 ? e[n] = i : typeof i == "number" ? e[n] = ct(i) : typeof i == "string" && i.length > 0 && (e[n] = i);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [n, i] of Object.entries(t.bandingType))
      if (t.banding) {
        const s = e[n];
        (s === !0 || typeof s == "string" && s.length > 0) && (typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i)));
      } else
        typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i));
  return Object.keys(e).length > 0 ? e : void 0;
}
function is(t) {
  return t && or(t);
}
function cr(t) {
  t?.type && delete t.type, ur.call(this, t), dr.call(this, t), fr.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => ss(e));
}
function ur(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function dr(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function fr(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function ss(t) {
  !t || typeof t != "object" || (Ms.needsMigration(t) && Ms.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function ka(t) {
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
function $f(t) {
  if (!(!t || typeof t != "object")) {
    if (cr(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = jt(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = jt(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = jt(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: jt(e.trim)
    } : e)), t.options) {
      if (ka(t.options), t.options.bandingLocations && (t.options.bandingLocations = xn(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = xn(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = xn(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const n = t.options.extrasLocationGroups[e];
          n && Array.isArray(n) && n.forEach((i) => {
            i.locations && (i.locations = xn(i.locations));
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
        n.locations && Array.isArray(n.locations) && (n.locations = xn(n.locations)), n.groups && Array.isArray(n.groups) && n.groups.forEach((i) => {
          i.locations && (i.locations = xn(i.locations));
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => ss(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && ss(t);
  }
}
function pr(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = hr(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(gr)), Array.isArray(e.parts) && (e.parts = e.parts.map(mr)), e;
}
function hr(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const n = e.efficiencyOptions.primaryCompression;
    n === "x" ? e.efficiencyOptions.primaryCompression = "l" : n === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), e.cutPreference === "flex" ? e.cutPreference = "l" : e.cutPreference === "" && (e.cutPreference = void 0), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function gr(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = jt(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function mr(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const n = rr(e);
    n && Object.keys(n).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = jt(n)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = jt(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const n = {};
      "a" in e.finish && (n.a = ct(e.finish.a)), "b" in e.finish && (n.b = ct(e.finish.b)), e.extras.finish.faces = n;
    } else
      e.extras.finish.sides = jt(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = jt(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const n = e.extras.finish.faces;
    "a" in n && (n.a = ct(n.a)), "b" in n && (n.b = ct(n.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
function mt(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(mt);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || (e[n] = mt(i));
  return e;
}
function hi(t) {
  if (!t || typeof t != "object") return null;
  if (Array.isArray(t)) return t.map(hi);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || n === "enabled" || n === "type" || (e[n] = i && typeof i == "object" ? hi(i) : i);
  return Object.keys(e).length > 0 ? e : null;
}
function Ca(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: n,
    autoId: i,
    ...s
  } = t;
  return mt(s);
}
function vr(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function br(t) {
  const e = vr(t);
  return e ? { id: e } : null;
}
function yr(t) {
  return t.rot !== void 0 ? t.rot ? 1 : 0 : t.rotated !== void 0 ? t.rotated ? 1 : 0 : t.isRotated !== void 0 ? t.isRotated ? 1 : 0 : t.w > t.l ? 1 : 0;
}
const Pa = Z({
  // Job metadata
  jobId: W().describe("Job identifier"),
  // Input configuration (preserved)
  saw: Cn.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ie(Bo).describe("Stock items"),
  parts: ie(Ss).describe("Parts with coordinates and properties"),
  cuts: ie(No).optional().describe("Cut instructions"),
  offcuts: ie(Mo).optional().describe("Remaining offcut pieces"),
  unusableParts: ie(Ss).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: $o.describe("Complete analysis and metrics")
});
Z({
  saw: Cn.describe("Saw configuration"),
  stock: ie(dn).describe("Stock items"),
  parts: ie(Pn).describe("Parts to cut"),
  groups: ie(Vo).optional().describe("User-defined part groups with XY positions"),
  webhook: S().url().optional().describe("Webhook URL for async result delivery")
});
Z({
  error: S().describe("Error message"),
  details: Os().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: Et("V3").describe("API version"),
  help: S().optional().describe("Helpful migration guidance"),
  example: Os().optional().describe("Example of correct format"),
  docs: S().url().optional().describe("Link to V3 documentation")
});
function wr(t) {
  if (!t) return null;
  const {
    ...e
  } = t;
  return mt(e);
}
function xr(t) {
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
    trim: mt(t.trim),
    cost: t.cost ?? 0,
    notes: t.notes ?? "",
    analysis: wr(t.analysis),
    stack: t.stack?.number ?? 1,
    customData: mt(t.customData)
  } : null;
}
function Sr(t) {
  if (!t) return null;
  const e = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    x: t.x,
    y: t.y,
    rot: yr(t),
    added: t.added ?? !1,
    notes: t.notes ?? "",
    stock: br(t.stock),
    trim: mt(t.trim),
    extras: hi(t.extras),
    customData: mt(t.customData)
  };
  return t.machining && (e.machining = Ca(t.machining)), e;
}
function kr(t) {
  if (!t) return null;
  const e = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    notes: t.notes ?? "",
    trim: mt(t.trim),
    extras: hi(t.extras),
    customData: mt(t.customData)
  };
  return t.machining && (e.machining = Ca(t.machining)), t.issues && Array.isArray(t.issues) && t.issues.length > 0 && (e.issues = t.issues.map((n) => ({
    message: n.message,
    type: n.type,
    category: n.category,
    field: n.field
  }))), e;
}
function Cr(t) {
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
function Pr(t) {
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
function Ar(t) {
  const e = (t.stockList || t.stock || []).map(xr), n = (t.shapeList || t.parts || []).map(Sr), i = (t.unusableShapes || []).map(kr), s = (t.cutList || t.cuts || []).map(Cr), a = (t.offcuts || []).map(Pr);
  return {
    jobId: t.jobId,
    saw: mt(t.saw),
    stock: e,
    parts: n,
    cuts: s,
    offcuts: a,
    unusableParts: i,
    metadata: mt(t.metadata)
  };
}
const Ir = { id: "mini-stock-nav" }, Or = ["onMousedown"], Lr = { class: "id" }, Fr = /* @__PURE__ */ Qe({
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
    return (a, o) => (B(), K("div", Ir, [
      (B(!0), K(at, null, qt(n.stockList, (l, r) => (B(), K("button", {
        type: "button",
        key: r,
        class: tt(["c-btn c-btn--col-4 c-btn--sm", { selected: l.autoId === n.activeStockId }]),
        style: xt({
          backgroundColor: l.autoId === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
        }),
        onMousedown: (h) => s(l.autoId)
      }, [
        re("div", Lr, Oe(r + 1), 1),
        aa(re("div", { class: "stack legibility" }, Oe(l.stack.number), 513), [
          [oa, typeof l?.stack?.number == "number" && l.stack.number > 1]
        ])
      ], 46, Or))), 128))
    ]));
  }
});
let ei = null;
function Tr() {
  const t = z(null), e = z(null), n = z(null), i = kn([]), s = kn([]), a = kn([]), o = kn([]), l = z([]), r = z(null), h = kn([]), v = z(null), y = z(null), p = z({});
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
    currentCutIndex: v,
    activeShape: y,
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
      currentCutIndex: v,
      cuttingPlans: p
    }
  };
}
function os() {
  if (ei) return ei;
  const t = Tr(), e = T(() => t.activeStockAutoId.value ? ne(t.activeStockAutoId.value) : []), n = T(() => !t.activeStockAutoId.value || !t.stockList.value?.length ? null : ee(t.activeStockAutoId.value)), i = T(() => !n.value || !t.cutList.value?.length ? [] : Fe(n.value.autoId)), s = T(() => !n.value || !t.segmentList.value?.length ? [] : ae(t.activeStockAutoId.value)), a = T(() => t.stockList.value?.length ? J(t.stockList.value) : []), o = T(() => t.shapeList.value.filter((E) => E.added)), l = T(() => t.shapeList.value?.length ? t.shapeList.value.filter((E) => !E.added) : []), r = T(() => t.shapeList.value?.length ? jo(t.shapeList.value) : []), h = T(() => t.shapeList.value?.length ? t.shapeList.value.filter((E) => !E.duplicate) : []), v = T(() => h.value.filter((E) => E.added)), y = T(() => t.stockList.value?.length ? t.stockList.value.filter((E) => E.used && !E.duplicate) : []), p = T(() => y.value.filter((E) => E.used)), O = T(() => t.cutList.value?.length ? i.value.reduce((E, _) => E + _.area, 0) : 0), A = T(() => !t.stockList.value?.length || !n.value ? 0 : n.value ? n.value.area : 0), j = T(() => !t.shapeList.value?.length || !e.value ? 0 : e.value ? e.value.reduce((E, _) => E + _.area, 0) : 0), D = T(() => !t.cutList.value?.length || !n.value ? null : n.value.cutType), G = T(() => t.stockList.value?.length ? t.stockList.value.filter((_) => _.used && !_.isStacked) : []), q = T(() => t.stockList.value?.length ? Ro(n.value, t.stockList.value) : 0), U = T(() => {
    if (!t.stockList.value?.length) return 0;
    let E = A.value ? (O.value + j.value) / A.value : null;
    return E > 1 && (E = 1), E;
  }), Ce = T(() => t.activeStockAutoId.value && t.cuttingPlans.value?.[t.activeStockAutoId.value] || null), Y = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, le = () => {
    t.saw.value = null, t.activeStockAutoId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [], t.cuttingPlans.value = {};
  }, xe = (E, _) => {
    E in this && this[E]?.sort(Go[_]);
  }, C = (E) => {
    st(E);
  }, M = () => {
    st(t.shapeList);
  }, P = () => {
    st(t.stockList);
  }, H = (E) => {
    if (!E?.shapeList?.some((_) => _.added)) {
      le();
      return;
    }
    t.metadata.value = E.metadata, t.unusableShapes.value = E.unusableShapes || [];
    try {
      E?.saw && (t.saw.value = new pa(E.saw));
      const _ = Do(E, {
        preventAutoRotation: !0
      });
      t.stockList.value = _.stockList, t.shapeList.value = _.shapeList, t.cutList.value = _.cutList, t.segmentList.value = _.segmentList, t.offcuts.value = _.offcuts, t.cuttingPlans.value = E.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((Se) => st(t[Se])), t.activeStockAutoId.value = J(t.stockList.value)?.[0]?.autoId || null;
    } catch (_) {
      console.error("Error updating from result", _);
    }
  }, ee = (E) => t.stockList.value?.length ? t.stockList.value.find((_) => _.autoId === E) : null, ne = (E) => t.shapeList.value?.length ? t.shapeList.value.filter((_) => _.added && _?.stock?.autoId === E) : [], ae = (E) => t.segmentList.value?.length ? t.segmentList.value.filter((fe) => fe?.stock?.autoId === E) : [], Fe = (E) => {
    const _ = t?.cutList?.value;
    return !_ && !_.length ? [] : _.filter((fe) => fe?.stock?.autoId === E).sort((fe, Se) => fe?.guillotineState?.order - Se?.guillotineState?.order);
  }, J = (E) => E?.length ? E.filter((_) => _.used === !0) : [], de = (E) => {
    t.activeStockAutoId.value !== E && (t.activeShape.value = null, t.activeStockAutoId.value = E);
  };
  return ei = {
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
    uniqueAddedShapes: v,
    unplacedShapeTally: r,
    uniqueStock: y,
    uniqueUsedStock: p,
    activeStock: n,
    activeCuts: i,
    activeCutsArea: O,
    activeCutType: D,
    usedStock: a,
    stackedStock: G,
    activeStockArea: A,
    activeShapeArea: j,
    activeStockStackCount: q,
    activeTotalArea: U,
    activeSegments: s,
    cuttingPlan: Ce,
    // methods
    reset: Y,
    clear: le,
    sortItems: xe,
    update: C,
    updateShapes: M,
    updateStock: P,
    updateFromResult: H,
    getStock: ee,
    getShapes: ne,
    getSegments: ae,
    getCuts: Fe,
    setActiveStockAutoId: de
  }, ei;
}
function Er(t) {
  const e = t.x, n = t.x + t.l, i = Ft().domain([e, n]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(n)]), s = t.y, a = t.y + t.w, o = Ft().domain([s, a]).range([this.scales.yPositionScale(s), this.scales.yPositionScale(a)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(Qi(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(Qi(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(es(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(es(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function $r() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(Tl(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(El(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Aa(t, e, n) {
  !n || !t?.length || t.forEach((i, s) => {
    const [a, o] = i;
    n === "x" ? Mr.call(this, a, o, e[s]) : Nr.call(this, a, o, e[s]);
  });
}
function Mr(t, e, n) {
  const i = Ft().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), s = Ia(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Qi(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, r) => r[l]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function Nr(t, e, n) {
  const i = Ft().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), s = Ia(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(es(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  Br(a), this.axes.cutMeasurementYAxes.push(a);
}
function Ia(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function Br(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, n, i) => i[n]?.getBBox()?.height + 10).attr("dx", (e, n, i) => i[n]?.getBBox()?.width / 4).attr("transform", (e, n, i) => "rotate(90) translate(" + i[n]?.getBBox()?.width / 4 + ")");
}
function Un() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Vr() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function vi() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function ls(t) {
  return t.autoId;
}
function Dr(t, e) {
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
function Wi({ parent: t, near: e, far: n, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, n, ...i].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, ls).join(
    (a) => a.append("rect").attr("class", "segment").call((o) => Ns.call(this, o)),
    (a) => a.call((o) => Ns.call(this, o)),
    (a) => a.remove()
  ), this.state.env === "development" && Gr.call(this, s), !this.settings.app && this.state.env === "development" && Rr.call(this);
}
function Ns(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, n) => e.id !== "root" && n === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Gr(t) {
  this.selections.segmentGroup.selectAll("text").data(t, ls).join(
    (e) => e.append("text").attr("class", "segment-text").call((n) => Bs.call(this, n)),
    (e) => e.call((n) => Bs.call(this, n)),
    (e) => e.remove()
  );
}
function Bs(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function Rr() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function Oa(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let n;
  if (e) {
    for (const s of this.props.segments.value)
      if (n = Dr(s, e), n) break;
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
function La(t, e = []) {
  if (!t) return e;
  if (t.offcut && e.push(t), t.children && Array.isArray(t.children))
    for (const n of t.children)
      La(n, e);
  return e;
}
function jr() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const t = [];
  for (const n of this.props.segments.value)
    La(n, t);
  if (!t.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const e = (n) => n.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(t, ls).join(
    (n) => n.append("rect").attr("class", "segment offcut").call(e),
    (n) => n.call(e),
    (n) => n.remove()
  );
}
const { currentCutIndex: qr } = os();
function Ur() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => Vs.call(this, e)),
    (t) => t.call((e) => Vs.call(this, e)),
    (t) => t.remove()
  ), Ea.call(this));
}
function Vs(t) {
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
function Fa(t, e, n) {
  return t.guillotineState.parentSegmentID === e && n && t.guillotineState.segmentCutOrder < n;
}
function Ta(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function Wr(t, e, n) {
  this.selections.cutLines.style("visibility", (i) => typeof t.guillotineState?.[n] == "number" && typeof i.guillotineState?.[n] == "number" && i.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("offcut-cut", !1), this.selections.cutLines.classed("offcut-cut", (i, s) => s === e);
}
function zr(t, e, n, i) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] || !i && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), qr.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden")), this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[n] === t.guillotineState[n]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), i || Hr.call(this, t, e);
}
function _r(t, e, n, i, s) {
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
    this.state.device === "desktop" && !t.isTrim && Aa.call(this, a, o, i);
  }
  this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (o, l) => l === e);
}
function Ea() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1).classed("offcut-cut", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), Un.call(this), vi.call(this);
}
function Hr(t, e) {
  const n = t?.guillotineState?.segmentCutOrder;
  if (n == null) return;
  this.selections.cutLines.classed("completed", (y) => Fa(y, e, n)), this.selections.cutLines.classed("inside-segment", (y) => Ta(y, e));
  const i = Oa.call(this, t);
  if (i === !1) return;
  const { parent: s, children: a } = i, { near: o } = $a(t, a);
  if (!o) return;
  let l = [], r;
  const h = this.getHalfBladeWidth(t.stock), v = t.dimension === "l" ? "y" : "x";
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
  ], r = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && r && Aa.call(this, l, r, v);
}
function Zr(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  const n = this.props.cuts.value[t];
  if (!n) return;
  if (Un.call(this), vi.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const A = this.selections.cutLines.nodes()[t].parentElement;
    if (!A) return;
    Ze(A).raise();
  }
  const i = n.guillotineState?.parentSegmentID, s = this.getHalfBladeWidth(n.stock), a = n.dimension === "l" ? "y" : "x", o = n?.stock?.trim, l = e === "ptx" ? "ptxOrder" : "order";
  if (n.isTrim && ["guillotine", "beam"].includes(n?.stock?.cutType)) {
    Wr.call(this, n, t, l), Ds.call(this, n, t, i), this.removeSegments();
    return;
  }
  if (["guillotine", "beam"].includes(n?.stock?.cutType) && i !== null && typeof i < "u" ? zr.call(this, n, i, l, e) : _r.call(this, n, t, o, a, s), Ds.call(this, n, t, i), e === "ptx") {
    this.removeSegments();
    return;
  }
  const r = Oa.call(this, n);
  if (r === !1)
    return;
  const { parent: h, children: v } = r;
  if (!n?.guillotineState?.parentSegmentID)
    return Wi.call(this, { parent: h });
  if (n.stock?.cutType === "beam" && h.phase === 0) {
    const j = this.props.segments.value.find((le) => le.stock?.autoId === n.stock?.autoId)?.children || v, D = j.find((le) => le.offcut === !0 && le.y === 0 && le.isTrimOffcut === !0), G = j.find((le) => le.offcut === !0 && le !== D && le.y + le.w >= n.stock.w - (n.stock.trim?.l2 || 0)), q = j.filter((le) => !le.offcut), U = q.find((le) => le.type === "near"), Ce = q.find((le) => le.type === "far"), Y = [D, G].filter(Boolean);
    return Wi.call(this, { parent: h, near: U, far: Ce, offcuts: Y });
  }
  const { near: y, far: p, offcuts: O } = $a(n, v);
  Wi.call(this, { parent: h, near: y, far: p, offcuts: O });
}
function $a(t, e) {
  const n = t.dimension === "l" ? "y" : "x", i = t.dimension === "l" ? "w" : "l", s = t.stock?.cutType === "beam";
  let a, o;
  if (s)
    a = e.find((r) => r.type === "near" && !r.offcut), o = e.find((r) => r.type === "far" && !r.offcut);
  else {
    const h = t[n + "1"], v = t.stock.halfBladeWidth;
    a = e.find((y) => y.type === "near" && Math.abs(y[n] + y[i] - (h - v)) < 1e-6), o = e.find((y) => y.type === "far" && Math.abs(y[n] - (h + v)) < 1e-6);
  }
  const l = e.filter((r) => r.offcut === !0 && r !== a && r !== o);
  return { near: a, far: o, offcuts: l };
}
function Ds(t, e, n) {
  this.selections.cutLines.attr("stroke-width", (i, s) => {
    const a = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let o = Math.max(1, Math.ceil(a));
    const l = t?.guillotineState?.segmentCutOrder;
    return (Fa(i, n, l) || Ta(i, n)) && (o += 1), s === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (o = 5), o;
  });
}
function Kr() {
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
function Jr(t) {
  if (this.selections.cuttingPathGroup) {
    if (t === null) {
      this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", 1);
      return;
    }
    this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", (e, n) => n <= t ? 1 : 0.15), this.selections.cuttingPathGroup.selectAll(".contour").classed("active", (e, n) => n === t);
  }
}
function Yr() {
  Ma.call(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.remove(), this.selections.cuttingPathGroup = null);
}
const Wt = /* @__PURE__ */ new WeakMap();
function Xr(t, e, n) {
  const i = [];
  let s = 0, a = e(0), o = n(0);
  const l = (r, h, v) => {
    const y = r - a, p = h - o;
    s += Math.sqrt(y * y + p * p), i.push({ sx: r, sy: h, type: v, cumDist: s }), a = r, o = h;
  };
  return i.push({ sx: a, sy: o, type: "rapid", cumDist: 0 }), t.contours.forEach((r, h) => {
    const v = r.leadIn.length > 0 ? r.leadIn[0] : r.contour[0];
    if (!v) return;
    l(e(v.x), n(v.y), "rapid");
    const y = [
      ...r.leadIn,
      ...r.contour,
      ...r.leadOut
    ];
    for (let p = 1; p < y.length; p++) {
      const O = y[p];
      l(e(O.x), n(O.y), "cutting");
    }
  }), i;
}
function Qr(t, e) {
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
function ec() {
  if (!this.props.cuttingPlan?.value || !this.selections.cuttingPathGroup) return;
  const t = this.props.cuttingPlan.value;
  if (!t.contours?.length) return;
  let e = Wt.get(this);
  if (!e || !e.waypoints.length) {
    const a = this.scales.xPositionScale, o = this.scales.yPositionScale, l = Xr(t, a, o);
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
    }, Wt.set(this, e);
  } else
    e.playing = !0, e.lastTime = null;
  this.selections.cuttingPathGroup.select(".cutting-path-dot").empty() && this.selections.cuttingPathGroup.append("circle").attr("class", "cutting-path-dot").attr("r", 4).attr("fill", "#000").attr("stroke", "#fff").attr("stroke-width", 1.5), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-cut").attr("fill", "none").attr("stroke-width", 2).attr("stroke", "#000").attr("opacity", 0.6), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-rapid").attr("fill", "none").attr("stroke-width", 1.5).attr("stroke", "#000").attr("stroke-dasharray", "2,3").attr("opacity", 0.6);
  const i = this, s = (a) => {
    if (!e.playing) return;
    e.lastTime === null && (e.lastTime = a);
    const o = (a - e.lastTime) / 1e3;
    e.lastTime = a, e.progress += e.speed * o, e.progress >= 1 && (e.progress = 1, e.playing = !1);
    const l = e.progress * e.totalDistance, r = Qr(e.waypoints, l);
    i.selections.cuttingPathGroup.select(".cutting-path-dot").attr("cx", r.sx).attr("cy", r.sy).attr("fill", "#000");
    let v = "", y = "", p = null;
    for (let O = 0; O < e.waypoints.length; O++) {
      const A = e.waypoints[O];
      if (A.cumDist > l) break;
      A.type === "cutting" ? ((!p || p.type !== "cutting") && (v += ` M ${p ? p.sx : A.sx} ${p ? p.sy : A.sy}`), v += ` L ${A.sx} ${A.sy}`) : ((!p || p.type !== "rapid") && (y += ` M ${p ? p.sx : A.sx} ${p ? p.sy : A.sy}`), y += ` L ${A.sx} ${A.sy}`), p = A;
    }
    e.progress < 1 && p && (r.type === "cutting" ? v += ` L ${r.sx} ${r.sy}` : y += ` L ${r.sx} ${r.sy}`), i.selections.cuttingPathGroup.select(".cutting-path-trail-cut").attr("d", v), i.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").attr("d", y), e.playing && (e.rafId = requestAnimationFrame(s));
  };
  e.rafId && cancelAnimationFrame(e.rafId), e.rafId = requestAnimationFrame(s);
}
function tc() {
  const t = Wt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null);
}
function Ma() {
  const t = Wt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), Wt.delete(this)), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function nc() {
  const t = Wt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null), Wt.delete(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function ic() {
  return Wt.get(this)?.playing ?? !1;
}
function sc(t) {
  const e = Wt.get(this);
  e && (e.speed = t);
}
function ac(t) {
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
  const i = qo(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let s;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let o = function(v) {
        return `${v.x1}-${v.y1}-${v.x2}-${v.y2}`;
      }, l = function(v) {
        v.attr("class", "ray").attr("x1", (y) => this.scales.xPositionScale(y.x1)).attr("x2", (y) => this.scales.xPositionScale(y.x2)).attr("y1", (y) => this.scales.yPositionScale(y.y1)).attr("y2", (y) => this.scales.yPositionScale(y.y2));
      };
      if (this.state.env !== "development") return;
      const h = Uo(this.props.shapes.value, this.props.stock.value).flatMap((v) => Object.values(v.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(h, o).join(
        (v) => v.append("line").call((y) => l.call(this, y)),
        (v) => v.call((y) => l.call(this, y)),
        (v) => v.remove()
      );
    }
    s = Wo(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new zo();
  for (const o of i.toArray()) {
    const l = _o(t, o, this.props.stock.value);
    l && a.addPoints(l.toArray());
  }
  if (s) {
    const o = s.toArray();
    for (const l of o) {
      const r = Ho(t, l, this.props.stock.value);
      r && a.addPoints(r.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const o = this.props.stock.value;
    [
      new wn(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new wn(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new wn(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.trim.l1 ?? 0
      ),
      new wn(
        o.trim.w1 ?? 0,
        o.w - t.w - (o.trim.l2 ?? 0)
      ),
      new wn(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.w - t.w - (o.trim.l2 ?? 0)
      )
    ].forEach((l) => a.add(l)), e = a.toArray();
  } else {
    const o = this.props.stock.value;
    a.add(new wn(o.trim.w1 ?? 0, o.trim.l1 ?? 0)), e = a.toArray();
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
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), oc.call(this, e, t), lc.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function oc(t, e) {
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
      s.stopPropagation(), Ze(this).classed("hover", !0), Ze(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), Ze(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function lc(t, e) {
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
      s.stopPropagation(), Ze(this).classed("hover", !0);
      const a = Ze(this).attr("data-id"), o = Ze(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), Ze(this).classed("hover", !1);
      const a = Ze(this).attr("data-id");
      Ze(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function ti(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function rc() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => ti(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Gs.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.classed("hidden", !1).text((e) => Gs.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => ti(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => Rs.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.classed("hidden", !1).text((e) => Rs.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => ti(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => js.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.classed("hidden", !1).text((e) => js.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => ti(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => qs.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, n, i) => {
      const s = i[n], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(s.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    }),
    (t) => t.classed("hidden", !1).text((e) => qs.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("transform", (e, n, i) => {
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
function Gs(t) {
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
function Rs(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function js(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : me({ v: t.l, o: this.numberConfig }).toString();
}
function qs(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : me({ v: t.w, o: this.numberConfig }).toString();
}
function cc() {
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
const uc = (t) => t.id;
function dc() {
  if (!this.props.containerWidth) return;
  Un.call(this);
  const t = this.props.shapes.value.reduce((e, n) => {
    const i = parseInt(n.parentId);
    return i > e ? i : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && pc.call(this), fc.call(this), cc.call(this);
}
function fc() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, uc).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Us.call(this, e), Ws.call(this, e), e.on("mousedown", zs.bind(this)), e;
    },
    (t) => (Us.call(this, t), Ws.call(this, t), t.on("mousedown", zs.bind(this)), t),
    (t) => t.remove()
  ), xc.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => rc.call(this)), this.selections.shapeWrappers.size() > 0;
}
function pc() {
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
  this.scales.scoreColorScale = oi([Lt(251, 224, 255), Lt(122, 0, 138)]).domain([n, i]);
}
function hc(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function gc(t, e) {
  const n = e.outline;
  if (!n || n.length < 3) return "";
  const i = e.nestingRotation || 0;
  let s;
  if (e.holes?.length) {
    let A = 1 / 0, j = 1 / 0, D = -1 / 0, G = -1 / 0;
    for (const q of n)
      q.x < A && (A = q.x), q.y < j && (j = q.y), q.x > D && (D = q.x), q.y > G && (G = q.y);
    s = [
      { x: A, y: j },
      { x: D, y: j },
      { x: D, y: G },
      { x: A, y: G },
      { x: A, y: j }
    ];
  } else
    s = n;
  const a = [s];
  if (e.holes?.length)
    for (const A of e.holes)
      A.length >= 3 && a.push(A);
  let o = 0, l = 0;
  for (const A of n)
    o += A.x, l += A.y;
  o /= n.length, l /= n.length;
  const r = Math.cos(i), h = Math.sin(i), v = a.map(
    (A) => A.map((j) => {
      if (i === 0) return { x: j.x, y: j.y };
      const D = j.x - o, G = j.y - l;
      return {
        x: r * D - h * G + o,
        y: h * D + r * G + l
      };
    })
  );
  let y = 1 / 0, p = 1 / 0;
  for (const A of v)
    for (const j of A)
      j.x < y && (y = j.x), j.y < p && (p = j.y);
  return v.map((A) => A.map((D) => ({
    x: t.scales.xPositionScale(D.x - y + (e.x || 0)),
    y: t.scales.yPositionScale(D.y - p + (e.y || 0))
  })).map(
    (D, G) => (G === 0 ? "M" : "L") + ` ${D.x} ${D.y}`
  ).join(" ") + " Z").join(" ");
}
function Us(t) {
  const e = this;
  t.selectAll(".shape").remove(), t.each(function(i) {
    const s = Ze(this);
    hc(i) ? s.insert("path", ":first-child").datum(i).attr("class", "shape").attr("d", (a) => gc(e, a)).attr("fill-rule", "evenodd").style("fill", (a) => An.call(e, a)) : s.insert("rect", ":first-child").datum(i).attr("class", "shape").attr("x", (a) => e.getRectangleCoordinate(a, "x")).attr("y", (a) => e.getRectangleCoordinate(a, "y")).attr("width", (a) => e.getWidthAttribute(a)).attr("height", (a) => e.getHeightAttribute(a)).style("fill", (a) => An.call(e, a));
  });
  const n = t.selectAll(".shape");
  this.selections.shapeRectangles ? this.selections.shapeRectangles = $l(
    this.selections.shapeRectangles.nodes().concat(n.nodes())
  ) : this.selections.shapeRectangles = n;
}
function Ws(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const n = Ze(e.target);
    n.classed("hover", !0), n.classed("selected") || n.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, n) => {
    const i = Ze(e.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", An.call(this, n));
  }, { passive: !0 });
}
function zs(t, e) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && mc.call(this, t, e), (this.settings.app || this.settings.embed) && yc.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (vi.call(this), Er.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function mc(t, e) {
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
        ], bc.call(this, e);
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
    console.table(vc(e, n));
  }
}
function vc(t, e) {
  return e.reduce((n, i) => {
    const s = Ac(t, i);
    return n[i] = Array.isArray(s) ? s.join(", ") : s, n;
  }, {});
}
function bc(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineState?.myStripParent;
  e && this.selections.shapeWrappers.filter((s) => s.id === e || s.group.addedAsGroup === e).select(".shape").classed("highlight-a", !0);
  const n = this.props.shapes.value.find((i) => i.id === e)?.guillotineState?.myStripParent;
  n && this.selections.shapeWrappers.filter((s) => s.id === n || s.group.addedAsGroup === e).select(".shape").classed("highlight-b", !0);
}
function yc(t, e) {
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
      color: An.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(n), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function An(t) {
  const e = Lt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return Lt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return Lt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const s = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${s.map((l, r) => Math.round(l + t.guillotineState.myPhase / 5 * (a[r] - l))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return Lt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return Lt(139, 171, 46);
        break;
      case "placementOrder": {
        const s = this.props.shapes.value.reduce((a, o) => {
          const l = o.placementOrder ?? 0;
          return l > a ? l : a;
        }, 0);
        if (s > 0 && typeof t.placementOrder == "number") {
          const a = [0, 115, 255], o = [255, 50, 50], l = t.placementOrder / s;
          return `rgb(${a.map((h, v) => Math.round(h + l * (o[v] - h))).join(",")})`;
        }
        break;
      }
      case "score": {
        const s = t?.bestScore?.total ? this.scales.scoreColorScale(t.bestScore.total) : null;
        if (s != null && typeof s.toString == "function")
          return s;
        if (s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number")
          return console.warn("Detected corrupted score color object from scale:", s, "for shape:", t), Lt(s.r, s.g, s.b, s.opacity ?? 1);
      }
    }
  const n = parseInt(t.parentId);
  let i;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? i = this.scales.shapeColorScale(n) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), i = null), i != null && typeof i.toString == "function" ? i : i != null && typeof i.r == "number" && typeof i.g == "number" && typeof i.b == "number" ? Lt(i.r, i.g, i.b, i.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, i), e);
}
const _s = 3;
function wc(t) {
  const e = [];
  for (const n of t) {
    const i = n.extras?.banding;
    if (n.added && i?.sides)
      for (const [s, a] of Object.entries(i.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(s)) continue;
        let o = s;
        if (n.rot) {
          const r = ba({ [s]: !0 }, "cc");
          o = Object.keys(r)[0];
        }
        const l = Sc.call(this, n, o);
        l && e.push(l);
      }
  }
  return e;
}
function Hs(t) {
  const e = _s / 2;
  return t.attr("class", "banding").attr("x1", (n) => this.scales.xPositionScale(n.l1) + ni.call(this, n.type, "x", e)).attr("x2", (n) => this.scales.xPositionScale(n.l2) + ni.call(this, n.type, "x", e)).attr("y1", (n) => this.scales.yPositionScale(n.w1) + ni.call(this, n.type, "y", e)).attr("y2", (n) => this.scales.yPositionScale(n.w2) + ni.call(this, n.type, "y", e)).attr("stroke-width", _s).attr("stroke", "white");
}
function xc(t) {
  if (!this.settings.main) return;
  const e = wc.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (n, i) => i).join(
    (n) => n.append("line").call((i) => Hs.call(this, i)),
    (n) => n.call((i) => Hs.call(this, i)),
    (n) => n.remove()
  );
}
function ni(t, e, n) {
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
function Sc(t, e) {
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
function kc(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const Zs = (t) => t.id;
function Ks(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Js(t) {
  return t.style("fill", (e) => `url(#grain-${e.grain || "n"})`).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Cc() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), $r.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Zs).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Ks.call(this, e)),
    (t) => t.call((e) => Ks.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Zs).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => Js.call(this, e)),
    (t) => t.call((e) => Js.call(this, e)),
    (t) => t.remove()
  );
}
function Pc(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function Ac(t, e) {
  return Ml(t, e);
}
class Ic {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = Ze(e.elementID), this.selections.el === null)) return;
    const n = this.selections.el.node();
    n !== null && (this.selections.htmlEl = n, this.scales = {
      xScale: Ft(),
      yScale: Ft(),
      yPositionScale: Ft(),
      xPositionScale: Ft(),
      yAxisScale: Ft(),
      measurementScale: Ft(),
      shapeColorScale: oi(),
      scoreColorScale: oi()
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
    }, i = (s, a) => Lt("#" + (Pc(s?.replace("#", "")) ? s.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(n).map(([s, a]) => [
        s,
        i(e.colors?.[s], a)
      ])
    ), this.scales.shapeColorScale = oi([
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
      this.selections.svgCanvas = Ze(e);
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
      const l = o[a], r = Ze(l);
      r.text(s.name);
      let h = r.text();
      const v = r.node();
      if (!v) return;
      let y = v.getComputedTextLength();
      const p = this.getWidthAttribute(s) - 20;
      for (; y > p && h.length > 0; )
        h = h.slice(0, -1), r.text(h.length ? h + "..." : ""), y = r.node().getComputedTextLength();
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => An.call(this, i));
    const n = Ze(e).select(".shape");
    if (n) {
      n.classed("selected", !0), n.style("fill", this.config.colors.partSelected.toString());
      const i = Ze(e).datum();
      this.callbacks.onShapeSelect(i, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    dc.call(this);
  }
  drawStock() {
    Cc.call(this);
  }
  drawCuts() {
    Ur.call(this);
  }
  drawCuttingPath() {
    Kr.call(this);
  }
  removeCuttingPath() {
    Yr.call(this);
  }
  showCuttingPathStep(e) {
    Jr.call(this, e);
  }
  animateCuttingPath() {
    ec.call(this);
  }
  pauseCuttingPathAnimation() {
    tc.call(this);
  }
  stopCuttingPathAnimation() {
    Ma.call(this);
  }
  resetCuttingPathAnimation() {
    nc.call(this);
  }
  isCuttingPathAnimating() {
    return ic.call(this);
  }
  setCuttingPathAnimationSpeed(e) {
    sc.call(this, e);
  }
  drawAllOffcuts() {
    jr.call(this);
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
    return ze(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const n = e.bladeWidth;
    return n !== void 0 && n > 0 ? n / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), Un.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Vr.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), vi.call(this);
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
    if (e.outline?.length >= 3)
      return console.log("[isTextHidden] outline check → hidden", { id: e.id, outlineLength: e.outline?.length }), !0;
    const s = i[n];
    if (!s)
      return console.log("[isTextHidden] no node → hidden", { id: e.id }), !0;
    const a = s.getBBox();
    if (a.width === 0 && a.height === 0)
      return console.log("[isTextHidden] zero bbox → visible", { id: e.id }), !1;
    const o = this.scales.measurementScale(e.l), l = this.scales.yScale(e.w), r = a.width >= o || a.height >= l - this.state.padding;
    return console.log("[isTextHidden]", {
      id: e.id,
      hidden: r,
      bboxW: a.width.toFixed(1),
      bboxH: a.height.toFixed(1),
      scaledLength: o.toFixed(1),
      scaledWidth: (l - this.state.padding).toFixed(1),
      shapeL: e.l,
      shapeW: e.w,
      cutType: e?.stock?.cutType,
      hasHiddenClass: s.classList.contains("hidden"),
      display: getComputedStyle(s).display
    }), r;
  }
  isNameHidden(e, n, i) {
    if (e.outline?.length >= 3) return !0;
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox();
    if (a.width === 0 && a.height === 0) return !1;
    const o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return a.width >= o || l < 40;
  }
  isLengthHidden(e, n, i) {
    if (e.outline?.length >= 3) return !0;
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
    if (e.outline?.length >= 3) return !0;
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
      Ze(this).classed("hover", !0);
    }).on("mouseout", function() {
      Ze(this).classed("hover", !1);
    }).on("mousedown", (e, n) => {
      console.log("Group:", {
        dimensions: {
          x: n.x,
          y: n.y,
          width: n.w,
          length: n.l
        },
        shapes: n.shapes.map((i) => ({
          id: i.id,
          parentId: i.parentId,
          addedAsGroup: i.group.addedAsGroup
        }))
      });
    });
  }
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => An.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const n = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    Un.call(this);
  }
  updateShapeVisibility() {
    kc.call(this);
  }
  drawPositions(e) {
    return ac.call(this, e);
  }
  showCut(e) {
    Zr.call(this, e);
  }
  resetCuts() {
    Ea.call(this);
  }
}
const Oc = ["id"], Lc = /* @__PURE__ */ Qe({
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
      getShapes: v,
      getSegments: y,
      getCuts: p,
      cuttingPlan: O
    } = os(), A = t, j = n, D = (X) => {
      j("part-click", X);
    }, G = (X) => {
      j("shape-colour-update", X);
    }, q = (X, x) => {
      X?.autoId && j("shape-select", X.autoId, x);
    }, U = (X) => {
      X && j("add-to-parts-bin", X);
    }, Ce = (X, x) => {
      X && j("move-shape", X, x);
    }, Y = z(0), le = z(0), xe = z(null);
    let C, M = z(!1);
    const P = wt({
      debug: "",
      stretched: !1
    }), H = () => {
      C?.state && (P.stretched = C.state.stretched);
    };
    fn(() => E());
    const ee = T(() => ({
      format: A.numberFormat,
      decimals: A.decimalPlaces
    })), ne = T(() => A.stockAutoId ? h(A.stockAutoId) : s.value), ae = T(() => A.stockAutoId ? v(A.stockAutoId) : a.value), Fe = T(() => A.main ? A.stockAutoId ? p(A.stockAutoId) : o.value : []), J = T(() => A.main ? A.stockAutoId ? y(A.stockAutoId) : l.value : []);
    mo(xe, (X) => {
      const x = X[0], { width: w, height: m } = x.contentRect;
      w > 0 && (Y.value = w), j("resize", { width: w, height: m });
    }), vo(
      Y,
      (X) => {
        C && (X <= 0 || (C.setDevice(), C.resetShapeAxes(), C.removeCuttingPath(), C.drawAll(), H(), r.value !== null && (C.toggleSegments(!0), C.showCut(r.value))));
      },
      { throttle: 100 }
    );
    let de = !1;
    Re(() => ne.value, (X) => {
      X && (Y.value <= 0 || (de = !0, C.setDevice(), C.resetCuts(), C.removeSegments(), C.resetShapeAxes(), C.removeCuttingPath(), C.drawAll(), H(), gt(() => de = !1)));
    }, { immediate: !1 }), Re(() => ae.value, (X) => {
      de || X && (Y.value <= 0 || (C.setDevice(), C.drawShapes()));
    }, { immediate: !1, deep: !0 }), A.main && (Re(() => Fe.value, () => {
      de || Y.value <= 0 || C.drawCuts();
    }, { immediate: !1, deep: !0 }), Re(r, () => {
      r.value !== null && (Y.value <= 0 || (C.toggleSegments(!0), C.showCut(r.value)));
    }, { immediate: !1 }), Re(ee, (X) => {
      C.updateNumberFormat(X.format, X.decimals, null);
    }, { immediate: !1 }));
    const E = () => {
      const X = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${A.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: A.numberFormat,
          decimalPlaces: A.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: A.colors || null,
        settings: {
          main: A.main,
          app: A.app,
          embed: A.embed,
          flipY: A.flipY,
          flipX: !1
        },
        props: {
          containerHeight: le,
          containerWidth: Y,
          stock: ne,
          shapes: ae,
          cuts: Fe,
          segments: J,
          stockList: i.stockList,
          cuttingPlan: O,
          moveMode: A.moveMode,
          app: A.app
        },
        options: {
          disableClick: A.disableClick,
          enableStretch: A.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: G,
          onShapeSelect: q,
          onAddToPartsBin: U,
          onMoveShape: Ce,
          onPartClick: D
        }
      };
      C = new Ic(X), P.debug = C.state.debug, M.value = !0;
    }, _ = (X = !1) => {
      C && C.toggleShapes(X);
    }, fe = (X = !1) => {
      C && C.toggleCuts(X);
    }, Se = (X = !1) => {
      C && C.toggleSegments(X);
    }, je = () => {
      C && C.drawShapes();
    }, Xe = () => {
      C && (C.drawStock(), H());
    }, Je = () => {
      C && (C.toggleSegments(!1), C.resetCuts());
    }, zt = (X) => {
      C && (C.toggleSegments(!0), C.showCut(X));
    }, ut = (X) => C ? C.drawPositions(X) : !1, Mt = () => {
      C && C.removePositions();
    }, St = (X) => {
      C && C.findShape(X);
    }, et = () => {
      C && C.clearSelection();
    }, kt = (X) => C ? C.requiresStretch(X) : !1, nt = (X) => {
      C?.options && (C.options.enableStretch = X, C.setAspectRatio(), C.drawAll(), H());
    }, Ct = () => C?.options?.enableStretch ?? !0;
    return Re(() => A.flipY, (X) => {
      C?.settings && (C.settings.flipY = X, C.setAspectRatio(), C.drawAll());
    }), Re(() => P.debug, (X) => {
      C?.state && (C.state.debug = X);
    }), e({
      loaded: M,
      toggleShapes: _,
      toggleCuts: fe,
      toggleSegments: Se,
      drawShapes: je,
      drawStock: Xe,
      drawPositions: ut,
      resetPositions: Mt,
      findShape: St,
      clearSelection: et,
      resetCuts: Je,
      showCut: zt,
      requiresStretch: kt,
      setEnableStretch: nt,
      getEnableStretch: Ct,
      animateCuttingPath: () => {
        C && C.animateCuttingPath();
      },
      pauseCuttingPathAnimation: () => {
        C && C.pauseCuttingPathAnimation();
      },
      stopCuttingPathAnimation: () => {
        C && C.stopCuttingPathAnimation();
      },
      resetCuttingPathAnimation: () => {
        C && C.resetCuttingPathAnimation();
      },
      isCuttingPathAnimating: () => C?.isCuttingPathAnimating() ?? !1,
      setCuttingPathAnimationSpeed: (X) => {
        C && C.setCuttingPathAnimationSpeed(X);
      },
      state: P,
      get stretched() {
        return P.stretched;
      },
      set moving(X) {
        C?.state && (C.state.moving = X);
      }
    }), (X, x) => (B(), K("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: xe,
      class: tt([{ app: t.app }, "diagram-container"])
    }, null, 10, Oc));
  }
}), yt = z(null);
let Fc = 0;
function Tc(t) {
  const e = t || `action-menu-${++Fc}-${Date.now()}`, n = T({
    get: () => yt.value === e,
    set: (v) => {
      v ? yt.value = e : yt.value === e && (yt.value = null);
    }
  }), i = () => {
    yt.value = e;
  }, s = () => {
    yt.value === e && (yt.value = null);
  }, a = () => {
    yt.value = null;
  }, o = () => {
    n.value = !n.value;
  }, l = T(() => yt.value !== null), r = T(() => yt.value), h = T(() => yt.value === e);
  return {
    // Instance-specific
    id: rt(z(e)),
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
const Ec = { class: "action-menu" }, $c = ["textContent"], Mc = {
  key: 0,
  class: "menu-divider"
}, Nc = {
  key: 1,
  class: "group-label"
}, Bc = /* @__PURE__ */ Qe({
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
    const n = t, i = e, { isOpen: s, close: a, toggle: o } = Tc(n.menuId), l = z(), r = z(), h = T(() => n.disabled), v = T(() => n.label), y = T(() => n.showLabel), p = T(() => n.icon), { floatingStyles: O } = bo(l, r, {
      placement: n.placement,
      whileElementsMounted: Dl,
      middleware: [
        Nl(n.offset),
        Bl(),
        Vl({ padding: 8 })
      ]
    }), A = (P) => {
      if (!P) return ["fas", "question"];
      if (typeof P == "function" && (P = P(n)), Array.isArray(P))
        return P;
      if (typeof P == "string") {
        const H = P.split(" ");
        if (H.length >= 2) {
          const ee = H[0], ne = H.slice(1).join("-").replace("fa-", "");
          return [ee, ne];
        }
        return ["fas", P.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, j = T(() => A(p.value)), D = (P) => typeof P.active == "function" ? P.active(n) : typeof P.active == "boolean" ? P.active : !1, G = (P) => {
      if (!P.href) return !1;
      try {
        const H = typeof P.href == "function" ? P.href(n) : P.href;
        return new URL(H, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, q = (P) => P.href ? "a" : "div", U = (P) => {
      const H = {};
      if (P.href) {
        const ee = typeof P.href == "function" ? P.href(n) : P.href;
        if (H.href = ee, G(P)) {
          const ne = typeof P.target == "function" ? P.target(n) : P.target;
          H.target = ne || "_blank", H.rel = P.rel || "noopener noreferrer";
        } else if (P.target) {
          const ne = typeof P.target == "function" ? P.target(n) : P.target;
          H.target = ne;
        }
        P.rel && (H.rel = P.rel);
      }
      return P.attrs && Object.assign(H, P.attrs), H;
    }, Ce = T(() => n.menuItems.map((P) => {
      const H = { ...P };
      return typeof P.href == "function" && (H.href = P.href(n)), typeof P.icon == "function" && (H.icon = P.icon(n)), typeof P.disabled == "function" && (H.disabled = P.disabled(n)), typeof P.label == "function" && (H.label = P.label(n)), typeof P.variant == "function" && (H.variant = P.variant(n)), typeof P.active == "function" && (H.active = P.active(n)), typeof P.target == "function" && (H.target = P.target(n)), typeof P.show == "function" && (H.show = P.show(n)), H;
    })), Y = (P) => {
      P.stopPropagation(), P.preventDefault(), !h.value && o();
    }, le = (P, H) => {
      if (H.stopPropagation(), P.disabled && !P.href) {
        H.preventDefault();
        return;
      }
      if (typeof P.action == "function" && P.action(P) === !1 && P.href) {
        H.preventDefault();
        return;
      }
      i("action", {
        id: P.id,
        item: P
      }), P.href && n.closeOnLinkClick ? a() : P.href || a();
    }, xe = (P) => {
      const H = [];
      if (P.variant) {
        const ne = typeof P.variant == "function" ? P.variant(n) : P.variant;
        H.push(`variant-${ne}`);
      }
      if ((typeof P.disabled == "function" ? P.disabled(n) : P.disabled) && !P.href && H.push("disabled"), D(P) && H.push("active"), P.href && H.push("menu-link"), G(P) && H.push("external-link"), P.class) {
        const ne = typeof P.class == "function" ? P.class(n) : P.class;
        H.push(ne);
      }
      return H.join(" ");
    }, C = (P) => {
      const H = P.target;
      s.value && l.value && r.value && !l.value.contains(H) && !r.value.contains(H) && a();
    }, M = (P) => {
      P.key === "Escape" && s.value && a();
    };
    return fn(() => {
      document.addEventListener("click", C), document.addEventListener("keydown", M);
    }), gi(() => {
      document.removeEventListener("click", C), document.removeEventListener("keydown", M);
    }), (P, H) => (B(), K("div", Ec, [
      re("div", {
        ref_key: "trigger",
        ref: l,
        onClick: Y,
        class: tt(["actions-btn", { active: L(s), disabled: h.value }])
      }, [
        p.value ? (B(), $e(L(ci), {
          key: 0,
          icon: j.value,
          class: "icon"
        }, null, 8, ["icon"])) : ue("", !0),
        y.value ? (B(), K("span", {
          key: 1,
          class: "label",
          textContent: Oe(v.value)
        }, null, 8, $c)) : ue("", !0)
      ], 2),
      (B(), $e(yo, { to: "body" }, [
        L(s) && !h.value ? (B(), K("div", {
          key: 0,
          ref_key: "floating",
          ref: r,
          style: xt(L(O)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: H[0] || (H[0] = wo(() => {
          }, ["stop"]))
        }, [
          (B(!0), K(at, null, qt(Ce.value, (ee, ne) => (B(), K(at, { key: ne }, [
            ee.type === "divider" ? (B(), K("div", Mc)) : ee.type === "group" ? (B(), K("div", Nc, Oe(ee.label), 1)) : ee.show !== !1 ? (B(), $e(xo(q(ee)), tn({
              key: 2,
              ref_for: !0
            }, U(ee), {
              onClick: (ae) => le(ee, ae),
              id: ee.id,
              class: ["menu-item", xe(ee)],
              disabled: ee.disabled && !ee.href
            }), {
              default: ui(() => [
                ee.icon || D(ee) ? (B(), $e(L(ci), {
                  key: 0,
                  icon: D(ee) ? ["fass", "check"] : A(ee.icon)
                }, null, 8, ["icon"])) : ue("", !0),
                re("span", null, Oe(ee.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ue("", !0)
          ], 64))), 128))
        ], 4)) : ue("", !0),
        L(s) && !h.value ? (B(), K("div", {
          key: 1,
          class: "backdrop",
          onClick: H[1] || (H[1] = //@ts-ignore
          (...ee) => L(a) && L(a)(...ee))
        })) : ue("", !0)
      ]))
    ]));
  }
}), Ys = (t, e, n) => {
  if (e === "unitDependent")
    if (n === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const i = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), s = ha(t);
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
function Vc({
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
      const v = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? v ? { value: null, valid: !1, message: "field_required" } : { value: l === null ? null : "", valid: !0 } : Zo(l, "decimal", v);
    }
    const h = String(l);
    switch (t.type) {
      case "string":
        return { value: h, valid: !0 };
      case "unitDependent":
        if (r)
          return Ys(h, t.type, t.numberFormat);
        try {
          const v = me({
            v: l,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof v == "number") {
            let y = v, p = !0, O;
            return typeof t.min == "number" && y < t.min && (y = t.min, p = !1, O = "below_min"), typeof t.max == "number" && y > t.max && (y = t.max, p = !1, O = "above_max"), { value: y, valid: p, message: O };
          }
          return { value: v, valid: !0 };
        } catch (v) {
          return console.warn("Error converting value:", v), {
            value: null,
            valid: !1,
            message: "invalid_number"
          };
        }
      case "integer":
      case "float":
        if (r)
          return Ys(h, t.type);
        try {
          const y = me({
            v: l,
            nf: "decimal"
          });
          if (y === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let p = y;
          if (t.type === "integer" && (p = Math.round(p)), t.allowZero === !1 && p === 0)
            return {
              value: p,
              valid: !1,
              message: "zero_not_allowed"
            };
          let O = !0, A;
          return typeof t.min == "number" && p < t.min && (p = t.min, O = !1, A = "below_min"), typeof t.max == "number" && p > t.max && (p = t.max, O = !1, A = "above_max"), { value: p, valid: O, message: A };
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
          const v = s(r.value, !1);
          a(v, !1) && (e("update:value", v.value), e("validation", v, t.id)), i.value.isMouseDown = !1;
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
              const r = l.target, h = r.value, v = r.selectionStart || 0, y = h.substring(0, v);
              if (l.key === "/" && h.includes("/")) {
                l.preventDefault();
                return;
              }
              if (l.key === " " && /\s$/.test(y)) {
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
          if (!ha(h)) {
            l.preventDefault(), e("validation", {
              value: h,
              valid: !1,
              message: `Pasted text "${r}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (h !== r) {
            l.preventDefault();
            const v = l.target;
            v.value = h;
            const y = s(h, !0);
            e("validation", y, t.id), e("input", h);
          }
        }
        e("paste", l);
      }
    },
    processValue: s
  };
}
function Dc({
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
function Gc({
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
const Rc = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], jc = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = z(!0), a = z(null), o = T(() => n.value === n.trueValue), {
      handleCheckboxChange: l,
      handleFocus: r,
      handleBlur: h
    } = Gc({
      props: n,
      emit: i,
      isMounted: s
    });
    return (v, y) => (B(), K("input", {
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
      onChange: y[0] || (y[0] = //@ts-ignore
      (...p) => L(l) && L(l)(...p)),
      onFocus: y[1] || (y[1] = //@ts-ignore
      (...p) => L(r) && L(r)(...p)),
      onBlur: y[2] || (y[2] = //@ts-ignore
      (...p) => L(h) && L(h)(...p))
    }, null, 40, Rc));
  }
}), qc = ["for"], ii = /* @__PURE__ */ Qe({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (B(), K("label", {
      for: t.id,
      class: "input-label"
    }, Oe(t.label), 9, qc));
  }
}), Uc = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Wc = ["disabled", "selected"], zc = {
  key: 0,
  value: " "
}, _c = ["hidden", "value", "disabled"], Hc = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = z(!0), a = z(null), o = T(() => n.options.map((r) => ({
      value: r.value,
      label: r.label?.toUpperCase() ?? r.value?.toString()?.toUpperCase(),
      hidden: r.hidden ?? !1,
      disabled: r.disabled ?? !1
    }))), {
      handleSelectChange: l
    } = Dc({
      props: n,
      emit: i,
      isMounted: s
    });
    return (r, h) => (B(), K("select", tn(r.$attrs, {
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
      (...v) => L(l) && L(l)(...v))
    }), [
      re("option", {
        value: "",
        disabled: n.selectFirstOptionDisabled,
        selected: !n.value
      }, Oe(n.text?.select?.toUpperCase() ?? "SELECT"), 9, Wc),
      n.multiEdit ? (B(), K("option", zc, Oe(n.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ue("", !0),
      (B(!0), K(at, null, qt(o.value, (v) => (B(), K("option", {
        key: v.value,
        hidden: v.hidden,
        value: v.value,
        disabled: v.disabled
      }, Oe(v.label), 9, _c))), 128))
    ], 16, Uc));
  }
}), Zc = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], as = /* @__PURE__ */ Qe({
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
      handleBlur: v,
      handleKeydown: y,
      handleCompositionStart: p,
      handleCompositionEnd: O,
      handlePaste: A
    } = Vc({
      props: n,
      emit: i,
      isMounted: s
    }), j = (D) => {
      const G = D.getBoundingClientRect(), q = window.getComputedStyle(D);
      return G.width > 0 && G.height > 0 && q.display !== "none" && q.visibility !== "hidden";
    };
    return fn(() => {
      (ze(n.default) && n.value === void 0 || n.value === null) && i("update:value", n.default), n.focus && a.value && j(a.value) && gt(() => a.value.focus());
    }), gi(() => {
      s.value = !1;
    }), (D, G) => (B(), K("input", tn(D.$attrs, {
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
      onInput: G[0] || (G[0] = //@ts-ignore
      (...q) => L(o) && L(o)(...q)),
      onFocus: G[1] || (G[1] = //@ts-ignore
      (...q) => L(h) && L(h)(...q)),
      onBlur: G[2] || (G[2] = //@ts-ignore
      (...q) => L(v) && L(v)(...q)),
      onKeydown: G[3] || (G[3] = //@ts-ignore
      (...q) => L(y) && L(y)(...q)),
      onCompositionstart: G[4] || (G[4] = //@ts-ignore
      (...q) => L(p) && L(p)(...q)),
      onCompositionend: G[5] || (G[5] = //@ts-ignore
      (...q) => L(O) && L(O)(...q)),
      onPaste: G[6] || (G[6] = //@ts-ignore
      (...q) => L(A) && L(A)(...q)),
      onMousedown: G[7] || (G[7] = //@ts-ignore
      (...q) => L(l) && L(l)(...q)),
      onMouseup: G[8] || (G[8] = //@ts-ignore
      (...q) => L(r) && L(r)(...q))
    }), null, 16, Zc));
  }
}), Kc = ["data-field-id"], Jc = {
  key: 0,
  class: "input-label-group"
}, Yc = {
  key: 1,
  class: "password-input-wrapper"
}, Xc = ["aria-label"], Qc = ["disabled", "selected"], eu = {
  key: 0,
  value: " "
}, tu = ["hidden", "value", "disabled"], nu = ["id", "name", "value", "disabled"], iu = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], su = {
  key: 2,
  class: "help-text"
}, Dn = /* @__PURE__ */ Qe({
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
    disableRequiredValidation: { type: Boolean, default: !1 },
    rows: { default: 3 },
    info: { default: "" }
  },
  emits: ["update:value", "validation", "blur"],
  setup(t, { emit: e }) {
    const n = e, i = t, s = z(null), a = z(null), o = z(!0), l = z(i.numberFormat), r = z(!1), h = T(() => i.custom ? "custom-" + i.id : i.id), v = T(() => `${h.value}-error`), y = T(() => i.label || i.placeholder), p = T(() => H(i.type, i.numberFormat, r.value)), O = T(() => ee(i.type, i.numberFormat)), A = T(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(i.type)), j = T(() => {
      let J = i.value;
      if (i.multiEdit && (J === 0 || J === 1)) return null;
      if (i.type !== "unitDependent" || !J) return J;
      try {
        return me({ v: J, nf: i.numberFormat });
      } catch {
        return i.numberFormat === "decimal" ? 0 : "0";
      }
    }), D = T(() => i.options.map((J) => ({
      value: J.value,
      label: J.label || J.value?.toString(),
      hidden: J.hidden || !1,
      disabled: J.disabled || !1
    }))), G = T(() => D.value.map((J) => {
      const de = J.label ? ye(J.label) : J.value?.toString();
      return {
        ...J,
        // Translate the label key first, then uppercase the translated result
        label: de?.toUpperCase() || J.value?.toString().toUpperCase()
      };
    })), q = T(() => ({
      input: !0,
      issue: i.issue || !o.value,
      warning: i.warning,
      required: i.required,
      disabled: i.disabled
    })), U = T(() => ({
      id: h.value,
      name: i.name,
      value: i.value,
      disabled: i.disabled,
      readonly: i.readonly,
      required: i.required,
      "aria-label": y.value,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.issue ? v.value : void 0
    })), Ce = T(() => ({
      ...U.value,
      type: i.type,
      inputMode: O.value,
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
    })), Y = T(() => ({
      ...U.value,
      trueValue: i.trueValue,
      falseValue: i.falseValue
    })), le = T(() => ({
      ...U.value,
      options: G.value,
      selectFirstOptionDisabled: i.selectFirstOptionDisabled,
      multiEdit: i.multiEdit,
      numberFormat: i.numberFormat,
      text: i.text,
      output: i.output
    })), xe = T(() => (i.text?.select || "SELECT").toUpperCase()), C = T(() => (i.text?.delete || "DELETE").toUpperCase()), M = (J) => {
      a.value = J;
    }, P = (J) => i.label && i.enableLabel && i.labelPosition === J, H = (J, de, E) => {
      switch (J) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return de === "fraction" ? "text" : "number";
        case "password":
          return E ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, ee = (J, de) => {
      if (J === "unitDependent")
        return de === "fraction" ? "text" : "decimal";
      switch (J) {
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
    }, ne = (J) => {
      n("update:value", J);
    }, ae = (J, de) => {
      J.valid === void 0 || J.valid === !0 ? (o.value = !0, n("validation", s.value, J)) : J.valid === !1 && J.message && (o.value = !1, console.warn(`Field validation error for field ${de} - ${J.message}`), n("validation", s.value, J));
    }, Fe = () => {
      n("blur");
    };
    return Re(() => i.numberFormat, (J, de) => {
      if (i.shouldConvertNumberFormat !== !1) {
        if (i.type === "unitDependent" && J !== de && i.value !== null && i.value !== void 0 && i.value !== "")
          try {
            const E = me({ v: i.value, nf: J });
            n("update:value", E);
          } catch {
            n("update:value", J === "decimal" ? 0 : "0");
          }
        l.value = J;
      }
    }), (J, de) => (B(), K("div", {
      ref_key: "fieldRef",
      ref: s,
      class: tt(["input-wrapper", q.value]),
      "data-field-id": h.value
    }, [
      t.type === "checkbox" ? (B(), K("div", Jc, [
        P("first") ? (B(), $e(ii, {
          key: 0,
          id: h.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ue("", !0),
        t.type === "checkbox" ? (B(), $e(jc, tn({
          key: 1,
          ref: M,
          type: "checkbox"
        }, Y.value, {
          value: t.value,
          "onUpdate:value": de[0] || (de[0] = (E) => n("update:value", E))
        }), null, 16, ["value"])) : ue("", !0),
        P("last") ? (B(), $e(ii, {
          key: 2,
          id: h.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ue("", !0)
      ])) : (B(), K(at, { key: 1 }, [
        P("first") ? (B(), $e(ii, {
          key: 0,
          id: h.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ue("", !0),
        t.type === "password" ? (B(), K("div", Yc, [
          Ge(as, tn({ ref: M }, Ce.value, {
            name: i.name,
            "input-type": p.value,
            "input-mode": O.value,
            value: j.value,
            "disable-required-validation": t.disableRequiredValidation,
            onValidation: ae,
            "onUpdate:value": ne,
            onBlur: Fe
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          re("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": r.value ? "Hide password" : "Show password",
            onClick: de[1] || (de[1] = (E) => r.value = !r.value)
          }, Oe(r.value ? "🙈" : "👁"), 9, Xc)
        ])) : A.value ? (B(), $e(as, tn({
          key: 2,
          ref: M
        }, Ce.value, {
          name: i.name,
          "input-type": p.value,
          "input-mode": O.value,
          value: j.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: ae,
          "onUpdate:value": ne,
          onBlur: Fe
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (B(), $e(Hc, tn({
          key: 3,
          ref: M
        }, le.value, {
          name: i.name,
          "onUpdate:value": de[2] || (de[2] = (E) => n("update:value", E))
        }), {
          default: ui(() => [
            re("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, Oe(xe.value), 9, Qc),
            t.multiEdit ? (B(), K("option", eu, Oe(C.value), 1)) : ue("", !0),
            (B(!0), K(at, null, qt(G.value, (E) => (B(), K("option", {
              key: E.value,
              hidden: E.hidden,
              value: E.value,
              disabled: E.disabled
            }, Oe(E.label), 9, tu))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : t.type === "color" ? (B(), K("input", {
          key: 4,
          id: h.value,
          name: i.name || h.value,
          ref: M,
          type: "color",
          value: t.value,
          disabled: t.disabled,
          onInput: de[3] || (de[3] = (E) => n("update:value", E.target.value))
        }, null, 40, nu)) : t.type === "textarea" ? (B(), K("textarea", {
          key: 5,
          id: h.value,
          name: i.name || h.value,
          ref: M,
          value: t.value,
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          required: t.required,
          rows: t.rows,
          autocomplete: t.autocomplete,
          onInput: de[4] || (de[4] = (E) => n("update:value", E.target.value))
        }, null, 40, iu)) : ue("", !0),
        P("last") ? (B(), $e(ii, {
          key: 6,
          id: h.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ue("", !0)
      ], 64)),
      t.info ? (B(), K("small", su, Oe(t.info), 1)) : ue("", !0),
      Ji(J.$slots, "default")
    ], 10, Kc));
  }
}), au = {
  key: 0,
  class: "action-bar"
}, ou = { class: "add-custom" }, lu = ["disabled"], ru = ["disabled", "title", "onClick"], cu = {
  key: 1,
  class: "price"
}, uu = /* @__PURE__ */ Qe({
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
    locations: { default: () => [] },
    locationGroups: { default: () => [] },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {},
    findExtrasPrice: {}
  },
  emits: ["update-all", "set", "custom-name-added", "custom-name-deleted"],
  setup(t, { emit: e }) {
    const n = t, i = e, {
      mode: s,
      shouldShowAll: a,
      supportsFaces: o,
      supportsSides: l,
      canDelete: r,
      getLocationLabel: h,
      getInputType: v,
      getInputConfigForLocation: y,
      getSelectOptions: p,
      getPriceDisplay: O,
      shouldShowDeleteButton: A,
      getLocationGroup: j,
      isLocationVisible: D,
      handleInputChange: G,
      handleDelete: q
    } = Kl({
      shape: Ot(n, "shape"),
      extraType: n.extraType,
      allOptions: n.allOptions,
      labels: n.labels,
      userFriendlyFieldMap: n.userFriendlyFieldMap,
      allowCustomNames: n.allowCustomNames,
      customNames: Ot(n, "customNames"),
      enablePricing: n.enablePricing,
      pricing: n.pricing,
      orientationModel: n.orientationModel,
      stockGrain: n.stockGrain,
      getAvailablePricingOptions: n.getAvailablePricingOptions,
      getPrice: n.getPrice,
      formatPrice: n.formatPrice,
      findExtrasPrice: n.findExtrasPrice,
      locations: Ot(n, "locations"),
      locationGroups: Ot(n, "locationGroups")
    }), {
      newCustomName: U,
      canAddCustomName: Ce,
      isActionMenuDisabled: Y,
      customNameActions: le,
      handleAddCustomName: xe,
      handleCustomNameAction: C
    } = Jl({
      extraType: n.extraType,
      customNames: Ot(n, "customNames"),
      usedNames: Ot(n, "usedNames"),
      allowCustomNames: n.allowCustomNames,
      getSelectOptions: p,
      onCustomNameAdded: (E) => i("custom-name-added", n.extraType, E),
      onCustomNameDeleted: (E) => i("custom-name-deleted", n.extraType, E)
    }), {
      renderLocations: M,
      gridStyle: P,
      getInputId: H,
      getDeleteConfig: ee
    } = Yl({
      extraType: n.extraType,
      allOptions: n.allOptions,
      labels: n.labels,
      shapeIndex: n.shapeIndex || 0,
      enablePricing: n.enablePricing,
      mode: s,
      shouldShowAll: a,
      getInputType: v,
      getInputConfig: (E, _) => y(E, _),
      getAllInputConfig: (E) => y("all", E),
      getInputConfigForLocation: y,
      canDelete: r,
      getLocationLabel: h,
      shouldShowDeleteButton: A,
      locations: Ot(n, "locations"),
      locationGroups: Ot(n, "locationGroups"),
      shape: Ot(n, "shape"),
      orientationModel: n.orientationModel
    }), ne = z(!1), ae = T(() => (E) => {
      const _ = j(E);
      return _ === "all" || _ === "faces" || _ === "sides";
    }), Fe = T(() => (E) => fi(n.extraType).includes(E) ? Gn(E) === "face" : !1), J = T(() => (E) => fi(n.extraType).includes(E) ? Gn(E) === "side" : !1), de = T(() => (E) => n.shape.issues?.some((_) => _.category?.includes("extras") && _.field?.some((fe) => fe[0] === "extras" && fe[1] === n.extraType && fe[2] === E)) ?? !1);
    return fn(() => {
      const _ = n.shape.extras?.[n.extraType];
      if (!_ || typeof _ != "object") {
        ne.value = !0, console.error(`Missing or invalid ${n.extraType} in shape`);
        return;
      }
      if (o.value && !("faces" in _)) {
        ne.value = !0, console.error(`Missing faces property in ${n.extraType}`);
        return;
      }
      if (l.value && !("sides" in _)) {
        ne.value = !0, console.error(`Missing sides property in ${n.extraType}`);
        return;
      }
    }), (E, _) => {
      const fe = Wn("FontAwesomeIcon");
      return ne.value ? ue("", !0) : (B(), K("div", {
        key: 0,
        class: tt(["extras group", [t.extraType]]),
        style: xt({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (B(), K("div", au, [
          re("div", ou, [
            Ge(as, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: L(U),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": _[0] || (_[0] = (Se) => U.value = Se || ""),
              onKeydown: So(L(xe), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            re("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !L(Ce),
              onClick: _[1] || (_[1] = //@ts-ignore
              (...Se) => L(xe) && L(xe)(...Se))
            }, " Add ", 8, lu)
          ]),
          Ge(Bc, {
            "menu-items": L(le),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: L(Y),
            onAction: L(C)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ue("", !0),
        re("div", {
          class: "inputs grid-layout",
          style: xt({ "grid-template-columns": L(P) })
        }, [
          (B(!0), K(at, null, qt(L(M), (Se) => (B(), K(at, { key: Se }, [
            L(D)(Se) ? (B(), K(at, { key: 0 }, [
              re("div", {
                class: tt(["label", {
                  "group-label": ae.value(Se),
                  "face-label": Fe.value(Se),
                  "side-label": J.value(Se),
                  "has-validation-issue": de.value(Se)
                }])
              }, Oe(L(h)(Se)), 3),
              (B(!0), K(at, null, qt(t.allOptions, (je, Xe) => (B(), K("div", {
                key: `${Se}-${Xe}`,
                class: "input-cell"
              }, [
                Ge(Dn, tn({
                  id: L(H)(Se, Xe),
                  "data-field": `${t.extraType}-${Se}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": Xe
                }, { ref_for: !0 }, L(y)(Se, Xe), {
                  "onUpdate:value": (Je) => L(G)(Se, Xe, Je)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              L(ee)(Se).show ? (B(), K("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !L(ee)(Se).enabled,
                title: L(ee)(Se).ariaLabel,
                onClick: (je) => L(q)(Se)
              }, [
                Ge(fe, { icon: ["fass", "trash"] })
              ], 8, ru)) : ue("", !0),
              t.enablePricing ? (B(), K("div", cu, Oe(L(O)(Se)), 1)) : ue("", !0)
            ], 64)) : ue("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), zi = /* @__PURE__ */ mi(uu, [["__scopeId", "data-v-072cd2a9"]]), du = {
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
}, fu = { id: "spinner" }, pu = ["width", "height"], hu = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function gu(t, e, n, i, s, a) {
  return B(), K("div", fu, [
    n.complete ? ue("", !0) : (B(), K("svg", {
      key: 0,
      class: "loading",
      style: xt({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      ko('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, pu)),
    n.complete ? (B(), K("svg", {
      key: 1,
      class: "complete",
      style: xt({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      re("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : ue("", !0),
    n.showNumber ? (B(), K("div", hu, Oe(n.number), 1)) : ue("", !0)
  ]);
}
const Xs = /* @__PURE__ */ mi(du, [["render", gu]]);
function mu() {
  const t = Date.now(), e = Math.random().toString(36).substring(2, 15), n = Math.random().toString(36).substring(2, 15);
  return `${t.toString(36)}-${e}-${n}`;
}
const Kt = z([]), vu = 6;
function Na() {
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
      id: mu(),
      message: ji(n),
      additional: s.length > 5 ? s.slice(0, 5).map((h) => ji(h)).join("<br>") + "<br>..." : s.slice(0, 5).map((h) => ji(h)).join("<br>"),
      type: i,
      persistent: a.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: o
    }, r = a.maxNotices ?? vu;
    if (Kt.value.length >= r) {
      const h = Kt.value.findIndex((v) => !v.persistent);
      if (h !== -1)
        Kt.value.splice(h, 1);
      else if (!l.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), l.id;
    }
    return Kt.value.push(l), !l.persistent && a.timeout !== 0 && setTimeout(() => e(l.id), a.timeout || 6e3), l.id;
  }, e = (n) => {
    Kt.value.findIndex((s) => s.id === n) !== -1 && (Kt.value = Kt.value.filter((s) => s.id !== n));
  };
  return {
    notices: Kt,
    addNotice: t,
    dismissNotice: e
  };
}
const Qs = z({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Ba() {
  return {
    progress: Qs,
    reset: () => {
      Qs.value = {
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
const bu = kl(() => Z({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: Dt(
    ce().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: Dt(
    S().optional(),
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
  t: Dt(
    He([W(), S()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: ks({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: ks({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: Dt(
    W().int().positive().default(1),
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
  name: Ko({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: Dt(
    $t(["n", "l", "w"]).default("n").optional(),
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
  banding: Dt(
    ce().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: Dt(
    Z({
      enabled: ce().default(!1),
      type: S().optional(),
      sides: W().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: Dt(
    Z({
      enabled: ce().default(!1),
      operations: ie(Ie()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: Dt(
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
function yu(t) {
  const e = bu._def.getter();
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
class wu {
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
    if (n instanceof Ls) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof Xn)
          return this.isIntegerNumber(s) ? "integer" : "number";
    }
    return n instanceof Xn ? this.isIntegerNumber(n) ? "integer" : "number" : n instanceof Cl ? "string" : n instanceof Pl ? "boolean" : n instanceof Fs || n._def?.typeName === "ZodNativeEnum" ? "enum" : n instanceof Al ? "array" : n instanceof Qn ? "object" : "string";
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
    if (n instanceof Ls) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof Xn) {
          this.extractNumberConstraints(e, s), e.type = "number";
          break;
        }
    } else n instanceof Xn && this.extractNumberConstraints(e, n);
    if (!e.options) {
      if (n instanceof Fs) {
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
    if (e instanceof Di || e instanceof Gi)
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
    return e._def?.typeName === "ZodEffects" ? this.isOptional(e._def?.schema) : e instanceof Ri ? this.isOptional(e._def?.innerType) : !1;
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
    if (e instanceof Di || e instanceof Gi)
      return this.unwrapField(e._def?.innerType);
    if (e instanceof Ri || i === "ZodDefault")
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
    if (e instanceof Ri) {
      const n = e._def?.defaultValue;
      return typeof n == "function" ? n() : n;
    }
    if (e.constructor?.name === "ZodPipe" || e._def?.type === "pipe") {
      const n = e._def?.in;
      if (n)
        return this.getDefaultValue(n);
    }
    if (e instanceof Di || e instanceof Gi) {
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
    return e instanceof Qn;
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
    if (n instanceof Qn) {
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
    if (!(i instanceof Qn))
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
const ea = new wu();
function xu(t, e = {}) {
  const n = z([]), i = z([]), s = z(/* @__PURE__ */ new Map()), a = z(/* @__PURE__ */ new Map()), o = (O) => {
    let A = ea.generateFields(t);
    e.overrides && (A = A.map((D) => {
      const G = e.overrides[D.name];
      if (G) {
        const q = { ...D, ...G };
        return G.min === void 0 && D.min !== void 0 && (q.min = D.min), G.max === void 0 && D.max !== void 0 && (q.max = D.max), q;
      }
      return D;
    })), a.value.clear();
    for (const D of A)
      a.value.set(D.name, D);
    const j = O || e.allowedFieldIds;
    if (j && j.length > 0) {
      const D = j, G = /* @__PURE__ */ new Map();
      for (const U of A)
        G.set(U.name, U);
      const q = [];
      for (const U of D) {
        const Ce = G.get(U);
        Ce && q.push(Ce);
      }
      A = q;
    }
    e.filter && (A = A.filter(e.filter)), n.value = A, s.value.clear();
    for (const D of A)
      s.value.set(D.name, D);
    e.grouped && (i.value = ea.groupFields(A));
  };
  o();
  const l = (O) => s.value.get(O), r = (O) => a.value.get(O), h = () => a.value, v = (O, A) => {
    const j = s.value.get(O);
    j && Object.assign(j, A);
  }, y = (O) => {
    const A = l(O);
    return !(!A || A.hidden);
  }, p = (O) => {
    const A = l(O);
    if (!A) return {};
    const j = {};
    return A.required && (j.required = !0), A.type === "number" && (A.min !== void 0 && (j.min = A.min), A.max !== void 0 && (j.max = A.max)), j;
  };
  return {
    fields: T(() => n.value),
    groups: T(() => i.value),
    fieldMap: T(() => s.value),
    allFieldsMap: T(() => a.value),
    getField: l,
    getFieldMetadata: r,
    getAllFieldMetadata: h,
    updateField: v,
    isFieldVisible: y,
    getFieldValidation: p,
    regenerateFields: o
  };
}
function Su(t) {
  const { stockType: e, materials: n = [], minDimension: i = 0 } = t, s = yu(e), a = {
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
  }), xu(s, {
    ...t,
    overrides: { ...a, ...t.overrides }
  });
}
const { progress: Gt, reset: ta } = Ba();
function ku(t) {
  const e = "https://api.cutlistevo.com/";
  let n;
  const i = () => {
    n = Il(e, {
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
      Gt.value.complete = !0, t.callbacks?.onResult?.(o), n.disconnect();
    }), n.on("queued", () => {
      ta(), Gt.value.queued = !0;
    }), n.on("started", () => {
      Gt.value.started = !0;
    }), n.on("progress", (o) => {
      o?.data?.message === "result" ? Gt.value.resultCount++ : (Gt.value.stockCount = o.data.stockCount, Gt.value.shapeCount = o.data.shapeCount), o?.data?.phase && (Gt.value.phase = o.data.phase), o?.data?.placed !== void 0 && (Gt.value.placed = o.data.placed, Gt.value.total = o.data.total);
    }), n.on("user", (o) => {
      t.callbacks?.onUser?.(o);
    }), n.on("error", (o) => {
      t.refs?.thinking && (t.refs.thinking.value = !1), ta(), t.callbacks?.onError?.(o);
    });
  }, s = () => n?.disconnect(), a = () => n?.connect();
  return i(), {
    socket: n,
    connect: a,
    disconnect: s
  };
}
class Jt extends Error {
  constructor(e, n) {
    super(e), this.code = n, this.name = "FormulaError";
  }
}
class rs {
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
      if (n === 0) throw new Jt("Division by zero", "DIVISION_BY_ZERO");
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
      const [h, v] = r.split(".");
      if (!e.nodes.has(r)) {
        const j = s[h];
        if (j)
          return v === "q" ? j.q : j[v];
        throw new Error(`Node not found: ${r}`);
      }
      if (o.has(r))
        throw new Error(`Circular dependency detected at ${r}`);
      const y = e.nodes.get(r);
      if (typeof y.formula == "number")
        return a.set(r, y.formula), y.formula;
      o.add(r);
      const p = e.edges.get(r) || /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
      for (const j of p)
        if (j.startsWith("input.")) {
          const D = j.split(".")[1];
          O.set(j, i[D]);
        } else
          O.set(j, l(j));
      const A = this.evaluateFormulaWithDeps(y.formula, O, i);
      return a.set(r, A), o.delete(r), A;
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
    if (!this.spec?.inputs) throw new Jt("No input specifications defined", "NO_INPUTS");
    for (const [n, i] of Object.entries(this.spec.inputs)) {
      const s = e[n];
      if (s === void 0)
        throw new Jt(`Missing required input: ${n}`, "MISSING_INPUT");
      if (s < i.min || s > i.max)
        throw new Jt(`Input ${n} value ${s} out of range [min: ${i.min}, max: ${i.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new Jt("No input specifications defined", "NO_INPUTS");
    const n = Object.keys(this.spec.inputs);
    if (e.length !== n.length)
      throw new Jt(`Expected ${n.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let i = 0;
    for (const s of e) {
      const a = n[i], o = this.spec.inputs[a];
      if (s.value === null || s.value === void 0)
        throw new Jt(`Missing value for field ${i}`, "MISSING_FIELD_VALUE");
      if (s.value < o.min || s.value > o.max)
        throw new Jt(`Field ${i} value ${s.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
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
const Ut = Z({
  min: W().min(0).optional(),
  max: W().min(0).optional()
}).optional(), Cu = Z({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: S().min(1),
  // Dimension constraints for this location
  longSide: Ut,
  shortSide: Ut,
  t: Ut,
  // Formula-based validation
  formula: S().optional(),
  // Custom message for this location
  message: S().optional()
}), _i = Z({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: Ut,
  shortSide: Ut,
  t: Ut,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: S().optional(),
  // Custom validation message (optional)
  message: S().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: ie(Cu).optional()
}), Pu = Z({
  banding: _i.optional(),
  finish: _i.optional(),
  planing: _i.optional()
}).optional();
function Au(t, e) {
  try {
    const n = new rs({}), i = n.parse(t);
    return !!n.evaluate(i, {
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0,
      t: e.t || 0
    });
  } catch (n) {
    return console.warn("Formula evaluation error:", n, "Formula:", t), !0;
  }
}
function Iu(t, e, n) {
  const i = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : "short side", s = t.constraint === "min" ? "minimum" : "maximum";
  return `${t.location ? `${t.location}: ` : ""}${e.charAt(0).toUpperCase() + e.slice(1)} requires ${i} ${s} of ${t.limit} (current: ${t.value})`;
}
function Ou(t, e, n) {
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
function Lu(t, e, n, i) {
  const { rule: s, message: a, source: o } = Ou(e, n, i), l = [], r = (v, y, p) => {
    y == null || p === void 0 || (p.min !== void 0 && y < p.min && l.push({
      valid: !1,
      dimension: v,
      value: y,
      constraint: "min",
      limit: p.min,
      location: n
    }), p.max !== void 0 && y > p.max && l.push({
      valid: !1,
      dimension: v,
      value: y,
      constraint: "max",
      limit: p.max,
      location: n
    }));
  };
  r("longSide", t.longSide, s.longSide), r("shortSide", t.shortSide, s.shortSide);
  const h = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(h) || r("t", h, s.t), s.formula && (Au(s.formula, {
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
Z({
  // Context - using z.any() for complex external types
  job: Ie().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: S().nullable().default(null).describe("Socket.io connection ID"),
  user: Ie().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: Ie().describe("Configuration object"),
  // Type: Config
  api: ce().nullable().default(null).describe("API mode flag"),
  app: ce().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: Xo("Saw").describe("Saw configuration"),
  stockList: Zt("Stock").default([]).describe("List of stock materials"),
  shapeList: Ei(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: Zt("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: Zt("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Zt("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Ei(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Ei(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Yo,
  // Results storage
  cutList: Zt("Cut").default([]).describe("List of cuts to make"),
  segmentList: Zt("Segment").default([]).describe("List of segments"),
  offcuts: Zt("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Zt("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: ce().default(!1).describe("Use inventory system"),
  successMetric: S().default(Qo.successMetric).describe("Metric for optimization success"),
  enableEvo: ce().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Me(S(), Ie()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: Ie().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: Ie().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: Z({
    placement: W().default(0),
    group: W().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: ce().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: ce().default(!1).describe("Run guillotine second pass"),
  runningEvo: ce().default(!1).describe("Currently running evolution"),
  evolutionVisData: ie(Me(S(), Ol())).default([]).describe("Evolution visualization data"),
  final: ce().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: ce().default(!1).describe("Has minimum spacing requirement")
});
const Fu = $t(["decimal", "fraction"]), Tu = Z({
  job: Ie().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: Cn.extend({ autoId: S().optional(), __entityType: S().optional() }),
  inputShapes: ie(Pn.extend({ autoId: S().optional(), __entityType: S().optional() })),
  inputStock: ie(dn.extend({ autoId: S().optional(), __entityType: S().optional() })),
  inputUserGroups: ie(Jo.extend({ autoId: S().optional(), __entityType: S().optional() })).optional(),
  // Number format for conversion
  numberFormat: Fu.optional(),
  // Algorithm configuration
  enableEvo: ce().default(!0),
  weighting: Ie().optional(),
  successMetric: S().optional(),
  useInventory: ce().default(!1),
  // Context
  socketId: S().optional(),
  user: Ie().optional(),
  // IUser type
  // Application flags
  widget: ce().optional(),
  api: ce().optional(),
  app: ce().optional(),
  domain: S().optional(),
  // Extras options (centralized configuration)
  extrasOptions: Z({
    banding: Z({
      options: Z({
        sides: Me(S(), ie(S())).optional()
      }).optional()
    }).optional(),
    finish: Z({
      options: Z({
        faces: Me(S(), ie(S())).optional()
      }).optional()
    }).optional(),
    planing: Z({
      options: Z({
        sides: Me(S(), ie(S())).optional(),
        faces: Me(S(), ie(S())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: Ie().optional(),
  v: W().optional(),
  // API version
  webhook: S().optional(),
  //source
  sourceVersion: S().nullish(),
  source: S().optional()
});
Z({
  job: Ie().optional(),
  // Type: Job from BullMQ
  saw: Ie(),
  // Runtime Saw instance
  shapeList: ie(Ie()),
  // Runtime Shape instances
  stockList: ie(Ie()),
  // Runtime Stock instances
  userGroups: ie(Ie()).optional(),
  // Runtime Group instances
  enableEvo: ce(),
  weighting: Ie().optional(),
  successMetric: S().optional(),
  useInventory: ce(),
  socketId: S().optional(),
  user: Ie().optional(),
  widget: ce().optional(),
  api: ce().optional(),
  app: ce().optional(),
  domain: S().optional(),
  config: Ie().optional(),
  v: W().optional(),
  webhook: S().optional()
});
const { addNotice: Sn } = Na();
let Hi = null;
function Eu() {
  return Hi || (Hi = Sa()), Hi;
}
function na(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function $u(t) {
  const e = t.t, n = [];
  try {
    const { inputs: i, validateInputShapes: s, validateInputStock: a } = Eu(), o = t.inputShapes ?? i.inputShapes.value, l = t.inputStock ?? i.inputStock.value, r = t.inputUserGroups ?? i.inputUserGroups?.value ?? [], h = na(o), v = na(l);
    if (h.forEach((D) => D.isNew = !1), v.forEach((D) => D.isNew = !1), !t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const D = h.reduce((q, U) => q + (U.q || 1), 0), G = v.reduce((q, U) => q + (U.q || 1), 0);
      if (D > t.maxShapes || G > t.maxStock)
        return Sn({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: n };
    }
    if (!h.length)
      return Sn({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: n };
    if (!t.useInventory && !v.length)
      return Sn({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: n };
    let y;
    if (t.useInventory && t.selectedSaw)
      y = t.selectedSaw;
    else if (t.inputSaw instanceof Rt) {
      const D = t.inputSaw.validate();
      n.push(...D), y = t.inputSaw.toData();
    } else {
      y = t.inputSaw;
      const D = new pa(y);
      n.push(...D.issues);
    }
    const p = s({
      saw: y,
      partTrim: me({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: h
    });
    if (n.push(...p), t.useInventory) {
      if (t.materialStore)
        for (const D of h)
          D.material || n.push(new Tt({
            item: D,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const D = a(y);
      n.push(...D);
    }
    if (r.length > 0) {
      r.forEach((G) => G.populateParentID(h));
      const D = el(r, h);
      n.push(...D);
    }
    await Nu(h, t, n);
    const O = Yi(n);
    if (O.length > 0) {
      const D = {
        saw: O.filter((G) => G.category?.includes("saw")),
        stock: O.filter((G) => G.category?.includes("stock")),
        part: O.filter((G) => G.category?.includes("part") && !G.category?.includes("extras")),
        extras: O.filter((G) => G.category?.includes("extras")),
        group: O.filter((G) => G.category?.includes("group"))
      };
      for (const [G, q] of Object.entries(D))
        if (q.length > 0) {
          Sn({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: G }),
            additional: q.map((U) => e(U.message))
          });
          break;
        }
      return { valid: !1, issues: n };
    }
    const A = {
      inputSaw: y,
      inputShapes: h.map((D) => D.toData()),
      inputStock: v.map((D) => D.toData()),
      inputGroups: r.map((D) => D.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, j = Tu.safeParse(A);
    return j.success ? {
      valid: !0,
      issues: n,
      sawData: y
    } : (console.error("[Validation] Zod validation failed:", j.error.issues), Sn({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: j.error.issues.map((D) => `${D.path.join(".")}: ${D.message}`)
    }), { valid: !1, issues: n });
  } catch (i) {
    return console.error("[Validation] error:", i), Sn({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [i?.message ?? ""]
    }), { valid: !1, issues: n };
  }
}
function Mu(t, e) {
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
async function Nu(t, e, n) {
  if (!e.findExtrasPrice)
    return;
  const i = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const s of t)
    for (const { type: a, pricing: o } of i) {
      if (e.extrasValidationRules && tl.hasExtras(s, a)) {
        const h = e.extrasValidationRules?.[a], v = e.extrasLocationGroups?.[a], y = h?.locations && h.locations.length > 0, p = v?.some((O) => O.rules);
        if (y || p) {
          const O = Mu(s, a), A = (v || []).map((G) => ({
            id: G.id,
            locations: G.locations,
            rules: G.rules
          })), j = h || {}, D = /* @__PURE__ */ new Set();
          for (const G of O) {
            const q = Lu(
              s,
              j,
              G,
              A
            );
            if (!q.valid) {
              if (q.source === "group") {
                const U = A.find(
                  (Ce) => Ce.rules && Ce.locations.includes(G)
                );
                if (U && D.has(U.id))
                  continue;
                U && D.add(U.id);
              }
              if (q.message) {
                const U = new Tt({
                  item: s,
                  category: ["part", "extras"],
                  message: q.message,
                  field: [["extras", a, G]],
                  shouldTranslate: !1
                });
                n.push(U);
              } else
                q.violations.forEach((U) => {
                  const Ce = Iu(U, a), Y = new Tt({
                    item: s,
                    category: ["part", "extras"],
                    message: Ce,
                    field: [["extras", a, G]],
                    shouldTranslate: !1
                  });
                  n.push(Y);
                });
            }
          }
        } else {
          const O = nl(s, a, e.extrasValidationRules);
          O.valid || O.violations.forEach((A) => {
            const j = il(a, A, O.message);
            n.push(new Tt({
              item: s,
              category: ["part", "extras"],
              message: j,
              field: [["extras", a]],
              shouldTranslate: !1
            }));
          });
        }
      }
      if (!o || !Object.keys(o).length)
        continue;
      const l = sl(s, a, o, e.findExtrasPrice);
      l.valid || l.incompleteLocations.forEach((r) => {
        n.push(new Tt({
          item: s,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: al(r, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, r]]
        }));
      });
    }
}
const Bu = new rs({});
function Vu(t) {
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
function Du(t, e) {
  const n = [], i = t.filter((s) => s.enabled !== !1);
  for (let s = 0; s < e.length; s++) {
    const a = e[s], o = Vu(a);
    for (const l of i)
      try {
        Bu.evaluateExpression(l.formula, o) || n.push({
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
const Gu = Z({
  longSide: Ut,
  shortSide: Ut,
  t: Ut,
  formula: S().optional(),
  message: S().optional()
}).optional(), ri = Z({
  // Unique identifier for this group (used internally)
  id: S().min(1),
  // Display label for the group (shown in UI)
  label: S().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ie(S().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: W().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: ce().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: Gu
}), Ru = Z({
  banding: ie(ri).optional(),
  finish: ie(ri).optional(),
  planing: ie(ri).optional()
}).optional(), ju = $t(["decimal", "fraction"]), qu = $t(ll), ia = He([
  Et(0),
  Et(1),
  Et(2)
]).catch(0), Uu = Z({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: S().optional(),
  partB: S().optional(),
  partSelected: S().optional(),
  stock: S().optional(),
  text: S().optional(),
  // Checkout-specific colors
  button: S(),
  buttonText: S()
}), it = (t) => Rn((e) => e ?? t, ce()), Wu = Z({
  banding: it(!1),
  finish: it(!1),
  planing: it(!1),
  orientation: it(!0),
  diagram: it(!0),
  focus: it(!0),
  machining: it(!1),
  csvImport: it(!1),
  click: it(!0),
  partName: it(!0),
  progressNumber: it(!0),
  pagination: it(!1),
  fullStock: it(!1),
  imageUpload: it(!1)
}), zu = Z({
  // Localization
  locale: S().default("en-US"),
  currency: S().default("USD"),
  apiVersion: W().min(2).default(3),
  // Number formatting
  numberFormat: ju.default("decimal"),
  decimalPlaces: W().min(0).max(10).default(2),
  fractionRoundTo: W().default(0),
  // Stock configuration
  stockSelection: qu.optional(),
  stockGrain: ol.optional(),
  // Part configuration
  minSpacing: ga.optional(),
  maxParts: W().min(0).default(0),
  orientationModel: ia.default(0),
  resultOrientationModel: ia.default(0),
  minDimension: W().min(0).default(0),
  partTrim: Rn((t) => t ?? void 0, W().min(0).optional()),
  partsPerPage: Rn((t) => t ?? void 0, W().min(1).default(10)),
  // UI configuration
  debug: ce().default(!1),
  emitAPIResult: ce().default(!1),
  enable: Wu.optional(),
  colors: Uu.optional(),
  // Custom fields
  customFields: ie(Ie()).optional(),
  fieldOrder: Rn((t) => t ?? void 0, ie(S()).optional()),
  // Extras location filtering
  bandingLocations: ie($i).optional(),
  finishLocations: ie($i).optional(),
  planingLocations: ie($i).optional(),
  // Extras location groups
  extrasLocationGroups: Ru,
  // Extras validation rules
  extrasValidationRules: Pu
}), Vn = Z({
  min: W().min(0).nullable().optional(),
  max: W().min(0).nullable().optional()
}).nullable().optional(), _u = Z({
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: Vn,
  shortSide: Vn,
  // Direct dimension constraints (as stored by admin panel)
  l: Vn,
  w: Vn,
  t: Vn,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: Z({
    // At least one side must be >= primaryMin
    primaryMin: W().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: W().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: S().nullable().optional(),
  // Custom validation message (optional)
  message: S().nullable().optional()
});
function Hu(t, e) {
  const n = [], i = t.l || 0, s = t.w || 0, a = t.longSide ?? Math.max(i, s), o = t.shortSide ?? Math.min(i, s), l = (r, h, v) => {
    v != null && (v.min !== void 0 && v.min !== null && h < v.min && n.push({
      valid: !1,
      dimension: r,
      value: h,
      constraint: "min",
      limit: v.min
    }), v.max !== void 0 && v.max !== null && h > v.max && n.push({
      valid: !1,
      dimension: r,
      value: h,
      constraint: "max",
      limit: v.max
    }));
  };
  if (l("longSide", a, e.longSide), l("shortSide", o, e.shortSide), l("longSide", i, e.l), l("shortSide", s, e.w), e.crossDimensionalRule) {
    const { primaryMin: r, secondaryMin: h } = e.crossDimensionalRule, v = t.l || 0, y = t.w || 0;
    if (r != null && h != null) {
      const p = v >= r && y >= h, O = y >= r && v >= h;
      !p && !O && n.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${r} mm and the other side must be ≥ ${h} mm`
      });
    }
  }
  return e.formula && (Zu(e.formula, {
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
function Zu(t, e) {
  try {
    const n = new rs({}), i = n.parse(t);
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
function Ku(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, n = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${n} of ${t.limit} (current: ${t.value})`;
}
$t([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const Ju = Me(
  S(),
  W().min(0)
).default({}), Yu = Z({
  banding: ie(S()).optional(),
  finish: ie(S()).optional(),
  planing: ie(S()).optional(),
  machining: ie(S()).optional()
}).optional(), Xu = Z({
  name: S().trim().min(1),
  db_id: S().optional(),
  code: S().optional(),
  thicknesses: ie(
    He([
      S().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      W()
    ])
  ).min(1),
  widths: ie(
    He([
      S().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      W()
    ])
  ).optional(),
  extras: Yu
}), Zi = Z({
  labels: ie(S()).default([]),
  pricing: Me(S(), W().min(0)).default({}),
  options: Ie().optional(),
  keys: ie(S()).optional(),
  // if not all the default keys should be set
  locations: ie(S()).optional(),
  // available locations for this extras type
  groups: ie(ri).optional(),
  // custom location groups
  rules: Ie().optional(),
  // validation rules for this extras type
  displayNames: Me(S(), S()).optional()
  // slug key → product name for dropdown display
});
Z({
  success: ce(),
  price: W().optional(),
  error: S().optional(),
  cacheHit: ce().optional()
});
Z({
  valid: ce(),
  errors: ie(S()),
  warnings: ie(S())
});
Z({
  pricing: Ju,
  labels: ie(S()),
  options: ie(ie(S())),
  // Simplified to string arrays only
  keys: ie(S()),
  maxLevels: W().min(1)
});
Z({
  enableCaching: ce().default(!0),
  enableLogging: ce().default(!1),
  maxCacheSize: W().min(1).default(1e3)
});
const Va = $t(["select", "multiselect", "range", "boolean", "search"]), Da = $t(["asc", "desc"]), Ga = $t(["grid", "list"]), si = Z({
  _id: S(),
  name: S(),
  pricing: Me(S(), W()).optional()
}), Qu = Z({
  banding: ie(si).optional(),
  finish: ie(si).optional(),
  planing: ie(si).optional(),
  machining: ie(si).optional()
}).optional(), ed = Z({
  enabled: ce(),
  price: W(),
  description: S().optional(),
  maxQuantity: W().optional()
}).optional(), td = Z({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: S().optional().describe("User-friendly display name"),
  description: S().optional().describe("Detailed description"),
  code: S().optional().describe("Internal material/product code"),
  // Categorization
  category: S().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: S().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: Qu.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: ed.describe("Sample ordering configuration"),
  // UI metadata
  minQuantity: W().int().positive().nullable().optional().describe("Minimum order quantity")
});
dn.merge(td).describe("Stock option with filtering and display metadata");
const nd = Z({
  field: S().describe("Property name to filter on"),
  type: Va,
  label: S().describe("Display label"),
  custom: ce().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: W().nullable().optional().describe("Minimum value for range filter"),
  max: W().nullable().optional().describe("Maximum value for range filter"),
  step: W().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: ie(Z({
    label: S(),
    value: Ie()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: ce().default(!0).describe("Whether filter is visible"),
  collapsible: ce().default(!0).describe("Whether filter panel is collapsible"),
  order: W().int().nullable().optional().describe("Display order")
}), id = Z({
  field: S().describe("Field to sort by"),
  order: Da,
  label: S().optional().describe("Display label for sort option")
}), sd = $t(["stock", "material"]), Ra = Z({
  // Browse mode
  mode: sd.default("stock").describe("Browse mode: stock shows individual items, material shows materials"),
  // Filter configuration
  availableFilters: ie(nd).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ie(S()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: id.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Ga.default("grid").describe("Default display mode"),
  itemsPerPage: W().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: ce().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: ce().default(!0).describe("Allow multiple stock selection"),
  maxSelection: W().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), ad = Z({
  field: S(),
  value: Ie(),
  type: Va
});
Z({
  // Active filters
  activeFilters: ie(ad).default([]).describe("Currently active filters"),
  // Search
  searchQuery: S().default("").describe("Current search query"),
  // Sort
  sortBy: S().default("cost").describe("Current sort field"),
  sortOrder: Da.default("asc").describe("Current sort order"),
  // Display
  displayMode: Ga.default("grid").describe("Current display mode"),
  currentPage: W().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ie(S()).default([]).describe("IDs of selected stock items")
});
function Mf() {
  return Ra.parse({});
}
const ja = Z({
  l: W(),
  w: W(),
  t: W().nullable(),
  q: W(),
  stockId: S()
}), qa = rl.partial(), Ua = Z({
  bladeWidth: W().optional(),
  cutType: S().optional(),
  cutPreference: S().optional(),
  stackHeight: W().optional()
}), od = Z({
  l: W(),
  w: W(),
  t: W().nullable(),
  material: S().nullable(),
  orientationLock: ma.nullable(),
  q: W(),
  name: S().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Me(S(), He([S(), ce()])).nullable().optional(),
  finish: Me(S(), He([S(), ce()])).nullable().optional(),
  planing: Me(S(), He([S(), ce()])).nullable().optional(),
  customData: Me(S(), Ie()).nullable().optional()
}), ld = Z({
  id: S(),
  name: S().nullable(),
  l: W(),
  w: W(),
  t: W().nullable(),
  material: S().nullable(),
  q: W(),
  trim: Z({
    x1: W(),
    x2: W(),
    y1: W(),
    y2: W()
  }).nullable().optional(),
  cost: W().nullable().optional(),
  db_id: S().nullable().optional(),
  code: S().nullable().optional(),
  analysis: qa.nullable().optional(),
  customData: Me(S(), Ie()).nullable().optional()
}), rd = Z({
  id: S().optional(),
  name: S().optional(),
  l: W(),
  w: W(),
  t: W().nullable().optional(),
  material: S().optional(),
  q: W().optional(),
  orientationLock: He([
    Et(""),
    Et("l"),
    Et("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Me(S(), He([S(), ce()])).nullable().optional(),
  finish: Me(S(), He([S(), ce()])).nullable().optional(),
  planing: Me(S(), He([S(), ce()])).nullable().optional(),
  stock: Z({
    db_id: S().optional(),
    code: S().optional(),
    material: S().optional(),
    thickness: W().optional()
  }).nullable().optional(),
  customData: Me(S(), Ie()).nullable().optional()
});
Z({
  jobId: W(),
  metadata: va.optional(),
  parts: ie(od),
  stock: ie(ld),
  offcuts: ie(ja),
  inputs: Z({
    parts: ie(rd),
    saw: Ua.optional()
  }),
  apiResultV3: Pa.optional()
});
const cd = Z({
  l: W(),
  w: W(),
  t: W().nullable(),
  material: S().nullable(),
  orientationLock: ma.nullable(),
  q: W(),
  name: S().nullable(),
  // V3 format: nested extras structure
  extras: Z({
    banding: Z({
      sides: Me(S(), He([S(), ce()]))
    }).nullable().optional(),
    finish: Z({
      faces: Me(S(), He([S(), ce()]))
    }).nullable().optional(),
    planing: Z({
      sides: Me(S(), He([S(), ce()])).optional(),
      faces: Me(S(), He([S(), ce()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Me(S(), Ie()).nullable().optional()
}), ud = Z({
  id: S(),
  name: S().nullable(),
  l: W(),
  w: W(),
  t: W().nullable(),
  material: S().nullable(),
  q: W(),
  trim: Z({
    l1: W(),
    l2: W(),
    w1: W(),
    w2: W()
  }).nullable().optional(),
  cost: W().nullable().optional(),
  db_id: S().nullable().optional(),
  code: S().nullable().optional(),
  analysis: qa.nullable().optional(),
  // New stock fields
  color: cl.nullable(),
  weight: W().positive().nullable().optional(),
  imageUrl: S().nullable().optional(),
  tags: ie(S()).nullable().optional(),
  available: ce().nullable().optional(),
  customData: Me(S(), Ie()).nullable().optional()
}), dd = Z({
  id: S().optional(),
  name: S().optional(),
  l: W(),
  w: W(),
  t: W().nullable().optional(),
  material: S().optional(),
  q: W().optional(),
  orientationLock: He([
    Et(""),
    Et("l"),
    Et("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: Z({
    banding: Z({
      sides: Me(S(), He([S(), ce()]))
    }).nullable().optional(),
    finish: Z({
      faces: Me(S(), He([S(), ce()]))
    }).nullable().optional(),
    planing: Z({
      sides: Me(S(), He([S(), ce()])).optional(),
      faces: Me(S(), He([S(), ce()])).optional()
    }).nullable().optional()
  }).optional(),
  stock: Z({
    db_id: S().optional(),
    code: S().optional(),
    material: S().optional(),
    thickness: W().optional()
  }).nullable().optional(),
  customData: Me(S(), Ie()).nullable().optional()
});
Z({
  jobId: W(),
  metadata: va.optional(),
  parts: ie(cd),
  stock: ie(ud),
  offcuts: ie(ja),
  inputs: Z({
    parts: ie(dd),
    saw: Ua.optional()
  }),
  apiResultV3: Pa.optional()
});
function Wa(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: t?.stock?.id || t?.stock?.parentId || ""
  };
}
function za(t) {
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
const fd = Z({
  stockSelection: vl.optional(),
  stackingMode: ml.optional(),
  minSpacing: ga.optional()
}).optional(), pd = Z({
  stockType: $t([...Xi]).optional(),
  bladeWidth: He([
    gl,
    S()
  ]).optional(),
  cutType: hl,
  cutPreference: pl,
  stackHeight: fl,
  guillotineOptions: dl,
  efficiencyOptions: ul.optional(),
  options: fd
}).optional(), hd = Z({
  holes: W().min(0).nullable().optional(),
  corners: W().min(0).nullable().optional()
}).optional(), gd = Pn.pick({
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
  banding: wl.nullable().optional(),
  finish: yl.nullable().optional(),
  planing: bl.nullable().optional(),
  stockId: S().nullable().optional()
}), md = Z({
  stock: ie(dn).default([]),
  parts: ie(gd).optional(),
  options: zu,
  type: S().optional(),
  // variable | simple
  materials: ie(Xu).optional(),
  banding: Zi.nullable().optional(),
  finish: Zi.nullable().optional(),
  planing: Zi.nullable().optional(),
  machining: Ie().optional(),
  machiningPricing: hd,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: Ie().optional(),
  partRules: _u.optional(),
  customValidation: Z({
    enabled: ce(),
    rules: ie(Ie())
  }).optional(),
  saw: pd,
  stockFilter: Z({
    enabled: ce().optional(),
    serverMode: ce().optional(),
    config: Ra.optional()
  }).optional(),
  // Product catalog configuration
  products: Z({
    enabled: ce().optional(),
    showCategories: ce().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: Z({
    baseUrl: S(),
    orgSlug: S(),
    isCustomDomain: ce().optional()
  }).optional(),
  // Admin configuration (formula pricing, etc.)
  config: Z({
    formulaPricing: Z({
      enabled: ce(),
      url: S().nullable().optional(),
      spec: Ie().nullable().optional()
    }).optional()
  }).optional()
});
function vd(t) {
  const e = md.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function bd(t) {
  const e = vd(t);
  if (!e.success) {
    const n = e.error?.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", n), new Error(`Invalid checkout data: ${n}`);
  }
  return e.data;
}
function It(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function yd(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, n = {};
    if (ze(e.a) || ze(e.b) || ze(e.c) || ze(e.d))
      n.x1 = ze(e.a) ? It(e.a) : !1, n.y1 = ze(e.b) ? It(e.b) : !1, n.x2 = ze(e.c) ? It(e.c) : !1, n.y2 = ze(e.d) ? It(e.d) : !1;
    else {
      const s = is(e);
      n.x1 = ze(s.x1) ? It(s.x1) : !1, n.x2 = ze(s.x2) ? It(s.x2) : !1, n.y1 = ze(s.y1) ? It(s.y1) : !1, n.y2 = ze(s.y2) ? It(s.y2) : !1;
    }
    t.banding = n;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, n = {};
    n.a = ze(e.a) ? It(e.a) : !1, n.b = ze(e.b) ? It(e.b) : !1, t.finish = n;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, n = {}, i = is(e.sides || {});
    e.sides && (ze(i.x1) && (n.x1 = i.x1), ze(i.x2) && (n.x2 = i.x2), ze(i.y1) && (n.y1 = i.y1), ze(i.y2) && (n.y2 = i.y2)), e.faces && (ze(e.faces.a) && (n.a = e.faces.a), ze(e.faces.b) && (n.b = e.faces.b)), Object.keys(n).length > 0 && (t.planing = n);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function wd(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const n = Math.max(t.l, t.w), i = Math.min(t.l, t.w);
    t.w > t.l && (t.l = n, t.w = i);
  }
  return t;
}
function _a(t, e = 0) {
  debugger;
  return e === 0 || t.forEach((n) => wd(n, e)), t;
}
function xd(t, e, n, i, s, a, o, l) {
  const r = za(i), h = e.map((p) => {
    const O = {
      l: p.l,
      w: p.w,
      t: p?.t ?? null,
      material: p.material ?? null,
      orientationLock: p.orientationLock ?? null,
      q: o?.addedPartTally?.[p.parentId] || p.q,
      name: p.name ?? null,
      customData: p.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: nr(),
      finish: pi(),
      planing: sr()
    }, A = { ...p };
    return yd(A), A.banding && (O.banding = A.banding), A.finish && (O.finish = A.finish), A.planing && (O.planing = A.planing), O;
  }), v = n.map((p) => {
    const O = {
      id: p.id,
      name: p?.name ?? null,
      l: p.l,
      w: p.w,
      t: p?.t ?? null,
      material: p.material ?? null,
      q: o?.usedStockTally?.[p.parentId] || p.q,
      cost: p?.cost ?? null,
      analysis: r.get(p.parentId) ?? null,
      customData: p?.customData ?? null
    };
    return p?.trim && (O.trim = is(p.trim)), O;
  }), y = {
    parts: a.map((p) => {
      const O = {
        id: p.id,
        name: p.name,
        l: p.l,
        w: p.w,
        t: p.t ?? null,
        material: p.material,
        q: p.q,
        orientationLock: p.orientationLock ?? null,
        customData: p.customData ?? null
      };
      return p.extras && (O.extras = {}, p.extras.banding?.sides && (O.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && (O.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && (O.extras.planing = {
        ...p.extras.planing.sides && { sides: p.extras.planing.sides },
        ...p.extras.planing.faces && { faces: p.extras.planing.faces }
      })), O;
    })
  };
  return l && _a(h, l), {
    jobId: t,
    metadata: o,
    parts: h,
    stock: v,
    offcuts: s?.map(Wa) || [],
    inputs: y
  };
}
function Sd(t, e, n, i, s, a, o, l) {
  const r = za(i), h = e.map((p) => {
    const O = {
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
        banding: { sides: ns() },
        finish: { faces: pi() },
        planing: ir()
      }
    };
    return p.extras && (p.extras.banding?.sides && (O.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && (O.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && (O.extras.planing = {
      sides: p.extras.planing.sides || ns(),
      faces: p.extras.planing.faces || pi()
    })), O;
  }), v = n.map((p) => ({
    id: p.id,
    name: p?.name ?? null,
    l: p.l,
    w: p.w,
    t: p?.t ?? null,
    material: p.material ?? null,
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
  })), y = {
    parts: a.map((p) => {
      const O = {
        id: p.id,
        name: p.name,
        l: p.l,
        w: p.w,
        t: p.t ?? null,
        material: p.material,
        q: p.q,
        orientationLock: p.orientationLock ?? null,
        customData: p.customData ?? null
      };
      return p.extras && (O.extras = {}, p.extras.banding?.sides && (O.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && (O.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && (O.extras.planing = {
        ...p.extras.planing.sides && { sides: p.extras.planing.sides },
        ...p.extras.planing.faces && { faces: p.extras.planing.faces }
      })), O;
    })
  };
  return l && _a(h, l), {
    jobId: t,
    metadata: o,
    parts: h,
    stock: v,
    offcuts: s?.map(Wa) || [],
    inputs: y
  };
}
const kd = ["id", "data-index"], Cd = /* @__PURE__ */ Qe({
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
        l1: nn(n.inputShape, "banding", "side.l1"),
        l2: nn(n.inputShape, "banding", "side.l2"),
        w1: nn(n.inputShape, "banding", "side.w1"),
        w2: nn(n.inputShape, "banding", "side.w2")
      };
      const h = jl(
        n.orientationModel,
        n.stockGrain,
        n.inputShape
      );
      h && (r = ba(r, h)), s.value = r;
    };
    Re([
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
    return fn(() => {
      document.getElementById(n.id)?.addEventListener("keydown", o);
    }), gi(() => {
      document.getElementById(n.id)?.removeEventListener("keydown", o);
    }), (r, h) => (B(), K("div", {
      id: t.id,
      class: tt(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: l
    }, [
      re("div", {
        class: tt(["outer", {
          l1: s.value.l1,
          l2: s.value.l2,
          w1: s.value.w1,
          w2: s.value.w2
        }])
      }, [...h[0] || (h[0] = [
        re("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, kd));
  }
}), Pd = ["id", "data-index", "disabled"], Ad = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = T(() => n.inputShape ? nn(n.inputShape, "finish", "face.a") : !1), a = T(() => n.inputShape ? nn(n.inputShape, "finish", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const h = Wn("FontAwesomeIcon");
      return B(), K("button", {
        id: t.id,
        class: tt(["c-btn finish-button", {
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
      ], 10, Pd);
    };
  }
});
function Id(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Od(t) {
  const e = Id(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((n) => n && n.type && n.size > 0)) : !1;
}
const Ld = Qe({
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
      return Od(this.inputShape);
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
}), Fd = ["id", "disabled"];
function Td(t, e, n, i, s, a) {
  const o = Wn("FontAwesomeIcon");
  return B(), K("button", {
    id: t.id,
    class: tt(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...l) => t.openMachining && t.openMachining(...l))
  }, [
    Ge(o, { icon: ["fass", "hammer"] })
  ], 10, Fd);
}
const Ed = /* @__PURE__ */ mi(Ld, [["render", Td]]), $d = ["id"], Md = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Nd = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Bd = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Vd = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, Dd = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, Gd = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Rd = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, sa = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = z(0), a = z(!1), o = (C, M, P, H) => {
      if (!Be(P) || M === 0)
        return C;
      const ee = l();
      return M === 1 || M === 2 && H !== "n" && C ? ee : C;
    }, l = (C) => {
      const M = { ...n, ...C };
      if (!M.rectangle || !Be(M.rectangle)) return "";
      let P = "";
      switch (M.orientationModel) {
        case 0:
          P = U.value;
          break;
        case 1:
          M.stockGrain === "y" || M.stockGrain === "n" ? P = M.rectangle.l >= M.rectangle.w ? "l" : "w" : M.rectangle.l >= M.rectangle.w ? P = M.stockGrain : P = P = M.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          P = M.rectangle.l >= M.rectangle.w ? "l" : "w";
          break;
      }
      return P;
    }, r = () => {
      if (n.disabled || G.value.length <= 1)
        return;
      const C = h(U.value);
      "multiEdit" in n.rectangle && n.rectangle.multiEdit && U.value === "" && s.value !== C && s.value === 0 && (s.value = C);
      let P = null;
      [1, 2].includes(n.orientationModel) ? P = y() : P = v(), s.value = P;
    }, h = (C) => {
      const M = G.value.findIndex((P) => P === C);
      return M === -1 ? 0 : M;
    }, v = () => {
      let C = s.value + 1;
      return C > G.value.length - 1 && (C = 0), C;
    }, y = () => {
      let C = 0;
      if (U.value === "") {
        const M = l();
        C = G.value.findIndex((P) => P === M);
      } else
        C = G.value.findIndex((M) => M === "");
      return C;
    }, p = (C) => {
      i("updateOrientation", C);
    }, O = () => {
      const C = U.value;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit)
        return C === " " ? " " : C === "" ? "" : C === "l" ? "l" : C === "w" ? "w" : "default";
      switch (n.orientationModel) {
        case 0:
          return C === " " ? " " : C ? n.stockGrain === "n" ? C || n.shapeOrientation || "default" : n.stockGrain === "w" ? C === "w" ? "w" : "l" : C === "l" ? "l" : "w" : "default";
        case 1:
          return C === " " ? " " : C ? n.stockGrain === "n" ? C || n.shapeOrientation || "default" : n.stockGrain === "w" ? C === "w" ? "w" : "l" : C === "l" ? "l" : "w" : "default";
        case 2:
          return C === " " ? " " : C ? n.stockGrain === "n" ? C || n.shapeOrientation || "default" : n.stockGrain === "w" ? C === "w" ? "w" : "l" : C === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, A = () => {
      if (!n.rectangle)
        return;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit && !U.value) {
        D("");
        return;
      }
      const C = o(
        U.value,
        n.orientationModel,
        n.rectangle,
        n.stockGrain
      );
      if (C !== U.value) {
        D(C);
        return;
      }
      if (!a.value || s.value === -1) {
        const M = h(U.value);
        s.value = M;
      }
      if (Be(n.rectangle)) {
        if (n.orientationModel === 1) {
          const M = Y.value ? l() : U.value;
          D(M);
          return;
        }
        if (n.orientationModel === 2) {
          let M;
          Y.value ? M = n.stockGrain !== "n" ? l() : "" : M = U.value, D(M);
        }
      }
    }, j = z(!1), D = (C) => {
      const M = h(C);
      j.value = !0, s.value = M, j.value = !1, p(C);
    }, G = T(() => {
      if (!n.rectangle) return ["l", "w"];
      if (Qt(n.rectangle)) return ["l", "w"];
      let C = ["", "l", "w"];
      return n.rectangle.multiEdit ? [" ", "", "l", "w"] : (q.value && (C = C.filter((M) => M !== "w")), C);
    }), q = T(() => Be(n.rectangle) || Mi(n.rectangle) ? n.rectangle.isSquare : n.rectangleType && n.rectangle?.l && n.rectangle?.w ? n.rectangle?.l === n.rectangle?.w : !1), U = T(() => {
      let C = "";
      if (Qt(n.rectangle))
        C = n.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Be(n.rectangle)) {
        const M = n.rectangle.orientationLock;
        C = M === null ? "" : M;
      } else if (Mi(n.rectangle)) {
        const P = n.rectangle.grain ?? "";
        P === "l" || P === "w" || P === "" || P === " " ? C = P : C = "";
      }
      return C;
    }), Ce = T(() => Qt(n.rectangle) || !n.rectangle ? {
      l: null,
      w: null
    } : {
      l: n.rectangle.l,
      w: n.rectangle.w
    }), Y = T(() => !Ce.value.l && !Ce.value.w), le = T(() => Qt(n.rectangle) ? !1 : li(
      n.orientationModel,
      n.stockGrain,
      n.rectangle,
      n.rectangleType,
      n.shapeOrientation
    )), xe = T(() => {
      if (!n.rectangle)
        return n.shapeOrientation ? "noGrain" : "freeRotation";
      if (Mi(n.rectangle) || n.rectangleType === "stock") {
        const ee = n.rectangle.grain;
        return "multiEdit" in n.rectangle && n.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ee] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[ee] || "noGrain";
      }
      const C = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, M = n.stockGrain || "default";
      let P = "default";
      Be(n.rectangle) || n.rectangleType === "shape" ? P = O() : Qt(n.rectangle) && (P = n.rectangle.direction || "default");
      const H = C[M]?.[P];
      return H || C[M]?.default || "freeRotation";
    });
    return Re(s, (C, M) => {
      a.value && M !== void 0 && (j.value || p(G.value[C]));
    }, { immediate: !1 }), Re(Ce, (C, M) => {
      if (!n.rectangle || n.orientationModel === 0 || !Be(n.rectangle) || Be(n.rectangle) && (n.orientationModel === 2 && M.l && M.w && !U.value || n.stockGrain === "n" && !U.value))
        return;
      const P = l();
      U.value !== P && p(P);
    }, { immediate: !1 }), Re(() => n.stockGrain, (C, M) => {
      C !== M && A();
    }, { immediate: !0 }), fn(() => {
      A(), gt(() => a.value = !0);
    }), (C, M) => (B(), K("button", {
      type: "button",
      id: t.id,
      class: tt(["c-btn orientation-button", { rot: le.value, square: q.value, disabled: t.disabled, [xe.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: r
    }, [
      xe.value === "delete" ? (B(), K("svg", Md, [...M[0] || (M[0] = [
        re("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : ue("", !0),
      xe.value === "noChange" ? (B(), K("svg", Nd, [...M[1] || (M[1] = [
        re("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : ue("", !0),
      xe.value === "freeRotation" ? (B(), K("svg", Bd, [...M[2] || (M[2] = [
        re("g", null, [
          re("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          re("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          re("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          re("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : ue("", !0),
      xe.value === "leftRight" ? (B(), K("svg", Vd, [...M[3] || (M[3] = [
        re("g", null, [
          re("path", { d: "m5.408 19.408h61.095" }),
          re("g", null, [
            re("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            re("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : ue("", !0),
      xe.value === "topBottom" ? (B(), K("svg", Dd, [...M[4] || (M[4] = [
        re("g", null, [
          re("path", { d: "m19.408 66.503v-61.095" }),
          re("g", null, [
            re("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            re("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : ue("", !0),
      xe.value === "grainLeftRight" ? (B(), K("svg", Gd, [...M[5] || (M[5] = [
        re("g", null, [
          re("path", { d: "m3 3h99.887" }),
          re("path", { d: "m3.113 32h99.887" }),
          re("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : ue("", !0),
      xe.value === "grainTopBottom" ? (B(), K("svg", Rd, [...M[6] || (M[6] = [
        re("g", null, [
          re("path", { d: "m61 3v99.887" }),
          re("path", { d: "m32 3.113v99.887" }),
          re("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : ue("", !0)
    ], 10, $d));
  }
}), jd = ["id", "data-index", "disabled"], qd = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = T(() => n.inputShape ? nn(n.inputShape, "planing", "face.a") : !1), a = T(() => n.inputShape ? nn(n.inputShape, "planing", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const h = Wn("FontAwesomeIcon");
      return B(), K("button", {
        id: t.id,
        class: tt(["c-btn planing-button", {
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
      ], 10, jd);
    };
  }
});
function Ud(t, e, n) {
  let i = null;
  Re(
    () => t.value ? { l: t.value.l, w: t.value.w } : null,
    (s) => {
      const a = typeof e == "number" ? e : e.value;
      if (!Gl(a) || !s || !t.value) return;
      const o = s.w > s.l;
      if (i === null) {
        i = o;
        return;
      }
      if (i !== o) {
        const l = Rl(a);
        for (const r of l)
          xl(t.value, r);
        i = o;
      }
    },
    { immediate: !0 }
  );
}
const Wd = {
  key: 0,
  class: "info"
}, zd = ["disabled"], _d = /* @__PURE__ */ Qe({
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
    const n = t, i = e, s = T(() => n.field.name === "banding" && Be(n.item) ? n.item : null);
    Ud(s, Ot(n, "orientationModel"));
    const a = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], o = T(() => a.includes(n.field.name) || n.field.name === "material" && n.typePrefix === "part" || n.field.name === "t" && n.thicknessOptions?.length > 0 || n.field.name === "w" && n.widthOptions?.length > 0), l = T(() => {
      try {
        const Y = n.field.propertyPath || n.field.name;
        return Y.includes(".") ? Xt(n.item, Y) ?? null : n.item[Y] ?? null;
      } catch (Y) {
        return console.error("[CheckoutField] Error getting field value:", Y), null;
      }
    }), r = T(() => {
      if (n.field.custom && n.field.type) {
        const xe = n.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(xe))
          return xe;
      }
      const Y = {
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
      const le = Y[n.field.type];
      return le || "string";
    }), h = T(() => n.field.output ? n.field.output : null), v = T(() => n.field.options || []), y = T(() => !!n.fullStockDisabled), p = T(() => n.item.isNew ? !1 : Cs(n.item, [n.field.name])), O = T(() => n.item.isNew ? !1 : Cs(n.item, [n.field.name], !0)), A = T(() => n.multiEdit || n.item.isNew || !1), j = T(() => n.materialOptions?.length > 0 && Be(n.item) ? !n.item.material : !1), D = T(() => n.widthOptions?.length === 1), G = T(() => n.field.info ? typeof n.field.info == "string" ? n.field.info : typeof n.field.info == "object" && l.value !== null && n.field.info[l.value] || null : null), q = (Y) => {
      i("update", Y);
    }, U = (Y, le) => {
      i("validation", Y, le);
    }, Ce = () => {
      i("blur");
    };
    return (Y, le) => o.value ? (B(), K(at, { key: 1 }, [
      t.field.name === "orientationLock" ? (B(), $e(sa, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        disabled: y.value,
        onUpdateOrientation: q
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "grain" ? (B(), $e(sa, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        disabled: y.value,
        onUpdateOrientation: q
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "banding" ? (B(), $e(Cd, {
        key: 2,
        "input-shape": L(Be)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.banding,
        onClicked: le[0] || (le[0] = (xe) => Y.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : t.field.name === "finish" ? (B(), $e(Ad, {
        key: 3,
        "input-shape": L(Be)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.finish,
        onClicked: le[1] || (le[1] = (xe) => Y.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "planing" ? (B(), $e(qd, {
        key: 4,
        "input-shape": L(Be)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.planing,
        onClicked: le[2] || (le[2] = (xe) => Y.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "machining" ? (B(), $e(Ed, {
        key: 5,
        "input-shape": L(Be)(t.item) ? t.item : null,
        disabled: y.value || t.materialExtrasDisabled?.machining,
        onOpen: le[3] || (le[3] = (xe) => Y.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : t.field.name === "material" && t.typePrefix === "part" ? (B(), $e(Dn, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: L(ye)(t.field.label || "fields.material"),
        placeholder: L(ye)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: L(ye)("actions.select"),
          delete: L(ye)("actions.delete")
        },
        "onUpdate:value": q,
        onValidation: U
      }, {
        default: ui(() => [
          Ji(Y.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (B(), $e(Dn, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: L(ye)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: j.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: L(ye)("actions.select"),
          delete: L(ye)("actions.delete")
        },
        output: "number",
        "onUpdate:value": q,
        onValidation: U
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (B(), $e(Dn, {
        key: 8,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: L(ye)(t.field.label || "fields.w"),
        "enable-label": !1,
        options: t.widthOptions,
        readonly: t.readonly,
        disabled: D.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: L(ye)("actions.select"),
          delete: L(ye)("actions.delete")
        },
        output: "number",
        "onUpdate:value": q,
        onValidation: U
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (B(), K("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: le[4] || (le[4] = (xe) => Y.$emit("open-image-upload"))
      }, [
        Ge(L(ci), { icon: ["fass", "image"] })
      ], 8, zd)) : ue("", !0)
    ], 64)) : (B(), $e(Dn, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: l.value,
      label: L(ye)(t.field.label || t.field.name),
      placeholder: L(ye)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: h.value,
      options: v.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || y.value,
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
      warning: O.value,
      "disable-required-validation": A.value,
      "onUpdate:value": q,
      onValidation: U,
      onBlur: Ce
    }, {
      default: ui(() => [
        G.value ? (B(), K("p", Wd, [
          Ge(L(ci), { icon: ["fass", "info-circle"] }),
          ai(" " + Oe(G.value), 1)
        ])) : ue("", !0),
        Ji(Y.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Hd = { class: "checkout-calculator-wrapper" }, Zd = {
  key: 0,
  class: "row table-heading"
}, Kd = {
  key: 0,
  class: "cell center"
}, Jd = { class: "cell" }, Yd = {
  key: 0,
  class: "cell"
}, Xd = ["onClick"], Qd = { class: "cell" }, ef = ["disabled", "aria-label", "onClick"], tf = { class: "button-wrapper main" }, nf = ["aria-label"], sf = ["aria-label", "disabled"], af = ["aria-label"], of = { id: "part-count" }, lf = {
  key: 2,
  class: "pagination-controls"
}, rf = { class: "c-btn-group" }, cf = ["disabled"], uf = ["disabled"], df = { class: "pagination-info" }, ff = ["disabled"], pf = ["disabled"], hf = {
  key: 4,
  id: "messages"
}, gf = {
  key: 0,
  class: "heading"
}, mf = { class: "content" }, vf = {
  key: 5,
  id: "progress"
}, bf = { id: "diagram-wrapper" }, yf = {
  key: 0,
  id: "stack"
}, wf = {
  key: 4,
  class: "debug"
}, Ki = !1, xf = /* @__PURE__ */ Qe({
  __name: "EcommerceCalculator",
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
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
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "before-calculate", "result", "no-result", "log", "error"],
  setup(t, { expose: e, emit: n }) {
    const i = Fn(() => import("./InputIssues-DqasGdVG.js")), s = Fn(() => import("./Machining-9mU7m9Dq.js")), a = Fn(() => import("./ImportCSV-szBVIZhn.js")), o = Fn(() => import("./ObjectViewer-DkGCIFpQ.js")), l = Fn(() => import("./ImageUpload-BpAd7vqW.js")), {
      inputs: r,
      totalInputShapes: h,
      getShapeGrainSummary: v,
      updateNumberFormat: y,
      validateInputStock: p,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: O,
      addInputShape: A,
      addInputStock: j,
      cloneInputShape: D,
      updateInputShape: G,
      validationIssues: q,
      setExtrasOptionsFromPricing: U,
      getCentralizedOptions: Ce
    } = Sa(), { r: Y, updateFromResult: le, stackedStock: xe, uniqueAddedShapes: C, uniqueUsedStock: M, usedStock: P, activeStockAutoId: H, activeStock: ee, setActiveStockAutoId: ne } = os(), { progress: ae, reset: Fe } = Ba(), { addNotice: J } = Na(), de = T(() => r.inputShapes.value.filter(Be)), E = (c) => !c || !Array.isArray(c) ? [] : c.map((d) => pr({ parts: [d] }).parts?.[0] || d), _ = t, fe = n, Se = z(!1), je = "production", Xe = z(navigator?.language || "en-US"), Je = kn(null), zt = window.location.hostname, ut = z(!1), Mt = z(!0), St = Co("Checkout/currentURL", window.location.href), et = z([]), kt = z(null), nt = z(null), Ct = z(!1), dt = z(!1), _e = z(!1), an = z(!1), _t = z(!1), Pt = z(Sl()), We = z(!1), X = z(1), x = z(10), { socket: w } = ku({
      refs: {
        connected: ut,
        thinking: _e
      },
      callbacks: {
        onResult(c) {
          const d = c.optimisation;
          if (le(d), !d.shapeList?.length || !d.stockList?.length) {
            Fe(), J({
              type: "error",
              message: ye("errors.calculation.no_result"),
              additional: [ye("errors.validation.check_inputs")]
            }), _e.value = !1;
            return;
          }
          if ((I.apiVersion || 3) === 2 ? nt.value = xd(
            c.jobId,
            C.value,
            M.value,
            P.value,
            Y.offcuts?.value || [],
            r.inputShapes.value,
            Y.metadata.value,
            I.resultOrientationModel
          ) : nt.value = Sd(
            c.jobId,
            C.value,
            M.value,
            P.value,
            Y.offcuts?.value || [],
            r.inputShapes.value,
            Y.metadata.value,
            I.resultOrientationModel
          ), Y?.metadata?.value?.unplacedParts?.length) {
            const f = Y.metadata.value.unplacedParts.map((k) => k.id).join();
            J({
              type: "warning",
              message: ye("woodwork.parts_not_fit") + ": " + f
            });
          }
          nt.value && (I.emitAPIResult && (nt.value.apiResultV3 = Ar({
            jobId: c.jobId,
            saw: d.saw,
            stockList: d.stockList,
            shapeList: d.shapeList,
            cutList: d.cutList,
            offcuts: Y.offcuts?.value || [],
            unusableShapes: d.unusableShapes,
            metadata: Y.metadata.value
          })), fe("result", nt.value)), _e.value = !1;
        },
        onUser(c) {
          Je.value = c;
        },
        onConnectError(c) {
          J({
            type: "error",
            message: ye("errors.network.cannot_connect"),
            additional: [c]
          });
        },
        onError(c) {
          J({
            type: "error",
            message: ye("errors.general.error_occurred"),
            additional: [c]
          });
        }
      }
    }), m = {
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
        imageUpload: !1
      },
      colors: {
        partA: "#118ab2",
        partB: null,
        partSelected: null,
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
      stockSelection: null,
      stockGrain: null,
      partTrim: 0,
      currency: "USD",
      debug: !1,
      emitAPIResult: !1
    }, I = wt(m), $ = wt({
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
    }), he = z(null), ge = z(!1), Pe = z(""), Nt = z("");
    Re(q, (c) => {
      c?.length > 0 ? (ge.value = !0, Pe.value = "Validation Errors", Nt.value = c.map((d) => `${d.message} (${d.category.join(", ")})`).join(`

`)) : Pe.value === "Validation Errors" && (ge.value = !1, Pe.value = "", Nt.value = "");
    }, { deep: !0 });
    const Ye = wt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), be = z([]), Ne = z([]), pn = z([]), Le = z([]), ot = wt({
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
    }), Ae = wt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), De = wt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), Te = wt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), zn = z(null), Bt = wt({}), ft = wt({}), pt = wt({}), on = z(null), hn = z(null), bi = T(() => ({
      banding: Bt.rules,
      finish: ft.rules,
      planing: pt.rules
    })), gn = T(() => Su({
      stockType: $.stockType,
      materials: be.value,
      minDimension: I.minDimension,
      ...I.fieldOrder && I.fieldOrder.length > 0 ? { allowedFieldIds: I.fieldOrder } : {}
    })), mn = z([]), vn = z({
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
    }), bn = T(() => {
      const c = gn.value.fields.value, d = gn.value.allFieldsMap.value, g = c.filter((we) => vn.value[we.name] ?? !0), f = ["banding", "finish", "planing", "machining", "imageUpload"], k = [];
      let F = null;
      const Q = g.filter((we) => we.name !== "fullStock");
      vn.value.fullStock && (F = g.find((we) => we.name === "fullStock") || d.get("fullStock"));
      for (const we of f) {
        const Ke = vn.value[we], Ve = Q.find((ht) => ht.name === we);
        if (Ke && !Ve) {
          const ht = d.get(we);
          ht && k.push(ht);
        }
      }
      const pe = mn.value || [];
      return [
        ...F ? [F] : [],
        ...Q,
        ...k,
        ...pe
      ];
    }), Ht = T(() => bn.value.length + 2), yi = T(() => {
      const c = {
        id: 34,
        del: 32
      }, d = {
        id: `${c.id}px`,
        del: `${c.del}px`
      }, g = [];
      for (const f of bn.value) {
        if (f.name === "trim") continue;
        const k = f.w ?? "minmax(20px, 1fr)";
        g.push(k);
      }
      return g.unshift(d.id), g.push(d.del), g.join(" ");
    }), ln = T(() => I.enable.pagination), Vt = T(() => ln.value ? Math.ceil(de.value.length / x.value) : 1), wi = T(() => {
      if (!ln.value) return de.value;
      const c = (X.value - 1) * x.value, d = c + x.value;
      return de.value.slice(c, d);
    }), xi = T(() => ln.value ? (X.value - 1) * x.value : 0), rn = (c) => {
      c < 1 && (c = 1), c > Vt.value && (c = Vt.value), X.value = c;
    }, Si = () => rn(1), ki = () => rn(X.value - 1), u = () => rn(X.value + 1), b = () => rn(Vt.value), V = T(() => ({
      "--btn-color": I.colors.buttonText,
      "--btn-bg": I.colors.button,
      "--btn-hover-bg": N(I.colors.button, -8),
      "--btn-focus-ring": I.colors.button
    }));
    function N(c, d) {
      const g = c.replace("#", ""), f = parseInt(g, 16), k = Math.round(2.55 * d), F = (f >> 16) + k, Q = (f >> 8 & 255) + k, pe = (f & 255) + k;
      return `#${(16777216 + (F < 255 ? F < 1 ? 0 : F : 255) * 65536 + (Q < 255 ? Q < 1 ? 0 : Q : 255) * 256 + (pe < 255 ? pe < 1 ? 0 : pe : 255)).toString(16).slice(1)}`;
    }
    const R = {
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
    }, se = T(() => _.showCredit !== void 0 ? _.showCredit : Je.value ? !(Je.value && Je.value?.api?.whiteLabel) : !0), ve = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (c) => {
        const d = ["efficiency", "smallest"];
        c && !d.includes(c) ? console.warn(`${c} is not a valid stockSelection, expected ${d.join("|")}`) : $.options.stockSelection = c;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (c) => {
        $.options.minSpacing = c;
      },
      maxParts: (c) => {
        I.maxParts = c;
      },
      partsPerPage: (c) => {
        c && c > 0 && (x.value = c, I.partsPerPage = c);
      },
      locale: (c) => {
        Xe.value = c.replace(/_/g, "-");
      },
      enable: (c) => {
        const d = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          planing: "planing",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload",
          fullStock: "fullStock"
        };
        for (const g in m.enable)
          g in c && (I.enable[g] = c[g]);
        for (const g in d) {
          const f = d[g], k = Xt(c, [f]), F = m.enable[f];
          te(g, k !== void 0 ? k : F);
        }
        _t.value = Xt(c, ["csvImport"]) ?? m.enable.csvImport;
      },
      colors: (c) => {
        for (const d in m.colors)
          d in c && (I.colors[d] = c[d]);
      },
      orientationModel: (c) => {
        if (![0, 1, 2].includes(c)) {
          I.orientationModel = 0;
          return;
        }
        I.orientationModel = c;
      },
      numberFormat: (c) => {
        if (!["decimal", "fraction"].includes(c)) {
          I.numberFormat = "decimal";
          return;
        }
        I.numberFormat = c;
      },
      customFields: (c) => {
        if (!Array.isArray(c) || !c?.length)
          return;
        const d = [];
        c.forEach((g) => {
          const f = lt(g.id), k = {
            ...g,
            custom: !0,
            id: f,
            name: f,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + f,
            fieldMap: "customData." + f
          };
          g.type === "checkbox" && (k.w = "32px"), g.type === "integer" || g.type === "float" ? k.output = g.output ?? "number" : g.type === "select" && (k.output = g.output ?? "string", k.options = g.options), d.push(k);
        }), mn.value = d, gt(() => {
          for (const g of r.inputShapes.value)
            g.customData = c.reduce((f, k) => {
              const F = lt(k.id);
              return f[F] = g.customData[F] || k.default || "", f;
            }, {});
        });
      }
    }, ke = (c) => {
      _.debug && fe("log", ["checkout init...", c]), c?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), c?.parts && (c.parts = E(c.parts));
      let d;
      try {
        d = bd(c), console.log("[init] validation passed, stock count:", d.stock?.length);
      } catch (f) {
        console.error("[init] validation FAILED:", f.message), fe("error", f.message || "Invalid init data");
        return;
      }
      if (d.saw) {
        const f = d.saw;
        if (f.stockType !== void 0 && (Xi.includes(f.stockType) || console.warn(`${f.stockType} is not a valid stockType, expected ${Xi.join("|")}`), $.stockType = f.stockType, f.stockType === "linear" && ($.cutType = null, $.cutPreference = null)), f.bladeWidth !== void 0) {
          const k = typeof f.bladeWidth == "string" ? parseFloat(f.bladeWidth) : f.bladeWidth;
          k >= 0 ? $.bladeWidth = k : console.warn(`SmartCut - you provided an incorrect blade width of: ${f.bladeWidth}`);
        }
        if (f.cutType !== void 0 && ($.cutType = f.cutType), f.cutPreference !== void 0 && (Ps.includes(f.cutPreference) ? $.cutPreference = f.cutPreference : console.warn(`SmartCut - cut preference ${f.cutPreference || "N/A"} is not valid. Expected: ${Ps.join("|")}`)), f.guillotineOptions !== void 0 && typeof f.guillotineOptions == "object" && Object.assign($.guillotineOptions, f.guillotineOptions), f.stackHeight !== void 0) {
          const k = typeof f.stackHeight == "string" ? parseFloat(f.stackHeight) : f.stackHeight;
          $.stackHeight = k;
        }
        f.efficiencyOptions !== void 0 && typeof f.efficiencyOptions == "object" && Object.assign($.efficiencyOptions, f.efficiencyOptions), f.options !== void 0 && typeof f.options == "object" && (f.options.stockSelection !== void 0 && ($.options.stockSelection = f.options.stockSelection), f.options.stackingMode !== void 0 && ($.options.stackingMode = f.options.stackingMode), f.options.minSpacing !== void 0 && ($.options.minSpacing = f.options.minSpacing));
      }
      if (d?.options) {
        const f = d.options;
        ka(f);
        const k = ["stockType", "bladeWidth"];
        if (!d.saw && !c?.stockFilterEnabled)
          fe("error", `Saw configuration is required. Missing properties: ${k.join(", ")}`);
        else if (d.saw) {
          const Q = k.filter((pe) => !(pe in d.saw));
          Q.length > 0 && fe("error", `Missing required saw properties: ${Q.join(", ")}`), (d.saw.cutType === "guillotine" || d.saw.cutType === "beam") && !("cutPreference" in d.saw) && fe("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const F = ["enable", "colors"];
        for (const Q in f)
          F.includes(Q) || (I[Q] = f[Q]), Q in ve && ve[Q](f[Q]);
      }
      if (d.options.colors && "colors" in ve && ve.colors(d.options.colors), d.banding) {
        const f = d.banding;
        "locations" in f && f.locations && (Bt.locations = f.locations), "groups" in f && f.groups && (Bt.groups = f.groups), "rules" in f && f.rules && (Bt.rules = f.rules);
      }
      if (d.finish) {
        const f = d.finish;
        "locations" in f && f.locations && (ft.locations = f.locations), "groups" in f && f.groups && (ft.groups = f.groups), "rules" in f && f.rules && (ft.rules = f.rules);
      }
      if (d.planing) {
        const f = d.planing;
        "locations" in f && f.locations && (pt.locations = f.locations), "groups" in f && f.groups && (pt.groups = f.groups), "rules" in f && f.rules && (pt.rules = f.rules);
      }
      d.partRules && (on.value = d.partRules), d.customValidation && (hn.value = d.customValidation), Oi("banding", d), Oi("finish", d), Oi("planing", d), vt(d), us(d), r.inputShapes.value.length && gs(), dt.value = !0, _.debug && fe("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), gt(() => {
        se.value && !no() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), d.parts?.length && gt(() => {
        fe("log", ["loading parts via init..."]), r.inputShapes.value.length = 0;
        let f = 0;
        for (const F of d.parts) {
          const Q = _n(F);
          Q ? Q.issues?.length && fe("log", [`SmartCut - issues found while importing part at index ${f}`, Q.issues]) : fe("log", [`SmartCut - error loading part at index ${f}`, F]), f++;
        }
        r.inputShapes.value.flatMap((F) => Yi(F.issues)).length && J({
          type: "error",
          message: ye("errors.general.issues_found")
        }), fe("log", [`loaded ${r.inputShapes.value.length} parts via init`]);
      });
    }, te = (c, d = !1) => {
      vn.value[c] = d;
    }, lt = (c) => c ? Fl(c)?.toLowerCase() : null, Ee = (c, d, g) => {
      try {
        if (!c || !d) return;
        const k = g !== null && g !== "" && g !== void 0 && !["orientationLock", "grain"].includes(d), F = (oe, we) => {
          if (!G(oe.autoId, we)) {
            for (const [Ve, ht] of Object.entries(we))
              Vi(oe, Ve, ht);
            oe.isNew || oe.validate({ fields: Object.keys(we) });
          }
        }, Q = (oe, we, Ke) => {
          const Ve = we ?? oe.material, ht = Ke ?? oe.t, Fi = r.inputStock.value.find((vs) => {
            const ho = !Ve || vs.material === Ve, go = ht == null || me({ v: vs.t }) === me({ v: ht });
            return ho && go;
          });
          return Fi ? { l: me({ v: Fi.l }), w: me({ v: Fi.w }) } : null;
        };
        if (d === "material" && (!g || g === "")) {
          const oe = { material: null, t: null };
          $.stockType === "linear" && (oe.w = null), F(c, oe);
          return;
        }
        if (d === "material" && g && be.value?.length) {
          const oe = be.value.find((we) => we.name === g);
          if (oe) {
            const we = { material: g };
            if (c.t != null) {
              const Ke = me({ v: c.t });
              !oe.thicknesses.some((Ve) => me({ v: Ve }) === Ke) && oe.thicknesses.length > 0 && (we.t = me({ v: oe.thicknesses[0] }));
            }
            if ($.stockType === "linear" && c.w != null && oe.widths) {
              const Ke = me({ v: c.w });
              !oe.widths.some((Ve) => me({ v: Ve }) === Ke) && oe.widths.length > 0 && (we.w = me({ v: oe.widths[0] }));
            }
            F(c, we), cn(c, oe);
            return;
          }
        }
        if (d === "fullStock")
          if (g === !0) {
            const oe = Q(c);
            if (oe) {
              F(c, { fullStock: !0, l: oe.l, w: oe.w });
              return;
            }
          } else {
            F(c, { fullStock: !1, l: null, w: null });
            return;
          }
        if ((d === "material" || d === "t") && c.fullStock) {
          const oe = Q(
            c,
            d === "material" ? g : void 0,
            d === "t" ? g : void 0
          );
          if (oe) {
            F(c, { [d]: g, l: oe.l, w: oe.w });
            return;
          }
        }
        if (c.isNew)
          if (k)
            c.isNew = !1;
          else {
            Vi(c, d, g);
            return;
          }
        let pe;
        if (d.includes(".")) {
          const oe = d.split("."), we = oe[0], Ke = oe.slice(1).join("."), ht = { ...c[we] || {} };
          Vi(ht, Ke, g), pe = { [we]: ht };
        } else
          pe = { [d]: g };
        F(c, pe), d === "t" && $.stockType === "linear" && be.value?.length && c.material && gt(() => {
          const oe = cs(c);
          if (oe.length > 0 && c.w != null) {
            const we = me({ v: c.w });
            oe.some((Ke) => me({ v: Ke }) === we) || F(c, { w: me({ v: oe[0] }) });
          }
        });
      } catch (f) {
        console.error("[CHECKOUT] Error updating field:", f);
      }
    }, qe = () => {
    }, Ue = (c, d) => {
      c?.isNew && (c.isNew = !1), c.validate({ fields: [d] }), ["l", "w", "t"].includes(d) && At(c);
    }, At = (c) => {
      if (on.value && c && !c.isNew && !(!c.l && !c.w))
        try {
          const d = Hu(c, on.value);
          if (c.issues && (c.issues = c.issues.filter((g) => !g.category?.includes("part"))), !d.valid && d.violations.length > 0)
            for (const g of d.violations) {
              const f = Ku(g), k = g.dimension === "longSide" ? "l" : g.dimension === "shortSide" ? "w" : null;
              new Tt({
                item: c,
                type: "error",
                category: ["part"],
                field: k ? [[k]] : [],
                message: f,
                shouldTranslate: !1
              });
            }
        } catch (d) {
          console.error("[CHECKOUT] Error validating part:", d);
        }
    }, vt = (c) => {
      if (Xt(I, ["enable", "machining"]) && c?.machining) {
        for (const d in ot)
          c.machining[d] && (ot[d] = c.machining[d]);
        if (["holes", "hingeHoles"].forEach((d) => {
          c?.machining?.[d] && (ot[d].enabled = c?.machining?.[d].enabled);
        }), c?.machining?.corners?.types?.length && (ot.corners.enabled = !0, ot.corners.types = c.machining.corners.types), c.banding && c?.options?.enable?.banding) {
          if (!Ae) return;
          ot.banding = {
            enabled: !0
          }, Ae.options.length && (ot.banding.options = Ae.options), Ae.labels.length && (ot.banding.labels = Ae.labels), As(Ae.pricing) && (ot.banding.pricing = Ae.pricing);
        }
      }
    }, In = (c = null) => {
      he.value = c, c && Be(c) && c.l && c.w ? Se.value = !0 : alert(ye("machining.enter_dimensions_first"));
    }, bt = () => {
      Se.value = !1;
    }, On = (c = []) => {
      if (Ne.value = [], pn.value = [], te("t", !1), !!c.length) {
        for (const d of c)
          if (d?.t)
            if (typeof d.t == "string" && d.t.includes(",")) {
              const g = ds(d.t, !0);
              g.length === 2 ? (Ja(g), te("t", !0), d.t = Ne.value[0]) : fe("error", "bonded thickness found which does not have 2 options");
            } else Ne.value.includes(d.t) || Ne.value.push(d.t);
        Ne.value.length > 1 && te("t", !0);
      }
    }, yn = (c = []) => {
      if (Le.value = [], !c.length) {
        te("w", !1);
        return;
      }
      for (const d of c) {
        if (!d?.w) continue;
        const g = me({ v: d.w });
        Le.value.includes(g) || Le.value.push(g);
      }
      Le.value.length >= 1 ? te("w", !0) : te("w", !1);
    }, Ha = (c) => {
      if (!c) return { thicknesses: [], bondedThicknesses: [] };
      if (!be.value?.length)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      if (!c.material)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      const d = be.value.find((k) => k.name === c.material);
      if (!d)
        return {
          thicknesses: Ne.value,
          bondedThicknesses: []
        };
      const g = [...d.thicknesses], f = [];
      for (let k = 0; k < g.length; k++) {
        const F = g[k], Q = ds(F), pe = [];
        if (Q.length) {
          for (const oe of Q)
            g[k] = oe, pe.push(k);
          k++;
        }
        pe.length && f.push(pe);
      }
      return {
        thicknesses: g,
        bondedThicknesses: f
      };
    }, cs = (c) => {
      if (!c) return [];
      if (!be.value?.length || !c.material)
        return Le.value;
      const d = be.value.find((g) => g.name === c.material);
      if (!d)
        return Le.value;
      if (c.t != null && r.inputStock?.value?.length) {
        const g = me({ v: c.t }), f = /* @__PURE__ */ new Set();
        for (const k of r.inputStock.value)
          k.material?.toUpperCase() === c.material && me({ v: k.t }) === g && k.w != null && f.add(me({ v: k.w }));
        if (f.size > 0)
          return Array.from(f).sort((k, F) => k - F);
      }
      return d.widths || Le.value;
    }, Za = (c) => {
      const d = { banding: !1, finish: !1, planing: !1, machining: !1 }, g = { banding: !0, finish: !0, planing: !0, machining: !0 }, f = (pe, oe) => pe.some((we) => we.extras?.[oe]?.length), k = (pe) => ({
        banding: !f(pe, "banding"),
        finish: !f(pe, "finish"),
        planing: !f(pe, "planing"),
        machining: !f(pe, "machining")
      }), F = r.inputStock.value.some((pe) => pe.extras);
      if (!c?.material)
        return be.value?.length || F ? g : d;
      const Q = c.material.toUpperCase();
      if (be.value?.length) {
        const pe = be.value.find((oe) => oe.name?.toUpperCase() === Q);
        if (pe?.extras)
          return {
            banding: !pe.extras.banding?.length,
            finish: !pe.extras.finish?.length,
            planing: !pe.extras.planing?.length,
            machining: !pe.extras.machining?.length
          };
      }
      if (F) {
        const pe = r.inputStock.value.filter((oe) => oe.material?.toUpperCase() === Q);
        if (pe.some((oe) => oe.extras))
          return k(pe);
      }
      return d;
    }, us = (c) => {
      if (console.log("[initMaterialsThicknesses] called, stock count:", c?.stock?.length, "materials:", c?.stock?.map((d) => ({ material: d.material, t: d.t, db_id: d.db_id, code: d.code }))), c?.stock?.some((d) => d?.material)) {
        be.value = [], Ne.value = [], pn.value = [];
        const d = /* @__PURE__ */ new Map();
        for (const f of c.stock) {
          if (!f.material) continue;
          const k = f.material.toUpperCase();
          d.has(k) || d.set(k, { db_id: f.db_id, code: f.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), f.t != null && d.get(k)?.thicknesses.add(me({ v: f.t })), $.stockType === "linear" && f.w != null && d.get(k)?.widths.add(me({ v: f.w }));
        }
        be.value = Array.from(d.entries()).map(([f, k]) => {
          const F = {
            name: f,
            db_id: k.db_id,
            code: k.code,
            thicknesses: Array.from(k.thicknesses).sort((Q, pe) => Q - pe)
          };
          return $.stockType === "linear" && k.widths.size > 0 && (F.widths = Array.from(k.widths).sort((Q, pe) => Q - pe)), F;
        });
        const g = /* @__PURE__ */ new Set();
        for (const f of be.value)
          for (const k of f.thicknesses)
            g.add(me({ v: k }));
        if (Ne.value = Array.from(g).sort((f, k) => f - k), $.stockType === "linear") {
          const f = /* @__PURE__ */ new Set();
          for (const k of be.value)
            if (k.widths)
              for (const F of k.widths)
                f.add(me({ v: F }));
          Le.value = Array.from(f).sort((k, F) => k - F);
        }
        be.value.length > 1 ? te("material", !0) : te("material", !1), Ne.value.length > 1 ? te("t", !0) : te("t", !1), $.stockType === "linear" && Le.value.length > 1 ? te("w", !0) : $.stockType === "linear" && te("w", !1);
      } else
        On(c.stock);
      $.stockType === "linear" && !be.value?.length && yn(c.stock), console.log("[initMaterialsThicknesses] result - materials:", be.value, "thicknesses:", Ne.value);
    }, Ka = (c) => {
      if (!c?.length) {
        be.value = [], Ne.value = [], Le.value = [];
        return;
      }
      if (c.some((g) => g?.material)) {
        const g = /* @__PURE__ */ new Map();
        for (const k of c) {
          if (!k.material) continue;
          const F = k.material.toUpperCase();
          g.has(F) || g.set(F, { db_id: k.db_id, code: k.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), k.t != null && g.get(F)?.thicknesses.add(me({ v: k.t })), $.stockType === "linear" && k.w != null && g.get(F)?.widths.add(me({ v: k.w }));
        }
        be.value = Array.from(g.entries()).map(([k, F]) => {
          const Q = {
            name: k,
            db_id: F.db_id,
            code: F.code,
            thicknesses: Array.from(F.thicknesses).sort((pe, oe) => pe - oe)
          };
          return $.stockType === "linear" && F.widths.size > 0 && (Q.widths = Array.from(F.widths).sort((pe, oe) => pe - oe)), Q;
        });
        const f = /* @__PURE__ */ new Set();
        for (const k of be.value)
          for (const F of k.thicknesses)
            f.add(me({ v: F }));
        if (Ne.value = Array.from(f).sort((k, F) => k - F), $.stockType === "linear") {
          const k = /* @__PURE__ */ new Set();
          for (const F of be.value)
            if (F.widths)
              for (const Q of F.widths)
                k.add(me({ v: Q }));
          Le.value = Array.from(k).sort((F, Q) => F - Q);
        }
        te("material", be.value.length > 1), te("t", Ne.value.length > 1), $.stockType === "linear" && te("w", Le.value.length > 1);
      } else
        On(c), $.stockType === "linear" && yn(c);
      console.log("[rebuildMaterialsFromStock] result - materials:", be.value, "thicknesses:", Ne.value);
    }, Ja = (c, d = null) => {
      if (!Array.isArray(c)) {
        fe("error", "addBondedThicknesses expects an array");
        return;
      }
      const g = [];
      for (let f of c)
        I.numberFormat === "decimal" && (f = parseFloat(f)), Ne.value.push(f), d && d.thicknesses.push(f), g.push(Ne.value.length - 1);
      pn.value.push(g);
    }, Ya = (c) => {
      const { thicknesses: d } = Ha(c);
      return d?.length ? d.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, Xa = (c) => {
      const d = cs(c);
      return d?.length ? d.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, ds = (c, d = !1) => {
      if (typeof c == "string" && c.includes(",")) {
        const g = c.split(",");
        if (g.length === 2) {
          const f = parseFloat(g[0]), k = parseFloat(g[1]);
          !isNaN(f) && !isNaN(k) && k !== f * 2 && J({
            type: "warning",
            message: `Bonded thickness "${c}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return d ? g.map((f) => me({ v: f })) : g;
      }
      return [];
    }, Qa = () => {
      We.value ? to() : eo();
    }, eo = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), We.value = !0;
    }, to = () => {
      document.exitFullscreen && document.exitFullscreen(), We.value = !1;
    }, no = () => {
      if (Je.value?.api?.whiteLabel) return !0;
      let c = !0;
      const d = document.querySelector("#smartcut-checkout a#credit");
      if (!d) return c = !1;
      const g = window.getComputedStyle(d);
      return g.display === "none" || g.display === "hidden" || g.opacity === "0" || g.color === "transparent" || g.position !== "absolute" || g.color !== "#4e4e4e" && g.color !== "rgb(78, 78, 78)" ? c = !1 : (Mt.value = c, c);
    }, Ci = T(() => typeof _.findExtrasPrice == "function"), fs = (c, d) => {
      let g, f;
      switch (d) {
        case "banding":
          g = Ae.options, f = Ae.labels;
          break;
        case "finish":
          g = De.options, f = De.labels;
          break;
        case "planing":
          g = Te.options, f = Te.labels;
          break;
        default:
          g = [], f = [];
      }
      Yt(c, d, g, f);
    }, ps = (c) => {
      const d = Object.keys(c);
      return Math.max(...d.map((f) => f.split("|").length));
    }, Ln = (c, d, g) => {
      if (!c)
        return [];
      if (g > 0 && !d[g - 1])
        return [];
      const f = /* @__PURE__ */ new Set();
      for (const F of Object.keys(c)) {
        const Q = F.split("|");
        if (Q.length > g) {
          let pe = !0;
          for (let oe = 0; oe < g; oe++) {
            const we = d[oe], Ke = Q[oe];
            if (we && we !== Ke) {
              pe = !1;
              break;
            }
          }
          pe && f.add(Q[g]);
        }
      }
      return Array.from(f);
    }, Pi = (c, d, g, f) => {
      let k, F;
      switch (d) {
        case "banding":
          k = Ae.options, F = Ae.labels;
          break;
        case "finish":
          k = De.options, F = De.labels;
          break;
        case "planing":
          k = Te.options, F = Te.labels;
          break;
        default:
          k = [], F = [];
      }
      return Ni(c, d, g, f, k, F);
    }, io = (c, d, g) => {
      let f, k;
      switch (d) {
        case "banding":
          f = Ae.options, k = Ae.labels;
          break;
        case "finish":
          f = De.options, k = De.labels;
          break;
        case "planing":
          f = Te.options, k = Te.labels;
          break;
        default:
          f = [], k = [];
      }
      return Ni(c, d, g, _.findExtrasPrice, f, k);
    }, so = z({}), ao = (c) => {
      const d = et.value.findIndex((g) => g.shapeId === c.shapeId);
      d !== -1 ? et.value[d] = c : et.value.push(c), window.smartcutImages = et.value;
    }, oo = (c) => {
      et.value = et.value.filter((d) => d.shapeId !== c), window.smartcutImages = et.value;
    }, lo = (c) => {
      kt.value = kt.value === c ? null : c;
    }, Ai = (c = 1) => {
      for (let d = c; d--; ) {
        let g = {
          l: null,
          w: $.stockType === "linear" && Le.value.length === 1 ? Le.value[0] : null,
          t: Ne.value.length ? Ne.value[0] : null,
          q: 1,
          material: be.value?.length === 1 ? be.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const k = r.inputShapes.value[r.inputShapes.value.length - 1];
          g.material = k.material, g.t = k.t, $.stockType === "linear" && k.w && (g.w = k.w);
        }
        const f = A(g);
        f && (Ae?.labels?.length && Yt(f, "banding", Ae.options, Ae.labels), De?.labels?.length && Yt(f, "finish", De.options, De.labels), Te?.labels?.length && Yt(f, "planing", Te.options, Te.labels));
      }
    }, _n = (c = {}) => {
      const d = {
        q: 1,
        // Always set quantity to 1
        ...c
      }, g = A(d);
      return g && ($.stockType === "linear" && Le.value.length === 1 && !g.w && (g.w = Le.value[0]), Ne.value.length && !g.t && (g.t = Ne.value[0]), be.value?.length === 1 && !g.material && (g.material = be.value[0].name), Ae?.labels?.length && Yt(g, "banding", Ae.options, Ae.labels), De?.labels?.length && Yt(g, "finish", De.options, De.labels), Te?.labels?.length && Yt(g, "planing", Te.options, Te.labels)), g;
    }, ro = (c) => {
      if (Ne.value.length)
        for (const d of c) {
          if (!d.t) return;
          const g = Ne.value.findIndex(
            (F) => me({ v: F }) === d.t
          ), f = pn.value.find((F) => F.includes(g));
          if (!f) return;
          const k = Math.min(
            ...f.map((F) => Ne.value[F])
          );
          me({ v: d.t }) > k && (d.q = Number(d.q) * (me({ v: d.t }) / k), d.notes = `Bond to form ${d.t.valueOf()}`, d.t = k);
        }
    }, hs = () => {
      Fe(), ne(null), Y.stockList.value = [], Y.shapeList.value = [], Y.cutList.value = [];
    }, Ii = () => {
      r.inputShapes.value.length = 0, _.inputType !== "formula" && gt(() => Ai());
    }, cn = (c, d) => {
      c.stock = {
        db_id: d.db_id,
        code: d.code,
        material: d.name,
        thickness: me({ v: c.t })
      };
    }, gs = () => {
      for (const c of r.inputShapes.value) {
        const d = c.stock, g = c.material?.toUpperCase(), f = (d?.db_id ? be.value.find((k) => k.db_id && k.db_id === d.db_id) : null) || (d?.code ? be.value.find((k) => k.code && k.code === d.code) : null) || (g ? be.value.find((k) => k.name === g) : null);
        if (f)
          c.material = f.name, cn(c, f), f.thicknesses.includes(me({ v: c.t })) || (c.t = me({ v: f.thicknesses[0] }), cn(c, f));
        else if (d?.db_id || d?.code) {
          console.log("[syncShapeMaterials] skipping shape with pending stock ref:", d?.db_id || d?.code, "- material not yet available");
          continue;
        } else if (be.value?.length === 1) {
          const k = be.value[0];
          c.material = k.name, k.thicknesses.includes(me({ v: c.t })) || (c.t = me({ v: k.thicknesses[0] })), cn(c, k);
        } else if (be.value?.length > 1 && c.t) {
          const k = be.value.find((F) => F.thicknesses.some((Q) => me({ v: Q }) === me({ v: c.t })));
          k ? (c.material = k.name, cn(c, k)) : (c.material = be.value[0].name, c.t = me({ v: be.value[0].thicknesses[0] }), cn(c, be.value[0]));
        } else be.value?.length > 1 ? (c.material = be.value[0].name, c.t = me({ v: be.value[0].thicknesses[0] }), cn(c, be.value[0])) : !c.t && r.inputStock.value[0]?.t && (c.t = me({ v: r.inputStock.value[0].t }));
      }
    }, co = async () => {
      if (fe("calculating"), _e.value) return !1;
      _e.value = !0, an.value = !1, gs();
      const c = await $u({
        t: ye,
        partTrim: I.partTrim,
        maxShapes: I.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Ae.pricing,
        finishPricing: De.pricing,
        planingPricing: Te.pricing,
        findExtrasPrice: _.findExtrasPrice,
        extrasValidationRules: bi.value,
        extrasLocationGroups: {
          banding: Bt.groups,
          finish: ft.groups,
          planing: pt.groups
        },
        onLimit: () => {
          J({
            type: "error",
            message: ye("limits.max_parts") + " " + I.maxParts
          });
        }
      });
      if (on.value)
        for (const F of r.inputShapes.value)
          At(F);
      const d = r.inputShapes.value.flatMap((F) => F.issues || []).filter((F) => F.type === "error" && F.category?.includes("part") && !F.category?.includes("extras"));
      if (d.length > 0) {
        J({
          type: "error",
          message: ye("errors.validation.inputs_issue", { 0: "part" }),
          additional: d.map((F) => F.message)
        }), fe("validation-error"), _e.value = !1;
        return;
      }
      if (!c.valid) {
        fe("validation-error"), _e.value = !1;
        return;
      }
      hs(), r.inputShapes.value.forEach((F, Q) => {
        F.createId(Q);
      }), r.inputStock.value.forEach((F, Q) => {
        F.createId(Q);
      });
      const g = r.inputShapes.value.map((F) => D(F)).filter(Boolean);
      if (g.length !== r.inputShapes.value.length)
        return J({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), _e.value = !1, !1;
      ro(g), _.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((F) => ({ l: F.l, w: F.w })),
        "parts",
        g.map((F) => ({ l: F.l, w: F.w }))
      );
      const f = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: g.map((F) => F.toData()),
        inputStock: r.inputStock.value.map((F) => F.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: zt,
        extrasOptions: Ce(),
        source: "checkout",
        sourceVersion: "4.1.4"
      };
      if (hn.value?.enabled && hn.value?.rules?.length > 0) {
        const F = Du(
          hn.value.rules,
          r.inputShapes.value.map((Q) => Q.toData())
        );
        if (!F.valid) {
          for (const Q of F.errors) {
            const pe = Q.partName ? `Part "${Q.partName}"` : `Part ${Q.partIndex + 1}`;
            J({
              type: "error",
              message: `${pe}: ${Q.message}`
            });
          }
          _e.value = !1;
          return;
        }
      }
      fe("before-calculate", f);
      const k = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: f,
          error: null
        }
      });
      if (window.dispatchEvent(k), k.defaultPrevented) {
        k.detail.error && J({
          type: "error",
          message: k.detail.error
        }), _e.value = !1;
        return;
      }
      await w.connect(), w.emit("calculate", f);
    }, Oi = (c, d) => {
      if (te(c, !1), !c || !d || !d?.[c] || !Xt(I, ["enable", c]))
        return;
      const g = [c, "pricing"];
      if (!Is(d, g)) {
        fe("error", `${g.join(".")} not found in sent data`);
        return;
      }
      const f = Xt(d, g);
      if (typeof f != "object") {
        fe("error", `${g.join(".")} data must be an object`);
        return;
      }
      if (!As(f)) {
        fe("error", `if provided, ${g.join(".")} data must contain some values`);
        return;
      }
      const k = Object.keys(f), F = Object.values(f);
      if (!k.length) {
        fe("error", `no ${g.join(".")} pricing found`);
        return;
      }
      const Q = /,/;
      for (const Ve of k)
        if (Q.test(Ve)) {
          fe("error", `${g} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (F.some((Ve) => isNaN(Ve))) {
        fe("error", `${g} values must be a number`);
        return;
      }
      const pe = ps(f), oe = [c, "labels"];
      let we = [];
      if (Is(d, oe))
        we = Xt(d, oe);
      else {
        fe("error", `${oe.join(".")} not found`);
        return;
      }
      if (!we) {
        fe("error", `${oe.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(we)) {
        fe("error", `${oe.join(".")} data must be an array`);
        return;
      }
      if (!we?.length) {
        fe("error", `if provided, ${oe.join(".")} data must contain values`);
        return;
      }
      if (we.length !== pe) {
        fe("error", `${oe.join(".")} length (${we.length}) must match the number of levels in ${g.join(".")} (${pe})`);
        return;
      }
      const Ke = Xt(d, [c, "displayNames"]) || void 0;
      switch (c) {
        case "banding": {
          Ae.labels = we, Ae.pricing = f;
          const Ve = Li(f);
          Ae.options = Ve, U("banding", Ve, we, f, Ke);
          break;
        }
        case "finish": {
          De.labels = we, De.pricing = f;
          const Ve = Li(f);
          De.options = Ve, U("finish", Ve, we, f, Ke);
          break;
        }
        case "planing": {
          Te.labels = we, Te.pricing = f;
          const Ve = Li(f);
          Te.options = Ve, U("planing", Ve, we, f, Ke);
          break;
        }
      }
      if (zn.value = Ce(), te(c, !0), !!r.inputShapes.value?.length)
        for (const Ve of r.inputShapes.value)
          fs(Ve, c);
    }, Li = (c) => {
      const d = [], g = Object.keys(c), f = ps(c);
      for (let k = f; k--; ) d.push(/* @__PURE__ */ new Set());
      for (const k of g)
        k.split("|").forEach((Q, pe) => d[pe].add(Q));
      for (let k = 0; k < f; k++)
        d[k] = Array.from(d[k]);
      return d;
    }, Hn = (c, d) => {
      if (!d) return;
      c !== "info" && Object.keys(Ye).forEach((f) => {
        f !== c && f !== "info" && (Ye[f] = null);
      });
      const g = r.inputShapes.value.indexOf(d);
      Ye[c] === g ? (he.value = null, Ye[c] = null, so.value[c] = void 0) : (he.value = d, Ye[c] = g);
    }, ms = (c) => {
      if (fe("log", ["load event received"]), !dt.value) {
        fe("log", ["load event received"]);
        return;
      }
      uo(c.detail);
    }, uo = (c) => {
      if (fe("log", ["loading parts..."]), !c || !c?.inputs?.parts?.length) {
        fe("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let d = 0;
      for (const f of c.inputs.parts) {
        const k = _n(f);
        k ? k.issues?.length && fe("log", [`SmartCut - issues found while importing part at index ${d}`, k.issues]) : fe("log", [`SmartCut - error loading part at index ${d}`, f]), d++;
      }
      r.inputShapes.value.flatMap((f) => Yi(f.issues)).length && J({
        type: "error",
        message: ye("errors.general.issues_found")
      }), fe("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, fo = (c) => {
      r.inputShapes.value.length = 0, gt(() => {
        for (const d of c)
          d.t = r.inputStock.value?.[0]?.t ?? null, $.stockType === "linear" && Le.value.length === 1 && !d.w && (d.w = Le.value[0]), _n(d);
      });
    };
    Re(() => _.inputStock, (c) => {
      if (console.log("[inputStock watcher] triggered, stock count:", c?.length), console.log("[inputStock watcher] stock materials:", c?.map((g) => ({ material: g.material, t: g.t, db_id: g.db_id }))), hs(), Array.isArray(c) || console.warn("SmartCut - stock must be passed as an array"), !c?.length) return;
      r.inputStock.value.length = 0;
      const d = c.map((g) => g.toData());
      console.log("[inputStock watcher] toData materials:", d.map((g) => ({ material: g.material, t: g.t }))), Ka(d);
      for (const g of c)
        j({
          ...g.toData(),
          autoAdd: !0
        }) || (console.error("Failed to add stock item:", g), J({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (r.inputStock.value.length) {
        r.inputShapes.value.length || _.inputType !== "formula" && gt(() => {
          r.inputShapes.value.length || Ai();
        });
        const g = p(r.inputSaw.value);
        g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), J({
          type: "error",
          message: ye("errors.validation.stock_issue"),
          additional: g.map((f) => f.message)
        }));
      }
    }, { immediate: !0 }), Re(r.inputShapes, (c) => {
      fe("inputs-changed"), c.forEach((d) => {
        $.stockType === "linear" && Le.value.length && (!d.w || !Le.value.includes(me({ v: d.w }))) && (d.w = Le.value[0]);
        const g = be.value.find((f) => f.name === d.material);
        g && (g.thicknesses.includes(me({ v: d.t })) || (d.t = me({ v: g.thicknesses[0] })));
      });
    }, { deep: !0 }), Re(() => de.value.length, (c, d) => {
      if (ln.value) {
        if (c > d) {
          const g = Math.ceil(c / x.value);
          X.value < g && (X.value = g);
        } else if (c < d) {
          const g = Math.ceil(c / x.value);
          X.value > g && (X.value = Math.max(1, g));
        }
      }
    }), Re(() => I.numberFormat, (c) => {
      y(c);
    }), Re(r.inputStock, (c) => {
      $.stockType === "linear" && yn(c.map((d) => d.toData()));
    }, { deep: !0 }), Re(() => $, (c) => {
      r.inputSaw.value = new Rt(c);
    }, { deep: !0 }), fn(async () => {
      if (Ct.value) return;
      Ct.value = !0;
      const c = new URL(window.location.href), d = c.searchParams.toString(), g = c.origin + c.pathname + (d ? `?${d}` : "");
      St.value !== g && Ii(), St.value = g, Xe.value = I.locale, await w.connect(), w.emit("getUserFromDomain"), window.addEventListener("smartcut/load", ms);
    });
    const po = () => {
      w && w.disconnect();
    };
    return gi(() => {
      window.removeEventListener("smartcut/load", ms), po(), delete window.smartcutCheckout;
    }), e({
      init: ke,
      clear: Ii,
      getAvailablePricingOptions: Ln,
      getExtrasPrice: io,
      formatPrice: _.formatPrice,
      findExtrasPrice: _.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: fs,
      createAndAddInputShape: _n,
      initMaterialsThicknesses: us
    }), (c, d) => {
      const g = Wn("FontAwesomeIcon");
      return B(), K("div", Hd, [
        ue("", !0),
        dt.value ? ue("", !0) : (B(), $e(Xs, {
          key: 1,
          size: 50,
          "show-number": !1
        })),
        he.value?.machining && Se.value ? (B(), $e(L(s), {
          key: 2,
          "input-shape": he.value,
          "onUpdate:inputShape": d[0] || (d[0] = (f) => he.value = f),
          translate: !0,
          options: ot,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": L(Ni),
          "get-available-pricing-options": Ln,
          "format-price": t.formatPrice,
          onClose: bt
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : ue("", !0),
        dt.value ? (B(), K("section", {
          key: 3,
          id: "smartcut-checkout",
          class: tt(["smartcut-content", { fullscreen: We.value }]),
          style: xt(V.value)
        }, [
          Pt.value && !t.readonly ? (B(), K("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: d[1] || (d[1] = (f) => Qa())
          }, [
            Ge(g, { icon: ["fass", "expand"] }),
            ai(" " + Oe(L(ye)("general.full_screen")), 1)
          ])) : ue("", !0),
          se.value ? (B(), K("a", {
            key: 1,
            id: "credit",
            style: R,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, Oe(L(Ll)(L(ye)("general.powered_by"))), 1)) : ue("", !0),
          re("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: xt({ "grid-template-columns": yi.value })
          }, [
            L(r).inputShapes.value.length ? (B(), K("div", Zd, [
              d[16] || (d[16] = re("div", { class: "cell id" }, null, -1)),
              (B(!0), K(at, null, qt(bn.value, (f) => (B(), K("div", {
                key: f.name,
                class: tt(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(f.name) || f.type === "boolean" }])
              }, Oe(L(ye)(f.label)), 3))), 128)),
              L(je) === "development" && Ki ? (B(), K("div", Kd, " Info ")) : ue("", !0),
              d[17] || (d[17] = re("div", { class: "cell del" }, null, -1))
            ])) : ue("", !0),
            (B(!0), K(at, null, qt(wi.value, (f, k) => (B(), K("div", {
              key: f.autoId,
              class: "row inputs"
            }, [
              re("div", Jd, [
                re("div", {
                  class: "id",
                  style: xt({
                    background: I.colors.partA,
                    color: I.colors.text
                  })
                }, Oe(xi.value + k + 1), 5)
              ]),
              (B(!0), K(at, null, qt(bn.value, (F) => (B(), K("div", {
                key: F.name,
                class: "cell"
              }, [
                f ? (B(), $e(_d, {
                  key: 0,
                  field: F,
                  item: f,
                  index: k,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": I.numberFormat,
                  "orientation-model": I.orientationModel,
                  "stock-grain": L(v)(f),
                  "material-options": be.value?.map((Q) => ({ label: Q.name, value: Q.name })) || [],
                  "thickness-options": F.name === "t" ? Ya(f) : [],
                  "width-options": F.name === "w" && $.stockType === "linear" ? Xa(f) : [],
                  "banding-enabled": Ye.banding === k ? f : null,
                  "full-stock-disabled": f.fullStock && !["material", "t", "q", "fullStock"].includes(F.name),
                  "material-extras-disabled": Za(f),
                  onUpdate: (Q) => Ee(f, F.propertyPath || F.fieldMap || F.name, Q),
                  onValidation: d[2] || (d[2] = (Q, pe) => qe()),
                  onBlur: () => Ue(f, F.name),
                  onOpenBanding: (Q) => Hn("banding", f),
                  onOpenMachining: (Q) => In(f),
                  onOpenFinish: (Q) => Hn("finish", f),
                  onOpenPlaning: (Q) => Hn("planing", f),
                  onOpenImageUpload: (Q) => lo(k)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ue("", !0)
              ]))), 128)),
              L(je) === "development" && Ki ? (B(), K("div", Yd, [
                re("button", {
                  class: tt(["c-btn", { selected: Ye.info === k }]),
                  type: "button",
                  onClick: (F) => Hn("info", f)
                }, " i ", 10, Xd)
              ])) : ue("", !0),
              re("div", Qd, [
                re("button", {
                  disabled: L(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${L(ye)("actions.remove")} ${L(qi)(L(ye)("woodwork.part"))}`,
                  onClick: (F) => L(O)(f.autoId)
                }, [
                  Ge(g, { icon: ["fass", "trash"] })
                ], 8, ef)
              ]),
              Ge(L(i), {
                item: f,
                "num-columns": Ht.value
              }, null, 8, ["item", "num-columns"]),
              Ye.banding === k && Ae.options.length > 0 && Ci.value ? (B(), $e(zi, {
                key: 1,
                shape: f,
                "shape-index": k,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Ae.keys,
                "all-options": Ae.options,
                pricing: Ae.pricing,
                labels: Ae.labels,
                locations: Bt.locations,
                "location-groups": Bt.groups,
                "user-friendly-field-map": L(Bi),
                "part-columns": Ht.value,
                "format-price": t.formatPrice,
                "find-extras-price": _.findExtrasPrice,
                "get-price": Pi,
                "orientation-model": I.orientationModel,
                "stock-grain": L(v)(f),
                "get-available-pricing-options": Ln,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ue("", !0),
              Ye.finish === k && De.options.length > 0 && Ci.value ? (B(), $e(zi, {
                key: 2,
                shape: f,
                "shape-index": k,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": De.keys,
                "all-options": De.options,
                pricing: De.pricing,
                labels: De.labels,
                locations: ft.locations,
                "location-groups": ft.groups,
                "user-friendly-field-map": L(Bi),
                "part-columns": Ht.value,
                "format-price": t.formatPrice,
                "find-extras-price": _.findExtrasPrice,
                "get-price": Pi,
                "orientation-model": I.orientationModel,
                "stock-grain": L(v)(f),
                "get-available-pricing-options": Ln,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ue("", !0),
              Ye.planing === k && Te.options.length > 0 && Ci.value ? (B(), $e(zi, {
                key: 3,
                shape: f,
                "shape-index": k,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": Te.keys,
                "all-options": Te.options,
                pricing: Te.pricing,
                labels: Te.labels,
                locations: pt.locations,
                "location-groups": pt.groups,
                "user-friendly-field-map": L(Bi),
                "part-columns": Ht.value,
                "format-price": t.formatPrice,
                "find-extras-price": _.findExtrasPrice,
                "get-price": Pi,
                "orientation-model": I.orientationModel,
                "stock-grain": L(v)(f),
                "get-available-pricing-options": Ln,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ue("", !0),
              Ye.info === k ? (B(), K("div", {
                key: 4,
                id: "shape-info",
                style: xt({ "grid-column-end": "span " + Ht.value })
              }, [
                re("div", null, Oe(f?.banding), 1),
                re("div", null, Oe(zn.value?.banding?.options || "No options"), 1)
              ], 4)) : ue("", !0),
              kt.value === k ? (B(), $e(L(l), {
                key: 5,
                prefix: (k + 1).toString(),
                "unique-id": f.autoId,
                "shape-id": f.autoId,
                style: xt({ "grid-column-end": "span " + Ht.value }),
                images: et.value,
                onUpdate: ao,
                onRemove: oo
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : ue("", !0)
            ]))), 128))
          ], 4),
          re("div", tf, [
            t.readonly ? ue("", !0) : (B(), K("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${L(ye)("actions.add")} ${L(qi)(L(ye)("woodwork.part"))}`,
              onClick: d[3] || (d[3] = (f) => Ai())
            }, [
              Ge(g, { icon: ["fass", "plus-large"] }),
              ai(" " + Oe(`${L(ye)("actions.add")} ${L(qi)(L(ye)("woodwork.part"))}`), 1)
            ], 8, nf)),
            re("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": L(ye)("actions.calculate"),
              disabled: !L(r).inputStock.value?.length || _e.value,
              onClick: d[4] || (d[4] = (f) => co())
            }, [
              Ge(g, { icon: ["fass", "calculator"] }),
              ai(Oe(L(ye)("actions.calculate")), 1)
            ], 8, sf),
            t.readonly ? ue("", !0) : (B(), K("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": L(ye)("actions.clear"),
              onClick: d[5] || (d[5] = (f) => Ii())
            }, [
              Ge(g, { icon: ["fass", "trash"] })
            ], 8, af)),
            re("div", of, Oe(L(h)) + Oe(I?.maxParts ? "/" + I.maxParts : ""), 1)
          ]),
          ln.value && Vt.value > 1 ? (B(), K("div", lf, [
            re("div", rf, [
              re("button", {
                type: "button",
                class: "c-btn",
                disabled: X.value === 1,
                onClick: Si
              }, [
                Ge(g, { icon: ["fass", "chevrons-left"] })
              ], 8, cf),
              re("button", {
                type: "button",
                class: "c-btn",
                disabled: X.value === 1,
                onClick: ki
              }, [
                Ge(g, { icon: ["fass", "chevron-left"] })
              ], 8, uf),
              re("span", df, Oe(X.value) + " / " + Oe(Vt.value), 1),
              re("button", {
                type: "button",
                class: "c-btn",
                disabled: X.value >= Vt.value,
                onClick: u
              }, [
                Ge(g, { icon: ["fass", "chevron-right"] })
              ], 8, ff),
              re("button", {
                type: "button",
                class: "c-btn",
                disabled: X.value >= Vt.value,
                onClick: b
              }, [
                Ge(g, { icon: ["fass", "chevrons-right"] })
              ], 8, pf)
            ])
          ])) : ue("", !0),
          _t.value && !t.readonly ? (B(), $e(L(a), {
            key: 3,
            ref: "import",
            "number-format": I.numberFormat,
            "custom-fields": mn.value,
            "banding-options": Ae.options,
            "banding-labels": Ae.labels,
            "finish-options": De.options,
            "finish-labels": De.labels,
            onImport: fo
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : ue("", !0),
          ge.value ? (B(), K("div", hf, [
            Pe.value ? (B(), K("div", gf, Oe(Pe.value), 1)) : ue("", !0),
            re("pre", mf, Oe(Nt.value), 1)
          ])) : ue("", !0),
          (I.enable.diagram ? _e.value && !L(ae).complete : _e.value || L(ae).complete) ? (B(), K("div", vf, [
            Ge(Xs, {
              size: 50,
              number: L(ae).shapeCount,
              complete: L(ae).complete,
              "show-number": I.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ue("", !0),
          aa(re("div", bf, [
            L(ee)?.saw?.stockType !== "roll" ? (B(), K("div", yf, Oe(L(ee)?.stack?.number ? L(ee).stack.number : 1), 1)) : ue("", !0),
            Ge(Lc, {
              "element-id": "diagram",
              "number-format": I.numberFormat,
              "decimal-places": I.decimalPlaces,
              colors: I.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [oa, I.enable.diagram && L(ae).complete]
          ]),
          I.enable.diagram && L(xe).length > 1 && L(ae).complete ? (B(), $e(Fr, {
            key: 6,
            ref: "stockNavigation",
            "active-stock-id": L(H),
            "stock-list": L(xe),
            "primary-color": I.colors.stock?.replace("#", ""),
            "secondary-color": I.colors.partA?.replace("#", ""),
            onShowStock: L(ne)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ue("", !0)
        ], 6)) : ue("", !0),
        L(je) === "development" && Ki ? (B(), K("div", wf, [
          Ge(L(o), {
            data: [L(r)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          d[18] || (d[18] = re("div", null, "Result data", -1)),
          Ge(L(o), {
            data: [nt.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ue("", !0)
      ]);
    };
  }
}), Nf = /* @__PURE__ */ mi(xf, [["__scopeId", "data-v-b51c161d"]]);
export {
  Nf as E,
  rs as F,
  Dn as _,
  Sa as a,
  zi as b,
  Mf as c,
  Od as h,
  $f as m,
  Na as u
};

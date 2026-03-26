import { r as Z, w as Ue, c as $, Y as pt, Z as lt, W as To, n as ht, K as Fn, d as Xe, o as dn, G as ha, _ as Mo, I as At, a as j, b as L, p as We, $ as No, M as Jn, f as H, j as Ie, u as A, e as ae, a0 as xi, t as ue, z as Bo, q as ma, x as yt, F as He, k as tt, D as Vo, a1 as rn, y as Si, A as Do, m as ms, B as Ro, O as os, g as De, l as yn, P as Go, a2 as Ot, s as Qe, h as vn, J as jo, U as qo, v as va, V as _o } from "./vendor-vue-DyIrsOEK.js";
import { be as Re, bf as on, aT as Uo, bb as ba, bg as sn, bh as Wn, bi as ya, bj as wa, bk as ka, bl as Pi, bm as mn, bn as Os, bo as Wo, bp as zo, bq as Ho, br as xa, bs as Sa, bt as ji, bu as Ko, bv as oi, bw as Ci, bx as Zo, ba as li, I as ri, x as $n, b9 as zt, w as En, i as bn, H as Dt, aX as Jo, by as Ls, bz as Yo, b3 as Vn, bA as Dn, b6 as Rn, F as Gn, bB as Fs, bC as $s, bD as Xo, m as Es, A as Qo, _ as el, aR as tl, bE as nl, aQ as Pa, bF as il, a8 as bi, bG as sl, bH as al, aJ as ol, bI as ll, aK as rl, aM as cl, aO as ul, aN as dl, aL as An, c as me, v as ze, bJ as ci, bK as fl, bL as Ca, bM as pl, f as Ut, bN as gl, bO as Ts, t as hl, e as en, y as ml, r as qi, z as vl, q as bl, bP as yl, bQ as ls, b5 as wl, bR as kl, bS as xl, bT as Sl, bU as Pl, bV as Ia, bW as Cl, bX as Il, bY as _i, bZ as Al, b_ as Aa, b$ as Oa, c0 as Ol, c1 as Ll, c2 as Fl, c3 as $l, c4 as El, c5 as Tl, c6 as Ml, c7 as rs, c8 as Nl, c9 as Bl, ca as Vl, cb as Dl, cc as Rl, cd as cn, ce as Ui, cf as Gl, g as an, cg as Ms, ch as Wi, ci as jl, cj as Ns, o as Bs, b as Vs, u as zi, s as Hi } from "./result.zod-CxfvOYCR.js";
import { s as Ki, d as ql, u as _l, l as Zi, b as Ul } from "./i18n-DT7wACvc.js";
import { H as zn, Z as ui, o as K, j as fe, t as _, i as v, q as Ds, I as Rt, J as Wl, n as de, k as Jt, u as _e, m as Pe, K as Rs, L as di, M as zl, N as Hl, O as Gs, Q as Kl, S as fi, T as Ji, U as Yi, V as Xi, l as Zl, h as Oe, W as Jl } from "./vendor-CFKbllLs.js";
import "./vendor-i18next-2OYl82kj.js";
import { f as Yl, d as Xl, l as Vt, e as cs, c as us, i as Ye, r as Bt, g as yi, h as Ql } from "./vendor-d3-DNaL3zcO.js";
import { a as er } from "./vendor-lodash-B8VQpKjD.js";
import { o as tr, f as nr, s as ir, a as sr } from "./vendor-floating-ui-DZfk4g77.js";
import { t as ke } from "./i18n-Ck7sLK64.js";
import { _ as Yn } from "./Launch-DkkhHqxE.js";
import { b as Hn } from "./environment-BeBZzWz6.js";
function La(t, e = "cc") {
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
    for (const [r, g] of Object.entries(l))
      r in t && (a[g] = t[r]);
    for (const [r, g] of Object.entries(s))
      r in t && (a[g] = t[r]);
  } else {
    for (const [r, g] of Object.entries(l))
      g in t && (a[r] = t[g]);
    for (const [r, g] of Object.entries(s))
      g in t && (a[r] = t[g]);
  }
  return a;
}
const Fa = {
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
function ar(t) {
  return t !== 0 && t !== 1 && t !== 2 ? !1 : Fa[t].sidesLMatchShapeL;
}
function or(t) {
  return t !== 0 && t !== 1 && t !== 2 ? [] : Fa[t].affectedExtraTypes;
}
function wi(t = 0, e, n = null, i = null, s = null) {
  if (!Re(n) && !on || i === "stock") return !1;
  let a, o;
  if (Re(n) ? a = n.orientationLock : on(n) ? a = "l" : i === "shape" && (a = s), t === 0 || on(n))
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
function lr(t, e, n = null, i = null, s = null) {
  if (!Re(n) || i === "shape") return !1;
  let a;
  return t === 0 || t === 1 || t === 2 ? wi(t, e, n, i, s) ? "cc" : !1 : a;
}
function rr(t, e = []) {
  if (!t?.length) return [];
  const n = t.map((i) => i && typeof i.getType == "function" ? i : Uo(i)).filter((i) => i instanceof ba);
  return e.length && cr(n, e), n;
}
function cr(t = [], e = []) {
  t.length && e.length && t.forEach((n) => {
    n.shapeIds = n.shapeIds.filter((i) => e.find((s) => s.autoId === i));
  });
}
let un = null;
if (Hn())
  try {
    un = require("~/helpers/applicationSettings").applicationSettings;
  } catch (t) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", t);
  }
function jn(t, e, n = {}) {
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
  if (!Hn()) {
    const o = Z((() => {
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
  if (Hn()) {
    if (!un)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), Z(e);
    const o = Z((() => {
      try {
        const l = un.getString(t);
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
        un.setString(t, r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to save", t, "to ApplicationSettings:", r);
      }
    }, { deep: !0 }), o;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", t, "- using in-memory fallback"), Z(e);
}
function js(t) {
  try {
    return Hn() ? un ? un.getString(t) : null : typeof window < "u" && window.localStorage ? localStorage.getItem(t) : null;
  } catch (e) {
    return console.error(`[getStorageValue] Error getting storage value for key ${t}:`, e), null;
  }
}
function qs(t) {
  try {
    Hn() ? un && un.remove(t) : typeof window < "u" && window.localStorage && localStorage.removeItem(t);
  } catch (e) {
    console.error(`[removeStorageValue] Error removing storage value for key ${t}:`, e);
  }
}
const $a = "cle-extras-config", ur = () => {
  try {
    const t = localStorage.getItem($a);
    return t ? JSON.parse(t) : {};
  } catch {
    return {};
  }
}, dr = (t) => {
  try {
    localStorage.setItem($a, JSON.stringify(t));
  } catch {
  }
}, Kn = Z(ur()), ds = (t, e) => {
  Kn.value[t] = e, dr(Kn.value);
}, ln = (t) => Kn.value[t] || null, fr = () => Kn.value;
let _s = !1;
const pr = () => {
  _s || (Zo({
    getExtrasConfig: ln,
    getAllExtrasConfigs: fr,
    setExtrasConfig: ds
  }), _s = !0);
}, gr = (t, e) => {
  const n = ln(t);
  if (!n || !n.options || n.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const i = n.options[0], s = Array.isArray(i) && typeof i[0] == "string" ? i : [];
  if (s.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = (r) => n.options.length > 1 ? r.includes("|") ? n.pricing && Object.keys(n.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(n.pricing, r) ? !0 : Object.keys(n.pricing).some((y) => y.startsWith(r + "|") || y === r) : r.split("|").every((m, y) => {
    if (y >= n.options.length) return !1;
    const p = n.options[y];
    return Array.isArray(p) && typeof p[0] == "string" && p.includes(m);
  }) : n.options.some((g) => Array.isArray(g) && typeof g[0] == "string" && g.includes(r)) : s.includes(r), o = /* @__PURE__ */ new Set();
  let l = 0;
  return e.forEach((r) => {
    if (!r.extras?.[t]) return;
    const g = r.extras[t].sides || {};
    Object.entries(g).forEach(([y, p]) => {
      typeof p == "string" && p && !a(p) && (o.add(p), g[y] = "", l++);
    });
    const m = r.extras[t].faces || {};
    Object.entries(m).forEach(([y, p]) => {
      typeof p == "string" && p && !a(p) && (o.add(p), m[y] = "", l++);
    });
  }), {
    cleanedCount: l,
    invalidOptions: Array.from(o)
  };
}, hr = (t) => {
  pr();
  const {
    shape: e,
    extraType: n,
    allOptions: i,
    labels: s,
    userFriendlyFieldMap: a,
    allowCustomNames: o,
    customNames: l = Z([]),
    enablePricing: r = !1,
    pricing: g,
    locations: m = Z([]),
    locationGroups: y = Z([]),
    orientationModel: p = 0,
    getAvailablePricingOptions: F,
    getPrice: I,
    findExtrasPrice: V,
    formatPrice: M
  } = t, D = $(() => To(i) ? i.value : i), z = () => {
    const f = ln(n), S = D.value?.length ? D.value : f?.options || [], G = f?.labels || s;
    sn(e.value, n, S, G, l.value);
  };
  z(), Ue(
    () => e.value?.extras?.[n],
    (f) => {
      if (f) {
        const S = f?.sides || {}, G = f?.options?.sides || {};
        let B = !1;
        for (const [X, le] of Object.entries(S))
          if (typeof le == "string") {
            if (le.includes("|") && !G[X]) {
              B = !0;
              break;
            } else if (le !== "" && !G[X]) {
              B = !0;
              break;
            }
          }
        B && z();
      }
    },
    { immediate: !1 }
  );
  const Y = $(() => Kn.value[n] || null), se = $(() => {
    const f = D.value?.length ? D.value : Y.value?.options || [];
    if (f.length > 1)
      return "multiple";
    const G = (f[0] || []).filter((xe) => typeof xe == "string"), B = (l.value || []).filter((xe) => typeof xe == "string"), le = Array.from(/* @__PURE__ */ new Set([...G, ...B])).length;
    return le === 0 ? "boolean" : le === 1 ? "single" : "multiple";
  }), E = $(() => Ci(n)), N = $(() => m.value && m.value.length > 0 ? m.value.filter((f) => f !== "all" && f !== "faces" && f !== "sides") : E.value), ee = $(() => N.value.filter((f) => Wn(f) === "face")), k = $(() => N.value.filter((f) => Wn(f) === "side")), R = $(() => wa(n)), w = $(() => ya(n)), Q = $(() => ka(n)), ie = () => Y.value?.options && Y.value.options.length > 1, re = (f, S, G) => {
    const { singleOption: B = Te(), operation: X } = G;
    switch (S) {
      case "boolean":
        return !!f;
      case "single":
        return B ? X === "process" || X === "set" ? f && B ? B : "" : f === B ? B : "" : !!f;
      case "multiple":
        return f || "";
      default:
        return f;
    }
  }, ge = (f, S, G) => re(S, G, { operation: "process" }), $e = (f, S, G, B, X, le) => {
    switch (le) {
      case "boolean":
        oi(f, S, G, B, !!X);
        break;
      case "single": {
        const xe = Te();
        oi(f, S, G, B, X ? xe : "");
        break;
      }
      case "multiple":
        oi(f, S, G, B, X || "");
        break;
    }
  }, q = (f, S, G = {}) => {
    const B = G.singleOption || Te();
    return G.allowCustomNames, re(f, S, {
      operation: "get",
      singleOption: B
    });
  }, ne = (f, S, G, B) => {
    switch (B) {
      case "boolean":
        return !!f;
      case "single": {
        const X = Te();
        if (X) {
          const le = S.map((ye) => mn(e.value, n, ye, G)), xe = le.every((ye) => ye === X || ye === !0), Fe = le.every((ye) => !ye || ye === "");
          return xe ? X : Fe ? "" : null;
        }
        return !!f;
      }
      case "multiple":
        return typeof f == "string" ? f : f || "";
      default:
        return f;
    }
  }, J = (f, S, G, B = !1) => {
    if (B)
      f.forEach((X) => et(X, S, G));
    else {
      const X = s[S] || "", le = ge(X, G, se.value);
      f.forEach((xe) => {
        $e(e.value, n, xe, X, le, se.value);
      });
    }
  }, pe = (f, S) => {
    if (ie()) {
      const G = s[S] || "", B = f.map((Fe) => {
        const ye = mn(e.value, n, Fe, G);
        return ye === !0 ? qe(S)[0] || "" : String(ye || "");
      }), X = B[0] || "";
      return B.every((Fe) => Fe === X) ? X : null;
    } else {
      const G = s[S] || "";
      if (se.value === "single") {
        const X = Te();
        if (X) {
          const le = f.map((ye) => mn(e.value, n, ye, G)), xe = le.every((ye) => ye === X || ye === !0), Fe = le.every((ye) => !ye || ye === "");
          return xe ? X : Fe ? "" : null;
        }
      }
      const B = Os(e.value, n, f, G, se.value);
      return se.value === "multiple" && B === !1 && f.every((le) => {
        const xe = mn(e.value, n, le, G, se.value);
        return xe === "" || xe === !1 || xe === null || xe === void 0;
      }) ? "" : B;
    }
  }, Me = (f) => {
    const { location: S, locationType: G = "single", optionIndex: B, stateValue: X, isAggregate: le = !1 } = f, xe = qe(B), Fe = xe.length > 1 ? "select" : "checkbox", ye = le ? Ne(B, S && ce(S) ? S : G) : Ne(B, S), ct = se.value === "multiple" && ye.length === 1 && r && B > 0;
    if (ct && ye[0]) {
      if (le) {
        let Pt = [];
        G === "all" ? Pt = N.value : G === "faces" ? Pt = ee.value : G === "sides" ? Pt = k.value : S && ce(S) && (Pt = x(S)), Pt.forEach((Nn) => {
          const ti = Ke(Nn, B);
          (!ti || ti !== ye[0]) && et(Nn, B, ye[0]);
        });
      } else if (S) {
        const Pt = Ke(S, B);
        (!Pt || Pt !== ye[0]) && et(S, B, ye[0]);
      }
    }
    const Ge = se.value === "multiple" && (ye.length === 0 || ct), Ve = X !== void 0 ? X : S ? Ke(S, B) : null, Ce = Fe === "select" ? dt(S || G, B) : void 0, Mt = Fe === "checkbox" && xe.length === 1 ? xe[0] : void 0;
    let St, Mn;
    return Fe === "checkbox" && xe.length === 1 && (St = xe[0], Mn = ""), {
      inputType: Fe,
      // Alias for backward compatibility
      type: Fe,
      value: Ve,
      options: Ce,
      disabled: Ge,
      label: Mt,
      indeterminate: Ve === null && Fe === "checkbox",
      trueValue: St,
      falseValue: Mn
    };
  }, ve = (f, S, G) => Me({
    locationType: f,
    optionIndex: S,
    stateValue: G,
    isAggregate: !0
  }), et = (f, S, G) => {
    const B = s[S] || "";
    if (ie()) {
      const X = it(f, S);
      let le;
      if (X === "checkbox") {
        const Fe = qe(S)[0];
        le = G ? Fe : "";
      } else
        le = G || "";
      oi(e.value, n, f, B, le);
    } else
      $e(e.value, n, f, B, G, se.value);
  }, Ke = (f, S) => {
    const G = s[S] || "";
    if (ie()) {
      const B = mn(e.value, n, f, G);
      if (it(f, S) === "checkbox") {
        const xe = qe(S)[0];
        return B === !0 || B === xe ? xe : "";
      } else
        return B || "";
    } else {
      const B = mn(e.value, n, f, G, se.value);
      return q(B, se.value);
    }
  }, Lt = (f, S) => {
    J(N.value, f, S, ie());
  }, nt = (f) => {
    if (ie()) {
      const S = s[f] || "", G = N.value.map((le) => {
        const xe = mn(e.value, n, le, S);
        return xe === !0 ? qe(f)[0] || "" : String(xe || "");
      }), B = G[0] || "";
      return G.every((le) => le === B) ? B : null;
    } else {
      const S = s[f] || "", G = Os(e.value, n, N.value, S, se.value);
      return ne(G, N.value, S, se.value);
    }
  }, Ft = () => {
    ji(e.value, n, N.value, se.value), lt(e);
  }, kt = (f) => f === "faces" ? {
    locations: ee.value,
    isSupported: R.value
  } : {
    locations: k.value,
    isSupported: w.value
  }, Yt = (f, S, G) => {
    const { locations: B, isSupported: X } = kt(f);
    X && J(B, S, G, ie());
  }, $t = (f, S) => {
    const { locations: G, isSupported: B } = kt(f);
    return B ? pe(G, S) : null;
  }, at = (f) => {
    const { locations: S, isSupported: G } = kt(f);
    G && (ji(e.value, n, S, se.value), lt(e));
  }, Et = (f, S) => {
    const { isSupported: G } = kt(f);
    if (!G) return { type: "checkbox", value: !1 };
    const B = $t(f, S);
    return ve(f, S, B);
  }, rt = (f, S) => {
    Yt("faces", f, S);
  }, Gt = (f, S) => {
    Yt("sides", f, S);
  }, mt = (f) => $t("faces", f), Ze = (f) => $t("sides", f), fn = () => {
    at("faces");
  }, Xt = () => {
    at("sides");
  }, xt = (f) => y.value.find((S) => S.id === f), ce = (f) => ["all", "faces", "sides"].includes(f) ? !1 : !f.includes("."), x = (f) => {
    const S = xt(f);
    return S ? S.locations.filter((G) => N.value.includes(G)) : [];
  }, C = (f, S, G) => {
    const B = x(f);
    B.length !== 0 && (B.forEach((X) => et(X, S, G)), lt(e));
  }, b = (f, S) => {
    const G = x(f);
    if (G.length === 0) return null;
    const B = pe(G, S);
    return !ie() && (B === null || B === !1 || B === "") ? "" : B;
  }, W = (f) => {
    const S = x(f);
    S.length !== 0 && (ji(e.value, n, S, se.value), lt(e));
  }, T = (f, S) => {
    const G = b(f, S), B = xt(f);
    return Me({
      location: f,
      optionIndex: S,
      stateValue: G,
      isAggregate: !0,
      customLabel: B?.label
    });
  }, te = (f) => {
    Ko(e.value, n, f, se.value), lt(e);
  }, be = (f) => f === "all" ? N.value.some((S) => !!Ke(S, 0)) : f === "faces" && R.value ? ee.value.some((S) => !!Ke(S, 0)) : f === "sides" && w.value ? k.value.some((S) => !!Ke(S, 0)) : ce(f) ? x(f).some((G) => !!Ke(G, 0)) : N.value.includes(f) ? !!Ke(f, 0) : !1, Le = (f) => {
    if (f === "all") return ke("general.all");
    if (f === "faces") return `${ke("general.all")} ${ke("machining.face_other")}`;
    if (f === "sides") return `${ke("general.all")} ${ke("woodwork.edge_other")}`;
    if (ce(f)) {
      const B = xt(f);
      if (B) return B.label;
    }
    if (f.startsWith("face.")) {
      const X = `faces.${f.replace("face.", "")}`;
      return ke(X);
    }
    if (f.startsWith("side.")) {
      let B = f.replace("side.", "");
      (p === 1 || p === 2) && e.value && e.value.w > e.value.l && (B = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[B] || B);
      const X = `sides.${B}`;
      return ke(X);
    }
    const S = `fields.${f}`, G = ke(S);
    return G !== S ? G : a?.[f] ? a[f] : f;
  }, it = (f, S) => se.value === "boolean" ? "checkbox" : qe(S).length > 1 ? "select" : "checkbox", Tt = (f, S) => Me({
    location: f,
    optionIndex: S,
    isAggregate: !1
  }), ot = (f) => {
    const S = nt(f);
    return ve("all", f, S);
  }, Se = (f) => Et("faces", f), Ee = (f) => Et("sides", f), jt = (f, S) => f === "all" ? ot(S) : f === "faces" ? Se(S) : f === "sides" ? Ee(S) : ce(f) ? T(f, S) : Tt(f, S), Ne = (f, S) => {
    const G = ln(n), X = (D.value?.length ? D.value : G?.options || [])[f];
    if (!X || X[0] === !0)
      return [];
    const le = S && typeof S == "string" && (S.startsWith("face.") || S.startsWith("side.")), xe = S && typeof S == "string" && ce(S), Fe = !le && (S === "all" || S === "faces" || S === "sides" || xe);
    if (Array.isArray(X) && X.length === 1 && typeof X[0] == "string" && !(r && F && (le || Fe) && f > 0))
      return X;
    if (r && F && le) {
      const Ge = [];
      if (f > 0)
        for (let Ve = 0; Ve < f; Ve++) {
          const Ce = Ke(S, Ve);
          if (typeof Ce == "string" && Ce)
            Ge.push(Ce);
          else if (typeof Ce == "boolean")
            Ge.push(Ce);
          else {
            const Mt = ln(n), St = Pi(e.value, n, S);
            return St && typeof St == "object" && !Array.isArray(St) && Object.keys(St).length > 1 && Mt?.options[f] ? Mt.options[f] : [];
          }
        }
      return F(g, Ge, f);
    }
    if (r && F && Fe) {
      const Ge = [];
      if (f > 0)
        for (let Ve = 0; Ve < f; Ve++) {
          let Ce;
          if (S === "all" ? Ce = nt(Ve) : S === "faces" ? Ce = mt(Ve) : S === "sides" ? Ce = Ze(Ve) : xe && typeof S == "string" && (Ce = b(S, Ve)), typeof Ce == "string" && Ce)
            Ge.push(Ce);
          else if (typeof Ce == "boolean")
            Ge.push(Ce);
          else
            return [];
        }
      return F(g, Ge, f);
    }
    const ye = X, ct = o ? (l.value || []).filter((Ge) => typeof Ge == "string") : [];
    return [.../* @__PURE__ */ new Set([...ye, ...ct])];
  }, dt = (f, S) => {
    const G = ln(n), X = (D.value?.length ? D.value : G?.options)?.[S] || [], le = o && l.value ? l.value.filter((Ve) => typeof Ve == "string") : [], xe = [.../* @__PURE__ */ new Set([...X, ...le])], Fe = Ne(S, f), ye = new Set(Fe), ct = G?.displayNames;
    return xe.map((Ve) => ({
      value: Ve,
      label: ct?.[Ve] || Ve,
      disabled: !ye.has(Ve)
    }));
  }, Te = () => {
    const f = Ne(0);
    return f.length === 1 ? f[0] : void 0;
  }, Je = (f) => {
    const S = Ne(f);
    return S.length === 1 ? S[0] : void 0;
  }, qe = (f) => {
    const S = ln(n), G = D.value?.length ? D.value : S?.options;
    let B = [];
    if (G && G[f] && Array.isArray(G[f])) {
      const le = G[f];
      Array.isArray(le) && le.every((xe) => typeof xe == "string") && (B = le);
    }
    const X = o && l.value ? l.value.filter((le) => typeof le == "string") : [];
    return [.../* @__PURE__ */ new Set([...B, ...X])];
  }, Xn = (f, S = 0) => {
    if (f === "all" || f === "faces" || f === "sides")
      return "";
    if (ce(f)) {
      const B = xt(f);
      return B?.price !== void 0 && b(f, S) ? M ? M(B.price) : B.price.toString() : "";
    }
    if (!r || !I)
      return "";
    if (!N.value.includes(f))
      return "N/A";
    const G = I(e.value, n, f, V);
    return G ? M ? M(G) : G.toString() : "N/A";
  }, qt = (f) => !r || !I ? !1 : I(e.value, n, f, V), vt = $(() => N.value.length > 1), bt = $(() => E.value.length > 1), pn = () => {
    if (m.value && m.value.length > 0) {
      const B = [];
      return y.value && y.value.length > 0 && y.value.forEach((X) => B.push(X.id)), B.push(...m.value), B;
    }
    const f = [];
    y.value && y.value.length > 0 && y.value.forEach((B) => f.push(B.id)), vt.value && f.push("all"), bt.value && (xa(n).length > 0 && f.push("faces"), Sa(n).length > 0 && f.push("sides"));
    const S = /* @__PURE__ */ new Set();
    y.value && y.value.length > 0 && y.value.forEach((B) => {
      B.hideIndividualLocations && B.locations.forEach((X) => S.add(X));
    });
    const G = E.value.filter((B) => !S.has(B));
    return f.push(...G), f;
  }, wn = () => se.value === "multiple", Fi = () => {
    const f = 1 + D.value.length, S = se.value === "multiple", G = r, B = f + (S ? 1 : 0) + (G ? 1 : 0);
    return {
      columns: B,
      style: `repeat(${B}, max-content)`
    };
  }, kn = (f) => f === "all" ? "all" : f === "faces" ? "faces" : f === "sides" ? "sides" : "individual", xn = (f) => Wn(f), Sn = (f) => {
    if (f === "all")
      return vt.value;
    if (ce(f))
      return xt(f) ? x(f).length > 0 : !1;
    if (m.value && m.value.length > 0)
      return m.value.includes(f);
    const S = kn(f);
    return S === "all" ? vt.value : S === "faces" || S === "sides" ? S === "faces" && R.value && ee.value.length > 0 || S === "sides" && w.value && k.value.length > 0 ? bt.value : !1 : E.value.includes(f);
  }, Pn = (f) => {
    Ho(f, n, l);
  }, Qt = (f) => {
    zo([e.value], n, f, s);
  }, $i = (f) => {
    Wo([e.value], n, f);
  }, gn = (f, S, G) => {
    if (f === "all")
      Lt(S, G);
    else if (f === "faces")
      rt(S, G);
    else if (f === "sides")
      Gt(S, G);
    else if (ce(f)) {
      let X = G;
      if (!ie() && typeof G == "boolean") {
        const le = qe(S);
        le.length === 1 && (X = G ? le[0] : "");
      }
      if (!ie() && X) {
        const le = x(f), xe = new Set(le);
        y.value && (y.value.forEach((Fe) => {
          Fe.id !== f && x(Fe.id).filter((Ge) => !xe.has(Ge)).forEach((Ge) => {
            et(Ge, S, "");
          });
        }), lt(e));
      }
      C(f, S, X);
    } else
      et(f, S, G), ie() || lt(e);
    const B = s.length;
    for (let X = S + 1; X < B; X++) {
      let le;
      if (f === "all" ? le = nt(X) : f === "faces" ? le = mt(X) : f === "sides" ? le = Ze(X) : ce(f) ? le = b(f, X) : le = Ke(f, X), !le)
        continue;
      const xe = Ne(X, f);
      let Fe = !1;
      if (typeof le == "string" ? Fe = xe.includes(le) : typeof le == "boolean" && le === !0 && (Fe = xe.length > 0), !Fe) {
        const ye = it(f, X) === "checkbox" ? !1 : "";
        f === "all" ? Lt(X, ye) : f === "faces" ? rt(X, ye) : f === "sides" ? Gt(X, ye) : ce(f) ? C(f, X, ye) : et(f, X, ye);
      }
    }
  }, Qn = (f, S = !0) => S && !confirm(`Delete ${n} for ${Le(f)}?`) ? !1 : (f === "all" ? Ft() : f === "faces" ? fn() : f === "sides" ? Xt() : ce(f) ? W(f) : te(f), !0), _t = () => {
    const f = e.value[n], S = e.value[`${n}Options`];
    return !(!f || typeof f != "object" || !S || typeof S != "object" || R.value && (!("faces" in f) || !("faces" in S)) || w.value && (!("sides" in f) || !("sides" in S)));
  }, Ei = () => {
    const f = [], S = e.value[n], G = e.value[`${n}Options`];
    return !S || typeof S != "object" ? f.push(`Missing or invalid ${n} property in shape`) : (R.value && !("faces" in S) && f.push(`Missing faces property in ${n}`), w.value && !("sides" in S) && f.push(`Missing sides property in ${n}`)), !G || typeof G != "object" ? f.push(`Missing or invalid ${n}Options property in shape`) : (R.value && !("faces" in G) && f.push(`Missing faces property in ${n}Options`), w.value && !("sides" in G) && f.push(`Missing sides property in ${n}Options`)), f;
  }, ei = (f) => {
    const S = [];
    if (!f || !Object.keys(f).length)
      return { valid: !0, errors: S };
    const G = Object.keys(f), B = Math.max(...G.map((X) => X.split("|").length));
    if (B <= 1)
      return { valid: !0, errors: S };
    for (const X of N.value) {
      let le;
      if (ie()) {
        const ye = Pi(e.value, n, X);
        ye && typeof ye == "object" && !Array.isArray(ye) ? le = s.map((Ge) => {
          const Ve = ye[Ge];
          if (Ve === !0) {
            const Ce = s.indexOf(Ge);
            return qe(Ce)[0] || "";
          }
          return String(Ve || "");
        }).join("|") : le = "";
      } else {
        const ye = Ke(X, 0);
        le = typeof ye == "string" ? ye : "";
      }
      if (!le || le === "")
        continue;
      const xe = le.includes("|") ? le.split("|") : [le], Fe = xe.filter((ye) => ye.trim() !== "").length;
      if (Fe > 0 && Fe < B) {
        const ye = xe.join("|"), ct = G.some((Ve) => Ve.startsWith(ye + "|")), Ge = G.includes(ye);
        if (ct && !Ge) {
          const Ve = B - Fe, Ce = xe.filter((St) => St.trim() !== "").join(", "), Mt = Le(X);
          S.push(`${n} selection incomplete for ${Mt}. Selected: "${Ce}" but ${Ve} more level${Ve > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: S.length === 0, errors: S };
  }, Cn = (f) => ei(f).errors, Ti = $(() => pn().map((f) => ({
    location: f,
    label: Le(f),
    isAggregate: ["all", "faces", "sides"].includes(f) || ce(f)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: se,
    // Raw computed ref (not readonly wrapped)
    allLocations: pt(N),
    faceLocations: pt(ee),
    sideLocations: pt(k),
    shouldShowAll: vt,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: pt(bt),
    renderLocations: pt(Ti),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: pt(R),
    supportsSides: pt(w),
    supportsBoth: pt(Q),
    // Core operations
    setValue: et,
    getValue: Ke,
    setAll: Lt,
    getAll: nt,
    getAllState: nt,
    // Alias for backward compatibility
    deleteSingle: te,
    deleteAll: Ft,
    canDelete: be,
    // Group-specific operations
    setAllFaces: rt,
    setAllSides: Gt,
    getAllFaces: mt,
    getAllSides: Ze,
    deleteAllFaces: fn,
    deleteAllSides: Xt,
    // UI helpers
    getLocationLabel: Le,
    getInputType: it,
    getInputConfig: Tt,
    getAllInputConfig: ot,
    getAllFacesInputConfig: Se,
    getAllSidesInputConfig: Ee,
    getInputConfigForLocation: jt,
    getSelectOptions: dt,
    getSingleOptionLabel: Je,
    // Pricing
    getPriceDisplay: Xn,
    getCalculatedPrice: qt,
    // Layout & rendering
    getRenderLocations: pn,
    shouldShowDeleteButton: wn,
    getGridConfig: Fi,
    getLocationGroup: kn,
    getLocationScope: xn,
    isLocationVisible: Sn,
    // Options management
    getAvailableOptions: Ne,
    getSingleAvailableOption: Te,
    // Initialization & migration
    initialize: z,
    initializeExtra: z,
    // Alias for backward compatibility
    initializeCustomNames: Pn,
    migrateToSingle: Qt,
    migrateToBoolean: $i,
    // Event handlers
    handleInputChange: gn,
    handleDelete: Qn,
    // Validation
    validateShape: _t,
    getValidationErrors: Ei,
    validateIncompleteSelections: ei,
    getIncompleteSelectionErrors: Cn,
    // Debug helpers (development only)
    getDebugInfo: (f, S) => ({
      mode: se.value,
      location: f,
      optionIndex: S,
      value: N.value.includes(f) ? Ke(f, S) : "N/A",
      inputType: it(f, S),
      canDelete: be(f),
      allState: nt(S),
      availableOptions: Ne(S),
      locationGroup: kn(f),
      config: Y.value,
      supportsFaces: R.value,
      supportsSides: w.value,
      supportsBoth: Q.value,
      ...R.value && {
        allFacesState: mt(S)
      },
      ...w.value && {
        allSidesState: Ze(S)
      },
      ...N.value.includes(f) && {
        locationScope: xn(f)
      }
    })
  };
}, mr = (t) => {
  const {
    customNames: e,
    usedNames: n,
    allowCustomNames: i,
    getSelectOptions: s,
    onCustomNameAdded: a,
    onCustomNameDeleted: o
  } = t, l = Z(""), r = $(() => i && l.value?.trim()), g = $(() => !i || !e.value || e.value.length === 0 || e.value.length === 1 && e.value[0] === !0 ? !0 : e.value.filter((I) => typeof I == "string").every((I) => n.value.includes(I))), m = $(() => {
    const F = [];
    if (i && e.value && e.value.length > 0) {
      if (e.value.length === 1 && e.value[0] === !0)
        return F;
      const V = [...e.value.filter((M) => typeof M == "string")].sort();
      F.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), V.forEach((M) => {
        (n.value?.includes(M) ?? !1) || F.push({
          id: `delete-${M}`,
          label: `Delete "${M}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return F;
  }), y = () => {
    const F = l.value?.trim();
    if (!F) return;
    if (s("", 0).map((V) => V.value).includes(F)) {
      l.value = "";
      return;
    }
    a(F), l.value = "";
  }, p = (F) => {
    const I = F.item || F;
    if (I.id?.startsWith("delete-")) {
      const V = I.id.replace("delete-", "");
      if (n.value?.includes(V)) {
        console.warn(`Cannot delete ${t.extraType} type "${V}" - it is currently in use`);
        return;
      }
      o(V);
    }
  };
  return {
    newCustomName: l,
    canAddCustomName: pt(r),
    isActionMenuDisabled: pt(g),
    customNameActions: m,
    handleAddCustomName: y,
    handleCustomNameAction: p
  };
}, vr = (t) => {
  const {
    extraType: e,
    labels: n,
    shapeIndex: i,
    enablePricing: s,
    shouldShowAll: a,
    locations: o,
    locationGroups: l = Z([]),
    shape: r = Z(null),
    orientationModel: g = 0,
    getInputType: m,
    getInputConfig: y,
    getAllInputConfig: p,
    getInputConfigForLocation: F,
    canDelete: I,
    getLocationLabel: V,
    shouldShowDeleteButton: M
  } = t, D = $(() => {
    const ee = [], k = /* @__PURE__ */ new Set();
    if (l.value && l.value.length > 0 && l.value.forEach((w) => {
      w.hideIndividualLocations && w.locations.forEach((Q) => k.add(Q));
    }), l.value && l.value.length > 0 && l.value.forEach((w) => ee.push(w.id)), a.value && ee.push("all"), o.value && o.value.length > 0)
      ee.push(...o.value.filter((w) => w !== "all" && !k.has(w)));
    else {
      const w = Ci(e), Q = ka(e), ie = wa(e), re = ya(e);
      Q && ie && re && (xa(e).length > 0 && ee.push("faces"), Sa(e).length > 0 && ee.push("sides")), ee.push(...w.filter(($e) => !k.has($e)));
    }
    let R = Array.from(new Set(ee));
    if ((g === 1 || g === 2) && r.value && r.value.w > r.value.l) {
      const w = ["side.l1", "side.l2", "side.w1", "side.w2"], Q = R.map((ie, re) => ({ loc: ie, i: re })).filter((ie) => w.includes(ie.loc));
      if (Q.length > 0) {
        const ie = Q[0].i, re = Q.filter((q) => q.loc.includes(".w")).sort((q, ne) => q.loc.localeCompare(ne.loc)), ge = Q.filter((q) => q.loc.includes(".l")).sort((q, ne) => q.loc.localeCompare(ne.loc)), $e = [...re.map((q) => q.loc), ...ge.map((q) => q.loc)];
        R = R.filter((q) => !w.includes(q)), R.splice(ie, 0, ...$e);
      }
    }
    return R;
  }), z = $(() => `1fr${s ? " max-content" : ""}`), Y = (ee, k) => `${e}-${ee}-${n[k]}-${k}-${i}`, se = (ee) => {
    const k = V(ee);
    return `Delete ${e} for ${k}`;
  }, E = (ee) => ({
    show: M(ee),
    enabled: I(ee),
    ariaLabel: se(ee)
  }), N = (ee, k) => m(ee, k);
  return {
    renderLocations: pt(D),
    gridStyle: pt(z),
    getInputId: Y,
    getDeleteAriaLabel: se,
    getInputConfigForLocation: F,
    getDeleteConfig: E,
    getInputTypeForLocation: N,
    // Re-export the passed functions for consistency
    getInputType: m,
    getInputConfig: y,
    getAllInputConfig: p,
    canDelete: I,
    shouldShowDeleteButton: M,
    getLocationLabel: V
  };
};
function Ea(t) {
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
function br(t) {
  return t.map((e) => {
    const n = e.path.length > 0 ? e.path.join(".") : "root", i = Ea(e), s = Yo(e.message, i);
    return `[${n}] ${s}`;
  });
}
function qn(t, e) {
  const n = t.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    errors: n.success ? void 0 : n.error.issues
  };
}
function yr(t = {}) {
  try {
    let e = function(x) {
      if (!x || typeof x != "object") return x;
      const C = { ...x };
      if (delete C.issues, delete C.warnings, C.trim && typeof C.trim == "object") {
        const b = C.trim;
        ("x1" in b || "x2" in b || "y1" in b || "y2" in b) && (C.trim = {
          l1: b.y1 ?? b.l1 ?? 0,
          l2: b.y2 ?? b.l2 ?? 0,
          w1: b.x1 ?? b.w1 ?? 0,
          w2: b.x2 ?? b.w2 ?? 0
        });
      }
      if (C.extras?.banding?.sides && typeof C.extras.banding.sides == "object") {
        const b = C.extras.banding.sides;
        ("x1" in b || "x2" in b || "y1" in b || "y2" in b) && (C.extras.banding.sides = {
          l1: b.y1 ?? b.l1,
          l2: b.y2 ?? b.l2,
          w1: b.x1 ?? b.w1,
          w2: b.x2 ?? b.w2
        });
      }
      if (C.extras?.finish?.sides && typeof C.extras.finish.sides == "object") {
        const b = C.extras.finish.sides;
        ("x1" in b || "x2" in b || "y1" in b || "y2" in b) && (C.extras.finish.sides = {
          l1: b.y1 ?? b.l1,
          l2: b.y2 ?? b.l2,
          w1: b.x1 ?? b.w1,
          w2: b.x2 ?? b.w2
        });
      }
      if (C.extras?.planing?.sides && typeof C.extras.planing.sides == "object") {
        const b = C.extras.planing.sides;
        ("x1" in b || "x2" in b || "y1" in b || "y2" in b) && (C.extras.planing.sides = {
          l1: b.y1 ?? b.l1,
          l2: b.y2 ?? b.l2,
          w1: b.x1 ?? b.w1,
          w2: b.x2 ?? b.w2
        });
      }
      if (C.efficiencyOptions?.primaryCompression) {
        const b = C.efficiencyOptions.primaryCompression;
        b === "x" ? C.efficiencyOptions = {
          ...C.efficiencyOptions,
          primaryCompression: "l"
        } : b === "y" && (C.efficiencyOptions = {
          ...C.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const b in C)
        C[b] === null && delete C[b];
      return C;
    }, n = function(x, C) {
      if (!Array.isArray(x))
        return [];
      const b = [];
      for (let W = 0; W < x.length; W++) {
        const T = x[W], te = e(T);
        try {
          const be = {
            ...te,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          T.autoId && (be.autoId = T.autoId), delete be.issues, delete be.warnings;
          const Le = new li(be, C);
          b.push(Le);
        } catch (be) {
          console.error(`Failed to create InputShape at index ${W}:`, be);
        }
      }
      return b;
    }, i = function(x, C) {
      if (!Array.isArray(x)) return [];
      const b = [];
      for (let W = 0; W < x.length; W++) {
        const T = x[W], te = e(T);
        try {
          const be = {
            ...te,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          T.autoId && (be.autoId = T.autoId);
          const Le = new ri(be, C);
          b.push(Le);
        } catch (be) {
          console.error(`Failed to create InputStock at index ${W}:`, be);
        }
      }
      return b;
    }, s = function(x) {
      const C = e(x), b = qn($n, C);
      if (b.success && b.data) {
        const W = {
          ...b.data,
          issues: [],
          warnings: []
        };
        return x?.autoId && (W.autoId = x.autoId), new zt(W);
      } else
        return console.error("Failed to parse input saw:", b.errors), new zt({});
    }, a = function(x, C) {
      return Array.isArray(x) ? C && C.length ? rr(x, C) : x.map((b) => new ba(b)).filter(Boolean) : [];
    }, o = function(x = {}) {
      try {
        const W = { ...zn(
          (te) => {
            if (typeof te != "object" || te === null) return te;
            const be = { ...te };
            for (const Le in be)
              be[Le] === null && delete be[Le];
            return be;
          },
          En
        ).parse(x), isNew: !0 }, T = new li(W, ie);
        return T.createId(re.value.length), re.value.push(T), T;
      } catch (C) {
        return C instanceof ui && (console.error("Shape validation failed:", C.issues), z("part", "Invalid shape data", C.issues)), null;
      }
    }, l = function(x = {}) {
      try {
        const b = { ...bn.parse(x), isNew: !0 }, W = new ri(b, ie);
        return W.createId(ge.value.length), ge.value.push(W), W;
      } catch (C) {
        return C instanceof ui && (console.error("Stock validation failed:", C.issues), z("stock", "Invalid stock data", C.issues)), null;
      }
    }, r = function(x) {
      try {
        const C = x.toData(), b = En.parse(C);
        return new li(b, ie);
      } catch (C) {
        return C instanceof ui && (console.error("Shape clone validation failed:", C.issues), z("part", "Invalid shape data during cloning", C.issues)), null;
      }
    }, g = function(x) {
      try {
        const C = x.toData(), b = bn.parse(C);
        return new ri(b, ie);
      } catch (C) {
        return C instanceof ui && (console.error("Stock clone validation failed:", C.issues), z("stock", "Invalid stock data during cloning", C.issues)), null;
      }
    }, m = function(x, C) {
      const b = re.value.findIndex((be) => be.autoId === x);
      if (b === -1) return !1;
      const W = re.value[b], T = { ...W.toData(), ...C }, te = qn(En, T);
      if (te.success && te.data) {
        if (W.update(te.data), !W.isNew) {
          const be = Object.keys(C);
          W.validate({ fields: be, index: b });
        }
        return !0;
      } else {
        const be = te.errors ? br(te.errors) : [];
        console.error("Shape update validation failed:", be);
        const Le = te.errors?.[0];
        if (Le) {
          const it = Ea(Le);
          new Dt({
            category: ["part"],
            message: Le.message,
            // This is the translation key from Zod error map
            params: it,
            issues: J.value
          });
        } else
          z("part", "Invalid shape update");
        return !1;
      }
    }, y = function(x, C) {
      const b = re.value.findIndex((T) => T.autoId === x);
      if (b === -1) return !1;
      const W = re.value[b];
      return W.validate({ fields: [C], index: b }), W.issues.length === 0;
    }, p = function(x, C) {
      const b = ge.value.find((te) => te.autoId === x);
      if (!b) return !1;
      const W = { ...b.toData(), ...C }, T = qn(bn, W);
      return T.success && T.data ? (b.update(T.data), b.isNew || D(), !0) : (console.error("Stock update validation failed:", T.errors), z("stock", "Invalid stock update", T.errors), !1);
    }, F = function(x, C) {
      const b = ge.value.findIndex((T) => T.autoId === x);
      if (b === -1) return !1;
      const W = ge.value[b];
      return W.validate({ fields: [C], index: b }), lt(ge), W.issues.length === 0;
    }, I = function(x) {
      if (re.value.length === 1) return !1;
      const C = re.value.findIndex((b) => b.autoId === x);
      return C === -1 ? !1 : (re.value.splice(C, 1), !0);
    }, V = function(x) {
      if (ge.value.length === 1) return !1;
      const C = ge.value.findIndex((b) => b.autoId === x);
      return C === -1 ? !1 : (ge.value.splice(C, 1), !0);
    }, M = function(x) {
      pe.value = !0;
      const C = [];
      try {
        re.value.forEach((b) => b.issues.length = 0);
        for (let b = 0; b < re.value.length; b++) {
          const W = re.value[b];
          if (W.isNew)
            continue;
          const T = W.validate({
            inputStockList: ge.value,
            index: b,
            stockType: x?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: x
          });
          C.push(...T);
        }
        re.value.some((b) => Number(b.q) > 0) || new Dt({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: C
        });
      } finally {
        pe.value = !1;
      }
      return J.value = C, C;
    }, D = function(x) {
      pe.value = !0;
      const C = [];
      try {
        ge.value.forEach((b) => b.issues.length = 0);
        for (let b = 0; b < ge.value.length; b++) {
          const T = ge.value[b].validate({ saw: x }, b);
          C.push(...T);
        }
        ge.value.some((b) => Number(b.q) > 0 || b.autoAdd) || new Dt({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: C
        });
      } finally {
        pe.value = !1;
      }
      return J.value = C, C;
    }, z = function(x, C, b) {
      new Dt({
        category: [x],
        message: C,
        issues: J.value
      }), b && console.log("Validation details:", b);
    }, Y = function() {
      J.value = [], re.value.forEach((x) => x.issues.length = 0), ge.value.forEach((x) => x.issues.length = 0);
    }, se = function(x = {}) {
      const C = [], b = [], W = x.inputShapesOverride ?? re.value;
      if (!W.length)
        return { shapeList: [], issues: [] };
      for (let T = 0; T < W.length; T++) {
        const te = W[T];
        if (!te.q) continue;
        te.createId(T), te.applyPartTrim(x.trim, x.stockType);
        const be = te.toShape();
        C.push(be), b.push(...be.issues);
      }
      return { shapeList: C, issues: b };
    }, E = function(x) {
      if (!ge.value.length)
        return { stockList: [], issues: [] };
      const C = [], b = [];
      for (let W = 0; W < ge.value.length; W++) {
        const T = ge.value[W];
        if (!T.q && !T.autoAdd) continue;
        T.createId(W), T.saw = x;
        const te = T.toStock();
        C.push(te), b.push(...te.issues);
      }
      return { stockList: C, issues: b };
    }, N = function(x, C = ie) {
      const b = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (x.saw) {
        const W = qn($n, e(x.saw));
        if (W.success && W.data) {
          const T = { ...W.data };
          x.saw?.autoId && (T.autoId = x.saw.autoId), $e.value = new zt(T), b.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", W.errors), b.saw.failed = !0;
      }
      if (x.shapes) {
        const W = n(x.shapes, C);
        b.shapes.success = W.length, b.shapes.failed = x.shapes.length - W.length, re.value = W;
      }
      if (x.stock) {
        const W = i(x.stock, C);
        b.stock.success = W.length, b.stock.failed = x.stock.length - W.length, ge.value = W;
      }
      if (x.groups) {
        const W = a(x.groups);
        b.groups.success = W.length, b.groups.failed = x.groups.length - W.length, q.value = W;
      }
      return x.extrasOptions && (ne.value = { ...x.extrasOptions }), b;
    }, ee = function() {
      return {
        shapes: re.value.map((x) => x.toData()),
        stock: ge.value.map((x) => x.toData()),
        inputUserGroups: q.value.map((x) => x.toData()),
        extrasOptions: ne.value
      };
    }, k = function() {
      re.value = [], ge.value = [], q.value = [], Y();
    }, R = function(x) {
      const C = { ...$e.value.toData(), ...x }, b = qn($n, C);
      return b.success && b.data ? ($e.value.update(b.data), !0) : (console.error("InputSaw update validation failed:", b.errors), z("saw", "Invalid saw update", b.errors), !1);
    }, w = function() {
      $e.value = new zt({});
    }, Q = function() {
      const x = $e.value.validate();
      return J.value = [...J.value.filter((C) => C.category?.[0] !== "saw"), ...x], x;
    };
    const { numberFormat: ie = "decimal" } = t, re = jn("inputs/inputShapes", [], {
      serializer: {
        read: (x) => {
          if (!x) {
            const W = "GlobalStore/inputShapes", T = js(W);
            if (T)
              x = T, qs(W);
            else return [];
          }
          let C;
          try {
            C = JSON.parse(x);
          } catch (W) {
            return console.error("Failed to parse input shapes JSON:", W), [];
          }
          return n(C, ie);
        },
        write: (x) => {
          const b = x.filter((T) => !T?.multiEdit).map((T) => T.toData());
          return JSON.stringify(b);
        }
      },
      listenToStorageChanges: !1
    }), ge = jn("inputs/inputStock", [], {
      serializer: {
        read: (x) => {
          if (!x) return [];
          let C;
          try {
            C = JSON.parse(x);
          } catch (W) {
            return console.error("  Failed to parse stock JSON:", W), [];
          }
          return i(C, ie);
        },
        write: (x) => {
          const b = x.filter((T) => !T?.multiEdit).map((T) => T.toData());
          return JSON.stringify(b);
        }
      },
      listenToStorageChanges: !1
    }), $e = jn("inputs/inputSaw", new zt({}), {
      serializer: {
        read: (x) => {
          if (!x) {
            const b = js("saw");
            if (b)
              x = b, qs("saw");
            else return new zt({});
          }
          try {
            const C = JSON.parse(x);
            return s(C);
          } catch (C) {
            return console.error("  Failed to parse saw JSON:", C), new zt({});
          }
        },
        write: (x) => {
          if (!x)
            return JSON.stringify({});
          const C = x.toData();
          return JSON.stringify(C);
        }
      },
      listenToStorageChanges: !1
    }), q = jn("inputs/inputUserGroups", [], {
      serializer: {
        read: (x) => a(x ? JSON.parse(x) : []),
        write: (x) => JSON.stringify(x.map((C) => C.toData()))
      }
    }), ne = jn("inputs/extrasOptions", {
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
    }), J = Z([]), pe = Z(!1);
    re.value.length === 0 && (re.value = [new li({ isNew: !0 })]), ge.value.length === 0 && (ge.value = [new ri({ isNew: !0 })]);
    const Me = $(() => re.value.reduce((x, C) => {
      const b = Number(C?.q);
      return b && b > 0 && !C?.multiEdit ? x + b : x;
    }, 0)), ve = $(() => ge.value.reduce((x, C) => {
      const b = Number(C?.q);
      return b && b > 0 && !C?.multiEdit ? x + b : x;
    }, 0)), et = $(() => re.value.reduce((x, C) => C?.multiEdit ? x : x + 1, 0)), Ke = $(() => ge.value.reduce((x, C) => C?.multiEdit ? x : x + 1, 0)), Lt = $(() => J.value.length > 0), nt = () => [
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
    ], Ft = Z(null), kt = Z(null), Yt = () => {
      Ft.value = null;
    }, $t = Y, at = (x = null) => {
      const C = x?.inputShapesOverride ?? re.value, b = M(x?.saw || void 0);
      if (C.length) {
        Jo(C, ge.value, x?.saw || $e.value);
        const W = C.flatMap((T) => T.issues);
        return [...b, ...W];
      }
      return b;
    }, Et = async (x, C = "decimal") => {
      const b = x?.inputSaw, W = x?.inputShapes, T = x?.inputStock, te = x?.inputUserGroups, be = N({
        saw: b,
        shapes: W,
        stock: T,
        groups: te
      }, C);
      return lt(re), lt(ge), await ht(), be;
    }, rt = (x, C = "decimal") => N({ shapes: x }, C).shapes.success > 0, Gt = (x, C = "decimal") => N({ stock: x }, C).stock.success > 0, mt = (x, C, b, W, T) => {
      C[0]?.length > 0 && (ne.value[x] || (ne.value[x] = { options: [] }), ne.value[x].options = [...C[0]]), b && W && C.length > 0 ? ds(x, {
        options: C,
        // Use all columns extracted from pricing
        labels: b,
        pricing: W,
        displayNames: T
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: b, pricingData: W, pricingOptionsLength: C.length });
    }, Ze = () => {
      if (!Object.values(ne.value).some(
        (b) => b.options.length > 0
      )) return;
      const C = (b, W) => {
        const T = {};
        for (const te of W)
          T[te] = [...b];
        return T;
      };
      return {
        banding: ne.value.banding.options.length > 0 ? {
          options: {
            sides: C(ne.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: ne.value.finish.options.length > 0 ? {
          options: {
            faces: C(ne.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: ne.value.planing.options.length > 0 ? {
          options: {
            sides: C(ne.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: C(ne.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, fn = (x) => {
      if (!ge.value.length) return "n";
      const C = x.material, b = x.t, W = ge.value.filter((Le) => Le.material === C && Le.t === b);
      if (!W.length)
        return "n";
      let T = !1, te = !1, be = !1;
      for (const Le of W)
        Le.grain === "l" ? (T = !0, te = !0) : Le.grain === "w" && (T = !0, be = !0);
      return T ? te && be ? "y" : te ? "l" : be ? "w" : "n" : "n";
    }, Xt = (x) => {
      for (const C of re.value)
        Ls(C, x);
      for (const C of ge.value)
        Ls(C, x);
    };
    let xt = !1;
    return Ue(re, (x) => {
      xt || !x.length || ht(() => {
        const C = ["banding", "finish", "planing"], b = [];
        C.forEach((W) => {
          const T = /* @__PURE__ */ new Set();
          if (x.forEach((te) => {
            const be = te.extras?.[W];
            be && (be.faces && Object.values(be.faces).forEach((Le) => {
              typeof Le == "string" && Le.trim() && Le !== "Y" && T.add(Le);
            }), be.sides && Object.values(be.sides).forEach((Le) => {
              typeof Le == "string" && Le.trim() && Le !== "Y" && T.add(Le);
            }));
          }), T.size > 0) {
            const te = ln(W);
            if (te) {
              const be = te.options[0];
              if (Array.isArray(be) && (be.length === 0 || typeof be[0] == "string")) {
                const Le = new Set(be), it = Array.from(T).filter((Tt) => !Le.has(Tt));
                if (it.length > 0) {
                  const Tt = [...be, ...it];
                  ds(W, {
                    ...te,
                    options: [Tt, ...te.options.slice(1)]
                  });
                }
              }
            }
          }
        }), C.forEach((W) => {
          const T = gr(W, x);
          T.cleanedCount > 0 && b.push(
            `${W}: ${T.invalidOptions.join(", ")}`
          );
        }), b.length > 0 && (console.warn(
          `Some extras options no longer exist and have been reset:
` + b.join(`
`)
        ), typeof window < "u" && window.alert && setTimeout(() => {
          alert(
            `Some extras options no longer exist and have been reset:
` + b.join(`
`)
          );
        }, 500)), xt = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: ge,
        inputShapes: re,
        inputUserGroups: q,
        currentInputShape: Ft,
        selectedSaw: kt,
        inputSaw: $e
      },
      // State
      inputShapes: re,
      inputStock: ge,
      inputUserGroups: q,
      inputSaw: $e,
      currentInputShape: Ft,
      selectedSaw: kt,
      validationIssues: J,
      isValidating: pe,
      // Computed
      totalInputShapes: Me,
      totalInputStock: ve,
      totalInputShapeLines: et,
      totalInputStockLines: Ke,
      hasValidationIssues: Lt,
      // Actions
      addInputShape: o,
      addInputStock: l,
      cloneInputShape: r,
      cloneInputStock: g,
      updateInputShape: m,
      updateInputStock: p,
      updateInputSaw: R,
      removeInputShape: I,
      removeInputStock: V,
      reset: Yt,
      resetInputSaw: w,
      clear: k,
      clearIssues: $t,
      // Validation
      validateInputShapes: at,
      validateInputShapeField: y,
      validateInputStock: D,
      validateInputStockField: F,
      validateInputSaw: Q,
      clearValidationIssues: Y,
      // Conversion
      createShapeList: se,
      createStockList: E,
      // Import/Export/Update
      importData: N,
      exportData: ee,
      updateInputs: Et,
      importInputShapes: rt,
      importInputStock: Gt,
      // Additional functions
      getShapeGrainSummary: fn,
      updateNumberFormat: Xt,
      getSpecialShapeFields: nt,
      // Extras Options Management
      extrasOptions: ne,
      setExtrasOptionsFromPricing: mt,
      getCentralizedOptions: Ze
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let Qi = null;
function Ta(t = { numberFormat: "decimal" }) {
  try {
    return Qi || (Qi = yr(t)), Qi;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
function wr() {
  const t = Date.now(), e = Math.random().toString(36).substring(2, 15), n = Math.random().toString(36).substring(2, 15);
  return `${t.toString(36)}-${e}-${n}`;
}
const tn = Z([]), kr = 6;
function Ma() {
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
      id: wr(),
      message: Ki(n),
      additional: s.length > 5 ? s.slice(0, 5).map((g) => Ki(g)).join("<br>") + "<br>..." : s.slice(0, 5).map((g) => Ki(g)).join("<br>"),
      type: i,
      persistent: a.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: o
    }, r = a.maxNotices ?? kr;
    if (tn.value.length >= r) {
      const g = tn.value.findIndex((m) => !m.persistent);
      if (g !== -1)
        tn.value.splice(g, 1);
      else if (!l.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), l.id;
    }
    return tn.value.push(l), !l.persistent && a.timeout !== 0 && setTimeout(() => e(l.id), a.timeout || 6e3), l.id;
  }, e = (n) => {
    tn.value.findIndex((s) => s.id === n) !== -1 && (tn.value = tn.value.filter((s) => s.id !== n));
  };
  return {
    notices: tn,
    addNotice: t,
    dismissNotice: e
  };
}
class Us {
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
    if (n && n instanceof Vn) {
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
      for (const [y, p] of Object.entries(m))
        Dn.includes(y) && (a[y] = p);
    }
    if (i && typeof i == "object") {
      const m = this.migrateSideNames(i);
      for (const [y, p] of Object.entries(m))
        Dn.includes(y) && (o[y] = p);
    }
    if (s && typeof s == "object") {
      s.all && (l.sides.all = s.all);
      for (const [m, y] of Object.entries(s))
        m !== "all" && Dn.includes(m) && y && (l.sides[m] = y);
    }
    const r = new Vn(Object.keys(a).length > 0 ? { sides: a } : {}), g = Object.keys(o).length > 0 ? new Vn({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = r : Re(e) && (e.banding = r), g && "_banding" in e && (e._banding = g), Re(e) && s && (e.bandingOptions = l), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const n = e.finish, i = "_finish" in e ? e._finish : void 0, s = Re(e) ? e.finishOptions : void 0;
    if (!n && !i && !s || n && n instanceof Rn)
      return !1;
    const a = {}, o = {}, l = { faces: {} };
    if (n && typeof n == "object")
      for (const [m, y] of Object.entries(n))
        Gn.includes(m) && (a[m] = y);
    if (i && typeof i == "object")
      for (const [m, y] of Object.entries(i))
        Gn.includes(m) && (o[m] = y);
    if (s && typeof s == "object") {
      s.all && (l.faces.all = s.all);
      for (const [m, y] of Object.entries(s))
        m !== "all" && Gn.includes(m) && y && (l.faces[m] = y);
    }
    const r = new Rn(Object.keys(a).length > 0 ? { faces: a } : {}), g = Object.keys(o).length > 0 ? new Rn({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = r : Re(e) && (e.finish = r), g && "_finish" in e && (e._finish = g), Re(e) && s && (e.finishOptions = l), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(e) {
    let n = !1;
    const i = "extras" in e && e.extras ? e.extras : e;
    if (i.banding) {
      const s = Fs("banding");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Dn) {
          const o = `side.${a}`, l = Pi(e, "banding", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const g = { ...l };
            for (const m of s.labels)
              if (g[m] === !0) {
                const p = s.labels.indexOf(m);
                if (p !== -1 && s.options[p] && Array.isArray(s.options[p])) {
                  const F = s.options[p];
                  F.length === 1 && (g[m] = F[0], r = !0);
                }
              }
            r && ($s(e, "banding", o, g), n = !0);
          }
        }
    }
    if (i.finish) {
      const s = Fs("finish");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Gn) {
          const o = `face.${a}`, l = Pi(e, "finish", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const g = { ...l };
            for (const m of s.labels)
              if (g[m] === !0) {
                const p = s.labels.indexOf(m);
                if (p !== -1 && s.options[p] && Array.isArray(s.options[p])) {
                  const F = s.options[p];
                  F.length === 1 && (g[m] = F[0], r = !0);
                }
              }
            r && ($s(e, "finish", o, g), n = !0);
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
    if (n && typeof n == "object" && !(n instanceof Vn) && !("sides" in n) && !("faces" in n))
      return !0;
    if ("_banding" in e) {
      const s = e._banding;
      if (s && typeof s == "object" && !(s instanceof Vn) && !("sides" in s) && !("faces" in s))
        return !0;
    }
    const i = e.finish;
    if (i && typeof i == "object" && !(i instanceof Rn) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_finish" in e) {
      const s = e._finish;
      if (s && typeof s == "object" && !(s instanceof Rn) && !("sides" in s) && !("faces" in s))
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
          const s = Object.keys(n.sides).filter((a) => !Dn.includes(a));
          if (s.length > 0)
            throw new Error(`Invalid side keys in banding: ${s.join(", ")}`);
        }
      }
      const i = e.finish;
      if (i) {
        if ("sides" in i && i.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in i && i.faces) {
          const s = Object.keys(i.faces).filter((a) => !Gn.includes(a));
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
const xr = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Sr = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function fs(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function Pr(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function Ii(t = !1) {
  return {
    a: t,
    b: t
  };
}
function Cr(t = !1) {
  return {
    sides: fs(t),
    faces: Ii(t)
  };
}
function Ir(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function Ar(t) {
  const e = {};
  for (const [n, i] of Object.entries(xr))
    n in t && (e[i] = t[n]);
  return e;
}
function Or(t) {
  const e = {};
  for (const [n, i] of Object.entries(Sr))
    n in t && (e[i] = t[n]);
  return e;
}
function gt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function Ht(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, n = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && n && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const s = Ar(t), a = {};
    return "l1" in s && (a.l1 = gt(s.l1)), "l2" in s && (a.l2 = gt(s.l2)), "w1" in s && (a.w1 = gt(s.w1)), "w2" in s && (a.w2 = gt(s.w2)), a;
  }
  const i = {};
  return "l1" in t && (i.l1 = gt(t.l1)), "l2" in t && (i.l2 = gt(t.l2)), "w1" in t && (i.w1 = gt(t.w1)), "w2" in t && (i.w2 = gt(t.w2)), Object.keys(i).length > 0 ? i : t;
}
function Lr(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function On(t) {
  return !t || !Array.isArray(t) ? t : t.map(Lr);
}
function Fr(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [n, i] of Object.entries(t.banding))
      i === !0 || i === !1 ? e[n] = i : typeof i == "number" ? e[n] = gt(i) : typeof i == "string" && i.length > 0 && (e[n] = i);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [n, i] of Object.entries(t.bandingType))
      if (t.banding) {
        const s = e[n];
        (s === !0 || typeof s == "string" && s.length > 0) && (typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i)));
      } else
        typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i));
  return Object.keys(e).length > 0 ? e : void 0;
}
function ps(t) {
  return t && Or(t);
}
function $r(t) {
  t?.type && delete t.type, Er.call(this, t), Tr.call(this, t), Mr.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => gs(e));
}
function Er(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function Tr(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function Mr(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function gs(t) {
  !t || typeof t != "object" || (Us.needsMigration(t) && Us.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Na(t) {
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
function _p(t) {
  if (!(!t || typeof t != "object")) {
    if ($r(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = Ht(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = Ht(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = Ht(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: Ht(e.trim)
    } : e)), t.options) {
      if (Na(t.options), t.options.bandingLocations && (t.options.bandingLocations = On(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = On(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = On(t.options.planingLocations)), t.options.extrasLocationGroups)
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => gs(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && gs(t);
  }
}
function Nr(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = Br(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(Vr)), Array.isArray(e.parts) && (e.parts = e.parts.map(Dr)), e;
}
function Br(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const n = e.efficiencyOptions.primaryCompression;
    n === "x" ? e.efficiencyOptions.primaryCompression = "l" : n === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), e.cutPreference === "flex" ? e.cutPreference = "l" : e.cutPreference === "" && (e.cutPreference = void 0), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function Vr(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = Ht(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function Dr(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const n = Fr(e);
    n && Object.keys(n).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = Ht(n)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = Ht(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const n = {};
      "a" in e.finish && (n.a = gt(e.finish.a)), "b" in e.finish && (n.b = gt(e.finish.b)), e.extras.finish.faces = n;
    } else
      e.extras.finish.sides = Ht(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = Ht(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const n = e.extras.finish.faces;
    "a" in n && (n.a = gt(n.a)), "b" in n && (n.b = gt(n.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
function wt(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(wt);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || (e[n] = wt(i));
  return e;
}
function Ai(t) {
  if (!t || typeof t != "object") return null;
  if (Array.isArray(t)) return t.map(Ai);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || n === "enabled" || n === "type" || n === "issues" || n === "warnings" || (e[n] = i && typeof i == "object" ? Ai(i) : i);
  return Object.keys(e).length > 0 ? e : null;
}
function Ba(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: n,
    autoId: i,
    issues: s,
    warnings: a,
    ...o
  } = t;
  return wt(o);
}
function Rr(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function Gr(t) {
  return t.rot !== void 0 ? t.rot ? 1 : 0 : t.rotated !== void 0 ? t.rotated ? 1 : 0 : t.isRotated !== void 0 ? t.isRotated ? 1 : 0 : t.w > t.l ? 1 : 0;
}
K({
  // Job metadata
  jobId: _().describe("Job identifier"),
  // Input configuration (preserved)
  saw: $n.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: fe(tl).describe("Stock items"),
  parts: fe(Es).describe("Parts with coordinates and properties"),
  cuts: fe(el).optional().describe("Cut instructions"),
  offcuts: fe(Qo).optional().describe("Remaining offcut pieces"),
  unusableParts: fe(Es).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: Xo.describe("Complete analysis and metrics")
});
K({
  saw: $n.describe("Saw configuration"),
  stock: fe(bn).describe("Stock items"),
  parts: fe(En).describe("Parts to cut"),
  groups: fe(nl).optional().describe("User-defined part groups with XY positions"),
  webhook: v().url().optional().describe("Webhook URL for async result delivery")
});
K({
  error: v().describe("Error message"),
  details: Ds().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: Rt("V3").describe("API version"),
  help: v().optional().describe("Helpful migration guidance"),
  example: Ds().optional().describe("Example of correct format"),
  docs: v().url().optional().describe("Link to V3 documentation")
});
function jr(t) {
  if (!t) return null;
  const {
    fitsAll: e,
    fitsAny: n,
    largestShape: i,
    smallestShape: s,
    ...a
  } = t;
  return wt(a);
}
function qr(t) {
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
    trim: wt(t.trim),
    cost: t.cost ?? 0,
    notes: t.notes ?? "",
    code: t.code,
    analysis: jr(t.analysis),
    stack: t.stack?.number ?? 1,
    customData: wt(t.customData)
  } : null;
}
function _r(t, e) {
  if (!t) return null;
  let n = null;
  const i = Rr(t.stock);
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
    rot: Gr(t),
    added: t.added ?? !1,
    notes: t.notes ?? "",
    code: t.code,
    stock: n,
    trim: wt(t.trim),
    extras: Ai(t.extras),
    customData: wt(t.customData)
  };
  return t.machining && (s.machining = Ba(t.machining)), s;
}
function Ur(t) {
  if (!t) return null;
  const e = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    notes: t.notes ?? "",
    trim: wt(t.trim),
    extras: Ai(t.extras),
    customData: wt(t.customData)
  };
  return t.machining && (e.machining = Ba(t.machining)), t.issues && Array.isArray(t.issues) && t.issues.length > 0 ? e.issues = t.issues.map((n) => ({
    message: ql(n.message) || n.message,
    type: n.type,
    category: n.category,
    field: n.field
  })) : e.issues = [], e;
}
function Wr(t) {
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
function zr(t) {
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
function Hr(t) {
  const e = t.stockList || t.stock || [], n = /* @__PURE__ */ new Map();
  for (const g of e) {
    const m = { id: g.id || "" };
    g.code && (m.code = g.code), g.id && n.set(g.id, m), g.autoId && g.autoId !== g.id && n.set(g.autoId, m);
  }
  const i = e.map(qr), s = (t.shapeList || t.parts || []).map((g) => _r(g, n)), a = (t.unusableShapes || []).map(Ur), o = (t.cutList || t.cuts || []).map(Wr), l = (t.offcuts || []).map(zr);
  return {
    jobId: t.jobId,
    saw: wt(t.saw),
    stock: i,
    parts: s,
    cuts: o,
    offcuts: l,
    unusableParts: a,
    metadata: wt(t.metadata)
  };
}
let pi = null;
function Kr() {
  const t = Z(null), e = Z(null), n = Z(null), i = Fn([]), s = Fn([]), a = Fn([]), o = Fn([]), l = Z([]), r = Z(null), g = Fn([]), m = Z(null), y = Z(null), p = Z({});
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
    unusableShapes: g,
    currentCutIndex: m,
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
      unusableShapes: g,
      metadata: r,
      currentCutIndex: m,
      cuttingPlans: p
    }
  };
}
function Oi() {
  if (pi) return pi;
  const t = Kr(), e = $(() => t.activeStockAutoId.value ? re(t.activeStockAutoId.value) : []), n = $(() => !t.activeStockAutoId.value || !t.stockList.value?.length ? null : ie(t.activeStockAutoId.value)), i = $(() => !n.value || !t.cutList.value?.length ? [] : $e(n.value.autoId)), s = $(() => !n.value || !t.segmentList.value?.length ? [] : ge(t.activeStockAutoId.value)), a = $(() => t.stockList.value?.length ? q(t.stockList.value) : []), o = $(() => t.shapeList.value.filter((J) => J.added)), l = $(() => t.shapeList.value?.length ? t.shapeList.value.filter((J) => !J.added) : []), r = $(() => t.shapeList.value?.length ? al(t.shapeList.value) : []), g = $(() => t.shapeList.value?.length ? t.shapeList.value.filter((J) => !J.duplicate) : []), m = $(() => g.value.filter((J) => J.added)), y = $(() => t.stockList.value?.length ? t.stockList.value.filter((J) => J.used && !J.duplicate) : []), p = $(() => y.value.filter((J) => J.used)), F = $(() => t.cutList.value?.length ? i.value.reduce((J, pe) => J + pe.area, 0) : 0), I = $(() => !t.stockList.value?.length || !n.value ? 0 : n.value ? n.value.area : 0), V = $(() => !t.shapeList.value?.length || !e.value ? 0 : e.value ? e.value.reduce((J, pe) => J + pe.area, 0) : 0), M = $(() => !t.cutList.value?.length || !n.value ? null : n.value.cutType), D = $(() => t.stockList.value?.length ? t.stockList.value.filter((pe) => pe.used && !pe.isStacked) : []), z = $(() => t.stockList.value?.length ? sl(n.value, t.stockList.value) : 0), Y = $(() => {
    if (!t.stockList.value?.length) return 0;
    let J = I.value ? (F.value + V.value) / I.value : null;
    return J > 1 && (J = 1), J;
  }), se = $(() => t.activeStockAutoId.value && t.cuttingPlans.value?.[t.activeStockAutoId.value] || null), E = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, N = () => {
    t.saw.value = null, t.activeStockAutoId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [], t.cuttingPlans.value = {};
  }, ee = (J, pe) => {
    J in this && this[J]?.sort(bi[pe]);
  }, k = (J) => {
    lt(J);
  }, R = () => {
    lt(t.shapeList);
  }, w = () => {
    lt(t.stockList);
  }, Q = (J) => {
    if (!J?.shapeList?.some((pe) => pe.added)) {
      N();
      return;
    }
    t.metadata.value = J.metadata, t.unusableShapes.value = J.unusableShapes || [];
    try {
      J?.saw && (t.saw.value = new Pa(J.saw));
      const pe = il(J, {
        preventAutoRotation: !0
      });
      t.stockList.value = pe.stockList, t.shapeList.value = pe.shapeList, t.cutList.value = pe.cutList, t.segmentList.value = pe.segmentList, t.offcuts.value = pe.offcuts, t.cuttingPlans.value = J.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((ve) => lt(t[ve])), t.activeStockAutoId.value = q(t.stockList.value)?.[0]?.autoId || null;
    } catch (pe) {
      console.error("Error updating from result", pe);
    }
  }, ie = (J) => t.stockList.value?.length ? t.stockList.value.find((pe) => pe.autoId === J) : null, re = (J) => t.shapeList.value?.length ? t.shapeList.value.filter((pe) => pe.added && pe?.stock?.autoId === J) : [], ge = (J) => t.segmentList.value?.length ? t.segmentList.value.filter((Me) => Me?.stock?.autoId === J) : [], $e = (J) => {
    const pe = t?.cutList?.value;
    return !pe && !pe.length ? [] : pe.filter((Me) => Me?.stock?.autoId === J).sort((Me, ve) => Me?.guillotineState?.order - ve?.guillotineState?.order);
  }, q = (J) => J?.length ? J.filter((pe) => pe.used === !0) : [], ne = (J) => {
    t.activeStockAutoId.value !== J && (t.activeShape.value = null, t.activeStockAutoId.value = J);
  };
  return pi = {
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
    uniqueShapes: g,
    uniqueAddedShapes: m,
    unplacedShapeTally: r,
    uniqueStock: y,
    uniqueUsedStock: p,
    activeStock: n,
    activeCuts: i,
    activeCutsArea: F,
    activeCutType: M,
    usedStock: a,
    stackedStock: D,
    activeStockArea: I,
    activeShapeArea: V,
    activeStockStackCount: z,
    activeTotalArea: Y,
    activeSegments: s,
    cuttingPlan: se,
    // methods
    reset: E,
    clear: N,
    sortItems: ee,
    update: k,
    updateShapes: R,
    updateStock: w,
    updateFromResult: Q,
    getStock: ie,
    getShapes: re,
    getSegments: ge,
    getCuts: $e,
    setActiveStockAutoId: ne
  }, pi;
}
function Zr(t) {
  const e = t.x, n = t.x + t.l, i = Vt().domain([e, n]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(n)]), s = t.y, a = t.y + t.w, o = Vt().domain([s, a]).range([this.scales.yPositionScale(s), this.scales.yPositionScale(a)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(cs(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(cs(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(us(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(us(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Jr() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(Yl(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(Xl(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Va(t, e, n) {
  !n || !t?.length || t.forEach((i, s) => {
    const [a, o] = i;
    n === "x" ? Yr.call(this, a, o, e[s]) : Xr.call(this, a, o, e[s]);
  });
}
function Yr(t, e, n) {
  const i = Vt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), s = Da(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(cs(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, r) => r[l]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function Xr(t, e, n) {
  const i = Vt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), s = Da(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(us(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  Qr(a), this.axes.cutMeasurementYAxes.push(a);
}
function Da(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function Qr(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, n, i) => i[n]?.getBBox()?.height + 10).attr("dx", (e, n, i) => i[n]?.getBBox()?.width / 4).attr("transform", (e, n, i) => "rotate(90) translate(" + i[n]?.getBBox()?.width / 4 + ")");
}
function Zn() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function ec() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Li() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function vs(t) {
  return t.autoId;
}
function tc(t, e) {
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
function es({ parent: t, near: e, far: n, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, n, ...i].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, vs).join(
    (a) => a.append("rect").attr("class", "segment").call((o) => Ws.call(this, o)),
    (a) => a.call((o) => Ws.call(this, o)),
    (a) => a.remove()
  ), this.state.env === "development" && nc.call(this, s), !this.settings.app && this.state.env === "development" && ic.call(this);
}
function Ws(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, n) => e.id !== "root" && n === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function nc(t) {
  this.selections.segmentGroup.selectAll("text").data(t, vs).join(
    (e) => e.append("text").attr("class", "segment-text").call((n) => zs.call(this, n)),
    (e) => e.call((n) => zs.call(this, n)),
    (e) => e.remove()
  );
}
function zs(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function ic() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function Ra(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let n;
  if (e) {
    for (const s of this.props.segments.value)
      if (n = tc(s, e), n) break;
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
function Ga(t, e = []) {
  if (!t) return e;
  if (t.offcut && e.push(t), t.children && Array.isArray(t.children))
    for (const n of t.children)
      Ga(n, e);
  return e;
}
function sc() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const t = [];
  for (const n of this.props.segments.value)
    Ga(n, t);
  if (!t.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const e = (n) => n.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(t, vs).join(
    (n) => n.append("rect").attr("class", "segment offcut").call(e),
    (n) => n.call(e),
    (n) => n.remove()
  );
}
const { currentCutIndex: ac } = Oi();
function oc() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => Hs.call(this, e)),
    (t) => t.call((e) => Hs.call(this, e)),
    (t) => t.remove()
  ), _a.call(this));
}
function Hs(t) {
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
function ja(t, e, n) {
  return t.guillotineState.parentSegmentID === e && n && t.guillotineState.segmentCutOrder < n;
}
function qa(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function lc(t, e, n) {
  this.selections.cutLines.style("visibility", (i) => typeof t.guillotineState?.[n] == "number" && typeof i.guillotineState?.[n] == "number" && i.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("offcut-cut", !1), this.selections.cutLines.classed("offcut-cut", (i, s) => s === e);
}
function rc(t, e, n, i) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] || !i && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), ac.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden")), this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[n] === t.guillotineState[n]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), i || uc.call(this, t, e);
}
function cc(t, e, n, i, s) {
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
    this.state.device === "desktop" && !t.isTrim && Va.call(this, a, o, i);
  }
  this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (o, l) => l === e);
}
function _a() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1).classed("offcut-cut", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), Zn.call(this), Li.call(this);
}
function uc(t, e) {
  const n = t?.guillotineState?.segmentCutOrder;
  if (n == null) return;
  this.selections.cutLines.classed("completed", (y) => ja(y, e, n)), this.selections.cutLines.classed("inside-segment", (y) => qa(y, e));
  const i = Ra.call(this, t);
  if (i === !1) return;
  const { parent: s, children: a } = i, { near: o } = Ua(t, a);
  if (!o) return;
  let l = [], r;
  const g = this.getHalfBladeWidth(t.stock), m = t.dimension === "l" ? "y" : "x";
  t?.dimension === "l" ? (l = [
    [
      o.y,
      o.y + o.w
    ],
    [
      t.y1 + g,
      s.y + s.w
    ]
  ], r = [t?.distances?.bottom, t?.distances.top]) : t?.dimension === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      t.x1 + g,
      s.x + s.l
    ]
  ], r = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && r && Va.call(this, l, r, m);
}
function dc(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  const n = this.props.cuts.value[t];
  if (!n) return;
  if (Zn.call(this), Li.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const I = this.selections.cutLines.nodes()[t].parentElement;
    if (!I) return;
    Ye(I).raise();
  }
  const i = n.guillotineState?.parentSegmentID, s = this.getHalfBladeWidth(n.stock), a = n.dimension === "l" ? "y" : "x", o = n?.stock?.trim, l = e === "ptx" ? "ptxOrder" : "order";
  if (n.isTrim && ["guillotine", "beam"].includes(n?.stock?.cutType)) {
    lc.call(this, n, t, l), Ks.call(this, n, t, i), this.removeSegments();
    return;
  }
  if (["guillotine", "beam"].includes(n?.stock?.cutType) && i !== null && typeof i < "u" ? rc.call(this, n, i, l, e) : cc.call(this, n, t, o, a, s), Ks.call(this, n, t, i), e === "ptx") {
    this.removeSegments();
    return;
  }
  const r = Ra.call(this, n);
  if (r === !1)
    return;
  const { parent: g, children: m } = r;
  if (!n?.guillotineState?.parentSegmentID)
    return es.call(this, { parent: g });
  if (n.stock?.cutType === "beam" && g.phase === 0) {
    const V = this.props.segments.value.find((N) => N.stock?.autoId === n.stock?.autoId)?.children || m, M = V.find((N) => N.offcut === !0 && N.y === 0 && N.isTrimOffcut === !0), D = V.find((N) => N.offcut === !0 && N !== M && N.y + N.w >= n.stock.w - (n.stock.trim?.l2 || 0)), z = V.filter((N) => !N.offcut), Y = z.find((N) => N.type === "near"), se = z.find((N) => N.type === "far"), E = [M, D].filter(Boolean);
    return es.call(this, { parent: g, near: Y, far: se, offcuts: E });
  }
  const { near: y, far: p, offcuts: F } = Ua(n, m);
  es.call(this, { parent: g, near: y, far: p, offcuts: F });
}
function Ua(t, e) {
  const n = t.dimension === "l" ? "y" : "x", i = t.dimension === "l" ? "w" : "l", s = t.stock?.cutType === "beam";
  let a, o;
  if (s)
    a = e.find((r) => r.type === "near" && !r.offcut), o = e.find((r) => r.type === "far" && !r.offcut);
  else {
    const g = t[n + "1"], m = t.stock.halfBladeWidth;
    a = e.find((y) => y.type === "near" && Math.abs(y[n] + y[i] - (g - m)) < 1e-6), o = e.find((y) => y.type === "far" && Math.abs(y[n] - (g + m)) < 1e-6);
  }
  const l = e.filter((r) => r.offcut === !0 && r !== a && r !== o);
  return { near: a, far: o, offcuts: l };
}
function Ks(t, e, n) {
  this.selections.cutLines.attr("stroke-width", (i, s) => {
    const a = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let o = Math.max(1, Math.ceil(a));
    const l = t?.guillotineState?.segmentCutOrder;
    return (ja(i, n, l) || qa(i, n)) && (o += 1), s === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (o = 5), o;
  });
}
function fc() {
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
function pc(t) {
  if (this.selections.cuttingPathGroup) {
    if (t === null) {
      this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", 1);
      return;
    }
    this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", (e, n) => n <= t ? 1 : 0.15), this.selections.cuttingPathGroup.selectAll(".contour").classed("active", (e, n) => n === t);
  }
}
function gc() {
  Wa.call(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.remove(), this.selections.cuttingPathGroup = null);
}
const Zt = /* @__PURE__ */ new WeakMap();
function hc(t, e, n) {
  const i = [];
  let s = 0, a = e(0), o = n(0);
  const l = (r, g, m) => {
    const y = r - a, p = g - o;
    s += Math.sqrt(y * y + p * p), i.push({ sx: r, sy: g, type: m, cumDist: s }), a = r, o = g;
  };
  return i.push({ sx: a, sy: o, type: "rapid", cumDist: 0 }), t.contours.forEach((r, g) => {
    const m = r.leadIn.length > 0 ? r.leadIn[0] : r.contour[0];
    if (!m) return;
    l(e(m.x), n(m.y), "rapid");
    const y = [
      ...r.leadIn,
      ...r.contour,
      ...r.leadOut
    ];
    for (let p = 1; p < y.length; p++) {
      const F = y[p];
      l(e(F.x), n(F.y), "cutting");
    }
  }), i;
}
function mc(t, e) {
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
function vc() {
  if (!this.props.cuttingPlan?.value || !this.selections.cuttingPathGroup) return;
  const t = this.props.cuttingPlan.value;
  if (!t.contours?.length) return;
  let e = Zt.get(this);
  if (!e || !e.waypoints.length) {
    const a = this.scales.xPositionScale, o = this.scales.yPositionScale, l = hc(t, a, o);
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
    }, Zt.set(this, e);
  } else
    e.playing = !0, e.lastTime = null;
  this.selections.cuttingPathGroup.select(".cutting-path-dot").empty() && this.selections.cuttingPathGroup.append("circle").attr("class", "cutting-path-dot").attr("r", 4).attr("fill", "#000").attr("stroke", "#fff").attr("stroke-width", 1.5), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-cut").attr("fill", "none").attr("stroke-width", 2).attr("stroke", "#000").attr("opacity", 0.6), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").empty() && this.selections.cuttingPathGroup.append("path").attr("class", "cutting-path-trail-rapid").attr("fill", "none").attr("stroke-width", 1.5).attr("stroke", "#000").attr("stroke-dasharray", "2,3").attr("opacity", 0.6);
  const i = this, s = (a) => {
    if (!e.playing) return;
    e.lastTime === null && (e.lastTime = a);
    const o = (a - e.lastTime) / 1e3;
    e.lastTime = a, e.progress += e.speed * o, e.progress >= 1 && (e.progress = 1, e.playing = !1);
    const l = e.progress * e.totalDistance, r = mc(e.waypoints, l);
    i.selections.cuttingPathGroup.select(".cutting-path-dot").attr("cx", r.sx).attr("cy", r.sy).attr("fill", "#000");
    let m = "", y = "", p = null;
    for (let F = 0; F < e.waypoints.length; F++) {
      const I = e.waypoints[F];
      if (I.cumDist > l) break;
      I.type === "cutting" ? ((!p || p.type !== "cutting") && (m += ` M ${p ? p.sx : I.sx} ${p ? p.sy : I.sy}`), m += ` L ${I.sx} ${I.sy}`) : ((!p || p.type !== "rapid") && (y += ` M ${p ? p.sx : I.sx} ${p ? p.sy : I.sy}`), y += ` L ${I.sx} ${I.sy}`), p = I;
    }
    e.progress < 1 && p && (r.type === "cutting" ? m += ` L ${r.sx} ${r.sy}` : y += ` L ${r.sx} ${r.sy}`), i.selections.cuttingPathGroup.select(".cutting-path-trail-cut").attr("d", m), i.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").attr("d", y), e.playing && (e.rafId = requestAnimationFrame(s));
  };
  e.rafId && cancelAnimationFrame(e.rafId), e.rafId = requestAnimationFrame(s);
}
function bc() {
  const t = Zt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null);
}
function Wa() {
  const t = Zt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), Zt.delete(this)), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function yc() {
  const t = Zt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null), Zt.delete(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function wc() {
  return Zt.get(this)?.playing ?? !1;
}
function kc(t) {
  const e = Zt.get(this);
  e && (e.speed = t);
}
function xc(t) {
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
  const i = ol(
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
        m.attr("class", "ray").attr("x1", (y) => this.scales.xPositionScale(y.x1)).attr("x2", (y) => this.scales.xPositionScale(y.x2)).attr("y1", (y) => this.scales.yPositionScale(y.y1)).attr("y2", (y) => this.scales.yPositionScale(y.y2));
      };
      if (this.state.env !== "development") return;
      const g = ll(this.props.shapes.value, this.props.stock.value).flatMap((m) => Object.values(m.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(g, o).join(
        (m) => m.append("line").call((y) => l.call(this, y)),
        (m) => m.call((y) => l.call(this, y)),
        (m) => m.remove()
      );
    }
    s = rl(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new cl();
  for (const o of i.toArray()) {
    const l = ul(t, o, this.props.stock.value);
    l && a.addPoints(l.toArray());
  }
  if (s) {
    const o = s.toArray();
    for (const l of o) {
      const r = dl(t, l, this.props.stock.value);
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
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), Sc.call(this, e, t), Pc.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Sc(t, e) {
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
      s.stopPropagation(), Ye(this).classed("hover", !0), Ye(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), Ye(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Pc(t, e) {
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
      s.stopPropagation(), Ye(this).classed("hover", !0);
      const a = Ye(this).attr("data-id"), o = Ye(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), Ye(this).classed("hover", !1);
      const a = Ye(this).attr("data-id");
      Ye(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function gi(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function Cc() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => gi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Zs.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.classed("hidden", !1).text((e) => Zs.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => gi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => Js.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.classed("hidden", !1).text((e) => Js.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => gi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => Ys.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.classed("hidden", !1).text((e) => Ys.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => gi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Xs.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, n, i) => {
      const s = i[n], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(s.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    }),
    (t) => t.classed("hidden", !1).text((e) => Xs.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("transform", (e, n, i) => {
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
function Zs(t) {
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
function Js(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function Ys(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : me({ v: t.l, o: this.numberConfig }).toString();
}
function Xs(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : me({ v: t.w, o: this.numberConfig }).toString();
}
function Ic() {
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
const Ac = (t) => t.id;
function Oc() {
  if (!this.props.containerWidth) return;
  Zn.call(this);
  const t = this.props.shapes.value.reduce((e, n) => {
    const i = parseInt(n.parentId);
    return i > e ? i : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Fc.call(this), Lc.call(this), Ic.call(this);
}
function Lc() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Ac).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return Qs.call(this, e), ea.call(this, e), e.on("mousedown", ta.bind(this)), e;
    },
    (t) => (Qs.call(this, t), ea.call(this, t), t.on("mousedown", ta.bind(this)), t),
    (t) => t.remove()
  ), Dc.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Cc.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Fc() {
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
  this.scales.scoreColorScale = yi([Bt(251, 224, 255), Bt(122, 0, 138)]).domain([n, i]);
}
function $c(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function Ec(t, e) {
  const n = e.outline;
  if (!n || n.length < 3) return "";
  const i = e.nestingRotation || 0;
  let s;
  if (e.holes?.length) {
    let I = 1 / 0, V = 1 / 0, M = -1 / 0, D = -1 / 0;
    for (const z of n)
      z.x < I && (I = z.x), z.y < V && (V = z.y), z.x > M && (M = z.x), z.y > D && (D = z.y);
    s = [
      { x: I, y: V },
      { x: M, y: V },
      { x: M, y: D },
      { x: I, y: D },
      { x: I, y: V }
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
  const r = Math.cos(i), g = Math.sin(i), m = a.map(
    (I) => I.map((V) => {
      if (i === 0) return { x: V.x, y: V.y };
      const M = V.x - o, D = V.y - l;
      return {
        x: r * M - g * D + o,
        y: g * M + r * D + l
      };
    })
  );
  let y = 1 / 0, p = 1 / 0;
  for (const I of m)
    for (const V of I)
      V.x < y && (y = V.x), V.y < p && (p = V.y);
  return m.map((I) => I.map((M) => ({
    x: t.scales.xPositionScale(M.x - y + (e.x || 0)),
    y: t.scales.yPositionScale(M.y - p + (e.y || 0))
  })).map(
    (M, D) => (D === 0 ? "M" : "L") + ` ${M.x} ${M.y}`
  ).join(" ") + " Z").join(" ");
}
function Qs(t) {
  const e = this;
  t.selectAll(".shape").remove(), t.each(function(i) {
    const s = Ye(this);
    $c(i) ? s.insert("path", ":first-child").datum(i).attr("class", "shape").attr("d", (a) => Ec(e, a)).attr("fill-rule", "evenodd").style("fill", (a) => Tn.call(e, a)) : s.insert("rect", ":first-child").datum(i).attr("class", "shape").attr("x", (a) => e.getRectangleCoordinate(a, "x")).attr("y", (a) => e.getRectangleCoordinate(a, "y")).attr("width", (a) => e.getWidthAttribute(a)).attr("height", (a) => e.getHeightAttribute(a)).style("fill", (a) => Tn.call(e, a));
  });
  const n = t.selectAll(".shape");
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Ql(
    this.selections.shapeRectangles.nodes().concat(n.nodes())
  ) : this.selections.shapeRectangles = n;
}
function ea(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const n = Ye(e.target);
    n.classed("hover", !0), n.classed("selected") || n.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, n) => {
    const i = Ye(e.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", Tn.call(this, n));
  }, { passive: !0 });
}
function ta(t, e) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && Tc.call(this, t, e), (this.settings.app || this.settings.embed) && Bc.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (Li.call(this), Zr.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function Tc(t, e) {
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
        ], Nc.call(this, e);
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
    console.table(Mc(e, n));
  }
}
function Mc(t, e) {
  return e.reduce((n, i) => {
    const s = _c(t, i);
    return n[i] = Array.isArray(s) ? s.join(", ") : s, n;
  }, {});
}
function Nc(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineState?.myStripParent;
  e && this.selections.shapeWrappers.filter((s) => s.id === e || s.group.addedAsGroup === e).select(".shape").classed("highlight-a", !0);
  const n = this.props.shapes.value.find((i) => i.id === e)?.guillotineState?.myStripParent;
  n && this.selections.shapeWrappers.filter((s) => s.id === n || s.group.addedAsGroup === e).select(".shape").classed("highlight-b", !0);
}
function Bc(t, e) {
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
      color: Tn.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(n), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function Tn(t) {
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
          return `rgb(${a.map((g, m) => Math.round(g + l * (o[m] - g))).join(",")})`;
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
const na = 3;
function Vc(t) {
  const e = [];
  for (const n of t) {
    const i = n.extras?.banding;
    if (n.added && i?.sides)
      for (const [s, a] of Object.entries(i.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(s)) continue;
        let o = s;
        if (n.rot) {
          const r = La({ [s]: !0 }, "cc");
          o = Object.keys(r)[0];
        }
        const l = Rc.call(this, n, o);
        l && e.push(l);
      }
  }
  return e;
}
function ia(t) {
  const e = na / 2;
  return t.attr("class", "banding").attr("x1", (n) => this.scales.xPositionScale(n.l1) + hi.call(this, n.type, "x", e)).attr("x2", (n) => this.scales.xPositionScale(n.l2) + hi.call(this, n.type, "x", e)).attr("y1", (n) => this.scales.yPositionScale(n.w1) + hi.call(this, n.type, "y", e)).attr("y2", (n) => this.scales.yPositionScale(n.w2) + hi.call(this, n.type, "y", e)).attr("stroke-width", na).attr("stroke", "white");
}
function Dc(t) {
  if (!this.settings.main) return;
  const e = Vc.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (n, i) => i).join(
    (n) => n.append("line").call((i) => ia.call(this, i)),
    (n) => n.call((i) => ia.call(this, i)),
    (n) => n.remove()
  );
}
function hi(t, e, n) {
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
function Rc(t, e) {
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
function Gc(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const sa = (t) => t.id;
function aa(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function oa(t) {
  return t.style("fill", (e) => `url(#grain-${e.grain || "n"})`).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function jc() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Jr.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], sa).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => aa.call(this, e)),
    (t) => t.call((e) => aa.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], sa).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => oa.call(this, e)),
    (t) => t.call((e) => oa.call(this, e)),
    (t) => t.remove()
  );
}
function qc(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function _c(t, e) {
  return er(t, e);
}
class Uc {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = Ye(e.elementID), this.selections.el === null)) return;
    const n = this.selections.el.node();
    n !== null && (this.selections.htmlEl = n, this.scales = {
      xScale: Vt(),
      yScale: Vt(),
      yPositionScale: Vt(),
      xPositionScale: Vt(),
      yAxisScale: Vt(),
      measurementScale: Vt(),
      shapeColorScale: yi(),
      scoreColorScale: yi()
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
    }, i = (s, a) => Bt("#" + (qc(s?.replace("#", "")) ? s.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(n).map(([s, a]) => [
        s,
        i(e.colors?.[s], a)
      ])
    ), this.scales.shapeColorScale = yi([
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
      this.selections.svgCanvas = Ye(e);
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
      const l = o[a], r = Ye(l);
      r.text(s.name);
      let g = r.text();
      const m = r.node();
      if (!m) return;
      let y = m.getComputedTextLength();
      const p = this.getWidthAttribute(s) - 20;
      for (; y > p && g.length > 0; )
        g = g.slice(0, -1), r.text(g.length ? g + "..." : ""), y = r.node().getComputedTextLength();
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => Tn.call(this, i));
    const n = Ye(e).select(".shape");
    if (n) {
      n.classed("selected", !0), n.style("fill", this.config.colors.partSelected.toString());
      const i = Ye(e).datum();
      this.callbacks.onShapeSelect(i, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    Oc.call(this);
  }
  drawStock() {
    jc.call(this);
  }
  drawCuts() {
    oc.call(this);
  }
  drawCuttingPath() {
    fc.call(this);
  }
  removeCuttingPath() {
    gc.call(this);
  }
  showCuttingPathStep(e) {
    pc.call(this, e);
  }
  animateCuttingPath() {
    vc.call(this);
  }
  pauseCuttingPathAnimation() {
    bc.call(this);
  }
  stopCuttingPathAnimation() {
    Wa.call(this);
  }
  resetCuttingPathAnimation() {
    yc.call(this);
  }
  isCuttingPathAnimating() {
    return wc.call(this);
  }
  setCuttingPathAnimationSpeed(e) {
    kc.call(this, e);
  }
  drawAllOffcuts() {
    sc.call(this);
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), Zn.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), ec.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Li.call(this);
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
    if (ci(e) && e.outline?.length >= 3)
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
    if (ci(e) && e.outline?.length >= 3) return !0;
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox();
    if (a.width === 0 && a.height === 0) return !1;
    const o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return a.width >= o || l < 40;
  }
  isLengthHidden(e, n, i) {
    if (ci(e) && e.outline?.length >= 3) return !0;
    if (this.settings.app) {
      const r = this.scales.measurementScale(e.l), g = this.scales.measurementScale(e.w);
      return r < 50 || g < 50;
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
    if (ci(e) && e.outline?.length >= 3) return !0;
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
      Ye(this).classed("hover", !0);
    }).on("mouseout", function() {
      Ye(this).classed("hover", !1);
    });
  }
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => Tn.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const n = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    Zn.call(this);
  }
  updateShapeVisibility() {
    Gc.call(this);
  }
  drawPositions(e) {
    return xc.call(this, e);
  }
  showCut(e) {
    dc.call(this, e);
  }
  resetCuts() {
    _a.call(this);
  }
}
const Wc = ["id"], zc = /* @__PURE__ */ Xe({
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
    moveMode: { default: () => Z(!1) }
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
      getStock: g,
      getShapes: m,
      getSegments: y,
      getCuts: p,
      cuttingPlan: F
    } = Oi(), I = t, V = n, M = (ce) => {
      V("part-click", ce);
    }, D = (ce) => {
      V("shape-colour-update", ce);
    }, z = (ce, x) => {
      ce?.autoId && V("shape-select", ce.autoId, x);
    }, Y = (ce) => {
      ce && V("add-to-parts-bin", ce);
    }, se = (ce, x) => {
      ce && V("move-shape", ce, x);
    }, E = Z(0), N = Z(0), ee = Z(null);
    let k, R = Z(!1);
    const w = At({
      debug: "",
      stretched: !1
    }), Q = () => {
      k?.state && (w.stretched = k.state.stretched);
    };
    dn(() => J());
    const ie = $(() => ({
      format: I.numberFormat,
      decimals: I.decimalPlaces
    })), re = $(() => I.stockAutoId ? g(I.stockAutoId) : s.value), ge = $(() => I.stockAutoId ? m(I.stockAutoId) : a.value), $e = $(() => I.main ? I.stockAutoId ? p(I.stockAutoId) : o.value : []), q = $(() => I.main ? I.stockAutoId ? y(I.stockAutoId) : l.value : []);
    ha(ee, (ce) => {
      const x = ce[0], { width: C, height: b } = x.contentRect;
      C > 0 && (E.value = C), V("resize", { width: C, height: b });
    }), Mo(
      E,
      (ce) => {
        k && (ce <= 0 || (k.setDevice(), k.resetShapeAxes(), k.removeCuttingPath(), k.drawAll(), Q(), r.value !== null && (k.toggleSegments(!0), k.showCut(r.value))));
      },
      { throttle: 100 }
    );
    let ne = !1;
    Ue(() => re.value, (ce) => {
      ce && (E.value <= 0 || (ne = !0, k.setDevice(), k.resetCuts(), k.removeSegments(), k.resetShapeAxes(), k.removeCuttingPath(), k.drawAll(), Q(), ht(() => ne = !1)));
    }, { immediate: !1 }), Ue(() => ge.value, (ce) => {
      ne || ce && (E.value <= 0 || (k.setDevice(), k.drawShapes()));
    }, { immediate: !1, deep: !0 }), I.main && (Ue(() => $e.value, () => {
      ne || E.value <= 0 || k.drawCuts();
    }, { immediate: !1, deep: !0 }), Ue(r, () => {
      r.value !== null && (E.value <= 0 || (k.toggleSegments(!0), k.showCut(r.value)));
    }, { immediate: !1 }), Ue(ie, (ce) => {
      k.updateNumberFormat(ce.format, ce.decimals, null);
    }, { immediate: !1 }));
    const J = () => {
      const ce = {
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
          containerWidth: E,
          stock: re,
          shapes: ge,
          cuts: $e,
          segments: q,
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
          onShapeColourUpdate: D,
          onShapeSelect: z,
          onAddToPartsBin: Y,
          onMoveShape: se,
          onPartClick: M
        }
      };
      k = new Uc(ce), w.debug = k.state.debug, R.value = !0;
    }, pe = (ce = !1) => {
      k && k.toggleShapes(ce);
    }, Me = (ce = !1) => {
      k && k.toggleCuts(ce);
    }, ve = (ce = !1) => {
      k && k.toggleSegments(ce);
    }, et = () => {
      k && k.drawShapes();
    }, Ke = () => {
      k && (k.drawStock(), Q());
    }, Lt = () => {
      k && (k.toggleSegments(!1), k.resetCuts());
    }, nt = (ce) => {
      k && (k.toggleSegments(!0), k.showCut(ce));
    }, Ft = (ce) => k ? k.drawPositions(ce) : !1, kt = () => {
      k && k.removePositions();
    }, Yt = (ce) => {
      k && k.findShape(ce);
    }, $t = () => {
      k && k.clearSelection();
    }, at = (ce) => k ? k.requiresStretch(ce) : !1, Et = (ce) => {
      k?.options && (k.options.enableStretch = ce, k.setAspectRatio(), k.drawAll(), Q());
    }, rt = () => k?.options?.enableStretch ?? !0;
    return Ue(() => I.flipY, (ce) => {
      k?.settings && (k.settings.flipY = ce, k.setAspectRatio(), k.drawAll());
    }), Ue(() => w.debug, (ce) => {
      k?.state && (k.state.debug = ce);
    }), e({
      loaded: R,
      toggleShapes: pe,
      toggleCuts: Me,
      toggleSegments: ve,
      drawShapes: et,
      drawStock: Ke,
      drawPositions: Ft,
      resetPositions: kt,
      findShape: Yt,
      clearSelection: $t,
      resetCuts: Lt,
      showCut: nt,
      requiresStretch: at,
      setEnableStretch: Et,
      getEnableStretch: rt,
      animateCuttingPath: () => {
        k && k.animateCuttingPath();
      },
      pauseCuttingPathAnimation: () => {
        k && k.pauseCuttingPathAnimation();
      },
      stopCuttingPathAnimation: () => {
        k && k.stopCuttingPathAnimation();
      },
      resetCuttingPathAnimation: () => {
        k && k.resetCuttingPathAnimation();
      },
      isCuttingPathAnimating: () => k?.isCuttingPathAnimating() ?? !1,
      setCuttingPathAnimationSpeed: (ce) => {
        k && k.setCuttingPathAnimationSpeed(ce);
      },
      state: w,
      get stretched() {
        return w.stretched;
      },
      set moving(ce) {
        k?.state && (k.state.moving = ce);
      }
    }), (ce, x) => (L(), j("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: ee,
      class: We([{ app: t.app }, "diagram-container"])
    }, null, 10, Wc));
  }
}), It = Z(null);
let Hc = 0;
function Kc(t) {
  const e = t || `action-menu-${++Hc}-${Date.now()}`, n = $({
    get: () => It.value === e,
    set: (m) => {
      m ? It.value = e : It.value === e && (It.value = null);
    }
  }), i = () => {
    It.value = e;
  }, s = () => {
    It.value === e && (It.value = null);
  }, a = () => {
    It.value = null;
  }, o = () => {
    n.value = !n.value;
  }, l = $(() => It.value !== null), r = $(() => It.value), g = $(() => It.value === e);
  return {
    // Instance-specific
    id: pt(Z(e)),
    isOpen: n,
    open: i,
    close: s,
    toggle: o,
    isThisMenuOpen: g,
    // Global singleton state (shared across all instances)
    closeAll: a,
    isAnyMenuOpen: l,
    currentOpenMenuId: r
  };
}
const Zc = { class: "action-menu" }, Jc = ["textContent"], Yc = {
  key: 0,
  class: "menu-divider"
}, Xc = {
  key: 1,
  class: "group-label"
}, Qc = /* @__PURE__ */ Xe({
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
    const n = t, i = e, { isOpen: s, close: a, toggle: o } = Kc(n.menuId), l = Z(), r = Z(), g = $(() => n.disabled), m = $(() => n.label), y = $(() => n.showLabel), p = $(() => n.icon), { floatingStyles: F } = No(l, r, {
      placement: n.placement,
      whileElementsMounted: sr,
      middleware: [
        tr(n.offset),
        nr(),
        ir({ padding: 8 })
      ]
    }), I = (w) => {
      if (!w) return ["fas", "question"];
      if (typeof w == "function" && (w = w(n)), Array.isArray(w))
        return w;
      if (typeof w == "string") {
        const Q = w.split(" ");
        if (Q.length >= 2) {
          const ie = Q[0], re = Q.slice(1).join("-").replace("fa-", "");
          return [ie, re];
        }
        return ["fas", w.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, V = $(() => I(p.value)), M = (w) => typeof w.active == "function" ? w.active(n) : typeof w.active == "boolean" ? w.active : !1, D = (w) => {
      if (!w.href) return !1;
      try {
        const Q = typeof w.href == "function" ? w.href(n) : w.href;
        return new URL(Q, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, z = (w) => w.href ? "a" : "div", Y = (w) => {
      const Q = {};
      if (w.href) {
        const ie = typeof w.href == "function" ? w.href(n) : w.href;
        if (Q.href = ie, D(w)) {
          const re = typeof w.target == "function" ? w.target(n) : w.target;
          Q.target = re || "_blank", Q.rel = w.rel || "noopener noreferrer";
        } else if (w.target) {
          const re = typeof w.target == "function" ? w.target(n) : w.target;
          Q.target = re;
        }
        w.rel && (Q.rel = w.rel);
      }
      return w.attrs && Object.assign(Q, w.attrs), Q;
    }, se = $(() => n.menuItems.map((w) => {
      const Q = { ...w };
      return typeof w.href == "function" && (Q.href = w.href(n)), typeof w.icon == "function" && (Q.icon = w.icon(n)), typeof w.disabled == "function" && (Q.disabled = w.disabled(n)), typeof w.label == "function" && (Q.label = w.label(n)), typeof w.variant == "function" && (Q.variant = w.variant(n)), typeof w.active == "function" && (Q.active = w.active(n)), typeof w.target == "function" && (Q.target = w.target(n)), typeof w.show == "function" && (Q.show = w.show(n)), Q;
    })), E = (w) => {
      w.stopPropagation(), w.preventDefault(), !g.value && o();
    }, N = (w, Q) => {
      if (Q.stopPropagation(), w.disabled && !w.href) {
        Q.preventDefault();
        return;
      }
      if (typeof w.action == "function" && w.action(w) === !1 && w.href) {
        Q.preventDefault();
        return;
      }
      i("action", {
        id: w.id,
        item: w
      }), w.href && n.closeOnLinkClick ? a() : w.href || a();
    }, ee = (w) => {
      const Q = [];
      if (w.variant) {
        const re = typeof w.variant == "function" ? w.variant(n) : w.variant;
        Q.push(`variant-${re}`);
      }
      if ((typeof w.disabled == "function" ? w.disabled(n) : w.disabled) && !w.href && Q.push("disabled"), M(w) && Q.push("active"), w.href && Q.push("menu-link"), D(w) && Q.push("external-link"), w.class) {
        const re = typeof w.class == "function" ? w.class(n) : w.class;
        Q.push(re);
      }
      return Q.join(" ");
    }, k = (w) => {
      const Q = w.target;
      s.value && l.value && r.value && !l.value.contains(Q) && !r.value.contains(Q) && a();
    }, R = (w) => {
      w.key === "Escape" && s.value && a();
    };
    return dn(() => {
      document.addEventListener("click", k), document.addEventListener("keydown", R);
    }), Jn(() => {
      document.removeEventListener("click", k), document.removeEventListener("keydown", R);
    }), (w, Q) => (L(), j("div", Zc, [
      H("div", {
        ref_key: "trigger",
        ref: l,
        onClick: E,
        class: We(["actions-btn", { active: A(s), disabled: g.value }])
      }, [
        p.value ? (L(), Ie(A(xi), {
          key: 0,
          icon: V.value,
          class: "icon"
        }, null, 8, ["icon"])) : ae("", !0),
        y.value ? (L(), j("span", {
          key: 1,
          class: "label",
          textContent: ue(m.value)
        }, null, 8, Jc)) : ae("", !0)
      ], 2),
      (L(), Ie(Bo, { to: "body" }, [
        A(s) && !g.value ? (L(), j("div", {
          key: 0,
          ref_key: "floating",
          ref: r,
          style: yt(A(F)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: Q[0] || (Q[0] = ma(() => {
          }, ["stop"]))
        }, [
          (L(!0), j(He, null, tt(se.value, (ie, re) => (L(), j(He, { key: re }, [
            ie.type === "divider" ? (L(), j("div", Yc)) : ie.type === "group" ? (L(), j("div", Xc, ue(ie.label), 1)) : ie.show !== !1 ? (L(), Ie(Vo(z(ie)), rn({
              key: 2,
              ref_for: !0
            }, Y(ie), {
              onClick: (ge) => N(ie, ge),
              id: ie.id,
              class: ["menu-item", ee(ie)],
              disabled: ie.disabled && !ie.href
            }), {
              default: Si(() => [
                ie.icon || M(ie) ? (L(), Ie(A(xi), {
                  key: 0,
                  icon: M(ie) ? ["fass", "check"] : I(ie.icon)
                }, null, 8, ["icon"])) : ae("", !0),
                H("span", null, ue(ie.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ae("", !0)
          ], 64))), 128))
        ], 4)) : ae("", !0),
        A(s) && !g.value ? (L(), j("div", {
          key: 1,
          class: "backdrop",
          onClick: Q[1] || (Q[1] = //@ts-ignore
          (...ie) => A(a) && A(a)(...ie))
        })) : ae("", !0)
      ]))
    ]));
  }
}), la = (t, e, n) => {
  if (e === "unitDependent")
    if (n === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const i = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), s = Ca(t);
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
function eu({
  props: t,
  emit: e,
  isMounted: n
}) {
  const i = Z({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), s = (l, r = !1) => {
    if (l == null || l === "") {
      const m = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? m ? { value: null, valid: !1, message: "field_required" } : { value: l === null ? null : "", valid: !0 } : fl(l, "decimal", m);
    }
    const g = String(l);
    switch (t.type) {
      case "string":
        return { value: g, valid: !0 };
      case "unitDependent":
        if (r)
          return la(g, t.type, t.numberFormat);
        try {
          const m = me({
            v: l,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof m == "number") {
            let y = m, p = !0, F;
            return typeof t.min == "number" && y < t.min && (y = t.min, p = !1, F = "below_min"), typeof t.max == "number" && y > t.max && (y = t.max, p = !1, F = "above_max"), { value: y, valid: p, message: F };
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
          return la(g, t.type);
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
        const g = s(r.value, !0);
        e("validation", g, t.id), e("input", r.value), a(g, !0) && e("update:value", g.value);
      },
      handleBlur: (l) => {
        if (!n.value) return;
        i.value.isTyping = !1;
        const r = l.target, g = s(r.value, !1);
        e("validation", g, t.id), a(g) && (e("update:value", g.value), i.value.lastValidValue = String(g.value ?? "")), e("blur", l);
      },
      handleFocus: (l) => {
        n.value && (i.value.isTyping = !0, e("focus", l));
      },
      handleKeydown: (l) => {
        if (n.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(l.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(l.key))
            if (t.type === "unitDependent" && t.numberFormat === "fraction") {
              const r = l.target, g = r.value, m = r.selectionStart || 0, y = g.substring(0, m);
              if (l.key === "/" && g.includes("/")) {
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
            const r = l.target, g = s(r.value, !1);
            e("validation", g, t.id), a(g) && (e("update:value", g.value), i.value.lastValidValue = String(g.value ?? "")), e("enter", g);
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
        const r = l.target, g = s(r.value, !1);
        e("validation", g, t.id), a(g) && (e("update:value", g.value), i.value.lastValidValue = String(g.value ?? ""));
      },
      handlePaste: (l) => {
        if (!n.value) return;
        const r = l.clipboardData?.getData("text")?.trim() || "";
        if (t.type === "unitDependent" && t.numberFormat === "fraction") {
          const g = r.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!Ca(g)) {
            l.preventDefault(), e("validation", {
              value: g,
              valid: !1,
              message: `Pasted text "${r}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (g !== r) {
            l.preventDefault();
            const m = l.target;
            m.value = g;
            const y = s(g, !0);
            e("validation", y, t.id), e("input", g);
          }
        }
        e("paste", l);
      }
    },
    processValue: s
  };
}
function tu({
  props: t,
  emit: e,
  isMounted: n
}) {
  const i = Z({
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
function nu({
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
const iu = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], su = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = Z(!0), a = Z(null), o = $(() => n.value === n.trueValue), {
      handleCheckboxChange: l,
      handleFocus: r,
      handleBlur: g
    } = nu({
      props: n,
      emit: i,
      isMounted: s
    });
    return (m, y) => (L(), j("input", {
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
      (...p) => A(l) && A(l)(...p)),
      onFocus: y[1] || (y[1] = //@ts-ignore
      (...p) => A(r) && A(r)(...p)),
      onBlur: y[2] || (y[2] = //@ts-ignore
      (...p) => A(g) && A(g)(...p))
    }, null, 40, iu));
  }
}), au = ["for"], mi = /* @__PURE__ */ Xe({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (L(), j("label", {
      for: t.id,
      class: "input-label"
    }, ue(t.label), 9, au));
  }
}), ou = ["id", "disabled", "aria-label"], lu = { class: "multiselect__text" }, ru = {
  key: 0,
  class: "multiselect__dropdown"
}, cu = ["checked", "disabled", "onChange"], uu = { class: "multiselect__option-label" }, du = {
  key: 1,
  class: "multiselect__no-results"
}, fu = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = Z(!1), a = Z(null), o = Z(null), l = Z(""), r = $(() => {
      const V = n.value;
      return V ? Array.isArray(V) ? new Set(V.map(String)) : new Set(String(V).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), g = $(() => n.options.map((V) => ({
      value: V.value,
      label: V.label ?? String(V.value),
      hidden: V.hidden ?? !1,
      disabled: V.disabled ?? !1
    }))), m = $(() => {
      if (!l.value) return g.value;
      const V = l.value.toLowerCase();
      return g.value.filter(
        (M) => (M.label ?? String(M.value)).toLowerCase().includes(V)
      );
    }), y = $(() => {
      const V = r.value.size;
      if (V === 0) return n.placeholder || "All";
      if (V === 1) {
        const M = [...r.value][0];
        return g.value.find((z) => String(z.value) === M)?.label || M;
      }
      return `${V} selected`;
    });
    function p() {
      n.disabled || (s.value = !s.value, s.value && (l.value = "", n.searchable && ht(() => o.value?.focus())));
    }
    function F(V) {
      const M = String(V), D = new Set(r.value);
      D.has(M) ? D.delete(M) : D.add(M), i("update:value", [...D]);
    }
    function I(V) {
      a.value && !a.value.contains(V.target) && (s.value = !1);
    }
    return dn(() => document.addEventListener("click", I)), Do(() => document.removeEventListener("click", I)), (V, M) => (L(), j("div", {
      class: "multiselect",
      ref_key: "rootRef",
      ref: a
    }, [
      H("button", {
        type: "button",
        class: "multiselect__trigger",
        id: n.id,
        disabled: n.disabled,
        "aria-label": n.ariaLabel,
        onClick: p
      }, [
        H("span", lu, ue(y.value), 1)
      ], 8, ou),
      s.value ? (L(), j("div", ru, [
        n.searchable ? ms((L(), j("input", {
          key: 0,
          ref_key: "searchRef",
          ref: o,
          "onUpdate:modelValue": M[0] || (M[0] = (D) => l.value = D),
          type: "text",
          class: "multiselect__search",
          placeholder: "Search...",
          onClick: M[1] || (M[1] = ma(() => {
          }, ["stop"]))
        }, null, 512)), [
          [Ro, l.value]
        ]) : ae("", !0),
        (L(!0), j(He, null, tt(m.value, (D) => (L(), j("label", {
          key: D.value,
          class: We(["multiselect__option", { "multiselect__option--zero": D.hidden }])
        }, [
          H("input", {
            type: "checkbox",
            checked: r.value.has(String(D.value)),
            disabled: D.disabled,
            onChange: (z) => F(D.value)
          }, null, 40, cu),
          H("span", uu, ue(D.label), 1)
        ], 2))), 128)),
        n.searchable && m.value.length === 0 ? (L(), j("div", du, " No matches ")) : ae("", !0)
      ])) : ae("", !0)
    ], 512));
  }
}), pu = /* @__PURE__ */ Yn(fu, [["__scopeId", "data-v-75036be8"]]), gu = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], hu = ["disabled", "selected"], mu = {
  key: 0,
  value: " "
}, vu = ["hidden", "value", "disabled"], bu = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = Z(!0), a = Z(null), o = $(() => n.options.map((r) => ({
      value: r.value,
      label: r.label?.toUpperCase() ?? r.value?.toString()?.toUpperCase(),
      hidden: r.hidden ?? !1,
      disabled: r.disabled ?? !1
    }))), {
      handleSelectChange: l
    } = tu({
      props: n,
      emit: i,
      isMounted: s
    });
    return (r, g) => (L(), j("select", rn(r.$attrs, {
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
      onChange: g[0] || (g[0] = //@ts-ignore
      (...m) => A(l) && A(l)(...m))
    }), [
      H("option", {
        value: "",
        disabled: n.selectFirstOptionDisabled,
        selected: !n.value
      }, ue(n.text?.select?.toUpperCase() ?? "SELECT"), 9, hu),
      n.multiEdit ? (L(), j("option", mu, ue(n.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ae("", !0),
      (L(!0), j(He, null, tt(o.value, (m) => (L(), j("option", {
        key: m.value,
        hidden: m.hidden,
        value: m.value,
        disabled: m.disabled
      }, ue(m.label), 9, vu))), 128))
    ], 16, gu));
  }
}), yu = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], hs = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = Z(!0), a = Z(null), {
      handleInput: o,
      handleMouseDown: l,
      handleMouseUp: r,
      handleFocus: g,
      handleBlur: m,
      handleKeydown: y,
      handleCompositionStart: p,
      handleCompositionEnd: F,
      handlePaste: I
    } = eu({
      props: n,
      emit: i,
      isMounted: s
    }), V = (M) => {
      const D = M.getBoundingClientRect(), z = window.getComputedStyle(M);
      return D.width > 0 && D.height > 0 && z.display !== "none" && z.visibility !== "hidden";
    };
    return dn(() => {
      ze(n.default) && (n.value === void 0 || n.value === null) && i("update:value", n.default), n.focus && a.value && V(a.value) && ht(() => a.value.focus());
    }), Jn(() => {
      s.value = !1;
    }), (M, D) => (L(), j("input", rn(M.$attrs, {
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
      onInput: D[0] || (D[0] = //@ts-ignore
      (...z) => A(o) && A(o)(...z)),
      onFocus: D[1] || (D[1] = //@ts-ignore
      (...z) => A(g) && A(g)(...z)),
      onBlur: D[2] || (D[2] = //@ts-ignore
      (...z) => A(m) && A(m)(...z)),
      onKeydown: D[3] || (D[3] = //@ts-ignore
      (...z) => A(y) && A(y)(...z)),
      onCompositionstart: D[4] || (D[4] = //@ts-ignore
      (...z) => A(p) && A(p)(...z)),
      onCompositionend: D[5] || (D[5] = //@ts-ignore
      (...z) => A(F) && A(F)(...z)),
      onPaste: D[6] || (D[6] = //@ts-ignore
      (...z) => A(I) && A(I)(...z)),
      onMousedown: D[7] || (D[7] = //@ts-ignore
      (...z) => A(l) && A(l)(...z)),
      onMouseup: D[8] || (D[8] = //@ts-ignore
      (...z) => A(r) && A(r)(...z))
    }), null, 16, yu));
  }
}), wu = ["data-field-id"], ku = {
  key: 0,
  class: "input-label-group"
}, xu = {
  key: 1,
  class: "password-input-wrapper"
}, Su = ["aria-label"], Pu = ["disabled", "selected"], Cu = {
  key: 0,
  value: " "
}, Iu = ["hidden", "value", "disabled"], Au = ["id", "name", "value", "disabled"], Ou = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Lu = {
  key: 2,
  class: "help-text"
}, Un = /* @__PURE__ */ Xe({
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
    const n = e, i = t, s = Z(null), a = Z(null), o = Z(!0), l = Z(i.numberFormat), r = Z(!1), g = $(() => i.custom ? "custom-" + i.id : i.id), m = $(() => `${g.value}-error`), y = $(() => i.label || i.placeholder), p = $(() => Q(i.type, i.numberFormat, r.value)), F = $(() => ie(i.type, i.numberFormat)), I = $(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(i.type)), V = $(() => {
      let q = i.value;
      if (i.multiEdit && (q === 0 || q === 1)) return null;
      if (i.type !== "unitDependent" || !q) return q;
      try {
        return me({ v: q, nf: i.numberFormat });
      } catch {
        return i.numberFormat === "decimal" ? 0 : "0";
      }
    }), M = $(() => i.options.map((q) => ({
      value: q.value,
      label: q.label || q.value?.toString(),
      hidden: q.hidden || !1,
      disabled: q.disabled || !1
    }))), D = $(() => M.value.map((q) => {
      const ne = q.label ? ke(q.label) : q.value?.toString();
      return {
        ...q,
        // Translate the label key first, then uppercase the translated result
        label: ne?.toUpperCase() || q.value?.toString().toUpperCase()
      };
    })), z = $(() => ({
      input: !0,
      issue: i.issue || !o.value,
      warning: i.warning,
      required: i.required,
      disabled: i.disabled
    })), Y = $(() => ({
      id: g.value,
      name: i.name,
      value: i.value,
      disabled: i.disabled,
      readonly: i.readonly,
      required: i.required,
      "aria-label": y.value,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.issue ? m.value : void 0
    })), se = $(() => ({
      ...Y.value,
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
    })), E = $(() => ({
      ...Y.value,
      trueValue: i.trueValue,
      falseValue: i.falseValue
    })), N = $(() => ({
      ...Y.value,
      options: D.value,
      selectFirstOptionDisabled: i.selectFirstOptionDisabled,
      multiEdit: i.multiEdit,
      numberFormat: i.numberFormat,
      text: i.text,
      output: i.output
    })), ee = $(() => (i.text?.select || "SELECT").toUpperCase()), k = $(() => (i.text?.delete || "DELETE").toUpperCase()), R = (q) => {
      a.value = q;
    }, w = (q) => i.label && i.enableLabel && i.labelPosition === q, Q = (q, ne, J) => {
      switch (q) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return ne === "fraction" ? "text" : "number";
        case "password":
          return J ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, ie = (q, ne) => {
      if (q === "unitDependent")
        return ne === "fraction" ? "text" : "decimal";
      switch (q) {
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
    }, re = (q) => {
      n("update:value", q);
    }, ge = (q, ne) => {
      q.valid === void 0 || q.valid === !0 ? (o.value = !0, n("validation", s.value, q)) : q.valid === !1 && q.message && (o.value = !1, console.warn(`Field validation error for field ${ne} - ${q.message}`), n("validation", s.value, q));
    }, $e = () => {
      n("blur");
    };
    return Ue(() => i.numberFormat, (q, ne) => {
      if (i.shouldConvertNumberFormat !== !1) {
        if (i.type === "unitDependent" && q !== ne && i.value !== null && i.value !== void 0 && i.value !== "")
          try {
            const J = me({ v: i.value, nf: q });
            n("update:value", J);
          } catch {
            n("update:value", q === "decimal" ? 0 : "0");
          }
        l.value = q;
      }
    }), (q, ne) => (L(), j("div", {
      ref_key: "fieldRef",
      ref: s,
      class: We(["input-wrapper", z.value]),
      "data-field-id": g.value
    }, [
      t.type === "checkbox" ? (L(), j("div", ku, [
        w("first") ? (L(), Ie(mi, {
          key: 0,
          id: g.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0),
        t.type === "checkbox" ? (L(), Ie(su, rn({
          key: 1,
          ref: R,
          type: "checkbox"
        }, E.value, {
          value: t.value,
          "onUpdate:value": ne[0] || (ne[0] = (J) => n("update:value", J))
        }), null, 16, ["value"])) : ae("", !0),
        w("last") ? (L(), Ie(mi, {
          key: 2,
          id: g.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0)
      ])) : (L(), j(He, { key: 1 }, [
        w("first") ? (L(), Ie(mi, {
          key: 0,
          id: g.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0),
        t.type === "password" ? (L(), j("div", xu, [
          De(hs, rn({ ref: R }, se.value, {
            name: i.name,
            "input-type": p.value,
            "input-mode": F.value,
            value: V.value,
            "disable-required-validation": t.disableRequiredValidation,
            onValidation: ge,
            "onUpdate:value": re,
            onBlur: $e
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          H("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": r.value ? "Hide password" : "Show password",
            onClick: ne[1] || (ne[1] = (J) => r.value = !r.value)
          }, ue(r.value ? "🙈" : "👁"), 9, Su)
        ])) : I.value ? (L(), Ie(hs, rn({
          key: 2,
          ref: R
        }, se.value, {
          name: i.name,
          "input-type": p.value,
          "input-mode": F.value,
          value: V.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: ge,
          "onUpdate:value": re,
          onBlur: $e
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (L(), Ie(bu, rn({
          key: 3,
          ref: R
        }, N.value, {
          name: i.name,
          "onUpdate:value": ne[2] || (ne[2] = (J) => n("update:value", J))
        }), {
          default: Si(() => [
            H("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, ue(ee.value), 9, Pu),
            t.multiEdit ? (L(), j("option", Cu, ue(k.value), 1)) : ae("", !0),
            (L(!0), j(He, null, tt(D.value, (J) => (L(), j("option", {
              key: J.value,
              hidden: J.hidden,
              value: J.value,
              disabled: J.disabled
            }, ue(J.label), 9, Iu))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : t.type === "multiselect" ? (L(), Ie(pu, {
          key: 4,
          ref: R,
          id: g.value,
          name: i.name,
          value: t.value,
          options: M.value,
          disabled: t.disabled,
          readonly: t.readonly,
          "aria-label": y.value,
          placeholder: t.placeholder,
          searchable: i.searchable,
          "onUpdate:value": ne[3] || (ne[3] = (J) => n("update:value", J))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : t.type === "color" ? (L(), j("input", {
          key: 5,
          id: g.value,
          name: i.name || g.value,
          ref: R,
          type: "color",
          value: t.value,
          disabled: t.disabled,
          onInput: ne[4] || (ne[4] = (J) => n("update:value", J.target.value))
        }, null, 40, Au)) : t.type === "textarea" ? (L(), j("textarea", {
          key: 6,
          id: g.value,
          name: i.name || g.value,
          ref: R,
          value: t.value,
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          required: t.required,
          rows: t.rows,
          autocomplete: t.autocomplete,
          onInput: ne[5] || (ne[5] = (J) => n("update:value", J.target.value))
        }, null, 40, Ou)) : ae("", !0),
        w("last") ? (L(), Ie(mi, {
          key: 7,
          id: g.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0)
      ], 64)),
      t.info ? (L(), j("small", Lu, ue(t.info), 1)) : ae("", !0),
      os(q.$slots, "default")
    ], 10, wu));
  }
}), Fu = {
  key: 0,
  class: "action-bar"
}, $u = { class: "add-custom" }, Eu = ["disabled"], Tu = { class: "c-field-action extras-field-group" }, Mu = ["disabled", "title", "onClick"], Nu = {
  key: 0,
  class: "price"
}, Bu = /* @__PURE__ */ Xe({
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
      shouldShowAll: s,
      supportsFaces: a,
      supportsSides: o,
      canDelete: l,
      getLocationLabel: r,
      getInputType: g,
      getInputConfigForLocation: m,
      getSelectOptions: y,
      getPriceDisplay: p,
      shouldShowDeleteButton: F,
      getLocationGroup: I,
      isLocationVisible: V,
      handleInputChange: M,
      handleDelete: D
    } = hr({
      shape: Ot(n, "shape"),
      extraType: n.extraType,
      allOptions: Ot(n, "allOptions"),
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
      newCustomName: z,
      canAddCustomName: Y,
      isActionMenuDisabled: se,
      customNameActions: E,
      handleAddCustomName: N,
      handleCustomNameAction: ee
    } = mr({
      extraType: n.extraType,
      customNames: Ot(n, "customNames"),
      usedNames: Ot(n, "usedNames"),
      allowCustomNames: n.allowCustomNames,
      getSelectOptions: y,
      onCustomNameAdded: (q) => i("custom-name-added", n.extraType, q),
      onCustomNameDeleted: (q) => i("custom-name-deleted", n.extraType, q)
    }), {
      renderLocations: k,
      getInputId: R,
      getDeleteConfig: w
    } = vr({
      extraType: n.extraType,
      allOptions: n.allOptions,
      labels: n.labels,
      shapeIndex: n.shapeIndex || 0,
      enablePricing: n.enablePricing,
      shouldShowAll: s,
      getInputType: g,
      getInputConfig: (q, ne) => m(q, ne),
      getAllInputConfig: (q) => m("all", q),
      getInputConfigForLocation: m,
      canDelete: l,
      getLocationLabel: r,
      shouldShowDeleteButton: F,
      locations: Ot(n, "locations"),
      locationGroups: Ot(n, "locationGroups"),
      shape: Ot(n, "shape"),
      orientationModel: n.orientationModel
    }), Q = Z(!1), ie = $(() => (q) => {
      const ne = I(q);
      return ne === "all" || ne === "faces" || ne === "sides";
    }), re = $(() => (q) => Ci(n.extraType).includes(q) ? Wn(q) === "face" : !1), ge = $(() => (q) => Ci(n.extraType).includes(q) ? Wn(q) === "side" : !1), $e = $(() => (q) => n.shape.issues?.some((ne) => ne.category?.includes("extras") && ne.field?.some((J) => J[0] === "extras" && J[1] === n.extraType && J[2] === q)) ?? !1);
    return dn(() => {
      const ne = n.shape.extras?.[n.extraType];
      if (!ne || typeof ne != "object") {
        Q.value = !0, console.error(`Missing or invalid ${n.extraType} in shape`);
        return;
      }
      if (a.value && !("faces" in ne)) {
        Q.value = !0, console.error(`Missing faces property in ${n.extraType}`);
        return;
      }
      if (o.value && !("sides" in ne)) {
        Q.value = !0, console.error(`Missing sides property in ${n.extraType}`);
        return;
      }
    }), (q, ne) => {
      const J = yn("FontAwesomeIcon");
      return Q.value ? ae("", !0) : (L(), j("div", {
        key: 0,
        class: We(["extras group", [t.extraType]]),
        style: yt({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (L(), j("div", Fu, [
          H("div", $u, [
            De(hs, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: A(z),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": ne[0] || (ne[0] = (pe) => z.value = pe || ""),
              onKeydown: Go(A(N), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            H("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !A(Y),
              onClick: ne[1] || (ne[1] = //@ts-ignore
              (...pe) => A(N) && A(N)(...pe))
            }, " Add ", 8, Eu)
          ]),
          De(Qc, {
            "menu-items": A(E),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: A(se),
            onAction: A(ee)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ae("", !0),
        H("div", {
          class: "inputs extras-grid grid-layout",
          style: yt({ "grid-template-columns": t.enablePricing ? "1fr max-content" : "1fr" })
        }, [
          (L(!0), j(He, null, tt(A(k), (pe) => (L(), j(He, { key: pe }, [
            A(V)(pe) ? (L(), j(He, { key: 0 }, [
              H("div", Tu, [
                H("label", {
                  class: We(["extras-location-label", {
                    "group-label": ie.value(pe),
                    "face-label": re.value(pe),
                    "side-label": ge.value(pe),
                    "has-validation-issue": $e.value(pe)
                  }])
                }, ue(A(r)(pe)), 3),
                (L(!0), j(He, null, tt(t.allOptions, (Me, ve) => (L(), Ie(Un, rn({
                  key: `${pe}-${ve}`,
                  id: A(R)(pe, ve),
                  "data-field": `${t.extraType}-${pe}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": ve
                }, { ref_for: !0 }, A(m)(pe, ve), {
                  "onUpdate:value": (et) => A(M)(pe, ve, et)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                A(w)(pe).show ? (L(), j("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !A(w)(pe).enabled,
                  title: A(w)(pe).ariaLabel,
                  onClick: (Me) => A(D)(pe)
                }, [
                  De(J, { icon: ["fass", "trash"] })
                ], 8, Mu)) : ae("", !0)
              ]),
              t.enablePricing ? (L(), j("div", Nu, ue(A(p)(pe)), 1)) : ae("", !0)
            ], 64)) : ae("", !0)
          ], 64))), 128))
        ], 4),
        ae("", !0)
      ], 6));
    };
  }
}), ts = /* @__PURE__ */ Yn(Bu, [["__scopeId", "data-v-2fe93fb2"]]);
let ft = null;
function Vu(t, e) {
  return ft = Ru(t, e), ft;
}
function za(t) {
  if (!ft) throw new Error("Pagination not initialized");
  return {
    items: $(() => ft.getItems(t)),
    currentPage: $(() => ft.getCurrentPage(t)),
    currentIndex: $(() => ft.getCurrentIndex(t)),
    totalPages: $(() => ft.paginatedArrays.value.get(t)?.totalPages || 0),
    itemsPerPage: $(() => ft.getItemsPerPage(t)),
    resetPagination: () => ft.resetPagination(t),
    nextPage: () => ft.nextPage(t),
    previousPage: () => ft.previousPage(t),
    goToPage: (e) => ft.goToPage(t, e),
    setItemsPerPage: (e) => ft.setItemsPerPage(t, e)
  };
}
function Du(t, e) {
  const n = za(t);
  return n.setItemsPerPage(e), n;
}
function Ru(t, e) {
  const n = /* @__PURE__ */ new Map(), i = Z({}), s = (E, N) => {
    if ("value" in N) {
      const ee = e[E]?.alwaysInclude;
      Ue(
        () => {
          const k = N.value;
          return ee ? k.filter((R) => !ee(R)).length : k.length;
        },
        (k, R) => {
          const w = i.value[E];
          if (!w) return;
          const Q = Math.ceil(k / w.itemsPerPage);
          if (k > R) {
            const ie = Math.ceil(k / w.itemsPerPage), re = w.currentPage * w.itemsPerPage;
            k > re && w.currentPage < ie && (w.currentPage = ie);
          } else k < R && w.currentPage > Q && (w.currentPage = Math.max(1, Q));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(t).forEach(([E, N]) => {
    const ee = e[E];
    if (!ee)
      throw new Error(`Missing pagination options for array: ${E}`);
    n.set(E, N), i.value[E] = {
      currentPage: ee.initialPage || 1,
      itemsPerPage: ee.itemsPerPage
    }, s(E, N);
  });
  const a = (E, N) => {
    const ee = i.value[E];
    if (!ee) return;
    const k = o(E);
    ee.currentPage = Math.max(1, Math.min(N, k));
  }, o = (E) => {
    const N = n.get(E);
    if (!N) return 0;
    const ee = A(N), k = i.value[E];
    if (!k) return 0;
    const R = e[E], w = R?.alwaysInclude ? ee.filter((Q) => !R.alwaysInclude(Q)) : ee;
    return Math.max(1, Math.ceil(w.length / k.itemsPerPage));
  }, l = $(() => {
    const E = /* @__PURE__ */ new Map();
    return n.forEach((N, ee) => {
      const k = A(N), R = Array.isArray(k) ? k : [], w = i.value[ee], Q = e[ee], ie = Q?.alwaysInclude ? R.filter(Q.alwaysInclude) : [], re = Q?.alwaysInclude ? R.filter((J) => !Q.alwaysInclude(J)) : R, ge = Math.ceil(re.length / w.itemsPerPage), $e = (w.currentPage - 1) * w.itemsPerPage, q = $e + w.itemsPerPage, ne = [
        ...ie,
        ...re.slice($e, q)
      ];
      E.set(ee, {
        items: ne,
        currentPage: w.currentPage,
        totalPages: ge,
        isLastPage: w.currentPage >= ge,
        hasNextPage: w.currentPage < ge,
        hasPreviousPage: w.currentPage > 1
      });
    }), E;
  });
  return {
    paginatedArrays: l,
    addArray: (E, N, ee) => {
      n.set(E, N), i.value[E] = {
        currentPage: ee.initialPage || 1,
        itemsPerPage: ee.itemsPerPage
      }, e[E] = ee, s(E, N);
    },
    removeArray: (E) => {
      n.delete(E);
      const N = { ...i.value };
      delete N[E], i.value = N;
    },
    hasArray: (E) => n.has(E),
    clearArrays: () => {
      n.clear(), i.value = {};
    },
    goToPage: a,
    nextPage: (E) => {
      const N = i.value[E];
      N && a(E, N.currentPage + 1);
    },
    previousPage: (E) => {
      const N = i.value[E];
      N && a(E, N.currentPage - 1);
    },
    resetPagination: (E) => {
      if (E) {
        const N = i.value[E];
        N && (N.currentPage = 1);
      } else
        Object.values(i.value).forEach((N) => {
          N.currentPage = 1;
        });
    },
    getCurrentPage: (E) => i.value[E]?.currentPage || 1,
    getCurrentIndex: (E) => {
      const N = i.value[E];
      return N ? (N.currentPage - 1) * N.itemsPerPage : 0;
    },
    getItemsPerPage: (E) => {
      const N = i.value[E];
      if (!N) throw new Error(`No pagination state found for key: ${E}`);
      return N.itemsPerPage;
    },
    setItemsPerPage: (E, N) => {
      const ee = i.value[E];
      ee && (ee.itemsPerPage = N, a(E, ee.currentPage));
    },
    getStartIndex: (E) => {
      const N = i.value[E];
      return N ? (N.currentPage - 1) * N.itemsPerPage : 0;
    },
    getItems: (E) => l.value.get(E)?.items || []
  };
}
const Gu = {
  key: 0,
  class: "menu pagination"
}, ju = { class: "c-btn-group" }, qu = { class: "pagination-info font-sm" }, _u = /* @__PURE__ */ Xe({
  __name: "Pagination",
  props: {
    arrayKey: {},
    disabled: { type: Boolean, default: !1 },
    maxPage: { default: 0 },
    itemsPerPage: { default: 20 }
  },
  setup(t) {
    const e = t, { currentPage: n, totalPages: i, goToPage: s } = Du(e.arrayKey, e.itemsPerPage), a = () => {
      e.disabled || n.value === 1 || s(1);
    }, o = () => {
      e.disabled || n.value === 1 || s(n.value - 1);
    }, l = () => {
      e.disabled || n.value >= i.value || e.maxPage > 0 && n.value >= e.maxPage || s(n.value + 1);
    }, r = () => {
      if (e.disabled || n.value >= i.value || e.maxPage > 0 && n.value >= e.maxPage) return;
      const g = e.maxPage > 0 ? Math.min(e.maxPage, i.value) : i.value;
      s(g);
    };
    return (g, m) => {
      const y = yn("FontAwesomeIcon");
      return A(i) > 1 ? (L(), j("div", Gu, [
        H("div", ju, [
          H("button", {
            type: "button",
            class: We(["c-btn first", { disabled: t.disabled || A(n) === 1 }]),
            onClick: a
          }, [
            De(y, { icon: ["fass", "chevrons-left"] }),
            Qe(ue(A(ke)("pagination.first")), 1)
          ], 2),
          H("button", {
            type: "button",
            class: We(["c-btn prev", { disabled: t.disabled || A(n) === 1 }]),
            onClick: o
          }, [
            De(y, { icon: ["fass", "chevron-left"] }),
            Qe(ue(A(ke)("pagination.previous")), 1)
          ], 2),
          H("button", {
            type: "button",
            class: We(["c-btn next", { disabled: t.disabled || A(n) >= A(i) || t.maxPage > 0 && A(n) >= t.maxPage }]),
            onClick: l
          }, [
            Qe(ue(A(ke)("pagination.next")), 1),
            De(y, { icon: ["fass", "chevron-right"] })
          ], 2),
          H("button", {
            type: "button",
            class: We(["c-btn last", { disabled: t.disabled || A(n) >= A(i) || t.maxPage > 0 && A(n) >= t.maxPage }]),
            onClick: r
          }, [
            Qe(ue(A(ke)("pagination.last")), 1),
            De(y, { icon: ["fass", "chevrons-right"] })
          ], 2)
        ]),
        H("div", qu, ue(A(ke)("pagination.page")) + " " + ue(A(n)) + " / " + ue(A(i)), 1)
      ])) : ae("", !0);
    };
  }
});
function Uu(t) {
  const e = Z({
    key: null,
    function: null,
    sortingKey: null,
    definition: null
  }), n = Z("asc"), i = Z(!1), s = (l, r) => l == null && r == null ? 0 : l == null ? 1 : r == null ? -1 : typeof l == "string" && typeof r == "string" ? l.localeCompare(r) : typeof l == "number" && typeof r == "number" ? l - r : String(l).localeCompare(String(r)), a = (l) => typeof l == "function" ? (e.value = { ...e.value, function: l, key: null, sortingKey: null }, l) : typeof l == "string" && l in bi ? (e.value = { ...e.value, sortingKey: l, key: null, function: null }, bi[l]) : Array.isArray(l) ? (e.value = { ...e.value, definition: l, key: null, function: null, sortingKey: null }, pl(l)) : (e.value = { ...e.value, key: l, function: null, sortingKey: null }, (r, g) => {
    const m = r[l], y = g[l];
    return s(m, y);
  });
  return {
    sort: (l) => {
      const r = typeof l == "function" && l === e.value.function || typeof l == "string" && l in bi && l === e.value.sortingKey || Array.isArray(l) && JSON.stringify(l) === JSON.stringify(e.value.definition) || l === e.value.key;
      i.value ? r ? n.value = n.value === "asc" ? "desc" : "asc" : n.value = "desc" : (n.value = "desc", i.value = !0);
      const g = a(l);
      t.value.sort((m, y) => {
        const p = g(m, y);
        return n.value === "desc" ? -p : p;
      }), lt(t);
    },
    key: $(() => e.value.key),
    direction: $(() => n.value),
    sortingKey: $(() => e.value.sortingKey),
    sortFn: $(() => e.value.function),
    definition: $(() => e.value.definition)
  };
}
const Wu = (t) => ![
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
].includes(t), zu = { class: "label" }, Hu = { class: "c-btn-group" }, Ku = ["onClick"], Zu = ["onClick"], Ju = ["onClick"], Yu = /* @__PURE__ */ Xe({
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
    const e = t, { sort: n, key: i, direction: s, sortingKey: a, sortFn: o } = Uu(e.list), l = (m) => m.replace(/([A-Z])/g, " $1").replace(/^./, (y) => y.toUpperCase()).trim(), r = (m) => m.replace(/([A-Z])/g, " $1").replace(/^./, (y) => y.toUpperCase()).trim(), g = (m) => {
      e.disabled || n(m);
    };
    return (m, y) => {
      const p = yn("FontAwesomeIcon");
      return L(), j("div", {
        class: We(["menu sorting", { disabled: t.disabled }])
      }, [
        H("div", zu, ue(e.label), 1),
        H("div", Hu, [
          (L(!0), j(He, null, tt(t.sortKeys, (F) => (L(), j("button", {
            type: "button",
            key: F.key,
            class: We(["c-btn", {
              selected: A(a) === F.key
            }]),
            onClick: (I) => g(F.key)
          }, [
            A(a) === F.key && A(Wu)(F.key) ? (L(), Ie(p, {
              key: 0,
              icon: ["fass", A(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : ae("", !0),
            Qe(" " + ue(F.label || l(F.key)), 1)
          ], 10, Ku))), 128)),
          (L(!0), j(He, null, tt(t.objectKeys, (F) => (L(), j("button", {
            type: "button",
            key: F.key,
            class: We(["c-btn", {
              selected: A(i) === F.key
            }]),
            onClick: (I) => g(F.key)
          }, [
            A(i) === F.key ? (L(), Ie(p, {
              key: 0,
              icon: ["fass", A(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : ae("", !0),
            Qe(" " + ue(F.label || r(F.key)), 1)
          ], 10, Zu))), 128)),
          (L(!0), j(He, null, tt(t.sortFunctions, (F, I) => (L(), j("button", {
            type: "button",
            key: I,
            class: We(["c-btn", {
              selected: A(o) === F.function
            }]),
            onClick: (V) => g(F.function)
          }, [
            A(o) === F.function ? (L(), Ie(p, {
              key: 0,
              icon: ["fass", A(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : ae("", !0),
            Qe(" " + ue(F.label || `${t.label} ${I + 1}`), 1)
          ], 10, Ju))), 128))
        ])
      ], 2);
    };
  }
}), Xu = {
  key: 1,
  class: "active-stock-info"
}, Qu = {
  key: 0,
  style: { color: "grey" }
}, ed = ["onMousedown"], td = {
  key: 0,
  class: "stack font-sm"
}, nd = { class: "name" }, id = /* @__PURE__ */ Xe({
  __name: "Navigation",
  props: {
    useStack: { type: Boolean, default: !0 },
    display: { type: Boolean, default: !0 },
    flipY: { type: Boolean, default: !1 },
    showSorting: { type: Boolean, default: !0 }
  },
  emits: ["show"],
  setup(t, { emit: e }) {
    const { r: n, stackedStock: i, activeStock: s } = Oi(), { items: a } = za("stockList"), o = vn(() => import("./Diagram-AmGcQGUD.js")), l = vn(() => import("./StockNavigation-Iy3OqWrd.js")), r = Z(null), g = Z(null), m = Z(null), y = t, p = Z(0), { stop: F } = ha(r, jo((Y) => {
      const se = Y[0], { width: E } = se.contentRect;
      E > 0 && (p.value = E);
    }, 100)), I = $(() => {
      const Y = s.value;
      if (!Y) return "";
      const se = [Y.id];
      return Y.name && se.push(Y.name), Y.material && se.push(Y.material), se.join(" • ");
    }), V = $(() => {
      const E = Math.floor((p.value + 10) / 210);
      return Math.max(E, 1);
    }), M = (Y) => {
      let se = "";
      return Y.t && (se = Y.t.toString()), Y.name ? `${Y.id}: ${Y.name.toUpperCase()}${se ? "-" + se : ""}` : Y.material ? `${Y.id}: ${Y.material.toUpperCase()}${se ? "-" + se : ""}` : Y.id;
    }, D = e, z = (Y) => {
      D("show", Y);
    };
    return Jn(() => F()), (Y, se) => y.display ? (L(), j("div", {
      key: 0,
      id: "navigation",
      ref_key: "navigationRef",
      ref: r
    }, [
      y.showSorting ? (L(), Ie(Yu, {
        key: 0,
        list: A(n).stockList,
        label: "Sort stock",
        "object-keys": [{ key: "id", label: "ID" }, { key: "l", label: "Length" }, { key: "w", label: "Width" }]
      }, null, 8, ["list"])) : ae("", !0),
      A(s) ? (L(), j("div", Xu, [
        Qe(ue(I.value) + " ", 1),
        A(s).code ? (L(), j("div", Qu, ue(A(s).code), 1)) : ae("", !0)
      ])) : ae("", !0),
      p.value <= 900 ? (L(), Ie(A(l), {
        key: 2,
        ref_key: "stockNavigationRef",
        ref: g,
        "stock-list": A(i),
        embed: !1,
        "use-stack": y.useStack,
        "active-stock-id": A(n).activeStockAutoId.value,
        onShowStock: z
      }, null, 8, ["stock-list", "use-stack", "active-stock-id"])) : ae("", !0),
      p.value > 900 ? (L(), j("div", {
        key: 3,
        id: "navigation-wrapper",
        style: yt({ gridTemplateColumns: `repeat(${V.value}, 1fr)` })
      }, [
        (L(!0), j(He, null, tt(A(a), (E, N) => (L(), j("div", {
          key: E.autoId,
          onMousedown: (ee) => z(E.autoId),
          class: We({ selected: E.autoId === A(n).activeStockAutoId.value })
        }, [
          typeof E?.stack?.number == "number" && E.stack.number > 1 ? (L(), j("div", td, ue(E.stack.number), 1)) : ae("", !0),
          De(A(o), {
            "element-id": `nav-diagram-${N}`,
            main: !1,
            "stock-auto-id": E.autoId,
            "flip-y": y.flipY
          }, null, 8, ["element-id", "stock-auto-id", "flip-y"]),
          H("div", nd, ue(M(E)), 1)
        ], 42, ed))), 128))
      ], 4)) : ae("", !0),
      p.value > 900 ? (L(), Ie(_u, {
        key: 4,
        ref_key: "paginationRef",
        ref: m,
        "array-key": "stockList",
        "items-per-page": 10
      }, null, 512)) : ae("", !0)
    ], 512)) : ae("", !0);
  }
}), sd = {
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
}, ad = { id: "spinner" }, od = ["width", "height"], ld = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function rd(t, e, n, i, s, a) {
  return L(), j("div", ad, [
    n.complete ? ae("", !0) : (L(), j("svg", {
      key: 0,
      class: "loading",
      style: yt({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      qo('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, od)),
    n.complete ? (L(), j("svg", {
      key: 1,
      class: "complete",
      style: yt({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      H("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : ae("", !0),
    n.showNumber ? (L(), j("div", ld, ue(n.number), 1)) : ae("", !0)
  ]);
}
const ra = /* @__PURE__ */ Yn(sd, [["render", rd]]), cd = { id: "mini-stock-nav" }, ud = ["onMousedown"], dd = { class: "id" }, fd = /* @__PURE__ */ Xe({
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
    return (a, o) => (L(), j("div", cd, [
      (L(!0), j(He, null, tt(n.stockList, (l, r) => (L(), j("button", {
        type: "button",
        key: r,
        class: We(["c-btn c-btn--col-4 c-btn--sm", { selected: l.autoId === n.activeStockId }]),
        style: yt({
          backgroundColor: l.autoId === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
        }),
        onMousedown: (g) => s(l.autoId)
      }, [
        H("div", dd, ue(r + 1), 1),
        ms(H("div", { class: "stack" }, ue(l.stack.number), 513), [
          [va, typeof l?.stack?.number == "number" && l.stack.number > 1]
        ])
      ], 46, ud))), 128))
    ]));
  }
}), ca = Z({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Ha() {
  return {
    progress: ca,
    reset: () => {
      ca.value = {
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
const pd = Wl(() => K({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: Ut(
    de().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: Ut(
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
  t: Ut(
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
  l: Ts({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Ts({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: Ut(
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
  name: gl({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: Ut(
    Jt(["n", "l", "w"]).default("n").optional(),
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
  banding: Ut(
    de().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: Ut(
    K({
      enabled: de().default(!1),
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
  machining: Ut(
    K({
      enabled: de().default(!1),
      operations: fe(Pe()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: Ut(
    de().default(!1),
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
function gd(t) {
  const e = pd._def.getter();
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
class hd {
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
        const g = this.generateTrimFields(l);
        i.push(...g);
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
    if (n instanceof Rs) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof di)
          return this.isIntegerNumber(s) ? "integer" : "number";
    }
    return n instanceof di ? this.isIntegerNumber(n) ? "integer" : "number" : n instanceof zl ? "string" : n instanceof Hl ? "boolean" : n instanceof Gs || n._def?.typeName === "ZodNativeEnum" ? "enum" : n instanceof Kl ? "array" : n instanceof fi ? "object" : "string";
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
        const g = a._zod.def;
        o = g.check, l = g.value, r = g.inclusive !== void 0 ? g.inclusive : !0;
      } else
        continue;
      o === "min" || o === "greater_than" ? e.min === void 0 && (e.min = o === "greater_than" && !r ? l + 1e-6 : l, e.allowZero = e.min === 0) : o === "max" || o === "less_than" ? e.max === void 0 && (e.max = o === "less_than" && !r ? l - 1e-6 : l) : o === "int" && (e.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(e, n) {
    if (n instanceof Rs) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof di) {
          this.extractNumberConstraints(e, s), e.type = "number";
          break;
        }
    } else n instanceof di && this.extractNumberConstraints(e, n);
    if (!e.options) {
      if (n instanceof Gs) {
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
    if (e instanceof Ji || e instanceof Yi)
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
    return e._def?.typeName === "ZodEffects" ? this.isOptional(e._def?.schema) : e instanceof Xi ? this.isOptional(e._def?.innerType) : !1;
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
    if (e instanceof Ji || e instanceof Yi)
      return this.unwrapField(e._def?.innerType);
    if (e instanceof Xi || i === "ZodDefault")
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
    if (e instanceof Xi) {
      const n = e._def?.defaultValue;
      return typeof n == "function" ? n() : n;
    }
    if (e.constructor?.name === "ZodPipe" || e._def?.type === "pipe") {
      const n = e._def?.in;
      if (n)
        return this.getDefaultValue(n);
    }
    if (e instanceof Ji || e instanceof Yi) {
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
    return e instanceof fi;
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
    if (n instanceof fi) {
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
    if (!(i instanceof fi))
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
const ua = new hd();
function md(t, e = {}) {
  const n = Z([]), i = Z([]), s = Z(/* @__PURE__ */ new Map()), a = Z(/* @__PURE__ */ new Map()), o = (F) => {
    let I = ua.generateFields(t);
    e.overrides && (I = I.map((M) => {
      const D = e.overrides[M.name];
      if (D) {
        const z = { ...M, ...D };
        return D.min === void 0 && M.min !== void 0 && (z.min = M.min), D.max === void 0 && M.max !== void 0 && (z.max = M.max), z;
      }
      return M;
    })), a.value.clear();
    for (const M of I)
      a.value.set(M.name, M);
    const V = F || e.allowedFieldIds;
    if (V && V.length > 0) {
      const M = V, D = /* @__PURE__ */ new Map();
      for (const Y of I)
        D.set(Y.name, Y);
      const z = [];
      for (const Y of M) {
        const se = D.get(Y);
        se && z.push(se);
      }
      I = z;
    }
    e.filter && (I = I.filter(e.filter)), n.value = I, s.value.clear();
    for (const M of I)
      s.value.set(M.name, M);
    e.grouped && (i.value = ua.groupFields(I));
  };
  o();
  const l = (F) => s.value.get(F), r = (F) => a.value.get(F), g = () => a.value, m = (F, I) => {
    const V = s.value.get(F);
    V && Object.assign(V, I);
  }, y = (F) => {
    const I = l(F);
    return !(!I || I.hidden);
  }, p = (F) => {
    const I = l(F);
    if (!I) return {};
    const V = {};
    return I.required && (V.required = !0), I.type === "number" && (I.min !== void 0 && (V.min = I.min), I.max !== void 0 && (V.max = I.max)), V;
  };
  return {
    fields: $(() => n.value),
    groups: $(() => i.value),
    fieldMap: $(() => s.value),
    allFieldsMap: $(() => a.value),
    getField: l,
    getFieldMetadata: r,
    getAllFieldMetadata: g,
    updateField: m,
    isFieldVisible: y,
    getFieldValidation: p,
    regenerateFields: o
  };
}
function vd(t) {
  const { stockType: e, materials: n = [], minDimension: i = 0 } = t, s = gd(e), a = {
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
  }), md(s, {
    ...t,
    overrides: { ...a, ...t.overrides }
  });
}
const { progress: Wt, reset: da } = Ha();
function bd(t) {
  const e = "https://api.cutlistevo.com/";
  let n;
  const i = () => {
    n = Zl(e, {
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
      Wt.value.complete = !0, t.callbacks?.onResult?.(o), n.disconnect();
    }), n.on("queued", () => {
      da(), Wt.value.queued = !0;
    }), n.on("started", () => {
      Wt.value.started = !0;
    }), n.on("progress", (o) => {
      o?.data?.message === "result" ? Wt.value.resultCount++ : (Wt.value.stockCount = o.data.stockCount, Wt.value.shapeCount = o.data.shapeCount), o?.data?.phase && (Wt.value.phase = o.data.phase), o?.data?.placed !== void 0 && (Wt.value.placed = o.data.placed, Wt.value.total = o.data.total);
    }), n.on("user", (o) => {
      t.callbacks?.onUser?.(o);
    }), n.on("error", (o) => {
      t.refs?.thinking && (t.refs.thinking.value = !1), da(), t.callbacks?.onError?.(o);
    });
  }, s = () => n?.disconnect(), a = () => n?.connect();
  return i(), {
    socket: n,
    connect: a,
    disconnect: s
  };
}
class nn extends Error {
  constructor(e, n) {
    super(e), this.code = n, this.name = "FormulaError";
  }
}
class bs {
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
      const l = this.evaluate(e.condition, n), r = this.evaluate(e.trueExpr, n), g = this.evaluate(e.falseExpr, n);
      return l ? r : g;
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
      if (n === 0) throw new nn("Division by zero", "DIVISION_BY_ZERO");
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
      const [g, m] = r.split(".");
      if (!e.nodes.has(r)) {
        const V = s[g];
        if (V)
          return m === "q" ? V.q : V[m];
        throw new Error(`Node not found: ${r}`);
      }
      if (o.has(r))
        throw new Error(`Circular dependency detected at ${r}`);
      const y = e.nodes.get(r);
      if (typeof y.formula == "number")
        return a.set(r, y.formula), y.formula;
      o.add(r);
      const p = e.edges.get(r) || /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map();
      for (const V of p)
        if (V.startsWith("input.")) {
          const M = V.split(".")[1];
          F.set(V, i[M]);
        } else
          F.set(V, l(V));
      const I = this.evaluateFormulaWithDeps(y.formula, F, i);
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
    if (!this.spec?.inputs) throw new nn("No input specifications defined", "NO_INPUTS");
    for (const [n, i] of Object.entries(this.spec.inputs)) {
      const s = e[n];
      if (s === void 0)
        throw new nn(`Missing required input: ${n}`, "MISSING_INPUT");
      if (s < i.min || s > i.max)
        throw new nn(`Input ${n} value ${s} out of range [min: ${i.min}, max: ${i.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new nn("No input specifications defined", "NO_INPUTS");
    const n = Object.keys(this.spec.inputs);
    if (e.length !== n.length)
      throw new nn(`Expected ${n.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let i = 0;
    for (const s of e) {
      const a = n[i], o = this.spec.inputs[a];
      if (s.value === null || s.value === void 0)
        throw new nn(`Missing value for field ${i}`, "MISSING_FIELD_VALUE");
      if (s.value < o.min || s.value > o.max)
        throw new nn(`Field ${i} value ${s.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
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
const Kt = K({
  min: _().min(0).optional(),
  max: _().min(0).optional()
}).optional(), yd = K({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: v().min(1),
  // Dimension constraints for this location
  longSide: Kt,
  shortSide: Kt,
  t: Kt,
  // Formula-based validation
  formula: v().optional(),
  // Custom message for this location
  message: v().optional()
}), ns = K({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: Kt,
  shortSide: Kt,
  t: Kt,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: v().optional(),
  // Custom validation message (optional)
  message: v().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: fe(yd).optional()
}), wd = K({
  banding: ns.optional(),
  finish: ns.optional(),
  planing: ns.optional()
}).optional();
function kd(t, e) {
  try {
    const n = new bs({}), i = n.parse(t);
    return !!n.evaluate(i, {
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0,
      t: e.t || 0
    });
  } catch (n) {
    return console.warn("Formula evaluation error:", n, "Formula:", t), !0;
  }
}
function xd(t, e, n) {
  const i = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : "short side", s = t.constraint === "min" ? "minimum" : "maximum";
  return `${t.location ? `${t.location}: ` : ""}${e.charAt(0).toUpperCase() + e.slice(1)} requires ${i} ${s} of ${t.limit} (current: ${t.value})`;
}
function Sd(t, e, n) {
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
function Pd(t, e, n, i) {
  const { rule: s, message: a, source: o } = Sd(e, n, i), l = [], r = (m, y, p) => {
    y == null || p === void 0 || (p.min !== void 0 && y < p.min && l.push({
      valid: !1,
      dimension: m,
      value: y,
      constraint: "min",
      limit: p.min,
      location: n
    }), p.max !== void 0 && y > p.max && l.push({
      valid: !1,
      dimension: m,
      value: y,
      constraint: "max",
      limit: p.max,
      location: n
    }));
  };
  r("longSide", t.longSide, s.longSide), r("shortSide", t.shortSide, s.shortSide);
  const g = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(g) || r("t", g, s.t), s.formula && (kd(s.formula, {
    longSide: t.longSide,
    shortSide: t.shortSide,
    t: g
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
K({
  // Context - using z.any() for complex external types
  job: Pe().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: v().nullable().default(null).describe("Socket.io connection ID"),
  user: Pe().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: Pe().describe("Configuration object"),
  // Type: Config
  api: de().nullable().default(null).describe("API mode flag"),
  app: de().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: vl("Saw").describe("Saw configuration"),
  stockList: en("Stock").default([]).describe("List of stock materials"),
  shapeList: qi(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: en("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: en("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: en("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: qi(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: qi(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: ml,
  // Results storage
  cutList: en("Cut").default([]).describe("List of cuts to make"),
  segmentList: en("Segment").default([]).describe("List of segments"),
  offcuts: en("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: en("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: de().default(!1).describe("Use inventory system"),
  successMetric: v().default(bl.successMetric).describe("Metric for optimization success"),
  enableEvo: de().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Oe(v(), Pe()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: Pe().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: Pe().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: K({
    placement: _().default(0),
    group: _().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: de().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: de().default(!1).describe("Run guillotine second pass"),
  runningEvo: de().default(!1).describe("Currently running evolution"),
  evolutionVisData: fe(Oe(v(), Jl())).default([]).describe("Evolution visualization data"),
  final: de().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: de().default(!1).describe("Has minimum spacing requirement")
});
const Cd = Jt(["decimal", "fraction"]), Id = K({
  job: Pe().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: $n.extend({ autoId: v().optional(), __entityType: v().optional() }),
  inputShapes: fe(En.extend({ autoId: v().optional(), __entityType: v().optional() })),
  inputStock: fe(bn.extend({ autoId: v().optional(), __entityType: v().optional() })),
  inputUserGroups: fe(hl.extend({ autoId: v().optional(), __entityType: v().optional() })).optional(),
  // Number format for conversion
  numberFormat: Cd.optional(),
  // Algorithm configuration
  enableEvo: de().default(!0),
  weighting: Pe().optional(),
  successMetric: v().optional(),
  useInventory: de().default(!1),
  // Context
  socketId: v().optional(),
  user: Pe().optional(),
  // IUser type
  // Application flags
  widget: de().optional(),
  api: de().optional(),
  app: de().optional(),
  domain: v().optional(),
  // Extras options (centralized configuration)
  extrasOptions: K({
    banding: K({
      options: K({
        sides: Oe(v(), fe(v())).optional()
      }).optional()
    }).optional(),
    finish: K({
      options: K({
        faces: Oe(v(), fe(v())).optional()
      }).optional()
    }).optional(),
    planing: K({
      options: K({
        sides: Oe(v(), fe(v())).optional(),
        faces: Oe(v(), fe(v())).optional()
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
K({
  job: Pe().optional(),
  // Type: Job from BullMQ
  saw: Pe(),
  // Runtime Saw instance
  shapeList: fe(Pe()),
  // Runtime Shape instances
  stockList: fe(Pe()),
  // Runtime Stock instances
  userGroups: fe(Pe()).optional(),
  // Runtime Group instances
  enableEvo: de(),
  weighting: Pe().optional(),
  successMetric: v().optional(),
  useInventory: de(),
  socketId: v().optional(),
  user: Pe().optional(),
  widget: de().optional(),
  api: de().optional(),
  app: de().optional(),
  domain: v().optional(),
  config: Pe().optional(),
  v: _().optional(),
  webhook: v().optional()
});
const { addNotice: Ln } = Ma();
let is = null;
function Ad() {
  return is || (is = Ta()), is;
}
function fa(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Od(t) {
  const e = t.t, n = [];
  try {
    const { inputs: i, validateInputShapes: s, validateInputStock: a } = Ad(), o = t.inputShapes ?? i.inputShapes.value, l = t.inputStock ?? i.inputStock.value, r = t.inputUserGroups ?? i.inputUserGroups?.value ?? [], g = fa(o), m = fa(l);
    if (g.forEach((M) => M.isNew = !1), m.forEach((M) => M.isNew = !1), !t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const M = g.reduce((z, Y) => z + (Y.q || 1), 0), D = m.reduce((z, Y) => z + (Y.q || 1), 0);
      if (M > t.maxShapes || D > t.maxStock)
        return Ln({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: n };
    }
    if (!g.length)
      return Ln({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: n };
    if (!t.useInventory && !m.length)
      return Ln({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: n };
    let y;
    if (t.useInventory && t.selectedSaw)
      y = t.selectedSaw;
    else if (t.inputSaw instanceof zt) {
      const M = t.inputSaw.validate();
      n.push(...M), y = t.inputSaw.toData();
    } else {
      y = t.inputSaw;
      const M = new Pa(y);
      n.push(...M.issues);
    }
    const p = s({
      saw: y,
      partTrim: me({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: g
    });
    if (n.push(...p), t.useInventory) {
      if (t.materialStore)
        for (const M of g)
          M.material || n.push(new Dt({
            item: M,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const M = a(y);
      n.push(...M);
    }
    if (r.length > 0) {
      r.forEach((D) => D.populateParentID(g));
      const M = yl(r, g);
      n.push(...M);
    }
    await Fd(g, t, n);
    const F = ls(n);
    if (F.length > 0) {
      const M = {
        saw: F.filter((D) => D.category?.includes("saw")),
        stock: F.filter((D) => D.category?.includes("stock")),
        part: F.filter((D) => D.category?.includes("part") && !D.category?.includes("extras")),
        extras: F.filter((D) => D.category?.includes("extras")),
        group: F.filter((D) => D.category?.includes("group"))
      };
      for (const [D, z] of Object.entries(M))
        if (z.length > 0) {
          Ln({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: D }),
            additional: z.map((Y) => e(Y.message))
          });
          break;
        }
      return { valid: !1, issues: n };
    }
    const I = {
      inputSaw: y,
      inputShapes: g.map((M) => M.toData()),
      inputStock: m.map((M) => M.toData()),
      inputGroups: r.map((M) => M.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, V = Id.safeParse(I);
    return V.success ? {
      valid: !0,
      issues: n,
      sawData: y
    } : (console.error("[Validation] Zod validation failed:", V.error.issues), Ln({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: V.error.issues.map((M) => `${M.path.join(".")}: ${M.message}`)
    }), { valid: !1, issues: n });
  } catch (i) {
    return console.error("[Validation] error:", i), Ln({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [i?.message ?? ""]
    }), { valid: !1, issues: n };
  }
}
function Ld(t, e) {
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
async function Fd(t, e, n) {
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
      if (e.extrasValidationRules && wl.hasExtras(s, a)) {
        const m = e.extrasValidationRules?.[a], y = e.extrasLocationGroups?.[a], p = m?.locations && m.locations.length > 0, F = y?.some((I) => I.rules);
        if (p || F) {
          const I = Ld(s, a), V = (y || []).map((z) => ({
            id: z.id,
            locations: z.locations,
            rules: z.rules
          })), M = m || {}, D = /* @__PURE__ */ new Set();
          for (const z of I) {
            const Y = Pd(
              s,
              M,
              z,
              V
            );
            if (!Y.valid) {
              if (Y.source === "group") {
                const se = V.find(
                  (E) => E.rules && E.locations.includes(z)
                );
                if (se && D.has(se.id))
                  continue;
                se && D.add(se.id);
              }
              if (Y.message) {
                const se = new Dt({
                  item: s,
                  category: ["part", "extras"],
                  message: Y.message,
                  field: [["extras", a, z]],
                  shouldTranslate: !1
                });
                n.push(se);
              } else
                Y.violations.forEach((se) => {
                  const E = xd(se, a), N = new Dt({
                    item: s,
                    category: ["part", "extras"],
                    message: E,
                    field: [["extras", a, z]],
                    shouldTranslate: !1
                  });
                  n.push(N);
                });
            }
          }
        } else {
          const I = kl(s, a, e.extrasValidationRules);
          I.valid || I.violations.forEach((V) => {
            const M = xl(a, V, I.message);
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
      const r = Sl(s, a, l, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((g) => {
        n.push(new Dt({
          item: s,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: Pl(g, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, g]]
        }));
      });
    }
}
const $d = new bs({});
function Ed(t) {
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
function Td(t, e) {
  const n = [], i = t.filter((s) => s.enabled !== !1);
  for (let s = 0; s < e.length; s++) {
    const a = e[s], o = Ed(a);
    for (const l of i)
      try {
        $d.evaluateExpression(l.formula, o) || n.push({
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
const Md = K({
  longSide: Kt,
  shortSide: Kt,
  t: Kt,
  formula: v().optional(),
  message: v().optional()
}).optional(), ki = K({
  // Unique identifier for this group (used internally)
  id: v().min(1),
  // Display label for the group (shown in UI)
  label: v().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: fe(v().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: _().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: de().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: Md
}), Nd = K({
  banding: fe(ki).optional(),
  finish: fe(ki).optional(),
  planing: fe(ki).optional()
}).optional(), Bd = Jt(["decimal", "fraction"]), Vd = Jt(Il), pa = _e([
  Rt(0),
  Rt(1),
  Rt(2)
]).catch(0), Dd = K({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: v().optional(),
  partB: v().optional(),
  partSelected: v().optional(),
  stock: v().optional(),
  text: v().optional(),
  // Checkout-specific colors
  button: v(),
  buttonText: v()
}), st = (t) => zn((e) => e ?? t, de()), Rd = K({
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
}), Gd = K({
  // Localization
  locale: v().default("en-US"),
  currency: v().default("USD"),
  apiVersion: _().min(2).default(3),
  // Number formatting
  numberFormat: Bd.default("decimal"),
  decimalPlaces: _().min(0).max(10).default(2),
  fractionRoundTo: _().default(0),
  // Stock configuration
  stockSelection: Vd.optional(),
  stockGrain: Cl.optional(),
  // Part configuration
  minSpacing: Ia.optional(),
  maxParts: _().min(0).default(0),
  orientationModel: pa.default(0),
  resultOrientationModel: pa.default(0),
  minDimension: _().min(0).default(0),
  partTrim: zn((t) => t ?? void 0, _().min(0).optional()),
  partsPerPage: zn((t) => t ?? void 0, _().min(1).default(10)),
  // UI configuration
  debug: de().default(!1),
  enable: Rd.optional(),
  colors: Dd.optional(),
  // Custom fields
  customFields: fe(Pe()).optional(),
  fieldOrder: zn((t) => t ?? void 0, fe(v()).optional()),
  // Extras location filtering
  bandingLocations: fe(_i).optional(),
  finishLocations: fe(_i).optional(),
  planingLocations: fe(_i).optional(),
  // Extras location groups
  extrasLocationGroups: Nd,
  // Extras validation rules
  extrasValidationRules: wd
}), _n = K({
  min: _().min(0).nullable().optional(),
  max: _().min(0).nullable().optional()
}).nullable().optional(), jd = K({
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: _n,
  shortSide: _n,
  // Direct dimension constraints (as stored by admin panel)
  l: _n,
  w: _n,
  t: _n,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: K({
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
function qd(t, e) {
  const n = [], i = t.l || 0, s = t.w || 0, a = t.longSide ?? Math.max(i, s), o = t.shortSide ?? Math.min(i, s), l = (r, g, m) => {
    m != null && (m.min !== void 0 && m.min !== null && g < m.min && n.push({
      valid: !1,
      dimension: r,
      value: g,
      constraint: "min",
      limit: m.min
    }), m.max !== void 0 && m.max !== null && g > m.max && n.push({
      valid: !1,
      dimension: r,
      value: g,
      constraint: "max",
      limit: m.max
    }));
  };
  if (l("longSide", a, e.longSide), l("shortSide", o, e.shortSide), l("longSide", i, e.l), l("shortSide", s, e.w), e.crossDimensionalRule) {
    const { primaryMin: r, secondaryMin: g } = e.crossDimensionalRule, m = t.l || 0, y = t.w || 0;
    if (r != null && g != null) {
      const p = m >= r && y >= g, F = y >= r && m >= g;
      !p && !F && n.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${r} mm and the other side must be ≥ ${g} mm`
      });
    }
  }
  return e.formula && (_d(e.formula, {
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
function _d(t, e) {
  try {
    const n = new bs({}), i = n.parse(t);
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
function Ud(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, n = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${n} of ${t.limit} (current: ${t.value})`;
}
Jt([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const Wd = Oe(
  v(),
  _().min(0)
).default({}), zd = K({
  banding: v().optional(),
  finish: v().optional(),
  planing: v().optional(),
  machining: v().optional()
}).optional(), Hd = K({
  name: v().trim().min(1),
  db_id: v().optional(),
  code: v().optional(),
  thicknesses: fe(
    _e([
      v().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      _()
    ])
  ).min(1),
  widths: fe(
    _e([
      v().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      _()
    ])
  ).optional(),
  extras: zd
}), ss = K({
  labels: fe(v()).default([]),
  pricing: Oe(v(), _().min(0)).default({}),
  options: Pe().optional(),
  keys: fe(v()).optional(),
  // if not all the default keys should be set
  locations: fe(v()).optional(),
  // available locations for this extras type
  groups: fe(ki).optional(),
  // custom location groups
  rules: Pe().optional(),
  // validation rules for this extras type
  displayNames: Oe(v(), v()).optional()
  // slug key → product name for dropdown display
});
K({
  success: de(),
  price: _().optional(),
  error: v().optional(),
  cacheHit: de().optional()
});
K({
  valid: de(),
  errors: fe(v()),
  warnings: fe(v())
});
K({
  pricing: Wd,
  labels: fe(v()),
  options: fe(fe(v())),
  // Simplified to string arrays only
  keys: fe(v()),
  maxLevels: _().min(1)
});
K({
  enableCaching: de().default(!0),
  enableLogging: de().default(!1),
  maxCacheSize: _().min(1).default(1e3)
});
const Ka = Jt(["select", "multiselect", "range", "boolean", "search"]), Za = Jt(["asc", "desc"]), Ja = Jt(["grid", "list"]), vi = K({
  _id: v(),
  name: v(),
  labels: fe(v()).optional(),
  pricing: Oe(v(), _()).optional(),
  price: _().optional()
}), Kd = K({
  banding: vi.optional(),
  finish: vi.optional(),
  planing: vi.optional(),
  machining: vi.optional()
}).optional(), Zd = K({
  enabled: de(),
  price: _(),
  description: v().optional(),
  maxQuantity: _().optional()
}).optional(), Jd = K({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: v().optional().describe("User-friendly display name"),
  description: v().optional().describe("Detailed description"),
  code: v().optional().describe("Internal material/product code"),
  // Categorization
  category: v().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: v().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: Kd.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: Zd.describe("Sample ordering configuration"),
  // UI metadata
  minQuantity: _().int().positive().nullable().optional().describe("Minimum order quantity")
});
bn.merge(Jd).describe("Stock option with filtering and display metadata");
const Yd = K({
  field: v().describe("Property name to filter on"),
  type: Ka,
  label: v().describe("Display label"),
  custom: de().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: _().nullable().optional().describe("Minimum value for range filter"),
  max: _().nullable().optional().describe("Maximum value for range filter"),
  step: _().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: fe(K({
    label: v(),
    value: Pe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: de().default(!0).describe("Whether filter is visible"),
  collapsible: de().default(!0).describe("Whether filter panel is collapsible"),
  order: _().int().nullable().optional().describe("Display order")
}), Xd = K({
  field: v().describe("Field to sort by"),
  order: Za,
  label: v().optional().describe("Display label for sort option")
}), ys = K({
  // Filter configuration
  availableFilters: fe(Yd).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: fe(v()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Xd.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Ja.default("grid").describe("Default display mode"),
  itemsPerPage: _().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: de().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: de().default(!0).describe("Allow multiple stock selection"),
  maxSelection: _().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), Qd = K({
  field: v(),
  value: Pe(),
  type: Ka
});
K({
  // Active filters
  activeFilters: fe(Qd).default([]).describe("Currently active filters"),
  // Search
  searchQuery: v().default("").describe("Current search query"),
  // Sort
  sortBy: v().default("cost").describe("Current sort field"),
  sortOrder: Za.default("asc").describe("Current sort order"),
  // Display
  displayMode: Ja.default("grid").describe("Current display mode"),
  currentPage: _().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: fe(v()).default([]).describe("IDs of selected stock items")
});
function Up() {
  return ys.parse({});
}
const Ya = K({}).passthrough(), Xa = K({
  l: _(),
  w: _(),
  t: _().nullable(),
  q: _(),
  stockId: v()
}), Qa = Al.partial(), eo = K({
  holes: fe(K({
    x: _(),
    y: _(),
    diameter: _(),
    depth: _().optional(),
    face: _().optional(),
    type: v().optional()
  })).optional(),
  hingeHoles: fe(K({
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
  corners: fe(K({
    index: _(),
    type: v().nullable().optional(),
    size: _().nullable().optional()
  })).optional()
}), to = K({
  bladeWidth: _().optional(),
  cutType: v().optional(),
  cutPreference: v().optional(),
  stackHeight: _().optional()
}), ef = K({
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  orientationLock: Aa.nullable(),
  q: _(),
  name: v().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Oe(v(), _e([v(), de()])).nullable().optional(),
  finish: Oe(v(), _e([v(), de()])).nullable().optional(),
  planing: Oe(v(), _e([v(), de()])).nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
}), tf = K({
  id: v(),
  name: v().nullable(),
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  q: _(),
  trim: K({
    x1: _(),
    x2: _(),
    y1: _(),
    y2: _()
  }).nullable().optional(),
  cost: _().nullable().optional(),
  db_id: v().nullable().optional(),
  code: v().nullable().optional(),
  analysis: Qa.nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
}), nf = K({
  id: v().optional(),
  name: v().optional(),
  l: _(),
  w: _(),
  t: _().nullable().optional(),
  material: v().optional(),
  q: _().optional(),
  orientationLock: _e([
    Rt(""),
    Rt("l"),
    Rt("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Oe(v(), _e([v(), de()])).nullable().optional(),
  finish: Oe(v(), _e([v(), de()])).nullable().optional(),
  planing: Oe(v(), _e([v(), de()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: K({
    banding: K({
      sides: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    finish: K({
      faces: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    planing: K({
      sides: Oe(v(), _e([v(), de()])).optional(),
      faces: Oe(v(), _e([v(), de()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: eo.optional(),
  stock: K({
    db_id: v().optional(),
    code: v().optional(),
    material: v().optional(),
    thickness: _().optional()
  }).nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
});
K({
  jobId: _(),
  metadata: Oa.optional(),
  parts: fe(ef),
  stock: fe(tf),
  offcuts: fe(Xa),
  inputs: K({
    parts: fe(nf),
    saw: to.optional()
  }),
  apiResultV3: Ya.optional()
});
const sf = K({
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  orientationLock: Aa.nullable(),
  q: _(),
  name: v().nullable(),
  // V3 format: nested extras structure
  extras: K({
    banding: K({
      sides: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    finish: K({
      faces: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    planing: K({
      sides: Oe(v(), _e([v(), de()])).optional(),
      faces: Oe(v(), _e([v(), de()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Oe(v(), Pe()).nullable().optional()
}), af = K({
  id: v(),
  name: v().nullable(),
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  q: _(),
  trim: K({
    l1: _().optional(),
    l2: _().optional(),
    w1: _().optional(),
    w2: _().optional()
  }).nullable().optional(),
  cost: _().nullable().optional(),
  db_id: v().nullable().optional(),
  code: v().nullable().optional(),
  analysis: Qa.nullable().optional(),
  // New stock fields
  color: Ol.nullable(),
  weight: _().positive().nullable().optional(),
  imageUrl: v().nullable().optional(),
  tags: fe(v()).nullable().optional(),
  available: de().nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
}), of = K({
  id: v().optional(),
  name: v().optional(),
  l: _(),
  w: _(),
  t: _().nullable().optional(),
  material: v().optional(),
  q: _().optional(),
  orientationLock: _e([
    Rt(""),
    Rt("l"),
    Rt("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: K({
    banding: K({
      sides: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    finish: K({
      faces: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    planing: K({
      sides: Oe(v(), _e([v(), de()])).optional(),
      faces: Oe(v(), _e([v(), de()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: eo.optional(),
  stock: K({
    db_id: v().optional(),
    code: v().optional(),
    material: v().optional(),
    thickness: _().optional()
  }).nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
});
K({
  jobId: _(),
  metadata: Oa.optional(),
  parts: fe(sf),
  stock: fe(af),
  offcuts: fe(Xa),
  inputs: K({
    parts: fe(of),
    saw: to.optional()
  }),
  apiResultV3: Ya.optional()
});
function no(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: t?.stock?.id || t?.stock?.parentId || ""
  };
}
function io(t) {
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
const lf = K({
  stockSelection: Bl.optional(),
  stackingMode: Nl.optional(),
  minSpacing: Ia.optional()
}).optional(), rf = K({
  stockType: Jt([...rs]).optional(),
  bladeWidth: _e([
    Ml,
    v()
  ]).optional(),
  cutType: Tl,
  cutPreference: El,
  stackHeight: $l,
  guillotineOptions: Fl,
  efficiencyOptions: Ll.optional(),
  options: lf
}).optional(), cf = K({
  holes: _().min(0).nullable().optional(),
  corners: _().min(0).nullable().optional()
}).optional(), uf = En.pick({
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
  banding: Rl.nullable().optional(),
  finish: Dl.nullable().optional(),
  planing: Vl.nullable().optional(),
  stockId: v().nullable().optional()
}), df = K({
  stock: fe(bn).default([]),
  parts: fe(uf).optional(),
  options: Gd,
  type: v().optional(),
  // variable | simple
  materials: fe(Hd).optional(),
  banding: ss.nullable().optional(),
  finish: ss.nullable().optional(),
  planing: ss.nullable().optional(),
  machining: Pe().optional(),
  machiningPricing: cf,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: Pe().optional(),
  partRules: jd.optional(),
  customValidation: K({
    enabled: de(),
    rules: fe(Pe())
  }).optional(),
  saw: rf,
  stockFilter: K({
    enabled: de().optional(),
    serverMode: de().optional(),
    config: ys.optional()
  }).optional(),
  // Product catalog configuration
  products: K({
    enabled: de().optional(),
    showCategories: de().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: K({
    baseUrl: v(),
    orgSlug: v(),
    isCustomDomain: de().optional()
  }).optional(),
  // Admin configuration (formula pricing, etc.)
  config: K({
    formulaPricing: K({
      enabled: de(),
      url: v().nullable().optional(),
      spec: Pe().nullable().optional()
    }).optional()
  }).optional()
});
K({
  slug: v().optional(),
  company: K({
    name: v(),
    contactEmail: v(),
    phone: v().optional(),
    address: v().optional()
  }),
  branding: K({
    logo: v().optional(),
    favicon: v().optional(),
    colors: K({
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
    showCredit: de().optional()
  }),
  config: K({
    stockCount: _().optional(),
    stock: fe(Pe()).optional(),
    materials: fe(Pe()).optional(),
    options: Pe().optional(),
    pricing: Pe().optional(),
    banding: Pe().optional(),
    finish: Pe().optional(),
    planing: Pe().optional(),
    machining: Pe().optional(),
    bandingPricing: Oe(v(), _()).optional(),
    finishPricing: Oe(v(), _()).optional(),
    planingPricing: Oe(v(), _()).optional(),
    machiningPricing: Oe(v(), _()).optional(),
    saw: Pe().optional(),
    shipping: K({
      enabled: de(),
      originCountry: v().optional()
    }).optional(),
    stockFilter: K({
      config: ys.optional()
    }).optional(),
    partRules: Pe().optional(),
    customFields: fe(Pe()).optional(),
    termsUrl: v().optional(),
    termsContent: v().optional(),
    tracking: K({
      gaMeasurementId: v().optional(),
      gtmContainerId: v().optional()
    }).optional(),
    customValidation: K({
      enabled: de(),
      rules: fe(Pe())
    }).optional()
  }),
  stripe: K({
    enabled: de(),
    publishableKey: v().optional(),
    currency: v().optional()
  }).optional()
});
function ff(t) {
  const e = df.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function pf(t) {
  const e = ff(t);
  if (!e.success) {
    const n = e.error?.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", n), new Error(`Invalid checkout data: ${n}`);
  }
  return e.data;
}
function Nt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function gf(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, n = {};
    if (ze(e.a) || ze(e.b) || ze(e.c) || ze(e.d))
      n.x1 = ze(e.a) ? Nt(e.a) : !1, n.y1 = ze(e.b) ? Nt(e.b) : !1, n.x2 = ze(e.c) ? Nt(e.c) : !1, n.y2 = ze(e.d) ? Nt(e.d) : !1;
    else {
      const s = ps(e);
      n.x1 = ze(s.x1) ? Nt(s.x1) : !1, n.x2 = ze(s.x2) ? Nt(s.x2) : !1, n.y1 = ze(s.y1) ? Nt(s.y1) : !1, n.y2 = ze(s.y2) ? Nt(s.y2) : !1;
    }
    t.banding = n;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, n = {};
    n.a = ze(e.a) ? Nt(e.a) : !1, n.b = ze(e.b) ? Nt(e.b) : !1, t.finish = n;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, n = {}, i = ps(e.sides || {});
    e.sides && (ze(i.x1) && (n.x1 = i.x1), ze(i.x2) && (n.x2 = i.x2), ze(i.y1) && (n.y1 = i.y1), ze(i.y2) && (n.y2 = i.y2)), e.faces && (ze(e.faces.a) && (n.a = e.faces.a), ze(e.faces.b) && (n.b = e.faces.b)), Object.keys(n).length > 0 && (t.planing = n);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function hf(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const n = Math.max(t.l, t.w), i = Math.min(t.l, t.w);
    t.w > t.l && (t.l = n, t.w = i);
  }
  return t;
}
function so(t, e = 0) {
  debugger;
  return e === 0 || t.forEach((n) => hf(n, e)), t;
}
function ao(t) {
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
function mf(t, e, n, i, s, a, o, l) {
  const r = io(i), g = e.map((p) => {
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
      banding: Pr(),
      finish: Ii(),
      planing: Ir()
    }, I = { ...p };
    return gf(I), I.banding && (F.banding = I.banding), I.finish && (F.finish = I.finish), I.planing && (F.planing = I.planing), F;
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
    return p?.trim && (F.trim = ps(p.trim)), F;
  }), y = {
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
      const I = ao(p);
      return I && (F.machining = I), F;
    })
  };
  return l && so(g, l), {
    jobId: t,
    metadata: o,
    parts: g,
    stock: m,
    offcuts: s?.map(no) || [],
    inputs: y
  };
}
function vf(t, e, n, i, s, a, o, l) {
  const r = io(i), g = e.map((p) => {
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
        banding: { sides: fs() },
        finish: { faces: Ii() },
        planing: Cr()
      }
    };
    return p.extras && (p.extras.banding?.sides && (F.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && (F.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && (F.extras.planing = {
      sides: p.extras.planing.sides || fs(),
      faces: p.extras.planing.faces || Ii()
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
  })), y = {
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
      const I = ao(p);
      return I && (F.machining = I), F;
    })
  };
  return l && so(g, l), {
    jobId: t,
    metadata: o,
    parts: g,
    stock: m,
    offcuts: s?.map(no) || [],
    inputs: y
  };
}
const bf = ["id", "data-index"], yf = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = Z({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), a = () => {
      if (!n.inputShape) return;
      let r = {
        l1: cn(n.inputShape, "banding", "side.l1"),
        l2: cn(n.inputShape, "banding", "side.l2"),
        w1: cn(n.inputShape, "banding", "side.w1"),
        w2: cn(n.inputShape, "banding", "side.w2")
      };
      const g = lr(
        n.orientationModel,
        n.stockGrain,
        n.inputShape
      );
      g && (r = La(r, g)), s.value = r;
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
    return dn(() => {
      document.getElementById(n.id)?.addEventListener("keydown", o);
    }), Jn(() => {
      document.getElementById(n.id)?.removeEventListener("keydown", o);
    }), (r, g) => (L(), j("div", {
      id: t.id,
      class: We(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: l
    }, [
      H("div", {
        class: We(["outer", {
          l1: s.value.l1,
          l2: s.value.l2,
          w1: s.value.w1,
          w2: s.value.w2
        }])
      }, [...g[0] || (g[0] = [
        H("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, bf));
  }
}), wf = ["id", "data-index", "disabled"], kf = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = $(() => n.inputShape ? cn(n.inputShape, "finish", "face.a") : !1), a = $(() => n.inputShape ? cn(n.inputShape, "finish", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const g = yn("FontAwesomeIcon");
      return L(), j("button", {
        id: t.id,
        class: We(["c-btn finish-button", {
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
        De(g, { icon: ["fass", "spray-can"] })
      ], 10, wf);
    };
  }
});
function xf(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Sf(t) {
  const e = xf(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((n) => n && n.type && n.size > 0)) : !1;
}
const Pf = Xe({
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
      return Sf(this.inputShape);
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
}), Cf = ["id", "disabled"];
function If(t, e, n, i, s, a) {
  const o = yn("FontAwesomeIcon");
  return L(), j("button", {
    id: t.id,
    class: We(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...l) => t.openMachining && t.openMachining(...l))
  }, [
    De(o, { icon: ["fass", "hammer"] })
  ], 10, Cf);
}
const Af = /* @__PURE__ */ Yn(Pf, [["render", If]]), Of = ["id"], Lf = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Ff = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, $f = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Ef = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, Tf = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, Mf = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Nf = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, ga = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = Z(0), a = Z(!1), o = (k, R, w, Q) => {
      if (!Re(w) || R === 0)
        return k;
      const ie = l();
      return R === 1 || R === 2 && Q !== "n" && k ? ie : k;
    }, l = (k) => {
      const R = { ...n, ...k };
      if (!R.rectangle || !Re(R.rectangle)) return "";
      let w = "";
      switch (R.orientationModel) {
        case 0:
          w = Y.value;
          break;
        case 1:
          R.stockGrain === "y" || R.stockGrain === "n" ? w = R.rectangle.l >= R.rectangle.w ? "l" : "w" : R.rectangle.l >= R.rectangle.w ? w = R.stockGrain : w = w = R.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          w = R.rectangle.l >= R.rectangle.w ? "l" : "w";
          break;
      }
      return w;
    }, r = () => {
      if (n.disabled || D.value.length <= 1)
        return;
      const k = g(Y.value);
      "multiEdit" in n.rectangle && n.rectangle.multiEdit && Y.value === "" && s.value !== k && s.value === 0 && (s.value = k);
      let w = null;
      [1, 2].includes(n.orientationModel) ? w = y() : w = m(), s.value = w;
    }, g = (k) => {
      const R = D.value.findIndex((w) => w === k);
      return R === -1 ? 0 : R;
    }, m = () => {
      let k = s.value + 1;
      return k > D.value.length - 1 && (k = 0), k;
    }, y = () => {
      let k = 0;
      if (Y.value === "") {
        const R = l();
        k = D.value.findIndex((w) => w === R);
      } else
        k = D.value.findIndex((R) => R === "");
      return k;
    }, p = (k) => {
      i("updateOrientation", k);
    }, F = () => {
      const k = Y.value;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit)
        return k === " " ? " " : k === "" ? "" : k === "l" ? "l" : k === "w" ? "w" : "default";
      switch (n.orientationModel) {
        case 0:
          return k === " " ? " " : k ? n.stockGrain === "n" ? k || n.shapeOrientation || "default" : n.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        case 1:
          return k === " " ? " " : k ? n.stockGrain === "n" ? k || n.shapeOrientation || "default" : n.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        case 2:
          return k === " " ? " " : k ? n.stockGrain === "n" ? k || n.shapeOrientation || "default" : n.stockGrain === "w" ? k === "w" ? "w" : "l" : k === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, I = () => {
      if (!n.rectangle)
        return;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit && !Y.value) {
        M("");
        return;
      }
      const k = o(
        Y.value,
        n.orientationModel,
        n.rectangle,
        n.stockGrain
      );
      if (k !== Y.value) {
        M(k);
        return;
      }
      if (!a.value || s.value === -1) {
        const R = g(Y.value);
        s.value = R;
      }
      if (Re(n.rectangle)) {
        if (n.orientationModel === 1) {
          const R = E.value ? l() : Y.value;
          M(R);
          return;
        }
        if (n.orientationModel === 2) {
          let R;
          E.value ? R = n.stockGrain !== "n" ? l() : "" : R = Y.value, M(R);
        }
      }
    }, V = Z(!1), M = (k) => {
      const R = g(k);
      V.value = !0, s.value = R, V.value = !1, p(k);
    }, D = $(() => {
      if (!n.rectangle) return ["l", "w"];
      if (on(n.rectangle)) return ["l", "w"];
      let k = ["", "l", "w"];
      return n.rectangle.multiEdit ? [" ", "", "l", "w"] : (z.value && (k = k.filter((R) => R !== "w")), k);
    }), z = $(() => Re(n.rectangle) || Ui(n.rectangle) ? n.rectangle.isSquare : n.rectangleType && n.rectangle?.l && n.rectangle?.w ? n.rectangle?.l === n.rectangle?.w : !1), Y = $(() => {
      let k = "";
      if (on(n.rectangle))
        k = n.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Re(n.rectangle)) {
        const R = n.rectangle.orientationLock;
        k = R === null ? "" : R;
      } else if (Ui(n.rectangle)) {
        const w = n.rectangle.grain ?? "";
        w === "l" || w === "w" || w === "" || w === " " ? k = w : k = "";
      }
      return k;
    }), se = $(() => on(n.rectangle) || !n.rectangle ? {
      l: null,
      w: null
    } : {
      l: n.rectangle.l,
      w: n.rectangle.w
    }), E = $(() => !se.value.l && !se.value.w), N = $(() => on(n.rectangle) ? !1 : wi(
      n.orientationModel,
      n.stockGrain,
      n.rectangle,
      n.rectangleType,
      n.shapeOrientation
    )), ee = $(() => {
      if (!n.rectangle)
        return n.shapeOrientation ? "noGrain" : "freeRotation";
      if (Ui(n.rectangle) || n.rectangleType === "stock") {
        const ie = n.rectangle.grain;
        return "multiEdit" in n.rectangle && n.rectangle.multiEdit ? {
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
      const k = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, R = n.stockGrain || "default";
      let w = "default";
      Re(n.rectangle) || n.rectangleType === "shape" ? w = F() : on(n.rectangle) && (w = n.rectangle.direction || "default");
      const Q = k[R]?.[w];
      return Q || k[R]?.default || "freeRotation";
    });
    return Ue(s, (k, R) => {
      a.value && R !== void 0 && (V.value || p(D.value[k]));
    }, { immediate: !1 }), Ue(se, (k, R) => {
      if (!n.rectangle || n.orientationModel === 0 || !Re(n.rectangle) || Re(n.rectangle) && (n.orientationModel === 2 && R.l && R.w && !Y.value || n.stockGrain === "n" && !Y.value))
        return;
      const w = l();
      Y.value !== w && p(w);
    }, { immediate: !1 }), Ue(() => n.stockGrain, (k, R) => {
      k !== R && I();
    }, { immediate: !0 }), dn(() => {
      I(), ht(() => a.value = !0);
    }), (k, R) => (L(), j("button", {
      type: "button",
      id: t.id,
      class: We(["c-btn orientation-button", { rot: N.value, square: z.value, disabled: t.disabled, [ee.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: r
    }, [
      ee.value === "delete" ? (L(), j("svg", Lf, [...R[0] || (R[0] = [
        H("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : ae("", !0),
      ee.value === "noChange" ? (L(), j("svg", Ff, [...R[1] || (R[1] = [
        H("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : ae("", !0),
      ee.value === "freeRotation" ? (L(), j("svg", $f, [...R[2] || (R[2] = [
        H("g", null, [
          H("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          H("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          H("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          H("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : ae("", !0),
      ee.value === "leftRight" ? (L(), j("svg", Ef, [...R[3] || (R[3] = [
        H("g", null, [
          H("path", { d: "m5.408 19.408h61.095" }),
          H("g", null, [
            H("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            H("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : ae("", !0),
      ee.value === "topBottom" ? (L(), j("svg", Tf, [...R[4] || (R[4] = [
        H("g", null, [
          H("path", { d: "m19.408 66.503v-61.095" }),
          H("g", null, [
            H("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            H("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : ae("", !0),
      ee.value === "grainLeftRight" ? (L(), j("svg", Mf, [...R[5] || (R[5] = [
        H("g", null, [
          H("path", { d: "m3 3h99.887" }),
          H("path", { d: "m3.113 32h99.887" }),
          H("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : ae("", !0),
      ee.value === "grainTopBottom" ? (L(), j("svg", Nf, [...R[6] || (R[6] = [
        H("g", null, [
          H("path", { d: "m61 3v99.887" }),
          H("path", { d: "m32 3.113v99.887" }),
          H("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : ae("", !0)
    ], 10, Of));
  }
}), Bf = ["id", "data-index", "disabled"], Vf = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = $(() => n.inputShape ? cn(n.inputShape, "planing", "face.a") : !1), a = $(() => n.inputShape ? cn(n.inputShape, "planing", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const g = yn("FontAwesomeIcon");
      return L(), j("button", {
        id: t.id,
        class: We(["c-btn planing-button", {
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
        De(g, { icon: ["fass", "hammer"] })
      ], 10, Bf);
    };
  }
});
function Df(t, e, n) {
  let i = null;
  Ue(
    () => t.value ? { l: t.value.l, w: t.value.w } : null,
    (s) => {
      const a = typeof e == "number" ? e : e.value;
      if (!ar(a) || !s || !t.value) return;
      const o = s.w > s.l;
      if (i === null) {
        i = o;
        return;
      }
      if (i !== o) {
        const l = or(a);
        for (const r of l)
          Gl(t.value, r);
        i = o;
      }
    },
    { immediate: !0 }
  );
}
const Rf = {
  key: 0,
  class: "info"
}, Gf = ["disabled"], jf = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = $(() => n.field.name === "banding" && Re(n.item) ? n.item : null);
    Df(s, Ot(n, "orientationModel"));
    const a = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], o = $(() => a.includes(n.field.name) || n.field.name === "material" && n.typePrefix === "part" || n.field.name === "t" && n.thicknessOptions?.length > 0 || n.field.name === "w" && n.widthOptions?.length > 0), l = $(() => {
      try {
        const E = n.field.propertyPath || n.field.name;
        return E.includes(".") ? an(n.item, E) ?? null : n.item[E] ?? null;
      } catch (E) {
        return console.error("[CheckoutField] Error getting field value:", E), null;
      }
    }), r = $(() => {
      if (n.field.custom && n.field.type) {
        const ee = n.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(ee))
          return ee;
      }
      const E = {
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
      const N = E[n.field.type];
      return N || "string";
    }), g = $(() => n.field.output ? n.field.output : null), m = $(() => n.field.options || []), y = $(() => !!n.fullStockDisabled), p = $(() => n.item.isNew ? !1 : Ms(n.item, [n.field.name])), F = $(() => n.item.isNew ? !1 : Ms(n.item, [n.field.name], !0)), I = $(() => n.multiEdit || n.item.isNew || !1), V = $(() => n.materialOptions?.length > 0 && Re(n.item) ? !n.item.material : !1), M = $(() => n.widthOptions?.length === 1), D = $(() => n.field.info ? typeof n.field.info == "string" ? n.field.info : typeof n.field.info == "object" && l.value !== null && n.field.info[l.value] || null : null), z = (E) => {
      i("update", E);
    }, Y = (E, N) => {
      i("validation", E, N);
    }, se = () => {
      i("blur");
    };
    return (E, N) => o.value ? (L(), j(He, { key: 1 }, [
      t.field.name === "orientationLock" ? (L(), Ie(ga, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        disabled: y.value,
        onUpdateOrientation: z
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "grain" ? (L(), Ie(ga, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        disabled: y.value,
        onUpdateOrientation: z
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "banding" ? (L(), Ie(yf, {
        key: 2,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.banding,
        onClicked: N[0] || (N[0] = (ee) => E.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : t.field.name === "finish" ? (L(), Ie(kf, {
        key: 3,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.finish,
        onClicked: N[1] || (N[1] = (ee) => E.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "planing" ? (L(), Ie(Vf, {
        key: 4,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.planing,
        onClicked: N[2] || (N[2] = (ee) => E.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "machining" ? (L(), Ie(Af, {
        key: 5,
        "input-shape": A(Re)(t.item) ? t.item : null,
        disabled: y.value || t.materialExtrasDisabled?.machining,
        onOpen: N[3] || (N[3] = (ee) => E.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : t.field.name === "material" && t.typePrefix === "part" ? (L(), Ie(Un, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(ke)(t.field.label || "fields.material"),
        placeholder: A(ke)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: A(ke)("actions.select"),
          delete: A(ke)("actions.delete")
        },
        "onUpdate:value": z,
        onValidation: Y
      }, {
        default: Si(() => [
          os(E.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (L(), Ie(Un, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(ke)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: V.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(ke)("actions.select"),
          delete: A(ke)("actions.delete")
        },
        output: "number",
        "onUpdate:value": z,
        onValidation: Y
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (L(), Ie(Un, {
        key: 8,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(ke)(t.field.label || "fields.w"),
        "enable-label": !1,
        options: t.widthOptions,
        readonly: t.readonly,
        disabled: M.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(ke)("actions.select"),
          delete: A(ke)("actions.delete")
        },
        output: "number",
        "onUpdate:value": z,
        onValidation: Y
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (L(), j("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: N[4] || (N[4] = (ee) => E.$emit("open-image-upload"))
      }, [
        De(A(xi), { icon: ["fass", "image"] })
      ], 8, Gf)) : ae("", !0)
    ], 64)) : (L(), Ie(Un, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: l.value,
      label: A(ke)(t.field.label || t.field.name),
      placeholder: A(ke)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: g.value,
      options: m.value,
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
      warning: F.value,
      "disable-required-validation": I.value,
      "onUpdate:value": z,
      onValidation: Y,
      onBlur: se
    }, {
      default: Si(() => [
        D.value ? (L(), j("p", Rf, [
          De(A(xi), { icon: ["fass", "info-circle"] }),
          Qe(" " + ue(D.value), 1)
        ])) : ae("", !0),
        os(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), qf = { class: "checkout-calculator-wrapper" }, _f = {
  key: 0,
  class: "calculator-debug",
  style: { "margin-bottom": "20px", padding: "10px", background: "#1a1a2e", color: "#0f0", "font-family": "monospace", "font-size": "11px", "border-radius": "4px", "max-height": "400px", overflow: "auto" }
}, Uf = { style: { "margin-bottom": "6px", color: "#aaa" } }, Wf = { style: { color: "#0ff" } }, zf = { style: { "margin-bottom": "6px", color: "#aaa" } }, Hf = { style: { color: "#0ff" } }, Kf = { style: { color: "#ff0" } }, Zf = {
  key: 0,
  style: { color: "#888" }
}, Jf = {
  key: 1,
  style: { color: "#888" }
}, Yf = { style: { "margin-bottom": "6px", color: "#aaa" } }, Xf = { style: { color: "#ff0" } }, Qf = {
  key: 0,
  style: { color: "#0f0" }
}, ep = {
  key: 1,
  style: { color: "#f00" }
}, tp = { style: { "margin-bottom": "6px", color: "#aaa" } }, np = { style: { margin: "2px 0", "white-space": "pre-wrap", "max-height": "150px", overflow: "auto" } }, ip = { style: { color: "#aaa" } }, sp = { style: { margin: "2px 0", "white-space": "pre-wrap" } }, ap = {
  key: 0,
  class: "row table-heading"
}, op = {
  key: 0,
  class: "cell center"
}, lp = { class: "cell" }, rp = {
  key: 0,
  class: "cell"
}, cp = ["onClick"], up = { class: "cell" }, dp = ["disabled", "aria-label", "onClick"], fp = { class: "button-wrapper main" }, pp = ["aria-label"], gp = ["aria-label", "disabled"], hp = ["aria-label"], mp = { id: "part-count" }, vp = {
  key: 2,
  class: "pagination-controls"
}, bp = { class: "c-btn-group" }, yp = ["disabled"], wp = ["disabled"], kp = { class: "pagination-info" }, xp = ["disabled"], Sp = ["disabled"], Pp = {
  key: 4,
  id: "messages"
}, Cp = {
  key: 0,
  class: "heading"
}, Ip = { class: "content" }, Ap = {
  key: 5,
  id: "progress"
}, Op = { id: "diagram-wrapper" }, Lp = {
  key: 0,
  id: "stack"
}, Fp = {
  key: 4,
  class: "debug"
}, as = !1, $p = /* @__PURE__ */ Xe({
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
    const i = vn(() => import("./InputIssues-DMOspRQ8.js")), s = vn(() => import("./Machining-D507igw0.js")), a = vn(() => import("./ImportCSV-DOluUd_l.js")), o = vn(() => import("./ObjectViewer-U19I7q9o.js")), l = vn(() => import("./ImageUpload-62z-1HZd.js")), {
      inputs: r,
      totalInputShapes: g,
      getShapeGrainSummary: m,
      updateNumberFormat: y,
      validateInputStock: p,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: F,
      addInputShape: I,
      addInputStock: V,
      cloneInputShape: M,
      updateInputShape: D,
      validationIssues: z,
      setExtrasOptionsFromPricing: Y,
      getCentralizedOptions: se
    } = Ta(), { r: E, updateFromResult: N, stackedStock: ee, uniqueAddedShapes: k, uniqueUsedStock: R, usedStock: w, activeStockAutoId: Q, activeStock: ie, setActiveStockAutoId: re } = Oi();
    Vu({
      stockList: E.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: ge, reset: $e } = Ha(), { addNotice: q } = Ma(), ne = $(() => r.inputShapes.value.filter(Re)), J = (c) => !c || !Array.isArray(c) ? [] : c.map((u) => Nr({ parts: [u] }).parts?.[0] || u), pe = !1, Me = t, ve = n, et = Z(!1), Ke = "production", Lt = Z(navigator?.language || "en-US"), nt = Fn(null), Ft = window.location.hostname, kt = Z(!1), Yt = Z(!0), $t = _o("Checkout/currentURL", window.location.href), at = Z([]), Et = Z(null), rt = Z(null), Gt = Z(!1), mt = Z(!1), Ze = Z(!1), fn = Z(!1), Xt = Z(!1), xt = Z(jl()), ce = Z(!1), x = Z(1), C = Z(10), { socket: b } = bd({
      refs: {
        connected: kt,
        thinking: Ze
      },
      callbacks: {
        onResult(c) {
          const u = c.optimisation;
          if (N(u), !u.shapeList?.length || !u.stockList?.length) {
            $e(), q({
              type: "error",
              message: ke("errors.calculation.no_result"),
              additional: [ke("errors.validation.check_inputs")]
            }), Ze.value = !1;
            return;
          }
          if ((T.apiVersion || 3) === 2 ? rt.value = mf(
            c.jobId,
            k.value,
            R.value,
            w.value,
            E.offcuts?.value || [],
            r.inputShapes.value,
            E.metadata.value,
            T.resultOrientationModel
          ) : rt.value = vf(
            c.jobId,
            k.value,
            R.value,
            w.value,
            E.offcuts?.value || [],
            r.inputShapes.value,
            E.metadata.value,
            T.resultOrientationModel
          ), E?.metadata?.value?.unplacedParts?.length) {
            const d = E.metadata.value.unplacedParts.map((P) => P.id).join();
            q({
              type: "warning",
              message: ke("errors.validation.parts_not_fit", { count: E.metadata.value.unplacedParts.length }) + ": " + d
            });
          }
          rt.value && (rt.value.apiResultV3 = Hr({
            jobId: c.jobId,
            saw: u.saw,
            stockList: u.stockList,
            shapeList: u.shapeList,
            cutList: u.cutList,
            offcuts: E.offcuts?.value || [],
            unusableShapes: u.unusableShapes,
            metadata: E.metadata.value
          }), ve("result", rt.value)), Ze.value = !1;
        },
        onUser(c) {
          nt.value = c;
        },
        onConnectError(c) {
          q({
            type: "error",
            message: ke("errors.network.cannot_connect"),
            additional: [c]
          });
        },
        onError(c) {
          q({
            type: "error",
            message: ke("errors.general.error_occurred"),
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
      debug: !1
    }, T = At(W), te = At({
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
    }), be = Z(null), Le = Z(!1), it = Z(""), Tt = Z("");
    Ue(z, (c) => {
      c?.length > 0 ? (Le.value = !0, it.value = "Validation Errors", Tt.value = c.map((u) => `${u.message} (${u.category.join(", ")})`).join(`

`)) : it.value === "Validation Errors" && (Le.value = !1, it.value = "", Tt.value = "");
    }, { deep: !0 });
    const ot = At({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), Se = Z([]), Ee = Z([]), jt = Z([]), Ne = Z([]), dt = At({
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
    }), Te = At({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), Je = At({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), qe = At({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), Xn = Z(null), qt = At({}), vt = At({}), bt = At({}), pn = Z(null), wn = Z(null), Fi = $(() => ({
      banding: qt.rules,
      finish: vt.rules,
      planing: bt.rules
    })), kn = $(() => vd({
      stockType: te.stockType,
      materials: Se.value,
      minDimension: T.minDimension,
      ...T.fieldOrder && T.fieldOrder.length > 0 ? { allowedFieldIds: T.fieldOrder } : {}
    })), xn = Z([]), Sn = Z({
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
    }), Pn = $(() => {
      const c = kn.value.fields.value, u = kn.value.allFieldsMap.value, h = c.filter((he) => Sn.value[he.name] ?? !0), d = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], P = [];
      let O = null;
      const U = h.filter((he) => he.name !== "fullStock");
      Sn.value.fullStock && (O = h.find((he) => he.name === "fullStock") || u.get("fullStock"));
      for (const he of d) {
        const je = Sn.value[he], Ae = U.find((Be) => Be.name === he);
        if (je && !Ae) {
          const Be = u.get(he);
          Be && P.push(Be);
        }
      }
      const we = xn.value || [];
      return [
        ...O ? [O] : [],
        ...U,
        ...P,
        ...we
      ];
    }), Qt = $(() => Pn.value.length + 2), $i = $(() => {
      const c = {
        id: 34,
        del: 32
      }, u = {
        id: `${c.id}px`,
        del: `${c.del}px`
      }, h = [];
      for (const d of Pn.value) {
        if (d.name === "trim") continue;
        const P = d.w ?? "minmax(20px, 1fr)";
        h.push(P);
      }
      return h.unshift(u.id), h.push(u.del), h.join(" ");
    }), gn = $(() => T.enable.pagination), Qn = $(() => Me.diagramNav || T.enable.diagramNav), _t = $(() => gn.value ? Math.ceil(ne.value.length / C.value) : 1), Ei = $(() => {
      if (!gn.value) return ne.value;
      const c = (x.value - 1) * C.value, u = c + C.value;
      return ne.value.slice(c, u);
    }), ei = $(() => gn.value ? (x.value - 1) * C.value : 0), Cn = (c) => {
      c < 1 && (c = 1), c > _t.value && (c = _t.value), x.value = c;
    }, Ti = () => Cn(1), f = () => Cn(x.value - 1), S = () => Cn(x.value + 1), G = () => Cn(_t.value), B = $(() => T.debug || T.enable.debug), X = $(() => {
      try {
        const c = localStorage.getItem("inputs/inputStock");
        if (!c) return "(empty)";
        const u = JSON.parse(c);
        return JSON.stringify(u.map((h) => ({ material: h.material, db_id: h.db_id, l: h.l, w: h.w, t: h.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), le = $(() => {
      try {
        const c = localStorage.getItem("stock-filter-selections");
        return c || "(empty)";
      } catch {
        return "(read error)";
      }
    }), xe = $(() => ({
      "--btn-color": T.colors.buttonText,
      "--btn-bg": T.colors.button,
      "--btn-hover-bg": Fe(T.colors.button, -8),
      "--btn-focus-ring": T.colors.button
    }));
    function Fe(c, u) {
      const h = c.replace("#", ""), d = parseInt(h, 16), P = Math.round(2.55 * u), O = (d >> 16) + P, U = (d >> 8 & 255) + P, we = (d & 255) + P;
      return `#${(16777216 + (O < 255 ? O < 1 ? 0 : O : 255) * 65536 + (U < 255 ? U < 1 ? 0 : U : 255) * 256 + (we < 255 ? we < 1 ? 0 : we : 255)).toString(16).slice(1)}`;
    }
    const ye = {
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
    }, ct = $(() => Me.showCredit !== void 0 ? Me.showCredit : nt.value ? !(nt.value && nt.value?.api?.whiteLabel) : !0), Ge = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (c) => {
        const u = ["efficiency", "smallest"];
        c && !u.includes(c) ? console.warn(`${c} is not a valid stockSelection, expected ${u.join("|")}`) : te.options.stockSelection = c;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (c) => {
        te.options.minSpacing = c;
      },
      maxParts: (c) => {
        T.maxParts = c;
      },
      partsPerPage: (c) => {
        c && c > 0 && (C.value = c, T.partsPerPage = c);
      },
      locale: (c) => {
        Lt.value = c.replace(/_/g, "-");
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
        for (const h in W.enable)
          h in c && (T.enable[h] = c[h]);
        for (const h in u) {
          const d = u[h], P = an(c, [d]), O = W.enable[d];
          Ce(h, P !== void 0 ? P : O);
        }
        Xt.value = an(c, ["csvImport"]) ?? W.enable.csvImport;
      },
      colors: (c) => {
        for (const u in W.colors)
          u in c && (T.colors[u] = c[u]);
      },
      orientationModel: (c) => {
        if (![0, 1, 2].includes(c)) {
          T.orientationModel = 0;
          return;
        }
        T.orientationModel = c;
      },
      numberFormat: (c) => {
        if (!["decimal", "fraction"].includes(c)) {
          T.numberFormat = "decimal";
          return;
        }
        T.numberFormat = c;
      },
      customFields: (c) => {
        if (!Array.isArray(c) || !c?.length)
          return;
        const u = [];
        c.forEach((h) => {
          const d = Mt(h.id), P = {
            ...h,
            custom: !0,
            id: d,
            name: d,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + d,
            fieldMap: "customData." + d
          };
          h.type === "checkbox" && (P.w = "32px"), h.type === "integer" || h.type === "float" ? P.output = h.output ?? "number" : h.type === "select" && (P.output = h.output ?? "string", P.options = h.options), u.push(P);
        }), xn.value = u, ht(() => {
          for (const h of r.inputShapes.value)
            h.customData = c.reduce((d, P) => {
              const O = Mt(P.id);
              return d[O] = h.customData[O] || P.default || "", d;
            }, {});
        });
      }
    }, Ve = (c) => {
      B.value && ve("log", ["checkout init...", c]), c?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), c?.parts && (c.parts = J(c.parts));
      let u;
      try {
        u = pf(c);
      } catch (d) {
        console.error("[init] validation FAILED:", d.message), ve("error", d.message || "Invalid init data");
        return;
      }
      if (u.saw) {
        const d = u.saw;
        if (d.stockType !== void 0 && (rs.includes(d.stockType) || console.warn(`${d.stockType} is not a valid stockType, expected ${rs.join("|")}`), te.stockType = d.stockType, d.stockType === "linear" && (te.cutType = null, te.cutPreference = null)), d.bladeWidth !== void 0) {
          const P = typeof d.bladeWidth == "string" ? parseFloat(d.bladeWidth) : d.bladeWidth;
          P >= 0 ? te.bladeWidth = P : console.warn(`SmartCut - you provided an incorrect blade width of: ${d.bladeWidth}`);
        }
        if (d.cutType !== void 0 && (te.cutType = d.cutType), d.cutPreference !== void 0 && (Ns.includes(d.cutPreference) ? te.cutPreference = d.cutPreference : console.warn(`SmartCut - cut preference ${d.cutPreference || "N/A"} is not valid. Expected: ${Ns.join("|")}`)), d.guillotineOptions !== void 0 && typeof d.guillotineOptions == "object" && Object.assign(te.guillotineOptions, d.guillotineOptions), d.stackHeight !== void 0) {
          const P = typeof d.stackHeight == "string" ? parseFloat(d.stackHeight) : d.stackHeight;
          te.stackHeight = P;
        }
        d.efficiencyOptions !== void 0 && typeof d.efficiencyOptions == "object" && Object.assign(te.efficiencyOptions, d.efficiencyOptions), d.options !== void 0 && typeof d.options == "object" && (d.options.stockSelection !== void 0 && (te.options.stockSelection = d.options.stockSelection), d.options.stackingMode !== void 0 && (te.options.stackingMode = d.options.stackingMode), d.options.minSpacing !== void 0 && (te.options.minSpacing = d.options.minSpacing));
      }
      if (u?.options) {
        const d = u.options;
        Na(d);
        const P = ["stockType", "bladeWidth"];
        if (!u.saw && !c?.stockFilterEnabled)
          ve("error", `Saw configuration is required. Missing properties: ${P.join(", ")}`);
        else if (u.saw) {
          const U = P.filter((we) => !(we in u.saw));
          U.length > 0 && ve("error", `Missing required saw properties: ${U.join(", ")}`), (u.saw.cutType === "guillotine" || u.saw.cutType === "beam") && !("cutPreference" in u.saw) && ve("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const O = ["enable", "colors"];
        for (const U in d)
          O.includes(U) || (T[U] = d[U]), U in Ge && Ge[U](d[U]);
      }
      if (u.options.colors && "colors" in Ge && Ge.colors(u.options.colors), u.banding) {
        const d = u.banding;
        "locations" in d && d.locations && (qt.locations = d.locations), "groups" in d && d.groups && (qt.groups = d.groups), "rules" in d && d.rules && (qt.rules = d.rules);
      }
      if (u.finish) {
        const d = u.finish;
        "locations" in d && d.locations && (vt.locations = d.locations), "groups" in d && d.groups && (vt.groups = d.groups), "rules" in d && d.rules && (vt.rules = d.rules);
      }
      if (u.planing) {
        const d = u.planing;
        "locations" in d && d.locations && (bt.locations = d.locations), "groups" in d && d.groups && (bt.groups = d.groups), "rules" in d && d.rules && (bt.rules = d.rules);
      }
      u.partRules && (pn.value = u.partRules), u.customValidation && (wn.value = u.customValidation), Gi("banding", u), Gi("finish", u), Gi("planing", u), ti(u), xs(u), r.inputShapes.value.length && Is(), mt.value = !0, B.value && ve("log", ["init complete"]);
      const h = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(h), ht(() => {
        ct.value && !wo() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), u.parts?.length && ht(() => {
        B.value && ve("log", ["loading parts via init..."]), r.inputShapes.value.length = 0;
        let d = 0;
        for (const O of u.parts) {
          const U = ii(O);
          U ? U.issues?.length && B.value && ve("log", [`SmartCut - issues found while importing part at index ${d}`, U.issues]) : B.value && ve("log", [`SmartCut - error loading part at index ${d}`, O]), d++;
        }
        r.inputShapes.value.flatMap((O) => ls(O.issues)).length && q({
          type: "error",
          message: ke("errors.general.issues_found")
        }), B.value && ve("log", [`loaded ${r.inputShapes.value.length} parts via init`]);
      });
    }, Ce = (c, u = !1) => {
      Sn.value[c] = u;
    }, Mt = (c) => c ? Ul(c)?.toLowerCase() : null, St = (c, u, h) => {
      try {
        if (!c || !u) return;
        const P = h !== null && h !== "" && h !== void 0 && !["orientationLock", "grain"].includes(u), O = (oe, he) => {
          if (!D(oe.autoId, he)) {
            for (const [Ae, Be] of Object.entries(he))
              Hi(oe, Ae, Be);
            oe.isNew || oe.validate({ fields: Object.keys(he) });
          }
        }, U = (oe, he, je) => {
          const Ae = he ?? oe.material, Be = je ?? oe.t, Ct = r.inputStock.value.find((In) => {
            const $o = !Ae || In.material === Ae, Eo = Be == null || me({ v: In.t }) === me({ v: Be });
            return $o && Eo;
          });
          return Ct ? { l: me({ v: Ct.l }), w: me({ v: Ct.w }) } : null;
        };
        if (u === "material" && (!h || h === "")) {
          const oe = { material: null, t: null };
          te.stockType === "linear" && (oe.w = null), O(c, oe);
          return;
        }
        if (u === "material" && h && Se.value?.length) {
          const oe = Se.value.find((he) => he.name === h);
          if (oe) {
            const he = { material: h };
            if (c.t != null) {
              const Ae = me({ v: c.t });
              !oe.thicknesses.some((Be) => me({ v: Be }) === Ae) && oe.thicknesses.length > 0 && (he.t = me({ v: oe.thicknesses[0] }));
            }
            if (te.stockType === "linear" && c.w != null && oe.widths) {
              const Ae = me({ v: c.w });
              !oe.widths.some((Be) => me({ v: Be }) === Ae) && oe.widths.length > 0 && (he.w = me({ v: oe.widths[0] }));
            }
            O(c, he), hn(c, oe), c.extras && (c.extras.banding = null, c.extras.finish = null, c.extras.planing = null);
            const je = r.inputShapes.value.indexOf(c);
            for (const Ae of ["banding", "finish", "planing"])
              if (ot[Ae] === je) {
                const Be = ut(c, Ae);
                Be.options.length && Y(Ae, Be.options, Be.labels, Be.pricing);
              }
            return;
          }
        }
        if (u === "fullStock")
          if (h === !0) {
            const oe = U(c);
            if (oe) {
              O(c, { fullStock: !0, l: oe.l, w: oe.w });
              return;
            }
          } else {
            O(c, { fullStock: !1, l: null, w: null });
            return;
          }
        if ((u === "material" || u === "t") && c.fullStock) {
          const oe = U(
            c,
            u === "material" ? h : void 0,
            u === "t" ? h : void 0
          );
          if (oe) {
            O(c, { [u]: h, l: oe.l, w: oe.w });
            return;
          }
        }
        if (c.isNew)
          if (P)
            c.isNew = !1;
          else {
            Hi(c, u, h);
            return;
          }
        let we;
        if (u.includes(".")) {
          const oe = u.split("."), he = oe[0], je = oe.slice(1).join("."), Be = { ...c[he] || {} };
          Hi(Be, je, h), we = { [he]: Be };
        } else
          we = { [u]: h };
        O(c, we), u === "t" && te.stockType === "linear" && Se.value?.length && c.material && ht(() => {
          const oe = ks(c);
          if (oe.length > 0 && c.w != null) {
            const he = me({ v: c.w });
            oe.some((je) => me({ v: je }) === he) || O(c, { w: me({ v: oe[0] }) });
          }
        });
      } catch (d) {
        console.error("[CHECKOUT] Error updating field:", d);
      }
    }, Mn = () => {
    }, Pt = (c, u) => {
      c?.isNew && (c.isNew = !1), c.validate({ fields: [u] }), ["l", "w", "t"].includes(u) && Nn(c);
    }, Nn = (c) => {
      if (pn.value && c && !c.isNew && !(!c.l && !c.w))
        try {
          const u = qd(c, pn.value);
          if (c.issues && (c.issues = c.issues.filter((h) => !h.category?.includes("part"))), !u.valid && u.violations.length > 0)
            for (const h of u.violations) {
              const d = Ud(h), P = h.dimension === "longSide" ? "l" : h.dimension === "shortSide" ? "w" : null;
              new Dt({
                item: c,
                type: "error",
                category: ["part"],
                field: P ? [[P]] : [],
                message: d,
                shouldTranslate: !1
              });
            }
        } catch (u) {
          console.error("[CHECKOUT] Error validating part:", u);
        }
    }, ti = (c) => {
      if (an(T, ["enable", "machining"]) && c?.machining) {
        for (const u in dt)
          c.machining[u] && (dt[u] = c.machining[u]);
        if (["holes", "hingeHoles"].forEach((u) => {
          c?.machining?.[u] && (dt[u].enabled = c?.machining?.[u].enabled);
        }), c?.machining?.corners?.types?.length && (dt.corners.enabled = !0, dt.corners.types = c.machining.corners.types), c.banding && c?.options?.enable?.banding) {
          if (!Te) return;
          dt.banding = {
            enabled: !0
          }, Te.options.length && (dt.banding.options = Te.options), Te.labels.length && (dt.banding.labels = Te.labels), Bs(Te.pricing) && (dt.banding.pricing = Te.pricing);
        }
      }
    }, oo = (c = null) => {
      be.value = c, c && Re(c) && c.l && c.w ? et.value = !0 : alert(ke("machining.enter_dimensions_first"));
    }, lo = () => {
      et.value = !1;
    }, ws = (c = []) => {
      if (Ee.value = [], jt.value = [], Ce("t", !1), !!c.length) {
        for (const u of c)
          if (u?.t)
            if (typeof u.t == "string" && u.t.includes(",")) {
              const h = ni(u.t, !0);
              h.length === 2 ? (go(h), Ce("t", !0), u.t = Ee.value[0]) : ve("error", "bonded thickness found which does not have 2 options");
            } else Ee.value.includes(u.t) || Ee.value.push(u.t);
        Ee.value.length > 1 && Ce("t", !0);
      }
    }, Mi = (c = []) => {
      if (Ne.value = [], !c.length) {
        Ce("w", !1);
        return;
      }
      for (const u of c) {
        if (!u?.w) continue;
        const h = me({ v: u.w });
        Ne.value.includes(h) || Ne.value.push(h);
      }
      Ne.value.length >= 1 ? Ce("w", !0) : Ce("w", !1);
    }, ro = (c) => {
      if (!c) return { thicknesses: [], bondedThicknesses: [] };
      if (!Se.value?.length)
        return {
          thicknesses: Ee.value,
          bondedThicknesses: []
        };
      if (!c.material)
        return {
          thicknesses: Ee.value,
          bondedThicknesses: []
        };
      const u = Se.value.find((P) => P.name === c.material);
      if (!u)
        return {
          thicknesses: Ee.value,
          bondedThicknesses: []
        };
      const h = [...u.thicknesses], d = [];
      for (let P = 0; P < h.length; P++) {
        const O = h[P], U = ni(O), we = [];
        if (U.length) {
          for (const oe of U)
            h[P] = oe, we.push(P);
          P++;
        }
        we.length && d.push(we);
      }
      return {
        thicknesses: h,
        bondedThicknesses: d
      };
    }, ks = (c) => {
      if (!c) return [];
      if (!Se.value?.length || !c.material)
        return Ne.value;
      const u = Se.value.find((h) => h.name === c.material);
      if (!u)
        return Ne.value;
      if (c.t != null && r.inputStock?.value?.length) {
        const h = me({ v: c.t }), d = /* @__PURE__ */ new Set();
        for (const P of r.inputStock.value)
          P.material?.toUpperCase() === c.material && me({ v: P.t }) === h && P.w != null && d.add(me({ v: P.w }));
        if (d.size > 0)
          return Array.from(d).sort((P, O) => P - O);
      }
      return u.widths || Ne.value;
    }, co = (c) => c === "banding" ? Te : c === "finish" ? Je : c === "planing" ? qe : null, uo = (c, u) => {
      const h = c?.stock?.db_id;
      return h ? r.inputStock.value.find((P) => P.db_id === h)?.customData?.stockExtras?.[u] : void 0;
    }, ut = (c, u) => {
      const h = co(u), d = {
        options: h?.options ?? [],
        labels: h?.labels ?? [],
        pricing: h?.pricing ?? {}
      };
      if (!c?.material) return d;
      const P = uo(c, u);
      if (!P) return d;
      const O = P.pricing && typeof P.pricing == "object" ? P.pricing : { [P.name]: P.price ?? 0 }, U = P.labels?.length ? P.labels : [u.charAt(0).toUpperCase() + u.slice(1)];
      return { options: si(O), labels: U, pricing: O };
    }, Ni = (c, u) => ut(c, u).options, fo = (c, u) => {
      const h = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!c?.material) return h;
      const d = c?.stock?.db_id;
      if (!d) return h;
      const O = r.inputStock.value.find((U) => U.db_id === d)?.customData?.stockExtras;
      return O ? {
        banding: !O.banding,
        finish: !O.finish,
        planing: !O.planing,
        machining: !O.machining
      } : h;
    }, xs = (c) => {
      if (c?.stock?.some((u) => u?.material)) {
        Se.value = [], Ee.value = [], jt.value = [];
        const u = /* @__PURE__ */ new Map();
        for (const P of c.stock) {
          if (!P.material) continue;
          const O = (P.customData?.stockName || P.material).toUpperCase();
          u.has(O) || u.set(O, { db_id: P.db_id, code: P.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), P.t != null && (typeof P.t == "string" && P.t.includes(",") ? u.get(O)?.thicknesses.add(P.t) : u.get(O)?.thicknesses.add(me({ v: P.t }))), te.stockType === "linear" && P.w != null && u.get(O)?.widths.add(me({ v: P.w }));
        }
        const h = Array.from(u.entries()).map(([P, O]) => {
          const U = [], we = [];
          for (const oe of O.thicknesses)
            typeof oe == "string" && oe.includes(",") ? we.push(oe) : U.push(me({ v: oe }));
          return { name: P, sets: O, regularThicknesses: U, bondedStrings: we };
        });
        Se.value = h.map(({ name: P, sets: O, regularThicknesses: U }) => {
          const we = {
            name: P,
            db_id: O.db_id,
            code: O.code,
            thicknesses: U.sort((oe, he) => oe - he)
          };
          return te.stockType === "linear" && O.widths.size > 0 && (we.widths = Array.from(O.widths).sort((oe, he) => oe - he)), we;
        });
        const d = /* @__PURE__ */ new Set();
        for (const P of Se.value)
          for (const O of P.thicknesses)
            d.add(me({ v: O }));
        Ee.value = Array.from(d).sort((P, O) => P - O);
        for (let P = 0; P < h.length; P++) {
          const { bondedStrings: O } = h[P], U = Se.value[P];
          for (const we of O) {
            const oe = ni(we, !0);
            if (oe.length !== 2) continue;
            const he = [];
            for (const je of oe) {
              const Ae = me({ v: je });
              let Be = Ee.value.findIndex((Ct) => me({ v: Ct }) === Ae);
              Be === -1 ? (Ee.value.push(Ae), U.thicknesses.push(Ae), Be = Ee.value.length - 1) : U.thicknesses.some((Ct) => me({ v: Ct }) === Ae) || U.thicknesses.push(Ae), he.push(Be);
            }
            jt.value.push(he);
          }
        }
        if (te.stockType === "linear") {
          const P = /* @__PURE__ */ new Set();
          for (const O of Se.value)
            if (O.widths)
              for (const U of O.widths)
                P.add(me({ v: U }));
          Ne.value = Array.from(P).sort((O, U) => O - U);
        }
        Se.value.length > 1 ? Ce("material", !0) : Ce("material", !1), Ee.value.length > 1 ? Ce("t", !0) : Ce("t", !1), te.stockType === "linear" && Ne.value.length > 1 ? Ce("w", !0) : te.stockType === "linear" && Ce("w", !1);
      } else
        ws(c.stock);
      te.stockType === "linear" && !Se.value?.length && Mi(c.stock);
    }, po = (c) => {
      if (!c?.length) {
        Se.value = [], Ee.value = [], Ne.value = [];
        return;
      }
      if (c.some((h) => h?.material)) {
        const h = /* @__PURE__ */ new Map();
        jt.value = [];
        for (const O of c) {
          if (!O.material) continue;
          const U = (O.customData?.stockName || O.material).toUpperCase();
          h.has(U) || h.set(U, { db_id: O.db_id, code: O.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), O.t != null && (typeof O.t == "string" && O.t.includes(",") ? h.get(U)?.thicknesses.add(O.t) : h.get(U)?.thicknesses.add(me({ v: O.t }))), te.stockType === "linear" && O.w != null && h.get(U)?.widths.add(me({ v: O.w }));
        }
        const d = Array.from(h.entries()).map(([O, U]) => {
          const we = [], oe = [];
          for (const he of U.thicknesses)
            typeof he == "string" && he.includes(",") ? oe.push(he) : we.push(me({ v: he }));
          return { name: O, sets: U, regularThicknesses: we, bondedStrings: oe };
        });
        Se.value = d.map(({ name: O, sets: U, regularThicknesses: we }) => {
          const oe = {
            name: O,
            db_id: U.db_id,
            code: U.code,
            thicknesses: we.sort((he, je) => he - je)
          };
          return te.stockType === "linear" && U.widths.size > 0 && (oe.widths = Array.from(U.widths).sort((he, je) => he - je)), oe;
        });
        const P = /* @__PURE__ */ new Set();
        for (const O of Se.value)
          for (const U of O.thicknesses)
            P.add(me({ v: U }));
        Ee.value = Array.from(P).sort((O, U) => O - U);
        for (let O = 0; O < d.length; O++) {
          const { bondedStrings: U } = d[O], we = Se.value[O];
          for (const oe of U) {
            const he = ni(oe, !0);
            if (he.length !== 2) continue;
            const je = [];
            for (const Ae of he) {
              const Be = me({ v: Ae });
              let Ct = Ee.value.findIndex((In) => me({ v: In }) === Be);
              Ct === -1 ? (Ee.value.push(Be), we.thicknesses.push(Be), Ct = Ee.value.length - 1) : we.thicknesses.some((In) => me({ v: In }) === Be) || we.thicknesses.push(Be), je.push(Ct);
            }
            jt.value.push(je);
          }
        }
        if (te.stockType === "linear") {
          const O = /* @__PURE__ */ new Set();
          for (const U of Se.value)
            if (U.widths)
              for (const we of U.widths)
                O.add(me({ v: we }));
          Ne.value = Array.from(O).sort((U, we) => U - we);
        }
        Ce("material", Se.value.length > 1), Ce("t", Ee.value.length > 1), te.stockType === "linear" && Ce("w", Ne.value.length > 1);
      } else
        ws(c), te.stockType === "linear" && Mi(c);
    }, go = (c, u = null) => {
      if (!Array.isArray(c)) {
        ve("error", "addBondedThicknesses expects an array");
        return;
      }
      const h = [];
      for (let d of c)
        T.numberFormat === "decimal" && (d = parseFloat(d)), Ee.value.push(d), u && u.thicknesses.push(d), h.push(Ee.value.length - 1);
      jt.value.push(h);
    }, ho = (c) => {
      const { thicknesses: u } = ro(c);
      return u?.length ? u.map((h) => ({
        label: h?.toString(),
        value: h
      })) : [];
    }, mo = (c) => {
      const u = ks(c);
      return u?.length ? u.map((h) => ({
        label: h?.toString(),
        value: h
      })) : [];
    }, ni = (c, u = !1) => {
      if (typeof c == "string" && c.includes(",")) {
        const h = c.split(",");
        if (h.length === 2) {
          const d = parseFloat(h[0]), P = parseFloat(h[1]);
          !isNaN(d) && !isNaN(P) && P !== d * 2 && q({
            type: "warning",
            message: `Bonded thickness "${c}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return u ? h.map((d) => me({ v: d })) : h;
      }
      return [];
    }, vo = () => {
      ce.value ? yo() : bo();
    }, bo = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), ce.value = !0;
    }, yo = () => {
      document.exitFullscreen && document.exitFullscreen(), ce.value = !1;
    }, wo = () => {
      if (nt.value?.api?.whiteLabel) return !0;
      let c = !0;
      const u = document.querySelector("#smartcut-checkout a#credit");
      if (!u) return c = !1;
      const h = window.getComputedStyle(u);
      return h.display === "none" || h.display === "hidden" || h.opacity === "0" || h.color === "transparent" || h.position !== "absolute" || h.color !== "#4e4e4e" && h.color !== "rgb(78, 78, 78)" ? c = !1 : (Yt.value = c, c);
    }, Bi = $(() => typeof Me.findExtrasPrice == "function"), Ss = (c, u) => {
      let h, d;
      switch (u) {
        case "banding":
          h = Te.options, d = Te.labels;
          break;
        case "finish":
          h = Je.options, d = Je.labels;
          break;
        case "planing":
          h = qe.options, d = qe.labels;
          break;
        default:
          h = [], d = [];
      }
      sn(c, u, h, d);
    }, Ps = (c) => {
      const u = Object.keys(c);
      return Math.max(...u.map((d) => d.split("|").length));
    }, Bn = (c, u, h) => {
      if (!c)
        return [];
      if (h > 0 && !u[h - 1])
        return [];
      const d = /* @__PURE__ */ new Set();
      for (const O of Object.keys(c)) {
        const U = O.split("|");
        if (U.length > h) {
          let we = !0;
          for (let oe = 0; oe < h; oe++) {
            const he = u[oe], je = U[oe];
            if (he && he !== je) {
              we = !1;
              break;
            }
          }
          we && d.add(U[h]);
        }
      }
      return Array.from(d);
    }, Vi = (c, u, h, d) => {
      const P = ut(c, u);
      return Wi(c, u, h, (U, we) => {
        const oe = we.filter((he) => he?.trim()).join("|");
        return oe && P.pricing[oe] !== void 0 ? P.pricing[oe] : d ? d(U, we) : null;
      }, P.options, P.labels);
    }, ko = (c, u, h) => {
      let d, P;
      switch (u) {
        case "banding":
          d = Te.options, P = Te.labels;
          break;
        case "finish":
          d = Je.options, P = Je.labels;
          break;
        case "planing":
          d = qe.options, P = qe.labels;
          break;
        default:
          d = [], P = [];
      }
      return Wi(c, u, h, Me.findExtrasPrice, d, P);
    }, xo = Z({}), So = (c) => {
      const u = at.value.findIndex((h) => h.shapeId === c.shapeId);
      u !== -1 ? at.value[u] = c : at.value.push(c), window.smartcutImages = at.value;
    }, Po = (c) => {
      at.value = at.value.filter((u) => u.shapeId !== c), window.smartcutImages = at.value;
    }, Co = (c) => {
      Et.value = Et.value === c ? null : c;
    }, Di = (c = 1) => {
      for (let u = c; u--; ) {
        let h = {
          l: null,
          w: te.stockType === "linear" && Ne.value.length === 1 ? Ne.value[0] : null,
          t: Ee.value.length ? Ee.value[0] : null,
          q: 1,
          material: Se.value?.length === 1 ? Se.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const P = r.inputShapes.value[r.inputShapes.value.length - 1];
          h.material = P.material, h.t = P.t, te.stockType === "linear" && P.w && (h.w = P.w);
        }
        const d = I(h);
        d && (Te?.labels?.length && sn(d, "banding", Te.options, Te.labels), Je?.labels?.length && sn(d, "finish", Je.options, Je.labels), qe?.labels?.length && sn(d, "planing", qe.options, qe.labels));
      }
    }, ii = (c = {}) => {
      const u = {
        q: 1,
        // Always set quantity to 1
        ...c
      }, h = I(u);
      return h && (te.stockType === "linear" && Ne.value.length === 1 && !h.w && (h.w = Ne.value[0]), Ee.value.length && !h.t && (h.t = Ee.value[0]), Se.value?.length === 1 && !h.material && (h.material = Se.value[0].name), Te?.labels?.length && sn(h, "banding", Te.options, Te.labels), Je?.labels?.length && sn(h, "finish", Je.options, Je.labels), qe?.labels?.length && sn(h, "planing", qe.options, qe.labels)), h;
    }, Io = (c) => {
      if (Ee.value.length)
        for (const u of c) {
          if (!u.t) continue;
          const h = Ee.value.findIndex(
            (O) => me({ v: O }) === u.t
          ), d = jt.value.find((O) => O.includes(h));
          if (!d) continue;
          const P = Math.min(
            ...d.map((O) => Ee.value[O])
          );
          me({ v: u.t }) > P && (u.q = Number(u.q) * (me({ v: u.t }) / P), u.notes = `Bond to form ${u.t.valueOf()}`, u.t = P);
        }
    }, Cs = () => {
      $e(), re(null), E.stockList.value = [], E.shapeList.value = [], E.cutList.value = [];
    }, Ri = () => {
      r.inputShapes.value.length = 0, Me.inputType !== "formula" && ht(() => Di());
    }, hn = (c, u) => {
      c.stock = {
        db_id: u.db_id,
        code: u.code,
        material: u.name,
        thickness: me({ v: c.t })
      };
    }, Is = () => {
      for (const c of r.inputShapes.value) {
        const u = c.stock, h = c.material?.toUpperCase(), d = (u?.db_id ? Se.value.find((P) => P.db_id && P.db_id === u.db_id) : null) || (u?.code ? Se.value.find((P) => P.code && P.code === u.code) : null) || (h ? Se.value.find((P) => P.name === h) : null);
        if (d)
          c.material = d.name, hn(c, d), d.thicknesses.includes(me({ v: c.t })) || (c.t = me({ v: d.thicknesses[0] }), hn(c, d));
        else {
          if ((u?.db_id || u?.code) && !Se.value?.length)
            continue;
          if (Se.value?.length === 1) {
            const P = Se.value[0];
            c.material = P.name, P.thicknesses.includes(me({ v: c.t })) || (c.t = me({ v: P.thicknesses[0] })), hn(c, P);
          } else if (Se.value?.length > 1 && c.t) {
            const P = Se.value.find((O) => O.thicknesses.some((U) => me({ v: U }) === me({ v: c.t })));
            P ? (c.material = P.name, hn(c, P)) : (c.material = Se.value[0].name, c.t = me({ v: Se.value[0].thicknesses[0] }), hn(c, Se.value[0]));
          } else Se.value?.length > 1 ? (c.material = Se.value[0].name, c.t = me({ v: Se.value[0].thicknesses[0] }), hn(c, Se.value[0])) : !c.t && r.inputStock.value[0]?.t && (c.t = me({ v: r.inputStock.value[0].t }));
        }
      }
    }, Ao = async () => {
      if (ve("calculating"), Ze.value) return !1;
      Ze.value = !0, fn.value = !1, Is();
      const c = await Od({
        t: ke,
        partTrim: T.partTrim,
        maxShapes: T.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Te.pricing,
        finishPricing: Je.pricing,
        planingPricing: qe.pricing,
        findExtrasPrice: Me.findExtrasPrice,
        getShapeExtrasPricing: (O, U) => ut(O, U).pricing,
        extrasValidationRules: Fi.value,
        extrasLocationGroups: {
          banding: qt.groups,
          finish: vt.groups,
          planing: bt.groups
        },
        onLimit: () => {
          q({
            type: "error",
            message: ke("limits.max_parts") + " " + T.maxParts
          });
        }
      });
      if (pn.value)
        for (const O of r.inputShapes.value)
          Nn(O);
      const u = r.inputShapes.value.flatMap((O) => O.issues || []).filter((O) => O.type === "error" && O.category?.includes("part") && !O.category?.includes("extras"));
      if (u.length > 0) {
        q({
          type: "error",
          message: ke("errors.validation.inputs_issue", { 0: "part" }),
          additional: u.map((O) => O.message)
        }), ve("validation-error"), Ze.value = !1;
        return;
      }
      if (!c.valid) {
        ve("validation-error"), Ze.value = !1;
        return;
      }
      Cs(), r.inputShapes.value.forEach((O, U) => {
        O.createId(U);
      }), r.inputStock.value.forEach((O, U) => {
        O.createId(U);
      });
      const h = r.inputShapes.value.map((O) => M(O)).filter(Boolean);
      if (h.length !== r.inputShapes.value.length)
        return q({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), Ze.value = !1, !1;
      Io(h), B.value && ve("log", [
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((O) => ({ l: O.l, w: O.w })),
        "parts",
        h.map((O) => ({ l: O.l, w: O.w }))
      ]);
      const d = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: h.map((O) => O.toData()),
        inputStock: r.inputStock.value.map((O) => O.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Ft,
        extrasOptions: se(),
        source: "checkout",
        sourceVersion: "4.1.10"
      };
      if (wn.value?.enabled && wn.value?.rules?.length > 0) {
        const O = Td(
          wn.value.rules,
          r.inputShapes.value.map((U) => U.toData())
        );
        if (!O.valid) {
          for (const U of O.errors) {
            const we = U.partName ? `Part "${U.partName}"` : `Part ${U.partIndex + 1}`;
            q({
              type: "error",
              message: `${we}: ${U.message}`
            });
          }
          Ze.value = !1;
          return;
        }
      }
      ve("before-calculate", d);
      const P = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: d,
          error: null
        }
      });
      if (window.dispatchEvent(P), P.defaultPrevented) {
        P.detail.error && q({
          type: "error",
          message: P.detail.error
        }), Ze.value = !1;
        return;
      }
      await b.connect(), b.emit("calculate", d);
    }, Gi = (c, u) => {
      if (Ce(c, !1), !c || !u || !u?.[c] || !an(T, ["enable", c]))
        return;
      const h = [c, "pricing"];
      if (!Vs(u, h)) {
        ve("error", `${h.join(".")} not found in sent data`);
        return;
      }
      const d = an(u, h);
      if (typeof d != "object") {
        ve("error", `${h.join(".")} data must be an object`);
        return;
      }
      if (!Bs(d)) {
        ve("error", `if provided, ${h.join(".")} data must contain some values`);
        return;
      }
      const P = Object.keys(d), O = Object.values(d);
      if (!P.length) {
        ve("error", `no ${h.join(".")} pricing found`);
        return;
      }
      const U = /,/;
      for (const Ae of P)
        if (U.test(Ae)) {
          ve("error", `${h} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (O.some((Ae) => isNaN(Ae))) {
        ve("error", `${h} values must be a number`);
        return;
      }
      const we = Ps(d), oe = [c, "labels"];
      let he = [];
      if (Vs(u, oe))
        he = an(u, oe);
      else {
        ve("error", `${oe.join(".")} not found`);
        return;
      }
      if (!he) {
        ve("error", `${oe.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(he)) {
        ve("error", `${oe.join(".")} data must be an array`);
        return;
      }
      if (!he?.length) {
        ve("error", `if provided, ${oe.join(".")} data must contain values`);
        return;
      }
      if (he.length !== we) {
        ve("error", `${oe.join(".")} length (${he.length}) must match the number of levels in ${h.join(".")} (${we})`);
        return;
      }
      const je = an(u, [c, "displayNames"]) || void 0;
      switch (c) {
        case "banding": {
          Te.labels = he, Te.pricing = d;
          const Ae = si(d);
          Te.options = Ae, Y("banding", Ae, he, d, je);
          break;
        }
        case "finish": {
          Je.labels = he, Je.pricing = d;
          const Ae = si(d);
          Je.options = Ae, Y("finish", Ae, he, d, je);
          break;
        }
        case "planing": {
          qe.labels = he, qe.pricing = d;
          const Ae = si(d);
          qe.options = Ae, Y("planing", Ae, he, d, je);
          break;
        }
      }
      if (Xn.value = se(), Ce(c, !0), !!r.inputShapes.value?.length)
        for (const Ae of r.inputShapes.value)
          Ss(Ae, c);
    }, si = (c) => {
      const u = [], h = Object.keys(c), d = Ps(c);
      for (let P = d; P--; ) u.push(/* @__PURE__ */ new Set());
      for (const P of h)
        P.split("|").forEach((U, we) => u[we].add(U));
      for (let P = 0; P < d; P++)
        u[P] = Array.from(u[P]);
      return u;
    }, ai = (c, u) => {
      if (!u) return;
      c !== "info" && Object.keys(ot).forEach((d) => {
        d !== c && d !== "info" && (ot[d] = null);
      });
      const h = r.inputShapes.value.indexOf(u);
      if (ot[c] === h)
        be.value = null, ot[c] = null, xo.value[c] = void 0;
      else if (be.value = u, ot[c] = h, c !== "info") {
        const d = ut(u, c);
        d.options.length && Y(
          c,
          d.options,
          d.labels,
          d.pricing
        );
      }
    }, As = (c) => {
      B.value && ve("log", ["load event received"]), mt.value && Oo(c.detail);
    }, Oo = (c) => {
      if (B.value && ve("log", ["loading parts..."]), !c || !c?.inputs?.parts?.length) {
        B.value && ve("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let u = 0;
      for (const d of c.inputs.parts) {
        const P = ii(d);
        P ? P.issues?.length && B.value && ve("log", [`SmartCut - issues found while importing part at index ${u}`, P.issues]) : B.value && ve("log", [`SmartCut - error loading part at index ${u}`, d]), u++;
      }
      r.inputShapes.value.flatMap((d) => ls(d.issues)).length && q({
        type: "error",
        message: ke("errors.general.issues_found")
      }), B.value && ve("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, Lo = (c) => {
      r.inputShapes.value.length = 0, ht(() => {
        for (const u of c)
          u.t = r.inputStock.value?.[0]?.t ?? null, te.stockType === "linear" && Ne.value.length === 1 && !u.w && (u.w = Ne.value[0]), ii(u);
      });
    };
    Ue(() => Me.inputStock, (c) => {
      if (Cs(), Array.isArray(c) || console.warn("SmartCut - stock must be passed as an array"), !c?.length) return;
      r.inputStock.value.length = 0;
      const u = c.map((h) => h.toData());
      po(u);
      for (const h of c)
        V({
          ...h.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", h), q({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (r.inputStock.value.length) {
        r.inputShapes.value.length || Me.inputType !== "formula" && ht(() => {
          r.inputShapes.value.length || Di();
        });
        const h = p(r.inputSaw.value);
        h.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(h))), q({
          type: "error",
          message: ke("errors.validation.stock_issue"),
          additional: h.map((d) => d.message)
        }));
      }
    }, { immediate: !0 }), Ue(r.inputShapes, (c) => {
      ve("inputs-changed"), c.forEach((u) => {
        te.stockType === "linear" && Ne.value.length && (!u.w || !Ne.value.includes(me({ v: u.w }))) && (u.w = Ne.value[0]);
        const h = Se.value.find((d) => d.name === u.material);
        h && (h.thicknesses.includes(me({ v: u.t })) || (u.t = me({ v: h.thicknesses[0] })));
      });
    }, { deep: !0 }), Ue(() => ne.value.length, (c, u) => {
      if (gn.value) {
        if (c > u) {
          const h = Math.ceil(c / C.value);
          x.value < h && (x.value = h);
        } else if (c < u) {
          const h = Math.ceil(c / C.value);
          x.value > h && (x.value = Math.max(1, h));
        }
      }
    }), Ue(() => T.numberFormat, (c) => {
      y(c);
    }), Ue(r.inputStock, (c) => {
      te.stockType === "linear" && Mi(c.map((u) => u.toData()));
    }, { deep: !0 }), Ue(() => te, (c) => {
      r.inputSaw.value = new zt(c);
    }, { deep: !0 }), dn(async () => {
      if (Gt.value) return;
      Gt.value = !0;
      const c = new URL(window.location.href), u = c.searchParams.toString(), h = c.origin + c.pathname + (u ? `?${u}` : "");
      $t.value !== h && Ri(), $t.value = h, Lt.value = T.locale, await b.connect(), b.emit("getUserFromDomain"), window.addEventListener("smartcut/load", As);
    });
    const Fo = () => {
      b && b.disconnect();
    };
    return Jn(() => {
      window.removeEventListener("smartcut/load", As), Fo(), delete window.smartcutCheckout;
    }), e({
      init: Ve,
      clear: Ri,
      getAvailablePricingOptions: Bn,
      getExtrasPrice: ko,
      formatPrice: Me.formatPrice,
      findExtrasPrice: Me.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: Ss,
      createAndAddInputShape: ii,
      initMaterialsThicknesses: xs
    }), (c, u) => {
      const h = yn("FontAwesomeIcon");
      return L(), j("div", qf, [
        B.value || pe ? (L(), j("div", _f, [
          u[14] || (u[14] = H("div", { style: { "font-weight": "bold", color: "#ff0", "margin-bottom": "8px" } }, "EcommerceCalculator Debug", -1)),
          H("div", Uf, [
            H("strong", Wf, "inputs.inputStock (" + ue(A(r).inputStock.value.length) + " items):", 1),
            (L(!0), j(He, null, tt(A(r).inputStock.value, (d, P) => (L(), j("div", {
              key: P,
              style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
            }, [
              H("div", null, [
                u[6] || (u[6] = H("span", { style: { color: "#ff0" } }, "material:", -1)),
                Qe(" " + ue(d.material), 1)
              ]),
              H("div", null, [
                u[7] || (u[7] = H("span", { style: { color: "#ff0" } }, "db_id:", -1)),
                Qe(" " + ue(d.db_id || "(none)"), 1)
              ]),
              H("div", null, [
                u[8] || (u[8] = H("span", { style: { color: "#ff0" } }, "code:", -1)),
                Qe(" " + ue(d.code || "(none)"), 1)
              ]),
              H("div", null, [
                u[9] || (u[9] = H("span", { style: { color: "#ff0" } }, "l×w×t:", -1)),
                Qe(" " + ue(d.l) + " × " + ue(d.w) + " × " + ue(d.t), 1)
              ]),
              H("div", null, [
                u[10] || (u[10] = H("span", { style: { color: "#ff0" } }, "stockExtras:", -1)),
                Qe(" " + ue(JSON.stringify(d.customData?.stockExtras) || "(none)"), 1)
              ])
            ]))), 128))
          ]),
          H("div", zf, [
            H("strong", Hf, "materials dropdown (" + ue(Se.value.length) + "):", 1),
            (L(!0), j(He, null, tt(Se.value, (d, P) => (L(), j("div", {
              key: P,
              style: { margin: "2px 0", padding: "2px 4px", background: "#2a2a4e", "border-radius": "2px" }
            }, [
              H("span", Kf, ue(d.name), 1),
              Qe(" (t: " + ue(d.thicknesses?.join(", ")) + ") ", 1),
              d.db_id ? (L(), j("span", Zf, " db_id=" + ue(d.db_id), 1)) : ae("", !0),
              d.code ? (L(), j("span", Jf, " code=" + ue(d.code), 1)) : ae("", !0)
            ]))), 128))
          ]),
          H("div", Yf, [
            u[11] || (u[11] = H("strong", { style: { color: "#0ff" } }, "inputs.inputShapes stock refs:", -1)),
            (L(!0), j(He, null, tt(A(r).inputShapes.value, (d, P) => (L(), j("div", {
              key: P,
              style: { margin: "2px 0" }
            }, [
              H("span", Xf, ue(d.material || "?"), 1),
              Qe(" t=" + ue(d.t) + " ", 1),
              d.stock ? (L(), j("span", Qf, " stock=" + ue(JSON.stringify(d.stock)), 1)) : (L(), j("span", ep, " (no stock ref)"))
            ]))), 128))
          ]),
          H("div", tp, [
            u[12] || (u[12] = H("strong", { style: { color: "#0ff" } }, "localStorage 'inputs/inputStock':", -1)),
            H("pre", np, ue(X.value), 1)
          ]),
          H("div", ip, [
            u[13] || (u[13] = H("strong", { style: { color: "#0ff" } }, "localStorage 'stock-filter-selections':", -1)),
            H("pre", sp, ue(le.value), 1)
          ])
        ])) : ae("", !0),
        mt.value ? ae("", !0) : (L(), Ie(ra, {
          key: 1,
          size: 50,
          "show-number": !1
        })),
        be.value?.machining && et.value ? (L(), Ie(A(s), {
          key: 2,
          "input-shape": be.value,
          "onUpdate:inputShape": u[0] || (u[0] = (d) => be.value = d),
          translate: !0,
          options: dt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": A(Wi),
          "get-available-pricing-options": Bn,
          "format-price": t.formatPrice,
          onClose: lo
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : ae("", !0),
        mt.value ? (L(), j("section", {
          key: 3,
          id: "smartcut-checkout",
          class: We(["smartcut-content", { fullscreen: ce.value }]),
          style: yt(xe.value)
        }, [
          xt.value && !t.readonly ? (L(), j("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: u[1] || (u[1] = (d) => vo())
          }, [
            De(h, { icon: ["fass", "expand"] }),
            Qe(" " + ue(A(ke)("general.full_screen")), 1)
          ])) : ae("", !0),
          ct.value ? (L(), j("a", {
            key: 1,
            id: "credit",
            style: ye,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, ue(A(_l)(A(ke)("general.powered_by"))), 1)) : ae("", !0),
          H("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: yt({ "grid-template-columns": $i.value })
          }, [
            A(r).inputShapes.value.length ? (L(), j("div", ap, [
              u[15] || (u[15] = H("div", { class: "cell id" }, null, -1)),
              (L(!0), j(He, null, tt(Pn.value, (d) => (L(), j("div", {
                key: d.name,
                class: We(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(d.name) || d.type === "boolean" }])
              }, ue(A(ke)(d.label)), 3))), 128)),
              A(Ke) === "development" && as ? (L(), j("div", op, " Info ")) : ae("", !0),
              u[16] || (u[16] = H("div", { class: "cell del" }, null, -1))
            ])) : ae("", !0),
            (L(!0), j(He, null, tt(Ei.value, (d, P) => (L(), j("div", {
              key: d.autoId,
              class: "row inputs"
            }, [
              H("div", lp, [
                H("div", {
                  class: "id",
                  style: yt({
                    background: T.colors.partA,
                    color: T.colors.text
                  })
                }, ue(ei.value + P + 1), 5)
              ]),
              (L(!0), j(He, null, tt(Pn.value, (O) => (L(), j("div", {
                key: O.name,
                class: "cell"
              }, [
                d ? (L(), Ie(jf, {
                  key: 0,
                  field: O,
                  item: d,
                  index: P,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": T.numberFormat,
                  "orientation-model": T.orientationModel,
                  "stock-grain": A(m)(d),
                  "material-options": Se.value?.map((U) => ({ label: U.name, value: U.name })) || [],
                  "thickness-options": O.name === "t" ? ho(d) : [],
                  "width-options": O.name === "w" && te.stockType === "linear" ? mo(d) : [],
                  "banding-enabled": ot.banding === P ? d : null,
                  "full-stock-disabled": d.fullStock && !["material", "t", "q", "fullStock"].includes(O.name),
                  "material-extras-disabled": fo(d, d.material),
                  onUpdate: (U) => St(d, O.propertyPath || O.fieldMap || O.name, U),
                  onValidation: u[2] || (u[2] = (U, we) => Mn()),
                  onBlur: () => Pt(d, O.name),
                  onOpenBanding: (U) => ai("banding", d),
                  onOpenMachining: (U) => oo(d),
                  onOpenFinish: (U) => ai("finish", d),
                  onOpenPlaning: (U) => ai("planing", d),
                  onOpenImageUpload: (U) => Co(P)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ae("", !0)
              ]))), 128)),
              A(Ke) === "development" && as ? (L(), j("div", rp, [
                H("button", {
                  class: We(["c-btn", { selected: ot.info === P }]),
                  type: "button",
                  onClick: (O) => ai("info", d)
                }, " i ", 10, cp)
              ])) : ae("", !0),
              H("div", up, [
                H("button", {
                  disabled: A(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${A(ke)("actions.remove")} ${A(Zi)(A(ke)("woodwork.part"))}`,
                  onClick: (O) => A(F)(d.autoId)
                }, [
                  De(h, { icon: ["fass", "trash"] })
                ], 8, dp)
              ]),
              De(A(i), {
                item: d,
                "num-columns": Qt.value
              }, null, 8, ["item", "num-columns"]),
              ot.banding === P && Ni(d, "banding").length > 0 && Bi.value ? (L(), Ie(ts, {
                key: "banding-" + (d?.material || ""),
                shape: d,
                "shape-index": P,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Te.keys,
                "all-options": ut(d, "banding").options,
                pricing: ut(d, "banding").pricing,
                labels: ut(d, "banding").labels,
                locations: qt.locations,
                "location-groups": qt.groups,
                "user-friendly-field-map": A(zi),
                "part-columns": Qt.value,
                "format-price": t.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": Vi,
                "orientation-model": T.orientationModel,
                "stock-grain": A(m)(d),
                "get-available-pricing-options": Bn,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              ot.finish === P && Ni(d, "finish").length > 0 && Bi.value ? (L(), Ie(ts, {
                key: "finish-" + (d?.material || ""),
                shape: d,
                "shape-index": P,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Je.keys,
                "all-options": ut(d, "finish").options,
                pricing: ut(d, "finish").pricing,
                labels: ut(d, "finish").labels,
                locations: vt.locations,
                "location-groups": vt.groups,
                "user-friendly-field-map": A(zi),
                "part-columns": Qt.value,
                "format-price": t.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": Vi,
                "orientation-model": T.orientationModel,
                "stock-grain": A(m)(d),
                "get-available-pricing-options": Bn,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              ot.planing === P && Ni(d, "planing").length > 0 && Bi.value ? (L(), Ie(ts, {
                key: "planing-" + (d?.material || ""),
                shape: d,
                "shape-index": P,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": qe.keys,
                "all-options": ut(d, "planing").options,
                pricing: ut(d, "planing").pricing,
                labels: ut(d, "planing").labels,
                locations: bt.locations,
                "location-groups": bt.groups,
                "user-friendly-field-map": A(zi),
                "part-columns": Qt.value,
                "format-price": t.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": Vi,
                "orientation-model": T.orientationModel,
                "stock-grain": A(m)(d),
                "get-available-pricing-options": Bn,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              ot.info === P ? (L(), j("div", {
                key: 4,
                id: "shape-info",
                style: yt({ "grid-column-end": "span " + Qt.value })
              }, [
                H("div", null, ue(d?.banding), 1),
                H("div", null, ue(Xn.value?.banding?.options || "No options"), 1)
              ], 4)) : ae("", !0),
              Et.value === P ? (L(), Ie(A(l), {
                key: 5,
                prefix: (P + 1).toString(),
                "unique-id": d.autoId,
                "shape-id": d.autoId,
                style: yt({ "grid-column-end": "span " + Qt.value }),
                images: at.value,
                onUpdate: So,
                onRemove: Po
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : ae("", !0)
            ]))), 128))
          ], 4),
          H("div", fp, [
            t.readonly ? ae("", !0) : (L(), j("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${A(ke)("actions.add")} ${A(Zi)(A(ke)("woodwork.part"))}`,
              onClick: u[3] || (u[3] = (d) => Di())
            }, [
              De(h, { icon: ["fass", "plus-large"] }),
              Qe(" " + ue(`${A(ke)("actions.add")} ${A(Zi)(A(ke)("woodwork.part"))}`), 1)
            ], 8, pp)),
            H("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": A(ke)("actions.calculate"),
              disabled: !A(r).inputStock.value?.length || Ze.value,
              onClick: u[4] || (u[4] = (d) => Ao())
            }, [
              De(h, { icon: ["fass", "calculator"] }),
              Qe(ue(A(ke)("actions.calculate")), 1)
            ], 8, gp),
            t.readonly ? ae("", !0) : (L(), j("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": A(ke)("actions.clear"),
              onClick: u[5] || (u[5] = (d) => Ri())
            }, [
              De(h, { icon: ["fass", "trash"] })
            ], 8, hp)),
            H("div", mp, ue(A(g)) + ue(T?.maxParts ? "/" + T.maxParts : ""), 1)
          ]),
          gn.value && _t.value > 1 ? (L(), j("div", vp, [
            H("div", bp, [
              H("button", {
                type: "button",
                class: "c-btn",
                disabled: x.value === 1,
                onClick: Ti
              }, [
                De(h, { icon: ["fass", "chevrons-left"] })
              ], 8, yp),
              H("button", {
                type: "button",
                class: "c-btn",
                disabled: x.value === 1,
                onClick: f
              }, [
                De(h, { icon: ["fass", "chevron-left"] })
              ], 8, wp),
              H("span", kp, ue(x.value) + " / " + ue(_t.value), 1),
              H("button", {
                type: "button",
                class: "c-btn",
                disabled: x.value >= _t.value,
                onClick: S
              }, [
                De(h, { icon: ["fass", "chevron-right"] })
              ], 8, xp),
              H("button", {
                type: "button",
                class: "c-btn",
                disabled: x.value >= _t.value,
                onClick: G
              }, [
                De(h, { icon: ["fass", "chevrons-right"] })
              ], 8, Sp)
            ])
          ])) : ae("", !0),
          Xt.value && !t.readonly ? (L(), Ie(A(a), {
            key: 3,
            ref: "import",
            "number-format": T.numberFormat,
            "custom-fields": xn.value,
            "banding-options": Te.options,
            "banding-labels": Te.labels,
            "finish-options": Je.options,
            "finish-labels": Je.labels,
            onImport: Lo
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : ae("", !0),
          Le.value ? (L(), j("div", Pp, [
            it.value ? (L(), j("div", Cp, ue(it.value), 1)) : ae("", !0),
            H("pre", Ip, ue(Tt.value), 1)
          ])) : ae("", !0),
          (T.enable.diagram ? Ze.value && !A(ge).complete : Ze.value || A(ge).complete) ? (L(), j("div", Ap, [
            De(ra, {
              size: 50,
              number: A(ge).shapeCount,
              complete: A(ge).complete,
              "show-number": T.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ae("", !0),
          ms(H("div", Op, [
            A(ie)?.saw?.stockType !== "roll" ? (L(), j("div", Lp, ue(A(ie)?.stack?.number ? A(ie).stack.number : 1), 1)) : ae("", !0),
            De(zc, {
              "element-id": "diagram",
              "number-format": T.numberFormat,
              "decimal-places": T.decimalPlaces,
              colors: T.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [va, T.enable.diagram && A(ge).complete]
          ]),
          Qn.value && T.enable.diagram && A(ee).length > 1 && A(ge).complete ? (L(), Ie(id, {
            key: 6,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: A(re)
          }, null, 8, ["onShow"])) : ae("", !0),
          !Qn.value && T.enable.diagram && A(ee).length > 1 && A(ge).complete ? (L(), Ie(fd, {
            key: 7,
            ref: "stockNavigation",
            "active-stock-id": A(Q),
            "stock-list": A(ee),
            "primary-color": T.colors.stock?.replace("#", ""),
            "secondary-color": T.colors.partA?.replace("#", ""),
            onShowStock: A(re)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ae("", !0)
        ], 6)) : ae("", !0),
        A(Ke) === "development" && as ? (L(), j("div", Fp, [
          De(A(o), {
            data: [A(r)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          u[17] || (u[17] = H("div", null, "Result data", -1)),
          De(A(o), {
            data: [rt.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ae("", !0)
      ]);
    };
  }
}), Wp = /* @__PURE__ */ Yn($p, [["__scopeId", "data-v-704fe1b2"]]);
export {
  ts as E,
  bs as F,
  zc as _,
  fd as a,
  Un as b,
  Ta as c,
  Wp as d,
  Up as e,
  Sf as h,
  _p as m,
  Ma as u
};

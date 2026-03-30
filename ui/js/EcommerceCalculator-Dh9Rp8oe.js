import { r as Z, w as Ue, c as $, Y as pt, Z as lt, W as Vo, n as ht, K as $n, d as Xe, o as dn, G as ba, _ as Do, I as At, a as j, b as L, p as We, $ as Ro, M as Yn, f as K, j as Ie, u as A, e as ae, a0 as Pi, t as ue, z as Go, q as ya, x as yt, F as He, k as tt, D as jo, a1 as rn, y as Ci, A as qo, m as ys, B as _o, O as cs, g as De, l as bn, P as Uo, a2 as Ot, s as Qe, h as mn, J as Wo, U as zo, v as wa, V as Ho } from "./vendor-vue-DyIrsOEK.js";
import { be as Re, bf as on, aT as Ko, bb as Sa, bg as sn, bh as zn, bi as ka, bj as xa, bk as Pa, bl as Ii, bm as hn, bn as $s, bo as Zo, bp as Jo, bq as Yo, br as Ca, bs as Ia, bt as Ui, bu as Xo, bv as ri, bw as Ai, bx as Qo, ba as ci, I as ui, x as En, b9 as Ht, w as Tn, i as vn, H as Dt, aX as el, by as Es, bz as tl, b3 as Dn, bA as Rn, b6 as Gn, F as jn, bB as Ts, bC as Ms, bD as nl, m as Ns, A as il, _ as sl, aR as al, bE as ol, aQ as Aa, bF as ll, a8 as wi, bG as rl, bH as cl, aJ as ul, bI as dl, aK as fl, aM as pl, aO as gl, aN as hl, aL as On, c as me, v as ze, bJ as di, bK as ml, bL as Oa, bM as vl, f as Wt, bN as bl, bO as Bs, t as yl, e as en, y as wl, r as Wi, z as Sl, q as kl, bP as xl, bQ as us, b5 as Pl, bR as Cl, bS as Il, bT as Al, bU as Ol, bV as La, bW as Ll, bX as Fl, bY as zi, bZ as $l, b_ as El, b$ as Fa, c0 as $a, c1 as Tl, c2 as Ml, c3 as Nl, c4 as Bl, c5 as Vl, c6 as Dl, c7 as Rl, c8 as ds, c9 as Gl, ca as jl, cb as ql, cc as _l, cd as Ul, ce as cn, cf as Hi, cg as Wl, g as an, ch as Vs, ci as Ki, cj as zl, ck as Ds, o as Rs, b as Gs, u as Zi, s as Ji } from "./result.zod-IZEZ_DzE.js";
import { s as Yi, d as Hl, u as Kl, l as Xi, b as Zl } from "./i18n-DT7wACvc.js";
import { H as Hn, Z as fi, o as z, j as fe, t as _, i as v, q as js, I as Rt, J as Jl, n as de, k as Gt, u as _e, m as Pe, K as qs, L as pi, M as Yl, N as Xl, O as _s, Q as Ql, S as gi, T as Qi, U as es, V as ts, l as er, h as Oe, W as tr } from "./vendor-CFKbllLs.js";
import "./vendor-i18next-2OYl82kj.js";
import { f as nr, d as ir, l as Vt, e as fs, c as ps, i as Ye, r as Bt, g as Si, h as sr } from "./vendor-d3-DNaL3zcO.js";
import { a as ar } from "./vendor-lodash-B8VQpKjD.js";
import { o as or, f as lr, s as rr, a as cr } from "./vendor-floating-ui-DZfk4g77.js";
import { t as Se } from "./i18n-Ck7sLK64.js";
import { _ as Xn } from "./Launch-BfGLN3s_.js";
import { b as Kn } from "./environment-BeBZzWz6.js";
function Ea(t, e = "cc") {
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
const Ta = {
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
function ur(t) {
  return t !== 0 && t !== 1 && t !== 2 ? !1 : Ta[t].sidesLMatchShapeL;
}
function dr(t) {
  return t !== 0 && t !== 1 && t !== 2 ? [] : Ta[t].affectedExtraTypes;
}
function ki(t = 0, e, n = null, i = null, s = null) {
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
function fr(t, e, n = null, i = null, s = null) {
  if (!Re(n) || i === "shape") return !1;
  let a;
  return t === 0 || t === 1 || t === 2 ? ki(t, e, n, i, s) ? "cc" : !1 : a;
}
function pr(t, e = []) {
  if (!t?.length) return [];
  const n = t.map((i) => i && typeof i.getType == "function" ? i : Ko(i)).filter((i) => i instanceof Sa);
  return e.length && gr(n, e), n;
}
function gr(t = [], e = []) {
  t.length && e.length && t.forEach((n) => {
    n.shapeIds = n.shapeIds.filter((i) => e.find((s) => s.autoId === i));
  });
}
let un = null;
if (Kn())
  try {
    un = require("~/helpers/applicationSettings").applicationSettings;
  } catch (t) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", t);
  }
function qn(t, e, n = {}) {
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
  if (!Kn()) {
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
  if (Kn()) {
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
function Us(t) {
  try {
    return Kn() ? un ? un.getString(t) : null : typeof window < "u" && window.localStorage ? localStorage.getItem(t) : null;
  } catch (e) {
    return console.error(`[getStorageValue] Error getting storage value for key ${t}:`, e), null;
  }
}
function Ws(t) {
  try {
    Kn() ? un && un.remove(t) : typeof window < "u" && window.localStorage && localStorage.removeItem(t);
  } catch (e) {
    console.error(`[removeStorageValue] Error removing storage value for key ${t}:`, e);
  }
}
const Ma = "cle-extras-config", hr = () => {
  try {
    const t = localStorage.getItem(Ma);
    return t ? JSON.parse(t) : {};
  } catch {
    return {};
  }
}, mr = (t) => {
  try {
    localStorage.setItem(Ma, JSON.stringify(t));
  } catch {
  }
}, Zn = Z(hr()), gs = (t, e) => {
  Zn.value[t] = e, mr(Zn.value);
}, ln = (t) => Zn.value[t] || null, vr = () => Zn.value;
let zs = !1;
const br = () => {
  zs || (Qo({
    getExtrasConfig: ln,
    getAllExtrasConfigs: vr,
    setExtrasConfig: gs
  }), zs = !0);
}, yr = (t, e) => {
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
}, wr = (t) => {
  br();
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
  } = t, D = $(() => Vo(i) ? i.value : i), H = () => {
    const f = ln(n), x = D.value?.length ? D.value : f?.options || [], G = f?.labels || s;
    sn(e.value, n, x, G, l.value);
  };
  H(), Ue(
    () => e.value?.extras?.[n],
    (f) => {
      if (f) {
        const x = f?.sides || {}, G = f?.options?.sides || {};
        let B = !1;
        for (const [X, le] of Object.entries(x))
          if (typeof le == "string") {
            if (le.includes("|") && !G[X]) {
              B = !0;
              break;
            } else if (le !== "" && !G[X]) {
              B = !0;
              break;
            }
          }
        B && H();
      }
    },
    { immediate: !1 }
  );
  const Y = $(() => Zn.value[n] || null), se = $(() => {
    const f = D.value?.length ? D.value : Y.value?.options || [];
    if (f.length > 1)
      return "multiple";
    const G = (f[0] || []).filter((xe) => typeof xe == "string"), B = (l.value || []).filter((xe) => typeof xe == "string"), le = Array.from(/* @__PURE__ */ new Set([...G, ...B])).length;
    return le === 0 ? "boolean" : le === 1 ? "single" : "multiple";
  }), E = $(() => Ai(n)), N = $(() => m.value && m.value.length > 0 ? m.value.filter((f) => f !== "all" && f !== "faces" && f !== "sides") : E.value), ee = $(() => N.value.filter((f) => zn(f) === "face")), S = $(() => N.value.filter((f) => zn(f) === "side")), R = $(() => xa(n)), w = $(() => ka(n)), Q = $(() => Pa(n)), ie = () => Y.value?.options && Y.value.options.length > 1, re = (f, x, G) => {
    const { singleOption: B = Te(), operation: X } = G;
    switch (x) {
      case "boolean":
        return !!f;
      case "single":
        return B ? X === "process" || X === "set" ? f && B ? B : "" : f === B ? B : "" : !!f;
      case "multiple":
        return f || "";
      default:
        return f;
    }
  }, ge = (f, x, G) => re(x, G, { operation: "process" }), $e = (f, x, G, B, X, le) => {
    switch (le) {
      case "boolean":
        ri(f, x, G, B, !!X);
        break;
      case "single": {
        const xe = Te();
        ri(f, x, G, B, X ? xe : "");
        break;
      }
      case "multiple":
        ri(f, x, G, B, X || "");
        break;
    }
  }, q = (f, x, G = {}) => {
    const B = G.singleOption || Te();
    return G.allowCustomNames, re(f, x, {
      operation: "get",
      singleOption: B
    });
  }, ne = (f, x, G, B) => {
    switch (B) {
      case "boolean":
        return !!f;
      case "single": {
        const X = Te();
        if (X) {
          const le = x.map((ye) => hn(e.value, n, ye, G)), xe = le.every((ye) => ye === X || ye === !0), Fe = le.every((ye) => !ye || ye === "");
          return xe ? X : Fe ? "" : null;
        }
        return !!f;
      }
      case "multiple":
        return typeof f == "string" ? f : f || "";
      default:
        return f;
    }
  }, J = (f, x, G, B = !1) => {
    if (B)
      f.forEach((X) => et(X, x, G));
    else {
      const X = s[x] || "", le = ge(X, G, se.value);
      f.forEach((xe) => {
        $e(e.value, n, xe, X, le, se.value);
      });
    }
  }, pe = (f, x) => {
    if (ie()) {
      const G = s[x] || "", B = f.map((Fe) => {
        const ye = hn(e.value, n, Fe, G);
        return ye === !0 ? qe(x)[0] || "" : String(ye || "");
      }), X = B[0] || "";
      return B.every((Fe) => Fe === X) ? X : null;
    } else {
      const G = s[x] || "";
      if (se.value === "single") {
        const X = Te();
        if (X) {
          const le = f.map((ye) => hn(e.value, n, ye, G)), xe = le.every((ye) => ye === X || ye === !0), Fe = le.every((ye) => !ye || ye === "");
          return xe ? X : Fe ? "" : null;
        }
      }
      const B = $s(e.value, n, f, G, se.value);
      return se.value === "multiple" && B === !1 && f.every((le) => {
        const xe = hn(e.value, n, le, G, se.value);
        return xe === "" || xe === !1 || xe === null || xe === void 0;
      }) ? "" : B;
    }
  }, Me = (f) => {
    const { location: x, locationType: G = "single", optionIndex: B, stateValue: X, isAggregate: le = !1 } = f, xe = qe(B), Fe = xe.length > 1 ? "select" : "checkbox", ye = le ? Ne(B, x && ce(x) ? x : G) : Ne(B, x), ct = se.value === "multiple" && ye.length === 1 && r && B > 0;
    if (ct && ye[0]) {
      if (le) {
        let Pt = [];
        G === "all" ? Pt = N.value : G === "faces" ? Pt = ee.value : G === "sides" ? Pt = S.value : x && ce(x) && (Pt = k(x)), Pt.forEach((Bn) => {
          const ni = Ke(Bn, B);
          (!ni || ni !== ye[0]) && et(Bn, B, ye[0]);
        });
      } else if (x) {
        const Pt = Ke(x, B);
        (!Pt || Pt !== ye[0]) && et(x, B, ye[0]);
      }
    }
    const Ge = se.value === "multiple" && (ye.length === 0 || ct), Ve = X !== void 0 ? X : x ? Ke(x, B) : null, Ce = Fe === "select" ? dt(x || G, B) : void 0, Mt = Fe === "checkbox" && xe.length === 1 ? xe[0] : void 0;
    let xt, Nn;
    return Fe === "checkbox" && xe.length === 1 && (xt = xe[0], Nn = ""), {
      inputType: Fe,
      // Alias for backward compatibility
      type: Fe,
      value: Ve,
      options: Ce,
      disabled: Ge,
      label: Mt,
      indeterminate: Ve === null && Fe === "checkbox",
      trueValue: xt,
      falseValue: Nn
    };
  }, ve = (f, x, G) => Me({
    locationType: f,
    optionIndex: x,
    stateValue: G,
    isAggregate: !0
  }), et = (f, x, G) => {
    const B = s[x] || "";
    if (ie()) {
      const X = it(f, x);
      let le;
      if (X === "checkbox") {
        const Fe = qe(x)[0];
        le = G ? Fe : "";
      } else
        le = G || "";
      ri(e.value, n, f, B, le);
    } else
      $e(e.value, n, f, B, G, se.value);
  }, Ke = (f, x) => {
    const G = s[x] || "";
    if (ie()) {
      const B = hn(e.value, n, f, G);
      if (it(f, x) === "checkbox") {
        const xe = qe(x)[0];
        return B === !0 || B === xe ? xe : "";
      } else
        return B || "";
    } else {
      const B = hn(e.value, n, f, G, se.value);
      return q(B, se.value);
    }
  }, Lt = (f, x) => {
    J(N.value, f, x, ie());
  }, nt = (f) => {
    if (ie()) {
      const x = s[f] || "", G = N.value.map((le) => {
        const xe = hn(e.value, n, le, x);
        return xe === !0 ? qe(f)[0] || "" : String(xe || "");
      }), B = G[0] || "";
      return G.every((le) => le === B) ? B : null;
    } else {
      const x = s[f] || "", G = $s(e.value, n, N.value, x, se.value);
      return ne(G, N.value, x, se.value);
    }
  }, Ft = () => {
    Ui(e.value, n, N.value, se.value), lt(e);
  }, St = (f) => f === "faces" ? {
    locations: ee.value,
    isSupported: R.value
  } : {
    locations: S.value,
    isSupported: w.value
  }, Yt = (f, x, G) => {
    const { locations: B, isSupported: X } = St(f);
    X && J(B, x, G, ie());
  }, $t = (f, x) => {
    const { locations: G, isSupported: B } = St(f);
    return B ? pe(G, x) : null;
  }, at = (f) => {
    const { locations: x, isSupported: G } = St(f);
    G && (Ui(e.value, n, x, se.value), lt(e));
  }, Et = (f, x) => {
    const { isSupported: G } = St(f);
    if (!G) return { type: "checkbox", value: !1 };
    const B = $t(f, x);
    return ve(f, x, B);
  }, rt = (f, x) => {
    Yt("faces", f, x);
  }, jt = (f, x) => {
    Yt("sides", f, x);
  }, mt = (f) => $t("faces", f), Ze = (f) => $t("sides", f), fn = () => {
    at("faces");
  }, Xt = () => {
    at("sides");
  }, kt = (f) => y.value.find((x) => x.id === f), ce = (f) => ["all", "faces", "sides"].includes(f) ? !1 : !f.includes("."), k = (f) => {
    const x = kt(f);
    return x ? x.locations.filter((G) => N.value.includes(G)) : [];
  }, C = (f, x, G) => {
    const B = k(f);
    B.length !== 0 && (B.forEach((X) => et(X, x, G)), lt(e));
  }, b = (f, x) => {
    const G = k(f);
    if (G.length === 0) return null;
    const B = pe(G, x);
    return !ie() && (B === null || B === !1 || B === "") ? "" : B;
  }, W = (f) => {
    const x = k(f);
    x.length !== 0 && (Ui(e.value, n, x, se.value), lt(e));
  }, T = (f, x) => {
    const G = b(f, x), B = kt(f);
    return Me({
      location: f,
      optionIndex: x,
      stateValue: G,
      isAggregate: !0,
      customLabel: B?.label
    });
  }, te = (f) => {
    Xo(e.value, n, f, se.value), lt(e);
  }, be = (f) => f === "all" ? N.value.some((x) => !!Ke(x, 0)) : f === "faces" && R.value ? ee.value.some((x) => !!Ke(x, 0)) : f === "sides" && w.value ? S.value.some((x) => !!Ke(x, 0)) : ce(f) ? k(f).some((G) => !!Ke(G, 0)) : N.value.includes(f) ? !!Ke(f, 0) : !1, Le = (f) => {
    if (f === "all") return Se("general.all");
    if (f === "faces") return `${Se("general.all")} ${Se("machining.face_other")}`;
    if (f === "sides") return `${Se("general.all")} ${Se("woodwork.edge_other")}`;
    if (ce(f)) {
      const B = kt(f);
      if (B) return B.label;
    }
    if (f.startsWith("face.")) {
      const X = `faces.${f.replace("face.", "")}`;
      return Se(X);
    }
    if (f.startsWith("side.")) {
      let B = f.replace("side.", "");
      (p === 1 || p === 2) && e.value && e.value.w > e.value.l && (B = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[B] || B);
      const X = `sides.${B}`;
      return Se(X);
    }
    const x = `fields.${f}`, G = Se(x);
    return G !== x ? G : a?.[f] ? a[f] : f;
  }, it = (f, x) => se.value === "boolean" ? "checkbox" : qe(x).length > 1 ? "select" : "checkbox", Tt = (f, x) => Me({
    location: f,
    optionIndex: x,
    isAggregate: !1
  }), ot = (f) => {
    const x = nt(f);
    return ve("all", f, x);
  }, ke = (f) => Et("faces", f), Ee = (f) => Et("sides", f), qt = (f, x) => f === "all" ? ot(x) : f === "faces" ? ke(x) : f === "sides" ? Ee(x) : ce(f) ? T(f, x) : Tt(f, x), Ne = (f, x) => {
    const G = ln(n), X = (D.value?.length ? D.value : G?.options || [])[f];
    if (!X || X[0] === !0)
      return [];
    const le = x && typeof x == "string" && (x.startsWith("face.") || x.startsWith("side.")), xe = x && typeof x == "string" && ce(x), Fe = !le && (x === "all" || x === "faces" || x === "sides" || xe);
    if (Array.isArray(X) && X.length === 1 && typeof X[0] == "string" && !(r && F && (le || Fe) && f > 0))
      return X;
    if (r && F && le) {
      const Ge = [];
      if (f > 0)
        for (let Ve = 0; Ve < f; Ve++) {
          const Ce = Ke(x, Ve);
          if (typeof Ce == "string" && Ce)
            Ge.push(Ce);
          else if (typeof Ce == "boolean")
            Ge.push(Ce);
          else {
            const Mt = ln(n), xt = Ii(e.value, n, x);
            return xt && typeof xt == "object" && !Array.isArray(xt) && Object.keys(xt).length > 1 && Mt?.options[f] ? Mt.options[f] : [];
          }
        }
      return F(g, Ge, f);
    }
    if (r && F && Fe) {
      const Ge = [];
      if (f > 0)
        for (let Ve = 0; Ve < f; Ve++) {
          let Ce;
          if (x === "all" ? Ce = nt(Ve) : x === "faces" ? Ce = mt(Ve) : x === "sides" ? Ce = Ze(Ve) : xe && typeof x == "string" && (Ce = b(x, Ve)), typeof Ce == "string" && Ce)
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
  }, dt = (f, x) => {
    const G = ln(n), X = (D.value?.length ? D.value : G?.options)?.[x] || [], le = o && l.value ? l.value.filter((Ve) => typeof Ve == "string") : [], xe = [.../* @__PURE__ */ new Set([...X, ...le])], Fe = Ne(x, f), ye = new Set(Fe), ct = G?.displayNames;
    return xe.map((Ve) => ({
      value: Ve,
      label: ct?.[Ve] || Ve,
      disabled: !ye.has(Ve)
    }));
  }, Te = () => {
    const f = Ne(0);
    return f.length === 1 ? f[0] : void 0;
  }, Je = (f) => {
    const x = Ne(f);
    return x.length === 1 ? x[0] : void 0;
  }, qe = (f) => {
    const x = ln(n), G = D.value?.length ? D.value : x?.options;
    let B = [];
    if (G && G[f] && Array.isArray(G[f])) {
      const le = G[f];
      Array.isArray(le) && le.every((xe) => typeof xe == "string") && (B = le);
    }
    const X = o && l.value ? l.value.filter((le) => typeof le == "string") : [];
    return [.../* @__PURE__ */ new Set([...B, ...X])];
  }, Qn = (f, x = 0) => {
    if (f === "all" || f === "faces" || f === "sides")
      return "";
    if (ce(f)) {
      const B = kt(f);
      return B?.price !== void 0 && b(f, x) ? M ? M(B.price) : B.price.toString() : "";
    }
    if (!r || !I)
      return "";
    if (!N.value.includes(f))
      return "N/A";
    const G = I(e.value, n, f, V);
    return G ? M ? M(G) : G.toString() : "N/A";
  }, _t = (f) => !r || !I ? !1 : I(e.value, n, f, V), vt = $(() => N.value.length > 1), bt = $(() => E.value.length > 1), pn = () => {
    if (m.value && m.value.length > 0) {
      const B = [];
      return y.value && y.value.length > 0 && y.value.forEach((X) => B.push(X.id)), B.push(...m.value), B;
    }
    const f = [];
    y.value && y.value.length > 0 && y.value.forEach((B) => f.push(B.id)), vt.value && f.push("all"), bt.value && (Ca(n).length > 0 && f.push("faces"), Ia(n).length > 0 && f.push("sides"));
    const x = /* @__PURE__ */ new Set();
    y.value && y.value.length > 0 && y.value.forEach((B) => {
      B.hideIndividualLocations && B.locations.forEach((X) => x.add(X));
    });
    const G = E.value.filter((B) => !x.has(B));
    return f.push(...G), f;
  }, yn = () => se.value === "multiple", Ei = () => {
    const f = 1 + D.value.length, x = se.value === "multiple", G = r, B = f + (x ? 1 : 0) + (G ? 1 : 0);
    return {
      columns: B,
      style: `repeat(${B}, max-content)`
    };
  }, wn = (f) => f === "all" ? "all" : f === "faces" ? "faces" : f === "sides" ? "sides" : "individual", Sn = (f) => zn(f), kn = (f) => {
    if (f === "all")
      return vt.value;
    if (ce(f))
      return kt(f) ? k(f).length > 0 : !1;
    if (m.value && m.value.length > 0)
      return m.value.includes(f);
    const x = wn(f);
    return x === "all" ? vt.value : x === "faces" || x === "sides" ? x === "faces" && R.value && ee.value.length > 0 || x === "sides" && w.value && S.value.length > 0 ? bt.value : !1 : E.value.includes(f);
  }, xn = (f) => {
    Yo(f, n, l);
  }, Qt = (f) => {
    Jo([e.value], n, f, s);
  }, Ti = (f) => {
    Zo([e.value], n, f);
  }, gn = (f, x, G) => {
    if (f === "all")
      Lt(x, G);
    else if (f === "faces")
      rt(x, G);
    else if (f === "sides")
      jt(x, G);
    else if (ce(f)) {
      let X = G;
      if (!ie() && typeof G == "boolean") {
        const le = qe(x);
        le.length === 1 && (X = G ? le[0] : "");
      }
      if (!ie() && X) {
        const le = k(f), xe = new Set(le);
        y.value && (y.value.forEach((Fe) => {
          Fe.id !== f && k(Fe.id).filter((Ge) => !xe.has(Ge)).forEach((Ge) => {
            et(Ge, x, "");
          });
        }), lt(e));
      }
      C(f, x, X);
    } else
      et(f, x, G), ie() || lt(e);
    const B = s.length;
    for (let X = x + 1; X < B; X++) {
      let le;
      if (f === "all" ? le = nt(X) : f === "faces" ? le = mt(X) : f === "sides" ? le = Ze(X) : ce(f) ? le = b(f, X) : le = Ke(f, X), !le)
        continue;
      const xe = Ne(X, f);
      let Fe = !1;
      if (typeof le == "string" ? Fe = xe.includes(le) : typeof le == "boolean" && le === !0 && (Fe = xe.length > 0), !Fe) {
        const ye = it(f, X) === "checkbox" ? !1 : "";
        f === "all" ? Lt(X, ye) : f === "faces" ? rt(X, ye) : f === "sides" ? jt(X, ye) : ce(f) ? C(f, X, ye) : et(f, X, ye);
      }
    }
  }, ei = (f, x = !0) => x && !confirm(`Delete ${n} for ${Le(f)}?`) ? !1 : (f === "all" ? Ft() : f === "faces" ? fn() : f === "sides" ? Xt() : ce(f) ? W(f) : te(f), !0), Ut = () => {
    const f = e.value[n], x = e.value[`${n}Options`];
    return !(!f || typeof f != "object" || !x || typeof x != "object" || R.value && (!("faces" in f) || !("faces" in x)) || w.value && (!("sides" in f) || !("sides" in x)));
  }, Mi = () => {
    const f = [], x = e.value[n], G = e.value[`${n}Options`];
    return !x || typeof x != "object" ? f.push(`Missing or invalid ${n} property in shape`) : (R.value && !("faces" in x) && f.push(`Missing faces property in ${n}`), w.value && !("sides" in x) && f.push(`Missing sides property in ${n}`)), !G || typeof G != "object" ? f.push(`Missing or invalid ${n}Options property in shape`) : (R.value && !("faces" in G) && f.push(`Missing faces property in ${n}Options`), w.value && !("sides" in G) && f.push(`Missing sides property in ${n}Options`)), f;
  }, ti = (f) => {
    const x = [];
    if (!f || !Object.keys(f).length)
      return { valid: !0, errors: x };
    const G = Object.keys(f), B = Math.max(...G.map((X) => X.split("|").length));
    if (B <= 1)
      return { valid: !0, errors: x };
    for (const X of N.value) {
      let le;
      if (ie()) {
        const ye = Ii(e.value, n, X);
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
          const Ve = B - Fe, Ce = xe.filter((xt) => xt.trim() !== "").join(", "), Mt = Le(X);
          x.push(`${n} selection incomplete for ${Mt}. Selected: "${Ce}" but ${Ve} more level${Ve > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: x.length === 0, errors: x };
  }, Pn = (f) => ti(f).errors, Ni = $(() => pn().map((f) => ({
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
    sideLocations: pt(S),
    shouldShowAll: vt,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: pt(bt),
    renderLocations: pt(Ni),
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
    setAllSides: jt,
    getAllFaces: mt,
    getAllSides: Ze,
    deleteAllFaces: fn,
    deleteAllSides: Xt,
    // UI helpers
    getLocationLabel: Le,
    getInputType: it,
    getInputConfig: Tt,
    getAllInputConfig: ot,
    getAllFacesInputConfig: ke,
    getAllSidesInputConfig: Ee,
    getInputConfigForLocation: qt,
    getSelectOptions: dt,
    getSingleOptionLabel: Je,
    // Pricing
    getPriceDisplay: Qn,
    getCalculatedPrice: _t,
    // Layout & rendering
    getRenderLocations: pn,
    shouldShowDeleteButton: yn,
    getGridConfig: Ei,
    getLocationGroup: wn,
    getLocationScope: Sn,
    isLocationVisible: kn,
    // Options management
    getAvailableOptions: Ne,
    getSingleAvailableOption: Te,
    // Initialization & migration
    initialize: H,
    initializeExtra: H,
    // Alias for backward compatibility
    initializeCustomNames: xn,
    migrateToSingle: Qt,
    migrateToBoolean: Ti,
    // Event handlers
    handleInputChange: gn,
    handleDelete: ei,
    // Validation
    validateShape: Ut,
    getValidationErrors: Mi,
    validateIncompleteSelections: ti,
    getIncompleteSelectionErrors: Pn,
    // Debug helpers (development only)
    getDebugInfo: (f, x) => ({
      mode: se.value,
      location: f,
      optionIndex: x,
      value: N.value.includes(f) ? Ke(f, x) : "N/A",
      inputType: it(f, x),
      canDelete: be(f),
      allState: nt(x),
      availableOptions: Ne(x),
      locationGroup: wn(f),
      config: Y.value,
      supportsFaces: R.value,
      supportsSides: w.value,
      supportsBoth: Q.value,
      ...R.value && {
        allFacesState: mt(x)
      },
      ...w.value && {
        allSidesState: Ze(x)
      },
      ...N.value.includes(f) && {
        locationScope: Sn(f)
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
}, kr = (t) => {
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
    const ee = [], S = /* @__PURE__ */ new Set();
    if (l.value && l.value.length > 0 && l.value.forEach((w) => {
      w.hideIndividualLocations && w.locations.forEach((Q) => S.add(Q));
    }), l.value && l.value.length > 0 && l.value.forEach((w) => ee.push(w.id)), a.value && ee.push("all"), o.value && o.value.length > 0)
      ee.push(...o.value.filter((w) => w !== "all" && !S.has(w)));
    else {
      const w = Ai(e), Q = Pa(e), ie = xa(e), re = ka(e);
      Q && ie && re && (Ca(e).length > 0 && ee.push("faces"), Ia(e).length > 0 && ee.push("sides")), ee.push(...w.filter(($e) => !S.has($e)));
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
  }), H = $(() => `1fr${s ? " max-content" : ""}`), Y = (ee, S) => `${e}-${ee}-${n[S]}-${S}-${i}`, se = (ee) => {
    const S = V(ee);
    return `Delete ${e} for ${S}`;
  }, E = (ee) => ({
    show: M(ee),
    enabled: I(ee),
    ariaLabel: se(ee)
  }), N = (ee, S) => m(ee, S);
  return {
    renderLocations: pt(D),
    gridStyle: pt(H),
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
function Na(t) {
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
function xr(t) {
  return t.map((e) => {
    const n = e.path.length > 0 ? e.path.join(".") : "root", i = Na(e), s = tl(e.message, i);
    return `[${n}] ${s}`;
  });
}
function _n(t, e) {
  const n = t.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    errors: n.success ? void 0 : n.error.issues
  };
}
function Pr(t = {}) {
  try {
    let e = function(k) {
      if (!k || typeof k != "object") return k;
      const C = { ...k };
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
    }, n = function(k, C) {
      if (!Array.isArray(k))
        return [];
      const b = [];
      for (let W = 0; W < k.length; W++) {
        const T = k[W], te = e(T);
        try {
          const be = {
            ...te,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          T.autoId && (be.autoId = T.autoId), delete be.issues, delete be.warnings;
          const Le = new ci(be, C);
          b.push(Le);
        } catch (be) {
          console.error(`Failed to create InputShape at index ${W}:`, be);
        }
      }
      return b;
    }, i = function(k, C) {
      if (!Array.isArray(k)) return [];
      const b = [];
      for (let W = 0; W < k.length; W++) {
        const T = k[W], te = e(T);
        try {
          const be = {
            ...te,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          T.autoId && (be.autoId = T.autoId);
          const Le = new ui(be, C);
          b.push(Le);
        } catch (be) {
          console.error(`Failed to create InputStock at index ${W}:`, be);
        }
      }
      return b;
    }, s = function(k) {
      const C = e(k), b = _n(En, C);
      if (b.success && b.data) {
        const W = {
          ...b.data,
          issues: [],
          warnings: []
        };
        return k?.autoId && (W.autoId = k.autoId), new Ht(W);
      } else
        return console.error("Failed to parse input saw:", b.errors), new Ht({});
    }, a = function(k, C) {
      return Array.isArray(k) ? C && C.length ? pr(k, C) : k.map((b) => new Sa(b)).filter(Boolean) : [];
    }, o = function(k = {}) {
      try {
        const W = { ...Hn(
          (te) => {
            if (typeof te != "object" || te === null) return te;
            const be = { ...te };
            for (const Le in be)
              be[Le] === null && delete be[Le];
            return be;
          },
          Tn
        ).parse(k), isNew: !0 }, T = new ci(W, ie);
        return T.createId(re.value.length), re.value.push(T), T;
      } catch (C) {
        return C instanceof fi && (console.error("Shape validation failed:", C.issues), H("part", "Invalid shape data", C.issues)), null;
      }
    }, l = function(k = {}) {
      try {
        const b = { ...vn.parse(k), isNew: !0 }, W = new ui(b, ie);
        return W.createId(ge.value.length), ge.value.push(W), W;
      } catch (C) {
        return C instanceof fi && (console.error("Stock validation failed:", C.issues), H("stock", "Invalid stock data", C.issues)), null;
      }
    }, r = function(k) {
      try {
        const C = k.toData(), b = Tn.parse(C);
        return new ci(b, ie);
      } catch (C) {
        return C instanceof fi && (console.error("Shape clone validation failed:", C.issues), H("part", "Invalid shape data during cloning", C.issues)), null;
      }
    }, g = function(k) {
      try {
        const C = k.toData(), b = vn.parse(C);
        return new ui(b, ie);
      } catch (C) {
        return C instanceof fi && (console.error("Stock clone validation failed:", C.issues), H("stock", "Invalid stock data during cloning", C.issues)), null;
      }
    }, m = function(k, C) {
      const b = re.value.findIndex((be) => be.autoId === k);
      if (b === -1) return !1;
      const W = re.value[b], T = { ...W.toData(), ...C }, te = _n(Tn, T);
      if (te.success && te.data) {
        if (W.update(te.data), !W.isNew) {
          const be = Object.keys(C);
          W.validate({ fields: be, index: b });
        }
        return !0;
      } else {
        const be = te.errors ? xr(te.errors) : [];
        console.error("Shape update validation failed:", be);
        const Le = te.errors?.[0];
        if (Le) {
          const it = Na(Le);
          new Dt({
            category: ["part"],
            message: Le.message,
            // This is the translation key from Zod error map
            params: it,
            issues: J.value
          });
        } else
          H("part", "Invalid shape update");
        return !1;
      }
    }, y = function(k, C) {
      const b = re.value.findIndex((T) => T.autoId === k);
      if (b === -1) return !1;
      const W = re.value[b];
      return W.validate({ fields: [C], index: b }), W.issues.length === 0;
    }, p = function(k, C) {
      const b = ge.value.find((te) => te.autoId === k);
      if (!b) return !1;
      const W = { ...b.toData(), ...C }, T = _n(vn, W);
      return T.success && T.data ? (b.update(T.data), b.isNew || D(), !0) : (console.error("Stock update validation failed:", T.errors), H("stock", "Invalid stock update", T.errors), !1);
    }, F = function(k, C) {
      const b = ge.value.findIndex((T) => T.autoId === k);
      if (b === -1) return !1;
      const W = ge.value[b];
      return W.validate({ fields: [C], index: b }), lt(ge), W.issues.length === 0;
    }, I = function(k) {
      if (re.value.length === 1) return !1;
      const C = re.value.findIndex((b) => b.autoId === k);
      return C === -1 ? !1 : (re.value.splice(C, 1), !0);
    }, V = function(k) {
      if (ge.value.length === 1) return !1;
      const C = ge.value.findIndex((b) => b.autoId === k);
      return C === -1 ? !1 : (ge.value.splice(C, 1), !0);
    }, M = function(k) {
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
            stockType: k?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: k
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
    }, D = function(k) {
      pe.value = !0;
      const C = [];
      try {
        ge.value.forEach((b) => b.issues.length = 0);
        for (let b = 0; b < ge.value.length; b++) {
          const T = ge.value[b].validate({ saw: k }, b);
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
    }, H = function(k, C, b) {
      new Dt({
        category: [k],
        message: C,
        issues: J.value
      }), b && console.log("Validation details:", b);
    }, Y = function() {
      J.value = [], re.value.forEach((k) => k.issues.length = 0), ge.value.forEach((k) => k.issues.length = 0);
    }, se = function(k = {}) {
      const C = [], b = [], W = k.inputShapesOverride ?? re.value;
      if (!W.length)
        return { shapeList: [], issues: [] };
      for (let T = 0; T < W.length; T++) {
        const te = W[T];
        if (!te.q) continue;
        te.createId(T), te.applyPartTrim(k.trim, k.stockType);
        const be = te.toShape();
        C.push(be), b.push(...be.issues);
      }
      return { shapeList: C, issues: b };
    }, E = function(k) {
      if (!ge.value.length)
        return { stockList: [], issues: [] };
      const C = [], b = [];
      for (let W = 0; W < ge.value.length; W++) {
        const T = ge.value[W];
        if (!T.q && !T.autoAdd) continue;
        T.createId(W), T.saw = k;
        const te = T.toStock();
        C.push(te), b.push(...te.issues);
      }
      return { stockList: C, issues: b };
    }, N = function(k, C = ie) {
      const b = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (k.saw) {
        const W = _n(En, e(k.saw));
        if (W.success && W.data) {
          const T = { ...W.data };
          k.saw?.autoId && (T.autoId = k.saw.autoId), $e.value = new Ht(T), b.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", W.errors), b.saw.failed = !0;
      }
      if (k.shapes) {
        const W = n(k.shapes, C);
        b.shapes.success = W.length, b.shapes.failed = k.shapes.length - W.length, re.value = W;
      }
      if (k.stock) {
        const W = i(k.stock, C);
        b.stock.success = W.length, b.stock.failed = k.stock.length - W.length, ge.value = W;
      }
      if (k.groups) {
        const W = a(k.groups);
        b.groups.success = W.length, b.groups.failed = k.groups.length - W.length, q.value = W;
      }
      return k.extrasOptions && (ne.value = { ...k.extrasOptions }), b;
    }, ee = function() {
      return {
        shapes: re.value.map((k) => k.toData()),
        stock: ge.value.map((k) => k.toData()),
        inputUserGroups: q.value.map((k) => k.toData()),
        extrasOptions: ne.value
      };
    }, S = function() {
      re.value = [], ge.value = [], q.value = [], Y();
    }, R = function(k) {
      const C = { ...$e.value.toData(), ...k }, b = _n(En, C);
      return b.success && b.data ? ($e.value.update(b.data), !0) : (console.error("InputSaw update validation failed:", b.errors), H("saw", "Invalid saw update", b.errors), !1);
    }, w = function() {
      $e.value = new Ht({});
    }, Q = function() {
      const k = $e.value.validate();
      return J.value = [...J.value.filter((C) => C.category?.[0] !== "saw"), ...k], k;
    };
    const { numberFormat: ie = "decimal" } = t, re = qn("inputs/inputShapes", [], {
      serializer: {
        read: (k) => {
          if (!k) {
            const W = "GlobalStore/inputShapes", T = Us(W);
            if (T)
              k = T, Ws(W);
            else return [];
          }
          let C;
          try {
            C = JSON.parse(k);
          } catch (W) {
            return console.error("Failed to parse input shapes JSON:", W), [];
          }
          return n(C, ie);
        },
        write: (k) => {
          const b = k.filter((T) => !T?.multiEdit).map((T) => T.toData());
          return JSON.stringify(b);
        }
      },
      listenToStorageChanges: !1
    }), ge = qn("inputs/inputStock", [], {
      serializer: {
        read: (k) => {
          if (!k) return [];
          let C;
          try {
            C = JSON.parse(k);
          } catch (W) {
            return console.error("  Failed to parse stock JSON:", W), [];
          }
          return i(C, ie);
        },
        write: (k) => {
          const b = k.filter((T) => !T?.multiEdit).map((T) => T.toData());
          return JSON.stringify(b);
        }
      },
      listenToStorageChanges: !1
    }), $e = qn("inputs/inputSaw", new Ht({}), {
      serializer: {
        read: (k) => {
          if (!k) {
            const b = Us("saw");
            if (b)
              k = b, Ws("saw");
            else return new Ht({});
          }
          try {
            const C = JSON.parse(k);
            return s(C);
          } catch (C) {
            return console.error("  Failed to parse saw JSON:", C), new Ht({});
          }
        },
        write: (k) => {
          if (!k)
            return JSON.stringify({});
          const C = k.toData();
          return JSON.stringify(C);
        }
      },
      listenToStorageChanges: !1
    }), q = qn("inputs/inputUserGroups", [], {
      serializer: {
        read: (k) => a(k ? JSON.parse(k) : []),
        write: (k) => JSON.stringify(k.map((C) => C.toData()))
      }
    }), ne = qn("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (k) => {
          if (!k) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(k);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (k) => JSON.stringify(k)
      }
    }), J = Z([]), pe = Z(!1);
    re.value.length === 0 && (re.value = [new ci({ isNew: !0 })]), ge.value.length === 0 && (ge.value = [new ui({ isNew: !0 })]);
    const Me = $(() => re.value.reduce((k, C) => {
      const b = Number(C?.q);
      return b && b > 0 && !C?.multiEdit ? k + b : k;
    }, 0)), ve = $(() => ge.value.reduce((k, C) => {
      const b = Number(C?.q);
      return b && b > 0 && !C?.multiEdit ? k + b : k;
    }, 0)), et = $(() => re.value.reduce((k, C) => C?.multiEdit ? k : k + 1, 0)), Ke = $(() => ge.value.reduce((k, C) => C?.multiEdit ? k : k + 1, 0)), Lt = $(() => J.value.length > 0), nt = () => [
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
    ], Ft = Z(null), St = Z(null), Yt = () => {
      Ft.value = null;
    }, $t = Y, at = (k = null) => {
      const C = k?.inputShapesOverride ?? re.value, b = M(k?.saw || void 0);
      if (C.length) {
        el(C, ge.value, k?.saw || $e.value);
        const W = C.flatMap((T) => T.issues);
        return [...b, ...W];
      }
      return b;
    }, Et = async (k, C = "decimal") => {
      const b = k?.inputSaw, W = k?.inputShapes, T = k?.inputStock, te = k?.inputUserGroups, be = N({
        saw: b,
        shapes: W,
        stock: T,
        groups: te
      }, C);
      return lt(re), lt(ge), await ht(), be;
    }, rt = (k, C = "decimal") => N({ shapes: k }, C).shapes.success > 0, jt = (k, C = "decimal") => N({ stock: k }, C).stock.success > 0, mt = (k, C, b, W, T) => {
      C[0]?.length > 0 && (ne.value[k] || (ne.value[k] = { options: [] }), ne.value[k].options = [...C[0]]), b && W && C.length > 0 ? gs(k, {
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
    }, fn = (k) => {
      if (!ge.value.length) return "n";
      const C = k.material, b = k.t, W = ge.value.filter((Le) => Le.material === C && Le.t === b);
      if (!W.length)
        return "n";
      let T = !1, te = !1, be = !1;
      for (const Le of W)
        Le.grain === "l" ? (T = !0, te = !0) : Le.grain === "w" && (T = !0, be = !0);
      return T ? te && be ? "y" : te ? "l" : be ? "w" : "n" : "n";
    }, Xt = (k) => {
      for (const C of re.value)
        Es(C, k);
      for (const C of ge.value)
        Es(C, k);
    };
    let kt = !1;
    return Ue(re, (k) => {
      kt || !k.length || ht(() => {
        const C = ["banding", "finish", "planing"], b = [];
        C.forEach((W) => {
          const T = /* @__PURE__ */ new Set();
          if (k.forEach((te) => {
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
                  gs(W, {
                    ...te,
                    options: [Tt, ...te.options.slice(1)]
                  });
                }
              }
            }
          }
        }), C.forEach((W) => {
          const T = yr(W, k);
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
        }, 500)), kt = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: ge,
        inputShapes: re,
        inputUserGroups: q,
        currentInputShape: Ft,
        selectedSaw: St,
        inputSaw: $e
      },
      // State
      inputShapes: re,
      inputStock: ge,
      inputUserGroups: q,
      inputSaw: $e,
      currentInputShape: Ft,
      selectedSaw: St,
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
      clear: S,
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
      importInputStock: jt,
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
let ns = null;
function Ba(t = { numberFormat: "decimal" }) {
  try {
    return ns || (ns = Pr(t)), ns;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
function Cr() {
  const t = Date.now(), e = Math.random().toString(36).substring(2, 15), n = Math.random().toString(36).substring(2, 15);
  return `${t.toString(36)}-${e}-${n}`;
}
const tn = Z([]), Ir = 6;
function Va() {
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
      id: Cr(),
      message: Yi(n),
      additional: s.length > 5 ? s.slice(0, 5).map((g) => Yi(g)).join("<br>") + "<br>..." : s.slice(0, 5).map((g) => Yi(g)).join("<br>"),
      type: i,
      persistent: a.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: o
    }, r = a.maxNotices ?? Ir;
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
class Hs {
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
    if (n && n instanceof Dn) {
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
        Rn.includes(y) && (a[y] = p);
    }
    if (i && typeof i == "object") {
      const m = this.migrateSideNames(i);
      for (const [y, p] of Object.entries(m))
        Rn.includes(y) && (o[y] = p);
    }
    if (s && typeof s == "object") {
      s.all && (l.sides.all = s.all);
      for (const [m, y] of Object.entries(s))
        m !== "all" && Rn.includes(m) && y && (l.sides[m] = y);
    }
    const r = new Dn(Object.keys(a).length > 0 ? { sides: a } : {}), g = Object.keys(o).length > 0 ? new Dn({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = r : Re(e) && (e.banding = r), g && "_banding" in e && (e._banding = g), Re(e) && s && (e.bandingOptions = l), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const n = e.finish, i = "_finish" in e ? e._finish : void 0, s = Re(e) ? e.finishOptions : void 0;
    if (!n && !i && !s || n && n instanceof Gn)
      return !1;
    const a = {}, o = {}, l = { faces: {} };
    if (n && typeof n == "object")
      for (const [m, y] of Object.entries(n))
        jn.includes(m) && (a[m] = y);
    if (i && typeof i == "object")
      for (const [m, y] of Object.entries(i))
        jn.includes(m) && (o[m] = y);
    if (s && typeof s == "object") {
      s.all && (l.faces.all = s.all);
      for (const [m, y] of Object.entries(s))
        m !== "all" && jn.includes(m) && y && (l.faces[m] = y);
    }
    const r = new Gn(Object.keys(a).length > 0 ? { faces: a } : {}), g = Object.keys(o).length > 0 ? new Gn({ faces: o }) : void 0;
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
      const s = Ts("banding");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Rn) {
          const o = `side.${a}`, l = Ii(e, "banding", o);
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
            r && (Ms(e, "banding", o, g), n = !0);
          }
        }
    }
    if (i.finish) {
      const s = Ts("finish");
      if (s && s.labels && s.labels.length > 1)
        for (const a of jn) {
          const o = `face.${a}`, l = Ii(e, "finish", o);
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
            r && (Ms(e, "finish", o, g), n = !0);
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
    if (n && typeof n == "object" && !(n instanceof Dn) && !("sides" in n) && !("faces" in n))
      return !0;
    if ("_banding" in e) {
      const s = e._banding;
      if (s && typeof s == "object" && !(s instanceof Dn) && !("sides" in s) && !("faces" in s))
        return !0;
    }
    const i = e.finish;
    if (i && typeof i == "object" && !(i instanceof Gn) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_finish" in e) {
      const s = e._finish;
      if (s && typeof s == "object" && !(s instanceof Gn) && !("sides" in s) && !("faces" in s))
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
          const s = Object.keys(n.sides).filter((a) => !Rn.includes(a));
          if (s.length > 0)
            throw new Error(`Invalid side keys in banding: ${s.join(", ")}`);
        }
      }
      const i = e.finish;
      if (i) {
        if ("sides" in i && i.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in i && i.faces) {
          const s = Object.keys(i.faces).filter((a) => !jn.includes(a));
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
const Ar = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Or = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function hs(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function Lr(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function Oi(t = !1) {
  return {
    a: t,
    b: t
  };
}
function Fr(t = !1) {
  return {
    sides: hs(t),
    faces: Oi(t)
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
  for (const [n, i] of Object.entries(Ar))
    n in t && (e[i] = t[n]);
  return e;
}
function Tr(t) {
  const e = {};
  for (const [n, i] of Object.entries(Or))
    n in t && (e[i] = t[n]);
  return e;
}
function gt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function Kt(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, n = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && n && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const s = Er(t), a = {};
    return "l1" in s && (a.l1 = gt(s.l1)), "l2" in s && (a.l2 = gt(s.l2)), "w1" in s && (a.w1 = gt(s.w1)), "w2" in s && (a.w2 = gt(s.w2)), a;
  }
  const i = {};
  return "l1" in t && (i.l1 = gt(t.l1)), "l2" in t && (i.l2 = gt(t.l2)), "w1" in t && (i.w1 = gt(t.w1)), "w2" in t && (i.w2 = gt(t.w2)), Object.keys(i).length > 0 ? i : t;
}
function Mr(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function Ln(t) {
  return !t || !Array.isArray(t) ? t : t.map(Mr);
}
function Nr(t) {
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
function ms(t) {
  return t && Tr(t);
}
function Br(t) {
  t?.type && delete t.type, Vr.call(this, t), Dr.call(this, t), Rr.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => vs(e));
}
function Vr(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function Dr(t) {
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
function vs(t) {
  !t || typeof t != "object" || (Hs.needsMigration(t) && Hs.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Da(t) {
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
function Kp(t) {
  if (!(!t || typeof t != "object")) {
    if (Br(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = Kt(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = Kt(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = Kt(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: Kt(e.trim)
    } : e)), t.options) {
      if (Da(t.options), t.options.bandingLocations && (t.options.bandingLocations = Ln(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = Ln(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = Ln(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const n = t.options.extrasLocationGroups[e];
          n && Array.isArray(n) && n.forEach((i) => {
            i.locations && (i.locations = Ln(i.locations));
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
        n.locations && Array.isArray(n.locations) && (n.locations = Ln(n.locations)), n.groups && Array.isArray(n.groups) && n.groups.forEach((i) => {
          i.locations && (i.locations = Ln(i.locations));
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => vs(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && vs(t);
  }
}
function Gr(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = jr(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(qr)), Array.isArray(e.parts) && (e.parts = e.parts.map(_r)), e;
}
function jr(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const n = e.efficiencyOptions.primaryCompression;
    n === "x" ? e.efficiencyOptions.primaryCompression = "l" : n === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), e.cutPreference === "flex" ? e.cutPreference = "l" : e.cutPreference === "" && (e.cutPreference = void 0), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function qr(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = Kt(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function _r(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const n = Nr(e);
    n && Object.keys(n).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = Kt(n)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = Kt(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const n = {};
      "a" in e.finish && (n.a = gt(e.finish.a)), "b" in e.finish && (n.b = gt(e.finish.b)), e.extras.finish.faces = n;
    } else
      e.extras.finish.sides = Kt(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = Kt(e.extras.finish.sides)), e.extras?.finish?.faces) {
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
function Li(t) {
  if (!t || typeof t != "object") return null;
  if (Array.isArray(t)) return t.map(Li);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || n === "enabled" || n === "type" || n === "issues" || n === "warnings" || (e[n] = i && typeof i == "object" ? Li(i) : i);
  return Object.keys(e).length > 0 ? e : null;
}
function Ra(t) {
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
function Ur(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function Wr(t) {
  return t.rot !== void 0 ? t.rot ? 1 : 0 : t.rotated !== void 0 ? t.rotated ? 1 : 0 : t.isRotated !== void 0 ? t.isRotated ? 1 : 0 : t.w > t.l ? 1 : 0;
}
z({
  // Job metadata
  jobId: _().describe("Job identifier"),
  // Input configuration (preserved)
  saw: En.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: fe(al).describe("Stock items"),
  parts: fe(Ns).describe("Parts with coordinates and properties"),
  cuts: fe(sl).optional().describe("Cut instructions"),
  offcuts: fe(il).optional().describe("Remaining offcut pieces"),
  unusableParts: fe(Ns).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: nl.describe("Complete analysis and metrics")
});
z({
  saw: En.describe("Saw configuration"),
  stock: fe(vn).describe("Stock items"),
  parts: fe(Tn).describe("Parts to cut"),
  groups: fe(ol).optional().describe("User-defined part groups with XY positions"),
  webhook: v().url().optional().describe("Webhook URL for async result delivery")
});
z({
  error: v().describe("Error message"),
  details: js().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: Rt("V3").describe("API version"),
  help: v().optional().describe("Helpful migration guidance"),
  example: js().optional().describe("Example of correct format"),
  docs: v().url().optional().describe("Link to V3 documentation")
});
function zr(t) {
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
function Hr(t) {
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
    analysis: zr(t.analysis),
    stack: t.stack?.number ?? 1,
    customData: wt(t.customData)
  } : null;
}
function Kr(t, e) {
  if (!t) return null;
  let n = null;
  const i = Ur(t.stock);
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
    rot: Wr(t),
    added: t.added ?? !1,
    notes: t.notes ?? "",
    code: t.code,
    stock: n,
    trim: wt(t.trim),
    extras: Li(t.extras),
    customData: wt(t.customData)
  };
  return t.machining && (s.machining = Ra(t.machining)), s;
}
function Zr(t) {
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
    extras: Li(t.extras),
    customData: wt(t.customData)
  };
  return t.machining && (e.machining = Ra(t.machining)), t.issues && Array.isArray(t.issues) && t.issues.length > 0 ? e.issues = t.issues.map((n) => ({
    message: Hl(n.message) || n.message,
    type: n.type,
    category: n.category,
    field: n.field
  })) : e.issues = [], e;
}
function Jr(t) {
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
function Yr(t) {
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
function Xr(t) {
  const e = t.stockList || t.stock || [], n = /* @__PURE__ */ new Map();
  for (const g of e) {
    const m = { id: g.id || "" };
    g.code && (m.code = g.code), g.id && n.set(g.id, m), g.autoId && g.autoId !== g.id && n.set(g.autoId, m);
  }
  const i = e.map(Hr), s = (t.shapeList || t.parts || []).map((g) => Kr(g, n)), a = (t.unusableShapes || []).map(Zr), o = (t.cutList || t.cuts || []).map(Jr), l = (t.offcuts || []).map(Yr);
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
let hi = null;
function Qr() {
  const t = Z(null), e = Z(null), n = Z(null), i = $n([]), s = $n([]), a = $n([]), o = $n([]), l = Z([]), r = Z(null), g = $n([]), m = Z(null), y = Z(null), p = Z({});
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
function Fi() {
  if (hi) return hi;
  const t = Qr(), e = $(() => t.activeStockAutoId.value ? re(t.activeStockAutoId.value) : []), n = $(() => !t.activeStockAutoId.value || !t.stockList.value?.length ? null : ie(t.activeStockAutoId.value)), i = $(() => !n.value || !t.cutList.value?.length ? [] : $e(n.value.autoId)), s = $(() => !n.value || !t.segmentList.value?.length ? [] : ge(t.activeStockAutoId.value)), a = $(() => t.stockList.value?.length ? q(t.stockList.value) : []), o = $(() => t.shapeList.value.filter((J) => J.added)), l = $(() => t.shapeList.value?.length ? t.shapeList.value.filter((J) => !J.added) : []), r = $(() => t.shapeList.value?.length ? cl(t.shapeList.value) : []), g = $(() => t.shapeList.value?.length ? t.shapeList.value.filter((J) => !J.duplicate) : []), m = $(() => g.value.filter((J) => J.added)), y = $(() => t.stockList.value?.length ? t.stockList.value.filter((J) => J.used && !J.duplicate) : []), p = $(() => y.value.filter((J) => J.used)), F = $(() => t.cutList.value?.length ? i.value.reduce((J, pe) => J + pe.area, 0) : 0), I = $(() => !t.stockList.value?.length || !n.value ? 0 : n.value ? n.value.area : 0), V = $(() => !t.shapeList.value?.length || !e.value ? 0 : e.value ? e.value.reduce((J, pe) => J + pe.area, 0) : 0), M = $(() => !t.cutList.value?.length || !n.value ? null : n.value.cutType), D = $(() => t.stockList.value?.length ? t.stockList.value.filter((pe) => pe.used && !pe.isStacked) : []), H = $(() => t.stockList.value?.length ? rl(n.value, t.stockList.value) : 0), Y = $(() => {
    if (!t.stockList.value?.length) return 0;
    let J = I.value ? (F.value + V.value) / I.value : null;
    return J > 1 && (J = 1), J;
  }), se = $(() => t.activeStockAutoId.value && t.cuttingPlans.value?.[t.activeStockAutoId.value] || null), E = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, N = () => {
    t.saw.value = null, t.activeStockAutoId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [], t.cuttingPlans.value = {};
  }, ee = (J, pe) => {
    J in this && this[J]?.sort(wi[pe]);
  }, S = (J) => {
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
      J?.saw && (t.saw.value = new Aa(J.saw));
      const pe = ll(J, {
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
  return hi = {
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
    activeStockStackCount: H,
    activeTotalArea: Y,
    activeSegments: s,
    cuttingPlan: se,
    // methods
    reset: E,
    clear: N,
    sortItems: ee,
    update: S,
    updateShapes: R,
    updateStock: w,
    updateFromResult: Q,
    getStock: ie,
    getShapes: re,
    getSegments: ge,
    getCuts: $e,
    setActiveStockAutoId: ne
  }, hi;
}
function ec(t) {
  const e = t.x, n = t.x + t.l, i = Vt().domain([e, n]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(n)]), s = t.y, a = t.y + t.w, o = Vt().domain([s, a]).range([this.scales.yPositionScale(s), this.scales.yPositionScale(a)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(fs(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(fs(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(ps(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(ps(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function tc() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(nr(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(ir(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function Ga(t, e, n) {
  !n || !t?.length || t.forEach((i, s) => {
    const [a, o] = i;
    n === "x" ? nc.call(this, a, o, e[s]) : ic.call(this, a, o, e[s]);
  });
}
function nc(t, e, n) {
  const i = Vt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), s = ja(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(fs(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, r) => r[l]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function ic(t, e, n) {
  const i = Vt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), s = ja(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(ps(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  sc(a), this.axes.cutMeasurementYAxes.push(a);
}
function ja(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function sc(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, n, i) => i[n]?.getBBox()?.height + 10).attr("dx", (e, n, i) => i[n]?.getBBox()?.width / 4).attr("transform", (e, n, i) => "rotate(90) translate(" + i[n]?.getBBox()?.width / 4 + ")");
}
function Jn() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function ac() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function $i() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function ws(t) {
  return t.autoId;
}
function oc(t, e) {
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
function is({ parent: t, near: e, far: n, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, n, ...i].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, ws).join(
    (a) => a.append("rect").attr("class", "segment").call((o) => Ks.call(this, o)),
    (a) => a.call((o) => Ks.call(this, o)),
    (a) => a.remove()
  ), this.state.env === "development" && lc.call(this, s), !this.settings.app && this.state.env === "development" && rc.call(this);
}
function Ks(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, n) => e.id !== "root" && n === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function lc(t) {
  this.selections.segmentGroup.selectAll("text").data(t, ws).join(
    (e) => e.append("text").attr("class", "segment-text").call((n) => Zs.call(this, n)),
    (e) => e.call((n) => Zs.call(this, n)),
    (e) => e.remove()
  );
}
function Zs(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function rc() {
  this.selections.segmentRectangles.on("mousedown", function(t, e) {
    console.log("segment", `[${e?.parentId || "-"}]->[${e.id}] {P${e.phase}} ${e.l}x${e.w} ${e.cutDirection} ${e.hasHeadCut ? "HEAD" : "NORM"}`), console.log(e);
  });
}
function qa(t) {
  const e = t?.guillotineState?.parentSegmentID;
  if (!this.props.segments?.value?.length)
    return !1;
  let n;
  if (e) {
    for (const s of this.props.segments.value)
      if (n = oc(s, e), n) break;
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
function _a(t, e = []) {
  if (!t) return e;
  if (t.offcut && e.push(t), t.children && Array.isArray(t.children))
    for (const n of t.children)
      _a(n, e);
  return e;
}
function cc() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const t = [];
  for (const n of this.props.segments.value)
    _a(n, t);
  if (!t.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const e = (n) => n.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(t, ws).join(
    (n) => n.append("rect").attr("class", "segment offcut").call(e),
    (n) => n.call(e),
    (n) => n.remove()
  );
}
const { currentCutIndex: uc } = Fi();
function dc() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => Js.call(this, e)),
    (t) => t.call((e) => Js.call(this, e)),
    (t) => t.remove()
  ), za.call(this));
}
function Js(t) {
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
function Ua(t, e, n) {
  return t.guillotineState.parentSegmentID === e && n && t.guillotineState.segmentCutOrder < n;
}
function Wa(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function fc(t, e, n) {
  this.selections.cutLines.style("visibility", (i) => typeof t.guillotineState?.[n] == "number" && typeof i.guillotineState?.[n] == "number" && i.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("offcut-cut", !1), this.selections.cutLines.classed("offcut-cut", (i, s) => s === e);
}
function pc(t, e, n, i) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] || !i && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), uc.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden")), this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[n] === t.guillotineState[n]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), i || hc.call(this, t, e);
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
    this.state.device === "desktop" && !t.isTrim && Ga.call(this, a, o, i);
  }
  this.selections.cutLines.classed("offcut-cut", !1), this.selections.cutLines.classed("highlight", (o, l) => l === e);
}
function za() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1).classed("offcut-cut", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), Jn.call(this), $i.call(this);
}
function hc(t, e) {
  const n = t?.guillotineState?.segmentCutOrder;
  if (n == null) return;
  this.selections.cutLines.classed("completed", (y) => Ua(y, e, n)), this.selections.cutLines.classed("inside-segment", (y) => Wa(y, e));
  const i = qa.call(this, t);
  if (i === !1) return;
  const { parent: s, children: a } = i, { near: o } = Ha(t, a);
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
  ], r = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && r && Ga.call(this, l, r, m);
}
function mc(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  const n = this.props.cuts.value[t];
  if (!n) return;
  if (Jn.call(this), $i.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const I = this.selections.cutLines.nodes()[t].parentElement;
    if (!I) return;
    Ye(I).raise();
  }
  const i = n.guillotineState?.parentSegmentID, s = this.getHalfBladeWidth(n.stock), a = n.dimension === "l" ? "y" : "x", o = n?.stock?.trim, l = e === "ptx" ? "ptxOrder" : "order";
  if (n.isTrim && ["guillotine", "beam"].includes(n?.stock?.cutType)) {
    fc.call(this, n, t, l), Ys.call(this, n, t, i), this.removeSegments();
    return;
  }
  if (["guillotine", "beam"].includes(n?.stock?.cutType) && i !== null && typeof i < "u" ? pc.call(this, n, i, l, e) : gc.call(this, n, t, o, a, s), Ys.call(this, n, t, i), e === "ptx") {
    this.removeSegments();
    return;
  }
  const r = qa.call(this, n);
  if (r === !1)
    return;
  const { parent: g, children: m } = r;
  if (!n?.guillotineState?.parentSegmentID)
    return is.call(this, { parent: g });
  if (n.stock?.cutType === "beam" && g.phase === 0) {
    const V = this.props.segments.value.find((N) => N.stock?.autoId === n.stock?.autoId)?.children || m, M = V.find((N) => N.offcut === !0 && N.y === 0 && N.isTrimOffcut === !0), D = V.find((N) => N.offcut === !0 && N !== M && N.y + N.w >= n.stock.w - (n.stock.trim?.l2 || 0)), H = V.filter((N) => !N.offcut), Y = H.find((N) => N.type === "near"), se = H.find((N) => N.type === "far"), E = [M, D].filter(Boolean);
    return is.call(this, { parent: g, near: Y, far: se, offcuts: E });
  }
  const { near: y, far: p, offcuts: F } = Ha(n, m);
  is.call(this, { parent: g, near: y, far: p, offcuts: F });
}
function Ha(t, e) {
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
function Ys(t, e, n) {
  this.selections.cutLines.attr("stroke-width", (i, s) => {
    const a = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let o = Math.max(1, Math.ceil(a));
    const l = t?.guillotineState?.segmentCutOrder;
    return (Ua(i, n, l) || Wa(i, n)) && (o += 1), s === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (o = 5), o;
  });
}
function vc() {
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
function bc(t) {
  if (this.selections.cuttingPathGroup) {
    if (t === null) {
      this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", 1);
      return;
    }
    this.selections.cuttingPathGroup.selectAll(".contour").style("opacity", (e, n) => n <= t ? 1 : 0.15), this.selections.cuttingPathGroup.selectAll(".contour").classed("active", (e, n) => n === t);
  }
}
function yc() {
  Ka.call(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.remove(), this.selections.cuttingPathGroup = null);
}
const Jt = /* @__PURE__ */ new WeakMap();
function wc(t, e, n) {
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
function kc() {
  if (!this.props.cuttingPlan?.value || !this.selections.cuttingPathGroup) return;
  const t = this.props.cuttingPlan.value;
  if (!t.contours?.length) return;
  let e = Jt.get(this);
  if (!e || !e.waypoints.length) {
    const a = this.scales.xPositionScale, o = this.scales.yPositionScale, l = wc(t, a, o);
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
    }, Jt.set(this, e);
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
function xc() {
  const t = Jt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null);
}
function Ka() {
  const t = Jt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), Jt.delete(this)), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function Pc() {
  const t = Jt.get(this);
  t && (t.playing = !1, t.rafId && (cancelAnimationFrame(t.rafId), t.rafId = null), t.lastTime = null), Jt.delete(this), this.selections.cuttingPathGroup && (this.selections.cuttingPathGroup.select(".cutting-path-dot").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-cut").remove(), this.selections.cuttingPathGroup.select(".cutting-path-trail-rapid").remove());
}
function Cc() {
  return Jt.get(this)?.playing ?? !1;
}
function Ic(t) {
  const e = Jt.get(this);
  e && (e.speed = t);
}
function Ac(t) {
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
  const i = ul(
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
      const g = dl(this.props.shapes.value, this.props.stock.value).flatMap((m) => Object.values(m.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(g, o).join(
        (m) => m.append("line").call((y) => l.call(this, y)),
        (m) => m.call((y) => l.call(this, y)),
        (m) => m.remove()
      );
    }
    s = fl(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new pl();
  for (const o of i.toArray()) {
    const l = gl(t, o, this.props.stock.value);
    l && a.addPoints(l.toArray());
  }
  if (s) {
    const o = s.toArray();
    for (const l of o) {
      const r = hl(t, l, this.props.stock.value);
      r && a.addPoints(r.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const o = this.props.stock.value;
    [
      new On(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new On(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new On(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.trim.l1 ?? 0
      ),
      new On(
        o.trim.w1 ?? 0,
        o.w - t.w - (o.trim.l2 ?? 0)
      ),
      new On(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.w - t.w - (o.trim.l2 ?? 0)
      )
    ].forEach((l) => a.add(l)), e = a.toArray();
  } else {
    const o = this.props.stock.value;
    a.add(new On(o.trim.w1 ?? 0, o.trim.l1 ?? 0)), e = a.toArray();
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
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), Oc.call(this, e, t), Lc.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Oc(t, e) {
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
function Lc(t, e) {
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
function mi(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function Fc() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => mi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Xs.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.classed("hidden", !1).text((e) => Xs.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => mi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => Qs.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.classed("hidden", !1).text((e) => Qs.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => mi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => ea.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.classed("hidden", !1).text((e) => ea.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => mi(t) ? [] : [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => ta.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, n, i) => {
      const s = i[n], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(s.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    }),
    (t) => t.classed("hidden", !1).text((e) => ta.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("transform", (e, n, i) => {
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
function Xs(t) {
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
function Qs(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function ea(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : me({ v: t.l, o: this.numberConfig }).toString();
}
function ta(t) {
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
function Tc() {
  if (!this.props.containerWidth) return;
  Jn.call(this);
  const t = this.props.shapes.value.reduce((e, n) => {
    const i = parseInt(n.parentId);
    return i > e ? i : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Nc.call(this), Mc.call(this), $c.call(this);
}
function Mc() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Ec).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return na.call(this, e), ia.call(this, e), e.on("mousedown", sa.bind(this)), e;
    },
    (t) => (na.call(this, t), ia.call(this, t), t.on("mousedown", sa.bind(this)), t),
    (t) => t.remove()
  ), _c.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => Fc.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Nc() {
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
  this.scales.scoreColorScale = Si([Bt(251, 224, 255), Bt(122, 0, 138)]).domain([n, i]);
}
function Bc(t) {
  return t.outline && Array.isArray(t.outline) && t.outline.length >= 3;
}
function Vc(t, e) {
  const n = e.outline;
  if (!n || n.length < 3) return "";
  const i = e.nestingRotation || 0;
  let s;
  if (e.holes?.length) {
    let I = 1 / 0, V = 1 / 0, M = -1 / 0, D = -1 / 0;
    for (const H of n)
      H.x < I && (I = H.x), H.y < V && (V = H.y), H.x > M && (M = H.x), H.y > D && (D = H.y);
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
function na(t) {
  const e = this;
  t.selectAll(".shape").remove(), t.each(function(i) {
    const s = Ye(this);
    Bc(i) ? s.insert("path", ":first-child").datum(i).attr("class", "shape").attr("d", (a) => Vc(e, a)).attr("fill-rule", "evenodd").style("fill", (a) => Mn.call(e, a)) : s.insert("rect", ":first-child").datum(i).attr("class", "shape").attr("x", (a) => e.getRectangleCoordinate(a, "x")).attr("y", (a) => e.getRectangleCoordinate(a, "y")).attr("width", (a) => e.getWidthAttribute(a)).attr("height", (a) => e.getHeightAttribute(a)).style("fill", (a) => Mn.call(e, a));
  });
  const n = t.selectAll(".shape");
  this.selections.shapeRectangles ? this.selections.shapeRectangles = sr(
    this.selections.shapeRectangles.nodes().concat(n.nodes())
  ) : this.selections.shapeRectangles = n;
}
function ia(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const n = Ye(e.target);
    n.classed("hover", !0), n.classed("selected") || n.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, n) => {
    const i = Ye(e.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", Mn.call(this, n));
  }, { passive: !0 });
}
function sa(t, e) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && Dc.call(this, t, e), (this.settings.app || this.settings.embed) && jc.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && ($i.call(this), ec.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function Dc(t, e) {
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
    const s = Kc(t, i);
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
function jc(t, e) {
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
      color: Mn.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(n), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function Mn(t) {
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
const aa = 3;
function qc(t) {
  const e = [];
  for (const n of t) {
    const i = n.extras?.banding;
    if (n.added && i?.sides)
      for (const [s, a] of Object.entries(i.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(s)) continue;
        let o = s;
        if (n.rot) {
          const r = Ea({ [s]: !0 }, "cc");
          o = Object.keys(r)[0];
        }
        const l = Uc.call(this, n, o);
        l && e.push(l);
      }
  }
  return e;
}
function oa(t) {
  const e = aa / 2;
  return t.attr("class", "banding").attr("x1", (n) => this.scales.xPositionScale(n.l1) + vi.call(this, n.type, "x", e)).attr("x2", (n) => this.scales.xPositionScale(n.l2) + vi.call(this, n.type, "x", e)).attr("y1", (n) => this.scales.yPositionScale(n.w1) + vi.call(this, n.type, "y", e)).attr("y2", (n) => this.scales.yPositionScale(n.w2) + vi.call(this, n.type, "y", e)).attr("stroke-width", aa).attr("stroke", "white");
}
function _c(t) {
  if (!this.settings.main) return;
  const e = qc.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (n, i) => i).join(
    (n) => n.append("line").call((i) => oa.call(this, i)),
    (n) => n.call((i) => oa.call(this, i)),
    (n) => n.remove()
  );
}
function vi(t, e, n) {
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
function Uc(t, e) {
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
function Wc(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const la = (t) => t.id;
function ra(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function ca(t) {
  return t.style("fill", (e) => `url(#grain-${e.grain || "n"})`).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function zc() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), tc.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], la).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => ra.call(this, e)),
    (t) => t.call((e) => ra.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], la).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => ca.call(this, e)),
    (t) => t.call((e) => ca.call(this, e)),
    (t) => t.remove()
  );
}
function Hc(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function Kc(t, e) {
  return ar(t, e);
}
class Zc {
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
      shapeColorScale: Si(),
      scoreColorScale: Si()
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
    }, i = (s, a) => Bt("#" + (Hc(s?.replace("#", "")) ? s.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(n).map(([s, a]) => [
        s,
        i(e.colors?.[s], a)
      ])
    ), this.scales.shapeColorScale = Si([
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => Mn.call(this, i));
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
    Tc.call(this);
  }
  drawStock() {
    zc.call(this);
  }
  drawCuts() {
    dc.call(this);
  }
  drawCuttingPath() {
    vc.call(this);
  }
  removeCuttingPath() {
    yc.call(this);
  }
  showCuttingPathStep(e) {
    bc.call(this, e);
  }
  animateCuttingPath() {
    kc.call(this);
  }
  pauseCuttingPathAnimation() {
    xc.call(this);
  }
  stopCuttingPathAnimation() {
    Ka.call(this);
  }
  resetCuttingPathAnimation() {
    Pc.call(this);
  }
  isCuttingPathAnimating() {
    return Cc.call(this);
  }
  setCuttingPathAnimationSpeed(e) {
    Ic.call(this, e);
  }
  drawAllOffcuts() {
    cc.call(this);
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), Jn.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), ac.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), $i.call(this);
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
    if (di(e) && e.outline?.length >= 3)
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
    if (di(e) && e.outline?.length >= 3) return !0;
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox();
    if (a.width === 0 && a.height === 0) return !1;
    const o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return a.width >= o || l < 40;
  }
  isLengthHidden(e, n, i) {
    if (di(e) && e.outline?.length >= 3) return !0;
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
    if (di(e) && e.outline?.length >= 3) return !0;
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
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => Mn.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const n = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    Jn.call(this);
  }
  updateShapeVisibility() {
    Wc.call(this);
  }
  drawPositions(e) {
    return Ac.call(this, e);
  }
  showCut(e) {
    mc.call(this, e);
  }
  resetCuts() {
    za.call(this);
  }
}
const Jc = ["id"], Yc = /* @__PURE__ */ Xe({
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
    } = Fi(), I = t, V = n, M = (ce) => {
      V("part-click", ce);
    }, D = (ce) => {
      V("shape-colour-update", ce);
    }, H = (ce, k) => {
      ce?.autoId && V("shape-select", ce.autoId, k);
    }, Y = (ce) => {
      ce && V("add-to-parts-bin", ce);
    }, se = (ce, k) => {
      ce && V("move-shape", ce, k);
    }, E = Z(0), N = Z(0), ee = Z(null);
    let S, R = Z(!1);
    const w = At({
      debug: "",
      stretched: !1
    }), Q = () => {
      S?.state && (w.stretched = S.state.stretched);
    };
    dn(() => J());
    const ie = $(() => ({
      format: I.numberFormat,
      decimals: I.decimalPlaces
    })), re = $(() => I.stockAutoId ? g(I.stockAutoId) : s.value), ge = $(() => I.stockAutoId ? m(I.stockAutoId) : a.value), $e = $(() => I.main ? I.stockAutoId ? p(I.stockAutoId) : o.value : []), q = $(() => I.main ? I.stockAutoId ? y(I.stockAutoId) : l.value : []);
    ba(ee, (ce) => {
      const k = ce[0], { width: C, height: b } = k.contentRect;
      C > 0 && (E.value = C), V("resize", { width: C, height: b });
    }), Do(
      E,
      (ce) => {
        S && (ce <= 0 || (S.setDevice(), S.resetShapeAxes(), S.removeCuttingPath(), S.drawAll(), Q(), r.value !== null && (S.toggleSegments(!0), S.showCut(r.value))));
      },
      { throttle: 100 }
    );
    let ne = !1;
    Ue(() => re.value, (ce) => {
      ce && (E.value <= 0 || (ne = !0, S.setDevice(), S.resetCuts(), S.removeSegments(), S.resetShapeAxes(), S.removeCuttingPath(), S.drawAll(), Q(), ht(() => ne = !1)));
    }, { immediate: !1 }), Ue(() => ge.value, (ce) => {
      ne || ce && (E.value <= 0 || (S.setDevice(), S.drawShapes()));
    }, { immediate: !1, deep: !0 }), I.main && (Ue(() => $e.value, () => {
      ne || E.value <= 0 || S.drawCuts();
    }, { immediate: !1, deep: !0 }), Ue(r, () => {
      r.value !== null && (E.value <= 0 || (S.toggleSegments(!0), S.showCut(r.value)));
    }, { immediate: !1 }), Ue(ie, (ce) => {
      S.updateNumberFormat(ce.format, ce.decimals, null);
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
          onShapeSelect: H,
          onAddToPartsBin: Y,
          onMoveShape: se,
          onPartClick: M
        }
      };
      S = new Zc(ce), w.debug = S.state.debug, R.value = !0;
    }, pe = (ce = !1) => {
      S && S.toggleShapes(ce);
    }, Me = (ce = !1) => {
      S && S.toggleCuts(ce);
    }, ve = (ce = !1) => {
      S && S.toggleSegments(ce);
    }, et = () => {
      S && S.drawShapes();
    }, Ke = () => {
      S && (S.drawStock(), Q());
    }, Lt = () => {
      S && (S.toggleSegments(!1), S.resetCuts());
    }, nt = (ce) => {
      S && (S.toggleSegments(!0), S.showCut(ce));
    }, Ft = (ce) => S ? S.drawPositions(ce) : !1, St = () => {
      S && S.removePositions();
    }, Yt = (ce) => {
      S && S.findShape(ce);
    }, $t = () => {
      S && S.clearSelection();
    }, at = (ce) => S ? S.requiresStretch(ce) : !1, Et = (ce) => {
      S?.options && (S.options.enableStretch = ce, S.setAspectRatio(), S.drawAll(), Q());
    }, rt = () => S?.options?.enableStretch ?? !0;
    return Ue(() => I.flipY, (ce) => {
      S?.settings && (S.settings.flipY = ce, S.setAspectRatio(), S.drawAll());
    }), Ue(() => w.debug, (ce) => {
      S?.state && (S.state.debug = ce);
    }), e({
      loaded: R,
      toggleShapes: pe,
      toggleCuts: Me,
      toggleSegments: ve,
      drawShapes: et,
      drawStock: Ke,
      drawPositions: Ft,
      resetPositions: St,
      findShape: Yt,
      clearSelection: $t,
      resetCuts: Lt,
      showCut: nt,
      requiresStretch: at,
      setEnableStretch: Et,
      getEnableStretch: rt,
      animateCuttingPath: () => {
        S && S.animateCuttingPath();
      },
      pauseCuttingPathAnimation: () => {
        S && S.pauseCuttingPathAnimation();
      },
      stopCuttingPathAnimation: () => {
        S && S.stopCuttingPathAnimation();
      },
      resetCuttingPathAnimation: () => {
        S && S.resetCuttingPathAnimation();
      },
      isCuttingPathAnimating: () => S?.isCuttingPathAnimating() ?? !1,
      setCuttingPathAnimationSpeed: (ce) => {
        S && S.setCuttingPathAnimationSpeed(ce);
      },
      state: w,
      get stretched() {
        return w.stretched;
      },
      set moving(ce) {
        S?.state && (S.state.moving = ce);
      }
    }), (ce, k) => (L(), j("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: ee,
      class: We([{ app: t.app }, "diagram-container"])
    }, null, 10, Jc));
  }
}), It = Z(null);
let Xc = 0;
function Qc(t) {
  const e = t || `action-menu-${++Xc}-${Date.now()}`, n = $({
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
const eu = { class: "action-menu" }, tu = ["textContent"], nu = {
  key: 0,
  class: "menu-divider"
}, iu = {
  key: 1,
  class: "group-label"
}, su = /* @__PURE__ */ Xe({
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
    const n = t, i = e, { isOpen: s, close: a, toggle: o } = Qc(n.menuId), l = Z(), r = Z(), g = $(() => n.disabled), m = $(() => n.label), y = $(() => n.showLabel), p = $(() => n.icon), { floatingStyles: F } = Ro(l, r, {
      placement: n.placement,
      whileElementsMounted: cr,
      middleware: [
        or(n.offset),
        lr(),
        rr({ padding: 8 })
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
    }, H = (w) => w.href ? "a" : "div", Y = (w) => {
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
    }, S = (w) => {
      const Q = w.target;
      s.value && l.value && r.value && !l.value.contains(Q) && !r.value.contains(Q) && a();
    }, R = (w) => {
      w.key === "Escape" && s.value && a();
    };
    return dn(() => {
      document.addEventListener("click", S), document.addEventListener("keydown", R);
    }), Yn(() => {
      document.removeEventListener("click", S), document.removeEventListener("keydown", R);
    }), (w, Q) => (L(), j("div", eu, [
      K("div", {
        ref_key: "trigger",
        ref: l,
        onClick: E,
        class: We(["actions-btn", { active: A(s), disabled: g.value }])
      }, [
        p.value ? (L(), Ie(A(Pi), {
          key: 0,
          icon: V.value,
          class: "icon"
        }, null, 8, ["icon"])) : ae("", !0),
        y.value ? (L(), j("span", {
          key: 1,
          class: "label",
          textContent: ue(m.value)
        }, null, 8, tu)) : ae("", !0)
      ], 2),
      (L(), Ie(Go, { to: "body" }, [
        A(s) && !g.value ? (L(), j("div", {
          key: 0,
          ref_key: "floating",
          ref: r,
          style: yt(A(F)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: Q[0] || (Q[0] = ya(() => {
          }, ["stop"]))
        }, [
          (L(!0), j(He, null, tt(se.value, (ie, re) => (L(), j(He, { key: re }, [
            ie.type === "divider" ? (L(), j("div", nu)) : ie.type === "group" ? (L(), j("div", iu, ue(ie.label), 1)) : ie.show !== !1 ? (L(), Ie(jo(H(ie)), rn({
              key: 2,
              ref_for: !0
            }, Y(ie), {
              onClick: (ge) => N(ie, ge),
              id: ie.id,
              class: ["menu-item", ee(ie)],
              disabled: ie.disabled && !ie.href
            }), {
              default: Ci(() => [
                ie.icon || M(ie) ? (L(), Ie(A(Pi), {
                  key: 0,
                  icon: M(ie) ? ["fass", "check"] : I(ie.icon)
                }, null, 8, ["icon"])) : ae("", !0),
                K("span", null, ue(ie.label), 1)
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
}), ua = (t, e, n) => {
  if (e === "unitDependent")
    if (n === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const i = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), s = Oa(t);
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
function au({
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
      return t.type === "string" ? m ? { value: null, valid: !1, message: "field_required" } : { value: l === null ? null : "", valid: !0 } : ml(l, "decimal", m);
    }
    const g = String(l);
    switch (t.type) {
      case "string":
        return { value: g, valid: !0 };
      case "unitDependent":
        if (r)
          return ua(g, t.type, t.numberFormat);
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
          return ua(g, t.type);
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
          if (!Oa(g)) {
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
function ou({
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
function lu({
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
const ru = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], cu = /* @__PURE__ */ Xe({
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
    } = lu({
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
    }, null, 40, ru));
  }
}), uu = ["for"], bi = /* @__PURE__ */ Xe({
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
    }, ue(t.label), 9, uu));
  }
}), du = ["id", "disabled", "aria-label"], fu = { class: "multiselect__text" }, pu = {
  key: 0,
  class: "multiselect__dropdown"
}, gu = ["checked", "disabled", "onChange"], hu = { class: "multiselect__option-label" }, mu = {
  key: 1,
  class: "multiselect__no-results"
}, vu = /* @__PURE__ */ Xe({
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
        return g.value.find((H) => String(H.value) === M)?.label || M;
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
    return dn(() => document.addEventListener("click", I)), qo(() => document.removeEventListener("click", I)), (V, M) => (L(), j("div", {
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
        K("span", fu, ue(y.value), 1)
      ], 8, du),
      s.value ? (L(), j("div", pu, [
        n.searchable ? ys((L(), j("input", {
          key: 0,
          ref_key: "searchRef",
          ref: o,
          "onUpdate:modelValue": M[0] || (M[0] = (D) => l.value = D),
          type: "text",
          class: "multiselect__search",
          placeholder: "Search...",
          onClick: M[1] || (M[1] = ya(() => {
          }, ["stop"]))
        }, null, 512)), [
          [_o, l.value]
        ]) : ae("", !0),
        (L(!0), j(He, null, tt(m.value, (D) => (L(), j("label", {
          key: D.value,
          class: We(["multiselect__option", { "multiselect__option--zero": D.hidden }])
        }, [
          K("input", {
            type: "checkbox",
            checked: r.value.has(String(D.value)),
            disabled: D.disabled,
            onChange: (H) => F(D.value)
          }, null, 40, gu),
          K("span", hu, ue(D.label), 1)
        ], 2))), 128)),
        n.searchable && m.value.length === 0 ? (L(), j("div", mu, " No matches ")) : ae("", !0)
      ])) : ae("", !0)
    ], 512));
  }
}), bu = /* @__PURE__ */ Xn(vu, [["__scopeId", "data-v-75036be8"]]), yu = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], wu = ["disabled", "selected"], Su = {
  key: 0,
  value: " "
}, ku = ["hidden", "value", "disabled"], xu = /* @__PURE__ */ Xe({
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
    } = ou({
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
      K("option", {
        value: "",
        disabled: n.selectFirstOptionDisabled,
        selected: !n.value
      }, ue(n.text?.select?.toUpperCase() ?? "SELECT"), 9, wu),
      n.multiEdit ? (L(), j("option", Su, ue(n.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ae("", !0),
      (L(!0), j(He, null, tt(o.value, (m) => (L(), j("option", {
        key: m.value,
        hidden: m.hidden,
        value: m.value,
        disabled: m.disabled
      }, ue(m.label), 9, ku))), 128))
    ], 16, yu));
  }
}), Pu = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], bs = /* @__PURE__ */ Xe({
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
    } = au({
      props: n,
      emit: i,
      isMounted: s
    }), V = (M) => {
      const D = M.getBoundingClientRect(), H = window.getComputedStyle(M);
      return D.width > 0 && D.height > 0 && H.display !== "none" && H.visibility !== "hidden";
    };
    return dn(() => {
      ze(n.default) && (n.value === void 0 || n.value === null) && i("update:value", n.default), n.focus && a.value && V(a.value) && ht(() => a.value.focus());
    }), Yn(() => {
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
      (...H) => A(o) && A(o)(...H)),
      onFocus: D[1] || (D[1] = //@ts-ignore
      (...H) => A(g) && A(g)(...H)),
      onBlur: D[2] || (D[2] = //@ts-ignore
      (...H) => A(m) && A(m)(...H)),
      onKeydown: D[3] || (D[3] = //@ts-ignore
      (...H) => A(y) && A(y)(...H)),
      onCompositionstart: D[4] || (D[4] = //@ts-ignore
      (...H) => A(p) && A(p)(...H)),
      onCompositionend: D[5] || (D[5] = //@ts-ignore
      (...H) => A(F) && A(F)(...H)),
      onPaste: D[6] || (D[6] = //@ts-ignore
      (...H) => A(I) && A(I)(...H)),
      onMousedown: D[7] || (D[7] = //@ts-ignore
      (...H) => A(l) && A(l)(...H)),
      onMouseup: D[8] || (D[8] = //@ts-ignore
      (...H) => A(r) && A(r)(...H))
    }), null, 16, Pu));
  }
}), Cu = ["data-field-id"], Iu = {
  key: 0,
  class: "input-label-group"
}, Au = {
  key: 1,
  class: "password-input-wrapper"
}, Ou = ["aria-label"], Lu = ["disabled", "selected"], Fu = {
  key: 0,
  value: " "
}, $u = ["hidden", "value", "disabled"], Eu = ["id", "name", "value", "disabled"], Tu = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Mu = {
  key: 2,
  class: "help-text"
}, Wn = /* @__PURE__ */ Xe({
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
      const ne = q.label ? Se(q.label) : q.value?.toString();
      return {
        ...q,
        // Translate the label key first, then uppercase the translated result
        label: ne?.toUpperCase() || q.value?.toString().toUpperCase()
      };
    })), H = $(() => ({
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
    })), ee = $(() => (i.text?.select || "SELECT").toUpperCase()), S = $(() => (i.text?.delete || "DELETE").toUpperCase()), R = (q) => {
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
      class: We(["input-wrapper", H.value]),
      "data-field-id": g.value
    }, [
      t.type === "checkbox" ? (L(), j("div", Iu, [
        w("first") ? (L(), Ie(bi, {
          key: 0,
          id: g.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0),
        t.type === "checkbox" ? (L(), Ie(cu, rn({
          key: 1,
          ref: R,
          type: "checkbox"
        }, E.value, {
          value: t.value,
          "onUpdate:value": ne[0] || (ne[0] = (J) => n("update:value", J))
        }), null, 16, ["value"])) : ae("", !0),
        w("last") ? (L(), Ie(bi, {
          key: 2,
          id: g.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0)
      ])) : (L(), j(He, { key: 1 }, [
        w("first") ? (L(), Ie(bi, {
          key: 0,
          id: g.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0),
        t.type === "password" ? (L(), j("div", Au, [
          De(bs, rn({ ref: R }, se.value, {
            name: i.name,
            "input-type": p.value,
            "input-mode": F.value,
            value: V.value,
            "disable-required-validation": t.disableRequiredValidation,
            onValidation: ge,
            "onUpdate:value": re,
            onBlur: $e
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          K("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": r.value ? "Hide password" : "Show password",
            onClick: ne[1] || (ne[1] = (J) => r.value = !r.value)
          }, ue(r.value ? "🙈" : "👁"), 9, Ou)
        ])) : I.value ? (L(), Ie(bs, rn({
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
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (L(), Ie(xu, rn({
          key: 3,
          ref: R
        }, N.value, {
          name: i.name,
          "onUpdate:value": ne[2] || (ne[2] = (J) => n("update:value", J))
        }), {
          default: Ci(() => [
            K("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, ue(ee.value), 9, Lu),
            t.multiEdit ? (L(), j("option", Fu, ue(S.value), 1)) : ae("", !0),
            (L(!0), j(He, null, tt(D.value, (J) => (L(), j("option", {
              key: J.value,
              hidden: J.hidden,
              value: J.value,
              disabled: J.disabled
            }, ue(J.label), 9, $u))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : t.type === "multiselect" ? (L(), Ie(bu, {
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
        }, null, 40, Eu)) : t.type === "textarea" ? (L(), j("textarea", {
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
        }, null, 40, Tu)) : ae("", !0),
        w("last") ? (L(), Ie(bi, {
          key: 7,
          id: g.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : ae("", !0)
      ], 64)),
      t.info ? (L(), j("small", Mu, ue(t.info), 1)) : ae("", !0),
      cs(q.$slots, "default")
    ], 10, Cu));
  }
}), Nu = {
  key: 0,
  class: "action-bar"
}, Bu = { class: "add-custom" }, Vu = ["disabled"], Du = { class: "c-field-action extras-field-group" }, Ru = ["disabled", "title", "onClick"], Gu = {
  key: 0,
  class: "price"
}, ju = /* @__PURE__ */ Xe({
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
    } = wr({
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
      newCustomName: H,
      canAddCustomName: Y,
      isActionMenuDisabled: se,
      customNameActions: E,
      handleAddCustomName: N,
      handleCustomNameAction: ee
    } = Sr({
      extraType: n.extraType,
      customNames: Ot(n, "customNames"),
      usedNames: Ot(n, "usedNames"),
      allowCustomNames: n.allowCustomNames,
      getSelectOptions: y,
      onCustomNameAdded: (q) => i("custom-name-added", n.extraType, q),
      onCustomNameDeleted: (q) => i("custom-name-deleted", n.extraType, q)
    }), {
      renderLocations: S,
      getInputId: R,
      getDeleteConfig: w
    } = kr({
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
    }), re = $(() => (q) => Ai(n.extraType).includes(q) ? zn(q) === "face" : !1), ge = $(() => (q) => Ai(n.extraType).includes(q) ? zn(q) === "side" : !1), $e = $(() => (q) => n.shape.issues?.some((ne) => ne.category?.includes("extras") && ne.field?.some((J) => J[0] === "extras" && J[1] === n.extraType && J[2] === q)) ?? !1);
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
      const J = bn("FontAwesomeIcon");
      return Q.value ? ae("", !0) : (L(), j("div", {
        key: 0,
        class: We(["extras group", [t.extraType]]),
        style: yt({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (L(), j("div", Nu, [
          K("div", Bu, [
            De(bs, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: A(H),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": ne[0] || (ne[0] = (pe) => H.value = pe || ""),
              onKeydown: Uo(A(N), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            K("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !A(Y),
              onClick: ne[1] || (ne[1] = //@ts-ignore
              (...pe) => A(N) && A(N)(...pe))
            }, " Add ", 8, Vu)
          ]),
          De(su, {
            "menu-items": A(E),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: A(se),
            onAction: A(ee)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ae("", !0),
        K("div", {
          class: "inputs extras-grid grid-layout",
          style: yt({ "grid-template-columns": t.enablePricing ? "1fr max-content" : "1fr" })
        }, [
          (L(!0), j(He, null, tt(A(S), (pe) => (L(), j(He, { key: pe }, [
            A(V)(pe) ? (L(), j(He, { key: 0 }, [
              K("div", Du, [
                K("label", {
                  class: We(["extras-location-label", {
                    "group-label": ie.value(pe),
                    "face-label": re.value(pe),
                    "side-label": ge.value(pe),
                    "has-validation-issue": $e.value(pe)
                  }])
                }, ue(A(r)(pe)), 3),
                (L(!0), j(He, null, tt(t.allOptions, (Me, ve) => (L(), Ie(Wn, rn({
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
                ], 8, Ru)) : ae("", !0)
              ]),
              t.enablePricing ? (L(), j("div", Gu, ue(A(p)(pe)), 1)) : ae("", !0)
            ], 64)) : ae("", !0)
          ], 64))), 128))
        ], 4),
        ae("", !0)
      ], 6));
    };
  }
}), ss = /* @__PURE__ */ Xn(ju, [["__scopeId", "data-v-2fe93fb2"]]);
let ft = null;
function qu(t, e) {
  return ft = Uu(t, e), ft;
}
function Za(t) {
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
function _u(t, e) {
  const n = Za(t);
  return n.setItemsPerPage(e), n;
}
function Uu(t, e) {
  const n = /* @__PURE__ */ new Map(), i = Z({}), s = (E, N) => {
    if ("value" in N) {
      const ee = e[E]?.alwaysInclude;
      Ue(
        () => {
          const S = N.value;
          return ee ? S.filter((R) => !ee(R)).length : S.length;
        },
        (S, R) => {
          const w = i.value[E];
          if (!w) return;
          const Q = Math.ceil(S / w.itemsPerPage);
          if (S > R) {
            const ie = Math.ceil(S / w.itemsPerPage), re = w.currentPage * w.itemsPerPage;
            S > re && w.currentPage < ie && (w.currentPage = ie);
          } else S < R && w.currentPage > Q && (w.currentPage = Math.max(1, Q));
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
    const S = o(E);
    ee.currentPage = Math.max(1, Math.min(N, S));
  }, o = (E) => {
    const N = n.get(E);
    if (!N) return 0;
    const ee = A(N), S = i.value[E];
    if (!S) return 0;
    const R = e[E], w = R?.alwaysInclude ? ee.filter((Q) => !R.alwaysInclude(Q)) : ee;
    return Math.max(1, Math.ceil(w.length / S.itemsPerPage));
  }, l = $(() => {
    const E = /* @__PURE__ */ new Map();
    return n.forEach((N, ee) => {
      const S = A(N), R = Array.isArray(S) ? S : [], w = i.value[ee], Q = e[ee], ie = Q?.alwaysInclude ? R.filter(Q.alwaysInclude) : [], re = Q?.alwaysInclude ? R.filter((J) => !Q.alwaysInclude(J)) : R, ge = Math.ceil(re.length / w.itemsPerPage), $e = (w.currentPage - 1) * w.itemsPerPage, q = $e + w.itemsPerPage, ne = [
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
const Wu = {
  key: 0,
  class: "menu pagination"
}, zu = { class: "c-btn-group" }, Hu = { class: "pagination-info font-sm" }, Ku = /* @__PURE__ */ Xe({
  __name: "Pagination",
  props: {
    arrayKey: {},
    disabled: { type: Boolean, default: !1 },
    maxPage: { default: 0 },
    itemsPerPage: { default: 20 }
  },
  setup(t) {
    const e = t, { currentPage: n, totalPages: i, goToPage: s } = _u(e.arrayKey, e.itemsPerPage), a = () => {
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
      const y = bn("FontAwesomeIcon");
      return A(i) > 1 ? (L(), j("div", Wu, [
        K("div", zu, [
          K("button", {
            type: "button",
            class: We(["c-btn first", { disabled: t.disabled || A(n) === 1 }]),
            onClick: a
          }, [
            De(y, { icon: ["fass", "chevrons-left"] }),
            Qe(ue(A(Se)("pagination.first")), 1)
          ], 2),
          K("button", {
            type: "button",
            class: We(["c-btn prev", { disabled: t.disabled || A(n) === 1 }]),
            onClick: o
          }, [
            De(y, { icon: ["fass", "chevron-left"] }),
            Qe(ue(A(Se)("pagination.previous")), 1)
          ], 2),
          K("button", {
            type: "button",
            class: We(["c-btn next", { disabled: t.disabled || A(n) >= A(i) || t.maxPage > 0 && A(n) >= t.maxPage }]),
            onClick: l
          }, [
            Qe(ue(A(Se)("pagination.next")), 1),
            De(y, { icon: ["fass", "chevron-right"] })
          ], 2),
          K("button", {
            type: "button",
            class: We(["c-btn last", { disabled: t.disabled || A(n) >= A(i) || t.maxPage > 0 && A(n) >= t.maxPage }]),
            onClick: r
          }, [
            Qe(ue(A(Se)("pagination.last")), 1),
            De(y, { icon: ["fass", "chevrons-right"] })
          ], 2)
        ]),
        K("div", Hu, ue(A(Se)("pagination.page")) + " " + ue(A(n)) + " / " + ue(A(i)), 1)
      ])) : ae("", !0);
    };
  }
});
function Zu(t) {
  const e = Z({
    key: null,
    function: null,
    sortingKey: null,
    definition: null
  }), n = Z("asc"), i = Z(!1), s = (l, r) => l == null && r == null ? 0 : l == null ? 1 : r == null ? -1 : typeof l == "string" && typeof r == "string" ? l.localeCompare(r) : typeof l == "number" && typeof r == "number" ? l - r : String(l).localeCompare(String(r)), a = (l) => typeof l == "function" ? (e.value = { ...e.value, function: l, key: null, sortingKey: null }, l) : typeof l == "string" && l in wi ? (e.value = { ...e.value, sortingKey: l, key: null, function: null }, wi[l]) : Array.isArray(l) ? (e.value = { ...e.value, definition: l, key: null, function: null, sortingKey: null }, vl(l)) : (e.value = { ...e.value, key: l, function: null, sortingKey: null }, (r, g) => {
    const m = r[l], y = g[l];
    return s(m, y);
  });
  return {
    sort: (l) => {
      const r = typeof l == "function" && l === e.value.function || typeof l == "string" && l in wi && l === e.value.sortingKey || Array.isArray(l) && JSON.stringify(l) === JSON.stringify(e.value.definition) || l === e.value.key;
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
const Ju = (t) => ![
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
].includes(t), Yu = { class: "label" }, Xu = { class: "c-btn-group" }, Qu = ["onClick"], ed = ["onClick"], td = ["onClick"], nd = /* @__PURE__ */ Xe({
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
    const e = t, { sort: n, key: i, direction: s, sortingKey: a, sortFn: o } = Zu(e.list), l = (m) => m.replace(/([A-Z])/g, " $1").replace(/^./, (y) => y.toUpperCase()).trim(), r = (m) => m.replace(/([A-Z])/g, " $1").replace(/^./, (y) => y.toUpperCase()).trim(), g = (m) => {
      e.disabled || n(m);
    };
    return (m, y) => {
      const p = bn("FontAwesomeIcon");
      return L(), j("div", {
        class: We(["menu sorting", { disabled: t.disabled }])
      }, [
        K("div", Yu, ue(e.label), 1),
        K("div", Xu, [
          (L(!0), j(He, null, tt(t.sortKeys, (F) => (L(), j("button", {
            type: "button",
            key: F.key,
            class: We(["c-btn", {
              selected: A(a) === F.key
            }]),
            onClick: (I) => g(F.key)
          }, [
            A(a) === F.key && A(Ju)(F.key) ? (L(), Ie(p, {
              key: 0,
              icon: ["fass", A(s) === "asc" ? "chevron-up" : "chevron-down"]
            }, null, 8, ["icon"])) : ae("", !0),
            Qe(" " + ue(F.label || l(F.key)), 1)
          ], 10, Qu))), 128)),
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
          ], 10, ed))), 128)),
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
          ], 10, td))), 128))
        ])
      ], 2);
    };
  }
}), id = {
  key: 1,
  class: "active-stock-info"
}, sd = {
  key: 0,
  style: { color: "grey" }
}, ad = ["onMousedown"], od = {
  key: 0,
  class: "stack font-sm"
}, ld = { class: "name" }, rd = /* @__PURE__ */ Xe({
  __name: "Navigation",
  props: {
    useStack: { type: Boolean, default: !0 },
    display: { type: Boolean, default: !0 },
    flipY: { type: Boolean, default: !1 },
    showSorting: { type: Boolean, default: !0 }
  },
  emits: ["show"],
  setup(t, { emit: e }) {
    const { r: n, stackedStock: i, activeStock: s } = Fi(), { items: a } = Za("stockList"), o = mn(() => import("./Diagram-iPQ0pOgP.js")), l = mn(() => import("./StockNavigation-BwhonOO-.js")), r = Z(null), g = Z(null), m = Z(null), y = t, p = Z(0), { stop: F } = ba(r, Wo((Y) => {
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
    }, D = e, H = (Y) => {
      D("show", Y);
    };
    return Yn(() => F()), (Y, se) => y.display ? (L(), j("div", {
      key: 0,
      id: "navigation",
      ref_key: "navigationRef",
      ref: r
    }, [
      y.showSorting ? (L(), Ie(nd, {
        key: 0,
        list: A(n).stockList,
        label: "Sort stock",
        "object-keys": [{ key: "id", label: "ID" }, { key: "l", label: "Length" }, { key: "w", label: "Width" }]
      }, null, 8, ["list"])) : ae("", !0),
      A(s) ? (L(), j("div", id, [
        Qe(ue(I.value) + " ", 1),
        A(s).code ? (L(), j("div", sd, ue(A(s).code), 1)) : ae("", !0)
      ])) : ae("", !0),
      p.value <= 900 ? (L(), Ie(A(l), {
        key: 2,
        ref_key: "stockNavigationRef",
        ref: g,
        "stock-list": A(i),
        embed: !1,
        "use-stack": y.useStack,
        "active-stock-id": A(n).activeStockAutoId.value,
        onShowStock: H
      }, null, 8, ["stock-list", "use-stack", "active-stock-id"])) : ae("", !0),
      p.value > 900 ? (L(), j("div", {
        key: 3,
        id: "navigation-wrapper",
        style: yt({ gridTemplateColumns: `repeat(${V.value}, 1fr)` })
      }, [
        (L(!0), j(He, null, tt(A(a), (E, N) => (L(), j("div", {
          key: E.autoId,
          onMousedown: (ee) => H(E.autoId),
          class: We({ selected: E.autoId === A(n).activeStockAutoId.value })
        }, [
          typeof E?.stack?.number == "number" && E.stack.number > 1 ? (L(), j("div", od, ue(E.stack.number), 1)) : ae("", !0),
          De(A(o), {
            "element-id": `nav-diagram-${N}`,
            main: !1,
            "stock-auto-id": E.autoId,
            "flip-y": y.flipY
          }, null, 8, ["element-id", "stock-auto-id", "flip-y"]),
          K("div", ld, ue(M(E)), 1)
        ], 42, ad))), 128))
      ], 4)) : ae("", !0),
      p.value > 900 ? (L(), Ie(Ku, {
        key: 4,
        ref_key: "paginationRef",
        ref: m,
        "array-key": "stockList",
        "items-per-page": 10
      }, null, 512)) : ae("", !0)
    ], 512)) : ae("", !0);
  }
}), cd = {
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
}, ud = { id: "spinner" }, dd = ["width", "height"], fd = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function pd(t, e, n, i, s, a) {
  return L(), j("div", ud, [
    n.complete ? ae("", !0) : (L(), j("svg", {
      key: 0,
      class: "loading",
      style: yt({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      zo('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, dd)),
    n.complete ? (L(), j("svg", {
      key: 1,
      class: "complete",
      style: yt({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      K("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : ae("", !0),
    n.showNumber ? (L(), j("div", fd, ue(n.number), 1)) : ae("", !0)
  ]);
}
const da = /* @__PURE__ */ Xn(cd, [["render", pd]]), gd = { id: "mini-stock-nav" }, hd = ["onMousedown"], md = { class: "id" }, vd = /* @__PURE__ */ Xe({
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
    return (a, o) => (L(), j("div", gd, [
      (L(!0), j(He, null, tt(n.stockList, (l, r) => (L(), j("button", {
        type: "button",
        key: r,
        class: We(["c-btn c-btn--col-4 c-btn--sm", { selected: l.autoId === n.activeStockId }]),
        style: yt({
          backgroundColor: l.autoId === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
        }),
        onMousedown: (g) => s(l.autoId)
      }, [
        K("div", md, ue(r + 1), 1),
        ys(K("div", { class: "stack" }, ue(l.stack.number), 513), [
          [wa, typeof l?.stack?.number == "number" && l.stack.number > 1]
        ])
      ], 46, hd))), 128))
    ]));
  }
}), fa = Z({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Ja() {
  return {
    progress: fa,
    reset: () => {
      fa.value = {
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
const bd = Jl(() => z({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: Wt(
    de().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: Wt(
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
  t: Wt(
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
  l: Bs({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Bs({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: Wt(
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
  name: bl({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: Wt(
    Gt(["n", "l", "w"]).default("n").optional(),
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
  banding: Wt(
    de().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: Wt(
    z({
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
  machining: Wt(
    z({
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
  planing: Wt(
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
function yd(t) {
  const e = bd._def.getter();
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
class wd {
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
    if (n instanceof qs) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof pi)
          return this.isIntegerNumber(s) ? "integer" : "number";
    }
    return n instanceof pi ? this.isIntegerNumber(n) ? "integer" : "number" : n instanceof Yl ? "string" : n instanceof Xl ? "boolean" : n instanceof _s || n._def?.typeName === "ZodNativeEnum" ? "enum" : n instanceof Ql ? "array" : n instanceof gi ? "object" : "string";
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
    if (n instanceof qs) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof pi) {
          this.extractNumberConstraints(e, s), e.type = "number";
          break;
        }
    } else n instanceof pi && this.extractNumberConstraints(e, n);
    if (!e.options) {
      if (n instanceof _s) {
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
    if (e instanceof Qi || e instanceof es)
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
    return e._def?.typeName === "ZodEffects" ? this.isOptional(e._def?.schema) : e instanceof ts ? this.isOptional(e._def?.innerType) : !1;
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
    if (e instanceof Qi || e instanceof es)
      return this.unwrapField(e._def?.innerType);
    if (e instanceof ts || i === "ZodDefault")
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
    if (e instanceof ts) {
      const n = e._def?.defaultValue;
      return typeof n == "function" ? n() : n;
    }
    if (e.constructor?.name === "ZodPipe" || e._def?.type === "pipe") {
      const n = e._def?.in;
      if (n)
        return this.getDefaultValue(n);
    }
    if (e instanceof Qi || e instanceof es) {
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
    return e instanceof gi;
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
    if (n instanceof gi) {
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
    if (!(i instanceof gi))
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
const pa = new wd();
function Sd(t, e = {}) {
  const n = Z([]), i = Z([]), s = Z(/* @__PURE__ */ new Map()), a = Z(/* @__PURE__ */ new Map()), o = (F) => {
    let I = pa.generateFields(t);
    e.overrides && (I = I.map((M) => {
      const D = e.overrides[M.name];
      if (D) {
        const H = { ...M, ...D };
        return D.min === void 0 && M.min !== void 0 && (H.min = M.min), D.max === void 0 && M.max !== void 0 && (H.max = M.max), H;
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
      const H = [];
      for (const Y of M) {
        const se = D.get(Y);
        se && H.push(se);
      }
      I = H;
    }
    e.filter && (I = I.filter(e.filter)), n.value = I, s.value.clear();
    for (const M of I)
      s.value.set(M.name, M);
    e.grouped && (i.value = pa.groupFields(I));
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
function kd(t) {
  const { stockType: e, materials: n = [], minDimension: i = 0 } = t, s = yd(e), a = {
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
  }), Sd(s, {
    ...t,
    overrides: { ...a, ...t.overrides }
  });
}
const { progress: zt, reset: ga } = Ja();
function xd(t) {
  const e = "https://api.cutlistevo.com/";
  let n;
  const i = () => {
    n = er(e, {
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
      zt.value.complete = !0, t.callbacks?.onResult?.(o), n.disconnect();
    }), n.on("queued", () => {
      ga(), zt.value.queued = !0;
    }), n.on("started", () => {
      zt.value.started = !0;
    }), n.on("progress", (o) => {
      o?.data?.message === "result" ? zt.value.resultCount++ : (zt.value.stockCount = o.data.stockCount, zt.value.shapeCount = o.data.shapeCount), o?.data?.phase && (zt.value.phase = o.data.phase), o?.data?.placed !== void 0 && (zt.value.placed = o.data.placed, zt.value.total = o.data.total);
    }), n.on("user", (o) => {
      t.callbacks?.onUser?.(o);
    }), n.on("error", (o) => {
      t.refs?.thinking && (t.refs.thinking.value = !1), ga(), t.callbacks?.onError?.(o);
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
class Ss {
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
const Zt = z({
  min: _().min(0).optional(),
  max: _().min(0).optional()
}).optional(), Pd = z({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: v().min(1),
  // Dimension constraints for this location
  longSide: Zt,
  shortSide: Zt,
  t: Zt,
  // Formula-based validation
  formula: v().optional(),
  // Custom message for this location
  message: v().optional()
}), as = z({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: Zt,
  shortSide: Zt,
  t: Zt,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: v().optional(),
  // Custom validation message (optional)
  message: v().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: fe(Pd).optional()
}), Cd = z({
  banding: as.optional(),
  finish: as.optional(),
  planing: as.optional()
}).optional();
function Id(t, e) {
  try {
    const n = new Ss({}), i = n.parse(t);
    return !!n.evaluate(i, {
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0,
      t: e.t || 0
    });
  } catch (n) {
    return console.warn("Formula evaluation error:", n, "Formula:", t), !0;
  }
}
function Ad(t, e, n) {
  const i = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : "short side", s = t.constraint === "min" ? "minimum" : "maximum";
  return `${t.location ? `${t.location}: ` : ""}${e.charAt(0).toUpperCase() + e.slice(1)} requires ${i} ${s} of ${t.limit} (current: ${t.value})`;
}
function Od(t, e, n) {
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
function Ld(t, e, n, i) {
  const { rule: s, message: a, source: o } = Od(e, n, i), l = [], r = (m, y, p) => {
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
  return isNaN(g) || r("t", g, s.t), s.formula && (Id(s.formula, {
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
z({
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
  saw: Sl("Saw").describe("Saw configuration"),
  stockList: en("Stock").default([]).describe("List of stock materials"),
  shapeList: Wi(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: en("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: en("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: en("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Wi(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Wi(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: wl,
  // Results storage
  cutList: en("Cut").default([]).describe("List of cuts to make"),
  segmentList: en("Segment").default([]).describe("List of segments"),
  offcuts: en("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: en("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: de().default(!1).describe("Use inventory system"),
  successMetric: v().default(kl.successMetric).describe("Metric for optimization success"),
  enableEvo: de().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Oe(v(), Pe()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: Pe().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: Pe().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: z({
    placement: _().default(0),
    group: _().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: de().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: de().default(!1).describe("Run guillotine second pass"),
  runningEvo: de().default(!1).describe("Currently running evolution"),
  evolutionVisData: fe(Oe(v(), tr())).default([]).describe("Evolution visualization data"),
  final: de().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: de().default(!1).describe("Has minimum spacing requirement")
});
const Fd = Gt(["decimal", "fraction"]), $d = z({
  job: Pe().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: En.extend({ autoId: v().optional(), __entityType: v().optional() }),
  inputShapes: fe(Tn.extend({ autoId: v().optional(), __entityType: v().optional() })),
  inputStock: fe(vn.extend({ autoId: v().optional(), __entityType: v().optional() })),
  inputUserGroups: fe(yl.extend({ autoId: v().optional(), __entityType: v().optional() })).optional(),
  // Number format for conversion
  numberFormat: Fd.optional(),
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
  extrasOptions: z({
    banding: z({
      options: z({
        sides: Oe(v(), fe(v())).optional()
      }).optional()
    }).optional(),
    finish: z({
      options: z({
        faces: Oe(v(), fe(v())).optional()
      }).optional()
    }).optional(),
    planing: z({
      options: z({
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
z({
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
const { addNotice: Fn } = Va();
let os = null;
function Ed() {
  return os || (os = Ba()), os;
}
function ha(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function Td(t) {
  const e = t.t, n = [];
  try {
    const { inputs: i, validateInputShapes: s, validateInputStock: a } = Ed(), o = t.inputShapes ?? i.inputShapes.value, l = t.inputStock ?? i.inputStock.value, r = t.inputUserGroups ?? i.inputUserGroups?.value ?? [], g = ha(o), m = ha(l);
    if (g.forEach((M) => M.isNew = !1), m.forEach((M) => M.isNew = !1), !t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const M = g.reduce((H, Y) => H + (Y.q || 1), 0), D = m.reduce((H, Y) => H + (Y.q || 1), 0);
      if (M > t.maxShapes || D > t.maxStock)
        return Fn({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: n };
    }
    if (!g.length)
      return Fn({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: n };
    if (!t.useInventory && !m.length)
      return Fn({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: n };
    let y;
    if (t.useInventory && t.selectedSaw)
      y = t.selectedSaw;
    else if (t.inputSaw instanceof Ht) {
      const M = t.inputSaw.validate();
      n.push(...M), y = t.inputSaw.toData();
    } else {
      y = t.inputSaw;
      const M = new Aa(y);
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
      const M = xl(r, g);
      n.push(...M);
    }
    await Nd(g, t, n);
    const F = us(n);
    if (F.length > 0) {
      const M = {
        saw: F.filter((D) => D.category?.includes("saw")),
        stock: F.filter((D) => D.category?.includes("stock")),
        part: F.filter((D) => D.category?.includes("part") && !D.category?.includes("extras")),
        extras: F.filter((D) => D.category?.includes("extras")),
        group: F.filter((D) => D.category?.includes("group"))
      };
      for (const [D, H] of Object.entries(M))
        if (H.length > 0) {
          Fn({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: D }),
            additional: H.map((Y) => e(Y.message))
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
    }, V = $d.safeParse(I);
    return V.success ? {
      valid: !0,
      issues: n,
      sawData: y
    } : (console.error("[Validation] Zod validation failed:", V.error.issues), Fn({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: V.error.issues.map((M) => `${M.path.join(".")}: ${M.message}`)
    }), { valid: !1, issues: n });
  } catch (i) {
    return console.error("[Validation] error:", i), Fn({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [i?.message ?? ""]
    }), { valid: !1, issues: n };
  }
}
function Md(t, e) {
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
async function Nd(t, e, n) {
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
      if (e.extrasValidationRules && Pl.hasExtras(s, a)) {
        const m = e.extrasValidationRules?.[a], y = e.extrasLocationGroups?.[a], p = m?.locations && m.locations.length > 0, F = y?.some((I) => I.rules);
        if (p || F) {
          const I = Md(s, a), V = (y || []).map((H) => ({
            id: H.id,
            locations: H.locations,
            rules: H.rules
          })), M = m || {}, D = /* @__PURE__ */ new Set();
          for (const H of I) {
            const Y = Ld(
              s,
              M,
              H,
              V
            );
            if (!Y.valid) {
              if (Y.source === "group") {
                const se = V.find(
                  (E) => E.rules && E.locations.includes(H)
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
                  field: [["extras", a, H]],
                  shouldTranslate: !1
                });
                n.push(se);
              } else
                Y.violations.forEach((se) => {
                  const E = Ad(se, a), N = new Dt({
                    item: s,
                    category: ["part", "extras"],
                    message: E,
                    field: [["extras", a, H]],
                    shouldTranslate: !1
                  });
                  n.push(N);
                });
            }
          }
        } else {
          const I = Cl(s, a, e.extrasValidationRules);
          I.valid || I.violations.forEach((V) => {
            const M = Il(a, V, I.message);
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
      const r = Al(s, a, l, e.findExtrasPrice);
      r.valid || r.incompleteLocations.forEach((g) => {
        n.push(new Dt({
          item: s,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: Ol(g, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, g]]
        }));
      });
    }
}
const Bd = new Ss({});
function Vd(t) {
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
function Dd(t, e) {
  const n = [], i = t.filter((s) => s.enabled !== !1);
  for (let s = 0; s < e.length; s++) {
    const a = e[s], o = Vd(a);
    for (const l of i)
      try {
        Bd.evaluateExpression(l.formula, o) || n.push({
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
const Rd = z({
  longSide: Zt,
  shortSide: Zt,
  t: Zt,
  formula: v().optional(),
  message: v().optional()
}).optional(), xi = z({
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
  rules: Rd
}), Gd = z({
  banding: fe(xi).optional(),
  finish: fe(xi).optional(),
  planing: fe(xi).optional()
}).optional(), jd = Gt(["decimal", "fraction"]), qd = Gt(Fl), ma = _e([
  Rt(0),
  Rt(1),
  Rt(2)
]).catch(0), _d = z({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: v().optional(),
  partB: v().optional(),
  partSelected: v().optional(),
  stock: v().optional(),
  text: v().optional(),
  // Checkout-specific colors
  button: v(),
  buttonText: v()
}), st = (t) => Hn((e) => e ?? t, de()), Ud = z({
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
}), Wd = z({
  // Localization
  locale: v().default("en-US"),
  currency: v().default("USD"),
  apiVersion: _().min(2).default(3),
  // Number formatting
  numberFormat: jd.default("decimal"),
  decimalPlaces: _().min(0).max(10).default(2),
  fractionRoundTo: _().default(0),
  // Stock configuration
  stockSelection: qd.optional(),
  stockGrain: Ll.optional(),
  // Part configuration
  minSpacing: La.optional(),
  maxParts: _().min(0).default(0),
  orientationModel: ma.default(0),
  resultOrientationModel: ma.default(0),
  minDimension: _().min(0).default(0),
  partTrim: Hn((t) => t ?? void 0, _().min(0).optional()),
  partsPerPage: Hn((t) => t ?? void 0, _().min(1).default(10)),
  // UI configuration
  debug: de().default(!1),
  enable: Ud.optional(),
  colors: _d.optional(),
  // Custom fields
  customFields: fe(Pe()).optional(),
  fieldOrder: Hn((t) => t ?? void 0, fe(v()).optional()),
  // Extras location filtering
  bandingLocations: fe(zi).optional(),
  finishLocations: fe(zi).optional(),
  planingLocations: fe(zi).optional(),
  // Extras location groups
  extrasLocationGroups: Gd,
  // Extras validation rules
  extrasValidationRules: Cd
}), Un = z({
  min: _().min(0).nullable().optional(),
  max: _().min(0).nullable().optional()
}).nullable().optional(), zd = z({
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: Un,
  shortSide: Un,
  // Direct dimension constraints (as stored by admin panel)
  l: Un,
  w: Un,
  t: Un,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: z({
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
function Hd(t, e) {
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
  return e.formula && (Kd(e.formula, {
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
function Kd(t, e) {
  try {
    const n = new Ss({}), i = n.parse(t);
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
function Zd(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, n = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${n} of ${t.limit} (current: ${t.value})`;
}
Gt([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const Jd = Oe(
  v(),
  _().min(0)
).default({}), Yd = z({
  banding: v().optional(),
  finish: v().optional(),
  planing: v().optional(),
  machining: v().optional()
}).optional(), Xd = z({
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
  extras: Yd
}), ls = z({
  labels: fe(v()).default([]),
  pricing: Oe(v(), _().min(0)).default({}),
  options: Pe().optional(),
  keys: fe(v()).optional(),
  // if not all the default keys should be set
  locations: fe(v()).optional(),
  // available locations for this extras type
  groups: fe(xi).optional(),
  // custom location groups
  rules: Pe().optional(),
  // validation rules for this extras type
  displayNames: Oe(v(), v()).optional()
  // slug key → product name for dropdown display
});
z({
  success: de(),
  price: _().optional(),
  error: v().optional(),
  cacheHit: de().optional()
});
z({
  valid: de(),
  errors: fe(v()),
  warnings: fe(v())
});
z({
  pricing: Jd,
  labels: fe(v()),
  options: fe(fe(v())),
  // Simplified to string arrays only
  keys: fe(v()),
  maxLevels: _().min(1)
});
z({
  enableCaching: de().default(!0),
  enableLogging: de().default(!1),
  maxCacheSize: _().min(1).default(1e3)
});
const Ya = Gt(["select", "multiselect", "range", "boolean", "search"]), Xa = Gt(["asc", "desc"]), Qa = Gt(["grid", "list"]), yi = z({
  _id: v(),
  name: v(),
  labels: fe(v()).optional(),
  pricing: Oe(v(), _()).optional(),
  price: _().optional()
}), Qd = z({
  banding: yi.optional(),
  finish: yi.optional(),
  planing: yi.optional(),
  machining: yi.optional()
}).optional(), ef = z({
  enabled: de(),
  price: _(),
  description: v().optional(),
  maxQuantity: _().optional()
}).optional(), tf = z({
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
  extras: Qd.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: ef.describe("Sample ordering configuration"),
  // UI metadata
  minQuantity: _().int().positive().nullable().optional().describe("Minimum order quantity")
});
vn.merge(tf).describe("Stock option with filtering and display metadata");
const nf = z({
  field: v().describe("Property name to filter on"),
  type: Ya,
  label: v().describe("Display label"),
  custom: de().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: _().nullable().optional().describe("Minimum value for range filter"),
  max: _().nullable().optional().describe("Maximum value for range filter"),
  step: _().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: fe(z({
    label: v(),
    value: Pe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: de().default(!0).describe("Whether filter is visible"),
  collapsible: de().default(!0).describe("Whether filter panel is collapsible"),
  order: _().int().nullable().optional().describe("Display order")
}), sf = z({
  field: v().describe("Field to sort by"),
  order: Xa,
  label: v().optional().describe("Display label for sort option")
}), ks = z({
  // Filter configuration
  availableFilters: fe(nf).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: fe(v()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: sf.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Qa.default("grid").describe("Default display mode"),
  itemsPerPage: _().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: de().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: de().default(!0).describe("Allow multiple stock selection"),
  maxSelection: _().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), af = z({
  field: v(),
  value: Pe(),
  type: Ya
});
z({
  // Active filters
  activeFilters: fe(af).default([]).describe("Currently active filters"),
  // Search
  searchQuery: v().default("").describe("Current search query"),
  // Sort
  sortBy: v().default("cost").describe("Current sort field"),
  sortOrder: Xa.default("asc").describe("Current sort order"),
  // Display
  displayMode: Qa.default("grid").describe("Current display mode"),
  currentPage: _().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: fe(v()).default([]).describe("IDs of selected stock items")
});
function Zp() {
  return ks.parse({});
}
const eo = z({}).passthrough(), to = z({
  l: _(),
  w: _(),
  t: _().nullable(),
  q: _(),
  stockId: v()
}), no = El.partial(), io = z({
  holes: fe(z({
    x: _(),
    y: _(),
    diameter: _(),
    depth: _().optional(),
    face: _().optional(),
    type: v().optional()
  })).optional(),
  hingeHoles: fe(z({
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
  corners: fe(z({
    index: _(),
    type: v().nullable().optional(),
    size: _().nullable().optional()
  })).optional()
}), so = z({
  bladeWidth: _().optional(),
  cutType: v().optional(),
  cutPreference: v().optional(),
  stackHeight: _().optional()
}), of = z({
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  orientationLock: Fa.nullable(),
  q: _(),
  name: v().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Oe(v(), _e([v(), de()])).nullable().optional(),
  finish: Oe(v(), _e([v(), de()])).nullable().optional(),
  planing: Oe(v(), _e([v(), de()])).nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
}), lf = z({
  id: v(),
  name: v().nullable(),
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  q: _(),
  trim: z({
    x1: _(),
    x2: _(),
    y1: _(),
    y2: _()
  }).nullable().optional(),
  cost: _().nullable().optional(),
  db_id: v().nullable().optional(),
  code: v().nullable().optional(),
  analysis: no.nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
}), rf = z({
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
  extras: z({
    banding: z({
      sides: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    finish: z({
      faces: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    planing: z({
      sides: Oe(v(), _e([v(), de()])).optional(),
      faces: Oe(v(), _e([v(), de()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: io.optional(),
  stock: z({
    db_id: v().optional(),
    code: v().optional(),
    material: v().optional(),
    thickness: _().optional()
  }).nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
});
z({
  jobId: _(),
  metadata: $a.optional(),
  parts: fe(of),
  stock: fe(lf),
  offcuts: fe(to),
  inputs: z({
    parts: fe(rf),
    saw: so.optional()
  }),
  apiResultV3: eo.optional()
});
const cf = z({
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  orientationLock: Fa.nullable(),
  q: _(),
  name: v().nullable(),
  // V3 format: nested extras structure
  extras: z({
    banding: z({
      sides: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    finish: z({
      faces: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    planing: z({
      sides: Oe(v(), _e([v(), de()])).optional(),
      faces: Oe(v(), _e([v(), de()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Oe(v(), Pe()).nullable().optional()
}), uf = z({
  id: v(),
  name: v().nullable(),
  l: _(),
  w: _(),
  t: _().nullable(),
  material: v().nullable(),
  q: _(),
  trim: z({
    l1: _().optional(),
    l2: _().optional(),
    w1: _().optional(),
    w2: _().optional()
  }).nullable().optional(),
  cost: _().nullable().optional(),
  db_id: v().nullable().optional(),
  code: v().nullable().optional(),
  analysis: no.nullable().optional(),
  // New stock fields
  color: Tl.nullable(),
  weight: _().positive().nullable().optional(),
  imageUrl: v().nullable().optional(),
  tags: fe(v()).nullable().optional(),
  available: de().nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
}), df = z({
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
  extras: z({
    banding: z({
      sides: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    finish: z({
      faces: Oe(v(), _e([v(), de()]))
    }).nullable().optional(),
    planing: z({
      sides: Oe(v(), _e([v(), de()])).optional(),
      faces: Oe(v(), _e([v(), de()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: io.optional(),
  stock: z({
    db_id: v().optional(),
    code: v().optional(),
    material: v().optional(),
    thickness: _().optional()
  }).nullable().optional(),
  customData: Oe(v(), Pe()).nullable().optional()
});
z({
  jobId: _(),
  metadata: $a.optional(),
  parts: fe(cf),
  stock: fe(uf),
  offcuts: fe(to),
  inputs: z({
    parts: fe(df),
    saw: so.optional()
  }),
  apiResultV3: eo.optional()
});
function ao(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: t?.stock?.id || t?.stock?.parentId || ""
  };
}
function oo(t) {
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
const ff = z({
  stockSelection: jl.optional(),
  stackingMode: Gl.optional(),
  minSpacing: La.optional()
}).optional(), pf = z({
  stockType: Gt([...ds]).optional(),
  bladeWidth: _e([
    Rl,
    v()
  ]).optional(),
  cutType: Dl,
  cutPreference: Vl,
  stackHeight: Bl,
  guillotineOptions: Nl,
  efficiencyOptions: Ml.optional(),
  options: ff
}).optional(), gf = z({
  holes: _().min(0).nullable().optional(),
  corners: _().min(0).nullable().optional()
}).optional(), hf = Tn.pick({
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
  banding: Ul.nullable().optional(),
  finish: _l.nullable().optional(),
  planing: ql.nullable().optional(),
  stockId: v().nullable().optional()
}), mf = z({
  stock: fe(vn).default([]),
  parts: fe(hf).optional(),
  options: Wd,
  type: v().optional(),
  // variable | simple
  materials: fe(Xd).optional(),
  banding: ls.nullable().optional(),
  finish: ls.nullable().optional(),
  planing: ls.nullable().optional(),
  machining: Pe().optional(),
  machiningPricing: gf,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: Pe().optional(),
  partRules: zd.optional(),
  customValidation: z({
    enabled: de(),
    rules: fe(Pe())
  }).optional(),
  saw: pf,
  stockFilter: z({
    enabled: de().optional(),
    serverMode: de().optional(),
    config: ks.optional()
  }).optional(),
  // Product catalog configuration
  products: z({
    enabled: de().optional(),
    showCategories: de().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: z({
    baseUrl: v(),
    orgSlug: v(),
    isCustomDomain: de().optional()
  }).optional(),
  // Admin configuration (formula pricing, etc.)
  config: z({
    formulaPricing: z({
      enabled: de(),
      url: v().nullable().optional(),
      spec: Pe().nullable().optional()
    }).optional()
  }).optional()
});
z({
  slug: v().optional(),
  company: z({
    name: v(),
    contactEmail: v(),
    phone: v().optional(),
    address: v().optional()
  }),
  branding: z({
    logo: v().optional(),
    favicon: v().optional(),
    colors: z({
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
  config: z({
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
    shipping: z({
      enabled: de(),
      originCountry: v().optional()
    }).optional(),
    stockFilter: z({
      config: ks.optional()
    }).optional(),
    partRules: Pe().optional(),
    customFields: fe(Pe()).optional(),
    termsUrl: v().optional(),
    termsContent: v().optional(),
    tracking: z({
      gaMeasurementId: v().optional(),
      gtmContainerId: v().optional()
    }).optional(),
    customValidation: z({
      enabled: de(),
      rules: fe(Pe())
    }).optional(),
    importSettings: z({
      grouping: Gt(["material", "material-variant", "auto"]).optional(),
      codeRegex: v().optional()
    }).optional()
  }),
  stripe: z({
    enabled: de(),
    publishableKey: v().optional(),
    currency: v().optional()
  }).optional()
});
function vf(t) {
  const e = mf.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function bf(t) {
  const e = vf(t);
  if (!e.success) {
    const n = e.error?.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", n), new Error(`Invalid checkout data: ${n}`);
  }
  return e.data;
}
function Nt(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function yf(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, n = {};
    if (ze(e.a) || ze(e.b) || ze(e.c) || ze(e.d))
      n.x1 = ze(e.a) ? Nt(e.a) : !1, n.y1 = ze(e.b) ? Nt(e.b) : !1, n.x2 = ze(e.c) ? Nt(e.c) : !1, n.y2 = ze(e.d) ? Nt(e.d) : !1;
    else {
      const s = ms(e);
      n.x1 = ze(s.x1) ? Nt(s.x1) : !1, n.x2 = ze(s.x2) ? Nt(s.x2) : !1, n.y1 = ze(s.y1) ? Nt(s.y1) : !1, n.y2 = ze(s.y2) ? Nt(s.y2) : !1;
    }
    t.banding = n;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, n = {};
    n.a = ze(e.a) ? Nt(e.a) : !1, n.b = ze(e.b) ? Nt(e.b) : !1, t.finish = n;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, n = {}, i = ms(e.sides || {});
    e.sides && (ze(i.x1) && (n.x1 = i.x1), ze(i.x2) && (n.x2 = i.x2), ze(i.y1) && (n.y1 = i.y1), ze(i.y2) && (n.y2 = i.y2)), e.faces && (ze(e.faces.a) && (n.a = e.faces.a), ze(e.faces.b) && (n.b = e.faces.b)), Object.keys(n).length > 0 && (t.planing = n);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function wf(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const n = Math.max(t.l, t.w), i = Math.min(t.l, t.w);
    t.w > t.l && (t.l = n, t.w = i);
  }
  return t;
}
function lo(t, e = 0) {
  debugger;
  return e === 0 || t.forEach((n) => wf(n, e)), t;
}
function ro(t) {
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
function Sf(t, e, n, i, s, a, o, l) {
  const r = oo(i), g = e.map((p) => {
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
      banding: Lr(),
      finish: Oi(),
      planing: $r()
    }, I = { ...p };
    return yf(I), I.banding && (F.banding = I.banding), I.finish && (F.finish = I.finish), I.planing && (F.planing = I.planing), F;
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
    return p?.trim && (F.trim = ms(p.trim)), F;
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
      const I = ro(p);
      return I && (F.machining = I), F;
    })
  };
  return l && lo(g, l), {
    jobId: t,
    metadata: o,
    parts: g,
    stock: m,
    offcuts: s?.map(ao) || [],
    inputs: y
  };
}
function kf(t, e, n, i, s, a, o, l) {
  const r = oo(i), g = e.map((p) => {
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
        banding: { sides: hs() },
        finish: { faces: Oi() },
        planing: Fr()
      }
    };
    return p.extras && (p.extras.banding?.sides && (F.extras.banding = { sides: p.extras.banding.sides }), p.extras.finish?.faces && (F.extras.finish = { faces: p.extras.finish.faces }), p.extras.planing && (F.extras.planing = {
      sides: p.extras.planing.sides || hs(),
      faces: p.extras.planing.faces || Oi()
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
      const I = ro(p);
      return I && (F.machining = I), F;
    })
  };
  return l && lo(g, l), {
    jobId: t,
    metadata: o,
    parts: g,
    stock: m,
    offcuts: s?.map(ao) || [],
    inputs: y
  };
}
const xf = ["id", "data-index"], Pf = /* @__PURE__ */ Xe({
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
      const g = fr(
        n.orientationModel,
        n.stockGrain,
        n.inputShape
      );
      g && (r = Ea(r, g)), s.value = r;
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
    }), Yn(() => {
      document.getElementById(n.id)?.removeEventListener("keydown", o);
    }), (r, g) => (L(), j("div", {
      id: t.id,
      class: We(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: l
    }, [
      K("div", {
        class: We(["outer", {
          l1: s.value.l1,
          l2: s.value.l2,
          w1: s.value.w1,
          w2: s.value.w2
        }])
      }, [...g[0] || (g[0] = [
        K("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, xf));
  }
}), Cf = ["id", "data-index", "disabled"], If = /* @__PURE__ */ Xe({
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
      const g = bn("FontAwesomeIcon");
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
      ], 10, Cf);
    };
  }
});
function Af(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function Of(t) {
  const e = Af(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((n) => n && n.type && n.size > 0)) : !1;
}
const Lf = Xe({
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
      return Of(this.inputShape);
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
}), Ff = ["id", "disabled"];
function $f(t, e, n, i, s, a) {
  const o = bn("FontAwesomeIcon");
  return L(), j("button", {
    id: t.id,
    class: We(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...l) => t.openMachining && t.openMachining(...l))
  }, [
    De(o, { icon: ["fass", "hammer"] })
  ], 10, Ff);
}
const Ef = /* @__PURE__ */ Xn(Lf, [["render", $f]]), Tf = ["id"], Mf = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Nf = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Bf = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Vf = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, Df = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, Rf = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Gf = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, va = /* @__PURE__ */ Xe({
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
    const n = t, i = e, s = Z(0), a = Z(!1), o = (S, R, w, Q) => {
      if (!Re(w) || R === 0)
        return S;
      const ie = l();
      return R === 1 || R === 2 && Q !== "n" && S ? ie : S;
    }, l = (S) => {
      const R = { ...n, ...S };
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
      const S = g(Y.value);
      "multiEdit" in n.rectangle && n.rectangle.multiEdit && Y.value === "" && s.value !== S && s.value === 0 && (s.value = S);
      let w = null;
      [1, 2].includes(n.orientationModel) ? w = y() : w = m(), s.value = w;
    }, g = (S) => {
      const R = D.value.findIndex((w) => w === S);
      return R === -1 ? 0 : R;
    }, m = () => {
      let S = s.value + 1;
      return S > D.value.length - 1 && (S = 0), S;
    }, y = () => {
      let S = 0;
      if (Y.value === "") {
        const R = l();
        S = D.value.findIndex((w) => w === R);
      } else
        S = D.value.findIndex((R) => R === "");
      return S;
    }, p = (S) => {
      i("updateOrientation", S);
    }, F = () => {
      const S = Y.value;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit)
        return S === " " ? " " : S === "" ? "" : S === "l" ? "l" : S === "w" ? "w" : "default";
      switch (n.orientationModel) {
        case 0:
          return S === " " ? " " : S ? n.stockGrain === "n" ? S || n.shapeOrientation || "default" : n.stockGrain === "w" ? S === "w" ? "w" : "l" : S === "l" ? "l" : "w" : "default";
        case 1:
          return S === " " ? " " : S ? n.stockGrain === "n" ? S || n.shapeOrientation || "default" : n.stockGrain === "w" ? S === "w" ? "w" : "l" : S === "l" ? "l" : "w" : "default";
        case 2:
          return S === " " ? " " : S ? n.stockGrain === "n" ? S || n.shapeOrientation || "default" : n.stockGrain === "w" ? S === "w" ? "w" : "l" : S === "l" ? "l" : "w" : "default";
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
      const S = o(
        Y.value,
        n.orientationModel,
        n.rectangle,
        n.stockGrain
      );
      if (S !== Y.value) {
        M(S);
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
    }, V = Z(!1), M = (S) => {
      const R = g(S);
      V.value = !0, s.value = R, V.value = !1, p(S);
    }, D = $(() => {
      if (!n.rectangle) return ["l", "w"];
      if (on(n.rectangle)) return ["l", "w"];
      let S = ["", "l", "w"];
      return n.rectangle.multiEdit ? [" ", "", "l", "w"] : (H.value && (S = S.filter((R) => R !== "w")), S);
    }), H = $(() => Re(n.rectangle) || Hi(n.rectangle) ? n.rectangle.isSquare : n.rectangleType && n.rectangle?.l && n.rectangle?.w ? n.rectangle?.l === n.rectangle?.w : !1), Y = $(() => {
      let S = "";
      if (on(n.rectangle))
        S = n.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Re(n.rectangle)) {
        const R = n.rectangle.orientationLock;
        S = R === null ? "" : R;
      } else if (Hi(n.rectangle)) {
        const w = n.rectangle.grain ?? "";
        w === "l" || w === "w" || w === "" || w === " " ? S = w : S = "";
      }
      return S;
    }), se = $(() => on(n.rectangle) || !n.rectangle ? {
      l: null,
      w: null
    } : {
      l: n.rectangle.l,
      w: n.rectangle.w
    }), E = $(() => !se.value.l && !se.value.w), N = $(() => on(n.rectangle) ? !1 : ki(
      n.orientationModel,
      n.stockGrain,
      n.rectangle,
      n.rectangleType,
      n.shapeOrientation
    )), ee = $(() => {
      if (!n.rectangle)
        return n.shapeOrientation ? "noGrain" : "freeRotation";
      if (Hi(n.rectangle) || n.rectangleType === "stock") {
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
      const S = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, R = n.stockGrain || "default";
      let w = "default";
      Re(n.rectangle) || n.rectangleType === "shape" ? w = F() : on(n.rectangle) && (w = n.rectangle.direction || "default");
      const Q = S[R]?.[w];
      return Q || S[R]?.default || "freeRotation";
    });
    return Ue(s, (S, R) => {
      a.value && R !== void 0 && (V.value || p(D.value[S]));
    }, { immediate: !1 }), Ue(se, (S, R) => {
      if (!n.rectangle || n.orientationModel === 0 || !Re(n.rectangle) || Re(n.rectangle) && (n.orientationModel === 2 && R.l && R.w && !Y.value || n.stockGrain === "n" && !Y.value))
        return;
      const w = l();
      Y.value !== w && p(w);
    }, { immediate: !1 }), Ue(() => n.stockGrain, (S, R) => {
      S !== R && I();
    }, { immediate: !0 }), dn(() => {
      I(), ht(() => a.value = !0);
    }), (S, R) => (L(), j("button", {
      type: "button",
      id: t.id,
      class: We(["c-btn orientation-button", { rot: N.value, square: H.value, disabled: t.disabled, [ee.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: r
    }, [
      ee.value === "delete" ? (L(), j("svg", Mf, [...R[0] || (R[0] = [
        K("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : ae("", !0),
      ee.value === "noChange" ? (L(), j("svg", Nf, [...R[1] || (R[1] = [
        K("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : ae("", !0),
      ee.value === "freeRotation" ? (L(), j("svg", Bf, [...R[2] || (R[2] = [
        K("g", null, [
          K("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          K("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          K("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          K("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : ae("", !0),
      ee.value === "leftRight" ? (L(), j("svg", Vf, [...R[3] || (R[3] = [
        K("g", null, [
          K("path", { d: "m5.408 19.408h61.095" }),
          K("g", null, [
            K("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            K("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : ae("", !0),
      ee.value === "topBottom" ? (L(), j("svg", Df, [...R[4] || (R[4] = [
        K("g", null, [
          K("path", { d: "m19.408 66.503v-61.095" }),
          K("g", null, [
            K("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            K("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : ae("", !0),
      ee.value === "grainLeftRight" ? (L(), j("svg", Rf, [...R[5] || (R[5] = [
        K("g", null, [
          K("path", { d: "m3 3h99.887" }),
          K("path", { d: "m3.113 32h99.887" }),
          K("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : ae("", !0),
      ee.value === "grainTopBottom" ? (L(), j("svg", Gf, [...R[6] || (R[6] = [
        K("g", null, [
          K("path", { d: "m61 3v99.887" }),
          K("path", { d: "m32 3.113v99.887" }),
          K("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : ae("", !0)
    ], 10, Tf));
  }
}), jf = ["id", "data-index", "disabled"], qf = /* @__PURE__ */ Xe({
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
      const g = bn("FontAwesomeIcon");
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
      ], 10, jf);
    };
  }
});
function _f(t, e, n) {
  let i = null;
  Ue(
    () => t.value ? { l: t.value.l, w: t.value.w } : null,
    (s) => {
      const a = typeof e == "number" ? e : e.value;
      if (!ur(a) || !s || !t.value) return;
      const o = s.w > s.l;
      if (i === null) {
        i = o;
        return;
      }
      if (i !== o) {
        const l = dr(a);
        for (const r of l)
          Wl(t.value, r);
        i = o;
      }
    },
    { immediate: !0 }
  );
}
const Uf = {
  key: 0,
  class: "info"
}, Wf = ["disabled"], zf = /* @__PURE__ */ Xe({
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
    _f(s, Ot(n, "orientationModel"));
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
    }), g = $(() => n.field.output ? n.field.output : null), m = $(() => n.field.options || []), y = $(() => !!n.fullStockDisabled), p = $(() => n.item.isNew ? !1 : Vs(n.item, [n.field.name])), F = $(() => n.item.isNew ? !1 : Vs(n.item, [n.field.name], !0)), I = $(() => n.multiEdit || n.item.isNew || !1), V = $(() => n.materialOptions?.length > 0 && Re(n.item) ? !n.item.material : !1), M = $(() => n.widthOptions?.length === 1), D = $(() => n.field.info ? typeof n.field.info == "string" ? n.field.info : typeof n.field.info == "object" && l.value !== null && n.field.info[l.value] || null : null), H = (E) => {
      i("update", E);
    }, Y = (E, N) => {
      i("validation", E, N);
    }, se = () => {
      i("blur");
    };
    return (E, N) => o.value ? (L(), j(He, { key: 1 }, [
      t.field.name === "orientationLock" ? (L(), Ie(va, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        disabled: y.value,
        onUpdateOrientation: H
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "grain" ? (L(), Ie(va, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        disabled: y.value,
        onUpdateOrientation: H
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "banding" ? (L(), Ie(Pf, {
        key: 2,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.banding,
        onClicked: N[0] || (N[0] = (ee) => E.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : t.field.name === "finish" ? (L(), Ie(If, {
        key: 3,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.finish,
        onClicked: N[1] || (N[1] = (ee) => E.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "planing" ? (L(), Ie(qf, {
        key: 4,
        "input-shape": A(Re)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: y.value || t.materialExtrasDisabled?.planing,
        onClicked: N[2] || (N[2] = (ee) => E.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "machining" ? (L(), Ie(Ef, {
        key: 5,
        "input-shape": A(Re)(t.item) ? t.item : null,
        disabled: y.value || t.materialExtrasDisabled?.machining,
        onOpen: N[3] || (N[3] = (ee) => E.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : t.field.name === "material" && t.typePrefix === "part" ? (L(), Ie(Wn, {
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
        "onUpdate:value": H,
        onValidation: Y
      }, {
        default: Ci(() => [
          cs(E.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (L(), Ie(Wn, {
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
        disabled: V.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(Se)("actions.select"),
          delete: A(Se)("actions.delete")
        },
        output: "number",
        "onUpdate:value": H,
        onValidation: Y
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (L(), Ie(Wn, {
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
        "onUpdate:value": H,
        onValidation: Y
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (L(), j("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: N[4] || (N[4] = (ee) => E.$emit("open-image-upload"))
      }, [
        De(A(Pi), { icon: ["fass", "image"] })
      ], 8, Wf)) : ae("", !0)
    ], 64)) : (L(), Ie(Wn, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: l.value,
      label: A(Se)(t.field.label || t.field.name),
      placeholder: A(Se)(t.field.placeholder || t.field.name),
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
      "onUpdate:value": H,
      onValidation: Y,
      onBlur: se
    }, {
      default: Ci(() => [
        D.value ? (L(), j("p", Uf, [
          De(A(Pi), { icon: ["fass", "info-circle"] }),
          Qe(" " + ue(D.value), 1)
        ])) : ae("", !0),
        cs(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Hf = { class: "checkout-calculator-wrapper" }, Kf = {
  key: 0,
  class: "calculator-debug",
  style: { "margin-bottom": "20px", padding: "10px", background: "#1a1a2e", color: "#0f0", "font-family": "monospace", "font-size": "11px", "border-radius": "4px", "max-height": "400px", overflow: "auto" }
}, Zf = { style: { "margin-bottom": "6px", color: "#aaa" } }, Jf = { style: { color: "#0ff" } }, Yf = { style: { "margin-bottom": "6px", color: "#aaa" } }, Xf = { style: { color: "#0ff" } }, Qf = { style: { color: "#ff0" } }, ep = {
  key: 0,
  style: { color: "#888" }
}, tp = {
  key: 1,
  style: { color: "#888" }
}, np = { style: { "margin-bottom": "6px", color: "#aaa" } }, ip = { style: { color: "#ff0" } }, sp = {
  key: 0,
  style: { color: "#0f0" }
}, ap = {
  key: 1,
  style: { color: "#f00" }
}, op = { style: { "margin-bottom": "6px", color: "#aaa" } }, lp = { style: { margin: "2px 0", "white-space": "pre-wrap", "max-height": "150px", overflow: "auto" } }, rp = { style: { color: "#aaa" } }, cp = { style: { margin: "2px 0", "white-space": "pre-wrap" } }, up = {
  key: 0,
  class: "row table-heading"
}, dp = {
  key: 0,
  class: "cell center"
}, fp = { class: "cell" }, pp = {
  key: 0,
  class: "cell"
}, gp = ["onClick"], hp = { class: "cell" }, mp = ["disabled", "aria-label", "onClick"], vp = { class: "button-wrapper main" }, bp = ["aria-label"], yp = ["aria-label", "disabled"], wp = ["aria-label"], Sp = { id: "part-count" }, kp = {
  key: 2,
  class: "pagination-controls"
}, xp = { class: "c-btn-group" }, Pp = ["disabled"], Cp = ["disabled"], Ip = { class: "pagination-info" }, Ap = ["disabled"], Op = ["disabled"], Lp = {
  key: 4,
  id: "messages"
}, Fp = {
  key: 0,
  class: "heading"
}, $p = { class: "content" }, Ep = {
  key: 5,
  id: "progress"
}, Tp = { id: "diagram-wrapper" }, Mp = {
  key: 0,
  id: "stack"
}, Np = {
  key: 4,
  class: "debug"
}, rs = !1, Bp = /* @__PURE__ */ Xe({
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
    const i = mn(() => import("./InputIssues-DMOspRQ8.js")), s = mn(() => import("./Machining-yz3B5VSs.js")), a = mn(() => import("./ImportCSV-B0X8FnwS.js")), o = mn(() => import("./ObjectViewer-D_txyYGU.js")), l = mn(() => import("./ImageUpload-DMTnmIGo.js")), {
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
      validationIssues: H,
      setExtrasOptionsFromPricing: Y,
      getCentralizedOptions: se
    } = Ba(), { r: E, updateFromResult: N, stackedStock: ee, uniqueAddedShapes: S, uniqueUsedStock: R, usedStock: w, activeStockAutoId: Q, activeStock: ie, setActiveStockAutoId: re } = Fi();
    qu({
      stockList: E.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: ge, reset: $e } = Ja(), { addNotice: q } = Va(), ne = $(() => r.inputShapes.value.filter(Re)), J = (c) => !c || !Array.isArray(c) ? [] : c.map((d) => Gr({ parts: [d] }).parts?.[0] || d), pe = !1, Me = t, ve = n, et = Z(!1), Ke = "production", Lt = Z(navigator?.language || "en-US"), nt = $n(null), Ft = window.location.hostname, St = Z(!1), Yt = Z(!0), $t = Ho("Checkout/currentURL", window.location.href), at = Z([]), Et = Z(null), rt = Z(null), jt = Z(!1), mt = Z(!1), Ze = Z(!1), fn = Z(!1), Xt = Z(!1), kt = Z(zl()), ce = Z(!1), k = Z(1), C = Z(10), { socket: b } = xd({
      refs: {
        connected: St,
        thinking: Ze
      },
      callbacks: {
        onResult(c) {
          const d = c.optimisation;
          if (N(d), !d.shapeList?.length || !d.stockList?.length) {
            $e(), q({
              type: "error",
              message: Se("errors.calculation.no_result"),
              additional: [Se("errors.validation.check_inputs")]
            }), Ze.value = !1;
            return;
          }
          if ((T.apiVersion || 3) === 2 ? rt.value = Sf(
            c.jobId,
            S.value,
            R.value,
            w.value,
            E.offcuts?.value || [],
            r.inputShapes.value,
            E.metadata.value,
            T.resultOrientationModel
          ) : rt.value = kf(
            c.jobId,
            S.value,
            R.value,
            w.value,
            E.offcuts?.value || [],
            r.inputShapes.value,
            E.metadata.value,
            T.resultOrientationModel
          ), E?.metadata?.value?.unplacedParts?.length) {
            const u = E.metadata.value.unplacedParts.map((P) => P.id).join();
            q({
              type: "warning",
              message: Se("errors.validation.parts_not_fit", { count: E.metadata.value.unplacedParts.length }) + ": " + u
            });
          }
          rt.value && (rt.value.apiResultV3 = Xr({
            jobId: c.jobId,
            saw: d.saw,
            stockList: d.stockList,
            shapeList: d.shapeList,
            cutList: d.cutList,
            offcuts: E.offcuts?.value || [],
            unusableShapes: d.unusableShapes,
            metadata: E.metadata.value
          }), ve("result", rt.value)), Ze.value = !1;
        },
        onUser(c) {
          nt.value = c;
        },
        onConnectError(c) {
          q({
            type: "error",
            message: Se("errors.network.cannot_connect"),
            additional: [c]
          });
        },
        onError(c) {
          q({
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
    Ue(H, (c) => {
      c?.length > 0 ? (Le.value = !0, it.value = "Validation Errors", Tt.value = c.map((d) => `${d.message} (${d.category.join(", ")})`).join(`

`)) : it.value === "Validation Errors" && (Le.value = !1, it.value = "", Tt.value = "");
    }, { deep: !0 });
    const ot = At({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), ke = Z([]), Ee = Z([]), qt = Z([]), Ne = Z([]), dt = At({
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
    }), Qn = Z(null), _t = At({}), vt = At({}), bt = At({}), pn = Z(null), yn = Z(null), Ei = $(() => ({
      banding: _t.rules,
      finish: vt.rules,
      planing: bt.rules
    })), wn = $(() => kd({
      stockType: te.stockType,
      materials: ke.value,
      minDimension: T.minDimension,
      ...T.fieldOrder && T.fieldOrder.length > 0 ? { allowedFieldIds: T.fieldOrder } : {}
    })), Sn = Z([]), kn = Z({
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
    }), xn = $(() => {
      const c = wn.value.fields.value, d = wn.value.allFieldsMap.value, h = c.filter((he) => kn.value[he.name] ?? !0), u = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], P = [];
      let O = null;
      const U = h.filter((he) => he.name !== "fullStock");
      kn.value.fullStock && (O = h.find((he) => he.name === "fullStock") || d.get("fullStock"));
      for (const he of u) {
        const je = kn.value[he], Ae = U.find((Be) => Be.name === he);
        if (je && !Ae) {
          const Be = d.get(he);
          Be && P.push(Be);
        }
      }
      const we = Sn.value || [];
      return [
        ...O ? [O] : [],
        ...U,
        ...P,
        ...we
      ];
    }), Qt = $(() => xn.value.length + 2), Ti = $(() => {
      const c = {
        id: 34,
        del: 32
      }, d = {
        id: `${c.id}px`,
        del: `${c.del}px`
      }, h = [];
      for (const u of xn.value) {
        if (u.name === "trim") continue;
        const P = u.w ?? "minmax(20px, 1fr)";
        h.push(P);
      }
      return h.unshift(d.id), h.push(d.del), h.join(" ");
    }), gn = $(() => T.enable.pagination), ei = $(() => Me.diagramNav || T.enable.diagramNav), Ut = $(() => gn.value ? Math.ceil(ne.value.length / C.value) : 1), Mi = $(() => {
      if (!gn.value) return ne.value;
      const c = (k.value - 1) * C.value, d = c + C.value;
      return ne.value.slice(c, d);
    }), ti = $(() => gn.value ? (k.value - 1) * C.value : 0), Pn = (c) => {
      c < 1 && (c = 1), c > Ut.value && (c = Ut.value), k.value = c;
    }, Ni = () => Pn(1), f = () => Pn(k.value - 1), x = () => Pn(k.value + 1), G = () => Pn(Ut.value), B = $(() => T.debug || T.enable.debug), X = $(() => {
      try {
        const c = localStorage.getItem("inputs/inputStock");
        if (!c) return "(empty)";
        const d = JSON.parse(c);
        return JSON.stringify(d.map((h) => ({ material: h.material, db_id: h.db_id, l: h.l, w: h.w, t: h.t })), null, 2);
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
    function Fe(c, d) {
      const h = c.replace("#", ""), u = parseInt(h, 16), P = Math.round(2.55 * d), O = (u >> 16) + P, U = (u >> 8 & 255) + P, we = (u & 255) + P;
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
        const d = ["efficiency", "smallest"];
        c && !d.includes(c) ? console.warn(`${c} is not a valid stockSelection, expected ${d.join("|")}`) : te.options.stockSelection = c;
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
        for (const h in W.enable)
          h in c && (T.enable[h] = c[h]);
        for (const h in d) {
          const u = d[h], P = an(c, [u]), O = W.enable[u];
          Ce(h, P !== void 0 ? P : O);
        }
        Xt.value = an(c, ["csvImport"]) ?? W.enable.csvImport;
      },
      colors: (c) => {
        for (const d in W.colors)
          d in c && (T.colors[d] = c[d]);
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
        const d = [];
        c.forEach((h) => {
          const u = Mt(h.id), P = {
            ...h,
            custom: !0,
            id: u,
            name: u,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + u,
            fieldMap: "customData." + u
          };
          h.type === "checkbox" && (P.w = "32px"), h.type === "integer" || h.type === "float" ? P.output = h.output ?? "number" : h.type === "select" && (P.output = h.output ?? "string", P.options = h.options), d.push(P);
        }), Sn.value = d, ht(() => {
          for (const h of r.inputShapes.value)
            h.customData = c.reduce((u, P) => {
              const O = Mt(P.id);
              return u[O] = h.customData[O] || P.default || "", u;
            }, {});
        });
      }
    }, Ve = (c) => {
      B.value && ve("log", ["checkout init...", c]), c?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), c?.parts && (c.parts = J(c.parts));
      let d;
      try {
        d = bf(c);
      } catch (u) {
        console.error("[init] validation FAILED:", u.message), ve("error", u.message || "Invalid init data");
        return;
      }
      if (d.saw) {
        const u = d.saw;
        if (u.stockType !== void 0 && (ds.includes(u.stockType) || console.warn(`${u.stockType} is not a valid stockType, expected ${ds.join("|")}`), te.stockType = u.stockType, u.stockType === "linear" && (te.cutType = null, te.cutPreference = null)), u.bladeWidth !== void 0) {
          const P = typeof u.bladeWidth == "string" ? parseFloat(u.bladeWidth) : u.bladeWidth;
          P >= 0 ? te.bladeWidth = P : console.warn(`SmartCut - you provided an incorrect blade width of: ${u.bladeWidth}`);
        }
        if (u.cutType !== void 0 && (te.cutType = u.cutType), u.cutPreference !== void 0 && (Ds.includes(u.cutPreference) ? te.cutPreference = u.cutPreference : console.warn(`SmartCut - cut preference ${u.cutPreference || "N/A"} is not valid. Expected: ${Ds.join("|")}`)), u.guillotineOptions !== void 0 && typeof u.guillotineOptions == "object" && Object.assign(te.guillotineOptions, u.guillotineOptions), u.stackHeight !== void 0) {
          const P = typeof u.stackHeight == "string" ? parseFloat(u.stackHeight) : u.stackHeight;
          te.stackHeight = P;
        }
        u.efficiencyOptions !== void 0 && typeof u.efficiencyOptions == "object" && Object.assign(te.efficiencyOptions, u.efficiencyOptions), u.options !== void 0 && typeof u.options == "object" && (u.options.stockSelection !== void 0 && (te.options.stockSelection = u.options.stockSelection), u.options.stackingMode !== void 0 && (te.options.stackingMode = u.options.stackingMode), u.options.minSpacing !== void 0 && (te.options.minSpacing = u.options.minSpacing));
      }
      if (d?.options) {
        const u = d.options;
        Da(u);
        const P = ["stockType", "bladeWidth"];
        if (!d.saw && !c?.stockFilterEnabled)
          ve("error", `Saw configuration is required. Missing properties: ${P.join(", ")}`);
        else if (d.saw) {
          const U = P.filter((we) => !(we in d.saw));
          U.length > 0 && ve("error", `Missing required saw properties: ${U.join(", ")}`), (d.saw.cutType === "guillotine" || d.saw.cutType === "beam") && !("cutPreference" in d.saw) && ve("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const O = ["enable", "colors"];
        for (const U in u)
          O.includes(U) || (T[U] = u[U]), U in Ge && Ge[U](u[U]);
      }
      if (d.options.colors && "colors" in Ge && Ge.colors(d.options.colors), d.banding) {
        const u = d.banding;
        "locations" in u && u.locations && (_t.locations = u.locations), "groups" in u && u.groups && (_t.groups = u.groups), "rules" in u && u.rules && (_t.rules = u.rules);
      }
      if (d.finish) {
        const u = d.finish;
        "locations" in u && u.locations && (vt.locations = u.locations), "groups" in u && u.groups && (vt.groups = u.groups), "rules" in u && u.rules && (vt.rules = u.rules);
      }
      if (d.planing) {
        const u = d.planing;
        "locations" in u && u.locations && (bt.locations = u.locations), "groups" in u && u.groups && (bt.groups = u.groups), "rules" in u && u.rules && (bt.rules = u.rules);
      }
      d.partRules && (pn.value = d.partRules), d.customValidation && (yn.value = d.customValidation), _i("banding", d), _i("finish", d), _i("planing", d), ni(d), Cs(d), r.inputShapes.value.length && Ls(), mt.value = !0, B.value && ve("log", ["init complete"]);
      const h = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(h), ht(() => {
        ct.value && !xo() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), d.parts?.length && ht(() => {
        B.value && ve("log", ["loading parts via init..."]), r.inputShapes.value.length = 0;
        let u = 0;
        for (const O of d.parts) {
          const U = si(O);
          U ? U.issues?.length && B.value && ve("log", [`SmartCut - issues found while importing part at index ${u}`, U.issues]) : B.value && ve("log", [`SmartCut - error loading part at index ${u}`, O]), u++;
        }
        r.inputShapes.value.flatMap((O) => us(O.issues)).length && q({
          type: "error",
          message: Se("errors.general.issues_found")
        }), B.value && ve("log", [`loaded ${r.inputShapes.value.length} parts via init`]);
      });
    }, Ce = (c, d = !1) => {
      kn.value[c] = d;
    }, Mt = (c) => c ? Zl(c)?.toLowerCase() : null, xt = (c, d, h) => {
      try {
        if (!c || !d) return;
        const P = h !== null && h !== "" && h !== void 0 && !["orientationLock", "grain"].includes(d), O = (oe, he) => {
          if (!D(oe.autoId, he)) {
            for (const [Ae, Be] of Object.entries(he))
              Ji(oe, Ae, Be);
            oe.isNew || oe.validate({ fields: Object.keys(he) });
          }
        }, U = (oe, he, je) => {
          const Ae = he ?? oe.material, Be = je ?? oe.t, Ct = r.inputStock.value.find((An) => {
            const No = !Ae || An.material === Ae, Bo = Be == null || me({ v: An.t }) === me({ v: Be });
            return No && Bo;
          });
          return Ct ? { l: me({ v: Ct.l }), w: me({ v: Ct.w }) } : null;
        };
        if (d === "material" && (!h || h === "")) {
          const oe = { material: null, t: null };
          te.stockType === "linear" && (oe.w = null), O(c, oe);
          return;
        }
        if (d === "material" && h && ke.value?.length) {
          const oe = ke.value.find((he) => he.name === h);
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
            O(c, he), In(c, oe), Cn(c);
            const je = r.inputShapes.value.indexOf(c);
            for (const Ae of ["banding", "finish", "planing"])
              if (ot[Ae] === je) {
                const Be = ut(c, Ae);
                Be.options.length && Y(Ae, Be.options, Be.labels, Be.pricing);
              }
            return;
          }
        }
        if (d === "fullStock")
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
        if ((d === "material" || d === "t") && c.fullStock) {
          const oe = U(
            c,
            d === "material" ? h : void 0,
            d === "t" ? h : void 0
          );
          if (oe) {
            O(c, { [d]: h, l: oe.l, w: oe.w });
            return;
          }
        }
        if (c.isNew)
          if (P)
            c.isNew = !1;
          else {
            Ji(c, d, h);
            return;
          }
        let we;
        if (d.includes(".")) {
          const oe = d.split("."), he = oe[0], je = oe.slice(1).join("."), Be = { ...c[he] || {} };
          Ji(Be, je, h), we = { [he]: Be };
        } else
          we = { [d]: h };
        O(c, we), d === "t" && te.stockType === "linear" && ke.value?.length && c.material && ht(() => {
          const oe = Ps(c);
          if (oe.length > 0 && c.w != null) {
            const he = me({ v: c.w });
            oe.some((je) => me({ v: je }) === he) || O(c, { w: me({ v: oe[0] }) });
          }
        });
      } catch (u) {
        console.error("[CHECKOUT] Error updating field:", u);
      }
    }, Nn = () => {
    }, Pt = (c, d) => {
      c?.isNew && (c.isNew = !1), c.validate({ fields: [d] }), ["l", "w", "t"].includes(d) && Bn(c);
    }, Bn = (c) => {
      if (pn.value && c && !c.isNew && !(!c.l && !c.w))
        try {
          const d = Hd(c, pn.value);
          if (c.issues && (c.issues = c.issues.filter((h) => !h.category?.includes("part"))), !d.valid && d.violations.length > 0)
            for (const h of d.violations) {
              const u = Zd(h), P = h.dimension === "longSide" ? "l" : h.dimension === "shortSide" ? "w" : null;
              new Dt({
                item: c,
                type: "error",
                category: ["part"],
                field: P ? [[P]] : [],
                message: u,
                shouldTranslate: !1
              });
            }
        } catch (d) {
          console.error("[CHECKOUT] Error validating part:", d);
        }
    }, ni = (c) => {
      if (an(T, ["enable", "machining"]) && c?.machining) {
        for (const d in dt)
          c.machining[d] && (dt[d] = c.machining[d]);
        if (["holes", "hingeHoles"].forEach((d) => {
          c?.machining?.[d] && (dt[d].enabled = c?.machining?.[d].enabled);
        }), c?.machining?.corners?.types?.length && (dt.corners.enabled = !0, dt.corners.types = c.machining.corners.types), c.banding && c?.options?.enable?.banding) {
          if (!Te) return;
          dt.banding = {
            enabled: !0
          }, Te.options.length && (dt.banding.options = Te.options), Te.labels.length && (dt.banding.labels = Te.labels), Rs(Te.pricing) && (dt.banding.pricing = Te.pricing);
        }
      }
    }, co = (c = null) => {
      be.value = c, c && Re(c) && c.l && c.w ? et.value = !0 : alert(Se("machining.enter_dimensions_first"));
    }, uo = () => {
      et.value = !1;
    }, xs = (c = []) => {
      if (Ee.value = [], qt.value = [], Ce("t", !1), !!c.length) {
        for (const d of c)
          if (d?.t)
            if (typeof d.t == "string" && d.t.includes(",")) {
              const h = ii(d.t, !0);
              h.length === 2 ? (vo(h), Ce("t", !0), d.t = Ee.value[0]) : ve("error", "bonded thickness found which does not have 2 options");
            } else Ee.value.includes(d.t) || Ee.value.push(d.t);
        Ee.value.length > 1 && Ce("t", !0);
      }
    }, Bi = (c = []) => {
      if (Ne.value = [], !c.length) {
        Ce("w", !1);
        return;
      }
      for (const d of c) {
        if (!d?.w) continue;
        const h = me({ v: d.w });
        Ne.value.includes(h) || Ne.value.push(h);
      }
      Ne.value.length >= 1 ? Ce("w", !0) : Ce("w", !1);
    }, fo = (c) => {
      if (!c) return { thicknesses: [], bondedThicknesses: [] };
      if (!ke.value?.length)
        return {
          thicknesses: Ee.value,
          bondedThicknesses: []
        };
      if (!c.material)
        return {
          thicknesses: Ee.value,
          bondedThicknesses: []
        };
      const d = ke.value.find((P) => P.name === c.material);
      if (!d)
        return {
          thicknesses: Ee.value,
          bondedThicknesses: []
        };
      const h = [...d.thicknesses], u = [];
      for (let P = 0; P < h.length; P++) {
        const O = h[P], U = ii(O), we = [];
        if (U.length) {
          for (const oe of U)
            h[P] = oe, we.push(P);
          P++;
        }
        we.length && u.push(we);
      }
      return {
        thicknesses: h,
        bondedThicknesses: u
      };
    }, Ps = (c) => {
      if (!c) return [];
      if (!ke.value?.length || !c.material)
        return Ne.value;
      const d = ke.value.find((h) => h.name === c.material);
      if (!d)
        return Ne.value;
      if (c.t != null && r.inputStock?.value?.length) {
        const h = me({ v: c.t }), u = /* @__PURE__ */ new Set();
        for (const P of r.inputStock.value)
          P.material?.toUpperCase() === c.material && me({ v: P.t }) === h && P.w != null && u.add(me({ v: P.w }));
        if (u.size > 0)
          return Array.from(u).sort((P, O) => P - O);
      }
      return d.widths || Ne.value;
    }, po = (c) => c === "banding" ? Te : c === "finish" ? Je : c === "planing" ? qe : null, go = (c, d) => qi(c?.stock?.db_id)?.customData?.stockExtras?.[d], ut = (c, d) => {
      const h = po(d), u = {
        options: h?.options ?? [],
        labels: h?.labels ?? [],
        pricing: h?.pricing ?? {}
      };
      if (!c?.material) return u;
      const P = go(c, d);
      if (!P) return u;
      const O = P.pricing && typeof P.pricing == "object" ? P.pricing : { [P.name]: P.price ?? 0 }, U = P.labels?.length ? P.labels : [d.charAt(0).toUpperCase() + d.slice(1)];
      return { options: oi(O), labels: U, pricing: O };
    }, Vi = (c, d) => ut(c, d).options, ho = (c, d) => {
      const h = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!c?.material) return h;
      const P = qi(c?.stock?.db_id)?.customData?.stockExtras;
      return P ? {
        banding: !P.banding,
        finish: !P.finish,
        planing: !P.planing,
        machining: !P.machining
      } : h;
    }, Cs = (c) => {
      if (c?.stock?.some((d) => d?.material)) {
        ke.value = [], Ee.value = [], qt.value = [];
        const d = /* @__PURE__ */ new Map();
        for (const P of c.stock) {
          if (!P.material) continue;
          const O = ai(P);
          d.has(O) || d.set(O, { db_id: P.db_id, code: P.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), P.t != null && (typeof P.t == "string" && P.t.includes(",") ? d.get(O)?.thicknesses.add(P.t) : d.get(O)?.thicknesses.add(me({ v: P.t }))), te.stockType === "linear" && P.w != null && d.get(O)?.widths.add(me({ v: P.w }));
        }
        const h = Array.from(d.entries()).map(([P, O]) => {
          const U = [], we = [];
          for (const oe of O.thicknesses)
            typeof oe == "string" && oe.includes(",") ? we.push(oe) : U.push(me({ v: oe }));
          return { name: P, sets: O, regularThicknesses: U, bondedStrings: we };
        });
        ke.value = h.map(({ name: P, sets: O, regularThicknesses: U }) => {
          const we = {
            name: P,
            db_id: O.db_id,
            code: O.code,
            thicknesses: U.sort((oe, he) => oe - he)
          };
          return te.stockType === "linear" && O.widths.size > 0 && (we.widths = Array.from(O.widths).sort((oe, he) => oe - he)), we;
        });
        const u = /* @__PURE__ */ new Set();
        for (const P of ke.value)
          for (const O of P.thicknesses)
            u.add(me({ v: O }));
        Ee.value = Array.from(u).sort((P, O) => P - O);
        for (let P = 0; P < h.length; P++) {
          const { bondedStrings: O } = h[P], U = ke.value[P];
          for (const we of O) {
            const oe = ii(we, !0);
            if (oe.length !== 2) continue;
            const he = [];
            for (const je of oe) {
              const Ae = me({ v: je });
              let Be = Ee.value.findIndex((Ct) => me({ v: Ct }) === Ae);
              Be === -1 ? (Ee.value.push(Ae), U.thicknesses.push(Ae), Be = Ee.value.length - 1) : U.thicknesses.some((Ct) => me({ v: Ct }) === Ae) || U.thicknesses.push(Ae), he.push(Be);
            }
            qt.value.push(he);
          }
        }
        if (te.stockType === "linear") {
          const P = /* @__PURE__ */ new Set();
          for (const O of ke.value)
            if (O.widths)
              for (const U of O.widths)
                P.add(me({ v: U }));
          Ne.value = Array.from(P).sort((O, U) => O - U);
        }
        ke.value.length > 1 ? Ce("material", !0) : Ce("material", !1), Ee.value.length > 1 ? Ce("t", !0) : Ce("t", !1), te.stockType === "linear" && Ne.value.length > 1 ? Ce("w", !0) : te.stockType === "linear" && Ce("w", !1);
      } else
        xs(c.stock);
      te.stockType === "linear" && !ke.value?.length && Bi(c.stock);
    }, mo = (c) => {
      if (!c?.length) {
        ke.value = [], Ee.value = [], Ne.value = [];
        return;
      }
      if (c.some((h) => h?.material)) {
        const h = /* @__PURE__ */ new Map();
        qt.value = [];
        for (const O of c) {
          if (!O.material) continue;
          const U = ai(O);
          h.has(U) || h.set(U, { db_id: O.db_id, code: O.code, thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), O.t != null && (typeof O.t == "string" && O.t.includes(",") ? h.get(U)?.thicknesses.add(O.t) : h.get(U)?.thicknesses.add(me({ v: O.t }))), te.stockType === "linear" && O.w != null && h.get(U)?.widths.add(me({ v: O.w }));
        }
        const u = Array.from(h.entries()).map(([O, U]) => {
          const we = [], oe = [];
          for (const he of U.thicknesses)
            typeof he == "string" && he.includes(",") ? oe.push(he) : we.push(me({ v: he }));
          return { name: O, sets: U, regularThicknesses: we, bondedStrings: oe };
        });
        ke.value = u.map(({ name: O, sets: U, regularThicknesses: we }) => {
          const oe = {
            name: O,
            db_id: U.db_id,
            code: U.code,
            thicknesses: we.sort((he, je) => he - je)
          };
          return te.stockType === "linear" && U.widths.size > 0 && (oe.widths = Array.from(U.widths).sort((he, je) => he - je)), oe;
        });
        const P = /* @__PURE__ */ new Set();
        for (const O of ke.value)
          for (const U of O.thicknesses)
            P.add(me({ v: U }));
        Ee.value = Array.from(P).sort((O, U) => O - U);
        for (let O = 0; O < u.length; O++) {
          const { bondedStrings: U } = u[O], we = ke.value[O];
          for (const oe of U) {
            const he = ii(oe, !0);
            if (he.length !== 2) continue;
            const je = [];
            for (const Ae of he) {
              const Be = me({ v: Ae });
              let Ct = Ee.value.findIndex((An) => me({ v: An }) === Be);
              Ct === -1 ? (Ee.value.push(Be), we.thicknesses.push(Be), Ct = Ee.value.length - 1) : we.thicknesses.some((An) => me({ v: An }) === Be) || we.thicknesses.push(Be), je.push(Ct);
            }
            qt.value.push(je);
          }
        }
        if (te.stockType === "linear") {
          const O = /* @__PURE__ */ new Set();
          for (const U of ke.value)
            if (U.widths)
              for (const we of U.widths)
                O.add(me({ v: we }));
          Ne.value = Array.from(O).sort((U, we) => U - we);
        }
        Ce("material", ke.value.length > 1), Ce("t", Ee.value.length > 1), te.stockType === "linear" && Ce("w", Ne.value.length > 1);
      } else
        xs(c), te.stockType === "linear" && Bi(c);
    }, vo = (c, d = null) => {
      if (!Array.isArray(c)) {
        ve("error", "addBondedThicknesses expects an array");
        return;
      }
      const h = [];
      for (let u of c)
        T.numberFormat === "decimal" && (u = parseFloat(u)), Ee.value.push(u), d && d.thicknesses.push(u), h.push(Ee.value.length - 1);
      qt.value.push(h);
    }, bo = (c) => {
      const { thicknesses: d } = fo(c);
      return d?.length ? d.map((h) => ({
        label: h?.toString(),
        value: h
      })) : [];
    }, yo = (c) => {
      const d = Ps(c);
      return d?.length ? d.map((h) => ({
        label: h?.toString(),
        value: h
      })) : [];
    }, ii = (c, d = !1) => {
      if (typeof c == "string" && c.includes(",")) {
        const h = c.split(",");
        if (h.length === 2) {
          const u = parseFloat(h[0]), P = parseFloat(h[1]);
          !isNaN(u) && !isNaN(P) && P !== u * 2 && q({
            type: "warning",
            message: `Bonded thickness "${c}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return d ? h.map((u) => me({ v: u })) : h;
      }
      return [];
    }, wo = () => {
      ce.value ? ko() : So();
    }, So = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), ce.value = !0;
    }, ko = () => {
      document.exitFullscreen && document.exitFullscreen(), ce.value = !1;
    }, xo = () => {
      if (nt.value?.api?.whiteLabel) return !0;
      let c = !0;
      const d = document.querySelector("#smartcut-checkout a#credit");
      if (!d) return c = !1;
      const h = window.getComputedStyle(d);
      return h.display === "none" || h.display === "hidden" || h.opacity === "0" || h.color === "transparent" || h.position !== "absolute" || h.color !== "#4e4e4e" && h.color !== "rgb(78, 78, 78)" ? c = !1 : (Yt.value = c, c);
    }, Di = $(() => typeof Me.findExtrasPrice == "function"), Is = (c, d) => {
      let h, u;
      switch (d) {
        case "banding":
          h = Te.options, u = Te.labels;
          break;
        case "finish":
          h = Je.options, u = Je.labels;
          break;
        case "planing":
          h = qe.options, u = qe.labels;
          break;
        default:
          h = [], u = [];
      }
      sn(c, d, h, u);
    }, As = (c) => {
      const d = Object.keys(c);
      return Math.max(...d.map((u) => u.split("|").length));
    }, Vn = (c, d, h) => {
      if (!c)
        return [];
      if (h > 0 && !d[h - 1])
        return [];
      const u = /* @__PURE__ */ new Set();
      for (const O of Object.keys(c)) {
        const U = O.split("|");
        if (U.length > h) {
          let we = !0;
          for (let oe = 0; oe < h; oe++) {
            const he = d[oe], je = U[oe];
            if (he && he !== je) {
              we = !1;
              break;
            }
          }
          we && u.add(U[h]);
        }
      }
      return Array.from(u);
    }, Ri = (c, d, h, u) => {
      const P = ut(c, d);
      return Ki(c, d, h, (U, we) => {
        const oe = we.filter((he) => he?.trim()).join("|");
        return oe && P.pricing[oe] !== void 0 ? P.pricing[oe] : u ? u(U, we) : null;
      }, P.options, P.labels);
    }, Po = (c, d, h) => {
      let u, P;
      switch (d) {
        case "banding":
          u = Te.options, P = Te.labels;
          break;
        case "finish":
          u = Je.options, P = Je.labels;
          break;
        case "planing":
          u = qe.options, P = qe.labels;
          break;
        default:
          u = [], P = [];
      }
      return Ki(c, d, h, Me.findExtrasPrice, u, P);
    }, Co = Z({}), Io = (c) => {
      const d = at.value.findIndex((h) => h.shapeId === c.shapeId);
      d !== -1 ? at.value[d] = c : at.value.push(c), window.smartcutImages = at.value;
    }, Ao = (c) => {
      at.value = at.value.filter((d) => d.shapeId !== c), window.smartcutImages = at.value;
    }, Oo = (c) => {
      Et.value = Et.value === c ? null : c;
    }, Gi = (c = 1) => {
      for (let d = c; d--; ) {
        let h = {
          l: null,
          w: te.stockType === "linear" && Ne.value.length === 1 ? Ne.value[0] : null,
          t: Ee.value.length ? Ee.value[0] : null,
          q: 1,
          material: ke.value?.length === 1 ? ke.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const P = r.inputShapes.value[r.inputShapes.value.length - 1];
          h.material = P.material, h.t = P.t, te.stockType === "linear" && P.w && (h.w = P.w);
        }
        const u = I(h);
        u && (Te?.labels?.length && sn(u, "banding", Te.options, Te.labels), Je?.labels?.length && sn(u, "finish", Je.options, Je.labels), qe?.labels?.length && sn(u, "planing", qe.options, qe.labels));
      }
    }, si = (c = {}) => {
      const d = {
        q: 1,
        // Always set quantity to 1
        ...c
      }, h = I(d);
      return h && (te.stockType === "linear" && Ne.value.length === 1 && !h.w && (h.w = Ne.value[0]), Ee.value.length && !h.t && (h.t = Ee.value[0]), ke.value?.length === 1 && !h.material && (h.material = ke.value[0].name), Te?.labels?.length && sn(h, "banding", Te.options, Te.labels), Je?.labels?.length && sn(h, "finish", Je.options, Je.labels), qe?.labels?.length && sn(h, "planing", qe.options, qe.labels)), h;
    }, Lo = (c) => {
      if (Ee.value.length)
        for (const d of c) {
          if (!d.t) continue;
          const h = Ee.value.findIndex(
            (O) => me({ v: O }) === d.t
          ), u = qt.value.find((O) => O.includes(h));
          if (!u) continue;
          const P = Math.min(
            ...u.map((O) => Ee.value[O])
          );
          me({ v: d.t }) > P && (d.q = Number(d.q) * (me({ v: d.t }) / P), d.notes = `Bond to form ${d.t.valueOf()}`, d.t = P);
        }
    }, Os = () => {
      $e(), re(null), E.stockList.value = [], E.shapeList.value = [], E.cutList.value = [];
    }, ji = () => {
      r.inputShapes.value.length = 0, Me.inputType !== "formula" && ht(() => Gi());
    }, qi = (c) => {
      if (c)
        return r.inputStock.value.find((d) => d.db_id === c);
    }, Cn = (c) => {
      c.extras && (c.extras.banding = null, c.extras.finish = null, c.extras.planing = null);
    }, ai = (c) => (c.customData?.stockName || c.material || "").toUpperCase(), Fo = (c, d) => {
      const h = c.toUpperCase();
      return r.inputStock.value.find((u) => ai(u) === h && me({ v: u.t }) === d);
    }, In = (c, d) => {
      const h = me({ v: c.t }), u = Fo(d.name, h);
      c.stock = {
        db_id: u?.db_id || d.db_id,
        code: u?.code || d.code,
        material: d.name,
        thickness: h
      };
    }, Ls = () => {
      for (const c of r.inputShapes.value) {
        const d = c.stock, h = c.material?.toUpperCase();
        let u = null;
        if (d?.db_id) {
          const P = qi(d.db_id);
          P && (u = ke.value.find((O) => O.name === ai(P))), u || (u = ke.value.find((O) => O.db_id && O.db_id === d.db_id));
        }
        if (!u && d?.code && (u = ke.value.find((P) => P.code && P.code === d.code)), !u && h && (u = ke.value.find((P) => P.name === h)), u)
          c.material = u.name, In(c, u), c.t != null && !u.thicknesses.includes(me({ v: c.t })) && (c.t = null, c.stock = null, Cn(c));
        else {
          if ((d?.db_id || d?.code) && !ke.value?.length)
            continue;
          if (ke.value?.length === 1) {
            const P = ke.value[0], O = c.material !== P.name;
            c.material = P.name, P.thicknesses.includes(me({ v: c.t })) || (c.t = me({ v: P.thicknesses[0] })), In(c, P), O && Cn(c);
          } else if (ke.value?.length > 1 && c.t) {
            const P = ke.value.find((O) => O.thicknesses.some((U) => me({ v: U }) === me({ v: c.t })));
            P ? (c.material !== P.name && Cn(c), c.material = P.name, In(c, P)) : (Cn(c), c.material = ke.value[0].name, c.t = me({ v: ke.value[0].thicknesses[0] }), In(c, ke.value[0]));
          } else ke.value?.length > 1 ? (Cn(c), c.material = ke.value[0].name, c.t = me({ v: ke.value[0].thicknesses[0] }), In(c, ke.value[0])) : !c.t && r.inputStock.value[0]?.t && (c.t = me({ v: r.inputStock.value[0].t }));
        }
      }
    }, $o = async () => {
      if (ve("calculating"), Ze.value) return !1;
      Ze.value = !0, fn.value = !1, Ls();
      const c = await Td({
        t: Se,
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
        extrasValidationRules: Ei.value,
        extrasLocationGroups: {
          banding: _t.groups,
          finish: vt.groups,
          planing: bt.groups
        },
        onLimit: () => {
          q({
            type: "error",
            message: Se("limits.max_parts") + " " + T.maxParts
          });
        }
      });
      if (pn.value)
        for (const O of r.inputShapes.value)
          Bn(O);
      const d = r.inputShapes.value.flatMap((O) => O.issues || []).filter((O) => O.type === "error" && O.category?.includes("part") && !O.category?.includes("extras"));
      if (d.length > 0) {
        q({
          type: "error",
          message: Se("errors.validation.inputs_issue", { 0: "part" }),
          additional: d.map((O) => O.message)
        }), ve("validation-error"), Ze.value = !1;
        return;
      }
      if (!c.valid) {
        ve("validation-error"), Ze.value = !1;
        return;
      }
      Os(), r.inputShapes.value.forEach((O, U) => {
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
      Lo(h), B.value && ve("log", [
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((O) => ({ l: O.l, w: O.w })),
        "parts",
        h.map((O) => ({ l: O.l, w: O.w }))
      ]);
      const u = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: h.map((O) => O.toData()),
        inputStock: r.inputStock.value.map((O) => O.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Ft,
        extrasOptions: se(),
        source: "checkout",
        sourceVersion: "4.1.17"
      };
      if (yn.value?.enabled && yn.value?.rules?.length > 0) {
        const O = Dd(
          yn.value.rules,
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
      ve("before-calculate", u);
      const P = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: u,
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
      await b.connect(), b.emit("calculate", u);
    }, _i = (c, d) => {
      if (Ce(c, !1), !c || !d || !d?.[c] || !an(T, ["enable", c]))
        return;
      const h = [c, "pricing"];
      if (!Gs(d, h)) {
        ve("error", `${h.join(".")} not found in sent data`);
        return;
      }
      const u = an(d, h);
      if (typeof u != "object") {
        ve("error", `${h.join(".")} data must be an object`);
        return;
      }
      if (!Rs(u)) {
        ve("error", `if provided, ${h.join(".")} data must contain some values`);
        return;
      }
      const P = Object.keys(u), O = Object.values(u);
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
      const we = As(u), oe = [c, "labels"];
      let he = [];
      if (Gs(d, oe))
        he = an(d, oe);
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
      const je = an(d, [c, "displayNames"]) || void 0;
      switch (c) {
        case "banding": {
          Te.labels = he, Te.pricing = u;
          const Ae = oi(u);
          Te.options = Ae, Y("banding", Ae, he, u, je);
          break;
        }
        case "finish": {
          Je.labels = he, Je.pricing = u;
          const Ae = oi(u);
          Je.options = Ae, Y("finish", Ae, he, u, je);
          break;
        }
        case "planing": {
          qe.labels = he, qe.pricing = u;
          const Ae = oi(u);
          qe.options = Ae, Y("planing", Ae, he, u, je);
          break;
        }
      }
      if (Qn.value = se(), Ce(c, !0), !!r.inputShapes.value?.length)
        for (const Ae of r.inputShapes.value)
          Is(Ae, c);
    }, oi = (c) => {
      const d = [], h = Object.keys(c), u = As(c);
      for (let P = u; P--; ) d.push(/* @__PURE__ */ new Set());
      for (const P of h) {
        const O = P.split("|");
        u > 1 && O.length !== u || O.forEach((U, we) => d[we].add(U));
      }
      for (let P = 0; P < u; P++)
        d[P] = Array.from(d[P]);
      return d;
    }, li = (c, d) => {
      if (!d) return;
      c !== "info" && Object.keys(ot).forEach((u) => {
        u !== c && u !== "info" && (ot[u] = null);
      });
      const h = r.inputShapes.value.indexOf(d);
      if (ot[c] === h)
        be.value = null, ot[c] = null, Co.value[c] = void 0;
      else if (be.value = d, ot[c] = h, c !== "info") {
        const u = ut(d, c);
        u.options.length && Y(
          c,
          u.options,
          u.labels,
          u.pricing
        );
      }
    }, Fs = (c) => {
      B.value && ve("log", ["load event received"]), mt.value && Eo(c.detail);
    }, Eo = (c) => {
      if (B.value && ve("log", ["loading parts..."]), !c || !c?.inputs?.parts?.length) {
        B.value && ve("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let d = 0;
      for (const u of c.inputs.parts) {
        const P = si(u);
        P ? P.issues?.length && B.value && ve("log", [`SmartCut - issues found while importing part at index ${d}`, P.issues]) : B.value && ve("log", [`SmartCut - error loading part at index ${d}`, u]), d++;
      }
      r.inputShapes.value.flatMap((u) => us(u.issues)).length && q({
        type: "error",
        message: Se("errors.general.issues_found")
      }), B.value && ve("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, To = (c) => {
      r.inputShapes.value.length = 0, ht(() => {
        for (const d of c)
          d.t = r.inputStock.value?.[0]?.t ?? null, te.stockType === "linear" && Ne.value.length === 1 && !d.w && (d.w = Ne.value[0]), si(d);
      });
    };
    Ue(() => Me.inputStock, (c) => {
      if (Os(), Array.isArray(c) || console.warn("SmartCut - stock must be passed as an array"), !c?.length) return;
      r.inputStock.value.length = 0;
      const d = c.map((h) => h.toData());
      mo(d);
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
          r.inputShapes.value.length || Gi();
        });
        const h = p(r.inputSaw.value);
        h.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(h))), q({
          type: "error",
          message: Se("errors.validation.stock_issue"),
          additional: h.map((u) => u.message)
        }));
      }
    }, { immediate: !0 }), Ue(r.inputShapes, (c) => {
      ve("inputs-changed"), c.forEach((d) => {
        te.stockType === "linear" && Ne.value.length && (!d.w || !Ne.value.includes(me({ v: d.w }))) && (d.w = Ne.value[0]);
        const h = ke.value.find((u) => u.name === d.material);
        h && (h.thicknesses.includes(me({ v: d.t })) || (d.t = me({ v: h.thicknesses[0] })));
      });
    }, { deep: !0 }), Ue(() => ne.value.length, (c, d) => {
      if (gn.value) {
        if (c > d) {
          const h = Math.ceil(c / C.value);
          k.value < h && (k.value = h);
        } else if (c < d) {
          const h = Math.ceil(c / C.value);
          k.value > h && (k.value = Math.max(1, h));
        }
      }
    }), Ue(() => T.numberFormat, (c) => {
      y(c);
    }), Ue(r.inputStock, (c) => {
      te.stockType === "linear" && Bi(c.map((d) => d.toData()));
    }, { deep: !0 }), Ue(() => te, (c) => {
      r.inputSaw.value = new Ht(c);
    }, { deep: !0 }), dn(async () => {
      if (jt.value) return;
      jt.value = !0;
      const c = new URL(window.location.href), d = c.searchParams.toString(), h = c.origin + c.pathname + (d ? `?${d}` : "");
      $t.value !== h && ji(), $t.value = h, Lt.value = T.locale, await b.connect(), b.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Fs);
    });
    const Mo = () => {
      b && b.disconnect();
    };
    return Yn(() => {
      window.removeEventListener("smartcut/load", Fs), Mo(), delete window.smartcutCheckout;
    }), e({
      init: Ve,
      clear: ji,
      getAvailablePricingOptions: Vn,
      getExtrasPrice: Po,
      formatPrice: Me.formatPrice,
      findExtrasPrice: Me.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: Is,
      createAndAddInputShape: si,
      initMaterialsThicknesses: Cs
    }), (c, d) => {
      const h = bn("FontAwesomeIcon");
      return L(), j("div", Hf, [
        B.value || pe ? (L(), j("div", Kf, [
          d[14] || (d[14] = K("div", { style: { "font-weight": "bold", color: "#ff0", "margin-bottom": "8px" } }, "EcommerceCalculator Debug", -1)),
          K("div", Zf, [
            K("strong", Jf, "inputs.inputStock (" + ue(A(r).inputStock.value.length) + " items):", 1),
            (L(!0), j(He, null, tt(A(r).inputStock.value, (u, P) => (L(), j("div", {
              key: P,
              style: { margin: "4px 0", padding: "4px", background: "#2a2a4e", "border-radius": "2px" }
            }, [
              K("div", null, [
                d[6] || (d[6] = K("span", { style: { color: "#ff0" } }, "material:", -1)),
                Qe(" " + ue(u.material), 1)
              ]),
              K("div", null, [
                d[7] || (d[7] = K("span", { style: { color: "#ff0" } }, "db_id:", -1)),
                Qe(" " + ue(u.db_id || "(none)"), 1)
              ]),
              K("div", null, [
                d[8] || (d[8] = K("span", { style: { color: "#ff0" } }, "code:", -1)),
                Qe(" " + ue(u.code || "(none)"), 1)
              ]),
              K("div", null, [
                d[9] || (d[9] = K("span", { style: { color: "#ff0" } }, "l×w×t:", -1)),
                Qe(" " + ue(u.l) + " × " + ue(u.w) + " × " + ue(u.t), 1)
              ]),
              K("div", null, [
                d[10] || (d[10] = K("span", { style: { color: "#ff0" } }, "stockExtras:", -1)),
                Qe(" " + ue(JSON.stringify(u.customData?.stockExtras) || "(none)"), 1)
              ])
            ]))), 128))
          ]),
          K("div", Yf, [
            K("strong", Xf, "materials dropdown (" + ue(ke.value.length) + "):", 1),
            (L(!0), j(He, null, tt(ke.value, (u, P) => (L(), j("div", {
              key: P,
              style: { margin: "2px 0", padding: "2px 4px", background: "#2a2a4e", "border-radius": "2px" }
            }, [
              K("span", Qf, ue(u.name), 1),
              Qe(" (t: " + ue(u.thicknesses?.join(", ")) + ") ", 1),
              u.db_id ? (L(), j("span", ep, " db_id=" + ue(u.db_id), 1)) : ae("", !0),
              u.code ? (L(), j("span", tp, " code=" + ue(u.code), 1)) : ae("", !0)
            ]))), 128))
          ]),
          K("div", np, [
            d[11] || (d[11] = K("strong", { style: { color: "#0ff" } }, "inputs.inputShapes stock refs:", -1)),
            (L(!0), j(He, null, tt(A(r).inputShapes.value, (u, P) => (L(), j("div", {
              key: P,
              style: { margin: "2px 0" }
            }, [
              K("span", ip, ue(u.material || "?"), 1),
              Qe(" t=" + ue(u.t) + " ", 1),
              u.stock ? (L(), j("span", sp, " stock=" + ue(JSON.stringify(u.stock)), 1)) : (L(), j("span", ap, " (no stock ref)"))
            ]))), 128))
          ]),
          K("div", op, [
            d[12] || (d[12] = K("strong", { style: { color: "#0ff" } }, "localStorage 'inputs/inputStock':", -1)),
            K("pre", lp, ue(X.value), 1)
          ]),
          K("div", rp, [
            d[13] || (d[13] = K("strong", { style: { color: "#0ff" } }, "localStorage 'stock-filter-selections':", -1)),
            K("pre", cp, ue(le.value), 1)
          ])
        ])) : ae("", !0),
        mt.value ? ae("", !0) : (L(), Ie(da, {
          key: 1,
          size: 50,
          "show-number": !1
        })),
        be.value?.machining && et.value ? (L(), Ie(A(s), {
          key: 2,
          "input-shape": be.value,
          "onUpdate:inputShape": d[0] || (d[0] = (u) => be.value = u),
          translate: !0,
          options: dt,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": A(Ki),
          "get-available-pricing-options": Vn,
          "format-price": t.formatPrice,
          onClose: uo
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : ae("", !0),
        mt.value ? (L(), j("section", {
          key: 3,
          id: "smartcut-checkout",
          class: We(["smartcut-content", { fullscreen: ce.value }]),
          style: yt(xe.value)
        }, [
          kt.value && !t.readonly ? (L(), j("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: d[1] || (d[1] = (u) => wo())
          }, [
            De(h, { icon: ["fass", "expand"] }),
            Qe(" " + ue(A(Se)("general.full_screen")), 1)
          ])) : ae("", !0),
          ct.value ? (L(), j("a", {
            key: 1,
            id: "credit",
            style: ye,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, ue(A(Kl)(A(Se)("general.powered_by"))), 1)) : ae("", !0),
          K("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: yt({ "grid-template-columns": Ti.value })
          }, [
            A(r).inputShapes.value.length ? (L(), j("div", up, [
              d[15] || (d[15] = K("div", { class: "cell id" }, null, -1)),
              (L(!0), j(He, null, tt(xn.value, (u) => (L(), j("div", {
                key: u.name,
                class: We(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(u.name) || u.type === "boolean" }])
              }, ue(A(Se)(u.label)), 3))), 128)),
              A(Ke) === "development" && rs ? (L(), j("div", dp, " Info ")) : ae("", !0),
              d[16] || (d[16] = K("div", { class: "cell del" }, null, -1))
            ])) : ae("", !0),
            (L(!0), j(He, null, tt(Mi.value, (u, P) => (L(), j("div", {
              key: u.autoId,
              class: "row inputs"
            }, [
              K("div", fp, [
                K("div", {
                  class: "id",
                  style: yt({
                    background: T.colors.partA,
                    color: T.colors.text
                  })
                }, ue(ti.value + P + 1), 5)
              ]),
              (L(!0), j(He, null, tt(xn.value, (O) => (L(), j("div", {
                key: O.name,
                class: "cell"
              }, [
                u ? (L(), Ie(zf, {
                  key: 0,
                  field: O,
                  item: u,
                  index: P,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": T.numberFormat,
                  "orientation-model": T.orientationModel,
                  "stock-grain": A(m)(u),
                  "material-options": ke.value?.map((U) => ({ label: U.name, value: U.name })) || [],
                  "thickness-options": O.name === "t" ? bo(u) : [],
                  "width-options": O.name === "w" && te.stockType === "linear" ? yo(u) : [],
                  "banding-enabled": ot.banding === P ? u : null,
                  "full-stock-disabled": u.fullStock && !["material", "t", "q", "fullStock"].includes(O.name),
                  "material-extras-disabled": ho(u, u.material),
                  onUpdate: (U) => xt(u, O.propertyPath || O.fieldMap || O.name, U),
                  onValidation: d[2] || (d[2] = (U, we) => Nn()),
                  onBlur: () => Pt(u, O.name),
                  onOpenBanding: (U) => li("banding", u),
                  onOpenMachining: (U) => co(u),
                  onOpenFinish: (U) => li("finish", u),
                  onOpenPlaning: (U) => li("planing", u),
                  onOpenImageUpload: (U) => Oo(P)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ae("", !0)
              ]))), 128)),
              A(Ke) === "development" && rs ? (L(), j("div", pp, [
                K("button", {
                  class: We(["c-btn", { selected: ot.info === P }]),
                  type: "button",
                  onClick: (O) => li("info", u)
                }, " i ", 10, gp)
              ])) : ae("", !0),
              K("div", hp, [
                K("button", {
                  disabled: A(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${A(Se)("actions.remove")} ${A(Xi)(A(Se)("woodwork.part"))}`,
                  onClick: (O) => A(F)(u.autoId)
                }, [
                  De(h, { icon: ["fass", "trash"] })
                ], 8, mp)
              ]),
              De(A(i), {
                item: u,
                "num-columns": Qt.value
              }, null, 8, ["item", "num-columns"]),
              ot.banding === P && Vi(u, "banding").length > 0 && Di.value ? (L(), Ie(ss, {
                key: "banding-" + (u?.material || ""),
                shape: u,
                "shape-index": P,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Te.keys,
                "all-options": ut(u, "banding").options,
                pricing: ut(u, "banding").pricing,
                labels: ut(u, "banding").labels,
                locations: _t.locations,
                "location-groups": _t.groups,
                "user-friendly-field-map": A(Zi),
                "part-columns": Qt.value,
                "format-price": t.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": Ri,
                "orientation-model": T.orientationModel,
                "stock-grain": A(m)(u),
                "get-available-pricing-options": Vn,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              ot.finish === P && Vi(u, "finish").length > 0 && Di.value ? (L(), Ie(ss, {
                key: "finish-" + (u?.material || ""),
                shape: u,
                "shape-index": P,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Je.keys,
                "all-options": ut(u, "finish").options,
                pricing: ut(u, "finish").pricing,
                labels: ut(u, "finish").labels,
                locations: vt.locations,
                "location-groups": vt.groups,
                "user-friendly-field-map": A(Zi),
                "part-columns": Qt.value,
                "format-price": t.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": Ri,
                "orientation-model": T.orientationModel,
                "stock-grain": A(m)(u),
                "get-available-pricing-options": Vn,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              ot.planing === P && Vi(u, "planing").length > 0 && Di.value ? (L(), Ie(ss, {
                key: "planing-" + (u?.material || ""),
                shape: u,
                "shape-index": P,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": qe.keys,
                "all-options": ut(u, "planing").options,
                pricing: ut(u, "planing").pricing,
                labels: ut(u, "planing").labels,
                locations: bt.locations,
                "location-groups": bt.groups,
                "user-friendly-field-map": A(Zi),
                "part-columns": Qt.value,
                "format-price": t.formatPrice,
                "find-extras-price": Me.findExtrasPrice,
                "get-price": Ri,
                "orientation-model": T.orientationModel,
                "stock-grain": A(m)(u),
                "get-available-pricing-options": Vn,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : ae("", !0),
              ot.info === P ? (L(), j("div", {
                key: 4,
                id: "shape-info",
                style: yt({ "grid-column-end": "span " + Qt.value })
              }, [
                K("div", null, ue(u?.banding), 1),
                K("div", null, ue(Qn.value?.banding?.options || "No options"), 1)
              ], 4)) : ae("", !0),
              Et.value === P ? (L(), Ie(A(l), {
                key: 5,
                prefix: (P + 1).toString(),
                "unique-id": u.autoId,
                "shape-id": u.autoId,
                style: yt({ "grid-column-end": "span " + Qt.value }),
                images: at.value,
                onUpdate: Io,
                onRemove: Ao
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : ae("", !0)
            ]))), 128))
          ], 4),
          K("div", vp, [
            t.readonly ? ae("", !0) : (L(), j("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${A(Se)("actions.add")} ${A(Xi)(A(Se)("woodwork.part"))}`,
              onClick: d[3] || (d[3] = (u) => Gi())
            }, [
              De(h, { icon: ["fass", "plus-large"] }),
              Qe(" " + ue(`${A(Se)("actions.add")} ${A(Xi)(A(Se)("woodwork.part"))}`), 1)
            ], 8, bp)),
            K("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": A(Se)("actions.calculate"),
              disabled: !A(r).inputStock.value?.length || Ze.value,
              onClick: d[4] || (d[4] = (u) => $o())
            }, [
              De(h, { icon: ["fass", "calculator"] }),
              Qe(ue(A(Se)("actions.calculate")), 1)
            ], 8, yp),
            t.readonly ? ae("", !0) : (L(), j("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": A(Se)("actions.clear"),
              onClick: d[5] || (d[5] = (u) => ji())
            }, [
              De(h, { icon: ["fass", "trash"] })
            ], 8, wp)),
            K("div", Sp, ue(A(g)) + ue(T?.maxParts ? "/" + T.maxParts : ""), 1)
          ]),
          gn.value && Ut.value > 1 ? (L(), j("div", kp, [
            K("div", xp, [
              K("button", {
                type: "button",
                class: "c-btn",
                disabled: k.value === 1,
                onClick: Ni
              }, [
                De(h, { icon: ["fass", "chevrons-left"] })
              ], 8, Pp),
              K("button", {
                type: "button",
                class: "c-btn",
                disabled: k.value === 1,
                onClick: f
              }, [
                De(h, { icon: ["fass", "chevron-left"] })
              ], 8, Cp),
              K("span", Ip, ue(k.value) + " / " + ue(Ut.value), 1),
              K("button", {
                type: "button",
                class: "c-btn",
                disabled: k.value >= Ut.value,
                onClick: x
              }, [
                De(h, { icon: ["fass", "chevron-right"] })
              ], 8, Ap),
              K("button", {
                type: "button",
                class: "c-btn",
                disabled: k.value >= Ut.value,
                onClick: G
              }, [
                De(h, { icon: ["fass", "chevrons-right"] })
              ], 8, Op)
            ])
          ])) : ae("", !0),
          Xt.value && !t.readonly ? (L(), Ie(A(a), {
            key: 3,
            ref: "import",
            "number-format": T.numberFormat,
            "custom-fields": Sn.value,
            "banding-options": Te.options,
            "banding-labels": Te.labels,
            "finish-options": Je.options,
            "finish-labels": Je.labels,
            onImport: To
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : ae("", !0),
          Le.value ? (L(), j("div", Lp, [
            it.value ? (L(), j("div", Fp, ue(it.value), 1)) : ae("", !0),
            K("pre", $p, ue(Tt.value), 1)
          ])) : ae("", !0),
          (T.enable.diagram ? Ze.value && !A(ge).complete : Ze.value || A(ge).complete) ? (L(), j("div", Ep, [
            De(da, {
              size: 50,
              number: A(ge).shapeCount,
              complete: A(ge).complete,
              "show-number": T.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ae("", !0),
          ys(K("div", Tp, [
            A(ie)?.saw?.stockType !== "roll" ? (L(), j("div", Mp, ue(A(ie)?.stack?.number ? A(ie).stack.number : 1), 1)) : ae("", !0),
            De(Yc, {
              "element-id": "diagram",
              "number-format": T.numberFormat,
              "decimal-places": T.decimalPlaces,
              colors: T.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [wa, T.enable.diagram && A(ge).complete]
          ]),
          ei.value && T.enable.diagram && A(ee).length > 1 && A(ge).complete ? (L(), Ie(rd, {
            key: 6,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: A(re)
          }, null, 8, ["onShow"])) : ae("", !0),
          !ei.value && T.enable.diagram && A(ee).length > 1 && A(ge).complete ? (L(), Ie(vd, {
            key: 7,
            ref: "stockNavigation",
            "active-stock-id": A(Q),
            "stock-list": A(ee),
            "primary-color": T.colors.stock?.replace("#", ""),
            "secondary-color": T.colors.partA?.replace("#", ""),
            onShowStock: A(re)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ae("", !0)
        ], 6)) : ae("", !0),
        A(Ke) === "development" && rs ? (L(), j("div", Np, [
          De(A(o), {
            data: [A(r)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          d[17] || (d[17] = K("div", null, "Result data", -1)),
          De(A(o), {
            data: [rt.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ae("", !0)
      ]);
    };
  }
}), Jp = /* @__PURE__ */ Xn(Bp, [["__scopeId", "data-v-d8a78eb2"]]);
export {
  ss as E,
  Ss as F,
  Yc as _,
  vd as a,
  Wn as b,
  Ba as c,
  Jp as d,
  Zp as e,
  Of as h,
  Kp as m,
  Va as u
};

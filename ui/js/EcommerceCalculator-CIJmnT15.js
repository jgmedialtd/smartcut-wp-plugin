import { r as G, w as st, m as F, _ as Dt, L as At, Y as hs, H as Bt, d as vt, $ as Gs, f as bn, M as Qa, c as D, o as O, b as H, h as Ee, l as nt, u as L, a as ne, V as Wa, t as me, p as Ui, v as Mn, n as Jt, F as Ct, k as Kt, G as ko, a0 as fn, j as pn, D as _t, S as gn, x as Gi, z as Ya, C as zs, i as ot, g as Dn, A as Ws, N as wo, y as zt, B as So, a1 as Wt, O as Gn, X as xo, J as en } from "./vendor-vue-BgOQH8dC.js";
import { bo as Ye, bp as In, aZ as Po, I as Ks, bq as On, br as Tn, bs as Hs, bt as Zs, bu as Js, bv as Ka, bw as wn, bx as vs, by as Oo, bz as Io, bA as Co, bB as Qs, bC as Ys, bD as vi, bE as Lo, bF as Ta, bG as Wn, bH as Fo, bl as _n, p as ca, W as Hn, bk as cn, Y as Zn, w as Vn, $ as qt, b0 as Eo, bI as bs, bJ as Ao, bd as da, bK as fa, bg as pa, F as ga, bL as ys, bM as ks, bN as $o, J as ws, bO as No, ad as To, aX as Mo, bP as Vo, bQ as ka, bR as Do, e as he, bS as Xs, h as dt, aW as Ti, bT as jo, k as Bo, aY as qo, a0 as Ss, a1 as Ma, bc as _o, bU as Ro, bV as Uo, x as rn, bW as Go, bX as xs, X as zo, B as Sn, U as Wo, V as bi, z as Ko, T as Ho, c as Zo, bY as Mi, bf as Jo, bZ as Qo, f as Yo, b_ as Xo, b$ as er, c0 as el, c1 as tr, c2 as nr, c3 as yi, c4 as ar, c5 as ir, c6 as tl, c7 as sr, c8 as lr, c9 as or, ca as rr, cb as ur, cc as cr, cd as dr, ce as Vi, cf as fr, cg as pr, ch as gr, ci as mr, cj as hr, ck as Cn, cl as ki, cm as vr, j as nn, cn as Ps, co as Os, cp as wi, cq as br, t as Is, q as Cs, u as Si, s as xi } from "./result.zod-n9AiX9Qf.js";
import { s as Pi, d as yr, u as kr, l as Oi, b as wr } from "./i18n-B29Te7vQ.js";
import { M as ya, Z as Va, o as St, J as ft, G as Ln, i as je, N as Ls, O as Sr, Q as nl, S as xr, F as rt, H as al, u as Pr, I as ht, T as Fs, U as Da, V as Or, W as Ir, X as Es, Y as Cr, $ as ja, a0 as Ii, a1 as Ci, a2 as Li, l as Lr, j as te, q as ye, n as y, A as R, h as Kn, L as Fr, x as Ce, v as ut, t as yn, C as hn, w as et, k as Re } from "./vendor-CN6j6kBQ.js";
import { o as il, f as sl, s as ll, a as ol, d as Er } from "./vendor-floating-ui-CCq0hEoe.js";
import { _ as Qt } from "./Launch-BRH4wqOZ.js";
import { t as Ie } from "./i18n-BkCqM2rg.js";
import { b as Di } from "./environment-BeBZzWz6.js";
import "./vendor-i18next-DIDhOEvY.js";
function Ar(e, n = "cc") {
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
const rl = {
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
function $r(e) {
  return e !== 0 && e !== 1 && e !== 2 ? !1 : rl[e].sidesLMatchShapeL;
}
function Nr(e) {
  return e !== 0 && e !== 1 && e !== 2 ? [] : rl[e].affectedExtraTypes;
}
function _a(e = 0, n, t = null, a = null, i = null) {
  if (!Ye(t) && !In || a === "stock") return !1;
  let l, u;
  if (Ye(t) ? l = t.orientationLock : In(t) ? l = "l" : a === "shape" && (l = i), e === 0 || In(t))
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
function Tr(e, n, t = null, a = null, i = null) {
  if (!Ye(t) || a === "shape") return !1;
  let l;
  return e === 0 || e === 1 || e === 2 ? _a(e, n, t, a, i) ? "cc" : !1 : l;
}
function Mr(e, n = []) {
  if (!e?.length) return [];
  const t = e.map((a) => a && typeof a.getType == "function" ? a : Po(a)).filter((a) => a instanceof Ks);
  return n.length && Vr(t, n), t;
}
function Vr(e = [], n = []) {
  e.length && n.length && e.forEach((t) => {
    t.shapeIds = t.shapeIds.filter((a) => n.find((i) => i.autoId === a));
  });
}
let Ra = null;
if (Di())
  try {
    Ra = require("~/helpers/applicationSettings").applicationSettings;
  } catch (e) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", e);
  }
function zn(e, n, t = {}) {
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
  if (!Di()) {
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
    return st(u, (r) => {
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
  if (Di()) {
    if (!Ra)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), G(n);
    const u = G((() => {
      try {
        const r = Ra.getString(e);
        if (r)
          return a.read(r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to load", e, "from ApplicationSettings:", r);
      }
      return n;
    })());
    return st(u, (r) => {
      try {
        const f = a.write(r);
        Ra.setString(e, f);
      } catch (f) {
        console.error("[useCrossPlatformStorage] Failed to save", e, "to ApplicationSettings:", f);
      }
    }, { deep: !0 }), u;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", e, "- using in-memory fallback"), G(n);
}
function Dr() {
  const e = Date.now(), n = Math.random().toString(36).substring(2, 15), t = Math.random().toString(36).substring(2, 15);
  return `${e.toString(36)}-${n}-${t}`;
}
const xn = G([]), jr = 6;
function zi() {
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
      id: Dr(),
      message: Pi(t),
      additional: i.length > 5 ? i.slice(0, 5).map((p) => Pi(p)).join("<br>") + "<br>..." : i.slice(0, 5).map((p) => Pi(p)).join("<br>"),
      type: a,
      persistent: l.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: u
    }, f = l.maxNotices ?? jr;
    if (xn.value.length >= f) {
      const p = xn.value.findIndex((b) => !b.persistent);
      if (p !== -1)
        xn.value.splice(p, 1);
      else if (!r.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), r.id;
    }
    return xn.value.push(r), !r.persistent && l.timeout !== 0 && setTimeout(() => n(r.id), l.timeout || 6e3), r.id;
  }, n = (t) => {
    xn.value.findIndex((i) => i.id === t) !== -1 && (xn.value = xn.value.filter((i) => i.id !== t));
  };
  return {
    notices: xn,
    addNotice: e,
    dismissNotice: n
  };
}
const As = /* @__PURE__ */ new Set(), Xa = zn("cle-extras-config", {}), ji = (e, n) => {
  Xa.value[e] = n;
}, dn = (e) => Xa.value[e] || null, Br = () => Xa.value;
let $s = !1;
const qr = () => {
  $s || (Fo({
    getExtrasConfig: dn,
    getAllExtrasConfigs: Br,
    setExtrasConfig: ji
  }), $s = !0);
}, _r = (e, n) => {
  const t = dn(e);
  if (!t || !t.options || t.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = t.options[0], i = Array.isArray(a) && typeof a[0] == "string" ? a : [];
  if (i.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const l = (f) => t.options.length > 1 ? f.includes("|") ? t.pricing && Object.keys(t.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(t.pricing, f) ? !0 : Object.keys(t.pricing).some((I) => I.startsWith(f + "|") || I === f) : f.split("|").every((b, I) => {
    if (I >= t.options.length) return !1;
    const E = t.options[I];
    return Array.isArray(E) && typeof E[0] == "string" && E.includes(b);
  }) : t.options.some((p) => Array.isArray(p) && typeof p[0] == "string" && p.includes(f)) : i.includes(f), u = /* @__PURE__ */ new Set();
  let r = 0;
  return n.forEach((f) => {
    if (!f.extras?.[e]) return;
    const p = f.extras[e].sides || {};
    Object.entries(p).forEach(([I, E]) => {
      typeof E == "string" && E && !l(E) && (u.add(E), p[I] = "", r++);
    });
    const b = f.extras[e].faces || {};
    Object.entries(b).forEach(([I, E]) => {
      typeof E == "string" && E && !l(E) && (u.add(E), b[I] = "", r++);
    });
  }), {
    cleanedCount: r,
    invalidOptions: Array.from(u)
  };
}, Rr = (e) => {
  qr();
  const {
    shape: n,
    extraType: t,
    allOptions: a,
    labels: i,
    userFriendlyFieldMap: l,
    allowCustomNames: u,
    customNames: r = G([]),
    enablePricing: f = !1,
    pricing: p,
    displayNames: b,
    locations: I = G([]),
    locationGroups: E = G([]),
    orientationModel: h = 0,
    getAvailablePricingOptions: M,
    getPrice: J,
    findExtrasPrice: ue,
    formatPrice: _
  } = e, j = F(() => hs(a) ? a.value : a), pe = F(() => hs(b) ? b.value : b), le = () => {
    const c = dn(t), m = j.value?.length ? j.value : c?.options || [], A = c?.labels || i;
    On(n.value, t, m, A, r.value);
  };
  le(), st(
    () => n.value?.extras?.[t],
    (c) => {
      if (c) {
        const m = c?.sides || {}, A = c?.options?.sides || {};
        let z = !1;
        for (const [U, X] of Object.entries(m))
          if (typeof X == "string") {
            if (X.includes("|") && !A[U]) {
              z = !0;
              break;
            } else if (X !== "" && !A[U]) {
              z = !0;
              break;
            }
          }
        z && le();
      }
    },
    { immediate: !1 }
  );
  const v = F(() => Xa.value[t] || null), T = F(() => {
    const c = j.value?.length ? j.value : v.value?.options || [];
    if (c.length > 1)
      return "multiple";
    const A = (c[0] || []).filter((de) => typeof de == "string"), z = (r.value || []).filter((de) => typeof de == "string"), X = Array.from(/* @__PURE__ */ new Set([...A, ...z])).length;
    return X === 0 ? "boolean" : X === 1 ? "single" : "multiple";
  }), Q = F(() => Wn(t)), $ = F(() => I.value && I.value.length > 0 ? I.value.filter((c) => c !== "all" && c !== "faces" && c !== "sides") : Q.value), q = F(() => $.value.filter((c) => Tn(c) === "face")), S = F(() => $.value.filter((c) => Tn(c) === "side")), K = F(() => Zs(t)), ie = F(() => Hs(t)), fe = F(() => Js(t)), re = () => {
    const c = j.value?.length ? j.value : v.value?.options;
    return !!c && c.length > 1;
  }, Je = (c, m, A) => {
    const { singleOption: z = sn(), operation: U } = A;
    switch (m) {
      case "boolean":
        return !!c;
      case "single":
        return z ? U === "process" || U === "set" ? c && z ? z : "" : c === z ? z : "" : !!c;
      case "multiple":
        return c || "";
      default:
        return c;
    }
  }, We = (c, m, A) => Je(m, A, { operation: "process" }), ke = (c, m, A, z, U, X) => {
    switch (X) {
      case "boolean":
        Ta(c, m, A, z, !!U);
        break;
      case "single": {
        const de = sn();
        Ta(c, m, A, z, U ? de : "");
        break;
      }
      case "multiple":
        Ta(c, m, A, z, U || "");
        break;
    }
  }, Le = (c, m, A = {}) => {
    const z = A.singleOption || sn();
    return A.allowCustomNames, Je(c, m, {
      operation: "get",
      singleOption: z
    });
  }, pt = (c, m, A, z) => {
    switch (z) {
      case "boolean":
        return !!c;
      case "single": {
        const U = sn();
        if (U) {
          const X = m.map((Oe) => wn(n.value, t, Oe, A)), de = X.every((Oe) => Oe === U || Oe === !0), Te = X.every((Oe) => !Oe || Oe === "");
          return de ? U : Te ? "" : null;
        }
        return !!c;
      }
      case "multiple":
        return typeof c == "string" ? c : c || "";
      default:
        return c;
    }
  }, V = (c, m, A, z = !1) => {
    if (z)
      c.forEach((U) => ee(U, m, A));
    else {
      const U = i[m] || "", X = We(U, A, T.value);
      c.forEach((de) => {
        ke(n.value, t, de, U, X, T.value);
      });
    }
  }, Y = (c, m) => {
    if (re()) {
      const A = i[m] || "", z = c.map((Te) => {
        const Oe = wn(n.value, t, Te, A);
        return Oe === !0 ? Ut(m)[0] || "" : String(Oe || "");
      }), U = z[0] || "";
      return z.every((Te) => Te === U) ? U : null;
    } else {
      const A = i[m] || "";
      if (T.value === "single") {
        const U = sn();
        if (U) {
          const X = c.map((Oe) => wn(n.value, t, Oe, A)), de = X.every((Oe) => Oe === U || Oe === !0), Te = X.every((Oe) => !Oe || Oe === "");
          return de ? U : Te ? "" : null;
        }
      }
      const z = vs(n.value, t, c, A, T.value);
      return T.value === "multiple" && z === !1 && c.every((X) => {
        const de = wn(n.value, t, X, A, T.value);
        return de === "" || de === !1 || de === null || de === void 0;
      }) ? "" : z;
    }
  }, ve = (c) => {
    const { location: m, locationType: A = "single", optionIndex: z, stateValue: U, isAggregate: X = !1 } = c, de = Ut(z), Te = X && m !== void 0 && mt(m), Oe = Te && de.some((Ge) => typeof Ge == "string" && Ge.endsWith(`|${m}`)), Ot = Te && (de.length <= 1 || Oe), Ve = X ? ce(z, m && mt(m) ? m : A) : ce(z, m), qe = f && de.length > 1 && Ve.length === 0, Qe = (() => {
      if (!qe || z === 0 || !m) return !1;
      for (let Ge = 0; Ge < z; Ge++) {
        let Nt = null;
        if (Te && typeof m == "string" ? Nt = x(m, Ge) : X ? m === "all" ? Nt = ct(Ge) : m === "faces" ? Nt = Lt(Ge) : m === "sides" && (Nt = gt(Ge)) : Nt = ge(m, Ge), !Nt) return !0;
      }
      return !1;
    })(), yt = !Ot && de.length > 1 && (!qe || Qe) ? "select" : "checkbox";
    if (qe && m && !Qe) {
      const Ge = `${t}:${m}:${z}`;
      As.has(Ge) || (As.add(Ge), zi().addNotice({
        type: "warning",
        message: `No price set for ${t} at ${m}. This option is not currently available.`
      }));
    }
    const It = T.value === "multiple" && Ve.length === 1 && f && z > 0;
    if (It && Ve[0]) {
      if (X) {
        let Ge = [];
        A === "all" ? Ge = $.value : A === "faces" ? Ge = q.value : A === "sides" ? Ge = S.value : m && mt(m) && (Ge = bt(m)), Ge.forEach((Nt) => {
          const at = ge(Nt, z);
          (!at || at !== Ve[0]) && ee(Nt, z, Ve[0]);
        });
      } else if (m) {
        const Ge = ge(m, z);
        (!Ge || Ge !== Ve[0]) && ee(m, z, Ve[0]);
      }
    }
    let na = !1;
    const on = dn(t);
    if (on?.optionLocations && m && m !== "all" && yt === "checkbox" && de.length === 1) {
      const Ge = on.optionLocations[de[0]];
      Ge && !Ge.includes(m) && (na = !0);
    }
    const Pa = qe || T.value === "multiple" && (Ve.length === 0 || It), Yt = U !== void 0 ? U : m ? ge(m, z) : null, ii = yt === "select" ? Me(m || A, z) : void 0, si = (Ge) => (pe.value ?? v.value?.displayNames)?.[Ge] || Ge, jn = yt === "checkbox" ? Ot ? c.customLabel : de.length === 1 ? si(de[0]) : void 0 : void 0;
    let aa, ia;
    if (yt === "checkbox")
      if (Ot && de.length > 1) {
        const Ge = de.find((Nt) => Nt.endsWith(`|${m}`));
        Ge && (aa = Ge, ia = "");
      } else de.length === 1 && (aa = de[0], ia = "");
    return {
      inputType: yt,
      // Alias for backward compatibility
      type: yt,
      value: Yt,
      options: ii,
      disabled: Pa,
      hidden: na,
      label: jn,
      indeterminate: Yt === null && yt === "checkbox",
      trueValue: aa,
      falseValue: ia
    };
  }, Ne = (c, m, A) => ve({
    locationType: c,
    optionIndex: m,
    stateValue: A,
    isAggregate: !0
  }), ee = (c, m, A) => {
    const z = i[m] || "";
    if (re()) {
      const U = Se(c, m);
      let X;
      if (U === "checkbox") {
        const Te = Ut(m)[0];
        X = A ? Te : "";
      } else
        X = A || "";
      Ta(n.value, t, c, z, X);
    } else
      ke(n.value, t, c, z, A, T.value);
  }, ge = (c, m) => {
    const A = i[m] || "";
    if (re()) {
      const z = wn(n.value, t, c, A);
      if (Se(c, m) === "checkbox") {
        const de = Ut(m)[0];
        return z === !0 || z === de ? de : "";
      } else
        return z || "";
    } else {
      const z = wn(n.value, t, c, A, T.value);
      return Le(z, T.value);
    }
  }, Fe = (c, m) => {
    V($.value, c, m, re());
  }, ct = (c) => {
    if (re()) {
      const m = i[c] || "", A = $.value.map((X) => {
        const de = wn(n.value, t, X, m);
        return de === !0 ? Ut(c)[0] || "" : String(de || "");
      }), z = A[0] || "";
      return A.every((X) => X === z) ? z : null;
    } else {
      const m = i[c] || "", A = vs(n.value, t, $.value, m, T.value);
      return pt(A, $.value, m, T.value);
    }
  }, an = () => {
    vi(n.value, t, $.value, T.value), At(n);
  }, oe = (c) => c === "faces" ? {
    locations: q.value,
    isSupported: K.value
  } : {
    locations: S.value,
    isSupported: ie.value
  }, Ae = (c, m, A) => {
    const { locations: z, isSupported: U } = oe(c);
    U && V(z, m, A, re());
  }, Ue = (c, m) => {
    const { locations: A, isSupported: z } = oe(c);
    return z ? Y(A, m) : null;
  }, we = (c) => {
    const { locations: m, isSupported: A } = oe(c);
    A && (vi(n.value, t, m, T.value), At(n));
  }, $e = (c, m) => {
    const { isSupported: A } = oe(c);
    if (!A) return { type: "checkbox", value: !1 };
    const z = Ue(c, m);
    return Ne(c, m, z);
  }, be = (c, m) => {
    Ae("faces", c, m);
  }, xt = (c, m) => {
    Ae("sides", c, m);
  }, Lt = (c) => Ue("faces", c), gt = (c) => Ue("sides", c), kn = () => {
    we("faces");
  }, lt = () => {
    we("sides");
  }, $t = (c) => E.value.find((m) => m.id === c), mt = (c) => ["all", "faces", "sides"].includes(c) ? !1 : !c.includes("."), bt = (c) => {
    const m = $t(c);
    return m ? m.locations.filter((A) => $.value.includes(A)) : [];
  }, Fn = (c, m, A) => {
    const z = bt(c);
    z.length !== 0 && (z.forEach((U) => ee(U, m, A)), At(n));
  }, x = (c, m) => {
    const A = bt(c);
    if (A.length === 0) return null;
    if (!re()) {
      const X = Ut(m).find((de) => de.endsWith(`|${c}`));
      if (X) {
        const de = i[m] || "", Te = A.map((Ve) => wn(n.value, t, Ve, de)), Oe = Te.every((Ve) => Ve === X), Ot = Te.some((Ve) => Ve === X);
        return Oe ? X : Ot ? null : "";
      }
    }
    const z = Y(A, m);
    return !re() && (z === null || z === !1 || z === "") ? "" : z;
  }, C = (c) => {
    const m = bt(c);
    m.length !== 0 && (vi(n.value, t, m, T.value), At(n));
  }, k = (c, m) => {
    const A = x(c, m), z = $t(c);
    return ve({
      location: c,
      optionIndex: m,
      stateValue: A,
      isAggregate: !0,
      customLabel: z?.label
    });
  }, B = (c) => {
    Lo(n.value, t, c, T.value), At(n);
  }, ae = (c) => c === "all" ? $.value.some((m) => !!ge(m, 0)) : c === "faces" && K.value ? q.value.some((m) => !!ge(m, 0)) : c === "sides" && ie.value ? S.value.some((m) => !!ge(m, 0)) : mt(c) ? bt(c).some((A) => !!ge(A, 0)) : $.value.includes(c) ? !!ge(c, 0) : !1, xe = (c) => {
    if (c === "all") return Ie("general.all");
    if (c === "faces") return `${Ie("general.all")} ${Ie("machining.face_other")}`;
    if (c === "sides") return `${Ie("general.all")} ${Ie("woodwork.edge_other")}`;
    if (mt(c)) {
      const z = $t(c);
      if (z) return z.label;
    }
    if (c.startsWith("face.")) {
      const U = `faces.${c.replace("face.", "")}`;
      return Ie(U);
    }
    if (c.startsWith("side.")) {
      let z = c.replace("side.", "");
      (h === 1 || h === 2) && n.value && n.value.w > n.value.l && (z = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[z] || z);
      const U = `sides.${z}`;
      return Ie(U);
    }
    const m = `fields.${c}`, A = Ie(m);
    return A !== m ? A : l?.[c] ? l[c] : c;
  }, Se = (c, m) => T.value === "boolean" ? "checkbox" : Ut(m).length > 1 ? "select" : "checkbox", Be = (c, m) => ve({
    location: c,
    optionIndex: m,
    isAggregate: !1
  }), Ke = (c) => {
    const m = ct(c);
    return Ne("all", c, m);
  }, Xe = (c) => $e("faces", c), Pt = (c) => $e("sides", c), Rt = (c, m) => c === "all" ? Ke(m) : c === "faces" ? Xe(m) : c === "sides" ? Pt(m) : mt(c) ? k(c, m) : Be(c, m), ce = (c, m) => {
    const A = dn(t), U = (j.value?.length ? j.value : A?.options || [])[c];
    if (!U || U[0] === !0)
      return [];
    const X = m && typeof m == "string" && (m.startsWith("face.") || m.startsWith("side.")), de = m && typeof m == "string" && mt(m), Te = !X && (m === "all" || m === "faces" || m === "sides" || de);
    if (Array.isArray(U) && U.length === 1 && typeof U[0] == "string" && !(f && M && (X || Te) && c > 0))
      return U;
    if (f && M && X) {
      const Ve = [];
      if (c > 0)
        for (let qe = 0; qe < c; qe++) {
          const Qe = ge(m, qe);
          if (typeof Qe == "string" && Qe)
            Ve.push(Qe);
          else if (typeof Qe == "boolean")
            Ve.push(Qe);
          else {
            const yt = dn(t), It = Ka(n.value, t, m);
            return It && typeof It == "object" && !Array.isArray(It) && Object.keys(It).length > 1 && yt?.options[c] ? yt.options[c] : [];
          }
        }
      return M(p, Ve, c);
    }
    if (f && M && Te) {
      const Ve = [];
      if (c > 0)
        for (let qe = 0; qe < c; qe++) {
          let Qe;
          if (m === "all" ? Qe = ct(qe) : m === "faces" ? Qe = Lt(qe) : m === "sides" ? Qe = gt(qe) : de && typeof m == "string" && (Qe = x(m, qe)), typeof Qe == "string" && Qe)
            Ve.push(Qe);
          else if (typeof Qe == "boolean")
            Ve.push(Qe);
          else
            return [];
        }
      return M(p, Ve, c);
    }
    const Oe = U, Ot = u ? (r.value || []).filter((Ve) => typeof Ve == "string") : [];
    return [.../* @__PURE__ */ new Set([...Oe, ...Ot])];
  }, Me = (c, m) => {
    const A = dn(t), U = (j.value?.length ? j.value : A?.options)?.[m] || [], X = u && r.value ? r.value.filter((qe) => typeof qe == "string") : [];
    let de = [.../* @__PURE__ */ new Set([...U, ...X])];
    A?.optionLocations && c && c !== "all" && (de = de.filter((qe) => {
      const Qe = A.optionLocations[qe];
      return Qe ? Qe.includes(c) : !0;
    }));
    const Te = ce(m, c), Oe = new Set(Te), Ot = pe.value ?? A?.displayNames;
    return de.map((qe) => ({
      value: qe,
      label: Ot?.[qe] || qe,
      disabled: !Oe.has(qe)
    }));
  }, sn = () => {
    const c = ce(0);
    return c.length === 1 ? c[0] : void 0;
  }, wa = (c) => {
    const m = ce(c);
    return m.length === 1 ? m[0] : void 0;
  }, Ut = (c) => {
    const m = dn(t), A = j.value?.length ? j.value : m?.options;
    let z = [];
    if (A && A[c] && Array.isArray(A[c])) {
      const X = A[c];
      Array.isArray(X) && X.every((de) => typeof de == "string") && (z = X);
    }
    const U = u && r.value ? r.value.filter((X) => typeof X == "string") : [];
    return [.../* @__PURE__ */ new Set([...z, ...U])];
  }, Ft = (c, m = 0) => {
    if (c === "all" || c === "faces" || c === "sides")
      return "";
    if (mt(c)) {
      const z = $t(c);
      return z?.price !== void 0 && x(c, m) ? _ ? _(z.price) : z.price.toString() : "";
    }
    if (!f || !J)
      return "";
    if (!$.value.includes(c))
      return "N/A";
    const A = J(n.value, t, c, ue);
    return A ? _ ? _(A) : A.toString() : "N/A";
  }, En = (c) => {
    if (!f || !J) return !1;
    if (typeof c == "string" && mt(c)) {
      const m = $t(c);
      return typeof m?.price == "number" ? m.price : !1;
    }
    return J(n.value, t, c, ue);
  }, An = F(() => $.value.length > 1), $n = F(() => Q.value.length > 1), Yn = () => {
    if (I.value && I.value.length > 0) {
      const U = [];
      return E.value && E.value.length > 0 && E.value.forEach((X) => U.push(X.id)), U.push(...I.value), U;
    }
    const c = [], m = E.value && E.value.length > 0;
    m && E.value.forEach((U) => c.push(U.id)), m || (An.value && c.push("all"), $n.value && (Qs(t).length > 0 && c.push("faces"), Ys(t).length > 0 && c.push("sides")));
    const A = /* @__PURE__ */ new Set();
    E.value && E.value.length > 0 && E.value.forEach((U) => {
      U.hideIndividualLocations && U.locations.forEach((X) => A.add(X));
    });
    const z = Q.value.filter((U) => !A.has(U));
    return c.push(...z), c;
  }, ti = () => T.value === "multiple", ni = () => {
    const c = 1 + j.value.length, m = T.value === "multiple", A = f, z = c + (m ? 1 : 0) + (A ? 1 : 0);
    return {
      columns: z,
      style: `repeat(${z}, max-content)`
    };
  }, Xn = (c) => c === "all" ? "all" : c === "faces" ? "faces" : c === "sides" ? "sides" : "individual", Sa = (c) => Tn(c), ai = (c) => {
    if (c === "all")
      return An.value;
    if (mt(c))
      return $t(c) ? bt(c).length > 0 : !1;
    if (I.value && I.value.length > 0)
      return I.value.includes(c);
    const m = Xn(c);
    return m === "all" ? An.value : m === "faces" || m === "sides" ? m === "faces" && K.value && q.value.length > 0 || m === "sides" && ie.value && S.value.length > 0 ? $n.value : !1 : Q.value.includes(c);
  }, ea = (c) => {
    Co(c, t, r);
  }, Nn = (c) => {
    Io([n.value], t, c, i);
  }, ta = (c) => {
    Oo([n.value], t, c);
  }, Et = (c, m, A) => {
    if (c === "all")
      Fe(m, A);
    else if (c === "faces")
      be(m, A);
    else if (c === "sides")
      xt(m, A);
    else if (mt(c)) {
      let U = A;
      if (!re() && typeof A == "boolean") {
        const X = Ut(m), de = X.find((Te) => Te.endsWith(`|${c}`));
        de ? U = A ? de : "" : X.length === 1 && (U = A ? X[0] : "");
      }
      if (!re() && U) {
        const X = bt(c), de = new Set(X);
        E.value && (E.value.forEach((Te) => {
          Te.id !== c && bt(Te.id).filter((Ve) => !de.has(Ve)).forEach((Ve) => {
            ee(Ve, m, "");
          });
        }), At(n));
      }
      Fn(c, m, U);
    } else
      ee(c, m, A), re() || At(n);
    const z = i.length;
    for (let U = m + 1; U < z; U++) {
      let X;
      if (c === "all" ? X = ct(U) : c === "faces" ? X = Lt(U) : c === "sides" ? X = gt(U) : mt(c) ? X = x(c, U) : X = ge(c, U), !X)
        continue;
      const de = ce(U, c);
      let Te = !1;
      if (typeof X == "string" ? Te = de.includes(X) : typeof X == "boolean" && X === !0 && (Te = de.length > 0), !Te) {
        const Oe = Se(c, U) === "checkbox" ? !1 : "";
        c === "all" ? Fe(U, Oe) : c === "faces" ? be(U, Oe) : c === "sides" ? xt(U, Oe) : mt(c) ? Fn(c, U, Oe) : ee(c, U, Oe);
      }
    }
  }, Pe = (c, m = !0) => m && !confirm(`Delete ${t} for ${xe(c)}?`) ? !1 : (c === "all" ? an() : c === "faces" ? kn() : c === "sides" ? lt() : mt(c) ? C(c) : B(c), !0), He = () => {
    const c = n.value[t], m = n.value[`${t}Options`];
    return !(!c || typeof c != "object" || !m || typeof m != "object" || K.value && (!("faces" in c) || !("faces" in m)) || ie.value && (!("sides" in c) || !("sides" in m)));
  }, ln = () => {
    const c = [], m = n.value[t], A = n.value[`${t}Options`];
    return !m || typeof m != "object" ? c.push(`Missing or invalid ${t} property in shape`) : (K.value && !("faces" in m) && c.push(`Missing faces property in ${t}`), ie.value && !("sides" in m) && c.push(`Missing sides property in ${t}`)), !A || typeof A != "object" ? c.push(`Missing or invalid ${t}Options property in shape`) : (K.value && !("faces" in A) && c.push(`Missing faces property in ${t}Options`), ie.value && !("sides" in A) && c.push(`Missing sides property in ${t}Options`)), c;
  }, it = (c) => {
    const m = [];
    if (!c || !Object.keys(c).length)
      return { valid: !0, errors: m };
    const A = Object.keys(c), z = Math.max(...A.map((U) => U.split("|").length));
    if (z <= 1)
      return { valid: !0, errors: m };
    for (const U of $.value) {
      let X;
      if (re()) {
        const Oe = Ka(n.value, t, U);
        Oe && typeof Oe == "object" && !Array.isArray(Oe) ? X = i.map((Ve) => {
          const qe = Oe[Ve];
          if (qe === !0) {
            const Qe = i.indexOf(Ve);
            return Ut(Qe)[0] || "";
          }
          return String(qe || "");
        }).join("|") : X = "";
      } else {
        const Oe = ge(U, 0);
        X = typeof Oe == "string" ? Oe : "";
      }
      if (!X || X === "")
        continue;
      const de = X.includes("|") ? X.split("|") : [X], Te = de.filter((Oe) => Oe.trim() !== "").length;
      if (Te > 0 && Te < z) {
        const Oe = de.join("|"), Ot = A.some((qe) => qe.startsWith(Oe + "|")), Ve = A.includes(Oe);
        if (Ot && !Ve) {
          const qe = z - Te, Qe = de.filter((It) => It.trim() !== "").join(", "), yt = xe(U);
          m.push(`${t} selection incomplete for ${yt}. Selected: "${Qe}" but ${qe} more level${qe > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: m.length === 0, errors: m };
  }, xa = (c) => it(c).errors, Gt = F(() => Yn().map((c) => ({
    location: c,
    label: xe(c),
    isAggregate: ["all", "faces", "sides"].includes(c) || mt(c)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: T,
    // Raw computed ref (not readonly wrapped)
    allLocations: Dt($),
    faceLocations: Dt(q),
    sideLocations: Dt(S),
    shouldShowAll: An,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: Dt($n),
    renderLocations: Dt(Gt),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: Dt(K),
    supportsSides: Dt(ie),
    supportsBoth: Dt(fe),
    // Core operations
    setValue: ee,
    getValue: ge,
    setAll: Fe,
    getAll: ct,
    getAllState: ct,
    // Alias for backward compatibility
    deleteSingle: B,
    deleteAll: an,
    canDelete: ae,
    // Group-specific operations
    setAllFaces: be,
    setAllSides: xt,
    getAllFaces: Lt,
    getAllSides: gt,
    deleteAllFaces: kn,
    deleteAllSides: lt,
    // UI helpers
    getLocationLabel: xe,
    getInputType: Se,
    getInputConfig: Be,
    getAllInputConfig: Ke,
    getAllFacesInputConfig: Xe,
    getAllSidesInputConfig: Pt,
    getInputConfigForLocation: Rt,
    getSelectOptions: Me,
    getSingleOptionLabel: wa,
    // Pricing
    getPriceDisplay: Ft,
    getCalculatedPrice: En,
    // Layout & rendering
    getRenderLocations: Yn,
    shouldShowDeleteButton: ti,
    getGridConfig: ni,
    getLocationGroup: Xn,
    getLocationScope: Sa,
    isLocationVisible: ai,
    // Options management
    getAvailableOptions: ce,
    getSingleAvailableOption: sn,
    // Initialization & migration
    initialize: le,
    initializeExtra: le,
    // Alias for backward compatibility
    initializeCustomNames: ea,
    migrateToSingle: Nn,
    migrateToBoolean: ta,
    // Event handlers
    handleInputChange: Et,
    handleDelete: Pe,
    // Validation
    validateShape: He,
    getValidationErrors: ln,
    validateIncompleteSelections: it,
    getIncompleteSelectionErrors: xa,
    // Debug helpers (development only)
    getDebugInfo: (c, m) => ({
      mode: T.value,
      location: c,
      optionIndex: m,
      value: $.value.includes(c) ? ge(c, m) : "N/A",
      inputType: Se(c, m),
      canDelete: ae(c),
      allState: ct(m),
      availableOptions: ce(m),
      locationGroup: Xn(c),
      config: v.value,
      supportsFaces: K.value,
      supportsSides: ie.value,
      supportsBoth: fe.value,
      ...K.value && {
        allFacesState: Lt(m)
      },
      ...ie.value && {
        allSidesState: gt(m)
      },
      ...$.value.includes(c) && {
        locationScope: Sa(c)
      }
    })
  };
}, Ur = (e) => {
  const {
    customNames: n,
    usedNames: t,
    allowCustomNames: a,
    getSelectOptions: i,
    onCustomNameAdded: l,
    onCustomNameDeleted: u
  } = e, r = G(""), f = F(() => a && r.value?.trim()), p = F(() => !a || !n.value || n.value.length === 0 || n.value.length === 1 && n.value[0] === !0 ? !0 : n.value.filter((M) => typeof M == "string").every((M) => t.value.includes(M))), b = F(() => {
    const h = [];
    if (a && n.value && n.value.length > 0) {
      if (n.value.length === 1 && n.value[0] === !0)
        return h;
      const J = [...n.value.filter((ue) => typeof ue == "string")].sort();
      h.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), J.forEach((ue) => {
        (t.value?.includes(ue) ?? !1) || h.push({
          id: `delete-${ue}`,
          label: `Delete "${ue}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return h;
  }), I = () => {
    const h = r.value?.trim();
    if (!h) return;
    if (i("", 0).map((J) => J.value).includes(h)) {
      r.value = "";
      return;
    }
    l(h), r.value = "";
  }, E = (h) => {
    const M = h.item || h;
    if (M.id?.startsWith("delete-")) {
      const J = M.id.replace("delete-", "");
      if (t.value?.includes(J)) {
        console.warn(`Cannot delete ${e.extraType} type "${J}" - it is currently in use`);
        return;
      }
      u(J);
    }
  };
  return {
    newCustomName: r,
    canAddCustomName: Dt(f),
    isActionMenuDisabled: Dt(p),
    customNameActions: b,
    handleAddCustomName: I,
    handleCustomNameAction: E
  };
}, Gr = (e) => {
  const {
    extraType: n,
    labels: t,
    shapeIndex: a,
    enablePricing: i,
    shouldShowAll: l,
    locations: u,
    locationGroups: r = G([]),
    shape: f = G(null),
    orientationModel: p = 0,
    getInputType: b,
    getInputConfig: I,
    getAllInputConfig: E,
    getInputConfigForLocation: h,
    canDelete: M,
    getLocationLabel: J,
    shouldShowDeleteButton: ue
  } = e, _ = F(() => {
    const Q = [], $ = r.value && r.value.length > 0, q = /* @__PURE__ */ new Set();
    if ($ && r.value.forEach((K) => {
      K.hideIndividualLocations && K.locations.forEach((ie) => q.add(ie));
    }), $ && r.value.forEach((K) => Q.push(K.id)), !$ && l.value && Q.push("all"), u.value && u.value.length > 0)
      Q.push(...u.value.filter((K) => K !== "all" && !q.has(K)));
    else {
      const K = Wn(n), ie = Js(n), fe = Zs(n), re = Hs(n);
      !$ && (ie && fe && re) && (Qs(n).length > 0 && Q.push("faces"), Ys(n).length > 0 && Q.push("sides")), Q.push(...K.filter((We) => !q.has(We)));
    }
    let S = Array.from(new Set(Q));
    if ((p === 1 || p === 2) && f.value && f.value.w > f.value.l) {
      const K = ["side.l1", "side.l2", "side.w1", "side.w2"], ie = S.map((fe, re) => ({ loc: fe, i: re })).filter((fe) => K.includes(fe.loc));
      if (ie.length > 0) {
        const fe = ie[0].i, re = ie.filter((ke) => ke.loc.includes(".w")).sort((ke, Le) => ke.loc.localeCompare(Le.loc)), Je = ie.filter((ke) => ke.loc.includes(".l")).sort((ke, Le) => ke.loc.localeCompare(Le.loc)), We = [...re.map((ke) => ke.loc), ...Je.map((ke) => ke.loc)];
        S = S.filter((ke) => !K.includes(ke)), S.splice(fe, 0, ...We);
      }
    }
    return S;
  }), j = F(() => `1fr${i ? " max-content" : ""}`), pe = (Q, $) => `${n}-${Q}-${t[$]}-${$}-${a}`, le = (Q) => {
    const $ = J(Q);
    return `Delete ${n} for ${$}`;
  }, v = (Q) => ({
    show: ue(Q),
    enabled: M(Q),
    ariaLabel: le(Q)
  }), T = (Q, $) => b(Q, $);
  return {
    renderLocations: Dt(_),
    gridStyle: Dt(j),
    getInputId: pe,
    getDeleteAriaLabel: le,
    getInputConfigForLocation: h,
    getDeleteConfig: v,
    getInputTypeForLocation: T,
    // Re-export the passed functions for consistency
    getInputType: b,
    getInputConfig: I,
    getAllInputConfig: E,
    canDelete: M,
    shouldShowDeleteButton: ue,
    getLocationLabel: J
  };
};
function Bi(e) {
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
function Ns(e) {
  return e.map((n) => {
    const t = n.path.length > 0 ? n.path.join(".") : "root", a = Bi(n), i = Ao(n.message, a);
    return `[${t}] ${i}`;
  });
}
function ma(e, n) {
  const t = e.safeParse(n);
  return {
    success: t.success,
    data: t.success ? t.data : void 0,
    errors: t.success ? void 0 : t.error.issues
  };
}
function zr(e = {}) {
  try {
    let n = function(x) {
      if (!x || typeof x != "object") return x;
      const C = { ...x };
      if (delete C.issues, delete C.warnings, C.trim && typeof C.trim == "object") {
        const k = C.trim;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (C.trim = {
          l1: k.y1 ?? k.l1 ?? 0,
          l2: k.y2 ?? k.l2 ?? 0,
          w1: k.x1 ?? k.w1 ?? 0,
          w2: k.x2 ?? k.w2 ?? 0
        });
      }
      if (C.extras?.banding?.sides && typeof C.extras.banding.sides == "object") {
        const k = C.extras.banding.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (C.extras.banding.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (C.extras?.finish?.sides && typeof C.extras.finish.sides == "object") {
        const k = C.extras.finish.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (C.extras.finish.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (C.extras?.planing?.sides && typeof C.extras.planing.sides == "object") {
        const k = C.extras.planing.sides;
        ("x1" in k || "x2" in k || "y1" in k || "y2" in k) && (C.extras.planing.sides = {
          l1: k.y1 ?? k.l1,
          l2: k.y2 ?? k.l2,
          w1: k.x1 ?? k.w1,
          w2: k.x2 ?? k.w2
        });
      }
      if (C.efficiencyOptions?.primaryCompression) {
        const k = C.efficiencyOptions.primaryCompression;
        k === "x" ? C.efficiencyOptions = {
          ...C.efficiencyOptions,
          primaryCompression: "l"
        } : k === "y" && (C.efficiencyOptions = {
          ...C.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const k in C)
        C[k] === null && delete C[k];
      return C;
    }, t = function(x, C) {
      if (!Array.isArray(x))
        return [];
      const k = [];
      for (let B = 0; B < x.length; B++) {
        const ae = x[B], xe = n(ae);
        try {
          const Se = {
            ...xe,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          ae.autoId && (Se.autoId = ae.autoId), delete Se.issues, delete Se.warnings;
          const Be = new _n(Se, C);
          k.push(Be);
        } catch (Se) {
          console.error(`Failed to create InputShape at index ${B}:`, Se);
        }
      }
      return k;
    }, a = function(x, C) {
      if (!Array.isArray(x)) return [];
      const k = [];
      for (let B = 0; B < x.length; B++) {
        const ae = x[B], xe = n(ae);
        try {
          const Se = {
            ...xe,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          ae.autoId && (Se.autoId = ae.autoId);
          const Be = new ca(Se, C);
          k.push(Be);
        } catch (Se) {
          console.error(`Failed to create InputStock at index ${B}:`, Se);
        }
      }
      return k;
    }, i = function(x) {
      const C = n(x), k = ma(Hn, C);
      if (k.success && k.data) {
        const B = {
          ...k.data,
          issues: [],
          warnings: []
        };
        return x?.autoId && (B.autoId = x.autoId), new cn(B);
      } else
        return console.error("Failed to parse input saw:", k.errors), new cn({});
    }, l = function(x, C) {
      return Array.isArray(x) ? C && C.length ? Mr(x, C) : x.map((k) => new Ks(k)).filter(Boolean) : [];
    }, u = function(x = {}) {
      try {
        const B = { ...ya(
          (xe) => {
            if (typeof xe != "object" || xe === null) return xe;
            const Se = { ...xe };
            for (const Be in Se)
              Se[Be] === null && delete Se[Be];
            return Se;
          },
          Zn
        ).parse(x), isNew: !0 }, ae = new _n(B, ie);
        return ae.createId(fe.value.length), fe.value.push(ae), ae;
      } catch (C) {
        return C instanceof Va && (console.error("Shape validation failed:", C.issues), j("part", "Invalid shape data", C.issues)), null;
      }
    }, r = function(x = {}) {
      try {
        const k = { ...Vn.parse(x), isNew: !0 }, B = new ca(k, ie);
        return B.createId(re.value.length), re.value.push(B), B;
      } catch (C) {
        return C instanceof Va && (console.error("Stock validation failed:", C.issues), j("stock", "Invalid stock data", C.issues)), null;
      }
    }, f = function(x) {
      try {
        const C = x.toData(), k = Zn.parse(C);
        return new _n(k, ie);
      } catch (C) {
        return C instanceof Va && (console.error("Shape clone validation failed:", C.issues), j("part", "Invalid shape data during cloning", C.issues)), null;
      }
    }, p = function(x) {
      try {
        const C = x.toData(), k = Vn.parse(C);
        return new ca(k, ie);
      } catch (C) {
        return C instanceof Va && (console.error("Stock clone validation failed:", C.issues), j("stock", "Invalid stock data during cloning", C.issues)), null;
      }
    }, b = function(x, C) {
      const k = fe.value.findIndex((Se) => Se.autoId === x);
      if (k === -1) return !1;
      const B = fe.value[k], ae = { ...B.toData(), ...C }, xe = ma(Zn, ae);
      if (xe.success && xe.data) {
        if (B.update(xe.data), !B.isNew) {
          const Se = Object.keys(C);
          B.validate({ fields: Se, index: k });
        }
        return !0;
      } else {
        const Se = xe.errors ? Ns(xe.errors) : [];
        console.error("Shape update validation failed:", Se);
        const Be = xe.errors || [], Ke = Object.keys(C);
        for (let Xe = B.issues.length - 1; Xe >= 0; Xe--)
          B.issues[Xe].field.some((Pt) => Ke.includes(Pt[0])) && B.issues.splice(Xe, 1);
        for (const Xe of Be) {
          const Pt = Bi(Xe), Rt = Array.isArray(Xe.path) ? Xe.path.map((ce) => String(ce)) : [];
          new qt({
            item: B,
            category: ["part"],
            message: Xe.message,
            params: Pt,
            field: Rt.length > 0 ? [Rt] : []
          });
        }
        return !1;
      }
    }, I = function(x, C) {
      const k = fe.value.findIndex((ae) => ae.autoId === x);
      if (k === -1) return !1;
      const B = fe.value[k];
      return B.validate({ fields: [C], index: k }), B.issues.length === 0;
    }, E = function(x, C) {
      const k = re.value.find((xe) => xe.autoId === x);
      if (!k) return !1;
      const B = { ...k.toData(), ...C }, ae = ma(Vn, B);
      if (ae.success && ae.data)
        return k.update(ae.data), k.isNew || _(), !0;
      {
        const xe = ae.errors ? Ns(ae.errors) : [];
        console.error("Stock update validation failed:", xe);
        const Se = ae.errors || [], Be = Object.keys(C);
        for (let Ke = k.issues.length - 1; Ke >= 0; Ke--)
          k.issues[Ke].field.some((Xe) => Be.includes(Xe[0])) && k.issues.splice(Ke, 1);
        for (const Ke of Se) {
          const Xe = Bi(Ke), Pt = Array.isArray(Ke.path) ? Ke.path.map((Rt) => String(Rt)) : [];
          new qt({
            item: k,
            category: ["stock"],
            message: Ke.message,
            params: Xe,
            field: Pt.length > 0 ? [Pt] : []
          });
        }
        return At(re), !1;
      }
    }, h = function(x, C) {
      const k = re.value.findIndex((ae) => ae.autoId === x);
      if (k === -1) return !1;
      const B = re.value[k];
      return B.validate({ fields: [C], index: k }), At(re), B.issues.length === 0;
    }, M = function(x) {
      if (fe.value.length === 1) return !1;
      const C = fe.value.findIndex((k) => k.autoId === x);
      return C === -1 ? !1 : (fe.value.splice(C, 1), !0);
    }, J = function(x) {
      if (re.value.length === 1) return !1;
      const C = re.value.findIndex((k) => k.autoId === x);
      return C === -1 ? !1 : (re.value.splice(C, 1), !0);
    }, ue = function(x) {
      pt.value = !0;
      const C = [];
      try {
        fe.value.forEach((k) => k.issues.length = 0);
        for (let k = 0; k < fe.value.length; k++) {
          const B = fe.value[k];
          if (B.isNew || B.multiEdit)
            continue;
          const ae = B.validate({
            inputStockList: re.value,
            index: k,
            stockType: x?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: x
          });
          C.push(...ae);
        }
        fe.value.some((k) => Number(k.q) > 0) || new qt({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: C
        });
      } finally {
        pt.value = !1;
      }
      return Le.value = C, C;
    }, _ = function(x) {
      pt.value = !0;
      const C = [];
      try {
        re.value.forEach((k) => k.issues.length = 0);
        for (let k = 0; k < re.value.length; k++) {
          const B = re.value[k];
          if (B.multiEdit)
            continue;
          const ae = B.validate({ saw: x }, k);
          C.push(...ae);
        }
        re.value.some((k) => Number(k.q) > 0 || k.autoAdd) || new qt({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: C
        });
      } finally {
        pt.value = !1;
      }
      return Le.value = C, C;
    }, j = function(x, C, k) {
      new qt({
        category: [x],
        message: C,
        issues: Le.value
      }), k && console.log("Validation details:", k);
    }, pe = function() {
      Le.value = [], fe.value.forEach((x) => x.issues.length = 0), re.value.forEach((x) => x.issues.length = 0);
    }, le = function(x = {}) {
      const C = [], k = [], B = x.inputShapesOverride ?? fe.value;
      if (!B.length)
        return { shapeList: [], issues: [] };
      for (let ae = 0; ae < B.length; ae++) {
        const xe = B[ae];
        if (!xe.q) continue;
        xe.createId(ae), xe.applyPartTrim(x.trim, x.stockType);
        const Se = xe.toShape();
        C.push(Se), k.push(...Se.issues);
      }
      return { shapeList: C, issues: k };
    }, v = function(x) {
      if (!re.value.length)
        return { stockList: [], issues: [] };
      const C = [], k = [];
      for (let B = 0; B < re.value.length; B++) {
        const ae = re.value[B];
        if (!ae.q && !ae.autoAdd) continue;
        ae.createId(B), ae.saw = x;
        const xe = ae.toStock();
        C.push(xe), k.push(...xe.issues);
      }
      return { stockList: C, issues: k };
    }, T = function(x, C = ie) {
      const k = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (x.saw) {
        const B = ma(Hn, n(x.saw));
        if (B.success && B.data) {
          const ae = { ...B.data };
          x.saw?.autoId && (ae.autoId = x.saw.autoId), Je.value = new cn(ae), k.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", B.errors), k.saw.failed = !0;
      }
      if (x.shapes) {
        const B = t(x.shapes, C);
        k.shapes.success = B.length, k.shapes.failed = x.shapes.length - B.length, fe.value = B, Le.value = Le.value.filter(
          (ae) => !ae.category.includes("part")
        );
      }
      if (x.stock) {
        const B = a(x.stock, C);
        k.stock.success = B.length, k.stock.failed = x.stock.length - B.length, re.value = B, Le.value = Le.value.filter(
          (ae) => !ae.category.includes("stock")
        );
      }
      if (x.groups) {
        const B = l(x.groups);
        k.groups.success = B.length, k.groups.failed = x.groups.length - B.length, We.value = B;
      }
      return x.extrasOptions && (ke.value = { ...x.extrasOptions }), k;
    }, Q = function() {
      return {
        shapes: fe.value.map((x) => x.toData()),
        stock: re.value.map((x) => x.toData()),
        inputUserGroups: We.value.map((x) => x.toData()),
        extrasOptions: ke.value
      };
    }, $ = function() {
      fe.value = [], re.value = [], We.value = [], pe();
    }, q = function(x) {
      const C = { ...Je.value.toData(), ...x }, k = ma(Hn, C);
      return k.success && k.data ? (Je.value.update(k.data), !0) : (console.error("InputSaw update validation failed:", k.errors), j("saw", "Invalid saw update", k.errors), !1);
    }, S = function() {
      Je.value = new cn({});
    }, K = function() {
      const x = Je.value.validate();
      return Le.value = [...Le.value.filter((C) => C.category?.[0] !== "saw"), ...x], x;
    };
    const { numberFormat: ie = "decimal" } = e, fe = zn("inputs/inputShapes", [], {
      serializer: {
        read: (x) => {
          if (!x) return [];
          let C;
          try {
            C = JSON.parse(x);
          } catch (k) {
            return console.error("Failed to parse input shapes JSON:", k), [];
          }
          return t(C, ie);
        },
        write: (x) => {
          const k = x.filter((ae) => !ae?.multiEdit).map((ae) => ae.toData());
          return JSON.stringify(k);
        }
      },
      listenToStorageChanges: !1
    }), re = zn("inputs/inputStock", [], {
      serializer: {
        read: (x) => {
          if (!x) return [];
          let C;
          try {
            C = JSON.parse(x);
          } catch (B) {
            return console.error("  Failed to parse stock JSON:", B), [];
          }
          return a(C, ie);
        },
        write: (x) => {
          const k = x.filter((ae) => !ae?.multiEdit).map((ae) => ae.toData());
          return JSON.stringify(k);
        }
      },
      listenToStorageChanges: !1
    }), Je = zn("inputs/inputSaw", new cn({}), {
      serializer: {
        read: (x) => {
          if (!x) return new cn({});
          try {
            const C = JSON.parse(x);
            return i(C);
          } catch (C) {
            return console.error("  Failed to parse saw JSON:", C), new cn({});
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
    }), We = zn("inputs/inputUserGroups", [], {
      serializer: {
        read: (x) => l(x ? JSON.parse(x) : []),
        write: (x) => JSON.stringify(x.map((C) => C.toData()))
      }
    }), ke = zn("inputs/extrasOptions", {
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
    }), Le = G([]), pt = G(!1);
    fe.value.length === 0 && (fe.value = [new _n({ isNew: !0 })]), re.value.length === 0 && (re.value = [new ca({ isNew: !0 })]);
    const V = F(() => fe.value.reduce((x, C) => {
      const k = Number(C?.q);
      return k && k > 0 && !C?.multiEdit ? x + k : x;
    }, 0)), Y = F(() => re.value.reduce((x, C) => {
      const k = Number(C?.q);
      return k && k > 0 && !C?.multiEdit ? x + k : x;
    }, 0)), ve = F(() => fe.value.reduce((x, C) => C?.multiEdit ? x : x + 1, 0)), Ne = F(() => re.value.reduce((x, C) => C?.multiEdit ? x : x + 1, 0)), ee = F(() => Le.value.length > 0), ge = () => [
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
    ], Fe = G(null), ct = G(null), an = () => {
      Fe.value = null;
    }, oe = pe, Ae = (x = null) => {
      const C = (x?.inputShapesOverride ?? fe.value).filter((B) => !B.multiEdit), k = ue(x?.saw || void 0);
      if (C.length) {
        Eo(C, re.value, x?.saw || Je.value);
        const B = C.flatMap((ae) => ae.issues);
        return [...k, ...B];
      }
      return k;
    }, Ue = async (x, C = "decimal") => {
      const k = x?.inputSaw, B = x?.inputShapes, ae = x?.inputStock, xe = x?.inputUserGroups, Se = T({
        saw: k,
        shapes: B,
        stock: ae,
        groups: xe
      }, C);
      return At(fe), At(re), await Bt(), Se;
    }, we = (x, C = "decimal") => T({ shapes: x }, C).shapes.success > 0, $e = (x, C = "decimal") => T({ stock: x }, C).stock.success > 0, be = (x, C, k, B, ae) => {
      C[0]?.length > 0 && (ke.value[x] || (ke.value[x] = { options: [] }), ke.value[x].options = [...C[0]]), k && B && C.length > 0 ? ji(x, {
        options: C,
        // Use all columns extracted from pricing
        labels: k,
        pricing: B,
        displayNames: ae
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: k, pricingData: B, pricingOptionsLength: C.length });
    }, xt = () => {
      if (!Object.values(ke.value).some(
        (k) => k.options.length > 0
      )) return;
      const C = (k, B) => {
        const ae = {};
        for (const xe of B)
          ae[xe] = [...k];
        return ae;
      };
      return {
        banding: ke.value.banding.options.length > 0 ? {
          options: {
            sides: C(ke.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: ke.value.finish.options.length > 0 ? {
          options: {
            faces: C(ke.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: ke.value.planing.options.length > 0 ? {
          options: {
            sides: C(ke.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: C(ke.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, Lt = (x) => {
      if (!re.value.length) return "n";
      const C = x.material, k = x.t, B = re.value.filter((Be) => Be.material === C && Be.t === k);
      if (!B.length)
        return "n";
      let ae = !1, xe = !1, Se = !1;
      for (const Be of B)
        Be.grain === "l" ? (ae = !0, xe = !0) : Be.grain === "w" && (ae = !0, Se = !0);
      return ae ? xe && Se ? "y" : xe ? "l" : Se ? "w" : "n" : "n";
    }, gt = ({ stock: x = !0, shapes: C = !0 } = {}) => {
      x && (re.value = [new ca({ l: 2440, w: 1220, q: 1 })]), C && (fe.value = [
        new _n({ l: 500, w: 500, q: 1 }),
        new _n({ l: 400, w: 400, q: 1 })
      ]);
    }, kn = (x) => {
      for (const C of fe.value)
        bs(C, x);
      for (const C of re.value)
        bs(C, x);
    };
    let lt = !1;
    st(fe, (x) => {
      lt || !x.length || Bt(() => {
        const C = ["banding", "finish", "planing"], k = [];
        C.forEach((B) => {
          const ae = /* @__PURE__ */ new Set();
          if (x.forEach((xe) => {
            const Se = xe.extras?.[B];
            Se && (Se.faces && Object.values(Se.faces).forEach((Be) => {
              typeof Be == "string" && Be.trim() && Be !== "Y" && ae.add(Be);
            }), Se.sides && Object.values(Se.sides).forEach((Be) => {
              typeof Be == "string" && Be.trim() && Be !== "Y" && ae.add(Be);
            }));
          }), ae.size > 0) {
            const xe = dn(B);
            if (xe) {
              const Se = xe.options[0];
              if (Array.isArray(Se) && (Se.length === 0 || typeof Se[0] == "string")) {
                const Be = new Set(Se), Ke = Array.from(ae).filter((Xe) => !Be.has(Xe));
                if (Ke.length > 0) {
                  const Xe = [...Se, ...Ke];
                  ji(B, {
                    ...xe,
                    options: [Xe, ...xe.options.slice(1)]
                  });
                }
              }
            }
          }
        }), C.forEach((B) => {
          const ae = _r(B, x);
          ae.cleanedCount > 0 && k.push(
            `${B}: ${ae.invalidOptions.join(", ")}`
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
        }, 500)), lt = !0;
      });
    }, { immediate: !0 });
    let $t = null;
    return {
      // Bundled object
      inputs: {
        inputStock: re,
        inputShapes: fe,
        inputUserGroups: We,
        currentInputShape: Fe,
        selectedSaw: ct,
        inputSaw: Je
      },
      // State
      inputShapes: fe,
      inputStock: re,
      inputUserGroups: We,
      inputSaw: Je,
      currentInputShape: Fe,
      selectedSaw: ct,
      validationIssues: Le,
      isValidating: pt,
      // Computed
      totalInputShapes: V,
      totalInputStock: Y,
      totalInputShapeLines: ve,
      totalInputStockLines: Ne,
      hasValidationIssues: ee,
      // Actions
      addInputShape: u,
      addInputStock: r,
      cloneInputShape: f,
      cloneInputStock: p,
      updateInputShape: b,
      updateInputStock: E,
      updateInputSaw: q,
      removeInputShape: M,
      removeInputStock: J,
      reset: an,
      resetInputSaw: S,
      clear: $,
      clearIssues: oe,
      // Validation
      validateInputShapes: Ae,
      validateInputShapeField: I,
      validateInputStock: _,
      validateInputStockField: h,
      validateInputSaw: K,
      clearValidationIssues: pe,
      // Conversion
      createShapeList: le,
      createStockList: v,
      // Import/Export/Update
      importData: T,
      exportData: Q,
      updateInputs: Ue,
      importInputShapes: we,
      importInputStock: $e,
      // Additional functions
      getShapeGrainSummary: Lt,
      updateNumberFormat: kn,
      createTestData: gt,
      getSpecialShapeFields: ge,
      // Extras Options Management
      extrasOptions: ke,
      setExtrasOptionsFromPricing: be,
      getCentralizedOptions: xt,
      // Show part
      showPart: (x) => {
        $t && $t(x);
      },
      registerShowPart: (x) => {
        $t = x;
      }
    };
  } catch (n) {
    throw console.error("[createInputs] Fatal error during initialization:", n), n;
  }
}
let Fi = null;
function ul(e = { numberFormat: "decimal" }) {
  try {
    return Fi || (Fi = zr(e)), Fi;
  } catch (n) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", n), console.error("[useInputs] Error stack:", n?.stack), n;
  }
}
class Ts {
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
    if (t && t instanceof da) {
      const b = t.sides;
      if (b && typeof b == "object" && ("x1" in b || "x2" in b || "y1" in b || "y2" in b)) {
        const E = this.migrateSideNames(b);
        return t.sides = E, !0;
      }
      return !1;
    }
    const l = {}, u = {}, r = { sides: {} };
    if (t && typeof t == "object") {
      const b = this.migrateSideNames(t);
      for (const [I, E] of Object.entries(b))
        fa.includes(I) && (l[I] = E);
    }
    if (a && typeof a == "object") {
      const b = this.migrateSideNames(a);
      for (const [I, E] of Object.entries(b))
        fa.includes(I) && (u[I] = E);
    }
    if (i && typeof i == "object") {
      i.all && (r.sides.all = i.all);
      for (const [b, I] of Object.entries(i))
        b !== "all" && fa.includes(b) && I && (r.sides[b] = I);
    }
    const f = new da(Object.keys(l).length > 0 ? { sides: l } : {}), p = Object.keys(u).length > 0 ? new da({ sides: u }) : void 0;
    return "extras" in n && n.extras ? n.extras.banding = f : Ye(n) && (n.banding = f), p && "_banding" in n && (n._banding = p), Ye(n) && i && (n.bandingOptions = r), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(n) {
    const t = n.finish, a = "_finish" in n ? n._finish : void 0, i = Ye(n) ? n.finishOptions : void 0;
    if (!t && !a && !i || t && t instanceof pa)
      return !1;
    const l = {}, u = {}, r = { faces: {} };
    if (t && typeof t == "object")
      for (const [b, I] of Object.entries(t))
        ga.includes(b) && (l[b] = I);
    if (a && typeof a == "object")
      for (const [b, I] of Object.entries(a))
        ga.includes(b) && (u[b] = I);
    if (i && typeof i == "object") {
      i.all && (r.faces.all = i.all);
      for (const [b, I] of Object.entries(i))
        b !== "all" && ga.includes(b) && I && (r.faces[b] = I);
    }
    const f = new pa(Object.keys(l).length > 0 ? { faces: l } : {}), p = Object.keys(u).length > 0 ? new pa({ faces: u }) : void 0;
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
      const i = ys("banding");
      if (i && i.labels && i.labels.length > 1)
        for (const l of fa) {
          const u = `side.${l}`, r = Ka(n, "banding", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let f = !1;
            const p = { ...r };
            for (const b of i.labels)
              if (p[b] === !0) {
                const E = i.labels.indexOf(b);
                if (E !== -1 && i.options[E] && Array.isArray(i.options[E])) {
                  const h = i.options[E];
                  h.length === 1 && (p[b] = h[0], f = !0);
                }
              }
            f && (ks(n, "banding", u, p), t = !0);
          }
        }
    }
    if (a.finish) {
      const i = ys("finish");
      if (i && i.labels && i.labels.length > 1)
        for (const l of ga) {
          const u = `face.${l}`, r = Ka(n, "finish", u);
          if (r && typeof r == "object" && !Array.isArray(r)) {
            let f = !1;
            const p = { ...r };
            for (const b of i.labels)
              if (p[b] === !0) {
                const E = i.labels.indexOf(b);
                if (E !== -1 && i.options[E] && Array.isArray(i.options[E])) {
                  const h = i.options[E];
                  h.length === 1 && (p[b] = h[0], f = !0);
                }
              }
            f && (ks(n, "finish", u, p), t = !0);
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
    if (t && typeof t == "object" && !(t instanceof da) && !("sides" in t) && !("faces" in t))
      return !0;
    if ("_banding" in n) {
      const i = n._banding;
      if (i && typeof i == "object" && !(i instanceof da) && !("sides" in i) && !("faces" in i))
        return !0;
    }
    const a = n.finish;
    if (a && typeof a == "object" && !(a instanceof pa) && !("sides" in a) && !("faces" in a))
      return !0;
    if ("_finish" in n) {
      const i = n._finish;
      if (i && typeof i == "object" && !(i instanceof pa) && !("sides" in i) && !("faces" in i))
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
          const i = Object.keys(t.sides).filter((l) => !fa.includes(l));
          if (i.length > 0)
            throw new Error(`Invalid side keys in banding: ${i.join(", ")}`);
        }
      }
      const a = n.finish;
      if (a) {
        if ("sides" in a && a.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in a && a.faces) {
          const i = Object.keys(a.faces).filter((l) => !ga.includes(l));
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
const Wr = {
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
function qi(e = !1) {
  return {
    l1: e,
    l2: e,
    w1: e,
    w2: e
  };
}
function Hr(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e
  };
}
function Ha(e = !1) {
  return {
    a: e,
    b: e
  };
}
function Zr(e = !1) {
  return {
    sides: qi(e),
    faces: Ha(e)
  };
}
function Jr(e = !1) {
  return {
    x1: e,
    x2: e,
    y1: e,
    y2: e,
    a: e,
    b: e
  };
}
function Qr(e) {
  const n = {};
  for (const [t, a] of Object.entries(Wr))
    t in e && (n[a] = e[t]);
  return n;
}
function Yr(e) {
  const n = {};
  for (const [t, a] of Object.entries(Kr))
    t in e && (n[a] = e[t]);
  return n;
}
function jt(e) {
  return e === 1 ? !0 : e === 0 ? !1 : e;
}
function mn(e) {
  if (!e) return e;
  const n = "x1" in e || "x2" in e || "y1" in e || "y2" in e, t = "l1" in e || "l2" in e || "w1" in e || "w2" in e;
  if (n && t && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", e), n) {
    const i = Qr(e), l = {};
    return "l1" in i && (l.l1 = jt(i.l1)), "l2" in i && (l.l2 = jt(i.l2)), "w1" in i && (l.w1 = jt(i.w1)), "w2" in i && (l.w2 = jt(i.w2)), l;
  }
  const a = {};
  return "l1" in e && (a.l1 = jt(e.l1)), "l2" in e && (a.l2 = jt(e.l2)), "w1" in e && (a.w1 = jt(e.w1)), "w2" in e && (a.w2 = jt(e.w2)), Object.keys(a).length > 0 ? a : e;
}
function Xr(e) {
  return !e || typeof e != "string" ? e : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[e] || e;
}
function Rn(e) {
  return !e || !Array.isArray(e) ? e : e.map(Xr);
}
function eu(e) {
  const n = {};
  if (e.banding && typeof e.banding == "object")
    for (const [t, a] of Object.entries(e.banding))
      a === !0 || a === !1 ? n[t] = a : typeof a == "number" ? n[t] = jt(a) : typeof a == "string" && a.length > 0 && (n[t] = a);
  if (e.bandingType && typeof e.bandingType == "object")
    for (const [t, a] of Object.entries(e.bandingType))
      if (e.banding) {
        const i = n[t];
        (i === !0 || typeof i == "string" && i.length > 0) && (typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a)));
      } else
        typeof a == "string" && a.length > 0 ? n[t] = a : typeof a == "number" && a !== 0 && (n[t] = String(a));
  return Object.keys(n).length > 0 ? n : void 0;
}
function _i(e) {
  return e && Yr(e);
}
function tu(e) {
  e?.type && delete e.type, nu.call(this, e), au.call(this, e), iu.call(this, e), e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Ri(n));
}
function nu(e) {
  if (!e?.banding || typeof e.banding != "object") return;
  const n = Object.keys(e.banding);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.banding = {
    labels: Object.keys(e.banding),
    pricing: e.bandingPricing || {}
  }, e.bandingPricing && delete e.bandingPricing);
}
function au(e) {
  if (!e?.finish || typeof e.finish != "object") return;
  const n = Object.keys(e.finish);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.finish = {
    labels: Object.keys(e.finish),
    pricing: e.finishPricing || {}
  }, e.finishPricing && delete e.finishPricing);
}
function iu(e) {
  if (!e?.planing || typeof e.planing != "object") return;
  const n = Object.keys(e.planing);
  if (!n.length) return;
  const t = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  n.every((a) => t.includes(a)) || (e.planing = {
    labels: Object.keys(e.planing),
    pricing: e.planingPricing || {}
  }, e.planingPricing && delete e.planingPricing);
}
function Ri(e) {
  !e || typeof e != "object" || (Ts.needsMigration(e) && Ts.migrateShape(e), e._banding && delete e._banding, e._finish && delete e._finish, e._bandingType && delete e._bandingType);
}
function cl(e) {
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
function Eg(e) {
  if (!(!e || typeof e != "object")) {
    if (tu(e), e.parts && Array.isArray(e.parts) && (e.parts = e.parts.map((n) => (n.extras?.banding?.sides && (n.extras.banding.sides = mn(n.extras.banding.sides)), n.extras?.finish?.sides && (n.extras.finish.sides = mn(n.extras.finish.sides)), n.extras?.planing?.sides && (n.extras.planing.sides = mn(n.extras.planing.sides)), n))), e.stock && Array.isArray(e.stock) && (e.stock = e.stock.map((n) => n?.trim ? {
      ...n,
      trim: mn(n.trim)
    } : n)), e.options) {
      if (cl(e.options), e.options.bandingLocations && (e.options.bandingLocations = Rn(e.options.bandingLocations)), e.options.finishLocations && (e.options.finishLocations = Rn(e.options.finishLocations)), e.options.planingLocations && (e.options.planingLocations = Rn(e.options.planingLocations)), e.options.extrasLocationGroups)
        for (const n of ["banding", "finish", "planing"]) {
          const t = e.options.extrasLocationGroups[n];
          t && Array.isArray(t) && t.forEach((a) => {
            a.locations && (a.locations = Rn(a.locations));
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
        t.locations && Array.isArray(t.locations) && (t.locations = Rn(t.locations)), t.groups && Array.isArray(t.groups) && t.groups.forEach((a) => {
          a.locations && (a.locations = Rn(a.locations));
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
    e.shapes && Array.isArray(e.shapes) && e.shapes.forEach((n) => Ri(n)), (e.l !== void 0 || e.w !== void 0 || e.banding !== void 0) && Ri(e);
  }
}
function su(e) {
  if (!e || typeof e != "object")
    return e;
  const n = { ...e };
  return n.saw && (n.saw = lu(n.saw)), Array.isArray(n.stock) && (n.stock = n.stock.map(ou)), Array.isArray(n.parts) && (n.parts = n.parts.map(ru)), n;
}
function lu(e) {
  const n = { ...e };
  if (n.guillotineOptions && (n.guillotineOptions = { ...n.guillotineOptions }, n.guillotineOptions.strategy === "stock" && (n.guillotineOptions.strategy = "efficiency")), n.efficiencyOptions) {
    n.efficiencyOptions = { ...n.efficiencyOptions };
    const t = n.efficiencyOptions.primaryCompression;
    t === "x" ? n.efficiencyOptions.primaryCompression = "l" : t === "y" && (n.efficiencyOptions.primaryCompression = "w");
  }
  return n.bladeWidth !== void 0 && (n.bladeWidth = Number(n.bladeWidth)), n.stackHeight !== void 0 && (n.stackHeight = Number(n.stackHeight)), n.cutPreference === "flex" ? n.cutPreference = "l" : n.cutPreference === "" && (n.cutPreference = void 0), (n.cutPreference === null || n.cutPreference === void 0) && (n.cutType === "guillotine" || n.cutType === "beam") && (n.cutPreference = "l"), n;
}
function ou(e) {
  const n = { ...e };
  return delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.trim && (n.trim = mn(n.trim)), n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n.cost !== void 0 && (n.cost = Number(n.cost)), n;
}
function ru(e) {
  const n = { ...e };
  if (delete n.numberFormatKeys, delete n.issues, delete n.warnings, n.banding || n.bandingType) {
    const t = eu(n);
    t && Object.keys(t).length > 0 && (n.extras || (n.extras = {}), n.extras.banding || (n.extras.banding = {}), n.extras.banding.sides = mn(t)), delete n.banding, delete n.bandingType;
  }
  if (n.extras?.banding?.sides && (n.extras = { ...n.extras }, n.extras.banding = { ...n.extras.banding }, n.extras.banding.sides = mn(n.extras.banding.sides)), n.finish && !n.extras?.finish) {
    if (n.extras || (n.extras = {}), n.extras.finish || (n.extras.finish = {}), n.finish.a !== void 0 || n.finish.b !== void 0) {
      const t = {};
      "a" in n.finish && (t.a = jt(n.finish.a)), "b" in n.finish && (t.b = jt(n.finish.b)), n.extras.finish.faces = t;
    } else
      n.extras.finish.sides = mn(n.finish);
    delete n.finish;
  }
  if (n.extras?.finish?.sides && (n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish }, n.extras.finish.sides = mn(n.extras.finish.sides)), n.extras?.finish?.faces) {
    n.extras = { ...n.extras }, n.extras.finish = { ...n.extras.finish };
    const t = n.extras.finish.faces;
    "a" in t && (t.a = jt(t.a)), "b" in t && (t.b = jt(t.b));
  }
  return n.l !== void 0 && (n.l = Number(n.l)), n.w !== void 0 && (n.w = Number(n.w)), n.t !== void 0 && (n.t = Number(n.t)), n.q !== void 0 && (n.q = Number(n.q)), n;
}
function Ht(e) {
  if (!e || typeof e != "object") return e;
  if (Array.isArray(e)) return e.map(Ht);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || (n[t] = Ht(a));
  return n;
}
function Za(e) {
  if (!e || typeof e != "object") return null;
  if (Array.isArray(e)) return e.map(Za);
  const n = {};
  for (const [t, a] of Object.entries(e))
    t === "__entityType" || t === "autoId" || t === "enabled" || t === "type" || t === "issues" || t === "warnings" || (n[t] = a && typeof a == "object" ? Za(a) : a);
  return Object.keys(n).length > 0 ? n : null;
}
function dl(e) {
  if (!e) return null;
  const {
    enabled: n,
    __entityType: t,
    autoId: a,
    issues: i,
    warnings: l,
    ...u
  } = e;
  return Ht(u);
}
function uu(e) {
  return e ? typeof e == "string" ? e : e.id ? e.id : e.autoId ? e.autoId : "" : "";
}
function cu(e) {
  return e.rot !== void 0 ? e.rot ? 1 : 0 : e.rotated !== void 0 ? e.rotated ? 1 : 0 : e.isRotated !== void 0 ? e.isRotated ? 1 : 0 : e.w > e.l ? 1 : 0;
}
St({
  // Job metadata
  jobId: Ln().describe("Job identifier"),
  // Input configuration (preserved)
  saw: Hn.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ft(Mo).describe("Stock items"),
  parts: ft(ws).describe("Parts with coordinates and properties"),
  cuts: ft(To).optional().describe("Cut instructions"),
  offcuts: ft(No).optional().describe("Remaining offcut pieces"),
  unusableParts: ft(ws).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: $o.describe("Complete analysis and metrics")
});
St({
  saw: Hn.describe("Saw configuration"),
  stock: ft(Vn).describe("Stock items"),
  parts: ft(Zn).describe("Parts to cut"),
  groups: ft(Vo).optional().describe("User-defined part groups with XY positions"),
  webhook: je().url().optional().describe("Webhook URL for async result delivery")
});
St({
  error: je().describe("Error message"),
  details: Ls().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: Sr("V3").describe("API version"),
  help: je().optional().describe("Helpful migration guidance"),
  example: Ls().optional().describe("Example of correct format"),
  docs: je().url().optional().describe("Link to V3 documentation")
});
function du(e) {
  if (!e) return null;
  const {
    fitsAll: n,
    fitsAny: t,
    largestShape: a,
    smallestShape: i,
    ...l
  } = e;
  return Ht(l);
}
function fu(e) {
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
    trim: Ht(e.trim),
    cost: e.cost ?? 0,
    notes: e.notes ?? "",
    code: e.code,
    analysis: du(e.analysis),
    stack: e.stack?.number ?? 1,
    customData: Ht(e.customData)
  } : null;
}
function pu(e, n) {
  if (!e) return null;
  let t = null;
  const a = uu(e.stock);
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
    rot: cu(e),
    added: e.added ?? !1,
    notes: e.notes ?? "",
    code: e.code,
    stock: t,
    trim: Ht(e.trim),
    extras: Za(e.extras),
    customData: Ht(e.customData)
  };
  return e.machining && (i.machining = dl(e.machining)), i;
}
function gu(e) {
  if (!e) return null;
  const n = {
    id: e.id,
    name: e.name,
    l: e.l,
    w: e.w,
    t: e.t,
    material: e.material ?? "",
    notes: e.notes ?? "",
    trim: Ht(e.trim),
    extras: Za(e.extras),
    customData: Ht(e.customData)
  };
  return e.machining && (n.machining = dl(e.machining)), e.issues && Array.isArray(e.issues) && e.issues.length > 0 ? n.issues = e.issues.map((t) => ({
    message: yr(t.message) || t.message,
    type: t.type,
    category: t.category,
    field: t.field
  })) : n.issues = [], n;
}
function mu(e) {
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
function hu(e) {
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
function vu(e) {
  const n = e.stockList || e.stock || [], t = /* @__PURE__ */ new Map();
  for (const p of n) {
    const b = { id: p.id || "" };
    p.code && (b.code = p.code), p.id && t.set(p.id, b), p.autoId && p.autoId !== p.id && t.set(p.autoId, b);
  }
  const a = n.map(fu), i = (e.shapeList || e.parts || []).map((p) => pu(p, t)), l = (e.unusableShapes || []).map(gu), u = (e.cutList || e.cuts || []).map(mu), r = (e.offcuts || []).map(hu);
  return {
    jobId: e.jobId,
    saw: Ht(e.saw),
    stock: a,
    parts: i,
    cuts: u,
    offcuts: r,
    unusableParts: l,
    metadata: Ht(e.metadata)
  };
}
class Pn extends Error {
  constructor(n, t) {
    super(n), this.code = t, this.name = "FormulaError";
  }
}
class ei {
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
      if (t === 0) throw new Pn("Division by zero", "DIVISION_BY_ZERO");
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
      const I = n.nodes.get(f);
      if (typeof I.formula == "number")
        return l.set(f, I.formula), I.formula;
      u.add(f);
      const E = n.edges.get(f) || /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
      for (const J of E)
        if (J.startsWith("input.")) {
          const ue = J.split(".")[1];
          h.set(J, a[ue]);
        } else
          h.set(J, r(J));
      const M = this.evaluateFormulaWithDeps(I.formula, h, a);
      return l.set(f, M), u.delete(f), M;
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
    if (!this.spec?.inputs) throw new Pn("No input specifications defined", "NO_INPUTS");
    for (const [t, a] of Object.entries(this.spec.inputs)) {
      const i = n[t];
      if (i === void 0)
        throw new Pn(`Missing required input: ${t}`, "MISSING_INPUT");
      if (i < a.min || i > a.max)
        throw new Pn(`Input ${t} value ${i} out of range [min: ${a.min}, max: ${a.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new Pn("No input specifications defined", "NO_INPUTS");
    const t = Object.keys(this.spec.inputs);
    if (n.length !== t.length)
      throw new Pn(`Expected ${t.length} fields, got ${n.length}`, "INVALID_FIELD_COUNT");
    let a = 0;
    for (const i of n) {
      const l = t[a], u = this.spec.inputs[l];
      if (i.value === null || i.value === void 0)
        throw new Pn(`Missing value for field ${a}`, "MISSING_FIELD_VALUE");
      if (!!!u.optionsFrom && typeof u.min == "number" && typeof u.max == "number" && (i.value < u.min || i.value > u.max))
        throw new Pn(`Field ${a} value ${i.value} out of range [min: ${u.min}, max: ${u.max}]`, "FIELD_OUT_OF_RANGE");
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
const bu = new ei({});
function yu(e) {
  const n = e.trim();
  return n.startsWith("=") ? n.substring(1).trim() : n;
}
function Wi(e, n) {
  const t = yu(e);
  if (!t) return null;
  try {
    const a = bu.evaluateExpression(t, n), i = Number(a);
    return !Number.isFinite(i) || i < 0 ? null : i;
  } catch (a) {
    return console.error("[extras-formula] evaluation failed", { formula: e, err: a }), null;
  }
}
function ku(e, n) {
  return Wi(n, e);
}
function wu(e, n) {
  return Wi(n, e);
}
function Ms(e, n) {
  return Wi(n, e);
}
function Su(e) {
  let n = e;
  for (let t = 0; t < 16 && n; t++) {
    if (n instanceof nl) return n;
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
function Ki(e) {
  const n = e.shape ?? {};
  return Object.entries(n).filter(([, t]) => Su(t) instanceof nl).map(([t]) => t);
}
function Qn(e) {
  const t = (e.split(".").pop() ?? e).replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}
const xu = {
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
}, Pu = [
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
], Ou = [
  "totalBandingLength",
  // the headline one for banding tiering
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
];
Ki(ka);
function Iu(e, n) {
  const t = xu[e];
  return {
    name: e,
    label: t?.label ?? Qn(e),
    description: t?.description,
    group: t?.group ?? n
  };
}
const Cu = Pu.map((e) => Iu(e, "Edge")), Lu = Ou.map((e) => ({
  name: `order.${e}`,
  label: Qn(e),
  group: "Order"
})), Fu = [...Cu, ...Lu], Eu = Fu.map((e) => e.name), Au = {
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
}, $u = [
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
], Nu = [
  "totalFinishArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
];
Ki(ka);
function Tu(e, n) {
  const t = Au[e];
  return {
    name: e,
    label: t?.label ?? Qn(e),
    description: t?.description,
    group: t?.group ?? n
  };
}
const Mu = $u.map((e) => Tu(e, "Face")), Vu = Nu.map((e) => ({
  name: `order.${e}`,
  label: Qn(e),
  group: "Order"
})), Du = [...Mu, ...Vu], ju = Du.map((e) => e.name), Bu = {
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
}, qu = [
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
], _u = [
  "totalPlaningArea",
  "totalPartsProduced",
  "totalStockCost",
  "totalStockArea",
  "totalPartArea"
];
Ki(ka);
function Ru(e, n) {
  const t = Bu[e];
  return {
    name: e,
    label: t?.label ?? Qn(e),
    description: t?.description,
    group: t?.group ?? n
  };
}
const Uu = qu.map((e) => Ru(e, "Feature")), Gu = _u.map((e) => ({
  name: `order.${e}`,
  label: Qn(e),
  group: "Order"
})), zu = [...Uu, ...Gu], Wu = zu.map((e) => e.name), Zt = G(null);
let Ku = 0;
function Hu(e) {
  const n = e || `action-menu-${++Ku}-${Date.now()}`, t = F({
    get: () => Zt.value === n,
    set: (b) => {
      b ? Zt.value = n : Zt.value === n && (Zt.value = null);
    }
  }), a = () => {
    Zt.value = n;
  }, i = () => {
    Zt.value === n && (Zt.value = null);
  }, l = () => {
    Zt.value = null;
  }, u = () => {
    t.value = !t.value;
  }, r = F(() => Zt.value !== null), f = F(() => Zt.value), p = F(() => Zt.value === n);
  return {
    // Instance-specific
    id: Dt(G(n)),
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
const Zu = { class: "action-menu" }, Ju = ["textContent"], Qu = {
  key: 0,
  class: "menu-divider"
}, Yu = {
  key: 1,
  class: "group-label"
}, Xu = /* @__PURE__ */ vt({
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
    const t = e, a = n, { isOpen: i, close: l, toggle: u } = Hu(t.menuId), r = G(), f = G(), p = F(() => t.disabled), b = F(() => t.label), I = F(() => t.showLabel), E = F(() => t.icon), { floatingStyles: h } = Gs(r, f, {
      placement: t.placement,
      whileElementsMounted: ol,
      middleware: [
        il(t.offset),
        sl(),
        ll({ padding: 8 })
      ]
    }), M = (S) => {
      if (!S) return ["fas", "question"];
      if (typeof S == "function" && (S = S(t)), Array.isArray(S))
        return S;
      if (typeof S == "string") {
        const K = S.split(" ");
        if (K.length >= 2) {
          const ie = K[0], fe = K.slice(1).join("-").replace("fa-", "");
          return [ie, fe];
        }
        return ["fas", S.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, J = F(() => M(E.value)), ue = (S) => typeof S.active == "function" ? S.active(t) : typeof S.active == "boolean" ? S.active : !1, _ = (S) => {
      if (!S.href) return !1;
      try {
        const K = typeof S.href == "function" ? S.href(t) : S.href;
        return new URL(K, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, j = (S) => S.href ? "a" : "div", pe = (S) => {
      const K = {};
      if (S.href) {
        const ie = typeof S.href == "function" ? S.href(t) : S.href;
        if (K.href = ie, _(S)) {
          const fe = typeof S.target == "function" ? S.target(t) : S.target;
          K.target = fe || "_blank", K.rel = S.rel || "noopener noreferrer";
        } else if (S.target) {
          const fe = typeof S.target == "function" ? S.target(t) : S.target;
          K.target = fe;
        }
        S.rel && (K.rel = S.rel);
      }
      return S.attrs && Object.assign(K, S.attrs), K;
    }, le = F(() => t.menuItems.map((S) => {
      const K = { ...S };
      return typeof S.href == "function" && (K.href = S.href(t)), typeof S.icon == "function" && (K.icon = S.icon(t)), typeof S.disabled == "function" && (K.disabled = S.disabled(t)), typeof S.label == "function" && (K.label = S.label(t)), typeof S.variant == "function" && (K.variant = S.variant(t)), typeof S.active == "function" && (K.active = S.active(t)), typeof S.target == "function" && (K.target = S.target(t)), typeof S.show == "function" && (K.show = S.show(t)), K;
    })), v = (S) => {
      S.stopPropagation(), S.preventDefault(), !p.value && u();
    }, T = (S, K) => {
      if (K.stopPropagation(), S.disabled && !S.href) {
        K.preventDefault();
        return;
      }
      if (typeof S.action == "function" && S.action(S) === !1 && S.href) {
        K.preventDefault();
        return;
      }
      a("action", {
        id: S.id,
        item: S
      }), S.href && t.closeOnLinkClick ? l() : S.href || l();
    }, Q = (S) => {
      const K = [];
      if (S.variant) {
        const fe = typeof S.variant == "function" ? S.variant(t) : S.variant;
        K.push(`variant-${fe}`);
      }
      if ((typeof S.disabled == "function" ? S.disabled(t) : S.disabled) && !S.href && K.push("disabled"), ue(S) && K.push("active"), S.href && K.push("menu-link"), _(S) && K.push("external-link"), S.class) {
        const fe = typeof S.class == "function" ? S.class(t) : S.class;
        K.push(fe);
      }
      return K.join(" ");
    }, $ = (S) => {
      const K = S.target;
      i.value && r.value && f.value && !r.value.contains(K) && !f.value.contains(K) && l();
    }, q = (S) => {
      S.key === "Escape" && i.value && l();
    };
    return bn(() => {
      document.addEventListener("click", $), document.addEventListener("keydown", q);
    }), Qa(() => {
      document.removeEventListener("click", $), document.removeEventListener("keydown", q);
    }), (S, K) => (O(), D("div", Zu, [
      H("div", {
        ref_key: "trigger",
        ref: r,
        onClick: v,
        class: nt(["actions-btn", { active: L(i), disabled: p.value }])
      }, [
        E.value ? (O(), Ee(L(Wa), {
          key: 0,
          icon: J.value,
          class: "icon"
        }, null, 8, ["icon"])) : ne("", !0),
        I.value ? (O(), D("span", {
          key: 1,
          class: "label",
          textContent: me(b.value)
        }, null, 8, Ju)) : ne("", !0)
      ], 2),
      (O(), Ee(Ui, { to: "body" }, [
        L(i) && !p.value ? (O(), D("div", {
          key: 0,
          ref_key: "floating",
          ref: f,
          style: Jt(L(h)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: K[0] || (K[0] = Mn(() => {
          }, ["stop"]))
        }, [
          (O(!0), D(Ct, null, Kt(le.value, (ie, fe) => (O(), D(Ct, { key: fe }, [
            ie.type === "divider" ? (O(), D("div", Qu)) : ie.type === "group" ? (O(), D("div", Yu, me(ie.label), 1)) : ie.show !== !1 ? (O(), Ee(ko(j(ie)), fn({
              key: 2,
              ref_for: !0
            }, pe(ie), {
              onClick: (re) => T(ie, re),
              id: ie.id,
              class: ["menu-item", Q(ie)],
              disabled: ie.disabled && !ie.href
            }), {
              default: pn(() => [
                ie.icon || ue(ie) ? (O(), Ee(L(Wa), {
                  key: 0,
                  icon: ue(ie) ? ["fass", "check"] : M(ie.icon)
                }, null, 8, ["icon"])) : ne("", !0),
                H("span", null, me(ie.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : ne("", !0)
          ], 64))), 128))
        ], 4)) : ne("", !0),
        L(i) && !p.value ? (O(), D("div", {
          key: 1,
          class: "backdrop",
          onClick: K[1] || (K[1] = //@ts-ignore
          (...ie) => L(l) && L(l)(...ie))
        })) : ne("", !0)
      ]))
    ]));
  }
}), ec = {
  key: 0,
  class: "extras-price-display"
}, tc = { class: "extras-price-rate" }, nc = {
  key: 0,
  class: "extras-price-label"
}, ac = {
  key: 1,
  class: "extras-price-detail"
}, ic = /* @__PURE__ */ vt({
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
    return (a, i) => e.pricePerUnit !== void 0 ? (O(), D("span", ec, [
      H("strong", tc, me(t(e.pricePerUnit)), 1),
      e.priceLabel ? (O(), D("span", nc, me(e.priceLabel), 1)) : ne("", !0),
      e.quantity !== void 0 && e.quantity > 0 ? (O(), D("span", ac, [
        _t(" × " + me(e.quantity.toFixed(2)) + me(e.quantityUnit ? " " + e.quantityUnit : "") + " = ", 1),
        H("strong", null, me(t(e.pricePerUnit * e.quantity)), 1)
      ])) : ne("", !0)
    ])) : ne("", !0);
  }
}), sc = /* @__PURE__ */ Qt(ic, [["__scopeId", "data-v-2b730358"]]);
function Hi(e) {
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
function Ag(e, n) {
  const t = Hi(e);
  return t ? (0.299 * t.r + 0.587 * t.g + 0.114 * t.b) / 255 > 0.55 ? "#000000" : "#ffffff" : "#000000";
}
function Vs(e, n = 30, t = 75) {
  const a = Hi(e);
  if (!a) return e;
  const i = oc(a.r, a.g, a.b);
  if (i.l >= n && i.l <= t && i.s >= 25) return e;
  const u = Math.min(t, Math.max(n, i.l)), r = i.s < 25 ? 60 : i.s, [f, p, b] = rc(i.h, r, u);
  return "#" + [f, p, b].map((I) => I.toString(16).padStart(2, "0")).join("");
}
function $g(e) {
  const n = lc(e);
  return n === null ? "white" : n > 0.55 ? "#cc1f8c" : "white";
}
function lc(e) {
  const n = Hi(e);
  return n ? (0.299 * n.r + 0.587 * n.g + 0.114 * n.b) / 255 : null;
}
function oc(e, n, t) {
  const a = e / 255, i = n / 255, l = t / 255, u = Math.max(a, i, l), r = Math.min(a, i, l), f = (u + r) / 2;
  let p = 0, b = 0;
  if (u !== r) {
    const I = u - r;
    switch (b = f > 0.5 ? I / (2 - u - r) : I / (u + r), u) {
      case a:
        p = (i - l) / I + (i < l ? 6 : 0);
        break;
      case i:
        p = (l - a) / I + 2;
        break;
      case l:
        p = (a - i) / I + 4;
        break;
    }
    p *= 60;
  }
  return { h: p, s: b * 100, l: f * 100 };
}
function rc(e, n, t) {
  n /= 100, t /= 100;
  const a = (1 - Math.abs(2 * t - 1)) * n, i = a * (1 - Math.abs(e / 60 % 2 - 1)), l = t - a / 2;
  let u = 0, r = 0, f = 0;
  return e >= 0 && e < 60 ? (u = a, r = i, f = 0) : e >= 60 && e < 120 ? (u = i, r = a, f = 0) : e >= 120 && e < 180 ? (u = 0, r = a, f = i) : e >= 180 && e < 240 ? (u = 0, r = i, f = a) : e >= 240 && e < 300 ? (u = i, r = 0, f = a) : e >= 300 && e < 360 && (u = a, r = 0, f = i), [
    Math.round((u + l) * 255),
    Math.round((r + l) * 255),
    Math.round((f + l) * 255)
  ];
}
const Ds = (e, n, t) => {
  if (n === "unitDependent")
    if (t === "fraction") {
      if (/\/0$/.test(e))
        return {
          value: e,
          valid: !1,
          message: "division_by_zero"
        };
      const a = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(e), i = Xs(e);
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
function uc({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = G({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(e.value ?? "")
  }), i = (r, f = !1) => {
    if (r == null || r === "") {
      const b = e.required && !e.disableRequiredValidation;
      return e.type === "string" ? b ? { value: null, valid: !1, message: "field_required" } : { value: r === null ? null : "", valid: !0 } : Do(r, "decimal", b);
    }
    const p = String(r);
    switch (e.type) {
      case "string":
        return { value: p, valid: !0 };
      case "unitDependent":
        if (f)
          return Ds(p, e.type, e.numberFormat);
        try {
          const b = he({
            v: r,
            nf: e.numberFormat,
            dp: e.decimalPlaces,
            fr: e.fractionRoundTo
          });
          if (typeof b == "number") {
            let I = b, E = !0, h;
            return typeof e.min == "number" && I < e.min && (I = e.min, E = !1, h = "below_min"), typeof e.max == "number" && I > e.max && (I = e.max, E = !1, h = "above_max"), { value: I, valid: E, message: h };
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
          return Ds(p, e.type);
        try {
          const I = he({
            v: r,
            nf: "decimal"
          });
          if (I === null)
            return e.required && !e.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let E = I;
          if (e.type === "integer" && (E = Math.round(E)), e.allowZero === !1 && E === 0)
            return {
              value: E,
              valid: !1,
              message: "zero_not_allowed"
            };
          let h = !0, M;
          return typeof e.min == "number" && E < e.min && (E = e.min, h = !1, M = "below_min"), typeof e.max == "number" && E > e.max && (E = e.max, h = !1, M = "above_max"), { value: E, valid: h, message: M };
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
              const f = r.target, p = f.value, b = f.selectionStart || 0, I = p.substring(0, b);
              if (r.key === "/" && p.includes("/")) {
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
          if (!Xs(p)) {
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
            const I = i(p, !0);
            n("validation", I, e.id), n("input", p);
          }
        }
        n("paste", r);
      }
    },
    processValue: i
  };
}
function cc({
  props: e,
  emit: n,
  isMounted: t
}) {
  const a = G({
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
function dc({
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
const fc = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], pc = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(!0), l = G(null), u = F(() => t.value === t.trueValue), {
      handleCheckboxChange: r,
      handleFocus: f,
      handleBlur: p
    } = dc({
      props: t,
      emit: a,
      isMounted: i
    });
    return (b, I) => (O(), D("input", {
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
      onChange: I[0] || (I[0] = //@ts-ignore
      (...E) => L(r) && L(r)(...E)),
      onFocus: I[1] || (I[1] = //@ts-ignore
      (...E) => L(f) && L(f)(...E)),
      onBlur: I[2] || (I[2] = //@ts-ignore
      (...E) => L(p) && L(p)(...E))
    }, null, 40, fc));
  }
}), gc = ["for"], va = /* @__PURE__ */ vt({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(e) {
    return (n, t) => (O(), D("label", {
      for: e.id,
      class: "input-label"
    }, [
      gn(n.$slots, "default", {}, () => [
        _t(me(e.label), 1)
      ])
    ], 8, gc));
  }
}), Ua = /* @__PURE__ */ new Set();
function mc(e) {
  for (const n of Ua)
    n !== e && n();
}
function fl(e, n, t = {}, a) {
  const i = G(null);
  if (a) {
    const b = () => {
      a.value && (a.value = !1);
    };
    st(a, (I) => {
      I ? (mc(b), Ua.add(b)) : Ua.delete(b);
    }, { flush: "sync" }), Gi(() => {
      Ua.delete(b);
    });
  }
  bn(() => {
    const b = e.value;
    i.value = b?.closest("dialog") ?? b?.closest(".smartcut-content") ?? document.body;
  });
  const l = [
    il(t.offsetPx ?? 4),
    sl({ padding: t.padding ?? 8 }),
    ll({ padding: t.padding ?? 8 })
  ];
  t.sizeApply && l.push(Er({
    padding: t.padding ?? 8,
    apply: t.sizeApply
  })), t.extraMiddleware && l.push(...t.extraMiddleware);
  const { floatingStyles: u, isPositioned: r } = Gs(e, n, {
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
    whileElementsMounted: (b, I, E) => ol(b, I, E, { animationFrame: !0 }),
    // `transform: true` (the default) places the dropdown via
    // `transform: translate()`. We pair it with a short CSS transition
    // on transform in `useFloatingDropdownStyle` below so per-frame
    // position updates ease across small jumps instead of stuttering.
    transform: !0,
    middleware: l
  }), f = F(() => ({
    ...u.value,
    visibility: r.value ? "visible" : "hidden",
    opacity: r.value ? 1 : 0,
    transition: "opacity 80ms ease-out"
  }));
  function p() {
    if (!e.value || !n.value) return;
    const b = getComputedStyle(e.value), I = n.value;
    I.style.font = b.font, I.style.color = b.color;
  }
  return {
    floatingStyles: f,
    teleportTarget: i,
    syncFloatingFont: p
  };
}
const hc = ["id", "disabled", "aria-label"], vc = { class: "multiselect__text" }, bc = { class: "multiselect__list" }, yc = ["checked", "disabled", "onChange"], kc = { class: "multiselect__option-label" }, wc = {
  key: 0,
  class: "multiselect__no-results"
}, Sc = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(!1), l = G(null), u = G(), r = G(), f = G(null), p = G(""), { floatingStyles: b, teleportTarget: I, syncFloatingFont: E } = fl(
      u,
      r,
      {
        sizeApply({ rects: le, availableWidth: v, availableHeight: T, elements: Q }) {
          const $ = le.reference.width, q = Math.min(v, Math.max($, 400));
          Object.assign(Q.floating.style, {
            maxHeight: `${Math.max(200, T)}px`,
            minWidth: `${$}px`,
            maxWidth: `${q}px`
          });
        }
      },
      i
    ), h = F(() => {
      const le = t.value;
      return le ? Array.isArray(le) ? new Set(le.map(String)) : new Set(String(le).split(",").filter(Boolean)) : /* @__PURE__ */ new Set();
    }), M = F(() => t.options.map((le) => ({
      value: le.value,
      label: le.label ?? String(le.value),
      hidden: le.hidden ?? !1,
      disabled: le.disabled ?? !1
    }))), J = F(() => {
      if (!p.value) return M.value;
      const le = p.value.toLowerCase();
      return M.value.filter(
        (v) => (v.label ?? String(v.value)).toLowerCase().includes(le)
      );
    }), ue = F(() => {
      const le = h.value.size;
      if (le === 0) return t.placeholder || "All";
      if (le === 1) {
        const v = [...h.value][0];
        return M.value.find((Q) => String(Q.value) === v)?.label || v;
      }
      return `${le} selected`;
    });
    function _() {
      t.disabled || (i.value = !i.value, i.value && (p.value = "", Bt(() => {
        E(), t.searchable && f.value?.focus();
      })));
    }
    function j(le) {
      const v = String(le), T = new Set(h.value);
      T.has(v) ? T.delete(v) : T.add(v), a("update:value", [...T]);
    }
    function pe(le) {
      const v = le.target;
      l.value?.contains(v) || r.value?.contains(v) || (i.value = !1);
    }
    return bn(() => document.addEventListener("click", pe)), Gi(() => document.removeEventListener("click", pe)), (le, v) => (O(), D("div", {
      class: "multiselect",
      ref_key: "rootRef",
      ref: l
    }, [
      H("button", {
        ref_key: "triggerRef",
        ref: u,
        type: "button",
        class: "multiselect__trigger",
        id: t.id,
        disabled: t.disabled,
        "aria-label": t.ariaLabel,
        onClick: _
      }, [
        H("span", vc, me(ue.value), 1)
      ], 8, hc),
      (O(), Ee(Ui, {
        to: L(I),
        disabled: !L(I)
      }, [
        i.value ? (O(), D("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: r,
          class: "multiselect__dropdown",
          style: Jt(L(b))
        }, [
          t.searchable ? Ya((O(), D("input", {
            key: 0,
            ref_key: "searchRef",
            ref: f,
            "onUpdate:modelValue": v[0] || (v[0] = (T) => p.value = T),
            type: "text",
            class: "multiselect__search",
            placeholder: "Search...",
            onClick: v[1] || (v[1] = Mn(() => {
            }, ["stop"]))
          }, null, 512)), [
            [zs, p.value]
          ]) : ne("", !0),
          H("div", bc, [
            (O(!0), D(Ct, null, Kt(J.value, (T) => (O(), D("label", {
              key: T.value,
              class: nt(["multiselect__option", { "multiselect__option--zero": T.hidden }])
            }, [
              H("input", {
                type: "checkbox",
                checked: h.value.has(String(T.value)),
                disabled: T.disabled,
                onChange: (Q) => j(T.value)
              }, null, 40, yc),
              H("span", kc, me(T.label), 1)
            ], 2))), 128)),
            t.searchable && J.value.length === 0 ? (O(), D("div", wc, " No matches ")) : ne("", !0)
          ])
        ], 4)) : ne("", !0)
      ], 8, ["to", "disabled"]))
    ], 512));
  }
}), xc = /* @__PURE__ */ Qt(Sc, [["__scopeId", "data-v-50e58ba3"]]), Pc = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Oc = ["disabled", "selected"], Ic = {
  key: 0,
  value: " "
}, Cc = ["hidden", "value", "disabled"], Lc = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(!0), l = G(null), u = F(() => t.options.map((f) => ({
      value: f.value,
      label: f.label?.toUpperCase() ?? f.value?.toString()?.toUpperCase(),
      hidden: f.hidden ?? !1,
      disabled: f.disabled ?? !1
    }))), {
      handleSelectChange: r
    } = cc({
      props: t,
      emit: a,
      isMounted: i
    });
    return (f, p) => (O(), D("select", fn(f.$attrs, {
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
      (...b) => L(r) && L(r)(...b))
    }), [
      H("option", {
        value: "",
        disabled: t.selectFirstOptionDisabled,
        selected: !t.value
      }, me(t.text?.select?.toUpperCase() ?? "SELECT"), 9, Oc),
      t.multiEdit ? (O(), D("option", Ic, me(t.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : ne("", !0),
      (O(!0), D(Ct, null, Kt(u.value, (b) => (O(), D("option", {
        key: b.value,
        hidden: b.hidden,
        value: b.value,
        disabled: b.disabled
      }, me(b.label), 9, Cc))), 128))
    ], 16, Pc));
  }
}), Fc = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], Ga = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(!0), l = G(null), {
      handleInput: u,
      handleMouseDown: r,
      handleMouseUp: f,
      handleFocus: p,
      handleBlur: b,
      handleKeydown: I,
      handleCompositionStart: E,
      handleCompositionEnd: h,
      handlePaste: M
    } = uc({
      props: t,
      emit: a,
      isMounted: i
    }), J = (ue) => {
      const _ = ue.getBoundingClientRect(), j = window.getComputedStyle(ue);
      return _.width > 0 && _.height > 0 && j.display !== "none" && j.visibility !== "hidden";
    };
    return bn(() => {
      dt(t.default) && (t.value === void 0 || t.value === null) && a("update:value", t.default), t.focus && l.value && J(l.value) && Bt(() => l.value.focus());
    }), Qa(() => {
      i.value = !1;
    }), (ue, _) => (O(), D("input", fn(ue.$attrs, {
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
      onInput: _[0] || (_[0] = //@ts-ignore
      (...j) => L(u) && L(u)(...j)),
      onFocus: _[1] || (_[1] = //@ts-ignore
      (...j) => L(p) && L(p)(...j)),
      onBlur: _[2] || (_[2] = //@ts-ignore
      (...j) => L(b) && L(b)(...j)),
      onKeydown: _[3] || (_[3] = //@ts-ignore
      (...j) => L(I) && L(I)(...j)),
      onCompositionstart: _[4] || (_[4] = //@ts-ignore
      (...j) => L(E) && L(E)(...j)),
      onCompositionend: _[5] || (_[5] = //@ts-ignore
      (...j) => L(h) && L(h)(...j)),
      onPaste: _[6] || (_[6] = //@ts-ignore
      (...j) => L(M) && L(M)(...j)),
      onMousedown: _[7] || (_[7] = //@ts-ignore
      (...j) => L(r) && L(r)(...j)),
      onMouseup: _[8] || (_[8] = //@ts-ignore
      (...j) => L(f) && L(f)(...j))
    }), null, 16, Fc));
  }
}), Ec = ["data-field-id"], Ac = {
  key: 0,
  class: "input-label-group"
}, $c = {
  key: 1,
  class: "password-input-wrapper"
}, Nc = ["aria-label"], Tc = {
  key: 2,
  class: "clearable-input-wrapper"
}, Mc = ["aria-label"], Vc = ["disabled", "selected"], Dc = {
  key: 0,
  value: " "
}, jc = ["hidden", "value", "disabled"], Bc = ["id", "name", "value", "disabled"], qc = {
  key: 7,
  class: "slider-wrapper"
}, _c = ["id", "name", "value", "min", "max", "step", "disabled", "readonly"], Rc = ["for"], Uc = {
  key: 8,
  class: "clearable-input-wrapper clearable-input-wrapper--textarea"
}, Gc = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], zc = ["aria-label"], Wc = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Kc = {
  key: 2,
  class: "help-text"
}, Hc = /* @__PURE__ */ vt({
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
    const t = n, a = e, i = G(null), l = G(null), u = G(!0), r = G(a.numberFormat), f = G(!1), p = F(() => a.custom ? "custom-" + a.id : a.id), b = F(() => `${p.value}-error`), I = F(() => a.label || a.placeholder), E = F(() => pt(a.type, a.numberFormat, f.value)), h = F(() => V(a.type, a.numberFormat)), M = F(() => typeof a.value == "string" && a.value.length > 0), J = F(() => M.value ? Vs(a.value) : "#ffffff"), ue = (ee) => {
      const ge = ee.target.value;
      t("update:value", Vs(ge));
    }, _ = () => {
      t("update:value", null);
    }, j = F(() => {
      const ee = a.value;
      if (typeof ee == "number" && Number.isFinite(ee)) return ee;
      const ge = parseFloat(ee);
      return Number.isFinite(ge) ? ge : typeof a.min == "number" ? a.min : 0;
    }), pe = (ee) => {
      const ge = ee.target.value, Fe = parseFloat(ge);
      t("update:value", Number.isFinite(Fe) ? Fe : null);
    }, le = F(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(a.type)), v = F(() => a.value !== null && a.value !== void 0 && a.value !== "");
    function T() {
      const ee = le.value && ["integer", "float", "unitDependent"].includes(a.type) ? null : "";
      t("update:value", ee);
    }
    const Q = F(() => {
      let ee = a.value;
      if (a.multiEdit && (ee === 0 || ee === 1)) return null;
      if (a.type !== "unitDependent" || !ee) return ee;
      try {
        return he({ v: ee, nf: a.numberFormat });
      } catch {
        return a.numberFormat === "decimal" ? 0 : "0";
      }
    }), $ = F(() => a.options.map((ee) => ({
      value: ee.value,
      label: ee.label || ee.value?.toString(),
      hidden: ee.hidden || !1,
      disabled: ee.disabled || !1
    }))), q = F(() => $.value.map((ee) => {
      const ge = ee.label ? Ie(ee.label) : ee.value?.toString();
      return {
        ...ee,
        // Translate the label key first, then uppercase the translated result
        label: ge?.toUpperCase() || ee.value?.toString().toUpperCase()
      };
    })), S = F(() => ({
      input: !0,
      issue: a.issue || !u.value,
      warning: a.warning,
      required: a.required,
      disabled: a.disabled
    })), K = F(() => ({
      id: p.value,
      name: a.name,
      value: a.value,
      disabled: a.disabled,
      readonly: a.readonly,
      required: a.required,
      "aria-label": I.value,
      "aria-invalid": !!a.issue,
      "aria-describedby": a.issue ? b.value : void 0
    })), ie = F(() => ({
      ...K.value,
      type: a.type,
      inputMode: h.value,
      inputType: E.value,
      placeholder: a.placeholder,
      allowZero: a.allowZero,
      min: a.min,
      max: a.max,
      focus: a.focus,
      numberFormat: a.numberFormat,
      default: a.default,
      disableRequiredValidation: a.disableRequiredValidation,
      autocomplete: a.autocomplete
    })), fe = F(() => ({
      ...K.value,
      trueValue: a.trueValue,
      falseValue: a.falseValue
    })), re = F(() => ({
      ...K.value,
      options: q.value,
      selectFirstOptionDisabled: a.selectFirstOptionDisabled,
      multiEdit: a.multiEdit,
      numberFormat: a.numberFormat,
      text: a.text,
      output: a.output
    })), Je = F(() => (a.text?.select || "SELECT").toUpperCase()), We = F(() => (a.text?.delete || "DELETE").toUpperCase()), ke = (ee) => {
      l.value = ee;
    }, Le = (ee) => a.label && a.enableLabel && a.labelPosition === ee, pt = (ee, ge, Fe) => {
      switch (ee) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return ge === "fraction" ? "text" : "number";
        case "password":
          return Fe ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, V = (ee, ge) => {
      if (ee === "unitDependent")
        return ge === "fraction" ? "text" : "decimal";
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
    }, Y = (ee) => {
      t("update:value", ee);
    }, ve = (ee, ge) => {
      ee.valid === void 0 || ee.valid === !0 ? (u.value = !0, t("validation", i.value, ee)) : ee.valid === !1 && ee.message && (u.value = !1, console.warn(`Field validation error for field ${ge} - ${ee.message}`), t("validation", i.value, ee));
    }, Ne = () => {
      t("blur");
    };
    return st(() => a.numberFormat, (ee, ge) => {
      if (a.shouldConvertNumberFormat !== !1) {
        if (a.type === "unitDependent" && ee !== ge && a.value !== null && a.value !== void 0 && a.value !== "")
          try {
            const Fe = he({ v: a.value, nf: ee });
            t("update:value", Fe);
          } catch {
            t("update:value", ee === "decimal" ? 0 : "0");
          }
        r.value = ee;
      }
    }), (ee, ge) => (O(), D("div", {
      ref_key: "fieldRef",
      ref: i,
      class: nt(["input-wrapper", [S.value, ee.$attrs.class]]),
      "data-field-id": p.value
    }, [
      e.type === "checkbox" ? (O(), D("div", Ac, [
        Le("first") ? (O(), Ee(va, {
          key: 0,
          id: p.value,
          label: e.label,
          required: e.required
        }, {
          default: pn(() => [
            gn(ee.$slots, "label", {}, () => [
              _t(me(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ne("", !0),
        e.type === "checkbox" ? (O(), Ee(pc, fn({
          key: 1,
          ref: ke,
          type: "checkbox"
        }, fe.value, {
          value: e.value,
          "onUpdate:value": ge[0] || (ge[0] = (Fe) => t("update:value", Fe))
        }), null, 16, ["value"])) : ne("", !0),
        Le("last") ? (O(), Ee(va, {
          key: 2,
          id: p.value,
          label: e.label,
          required: e.required
        }, {
          default: pn(() => [
            gn(ee.$slots, "label", {}, () => [
              _t(me(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ne("", !0)
      ])) : (O(), D(Ct, { key: 1 }, [
        Le("first") ? (O(), Ee(va, {
          key: 0,
          id: p.value,
          label: e.label,
          required: e.required
        }, {
          default: pn(() => [
            gn(ee.$slots, "label", {}, () => [
              _t(me(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ne("", !0),
        e.type === "password" ? (O(), D("div", $c, [
          ot(Ga, fn({ ref: ke }, ie.value, {
            name: a.name,
            "input-type": E.value,
            "input-mode": h.value,
            value: Q.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: ve,
            "onUpdate:value": Y,
            onBlur: Ne
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          H("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": f.value ? "Hide password" : "Show password",
            onClick: ge[1] || (ge[1] = (Fe) => f.value = !f.value)
          }, me(f.value ? "🙈" : "👁"), 9, Nc)
        ])) : le.value && e.clearable ? (O(), D("div", Tc, [
          ot(Ga, fn({ ref: ke }, ie.value, {
            name: a.name,
            "input-type": E.value,
            "input-mode": h.value,
            value: Q.value,
            "disable-required-validation": e.disableRequiredValidation,
            onValidation: ve,
            "onUpdate:value": Y,
            onBlur: Ne
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          v.value && !e.disabled && !e.readonly ? (O(), D("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": L(Ie)("actions.clear"),
            title: "Clear",
            onClick: T
          }, "×", 8, Mc)) : ne("", !0)
        ])) : le.value ? (O(), Ee(Ga, fn({
          key: 3,
          ref: ke
        }, ie.value, {
          name: a.name,
          "input-type": E.value,
          "input-mode": h.value,
          value: Q.value,
          "disable-required-validation": e.disableRequiredValidation,
          onValidation: ve,
          "onUpdate:value": Y,
          onBlur: Ne
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : e.type === "select" ? (O(), Ee(Lc, fn({
          key: 4,
          ref: ke
        }, re.value, {
          name: a.name,
          "onUpdate:value": ge[2] || (ge[2] = (Fe) => t("update:value", Fe))
        }), {
          default: pn(() => [
            H("option", {
              value: "",
              disabled: e.selectFirstOptionDisabled,
              selected: !e.value
            }, me(Je.value), 9, Vc),
            e.multiEdit ? (O(), D("option", Dc, me(We.value), 1)) : ne("", !0),
            (O(!0), D(Ct, null, Kt(q.value, (Fe) => (O(), D("option", {
              key: Fe.value,
              hidden: Fe.hidden,
              value: Fe.value,
              disabled: Fe.disabled
            }, me(Fe.label), 9, jc))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : e.type === "multiselect" ? (O(), Ee(xc, {
          key: 5,
          ref: ke,
          id: p.value,
          name: a.name,
          value: e.value,
          options: $.value,
          disabled: e.disabled,
          readonly: e.readonly,
          "aria-label": I.value,
          placeholder: e.placeholder,
          searchable: a.searchable,
          "onUpdate:value": ge[3] || (ge[3] = (Fe) => t("update:value", Fe))
        }, null, 8, ["id", "name", "value", "options", "disabled", "readonly", "aria-label", "placeholder", "searchable"])) : e.type === "color" ? (O(), D("input", {
          key: 6,
          id: p.value,
          name: a.name || p.value,
          ref: ke,
          type: "color",
          value: J.value,
          class: nt({ "color-input--empty": !M.value }),
          disabled: e.disabled,
          onChange: ue,
          onContextmenu: Mn(_, ["prevent"])
        }, null, 42, Bc)) : e.type === "slider" ? (O(), D("div", qc, [
          H("input", {
            id: p.value,
            name: a.name || p.value,
            ref: ke,
            type: "range",
            class: "slider-input",
            value: j.value,
            min: a.min ?? 0,
            max: a.max ?? 100,
            step: a.step ?? 1,
            disabled: e.disabled,
            readonly: e.readonly,
            onInput: pe
          }, null, 40, _c),
          H("output", {
            class: "slider-output",
            for: p.value
          }, me(j.value), 9, Rc)
        ])) : e.type === "textarea" && e.clearable ? (O(), D("div", Uc, [
          H("textarea", {
            id: p.value,
            name: a.name || p.value,
            ref: ke,
            value: e.value,
            placeholder: e.placeholder,
            disabled: e.disabled,
            readonly: e.readonly,
            required: e.required,
            rows: e.rows,
            autocomplete: e.autocomplete,
            onInput: ge[4] || (ge[4] = (Fe) => t("update:value", Fe.target.value)),
            onBlur: Ne
          }, null, 40, Gc),
          v.value && !e.disabled && !e.readonly ? (O(), D("button", {
            key: 0,
            type: "button",
            class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn clearable-input__clear",
            "aria-label": L(Ie)("actions.clear"),
            title: "Clear",
            onClick: T
          }, "×", 8, zc)) : ne("", !0)
        ])) : e.type === "textarea" ? (O(), D("textarea", {
          key: 9,
          id: p.value,
          name: a.name || p.value,
          ref: ke,
          value: e.value,
          placeholder: e.placeholder,
          disabled: e.disabled,
          readonly: e.readonly,
          required: e.required,
          rows: e.rows,
          autocomplete: e.autocomplete,
          onInput: ge[5] || (ge[5] = (Fe) => t("update:value", Fe.target.value)),
          onBlur: Ne
        }, null, 40, Wc)) : ne("", !0),
        Le("last") ? (O(), Ee(va, {
          key: 10,
          id: p.value,
          label: e.label,
          required: e.required
        }, {
          default: pn(() => [
            gn(ee.$slots, "label", {}, () => [
              _t(me(e.label), 1)
            ], !0)
          ]),
          _: 3
        }, 8, ["id", "label", "required"])) : ne("", !0)
      ], 64)),
      e.info ? (O(), D("small", Kc, me(e.info), 1)) : ne("", !0),
      gn(ee.$slots, "default", {}, void 0, !0)
    ], 10, Ec));
  }
}), ba = /* @__PURE__ */ Qt(Hc, [["__scopeId", "data-v-0c816cd2"]]), Zc = {
  key: 0,
  class: "loading-spinner__label"
}, Jc = /* @__PURE__ */ vt({
  __name: "LoadingSpinner",
  props: {
    size: { default: "medium" },
    label: { default: "" },
    block: { type: Boolean, default: !1 },
    fullPage: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (n, t) => (O(), D("div", {
      class: nt(["loading-spinner", [
        `loading-spinner--${e.size}`,
        {
          "loading-spinner--block": e.block || e.fullPage,
          "loading-spinner--full-page": e.fullPage
        }
      ]]),
      role: "status",
      "aria-live": "polite"
    }, [
      t[0] || (t[0] = H("span", {
        class: "loading-spinner__circle",
        "aria-hidden": "true"
      }, null, -1)),
      e.label ? (O(), D("span", Zc, me(e.label), 1)) : ne("", !0)
    ], 2));
  }
}), pl = /* @__PURE__ */ Qt(Jc, [["__scopeId", "data-v-ef6d8370"]]), Qc = {
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
}, Yc = {
  key: 0,
  class: "title"
}, Xc = ["onClick"], ed = { class: "ov-label" }, td = {
  key: 0,
  class: "ov-count"
}, nd = ["onClick"], ad = { class: "ov-body" }, id = {
  key: 0,
  class: "ov-row"
}, sd = { class: "ov-key" }, ld = ["onClick"], od = {
  key: 0,
  class: "ov-inline-array"
}, rd = ["onClick"], ud = {
  key: 2,
  class: "ov-circular"
}, cd = {
  key: 3,
  class: "ov-null"
}, dd = { key: 4 };
function fd(e, n, t, a, i, l) {
  const u = Dn("ObjectViewer", !0);
  return O(), D("div", {
    ref: "container",
    class: nt(["smartcut-object-viewer main", { "has-scroll": i.hasScroll, "at-bottom": i.atBottom }]),
    onScroll: n[0] || (n[0] = (...r) => l.handleScroll && l.handleScroll(...r))
  }, [
    t.title ? (O(), D("div", Yc, me(t.title), 1)) : ne("", !0),
    (O(!0), D(Ct, null, Kt(t.data, (r, f) => (O(), D("div", {
      key: f,
      class: "ov-node"
    }, [
      H("div", {
        class: "ov-header",
        onClick: (p) => l.toggle(f)
      }, [
        (O(), D("svg", {
          class: nt(["ov-chevron", { "is-open": i.expanded[f] }]),
          width: "10",
          height: "10",
          viewBox: "0 0 10 10"
        }, [...n[1] || (n[1] = [
          H("path", {
            d: "M3 1 L7 5 L3 9",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])], 2)),
        H("span", ed, me(t.paths[f] ?? f), 1),
        l.isObjectOrArray(r) ? (O(), D("span", td, me(Object.keys(r).length), 1)) : ne("", !0),
        H("span", {
          class: "ov-copy",
          title: "Copy as JSON",
          onClick: Mn((p) => l.copyToClipboard(r, t.paths[f] ?? f), ["stop"])
        }, [...n[2] || (n[2] = [
          H("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 16 16",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            H("rect", {
              x: "5",
              y: "5",
              width: "9",
              height: "9",
              rx: "1"
            }),
            H("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
          ], -1)
        ])], 8, nd)
      ], 8, Xc),
      Ya(H("div", ad, [
        l.isObjectOrArray(r) ? (O(!0), D(Ct, { key: 1 }, Kt(r, (p, b) => (O(), D("div", {
          key: b,
          class: "ov-row"
        }, [
          H("span", sd, me(b) + ":", 1),
          l.isObjectOrArray(p) && p !== null && !l.isSimpleArray(p) ? (O(), D("span", {
            key: 0,
            class: "ov-copy ov-copy-inline",
            title: "Copy all as JSON",
            onClick: (I) => l.copyToClipboard(p, b)
          }, [...n[3] || (n[3] = [
            H("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 16 16",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              H("rect", {
                x: "5",
                y: "5",
                width: "9",
                height: "9",
                rx: "1"
              }),
              H("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
            ], -1)
          ])], 8, ld)) : ne("", !0),
          H("span", {
            class: nt(["ov-val", l.getValueType(p)])
          }, [
            l.isSimpleArray(p) ? (O(), D("span", od, [
              _t(" [" + me(p.map((I) => l.formatValue(I)).join(", ")) + "] ", 1),
              H("span", {
                class: "ov-copy ov-copy-inline",
                title: "Copy as JSON",
                onClick: (I) => l.copyToClipboard(p, b)
              }, [...n[4] || (n[4] = [
                H("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "1.5",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, [
                  H("rect", {
                    x: "5",
                    y: "5",
                    width: "9",
                    height: "9",
                    rx: "1"
                  }),
                  H("path", { d: "M3 11 H2 a1 1 0 0 1-1-1 V2 a1 1 0 0 1 1-1 h8 a1 1 0 0 1 1 1 v1" })
                ], -1)
              ])], 8, rd)
            ])) : l.isObjectOrArray(p) && p !== null && !l.childAncestors.has(p) ? (O(), Ee(u, {
              key: 1,
              data: Array.isArray(p) ? p : [p],
              paths: l.getArrayPaths(p, b),
              root: !1,
              ancestors: l.childAncestors
            }, null, 8, ["data", "paths", "ancestors"])) : l.isObjectOrArray(p) && p !== null ? (O(), D("span", ud, "[Circular]")) : p === null ? (O(), D("span", cd, "null")) : (O(), D("span", dd, me(l.formatValue(p)), 1))
          ], 2)
        ]))), 128)) : (O(), D("div", id, [
          H("span", {
            class: nt(["ov-val", l.getValueType(r)])
          }, me(l.formatValue(r)), 3)
        ]))
      ], 512), [
        [Ws, i.expanded[f]]
      ])
    ]))), 128))
  ], 34);
}
const gl = /* @__PURE__ */ Qt(Qc, [["render", fd]]), pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: gl }, Symbol.toStringTag, { value: "Module" })), gd = {
  key: 0,
  class: "action-bar"
}, md = { class: "add-custom" }, hd = ["disabled"], vd = {
  key: 0,
  class: "extras-row"
}, bd = { class: "c-field-action extras-field-group" }, yd = ["disabled", "title", "onClick"], kd = {
  key: 0,
  class: "price"
}, wd = {
  key: 0,
  class: "formula-price"
}, Sd = {
  key: 0,
  class: "price-label"
}, xd = /* @__PURE__ */ vt({
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
    const t = zt({
      loader: () => import("./CatalogueBandingExtra-DEr3uWOw.js"),
      loadingComponent: () => So(pl, { size: "small", label: "Loading banding…" }),
      delay: 200
    }), a = !1, i = e, l = F(() => i.extraType === "banding" && !!i.catalogueKey), u = n, {
      mode: r,
      shouldShowAll: f,
      supportsFaces: p,
      supportsSides: b,
      canDelete: I,
      getLocationLabel: E,
      getInputType: h,
      getInputConfigForLocation: M,
      getSelectOptions: J,
      getPriceDisplay: ue,
      getCalculatedPrice: _,
      shouldShowDeleteButton: j,
      getLocationGroup: pe,
      isLocationVisible: le,
      handleInputChange: v,
      handleDelete: T
    } = Rr({
      shape: Wt(i, "shape"),
      extraType: i.extraType,
      allOptions: Wt(i, "allOptions"),
      labels: i.labels,
      userFriendlyFieldMap: i.userFriendlyFieldMap,
      allowCustomNames: i.allowCustomNames,
      customNames: Wt(i, "customNames"),
      enablePricing: i.enablePricing,
      pricing: i.pricing,
      displayNames: Wt(i, "displayNames"),
      orientationModel: i.orientationModel,
      stockGrain: i.stockGrain,
      getAvailablePricingOptions: i.getAvailablePricingOptions,
      getPrice: i.getPrice,
      formatPrice: i.formatPrice,
      findExtrasPrice: i.findExtrasPrice,
      locations: Wt(i, "locations"),
      locationGroups: Wt(i, "locationGroups")
    }), {
      newCustomName: Q,
      canAddCustomName: $,
      isActionMenuDisabled: q,
      customNameActions: S,
      handleAddCustomName: K,
      handleCustomNameAction: ie
    } = Ur({
      extraType: i.extraType,
      customNames: Wt(i, "customNames"),
      usedNames: Wt(i, "usedNames"),
      allowCustomNames: i.allowCustomNames,
      getSelectOptions: J,
      onCustomNameAdded: (oe) => u("custom-name-added", i.extraType, oe),
      onCustomNameDeleted: (oe) => u("custom-name-deleted", i.extraType, oe)
    }), {
      renderLocations: fe,
      getInputId: re,
      getDeleteConfig: Je
    } = Gr({
      extraType: i.extraType,
      allOptions: i.allOptions,
      labels: i.labels,
      shapeIndex: i.shapeIndex || 0,
      enablePricing: i.enablePricing,
      shouldShowAll: f,
      getInputType: h,
      getInputConfig: (oe, Ae) => M(oe, Ae),
      getAllInputConfig: (oe) => M("all", oe),
      getInputConfigForLocation: M,
      canDelete: I,
      getLocationLabel: E,
      shouldShowDeleteButton: j,
      locations: Wt(i, "locations"),
      locationGroups: Wt(i, "locationGroups"),
      shape: Wt(i, "shape"),
      orientationModel: i.orientationModel
    }), We = G(!1), ke = F(() => (oe) => {
      const Ae = pe(oe);
      return Ae === "all" || Ae === "faces" || Ae === "sides";
    }), Le = F(() => (oe) => Wn(i.extraType).includes(oe) ? Tn(oe) === "face" : !1), pt = F(() => (oe) => Wn(i.extraType).includes(oe) ? Tn(oe) === "side" : !1), V = (oe) => {
      const Ae = ue(oe);
      return !!Ae && Ae !== "N/A";
    };
    function Y(oe) {
      const Ue = i.shape?.extras?.[i.extraType];
      if (!Ue) return null;
      if (oe.startsWith("side.")) {
        const we = oe.replace(/^side\./, ""), $e = Ue.sides?.[we];
        return typeof $e == "string" && $e ? $e : null;
      }
      if (oe.startsWith("face.")) {
        const we = oe.replace(/^face\./, ""), $e = Ue.faces?.[we];
        return typeof $e == "string" && $e ? $e : null;
      }
      return null;
    }
    const ve = (oe) => {
      const Ae = Y(oe);
      if (!Ae) return null;
      const Ue = i.formulas?.[Ae];
      if (!Ue) return null;
      const we = Number(i.shape?.l) || 0, $e = Number(i.shape?.w) || 0, be = Number(i.shape?.t) || 0, xt = Number(i.shape?.q) || 1, Lt = { stockL: 0, stockW: 0, stockCost: 0, stockDiscount: 0, stockDiscountedCost: 0 }, gt = {}, kn = i.extraType === "banding" ? Eu : i.extraType === "finish" ? ju : i.extraType === "planing" ? Wu : [];
      for (const lt of kn)
        lt.startsWith("order.") && (gt[lt] = 0);
      if (i.extraType === "banding" && oe.startsWith("side.")) {
        const lt = oe.replace(/^side\./, "");
        return ku({
          length: lt === "l1" || lt === "l2" ? we : $e,
          edge: lt,
          isLongEdge: lt === "l1" || lt === "l2" ? 1 : 0,
          partL: we,
          partW: $e,
          partT: be,
          partQuantity: xt,
          ...Lt,
          ...gt
        }, Ue);
      }
      if (i.extraType === "finish" && oe.startsWith("face.")) {
        const lt = oe.replace(/^face\./, "");
        return wu({
          area: we * $e,
          face: lt,
          partL: we,
          partW: $e,
          partT: be,
          partQuantity: xt,
          ...Lt,
          ...gt
        }, Ue);
      }
      if (i.extraType === "planing") {
        if (oe.startsWith("face.")) {
          const lt = oe.replace(/^face\./, "");
          return Ms({
            area: we * $e,
            length: 0,
            target: `face.${lt}`,
            isFace: 1,
            partL: we,
            partW: $e,
            partT: be,
            partQuantity: xt,
            ...Lt,
            ...gt
          }, Ue);
        }
        if (oe.startsWith("side.")) {
          const lt = oe.replace(/^side\./, "");
          return Ms({
            area: 0,
            length: lt === "l1" || lt === "l2" ? we : $e,
            target: `side.${lt}`,
            isFace: 0,
            partL: we,
            partW: $e,
            partT: be,
            partQuantity: xt,
            ...Lt,
            ...gt
          }, Ue);
        }
      }
      return null;
    }, Ne = (oe) => {
      const Ae = ve(oe);
      return typeof Ae == "number" && Number.isFinite(Ae);
    }, ee = (oe) => i.formatPrice ? i.formatPrice(oe) : oe.toFixed(2), ge = (oe) => {
      const Ae = _(oe);
      return typeof Ae == "number" && Number.isFinite(Ae) ? Ae : void 0;
    }, Fe = (oe) => {
      if (!Wn(i.extraType).includes(oe)) return;
      const Ue = Number(i.shape?.l), we = Number(i.shape?.w), $e = Tn(oe);
      if ($e === "side") {
        const be = oe.replace(/^side\./, "");
        return be === "l1" || be === "l2" ? Number.isFinite(Ue) && Ue > 0 ? Ue / 1e3 : void 0 : (be === "w1" || be === "w2") && Number.isFinite(we) && we > 0 ? we / 1e3 : void 0;
      }
      if ($e === "face" && Number.isFinite(Ue) && Number.isFinite(we) && Ue > 0 && we > 0)
        return Ue * we / 1e6;
    }, ct = (oe) => Wn(i.extraType).includes(oe) && Tn(oe) === "face" ? "m²" : "m", an = F(() => (oe) => i.shape.issues?.some((Ae) => Ae.category?.includes("extras") && Ae.field?.some((Ue) => Ue[0] === "extras" && Ue[1] === i.extraType && Ue[2] === oe)) ?? !1);
    return bn(() => {
      const Ae = i.shape.extras?.[i.extraType];
      if (!Ae || typeof Ae != "object") {
        We.value = !0, console.error(`Missing or invalid ${i.extraType} in shape`);
        return;
      }
      if (p.value && !("faces" in Ae)) {
        We.value = !0, console.error(`Missing faces property in ${i.extraType}`);
        return;
      }
      if (b.value && !("sides" in Ae)) {
        We.value = !0, console.error(`Missing sides property in ${i.extraType}`);
        return;
      }
    }), (oe, Ae) => {
      const Ue = Dn("FontAwesomeIcon");
      return We.value ? ne("", !0) : (O(), D("div", {
        key: 0,
        class: nt(["extras group", [e.extraType]]),
        style: Jt({ "grid-column-end": "span " + e.partColumns })
      }, [
        e.allowCustomNames ? (O(), D("div", gd, [
          H("div", md, [
            ot(Ga, {
              id: `${e.extraType}-custom-input-${e.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: L(Q),
              placeholder: `Add ${e.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": Ae[0] || (Ae[0] = (we) => Q.value = we || ""),
              onKeydown: wo(L(K), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            H("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !L($),
              onClick: Ae[1] || (Ae[1] = //@ts-ignore
              (...we) => L(K) && L(K)(...we))
            }, " Add ", 8, hd)
          ]),
          ot(Xu, {
            "menu-items": L(S),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: L(q),
            onAction: L(ie)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : ne("", !0),
        l.value ? (O(), Ee(L(t), {
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
        }, null, 8, ["shape", "shape-index", "catalogue-key", "extra-name", "locations", "price-per-length", "pricing", "price-label", "format-price", "max-gap", "debug"])) : (O(), D("div", {
          key: 2,
          class: nt(["inputs extras-grid grid-layout", { "has-pricing": e.enablePricing }])
        }, [
          (O(!0), D(Ct, null, Kt(L(fe), (we) => (O(), D(Ct, { key: we }, [
            L(le)(we) ? (O(), D("div", vd, [
              H("div", bd, [
                H("label", {
                  class: nt(["extras-location-label", {
                    "group-label": ke.value(we),
                    "face-label": Le.value(we),
                    "side-label": pt.value(we),
                    "has-validation-issue": an.value(we)
                  }])
                }, me(L(E)(we)), 3),
                (O(!0), D(Ct, null, Kt(e.allOptions, ($e, be) => (O(), Ee(ba, fn({
                  key: `${we}-${be}`,
                  id: L(re)(we, be),
                  "data-field": `${e.extraType}-${we}`,
                  "data-index": e.shapeIndex,
                  "data-option-index": be
                }, { ref_for: !0 }, L(M)(we, be), {
                  "onUpdate:value": (xt) => L(v)(we, be, xt)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"]))), 128)),
                L(Je)(we).show ? (O(), D("button", {
                  key: 0,
                  type: "button",
                  class: "c-btn c-btn--delete",
                  disabled: !L(Je)(we).enabled,
                  title: L(Je)(we).ariaLabel,
                  onClick: ($e) => L(T)(we)
                }, [
                  ot(Ue, { icon: ["fass", "trash"] })
                ], 8, yd)) : ne("", !0)
              ]),
              e.enablePricing ? (O(), D("div", kd, [
                Ne(we) ? (O(), D("span", wd, [
                  _t(me(ee(ve(we))), 1),
                  e.priceLabel ? (O(), D("span", Sd, me(e.priceLabel), 1)) : ne("", !0)
                ])) : V(we) ? (O(), Ee(sc, {
                  key: 1,
                  "price-per-unit": ge(we),
                  quantity: Fe(we),
                  "quantity-unit": ct(we),
                  "price-label": e.priceLabel,
                  "format-price": i.formatPrice
                }, null, 8, ["price-per-unit", "quantity", "quantity-unit", "price-label", "format-price"])) : ne("", !0)
              ])) : ne("", !0)
            ])) : ne("", !0)
          ], 64))), 128))
        ], 2)),
        i.debug || a ? (O(), Ee(gl, {
          key: 3,
          title: `${e.extraType} debug`,
          data: [{
            extraType: e.extraType,
            mode: L(r),
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
        }, null, 8, ["title", "data", "paths"])) : ne("", !0)
      ], 6));
    };
  }
}), Ei = /* @__PURE__ */ Qt(xd, [["__scopeId", "data-v-039eb7ee"]]);
function Mt(e) {
  return typeof e == "string" && e.trim().length > 0 ? e.trim() : "";
}
function Pd(e) {
  const t = (Array.isArray(e.availableThicknesses) && e.availableThicknesses.length > 0 ? e.availableThicknesses : Array.isArray(e.t) ? e.t : e.t != null ? [e.t] : []).map((a) => typeof a == "number" ? a : Number(a)).filter((a) => Number.isFinite(a));
  return [...new Set(t)].sort((a, i) => a - i);
}
function ml(e, n, t, a, i) {
  const l = [], p = (!!i && !!e && e.toUpperCase() === i.toUpperCase() ? "" : e) || (n && !!i ? "" : a);
  if (n && l.push(n), p && (!n || !n.toLowerCase().includes(p.toLowerCase())) && l.push(p), t) {
    const b = t.toLowerCase(), I = b.split(/\s+/)[0] ?? "", E = `${n} ${p}`.toLowerCase();
    !(E.includes(b) || I && E.split(/\s+/).includes(I)) && (p || n) && l.push(t);
  }
  return l;
}
function Od(e, n, t, a, i, l, u, r) {
  const f = [];
  n && f.push(n);
  const p = ml(e, t, a, i, l);
  for (const b of p)
    (!n || !n.toLowerCase().includes(b.toLowerCase())) && f.push(b);
  return f.length > 0 ? f.join(" ") : u || r;
}
function Id(e, n, t, a, i, l, u) {
  const r = ml(e, n, t, a, i);
  return r.length > 0 ? r.join(" ") : l || u;
}
function Jn(e, n = {}) {
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
  let I;
  b && u ? I = `${b} → ${u}` : b ? I = b : u && (I = u);
  let E;
  a ? E = a : f ? E = f : u && !l && !i ? E = u : l && !u ? E = l : i && !u && !l ? E = i : E = t;
  const h = f && f !== E ? f : void 0, M = Od(
    a,
    i,
    u,
    r,
    l,
    f,
    p,
    t
  ), J = Id(
    a,
    u,
    r,
    l,
    f,
    p,
    t
  ), ue = `${i.toUpperCase()}|${u.toUpperCase()}|${(a || l).toUpperCase()}`, _ = Mt(e.shortDescription) || Mt(e.description) || void 0, j = Mt(e.imageUrl) || void 0;
  return {
    hierarchy: I,
    name: E,
    code: h,
    fullLabel: M,
    productLabel: J,
    groupKey: ue,
    brand: i || void 0,
    material: l || void 0,
    variant: u || void 0,
    finish: r || void 0,
    description: _,
    imageUrl: j,
    thicknesses: Pd(e)
  };
}
const Cd = "stockExtras";
function Ng(e, n) {
  !n || typeof n != "object" || (e.resolvedExtras = n);
}
function Ja(e) {
  const n = e?.resolvedExtras;
  if (n && typeof n == "object") return n;
  const t = e?.customData?.[Cd];
  if (t && typeof t == "object") return t;
}
function hl(e, n) {
  return Ja(e)?.[n];
}
function Ld(e) {
  const n = Ja(e);
  if (!n) return !1;
  for (const t of ["banding", "finish", "planing", "machining"])
    if (n[t]) return !0;
  return !1;
}
function Fd(e) {
  const t = hl(e, "banding")?.sourceCatalogueKey;
  return typeof t == "string" && t ? t : null;
}
function Ed(e, n) {
  if (n !== "banding") return !1;
  const t = e?.sourceCatalogueKey;
  return typeof t == "string" && t.length > 0;
}
let Vt = null;
function Ad(e, n) {
  return Vt = Nd(e, n), Vt;
}
function $d(e) {
  if (!Vt) throw new Error("Pagination not initialized");
  return {
    items: F(() => Vt.getItems(e)),
    currentPage: F(() => Vt.getCurrentPage(e)),
    currentIndex: F(() => Vt.getCurrentIndex(e)),
    totalPages: F(() => Vt.paginatedArrays.value.get(e)?.totalPages || 0),
    itemsPerPage: F(() => Vt.getItemsPerPage(e)),
    resetPagination: () => Vt.resetPagination(e),
    nextPage: () => Vt.nextPage(e),
    previousPage: () => Vt.previousPage(e),
    goToPage: (n) => Vt.goToPage(e, n),
    setItemsPerPage: (n) => Vt.setItemsPerPage(e, n)
  };
}
function Tg(e, n) {
  const t = $d(e);
  return t.setItemsPerPage(n), t;
}
function Nd(e, n) {
  const t = /* @__PURE__ */ new Map(), a = G({}), i = (v, T) => {
    if ("value" in T) {
      const Q = n[v]?.alwaysInclude;
      st(
        () => {
          const $ = T.value;
          return Q ? $.filter((q) => !Q(q)).length : $.length;
        },
        ($, q) => {
          const S = a.value[v];
          if (!S) return;
          const K = Math.ceil($ / S.itemsPerPage);
          if ($ > q) {
            const ie = Math.ceil($ / S.itemsPerPage), fe = S.currentPage * S.itemsPerPage;
            $ > fe && S.currentPage < ie && (S.currentPage = ie);
          } else $ < q && S.currentPage > K && (S.currentPage = Math.max(1, K));
        },
        { immediate: !1 }
      );
    }
  };
  Object.entries(e).forEach(([v, T]) => {
    const Q = n[v];
    if (!Q)
      throw new Error(`Missing pagination options for array: ${v}`);
    t.set(v, T), a.value[v] = {
      currentPage: Q.initialPage || 1,
      itemsPerPage: Q.itemsPerPage
    }, i(v, T);
  });
  const l = (v, T) => {
    const Q = a.value[v];
    if (!Q) return;
    const $ = u(v);
    Q.currentPage = Math.max(1, Math.min(T, $));
  }, u = (v) => {
    const T = t.get(v);
    if (!T) return 0;
    const Q = L(T), $ = a.value[v];
    if (!$) return 0;
    const q = n[v], S = q?.alwaysInclude ? Q.filter((K) => !q.alwaysInclude(K)) : Q;
    return Math.max(1, Math.ceil(S.length / $.itemsPerPage));
  }, r = F(() => {
    const v = /* @__PURE__ */ new Map();
    return t.forEach((T, Q) => {
      const $ = L(T), q = Array.isArray($) ? $ : [], S = a.value[Q], K = n[Q], ie = K?.alwaysInclude ? q.filter(K.alwaysInclude) : [], fe = K?.alwaysInclude ? q.filter((Le) => !K.alwaysInclude(Le)) : q, re = Math.ceil(fe.length / S.itemsPerPage), Je = (S.currentPage - 1) * S.itemsPerPage, We = Je + S.itemsPerPage, ke = [
        ...ie,
        ...fe.slice(Je, We)
      ];
      v.set(Q, {
        items: ke,
        currentPage: S.currentPage,
        totalPages: re,
        isLastPage: S.currentPage >= re,
        hasNextPage: S.currentPage < re,
        hasPreviousPage: S.currentPage > 1
      });
    }), v;
  });
  return {
    paginatedArrays: r,
    addArray: (v, T, Q) => {
      t.set(v, T), a.value[v] = {
        currentPage: Q.initialPage || 1,
        itemsPerPage: Q.itemsPerPage
      }, n[v] = Q, i(v, T);
    },
    removeArray: (v) => {
      t.delete(v);
      const T = { ...a.value };
      delete T[v], a.value = T;
    },
    hasArray: (v) => t.has(v),
    clearArrays: () => {
      t.clear(), a.value = {};
    },
    goToPage: l,
    nextPage: (v) => {
      const T = a.value[v];
      T && l(v, T.currentPage + 1);
    },
    previousPage: (v) => {
      const T = a.value[v];
      T && l(v, T.currentPage - 1);
    },
    resetPagination: (v) => {
      if (v) {
        const T = a.value[v];
        T && (T.currentPage = 1);
      } else
        Object.values(a.value).forEach((T) => {
          T.currentPage = 1;
        });
    },
    getCurrentPage: (v) => a.value[v]?.currentPage || 1,
    getCurrentIndex: (v) => {
      const T = a.value[v];
      return T ? (T.currentPage - 1) * T.itemsPerPage : 0;
    },
    getItemsPerPage: (v) => {
      const T = a.value[v];
      if (!T) throw new Error(`No pagination state found for key: ${v}`);
      return T.itemsPerPage;
    },
    setItemsPerPage: (v, T) => {
      const Q = a.value[v];
      Q && (Q.itemsPerPage = T, l(v, Q.currentPage));
    },
    getStartIndex: (v) => {
      const T = a.value[v];
      return T ? (T.currentPage - 1) * T.itemsPerPage : 0;
    },
    getItems: (v) => r.value.get(v)?.items || []
  };
}
const js = G({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function vl() {
  return {
    progress: js,
    reset: () => {
      js.value = {
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
function Td() {
  const e = G(null), n = G(null), t = G(null), a = Gn([]), i = Gn([]), l = Gn([]), u = Gn([]), r = G([]), f = G(null), p = Gn([]), b = G(null), I = G(null), E = G({});
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
    activeShape: I,
    cuttingPlans: E,
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
      cuttingPlans: E
    }
  };
}
function Md() {
  if (Ba) return Ba;
  const e = Td(), n = F(() => e.activeStockAutoId.value ? fe(e.activeStockAutoId.value) : []), t = F(() => !e.activeStockAutoId.value || !e.stockList.value?.length ? null : ie(e.activeStockAutoId.value)), a = F(() => !t.value || !e.cutList.value?.length ? [] : Je(t.value.autoId)), i = F(() => !t.value || !e.segmentList.value?.length ? [] : re(e.activeStockAutoId.value)), l = F(() => e.stockList.value?.length ? We(e.stockList.value) : []), u = F(() => e.shapeList.value.filter((V) => V.added)), r = F(() => e.shapeList.value?.length ? e.shapeList.value.filter((V) => !V.added) : []), f = F(() => e.shapeList.value?.length ? Uo(e.shapeList.value) : []), p = F(() => e.shapeList.value?.length ? e.shapeList.value.filter((V) => !V.duplicate) : []), b = F(() => p.value.filter((V) => V.added)), I = F(() => e.stockList.value?.length ? e.stockList.value.filter((V) => V.used && !V.duplicate) : []), E = F(() => I.value.filter((V) => V.used)), h = F(() => e.cutList.value?.length ? a.value.reduce((V, Y) => V + Y.area, 0) : 0), M = F(() => !e.stockList.value?.length || !t.value ? 0 : t.value ? t.value.area : 0), J = F(() => !e.shapeList.value?.length || !n.value ? 0 : n.value ? n.value.reduce((V, Y) => V + Y.area, 0) : 0), ue = F(() => !e.cutList.value?.length || !t.value ? null : t.value.cutType), _ = F(() => e.stockList.value?.length ? e.stockList.value.filter((Y) => Y.used && !Y.isStacked) : []), j = F(() => e.stockList.value?.length ? Ro(t.value, e.stockList.value) : 0), pe = F(() => {
    if (!e.stockList.value?.length) return 0;
    let V = M.value ? (h.value + J.value) / M.value : null;
    return V > 1 && (V = 1), V;
  }), le = F(() => e.activeStockAutoId.value && e.cuttingPlans.value?.[e.activeStockAutoId.value] || null), v = () => {
    e.saw.value = null, e.shapeList.value.length = 0, e.stockList.value.length = 0, e.cutList.value.length = 0, e.segmentList.value.length = 0, e.offcuts.value.length = 0, e.unusableShapes.value.length = 0, e.currentCutIndex.value = null;
  }, T = () => {
    e.saw.value = null, e.activeStockAutoId.value = null, e.activeShape.value = null, e.metadata.value = null, e.shapeList.value = [], e.stockList.value = [], e.cutList.value = [], e.segmentList.value = [], e.offcuts.value = [], e.currentCutIndex.value = null, e.unusableShapes.value = [], e.cuttingPlans.value = {};
  }, Q = (V, Y) => {
    V in this && this[V]?.sort(Bo[Y]);
  }, $ = (V) => {
    At(V);
  }, q = () => {
    At(e.shapeList);
  }, S = () => {
    At(e.stockList);
  }, K = (V) => {
    if (!V?.shapeList?.some((Y) => Y.added)) {
      T();
      return;
    }
    e.metadata.value = V.metadata, e.unusableShapes.value = V.unusableShapes || [];
    try {
      V?.saw && (e.saw.value = new Ti(V.saw));
      const Y = jo(V, {
        preventAutoRotation: !0
      });
      e.stockList.value = Y.stockList, e.shapeList.value = Y.shapeList, e.cutList.value = Y.cutList, e.segmentList.value = Y.segmentList, e.offcuts.value = Y.offcuts, e.cuttingPlans.value = V.cuttingPlans || {}, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((Ne) => At(e[Ne])), e.activeStockAutoId.value = We(e.stockList.value)?.[0]?.autoId || null;
    } catch (Y) {
      console.error("Error updating from result", Y);
    }
  }, ie = (V) => e.stockList.value?.length ? e.stockList.value.find((Y) => Y.autoId === V) : null, fe = (V) => e.shapeList.value?.length ? e.shapeList.value.filter((Y) => Y.added && Y?.stock?.autoId === V) : [], re = (V) => e.segmentList.value?.length ? e.segmentList.value.filter((ve) => ve?.stock?.autoId === V) : [], Je = (V) => {
    const Y = e?.cutList?.value;
    return !Y && !Y.length ? [] : Y.filter((ve) => ve?.stock?.autoId === V).sort((ve, Ne) => ve?.guillotineState?.order - Ne?.guillotineState?.order);
  }, We = (V) => V?.length ? V.filter((Y) => Y.used === !0) : [], ke = (V) => {
    e.activeStockAutoId.value !== V && (e.activeShape.value = null, e.activeStockAutoId.value = V);
  }, Le = (V) => V.id.endsWith(".0") ? V.autoId : e.shapeList.value.find((ve) => ve.parentId === V.parentId && ve.id.endsWith(".0"))?.autoId || V.autoId, pt = () => {
    e.saw.value = new Ti({
      bladeWidth: 3,
      stockType: "sheet",
      cutType: "beam",
      cutPreference: "l"
    });
    const V = new qo({
      autoId: "1.0",
      l: 2440,
      w: 1220,
      t: 18,
      q: 1,
      used: !0
    }), Y = new Ss({
      l: 500,
      w: 500,
      t: 18,
      q: 1,
      x: 0,
      y: 0,
      added: !0,
      id: "1.0"
    });
    Y.addToStock(V);
    const ve = new Ss({
      l: 400,
      w: 400,
      t: 18,
      q: 1,
      x: 500,
      y: 0,
      added: !0,
      id: "2.0"
    });
    ve.addToStock(V);
    const Ne = (Fe) => ({
      ptxData: {
        function: 1,
        order: Fe,
        isDummy: !1,
        isFirst: Fe === 0,
        isLast: !1,
        technologyTable: "01"
      }
    }), ee = [
      new Ma({ x: 0, y: 0, l: 500, vertical: !0, stock: V, ...Ne(0) }),
      new Ma({ x: 500, y: 0, l: 500, vertical: !1, stock: V, ...Ne(1) }),
      new Ma({ x: 500, y: 500, l: 400, vertical: !0, stock: V, ...Ne(2) }),
      new Ma({ x: 900, y: 500, l: 400, vertical: !1, stock: V, ...Ne(3) })
    ], ge = new _o({
      l: 1500,
      w: 720,
      t: 18,
      x: 940,
      y: 0
    });
    try {
      ge.addToStock?.(V);
    } catch {
    }
    e.stockList.value = [V], e.shapeList.value = [Y, ve], e.cutList.value = ee, e.offcuts.value = [ge], e.activeStockAutoId.value = V.autoId;
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
    uniqueStock: I,
    uniqueUsedStock: E,
    activeStock: t,
    activeCuts: a,
    activeCutsArea: h,
    activeCutType: ue,
    usedStock: l,
    stackedStock: _,
    activeStockArea: M,
    activeShapeArea: J,
    activeStockStackCount: j,
    activeTotalArea: pe,
    activeSegments: i,
    cuttingPlan: le,
    // methods
    reset: v,
    clear: T,
    createTestData: pt,
    sortItems: Q,
    update: $,
    updateShapes: q,
    updateStock: S,
    updateFromResult: K,
    getStock: ie,
    getShapes: fe,
    getSegments: re,
    getCuts: Je,
    setActiveStockAutoId: ke,
    getInputAutoId: Le
  }, Ba;
}
const Vd = xr(() => St({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: rn(
    rt().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: rn(
    je().optional(),
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
  t: rn(
    Pr([Ln(), je()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: xs({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: xs({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: rn(
    Ln().int().positive().default(1),
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
  name: Go({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: rn(
    al(["n", "l", "w"]).default("n").optional(),
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
  banding: rn(
    rt().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: rn(
    St({
      enabled: rt().default(!1),
      type: je().optional(),
      sides: Ln().optional()
    }).optional(),
    {
      label: "fields.finish",
      propertyPath: "finish",
      group: "extras",
      order: 2
    }
  ),
  // Machining options
  machining: rn(
    St({
      enabled: rt().default(!1),
      operations: ft(ht()).optional()
    }).optional(),
    {
      label: "fields.machining",
      propertyPath: "machining",
      group: "extras",
      order: 3
    }
  ),
  // Planing button
  planing: rn(
    rt().default(!1),
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
function Dd(e) {
  const n = Vd._def.getter();
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
class jd {
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
    if (t instanceof Fs) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof Da)
          return this.isIntegerNumber(i) ? "integer" : "number";
    }
    return t instanceof Da ? this.isIntegerNumber(t) ? "integer" : "number" : t instanceof Or ? "string" : t instanceof Ir ? "boolean" : t instanceof Es || t._def?.typeName === "ZodNativeEnum" ? "enum" : t instanceof Cr ? "array" : t instanceof ja ? "object" : "string";
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
    if (t instanceof Fs) {
      const a = t._def?.options || [];
      for (const i of a)
        if (i instanceof Da) {
          this.extractNumberConstraints(n, i), n.type = "number";
          break;
        }
    } else t instanceof Da && this.extractNumberConstraints(n, t);
    if (!n.options) {
      if (t instanceof Es) {
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
const Bs = new jd();
function Bd(e, n = {}) {
  const t = G([]), a = G([]), i = G(/* @__PURE__ */ new Map()), l = G(/* @__PURE__ */ new Map()), u = (h) => {
    let M = Bs.generateFields(e);
    n.overrides && (M = M.map((ue) => {
      const _ = n.overrides[ue.name];
      if (_) {
        const j = { ...ue, ..._ };
        return _.min === void 0 && ue.min !== void 0 && (j.min = ue.min), _.max === void 0 && ue.max !== void 0 && (j.max = ue.max), j;
      }
      return ue;
    })), l.value.clear();
    for (const ue of M)
      l.value.set(ue.name, ue);
    const J = h || n.allowedFieldIds;
    if (J && J.length > 0) {
      const ue = J, _ = /* @__PURE__ */ new Map();
      for (const pe of M)
        _.set(pe.name, pe);
      const j = [];
      for (const pe of ue) {
        const le = _.get(pe);
        le && j.push(le);
      }
      M = j;
    }
    n.filter && (M = M.filter(n.filter)), t.value = M, i.value.clear();
    for (const ue of M)
      i.value.set(ue.name, ue);
    n.grouped && (a.value = Bs.groupFields(M));
  };
  u();
  const r = (h) => i.value.get(h), f = (h) => l.value.get(h), p = () => l.value, b = (h, M) => {
    const J = i.value.get(h);
    J && Object.assign(J, M);
  }, I = (h) => {
    const M = r(h);
    return !(!M || M.hidden);
  }, E = (h) => {
    const M = r(h);
    if (!M) return {};
    const J = {};
    return M.required && (J.required = !0), M.type === "number" && (M.min !== void 0 && (J.min = M.min), M.max !== void 0 && (J.max = M.max)), J;
  };
  return {
    fields: F(() => t.value),
    groups: F(() => a.value),
    fieldMap: F(() => i.value),
    allFieldsMap: F(() => l.value),
    getField: r,
    getFieldMetadata: f,
    getAllFieldMetadata: p,
    updateField: b,
    isFieldVisible: I,
    getFieldValidation: E,
    regenerateFields: u
  };
}
function qd(e) {
  const { stockType: n, materials: t = [], minDimension: a = 0 } = e, i = Dd(n), l = {
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
  }), Bd(i, {
    ...e,
    overrides: { ...l, ...e.overrides }
  });
}
const { progress: un, reset: qs } = vl();
function _d(e) {
  const n = "https://api.cutlistevo.com/";
  let t;
  const a = () => {
    t = Lr(n, {
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
      un.value.complete = !0, e.callbacks?.onResult?.(u), t.disconnect();
    }), t.on("queued", () => {
      qs(), un.value.queued = !0;
    }), t.on("started", () => {
      un.value.started = !0;
    }), t.on("progress", (u) => {
      u?.data?.message === "result" ? un.value.resultCount++ : (un.value.stockCount = u.data.stockCount, un.value.shapeCount = u.data.shapeCount), u?.data?.phase && (un.value.phase = u.data.phase), u?.data?.placed !== void 0 && (un.value.placed = u.data.placed, un.value.total = u.data.total);
    }), t.on("user", (u) => {
      e.callbacks?.onUser?.(u);
    }), t.on("error", (u) => {
      e.refs?.thinking && (e.refs.thinking.value = !1), qs(), e.callbacks?.onError?.(u);
    });
  }, i = () => t?.disconnect(), l = () => t?.connect();
  return a(), {
    socket: t,
    connect: l,
    disconnect: i
  };
}
const vn = te({
  min: R().min(0).optional(),
  max: R().min(0).optional()
}).optional(), Rd = te({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: y().min(1),
  // Dimension constraints for this location
  longSide: vn,
  shortSide: vn,
  t: vn,
  // Formula-based validation
  formula: y().optional(),
  // Custom message for this location
  message: y().optional()
}), Ai = te({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: vn,
  shortSide: vn,
  t: vn,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: y().optional(),
  // Custom validation message (optional)
  message: y().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: ye(Rd).optional()
}), Ud = te({
  banding: Ai.optional(),
  finish: Ai.optional(),
  planing: Ai.optional()
}).optional();
function Gd(e, n) {
  try {
    const t = new ei({}), a = t.parse(e);
    return !!t.evaluate(a, {
      longSide: n.longSide || 0,
      shortSide: n.shortSide || 0,
      t: n.t || 0
    });
  } catch (t) {
    return console.warn("Formula evaluation error:", t, "Formula:", e), !0;
  }
}
function zd(e, n, t) {
  const a = e.dimension === "t" ? "thickness" : e.dimension === "longSide" ? "long side" : "short side", i = e.constraint === "min" ? "minimum" : "maximum";
  return `${e.location ? `${e.location}: ` : ""}${n.charAt(0).toUpperCase() + n.slice(1)} requires ${a} ${i} of ${e.limit} (current: ${e.value})`;
}
function Wd(e, n, t) {
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
function Kd(e, n, t, a) {
  const { rule: i, message: l, source: u } = Wd(n, t, a), r = [], f = (b, I, E) => {
    I == null || E === void 0 || (E.min !== void 0 && I < E.min && r.push({
      valid: !1,
      dimension: b,
      value: I,
      constraint: "min",
      limit: E.min,
      location: t
    }), E.max !== void 0 && I > E.max && r.push({
      valid: !1,
      dimension: b,
      value: I,
      constraint: "max",
      limit: E.max,
      location: t
    }));
  };
  f("longSide", e.longSide, i.longSide), f("shortSide", e.shortSide, i.shortSide);
  const p = typeof e.t == "string" ? parseFloat(e.t) : e.t;
  return isNaN(p) || f("t", p, i.t), i.formula && (Gd(i.formula, {
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
St({
  // Context - using z.any() for complex external types
  job: ht().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: je().nullable().default(null).describe("Socket.io connection ID"),
  user: ht().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: ht().describe("Configuration object"),
  // Type: Config
  api: rt().nullable().default(null).describe("API mode flag"),
  app: rt().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: Ko("Saw").describe("Saw configuration"),
  stockList: Sn("Stock").default([]).describe("List of stock materials"),
  shapeList: bi(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: Sn("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: Sn("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Sn("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: bi(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: bi(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Wo,
  // Results storage
  cutList: Sn("Cut").default([]).describe("List of cuts to make"),
  segmentList: Sn("Segment").default([]).describe("List of segments"),
  offcuts: Sn("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Sn("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: rt().default(!1).describe("Use inventory system"),
  successMetric: je().default(Ho.successMetric).describe("Metric for optimization success"),
  enableEvo: rt().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Kn(je(), ht()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: ht().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: ht().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: St({
    placement: Ln().default(0),
    group: Ln().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: rt().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: rt().default(!1).describe("Run guillotine second pass"),
  runningEvo: rt().default(!1).describe("Currently running evolution"),
  evolutionVisData: ft(Kn(je(), Fr())).default([]).describe("Evolution visualization data"),
  final: rt().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: rt().default(!1).describe("Has minimum spacing requirement")
});
const Hd = al(["decimal", "fraction"]), Zd = St({
  job: ht().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Extend with autoId/entityType so they survive Zod validation for worker reconstruction
  inputSaw: Hn.extend({ autoId: je().optional(), __entityType: je().optional() }),
  inputShapes: ft(Zn.extend({ autoId: je().optional(), __entityType: je().optional() })),
  inputStock: ft(Vn.extend({ autoId: je().optional(), __entityType: je().optional() })),
  inputUserGroups: ft(zo.extend({ autoId: je().optional(), __entityType: je().optional() })).optional(),
  // Number format for conversion
  numberFormat: Hd.optional(),
  // Algorithm configuration
  enableEvo: rt().default(!0),
  weighting: ht().optional(),
  successMetric: je().optional(),
  useInventory: rt().default(!1),
  // Context
  socketId: je().optional(),
  user: ht().optional(),
  // IUser type
  // Application flags
  widget: rt().optional(),
  api: rt().optional(),
  app: rt().optional(),
  domain: je().optional(),
  // Extras options (centralized configuration)
  extrasOptions: St({
    banding: St({
      options: St({
        sides: Kn(je(), ft(je())).optional()
      }).optional()
    }).optional(),
    finish: St({
      options: St({
        faces: Kn(je(), ft(je())).optional()
      }).optional()
    }).optional(),
    planing: St({
      options: St({
        sides: Kn(je(), ft(je())).optional(),
        faces: Kn(je(), ft(je())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: ht().optional(),
  v: Ln().optional(),
  // API version
  webhook: je().optional(),
  //source
  sourceVersion: je().nullish(),
  source: je().optional()
});
St({
  job: ht().optional(),
  // Type: Job from BullMQ
  saw: ht(),
  // Runtime Saw instance
  shapeList: ft(ht()),
  // Runtime Shape instances
  stockList: ft(ht()),
  // Runtime Stock instances
  userGroups: ft(ht()).optional(),
  // Runtime Group instances
  enableEvo: rt(),
  weighting: ht().optional(),
  successMetric: je().optional(),
  useInventory: rt(),
  socketId: je().optional(),
  user: ht().optional(),
  widget: rt().optional(),
  api: rt().optional(),
  app: rt().optional(),
  domain: je().optional(),
  config: ht().optional(),
  v: Ln().optional(),
  webhook: je().optional()
});
const { addNotice: Un } = zi();
let $i = null;
function Jd() {
  return $i || ($i = ul()), $i;
}
function _s(e) {
  return e.filter((n) => n?.l || n?.w);
}
async function Qd(e) {
  const n = e.t, t = [];
  try {
    const { inputs: a, validateInputShapes: i, validateInputStock: l } = Jd(), u = e.inputShapes ?? a.inputShapes.value, r = e.inputStock ?? a.inputStock.value, f = e.inputUserGroups ?? a.inputUserGroups?.value ?? [], p = _s(u), b = _s(r);
    if (p.forEach((_) => _.isNew = !1), b.forEach((_) => _.isNew = !1), !e.isAdmin && !e.shared && e.maxShapes !== 1 / 0) {
      const _ = p.reduce((pe, le) => pe + (le.q || 1), 0), j = b.reduce((pe, le) => pe + (le.q || 1), 0);
      if (_ > e.maxShapes || j > e.maxStock)
        return Un({
          type: "error",
          message: n("errors.validation.above_max_parts")
        }), e.onLimit?.(), { valid: !1, issues: t };
    }
    if (!p.length)
      return Un({
        type: "error",
        message: n("errors.validation.no_parts_list")
      }), { valid: !1, issues: t };
    if (!e.useInventory && !b.length)
      return Un({
        type: "error",
        message: n("errors.validation.no_stock")
      }), { valid: !1, issues: t };
    let I;
    if (e.useInventory && e.selectedSaw)
      I = e.selectedSaw;
    else if (e.inputSaw instanceof cn) {
      const _ = e.inputSaw.validate();
      t.push(..._), I = e.inputSaw.toData();
    } else {
      I = e.inputSaw;
      const _ = new Ti(I);
      t.push(..._.issues);
    }
    const E = I?.cutType;
    if (E === "nesting") {
      const _ = p.filter(
        (j) => !Array.isArray(j.outline) || j.outline.length < 3
      );
      if (_.length)
        for (const j of _)
          t.push(new qt({
            item: j,
            category: ["part"],
            message: "Nesting mode requires a polygon outline — import this part via DXF or switch to Rectangular mode.",
            shouldTranslate: !1
          }));
    } else if (E) {
      const _ = p.filter(
        (j) => Array.isArray(j.outline) && j.outline.length >= 3
      );
      if (_.length)
        for (const j of _)
          t.push(new qt({
            item: j,
            category: ["part"],
            message: "This part has a polygon outline and can only be used in Nesting mode — switch mode or remove the outlined parts.",
            shouldTranslate: !1
          }));
    }
    const h = i({
      saw: I,
      partTrim: he({ v: e.partTrim }),
      useInventory: e.useInventory,
      inputShapesOverride: p
    });
    if (t.push(...h), e.useInventory) {
      if (e.materialStore)
        for (const _ of p)
          _.material || t.push(new qt({
            item: _,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const _ = l(I);
      t.push(..._);
    }
    if (f.length > 0) {
      f.forEach((j) => j.populateParentID(p));
      const _ = Zo(f, p);
      t.push(..._);
    }
    await Xd(p, e, t);
    const M = Mi(t);
    if (M.length > 0) {
      const _ = {
        saw: M.filter((j) => j.category?.includes("saw")),
        stock: M.filter((j) => j.category?.includes("stock")),
        part: M.filter((j) => j.category?.includes("part") && !j.category?.includes("extras")),
        extras: M.filter((j) => j.category?.includes("extras")),
        group: M.filter((j) => j.category?.includes("group"))
      };
      for (const [j, pe] of Object.entries(_))
        if (pe.length > 0) {
          Un({
            type: "error",
            message: n("errors.validation.inputs_issue", { 0: j }),
            additional: pe.map((le) => n(le.message))
          });
          break;
        }
      return { valid: !1, issues: t };
    }
    const J = {
      inputSaw: I,
      inputShapes: p.map((_) => _.toData()),
      inputStock: b.map((_) => _.toData()),
      inputGroups: f.map((_) => _.toData()),
      enableEvo: !0,
      useInventory: e.useInventory || !1
    }, ue = Zd.safeParse(J);
    return ue.success ? {
      valid: !0,
      issues: t,
      sawData: I
    } : (console.error("[Validation] Zod validation failed:", ue.error.issues), Un({
      type: "error",
      message: n("errors.validation.invalid_data_structure"),
      additional: ue.error.issues.map((_) => `${_.path.join(".")}: ${_.message}`)
    }), { valid: !1, issues: t });
  } catch (a) {
    return console.error("[Validation] error:", a), Un({
      type: "error",
      message: n("errors.general.unexpected"),
      additional: [a?.message ?? ""]
    }), { valid: !1, issues: t };
  }
}
function Yd(e, n) {
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
async function Xd(e, n, t) {
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
      if (n.extrasValidationRules && Jo.hasExtras(i, l)) {
        const b = n.extrasValidationRules?.[l], I = n.extrasLocationGroups?.[l], E = b?.locations && b.locations.length > 0, h = I?.some((M) => M.rules);
        if (E || h) {
          const M = Yd(i, l), J = (I || []).map((j) => ({
            id: j.id,
            locations: j.locations,
            rules: j.rules
          })), ue = b || {}, _ = /* @__PURE__ */ new Set();
          for (const j of M) {
            const pe = Kd(
              i,
              ue,
              j,
              J
            );
            if (!pe.valid) {
              if (pe.source === "group") {
                const le = J.find(
                  (v) => v.rules && v.locations.includes(j)
                );
                if (le && _.has(le.id))
                  continue;
                le && _.add(le.id);
              }
              if (pe.message) {
                const le = new qt({
                  item: i,
                  category: ["part", "extras"],
                  message: pe.message,
                  field: [["extras", l, j]],
                  shouldTranslate: !1
                });
                t.push(le);
              } else
                pe.violations.forEach((le) => {
                  const v = zd(le, l), T = new qt({
                    item: i,
                    category: ["part", "extras"],
                    message: v,
                    field: [["extras", l, j]],
                    shouldTranslate: !1
                  });
                  t.push(T);
                });
            }
          }
        } else {
          const M = Qo(i, l, n.extrasValidationRules);
          M.valid || M.violations.forEach((J) => {
            const ue = Yo(l, J, M.message);
            t.push(new qt({
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
      const f = Xo(i, l, r, n.findExtrasPrice);
      f.valid || f.incompleteLocations.forEach((p) => {
        t.push(new qt({
          item: i,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${l}`,
            // Translation key for extra type (banding, finish, planing)
            location: er(p, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", l, p]]
        }));
      });
    }
}
const ef = new ei({});
function tf(e) {
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
function nf(e, n) {
  const t = [], a = e.filter((i) => i.enabled !== !1);
  for (let i = 0; i < n.length; i++) {
    const l = n[i], u = tf(l);
    for (const r of a)
      try {
        ef.evaluateExpression(r.formula, u) || t.push({
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
const af = te({
  longSide: vn,
  shortSide: vn,
  t: vn,
  formula: y().optional(),
  message: y().optional()
}).optional(), za = te({
  // Unique identifier for this group (used internally)
  id: y().min(1),
  // Display label for the group (shown in UI)
  label: y().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ye(y().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: R().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: Ce().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: af
}), sf = te({
  banding: ye(za).optional(),
  finish: ye(za).optional(),
  planing: ye(za).optional()
}).optional(), lf = yn(["decimal", "fraction"]), of = yn(["metric", "imperial"]), rf = yn(nr), Rs = ut([
  hn(0),
  hn(1),
  hn(2)
]).catch(0), uf = te({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: y().optional(),
  partB: y().optional(),
  partSelected: y().optional(),
  stock: y().optional(),
  text: y().optional(),
  // Checkout-specific colors
  button: y(),
  buttonText: y()
}), kt = (e) => ya((n) => n ?? e, Ce()), cf = te({
  banding: kt(!1),
  finish: kt(!1),
  planing: kt(!1),
  orientation: kt(!0),
  diagram: kt(!0),
  focus: kt(!0),
  machining: kt(!1),
  csvImport: kt(!1),
  csvTemplate: kt(!1),
  groups: kt(!1),
  click: kt(!0),
  partName: kt(!0),
  progressNumber: kt(!0),
  pagination: kt(!1),
  fullStock: kt(!1),
  imageUpload: kt(!1),
  diagramNav: kt(!1),
  debug: kt(!1)
}), df = te({
  // Localization
  locale: y().default("en-US"),
  currency: y().default("USD"),
  apiVersion: R().min(2).default(3),
  // Unit system (metric or imperial)
  unitSystem: of.default("metric"),
  // Number formatting
  numberFormat: lf.default("decimal"),
  decimalPlaces: R().min(0).max(10).default(2),
  fractionRoundTo: R().default(0),
  // Stock configuration
  stockSelection: rf.optional(),
  stockGrain: tr.optional(),
  // Part configuration
  minSpacing: el.optional(),
  maxParts: R().min(0).default(0),
  orientationModel: Rs.default(0),
  resultOrientationModel: Rs.default(0),
  minDimension: R().min(0).default(0),
  partTrim: ya((e) => e ?? void 0, R().min(0).optional()),
  partsPerPage: ya((e) => e ?? void 0, R().min(1).default(10)),
  // UI configuration
  debug: Ce().default(!1),
  enable: cf.default({
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
  colors: uf.default({
    button: "#118ab2",
    buttonText: "#ffffff"
  }),
  // Custom fields
  customFields: ye(et()).optional(),
  fieldOrder: ya((e) => e ?? void 0, ye(y()).optional()),
  // Extras location filtering
  bandingLocations: ye(yi).optional(),
  finishLocations: ye(yi).optional(),
  planingLocations: ye(yi).optional(),
  // Extras location groups
  extrasLocationGroups: sf,
  // Extras validation rules
  extrasValidationRules: Ud
}), ha = te({
  min: R().min(0).nullable().optional(),
  max: R().min(0).nullable().optional()
}).nullable().optional(), ff = te({
  // Master toggle for the feature. Server gates on this; consumers don't need to.
  enabled: Ce().optional(),
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: ha,
  shortSide: ha,
  // Direct dimension constraints (as stored by admin panel)
  l: ha,
  w: ha,
  t: ha,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: te({
    // At least one side must be >= primaryMin
    primaryMin: R().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: R().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: y().nullable().optional(),
  // Custom validation message (optional)
  message: y().nullable().optional()
});
function pf(e, n) {
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
    const { primaryMin: f, secondaryMin: p } = n.crossDimensionalRule, b = e.l || 0, I = e.w || 0;
    if (f != null && p != null) {
      const E = b >= f && I >= p, h = I >= f && b >= p;
      !E && !h && t.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: n.message || `At least one side must be ≥ ${f} mm and the other side must be ≥ ${p} mm`
      });
    }
  }
  return n.formula && (gf(n.formula, {
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
function gf(e, n) {
  try {
    const t = new ei({}), a = t.parse(e);
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
function mf(e) {
  if (e.message)
    return e.message;
  if (e.constraint === "crossDimensional")
    return e.message || "Part dimensions do not meet requirements";
  const n = e.dimension === "longSide" ? "long side" : e.dimension === "shortSide" ? "short side" : e.dimension, t = e.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${n} ${t} of ${e.limit} (current: ${e.value})`;
}
yn([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "full_stock_plus_part_perimeter",
  "roll_length"
]);
const hf = Re(
  y(),
  R().min(0)
).default({}), vf = te({
  banding: y().optional(),
  finish: y().optional(),
  planing: y().optional(),
  machining: y().optional()
}).optional(), bf = te({
  name: y().trim().min(1),
  db_id: y().optional(),
  code: y().optional(),
  brand: y().optional(),
  variant: y().optional(),
  finish: y().optional(),
  displayName: y().optional(),
  imageUrl: y().optional(),
  color: y().optional(),
  colorHex: y().optional(),
  thicknesses: ye(
    ut([
      y().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      R()
    ])
  ).min(1),
  widths: ye(
    ut([
      y().transform((e) => {
        const n = parseFloat(e);
        return isNaN(n) ? e : n;
      }),
      R()
    ])
  ).optional(),
  extras: vf,
  fullSizeOnly: Ce().optional()
}), Ni = te({
  labels: ye(y()).default([]),
  pricing: Re(y(), R().min(0)).default({}),
  options: et().optional(),
  keys: ye(y()).optional(),
  // if not all the default keys should be set
  locations: ye(y()).optional(),
  // available locations for this extras type
  groups: ye(za).optional(),
  // custom location groups
  rules: et().optional(),
  // validation rules for this extras type
  displayNames: Re(y(), y()).optional(),
  // slug key → product name for dropdown display
  maxGap: R().optional(),
  // banding-only: max gap (mm) between part thickness and strip width (catalogue picker)
  defaultPrice: R().optional(),
  // fallback per-metre rate for catalogue-linked banding SKUs not in `pricing`
  // True when the server included any catalogue-linked extra (sourceCatalogueKey set) of this type.
  // Drives the storefront calculator out of legacy-global fallback mode so the org's full catalogue
  // (e.g. ~1,700 Egger SKUs in `pricing`, kept for cart-side lookup) doesn't leak onto materials
  // that never linked it. See `getShapeExtrasConfig` in EcommerceCalculator.vue.
  containsCatalogueLinked: Ce().optional(),
  // Compound-key pricing for group-mode extras, keyed `<extraKey>|<groupId>`.
  // Kept in a sibling field (not merged into `pricing`) so `validateExtrasCompleteness`
  // doesn't see the `|` and mis-derive `maxPricingLevels` — see the EcommerceCalculator
  // `initExtra` comment. Consumed at the cart-total site, not by the widget itself.
  groupPricing: Re(y(), R()).optional(),
  // Per-code pricing formulas. When a formula exists for a code, both the
  // inline per-feature preview AND the cart total evaluate the formula
  // instead of multiplying the flat rate. Fanned out per-code by the
  // server's `buildExtrasConfig` so one Extra → many code entries.
  formulas: Re(y(), y()).optional()
});
te({
  success: Ce(),
  price: R().optional(),
  error: y().optional(),
  cacheHit: Ce().optional()
});
te({
  valid: Ce(),
  errors: ye(y()),
  warnings: ye(y())
});
te({
  pricing: hf,
  labels: ye(y()),
  options: ye(ye(y())),
  // Simplified to string arrays only
  keys: ye(y()),
  maxLevels: R().min(1)
});
te({
  enableCaching: Ce().default(!0),
  enableLogging: Ce().default(!1),
  maxCacheSize: R().min(1).default(1e3)
});
const bl = yn(["select", "multiselect", "range", "boolean", "search"]), yl = yn(["asc", "desc"]), kl = yn(["grid", "list"]), qa = te({
  _id: y(),
  name: y(),
  code: y().optional(),
  labels: ye(y()).optional(),
  pricing: Re(y(), R()).optional(),
  price: R().optional(),
  // Catalogue link — when set, the customer renders a Decor × Type ×
  // Width × Thickness picker against /catalogues/<key>/banding-axes.
  sourceCatalogueKey: y().optional(),
  // Per-axis pricing rules — preserved so per-shape inline price hints
  // can compute against the rule that matches.
  pricingRules: ye(te({
    materials: ye(y()).optional(),
    widths: ye(R()).optional(),
    thicknesses: ye(R()).optional(),
    price: R()
  })).optional()
}), yf = te({
  banding: qa.optional(),
  finish: qa.optional(),
  planing: qa.optional(),
  machining: qa.optional()
}).optional(), kf = te({
  enabled: Ce(),
  price: R(),
  description: y().optional(),
  maxQuantity: R().optional()
}).optional(), wf = te({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  colorHex: ar,
  name: y().optional().describe("User-friendly display name"),
  description: y().optional().describe("Detailed description"),
  code: y().optional().describe("Internal material/product code"),
  // Categorization
  category: y().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: y().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: yf.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: kf.describe("Sample ordering configuration"),
  // External links — supplier-supplied datasheets, asset bundles, 3D viewer
  // URLs etc. surfaced in the customer-side Details dialog. Populated for
  // library-sourced rows from the catalogue entry's `urls` field; absent
  // or empty for shop-owned stock until the editor populates it.
  urls: ye(te({
    label: y(),
    url: y()
  })).optional().describe("Supplier external links (datasheets, asset bundle, …)"),
  // UI metadata
  minQuantity: R().int().positive().nullable().optional().describe("Minimum order quantity")
});
Vn.merge(wf).describe("Stock option with filtering and display metadata");
const Sf = te({
  field: y().describe("Property name to filter on"),
  type: bl,
  label: y().describe("Display label"),
  custom: Ce().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: R().nullable().optional().describe("Minimum value for range filter"),
  max: R().nullable().optional().describe("Maximum value for range filter"),
  step: R().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: ye(te({
    label: y(),
    value: et()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: Ce().default(!0).describe("Whether filter is visible"),
  collapsible: Ce().default(!0).describe("Whether filter panel is collapsible"),
  order: R().int().nullable().optional().describe("Display order")
}), xf = te({
  field: y().describe("Field to sort by"),
  order: yl,
  label: y().optional().describe("Display label for sort option")
}), Zi = te({
  // Filter configuration
  availableFilters: ye(Sf).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ye(y()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: xf.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: kl.default("grid").describe("Default display mode"),
  itemsPerPage: R().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: Ce().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: Ce().default(!0).describe("Allow multiple stock selection"),
  maxSelection: R().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), Pf = te({
  field: y(),
  value: et(),
  type: bl
});
te({
  // Active filters
  activeFilters: ye(Pf).default([]).describe("Currently active filters"),
  // Search
  searchQuery: y().default("").describe("Current search query"),
  // Sort
  sortBy: y().default("cost").describe("Current sort field"),
  sortOrder: yl.default("asc").describe("Current sort order"),
  // Display
  displayMode: kl.default("grid").describe("Current display mode"),
  currentPage: R().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ye(y()).default([]).describe("IDs of selected stock items")
});
function Mg() {
  return Zi.parse({});
}
const wl = te({}).passthrough(), Sl = te({
  l: R(),
  w: R(),
  t: R().nullable(),
  q: R(),
  stockId: y()
}), Ji = ir.partial(), xl = te({
  q: R().optional(),
  analysis: Ji.nullable().optional()
}), Pl = te({
  holes: ye(te({
    x: R(),
    y: R(),
    diameter: R(),
    depth: R().optional(),
    face: R().optional(),
    type: y().optional()
  })).optional(),
  hingeHoles: ye(te({
    position: R(),
    side: y(),
    face: R().optional(),
    numHoles: R().optional(),
    diameter: R().optional(),
    depth: R().optional(),
    hingeLength: R().optional(),
    distanceFromEdge: R().optional(),
    outerSpacing: R().optional()
  })).optional(),
  corners: ye(te({
    index: R(),
    type: y().nullable().optional(),
    size: R().nullable().optional()
  })).optional()
}), Ol = te({
  bladeWidth: R().optional(),
  cutType: y().optional(),
  cutPreference: y().optional(),
  stackHeight: R().optional()
}), Of = te({
  l: R(),
  w: R(),
  t: R().nullable(),
  material: y().nullable(),
  orientationLock: tl.nullable(),
  q: R(),
  name: y().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Re(y(), ut([y(), Ce()])).nullable().optional(),
  finish: Re(y(), ut([y(), Ce()])).nullable().optional(),
  planing: Re(y(), ut([y(), Ce()])).nullable().optional(),
  customData: Re(y(), et()).nullable().optional()
}), If = te({
  id: y(),
  name: y().nullable(),
  l: R(),
  w: R(),
  t: R().nullable(),
  material: y().nullable(),
  q: R(),
  trim: te({
    x1: R(),
    x2: R(),
    y1: R(),
    y2: R()
  }).nullable().optional(),
  cost: R().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: R().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: y().nullable().optional(),
  db_id: y().nullable().optional(),
  code: y().nullable().optional(),
  analysis: Ji.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: ye(xl).nullable().optional(),
  customData: Re(y(), et()).nullable().optional()
}), Cf = te({
  id: y().optional(),
  name: y().optional(),
  l: R(),
  w: R(),
  t: R().nullable().optional(),
  material: y().optional(),
  q: R().optional(),
  orientationLock: ut([
    hn(""),
    hn("l"),
    hn("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Re(y(), ut([y(), Ce()])).nullable().optional(),
  finish: Re(y(), ut([y(), Ce()])).nullable().optional(),
  planing: Re(y(), ut([y(), Ce()])).nullable().optional(),
  // V3 nested extras also stored on inputs even for V2 results (see mapToCheckoutResultV2)
  extras: te({
    banding: te({
      sides: Re(y(), ut([y(), Ce()]))
    }).nullable().optional(),
    finish: te({
      faces: Re(y(), ut([y(), Ce()]))
    }).nullable().optional(),
    planing: te({
      sides: Re(y(), ut([y(), Ce()])).optional(),
      faces: Re(y(), ut([y(), Ce()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: Pl.optional(),
  stock: te({
    db_id: y().optional(),
    code: y().optional(),
    material: y().optional(),
    thickness: R().optional()
  }).nullable().optional(),
  customData: Re(y(), et()).nullable().optional()
});
te({
  jobId: R(),
  metadata: ka.optional(),
  parts: ye(Of),
  stock: ye(If),
  offcuts: ye(Sl),
  inputs: te({
    parts: ye(Cf),
    saw: Ol.optional()
  }),
  apiResultV3: wl.optional()
});
const Lf = te({
  l: R(),
  w: R(),
  t: R().nullable(),
  material: y().nullable(),
  orientationLock: tl.nullable(),
  q: R(),
  name: y().nullable(),
  // V3 format: nested extras structure
  extras: te({
    banding: te({
      sides: Re(y(), ut([y(), Ce()]))
    }).nullable().optional(),
    finish: te({
      faces: Re(y(), ut([y(), Ce()]))
    }).nullable().optional(),
    planing: te({
      sides: Re(y(), ut([y(), Ce()])).optional(),
      faces: Re(y(), ut([y(), Ce()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Re(y(), et()).nullable().optional()
}), Ff = te({
  id: y(),
  name: y().nullable(),
  l: R(),
  w: R(),
  t: R().nullable(),
  material: y().nullable(),
  q: R(),
  trim: te({
    l1: R().optional(),
    l2: R().optional(),
    w1: R().optional(),
    w2: R().optional()
  }).nullable().optional(),
  cost: R().nullable().optional(),
  /** Configured percentage discount (0–100) — surfaced to pricing formulas. */
  discount: R().nullable().optional(),
  /** Per-stock pricing override evaluated at checkout — see
   *  shared/formula/pricing-variables.ts for the available variable surface. */
  pricingFormula: y().nullable().optional(),
  db_id: y().nullable().optional(),
  code: y().nullable().optional(),
  analysis: Ji.nullable().optional(),
  /** Per-sheet analysis — present when the cut server emits per-sheet data.
   *  Pricing formulas iterate these when set so usedFraction reflects each
   *  physical sheet, not the order-wide average. */
  sheets: ye(xl).nullable().optional(),
  // New stock fields
  color: sr.nullable(),
  weight: R().positive().nullable().optional(),
  imageUrl: y().nullable().optional(),
  tags: ye(y()).nullable().optional(),
  available: Ce().nullable().optional(),
  customData: Re(y(), et()).nullable().optional()
}), Ef = te({
  id: y().optional(),
  name: y().optional(),
  l: R(),
  w: R(),
  t: R().nullable().optional(),
  material: y().optional(),
  q: R().optional(),
  orientationLock: ut([
    hn(""),
    hn("l"),
    hn("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: te({
    banding: te({
      sides: Re(y(), ut([y(), Ce()]))
    }).nullable().optional(),
    finish: te({
      faces: Re(y(), ut([y(), Ce()]))
    }).nullable().optional(),
    planing: te({
      sides: Re(y(), ut([y(), Ce()])).optional(),
      faces: Re(y(), ut([y(), Ce()])).optional()
    }).nullable().optional()
  }).optional(),
  machining: Pl.optional(),
  stock: te({
    db_id: y().optional(),
    code: y().optional(),
    material: y().optional(),
    thickness: R().optional()
  }).nullable().optional(),
  customData: Re(y(), et()).nullable().optional()
});
te({
  jobId: R(),
  metadata: ka.optional(),
  parts: ye(Lf),
  stock: ye(Ff),
  offcuts: ye(Sl),
  inputs: te({
    parts: ye(Ef),
    saw: Ol.optional()
  }),
  apiResultV3: wl.optional()
});
function Il(e) {
  return {
    l: e.l,
    w: e.w,
    t: e.t ?? null,
    q: e.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: e?.stock?.id || e?.stock?.parentId || ""
  };
}
function Cl(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e)
    t?.parentId && (n.has(t.parentId) || n.set(t.parentId, []), n.get(t.parentId).push({
      q: t.q ?? 1,
      analysis: t.analysis ?? null
    }));
  return n;
}
function Ll(e) {
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
const Af = te({
  stockSelection: pr.optional(),
  stackingMode: fr.optional(),
  minSpacing: el.optional()
}).optional(), $f = te({
  stockType: yn([...Vi]).optional(),
  bladeWidth: ut([
    dr,
    y()
  ]).optional(),
  cutType: cr,
  cutPreference: ur,
  stackHeight: rr,
  guillotineOptions: or,
  efficiencyOptions: lr.optional(),
  options: Af
}).optional(), Nf = te({
  holes: R().min(0).nullable().optional(),
  corners: R().min(0).nullable().optional()
}).optional(), Tf = Zn.pick({
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
  banding: hr.nullable().optional(),
  finish: mr.nullable().optional(),
  planing: gr.nullable().optional(),
  stockId: y().nullable().optional()
}), Mf = te({
  stock: ye(Vn).default([]),
  parts: ye(Tf).optional(),
  options: df,
  type: y().optional(),
  // variable | simple
  materials: ye(bf).optional(),
  banding: Ni.nullable().optional(),
  finish: Ni.nullable().optional(),
  planing: Ni.nullable().optional(),
  machining: et().optional(),
  machiningPricing: Nf,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: et().optional(),
  partRules: ff.optional(),
  customValidation: te({
    enabled: Ce(),
    rules: ye(et())
  }).optional(),
  saw: $f,
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
  sawsById: Re(y(), et()).optional(),
  stockFilter: te({
    enabled: Ce().optional(),
    serverMode: Ce().optional(),
    config: Zi.optional()
  }).optional(),
  // Product catalog configuration
  products: te({
    enabled: Ce().optional(),
    showCategories: Ce().optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: te({
    baseUrl: y(),
    orgSlug: y(),
    isCustomDomain: Ce().optional(),
    // WebSocket origin + org id for the storefront's inventory-change watcher
    // (Vanilla.vue startInventoryWatch). Host integrations inject these from
    // the /config response wrapper (`orgId`) and their deploy env.
    wsServer: y().optional(),
    orgId: y().optional()
  }).optional(),
  // Admin configuration (configurator, etc.)
  config: te({
    configurator: te({
      enabled: Ce(),
      url: y().nullable().optional(),
      spec: et().nullable().optional()
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
    showCredit: Ce().optional()
  }),
  config: te({
    stockCount: R().optional(),
    stock: ye(et()).optional(),
    materials: ye(et()).optional(),
    options: et().optional(),
    pricing: et().optional(),
    banding: et().optional(),
    finish: et().optional(),
    planing: et().optional(),
    machining: et().optional(),
    bandingPricing: Re(y(), R()).optional(),
    finishPricing: Re(y(), R()).optional(),
    planingPricing: Re(y(), R()).optional(),
    machiningPricing: Re(y(), R()).optional(),
    saw: et().optional(),
    shipping: te({
      enabled: Ce(),
      originCountry: y().optional()
    }).optional(),
    stockFilter: te({
      config: Zi.optional()
    }).optional(),
    partRules: et().optional(),
    customFields: ye(et()).optional(),
    termsUrl: y().optional(),
    termsContent: y().optional(),
    tracking: te({
      gaMeasurementId: y().optional(),
      gtmContainerId: y().optional()
    }).optional(),
    customValidation: te({
      enabled: Ce(),
      rules: ye(et())
    }).optional(),
    importSettings: te({
      grouping: yn(["material", "material-variant", "auto"]).optional(),
      codeRegex: y().optional()
    }).optional()
  }),
  stripe: te({
    enabled: Ce(),
    publishableKey: y().optional(),
    currency: y().optional()
  }).optional(),
  customerAccounts: te({
    enabled: Ce(),
    requireForCheckout: Ce().optional()
  }).optional()
});
function Vf(e) {
  const n = Mf.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    error: n.success ? void 0 : n.error
  };
}
function Df(e) {
  const n = Vf(e);
  if (!n.success) {
    const t = n.error?.issues.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(e, null, 2)), console.error("Validation errors:", t), new Error(`Invalid checkout data: ${t}`);
  }
  return n.data;
}
function tn(e) {
  return e == null ? !1 : typeof e == "object" && e.value !== void 0 ? e.value : e;
}
function jf(e) {
  if (e.extras?.banding?.sides) {
    const n = e.extras.banding.sides, t = {};
    if (dt(n.a) || dt(n.b) || dt(n.c) || dt(n.d))
      t.x1 = dt(n.a) ? tn(n.a) : !1, t.y1 = dt(n.b) ? tn(n.b) : !1, t.x2 = dt(n.c) ? tn(n.c) : !1, t.y2 = dt(n.d) ? tn(n.d) : !1;
    else {
      const i = _i(n);
      t.x1 = dt(i.x1) ? tn(i.x1) : !1, t.x2 = dt(i.x2) ? tn(i.x2) : !1, t.y1 = dt(i.y1) ? tn(i.y1) : !1, t.y2 = dt(i.y2) ? tn(i.y2) : !1;
    }
    e.banding = t;
  }
  if (e.extras?.finish?.faces) {
    const n = e.extras.finish.faces, t = {};
    t.a = dt(n.a) ? tn(n.a) : !1, t.b = dt(n.b) ? tn(n.b) : !1, e.finish = t;
  }
  if (e.extras?.planing) {
    const n = e.extras.planing, t = {}, a = _i(n.sides || {});
    n.sides && (dt(a.x1) && (t.x1 = a.x1), dt(a.x2) && (t.x2 = a.x2), dt(a.y1) && (t.y1 = a.y1), dt(a.y2) && (t.y2 = a.y2)), n.faces && (dt(n.faces.a) && (t.a = n.faces.a), dt(n.faces.b) && (t.b = n.faces.b)), Object.keys(t).length > 0 && (e.planing = t);
  }
  (e.extras?.banding || e.extras?.finish || e.extras?.planing) && delete e.extras;
}
function Bf(e, n = 0) {
  if (n === 0)
    return e;
  if (n === 1 || n === 2) {
    const t = Math.max(e.l, e.w), a = Math.min(e.l, e.w);
    e.w > e.l && (e.l = t, e.w = a);
  }
  return e;
}
function Fl(e, n = 0) {
  debugger;
  return n === 0 || e.forEach((t) => Bf(t, n)), e;
}
function qf(e) {
  const n = typeof e.weight == "number" && Number.isFinite(e.weight) && e.weight > 0 ? e.weight : null;
  if (n !== null) return n;
  const t = typeof e.density == "number" && Number.isFinite(e.density) && e.density > 0 ? e.density : null, a = typeof e.l == "number" ? e.l : null, i = typeof e.w == "number" ? e.w : null, l = typeof e.t == "number" ? e.t : null;
  if (!t || !a || !i || !l) return null;
  const u = a / 1e3 * (i / 1e3) * (l / 1e3);
  return Math.round(t * u * 100) / 100;
}
function El(e) {
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
function _f(e, n, t, a, i, l, u, r) {
  const f = Ll(a), p = Cl(a), b = n.map((h) => {
    const M = {
      l: h.l,
      w: h.w,
      t: h?.t ?? null,
      material: h.material ?? null,
      orientationLock: h.orientationLock ?? null,
      q: u?.addedPartTally?.[h.parentId] || h.q,
      name: h.name ?? null,
      customData: h.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: Hr(),
      finish: Ha(),
      planing: Jr()
    }, J = { ...h };
    return jf(J), J.banding && (M.banding = J.banding), J.finish && (M.finish = J.finish), J.planing && (M.planing = J.planing), M;
  }), I = t.map((h) => {
    const M = {
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
    return h?.trim && (M.trim = _i(h.trim)), M;
  }), E = {
    parts: l.map((h) => {
      const M = {
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
      h.extras && (M.extras = {}, h.extras.banding?.sides && (M.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (M.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (M.extras.planing = {
        ...h.extras.planing.sides && { sides: h.extras.planing.sides },
        ...h.extras.planing.faces && { faces: h.extras.planing.faces }
      }));
      const J = El(h);
      return J && (M.machining = J), M;
    })
  };
  return r && Fl(b, r), {
    jobId: e,
    metadata: u,
    parts: b,
    stock: I,
    offcuts: i?.map(Il) || [],
    inputs: E
  };
}
function Rf(e, n, t, a, i, l, u, r) {
  const f = Ll(a), p = Cl(a), b = n.map((h) => {
    const M = {
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
        banding: { sides: qi() },
        finish: { faces: Ha() },
        planing: Zr()
      }
    };
    return h.extras && (h.extras.banding?.sides && (M.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (M.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (M.extras.planing = {
      sides: h.extras.planing.sides || qi(),
      faces: h.extras.planing.faces || Ha()
    })), M;
  }), I = t.map((h) => ({
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
    weight: qf(h),
    imageUrl: h?.imageUrl ?? null,
    tags: h?.tags ?? null,
    available: h?.available ?? null,
    customData: h?.customData ?? null
  })), E = {
    parts: l.map((h) => {
      const M = {
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
      h.extras && (M.extras = {}, h.extras.banding?.sides && (M.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (M.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (M.extras.planing = {
        ...h.extras.planing.sides && { sides: h.extras.planing.sides },
        ...h.extras.planing.faces && { faces: h.extras.planing.faces }
      }));
      const J = El(h);
      return J && (M.machining = J), M;
    })
  };
  return r && Fl(b, r), {
    jobId: e,
    metadata: u,
    parts: b,
    stock: I,
    offcuts: i?.map(Il) || [],
    inputs: E
  };
}
function Uf(e, n, t) {
  const a = e.sourceCatalogueKey ? n?.pricing || {} : {};
  return e.pricing && typeof e.pricing == "object" ? { ...a, ...e.pricing } : { ...a, [t]: e.price ?? 0 };
}
function Gf(e) {
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
function zf(e) {
  const n = (e.code || "").trim();
  return n ? n.toUpperCase() : (Jn(Gf(e), { fallback: "" }).fullLabel || "").toUpperCase();
}
function Wf(e) {
  if (e && typeof e == "object" && "resolvedExtras" in e) {
    const { resolvedExtras: n, ...t } = e;
    return t;
  }
  return e;
}
const Kf = ["id", "data-index"], Hf = /* @__PURE__ */ vt({
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
    }), l = () => {
      if (!t.inputShape) return;
      let f = {
        l1: Cn(t.inputShape, "banding", "side.l1"),
        l2: Cn(t.inputShape, "banding", "side.l2"),
        w1: Cn(t.inputShape, "banding", "side.w1"),
        w2: Cn(t.inputShape, "banding", "side.w2")
      };
      const p = Tr(
        t.orientationModel,
        t.stockGrain,
        t.inputShape
      );
      p && (f = Ar(f, p)), i.value = f;
    };
    st([
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
    return bn(() => {
      document.getElementById(t.id)?.addEventListener("keydown", u);
    }), Qa(() => {
      document.getElementById(t.id)?.removeEventListener("keydown", u);
    }), (f, p) => (O(), D("div", {
      id: e.id,
      class: nt(["banding-button", { open: e.open, disabled: e.disabled }]),
      "data-field": "banding",
      "data-index": e.index,
      tabindex: "0",
      onClick: r
    }, [
      H("div", {
        class: nt(["outer", {
          l1: i.value.l1,
          l2: i.value.l2,
          w1: i.value.w1,
          w2: i.value.w2
        }])
      }, [...p[0] || (p[0] = [
        H("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, Kf));
  }
}), Zf = /* @__PURE__ */ Qt(Hf, [["__scopeId", "data-v-00282421"]]), Jf = {
  key: 0,
  class: "material-picker__selected"
}, Qf = ["src", "alt"], Yf = ["title"], Xf = { class: "material-picker__selected-stack" }, ep = { class: "material-picker__selected-line" }, tp = { class: "material-picker__selected-name" }, np = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, ap = {
  key: 0,
  class: "material-picker__selected-code"
}, ip = {
  key: 1,
  class: "material-picker__placeholder"
}, sp = { class: "material-picker__search-wrap" }, lp = ["placeholder"], op = {
  key: 0,
  class: "material-picker__search-spinner",
  "aria-hidden": "true"
}, rp = {
  class: "material-picker__list",
  role: "listbox"
}, up = {
  key: 0,
  class: "material-picker__empty"
}, cp = ["aria-selected", "onMousedown", "onMouseenter"], dp = ["src", "alt"], fp = ["title"], pp = { class: "material-picker__selected-stack" }, gp = { class: "material-picker__selected-line" }, mp = { class: "material-picker__selected-name" }, hp = {
  key: 0,
  class: "c-badge c-badge--light c-badge--sm material-picker__brand"
}, vp = {
  key: 0,
  class: "material-picker__selected-code"
}, bp = /* @__PURE__ */ vt({
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
    searchPlaceholder: { default: "Search name, variant or brand…" },
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
    const t = e, a = n, i = G(), l = G(), u = G(), r = G(!1), f = G(""), p = G(0), b = G(!1);
    let I = null, E = null;
    const h = G([]), M = /* @__PURE__ */ new Map(), J = G(null), ue = F(() => t.id || `material-picker-${Math.random().toString(36).slice(2, 8)}`), _ = F(() => t.modelValue !== void 0 && t.modelValue !== null ? t.modelValue : t.value !== void 0 && t.value !== null ? t.value : null), { floatingStyles: j, teleportTarget: pe, syncFloatingFont: le } = fl(
      i,
      l,
      {
        sizeApply({ rects: V, availableWidth: Y, availableHeight: ve, elements: Ne }) {
          const ee = V.reference.width, ge = Math.min(Y, Math.max(ee, 360));
          Object.assign(Ne.floating.style, {
            maxHeight: `${Math.max(200, ve)}px`,
            minWidth: `${ee}px`,
            width: `${ge}px`,
            maxWidth: `${Y}px`
          });
        }
      },
      r
    ), v = F(() => Array.isArray(t.options));
    function T(V) {
      return V.map((Y, ve) => {
        const Ne = Jn(Y, { fallback: Y.name }), ee = [Ne.fullLabel, Y.code, Y.displayName].filter(Boolean).join(" ").toLowerCase(), ge = Y._id || `idx-${ve}`;
        return { ...Y, _key: `${Ne.groupKey}|${ge}`, _summary: Ne, _haystack: ee };
      });
    }
    const Q = F(
      () => v.value ? T(t.options ?? []) : []
    ), $ = F(
      () => v.value ? [] : T(h.value)
    ), q = F(() => {
      if (v.value) {
        const V = f.value.trim().toLowerCase();
        return V ? Q.value.filter((Y) => Y._haystack.includes(V)) : Q.value;
      }
      return $.value;
    }), S = F(() => {
      const V = _.value;
      if (!V) return null;
      if (v.value) {
        const Ne = V.toUpperCase(), ge = Q.value.find(
          (Fe) => typeof Fe.code == "string" && Fe.code.toUpperCase() === Ne
        ) || Q.value.find((Fe) => K(Fe) === V);
        if (ge) return ge;
      } else if (J.value && K(J.value) === V)
        return T([J.value])[0];
      const Y = { name: V }, ve = Jn(Y, { fallback: V });
      return { ...Y, _key: `${ve.groupKey}|stub`, _summary: ve, _haystack: "" };
    });
    function K(V) {
      const Y = t.valueKey === "_id" ? V._id : V.name;
      return Y != null ? String(Y) : null;
    }
    function ie(V) {
      return K(V) === _.value;
    }
    function fe() {
      t.disabled || t.readonly || (r.value = !r.value, r.value && (f.value = "", p.value = 0, Bt(() => {
        le(), u.value?.focus(), !v.value && h.value.length === 0 && We("");
      })));
    }
    function re(V) {
      J.value = V;
      const Y = K(V);
      a("update:modelValue", Y), a("update:value", Y), a("select", V), r.value = !1, f.value = "";
    }
    function Je() {
      J.value = null, a("update:modelValue", null), a("update:value", null), a("clear");
    }
    async function We(V) {
      if (!t.searchFn) return;
      const Y = V.toLowerCase(), ve = M.get(Y);
      if (ve) {
        h.value = ve;
        return;
      }
      if (V.length > 0 && V.length < t.minQueryLength) {
        h.value = [];
        return;
      }
      E && E.abort(), E = new AbortController(), b.value = !0;
      try {
        const Ne = await t.searchFn(V);
        M.set(Y, Ne), h.value = Ne;
      } catch (Ne) {
        if (Ne?.name === "CanceledError" || Ne?.code === "ERR_CANCELED") return;
        h.value = [];
      } finally {
        b.value = !1;
      }
    }
    function ke() {
      v.value || (I && clearTimeout(I), I = setTimeout(
        () => We(f.value),
        t.debounceMs
      ));
    }
    st(_, async (V) => {
      if (!v.value) {
        if (!V || !t.loadFn) {
          J.value = null;
          return;
        }
        if (K(J.value ?? {}) !== V)
          try {
            const Y = await t.loadFn(V);
            Y && (J.value = Y, a("loaded", Y));
          } catch {
          }
      }
    }, { immediate: !0 }), bn(() => {
      if (v.value && _.value) {
        const V = Q.value.find((Y) => K(Y) === _.value);
        V && a("loaded", V);
      }
    });
    function Le(V) {
      switch (V.key) {
        case "ArrowDown":
          V.preventDefault(), p.value < q.value.length - 1 && p.value++;
          break;
        case "ArrowUp":
          V.preventDefault(), p.value > 0 && p.value--;
          break;
        case "Enter":
          V.preventDefault(), q.value[p.value] && re(q.value[p.value]);
          break;
        case "Escape":
          V.preventDefault(), r.value = !1;
          break;
      }
    }
    function pt(V) {
      if (!r.value) return;
      const Y = V.target;
      i.value?.contains(Y) || l.value?.contains(Y) || (r.value = !1);
    }
    return st(r, (V) => {
      V ? document.addEventListener("mousedown", pt) : document.removeEventListener("mousedown", pt);
    }), Gi(() => {
      document.removeEventListener("mousedown", pt), I && clearTimeout(I), E && E.abort();
    }), st(q, () => {
      p.value = 0;
    }), (V, Y) => (O(), D("div", {
      class: nt(["input-wrapper material-picker", { issue: e.issue, required: e.required, disabled: e.disabled, focused: r.value }])
    }, [
      e.label && e.enableLabel ? (O(), Ee(va, {
        key: 0,
        id: ue.value,
        label: e.label,
        required: e.required
      }, {
        default: pn(() => [
          gn(V.$slots, "label", {}, () => [
            _t(me(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["id", "label", "required"])) : ne("", !0),
      H("div", {
        ref_key: "triggerRef",
        ref: i,
        class: nt(["material-picker__wrapper", { focused: r.value, empty: !S.value }]),
        onClick: fe
      }, [
        S.value ? (O(), D("div", Jf, [
          S.value._summary.imageUrl ? (O(), D("img", {
            key: 0,
            src: S.value._summary.imageUrl,
            class: "material-picker__thumb material-picker__thumb--lazy",
            loading: "lazy",
            alt: S.value._summary.productLabel,
            onLoad: Y[0] || (Y[0] = (ve) => ve.target.classList.add("material-picker__thumb--loaded"))
          }, null, 40, Qf)) : S.value.colorHex ? (O(), D("span", {
            key: 1,
            class: "material-picker__swatch",
            style: Jt({ background: S.value.colorHex }),
            title: S.value.color || "",
            "aria-hidden": "true"
          }, null, 12, Yf)) : ne("", !0),
          H("span", Xf, [
            H("span", ep, [
              H("span", tp, me(S.value._summary.productLabel), 1),
              S.value._summary.brand ? (O(), D("span", np, me(S.value._summary.brand), 1)) : ne("", !0)
            ]),
            S.value._summary.code ? (O(), D("span", ap, me(S.value._summary.code), 1)) : ne("", !0)
          ])
        ])) : (O(), D("span", ip, me(e.placeholder || "Select…"), 1)),
        S.value && !e.disabled && e.allowClear ? (O(), D("button", {
          key: 2,
          type: "button",
          class: "c-btn c-btn--xs c-btn--unstyled field-clear-btn material-picker__clear",
          "aria-label": "Clear selection",
          onClick: Mn(Je, ["stop"])
        }, "×")) : ne("", !0)
      ], 2),
      (O(), Ee(Ui, {
        to: L(pe),
        disabled: !L(pe)
      }, [
        r.value ? (O(), D("div", {
          key: 0,
          ref_key: "floatingRef",
          ref: l,
          class: "material-picker__dropdown",
          style: Jt(L(j)),
          onMousedown: Y[3] || (Y[3] = Mn(() => {
          }, ["prevent"]))
        }, [
          H("div", sp, [
            Y[4] || (Y[4] = H("span", {
              class: "material-picker__search-icon",
              "aria-hidden": "true"
            }, "⌕", -1)),
            Ya(H("input", {
              ref_key: "searchRef",
              ref: u,
              "onUpdate:modelValue": Y[1] || (Y[1] = (ve) => f.value = ve),
              type: "text",
              class: "material-picker__search",
              placeholder: e.searchPlaceholder,
              onInput: ke,
              onKeydown: Le
            }, null, 40, lp), [
              [zs, f.value]
            ]),
            b.value ? (O(), D("span", op, "…")) : ne("", !0)
          ]),
          H("div", rp, [
            q.value.length === 0 ? (O(), D("div", up, me(e.emptyMessage), 1)) : ne("", !0),
            (O(!0), D(Ct, null, Kt(q.value, (ve, Ne) => (O(), D("div", {
              key: ve._key,
              class: nt(["material-picker__option", {
                highlighted: Ne === p.value,
                selected: ie(ve)
              }]),
              role: "option",
              "aria-selected": ie(ve),
              onMousedown: Mn((ee) => re(ve), ["prevent"]),
              onMouseenter: (ee) => p.value = Ne
            }, [
              ve._summary.imageUrl ? (O(), D("img", {
                key: 0,
                src: ve._summary.imageUrl,
                class: "material-picker__thumb material-picker__thumb--lazy",
                loading: "lazy",
                alt: ve._summary.productLabel,
                onLoad: Y[2] || (Y[2] = (ee) => ee.target.classList.add("material-picker__thumb--loaded"))
              }, null, 40, dp)) : ve.colorHex ? (O(), D("span", {
                key: 1,
                class: "material-picker__swatch",
                style: Jt({ background: ve.colorHex }),
                title: ve.color || "",
                "aria-hidden": "true"
              }, null, 12, fp)) : ne("", !0),
              H("span", pp, [
                H("span", gp, [
                  H("span", mp, me(ve._summary.productLabel), 1),
                  ve._summary.brand ? (O(), D("span", hp, me(ve._summary.brand), 1)) : ne("", !0)
                ]),
                ve._summary.code ? (O(), D("span", vp, me(ve._summary.code), 1)) : ne("", !0)
              ])
            ], 42, cp))), 128))
          ])
        ], 36)) : ne("", !0)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
}), yp = /* @__PURE__ */ Qt(bp, [["__scopeId", "data-v-d5fabad1"]]), kp = ["id", "data-index", "disabled"], wp = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = F(() => t.inputShape ? Cn(t.inputShape, "finish", "face.a") : !1), l = F(() => t.inputShape ? Cn(t.inputShape, "finish", "face.b") : !1), u = () => {
      t.disabled || a("clicked");
    };
    return (r, f) => {
      const p = Dn("FontAwesomeIcon");
      return O(), D("button", {
        id: e.id,
        class: nt(["c-btn finish-button", {
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
        ot(p, { icon: ["fass", "spray-can"] })
      ], 10, kp);
    };
  }
});
function Sp(e) {
  return e.machining ? "toData" in e.machining ? e.machining.toData() : e.machining : { holes: [], hingeHoles: [], corners: {} };
}
function xp(e) {
  const n = Sp(e);
  return n ? !!(n.holes && n.holes.length > 0 || n.hingeHoles && n.hingeHoles.length > 0 || n.corners && Object.values(n.corners).some((t) => t && t.type && t.size > 0)) : !1;
}
const Pp = vt({
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
      return xp(this.inputShape);
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
}), Op = ["id", "disabled"];
function Ip(e, n, t, a, i, l) {
  const u = Dn("FontAwesomeIcon");
  return O(), D("button", {
    id: e.id,
    class: nt(["c-btn machining-button", { selected: e.hasMachining }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.openMachining && e.openMachining(...r))
  }, [
    ot(u, { icon: ["fass", "hammer"] })
  ], 10, Op);
}
const Cp = /* @__PURE__ */ Qt(Pp, [["render", Ip]]), Lp = vt({
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
}), Fp = ["id", "disabled"];
function Ep(e, n, t, a, i, l) {
  const u = Dn("FontAwesomeIcon");
  return O(), D("button", {
    id: e.id,
    class: nt(["c-btn custom-products-button", { selected: e.hasSelections }]),
    type: "button",
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...r) => e.open && e.open(...r))
  }, [
    ot(u, { icon: ["fass", "box"] })
  ], 10, Fp);
}
const Ap = /* @__PURE__ */ Qt(Lp, [["render", Ep]]), $p = ["id"], Np = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Tp = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Mp = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, Vp = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, Dp = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, jp = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, Bp = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, Us = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = G(0), l = G(!1), u = ($, q, S, K) => {
      if (!Ye(S) || q === 0)
        return $;
      const ie = r();
      return q === 1 || q === 2 && K !== "n" && $ ? ie : $;
    }, r = ($) => {
      const q = { ...t, ...$ };
      if (!q.rectangle || !Ye(q.rectangle)) return "";
      let S = "";
      switch (q.orientationModel) {
        case 0:
          S = pe.value;
          break;
        case 1:
          q.stockGrain === "y" || q.stockGrain === "n" ? S = q.rectangle.l >= q.rectangle.w ? "l" : "w" : q.rectangle.l >= q.rectangle.w ? S = q.stockGrain : S = S = q.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          S = q.rectangle.l >= q.rectangle.w ? "l" : "w";
          break;
      }
      return S;
    }, f = () => {
      if (t.disabled || _.value.length <= 1)
        return;
      const $ = p(pe.value);
      "multiEdit" in t.rectangle && t.rectangle.multiEdit && pe.value === "" && i.value !== $ && i.value === 0 && (i.value = $);
      let S = null;
      [1, 2].includes(t.orientationModel) ? S = I() : S = b(), i.value = S;
    }, p = ($) => {
      const q = _.value.findIndex((S) => S === $);
      return q === -1 ? 0 : q;
    }, b = () => {
      let $ = i.value + 1;
      return $ > _.value.length - 1 && ($ = 0), $;
    }, I = () => {
      let $ = 0;
      if (pe.value === "") {
        const q = r();
        $ = _.value.findIndex((S) => S === q);
      } else
        $ = _.value.findIndex((q) => q === "");
      return $;
    }, E = ($) => {
      a("updateOrientation", $);
    }, h = () => {
      const $ = pe.value;
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
    }, M = () => {
      if (!t.rectangle)
        return;
      if ("multiEdit" in t.rectangle && t.rectangle.multiEdit && !pe.value) {
        ue("");
        return;
      }
      const $ = u(
        pe.value,
        t.orientationModel,
        t.rectangle,
        t.stockGrain
      );
      if ($ !== pe.value) {
        ue($);
        return;
      }
      if (!l.value || i.value === -1) {
        const q = p(pe.value);
        i.value = q;
      }
      if (Ye(t.rectangle)) {
        if (t.orientationModel === 1) {
          const q = v.value ? r() : pe.value;
          ue(q);
          return;
        }
        if (t.orientationModel === 2) {
          let q;
          v.value ? q = t.stockGrain !== "n" ? r() : "" : q = pe.value, ue(q);
        }
      }
    }, J = G(!1), ue = ($) => {
      const q = p($);
      J.value = !0, i.value = q, J.value = !1, E($);
    }, _ = F(() => {
      if (!t.rectangle) return ["l", "w"];
      if (In(t.rectangle)) return ["l", "w"];
      let $ = ["", "l", "w"];
      return t.rectangle.multiEdit ? [" ", "", "l", "w"] : (j.value && ($ = $.filter((q) => q !== "w")), $);
    }), j = F(() => Ye(t.rectangle) || ki(t.rectangle) ? t.rectangle.isSquare : t.rectangleType && t.rectangle?.l && t.rectangle?.w ? t.rectangle?.l === t.rectangle?.w : !1), pe = F(() => {
      let $ = "";
      if (In(t.rectangle))
        $ = t.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Ye(t.rectangle)) {
        const q = t.rectangle.orientationLock;
        $ = q === null ? "" : q;
      } else if (ki(t.rectangle)) {
        const S = t.rectangle.grain ?? "";
        S === "l" || S === "w" || S === "" || S === " " ? $ = S : $ = "";
      }
      return $;
    }), le = F(() => In(t.rectangle) || !t.rectangle ? {
      l: null,
      w: null
    } : {
      l: t.rectangle.l,
      w: t.rectangle.w
    }), v = F(() => !le.value.l && !le.value.w), T = F(() => In(t.rectangle) ? !1 : _a(
      t.orientationModel,
      t.stockGrain,
      t.rectangle,
      t.rectangleType,
      t.shapeOrientation
    )), Q = F(() => {
      if (!t.rectangle)
        return t.shapeOrientation ? "noGrain" : "freeRotation";
      if (ki(t.rectangle) || t.rectangleType === "stock") {
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
      const $ = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, q = t.stockGrain || "default";
      let S = "default";
      Ye(t.rectangle) || t.rectangleType === "shape" ? S = h() : In(t.rectangle) && (S = t.rectangle.direction || "default");
      const K = $[q]?.[S];
      return K || $[q]?.default || "freeRotation";
    });
    return st(i, ($, q) => {
      l.value && q !== void 0 && (J.value || E(_.value[$]));
    }, { immediate: !1 }), st(le, ($, q) => {
      if (!t.rectangle || t.orientationModel === 0 || !Ye(t.rectangle) || Ye(t.rectangle) && (t.orientationModel === 2 && q.l && q.w && !pe.value || t.stockGrain === "n" && !pe.value))
        return;
      const S = r();
      pe.value !== S && E(S);
    }, { immediate: !1 }), st(() => t.stockGrain, ($, q) => {
      $ !== q && M();
    }, { immediate: !0 }), bn(() => {
      M(), Bt(() => l.value = !0);
    }), ($, q) => (O(), D("button", {
      type: "button",
      id: e.id,
      class: nt(["c-btn orientation-button", { rot: T.value, square: j.value, disabled: e.disabled, [Q.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: f
    }, [
      Q.value === "delete" ? (O(), D("svg", Np, [...q[0] || (q[0] = [
        H("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : ne("", !0),
      Q.value === "noChange" ? (O(), D("svg", Tp, [...q[1] || (q[1] = [
        H("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : ne("", !0),
      Q.value === "freeRotation" ? (O(), D("svg", Mp, [...q[2] || (q[2] = [
        H("g", null, [
          H("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          H("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          H("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          H("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : ne("", !0),
      Q.value === "leftRight" ? (O(), D("svg", Vp, [...q[3] || (q[3] = [
        H("g", null, [
          H("path", { d: "m5.408 19.408h61.095" }),
          H("g", null, [
            H("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            H("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : ne("", !0),
      Q.value === "topBottom" ? (O(), D("svg", Dp, [...q[4] || (q[4] = [
        H("g", null, [
          H("path", { d: "m19.408 66.503v-61.095" }),
          H("g", null, [
            H("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            H("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : ne("", !0),
      Q.value === "grainLeftRight" ? (O(), D("svg", jp, [...q[5] || (q[5] = [
        H("g", null, [
          H("path", { d: "m3 3h99.887" }),
          H("path", { d: "m3.113 32h99.887" }),
          H("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : ne("", !0),
      Q.value === "grainTopBottom" ? (O(), D("svg", Bp, [...q[6] || (q[6] = [
        H("g", null, [
          H("path", { d: "m61 3v99.887" }),
          H("path", { d: "m32 3.113v99.887" }),
          H("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : ne("", !0)
    ], 10, $p));
  }
}), qp = ["id", "data-index", "disabled"], _p = /* @__PURE__ */ vt({
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
    const t = e, a = n, i = F(() => t.inputShape ? Cn(t.inputShape, "planing", "face.a") : !1), l = F(() => t.inputShape ? Cn(t.inputShape, "planing", "face.b") : !1), u = () => {
      t.disabled || a("clicked");
    };
    return (r, f) => {
      const p = Dn("FontAwesomeIcon");
      return O(), D("button", {
        id: e.id,
        class: nt(["c-btn planing-button", {
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
        ot(p, { icon: ["fass", "hammer"] })
      ], 10, qp);
    };
  }
});
function Rp(e, n, t) {
  let a = null;
  st(
    () => e.value ? { l: e.value.l, w: e.value.w } : null,
    (i) => {
      const l = typeof n == "number" ? n : n.value;
      if (!$r(l) || !i || !e.value) return;
      const u = i.w > i.l;
      if (a === null) {
        a = u;
        return;
      }
      if (a !== u) {
        const r = Nr(l);
        for (const f of r)
          vr(e.value, f);
        a = u;
      }
    },
    { immediate: !0 }
  );
}
const Up = {
  key: 0,
  class: "info"
}, Gp = ["disabled"], zp = /* @__PURE__ */ vt({
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
    Rp(i, Wt(t, "orientationModel"));
    const l = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], u = F(() => l.includes(t.field.name) || t.field.name === "material" && t.typePrefix === "part" || t.field.name === "t" && t.thicknessOptions?.length > 0 || t.field.name === "w" && t.widthOptions?.length > 0), r = F(() => {
      try {
        const v = t.field.propertyPath || t.field.name;
        return v.includes(".") ? nn(t.item, v) ?? null : t.item[v] ?? null;
      } catch (v) {
        return console.error("[CheckoutField] Error getting field value:", v), null;
      }
    }), f = F(() => {
      if (t.field.custom && t.field.type) {
        const Q = t.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(Q))
          return Q;
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
      const T = v[t.field.type];
      return T || "string";
    }), p = F(() => t.field.output ? t.field.output : null), b = F(() => t.field.options || []), I = F(() => !!(t.readonly || t.item?.readonly || t.fullStockDisabled)), E = F(() => t.item.isNew ? !1 : Ps(t.item, [t.field.name])), h = F(() => t.item.isNew ? !1 : Ps(t.item, [t.field.name], !0)), M = F(() => t.multiEdit || t.item.isNew || !1), J = F(() => t.materialOptions?.length > 0 && Ye(t.item) ? !t.item.material : !1), ue = F(() => t.widthOptions?.length === 1), _ = F(() => t.field.info ? typeof t.field.info == "string" ? t.field.info : typeof t.field.info == "object" && r.value !== null && t.field.info[r.value] || null : null), j = (v) => {
      a("update", v);
    }, pe = (v, T) => {
      a("validation", v, T);
    }, le = () => {
      a("blur");
    };
    return (v, T) => u.value ? (O(), D(Ct, { key: 1 }, [
      e.field.name === "orientationLock" ? (O(), Ee(Us, {
        key: 0,
        rectangle: e.item,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        "button-background": "#2c8d8f",
        disabled: I.value,
        onUpdateOrientation: j
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "grain" ? (O(), Ee(Us, {
        key: 1,
        rectangle: e.item,
        "button-background": "#2c8d8f",
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        disabled: I.value,
        onUpdateOrientation: j
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : e.field.name === "banding" ? (O(), Ee(Zf, {
        key: 2,
        "input-shape": L(Ye)(e.item) ? e.item : null,
        open: e.bandingEnabled?.autoId === e.item.autoId,
        "stock-grain": e.stockGrain,
        "orientation-model": e.orientationModel,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.banding,
        onClicked: T[0] || (T[0] = (Q) => v.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : e.field.name === "finish" ? (O(), Ee(wp, {
        key: 3,
        "input-shape": L(Ye)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.finish,
        onClicked: T[1] || (T[1] = (Q) => v.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "planing" ? (O(), Ee(_p, {
        key: 4,
        "input-shape": L(Ye)(e.item) ? e.item : null,
        open: !1,
        index: e.index,
        disabled: I.value || e.materialExtrasDisabled?.planing,
        onClicked: T[2] || (T[2] = (Q) => v.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : e.field.name === "machining" ? (O(), Ee(Cp, {
        key: 5,
        "input-shape": L(Ye)(e.item) ? e.item : null,
        disabled: I.value || e.materialExtrasDisabled?.machining,
        onOpen: T[3] || (T[3] = (Q) => v.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "customProducts" ? (O(), Ee(Ap, {
        key: 6,
        "input-shape": L(Ye)(e.item) ? e.item : null,
        disabled: I.value,
        onOpen: T[4] || (T[4] = (Q) => v.$emit("open-custom-products"))
      }, null, 8, ["input-shape", "disabled"])) : e.field.name === "material" && e.typePrefix === "part" && e.materialItems && e.materialItems.length > 0 ? (O(), Ee(yp, {
        key: 7,
        id: `${e.typePrefix}-material-${e.index}`,
        value: r.value,
        options: e.materialItems,
        "value-key": "name",
        label: L(Ie)(e.field.label || "fields.material"),
        placeholder: L(Ie)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        disabled: e.field.disabled || I.value || e.readonly,
        required: e.field.required || !1,
        issue: E.value,
        "allow-clear": !1,
        "onUpdate:value": j
      }, null, 8, ["id", "value", "options", "label", "placeholder", "disabled", "required", "issue"])) : e.field.name === "material" && e.typePrefix === "part" ? (O(), Ee(ba, {
        key: 8,
        id: `${e.typePrefix}-material-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: L(Ie)(e.field.label || "fields.material"),
        placeholder: L(Ie)(e.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: e.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !e.materialOptions?.length,
        required: !1,
        text: {
          select: L(Ie)("actions.select"),
          delete: L(Ie)("actions.delete")
        },
        "onUpdate:value": j,
        onValidation: pe
      }, {
        default: pn(() => [
          gn(v.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : e.field.name === "t" && e.thicknessOptions?.length > 0 ? (O(), Ee(ba, {
        key: 9,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: L(Ie)(e.field.label || "fields.t"),
        "enable-label": !1,
        options: e.thicknessOptions,
        readonly: e.readonly,
        disabled: J.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: L(Ie)("actions.select"),
          delete: L(Ie)("actions.delete")
        },
        output: "number",
        "onUpdate:value": j,
        onValidation: pe
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "w" && e.widthOptions?.length > 0 ? (O(), Ee(ba, {
        key: 10,
        id: `${e.typePrefix}-${e.field.name}-${e.index}`,
        "data-field": e.field.name,
        "data-index": e.index,
        type: "select",
        value: r.value,
        label: L(Ie)(e.field.label || "fields.w"),
        "enable-label": !1,
        options: e.widthOptions,
        readonly: e.readonly,
        disabled: ue.value,
        required: e.field.required || !1,
        "number-format": e.numberFormat,
        text: {
          select: L(Ie)("actions.select"),
          delete: L(Ie)("actions.delete")
        },
        output: "number",
        "onUpdate:value": j,
        onValidation: pe
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : e.field.name === "imageUpload" ? (O(), D("button", {
        key: 11,
        type: "button",
        disabled: e.readonly,
        onClick: T[5] || (T[5] = (Q) => v.$emit("open-image-upload"))
      }, [
        ot(L(Wa), { icon: ["fass", "image"] })
      ], 8, Gp)) : ne("", !0)
    ], 64)) : (O(), Ee(ba, {
      key: 0,
      id: `${e.typePrefix}-${e.field.name}-${e.index}`,
      "data-field": e.field.name,
      "data-index": e.index,
      type: f.value,
      value: r.value,
      label: L(Ie)(e.field.label || e.field.name),
      placeholder: L(Ie)(e.field.placeholder || e.field.name),
      "enable-label": e.enableLabel,
      output: p.value,
      options: b.value,
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
      issue: E.value,
      warning: h.value,
      "disable-required-validation": M.value,
      "onUpdate:value": j,
      onValidation: pe,
      onBlur: le
    }, {
      default: pn(() => [
        _.value ? (O(), D("p", Up, [
          ot(L(Wa), { icon: ["fass", "info-circle"] }),
          _t(" " + me(_.value), 1)
        ])) : ne("", !0),
        gn(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Wp = { class: "checkout-calculator-wrapper" }, Kp = {
  key: 0,
  class: "row table-heading"
}, Hp = {
  key: 0,
  class: "cell center"
}, Zp = ["onClick"], Jp = {
  key: 0,
  class: "cell"
}, Qp = ["onClick"], Yp = { class: "cell" }, Xp = ["disabled", "aria-label", "onClick"], eg = { class: "button-wrapper main" }, tg = ["aria-label"], ng = ["aria-label", "title", "disabled"], ag = ["aria-label"], ig = { id: "part-count" }, sg = {
  key: 5,
  class: "pagination-controls"
}, lg = { class: "c-btn-group" }, og = ["disabled"], rg = ["disabled"], ug = { class: "pagination-info" }, cg = ["disabled"], dg = ["disabled"], fg = {
  key: 7,
  id: "messages"
}, pg = {
  key: 0,
  class: "heading"
}, gg = { class: "content" }, mg = {
  key: 8,
  id: "progress"
}, hg = { id: "diagram-wrapper" }, vg = {
  key: 0,
  id: "stack"
}, bg = {
  key: 3,
  class: "debug"
}, yg = /* @__PURE__ */ vt({
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
    const a = zt(() => import("./InputIssues-BMoY_uwP.js")), i = zt(() => import("./Machining-CX8Uzu1k.js")), l = zt(() => import("./CustomProducts-rV3FClmz.js")), u = zt(() => import("./ImportCSV-CvnG4TzU.js")), r = zt(() => Promise.resolve().then(() => pd)), f = zt(() => import("./ImageUpload-BLnB34c1.js")), p = zt(() => import("./EcommerceGroups-C56fKvkr.js")), b = () => import("./Diagram-BMJ2Nm4J.js"), I = () => import("./Navigation-ydgiWiF1.js"), E = () => import("./StockNavigation-Cv5zeBUG.js"), h = () => import("./CalculationSpinner-D_ctVUT9.js"), M = zt(b), J = zt(I), ue = zt(E), _ = zt(h);
    let j = !1;
    const pe = G(!1);
    function le() {
      j || (j = !0, b().then(() => {
        pe.value = !0;
      }), I(), E(), h());
    }
    const {
      inputs: v,
      totalInputShapes: T,
      getShapeGrainSummary: Q,
      updateNumberFormat: $,
      validateInputStock: q,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: S,
      addInputShape: K,
      addInputStock: ie,
      cloneInputShape: fe,
      updateInputShape: re,
      validationIssues: Je,
      setExtrasOptionsFromPricing: We,
      getCentralizedOptions: ke
    } = ul(), { r: Le, updateFromResult: pt, stackedStock: V, uniqueAddedShapes: Y, uniqueUsedStock: ve, usedStock: Ne, activeStockAutoId: ee, activeStock: ge, setActiveStockAutoId: Fe } = Md();
    Ad({
      stockList: Le.stockList
    }, {
      stockList: { itemsPerPage: 10 }
    });
    const { progress: ct, reset: an } = vl(), { addNotice: oe } = zi();
    st(() => v.inputStock.value?.length ?? 0, (s) => {
      s > 0 && le();
    }, { immediate: !0 }), st(
      () => v.inputStock.value?.[0]?.db_sawId ?? null,
      (s) => {
        if (!s || String(s) === sn.value) return;
        const o = wa.value?.[String(s)];
        o && Ut(o);
      }
    );
    const Ae = G(!1);
    st(() => ct.value.complete, (s) => {
      s && (Ae.value = !0);
    }, { immediate: !0 });
    const Ue = F(() => v.inputShapes.value.filter(Ye)), we = (s) => !s || !Array.isArray(s) ? [] : s.map((o) => su({ parts: [o] }).parts?.[0] || o), $e = e, be = t, xt = G(!1), Lt = G(navigator?.language || "en-US"), gt = Gn(null), kn = window.location.hostname, lt = G(!1), $t = G(!0), mt = xo("Checkout/currentURL", window.location.href), bt = G([]), Fn = G(null), x = G(null), C = G(!1), k = G(!1), B = G(!1), ae = G(!1), xe = G(!1), Se = G(br()), Be = G(!1), Ke = G(1), Xe = G(10), { socket: Pt } = _d({
      refs: {
        connected: lt,
        thinking: B
      },
      callbacks: {
        onResult(s) {
          const o = s.optimisation;
          if (pt(o), !o.shapeList?.length || !o.stockList?.length) {
            an(), oe({
              type: "error",
              message: Ie("errors.calculation.no_result"),
              additional: [Ie("errors.validation.check_inputs")]
            }), B.value = !1;
            return;
          }
          if ((ce.apiVersion || 3) === 2 ? x.value = _f(
            s.jobId,
            Y.value,
            ve.value,
            Ne.value,
            Le.offcuts?.value || [],
            v.inputShapes.value,
            Le.metadata.value,
            ce.resultOrientationModel
          ) : x.value = Rf(
            s.jobId,
            Y.value,
            ve.value,
            Ne.value,
            Le.offcuts?.value || [],
            v.inputShapes.value,
            Le.metadata.value,
            ce.resultOrientationModel
          ), Le?.metadata?.value?.unplacedParts?.length) {
            const d = Le.metadata.value.unplacedParts.map((w) => w.id).join();
            oe({
              type: "warning",
              message: Ie("errors.validation.parts_not_fit", { count: Le.metadata.value.unplacedParts.length }) + ": " + d
            });
          }
          x.value && (x.value.apiResultV3 = vu({
            jobId: s.jobId,
            saw: o.saw,
            stockList: o.stockList,
            shapeList: o.shapeList,
            cutList: o.cutList,
            offcuts: Le.offcuts?.value || [],
            unusableShapes: o.unusableShapes,
            metadata: Le.metadata.value
          }), be("result", x.value)), B.value = !1;
        },
        onUser(s) {
          gt.value = s;
        },
        onConnectError(s) {
          oe({
            type: "error",
            message: Ie("errors.network.cannot_connect"),
            additional: [s]
          });
        },
        onError(s) {
          oe({
            type: "error",
            message: Ie("errors.general.error_occurred"),
            additional: [s]
          });
        }
      }
    }), Rt = {
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
    }, ce = en(Rt), Me = en({
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
    }), sn = G(null), wa = G({});
    function Ut(s) {
      if (s) {
        if (s.stockType !== void 0 && (Vi.includes(s.stockType) || console.warn(`${s.stockType} is not a valid stockType, expected ${Vi.join("|")}`), Me.stockType = s.stockType, s.stockType === "linear" && (Me.cutType = void 0, Me.cutPreference = void 0)), s.bladeWidth !== void 0) {
          const o = typeof s.bladeWidth == "string" ? parseFloat(s.bladeWidth) : s.bladeWidth;
          o >= 0 ? Me.bladeWidth = o : console.warn(`SmartCut - you provided an incorrect blade width of: ${s.bladeWidth}`);
        }
        if (s.cutType !== void 0 && (Me.cutType = s.cutType), s.cutPreference !== void 0 && (Os.includes(s.cutPreference) ? Me.cutPreference = s.cutPreference : console.warn(`SmartCut - cut preference ${s.cutPreference || "N/A"} is not valid. Expected: ${Os.join("|")}`)), s.guillotineOptions !== void 0 && typeof s.guillotineOptions == "object" && Object.assign(Me.guillotineOptions, s.guillotineOptions), s.stackHeight !== void 0) {
          const o = typeof s.stackHeight == "string" ? parseFloat(s.stackHeight) : s.stackHeight;
          Me.stackHeight = o;
        }
        s.efficiencyOptions !== void 0 && typeof s.efficiencyOptions == "object" && Object.assign(Me.efficiencyOptions, s.efficiencyOptions), s.options !== void 0 && typeof s.options == "object" && (s.options.stockSelection !== void 0 && (Me.options.stockSelection = s.options.stockSelection), s.options.stackingMode !== void 0 && (Me.options.stackingMode = s.options.stackingMode), s.options.minSpacing !== void 0 && (Me.options.minSpacing = s.options.minSpacing)), s.db_id && (sn.value = String(s.db_id));
      }
    }
    const Ft = G(null), En = F(() => !!ce.enable?.groups && !$e.readonly), An = G(null), $n = G(0), Yn = G(null), ti = F(() => {
      const s = v.inputStock.value.map((o) => o.grain).filter((o) => !!o);
      return s.length ? s.every((o) => o === "l") ? "l" : s.every((o) => o === "w") ? "w" : s.some((o) => o === "l" || o === "w") ? "y" : "n" : "n";
    }), ni = F(() => ({
      numberFormat: ce.numberFormat,
      decimalPlaces: ce.decimalPlaces ?? 2,
      fractionRoundTo: ce.fractionRoundTo ?? 0
    })), Xn = (s) => {
      Yn.value?.currentGroup && (An.value = s, $n.value++);
    }, Sa = (s) => {
      Ft.value = v.inputShapes.value.find((o) => o.autoId === s) ?? null;
    }, ai = () => {
    }, ea = G(!1), Nn = G(""), ta = G("");
    st(Je, (s) => {
      s?.length > 0 ? (ea.value = !0, Nn.value = "Validation Errors", ta.value = s.map((o) => `${o.message} (${o.category.join(", ")})`).join(`

`)) : Nn.value === "Validation Errors" && (ea.value = !1, Nn.value = "", ta.value = "");
    }, { deep: !0 });
    const Et = en({
      banding: null,
      finish: null,
      info: null,
      planing: null,
      machining: null,
      addon: null
      // imageUpload: null
    }), Pe = G([]), He = G([]), ln = G([]), it = G([]);
    function xa(s) {
      if (s.length > 1) return !0;
      if (s.length === 0) return !1;
      const o = s[0];
      return !!(o.brand || o.variant || o.displayName && o.displayName !== o.name);
    }
    const Gt = en({
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
    }), c = en({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2"]
    }), m = en({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["a", "b"]
    }), A = en({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      displayNames: {},
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), z = G(null), U = en({}), X = en({}), de = en({}), Te = G(null), Oe = G(null), Ot = F(() => ({
      banding: U.rules,
      finish: X.rules,
      planing: de.rules
    })), Ve = F(() => qd({
      stockType: Me.stockType || "sheet",
      materials: Pe.value,
      minDimension: ce.minDimension,
      ...ce.fieldOrder && ce.fieldOrder.length > 0 ? { allowedFieldIds: ce.fieldOrder } : {}
    })), qe = G([]), Qe = G({
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
    }), yt = F(() => {
      const s = Ve.value.fields.value, o = Ve.value.allFieldsMap.value, g = s.filter((se) => Qe.value[se.name] ?? !0), d = ["orientationLock", "banding", "finish", "planing", "machining", "imageUpload"], w = [];
      let P = null;
      const N = g.filter((se) => se.name !== "fullStock");
      Qe.value.fullStock && (P = g.find((se) => se.name === "fullStock") || o.get("fullStock"));
      for (const se of d) {
        const ze = Qe.value[se], _e = N.find((De) => De.name === se);
        if (ze && !_e) {
          const De = o.get(se);
          De && w.push(De);
        }
      }
      const W = qe.value || [];
      return [
        ...P ? [P] : [],
        ...N,
        ...w,
        ...W
      ];
    }), It = F(() => {
      let s = yt.value.length + 2;
      return at.value && s++, s;
    }), na = F(() => {
      const s = {
        id: 34,
        del: 32,
        info: 32
      }, o = {
        id: `${s.id}px`,
        del: `${s.del}px`,
        info: `${s.info}px`
      }, g = [];
      for (const d of yt.value) {
        if (d.name === "trim") continue;
        const w = d.w ?? "minmax(20px, 1fr)";
        g.push(w);
      }
      return g.unshift(o.id), at.value && g.push(o.info), g.push(o.del), g.join(" ");
    }), on = F(() => ce.enable?.pagination), Pa = F(() => $e.diagramNav || ce.enable?.diagramNav), Yt = F(() => on.value ? Math.ceil(Ue.value.length / Xe.value) : 1), ii = F(() => {
      if (!on.value) return Ue.value;
      const s = (Ke.value - 1) * Xe.value, o = s + Xe.value;
      return Ue.value.slice(s, o);
    }), si = F(() => on.value ? (Ke.value - 1) * Xe.value : 0), jn = (s) => {
      s < 1 && (s = 1), s > Yt.value && (s = Yt.value), Ke.value = s;
    }, aa = () => jn(1), ia = () => jn(Ke.value - 1), Ge = () => jn(Ke.value + 1), Nt = () => jn(Yt.value), at = F(() => $e.debug || ce.debug || ce.enable?.debug), Al = F(() => {
      try {
        const s = localStorage.getItem("inputs/inputStock");
        if (!s) return "(empty)";
        const o = JSON.parse(s);
        return JSON.stringify(o.map((g) => ({ material: g.material, db_id: g.db_id, l: g.l, w: g.w, t: g.t })), null, 2);
      } catch {
        return "(parse error)";
      }
    }), $l = F(() => {
      try {
        const s = localStorage.getItem("stock-filter-selections");
        return s || "(empty)";
      } catch {
        return "(read error)";
      }
    }), Nl = F(() => ({
      "--btn-color": ce.colors.buttonText,
      "--btn-bg": ce.colors.button,
      "--btn-hover-bg": Tl(ce.colors.button, -8),
      "--btn-focus-ring": ce.colors.button
    }));
    function Tl(s, o) {
      const g = s.replace("#", ""), d = parseInt(g, 16), w = Math.round(2.55 * o), P = (d >> 16) + w, N = (d >> 8 & 255) + w, W = (d & 255) + w;
      return `#${(16777216 + (P < 255 ? P < 1 ? 0 : P : 255) * 65536 + (N < 255 ? N < 1 ? 0 : N : 255) * 256 + (W < 255 ? W < 1 ? 0 : W : 255)).toString(16).slice(1)}`;
    }
    const Ml = {
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
    }, Qi = F(() => $e.showCredit !== void 0 ? $e.showCredit : gt.value ? !(gt.value && gt.value?.api?.whiteLabel) : !0), Oa = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (s) => {
        const o = ["efficiency", "smallest"];
        s && !o.includes(s) ? console.warn(`${s} is not a valid stockSelection, expected ${o.join("|")}`) : Me.options.stockSelection = s;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (s) => {
        Me.options.minSpacing = s;
      },
      maxParts: (s) => {
        ce.maxParts = s;
      },
      partsPerPage: (s) => {
        s && s > 0 && (Xe.value = s, ce.partsPerPage = s);
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
          for (const g in Rt.enable)
            g in s && (ce.enable[g] = s[g]);
          for (const g in o) {
            const d = o[g], w = nn(s, [d]), P = Rt.enable[d];
            wt(g, w !== void 0 ? w : P);
          }
          xe.value = nn(s, ["csvImport"]) ?? Rt.enable?.csvImport;
        }
      },
      colors: (s) => {
        if (s)
          for (const o in Rt.colors)
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
        s.forEach((g) => {
          const d = Yi(g.id), w = {
            ...g,
            custom: !0,
            id: d,
            name: d,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + d,
            fieldMap: "customData." + d
          };
          g.type === "checkbox" && (w.w = "32px"), g.type === "integer" || g.type === "float" ? w.output = g.output ?? "number" : g.type === "select" && (w.output = g.output ?? "string", w.options = g.options), o.push(w);
        }), qe.value = o, Bt(() => {
          for (const g of v.inputShapes.value)
            g.customData = s.reduce((d, w) => {
              const P = Yi(w.id);
              return d[P] = g.customData?.[P] || w.default || "", d;
            }, {});
        });
      }
    }, Vl = (s) => {
      at.value && be("log", ["checkout init...", s]), s?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), s?.parts && (s.parts = we(s.parts));
      let o;
      try {
        o = Df(s);
      } catch (d) {
        console.error("[init] validation FAILED:", d.message), be("error", d.message || "Invalid init data");
        return;
      }
      if (o.saw && Ut(o.saw), o.sawsById && (wa.value = o.sawsById), o?.options) {
        const d = o.options;
        cl(d);
        const w = ["stockType", "bladeWidth"];
        if (!o.saw && !s?.stockFilterEnabled)
          be("error", `Saw configuration is required. Missing properties: ${w.join(", ")}`);
        else if (o.saw) {
          const N = w.filter((W) => !(W in o.saw));
          N.length > 0 && be("error", `Missing required saw properties: ${N.join(", ")}`), (o.saw.cutType === "guillotine" || o.saw.cutType === "beam") && !("cutPreference" in o.saw) && be("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const P = ["enable", "colors"];
        for (const N in d)
          P.includes(N) || (ce[N] = d[N]), N in Oa && Oa[N]?.(d[N]);
      }
      if (o.options.colors && "colors" in Oa && Oa.colors(o.options.colors), o.banding) {
        const d = o.banding;
        "locations" in d && d.locations && (U.locations = d.locations), "groups" in d && d.groups && (U.groups = d.groups), "rules" in d && d.rules && (U.rules = d.rules), "maxGap" in d && typeof d.maxGap == "number" && (U.maxGap = d.maxGap);
      }
      if (o.finish) {
        const d = o.finish;
        "locations" in d && d.locations && (X.locations = d.locations), "groups" in d && d.groups && (X.groups = d.groups), "rules" in d && d.rules && (X.rules = d.rules);
      }
      if (o.planing) {
        const d = o.planing;
        "locations" in d && d.locations && (de.locations = d.locations), "groups" in d && d.groups && (de.groups = d.groups), "rules" in d && d.rules && (de.rules = d.rules);
      }
      o.partRules && (Te.value = o.partRules), o.customValidation && (Oe.value = o.customValidation), gi("banding", o), gi("finish", o), gi("planing", o), ql(o), ls(o), v.inputShapes.value.length && cs(), k.value = !0, at.value && be("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), Bt(() => {
        Qi.value && !no() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), o.parts?.length && Bt(() => {
        at.value && be("log", ["loading parts via init..."]), v.inputShapes.value.length = 0;
        let d = 0;
        for (const P of o.parts) {
          const N = La(P);
          N ? N.issues?.length && at.value && be("log", [`SmartCut - issues found while importing part at index ${d}`, N.issues]) : at.value && be("log", [`SmartCut - error loading part at index ${d}`, P]), d++;
        }
        v.inputShapes.value.flatMap((P) => Mi(P.issues)).length && oe({
          type: "error",
          message: Ie("errors.general.issues_found")
        }), at.value && be("log", [`loaded ${v.inputShapes.value.length} parts via init`]);
      });
    }, wt = (s, o = !1) => {
      Qe.value[s] = o;
    }, Yi = (s) => s ? wr(s)?.toLowerCase() : null, Dl = (s, o, g) => {
      try {
        if (!s || !o) return;
        const w = g !== null && g !== "" && g !== void 0 && !["orientationLock", "grain"].includes(o), P = (Z, se) => {
          if (!re(Z.autoId, se)) {
            for (const [_e, De] of Object.entries(se))
              xi(Z, _e, De);
            Z.isNew || Z.validate({ fields: Object.keys(se) });
          }
        }, N = (Z, se, ze) => {
          const _e = se ?? Z.material, De = ze ?? Z.t, Ze = v.inputStock.value.find((Xt) => {
            const oa = !_e || Xt.material === _e, ra = De == null || he({ v: Xt.t }) === he({ v: De });
            return oa && ra;
          });
          return Ze ? { l: he({ v: Ze.l }), w: he({ v: Ze.w }) } : null;
        };
        if (o === "material" && (!g || g === "")) {
          const Z = { material: null, t: null };
          Me.stockType === "linear" && (Z.w = null), P(s, Z);
          return;
        }
        if (o === "material" && g && Pe.value?.length) {
          const Z = Pe.value.find((se) => se.name === g);
          if (Z) {
            const se = { material: g };
            if (s.t != null) {
              const _e = he({ v: s.t });
              !Z.thicknesses.some((De) => he({ v: De }) === _e) && Z.thicknesses.length > 0 && (se.t = he({ v: Z.thicknesses[0] }));
            }
            if (Me.stockType === "linear" && s.w != null && Z.widths) {
              const _e = he({ v: s.w });
              !Z.widths.some((De) => he({ v: De }) === _e) && Z.widths.length > 0 && (se.w = he({ v: Z.widths[0] }));
            }
            if (Z.fullSizeOnly) {
              const _e = N(
                s,
                g,
                se.t != null ? se.t : s.t
              );
              se.fullStock = !0, _e && (se.l = _e.l, se.w = _e.w);
            } else s.fullStock && (se.fullStock = !1);
            P(s, se), qn(s, Z), Bn(s);
            const ze = v.inputShapes.value.indexOf(s);
            for (const _e of ["banding", "finish", "planing"]) {
              if (Et[_e] !== ze) continue;
              const De = tt(s, _e), Ze = _e === "banding" && !!ri(s);
              if (!De.options.length && !Ze) {
                Et[_e] = null;
                continue;
              }
              We(_e, De.options, De.labels, De.pricing);
            }
            return;
          }
        }
        if (o === "fullStock") {
          if (g !== !0 && ss(s))
            return;
          if (g === !0) {
            const Z = N(s);
            if (Z) {
              P(s, { fullStock: !0, l: Z.l, w: Z.w });
              return;
            }
          } else {
            P(s, { fullStock: !1, l: null, w: null });
            return;
          }
        }
        if ((o === "material" || o === "t") && s.fullStock) {
          const Z = N(
            s,
            o === "material" ? g : void 0,
            o === "t" ? g : void 0
          );
          if (Z) {
            P(s, { [o]: g, l: Z.l, w: Z.w });
            return;
          }
        }
        if (s.isNew)
          if (w)
            s.isNew = !1;
          else {
            xi(s, o, g);
            return;
          }
        let W;
        if (o.includes(".")) {
          const Z = o.split("."), se = Z[0], ze = Z.slice(1).join("."), De = { ...s[se] || {} };
          xi(De, ze, g), W = { [se]: De };
        } else
          W = { [o]: g };
        P(s, W), o === "t" && Me.stockType === "linear" && Pe.value?.length && s.material && Bt(() => {
          const Z = ns(s);
          if (Z.length > 0 && s.w != null) {
            const se = he({ v: s.w });
            Z.some((ze) => he({ v: ze }) === se) || P(s, { w: he({ v: Z[0] }) });
          }
        });
      } catch (d) {
        console.error("[CHECKOUT] Error updating field:", d);
      }
    }, jl = () => {
    }, Bl = (s, o) => {
      s?.isNew && (s.isNew = !1), s.validate({ fields: [o] }), ["l", "w", "t"].includes(o) && Xi(s);
    }, Xi = (s) => {
      if (Te.value && s && !s.isNew && !(!s.l && !s.w))
        try {
          const o = pf(s, Te.value);
          if (s.issues && (s.issues = s.issues.filter((g) => !g.category?.includes("part"))), !o.valid && o.violations.length > 0)
            for (const g of o.violations) {
              const d = mf(g), w = g.dimension === "longSide" ? "l" : g.dimension === "shortSide" ? "w" : null;
              new qt({
                item: s,
                type: "error",
                category: ["part"],
                field: w ? [[w]] : [],
                message: d,
                shouldTranslate: !1
              });
            }
        } catch (o) {
          console.error("[CHECKOUT] Error validating part:", o);
        }
    }, ql = (s) => {
      if (nn(ce, ["enable", "machining"]) && s?.machining) {
        for (const o in Gt)
          s.machining[o] && (Gt[o] = s.machining[o]);
        if (["holes", "hingeHoles"].forEach((o) => {
          s?.machining?.[o] && (Gt[o].enabled = s?.machining?.[o].enabled);
        }), s?.machining?.corners?.types?.length && (Gt.corners.enabled = !0, Gt.corners.types = s.machining.corners.types), s.banding && s?.options?.enable?.banding) {
          if (!c) return;
          Gt.banding = {
            enabled: !0
          }, c.options.length && (Gt.banding.options = c.options), c.labels.length && (Gt.banding.labels = c.labels), Is(c.pricing) && (Gt.banding.pricing = c.pricing);
        }
      }
    }, _l = (s = null) => {
      Ft.value = s, s && Ye(s) && s.l && s.w ? xt.value = !0 : alert(Ie("machining.enter_dimensions_first"));
    }, Rl = () => {
      xt.value = !1;
    }, li = G(!1), Ul = (s = null) => {
      Ft.value = s, s && (li.value = !0);
    }, Gl = () => {
      li.value = !1;
    }, es = (s) => {
      if (!s) return [];
      const o = s.stockId ?? s.stock?.id, g = o ? v.inputStock.value?.find((w) => String(w.id) === String(o)) : null;
      return (g?.extras?.customProducts ?? g?.material?.extras?.customProducts ?? []).length ? [] : [];
    }, zl = (s) => es(s).filter((o) => o.type === "machining"), ts = (s = []) => {
      if (He.value = [], ln.value = [], wt("t", !1), !!s.length) {
        for (const o of s)
          if (o?.t)
            if (typeof o.t == "string" && o.t.includes(",")) {
              const g = Ca(o.t, !0);
              g.length === 2 ? (Jl(g), wt("t", !0), o.t = He.value[0]) : be("error", "bonded thickness found which does not have 2 options");
            } else He.value.includes(o.t) || He.value.push(o.t);
        He.value.length > 1 && wt("t", !0);
      }
    }, oi = (s = []) => {
      if (it.value = [], !s.length) {
        wt("w", !1);
        return;
      }
      for (const o of s) {
        if (!o?.w) continue;
        const g = he({ v: o.w });
        it.value.includes(g) || it.value.push(g);
      }
      it.value.length >= 1 ? wt("w", !0) : wt("w", !1);
    }, Wl = (s) => {
      if (!s) return { thicknesses: [], bondedThicknesses: [] };
      if (!Pe.value?.length)
        return {
          thicknesses: He.value,
          bondedThicknesses: []
        };
      if (!s.material)
        return {
          thicknesses: He.value,
          bondedThicknesses: []
        };
      const o = Pe.value.find((w) => w.name === s.material);
      if (!o)
        return {
          thicknesses: He.value,
          bondedThicknesses: []
        };
      const g = [...o.thicknesses], d = [];
      for (let w = 0; w < g.length; w++) {
        const P = g[w], N = Ca(P), W = [];
        if (N.length) {
          for (const Z of N)
            g[w] = Z, W.push(w);
          w++;
        }
        W.length && d.push(W);
      }
      return {
        thicknesses: g,
        bondedThicknesses: d
      };
    }, ns = (s) => {
      if (!s) return [];
      if (!Pe.value?.length || !s.material)
        return it.value;
      const o = Pe.value.find((g) => g.name === s.material);
      if (!o)
        return it.value;
      if (s.t != null && v.inputStock?.value?.length) {
        const g = he({ v: s.t }), d = /* @__PURE__ */ new Set();
        for (const w of v.inputStock.value)
          w.material?.toUpperCase() === s.material && he({ v: w.t }) === g && w.w != null && d.add(he({ v: w.w }));
        if (d.size > 0)
          return Array.from(d).sort((w, P) => w - P);
      }
      return o.widths || it.value;
    }, Kl = (s) => s === "banding" ? c : s === "finish" ? m : s === "planing" ? A : null, Ia = (s, o) => hl(Fa(s?.stock?.db_id) || null, o), ri = (s) => Fd(Fa(s?.stock?.db_id) || null), as = (s) => {
      switch (s) {
        case "banding":
          return U.groups;
        case "finish":
          return X.groups;
        case "planing":
          return de.groups;
        default:
          return;
      }
    }, is = () => v.inputStock.value.some((s) => Ld(s)), tt = (s, o) => {
      const g = Kl(o), d = as(o), w = g?.formulas, P = {
        options: g?.options ?? [],
        labels: g?.labels ?? [],
        pricing: g?.pricing ?? {},
        ...w && { formulas: w },
        displayNames: g?.displayNames ?? {},
        ...d?.length && { locationGroups: d }
      }, N = { options: [], labels: [], pricing: {}, displayNames: {} };
      if (!s?.material) return P;
      const W = Ia(s, o);
      if (!W)
        return g?.containsCatalogueLinked || is() ? N : P;
      const Z = W.code || W.name, se = W.groups;
      if (se && se.length > 0) {
        const ra = as(o) || [], ua = {};
        for (const Tt of se)
          typeof Tt.price == "number" && (ua[Tt.id] = Tt.price);
        const fs = ra.filter((Tt) => ua[Tt.id] !== void 0).map((Tt) => ({ ...Tt, price: ua[Tt.id] })), ps = {}, gs = [], ms = {}, mi = {}, hi = W.pricingFormula;
        for (const Tt of fs) {
          const Na = `${Z}|${Tt.id}`;
          ps[Na] = Tt.price, gs.push(Na), Tt.label && (ms[Na] = Tt.label), typeof hi == "string" && hi.trim() && (mi[Na] = hi.trim());
        }
        const yo = [o.charAt(0).toUpperCase() + o.slice(1)];
        return {
          options: [gs],
          labels: yo,
          pricing: ps,
          ...Object.keys(mi).length && { formulas: mi },
          displayNames: ms,
          locations: [],
          // empty so render path applies hideIndividualLocations filter
          locationGroups: fs
        };
      }
      const ze = Uf(W, g, Z), _e = W.labels?.length ? W.labels : [o.charAt(0).toUpperCase() + o.slice(1)], De = Ed(W, o) ? [] : Aa(ze), Ze = W.displayNames && typeof W.displayNames == "object" ? { ...W.displayNames } : { ...g?.displayNames ?? {} };
      W.code && W.name && W.code !== W.name && (Ze[W.code] = W.name);
      const Xt = { ...w || {} }, oa = W.pricingFormula;
      if (typeof oa == "string" && oa.trim()) {
        const ra = oa.trim();
        for (const ua of Object.keys(ze)) Xt[ua] = ra;
      }
      return {
        options: De,
        labels: _e,
        pricing: ze,
        ...Object.keys(Xt).length && { formulas: Xt },
        displayNames: Ze,
        locations: W.locations?.length ? W.locations : void 0
      };
    }, ui = (s, o) => tt(s, o).options, ss = (s) => !s?.material || !Pe.value?.length ? !1 : !!Pe.value.find((g) => g.name === s.material)?.fullSizeOnly, sa = (s, o) => {
      if (!o.fullSizeOnly) return;
      const g = s.t, d = v.inputStock.value.find((w) => w.material === o.name && (g == null || he({ v: w.t }) === he({ v: g })));
      s.fullStock = !0, d && (s.l = he({ v: d.l }), s.w = he({ v: d.w }));
    }, Hl = (s) => {
      const o = { banding: !1, finish: !1, planing: !1, machining: !1 };
      if (!s?.material || !(c?.containsCatalogueLinked || m?.containsCatalogueLinked || A?.containsCatalogueLinked || is())) return o;
      const d = Fa(s?.stock?.db_id), w = Ja(d || null) || {};
      return {
        banding: !w.banding,
        finish: !w.finish,
        planing: !w.planing,
        machining: !w.machining
      };
    }, ls = (s) => {
      if (s?.stock?.some((o) => o?.material)) {
        Pe.value = [], He.value = [], ln.value = [];
        const o = /* @__PURE__ */ new Map();
        for (const w of s.stock) {
          if (!w.material) continue;
          const P = Ea(w), N = w.name || w.customData?.stockName || w.material || P;
          o.has(P) ? w.fullSizeOnly && (o.get(P).fullSizeOnly = !0) : o.set(P, {
            displayName: N,
            db_id: w.db_id,
            code: w.code,
            brand: w.brand,
            variant: w.variant,
            imageUrl: w.imageUrl,
            color: typeof w.color == "string" ? w.color : void 0,
            fullSizeOnly: !!w.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set()
          }), w.t != null && (typeof w.t == "string" && w.t.includes(",") ? o.get(P)?.thicknesses.add(w.t) : o.get(P)?.thicknesses.add(he({ v: w.t }))), Me.stockType === "linear" && w.w != null && o.get(P)?.widths.add(he({ v: w.w }));
        }
        const g = Array.from(o.entries()).map(([w, P]) => {
          const N = [], W = [];
          for (const Z of P.thicknesses)
            typeof Z == "string" && Z.includes(",") ? W.push(Z) : N.push(he({ v: Z }));
          return { name: w, sets: P, regularThicknesses: N, bondedStrings: W };
        });
        Pe.value = g.map(({ name: w, sets: P, regularThicknesses: N }) => {
          const W = {
            name: w,
            displayName: P.displayName,
            db_id: P.db_id,
            code: P.code,
            brand: P.brand,
            variant: P.variant,
            imageUrl: P.imageUrl,
            color: P.color,
            fullSizeOnly: P.fullSizeOnly,
            thicknesses: N.sort((Z, se) => Z - se)
          };
          return Me.stockType === "linear" && P.widths.size > 0 && (W.widths = Array.from(P.widths).sort((Z, se) => Z - se)), W;
        });
        const d = /* @__PURE__ */ new Set();
        for (const w of Pe.value)
          for (const P of w.thicknesses)
            d.add(he({ v: P }));
        He.value = Array.from(d).sort((w, P) => w - P);
        for (let w = 0; w < g.length; w++) {
          const { bondedStrings: P } = g[w], N = Pe.value[w];
          for (const W of P) {
            const Z = Ca(W, !0);
            if (Z.length !== 2) continue;
            const se = [];
            for (const ze of Z) {
              const _e = he({ v: ze });
              let De = He.value.findIndex((Ze) => he({ v: Ze }) === _e);
              De === -1 ? (He.value.push(_e), N.thicknesses.push(_e), De = He.value.length - 1) : N.thicknesses.some((Ze) => he({ v: Ze }) === _e) || N.thicknesses.push(_e), se.push(De);
            }
            ln.value.push(se);
          }
        }
        if (Me.stockType === "linear") {
          const w = /* @__PURE__ */ new Set();
          for (const P of Pe.value)
            if (P.widths)
              for (const N of P.widths)
                w.add(he({ v: N }));
          it.value = Array.from(w).sort((P, N) => P - N);
        }
        wt("material", xa(Pe.value)), He.value.length > 1 ? wt("t", !0) : wt("t", !1), Me.stockType === "linear" && it.value.length > 1 ? wt("w", !0) : Me.stockType === "linear" && wt("w", !1);
      } else
        ts(s.stock);
      Me.stockType === "linear" && !Pe.value?.length && oi(s.stock);
    }, Zl = (s) => {
      if (!s?.length) {
        Pe.value = [], He.value = [], it.value = [];
        return;
      }
      if (s.some((g) => g?.material)) {
        const g = /* @__PURE__ */ new Map();
        ln.value = [];
        for (const P of s) {
          if (!P.material) continue;
          const N = Ea(P), W = (P.material || N).toString();
          g.has(N) ? P.fullSizeOnly && (g.get(N).fullSizeOnly = !0) : g.set(N, {
            displayName: W,
            db_id: P.db_id,
            code: P.code,
            brand: P.brand,
            variant: P.variant,
            imageUrl: P.imageUrl,
            color: typeof P.color == "string" ? P.color : void 0,
            fullSizeOnly: !!P.fullSizeOnly,
            thicknesses: /* @__PURE__ */ new Set(),
            widths: /* @__PURE__ */ new Set()
          }), P.t != null && (typeof P.t == "string" && P.t.includes(",") ? g.get(N)?.thicknesses.add(P.t) : g.get(N)?.thicknesses.add(he({ v: P.t }))), Me.stockType === "linear" && P.w != null && g.get(N)?.widths.add(he({ v: P.w }));
        }
        const d = Array.from(g.entries()).map(([P, N]) => {
          const W = [], Z = [];
          for (const se of N.thicknesses)
            typeof se == "string" && se.includes(",") ? Z.push(se) : W.push(he({ v: se }));
          return { name: P, sets: N, regularThicknesses: W, bondedStrings: Z };
        });
        Pe.value = d.map(({ name: P, sets: N, regularThicknesses: W }) => {
          const Z = {
            name: P,
            displayName: N.displayName,
            db_id: N.db_id,
            code: N.code,
            brand: N.brand,
            variant: N.variant,
            imageUrl: N.imageUrl,
            color: N.color,
            fullSizeOnly: N.fullSizeOnly,
            thicknesses: W.sort((se, ze) => se - ze)
          };
          return Me.stockType === "linear" && N.widths.size > 0 && (Z.widths = Array.from(N.widths).sort((se, ze) => se - ze)), Z;
        });
        const w = /* @__PURE__ */ new Set();
        for (const P of Pe.value)
          for (const N of P.thicknesses)
            w.add(he({ v: N }));
        He.value = Array.from(w).sort((P, N) => P - N);
        for (let P = 0; P < d.length; P++) {
          const { bondedStrings: N } = d[P], W = Pe.value[P];
          for (const Z of N) {
            const se = Ca(Z, !0);
            if (se.length !== 2) continue;
            const ze = [];
            for (const _e of se) {
              const De = he({ v: _e });
              let Ze = He.value.findIndex((Xt) => he({ v: Xt }) === De);
              Ze === -1 ? (He.value.push(De), W.thicknesses.push(De), Ze = He.value.length - 1) : W.thicknesses.some((Xt) => he({ v: Xt }) === De) || W.thicknesses.push(De), ze.push(Ze);
            }
            ln.value.push(ze);
          }
        }
        if (Me.stockType === "linear") {
          const P = /* @__PURE__ */ new Set();
          for (const N of Pe.value)
            if (N.widths)
              for (const W of N.widths)
                P.add(he({ v: W }));
          it.value = Array.from(P).sort((N, W) => N - W);
        }
        wt("material", xa(Pe.value)), wt("t", He.value.length > 1), Me.stockType === "linear" && wt("w", it.value.length > 1);
      } else
        ts(s), Me.stockType === "linear" && oi(s);
    }, Jl = (s, o = null) => {
      if (!Array.isArray(s)) {
        be("error", "addBondedThicknesses expects an array");
        return;
      }
      const g = [];
      for (let d of s)
        ce.numberFormat === "decimal" && (d = parseFloat(d)), He.value.push(d), o && o.thicknesses.push(d), g.push(He.value.length - 1);
      ln.value.push(g);
    }, Ql = (s) => {
      const { thicknesses: o } = Wl(s);
      return o?.length ? o.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, Yl = (s) => {
      const o = ns(s);
      return o?.length ? o.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, Ca = (s, o = !1) => {
      if (typeof s == "string" && s.includes(",")) {
        const g = s.split(",");
        if (g.length === 2) {
          const d = parseFloat(g[0]), w = parseFloat(g[1]);
          !isNaN(d) && !isNaN(w) && w !== d * 2 && oe({
            type: "warning",
            message: `Bonded thickness "${s}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return o ? g.map((d) => he({ v: d })) : g;
      }
      return [];
    }, Xl = () => {
      Be.value ? to() : eo();
    }, eo = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Be.value = !0;
    }, to = () => {
      document.exitFullscreen && document.exitFullscreen(), Be.value = !1;
    }, no = () => {
      if (gt.value?.api?.whiteLabel) return !0;
      let s = !0;
      const o = document.querySelector("#smartcut-checkout a#credit");
      if (!o) return s = !1;
      const g = window.getComputedStyle(o);
      return g.display === "none" || g.display === "hidden" || g.opacity === "0" || g.color === "transparent" || g.position !== "absolute" || g.color !== "#4e4e4e" && g.color !== "rgb(78, 78, 78)" ? s = !1 : ($t.value = s, s);
    }, ci = F(() => typeof $e.findExtrasPrice == "function"), ao = F(() => ce.unitSystem === "imperial" ? "/ square ft" : "/ square m"), io = F(() => ce.unitSystem === "imperial" ? "/ ft" : "/ m"), os = (s, o) => {
      let g, d;
      switch (o) {
        case "banding":
          g = c.options, d = c.labels;
          break;
        case "finish":
          g = m.options, d = m.labels;
          break;
        case "planing":
          g = A.options, d = A.labels;
          break;
        default:
          g = [], d = [];
      }
      On(s, o, g, d);
    }, rs = (s) => {
      const o = Object.keys(s);
      return Math.max(...o.map((d) => d.split("|").length));
    }, la = (s, o, g) => {
      if (!s)
        return [];
      if (g > 0 && !o[g - 1])
        return [];
      const d = /* @__PURE__ */ new Set();
      for (const P of Object.keys(s)) {
        const N = P.split("|");
        if (N.length > g) {
          let W = !0;
          for (let Z = 0; Z < g; Z++) {
            const se = o[Z], ze = N[Z];
            if (se && se !== ze) {
              W = !1;
              break;
            }
          }
          W && d.add(N[g]);
        }
      }
      return Array.from(d);
    }, di = (s, o, g, d) => {
      const w = tt(s, o);
      return wi(s, o, g, (N, W) => {
        const Z = W.filter((se) => se?.trim()).join("|");
        return Z && w.pricing[Z] !== void 0 ? w.pricing[Z] : d ? d(N, W) : null;
      }, w.options, w.labels);
    }, so = (s, o, g) => {
      let d, w;
      switch (o) {
        case "banding":
          d = c.options, w = c.labels;
          break;
        case "finish":
          d = m.options, w = m.labels;
          break;
        case "planing":
          d = A.options, w = A.labels;
          break;
        default:
          d = [], w = [];
      }
      return wi(s, o, g, $e.findExtrasPrice, d, w);
    }, lo = G({}), oo = (s) => {
      const o = bt.value.findIndex((g) => g.shapeId === s.shapeId);
      o !== -1 ? bt.value[o] = s : bt.value.push(s), window.smartcutImages = bt.value;
    }, ro = (s) => {
      bt.value = bt.value.filter((o) => o.shapeId !== s), window.smartcutImages = bt.value;
    }, uo = (s) => {
      Fn.value = Fn.value === s ? null : s;
    }, fi = (s = 1) => {
      for (let o = s; o--; ) {
        let g = {
          l: null,
          w: Me.stockType === "linear" && it.value.length === 1 ? it.value[0] : null,
          t: He.value.length ? He.value[0] : null,
          q: 1,
          material: Pe.value?.length === 1 ? Pe.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (v.inputShapes.value.length > 0) {
          const w = v.inputShapes.value[v.inputShapes.value.length - 1];
          g.material = w.material, g.t = w.t, w.stock && (g.stock = { ...w.stock }), Me.stockType === "linear" && w.w && (g.w = w.w);
        }
        const d = K(g);
        d && (c?.labels?.length && On(d, "banding", c.options, c.labels), m?.labels?.length && On(d, "finish", m.options, m.labels), A?.labels?.length && On(d, "planing", A.options, A.labels));
      }
    }, La = (s = {}) => {
      const o = {
        q: 1,
        // Always set quantity to 1
        ...s
      }, g = K(o);
      return g && (Me.stockType === "linear" && it.value.length === 1 && !g.w && (g.w = it.value[0]), He.value.length && !g.t && (g.t = He.value[0]), Pe.value?.length === 1 && !g.material && (g.material = Pe.value[0].name), c?.labels?.length && On(g, "banding", c.options, c.labels), m?.labels?.length && On(g, "finish", m.options, m.labels), A?.labels?.length && On(g, "planing", A.options, A.labels)), g;
    }, co = (s) => {
      if (He.value.length)
        for (const o of s) {
          if (!o.t) continue;
          const g = He.value.findIndex(
            (P) => he({ v: P }) === o.t
          ), d = ln.value.find((P) => P.includes(g));
          if (!d) continue;
          const w = Math.min(
            ...d.map((P) => He.value[P])
          );
          he({ v: o.t }) > w && (o.q = Number(o.q) * (he({ v: o.t }) / w), o.notes = `Bond to form ${o.t.valueOf()}`, o.t = w);
        }
    }, us = () => {
      an(), Fe(null), Le.stockList.value = [], Le.shapeList.value = [], Le.cutList.value = [];
    }, pi = () => {
      v.inputShapes.value.length = 0, $e.inputType !== "formula" && Bt(() => fi());
    }, Fa = (s) => {
      if (s)
        return v.inputStock.value.find((o) => o.db_id === s);
    }, Bn = (s) => {
      s.extras && (s.extras.banding = null, s.extras.finish = null, s.extras.planing = null);
    }, fo = (s, o) => {
      const g = tt(s, o);
      return new Set(Object.keys(g.pricing || {}));
    }, po = (s) => {
      const o = { pruned: !1, types: /* @__PURE__ */ new Set() };
      if (!s?.extras) return o;
      const g = ["banding", "finish", "planing"];
      for (const d of g) {
        const w = s.extras[d];
        if (!w || Ia(s, d)?.sourceCatalogueKey) continue;
        const N = fo(s, d);
        if (w.faces)
          for (const W of ["a", "b"]) {
            const Z = w.faces[W];
            typeof Z == "string" && Z !== "" && !N.has(Z) && (w.faces[W] = "", o.pruned = !0, o.types.add(d));
          }
        if (w.sides)
          for (const W of ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]) {
            const Z = w.sides[W];
            typeof Z == "string" && Z !== "" && !N.has(Z) && (w.sides[W] = "", o.pruned = !0, o.types.add(d));
          }
      }
      return o;
    }, Ea = (s) => zf(s), go = (s, o) => {
      const g = s.toUpperCase();
      return v.inputStock.value.find((d) => Ea(d) === g && he({ v: d.t }) === o);
    }, qn = (s, o) => {
      const g = he({ v: s.t }), d = go(o.name, g);
      s.stock = {
        db_id: d?.db_id || o.db_id,
        code: d?.code || o.code,
        material: o.displayName || o.name,
        thickness: g
      };
    }, cs = () => {
      const s = /* @__PURE__ */ new Set();
      for (const o of v.inputShapes.value) {
        const g = o.stock, d = o.material?.toUpperCase();
        let w = null;
        if (g?.db_id) {
          const W = Fa(g.db_id);
          W && (w = Pe.value.find((Z) => Z.name === Ea(W))), w || (w = Pe.value.find((Z) => Z.db_id && Z.db_id === g.db_id));
        }
        if (!w && g?.code && (w = Pe.value.find((W) => W.code && W.code === g.code)), !w && d && (w = Pe.value.find((W) => W.name === d)), w)
          o.material = w.name, qn(o, w), o.t != null && !w.thicknesses.includes(he({ v: o.t })) && (o.t = null, o.stock = null, Bn(o)), sa(o, w);
        else {
          if ((g?.db_id || g?.code) && !Pe.value?.length)
            continue;
          if (Pe.value?.length === 1) {
            const W = Pe.value[0], Z = o.material !== W.name;
            o.material = W.name, W.thicknesses.includes(he({ v: o.t })) || (o.t = he({ v: W.thicknesses[0] })), qn(o, W), Z && Bn(o), sa(o, W);
          } else if (Pe.value?.length > 1 && o.t) {
            const W = Pe.value.find((Z) => Z.thicknesses.some((se) => he({ v: se }) === he({ v: o.t })));
            W ? (o.material !== W.name && Bn(o), o.material = W.name, qn(o, W), sa(o, W)) : (Bn(o), o.material = Pe.value[0].name, o.t = he({ v: Pe.value[0].thicknesses[0] }), qn(o, Pe.value[0]), sa(o, Pe.value[0]));
          } else Pe.value?.length > 1 ? (Bn(o), o.material = Pe.value[0].name, o.t = he({ v: Pe.value[0].thicknesses[0] }), qn(o, Pe.value[0]), sa(o, Pe.value[0])) : !o.t && v.inputStock.value[0]?.t && (o.t = he({ v: v.inputStock.value[0].t }));
        }
        const { pruned: P, types: N } = po(o);
        P && N.forEach((W) => s.add(W));
      }
      if (s.size > 0) {
        const o = [...s].join(", ");
        oe({
          type: "warning",
          message: `Some previously selected ${o} options are no longer available and have been cleared. Please review your selection.`
        });
      }
    }, mo = async () => {
      if (le(), be("calculating"), B.value) return !1;
      B.value = !0, ae.value = !1, cs();
      const s = await Qd({
        t: Ie,
        partTrim: ce.partTrim,
        maxShapes: ce.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: v.inputSaw.value,
        // Extras validation data
        bandingPricing: c.pricing,
        finishPricing: m.pricing,
        planingPricing: A.pricing,
        findExtrasPrice: $e.findExtrasPrice,
        getShapeExtrasPricing: (P, N) => tt(P, N).pricing,
        extrasValidationRules: Ot.value,
        extrasLocationGroups: {
          banding: U.groups,
          finish: X.groups,
          planing: de.groups
        },
        onLimit: () => {
          oe({
            type: "error",
            message: Ie("limits.max_parts") + " " + ce.maxParts
          });
        }
      });
      if (Te.value)
        for (const P of v.inputShapes.value)
          Xi(P);
      const o = v.inputShapes.value.flatMap((P) => P.issues || []).filter((P) => P.type === "error" && P.category?.includes("part") && !P.category?.includes("extras"));
      if (o.length > 0) {
        oe({
          type: "error",
          message: Ie("errors.validation.inputs_issue", { 0: "part" }),
          additional: o.map((P) => P.message)
        }), be("validation-error"), B.value = !1;
        return;
      }
      if (!s.valid) {
        be("validation-error"), B.value = !1;
        return;
      }
      us(), v.inputShapes.value.forEach((P, N) => {
        P.createId(N);
      }), v.inputStock.value.forEach((P, N) => {
        P.createId(N);
      });
      const g = v.inputShapes.value.map((P) => fe(P)).filter(Boolean);
      if (g.length !== v.inputShapes.value.length)
        return oe({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), B.value = !1, !1;
      co(g), at.value && be("log", [
        "SmartCut - calculating",
        "stock",
        v.inputStock.value.map((P) => ({ l: P.l, w: P.w })),
        "parts",
        g.map((P) => ({ l: P.l, w: P.w }))
      ]);
      const d = {
        inputSaw: v.inputSaw.value.toData(),
        inputShapes: g.map((P) => P.toData()),
        inputStock: v.inputStock.value.map((P) => Wf(P.toData())),
        inputUserGroups: En.value ? v.inputUserGroups.value.map((P) => P.toData()) : [],
        enableEvo: !0,
        useInventory: !1,
        domain: kn,
        extrasOptions: ke(),
        source: "checkout",
        sourceVersion: "4.2.0"
      };
      if (Oe.value?.enabled && Oe.value?.rules?.length > 0) {
        const P = nf(
          Oe.value.rules,
          v.inputShapes.value.map((N) => N.toData())
        );
        if (!P.valid) {
          for (const N of P.errors) {
            const W = N.partName ? `Part "${N.partName}"` : `Part ${N.partIndex + 1}`;
            oe({
              type: "error",
              message: `${W}: ${N.message}`
            });
          }
          B.value = !1;
          return;
        }
      }
      be("before-calculate", d);
      const w = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: d,
          error: null
        }
      });
      if (window.dispatchEvent(w), w.defaultPrevented) {
        w.detail.error && oe({
          type: "error",
          message: w.detail.error
        }), B.value = !1;
        return;
      }
      await Pt.connect(), Pt.emit("calculate", d);
    }, gi = (s, o) => {
      if (wt(s, !1), !s || !o || !o?.[s] || !nn(ce, ["enable", s]))
        return;
      const g = [s, "pricing"];
      if (!Cs(o, g)) {
        be("error", `${g.join(".")} not found in sent data`);
        return;
      }
      const d = nn(o, g);
      if (typeof d != "object") {
        be("error", `${g.join(".")} data must be an object`);
        return;
      }
      if (!Is(d)) {
        be("error", `if provided, ${g.join(".")} data must contain some values`);
        return;
      }
      const w = Object.keys(d), P = Object.values(d);
      if (!w.length) {
        be("error", `no ${g.join(".")} pricing found`);
        return;
      }
      const N = /,/;
      for (const Ze of w)
        if (N.test(Ze)) {
          be("error", `${g} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (P.some((Ze) => isNaN(Ze))) {
        be("error", `${g} values must be a number`);
        return;
      }
      const W = rs(d), Z = [s, "labels"];
      let se = [];
      if (Cs(o, Z))
        se = nn(o, Z);
      else {
        be("error", `${Z.join(".")} not found`);
        return;
      }
      if (!se) {
        be("error", `${Z.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(se)) {
        be("error", `${Z.join(".")} data must be an array`);
        return;
      }
      if (!se?.length) {
        be("error", `if provided, ${Z.join(".")} data must contain values`);
        return;
      }
      if (se.length !== W) {
        be("error", `${Z.join(".")} length (${se.length}) must match the number of levels in ${g.join(".")} (${W})`);
        return;
      }
      const ze = nn(o, [s, "displayNames"]) || void 0, _e = nn(o, [s, "formulas"]), De = !!nn(o, [s, "containsCatalogueLinked"]);
      switch (s) {
        case "banding": {
          c.labels = se, c.pricing = d, c.displayNames = ze || {}, c.containsCatalogueLinked = De, c.formulas = _e;
          const Ze = Aa(d);
          c.options = Ze, We("banding", Ze, se, d, ze);
          break;
        }
        case "finish": {
          m.labels = se, m.pricing = d, m.displayNames = ze || {}, m.containsCatalogueLinked = De, m.formulas = _e;
          const Ze = Aa(d);
          m.options = Ze, We("finish", Ze, se, d, ze);
          break;
        }
        case "planing": {
          A.labels = se, A.pricing = d, A.displayNames = ze || {}, A.containsCatalogueLinked = De, A.formulas = _e;
          const Ze = Aa(d);
          A.options = Ze, We("planing", Ze, se, d, ze);
          break;
        }
      }
      if (z.value = ke(), wt(s, !0), !!v.inputShapes.value?.length)
        for (const Ze of v.inputShapes.value)
          os(Ze, s);
    }, Aa = (s) => {
      const o = [], g = Object.keys(s), d = rs(s);
      for (let w = d; w--; ) o.push(/* @__PURE__ */ new Set());
      for (const w of g) {
        const P = w.split("|");
        d > 1 && P.length === 1 || P.forEach((N, W) => {
          W < d && o[W].add(N);
        });
      }
      for (let w = 0; w < d; w++)
        o[w] = Array.from(o[w]);
      return o;
    }, $a = (s, o) => {
      if (!o) return;
      s !== "info" && Object.keys(Et).forEach((d) => {
        d !== s && d !== "info" && (Et[d] = null);
      });
      const g = v.inputShapes.value.indexOf(o);
      if (Et[s] === g)
        Ft.value = null, Et[s] = null, lo.value[s] = void 0;
      else if (Ft.value = o, Et[s] = g, s !== "info") {
        const d = tt(o, s);
        d.options.length && We(
          s,
          d.options,
          d.labels,
          d.pricing
        );
      }
    }, ds = (s) => {
      at.value && be("log", ["load event received"]), k.value && ho(s.detail);
    }, ho = (s) => {
      if (at.value && be("log", ["loading parts..."]), !s || !s?.inputs?.parts?.length) {
        at.value && be("log", ["could not find any parts to import"]);
        return;
      }
      v.inputShapes.value.length = 0;
      let o = 0;
      for (const d of s.inputs.parts) {
        const w = La(d);
        w ? w.issues?.length && at.value && be("log", [`SmartCut - issues found while importing part at index ${o}`, w.issues]) : at.value && be("log", [`SmartCut - error loading part at index ${o}`, d]), o++;
      }
      v.inputShapes.value.flatMap((d) => Mi(d.issues)).length && oe({
        type: "error",
        message: Ie("errors.general.issues_found")
      }), at.value && be("log", [`loaded ${v.inputShapes.value.length} parts`]);
    }, vo = (s) => {
      v.inputShapes.value.length = 0, Bt(() => {
        for (const o of s)
          o.t = v.inputStock.value?.[0]?.t ?? null, Me.stockType === "linear" && it.value.length === 1 && !o.w && (o.w = it.value[0]), La(o);
      });
    };
    st(() => $e.inputStock, (s) => {
      if (us(), Array.isArray(s) || console.warn("SmartCut - stock must be passed as an array"), !s?.length) return;
      v.inputStock.value.length = 0;
      const o = s.map((g) => g.toData());
      Zl(o);
      for (const g of s)
        ie({
          ...g.toData(),
          autoAdd: !0,
          q: 1
        }) || (console.error("Failed to add stock item:", g), oe({
          type: "error",
          message: "Failed to add some stock items due to validation errors"
        }));
      if (v.inputStock.value.length) {
        v.inputShapes.value.length || $e.inputType !== "formula" && Bt(() => {
          v.inputShapes.value.length || fi();
        });
        const g = q(v.inputSaw.value);
        g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), oe({
          type: "error",
          message: Ie("errors.validation.stock_issue"),
          additional: g.map((d) => d.message)
        }));
      }
    }, { immediate: !0 }), st(v.inputShapes, (s) => {
      be("inputs-changed"), s.forEach((o) => {
        Me.stockType === "linear" && it.value.length && (!o.w || !it.value.includes(he({ v: o.w }))) && (o.w = it.value[0]);
        const g = Pe.value.find((d) => d.name === o.material);
        g && (g.thicknesses.includes(he({ v: o.t })) || (o.t = he({ v: g.thicknesses[0] })));
      });
    }, { deep: !0 }), st(() => Ue.value.length, (s, o) => {
      if (on.value) {
        if (s > o) {
          const g = Math.ceil(s / Xe.value);
          Ke.value < g && (Ke.value = g);
        } else if (s < o) {
          const g = Math.ceil(s / Xe.value);
          Ke.value > g && (Ke.value = Math.max(1, g));
        }
      }
    }), st(() => ce.numberFormat, (s) => {
      $(s);
    }), st(v.inputStock, (s) => {
      Me.stockType === "linear" && oi(s.map((o) => o.toData()));
    }, { deep: !0 }), st(() => Me, (s) => {
      v.inputSaw.value = new cn(s);
    }, { deep: !0 }), bn(async () => {
      if (C.value) return;
      C.value = !0;
      const s = new URL(window.location.href), o = s.searchParams.toString(), g = s.origin + s.pathname + (o ? `?${o}` : "");
      mt.value !== g && pi(), mt.value = g, Lt.value = ce.locale, await Pt.connect(), Pt.emit("getUserFromDomain"), window.addEventListener("smartcut/load", ds);
    });
    const bo = () => {
      Pt && Pt.disconnect();
    };
    return Qa(() => {
      window.removeEventListener("smartcut/load", ds), bo(), delete window.smartcutCheckout;
    }), n({
      init: Vl,
      clear: pi,
      getAvailablePricingOptions: la,
      getExtrasPrice: so,
      formatPrice: $e.formatPrice,
      findExtrasPrice: $e.findExtrasPrice,
      inputShapes: v.inputShapes,
      initExtrasOptions: os,
      createAndAddInputShape: La,
      initMaterialsThicknesses: ls
    }), (s, o) => {
      const g = Dn("FontAwesomeIcon");
      return O(), D("div", Wp, [
        at.value ? (O(), Ee(L(r), {
          key: 0,
          title: "Ecommerce Calculator Debug",
          data: [{
            inputStock: L(v).inputStock.value.map((d) => ({ name: L(Jn)(d).fullLabel, materialKey: d.material, db_id: d.db_id || null, code: d.code || null, l: d.l, w: d.w, t: d.t, db_sawId: d.db_sawId || null, stockExtras: L(Ja)(d) })),
            materials: Pe.value.map((d) => ({ name: L(Jn)(d).fullLabel, materialKey: d.name, thicknesses: d.thicknesses, db_id: d.db_id, code: d.code })),
            inputShapesStockRefs: L(v).inputShapes.value.map((d) => ({ material: d.material || "?", t: d.t, stock: d.stock || null })),
            saw: {
              inputSaw: L(v).inputSaw.value ? {
                name: L(v).inputSaw.value.name || null,
                db_id: L(v).inputSaw.value.db_id || null,
                stockType: L(v).inputSaw.value.stockType || null,
                bladeWidth: L(v).inputSaw.value.bladeWidth ?? null,
                bladeWidthEnd: L(v).inputSaw.value.bladeWidthEnd ?? null,
                cutPreference: L(v).inputSaw.value.cutPreference || null
              } : null,
              stockSawIds: L(v).inputStock.value.map((d) => ({ name: L(Jn)(d).fullLabel, db_sawId: d.db_sawId || null })),
              resultSaw: L(Le).saw ? { name: L(Le).saw.name || null, db_id: L(Le).saw.db_id || null } : null
            },
            localStorage: { inputStock: Al.value, stockFilterSelections: $l.value }
          }],
          paths: ["ecommerce-calculator"],
          root: !1
        }, null, 8, ["data"])) : ne("", !0),
        k.value ? ne("", !0) : (O(), Ee(pl, {
          key: 1,
          size: "large",
          label: "Loading...",
          block: ""
        })),
        k.value ? (O(), D("section", {
          key: 2,
          id: "smartcut-checkout",
          class: nt(["smartcut-content", { fullscreen: Be.value }]),
          style: Jt(Nl.value)
        }, [
          Ft.value?.machining && xt.value ? (O(), Ee(L(i), {
            key: 0,
            "input-shape": Ft.value,
            "onUpdate:inputShape": o[0] || (o[0] = (d) => Ft.value = d),
            translate: !0,
            options: Gt,
            "find-extras-price": e.findExtrasPrice,
            "get-extras-price": L(wi),
            "get-available-pricing-options": la,
            "format-price": e.formatPrice,
            "custom-machining-products": zl(Ft.value),
            onClose: Rl
          }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price", "custom-machining-products"])) : ne("", !0),
          Ft.value && li.value ? (O(), Ee(L(l), {
            key: 1,
            "input-shape": Ft.value,
            "onUpdate:inputShape": o[1] || (o[1] = (d) => Ft.value = d),
            products: es(Ft.value),
            "find-extras-price": e.findExtrasPrice,
            "format-price": e.formatPrice,
            onClose: Gl
          }, null, 8, ["input-shape", "products", "find-extras-price", "format-price"])) : ne("", !0),
          Se.value && !e.readonly ? (O(), D("button", {
            key: 2,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: o[2] || (o[2] = (d) => Xl())
          }, [
            ot(g, { icon: ["fass", "expand"] }),
            _t(" " + me(L(Ie)("general.full_screen")), 1)
          ])) : ne("", !0),
          Qi.value ? (O(), D("a", {
            key: 3,
            id: "credit",
            style: Ml,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, me(L(kr)(L(Ie)("general.powered_by"))), 1)) : ne("", !0),
          H("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Jt({ "grid-template-columns": na.value })
          }, [
            L(v).inputShapes.value.length ? (O(), D("div", Kp, [
              o[7] || (o[7] = H("div", { class: "cell id" }, null, -1)),
              (O(!0), D(Ct, null, Kt(yt.value, (d) => (O(), D("div", {
                key: d.name,
                class: nt(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(d.name) || d.type === "boolean" }])
              }, me(L(Ie)(d.label)), 3))), 128)),
              at.value ? (O(), D("div", Hp, " Info ")) : ne("", !0),
              o[8] || (o[8] = H("div", { class: "cell del" }, null, -1))
            ])) : ne("", !0),
            (O(!0), D(Ct, null, Kt(ii.value, (d, w) => (O(), D("div", {
              key: d.autoId,
              class: nt(["row inputs", { "group-pickable": En.value, "row--readonly": !!d.readonly }])
            }, [
              H("div", {
                class: nt(["cell", { clickable: En.value }]),
                onClick: (P) => En.value && Xn(d)
              }, [
                H("div", {
                  class: "id",
                  style: Jt({
                    background: ce.colors.partA,
                    color: ce.colors.text
                  })
                }, me(si.value + w + 1), 5)
              ], 10, Zp),
              (O(!0), D(Ct, null, Kt(yt.value, (P) => (O(), D("div", {
                key: P.name,
                class: "cell"
              }, [
                d ? (O(), Ee(zp, {
                  key: 0,
                  field: P,
                  item: d,
                  index: w,
                  "type-prefix": "part",
                  readonly: e.readonly || !!d.readonly,
                  "number-format": ce.numberFormat,
                  "orientation-model": ce.orientationModel,
                  "stock-grain": L(Q)(d),
                  "material-options": Pe.value?.map((N) => ({ label: N.displayName || N.name, value: N.name })) || [],
                  "material-items": Pe.value?.map((N) => ({
                    name: N.name,
                    brand: N.brand,
                    variant: N.variant,
                    finish: N.finish,
                    code: N.code,
                    displayName: N.displayName,
                    imageUrl: N.imageUrl,
                    color: N.color,
                    colorHex: N.colorHex
                  })) || [],
                  "thickness-options": P.name === "t" ? Ql(d) : [],
                  "width-options": P.name === "w" && Me.stockType === "linear" ? Yl(d) : [],
                  "banding-enabled": Et.banding === w ? d : null,
                  "full-stock-disabled": d.fullStock && !["material", "t", "q", "fullStock"].includes(P.name) || P.name === "fullStock" && ss(d),
                  "material-extras-disabled": Hl(d),
                  onUpdate: (N) => Dl(d, P.propertyPath || P.fieldMap || P.name, N),
                  onValidation: o[3] || (o[3] = (N, W) => jl()),
                  onBlur: () => Bl(d, P.name),
                  onOpenBanding: (N) => $a("banding", d),
                  onOpenMachining: (N) => _l(d),
                  onOpenCustomProducts: (N) => Ul(d),
                  onOpenFinish: (N) => $a("finish", d),
                  onOpenPlaning: (N) => $a("planing", d),
                  onOpenImageUpload: (N) => uo(w)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "material-items", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenCustomProducts", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : ne("", !0)
              ]))), 128)),
              at.value ? (O(), D("div", Jp, [
                H("button", {
                  class: nt(["c-btn", { selected: Et.info === w }]),
                  type: "button",
                  onClick: (P) => $a("info", d)
                }, " i ", 10, Qp)
              ])) : ne("", !0),
              H("div", Yp, [
                H("button", {
                  disabled: L(v).inputShapes.value.length <= 1 || e.readonly || !!d.readonly,
                  type: "button",
                  class: "c-btn delete",
                  "aria-label": `${L(Ie)("actions.remove")} ${L(Oi)(L(Ie)("woodwork.part"))}`,
                  onClick: (P) => L(S)(d.autoId)
                }, [
                  ot(g, { icon: ["fass", "trash"] })
                ], 8, Xp)
              ]),
              ot(L(a), {
                item: d,
                "num-columns": It.value
              }, null, 8, ["item", "num-columns"]),
              Et.banding === w && ci.value && (ui(d, "banding").length > 0 || ri(d)) ? (O(), Ee(Ei, {
                key: "banding-" + (d?.material || ""),
                shape: d,
                "shape-index": w,
                "extra-type": "banding",
                "extra-label": "banding",
                "price-label": io.value,
                "extra-keys": c.keys,
                "all-options": tt(d, "banding").options,
                pricing: tt(d, "banding").pricing,
                formulas: tt(d, "banding").formulas,
                "display-names": tt(d, "banding").displayNames,
                labels: tt(d, "banding").labels,
                locations: tt(d, "banding").locations || U.locations,
                "location-groups": tt(d, "banding").locationGroups || [],
                "catalogue-key": ri(d) || "",
                "catalogue-max-gap": U.maxGap,
                "extra-name": Ia(d, "banding")?.name,
                "price-per-length": Ia(d, "banding")?.price,
                "user-friendly-field-map": L(Si),
                "part-columns": It.value,
                "format-price": e.formatPrice,
                "find-extras-price": $e.findExtrasPrice,
                "get-price": di,
                "orientation-model": ce.orientationModel,
                "stock-grain": L(Q)(d),
                "get-available-pricing-options": la,
                "allow-custom-names": !1,
                debug: at.value
              }, null, 8, ["shape", "shape-index", "price-label", "extra-keys", "all-options", "pricing", "formulas", "display-names", "labels", "locations", "location-groups", "catalogue-key", "catalogue-max-gap", "extra-name", "price-per-length", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ne("", !0),
              Et.finish === w && ui(d, "finish").length > 0 && ci.value ? (O(), Ee(Ei, {
                key: "finish-" + (d?.material || ""),
                shape: d,
                "shape-index": w,
                "extra-type": "finish",
                "extra-label": "finish",
                "price-label": ao.value,
                "extra-keys": m.keys,
                "all-options": tt(d, "finish").options,
                pricing: tt(d, "finish").pricing,
                formulas: tt(d, "finish").formulas,
                "display-names": tt(d, "finish").displayNames,
                labels: tt(d, "finish").labels,
                locations: tt(d, "finish").locations || X.locations,
                "location-groups": tt(d, "finish").locationGroups || [],
                "user-friendly-field-map": L(Si),
                "part-columns": It.value,
                "format-price": e.formatPrice,
                "find-extras-price": $e.findExtrasPrice,
                "get-price": di,
                "orientation-model": ce.orientationModel,
                "stock-grain": L(Q)(d),
                "get-available-pricing-options": la,
                "allow-custom-names": !1,
                debug: at.value
              }, null, 8, ["shape", "shape-index", "price-label", "extra-keys", "all-options", "pricing", "formulas", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ne("", !0),
              Et.planing === w && ui(d, "planing").length > 0 && ci.value ? (O(), Ee(Ei, {
                key: "planing-" + (d?.material || ""),
                shape: d,
                "shape-index": w,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": A.keys,
                "all-options": tt(d, "planing").options,
                pricing: tt(d, "planing").pricing,
                formulas: tt(d, "planing").formulas,
                "display-names": tt(d, "planing").displayNames,
                labels: tt(d, "planing").labels,
                locations: tt(d, "planing").locations || de.locations,
                "location-groups": tt(d, "planing").locationGroups || [],
                "user-friendly-field-map": L(Si),
                "part-columns": It.value,
                "format-price": e.formatPrice,
                "find-extras-price": $e.findExtrasPrice,
                "get-price": di,
                "orientation-model": ce.orientationModel,
                "stock-grain": L(Q)(d),
                "get-available-pricing-options": la,
                "allow-custom-names": !1,
                debug: at.value
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "formulas", "display-names", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain", "debug"])) : ne("", !0),
              Et.info === w ? (O(), D("div", {
                key: 4,
                id: "shape-info",
                style: Jt({ "grid-column-end": "span " + It.value })
              }, [
                H("div", null, me(d?.banding), 1),
                H("div", null, me(z.value?.banding?.options || "No options"), 1)
              ], 4)) : ne("", !0),
              Fn.value === w ? (O(), Ee(L(f), {
                key: 5,
                prefix: (w + 1).toString(),
                "unique-id": d.autoId,
                "shape-id": d.autoId,
                style: Jt({ "grid-column-end": "span " + It.value }),
                images: bt.value,
                debug: at.value,
                onUpdate: oo,
                onRemove: ro
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images", "debug"])) : ne("", !0)
            ], 2))), 128))
          ], 4),
          H("div", eg, [
            e.readonly ? ne("", !0) : (O(), D("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${L(Ie)("actions.add")} ${L(Oi)(L(Ie)("woodwork.part"))}`,
              onClick: o[4] || (o[4] = (d) => fi())
            }, [
              ot(g, { icon: ["fass", "plus-large"] }),
              _t(" " + me(`${L(Ie)("actions.add")} ${L(Oi)(L(Ie)("woodwork.part"))}`), 1)
            ], 8, tg)),
            H("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": L(Ie)("actions.calculate"),
              title: e.calculateDisabled && e.calculateDisabledReason ? e.calculateDisabledReason : void 0,
              disabled: !L(v).inputStock.value?.length || B.value || e.calculateDisabled,
              onClick: o[5] || (o[5] = (d) => mo())
            }, [
              ot(g, { icon: ["fass", "calculator"] }),
              _t(me(L(Ie)("actions.calculate")), 1)
            ], 8, ng),
            e.readonly ? ne("", !0) : (O(), D("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": L(Ie)("actions.clear"),
              onClick: o[6] || (o[6] = (d) => pi())
            }, [
              ot(g, { icon: ["fass", "trash"] })
            ], 8, ag)),
            H("div", ig, me(L(T)) + me(ce?.maxParts ? "/" + ce.maxParts : ""), 1)
          ]),
          En.value && !e.readonly ? (O(), Ee(L(p), {
            key: 4,
            ref_key: "groupsRef",
            ref: Yn,
            "selected-shape": An.value,
            "selected-shape-counter": $n.value,
            "stock-grain": ti.value,
            "format-options": ni.value,
            onHighlightShape: Sa,
            onClearHighlight: ai
          }, null, 8, ["selected-shape", "selected-shape-counter", "stock-grain", "format-options"])) : ne("", !0),
          on.value && Yt.value > 1 ? (O(), D("div", sg, [
            H("div", lg, [
              H("button", {
                type: "button",
                class: "c-btn",
                disabled: Ke.value === 1,
                onClick: aa
              }, [
                ot(g, { icon: ["fass", "chevrons-left"] })
              ], 8, og),
              H("button", {
                type: "button",
                class: "c-btn",
                disabled: Ke.value === 1,
                onClick: ia
              }, [
                ot(g, { icon: ["fass", "chevron-left"] })
              ], 8, rg),
              H("span", ug, me(Ke.value) + " / " + me(Yt.value), 1),
              H("button", {
                type: "button",
                class: "c-btn",
                disabled: Ke.value >= Yt.value,
                onClick: Ge
              }, [
                ot(g, { icon: ["fass", "chevron-right"] })
              ], 8, cg),
              H("button", {
                type: "button",
                class: "c-btn",
                disabled: Ke.value >= Yt.value,
                onClick: Nt
              }, [
                ot(g, { icon: ["fass", "chevrons-right"] })
              ], 8, dg)
            ])
          ])) : ne("", !0),
          xe.value && !e.readonly ? (O(), Ee(L(u), {
            key: 6,
            ref: "import",
            "number-format": ce.numberFormat,
            "custom-fields": qe.value,
            "banding-options": c.options,
            "banding-labels": c.labels,
            "finish-options": m.options,
            "finish-labels": m.labels,
            "show-template": ce.enable?.csvTemplate !== !1,
            onImport: vo
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels", "show-template"])) : ne("", !0),
          ea.value ? (O(), D("div", fg, [
            Nn.value ? (O(), D("div", pg, me(Nn.value), 1)) : ne("", !0),
            H("pre", gg, me(ta.value), 1)
          ])) : ne("", !0),
          (ce.enable?.diagram ? B.value && !L(ct).complete || L(ct).complete && !pe.value : B.value || L(ct).complete) ? (O(), D("div", mg, [
            ot(L(_), {
              size: 50,
              number: L(ct).shapeCount,
              complete: L(ct).complete,
              "show-number": ce.enable?.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : ne("", !0),
          Ya(H("div", hg, [
            L(ge)?.saw?.stockType !== "roll" ? (O(), D("div", vg, me(L(ge)?.stack?.number ? L(ge).stack.number : 1), 1)) : ne("", !0),
            Ae.value ? (O(), Ee(L(M), {
              key: 1,
              "element-id": "diagram",
              "number-format": ce.numberFormat,
              "decimal-places": ce.decimalPlaces,
              colors: ce.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])) : ne("", !0)
          ], 512), [
            [Ws, ce.enable?.diagram && L(ct).complete && pe.value]
          ]),
          Pa.value && ce.enable?.diagram && L(V).length > 1 && L(ct).complete ? (O(), Ee(L(J), {
            key: 9,
            display: !0,
            "use-stack": !0,
            "show-sorting": !1,
            onShow: L(Fe)
          }, null, 8, ["onShow"])) : ne("", !0),
          !Pa.value && ce.enable?.diagram && L(V).length > 1 && L(ct).complete ? (O(), Ee(L(ue), {
            key: 10,
            ref: "stockNavigation",
            "active-stock-id": L(ee),
            "stock-list": L(V),
            "primary-color": ce.colors.stock?.replace("#", ""),
            "secondary-color": ce.colors.partA?.replace("#", ""),
            onShowStock: L(Fe)
          }, null, 8, ["active-stock-id", "stock-list", "primary-color", "secondary-color", "onShowStock"])) : ne("", !0)
        ], 6)) : ne("", !0),
        at.value ? (O(), D("div", bg, [
          ot(L(r), {
            data: [L(v)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          o[9] || (o[9] = H("div", null, "Result data", -1)),
          ot(L(r), {
            data: [x.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : ne("", !0)
      ]);
    };
  }
}), Vg = /* @__PURE__ */ Qt(yg, [["__scopeId", "data-v-f61cfb20"]]);
export {
  sc as E,
  ei as F,
  ba as I,
  pl as L,
  xc as M,
  gl as O,
  ul as a,
  Ei as b,
  Tg as c,
  Md as d,
  $d as e,
  qf as f,
  Vg as g,
  xp as h,
  Mg as i,
  fl as j,
  Ag as k,
  $g as l,
  Eg as m,
  Jn as n,
  pd as o,
  Ar as r,
  Ng as s,
  zi as u
};

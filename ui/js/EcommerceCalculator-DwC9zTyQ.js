import { r as W, w as ze, c as L, k as ut, l as ot, n as mt, d as tt, b as Z, o as E, F as lt, q as qt, v as St, x as it, j as le, y as na, t as Ae, z as ia, s as Sn, h as cn, A as uo, B as fo, C as wt, D as po, E as pi, a as Ee, u as A, e as de, G as li, T as ho, H as go, f as mo, I as Xt, J as ri, K as Ki, i as Ge, L as Gn, M as vo, N as At, O as bo, P as ii, Q as yo, g as An } from "./vendor-vue-CjllP6Mc.js";
import { b4 as Ne, b5 as Jt, aC as wo, aX as sa, b6 as Zt, b7 as Bn, b8 as aa, b9 as oa, ba as la, bb as ci, bc as on, bd as ms, be as So, bf as ko, bg as xo, bh as ra, bi as ca, bj as Li, bk as Co, bl as _n, bm as ui, bn as Oo, aV as Kn, aW as Zn, i as kn, aU as Rt, k as xn, j as rn, I as Ft, aG as Io, bo as vs, bp as Ao, aO as Pn, bq as Ln, aR as Fn, a$ as Tn, br as bs, bs as ys, bt as Po, bu as ws, o as Lo, K as Fo, aA as To, h as ua, az as da, bv as Eo, T as $o, bw as Mo, bx as No, ar as Bo, by as Vo, as as Do, au as Ro, aw as jo, av as qo, at as vn, ay as ve, ai as _e, bz as Go, bA as fa, bB as Dt, bC as Uo, bD as Ss, a as Ht, s as Wo, g as Fi, z as zo, f as Ho, bE as _o, bF as Zi, aQ as Ko, bG as Zo, bH as Jo, bI as Yo, bJ as Xo, bK as pa, bL as Qo, bM as el, bN as Ti, bO as ha, bP as tl, bQ as ga, bR as nl, bS as il, bT as sl, bU as al, bV as ol, bW as ll, bX as rl, bY as Ji, bZ as cl, b_ as ul, b$ as dl, c0 as fl, c1 as pl, c2 as Qt, c3 as Ei, c4 as hl, b1 as ln, c5 as ks, c6 as $i, c7 as gl, c8 as xs, b3 as Cs, b2 as Os, c9 as Mi, ca as Ni } from "./result.zod-CjJ6OKhV.js";
import { I as Vn, N as Jn, o as Y, l as ne, n as z, k as C, W as Is, H as Tt, X as ml, h as ue, i as Et, D as Ze, j as Pe, O as As, P as Yn, Q as vl, Y as bl, $ as Ps, a0 as yl, G as Xn, S as Bi, T as Vi, U as Di, a1 as wl, C as Me, a2 as Sl } from "./vendor-HGGdjwqM.js";
import { a as Ri, u as kl, l as ji, e as xl } from "./i18n-BfwcbnjK.js";
import "./vendor-i18next-CoOqf42x.js";
import { a as Cl, b as Ol, l as Lt, c as Yi, d as Xi, s as Qe, r as Pt, e as si, f as Il } from "./vendor-d3-DMTsxX1U.js";
import { a as Al } from "./vendor-lodash-B8VQpKjD.js";
import { o as Pl, f as Ll, s as Fl, a as Tl } from "./vendor-floating-ui-DZfk4g77.js";
import { t as be } from "./i18n-CYKv7Ga8.js";
import { _ as hi } from "./Launch-D8mb8-9D.js";
import { b as Dn } from "./environment-BeBZzWz6.js";
function ma(t, e = "cc") {
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
    for (const [r, p] of Object.entries(l))
      r in t && (a[p] = t[r]);
    for (const [r, p] of Object.entries(s))
      r in t && (a[p] = t[r]);
  } else {
    for (const [r, p] of Object.entries(l))
      p in t && (a[r] = t[p]);
    for (const [r, p] of Object.entries(s))
      p in t && (a[r] = t[p]);
  }
  return a;
}
const va = {
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
function El(t) {
  return t !== 0 && t !== 1 && t !== 2 ? !1 : va[t].sidesLMatchShapeL;
}
function $l(t) {
  return t !== 0 && t !== 1 && t !== 2 ? [] : va[t].affectedExtraTypes;
}
function ai(t = 0, e, n = null, i = null, s = null) {
  if (!Ne(n) && !Jt || i === "stock") return !1;
  let a, o;
  if (Ne(n) ? a = n.orientationLock : Jt(n) ? a = n.direction : i === "shape" && (a = s), t === 0 || Jt(n))
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
function Ml(t, e, n = null, i = null, s = null) {
  if (!Ne(n) || i === "shape") return !1;
  let a;
  return t === 0 || t === 1 || t === 2 ? ai(t, e, n, i, s) ? "cc" : !1 : a;
}
function Nl(t, e = []) {
  if (!t?.length) return [];
  const n = t.map((i) => i && typeof i.getType == "function" ? i : wo(i)).filter((i) => i instanceof sa);
  return e.length && Bl(n, e), n;
}
function Bl(t = [], e = []) {
  t.length && e.length && t.forEach((n) => {
    n.shapeIds = n.shapeIds.filter((i) => e.find((s) => s.autoId === i));
  });
}
let en = null;
if (Dn())
  try {
    en = require("~/helpers/applicationSettings").applicationSettings;
  } catch (t) {
    console.error("[useCrossPlatformStorage] Failed to load ApplicationSettings:", t);
  }
function En(t, e, n = {}) {
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
  if (!Dn()) {
    const o = W((() => {
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
    return ze(o, (l) => {
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
  if (Dn()) {
    if (!en)
      return console.error("[useCrossPlatformStorage] ApplicationSettings not available! Using in-memory fallback."), W(e);
    const o = W((() => {
      try {
        const l = en.getString(t);
        if (l)
          return i.read(l);
      } catch (l) {
        console.error("[useCrossPlatformStorage] Failed to load", t, "from ApplicationSettings:", l);
      }
      return e;
    })());
    return ze(o, (l) => {
      try {
        const r = i.write(l);
        en.setString(t, r);
      } catch (r) {
        console.error("[useCrossPlatformStorage] Failed to save", t, "to ApplicationSettings:", r);
      }
    }, { deep: !0 }), o;
  }
  return console.warn("[useCrossPlatformStorage] No storage available for key", t, "- using in-memory fallback"), W(e);
}
function Ls(t) {
  try {
    return Dn() ? en ? en.getString(t) : null : typeof window < "u" && window.localStorage ? localStorage.getItem(t) : null;
  } catch (e) {
    return console.error(`[getStorageValue] Error getting storage value for key ${t}:`, e), null;
  }
}
function Fs(t) {
  try {
    Dn() ? en && en.remove(t) : typeof window < "u" && window.localStorage && localStorage.removeItem(t);
  } catch (e) {
    console.error(`[removeStorageValue] Error removing storage value for key ${t}:`, e);
  }
}
const ba = "cle-extras-config", Vl = () => {
  try {
    const t = localStorage.getItem(ba);
    return t ? JSON.parse(t) : {};
  } catch {
    return {};
  }
}, Dl = (t) => {
  try {
    localStorage.setItem(ba, JSON.stringify(t));
  } catch {
  }
}, Rn = W(Vl()), Qi = (t, e) => {
  Rn.value[t] = e, Dl(Rn.value);
}, Yt = (t) => Rn.value[t] || null, Rl = () => Rn.value;
let Ts = !1;
const jl = () => {
  Ts || (Oo({
    getExtrasConfig: Yt,
    getAllExtrasConfigs: Rl,
    setExtrasConfig: Qi
  }), Ts = !0);
}, ql = (t, e) => {
  const n = Yt(t);
  if (!n || !n.options || n.options.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const i = n.options[0], s = Array.isArray(i) && typeof i[0] == "string" ? i : [];
  if (s.length === 0)
    return { cleanedCount: 0, invalidOptions: [] };
  const a = (r) => n.options.length > 1 ? r.includes("|") ? n.pricing && Object.keys(n.pricing).length > 0 ? Object.prototype.hasOwnProperty.call(n.pricing, r) ? !0 : Object.keys(n.pricing).some((x) => x.startsWith(r + "|") || x === r) : r.split("|").every((b, x) => {
    if (x >= n.options.length) return !1;
    const h = n.options[x];
    return Array.isArray(h) && typeof h[0] == "string" && h.includes(b);
  }) : n.options.some((p) => Array.isArray(p) && typeof p[0] == "string" && p.includes(r)) : s.includes(r), o = /* @__PURE__ */ new Set();
  let l = 0;
  return e.forEach((r) => {
    if (!r.extras?.[t]) return;
    const p = r.extras[t].sides || {};
    Object.entries(p).forEach(([x, h]) => {
      typeof h == "string" && h && !a(h) && (o.add(h), p[x] = "", l++);
    });
    const b = r.extras[t].faces || {};
    Object.entries(b).forEach(([x, h]) => {
      typeof h == "string" && h && !a(h) && (o.add(h), b[x] = "", l++);
    });
  }), {
    cleanedCount: l,
    invalidOptions: Array.from(o)
  };
}, Gl = (t) => {
  jl();
  const {
    shape: e,
    extraType: n,
    allOptions: i,
    labels: s,
    userFriendlyFieldMap: a,
    allowCustomNames: o,
    customNames: l = W([]),
    enablePricing: r = !1,
    pricing: p,
    locations: b = W([]),
    locationGroups: x = W([]),
    orientationModel: h = 0,
    getAvailablePricingOptions: O,
    getPrice: B,
    findExtrasPrice: J,
    formatPrice: N
  } = t, R = () => {
    const u = Yt(n), v = u?.options || i, $ = u?.labels || s;
    Zt(e.value, n, v, $, l.value);
  };
  R(), ze(
    () => e.value?.extras?.[n],
    (u) => {
      if (u) {
        const v = u?.sides || {}, $ = u?.options?.sides || {};
        let T = !1;
        for (const [q, ie] of Object.entries(v))
          if (typeof ie == "string") {
            if (ie.includes("|") && !$[q]) {
              T = !0;
              break;
            } else if (ie !== "" && !$[q]) {
              T = !0;
              break;
            }
          }
        T && R();
      }
    },
    { immediate: !1 }
  );
  const H = L(() => Rn.value[n] || null), U = L(() => {
    const v = H.value?.options || i;
    if (v.length > 1)
      return "multiple";
    const T = (v[0] || []).filter((xe) => typeof xe == "string"), q = (l.value || []).filter((xe) => typeof xe == "string"), Se = Array.from(/* @__PURE__ */ new Set([...T, ...q])).length;
    return Se === 0 ? "boolean" : Se === 1 ? "single" : "multiple";
  }), ye = L(() => ui(n)), X = L(() => b.value && b.value.length > 0 ? b.value.filter((u) => u !== "all" && u !== "faces" && u !== "sides") : ye.value), oe = L(() => X.value.filter((u) => Bn(u) === "face")), j = L(() => X.value.filter((u) => Bn(u) === "side")), G = L(() => oa(n)), P = L(() => aa(n)), S = L(() => la(n)), _ = () => H.value?.options && H.value.options.length > 1, Q = (u, v, $) => {
    const { singleOption: T = Ie(), operation: q } = $;
    switch (v) {
      case "boolean":
        return !!u;
      case "single":
        return T ? q === "process" || q === "set" ? u && T ? T : "" : u === T ? T : "" : !!u;
      case "multiple":
        return u || "";
      default:
        return u;
    }
  }, ee = (u, v, $) => Q(v, $, { operation: "process" }), ae = (u, v, $, T, q, ie) => {
    switch (ie) {
      case "boolean":
        _n(u, v, $, T, !!q);
        break;
      case "single": {
        const Se = Ie();
        _n(u, v, $, T, q ? Se : "");
        break;
      }
      case "multiple":
        _n(u, v, $, T, q || "");
        break;
    }
  }, $e = (u, v, $ = {}) => {
    const T = $.singleOption || Ie();
    return $.allowCustomNames, Q(u, v, {
      operation: "get",
      singleOption: T
    });
  }, K = (u, v, $, T) => {
    switch (T) {
      case "boolean":
        return !!u;
      case "single": {
        const q = Ie();
        if (q) {
          const ie = v.map((se) => on(e.value, n, se, $)), Se = ie.every((se) => se === q || se === !0), xe = ie.every((se) => !se || se === "");
          return Se ? q : xe ? "" : null;
        }
        return !!u;
      }
      case "multiple":
        return typeof u == "string" ? u : u || "";
      default:
        return u;
    }
  }, V = (u, v, $, T = !1) => {
    if (T)
      u.forEach((q) => Ce(q, v, $));
    else {
      const q = s[v] || "", ie = ee(q, $, U.value);
      u.forEach((Se) => {
        ae(e.value, n, Se, q, ie, U.value);
      });
    }
  }, D = (u, v) => {
    if (_()) {
      const $ = s[v] || "", T = u.map((xe) => {
        const se = on(e.value, n, xe, $);
        return se === !0 ? Fe(v)[0] || "" : String(se || "");
      }), q = T[0] || "";
      return T.every((xe) => xe === q) ? q : null;
    } else {
      const $ = s[v] || "";
      if (U.value === "single") {
        const q = Ie();
        if (q) {
          const ie = u.map((se) => on(e.value, n, se, $)), Se = ie.every((se) => se === q || se === !0), xe = ie.every((se) => !se || se === "");
          return Se ? q : xe ? "" : null;
        }
      }
      const T = ms(e.value, n, u, $, U.value);
      return U.value === "multiple" && T === !1 && u.every((ie) => {
        const Se = on(e.value, n, ie, $, U.value);
        return Se === "" || Se === !1 || Se === null || Se === void 0;
      }) ? "" : T;
    }
  }, re = (u) => {
    const { location: v, locationType: $ = "single", optionIndex: T, stateValue: q, isAggregate: ie = !1, customLabel: Se } = u, xe = Fe(T), se = xe.length > 1 ? "select" : "checkbox", We = ie ? Le(T, v && Ke(v) ? v : $) : Le(T, v), je = U.value === "multiple" && We.length === 1 && r && T > 0;
    if (je && We[0]) {
      if (ie) {
        let vt = [];
        $ === "all" ? vt = X.value : $ === "faces" ? vt = oe.value : $ === "sides" ? vt = j.value : v && Ke(v) && (vt = Re(v)), vt.forEach((mn) => {
          const Wn = Ue(mn, T);
          (!Wn || Wn !== We[0]) && Ce(mn, T, We[0]);
        });
      } else if (v) {
        const vt = Ue(v, T);
        (!vt || vt !== We[0]) && Ce(v, T, We[0]);
      }
    }
    const He = U.value === "multiple" && (We.length === 0 || je), qe = q !== void 0 ? q : v ? Ue(v, T) : null, Ct = se === "select" ? ct(v || $, T) : void 0, Ot = se === "checkbox" && xe.length === 1 ? xe[0] : void 0;
    let Cn, On;
    return se === "checkbox" && xe.length === 1 && (Cn = xe[0], On = ""), {
      inputType: se,
      // Alias for backward compatibility
      type: se,
      value: qe,
      options: Ct,
      disabled: He,
      label: Ot,
      indeterminate: qe === null && se === "checkbox",
      trueValue: Cn,
      falseValue: On
    };
  }, pe = (u, v, $) => re({
    locationType: u,
    optionIndex: v,
    stateValue: $,
    isAggregate: !0
  }), Ce = (u, v, $) => {
    const T = s[v] || "";
    if (_()) {
      const q = Oe(u, v);
      let ie;
      if (q === "checkbox") {
        const xe = Fe(v)[0];
        ie = $ ? xe : "";
      } else
        ie = $ || "";
      _n(e.value, n, u, T, ie);
    } else
      ae(e.value, n, u, T, $, U.value);
  }, Ue = (u, v) => {
    const $ = s[v] || "";
    if (_()) {
      const T = on(e.value, n, u, $);
      if (Oe(u, v) === "checkbox") {
        const Se = Fe(v)[0];
        return T === !0 || T === Se ? Se : "";
      } else
        return T || "";
    } else {
      const T = on(e.value, n, u, $, U.value);
      return $e(T, U.value);
    }
  }, et = (u, v) => {
    V(X.value, u, v, _());
  }, Je = (u) => {
    if (_()) {
      const v = s[u] || "", $ = X.value.map((ie) => {
        const Se = on(e.value, n, ie, v);
        return Se === !0 ? Fe(u)[0] || "" : String(Se || "");
      }), T = $[0] || "";
      return $.every((ie) => ie === T) ? T : null;
    } else {
      const v = s[u] || "", $ = ms(e.value, n, X.value, v, U.value);
      return K($, X.value, v, U.value);
    }
  }, Ut = () => {
    Li(e.value, n, X.value, U.value), ot(e);
  }, ft = (u) => u === "faces" ? {
    locations: oe.value,
    isSupported: G.value
  } : {
    locations: j.value,
    isSupported: P.value
  }, $t = (u, v, $) => {
    const { locations: T, isSupported: q } = ft(u);
    q && V(T, v, $, _());
  }, kt = (u, v) => {
    const { locations: $, isSupported: T } = ft(u);
    return T ? D($, v) : null;
  }, nt = (u) => {
    const { locations: v, isSupported: $ } = ft(u);
    $ && (Li(e.value, n, v, U.value), ot(e));
  }, xt = (u, v) => {
    const { isSupported: $ } = ft(u);
    if (!$) return { type: "checkbox", value: !1 };
    const T = kt(u, v);
    return pe(u, v, T);
  }, st = (u, v) => {
    $t("faces", u, v);
  }, fe = (u, v) => {
    $t("sides", u, v);
  }, Ye = (u) => kt("faces", u), De = (u) => kt("sides", u), Wt = () => {
    nt("faces");
  }, tn = () => {
    nt("sides");
  }, Mt = (u) => x.value.find((v) => v.id === u), Ke = (u) => ["all", "faces", "sides"].includes(u) ? !1 : !u.includes("."), Re = (u) => {
    const v = Mt(u);
    return v ? v.locations.filter(($) => X.value.includes($)) : [];
  }, w = (u, v, $) => {
    const T = Re(u);
    T.length !== 0 && (T.forEach((q) => Ce(q, v, $)), ot(e));
  }, y = (u, v) => {
    const $ = Re(u);
    if ($.length === 0) return null;
    const T = D($, v);
    return !_() && (T === null || T === !1 || T === "") ? "" : T;
  }, m = (u) => {
    const v = Re(u);
    v.length !== 0 && (Li(e.value, n, v, U.value), ot(e));
  }, I = (u, v) => {
    const $ = y(u, v), T = Mt(u);
    return re({
      location: u,
      optionIndex: v,
      stateValue: $,
      isAggregate: !0,
      customLabel: T?.label
    });
  }, F = (u) => {
    Co(e.value, n, u, U.value), ot(e);
  }, me = (u) => u === "all" ? X.value.some((v) => !!Ue(v, 0)) : u === "faces" && G.value ? oe.value.some((v) => !!Ue(v, 0)) : u === "sides" && P.value ? j.value.some((v) => !!Ue(v, 0)) : Ke(u) ? Re(u).some(($) => !!Ue($, 0)) : X.value.includes(u) ? !!Ue(u, 0) : !1, ge = (u) => {
    if (u === "all") return be("general.all");
    if (u === "faces") return `${be("general.all")} ${be("machining.face_other")}`;
    if (u === "sides") return `${be("general.all")} ${be("woodwork.edge_other")}`;
    if (Ke(u)) {
      const T = Mt(u);
      if (T) return T.label;
    }
    if (u.startsWith("face.")) {
      const q = `faces.${u.replace("face.", "")}`;
      return be(q);
    }
    if (u.startsWith("side.")) {
      let T = u.replace("side.", "");
      (h === 1 || h === 2) && e.value && e.value.w > e.value.l && (T = { l1: "w1", l2: "w2", w1: "l1", w2: "l2" }[T] || T);
      const q = `sides.${T}`;
      return be(q);
    }
    const v = `fields.${u}`, $ = be(v);
    return $ !== v ? $ : a?.[u] ? a[u] : u;
  }, Oe = (u, v) => U.value === "boolean" ? "checkbox" : Fe(v).length > 1 ? "select" : "checkbox", Nt = (u, v) => re({
    location: u,
    optionIndex: v,
    isAggregate: !1
  }), Xe = (u) => {
    const v = Je(u);
    return pe("all", u, v);
  }, ke = (u) => xt("faces", u), Be = (u) => xt("sides", u), un = (u, v) => u === "all" ? Xe(v) : u === "faces" ? ke(v) : u === "sides" ? Be(v) : Ke(u) ? I(u, v) : Nt(u, v), Le = (u, v) => {
    const q = (Yt(n)?.options || i)[u];
    if (!q || q[0] === !0)
      return [];
    const ie = v && typeof v == "string" && (v.startsWith("face.") || v.startsWith("side.")), Se = v && typeof v == "string" && Ke(v), xe = !ie && (v === "all" || v === "faces" || v === "sides" || Se);
    if (Array.isArray(q) && q.length === 1 && typeof q[0] == "string" && !(r && O && (ie || xe) && u > 0))
      return q;
    if (r && O && ie) {
      const je = [];
      if (u > 0)
        for (let He = 0; He < u; He++) {
          const qe = Ue(v, He);
          if (typeof qe == "string" && qe)
            je.push(qe);
          else if (typeof qe == "boolean")
            je.push(qe);
          else {
            const Ct = Yt(n), Ot = ci(e.value, n, v);
            return Ot && typeof Ot == "object" && !Array.isArray(Ot) && Object.keys(Ot).length > 1 && Ct?.options[u] ? Ct.options[u] : [];
          }
        }
      return O(p, je, u);
    }
    if (r && O && xe) {
      const je = [];
      if (u > 0)
        for (let He = 0; He < u; He++) {
          let qe;
          if (v === "all" ? qe = Je(He) : v === "faces" ? qe = Ye(He) : v === "sides" ? qe = De(He) : Se && typeof v == "string" && (qe = y(v, He)), typeof qe == "string" && qe)
            je.push(qe);
          else if (typeof qe == "boolean")
            je.push(qe);
          else
            return [];
        }
      return O(p, je, u);
    }
    const se = q, We = o ? (l.value || []).filter((je) => typeof je == "string") : [];
    return [.../* @__PURE__ */ new Set([...se, ...We])];
  }, ct = (u, v) => {
    const T = Yt(n)?.options[v] || [], q = o && l.value ? l.value.filter((We) => typeof We == "string") : [], ie = [.../* @__PURE__ */ new Set([...T, ...q])], Se = Le(v, u), xe = new Set(Se);
    return ie.map((We) => ({
      value: We,
      label: We,
      disabled: !xe.has(We)
    }));
  }, Ie = () => {
    const u = Le(0);
    return u.length === 1 ? u[0] : void 0;
  }, Ve = (u) => {
    const v = Le(u);
    return v.length === 1 ? v[0] : void 0;
  }, Fe = (u) => {
    const v = Yt(n);
    let $ = [];
    if (v?.options && v.options[u] && Array.isArray(v.options[u])) {
      const q = v.options[u];
      Array.isArray(q) && q.every((ie) => typeof ie == "string") && ($ = q);
    }
    const T = o && l.value ? l.value.filter((q) => typeof q == "string") : [];
    return [.../* @__PURE__ */ new Set([...$, ...T])];
  }, Un = (u, v = 0) => {
    if (u === "all" || u === "faces" || u === "sides")
      return "";
    if (Ke(u)) {
      const T = Mt(u);
      return T?.price !== void 0 && y(u, v) ? N ? N(T.price) : T.price.toString() : "";
    }
    if (!r || !B)
      return "";
    if (!X.value.includes(u))
      return "N/A";
    const $ = B(e.value, n, u, J);
    return $ ? N ? N($) : $.toString() : "N/A";
  }, Bt = (u) => !r || !B ? !1 : B(e.value, n, u, J), pt = L(() => X.value.length > 1), ht = L(() => ye.value.length > 1), nn = () => {
    if (b.value && b.value.length > 0) {
      const T = [];
      return x.value && x.value.length > 0 && x.value.forEach((q) => T.push(q.id)), T.push(...b.value), T;
    }
    const u = [];
    x.value && x.value.length > 0 && x.value.forEach((T) => u.push(T.id)), pt.value && u.push("all"), ht.value && (ra(n).length > 0 && u.push("faces"), ca(n).length > 0 && u.push("sides"));
    const v = /* @__PURE__ */ new Set();
    x.value && x.value.length > 0 && x.value.forEach((T) => {
      T.hideIndividualLocations && T.locations.forEach((q) => v.add(q));
    });
    const $ = ye.value.filter((T) => !v.has(T));
    return u.push(...$), u;
  }, dn = () => U.value === "multiple", mi = () => {
    const u = 1 + i.length, v = U.value === "multiple", $ = r, T = u + (v ? 1 : 0) + ($ ? 1 : 0);
    return {
      columns: T,
      style: `repeat(${T}, max-content)`
    };
  }, fn = (u) => u === "all" ? "all" : u === "faces" ? "faces" : u === "sides" ? "sides" : "individual", pn = (u) => Bn(u), hn = (u) => {
    if (u === "all")
      return pt.value;
    if (Ke(u))
      return Mt(u) ? Re(u).length > 0 : !1;
    if (b.value && b.value.length > 0)
      return b.value.includes(u);
    const v = fn(u);
    return v === "all" ? pt.value : v === "faces" || v === "sides" ? v === "faces" && G.value && oe.value.length > 0 || v === "sides" && P.value && j.value.length > 0 ? ht.value : !1 : ye.value.includes(u);
  }, gn = (u) => {
    xo(u, n, l);
  }, zt = (u) => {
    ko([e.value], n, u, s);
  }, vi = (u) => {
    So([e.value], n, u);
  }, sn = (u, v, $) => {
    if (u === "all")
      et(v, $);
    else if (u === "faces")
      st(v, $);
    else if (u === "sides")
      fe(v, $);
    else if (Ke(u)) {
      let q = $;
      if (!_() && typeof $ == "boolean") {
        const ie = Fe(v);
        ie.length === 1 && (q = $ ? ie[0] : "");
      }
      if (!_() && q) {
        const ie = Re(u), Se = new Set(ie);
        x.value && (x.value.forEach((xe) => {
          xe.id !== u && Re(xe.id).filter((je) => !Se.has(je)).forEach((je) => {
            Ce(je, v, "");
          });
        }), ot(e));
      }
      w(u, v, q);
    } else
      Ce(u, v, $), _() || ot(e);
    const T = s.length;
    for (let q = v + 1; q < T; q++) {
      let ie;
      if (u === "all" ? ie = Je(q) : u === "faces" ? ie = Ye(q) : u === "sides" ? ie = De(q) : Ke(u) ? ie = y(u, q) : ie = Ue(u, q), !ie)
        continue;
      const Se = Le(q, u);
      let xe = !1;
      if (typeof ie == "string" ? xe = Se.includes(ie) : typeof ie == "boolean" && ie === !0 && (xe = Se.length > 0), !xe) {
        const se = Oe(u, q) === "checkbox" ? !1 : "";
        u === "all" ? et(q, se) : u === "faces" ? st(q, se) : u === "sides" ? fe(q, se) : Ke(u) ? w(u, q, se) : Ce(u, q, se);
      }
    }
  }, Vt = (u, v = !0) => v && !confirm(`Delete ${n} for ${ge(u)}?`) ? !1 : (u === "all" ? Ut() : u === "faces" ? Wt() : u === "sides" ? tn() : Ke(u) ? m(u) : F(u), !0), bi = () => {
    const u = e.value[n], v = e.value[`${n}Options`];
    return !(!u || typeof u != "object" || !v || typeof v != "object" || G.value && (!("faces" in u) || !("faces" in v)) || P.value && (!("sides" in u) || !("sides" in v)));
  }, yi = () => {
    const u = [], v = e.value[n], $ = e.value[`${n}Options`];
    return !v || typeof v != "object" ? u.push(`Missing or invalid ${n} property in shape`) : (G.value && !("faces" in v) && u.push(`Missing faces property in ${n}`), P.value && !("sides" in v) && u.push(`Missing sides property in ${n}`)), !$ || typeof $ != "object" ? u.push(`Missing or invalid ${n}Options property in shape`) : (G.value && !("faces" in $) && u.push(`Missing faces property in ${n}Options`), P.value && !("sides" in $) && u.push(`Missing sides property in ${n}Options`)), u;
  }, an = (u) => {
    const v = [];
    if (!u || !Object.keys(u).length)
      return { valid: !0, errors: v };
    const $ = Object.keys(u), T = Math.max(...$.map((q) => q.split("|").length));
    if (T <= 1)
      return { valid: !0, errors: v };
    for (const q of X.value) {
      let ie;
      if (_()) {
        const se = ci(e.value, n, q);
        se && typeof se == "object" && !Array.isArray(se) ? ie = s.map((je) => {
          const He = se[je];
          if (He === !0) {
            const qe = s.indexOf(je);
            return Fe(qe)[0] || "";
          }
          return String(He || "");
        }).join("|") : ie = "";
      } else {
        const se = Ue(q, 0);
        ie = typeof se == "string" ? se : "";
      }
      if (!ie || ie === "")
        continue;
      const Se = ie.includes("|") ? ie.split("|") : [ie], xe = Se.filter((se) => se.trim() !== "").length;
      if (xe > 0 && xe < T) {
        const se = Se.join("|"), We = $.some((He) => He.startsWith(se + "|")), je = $.includes(se);
        if (We && !je) {
          const He = T - xe, qe = Se.filter((Ot) => Ot.trim() !== "").join(", "), Ct = ge(q);
          v.push(`${n} selection incomplete for ${Ct}. Selected: "${qe}" but ${He} more level${He > 1 ? "s" : ""} required.`);
        }
      }
    }
    return { valid: v.length === 0, errors: v };
  }, wi = (u) => an(u).errors, Si = L(() => nn().map((u) => ({
    location: u,
    label: ge(u),
    isAggregate: ["all", "faces", "sides"].includes(u) || Ke(u)
  })));
  return {
    // State - provide raw computed refs for other composables
    mode: U,
    // Raw computed ref (not readonly wrapped)
    allLocations: ut(X),
    faceLocations: ut(oe),
    sideLocations: ut(j),
    shouldShowAll: pt,
    // Raw computed ref (not readonly wrapped)
    shouldShowGroupControls: ut(ht),
    renderLocations: ut(Si),
    // Expose computed renderLocations
    // Support flags
    supportsFaces: ut(G),
    supportsSides: ut(P),
    supportsBoth: ut(S),
    // Core operations
    setValue: Ce,
    getValue: Ue,
    setAll: et,
    getAll: Je,
    getAllState: Je,
    // Alias for backward compatibility
    deleteSingle: F,
    deleteAll: Ut,
    canDelete: me,
    // Group-specific operations
    setAllFaces: st,
    setAllSides: fe,
    getAllFaces: Ye,
    getAllSides: De,
    deleteAllFaces: Wt,
    deleteAllSides: tn,
    // UI helpers
    getLocationLabel: ge,
    getInputType: Oe,
    getInputConfig: Nt,
    getAllInputConfig: Xe,
    getAllFacesInputConfig: ke,
    getAllSidesInputConfig: Be,
    getInputConfigForLocation: un,
    getSelectOptions: ct,
    getSingleOptionLabel: Ve,
    // Pricing
    getPriceDisplay: Un,
    getCalculatedPrice: Bt,
    // Layout & rendering
    getRenderLocations: nn,
    shouldShowDeleteButton: dn,
    getGridConfig: mi,
    getLocationGroup: fn,
    getLocationScope: pn,
    isLocationVisible: hn,
    // Options management
    getAvailableOptions: Le,
    getSingleAvailableOption: Ie,
    // Initialization & migration
    initialize: R,
    initializeExtra: R,
    // Alias for backward compatibility
    initializeCustomNames: gn,
    migrateToSingle: zt,
    migrateToBoolean: vi,
    // Event handlers
    handleInputChange: sn,
    handleDelete: Vt,
    // Validation
    validateShape: bi,
    getValidationErrors: yi,
    validateIncompleteSelections: an,
    getIncompleteSelectionErrors: wi,
    // Debug helpers (development only)
    getDebugInfo: (u, v) => ({
      mode: U.value,
      location: u,
      optionIndex: v,
      value: X.value.includes(u) ? Ue(u, v) : "N/A",
      inputType: Oe(u, v),
      canDelete: me(u),
      allState: Je(v),
      availableOptions: Le(v),
      locationGroup: fn(u),
      config: H.value,
      supportsFaces: G.value,
      supportsSides: P.value,
      supportsBoth: S.value,
      ...G.value && {
        allFacesState: Ye(v)
      },
      ...P.value && {
        allSidesState: De(v)
      },
      ...X.value.includes(u) && {
        locationScope: pn(u)
      }
    })
  };
}, Ul = (t) => {
  const {
    customNames: e,
    usedNames: n,
    allowCustomNames: i,
    getSelectOptions: s,
    onCustomNameAdded: a,
    onCustomNameDeleted: o
  } = t, l = W(""), r = L(() => i && l.value?.trim()), p = L(() => !i || !e.value || e.value.length === 0 || e.value.length === 1 && e.value[0] === !0 ? !0 : e.value.filter((B) => typeof B == "string").every((B) => n.value.includes(B))), b = L(() => {
    const O = [];
    if (i && e.value && e.value.length > 0) {
      if (e.value.length === 1 && e.value[0] === !0)
        return O;
      const J = [...e.value.filter((N) => typeof N == "string")].sort();
      O.push({
        id: "delete-header",
        type: "group",
        label: "Delete Type"
      }), J.forEach((N) => {
        (n.value?.includes(N) ?? !1) || O.push({
          id: `delete-${N}`,
          label: `Delete "${N}"`,
          icon: ["fass", "trash"],
          class: "del"
        });
      });
    }
    return O;
  }), x = () => {
    const O = l.value?.trim();
    if (!O) return;
    if (s("", 0).map((J) => J.value).includes(O)) {
      l.value = "";
      return;
    }
    a(O), l.value = "";
  }, h = (O) => {
    const B = O.item || O;
    if (B.id?.startsWith("delete-")) {
      const J = B.id.replace("delete-", "");
      if (n.value?.includes(J)) {
        console.warn(`Cannot delete ${t.extraType} type "${J}" - it is currently in use`);
        return;
      }
      o(J);
    }
  };
  return {
    newCustomName: l,
    canAddCustomName: ut(r),
    isActionMenuDisabled: ut(p),
    customNameActions: b,
    handleAddCustomName: x,
    handleCustomNameAction: h
  };
}, Wl = (t) => {
  const {
    extraType: e,
    allOptions: n,
    labels: i,
    shapeIndex: s,
    enablePricing: a,
    mode: o,
    shouldShowAll: l,
    locations: r,
    locationGroups: p = W([]),
    shape: b = W(null),
    orientationModel: x = 0,
    getInputType: h,
    getInputConfig: O,
    getAllInputConfig: B,
    getInputConfigForLocation: J,
    canDelete: N,
    getLocationLabel: R,
    shouldShowDeleteButton: H
  } = t, U = L(() => {
    const P = [], S = /* @__PURE__ */ new Set();
    if (p.value && p.value.length > 0 && p.value.forEach((Q) => {
      Q.hideIndividualLocations && Q.locations.forEach((ee) => S.add(ee));
    }), p.value && p.value.length > 0 && p.value.forEach((Q) => P.push(Q.id)), l.value && P.push("all"), r.value && r.value.length > 0)
      P.push(...r.value.filter((Q) => Q !== "all" && !S.has(Q)));
    else {
      const Q = ui(e), ee = la(e), ae = oa(e), $e = aa(e);
      ee && ae && $e && (ra(e).length > 0 && P.push("faces"), ca(e).length > 0 && P.push("sides")), P.push(...Q.filter((V) => !S.has(V)));
    }
    let _ = Array.from(new Set(P));
    if ((x === 1 || x === 2) && b.value && b.value.w > b.value.l) {
      const Q = ["side.l1", "side.l2", "side.w1", "side.w2"], ee = _.map((ae, $e) => ({ loc: ae, i: $e })).filter((ae) => Q.includes(ae.loc));
      if (ee.length > 0) {
        const ae = ee[0].i, $e = ee.filter((D) => D.loc.includes(".w")).sort((D, re) => D.loc.localeCompare(re.loc)), K = ee.filter((D) => D.loc.includes(".l")).sort((D, re) => D.loc.localeCompare(re.loc)), V = [...$e.map((D) => D.loc), ...K.map((D) => D.loc)];
        _ = _.filter((D) => !Q.includes(D)), _.splice(ae, 0, ...V);
      }
    }
    return _;
  }), ye = L(() => {
    const P = 1 + n.length, S = o.value === "multiple", _ = a;
    return `repeat(${P + (S ? 1 : 0) + (_ ? 1 : 0)}, max-content)`;
  }), X = (P, S) => `${e}-${P}-${i[S]}-${S}-${s}`, oe = (P) => {
    const S = R(P);
    return `Delete ${e} for ${S}`;
  }, j = (P) => ({
    show: H(P),
    enabled: N(P),
    ariaLabel: oe(P)
  }), G = (P, S) => h(P, S);
  return {
    renderLocations: ut(U),
    gridStyle: ut(ye),
    getInputId: X,
    getDeleteAriaLabel: oe,
    getInputConfigForLocation: J,
    getDeleteConfig: j,
    getInputTypeForLocation: G,
    // Re-export the passed functions for consistency
    getInputType: h,
    getInputConfig: O,
    getAllInputConfig: B,
    canDelete: N,
    shouldShowDeleteButton: H,
    getLocationLabel: R
  };
};
function ya(t) {
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
function zl(t) {
  return t.map((e) => {
    const n = e.path.length > 0 ? e.path.join(".") : "root", i = ya(e), s = Ao(e.message, i);
    return `[${n}] ${s}`;
  });
}
function $n(t, e) {
  const n = t.safeParse(e);
  return {
    success: n.success,
    data: n.success ? n.data : void 0,
    errors: n.success ? void 0 : n.error.issues
  };
}
function Hl(t = {}) {
  try {
    let e = function(w) {
      if (!w || typeof w != "object") return w;
      const y = { ...w };
      if (delete y.issues, delete y.warnings, y.trim && typeof y.trim == "object") {
        const m = y.trim;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (y.trim = {
          l1: m.y1 ?? m.l1 ?? 0,
          l2: m.y2 ?? m.l2 ?? 0,
          w1: m.x1 ?? m.w1 ?? 0,
          w2: m.x2 ?? m.w2 ?? 0
        });
      }
      if (y.extras?.banding?.sides && typeof y.extras.banding.sides == "object") {
        const m = y.extras.banding.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (y.extras.banding.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (y.extras?.finish?.sides && typeof y.extras.finish.sides == "object") {
        const m = y.extras.finish.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (y.extras.finish.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (y.extras?.planing?.sides && typeof y.extras.planing.sides == "object") {
        const m = y.extras.planing.sides;
        ("x1" in m || "x2" in m || "y1" in m || "y2" in m) && (y.extras.planing.sides = {
          l1: m.y1 ?? m.l1,
          l2: m.y2 ?? m.l2,
          w1: m.x1 ?? m.w1,
          w2: m.x2 ?? m.w2
        });
      }
      if (y.efficiencyOptions?.primaryCompression) {
        const m = y.efficiencyOptions.primaryCompression;
        m === "x" ? y.efficiencyOptions = {
          ...y.efficiencyOptions,
          primaryCompression: "l"
        } : m === "y" && (y.efficiencyOptions = {
          ...y.efficiencyOptions,
          primaryCompression: "w"
        });
      }
      for (const m in y)
        y[m] === null && delete y[m];
      return y;
    }, n = function(w, y) {
      if (!Array.isArray(w))
        return [];
      const m = [];
      for (let I = 0; I < w.length; I++) {
        const F = w[I], me = e(F);
        try {
          const ge = {
            ...me,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored shapes as new to avoid showing validation errors immediately
          };
          F.autoId && (ge.autoId = F.autoId), delete ge.issues, delete ge.warnings;
          const Oe = new Kn(ge, y);
          m.push(Oe);
        } catch (ge) {
          console.error(`Failed to create InputShape at index ${I}:`, ge);
        }
      }
      return m;
    }, i = function(w, y) {
      if (!Array.isArray(w)) return [];
      const m = [];
      for (let I = 0; I < w.length; I++) {
        const F = w[I], me = e(F);
        try {
          const ge = {
            ...me,
            skipSchemaValidation: !0,
            // Skip Zod validation during construction
            isNew: !0
            // Treat restored stock as new to avoid showing validation errors immediately
          };
          F.autoId && (ge.autoId = F.autoId);
          const Oe = new Zn(ge, y);
          m.push(Oe);
        } catch (ge) {
          console.error(`Failed to create InputStock at index ${I}:`, ge);
        }
      }
      return m;
    }, s = function(w) {
      const y = e(w), m = $n(kn, y);
      if (m.success && m.data) {
        const I = {
          ...m.data,
          issues: [],
          warnings: []
        };
        return w?.autoId && (I.autoId = w.autoId), new Rt(I);
      } else
        return console.error("Failed to parse input saw:", m.errors), new Rt({});
    }, a = function(w, y) {
      return Array.isArray(w) ? y && y.length ? Nl(w, y) : w.map((m) => new sa(m)).filter(Boolean) : [];
    }, o = function(w = {}) {
      try {
        const I = { ...Vn(
          (me) => {
            if (typeof me != "object" || me === null) return me;
            const ge = { ...me };
            for (const Oe in ge)
              ge[Oe] === null && delete ge[Oe];
            return ge;
          },
          xn
        ).parse(w), isNew: !0 }, F = new Kn(I, Q);
        return F.createId(ee.value.length), ee.value.push(F), F;
      } catch (y) {
        return y instanceof Jn && (console.error("Shape validation failed:", y.issues), H("part", "Invalid shape data", y.issues)), null;
      }
    }, l = function(w = {}) {
      try {
        const m = { ...rn.parse(w), isNew: !0 }, I = new Zn(m, Q);
        return I.createId(ae.value.length), ae.value.push(I), I;
      } catch (y) {
        return y instanceof Jn && (console.error("Stock validation failed:", y.issues), H("stock", "Invalid stock data", y.issues)), null;
      }
    }, r = function(w) {
      try {
        const y = w.toData(), m = xn.parse(y);
        return new Kn(m, Q);
      } catch (y) {
        return y instanceof Jn && (console.error("Shape clone validation failed:", y.issues), H("part", "Invalid shape data during cloning", y.issues)), null;
      }
    }, p = function(w) {
      try {
        const y = w.toData(), m = rn.parse(y);
        return new Zn(m, Q);
      } catch (y) {
        return y instanceof Jn && (console.error("Stock clone validation failed:", y.issues), H("stock", "Invalid stock data during cloning", y.issues)), null;
      }
    }, b = function(w, y) {
      const m = ee.value.find((me) => me.autoId === w);
      if (!m) return !1;
      const I = { ...m.toData(), ...y }, F = $n(xn, I);
      if (F.success && F.data) {
        if (m.update(F.data), !m.isNew) {
          const me = Object.keys(y);
          m.validate({ fields: me });
        }
        return !0;
      } else {
        const me = F.errors ? zl(F.errors) : [];
        console.error("Shape update validation failed:", me);
        const ge = F.errors?.[0];
        if (ge) {
          const Oe = ya(ge);
          new Ft({
            category: ["part"],
            message: ge.message,
            // This is the translation key from Zod error map
            params: Oe,
            issues: D.value
          });
        } else
          H("part", "Invalid shape update");
        return !1;
      }
    }, x = function(w, y) {
      const m = ee.value.findIndex((F) => F.autoId === w);
      if (m === -1) return !1;
      const I = ee.value[m];
      return I.validate({ fields: [y] }), I.issues.length === 0;
    }, h = function(w, y) {
      const m = ae.value.find((me) => me.autoId === w);
      if (!m) return !1;
      const I = { ...m.toData(), ...y }, F = $n(rn, I);
      return F.success && F.data ? (m.update(F.data), m.isNew || R(), !0) : (console.error("Stock update validation failed:", F.errors), H("stock", "Invalid stock update", F.errors), !1);
    }, O = function(w, y) {
      const m = ae.value.findIndex((F) => F.autoId === w);
      if (m === -1) return !1;
      const I = ae.value[m];
      return I.validate({ fields: [y] }), ot(ae), I.issues.length === 0;
    }, B = function(w) {
      if (ee.value.length === 1) return !1;
      const y = ee.value.findIndex((m) => m.autoId === w);
      return y === -1 ? !1 : (ee.value.splice(y, 1), !0);
    }, J = function(w) {
      if (ae.value.length === 1) return !1;
      const y = ae.value.findIndex((m) => m.autoId === w);
      return y === -1 ? !1 : (ae.value.splice(y, 1), !0);
    }, N = function(w) {
      re.value = !0;
      const y = [];
      try {
        ee.value.forEach((m) => m.issues.length = 0);
        for (let m = 0; m < ee.value.length; m++) {
          const I = ee.value[m];
          if (I.isNew)
            continue;
          const F = I.validate({
            inputStockList: ae.value,
            index: m,
            stockType: w?.stockType ?? null,
            partTrim: 0,
            useInventory: !1,
            saw: w
          });
          y.push(...F);
        }
        ee.value.some((m) => Number(m.q) > 0) || new Ft({
          category: ["part"],
          message: "errors.validation.no_parts",
          issues: y
        });
      } finally {
        re.value = !1;
      }
      return D.value = y, y;
    }, R = function(w) {
      re.value = !0;
      const y = [];
      try {
        ae.value.forEach((m) => m.issues.length = 0);
        for (let m = 0; m < ae.value.length; m++) {
          const F = ae.value[m].validate({ saw: w }, m);
          y.push(...F);
        }
        ae.value.some((m) => Number(m.q) > 0 || m.autoAdd) || new Ft({
          category: ["stock"],
          message: "errors.validation.no_stock",
          issues: y
        });
      } finally {
        re.value = !1;
      }
      return D.value = y, y;
    }, H = function(w, y, m) {
      new Ft({
        category: [w],
        message: y,
        issues: D.value
      }), m && console.log("Validation details:", m);
    }, U = function() {
      D.value = [], ee.value.forEach((w) => w.issues.length = 0), ae.value.forEach((w) => w.issues.length = 0);
    }, ye = function(w = {}) {
      const y = [], m = [], I = w.inputShapesOverride ?? ee.value;
      if (!I.length)
        return { shapeList: [], issues: [] };
      for (let F = 0; F < I.length; F++) {
        const me = I[F];
        if (!me.q) continue;
        me.createId(F), me.applyPartTrim(w.trim, w.stockType);
        const ge = me.toShape();
        y.push(ge), m.push(...ge.issues);
      }
      return { shapeList: y, issues: m };
    }, X = function(w) {
      if (!ae.value.length)
        return { stockList: [], issues: [] };
      const y = [], m = [];
      for (let I = 0; I < ae.value.length; I++) {
        const F = ae.value[I];
        if (!F.q && !F.autoAdd) continue;
        F.createId(I), F.saw = w;
        const me = F.toStock();
        y.push(me), m.push(...me.issues);
      }
      return { stockList: y, issues: m };
    }, oe = function(w, y = Q) {
      const m = {
        saw: { success: !1, failed: !1 },
        shapes: { success: 0, failed: 0 },
        stock: { success: 0, failed: 0 },
        groups: { success: 0, failed: 0 }
      };
      if (w.saw) {
        const I = $n(kn, e(w.saw));
        if (I.success && I.data) {
          const F = { ...I.data };
          w.saw?.autoId && (F.autoId = w.saw.autoId), $e.value = new Rt(F), m.saw.success = !0;
        } else
          console.error("Failed to parse input saw:", I.errors), m.saw.failed = !0;
      }
      if (w.shapes) {
        const I = n(w.shapes, y);
        m.shapes.success = I.length, m.shapes.failed = w.shapes.length - I.length, ee.value = I;
      }
      if (w.stock) {
        const I = i(w.stock, y);
        m.stock.success = I.length, m.stock.failed = w.stock.length - I.length, ae.value = I;
      }
      if (w.groups) {
        const I = a(w.groups);
        m.groups.success = I.length, m.groups.failed = w.groups.length - I.length, K.value = I;
      }
      return w.extrasOptions && (V.value = { ...w.extrasOptions }), m;
    }, j = function() {
      return {
        shapes: ee.value.map((w) => w.toData()),
        stock: ae.value.map((w) => w.toData()),
        inputUserGroups: K.value.map((w) => w.toData()),
        extrasOptions: V.value
      };
    }, G = function() {
      ee.value = [], ae.value = [], K.value = [], U();
    }, P = function(w) {
      const y = { ...$e.value.toData(), ...w }, m = $n(kn, y);
      return m.success && m.data ? ($e.value.update(m.data), !0) : (console.error("InputSaw update validation failed:", m.errors), H("saw", "Invalid saw update", m.errors), !1);
    }, S = function() {
      $e.value = new Rt({});
    }, _ = function() {
      const w = $e.value.validate();
      return D.value = [...D.value.filter((y) => y.category?.[0] !== "saw"), ...w], w;
    };
    const { numberFormat: Q = "decimal" } = t, ee = En("inputs/inputShapes", [], {
      serializer: {
        read: (w) => {
          if (!w) {
            const I = "GlobalStore/inputShapes", F = Ls(I);
            if (F)
              w = F, Fs(I);
            else return [];
          }
          let y;
          try {
            y = JSON.parse(w);
          } catch (I) {
            return console.error("Failed to parse input shapes JSON:", I), [];
          }
          return n(y, Q);
        },
        write: (w) => {
          const m = w.filter((F) => !F?.multiEdit).map((F) => F.toData());
          return JSON.stringify(m);
        }
      },
      listenToStorageChanges: !1
    }), ae = En("inputs/inputStock", [], {
      serializer: {
        read: (w) => {
          if (!w) return [];
          let y;
          try {
            y = JSON.parse(w);
          } catch (I) {
            return console.error("  Failed to parse stock JSON:", I), [];
          }
          return i(y, Q);
        },
        write: (w) => {
          const m = w.filter((F) => !F?.multiEdit).map((F) => F.toData());
          return JSON.stringify(m);
        }
      },
      listenToStorageChanges: !1
    }), $e = En("inputs/inputSaw", new Rt({}), {
      serializer: {
        read: (w) => {
          if (!w) {
            const m = Ls("saw");
            if (m)
              w = m, Fs("saw");
            else return new Rt({});
          }
          try {
            const y = JSON.parse(w);
            return s(y);
          } catch (y) {
            return console.error("  Failed to parse saw JSON:", y), new Rt({});
          }
        },
        write: (w) => {
          if (!w)
            return JSON.stringify({});
          const y = w.toData();
          return JSON.stringify(y);
        }
      },
      listenToStorageChanges: !1
    }), K = En("inputs/inputUserGroups", [], {
      serializer: {
        read: (w) => a(w ? JSON.parse(w) : []),
        write: (w) => JSON.stringify(w.map((y) => y.toData()))
      }
    }), V = En("inputs/extrasOptions", {
      banding: { options: [] },
      finish: { options: [] },
      planing: { options: [] }
    }, {
      serializer: {
        read: (w) => {
          if (!w) return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          try {
            return JSON.parse(w);
          } catch {
            return { banding: { options: [] }, finish: { options: [] }, planing: { options: [] } };
          }
        },
        write: (w) => JSON.stringify(w)
      }
    }), D = W([]), re = W(!1);
    ee.value.length === 0 && (ee.value = [new Kn({ isNew: !0 })]), ae.value.length === 0 && (ae.value = [new Zn({ isNew: !0 })]);
    const pe = L(() => ee.value.reduce((w, y) => {
      const m = Number(y?.q);
      return m && m > 0 && !y?.multiEdit ? w + m : w;
    }, 0)), Ce = L(() => ae.value.reduce((w, y) => {
      const m = Number(y?.q);
      return m && m > 0 && !y?.multiEdit ? w + m : w;
    }, 0)), Ue = L(() => ee.value.reduce((w, y) => y?.multiEdit ? w : w + 1, 0)), et = L(() => ae.value.reduce((w, y) => y?.multiEdit ? w : w + 1, 0)), Je = L(() => D.value.length > 0), Ut = () => [
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
      }
      // Temporarily removed DXF field
      // {
      // 	name: 'dxfPreview',
      // 	type: 'object' as const,
      // 	label: 'fields.dxfPreview',
      // 	fieldMap: 'dxfPreview',
      // 	w: '80px',
      // 	required: false
      // }
    ], ft = W(null), $t = W(null), kt = () => {
      ft.value = null;
    }, nt = U, xt = (w = null) => {
      const y = w?.inputShapesOverride ?? ee.value, m = N(w?.saw || void 0);
      if (y.length) {
        Io(y, ae.value, w?.saw || $e.value);
        const I = y.flatMap((F) => F.issues);
        return [...m, ...I];
      }
      return m;
    }, st = async (w, y = "decimal") => {
      const m = w?.inputSaw, I = w?.inputShapes, F = w?.inputStock, me = w?.inputUserGroups, ge = oe({
        saw: m,
        shapes: I,
        stock: F,
        groups: me
      }, y);
      return ot(ee), ot(ae), await mt(), ge;
    }, fe = (w, y = "decimal") => oe({ shapes: w }, y).shapes.success > 0, Ye = (w, y = "decimal") => oe({ stock: w }, y).stock.success > 0, De = (w, y, m, I) => {
      y[0]?.length > 0 && (V.value[w] || (V.value[w] = { options: [] }), V.value[w].options = [...y[0]]), m && I && y.length > 0 ? Qi(w, {
        options: y,
        // Use all columns extracted from pricing
        labels: m,
        pricing: I
      }) : console.warn("[setExtrasOptionsFromPricing] Missing data for centralized config:", { labels: m, pricingData: I, pricingOptionsLength: y.length });
    }, Wt = () => {
      if (!Object.values(V.value).some(
        (m) => m.options.length > 0
      )) return;
      const y = (m, I) => {
        const F = {};
        for (const me of I)
          F[me] = [...m];
        return F;
      };
      return {
        banding: V.value.banding.options.length > 0 ? {
          options: {
            sides: y(V.value.banding.options, ["l1", "l2", "w1", "w2"])
          }
        } : void 0,
        finish: V.value.finish.options.length > 0 ? {
          options: {
            faces: y(V.value.finish.options, ["a", "b"])
          }
        } : void 0,
        planing: V.value.planing.options.length > 0 ? {
          options: {
            sides: y(V.value.planing.options, ["l1", "l2", "w1", "w2"]),
            faces: y(V.value.planing.options, ["a", "b"])
          }
        } : void 0
      };
    }, tn = (w) => {
      if (!ae.value.length) return "n";
      const y = w.material, m = w.t, I = ae.value.filter((Oe) => Oe.material === y && Oe.t === m);
      if (!I.length)
        return "n";
      let F = !1, me = !1, ge = !1;
      for (const Oe of I)
        Oe.grain === "l" ? (F = !0, me = !0) : Oe.grain === "w" && (F = !0, ge = !0);
      return F ? me && ge ? "y" : me ? "l" : ge ? "w" : "n" : "n";
    }, Mt = (w) => {
      for (const y of ee.value)
        vs(y, w);
      for (const y of ae.value)
        vs(y, w);
    };
    let Ke = !1;
    return ze(ee, (w) => {
      Ke || !w.length || mt(() => {
        const y = ["banding", "finish", "planing"], m = [];
        y.forEach((I) => {
          const F = /* @__PURE__ */ new Set();
          if (w.forEach((me) => {
            const ge = me.extras?.[I];
            ge && (ge.faces && Object.values(ge.faces).forEach((Oe) => {
              typeof Oe == "string" && Oe.trim() && Oe !== "Y" && F.add(Oe);
            }), ge.sides && Object.values(ge.sides).forEach((Oe) => {
              typeof Oe == "string" && Oe.trim() && Oe !== "Y" && F.add(Oe);
            }));
          }), F.size > 0) {
            const me = Yt(I);
            if (me) {
              const ge = me.options[0];
              if (Array.isArray(ge) && (ge.length === 0 || typeof ge[0] == "string")) {
                const Oe = new Set(ge), Nt = Array.from(F).filter((Xe) => !Oe.has(Xe));
                if (Nt.length > 0) {
                  const Xe = [...ge, ...Nt];
                  Qi(I, {
                    ...me,
                    options: [Xe, ...me.options.slice(1)]
                  });
                }
              }
            }
          }
        }), y.forEach((I) => {
          const F = ql(I, w);
          F.cleanedCount > 0 && m.push(
            `${I}: ${F.invalidOptions.join(", ")}`
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
        }, 500)), Ke = !0;
      });
    }, { immediate: !0 }), {
      // Bundled object
      inputs: {
        inputStock: ae,
        inputShapes: ee,
        inputUserGroups: K,
        currentInputShape: ft,
        selectedSaw: $t,
        inputSaw: $e
      },
      // State
      inputShapes: ee,
      inputStock: ae,
      inputUserGroups: K,
      inputSaw: $e,
      currentInputShape: ft,
      selectedSaw: $t,
      validationIssues: D,
      isValidating: re,
      // Computed
      totalInputShapes: pe,
      totalInputStock: Ce,
      totalInputShapeLines: Ue,
      totalInputStockLines: et,
      hasValidationIssues: Je,
      // Actions
      addInputShape: o,
      addInputStock: l,
      cloneInputShape: r,
      cloneInputStock: p,
      updateInputShape: b,
      updateInputStock: h,
      updateInputSaw: P,
      removeInputShape: B,
      removeInputStock: J,
      reset: kt,
      resetInputSaw: S,
      clear: G,
      clearIssues: nt,
      // Validation
      validateInputShapes: xt,
      validateInputShapeField: x,
      validateInputStock: R,
      validateInputStockField: O,
      validateInputSaw: _,
      clearValidationIssues: U,
      // Conversion
      createShapeList: ye,
      createStockList: X,
      // Import/Export/Update
      importData: oe,
      exportData: j,
      updateInputs: st,
      importInputShapes: fe,
      importInputStock: Ye,
      // Additional functions
      getShapeGrainSummary: tn,
      updateNumberFormat: Mt,
      getSpecialShapeFields: Ut,
      // Extras Options Management
      extrasOptions: V,
      setExtrasOptionsFromPricing: De,
      getCentralizedOptions: Wt
    };
  } catch (e) {
    throw console.error("[createInputs] Fatal error during initialization:", e), e;
  }
}
let qi = null;
function wa(t = { numberFormat: "decimal" }) {
  try {
    return qi || (qi = Hl(t)), qi;
  } catch (e) {
    throw console.error("[useInputs] FATAL ERROR in useInputs:", e), console.error("[useInputs] Error stack:", e?.stack), e;
  }
}
class Es {
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
    const n = e.banding, i = "_banding" in e ? e._banding : void 0, s = Ne(e) ? e.bandingOptions : void 0;
    if (!n && !i && !s) return !1;
    if (n && n instanceof Pn) {
      const b = n.sides;
      if (b && typeof b == "object" && ("x1" in b || "x2" in b || "y1" in b || "y2" in b)) {
        const h = this.migrateSideNames(b);
        return n.sides = h, !0;
      }
      return !1;
    }
    const a = {}, o = {}, l = { sides: {} };
    if (n && typeof n == "object") {
      const b = this.migrateSideNames(n);
      for (const [x, h] of Object.entries(b))
        Ln.includes(x) && (a[x] = h);
    }
    if (i && typeof i == "object") {
      const b = this.migrateSideNames(i);
      for (const [x, h] of Object.entries(b))
        Ln.includes(x) && (o[x] = h);
    }
    if (s && typeof s == "object") {
      s.all && (l.sides.all = s.all);
      for (const [b, x] of Object.entries(s))
        b !== "all" && Ln.includes(b) && x && (l.sides[b] = x);
    }
    const r = new Pn(Object.keys(a).length > 0 ? { sides: a } : {}), p = Object.keys(o).length > 0 ? new Pn({ sides: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.banding = r : Ne(e) && (e.banding = r), p && "_banding" in e && (e._banding = p), Ne(e) && s && (e.bandingOptions = l), !0;
  }
  /**
   * Migrate finish from flat to nested structure
   */
  static migrateFinish(e) {
    const n = e.finish, i = "_finish" in e ? e._finish : void 0, s = Ne(e) ? e.finishOptions : void 0;
    if (!n && !i && !s || n && n instanceof Fn)
      return !1;
    const a = {}, o = {}, l = { faces: {} };
    if (n && typeof n == "object")
      for (const [b, x] of Object.entries(n))
        Tn.includes(b) && (a[b] = x);
    if (i && typeof i == "object")
      for (const [b, x] of Object.entries(i))
        Tn.includes(b) && (o[b] = x);
    if (s && typeof s == "object") {
      s.all && (l.faces.all = s.all);
      for (const [b, x] of Object.entries(s))
        b !== "all" && Tn.includes(b) && x && (l.faces[b] = x);
    }
    const r = new Fn(Object.keys(a).length > 0 ? { faces: a } : {}), p = Object.keys(o).length > 0 ? new Fn({ faces: o }) : void 0;
    return "extras" in e && e.extras ? e.extras.finish = r : Ne(e) && (e.finish = r), p && "_finish" in e && (e._finish = p), Ne(e) && s && (e.finishOptions = l), !0;
  }
  /**
   * Migrate storage format: Convert boolean true to option name strings in multi-column configs
   * This handles legacy data where single-option checkboxes stored boolean true instead of the option name
   */
  static migrateStorageFormat(e) {
    let n = !1;
    const i = "extras" in e && e.extras ? e.extras : e;
    if (i.banding) {
      const s = bs("banding");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Ln) {
          const o = `side.${a}`, l = ci(e, "banding", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const p = { ...l };
            for (const b of s.labels)
              if (p[b] === !0) {
                const h = s.labels.indexOf(b);
                if (h !== -1 && s.options[h] && Array.isArray(s.options[h])) {
                  const O = s.options[h];
                  O.length === 1 && (p[b] = O[0], r = !0);
                }
              }
            r && (ys(e, "banding", o, p), n = !0);
          }
        }
    }
    if (i.finish) {
      const s = bs("finish");
      if (s && s.labels && s.labels.length > 1)
        for (const a of Tn) {
          const o = `face.${a}`, l = ci(e, "finish", o);
          if (l && typeof l == "object" && !Array.isArray(l)) {
            let r = !1;
            const p = { ...l };
            for (const b of s.labels)
              if (p[b] === !0) {
                const h = s.labels.indexOf(b);
                if (h !== -1 && s.options[h] && Array.isArray(s.options[h])) {
                  const O = s.options[h];
                  O.length === 1 && (p[b] = O[0], r = !0);
                }
              }
            r && (ys(e, "finish", o, p), n = !0);
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
    if (n && typeof n == "object" && !(n instanceof Pn) && !("sides" in n) && !("faces" in n))
      return !0;
    if ("_banding" in e) {
      const s = e._banding;
      if (s && typeof s == "object" && !(s instanceof Pn) && !("sides" in s) && !("faces" in s))
        return !0;
    }
    const i = e.finish;
    if (i && typeof i == "object" && !(i instanceof Fn) && !("sides" in i) && !("faces" in i))
      return !0;
    if ("_finish" in e) {
      const s = e._finish;
      if (s && typeof s == "object" && !(s instanceof Fn) && !("sides" in s) && !("faces" in s))
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
          const s = Object.keys(n.sides).filter((a) => !Ln.includes(a));
          if (s.length > 0)
            throw new Error(`Invalid side keys in banding: ${s.join(", ")}`);
        }
      }
      const i = e.finish;
      if (i) {
        if ("sides" in i && i.sides)
          throw new Error("Finish should not have sides property");
        if ("faces" in i && i.faces) {
          const s = Object.keys(i.faces).filter((a) => !Tn.includes(a));
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
    return "_banding" in e && e._banding && (n._banding = JSON.parse(JSON.stringify(e._banding))), "_finish" in e && e._finish && (n._finish = JSON.parse(JSON.stringify(e._finish))), Ne(e) && (e.bandingOptions && (n.bandingOptions = JSON.parse(JSON.stringify(e.bandingOptions))), e.finishOptions && (n.finishOptions = JSON.parse(JSON.stringify(e.finishOptions)))), n;
  }
  /**
   * Restore shape from backup
   */
  static restoreFromBackup(e, n) {
    "extras" in e && e.extras ? (n.banding && (e.extras.banding = n.banding), n.finish && (e.extras.finish = n.finish)) : Ne(e) && (n.banding && (e.banding = n.banding), n.finish && (e.finish = n.finish)), n._banding && "_banding" in e && (e._banding = n._banding), n._finish && "_finish" in e && (e._finish = n._finish), Ne(e) && (n.bandingOptions && (e.bandingOptions = n.bandingOptions), n.finishOptions && (e.finishOptions = n.finishOptions));
  }
}
const _l = {
  y1: "l1",
  y2: "l2",
  x1: "w1",
  x2: "w2"
}, Kl = {
  l1: "y1",
  l2: "y2",
  w1: "x1",
  w2: "x2"
};
function es(t = !1) {
  return {
    l1: t,
    l2: t,
    w1: t,
    w2: t
  };
}
function Zl(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t
  };
}
function di(t = !1) {
  return {
    a: t,
    b: t
  };
}
function Jl(t = !1) {
  return {
    sides: es(t),
    faces: di(t)
  };
}
function Yl(t = !1) {
  return {
    x1: t,
    x2: t,
    y1: t,
    y2: t,
    a: t,
    b: t
  };
}
function Xl(t) {
  const e = {};
  for (const [n, i] of Object.entries(_l))
    n in t && (e[i] = t[n]);
  return e;
}
function Ql(t) {
  const e = {};
  for (const [n, i] of Object.entries(Kl))
    n in t && (e[i] = t[n]);
  return e;
}
function dt(t) {
  return t === 1 ? !0 : t === 0 ? !1 : t;
}
function jt(t) {
  if (!t) return t;
  const e = "x1" in t || "x2" in t || "y1" in t || "y2" in t, n = "l1" in t || "l2" in t || "w1" in t || "w2" in t;
  if (e && n && console.warn("Mixed side format detected in data - using old format (x/y) and ignoring new format (l/w)", t), e) {
    const s = Xl(t), a = {};
    return "l1" in s && (a.l1 = dt(s.l1)), "l2" in s && (a.l2 = dt(s.l2)), "w1" in s && (a.w1 = dt(s.w1)), "w2" in s && (a.w2 = dt(s.w2)), a;
  }
  const i = {};
  return "l1" in t && (i.l1 = dt(t.l1)), "l2" in t && (i.l2 = dt(t.l2)), "w1" in t && (i.w1 = dt(t.w1)), "w2" in t && (i.w2 = dt(t.w2)), Object.keys(i).length > 0 ? i : t;
}
function er(t) {
  return !t || typeof t != "string" ? t : {
    "side.x1": "side.w1",
    "side.x2": "side.w2",
    "side.y1": "side.l1",
    "side.y2": "side.l2"
  }[t] || t;
}
function bn(t) {
  return !t || !Array.isArray(t) ? t : t.map(er);
}
function tr(t) {
  const e = {};
  if (t.banding && typeof t.banding == "object")
    for (const [n, i] of Object.entries(t.banding))
      i === !0 || i === !1 ? e[n] = i : typeof i == "number" ? e[n] = dt(i) : typeof i == "string" && i.length > 0 && (e[n] = i);
  if (t.bandingType && typeof t.bandingType == "object")
    for (const [n, i] of Object.entries(t.bandingType))
      if (t.banding) {
        const s = e[n];
        (s === !0 || typeof s == "string" && s.length > 0) && (typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i)));
      } else
        typeof i == "string" && i.length > 0 ? e[n] = i : typeof i == "number" && i !== 0 && (e[n] = String(i));
  return Object.keys(e).length > 0 ? e : void 0;
}
function ts(t) {
  return t && Ql(t);
}
function nr(t) {
  t?.type && delete t.type, ir.call(this, t), sr.call(this, t), ar.call(this, t), t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => ns(e));
}
function ir(t) {
  if (!t?.banding || typeof t.banding != "object") return;
  const e = Object.keys(t.banding);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.banding = {
    labels: Object.keys(t.banding),
    pricing: t.bandingPricing || {}
  }, t.bandingPricing && delete t.bandingPricing);
}
function sr(t) {
  if (!t?.finish || typeof t.finish != "object") return;
  const e = Object.keys(t.finish);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.finish = {
    labels: Object.keys(t.finish),
    pricing: t.finishPricing || {}
  }, t.finishPricing && delete t.finishPricing);
}
function ar(t) {
  if (!t?.planing || typeof t.planing != "object") return;
  const e = Object.keys(t.planing);
  if (!e.length) return;
  const n = ["labels", "pricing", "options", "keys", "locations", "groups", "rules"];
  e.every((i) => n.includes(i)) || (t.planing = {
    labels: Object.keys(t.planing),
    pricing: t.planingPricing || {}
  }, t.planingPricing && delete t.planingPricing);
}
function ns(t) {
  !t || typeof t != "object" || (Es.needsMigration(t) && Es.migrateShape(t), t._banding && delete t._banding, t._finish && delete t._finish, t._bandingType && delete t._bandingType);
}
function Sa(t) {
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
function pf(t) {
  if (!(!t || typeof t != "object")) {
    if (nr(t), t.parts && Array.isArray(t.parts) && (t.parts = t.parts.map((e) => (e.extras?.banding?.sides && (e.extras.banding.sides = jt(e.extras.banding.sides)), e.extras?.finish?.sides && (e.extras.finish.sides = jt(e.extras.finish.sides)), e.extras?.planing?.sides && (e.extras.planing.sides = jt(e.extras.planing.sides)), e))), t.stock && Array.isArray(t.stock) && (t.stock = t.stock.map((e) => e?.trim ? {
      ...e,
      trim: jt(e.trim)
    } : e)), t.options) {
      if (Sa(t.options), t.options.bandingLocations && (t.options.bandingLocations = bn(t.options.bandingLocations)), t.options.finishLocations && (t.options.finishLocations = bn(t.options.finishLocations)), t.options.planingLocations && (t.options.planingLocations = bn(t.options.planingLocations)), t.options.extrasLocationGroups)
        for (const e of ["banding", "finish", "planing"]) {
          const n = t.options.extrasLocationGroups[e];
          n && Array.isArray(n) && n.forEach((i) => {
            i.locations && (i.locations = bn(i.locations));
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
        n.locations && Array.isArray(n.locations) && (n.locations = bn(n.locations)), n.groups && Array.isArray(n.groups) && n.groups.forEach((i) => {
          i.locations && (i.locations = bn(i.locations));
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
    t.shapes && Array.isArray(t.shapes) && t.shapes.forEach((e) => ns(e)), (t.l !== void 0 || t.w !== void 0 || t.banding !== void 0) && ns(t);
  }
}
function or(t) {
  if (!t || typeof t != "object")
    return t;
  const e = { ...t };
  return e.saw && (e.saw = lr(e.saw)), Array.isArray(e.stock) && (e.stock = e.stock.map(rr)), Array.isArray(e.parts) && (e.parts = e.parts.map(cr)), e;
}
function lr(t) {
  const e = { ...t };
  if (e.guillotineOptions && (e.guillotineOptions = { ...e.guillotineOptions }, e.guillotineOptions.strategy === "stock" && (e.guillotineOptions.strategy = "efficiency")), e.efficiencyOptions) {
    e.efficiencyOptions = { ...e.efficiencyOptions };
    const n = e.efficiencyOptions.primaryCompression;
    n === "x" ? e.efficiencyOptions.primaryCompression = "l" : n === "y" && (e.efficiencyOptions.primaryCompression = "w");
  }
  return e.bladeWidth !== void 0 && (e.bladeWidth = Number(e.bladeWidth)), e.stackHeight !== void 0 && (e.stackHeight = Number(e.stackHeight)), (e.cutPreference === null || e.cutPreference === void 0) && (e.cutType === "guillotine" || e.cutType === "beam") && (e.cutPreference = "l"), e;
}
function rr(t) {
  const e = { ...t };
  return delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.trim && (e.trim = jt(e.trim)), e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e.cost !== void 0 && (e.cost = Number(e.cost)), e;
}
function cr(t) {
  const e = { ...t };
  if (delete e.numberFormatKeys, delete e.issues, delete e.warnings, e.banding || e.bandingType) {
    const n = tr(e);
    n && Object.keys(n).length > 0 && (e.extras || (e.extras = {}), e.extras.banding || (e.extras.banding = {}), e.extras.banding.sides = jt(n)), delete e.banding, delete e.bandingType;
  }
  if (e.extras?.banding?.sides && (e.extras = { ...e.extras }, e.extras.banding = { ...e.extras.banding }, e.extras.banding.sides = jt(e.extras.banding.sides)), e.finish && !e.extras?.finish) {
    if (e.extras || (e.extras = {}), e.extras.finish || (e.extras.finish = {}), e.finish.a !== void 0 || e.finish.b !== void 0) {
      const n = {};
      "a" in e.finish && (n.a = dt(e.finish.a)), "b" in e.finish && (n.b = dt(e.finish.b)), e.extras.finish.faces = n;
    } else
      e.extras.finish.sides = jt(e.finish);
    delete e.finish;
  }
  if (e.extras?.finish?.sides && (e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish }, e.extras.finish.sides = jt(e.extras.finish.sides)), e.extras?.finish?.faces) {
    e.extras = { ...e.extras }, e.extras.finish = { ...e.extras.finish };
    const n = e.extras.finish.faces;
    "a" in n && (n.a = dt(n.a)), "b" in n && (n.b = dt(n.b));
  }
  return e.l !== void 0 && (e.l = Number(e.l)), e.w !== void 0 && (e.w = Number(e.w)), e.t !== void 0 && (e.t = Number(e.t)), e.q !== void 0 && (e.q = Number(e.q)), e;
}
function rt(t) {
  if (!t || typeof t != "object") return t;
  if (Array.isArray(t)) return t.map(rt);
  const e = {};
  for (const [n, i] of Object.entries(t))
    n === "__entityType" || n === "autoId" || (e[n] = rt(i));
  return e;
}
function ka(t) {
  if (!t) return null;
  const {
    enabled: e,
    __entityType: n,
    autoId: i,
    ...s
  } = t;
  return rt(s);
}
function ur(t) {
  return t ? typeof t == "string" ? t : t.id ? t.id : t.autoId ? t.autoId : "" : "";
}
function dr(t) {
  const e = ur(t);
  return e ? { id: e } : null;
}
function fr(t) {
  return t.rot !== void 0 ? t.rot ? 1 : 0 : t.rotated !== void 0 ? t.rotated ? 1 : 0 : t.isRotated !== void 0 ? t.isRotated ? 1 : 0 : t.w > t.l ? 1 : 0;
}
const xa = Y({
  // Job metadata
  jobId: z().describe("Job identifier"),
  // Input configuration (preserved)
  saw: kn.describe("Saw configuration used"),
  // Result data (internal format - l1/l2/w1/w2)
  // Using actual schemas to strip internal-only fields
  stock: ne(To).describe("Stock items with placement layouts"),
  parts: ne(ws).describe("Parts with coordinates and properties"),
  cuts: ne(Fo).optional().describe("Cut instructions"),
  offcuts: ne(Lo).optional().describe("Remaining offcut pieces"),
  unusableParts: ne(ws).optional().describe("Parts that could not be placed"),
  // Complete metadata (ALL internal analysis fields)
  metadata: Po.describe("Complete analysis and metrics")
});
Y({
  saw: kn.describe("Saw configuration"),
  stock: ne(rn).describe("Stock items"),
  parts: ne(xn).describe("Parts to cut"),
  groups: ne(ua).optional().describe("User-defined groups"),
  webhook: C().url().optional().describe("Webhook URL for async result delivery")
});
Y({
  error: C().describe("Error message"),
  details: Is().optional().describe("Detailed error information (Zod validation errors, etc.)"),
  version: Tt("V3").describe("API version"),
  help: C().optional().describe("Helpful migration guidance"),
  example: Is().optional().describe("Example of correct format"),
  docs: C().url().optional().describe("Link to V3 documentation")
});
function pr(t) {
  if (!t) return null;
  const {
    ...e
  } = t;
  return rt(e);
}
function hr(t) {
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
    trim: rt(t.trim),
    cost: t.cost ?? 0,
    notes: t.notes ?? "",
    analysis: pr(t.analysis),
    stack: t.stack?.number ?? 1,
    customData: rt(t.customData)
  } : null;
}
function gr(t) {
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
    rot: fr(t),
    added: t.added ?? !1,
    notes: t.notes ?? "",
    stock: dr(t.stock),
    trim: rt(t.trim),
    extras: rt(t.extras),
    customData: rt(t.customData)
  };
  return t.machining && (e.machining = ka(t.machining)), e;
}
function mr(t) {
  if (!t) return null;
  const e = {
    id: t.id,
    name: t.name,
    l: t.l,
    w: t.w,
    t: t.t,
    material: t.material ?? "",
    notes: t.notes ?? "",
    trim: rt(t.trim),
    extras: rt(t.extras),
    customData: rt(t.customData)
  };
  return t.machining && (e.machining = ka(t.machining)), t.issues && Array.isArray(t.issues) && t.issues.length > 0 && (e.issues = t.issues.map((n) => ({
    message: n.message,
    type: n.type,
    category: n.category,
    field: n.field
  }))), e;
}
function vr(t) {
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
function br(t) {
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
function yr(t) {
  const e = (t.stockList || t.stock || []).map(hr), n = (t.shapeList || t.parts || []).map(gr), i = (t.unusableShapes || []).map(mr), s = (t.cutList || t.cuts || []).map(vr), a = (t.offcuts || []).map(br);
  return {
    jobId: t.jobId,
    saw: rt(t.saw),
    stock: e,
    parts: n,
    cuts: s,
    offcuts: a,
    unusableParts: i,
    metadata: rt(t.metadata)
  };
}
const wr = { id: "mini-stock-nav" }, Sr = ["onMousedown"], kr = { class: "id" }, xr = /* @__PURE__ */ tt({
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
    return (a, o) => (E(), Z("div", wr, [
      (E(!0), Z(lt, null, qt(n.stockList, (l, r) => (E(), Z("button", {
        type: "button",
        key: r,
        class: it(["c-btn c-btn--col-4 c-btn--sm", { selected: l.autoId === n.activeStockId }]),
        style: St({
          backgroundColor: l.autoId === n.activeStockId ? "#" + n.secondaryColor : "#" + n.primaryColor
        }),
        onMousedown: (p) => s(l.autoId)
      }, [
        le("div", kr, Ae(r + 1), 1),
        na(le("div", { class: "stack legibility" }, Ae(l.stack.number), 513), [
          [ia, typeof l?.stack?.number == "number" && l.stack.number > 1]
        ])
      ], 46, Sr))), 128))
    ]));
  }
});
let Qn = null;
function Cr() {
  const t = W(null), e = W(null), n = W(null), i = Sn([]), s = Sn([]), a = Sn([]), o = Sn([]), l = W([]), r = W(null), p = Sn([]), b = W(null), x = W(null);
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
    unusableShapes: p,
    currentCutIndex: b,
    activeShape: x,
    r: {
      saw: e,
      activeStockAutoId: n,
      jobId: t,
      shapeList: i,
      stockList: s,
      cutList: a,
      segmentList: o,
      offcuts: l,
      unusableShapes: p,
      metadata: r,
      currentCutIndex: b
    }
  };
}
function ss() {
  if (Qn) return Qn;
  const t = Cr(), e = L(() => t.activeStockAutoId.value ? Q(t.activeStockAutoId.value) : []), n = L(() => !t.activeStockAutoId.value || !t.stockList.value?.length ? null : _(t.activeStockAutoId.value)), i = L(() => !n.value || !t.cutList.value?.length ? [] : ae(n.value.autoId)), s = L(() => !n.value || !t.segmentList.value?.length ? [] : ee(t.activeStockAutoId.value)), a = L(() => t.stockList.value?.length ? $e(t.stockList.value) : []), o = L(() => t.shapeList.value.filter((V) => V.added)), l = L(() => t.shapeList.value?.length ? t.shapeList.value.filter((V) => !V.added) : []), r = L(() => t.shapeList.value?.length ? No(t.shapeList.value) : []), p = L(() => t.shapeList.value?.length ? t.shapeList.value.filter((V) => !V.duplicate) : []), b = L(() => p.value.filter((V) => V.added)), x = L(() => t.stockList.value?.length ? t.stockList.value.filter((V) => V.used && !V.duplicate) : []), h = L(() => x.value.filter((V) => V.used)), O = L(() => t.cutList.value?.length ? i.value.reduce((V, D) => V + D.area, 0) : 0), B = L(() => !t.stockList.value?.length || !n.value ? 0 : n.value ? n.value.area : 0), J = L(() => !t.shapeList.value?.length || !e.value ? 0 : e.value ? e.value.reduce((V, D) => V + D.area, 0) : 0), N = L(() => !t.cutList.value?.length || !n.value ? null : n.value.cutType), R = L(() => t.stockList.value?.length ? t.stockList.value.filter((D) => D.used && !D.isStacked) : []), H = L(() => t.stockList.value?.length ? Mo(n.value, t.stockList.value) : 0), U = L(() => {
    if (!t.stockList.value?.length) return 0;
    let V = B.value ? (O.value + J.value) / B.value : null;
    return V > 1 && (V = 1), V;
  }), ye = () => {
    t.saw.value = null, t.shapeList.value.length = 0, t.stockList.value.length = 0, t.cutList.value.length = 0, t.segmentList.value.length = 0, t.offcuts.value.length = 0, t.unusableShapes.value.length = 0, t.currentCutIndex.value = null;
  }, X = () => {
    t.saw.value = null, t.activeStockAutoId.value = null, t.activeShape.value = null, t.metadata.value = null, t.shapeList.value = [], t.stockList.value = [], t.cutList.value = [], t.segmentList.value = [], t.offcuts.value = [], t.currentCutIndex.value = null, t.unusableShapes.value = [];
  }, oe = (V, D) => {
    V in this && this[V]?.sort($o[D]);
  }, j = (V) => {
    ot(V);
  }, G = () => {
    ot(t.shapeList);
  }, P = () => {
    ot(t.stockList);
  }, S = (V) => {
    if (!V?.shapeList?.some((D) => D.added)) {
      X();
      return;
    }
    t.metadata.value = V.metadata, t.unusableShapes.value = V.unusableShapes || [];
    try {
      V?.saw && (t.saw.value = new da(V.saw));
      const D = Eo(V, {
        preventAutoRotation: !0
      });
      t.stockList.value = D.stockList, t.shapeList.value = D.shapeList, t.cutList.value = D.cutList, t.segmentList.value = D.segmentList, t.offcuts.value = D.offcuts, ["saw", "stockList", "shapeList", "cutList", "segmentList"].forEach((pe) => ot(t[pe])), t.activeStockAutoId.value = $e(t.stockList.value)?.[0]?.autoId || null;
    } catch (D) {
      console.error("Error updating from result", D);
    }
  }, _ = (V) => t.stockList.value?.length ? t.stockList.value.find((D) => D.autoId === V) : null, Q = (V) => t.shapeList.value?.length ? t.shapeList.value.filter((D) => D.added && D?.stock?.autoId === V) : [], ee = (V) => t.segmentList.value?.length ? t.segmentList.value.filter((re) => re?.stock?.autoId === V) : [], ae = (V) => {
    const D = t?.cutList?.value;
    return !D && !D.length ? [] : D.filter((re) => re?.stock?.autoId === V).sort((re, pe) => re?.guillotineState?.order - pe?.guillotineState?.order);
  }, $e = (V) => V?.length ? V.filter((D) => D.used === !0) : [], K = (V) => {
    t.activeStockAutoId.value !== V && (t.activeShape.value = null, t.activeStockAutoId.value = V);
  };
  return Qn = {
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
    // computed
    addedShapes: o,
    activeShapes: e,
    unplacedShapes: l,
    uniqueShapes: p,
    uniqueAddedShapes: b,
    unplacedShapeTally: r,
    uniqueStock: x,
    uniqueUsedStock: h,
    activeStock: n,
    activeCuts: i,
    activeCutsArea: O,
    activeCutType: N,
    usedStock: a,
    stackedStock: R,
    activeStockArea: B,
    activeShapeArea: J,
    activeStockStackCount: H,
    activeTotalArea: U,
    activeSegments: s,
    // methods
    reset: ye,
    clear: X,
    sortItems: oe,
    update: j,
    updateShapes: G,
    updateStock: P,
    updateFromResult: S,
    getStock: _,
    getShapes: Q,
    getSegments: ee,
    getCuts: ae,
    setActiveStockAutoId: K
  }, Qn;
}
function Or(t) {
  const e = t.x, n = t.x + t.l, i = Lt().domain([e, n]).range([this.scales.xPositionScale(e), this.scales.xPositionScale(n)]), s = t.y, a = t.y + t.w, o = Lt().domain([s, a]).range([this.scales.yPositionScale(s), this.scales.yPositionScale(a)]), l = 8;
  this.axes.shapeXAxis ? this.axes.shapeXAxis.attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).call(Yi(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + l})`).attr("class", "axis shape x").call(Yi(i).tickValues(i.domain()).tickSize(4).tickFormat(this.formatNumber)), t?.stock?.saw?.stockType !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.attr("transform", `translate(${this.state.padding - l}, 0)`).call(Xi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - l}, 0)`).attr("class", "axis shape y").call(Xi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Ir() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((e) => {
    e.transition().duration(0).call(Cl(this.scales.xScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dy", -5);
  });
  const t = this.requiresStretch(this.props.stock.value);
  (!t || t && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((e) => {
    e.transition().duration(0).call(Ol(this.scales.yAxisScale).ticks(5).tickSize(5)), e.selectAll("text").attr("dx", 5);
  });
}
function fi(t, e, n) {
  !n || !t?.length || t.forEach((i, s) => {
    const [a, o] = i;
    n === "x" ? Ar.call(this, a, o, e[s]) : Pr.call(this, a, o, e[s]);
  });
}
function Ar(t, e, n) {
  const i = Lt().domain([t, e]).range([
    this.scales.xPositionScale(t),
    this.scales.xPositionScale(e)
  ]), s = Ca(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Yi(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  a.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, r) => r[l]?.getBBox()?.height + 10), this.axes.cutMeasurementXAxes.push(a);
}
function Pr(t, e, n) {
  const i = Lt().domain([t, e]).range([
    this.scales.yPositionScale(t),
    this.scales.yPositionScale(e)
  ]), s = Ca(i.domain()), a = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Xi(i).tickValues([s]).tickSize(4).tickFormat(() => this.formatNumber(n)));
  Lr(a), this.axes.cutMeasurementYAxes.push(a);
}
function Ca(t) {
  return (t[1] - t[0]) / 2 + t[0];
}
function Lr(t) {
  t.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (e, n, i) => i[n]?.getBBox()?.height + 10).attr("dx", (e, n, i) => i[n]?.getBBox()?.width / 4).attr("transform", (e, n, i) => "rotate(90) translate(" + i[n]?.getBBox()?.width / 4 + ")");
}
function jn() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Fr() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function gi() {
  this.axes.cutMeasurementXAxes?.length && (this.axes.cutMeasurementXAxes.forEach((t) => t.remove()), this.axes.cutMeasurementXAxes.length = 0), this.axes.cutMeasurementYAxes?.length && (this.axes.cutMeasurementYAxes.forEach((t) => t.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function as(t) {
  return t.autoId;
}
function Tr(t, e) {
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
function Gi({ parent: t, near: e, far: n, offcuts: i = [] }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [t, e, n, ...i].filter((a) => a);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, as).join(
    (a) => a.append("rect").attr("class", "segment").call((o) => $s.call(this, o)),
    (a) => a.call((o) => $s.call(this, o)),
    (a) => a.remove()
  ), this.state.env === "development" && Er.call(this, s), !this.settings.app && this.state.env === "development" && $r.call(this);
}
function $s(t) {
  return t.classed("offcut", (e) => e.offcut).classed("near", (e) => e.type === "near").classed("far", (e) => e.type === "far").classed("parent", (e, n) => e.id !== "root" && n === 0).attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e));
}
function Er(t) {
  this.selections.segmentGroup.selectAll("text").data(t, as).join(
    (e) => e.append("text").attr("class", "segment-text").call((n) => Ms.call(this, n)),
    (e) => e.call((n) => Ms.call(this, n)),
    (e) => e.remove()
  );
}
function Ms(t) {
  return t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("text-anchor", "middle").attr("dominant-baseline", "middle");
}
function $r() {
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
      if (n = Tr(s, e), n) break;
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
function Ia(t, e = []) {
  if (!t) return e;
  if (t.offcut && e.push(t), t.children && Array.isArray(t.children))
    for (const n of t.children)
      Ia(n, e);
  return e;
}
function Mr() {
  if (!this.props.containerWidth || !this.props.segments?.value?.length)
    return;
  const t = [];
  for (const n of this.props.segments.value)
    Ia(n, t);
  if (!t.length) return;
  this.selections.segmentGroup.attr("display", "block");
  const e = (n) => n.attr("x", (i) => this.getRectangleCoordinate(i, "x")).attr("y", (i) => this.getRectangleCoordinate(i, "y")).attr("width", (i) => this.getWidthAttribute(i)).attr("height", (i) => this.getHeightAttribute(i));
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(t, as).join(
    (n) => n.append("rect").attr("class", "segment offcut").call(e),
    (n) => n.call(e),
    (n) => n.remove()
  );
}
const { currentCutIndex: Nr } = ss();
function Br() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (t, e) => e).join(
    (t) => t.append("line").attr("class", "cut").call((e) => Ns.call(this, e)),
    (t) => t.call((e) => Ns.call(this, e)),
    (t) => t.remove()
  ), La.call(this));
}
function Ns(t) {
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
function Aa(t, e, n) {
  return t.guillotineState.parentSegmentID === e && n && t.guillotineState.segmentCutOrder < n;
}
function Pa(t, e) {
  return t.guillotineState?.parentSegmentID !== null && !t?.isTrim ? t.guillotineState.parentSegmentID === e : !1;
}
function Vr(t, e, n, i) {
  this.selections.cutLines.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] || !i && a.guillotineState.parentSegmentID === e ? "visible" : "hidden"), Nr.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (a) => typeof t.guillotineState[n] == "number" && a.guillotineState[n] <= t.guillotineState[n] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (a) => t.stock.cutType === "guillotine" && a.isTrim ? a.position === t.type : a.guillotineState[n] === t.guillotineState[n]), this.selections.cutLines.classed("ptx-dummy", (a) => a?.ptxData?.isDummy), i || Rr.call(this, t, e);
}
function Dr(t, e, n, i, s) {
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
    this.state.device === "desktop" && !t.isTrim && fi.call(this, a, o, i);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === e);
}
function La() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections?.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), this.selections?.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return Math.max(1, Math.ceil(e));
  }), jn.call(this), gi.call(this);
}
function Rr(t, e) {
  const n = t?.guillotineState?.segmentCutOrder;
  if (n == null) return;
  this.selections.cutLines.classed("completed", (x) => Aa(x, e, n)), this.selections.cutLines.classed("inside-segment", (x) => Pa(x, e));
  const i = Oa.call(this, t);
  if (i === !1) return;
  const { parent: s, children: a } = i, { near: o } = Fa(t, a);
  if (!o) return;
  let l = [], r;
  const p = this.getHalfBladeWidth(t.stock), b = t.dimension === "l" ? "y" : "x";
  t?.dimension === "l" ? (l = [
    [
      o.y,
      o.y + o.w
    ],
    [
      t.y1 + p,
      s.y + s.w
    ]
  ], r = [t?.distances?.bottom, t?.distances.top]) : t?.dimension === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      t.x1 + p,
      s.x + s.l
    ]
  ], r = [t?.distances?.left, t?.distances?.right]), this.state.device === "desktop" && !t.isTrim && r && fi.call(this, l, r, b);
}
function jr(t = null, e = "") {
  if (t === null || this.selections.cutLines.empty()) return;
  const n = this.props.cuts.value[t];
  if (!n) return;
  if (jn.call(this), gi.call(this), t !== null && t >= 0 && t < this.selections.cutLines.size()) {
    const B = this.selections.cutLines.nodes()[t].parentElement;
    if (!B) return;
    Qe(B).raise();
  }
  const i = n.guillotineState?.parentSegmentID, s = this.getHalfBladeWidth(n.stock), a = n.dimension === "l" ? "y" : "x", o = n?.stock?.trim, l = e === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes(n?.stock?.cutType) && i !== null && typeof i < "u" ? Vr.call(this, n, i, l, e) : Dr.call(this, n, t, o, a, s), qr.call(this, n, t, i), e === "ptx") {
    this.removeSegments();
    return;
  }
  if (n.isTrim) {
    if (this.removeSegments(), this.state.device === "desktop") {
      const B = n.stock;
      if (n.dimension === "l") {
        const J = n.position === "bottom", N = J ? n.distances?.bottom : n.distances?.top;
        if (N) {
          const R = J ? [[0, N]] : [[B.w - N, B.w]];
          fi.call(this, R, [N], "y");
        }
      } else if (n.dimension === "w") {
        const J = n.position === "left", N = J ? n.distances?.left : n.distances?.right;
        if (N) {
          const R = J ? [[0, N]] : [[B.l - N, B.l]];
          fi.call(this, R, [N], "x");
        }
      }
    }
    return;
  }
  const r = Oa.call(this, n);
  if (r === !1)
    return;
  const { parent: p, children: b } = r;
  if (!n?.guillotineState?.parentSegmentID)
    return Gi.call(this, { parent: p });
  if (n.stock?.cutType === "beam" && p.phase === 0) {
    const J = this.props.segments.value.find((oe) => oe.stock?.autoId === n.stock?.autoId)?.children || b, N = J.find((oe) => oe.offcut === !0 && oe.y === 0 && oe.isTrimOffcut === !0), R = J.find((oe) => oe.offcut === !0 && oe !== N && oe.y + oe.w >= n.stock.w - (n.stock.trim?.l2 || 0)), H = J.filter((oe) => !oe.offcut), U = H.find((oe) => oe.type === "near"), ye = H.find((oe) => oe.type === "far"), X = [N, R].filter(Boolean);
    return Gi.call(this, { parent: p, near: U, far: ye, offcuts: X });
  }
  const { near: x, far: h, offcuts: O } = Fa(n, b);
  Gi.call(this, { parent: p, near: x, far: h, offcuts: O });
}
function Fa(t, e) {
  const n = t.dimension === "l" ? "y" : "x", i = t.dimension === "l" ? "w" : "l", s = t.stock?.cutType === "beam";
  let a, o;
  s ? (a = e.find((r) => r.type === "near" && !r.offcut), o = e.find((r) => r.type === "far" && !r.offcut)) : (a = e.find((r) => r.type === "near" && r[n] + r[i] === t[n + "1"] - t.stock.halfBladeWidth), o = e.find((r) => r.type === "far" && r[n] === t[n + "1"] + t.stock.halfBladeWidth));
  const l = e.filter((r) => r.offcut === !0 && r !== a && r !== o);
  return { near: a, far: o, offcuts: l };
}
function qr(t, e, n) {
  this.selections.cutLines.attr("stroke-width", (i, s) => {
    const a = this.scales.measurementScale(this.getBladeWidth(i.stock));
    let o = Math.max(1, Math.ceil(a));
    const l = t?.guillotineState?.segmentCutOrder;
    return (Aa(i, n, l) || Pa(i, n)) && (o += 1), s === e && Math.ceil(this.scales.measurementScale(this.getBladeWidth(i.stock))) < 5 && (o = 5), o;
  });
}
function Gr(t) {
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
  const i = Bo(
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
        b.attr("class", "ray").attr("x1", (x) => this.scales.xPositionScale(x.x1)).attr("x2", (x) => this.scales.xPositionScale(x.x2)).attr("y1", (x) => this.scales.yPositionScale(x.y1)).attr("y2", (x) => this.scales.yPositionScale(x.y2));
      };
      if (this.state.env !== "development") return;
      const p = Vo(this.props.shapes.value, this.props.stock.value).flatMap((b) => Object.values(b.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(p, o).join(
        (b) => b.append("line").call((x) => l.call(this, x)),
        (b) => b.call((x) => l.call(this, x)),
        (b) => b.remove()
      );
    }
    s = Do(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const a = new Ro();
  for (const o of i.toArray()) {
    const l = jo(t, o, this.props.stock.value);
    l && a.addPoints(l.toArray());
  }
  if (s) {
    const o = s.toArray();
    for (const l of o) {
      const r = qo(t, l, this.props.stock.value);
      r && a.addPoints(r.toArray());
    }
  }
  if (this.props.stock.value.cutType === "efficiency") {
    const o = this.props.stock.value;
    [
      new vn(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new vn(o.trim.w1 ?? 0, o.trim.l1 ?? 0),
      new vn(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.trim.l1 ?? 0
      ),
      new vn(
        o.trim.w1 ?? 0,
        o.w - t.w - (o.trim.l2 ?? 0)
      ),
      new vn(
        o.l - t.l - (o.trim.w2 ?? 0),
        o.w - t.w - (o.trim.l2 ?? 0)
      )
    ].forEach((l) => a.add(l)), e = a.toArray();
  } else {
    const o = this.props.stock.value;
    a.add(new vn(o.trim.w1 ?? 0, o.trim.l1 ?? 0)), e = a.toArray();
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
  return console.log("[Diagram] drawPositions: filtered positions count:", e?.length), Ur.call(this, e, t), Wr.call(this, e, t), e?.length ? (console.log("[Diagram] drawPositions: success, returning true"), !0) : (console.warn("[Diagram] drawPositions: no valid positions after filtering"), !1);
}
function Ur(t, e) {
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
      s.stopPropagation(), Qe(this).classed("hover", !0), Qe(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), Qe(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function Wr(t, e) {
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
      s.stopPropagation(), Qe(this).classed("hover", !0);
      const a = Qe(this).attr("data-id"), o = Qe(`.ghost[data-id="${a}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(s) {
      s.stopPropagation(), Qe(this).classed("hover", !1);
      const a = Qe(this).attr("data-id");
      Qe(`.ghost[data-id="${a}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
function zr() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Bs.call(this, e)).classed("hidden", (e, n, i) => this.isTextHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.text((e) => Bs.call(this, e)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => Vs.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.text((e) => Vs.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, n, i) => this.isNameHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const s = i[n];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(s.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text length").text((e) => Ds.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    }),
    (t) => t.text((e) => Ds.call(this, e)).classed("hidden", (e, n, i) => this.isLengthHidden(e, n, i)).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, n, i) => {
      const a = i[n].getBBox().height;
      return this.getRectangleCoordinate(e, "y", "top", -(a / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Rs.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, n, i) => {
      const s = i[n], a = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(s.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(e, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${a},${o}) rotate(${l})`;
    }),
    (t) => t.text((e) => Rs.call(this, e)).classed("hidden", (e, n, i) => this.isWidthHidden(e, n, i)).attr("transform", (e, n, i) => {
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
function Bs(t) {
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
function Vs(t) {
  return !t?.name || typeof t?.name != "string" ? null : t.name.toUpperCase().trim();
}
function Ds(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : ve({ v: t.l, o: this.numberConfig }).toString();
}
function Rs(t) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : ve({ v: t.w, o: this.numberConfig }).toString();
}
const Hr = (t) => t.id;
function _r() {
  if (!this.props.containerWidth) return;
  jn.call(this);
  const t = this.props.shapes.value.reduce((e, n) => {
    const i = parseInt(n.parentId);
    return i > e ? i : e;
  }, 0);
  this.scales.shapeColorScale.domain([1, t]), this.state.env === "development" && Zr.call(this), Kr.call(this);
}
function Kr() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Hr).join(
    (t) => {
      const e = t.append("g").attr("class", "shape-group");
      return js.call(this, e), qs.call(this, e), e.on("mousedown", Gs.bind(this)), e;
    },
    (t) => (js.call(this, t), qs.call(this, t), t.on("mousedown", Gs.bind(this)), t),
    (t) => t.remove()
  ), tc.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => zr.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Zr() {
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
  this.scales.scoreColorScale = si([Pt(251, 224, 255), Pt(122, 0, 138)]).domain([n, i]);
}
function js(t) {
  const e = t.selectAll("rect.shape").data((n) => [n]).join("rect").attr("class", "shape").attr("x", (n) => this.getRectangleCoordinate(n, "x")).attr("y", (n) => this.getRectangleCoordinate(n, "y")).attr("width", (n) => this.getWidthAttribute(n)).attr("height", (n) => this.getHeightAttribute(n)).style("fill", (n) => qn.call(this, n));
  this.selections.shapeRectangles ? this.selections.shapeRectangles = Il(
    this.selections.shapeRectangles.nodes().concat(e.nodes())
  ) : this.selections.shapeRectangles = e;
}
function qs(t) {
  !this.settings.main || this.settings.app || this.state.hasTouch || t.on("mouseover", (e) => {
    if (this?.props.moveMode && this.state.moving) return;
    const n = Qe(e.target);
    n.classed("hover", !0), n.classed("selected") || n.style("fill", this.config.colors.partSelected.toString());
  }, { passive: !0 }).on("mouseout", (e, n) => {
    const i = Qe(e.target);
    i.classed("hover", !1), i.classed("selected") || i.style("fill", qn.call(this, n));
  }, { passive: !0 });
}
function Gs(t, e) {
  if (this.state.moving || !this.settings.main)
    return !1;
  this.state.env === "development" && !this.props.moveMode.value && Jr.call(this, t, e), (this.settings.app || this.settings.embed) && Qr.call(this, t, e), this.state.device === "desktop" && !this.props.moveMode.value && (gi.call(this), Or.call(this, e)), this.props.moveMode.value ? (console.log("[Diagram] handleShapeClick: calling onAddToPartsBin", {
    shapeId: e.id
  }), this.callbacks.onAddToPartsBin(e)) : (console.log("[Diagram] handleShapeClick: calling findShape", {
    shapeId: e.id
  }), this.findShape.call(this, e.id));
}
function Jr(t, e) {
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
        ], Xr.call(this, e);
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
    console.table(Yr(e, n));
  }
}
function Yr(t, e) {
  return e.reduce((n, i) => {
    const s = oc(t, i);
    return n[i] = Array.isArray(s) ? s.join(", ") : s, n;
  }, {});
}
function Xr(t) {
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const e = t.guillotineData?.myStripParent;
  e && this.selections.shapeWrappers.filter((s) => s.id === e || s.group.addedAsGroup === e).select("rect").classed("highlight-a", !0);
  const n = this.props.shapes.value.find((i) => i.id === e)?.guillotineState?.myStripParent;
  n && this.selections.shapeWrappers.filter((s) => s.id === n || s.group.addedAsGroup === e).select("rect").classed("highlight-b", !0);
}
function Qr(t, e) {
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
      color: qn.call(this, e),
      notes: e?.notes
    };
    if (typeof this.callbacks.onPartClick == "function" && this.callbacks.onPartClick(n), this.settings.app) return !1;
  }
  if (this.settings.app) return !1;
}
function qn(t) {
  const e = Pt(204, 204, 204);
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (t.group.addedAsGroup)
          return Pt(43, 156, 16);
        if (t.firstShape.isFirstShape)
          return Pt(255, 171, 231);
        if (typeof t.guillotineState.myPhase == "number") {
          const s = [0, 115, 255], a = [176, 255, 231];
          return `rgb(${s.map((l, r) => Math.round(l + t.guillotineState.myPhase / 5 * (a[r] - l))).join(",")})`;
        }
        break;
      case "groups":
        if (t.group.addedAsGroup)
          return Pt(43, 156, 16);
        break;
      case "priorityShapes":
        if (t?.priority && t.priority?.[t.stock.parentId])
          return Pt(139, 171, 46);
        break;
      case "placementOrder": {
        const s = this.props.shapes.value.reduce((a, o) => {
          const l = o.placementOrder ?? 0;
          return l > a ? l : a;
        }, 0);
        if (s > 0 && typeof t.placementOrder == "number") {
          const a = [0, 115, 255], o = [255, 50, 50], l = t.placementOrder / s;
          return `rgb(${a.map((p, b) => Math.round(p + l * (o[b] - p))).join(",")})`;
        }
        break;
      }
      case "score": {
        const s = t?.bestScore?.total ? this.scales.scoreColorScale(t.bestScore.total) : null;
        if (s != null && typeof s.toString == "function")
          return s;
        if (s != null && typeof s.r == "number" && typeof s.g == "number" && typeof s.b == "number")
          return console.warn("Detected corrupted score color object from scale:", s, "for shape:", t), Pt(s.r, s.g, s.b, s.opacity ?? 1);
      }
    }
  const n = parseInt(t.parentId);
  let i;
  return this.scales.shapeColorScale && typeof this.scales.shapeColorScale == "function" ? i = this.scales.shapeColorScale(n) : (console.error("shapeColorScale is not initialized or is not a function!", this.scales.shapeColorScale), i = null), i != null && typeof i.toString == "function" ? i : i != null && typeof i.r == "number" && typeof i.g == "number" && typeof i.b == "number" ? Pt(i.r, i.g, i.b, i.opacity ?? 1) : (console.warn("Shape color scale returned null, undefined, or unexpected non-color value for shape:", t, i), e);
}
const Us = 3;
function ec(t) {
  const e = [];
  for (const n of t) {
    const i = n.extras?.banding;
    if (n.added && i?.sides)
      for (const [s, a] of Object.entries(i.sides)) {
        if (!a || ["a", "b", "c", "d"].includes(s)) continue;
        let o = s;
        if (n.rot) {
          const r = ma({ [s]: !0 }, "cc");
          o = Object.keys(r)[0];
        }
        const l = nc.call(this, n, o);
        l && e.push(l);
      }
  }
  return e;
}
function Ws(t) {
  const e = Us / 2;
  return t.attr("class", "banding").attr("x1", (n) => this.scales.xPositionScale(n.l1) + ei.call(this, n.type, "x", e)).attr("x2", (n) => this.scales.xPositionScale(n.l2) + ei.call(this, n.type, "x", e)).attr("y1", (n) => this.scales.yPositionScale(n.w1) + ei.call(this, n.type, "y", e)).attr("y2", (n) => this.scales.yPositionScale(n.w2) + ei.call(this, n.type, "y", e)).attr("stroke-width", Us).attr("stroke", "white");
}
function tc(t) {
  if (!this.settings.main) return;
  const e = ec.call(this, t);
  if (e.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(e, (n, i) => i).join(
    (n) => n.append("line").call((i) => Ws.call(this, i)),
    (n) => n.call((i) => Ws.call(this, i)),
    (n) => n.remove()
  );
}
function ei(t, e, n) {
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
function nc(t, e) {
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
function ic(t) {
  this.selections.shapeWrappers.style("visibility", (e) => e?.placementOrder >= t ? "hidden" : "visible");
}
const zs = (t) => t.id;
function Hs(t) {
  return t.style("fill", this.config.colors.stock).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function _s(t) {
  return t.style("fill", (e) => `url(#grain-${e.grain || "n"})`).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function sc() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Ir.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], zs).join(
    (t) => t.append("rect").attr("class", "background stock").call((e) => Hs.call(this, e)),
    (t) => t.call((e) => Hs.call(this, e)),
    (t) => t.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], zs).join(
    (t) => t.append("rect").attr("class", "stock-pattern").call((e) => _s.call(this, e)),
    (t) => t.call((e) => _s.call(this, e)),
    (t) => t.remove()
  );
}
function ac(t) {
  return typeof t == "string" && t.length === 6 && !isNaN(+("0x" + t.replace("#", "")));
}
function oc(t, e) {
  return Al(t, e);
}
class lc {
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
    if (this.config = e, this.selections = {}, !e.elementID || (this.selections.el = Qe(e.elementID), this.selections.el === null)) return;
    const n = this.selections.el.node();
    n !== null && (this.selections.htmlEl = n, this.scales = {
      xScale: Lt(),
      yScale: Lt(),
      yPositionScale: Lt(),
      xPositionScale: Lt(),
      yAxisScale: Lt(),
      measurementScale: Lt(),
      shapeColorScale: si(),
      scoreColorScale: si()
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
    }, i = (s, a) => Pt("#" + (ac(s?.replace("#", "")) ? s.replace("#", "") : a.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(n).map(([s, a]) => [
        s,
        i(e.colors?.[s], a)
      ])
    ), this.scales.shapeColorScale = si([
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
      this.selections.svgCanvas = Qe(e);
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
      const l = o[a], r = Qe(l);
      r.text(s.name);
      let p = r.text();
      const b = r.node();
      if (!b) return;
      let x = b.getComputedTextLength();
      const h = this.getWidthAttribute(s) - 20;
      for (; x > h && p.length > 0; )
        p = p.slice(0, -1), r.text(p.length ? p + "..." : ""), x = r.node().getComputedTextLength();
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (i) => qn.call(this, i));
    const n = Qe(e).select("rect");
    if (n) {
      n.classed("selected", !0), n.style("fill", this.config.colors.partSelected.toString());
      const i = Qe(e).datum();
      this.callbacks.onShapeSelect(i, e);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    _r.call(this);
  }
  drawStock() {
    sc.call(this);
  }
  drawCuts() {
    Br.call(this);
  }
  drawAllOffcuts() {
    Mr.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts(), this.state.debug === "offcuts" && this.drawAllOffcuts();
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
    return _e(e) && e !== null ? e.bladeWidth : 0;
  }
  getHalfBladeWidth(e = null) {
    const n = e.bladeWidth;
    return n !== void 0 && n > 0 ? n / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), jn.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Fr.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), gi.call(this);
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
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox(), o = this.scales.measurementScale(e.l), l = this.scales.yScale(e.w);
    return a.width >= o || a.height >= l - this.state.padding;
  }
  isNameHidden(e, n, i) {
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox(), o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return a.width >= o || l < 40;
  }
  isLengthHidden(e, n, i) {
    if (this.settings.app) {
      const r = this.scales.measurementScale(e.l), p = this.scales.measurementScale(e.w);
      return r < 50 || p < 50;
    }
    if (e?.stock?.saw?.stockType === "linear") return !1;
    const s = i[n];
    if (!s) return !0;
    const a = s.getBBox(), o = this.scales.measurementScale(e.l), l = this.scales.measurementScale(e.w);
    return a.width >= o || l < 30;
  }
  isWidthHidden(e, n, i) {
    if (this.settings.app)
      return this.scales.measurementScale(e.l) < 50 || this.scales.measurementScale(e.w) < 50;
    const a = i[n].getBBox();
    return this.scales.measurementScale(e.l) < 30 || a.height >= this.scales.measurementScale(e.w);
  }
  // Group Management
  /* initGroups( groups: InputUserGroup[] )
  	{
  		if ( !groups || !groups?.length || !this.settings.main || !this.props.containerWidth )
  			return false;
  
  		this.resetGroups();
  
  		this.selections.groupRectangles = this.selections.groupGroup
  			.selectAll( 'rect' )
  			.data( groups )
  			.join( 'rect' )
  			.attr( 'class', 'group' )
  			.attr( 'x', ( g ) => this.getRectangleCoordinate( g, 'x' ) )
  			.attr( 'y', ( g ) => this.getRectangleCoordinate( g, 'y' ) )
  			.attr( 'width', ( g ) => this.getWidthAttribute( g ) )
  			.attr( 'height', ( g ) => this.getHeightAttribute( g ) );
  
  		this.selections.groupGroup.attr( 'display', 'block' );
  
  		if ( this.state.env === 'development' )
  		{
  			this.setupGroupDebugEvents();
  		}
  	} */
  /* private setupGroupDebugEvents()
  {
  	if ( !this.state.hasTouch )
  	{
  		this.selections.groupRectangles
  			.on( 'mouseover', function()
  			{
  				d3.select( this ).classed( 'hover', true );
  			} )
  			.on( 'mouseout', function()
  			{
  				d3.select( this ).classed( 'hover', false );
  			} )
  			.on( 'mousedown', ( event, group ) =>
  			{
  				console.log( 'Group:', {
  					dimensions: {
  						x: group.x,
  						y: group.y,
  						width: group.w,
  						length: group.l
  					},
  					shapes: group.shapes.map( s => ( {
  						id: s.id,
  						parentId: s.parentId,
  						addedAsGroup: s.group.addedAsGroup
  					} ) )
  				} );
  			} );
  	}
  } */
  // Clear Selection
  clearSelection() {
    this?.selections?.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (e) => qn.call(this, e)), this?.selections?.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (e) => {
      const n = this.scales.measurementScale(this.getBladeWidth(e.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    jn.call(this);
  }
  updateShapeVisibility() {
    ic.call(this);
  }
  drawPositions(e) {
    return Gr.call(this, e);
  }
  showCut(e) {
    jr.call(this, e);
  }
  resetCuts() {
    La.call(this);
  }
}
const rc = ["id"], cc = /* @__PURE__ */ tt({
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
    moveMode: { default: () => W(!1) }
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
      getStock: p,
      getShapes: b,
      getSegments: x,
      getCuts: h
    } = ss(), O = t, B = n, J = (fe) => {
      B("part-click", fe);
    }, N = (fe) => {
      B("shape-colour-update", fe);
    }, R = (fe, Ye) => {
      fe?.autoId && B("shape-select", fe.autoId, Ye);
    }, H = (fe) => {
      fe && B("add-to-parts-bin", fe);
    }, U = (fe, Ye) => {
      fe && B("move-shape", fe, Ye);
    }, ye = W(0), X = W(0), oe = W(null);
    let j, G = W(!1);
    const P = wt({
      debug: "",
      stretched: !1
    }), S = () => {
      j?.state && (P.stretched = j.state.stretched);
    };
    cn(() => V());
    const _ = L(() => ({
      format: O.numberFormat,
      decimals: O.decimalPlaces
    })), Q = L(() => O.stockAutoId ? p(O.stockAutoId) : s.value), ee = L(() => O.stockAutoId ? b(O.stockAutoId) : a.value), ae = L(() => O.main ? O.stockAutoId ? h(O.stockAutoId) : o.value : []), $e = L(() => O.main ? O.stockAutoId ? x(O.stockAutoId) : l.value : []);
    uo(oe, (fe) => {
      const Ye = fe[0], { width: De, height: Wt } = Ye.contentRect;
      De > 0 && (ye.value = De), B("resize", { width: De, height: Wt });
    }), fo(
      ye,
      (fe) => {
        j && (fe <= 0 || (j.setDevice(), j.resetShapeAxes(), j.drawAll(), S(), r.value !== null && (j.toggleSegments(!0), j.showCut(r.value))));
      },
      { throttle: 100 }
    );
    let K = !1;
    ze(() => Q.value, (fe) => {
      fe && (ye.value <= 0 || (K = !0, j.setDevice(), j.resetCuts(), j.removeSegments(), j.drawStock(), j.drawShapes(), j.drawCuts(), S(), mt(() => K = !1)));
    }, { immediate: !1 }), ze(() => ee.value, (fe) => {
      K || fe && (ye.value <= 0 || (j.setDevice(), j.drawShapes()));
    }, { immediate: !1, deep: !0 }), O.main && (ze(() => ae.value, () => {
      K || ye.value <= 0 || j.drawCuts();
    }, { immediate: !1, deep: !0 }), ze(r, () => {
      r.value !== null && (ye.value <= 0 || (j.toggleSegments(!0), j.showCut(r.value)));
    }, { immediate: !1 }), ze(_, (fe) => {
      j.updateNumberFormat(fe.format, fe.decimals, null);
    }, { immediate: !1 }));
    const V = () => {
      const fe = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${O.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: O.numberFormat,
          decimalPlaces: O.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: O.colors || null,
        settings: {
          main: O.main,
          app: O.app,
          embed: O.embed,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: X,
          containerWidth: ye,
          stock: Q,
          shapes: ee,
          cuts: ae,
          segments: $e,
          stockList: i.stockList,
          moveMode: O.moveMode,
          app: O.app
        },
        options: {
          disableClick: O.disableClick,
          enableStretch: O.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: N,
          onShapeSelect: R,
          onAddToPartsBin: H,
          onMoveShape: U,
          onPartClick: J
        }
      };
      j = new lc(fe), P.debug = j.state.debug, G.value = !0;
    }, D = (fe = !1) => {
      j && j.toggleShapes(fe);
    }, re = (fe = !1) => {
      j && j.toggleCuts(fe);
    }, pe = (fe = !1) => {
      j && j.toggleSegments(fe);
    }, Ce = () => {
      j && j.drawShapes();
    }, Ue = () => {
      j && (j.drawStock(), S());
    }, et = () => {
      j && (j.toggleSegments(!1), j.resetCuts());
    }, Je = (fe) => {
      j && (j.toggleSegments(!0), j.showCut(fe));
    }, Ut = (fe) => j ? j.drawPositions(fe) : !1, ft = () => {
      j && j.removePositions();
    }, $t = (fe) => {
      j && j.findShape(fe);
    }, kt = () => {
      j && j.clearSelection();
    }, nt = (fe) => j ? j.requiresStretch(fe) : !1, xt = (fe) => {
      j?.options && (j.options.enableStretch = fe, j.setAspectRatio(), j.drawAll(), S());
    }, st = () => j?.options?.enableStretch ?? !0;
    return ze(() => P.debug, (fe) => {
      j?.state && (j.state.debug = fe);
    }), e({
      loaded: G,
      toggleShapes: D,
      toggleCuts: re,
      toggleSegments: pe,
      drawShapes: Ce,
      drawStock: Ue,
      drawPositions: Ut,
      resetPositions: ft,
      findShape: $t,
      clearSelection: kt,
      resetCuts: et,
      showCut: Je,
      requiresStretch: nt,
      setEnableStretch: xt,
      getEnableStretch: st,
      state: P,
      get stretched() {
        return P.stretched;
      },
      set moving(fe) {
        j?.state && (j.state.moving = fe);
      }
    }), (fe, Ye) => (E(), Z("div", {
      id: t.elementId,
      ref_key: "diagramContainerRef",
      ref: oe,
      class: it([{ app: t.app }, "diagram-container"])
    }, null, 10, rc));
  }
}), yt = W(null);
let uc = 0;
function dc(t) {
  const e = t || `action-menu-${++uc}-${Date.now()}`, n = L({
    get: () => yt.value === e,
    set: (b) => {
      b ? yt.value = e : yt.value === e && (yt.value = null);
    }
  }), i = () => {
    yt.value = e;
  }, s = () => {
    yt.value === e && (yt.value = null);
  }, a = () => {
    yt.value = null;
  }, o = () => {
    n.value = !n.value;
  }, l = L(() => yt.value !== null), r = L(() => yt.value), p = L(() => yt.value === e);
  return {
    // Instance-specific
    id: ut(W(e)),
    isOpen: n,
    open: i,
    close: s,
    toggle: o,
    isThisMenuOpen: p,
    // Global singleton state (shared across all instances)
    closeAll: a,
    isAnyMenuOpen: l,
    currentOpenMenuId: r
  };
}
const fc = { class: "action-menu" }, pc = ["textContent"], hc = {
  key: 0,
  class: "menu-divider"
}, gc = {
  key: 1,
  class: "group-label"
}, mc = /* @__PURE__ */ tt({
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
    const n = t, i = e, { isOpen: s, close: a, toggle: o } = dc(n.menuId), l = W(), r = W(), p = L(() => n.disabled), b = L(() => n.label), x = L(() => n.showLabel), h = L(() => n.icon), { floatingStyles: O } = po(l, r, {
      placement: n.placement,
      whileElementsMounted: Tl,
      middleware: [
        Pl(n.offset),
        Ll(),
        Fl({ padding: 8 })
      ]
    }), B = (S) => {
      if (!S) return ["fas", "question"];
      if (typeof S == "function" && (S = S(n)), Array.isArray(S))
        return S;
      if (typeof S == "string") {
        const _ = S.split(" ");
        if (_.length >= 2) {
          const Q = _[0], ee = _.slice(1).join("-").replace("fa-", "");
          return [Q, ee];
        }
        return ["fas", S.replace("fa-", "")];
      }
      return ["fas", "question"];
    }, J = L(() => B(h.value)), N = (S) => typeof S.active == "function" ? S.active(n) : typeof S.active == "boolean" ? S.active : !1, R = (S) => {
      if (!S.href) return !1;
      try {
        const _ = typeof S.href == "function" ? S.href(n) : S.href;
        return new URL(_, window.location.origin).origin !== window.location.origin;
      } catch {
        return !1;
      }
    }, H = (S) => S.href ? "a" : "div", U = (S) => {
      const _ = {};
      if (S.href) {
        const Q = typeof S.href == "function" ? S.href(n) : S.href;
        if (_.href = Q, R(S)) {
          const ee = typeof S.target == "function" ? S.target(n) : S.target;
          _.target = ee || "_blank", _.rel = S.rel || "noopener noreferrer";
        } else if (S.target) {
          const ee = typeof S.target == "function" ? S.target(n) : S.target;
          _.target = ee;
        }
        S.rel && (_.rel = S.rel);
      }
      return S.attrs && Object.assign(_, S.attrs), _;
    }, ye = L(() => n.menuItems.map((S) => {
      const _ = { ...S };
      return typeof S.href == "function" && (_.href = S.href(n)), typeof S.icon == "function" && (_.icon = S.icon(n)), typeof S.disabled == "function" && (_.disabled = S.disabled(n)), typeof S.label == "function" && (_.label = S.label(n)), typeof S.variant == "function" && (_.variant = S.variant(n)), typeof S.active == "function" && (_.active = S.active(n)), typeof S.target == "function" && (_.target = S.target(n)), typeof S.show == "function" && (_.show = S.show(n)), _;
    })), X = (S) => {
      S.stopPropagation(), S.preventDefault(), !p.value && o();
    }, oe = (S, _) => {
      if (_.stopPropagation(), S.disabled && !S.href) {
        _.preventDefault();
        return;
      }
      if (typeof S.action == "function" && S.action(S) === !1 && S.href) {
        _.preventDefault();
        return;
      }
      i("action", {
        id: S.id,
        item: S
      }), S.href && n.closeOnLinkClick ? a() : S.href || a();
    }, j = (S) => {
      const _ = [];
      if (S.variant) {
        const ee = typeof S.variant == "function" ? S.variant(n) : S.variant;
        _.push(`variant-${ee}`);
      }
      if ((typeof S.disabled == "function" ? S.disabled(n) : S.disabled) && !S.href && _.push("disabled"), N(S) && _.push("active"), S.href && _.push("menu-link"), R(S) && _.push("external-link"), S.class) {
        const ee = typeof S.class == "function" ? S.class(n) : S.class;
        _.push(ee);
      }
      return _.join(" ");
    }, G = (S) => {
      const _ = S.target;
      s.value && l.value && r.value && !l.value.contains(_) && !r.value.contains(_) && a();
    }, P = (S) => {
      S.key === "Escape" && s.value && a();
    };
    return cn(() => {
      document.addEventListener("click", G), document.addEventListener("keydown", P);
    }), pi(() => {
      document.removeEventListener("click", G), document.removeEventListener("keydown", P);
    }), (S, _) => (E(), Z("div", fc, [
      le("div", {
        ref_key: "trigger",
        ref: l,
        onClick: X,
        class: it(["actions-btn", { active: A(s), disabled: p.value }])
      }, [
        h.value ? (E(), Ee(A(li), {
          key: 0,
          icon: J.value,
          class: "icon"
        }, null, 8, ["icon"])) : de("", !0),
        x.value ? (E(), Z("span", {
          key: 1,
          class: "label",
          textContent: Ae(b.value)
        }, null, 8, pc)) : de("", !0)
      ], 2),
      (E(), Ee(ho, { to: "body" }, [
        A(s) && !p.value ? (E(), Z("div", {
          key: 0,
          ref_key: "floating",
          ref: r,
          style: St(A(O)),
          class: "smartcut-dropdown-menu",
          "data-app": "smartcut",
          onClick: _[0] || (_[0] = go(() => {
          }, ["stop"]))
        }, [
          (E(!0), Z(lt, null, qt(ye.value, (Q, ee) => (E(), Z(lt, { key: ee }, [
            Q.type === "divider" ? (E(), Z("div", hc)) : Q.type === "group" ? (E(), Z("div", gc, Ae(Q.label), 1)) : Q.show !== !1 ? (E(), Ee(mo(H(Q)), Xt({
              key: 2,
              ref_for: !0
            }, U(Q), {
              onClick: (ae) => oe(Q, ae),
              id: Q.id,
              class: ["menu-item", j(Q)],
              disabled: Q.disabled && !Q.href
            }), {
              default: ri(() => [
                Q.icon || N(Q) ? (E(), Ee(A(li), {
                  key: 0,
                  icon: N(Q) ? ["fass", "check"] : B(Q.icon)
                }, null, 8, ["icon"])) : de("", !0),
                le("span", null, Ae(Q.label), 1)
              ]),
              _: 2
            }, 1040, ["onClick", "id", "class", "disabled"])) : de("", !0)
          ], 64))), 128))
        ], 4)) : de("", !0),
        A(s) && !p.value ? (E(), Z("div", {
          key: 1,
          class: "backdrop",
          onClick: _[1] || (_[1] = //@ts-ignore
          (...Q) => A(a) && A(a)(...Q))
        })) : de("", !0)
      ]))
    ]));
  }
}), Ks = (t, e, n) => {
  if (e === "unitDependent")
    if (n === "fraction") {
      if (/\/0$/.test(t))
        return {
          value: t,
          valid: !1,
          message: "division_by_zero"
        };
      const i = /^-?\d*(\s+\d*)?(\/\d*)?$/.test(t), s = fa(t);
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
function vc({
  props: t,
  emit: e,
  isMounted: n
}) {
  const i = W({
    isTyping: !1,
    isMouseDown: !1,
    isComposing: !1,
    lastValidValue: String(t.value ?? "")
  }), s = (l, r = !1) => {
    if (l == null || l === "") {
      const b = t.required && !t.disableRequiredValidation;
      return t.type === "string" ? b ? { value: null, valid: !1, message: "field_required" } : { value: l === null ? null : "", valid: !0 } : Go(l, "decimal", b);
    }
    const p = String(l);
    switch (t.type) {
      case "string":
        return { value: p, valid: !0 };
      case "unitDependent":
        if (r)
          return Ks(p, t.type, t.numberFormat);
        try {
          const b = ve({
            v: l,
            nf: t.numberFormat,
            dp: t.decimalPlaces,
            fr: t.fractionRoundTo
          });
          if (typeof b == "number") {
            let x = b, h = !0, O;
            return typeof t.min == "number" && x < t.min && (x = t.min, h = !1, O = "below_min"), typeof t.max == "number" && x > t.max && (x = t.max, h = !1, O = "above_max"), { value: x, valid: h, message: O };
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
          return Ks(p, t.type);
        try {
          const x = ve({
            v: l,
            nf: "decimal"
          });
          if (x === null)
            return t.required && !t.disableRequiredValidation ? { value: null, valid: !1, message: "errors.validation.field.required" } : { value: null, valid: !0 };
          let h = x;
          if (t.type === "integer" && (h = Math.round(h)), t.allowZero === !1 && h === 0)
            return {
              value: h,
              valid: !1,
              message: "zero_not_allowed"
            };
          let O = !0, B;
          return typeof t.min == "number" && h < t.min && (h = t.min, O = !1, B = "below_min"), typeof t.max == "number" && h > t.max && (h = t.max, O = !1, B = "above_max"), { value: h, valid: O, message: B };
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
        const p = s(r.value, !0);
        e("validation", p, t.id), e("input", r.value), a(p, !0) && e("update:value", p.value);
      },
      handleBlur: (l) => {
        if (!n.value) return;
        i.value.isTyping = !1;
        const r = l.target, p = s(r.value, !1);
        e("validation", p, t.id), a(p) && (e("update:value", p.value), i.value.lastValidValue = String(p.value ?? "")), e("blur", l);
      },
      handleFocus: (l) => {
        n.value && (i.value.isTyping = !0, e("focus", l));
      },
      handleKeydown: (l) => {
        if (n.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(l.key)) {
          if (!["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(l.key))
            if (t.type === "unitDependent" && t.numberFormat === "fraction") {
              const r = l.target, p = r.value, b = r.selectionStart || 0, x = p.substring(0, b);
              if (l.key === "/" && p.includes("/")) {
                l.preventDefault();
                return;
              }
              if (l.key === " " && /\s$/.test(x)) {
                l.preventDefault();
                return;
              }
              /^[-0-9\s/]$/.test(l.key) || l.preventDefault();
            } else (t.type === "integer" || t.type === "float") && ((t.type === "integer" ? /^[-0-9]$/.test(l.key) : /^[-0-9.]$/.test(l.key)) || l.preventDefault());
          if (l.key === "Enter") {
            i.value.isTyping = !1;
            const r = l.target, p = s(r.value, !1);
            e("validation", p, t.id), a(p) && (e("update:value", p.value), i.value.lastValidValue = String(p.value ?? "")), e("enter", p);
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
        const r = l.target, p = s(r.value, !1);
        e("validation", p, t.id), a(p) && (e("update:value", p.value), i.value.lastValidValue = String(p.value ?? ""));
      },
      handlePaste: (l) => {
        if (!n.value) return;
        const r = l.clipboardData?.getData("text")?.trim() || "";
        if (t.type === "unitDependent" && t.numberFormat === "fraction") {
          const p = r.replace(/[""'']/g, "").replace(/\s+/g, " ");
          if (!fa(p)) {
            l.preventDefault(), e("validation", {
              value: p,
              valid: !1,
              message: `Pasted text "${r}" is not a valid fraction format`
            }, t.id);
            return;
          }
          if (p !== r) {
            l.preventDefault();
            const b = l.target;
            b.value = p;
            const x = s(p, !0);
            e("validation", x, t.id), e("input", p);
          }
        }
        e("paste", l);
      }
    },
    processValue: s
  };
}
function bc({
  props: t,
  emit: e,
  isMounted: n
}) {
  const i = W({
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
function yc({
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
const wc = ["id", "name", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Sc = /* @__PURE__ */ tt({
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
    const n = t, i = e, s = W(!0), a = W(null), o = L(() => n.value === n.trueValue), {
      handleCheckboxChange: l,
      handleFocus: r,
      handleBlur: p
    } = yc({
      props: n,
      emit: i,
      isMounted: s
    });
    return (b, x) => (E(), Z("input", {
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
      onChange: x[0] || (x[0] = //@ts-ignore
      (...h) => A(l) && A(l)(...h)),
      onFocus: x[1] || (x[1] = //@ts-ignore
      (...h) => A(r) && A(r)(...h)),
      onBlur: x[2] || (x[2] = //@ts-ignore
      (...h) => A(p) && A(p)(...h))
    }, null, 40, wc));
  }
}), kc = ["for"], ti = /* @__PURE__ */ tt({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(t) {
    return (e, n) => (E(), Z("label", {
      for: t.id,
      class: "input-label"
    }, Ae(t.label), 9, kc));
  }
}), xc = ["id", "name", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Cc = ["disabled", "selected"], Oc = {
  key: 0,
  value: " "
}, Ic = ["hidden", "value", "disabled"], Ac = /* @__PURE__ */ tt({
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
    const n = t, i = e, s = W(!0), a = W(null), o = L(() => n.options.map((r) => ({
      value: r.value,
      label: r.label?.toUpperCase() ?? r.value?.toString()?.toUpperCase(),
      hidden: r.hidden ?? !1,
      disabled: r.disabled ?? !1
    }))), {
      handleSelectChange: l
    } = bc({
      props: n,
      emit: i,
      isMounted: s
    });
    return (r, p) => (E(), Z("select", Xt(r.$attrs, {
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
      onChange: p[0] || (p[0] = //@ts-ignore
      (...b) => A(l) && A(l)(...b))
    }), [
      le("option", {
        value: "",
        disabled: n.selectFirstOptionDisabled,
        selected: !n.value
      }, Ae(n.text?.select?.toUpperCase() ?? "SELECT"), 9, Cc),
      n.multiEdit ? (E(), Z("option", Oc, Ae(n.text?.delete?.toUpperCase() ?? "DELETE"), 1)) : de("", !0),
      (E(!0), Z(lt, null, qt(o.value, (b) => (E(), Z("option", {
        key: b.value,
        hidden: b.hidden,
        value: b.value,
        disabled: b.disabled
      }, Ae(b.label), 9, Ic))), 128))
    ], 16, xc));
  }
}), Pc = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "autocomplete", "aria-label", "aria-invalid", "aria-describedby"], is = /* @__PURE__ */ tt({
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
    const n = t, i = e, s = W(!0), a = W(null), {
      handleInput: o,
      handleMouseDown: l,
      handleMouseUp: r,
      handleFocus: p,
      handleBlur: b,
      handleKeydown: x,
      handleCompositionStart: h,
      handleCompositionEnd: O,
      handlePaste: B
    } = vc({
      props: n,
      emit: i,
      isMounted: s
    }), J = (N) => {
      const R = N.getBoundingClientRect(), H = window.getComputedStyle(N);
      return R.width > 0 && R.height > 0 && H.display !== "none" && H.visibility !== "hidden";
    };
    return cn(() => {
      (_e(n.default) && n.value === void 0 || n.value === null) && i("update:value", n.default), n.focus && a.value && J(a.value) && mt(() => a.value.focus());
    }), pi(() => {
      s.value = !1;
    }), (N, R) => (E(), Z("input", Xt(N.$attrs, {
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
      onInput: R[0] || (R[0] = //@ts-ignore
      (...H) => A(o) && A(o)(...H)),
      onFocus: R[1] || (R[1] = //@ts-ignore
      (...H) => A(p) && A(p)(...H)),
      onBlur: R[2] || (R[2] = //@ts-ignore
      (...H) => A(b) && A(b)(...H)),
      onKeydown: R[3] || (R[3] = //@ts-ignore
      (...H) => A(x) && A(x)(...H)),
      onCompositionstart: R[4] || (R[4] = //@ts-ignore
      (...H) => A(h) && A(h)(...H)),
      onCompositionend: R[5] || (R[5] = //@ts-ignore
      (...H) => A(O) && A(O)(...H)),
      onPaste: R[6] || (R[6] = //@ts-ignore
      (...H) => A(B) && A(B)(...H)),
      onMousedown: R[7] || (R[7] = //@ts-ignore
      (...H) => A(l) && A(l)(...H)),
      onMouseup: R[8] || (R[8] = //@ts-ignore
      (...H) => A(r) && A(r)(...H))
    }), null, 16, Pc));
  }
}), Lc = ["data-field-id"], Fc = {
  key: 0,
  class: "input-label-group"
}, Tc = {
  key: 1,
  class: "password-input-wrapper"
}, Ec = ["aria-label"], $c = ["disabled", "selected"], Mc = {
  key: 0,
  value: " "
}, Nc = ["hidden", "value", "disabled"], Bc = ["id", "name", "value", "disabled"], Vc = ["id", "name", "value", "placeholder", "disabled", "readonly", "required", "rows", "autocomplete"], Dc = {
  key: 2,
  class: "help-text"
}, Nn = /* @__PURE__ */ tt({
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
    const n = e, i = t, s = W(null), a = W(null), o = W(!0), l = W(i.numberFormat), r = W(!1), p = L(() => i.custom ? "custom-" + i.id : i.id), b = L(() => `${p.value}-error`), x = L(() => i.label || i.placeholder), h = L(() => _(i.type, i.numberFormat, r.value)), O = L(() => Q(i.type, i.numberFormat)), B = L(() => ["string", "integer", "float", "unitDependent", "password", "email", "tel"].includes(i.type)), J = L(() => {
      let K = i.value;
      if (i.multiEdit && (K === 0 || K === 1)) return null;
      if (i.type !== "unitDependent" || !K) return K;
      try {
        return ve({ v: K, nf: i.numberFormat });
      } catch {
        return i.numberFormat === "decimal" ? 0 : "0";
      }
    }), N = L(() => i.options.map((K) => ({
      value: K.value,
      label: K.label || K.value?.toString(),
      hidden: K.hidden || !1,
      disabled: K.disabled || !1
    }))), R = L(() => N.value.map((K) => {
      const V = K.label ? be(K.label) : K.value?.toString();
      return {
        ...K,
        // Translate the label key first, then uppercase the translated result
        label: V?.toUpperCase() || K.value?.toString().toUpperCase()
      };
    })), H = L(() => ({
      input: !0,
      issue: i.issue || !o.value,
      warning: i.warning,
      required: i.required,
      disabled: i.disabled
    })), U = L(() => ({
      id: p.value,
      name: i.name,
      value: i.value,
      disabled: i.disabled,
      readonly: i.readonly,
      required: i.required,
      "aria-label": x.value,
      "aria-invalid": !!i.issue,
      "aria-describedby": i.issue ? b.value : void 0
    })), ye = L(() => ({
      ...U.value,
      type: i.type,
      inputMode: O.value,
      inputType: h.value,
      placeholder: i.placeholder,
      allowZero: i.allowZero,
      min: i.min,
      max: i.max,
      focus: i.focus,
      numberFormat: i.numberFormat,
      default: i.default,
      disableRequiredValidation: i.disableRequiredValidation,
      autocomplete: i.autocomplete
    })), X = L(() => ({
      ...U.value,
      trueValue: i.trueValue,
      falseValue: i.falseValue
    })), oe = L(() => ({
      ...U.value,
      options: R.value,
      selectFirstOptionDisabled: i.selectFirstOptionDisabled,
      multiEdit: i.multiEdit,
      numberFormat: i.numberFormat,
      text: i.text,
      output: i.output
    })), j = L(() => (i.text?.select || "SELECT").toUpperCase()), G = L(() => (i.text?.delete || "DELETE").toUpperCase()), P = (K) => {
      a.value = K;
    }, S = (K) => i.label && i.enableLabel && i.labelPosition === K, _ = (K, V, D) => {
      switch (K) {
        case "integer":
        case "float":
          return "number";
        case "unitDependent":
          return V === "fraction" ? "text" : "number";
        case "password":
          return D ? "text" : "password";
        case "email":
          return "email";
        case "tel":
          return "tel";
        default:
          return "text";
      }
    }, Q = (K, V) => {
      if (K === "unitDependent")
        return V === "fraction" ? "text" : "decimal";
      switch (K) {
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
    }, ee = (K) => {
      n("update:value", K);
    }, ae = (K, V) => {
      K.valid === void 0 || K.valid === !0 ? (o.value = !0, n("validation", s.value, K)) : K.valid === !1 && K.message && (o.value = !1, console.warn(`Field validation error for field ${V} - ${K.message}`), n("validation", s.value, K));
    }, $e = () => {
      n("blur");
    };
    return ze(() => i.numberFormat, (K, V) => {
      if (i.shouldConvertNumberFormat !== !1) {
        if (i.type === "unitDependent" && K !== V && i.value !== null && i.value !== void 0 && i.value !== "")
          try {
            const D = ve({ v: i.value, nf: K });
            n("update:value", D);
          } catch {
            n("update:value", K === "decimal" ? 0 : "0");
          }
        l.value = K;
      }
    }), (K, V) => (E(), Z("div", {
      ref_key: "fieldRef",
      ref: s,
      class: it(["input-wrapper", H.value]),
      "data-field-id": p.value
    }, [
      t.type === "checkbox" ? (E(), Z("div", Fc, [
        S("first") ? (E(), Ee(ti, {
          key: 0,
          id: p.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : de("", !0),
        t.type === "checkbox" ? (E(), Ee(Sc, Xt({
          key: 1,
          ref: P,
          type: "checkbox"
        }, X.value, {
          value: t.value,
          "onUpdate:value": V[0] || (V[0] = (D) => n("update:value", D))
        }), null, 16, ["value"])) : de("", !0),
        S("last") ? (E(), Ee(ti, {
          key: 2,
          id: p.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : de("", !0)
      ])) : (E(), Z(lt, { key: 1 }, [
        S("first") ? (E(), Ee(ti, {
          key: 0,
          id: p.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : de("", !0),
        t.type === "password" ? (E(), Z("div", Tc, [
          Ge(is, Xt({ ref: P }, ye.value, {
            name: i.name,
            "input-type": h.value,
            "input-mode": O.value,
            value: J.value,
            "disable-required-validation": t.disableRequiredValidation,
            onValidation: ae,
            "onUpdate:value": ee,
            onBlur: $e
          }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"]),
          le("button", {
            type: "button",
            class: "password-toggle c-btn--unstyled",
            "aria-label": r.value ? "Hide password" : "Show password",
            onClick: V[1] || (V[1] = (D) => r.value = !r.value)
          }, Ae(r.value ? "🙈" : "👁"), 9, Ec)
        ])) : B.value ? (E(), Ee(is, Xt({
          key: 2,
          ref: P
        }, ye.value, {
          name: i.name,
          "input-type": h.value,
          "input-mode": O.value,
          value: J.value,
          "disable-required-validation": t.disableRequiredValidation,
          onValidation: ae,
          "onUpdate:value": ee,
          onBlur: $e
        }), null, 16, ["name", "input-type", "input-mode", "value", "disable-required-validation"])) : t.type === "select" ? (E(), Ee(Ac, Xt({
          key: 3,
          ref: P
        }, oe.value, {
          name: i.name,
          "onUpdate:value": V[2] || (V[2] = (D) => n("update:value", D))
        }), {
          default: ri(() => [
            le("option", {
              value: "",
              disabled: t.selectFirstOptionDisabled,
              selected: !t.value
            }, Ae(j.value), 9, $c),
            t.multiEdit ? (E(), Z("option", Mc, Ae(G.value), 1)) : de("", !0),
            (E(!0), Z(lt, null, qt(R.value, (D) => (E(), Z("option", {
              key: D.value,
              hidden: D.hidden,
              value: D.value,
              disabled: D.disabled
            }, Ae(D.label), 9, Nc))), 128))
          ]),
          _: 1
        }, 16, ["name"])) : t.type === "color" ? (E(), Z("input", {
          key: 4,
          id: p.value,
          name: i.name || p.value,
          ref: P,
          type: "color",
          value: t.value,
          disabled: t.disabled,
          onInput: V[3] || (V[3] = (D) => n("update:value", D.target.value))
        }, null, 40, Bc)) : t.type === "textarea" ? (E(), Z("textarea", {
          key: 5,
          id: p.value,
          name: i.name || p.value,
          ref: P,
          value: t.value,
          placeholder: t.placeholder,
          disabled: t.disabled,
          readonly: t.readonly,
          required: t.required,
          rows: t.rows,
          autocomplete: t.autocomplete,
          onInput: V[4] || (V[4] = (D) => n("update:value", D.target.value))
        }, null, 40, Vc)) : de("", !0),
        S("last") ? (E(), Ee(ti, {
          key: 6,
          id: p.value,
          label: t.label,
          required: t.required
        }, null, 8, ["id", "label", "required"])) : de("", !0)
      ], 64)),
      t.info ? (E(), Z("small", Dc, Ae(t.info), 1)) : de("", !0),
      Ki(K.$slots, "default")
    ], 10, Lc));
  }
}), Rc = {
  key: 0,
  class: "action-bar"
}, jc = { class: "add-custom" }, qc = ["disabled"], Gc = ["disabled", "title", "onClick"], Uc = {
  key: 1,
  class: "price"
}, Wc = /* @__PURE__ */ tt({
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
      getLocationLabel: p,
      getInputType: b,
      getInputConfigForLocation: x,
      getSelectOptions: h,
      getPriceDisplay: O,
      shouldShowDeleteButton: B,
      getLocationGroup: J,
      isLocationVisible: N,
      handleInputChange: R,
      handleDelete: H
    } = Gl({
      shape: At(n, "shape"),
      extraType: n.extraType,
      allOptions: n.allOptions,
      labels: n.labels,
      userFriendlyFieldMap: n.userFriendlyFieldMap,
      allowCustomNames: n.allowCustomNames,
      customNames: At(n, "customNames"),
      enablePricing: n.enablePricing,
      pricing: n.pricing,
      orientationModel: n.orientationModel,
      stockGrain: n.stockGrain,
      getAvailablePricingOptions: n.getAvailablePricingOptions,
      getPrice: n.getPrice,
      formatPrice: n.formatPrice,
      findExtrasPrice: n.findExtrasPrice,
      locations: At(n, "locations"),
      locationGroups: At(n, "locationGroups")
    }), {
      newCustomName: U,
      canAddCustomName: ye,
      isActionMenuDisabled: X,
      customNameActions: oe,
      handleAddCustomName: j,
      handleCustomNameAction: G
    } = Ul({
      extraType: n.extraType,
      customNames: At(n, "customNames"),
      usedNames: At(n, "usedNames"),
      allowCustomNames: n.allowCustomNames,
      getSelectOptions: h,
      onCustomNameAdded: (D) => i("custom-name-added", n.extraType, D),
      onCustomNameDeleted: (D) => i("custom-name-deleted", n.extraType, D)
    }), {
      renderLocations: P,
      gridStyle: S,
      getInputId: _,
      getDeleteConfig: Q
    } = Wl({
      extraType: n.extraType,
      allOptions: n.allOptions,
      labels: n.labels,
      shapeIndex: n.shapeIndex || 0,
      enablePricing: n.enablePricing,
      mode: s,
      shouldShowAll: a,
      getInputType: b,
      getInputConfig: (D, re) => x(D, re),
      getAllInputConfig: (D) => x("all", D),
      getInputConfigForLocation: x,
      canDelete: r,
      getLocationLabel: p,
      shouldShowDeleteButton: B,
      locations: At(n, "locations"),
      locationGroups: At(n, "locationGroups"),
      shape: At(n, "shape"),
      orientationModel: n.orientationModel
    }), ee = W(!1), ae = L(() => (D) => {
      const re = J(D);
      return re === "all" || re === "faces" || re === "sides";
    }), $e = L(() => (D) => ui(n.extraType).includes(D) ? Bn(D) === "face" : !1), K = L(() => (D) => ui(n.extraType).includes(D) ? Bn(D) === "side" : !1), V = L(() => (D) => n.shape.issues?.some((re) => re.category?.includes("extras") && re.field?.some((pe) => pe[0] === "extras" && pe[1] === n.extraType && pe[2] === D)) ?? !1);
    return cn(() => {
      const re = n.shape.extras?.[n.extraType];
      if (!re || typeof re != "object") {
        ee.value = !0, console.error(`Missing or invalid ${n.extraType} in shape`);
        return;
      }
      if (o.value && !("faces" in re)) {
        ee.value = !0, console.error(`Missing faces property in ${n.extraType}`);
        return;
      }
      if (l.value && !("sides" in re)) {
        ee.value = !0, console.error(`Missing sides property in ${n.extraType}`);
        return;
      }
    }), (D, re) => {
      const pe = Gn("FontAwesomeIcon");
      return ee.value ? de("", !0) : (E(), Z("div", {
        key: 0,
        class: it(["extras group", [t.extraType]]),
        style: St({ "grid-column-end": "span " + t.partColumns })
      }, [
        t.allowCustomNames ? (E(), Z("div", Rc, [
          le("div", jc, [
            Ge(is, {
              id: `${t.extraType}-custom-input-${t.shapeIndex}`,
              type: "string",
              "input-type": "text",
              value: A(U),
              placeholder: `Add ${t.extraType}`,
              style: { flex: "1" },
              "onUpdate:value": re[0] || (re[0] = (Ce) => U.value = Ce || ""),
              onKeydown: vo(A(j), ["enter"])
            }, null, 8, ["id", "value", "placeholder", "onKeydown"]),
            le("button", {
              type: "button",
              class: "c-btn c-btn--primary c-btn--sm",
              disabled: !A(ye),
              onClick: re[1] || (re[1] = //@ts-ignore
              (...Ce) => A(j) && A(j)(...Ce))
            }, " Add ", 8, qc)
          ]),
          Ge(mc, {
            "menu-items": A(oe),
            icon: ["fass", "bars"],
            "show-label": !1,
            "show-chevron": !1,
            disabled: A(X),
            onAction: A(G)
          }, null, 8, ["menu-items", "disabled", "onAction"])
        ])) : de("", !0),
        le("div", {
          class: "inputs grid-layout",
          style: St({ "grid-template-columns": A(S) })
        }, [
          (E(!0), Z(lt, null, qt(A(P), (Ce) => (E(), Z(lt, { key: Ce }, [
            A(N)(Ce) ? (E(), Z(lt, { key: 0 }, [
              le("div", {
                class: it(["label", {
                  "group-label": ae.value(Ce),
                  "face-label": $e.value(Ce),
                  "side-label": K.value(Ce),
                  "has-validation-issue": V.value(Ce)
                }])
              }, Ae(A(p)(Ce)), 3),
              (E(!0), Z(lt, null, qt(t.allOptions, (Ue, et) => (E(), Z("div", {
                key: `${Ce}-${et}`,
                class: "input-cell"
              }, [
                Ge(Nn, Xt({
                  id: A(_)(Ce, et),
                  "data-field": `${t.extraType}-${Ce}`,
                  "data-index": t.shapeIndex,
                  "data-option-index": et
                }, { ref_for: !0 }, A(x)(Ce, et), {
                  "onUpdate:value": (Je) => A(R)(Ce, et, Je)
                }), null, 16, ["id", "data-field", "data-index", "data-option-index", "onUpdate:value"])
              ]))), 128)),
              A(Q)(Ce).show ? (E(), Z("button", {
                key: 0,
                type: "button",
                class: "c-btn c-btn--delete",
                disabled: !A(Q)(Ce).enabled,
                title: A(Q)(Ce).ariaLabel,
                onClick: (Ue) => A(H)(Ce)
              }, [
                Ge(pe, { icon: ["fass", "trash"] })
              ], 8, Gc)) : de("", !0),
              t.enablePricing ? (E(), Z("div", Uc, Ae(A(O)(Ce)), 1)) : de("", !0)
            ], 64)) : de("", !0)
          ], 64))), 128))
        ], 4)
      ], 6));
    };
  }
}), Ui = /* @__PURE__ */ hi(Wc, [["__scopeId", "data-v-5c40d310"]]), zc = {
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
}, Hc = { id: "spinner" }, _c = ["width", "height"], Kc = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function Zc(t, e, n, i, s, a) {
  return E(), Z("div", Hc, [
    n.complete ? de("", !0) : (E(), Z("svg", {
      key: 0,
      class: "loading",
      style: St({ width: n.size + "px", height: n.size + "px" }),
      width: n.size,
      height: n.size,
      viewBox: "0 0 300 300"
    }, [...e[0] || (e[0] = [
      bo('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ])], 12, _c)),
    n.complete ? (E(), Z("svg", {
      key: 1,
      class: "complete",
      style: St({ width: n.size + "px", height: n.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, [...e[1] || (e[1] = [
      le("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ])], 4)) : de("", !0),
    n.showNumber ? (E(), Z("div", Kc, Ae(n.number), 1)) : de("", !0)
  ]);
}
const Zs = /* @__PURE__ */ hi(zc, [["render", Zc]]);
function Jc() {
  const t = Date.now(), e = Math.random().toString(36).substring(2, 15), n = Math.random().toString(36).substring(2, 15);
  return `${t.toString(36)}-${e}-${n}`;
}
const _t = W([]), Yc = 6;
function Ta() {
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
      id: Jc(),
      message: Ri(n),
      additional: s.length > 5 ? s.slice(0, 5).map((p) => Ri(p)).join("<br>") + "<br>..." : s.slice(0, 5).map((p) => Ri(p)).join("<br>"),
      type: i,
      persistent: a.persistent || !1,
      timestamp: /* @__PURE__ */ new Date(),
      action: o
    }, r = a.maxNotices ?? Yc;
    if (_t.value.length >= r) {
      const p = _t.value.findIndex((b) => !b.persistent);
      if (p !== -1)
        _t.value.splice(p, 1);
      else if (!l.persistent)
        return console.warn("Cannot add new notice: maximum limit reached and all existing notices are persistent"), l.id;
    }
    return _t.value.push(l), !l.persistent && a.timeout !== 0 && setTimeout(() => e(l.id), a.timeout || 6e3), l.id;
  }, e = (n) => {
    _t.value.findIndex((s) => s.id === n) !== -1 && (_t.value = _t.value.filter((s) => s.id !== n));
  };
  return {
    notices: _t,
    addNotice: t,
    dismissNotice: e
  };
}
const Js = W({
  queued: !1,
  started: !1,
  stockCount: 0,
  shapeCount: 0,
  resultCount: 0,
  complete: !1
});
function Ea() {
  return {
    progress: Js,
    reset: () => {
      Js.value = {
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
const Xc = ml(() => Y({
  // Full stock - purchase entire sheet without cutting (first field after ID)
  fullStock: Dt(
    ue().default(!1),
    {
      label: "fields.fullStock",
      propertyPath: "fullStock",
      group: "properties",
      order: -1
    }
  ),
  // Material field
  material: Dt(
    C().optional(),
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
    Ze([z(), C()]).optional(),
    {
      label: "fields.t",
      propertyPath: "t",
      group: "dimensions",
      order: 0,
      allowZero: !1
    }
  ),
  // Length field
  l: Ss({
    label: "fields.l",
    placeholder: "fields.l",
    allowZero: !1
  }),
  // Width field
  w: Ss({
    label: "fields.w",
    placeholder: "fields.w",
    allowZero: !1
  }),
  // Quantity field
  q: Dt(
    z().int().positive().default(1),
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
  name: Uo({
    placeholder: "fields.name"
  }),
  // Orientation lock field
  orientationLock: Dt(
    Et(["n", "l", "w"]).default("n").optional(),
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
    ue().default(!1),
    {
      label: "fields.banding",
      propertyPath: "banding",
      group: "extras",
      order: 0
    }
  ),
  // Finish options
  finish: Dt(
    Y({
      enabled: ue().default(!1),
      type: C().optional(),
      sides: z().optional()
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
    Y({
      enabled: ue().default(!1),
      operations: ne(Pe()).optional()
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
    ue().default(!1),
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
function Qc(t) {
  const e = Xc._def.getter();
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
class eu {
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
        const p = this.generateTrimFields(l);
        i.push(...p);
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
    if (n instanceof As) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof Yn)
          return this.isIntegerNumber(s) ? "integer" : "number";
    }
    return n instanceof Yn ? this.isIntegerNumber(n) ? "integer" : "number" : n instanceof vl ? "string" : n instanceof bl ? "boolean" : n instanceof Ps || n._def?.typeName === "ZodNativeEnum" ? "enum" : n instanceof yl ? "array" : n instanceof Xn ? "object" : "string";
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
        const p = a._zod.def;
        o = p.check, l = p.value, r = p.inclusive !== void 0 ? p.inclusive : !0;
      } else
        continue;
      o === "min" || o === "greater_than" ? e.min === void 0 && (e.min = o === "greater_than" && !r ? l + 1e-6 : l, e.allowZero = e.min === 0) : o === "max" || o === "less_than" ? e.max === void 0 && (e.max = o === "less_than" && !r ? l - 1e-6 : l) : o === "int" && (e.step = 1);
    }
  }
  /**
   * Extract type-specific metadata
   */
  extractTypeSpecificMetadata(e, n) {
    if (n instanceof As) {
      const i = n._def?.options || [];
      for (const s of i)
        if (s instanceof Yn) {
          this.extractNumberConstraints(e, s), e.type = "number";
          break;
        }
    } else n instanceof Yn && this.extractNumberConstraints(e, n);
    if (!e.options) {
      if (n instanceof Ps) {
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
    if (e instanceof Bi || e instanceof Vi)
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
    return e._def?.typeName === "ZodEffects" ? this.isOptional(e._def?.schema) : e instanceof Di ? this.isOptional(e._def?.innerType) : !1;
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
    if (e instanceof Bi || e instanceof Vi)
      return this.unwrapField(e._def?.innerType);
    if (e instanceof Di || i === "ZodDefault")
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
    if (e instanceof Di) {
      const n = e._def?.defaultValue;
      return typeof n == "function" ? n() : n;
    }
    if (e.constructor?.name === "ZodPipe" || e._def?.type === "pipe") {
      const n = e._def?.in;
      if (n)
        return this.getDefaultValue(n);
    }
    if (e instanceof Bi || e instanceof Vi) {
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
    return e instanceof Xn;
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
    if (n instanceof Xn) {
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
    if (!(i instanceof Xn))
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
const Ys = new eu();
function tu(t, e = {}) {
  const n = W([]), i = W([]), s = W(/* @__PURE__ */ new Map()), a = W(/* @__PURE__ */ new Map()), o = (O) => {
    let B = Ys.generateFields(t);
    e.overrides && (B = B.map((N) => {
      const R = e.overrides[N.name];
      if (R) {
        const H = { ...N, ...R };
        return R.min === void 0 && N.min !== void 0 && (H.min = N.min), R.max === void 0 && N.max !== void 0 && (H.max = N.max), H;
      }
      return N;
    })), a.value.clear();
    for (const N of B)
      a.value.set(N.name, N);
    const J = O || e.allowedFieldIds;
    if (J && J.length > 0) {
      const N = J, R = /* @__PURE__ */ new Map();
      for (const U of B)
        R.set(U.name, U);
      const H = [];
      for (const U of N) {
        const ye = R.get(U);
        ye && H.push(ye);
      }
      B = H;
    }
    e.filter && (B = B.filter(e.filter)), n.value = B, s.value.clear();
    for (const N of B)
      s.value.set(N.name, N);
    e.grouped && (i.value = Ys.groupFields(B));
  };
  o();
  const l = (O) => s.value.get(O), r = (O) => a.value.get(O), p = () => a.value, b = (O, B) => {
    const J = s.value.get(O);
    J && Object.assign(J, B);
  }, x = (O) => {
    const B = l(O);
    return !(!B || B.hidden);
  }, h = (O) => {
    const B = l(O);
    if (!B) return {};
    const J = {};
    return B.required && (J.required = !0), B.type === "number" && (B.min !== void 0 && (J.min = B.min), B.max !== void 0 && (J.max = B.max)), J;
  };
  return {
    fields: L(() => n.value),
    groups: L(() => i.value),
    fieldMap: L(() => s.value),
    allFieldsMap: L(() => a.value),
    getField: l,
    getFieldMetadata: r,
    getAllFieldMetadata: p,
    updateField: b,
    isFieldVisible: x,
    getFieldValidation: h,
    regenerateFields: o
  };
}
function nu(t) {
  const { stockType: e, materials: n = [], minDimension: i = 0 } = t, s = Qc(e), a = {
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
  }), tu(s, {
    ...t,
    overrides: { ...a, ...t.overrides }
  });
}
const { progress: yn, reset: Xs } = Ea();
function iu(t) {
  const e = "https://api.cutlistevo.com/";
  let n;
  const i = () => {
    n = wl(e, {
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
      yn.value.complete = !0, t.callbacks?.onResult?.(o), n.disconnect();
    }), n.on("queued", () => {
      Xs(), yn.value.queued = !0;
    }), n.on("started", () => {
      yn.value.started = !0;
    }), n.on("progress", (o) => {
      o?.data?.message === "result" ? yn.value.resultCount++ : (yn.value.stockCount = o.data.stockCount, yn.value.shapeCount = o.data.shapeCount);
    }), n.on("user", (o) => {
      t.callbacks?.onUser?.(o);
    }), n.on("error", (o) => {
      t.refs?.thinking && (t.refs.thinking.value = !1), Xs(), t.callbacks?.onError?.(o);
    });
  }, s = () => n?.disconnect(), a = () => n?.connect();
  return i(), {
    socket: n,
    connect: a,
    disconnect: s
  };
}
class Kt extends Error {
  constructor(e, n) {
    super(e), this.code = n, this.name = "FormulaError";
  }
}
class os {
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
      const l = this.evaluate(e.condition, n), r = this.evaluate(e.trueExpr, n), p = this.evaluate(e.falseExpr, n);
      return l ? r : p;
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
      if (n === 0) throw new Kt("Division by zero", "DIVISION_BY_ZERO");
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
      const [p, b] = r.split(".");
      if (!e.nodes.has(r)) {
        const J = s[p];
        if (J)
          return b === "q" ? J.q : J[b];
        throw new Error(`Node not found: ${r}`);
      }
      if (o.has(r))
        throw new Error(`Circular dependency detected at ${r}`);
      const x = e.nodes.get(r);
      if (typeof x.formula == "number")
        return a.set(r, x.formula), x.formula;
      o.add(r);
      const h = e.edges.get(r) || /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map();
      for (const J of h)
        if (J.startsWith("input.")) {
          const N = J.split(".")[1];
          O.set(J, i[N]);
        } else
          O.set(J, l(J));
      const B = this.evaluateFormulaWithDeps(x.formula, O, i);
      return a.set(r, B), o.delete(r), B;
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
    if (!this.spec?.inputs) throw new Kt("No input specifications defined", "NO_INPUTS");
    for (const [n, i] of Object.entries(this.spec.inputs)) {
      const s = e[n];
      if (s === void 0)
        throw new Kt(`Missing required input: ${n}`, "MISSING_INPUT");
      if (s < i.min || s > i.max)
        throw new Kt(`Input ${n} value ${s} out of range [min: ${i.min}, max: ${i.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new Kt("No input specifications defined", "NO_INPUTS");
    const n = Object.keys(this.spec.inputs);
    if (e.length !== n.length)
      throw new Kt(`Expected ${n.length} fields, got ${e.length}`, "INVALID_FIELD_COUNT");
    let i = 0;
    for (const s of e) {
      const a = n[i], o = this.spec.inputs[a];
      if (s.value === null || s.value === void 0)
        throw new Kt(`Missing value for field ${i}`, "MISSING_FIELD_VALUE");
      if (s.value < o.min || s.value > o.max)
        throw new Kt(`Field ${i} value ${s.value} out of range [min: ${o.min}, max: ${o.max}]`, "FIELD_OUT_OF_RANGE");
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
const Gt = Y({
  min: z().min(0).optional(),
  max: z().min(0).optional()
}).optional(), su = Y({
  // Location identifier (e.g., 'side.l1', 'face.a')
  location: C().min(1),
  // Dimension constraints for this location
  longSide: Gt,
  shortSide: Gt,
  t: Gt,
  // Formula-based validation
  formula: C().optional(),
  // Custom message for this location
  message: C().optional()
}), Wi = Y({
  // Shape dimension constraints (type-level, apply to all locations by default)
  longSide: Gt,
  shortSide: Gt,
  t: Gt,
  // thickness
  // Formula-based validation using JavaScript expression
  // Formula can reference: longSide, shortSide, t
  // Examples: "(longSide * shortSide) > 100000", "t >= 12 && longSide < 2400"
  formula: C().optional(),
  // Custom validation message (optional)
  message: C().optional(),
  // Location-specific rules (override type-level rules for specific locations)
  locations: ne(su).optional()
}), au = Y({
  banding: Wi.optional(),
  finish: Wi.optional(),
  planing: Wi.optional()
}).optional();
function ou(t, e) {
  try {
    const n = new os({}), i = n.parse(t);
    return !!n.evaluate(i, {
      longSide: e.longSide || 0,
      shortSide: e.shortSide || 0,
      t: e.t || 0
    });
  } catch (n) {
    return console.warn("Formula evaluation error:", n, "Formula:", t), !0;
  }
}
function lu(t, e, n) {
  const i = t.dimension === "t" ? "thickness" : t.dimension === "longSide" ? "long side" : "short side", s = t.constraint === "min" ? "minimum" : "maximum";
  return `${t.location ? `${t.location}: ` : ""}${e.charAt(0).toUpperCase() + e.slice(1)} requires ${i} ${s} of ${t.limit} (current: ${t.value})`;
}
function ru(t, e, n) {
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
function cu(t, e, n, i) {
  const { rule: s, message: a, source: o } = ru(e, n, i), l = [], r = (b, x, h) => {
    x == null || h === void 0 || (h.min !== void 0 && x < h.min && l.push({
      valid: !1,
      dimension: b,
      value: x,
      constraint: "min",
      limit: h.min,
      location: n
    }), h.max !== void 0 && x > h.max && l.push({
      valid: !1,
      dimension: b,
      value: x,
      constraint: "max",
      limit: h.max,
      location: n
    }));
  };
  r("longSide", t.longSide, s.longSide), r("shortSide", t.shortSide, s.shortSide);
  const p = typeof t.t == "string" ? parseFloat(t.t) : t.t;
  return isNaN(p) || r("t", p, s.t), s.formula && (ou(s.formula, {
    longSide: t.longSide,
    shortSide: t.shortSide,
    t: p
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
Y({
  // Context - using z.any() for complex external types
  job: Pe().nullable().default(null).describe("BullMQ Job instance"),
  // Type: Job<any, any, string> | null
  socketId: C().nullable().default(null).describe("Socket.io connection ID"),
  user: Pe().nullable().default(null).describe("User instance"),
  // Type: IUser | null
  config: Pe().describe("Configuration object"),
  // Type: Config
  api: ue().nullable().default(null).describe("API mode flag"),
  app: ue().nullable().default(null).describe("App mode flag"),
  // Core data lists
  saw: zo("Saw").describe("Saw configuration"),
  stockList: Ht("Stock").default([]).describe("List of stock materials"),
  shapeList: Fi(["Shape", "Group"]).default([]).describe("List of shapes and groups"),
  groupList: Ht("Group").default([]).describe("Temporary groups (strip/segment) created during optimization"),
  userGroups: Ht("Group").default([]).describe("User-defined groups"),
  // Derived lists
  uniqueStock: Ht("Stock").default([]).describe("Unique stock by parent"),
  uniqueShapes: Fi(["Shape", "Group"]).default([]).describe("Unique shapes without duplicates"),
  unusableShapes: Fi(["Shape", "Group"]).default([]).describe("Shapes that cannot be placed"),
  // Stock type
  stockType: Wo,
  // Results storage
  cutList: Ht("Cut").default([]).describe("List of cuts to make"),
  segmentList: Ht("Segment").default([]).describe("List of segments"),
  offcuts: Ht("Offcut").default([]).describe("Offcut pieces"),
  placementPositions: Ht("Point").default([]).describe("Placement positions"),
  // Configuration
  useInventory: ue().default(!1).describe("Use inventory system"),
  successMetric: C().default(Ho.successMetric).describe("Metric for optimization success"),
  enableEvo: ue().default(!0).describe("Enable evolutionary algorithm"),
  weighting: Me(C(), Pe()).default({}).describe("Weighting configuration"),
  // Results
  bestResult: Pe().nullable().default(null).describe("Best optimization result"),
  bestPartialResult: Pe().nullable().default(null).describe("Best partial result"),
  // Counters
  counters: Y({
    placement: z().default(0),
    group: z().default(0)
  }).default({ placement: 0, group: 0 }).describe("Operation counters"),
  // Flags
  tidyStrategy: ue().default(!1).describe("Use tidy strategy"),
  guillotineSecondPass: ue().default(!1).describe("Run guillotine second pass"),
  runningEvo: ue().default(!1).describe("Currently running evolution"),
  evolutionVisData: ne(Me(C(), Sl())).default([]).describe("Evolution visualization data"),
  final: ue().default(!1).describe("Final run flag"),
  // Spacing flags
  hasMinSpacing: ue().default(!1).describe("Has minimum spacing requirement")
});
const uu = Et(["decimal", "fraction"]), du = Y({
  job: Pe().optional(),
  // Type: Job from BullMQ
  // Input data (will be converted to runtime classes in worker)
  // Allow additional properties like __entityType and autoId
  inputSaw: kn,
  inputShapes: ne(xn),
  inputStock: ne(rn),
  inputUserGroups: ne(ua).optional(),
  // Number format for conversion
  numberFormat: uu.optional(),
  // Algorithm configuration
  enableEvo: ue().default(!0),
  weighting: Pe().optional(),
  successMetric: C().optional(),
  useInventory: ue().default(!1),
  // Context
  socketId: C().optional(),
  user: Pe().optional(),
  // IUser type
  // Application flags
  widget: ue().optional(),
  api: ue().optional(),
  app: ue().optional(),
  domain: C().optional(),
  // Extras options (centralized configuration)
  extrasOptions: Y({
    banding: Y({
      options: Y({
        sides: Me(C(), ne(C())).optional()
      }).optional()
    }).optional(),
    finish: Y({
      options: Y({
        faces: Me(C(), ne(C())).optional()
      }).optional()
    }).optional(),
    planing: Y({
      options: Y({
        sides: Me(C(), ne(C())).optional(),
        faces: Me(C(), ne(C())).optional()
      }).optional()
    }).optional()
  }).optional(),
  // API specific
  config: Pe().optional(),
  v: z().optional(),
  // API version
  webhook: C().optional(),
  //source
  sourceVersion: C().nullish(),
  source: C().optional()
});
Y({
  job: Pe().optional(),
  // Type: Job from BullMQ
  saw: Pe(),
  // Runtime Saw instance
  shapeList: ne(Pe()),
  // Runtime Shape instances
  stockList: ne(Pe()),
  // Runtime Stock instances
  userGroups: ne(Pe()).optional(),
  // Runtime Group instances
  enableEvo: ue(),
  weighting: Pe().optional(),
  successMetric: C().optional(),
  useInventory: ue(),
  socketId: C().optional(),
  user: Pe().optional(),
  widget: ue().optional(),
  api: ue().optional(),
  app: ue().optional(),
  domain: C().optional(),
  config: Pe().optional(),
  v: z().optional(),
  webhook: C().optional()
});
const { addNotice: wn } = Ta();
let zi = null;
function fu() {
  return zi || (zi = wa()), zi;
}
function Qs(t) {
  return t.filter((e) => e?.l || e?.w);
}
async function pu(t) {
  const e = t.t, n = [];
  try {
    const { inputs: i, validateInputShapes: s, validateInputStock: a } = fu(), o = t.inputShapes ?? i.inputShapes.value, l = t.inputStock ?? i.inputStock.value, r = t.inputUserGroups ?? i.inputUserGroups?.value ?? [], p = Qs(o), b = Qs(l);
    if (p.forEach((N) => N.isNew = !1), b.forEach((N) => N.isNew = !1), !t.isAdmin && !t.shared && t.maxShapes !== 1 / 0) {
      const N = p.reduce((H, U) => H + (U.q || 1), 0), R = b.reduce((H, U) => H + (U.q || 1), 0);
      if (N > t.maxShapes || R > t.maxStock)
        return wn({
          type: "error",
          message: e("errors.validation.above_max_parts")
        }), t.onLimit?.(), { valid: !1, issues: n };
    }
    if (!p.length)
      return wn({
        type: "error",
        message: e("errors.validation.no_parts_list")
      }), { valid: !1, issues: n };
    if (!t.useInventory && !b.length)
      return wn({
        type: "error",
        message: e("errors.validation.no_stock")
      }), { valid: !1, issues: n };
    let x;
    if (t.useInventory && t.selectedSaw)
      x = t.selectedSaw;
    else if (t.inputSaw instanceof Rt) {
      const N = t.inputSaw.validate();
      n.push(...N), x = t.inputSaw.toData();
    } else {
      x = t.inputSaw;
      const N = new da(x);
      n.push(...N.issues);
    }
    const h = s({
      saw: x,
      partTrim: ve({ v: t.partTrim }),
      useInventory: t.useInventory,
      inputShapesOverride: p
    });
    if (n.push(...h), t.useInventory) {
      if (t.materialStore)
        for (const N of p)
          N.material || n.push(new Ft({
            item: N,
            category: ["part"],
            message: "errors.validation.business.no_material"
          }));
    } else {
      const N = a(x);
      n.push(...N);
    }
    if (r.length > 0) {
      r.forEach((R) => R.populateParentID(p));
      const N = _o(r, p);
      n.push(...N);
    }
    await gu(p, t, n);
    const O = Zi(n);
    if (O.length > 0) {
      const N = {
        saw: O.filter((R) => R.category?.includes("saw")),
        stock: O.filter((R) => R.category?.includes("stock")),
        part: O.filter((R) => R.category?.includes("part") && !R.category?.includes("extras")),
        extras: O.filter((R) => R.category?.includes("extras")),
        group: O.filter((R) => R.category?.includes("group"))
      };
      for (const [R, H] of Object.entries(N))
        if (H.length > 0) {
          wn({
            type: "error",
            message: e("errors.validation.inputs_issue", { 0: R }),
            additional: H.map((U) => e(U.message))
          });
          break;
        }
      return { valid: !1, issues: n };
    }
    const B = {
      inputSaw: x,
      inputShapes: p.map((N) => N.toData()),
      inputStock: b.map((N) => N.toData()),
      inputGroups: r.map((N) => N.toData()),
      enableEvo: !0,
      useInventory: t.useInventory || !1
    }, J = du.safeParse(B);
    return J.success ? {
      valid: !0,
      issues: n,
      sawData: x
    } : (console.error("[Validation] Zod validation failed:", J.error.issues), wn({
      type: "error",
      message: e("errors.validation.invalid_data_structure"),
      additional: J.error.issues.map((N) => `${N.path.join(".")}: ${N.message}`)
    }), { valid: !1, issues: n });
  } catch (i) {
    return console.error("[Validation] error:", i), wn({
      type: "error",
      message: e("errors.general.unexpected"),
      additional: [i?.message ?? ""]
    }), { valid: !1, issues: n };
  }
}
function hu(t, e) {
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
async function gu(t, e, n) {
  if (!e.findExtrasPrice)
    return;
  const i = [
    { type: "banding", pricing: e.bandingPricing },
    { type: "finish", pricing: e.finishPricing },
    { type: "planing", pricing: e.planingPricing }
  ];
  for (const s of t)
    for (const { type: a, pricing: o } of i) {
      if (e.extrasValidationRules && Ko.hasExtras(s, a)) {
        const p = e.extrasValidationRules?.[a], b = e.extrasLocationGroups?.[a], x = p?.locations && p.locations.length > 0, h = b?.some((O) => O.rules);
        if (x || h) {
          const O = hu(s, a), B = (b || []).map((R) => ({
            id: R.id,
            locations: R.locations,
            rules: R.rules
          })), J = p || {}, N = /* @__PURE__ */ new Set();
          for (const R of O) {
            const H = cu(
              s,
              J,
              R,
              B
            );
            if (!H.valid) {
              if (H.source === "group") {
                const U = B.find(
                  (ye) => ye.rules && ye.locations.includes(R)
                );
                if (U && N.has(U.id))
                  continue;
                U && N.add(U.id);
              }
              if (H.message) {
                const U = new Ft({
                  item: s,
                  category: ["part", "extras"],
                  message: H.message,
                  field: [["extras", a, R]],
                  shouldTranslate: !1
                });
                n.push(U);
              } else
                H.violations.forEach((U) => {
                  const ye = lu(U, a), X = new Ft({
                    item: s,
                    category: ["part", "extras"],
                    message: ye,
                    field: [["extras", a, R]],
                    shouldTranslate: !1
                  });
                  n.push(X);
                });
            }
          }
        } else {
          const O = Zo(s, a, e.extrasValidationRules);
          O.valid || O.violations.forEach((B) => {
            const J = Jo(a, B, O.message);
            n.push(new Ft({
              item: s,
              category: ["part", "extras"],
              message: J,
              field: [["extras", a]],
              shouldTranslate: !1
            }));
          });
        }
      }
      if (!o || !Object.keys(o).length)
        continue;
      const l = Yo(s, a, o, e.findExtrasPrice);
      l.valid || l.incompleteLocations.forEach((r) => {
        n.push(new Ft({
          item: s,
          category: ["part", "extras"],
          message: "errors.extras.selection_incomplete",
          params: {
            extraType: `extras.${a}`,
            // Translation key for extra type (banding, finish, planing)
            location: Xo(r, { returnKey: !0 })
            // Translation key for location
          },
          field: [["extras", a, r]]
        }));
      });
    }
}
const mu = Y({
  longSide: Gt,
  shortSide: Gt,
  t: Gt,
  formula: C().optional(),
  message: C().optional()
}).optional(), oi = Y({
  // Unique identifier for this group (used internally)
  id: C().min(1),
  // Display label for the group (shown in UI)
  label: C().min(1),
  // Array of location strings in this group
  // Examples: ['side.l1', 'side.l2'], ['face.a', 'face.b']
  locations: ne(C().min(1)).min(1),
  // Optional price override for this group
  // When set, this price will be used instead of calculating from individual locations
  price: z().optional(),
  // Hide individual location inputs when this group is enabled
  // When true, only shows the group control, hiding the individual face/side inputs
  hideIndividualLocations: ue().optional().default(!1),
  // Validation rules that apply when using this group
  // These rules apply when any location in the group is selected
  rules: mu
}), vu = Y({
  banding: ne(oi).optional(),
  finish: ne(oi).optional(),
  planing: ne(oi).optional()
}).optional(), bu = Et(["decimal", "fraction"]), yu = Et(el), ea = Ze([
  Tt(0),
  Tt(1),
  Tt(2)
]).catch(0), wu = Y({
  // Base diagram colors (these would come from @FE/diagram/main)
  partA: C().optional(),
  partB: C().optional(),
  partSelected: C().optional(),
  stock: C().optional(),
  text: C().optional(),
  // Checkout-specific colors
  button: C(),
  buttonText: C()
}), at = (t) => Vn((e) => e ?? t, ue()), Su = Y({
  banding: at(!1),
  finish: at(!1),
  planing: at(!1),
  orientation: at(!0),
  diagram: at(!0),
  focus: at(!0),
  machining: at(!1),
  csvImport: at(!1),
  click: at(!0),
  partName: at(!0),
  progressNumber: at(!0),
  pagination: at(!1),
  fullStock: at(!1),
  imageUpload: at(!1)
}), ku = Y({
  // Localization
  locale: C().default("en-US"),
  currency: C().default("USD"),
  apiVersion: z().min(2).default(3),
  // Number formatting
  numberFormat: bu.default("decimal"),
  decimalPlaces: z().min(0).max(10).default(2),
  fractionRoundTo: z().default(0),
  // Stock configuration
  stockSelection: yu.optional(),
  stockGrain: Qo.optional(),
  // Part configuration
  minSpacing: pa.optional(),
  maxParts: z().min(0).default(0),
  orientationModel: ea.default(0),
  resultOrientationModel: ea.default(0),
  minDimension: z().min(0).default(0),
  partTrim: Vn((t) => t ?? void 0, z().min(0).optional()),
  partsPerPage: Vn((t) => t ?? void 0, z().min(1).default(10)),
  // UI configuration
  debug: ue().default(!1),
  emitAPIResult: ue().default(!1),
  enable: Su.optional(),
  colors: wu.optional(),
  // Custom fields
  customFields: ne(Pe()).optional(),
  fieldOrder: Vn((t) => t ?? void 0, ne(C()).optional()),
  // Extras location filtering
  bandingLocations: ne(Ti).optional(),
  finishLocations: ne(Ti).optional(),
  planingLocations: ne(Ti).optional(),
  // Extras location groups
  extrasLocationGroups: vu,
  // Extras validation rules
  extrasValidationRules: au
}), Mn = Y({
  min: z().min(0).nullable().optional(),
  max: z().min(0).nullable().optional()
}).nullable().optional(), xu = Y({
  // Orientation-independent dimension constraints
  // longSide = the larger of l/w, shortSide = the smaller of l/w
  longSide: Mn,
  shortSide: Mn,
  // Direct dimension constraints (as stored by admin panel)
  l: Mn,
  w: Mn,
  t: Mn,
  // Cross-dimensional rules
  // For complex scenarios like "one side must be >= 100mm, the other >= 50mm"
  crossDimensionalRule: Y({
    // At least one side must be >= primaryMin
    primaryMin: z().min(0).nullable().optional(),
    // The other side must be >= secondaryMin
    secondaryMin: z().min(0).nullable().optional()
  }).nullable().optional(),
  // Formula-based validation using JavaScript expression
  // Formula can reference: l, w, longSide, shortSide
  // Examples: "(l * w) > 100", "longSide >= 50"
  formula: C().nullable().optional(),
  // Custom validation message (optional)
  message: C().nullable().optional()
});
function Cu(t, e) {
  const n = [], i = t.l || 0, s = t.w || 0, a = t.longSide ?? Math.max(i, s), o = t.shortSide ?? Math.min(i, s), l = (r, p, b) => {
    b != null && (b.min !== void 0 && b.min !== null && p < b.min && n.push({
      valid: !1,
      dimension: r,
      value: p,
      constraint: "min",
      limit: b.min
    }), b.max !== void 0 && b.max !== null && p > b.max && n.push({
      valid: !1,
      dimension: r,
      value: p,
      constraint: "max",
      limit: b.max
    }));
  };
  if (l("longSide", a, e.longSide), l("shortSide", o, e.shortSide), l("longSide", i, e.l), l("shortSide", s, e.w), e.crossDimensionalRule) {
    const { primaryMin: r, secondaryMin: p } = e.crossDimensionalRule, b = t.l || 0, x = t.w || 0;
    if (r != null && p != null) {
      const h = b >= r && x >= p, O = x >= r && b >= p;
      !h && !O && n.push({
        valid: !1,
        dimension: "crossDimensional",
        constraint: "crossDimensional",
        message: e.message || `At least one side must be ≥ ${r} mm and the other side must be ≥ ${p} mm`
      });
    }
  }
  return e.formula && (Ou(e.formula, {
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
function Ou(t, e) {
  try {
    const n = new os({}), i = n.parse(t);
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
function Iu(t) {
  if (t.message)
    return t.message;
  if (t.constraint === "crossDimensional")
    return t.message || "Part dimensions do not meet requirements";
  const e = t.dimension === "longSide" ? "long side" : t.dimension === "shortSide" ? "short side" : t.dimension, n = t.constraint === "min" ? "minimum" : "maximum";
  return `Part requires ${e} ${n} of ${t.limit} (current: ${t.value})`;
}
Et([
  "full_stock",
  "part_area",
  "cut_length",
  "full_stock_plus_cut_length",
  "full_stock_plus_num_parts",
  "roll_length"
]);
const Au = Me(
  C(),
  z().min(0)
).default({}), Pu = Y({
  banding: ne(C()).optional(),
  finish: ne(C()).optional(),
  planing: ne(C()).optional(),
  machining: ne(C()).optional()
}).optional(), Lu = Y({
  name: C().trim().min(1),
  thicknesses: ne(
    Ze([
      C().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      z()
    ])
  ).min(1),
  widths: ne(
    Ze([
      C().transform((t) => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e;
      }),
      z()
    ])
  ).optional(),
  extras: Pu
}), Hi = Y({
  labels: ne(C()).default([]),
  pricing: Me(C(), z().min(0)).default({}),
  options: Pe().optional(),
  keys: ne(C()).optional(),
  // if not all the default keys should be set
  locations: ne(C()).optional(),
  // available locations for this extras type
  groups: ne(oi).optional(),
  // custom location groups
  rules: Pe().optional()
  // validation rules for this extras type
});
Y({
  success: ue(),
  price: z().optional(),
  error: C().optional(),
  cacheHit: ue().optional()
});
Y({
  valid: ue(),
  errors: ne(C()),
  warnings: ne(C())
});
Y({
  pricing: Au,
  labels: ne(C()),
  options: ne(ne(C())),
  // Simplified to string arrays only
  keys: ne(C()),
  maxLevels: z().min(1)
});
Y({
  enableCaching: ue().default(!0),
  enableLogging: ue().default(!1),
  maxCacheSize: z().min(1).default(1e3)
});
const $a = Et(["select", "multiselect", "range", "boolean", "search"]), Ma = Et(["asc", "desc"]), Na = Et(["grid", "list"]), ni = Y({
  _id: C(),
  name: C(),
  pricing: Me(C(), z()).optional()
}), Fu = Y({
  banding: ne(ni).optional(),
  finish: ne(ni).optional(),
  planing: ne(ni).optional(),
  machining: ne(ni).optional()
}).optional(), Tu = Y({
  enabled: ue(),
  price: z(),
  description: C().optional(),
  maxQuantity: z().optional()
}).optional(), Eu = Y({
  // Visual (Note: color, weight, imageUrl, tags, available are now in InputStock base schema)
  name: C().optional().describe("User-friendly display name"),
  description: C().optional().describe("Detailed description"),
  // Categorization
  category: C().optional().describe("Stock category"),
  // Surface finish (e.g., "High Gloss", "Matt", "Satin")
  finish: C().optional().describe("Surface finish"),
  // Available extras from material (resolved from material.extras)
  extras: Fu.describe("Available extras for this stock"),
  // Sample ordering configuration (from material)
  sample: Tu.describe("Sample ordering configuration"),
  // UI metadata
  minQuantity: z().int().positive().nullable().optional().describe("Minimum order quantity")
});
rn.merge(Eu).describe("Stock option with filtering and display metadata");
const $u = Y({
  field: C().describe("Property name to filter on"),
  type: $a,
  label: C().describe("Display label"),
  custom: ue().default(!1).describe("Whether this is a custom property"),
  // Range filter options
  min: z().nullable().optional().describe("Minimum value for range filter"),
  max: z().nullable().optional().describe("Maximum value for range filter"),
  step: z().nullable().optional().describe("Step size for range filter"),
  // Select filter options
  options: ne(Y({
    label: C(),
    value: Pe()
  })).optional().describe("Predefined options for select filters"),
  // Display options
  visible: ue().default(!0).describe("Whether filter is visible"),
  collapsible: ue().default(!0).describe("Whether filter panel is collapsible"),
  order: z().int().nullable().optional().describe("Display order")
}), Mu = Y({
  field: C().describe("Field to sort by"),
  order: Ma,
  label: C().optional().describe("Display label for sort option")
}), Nu = Et(["stock", "material"]), Ba = Y({
  // Browse mode
  mode: Nu.default("stock").describe("Browse mode: stock shows individual items, material shows materials"),
  // Filter configuration
  availableFilters: ne($u).default([]).describe("Available filter fields"),
  // Sort configuration
  sortOptions: ne(C()).default(["cost", "material", "t"]).describe("Sortable fields"),
  defaultSort: Mu.default({
    field: "cost",
    order: "asc"
  }).describe("Default sort configuration"),
  // Display configuration
  displayMode: Na.default("grid").describe("Default display mode"),
  itemsPerPage: z().int().positive().default(20).describe("Items per page for pagination"),
  // Feature toggles
  enableSearch: ue().default(!0).describe("Enable search functionality"),
  // Selection behavior
  allowMultipleSelection: ue().default(!0).describe("Allow multiple stock selection"),
  maxSelection: z().int().positive().nullable().optional().describe("Maximum number of stock items to select")
}), Bu = Y({
  field: C(),
  value: Pe(),
  type: $a
});
Y({
  // Active filters
  activeFilters: ne(Bu).default([]).describe("Currently active filters"),
  // Search
  searchQuery: C().default("").describe("Current search query"),
  // Sort
  sortBy: C().default("cost").describe("Current sort field"),
  sortOrder: Ma.default("asc").describe("Current sort order"),
  // Display
  displayMode: Na.default("grid").describe("Current display mode"),
  currentPage: z().int().positive().default(1).describe("Current page number"),
  // Selection
  selectedStockIds: ne(C()).default([]).describe("IDs of selected stock items")
});
function hf() {
  return Ba.parse({});
}
const Va = Y({
  l: z(),
  w: z(),
  t: z().nullable(),
  q: z(),
  stockId: C()
}), Da = tl, Ra = Y({
  bladeWidth: z().optional(),
  cutType: C().optional(),
  cutPreference: C().optional(),
  stackHeight: z().optional()
}), Vu = Y({
  l: z(),
  w: z(),
  t: z().nullable(),
  material: C().nullable(),
  orientationLock: ha.nullable(),
  q: z(),
  name: C().nullable(),
  // V2 format: flat banding/finish (x1/x2/y1/y2 for banding, a/b for finish)
  banding: Me(C(), Ze([C(), ue()])).nullable().optional(),
  finish: Me(C(), Ze([C(), ue()])).nullable().optional(),
  planing: Me(C(), Ze([C(), ue()])).nullable().optional(),
  customData: Me(C(), Pe()).nullable().optional()
}), Du = Y({
  id: C(),
  name: C().nullable(),
  l: z(),
  w: z(),
  t: z().nullable(),
  material: C().nullable(),
  q: z(),
  trim: Y({
    x1: z(),
    x2: z(),
    y1: z(),
    y2: z()
  }).nullable().optional(),
  cost: z().nullable().optional(),
  analysis: Da.nullable().optional(),
  customData: Me(C(), Pe()).nullable().optional()
}), Ru = Y({
  id: C().optional(),
  name: C().optional(),
  l: z(),
  w: z(),
  t: z().nullable().optional(),
  material: C().optional(),
  q: z().optional(),
  orientationLock: Ze([
    Tt(""),
    Tt("l"),
    Tt("w")
  ]).nullable().optional(),
  // V2 format: flat banding/finish
  banding: Me(C(), Ze([C(), ue()])).nullable().optional(),
  finish: Me(C(), Ze([C(), ue()])).nullable().optional(),
  planing: Me(C(), Ze([C(), ue()])).nullable().optional(),
  customData: Me(C(), Pe()).nullable().optional()
});
Y({
  jobId: z(),
  metadata: ga.optional(),
  parts: ne(Vu),
  stock: ne(Du),
  offcuts: ne(Va),
  inputs: Y({
    parts: ne(Ru),
    saw: Ra.optional()
  }),
  apiResultV3: xa.optional()
});
const ju = Y({
  l: z(),
  w: z(),
  t: z().nullable(),
  material: C().nullable(),
  orientationLock: ha.nullable(),
  q: z(),
  name: C().nullable(),
  // V3 format: nested extras structure
  extras: Y({
    banding: Y({
      sides: Me(C(), Ze([C(), ue()]))
    }).nullable().optional(),
    finish: Y({
      faces: Me(C(), Ze([C(), ue()]))
    }).nullable().optional(),
    planing: Y({
      sides: Me(C(), Ze([C(), ue()])).optional(),
      faces: Me(C(), Ze([C(), ue()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Me(C(), Pe()).nullable().optional()
}), qu = Y({
  id: C(),
  name: C().nullable(),
  l: z(),
  w: z(),
  t: z().nullable(),
  material: C().nullable(),
  q: z(),
  trim: Y({
    l1: z(),
    l2: z(),
    w1: z(),
    w2: z()
  }).nullable().optional(),
  cost: z().nullable().optional(),
  analysis: Da.nullable().optional(),
  // New stock fields
  color: nl.nullable(),
  weight: z().positive().nullable().optional(),
  imageUrl: C().nullable().optional(),
  tags: ne(C()).nullable().optional(),
  available: ue().nullable().optional(),
  customData: Me(C(), Pe()).nullable().optional()
}), Gu = Y({
  id: C().optional(),
  name: C().optional(),
  l: z(),
  w: z(),
  t: z().nullable().optional(),
  material: C().optional(),
  q: z().optional(),
  orientationLock: Ze([
    Tt(""),
    Tt("l"),
    Tt("w")
  ]).nullable().optional(),
  // V3 format: nested extras structure
  extras: Y({
    banding: Y({
      sides: Me(C(), Ze([C(), ue()]))
    }).nullable().optional(),
    finish: Y({
      faces: Me(C(), Ze([C(), ue()]))
    }).nullable().optional(),
    planing: Y({
      sides: Me(C(), Ze([C(), ue()])).optional(),
      faces: Me(C(), Ze([C(), ue()])).optional()
    }).nullable().optional()
  }).optional(),
  customData: Me(C(), Pe()).nullable().optional()
});
Y({
  jobId: z(),
  metadata: ga.optional(),
  parts: ne(ju),
  stock: ne(qu),
  offcuts: ne(Va),
  inputs: Y({
    parts: ne(Gu),
    saw: Ra.optional()
  }),
  apiResultV3: xa.optional()
});
function ja(t) {
  return {
    l: t.l,
    w: t.w,
    t: t.t ?? null,
    q: t.q,
    // Use stock.id to match the id property in the result's stock array
    stockId: t?.stock?.id || t?.stock?.parentId || ""
  };
}
function qa(t) {
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
const Uu = Y({
  stockSelection: ul.optional(),
  stackingMode: cl.optional(),
  minSpacing: pa.optional()
}).optional(), Wu = Y({
  stockType: Et([...Ji]).optional(),
  bladeWidth: Ze([
    rl,
    C()
  ]).optional(),
  cutType: ll,
  cutPreference: ol,
  stackHeight: al,
  guillotineOptions: sl,
  efficiencyOptions: il.optional(),
  options: Uu
}).optional(), zu = Y({
  holes: z().min(0).nullable().optional(),
  corners: z().min(0).nullable().optional()
}).optional(), Hu = xn.pick({
  l: !0,
  w: !0,
  t: !0,
  q: !0,
  name: !0,
  material: !0,
  orientationLock: !0,
  customData: !0,
  order_id: !0
}).extend({
  // Checkout-specific: flattened extras (not in extras container)
  banding: pl.nullable().optional(),
  finish: fl.nullable().optional(),
  planing: dl.nullable().optional(),
  stockId: C().nullable().optional()
}), _u = Y({
  stock: ne(rn).default([]),
  parts: ne(Hu).optional(),
  options: ku,
  type: C().optional(),
  // variable | simple
  materials: ne(Lu).optional(),
  banding: Hi.nullable().optional(),
  finish: Hi.nullable().optional(),
  planing: Hi.nullable().optional(),
  machining: Pe().optional(),
  machiningPricing: zu,
  // DEPRECATED: bandingPricing, finishPricing, planingPricing are now in banding.pricing, finish.pricing, planing.pricing
  variations: Pe().optional(),
  partRules: xu.optional(),
  customValidation: Y({
    enabled: ue(),
    rules: ne(Pe())
  }).optional(),
  saw: Wu,
  stockFilter: Y({
    enabled: ue().optional(),
    serverMode: ue().optional(),
    config: Ba.optional()
  }).optional(),
  // API configuration (for order lookup and other API features)
  api: Y({
    baseUrl: C(),
    orgSlug: C(),
    isCustomDomain: ue().optional()
  }).optional()
});
function Ku(t) {
  const e = _u.safeParse(t);
  return {
    success: e.success,
    data: e.success ? e.data : void 0,
    error: e.success ? void 0 : e.error
  };
}
function Zu(t) {
  const e = Ku(t);
  if (!e.success) {
    const n = e.error?.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ") || "Unknown validation error";
    throw console.error("Invalid checkout data:", JSON.stringify(t, null, 2)), console.error("Validation errors:", n), new Error(`Invalid checkout data: ${n}`);
  }
  return e.data;
}
const Ju = new os({});
function Yu(t) {
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
function Xu(t, e) {
  const n = [], i = t.filter((s) => s.enabled !== !1);
  for (let s = 0; s < e.length; s++) {
    const a = e[s], o = Yu(a);
    for (const l of i)
      try {
        Ju.evaluateExpression(l.formula, o) || n.push({
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
function It(t) {
  return t == null ? !1 : typeof t == "object" && t.value !== void 0 ? t.value : t;
}
function Qu(t) {
  if (t.extras?.banding?.sides) {
    const e = t.extras.banding.sides, n = {};
    if (_e(e.a) || _e(e.b) || _e(e.c) || _e(e.d))
      n.x1 = _e(e.a) ? It(e.a) : !1, n.y1 = _e(e.b) ? It(e.b) : !1, n.x2 = _e(e.c) ? It(e.c) : !1, n.y2 = _e(e.d) ? It(e.d) : !1;
    else {
      const s = ts(e);
      n.x1 = _e(s.x1) ? It(s.x1) : !1, n.x2 = _e(s.x2) ? It(s.x2) : !1, n.y1 = _e(s.y1) ? It(s.y1) : !1, n.y2 = _e(s.y2) ? It(s.y2) : !1;
    }
    t.banding = n;
  }
  if (t.extras?.finish?.faces) {
    const e = t.extras.finish.faces, n = {};
    n.a = _e(e.a) ? It(e.a) : !1, n.b = _e(e.b) ? It(e.b) : !1, t.finish = n;
  }
  if (t.extras?.planing) {
    const e = t.extras.planing, n = {}, i = ts(e.sides || {});
    e.sides && (_e(i.x1) && (n.x1 = i.x1), _e(i.x2) && (n.x2 = i.x2), _e(i.y1) && (n.y1 = i.y1), _e(i.y2) && (n.y2 = i.y2)), e.faces && (_e(e.faces.a) && (n.a = e.faces.a), _e(e.faces.b) && (n.b = e.faces.b)), Object.keys(n).length > 0 && (t.planing = n);
  }
  (t.extras?.banding || t.extras?.finish || t.extras?.planing) && delete t.extras;
}
function ed(t, e = 0) {
  if (e === 0)
    return t;
  if (e === 1 || e === 2) {
    const n = Math.max(t.l, t.w), i = Math.min(t.l, t.w);
    t.w > t.l && (t.l = n, t.w = i);
  }
  return t;
}
function Ga(t, e = 0) {
  debugger;
  return e === 0 || t.forEach((n) => ed(n, e)), t;
}
function td(t, e, n, i, s, a, o, l) {
  const r = qa(i), p = e.map((h) => {
    const O = {
      l: h.l,
      w: h.w,
      t: h?.t ?? null,
      material: h.material ?? null,
      orientationLock: h.orientationLock ?? null,
      q: o?.addedPartTally?.[h.parentId] || h.q,
      name: h.name ?? null,
      customData: h.customData ?? null,
      // Always include extras properties even if not set (using API format)
      banding: Zl(),
      finish: di(),
      planing: Yl()
    }, B = { ...h };
    return Qu(B), B.banding && (O.banding = B.banding), B.finish && (O.finish = B.finish), B.planing && (O.planing = B.planing), O;
  }), b = n.map((h) => {
    const O = {
      id: h.id,
      name: h?.name ?? null,
      l: h.l,
      w: h.w,
      t: h?.t ?? null,
      material: h.material ?? null,
      q: o?.usedStockTally?.[h.parentId] || h.q,
      cost: h?.cost ?? null,
      analysis: r.get(h.parentId) ?? null,
      customData: h?.customData ?? null
    };
    return h?.trim && (O.trim = ts(h.trim)), O;
  }), x = {
    parts: a.map((h) => {
      const O = {
        id: h.id,
        name: h.name,
        l: h.l,
        w: h.w,
        t: h.t ?? null,
        material: h.material,
        q: h.q,
        orientationLock: h.orientationLock ?? null,
        customData: h.customData ?? null
      };
      return h.extras && (O.extras = {}, h.extras.banding?.sides && (O.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (O.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (O.extras.planing = {
        ...h.extras.planing.sides && { sides: h.extras.planing.sides },
        ...h.extras.planing.faces && { faces: h.extras.planing.faces }
      })), O;
    })
  };
  return l && Ga(p, l), {
    jobId: t,
    metadata: o,
    parts: p,
    stock: b,
    offcuts: s?.map(ja) || [],
    inputs: x
  };
}
function nd(t, e, n, i, s, a, o, l) {
  const r = qa(i), p = e.map((h) => {
    const O = {
      l: h.l,
      w: h.w,
      t: h?.t ?? null,
      material: h.material ?? null,
      orientationLock: h.orientationLock ?? null,
      q: o?.addedPartTally?.[h.parentId] || h.q,
      name: h.name ?? null,
      customData: h.customData ?? null,
      // Always include extras structure even if not set (using internal format)
      extras: {
        banding: { sides: es() },
        finish: { faces: di() },
        planing: Jl()
      }
    };
    return h.extras && (h.extras.banding?.sides && (O.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (O.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (O.extras.planing = {
      sides: h.extras.planing.sides || es(),
      faces: h.extras.planing.faces || di()
    })), O;
  }), b = n.map((h) => ({
    id: h.id,
    name: h?.name ?? null,
    l: h.l,
    w: h.w,
    t: h?.t ?? null,
    material: h.material ?? null,
    q: o?.usedStockTally?.[h.parentId] || h.q,
    trim: h?.trim ?? null,
    // Keep internal format (l1/l2/w1/w2)
    cost: h?.cost ?? null,
    analysis: r.get(h.parentId) ?? null,
    // New stock fields
    color: h?.color ?? null,
    weight: h?.weight ?? null,
    imageUrl: h?.imageUrl ?? null,
    tags: h?.tags ?? null,
    available: h?.available ?? null,
    customData: h?.customData ?? null
  })), x = {
    parts: a.map((h) => {
      const O = {
        id: h.id,
        name: h.name,
        l: h.l,
        w: h.w,
        t: h.t ?? null,
        material: h.material,
        q: h.q,
        orientationLock: h.orientationLock ?? null,
        customData: h.customData ?? null
      };
      return h.extras && (O.extras = {}, h.extras.banding?.sides && (O.extras.banding = { sides: h.extras.banding.sides }), h.extras.finish?.faces && (O.extras.finish = { faces: h.extras.finish.faces }), h.extras.planing && (O.extras.planing = {
        ...h.extras.planing.sides && { sides: h.extras.planing.sides },
        ...h.extras.planing.faces && { faces: h.extras.planing.faces }
      })), O;
    })
  };
  return l && Ga(p, l), {
    jobId: t,
    metadata: o,
    parts: p,
    stock: b,
    offcuts: s?.map(ja) || [],
    inputs: x
  };
}
const id = ["id", "data-index"], sd = /* @__PURE__ */ tt({
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
    const n = t, i = e, s = W({
      l1: !1,
      l2: !1,
      w1: !1,
      w2: !1
    }), a = () => {
      if (!n.inputShape) return;
      let r = {
        l1: Qt(n.inputShape, "banding", "side.l1"),
        l2: Qt(n.inputShape, "banding", "side.l2"),
        w1: Qt(n.inputShape, "banding", "side.w1"),
        w2: Qt(n.inputShape, "banding", "side.w2")
      };
      const p = Ml(
        n.orientationModel,
        n.stockGrain,
        n.inputShape
      );
      p && (r = ma(r, p)), s.value = r;
    };
    ze([
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
    return cn(() => {
      document.getElementById(n.id)?.addEventListener("keydown", o);
    }), pi(() => {
      document.getElementById(n.id)?.removeEventListener("keydown", o);
    }), (r, p) => (E(), Z("div", {
      id: t.id,
      class: it(["banding-button", { open: t.open, disabled: t.disabled }]),
      "data-field": "banding",
      "data-index": t.index,
      tabindex: "0",
      onClick: l
    }, [
      le("div", {
        class: it(["outer", {
          l1: s.value.l1,
          l2: s.value.l2,
          w1: s.value.w1,
          w2: s.value.w2
        }])
      }, [...p[0] || (p[0] = [
        le("div", { class: "inner" }, null, -1)
      ])], 2)
    ], 10, id));
  }
}), ad = ["id", "data-index", "disabled"], od = /* @__PURE__ */ tt({
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
    const n = t, i = e, s = L(() => n.inputShape ? Qt(n.inputShape, "finish", "face.a") : !1), a = L(() => n.inputShape ? Qt(n.inputShape, "finish", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const p = Gn("FontAwesomeIcon");
      return E(), Z("button", {
        id: t.id,
        class: it(["c-btn finish-button", {
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
        Ge(p, { icon: ["fass", "spray-can"] })
      ], 10, ad);
    };
  }
});
function ld(t) {
  return t.machining ? "toData" in t.machining ? t.machining.toData() : t.machining : { holes: [], hingeHoles: [], corners: {} };
}
function rd(t) {
  const e = ld(t);
  return e ? !!(e.holes && e.holes.length > 0 || e.hingeHoles && e.hingeHoles.length > 0 || e.corners && Object.values(e.corners).some((n) => n && n.type && n.size > 0)) : !1;
}
const cd = tt({
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
      return rd(this.inputShape);
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
}), ud = ["id", "disabled"];
function dd(t, e, n, i, s, a) {
  const o = Gn("FontAwesomeIcon");
  return E(), Z("button", {
    id: t.id,
    class: it(["c-btn machining-button", { selected: t.hasMachining }]),
    type: "button",
    disabled: t.disabled,
    onClick: e[0] || (e[0] = (...l) => t.openMachining && t.openMachining(...l))
  }, [
    Ge(o, { icon: ["fass", "hammer"] })
  ], 10, ud);
}
const fd = /* @__PURE__ */ hi(cd, [["render", dd]]), pd = ["id"], hd = {
  key: 0,
  class: "del",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, gd = {
  key: 1,
  class: "no-change",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, md = {
  key: 2,
  class: "arrow",
  viewBox: "0 0 67 63",
  xmlns: "http://www.w3.org/2000/svg"
}, vd = {
  key: 3,
  class: "arrow",
  viewBox: "0 0 72 39",
  xmlns: "http://www.w3.org/2000/svg"
}, bd = {
  key: 4,
  class: "arrow",
  viewBox: "0 0 39 72",
  xmlns: "http://www.w3.org/2000/svg"
}, yd = {
  key: 5,
  class: "grain",
  viewBox: "0 0 106 64",
  xmlns: "http://www.w3.org/2000/svg"
}, wd = {
  key: 6,
  class: "grain",
  viewBox: "0 0 64 106",
  xmlns: "http://www.w3.org/2000/svg"
}, ta = /* @__PURE__ */ tt({
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
    const n = t, i = e, s = W(0), a = W(!1), o = (G, P, S, _) => {
      if (!Ne(S) || P === 0)
        return G;
      const Q = l();
      return P === 1 || P === 2 && _ !== "n" && G ? Q : G;
    }, l = (G) => {
      const P = { ...n, ...G };
      if (!P.rectangle || !Ne(P.rectangle)) return "";
      let S = "";
      switch (P.orientationModel) {
        case 0:
          S = U.value;
          break;
        case 1:
          P.stockGrain === "y" || P.stockGrain === "n" ? S = P.rectangle.l >= P.rectangle.w ? "l" : "w" : P.rectangle.l >= P.rectangle.w ? S = P.stockGrain : S = S = P.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          S = P.rectangle.l >= P.rectangle.w ? "l" : "w";
          break;
      }
      return S;
    }, r = () => {
      if (n.disabled || R.value.length <= 1)
        return;
      const G = p(U.value);
      "multiEdit" in n.rectangle && n.rectangle.multiEdit && U.value === "" && s.value !== G && s.value === 0 && (s.value = G);
      let S = null;
      [1, 2].includes(n.orientationModel) ? S = x() : S = b(), s.value = S;
    }, p = (G) => {
      const P = R.value.findIndex((S) => S === G);
      return P === -1 ? 0 : P;
    }, b = () => {
      let G = s.value + 1;
      return G > R.value.length - 1 && (G = 0), G;
    }, x = () => {
      let G = 0;
      if (U.value === "") {
        const P = l();
        G = R.value.findIndex((S) => S === P);
      } else
        G = R.value.findIndex((P) => P === "");
      return G;
    }, h = (G) => {
      i("updateOrientation", G);
    }, O = () => {
      const G = U.value;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit)
        return G === " " ? " " : G === "" ? "" : G === "l" ? "l" : G === "w" ? "w" : "default";
      switch (n.orientationModel) {
        case 0:
          return G === " " ? " " : G ? n.stockGrain === "n" ? G || n.shapeOrientation || "default" : n.stockGrain === "w" ? G === "w" ? "w" : "l" : G === "l" ? "l" : "w" : "default";
        case 1:
          return G === " " ? " " : G ? n.stockGrain === "n" ? G || n.shapeOrientation || "default" : n.stockGrain === "w" ? G === "w" ? "w" : "l" : G === "l" ? "l" : "w" : "default";
        case 2:
          return G === " " ? " " : G ? n.stockGrain === "n" ? G || n.shapeOrientation || "default" : n.stockGrain === "w" ? G === "w" ? "w" : "l" : G === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, B = () => {
      if (!n.rectangle)
        return;
      if ("multiEdit" in n.rectangle && n.rectangle.multiEdit && !U.value) {
        N("");
        return;
      }
      const G = o(
        U.value,
        n.orientationModel,
        n.rectangle,
        n.stockGrain
      );
      if (G !== U.value) {
        N(G);
        return;
      }
      if (!a.value || s.value === -1) {
        const P = p(U.value);
        s.value = P;
      }
      if (Ne(n.rectangle)) {
        if (n.orientationModel === 1) {
          const P = X.value ? l() : U.value;
          N(P);
          return;
        }
        if (n.orientationModel === 2) {
          let P;
          X.value ? P = n.stockGrain !== "n" ? l() : "" : P = U.value, N(P);
        }
      }
    }, J = W(!1), N = (G) => {
      const P = p(G);
      J.value = !0, s.value = P, J.value = !1, h(G);
    }, R = L(() => {
      if (!n.rectangle) return ["l", "w"];
      if (Jt(n.rectangle)) return ["l", "w"];
      let G = ["", "l", "w"];
      return n.rectangle.multiEdit ? [" ", "", "l", "w"] : (H.value && (G = G.filter((P) => P !== "w")), G);
    }), H = L(() => Ne(n.rectangle) || Ei(n.rectangle) ? n.rectangle.isSquare : n.rectangleType && n.rectangle?.l && n.rectangle?.w ? n.rectangle?.l === n.rectangle?.w : !1), U = L(() => {
      let G = "";
      if (Jt(n.rectangle))
        G = n.rectangle.direction === "horizontal" ? "l" : "w";
      else if (Ne(n.rectangle)) {
        const P = n.rectangle.orientationLock;
        G = P === null ? "" : P;
      } else if (Ei(n.rectangle)) {
        const S = n.rectangle.grain ?? "";
        S === "l" || S === "w" || S === "" || S === " " ? G = S : G = "";
      }
      return G;
    }), ye = L(() => Jt(n.rectangle) || !n.rectangle ? {
      l: null,
      w: null
    } : {
      l: n.rectangle.l,
      w: n.rectangle.w
    }), X = L(() => !ye.value.l && !ye.value.w), oe = L(() => Jt(n.rectangle) ? !1 : ai(
      n.orientationModel,
      n.stockGrain,
      n.rectangle,
      n.rectangleType,
      n.shapeOrientation
    )), j = L(() => {
      if (!n.rectangle)
        return n.shapeOrientation ? "noGrain" : "freeRotation";
      if (Ei(n.rectangle) || n.rectangleType === "stock") {
        const Q = n.rectangle.grain;
        return "multiEdit" in n.rectangle && n.rectangle.multiEdit ? {
          " ": "noGrain",
          // Clear to no grain
          "": "noChange",
          // No change
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[Q] || "noGrain" : {
          "": "noGrain",
          // No grain
          l: "grainLeftRight",
          // Grain along length
          w: "grainTopBottom"
          // Grain along width
        }[Q] || "noGrain";
      }
      const G = {
        n: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "freeRotation", "": "noChange", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "freeRotation", "": "noChange", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, P = n.stockGrain || "default";
      let S = "default";
      Ne(n.rectangle) || n.rectangleType === "shape" ? S = O() : Jt(n.rectangle) && (S = n.rectangle.direction || "default");
      const _ = G[P]?.[S];
      return _ || G[P]?.default || "freeRotation";
    });
    return ze(s, (G, P) => {
      a.value && P !== void 0 && (J.value || h(R.value[G]));
    }, { immediate: !1 }), ze(ye, (G, P) => {
      if (!n.rectangle || n.orientationModel === 0 || !Ne(n.rectangle) || Ne(n.rectangle) && (n.orientationModel === 2 && P.l && P.w && !U.value || n.stockGrain === "n" && !U.value))
        return;
      const S = l();
      U.value !== S && h(S);
    }, { immediate: !1 }), ze(() => n.stockGrain, (G, P) => {
      G !== P && B();
    }, { immediate: !0 }), cn(() => {
      B(), mt(() => a.value = !0);
    }), (G, P) => (E(), Z("button", {
      type: "button",
      id: t.id,
      class: it(["c-btn orientation-button", { rot: oe.value, square: H.value, disabled: t.disabled, [j.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      onClick: r
    }, [
      j.value === "delete" ? (E(), Z("svg", hd, [...P[0] || (P[0] = [
        le("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ])])) : de("", !0),
      j.value === "noChange" ? (E(), Z("svg", gd, [...P[1] || (P[1] = [
        le("path", {
          d: "M5 12h14",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round"
        }, null, -1)
      ])])) : de("", !0),
      j.value === "freeRotation" ? (E(), Z("svg", md, [...P[2] || (P[2] = [
        le("g", null, [
          le("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          le("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          le("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          le("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ])])) : de("", !0),
      j.value === "leftRight" ? (E(), Z("svg", vd, [...P[3] || (P[3] = [
        le("g", null, [
          le("path", { d: "m5.408 19.408h61.095" }),
          le("g", null, [
            le("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            le("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ])])) : de("", !0),
      j.value === "topBottom" ? (E(), Z("svg", bd, [...P[4] || (P[4] = [
        le("g", null, [
          le("path", { d: "m19.408 66.503v-61.095" }),
          le("g", null, [
            le("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            le("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ])])) : de("", !0),
      j.value === "grainLeftRight" ? (E(), Z("svg", yd, [...P[5] || (P[5] = [
        le("g", null, [
          le("path", { d: "m3 3h99.887" }),
          le("path", { d: "m3.113 32h99.887" }),
          le("path", { d: "m3.113 61h99.887" })
        ], -1)
      ])])) : de("", !0),
      j.value === "grainTopBottom" ? (E(), Z("svg", wd, [...P[6] || (P[6] = [
        le("g", null, [
          le("path", { d: "m61 3v99.887" }),
          le("path", { d: "m32 3.113v99.887" }),
          le("path", { d: "m3 3.113v99.887" })
        ], -1)
      ])])) : de("", !0)
    ], 10, pd));
  }
}), Sd = ["id", "data-index", "disabled"], kd = /* @__PURE__ */ tt({
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
    const n = t, i = e, s = L(() => n.inputShape ? Qt(n.inputShape, "planing", "face.a") : !1), a = L(() => n.inputShape ? Qt(n.inputShape, "planing", "face.b") : !1), o = () => {
      n.disabled || i("clicked");
    };
    return (l, r) => {
      const p = Gn("FontAwesomeIcon");
      return E(), Z("button", {
        id: t.id,
        class: it(["c-btn planing-button", {
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
        Ge(p, { icon: ["fass", "hammer"] })
      ], 10, Sd);
    };
  }
});
function xd(t, e, n) {
  let i = null;
  ze(
    () => t.value ? { l: t.value.l, w: t.value.w } : null,
    (s) => {
      const a = typeof e == "number" ? e : e.value;
      if (!El(a) || !s || !t.value) return;
      const o = s.w > s.l;
      if (i === null) {
        i = o;
        return;
      }
      if (i !== o) {
        const l = $l(a);
        for (const r of l)
          hl(t.value, r);
        i = o;
      }
    },
    { immediate: !0 }
  );
}
const Cd = {
  key: 0,
  class: "info"
}, Od = ["disabled"], Id = /* @__PURE__ */ tt({
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
    const n = t, i = e, s = L(() => n.field.name === "banding" && Ne(n.item) ? n.item : null);
    xd(s, At(n, "orientationModel"));
    const a = ["orientationLock", "grain", "banding", "bandingOptions", "machining", "finish", "planing", "imageUpload"], o = L(() => a.includes(n.field.name) || n.field.name === "material" && n.typePrefix === "part" || n.field.name === "t" && n.thicknessOptions?.length > 0 || n.field.name === "w" && n.widthOptions?.length > 0), l = L(() => {
      try {
        const X = n.field.propertyPath || n.field.name;
        return X.includes(".") ? ln(n.item, X) ?? null : n.item[X] ?? null;
      } catch (X) {
        return console.error("[CheckoutField] Error getting field value:", X), null;
      }
    }), r = L(() => {
      if (n.field.custom && n.field.type) {
        const j = n.field.type;
        if (["checkbox", "select", "string", "integer", "unitDependent"].includes(j))
          return j;
      }
      const X = {
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
      const oe = X[n.field.type];
      return oe || "string";
    }), p = L(() => n.field.output ? n.field.output : null), b = L(() => n.field.options || []), x = L(() => !!n.fullStockDisabled), h = L(() => n.item.isNew ? !1 : ks(n.item, [n.field.name])), O = L(() => n.item.isNew ? !1 : ks(n.item, [n.field.name], !0)), B = L(() => n.multiEdit || n.item.isNew || !1), J = L(() => n.materialOptions?.length > 0 && Ne(n.item) ? !n.item.material : !1), N = L(() => n.widthOptions?.length === 1), R = L(() => n.field.info ? typeof n.field.info == "string" ? n.field.info : typeof n.field.info == "object" && l.value !== null && n.field.info[l.value] || null : null), H = (X) => {
      i("update", X);
    }, U = (X, oe) => {
      i("validation", X, oe);
    }, ye = () => {
      i("blur");
    };
    return (X, oe) => o.value ? (E(), Z(lt, { key: 1 }, [
      t.field.name === "orientationLock" ? (E(), Ee(ta, {
        key: 0,
        rectangle: t.item,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        "button-background": "#2c8d8f",
        disabled: x.value,
        onUpdateOrientation: H
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "grain" ? (E(), Ee(ta, {
        key: 1,
        rectangle: t.item,
        "button-background": "#2c8d8f",
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        disabled: x.value,
        onUpdateOrientation: H
      }, null, 8, ["rectangle", "stock-grain", "orientation-model", "disabled"])) : t.field.name === "banding" ? (E(), Ee(sd, {
        key: 2,
        "input-shape": A(Ne)(t.item) ? t.item : null,
        open: t.bandingEnabled?.autoId === t.item.autoId,
        "stock-grain": t.stockGrain,
        "orientation-model": t.orientationModel,
        index: t.index,
        disabled: x.value || t.materialExtrasDisabled?.banding,
        onClicked: oe[0] || (oe[0] = (j) => X.$emit("open-banding"))
      }, null, 8, ["input-shape", "open", "stock-grain", "orientation-model", "index", "disabled"])) : t.field.name === "finish" ? (E(), Ee(od, {
        key: 3,
        "input-shape": A(Ne)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: x.value || t.materialExtrasDisabled?.finish,
        onClicked: oe[1] || (oe[1] = (j) => X.$emit("open-finish"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "planing" ? (E(), Ee(kd, {
        key: 4,
        "input-shape": A(Ne)(t.item) ? t.item : null,
        open: !1,
        index: t.index,
        disabled: x.value || t.materialExtrasDisabled?.planing,
        onClicked: oe[2] || (oe[2] = (j) => X.$emit("open-planing"))
      }, null, 8, ["input-shape", "index", "disabled"])) : t.field.name === "machining" ? (E(), Ee(fd, {
        key: 5,
        "input-shape": A(Ne)(t.item) ? t.item : null,
        disabled: x.value || t.materialExtrasDisabled?.machining,
        onOpen: oe[3] || (oe[3] = (j) => X.$emit("open-machining"))
      }, null, 8, ["input-shape", "disabled"])) : t.field.name === "material" && t.typePrefix === "part" ? (E(), Ee(Nn, {
        key: 6,
        id: `${t.typePrefix}-material-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(be)(t.field.label || "fields.material"),
        placeholder: A(be)(t.field.placeholder || "fields.material"),
        "enable-label": !1,
        output: "string",
        options: t.materialOptions,
        "select-first-option-disabled": !0,
        disabled: !t.materialOptions?.length,
        required: !1,
        text: {
          select: A(be)("actions.select"),
          delete: A(be)("actions.delete")
        },
        "onUpdate:value": H,
        onValidation: U
      }, {
        default: ri(() => [
          Ki(X.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "data-field", "data-index", "value", "label", "placeholder", "options", "disabled", "text"])) : t.field.name === "t" && t.thicknessOptions?.length > 0 ? (E(), Ee(Nn, {
        key: 7,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(be)(t.field.label || "fields.t"),
        "enable-label": !1,
        options: t.thicknessOptions,
        readonly: t.readonly,
        disabled: J.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(be)("actions.select"),
          delete: A(be)("actions.delete")
        },
        output: "number",
        "onUpdate:value": H,
        onValidation: U
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "w" && t.widthOptions?.length > 0 ? (E(), Ee(Nn, {
        key: 8,
        id: `${t.typePrefix}-${t.field.name}-${t.index}`,
        "data-field": t.field.name,
        "data-index": t.index,
        type: "select",
        value: l.value,
        label: A(be)(t.field.label || "fields.w"),
        "enable-label": !1,
        options: t.widthOptions,
        readonly: t.readonly,
        disabled: N.value,
        required: t.field.required || !1,
        "number-format": t.numberFormat,
        text: {
          select: A(be)("actions.select"),
          delete: A(be)("actions.delete")
        },
        output: "number",
        "onUpdate:value": H,
        onValidation: U
      }, null, 8, ["id", "data-field", "data-index", "value", "label", "options", "readonly", "disabled", "required", "number-format", "text"])) : t.field.name === "imageUpload" ? (E(), Z("button", {
        key: 9,
        type: "button",
        disabled: t.readonly,
        onClick: oe[4] || (oe[4] = (j) => X.$emit("open-image-upload"))
      }, [
        Ge(A(li), { icon: ["fass", "image"] })
      ], 8, Od)) : de("", !0)
    ], 64)) : (E(), Ee(Nn, {
      key: 0,
      id: `${t.typePrefix}-${t.field.name}-${t.index}`,
      "data-field": t.field.name,
      "data-index": t.index,
      type: r.value,
      value: l.value,
      label: A(be)(t.field.label || t.field.name),
      placeholder: A(be)(t.field.placeholder || t.field.name),
      "enable-label": t.enableLabel,
      output: p.value,
      options: b.value,
      "select-first-option-disabled": t.field.selectFirstOptionDisabled ?? !0,
      disabled: t.field.disabled || x.value,
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
      issue: h.value,
      warning: O.value,
      "disable-required-validation": B.value,
      "onUpdate:value": H,
      onValidation: U,
      onBlur: ye
    }, {
      default: ri(() => [
        R.value ? (E(), Z("p", Cd, [
          Ge(A(li), { icon: ["fass", "info-circle"] }),
          ii(" " + Ae(R.value), 1)
        ])) : de("", !0),
        Ki(X.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "data-field", "data-index", "type", "value", "label", "placeholder", "enable-label", "output", "options", "select-first-option-disabled", "disabled", "readonly", "required", "allow-zero", "true-value", "false-value", "default", "number-format", "min", "max", "multi-edit", "text", "issue", "warning", "disable-required-validation"]));
  }
}), Ad = { class: "checkout-calculator-wrapper" }, Pd = {
  key: 0,
  class: "row table-heading"
}, Ld = {
  key: 0,
  class: "cell center"
}, Fd = { class: "cell" }, Td = {
  key: 0,
  class: "cell"
}, Ed = ["onClick"], $d = { class: "cell" }, Md = ["disabled", "aria-label", "onClick"], Nd = { class: "button-wrapper main" }, Bd = ["aria-label"], Vd = ["aria-label", "disabled"], Dd = ["aria-label"], Rd = { id: "part-count" }, jd = {
  key: 2,
  class: "pagination-controls"
}, qd = { class: "c-btn-group" }, Gd = ["disabled"], Ud = ["disabled"], Wd = { class: "pagination-info" }, zd = ["disabled"], Hd = ["disabled"], _d = {
  key: 4,
  id: "messages"
}, Kd = {
  key: 0,
  class: "heading"
}, Zd = { class: "content" }, Jd = {
  key: 5,
  id: "progress"
}, Yd = { id: "diagram-wrapper" }, Xd = {
  key: 0,
  id: "stack"
}, Qd = {
  key: 3,
  class: "debug"
}, _i = !1, ef = /* @__PURE__ */ tt({
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
    const i = An(() => import("./InputIssues-C9tRqpi9.js")), s = An(() => import("./Machining-Cqr3xiqs.js")), a = An(() => import("./ImportCSV-CYoEKZ7o.js")), o = An(() => import("./ObjectViewer-CQl5kqFl.js")), l = An(() => import("./ImageUpload-C-U2e55y.js")), {
      inputs: r,
      totalInputShapes: p,
      getShapeGrainSummary: b,
      updateNumberFormat: x,
      validateInputStock: h,
      // validateInputShapeField,
      // validateInputStockField,
      removeInputShape: O,
      addInputShape: B,
      addInputStock: J,
      cloneInputShape: N,
      updateInputShape: R,
      validationIssues: H,
      setExtrasOptionsFromPricing: U,
      getCentralizedOptions: ye
    } = wa(), { r: X, updateFromResult: oe, stackedStock: j, uniqueAddedShapes: G, uniqueUsedStock: P, usedStock: S, activeStockAutoId: _, activeStock: Q, setActiveStockAutoId: ee } = ss(), { progress: ae, reset: $e } = Ea(), { addNotice: K } = Ta(), V = L(() => r.inputShapes.value.filter(Ne)), D = (c) => !c || !Array.isArray(c) ? [] : c.map((d) => or({ parts: [d] }).parts?.[0] || d), re = t, pe = n, Ce = W(!1), Ue = "production", et = W(navigator?.language || "en-US"), Je = Sn(null), Ut = window.location.hostname, ft = W(!1), $t = W(!0), kt = yo("Checkout/currentURL", window.location.href), nt = W([]), xt = W(null), st = W(null), fe = W(!1), Ye = W(!1), De = W(!1), Wt = W(!1), tn = W(!1), Mt = W(gl()), Ke = W(!1), Re = W(1), w = W(10), { socket: y } = iu({
      refs: {
        connected: ft,
        thinking: De
      },
      callbacks: {
        onResult(c) {
          const d = c.optimisation;
          if (oe(d), !d.shapeList?.length || !d.stockList?.length) {
            $e(), K({
              type: "error",
              message: be("errors.calculation.no_result"),
              additional: [be("errors.validation.check_inputs")]
            }), De.value = !1;
            return;
          }
          if ((I.apiVersion || 3) === 2 ? st.value = td(
            c.jobId,
            G.value,
            P.value,
            S.value,
            X.offcuts?.value || [],
            r.inputShapes.value,
            X.metadata.value,
            I.resultOrientationModel
          ) : st.value = nd(
            c.jobId,
            G.value,
            P.value,
            S.value,
            X.offcuts?.value || [],
            r.inputShapes.value,
            X.metadata.value,
            I.resultOrientationModel
          ), X?.metadata?.value?.unplacedParts?.length) {
            const f = X.metadata.value.unplacedParts.map((k) => k.id).join();
            K({
              type: "warning",
              message: be("woodwork.parts_not_fit") + ": " + f
            });
          }
          st.value && (I.emitAPIResult && (st.value.apiResultV3 = yr({
            jobId: c.jobId,
            saw: d.saw,
            stockList: d.stockList,
            shapeList: d.shapeList,
            cutList: d.cutList,
            offcuts: X.offcuts?.value || [],
            unusableShapes: d.unusableShapes,
            metadata: X.metadata.value
          })), pe("result", st.value)), De.value = !1;
        },
        onUser(c) {
          Je.value = c;
        },
        onConnectError(c) {
          K({
            type: "error",
            message: be("errors.network.cannot_connect"),
            additional: [c]
          });
        },
        onError(c) {
          K({
            type: "error",
            message: be("errors.general.error_occurred"),
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
    }, I = wt(m), F = wt({
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
        maxPhase: 3
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
    }), me = W(null), ge = W(!1), Oe = W(""), Nt = W("");
    ze(H, (c) => {
      c?.length > 0 ? (ge.value = !0, Oe.value = "Validation Errors", Nt.value = c.map((d) => `${d.message} (${d.category.join(", ")})`).join(`

`)) : Oe.value === "Validation Errors" && (ge.value = !1, Oe.value = "", Nt.value = "");
    }, { deep: !0 });
    const Xe = wt({
      banding: null,
      finish: null,
      info: null,
      planing: null
      // imageUpload: null
    }), ke = W([]), Be = W([]), un = W([]), Le = W([]), ct = wt({
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
    }), Ie = wt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2"]
    }), Ve = wt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["a", "b"]
    }), Fe = wt({
      labels: [],
      pricing: {},
      options: [],
      // Will be replaced by computed property
      keys: ["l1", "l2", "w1", "w2", "a", "b", "c", "d"]
      // All sides and faces by default
    }), Un = W(null), Bt = wt({}), pt = wt({}), ht = wt({}), nn = W(null), dn = W(null), mi = L(() => ({
      banding: Bt.rules,
      finish: pt.rules,
      planing: ht.rules
    })), fn = L(() => nu({
      stockType: F.stockType,
      materials: ke.value,
      minDimension: I.minDimension,
      ...I.fieldOrder && I.fieldOrder.length > 0 ? { allowedFieldIds: I.fieldOrder } : {}
    })), pn = W([]), hn = W({
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
    }), gn = L(() => {
      const c = fn.value.fields.value, d = fn.value.allFieldsMap.value, g = c.filter((we) => hn.value[we.name] ?? !0), f = ["banding", "finish", "planing", "machining", "imageUpload"], k = [];
      let M = null;
      const te = g.filter((we) => we.name !== "fullStock");
      hn.value.fullStock && (M = g.find((we) => we.name === "fullStock") || d.get("fullStock"));
      for (const we of f) {
        const Te = hn.value[we], bt = te.find((gt) => gt.name === we);
        if (Te && !bt) {
          const gt = d.get(we);
          gt && k.push(gt);
        }
      }
      const he = pn.value || [];
      return [
        ...M ? [M] : [],
        ...te,
        ...k,
        ...he
      ];
    }), zt = L(() => gn.value.length + 2), vi = L(() => {
      const c = {
        id: 34,
        del: 32
      }, d = {
        id: `${c.id}px`,
        del: `${c.del}px`
      }, g = [];
      for (const f of gn.value) {
        if (f.name === "trim") continue;
        const k = f.w ?? "minmax(20px, 1fr)";
        g.push(k);
      }
      return g.unshift(d.id), g.push(d.del), g.join(" ");
    }), sn = L(() => I.enable.pagination), Vt = L(() => sn.value ? Math.ceil(V.value.length / w.value) : 1), bi = L(() => {
      if (!sn.value) return V.value;
      const c = (Re.value - 1) * w.value, d = c + w.value;
      return V.value.slice(c, d);
    }), yi = L(() => sn.value ? (Re.value - 1) * w.value : 0), an = (c) => {
      c < 1 && (c = 1), c > Vt.value && (c = Vt.value), Re.value = c;
    }, wi = () => an(1), Si = () => an(Re.value - 1), u = () => an(Re.value + 1), v = () => an(Vt.value), $ = L(() => ({
      "--btn-color": I.colors.buttonText,
      "--btn-bg": I.colors.button,
      "--btn-hover-bg": T(I.colors.button, -8),
      "--btn-focus-ring": I.colors.button
    }));
    function T(c, d) {
      const g = c.replace("#", ""), f = parseInt(g, 16), k = Math.round(2.55 * d), M = (f >> 16) + k, te = (f >> 8 & 255) + k, he = (f & 255) + k;
      return `#${(16777216 + (M < 255 ? M < 1 ? 0 : M : 255) * 65536 + (te < 255 ? te < 1 ? 0 : te : 255) * 256 + (he < 255 ? he < 1 ? 0 : he : 255)).toString(16).slice(1)}`;
    }
    const q = {
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
    }, ie = L(() => re.showCredit !== void 0 ? re.showCredit : Je.value ? !(Je.value && Je.value?.api?.whiteLabel) : !0), Se = {
      // @deprecated Use saw.options.stockSelection instead
      stockSelection: (c) => {
        const d = ["efficiency", "smallest"];
        c && !d.includes(c) ? console.warn(`${c} is not a valid stockSelection, expected ${d.join("|")}`) : F.options.stockSelection = c;
      },
      // @deprecated Use saw.options.minSpacing instead
      minSpacing: (c) => {
        F.options.minSpacing = c;
      },
      maxParts: (c) => {
        I.maxParts = c;
      },
      partsPerPage: (c) => {
        c && c > 0 && (w.value = c, I.partsPerPage = c);
      },
      locale: (c) => {
        et.value = c.replace(/_/g, "-");
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
          const f = d[g], k = ln(c, [f]), M = m.enable[f];
          se(g, k !== void 0 ? k : M);
        }
        tn.value = ln(c, ["csvImport"]) ?? m.enable.csvImport;
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
          const f = We(g.id), k = {
            ...g,
            custom: !0,
            id: f,
            name: f,
            // CheckoutField expects 'name' property
            propertyPath: "customData." + f,
            fieldMap: "customData." + f
          };
          g.type === "checkbox" && (k.w = "32px"), g.type === "integer" || g.type === "float" ? k.output = g.output ?? "number" : g.type === "select" && (k.output = g.output ?? "string", k.options = g.options), d.push(k);
        }), pn.value = d, mt(() => {
          for (const g of r.inputShapes.value)
            g.customData = c.reduce((f, k) => {
              const M = We(k.id);
              return f[M] = g.customData[M] || k.default || "", f;
            }, {});
        });
      }
    }, xe = (c) => {
      re.debug && pe("log", ["checkout init...", c]), c?.stockFilterEnabled && localStorage.removeItem("inputs/inputStock"), c?.parts && (c.parts = D(c.parts));
      let d;
      try {
        d = Zu(c);
      } catch (f) {
        pe("error", f.message || "Invalid init data");
        return;
      }
      if (d.saw) {
        const f = d.saw;
        if (f.stockType !== void 0 && (Ji.includes(f.stockType) || console.warn(`${f.stockType} is not a valid stockType, expected ${Ji.join("|")}`), F.stockType = f.stockType, f.stockType === "linear" && (F.cutType = null, F.cutPreference = null)), f.bladeWidth !== void 0) {
          const k = typeof f.bladeWidth == "string" ? parseFloat(f.bladeWidth) : f.bladeWidth;
          k >= 0 ? F.bladeWidth = k : console.warn(`SmartCut - you provided an incorrect blade width of: ${f.bladeWidth}`);
        }
        if (f.cutType !== void 0 && (F.cutType = f.cutType), f.cutPreference !== void 0 && (xs.includes(f.cutPreference) ? F.cutPreference = f.cutPreference : console.warn(`SmartCut - cut preference ${f.cutPreference || "N/A"} is not valid. Expected: ${xs.join("|")}`)), f.guillotineOptions !== void 0 && typeof f.guillotineOptions == "object" && Object.assign(F.guillotineOptions, f.guillotineOptions), f.stackHeight !== void 0) {
          const k = typeof f.stackHeight == "string" ? parseFloat(f.stackHeight) : f.stackHeight;
          F.stackHeight = k;
        }
        f.efficiencyOptions !== void 0 && typeof f.efficiencyOptions == "object" && Object.assign(F.efficiencyOptions, f.efficiencyOptions), f.options !== void 0 && typeof f.options == "object" && (f.options.stockSelection !== void 0 && (F.options.stockSelection = f.options.stockSelection), f.options.stackingMode !== void 0 && (F.options.stackingMode = f.options.stackingMode), f.options.minSpacing !== void 0 && (F.options.minSpacing = f.options.minSpacing));
      }
      if (d?.options) {
        const f = d.options;
        Sa(f);
        const k = ["stockType", "bladeWidth"];
        if (!d.saw && !c?.stockFilterEnabled)
          pe("error", `Saw configuration is required. Missing properties: ${k.join(", ")}`);
        else if (d.saw) {
          const te = k.filter((he) => !(he in d.saw));
          te.length > 0 && pe("error", `Missing required saw properties: ${te.join(", ")}`), (d.saw.cutType === "guillotine" || d.saw.cutType === "beam") && !("cutPreference" in d.saw) && pe("error", "cutPreference is a required saw property for guillotine and beam cut types");
        }
        const M = ["enable", "colors"];
        for (const te in f)
          M.includes(te) || (I[te] = f[te]), te in Se && Se[te](f[te]);
      }
      if (d.options.colors && "colors" in Se && Se.colors(d.options.colors), d.banding) {
        const f = d.banding;
        "locations" in f && f.locations && (Bt.locations = f.locations), "groups" in f && f.groups && (Bt.groups = f.groups), "rules" in f && f.rules && (Bt.rules = f.rules);
      }
      if (d.finish) {
        const f = d.finish;
        "locations" in f && f.locations && (pt.locations = f.locations), "groups" in f && f.groups && (pt.groups = f.groups), "rules" in f && f.rules && (pt.rules = f.rules);
      }
      if (d.planing) {
        const f = d.planing;
        "locations" in f && f.locations && (ht.locations = f.locations), "groups" in f && f.groups && (ht.groups = f.groups), "rules" in f && f.rules && (ht.rules = f.rules);
      }
      d.partRules && (nn.value = d.partRules), d.customValidation && (dn.value = d.customValidation), Ii("banding", d), Ii("finish", d), Ii("planing", d), Ot(d), rs(d), Ye.value = !0, re.debug && pe("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), mt(() => {
        ie.value && !Ya() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      }), d.parts?.length && mt(() => {
        pe("log", ["loading parts via init..."]), r.inputShapes.value.length = 0;
        let f = 0;
        for (const M of d.parts) {
          const te = zn(M);
          te ? te.issues?.length && pe("log", [`SmartCut - issues found while importing part at index ${f}`, te.issues]) : pe("log", [`SmartCut - error loading part at index ${f}`, M]), f++;
        }
        r.inputShapes.value.flatMap((M) => Zi(M.issues)).length && K({
          type: "error",
          message: be("errors.general.issues_found")
        }), pe("log", [`loaded ${r.inputShapes.value.length} parts via init`]);
      });
    }, se = (c, d = !1) => {
      hn.value[c] = d;
    }, We = (c) => c ? xl(c)?.toLowerCase() : null, je = (c, d, g) => {
      try {
        if (!c || !d) return;
        const k = g !== null && g !== "" && g !== void 0 && !["orientationLock", "grain"].includes(d), M = (ce, we) => {
          if (!R(ce.autoId, we)) {
            for (const [bt, gt] of Object.entries(we))
              Ni(ce, bt, gt);
            ce.isNew || ce.validate({ fields: Object.keys(we) });
          }
        }, te = (ce, we, Te) => {
          const bt = we ?? ce.material, gt = Te ?? ce.t, Pi = r.inputStock.value.find((gs) => {
            const ro = !bt || gs.material === bt, co = gt == null || ve({ v: gs.t }) === ve({ v: gt });
            return ro && co;
          });
          return Pi ? { l: ve({ v: Pi.l }), w: ve({ v: Pi.w }) } : null;
        };
        if (d === "material" && (!g || g === "")) {
          const ce = { material: null, t: null };
          F.stockType === "linear" && (ce.w = null), M(c, ce);
          return;
        }
        if (d === "material" && g && ke.value?.length) {
          const ce = ke.value.find((we) => we.name === g);
          if (ce) {
            const we = { material: g };
            if (c.t != null) {
              const Te = ve({ v: c.t });
              !ce.thicknesses.some((bt) => ve({ v: bt }) === Te) && ce.thicknesses.length > 0 && (we.t = ve({ v: ce.thicknesses[0] }));
            }
            if (F.stockType === "linear" && c.w != null && ce.widths) {
              const Te = ve({ v: c.w });
              !ce.widths.some((bt) => ve({ v: bt }) === Te) && ce.widths.length > 0 && (we.w = ve({ v: ce.widths[0] }));
            }
            M(c, we);
            return;
          }
        }
        if (d === "fullStock")
          if (g === !0) {
            const ce = te(c);
            if (ce) {
              M(c, { fullStock: !0, l: ce.l, w: ce.w });
              return;
            }
          } else {
            M(c, { fullStock: !1, l: null, w: null });
            return;
          }
        if ((d === "material" || d === "t") && c.fullStock) {
          const ce = te(
            c,
            d === "material" ? g : void 0,
            d === "t" ? g : void 0
          );
          if (ce) {
            M(c, { [d]: g, l: ce.l, w: ce.w });
            return;
          }
        }
        if (c.isNew)
          if (k)
            c.isNew = !1;
          else {
            Ni(c, d, g);
            return;
          }
        let he;
        if (d.includes(".")) {
          const ce = d.split("."), we = ce[0], Te = ce.slice(1).join("."), gt = { ...c[we] || {} };
          Ni(gt, Te, g), he = { [we]: gt };
        } else
          he = { [d]: g };
        M(c, he), d === "t" && F.stockType === "linear" && ke.value?.length && c.material && mt(() => {
          const ce = ls(c);
          if (ce.length > 0 && c.w != null) {
            const we = ve({ v: c.w });
            ce.some((Te) => ve({ v: Te }) === we) || M(c, { w: ve({ v: ce[0] }) });
          }
        });
      } catch (f) {
        console.error("[CHECKOUT] Error updating field:", f);
      }
    }, He = () => {
    }, qe = (c, d) => {
      c?.isNew && (c.isNew = !1), c.validate({ fields: [d] }), ["l", "w", "t"].includes(d) && Ct(c);
    }, Ct = (c) => {
      if (nn.value && c && !c.isNew && !(!c.l && !c.w))
        try {
          const d = Cu(c, nn.value);
          if (c.issues && (c.issues = c.issues.filter((g) => !g.category?.includes("part"))), !d.valid && d.violations.length > 0)
            for (const g of d.violations) {
              const f = Iu(g), k = g.dimension === "longSide" ? "l" : g.dimension === "shortSide" ? "w" : null;
              new Ft({
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
    }, Ot = (c) => {
      if (ln(I, ["enable", "machining"]) && c?.machining) {
        for (const d in ct)
          c.machining[d] && (ct[d] = c.machining[d]);
        if (["holes", "hingeHoles"].forEach((d) => {
          c?.machining?.[d] && (ct[d].enabled = c?.machining?.[d].enabled);
        }), c?.machining?.corners?.types?.length && (ct.corners.enabled = !0, ct.corners.types = c.machining.corners.types), c.banding && c?.options?.enable?.banding) {
          if (!Ie) return;
          ct.banding = {
            enabled: !0
          }, Ie.options.length && (ct.banding.options = Ie.options), Ie.labels.length && (ct.banding.labels = Ie.labels), Cs(Ie.pricing) && (ct.banding.pricing = Ie.pricing);
        }
      }
    }, Cn = (c = null) => {
      me.value = c, c && Ne(c) && c.l && c.w ? Ce.value = !0 : alert(be("machining.enter_dimensions_first"));
    }, On = () => {
      Ce.value = !1;
    }, vt = (c = []) => {
      if (Be.value = [], un.value = [], se("t", !1), !!c.length) {
        for (const d of c)
          if (d?.t)
            if (typeof d.t == "string" && d.t.includes(",")) {
              const g = cs(d.t, !0);
              g.length === 2 ? (za(g), se("t", !0), d.t = Be.value[0]) : pe("error", "bonded thickness found which does not have 2 options");
            } else Be.value.includes(d.t) || Be.value.push(d.t);
        Be.value.length > 1 && se("t", !0);
      }
    }, mn = (c = []) => {
      if (Le.value = [], !c.length) {
        se("w", !1);
        return;
      }
      for (const d of c) {
        if (!d?.w) continue;
        const g = ve({ v: d.w });
        Le.value.includes(g) || Le.value.push(g);
      }
      Le.value.length >= 1 ? se("w", !0) : se("w", !1);
    }, Wn = (c) => {
      if (!c) return { thicknesses: [], bondedThicknesses: [] };
      if (!ke.value?.length)
        return {
          thicknesses: Be.value,
          bondedThicknesses: []
        };
      if (!c.material)
        return {
          thicknesses: Be.value,
          bondedThicknesses: []
        };
      const d = ke.value.find((k) => k.name === c.material);
      if (!d)
        return {
          thicknesses: Be.value,
          bondedThicknesses: []
        };
      const g = [...d.thicknesses], f = [];
      for (let k = 0; k < g.length; k++) {
        const M = g[k], te = cs(M), he = [];
        if (te.length) {
          for (const ce of te)
            g[k] = ce, he.push(k);
          k++;
        }
        he.length && f.push(he);
      }
      return {
        thicknesses: g,
        bondedThicknesses: f
      };
    }, ls = (c) => {
      if (!c) return [];
      if (!ke.value?.length || !c.material)
        return Le.value;
      const d = ke.value.find((g) => g.name === c.material);
      if (!d)
        return Le.value;
      if (c.t != null && r.inputStock?.value?.length) {
        const g = ve({ v: c.t }), f = /* @__PURE__ */ new Set();
        for (const k of r.inputStock.value)
          k.material?.toUpperCase() === c.material && ve({ v: k.t }) === g && k.w != null && f.add(ve({ v: k.w }));
        if (f.size > 0)
          return Array.from(f).sort((k, M) => k - M);
      }
      return d.widths || Le.value;
    }, Ua = (c) => {
      const d = { banding: !1, finish: !1, planing: !1, machining: !1 }, g = { banding: !0, finish: !0, planing: !0, machining: !0 }, f = (he, ce) => he.some((we) => we.extras?.[ce]?.length), k = (he) => ({
        banding: !f(he, "banding"),
        finish: !f(he, "finish"),
        planing: !f(he, "planing"),
        machining: !f(he, "machining")
      }), M = r.inputStock.value.some((he) => he.extras);
      if (!c?.material)
        return ke.value?.length || M ? g : d;
      const te = c.material.toUpperCase();
      if (ke.value?.length) {
        const he = ke.value.find((ce) => ce.name?.toUpperCase() === te);
        if (he?.extras)
          return {
            banding: !he.extras.banding?.length,
            finish: !he.extras.finish?.length,
            planing: !he.extras.planing?.length,
            machining: !he.extras.machining?.length
          };
      }
      if (M) {
        const he = r.inputStock.value.filter((ce) => ce.material?.toUpperCase() === te);
        if (he.some((ce) => ce.extras))
          return k(he);
      }
      return d;
    }, rs = (c) => {
      if (c?.stock?.some((d) => d?.material)) {
        ke.value = [], Be.value = [], un.value = [];
        const d = /* @__PURE__ */ new Map();
        for (const f of c.stock) {
          if (!f.material) continue;
          const k = f.material.toUpperCase();
          d.has(k) || d.set(k, { thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), f.t != null && d.get(k)?.thicknesses.add(ve({ v: f.t })), F.stockType === "linear" && f.w != null && d.get(k)?.widths.add(ve({ v: f.w }));
        }
        ke.value = Array.from(d.entries()).map(([f, k]) => {
          const M = {
            name: f,
            thicknesses: Array.from(k.thicknesses).sort((te, he) => te - he)
          };
          return F.stockType === "linear" && k.widths.size > 0 && (M.widths = Array.from(k.widths).sort((te, he) => te - he)), M;
        });
        const g = /* @__PURE__ */ new Set();
        for (const f of ke.value)
          for (const k of f.thicknesses)
            g.add(ve({ v: k }));
        if (Be.value = Array.from(g).sort((f, k) => f - k), F.stockType === "linear") {
          const f = /* @__PURE__ */ new Set();
          for (const k of ke.value)
            if (k.widths)
              for (const M of k.widths)
                f.add(ve({ v: M }));
          Le.value = Array.from(f).sort((k, M) => k - M);
        }
        ke.value.length > 1 ? se("material", !0) : se("material", !1), Be.value.length > 1 ? se("t", !0) : se("t", !1), F.stockType === "linear" && Le.value.length > 1 ? se("w", !0) : F.stockType === "linear" && se("w", !1);
      } else
        vt(c.stock);
      F.stockType === "linear" && !ke.value?.length && mn(c.stock);
    }, Wa = (c) => {
      if (!c?.length) {
        ke.value = [], Be.value = [], Le.value = [];
        return;
      }
      if (c.some((d) => d?.material)) {
        const d = /* @__PURE__ */ new Map();
        for (const f of c) {
          if (!f.material) continue;
          const k = f.material.toUpperCase();
          d.has(k) || d.set(k, { thicknesses: /* @__PURE__ */ new Set(), widths: /* @__PURE__ */ new Set() }), f.t != null && d.get(k)?.thicknesses.add(ve({ v: f.t })), F.stockType === "linear" && f.w != null && d.get(k)?.widths.add(ve({ v: f.w }));
        }
        ke.value = Array.from(d.entries()).map(([f, k]) => {
          const M = {
            name: f,
            thicknesses: Array.from(k.thicknesses).sort((te, he) => te - he)
          };
          return F.stockType === "linear" && k.widths.size > 0 && (M.widths = Array.from(k.widths).sort((te, he) => te - he)), M;
        });
        const g = /* @__PURE__ */ new Set();
        for (const f of ke.value)
          for (const k of f.thicknesses)
            g.add(ve({ v: k }));
        if (Be.value = Array.from(g).sort((f, k) => f - k), F.stockType === "linear") {
          const f = /* @__PURE__ */ new Set();
          for (const k of ke.value)
            if (k.widths)
              for (const M of k.widths)
                f.add(ve({ v: M }));
          Le.value = Array.from(f).sort((k, M) => k - M);
        }
        se("material", ke.value.length > 1), se("t", Be.value.length > 1), F.stockType === "linear" && se("w", Le.value.length > 1);
      } else
        vt(c), F.stockType === "linear" && mn(c);
    }, za = (c, d = null) => {
      if (!Array.isArray(c)) {
        pe("error", "addBondedThicknesses expects an array");
        return;
      }
      const g = [];
      for (let f of c)
        I.numberFormat === "decimal" && (f = parseFloat(f)), Be.value.push(f), d && d.thicknesses.push(f), g.push(Be.value.length - 1);
      un.value.push(g);
    }, Ha = (c) => {
      const { thicknesses: d } = Wn(c);
      return d?.length ? d.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, _a = (c) => {
      const d = ls(c);
      return d?.length ? d.map((g) => ({
        label: g?.toString(),
        value: g
      })) : [];
    }, cs = (c, d = !1) => {
      if (typeof c == "string" && c.includes(",")) {
        const g = c.split(",");
        if (g.length === 2) {
          const f = parseFloat(g[0]), k = parseFloat(g[1]);
          !isNaN(f) && !isNaN(k) && k !== f * 2 && K({
            type: "warning",
            message: `Bonded thickness "${c}" does not follow the expected pattern (second value should be double the first)`
          });
        }
        return d ? g.map((f) => ve({ v: f })) : g;
      }
      return [];
    }, Ka = () => {
      Ke.value ? Ja() : Za();
    }, Za = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), Ke.value = !0;
    }, Ja = () => {
      document.exitFullscreen && document.exitFullscreen(), Ke.value = !1;
    }, Ya = () => {
      if (Je.value?.api?.whiteLabel) return !0;
      let c = !0;
      const d = document.querySelector("#smartcut-checkout a#credit");
      if (!d) return c = !1;
      const g = window.getComputedStyle(d);
      return g.display === "none" || g.display === "hidden" || g.opacity === "0" || g.color === "transparent" || g.position !== "absolute" || g.color !== "#4e4e4e" && g.color !== "rgb(78, 78, 78)" ? c = !1 : ($t.value = c, c);
    }, ki = L(() => typeof re.findExtrasPrice == "function"), us = (c, d) => {
      let g, f;
      switch (d) {
        case "banding":
          g = Ie.options, f = Ie.labels;
          break;
        case "finish":
          g = Ve.options, f = Ve.labels;
          break;
        case "planing":
          g = Fe.options, f = Fe.labels;
          break;
        default:
          g = [], f = [];
      }
      Zt(c, d, g, f);
    }, ds = (c) => {
      const d = Object.keys(c);
      return Math.max(...d.map((f) => f.split("|").length));
    }, In = (c, d, g) => {
      if (!c)
        return [];
      if (g > 0 && !d[g - 1])
        return [];
      const f = /* @__PURE__ */ new Set();
      for (const M of Object.keys(c)) {
        const te = M.split("|");
        if (te.length > g) {
          let he = !0;
          for (let ce = 0; ce < g; ce++) {
            const we = d[ce], Te = te[ce];
            if (we && we !== Te) {
              he = !1;
              break;
            }
          }
          he && f.add(te[g]);
        }
      }
      return Array.from(f);
    }, xi = (c, d, g, f) => {
      let k, M;
      switch (d) {
        case "banding":
          k = Ie.options, M = Ie.labels;
          break;
        case "finish":
          k = Ve.options, M = Ve.labels;
          break;
        case "planing":
          k = Fe.options, M = Fe.labels;
          break;
        default:
          k = [], M = [];
      }
      return $i(c, d, g, f, k, M);
    }, Xa = (c, d, g) => {
      let f, k;
      switch (d) {
        case "banding":
          f = Ie.options, k = Ie.labels;
          break;
        case "finish":
          f = Ve.options, k = Ve.labels;
          break;
        case "planing":
          f = Fe.options, k = Fe.labels;
          break;
        default:
          f = [], k = [];
      }
      return $i(c, d, g, re.findExtrasPrice, f, k);
    }, Qa = W({}), eo = (c) => {
      const d = nt.value.findIndex((g) => g.shapeId === c.shapeId);
      d !== -1 ? nt.value[d] = c : nt.value.push(c), window.smartcutImages = nt.value;
    }, to = (c) => {
      nt.value = nt.value.filter((d) => d.shapeId !== c), window.smartcutImages = nt.value;
    }, no = (c) => {
      xt.value = xt.value === c ? null : c;
    }, Ci = (c = 1) => {
      for (let d = c; d--; ) {
        let g = {
          l: null,
          w: F.stockType === "linear" && Le.value.length === 1 ? Le.value[0] : null,
          t: Be.value.length ? Be.value[0] : null,
          q: 1,
          material: ke.value?.length === 1 ? ke.value[0].name : "",
          name: null,
          orientationLock: null
        };
        if (r.inputShapes.value.length > 0) {
          const k = r.inputShapes.value[r.inputShapes.value.length - 1];
          g.material = k.material, g.t = k.t, F.stockType === "linear" && k.w && (g.w = k.w);
        }
        const f = B(g);
        f && (Ie?.labels?.length && Zt(f, "banding", Ie.options, Ie.labels), Ve?.labels?.length && Zt(f, "finish", Ve.options, Ve.labels), Fe?.labels?.length && Zt(f, "planing", Fe.options, Fe.labels));
      }
    }, zn = (c = {}) => {
      const d = {
        q: 1,
        // Always set quantity to 1
        ...c
      }, g = B(d);
      return g && (F.stockType === "linear" && Le.value.length === 1 && !g.w && (g.w = Le.value[0]), Be.value.length && !g.t && (g.t = Be.value[0]), ke.value?.length === 1 && !g.material && (g.material = ke.value[0].name), Ie?.labels?.length && Zt(g, "banding", Ie.options, Ie.labels), Ve?.labels?.length && Zt(g, "finish", Ve.options, Ve.labels), Fe?.labels?.length && Zt(g, "planing", Fe.options, Fe.labels)), g;
    }, io = (c) => {
      if (Be.value.length)
        for (const d of c) {
          if (!d.t) return;
          const g = Be.value.findIndex(
            (M) => ve({ v: M }) === d.t
          ), f = un.value.find((M) => M.includes(g));
          if (!f) return;
          const k = Math.min(
            ...f.map((M) => Be.value[M])
          );
          ve({ v: d.t }) > k && (d.q = Number(d.q) * (ve({ v: d.t }) / k), d.notes = `Bond to form ${d.t.valueOf()}`, d.t = k);
        }
    }, fs = () => {
      $e(), ee(null), X.stockList.value = [], X.shapeList.value = [], X.cutList.value = [];
    }, Oi = () => {
      r.inputShapes.value.length = 0, re.inputType !== "formula" && mt(() => Ci());
    }, ps = () => {
      for (const c of r.inputShapes.value) {
        const d = c.material ? ke.value.find((g) => g.name === c.material) : null;
        if (d)
          d.thicknesses.includes(ve({ v: c.t })) || (c.t = ve({ v: d.thicknesses[0] }));
        else if (ke.value?.length === 1) {
          c.material = ke.value[0].name;
          const g = ke.value[0];
          g.thicknesses.includes(ve({ v: c.t })) || (c.t = ve({ v: g.thicknesses[0] }));
        } else if (ke.value?.length > 1 && c.t) {
          const g = ke.value.find((f) => f.thicknesses.some((k) => ve({ v: k }) === ve({ v: c.t })));
          g ? c.material = g.name : (c.material = ke.value[0].name, c.t = ve({ v: ke.value[0].thicknesses[0] }));
        } else ke.value?.length > 1 ? (c.material = ke.value[0].name, c.t = ve({ v: ke.value[0].thicknesses[0] })) : !c.t && r.inputStock.value[0]?.t && (c.t = ve({ v: r.inputStock.value[0].t }));
      }
    }, so = async () => {
      if (pe("calculating"), De.value) return !1;
      De.value = !0, Wt.value = !1, ps();
      const c = await pu({
        t: be,
        partTrim: I.partTrim,
        maxShapes: I.maxParts || 1e3,
        maxStock: 1 / 0,
        // CheckoutCalculator doesn't have stock limits
        inputSaw: r.inputSaw.value,
        // Extras validation data
        bandingPricing: Ie.pricing,
        finishPricing: Ve.pricing,
        planingPricing: Fe.pricing,
        findExtrasPrice: re.findExtrasPrice,
        extrasValidationRules: mi.value,
        extrasLocationGroups: {
          banding: Bt.groups,
          finish: pt.groups,
          planing: ht.groups
        },
        onLimit: () => {
          K({
            type: "error",
            message: be("limits.max_parts") + " " + I.maxParts
          });
        }
      });
      if (nn.value)
        for (const M of r.inputShapes.value)
          Ct(M);
      const d = r.inputShapes.value.flatMap((M) => M.issues || []).filter((M) => M.type === "error" && M.category?.includes("part") && !M.category?.includes("extras"));
      if (d.length > 0) {
        K({
          type: "error",
          message: be("errors.validation.inputs_issue", { 0: "part" }),
          additional: d.map((M) => M.message)
        }), pe("validation-error"), De.value = !1;
        return;
      }
      if (!c.valid) {
        pe("validation-error"), De.value = !1;
        return;
      }
      fs(), r.inputShapes.value.forEach((M, te) => {
        M.createId(te);
      }), r.inputStock.value.forEach((M, te) => {
        M.createId(te);
      });
      const g = r.inputShapes.value.map((M) => N(M)).filter(Boolean);
      if (g.length !== r.inputShapes.value.length)
        return K({
          type: "error",
          message: "Some parts have validation errors and cannot be processed",
          additional: ["Please check part dimensions and fix any issues before calculating"]
        }), De.value = !1, !1;
      io(g), re.debug && console.log(
        "SmartCut - calculating",
        "stock",
        r.inputStock.value.map((M) => ({ l: M.l, w: M.w })),
        "parts",
        g.map((M) => ({ l: M.l, w: M.w }))
      );
      const f = {
        inputSaw: r.inputSaw.value.toData(),
        inputShapes: g.map((M) => M.toData()),
        inputStock: r.inputStock.value.map((M) => M.toData()),
        inputUserGroups: [],
        enableEvo: !0,
        useInventory: !1,
        domain: Ut,
        extrasOptions: ye(),
        source: "checkout",
        sourceVersion: "4.0.106"
      };
      if (dn.value?.enabled && dn.value?.rules?.length > 0) {
        const M = Xu(
          dn.value.rules,
          r.inputShapes.value.map((te) => te.toData())
        );
        if (!M.valid) {
          for (const te of M.errors) {
            const he = te.partName ? `Part "${te.partName}"` : `Part ${te.partIndex + 1}`;
            K({
              type: "error",
              message: `${he}: ${te.message}`
            });
          }
          De.value = !1;
          return;
        }
      }
      pe("before-calculate", f);
      const k = new CustomEvent("smartcut/beforeCalculate", {
        cancelable: !0,
        detail: {
          data: f,
          error: null
        }
      });
      if (window.dispatchEvent(k), k.defaultPrevented) {
        k.detail.error && K({
          type: "error",
          message: k.detail.error
        }), De.value = !1;
        return;
      }
      await y.connect(), y.emit("calculate", f);
    }, Ii = (c, d) => {
      if (se(c, !1), !c || !d || !d?.[c] || !ln(I, ["enable", c]))
        return;
      const g = [c, "pricing"];
      if (!Os(d, g)) {
        pe("error", `${g.join(".")} not found in sent data`);
        return;
      }
      const f = ln(d, g);
      if (typeof f != "object") {
        pe("error", `${g.join(".")} data must be an object`);
        return;
      }
      if (!Cs(f)) {
        pe("error", `if provided, ${g.join(".")} data must contain some values`);
        return;
      }
      const k = Object.keys(f), M = Object.values(f);
      if (!k.length) {
        pe("error", `no ${g.join(".")} pricing found`);
        return;
      }
      const te = /,/;
      for (const Te of k)
        if (te.test(Te)) {
          pe("error", `${g} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (M.some((Te) => isNaN(Te))) {
        pe("error", `${g} values must be a number`);
        return;
      }
      const he = ds(f), ce = [c, "labels"];
      let we = [];
      if (Os(d, ce))
        we = ln(d, ce);
      else {
        pe("error", `${ce.join(".")} not found`);
        return;
      }
      if (!we) {
        pe("error", `${ce.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(we)) {
        pe("error", `${ce.join(".")} data must be an array`);
        return;
      }
      if (!we?.length) {
        pe("error", `if provided, ${ce.join(".")} data must contain values`);
        return;
      }
      if (we.length !== he) {
        pe("error", `${ce.join(".")} length (${we.length}) must match the number of levels in ${g.join(".")} (${he})`);
        return;
      }
      switch (c) {
        case "banding": {
          Ie.labels = we, Ie.pricing = f;
          const Te = Ai(f);
          Ie.options = Te, U("banding", Te, we, f);
          break;
        }
        case "finish": {
          Ve.labels = we, Ve.pricing = f;
          const Te = Ai(f);
          Ve.options = Te, U("finish", Te, we, f);
          break;
        }
        case "planing": {
          Fe.labels = we, Fe.pricing = f;
          const Te = Ai(f);
          Fe.options = Te, U("planing", Te, we, f);
          break;
        }
      }
      if (Un.value = ye(), se(c, !0), !!r.inputShapes.value?.length)
        for (const Te of r.inputShapes.value)
          us(Te, c);
    }, Ai = (c) => {
      const d = [], g = Object.keys(c), f = ds(c);
      for (let k = f; k--; ) d.push(/* @__PURE__ */ new Set());
      for (const k of g)
        k.split("|").forEach((te, he) => d[he].add(te));
      for (let k = 0; k < f; k++)
        d[k] = Array.from(d[k]);
      return d;
    }, Hn = (c, d) => {
      if (!d) return;
      c !== "info" && Object.keys(Xe).forEach((f) => {
        f !== c && f !== "info" && (Xe[f] = null);
      });
      const g = r.inputShapes.value.indexOf(d);
      Xe[c] === g ? (me.value = null, Xe[c] = null, Qa.value[c] = void 0) : (me.value = d, Xe[c] = g);
    }, hs = (c) => {
      if (pe("log", ["load event received"]), !Ye.value) {
        pe("log", ["load event received"]);
        return;
      }
      ao(c.detail);
    }, ao = (c) => {
      if (pe("log", ["loading parts..."]), !c || !c?.inputs?.parts?.length) {
        pe("log", ["could not find any parts to import"]);
        return;
      }
      r.inputShapes.value.length = 0;
      let d = 0;
      for (const f of c.inputs.parts) {
        const k = zn(f);
        k ? k.issues?.length && pe("log", [`SmartCut - issues found while importing part at index ${d}`, k.issues]) : pe("log", [`SmartCut - error loading part at index ${d}`, f]), d++;
      }
      r.inputShapes.value.flatMap((f) => Zi(f.issues)).length && K({
        type: "error",
        message: be("errors.general.issues_found")
      }), pe("log", [`loaded ${r.inputShapes.value.length} parts`]);
    }, oo = (c) => {
      r.inputShapes.value.length = 0, mt(() => {
        for (const d of c)
          d.t = r.inputStock.value?.[0]?.t ?? null, F.stockType === "linear" && Le.value.length === 1 && !d.w && (d.w = Le.value[0]), zn(d);
      });
    };
    ze(() => re.inputStock, (c) => {
      if (fs(), Array.isArray(c) || console.warn("SmartCut - stock must be passed as an array"), !!c?.length) {
        r.inputStock.value.length = 0, Wa(c.map((d) => d.toData()));
        for (const d of c)
          J({
            ...d.toData(),
            autoAdd: !0
          }) || (console.error("Failed to add stock item:", d), K({
            type: "error",
            message: "Failed to add some stock items due to validation errors"
          }));
        if (r.inputStock.value.length) {
          r.inputShapes.value.length ? ps() : re.inputType !== "formula" && mt(() => {
            r.inputShapes.value.length || Ci();
          });
          const d = h(r.inputSaw.value);
          d.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(d))), K({
            type: "error",
            message: be("errors.validation.stock_issue"),
            additional: d.map((g) => g.message)
          }));
        }
      }
    }, { immediate: !0 }), ze(r.inputShapes, (c) => {
      pe("inputs-changed"), c.forEach((d) => {
        F.stockType === "linear" && Le.value.length && (!d.w || !Le.value.includes(ve({ v: d.w }))) && (d.w = Le.value[0]);
        const g = ke.value.find((f) => f.name === d.material);
        g && (g.thicknesses.includes(ve({ v: d.t })) || (d.t = ve({ v: g.thicknesses[0] })));
      });
    }, { deep: !0 }), ze(() => V.value.length, (c, d) => {
      if (sn.value) {
        if (c > d) {
          const g = Math.ceil(c / w.value);
          Re.value < g && (Re.value = g);
        } else if (c < d) {
          const g = Math.ceil(c / w.value);
          Re.value > g && (Re.value = Math.max(1, g));
        }
      }
    }), ze(() => I.numberFormat, (c) => {
      x(c);
    }), ze(r.inputStock, (c) => {
      F.stockType === "linear" && mn(c.map((d) => d.toData()));
    }, { deep: !0 }), ze(() => F, (c) => {
      r.inputSaw.value = new Rt(c);
    }, { deep: !0 }), cn(async () => {
      if (fe.value) return;
      fe.value = !0;
      const c = new URL(window.location.href), d = c.searchParams.toString(), g = c.origin + c.pathname + (d ? `?${d}` : "");
      kt.value !== g && Oi(), kt.value = g, et.value = I.locale, await y.connect(), y.emit("getUserFromDomain"), window.addEventListener("smartcut/load", hs);
    });
    const lo = () => {
      y && y.disconnect();
    };
    return pi(() => {
      window.removeEventListener("smartcut/load", hs), lo(), delete window.smartcutCheckout;
    }), e({
      init: xe,
      clear: Oi,
      getAvailablePricingOptions: In,
      getExtrasPrice: Xa,
      formatPrice: re.formatPrice,
      findExtrasPrice: re.findExtrasPrice,
      inputShapes: r.inputShapes,
      initExtrasOptions: us,
      createAndAddInputShape: zn,
      initMaterialsThicknesses: rs
    }), (c, d) => {
      const g = Gn("FontAwesomeIcon");
      return E(), Z("div", Ad, [
        Ye.value ? de("", !0) : (E(), Ee(Zs, {
          key: 0,
          size: 50,
          "show-number": !1
        })),
        me.value?.machining && Ce.value ? (E(), Ee(A(s), {
          key: 1,
          "input-shape": me.value,
          "onUpdate:inputShape": d[0] || (d[0] = (f) => me.value = f),
          translate: !0,
          options: ct,
          "find-extras-price": t.findExtrasPrice,
          "get-extras-price": A($i),
          "get-available-pricing-options": In,
          "format-price": t.formatPrice,
          onClose: On
        }, null, 8, ["input-shape", "options", "find-extras-price", "get-extras-price", "format-price"])) : de("", !0),
        Ye.value ? (E(), Z("section", {
          key: 2,
          id: "smartcut-checkout",
          class: it(["smartcut-content", { fullscreen: Ke.value }]),
          style: St($.value)
        }, [
          Mt.value && !t.readonly ? (E(), Z("button", {
            key: 0,
            id: "smartcut-full-screen",
            class: "c-btn",
            type: "button",
            onClick: d[1] || (d[1] = (f) => Ka())
          }, [
            Ge(g, { icon: ["fass", "expand"] }),
            ii(" " + Ae(A(be)("general.full_screen")), 1)
          ])) : de("", !0),
          ie.value ? (E(), Z("a", {
            key: 1,
            id: "credit",
            style: q,
            title: "Cutlist optimization API / SmartCut",
            tabindex: "-1",
            target: "_blank",
            href: "https://smartcut.dev"
          }, Ae(A(kl)(A(be)("general.powered_by"))), 1)) : de("", !0),
          le("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: St({ "grid-template-columns": vi.value })
          }, [
            A(r).inputShapes.value.length ? (E(), Z("div", Pd, [
              d[6] || (d[6] = le("div", { class: "cell id" }, null, -1)),
              (E(!0), Z(lt, null, qt(gn.value, (f) => (E(), Z("div", {
                key: f.name,
                class: it(["cell", { center: ["orientationLock", "bandingOptions", "finish", "machining", "imageUpload"].includes(f.name) || f.type === "boolean" }])
              }, Ae(A(be)(f.label)), 3))), 128)),
              A(Ue) === "development" && _i ? (E(), Z("div", Ld, " Info ")) : de("", !0),
              d[7] || (d[7] = le("div", { class: "cell del" }, null, -1))
            ])) : de("", !0),
            (E(!0), Z(lt, null, qt(bi.value, (f, k) => (E(), Z("div", {
              key: f.autoId,
              class: "row inputs"
            }, [
              le("div", Fd, [
                le("div", {
                  class: "id",
                  style: St({
                    background: I.colors.partA,
                    color: I.colors.text
                  })
                }, Ae(yi.value + k + 1), 5)
              ]),
              (E(!0), Z(lt, null, qt(gn.value, (M) => (E(), Z("div", {
                key: M.name,
                class: "cell"
              }, [
                f ? (E(), Ee(Id, {
                  key: 0,
                  field: M,
                  item: f,
                  index: k,
                  "type-prefix": "part",
                  readonly: t.readonly,
                  "number-format": I.numberFormat,
                  "orientation-model": I.orientationModel,
                  "stock-grain": A(b)(f),
                  "material-options": ke.value?.map((te) => ({ label: te.name, value: te.name })) || [],
                  "thickness-options": M.name === "t" ? Ha(f) : [],
                  "width-options": M.name === "w" && F.stockType === "linear" ? _a(f) : [],
                  "banding-enabled": Xe.banding === k ? f : null,
                  "full-stock-disabled": f.fullStock && !["material", "t", "q", "fullStock"].includes(M.name),
                  "material-extras-disabled": Ua(f),
                  onUpdate: (te) => je(f, M.propertyPath || M.fieldMap || M.name, te),
                  onValidation: d[2] || (d[2] = (te, he) => He()),
                  onBlur: () => qe(f, M.name),
                  onOpenBanding: (te) => Hn("banding", f),
                  onOpenMachining: (te) => Cn(f),
                  onOpenFinish: (te) => Hn("finish", f),
                  onOpenPlaning: (te) => Hn("planing", f),
                  onOpenImageUpload: (te) => no(k)
                }, null, 8, ["field", "item", "index", "readonly", "number-format", "orientation-model", "stock-grain", "material-options", "thickness-options", "width-options", "banding-enabled", "full-stock-disabled", "material-extras-disabled", "onUpdate", "onBlur", "onOpenBanding", "onOpenMachining", "onOpenFinish", "onOpenPlaning", "onOpenImageUpload"])) : de("", !0)
              ]))), 128)),
              A(Ue) === "development" && _i ? (E(), Z("div", Td, [
                le("button", {
                  class: it(["c-btn", { selected: Xe.info === k }]),
                  type: "button",
                  onClick: (M) => Hn("info", f)
                }, " i ", 10, Ed)
              ])) : de("", !0),
              le("div", $d, [
                le("button", {
                  disabled: A(r).inputShapes.value.length <= 1,
                  type: "button",
                  class: "delete",
                  "aria-label": `${A(be)("actions.remove")} ${A(ji)(A(be)("woodwork.part"))}`,
                  onClick: (M) => A(O)(f.autoId)
                }, [
                  Ge(g, { icon: ["fass", "trash"] })
                ], 8, Md)
              ]),
              Ge(A(i), {
                item: f,
                "num-columns": zt.value
              }, null, 8, ["item", "num-columns"]),
              Xe.banding === k && Ie.options.length > 0 && ki.value ? (E(), Ee(Ui, {
                key: 1,
                shape: f,
                "shape-index": k,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": Ie.keys,
                "all-options": Ie.options,
                pricing: Ie.pricing,
                labels: Ie.labels,
                locations: Bt.locations,
                "location-groups": Bt.groups,
                "user-friendly-field-map": A(Mi),
                "part-columns": zt.value,
                "format-price": t.formatPrice,
                "find-extras-price": re.findExtrasPrice,
                "get-price": xi,
                "orientation-model": I.orientationModel,
                "stock-grain": A(b)(f),
                "get-available-pricing-options": In,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : de("", !0),
              Xe.finish === k && Ve.options.length > 0 && ki.value ? (E(), Ee(Ui, {
                key: 2,
                shape: f,
                "shape-index": k,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ve.keys,
                "all-options": Ve.options,
                pricing: Ve.pricing,
                labels: Ve.labels,
                locations: pt.locations,
                "location-groups": pt.groups,
                "user-friendly-field-map": A(Mi),
                "part-columns": zt.value,
                "format-price": t.formatPrice,
                "find-extras-price": re.findExtrasPrice,
                "get-price": xi,
                "orientation-model": I.orientationModel,
                "stock-grain": A(b)(f),
                "get-available-pricing-options": In,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : de("", !0),
              Xe.planing === k && Fe.options.length > 0 && ki.value ? (E(), Ee(Ui, {
                key: 3,
                shape: f,
                "shape-index": k,
                "extra-type": "planing",
                "extra-label": "planing",
                "extra-keys": Fe.keys,
                "all-options": Fe.options,
                pricing: Fe.pricing,
                labels: Fe.labels,
                locations: ht.locations,
                "location-groups": ht.groups,
                "user-friendly-field-map": A(Mi),
                "part-columns": zt.value,
                "format-price": t.formatPrice,
                "find-extras-price": re.findExtrasPrice,
                "get-price": xi,
                "orientation-model": I.orientationModel,
                "stock-grain": A(b)(f),
                "get-available-pricing-options": In,
                "allow-custom-names": !1
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "locations", "location-groups", "user-friendly-field-map", "part-columns", "format-price", "find-extras-price", "orientation-model", "stock-grain"])) : de("", !0),
              Xe.info === k ? (E(), Z("div", {
                key: 4,
                id: "shape-info",
                style: St({ "grid-column-end": "span " + zt.value })
              }, [
                le("div", null, Ae(f?.banding), 1),
                le("div", null, Ae(Un.value?.banding?.options || "No options"), 1)
              ], 4)) : de("", !0),
              xt.value === k ? (E(), Ee(A(l), {
                key: 5,
                prefix: (k + 1).toString(),
                "unique-id": f.autoId,
                "shape-id": f.autoId,
                style: St({ "grid-column-end": "span " + zt.value }),
                images: nt.value,
                onUpdate: eo,
                onRemove: to
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : de("", !0)
            ]))), 128))
          ], 4),
          le("div", Nd, [
            t.readonly ? de("", !0) : (E(), Z("button", {
              key: 0,
              class: "add c-btn",
              type: "button",
              "aria-label": `${A(be)("actions.add")} ${A(ji)(A(be)("woodwork.part"))}`,
              onClick: d[3] || (d[3] = (f) => Ci())
            }, [
              Ge(g, { icon: ["fass", "plus-large"] }),
              ii(" " + Ae(`${A(be)("actions.add")} ${A(ji)(A(be)("woodwork.part"))}`), 1)
            ], 8, Bd)),
            le("button", {
              id: "calculate-button",
              class: "c-btn calculate",
              type: "button",
              "aria-label": A(be)("actions.calculate"),
              disabled: !A(r).inputStock.value?.length || De.value,
              onClick: d[4] || (d[4] = (f) => so())
            }, [
              Ge(g, { icon: ["fass", "calculator"] }),
              ii(Ae(A(be)("actions.calculate")), 1)
            ], 8, Vd),
            t.readonly ? de("", !0) : (E(), Z("button", {
              key: 1,
              class: "c-btn c-btn--delete",
              type: "button",
              "aria-label": A(be)("actions.clear"),
              onClick: d[5] || (d[5] = (f) => Oi())
            }, [
              Ge(g, { icon: ["fass", "trash"] })
            ], 8, Dd)),
            le("div", Rd, Ae(A(p)) + Ae(I?.maxParts ? "/" + I.maxParts : ""), 1)
          ]),
          sn.value && Vt.value > 1 ? (E(), Z("div", jd, [
            le("div", qd, [
              le("button", {
                type: "button",
                class: "c-btn",
                disabled: Re.value === 1,
                onClick: wi
              }, [
                Ge(g, { icon: ["fass", "chevrons-left"] })
              ], 8, Gd),
              le("button", {
                type: "button",
                class: "c-btn",
                disabled: Re.value === 1,
                onClick: Si
              }, [
                Ge(g, { icon: ["fass", "chevron-left"] })
              ], 8, Ud),
              le("span", Wd, Ae(Re.value) + " / " + Ae(Vt.value), 1),
              le("button", {
                type: "button",
                class: "c-btn",
                disabled: Re.value >= Vt.value,
                onClick: u
              }, [
                Ge(g, { icon: ["fass", "chevron-right"] })
              ], 8, zd),
              le("button", {
                type: "button",
                class: "c-btn",
                disabled: Re.value >= Vt.value,
                onClick: v
              }, [
                Ge(g, { icon: ["fass", "chevrons-right"] })
              ], 8, Hd)
            ])
          ])) : de("", !0),
          tn.value && !t.readonly ? (E(), Ee(A(a), {
            key: 3,
            ref: "import",
            "number-format": I.numberFormat,
            "custom-fields": pn.value,
            "banding-options": Ie.options,
            "banding-labels": Ie.labels,
            "finish-options": Ve.options,
            "finish-labels": Ve.labels,
            onImport: oo
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : de("", !0),
          ge.value ? (E(), Z("div", _d, [
            Oe.value ? (E(), Z("div", Kd, Ae(Oe.value), 1)) : de("", !0),
            le("pre", Zd, Ae(Nt.value), 1)
          ])) : de("", !0),
          (I.enable.diagram ? De.value && !A(ae).complete : De.value || A(ae).complete) ? (E(), Z("div", Jd, [
            Ge(Zs, {
              size: 50,
              number: A(ae).shapeCount,
              complete: A(ae).complete,
              "show-number": I.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : de("", !0),
          na(le("div", Yd, [
            A(Q)?.saw?.stockType !== "roll" ? (E(), Z("div", Xd, Ae(A(Q)?.stack?.number ? A(Q).stack.number : 1), 1)) : de("", !0),
            Ge(cc, {
              "element-id": "diagram",
              "number-format": I.numberFormat,
              "decimal-places": I.decimalPlaces,
              colors: I.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [ia, I.enable.diagram && A(ae).complete]
          ]),
          I.enable.diagram && A(j).length > 1 && A(ae).complete ? (E(), Ee(xr, {
            key: 6,
            ref: "stockNavigation",
            "active-stock-auto-id": A(_),
            "stock-list": A(j),
            onShowStock: A(ee)
          }, null, 8, ["active-stock-auto-id", "stock-list", "onShowStock"])) : de("", !0)
        ], 6)) : de("", !0),
        A(Ue) === "development" && _i ? (E(), Z("div", Qd, [
          Ge(A(o), {
            data: [A(r)?.inputShapes?.value?.[0]],
            paths: ["inputShapes"]
          }, null, 8, ["data"]),
          d[8] || (d[8] = le("div", null, "Result data", -1)),
          Ge(A(o), {
            data: [st.value],
            paths: ["checkoutResult"]
          }, null, 8, ["data"])
        ])) : de("", !0)
      ]);
    };
  }
}), gf = /* @__PURE__ */ hi(ef, [["__scopeId", "data-v-7c062fb8"]]);
export {
  gf as E,
  os as F,
  Nn as _,
  Ta as a,
  Ui as b,
  hf as c,
  rd as h,
  pf as m,
  wa as u
};

import { g as p } from "./vendor-CN6j6kBQ.js";
function w(a, e) {
  for (var t = 0; t < e.length; t++) {
    const r = e[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const n in r)
        if (n !== "default" && !(n in a)) {
          const i = Object.getOwnPropertyDescriptor(r, n);
          i && Object.defineProperty(a, n, i.get ? i : { enumerable: !0, get: () => r[n] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function Ba(a, e) {
  (e == null || e > a.length) && (e = a.length);
  for (var t = 0, r = Array(e); t < e; t++) r[t] = a[t];
  return r;
}
function Xr(a) {
  if (Array.isArray(a)) return a;
}
function Br(a) {
  if (Array.isArray(a)) return Ba(a);
}
function Gr(a, e) {
  if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Vr(a, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(a, pt(r.key), r);
  }
}
function Jr(a, e, t) {
  return e && Vr(a.prototype, e), Object.defineProperty(a, "prototype", {
    writable: !1
  }), a;
}
function ta(a, e) {
  var t = typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (!t) {
    if (Array.isArray(a) || (t = se(a)) || e) {
      t && (a = t);
      var r = 0, n = function() {
      };
      return {
        s: n,
        n: function() {
          return r >= a.length ? {
            done: !0
          } : {
            done: !1,
            value: a[r++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: n
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return {
    s: function() {
      t = t.call(a);
    },
    n: function() {
      var l = t.next();
      return o = l.done, l;
    },
    e: function(l) {
      s = !0, i = l;
    },
    f: function() {
      try {
        o || t.return == null || t.return();
      } finally {
        if (s) throw i;
      }
    }
  };
}
function v(a, e, t) {
  return (e = pt(e)) in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function Kr(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a);
}
function Qr(a, e) {
  var t = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (t != null) {
    var r, n, i, o, s = [], l = !0, u = !1;
    try {
      if (i = (t = t.call(a)).next, e === 0) {
        if (Object(t) !== t) return;
        l = !1;
      } else for (; !(l = (r = i.call(t)).done) && (s.push(r.value), s.length !== e); l = !0) ;
    } catch (m) {
      u = !0, n = m;
    } finally {
      try {
        if (!l && t.return != null && (o = t.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw n;
      }
    }
    return s;
  }
}
function Zr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $r() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(a, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function f(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pe(Object(t), !0).forEach(function(r) {
      v(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : pe(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
function la(a, e) {
  return Xr(a) || Qr(a, e) || se(a, e) || Zr();
}
function N(a) {
  return Br(a) || Kr(a) || se(a) || $r();
}
function an(a, e) {
  if (typeof a != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(a);
}
function pt(a) {
  var e = an(a, "string");
  return typeof e == "symbol" ? e : e + "";
}
function ia(a) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ia(a);
}
function se(a, e) {
  if (a) {
    if (typeof a == "string") return Ba(a, e);
    var t = {}.toString.call(a).slice(8, -1);
    return t === "Object" && a.constructor && (t = a.constructor.name), t === "Map" || t === "Set" ? Array.from(a) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ba(a, e) : void 0;
  }
}
var we = function() {
}, le = {}, wt = {}, Pt = null, At = {
  mark: we,
  measure: we
};
try {
  typeof window < "u" && (le = window), typeof document < "u" && (wt = document), typeof MutationObserver < "u" && (Pt = MutationObserver), typeof performance < "u" && (At = performance);
} catch {
}
var en = le.navigator || {}, Pe = en.userAgent, Ae = Pe === void 0 ? "" : Pe, L = le, b = wt, Se = Pt, aa = At;
L.document;
var D = !!b.documentElement && !!b.head && typeof b.addEventListener == "function" && typeof b.createElement == "function", St = ~Ae.indexOf("MSIE") || ~Ae.indexOf("Trident/"), ha, tn = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, rn = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, _t = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  },
  utility: {
    "fa-semibold": "semibold",
    fausb: "semibold"
  },
  "utility-duo": {
    "fa-semibold": "semibold",
    faudsb: "semibold"
  },
  "utility-fill": {
    "fa-semibold": "semibold",
    faufsb: "semibold"
  }
}, nn = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ft = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], S = "classic", Q = "duotone", kt = "sharp", Et = "sharp-duotone", Ct = "chisel", Nt = "etch", It = "jelly", Mt = "jelly-duo", Ot = "jelly-fill", jt = "notdog", Dt = "notdog-duo", Lt = "slab", zt = "slab-press", Tt = "thumbprint", xt = "utility", Rt = "utility-duo", Ut = "utility-fill", qt = "whiteboard", on = "Classic", sn = "Duotone", ln = "Sharp", fn = "Sharp Duotone", un = "Chisel", cn = "Etch", dn = "Jelly", mn = "Jelly Duo", vn = "Jelly Fill", hn = "Notdog", gn = "Notdog Duo", bn = "Slab", yn = "Slab Press", pn = "Thumbprint", wn = "Utility", Pn = "Utility Duo", An = "Utility Fill", Sn = "Whiteboard", Wt = [S, Q, kt, Et, Ct, Nt, It, Mt, Ot, jt, Dt, Lt, zt, Tt, xt, Rt, Ut, qt];
ha = {}, v(v(v(v(v(v(v(v(v(v(ha, S, on), Q, sn), kt, ln), Et, fn), Ct, un), Nt, cn), It, dn), Mt, mn), Ot, vn), jt, hn), v(v(v(v(v(v(v(v(ha, Dt, gn), Lt, bn), zt, yn), Tt, pn), xt, wn), Rt, Pn), Ut, An), qt, Sn);
var _n = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  },
  utility: {
    600: "fausb"
  },
  "utility-duo": {
    600: "faudsb"
  },
  "utility-fill": {
    600: "faufsb"
  }
}, Fn = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  },
  "Font Awesome 7 Utility": {
    600: "fausb",
    normal: "fausb"
  },
  "Font Awesome 7 Utility Duo": {
    600: "faudsb",
    normal: "faudsb"
  },
  "Font Awesome 7 Utility Fill": {
    600: "faufsb",
    normal: "faufsb"
  }
}, kn = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["utility", {
  defaultShortPrefixId: "fausb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-duo", {
  defaultShortPrefixId: "faudsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-fill", {
  defaultShortPrefixId: "faufsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), En = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  utility: {
    semibold: "fausb"
  },
  "utility-duo": {
    semibold: "faudsb"
  },
  "utility-fill": {
    semibold: "faufsb"
  },
  whiteboard: {
    semibold: "fawsb"
  }
}, Ht = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], _e = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Cn = ["kit"], Nn = "kit", In = "kit-duotone", Mn = "Kit", On = "Kit Duotone";
v(v({}, Nn, Mn), In, On);
var jn = {
  kit: {
    "fa-kit": "fak"
  }
}, Dn = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Ln = {
  kit: {
    fak: "fa-kit"
  }
}, Fe = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, ga, ea = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, zn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], Tn = "classic", xn = "duotone", Rn = "sharp", Un = "sharp-duotone", qn = "chisel", Wn = "etch", Hn = "jelly", Yn = "jelly-duo", Xn = "jelly-fill", Bn = "notdog", Gn = "notdog-duo", Vn = "slab", Jn = "slab-press", Kn = "thumbprint", Qn = "utility", Zn = "utility-duo", $n = "utility-fill", ai = "whiteboard", ei = "Classic", ti = "Duotone", ri = "Sharp", ni = "Sharp Duotone", ii = "Chisel", oi = "Etch", si = "Jelly", li = "Jelly Duo", fi = "Jelly Fill", ui = "Notdog", ci = "Notdog Duo", di = "Slab", mi = "Slab Press", vi = "Thumbprint", hi = "Utility", gi = "Utility Duo", bi = "Utility Fill", yi = "Whiteboard";
ga = {}, v(v(v(v(v(v(v(v(v(v(ga, Tn, ei), xn, ti), Rn, ri), Un, ni), qn, ii), Wn, oi), Hn, si), Yn, li), Xn, fi), Bn, ui), v(v(v(v(v(v(v(v(ga, Gn, ci), Vn, di), Jn, mi), Kn, vi), Qn, hi), Zn, gi), $n, bi), ai, yi);
var pi = "kit", wi = "kit-duotone", Pi = "Kit", Ai = "Kit Duotone";
v(v({}, pi, Pi), wi, Ai);
var Si = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  },
  utility: {
    "fa-semibold": "fausb"
  },
  "utility-duo": {
    "fa-semibold": "faudsb"
  },
  "utility-fill": {
    "fa-semibold": "faufsb"
  }
}, _i = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"],
  utility: ["fausb"],
  "utility-duo": ["faudsb"],
  "utility-fill": ["faufsb"]
}, Ga = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  },
  utility: {
    fausb: "fa-semibold"
  },
  "utility-duo": {
    faudsb: "fa-semibold"
  },
  "utility-fill": {
    faufsb: "fa-semibold"
  }
}, Fi = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], Yt = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(zn, Fi), ki = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], Xt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Ei = Xt.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ci = ["aw", "fw", "pull-left", "pull-right"], Ni = [].concat(N(Object.keys(_i)), ki, Ci, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", ea.GROUP, ea.SWAP_OPACITY, ea.PRIMARY, ea.SECONDARY]).concat(Xt.map(function(a) {
  return "".concat(a, "x");
})).concat(Ei.map(function(a) {
  return "w-".concat(a);
})), Ii = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, O = "___FONT_AWESOME___", Va = 16, Bt = "fa", Gt = "svg-inline--fa", R = "data-fa-i2svg", Ja = "data-fa-pseudo-element", Mi = "data-fa-pseudo-element-pending", fe = "data-prefix", ue = "data-icon", ke = "fontawesome-i2svg", Oi = "async", ji = ["HTML", "HEAD", "STYLE", "SCRIPT"], Vt = ["::before", "::after", ":before", ":after"], Jt = (function() {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Z(a) {
  return new Proxy(a, {
    get: function(t, r) {
      return r in t ? t[r] : t[S];
    }
  });
}
var Kt = f({}, _t);
Kt[S] = f(f(f(f({}, {
  "fa-duotone": "duotone"
}), _t[S]), _e.kit), _e["kit-duotone"]);
var Di = Z(Kt), Ka = f({}, En);
Ka[S] = f(f(f(f({}, {
  duotone: "fad"
}), Ka[S]), Fe.kit), Fe["kit-duotone"]);
var Ee = Z(Ka), Qa = f({}, Ga);
Qa[S] = f(f({}, Qa[S]), Ln.kit);
var ce = Z(Qa), Za = f({}, Si);
Za[S] = f(f({}, Za[S]), jn.kit);
Z(Za);
var Li = tn, Qt = "fa-layers-text", zi = rn, Ti = f({}, _n);
Z(Ti);
var xi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ba = nn, Ri = [].concat(N(Cn), N(Ni)), V = L.FontAwesomeConfig || {};
function Ui(a) {
  var e = b.querySelector("script[" + a + "]");
  if (e)
    return e.getAttribute(a);
}
function qi(a) {
  return a === "" ? !0 : a === "false" ? !1 : a === "true" ? !0 : a;
}
if (b && typeof b.querySelector == "function") {
  var Wi = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Wi.forEach(function(a) {
    var e = la(a, 2), t = e[0], r = e[1], n = qi(Ui(t));
    n != null && (V[r] = n);
  });
}
var Zt = {
  styleDefault: "solid",
  familyDefault: S,
  cssPrefix: Bt,
  replacementClass: Gt,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
V.familyPrefix && (V.cssPrefix = V.familyPrefix);
var X = f(f({}, Zt), V);
X.autoReplaceSvg || (X.observeMutations = !1);
var d = {};
Object.keys(Zt).forEach(function(a) {
  Object.defineProperty(d, a, {
    enumerable: !0,
    set: function(t) {
      X[a] = t, J.forEach(function(r) {
        return r(d);
      });
    },
    get: function() {
      return X[a];
    }
  });
});
Object.defineProperty(d, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    X.cssPrefix = e, J.forEach(function(t) {
      return t(d);
    });
  },
  get: function() {
    return X.cssPrefix;
  }
});
L.FontAwesomeConfig = d;
var J = [];
function Hi(a) {
  return J.push(a), function() {
    J.splice(J.indexOf(a), 1);
  };
}
var W = Va, I = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Yi(a) {
  if (!(!a || !D)) {
    var e = b.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = a;
    for (var t = b.head.childNodes, r = null, n = t.length - 1; n > -1; n--) {
      var i = t[n], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return b.head.insertBefore(e, r), a;
  }
}
var Xi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ce() {
  for (var a = 12, e = ""; a-- > 0; )
    e += Xi[Math.random() * 62 | 0];
  return e;
}
function B(a) {
  for (var e = [], t = (a || []).length >>> 0; t--; )
    e[t] = a[t];
  return e;
}
function de(a) {
  return a.classList ? B(a.classList) : (a.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function $t(a) {
  return "".concat(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Bi(a) {
  return Object.keys(a || {}).reduce(function(e, t) {
    return e + "".concat(t, '="').concat($t(a[t]), '" ');
  }, "").trim();
}
function fa(a) {
  return Object.keys(a || {}).reduce(function(e, t) {
    return e + "".concat(t, ": ").concat(a[t].trim(), ";");
  }, "");
}
function me(a) {
  return a.size !== I.size || a.x !== I.x || a.y !== I.y || a.rotate !== I.rotate || a.flipX || a.flipY;
}
function Gi(a) {
  var e = a.transform, t = a.containerWidth, r = a.iconWidth, n = {
    transform: "translate(".concat(t / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: n,
    inner: l,
    path: u
  };
}
function Vi(a) {
  var e = a.transform, t = a.width, r = t === void 0 ? Va : t, n = a.height, i = n === void 0 ? Va : n, o = "";
  return St ? o += "translate(".concat(e.x / W - r / 2, "em, ").concat(e.y / W - i / 2, "em) ") : o += "translate(calc(-50% + ".concat(e.x / W, "em), calc(-50% + ").concat(e.y / W, "em)) "), o += "scale(".concat(e.size / W * (e.flipX ? -1 : 1), ", ").concat(e.size / W * (e.flipY ? -1 : 1), ") "), o += "rotate(".concat(e.rotate, "deg) "), o;
}
var Ji = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
function ar() {
  var a = Bt, e = Gt, t = d.cssPrefix, r = d.replacementClass, n = Ji;
  if (t !== a || r !== e) {
    var i = new RegExp("\\.".concat(a, "\\-"), "g"), o = new RegExp("\\--".concat(a, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    n = n.replace(i, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(s, ".".concat(r));
  }
  return n;
}
var Ne = !1;
function ya() {
  d.autoAddCss && !Ne && (Yi(ar()), Ne = !0);
}
var Ki = {
  mixout: function() {
    return {
      dom: {
        css: ar,
        insertCss: ya
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        ya();
      },
      beforeI2svg: function() {
        ya();
      }
    };
  }
}, j = L || {};
j[O] || (j[O] = {});
j[O].styles || (j[O].styles = {});
j[O].hooks || (j[O].hooks = {});
j[O].shims || (j[O].shims = []);
var C = j[O], er = [], tr = function() {
  b.removeEventListener("DOMContentLoaded", tr), oa = 1, er.map(function(e) {
    return e();
  });
}, oa = !1;
D && (oa = (b.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(b.readyState), oa || b.addEventListener("DOMContentLoaded", tr));
function Qi(a) {
  D && (oa ? setTimeout(a, 0) : er.push(a));
}
function $(a) {
  var e = a.tag, t = a.attributes, r = t === void 0 ? {} : t, n = a.children, i = n === void 0 ? [] : n;
  return typeof a == "string" ? $t(a) : "<".concat(e, " ").concat(Bi(r), ">").concat(i.map($).join(""), "</").concat(e, ">");
}
function Ie(a, e, t) {
  if (a && a[e] && a[e][t])
    return {
      prefix: e,
      iconName: t,
      icon: a[e][t]
    };
}
var pa = function(e, t, r, n) {
  var i = Object.keys(e), o = i.length, s = t, l, u, m;
  for (r === void 0 ? (l = 1, m = e[i[0]]) : (l = 0, m = r); l < o; l++)
    u = i[l], m = s(m, e[u], u, e);
  return m;
};
function rr(a) {
  return N(a).length !== 1 ? null : a.codePointAt(0).toString(16);
}
function Me(a) {
  return Object.keys(a).reduce(function(e, t) {
    var r = a[t], n = !!r.icon;
    return n ? e[r.iconName] = r.icon : e[t] = r, e;
  }, {});
}
function $a(a, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.skipHooks, n = r === void 0 ? !1 : r, i = Me(e);
  typeof C.hooks.addPack == "function" && !n ? C.hooks.addPack(a, Me(e)) : C.styles[a] = f(f({}, C.styles[a] || {}), i), a === "fas" && $a("fa", e);
}
var K = C.styles, Zi = C.shims, nr = Object.keys(ce), $i = nr.reduce(function(a, e) {
  return a[e] = Object.keys(ce[e]), a;
}, {}), ve = null, ir = {}, or = {}, sr = {}, lr = {}, fr = {};
function ao(a) {
  return ~Ri.indexOf(a);
}
function eo(a, e) {
  var t = e.split("-"), r = t[0], n = t.slice(1).join("-");
  return r === a && n !== "" && !ao(n) ? n : null;
}
var ur = function() {
  var e = function(i) {
    return pa(K, function(o, s, l) {
      return o[l] = pa(s, i, {}), o;
    }, {});
  };
  ir = e(function(n, i, o) {
    if (i[3] && (n[i[3]] = o), i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        n[l.toString(16)] = o;
      });
    }
    return n;
  }), or = e(function(n, i, o) {
    if (n[o] = o, i[2]) {
      var s = i[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        n[l] = o;
      });
    }
    return n;
  }), fr = e(function(n, i, o) {
    var s = i[2];
    return n[o] = o, s.forEach(function(l) {
      n[l] = o;
    }), n;
  });
  var t = "far" in K || d.autoFetchSvg, r = pa(Zi, function(n, i) {
    var o = i[0], s = i[1], l = i[2];
    return s === "far" && !t && (s = "fas"), typeof o == "string" && (n.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (n.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  sr = r.names, lr = r.unicodes, ve = ua(d.styleDefault, {
    family: d.familyDefault
  });
};
Hi(function(a) {
  ve = ua(a.styleDefault, {
    family: d.familyDefault
  });
});
ur();
function he(a, e) {
  return (ir[a] || {})[e];
}
function to(a, e) {
  return (or[a] || {})[e];
}
function x(a, e) {
  return (fr[a] || {})[e];
}
function cr(a) {
  return sr[a] || {
    prefix: null,
    iconName: null
  };
}
function ro(a) {
  var e = lr[a], t = he("fas", a);
  return e || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function z() {
  return ve;
}
var dr = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function no(a) {
  var e = S, t = nr.reduce(function(r, n) {
    return r[n] = "".concat(d.cssPrefix, "-").concat(n), r;
  }, {});
  return Wt.forEach(function(r) {
    (a.includes(t[r]) || a.some(function(n) {
      return $i[r].includes(n);
    })) && (e = r);
  }), e;
}
function ua(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.family, r = t === void 0 ? S : t, n = Di[r][a];
  if (r === Q && !a)
    return "fad";
  var i = Ee[r][a] || Ee[r][n], o = a in C.styles ? a : null, s = i || o || null;
  return s;
}
function io(a) {
  var e = [], t = null;
  return a.forEach(function(r) {
    var n = eo(d.cssPrefix, r);
    n ? t = n : r && e.push(r);
  }), {
    iconName: t,
    rest: e
  };
}
function Oe(a) {
  return a.sort().filter(function(e, t, r) {
    return r.indexOf(e) === t;
  });
}
var je = Yt.concat(Ht);
function ca(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.skipLookups, r = t === void 0 ? !1 : t, n = null, i = Oe(a.filter(function(h) {
    return je.includes(h);
  })), o = Oe(a.filter(function(h) {
    return !je.includes(h);
  })), s = i.filter(function(h) {
    return n = h, !Ft.includes(h);
  }), l = la(s, 1), u = l[0], m = u === void 0 ? null : u, c = no(i), g = f(f({}, io(o)), {}, {
    prefix: ua(m, {
      family: c
    })
  });
  return f(f(f({}, g), fo({
    values: a,
    family: c,
    styles: K,
    config: d,
    canonical: g,
    givenPrefix: n
  })), oo(r, n, g));
}
function oo(a, e, t) {
  var r = t.prefix, n = t.iconName;
  if (a || !r || !n)
    return {
      prefix: r,
      iconName: n
    };
  var i = e === "fa" ? cr(n) : {}, o = x(r, n);
  return n = i.iconName || o || n, r = i.prefix || r, r === "far" && !K.far && K.fas && !d.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: n
  };
}
var so = Wt.filter(function(a) {
  return a !== S || a !== Q;
}), lo = Object.keys(Ga).filter(function(a) {
  return a !== S;
}).map(function(a) {
  return Object.keys(Ga[a]);
}).flat();
function fo(a) {
  var e = a.values, t = a.family, r = a.canonical, n = a.givenPrefix, i = n === void 0 ? "" : n, o = a.styles, s = o === void 0 ? {} : o, l = a.config, u = l === void 0 ? {} : l, m = t === Q, c = e.includes("fa-duotone") || e.includes("fad"), g = u.familyDefault === "duotone", h = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!m && (c || g || h) && (r.prefix = "fad"), (e.includes("fa-brands") || e.includes("fab")) && (r.prefix = "fab"), !r.prefix && so.includes(t)) {
    var P = Object.keys(s).find(function(_) {
      return lo.includes(_);
    });
    if (P || u.autoFetchSvg) {
      var y = kn.get(t).defaultShortPrefixId;
      r.prefix = y, r.iconName = x(r.prefix, r.iconName) || r.iconName;
    }
  }
  return (r.prefix === "fa" || i === "fa") && (r.prefix = z() || "fas"), r;
}
var uo = /* @__PURE__ */ (function() {
  function a() {
    Gr(this, a), this.definitions = {};
  }
  return Jr(a, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      var o = n.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        t.definitions[s] = f(f({}, t.definitions[s] || {}), o[s]), $a(s, o[s]);
        var l = ce[S][s];
        l && $a(l, o[s]), ur();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(t, r) {
      var n = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(n).map(function(i) {
        var o = n[i], s = o.prefix, l = o.iconName, u = o.icon, m = u[2];
        t[s] || (t[s] = {}), m.length > 0 && m.forEach(function(c) {
          typeof c == "string" && (t[s][c] = u);
        }), t[s][l] = u;
      }), t;
    }
  }]);
})(), De = [], H = {}, Y = {}, co = Object.keys(Y);
function mo(a, e) {
  var t = e.mixoutsTo;
  return De = a, H = {}, Object.keys(Y).forEach(function(r) {
    co.indexOf(r) === -1 && delete Y[r];
  }), De.forEach(function(r) {
    var n = r.mixout ? r.mixout() : {};
    if (Object.keys(n).forEach(function(o) {
      typeof n[o] == "function" && (t[o] = n[o]), ia(n[o]) === "object" && Object.keys(n[o]).forEach(function(s) {
        t[o] || (t[o] = {}), t[o][s] = n[o][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        H[o] || (H[o] = []), H[o].push(i[o]);
      });
    }
    r.provides && r.provides(Y);
  }), t;
}
function ae(a, e) {
  for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), n = 2; n < t; n++)
    r[n - 2] = arguments[n];
  var i = H[a] || [];
  return i.forEach(function(o) {
    e = o.apply(null, [e].concat(r));
  }), e;
}
function U(a) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    t[r - 1] = arguments[r];
  var n = H[a] || [];
  n.forEach(function(i) {
    i.apply(null, t);
  });
}
function T() {
  var a = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Y[a] ? Y[a].apply(null, e) : void 0;
}
function ee(a) {
  a.prefix === "fa" && (a.prefix = "fas");
  var e = a.iconName, t = a.prefix || z();
  if (e)
    return e = x(t, e) || e, Ie(mr.definitions, t, e) || Ie(C.styles, t, e);
}
var mr = new uo(), vo = function() {
  d.autoReplaceSvg = !1, d.observeMutations = !1, U("noAuto");
}, ho = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return D ? (U("beforeI2svg", e), T("pseudoElements2svg", e), T("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot;
    d.autoReplaceSvg === !1 && (d.autoReplaceSvg = !0), d.observeMutations = !0, Qi(function() {
      bo({
        autoReplaceSvgRoot: t
      }), U("watch", e);
    });
  }
}, go = {
  icon: function(e) {
    if (e === null)
      return null;
    if (ia(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: x(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = ua(e[0]);
      return {
        prefix: r,
        iconName: x(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(d.cssPrefix, "-")) > -1 || e.match(Li))) {
      var n = ca(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: n.prefix || z(),
        iconName: x(n.prefix, n.iconName) || n.iconName
      };
    }
    if (typeof e == "string") {
      var i = z();
      return {
        prefix: i,
        iconName: x(i, e) || e
      };
    }
  }
}, k = {
  noAuto: vo,
  config: d,
  dom: ho,
  parse: go,
  library: mr,
  findIconDefinition: ee,
  toHtml: $
}, bo = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.autoReplaceSvgRoot, r = t === void 0 ? b : t;
  (Object.keys(C.styles).length > 0 || d.autoFetchSvg) && D && d.autoReplaceSvg && k.dom.i2svg({
    node: r
  });
};
function da(a, e) {
  return Object.defineProperty(a, "abstract", {
    get: e
  }), Object.defineProperty(a, "html", {
    get: function() {
      return a.abstract.map(function(r) {
        return $(r);
      });
    }
  }), Object.defineProperty(a, "node", {
    get: function() {
      if (D) {
        var r = b.createElement("div");
        return r.innerHTML = a.html, r.children;
      }
    }
  }), a;
}
function yo(a) {
  var e = a.children, t = a.main, r = a.mask, n = a.attributes, i = a.styles, o = a.transform;
  if (me(o) && t.found && !r.found) {
    var s = t.width, l = t.height, u = {
      x: s / l / 2,
      y: 0.5
    };
    n.style = fa(f(f({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: n,
    children: e
  }];
}
function po(a) {
  var e = a.prefix, t = a.iconName, r = a.children, n = a.attributes, i = a.symbol, o = i === !0 ? "".concat(e, "-").concat(d.cssPrefix, "-").concat(t) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: f(f({}, n), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function wo(a) {
  var e = ["aria-label", "aria-labelledby", "title", "role"];
  return e.some(function(t) {
    return t in a;
  });
}
function ge(a) {
  var e = a.icons, t = e.main, r = e.mask, n = a.prefix, i = a.iconName, o = a.transform, s = a.symbol, l = a.maskId, u = a.extra, m = a.watchable, c = m === void 0 ? !1 : m, g = r.found ? r : t, h = g.width, P = g.height, y = [d.replacementClass, i ? "".concat(d.cssPrefix, "-").concat(i) : ""].filter(function(M) {
    return u.classes.indexOf(M) === -1;
  }).filter(function(M) {
    return M !== "" || !!M;
  }).concat(u.classes).join(" "), _ = {
    children: [],
    attributes: f(f({}, u.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: y,
      role: u.attributes.role || "img",
      viewBox: "0 0 ".concat(h, " ").concat(P)
    })
  };
  !wo(u.attributes) && !u.attributes["aria-hidden"] && (_.attributes["aria-hidden"] = "true"), c && (_.attributes[R] = "");
  var A = f(f({}, _), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: l,
    transform: o,
    symbol: s,
    styles: f({}, u.styles)
  }), F = r.found && t.found ? T("generateAbstractMask", A) || {
    children: [],
    attributes: {}
  } : T("generateAbstractIcon", A) || {
    children: [],
    attributes: {}
  }, E = F.children, q = F.attributes;
  return A.children = E, A.attributes = q, s ? po(A) : yo(A);
}
function Le(a) {
  var e = a.content, t = a.width, r = a.height, n = a.transform, i = a.extra, o = a.watchable, s = o === void 0 ? !1 : o, l = f(f({}, i.attributes), {}, {
    class: i.classes.join(" ")
  });
  s && (l[R] = "");
  var u = f({}, i.styles);
  me(n) && (u.transform = Vi({
    transform: n,
    width: t,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var m = fa(u);
  m.length > 0 && (l.style = m);
  var c = [];
  return c.push({
    tag: "span",
    attributes: l,
    children: [e]
  }), c;
}
function Po(a) {
  var e = a.content, t = a.extra, r = f(f({}, t.attributes), {}, {
    class: t.classes.join(" ")
  }), n = fa(t.styles);
  n.length > 0 && (r.style = n);
  var i = [];
  return i.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), i;
}
var wa = C.styles;
function te(a) {
  var e = a[0], t = a[1], r = a.slice(4), n = la(r, 1), i = n[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(d.cssPrefix, "-").concat(ba.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(d.cssPrefix, "-").concat(ba.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(d.cssPrefix, "-").concat(ba.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: e,
    height: t,
    icon: o
  };
}
var Ao = {
  found: !1,
  width: 512,
  height: 512
};
function So(a, e) {
  !Jt && !d.showMissingIcons && a && console.error('Icon with name "'.concat(a, '" and prefix "').concat(e, '" is missing.'));
}
function re(a, e) {
  var t = e;
  return e === "fa" && d.styleDefault !== null && (e = z()), new Promise(function(r, n) {
    if (t === "fa") {
      var i = cr(a) || {};
      a = i.iconName || a, e = i.prefix || e;
    }
    if (a && e && wa[e] && wa[e][a]) {
      var o = wa[e][a];
      return r(te(o));
    }
    So(a, e), r(f(f({}, Ao), {}, {
      icon: d.showMissingIcons && a ? T("missingIconAbstract") || {} : {}
    }));
  });
}
var ze = function() {
}, ne = d.measurePerformance && aa && aa.mark && aa.measure ? aa : {
  mark: ze,
  measure: ze
}, G = 'FA "7.1.0"', _o = function(e) {
  return ne.mark("".concat(G, " ").concat(e, " begins")), function() {
    return vr(e);
  };
}, vr = function(e) {
  ne.mark("".concat(G, " ").concat(e, " ends")), ne.measure("".concat(G, " ").concat(e), "".concat(G, " ").concat(e, " begins"), "".concat(G, " ").concat(e, " ends"));
}, be = {
  begin: _o,
  end: vr
}, ra = function() {
};
function Te(a) {
  var e = a.getAttribute ? a.getAttribute(R) : null;
  return typeof e == "string";
}
function Fo(a) {
  var e = a.getAttribute ? a.getAttribute(fe) : null, t = a.getAttribute ? a.getAttribute(ue) : null;
  return e && t;
}
function ko(a) {
  return a && a.classList && a.classList.contains && a.classList.contains(d.replacementClass);
}
function Eo() {
  if (d.autoReplaceSvg === !0)
    return na.replace;
  var a = na[d.autoReplaceSvg];
  return a || na.replace;
}
function Co(a) {
  return b.createElementNS("http://www.w3.org/2000/svg", a);
}
function No(a) {
  return b.createElement(a);
}
function hr(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.ceFn, r = t === void 0 ? a.tag === "svg" ? Co : No : t;
  if (typeof a == "string")
    return b.createTextNode(a);
  var n = r(a.tag);
  Object.keys(a.attributes || []).forEach(function(o) {
    n.setAttribute(o, a.attributes[o]);
  });
  var i = a.children || [];
  return i.forEach(function(o) {
    n.appendChild(hr(o, {
      ceFn: r
    }));
  }), n;
}
function Io(a) {
  var e = " ".concat(a.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var na = {
  replace: function(e) {
    var t = e[0];
    if (t.parentNode)
      if (e[1].forEach(function(n) {
        t.parentNode.insertBefore(hr(n), t);
      }), t.getAttribute(R) === null && d.keepOriginalSource) {
        var r = b.createComment(Io(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    var t = e[0], r = e[1];
    if (~de(t).indexOf(d.replacementClass))
      return na.replace(e);
    var n = new RegExp("".concat(d.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === d.replacementClass || l.match(n) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(s) {
      return $(s);
    }).join(`
`);
    t.setAttribute(R, ""), t.innerHTML = o;
  }
};
function xe(a) {
  a();
}
function gr(a, e) {
  var t = typeof e == "function" ? e : ra;
  if (a.length === 0)
    t();
  else {
    var r = xe;
    d.mutateApproach === Oi && (r = L.requestAnimationFrame || xe), r(function() {
      var n = Eo(), i = be.begin("mutate");
      a.map(n), i(), t();
    });
  }
}
var ye = !1;
function br() {
  ye = !0;
}
function ie() {
  ye = !1;
}
var sa = null;
function Re(a) {
  if (Se && d.observeMutations) {
    var e = a.treeCallback, t = e === void 0 ? ra : e, r = a.nodeCallback, n = r === void 0 ? ra : r, i = a.pseudoElementsCallback, o = i === void 0 ? ra : i, s = a.observeMutationsRoot, l = s === void 0 ? b : s;
    sa = new Se(function(u) {
      if (!ye) {
        var m = z();
        B(u).forEach(function(c) {
          if (c.type === "childList" && c.addedNodes.length > 0 && !Te(c.addedNodes[0]) && (d.searchPseudoElements && o(c.target), t(c.target)), c.type === "attributes" && c.target.parentNode && d.searchPseudoElements && o([c.target], !0), c.type === "attributes" && Te(c.target) && ~xi.indexOf(c.attributeName))
            if (c.attributeName === "class" && Fo(c.target)) {
              var g = ca(de(c.target)), h = g.prefix, P = g.iconName;
              c.target.setAttribute(fe, h || m), P && c.target.setAttribute(ue, P);
            } else ko(c.target) && n(c.target);
        });
      }
    }), D && sa.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Mo() {
  sa && sa.disconnect();
}
function Oo(a) {
  var e = a.getAttribute("style"), t = [];
  return e && (t = e.split(";").reduce(function(r, n) {
    var i = n.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), t;
}
function jo(a) {
  var e = a.getAttribute("data-prefix"), t = a.getAttribute("data-icon"), r = a.innerText !== void 0 ? a.innerText.trim() : "", n = ca(de(a));
  return n.prefix || (n.prefix = z()), e && t && (n.prefix = e, n.iconName = t), n.iconName && n.prefix || (n.prefix && r.length > 0 && (n.iconName = to(n.prefix, a.innerText) || he(n.prefix, rr(a.innerText))), !n.iconName && d.autoFetchSvg && a.firstChild && a.firstChild.nodeType === Node.TEXT_NODE && (n.iconName = a.firstChild.data)), n;
}
function Do(a) {
  var e = B(a.attributes).reduce(function(t, r) {
    return t.name !== "class" && t.name !== "style" && (t[r.name] = r.value), t;
  }, {});
  return e;
}
function Lo() {
  return {
    iconName: null,
    prefix: null,
    transform: I,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Ue(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, t = jo(a), r = t.iconName, n = t.prefix, i = t.rest, o = Do(a), s = ae("parseNodeAttributes", {}, a), l = e.styleParser ? Oo(a) : [];
  return f({
    iconName: r,
    prefix: n,
    transform: I,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: l,
      attributes: o
    }
  }, s);
}
var zo = C.styles;
function yr(a) {
  var e = d.autoReplaceSvg === "nest" ? Ue(a, {
    styleParser: !1
  }) : Ue(a);
  return ~e.extra.classes.indexOf(Qt) ? T("generateLayersText", a, e) : T("generateSvgReplacementMutation", a, e);
}
function To() {
  return [].concat(N(Ht), N(Yt));
}
function qe(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!D) return Promise.resolve();
  var t = b.documentElement.classList, r = function(c) {
    return t.add("".concat(ke, "-").concat(c));
  }, n = function(c) {
    return t.remove("".concat(ke, "-").concat(c));
  }, i = d.autoFetchSvg ? To() : Ft.concat(Object.keys(zo));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Qt, ":not([").concat(R, "])")].concat(i.map(function(m) {
    return ".".concat(m, ":not([").concat(R, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = B(a.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), n("complete");
  else
    return Promise.resolve();
  var l = be.begin("onTree"), u = s.reduce(function(m, c) {
    try {
      var g = yr(c);
      g && m.push(g);
    } catch (h) {
      Jt || h.name === "MissingIcon" && console.error(h);
    }
    return m;
  }, []);
  return new Promise(function(m, c) {
    Promise.all(u).then(function(g) {
      gr(g, function() {
        r("active"), r("complete"), n("pending"), typeof e == "function" && e(), l(), m();
      });
    }).catch(function(g) {
      l(), c(g);
    });
  });
}
function xo(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  yr(a).then(function(t) {
    t && gr([t], e);
  });
}
function Ro(a) {
  return function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (e || {}).icon ? e : ee(e || {}), n = t.mask;
    return n && (n = (n || {}).icon ? n : ee(n || {})), a(r, f(f({}, t), {}, {
      mask: n
    }));
  };
}
var Uo = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, n = r === void 0 ? I : r, i = t.symbol, o = i === void 0 ? !1 : i, s = t.mask, l = s === void 0 ? null : s, u = t.maskId, m = u === void 0 ? null : u, c = t.classes, g = c === void 0 ? [] : c, h = t.attributes, P = h === void 0 ? {} : h, y = t.styles, _ = y === void 0 ? {} : y;
  if (e) {
    var A = e.prefix, F = e.iconName, E = e.icon;
    return da(f({
      type: "icon"
    }, e), function() {
      return U("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
      }), ge({
        icons: {
          main: te(E),
          mask: l ? te(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: A,
        iconName: F,
        transform: f(f({}, I), n),
        symbol: o,
        maskId: m,
        extra: {
          attributes: P,
          styles: _,
          classes: g
        }
      });
    });
  }
}, qo = {
  mixout: function() {
    return {
      icon: Ro(Uo)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = qe, t.nodeCallback = xo, t;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(t) {
      var r = t.node, n = r === void 0 ? b : r, i = t.callback, o = i === void 0 ? function() {
      } : i;
      return qe(n, o);
    }, e.generateSvgReplacementMutation = function(t, r) {
      var n = r.iconName, i = r.prefix, o = r.transform, s = r.symbol, l = r.mask, u = r.maskId, m = r.extra;
      return new Promise(function(c, g) {
        Promise.all([re(n, i), l.iconName ? re(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(h) {
          var P = la(h, 2), y = P[0], _ = P[1];
          c([t, ge({
            icons: {
              main: y,
              mask: _
            },
            prefix: i,
            iconName: n,
            transform: o,
            symbol: s,
            maskId: u,
            extra: m,
            watchable: !0
          })]);
        }).catch(g);
      });
    }, e.generateAbstractIcon = function(t) {
      var r = t.children, n = t.attributes, i = t.main, o = t.transform, s = t.styles, l = fa(s);
      l.length > 0 && (n.style = l);
      var u;
      return me(o) && (u = T("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, Wo = {
  mixout: function() {
    return {
      layer: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.classes, i = n === void 0 ? [] : n;
        return da({
          type: "layer"
        }, function() {
          U("beforeDOMElementCreation", {
            assembler: t,
            params: r
          });
          var o = [];
          return t(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(d.cssPrefix, "-layers")].concat(N(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, Ho = {
  mixout: function() {
    return {
      counter: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        r.title;
        var n = r.classes, i = n === void 0 ? [] : n, o = r.attributes, s = o === void 0 ? {} : o, l = r.styles, u = l === void 0 ? {} : l;
        return da({
          type: "counter",
          content: t
        }, function() {
          return U("beforeDOMElementCreation", {
            content: t,
            params: r
          }), Po({
            content: t.toString(),
            extra: {
              attributes: s,
              styles: u,
              classes: ["".concat(d.cssPrefix, "-layers-counter")].concat(N(i))
            }
          });
        });
      }
    };
  }
}, Yo = {
  mixout: function() {
    return {
      text: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, i = n === void 0 ? I : n, o = r.classes, s = o === void 0 ? [] : o, l = r.attributes, u = l === void 0 ? {} : l, m = r.styles, c = m === void 0 ? {} : m;
        return da({
          type: "text",
          content: t
        }, function() {
          return U("beforeDOMElementCreation", {
            content: t,
            params: r
          }), Le({
            content: t,
            transform: f(f({}, I), i),
            extra: {
              attributes: u,
              styles: c,
              classes: ["".concat(d.cssPrefix, "-layers-text")].concat(N(s))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(t, r) {
      var n = r.transform, i = r.extra, o = null, s = null;
      if (St) {
        var l = parseInt(getComputedStyle(t).fontSize, 10), u = t.getBoundingClientRect();
        o = u.width / l, s = u.height / l;
      }
      return Promise.resolve([t, Le({
        content: t.innerHTML,
        width: o,
        height: s,
        transform: n,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, pr = new RegExp('"', "ug"), We = [1105920, 1112319], He = f(f(f(f({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Fn), Ii), Dn), oe = Object.keys(He).reduce(function(a, e) {
  return a[e.toLowerCase()] = He[e], a;
}, {}), Xo = Object.keys(oe).reduce(function(a, e) {
  var t = oe[e];
  return a[e] = t[900] || N(Object.entries(t))[0][1], a;
}, {});
function Bo(a) {
  var e = a.replace(pr, "");
  return rr(N(e)[0] || "");
}
function Go(a) {
  var e = a.getPropertyValue("font-feature-settings").includes("ss01"), t = a.getPropertyValue("content"), r = t.replace(pr, ""), n = r.codePointAt(0), i = n >= We[0] && n <= We[1], o = r.length === 2 ? r[0] === r[1] : !1;
  return i || o || e;
}
function Vo(a, e) {
  var t = a.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(e), n = isNaN(r) ? "normal" : r;
  return (oe[t] || {})[n] || Xo[t];
}
function Ye(a, e) {
  var t = "".concat(Mi).concat(e.replace(":", "-"));
  return new Promise(function(r, n) {
    if (a.getAttribute(t) !== null)
      return r();
    var i = B(a.children), o = i.filter(function(ma) {
      return ma.getAttribute(Ja) === e;
    })[0], s = L.getComputedStyle(a, e), l = s.getPropertyValue("font-family"), u = l.match(zi), m = s.getPropertyValue("font-weight"), c = s.getPropertyValue("content");
    if (o && !u)
      return a.removeChild(o), r();
    if (u && c !== "none" && c !== "") {
      var g = s.getPropertyValue("content"), h = Vo(l, m), P = Bo(g), y = u[0].startsWith("FontAwesome"), _ = Go(s), A = he(h, P), F = A;
      if (y) {
        var E = ro(P);
        E.iconName && E.prefix && (A = E.iconName, h = E.prefix);
      }
      if (A && !_ && (!o || o.getAttribute(fe) !== h || o.getAttribute(ue) !== F)) {
        a.setAttribute(t, F), o && a.removeChild(o);
        var q = Lo(), M = q.extra;
        M.attributes[Ja] = e, re(A, h).then(function(ma) {
          var Hr = ge(f(f({}, q), {}, {
            icons: {
              main: ma,
              mask: dr()
            },
            prefix: h,
            iconName: F,
            extra: M,
            watchable: !0
          })), va = b.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? a.insertBefore(va, a.firstChild) : a.appendChild(va), va.outerHTML = Hr.map(function(Yr) {
            return $(Yr);
          }).join(`
`), a.removeAttribute(t), r();
        }).catch(n);
      } else
        r();
    } else
      r();
  });
}
function Jo(a) {
  return Promise.all([Ye(a, "::before"), Ye(a, "::after")]);
}
function Ko(a) {
  return a.parentNode !== document.head && !~ji.indexOf(a.tagName.toUpperCase()) && !a.getAttribute(Ja) && (!a.parentNode || a.parentNode.tagName !== "svg");
}
var Qo = function(e) {
  return !!e && Vt.some(function(t) {
    return e.includes(t);
  });
}, Zo = function(e) {
  if (!e) return [];
  var t = /* @__PURE__ */ new Set(), r = e.split(/,(?![^()]*\))/).map(function(l) {
    return l.trim();
  });
  r = r.flatMap(function(l) {
    return l.includes("(") ? l : l.split(",").map(function(u) {
      return u.trim();
    });
  });
  var n = ta(r), i;
  try {
    for (n.s(); !(i = n.n()).done; ) {
      var o = i.value;
      if (Qo(o)) {
        var s = Vt.reduce(function(l, u) {
          return l.replace(u, "");
        }, o);
        s !== "" && s !== "*" && t.add(s);
      }
    }
  } catch (l) {
    n.e(l);
  } finally {
    n.f();
  }
  return t;
};
function Xe(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (D) {
    var t;
    if (e)
      t = a;
    else if (d.searchPseudoElementsFullScan)
      t = a.querySelectorAll("*");
    else {
      var r = /* @__PURE__ */ new Set(), n = ta(document.styleSheets), i;
      try {
        for (n.s(); !(i = n.n()).done; ) {
          var o = i.value;
          try {
            var s = ta(o.cssRules), l;
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var u = l.value, m = Zo(u.selectorText), c = ta(m), g;
                try {
                  for (c.s(); !(g = c.n()).done; ) {
                    var h = g.value;
                    r.add(h);
                  }
                } catch (y) {
                  c.e(y);
                } finally {
                  c.f();
                }
              }
            } catch (y) {
              s.e(y);
            } finally {
              s.f();
            }
          } catch (y) {
            d.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href, " (").concat(y.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (y) {
        n.e(y);
      } finally {
        n.f();
      }
      if (!r.size) return;
      var P = Array.from(r).join(", ");
      try {
        t = a.querySelectorAll(P);
      } catch {
      }
    }
    return new Promise(function(y, _) {
      var A = B(t).filter(Ko).map(Jo), F = be.begin("searchPseudoElements");
      br(), Promise.all(A).then(function() {
        F(), ie(), y();
      }).catch(function() {
        F(), ie(), _();
      });
    });
  }
}
var $o = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.pseudoElementsCallback = Xe, t;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(t) {
      var r = t.node, n = r === void 0 ? b : r;
      d.searchPseudoElements && Xe(n);
    };
  }
}, Be = !1, as = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          br(), Be = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Re(ae("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Mo();
      },
      watch: function(t) {
        var r = t.observeMutationsRoot;
        Be ? ie() : Re(ae("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Ge = function(e) {
  var t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(r, n) {
    var i = n.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, t);
}, es = {
  mixout: function() {
    return {
      parse: {
        transform: function(t) {
          return Ge(t);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-transform");
        return n && (t.transform = Ge(n)), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(t) {
      var r = t.main, n = t.transform, i = t.containerWidth, o = t.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, l = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), u = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), m = "rotate(".concat(n.rotate, " 0 0)"), c = {
        transform: "".concat(l, " ").concat(u, " ").concat(m)
      }, g = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: c,
        path: g
      };
      return {
        tag: "g",
        attributes: f({}, h.outer),
        children: [{
          tag: "g",
          attributes: f({}, h.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: f(f({}, r.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, Pa = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ve(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return a.attributes && (a.attributes.fill || e) && (a.attributes.fill = "black"), a;
}
function ts(a) {
  return a.tag === "g" ? a.children : [a];
}
var rs = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-mask"), i = n ? ca(n.split(" ").map(function(o) {
          return o.trim();
        })) : dr();
        return i.prefix || (i.prefix = z()), t.mask = i, t.maskId = r.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(t) {
      var r = t.children, n = t.attributes, i = t.main, o = t.mask, s = t.maskId, l = t.transform, u = i.width, m = i.icon, c = o.width, g = o.icon, h = Gi({
        transform: l,
        containerWidth: c,
        iconWidth: u
      }), P = {
        tag: "rect",
        attributes: f(f({}, Pa), {}, {
          fill: "white"
        })
      }, y = m.children ? {
        children: m.children.map(Ve)
      } : {}, _ = {
        tag: "g",
        attributes: f({}, h.inner),
        children: [Ve(f({
          tag: m.tag,
          attributes: f(f({}, m.attributes), h.path)
        }, y))]
      }, A = {
        tag: "g",
        attributes: f({}, h.outer),
        children: [_]
      }, F = "mask-".concat(s || Ce()), E = "clip-".concat(s || Ce()), q = {
        tag: "mask",
        attributes: f(f({}, Pa), {}, {
          id: F,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [P, A]
      }, M = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: ts(g)
        }, q]
      };
      return r.push(M, {
        tag: "rect",
        attributes: f({
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(F, ")")
        }, Pa)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, ns = {
  provides: function(e) {
    var t = !1;
    L.matchMedia && (t = L.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var r = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: f(f({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = f(f({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: f(f({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: f(f({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: f(f({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: f(f({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: f(f({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: f(f({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: f(f({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, is = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var n = r.getAttribute("data-fa-symbol"), i = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = i, t;
      }
    };
  }
}, os = [Ki, qo, Wo, Ho, Yo, $o, as, es, rs, ns, is];
mo(os, {
  mixoutsTo: k
});
k.noAuto;
k.config;
var ss = k.library;
k.dom;
var ls = k.parse;
k.findIconDefinition;
k.toHtml;
var fs = k.icon;
k.layer;
k.text;
k.counter;
const nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, api: k, icon: fs, library: ss, parse: ls }, Symbol.toStringTag, { value: "Module" }));
var Aa = {}, Je;
function us() {
  return Je || (Je = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fasr", t = "arrows-left-right", r = 640, n = 512, i = ["arrows-h"], o = "f07e", s = "M601.4 273l17-17-17-17-104-104-17-17-33.9 33.9c3.6 3.6 30.3 30.3 80 80l-412.1 0c49.7-49.7 76.4-76.4 80-80l-33.9-33.9-17 17-104 104-17 17 17 17 104 104 17 17 33.9-33.9c-3.6-3.6-30.3-30.3-80-80l412.1 0c-49.7 49.7-76.4 76.4-80 80l33.9 33.9 17-17 104-104z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faArrowsLeftRight = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Aa)), Aa;
}
var wr = /* @__PURE__ */ us();
const cs = /* @__PURE__ */ p(wr), il = /* @__PURE__ */ w({ __proto__: null, default: cs }, [wr]);
var Sa = {}, Ke;
function ds() {
  return Ke || (Ke = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fasr", t = "arrows-up-down", r = 320, n = 512, i = ["arrows-v"], o = "f07d", s = "M143.5 537l17 17 17-17 104-104 17-17-33.9-33.9c-3.6 3.6-30.3 30.3-80 80l0-412.1c49.7 49.7 76.4 76.4 80 80l33.9-33.9-17-17-104-104-17-17-17 17-104 104-17 17 33.9 33.9c3.6-3.6 30.3-30.3 80-80l0 412.1c-49.7-49.7-76.4-76.4-80-80l-33.9 33.9 17 17 104 104z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faArrowsUpDown = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Sa)), Sa;
}
var Pr = /* @__PURE__ */ ds();
const ms = /* @__PURE__ */ p(Pr), ol = /* @__PURE__ */ w({ __proto__: null, default: ms }, [Pr]);
var _a = {}, Qe;
function vs() {
  return Qe || (Qe = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fasr", t = "expand", r = 448, n = 512, i = [], o = "f065", s = "M136 32l24 0 0 48-112 0 0 112-48 0 0-160 136 0zM0 344l0-24 48 0 0 112 112 0 0 48-160 0 0-136zM424 32l24 0 0 160-48 0 0-112-112 0 0-48 136 0zM400 344l0-24 48 0 0 160-160 0 0-48 112 0 0-88z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faExpand = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(_a)), _a;
}
var Ar = /* @__PURE__ */ vs();
const hs = /* @__PURE__ */ p(Ar), sl = /* @__PURE__ */ w({ __proto__: null, default: hs }, [Ar]);
var Fa = {}, Ze;
function gs() {
  return Ze || (Ze = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fasr", t = "plus-large", r = 512, n = 512, i = [], o = "e59e", s = "M280 24l0-24-48 0 0 232-232 0 0 48 232 0 0 232 48 0 0-232 232 0 0-48-232 0 0-208z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faPlusLarge = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Fa)), Fa;
}
var Sr = /* @__PURE__ */ gs();
const bs = /* @__PURE__ */ p(Sr), ll = /* @__PURE__ */ w({ __proto__: null, default: bs }, [Sr]);
var ka = {}, $e;
function ys() {
  return $e || ($e = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "arrow-up-right-from-square", r = 512, n = 512, i = ["external-link"], o = "f08e", s = "M320 0l-32 0 0 64 114.7 0-201.4 201.4-22.6 22.6 45.3 45.3 22.6-22.6 201.4-201.4 0 114.7 64 0 0-224-192 0zM32 96l-32 0 0 416 416 0 0-192-64 0 0 128-288 0 0-288 128 0 0-64-160 0z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faArrowUpRightFromSquare = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(ka)), ka;
}
var _r = /* @__PURE__ */ ys();
const ps = /* @__PURE__ */ p(_r), fl = /* @__PURE__ */ w({ __proto__: null, default: ps }, [_r]);
var Ea = {}, at;
function ws() {
  return at || (at = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "calculator", r = 384, n = 512, i = [128425], o = "f1ec", s = "M384 0L0 0 0 512 384 512 384 0zM320 64l0 96-256 0 0-96 256 0zM64 208l48 0 0 48-48 0 0-48zm152 0l0 48-48 0 0-48 48 0zm56 0l48 0 0 48-48 0 0-48zM112 304l0 48-48 0 0-48 48 0zm56 0l48 0 0 48-48 0 0-48zm152 0l0 48-48 0 0-48 48 0zM64 400l160 0 0 48-160 0 0-48zm256 0l0 48-48 0 0-48 48 0z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faCalculator = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Ea)), Ea;
}
var Fr = /* @__PURE__ */ ws();
const Ps = /* @__PURE__ */ p(Fr), ul = /* @__PURE__ */ w({ __proto__: null, default: Ps }, [Fr]);
var Ca = {}, et;
function As() {
  return et || (et = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "chevron-left", r = 320, n = 512, i = [9001], o = "f053", s = "M3 256l22.6 22.6 192 192 22.6 22.6 45.3-45.3-22.6-22.6-169.4-169.4 169.4-169.4 22.6-22.6-45.3-45.3-22.6 22.6-192 192-22.6 22.6z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faChevronLeft = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Ca)), Ca;
}
var kr = /* @__PURE__ */ As();
const Ss = /* @__PURE__ */ p(kr), cl = /* @__PURE__ */ w({ __proto__: null, default: Ss }, [kr]);
var Na = {}, tt;
function _s() {
  return tt || (tt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "chevron-right", r = 320, n = 512, i = [9002], o = "f054", s = "M317.5 256L294.9 278.6 102.9 470.6 80.3 493.3 35 448 57.6 425.4 227 256 57.6 86.6 35 64 80.3 18.7 102.9 41.4 294.9 233.4 317.5 256z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faChevronRight = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Na)), Na;
}
var Er = /* @__PURE__ */ _s();
const Fs = /* @__PURE__ */ p(Er), dl = /* @__PURE__ */ w({ __proto__: null, default: Fs }, [Er]);
var Ia = {}, rt;
function ks() {
  return rt || (rt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "chevrons-left", r = 512, n = 512, i = ["chevron-double-left"], o = "f323", s = "M41.6 233.4l-22.6 22.6 22.6 22.6 192 192 22.6 22.6 45.3-45.3-22.6-22.6-169.4-169.4 169.4-169.4 22.6-22.6-45.3-45.3-22.6 22.6-192 192zm192 0l-22.6 22.6 22.6 22.6 192 192 22.6 22.6 45.3-45.3-22.6-22.6-169.4-169.4 169.4-169.4 22.6-22.6-45.3-45.3-22.6 22.6-192 192z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faChevronsLeft = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Ia)), Ia;
}
var Cr = /* @__PURE__ */ ks();
const Es = /* @__PURE__ */ p(Cr), ml = /* @__PURE__ */ w({ __proto__: null, default: Es }, [Cr]);
var Ma = {}, nt;
function Cs() {
  return nt || (nt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "chevrons-right", r = 512, n = 512, i = ["chevron-double-right"], o = "f324", s = "M278.9 278.6L301.5 256 278.9 233.4 86.9 41.4 64.3 18.7 19 64 41.6 86.6 211 256 41.6 425.4 19 448 64.3 493.3 86.9 470.6 278.9 278.6zm192 0l22.6-22.6-22.6-22.6-192-192-22.6-22.6-45.3 45.3 22.6 22.6 169.4 169.4-169.4 169.4-22.6 22.6 45.3 45.3 22.6-22.6 192-192z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faChevronsRight = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Ma)), Ma;
}
var Nr = /* @__PURE__ */ Cs();
const Ns = /* @__PURE__ */ p(Nr), vl = /* @__PURE__ */ w({ __proto__: null, default: Ns }, [Nr]);
var Oa = {}, it;
function Is() {
  return it || (it = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "cube", r = 512, n = 512, i = [], o = "f1b2", s = "M256.3-21l16 9.2 207.8 120 16 9.2 0 277-16 9.2-207.8 120-16 9.2-16-9.2-207.8-120-16-9.2 0-277 16-9.2 207.8-120 16-9.2zM432.2 357.5l0-166.1-143.8 83.1 0 166.1 143.8-83z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faCube = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Oa)), Oa;
}
var Ir = /* @__PURE__ */ Is();
const Ms = /* @__PURE__ */ p(Ir), hl = /* @__PURE__ */ w({ __proto__: null, default: Ms }, [Ir]);
var ja = {}, ot;
function Os() {
  return ot || (ot = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "expand", r = 448, n = 512, i = [], o = "f065", s = "M32 32l-32 0 0 160 64 0 0-96 96 0 0-64-128 0zM64 352l0-32-64 0 0 160 160 0 0-64-96 0 0-64zM320 32l-32 0 0 64 96 0 0 96 64 0 0-160-128 0zM448 352l0-32-64 0 0 96-96 0 0 64 160 0 0-128z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faExpand = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(ja)), ja;
}
var Mr = /* @__PURE__ */ Os();
const js = /* @__PURE__ */ p(Mr), gl = /* @__PURE__ */ w({ __proto__: null, default: js }, [Mr]);
var Da = {}, st;
function Ds() {
  return st || (st = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "file-pdf", r = 576, n = 512, i = [], o = "f1c1", s = "M272 0l-240 0 0 512 144 0 0-176 240 0 0-192-144-144zm85.5 176L240 176 240 58.5 357.5 176zM240 380l-20 0 0 168 40 0 0-48 12 0c33.1 0 60-26.9 60-60s-26.9-60-60-60l-32 0zm32 80l-12 0 0-40 12 0c11 0 20 9 20 20s-9 20-20 20zm96-80l-20 0 0 168 52 0c28.7 0 52-23.3 52-52l0-64c0-28.7-23.3-52-52-52l-32 0zm20 128l0-88 12 0c6.6 0 12 5.4 12 12l0 64c0 6.6-5.4 12-12 12l-12 0zm88-128l0 168 40 0 0-64 48 0 0-40-48 0 0-24 48 0 0-40-88 0z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faFilePdf = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Da)), Da;
}
var Or = /* @__PURE__ */ Ds();
const Ls = /* @__PURE__ */ p(Or), bl = /* @__PURE__ */ w({ __proto__: null, default: Ls }, [Or]);
var La = {}, lt;
function zs() {
  return lt || (lt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "file-lines", r = 384, n = 512, i = [128441, 128462, 61686, "file-alt", "file-text"], o = "f15c", s = "M0 0L240 0 384 144 384 512 0 512 0 0zM208 58.5L208 176 325.5 176 208 58.5zM120 256l-24 0 0 48 192 0 0-48-168 0zm0 96l-24 0 0 48 192 0 0-48-168 0z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faFileLines = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(La)), La;
}
var jr = /* @__PURE__ */ zs();
const Ts = /* @__PURE__ */ p(jr), yl = /* @__PURE__ */ w({ __proto__: null, default: Ts }, [jr]);
var za = {}, ft;
function xs() {
  return ft || (ft = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "files", r = 448, n = 512, i = [], o = "e178", s = "M96 0l224 0 128 128 0 320-352 0 0-448zM288 58.5L288 160 389.5 160 288 58.5zM48 120l0 376 304 0 0 48-352 0 0-448 48 0 0 24z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faFiles = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(za)), za;
}
var Dr = /* @__PURE__ */ xs();
const Rs = /* @__PURE__ */ p(Dr), pl = /* @__PURE__ */ w({ __proto__: null, default: Rs }, [Dr]);
var Ta = {}, ut;
function Us() {
  return ut || (ut = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "hammer", r = 640, n = 512, i = [128296], o = "f6e3", s = "M224 32L271 3.8c21.6-13 46.3-19.8 71.5-19.8 36.8 0 72.2 14.6 98.2 40.7l87.3 87.3 0 64 19.7 19.7 0 0 28.3-28.3 56.6 56.6c-12.9 12.9-43.7 43.7-92.3 92.3l-28.3 28.3-56.6-56.6 28.3-28.3-19.7-19.7-64 0-96-96 0-64-80-48zM50.8 402.7l222.1-222.1 90.5 90.5C185.8 448.7 96.7 537.8 96 538.5L5.5 448 50.8 402.7z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faHammer = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Ta)), Ta;
}
var Lr = /* @__PURE__ */ Us();
const qs = /* @__PURE__ */ p(Lr), wl = /* @__PURE__ */ w({ __proto__: null, default: qs }, [Lr]);
var xa = {}, ct;
function Ws() {
  return ct || (ct = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "hammer-brush", r = 640, n = 512, i = [], o = "e620", s = "M0 137.7C0 91.7 23 48.7 61.3 23.1 83.9 8 110.5 0 137.7 0l86.3 0 48 32 16 0 0-32 64 0 0 160-64 0 0-32-16 0-48 32-96 0-48-32-80 32 0-22.3zM224 208l0 304-96 0 0-304 96 0zM448 448l-32 64-96 0 0-176 288 0 0 176-128 0-32-64zM320 256l96-64 0-192 96 0 0 192 96 64 0 32-288 0 0-32z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faHammerBrush = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(xa)), xa;
}
var zr = /* @__PURE__ */ Ws();
const Hs = /* @__PURE__ */ p(zr), Pl = /* @__PURE__ */ w({ __proto__: null, default: Hs }, [zr]);
var Ra = {}, dt;
function Ys() {
  return dt || (dt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "image", r = 448, n = 512, i = [], o = "f03e", s = "M448 32l-448 0 0 448 448 0 0-448zM128 112a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm16 160l46.1 69.1 81.9-133.1 128 208-352 0 96-144z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faImage = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Ra)), Ra;
}
var Tr = /* @__PURE__ */ Ys();
const Xs = /* @__PURE__ */ p(Tr), Al = /* @__PURE__ */ w({ __proto__: null, default: Xs }, [Tr]);
var Ua = {}, qa = {}, mt;
function Bs() {
  return mt || (mt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "circle-info", r = 512, n = 512, i = ["info-circle"], o = "f05a", s = "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM216 336l24 0 0-64-48 0 0-48 96 0 0 112 32 0 0 48-128 0 0-48 24 0zm72-144l-64 0 0-64 64 0 0 64z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faCircleInfo = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(qa)), qa;
}
var vt;
function Gs() {
  return vt || (vt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = /* @__PURE__ */ Bs();
    a.definition = {
      prefix: e.prefix,
      iconName: e.iconName,
      icon: [
        e.width,
        e.height,
        e.aliases,
        e.unicode,
        e.svgPathData
      ]
    }, a.faInfoCircle = a.definition, a.prefix = e.prefix, a.iconName = e.iconName, a.width = e.width, a.height = e.height, a.ligatures = e.aliases, a.unicode = e.unicode, a.svgPathData = e.svgPathData, a.aliases = e.aliases;
  })(Ua)), Ua;
}
var xr = /* @__PURE__ */ Gs();
const Vs = /* @__PURE__ */ p(xr), Sl = /* @__PURE__ */ w({ __proto__: null, default: Vs }, [xr]);
var Wa = {}, ht;
function Js() {
  return ht || (ht = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "plus-large", r = 512, n = 512, i = [], o = "e59e", s = "M288 32l0-32-64 0 0 224-224 0 0 64 224 0 0 224 64 0 0-224 224 0 0-64-224 0 0-192z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faPlusLarge = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Wa)), Wa;
}
var Rr = /* @__PURE__ */ Js();
const Ks = /* @__PURE__ */ p(Rr), _l = /* @__PURE__ */ w({ __proto__: null, default: Ks }, [Rr]);
var Ha = {}, gt;
function Qs() {
  return gt || (gt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "spray-can", r = 576, n = 512, i = [], o = "f5bd", s = "M288 0l0 112-128 0 0-112 128 0zM64 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256-320 0 0-256zm240 80a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM320 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM448 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM512 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM448 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faSprayCan = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Ha)), Ha;
}
var Ur = /* @__PURE__ */ Qs();
const Zs = /* @__PURE__ */ p(Ur), Fl = /* @__PURE__ */ w({ __proto__: null, default: Zs }, [Ur]);
var Ya = {}, bt;
function $s() {
  return bt || (bt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "trash", r = 448, n = 512, i = [], o = "f1f8", s = "M144-16l-16 48-128 0 0 64 448 0 0-64-128 0-16-48-160 0zM416 144l-384 0 24 368 336 0 24-368z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faTrash = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Ya)), Ya;
}
var qr = /* @__PURE__ */ $s();
const al = /* @__PURE__ */ p(qr), kl = /* @__PURE__ */ w({ __proto__: null, default: al }, [qr]);
var Xa = {}, yt;
function el() {
  return yt || (yt = 1, (function(a) {
    Object.defineProperty(a, "__esModule", { value: !0 });
    var e = "fass", t = "xmark", r = 448, n = 512, i = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], o = "f00d", s = "M86.9 73.4L64.3 50.7 19 96 41.6 118.6 179 256 41.6 393.4 19 416 64.3 461.3 86.9 438.6 224.3 301.3 361.6 438.6 384.3 461.3 429.5 416 406.9 393.4 269.5 256 406.9 118.6 429.5 96 384.3 50.7 361.6 73.4 224.3 210.7 86.9 73.4z";
    a.definition = {
      prefix: e,
      iconName: t,
      icon: [
        r,
        n,
        i,
        o,
        s
      ]
    }, a.faXmark = a.definition, a.prefix = e, a.iconName = t, a.width = r, a.height = n, a.ligatures = i, a.unicode = o, a.svgPathData = s, a.aliases = i;
  })(Xa)), Xa;
}
var Wr = /* @__PURE__ */ el();
const tl = /* @__PURE__ */ p(Wr), El = /* @__PURE__ */ w({ __proto__: null, default: tl }, [Wr]);
export {
  ol as a,
  sl as b,
  ll as c,
  fl as d,
  ul as e,
  il as f,
  cl as g,
  dl as h,
  ml as i,
  vl as j,
  hl as k,
  gl as l,
  bl as m,
  yl as n,
  pl as o,
  wl as p,
  Pl as q,
  Al as r,
  Sl as s,
  _l as t,
  Fl as u,
  kl as v,
  El as w,
  fs as x,
  ls as y,
  nl as z
};

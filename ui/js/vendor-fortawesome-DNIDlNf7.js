import { g as p } from "./vendor-tCV_BFOF.js";
function b(t, e) {
  for (var n = 0; n < e.length; n++) {
    const a = e[n];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(a, r);
          i && Object.defineProperty(t, r, i.get ? i : { enumerable: !0, get: () => a[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
/*!
* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2024 Fonticons, Inc.
*/
function Wn(t, e, n) {
  return (e = Gn(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function re(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function l(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? re(Object(n), !0).forEach(function(a) {
      Wn(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Xn(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(t, e);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Gn(t) {
  var e = Xn(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
const ie = () => {
};
let Bt = {}, Be = {}, Ve = null, Ke = {
  mark: ie,
  measure: ie
};
try {
  typeof window < "u" && (Bt = window), typeof document < "u" && (Be = document), typeof MutationObserver < "u" && (Ve = MutationObserver), typeof performance < "u" && (Ke = performance);
} catch {
}
const {
  userAgent: oe = ""
} = Bt.navigator || {}, F = Bt, h = Be, se = Ve, Z = Ke;
F.document;
const O = !!h.documentElement && !!h.head && typeof h.addEventListener == "function" && typeof h.createElement == "function", Qe = ~oe.indexOf("MSIE") || ~oe.indexOf("Trident/");
var Bn = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Vn = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Je = {
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
  }
}, Kn = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ze = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], v = "classic", rt = "duotone", Qn = "sharp", Jn = "sharp-duotone", $e = [v, rt, Qn, Jn], Zn = {
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
  }
}, $n = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  }
}, ta = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
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
}]]), ea = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    brands: "fab"
  },
  duotone: {
    solid: "fad",
    regular: "fadr",
    light: "fadl",
    thin: "fadt"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds",
    regular: "fasdr",
    light: "fasdl",
    thin: "fasdt"
  }
}, na = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], le = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, aa = ["kit"], ra = {
  kit: {
    "fa-kit": "fak"
  }
}, ia = ["fak", "fakd"], oa = {
  kit: {
    fak: "fa-kit"
  }
}, fe = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, $ = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, sa = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], la = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], fa = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, ca = {
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
  }
}, ua = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Mt = {
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
  }
}, da = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Ft = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...sa, ...da], ma = ["solid", "regular", "light", "thin", "duotone", "brands"], tn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ga = tn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ha = [...Object.keys(ua), ...ma, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", $.GROUP, $.SWAP_OPACITY, $.PRIMARY, $.SECONDARY].concat(tn.map((t) => "".concat(t, "x"))).concat(ga.map((t) => "w-".concat(t))), va = {
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
};
const S = "___FONT_AWESOME___", xt = 16, en = "fa", nn = "svg-inline--fa", D = "data-fa-i2svg", It = "data-fa-pseudo-element", pa = "data-fa-pseudo-element-pending", Vt = "data-prefix", Kt = "data-icon", ce = "fontawesome-i2svg", ba = "async", ya = ["HTML", "HEAD", "STYLE", "SCRIPT"], an = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Q(t) {
  return new Proxy(t, {
    get(e, n) {
      return n in e ? e[n] : e[v];
    }
  });
}
const rn = l({}, Je);
rn[v] = l(l(l(l({}, {
  "fa-duotone": "duotone"
}), Je[v]), le.kit), le["kit-duotone"]);
const wa = Q(rn), Tt = l({}, ea);
Tt[v] = l(l(l(l({}, {
  duotone: "fad"
}), Tt[v]), fe.kit), fe["kit-duotone"]);
const ue = Q(Tt), zt = l({}, Mt);
zt[v] = l(l({}, zt[v]), oa.kit);
const Qt = Q(zt), Dt = l({}, ca);
Dt[v] = l(l({}, Dt[v]), ra.kit);
Q(Dt);
const Pa = Bn, on = "fa-layers-text", Aa = Vn, _a = l({}, Zn);
Q(_a);
const Ea = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ct = Kn, ka = [...aa, ...ha], G = F.FontAwesomeConfig || {};
function Na(t) {
  var e = h.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function Sa(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
h && typeof h.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((e) => {
  let [n, a] = e;
  const r = Sa(Na(n));
  r != null && (G[a] = r);
});
const sn = {
  styleDefault: "solid",
  familyDefault: v,
  cssPrefix: en,
  replacementClass: nn,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
G.familyPrefix && (G.cssPrefix = G.familyPrefix);
const H = l(l({}, sn), G);
H.autoReplaceSvg || (H.observeMutations = !1);
const f = {};
Object.keys(sn).forEach((t) => {
  Object.defineProperty(f, t, {
    enumerable: !0,
    set: function(e) {
      H[t] = e, B.forEach((n) => n(f));
    },
    get: function() {
      return H[t];
    }
  });
});
Object.defineProperty(f, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    H.cssPrefix = t, B.forEach((e) => e(f));
  },
  get: function() {
    return H.cssPrefix;
  }
});
F.FontAwesomeConfig = f;
const B = [];
function Ca(t) {
  return B.push(t), () => {
    B.splice(B.indexOf(t), 1);
  };
}
const M = xt, E = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Oa(t) {
  if (!t || !O)
    return;
  const e = h.createElement("style");
  e.setAttribute("type", "text/css"), e.innerHTML = t;
  const n = h.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const i = n[r], o = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
  }
  return h.head.insertBefore(e, a), t;
}
const La = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function V() {
  let t = 12, e = "";
  for (; t-- > 0; )
    e += La[Math.random() * 62 | 0];
  return e;
}
function W(t) {
  const e = [];
  for (let n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function Jt(t) {
  return t.classList ? W(t.classList) : (t.getAttribute("class") || "").split(" ").filter((e) => e);
}
function ln(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ma(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, '="').concat(ln(t[n]), '" '), "").trim();
}
function it(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, ": ").concat(t[n].trim(), ";"), "");
}
function Zt(t) {
  return t.size !== E.size || t.x !== E.x || t.y !== E.y || t.rotate !== E.rotate || t.flipX || t.flipY;
}
function Fa(t) {
  let {
    transform: e,
    containerWidth: n,
    iconWidth: a
  } = t;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), u = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: u,
    path: c
  };
}
function xa(t) {
  let {
    transform: e,
    width: n = xt,
    height: a = xt,
    startCentered: r = !1
  } = t, i = "";
  return r && Qe ? i += "translate(".concat(e.x / M - n / 2, "em, ").concat(e.y / M - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(e.x / M, "em), calc(-50% + ").concat(e.y / M, "em)) ") : i += "translate(".concat(e.x / M, "em, ").concat(e.y / M, "em) "), i += "scale(".concat(e.size / M * (e.flipX ? -1 : 1), ", ").concat(e.size / M * (e.flipY ? -1 : 1), ") "), i += "rotate(".concat(e.rotate, "deg) "), i;
}
var Ia = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
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

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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
}`;
function fn() {
  const t = en, e = nn, n = f.cssPrefix, a = f.replacementClass;
  let r = Ia;
  if (n !== t || a !== e) {
    const i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
let de = !1;
function ut() {
  f.autoAddCss && !de && (Oa(fn()), de = !0);
}
var Ta = {
  mixout() {
    return {
      dom: {
        css: fn,
        insertCss: ut
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ut();
      },
      beforeI2svg() {
        ut();
      }
    };
  }
};
const C = F || {};
C[S] || (C[S] = {});
C[S].styles || (C[S].styles = {});
C[S].hooks || (C[S].hooks = {});
C[S].shims || (C[S].shims = []);
var k = C[S];
const cn = [], un = function() {
  h.removeEventListener("DOMContentLoaded", un), nt = 1, cn.map((t) => t());
};
let nt = !1;
O && (nt = (h.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(h.readyState), nt || h.addEventListener("DOMContentLoaded", un));
function za(t) {
  O && (nt ? setTimeout(t, 0) : cn.push(t));
}
function J(t) {
  const {
    tag: e,
    attributes: n = {},
    children: a = []
  } = t;
  return typeof t == "string" ? ln(t) : "<".concat(e, " ").concat(Ma(n), ">").concat(a.map(J).join(""), "</").concat(e, ">");
}
function me(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var dt = function(e, n, a, r) {
  var i = Object.keys(e), o = i.length, s = n, u, c, d;
  for (a === void 0 ? (u = 1, d = e[i[0]]) : (u = 0, d = a); u < o; u++)
    c = i[u], d = s(d, e[c], c, e);
  return d;
};
function Da(t) {
  const e = [];
  let n = 0;
  const a = t.length;
  for (; n < a; ) {
    const r = t.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      const i = t.charCodeAt(n++);
      (i & 64512) == 56320 ? e.push(((r & 1023) << 10) + (i & 1023) + 65536) : (e.push(r), n--);
    } else
      e.push(r);
  }
  return e;
}
function Rt(t) {
  const e = Da(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Ra(t, e) {
  const n = t.length;
  let a = t.charCodeAt(e), r;
  return a >= 55296 && a <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function ge(t) {
  return Object.keys(t).reduce((e, n) => {
    const a = t[n];
    return !!a.icon ? e[a.iconName] = a.icon : e[n] = a, e;
  }, {});
}
function jt(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = ge(e);
  typeof k.hooks.addPack == "function" && !a ? k.hooks.addPack(t, ge(e)) : k.styles[t] = l(l({}, k.styles[t] || {}), r), t === "fas" && jt("fa", e);
}
const {
  styles: K,
  shims: ja
} = k, dn = Object.keys(Qt), Ua = dn.reduce((t, e) => (t[e] = Object.keys(Qt[e]), t), {});
let $t = null, mn = {}, gn = {}, hn = {}, vn = {}, pn = {};
function Ya(t) {
  return ~ka.indexOf(t);
}
function qa(t, e) {
  const n = e.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === t && r !== "" && !Ya(r) ? r : null;
}
const bn = () => {
  const t = (a) => dt(K, (r, i, o) => (r[o] = dt(i, a, {}), r), {});
  mn = t((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((s) => typeof s == "number").forEach((s) => {
    a[s.toString(16)] = i;
  }), a)), gn = t((a, r, i) => (a[i] = i, r[2] && r[2].filter((s) => typeof s == "string").forEach((s) => {
    a[s] = i;
  }), a)), pn = t((a, r, i) => {
    const o = r[2];
    return a[i] = i, o.forEach((s) => {
      a[s] = i;
    }), a;
  });
  const e = "far" in K || f.autoFetchSvg, n = dt(ja, (a, r) => {
    const i = r[0];
    let o = r[1];
    const s = r[2];
    return o === "far" && !e && (o = "fas"), typeof i == "string" && (a.names[i] = {
      prefix: o,
      iconName: s
    }), typeof i == "number" && (a.unicodes[i.toString(16)] = {
      prefix: o,
      iconName: s
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  hn = n.names, vn = n.unicodes, $t = ot(f.styleDefault, {
    family: f.familyDefault
  });
};
Ca((t) => {
  $t = ot(t.styleDefault, {
    family: f.familyDefault
  });
});
bn();
function te(t, e) {
  return (mn[t] || {})[e];
}
function Ha(t, e) {
  return (gn[t] || {})[e];
}
function z(t, e) {
  return (pn[t] || {})[e];
}
function yn(t) {
  return hn[t] || {
    prefix: null,
    iconName: null
  };
}
function Wa(t) {
  const e = vn[t], n = te("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function x() {
  return $t;
}
const wn = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Xa(t) {
  let e = v;
  const n = dn.reduce((a, r) => (a[r] = "".concat(f.cssPrefix, "-").concat(r), a), {});
  return $e.forEach((a) => {
    (t.includes(n[a]) || t.some((r) => Ua[a].includes(r))) && (e = a);
  }), e;
}
function ot(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = v
  } = e, a = wa[n][t];
  if (n === rt && !t)
    return "fad";
  const r = ue[n][t] || ue[n][a], i = t in k.styles ? t : null;
  return r || i || null;
}
function Ga(t) {
  let e = [], n = null;
  return t.forEach((a) => {
    const r = qa(f.cssPrefix, a);
    r ? n = r : a && e.push(a);
  }), {
    iconName: n,
    rest: e
  };
}
function he(t) {
  return t.sort().filter((e, n, a) => a.indexOf(e) === n);
}
function st(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = e;
  let a = null;
  const r = Ft.concat(la), i = he(t.filter((g) => r.includes(g))), o = he(t.filter((g) => !Ft.includes(g))), s = i.filter((g) => (a = g, !Ze.includes(g))), [u = null] = s, c = Xa(i), d = l(l({}, Ga(o)), {}, {
    prefix: ot(u, {
      family: c
    })
  });
  return l(l(l({}, d), Qa({
    values: t,
    family: c,
    styles: K,
    config: f,
    canonical: d,
    givenPrefix: a
  })), Ba(n, a, d));
}
function Ba(t, e, n) {
  let {
    prefix: a,
    iconName: r
  } = n;
  if (t || !a || !r)
    return {
      prefix: a,
      iconName: r
    };
  const i = e === "fa" ? yn(r) : {}, o = z(a, r);
  return r = i.iconName || o || r, a = i.prefix || a, a === "far" && !K.far && K.fas && !f.autoFetchSvg && (a = "fas"), {
    prefix: a,
    iconName: r
  };
}
const Va = $e.filter((t) => t !== v || t !== rt), Ka = Object.keys(Mt).filter((t) => t !== v).map((t) => Object.keys(Mt[t])).flat();
function Qa(t) {
  const {
    values: e,
    family: n,
    canonical: a,
    givenPrefix: r = "",
    styles: i = {},
    config: o = {}
  } = t, s = n === rt, u = e.includes("fa-duotone") || e.includes("fad"), c = o.familyDefault === "duotone", d = a.prefix === "fad" || a.prefix === "fa-duotone";
  if (!s && (u || c || d) && (a.prefix = "fad"), (e.includes("fa-brands") || e.includes("fab")) && (a.prefix = "fab"), !a.prefix && Va.includes(n) && (Object.keys(i).find((m) => Ka.includes(m)) || o.autoFetchSvg)) {
    const m = ta.get(n).defaultShortPrefixId;
    a.prefix = m, a.iconName = z(a.prefix, a.iconName) || a.iconName;
  }
  return (a.prefix === "fa" || r === "fa") && (a.prefix = x() || "fas"), a;
}
class Ja {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
      n[a] = arguments[a];
    const r = n.reduce(this._pullDefinitions, {});
    Object.keys(r).forEach((i) => {
      this.definitions[i] = l(l({}, this.definitions[i] || {}), r[i]), jt(i, r[i]);
      const o = Qt[v][i];
      o && jt(o, r[i]), bn();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(e, n) {
    const a = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(a).map((r) => {
      const {
        prefix: i,
        iconName: o,
        icon: s
      } = a[r], u = s[2];
      e[i] || (e[i] = {}), u.length > 0 && u.forEach((c) => {
        typeof c == "string" && (e[i][c] = s);
      }), e[i][o] = s;
    }), e;
  }
}
let ve = [], Y = {};
const q = {}, Za = Object.keys(q);
function $a(t, e) {
  let {
    mixoutsTo: n
  } = e;
  return ve = t, Y = {}, Object.keys(q).forEach((a) => {
    Za.indexOf(a) === -1 && delete q[a];
  }), ve.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((i) => {
      typeof r[i] == "function" && (n[i] = r[i]), typeof r[i] == "object" && Object.keys(r[i]).forEach((o) => {
        n[i] || (n[i] = {}), n[i][o] = r[i][o];
      });
    }), a.hooks) {
      const i = a.hooks();
      Object.keys(i).forEach((o) => {
        Y[o] || (Y[o] = []), Y[o].push(i[o]);
      });
    }
    a.provides && a.provides(q);
  }), n;
}
function Ut(t, e) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (Y[t] || []).forEach((o) => {
    e = o.apply(null, [e, ...a]);
  }), e;
}
function R(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    n[a - 1] = arguments[a];
  (Y[t] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function I() {
  const t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return q[t] ? q[t].apply(null, e) : void 0;
}
function Yt(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  let {
    iconName: e
  } = t;
  const n = t.prefix || x();
  if (e)
    return e = z(n, e) || e, me(Pn.definitions, n, e) || me(k.styles, n, e);
}
const Pn = new Ja(), tr = () => {
  f.autoReplaceSvg = !1, f.observeMutations = !1, R("noAuto");
}, er = {
  i2svg: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return O ? (R("beforeI2svg", t), I("pseudoElements2svg", t), I("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: e
    } = t;
    f.autoReplaceSvg === !1 && (f.autoReplaceSvg = !0), f.observeMutations = !0, za(() => {
      ar({
        autoReplaceSvgRoot: e
      }), R("watch", t);
    });
  }
}, nr = {
  icon: (t) => {
    if (t === null)
      return null;
    if (typeof t == "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: z(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      const e = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = ot(t[0]);
      return {
        prefix: n,
        iconName: z(n, e) || e
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(f.cssPrefix, "-")) > -1 || t.match(Pa))) {
      const e = st(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: e.prefix || x(),
        iconName: z(e.prefix, e.iconName) || e.iconName
      };
    }
    if (typeof t == "string") {
      const e = x();
      return {
        prefix: e,
        iconName: z(e, t) || t
      };
    }
  }
}, w = {
  noAuto: tr,
  config: f,
  dom: er,
  parse: nr,
  library: Pn,
  findIconDefinition: Yt,
  toHtml: J
}, ar = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: e = h
  } = t;
  (Object.keys(k.styles).length > 0 || f.autoFetchSvg) && O && f.autoReplaceSvg && w.dom.i2svg({
    node: e
  });
};
function lt(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((n) => J(n));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!O) return;
      const n = h.createElement("div");
      return n.innerHTML = t.html, n.children;
    }
  }), t;
}
function rr(t) {
  let {
    children: e,
    main: n,
    mask: a,
    attributes: r,
    styles: i,
    transform: o
  } = t;
  if (Zt(o) && n.found && !a.found) {
    const {
      width: s,
      height: u
    } = n, c = {
      x: s / u / 2,
      y: 0.5
    };
    r.style = it(l(l({}, i), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function ir(t) {
  let {
    prefix: e,
    iconName: n,
    children: a,
    attributes: r,
    symbol: i
  } = t;
  const o = i === !0 ? "".concat(e, "-").concat(f.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: l(l({}, r), {}, {
        id: o
      }),
      children: a
    }]
  }];
}
function ee(t) {
  const {
    icons: {
      main: e,
      mask: n
    },
    prefix: a,
    iconName: r,
    transform: i,
    symbol: o,
    title: s,
    maskId: u,
    titleId: c,
    extra: d,
    watchable: g = !1
  } = t, {
    width: m,
    height: y
  } = n.found ? n : e, L = ia.includes(a), T = [f.replacementClass, r ? "".concat(f.cssPrefix, "-").concat(r) : ""].filter((U) => d.classes.indexOf(U) === -1).filter((U) => U !== "" || !!U).concat(d.classes).join(" ");
  let A = {
    children: [],
    attributes: l(l({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": r,
      class: T,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(m, " ").concat(y)
    })
  };
  const N = L && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(m / y * 16 * 0.0625, "em")
  } : {};
  g && (A.attributes[D] = ""), s && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(c || V())
    },
    children: [s]
  }), delete A.attributes.title);
  const P = l(l({}, A), {}, {
    prefix: a,
    iconName: r,
    main: e,
    mask: n,
    maskId: u,
    transform: i,
    symbol: o,
    styles: l(l({}, N), d.styles)
  }), {
    children: _,
    attributes: j
  } = n.found && e.found ? I("generateAbstractMask", P) || {
    children: [],
    attributes: {}
  } : I("generateAbstractIcon", P) || {
    children: [],
    attributes: {}
  };
  return P.children = _, P.attributes = j, o ? ir(P) : rr(P);
}
function pe(t) {
  const {
    content: e,
    width: n,
    height: a,
    transform: r,
    title: i,
    extra: o,
    watchable: s = !1
  } = t, u = l(l(l({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (u[D] = "");
  const c = l({}, o.styles);
  Zt(r) && (c.transform = xa({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), c["-webkit-transform"] = c.transform);
  const d = it(c);
  d.length > 0 && (u.style = d);
  const g = [];
  return g.push({
    tag: "span",
    attributes: u,
    children: [e]
  }), i && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), g;
}
function or(t) {
  const {
    content: e,
    title: n,
    extra: a
  } = t, r = l(l(l({}, a.attributes), n ? {
    title: n
  } : {}), {}, {
    class: a.classes.join(" ")
  }), i = it(a.styles);
  i.length > 0 && (r.style = i);
  const o = [];
  return o.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: mt
} = k;
function qt(t) {
  const e = t[0], n = t[1], [a] = t.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(f.cssPrefix, "-").concat(ct.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(f.cssPrefix, "-").concat(ct.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(f.cssPrefix, "-").concat(ct.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : r = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: e,
    height: n,
    icon: r
  };
}
const sr = {
  found: !1,
  width: 512,
  height: 512
};
function lr(t, e) {
  !an && !f.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Ht(t, e) {
  let n = e;
  return e === "fa" && f.styleDefault !== null && (e = x()), new Promise((a, r) => {
    if (n === "fa") {
      const i = yn(t) || {};
      t = i.iconName || t, e = i.prefix || e;
    }
    if (t && e && mt[e] && mt[e][t]) {
      const i = mt[e][t];
      return a(qt(i));
    }
    lr(t, e), a(l(l({}, sr), {}, {
      icon: f.showMissingIcons && t ? I("missingIconAbstract") || {} : {}
    }));
  });
}
const be = () => {
}, Wt = f.measurePerformance && Z && Z.mark && Z.measure ? Z : {
  mark: be,
  measure: be
}, X = 'FA "6.7.2"', fr = (t) => (Wt.mark("".concat(X, " ").concat(t, " begins")), () => An(t)), An = (t) => {
  Wt.mark("".concat(X, " ").concat(t, " ends")), Wt.measure("".concat(X, " ").concat(t), "".concat(X, " ").concat(t, " begins"), "".concat(X, " ").concat(t, " ends"));
};
var ne = {
  begin: fr,
  end: An
};
const tt = () => {
};
function ye(t) {
  return typeof (t.getAttribute ? t.getAttribute(D) : null) == "string";
}
function cr(t) {
  const e = t.getAttribute ? t.getAttribute(Vt) : null, n = t.getAttribute ? t.getAttribute(Kt) : null;
  return e && n;
}
function ur(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(f.replacementClass);
}
function dr() {
  return f.autoReplaceSvg === !0 ? et.replace : et[f.autoReplaceSvg] || et.replace;
}
function mr(t) {
  return h.createElementNS("http://www.w3.org/2000/svg", t);
}
function gr(t) {
  return h.createElement(t);
}
function _n(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = t.tag === "svg" ? mr : gr
  } = e;
  if (typeof t == "string")
    return h.createTextNode(t);
  const a = n(t.tag);
  return Object.keys(t.attributes || []).forEach(function(i) {
    a.setAttribute(i, t.attributes[i]);
  }), (t.children || []).forEach(function(i) {
    a.appendChild(_n(i, {
      ceFn: n
    }));
  }), a;
}
function hr(t) {
  let e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
const et = {
  replace: function(t) {
    const e = t[0];
    if (e.parentNode)
      if (t[1].forEach((n) => {
        e.parentNode.insertBefore(_n(n), e);
      }), e.getAttribute(D) === null && f.keepOriginalSource) {
        let n = h.createComment(hr(e));
        e.parentNode.replaceChild(n, e);
      } else
        e.remove();
  },
  nest: function(t) {
    const e = t[0], n = t[1];
    if (~Jt(e).indexOf(f.replacementClass))
      return et.replace(t);
    const a = new RegExp("".concat(f.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((o, s) => (s === f.replacementClass || s.match(a) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "));
    }
    const r = n.map((i) => J(i)).join(`
`);
    e.setAttribute(D, ""), e.innerHTML = r;
  }
};
function we(t) {
  t();
}
function En(t, e) {
  const n = typeof e == "function" ? e : tt;
  if (t.length === 0)
    n();
  else {
    let a = we;
    f.mutateApproach === ba && (a = F.requestAnimationFrame || we), a(() => {
      const r = dr(), i = ne.begin("mutate");
      t.map(r), i(), n();
    });
  }
}
let ae = !1;
function kn() {
  ae = !0;
}
function Xt() {
  ae = !1;
}
let at = null;
function Pe(t) {
  if (!se || !f.observeMutations)
    return;
  const {
    treeCallback: e = tt,
    nodeCallback: n = tt,
    pseudoElementsCallback: a = tt,
    observeMutationsRoot: r = h
  } = t;
  at = new se((i) => {
    if (ae) return;
    const o = x();
    W(i).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !ye(s.addedNodes[0]) && (f.searchPseudoElements && a(s.target), e(s.target)), s.type === "attributes" && s.target.parentNode && f.searchPseudoElements && a(s.target.parentNode), s.type === "attributes" && ye(s.target) && ~Ea.indexOf(s.attributeName))
        if (s.attributeName === "class" && cr(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = st(Jt(s.target));
          s.target.setAttribute(Vt, u || o), c && s.target.setAttribute(Kt, c);
        } else ur(s.target) && n(s.target);
    });
  }), O && at.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function vr() {
  at && at.disconnect();
}
function pr(t) {
  const e = t.getAttribute("style");
  let n = [];
  return e && (n = e.split(";").reduce((a, r) => {
    const i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (a[o] = s.join(":").trim()), a;
  }, {})), n;
}
function br(t) {
  const e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), a = t.innerText !== void 0 ? t.innerText.trim() : "";
  let r = st(Jt(t));
  return r.prefix || (r.prefix = x()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Ha(r.prefix, t.innerText) || te(r.prefix, Rt(t.innerText))), !r.iconName && f.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function yr(t) {
  const e = W(t.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = t.getAttribute("title"), a = t.getAttribute("data-fa-title-id");
  return f.autoA11y && (n ? e["aria-labelledby"] = "".concat(f.replacementClass, "-title-").concat(a || V()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function wr() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: E,
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
function Ae(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = br(t), i = yr(t), o = Ut("parseNodeAttributes", {}, t);
  let s = e.styleParser ? pr(t) : [];
  return l({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: E,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: r,
      styles: s,
      attributes: i
    }
  }, o);
}
const {
  styles: Pr
} = k;
function Nn(t) {
  const e = f.autoReplaceSvg === "nest" ? Ae(t, {
    styleParser: !1
  }) : Ae(t);
  return ~e.extra.classes.indexOf(on) ? I("generateLayersText", t, e) : I("generateSvgReplacementMutation", t, e);
}
function Ar() {
  return [...na, ...Ft];
}
function _e(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!O) return Promise.resolve();
  const n = h.documentElement.classList, a = (d) => n.add("".concat(ce, "-").concat(d)), r = (d) => n.remove("".concat(ce, "-").concat(d)), i = f.autoFetchSvg ? Ar() : Ze.concat(Object.keys(Pr));
  i.includes("fa") || i.push("fa");
  const o = [".".concat(on, ":not([").concat(D, "])")].concat(i.map((d) => ".".concat(d, ":not([").concat(D, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = W(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const u = ne.begin("onTree"), c = s.reduce((d, g) => {
    try {
      const m = Nn(g);
      m && d.push(m);
    } catch (m) {
      an || m.name === "MissingIcon" && console.error(m);
    }
    return d;
  }, []);
  return new Promise((d, g) => {
    Promise.all(c).then((m) => {
      En(m, () => {
        a("active"), a("complete"), r("pending"), typeof e == "function" && e(), u(), d();
      });
    }).catch((m) => {
      u(), g(m);
    });
  });
}
function _r(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Nn(t).then((n) => {
    n && En([n], e);
  });
}
function Er(t) {
  return function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (e || {}).icon ? e : Yt(e || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : Yt(r || {})), t(a, l(l({}, n), {}, {
      mask: r
    }));
  };
}
const kr = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = E,
    symbol: a = !1,
    mask: r = null,
    maskId: i = null,
    title: o = null,
    titleId: s = null,
    classes: u = [],
    attributes: c = {},
    styles: d = {}
  } = e;
  if (!t) return;
  const {
    prefix: g,
    iconName: m,
    icon: y
  } = t;
  return lt(l({
    type: "icon"
  }, t), () => (R("beforeDOMElementCreation", {
    iconDefinition: t,
    params: e
  }), f.autoA11y && (o ? c["aria-labelledby"] = "".concat(f.replacementClass, "-title-").concat(s || V()) : (c["aria-hidden"] = "true", c.focusable = "false")), ee({
    icons: {
      main: qt(y),
      mask: r ? qt(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: g,
    iconName: m,
    transform: l(l({}, E), n),
    symbol: a,
    title: o,
    maskId: i,
    titleId: s,
    extra: {
      attributes: c,
      styles: d,
      classes: u
    }
  })));
};
var Nr = {
  mixout() {
    return {
      icon: Er(kr)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.treeCallback = _e, t.nodeCallback = _r, t;
      }
    };
  },
  provides(t) {
    t.i2svg = function(e) {
      const {
        node: n = h,
        callback: a = () => {
        }
      } = e;
      return _e(n, a);
    }, t.generateSvgReplacementMutation = function(e, n) {
      const {
        iconName: a,
        title: r,
        titleId: i,
        prefix: o,
        transform: s,
        symbol: u,
        mask: c,
        maskId: d,
        extra: g
      } = n;
      return new Promise((m, y) => {
        Promise.all([Ht(a, o), c.iconName ? Ht(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((L) => {
          let [T, A] = L;
          m([e, ee({
            icons: {
              main: T,
              mask: A
            },
            prefix: o,
            iconName: a,
            transform: s,
            symbol: u,
            maskId: d,
            title: r,
            titleId: i,
            extra: g,
            watchable: !0
          })]);
        }).catch(y);
      });
    }, t.generateAbstractIcon = function(e) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: i,
        styles: o
      } = e;
      const s = it(o);
      s.length > 0 && (a.style = s);
      let u;
      return Zt(i) && (u = I("generateAbstractTransformGrouping", {
        main: r,
        transform: i,
        containerWidth: r.width,
        iconWidth: r.width
      })), n.push(u || r.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, Sr = {
  mixout() {
    return {
      layer(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = e;
        return lt({
          type: "layer"
        }, () => {
          R("beforeDOMElementCreation", {
            assembler: t,
            params: e
          });
          let a = [];
          return t((r) => {
            Array.isArray(r) ? r.map((i) => {
              a = a.concat(i.abstract);
            }) : a = a.concat(r.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(f.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, Cr = {
  mixout() {
    return {
      counter(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: a = [],
          attributes: r = {},
          styles: i = {}
        } = e;
        return lt({
          type: "counter",
          content: t
        }, () => (R("beforeDOMElementCreation", {
          content: t,
          params: e
        }), or({
          content: t.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: i,
            classes: ["".concat(f.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, Or = {
  mixout() {
    return {
      text(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = E,
          title: a = null,
          classes: r = [],
          attributes: i = {},
          styles: o = {}
        } = e;
        return lt({
          type: "text",
          content: t
        }, () => (R("beforeDOMElementCreation", {
          content: t,
          params: e
        }), pe({
          content: t,
          transform: l(l({}, E), n),
          title: a,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(f.cssPrefix, "-layers-text"), ...r]
          }
        })));
      }
    };
  },
  provides(t) {
    t.generateLayersText = function(e, n) {
      const {
        title: a,
        transform: r,
        extra: i
      } = n;
      let o = null, s = null;
      if (Qe) {
        const u = parseInt(getComputedStyle(e).fontSize, 10), c = e.getBoundingClientRect();
        o = c.width / u, s = c.height / u;
      }
      return f.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, pe({
        content: e.innerHTML,
        width: o,
        height: s,
        transform: r,
        title: a,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const Lr = new RegExp('"', "ug"), Ee = [1105920, 1112319], ke = l(l(l(l({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), $n), va), fa), Gt = Object.keys(ke).reduce((t, e) => (t[e.toLowerCase()] = ke[e], t), {}), Mr = Object.keys(Gt).reduce((t, e) => {
  const n = Gt[e];
  return t[e] = n[900] || [...Object.entries(n)][0][1], t;
}, {});
function Fr(t) {
  const e = t.replace(Lr, ""), n = Ra(e, 0), a = n >= Ee[0] && n <= Ee[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Rt(r ? e[0] : e),
    isSecondary: a || r
  };
}
function xr(t, e) {
  const n = t.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(e), r = isNaN(a) ? "normal" : a;
  return (Gt[n] || {})[r] || Mr[n];
}
function Ne(t, e) {
  const n = "".concat(pa).concat(e.replace(":", "-"));
  return new Promise((a, r) => {
    if (t.getAttribute(n) !== null)
      return a();
    const o = W(t.children).filter((m) => m.getAttribute(It) === e)[0], s = F.getComputedStyle(t, e), u = s.getPropertyValue("font-family"), c = u.match(Aa), d = s.getPropertyValue("font-weight"), g = s.getPropertyValue("content");
    if (o && !c)
      return t.removeChild(o), a();
    if (c && g !== "none" && g !== "") {
      const m = s.getPropertyValue("content");
      let y = xr(u, d);
      const {
        value: L,
        isSecondary: T
      } = Fr(m), A = c[0].startsWith("FontAwesome");
      let N = te(y, L), P = N;
      if (A) {
        const _ = Wa(L);
        _.iconName && _.prefix && (N = _.iconName, y = _.prefix);
      }
      if (N && !T && (!o || o.getAttribute(Vt) !== y || o.getAttribute(Kt) !== P)) {
        t.setAttribute(n, P), o && t.removeChild(o);
        const _ = wr(), {
          extra: j
        } = _;
        j.attributes[It] = e, Ht(N, y).then((U) => {
          const qn = ee(l(l({}, _), {}, {
            icons: {
              main: U,
              mask: wn()
            },
            prefix: y,
            iconName: P,
            extra: j,
            watchable: !0
          })), ft = h.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(ft, t.firstChild) : t.appendChild(ft), ft.outerHTML = qn.map((Hn) => J(Hn)).join(`
`), t.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function Ir(t) {
  return Promise.all([Ne(t, "::before"), Ne(t, "::after")]);
}
function Tr(t) {
  return t.parentNode !== document.head && !~ya.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(It) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Se(t) {
  if (O)
    return new Promise((e, n) => {
      const a = W(t.querySelectorAll("*")).filter(Tr).map(Ir), r = ne.begin("searchPseudoElements");
      kn(), Promise.all(a).then(() => {
        r(), Xt(), e();
      }).catch(() => {
        r(), Xt(), n();
      });
    });
}
var zr = {
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.pseudoElementsCallback = Se, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(e) {
      const {
        node: n = h
      } = e;
      f.searchPseudoElements && Se(n);
    };
  }
};
let Ce = !1;
var Dr = {
  mixout() {
    return {
      dom: {
        unwatch() {
          kn(), Ce = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Pe(Ut("mutationObserverCallbacks", {}));
      },
      noAuto() {
        vr();
      },
      watch(t) {
        const {
          observeMutationsRoot: e
        } = t;
        Ce ? Xt() : Pe(Ut("mutationObserverCallbacks", {
          observeMutationsRoot: e
        }));
      }
    };
  }
};
const Oe = (t) => {
  let e = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce((n, a) => {
    const r = a.toLowerCase().split("-"), i = r[0];
    let o = r.slice(1).join("-");
    if (i && o === "h")
      return n.flipX = !0, n;
    if (i && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, e);
};
var Rr = {
  mixout() {
    return {
      parse: {
        transform: (t) => Oe(t)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-transform");
        return n && (t.transform = Oe(n)), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractTransformGrouping = function(e) {
      let {
        main: n,
        transform: a,
        containerWidth: r,
        iconWidth: i
      } = e;
      const o = {
        transform: "translate(".concat(r / 2, " 256)")
      }, s = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(s, " ").concat(u, " ").concat(c)
      }, g = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, m = {
        outer: o,
        inner: d,
        path: g
      };
      return {
        tag: "g",
        attributes: l({}, m.outer),
        children: [{
          tag: "g",
          attributes: l({}, m.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: l(l({}, n.icon.attributes), m.path)
          }]
        }]
      };
    };
  }
};
const gt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Le(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function jr(t) {
  return t.tag === "g" ? t.children : [t];
}
var Ur = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-mask"), a = n ? st(n.split(" ").map((r) => r.trim())) : wn();
        return a.prefix || (a.prefix = x()), t.mask = a, t.maskId = e.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractMask = function(e) {
      let {
        children: n,
        attributes: a,
        main: r,
        mask: i,
        maskId: o,
        transform: s
      } = e;
      const {
        width: u,
        icon: c
      } = r, {
        width: d,
        icon: g
      } = i, m = Fa({
        transform: s,
        containerWidth: d,
        iconWidth: u
      }), y = {
        tag: "rect",
        attributes: l(l({}, gt), {}, {
          fill: "white"
        })
      }, L = c.children ? {
        children: c.children.map(Le)
      } : {}, T = {
        tag: "g",
        attributes: l({}, m.inner),
        children: [Le(l({
          tag: c.tag,
          attributes: l(l({}, c.attributes), m.path)
        }, L))]
      }, A = {
        tag: "g",
        attributes: l({}, m.outer),
        children: [T]
      }, N = "mask-".concat(o || V()), P = "clip-".concat(o || V()), _ = {
        tag: "mask",
        attributes: l(l({}, gt), {}, {
          id: N,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, A]
      }, j = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: P
          },
          children: jr(g)
        }, _]
      };
      return n.push(j, {
        tag: "rect",
        attributes: l({
          fill: "currentColor",
          "clip-path": "url(#".concat(P, ")"),
          mask: "url(#".concat(N, ")")
        }, gt)
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Yr = {
  provides(t) {
    let e = !1;
    F.matchMedia && (e = F.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      const n = [], a = {
        fill: "currentColor"
      }, r = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: l(l({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const i = l(l({}, r), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: l(l({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return e || o.children.push({
        tag: "animate",
        attributes: l(l({}, r), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: l(l({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(o), n.push({
        tag: "path",
        attributes: l(l({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: e ? [] : [{
          tag: "animate",
          attributes: l(l({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), e || n.push({
        tag: "path",
        attributes: l(l({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: l(l({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, qr = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = a, t;
      }
    };
  }
}, Hr = [Ta, Nr, Sr, Cr, Or, zr, Dr, Rr, Ur, Yr, qr];
$a(Hr, {
  mixoutsTo: w
});
w.noAuto;
w.config;
const Wr = w.library;
w.dom;
const Xr = w.parse;
w.findIconDefinition;
w.toHtml;
const Gr = w.icon;
w.layer;
w.text;
w.counter;
const ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, api: w, icon: Gr, library: Wr, parse: Xr }, Symbol.toStringTag, { value: "Module" }));
var ht = {}, Me;
function Br() {
  return Me || (Me = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fasr", n = "arrows-left-right", a = 512, r = 512, i = ["arrows-h"], o = "f07e", s = "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faArrowsLeftRight = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(ht)), ht;
}
var Sn = /* @__PURE__ */ Br();
const Vr = /* @__PURE__ */ p(Sn), Ni = /* @__PURE__ */ b({ __proto__: null, default: Vr }, [Sn]);
var vt = {}, Fe;
function Kr() {
  return Fe || (Fe = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fasr", n = "arrows-up-down", a = 320, r = 512, i = ["arrows-v"], o = "f07d", s = "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faArrowsUpDown = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(vt)), vt;
}
var Cn = /* @__PURE__ */ Kr();
const Qr = /* @__PURE__ */ p(Cn), Si = /* @__PURE__ */ b({ __proto__: null, default: Qr }, [Cn]);
var pt = {}, xe;
function Jr() {
  return xe || (xe = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fasr", n = "expand", a = 448, r = 512, i = [], o = "f065", s = "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faExpand = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(pt)), pt;
}
var On = /* @__PURE__ */ Jr();
const Zr = /* @__PURE__ */ p(On), Ci = /* @__PURE__ */ b({ __proto__: null, default: Zr }, [On]);
var bt = {}, Ie;
function $r() {
  return Ie || (Ie = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fasr", n = "plus-large", a = 512, r = 512, i = [], o = "e59e", s = "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faPlusLarge = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(bt)), bt;
}
var Ln = /* @__PURE__ */ $r();
const ti = /* @__PURE__ */ p(Ln), Oi = /* @__PURE__ */ b({ __proto__: null, default: ti }, [Ln]);
var yt = {}, Te;
function ei() {
  return Te || (Te = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "calculator", a = 384, r = 512, i = [128425], o = "f1ec", s = "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faCalculator = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(yt)), yt;
}
var Mn = /* @__PURE__ */ ei();
const ni = /* @__PURE__ */ p(Mn), Li = /* @__PURE__ */ b({ __proto__: null, default: ni }, [Mn]);
var wt = {}, ze;
function ai() {
  return ze || (ze = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "expand", a = 448, r = 512, i = [], o = "f065", s = "M32 32L0 32 0 64l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 32zM64 352l0-32L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 32l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM448 352l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faExpand = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(wt)), wt;
}
var Fn = /* @__PURE__ */ ai();
const ri = /* @__PURE__ */ p(Fn), Mi = /* @__PURE__ */ b({ __proto__: null, default: ri }, [Fn]);
var Pt = {}, De;
function ii() {
  return De || (De = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "files", a = 448, r = 512, i = [], o = "e178", s = "M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faFiles = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(Pt)), Pt;
}
var xn = /* @__PURE__ */ ii();
const oi = /* @__PURE__ */ p(xn), Fi = /* @__PURE__ */ b({ __proto__: null, default: oi }, [xn]);
var At = {}, Re;
function si() {
  return Re || (Re = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "hammer", a = 576, r = 512, i = [128296], o = "f6e3", s = "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faHammer = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(At)), At;
}
var In = /* @__PURE__ */ si();
const li = /* @__PURE__ */ p(In), xi = /* @__PURE__ */ b({ __proto__: null, default: li }, [In]);
var _t = {}, je;
function fi() {
  return je || (je = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "hammer-brush", a = 640, r = 512, i = [], o = "e620", s = "M256 0L144 0C64.5 0 0 64.5 0 144l0 16 80-32 32 32 144 0 0-32 32 0 0 32 64 0L352 0 288 0l0 32-32 0 0-32zM96 512l128 0L208 192l-96 0L96 512zm320 0l32-96 32 96 160 0 0-192-288 0 0 192 64 0zM352 256l0 32 288 0 0-32-96-64L544 0 448 0l0 192-96 64zM496 64a16 16 0 1 1 0-32 16 16 0 1 1 0 32z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faHammerBrush = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(_t)), _t;
}
var Tn = /* @__PURE__ */ fi();
const ci = /* @__PURE__ */ p(Tn), Ii = /* @__PURE__ */ b({ __proto__: null, default: ci }, [Tn]);
var Et = {}, Ue;
function ui() {
  return Ue || (Ue = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "image", a = 512, r = 512, i = [], o = "f03e", s = "M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faImage = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(Et)), Et;
}
var zn = /* @__PURE__ */ ui();
const di = /* @__PURE__ */ p(zn), Ti = /* @__PURE__ */ b({ __proto__: null, default: di }, [zn]);
var kt = {}, Nt = {}, Ye;
function mi() {
  return Ye || (Ye = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "circle-info", a = 512, r = 512, i = ["info-circle"], o = "f05a", s = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0-24 0 0-48 24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0zm72-144l-64 0 0-64 64 0 0 64z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faCircleInfo = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(Nt)), Nt;
}
var qe;
function gi() {
  return qe || (qe = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = /* @__PURE__ */ mi();
    t.definition = {
      prefix: e.prefix,
      iconName: e.iconName,
      icon: [
        e.width,
        e.height,
        e.aliases,
        e.unicode,
        e.svgPathData
      ]
    }, t.faInfoCircle = t.definition, t.prefix = e.prefix, t.iconName = e.iconName, t.width = e.width, t.height = e.height, t.ligatures = e.aliases, t.unicode = e.unicode, t.svgPathData = e.svgPathData, t.aliases = e.aliases;
  })(kt)), kt;
}
var Dn = /* @__PURE__ */ gi();
const hi = /* @__PURE__ */ p(Dn), zi = /* @__PURE__ */ b({ __proto__: null, default: hi }, [Dn]);
var St = {}, He;
function vi() {
  return He || (He = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "plus-large", a = 512, r = 512, i = [], o = "e59e", s = "M288 32l0-32L224 0l0 32 0 192L32 224 0 224l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-192 192 0 32 0 0-64-32 0-192 0 0-192z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faPlusLarge = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(St)), St;
}
var Rn = /* @__PURE__ */ vi();
const pi = /* @__PURE__ */ p(Rn), Di = /* @__PURE__ */ b({ __proto__: null, default: pi }, [Rn]);
var Ct = {}, We;
function bi() {
  return We || (We = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "spray-can", a = 512, r = 512, i = [], o = "f5bd", s = "M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faSprayCan = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(Ct)), Ct;
}
var jn = /* @__PURE__ */ bi();
const yi = /* @__PURE__ */ p(jn), Ri = /* @__PURE__ */ b({ __proto__: null, default: yi }, [jn]);
var Ot = {}, Xe;
function wi() {
  return Xe || (Xe = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "trash", a = 448, r = 512, i = [], o = "f1f8", s = "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faTrash = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(Ot)), Ot;
}
var Un = /* @__PURE__ */ wi();
const Pi = /* @__PURE__ */ p(Un), ji = /* @__PURE__ */ b({ __proto__: null, default: Pi }, [Un]);
var Lt = {}, Ge;
function Ai() {
  return Ge || (Ge = 1, (function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = "fass", n = "xmark", a = 384, r = 512, i = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], o = "f00d", s = "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z";
    t.definition = {
      prefix: e,
      iconName: n,
      icon: [
        a,
        r,
        i,
        o,
        s
      ]
    }, t.faXmark = t.definition, t.prefix = e, t.iconName = n, t.width = a, t.height = r, t.ligatures = i, t.unicode = o, t.svgPathData = s, t.aliases = i;
  })(Lt)), Lt;
}
var Yn = /* @__PURE__ */ Ai();
const _i = /* @__PURE__ */ p(Yn), Ui = /* @__PURE__ */ b({ __proto__: null, default: _i }, [Yn]);
export {
  Si as a,
  Ci as b,
  Oi as c,
  Li as d,
  Mi as e,
  Ni as f,
  Fi as g,
  xi as h,
  Ii as i,
  Ti as j,
  zi as k,
  Di as l,
  Ri as m,
  ji as n,
  Ui as o,
  Xr as p,
  Gr as q,
  ki as r
};

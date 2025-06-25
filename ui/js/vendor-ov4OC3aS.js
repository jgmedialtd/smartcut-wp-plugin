var H0 = Object.defineProperty;
var K0 = (e, t, r) => t in e ? H0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Pl = (e, t, r) => K0(e, typeof t != "symbol" ? t + "" : t, r);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Y0(e, t, r) {
  return (t = Z0(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Nl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nl(Object(r), !0).forEach(function(n) {
      Y0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z0(e) {
  var t = X0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const Ml = () => {
};
let zc = {}, $g = {}, Wg = null, Gg = {
  mark: Ml,
  measure: Ml
};
try {
  typeof window < "u" && (zc = window), typeof document < "u" && ($g = document), typeof MutationObserver < "u" && (Wg = MutationObserver), typeof performance < "u" && (Gg = performance);
} catch {
}
const {
  userAgent: Dl = ""
} = zc.navigator || {}, yr = zc, De = $g, Fl = Wg, ci = Gg;
yr.document;
const nr = !!De.documentElement && !!De.head && typeof De.addEventListener == "function" && typeof De.createElement == "function", Vg = ~Dl.indexOf("MSIE") || ~Dl.indexOf("Trident/");
var J0 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Q0 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Hg = {
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
}, eb = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Kg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], it = "classic", $i = "duotone", tb = "sharp", rb = "sharp-duotone", Yg = [it, $i, tb, rb], nb = {
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
}, ib = {
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
}, ab = /* @__PURE__ */ new Map([["classic", {
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
}]]), sb = {
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
}, ob = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ll = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, ub = ["kit"], cb = {
  kit: {
    "fa-kit": "fak"
  }
}, fb = ["fak", "fakd"], lb = {
  kit: {
    fak: "fa-kit"
  }
}, Bl = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, fi = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, hb = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], db = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], pb = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, mb = {
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
}, gb = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Uu = {
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
}, vb = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], $u = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...hb, ...vb], yb = ["solid", "regular", "light", "thin", "duotone", "brands"], Xg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], bb = Xg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), _b = [...Object.keys(gb), ...yb, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", fi.GROUP, fi.SWAP_OPACITY, fi.PRIMARY, fi.SECONDARY].concat(Xg.map((e) => "".concat(e, "x"))).concat(bb.map((e) => "w-".concat(e))), wb = {
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
const tr = "___FONT_AWESOME___", Wu = 16, Zg = "fa", Jg = "svg-inline--fa", Nr = "data-fa-i2svg", Gu = "data-fa-pseudo-element", Eb = "data-fa-pseudo-element-pending", qc = "data-prefix", Uc = "data-icon", jl = "fontawesome-i2svg", xb = "async", Sb = ["HTML", "HEAD", "STYLE", "SCRIPT"], Qg = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Wn(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[it];
    }
  });
}
const ev = oe({}, Hg);
ev[it] = oe(oe(oe(oe({}, {
  "fa-duotone": "duotone"
}), Hg[it]), Ll.kit), Ll["kit-duotone"]);
const Ob = Wn(ev), Vu = oe({}, sb);
Vu[it] = oe(oe(oe(oe({}, {
  duotone: "fad"
}), Vu[it]), Bl.kit), Bl["kit-duotone"]);
const zl = Wn(Vu), Hu = oe({}, Uu);
Hu[it] = oe(oe({}, Hu[it]), lb.kit);
const $c = Wn(Hu), Ku = oe({}, mb);
Ku[it] = oe(oe({}, Ku[it]), cb.kit);
Wn(Ku);
const Tb = J0, tv = "fa-layers-text", Cb = Q0, Ab = oe({}, nb);
Wn(Ab);
const Rb = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Pa = eb, Ib = [...ub, ..._b], Pn = yr.FontAwesomeConfig || {};
function kb(e) {
  var t = De.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Pb(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
De && typeof De.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const i = Pb(kb(r));
  i != null && (Pn[n] = i);
});
const rv = {
  styleDefault: "solid",
  familyDefault: it,
  cssPrefix: Zg,
  replacementClass: Jg,
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
Pn.familyPrefix && (Pn.cssPrefix = Pn.familyPrefix);
const nn = oe(oe({}, rv), Pn);
nn.autoReplaceSvg || (nn.observeMutations = !1);
const ge = {};
Object.keys(rv).forEach((e) => {
  Object.defineProperty(ge, e, {
    enumerable: !0,
    set: function(t) {
      nn[e] = t, Nn.forEach((r) => r(ge));
    },
    get: function() {
      return nn[e];
    }
  });
});
Object.defineProperty(ge, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    nn.cssPrefix = e, Nn.forEach((t) => t(ge));
  },
  get: function() {
    return nn.cssPrefix;
  }
});
yr.FontAwesomeConfig = ge;
const Nn = [];
function Nb(e) {
  return Nn.push(e), () => {
    Nn.splice(Nn.indexOf(e), 1);
  };
}
const cr = Wu, jt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Mb(e) {
  if (!e || !nr)
    return;
  const t = De.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const r = De.head.childNodes;
  let n = null;
  for (let i = r.length - 1; i > -1; i--) {
    const a = r[i], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (n = a);
  }
  return De.head.insertBefore(t, n), e;
}
const Db = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Fn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Db[Math.random() * 62 | 0];
  return t;
}
function fn(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function Wc(e) {
  return e.classList ? fn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function nv(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Fb(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(nv(e[r]), '" '), "").trim();
}
function Wi(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function Gc(e) {
  return e.size !== jt.size || e.x !== jt.x || e.y !== jt.y || e.rotate !== jt.rotate || e.flipX || e.flipY;
}
function Lb(e) {
  let {
    transform: t,
    containerWidth: r,
    iconWidth: n
  } = e;
  const i = {
    transform: "translate(".concat(r / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: u,
    path: c
  };
}
function Bb(e) {
  let {
    transform: t,
    width: r = Wu,
    height: n = Wu,
    startCentered: i = !1
  } = e, a = "";
  return i && Vg ? a += "translate(".concat(t.x / cr - r / 2, "em, ").concat(t.y / cr - n / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / cr, "em), calc(-50% + ").concat(t.y / cr, "em)) ") : a += "translate(".concat(t.x / cr, "em, ").concat(t.y / cr, "em) "), a += "scale(".concat(t.size / cr * (t.flipX ? -1 : 1), ", ").concat(t.size / cr * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var jb = `:root, :host {
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
function iv() {
  const e = Zg, t = Jg, r = ge.cssPrefix, n = ge.replacementClass;
  let i = jb;
  if (r !== e || n !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
let ql = !1;
function Na() {
  ge.autoAddCss && !ql && (Mb(iv()), ql = !0);
}
var zb = {
  mixout() {
    return {
      dom: {
        css: iv,
        insertCss: Na
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Na();
      },
      beforeI2svg() {
        Na();
      }
    };
  }
};
const rr = yr || {};
rr[tr] || (rr[tr] = {});
rr[tr].styles || (rr[tr].styles = {});
rr[tr].hooks || (rr[tr].hooks = {});
rr[tr].shims || (rr[tr].shims = []);
var zt = rr[tr];
const av = [], sv = function() {
  De.removeEventListener("DOMContentLoaded", sv), Ci = 1, av.map((e) => e());
};
let Ci = !1;
nr && (Ci = (De.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(De.readyState), Ci || De.addEventListener("DOMContentLoaded", sv));
function qb(e) {
  nr && (Ci ? setTimeout(e, 0) : av.push(e));
}
function Gn(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? nv(e) : "<".concat(t, " ").concat(Fb(r), ">").concat(n.map(Gn).join(""), "</").concat(t, ">");
}
function Ul(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Ma = function(t, r, n, i) {
  var a = Object.keys(t), o = a.length, s = r, u, c, l;
  for (n === void 0 ? (u = 1, l = t[a[0]]) : (u = 0, l = n); u < o; u++)
    c = a[u], l = s(l, t[c], c, t);
  return l;
};
function Ub(e) {
  const t = [];
  let r = 0;
  const n = e.length;
  for (; r < n; ) {
    const i = e.charCodeAt(r++);
    if (i >= 55296 && i <= 56319 && r < n) {
      const a = e.charCodeAt(r++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), r--);
    } else
      t.push(i);
  }
  return t;
}
function Yu(e) {
  const t = Ub(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function $b(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), i;
  return n >= 55296 && n <= 56319 && r > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function $l(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function Xu(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = $l(t);
  typeof zt.hooks.addPack == "function" && !n ? zt.hooks.addPack(e, $l(t)) : zt.styles[e] = oe(oe({}, zt.styles[e] || {}), i), e === "fas" && Xu("fa", t);
}
const {
  styles: Ln,
  shims: Wb
} = zt, ov = Object.keys($c), Gb = ov.reduce((e, t) => (e[t] = Object.keys($c[t]), e), {});
let Vc = null, uv = {}, cv = {}, fv = {}, lv = {}, hv = {};
function Vb(e) {
  return ~Ib.indexOf(e);
}
function Hb(e, t) {
  const r = t.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === e && i !== "" && !Vb(i) ? i : null;
}
const dv = () => {
  const e = (n) => Ma(Ln, (i, a, o) => (i[o] = Ma(a, n, {}), i), {});
  uv = e((n, i, a) => (i[3] && (n[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    n[s.toString(16)] = a;
  }), n)), cv = e((n, i, a) => (n[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    n[s] = a;
  }), n)), hv = e((n, i, a) => {
    const o = i[2];
    return n[a] = a, o.forEach((s) => {
      n[s] = a;
    }), n;
  });
  const t = "far" in Ln || ge.autoFetchSvg, r = Ma(Wb, (n, i) => {
    const a = i[0];
    let o = i[1];
    const s = i[2];
    return o === "far" && !t && (o = "fas"), typeof a == "string" && (n.names[a] = {
      prefix: o,
      iconName: s
    }), typeof a == "number" && (n.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: s
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  fv = r.names, lv = r.unicodes, Vc = Gi(ge.styleDefault, {
    family: ge.familyDefault
  });
};
Nb((e) => {
  Vc = Gi(e.styleDefault, {
    family: ge.familyDefault
  });
});
dv();
function Hc(e, t) {
  return (uv[e] || {})[t];
}
function Kb(e, t) {
  return (cv[e] || {})[t];
}
function Ar(e, t) {
  return (hv[e] || {})[t];
}
function pv(e) {
  return fv[e] || {
    prefix: null,
    iconName: null
  };
}
function Yb(e) {
  const t = lv[e], r = Hc("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function br() {
  return Vc;
}
const mv = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Xb(e) {
  let t = it;
  const r = ov.reduce((n, i) => (n[i] = "".concat(ge.cssPrefix, "-").concat(i), n), {});
  return Yg.forEach((n) => {
    (e.includes(r[n]) || e.some((i) => Gb[n].includes(i))) && (t = n);
  }), t;
}
function Gi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = it
  } = t, n = Ob[r][e];
  if (r === $i && !e)
    return "fad";
  const i = zl[r][e] || zl[r][n], a = e in zt.styles ? e : null;
  return i || a || null;
}
function Zb(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const i = Hb(ge.cssPrefix, n);
    i ? r = i : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function Wl(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function Vi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const i = $u.concat(db), a = Wl(e.filter((f) => i.includes(f))), o = Wl(e.filter((f) => !$u.includes(f))), s = a.filter((f) => (n = f, !Kg.includes(f))), [u = null] = s, c = Xb(a), l = oe(oe({}, Zb(o)), {}, {
    prefix: Gi(u, {
      family: c
    })
  });
  return oe(oe(oe({}, l), t1({
    values: e,
    family: c,
    styles: Ln,
    config: ge,
    canonical: l,
    givenPrefix: n
  })), Jb(r, n, l));
}
function Jb(e, t, r) {
  let {
    prefix: n,
    iconName: i
  } = r;
  if (e || !n || !i)
    return {
      prefix: n,
      iconName: i
    };
  const a = t === "fa" ? pv(i) : {}, o = Ar(n, i);
  return i = a.iconName || o || i, n = a.prefix || n, n === "far" && !Ln.far && Ln.fas && !ge.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const Qb = Yg.filter((e) => e !== it || e !== $i), e1 = Object.keys(Uu).filter((e) => e !== it).map((e) => Object.keys(Uu[e])).flat();
function t1(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = r === $i, u = t.includes("fa-duotone") || t.includes("fad"), c = o.familyDefault === "duotone", l = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!s && (u || c || l) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Qb.includes(r) && (Object.keys(a).find((d) => e1.includes(d)) || o.autoFetchSvg)) {
    const d = ab.get(r).defaultShortPrefixId;
    n.prefix = d, n.iconName = Ar(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = br() || "fas"), n;
}
class r1 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const i = r.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = oe(oe({}, this.definitions[a] || {}), i[a]), Xu(a, i[a]);
      const o = $c[it][a];
      o && Xu(o, i[a]), dv();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, r) {
    const n = r.prefix && r.iconName && r.icon ? {
      0: r
    } : r;
    return Object.keys(n).map((i) => {
      const {
        prefix: a,
        iconName: o,
        icon: s
      } = n[i], u = s[2];
      t[a] || (t[a] = {}), u.length > 0 && u.forEach((c) => {
        typeof c == "string" && (t[a][c] = s);
      }), t[a][o] = s;
    }), t;
  }
}
let Gl = [], Qr = {};
const tn = {}, n1 = Object.keys(tn);
function i1(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return Gl = e, Qr = {}, Object.keys(tn).forEach((n) => {
    n1.indexOf(n) === -1 && delete tn[n];
  }), Gl.forEach((n) => {
    const i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (r[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        r[a] || (r[a] = {}), r[a][o] = i[a][o];
      });
    }), n.hooks) {
      const a = n.hooks();
      Object.keys(a).forEach((o) => {
        Qr[o] || (Qr[o] = []), Qr[o].push(a[o]);
      });
    }
    n.provides && n.provides(tn);
  }), r;
}
function Zu(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  return (Qr[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...n]);
  }), t;
}
function Mr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  (Qr[e] || []).forEach((a) => {
    a.apply(null, r);
  });
}
function _r() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return tn[e] ? tn[e].apply(null, t) : void 0;
}
function Ju(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || br();
  if (t)
    return t = Ar(r, t) || t, Ul(gv.definitions, r, t) || Ul(zt.styles, r, t);
}
const gv = new r1(), a1 = () => {
  ge.autoReplaceSvg = !1, ge.observeMutations = !1, Mr("noAuto");
}, s1 = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return nr ? (Mr("beforeI2svg", e), _r("pseudoElements2svg", e), _r("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ge.autoReplaceSvg === !1 && (ge.autoReplaceSvg = !0), ge.observeMutations = !0, qb(() => {
      u1({
        autoReplaceSvgRoot: t
      }), Mr("watch", e);
    });
  }
}, o1 = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Ar(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Gi(e[0]);
      return {
        prefix: r,
        iconName: Ar(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ge.cssPrefix, "-")) > -1 || e.match(Tb))) {
      const t = Vi(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || br(),
        iconName: Ar(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = br();
      return {
        prefix: t,
        iconName: Ar(t, e) || e
      };
    }
  }
}, yt = {
  noAuto: a1,
  config: ge,
  dom: s1,
  parse: o1,
  library: gv,
  findIconDefinition: Ju,
  toHtml: Gn
}, u1 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = De
  } = e;
  (Object.keys(zt.styles).length > 0 || ge.autoFetchSvg) && nr && ge.autoReplaceSvg && yt.dom.i2svg({
    node: t
  });
};
function Hi(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => Gn(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!nr) return;
      const r = De.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function c1(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (Gc(o) && r.found && !n.found) {
    const {
      width: s,
      height: u
    } = r, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = Wi(oe(oe({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function f1(e) {
  let {
    prefix: t,
    iconName: r,
    children: n,
    attributes: i,
    symbol: a
  } = e;
  const o = a === !0 ? "".concat(t, "-").concat(ge.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: oe(oe({}, i), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function Kc(e) {
  const {
    icons: {
      main: t,
      mask: r
    },
    prefix: n,
    iconName: i,
    transform: a,
    symbol: o,
    title: s,
    maskId: u,
    titleId: c,
    extra: l,
    watchable: f = !1
  } = e, {
    width: d,
    height: h
  } = r.found ? r : t, m = fb.includes(n), p = [ge.replacementClass, i ? "".concat(ge.cssPrefix, "-").concat(i) : ""].filter((C) => l.classes.indexOf(C) === -1).filter((C) => C !== "" || !!C).concat(l.classes).join(" ");
  let b = {
    children: [],
    attributes: oe(oe({}, l.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: p,
      role: l.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(d, " ").concat(h)
    })
  };
  const y = m && !~l.classes.indexOf("fa-fw") ? {
    width: "".concat(d / h * 16 * 0.0625, "em")
  } : {};
  f && (b.attributes[Nr] = ""), s && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(c || Fn())
    },
    children: [s]
  }), delete b.attributes.title);
  const _ = oe(oe({}, b), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: u,
    transform: a,
    symbol: o,
    styles: oe(oe({}, y), l.styles)
  }), {
    children: E,
    attributes: O
  } = r.found && t.found ? _r("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : _r("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = E, _.attributes = O, o ? f1(_) : c1(_);
}
function Vl(e) {
  const {
    content: t,
    width: r,
    height: n,
    transform: i,
    title: a,
    extra: o,
    watchable: s = !1
  } = e, u = oe(oe(oe({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (u[Nr] = "");
  const c = oe({}, o.styles);
  Gc(i) && (c.transform = Bb({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  const l = Wi(c);
  l.length > 0 && (u.style = l);
  const f = [];
  return f.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), a && f.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), f;
}
function l1(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, i = oe(oe(oe({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Wi(n.styles);
  a.length > 0 && (i.style = a);
  const o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
const {
  styles: Da
} = zt;
function Qu(e) {
  const t = e[0], r = e[1], [n] = e.slice(4);
  let i = null;
  return Array.isArray(n) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(ge.cssPrefix, "-").concat(Pa.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ge.cssPrefix, "-").concat(Pa.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ge.cssPrefix, "-").concat(Pa.PRIMARY),
        fill: "currentColor",
        d: n[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: n
    }
  }, {
    found: !0,
    width: t,
    height: r,
    icon: i
  };
}
const h1 = {
  found: !1,
  width: 512,
  height: 512
};
function d1(e, t) {
  !Qg && !ge.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ec(e, t) {
  let r = t;
  return t === "fa" && ge.styleDefault !== null && (t = br()), new Promise((n, i) => {
    if (r === "fa") {
      const a = pv(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Da[t] && Da[t][e]) {
      const a = Da[t][e];
      return n(Qu(a));
    }
    d1(e, t), n(oe(oe({}, h1), {}, {
      icon: ge.showMissingIcons && e ? _r("missingIconAbstract") || {} : {}
    }));
  });
}
const Hl = () => {
}, tc = ge.measurePerformance && ci && ci.mark && ci.measure ? ci : {
  mark: Hl,
  measure: Hl
}, Rn = 'FA "6.7.2"', p1 = (e) => (tc.mark("".concat(Rn, " ").concat(e, " begins")), () => vv(e)), vv = (e) => {
  tc.mark("".concat(Rn, " ").concat(e, " ends")), tc.measure("".concat(Rn, " ").concat(e), "".concat(Rn, " ").concat(e, " begins"), "".concat(Rn, " ").concat(e, " ends"));
};
var Yc = {
  begin: p1,
  end: vv
};
const _i = () => {
};
function Kl(e) {
  return typeof (e.getAttribute ? e.getAttribute(Nr) : null) == "string";
}
function m1(e) {
  const t = e.getAttribute ? e.getAttribute(qc) : null, r = e.getAttribute ? e.getAttribute(Uc) : null;
  return t && r;
}
function g1(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ge.replacementClass);
}
function v1() {
  return ge.autoReplaceSvg === !0 ? wi.replace : wi[ge.autoReplaceSvg] || wi.replace;
}
function y1(e) {
  return De.createElementNS("http://www.w3.org/2000/svg", e);
}
function b1(e) {
  return De.createElement(e);
}
function yv(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? y1 : b1
  } = t;
  if (typeof e == "string")
    return De.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    n.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    n.appendChild(yv(a, {
      ceFn: r
    }));
  }), n;
}
function _1(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const wi = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(yv(r), t);
      }), t.getAttribute(Nr) === null && ge.keepOriginalSource) {
        let r = De.createComment(_1(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~Wc(t).indexOf(ge.replacementClass))
      return wi.replace(e);
    const n = new RegExp("".concat(ge.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const a = r[0].attributes.class.split(" ").reduce((o, s) => (s === ge.replacementClass || s.match(n) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = r.map((a) => Gn(a)).join(`
`);
    t.setAttribute(Nr, ""), t.innerHTML = i;
  }
};
function Yl(e) {
  e();
}
function bv(e, t) {
  const r = typeof t == "function" ? t : _i;
  if (e.length === 0)
    r();
  else {
    let n = Yl;
    ge.mutateApproach === xb && (n = yr.requestAnimationFrame || Yl), n(() => {
      const i = v1(), a = Yc.begin("mutate");
      e.map(i), a(), r();
    });
  }
}
let Xc = !1;
function _v() {
  Xc = !0;
}
function rc() {
  Xc = !1;
}
let Ai = null;
function Xl(e) {
  if (!Fl || !ge.observeMutations)
    return;
  const {
    treeCallback: t = _i,
    nodeCallback: r = _i,
    pseudoElementsCallback: n = _i,
    observeMutationsRoot: i = De
  } = e;
  Ai = new Fl((a) => {
    if (Xc) return;
    const o = br();
    fn(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Kl(s.addedNodes[0]) && (ge.searchPseudoElements && n(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && ge.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && Kl(s.target) && ~Rb.indexOf(s.attributeName))
        if (s.attributeName === "class" && m1(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = Vi(Wc(s.target));
          s.target.setAttribute(qc, u || o), c && s.target.setAttribute(Uc, c);
        } else g1(s.target) && r(s.target);
    });
  }), nr && Ai.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function w1() {
  Ai && Ai.disconnect();
}
function E1(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function x1(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = Vi(Wc(e));
  return i.prefix || (i.prefix = br()), t && r && (i.prefix = t, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Kb(i.prefix, e.innerText) || Hc(i.prefix, Yu(e.innerText))), !i.iconName && ge.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function S1(e) {
  const t = fn(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return ge.autoA11y && (r ? t["aria-labelledby"] = "".concat(ge.replacementClass, "-title-").concat(n || Fn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function O1() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: jt,
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
function Zl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = x1(e), a = S1(e), o = Zu("parseNodeAttributes", {}, e);
  let s = t.styleParser ? E1(e) : [];
  return oe({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: jt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: a
    }
  }, o);
}
const {
  styles: T1
} = zt;
function wv(e) {
  const t = ge.autoReplaceSvg === "nest" ? Zl(e, {
    styleParser: !1
  }) : Zl(e);
  return ~t.extra.classes.indexOf(tv) ? _r("generateLayersText", e, t) : _r("generateSvgReplacementMutation", e, t);
}
function C1() {
  return [...ob, ...$u];
}
function Jl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!nr) return Promise.resolve();
  const r = De.documentElement.classList, n = (l) => r.add("".concat(jl, "-").concat(l)), i = (l) => r.remove("".concat(jl, "-").concat(l)), a = ge.autoFetchSvg ? C1() : Kg.concat(Object.keys(T1));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(tv, ":not([").concat(Nr, "])")].concat(a.map((l) => ".".concat(l, ":not([").concat(Nr, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = fn(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  const u = Yc.begin("onTree"), c = s.reduce((l, f) => {
    try {
      const d = wv(f);
      d && l.push(d);
    } catch (d) {
      Qg || d.name === "MissingIcon" && console.error(d);
    }
    return l;
  }, []);
  return new Promise((l, f) => {
    Promise.all(c).then((d) => {
      bv(d, () => {
        n("active"), n("complete"), i("pending"), typeof t == "function" && t(), u(), l();
      });
    }).catch((d) => {
      u(), f(d);
    });
  });
}
function A1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  wv(e).then((r) => {
    r && bv([r], t);
  });
}
function R1(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : Ju(t || {});
    let {
      mask: i
    } = r;
    return i && (i = (i || {}).icon ? i : Ju(i || {})), e(n, oe(oe({}, r), {}, {
      mask: i
    }));
  };
}
const I1 = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = jt,
    symbol: n = !1,
    mask: i = null,
    maskId: a = null,
    title: o = null,
    titleId: s = null,
    classes: u = [],
    attributes: c = {},
    styles: l = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: d,
    icon: h
  } = e;
  return Hi(oe({
    type: "icon"
  }, e), () => (Mr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ge.autoA11y && (o ? c["aria-labelledby"] = "".concat(ge.replacementClass, "-title-").concat(s || Fn()) : (c["aria-hidden"] = "true", c.focusable = "false")), Kc({
    icons: {
      main: Qu(h),
      mask: i ? Qu(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: d,
    transform: oe(oe({}, jt), r),
    symbol: n,
    title: o,
    maskId: a,
    titleId: s,
    extra: {
      attributes: c,
      styles: l,
      classes: u
    }
  })));
};
var k1 = {
  mixout() {
    return {
      icon: R1(I1)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Jl, e.nodeCallback = A1, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: r = De,
        callback: n = () => {
        }
      } = t;
      return Jl(r, n);
    }, e.generateSvgReplacementMutation = function(t, r) {
      const {
        iconName: n,
        title: i,
        titleId: a,
        prefix: o,
        transform: s,
        symbol: u,
        mask: c,
        maskId: l,
        extra: f
      } = r;
      return new Promise((d, h) => {
        Promise.all([ec(n, o), c.iconName ? ec(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [p, b] = m;
          d([t, Kc({
            icons: {
              main: p,
              mask: b
            },
            prefix: o,
            iconName: n,
            transform: s,
            symbol: u,
            maskId: l,
            title: i,
            titleId: a,
            extra: f,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: r,
        attributes: n,
        main: i,
        transform: a,
        styles: o
      } = t;
      const s = Wi(o);
      s.length > 0 && (n.style = s);
      let u;
      return Gc(a) && (u = _r("generateAbstractTransformGrouping", {
        main: i,
        transform: a,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, P1 = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = t;
        return Hi({
          type: "layer"
        }, () => {
          Mr("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let n = [];
          return e((i) => {
            Array.isArray(i) ? i.map((a) => {
              n = n.concat(a.abstract);
            }) : n = n.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(ge.cssPrefix, "-layers"), ...r].join(" ")
            },
            children: n
          }];
        });
      }
    };
  }
}, N1 = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: r = null,
          classes: n = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return Hi({
          type: "counter",
          content: e
        }, () => (Mr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), l1({
          content: e.toString(),
          title: r,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(ge.cssPrefix, "-layers-counter"), ...n]
          }
        })));
      }
    };
  }
}, M1 = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = jt,
          title: n = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return Hi({
          type: "text",
          content: e
        }, () => (Mr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Vl({
          content: e,
          transform: oe(oe({}, jt), r),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(ge.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, r) {
      const {
        title: n,
        transform: i,
        extra: a
      } = r;
      let o = null, s = null;
      if (Vg) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / u, s = c.height / u;
      }
      return ge.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Vl({
        content: t.innerHTML,
        width: o,
        height: s,
        transform: i,
        title: n,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const D1 = new RegExp('"', "ug"), Ql = [1105920, 1112319], eh = oe(oe(oe(oe({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), ib), wb), pb), nc = Object.keys(eh).reduce((e, t) => (e[t.toLowerCase()] = eh[t], e), {}), F1 = Object.keys(nc).reduce((e, t) => {
  const r = nc[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function L1(e) {
  const t = e.replace(D1, ""), r = $b(t, 0), n = r >= Ql[0] && r <= Ql[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Yu(i ? t[0] : t),
    isSecondary: n || i
  };
}
function B1(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), i = isNaN(n) ? "normal" : n;
  return (nc[r] || {})[i] || F1[r];
}
function th(e, t) {
  const r = "".concat(Eb).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null)
      return n();
    const o = fn(e.children).filter((d) => d.getAttribute(Gu) === t)[0], s = yr.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), c = u.match(Cb), l = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), n();
    if (c && f !== "none" && f !== "") {
      const d = s.getPropertyValue("content");
      let h = B1(u, l);
      const {
        value: m,
        isSecondary: p
      } = L1(d), b = c[0].startsWith("FontAwesome");
      let y = Hc(h, m), _ = y;
      if (b) {
        const E = Yb(m);
        E.iconName && E.prefix && (y = E.iconName, h = E.prefix);
      }
      if (y && !p && (!o || o.getAttribute(qc) !== h || o.getAttribute(Uc) !== _)) {
        e.setAttribute(r, _), o && e.removeChild(o);
        const E = O1(), {
          extra: O
        } = E;
        O.attributes[Gu] = t, ec(y, h).then((C) => {
          const B = Kc(oe(oe({}, E), {}, {
            icons: {
              main: C,
              mask: mv()
            },
            prefix: h,
            iconName: _,
            extra: O,
            watchable: !0
          })), I = De.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(I, e.firstChild) : e.appendChild(I), I.outerHTML = B.map((S) => Gn(S)).join(`
`), e.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function j1(e) {
  return Promise.all([th(e, "::before"), th(e, "::after")]);
}
function z1(e) {
  return e.parentNode !== document.head && !~Sb.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Gu) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function rh(e) {
  if (nr)
    return new Promise((t, r) => {
      const n = fn(e.querySelectorAll("*")).filter(z1).map(j1), i = Yc.begin("searchPseudoElements");
      _v(), Promise.all(n).then(() => {
        i(), rc(), t();
      }).catch(() => {
        i(), rc(), r();
      });
    });
}
var q1 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = rh, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = De
      } = t;
      ge.searchPseudoElements && rh(r);
    };
  }
};
let nh = !1;
var U1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          _v(), nh = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Xl(Zu("mutationObserverCallbacks", {}));
      },
      noAuto() {
        w1();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        nh ? rc() : Xl(Zu("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const ih = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((r, n) => {
    const i = n.toLowerCase().split("-"), a = i[0];
    let o = i.slice(1).join("-");
    if (a && o === "h")
      return r.flipX = !0, r;
    if (a && o === "v")
      return r.flipY = !0, r;
    if (o = parseFloat(o), isNaN(o))
      return r;
    switch (a) {
      case "grow":
        r.size = r.size + o;
        break;
      case "shrink":
        r.size = r.size - o;
        break;
      case "left":
        r.x = r.x - o;
        break;
      case "right":
        r.x = r.x + o;
        break;
      case "up":
        r.y = r.y - o;
        break;
      case "down":
        r.y = r.y + o;
        break;
      case "rotate":
        r.rotate = r.rotate + o;
        break;
    }
    return r;
  }, t);
};
var $1 = {
  mixout() {
    return {
      parse: {
        transform: (e) => ih(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = ih(r)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: r,
        transform: n,
        containerWidth: i,
        iconWidth: a
      } = t;
      const o = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), u = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), c = "rotate(".concat(n.rotate, " 0 0)"), l = {
        transform: "".concat(s, " ").concat(u, " ").concat(c)
      }, f = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, d = {
        outer: o,
        inner: l,
        path: f
      };
      return {
        tag: "g",
        attributes: oe({}, d.outer),
        children: [{
          tag: "g",
          attributes: oe({}, d.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: oe(oe({}, r.icon.attributes), d.path)
          }]
        }]
      };
    };
  }
};
const Fa = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ah(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function W1(e) {
  return e.tag === "g" ? e.children : [e];
}
var G1 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? Vi(r.split(" ").map((i) => i.trim())) : mv();
        return n.prefix || (n.prefix = br()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: r,
        attributes: n,
        main: i,
        mask: a,
        maskId: o,
        transform: s
      } = t;
      const {
        width: u,
        icon: c
      } = i, {
        width: l,
        icon: f
      } = a, d = Lb({
        transform: s,
        containerWidth: l,
        iconWidth: u
      }), h = {
        tag: "rect",
        attributes: oe(oe({}, Fa), {}, {
          fill: "white"
        })
      }, m = c.children ? {
        children: c.children.map(ah)
      } : {}, p = {
        tag: "g",
        attributes: oe({}, d.inner),
        children: [ah(oe({
          tag: c.tag,
          attributes: oe(oe({}, c.attributes), d.path)
        }, m))]
      }, b = {
        tag: "g",
        attributes: oe({}, d.outer),
        children: [p]
      }, y = "mask-".concat(o || Fn()), _ = "clip-".concat(o || Fn()), E = {
        tag: "mask",
        attributes: oe(oe({}, Fa), {}, {
          id: y,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, b]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: W1(f)
        }, E]
      };
      return r.push(O, {
        tag: "rect",
        attributes: oe({
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(y, ")")
        }, Fa)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, V1 = {
  provides(e) {
    let t = !1;
    yr.matchMedia && (t = yr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: oe(oe({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = oe(oe({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: oe(oe({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: oe(oe({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: oe(oe({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(o), r.push({
        tag: "path",
        attributes: oe(oe({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: oe(oe({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: oe(oe({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: oe(oe({}, a), {}, {
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
}, H1 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, K1 = [zb, k1, P1, N1, M1, q1, U1, $1, G1, V1, H1];
i1(K1, {
  mixoutsTo: yt
});
yt.noAuto;
yt.config;
const qT = yt.library;
yt.dom;
const UT = yt.parse;
yt.findIconDefinition;
yt.toHtml;
const $T = yt.icon;
yt.layer;
yt.text;
yt.counter;
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const WT = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, GT = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, VT = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, HT = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
};
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const KT = {
  prefix: "fass",
  iconName: "spray-can",
  icon: [512, 512, [], "f5bd", "M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, YT = {
  prefix: "fass",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, XT = {
  prefix: "fass",
  iconName: "files",
  icon: [448, 512, [], "e178", "M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z"]
}, ZT = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, JT = {
  prefix: "fass",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M288 32l0-32L224 0l0 32 0 192L32 224 0 224l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-192 192 0 32 0 0-64-32 0-192 0 0-192z"]
}, QT = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, eC = {
  prefix: "fass",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32L0 32 0 64l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 32zM64 352l0-32L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 32l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM448 352l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z"]
}, tC = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, rC = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
var Ev = typeof global == "object" && global && global.Object === Object && global, Y1 = typeof self == "object" && self && self.Object === Object && self, ir = Ev || Y1 || Function("return this")(), wr = ir.Symbol, xv = Object.prototype, X1 = xv.hasOwnProperty, Z1 = xv.toString, yn = wr ? wr.toStringTag : void 0;
function J1(e) {
  var t = X1.call(e, yn), r = e[yn];
  try {
    e[yn] = void 0;
    var n = !0;
  } catch {
  }
  var i = Z1.call(e);
  return n && (t ? e[yn] = r : delete e[yn]), i;
}
var Q1 = Object.prototype, e_ = Q1.toString;
function t_(e) {
  return e_.call(e);
}
var r_ = "[object Null]", n_ = "[object Undefined]", sh = wr ? wr.toStringTag : void 0;
function zr(e) {
  return e == null ? e === void 0 ? n_ : r_ : sh && sh in Object(e) ? J1(e) : t_(e);
}
function Dr(e) {
  return e != null && typeof e == "object";
}
var i_ = "[object Symbol]";
function Zc(e) {
  return typeof e == "symbol" || Dr(e) && zr(e) == i_;
}
function a_(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Er = Array.isArray, oh = wr ? wr.prototype : void 0, uh = oh ? oh.toString : void 0;
function Sv(e) {
  if (typeof e == "string")
    return e;
  if (Er(e))
    return a_(e, Sv) + "";
  if (Zc(e))
    return uh ? uh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function an(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ov(e) {
  return e;
}
var s_ = "[object AsyncFunction]", o_ = "[object Function]", u_ = "[object GeneratorFunction]", c_ = "[object Proxy]";
function Tv(e) {
  if (!an(e))
    return !1;
  var t = zr(e);
  return t == o_ || t == u_ || t == s_ || t == c_;
}
var La = ir["__core-js_shared__"], ch = function() {
  var e = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function f_(e) {
  return !!ch && ch in e;
}
var l_ = Function.prototype, h_ = l_.toString;
function qr(e) {
  if (e != null) {
    try {
      return h_.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var d_ = /[\\^$.*+?()[\]{}|]/g, p_ = /^\[object .+?Constructor\]$/, m_ = Function.prototype, g_ = Object.prototype, v_ = m_.toString, y_ = g_.hasOwnProperty, b_ = RegExp(
  "^" + v_.call(y_).replace(d_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function __(e) {
  if (!an(e) || f_(e))
    return !1;
  var t = Tv(e) ? b_ : p_;
  return t.test(qr(e));
}
function w_(e, t) {
  return e == null ? void 0 : e[t];
}
function Ur(e, t) {
  var r = w_(e, t);
  return __(r) ? r : void 0;
}
var ic = Ur(ir, "WeakMap");
function E_(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var x_ = 800, S_ = 16, O_ = Date.now;
function T_(e) {
  var t = 0, r = 0;
  return function() {
    var n = O_(), i = S_ - (n - r);
    if (r = n, i > 0) {
      if (++t >= x_)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function C_(e) {
  return function() {
    return e;
  };
}
var Ri = function() {
  try {
    var e = Ur(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), A_ = Ri ? function(e, t) {
  return Ri(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: C_(t),
    writable: !0
  });
} : Ov, R_ = T_(A_), I_ = 9007199254740991, k_ = /^(?:0|[1-9]\d*)$/;
function Ki(e, t) {
  var r = typeof e;
  return t = t ?? I_, !!t && (r == "number" || r != "symbol" && k_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function P_(e, t, r) {
  t == "__proto__" && Ri ? Ri(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Vn(e, t) {
  return e === t || e !== e && t !== t;
}
var N_ = Object.prototype, M_ = N_.hasOwnProperty;
function D_(e, t, r) {
  var n = e[t];
  (!(M_.call(e, t) && Vn(n, r)) || r === void 0 && !(t in e)) && P_(e, t, r);
}
var fh = Math.max;
function F_(e, t, r) {
  return t = fh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = fh(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), E_(e, this, s);
  };
}
function L_(e, t) {
  return R_(F_(e, t, Ov), e + "");
}
var B_ = 9007199254740991;
function Jc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= B_;
}
function Qc(e) {
  return e != null && Jc(e.length) && !Tv(e);
}
function j_(e, t, r) {
  if (!an(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Qc(r) && Ki(t, r.length) : n == "string" && t in r) ? Vn(r[t], e) : !1;
}
var z_ = Object.prototype;
function Cv(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || z_;
  return e === r;
}
function q_(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var U_ = "[object Arguments]";
function lh(e) {
  return Dr(e) && zr(e) == U_;
}
var Av = Object.prototype, $_ = Av.hasOwnProperty, W_ = Av.propertyIsEnumerable, Rv = lh(/* @__PURE__ */ function() {
  return arguments;
}()) ? lh : function(e) {
  return Dr(e) && $_.call(e, "callee") && !W_.call(e, "callee");
};
function G_() {
  return !1;
}
var Iv = typeof exports == "object" && exports && !exports.nodeType && exports, hh = Iv && typeof module == "object" && module && !module.nodeType && module, V_ = hh && hh.exports === Iv, dh = V_ ? ir.Buffer : void 0, H_ = dh ? dh.isBuffer : void 0, ac = H_ || G_, K_ = "[object Arguments]", Y_ = "[object Array]", X_ = "[object Boolean]", Z_ = "[object Date]", J_ = "[object Error]", Q_ = "[object Function]", ew = "[object Map]", tw = "[object Number]", rw = "[object Object]", nw = "[object RegExp]", iw = "[object Set]", aw = "[object String]", sw = "[object WeakMap]", ow = "[object ArrayBuffer]", uw = "[object DataView]", cw = "[object Float32Array]", fw = "[object Float64Array]", lw = "[object Int8Array]", hw = "[object Int16Array]", dw = "[object Int32Array]", pw = "[object Uint8Array]", mw = "[object Uint8ClampedArray]", gw = "[object Uint16Array]", vw = "[object Uint32Array]", Ne = {};
Ne[cw] = Ne[fw] = Ne[lw] = Ne[hw] = Ne[dw] = Ne[pw] = Ne[mw] = Ne[gw] = Ne[vw] = !0;
Ne[K_] = Ne[Y_] = Ne[ow] = Ne[X_] = Ne[uw] = Ne[Z_] = Ne[J_] = Ne[Q_] = Ne[ew] = Ne[tw] = Ne[rw] = Ne[nw] = Ne[iw] = Ne[aw] = Ne[sw] = !1;
function yw(e) {
  return Dr(e) && Jc(e.length) && !!Ne[zr(e)];
}
function bw(e) {
  return function(t) {
    return e(t);
  };
}
var kv = typeof exports == "object" && exports && !exports.nodeType && exports, Mn = kv && typeof module == "object" && module && !module.nodeType && module, _w = Mn && Mn.exports === kv, Ba = _w && Ev.process, ph = function() {
  try {
    var e = Mn && Mn.require && Mn.require("util").types;
    return e || Ba && Ba.binding && Ba.binding("util");
  } catch {
  }
}(), mh = ph && ph.isTypedArray, Pv = mh ? bw(mh) : yw, ww = Object.prototype, Ew = ww.hasOwnProperty;
function Nv(e, t) {
  var r = Er(e), n = !r && Rv(e), i = !r && !n && ac(e), a = !r && !n && !i && Pv(e), o = r || n || i || a, s = o ? q_(e.length, String) : [], u = s.length;
  for (var c in e)
    (t || Ew.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ki(c, u))) && s.push(c);
  return s;
}
function xw(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Sw = xw(Object.keys, Object), Ow = Object.prototype, Tw = Ow.hasOwnProperty;
function Cw(e) {
  if (!Cv(e))
    return Sw(e);
  var t = [];
  for (var r in Object(e))
    Tw.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Aw(e) {
  return Qc(e) ? Nv(e) : Cw(e);
}
function Rw(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Iw = Object.prototype, kw = Iw.hasOwnProperty;
function Pw(e) {
  if (!an(e))
    return Rw(e);
  var t = Cv(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !kw.call(e, n)) || r.push(n);
  return r;
}
function Nw(e) {
  return Qc(e) ? Nv(e, !0) : Pw(e);
}
var Mw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Dw = /^\w*$/;
function Fw(e, t) {
  if (Er(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Zc(e) ? !0 : Dw.test(e) || !Mw.test(e) || t != null && e in Object(t);
}
var Bn = Ur(Object, "create");
function Lw() {
  this.__data__ = Bn ? Bn(null) : {}, this.size = 0;
}
function Bw(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var jw = "__lodash_hash_undefined__", zw = Object.prototype, qw = zw.hasOwnProperty;
function Uw(e) {
  var t = this.__data__;
  if (Bn) {
    var r = t[e];
    return r === jw ? void 0 : r;
  }
  return qw.call(t, e) ? t[e] : void 0;
}
var $w = Object.prototype, Ww = $w.hasOwnProperty;
function Gw(e) {
  var t = this.__data__;
  return Bn ? t[e] !== void 0 : Ww.call(t, e);
}
var Vw = "__lodash_hash_undefined__";
function Hw(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Bn && t === void 0 ? Vw : t, this;
}
function Fr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Fr.prototype.clear = Lw;
Fr.prototype.delete = Bw;
Fr.prototype.get = Uw;
Fr.prototype.has = Gw;
Fr.prototype.set = Hw;
function Kw() {
  this.__data__ = [], this.size = 0;
}
function Yi(e, t) {
  for (var r = e.length; r--; )
    if (Vn(e[r][0], t))
      return r;
  return -1;
}
var Yw = Array.prototype, Xw = Yw.splice;
function Zw(e) {
  var t = this.__data__, r = Yi(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Xw.call(t, r, 1), --this.size, !0;
}
function Jw(e) {
  var t = this.__data__, r = Yi(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Qw(e) {
  return Yi(this.__data__, e) > -1;
}
function eE(e, t) {
  var r = this.__data__, n = Yi(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ar(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ar.prototype.clear = Kw;
ar.prototype.delete = Zw;
ar.prototype.get = Jw;
ar.prototype.has = Qw;
ar.prototype.set = eE;
var jn = Ur(ir, "Map");
function tE() {
  this.size = 0, this.__data__ = {
    hash: new Fr(),
    map: new (jn || ar)(),
    string: new Fr()
  };
}
function rE(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xi(e, t) {
  var r = e.__data__;
  return rE(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function nE(e) {
  var t = Xi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function iE(e) {
  return Xi(this, e).get(e);
}
function aE(e) {
  return Xi(this, e).has(e);
}
function sE(e, t) {
  var r = Xi(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function sr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
sr.prototype.clear = tE;
sr.prototype.delete = nE;
sr.prototype.get = iE;
sr.prototype.has = aE;
sr.prototype.set = sE;
var oE = "Expected a function";
function ef(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(oE);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (ef.Cache || sr)(), r;
}
ef.Cache = sr;
var uE = 500;
function cE(e) {
  var t = ef(e, function(n) {
    return r.size === uE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var fE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lE = /\\(\\)?/g, hE = cE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(fE, function(r, n, i, a) {
    t.push(i ? a.replace(lE, "$1") : n || r);
  }), t;
});
function dE(e) {
  return e == null ? "" : Sv(e);
}
function tf(e, t) {
  return Er(e) ? e : Fw(e, t) ? [e] : hE(dE(e));
}
function rf(e) {
  if (typeof e == "string" || Zc(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function pE(e, t) {
  t = tf(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[rf(t[r++])];
  return r && r == n ? e : void 0;
}
function nC(e, t, r) {
  var n = e == null ? void 0 : pE(e, t);
  return n === void 0 ? r : n;
}
function mE(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function gE() {
  this.__data__ = new ar(), this.size = 0;
}
function vE(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function yE(e) {
  return this.__data__.get(e);
}
function bE(e) {
  return this.__data__.has(e);
}
var _E = 200;
function wE(e, t) {
  var r = this.__data__;
  if (r instanceof ar) {
    var n = r.__data__;
    if (!jn || n.length < _E - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new sr(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function mr(e) {
  var t = this.__data__ = new ar(e);
  this.size = t.size;
}
mr.prototype.clear = gE;
mr.prototype.delete = vE;
mr.prototype.get = yE;
mr.prototype.has = bE;
mr.prototype.set = wE;
function EE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function xE() {
  return [];
}
var SE = Object.prototype, OE = SE.propertyIsEnumerable, gh = Object.getOwnPropertySymbols, TE = gh ? function(e) {
  return e == null ? [] : (e = Object(e), EE(gh(e), function(t) {
    return OE.call(e, t);
  }));
} : xE;
function CE(e, t, r) {
  var n = t(e);
  return Er(e) ? n : mE(n, r(e));
}
function vh(e) {
  return CE(e, Aw, TE);
}
var sc = Ur(ir, "DataView"), oc = Ur(ir, "Promise"), uc = Ur(ir, "Set"), yh = "[object Map]", AE = "[object Object]", bh = "[object Promise]", _h = "[object Set]", wh = "[object WeakMap]", Eh = "[object DataView]", RE = qr(sc), IE = qr(jn), kE = qr(oc), PE = qr(uc), NE = qr(ic), hr = zr;
(sc && hr(new sc(new ArrayBuffer(1))) != Eh || jn && hr(new jn()) != yh || oc && hr(oc.resolve()) != bh || uc && hr(new uc()) != _h || ic && hr(new ic()) != wh) && (hr = function(e) {
  var t = zr(e), r = t == AE ? e.constructor : void 0, n = r ? qr(r) : "";
  if (n)
    switch (n) {
      case RE:
        return Eh;
      case IE:
        return yh;
      case kE:
        return bh;
      case PE:
        return _h;
      case NE:
        return wh;
    }
  return t;
});
var xh = ir.Uint8Array, ME = "__lodash_hash_undefined__";
function DE(e) {
  return this.__data__.set(e, ME), this;
}
function FE(e) {
  return this.__data__.has(e);
}
function Ii(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new sr(); ++t < r; )
    this.add(e[t]);
}
Ii.prototype.add = Ii.prototype.push = DE;
Ii.prototype.has = FE;
function LE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function BE(e, t) {
  return e.has(t);
}
var jE = 1, zE = 2;
function Mv(e, t, r, n, i, a) {
  var o = r & jE, s = e.length, u = t.length;
  if (s != u && !(o && u > s))
    return !1;
  var c = a.get(e), l = a.get(t);
  if (c && l)
    return c == t && l == e;
  var f = -1, d = !0, h = r & zE ? new Ii() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var m = e[f], p = t[f];
    if (n)
      var b = o ? n(p, m, f, t, e, a) : n(m, p, f, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!LE(t, function(y, _) {
        if (!BE(h, _) && (m === y || i(m, y, r, n, a)))
          return h.push(_);
      })) {
        d = !1;
        break;
      }
    } else if (!(m === p || i(m, p, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
function qE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function UE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var $E = 1, WE = 2, GE = "[object Boolean]", VE = "[object Date]", HE = "[object Error]", KE = "[object Map]", YE = "[object Number]", XE = "[object RegExp]", ZE = "[object Set]", JE = "[object String]", QE = "[object Symbol]", e2 = "[object ArrayBuffer]", t2 = "[object DataView]", Sh = wr ? wr.prototype : void 0, ja = Sh ? Sh.valueOf : void 0;
function r2(e, t, r, n, i, a, o) {
  switch (r) {
    case t2:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case e2:
      return !(e.byteLength != t.byteLength || !a(new xh(e), new xh(t)));
    case GE:
    case VE:
    case YE:
      return Vn(+e, +t);
    case HE:
      return e.name == t.name && e.message == t.message;
    case XE:
    case JE:
      return e == t + "";
    case KE:
      var s = qE;
    case ZE:
      var u = n & $E;
      if (s || (s = UE), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= WE, o.set(e, t);
      var l = Mv(s(e), s(t), n, i, a, o);
      return o.delete(e), l;
    case QE:
      if (ja)
        return ja.call(e) == ja.call(t);
  }
  return !1;
}
var n2 = 1, i2 = Object.prototype, a2 = i2.hasOwnProperty;
function s2(e, t, r, n, i, a) {
  var o = r & n2, s = vh(e), u = s.length, c = vh(t), l = c.length;
  if (u != l && !o)
    return !1;
  for (var f = u; f--; ) {
    var d = s[f];
    if (!(o ? d in t : a2.call(t, d)))
      return !1;
  }
  var h = a.get(e), m = a.get(t);
  if (h && m)
    return h == t && m == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var b = o; ++f < u; ) {
    d = s[f];
    var y = e[d], _ = t[d];
    if (n)
      var E = o ? n(_, y, d, t, e, a) : n(y, _, d, e, t, a);
    if (!(E === void 0 ? y === _ || i(y, _, r, n, a) : E)) {
      p = !1;
      break;
    }
    b || (b = d == "constructor");
  }
  if (p && !b) {
    var O = e.constructor, C = t.constructor;
    O != C && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof C == "function" && C instanceof C) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var o2 = 1, Oh = "[object Arguments]", Th = "[object Array]", li = "[object Object]", u2 = Object.prototype, Ch = u2.hasOwnProperty;
function c2(e, t, r, n, i, a) {
  var o = Er(e), s = Er(t), u = o ? Th : hr(e), c = s ? Th : hr(t);
  u = u == Oh ? li : u, c = c == Oh ? li : c;
  var l = u == li, f = c == li, d = u == c;
  if (d && ac(e)) {
    if (!ac(t))
      return !1;
    o = !0, l = !1;
  }
  if (d && !l)
    return a || (a = new mr()), o || Pv(e) ? Mv(e, t, r, n, i, a) : r2(e, t, u, r, n, i, a);
  if (!(r & o2)) {
    var h = l && Ch.call(e, "__wrapped__"), m = f && Ch.call(t, "__wrapped__");
    if (h || m) {
      var p = h ? e.value() : e, b = m ? t.value() : t;
      return a || (a = new mr()), i(p, b, r, n, a);
    }
  }
  return d ? (a || (a = new mr()), s2(e, t, r, n, i, a)) : !1;
}
function Dv(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Dr(e) && !Dr(t) ? e !== e && t !== t : c2(e, t, r, n, Dv, i);
}
function f2(e, t, r) {
  t = tf(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = rf(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Jc(i) && Ki(o, i) && (Er(e) || Rv(e)));
}
var Fv = Object.prototype, l2 = Fv.hasOwnProperty, iC = L_(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, i = n > 2 ? t[2] : void 0;
  for (i && j_(t[0], t[1], i) && (n = 1); ++r < n; )
    for (var a = t[r], o = Nw(a), s = -1, u = o.length; ++s < u; ) {
      var c = o[s], l = e[c];
      (l === void 0 || Vn(l, Fv[c]) && !l2.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), h2 = Object.prototype, d2 = h2.hasOwnProperty;
function p2(e, t) {
  return e != null && d2.call(e, t);
}
function aC(e, t) {
  return e != null && f2(e, t, p2);
}
function sC(e, t) {
  return Dv(e, t);
}
var m2 = "[object Number]";
function g2(e) {
  return typeof e == "number" || Dr(e) && zr(e) == m2;
}
function oC(e) {
  return g2(e) && e != +e;
}
function v2(e, t, r, n) {
  if (!an(e))
    return e;
  t = tf(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var u = rf(t[i]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != o) {
      var l = s[u];
      c = void 0, c === void 0 && (c = an(l) ? l : Ki(t[i + 1]) ? [] : {});
    }
    D_(s, u, c), s = s[u];
  }
  return e;
}
function uC(e, t, r) {
  return e == null ? e : v2(e, t, r);
}
const Qe = [];
for (let e = 0; e < 256; ++e)
  Qe.push((e + 256).toString(16).slice(1));
function y2(e, t = 0) {
  return (Qe[e[t + 0]] + Qe[e[t + 1]] + Qe[e[t + 2]] + Qe[e[t + 3]] + "-" + Qe[e[t + 4]] + Qe[e[t + 5]] + "-" + Qe[e[t + 6]] + Qe[e[t + 7]] + "-" + Qe[e[t + 8]] + Qe[e[t + 9]] + "-" + Qe[e[t + 10]] + Qe[e[t + 11]] + Qe[e[t + 12]] + Qe[e[t + 13]] + Qe[e[t + 14]] + Qe[e[t + 15]]).toLowerCase();
}
let za;
const b2 = new Uint8Array(16);
function _2() {
  if (!za) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    za = crypto.getRandomValues.bind(crypto);
  }
  return za(b2);
}
const w2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ah = { randomUUID: w2 };
function cC(e, t, r) {
  var i;
  if (Ah.randomUUID && !e)
    return Ah.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? _2();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, y2(n);
}
typeof BigInt > "u" && (BigInt = function(e) {
  if (isNaN(e)) throw new Error("");
  return e;
});
const ye = BigInt(0), Se = BigInt(1), zn = BigInt(2), cc = BigInt(5), ht = BigInt(10), E2 = 2e3, he = {
  s: Se,
  n: ye,
  d: Se
};
function Zt(e, t) {
  try {
    e = BigInt(e);
  } catch {
    throw lr();
  }
  return e * t;
}
function xt(e) {
  return typeof e == "bigint" ? e : Math.floor(e);
}
function je(e, t) {
  if (t === ye)
    throw af();
  const r = Object.create(nf.prototype);
  r.s = e < ye ? -Se : Se, e = e < ye ? -e : e;
  const n = Cr(e, t);
  return r.n = e / n, r.d = t / n, r;
}
function Jr(e) {
  const t = {};
  let r = e, n = zn, i = cc - Se;
  for (; i <= r; ) {
    for (; r % n === ye; )
      r /= n, t[n] = (t[n] || ye) + Se;
    i += Se + zn * n++;
  }
  return r !== e ? r > 1 && (t[r] = (t[r] || ye) + Se) : t[e] = (t[e] || ye) + Se, t;
}
const Xe = function(e, t) {
  let r = ye, n = Se, i = Se;
  if (e != null) if (t !== void 0) {
    if (typeof e == "bigint")
      r = e;
    else {
      if (isNaN(e))
        throw lr();
      if (e % 1 !== 0)
        throw Rh();
      r = BigInt(e);
    }
    if (typeof t == "bigint")
      n = t;
    else {
      if (isNaN(t))
        throw lr();
      if (t % 1 !== 0)
        throw Rh();
      n = BigInt(t);
    }
    i = r * n;
  } else if (typeof e == "object") {
    if ("d" in e && "n" in e)
      r = BigInt(e.n), n = BigInt(e.d), "s" in e && (r *= BigInt(e.s));
    else if (0 in e)
      r = BigInt(e[0]), 1 in e && (n = BigInt(e[1]));
    else if (typeof e == "bigint")
      r = e;
    else
      throw lr();
    i = r * n;
  } else if (typeof e == "number") {
    if (isNaN(e))
      throw lr();
    if (e < 0 && (i = -Se, e = -e), e % 1 === 0)
      r = BigInt(e);
    else {
      let a = 1, o = 0, s = 1, u = 1, c = 1, l = 1e7;
      for (e >= 1 && (a = 10 ** Math.floor(1 + Math.log10(e)), e /= a); s <= l && c <= l; ) {
        let f = (o + u) / (s + c);
        if (e === f) {
          s + c <= l ? (r = o + u, n = s + c) : c > s ? (r = u, n = c) : (r = o, n = s);
          break;
        } else
          e > f ? (o += u, s += c) : (u += o, c += s), s > l ? (r = u, n = c) : (r = o, n = s);
      }
      r = BigInt(r) * BigInt(a), n = BigInt(n);
    }
  } else if (typeof e == "string") {
    let a = 0, o = ye, s = ye, u = ye, c = Se, l = Se, f = e.replace(/_/g, "").match(/\d+|./g);
    if (f === null)
      throw lr();
    if (f[a] === "-" ? (i = -Se, a++) : f[a] === "+" && a++, f.length === a + 1 ? s = Zt(f[a++], i) : f[a + 1] === "." || f[a] === "." ? (f[a] !== "." && (o = Zt(f[a++], i)), a++, (a + 1 === f.length || f[a + 1] === "(" && f[a + 3] === ")" || f[a + 1] === "'" && f[a + 3] === "'") && (s = Zt(f[a], i), c = ht ** BigInt(f[a].length), a++), (f[a] === "(" && f[a + 2] === ")" || f[a] === "'" && f[a + 2] === "'") && (u = Zt(f[a + 1], i), l = ht ** BigInt(f[a + 1].length) - Se, a += 3)) : f[a + 1] === "/" || f[a + 1] === ":" ? (s = Zt(f[a], i), c = Zt(f[a + 2], Se), a += 3) : f[a + 3] === "/" && f[a + 1] === " " && (o = Zt(f[a], i), s = Zt(f[a + 2], i), c = Zt(f[a + 4], Se), a += 5), f.length <= a)
      n = c * l, i = /* void */
      r = u + n * o + l * s;
    else
      throw lr();
  } else if (typeof e == "bigint")
    r = e, i = e, n = Se;
  else
    throw lr();
  if (n === ye)
    throw af();
  he.s = i < ye ? -Se : Se, he.n = r < ye ? -r : r, he.d = n < ye ? -n : n;
};
function x2(e, t, r) {
  let n = Se;
  for (; t > ye; e = e * e % r, t >>= Se)
    t & Se && (n = n * e % r);
  return n;
}
function S2(e, t) {
  for (; t % zn === ye; t /= zn)
    ;
  for (; t % cc === ye; t /= cc)
    ;
  if (t === Se)
    return ye;
  let r = ht % t, n = 1;
  for (; r !== Se; n++)
    if (r = r * ht % t, n > E2)
      return ye;
  return BigInt(n);
}
function O2(e, t, r) {
  let n = Se, i = x2(ht, r, t);
  for (let a = 0; a < 300; a++) {
    if (n === i)
      return BigInt(a);
    n = n * ht % t, i = i * ht % t;
  }
  return 0;
}
function Cr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  for (; ; ) {
    if (e %= t, !e)
      return t;
    if (t %= e, !t)
      return e;
  }
}
function nf(e, t) {
  if (Xe(e, t), this instanceof nf)
    e = Cr(he.d, he.n), this.s = he.s, this.n = he.n / e, this.d = he.d / e;
  else
    return je(he.s * he.n, he.d);
}
var af = function() {
  return new Error("Division by Zero");
}, lr = function() {
  return new Error("Invalid argument");
}, Rh = function() {
  return new Error("Parameters must be integer");
};
nf.prototype = {
  s: Se,
  n: ye,
  d: Se,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return je(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return je(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(e, t) {
    return Xe(e, t), je(
      this.s * this.n * he.d + he.s * this.d * he.n,
      this.d * he.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(e, t) {
    return Xe(e, t), je(
      this.s * this.n * he.d - he.s * this.d * he.n,
      this.d * he.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(e, t) {
    return Xe(e, t), je(
      this.s * he.s * this.n * he.n,
      this.d * he.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(e, t) {
    return Xe(e, t), je(
      this.s * he.s * this.n * he.d,
      this.d * he.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return je(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
   **/
  mod: function(e, t) {
    if (e === void 0)
      return je(this.s * this.n % this.d, Se);
    if (Xe(e, t), ye === he.n * this.d)
      throw af();
    return je(
      this.s * (he.d * this.n) % (he.n * this.d),
      he.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(e, t) {
    return Xe(e, t), je(Cr(he.n, this.n) * Cr(he.d, this.d), he.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(e, t) {
    return Xe(e, t), he.n === ye && this.n === ye ? je(ye, Se) : je(he.n * this.n, Cr(he.n, this.n) * Cr(he.d, this.d));
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return je(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some integer exponent
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(e, t) {
    if (Xe(e, t), he.d === Se)
      return he.s < ye ? je((this.s * this.d) ** he.n, this.n ** he.n) : je((this.s * this.n) ** he.n, this.d ** he.n);
    if (this.s < ye) return null;
    let r = Jr(this.n), n = Jr(this.d), i = Se, a = Se;
    for (let o in r)
      if (o !== "1") {
        if (o === "0") {
          i = ye;
          break;
        }
        if (r[o] *= he.n, r[o] % he.d === ye)
          r[o] /= he.d;
        else return null;
        i *= BigInt(o) ** r[o];
      }
    for (let o in n)
      if (o !== "1") {
        if (n[o] *= he.n, n[o] % he.d === ye)
          n[o] /= he.d;
        else return null;
        a *= BigInt(o) ** n[o];
      }
    return he.s < ye ? je(a, i) : je(i, a);
  },
  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */
  log: function(e, t) {
    if (Xe(e, t), this.s <= ye || he.s <= ye) return null;
    const r = {}, n = Jr(he.n), i = Jr(he.d), a = Jr(this.n), o = Jr(this.d);
    for (const c in i)
      n[c] = (n[c] || ye) - i[c];
    for (const c in o)
      a[c] = (a[c] || ye) - o[c];
    for (const c in n)
      c !== "1" && (r[c] = !0);
    for (const c in a)
      c !== "1" && (r[c] = !0);
    let s = null, u = null;
    for (const c in r) {
      const l = n[c] || ye, f = a[c] || ye;
      if (l === ye) {
        if (f !== ye)
          return null;
        continue;
      }
      let d = f, h = l;
      const m = Cr(d, h);
      if (d /= m, h /= m, s === null && u === null)
        s = d, u = h;
      else if (d * u !== s * h)
        return null;
    }
    return s !== null && u !== null ? je(s, u) : null;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(e, t) {
    return Xe(e, t), this.s * this.n * he.d === he.s * he.n * this.d;
  },
  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lt: function(e, t) {
    return Xe(e, t), this.s * this.n * he.d < he.s * he.n * this.d;
  },
  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lte: function(e, t) {
    return Xe(e, t), this.s * this.n * he.d <= he.s * he.n * this.d;
  },
  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gt: function(e, t) {
    return Xe(e, t), this.s * this.n * he.d > he.s * he.n * this.d;
  },
  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gte: function(e, t) {
    return Xe(e, t), this.s * this.n * he.d >= he.s * he.n * this.d;
  },
  /**
   * Compare two rational numbers
   * < 0 iff this < that
   * > 0 iff this > that
   * = 0 iff this = that
   *
   * Ex: new Fraction(19.6).compare([98, 5]);
   **/
  compare: function(e, t) {
    Xe(e, t);
    let r = this.s * this.n * he.d - he.s * he.n * this.d;
    return (ye < r) - (r < ye);
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(e) {
    return e = ht ** BigInt(e || 0), je(
      xt(this.s * e * this.n / this.d) + (e * this.n % this.d > ye && this.s >= ye ? Se : ye),
      e
    );
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(e) {
    return e = ht ** BigInt(e || 0), je(
      xt(this.s * e * this.n / this.d) - (e * this.n % this.d > ye && this.s < ye ? Se : ye),
      e
    );
  },
  /**
   * Rounds a rational numbers
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(e) {
    return e = ht ** BigInt(e || 0), je(
      xt(this.s * e * this.n / this.d) + this.s * ((this.s >= ye ? Se : ye) + zn * (e * this.n % this.d) > this.d ? Se : ye),
      e
    );
  },
  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  roundTo: function(e, t) {
    Xe(e, t);
    const r = this.n * he.d, n = this.d * he.n, i = r % n;
    let a = xt(r / n);
    return i + i >= n && a++, je(this.s * a * he.n, he.d);
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(e, t) {
    return Xe(e, t), !(!(he.n * this.d) || this.n * he.d % (he.n * this.d));
  },
  /**
   * Returns a decimal representation of the fraction
   *
   * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
   **/
  valueOf: function() {
    return Number(this.s * this.n) / Number(this.d);
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  toString: function(e) {
    let t = this.n, r = this.d;
    e = e || 15;
    let n = S2(t, r), i = O2(t, r, n), a = this.s < ye ? "-" : "";
    if (a += xt(t / r), t %= r, t *= ht, t && (a += "."), n) {
      for (let o = i; o--; )
        a += xt(t / r), t %= r, t *= ht;
      a += "(";
      for (let o = n; o--; )
        a += xt(t / r), t %= r, t *= ht;
      a += ")";
    } else
      for (let o = e; t && o--; )
        a += xt(t / r), t %= r, t *= ht;
    return a;
  },
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
   **/
  toFraction: function(e) {
    let t = this.n, r = this.d, n = this.s < ye ? "-" : "";
    if (r === Se)
      n += t;
    else {
      let i = xt(t / r);
      e && i > ye && (n += i, n += " ", t %= r), n += t, n += "/", n += r;
    }
    return n;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(e) {
    let t = this.n, r = this.d, n = this.s < ye ? "-" : "";
    if (r === Se)
      n += t;
    else {
      let i = xt(t / r);
      e && i > ye && (n += i, t %= r), n += "\\frac{", n += t, n += "}{", n += r, n += "}";
    }
    return n;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    let e = this.n, t = this.d, r = [];
    do {
      r.push(xt(e / t));
      let n = e % t;
      e = t, t = n;
    } while (e !== Se);
    return r;
  },
  simplify: function(e) {
    const t = BigInt(1 / (e || 1e-3) | 0), r = this.abs(), n = r.toContinued();
    for (let i = 1; i < n.length; i++) {
      let a = je(n[i - 1], Se);
      for (let s = i - 2; s >= 0; s--)
        a = a.inverse().add(n[s]);
      let o = a.sub(r);
      if (o.n * t < o.d)
        return a.mul(this.s);
    }
    return this;
  }
};
var Lv = Object.defineProperty, T2 = Object.getOwnPropertyNames, Y = (e, t) => Lv(e, "name", { value: t, configurable: !0 }), C2 = (e, t) => function() {
  return t || (0, e[T2(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, sf = (e, t) => {
  for (var r in t)
    Lv(e, r, { get: t[r], enumerable: !0 });
}, A2 = C2({
  "(disabled):util"() {
  }
}), ki = {};
sf(ki, {
  addChainableMethod: () => yf,
  addLengthGuard: () => Yn,
  addMethod: () => mf,
  addProperty: () => pf,
  checkError: () => mt,
  compareByInspect: () => Di,
  eql: () => fy,
  expectTypes: () => Wv,
  flag: () => Oe,
  getActual: () => Ji,
  getMessage: () => cf,
  getName: () => ea,
  getOperator: () => Ef,
  getOwnEnumerableProperties: () => wf,
  getOwnEnumerablePropertySymbols: () => _f,
  getPathInfo: () => df,
  hasProperty: () => Qi,
  inspect: () => Re,
  isNaN: () => Fi,
  isNumeric: () => Ze,
  isProxyEnabled: () => Kn,
  isRegExp: () => Li,
  objDisplay: () => Ir,
  overwriteChainableMethod: () => bf,
  overwriteMethod: () => vf,
  overwriteProperty: () => gf,
  proxify: () => ln,
  test: () => of,
  transferFlags: () => It,
  type: () => ke
});
var mt = {};
sf(mt, {
  compatibleConstructor: () => zv,
  compatibleInstance: () => jv,
  compatibleMessage: () => qv,
  getConstructorName: () => Uv,
  getMessage: () => $v
});
function Zi(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
Y(Zi, "isErrorInstance");
function Bv(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Y(Bv, "isRegExp");
function jv(e, t) {
  return Zi(t) && e === t;
}
Y(jv, "compatibleInstance");
function zv(e, t) {
  return Zi(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
Y(zv, "compatibleConstructor");
function qv(e, t) {
  const r = typeof e == "string" ? e : e.message;
  return Bv(t) ? t.test(r) : typeof t == "string" ? r.indexOf(t) !== -1 : !1;
}
Y(qv, "compatibleMessage");
function Uv(e) {
  let t = e;
  return Zi(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
Y(Uv, "getConstructorName");
function $v(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
Y($v, "getMessage");
function Oe(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    n[t] = r;
  else
    return n[t];
}
Y(Oe, "flag");
function of(e, t) {
  var r = Oe(e, "negate"), n = t[0];
  return r ? !n : n;
}
Y(of, "test");
function ke(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Y(ke, "type");
var R2 = "captureStackTrace" in Error, Pr, Ie = (Pr = class extends Error {
  constructor(r = "Unspecified AssertionError", n, i) {
    super(r);
    Pl(this, "message");
    this.message = r, R2 && Error.captureStackTrace(this, i || Pr);
    for (const a in n)
      a in this || (this[a] = n[a]);
  }
  get name() {
    return "AssertionError";
  }
  get ok() {
    return !1;
  }
  toJSON(r) {
    return {
      ...this,
      name: this.name,
      message: this.message,
      ok: !1,
      stack: r !== !1 ? this.stack : void 0
    };
  }
}, Y(Pr, "AssertionError"), Pr);
function Wv(e, t) {
  var r = Oe(e, "message"), n = Oe(e, "ssfi");
  r = r ? r + ": " : "", e = Oe(e, "object"), t = t.map(function(o) {
    return o.toLowerCase();
  }), t.sort();
  var i = t.map(function(o, s) {
    var u = ~["a", "e", "i", "o", "u"].indexOf(o.charAt(0)) ? "an" : "a", c = t.length > 1 && s === t.length - 1 ? "or " : "";
    return c + u + " " + o;
  }).join(", "), a = ke(e).toLowerCase();
  if (!t.some(function(o) {
    return a === o;
  }))
    throw new Ie(
      r + "object tested must be " + i + ", but " + a + " given",
      void 0,
      n
    );
}
Y(Wv, "expectTypes");
function Ji(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
Y(Ji, "getActual");
var Ih = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
}, I2 = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
}, sn = "…";
function Gv(e, t) {
  const r = Ih[I2[t]] || Ih[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
Y(Gv, "colorise");
function Vv({
  showHidden: e = !1,
  depth: t = 2,
  colors: r = !1,
  customInspect: n = !0,
  showProxy: i = !1,
  maxArrayLength: a = 1 / 0,
  breakLength: o = 1 / 0,
  seen: s = [],
  // eslint-disable-next-line no-shadow
  truncate: u = 1 / 0,
  stylize: c = String
} = {}, l) {
  const f = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!i,
    maxArrayLength: Number(a),
    breakLength: Number(o),
    truncate: Number(u),
    seen: s,
    inspect: l,
    stylize: c
  };
  return f.colors && (f.stylize = Gv), f;
}
Y(Vv, "normaliseOptions");
function Hv(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
Y(Hv, "isHighSurrogate");
function or(e, t, r = sn) {
  e = String(e);
  const n = r.length, i = e.length;
  if (n > t && i > n)
    return r;
  if (i > t && i > n) {
    let a = t - n;
    return a > 0 && Hv(e[a - 1]) && (a = a - 1), `${e.slice(0, a)}${r}`;
  }
  return e;
}
Y(or, "truncate");
function _t(e, t, r, n = ", ") {
  r = r || t.inspect;
  const i = e.length;
  if (i === 0)
    return "";
  const a = t.truncate;
  let o = "", s = "", u = "";
  for (let c = 0; c < i; c += 1) {
    const l = c + 1 === e.length, f = c + 2 === e.length;
    u = `${sn}(${e.length - c})`;
    const d = e[c];
    t.truncate = a - o.length - (l ? 0 : n.length);
    const h = s || r(d, t) + (l ? "" : n), m = o.length + h.length, p = m + u.length;
    if (l && m > a && o.length + u.length <= a || !l && !f && p > a || (s = l ? "" : r(e[c + 1], t) + (f ? "" : n), !l && f && p > a && m + s.length > a))
      break;
    if (o += h, !l && !f && m + s.length >= a) {
      u = `${sn}(${e.length - c - 1})`;
      break;
    }
    u = "";
  }
  return `${o}${u}`;
}
Y(_t, "inspectList");
function Kv(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
Y(Kv, "quoteComplexKey");
function on([e, t], r) {
  return r.truncate -= 2, typeof e == "string" ? e = Kv(e) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`), r.truncate -= e.length, t = r.inspect(t, r), `${e}: ${t}`;
}
Y(on, "inspectProperty");
function Yv(e, t) {
  const r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length)
    return "[]";
  t.truncate -= 4;
  const n = _t(e, t);
  t.truncate -= n.length;
  let i = "";
  return r.length && (i = _t(r.map((a) => [a, e[a]]), t, on)), `[ ${n}${i ? `, ${i}` : ""} ]`;
}
Y(Yv, "inspectArray");
var k2 = /* @__PURE__ */ Y((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function Bt(e, t) {
  const r = k2(e);
  t.truncate -= r.length + 4;
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return `${r}[]`;
  let i = "";
  for (let o = 0; o < e.length; o++) {
    const s = `${t.stylize(or(e[o], t.truncate), "number")}${o === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= s.length, e[o] !== e.length && t.truncate <= 3) {
      i += `${sn}(${e.length - e[o] + 1})`;
      break;
    }
    i += s;
  }
  let a = "";
  return n.length && (a = _t(n.map((o) => [o, e[o]]), t, on)), `${r}[ ${i}${a ? `, ${a}` : ""} ]`;
}
Y(Bt, "inspectTypedArray");
function Xv(e, t) {
  const r = e.toJSON();
  if (r === null)
    return "Invalid Date";
  const n = r.split("T"), i = n[0];
  return t.stylize(`${i}T${or(n[1], t.truncate - i.length - 1)}`, "date");
}
Y(Xv, "inspectDate");
function fc(e, t) {
  const r = e[Symbol.toStringTag] || "Function", n = e.name;
  return n ? t.stylize(`[${r} ${or(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
Y(fc, "inspectFunction");
function Zv([e, t], r) {
  return r.truncate -= 4, e = r.inspect(e, r), r.truncate -= e.length, t = r.inspect(t, r), `${e} => ${t}`;
}
Y(Zv, "inspectMapEntry");
function Jv(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push([n, r]);
  }), t;
}
Y(Jv, "mapToEntries");
function Qv(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${_t(Jv(e), t, Zv)} }`);
}
Y(Qv, "inspectMap");
var P2 = Number.isNaN || ((e) => e !== e);
function lc(e, t) {
  return P2(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(or(String(e), t.truncate), "number");
}
Y(lc, "inspectNumber");
function hc(e, t) {
  let r = or(e.toString(), t.truncate - 1);
  return r !== sn && (r += "n"), t.stylize(r, "bigint");
}
Y(hc, "inspectBigInt");
function ey(e, t) {
  const r = e.toString().split("/")[2], n = t.truncate - (2 + r.length), i = e.source;
  return t.stylize(`/${or(i, n)}/${r}`, "regexp");
}
Y(ey, "inspectRegExp");
function ty(e) {
  const t = [];
  return e.forEach((r) => {
    t.push(r);
  }), t;
}
Y(ty, "arrayFromSet");
function ry(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${_t(ty(e), t)} }`);
}
Y(ry, "inspectSet");
var kh = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), N2 = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, M2 = 16;
function ny(e) {
  return N2[e] || `\\u${`0000${e.charCodeAt(0).toString(M2)}`.slice(-4)}`;
}
Y(ny, "escape");
function dc(e, t) {
  return kh.test(e) && (e = e.replace(kh, ny)), t.stylize(`'${or(e, t.truncate - 2)}'`, "string");
}
Y(dc, "inspectString");
function pc(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
Y(pc, "inspectSymbol");
var iy = /* @__PURE__ */ Y(() => "Promise{…}", "getPromiseValue");
try {
  const { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (iy = /* @__PURE__ */ Y((n, i) => {
    const [a, o] = e(n);
    return a === t ? "Promise{<pending>}" : `Promise${a === r ? "!" : ""}{${i.inspect(o, i)}}`;
  }, "getPromiseValue"));
} catch {
}
var D2 = iy;
function Dn(e, t) {
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const i = _t(r.map((s) => [s, e[s]]), t, on), a = _t(n.map((s) => [s, e[s]]), t, on);
  t.seen.pop();
  let o = "";
  return i && a && (o = ", "), `{ ${i}${o}${a} }`;
}
Y(Dn, "inspectObject");
var qa = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function ay(e, t) {
  let r = "";
  return qa && qa in e && (r = e[qa]), r = r || e.constructor.name, (!r || r === "_class") && (r = "<Anonymous Class>"), t.truncate -= r.length, `${r}${Dn(e, t)}`;
}
Y(ay, "inspectClass");
function sy(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${_t(e, t)} ]`);
}
Y(sy, "inspectArguments");
var F2 = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function oy(e, t) {
  const r = Object.getOwnPropertyNames(e).filter((o) => F2.indexOf(o) === -1), n = e.name;
  t.truncate -= n.length;
  let i = "";
  if (typeof e.message == "string" ? i = or(e.message, t.truncate) : r.unshift("message"), i = i ? `: ${i}` : "", t.truncate -= i.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const a = _t(r.map((o) => [o, e[o]]), t, on);
  return `${n}${i}${a ? ` { ${a} }` : ""}`;
}
Y(oy, "inspectObject");
function uy([e, t], r) {
  return r.truncate -= 3, t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
Y(uy, "inspectAttribute");
function Pi(e, t) {
  return _t(e, t, uf, `
`);
}
Y(Pi, "inspectHTMLCollection");
function uf(e, t) {
  const r = e.getAttributeNames(), n = e.tagName.toLowerCase(), i = t.stylize(`<${n}`, "special"), a = t.stylize(">", "special"), o = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let s = "";
  r.length > 0 && (s += " ", s += _t(r.map((l) => [l, e.getAttribute(l)]), t, uy, " ")), t.truncate -= s.length;
  const u = t.truncate;
  let c = Pi(e.children, t);
  return c && c.length > u && (c = `${sn}(${e.children.length})`), `${i}${s}${a}${c}${o}`;
}
Y(uf, "inspectHTML");
var L2 = typeof Symbol == "function" && typeof Symbol.for == "function", Ua = L2 ? Symbol.for("chai/inspect") : "@@chai/inspect", en = !1;
try {
  const e = A2();
  en = e.inspect ? e.inspect.custom : !1;
} catch {
  en = !1;
}
var Ph = /* @__PURE__ */ new WeakMap(), Nh = {}, Mh = {
  undefined: (e, t) => t.stylize("undefined", "undefined"),
  null: (e, t) => t.stylize("null", "null"),
  boolean: (e, t) => t.stylize(String(e), "boolean"),
  Boolean: (e, t) => t.stylize(String(e), "boolean"),
  number: lc,
  Number: lc,
  bigint: hc,
  BigInt: hc,
  string: dc,
  String: dc,
  function: fc,
  Function: fc,
  symbol: pc,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: pc,
  Array: Yv,
  Date: Xv,
  Map: Qv,
  Set: ry,
  RegExp: ey,
  Promise: D2,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: sy,
  Int8Array: Bt,
  Uint8Array: Bt,
  Uint8ClampedArray: Bt,
  Int16Array: Bt,
  Uint16Array: Bt,
  Int32Array: Bt,
  Uint32Array: Bt,
  Float32Array: Bt,
  Float64Array: Bt,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: oy,
  HTMLCollection: Pi,
  NodeList: Pi
}, B2 = /* @__PURE__ */ Y((e, t, r) => Ua in e && typeof e[Ua] == "function" ? e[Ua](t) : en && en in e && typeof e[en] == "function" ? e[en](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && Ph.has(e.constructor) ? Ph.get(e.constructor)(e, t) : Nh[r] ? Nh[r](e, t) : "", "inspectCustom"), j2 = Object.prototype.toString;
function Ni(e, t = {}) {
  const r = Vv(t, Ni), { customInspect: n } = r;
  let i = e === null ? "null" : typeof e;
  if (i === "object" && (i = j2.call(e).slice(8, -1)), i in Mh)
    return Mh[i](e, r);
  if (n && e) {
    const o = B2(e, r, i);
    if (o)
      return typeof o == "string" ? o : Ni(o, r);
  }
  const a = e ? Object.getPrototypeOf(e) : !1;
  return a === Object.prototype || a === null ? Dn(e, r) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? uf(e, r) : "constructor" in e ? e.constructor !== Object ? ay(e, r) : Dn(e, r) : e === Object(e) ? Dn(e, r) : r.stylize(String(e), i);
}
Y(Ni, "inspect");
var st = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {boolean}
   * @public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {boolean}
   * @public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {number}
   * @public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {boolean}
   * @public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *         return chai.util.eql(expected, actual, {
   *             comparator: (expected, actual) => {
   *                 // for non number comparison, use the default behavior
   *                 if(typeof expected !== 'number') return null;
   *                 // allow a difference of 10 between compared numbers
   *                 return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *             }
   *         })
   *     };
   *
   * @param {Function}
   * @public
   */
  deepEqual: null
};
function Re(e, t, r, n) {
  var i = {
    colors: n,
    depth: typeof r > "u" ? 2 : r,
    showHidden: t,
    truncate: st.truncateThreshold ? st.truncateThreshold : 1 / 0
  };
  return Ni(e, i);
}
Y(Re, "inspect");
function Ir(e) {
  var t = Re(e), r = Object.prototype.toString.call(e);
  if (st.truncateThreshold && t.length >= st.truncateThreshold) {
    if (r === "[object Function]")
      return !e.name || e.name === "" ? "[Function]" : "[Function: " + e.name + "]";
    if (r === "[object Array]")
      return "[ Array(" + e.length + ") ]";
    if (r === "[object Object]") {
      var n = Object.keys(e), i = n.length > 2 ? n.splice(0, 2).join(", ") + ", ..." : n.join(", ");
      return "{ Object (" + i + ") }";
    } else
      return t;
  } else
    return t;
}
Y(Ir, "objDisplay");
function cf(e, t) {
  var r = Oe(e, "negate"), n = Oe(e, "object"), i = t[3], a = Ji(e, t), o = r ? t[2] : t[1], s = Oe(e, "message");
  return typeof o == "function" && (o = o()), o = o || "", o = o.replace(/#\{this\}/g, function() {
    return Ir(n);
  }).replace(/#\{act\}/g, function() {
    return Ir(a);
  }).replace(/#\{exp\}/g, function() {
    return Ir(i);
  }), s ? s + ": " + o : o;
}
Y(cf, "getMessage");
function It(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), r = arguments.length === 3 ? r : !0;
  for (var i in n)
    (r || i !== "object" && i !== "ssfi" && i !== "lockSsfi" && i != "message") && (t.__flags[i] = n[i]);
}
Y(It, "transferFlags");
function mc(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Y(mc, "type");
function ff() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
Y(ff, "FakeMap");
ff.prototype = {
  get: /* @__PURE__ */ Y(function(t) {
    return t[this._key];
  }, "get"),
  set: /* @__PURE__ */ Y(function(t, r) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: r,
      configurable: !0
    });
  }, "set")
};
var cy = typeof WeakMap == "function" ? WeakMap : ff;
function gc(e, t, r) {
  if (!r || Lr(e) || Lr(t))
    return null;
  var n = r.get(e);
  if (n) {
    var i = n.get(t);
    if (typeof i == "boolean")
      return i;
  }
  return null;
}
Y(gc, "memoizeCompare");
function In(e, t, r, n) {
  if (!(!r || Lr(e) || Lr(t))) {
    var i = r.get(e);
    i ? i.set(t, n) : (i = new cy(), i.set(t, n), r.set(e, i));
  }
}
Y(In, "memoizeSet");
var fy = Hn;
function Hn(e, t, r) {
  if (r && r.comparator)
    return vc(e, t, r);
  var n = lf(e, t);
  return n !== null ? n : vc(e, t, r);
}
Y(Hn, "deepEqual");
function lf(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : Lr(e) || Lr(t) ? !1 : null;
}
Y(lf, "simpleEqual");
function vc(e, t, r) {
  r = r || {}, r.memoize = r.memoize === !1 ? !1 : r.memoize || new cy();
  var n = r && r.comparator, i = gc(e, t, r.memoize);
  if (i !== null)
    return i;
  var a = gc(t, e, r.memoize);
  if (a !== null)
    return a;
  if (n) {
    var o = n(e, t);
    if (o === !1 || o === !0)
      return In(e, t, r.memoize, o), o;
    var s = lf(e, t);
    if (s !== null)
      return s;
  }
  var u = mc(e);
  if (u !== mc(t))
    return In(e, t, r.memoize, !1), !1;
  In(e, t, r.memoize, !0);
  var c = ly(e, t, u, r);
  return In(e, t, r.memoize, c), c;
}
Y(vc, "extensiveDeepEqual");
function ly(e, t, r, n) {
  switch (r) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return Hn(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return hf(e, t, ["name", "message", "code"], n);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return gr(e, t, n);
    case "RegExp":
      return hy(e, t);
    case "Generator":
      return dy(e, t, n);
    case "DataView":
      return gr(new Uint8Array(e.buffer), new Uint8Array(t.buffer), n);
    case "ArrayBuffer":
      return gr(new Uint8Array(e), new Uint8Array(t), n);
    case "Set":
      return yc(e, t, n);
    case "Map":
      return yc(e, t, n);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return my(e, t, n);
  }
}
Y(ly, "extensiveDeepEqualByType");
function hy(e, t) {
  return e.toString() === t.toString();
}
Y(hy, "regexpEqual");
function yc(e, t, r) {
  try {
    if (e.size !== t.size)
      return !1;
    if (e.size === 0)
      return !0;
  } catch {
    return !1;
  }
  var n = [], i = [];
  return e.forEach(/* @__PURE__ */ Y(function(o, s) {
    n.push([o, s]);
  }, "gatherEntries")), t.forEach(/* @__PURE__ */ Y(function(o, s) {
    i.push([o, s]);
  }, "gatherEntries")), gr(n.sort(), i.sort(), r);
}
Y(yc, "entriesEqual");
function gr(e, t, r) {
  var n = e.length;
  if (n !== t.length)
    return !1;
  if (n === 0)
    return !0;
  for (var i = -1; ++i < n; )
    if (Hn(e[i], t[i], r) === !1)
      return !1;
  return !0;
}
Y(gr, "iterableEqual");
function dy(e, t, r) {
  return gr(Mi(e), Mi(t), r);
}
Y(dy, "generatorEqual");
function py(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
Y(py, "hasIteratorFunction");
function bc(e) {
  if (py(e))
    try {
      return Mi(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
Y(bc, "getIteratorEntries");
function Mi(e) {
  for (var t = e.next(), r = [t.value]; t.done === !1; )
    t = e.next(), r.push(t.value);
  return r;
}
Y(Mi, "getGeneratorEntries");
function _c(e) {
  var t = [];
  for (var r in e)
    t.push(r);
  return t;
}
Y(_c, "getEnumerableKeys");
function wc(e) {
  for (var t = [], r = Object.getOwnPropertySymbols(e), n = 0; n < r.length; n += 1) {
    var i = r[n];
    Object.getOwnPropertyDescriptor(e, i).enumerable && t.push(i);
  }
  return t;
}
Y(wc, "getEnumerableSymbols");
function hf(e, t, r, n) {
  var i = r.length;
  if (i === 0)
    return !0;
  for (var a = 0; a < i; a += 1)
    if (Hn(e[r[a]], t[r[a]], n) === !1)
      return !1;
  return !0;
}
Y(hf, "keysEqual");
function my(e, t, r) {
  var n = _c(e), i = _c(t), a = wc(e), o = wc(t);
  if (n = n.concat(a), i = i.concat(o), n.length && n.length === i.length)
    return gr(Ec(n).sort(), Ec(i).sort()) === !1 ? !1 : hf(e, t, n, r);
  var s = bc(e), u = bc(t);
  return s.length && s.length === u.length ? (s.sort(), u.sort(), gr(s, u, r)) : n.length === 0 && s.length === 0 && i.length === 0 && u.length === 0;
}
Y(my, "objectEqual");
function Lr(e) {
  return e === null || typeof e != "object";
}
Y(Lr, "isPrimitive");
function Ec(e) {
  return e.map(/* @__PURE__ */ Y(function(r) {
    return typeof r == "symbol" ? r.toString() : r;
  }, "mapSymbol"));
}
Y(Ec, "mapSymbols");
function Qi(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
Y(Qi, "hasProperty");
function gy(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((n) => {
    if (n === "constructor" || n === "__proto__" || n === "prototype")
      return {};
    const a = /^\[(\d+)\]$/.exec(n);
    let o = null;
    return a ? o = { i: parseFloat(a[1]) } : o = { p: n.replace(/\\([.[\]])/g, "$1") }, o;
  });
}
Y(gy, "parsePath");
function xc(e, t, r) {
  let n = e, i = null;
  r = typeof r > "u" ? t.length : r;
  for (let a = 0; a < r; a++) {
    const o = t[a];
    n && (typeof o.p > "u" ? n = n[o.i] : n = n[o.p], a === r - 1 && (i = n));
  }
  return i;
}
Y(xc, "internalGetPathValue");
function df(e, t) {
  const r = gy(t), n = r[r.length - 1], i = {
    parent: r.length > 1 ? xc(e, r, r.length - 1) : e,
    name: n.p || n.i,
    value: xc(e, r)
  };
  return i.exists = Qi(i.parent, i.name), i;
}
Y(df, "getPathInfo");
function R(e, t, r, n) {
  return Oe(this, "ssfi", r || R), Oe(this, "lockSsfi", n), Oe(this, "object", e), Oe(this, "message", t), Oe(this, "eql", st.deepEqual || fy), ln(this);
}
Y(R, "Assertion");
Object.defineProperty(R, "includeStack", {
  get: function() {
    return console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    ), st.includeStack;
  },
  set: function(e) {
    console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    ), st.includeStack = e;
  }
});
Object.defineProperty(R, "showDiff", {
  get: function() {
    return console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    ), st.showDiff;
  },
  set: function(e) {
    console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    ), st.showDiff = e;
  }
});
R.addProperty = function(e, t) {
  pf(this.prototype, e, t);
};
R.addMethod = function(e, t) {
  mf(this.prototype, e, t);
};
R.addChainableMethod = function(e, t, r) {
  yf(this.prototype, e, t, r);
};
R.overwriteProperty = function(e, t) {
  gf(this.prototype, e, t);
};
R.overwriteMethod = function(e, t) {
  vf(this.prototype, e, t);
};
R.overwriteChainableMethod = function(e, t, r) {
  bf(this.prototype, e, t, r);
};
R.prototype.assert = function(e, t, r, n, i, a) {
  var o = of(this, arguments);
  if (a !== !1 && (a = !0), n === void 0 && i === void 0 && (a = !1), st.showDiff !== !0 && (a = !1), !o) {
    t = cf(this, arguments);
    var s = Ji(this, arguments), u = {
      actual: s,
      expected: n,
      showDiff: a
    }, c = Ef(this, arguments);
    throw c && (u.operator = c), new Ie(
      t,
      u,
      st.includeStack ? this.assert : Oe(this, "ssfi")
    );
  }
};
Object.defineProperty(R.prototype, "_obj", {
  get: function() {
    return Oe(this, "object");
  },
  set: function(e) {
    Oe(this, "object", e);
  }
});
function Kn() {
  return st.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
Y(Kn, "isProxyEnabled");
function pf(e, t, r) {
  r = r === void 0 ? function() {
  } : r, Object.defineProperty(e, t, {
    get: /* @__PURE__ */ Y(function n() {
      !Kn() && !Oe(this, "lockSsfi") && Oe(this, "ssfi", n);
      var i = r.call(this);
      if (i !== void 0)
        return i;
      var a = new R();
      return It(this, a), a;
    }, "propertyGetter"),
    configurable: !0
  });
}
Y(pf, "addProperty");
var z2 = Object.getOwnPropertyDescriptor(function() {
}, "length");
function Yn(e, t, r) {
  return z2.configurable && Object.defineProperty(e, "length", {
    get: function() {
      throw Error(
        r ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".'
      );
    }
  }), e;
}
Y(Yn, "addLengthGuard");
function vy(e) {
  var t = Object.getOwnPropertyNames(e);
  function r(i) {
    t.indexOf(i) === -1 && t.push(i);
  }
  Y(r, "addProperty");
  for (var n = Object.getPrototypeOf(e); n !== null; )
    Object.getOwnPropertyNames(n).forEach(r), n = Object.getPrototypeOf(n);
  return t;
}
Y(vy, "getProperties");
var Dh = ["__flags", "__methods", "_obj", "assert"];
function ln(e, t) {
  return Kn() ? new Proxy(e, {
    get: /* @__PURE__ */ Y(function r(n, i) {
      if (typeof i == "string" && st.proxyExcludedKeys.indexOf(i) === -1 && !Reflect.has(n, i)) {
        if (t)
          throw Error(
            "Invalid Chai property: " + t + "." + i + '. See docs for proper usage of "' + t + '".'
          );
        var a = null, o = 4;
        throw vy(n).forEach(function(s) {
          if (
            // we actually mean to check `Object.prototype` here
            // eslint-disable-next-line no-prototype-builtins
            !Object.prototype.hasOwnProperty(s) && Dh.indexOf(s) === -1
          ) {
            var u = yy(i, s, o);
            u < o && (a = s, o = u);
          }
        }), Error(
          a !== null ? "Invalid Chai property: " + i + '. Did you mean "' + a + '"?' : "Invalid Chai property: " + i
        );
      }
      return Dh.indexOf(i) === -1 && !Oe(n, "lockSsfi") && Oe(n, "ssfi", r), Reflect.get(n, i);
    }, "proxyGetter")
  }) : e;
}
Y(ln, "proxify");
function yy(e, t, r) {
  if (Math.abs(e.length - t.length) >= r)
    return r;
  var n = [];
  for (let a = 0; a <= e.length; a++)
    n[a] = Array(t.length + 1).fill(0), n[a][0] = a;
  for (let a = 0; a < t.length; a++)
    n[0][a] = a;
  for (let a = 1; a <= e.length; a++) {
    var i = e.charCodeAt(a - 1);
    for (let o = 1; o <= t.length; o++) {
      if (Math.abs(a - o) >= r) {
        n[a][o] = r;
        continue;
      }
      n[a][o] = Math.min(
        n[a - 1][o] + 1,
        n[a][o - 1] + 1,
        n[a - 1][o - 1] + (i === t.charCodeAt(o - 1) ? 0 : 1)
      );
    }
  }
  return n[e.length][t.length];
}
Y(yy, "stringDistanceCapped");
function mf(e, t, r) {
  var n = /* @__PURE__ */ Y(function() {
    Oe(this, "lockSsfi") || Oe(this, "ssfi", n);
    var i = r.apply(this, arguments);
    if (i !== void 0)
      return i;
    var a = new R();
    return It(this, a), a;
  }, "methodWrapper");
  Yn(n, t, !1), e[t] = ln(n, t);
}
Y(mf, "addMethod");
function gf(e, t, r) {
  var n = Object.getOwnPropertyDescriptor(e, t), i = /* @__PURE__ */ Y(function() {
  }, "_super");
  n && typeof n.get == "function" && (i = n.get), Object.defineProperty(e, t, {
    get: /* @__PURE__ */ Y(function a() {
      !Kn() && !Oe(this, "lockSsfi") && Oe(this, "ssfi", a);
      var o = Oe(this, "lockSsfi");
      Oe(this, "lockSsfi", !0);
      var s = r(i).call(this);
      if (Oe(this, "lockSsfi", o), s !== void 0)
        return s;
      var u = new R();
      return It(this, u), u;
    }, "overwritingPropertyGetter"),
    configurable: !0
  });
}
Y(gf, "overwriteProperty");
function vf(e, t, r) {
  var n = e[t], i = /* @__PURE__ */ Y(function() {
    throw new Error(t + " is not a function");
  }, "_super");
  n && typeof n == "function" && (i = n);
  var a = /* @__PURE__ */ Y(function() {
    Oe(this, "lockSsfi") || Oe(this, "ssfi", a);
    var o = Oe(this, "lockSsfi");
    Oe(this, "lockSsfi", !0);
    var s = r(i).apply(this, arguments);
    if (Oe(this, "lockSsfi", o), s !== void 0)
      return s;
    var u = new R();
    return It(this, u), u;
  }, "overwritingMethodWrapper");
  Yn(a, t, !1), e[t] = ln(a, t);
}
Y(vf, "overwriteMethod");
var q2 = typeof Object.setPrototypeOf == "function", Fh = /* @__PURE__ */ Y(function() {
}, "testFn"), U2 = Object.getOwnPropertyNames(Fh).filter(function(e) {
  var t = Object.getOwnPropertyDescriptor(Fh, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), $2 = Function.prototype.call, W2 = Function.prototype.apply;
function yf(e, t, r, n) {
  typeof n != "function" && (n = /* @__PURE__ */ Y(function() {
  }, "chainingBehavior"));
  var i = {
    method: r,
    chainingBehavior: n
  };
  e.__methods || (e.__methods = {}), e.__methods[t] = i, Object.defineProperty(e, t, {
    get: /* @__PURE__ */ Y(function() {
      i.chainingBehavior.call(this);
      var o = /* @__PURE__ */ Y(function() {
        Oe(this, "lockSsfi") || Oe(this, "ssfi", o);
        var c = i.method.apply(this, arguments);
        if (c !== void 0)
          return c;
        var l = new R();
        return It(this, l), l;
      }, "chainableMethodWrapper");
      if (Yn(o, t, !0), q2) {
        var s = Object.create(this);
        s.call = $2, s.apply = W2, Object.setPrototypeOf(o, s);
      } else {
        var u = Object.getOwnPropertyNames(e);
        u.forEach(function(c) {
          if (U2.indexOf(c) === -1) {
            var l = Object.getOwnPropertyDescriptor(e, c);
            Object.defineProperty(o, c, l);
          }
        });
      }
      return It(this, o), ln(o);
    }, "chainableMethodGetter"),
    configurable: !0
  });
}
Y(yf, "addChainableMethod");
function bf(e, t, r, n) {
  var i = e.__methods[t], a = i.chainingBehavior;
  i.chainingBehavior = /* @__PURE__ */ Y(function() {
    var u = n(a).call(this);
    if (u !== void 0)
      return u;
    var c = new R();
    return It(this, c), c;
  }, "overwritingChainableMethodGetter");
  var o = i.method;
  i.method = /* @__PURE__ */ Y(function() {
    var u = r(o).apply(this, arguments);
    if (u !== void 0)
      return u;
    var c = new R();
    return It(this, c), c;
  }, "overwritingChainableMethodWrapper");
}
Y(bf, "overwriteChainableMethod");
function Di(e, t) {
  return Re(e) < Re(t) ? -1 : 1;
}
Y(Di, "compareByInspect");
function _f(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
Y(_f, "getOwnEnumerablePropertySymbols");
function wf(e) {
  return Object.keys(e).concat(_f(e));
}
Y(wf, "getOwnEnumerableProperties");
var Fi = Number.isNaN;
function by(e) {
  var t = ke(e), r = ["Array", "Object", "Function"];
  return r.indexOf(t) !== -1;
}
Y(by, "isObjectType");
function Ef(e, t) {
  var r = Oe(e, "operator"), n = Oe(e, "negate"), i = t[3], a = n ? t[2] : t[1];
  if (r)
    return r;
  if (typeof a == "function" && (a = a()), a = a || "", !!a && !/\shave\s/.test(a)) {
    var o = by(i);
    return /\snot\s/.test(a) ? o ? "notDeepStrictEqual" : "notStrictEqual" : o ? "deepStrictEqual" : "strictEqual";
  }
}
Y(Ef, "getOperator");
function ea(e) {
  return e.name;
}
Y(ea, "getName");
function Li(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Y(Li, "isRegExp");
function Ze(e) {
  return ["Number", "BigInt"].includes(ke(e));
}
Y(Ze, "isNumeric");
var { flag: $ } = ki;
[
  "to",
  "be",
  "been",
  "is",
  "and",
  "has",
  "have",
  "with",
  "that",
  "which",
  "at",
  "of",
  "same",
  "but",
  "does",
  "still",
  "also"
].forEach(function(e) {
  R.addProperty(e);
});
R.addProperty("not", function() {
  $(this, "negate", !0);
});
R.addProperty("deep", function() {
  $(this, "deep", !0);
});
R.addProperty("nested", function() {
  $(this, "nested", !0);
});
R.addProperty("own", function() {
  $(this, "own", !0);
});
R.addProperty("ordered", function() {
  $(this, "ordered", !0);
});
R.addProperty("any", function() {
  $(this, "any", !0), $(this, "all", !1);
});
R.addProperty("all", function() {
  $(this, "all", !0), $(this, "any", !1);
});
var Lh = {
  function: [
    "function",
    "asyncfunction",
    "generatorfunction",
    "asyncgeneratorfunction"
  ],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function xf(e, t) {
  t && $(this, "message", t), e = e.toLowerCase();
  var r = $(this, "object"), n = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const i = ke(r).toLowerCase();
  Lh.function.includes(e) ? this.assert(
    Lh[e].includes(i),
    "expected #{this} to be " + n + e,
    "expected #{this} not to be " + n + e
  ) : this.assert(
    e === i,
    "expected #{this} to be " + n + e,
    "expected #{this} not to be " + n + e
  );
}
Y(xf, "an");
R.addChainableMethod("an", xf);
R.addChainableMethod("a", xf);
function _y(e, t) {
  return Fi(e) && Fi(t) || e === t;
}
Y(_y, "SameValueZero");
function Xn() {
  $(this, "contains", !0);
}
Y(Xn, "includeChainingBehavior");
function Zn(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = ke(r).toLowerCase(), i = $(this, "message"), a = $(this, "negate"), o = $(this, "ssfi"), s = $(this, "deep"), u = s ? "deep " : "", c = s ? $(this, "eql") : _y;
  i = i ? i + ": " : "";
  var l = !1;
  switch (n) {
    case "string":
      l = r.indexOf(e) !== -1;
      break;
    case "weakset":
      if (s)
        throw new Ie(
          i + "unable to use .deep.include with WeakSet",
          void 0,
          o
        );
      l = r.has(e);
      break;
    case "map":
      r.forEach(function(m) {
        l = l || c(m, e);
      });
      break;
    case "set":
      s ? r.forEach(function(m) {
        l = l || c(m, e);
      }) : l = r.has(e);
      break;
    case "array":
      s ? l = r.some(function(m) {
        return c(m, e);
      }) : l = r.indexOf(e) !== -1;
      break;
    default:
      if (e !== Object(e))
        throw new Ie(
          i + "the given combination of arguments (" + n + " and " + ke(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + ke(e).toLowerCase(),
          void 0,
          o
        );
      var f = Object.keys(e), d = null, h = 0;
      if (f.forEach(function(m) {
        var p = new R(r);
        if (It(this, p, !0), $(p, "lockSsfi", !0), !a || f.length === 1) {
          p.property(m, e[m]);
          return;
        }
        try {
          p.property(m, e[m]);
        } catch (b) {
          if (!mt.compatibleConstructor(b, Ie))
            throw b;
          d === null && (d = b), h++;
        }
      }, this), a && f.length > 1 && h === f.length)
        throw d;
      return;
  }
  this.assert(
    l,
    "expected #{this} to " + u + "include " + Re(e),
    "expected #{this} to not " + u + "include " + Re(e)
  );
}
Y(Zn, "include");
R.addChainableMethod("include", Zn, Xn);
R.addChainableMethod("contain", Zn, Xn);
R.addChainableMethod("contains", Zn, Xn);
R.addChainableMethod("includes", Zn, Xn);
R.addProperty("ok", function() {
  this.assert(
    $(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
R.addProperty("true", function() {
  this.assert(
    $(this, "object") === !0,
    "expected #{this} to be true",
    "expected #{this} to be false",
    !$(this, "negate")
  );
});
R.addProperty("numeric", function() {
  const e = $(this, "object");
  this.assert(
    ["Number", "BigInt"].includes(ke(e)),
    "expected #{this} to be numeric",
    "expected #{this} to not be numeric",
    !$(this, "negate")
  );
});
R.addProperty("callable", function() {
  const e = $(this, "object"), t = $(this, "ssfi"), r = $(this, "message"), n = r ? `${r}: ` : "", i = $(this, "negate"), a = i ? `${n}expected ${Re(e)} not to be a callable function` : `${n}expected ${Re(e)} to be a callable function`, o = [
    "Function",
    "AsyncFunction",
    "GeneratorFunction",
    "AsyncGeneratorFunction"
  ].includes(ke(e));
  if (o && i || !o && !i)
    throw new Ie(a, void 0, t);
});
R.addProperty("false", function() {
  this.assert(
    $(this, "object") === !1,
    "expected #{this} to be false",
    "expected #{this} to be true",
    !!$(this, "negate")
  );
});
R.addProperty("null", function() {
  this.assert(
    $(this, "object") === null,
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
R.addProperty("undefined", function() {
  this.assert(
    $(this, "object") === void 0,
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
R.addProperty("NaN", function() {
  this.assert(
    Fi($(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function Sf() {
  var e = $(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
Y(Sf, "assertExist");
R.addProperty("exist", Sf);
R.addProperty("exists", Sf);
R.addProperty("empty", function() {
  var e = $(this, "object"), t = $(this, "ssfi"), r = $(this, "message"), n;
  switch (r = r ? r + ": " : "", ke(e).toLowerCase()) {
    case "array":
    case "string":
      n = e.length;
      break;
    case "map":
    case "set":
      n = e.size;
      break;
    case "weakmap":
    case "weakset":
      throw new Ie(
        r + ".empty was passed a weak collection",
        void 0,
        t
      );
    case "function":
      var i = r + ".empty was passed a function " + ea(e);
      throw new Ie(i.trim(), void 0, t);
    default:
      if (e !== Object(e))
        throw new Ie(
          r + ".empty was passed non-string primitive " + Re(e),
          void 0,
          t
        );
      n = Object.keys(e).length;
  }
  this.assert(
    n === 0,
    "expected #{this} to be empty",
    "expected #{this} not to be empty"
  );
});
function Of() {
  var e = $(this, "object"), t = ke(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
Y(Of, "checkArguments");
R.addProperty("arguments", Of);
R.addProperty("Arguments", Of);
function ta(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object");
  if ($(this, "deep")) {
    var n = $(this, "lockSsfi");
    $(this, "lockSsfi", !0), this.eql(e), $(this, "lockSsfi", n);
  } else
    this.assert(
      e === r,
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{exp}",
      e,
      this._obj,
      !0
    );
}
Y(ta, "assertEqual");
R.addMethod("equal", ta);
R.addMethod("equals", ta);
R.addMethod("eq", ta);
function Tf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "eql");
  this.assert(
    r(e, $(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    e,
    this._obj,
    !0
  );
}
Y(Tf, "assertEql");
R.addMethod("eql", Tf);
R.addMethod("eqls", Tf);
function ra(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase();
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    throw new Ie(
      a + "the argument to above must be a date",
      void 0,
      o
    );
  if (!Ze(e) && (n || Ze(r)))
    throw new Ie(
      a + "the argument to above must be a number",
      void 0,
      o
    );
  if (!n && s !== "date" && !Ze(r)) {
    var c = s === "string" ? "'" + r + "'" : r;
    throw new Ie(
      a + "expected " + c + " to be a number or a date",
      void 0,
      o
    );
  }
  if (n) {
    var l = "length", f;
    s === "map" || s === "set" ? (l = "size", f = r.size) : f = r.length, this.assert(
      f > e,
      "expected #{this} to have a " + l + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + l + " above #{exp}",
      e,
      f
    );
  } else
    this.assert(
      r > e,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      e
    );
}
Y(ra, "assertAbove");
R.addMethod("above", ra);
R.addMethod("gt", ra);
R.addMethod("greaterThan", ra);
function na(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to least must be a date";
  else if (!Ze(e) && (n || Ze(r)))
    c = a + "the argument to least must be a number";
  else if (!n && s !== "date" && !Ze(r)) {
    var f = s === "string" ? "'" + r + "'" : r;
    c = a + "expected " + f + " to be a number or a date";
  } else
    l = !1;
  if (l)
    throw new Ie(c, void 0, o);
  if (n) {
    var d = "length", h;
    s === "map" || s === "set" ? (d = "size", h = r.size) : h = r.length, this.assert(
      h >= e,
      "expected #{this} to have a " + d + " at least #{exp} but got #{act}",
      "expected #{this} to have a " + d + " below #{exp}",
      e,
      h
    );
  } else
    this.assert(
      r >= e,
      "expected #{this} to be at least #{exp}",
      "expected #{this} to be below #{exp}",
      e
    );
}
Y(na, "assertLeast");
R.addMethod("least", na);
R.addMethod("gte", na);
R.addMethod("greaterThanOrEqual", na);
function ia(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to below must be a date";
  else if (!Ze(e) && (n || Ze(r)))
    c = a + "the argument to below must be a number";
  else if (!n && s !== "date" && !Ze(r)) {
    var f = s === "string" ? "'" + r + "'" : r;
    c = a + "expected " + f + " to be a number or a date";
  } else
    l = !1;
  if (l)
    throw new Ie(c, void 0, o);
  if (n) {
    var d = "length", h;
    s === "map" || s === "set" ? (d = "size", h = r.size) : h = r.length, this.assert(
      h < e,
      "expected #{this} to have a " + d + " below #{exp} but got #{act}",
      "expected #{this} to not have a " + d + " below #{exp}",
      e,
      h
    );
  } else
    this.assert(
      r < e,
      "expected #{this} to be below #{exp}",
      "expected #{this} to be at least #{exp}",
      e
    );
}
Y(ia, "assertBelow");
R.addMethod("below", ia);
R.addMethod("lt", ia);
R.addMethod("lessThan", ia);
function aa(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to most must be a date";
  else if (!Ze(e) && (n || Ze(r)))
    c = a + "the argument to most must be a number";
  else if (!n && s !== "date" && !Ze(r)) {
    var f = s === "string" ? "'" + r + "'" : r;
    c = a + "expected " + f + " to be a number or a date";
  } else
    l = !1;
  if (l)
    throw new Ie(c, void 0, o);
  if (n) {
    var d = "length", h;
    s === "map" || s === "set" ? (d = "size", h = r.size) : h = r.length, this.assert(
      h <= e,
      "expected #{this} to have a " + d + " at most #{exp} but got #{act}",
      "expected #{this} to have a " + d + " above #{exp}",
      e,
      h
    );
  } else
    this.assert(
      r <= e,
      "expected #{this} to be at most #{exp}",
      "expected #{this} to be above #{exp}",
      e
    );
}
Y(aa, "assertMost");
R.addMethod("most", aa);
R.addMethod("lte", aa);
R.addMethod("lessThanOrEqual", aa);
R.addMethod("within", function(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "doLength"), a = $(this, "message"), o = a ? a + ": " : "", s = $(this, "ssfi"), u = ke(n).toLowerCase(), c = ke(e).toLowerCase(), l = ke(t).toLowerCase(), f, d = !0, h = c === "date" && l === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (i && u !== "map" && u !== "set" && new R(n, a, s, !0).to.have.property("length"), !i && u === "date" && (c !== "date" || l !== "date"))
    f = o + "the arguments to within must be dates";
  else if ((!Ze(e) || !Ze(t)) && (i || Ze(n)))
    f = o + "the arguments to within must be numbers";
  else if (!i && u !== "date" && !Ze(n)) {
    var m = u === "string" ? "'" + n + "'" : n;
    f = o + "expected " + m + " to be a number or a date";
  } else
    d = !1;
  if (d)
    throw new Ie(f, void 0, s);
  if (i) {
    var p = "length", b;
    u === "map" || u === "set" ? (p = "size", b = n.size) : b = n.length, this.assert(
      b >= e && b <= t,
      "expected #{this} to have a " + p + " within " + h,
      "expected #{this} to not have a " + p + " within " + h
    );
  } else
    this.assert(
      n >= e && n <= t,
      "expected #{this} to be within " + h,
      "expected #{this} to not be within " + h
    );
});
function Cf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "ssfi"), i = $(this, "message");
  try {
    var a = r instanceof e;
  } catch (s) {
    throw s instanceof TypeError ? (i = i ? i + ": " : "", new Ie(
      i + "The instanceof assertion needs a constructor but " + ke(e) + " was given.",
      void 0,
      n
    )) : s;
  }
  var o = ea(e);
  o == null && (o = "an unnamed constructor"), this.assert(
    a,
    "expected #{this} to be an instance of " + o,
    "expected #{this} to not be an instance of " + o
  );
}
Y(Cf, "assertInstanceOf");
R.addMethod("instanceof", Cf);
R.addMethod("instanceOf", Cf);
function Af(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "nested"), i = $(this, "own"), a = $(this, "message"), o = $(this, "object"), s = $(this, "ssfi"), u = typeof e;
  if (a = a ? a + ": " : "", n) {
    if (u !== "string")
      throw new Ie(
        a + "the argument to property must be a string when using nested syntax",
        void 0,
        s
      );
  } else if (u !== "string" && u !== "number" && u !== "symbol")
    throw new Ie(
      a + "the argument to property must be a string, number, or symbol",
      void 0,
      s
    );
  if (n && i)
    throw new Ie(
      a + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      s
    );
  if (o == null)
    throw new Ie(
      a + "Target cannot be null or undefined.",
      void 0,
      s
    );
  var c = $(this, "deep"), l = $(this, "negate"), f = n ? df(o, e) : null, d = n ? f.value : o[e], h = c ? $(this, "eql") : (b, y) => b === y, m = "";
  c && (m += "deep "), i && (m += "own "), n && (m += "nested "), m += "property ";
  var p;
  i ? p = Object.prototype.hasOwnProperty.call(o, e) : n ? p = f.exists : p = Qi(o, e), (!l || arguments.length === 1) && this.assert(
    p,
    "expected #{this} to have " + m + Re(e),
    "expected #{this} to not have " + m + Re(e)
  ), arguments.length > 1 && this.assert(
    p && h(t, d),
    "expected #{this} to have " + m + Re(e) + " of #{exp}, but got #{act}",
    "expected #{this} to not have " + m + Re(e) + " of #{act}",
    t,
    d
  ), $(this, "object", d);
}
Y(Af, "assertProperty");
R.addMethod("property", Af);
function Rf(e, t, r) {
  $(this, "own", !0), Af.apply(this, arguments);
}
Y(Rf, "assertOwnProperty");
R.addMethod("ownProperty", Rf);
R.addMethod("haveOwnProperty", Rf);
function If(e, t, r) {
  typeof t == "string" && (r = t, t = null), r && $(this, "message", r);
  var n = $(this, "object"), i = Object.getOwnPropertyDescriptor(Object(n), e), a = $(this, "eql");
  i && t ? this.assert(
    a(t, i),
    "expected the own property descriptor for " + Re(e) + " on #{this} to match " + Re(t) + ", got " + Re(i),
    "expected the own property descriptor for " + Re(e) + " on #{this} to not match " + Re(t),
    t,
    i,
    !0
  ) : this.assert(
    i,
    "expected #{this} to have an own property descriptor for " + Re(e),
    "expected #{this} to not have an own property descriptor for " + Re(e)
  ), $(this, "object", i);
}
Y(If, "assertOwnPropertyDescriptor");
R.addMethod("ownPropertyDescriptor", If);
R.addMethod("haveOwnPropertyDescriptor", If);
function kf() {
  $(this, "doLength", !0);
}
Y(kf, "assertLengthChain");
function Pf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = ke(r).toLowerCase(), i = $(this, "message"), a = $(this, "ssfi"), o = "length", s;
  switch (n) {
    case "map":
    case "set":
      o = "size", s = r.size;
      break;
    default:
      new R(r, i, a, !0).to.have.property("length"), s = r.length;
  }
  this.assert(
    s == e,
    "expected #{this} to have a " + o + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + o + " of #{act}",
    e,
    s
  );
}
Y(Pf, "assertLength");
R.addChainableMethod("length", Pf, kf);
R.addChainableMethod("lengthOf", Pf, kf);
function Nf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object");
  this.assert(
    e.exec(r),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
Y(Nf, "assertMatch");
R.addMethod("match", Nf);
R.addMethod("matches", Nf);
R.addMethod("string", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new R(r, n, i, !0).is.a("string"), this.assert(
    ~r.indexOf(e),
    "expected #{this} to contain " + Re(e),
    "expected #{this} to not contain " + Re(e)
  );
});
function Mf(e) {
  var t = $(this, "object"), r = ke(t), n = ke(e), i = $(this, "ssfi"), a = $(this, "deep"), o, s = "", u, c = !0, l = $(this, "message");
  l = l ? l + ": " : "";
  var f = l + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (r === "Map" || r === "Set")
    s = a ? "deeply " : "", u = [], t.forEach(function(_, E) {
      u.push(E);
    }), n !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (u = wf(t), n) {
      case "Array":
        if (arguments.length > 1)
          throw new Ie(f, void 0, i);
        break;
      case "Object":
        if (arguments.length > 1)
          throw new Ie(f, void 0, i);
        e = Object.keys(e);
        break;
      default:
        e = Array.prototype.slice.call(arguments);
    }
    e = e.map(function(_) {
      return typeof _ == "symbol" ? _ : String(_);
    });
  }
  if (!e.length)
    throw new Ie(l + "keys required", void 0, i);
  var d = e.length, h = $(this, "any"), m = $(this, "all"), p = e, b = a ? $(this, "eql") : (_, E) => _ === E;
  if (!h && !m && (m = !0), h && (c = p.some(function(_) {
    return u.some(function(E) {
      return b(_, E);
    });
  })), m && (c = p.every(function(_) {
    return u.some(function(E) {
      return b(_, E);
    });
  }), $(this, "contains") || (c = c && e.length == u.length)), d > 1) {
    e = e.map(function(_) {
      return Re(_);
    });
    var y = e.pop();
    m && (o = e.join(", ") + ", and " + y), h && (o = e.join(", ") + ", or " + y);
  } else
    o = Re(e[0]);
  o = (d > 1 ? "keys " : "key ") + o, o = ($(this, "contains") ? "contain " : "have ") + o, this.assert(
    c,
    "expected #{this} to " + s + o,
    "expected #{this} to not " + s + o,
    p.slice(0).sort(Di),
    u.sort(Di),
    !0
  );
}
Y(Mf, "assertKeys");
R.addMethod("keys", Mf);
R.addMethod("key", Mf);
function sa(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "ssfi"), a = $(this, "message"), o = $(this, "negate") || !1;
  new R(n, a, i, !0).is.a("function"), (Li(e) || typeof e == "string") && (t = e, e = null);
  let s, u = !1;
  try {
    n();
  } catch (_) {
    u = !0, s = _;
  }
  var c = e === void 0 && t === void 0, l = !!(e && t), f = !1, d = !1;
  if (c || !c && !o) {
    var h = "an error";
    e instanceof Error ? h = "#{exp}" : e && (h = mt.getConstructorName(e));
    let _ = s;
    if (s instanceof Error)
      _ = s.toString();
    else if (typeof s == "string")
      _ = s;
    else if (s && (typeof s == "object" || typeof s == "function"))
      try {
        _ = mt.getConstructorName(s);
      } catch {
      }
    this.assert(
      u,
      "expected #{this} to throw " + h,
      "expected #{this} to not throw an error but #{act} was thrown",
      e && e.toString(),
      _
    );
  }
  if (e && s) {
    if (e instanceof Error) {
      var m = mt.compatibleInstance(
        s,
        e
      );
      m === o && (l && o ? f = !0 : this.assert(
        o,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (s && !o ? " but #{act} was thrown" : ""),
        e.toString(),
        s.toString()
      ));
    }
    var p = mt.compatibleConstructor(
      s,
      e
    );
    p === o && (l && o ? f = !0 : this.assert(
      o,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (s ? " but #{act} was thrown" : ""),
      e instanceof Error ? e.toString() : e && mt.getConstructorName(e),
      s instanceof Error ? s.toString() : s && mt.getConstructorName(s)
    ));
  }
  if (s && t !== void 0 && t !== null) {
    var b = "including";
    Li(t) && (b = "matching");
    var y = mt.compatibleMessage(
      s,
      t
    );
    y === o && (l && o ? d = !0 : this.assert(
      o,
      "expected #{this} to throw error " + b + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + b + " #{exp}",
      t,
      mt.getMessage(s)
    ));
  }
  f && d && this.assert(
    o,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (s ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && mt.getConstructorName(e),
    s instanceof Error ? s.toString() : s && mt.getConstructorName(s)
  ), $(this, "object", s);
}
Y(sa, "assertThrows");
R.addMethod("throw", sa);
R.addMethod("throws", sa);
R.addMethod("Throw", sa);
function Df(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "itself"), i = typeof r == "function" && !n ? r.prototype[e] : r[e];
  this.assert(
    typeof i == "function",
    "expected #{this} to respond to " + Re(e),
    "expected #{this} to not respond to " + Re(e)
  );
}
Y(Df, "respondTo");
R.addMethod("respondTo", Df);
R.addMethod("respondsTo", Df);
R.addProperty("itself", function() {
  $(this, "itself", !0);
});
function Ff(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = e(r);
  this.assert(
    n,
    "expected #{this} to satisfy " + Ir(e),
    "expected #{this} to not satisfy" + Ir(e),
    !$(this, "negate"),
    n
  );
}
Y(Ff, "satisfy");
R.addMethod("satisfy", Ff);
R.addMethod("satisfies", Ff);
function Lf(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new R(n, i, a, !0).is.numeric;
  let o = "A `delta` value is required for `closeTo`";
  if (t == null)
    throw new Ie(
      i ? `${i}: ${o}` : o,
      void 0,
      a
    );
  if (new R(t, i, a, !0).is.numeric, o = "A `expected` value is required for `closeTo`", e == null)
    throw new Ie(
      i ? `${i}: ${o}` : o,
      void 0,
      a
    );
  new R(e, i, a, !0).is.numeric;
  const s = /* @__PURE__ */ Y((c) => c < 0n ? -c : c, "abs"), u = /* @__PURE__ */ Y((c) => parseFloat(parseFloat(c).toPrecision(12)), "strip");
  this.assert(
    u(s(n - e)) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
Y(Lf, "closeTo");
R.addMethod("closeTo", Lf);
R.addMethod("approximately", Lf);
function wy(e, t, r, n, i) {
  let a = Array.from(t), o = Array.from(e);
  if (!n) {
    if (o.length !== a.length)
      return !1;
    a = a.slice();
  }
  return o.every(function(s, u) {
    if (i)
      return r ? r(s, a[u]) : s === a[u];
    if (!r) {
      var c = a.indexOf(s);
      return c === -1 ? !1 : (n || a.splice(c, 1), !0);
    }
    return a.some(function(l, f) {
      return r(s, l) ? (n || a.splice(f, 1), !0) : !1;
    });
  });
}
Y(wy, "isSubsetOf");
R.addMethod("members", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new R(r, n, i, !0).to.be.iterable, new R(e, n, i, !0).to.be.iterable;
  var a = $(this, "contains"), o = $(this, "ordered"), s, u, c;
  a ? (s = o ? "an ordered superset" : "a superset", u = "expected #{this} to be " + s + " of #{exp}", c = "expected #{this} to not be " + s + " of #{exp}") : (s = o ? "ordered members" : "members", u = "expected #{this} to have the same " + s + " as #{exp}", c = "expected #{this} to not have the same " + s + " as #{exp}");
  var l = $(this, "deep") ? $(this, "eql") : void 0;
  this.assert(
    wy(e, r, l, a, o),
    u,
    c,
    e,
    r,
    !0
  );
});
R.addProperty("iterable", function(e) {
  e && $(this, "message", e);
  var t = $(this, "object");
  this.assert(
    t != null && t[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    t
  );
});
function Ey(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi"), a = $(this, "contains"), o = $(this, "deep"), s = $(this, "eql");
  new R(e, n, i, !0).to.be.an("array"), a ? this.assert(
    e.some(function(u) {
      return r.indexOf(u) > -1;
    }),
    "expected #{this} to contain one of #{exp}",
    "expected #{this} to not contain one of #{exp}",
    e,
    r
  ) : o ? this.assert(
    e.some(function(u) {
      return s(r, u);
    }),
    "expected #{this} to deeply equal one of #{exp}",
    "expected #{this} to deeply equal one of #{exp}",
    e,
    r
  ) : this.assert(
    e.indexOf(r) > -1,
    "expected #{this} to be one of #{exp}",
    "expected #{this} to not be one of #{exp}",
    e,
    r
  );
}
Y(Ey, "oneOf");
R.addMethod("oneOf", Ey);
function Bf(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new R(n, i, a, !0).is.a("function");
  var o;
  t ? (new R(e, i, a, !0).to.have.property(t), o = e[t]) : (new R(e, i, a, !0).is.a("function"), o = e()), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "change"), $(this, "realDelta", s !== o), this.assert(
    o !== s,
    "expected " + u + " to change",
    "expected " + u + " to not change"
  );
}
Y(Bf, "assertChanges");
R.addMethod("change", Bf);
R.addMethod("changes", Bf);
function jf(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new R(n, i, a, !0).is.a("function");
  var o;
  t ? (new R(e, i, a, !0).to.have.property(t), o = e[t]) : (new R(e, i, a, !0).is.a("function"), o = e()), new R(o, i, a, !0).is.a("number"), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "increase"), $(this, "realDelta", s - o), this.assert(
    s - o > 0,
    "expected " + u + " to increase",
    "expected " + u + " to not increase"
  );
}
Y(jf, "assertIncreases");
R.addMethod("increase", jf);
R.addMethod("increases", jf);
function zf(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new R(n, i, a, !0).is.a("function");
  var o;
  t ? (new R(e, i, a, !0).to.have.property(t), o = e[t]) : (new R(e, i, a, !0).is.a("function"), o = e()), new R(o, i, a, !0).is.a("number"), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "decrease"), $(this, "realDelta", o - s), this.assert(
    s - o < 0,
    "expected " + u + " to decrease",
    "expected " + u + " to not decrease"
  );
}
Y(zf, "assertDecreases");
R.addMethod("decrease", zf);
R.addMethod("decreases", zf);
function xy(e, t) {
  t && $(this, "message", t);
  var r = $(this, "deltaMsgObj"), n = $(this, "initialDeltaValue"), i = $(this, "finalDeltaValue"), a = $(this, "deltaBehavior"), o = $(this, "realDelta"), s;
  a === "change" ? s = Math.abs(i - n) === Math.abs(e) : s = o === Math.abs(e), this.assert(
    s,
    "expected " + r + " to " + a + " by " + e,
    "expected " + r + " to not " + a + " by " + e
  );
}
Y(xy, "assertDelta");
R.addMethod("by", xy);
R.addProperty("extensible", function() {
  var e = $(this, "object"), t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
R.addProperty("sealed", function() {
  var e = $(this, "object"), t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
R.addProperty("frozen", function() {
  var e = $(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
R.addProperty("finite", function(e) {
  var t = $(this, "object");
  this.assert(
    typeof t == "number" && isFinite(t),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function Bi(e, t) {
  return e === t ? !0 : typeof t != typeof e ? !1 : typeof e != "object" || e === null ? e === t : t ? Array.isArray(e) ? Array.isArray(t) ? e.every(function(r) {
    return t.some(function(n) {
      return Bi(r, n);
    });
  }) : !1 : e instanceof Date ? t instanceof Date ? e.getTime() === t.getTime() : !1 : Object.keys(e).every(function(r) {
    var n = e[r], i = t[r];
    return typeof n == "object" && n !== null && i !== null ? Bi(n, i) : typeof n == "function" ? n(i) : i === n;
  }) : !1;
}
Y(Bi, "compareSubset");
R.addMethod("containSubset", function(e) {
  const t = Oe(this, "object"), r = st.showDiff;
  this.assert(
    Bi(e, t),
    "expected #{act} to contain subset #{exp}",
    "expected #{act} to not contain subset #{exp}",
    e,
    t,
    r
  );
});
function ji(e, t) {
  return new R(e, t);
}
Y(ji, "expect");
ji.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "expect.fail()", new Ie(
    r,
    {
      actual: e,
      expected: t,
      operator: n
    },
    ji.fail
  );
};
var Sy = {};
sf(Sy, {
  Should: () => V2,
  should: () => G2
});
function qf() {
  function e() {
    return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new R(this.valueOf(), null, e) : new R(this, null, e);
  }
  Y(e, "shouldGetter");
  function t(n) {
    Object.defineProperty(this, "should", {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  }
  Y(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", {
    set: t,
    get: e,
    configurable: !0
  });
  var r = {};
  return r.fail = function(n, i, a, o) {
    throw arguments.length < 2 && (a = n, n = void 0), a = a || "should.fail()", new Ie(
      a,
      {
        actual: n,
        expected: i,
        operator: o
      },
      r.fail
    );
  }, r.equal = function(n, i, a) {
    new R(n, a).to.equal(i);
  }, r.Throw = function(n, i, a, o) {
    new R(n, o).to.Throw(i, a);
  }, r.exist = function(n, i) {
    new R(n, i).to.exist;
  }, r.not = {}, r.not.equal = function(n, i, a) {
    new R(n, a).to.not.equal(i);
  }, r.not.Throw = function(n, i, a, o) {
    new R(n, o).to.not.Throw(i, a);
  }, r.not.exist = function(n, i) {
    new R(n, i).to.not.exist;
  }, r.throw = r.Throw, r.not.throw = r.not.Throw, r;
}
Y(qf, "loadShould");
var G2 = qf, V2 = qf;
function A(e, t) {
  var r = new R(null, null, A, !0);
  r.assert(e, t, "[ negation message unavailable ]");
}
Y(A, "assert");
A.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "assert.fail()", new Ie(
    r,
    {
      actual: e,
      expected: t,
      operator: n
    },
    A.fail
  );
};
A.isOk = function(e, t) {
  new R(e, t, A.isOk, !0).is.ok;
};
A.isNotOk = function(e, t) {
  new R(e, t, A.isNotOk, !0).is.not.ok;
};
A.equal = function(e, t, r) {
  var n = new R(e, r, A.equal, !0);
  n.assert(
    t == Oe(n, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    t,
    e,
    !0
  );
};
A.notEqual = function(e, t, r) {
  var n = new R(e, r, A.notEqual, !0);
  n.assert(
    t != Oe(n, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    t,
    e,
    !0
  );
};
A.strictEqual = function(e, t, r) {
  new R(e, r, A.strictEqual, !0).to.equal(t);
};
A.notStrictEqual = function(e, t, r) {
  new R(e, r, A.notStrictEqual, !0).to.not.equal(t);
};
A.deepEqual = A.deepStrictEqual = function(e, t, r) {
  new R(e, r, A.deepEqual, !0).to.eql(t);
};
A.notDeepEqual = function(e, t, r) {
  new R(e, r, A.notDeepEqual, !0).to.not.eql(t);
};
A.isAbove = function(e, t, r) {
  new R(e, r, A.isAbove, !0).to.be.above(t);
};
A.isAtLeast = function(e, t, r) {
  new R(e, r, A.isAtLeast, !0).to.be.least(t);
};
A.isBelow = function(e, t, r) {
  new R(e, r, A.isBelow, !0).to.be.below(t);
};
A.isAtMost = function(e, t, r) {
  new R(e, r, A.isAtMost, !0).to.be.most(t);
};
A.isTrue = function(e, t) {
  new R(e, t, A.isTrue, !0).is.true;
};
A.isNotTrue = function(e, t) {
  new R(e, t, A.isNotTrue, !0).to.not.equal(!0);
};
A.isFalse = function(e, t) {
  new R(e, t, A.isFalse, !0).is.false;
};
A.isNotFalse = function(e, t) {
  new R(e, t, A.isNotFalse, !0).to.not.equal(!1);
};
A.isNull = function(e, t) {
  new R(e, t, A.isNull, !0).to.equal(null);
};
A.isNotNull = function(e, t) {
  new R(e, t, A.isNotNull, !0).to.not.equal(null);
};
A.isNaN = function(e, t) {
  new R(e, t, A.isNaN, !0).to.be.NaN;
};
A.isNotNaN = function(e, t) {
  new R(e, t, A.isNotNaN, !0).not.to.be.NaN;
};
A.exists = function(e, t) {
  new R(e, t, A.exists, !0).to.exist;
};
A.notExists = function(e, t) {
  new R(e, t, A.notExists, !0).to.not.exist;
};
A.isUndefined = function(e, t) {
  new R(e, t, A.isUndefined, !0).to.equal(void 0);
};
A.isDefined = function(e, t) {
  new R(e, t, A.isDefined, !0).to.not.equal(void 0);
};
A.isCallable = function(e, t) {
  new R(e, t, A.isCallable, !0).is.callable;
};
A.isNotCallable = function(e, t) {
  new R(e, t, A.isNotCallable, !0).is.not.callable;
};
A.isObject = function(e, t) {
  new R(e, t, A.isObject, !0).to.be.a("object");
};
A.isNotObject = function(e, t) {
  new R(e, t, A.isNotObject, !0).to.not.be.a("object");
};
A.isArray = function(e, t) {
  new R(e, t, A.isArray, !0).to.be.an("array");
};
A.isNotArray = function(e, t) {
  new R(e, t, A.isNotArray, !0).to.not.be.an("array");
};
A.isString = function(e, t) {
  new R(e, t, A.isString, !0).to.be.a("string");
};
A.isNotString = function(e, t) {
  new R(e, t, A.isNotString, !0).to.not.be.a("string");
};
A.isNumber = function(e, t) {
  new R(e, t, A.isNumber, !0).to.be.a("number");
};
A.isNotNumber = function(e, t) {
  new R(e, t, A.isNotNumber, !0).to.not.be.a("number");
};
A.isNumeric = function(e, t) {
  new R(e, t, A.isNumeric, !0).is.numeric;
};
A.isNotNumeric = function(e, t) {
  new R(e, t, A.isNotNumeric, !0).is.not.numeric;
};
A.isFinite = function(e, t) {
  new R(e, t, A.isFinite, !0).to.be.finite;
};
A.isBoolean = function(e, t) {
  new R(e, t, A.isBoolean, !0).to.be.a("boolean");
};
A.isNotBoolean = function(e, t) {
  new R(e, t, A.isNotBoolean, !0).to.not.be.a("boolean");
};
A.typeOf = function(e, t, r) {
  new R(e, r, A.typeOf, !0).to.be.a(t);
};
A.notTypeOf = function(e, t, r) {
  new R(e, r, A.notTypeOf, !0).to.not.be.a(t);
};
A.instanceOf = function(e, t, r) {
  new R(e, r, A.instanceOf, !0).to.be.instanceOf(t);
};
A.notInstanceOf = function(e, t, r) {
  new R(e, r, A.notInstanceOf, !0).to.not.be.instanceOf(
    t
  );
};
A.include = function(e, t, r) {
  new R(e, r, A.include, !0).include(t);
};
A.notInclude = function(e, t, r) {
  new R(e, r, A.notInclude, !0).not.include(t);
};
A.deepInclude = function(e, t, r) {
  new R(e, r, A.deepInclude, !0).deep.include(t);
};
A.notDeepInclude = function(e, t, r) {
  new R(e, r, A.notDeepInclude, !0).not.deep.include(t);
};
A.nestedInclude = function(e, t, r) {
  new R(e, r, A.nestedInclude, !0).nested.include(t);
};
A.notNestedInclude = function(e, t, r) {
  new R(e, r, A.notNestedInclude, !0).not.nested.include(
    t
  );
};
A.deepNestedInclude = function(e, t, r) {
  new R(e, r, A.deepNestedInclude, !0).deep.nested.include(
    t
  );
};
A.notDeepNestedInclude = function(e, t, r) {
  new R(
    e,
    r,
    A.notDeepNestedInclude,
    !0
  ).not.deep.nested.include(t);
};
A.ownInclude = function(e, t, r) {
  new R(e, r, A.ownInclude, !0).own.include(t);
};
A.notOwnInclude = function(e, t, r) {
  new R(e, r, A.notOwnInclude, !0).not.own.include(t);
};
A.deepOwnInclude = function(e, t, r) {
  new R(e, r, A.deepOwnInclude, !0).deep.own.include(t);
};
A.notDeepOwnInclude = function(e, t, r) {
  new R(e, r, A.notDeepOwnInclude, !0).not.deep.own.include(
    t
  );
};
A.match = function(e, t, r) {
  new R(e, r, A.match, !0).to.match(t);
};
A.notMatch = function(e, t, r) {
  new R(e, r, A.notMatch, !0).to.not.match(t);
};
A.property = function(e, t, r) {
  new R(e, r, A.property, !0).to.have.property(t);
};
A.notProperty = function(e, t, r) {
  new R(e, r, A.notProperty, !0).to.not.have.property(t);
};
A.propertyVal = function(e, t, r, n) {
  new R(e, n, A.propertyVal, !0).to.have.property(t, r);
};
A.notPropertyVal = function(e, t, r, n) {
  new R(e, n, A.notPropertyVal, !0).to.not.have.property(
    t,
    r
  );
};
A.deepPropertyVal = function(e, t, r, n) {
  new R(e, n, A.deepPropertyVal, !0).to.have.deep.property(
    t,
    r
  );
};
A.notDeepPropertyVal = function(e, t, r, n) {
  new R(
    e,
    n,
    A.notDeepPropertyVal,
    !0
  ).to.not.have.deep.property(t, r);
};
A.ownProperty = function(e, t, r) {
  new R(e, r, A.ownProperty, !0).to.have.own.property(t);
};
A.notOwnProperty = function(e, t, r) {
  new R(e, r, A.notOwnProperty, !0).to.not.have.own.property(
    t
  );
};
A.ownPropertyVal = function(e, t, r, n) {
  new R(e, n, A.ownPropertyVal, !0).to.have.own.property(
    t,
    r
  );
};
A.notOwnPropertyVal = function(e, t, r, n) {
  new R(
    e,
    n,
    A.notOwnPropertyVal,
    !0
  ).to.not.have.own.property(t, r);
};
A.deepOwnPropertyVal = function(e, t, r, n) {
  new R(
    e,
    n,
    A.deepOwnPropertyVal,
    !0
  ).to.have.deep.own.property(t, r);
};
A.notDeepOwnPropertyVal = function(e, t, r, n) {
  new R(
    e,
    n,
    A.notDeepOwnPropertyVal,
    !0
  ).to.not.have.deep.own.property(t, r);
};
A.nestedProperty = function(e, t, r) {
  new R(e, r, A.nestedProperty, !0).to.have.nested.property(
    t
  );
};
A.notNestedProperty = function(e, t, r) {
  new R(
    e,
    r,
    A.notNestedProperty,
    !0
  ).to.not.have.nested.property(t);
};
A.nestedPropertyVal = function(e, t, r, n) {
  new R(
    e,
    n,
    A.nestedPropertyVal,
    !0
  ).to.have.nested.property(t, r);
};
A.notNestedPropertyVal = function(e, t, r, n) {
  new R(
    e,
    n,
    A.notNestedPropertyVal,
    !0
  ).to.not.have.nested.property(t, r);
};
A.deepNestedPropertyVal = function(e, t, r, n) {
  new R(
    e,
    n,
    A.deepNestedPropertyVal,
    !0
  ).to.have.deep.nested.property(t, r);
};
A.notDeepNestedPropertyVal = function(e, t, r, n) {
  new R(
    e,
    n,
    A.notDeepNestedPropertyVal,
    !0
  ).to.not.have.deep.nested.property(t, r);
};
A.lengthOf = function(e, t, r) {
  new R(e, r, A.lengthOf, !0).to.have.lengthOf(t);
};
A.hasAnyKeys = function(e, t, r) {
  new R(e, r, A.hasAnyKeys, !0).to.have.any.keys(t);
};
A.hasAllKeys = function(e, t, r) {
  new R(e, r, A.hasAllKeys, !0).to.have.all.keys(t);
};
A.containsAllKeys = function(e, t, r) {
  new R(e, r, A.containsAllKeys, !0).to.contain.all.keys(
    t
  );
};
A.doesNotHaveAnyKeys = function(e, t, r) {
  new R(e, r, A.doesNotHaveAnyKeys, !0).to.not.have.any.keys(
    t
  );
};
A.doesNotHaveAllKeys = function(e, t, r) {
  new R(e, r, A.doesNotHaveAllKeys, !0).to.not.have.all.keys(
    t
  );
};
A.hasAnyDeepKeys = function(e, t, r) {
  new R(e, r, A.hasAnyDeepKeys, !0).to.have.any.deep.keys(
    t
  );
};
A.hasAllDeepKeys = function(e, t, r) {
  new R(e, r, A.hasAllDeepKeys, !0).to.have.all.deep.keys(
    t
  );
};
A.containsAllDeepKeys = function(e, t, r) {
  new R(
    e,
    r,
    A.containsAllDeepKeys,
    !0
  ).to.contain.all.deep.keys(t);
};
A.doesNotHaveAnyDeepKeys = function(e, t, r) {
  new R(
    e,
    r,
    A.doesNotHaveAnyDeepKeys,
    !0
  ).to.not.have.any.deep.keys(t);
};
A.doesNotHaveAllDeepKeys = function(e, t, r) {
  new R(
    e,
    r,
    A.doesNotHaveAllDeepKeys,
    !0
  ).to.not.have.all.deep.keys(t);
};
A.throws = function(e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && (r = t, t = null);
  var i = new R(e, n, A.throws, !0).to.throw(
    t,
    r
  );
  return Oe(i, "object");
};
A.doesNotThrow = function(e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && (r = t, t = null), new R(e, n, A.doesNotThrow, !0).to.not.throw(
    t,
    r
  );
};
A.operator = function(e, t, r, n) {
  var i;
  switch (t) {
    case "==":
      i = e == r;
      break;
    case "===":
      i = e === r;
      break;
    case ">":
      i = e > r;
      break;
    case ">=":
      i = e >= r;
      break;
    case "<":
      i = e < r;
      break;
    case "<=":
      i = e <= r;
      break;
    case "!=":
      i = e != r;
      break;
    case "!==":
      i = e !== r;
      break;
    default:
      throw n = n && n + ": ", new Ie(
        n + 'Invalid operator "' + t + '"',
        void 0,
        A.operator
      );
  }
  var a = new R(i, n, A.operator, !0);
  a.assert(
    Oe(a, "object") === !0,
    "expected " + Re(e) + " to be " + t + " " + Re(r),
    "expected " + Re(e) + " to not be " + t + " " + Re(r)
  );
};
A.closeTo = function(e, t, r, n) {
  new R(e, n, A.closeTo, !0).to.be.closeTo(t, r);
};
A.approximately = function(e, t, r, n) {
  new R(e, n, A.approximately, !0).to.be.approximately(
    t,
    r
  );
};
A.sameMembers = function(e, t, r) {
  new R(e, r, A.sameMembers, !0).to.have.same.members(t);
};
A.notSameMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.notSameMembers,
    !0
  ).to.not.have.same.members(t);
};
A.sameDeepMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.sameDeepMembers,
    !0
  ).to.have.same.deep.members(t);
};
A.notSameDeepMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.notSameDeepMembers,
    !0
  ).to.not.have.same.deep.members(t);
};
A.sameOrderedMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.sameOrderedMembers,
    !0
  ).to.have.same.ordered.members(t);
};
A.notSameOrderedMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.notSameOrderedMembers,
    !0
  ).to.not.have.same.ordered.members(t);
};
A.sameDeepOrderedMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.sameDeepOrderedMembers,
    !0
  ).to.have.same.deep.ordered.members(t);
};
A.notSameDeepOrderedMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.notSameDeepOrderedMembers,
    !0
  ).to.not.have.same.deep.ordered.members(t);
};
A.includeMembers = function(e, t, r) {
  new R(e, r, A.includeMembers, !0).to.include.members(
    t
  );
};
A.notIncludeMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.notIncludeMembers,
    !0
  ).to.not.include.members(t);
};
A.includeDeepMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.includeDeepMembers,
    !0
  ).to.include.deep.members(t);
};
A.notIncludeDeepMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.notIncludeDeepMembers,
    !0
  ).to.not.include.deep.members(t);
};
A.includeOrderedMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.includeOrderedMembers,
    !0
  ).to.include.ordered.members(t);
};
A.notIncludeOrderedMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.notIncludeOrderedMembers,
    !0
  ).to.not.include.ordered.members(t);
};
A.includeDeepOrderedMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.includeDeepOrderedMembers,
    !0
  ).to.include.deep.ordered.members(t);
};
A.notIncludeDeepOrderedMembers = function(e, t, r) {
  new R(
    e,
    r,
    A.notIncludeDeepOrderedMembers,
    !0
  ).to.not.include.deep.ordered.members(t);
};
A.oneOf = function(e, t, r) {
  new R(e, r, A.oneOf, !0).to.be.oneOf(t);
};
A.isIterable = function(e, t) {
  if (e == null || !e[Symbol.iterator])
    throw t = t ? `${t} expected ${Re(e)} to be an iterable` : `expected ${Re(e)} to be an iterable`, new Ie(t, void 0, A.isIterable);
};
A.changes = function(e, t, r, n) {
  arguments.length === 3 && typeof t == "function" && (n = r, r = null), new R(e, n, A.changes, !0).to.change(t, r);
};
A.changesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new R(e, i, A.changesBy, !0).to.change(t, r).by(n);
};
A.doesNotChange = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new R(e, n, A.doesNotChange, !0).to.not.change(
    t,
    r
  );
};
A.changesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new R(e, i, A.changesButNotBy, !0).to.change(t, r).but.not.by(n);
};
A.increases = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new R(e, n, A.increases, !0).to.increase(t, r);
};
A.increasesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new R(e, i, A.increasesBy, !0).to.increase(t, r).by(n);
};
A.doesNotIncrease = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new R(e, n, A.doesNotIncrease, !0).to.not.increase(
    t,
    r
  );
};
A.increasesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new R(e, i, A.increasesButNotBy, !0).to.increase(t, r).but.not.by(n);
};
A.decreases = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new R(e, n, A.decreases, !0).to.decrease(t, r);
};
A.decreasesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new R(e, i, A.decreasesBy, !0).to.decrease(t, r).by(n);
};
A.doesNotDecrease = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new R(e, n, A.doesNotDecrease, !0).to.not.decrease(
    t,
    r
  );
};
A.doesNotDecreaseBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  return new R(e, i, A.doesNotDecreaseBy, !0).to.not.decrease(t, r).by(n);
};
A.decreasesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new R(e, i, A.decreasesButNotBy, !0).to.decrease(t, r).but.not.by(n);
};
A.ifError = function(e) {
  if (e)
    throw e;
};
A.isExtensible = function(e, t) {
  new R(e, t, A.isExtensible, !0).to.be.extensible;
};
A.isNotExtensible = function(e, t) {
  new R(e, t, A.isNotExtensible, !0).to.not.be.extensible;
};
A.isSealed = function(e, t) {
  new R(e, t, A.isSealed, !0).to.be.sealed;
};
A.isNotSealed = function(e, t) {
  new R(e, t, A.isNotSealed, !0).to.not.be.sealed;
};
A.isFrozen = function(e, t) {
  new R(e, t, A.isFrozen, !0).to.be.frozen;
};
A.isNotFrozen = function(e, t) {
  new R(e, t, A.isNotFrozen, !0).to.not.be.frozen;
};
A.isEmpty = function(e, t) {
  new R(e, t, A.isEmpty, !0).to.be.empty;
};
A.isNotEmpty = function(e, t) {
  new R(e, t, A.isNotEmpty, !0).to.not.be.empty;
};
A.containsSubset = function(e, t, r) {
  new R(e, r).to.containSubset(t);
};
A.doesNotContainSubset = function(e, t, r) {
  new R(e, r).to.not.containSubset(t);
};
var H2 = [
  ["isOk", "ok"],
  ["isNotOk", "notOk"],
  ["throws", "throw"],
  ["throws", "Throw"],
  ["isExtensible", "extensible"],
  ["isNotExtensible", "notExtensible"],
  ["isSealed", "sealed"],
  ["isNotSealed", "notSealed"],
  ["isFrozen", "frozen"],
  ["isNotFrozen", "notFrozen"],
  ["isEmpty", "empty"],
  ["isNotEmpty", "notEmpty"],
  ["isCallable", "isFunction"],
  ["isNotCallable", "isNotFunction"],
  ["containsSubset", "containSubset"]
];
for (const [e, t] of H2)
  A[t] = A[e];
var Bh = [];
function Oy(e) {
  const t = {
    use: Oy,
    AssertionError: Ie,
    util: ki,
    config: st,
    expect: ji,
    assert: A,
    Assertion: R,
    ...Sy
  };
  return ~Bh.indexOf(e) || (e(t, ki), Bh.push(e)), t;
}
Y(Oy, "use");
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*! Bundled license information:

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)
*/
var Rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hi = { exports: {} }, $a, jh;
function K2() {
  if (jh) return $a;
  jh = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  $a = function(l, f) {
    f = f || {};
    var d = typeof l;
    if (d === "string" && l.length > 0)
      return o(l);
    if (d === "number" && isFinite(l))
      return f.long ? u(l) : s(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function o(l) {
    if (l = String(l), !(l.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (f) {
        var d = parseFloat(f[1]), h = (f[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * a;
          case "weeks":
          case "week":
          case "w":
            return d * i;
          case "days":
          case "day":
          case "d":
            return d * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function s(l) {
    var f = Math.abs(l);
    return f >= n ? Math.round(l / n) + "d" : f >= r ? Math.round(l / r) + "h" : f >= t ? Math.round(l / t) + "m" : f >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function u(l) {
    var f = Math.abs(l);
    return f >= n ? c(l, f, n, "day") : f >= r ? c(l, f, r, "hour") : f >= t ? c(l, f, t, "minute") : f >= e ? c(l, f, e, "second") : l + " ms";
  }
  function c(l, f, d, h) {
    var m = f >= d * 1.5;
    return Math.round(l / d) + " " + h + (m ? "s" : "");
  }
  return $a;
}
var Wa, zh;
function Y2() {
  if (zh) return Wa;
  zh = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = K2(), n.destroy = l, Object.keys(t).forEach((f) => {
      n[f] = t[f];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(f) {
      let d = 0;
      for (let h = 0; h < f.length; h++)
        d = (d << 5) - d + f.charCodeAt(h), d |= 0;
      return n.colors[Math.abs(d) % n.colors.length];
    }
    n.selectColor = r;
    function n(f) {
      let d, h = null, m, p;
      function b(...y) {
        if (!b.enabled)
          return;
        const _ = b, E = Number(/* @__PURE__ */ new Date()), O = E - (d || E);
        _.diff = O, _.prev = d, _.curr = E, d = E, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let C = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (I, S) => {
          if (I === "%%")
            return "%";
          C++;
          const w = n.formatters[S];
          if (typeof w == "function") {
            const k = y[C];
            I = w.call(_, k), y.splice(C, 1), C--;
          }
          return I;
        }), n.formatArgs.call(_, y), (_.log || n.log).apply(_, y);
      }
      return b.namespace = f, b.useColors = n.useColors(), b.color = n.selectColor(f), b.extend = i, b.destroy = n.destroy, Object.defineProperty(b, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (m !== n.namespaces && (m = n.namespaces, p = n.enabled(f)), p),
        set: (y) => {
          h = y;
        }
      }), typeof n.init == "function" && n.init(b), b;
    }
    function i(f, d) {
      const h = n(this.namespace + (typeof d > "u" ? ":" : d) + f);
      return h.log = this.log, h;
    }
    function a(f) {
      n.save(f), n.namespaces = f, n.names = [], n.skips = [];
      const d = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of d)
        h[0] === "-" ? n.skips.push(h.slice(1)) : n.names.push(h);
    }
    function o(f, d) {
      let h = 0, m = 0, p = -1, b = 0;
      for (; h < f.length; )
        if (m < d.length && (d[m] === f[h] || d[m] === "*"))
          d[m] === "*" ? (p = m, b = h, m++) : (h++, m++);
        else if (p !== -1)
          m = p + 1, b++, h = b;
        else
          return !1;
      for (; m < d.length && d[m] === "*"; )
        m++;
      return m === d.length;
    }
    function s() {
      const f = [
        ...n.names,
        ...n.skips.map((d) => "-" + d)
      ].join(",");
      return n.enable(""), f;
    }
    function u(f) {
      for (const d of n.skips)
        if (o(f, d))
          return !1;
      for (const d of n.names)
        if (o(f, d))
          return !0;
      return !1;
    }
    function c(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return Wa = e, Wa;
}
var qh;
function X2() {
  return qh || (qh = 1, function(e, t) {
    t.formatArgs = n, t.save = i, t.load = a, t.useColors = r, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
      let u = !1;
      return () => {
        u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function r() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let u;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (u = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(u[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function n(u) {
      if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const c = "color: " + this.color;
      u.splice(1, 0, c, "color: inherit");
      let l = 0, f = 0;
      u[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (l++, d === "%c" && (f = l));
      }), u.splice(f, 0, c);
    }
    t.log = console.debug || console.log || (() => {
    });
    function i(u) {
      try {
        u ? t.storage.setItem("debug", u) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function a() {
      let u;
      try {
        u = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !u && typeof process < "u" && "env" in process && (u = void 0), u;
    }
    function o() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = Y2()(t);
    const { formatters: s } = e.exports;
    s.j = function(u) {
      try {
        return JSON.stringify(u);
      } catch (c) {
        return "[UnexpectedJSONParseError]: " + c.message;
      }
    };
  }(hi, hi.exports)), hi.exports;
}
var Z2 = X2();
const fC = /* @__PURE__ */ hn(Z2);
var di = { exports: {} }, Ga, Uh;
function J2() {
  if (Uh) return Ga;
  Uh = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  Ga = function(l, f) {
    f = f || {};
    var d = typeof l;
    if (d === "string" && l.length > 0)
      return o(l);
    if (d === "number" && isFinite(l))
      return f.long ? u(l) : s(l);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(l)
    );
  };
  function o(l) {
    if (l = String(l), !(l.length > 100)) {
      var f = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        l
      );
      if (f) {
        var d = parseFloat(f[1]), h = (f[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * a;
          case "weeks":
          case "week":
          case "w":
            return d * i;
          case "days":
          case "day":
          case "d":
            return d * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function s(l) {
    var f = Math.abs(l);
    return f >= n ? Math.round(l / n) + "d" : f >= r ? Math.round(l / r) + "h" : f >= t ? Math.round(l / t) + "m" : f >= e ? Math.round(l / e) + "s" : l + "ms";
  }
  function u(l) {
    var f = Math.abs(l);
    return f >= n ? c(l, f, n, "day") : f >= r ? c(l, f, r, "hour") : f >= t ? c(l, f, t, "minute") : f >= e ? c(l, f, e, "second") : l + " ms";
  }
  function c(l, f, d, h) {
    var m = f >= d * 1.5;
    return Math.round(l / d) + " " + h + (m ? "s" : "");
  }
  return Ga;
}
var Va, $h;
function Q2() {
  if ($h) return Va;
  $h = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = J2(), n.destroy = l, Object.keys(t).forEach((f) => {
      n[f] = t[f];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(f) {
      let d = 0;
      for (let h = 0; h < f.length; h++)
        d = (d << 5) - d + f.charCodeAt(h), d |= 0;
      return n.colors[Math.abs(d) % n.colors.length];
    }
    n.selectColor = r;
    function n(f) {
      let d, h = null, m, p;
      function b(...y) {
        if (!b.enabled)
          return;
        const _ = b, E = Number(/* @__PURE__ */ new Date()), O = E - (d || E);
        _.diff = O, _.prev = d, _.curr = E, d = E, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let C = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (I, S) => {
          if (I === "%%")
            return "%";
          C++;
          const w = n.formatters[S];
          if (typeof w == "function") {
            const k = y[C];
            I = w.call(_, k), y.splice(C, 1), C--;
          }
          return I;
        }), n.formatArgs.call(_, y), (_.log || n.log).apply(_, y);
      }
      return b.namespace = f, b.useColors = n.useColors(), b.color = n.selectColor(f), b.extend = i, b.destroy = n.destroy, Object.defineProperty(b, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (m !== n.namespaces && (m = n.namespaces, p = n.enabled(f)), p),
        set: (y) => {
          h = y;
        }
      }), typeof n.init == "function" && n.init(b), b;
    }
    function i(f, d) {
      const h = n(this.namespace + (typeof d > "u" ? ":" : d) + f);
      return h.log = this.log, h;
    }
    function a(f) {
      n.save(f), n.namespaces = f, n.names = [], n.skips = [];
      const d = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of d)
        h[0] === "-" ? n.skips.push(h.slice(1)) : n.names.push(h);
    }
    function o(f, d) {
      let h = 0, m = 0, p = -1, b = 0;
      for (; h < f.length; )
        if (m < d.length && (d[m] === f[h] || d[m] === "*"))
          d[m] === "*" ? (p = m, b = h, m++) : (h++, m++);
        else if (p !== -1)
          m = p + 1, b++, h = b;
        else
          return !1;
      for (; m < d.length && d[m] === "*"; )
        m++;
      return m === d.length;
    }
    function s() {
      const f = [
        ...n.names,
        ...n.skips.map((d) => "-" + d)
      ].join(",");
      return n.enable(""), f;
    }
    function u(f) {
      for (const d of n.skips)
        if (o(f, d))
          return !1;
      for (const d of n.names)
        if (o(f, d))
          return !0;
      return !1;
    }
    function c(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    function l() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return Va = e, Va;
}
var Wh;
function ex() {
  return Wh || (Wh = 1, function(e, t) {
    t.formatArgs = n, t.save = i, t.load = a, t.useColors = r, t.storage = o(), t.destroy = /* @__PURE__ */ (() => {
      let u = !1;
      return () => {
        u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function r() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let u;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (u = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(u[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function n(u) {
      if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const c = "color: " + this.color;
      u.splice(1, 0, c, "color: inherit");
      let l = 0, f = 0;
      u[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (l++, d === "%c" && (f = l));
      }), u.splice(f, 0, c);
    }
    t.log = console.debug || console.log || (() => {
    });
    function i(u) {
      try {
        u ? t.storage.setItem("debug", u) : t.storage.removeItem("debug");
      } catch {
      }
    }
    function a() {
      let u;
      try {
        u = t.storage.getItem("debug") || t.storage.getItem("DEBUG");
      } catch {
      }
      return !u && typeof process < "u" && "env" in process && (u = void 0), u;
    }
    function o() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = Q2()(t);
    const { formatters: s } = e.exports;
    s.j = function(u) {
      try {
        return JSON.stringify(u);
      } catch (c) {
        return "[UnexpectedJSONParseError]: " + c.message;
      }
    };
  }(di, di.exports)), di.exports;
}
var tx = ex();
const lC = /* @__PURE__ */ hn(tx);
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
var nt = Uint8Array, gt = Uint16Array, Uf = Int32Array, oa = new nt([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), ua = new nt([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Sc = new nt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Ty = function(e, t) {
  for (var r = new gt(31), n = 0; n < 31; ++n)
    r[n] = t += 1 << e[n - 1];
  for (var i = new Uf(r[30]), n = 1; n < 30; ++n)
    for (var a = r[n]; a < r[n + 1]; ++a)
      i[a] = a - r[n] << 5 | n;
  return { b: r, r: i };
}, Cy = Ty(oa, 2), Ay = Cy.b, Oc = Cy.r;
Ay[28] = 258, Oc[258] = 28;
var Ry = Ty(ua, 0), rx = Ry.b, Gh = Ry.r, Tc = new gt(32768);
for (var Me = 0; Me < 32768; ++Me) {
  var fr = (Me & 43690) >> 1 | (Me & 21845) << 1;
  fr = (fr & 52428) >> 2 | (fr & 13107) << 2, fr = (fr & 61680) >> 4 | (fr & 3855) << 4, Tc[Me] = ((fr & 65280) >> 8 | (fr & 255) << 8) >> 1;
}
var qt = function(e, t, r) {
  for (var n = e.length, i = 0, a = new gt(t); i < n; ++i)
    e[i] && ++a[e[i] - 1];
  var o = new gt(t);
  for (i = 1; i < t; ++i)
    o[i] = o[i - 1] + a[i - 1] << 1;
  var s;
  if (r) {
    s = new gt(1 << t);
    var u = 15 - t;
    for (i = 0; i < n; ++i)
      if (e[i])
        for (var c = i << 4 | e[i], l = t - e[i], f = o[e[i] - 1]++ << l, d = f | (1 << l) - 1; f <= d; ++f)
          s[Tc[f] >> u] = c;
  } else
    for (s = new gt(n), i = 0; i < n; ++i)
      e[i] && (s[i] = Tc[o[e[i] - 1]++] >> 15 - e[i]);
  return s;
}, xr = new nt(288);
for (var Me = 0; Me < 144; ++Me)
  xr[Me] = 8;
for (var Me = 144; Me < 256; ++Me)
  xr[Me] = 9;
for (var Me = 256; Me < 280; ++Me)
  xr[Me] = 7;
for (var Me = 280; Me < 288; ++Me)
  xr[Me] = 8;
var Un = new nt(32);
for (var Me = 0; Me < 32; ++Me)
  Un[Me] = 5;
var nx = /* @__PURE__ */ qt(xr, 9, 0), ix = /* @__PURE__ */ qt(xr, 9, 1), ax = /* @__PURE__ */ qt(Un, 5, 0), sx = /* @__PURE__ */ qt(Un, 5, 1), Ha = function(e) {
  for (var t = e[0], r = 1; r < e.length; ++r)
    e[r] > t && (t = e[r]);
  return t;
}, St = function(e, t, r) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8) >> (t & 7) & r;
}, Ka = function(e, t) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (t & 7);
}, $f = function(e) {
  return (e + 7) / 8 | 0;
}, Iy = function(e, t, r) {
  return (r == null || r > e.length) && (r = e.length), new nt(e.subarray(t, r));
}, ox = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], At = function(e, t, r) {
  var n = new Error(t || ox[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, At), !r)
    throw n;
  return n;
}, ux = function(e, t, r, n) {
  var i = e.length, a = 0;
  if (!i || t.f && !t.l)
    return r || new nt(0);
  var o = !r, s = o || t.i != 2, u = t.i;
  o && (r = new nt(i * 3));
  var c = function(fe) {
    var we = r.length;
    if (fe > we) {
      var Ee = new nt(Math.max(we * 2, fe));
      Ee.set(r), r = Ee;
    }
  }, l = t.f || 0, f = t.p || 0, d = t.b || 0, h = t.l, m = t.d, p = t.m, b = t.n, y = i * 8;
  do {
    if (!h) {
      l = St(e, f, 1);
      var _ = St(e, f + 1, 3);
      if (f += 3, _)
        if (_ == 1)
          h = ix, m = sx, p = 9, b = 5;
        else if (_ == 2) {
          var B = St(e, f, 31) + 257, I = St(e, f + 10, 15) + 4, S = B + St(e, f + 5, 31) + 1;
          f += 14;
          for (var w = new nt(S), k = new nt(19), z = 0; z < I; ++z)
            k[Sc[z]] = St(e, f + z * 3, 7);
          f += I * 3;
          for (var x = Ha(k), F = (1 << x) - 1, g = qt(k, x, 1), z = 0; z < S; ) {
            var q = g[St(e, f, F)];
            f += q & 15;
            var E = q >> 4;
            if (E < 16)
              w[z++] = E;
            else {
              var ie = 0, M = 0;
              for (E == 16 ? (M = 3 + St(e, f, 3), f += 2, ie = w[z - 1]) : E == 17 ? (M = 3 + St(e, f, 7), f += 3) : E == 18 && (M = 11 + St(e, f, 127), f += 7); M--; )
                w[z++] = ie;
            }
          }
          var Z = w.subarray(0, B), L = w.subarray(B);
          p = Ha(Z), b = Ha(L), h = qt(Z, p, 1), m = qt(L, b, 1);
        } else
          At(1);
      else {
        var E = $f(f) + 4, O = e[E - 4] | e[E - 3] << 8, C = E + O;
        if (C > i) {
          u && At(0);
          break;
        }
        s && c(d + O), r.set(e.subarray(E, C), d), t.b = d += O, t.p = f = C * 8, t.f = l;
        continue;
      }
      if (f > y) {
        u && At(0);
        break;
      }
    }
    s && c(d + 131072);
    for (var re = (1 << p) - 1, N = (1 << b) - 1, D = f; ; D = f) {
      var ie = h[Ka(e, f) & re], K = ie >> 4;
      if (f += ie & 15, f > y) {
        u && At(0);
        break;
      }
      if (ie || At(2), K < 256)
        r[d++] = K;
      else if (K == 256) {
        D = f, h = null;
        break;
      } else {
        var ee = K - 254;
        if (K > 264) {
          var z = K - 257, H = oa[z];
          ee = St(e, f, (1 << H) - 1) + Ay[z], f += H;
        }
        var pe = m[Ka(e, f) & N], xe = pe >> 4;
        pe || At(3), f += pe & 15;
        var L = rx[xe];
        if (xe > 3) {
          var H = ua[xe];
          L += Ka(e, f) & (1 << H) - 1, f += H;
        }
        if (f > y) {
          u && At(0);
          break;
        }
        s && c(d + 131072);
        var ce = d + ee;
        if (d < L) {
          var le = a - L, ve = Math.min(L, ce);
          for (le + d < 0 && At(3); d < ve; ++d)
            r[d] = n[le + d];
        }
        for (; d < ce; ++d)
          r[d] = r[d - L];
      }
    }
    t.l = h, t.p = D, t.b = d, t.f = l, h && (l = 1, t.m = p, t.d = m, t.n = b);
  } while (!l);
  return d != r.length && o ? Iy(r, 0, d) : r.subarray(0, d);
}, Jt = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8;
}, bn = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8, e[n + 2] |= r >> 16;
}, Ya = function(e, t) {
  for (var r = [], n = 0; n < e.length; ++n)
    e[n] && r.push({ s: n, f: e[n] });
  var i = r.length, a = r.slice();
  if (!i)
    return { t: Py, l: 0 };
  if (i == 1) {
    var o = new nt(r[0].s + 1);
    return o[r[0].s] = 1, { t: o, l: 1 };
  }
  r.sort(function(C, B) {
    return C.f - B.f;
  }), r.push({ s: -1, f: 25001 });
  var s = r[0], u = r[1], c = 0, l = 1, f = 2;
  for (r[0] = { s: -1, f: s.f + u.f, l: s, r: u }; l != i - 1; )
    s = r[r[c].f < r[f].f ? c++ : f++], u = r[c != l && r[c].f < r[f].f ? c++ : f++], r[l++] = { s: -1, f: s.f + u.f, l: s, r: u };
  for (var d = a[0].s, n = 1; n < i; ++n)
    a[n].s > d && (d = a[n].s);
  var h = new gt(d + 1), m = Cc(r[l - 1], h, 0);
  if (m > t) {
    var n = 0, p = 0, b = m - t, y = 1 << b;
    for (a.sort(function(B, I) {
      return h[I.s] - h[B.s] || B.f - I.f;
    }); n < i; ++n) {
      var _ = a[n].s;
      if (h[_] > t)
        p += y - (1 << m - h[_]), h[_] = t;
      else
        break;
    }
    for (p >>= b; p > 0; ) {
      var E = a[n].s;
      h[E] < t ? p -= 1 << t - h[E]++ - 1 : ++n;
    }
    for (; n >= 0 && p; --n) {
      var O = a[n].s;
      h[O] == t && (--h[O], ++p);
    }
    m = t;
  }
  return { t: new nt(h), l: m };
}, Cc = function(e, t, r) {
  return e.s == -1 ? Math.max(Cc(e.l, t, r + 1), Cc(e.r, t, r + 1)) : t[e.s] = r;
}, Vh = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var r = new gt(++t), n = 0, i = e[0], a = 1, o = function(u) {
    r[n++] = u;
  }, s = 1; s <= t; ++s)
    if (e[s] == i && s != t)
      ++a;
    else {
      if (!i && a > 2) {
        for (; a > 138; a -= 138)
          o(32754);
        a > 2 && (o(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
      } else if (a > 3) {
        for (o(i), --a; a > 6; a -= 6)
          o(8304);
        a > 2 && (o(a - 3 << 5 | 8208), a = 0);
      }
      for (; a--; )
        o(i);
      a = 1, i = e[s];
    }
  return { c: r.subarray(0, n), n: t };
}, _n = function(e, t) {
  for (var r = 0, n = 0; n < t.length; ++n)
    r += e[n] * t[n];
  return r;
}, ky = function(e, t, r) {
  var n = r.length, i = $f(t + 2);
  e[i] = n & 255, e[i + 1] = n >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
  for (var a = 0; a < n; ++a)
    e[i + a + 4] = r[a];
  return (i + 4 + n) * 8;
}, Hh = function(e, t, r, n, i, a, o, s, u, c, l) {
  Jt(t, l++, r), ++i[256];
  for (var f = Ya(i, 15), d = f.t, h = f.l, m = Ya(a, 15), p = m.t, b = m.l, y = Vh(d), _ = y.c, E = y.n, O = Vh(p), C = O.c, B = O.n, I = new gt(19), S = 0; S < _.length; ++S)
    ++I[_[S] & 31];
  for (var S = 0; S < C.length; ++S)
    ++I[C[S] & 31];
  for (var w = Ya(I, 7), k = w.t, z = w.l, x = 19; x > 4 && !k[Sc[x - 1]]; --x)
    ;
  var F = c + 5 << 3, g = _n(i, xr) + _n(a, Un) + o, q = _n(i, d) + _n(a, p) + o + 14 + 3 * x + _n(I, k) + 2 * I[16] + 3 * I[17] + 7 * I[18];
  if (u >= 0 && F <= g && F <= q)
    return ky(t, l, e.subarray(u, u + c));
  var ie, M, Z, L;
  if (Jt(t, l, 1 + (q < g)), l += 2, q < g) {
    ie = qt(d, h, 0), M = d, Z = qt(p, b, 0), L = p;
    var re = qt(k, z, 0);
    Jt(t, l, E - 257), Jt(t, l + 5, B - 1), Jt(t, l + 10, x - 4), l += 14;
    for (var S = 0; S < x; ++S)
      Jt(t, l + 3 * S, k[Sc[S]]);
    l += 3 * x;
    for (var N = [_, C], D = 0; D < 2; ++D)
      for (var K = N[D], S = 0; S < K.length; ++S) {
        var ee = K[S] & 31;
        Jt(t, l, re[ee]), l += k[ee], ee > 15 && (Jt(t, l, K[S] >> 5 & 127), l += K[S] >> 12);
      }
  } else
    ie = nx, M = xr, Z = ax, L = Un;
  for (var S = 0; S < s; ++S) {
    var H = n[S];
    if (H > 255) {
      var ee = H >> 18 & 31;
      bn(t, l, ie[ee + 257]), l += M[ee + 257], ee > 7 && (Jt(t, l, H >> 23 & 31), l += oa[ee]);
      var pe = H & 31;
      bn(t, l, Z[pe]), l += L[pe], pe > 3 && (bn(t, l, H >> 5 & 8191), l += ua[pe]);
    } else
      bn(t, l, ie[H]), l += M[H];
  }
  return bn(t, l, ie[256]), l + M[256];
}, cx = /* @__PURE__ */ new Uf([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Py = /* @__PURE__ */ new nt(0), fx = function(e, t, r, n, i, a) {
  var o = a.z || e.length, s = new nt(n + o + 5 * (1 + Math.ceil(o / 7e3)) + i), u = s.subarray(n, s.length - i), c = a.l, l = (a.r || 0) & 7;
  if (t) {
    l && (u[0] = a.r >> 3);
    for (var f = cx[t - 1], d = f >> 13, h = f & 8191, m = (1 << r) - 1, p = a.p || new gt(32768), b = a.h || new gt(m + 1), y = Math.ceil(r / 3), _ = 2 * y, E = function(v) {
      return (e[v] ^ e[v + 1] << y ^ e[v + 2] << _) & m;
    }, O = new Uf(25e3), C = new gt(288), B = new gt(32), I = 0, S = 0, w = a.i || 0, k = 0, z = a.w || 0, x = 0; w + 2 < o; ++w) {
      var F = E(w), g = w & 32767, q = b[F];
      if (p[g] = q, b[F] = g, z <= w) {
        var ie = o - w;
        if ((I > 7e3 || k > 24576) && (ie > 423 || !c)) {
          l = Hh(e, u, 0, O, C, B, S, k, x, w - x, l), k = I = S = 0, x = w;
          for (var M = 0; M < 286; ++M)
            C[M] = 0;
          for (var M = 0; M < 30; ++M)
            B[M] = 0;
        }
        var Z = 2, L = 0, re = h, N = g - q & 32767;
        if (ie > 2 && F == E(w - N))
          for (var D = Math.min(d, ie) - 1, K = Math.min(32767, w), ee = Math.min(258, ie); N <= K && --re && g != q; ) {
            if (e[w + Z] == e[w + Z - N]) {
              for (var H = 0; H < ee && e[w + H] == e[w + H - N]; ++H)
                ;
              if (H > Z) {
                if (Z = H, L = N, H > D)
                  break;
                for (var pe = Math.min(N, H - 2), xe = 0, M = 0; M < pe; ++M) {
                  var ce = w - N + M & 32767, le = p[ce], ve = ce - le & 32767;
                  ve > xe && (xe = ve, q = ce);
                }
              }
            }
            g = q, q = p[g], N += g - q & 32767;
          }
        if (L) {
          O[k++] = 268435456 | Oc[Z] << 18 | Gh[L];
          var fe = Oc[Z] & 31, we = Gh[L] & 31;
          S += oa[fe] + ua[we], ++C[257 + fe], ++B[we], z = w + Z, ++I;
        } else
          O[k++] = e[w], ++C[e[w]];
      }
    }
    for (w = Math.max(w, z); w < o; ++w)
      O[k++] = e[w], ++C[e[w]];
    l = Hh(e, u, c, O, C, B, S, k, x, w - x, l), c || (a.r = l & 7 | u[l / 8 | 0] << 3, l -= 7, a.h = b, a.p = p, a.i = w, a.w = z);
  } else {
    for (var w = a.w || 0; w < o + c; w += 65535) {
      var Ee = w + 65535;
      Ee >= o && (u[l / 8 | 0] = c, Ee = o), l = ky(u, l + 1, e.subarray(w, Ee));
    }
    a.i = o;
  }
  return Iy(s, 0, n + $f(l) + i);
}, Ny = function() {
  var e = 1, t = 0;
  return {
    p: function(r) {
      for (var n = e, i = t, a = r.length | 0, o = 0; o != a; ) {
        for (var s = Math.min(o + 2655, a); o < s; ++o)
          i += n += r[o];
        n = (n & 65535) + 15 * (n >> 16), i = (i & 65535) + 15 * (i >> 16);
      }
      e = n, t = i;
    },
    d: function() {
      return e %= 65521, t %= 65521, (e & 255) << 24 | (e & 65280) << 8 | (t & 255) << 8 | t >> 8;
    }
  };
}, lx = function(e, t, r, n, i) {
  if (!i && (i = { l: 1 }, t.dictionary)) {
    var a = t.dictionary.subarray(-32768), o = new nt(a.length + e.length);
    o.set(a), o.set(e, a.length), e = o, i.w = a.length;
  }
  return fx(e, t.level == null ? 6 : t.level, t.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, n, i);
}, My = function(e, t, r) {
  for (; r; ++t)
    e[t] = r, r >>>= 8;
}, hx = function(e, t) {
  var r = t.level, n = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = n << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
    var i = Ny();
    i.p(t.dictionary), My(e, 2, i.d());
  }
}, dx = function(e, t) {
  return ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) && At(6, "invalid zlib data"), (e[1] >> 5 & 1) == 1 && At(6, "invalid zlib data: " + (e[1] & 32 ? "need" : "unexpected") + " dictionary"), (e[1] >> 3 & 4) + 2;
};
function hC(e, t) {
  t || (t = {});
  var r = Ny();
  r.p(e);
  var n = lx(e, t, t.dictionary ? 6 : 2, 4);
  return hx(n, t), My(n, n.length - 4, r.d()), n;
}
function dC(e, t) {
  return ux(e.subarray(dx(e), -4), { i: 2 }, t, t);
}
var px = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), mx = 0;
try {
  px.decode(Py, { stream: !0 }), mx = 1;
} catch {
}
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: Dy,
  setPrototypeOf: Kh,
  isFrozen: gx,
  getPrototypeOf: vx,
  getOwnPropertyDescriptor: yx
} = Object;
let {
  freeze: ot,
  seal: wt,
  create: Fy
} = Object, {
  apply: Ac,
  construct: Rc
} = typeof Reflect < "u" && Reflect;
ot || (ot = function(t) {
  return t;
});
wt || (wt = function(t) {
  return t;
});
Ac || (Ac = function(t, r, n) {
  return t.apply(r, n);
});
Rc || (Rc = function(t, r) {
  return new t(...r);
});
const pi = ut(Array.prototype.forEach), bx = ut(Array.prototype.lastIndexOf), Yh = ut(Array.prototype.pop), wn = ut(Array.prototype.push), _x = ut(Array.prototype.splice), Ei = ut(String.prototype.toLowerCase), Xa = ut(String.prototype.toString), Xh = ut(String.prototype.match), En = ut(String.prototype.replace), wx = ut(String.prototype.indexOf), Ex = ut(String.prototype.trim), Ct = ut(Object.prototype.hasOwnProperty), at = ut(RegExp.prototype.test), xn = xx(TypeError);
function ut(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ac(e, t, n);
  };
}
function xx(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Rc(e, r);
  };
}
function Te(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ei;
  Kh && Kh(e, null);
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const a = r(i);
      a !== i && (gx(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function Sx(e) {
  for (let t = 0; t < e.length; t++)
    Ct(e, t) || (e[t] = null);
  return e;
}
function er(e) {
  const t = Fy(null);
  for (const [r, n] of Dy(e))
    Ct(e, r) && (Array.isArray(n) ? t[r] = Sx(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = er(n) : t[r] = n);
  return t;
}
function Sn(e, t) {
  for (; e !== null; ) {
    const n = yx(e, t);
    if (n) {
      if (n.get)
        return ut(n.get);
      if (typeof n.value == "function")
        return ut(n.value);
    }
    e = vx(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Zh = ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Za = ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ja = ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ox = ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Qa = ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Tx = ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Jh = ot(["#text"]), Qh = ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), es = ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ed = ot(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), mi = ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Cx = wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ax = wt(/<%[\w\W]*|[\w\W]*%>/gm), Rx = wt(/\$\{[\w\W]*/gm), Ix = wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), kx = wt(/^aria-[\-\w]+$/), Ly = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Px = wt(/^(?:\w+script|data):/i), Nx = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), By = wt(/^html$/i), Mx = wt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var td = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: kx,
  ATTR_WHITESPACE: Nx,
  CUSTOM_ELEMENT: Mx,
  DATA_ATTR: Ix,
  DOCTYPE_NAME: By,
  ERB_EXPR: Ax,
  IS_ALLOWED_URI: Ly,
  IS_SCRIPT_OR_DATA: Px,
  MUSTACHE_EXPR: Cx,
  TMPLIT_EXPR: Rx
});
const On = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Dx = function() {
  return typeof window > "u" ? null : window;
}, Fx = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const a = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(a, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, rd = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function jy() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dx();
  const t = (be) => jy(be);
  if (t.version = "3.2.6", t.removed = [], !e || !e.document || e.document.nodeType !== On.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, i = n.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: o,
    Node: s,
    Element: u,
    NodeFilter: c,
    NamedNodeMap: l = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: f,
    DOMParser: d,
    trustedTypes: h
  } = e, m = u.prototype, p = Sn(m, "cloneNode"), b = Sn(m, "remove"), y = Sn(m, "nextSibling"), _ = Sn(m, "childNodes"), E = Sn(m, "parentNode");
  if (typeof o == "function") {
    const be = r.createElement("template");
    be.content && be.content.ownerDocument && (r = be.content.ownerDocument);
  }
  let O, C = "";
  const {
    implementation: B,
    createNodeIterator: I,
    createDocumentFragment: S,
    getElementsByTagName: w
  } = r, {
    importNode: k
  } = n;
  let z = rd();
  t.isSupported = typeof Dy == "function" && typeof E == "function" && B && B.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: x,
    ERB_EXPR: F,
    TMPLIT_EXPR: g,
    DATA_ATTR: q,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: M,
    ATTR_WHITESPACE: Z,
    CUSTOM_ELEMENT: L
  } = td;
  let {
    IS_ALLOWED_URI: re
  } = td, N = null;
  const D = Te({}, [...Zh, ...Za, ...Ja, ...Qa, ...Jh]);
  let K = null;
  const ee = Te({}, [...Qh, ...es, ...ed, ...mi]);
  let H = Object.seal(Fy(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), pe = null, xe = null, ce = !0, le = !0, ve = !1, fe = !0, we = !1, Ee = !0, v = !1, X = !1, W = !1, P = !1, T = !1, j = !1, te = !0, ne = !1;
  const G = "user-content-";
  let V = !0, Q = !1, J = {}, ae = null;
  const de = Te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _e = null;
  const Fe = Te({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ve = null;
  const Pe = Te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Le = "http://www.w3.org/1998/Math/MathML", Ce = "http://www.w3.org/2000/svg", He = "http://www.w3.org/1999/xhtml";
  let Ft = He, pt = !1, Vr = null;
  const Aa = Te({}, [Le, Ce, He], Xa);
  let Hr = Te({}, ["mi", "mo", "mn", "ms", "mtext"]), Kr = Te({}, ["annotation-xml"]);
  const ui = Te({}, ["title", "style", "font", "a", "script"]);
  let Et = null;
  const Yr = ["application/xhtml+xml", "text/html"], $0 = "text/html";
  let Ye = null, Xr = null;
  const W0 = r.createElement("form"), _l = function(U) {
    return U instanceof RegExp || U instanceof Function;
  }, Ra = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Xr && Xr === U)) {
      if ((!U || typeof U != "object") && (U = {}), U = er(U), Et = // eslint-disable-next-line unicorn/prefer-includes
      Yr.indexOf(U.PARSER_MEDIA_TYPE) === -1 ? $0 : U.PARSER_MEDIA_TYPE, Ye = Et === "application/xhtml+xml" ? Xa : Ei, N = Ct(U, "ALLOWED_TAGS") ? Te({}, U.ALLOWED_TAGS, Ye) : D, K = Ct(U, "ALLOWED_ATTR") ? Te({}, U.ALLOWED_ATTR, Ye) : ee, Vr = Ct(U, "ALLOWED_NAMESPACES") ? Te({}, U.ALLOWED_NAMESPACES, Xa) : Aa, Ve = Ct(U, "ADD_URI_SAFE_ATTR") ? Te(er(Pe), U.ADD_URI_SAFE_ATTR, Ye) : Pe, _e = Ct(U, "ADD_DATA_URI_TAGS") ? Te(er(Fe), U.ADD_DATA_URI_TAGS, Ye) : Fe, ae = Ct(U, "FORBID_CONTENTS") ? Te({}, U.FORBID_CONTENTS, Ye) : de, pe = Ct(U, "FORBID_TAGS") ? Te({}, U.FORBID_TAGS, Ye) : er({}), xe = Ct(U, "FORBID_ATTR") ? Te({}, U.FORBID_ATTR, Ye) : er({}), J = Ct(U, "USE_PROFILES") ? U.USE_PROFILES : !1, ce = U.ALLOW_ARIA_ATTR !== !1, le = U.ALLOW_DATA_ATTR !== !1, ve = U.ALLOW_UNKNOWN_PROTOCOLS || !1, fe = U.ALLOW_SELF_CLOSE_IN_ATTR !== !1, we = U.SAFE_FOR_TEMPLATES || !1, Ee = U.SAFE_FOR_XML !== !1, v = U.WHOLE_DOCUMENT || !1, P = U.RETURN_DOM || !1, T = U.RETURN_DOM_FRAGMENT || !1, j = U.RETURN_TRUSTED_TYPE || !1, W = U.FORCE_BODY || !1, te = U.SANITIZE_DOM !== !1, ne = U.SANITIZE_NAMED_PROPS || !1, V = U.KEEP_CONTENT !== !1, Q = U.IN_PLACE || !1, re = U.ALLOWED_URI_REGEXP || Ly, Ft = U.NAMESPACE || He, Hr = U.MATHML_TEXT_INTEGRATION_POINTS || Hr, Kr = U.HTML_INTEGRATION_POINTS || Kr, H = U.CUSTOM_ELEMENT_HANDLING || {}, U.CUSTOM_ELEMENT_HANDLING && _l(U.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = U.CUSTOM_ELEMENT_HANDLING.tagNameCheck), U.CUSTOM_ELEMENT_HANDLING && _l(U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), U.CUSTOM_ELEMENT_HANDLING && typeof U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), we && (le = !1), T && (P = !0), J && (N = Te({}, Jh), K = [], J.html === !0 && (Te(N, Zh), Te(K, Qh)), J.svg === !0 && (Te(N, Za), Te(K, es), Te(K, mi)), J.svgFilters === !0 && (Te(N, Ja), Te(K, es), Te(K, mi)), J.mathMl === !0 && (Te(N, Qa), Te(K, ed), Te(K, mi))), U.ADD_TAGS && (N === D && (N = er(N)), Te(N, U.ADD_TAGS, Ye)), U.ADD_ATTR && (K === ee && (K = er(K)), Te(K, U.ADD_ATTR, Ye)), U.ADD_URI_SAFE_ATTR && Te(Ve, U.ADD_URI_SAFE_ATTR, Ye), U.FORBID_CONTENTS && (ae === de && (ae = er(ae)), Te(ae, U.FORBID_CONTENTS, Ye)), V && (N["#text"] = !0), v && Te(N, ["html", "head", "body"]), N.table && (Te(N, ["tbody"]), delete pe.tbody), U.TRUSTED_TYPES_POLICY) {
        if (typeof U.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw xn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof U.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw xn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        O = U.TRUSTED_TYPES_POLICY, C = O.createHTML("");
      } else
        O === void 0 && (O = Fx(h, i)), O !== null && typeof C == "string" && (C = O.createHTML(""));
      ot && ot(U), Xr = U;
    }
  }, wl = Te({}, [...Za, ...Ja, ...Ox]), El = Te({}, [...Qa, ...Tx]), G0 = function(U) {
    let ue = E(U);
    (!ue || !ue.tagName) && (ue = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const me = Ei(U.tagName), Be = Ei(ue.tagName);
    return Vr[U.namespaceURI] ? U.namespaceURI === Ce ? ue.namespaceURI === He ? me === "svg" : ue.namespaceURI === Le ? me === "svg" && (Be === "annotation-xml" || Hr[Be]) : !!wl[me] : U.namespaceURI === Le ? ue.namespaceURI === He ? me === "math" : ue.namespaceURI === Ce ? me === "math" && Kr[Be] : !!El[me] : U.namespaceURI === He ? ue.namespaceURI === Ce && !Kr[Be] || ue.namespaceURI === Le && !Hr[Be] ? !1 : !El[me] && (ui[me] || !wl[me]) : !!(Et === "application/xhtml+xml" && Vr[U.namespaceURI]) : !1;
  }, Lt = function(U) {
    wn(t.removed, {
      element: U
    });
    try {
      E(U).removeChild(U);
    } catch {
      b(U);
    }
  }, Zr = function(U, ue) {
    try {
      wn(t.removed, {
        attribute: ue.getAttributeNode(U),
        from: ue
      });
    } catch {
      wn(t.removed, {
        attribute: null,
        from: ue
      });
    }
    if (ue.removeAttribute(U), U === "is")
      if (P || T)
        try {
          Lt(ue);
        } catch {
        }
      else
        try {
          ue.setAttribute(U, "");
        } catch {
        }
  }, xl = function(U) {
    let ue = null, me = null;
    if (W)
      U = "<remove></remove>" + U;
    else {
      const Ke = Xh(U, /^[\r\n\t ]+/);
      me = Ke && Ke[0];
    }
    Et === "application/xhtml+xml" && Ft === He && (U = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + U + "</body></html>");
    const Be = O ? O.createHTML(U) : U;
    if (Ft === He)
      try {
        ue = new d().parseFromString(Be, Et);
      } catch {
      }
    if (!ue || !ue.documentElement) {
      ue = B.createDocument(Ft, "template", null);
      try {
        ue.documentElement.innerHTML = pt ? C : Be;
      } catch {
      }
    }
    const tt = ue.body || ue.documentElement;
    return U && me && tt.insertBefore(r.createTextNode(me), tt.childNodes[0] || null), Ft === He ? w.call(ue, v ? "html" : "body")[0] : v ? ue.documentElement : tt;
  }, Sl = function(U) {
    return I.call(
      U.ownerDocument || U,
      U,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ia = function(U) {
    return U instanceof f && (typeof U.nodeName != "string" || typeof U.textContent != "string" || typeof U.removeChild != "function" || !(U.attributes instanceof l) || typeof U.removeAttribute != "function" || typeof U.setAttribute != "function" || typeof U.namespaceURI != "string" || typeof U.insertBefore != "function" || typeof U.hasChildNodes != "function");
  }, Ol = function(U) {
    return typeof s == "function" && U instanceof s;
  };
  function Yt(be, U, ue) {
    pi(be, (me) => {
      me.call(t, U, ue, Xr);
    });
  }
  const Tl = function(U) {
    let ue = null;
    if (Yt(z.beforeSanitizeElements, U, null), Ia(U))
      return Lt(U), !0;
    const me = Ye(U.nodeName);
    if (Yt(z.uponSanitizeElement, U, {
      tagName: me,
      allowedTags: N
    }), Ee && U.hasChildNodes() && !Ol(U.firstElementChild) && at(/<[/\w!]/g, U.innerHTML) && at(/<[/\w!]/g, U.textContent) || U.nodeType === On.progressingInstruction || Ee && U.nodeType === On.comment && at(/<[/\w]/g, U.data))
      return Lt(U), !0;
    if (!N[me] || pe[me]) {
      if (!pe[me] && Al(me) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, me) || H.tagNameCheck instanceof Function && H.tagNameCheck(me)))
        return !1;
      if (V && !ae[me]) {
        const Be = E(U) || U.parentNode, tt = _(U) || U.childNodes;
        if (tt && Be) {
          const Ke = tt.length;
          for (let lt = Ke - 1; lt >= 0; --lt) {
            const Xt = p(tt[lt], !0);
            Xt.__removalCount = (U.__removalCount || 0) + 1, Be.insertBefore(Xt, y(U));
          }
        }
      }
      return Lt(U), !0;
    }
    return U instanceof u && !G0(U) || (me === "noscript" || me === "noembed" || me === "noframes") && at(/<\/no(script|embed|frames)/i, U.innerHTML) ? (Lt(U), !0) : (we && U.nodeType === On.text && (ue = U.textContent, pi([x, F, g], (Be) => {
      ue = En(ue, Be, " ");
    }), U.textContent !== ue && (wn(t.removed, {
      element: U.cloneNode()
    }), U.textContent = ue)), Yt(z.afterSanitizeElements, U, null), !1);
  }, Cl = function(U, ue, me) {
    if (te && (ue === "id" || ue === "name") && (me in r || me in W0))
      return !1;
    if (!(le && !xe[ue] && at(q, ue))) {
      if (!(ce && at(ie, ue))) {
        if (!K[ue] || xe[ue]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Al(U) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, U) || H.tagNameCheck instanceof Function && H.tagNameCheck(U)) && (H.attributeNameCheck instanceof RegExp && at(H.attributeNameCheck, ue) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(ue)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ue === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, me) || H.tagNameCheck instanceof Function && H.tagNameCheck(me)))
          ) return !1;
        } else if (!Ve[ue]) {
          if (!at(re, En(me, Z, ""))) {
            if (!((ue === "src" || ue === "xlink:href" || ue === "href") && U !== "script" && wx(me, "data:") === 0 && _e[U])) {
              if (!(ve && !at(M, En(me, Z, "")))) {
                if (me)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Al = function(U) {
    return U !== "annotation-xml" && Xh(U, L);
  }, Rl = function(U) {
    Yt(z.beforeSanitizeAttributes, U, null);
    const {
      attributes: ue
    } = U;
    if (!ue || Ia(U))
      return;
    const me = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: K,
      forceKeepAttr: void 0
    };
    let Be = ue.length;
    for (; Be--; ) {
      const tt = ue[Be], {
        name: Ke,
        namespaceURI: lt,
        value: Xt
      } = tt, vn = Ye(Ke), ka = Xt;
      let rt = Ke === "value" ? ka : Ex(ka);
      if (me.attrName = vn, me.attrValue = rt, me.keepAttr = !0, me.forceKeepAttr = void 0, Yt(z.uponSanitizeAttribute, U, me), rt = me.attrValue, ne && (vn === "id" || vn === "name") && (Zr(Ke, U), rt = G + rt), Ee && at(/((--!?|])>)|<\/(style|title)/i, rt)) {
        Zr(Ke, U);
        continue;
      }
      if (me.forceKeepAttr)
        continue;
      if (!me.keepAttr) {
        Zr(Ke, U);
        continue;
      }
      if (!fe && at(/\/>/i, rt)) {
        Zr(Ke, U);
        continue;
      }
      we && pi([x, F, g], (kl) => {
        rt = En(rt, kl, " ");
      });
      const Il = Ye(U.nodeName);
      if (!Cl(Il, vn, rt)) {
        Zr(Ke, U);
        continue;
      }
      if (O && typeof h == "object" && typeof h.getAttributeType == "function" && !lt)
        switch (h.getAttributeType(Il, vn)) {
          case "TrustedHTML": {
            rt = O.createHTML(rt);
            break;
          }
          case "TrustedScriptURL": {
            rt = O.createScriptURL(rt);
            break;
          }
        }
      if (rt !== ka)
        try {
          lt ? U.setAttributeNS(lt, Ke, rt) : U.setAttribute(Ke, rt), Ia(U) ? Lt(U) : Yh(t.removed);
        } catch {
          Zr(Ke, U);
        }
    }
    Yt(z.afterSanitizeAttributes, U, null);
  }, V0 = function be(U) {
    let ue = null;
    const me = Sl(U);
    for (Yt(z.beforeSanitizeShadowDOM, U, null); ue = me.nextNode(); )
      Yt(z.uponSanitizeShadowNode, ue, null), Tl(ue), Rl(ue), ue.content instanceof a && be(ue.content);
    Yt(z.afterSanitizeShadowDOM, U, null);
  };
  return t.sanitize = function(be) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ue = null, me = null, Be = null, tt = null;
    if (pt = !be, pt && (be = "<!-->"), typeof be != "string" && !Ol(be))
      if (typeof be.toString == "function") {
        if (be = be.toString(), typeof be != "string")
          throw xn("dirty is not a string, aborting");
      } else
        throw xn("toString is not a function");
    if (!t.isSupported)
      return be;
    if (X || Ra(U), t.removed = [], typeof be == "string" && (Q = !1), Q) {
      if (be.nodeName) {
        const Xt = Ye(be.nodeName);
        if (!N[Xt] || pe[Xt])
          throw xn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (be instanceof s)
      ue = xl("<!---->"), me = ue.ownerDocument.importNode(be, !0), me.nodeType === On.element && me.nodeName === "BODY" || me.nodeName === "HTML" ? ue = me : ue.appendChild(me);
    else {
      if (!P && !we && !v && // eslint-disable-next-line unicorn/prefer-includes
      be.indexOf("<") === -1)
        return O && j ? O.createHTML(be) : be;
      if (ue = xl(be), !ue)
        return P ? null : j ? C : "";
    }
    ue && W && Lt(ue.firstChild);
    const Ke = Sl(Q ? be : ue);
    for (; Be = Ke.nextNode(); )
      Tl(Be), Rl(Be), Be.content instanceof a && V0(Be.content);
    if (Q)
      return be;
    if (P) {
      if (T)
        for (tt = S.call(ue.ownerDocument); ue.firstChild; )
          tt.appendChild(ue.firstChild);
      else
        tt = ue;
      return (K.shadowroot || K.shadowrootmode) && (tt = k.call(n, tt, !0)), tt;
    }
    let lt = v ? ue.outerHTML : ue.innerHTML;
    return v && N["!doctype"] && ue.ownerDocument && ue.ownerDocument.doctype && ue.ownerDocument.doctype.name && at(By, ue.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + ue.ownerDocument.doctype.name + `>
` + lt), we && pi([x, F, g], (Xt) => {
      lt = En(lt, Xt, " ");
    }), O && j ? O.createHTML(lt) : lt;
  }, t.setConfig = function() {
    let be = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ra(be), X = !0;
  }, t.clearConfig = function() {
    Xr = null, X = !1;
  }, t.isValidAttribute = function(be, U, ue) {
    Xr || Ra({});
    const me = Ye(be), Be = Ye(U);
    return Cl(me, Be, ue);
  }, t.addHook = function(be, U) {
    typeof U == "function" && wn(z[be], U);
  }, t.removeHook = function(be, U) {
    if (U !== void 0) {
      const ue = bx(z[be], U);
      return ue === -1 ? void 0 : _x(z[be], ue, 1)[0];
    }
    return Yh(z[be]);
  }, t.removeHooks = function(be) {
    z[be] = [];
  }, t.removeAllHooks = function() {
    z = rd();
  }, t;
}
var Lx = jy();
const pC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Lx }, Symbol.toStringTag, { value: "Module" })), Wt = /* @__PURE__ */ Object.create(null);
Wt.open = "0";
Wt.close = "1";
Wt.ping = "2";
Wt.pong = "3";
Wt.message = "4";
Wt.upgrade = "5";
Wt.noop = "6";
const xi = /* @__PURE__ */ Object.create(null);
Object.keys(Wt).forEach((e) => {
  xi[Wt[e]] = e;
});
const Ic = { type: "error", data: "parser error" }, zy = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", qy = typeof ArrayBuffer == "function", Uy = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Wf = ({ type: e, data: t }, r, n) => zy && t instanceof Blob ? r ? n(t) : nd(t, n) : qy && (t instanceof ArrayBuffer || Uy(t)) ? r ? n(t) : nd(new Blob([t]), n) : n(Wt[e] + (t || "")), nd = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
};
function id(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let ts;
function Bx(e, t) {
  if (zy && e.data instanceof Blob)
    return e.data.arrayBuffer().then(id).then(t);
  if (qy && (e.data instanceof ArrayBuffer || Uy(e.data)))
    return t(id(e.data));
  Wf(e, !1, (r) => {
    ts || (ts = new TextEncoder()), t(ts.encode(r));
  });
}
const ad = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", kn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ad.length; e++)
  kn[ad.charCodeAt(e)] = e;
const jx = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, a, o, s, u;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const c = new ArrayBuffer(t), l = new Uint8Array(c);
  for (n = 0; n < r; n += 4)
    a = kn[e.charCodeAt(n)], o = kn[e.charCodeAt(n + 1)], s = kn[e.charCodeAt(n + 2)], u = kn[e.charCodeAt(n + 3)], l[i++] = a << 2 | o >> 4, l[i++] = (o & 15) << 4 | s >> 2, l[i++] = (s & 3) << 6 | u & 63;
  return c;
}, zx = typeof ArrayBuffer == "function", Gf = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: $y(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: qx(e.substring(1), t)
  } : xi[r] ? e.length > 1 ? {
    type: xi[r],
    data: e.substring(1)
  } : {
    type: xi[r]
  } : Ic;
}, qx = (e, t) => {
  if (zx) {
    const r = jx(e);
    return $y(r, t);
  } else
    return { base64: !0, data: e };
}, $y = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, Wy = "", Ux = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((a, o) => {
    Wf(a, !1, (s) => {
      n[o] = s, ++i === r && t(n.join(Wy));
    });
  });
}, $x = (e, t) => {
  const r = e.split(Wy), n = [];
  for (let i = 0; i < r.length; i++) {
    const a = Gf(r[i], t);
    if (n.push(a), a.type === "error")
      break;
  }
  return n;
};
function Wx() {
  return new TransformStream({
    transform(e, t) {
      Bx(e, (r) => {
        const n = r.length;
        let i;
        if (n < 126)
          i = new Uint8Array(1), new DataView(i.buffer).setUint8(0, n);
        else if (n < 65536) {
          i = new Uint8Array(3);
          const a = new DataView(i.buffer);
          a.setUint8(0, 126), a.setUint16(1, n);
        } else {
          i = new Uint8Array(9);
          const a = new DataView(i.buffer);
          a.setUint8(0, 127), a.setBigUint64(1, BigInt(n));
        }
        e.data && typeof e.data != "string" && (i[0] |= 128), t.enqueue(i), t.enqueue(r);
      });
    }
  });
}
let rs;
function gi(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function vi(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let i = 0; i < t; i++)
    r[i] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function Gx(e, t) {
  rs || (rs = new TextDecoder());
  const r = [];
  let n = 0, i = -1, a = !1;
  return new TransformStream({
    transform(o, s) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (gi(r) < 1)
            break;
          const u = vi(r, 1);
          a = (u[0] & 128) === 128, i = u[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (gi(r) < 2)
            break;
          const u = vi(r, 2);
          i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (gi(r) < 8)
            break;
          const u = vi(r, 8), c = new DataView(u.buffer, u.byteOffset, u.length), l = c.getUint32(0);
          if (l > Math.pow(2, 21) - 1) {
            s.enqueue(Ic);
            break;
          }
          i = l * Math.pow(2, 32) + c.getUint32(4), n = 3;
        } else {
          if (gi(r) < i)
            break;
          const u = vi(r, i);
          s.enqueue(Gf(a ? u : rs.decode(u), t)), n = 0;
        }
        if (i === 0 || i > e) {
          s.enqueue(Ic);
          break;
        }
      }
    }
  });
}
const Gy = 4;
function Ge(e) {
  if (e) return Vx(e);
}
function Vx(e) {
  for (var t in Ge.prototype)
    e[t] = Ge.prototype[t];
  return e;
}
Ge.prototype.on = Ge.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
Ge.prototype.once = function(e, t) {
  function r() {
    this.off(e, r), t.apply(this, arguments);
  }
  return r.fn = t, this.on(e, r), this;
};
Ge.prototype.off = Ge.prototype.removeListener = Ge.prototype.removeAllListeners = Ge.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var r = this._callbacks["$" + e];
  if (!r) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var n, i = 0; i < r.length; i++)
    if (n = r[i], n === t || n.fn === t) {
      r.splice(i, 1);
      break;
    }
  return r.length === 0 && delete this._callbacks["$" + e], this;
};
Ge.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), r = this._callbacks["$" + e], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  if (r) {
    r = r.slice(0);
    for (var n = 0, i = r.length; n < i; ++n)
      r[n].apply(this, t);
  }
  return this;
};
Ge.prototype.emitReserved = Ge.prototype.emit;
Ge.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
Ge.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const ca = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), bt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Hx = "arraybuffer";
function Vy(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const Kx = bt.setTimeout, Yx = bt.clearTimeout;
function fa(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Kx.bind(bt), e.clearTimeoutFn = Yx.bind(bt)) : (e.setTimeoutFn = bt.setTimeout.bind(bt), e.clearTimeoutFn = bt.clearTimeout.bind(bt));
}
const Xx = 1.33;
function Zx(e) {
  return typeof e == "string" ? Jx(e) : Math.ceil((e.byteLength || e.size) * Xx);
}
function Jx(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function Hy() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Qx(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function eS(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
  }
  return t;
}
class tS extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class Vf extends Ge {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, fa(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, r, n) {
    return super.emitReserved("error", new tS(t, r, n)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const r = Gf(t, this.socket.binaryType);
    this.onPacket(r);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, r = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const r = Qx(t);
    return r.length ? "?" + r : "";
  }
}
class rS extends Vf {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const r = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let n = 0;
      this._polling && (n++, this.once("pollComplete", function() {
        --n || r();
      })), this.writable || (n++, this.once("drain", function() {
        --n || r();
      }));
    } else
      r();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const r = (n) => {
      if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(n);
    };
    $x(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, Ux(t, (r) => {
      this.doWrite(r, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "https" : "http", r = this.query || {};
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = Hy()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(t, r);
  }
}
let Ky = !1;
try {
  Ky = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const nS = Ky;
function iS() {
}
class aS extends rS {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const r = location.protocol === "https:";
      let n = location.port;
      n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || n !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, r) {
    const n = this.request({
      method: "POST",
      data: t
    });
    n.on("success", r), n.on("error", (i, a) => {
      this.onError("xhr post error", i, a);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (r, n) => {
      this.onError("xhr poll error", r, n);
    }), this.pollXhr = t;
  }
}
class Ut extends Ge {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r, n) {
    super(), this.createRequest = t, fa(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const r = Vy(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    r.xdomain = !!this._opts.xd;
    const n = this._xhr = this.createRequest(r);
    try {
      n.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
          for (let i in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this._opts.extraHeaders[i]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        n.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
        var i;
        n.readyState === 3 && ((i = this._opts.cookieJar) === null || i === void 0 || i.parseCookies(
          // @ts-ignore
          n.getResponseHeader("set-cookie")
        )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof n.status == "number" ? n.status : 0);
        }, 0));
      }, n.send(this._data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this._onError(i);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = Ut.requestsCount++, Ut.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = iS, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete Ut.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
Ut.requestsCount = 0;
Ut.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", sd);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in bt ? "pagehide" : "unload";
    addEventListener(e, sd, !1);
  }
}
function sd() {
  for (let e in Ut.requests)
    Ut.requests.hasOwnProperty(e) && Ut.requests[e].abort();
}
const sS = function() {
  const e = Yy({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class oS extends aS {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = sS && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new Ut(Yy, this.uri(), t);
  }
}
function Yy(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || nS))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new bt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Xy = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class uS extends Vf {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), r = this.opts.protocols, n = Xy ? {} : Vy(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, r, n);
    } catch (i) {
      return this.emitReserved("error", i);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = r === t.length - 1;
      Wf(n, this.supportsBinary, (a) => {
        try {
          this.doWrite(n, a);
        } catch {
        }
        i && ca(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "wss" : "ws", r = this.query || {};
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = Hy()), this.supportsBinary || (r.b64 = 1), this.createUri(t, r);
  }
}
const ns = bt.WebSocket || bt.MozWebSocket;
class cS extends uS {
  createSocket(t, r, n) {
    return Xy ? new ns(t, r, n) : r ? new ns(t, r) : new ns(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class fS extends Vf {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((t) => {
        const r = Gx(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), i = Wx();
        i.readable.pipeTo(t.writable), this._writer = i.writable.getWriter();
        const a = () => {
          n.read().then(({ done: s, value: u }) => {
            s || (this.onPacket(u), a());
          }).catch((s) => {
          });
        };
        a();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = r === t.length - 1;
      this._writer.write(n).then(() => {
        i && ca(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const lS = {
  websocket: cS,
  webtransport: fS,
  polling: oS
}, hS = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, dS = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function kc(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = hS.exec(e || ""), a = {}, o = 14;
  for (; o--; )
    a[dS[o]] = i[o] || "";
  return r != -1 && n != -1 && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = pS(a, a.path), a.queryKey = mS(a, a.query), a;
}
function pS(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function mS(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, a) {
    i && (r[i] = a);
  }), r;
}
const Pc = typeof addEventListener == "function" && typeof removeEventListener == "function", Si = [];
Pc && addEventListener("offline", () => {
  Si.forEach((e) => e());
}, !1);
class vr extends Ge {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = Hx, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
      const n = kc(t);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = kc(r.host).host);
    fa(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
      const i = n.prototype.name;
      this.transports.push(i), this._transportsByName[i] = n;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = eS(this.opts.query)), Pc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Si.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const r = Object.assign({}, this.opts.query);
    r.EIO = Gy, r.transport = t, this.id && (r.sid = this.id);
    const n = Object.assign({}, this.opts, {
      query: r,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](n);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t = this.opts.rememberUpgrade && vr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(t);
    r.open(), this.setTransport(r);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r) => this._onClose("transport close", r));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", vr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const r = new Error("server error");
          r.code = t.data, this._onError(r);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this._getWritablePackets();
      this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let r = 1;
    for (let n = 0; n < this.writeBuffer.length; n++) {
      const i = this.writeBuffer[n].data;
      if (i && (r += Zx(i)), n > 0 && r > this._maxPayload)
        return this.writeBuffer.slice(0, n);
      r += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, ca(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), t;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, r, n) {
    return this._sendPacket("message", t, r, n), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(t, r, n, i) {
    if (typeof r == "function" && (i = r, r = void 0), typeof n == "function" && (i = n, n = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    n = n || {}, n.compress = n.compress !== !1;
    const a = {
      type: t,
      data: r,
      options: n
    };
    this.emitReserved("packetCreate", a), this.writeBuffer.push(a), i && this.once("flush", i), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, r = () => {
      this.off("upgrade", r), this.off("upgradeError", r), t();
    }, n = () => {
      this.once("upgrade", r), this.once("upgradeError", r);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n() : t();
    }) : this.upgrading ? n() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (vr.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, r) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Pc && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = Si.indexOf(this._offlineEventListener);
        n !== -1 && Si.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
vr.protocol = Gy;
class gS extends vr {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(t) {
    let r = this.createTransport(t), n = !1;
    vr.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            vr.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (l(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = r.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function a() {
      n || (n = !0, l(), r.close(), r = null);
    }
    const o = (f) => {
      const d = new Error("probe error: " + f);
      d.transport = r.name, a(), this.emitReserved("upgradeError", d);
    };
    function s() {
      o("transport closed");
    }
    function u() {
      o("socket closed");
    }
    function c(f) {
      r && f.name !== r.name && a();
    }
    const l = () => {
      r.removeListener("open", i), r.removeListener("error", o), r.removeListener("close", s), this.off("close", u), this.off("upgrading", c);
    };
    r.once("open", i), r.once("error", o), r.once("close", s), this.once("close", u), this.once("upgrading", c), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      n || r.open();
    }, 200) : r.open();
  }
  onHandshake(t) {
    this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(t) {
    const r = [];
    for (let n = 0; n < t.length; n++)
      ~this.transports.indexOf(t[n]) && r.push(t[n]);
    return r;
  }
}
let vS = class extends gS {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((i) => lS[i]).filter((i) => !!i)), super(t, n);
  }
};
function yS(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = kc(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const a = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + a + ":" + n.port + t, n.href = n.protocol + "://" + a + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const bS = typeof ArrayBuffer == "function", _S = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Zy = Object.prototype.toString, wS = typeof Blob == "function" || typeof Blob < "u" && Zy.call(Blob) === "[object BlobConstructor]", ES = typeof File == "function" || typeof File < "u" && Zy.call(File) === "[object FileConstructor]";
function Hf(e) {
  return bS && (e instanceof ArrayBuffer || _S(e)) || wS && e instanceof Blob || ES && e instanceof File;
}
function Oi(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (Oi(e[r]))
        return !0;
    return !1;
  }
  if (Hf(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Oi(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && Oi(e[r]))
      return !0;
  return !1;
}
function xS(e) {
  const t = [], r = e.data, n = e;
  return n.data = Nc(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function Nc(e, t) {
  if (!e)
    return e;
  if (Hf(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = Nc(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = Nc(e[n], t));
    return r;
  }
  return e;
}
function SS(e, t) {
  return e.data = Mc(e.data, t), delete e.attachments, e;
}
function Mc(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = Mc(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Mc(e[r], t));
  return e;
}
const OS = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], TS = 5;
var Ae;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Ae || (Ae = {}));
class CS {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === Ae.EVENT || t.type === Ae.ACK) && Oi(t) ? this.encodeAsBinary({
      type: t.type === Ae.EVENT ? Ae.BINARY_EVENT : Ae.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let r = "" + t.type;
    return (t.type === Ae.BINARY_EVENT || t.type === Ae.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = xS(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function od(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Kf extends Ge {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let r;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(t);
      const n = r.type === Ae.BINARY_EVENT;
      n || r.type === Ae.BINARY_ACK ? (r.type = n ? Ae.EVENT : Ae.ACK, this.reconstructor = new AS(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (Hf(t) || t.base64)
      if (this.reconstructor)
        r = this.reconstructor.takeBinaryData(t), r && (this.reconstructor = null, super.emitReserved("decoded", r));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let r = 0;
    const n = {
      type: Number(t.charAt(0))
    };
    if (Ae[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === Ae.BINARY_EVENT || n.type === Ae.BINARY_ACK) {
      const a = r + 1;
      for (; t.charAt(++r) !== "-" && r != t.length; )
        ;
      const o = t.substring(a, r);
      if (o != Number(o) || t.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      n.attachments = Number(o);
    }
    if (t.charAt(r + 1) === "/") {
      const a = r + 1;
      for (; ++r && !(t.charAt(r) === "," || r === t.length); )
        ;
      n.nsp = t.substring(a, r);
    } else
      n.nsp = "/";
    const i = t.charAt(r + 1);
    if (i !== "" && Number(i) == i) {
      const a = r + 1;
      for (; ++r; ) {
        const o = t.charAt(r);
        if (o == null || Number(o) != o) {
          --r;
          break;
        }
        if (r === t.length)
          break;
      }
      n.id = Number(t.substring(a, r + 1));
    }
    if (t.charAt(++r)) {
      const a = this.tryParse(t.substr(r));
      if (Kf.isPayloadValid(n.type, a))
        n.data = a;
      else
        throw new Error("invalid payload");
    }
    return n;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, r) {
    switch (t) {
      case Ae.CONNECT:
        return od(r);
      case Ae.DISCONNECT:
        return r === void 0;
      case Ae.CONNECT_ERROR:
        return typeof r == "string" || od(r);
      case Ae.EVENT:
      case Ae.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && OS.indexOf(r[0]) === -1);
      case Ae.ACK:
      case Ae.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class AS {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const r = SS(this.reconPack, this.buffers);
      return this.finishedReconstruction(), r;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const RS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: Kf, Encoder: CS, get PacketType() {
  return Ae;
}, protocol: TS }, Symbol.toStringTag, { value: "Module" }));
function Rt(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const IS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Jy extends Ge {
  /**
   * `Socket` constructor.
   */
  constructor(t, r, n) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      Rt(t, "open", this.onopen.bind(this)),
      Rt(t, "packet", this.onpacket.bind(this)),
      Rt(t, "error", this.onerror.bind(this)),
      Rt(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...r) {
    var n, i, a;
    if (IS.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const o = {
      type: Ae.EVENT,
      data: r
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const l = this.ids++, f = r.pop();
      this._registerAckCallback(l, f), o.id = l;
    }
    const s = (i = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || i === void 0 ? void 0 : i.writable, u = this.connected && !(!((a = this.io.engine) === null || a === void 0) && a._hasPingExpired());
    return this.flags.volatile && !s || (u ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, r) {
    var n;
    const i = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = r;
      return;
    }
    const a = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let s = 0; s < this.sendBuffer.length; s++)
        this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
      r.call(this, new Error("operation has timed out"));
    }, i), o = (...s) => {
      this.io.clearTimeoutFn(a), r.apply(this, s);
    };
    o.withError = !0, this.acks[t] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...r) {
    return new Promise((n, i) => {
      const a = (o, s) => o ? i(o) : n(s);
      a.withError = !0, r.push(a), this.emit(t, ...r);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let r;
    typeof t[t.length - 1] == "function" && (r = t.pop());
    const n = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((i, ...a) => n !== this._queue[0] ? void 0 : (i !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(i)) : (this._queue.shift(), r && r(null, ...a)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const r = this._queue[0];
    r.pending && !t || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: Ae.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, r) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, r), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((n) => String(n.id) === t)) {
        const n = this.acks[t];
        delete this.acks[t], n.withError && n.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case Ae.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Ae.EVENT:
        case Ae.BINARY_EVENT:
          this.onevent(t);
          break;
        case Ae.ACK:
        case Ae.BINARY_ACK:
          this.onack(t);
          break;
        case Ae.DISCONNECT:
          this.ondisconnect();
          break;
        case Ae.CONNECT_ERROR:
          this.destroy();
          const n = new Error(t.data.message);
          n.data = t.data.data, this.emitReserved("connect_error", n);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const r = t.data || [];
    t.id != null && r.push(this.ack(t.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const n of r)
        n.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const r = this;
    let n = !1;
    return function(...i) {
      n || (n = !0, r.packet({
        type: Ae.ACK,
        id: t,
        data: i
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const r = this.acks[t.id];
    typeof r == "function" && (delete this.acks[t.id], r.withError && t.data.unshift(null), r.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, r) {
    this.id = t, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: Ae.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const r = this._anyListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const r = this._anyOutgoingListeners;
      for (let n = 0; n < r.length; n++)
        if (t === r[n])
          return r.splice(n, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const n of r)
        n.apply(this, t.data);
    }
  }
}
function dn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
dn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
dn.prototype.reset = function() {
  this.attempts = 0;
};
dn.prototype.setMin = function(e) {
  this.ms = e;
};
dn.prototype.setMax = function(e) {
  this.max = e;
};
dn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Dc extends Ge {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, fa(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new dn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || RS;
    this.encoder = new i.Encoder(), this.decoder = new i.Decoder(), this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var r;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (r = this.backoff) === null || r === void 0 || r.setMin(t), this);
  }
  randomizationFactor(t) {
    var r;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (r = this.backoff) === null || r === void 0 || r.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var r;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (r = this.backoff) === null || r === void 0 || r.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new vS(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = Rt(r, "open", function() {
      n.onopen(), t && t();
    }), a = (s) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", s), t ? t(s) : this.maybeReconnectOnOpen();
    }, o = Rt(r, "error", a);
    if (this._timeout !== !1) {
      const s = this._timeout, u = this.setTimeoutFn(() => {
        i(), a(new Error("timeout")), r.close();
      }, s);
      this.opts.autoUnref && u.unref(), this.subs.push(() => {
        this.clearTimeoutFn(u);
      });
    }
    return this.subs.push(i), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Rt(t, "ping", this.onping.bind(this)),
      Rt(t, "data", this.ondata.bind(this)),
      Rt(t, "error", this.onerror.bind(this)),
      Rt(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      Rt(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    ca(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, r) {
    let n = this.nsps[t];
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Jy(this, t, r), this.nsps[t] = n), n;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const r = Object.keys(this.nsps);
    for (const n of r)
      if (this.nsps[n].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const r = this.encoder.encode(t);
    for (let n = 0; n < r.length; n++)
      this.engine.write(r[n], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(t, r) {
    var n;
    this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, r), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const n = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((i) => {
          i ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", i)) : t.onreconnect();
        }));
      }, r);
      this.opts.autoUnref && n.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const Tn = {};
function is(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = yS(e, t.path || "/socket.io"), n = r.source, i = r.id, a = r.path, o = Tn[i] && a in Tn[i].nsps, s = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let u;
  return s ? u = new Dc(n, t) : (Tn[i] || (Tn[i] = new Dc(n, t)), u = Tn[i]), r.query && !t.query && (t.query = r.queryKey), u.socket(r.path, t);
}
Object.assign(is, {
  Manager: Dc,
  Socket: Jy,
  io: is,
  connect: is
});
function yi(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var as = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
var ud;
function kS() {
  return ud || (ud = 1, function(e, t) {
    (function(r) {
      e.exports = r();
    })(function() {
      return function r(n, i, a) {
        function o(c, l) {
          if (!i[c]) {
            if (!n[c]) {
              var f = typeof yi == "function" && yi;
              if (!l && f) return f(c, !0);
              if (s) return s(c, !0);
              var d = new Error("Cannot find module '" + c + "'");
              throw d.code = "MODULE_NOT_FOUND", d;
            }
            var h = i[c] = { exports: {} };
            n[c][0].call(h.exports, function(m) {
              var p = n[c][1][m];
              return o(p || m);
            }, h, h.exports, r, n, i, a);
          }
          return i[c].exports;
        }
        for (var s = typeof yi == "function" && yi, u = 0; u < a.length; u++) o(a[u]);
        return o;
      }({ 1: [function(r, n, i) {
        var a = r("./utils"), o = r("./support"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        i.encode = function(u) {
          for (var c, l, f, d, h, m, p, b = [], y = 0, _ = u.length, E = _, O = a.getTypeOf(u) !== "string"; y < u.length; ) E = _ - y, f = O ? (c = u[y++], l = y < _ ? u[y++] : 0, y < _ ? u[y++] : 0) : (c = u.charCodeAt(y++), l = y < _ ? u.charCodeAt(y++) : 0, y < _ ? u.charCodeAt(y++) : 0), d = c >> 2, h = (3 & c) << 4 | l >> 4, m = 1 < E ? (15 & l) << 2 | f >> 6 : 64, p = 2 < E ? 63 & f : 64, b.push(s.charAt(d) + s.charAt(h) + s.charAt(m) + s.charAt(p));
          return b.join("");
        }, i.decode = function(u) {
          var c, l, f, d, h, m, p = 0, b = 0, y = "data:";
          if (u.substr(0, y.length) === y) throw new Error("Invalid base64 input, it looks like a data url.");
          var _, E = 3 * (u = u.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (u.charAt(u.length - 1) === s.charAt(64) && E--, u.charAt(u.length - 2) === s.charAt(64) && E--, E % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (_ = o.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); p < u.length; ) c = s.indexOf(u.charAt(p++)) << 2 | (d = s.indexOf(u.charAt(p++))) >> 4, l = (15 & d) << 4 | (h = s.indexOf(u.charAt(p++))) >> 2, f = (3 & h) << 6 | (m = s.indexOf(u.charAt(p++))), _[b++] = c, h !== 64 && (_[b++] = l), m !== 64 && (_[b++] = f);
          return _;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(r, n, i) {
        var a = r("./external"), o = r("./stream/DataWorker"), s = r("./stream/Crc32Probe"), u = r("./stream/DataLengthProbe");
        function c(l, f, d, h, m) {
          this.compressedSize = l, this.uncompressedSize = f, this.crc32 = d, this.compression = h, this.compressedContent = m;
        }
        c.prototype = { getContentWorker: function() {
          var l = new o(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")), f = this;
          return l.on("end", function() {
            if (this.streamInfo.data_length !== f.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), l;
        }, getCompressedWorker: function() {
          return new o(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, c.createWorkerFrom = function(l, f, d) {
          return l.pipe(new s()).pipe(new u("uncompressedSize")).pipe(f.compressWorker(d)).pipe(new u("compressedSize")).withStreamInfo("compression", f);
        }, n.exports = c;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, n, i) {
        var a = r("./stream/GenericWorker");
        i.STORE = { magic: "\0\0", compressWorker: function() {
          return new a("STORE compression");
        }, uncompressWorker: function() {
          return new a("STORE decompression");
        } }, i.DEFLATE = r("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, n, i) {
        var a = r("./utils"), o = function() {
          for (var s, u = [], c = 0; c < 256; c++) {
            s = c;
            for (var l = 0; l < 8; l++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
            u[c] = s;
          }
          return u;
        }();
        n.exports = function(s, u) {
          return s !== void 0 && s.length ? a.getTypeOf(s) !== "string" ? function(c, l, f, d) {
            var h = o, m = d + f;
            c ^= -1;
            for (var p = d; p < m; p++) c = c >>> 8 ^ h[255 & (c ^ l[p])];
            return -1 ^ c;
          }(0 | u, s, s.length, 0) : function(c, l, f, d) {
            var h = o, m = d + f;
            c ^= -1;
            for (var p = d; p < m; p++) c = c >>> 8 ^ h[255 & (c ^ l.charCodeAt(p))];
            return -1 ^ c;
          }(0 | u, s, s.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(r, n, i) {
        i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null;
      }, {}], 6: [function(r, n, i) {
        var a = null;
        a = typeof Promise < "u" ? Promise : r("lie"), n.exports = { Promise: a };
      }, { lie: 37 }], 7: [function(r, n, i) {
        var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", o = r("pako"), s = r("./utils"), u = r("./stream/GenericWorker"), c = a ? "uint8array" : "array";
        function l(f, d) {
          u.call(this, "FlateWorker/" + f), this._pako = null, this._pakoAction = f, this._pakoOptions = d, this.meta = {};
        }
        i.magic = "\b\0", s.inherits(l, u), l.prototype.processChunk = function(f) {
          this.meta = f.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(c, f.data), !1);
        }, l.prototype.flush = function() {
          u.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, l.prototype.cleanUp = function() {
          u.prototype.cleanUp.call(this), this._pako = null;
        }, l.prototype._createPako = function() {
          this._pako = new o[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var f = this;
          this._pako.onData = function(d) {
            f.push({ data: d, meta: f.meta });
          };
        }, i.compressWorker = function(f) {
          return new l("Deflate", f);
        }, i.uncompressWorker = function() {
          return new l("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, n, i) {
        function a(h, m) {
          var p, b = "";
          for (p = 0; p < m; p++) b += String.fromCharCode(255 & h), h >>>= 8;
          return b;
        }
        function o(h, m, p, b, y, _) {
          var E, O, C = h.file, B = h.compression, I = _ !== c.utf8encode, S = s.transformTo("string", _(C.name)), w = s.transformTo("string", c.utf8encode(C.name)), k = C.comment, z = s.transformTo("string", _(k)), x = s.transformTo("string", c.utf8encode(k)), F = w.length !== C.name.length, g = x.length !== k.length, q = "", ie = "", M = "", Z = C.dir, L = C.date, re = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          m && !p || (re.crc32 = h.crc32, re.compressedSize = h.compressedSize, re.uncompressedSize = h.uncompressedSize);
          var N = 0;
          m && (N |= 8), I || !F && !g || (N |= 2048);
          var D = 0, K = 0;
          Z && (D |= 16), y === "UNIX" ? (K = 798, D |= function(H, pe) {
            var xe = H;
            return H || (xe = pe ? 16893 : 33204), (65535 & xe) << 16;
          }(C.unixPermissions, Z)) : (K = 20, D |= function(H) {
            return 63 & (H || 0);
          }(C.dosPermissions)), E = L.getUTCHours(), E <<= 6, E |= L.getUTCMinutes(), E <<= 5, E |= L.getUTCSeconds() / 2, O = L.getUTCFullYear() - 1980, O <<= 4, O |= L.getUTCMonth() + 1, O <<= 5, O |= L.getUTCDate(), F && (ie = a(1, 1) + a(l(S), 4) + w, q += "up" + a(ie.length, 2) + ie), g && (M = a(1, 1) + a(l(z), 4) + x, q += "uc" + a(M.length, 2) + M);
          var ee = "";
          return ee += `
\0`, ee += a(N, 2), ee += B.magic, ee += a(E, 2), ee += a(O, 2), ee += a(re.crc32, 4), ee += a(re.compressedSize, 4), ee += a(re.uncompressedSize, 4), ee += a(S.length, 2), ee += a(q.length, 2), { fileRecord: f.LOCAL_FILE_HEADER + ee + S + q, dirRecord: f.CENTRAL_FILE_HEADER + a(K, 2) + ee + a(z.length, 2) + "\0\0\0\0" + a(D, 4) + a(b, 4) + S + q + z };
        }
        var s = r("../utils"), u = r("../stream/GenericWorker"), c = r("../utf8"), l = r("../crc32"), f = r("../signature");
        function d(h, m, p, b) {
          u.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = m, this.zipPlatform = p, this.encodeFileName = b, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        s.inherits(d, u), d.prototype.push = function(h) {
          var m = h.meta.percent || 0, p = this.entriesCount, b = this._sources.length;
          this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, u.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: p ? (m + 100 * (p - b - 1)) / p : 100 } }));
        }, d.prototype.openedSource = function(h) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
          var m = this.streamFiles && !h.file.dir;
          if (m) {
            var p = o(h, m, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: p.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = !0;
        }, d.prototype.closedSource = function(h) {
          this.accumulate = !1;
          var m = this.streamFiles && !h.file.dir, p = o(h, m, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(p.dirRecord), m) this.push({ data: function(b) {
            return f.DATA_DESCRIPTOR + a(b.crc32, 4) + a(b.compressedSize, 4) + a(b.uncompressedSize, 4);
          }(h), meta: { percent: 100 } });
          else for (this.push({ data: p.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, d.prototype.flush = function() {
          for (var h = this.bytesWritten, m = 0; m < this.dirRecords.length; m++) this.push({ data: this.dirRecords[m], meta: { percent: 100 } });
          var p = this.bytesWritten - h, b = function(y, _, E, O, C) {
            var B = s.transformTo("string", C(O));
            return f.CENTRAL_DIRECTORY_END + "\0\0\0\0" + a(y, 2) + a(y, 2) + a(_, 4) + a(E, 4) + a(B.length, 2) + B;
          }(this.dirRecords.length, p, h, this.zipComment, this.encodeFileName);
          this.push({ data: b, meta: { percent: 100 } });
        }, d.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, d.prototype.registerPrevious = function(h) {
          this._sources.push(h);
          var m = this;
          return h.on("data", function(p) {
            m.processChunk(p);
          }), h.on("end", function() {
            m.closedSource(m.previous.streamInfo), m._sources.length ? m.prepareNextSource() : m.end();
          }), h.on("error", function(p) {
            m.error(p);
          }), this;
        }, d.prototype.resume = function() {
          return !!u.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
        }, d.prototype.error = function(h) {
          var m = this._sources;
          if (!u.prototype.error.call(this, h)) return !1;
          for (var p = 0; p < m.length; p++) try {
            m[p].error(h);
          } catch {
          }
          return !0;
        }, d.prototype.lock = function() {
          u.prototype.lock.call(this);
          for (var h = this._sources, m = 0; m < h.length; m++) h[m].lock();
        }, n.exports = d;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, n, i) {
        var a = r("../compressions"), o = r("./ZipFileWorker");
        i.generateWorker = function(s, u, c) {
          var l = new o(u.streamFiles, c, u.platform, u.encodeFileName), f = 0;
          try {
            s.forEach(function(d, h) {
              f++;
              var m = function(_, E) {
                var O = _ || E, C = a[O];
                if (!C) throw new Error(O + " is not a valid compression method !");
                return C;
              }(h.options.compression, u.compression), p = h.options.compressionOptions || u.compressionOptions || {}, b = h.dir, y = h.date;
              h._compressWorker(m, p).withStreamInfo("file", { name: d, dir: b, date: y, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(l);
            }), l.entriesCount = f;
          } catch (d) {
            l.error(d);
          }
          return l;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, n, i) {
        function a() {
          if (!(this instanceof a)) return new a();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var o = new a();
            for (var s in this) typeof this[s] != "function" && (o[s] = this[s]);
            return o;
          };
        }
        (a.prototype = r("./object")).loadAsync = r("./load"), a.support = r("./support"), a.defaults = r("./defaults"), a.version = "3.10.1", a.loadAsync = function(o, s) {
          return new a().loadAsync(o, s);
        }, a.external = r("./external"), n.exports = a;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, n, i) {
        var a = r("./utils"), o = r("./external"), s = r("./utf8"), u = r("./zipEntries"), c = r("./stream/Crc32Probe"), l = r("./nodejsUtils");
        function f(d) {
          return new o.Promise(function(h, m) {
            var p = d.decompressed.getContentWorker().pipe(new c());
            p.on("error", function(b) {
              m(b);
            }).on("end", function() {
              p.streamInfo.crc32 !== d.decompressed.crc32 ? m(new Error("Corrupted zip : CRC32 mismatch")) : h();
            }).resume();
          });
        }
        n.exports = function(d, h) {
          var m = this;
          return h = a.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: s.utf8decode }), l.isNode && l.isStream(d) ? o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : a.prepareContent("the loaded zip file", d, !0, h.optimizedBinaryString, h.base64).then(function(p) {
            var b = new u(h);
            return b.load(p), b;
          }).then(function(p) {
            var b = [o.Promise.resolve(p)], y = p.files;
            if (h.checkCRC32) for (var _ = 0; _ < y.length; _++) b.push(f(y[_]));
            return o.Promise.all(b);
          }).then(function(p) {
            for (var b = p.shift(), y = b.files, _ = 0; _ < y.length; _++) {
              var E = y[_], O = E.fileNameStr, C = a.resolve(E.fileNameStr);
              m.file(C, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: h.createFolders }), E.dir || (m.file(C).unsafeOriginalName = O);
            }
            return b.zipComment.length && (m.comment = b.zipComment), m;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, n, i) {
        var a = r("../utils"), o = r("../stream/GenericWorker");
        function s(u, c) {
          o.call(this, "Nodejs stream input adapter for " + u), this._upstreamEnded = !1, this._bindStream(c);
        }
        a.inherits(s, o), s.prototype._bindStream = function(u) {
          var c = this;
          (this._stream = u).pause(), u.on("data", function(l) {
            c.push({ data: l, meta: { percent: 0 } });
          }).on("error", function(l) {
            c.isPaused ? this.generatedError = l : c.error(l);
          }).on("end", function() {
            c.isPaused ? c._upstreamEnded = !0 : c.end();
          });
        }, s.prototype.pause = function() {
          return !!o.prototype.pause.call(this) && (this._stream.pause(), !0);
        }, s.prototype.resume = function() {
          return !!o.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
        }, n.exports = s;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, n, i) {
        var a = r("readable-stream").Readable;
        function o(s, u, c) {
          a.call(this, u), this._helper = s;
          var l = this;
          s.on("data", function(f, d) {
            l.push(f) || l._helper.pause(), c && c(d);
          }).on("error", function(f) {
            l.emit("error", f);
          }).on("end", function() {
            l.push(null);
          });
        }
        r("../utils").inherits(o, a), o.prototype._read = function() {
          this._helper.resume();
        }, n.exports = o;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, n, i) {
        n.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(a, o) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(a, o);
          if (typeof a == "number") throw new Error('The "data" argument must not be a number');
          return new Buffer(a, o);
        }, allocBuffer: function(a) {
          if (Buffer.alloc) return Buffer.alloc(a);
          var o = new Buffer(a);
          return o.fill(0), o;
        }, isBuffer: function(a) {
          return Buffer.isBuffer(a);
        }, isStream: function(a) {
          return a && typeof a.on == "function" && typeof a.pause == "function" && typeof a.resume == "function";
        } };
      }, {}], 15: [function(r, n, i) {
        function a(C, B, I) {
          var S, w = s.getTypeOf(B), k = s.extend(I || {}, l);
          k.date = k.date || /* @__PURE__ */ new Date(), k.compression !== null && (k.compression = k.compression.toUpperCase()), typeof k.unixPermissions == "string" && (k.unixPermissions = parseInt(k.unixPermissions, 8)), k.unixPermissions && 16384 & k.unixPermissions && (k.dir = !0), k.dosPermissions && 16 & k.dosPermissions && (k.dir = !0), k.dir && (C = y(C)), k.createFolders && (S = b(C)) && _.call(this, S, !0);
          var z = w === "string" && k.binary === !1 && k.base64 === !1;
          I && I.binary !== void 0 || (k.binary = !z), (B instanceof f && B.uncompressedSize === 0 || k.dir || !B || B.length === 0) && (k.base64 = !1, k.binary = !0, B = "", k.compression = "STORE", w = "string");
          var x = null;
          x = B instanceof f || B instanceof u ? B : m.isNode && m.isStream(B) ? new p(C, B) : s.prepareContent(C, B, k.binary, k.optimizedBinaryString, k.base64);
          var F = new d(C, x, k);
          this.files[C] = F;
        }
        var o = r("./utf8"), s = r("./utils"), u = r("./stream/GenericWorker"), c = r("./stream/StreamHelper"), l = r("./defaults"), f = r("./compressedObject"), d = r("./zipObject"), h = r("./generate"), m = r("./nodejsUtils"), p = r("./nodejs/NodejsStreamInputAdapter"), b = function(C) {
          C.slice(-1) === "/" && (C = C.substring(0, C.length - 1));
          var B = C.lastIndexOf("/");
          return 0 < B ? C.substring(0, B) : "";
        }, y = function(C) {
          return C.slice(-1) !== "/" && (C += "/"), C;
        }, _ = function(C, B) {
          return B = B !== void 0 ? B : l.createFolders, C = y(C), this.files[C] || a.call(this, C, null, { dir: !0, createFolders: B }), this.files[C];
        };
        function E(C) {
          return Object.prototype.toString.call(C) === "[object RegExp]";
        }
        var O = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(C) {
          var B, I, S;
          for (B in this.files) S = this.files[B], (I = B.slice(this.root.length, B.length)) && B.slice(0, this.root.length) === this.root && C(I, S);
        }, filter: function(C) {
          var B = [];
          return this.forEach(function(I, S) {
            C(I, S) && B.push(S);
          }), B;
        }, file: function(C, B, I) {
          if (arguments.length !== 1) return C = this.root + C, a.call(this, C, B, I), this;
          if (E(C)) {
            var S = C;
            return this.filter(function(k, z) {
              return !z.dir && S.test(k);
            });
          }
          var w = this.files[this.root + C];
          return w && !w.dir ? w : null;
        }, folder: function(C) {
          if (!C) return this;
          if (E(C)) return this.filter(function(w, k) {
            return k.dir && C.test(w);
          });
          var B = this.root + C, I = _.call(this, B), S = this.clone();
          return S.root = I.name, S;
        }, remove: function(C) {
          C = this.root + C;
          var B = this.files[C];
          if (B || (C.slice(-1) !== "/" && (C += "/"), B = this.files[C]), B && !B.dir) delete this.files[C];
          else for (var I = this.filter(function(w, k) {
            return k.name.slice(0, C.length) === C;
          }), S = 0; S < I.length; S++) delete this.files[I[S].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(C) {
          var B, I = {};
          try {
            if ((I = s.extend(C || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: o.utf8encode })).type = I.type.toLowerCase(), I.compression = I.compression.toUpperCase(), I.type === "binarystring" && (I.type = "string"), !I.type) throw new Error("No output type specified.");
            s.checkSupport(I.type), I.platform !== "darwin" && I.platform !== "freebsd" && I.platform !== "linux" && I.platform !== "sunos" || (I.platform = "UNIX"), I.platform === "win32" && (I.platform = "DOS");
            var S = I.comment || this.comment || "";
            B = h.generateWorker(this, I, S);
          } catch (w) {
            (B = new u("error")).error(w);
          }
          return new c(B, I.type || "string", I.mimeType);
        }, generateAsync: function(C, B) {
          return this.generateInternalStream(C).accumulate(B);
        }, generateNodeStream: function(C, B) {
          return (C = C || {}).type || (C.type = "nodebuffer"), this.generateInternalStream(C).toNodejsStream(B);
        } };
        n.exports = O;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, n, i) {
        n.exports = r("stream");
      }, { stream: void 0 }], 17: [function(r, n, i) {
        var a = r("./DataReader");
        function o(s) {
          a.call(this, s);
          for (var u = 0; u < this.data.length; u++) s[u] = 255 & s[u];
        }
        r("../utils").inherits(o, a), o.prototype.byteAt = function(s) {
          return this.data[this.zero + s];
        }, o.prototype.lastIndexOfSignature = function(s) {
          for (var u = s.charCodeAt(0), c = s.charCodeAt(1), l = s.charCodeAt(2), f = s.charCodeAt(3), d = this.length - 4; 0 <= d; --d) if (this.data[d] === u && this.data[d + 1] === c && this.data[d + 2] === l && this.data[d + 3] === f) return d - this.zero;
          return -1;
        }, o.prototype.readAndCheckSignature = function(s) {
          var u = s.charCodeAt(0), c = s.charCodeAt(1), l = s.charCodeAt(2), f = s.charCodeAt(3), d = this.readData(4);
          return u === d[0] && c === d[1] && l === d[2] && f === d[3];
        }, o.prototype.readData = function(s) {
          if (this.checkOffset(s), s === 0) return [];
          var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
          return this.index += s, u;
        }, n.exports = o;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, n, i) {
        var a = r("../utils");
        function o(s) {
          this.data = s, this.length = s.length, this.index = 0, this.zero = 0;
        }
        o.prototype = { checkOffset: function(s) {
          this.checkIndex(this.index + s);
        }, checkIndex: function(s) {
          if (this.length < this.zero + s || s < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + s + "). Corrupted zip ?");
        }, setIndex: function(s) {
          this.checkIndex(s), this.index = s;
        }, skip: function(s) {
          this.setIndex(this.index + s);
        }, byteAt: function() {
        }, readInt: function(s) {
          var u, c = 0;
          for (this.checkOffset(s), u = this.index + s - 1; u >= this.index; u--) c = (c << 8) + this.byteAt(u);
          return this.index += s, c;
        }, readString: function(s) {
          return a.transformTo("string", this.readData(s));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var s = this.readInt(4);
          return new Date(Date.UTC(1980 + (s >> 25 & 127), (s >> 21 & 15) - 1, s >> 16 & 31, s >> 11 & 31, s >> 5 & 63, (31 & s) << 1));
        } }, n.exports = o;
      }, { "../utils": 32 }], 19: [function(r, n, i) {
        var a = r("./Uint8ArrayReader");
        function o(s) {
          a.call(this, s);
        }
        r("../utils").inherits(o, a), o.prototype.readData = function(s) {
          this.checkOffset(s);
          var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
          return this.index += s, u;
        }, n.exports = o;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, n, i) {
        var a = r("./DataReader");
        function o(s) {
          a.call(this, s);
        }
        r("../utils").inherits(o, a), o.prototype.byteAt = function(s) {
          return this.data.charCodeAt(this.zero + s);
        }, o.prototype.lastIndexOfSignature = function(s) {
          return this.data.lastIndexOf(s) - this.zero;
        }, o.prototype.readAndCheckSignature = function(s) {
          return s === this.readData(4);
        }, o.prototype.readData = function(s) {
          this.checkOffset(s);
          var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
          return this.index += s, u;
        }, n.exports = o;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, n, i) {
        var a = r("./ArrayReader");
        function o(s) {
          a.call(this, s);
        }
        r("../utils").inherits(o, a), o.prototype.readData = function(s) {
          if (this.checkOffset(s), s === 0) return new Uint8Array(0);
          var u = this.data.subarray(this.zero + this.index, this.zero + this.index + s);
          return this.index += s, u;
        }, n.exports = o;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, n, i) {
        var a = r("../utils"), o = r("../support"), s = r("./ArrayReader"), u = r("./StringReader"), c = r("./NodeBufferReader"), l = r("./Uint8ArrayReader");
        n.exports = function(f) {
          var d = a.getTypeOf(f);
          return a.checkSupport(d), d !== "string" || o.uint8array ? d === "nodebuffer" ? new c(f) : o.uint8array ? new l(a.transformTo("uint8array", f)) : new s(a.transformTo("array", f)) : new u(f);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, n, i) {
        i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(r, n, i) {
        var a = r("./GenericWorker"), o = r("../utils");
        function s(u) {
          a.call(this, "ConvertWorker to " + u), this.destType = u;
        }
        o.inherits(s, a), s.prototype.processChunk = function(u) {
          this.push({ data: o.transformTo(this.destType, u.data), meta: u.meta });
        }, n.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, n, i) {
        var a = r("./GenericWorker"), o = r("../crc32");
        function s() {
          a.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        r("../utils").inherits(s, a), s.prototype.processChunk = function(u) {
          this.streamInfo.crc32 = o(u.data, this.streamInfo.crc32 || 0), this.push(u);
        }, n.exports = s;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, n, i) {
        var a = r("../utils"), o = r("./GenericWorker");
        function s(u) {
          o.call(this, "DataLengthProbe for " + u), this.propName = u, this.withStreamInfo(u, 0);
        }
        a.inherits(s, o), s.prototype.processChunk = function(u) {
          if (u) {
            var c = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = c + u.data.length;
          }
          o.prototype.processChunk.call(this, u);
        }, n.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, n, i) {
        var a = r("../utils"), o = r("./GenericWorker");
        function s(u) {
          o.call(this, "DataWorker");
          var c = this;
          this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, u.then(function(l) {
            c.dataIsReady = !0, c.data = l, c.max = l && l.length || 0, c.type = a.getTypeOf(l), c.isPaused || c._tickAndRepeat();
          }, function(l) {
            c.error(l);
          });
        }
        a.inherits(s, o), s.prototype.cleanUp = function() {
          o.prototype.cleanUp.call(this), this.data = null;
        }, s.prototype.resume = function() {
          return !!o.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, a.delay(this._tickAndRepeat, [], this)), !0);
        }, s.prototype._tickAndRepeat = function() {
          this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (a.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
        }, s.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return !1;
          var u = null, c = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              u = this.data.substring(this.index, c);
              break;
            case "uint8array":
              u = this.data.subarray(this.index, c);
              break;
            case "array":
            case "nodebuffer":
              u = this.data.slice(this.index, c);
          }
          return this.index = c, this.push({ data: u, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, n.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(r, n, i) {
        function a(o) {
          this.name = o || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        a.prototype = { push: function(o) {
          this.emit("data", o);
        }, end: function() {
          if (this.isFinished) return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (o) {
            this.emit("error", o);
          }
          return !0;
        }, error: function(o) {
          return !this.isFinished && (this.isPaused ? this.generatedError = o : (this.isFinished = !0, this.emit("error", o), this.previous && this.previous.error(o), this.cleanUp()), !0);
        }, on: function(o, s) {
          return this._listeners[o].push(s), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(o, s) {
          if (this._listeners[o]) for (var u = 0; u < this._listeners[o].length; u++) this._listeners[o][u].call(this, s);
        }, pipe: function(o) {
          return o.registerPrevious(this);
        }, registerPrevious: function(o) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = o.streamInfo, this.mergeStreamInfo(), this.previous = o;
          var s = this;
          return o.on("data", function(u) {
            s.processChunk(u);
          }), o.on("end", function() {
            s.end();
          }), o.on("error", function(u) {
            s.error(u);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return !1;
          var o = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), o = !0), this.previous && this.previous.resume(), !o;
        }, flush: function() {
        }, processChunk: function(o) {
          this.push(o);
        }, withStreamInfo: function(o, s) {
          return this.extraStreamInfo[o] = s, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var o in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, o) && (this.streamInfo[o] = this.extraStreamInfo[o]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        }, toString: function() {
          var o = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + o : o;
        } }, n.exports = a;
      }, {}], 29: [function(r, n, i) {
        var a = r("../utils"), o = r("./ConvertWorker"), s = r("./GenericWorker"), u = r("../base64"), c = r("../support"), l = r("../external"), f = null;
        if (c.nodestream) try {
          f = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
        function d(m, p) {
          return new l.Promise(function(b, y) {
            var _ = [], E = m._internalType, O = m._outputType, C = m._mimeType;
            m.on("data", function(B, I) {
              _.push(B), p && p(I);
            }).on("error", function(B) {
              _ = [], y(B);
            }).on("end", function() {
              try {
                var B = function(I, S, w) {
                  switch (I) {
                    case "blob":
                      return a.newBlob(a.transformTo("arraybuffer", S), w);
                    case "base64":
                      return u.encode(S);
                    default:
                      return a.transformTo(I, S);
                  }
                }(O, function(I, S) {
                  var w, k = 0, z = null, x = 0;
                  for (w = 0; w < S.length; w++) x += S[w].length;
                  switch (I) {
                    case "string":
                      return S.join("");
                    case "array":
                      return Array.prototype.concat.apply([], S);
                    case "uint8array":
                      for (z = new Uint8Array(x), w = 0; w < S.length; w++) z.set(S[w], k), k += S[w].length;
                      return z;
                    case "nodebuffer":
                      return Buffer.concat(S);
                    default:
                      throw new Error("concat : unsupported type '" + I + "'");
                  }
                }(E, _), C);
                b(B);
              } catch (I) {
                y(I);
              }
              _ = [];
            }).resume();
          });
        }
        function h(m, p, b) {
          var y = p;
          switch (p) {
            case "blob":
            case "arraybuffer":
              y = "uint8array";
              break;
            case "base64":
              y = "string";
          }
          try {
            this._internalType = y, this._outputType = p, this._mimeType = b, a.checkSupport(y), this._worker = m.pipe(new o(y)), m.lock();
          } catch (_) {
            this._worker = new s("error"), this._worker.error(_);
          }
        }
        h.prototype = { accumulate: function(m) {
          return d(this, m);
        }, on: function(m, p) {
          var b = this;
          return m === "data" ? this._worker.on(m, function(y) {
            p.call(b, y.data, y.meta);
          }) : this._worker.on(m, function() {
            a.delay(p, arguments, b);
          }), this;
        }, resume: function() {
          return a.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(m) {
          if (a.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
          return new f(this, { objectMode: this._outputType !== "nodebuffer" }, m);
        } }, n.exports = h;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(r, n, i) {
        if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", i.nodebuffer = typeof Buffer < "u", i.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") i.blob = !1;
        else {
          var a = new ArrayBuffer(0);
          try {
            i.blob = new Blob([a], { type: "application/zip" }).size === 0;
          } catch {
            try {
              var o = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              o.append(a), i.blob = o.getBlob("application/zip").size === 0;
            } catch {
              i.blob = !1;
            }
          }
        }
        try {
          i.nodestream = !!r("readable-stream").Readable;
        } catch {
          i.nodestream = !1;
        }
      }, { "readable-stream": 16 }], 31: [function(r, n, i) {
        for (var a = r("./utils"), o = r("./support"), s = r("./nodejsUtils"), u = r("./stream/GenericWorker"), c = new Array(256), l = 0; l < 256; l++) c[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;
        c[254] = c[254] = 1;
        function f() {
          u.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function d() {
          u.call(this, "utf-8 encode");
        }
        i.utf8encode = function(h) {
          return o.nodebuffer ? s.newBufferFrom(h, "utf-8") : function(m) {
            var p, b, y, _, E, O = m.length, C = 0;
            for (_ = 0; _ < O; _++) (64512 & (b = m.charCodeAt(_))) == 55296 && _ + 1 < O && (64512 & (y = m.charCodeAt(_ + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (y - 56320), _++), C += b < 128 ? 1 : b < 2048 ? 2 : b < 65536 ? 3 : 4;
            for (p = o.uint8array ? new Uint8Array(C) : new Array(C), _ = E = 0; E < C; _++) (64512 & (b = m.charCodeAt(_))) == 55296 && _ + 1 < O && (64512 & (y = m.charCodeAt(_ + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (y - 56320), _++), b < 128 ? p[E++] = b : (b < 2048 ? p[E++] = 192 | b >>> 6 : (b < 65536 ? p[E++] = 224 | b >>> 12 : (p[E++] = 240 | b >>> 18, p[E++] = 128 | b >>> 12 & 63), p[E++] = 128 | b >>> 6 & 63), p[E++] = 128 | 63 & b);
            return p;
          }(h);
        }, i.utf8decode = function(h) {
          return o.nodebuffer ? a.transformTo("nodebuffer", h).toString("utf-8") : function(m) {
            var p, b, y, _, E = m.length, O = new Array(2 * E);
            for (p = b = 0; p < E; ) if ((y = m[p++]) < 128) O[b++] = y;
            else if (4 < (_ = c[y])) O[b++] = 65533, p += _ - 1;
            else {
              for (y &= _ === 2 ? 31 : _ === 3 ? 15 : 7; 1 < _ && p < E; ) y = y << 6 | 63 & m[p++], _--;
              1 < _ ? O[b++] = 65533 : y < 65536 ? O[b++] = y : (y -= 65536, O[b++] = 55296 | y >> 10 & 1023, O[b++] = 56320 | 1023 & y);
            }
            return O.length !== b && (O.subarray ? O = O.subarray(0, b) : O.length = b), a.applyFromCharCode(O);
          }(h = a.transformTo(o.uint8array ? "uint8array" : "array", h));
        }, a.inherits(f, u), f.prototype.processChunk = function(h) {
          var m = a.transformTo(o.uint8array ? "uint8array" : "array", h.data);
          if (this.leftOver && this.leftOver.length) {
            if (o.uint8array) {
              var p = m;
              (m = new Uint8Array(p.length + this.leftOver.length)).set(this.leftOver, 0), m.set(p, this.leftOver.length);
            } else m = this.leftOver.concat(m);
            this.leftOver = null;
          }
          var b = function(_, E) {
            var O;
            for ((E = E || _.length) > _.length && (E = _.length), O = E - 1; 0 <= O && (192 & _[O]) == 128; ) O--;
            return O < 0 || O === 0 ? E : O + c[_[O]] > E ? O : E;
          }(m), y = m;
          b !== m.length && (o.uint8array ? (y = m.subarray(0, b), this.leftOver = m.subarray(b, m.length)) : (y = m.slice(0, b), this.leftOver = m.slice(b, m.length))), this.push({ data: i.utf8decode(y), meta: h.meta });
        }, f.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, i.Utf8DecodeWorker = f, a.inherits(d, u), d.prototype.processChunk = function(h) {
          this.push({ data: i.utf8encode(h.data), meta: h.meta });
        }, i.Utf8EncodeWorker = d;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, n, i) {
        var a = r("./support"), o = r("./base64"), s = r("./nodejsUtils"), u = r("./external");
        function c(p) {
          return p;
        }
        function l(p, b) {
          for (var y = 0; y < p.length; ++y) b[y] = 255 & p.charCodeAt(y);
          return b;
        }
        r("setimmediate"), i.newBlob = function(p, b) {
          i.checkSupport("blob");
          try {
            return new Blob([p], { type: b });
          } catch {
            try {
              var y = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return y.append(p), y.getBlob(b);
            } catch {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var f = { stringifyByChunk: function(p, b, y) {
          var _ = [], E = 0, O = p.length;
          if (O <= y) return String.fromCharCode.apply(null, p);
          for (; E < O; ) b === "array" || b === "nodebuffer" ? _.push(String.fromCharCode.apply(null, p.slice(E, Math.min(E + y, O)))) : _.push(String.fromCharCode.apply(null, p.subarray(E, Math.min(E + y, O)))), E += y;
          return _.join("");
        }, stringifyByChar: function(p) {
          for (var b = "", y = 0; y < p.length; y++) b += String.fromCharCode(p[y]);
          return b;
        }, applyCanBeUsed: { uint8array: function() {
          try {
            return a.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        }(), nodebuffer: function() {
          try {
            return a.nodebuffer && String.fromCharCode.apply(null, s.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        }() } };
        function d(p) {
          var b = 65536, y = i.getTypeOf(p), _ = !0;
          if (y === "uint8array" ? _ = f.applyCanBeUsed.uint8array : y === "nodebuffer" && (_ = f.applyCanBeUsed.nodebuffer), _) for (; 1 < b; ) try {
            return f.stringifyByChunk(p, y, b);
          } catch {
            b = Math.floor(b / 2);
          }
          return f.stringifyByChar(p);
        }
        function h(p, b) {
          for (var y = 0; y < p.length; y++) b[y] = p[y];
          return b;
        }
        i.applyFromCharCode = d;
        var m = {};
        m.string = { string: c, array: function(p) {
          return l(p, new Array(p.length));
        }, arraybuffer: function(p) {
          return m.string.uint8array(p).buffer;
        }, uint8array: function(p) {
          return l(p, new Uint8Array(p.length));
        }, nodebuffer: function(p) {
          return l(p, s.allocBuffer(p.length));
        } }, m.array = { string: d, array: c, arraybuffer: function(p) {
          return new Uint8Array(p).buffer;
        }, uint8array: function(p) {
          return new Uint8Array(p);
        }, nodebuffer: function(p) {
          return s.newBufferFrom(p);
        } }, m.arraybuffer = { string: function(p) {
          return d(new Uint8Array(p));
        }, array: function(p) {
          return h(new Uint8Array(p), new Array(p.byteLength));
        }, arraybuffer: c, uint8array: function(p) {
          return new Uint8Array(p);
        }, nodebuffer: function(p) {
          return s.newBufferFrom(new Uint8Array(p));
        } }, m.uint8array = { string: d, array: function(p) {
          return h(p, new Array(p.length));
        }, arraybuffer: function(p) {
          return p.buffer;
        }, uint8array: c, nodebuffer: function(p) {
          return s.newBufferFrom(p);
        } }, m.nodebuffer = { string: d, array: function(p) {
          return h(p, new Array(p.length));
        }, arraybuffer: function(p) {
          return m.nodebuffer.uint8array(p).buffer;
        }, uint8array: function(p) {
          return h(p, new Uint8Array(p.length));
        }, nodebuffer: c }, i.transformTo = function(p, b) {
          if (b = b || "", !p) return b;
          i.checkSupport(p);
          var y = i.getTypeOf(b);
          return m[y][p](b);
        }, i.resolve = function(p) {
          for (var b = p.split("/"), y = [], _ = 0; _ < b.length; _++) {
            var E = b[_];
            E === "." || E === "" && _ !== 0 && _ !== b.length - 1 || (E === ".." ? y.pop() : y.push(E));
          }
          return y.join("/");
        }, i.getTypeOf = function(p) {
          return typeof p == "string" ? "string" : Object.prototype.toString.call(p) === "[object Array]" ? "array" : a.nodebuffer && s.isBuffer(p) ? "nodebuffer" : a.uint8array && p instanceof Uint8Array ? "uint8array" : a.arraybuffer && p instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, i.checkSupport = function(p) {
          if (!a[p.toLowerCase()]) throw new Error(p + " is not supported by this platform");
        }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(p) {
          var b, y, _ = "";
          for (y = 0; y < (p || "").length; y++) _ += "\\x" + ((b = p.charCodeAt(y)) < 16 ? "0" : "") + b.toString(16).toUpperCase();
          return _;
        }, i.delay = function(p, b, y) {
          setImmediate(function() {
            p.apply(y || null, b || []);
          });
        }, i.inherits = function(p, b) {
          function y() {
          }
          y.prototype = b.prototype, p.prototype = new y();
        }, i.extend = function() {
          var p, b, y = {};
          for (p = 0; p < arguments.length; p++) for (b in arguments[p]) Object.prototype.hasOwnProperty.call(arguments[p], b) && y[b] === void 0 && (y[b] = arguments[p][b]);
          return y;
        }, i.prepareContent = function(p, b, y, _, E) {
          return u.Promise.resolve(b).then(function(O) {
            return a.blob && (O instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(O)) !== -1) && typeof FileReader < "u" ? new u.Promise(function(C, B) {
              var I = new FileReader();
              I.onload = function(S) {
                C(S.target.result);
              }, I.onerror = function(S) {
                B(S.target.error);
              }, I.readAsArrayBuffer(O);
            }) : O;
          }).then(function(O) {
            var C = i.getTypeOf(O);
            return C ? (C === "arraybuffer" ? O = i.transformTo("uint8array", O) : C === "string" && (E ? O = o.decode(O) : y && _ !== !0 && (O = function(B) {
              return l(B, a.uint8array ? new Uint8Array(B.length) : new Array(B.length));
            }(O))), O) : u.Promise.reject(new Error("Can't read the data of '" + p + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, n, i) {
        var a = r("./reader/readerFor"), o = r("./utils"), s = r("./signature"), u = r("./zipEntry"), c = r("./support");
        function l(f) {
          this.files = [], this.loadOptions = f;
        }
        l.prototype = { checkSignature: function(f) {
          if (!this.reader.readAndCheckSignature(f)) {
            this.reader.index -= 4;
            var d = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + o.pretty(d) + ", expected " + o.pretty(f) + ")");
          }
        }, isSignature: function(f, d) {
          var h = this.reader.index;
          this.reader.setIndex(f);
          var m = this.reader.readString(4) === d;
          return this.reader.setIndex(h), m;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var f = this.reader.readData(this.zipCommentLength), d = c.uint8array ? "uint8array" : "array", h = o.transformTo(d, f);
          this.zipComment = this.loadOptions.decodeFileName(h);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var f, d, h, m = this.zip64EndOfCentralSize - 44; 0 < m; ) f = this.reader.readInt(2), d = this.reader.readInt(4), h = this.reader.readData(d), this.zip64ExtensibleData[f] = { id: f, length: d, value: h };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var f, d;
          for (f = 0; f < this.files.length; f++) d = this.files[f], this.reader.setIndex(d.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), d.readLocalPart(this.reader), d.handleUTF8(), d.processAttributes();
        }, readCentralDir: function() {
          var f;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (f = new u({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(f);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var f = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (f < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(f);
          var d = f;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (f = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(f), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var h = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
          var m = d - h;
          if (0 < m) this.isSignature(d, s.CENTRAL_FILE_HEADER) || (this.reader.zero = m);
          else if (m < 0) throw new Error("Corrupted zip: missing " + Math.abs(m) + " bytes.");
        }, prepareReader: function(f) {
          this.reader = a(f);
        }, load: function(f) {
          this.prepareReader(f), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, n.exports = l;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, n, i) {
        var a = r("./reader/readerFor"), o = r("./utils"), s = r("./compressedObject"), u = r("./crc32"), c = r("./utf8"), l = r("./compressions"), f = r("./support");
        function d(h, m) {
          this.options = h, this.loadOptions = m;
        }
        d.prototype = { isEncrypted: function() {
          return (1 & this.bitFlag) == 1;
        }, useUTF8: function() {
          return (2048 & this.bitFlag) == 2048;
        }, readLocalPart: function(h) {
          var m, p;
          if (h.skip(22), this.fileNameLength = h.readInt(2), p = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(p), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if ((m = function(b) {
            for (var y in l) if (Object.prototype.hasOwnProperty.call(l, y) && l[y].magic === b) return l[y];
            return null;
          }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + o.pretty(this.compressionMethod) + " unknown (inner file : " + o.transformTo("string", this.fileName) + ")");
          this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, m, h.readData(this.compressedSize));
        }, readCentralPart: function(h) {
          this.versionMadeBy = h.readInt(2), h.skip(2), this.bitFlag = h.readInt(2), this.compressionMethod = h.readString(2), this.date = h.readDate(), this.crc32 = h.readInt(4), this.compressedSize = h.readInt(4), this.uncompressedSize = h.readInt(4);
          var m = h.readInt(2);
          if (this.extraFieldsLength = h.readInt(2), this.fileCommentLength = h.readInt(2), this.diskNumberStart = h.readInt(2), this.internalFileAttributes = h.readInt(2), this.externalFileAttributes = h.readInt(4), this.localHeaderOffset = h.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          h.skip(m), this.readExtraFields(h), this.parseZIP64ExtraField(h), this.fileComment = h.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var h = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), h == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), h == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var h = a(this.extraFields[1].value);
            this.uncompressedSize === o.MAX_VALUE_32BITS && (this.uncompressedSize = h.readInt(8)), this.compressedSize === o.MAX_VALUE_32BITS && (this.compressedSize = h.readInt(8)), this.localHeaderOffset === o.MAX_VALUE_32BITS && (this.localHeaderOffset = h.readInt(8)), this.diskNumberStart === o.MAX_VALUE_32BITS && (this.diskNumberStart = h.readInt(4));
          }
        }, readExtraFields: function(h) {
          var m, p, b, y = h.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); h.index + 4 < y; ) m = h.readInt(2), p = h.readInt(2), b = h.readData(p), this.extraFields[m] = { id: m, length: p, value: b };
          h.setIndex(y);
        }, handleUTF8: function() {
          var h = f.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = c.utf8decode(this.fileName), this.fileCommentStr = c.utf8decode(this.fileComment);
          else {
            var m = this.findExtraFieldUnicodePath();
            if (m !== null) this.fileNameStr = m;
            else {
              var p = o.transformTo(h, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(p);
            }
            var b = this.findExtraFieldUnicodeComment();
            if (b !== null) this.fileCommentStr = b;
            else {
              var y = o.transformTo(h, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(y);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var h = this.extraFields[28789];
          if (h) {
            var m = a(h.value);
            return m.readInt(1) !== 1 || u(this.fileName) !== m.readInt(4) ? null : c.utf8decode(m.readData(h.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var h = this.extraFields[25461];
          if (h) {
            var m = a(h.value);
            return m.readInt(1) !== 1 || u(this.fileComment) !== m.readInt(4) ? null : c.utf8decode(m.readData(h.length - 5));
          }
          return null;
        } }, n.exports = d;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, n, i) {
        function a(m, p, b) {
          this.name = m, this.dir = b.dir, this.date = b.date, this.comment = b.comment, this.unixPermissions = b.unixPermissions, this.dosPermissions = b.dosPermissions, this._data = p, this._dataBinary = b.binary, this.options = { compression: b.compression, compressionOptions: b.compressionOptions };
        }
        var o = r("./stream/StreamHelper"), s = r("./stream/DataWorker"), u = r("./utf8"), c = r("./compressedObject"), l = r("./stream/GenericWorker");
        a.prototype = { internalStream: function(m) {
          var p = null, b = "string";
          try {
            if (!m) throw new Error("No output type specified.");
            var y = (b = m.toLowerCase()) === "string" || b === "text";
            b !== "binarystring" && b !== "text" || (b = "string"), p = this._decompressWorker();
            var _ = !this._dataBinary;
            _ && !y && (p = p.pipe(new u.Utf8EncodeWorker())), !_ && y && (p = p.pipe(new u.Utf8DecodeWorker()));
          } catch (E) {
            (p = new l("error")).error(E);
          }
          return new o(p, b, "");
        }, async: function(m, p) {
          return this.internalStream(m).accumulate(p);
        }, nodeStream: function(m, p) {
          return this.internalStream(m || "nodebuffer").toNodejsStream(p);
        }, _compressWorker: function(m, p) {
          if (this._data instanceof c && this._data.compression.magic === m.magic) return this._data.getCompressedWorker();
          var b = this._decompressWorker();
          return this._dataBinary || (b = b.pipe(new u.Utf8EncodeWorker())), c.createWorkerFrom(b, m, p);
        }, _decompressWorker: function() {
          return this._data instanceof c ? this._data.getContentWorker() : this._data instanceof l ? this._data : new s(this._data);
        } };
        for (var f = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], d = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, h = 0; h < f.length; h++) a.prototype[f[h]] = d;
        n.exports = a;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, n, i) {
        (function(a) {
          var o, s, u = a.MutationObserver || a.WebKitMutationObserver;
          if (u) {
            var c = 0, l = new u(m), f = a.document.createTextNode("");
            l.observe(f, { characterData: !0 }), o = function() {
              f.data = c = ++c % 2;
            };
          } else if (a.setImmediate || a.MessageChannel === void 0) o = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function() {
            var p = a.document.createElement("script");
            p.onreadystatechange = function() {
              m(), p.onreadystatechange = null, p.parentNode.removeChild(p), p = null;
            }, a.document.documentElement.appendChild(p);
          } : function() {
            setTimeout(m, 0);
          };
          else {
            var d = new a.MessageChannel();
            d.port1.onmessage = m, o = function() {
              d.port2.postMessage(0);
            };
          }
          var h = [];
          function m() {
            var p, b;
            s = !0;
            for (var y = h.length; y; ) {
              for (b = h, h = [], p = -1; ++p < y; ) b[p]();
              y = h.length;
            }
            s = !1;
          }
          n.exports = function(p) {
            h.push(p) !== 1 || s || o();
          };
        }).call(this, typeof Rr < "u" ? Rr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(r, n, i) {
        var a = r("immediate");
        function o() {
        }
        var s = {}, u = ["REJECTED"], c = ["FULFILLED"], l = ["PENDING"];
        function f(y) {
          if (typeof y != "function") throw new TypeError("resolver must be a function");
          this.state = l, this.queue = [], this.outcome = void 0, y !== o && p(this, y);
        }
        function d(y, _, E) {
          this.promise = y, typeof _ == "function" && (this.onFulfilled = _, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
        }
        function h(y, _, E) {
          a(function() {
            var O;
            try {
              O = _(E);
            } catch (C) {
              return s.reject(y, C);
            }
            O === y ? s.reject(y, new TypeError("Cannot resolve promise with itself")) : s.resolve(y, O);
          });
        }
        function m(y) {
          var _ = y && y.then;
          if (y && (typeof y == "object" || typeof y == "function") && typeof _ == "function") return function() {
            _.apply(y, arguments);
          };
        }
        function p(y, _) {
          var E = !1;
          function O(I) {
            E || (E = !0, s.reject(y, I));
          }
          function C(I) {
            E || (E = !0, s.resolve(y, I));
          }
          var B = b(function() {
            _(C, O);
          });
          B.status === "error" && O(B.value);
        }
        function b(y, _) {
          var E = {};
          try {
            E.value = y(_), E.status = "success";
          } catch (O) {
            E.status = "error", E.value = O;
          }
          return E;
        }
        (n.exports = f).prototype.finally = function(y) {
          if (typeof y != "function") return this;
          var _ = this.constructor;
          return this.then(function(E) {
            return _.resolve(y()).then(function() {
              return E;
            });
          }, function(E) {
            return _.resolve(y()).then(function() {
              throw E;
            });
          });
        }, f.prototype.catch = function(y) {
          return this.then(null, y);
        }, f.prototype.then = function(y, _) {
          if (typeof y != "function" && this.state === c || typeof _ != "function" && this.state === u) return this;
          var E = new this.constructor(o);
          return this.state !== l ? h(E, this.state === c ? y : _, this.outcome) : this.queue.push(new d(E, y, _)), E;
        }, d.prototype.callFulfilled = function(y) {
          s.resolve(this.promise, y);
        }, d.prototype.otherCallFulfilled = function(y) {
          h(this.promise, this.onFulfilled, y);
        }, d.prototype.callRejected = function(y) {
          s.reject(this.promise, y);
        }, d.prototype.otherCallRejected = function(y) {
          h(this.promise, this.onRejected, y);
        }, s.resolve = function(y, _) {
          var E = b(m, _);
          if (E.status === "error") return s.reject(y, E.value);
          var O = E.value;
          if (O) p(y, O);
          else {
            y.state = c, y.outcome = _;
            for (var C = -1, B = y.queue.length; ++C < B; ) y.queue[C].callFulfilled(_);
          }
          return y;
        }, s.reject = function(y, _) {
          y.state = u, y.outcome = _;
          for (var E = -1, O = y.queue.length; ++E < O; ) y.queue[E].callRejected(_);
          return y;
        }, f.resolve = function(y) {
          return y instanceof this ? y : s.resolve(new this(o), y);
        }, f.reject = function(y) {
          var _ = new this(o);
          return s.reject(_, y);
        }, f.all = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var E = y.length, O = !1;
          if (!E) return this.resolve([]);
          for (var C = new Array(E), B = 0, I = -1, S = new this(o); ++I < E; ) w(y[I], I);
          return S;
          function w(k, z) {
            _.resolve(k).then(function(x) {
              C[z] = x, ++B !== E || O || (O = !0, s.resolve(S, C));
            }, function(x) {
              O || (O = !0, s.reject(S, x));
            });
          }
        }, f.race = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var E = y.length, O = !1;
          if (!E) return this.resolve([]);
          for (var C = -1, B = new this(o); ++C < E; ) I = y[C], _.resolve(I).then(function(S) {
            O || (O = !0, s.resolve(B, S));
          }, function(S) {
            O || (O = !0, s.reject(B, S));
          });
          var I;
          return B;
        };
      }, { immediate: 36 }], 38: [function(r, n, i) {
        var a = {};
        (0, r("./lib/utils/common").assign)(a, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), n.exports = a;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, n, i) {
        var a = r("./zlib/deflate"), o = r("./utils/common"), s = r("./utils/strings"), u = r("./zlib/messages"), c = r("./zlib/zstream"), l = Object.prototype.toString, f = 0, d = -1, h = 0, m = 8;
        function p(y) {
          if (!(this instanceof p)) return new p(y);
          this.options = o.assign({ level: d, method: m, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, y || {});
          var _ = this.options;
          _.raw && 0 < _.windowBits ? _.windowBits = -_.windowBits : _.gzip && 0 < _.windowBits && _.windowBits < 16 && (_.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
          var E = a.deflateInit2(this.strm, _.level, _.method, _.windowBits, _.memLevel, _.strategy);
          if (E !== f) throw new Error(u[E]);
          if (_.header && a.deflateSetHeader(this.strm, _.header), _.dictionary) {
            var O;
            if (O = typeof _.dictionary == "string" ? s.string2buf(_.dictionary) : l.call(_.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(_.dictionary) : _.dictionary, (E = a.deflateSetDictionary(this.strm, O)) !== f) throw new Error(u[E]);
            this._dict_set = !0;
          }
        }
        function b(y, _) {
          var E = new p(_);
          if (E.push(y, !0), E.err) throw E.msg || u[E.err];
          return E.result;
        }
        p.prototype.push = function(y, _) {
          var E, O, C = this.strm, B = this.options.chunkSize;
          if (this.ended) return !1;
          O = _ === ~~_ ? _ : _ === !0 ? 4 : 0, typeof y == "string" ? C.input = s.string2buf(y) : l.call(y) === "[object ArrayBuffer]" ? C.input = new Uint8Array(y) : C.input = y, C.next_in = 0, C.avail_in = C.input.length;
          do {
            if (C.avail_out === 0 && (C.output = new o.Buf8(B), C.next_out = 0, C.avail_out = B), (E = a.deflate(C, O)) !== 1 && E !== f) return this.onEnd(E), !(this.ended = !0);
            C.avail_out !== 0 && (C.avail_in !== 0 || O !== 4 && O !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(C.output, C.next_out))) : this.onData(o.shrinkBuf(C.output, C.next_out)));
          } while ((0 < C.avail_in || C.avail_out === 0) && E !== 1);
          return O === 4 ? (E = a.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === f) : O !== 2 || (this.onEnd(f), !(C.avail_out = 0));
        }, p.prototype.onData = function(y) {
          this.chunks.push(y);
        }, p.prototype.onEnd = function(y) {
          y === f && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = y, this.msg = this.strm.msg;
        }, i.Deflate = p, i.deflate = b, i.deflateRaw = function(y, _) {
          return (_ = _ || {}).raw = !0, b(y, _);
        }, i.gzip = function(y, _) {
          return (_ = _ || {}).gzip = !0, b(y, _);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, n, i) {
        var a = r("./zlib/inflate"), o = r("./utils/common"), s = r("./utils/strings"), u = r("./zlib/constants"), c = r("./zlib/messages"), l = r("./zlib/zstream"), f = r("./zlib/gzheader"), d = Object.prototype.toString;
        function h(p) {
          if (!(this instanceof h)) return new h(p);
          this.options = o.assign({ chunkSize: 16384, windowBits: 0, to: "" }, p || {});
          var b = this.options;
          b.raw && 0 <= b.windowBits && b.windowBits < 16 && (b.windowBits = -b.windowBits, b.windowBits === 0 && (b.windowBits = -15)), !(0 <= b.windowBits && b.windowBits < 16) || p && p.windowBits || (b.windowBits += 32), 15 < b.windowBits && b.windowBits < 48 && (15 & b.windowBits) == 0 && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;
          var y = a.inflateInit2(this.strm, b.windowBits);
          if (y !== u.Z_OK) throw new Error(c[y]);
          this.header = new f(), a.inflateGetHeader(this.strm, this.header);
        }
        function m(p, b) {
          var y = new h(b);
          if (y.push(p, !0), y.err) throw y.msg || c[y.err];
          return y.result;
        }
        h.prototype.push = function(p, b) {
          var y, _, E, O, C, B, I = this.strm, S = this.options.chunkSize, w = this.options.dictionary, k = !1;
          if (this.ended) return !1;
          _ = b === ~~b ? b : b === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof p == "string" ? I.input = s.binstring2buf(p) : d.call(p) === "[object ArrayBuffer]" ? I.input = new Uint8Array(p) : I.input = p, I.next_in = 0, I.avail_in = I.input.length;
          do {
            if (I.avail_out === 0 && (I.output = new o.Buf8(S), I.next_out = 0, I.avail_out = S), (y = a.inflate(I, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && w && (B = typeof w == "string" ? s.string2buf(w) : d.call(w) === "[object ArrayBuffer]" ? new Uint8Array(w) : w, y = a.inflateSetDictionary(this.strm, B)), y === u.Z_BUF_ERROR && k === !0 && (y = u.Z_OK, k = !1), y !== u.Z_STREAM_END && y !== u.Z_OK) return this.onEnd(y), !(this.ended = !0);
            I.next_out && (I.avail_out !== 0 && y !== u.Z_STREAM_END && (I.avail_in !== 0 || _ !== u.Z_FINISH && _ !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = s.utf8border(I.output, I.next_out), O = I.next_out - E, C = s.buf2string(I.output, E), I.next_out = O, I.avail_out = S - O, O && o.arraySet(I.output, I.output, E, O, 0), this.onData(C)) : this.onData(o.shrinkBuf(I.output, I.next_out)))), I.avail_in === 0 && I.avail_out === 0 && (k = !0);
          } while ((0 < I.avail_in || I.avail_out === 0) && y !== u.Z_STREAM_END);
          return y === u.Z_STREAM_END && (_ = u.Z_FINISH), _ === u.Z_FINISH ? (y = a.inflateEnd(this.strm), this.onEnd(y), this.ended = !0, y === u.Z_OK) : _ !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK), !(I.avail_out = 0));
        }, h.prototype.onData = function(p) {
          this.chunks.push(p);
        }, h.prototype.onEnd = function(p) {
          p === u.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
        }, i.Inflate = h, i.inflate = m, i.inflateRaw = function(p, b) {
          return (b = b || {}).raw = !0, m(p, b);
        }, i.ungzip = m;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, n, i) {
        var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        i.assign = function(u) {
          for (var c = Array.prototype.slice.call(arguments, 1); c.length; ) {
            var l = c.shift();
            if (l) {
              if (typeof l != "object") throw new TypeError(l + "must be non-object");
              for (var f in l) l.hasOwnProperty(f) && (u[f] = l[f]);
            }
          }
          return u;
        }, i.shrinkBuf = function(u, c) {
          return u.length === c ? u : u.subarray ? u.subarray(0, c) : (u.length = c, u);
        };
        var o = { arraySet: function(u, c, l, f, d) {
          if (c.subarray && u.subarray) u.set(c.subarray(l, l + f), d);
          else for (var h = 0; h < f; h++) u[d + h] = c[l + h];
        }, flattenChunks: function(u) {
          var c, l, f, d, h, m;
          for (c = f = 0, l = u.length; c < l; c++) f += u[c].length;
          for (m = new Uint8Array(f), c = d = 0, l = u.length; c < l; c++) h = u[c], m.set(h, d), d += h.length;
          return m;
        } }, s = { arraySet: function(u, c, l, f, d) {
          for (var h = 0; h < f; h++) u[d + h] = c[l + h];
        }, flattenChunks: function(u) {
          return [].concat.apply([], u);
        } };
        i.setTyped = function(u) {
          u ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, o)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, s));
        }, i.setTyped(a);
      }, {}], 42: [function(r, n, i) {
        var a = r("./common"), o = !0, s = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch {
          o = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch {
          s = !1;
        }
        for (var u = new a.Buf8(256), c = 0; c < 256; c++) u[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
        function l(f, d) {
          if (d < 65537 && (f.subarray && s || !f.subarray && o)) return String.fromCharCode.apply(null, a.shrinkBuf(f, d));
          for (var h = "", m = 0; m < d; m++) h += String.fromCharCode(f[m]);
          return h;
        }
        u[254] = u[254] = 1, i.string2buf = function(f) {
          var d, h, m, p, b, y = f.length, _ = 0;
          for (p = 0; p < y; p++) (64512 & (h = f.charCodeAt(p))) == 55296 && p + 1 < y && (64512 & (m = f.charCodeAt(p + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (m - 56320), p++), _ += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
          for (d = new a.Buf8(_), p = b = 0; b < _; p++) (64512 & (h = f.charCodeAt(p))) == 55296 && p + 1 < y && (64512 & (m = f.charCodeAt(p + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (m - 56320), p++), h < 128 ? d[b++] = h : (h < 2048 ? d[b++] = 192 | h >>> 6 : (h < 65536 ? d[b++] = 224 | h >>> 12 : (d[b++] = 240 | h >>> 18, d[b++] = 128 | h >>> 12 & 63), d[b++] = 128 | h >>> 6 & 63), d[b++] = 128 | 63 & h);
          return d;
        }, i.buf2binstring = function(f) {
          return l(f, f.length);
        }, i.binstring2buf = function(f) {
          for (var d = new a.Buf8(f.length), h = 0, m = d.length; h < m; h++) d[h] = f.charCodeAt(h);
          return d;
        }, i.buf2string = function(f, d) {
          var h, m, p, b, y = d || f.length, _ = new Array(2 * y);
          for (h = m = 0; h < y; ) if ((p = f[h++]) < 128) _[m++] = p;
          else if (4 < (b = u[p])) _[m++] = 65533, h += b - 1;
          else {
            for (p &= b === 2 ? 31 : b === 3 ? 15 : 7; 1 < b && h < y; ) p = p << 6 | 63 & f[h++], b--;
            1 < b ? _[m++] = 65533 : p < 65536 ? _[m++] = p : (p -= 65536, _[m++] = 55296 | p >> 10 & 1023, _[m++] = 56320 | 1023 & p);
          }
          return l(_, m);
        }, i.utf8border = function(f, d) {
          var h;
          for ((d = d || f.length) > f.length && (d = f.length), h = d - 1; 0 <= h && (192 & f[h]) == 128; ) h--;
          return h < 0 || h === 0 ? d : h + u[f[h]] > d ? h : d;
        };
      }, { "./common": 41 }], 43: [function(r, n, i) {
        n.exports = function(a, o, s, u) {
          for (var c = 65535 & a | 0, l = a >>> 16 & 65535 | 0, f = 0; s !== 0; ) {
            for (s -= f = 2e3 < s ? 2e3 : s; l = l + (c = c + o[u++] | 0) | 0, --f; ) ;
            c %= 65521, l %= 65521;
          }
          return c | l << 16 | 0;
        };
      }, {}], 44: [function(r, n, i) {
        n.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(r, n, i) {
        var a = function() {
          for (var o, s = [], u = 0; u < 256; u++) {
            o = u;
            for (var c = 0; c < 8; c++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
            s[u] = o;
          }
          return s;
        }();
        n.exports = function(o, s, u, c) {
          var l = a, f = c + u;
          o ^= -1;
          for (var d = c; d < f; d++) o = o >>> 8 ^ l[255 & (o ^ s[d])];
          return -1 ^ o;
        };
      }, {}], 46: [function(r, n, i) {
        var a, o = r("../utils/common"), s = r("./trees"), u = r("./adler32"), c = r("./crc32"), l = r("./messages"), f = 0, d = 4, h = 0, m = -2, p = -1, b = 4, y = 2, _ = 8, E = 9, O = 286, C = 30, B = 19, I = 2 * O + 1, S = 15, w = 3, k = 258, z = k + w + 1, x = 42, F = 113, g = 1, q = 2, ie = 3, M = 4;
        function Z(v, X) {
          return v.msg = l[X], X;
        }
        function L(v) {
          return (v << 1) - (4 < v ? 9 : 0);
        }
        function re(v) {
          for (var X = v.length; 0 <= --X; ) v[X] = 0;
        }
        function N(v) {
          var X = v.state, W = X.pending;
          W > v.avail_out && (W = v.avail_out), W !== 0 && (o.arraySet(v.output, X.pending_buf, X.pending_out, W, v.next_out), v.next_out += W, X.pending_out += W, v.total_out += W, v.avail_out -= W, X.pending -= W, X.pending === 0 && (X.pending_out = 0));
        }
        function D(v, X) {
          s._tr_flush_block(v, 0 <= v.block_start ? v.block_start : -1, v.strstart - v.block_start, X), v.block_start = v.strstart, N(v.strm);
        }
        function K(v, X) {
          v.pending_buf[v.pending++] = X;
        }
        function ee(v, X) {
          v.pending_buf[v.pending++] = X >>> 8 & 255, v.pending_buf[v.pending++] = 255 & X;
        }
        function H(v, X) {
          var W, P, T = v.max_chain_length, j = v.strstart, te = v.prev_length, ne = v.nice_match, G = v.strstart > v.w_size - z ? v.strstart - (v.w_size - z) : 0, V = v.window, Q = v.w_mask, J = v.prev, ae = v.strstart + k, de = V[j + te - 1], _e = V[j + te];
          v.prev_length >= v.good_match && (T >>= 2), ne > v.lookahead && (ne = v.lookahead);
          do
            if (V[(W = X) + te] === _e && V[W + te - 1] === de && V[W] === V[j] && V[++W] === V[j + 1]) {
              j += 2, W++;
              do
                ;
              while (V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && j < ae);
              if (P = k - (ae - j), j = ae - k, te < P) {
                if (v.match_start = X, ne <= (te = P)) break;
                de = V[j + te - 1], _e = V[j + te];
              }
            }
          while ((X = J[X & Q]) > G && --T != 0);
          return te <= v.lookahead ? te : v.lookahead;
        }
        function pe(v) {
          var X, W, P, T, j, te, ne, G, V, Q, J = v.w_size;
          do {
            if (T = v.window_size - v.lookahead - v.strstart, v.strstart >= J + (J - z)) {
              for (o.arraySet(v.window, v.window, J, J, 0), v.match_start -= J, v.strstart -= J, v.block_start -= J, X = W = v.hash_size; P = v.head[--X], v.head[X] = J <= P ? P - J : 0, --W; ) ;
              for (X = W = J; P = v.prev[--X], v.prev[X] = J <= P ? P - J : 0, --W; ) ;
              T += J;
            }
            if (v.strm.avail_in === 0) break;
            if (te = v.strm, ne = v.window, G = v.strstart + v.lookahead, V = T, Q = void 0, Q = te.avail_in, V < Q && (Q = V), W = Q === 0 ? 0 : (te.avail_in -= Q, o.arraySet(ne, te.input, te.next_in, Q, G), te.state.wrap === 1 ? te.adler = u(te.adler, ne, Q, G) : te.state.wrap === 2 && (te.adler = c(te.adler, ne, Q, G)), te.next_in += Q, te.total_in += Q, Q), v.lookahead += W, v.lookahead + v.insert >= w) for (j = v.strstart - v.insert, v.ins_h = v.window[j], v.ins_h = (v.ins_h << v.hash_shift ^ v.window[j + 1]) & v.hash_mask; v.insert && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[j + w - 1]) & v.hash_mask, v.prev[j & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = j, j++, v.insert--, !(v.lookahead + v.insert < w)); ) ;
          } while (v.lookahead < z && v.strm.avail_in !== 0);
        }
        function xe(v, X) {
          for (var W, P; ; ) {
            if (v.lookahead < z) {
              if (pe(v), v.lookahead < z && X === f) return g;
              if (v.lookahead === 0) break;
            }
            if (W = 0, v.lookahead >= w && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + w - 1]) & v.hash_mask, W = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), W !== 0 && v.strstart - W <= v.w_size - z && (v.match_length = H(v, W)), v.match_length >= w) if (P = s._tr_tally(v, v.strstart - v.match_start, v.match_length - w), v.lookahead -= v.match_length, v.match_length <= v.max_lazy_match && v.lookahead >= w) {
              for (v.match_length--; v.strstart++, v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + w - 1]) & v.hash_mask, W = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart, --v.match_length != 0; ) ;
              v.strstart++;
            } else v.strstart += v.match_length, v.match_length = 0, v.ins_h = v.window[v.strstart], v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + 1]) & v.hash_mask;
            else P = s._tr_tally(v, 0, v.window[v.strstart]), v.lookahead--, v.strstart++;
            if (P && (D(v, !1), v.strm.avail_out === 0)) return g;
          }
          return v.insert = v.strstart < w - 1 ? v.strstart : w - 1, X === d ? (D(v, !0), v.strm.avail_out === 0 ? ie : M) : v.last_lit && (D(v, !1), v.strm.avail_out === 0) ? g : q;
        }
        function ce(v, X) {
          for (var W, P, T; ; ) {
            if (v.lookahead < z) {
              if (pe(v), v.lookahead < z && X === f) return g;
              if (v.lookahead === 0) break;
            }
            if (W = 0, v.lookahead >= w && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + w - 1]) & v.hash_mask, W = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), v.prev_length = v.match_length, v.prev_match = v.match_start, v.match_length = w - 1, W !== 0 && v.prev_length < v.max_lazy_match && v.strstart - W <= v.w_size - z && (v.match_length = H(v, W), v.match_length <= 5 && (v.strategy === 1 || v.match_length === w && 4096 < v.strstart - v.match_start) && (v.match_length = w - 1)), v.prev_length >= w && v.match_length <= v.prev_length) {
              for (T = v.strstart + v.lookahead - w, P = s._tr_tally(v, v.strstart - 1 - v.prev_match, v.prev_length - w), v.lookahead -= v.prev_length - 1, v.prev_length -= 2; ++v.strstart <= T && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + w - 1]) & v.hash_mask, W = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), --v.prev_length != 0; ) ;
              if (v.match_available = 0, v.match_length = w - 1, v.strstart++, P && (D(v, !1), v.strm.avail_out === 0)) return g;
            } else if (v.match_available) {
              if ((P = s._tr_tally(v, 0, v.window[v.strstart - 1])) && D(v, !1), v.strstart++, v.lookahead--, v.strm.avail_out === 0) return g;
            } else v.match_available = 1, v.strstart++, v.lookahead--;
          }
          return v.match_available && (P = s._tr_tally(v, 0, v.window[v.strstart - 1]), v.match_available = 0), v.insert = v.strstart < w - 1 ? v.strstart : w - 1, X === d ? (D(v, !0), v.strm.avail_out === 0 ? ie : M) : v.last_lit && (D(v, !1), v.strm.avail_out === 0) ? g : q;
        }
        function le(v, X, W, P, T) {
          this.good_length = v, this.max_lazy = X, this.nice_length = W, this.max_chain = P, this.func = T;
        }
        function ve() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * I), this.dyn_dtree = new o.Buf16(2 * (2 * C + 1)), this.bl_tree = new o.Buf16(2 * (2 * B + 1)), re(this.dyn_ltree), re(this.dyn_dtree), re(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(S + 1), this.heap = new o.Buf16(2 * O + 1), re(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * O + 1), re(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function fe(v) {
          var X;
          return v && v.state ? (v.total_in = v.total_out = 0, v.data_type = y, (X = v.state).pending = 0, X.pending_out = 0, X.wrap < 0 && (X.wrap = -X.wrap), X.status = X.wrap ? x : F, v.adler = X.wrap === 2 ? 0 : 1, X.last_flush = f, s._tr_init(X), h) : Z(v, m);
        }
        function we(v) {
          var X = fe(v);
          return X === h && function(W) {
            W.window_size = 2 * W.w_size, re(W.head), W.max_lazy_match = a[W.level].max_lazy, W.good_match = a[W.level].good_length, W.nice_match = a[W.level].nice_length, W.max_chain_length = a[W.level].max_chain, W.strstart = 0, W.block_start = 0, W.lookahead = 0, W.insert = 0, W.match_length = W.prev_length = w - 1, W.match_available = 0, W.ins_h = 0;
          }(v.state), X;
        }
        function Ee(v, X, W, P, T, j) {
          if (!v) return m;
          var te = 1;
          if (X === p && (X = 6), P < 0 ? (te = 0, P = -P) : 15 < P && (te = 2, P -= 16), T < 1 || E < T || W !== _ || P < 8 || 15 < P || X < 0 || 9 < X || j < 0 || b < j) return Z(v, m);
          P === 8 && (P = 9);
          var ne = new ve();
          return (v.state = ne).strm = v, ne.wrap = te, ne.gzhead = null, ne.w_bits = P, ne.w_size = 1 << ne.w_bits, ne.w_mask = ne.w_size - 1, ne.hash_bits = T + 7, ne.hash_size = 1 << ne.hash_bits, ne.hash_mask = ne.hash_size - 1, ne.hash_shift = ~~((ne.hash_bits + w - 1) / w), ne.window = new o.Buf8(2 * ne.w_size), ne.head = new o.Buf16(ne.hash_size), ne.prev = new o.Buf16(ne.w_size), ne.lit_bufsize = 1 << T + 6, ne.pending_buf_size = 4 * ne.lit_bufsize, ne.pending_buf = new o.Buf8(ne.pending_buf_size), ne.d_buf = 1 * ne.lit_bufsize, ne.l_buf = 3 * ne.lit_bufsize, ne.level = X, ne.strategy = j, ne.method = W, we(v);
        }
        a = [new le(0, 0, 0, 0, function(v, X) {
          var W = 65535;
          for (W > v.pending_buf_size - 5 && (W = v.pending_buf_size - 5); ; ) {
            if (v.lookahead <= 1) {
              if (pe(v), v.lookahead === 0 && X === f) return g;
              if (v.lookahead === 0) break;
            }
            v.strstart += v.lookahead, v.lookahead = 0;
            var P = v.block_start + W;
            if ((v.strstart === 0 || v.strstart >= P) && (v.lookahead = v.strstart - P, v.strstart = P, D(v, !1), v.strm.avail_out === 0) || v.strstart - v.block_start >= v.w_size - z && (D(v, !1), v.strm.avail_out === 0)) return g;
          }
          return v.insert = 0, X === d ? (D(v, !0), v.strm.avail_out === 0 ? ie : M) : (v.strstart > v.block_start && (D(v, !1), v.strm.avail_out), g);
        }), new le(4, 4, 8, 4, xe), new le(4, 5, 16, 8, xe), new le(4, 6, 32, 32, xe), new le(4, 4, 16, 16, ce), new le(8, 16, 32, 32, ce), new le(8, 16, 128, 128, ce), new le(8, 32, 128, 256, ce), new le(32, 128, 258, 1024, ce), new le(32, 258, 258, 4096, ce)], i.deflateInit = function(v, X) {
          return Ee(v, X, _, 15, 8, 0);
        }, i.deflateInit2 = Ee, i.deflateReset = we, i.deflateResetKeep = fe, i.deflateSetHeader = function(v, X) {
          return v && v.state ? v.state.wrap !== 2 ? m : (v.state.gzhead = X, h) : m;
        }, i.deflate = function(v, X) {
          var W, P, T, j;
          if (!v || !v.state || 5 < X || X < 0) return v ? Z(v, m) : m;
          if (P = v.state, !v.output || !v.input && v.avail_in !== 0 || P.status === 666 && X !== d) return Z(v, v.avail_out === 0 ? -5 : m);
          if (P.strm = v, W = P.last_flush, P.last_flush = X, P.status === x) if (P.wrap === 2) v.adler = 0, K(P, 31), K(P, 139), K(P, 8), P.gzhead ? (K(P, (P.gzhead.text ? 1 : 0) + (P.gzhead.hcrc ? 2 : 0) + (P.gzhead.extra ? 4 : 0) + (P.gzhead.name ? 8 : 0) + (P.gzhead.comment ? 16 : 0)), K(P, 255 & P.gzhead.time), K(P, P.gzhead.time >> 8 & 255), K(P, P.gzhead.time >> 16 & 255), K(P, P.gzhead.time >> 24 & 255), K(P, P.level === 9 ? 2 : 2 <= P.strategy || P.level < 2 ? 4 : 0), K(P, 255 & P.gzhead.os), P.gzhead.extra && P.gzhead.extra.length && (K(P, 255 & P.gzhead.extra.length), K(P, P.gzhead.extra.length >> 8 & 255)), P.gzhead.hcrc && (v.adler = c(v.adler, P.pending_buf, P.pending, 0)), P.gzindex = 0, P.status = 69) : (K(P, 0), K(P, 0), K(P, 0), K(P, 0), K(P, 0), K(P, P.level === 9 ? 2 : 2 <= P.strategy || P.level < 2 ? 4 : 0), K(P, 3), P.status = F);
          else {
            var te = _ + (P.w_bits - 8 << 4) << 8;
            te |= (2 <= P.strategy || P.level < 2 ? 0 : P.level < 6 ? 1 : P.level === 6 ? 2 : 3) << 6, P.strstart !== 0 && (te |= 32), te += 31 - te % 31, P.status = F, ee(P, te), P.strstart !== 0 && (ee(P, v.adler >>> 16), ee(P, 65535 & v.adler)), v.adler = 1;
          }
          if (P.status === 69) if (P.gzhead.extra) {
            for (T = P.pending; P.gzindex < (65535 & P.gzhead.extra.length) && (P.pending !== P.pending_buf_size || (P.gzhead.hcrc && P.pending > T && (v.adler = c(v.adler, P.pending_buf, P.pending - T, T)), N(v), T = P.pending, P.pending !== P.pending_buf_size)); ) K(P, 255 & P.gzhead.extra[P.gzindex]), P.gzindex++;
            P.gzhead.hcrc && P.pending > T && (v.adler = c(v.adler, P.pending_buf, P.pending - T, T)), P.gzindex === P.gzhead.extra.length && (P.gzindex = 0, P.status = 73);
          } else P.status = 73;
          if (P.status === 73) if (P.gzhead.name) {
            T = P.pending;
            do {
              if (P.pending === P.pending_buf_size && (P.gzhead.hcrc && P.pending > T && (v.adler = c(v.adler, P.pending_buf, P.pending - T, T)), N(v), T = P.pending, P.pending === P.pending_buf_size)) {
                j = 1;
                break;
              }
              j = P.gzindex < P.gzhead.name.length ? 255 & P.gzhead.name.charCodeAt(P.gzindex++) : 0, K(P, j);
            } while (j !== 0);
            P.gzhead.hcrc && P.pending > T && (v.adler = c(v.adler, P.pending_buf, P.pending - T, T)), j === 0 && (P.gzindex = 0, P.status = 91);
          } else P.status = 91;
          if (P.status === 91) if (P.gzhead.comment) {
            T = P.pending;
            do {
              if (P.pending === P.pending_buf_size && (P.gzhead.hcrc && P.pending > T && (v.adler = c(v.adler, P.pending_buf, P.pending - T, T)), N(v), T = P.pending, P.pending === P.pending_buf_size)) {
                j = 1;
                break;
              }
              j = P.gzindex < P.gzhead.comment.length ? 255 & P.gzhead.comment.charCodeAt(P.gzindex++) : 0, K(P, j);
            } while (j !== 0);
            P.gzhead.hcrc && P.pending > T && (v.adler = c(v.adler, P.pending_buf, P.pending - T, T)), j === 0 && (P.status = 103);
          } else P.status = 103;
          if (P.status === 103 && (P.gzhead.hcrc ? (P.pending + 2 > P.pending_buf_size && N(v), P.pending + 2 <= P.pending_buf_size && (K(P, 255 & v.adler), K(P, v.adler >> 8 & 255), v.adler = 0, P.status = F)) : P.status = F), P.pending !== 0) {
            if (N(v), v.avail_out === 0) return P.last_flush = -1, h;
          } else if (v.avail_in === 0 && L(X) <= L(W) && X !== d) return Z(v, -5);
          if (P.status === 666 && v.avail_in !== 0) return Z(v, -5);
          if (v.avail_in !== 0 || P.lookahead !== 0 || X !== f && P.status !== 666) {
            var ne = P.strategy === 2 ? function(G, V) {
              for (var Q; ; ) {
                if (G.lookahead === 0 && (pe(G), G.lookahead === 0)) {
                  if (V === f) return g;
                  break;
                }
                if (G.match_length = 0, Q = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++, Q && (D(G, !1), G.strm.avail_out === 0)) return g;
              }
              return G.insert = 0, V === d ? (D(G, !0), G.strm.avail_out === 0 ? ie : M) : G.last_lit && (D(G, !1), G.strm.avail_out === 0) ? g : q;
            }(P, X) : P.strategy === 3 ? function(G, V) {
              for (var Q, J, ae, de, _e = G.window; ; ) {
                if (G.lookahead <= k) {
                  if (pe(G), G.lookahead <= k && V === f) return g;
                  if (G.lookahead === 0) break;
                }
                if (G.match_length = 0, G.lookahead >= w && 0 < G.strstart && (J = _e[ae = G.strstart - 1]) === _e[++ae] && J === _e[++ae] && J === _e[++ae]) {
                  de = G.strstart + k;
                  do
                    ;
                  while (J === _e[++ae] && J === _e[++ae] && J === _e[++ae] && J === _e[++ae] && J === _e[++ae] && J === _e[++ae] && J === _e[++ae] && J === _e[++ae] && ae < de);
                  G.match_length = k - (de - ae), G.match_length > G.lookahead && (G.match_length = G.lookahead);
                }
                if (G.match_length >= w ? (Q = s._tr_tally(G, 1, G.match_length - w), G.lookahead -= G.match_length, G.strstart += G.match_length, G.match_length = 0) : (Q = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++), Q && (D(G, !1), G.strm.avail_out === 0)) return g;
              }
              return G.insert = 0, V === d ? (D(G, !0), G.strm.avail_out === 0 ? ie : M) : G.last_lit && (D(G, !1), G.strm.avail_out === 0) ? g : q;
            }(P, X) : a[P.level].func(P, X);
            if (ne !== ie && ne !== M || (P.status = 666), ne === g || ne === ie) return v.avail_out === 0 && (P.last_flush = -1), h;
            if (ne === q && (X === 1 ? s._tr_align(P) : X !== 5 && (s._tr_stored_block(P, 0, 0, !1), X === 3 && (re(P.head), P.lookahead === 0 && (P.strstart = 0, P.block_start = 0, P.insert = 0))), N(v), v.avail_out === 0)) return P.last_flush = -1, h;
          }
          return X !== d ? h : P.wrap <= 0 ? 1 : (P.wrap === 2 ? (K(P, 255 & v.adler), K(P, v.adler >> 8 & 255), K(P, v.adler >> 16 & 255), K(P, v.adler >> 24 & 255), K(P, 255 & v.total_in), K(P, v.total_in >> 8 & 255), K(P, v.total_in >> 16 & 255), K(P, v.total_in >> 24 & 255)) : (ee(P, v.adler >>> 16), ee(P, 65535 & v.adler)), N(v), 0 < P.wrap && (P.wrap = -P.wrap), P.pending !== 0 ? h : 1);
        }, i.deflateEnd = function(v) {
          var X;
          return v && v.state ? (X = v.state.status) !== x && X !== 69 && X !== 73 && X !== 91 && X !== 103 && X !== F && X !== 666 ? Z(v, m) : (v.state = null, X === F ? Z(v, -3) : h) : m;
        }, i.deflateSetDictionary = function(v, X) {
          var W, P, T, j, te, ne, G, V, Q = X.length;
          if (!v || !v.state || (j = (W = v.state).wrap) === 2 || j === 1 && W.status !== x || W.lookahead) return m;
          for (j === 1 && (v.adler = u(v.adler, X, Q, 0)), W.wrap = 0, Q >= W.w_size && (j === 0 && (re(W.head), W.strstart = 0, W.block_start = 0, W.insert = 0), V = new o.Buf8(W.w_size), o.arraySet(V, X, Q - W.w_size, W.w_size, 0), X = V, Q = W.w_size), te = v.avail_in, ne = v.next_in, G = v.input, v.avail_in = Q, v.next_in = 0, v.input = X, pe(W); W.lookahead >= w; ) {
            for (P = W.strstart, T = W.lookahead - (w - 1); W.ins_h = (W.ins_h << W.hash_shift ^ W.window[P + w - 1]) & W.hash_mask, W.prev[P & W.w_mask] = W.head[W.ins_h], W.head[W.ins_h] = P, P++, --T; ) ;
            W.strstart = P, W.lookahead = w - 1, pe(W);
          }
          return W.strstart += W.lookahead, W.block_start = W.strstart, W.insert = W.lookahead, W.lookahead = 0, W.match_length = W.prev_length = w - 1, W.match_available = 0, v.next_in = ne, v.input = G, v.avail_in = te, W.wrap = j, h;
        }, i.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, n, i) {
        n.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(r, n, i) {
        n.exports = function(a, o) {
          var s, u, c, l, f, d, h, m, p, b, y, _, E, O, C, B, I, S, w, k, z, x, F, g, q;
          s = a.state, u = a.next_in, g = a.input, c = u + (a.avail_in - 5), l = a.next_out, q = a.output, f = l - (o - a.avail_out), d = l + (a.avail_out - 257), h = s.dmax, m = s.wsize, p = s.whave, b = s.wnext, y = s.window, _ = s.hold, E = s.bits, O = s.lencode, C = s.distcode, B = (1 << s.lenbits) - 1, I = (1 << s.distbits) - 1;
          e: do {
            E < 15 && (_ += g[u++] << E, E += 8, _ += g[u++] << E, E += 8), S = O[_ & B];
            t: for (; ; ) {
              if (_ >>>= w = S >>> 24, E -= w, (w = S >>> 16 & 255) === 0) q[l++] = 65535 & S;
              else {
                if (!(16 & w)) {
                  if ((64 & w) == 0) {
                    S = O[(65535 & S) + (_ & (1 << w) - 1)];
                    continue t;
                  }
                  if (32 & w) {
                    s.mode = 12;
                    break e;
                  }
                  a.msg = "invalid literal/length code", s.mode = 30;
                  break e;
                }
                k = 65535 & S, (w &= 15) && (E < w && (_ += g[u++] << E, E += 8), k += _ & (1 << w) - 1, _ >>>= w, E -= w), E < 15 && (_ += g[u++] << E, E += 8, _ += g[u++] << E, E += 8), S = C[_ & I];
                r: for (; ; ) {
                  if (_ >>>= w = S >>> 24, E -= w, !(16 & (w = S >>> 16 & 255))) {
                    if ((64 & w) == 0) {
                      S = C[(65535 & S) + (_ & (1 << w) - 1)];
                      continue r;
                    }
                    a.msg = "invalid distance code", s.mode = 30;
                    break e;
                  }
                  if (z = 65535 & S, E < (w &= 15) && (_ += g[u++] << E, (E += 8) < w && (_ += g[u++] << E, E += 8)), h < (z += _ & (1 << w) - 1)) {
                    a.msg = "invalid distance too far back", s.mode = 30;
                    break e;
                  }
                  if (_ >>>= w, E -= w, (w = l - f) < z) {
                    if (p < (w = z - w) && s.sane) {
                      a.msg = "invalid distance too far back", s.mode = 30;
                      break e;
                    }
                    if (F = y, (x = 0) === b) {
                      if (x += m - w, w < k) {
                        for (k -= w; q[l++] = y[x++], --w; ) ;
                        x = l - z, F = q;
                      }
                    } else if (b < w) {
                      if (x += m + b - w, (w -= b) < k) {
                        for (k -= w; q[l++] = y[x++], --w; ) ;
                        if (x = 0, b < k) {
                          for (k -= w = b; q[l++] = y[x++], --w; ) ;
                          x = l - z, F = q;
                        }
                      }
                    } else if (x += b - w, w < k) {
                      for (k -= w; q[l++] = y[x++], --w; ) ;
                      x = l - z, F = q;
                    }
                    for (; 2 < k; ) q[l++] = F[x++], q[l++] = F[x++], q[l++] = F[x++], k -= 3;
                    k && (q[l++] = F[x++], 1 < k && (q[l++] = F[x++]));
                  } else {
                    for (x = l - z; q[l++] = q[x++], q[l++] = q[x++], q[l++] = q[x++], 2 < (k -= 3); ) ;
                    k && (q[l++] = q[x++], 1 < k && (q[l++] = q[x++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (u < c && l < d);
          u -= k = E >> 3, _ &= (1 << (E -= k << 3)) - 1, a.next_in = u, a.next_out = l, a.avail_in = u < c ? c - u + 5 : 5 - (u - c), a.avail_out = l < d ? d - l + 257 : 257 - (l - d), s.hold = _, s.bits = E;
        };
      }, {}], 49: [function(r, n, i) {
        var a = r("../utils/common"), o = r("./adler32"), s = r("./crc32"), u = r("./inffast"), c = r("./inftrees"), l = 1, f = 2, d = 0, h = -2, m = 1, p = 852, b = 592;
        function y(x) {
          return (x >>> 24 & 255) + (x >>> 8 & 65280) + ((65280 & x) << 8) + ((255 & x) << 24);
        }
        function _() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new a.Buf16(320), this.work = new a.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function E(x) {
          var F;
          return x && x.state ? (F = x.state, x.total_in = x.total_out = F.total = 0, x.msg = "", F.wrap && (x.adler = 1 & F.wrap), F.mode = m, F.last = 0, F.havedict = 0, F.dmax = 32768, F.head = null, F.hold = 0, F.bits = 0, F.lencode = F.lendyn = new a.Buf32(p), F.distcode = F.distdyn = new a.Buf32(b), F.sane = 1, F.back = -1, d) : h;
        }
        function O(x) {
          var F;
          return x && x.state ? ((F = x.state).wsize = 0, F.whave = 0, F.wnext = 0, E(x)) : h;
        }
        function C(x, F) {
          var g, q;
          return x && x.state ? (q = x.state, F < 0 ? (g = 0, F = -F) : (g = 1 + (F >> 4), F < 48 && (F &= 15)), F && (F < 8 || 15 < F) ? h : (q.window !== null && q.wbits !== F && (q.window = null), q.wrap = g, q.wbits = F, O(x))) : h;
        }
        function B(x, F) {
          var g, q;
          return x ? (q = new _(), (x.state = q).window = null, (g = C(x, F)) !== d && (x.state = null), g) : h;
        }
        var I, S, w = !0;
        function k(x) {
          if (w) {
            var F;
            for (I = new a.Buf32(512), S = new a.Buf32(32), F = 0; F < 144; ) x.lens[F++] = 8;
            for (; F < 256; ) x.lens[F++] = 9;
            for (; F < 280; ) x.lens[F++] = 7;
            for (; F < 288; ) x.lens[F++] = 8;
            for (c(l, x.lens, 0, 288, I, 0, x.work, { bits: 9 }), F = 0; F < 32; ) x.lens[F++] = 5;
            c(f, x.lens, 0, 32, S, 0, x.work, { bits: 5 }), w = !1;
          }
          x.lencode = I, x.lenbits = 9, x.distcode = S, x.distbits = 5;
        }
        function z(x, F, g, q) {
          var ie, M = x.state;
          return M.window === null && (M.wsize = 1 << M.wbits, M.wnext = 0, M.whave = 0, M.window = new a.Buf8(M.wsize)), q >= M.wsize ? (a.arraySet(M.window, F, g - M.wsize, M.wsize, 0), M.wnext = 0, M.whave = M.wsize) : (q < (ie = M.wsize - M.wnext) && (ie = q), a.arraySet(M.window, F, g - q, ie, M.wnext), (q -= ie) ? (a.arraySet(M.window, F, g - q, q, 0), M.wnext = q, M.whave = M.wsize) : (M.wnext += ie, M.wnext === M.wsize && (M.wnext = 0), M.whave < M.wsize && (M.whave += ie))), 0;
        }
        i.inflateReset = O, i.inflateReset2 = C, i.inflateResetKeep = E, i.inflateInit = function(x) {
          return B(x, 15);
        }, i.inflateInit2 = B, i.inflate = function(x, F) {
          var g, q, ie, M, Z, L, re, N, D, K, ee, H, pe, xe, ce, le, ve, fe, we, Ee, v, X, W, P, T = 0, j = new a.Buf8(4), te = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!x || !x.state || !x.output || !x.input && x.avail_in !== 0) return h;
          (g = x.state).mode === 12 && (g.mode = 13), Z = x.next_out, ie = x.output, re = x.avail_out, M = x.next_in, q = x.input, L = x.avail_in, N = g.hold, D = g.bits, K = L, ee = re, X = d;
          e: for (; ; ) switch (g.mode) {
            case m:
              if (g.wrap === 0) {
                g.mode = 13;
                break;
              }
              for (; D < 16; ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              if (2 & g.wrap && N === 35615) {
                j[g.check = 0] = 255 & N, j[1] = N >>> 8 & 255, g.check = s(g.check, j, 2, 0), D = N = 0, g.mode = 2;
                break;
              }
              if (g.flags = 0, g.head && (g.head.done = !1), !(1 & g.wrap) || (((255 & N) << 8) + (N >> 8)) % 31) {
                x.msg = "incorrect header check", g.mode = 30;
                break;
              }
              if ((15 & N) != 8) {
                x.msg = "unknown compression method", g.mode = 30;
                break;
              }
              if (D -= 4, v = 8 + (15 & (N >>>= 4)), g.wbits === 0) g.wbits = v;
              else if (v > g.wbits) {
                x.msg = "invalid window size", g.mode = 30;
                break;
              }
              g.dmax = 1 << v, x.adler = g.check = 1, g.mode = 512 & N ? 10 : 12, D = N = 0;
              break;
            case 2:
              for (; D < 16; ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              if (g.flags = N, (255 & g.flags) != 8) {
                x.msg = "unknown compression method", g.mode = 30;
                break;
              }
              if (57344 & g.flags) {
                x.msg = "unknown header flags set", g.mode = 30;
                break;
              }
              g.head && (g.head.text = N >> 8 & 1), 512 & g.flags && (j[0] = 255 & N, j[1] = N >>> 8 & 255, g.check = s(g.check, j, 2, 0)), D = N = 0, g.mode = 3;
            case 3:
              for (; D < 32; ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              g.head && (g.head.time = N), 512 & g.flags && (j[0] = 255 & N, j[1] = N >>> 8 & 255, j[2] = N >>> 16 & 255, j[3] = N >>> 24 & 255, g.check = s(g.check, j, 4, 0)), D = N = 0, g.mode = 4;
            case 4:
              for (; D < 16; ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              g.head && (g.head.xflags = 255 & N, g.head.os = N >> 8), 512 & g.flags && (j[0] = 255 & N, j[1] = N >>> 8 & 255, g.check = s(g.check, j, 2, 0)), D = N = 0, g.mode = 5;
            case 5:
              if (1024 & g.flags) {
                for (; D < 16; ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                g.length = N, g.head && (g.head.extra_len = N), 512 & g.flags && (j[0] = 255 & N, j[1] = N >>> 8 & 255, g.check = s(g.check, j, 2, 0)), D = N = 0;
              } else g.head && (g.head.extra = null);
              g.mode = 6;
            case 6:
              if (1024 & g.flags && (L < (H = g.length) && (H = L), H && (g.head && (v = g.head.extra_len - g.length, g.head.extra || (g.head.extra = new Array(g.head.extra_len)), a.arraySet(g.head.extra, q, M, H, v)), 512 & g.flags && (g.check = s(g.check, q, H, M)), L -= H, M += H, g.length -= H), g.length)) break e;
              g.length = 0, g.mode = 7;
            case 7:
              if (2048 & g.flags) {
                if (L === 0) break e;
                for (H = 0; v = q[M + H++], g.head && v && g.length < 65536 && (g.head.name += String.fromCharCode(v)), v && H < L; ) ;
                if (512 & g.flags && (g.check = s(g.check, q, H, M)), L -= H, M += H, v) break e;
              } else g.head && (g.head.name = null);
              g.length = 0, g.mode = 8;
            case 8:
              if (4096 & g.flags) {
                if (L === 0) break e;
                for (H = 0; v = q[M + H++], g.head && v && g.length < 65536 && (g.head.comment += String.fromCharCode(v)), v && H < L; ) ;
                if (512 & g.flags && (g.check = s(g.check, q, H, M)), L -= H, M += H, v) break e;
              } else g.head && (g.head.comment = null);
              g.mode = 9;
            case 9:
              if (512 & g.flags) {
                for (; D < 16; ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                if (N !== (65535 & g.check)) {
                  x.msg = "header crc mismatch", g.mode = 30;
                  break;
                }
                D = N = 0;
              }
              g.head && (g.head.hcrc = g.flags >> 9 & 1, g.head.done = !0), x.adler = g.check = 0, g.mode = 12;
              break;
            case 10:
              for (; D < 32; ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              x.adler = g.check = y(N), D = N = 0, g.mode = 11;
            case 11:
              if (g.havedict === 0) return x.next_out = Z, x.avail_out = re, x.next_in = M, x.avail_in = L, g.hold = N, g.bits = D, 2;
              x.adler = g.check = 1, g.mode = 12;
            case 12:
              if (F === 5 || F === 6) break e;
            case 13:
              if (g.last) {
                N >>>= 7 & D, D -= 7 & D, g.mode = 27;
                break;
              }
              for (; D < 3; ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              switch (g.last = 1 & N, D -= 1, 3 & (N >>>= 1)) {
                case 0:
                  g.mode = 14;
                  break;
                case 1:
                  if (k(g), g.mode = 20, F !== 6) break;
                  N >>>= 2, D -= 2;
                  break e;
                case 2:
                  g.mode = 17;
                  break;
                case 3:
                  x.msg = "invalid block type", g.mode = 30;
              }
              N >>>= 2, D -= 2;
              break;
            case 14:
              for (N >>>= 7 & D, D -= 7 & D; D < 32; ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              if ((65535 & N) != (N >>> 16 ^ 65535)) {
                x.msg = "invalid stored block lengths", g.mode = 30;
                break;
              }
              if (g.length = 65535 & N, D = N = 0, g.mode = 15, F === 6) break e;
            case 15:
              g.mode = 16;
            case 16:
              if (H = g.length) {
                if (L < H && (H = L), re < H && (H = re), H === 0) break e;
                a.arraySet(ie, q, M, H, Z), L -= H, M += H, re -= H, Z += H, g.length -= H;
                break;
              }
              g.mode = 12;
              break;
            case 17:
              for (; D < 14; ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              if (g.nlen = 257 + (31 & N), N >>>= 5, D -= 5, g.ndist = 1 + (31 & N), N >>>= 5, D -= 5, g.ncode = 4 + (15 & N), N >>>= 4, D -= 4, 286 < g.nlen || 30 < g.ndist) {
                x.msg = "too many length or distance symbols", g.mode = 30;
                break;
              }
              g.have = 0, g.mode = 18;
            case 18:
              for (; g.have < g.ncode; ) {
                for (; D < 3; ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                g.lens[te[g.have++]] = 7 & N, N >>>= 3, D -= 3;
              }
              for (; g.have < 19; ) g.lens[te[g.have++]] = 0;
              if (g.lencode = g.lendyn, g.lenbits = 7, W = { bits: g.lenbits }, X = c(0, g.lens, 0, 19, g.lencode, 0, g.work, W), g.lenbits = W.bits, X) {
                x.msg = "invalid code lengths set", g.mode = 30;
                break;
              }
              g.have = 0, g.mode = 19;
            case 19:
              for (; g.have < g.nlen + g.ndist; ) {
                for (; le = (T = g.lencode[N & (1 << g.lenbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= D); ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                if (ve < 16) N >>>= ce, D -= ce, g.lens[g.have++] = ve;
                else {
                  if (ve === 16) {
                    for (P = ce + 2; D < P; ) {
                      if (L === 0) break e;
                      L--, N += q[M++] << D, D += 8;
                    }
                    if (N >>>= ce, D -= ce, g.have === 0) {
                      x.msg = "invalid bit length repeat", g.mode = 30;
                      break;
                    }
                    v = g.lens[g.have - 1], H = 3 + (3 & N), N >>>= 2, D -= 2;
                  } else if (ve === 17) {
                    for (P = ce + 3; D < P; ) {
                      if (L === 0) break e;
                      L--, N += q[M++] << D, D += 8;
                    }
                    D -= ce, v = 0, H = 3 + (7 & (N >>>= ce)), N >>>= 3, D -= 3;
                  } else {
                    for (P = ce + 7; D < P; ) {
                      if (L === 0) break e;
                      L--, N += q[M++] << D, D += 8;
                    }
                    D -= ce, v = 0, H = 11 + (127 & (N >>>= ce)), N >>>= 7, D -= 7;
                  }
                  if (g.have + H > g.nlen + g.ndist) {
                    x.msg = "invalid bit length repeat", g.mode = 30;
                    break;
                  }
                  for (; H--; ) g.lens[g.have++] = v;
                }
              }
              if (g.mode === 30) break;
              if (g.lens[256] === 0) {
                x.msg = "invalid code -- missing end-of-block", g.mode = 30;
                break;
              }
              if (g.lenbits = 9, W = { bits: g.lenbits }, X = c(l, g.lens, 0, g.nlen, g.lencode, 0, g.work, W), g.lenbits = W.bits, X) {
                x.msg = "invalid literal/lengths set", g.mode = 30;
                break;
              }
              if (g.distbits = 6, g.distcode = g.distdyn, W = { bits: g.distbits }, X = c(f, g.lens, g.nlen, g.ndist, g.distcode, 0, g.work, W), g.distbits = W.bits, X) {
                x.msg = "invalid distances set", g.mode = 30;
                break;
              }
              if (g.mode = 20, F === 6) break e;
            case 20:
              g.mode = 21;
            case 21:
              if (6 <= L && 258 <= re) {
                x.next_out = Z, x.avail_out = re, x.next_in = M, x.avail_in = L, g.hold = N, g.bits = D, u(x, ee), Z = x.next_out, ie = x.output, re = x.avail_out, M = x.next_in, q = x.input, L = x.avail_in, N = g.hold, D = g.bits, g.mode === 12 && (g.back = -1);
                break;
              }
              for (g.back = 0; le = (T = g.lencode[N & (1 << g.lenbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= D); ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              if (le && (240 & le) == 0) {
                for (fe = ce, we = le, Ee = ve; le = (T = g.lencode[Ee + ((N & (1 << fe + we) - 1) >> fe)]) >>> 16 & 255, ve = 65535 & T, !(fe + (ce = T >>> 24) <= D); ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                N >>>= fe, D -= fe, g.back += fe;
              }
              if (N >>>= ce, D -= ce, g.back += ce, g.length = ve, le === 0) {
                g.mode = 26;
                break;
              }
              if (32 & le) {
                g.back = -1, g.mode = 12;
                break;
              }
              if (64 & le) {
                x.msg = "invalid literal/length code", g.mode = 30;
                break;
              }
              g.extra = 15 & le, g.mode = 22;
            case 22:
              if (g.extra) {
                for (P = g.extra; D < P; ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                g.length += N & (1 << g.extra) - 1, N >>>= g.extra, D -= g.extra, g.back += g.extra;
              }
              g.was = g.length, g.mode = 23;
            case 23:
              for (; le = (T = g.distcode[N & (1 << g.distbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= D); ) {
                if (L === 0) break e;
                L--, N += q[M++] << D, D += 8;
              }
              if ((240 & le) == 0) {
                for (fe = ce, we = le, Ee = ve; le = (T = g.distcode[Ee + ((N & (1 << fe + we) - 1) >> fe)]) >>> 16 & 255, ve = 65535 & T, !(fe + (ce = T >>> 24) <= D); ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                N >>>= fe, D -= fe, g.back += fe;
              }
              if (N >>>= ce, D -= ce, g.back += ce, 64 & le) {
                x.msg = "invalid distance code", g.mode = 30;
                break;
              }
              g.offset = ve, g.extra = 15 & le, g.mode = 24;
            case 24:
              if (g.extra) {
                for (P = g.extra; D < P; ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                g.offset += N & (1 << g.extra) - 1, N >>>= g.extra, D -= g.extra, g.back += g.extra;
              }
              if (g.offset > g.dmax) {
                x.msg = "invalid distance too far back", g.mode = 30;
                break;
              }
              g.mode = 25;
            case 25:
              if (re === 0) break e;
              if (H = ee - re, g.offset > H) {
                if ((H = g.offset - H) > g.whave && g.sane) {
                  x.msg = "invalid distance too far back", g.mode = 30;
                  break;
                }
                pe = H > g.wnext ? (H -= g.wnext, g.wsize - H) : g.wnext - H, H > g.length && (H = g.length), xe = g.window;
              } else xe = ie, pe = Z - g.offset, H = g.length;
              for (re < H && (H = re), re -= H, g.length -= H; ie[Z++] = xe[pe++], --H; ) ;
              g.length === 0 && (g.mode = 21);
              break;
            case 26:
              if (re === 0) break e;
              ie[Z++] = g.length, re--, g.mode = 21;
              break;
            case 27:
              if (g.wrap) {
                for (; D < 32; ) {
                  if (L === 0) break e;
                  L--, N |= q[M++] << D, D += 8;
                }
                if (ee -= re, x.total_out += ee, g.total += ee, ee && (x.adler = g.check = g.flags ? s(g.check, ie, ee, Z - ee) : o(g.check, ie, ee, Z - ee)), ee = re, (g.flags ? N : y(N)) !== g.check) {
                  x.msg = "incorrect data check", g.mode = 30;
                  break;
                }
                D = N = 0;
              }
              g.mode = 28;
            case 28:
              if (g.wrap && g.flags) {
                for (; D < 32; ) {
                  if (L === 0) break e;
                  L--, N += q[M++] << D, D += 8;
                }
                if (N !== (4294967295 & g.total)) {
                  x.msg = "incorrect length check", g.mode = 30;
                  break;
                }
                D = N = 0;
              }
              g.mode = 29;
            case 29:
              X = 1;
              break e;
            case 30:
              X = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return h;
          }
          return x.next_out = Z, x.avail_out = re, x.next_in = M, x.avail_in = L, g.hold = N, g.bits = D, (g.wsize || ee !== x.avail_out && g.mode < 30 && (g.mode < 27 || F !== 4)) && z(x, x.output, x.next_out, ee - x.avail_out) ? (g.mode = 31, -4) : (K -= x.avail_in, ee -= x.avail_out, x.total_in += K, x.total_out += ee, g.total += ee, g.wrap && ee && (x.adler = g.check = g.flags ? s(g.check, ie, ee, x.next_out - ee) : o(g.check, ie, ee, x.next_out - ee)), x.data_type = g.bits + (g.last ? 64 : 0) + (g.mode === 12 ? 128 : 0) + (g.mode === 20 || g.mode === 15 ? 256 : 0), (K == 0 && ee === 0 || F === 4) && X === d && (X = -5), X);
        }, i.inflateEnd = function(x) {
          if (!x || !x.state) return h;
          var F = x.state;
          return F.window && (F.window = null), x.state = null, d;
        }, i.inflateGetHeader = function(x, F) {
          var g;
          return x && x.state ? (2 & (g = x.state).wrap) == 0 ? h : ((g.head = F).done = !1, d) : h;
        }, i.inflateSetDictionary = function(x, F) {
          var g, q = F.length;
          return x && x.state ? (g = x.state).wrap !== 0 && g.mode !== 11 ? h : g.mode === 11 && o(1, F, q, 0) !== g.check ? -3 : z(x, F, q, q) ? (g.mode = 31, -4) : (g.havedict = 1, d) : h;
        }, i.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, n, i) {
        var a = r("../utils/common"), o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        n.exports = function(l, f, d, h, m, p, b, y) {
          var _, E, O, C, B, I, S, w, k, z = y.bits, x = 0, F = 0, g = 0, q = 0, ie = 0, M = 0, Z = 0, L = 0, re = 0, N = 0, D = null, K = 0, ee = new a.Buf16(16), H = new a.Buf16(16), pe = null, xe = 0;
          for (x = 0; x <= 15; x++) ee[x] = 0;
          for (F = 0; F < h; F++) ee[f[d + F]]++;
          for (ie = z, q = 15; 1 <= q && ee[q] === 0; q--) ;
          if (q < ie && (ie = q), q === 0) return m[p++] = 20971520, m[p++] = 20971520, y.bits = 1, 0;
          for (g = 1; g < q && ee[g] === 0; g++) ;
          for (ie < g && (ie = g), x = L = 1; x <= 15; x++) if (L <<= 1, (L -= ee[x]) < 0) return -1;
          if (0 < L && (l === 0 || q !== 1)) return -1;
          for (H[1] = 0, x = 1; x < 15; x++) H[x + 1] = H[x] + ee[x];
          for (F = 0; F < h; F++) f[d + F] !== 0 && (b[H[f[d + F]]++] = F);
          if (I = l === 0 ? (D = pe = b, 19) : l === 1 ? (D = o, K -= 257, pe = s, xe -= 257, 256) : (D = u, pe = c, -1), x = g, B = p, Z = F = N = 0, O = -1, C = (re = 1 << (M = ie)) - 1, l === 1 && 852 < re || l === 2 && 592 < re) return 1;
          for (; ; ) {
            for (S = x - Z, k = b[F] < I ? (w = 0, b[F]) : b[F] > I ? (w = pe[xe + b[F]], D[K + b[F]]) : (w = 96, 0), _ = 1 << x - Z, g = E = 1 << M; m[B + (N >> Z) + (E -= _)] = S << 24 | w << 16 | k | 0, E !== 0; ) ;
            for (_ = 1 << x - 1; N & _; ) _ >>= 1;
            if (_ !== 0 ? (N &= _ - 1, N += _) : N = 0, F++, --ee[x] == 0) {
              if (x === q) break;
              x = f[d + b[F]];
            }
            if (ie < x && (N & C) !== O) {
              for (Z === 0 && (Z = ie), B += g, L = 1 << (M = x - Z); M + Z < q && !((L -= ee[M + Z]) <= 0); ) M++, L <<= 1;
              if (re += 1 << M, l === 1 && 852 < re || l === 2 && 592 < re) return 1;
              m[O = N & C] = ie << 24 | M << 16 | B - p | 0;
            }
          }
          return N !== 0 && (m[B + N] = x - Z << 24 | 64 << 16 | 0), y.bits = ie, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(r, n, i) {
        n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(r, n, i) {
        var a = r("../utils/common"), o = 0, s = 1;
        function u(T) {
          for (var j = T.length; 0 <= --j; ) T[j] = 0;
        }
        var c = 0, l = 29, f = 256, d = f + 1 + l, h = 30, m = 19, p = 2 * d + 1, b = 15, y = 16, _ = 7, E = 256, O = 16, C = 17, B = 18, I = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (d + 2));
        u(z);
        var x = new Array(2 * h);
        u(x);
        var F = new Array(512);
        u(F);
        var g = new Array(256);
        u(g);
        var q = new Array(l);
        u(q);
        var ie, M, Z, L = new Array(h);
        function re(T, j, te, ne, G) {
          this.static_tree = T, this.extra_bits = j, this.extra_base = te, this.elems = ne, this.max_length = G, this.has_stree = T && T.length;
        }
        function N(T, j) {
          this.dyn_tree = T, this.max_code = 0, this.stat_desc = j;
        }
        function D(T) {
          return T < 256 ? F[T] : F[256 + (T >>> 7)];
        }
        function K(T, j) {
          T.pending_buf[T.pending++] = 255 & j, T.pending_buf[T.pending++] = j >>> 8 & 255;
        }
        function ee(T, j, te) {
          T.bi_valid > y - te ? (T.bi_buf |= j << T.bi_valid & 65535, K(T, T.bi_buf), T.bi_buf = j >> y - T.bi_valid, T.bi_valid += te - y) : (T.bi_buf |= j << T.bi_valid & 65535, T.bi_valid += te);
        }
        function H(T, j, te) {
          ee(T, te[2 * j], te[2 * j + 1]);
        }
        function pe(T, j) {
          for (var te = 0; te |= 1 & T, T >>>= 1, te <<= 1, 0 < --j; ) ;
          return te >>> 1;
        }
        function xe(T, j, te) {
          var ne, G, V = new Array(b + 1), Q = 0;
          for (ne = 1; ne <= b; ne++) V[ne] = Q = Q + te[ne - 1] << 1;
          for (G = 0; G <= j; G++) {
            var J = T[2 * G + 1];
            J !== 0 && (T[2 * G] = pe(V[J]++, J));
          }
        }
        function ce(T) {
          var j;
          for (j = 0; j < d; j++) T.dyn_ltree[2 * j] = 0;
          for (j = 0; j < h; j++) T.dyn_dtree[2 * j] = 0;
          for (j = 0; j < m; j++) T.bl_tree[2 * j] = 0;
          T.dyn_ltree[2 * E] = 1, T.opt_len = T.static_len = 0, T.last_lit = T.matches = 0;
        }
        function le(T) {
          8 < T.bi_valid ? K(T, T.bi_buf) : 0 < T.bi_valid && (T.pending_buf[T.pending++] = T.bi_buf), T.bi_buf = 0, T.bi_valid = 0;
        }
        function ve(T, j, te, ne) {
          var G = 2 * j, V = 2 * te;
          return T[G] < T[V] || T[G] === T[V] && ne[j] <= ne[te];
        }
        function fe(T, j, te) {
          for (var ne = T.heap[te], G = te << 1; G <= T.heap_len && (G < T.heap_len && ve(j, T.heap[G + 1], T.heap[G], T.depth) && G++, !ve(j, ne, T.heap[G], T.depth)); ) T.heap[te] = T.heap[G], te = G, G <<= 1;
          T.heap[te] = ne;
        }
        function we(T, j, te) {
          var ne, G, V, Q, J = 0;
          if (T.last_lit !== 0) for (; ne = T.pending_buf[T.d_buf + 2 * J] << 8 | T.pending_buf[T.d_buf + 2 * J + 1], G = T.pending_buf[T.l_buf + J], J++, ne === 0 ? H(T, G, j) : (H(T, (V = g[G]) + f + 1, j), (Q = I[V]) !== 0 && ee(T, G -= q[V], Q), H(T, V = D(--ne), te), (Q = S[V]) !== 0 && ee(T, ne -= L[V], Q)), J < T.last_lit; ) ;
          H(T, E, j);
        }
        function Ee(T, j) {
          var te, ne, G, V = j.dyn_tree, Q = j.stat_desc.static_tree, J = j.stat_desc.has_stree, ae = j.stat_desc.elems, de = -1;
          for (T.heap_len = 0, T.heap_max = p, te = 0; te < ae; te++) V[2 * te] !== 0 ? (T.heap[++T.heap_len] = de = te, T.depth[te] = 0) : V[2 * te + 1] = 0;
          for (; T.heap_len < 2; ) V[2 * (G = T.heap[++T.heap_len] = de < 2 ? ++de : 0)] = 1, T.depth[G] = 0, T.opt_len--, J && (T.static_len -= Q[2 * G + 1]);
          for (j.max_code = de, te = T.heap_len >> 1; 1 <= te; te--) fe(T, V, te);
          for (G = ae; te = T.heap[1], T.heap[1] = T.heap[T.heap_len--], fe(T, V, 1), ne = T.heap[1], T.heap[--T.heap_max] = te, T.heap[--T.heap_max] = ne, V[2 * G] = V[2 * te] + V[2 * ne], T.depth[G] = (T.depth[te] >= T.depth[ne] ? T.depth[te] : T.depth[ne]) + 1, V[2 * te + 1] = V[2 * ne + 1] = G, T.heap[1] = G++, fe(T, V, 1), 2 <= T.heap_len; ) ;
          T.heap[--T.heap_max] = T.heap[1], function(_e, Fe) {
            var Ve, Pe, Le, Ce, He, Ft, pt = Fe.dyn_tree, Vr = Fe.max_code, Aa = Fe.stat_desc.static_tree, Hr = Fe.stat_desc.has_stree, Kr = Fe.stat_desc.extra_bits, ui = Fe.stat_desc.extra_base, Et = Fe.stat_desc.max_length, Yr = 0;
            for (Ce = 0; Ce <= b; Ce++) _e.bl_count[Ce] = 0;
            for (pt[2 * _e.heap[_e.heap_max] + 1] = 0, Ve = _e.heap_max + 1; Ve < p; Ve++) Et < (Ce = pt[2 * pt[2 * (Pe = _e.heap[Ve]) + 1] + 1] + 1) && (Ce = Et, Yr++), pt[2 * Pe + 1] = Ce, Vr < Pe || (_e.bl_count[Ce]++, He = 0, ui <= Pe && (He = Kr[Pe - ui]), Ft = pt[2 * Pe], _e.opt_len += Ft * (Ce + He), Hr && (_e.static_len += Ft * (Aa[2 * Pe + 1] + He)));
            if (Yr !== 0) {
              do {
                for (Ce = Et - 1; _e.bl_count[Ce] === 0; ) Ce--;
                _e.bl_count[Ce]--, _e.bl_count[Ce + 1] += 2, _e.bl_count[Et]--, Yr -= 2;
              } while (0 < Yr);
              for (Ce = Et; Ce !== 0; Ce--) for (Pe = _e.bl_count[Ce]; Pe !== 0; ) Vr < (Le = _e.heap[--Ve]) || (pt[2 * Le + 1] !== Ce && (_e.opt_len += (Ce - pt[2 * Le + 1]) * pt[2 * Le], pt[2 * Le + 1] = Ce), Pe--);
            }
          }(T, j), xe(V, de, T.bl_count);
        }
        function v(T, j, te) {
          var ne, G, V = -1, Q = j[1], J = 0, ae = 7, de = 4;
          for (Q === 0 && (ae = 138, de = 3), j[2 * (te + 1) + 1] = 65535, ne = 0; ne <= te; ne++) G = Q, Q = j[2 * (ne + 1) + 1], ++J < ae && G === Q || (J < de ? T.bl_tree[2 * G] += J : G !== 0 ? (G !== V && T.bl_tree[2 * G]++, T.bl_tree[2 * O]++) : J <= 10 ? T.bl_tree[2 * C]++ : T.bl_tree[2 * B]++, V = G, de = (J = 0) === Q ? (ae = 138, 3) : G === Q ? (ae = 6, 3) : (ae = 7, 4));
        }
        function X(T, j, te) {
          var ne, G, V = -1, Q = j[1], J = 0, ae = 7, de = 4;
          for (Q === 0 && (ae = 138, de = 3), ne = 0; ne <= te; ne++) if (G = Q, Q = j[2 * (ne + 1) + 1], !(++J < ae && G === Q)) {
            if (J < de) for (; H(T, G, T.bl_tree), --J != 0; ) ;
            else G !== 0 ? (G !== V && (H(T, G, T.bl_tree), J--), H(T, O, T.bl_tree), ee(T, J - 3, 2)) : J <= 10 ? (H(T, C, T.bl_tree), ee(T, J - 3, 3)) : (H(T, B, T.bl_tree), ee(T, J - 11, 7));
            V = G, de = (J = 0) === Q ? (ae = 138, 3) : G === Q ? (ae = 6, 3) : (ae = 7, 4);
          }
        }
        u(L);
        var W = !1;
        function P(T, j, te, ne) {
          ee(T, (c << 1) + (ne ? 1 : 0), 3), function(G, V, Q, J) {
            le(G), K(G, Q), K(G, ~Q), a.arraySet(G.pending_buf, G.window, V, Q, G.pending), G.pending += Q;
          }(T, j, te);
        }
        i._tr_init = function(T) {
          W || (function() {
            var j, te, ne, G, V, Q = new Array(b + 1);
            for (G = ne = 0; G < l - 1; G++) for (q[G] = ne, j = 0; j < 1 << I[G]; j++) g[ne++] = G;
            for (g[ne - 1] = G, G = V = 0; G < 16; G++) for (L[G] = V, j = 0; j < 1 << S[G]; j++) F[V++] = G;
            for (V >>= 7; G < h; G++) for (L[G] = V << 7, j = 0; j < 1 << S[G] - 7; j++) F[256 + V++] = G;
            for (te = 0; te <= b; te++) Q[te] = 0;
            for (j = 0; j <= 143; ) z[2 * j + 1] = 8, j++, Q[8]++;
            for (; j <= 255; ) z[2 * j + 1] = 9, j++, Q[9]++;
            for (; j <= 279; ) z[2 * j + 1] = 7, j++, Q[7]++;
            for (; j <= 287; ) z[2 * j + 1] = 8, j++, Q[8]++;
            for (xe(z, d + 1, Q), j = 0; j < h; j++) x[2 * j + 1] = 5, x[2 * j] = pe(j, 5);
            ie = new re(z, I, f + 1, d, b), M = new re(x, S, 0, h, b), Z = new re(new Array(0), w, 0, m, _);
          }(), W = !0), T.l_desc = new N(T.dyn_ltree, ie), T.d_desc = new N(T.dyn_dtree, M), T.bl_desc = new N(T.bl_tree, Z), T.bi_buf = 0, T.bi_valid = 0, ce(T);
        }, i._tr_stored_block = P, i._tr_flush_block = function(T, j, te, ne) {
          var G, V, Q = 0;
          0 < T.level ? (T.strm.data_type === 2 && (T.strm.data_type = function(J) {
            var ae, de = 4093624447;
            for (ae = 0; ae <= 31; ae++, de >>>= 1) if (1 & de && J.dyn_ltree[2 * ae] !== 0) return o;
            if (J.dyn_ltree[18] !== 0 || J.dyn_ltree[20] !== 0 || J.dyn_ltree[26] !== 0) return s;
            for (ae = 32; ae < f; ae++) if (J.dyn_ltree[2 * ae] !== 0) return s;
            return o;
          }(T)), Ee(T, T.l_desc), Ee(T, T.d_desc), Q = function(J) {
            var ae;
            for (v(J, J.dyn_ltree, J.l_desc.max_code), v(J, J.dyn_dtree, J.d_desc.max_code), Ee(J, J.bl_desc), ae = m - 1; 3 <= ae && J.bl_tree[2 * k[ae] + 1] === 0; ae--) ;
            return J.opt_len += 3 * (ae + 1) + 5 + 5 + 4, ae;
          }(T), G = T.opt_len + 3 + 7 >>> 3, (V = T.static_len + 3 + 7 >>> 3) <= G && (G = V)) : G = V = te + 5, te + 4 <= G && j !== -1 ? P(T, j, te, ne) : T.strategy === 4 || V === G ? (ee(T, 2 + (ne ? 1 : 0), 3), we(T, z, x)) : (ee(T, 4 + (ne ? 1 : 0), 3), function(J, ae, de, _e) {
            var Fe;
            for (ee(J, ae - 257, 5), ee(J, de - 1, 5), ee(J, _e - 4, 4), Fe = 0; Fe < _e; Fe++) ee(J, J.bl_tree[2 * k[Fe] + 1], 3);
            X(J, J.dyn_ltree, ae - 1), X(J, J.dyn_dtree, de - 1);
          }(T, T.l_desc.max_code + 1, T.d_desc.max_code + 1, Q + 1), we(T, T.dyn_ltree, T.dyn_dtree)), ce(T), ne && le(T);
        }, i._tr_tally = function(T, j, te) {
          return T.pending_buf[T.d_buf + 2 * T.last_lit] = j >>> 8 & 255, T.pending_buf[T.d_buf + 2 * T.last_lit + 1] = 255 & j, T.pending_buf[T.l_buf + T.last_lit] = 255 & te, T.last_lit++, j === 0 ? T.dyn_ltree[2 * te]++ : (T.matches++, j--, T.dyn_ltree[2 * (g[te] + f + 1)]++, T.dyn_dtree[2 * D(j)]++), T.last_lit === T.lit_bufsize - 1;
        }, i._tr_align = function(T) {
          ee(T, 2, 3), H(T, E, z), function(j) {
            j.bi_valid === 16 ? (K(j, j.bi_buf), j.bi_buf = 0, j.bi_valid = 0) : 8 <= j.bi_valid && (j.pending_buf[j.pending++] = 255 & j.bi_buf, j.bi_buf >>= 8, j.bi_valid -= 8);
          }(T);
        };
      }, { "../utils/common": 41 }], 53: [function(r, n, i) {
        n.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(r, n, i) {
        (function(a) {
          (function(o, s) {
            if (!o.setImmediate) {
              var u, c, l, f, d = 1, h = {}, m = !1, p = o.document, b = Object.getPrototypeOf && Object.getPrototypeOf(o);
              b = b && b.setTimeout ? b : o, u = {}.toString.call(o.process) === "[object process]" ? function(O) {
                process.nextTick(function() {
                  _(O);
                });
              } : function() {
                if (o.postMessage && !o.importScripts) {
                  var O = !0, C = o.onmessage;
                  return o.onmessage = function() {
                    O = !1;
                  }, o.postMessage("", "*"), o.onmessage = C, O;
                }
              }() ? (f = "setImmediate$" + Math.random() + "$", o.addEventListener ? o.addEventListener("message", E, !1) : o.attachEvent("onmessage", E), function(O) {
                o.postMessage(f + O, "*");
              }) : o.MessageChannel ? ((l = new MessageChannel()).port1.onmessage = function(O) {
                _(O.data);
              }, function(O) {
                l.port2.postMessage(O);
              }) : p && "onreadystatechange" in p.createElement("script") ? (c = p.documentElement, function(O) {
                var C = p.createElement("script");
                C.onreadystatechange = function() {
                  _(O), C.onreadystatechange = null, c.removeChild(C), C = null;
                }, c.appendChild(C);
              }) : function(O) {
                setTimeout(_, 0, O);
              }, b.setImmediate = function(O) {
                typeof O != "function" && (O = new Function("" + O));
                for (var C = new Array(arguments.length - 1), B = 0; B < C.length; B++) C[B] = arguments[B + 1];
                var I = { callback: O, args: C };
                return h[d] = I, u(d), d++;
              }, b.clearImmediate = y;
            }
            function y(O) {
              delete h[O];
            }
            function _(O) {
              if (m) setTimeout(_, 0, O);
              else {
                var C = h[O];
                if (C) {
                  m = !0;
                  try {
                    (function(B) {
                      var I = B.callback, S = B.args;
                      switch (S.length) {
                        case 0:
                          I();
                          break;
                        case 1:
                          I(S[0]);
                          break;
                        case 2:
                          I(S[0], S[1]);
                          break;
                        case 3:
                          I(S[0], S[1], S[2]);
                          break;
                        default:
                          I.apply(s, S);
                      }
                    })(C);
                  } finally {
                    y(O), m = !1;
                  }
                }
              }
            }
            function E(O) {
              O.source === o && typeof O.data == "string" && O.data.indexOf(f) === 0 && _(+O.data.slice(f.length));
            }
          })(typeof self > "u" ? a === void 0 ? this : a : self);
        }).call(this, typeof Rr < "u" ? Rr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }(as)), as.exports;
}
var PS = kS();
const gC = /* @__PURE__ */ hn(PS);
var cd = {}, fd = {}, Cn, ld;
function ze() {
  if (ld) return Cn;
  ld = 1;
  var e = function(t) {
    return t && t.Math === Math && t;
  };
  return Cn = // eslint-disable-next-line es/no-global-this -- safe
  e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  e(typeof self == "object" && self) || e(typeof Rr == "object" && Rr) || e(typeof Cn == "object" && Cn) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), Cn;
}
var ss = {}, os, hd;
function qe() {
  return hd || (hd = 1, os = function(e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  }), os;
}
var us, dd;
function Nt() {
  if (dd) return us;
  dd = 1;
  var e = qe();
  return us = !e(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), us;
}
var cs, pd;
function la() {
  if (pd) return cs;
  pd = 1;
  var e = qe();
  return cs = !e(function() {
    var t = (function() {
    }).bind();
    return typeof t != "function" || t.hasOwnProperty("prototype");
  }), cs;
}
var fs, md;
function et() {
  if (md) return fs;
  md = 1;
  var e = la(), t = Function.prototype.call;
  return fs = e ? t.bind(t) : function() {
    return t.apply(t, arguments);
  }, fs;
}
var ls = {}, gd;
function NS() {
  if (gd) return ls;
  gd = 1;
  var e = {}.propertyIsEnumerable, t = Object.getOwnPropertyDescriptor, r = t && !e.call({ 1: 2 }, 1);
  return ls.f = r ? function(i) {
    var a = t(this, i);
    return !!a && a.enumerable;
  } : e, ls;
}
var hs, vd;
function Yf() {
  return vd || (vd = 1, hs = function(e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t
    };
  }), hs;
}
var ds, yd;
function Ue() {
  if (yd) return ds;
  yd = 1;
  var e = la(), t = Function.prototype, r = t.call, n = e && t.bind.bind(r, r);
  return ds = e ? n : function(i) {
    return function() {
      return r.apply(i, arguments);
    };
  }, ds;
}
var ps, bd;
function $r() {
  if (bd) return ps;
  bd = 1;
  var e = Ue(), t = e({}.toString), r = e("".slice);
  return ps = function(n) {
    return r(t(n), 8, -1);
  }, ps;
}
var ms, _d;
function Qy() {
  if (_d) return ms;
  _d = 1;
  var e = Ue(), t = qe(), r = $r(), n = Object, i = e("".split);
  return ms = t(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(a) {
    return r(a) === "String" ? i(a, "") : n(a);
  } : n, ms;
}
var gs, wd;
function ha() {
  return wd || (wd = 1, gs = function(e) {
    return e == null;
  }), gs;
}
var vs, Ed;
function Mt() {
  if (Ed) return vs;
  Ed = 1;
  var e = ha(), t = TypeError;
  return vs = function(r) {
    if (e(r)) throw new t("Can't call method on " + r);
    return r;
  }, vs;
}
var ys, xd;
function Jn() {
  if (xd) return ys;
  xd = 1;
  var e = Qy(), t = Mt();
  return ys = function(r) {
    return e(t(r));
  }, ys;
}
var bs, Sd;
function $e() {
  if (Sd) return bs;
  Sd = 1;
  var e = typeof document == "object" && document.all;
  return bs = typeof e > "u" && e !== void 0 ? function(t) {
    return typeof t == "function" || t === e;
  } : function(t) {
    return typeof t == "function";
  }, bs;
}
var _s, Od;
function dt() {
  if (Od) return _s;
  Od = 1;
  var e = $e();
  return _s = function(t) {
    return typeof t == "object" ? t !== null : e(t);
  }, _s;
}
var ws, Td;
function Wr() {
  if (Td) return ws;
  Td = 1;
  var e = ze(), t = $e(), r = function(n) {
    return t(n) ? n : void 0;
  };
  return ws = function(n, i) {
    return arguments.length < 2 ? r(e[n]) : e[n] && e[n][i];
  }, ws;
}
var Es, Cd;
function da() {
  if (Cd) return Es;
  Cd = 1;
  var e = Ue();
  return Es = e({}.isPrototypeOf), Es;
}
var xs, Ad;
function Qn() {
  if (Ad) return xs;
  Ad = 1;
  var e = ze(), t = e.navigator, r = t && t.userAgent;
  return xs = r ? String(r) : "", xs;
}
var Ss, Rd;
function Xf() {
  if (Rd) return Ss;
  Rd = 1;
  var e = ze(), t = Qn(), r = e.process, n = e.Deno, i = r && r.versions || n && n.version, a = i && i.v8, o, s;
  return a && (o = a.split("."), s = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !s && t && (o = t.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = t.match(/Chrome\/(\d+)/), o && (s = +o[1]))), Ss = s, Ss;
}
var Os, Id;
function e0() {
  if (Id) return Os;
  Id = 1;
  var e = Xf(), t = qe(), r = ze(), n = r.String;
  return Os = !!Object.getOwnPropertySymbols && !t(function() {
    var i = Symbol("symbol detection");
    return !n(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && e && e < 41;
  }), Os;
}
var Ts, kd;
function t0() {
  if (kd) return Ts;
  kd = 1;
  var e = e0();
  return Ts = e && !Symbol.sham && typeof Symbol.iterator == "symbol", Ts;
}
var Cs, Pd;
function r0() {
  if (Pd) return Cs;
  Pd = 1;
  var e = Wr(), t = $e(), r = da(), n = t0(), i = Object;
  return Cs = n ? function(a) {
    return typeof a == "symbol";
  } : function(a) {
    var o = e("Symbol");
    return t(o) && r(o.prototype, i(a));
  }, Cs;
}
var As, Nd;
function pa() {
  if (Nd) return As;
  Nd = 1;
  var e = String;
  return As = function(t) {
    try {
      return e(t);
    } catch {
      return "Object";
    }
  }, As;
}
var Rs, Md;
function ur() {
  if (Md) return Rs;
  Md = 1;
  var e = $e(), t = pa(), r = TypeError;
  return Rs = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a function");
  }, Rs;
}
var Is, Dd;
function pn() {
  if (Dd) return Is;
  Dd = 1;
  var e = ur(), t = ha();
  return Is = function(r, n) {
    var i = r[n];
    return t(i) ? void 0 : e(i);
  }, Is;
}
var ks, Fd;
function MS() {
  if (Fd) return ks;
  Fd = 1;
  var e = et(), t = $e(), r = dt(), n = TypeError;
  return ks = function(i, a) {
    var o, s;
    if (a === "string" && t(o = i.toString) && !r(s = e(o, i)) || t(o = i.valueOf) && !r(s = e(o, i)) || a !== "string" && t(o = i.toString) && !r(s = e(o, i))) return s;
    throw new n("Can't convert object to primitive value");
  }, ks;
}
var Ps = { exports: {} }, Ns, Ld;
function Vt() {
  return Ld || (Ld = 1, Ns = !1), Ns;
}
var Ms, Bd;
function Zf() {
  if (Bd) return Ms;
  Bd = 1;
  var e = ze(), t = Object.defineProperty;
  return Ms = function(r, n) {
    try {
      t(e, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      e[r] = n;
    }
    return n;
  }, Ms;
}
var jd;
function Jf() {
  if (jd) return Ps.exports;
  jd = 1;
  var e = Vt(), t = ze(), r = Zf(), n = "__core-js_shared__", i = Ps.exports = t[n] || r(n, {});
  return (i.versions || (i.versions = [])).push({
    version: "3.42.0",
    mode: e ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Ps.exports;
}
var Ds, zd;
function Qf() {
  if (zd) return Ds;
  zd = 1;
  var e = Jf();
  return Ds = function(t, r) {
    return e[t] || (e[t] = r || {});
  }, Ds;
}
var Fs, qd;
function ma() {
  if (qd) return Fs;
  qd = 1;
  var e = Mt(), t = Object;
  return Fs = function(r) {
    return t(e(r));
  }, Fs;
}
var Ls, Ud;
function Dt() {
  if (Ud) return Ls;
  Ud = 1;
  var e = Ue(), t = ma(), r = e({}.hasOwnProperty);
  return Ls = Object.hasOwn || function(i, a) {
    return r(t(i), a);
  }, Ls;
}
var Bs, $d;
function n0() {
  if ($d) return Bs;
  $d = 1;
  var e = Ue(), t = 0, r = Math.random(), n = e(1 .toString);
  return Bs = function(i) {
    return "Symbol(" + (i === void 0 ? "" : i) + ")_" + n(++t + r, 36);
  }, Bs;
}
var js, Wd;
function Je() {
  if (Wd) return js;
  Wd = 1;
  var e = ze(), t = Qf(), r = Dt(), n = n0(), i = e0(), a = t0(), o = e.Symbol, s = t("wks"), u = a ? o.for || o : o && o.withoutSetter || n;
  return js = function(c) {
    return r(s, c) || (s[c] = i && r(o, c) ? o[c] : u("Symbol." + c)), s[c];
  }, js;
}
var zs, Gd;
function DS() {
  if (Gd) return zs;
  Gd = 1;
  var e = et(), t = dt(), r = r0(), n = pn(), i = MS(), a = Je(), o = TypeError, s = a("toPrimitive");
  return zs = function(u, c) {
    if (!t(u) || r(u)) return u;
    var l = n(u, s), f;
    if (l) {
      if (c === void 0 && (c = "default"), f = e(l, u, c), !t(f) || r(f)) return f;
      throw new o("Can't convert object to primitive value");
    }
    return c === void 0 && (c = "number"), i(u, c);
  }, zs;
}
var qs, Vd;
function i0() {
  if (Vd) return qs;
  Vd = 1;
  var e = DS(), t = r0();
  return qs = function(r) {
    var n = e(r, "string");
    return t(n) ? n : n + "";
  }, qs;
}
var Us, Hd;
function ga() {
  if (Hd) return Us;
  Hd = 1;
  var e = ze(), t = dt(), r = e.document, n = t(r) && t(r.createElement);
  return Us = function(i) {
    return n ? r.createElement(i) : {};
  }, Us;
}
var $s, Kd;
function a0() {
  if (Kd) return $s;
  Kd = 1;
  var e = Nt(), t = qe(), r = ga();
  return $s = !e && !t(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), $s;
}
var Yd;
function va() {
  if (Yd) return ss;
  Yd = 1;
  var e = Nt(), t = et(), r = NS(), n = Yf(), i = Jn(), a = i0(), o = Dt(), s = a0(), u = Object.getOwnPropertyDescriptor;
  return ss.f = e ? u : function(l, f) {
    if (l = i(l), f = a(f), s) try {
      return u(l, f);
    } catch {
    }
    if (o(l, f)) return n(!t(r.f, l, f), l[f]);
  }, ss;
}
var Ws = {}, Gs, Xd;
function s0() {
  if (Xd) return Gs;
  Xd = 1;
  var e = Nt(), t = qe();
  return Gs = e && t(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), Gs;
}
var Vs, Zd;
function ct() {
  if (Zd) return Vs;
  Zd = 1;
  var e = dt(), t = String, r = TypeError;
  return Vs = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not an object");
  }, Vs;
}
var Jd;
function Or() {
  if (Jd) return Ws;
  Jd = 1;
  var e = Nt(), t = a0(), r = s0(), n = ct(), i = i0(), a = TypeError, o = Object.defineProperty, s = Object.getOwnPropertyDescriptor, u = "enumerable", c = "configurable", l = "writable";
  return Ws.f = e ? r ? function(d, h, m) {
    if (n(d), h = i(h), n(m), typeof d == "function" && h === "prototype" && "value" in m && l in m && !m[l]) {
      var p = s(d, h);
      p && p[l] && (d[h] = m.value, m = {
        configurable: c in m ? m[c] : p[c],
        enumerable: u in m ? m[u] : p[u],
        writable: !1
      });
    }
    return o(d, h, m);
  } : o : function(d, h, m) {
    if (n(d), h = i(h), n(m), t) try {
      return o(d, h, m);
    } catch {
    }
    if ("get" in m || "set" in m) throw new a("Accessors not supported");
    return "value" in m && (d[h] = m.value), d;
  }, Ws;
}
var Hs, Qd;
function ei() {
  if (Qd) return Hs;
  Qd = 1;
  var e = Nt(), t = Or(), r = Yf();
  return Hs = e ? function(n, i, a) {
    return t.f(n, i, r(1, a));
  } : function(n, i, a) {
    return n[i] = a, n;
  }, Hs;
}
var Ks = { exports: {} }, Ys, ep;
function ya() {
  if (ep) return Ys;
  ep = 1;
  var e = Nt(), t = Dt(), r = Function.prototype, n = e && Object.getOwnPropertyDescriptor, i = t(r, "name"), a = i && (function() {
  }).name === "something", o = i && (!e || e && n(r, "name").configurable);
  return Ys = {
    EXISTS: i,
    PROPER: a,
    CONFIGURABLE: o
  }, Ys;
}
var Xs, tp;
function el() {
  if (tp) return Xs;
  tp = 1;
  var e = Ue(), t = $e(), r = Jf(), n = e(Function.toString);
  return t(r.inspectSource) || (r.inspectSource = function(i) {
    return n(i);
  }), Xs = r.inspectSource, Xs;
}
var Zs, rp;
function FS() {
  if (rp) return Zs;
  rp = 1;
  var e = ze(), t = $e(), r = e.WeakMap;
  return Zs = t(r) && /native code/.test(String(r)), Zs;
}
var Js, np;
function tl() {
  if (np) return Js;
  np = 1;
  var e = Qf(), t = n0(), r = e("keys");
  return Js = function(n) {
    return r[n] || (r[n] = t(n));
  }, Js;
}
var Qs, ip;
function rl() {
  return ip || (ip = 1, Qs = {}), Qs;
}
var eo, ap;
function ba() {
  if (ap) return eo;
  ap = 1;
  var e = FS(), t = ze(), r = dt(), n = ei(), i = Dt(), a = Jf(), o = tl(), s = rl(), u = "Object already initialized", c = t.TypeError, l = t.WeakMap, f, d, h, m = function(_) {
    return h(_) ? d(_) : f(_, {});
  }, p = function(_) {
    return function(E) {
      var O;
      if (!r(E) || (O = d(E)).type !== _)
        throw new c("Incompatible receiver, " + _ + " required");
      return O;
    };
  };
  if (e || a.state) {
    var b = a.state || (a.state = new l());
    b.get = b.get, b.has = b.has, b.set = b.set, f = function(_, E) {
      if (b.has(_)) throw new c(u);
      return E.facade = _, b.set(_, E), E;
    }, d = function(_) {
      return b.get(_) || {};
    }, h = function(_) {
      return b.has(_);
    };
  } else {
    var y = o("state");
    s[y] = !0, f = function(_, E) {
      if (i(_, y)) throw new c(u);
      return E.facade = _, n(_, y, E), E;
    }, d = function(_) {
      return i(_, y) ? _[y] : {};
    }, h = function(_) {
      return i(_, y);
    };
  }
  return eo = {
    set: f,
    get: d,
    has: h,
    enforce: m,
    getterFor: p
  }, eo;
}
var sp;
function o0() {
  if (sp) return Ks.exports;
  sp = 1;
  var e = Ue(), t = qe(), r = $e(), n = Dt(), i = Nt(), a = ya().CONFIGURABLE, o = el(), s = ba(), u = s.enforce, c = s.get, l = String, f = Object.defineProperty, d = e("".slice), h = e("".replace), m = e([].join), p = i && !t(function() {
    return f(function() {
    }, "length", { value: 8 }).length !== 8;
  }), b = String(String).split("String"), y = Ks.exports = function(_, E, O) {
    d(l(E), 0, 7) === "Symbol(" && (E = "[" + h(l(E), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), O && O.getter && (E = "get " + E), O && O.setter && (E = "set " + E), (!n(_, "name") || a && _.name !== E) && (i ? f(_, "name", { value: E, configurable: !0 }) : _.name = E), p && O && n(O, "arity") && _.length !== O.arity && f(_, "length", { value: O.arity });
    try {
      O && n(O, "constructor") && O.constructor ? i && f(_, "prototype", { writable: !1 }) : _.prototype && (_.prototype = void 0);
    } catch {
    }
    var C = u(_);
    return n(C, "source") || (C.source = m(b, typeof E == "string" ? E : "")), _;
  };
  return Function.prototype.toString = y(function() {
    return r(this) && c(this).source || o(this);
  }, "toString"), Ks.exports;
}
var to, op;
function Gr() {
  if (op) return to;
  op = 1;
  var e = $e(), t = Or(), r = o0(), n = Zf();
  return to = function(i, a, o, s) {
    s || (s = {});
    var u = s.enumerable, c = s.name !== void 0 ? s.name : a;
    if (e(o) && r(o, c, s), s.global)
      u ? i[a] = o : n(a, o);
    else {
      try {
        s.unsafe ? i[a] && (u = !0) : delete i[a];
      } catch {
      }
      u ? i[a] = o : t.f(i, a, {
        value: o,
        enumerable: !1,
        configurable: !s.nonConfigurable,
        writable: !s.nonWritable
      });
    }
    return i;
  }, to;
}
var ro = {}, no, up;
function LS() {
  if (up) return no;
  up = 1;
  var e = Math.ceil, t = Math.floor;
  return no = Math.trunc || function(n) {
    var i = +n;
    return (i > 0 ? t : e)(i);
  }, no;
}
var io, cp;
function _a() {
  if (cp) return io;
  cp = 1;
  var e = LS();
  return io = function(t) {
    var r = +t;
    return r !== r || r === 0 ? 0 : e(r);
  }, io;
}
var ao, fp;
function BS() {
  if (fp) return ao;
  fp = 1;
  var e = _a(), t = Math.max, r = Math.min;
  return ao = function(n, i) {
    var a = e(n);
    return a < 0 ? t(a + i, 0) : r(a, i);
  }, ao;
}
var so, lp;
function mn() {
  if (lp) return so;
  lp = 1;
  var e = _a(), t = Math.min;
  return so = function(r) {
    var n = e(r);
    return n > 0 ? t(n, 9007199254740991) : 0;
  }, so;
}
var oo, hp;
function nl() {
  if (hp) return oo;
  hp = 1;
  var e = mn();
  return oo = function(t) {
    return e(t.length);
  }, oo;
}
var uo, dp;
function u0() {
  if (dp) return uo;
  dp = 1;
  var e = Jn(), t = BS(), r = nl(), n = function(i) {
    return function(a, o, s) {
      var u = e(a), c = r(u);
      if (c === 0) return !i && -1;
      var l = t(s, c), f;
      if (i && o !== o) {
        for (; c > l; )
          if (f = u[l++], f !== f) return !0;
      } else for (; c > l; l++)
        if ((i || l in u) && u[l] === o) return i || l || 0;
      return !i && -1;
    };
  };
  return uo = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: n(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: n(!1)
  }, uo;
}
var co, pp;
function c0() {
  if (pp) return co;
  pp = 1;
  var e = Ue(), t = Dt(), r = Jn(), n = u0().indexOf, i = rl(), a = e([].push);
  return co = function(o, s) {
    var u = r(o), c = 0, l = [], f;
    for (f in u) !t(i, f) && t(u, f) && a(l, f);
    for (; s.length > c; ) t(u, f = s[c++]) && (~n(l, f) || a(l, f));
    return l;
  }, co;
}
var fo, mp;
function il() {
  return mp || (mp = 1, fo = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), fo;
}
var gp;
function jS() {
  if (gp) return ro;
  gp = 1;
  var e = c0(), t = il(), r = t.concat("length", "prototype");
  return ro.f = Object.getOwnPropertyNames || function(i) {
    return e(i, r);
  }, ro;
}
var lo = {}, vp;
function zS() {
  return vp || (vp = 1, lo.f = Object.getOwnPropertySymbols), lo;
}
var ho, yp;
function qS() {
  if (yp) return ho;
  yp = 1;
  var e = Wr(), t = Ue(), r = jS(), n = zS(), i = ct(), a = t([].concat);
  return ho = e("Reflect", "ownKeys") || function(s) {
    var u = r.f(i(s)), c = n.f;
    return c ? a(u, c(s)) : u;
  }, ho;
}
var po, bp;
function US() {
  if (bp) return po;
  bp = 1;
  var e = Dt(), t = qS(), r = va(), n = Or();
  return po = function(i, a, o) {
    for (var s = t(a), u = n.f, c = r.f, l = 0; l < s.length; l++) {
      var f = s[l];
      !e(i, f) && !(o && e(o, f)) && u(i, f, c(a, f));
    }
  }, po;
}
var mo, _p;
function f0() {
  if (_p) return mo;
  _p = 1;
  var e = qe(), t = $e(), r = /#|\.prototype\./, n = function(u, c) {
    var l = a[i(u)];
    return l === s ? !0 : l === o ? !1 : t(c) ? e(c) : !!c;
  }, i = n.normalize = function(u) {
    return String(u).replace(r, ".").toLowerCase();
  }, a = n.data = {}, o = n.NATIVE = "N", s = n.POLYFILL = "P";
  return mo = n, mo;
}
var go, wp;
function ft() {
  if (wp) return go;
  wp = 1;
  var e = ze(), t = va().f, r = ei(), n = Gr(), i = Zf(), a = US(), o = f0();
  return go = function(s, u) {
    var c = s.target, l = s.global, f = s.stat, d, h, m, p, b, y;
    if (l ? h = e : f ? h = e[c] || i(c, {}) : h = e[c] && e[c].prototype, h) for (m in u) {
      if (b = u[m], s.dontCallGetSet ? (y = t(h, m), p = y && y.value) : p = h[m], d = o(l ? m : c + (f ? "." : "#") + m, s.forced), !d && p !== void 0) {
        if (typeof b == typeof p) continue;
        a(b, p);
      }
      (s.sham || p && p.sham) && r(b, "sham", !0), n(h, m, b, s);
    }
  }, go;
}
var vo, Ep;
function l0() {
  if (Ep) return vo;
  Ep = 1;
  var e = ze(), t = Qn(), r = $r(), n = function(i) {
    return t.slice(0, i.length) === i;
  };
  return vo = function() {
    return n("Bun/") ? "BUN" : n("Cloudflare-Workers") ? "CLOUDFLARE" : n("Deno/") ? "DENO" : n("Node.js/") ? "NODE" : e.Bun && typeof Bun.version == "string" ? "BUN" : e.Deno && typeof Deno.version == "object" ? "DENO" : r(e.process) === "process" ? "NODE" : e.window && e.document ? "BROWSER" : "REST";
  }(), vo;
}
var yo, xp;
function wa() {
  if (xp) return yo;
  xp = 1;
  var e = l0();
  return yo = e === "NODE", yo;
}
var bo, Sp;
function $S() {
  if (Sp) return bo;
  Sp = 1;
  var e = Ue(), t = ur();
  return bo = function(r, n, i) {
    try {
      return e(t(Object.getOwnPropertyDescriptor(r, n)[i]));
    } catch {
    }
  }, bo;
}
var _o, Op;
function WS() {
  if (Op) return _o;
  Op = 1;
  var e = dt();
  return _o = function(t) {
    return e(t) || t === null;
  }, _o;
}
var wo, Tp;
function GS() {
  if (Tp) return wo;
  Tp = 1;
  var e = WS(), t = String, r = TypeError;
  return wo = function(n) {
    if (e(n)) return n;
    throw new r("Can't set " + t(n) + " as a prototype");
  }, wo;
}
var Eo, Cp;
function h0() {
  if (Cp) return Eo;
  Cp = 1;
  var e = $S(), t = dt(), r = Mt(), n = GS();
  return Eo = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var i = !1, a = {}, o;
    try {
      o = e(Object.prototype, "__proto__", "set"), o(a, []), i = a instanceof Array;
    } catch {
    }
    return function(u, c) {
      return r(u), n(c), t(u) && (i ? o(u, c) : u.__proto__ = c), u;
    };
  }() : void 0), Eo;
}
var xo, Ap;
function Ea() {
  if (Ap) return xo;
  Ap = 1;
  var e = Or().f, t = Dt(), r = Je(), n = r("toStringTag");
  return xo = function(i, a, o) {
    i && !o && (i = i.prototype), i && !t(i, n) && e(i, n, { configurable: !0, value: a });
  }, xo;
}
var So, Rp;
function VS() {
  if (Rp) return So;
  Rp = 1;
  var e = o0(), t = Or();
  return So = function(r, n, i) {
    return i.get && e(i.get, n, { getter: !0 }), i.set && e(i.set, n, { setter: !0 }), t.f(r, n, i);
  }, So;
}
var Oo, Ip;
function HS() {
  if (Ip) return Oo;
  Ip = 1;
  var e = Wr(), t = VS(), r = Je(), n = Nt(), i = r("species");
  return Oo = function(a) {
    var o = e(a);
    n && o && !o[i] && t(o, i, {
      configurable: !0,
      get: function() {
        return this;
      }
    });
  }, Oo;
}
var To, kp;
function KS() {
  if (kp) return To;
  kp = 1;
  var e = da(), t = TypeError;
  return To = function(r, n) {
    if (e(n, r)) return r;
    throw new t("Incorrect invocation");
  }, To;
}
var Co, Pp;
function YS() {
  if (Pp) return Co;
  Pp = 1;
  var e = Je(), t = e("toStringTag"), r = {};
  return r[t] = "z", Co = String(r) === "[object z]", Co;
}
var Ao, Np;
function al() {
  if (Np) return Ao;
  Np = 1;
  var e = YS(), t = $e(), r = $r(), n = Je(), i = n("toStringTag"), a = Object, o = r(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", s = function(u, c) {
    try {
      return u[c];
    } catch {
    }
  };
  return Ao = e ? r : function(u) {
    var c, l, f;
    return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (l = s(c = a(u), i)) == "string" ? l : o ? r(c) : (f = r(c)) === "Object" && t(c.callee) ? "Arguments" : f;
  }, Ao;
}
var Ro, Mp;
function XS() {
  if (Mp) return Ro;
  Mp = 1;
  var e = Ue(), t = qe(), r = $e(), n = al(), i = Wr(), a = el(), o = function() {
  }, s = i("Reflect", "construct"), u = /^\s*(?:class|function)\b/, c = e(u.exec), l = !u.test(o), f = function(m) {
    if (!r(m)) return !1;
    try {
      return s(o, [], m), !0;
    } catch {
      return !1;
    }
  }, d = function(m) {
    if (!r(m)) return !1;
    switch (n(m)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return l || !!c(u, a(m));
    } catch {
      return !0;
    }
  };
  return d.sham = !0, Ro = !s || t(function() {
    var h;
    return f(f.call) || !f(Object) || !f(function() {
      h = !0;
    }) || h;
  }) ? d : f, Ro;
}
var Io, Dp;
function ZS() {
  if (Dp) return Io;
  Dp = 1;
  var e = XS(), t = pa(), r = TypeError;
  return Io = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a constructor");
  }, Io;
}
var ko, Fp;
function d0() {
  if (Fp) return ko;
  Fp = 1;
  var e = ct(), t = ZS(), r = ha(), n = Je(), i = n("species");
  return ko = function(a, o) {
    var s = e(a).constructor, u;
    return s === void 0 || r(u = e(s)[i]) ? o : t(u);
  }, ko;
}
var Po, Lp;
function p0() {
  if (Lp) return Po;
  Lp = 1;
  var e = la(), t = Function.prototype, r = t.apply, n = t.call;
  return Po = typeof Reflect == "object" && Reflect.apply || (e ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), Po;
}
var No, Bp;
function xa() {
  if (Bp) return No;
  Bp = 1;
  var e = $r(), t = Ue();
  return No = function(r) {
    if (e(r) === "Function") return t(r);
  }, No;
}
var Mo, jp;
function sl() {
  if (jp) return Mo;
  jp = 1;
  var e = xa(), t = ur(), r = la(), n = e(e.bind);
  return Mo = function(i, a) {
    return t(i), a === void 0 ? i : r ? n(i, a) : function() {
      return i.apply(a, arguments);
    };
  }, Mo;
}
var Do, zp;
function m0() {
  if (zp) return Do;
  zp = 1;
  var e = Wr();
  return Do = e("document", "documentElement"), Do;
}
var Fo, qp;
function JS() {
  if (qp) return Fo;
  qp = 1;
  var e = Ue();
  return Fo = e([].slice), Fo;
}
var Lo, Up;
function QS() {
  if (Up) return Lo;
  Up = 1;
  var e = TypeError;
  return Lo = function(t, r) {
    if (t < r) throw new e("Not enough arguments");
    return t;
  }, Lo;
}
var Bo, $p;
function g0() {
  if ($p) return Bo;
  $p = 1;
  var e = Qn();
  return Bo = /(?:ipad|iphone|ipod).*applewebkit/i.test(e), Bo;
}
var jo, Wp;
function v0() {
  if (Wp) return jo;
  Wp = 1;
  var e = ze(), t = p0(), r = sl(), n = $e(), i = Dt(), a = qe(), o = m0(), s = JS(), u = ga(), c = QS(), l = g0(), f = wa(), d = e.setImmediate, h = e.clearImmediate, m = e.process, p = e.Dispatch, b = e.Function, y = e.MessageChannel, _ = e.String, E = 0, O = {}, C = "onreadystatechange", B, I, S, w;
  a(function() {
    B = e.location;
  });
  var k = function(g) {
    if (i(O, g)) {
      var q = O[g];
      delete O[g], q();
    }
  }, z = function(g) {
    return function() {
      k(g);
    };
  }, x = function(g) {
    k(g.data);
  }, F = function(g) {
    e.postMessage(_(g), B.protocol + "//" + B.host);
  };
  return (!d || !h) && (d = function(q) {
    c(arguments.length, 1);
    var ie = n(q) ? q : b(q), M = s(arguments, 1);
    return O[++E] = function() {
      t(ie, void 0, M);
    }, I(E), E;
  }, h = function(q) {
    delete O[q];
  }, f ? I = function(g) {
    m.nextTick(z(g));
  } : p && p.now ? I = function(g) {
    p.now(z(g));
  } : y && !l ? (S = new y(), w = S.port2, S.port1.onmessage = x, I = r(w.postMessage, w)) : e.addEventListener && n(e.postMessage) && !e.importScripts && B && B.protocol !== "file:" && !a(F) ? (I = F, e.addEventListener("message", x, !1)) : C in u("script") ? I = function(g) {
    o.appendChild(u("script"))[C] = function() {
      o.removeChild(this), k(g);
    };
  } : I = function(g) {
    setTimeout(z(g), 0);
  }), jo = {
    set: d,
    clear: h
  }, jo;
}
var zo, Gp;
function eO() {
  if (Gp) return zo;
  Gp = 1;
  var e = ze(), t = Nt(), r = Object.getOwnPropertyDescriptor;
  return zo = function(n) {
    if (!t) return e[n];
    var i = r(e, n);
    return i && i.value;
  }, zo;
}
var qo, Vp;
function y0() {
  if (Vp) return qo;
  Vp = 1;
  var e = function() {
    this.head = null, this.tail = null;
  };
  return e.prototype = {
    add: function(t) {
      var r = { item: t, next: null }, n = this.tail;
      n ? n.next = r : this.head = r, this.tail = r;
    },
    get: function() {
      var t = this.head;
      if (t) {
        var r = this.head = t.next;
        return r === null && (this.tail = null), t.item;
      }
    }
  }, qo = e, qo;
}
var Uo, Hp;
function tO() {
  if (Hp) return Uo;
  Hp = 1;
  var e = Qn();
  return Uo = /ipad|iphone|ipod/i.test(e) && typeof Pebble < "u", Uo;
}
var $o, Kp;
function rO() {
  if (Kp) return $o;
  Kp = 1;
  var e = Qn();
  return $o = /web0s(?!.*chrome)/i.test(e), $o;
}
var Wo, Yp;
function nO() {
  if (Yp) return Wo;
  Yp = 1;
  var e = ze(), t = eO(), r = sl(), n = v0().set, i = y0(), a = g0(), o = tO(), s = rO(), u = wa(), c = e.MutationObserver || e.WebKitMutationObserver, l = e.document, f = e.process, d = e.Promise, h = t("queueMicrotask"), m, p, b, y, _;
  if (!h) {
    var E = new i(), O = function() {
      var C, B;
      for (u && (C = f.domain) && C.exit(); B = E.get(); ) try {
        B();
      } catch (I) {
        throw E.head && m(), I;
      }
      C && C.enter();
    };
    !a && !u && !s && c && l ? (p = !0, b = l.createTextNode(""), new c(O).observe(b, { characterData: !0 }), m = function() {
      b.data = p = !p;
    }) : !o && d && d.resolve ? (y = d.resolve(void 0), y.constructor = d, _ = r(y.then, y), m = function() {
      _(O);
    }) : u ? m = function() {
      f.nextTick(O);
    } : (n = r(n, e), m = function() {
      n(O);
    }), h = function(C) {
      E.head || m(), E.add(C);
    };
  }
  return Wo = h, Wo;
}
var Go, Xp;
function iO() {
  return Xp || (Xp = 1, Go = function(e, t) {
    try {
      arguments.length === 1 ? console.error(e) : console.error(e, t);
    } catch {
    }
  }), Go;
}
var Vo, Zp;
function ol() {
  return Zp || (Zp = 1, Vo = function(e) {
    try {
      return { error: !1, value: e() };
    } catch (t) {
      return { error: !0, value: t };
    }
  }), Vo;
}
var Ho, Jp;
function ti() {
  if (Jp) return Ho;
  Jp = 1;
  var e = ze();
  return Ho = e.Promise, Ho;
}
var Ko, Qp;
function ri() {
  if (Qp) return Ko;
  Qp = 1;
  var e = ze(), t = ti(), r = $e(), n = f0(), i = el(), a = Je(), o = l0(), s = Vt(), u = Xf(), c = t && t.prototype, l = a("species"), f = !1, d = r(e.PromiseRejectionEvent), h = n("Promise", function() {
    var m = i(t), p = m !== String(t);
    if (!p && u === 66 || s && !(c.catch && c.finally)) return !0;
    if (!u || u < 51 || !/native code/.test(m)) {
      var b = new t(function(E) {
        E(1);
      }), y = function(E) {
        E(function() {
        }, function() {
        });
      }, _ = b.constructor = {};
      if (_[l] = y, f = b.then(function() {
      }) instanceof y, !f) return !0;
    }
    return !p && (o === "BROWSER" || o === "DENO") && !d;
  });
  return Ko = {
    CONSTRUCTOR: h,
    REJECTION_EVENT: d,
    SUBCLASSING: f
  }, Ko;
}
var Yo = {}, em;
function ni() {
  if (em) return Yo;
  em = 1;
  var e = ur(), t = TypeError, r = function(n) {
    var i, a;
    this.promise = new n(function(o, s) {
      if (i !== void 0 || a !== void 0) throw new t("Bad Promise constructor");
      i = o, a = s;
    }), this.resolve = e(i), this.reject = e(a);
  };
  return Yo.f = function(n) {
    return new r(n);
  }, Yo;
}
var tm;
function aO() {
  if (tm) return fd;
  tm = 1;
  var e = ft(), t = Vt(), r = wa(), n = ze(), i = et(), a = Gr(), o = h0(), s = Ea(), u = HS(), c = ur(), l = $e(), f = dt(), d = KS(), h = d0(), m = v0().set, p = nO(), b = iO(), y = ol(), _ = y0(), E = ba(), O = ti(), C = ri(), B = ni(), I = "Promise", S = C.CONSTRUCTOR, w = C.REJECTION_EVENT, k = C.SUBCLASSING, z = E.getterFor(I), x = E.set, F = O && O.prototype, g = O, q = F, ie = n.TypeError, M = n.document, Z = n.process, L = B.f, re = L, N = !!(M && M.createEvent && n.dispatchEvent), D = "unhandledrejection", K = "rejectionhandled", ee = 0, H = 1, pe = 2, xe = 1, ce = 2, le, ve, fe, we, Ee = function(V) {
    var Q;
    return f(V) && l(Q = V.then) ? Q : !1;
  }, v = function(V, Q) {
    var J = Q.value, ae = Q.state === H, de = ae ? V.ok : V.fail, _e = V.resolve, Fe = V.reject, Ve = V.domain, Pe, Le, Ce;
    try {
      de ? (ae || (Q.rejection === ce && j(Q), Q.rejection = xe), de === !0 ? Pe = J : (Ve && Ve.enter(), Pe = de(J), Ve && (Ve.exit(), Ce = !0)), Pe === V.promise ? Fe(new ie("Promise-chain cycle")) : (Le = Ee(Pe)) ? i(Le, Pe, _e, Fe) : _e(Pe)) : Fe(J);
    } catch (He) {
      Ve && !Ce && Ve.exit(), Fe(He);
    }
  }, X = function(V, Q) {
    V.notified || (V.notified = !0, p(function() {
      for (var J = V.reactions, ae; ae = J.get(); )
        v(ae, V);
      V.notified = !1, Q && !V.rejection && P(V);
    }));
  }, W = function(V, Q, J) {
    var ae, de;
    N ? (ae = M.createEvent("Event"), ae.promise = Q, ae.reason = J, ae.initEvent(V, !1, !0), n.dispatchEvent(ae)) : ae = { promise: Q, reason: J }, !w && (de = n["on" + V]) ? de(ae) : V === D && b("Unhandled promise rejection", J);
  }, P = function(V) {
    i(m, n, function() {
      var Q = V.facade, J = V.value, ae = T(V), de;
      if (ae && (de = y(function() {
        r ? Z.emit("unhandledRejection", J, Q) : W(D, Q, J);
      }), V.rejection = r || T(V) ? ce : xe, de.error))
        throw de.value;
    });
  }, T = function(V) {
    return V.rejection !== xe && !V.parent;
  }, j = function(V) {
    i(m, n, function() {
      var Q = V.facade;
      r ? Z.emit("rejectionHandled", Q) : W(K, Q, V.value);
    });
  }, te = function(V, Q, J) {
    return function(ae) {
      V(Q, ae, J);
    };
  }, ne = function(V, Q, J) {
    V.done || (V.done = !0, J && (V = J), V.value = Q, V.state = pe, X(V, !0));
  }, G = function(V, Q, J) {
    if (!V.done) {
      V.done = !0, J && (V = J);
      try {
        if (V.facade === Q) throw new ie("Promise can't be resolved itself");
        var ae = Ee(Q);
        ae ? p(function() {
          var de = { done: !1 };
          try {
            i(
              ae,
              Q,
              te(G, de, V),
              te(ne, de, V)
            );
          } catch (_e) {
            ne(de, _e, V);
          }
        }) : (V.value = Q, V.state = H, X(V, !1));
      } catch (de) {
        ne({ done: !1 }, de, V);
      }
    }
  };
  if (S && (g = function(Q) {
    d(this, q), c(Q), i(le, this);
    var J = z(this);
    try {
      Q(te(G, J), te(ne, J));
    } catch (ae) {
      ne(J, ae);
    }
  }, q = g.prototype, le = function(Q) {
    x(this, {
      type: I,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new _(),
      rejection: !1,
      state: ee,
      value: null
    });
  }, le.prototype = a(q, "then", function(Q, J) {
    var ae = z(this), de = L(h(this, g));
    return ae.parent = !0, de.ok = l(Q) ? Q : !0, de.fail = l(J) && J, de.domain = r ? Z.domain : void 0, ae.state === ee ? ae.reactions.add(de) : p(function() {
      v(de, ae);
    }), de.promise;
  }), ve = function() {
    var V = new le(), Q = z(V);
    this.promise = V, this.resolve = te(G, Q), this.reject = te(ne, Q);
  }, B.f = L = function(V) {
    return V === g || V === fe ? new ve(V) : re(V);
  }, !t && l(O) && F !== Object.prototype)) {
    we = F.then, k || a(F, "then", function(Q, J) {
      var ae = this;
      return new g(function(de, _e) {
        i(we, ae, de, _e);
      }).then(Q, J);
    }, { unsafe: !0 });
    try {
      delete F.constructor;
    } catch {
    }
    o && o(F, q);
  }
  return e({ global: !0, constructor: !0, wrap: !0, forced: S }, {
    Promise: g
  }), s(g, I, !1, !0), u(I), fd;
}
var rm = {}, Xo, nm;
function ii() {
  return nm || (nm = 1, Xo = {}), Xo;
}
var Zo, im;
function sO() {
  if (im) return Zo;
  im = 1;
  var e = Je(), t = ii(), r = e("iterator"), n = Array.prototype;
  return Zo = function(i) {
    return i !== void 0 && (t.Array === i || n[r] === i);
  }, Zo;
}
var Jo, am;
function b0() {
  if (am) return Jo;
  am = 1;
  var e = al(), t = pn(), r = ha(), n = ii(), i = Je(), a = i("iterator");
  return Jo = function(o) {
    if (!r(o)) return t(o, a) || t(o, "@@iterator") || n[e(o)];
  }, Jo;
}
var Qo, sm;
function oO() {
  if (sm) return Qo;
  sm = 1;
  var e = et(), t = ur(), r = ct(), n = pa(), i = b0(), a = TypeError;
  return Qo = function(o, s) {
    var u = arguments.length < 2 ? i(o) : s;
    if (t(u)) return r(e(u, o));
    throw new a(n(o) + " is not iterable");
  }, Qo;
}
var eu, om;
function uO() {
  if (om) return eu;
  om = 1;
  var e = et(), t = ct(), r = pn();
  return eu = function(n, i, a) {
    var o, s;
    t(n);
    try {
      if (o = r(n, "return"), !o) {
        if (i === "throw") throw a;
        return a;
      }
      o = e(o, n);
    } catch (u) {
      s = !0, o = u;
    }
    if (i === "throw") throw a;
    if (s) throw o;
    return t(o), a;
  }, eu;
}
var tu, um;
function _0() {
  if (um) return tu;
  um = 1;
  var e = sl(), t = et(), r = ct(), n = pa(), i = sO(), a = nl(), o = da(), s = oO(), u = b0(), c = uO(), l = TypeError, f = function(h, m) {
    this.stopped = h, this.result = m;
  }, d = f.prototype;
  return tu = function(h, m, p) {
    var b = p && p.that, y = !!(p && p.AS_ENTRIES), _ = !!(p && p.IS_RECORD), E = !!(p && p.IS_ITERATOR), O = !!(p && p.INTERRUPTED), C = e(m, b), B, I, S, w, k, z, x, F = function(q) {
      return B && c(B, "normal", q), new f(!0, q);
    }, g = function(q) {
      return y ? (r(q), O ? C(q[0], q[1], F) : C(q[0], q[1])) : O ? C(q, F) : C(q);
    };
    if (_)
      B = h.iterator;
    else if (E)
      B = h;
    else {
      if (I = u(h), !I) throw new l(n(h) + " is not iterable");
      if (i(I)) {
        for (S = 0, w = a(h); w > S; S++)
          if (k = g(h[S]), k && o(d, k)) return k;
        return new f(!1);
      }
      B = s(h, I);
    }
    for (z = _ ? h.next : B.next; !(x = t(z, B)).done; ) {
      try {
        k = g(x.value);
      } catch (q) {
        c(B, "throw", q);
      }
      if (typeof k == "object" && k && o(d, k)) return k;
    }
    return new f(!1);
  }, tu;
}
var ru, cm;
function cO() {
  if (cm) return ru;
  cm = 1;
  var e = Je(), t = e("iterator"), r = !1;
  try {
    var n = 0, i = {
      next: function() {
        return { done: !!n++ };
      },
      return: function() {
        r = !0;
      }
    };
    i[t] = function() {
      return this;
    }, Array.from(i, function() {
      throw 2;
    });
  } catch {
  }
  return ru = function(a, o) {
    try {
      if (!o && !r) return !1;
    } catch {
      return !1;
    }
    var s = !1;
    try {
      var u = {};
      u[t] = function() {
        return {
          next: function() {
            return { done: s = !0 };
          }
        };
      }, a(u);
    } catch {
    }
    return s;
  }, ru;
}
var nu, fm;
function w0() {
  if (fm) return nu;
  fm = 1;
  var e = ti(), t = cO(), r = ri().CONSTRUCTOR;
  return nu = r || !t(function(n) {
    e.all(n).then(void 0, function() {
    });
  }), nu;
}
var lm;
function fO() {
  if (lm) return rm;
  lm = 1;
  var e = ft(), t = et(), r = ur(), n = ni(), i = ol(), a = _0(), o = w0();
  return e({ target: "Promise", stat: !0, forced: o }, {
    all: function(u) {
      var c = this, l = n.f(c), f = l.resolve, d = l.reject, h = i(function() {
        var m = r(c.resolve), p = [], b = 0, y = 1;
        a(u, function(_) {
          var E = b++, O = !1;
          y++, t(m, c, _).then(function(C) {
            O || (O = !0, p[E] = C, --y || f(p));
          }, d);
        }), --y || f(p);
      });
      return h.error && d(h.value), l.promise;
    }
  }), rm;
}
var hm = {}, dm;
function lO() {
  if (dm) return hm;
  dm = 1;
  var e = ft(), t = Vt(), r = ri().CONSTRUCTOR, n = ti(), i = Wr(), a = $e(), o = Gr(), s = n && n.prototype;
  if (e({ target: "Promise", proto: !0, forced: r, real: !0 }, {
    catch: function(c) {
      return this.then(void 0, c);
    }
  }), !t && a(n)) {
    var u = i("Promise").prototype.catch;
    s.catch !== u && o(s, "catch", u, { unsafe: !0 });
  }
  return hm;
}
var pm = {}, mm;
function hO() {
  if (mm) return pm;
  mm = 1;
  var e = ft(), t = et(), r = ur(), n = ni(), i = ol(), a = _0(), o = w0();
  return e({ target: "Promise", stat: !0, forced: o }, {
    race: function(u) {
      var c = this, l = n.f(c), f = l.reject, d = i(function() {
        var h = r(c.resolve);
        a(u, function(m) {
          t(h, c, m).then(l.resolve, f);
        });
      });
      return d.error && f(d.value), l.promise;
    }
  }), pm;
}
var gm = {}, vm;
function dO() {
  if (vm) return gm;
  vm = 1;
  var e = ft(), t = ni(), r = ri().CONSTRUCTOR;
  return e({ target: "Promise", stat: !0, forced: r }, {
    reject: function(i) {
      var a = t.f(this), o = a.reject;
      return o(i), a.promise;
    }
  }), gm;
}
var ym = {}, iu, bm;
function pO() {
  if (bm) return iu;
  bm = 1;
  var e = ct(), t = dt(), r = ni();
  return iu = function(n, i) {
    if (e(n), t(i) && i.constructor === n) return i;
    var a = r.f(n), o = a.resolve;
    return o(i), a.promise;
  }, iu;
}
var _m;
function mO() {
  if (_m) return ym;
  _m = 1;
  var e = ft(), t = Wr(), r = Vt(), n = ti(), i = ri().CONSTRUCTOR, a = pO(), o = t("Promise"), s = r && !i;
  return e({ target: "Promise", stat: !0, forced: r || i }, {
    resolve: function(c) {
      return a(s && this === o ? n : this, c);
    }
  }), ym;
}
var wm;
function gO() {
  return wm || (wm = 1, aO(), fO(), lO(), hO(), dO(), mO()), cd;
}
gO();
function Em(e, t, r, n, i, a, o) {
  try {
    var s = e[a](o), u = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, i);
}
function vC(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, i) {
      var a = e.apply(t, r);
      function o(u) {
        Em(a, n, i, o, s, "next", u);
      }
      function s(u) {
        Em(a, n, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var xm = {}, Sm = {}, au, Om;
function Ht() {
  if (Om) return au;
  Om = 1;
  var e = al(), t = String;
  return au = function(r) {
    if (e(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return t(r);
  }, au;
}
var su, Tm;
function E0() {
  if (Tm) return su;
  Tm = 1;
  var e = ct();
  return su = function() {
    var t = e(this), r = "";
    return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r;
  }, su;
}
var ou, Cm;
function x0() {
  if (Cm) return ou;
  Cm = 1;
  var e = qe(), t = ze(), r = t.RegExp, n = e(function() {
    var o = r("a", "y");
    return o.lastIndex = 2, o.exec("abcd") !== null;
  }), i = n || e(function() {
    return !r("a", "y").sticky;
  }), a = n || e(function() {
    var o = r("^r", "gy");
    return o.lastIndex = 2, o.exec("str") !== null;
  });
  return ou = {
    BROKEN_CARET: a,
    MISSED_STICKY: i,
    UNSUPPORTED_Y: n
  }, ou;
}
var uu = {}, cu, Am;
function vO() {
  if (Am) return cu;
  Am = 1;
  var e = c0(), t = il();
  return cu = Object.keys || function(n) {
    return e(n, t);
  }, cu;
}
var Rm;
function yO() {
  if (Rm) return uu;
  Rm = 1;
  var e = Nt(), t = s0(), r = Or(), n = ct(), i = Jn(), a = vO();
  return uu.f = e && !t ? Object.defineProperties : function(s, u) {
    n(s);
    for (var c = i(u), l = a(u), f = l.length, d = 0, h; f > d; ) r.f(s, h = l[d++], c[h]);
    return s;
  }, uu;
}
var fu, Im;
function Sa() {
  if (Im) return fu;
  Im = 1;
  var e = ct(), t = yO(), r = il(), n = rl(), i = m0(), a = ga(), o = tl(), s = ">", u = "<", c = "prototype", l = "script", f = o("IE_PROTO"), d = function() {
  }, h = function(_) {
    return u + l + s + _ + u + "/" + l + s;
  }, m = function(_) {
    _.write(h("")), _.close();
    var E = _.parentWindow.Object;
    return _ = null, E;
  }, p = function() {
    var _ = a("iframe"), E = "java" + l + ":", O;
    return _.style.display = "none", i.appendChild(_), _.src = String(E), O = _.contentWindow.document, O.open(), O.write(h("document.F=Object")), O.close(), O.F;
  }, b, y = function() {
    try {
      b = new ActiveXObject("htmlfile");
    } catch {
    }
    y = typeof document < "u" ? document.domain && b ? m(b) : p() : m(b);
    for (var _ = r.length; _--; ) delete y[c][r[_]];
    return y();
  };
  return n[f] = !0, fu = Object.create || function(E, O) {
    var C;
    return E !== null ? (d[c] = e(E), C = new d(), d[c] = null, C[f] = E) : C = y(), O === void 0 ? C : t.f(C, O);
  }, fu;
}
var lu, km;
function bO() {
  if (km) return lu;
  km = 1;
  var e = qe(), t = ze(), r = t.RegExp;
  return lu = e(function() {
    var n = r(".", "s");
    return !(n.dotAll && n.test(`
`) && n.flags === "s");
  }), lu;
}
var hu, Pm;
function _O() {
  if (Pm) return hu;
  Pm = 1;
  var e = qe(), t = ze(), r = t.RegExp;
  return hu = e(function() {
    var n = r("(?<a>b)", "g");
    return n.exec("b").groups.a !== "b" || "b".replace(n, "$<a>c") !== "bc";
  }), hu;
}
var du, Nm;
function ul() {
  if (Nm) return du;
  Nm = 1;
  var e = et(), t = Ue(), r = Ht(), n = E0(), i = x0(), a = Qf(), o = Sa(), s = ba().get, u = bO(), c = _O(), l = a("native-string-replace", String.prototype.replace), f = RegExp.prototype.exec, d = f, h = t("".charAt), m = t("".indexOf), p = t("".replace), b = t("".slice), y = function() {
    var C = /a/, B = /b*/g;
    return e(f, C, "a"), e(f, B, "a"), C.lastIndex !== 0 || B.lastIndex !== 0;
  }(), _ = i.BROKEN_CARET, E = /()??/.exec("")[1] !== void 0, O = y || E || _ || u || c;
  return O && (d = function(B) {
    var I = this, S = s(I), w = r(B), k = S.raw, z, x, F, g, q, ie, M;
    if (k)
      return k.lastIndex = I.lastIndex, z = e(d, k, w), I.lastIndex = k.lastIndex, z;
    var Z = S.groups, L = _ && I.sticky, re = e(n, I), N = I.source, D = 0, K = w;
    if (L && (re = p(re, "y", ""), m(re, "g") === -1 && (re += "g"), K = b(w, I.lastIndex), I.lastIndex > 0 && (!I.multiline || I.multiline && h(w, I.lastIndex - 1) !== `
`) && (N = "(?: " + N + ")", K = " " + K, D++), x = new RegExp("^(?:" + N + ")", re)), E && (x = new RegExp("^" + N + "$(?!\\s)", re)), y && (F = I.lastIndex), g = e(f, L ? x : I, K), L ? g ? (g.input = b(g.input, D), g[0] = b(g[0], D), g.index = I.lastIndex, I.lastIndex += g[0].length) : I.lastIndex = 0 : y && g && (I.lastIndex = I.global ? g.index + g[0].length : F), E && g && g.length > 1 && e(l, g[0], x, function() {
      for (q = 1; q < arguments.length - 2; q++)
        arguments[q] === void 0 && (g[q] = void 0);
    }), g && Z)
      for (g.groups = ie = o(null), q = 0; q < Z.length; q++)
        M = Z[q], ie[M[0]] = g[M[1]];
    return g;
  }), du = d, du;
}
var Mm;
function wO() {
  if (Mm) return Sm;
  Mm = 1;
  var e = ft(), t = ul();
  return e({ target: "RegExp", proto: !0, forced: /./.exec !== t }, {
    exec: t
  }), Sm;
}
var pu, Dm;
function cl() {
  if (Dm) return pu;
  Dm = 1, wO();
  var e = et(), t = Gr(), r = ul(), n = qe(), i = Je(), a = ei(), o = i("species"), s = RegExp.prototype;
  return pu = function(u, c, l, f) {
    var d = i(u), h = !n(function() {
      var y = {};
      return y[d] = function() {
        return 7;
      }, ""[u](y) !== 7;
    }), m = h && !n(function() {
      var y = !1, _ = /a/;
      return u === "split" && (_ = {}, _.constructor = {}, _.constructor[o] = function() {
        return _;
      }, _.flags = "", _[d] = /./[d]), _.exec = function() {
        return y = !0, null;
      }, _[d](""), !y;
    });
    if (!h || !m || l) {
      var p = /./[d], b = c(d, ""[u], function(y, _, E, O, C) {
        var B = _.exec;
        return B === r || B === s.exec ? h && !C ? { done: !0, value: e(p, _, E, O) } : { done: !0, value: e(y, E, _, O) } : { done: !1 };
      });
      t(String.prototype, u, b[0]), t(s, d, b[1]);
    }
    f && a(s[d], "sham", !0);
  }, pu;
}
var mu, Fm;
function EO() {
  if (Fm) return mu;
  Fm = 1;
  var e = Ue(), t = _a(), r = Ht(), n = Mt(), i = e("".charAt), a = e("".charCodeAt), o = e("".slice), s = function(u) {
    return function(c, l) {
      var f = r(n(c)), d = t(l), h = f.length, m, p;
      return d < 0 || d >= h ? u ? "" : void 0 : (m = a(f, d), m < 55296 || m > 56319 || d + 1 === h || (p = a(f, d + 1)) < 56320 || p > 57343 ? u ? i(f, d) : m : u ? o(f, d, d + 2) : (m - 55296 << 10) + (p - 56320) + 65536);
    };
  };
  return mu = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: s(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: s(!0)
  }, mu;
}
var gu, Lm;
function fl() {
  if (Lm) return gu;
  Lm = 1;
  var e = EO().charAt;
  return gu = function(t, r, n) {
    return r + (n ? e(t, r).length : 1);
  }, gu;
}
var vu, Bm;
function ll() {
  if (Bm) return vu;
  Bm = 1;
  var e = et(), t = ct(), r = $e(), n = $r(), i = ul(), a = TypeError;
  return vu = function(o, s) {
    var u = o.exec;
    if (r(u)) {
      var c = e(u, o, s);
      return c !== null && t(c), c;
    }
    if (n(o) === "RegExp") return e(i, o, s);
    throw new a("RegExp#exec called on incompatible receiver");
  }, vu;
}
var jm;
function xO() {
  if (jm) return xm;
  jm = 1;
  var e = et(), t = cl(), r = ct(), n = dt(), i = mn(), a = Ht(), o = Mt(), s = pn(), u = fl(), c = ll();
  return t("match", function(l, f, d) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function(m) {
        var p = o(this), b = n(m) ? s(m, l) : void 0;
        return b ? e(b, m, p) : new RegExp(m)[l](a(p));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function(h) {
        var m = r(this), p = a(h), b = d(f, m, p);
        if (b.done) return b.value;
        if (!m.global) return c(m, p);
        var y = m.unicode;
        m.lastIndex = 0;
        for (var _ = [], E = 0, O; (O = c(m, p)) !== null; ) {
          var C = a(O[0]);
          _[E] = C, C === "" && (m.lastIndex = u(p, i(m.lastIndex), y)), E++;
        }
        return E === 0 ? null : _;
      }
    ];
  }), xm;
}
xO();
var zm = {}, yu, qm;
function SO() {
  if (qm) return yu;
  qm = 1;
  var e = Ue(), t = ma(), r = Math.floor, n = e("".charAt), i = e("".replace), a = e("".slice), o = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, s = /\$([$&'`]|\d{1,2})/g;
  return yu = function(u, c, l, f, d, h) {
    var m = l + u.length, p = f.length, b = s;
    return d !== void 0 && (d = t(d), b = o), i(h, b, function(y, _) {
      var E;
      switch (n(_, 0)) {
        case "$":
          return "$";
        case "&":
          return u;
        case "`":
          return a(c, 0, l);
        case "'":
          return a(c, m);
        case "<":
          E = d[a(_, 1, -1)];
          break;
        default:
          var O = +_;
          if (O === 0) return y;
          if (O > p) {
            var C = r(O / 10);
            return C === 0 ? y : C <= p ? f[C - 1] === void 0 ? n(_, 1) : f[C - 1] + n(_, 1) : y;
          }
          E = f[O - 1];
      }
      return E === void 0 ? "" : E;
    });
  }, yu;
}
var Um;
function OO() {
  if (Um) return zm;
  Um = 1;
  var e = p0(), t = et(), r = Ue(), n = cl(), i = qe(), a = ct(), o = $e(), s = dt(), u = _a(), c = mn(), l = Ht(), f = Mt(), d = fl(), h = pn(), m = SO(), p = ll(), b = Je(), y = b("replace"), _ = Math.max, E = Math.min, O = r([].concat), C = r([].push), B = r("".indexOf), I = r("".slice), S = function(x) {
    return x === void 0 ? x : String(x);
  }, w = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), k = function() {
    return /./[y] ? /./[y]("a", "$0") === "" : !1;
  }(), z = !i(function() {
    var x = /./;
    return x.exec = function() {
      var F = [];
      return F.groups = { a: "7" }, F;
    }, "".replace(x, "$<a>") !== "7";
  });
  return n("replace", function(x, F, g) {
    var q = k ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function(M, Z) {
        var L = f(this), re = s(M) ? h(M, y) : void 0;
        return re ? t(re, M, L, Z) : t(F, l(L), M, Z);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(ie, M) {
        var Z = a(this), L = l(ie);
        if (typeof M == "string" && B(M, q) === -1 && B(M, "$<") === -1) {
          var re = g(F, Z, L, M);
          if (re.done) return re.value;
        }
        var N = o(M);
        N || (M = l(M));
        var D = Z.global, K;
        D && (K = Z.unicode, Z.lastIndex = 0);
        for (var ee = [], H; H = p(Z, L), !(H === null || (C(ee, H), !D)); ) {
          var pe = l(H[0]);
          pe === "" && (Z.lastIndex = d(L, c(Z.lastIndex), K));
        }
        for (var xe = "", ce = 0, le = 0; le < ee.length; le++) {
          H = ee[le];
          for (var ve = l(H[0]), fe = _(E(u(H.index), L.length), 0), we = [], Ee, v = 1; v < H.length; v++) C(we, S(H[v]));
          var X = H.groups;
          if (N) {
            var W = O([ve], we, fe, L);
            X !== void 0 && C(W, X), Ee = l(e(M, void 0, W));
          } else
            Ee = m(ve, L, fe, we, X, M);
          fe >= ce && (xe += I(L, ce, fe) + Ee, ce = fe + ve.length);
        }
        return xe + I(L, ce);
      }
    ];
  }, !z || !w || k), zm;
}
OO();
var $m = {}, bu, Wm;
function TO() {
  if (Wm) return bu;
  Wm = 1;
  var e = dt(), t = $r(), r = Je(), n = r("match");
  return bu = function(i) {
    var a;
    return e(i) && ((a = i[n]) !== void 0 ? !!a : t(i) === "RegExp");
  }, bu;
}
var _u, Gm;
function hl() {
  if (Gm) return _u;
  Gm = 1;
  var e = TO(), t = TypeError;
  return _u = function(r) {
    if (e(r))
      throw new t("The method doesn't accept regular expressions");
    return r;
  }, _u;
}
var wu, Vm;
function dl() {
  if (Vm) return wu;
  Vm = 1;
  var e = Je(), t = e("match");
  return wu = function(r) {
    var n = /./;
    try {
      "/./"[r](n);
    } catch {
      try {
        return n[t] = !1, "/./"[r](n);
      } catch {
      }
    }
    return !1;
  }, wu;
}
var Hm;
function CO() {
  if (Hm) return $m;
  Hm = 1;
  var e = ft(), t = xa(), r = va().f, n = mn(), i = Ht(), a = hl(), o = Mt(), s = dl(), u = Vt(), c = t("".slice), l = Math.min, f = s("startsWith"), d = !u && !f && !!function() {
    var h = r(String.prototype, "startsWith");
    return h && !h.writable;
  }();
  return e({ target: "String", proto: !0, forced: !d && !f }, {
    startsWith: function(m) {
      var p = i(o(this));
      a(m);
      var b = n(l(arguments.length > 1 ? arguments[1] : void 0, p.length)), y = i(m);
      return c(p, b, b + y.length) === y;
    }
  }), $m;
}
CO();
var Eu, Km;
function AO() {
  if (Km) return Eu;
  Km = 1;
  var e = Je(), t = Sa(), r = Or().f, n = e("unscopables"), i = Array.prototype;
  return i[n] === void 0 && r(i, n, {
    configurable: !0,
    value: t(null)
  }), Eu = function(a) {
    i[n][a] = !0;
  }, Eu;
}
var xu, Ym;
function RO() {
  if (Ym) return xu;
  Ym = 1;
  var e = qe();
  return xu = !e(function() {
    function t() {
    }
    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }), xu;
}
var Su, Xm;
function S0() {
  if (Xm) return Su;
  Xm = 1;
  var e = Dt(), t = $e(), r = ma(), n = tl(), i = RO(), a = n("IE_PROTO"), o = Object, s = o.prototype;
  return Su = i ? o.getPrototypeOf : function(u) {
    var c = r(u);
    if (e(c, a)) return c[a];
    var l = c.constructor;
    return t(l) && c instanceof l ? l.prototype : c instanceof o ? s : null;
  }, Su;
}
var Ou, Zm;
function O0() {
  if (Zm) return Ou;
  Zm = 1;
  var e = qe(), t = $e(), r = dt(), n = Sa(), i = S0(), a = Gr(), o = Je(), s = Vt(), u = o("iterator"), c = !1, l, f, d;
  [].keys && (d = [].keys(), "next" in d ? (f = i(i(d)), f !== Object.prototype && (l = f)) : c = !0);
  var h = !r(l) || e(function() {
    var m = {};
    return l[u].call(m) !== m;
  });
  return h ? l = {} : s && (l = n(l)), t(l[u]) || a(l, u, function() {
    return this;
  }), Ou = {
    IteratorPrototype: l,
    BUGGY_SAFARI_ITERATORS: c
  }, Ou;
}
var Tu, Jm;
function IO() {
  if (Jm) return Tu;
  Jm = 1;
  var e = O0().IteratorPrototype, t = Sa(), r = Yf(), n = Ea(), i = ii(), a = function() {
    return this;
  };
  return Tu = function(o, s, u, c) {
    var l = s + " Iterator";
    return o.prototype = t(e, { next: r(+!c, u) }), n(o, l, !1, !0), i[l] = a, o;
  }, Tu;
}
var Cu, Qm;
function kO() {
  if (Qm) return Cu;
  Qm = 1;
  var e = ft(), t = et(), r = Vt(), n = ya(), i = $e(), a = IO(), o = S0(), s = h0(), u = Ea(), c = ei(), l = Gr(), f = Je(), d = ii(), h = O0(), m = n.PROPER, p = n.CONFIGURABLE, b = h.IteratorPrototype, y = h.BUGGY_SAFARI_ITERATORS, _ = f("iterator"), E = "keys", O = "values", C = "entries", B = function() {
    return this;
  };
  return Cu = function(I, S, w, k, z, x, F) {
    a(w, S, k);
    var g = function(ee) {
      if (ee === z && L) return L;
      if (!y && ee && ee in M) return M[ee];
      switch (ee) {
        case E:
          return function() {
            return new w(this, ee);
          };
        case O:
          return function() {
            return new w(this, ee);
          };
        case C:
          return function() {
            return new w(this, ee);
          };
      }
      return function() {
        return new w(this);
      };
    }, q = S + " Iterator", ie = !1, M = I.prototype, Z = M[_] || M["@@iterator"] || z && M[z], L = !y && Z || g(z), re = S === "Array" && M.entries || Z, N, D, K;
    if (re && (N = o(re.call(new I())), N !== Object.prototype && N.next && (!r && o(N) !== b && (s ? s(N, b) : i(N[_]) || l(N, _, B)), u(N, q, !0, !0), r && (d[q] = B))), m && z === O && Z && Z.name !== O && (!r && p ? c(M, "name", O) : (ie = !0, L = function() {
      return t(Z, this);
    })), z)
      if (D = {
        values: g(O),
        keys: x ? L : g(E),
        entries: g(C)
      }, F) for (K in D)
        (y || ie || !(K in M)) && l(M, K, D[K]);
      else e({ target: S, proto: !0, forced: y || ie }, D);
    return (!r || F) && M[_] !== L && l(M, _, L, { name: z }), d[S] = L, D;
  }, Cu;
}
var Au, eg;
function PO() {
  return eg || (eg = 1, Au = function(e, t) {
    return { value: e, done: t };
  }), Au;
}
var Ru, tg;
function T0() {
  if (tg) return Ru;
  tg = 1;
  var e = Jn(), t = AO(), r = ii(), n = ba(), i = Or().f, a = kO(), o = PO(), s = Vt(), u = Nt(), c = "Array Iterator", l = n.set, f = n.getterFor(c);
  Ru = a(Array, "Array", function(h, m) {
    l(this, {
      type: c,
      target: e(h),
      // target
      index: 0,
      // next index
      kind: m
      // kind
    });
  }, function() {
    var h = f(this), m = h.target, p = h.index++;
    if (!m || p >= m.length)
      return h.target = null, o(void 0, !0);
    switch (h.kind) {
      case "keys":
        return o(p, !1);
      case "values":
        return o(m[p], !1);
    }
    return o([p, m[p]], !1);
  }, "values");
  var d = r.Arguments = r.Array;
  if (t("keys"), t("values"), t("entries"), !s && u && d.name !== "values") try {
    i(d, "name", { value: "values" });
  } catch {
  }
  return Ru;
}
T0();
var rg = {}, Iu, ng;
function NO() {
  return ng || (ng = 1, Iu = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  }), Iu;
}
var ku, ig;
function MO() {
  if (ig) return ku;
  ig = 1;
  var e = ga(), t = e("span").classList, r = t && t.constructor && t.constructor.prototype;
  return ku = r === Object.prototype ? void 0 : r, ku;
}
var ag;
function DO() {
  if (ag) return rg;
  ag = 1;
  var e = ze(), t = NO(), r = MO(), n = T0(), i = ei(), a = Ea(), o = Je(), s = o("iterator"), u = n.values, c = function(f, d) {
    if (f) {
      if (f[s] !== u) try {
        i(f, s, u);
      } catch {
        f[s] = u;
      }
      if (a(f, d, !0), t[d]) {
        for (var h in n)
          if (f[h] !== n[h]) try {
            i(f, h, n[h]);
          } catch {
            f[h] = n[h];
          }
      }
    }
  };
  for (var l in t)
    c(e[l] && e[l].prototype, l);
  return c(r, "DOMTokenList"), rg;
}
DO();
function FO(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LO(e) {
  var t = FO(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function yC(e, t, r) {
  return (t = LO(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var sg = {}, Pu, og;
function BO() {
  if (og) return Pu;
  og = 1;
  var e = ur(), t = ma(), r = Qy(), n = nl(), i = TypeError, a = "Reduce of empty array with no initial value", o = function(s) {
    return function(u, c, l, f) {
      var d = t(u), h = r(d), m = n(d);
      if (e(c), m === 0 && l < 2) throw new i(a);
      var p = s ? m - 1 : 0, b = s ? -1 : 1;
      if (l < 2) for (; ; ) {
        if (p in h) {
          f = h[p], p += b;
          break;
        }
        if (p += b, s ? p < 0 : m <= p)
          throw new i(a);
      }
      for (; s ? p >= 0 : m > p; p += b) p in h && (f = c(f, h[p], p, d));
      return f;
    };
  };
  return Pu = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: o(!1),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: o(!0)
  }, Pu;
}
var Nu, ug;
function C0() {
  if (ug) return Nu;
  ug = 1;
  var e = qe();
  return Nu = function(t, r) {
    var n = [][t];
    return !!n && e(function() {
      n.call(null, r || function() {
        return 1;
      }, 1);
    });
  }, Nu;
}
var cg;
function jO() {
  if (cg) return sg;
  cg = 1;
  var e = ft(), t = BO().left, r = C0(), n = Xf(), i = wa(), a = !i && n > 79 && n < 83, o = a || !r("reduce");
  return e({ target: "Array", proto: !0, forced: o }, {
    reduce: function(u) {
      var c = arguments.length;
      return t(this, u, c, c > 1 ? arguments[1] : void 0);
    }
  }), sg;
}
jO();
var fg = {}, lg;
function zO() {
  if (lg) return fg;
  lg = 1;
  var e = ft(), t = xa(), r = va().f, n = mn(), i = Ht(), a = hl(), o = Mt(), s = dl(), u = Vt(), c = t("".slice), l = Math.min, f = s("endsWith"), d = !u && !f && !!function() {
    var h = r(String.prototype, "endsWith");
    return h && !h.writable;
  }();
  return e({ target: "String", proto: !0, forced: !d && !f }, {
    endsWith: function(m) {
      var p = i(o(this));
      a(m);
      var b = arguments.length > 1 ? arguments[1] : void 0, y = p.length, _ = b === void 0 ? y : l(n(b), y), E = i(m);
      return c(p, _ - E.length, _) === E;
    }
  }), fg;
}
zO();
var hg = {}, dg;
function qO() {
  if (dg) return hg;
  dg = 1;
  var e = et(), t = Ue(), r = cl(), n = ct(), i = dt(), a = Mt(), o = d0(), s = fl(), u = mn(), c = Ht(), l = pn(), f = ll(), d = x0(), h = qe(), m = d.UNSUPPORTED_Y, p = 4294967295, b = Math.min, y = t([].push), _ = t("".slice), E = !h(function() {
    var C = /(?:)/, B = C.exec;
    C.exec = function() {
      return B.apply(this, arguments);
    };
    var I = "ab".split(C);
    return I.length !== 2 || I[0] !== "a" || I[1] !== "b";
  }), O = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length;
  return r("split", function(C, B, I) {
    var S = "0".split(void 0, 0).length ? function(w, k) {
      return w === void 0 && k === 0 ? [] : e(B, this, w, k);
    } : B;
    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function(k, z) {
        var x = a(this), F = i(k) ? l(k, C) : void 0;
        return F ? e(F, k, x, z) : e(S, c(x), k, z);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(w, k) {
        var z = n(this), x = c(w);
        if (!O) {
          var F = I(S, z, x, k, S !== B);
          if (F.done) return F.value;
        }
        var g = o(z, RegExp), q = z.unicode, ie = (z.ignoreCase ? "i" : "") + (z.multiline ? "m" : "") + (z.unicode ? "u" : "") + (m ? "g" : "y"), M = new g(m ? "^(?:" + z.source + ")" : z, ie), Z = k === void 0 ? p : k >>> 0;
        if (Z === 0) return [];
        if (x.length === 0) return f(M, x) === null ? [x] : [];
        for (var L = 0, re = 0, N = []; re < x.length; ) {
          M.lastIndex = m ? 0 : re;
          var D = f(M, m ? _(x, re) : x), K;
          if (D === null || (K = b(u(M.lastIndex + (m ? re : 0)), x.length)) === L)
            re = s(x, re, q);
          else {
            if (y(N, _(x, L, re)), N.length === Z) return N;
            for (var ee = 1; ee <= D.length - 1; ee++)
              if (y(N, D[ee]), N.length === Z) return N;
            re = L = K;
          }
        }
        return y(N, _(x, L)), N;
      }
    ];
  }, O || !E, m), hg;
}
qO();
var An = { exports: {} }, Tr = { exports: {} }, UO = Tr.exports, pg;
function $O() {
  return pg || (pg = 1, (function() {
    var e, t, r, n, i, a;
    typeof performance < "u" && performance !== null && performance.now ? Tr.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (Tr.exports = function() {
      return (e() - i) / 1e6;
    }, t = process.hrtime, e = function() {
      var o;
      return o = t(), o[0] * 1e9 + o[1];
    }, n = e(), a = process.uptime() * 1e9, i = n - a) : Date.now ? (Tr.exports = function() {
      return Date.now() - r;
    }, r = Date.now()) : (Tr.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - r;
    }, r = (/* @__PURE__ */ new Date()).getTime());
  }).call(UO)), Tr.exports;
}
var mg;
function WO() {
  if (mg) return An.exports;
  mg = 1;
  for (var e = $O(), t = typeof window > "u" ? Rr : window, r = ["moz", "webkit"], n = "AnimationFrame", i = t["request" + n], a = t["cancel" + n] || t["cancelRequest" + n], o = 0; !i && o < r.length; o++)
    i = t[r[o] + "Request" + n], a = t[r[o] + "Cancel" + n] || t[r[o] + "CancelRequest" + n];
  if (!i || !a) {
    var s = 0, u = 0, c = [], l = 1e3 / 60;
    i = function(f) {
      if (c.length === 0) {
        var d = e(), h = Math.max(0, l - (d - s));
        s = h + d, setTimeout(function() {
          var m = c.slice(0);
          c.length = 0;
          for (var p = 0; p < m.length; p++)
            if (!m[p].cancelled)
              try {
                m[p].callback(s);
              } catch (b) {
                setTimeout(function() {
                  throw b;
                }, 0);
              }
        }, Math.round(h));
      }
      return c.push({
        handle: ++u,
        callback: f,
        cancelled: !1
      }), u;
    }, a = function(f) {
      for (var d = 0; d < c.length; d++)
        c[d].handle === f && (c[d].cancelled = !0);
    };
  }
  return An.exports = function(f) {
    return i.call(t, f);
  }, An.exports.cancel = function() {
    a.apply(t, arguments);
  }, An.exports.polyfill = function(f) {
    f || (f = t), f.requestAnimationFrame = i, f.cancelAnimationFrame = a;
  }, An.exports;
}
var GO = WO();
const bC = /* @__PURE__ */ hn(GO);
var gg = {}, Mu, vg;
function A0() {
  return vg || (vg = 1, Mu = `	
\v\f\r                　\u2028\u2029\uFEFF`), Mu;
}
var Du, yg;
function VO() {
  if (yg) return Du;
  yg = 1;
  var e = Ue(), t = Mt(), r = Ht(), n = A0(), i = e("".replace), a = RegExp("^[" + n + "]+"), o = RegExp("(^|[^" + n + "])[" + n + "]+$"), s = function(u) {
    return function(c) {
      var l = r(t(c));
      return u & 1 && (l = i(l, a, "")), u & 2 && (l = i(l, o, "$1")), l;
    };
  };
  return Du = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: s(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: s(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: s(3)
  }, Du;
}
var Fu, bg;
function HO() {
  if (bg) return Fu;
  bg = 1;
  var e = ya().PROPER, t = qe(), r = A0(), n = "​᠎";
  return Fu = function(i) {
    return t(function() {
      return !!r[i]() || n[i]() !== n || e && r[i].name !== i;
    });
  }, Fu;
}
var _g;
function KO() {
  if (_g) return gg;
  _g = 1;
  var e = ft(), t = VO().trim, r = HO();
  return e({ target: "String", proto: !0, forced: r("trim") }, {
    trim: function() {
      return t(this);
    }
  }), gg;
}
KO();
var Lu, wg;
function YO() {
  return wg || (wg = 1, Lu = function(e) {
    this.ok = !1, this.alpha = 1, e.charAt(0) == "#" && (e = e.substr(1, 6)), e = e.replace(/ /g, ""), e = e.toLowerCase();
    var t = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "ff0000",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32"
    };
    e = t[e] || e;
    for (var r = [
      {
        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
        process: function(u) {
          return [
            parseInt(u[1]),
            parseInt(u[2]),
            parseInt(u[3]),
            parseFloat(u[4])
          ];
        }
      },
      {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function(u) {
          return [
            parseInt(u[1]),
            parseInt(u[2]),
            parseInt(u[3])
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        example: ["#00ff00", "336699"],
        process: function(u) {
          return [
            parseInt(u[1], 16),
            parseInt(u[2], 16),
            parseInt(u[3], 16)
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        example: ["#fb0", "f0f"],
        process: function(u) {
          return [
            parseInt(u[1] + u[1], 16),
            parseInt(u[2] + u[2], 16),
            parseInt(u[3] + u[3], 16)
          ];
        }
      }
    ], n = 0; n < r.length; n++) {
      var i = r[n].re, a = r[n].process, o = i.exec(e);
      if (o) {
        var s = a(o);
        this.r = s[0], this.g = s[1], this.b = s[2], s.length > 3 && (this.alpha = s[3]), this.ok = !0;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha, this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    }, this.toHex = function() {
      var u = this.r.toString(16), c = this.g.toString(16), l = this.b.toString(16);
      return u.length == 1 && (u = "0" + u), c.length == 1 && (c = "0" + c), l.length == 1 && (l = "0" + l), "#" + u + c + l;
    }, this.getHelpXML = function() {
      for (var u = new Array(), c = 0; c < r.length; c++)
        for (var l = r[c].example, f = 0; f < l.length; f++)
          u[u.length] = l[f];
      for (var d in t)
        u[u.length] = d;
      var h = document.createElement("ul");
      h.setAttribute("id", "rgbcolor-examples");
      for (var c = 0; c < u.length; c++)
        try {
          var m = document.createElement("li"), p = new RGBColor(u[c]), b = document.createElement("div");
          b.style.cssText = "margin: 3px; border: 1px solid black; background:" + p.toHex() + "; color:" + p.toHex(), b.appendChild(document.createTextNode("test"));
          var y = document.createTextNode(
            " " + u[c] + " -> " + p.toRGB() + " -> " + p.toHex()
          );
          m.appendChild(b), m.appendChild(y), h.appendChild(m);
        } catch {
        }
      return h;
    };
  }), Lu;
}
var XO = YO();
const _C = /* @__PURE__ */ hn(XO);
var Eg = {}, xg;
function ZO() {
  if (xg) return Eg;
  xg = 1;
  var e = ft(), t = xa(), r = u0().indexOf, n = C0(), i = t([].indexOf), a = !!i && 1 / i([1], 1, -0) < 0, o = a || !n("indexOf");
  return e({ target: "Array", proto: !0, forced: o }, {
    indexOf: function(u) {
      var c = arguments.length > 1 ? arguments[1] : void 0;
      return a ? i(this, u, c) || 0 : r(this, u, c);
    }
  }), Eg;
}
ZO();
var Sg = {}, Og;
function JO() {
  if (Og) return Sg;
  Og = 1;
  var e = ft(), t = Ue(), r = hl(), n = Mt(), i = Ht(), a = dl(), o = t("".indexOf);
  return e({ target: "String", proto: !0, forced: !a("includes") }, {
    includes: function(u) {
      return !!~o(
        i(n(this)),
        i(r(u)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }), Sg;
}
JO();
var Tg = {}, Bu, Cg;
function QO() {
  if (Cg) return Bu;
  Cg = 1;
  var e = $r();
  return Bu = Array.isArray || function(r) {
    return e(r) === "Array";
  }, Bu;
}
var Ag;
function eT() {
  if (Ag) return Tg;
  Ag = 1;
  var e = ft(), t = Ue(), r = QO(), n = t([].reverse), i = [1, 2];
  return e({ target: "Array", proto: !0, forced: String(i) === String(i.reverse()) }, {
    reverse: function() {
      return r(this) && (this.length = this.length), n(this);
    }
  }), Tg;
}
eT();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var R0 = function(e, t) {
  return (R0 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  })(e, t);
};
function I0(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  R0(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function tT(e) {
  var t = "";
  Array.isArray(e) || (e = [e]);
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (n.type === se.CLOSE_PATH) t += "z";
    else if (n.type === se.HORIZ_LINE_TO) t += (n.relative ? "h" : "H") + n.x;
    else if (n.type === se.VERT_LINE_TO) t += (n.relative ? "v" : "V") + n.y;
    else if (n.type === se.MOVE_TO) t += (n.relative ? "m" : "M") + n.x + " " + n.y;
    else if (n.type === se.LINE_TO) t += (n.relative ? "l" : "L") + n.x + " " + n.y;
    else if (n.type === se.CURVE_TO) t += (n.relative ? "c" : "C") + n.x1 + " " + n.y1 + " " + n.x2 + " " + n.y2 + " " + n.x + " " + n.y;
    else if (n.type === se.SMOOTH_CURVE_TO) t += (n.relative ? "s" : "S") + n.x2 + " " + n.y2 + " " + n.x + " " + n.y;
    else if (n.type === se.QUAD_TO) t += (n.relative ? "q" : "Q") + n.x1 + " " + n.y1 + " " + n.x + " " + n.y;
    else if (n.type === se.SMOOTH_QUAD_TO) t += (n.relative ? "t" : "T") + n.x + " " + n.y;
    else {
      if (n.type !== se.ARC) throw new Error('Unexpected command type "' + n.type + '" at index ' + r + ".");
      t += (n.relative ? "a" : "A") + n.rX + " " + n.rY + " " + n.xRot + " " + +n.lArcFlag + " " + +n.sweepFlag + " " + n.x + " " + n.y;
    }
  }
  return t;
}
function Fc(e, t) {
  var r = e[0], n = e[1];
  return [r * Math.cos(t) - n * Math.sin(t), r * Math.sin(t) + n * Math.cos(t)];
}
function Tt() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = 0; r < e.length; r++) if (typeof e[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof e[r] + " == typeof " + e[r]);
  return !0;
}
var dr = Math.PI;
function ju(e, t, r) {
  e.lArcFlag = e.lArcFlag === 0 ? 0 : 1, e.sweepFlag = e.sweepFlag === 0 ? 0 : 1;
  var n = e.rX, i = e.rY, a = e.x, o = e.y;
  n = Math.abs(e.rX), i = Math.abs(e.rY);
  var s = Fc([(t - a) / 2, (r - o) / 2], -e.xRot / 180 * dr), u = s[0], c = s[1], l = Math.pow(u, 2) / Math.pow(n, 2) + Math.pow(c, 2) / Math.pow(i, 2);
  1 < l && (n *= Math.sqrt(l), i *= Math.sqrt(l)), e.rX = n, e.rY = i;
  var f = Math.pow(n, 2) * Math.pow(c, 2) + Math.pow(i, 2) * Math.pow(u, 2), d = (e.lArcFlag !== e.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - f) / f)), h = n * c / i * d, m = -i * u / n * d, p = Fc([h, m], e.xRot / 180 * dr);
  e.cX = p[0] + (t + a) / 2, e.cY = p[1] + (r + o) / 2, e.phi1 = Math.atan2((c - m) / i, (u - h) / n), e.phi2 = Math.atan2((-c - m) / i, (-u - h) / n), e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * dr), e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * dr), e.phi1 *= 180 / dr, e.phi2 *= 180 / dr;
}
function Rg(e, t, r) {
  Tt(e, t, r);
  var n = e * e + t * t - r * r;
  if (0 > n) return [];
  if (n === 0) return [[e * r / (e * e + t * t), t * r / (e * e + t * t)]];
  var i = Math.sqrt(n);
  return [[(e * r + t * i) / (e * e + t * t), (t * r - e * i) / (e * e + t * t)], [(e * r - t * i) / (e * e + t * t), (t * r + e * i) / (e * e + t * t)]];
}
var We, Qt = Math.PI / 180;
function Ig(e, t, r) {
  return (1 - r) * e + r * t;
}
function kg(e, t, r, n) {
  return e + Math.cos(n / 180 * dr) * t + Math.sin(n / 180 * dr) * r;
}
function Pg(e, t, r, n) {
  var i = 1e-6, a = t - e, o = r - t, s = 3 * a + 3 * (n - r) - 6 * o, u = 6 * (o - a), c = 3 * a;
  return Math.abs(s) < i ? [-c / u] : function(l, f, d) {
    var h = l * l / 4 - f;
    if (h < -1e-6) return [];
    if (h <= d) return [-l / 2];
    var m = Math.sqrt(h);
    return [-l / 2 - m, -l / 2 + m];
  }(u / s, c / s, i);
}
function Ng(e, t, r, n, i) {
  var a = 1 - i;
  return e * (a * a * a) + t * (3 * a * a * i) + r * (3 * a * i * i) + n * (i * i * i);
}
(function(e) {
  function t() {
    return i(function(s, u, c) {
      return s.relative && (s.x1 !== void 0 && (s.x1 += u), s.y1 !== void 0 && (s.y1 += c), s.x2 !== void 0 && (s.x2 += u), s.y2 !== void 0 && (s.y2 += c), s.x !== void 0 && (s.x += u), s.y !== void 0 && (s.y += c), s.relative = !1), s;
    });
  }
  function r() {
    var s = NaN, u = NaN, c = NaN, l = NaN;
    return i(function(f, d, h) {
      return f.type & se.SMOOTH_CURVE_TO && (f.type = se.CURVE_TO, s = isNaN(s) ? d : s, u = isNaN(u) ? h : u, f.x1 = f.relative ? d - s : 2 * d - s, f.y1 = f.relative ? h - u : 2 * h - u), f.type & se.CURVE_TO ? (s = f.relative ? d + f.x2 : f.x2, u = f.relative ? h + f.y2 : f.y2) : (s = NaN, u = NaN), f.type & se.SMOOTH_QUAD_TO && (f.type = se.QUAD_TO, c = isNaN(c) ? d : c, l = isNaN(l) ? h : l, f.x1 = f.relative ? d - c : 2 * d - c, f.y1 = f.relative ? h - l : 2 * h - l), f.type & se.QUAD_TO ? (c = f.relative ? d + f.x1 : f.x1, l = f.relative ? h + f.y1 : f.y1) : (c = NaN, l = NaN), f;
    });
  }
  function n() {
    var s = NaN, u = NaN;
    return i(function(c, l, f) {
      if (c.type & se.SMOOTH_QUAD_TO && (c.type = se.QUAD_TO, s = isNaN(s) ? l : s, u = isNaN(u) ? f : u, c.x1 = c.relative ? l - s : 2 * l - s, c.y1 = c.relative ? f - u : 2 * f - u), c.type & se.QUAD_TO) {
        s = c.relative ? l + c.x1 : c.x1, u = c.relative ? f + c.y1 : c.y1;
        var d = c.x1, h = c.y1;
        c.type = se.CURVE_TO, c.x1 = ((c.relative ? 0 : l) + 2 * d) / 3, c.y1 = ((c.relative ? 0 : f) + 2 * h) / 3, c.x2 = (c.x + 2 * d) / 3, c.y2 = (c.y + 2 * h) / 3;
      } else s = NaN, u = NaN;
      return c;
    });
  }
  function i(s) {
    var u = 0, c = 0, l = NaN, f = NaN;
    return function(d) {
      if (isNaN(l) && !(d.type & se.MOVE_TO)) throw new Error("path must start with moveto");
      var h = s(d, u, c, l, f);
      return d.type & se.CLOSE_PATH && (u = l, c = f), d.x !== void 0 && (u = d.relative ? u + d.x : d.x), d.y !== void 0 && (c = d.relative ? c + d.y : d.y), d.type & se.MOVE_TO && (l = u, f = c), h;
    };
  }
  function a(s, u, c, l, f, d) {
    return Tt(s, u, c, l, f, d), i(function(h, m, p, b) {
      var y = h.x1, _ = h.x2, E = h.relative && !isNaN(b), O = h.x !== void 0 ? h.x : E ? 0 : m, C = h.y !== void 0 ? h.y : E ? 0 : p;
      function B(D) {
        return D * D;
      }
      h.type & se.HORIZ_LINE_TO && u !== 0 && (h.type = se.LINE_TO, h.y = h.relative ? 0 : p), h.type & se.VERT_LINE_TO && c !== 0 && (h.type = se.LINE_TO, h.x = h.relative ? 0 : m), h.x !== void 0 && (h.x = h.x * s + C * c + (E ? 0 : f)), h.y !== void 0 && (h.y = O * u + h.y * l + (E ? 0 : d)), h.x1 !== void 0 && (h.x1 = h.x1 * s + h.y1 * c + (E ? 0 : f)), h.y1 !== void 0 && (h.y1 = y * u + h.y1 * l + (E ? 0 : d)), h.x2 !== void 0 && (h.x2 = h.x2 * s + h.y2 * c + (E ? 0 : f)), h.y2 !== void 0 && (h.y2 = _ * u + h.y2 * l + (E ? 0 : d));
      var I = s * l - u * c;
      if (h.xRot !== void 0 && (s !== 1 || u !== 0 || c !== 0 || l !== 1)) if (I === 0) delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag, h.type = se.LINE_TO;
      else {
        var S = h.xRot * Math.PI / 180, w = Math.sin(S), k = Math.cos(S), z = 1 / B(h.rX), x = 1 / B(h.rY), F = B(k) * z + B(w) * x, g = 2 * w * k * (z - x), q = B(w) * z + B(k) * x, ie = F * l * l - g * u * l + q * u * u, M = g * (s * l + u * c) - 2 * (F * c * l + q * s * u), Z = F * c * c - g * s * c + q * s * s, L = (Math.atan2(M, ie - Z) + Math.PI) % Math.PI / 2, re = Math.sin(L), N = Math.cos(L);
        h.rX = Math.abs(I) / Math.sqrt(ie * B(N) + M * re * N + Z * B(re)), h.rY = Math.abs(I) / Math.sqrt(ie * B(re) - M * re * N + Z * B(N)), h.xRot = 180 * L / Math.PI;
      }
      return h.sweepFlag !== void 0 && 0 > I && (h.sweepFlag = +!h.sweepFlag), h;
    });
  }
  function o() {
    return function(s) {
      var u = {};
      for (var c in s) u[c] = s[c];
      return u;
    };
  }
  e.ROUND = function(s) {
    function u(c) {
      return Math.round(c * s) / s;
    }
    return s === void 0 && (s = 1e13), Tt(s), function(c) {
      return c.x1 !== void 0 && (c.x1 = u(c.x1)), c.y1 !== void 0 && (c.y1 = u(c.y1)), c.x2 !== void 0 && (c.x2 = u(c.x2)), c.y2 !== void 0 && (c.y2 = u(c.y2)), c.x !== void 0 && (c.x = u(c.x)), c.y !== void 0 && (c.y = u(c.y)), c.rX !== void 0 && (c.rX = u(c.rX)), c.rY !== void 0 && (c.rY = u(c.rY)), c;
    };
  }, e.TO_ABS = t, e.TO_REL = function() {
    return i(function(s, u, c) {
      return s.relative || (s.x1 !== void 0 && (s.x1 -= u), s.y1 !== void 0 && (s.y1 -= c), s.x2 !== void 0 && (s.x2 -= u), s.y2 !== void 0 && (s.y2 -= c), s.x !== void 0 && (s.x -= u), s.y !== void 0 && (s.y -= c), s.relative = !0), s;
    });
  }, e.NORMALIZE_HVZ = function(s, u, c) {
    return s === void 0 && (s = !0), u === void 0 && (u = !0), c === void 0 && (c = !0), i(function(l, f, d, h, m) {
      if (isNaN(h) && !(l.type & se.MOVE_TO)) throw new Error("path must start with moveto");
      return u && l.type & se.HORIZ_LINE_TO && (l.type = se.LINE_TO, l.y = l.relative ? 0 : d), c && l.type & se.VERT_LINE_TO && (l.type = se.LINE_TO, l.x = l.relative ? 0 : f), s && l.type & se.CLOSE_PATH && (l.type = se.LINE_TO, l.x = l.relative ? h - f : h, l.y = l.relative ? m - d : m), l.type & se.ARC && (l.rX === 0 || l.rY === 0) && (l.type = se.LINE_TO, delete l.rX, delete l.rY, delete l.xRot, delete l.lArcFlag, delete l.sweepFlag), l;
    });
  }, e.NORMALIZE_ST = r, e.QT_TO_C = n, e.INFO = i, e.SANITIZE = function(s) {
    s === void 0 && (s = 0), Tt(s);
    var u = NaN, c = NaN, l = NaN, f = NaN;
    return i(function(d, h, m, p, b) {
      var y = Math.abs, _ = !1, E = 0, O = 0;
      if (d.type & se.SMOOTH_CURVE_TO && (E = isNaN(u) ? 0 : h - u, O = isNaN(c) ? 0 : m - c), d.type & (se.CURVE_TO | se.SMOOTH_CURVE_TO) ? (u = d.relative ? h + d.x2 : d.x2, c = d.relative ? m + d.y2 : d.y2) : (u = NaN, c = NaN), d.type & se.SMOOTH_QUAD_TO ? (l = isNaN(l) ? h : 2 * h - l, f = isNaN(f) ? m : 2 * m - f) : d.type & se.QUAD_TO ? (l = d.relative ? h + d.x1 : d.x1, f = d.relative ? m + d.y1 : d.y2) : (l = NaN, f = NaN), d.type & se.LINE_COMMANDS || d.type & se.ARC && (d.rX === 0 || d.rY === 0 || !d.lArcFlag) || d.type & se.CURVE_TO || d.type & se.SMOOTH_CURVE_TO || d.type & se.QUAD_TO || d.type & se.SMOOTH_QUAD_TO) {
        var C = d.x === void 0 ? 0 : d.relative ? d.x : d.x - h, B = d.y === void 0 ? 0 : d.relative ? d.y : d.y - m;
        E = isNaN(l) ? d.x1 === void 0 ? E : d.relative ? d.x : d.x1 - h : l - h, O = isNaN(f) ? d.y1 === void 0 ? O : d.relative ? d.y : d.y1 - m : f - m;
        var I = d.x2 === void 0 ? 0 : d.relative ? d.x : d.x2 - h, S = d.y2 === void 0 ? 0 : d.relative ? d.y : d.y2 - m;
        y(C) <= s && y(B) <= s && y(E) <= s && y(O) <= s && y(I) <= s && y(S) <= s && (_ = !0);
      }
      return d.type & se.CLOSE_PATH && y(h - p) <= s && y(m - b) <= s && (_ = !0), _ ? [] : d;
    });
  }, e.MATRIX = a, e.ROTATE = function(s, u, c) {
    u === void 0 && (u = 0), c === void 0 && (c = 0), Tt(s, u, c);
    var l = Math.sin(s), f = Math.cos(s);
    return a(f, l, -l, f, u - u * f + c * l, c - u * l - c * f);
  }, e.TRANSLATE = function(s, u) {
    return u === void 0 && (u = 0), Tt(s, u), a(1, 0, 0, 1, s, u);
  }, e.SCALE = function(s, u) {
    return u === void 0 && (u = s), Tt(s, u), a(s, 0, 0, u, 0, 0);
  }, e.SKEW_X = function(s) {
    return Tt(s), a(1, 0, Math.atan(s), 1, 0, 0);
  }, e.SKEW_Y = function(s) {
    return Tt(s), a(1, Math.atan(s), 0, 1, 0, 0);
  }, e.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), Tt(s), a(-1, 0, 0, 1, s, 0);
  }, e.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), Tt(s), a(1, 0, 0, -1, 0, s);
  }, e.A_TO_C = function() {
    return i(function(s, u, c) {
      return se.ARC === s.type ? function(l, f, d) {
        var h, m, p, b;
        l.cX || ju(l, f, d);
        for (var y = Math.min(l.phi1, l.phi2), _ = Math.max(l.phi1, l.phi2) - y, E = Math.ceil(_ / 90), O = new Array(E), C = f, B = d, I = 0; I < E; I++) {
          var S = Ig(l.phi1, l.phi2, I / E), w = Ig(l.phi1, l.phi2, (I + 1) / E), k = w - S, z = 4 / 3 * Math.tan(k * Qt / 4), x = [Math.cos(S * Qt) - z * Math.sin(S * Qt), Math.sin(S * Qt) + z * Math.cos(S * Qt)], F = x[0], g = x[1], q = [Math.cos(w * Qt), Math.sin(w * Qt)], ie = q[0], M = q[1], Z = [ie + z * Math.sin(w * Qt), M - z * Math.cos(w * Qt)], L = Z[0], re = Z[1];
          O[I] = { relative: l.relative, type: se.CURVE_TO };
          var N = function(D, K) {
            var ee = Fc([D * l.rX, K * l.rY], l.xRot), H = ee[0], pe = ee[1];
            return [l.cX + H, l.cY + pe];
          };
          h = N(F, g), O[I].x1 = h[0], O[I].y1 = h[1], m = N(L, re), O[I].x2 = m[0], O[I].y2 = m[1], p = N(ie, M), O[I].x = p[0], O[I].y = p[1], l.relative && (O[I].x1 -= C, O[I].y1 -= B, O[I].x2 -= C, O[I].y2 -= B, O[I].x -= C, O[I].y -= B), C = (b = [O[I].x, O[I].y])[0], B = b[1];
        }
        return O;
      }(s, s.relative ? 0 : u, s.relative ? 0 : c) : s;
    });
  }, e.ANNOTATE_ARCS = function() {
    return i(function(s, u, c) {
      return s.relative && (u = 0, c = 0), se.ARC === s.type && ju(s, u, c), s;
    });
  }, e.CLONE = o, e.CALCULATE_BOUNDS = function() {
    var s = function(d) {
      var h = {};
      for (var m in d) h[m] = d[m];
      return h;
    }, u = t(), c = n(), l = r(), f = i(function(d, h, m) {
      var p = l(c(u(s(d))));
      function b(re) {
        re > f.maxX && (f.maxX = re), re < f.minX && (f.minX = re);
      }
      function y(re) {
        re > f.maxY && (f.maxY = re), re < f.minY && (f.minY = re);
      }
      if (p.type & se.DRAWING_COMMANDS && (b(h), y(m)), p.type & se.HORIZ_LINE_TO && b(p.x), p.type & se.VERT_LINE_TO && y(p.y), p.type & se.LINE_TO && (b(p.x), y(p.y)), p.type & se.CURVE_TO) {
        b(p.x), y(p.y);
        for (var _ = 0, E = Pg(h, p.x1, p.x2, p.x); _ < E.length; _++)
          0 < (L = E[_]) && 1 > L && b(Ng(h, p.x1, p.x2, p.x, L));
        for (var O = 0, C = Pg(m, p.y1, p.y2, p.y); O < C.length; O++)
          0 < (L = C[O]) && 1 > L && y(Ng(m, p.y1, p.y2, p.y, L));
      }
      if (p.type & se.ARC) {
        b(p.x), y(p.y), ju(p, h, m);
        for (var B = p.xRot / 180 * Math.PI, I = Math.cos(B) * p.rX, S = Math.sin(B) * p.rX, w = -Math.sin(B) * p.rY, k = Math.cos(B) * p.rY, z = p.phi1 < p.phi2 ? [p.phi1, p.phi2] : -180 > p.phi2 ? [p.phi2 + 360, p.phi1 + 360] : [p.phi2, p.phi1], x = z[0], F = z[1], g = function(re) {
          var N = re[0], D = re[1], K = 180 * Math.atan2(D, N) / Math.PI;
          return K < x ? K + 360 : K;
        }, q = 0, ie = Rg(w, -I, 0).map(g); q < ie.length; q++)
          (L = ie[q]) > x && L < F && b(kg(p.cX, I, w, L));
        for (var M = 0, Z = Rg(k, -S, 0).map(g); M < Z.length; M++) {
          var L;
          (L = Z[M]) > x && L < F && y(kg(p.cY, S, k, L));
        }
      }
      return d;
    });
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(We || (We = {}));
var Ot, k0 = function() {
  function e() {
  }
  return e.prototype.round = function(t) {
    return this.transform(We.ROUND(t));
  }, e.prototype.toAbs = function() {
    return this.transform(We.TO_ABS());
  }, e.prototype.toRel = function() {
    return this.transform(We.TO_REL());
  }, e.prototype.normalizeHVZ = function(t, r, n) {
    return this.transform(We.NORMALIZE_HVZ(t, r, n));
  }, e.prototype.normalizeST = function() {
    return this.transform(We.NORMALIZE_ST());
  }, e.prototype.qtToC = function() {
    return this.transform(We.QT_TO_C());
  }, e.prototype.aToC = function() {
    return this.transform(We.A_TO_C());
  }, e.prototype.sanitize = function(t) {
    return this.transform(We.SANITIZE(t));
  }, e.prototype.translate = function(t, r) {
    return this.transform(We.TRANSLATE(t, r));
  }, e.prototype.scale = function(t, r) {
    return this.transform(We.SCALE(t, r));
  }, e.prototype.rotate = function(t, r, n) {
    return this.transform(We.ROTATE(t, r, n));
  }, e.prototype.matrix = function(t, r, n, i, a, o) {
    return this.transform(We.MATRIX(t, r, n, i, a, o));
  }, e.prototype.skewX = function(t) {
    return this.transform(We.SKEW_X(t));
  }, e.prototype.skewY = function(t) {
    return this.transform(We.SKEW_Y(t));
  }, e.prototype.xSymmetry = function(t) {
    return this.transform(We.X_AXIS_SYMMETRY(t));
  }, e.prototype.ySymmetry = function(t) {
    return this.transform(We.Y_AXIS_SYMMETRY(t));
  }, e.prototype.annotateArcs = function() {
    return this.transform(We.ANNOTATE_ARCS());
  }, e;
}(), rT = function(e) {
  return e === " " || e === "	" || e === "\r" || e === `
`;
}, Mg = function(e) {
  return 48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57;
}, nT = function(e) {
  function t() {
    var r = e.call(this) || this;
    return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
  }
  return I0(t, e), t.prototype.finish = function(r) {
    if (r === void 0 && (r = []), this.parse(" ", r), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return r;
  }, t.prototype.parse = function(r, n) {
    var i = this;
    n === void 0 && (n = []);
    for (var a = function(f) {
      n.push(f), i.curArgs.length = 0, i.canParseCommandOrComma = !0;
    }, o = 0; o < r.length; o++) {
      var s = r[o], u = !(this.curCommandType !== se.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), c = Mg(s) && (this.curNumber === "0" && s === "0" || u);
      if (!Mg(s) || c) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var l = Number(this.curNumber);
          if (isNaN(l)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === se.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > l) throw new SyntaxError('Expected positive number, got "' + l + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(l), this.curArgs.length === iT[this.curCommandType] && (se.HORIZ_LINE_TO === this.curCommandType ? a({ type: se.HORIZ_LINE_TO, relative: this.curCommandRelative, x: l }) : se.VERT_LINE_TO === this.curCommandType ? a({ type: se.VERT_LINE_TO, relative: this.curCommandRelative, y: l }) : this.curCommandType === se.MOVE_TO || this.curCommandType === se.LINE_TO || this.curCommandType === se.SMOOTH_QUAD_TO ? (a({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), se.MOVE_TO === this.curCommandType && (this.curCommandType = se.LINE_TO)) : this.curCommandType === se.CURVE_TO ? a({ type: se.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === se.SMOOTH_CURVE_TO ? a({ type: se.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.QUAD_TO ? a({ type: se.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.ARC && a({ type: se.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!rT(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
        else if (s !== "+" && s !== "-" && s !== ".") if (c) this.curNumber = s, this.curNumberHasDecimal = !1;
        else {
          if (this.curArgs.length !== 0) throw new SyntaxError("Unterminated command at index " + o + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = !1, s !== "z" && s !== "Z") if (s === "h" || s === "H") this.curCommandType = se.HORIZ_LINE_TO, this.curCommandRelative = s === "h";
          else if (s === "v" || s === "V") this.curCommandType = se.VERT_LINE_TO, this.curCommandRelative = s === "v";
          else if (s === "m" || s === "M") this.curCommandType = se.MOVE_TO, this.curCommandRelative = s === "m";
          else if (s === "l" || s === "L") this.curCommandType = se.LINE_TO, this.curCommandRelative = s === "l";
          else if (s === "c" || s === "C") this.curCommandType = se.CURVE_TO, this.curCommandRelative = s === "c";
          else if (s === "s" || s === "S") this.curCommandType = se.SMOOTH_CURVE_TO, this.curCommandRelative = s === "s";
          else if (s === "q" || s === "Q") this.curCommandType = se.QUAD_TO, this.curCommandRelative = s === "q";
          else if (s === "t" || s === "T") this.curCommandType = se.SMOOTH_QUAD_TO, this.curCommandRelative = s === "t";
          else {
            if (s !== "a" && s !== "A") throw new SyntaxError('Unexpected character "' + s + '" at index ' + o + ".");
            this.curCommandType = se.ARC, this.curCommandRelative = s === "a";
          }
          else n.push({ type: se.CLOSE_PATH }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
        }
        else this.curNumber = s, this.curNumberHasDecimal = s === ".";
      } else this.curNumber += s, this.curNumberHasDecimal = !0;
      else this.curNumber += s;
      else this.curNumber += s, this.curNumberHasExp = !0;
      else this.curNumber += s, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return n;
  }, t.prototype.transform = function(r) {
    return Object.create(this, { parse: { value: function(n, i) {
      i === void 0 && (i = []);
      for (var a = 0, o = Object.getPrototypeOf(this).parse.call(this, n); a < o.length; a++) {
        var s = o[a], u = r(s);
        Array.isArray(u) ? i.push.apply(i, u) : i.push(u);
      }
      return i;
    } } });
  }, t;
}(k0), se = function(e) {
  function t(r) {
    var n = e.call(this) || this;
    return n.commands = typeof r == "string" ? t.parse(r) : r, n;
  }
  return I0(t, e), t.prototype.encode = function() {
    return t.encode(this.commands);
  }, t.prototype.getBounds = function() {
    var r = We.CALCULATE_BOUNDS();
    return this.transform(r), r;
  }, t.prototype.transform = function(r) {
    for (var n = [], i = 0, a = this.commands; i < a.length; i++) {
      var o = r(a[i]);
      Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
    }
    return this.commands = n, this;
  }, t.encode = function(r) {
    return tT(r);
  }, t.parse = function(r) {
    var n = new nT(), i = [];
    return n.parse(r, i), n.finish(i), i;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(k0), iT = ((Ot = {})[se.MOVE_TO] = 2, Ot[se.LINE_TO] = 2, Ot[se.HORIZ_LINE_TO] = 1, Ot[se.VERT_LINE_TO] = 1, Ot[se.CLOSE_PATH] = 0, Ot[se.QUAD_TO] = 4, Ot[se.SMOOTH_QUAD_TO] = 2, Ot[se.CURVE_TO] = 6, Ot[se.SMOOTH_CURVE_TO] = 4, Ot[se.ARC] = 7, Ot), Dg = {}, zu, Fg;
function aT() {
  if (Fg) return zu;
  Fg = 1;
  var e = et(), t = Dt(), r = da(), n = E0(), i = RegExp.prototype;
  return zu = function(a) {
    var o = a.flags;
    return o === void 0 && !("flags" in i) && !t(a, "flags") && r(i, a) ? e(n, a) : o;
  }, zu;
}
var Lg;
function sT() {
  if (Lg) return Dg;
  Lg = 1;
  var e = ya().PROPER, t = Gr(), r = ct(), n = Ht(), i = qe(), a = aT(), o = "toString", s = RegExp.prototype, u = s[o], c = i(function() {
    return u.call({ source: "a", flags: "b" }) !== "/a/b";
  }), l = e && u.name !== o;
  return (c || l) && t(s, o, function() {
    var d = r(this), h = n(d.source), m = n(a(d));
    return "/" + h + "/" + m;
  }, { unsafe: !0 }), Dg;
}
sT();
const un = Math.min, kr = Math.max, zi = Math.round, bi = Math.floor, $t = (e) => ({
  x: e,
  y: e
}), oT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, uT = {
  start: "end",
  end: "start"
};
function Lc(e, t, r) {
  return kr(e, un(t, r));
}
function ai(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Br(e) {
  return e.split("-")[0];
}
function si(e) {
  return e.split("-")[1];
}
function P0(e) {
  return e === "x" ? "y" : "x";
}
function pl(e) {
  return e === "y" ? "height" : "width";
}
function pr(e) {
  return ["top", "bottom"].includes(Br(e)) ? "y" : "x";
}
function ml(e) {
  return P0(pr(e));
}
function cT(e, t, r) {
  r === void 0 && (r = !1);
  const n = si(e), i = ml(e), a = pl(i);
  let o = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = qi(o)), [o, qi(o)];
}
function fT(e) {
  const t = qi(e);
  return [Bc(e), t, Bc(t)];
}
function Bc(e) {
  return e.replace(/start|end/g, (t) => uT[t]);
}
function lT(e, t, r) {
  const n = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? a : o;
    default:
      return [];
  }
}
function hT(e, t, r, n) {
  const i = si(e);
  let a = lT(Br(e), r === "start", n);
  return i && (a = a.map((o) => o + "-" + i), t && (a = a.concat(a.map(Bc)))), a;
}
function qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => oT[t]);
}
function dT(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function N0(e) {
  return typeof e != "number" ? dT(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ui(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: i
  } = e;
  return {
    width: n,
    height: i,
    top: r,
    left: t,
    right: t + n,
    bottom: r + i,
    x: t,
    y: r
  };
}
function Bg(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = pr(t), o = ml(t), s = pl(o), u = Br(t), c = a === "y", l = n.x + n.width / 2 - i.width / 2, f = n.y + n.height / 2 - i.height / 2, d = n[s] / 2 - i[s] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: l,
        y: n.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: l,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: n.x - i.width,
        y: f
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (si(t)) {
    case "start":
      h[o] -= d * (r && c ? -1 : 1);
      break;
    case "end":
      h[o] += d * (r && c ? -1 : 1);
      break;
  }
  return h;
}
const pT = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: o
  } = r, s = a.filter(Boolean), u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: l,
    y: f
  } = Bg(c, n, u), d = n, h = {}, m = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: b,
      fn: y
    } = s[p], {
      x: _,
      y: E,
      data: O,
      reset: C
    } = await y({
      x: l,
      y: f,
      initialPlacement: n,
      placement: d,
      strategy: i,
      middlewareData: h,
      rects: c,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = _ ?? l, f = E ?? f, h = {
      ...h,
      [b]: {
        ...h[b],
        ...O
      }
    }, C && m <= 50 && (m++, typeof C == "object" && (C.placement && (d = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : C.rects), {
      x: l,
      y: f
    } = Bg(c, d, u)), p = -1);
  }
  return {
    x: l,
    y: f,
    placement: d,
    strategy: i,
    middlewareData: h
  };
};
async function M0(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: a,
    rects: o,
    elements: s,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: h = 0
  } = ai(t, e), m = N0(h), b = s[d ? f === "floating" ? "reference" : "floating" : f], y = Ui(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: l,
    strategy: u
  })), _ = f === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), O = await (a.isElement == null ? void 0 : a.isElement(E)) ? await (a.getScale == null ? void 0 : a.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ui(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: E,
    strategy: u
  }) : _);
  return {
    top: (y.top - C.top + m.top) / O.y,
    bottom: (C.bottom - y.bottom + m.bottom) / O.y,
    left: (y.left - C.left + m.left) / O.x,
    right: (C.right - y.right + m.right) / O.x
  };
}
const mT = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: i,
      rects: a,
      platform: o,
      elements: s,
      middlewareData: u
    } = t, {
      element: c,
      padding: l = 0
    } = ai(e, t) || {};
    if (c == null)
      return {};
    const f = N0(l), d = {
      x: r,
      y: n
    }, h = ml(i), m = pl(h), p = await o.getDimensions(c), b = h === "y", y = b ? "top" : "left", _ = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", O = a.reference[m] + a.reference[h] - d[h] - a.floating[m], C = d[h] - a.reference[h], B = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let I = B ? B[E] : 0;
    (!I || !await (o.isElement == null ? void 0 : o.isElement(B))) && (I = s.floating[E] || a.floating[m]);
    const S = O / 2 - C / 2, w = I / 2 - p[m] / 2 - 1, k = un(f[y], w), z = un(f[_], w), x = k, F = I - p[m] - z, g = I / 2 - p[m] / 2 + S, q = Lc(x, g, F), ie = !u.arrow && si(i) != null && g !== q && a.reference[m] / 2 - (g < x ? k : z) - p[m] / 2 < 0, M = ie ? g < x ? g - x : g - F : 0;
    return {
      [h]: d[h] + M,
      data: {
        [h]: q,
        centerOffset: g - q - M,
        ...ie && {
          alignmentOffset: M
        }
      },
      reset: ie
    };
  }
}), gT = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        middlewareData: a,
        rects: o,
        initialPlacement: s,
        platform: u,
        elements: c
      } = t, {
        mainAxis: l = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: p = !0,
        ...b
      } = ai(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const y = Br(i), _ = pr(s), E = Br(s) === s, O = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), C = d || (E || !p ? [qi(s)] : fT(s)), B = m !== "none";
      !d && B && C.push(...hT(s, p, m, O));
      const I = [s, ...C], S = await M0(t, b), w = [];
      let k = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (l && w.push(S[y]), f) {
        const g = cT(i, o, O);
        w.push(S[g[0]], S[g[1]]);
      }
      if (k = [...k, {
        placement: i,
        overflows: w
      }], !w.every((g) => g <= 0)) {
        var z, x;
        const g = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1, q = I[g];
        if (q && (!(f === "alignment" ? _ !== pr(q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((Z) => Z.overflows[0] > 0 && pr(Z.placement) === _)))
          return {
            data: {
              index: g,
              overflows: k
            },
            reset: {
              placement: q
            }
          };
        let ie = (x = k.filter((M) => M.overflows[0] <= 0).sort((M, Z) => M.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : x.placement;
        if (!ie)
          switch (h) {
            case "bestFit": {
              var F;
              const M = (F = k.filter((Z) => {
                if (B) {
                  const L = pr(Z.placement);
                  return L === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((L) => L > 0).reduce((L, re) => L + re, 0)]).sort((Z, L) => Z[1] - L[1])[0]) == null ? void 0 : F[0];
              M && (ie = M);
              break;
            }
            case "initialPlacement":
              ie = s;
              break;
          }
        if (i !== ie)
          return {
            reset: {
              placement: ie
            }
          };
      }
      return {};
    }
  };
};
async function vT(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Br(r), s = si(r), u = pr(r) === "y", c = ["left", "top"].includes(o) ? -1 : 1, l = a && u ? -1 : 1, f = ai(t, e);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return s && typeof m == "number" && (h = s === "end" ? m * -1 : m), u ? {
    x: h * l,
    y: d * c
  } : {
    x: d * c,
    y: h * l
  };
}
const yT = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: i,
        y: a,
        placement: o,
        middlewareData: s
      } = t, u = await vT(t, e);
      return o === ((r = s.offset) == null ? void 0 : r.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: i + u.x,
        y: a + u.y,
        data: {
          ...u,
          placement: o
        }
      };
    }
  };
}, bT = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: i
      } = t, {
        mainAxis: a = !0,
        crossAxis: o = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: y,
              y: _
            } = b;
            return {
              x: y,
              y: _
            };
          }
        },
        ...u
      } = ai(e, t), c = {
        x: r,
        y: n
      }, l = await M0(t, u), f = pr(Br(i)), d = P0(f);
      let h = c[d], m = c[f];
      if (a) {
        const b = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", _ = h + l[b], E = h - l[y];
        h = Lc(_, h, E);
      }
      if (o) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", _ = m + l[b], E = m - l[y];
        m = Lc(_, m, E);
      }
      const p = s.fn({
        ...t,
        [d]: h,
        [f]: m
      });
      return {
        ...p,
        data: {
          x: p.x - r,
          y: p.y - n,
          enabled: {
            [d]: a,
            [f]: o
          }
        }
      };
    }
  };
};
function Oa() {
  return typeof window < "u";
}
function gn(e) {
  return D0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kt(e) {
  var t;
  return (t = (D0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function D0(e) {
  return Oa() ? e instanceof Node || e instanceof vt(e).Node : !1;
}
function kt(e) {
  return Oa() ? e instanceof Element || e instanceof vt(e).Element : !1;
}
function Gt(e) {
  return Oa() ? e instanceof HTMLElement || e instanceof vt(e).HTMLElement : !1;
}
function jg(e) {
  return !Oa() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof vt(e).ShadowRoot;
}
function oi(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = Pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function _T(e) {
  return ["table", "td", "th"].includes(gn(e));
}
function Ta(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function gl(e) {
  const t = vl(), r = kt(e) ? Pt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function wT(e) {
  let t = Sr(e);
  for (; Gt(t) && !cn(t); ) {
    if (gl(t))
      return t;
    if (Ta(t))
      return null;
    t = Sr(t);
  }
  return null;
}
function vl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function cn(e) {
  return ["html", "body", "#document"].includes(gn(e));
}
function Pt(e) {
  return vt(e).getComputedStyle(e);
}
function Ca(e) {
  return kt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Sr(e) {
  if (gn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    jg(e) && e.host || // Fallback.
    Kt(e)
  );
  return jg(t) ? t.host : t;
}
function F0(e) {
  const t = Sr(e);
  return cn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gt(t) && oi(t) ? t : F0(t);
}
function $n(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = F0(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = vt(i);
  if (a) {
    const s = jc(o);
    return t.concat(o, o.visualViewport || [], oi(i) ? i : [], s && r ? $n(s) : []);
  }
  return t.concat(i, $n(i, [], r));
}
function jc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function L0(e) {
  const t = Pt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Gt(e), a = i ? e.offsetWidth : r, o = i ? e.offsetHeight : n, s = zi(r) !== a || zi(n) !== o;
  return s && (r = a, n = o), {
    width: r,
    height: n,
    $: s
  };
}
function yl(e) {
  return kt(e) ? e : e.contextElement;
}
function rn(e) {
  const t = yl(e);
  if (!Gt(t))
    return $t(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = L0(t);
  let o = (a ? zi(r.width) : r.width) / n, s = (a ? zi(r.height) : r.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const ET = /* @__PURE__ */ $t(0);
function B0(e) {
  const t = vt(e);
  return !vl() || !t.visualViewport ? ET : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xT(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== vt(e) ? !1 : t;
}
function jr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = yl(e);
  let o = $t(1);
  t && (n ? kt(n) && (o = rn(n)) : o = rn(e));
  const s = xT(a, r, n) ? B0(a) : $t(0);
  let u = (i.left + s.x) / o.x, c = (i.top + s.y) / o.y, l = i.width / o.x, f = i.height / o.y;
  if (a) {
    const d = vt(a), h = n && kt(n) ? vt(n) : n;
    let m = d, p = jc(m);
    for (; p && n && h !== m; ) {
      const b = rn(p), y = p.getBoundingClientRect(), _ = Pt(p), E = y.left + (p.clientLeft + parseFloat(_.paddingLeft)) * b.x, O = y.top + (p.clientTop + parseFloat(_.paddingTop)) * b.y;
      u *= b.x, c *= b.y, l *= b.x, f *= b.y, u += E, c += O, m = vt(p), p = jc(m);
    }
  }
  return Ui({
    width: l,
    height: f,
    x: u,
    y: c
  });
}
function bl(e, t) {
  const r = Ca(e).scrollLeft;
  return t ? t.left + r : jr(Kt(e)).left + r;
}
function j0(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), i = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    bl(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: i,
    y: a
  };
}
function ST(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", o = Kt(n), s = t ? Ta(t.floating) : !1;
  if (n === o || s && a)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = $t(1);
  const l = $t(0), f = Gt(n);
  if ((f || !f && !a) && ((gn(n) !== "body" || oi(o)) && (u = Ca(n)), Gt(n))) {
    const h = jr(n);
    c = rn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  const d = o && !f && !a ? j0(o, u, !0) : $t(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - u.scrollLeft * c.x + l.x + d.x,
    y: r.y * c.y - u.scrollTop * c.y + l.y + d.y
  };
}
function OT(e) {
  return Array.from(e.getClientRects());
}
function TT(e) {
  const t = Kt(e), r = Ca(e), n = e.ownerDocument.body, i = kr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = kr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + bl(e);
  const s = -r.scrollTop;
  return Pt(n).direction === "rtl" && (o += kr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  };
}
function CT(e, t) {
  const r = vt(e), n = Kt(e), i = r.visualViewport;
  let a = n.clientWidth, o = n.clientHeight, s = 0, u = 0;
  if (i) {
    a = i.width, o = i.height;
    const c = vl();
    (!c || c && t === "fixed") && (s = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s,
    y: u
  };
}
function AT(e, t) {
  const r = jr(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = Gt(e) ? rn(e) : $t(1), o = e.clientWidth * a.x, s = e.clientHeight * a.y, u = i * a.x, c = n * a.y;
  return {
    width: o,
    height: s,
    x: u,
    y: c
  };
}
function zg(e, t, r) {
  let n;
  if (t === "viewport")
    n = CT(e, r);
  else if (t === "document")
    n = TT(Kt(e));
  else if (kt(t))
    n = AT(t, r);
  else {
    const i = B0(e);
    n = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Ui(n);
}
function z0(e, t) {
  const r = Sr(e);
  return r === t || !kt(r) || cn(r) ? !1 : Pt(r).position === "fixed" || z0(r, t);
}
function RT(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = $n(e, [], !1).filter((s) => kt(s) && gn(s) !== "body"), i = null;
  const a = Pt(e).position === "fixed";
  let o = a ? Sr(e) : e;
  for (; kt(o) && !cn(o); ) {
    const s = Pt(o), u = gl(o);
    !u && s.position === "fixed" && (i = null), (a ? !u && !i : !u && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || oi(o) && !u && z0(e, o)) ? n = n.filter((l) => l !== o) : i = s, o = Sr(o);
  }
  return t.set(e, n), n;
}
function IT(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const o = [...r === "clippingAncestors" ? Ta(t) ? [] : RT(t, this._c) : [].concat(r), n], s = o[0], u = o.reduce((c, l) => {
    const f = zg(t, l, i);
    return c.top = kr(f.top, c.top), c.right = un(f.right, c.right), c.bottom = un(f.bottom, c.bottom), c.left = kr(f.left, c.left), c;
  }, zg(t, s, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function kT(e) {
  const {
    width: t,
    height: r
  } = L0(e);
  return {
    width: t,
    height: r
  };
}
function PT(e, t, r) {
  const n = Gt(t), i = Kt(t), a = r === "fixed", o = jr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = $t(0);
  function c() {
    u.x = bl(i);
  }
  if (n || !n && !a)
    if ((gn(t) !== "body" || oi(i)) && (s = Ca(t)), n) {
      const h = jr(t, !0, a, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else i && c();
  a && !n && i && c();
  const l = i && !n && !a ? j0(i, s) : $t(0), f = o.left + s.scrollLeft - u.x - l.x, d = o.top + s.scrollTop - u.y - l.y;
  return {
    x: f,
    y: d,
    width: o.width,
    height: o.height
  };
}
function qu(e) {
  return Pt(e).position === "static";
}
function qg(e, t) {
  if (!Gt(e) || Pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Kt(e) === r && (r = r.ownerDocument.body), r;
}
function q0(e, t) {
  const r = vt(e);
  if (Ta(e))
    return r;
  if (!Gt(e)) {
    let i = Sr(e);
    for (; i && !cn(i); ) {
      if (kt(i) && !qu(i))
        return i;
      i = Sr(i);
    }
    return r;
  }
  let n = qg(e, t);
  for (; n && _T(n) && qu(n); )
    n = qg(n, t);
  return n && cn(n) && qu(n) && !gl(n) ? r : n || wT(e) || r;
}
const NT = async function(e) {
  const t = this.getOffsetParent || q0, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: PT(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function MT(e) {
  return Pt(e).direction === "rtl";
}
const DT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ST,
  getDocumentElement: Kt,
  getClippingRect: IT,
  getOffsetParent: q0,
  getElementRects: NT,
  getClientRects: OT,
  getDimensions: kT,
  getScale: rn,
  isElement: kt,
  isRTL: MT
};
function U0(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function FT(e, t) {
  let r = null, n;
  const i = Kt(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function o(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), a();
    const c = e.getBoundingClientRect(), {
      left: l,
      top: f,
      width: d,
      height: h
    } = c;
    if (s || t(), !d || !h)
      return;
    const m = bi(f), p = bi(i.clientWidth - (l + d)), b = bi(i.clientHeight - (f + h)), y = bi(l), E = {
      rootMargin: -m + "px " + -p + "px " + -b + "px " + -y + "px",
      threshold: kr(0, un(1, u)) || 1
    };
    let O = !0;
    function C(B) {
      const I = B[0].intersectionRatio;
      if (I !== u) {
        if (!O)
          return o();
        I ? o(!1, I) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !U0(c, e.getBoundingClientRect()) && o(), O = !1;
    }
    try {
      r = new IntersectionObserver(C, {
        ...E,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(C, E);
    }
    r.observe(e);
  }
  return o(!0), a;
}
function wC(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = yl(e), l = i || a ? [...c ? $n(c) : [], ...$n(t)] : [];
  l.forEach((y) => {
    i && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const f = c && s ? FT(c, r) : null;
  let d = -1, h = null;
  o && (h = new ResizeObserver((y) => {
    let [_] = y;
    _ && _.target === c && h && (h.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var E;
      (E = h) == null || E.observe(t);
    })), r();
  }), c && !u && h.observe(c), h.observe(t));
  let m, p = u ? jr(e) : null;
  u && b();
  function b() {
    const y = jr(e);
    p && !U0(p, y) && r(), p = y, m = requestAnimationFrame(b);
  }
  return r(), () => {
    var y;
    l.forEach((_) => {
      i && _.removeEventListener("scroll", r), a && _.removeEventListener("resize", r);
    }), f == null || f(), (y = h) == null || y.disconnect(), h = null, u && cancelAnimationFrame(m);
  };
}
const EC = yT, xC = bT, SC = gT, OC = mT, TC = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: DT,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return pT(e, t, {
    ...i,
    platform: a
  });
};
var Ti = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
var LT = Ti.exports, Ug;
function BT() {
  return Ug || (Ug = 1, function(e, t) {
    ((r, n) => {
      e.exports = n();
    })(LT, function r() {
      var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, i, a = !n.document && !!n.postMessage, o = n.IS_PAPA_WORKER || !1, s = {}, u = 0, c = {};
      function l(S) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(w) {
          var k = C(w);
          k.chunkSize = parseInt(k.chunkSize), w.step || w.chunk || (k.chunkSize = null), this._handle = new p(k), (this._handle.streamer = this)._config = k;
        }).call(this, S), this.parseChunk = function(w, k) {
          var z = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < z) {
            let F = this._config.newline;
            F || (x = this._config.quoteChar || '"', F = this._handle.guessLineEndings(w, x)), w = [...w.split(F).slice(z)].join(F);
          }
          this.isFirstChunk && I(this._config.beforeFirstChunk) && (x = this._config.beforeFirstChunk(w)) !== void 0 && (w = x), this.isFirstChunk = !1, this._halted = !1;
          var z = this._partialLine + w, x = (this._partialLine = "", this._handle.parse(z, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (w = x.meta.cursor, z = (this._finished || (this._partialLine = z.substring(w - this._baseIndex), this._baseIndex = w), x && x.data && (this._rowCount += x.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), o) n.postMessage({ results: x, workerId: c.WORKER_ID, finished: z });
            else if (I(this._config.chunk) && !k) {
              if (this._config.chunk(x, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = x = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(x.data), this._completeResults.errors = this._completeResults.errors.concat(x.errors), this._completeResults.meta = x.meta), this._completed || !z || !I(this._config.complete) || x && x.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), z || x && x.meta.paused || this._nextChunk(), x;
          }
          this._halted = !0;
        }, this._sendError = function(w) {
          I(this._config.error) ? this._config.error(w) : o && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: w, finished: !1 });
        };
      }
      function f(S) {
        var w;
        (S = S || {}).chunkSize || (S.chunkSize = c.RemoteChunkSize), l.call(this, S), this._nextChunk = a ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(k) {
          this._input = k, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (w = new XMLHttpRequest(), this._config.withCredentials && (w.withCredentials = this._config.withCredentials), a || (w.onload = B(this._chunkLoaded, this), w.onerror = B(this._chunkError, this)), w.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !a), this._config.downloadRequestHeaders) {
              var k, z = this._config.downloadRequestHeaders;
              for (k in z) w.setRequestHeader(k, z[k]);
            }
            var x;
            this._config.chunkSize && (x = this._start + this._config.chunkSize - 1, w.setRequestHeader("Range", "bytes=" + this._start + "-" + x));
            try {
              w.send(this._config.downloadRequestBody);
            } catch (F) {
              this._chunkError(F.message);
            }
            a && w.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          w.readyState === 4 && (w.status < 200 || 400 <= w.status ? this._chunkError() : (this._start += this._config.chunkSize || w.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((k) => (k = k.getResponseHeader("Content-Range")) !== null ? parseInt(k.substring(k.lastIndexOf("/") + 1)) : -1)(w), this.parseChunk(w.responseText)));
        }, this._chunkError = function(k) {
          k = w.statusText || k, this._sendError(new Error(k));
        };
      }
      function d(S) {
        (S = S || {}).chunkSize || (S.chunkSize = c.LocalChunkSize), l.call(this, S);
        var w, k, z = typeof FileReader < "u";
        this.stream = function(x) {
          this._input = x, k = x.slice || x.webkitSlice || x.mozSlice, z ? ((w = new FileReader()).onload = B(this._chunkLoaded, this), w.onerror = B(this._chunkError, this)) : w = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var x = this._input, F = (this._config.chunkSize && (F = Math.min(this._start + this._config.chunkSize, this._input.size), x = k.call(x, this._start, F)), w.readAsText(x, this._config.encoding));
          z || this._chunkLoaded({ target: { result: F } });
        }, this._chunkLoaded = function(x) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(x.target.result);
        }, this._chunkError = function() {
          this._sendError(w.error);
        };
      }
      function h(S) {
        var w;
        l.call(this, S = S || {}), this.stream = function(k) {
          return w = k, this._nextChunk();
        }, this._nextChunk = function() {
          var k, z;
          if (!this._finished) return k = this._config.chunkSize, w = k ? (z = w.substring(0, k), w.substring(k)) : (z = w, ""), this._finished = !w, this.parseChunk(z);
        };
      }
      function m(S) {
        l.call(this, S = S || {});
        var w = [], k = !0, z = !1;
        this.pause = function() {
          l.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          l.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(x) {
          this._input = x, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          z && w.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), w.length ? this.parseChunk(w.shift()) : k = !0;
        }, this._streamData = B(function(x) {
          try {
            w.push(typeof x == "string" ? x : x.toString(this._config.encoding)), k && (k = !1, this._checkIsFinished(), this.parseChunk(w.shift()));
          } catch (F) {
            this._streamError(F);
          }
        }, this), this._streamError = B(function(x) {
          this._streamCleanUp(), this._sendError(x);
        }, this), this._streamEnd = B(function() {
          this._streamCleanUp(), z = !0, this._streamData("");
        }, this), this._streamCleanUp = B(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function p(S) {
        var w, k, z, x, F = Math.pow(2, 53), g = -F, q = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, ie = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, M = this, Z = 0, L = 0, re = !1, N = !1, D = [], K = { data: [], errors: [], meta: {} };
        function ee(ce) {
          return S.skipEmptyLines === "greedy" ? ce.join("").trim() === "" : ce.length === 1 && ce[0].length === 0;
        }
        function H() {
          if (K && z && (xe("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), z = !1), S.skipEmptyLines && (K.data = K.data.filter(function(fe) {
            return !ee(fe);
          })), pe()) {
            let fe = function(we, Ee) {
              I(S.transformHeader) && (we = S.transformHeader(we, Ee)), D.push(we);
            };
            if (K) if (Array.isArray(K.data[0])) {
              for (var ce = 0; pe() && ce < K.data.length; ce++) K.data[ce].forEach(fe);
              K.data.splice(0, 1);
            } else K.data.forEach(fe);
          }
          function le(fe, we) {
            for (var Ee = S.header ? {} : [], v = 0; v < fe.length; v++) {
              var X = v, W = fe[v], W = ((P, T) => ((j) => (S.dynamicTypingFunction && S.dynamicTyping[j] === void 0 && (S.dynamicTyping[j] = S.dynamicTypingFunction(j)), (S.dynamicTyping[j] || S.dynamicTyping) === !0))(P) ? T === "true" || T === "TRUE" || T !== "false" && T !== "FALSE" && (((j) => {
                if (q.test(j) && (j = parseFloat(j), g < j && j < F))
                  return 1;
              })(T) ? parseFloat(T) : ie.test(T) ? new Date(T) : T === "" ? null : T) : T)(X = S.header ? v >= D.length ? "__parsed_extra" : D[v] : X, W = S.transform ? S.transform(W, X) : W);
              X === "__parsed_extra" ? (Ee[X] = Ee[X] || [], Ee[X].push(W)) : Ee[X] = W;
            }
            return S.header && (v > D.length ? xe("FieldMismatch", "TooManyFields", "Too many fields: expected " + D.length + " fields but parsed " + v, L + we) : v < D.length && xe("FieldMismatch", "TooFewFields", "Too few fields: expected " + D.length + " fields but parsed " + v, L + we)), Ee;
          }
          var ve;
          K && (S.header || S.dynamicTyping || S.transform) && (ve = 1, !K.data.length || Array.isArray(K.data[0]) ? (K.data = K.data.map(le), ve = K.data.length) : K.data = le(K.data, 0), S.header && K.meta && (K.meta.fields = D), L += ve);
        }
        function pe() {
          return S.header && D.length === 0;
        }
        function xe(ce, le, ve, fe) {
          ce = { type: ce, code: le, message: ve }, fe !== void 0 && (ce.row = fe), K.errors.push(ce);
        }
        I(S.step) && (x = S.step, S.step = function(ce) {
          K = ce, pe() ? H() : (H(), K.data.length !== 0 && (Z += ce.data.length, S.preview && Z > S.preview ? k.abort() : (K.data = K.data[0], x(K, M))));
        }), this.parse = function(ce, le, ve) {
          var fe = S.quoteChar || '"', fe = (S.newline || (S.newline = this.guessLineEndings(ce, fe)), z = !1, S.delimiter ? I(S.delimiter) && (S.delimiter = S.delimiter(ce), K.meta.delimiter = S.delimiter) : ((fe = ((we, Ee, v, X, W) => {
            var P, T, j, te;
            W = W || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ne = 0; ne < W.length; ne++) {
              for (var G, V = W[ne], Q = 0, J = 0, ae = 0, de = (j = void 0, new y({ comments: X, delimiter: V, newline: Ee, preview: 10 }).parse(we)), _e = 0; _e < de.data.length; _e++) v && ee(de.data[_e]) ? ae++ : (G = de.data[_e].length, J += G, j === void 0 ? j = G : 0 < G && (Q += Math.abs(G - j), j = G));
              0 < de.data.length && (J /= de.data.length - ae), (T === void 0 || Q <= T) && (te === void 0 || te < J) && 1.99 < J && (T = Q, P = V, te = J);
            }
            return { successful: !!(S.delimiter = P), bestDelimiter: P };
          })(ce, S.newline, S.skipEmptyLines, S.comments, S.delimitersToGuess)).successful ? S.delimiter = fe.bestDelimiter : (z = !0, S.delimiter = c.DefaultDelimiter), K.meta.delimiter = S.delimiter), C(S));
          return S.preview && S.header && fe.preview++, w = ce, k = new y(fe), K = k.parse(w, le, ve), H(), re ? { meta: { paused: !0 } } : K || { meta: { paused: !1 } };
        }, this.paused = function() {
          return re;
        }, this.pause = function() {
          re = !0, k.abort(), w = I(S.chunk) ? "" : w.substring(k.getCharIndex());
        }, this.resume = function() {
          M.streamer._halted ? (re = !1, M.streamer.parseChunk(w, !0)) : setTimeout(M.resume, 3);
        }, this.aborted = function() {
          return N;
        }, this.abort = function() {
          N = !0, k.abort(), K.meta.aborted = !0, I(S.complete) && S.complete(K), w = "";
        }, this.guessLineEndings = function(we, fe) {
          we = we.substring(0, 1048576);
          var fe = new RegExp(b(fe) + "([^]*?)" + b(fe), "gm"), ve = (we = we.replace(fe, "")).split("\r"), fe = we.split(`
`), we = 1 < fe.length && fe[0].length < ve[0].length;
          if (ve.length === 1 || we) return `
`;
          for (var Ee = 0, v = 0; v < ve.length; v++) ve[v][0] === `
` && Ee++;
          return Ee >= ve.length / 2 ? `\r
` : "\r";
        };
      }
      function b(S) {
        return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function y(S) {
        var w = (S = S || {}).delimiter, k = S.newline, z = S.comments, x = S.step, F = S.preview, g = S.fastMode, q = null, ie = !1, M = S.quoteChar == null ? '"' : S.quoteChar, Z = M;
        if (S.escapeChar !== void 0 && (Z = S.escapeChar), (typeof w != "string" || -1 < c.BAD_DELIMITERS.indexOf(w)) && (w = ","), z === w) throw new Error("Comment character same as delimiter");
        z === !0 ? z = "#" : (typeof z != "string" || -1 < c.BAD_DELIMITERS.indexOf(z)) && (z = !1), k !== `
` && k !== "\r" && k !== `\r
` && (k = `
`);
        var L = 0, re = !1;
        this.parse = function(N, D, K) {
          if (typeof N != "string") throw new Error("Input must be a string");
          var ee = N.length, H = w.length, pe = k.length, xe = z.length, ce = I(x), le = [], ve = [], fe = [], we = L = 0;
          if (!N) return Q();
          if (g || g !== !1 && N.indexOf(M) === -1) {
            for (var Ee = N.split(k), v = 0; v < Ee.length; v++) {
              if (fe = Ee[v], L += fe.length, v !== Ee.length - 1) L += k.length;
              else if (K) return Q();
              if (!z || fe.substring(0, xe) !== z) {
                if (ce) {
                  if (le = [], te(fe.split(w)), J(), re) return Q();
                } else te(fe.split(w));
                if (F && F <= v) return le = le.slice(0, F), Q(!0);
              }
            }
            return Q();
          }
          for (var X = N.indexOf(w, L), W = N.indexOf(k, L), P = new RegExp(b(Z) + b(M), "g"), T = N.indexOf(M, L); ; ) if (N[L] === M) for (T = L, L++; ; ) {
            if ((T = N.indexOf(M, T + 1)) === -1) return K || ve.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: le.length, index: L }), G();
            if (T === ee - 1) return G(N.substring(L, T).replace(P, M));
            if (M === Z && N[T + 1] === Z) T++;
            else if (M === Z || T === 0 || N[T - 1] !== Z) {
              X !== -1 && X < T + 1 && (X = N.indexOf(w, T + 1));
              var j = ne((W = W !== -1 && W < T + 1 ? N.indexOf(k, T + 1) : W) === -1 ? X : Math.min(X, W));
              if (N.substr(T + 1 + j, H) === w) {
                fe.push(N.substring(L, T).replace(P, M)), N[L = T + 1 + j + H] !== M && (T = N.indexOf(M, L)), X = N.indexOf(w, L), W = N.indexOf(k, L);
                break;
              }
              if (j = ne(W), N.substring(T + 1 + j, T + 1 + j + pe) === k) {
                if (fe.push(N.substring(L, T).replace(P, M)), V(T + 1 + j + pe), X = N.indexOf(w, L), T = N.indexOf(M, L), ce && (J(), re)) return Q();
                if (F && le.length >= F) return Q(!0);
                break;
              }
              ve.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: le.length, index: L }), T++;
            }
          }
          else if (z && fe.length === 0 && N.substring(L, L + xe) === z) {
            if (W === -1) return Q();
            L = W + pe, W = N.indexOf(k, L), X = N.indexOf(w, L);
          } else if (X !== -1 && (X < W || W === -1)) fe.push(N.substring(L, X)), L = X + H, X = N.indexOf(w, L);
          else {
            if (W === -1) break;
            if (fe.push(N.substring(L, W)), V(W + pe), ce && (J(), re)) return Q();
            if (F && le.length >= F) return Q(!0);
          }
          return G();
          function te(ae) {
            le.push(ae), we = L;
          }
          function ne(ae) {
            var de = 0;
            return de = ae !== -1 && (ae = N.substring(T + 1, ae)) && ae.trim() === "" ? ae.length : de;
          }
          function G(ae) {
            return K || (ae === void 0 && (ae = N.substring(L)), fe.push(ae), L = ee, te(fe), ce && J()), Q();
          }
          function V(ae) {
            L = ae, te(fe), fe = [], W = N.indexOf(k, L);
          }
          function Q(ae) {
            if (S.header && !D && le.length && !ie) {
              var de = le[0], _e = /* @__PURE__ */ Object.create(null), Fe = new Set(de);
              let Ve = !1;
              for (let Pe = 0; Pe < de.length; Pe++) {
                let Le = de[Pe];
                if (_e[Le = I(S.transformHeader) ? S.transformHeader(Le, Pe) : Le]) {
                  let Ce, He = _e[Le];
                  for (; Ce = Le + "_" + He, He++, Fe.has(Ce); ) ;
                  Fe.add(Ce), de[Pe] = Ce, _e[Le]++, Ve = !0, (q = q === null ? {} : q)[Ce] = Le;
                } else _e[Le] = 1, de[Pe] = Le;
                Fe.add(Le);
              }
              Ve && console.warn("Duplicate headers found and renamed."), ie = !0;
            }
            return { data: le, errors: ve, meta: { delimiter: w, linebreak: k, aborted: re, truncated: !!ae, cursor: we + (D || 0), renamedHeaders: q } };
          }
          function J() {
            x(Q()), le = [], ve = [];
          }
        }, this.abort = function() {
          re = !0;
        }, this.getCharIndex = function() {
          return L;
        };
      }
      function _(S) {
        var w = S.data, k = s[w.workerId], z = !1;
        if (w.error) k.userError(w.error, w.file);
        else if (w.results && w.results.data) {
          var x = { abort: function() {
            z = !0, E(w.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: O, resume: O };
          if (I(k.userStep)) {
            for (var F = 0; F < w.results.data.length && (k.userStep({ data: w.results.data[F], errors: w.results.errors, meta: w.results.meta }, x), !z); F++) ;
            delete w.results;
          } else I(k.userChunk) && (k.userChunk(w.results, x, w.file), delete w.results);
        }
        w.finished && !z && E(w.workerId, w.results);
      }
      function E(S, w) {
        var k = s[S];
        I(k.userComplete) && k.userComplete(w), k.terminate(), delete s[S];
      }
      function O() {
        throw new Error("Not implemented.");
      }
      function C(S) {
        if (typeof S != "object" || S === null) return S;
        var w, k = Array.isArray(S) ? [] : {};
        for (w in S) k[w] = C(S[w]);
        return k;
      }
      function B(S, w) {
        return function() {
          S.apply(w, arguments);
        };
      }
      function I(S) {
        return typeof S == "function";
      }
      return c.parse = function(S, w) {
        var k = (w = w || {}).dynamicTyping || !1;
        if (I(k) && (w.dynamicTypingFunction = k, k = {}), w.dynamicTyping = k, w.transform = !!I(w.transform) && w.transform, !w.worker || !c.WORKERS_SUPPORTED) return k = null, c.NODE_STREAM_INPUT, typeof S == "string" ? (S = ((z) => z.charCodeAt(0) !== 65279 ? z : z.slice(1))(S), k = new (w.download ? f : h)(w)) : S.readable === !0 && I(S.read) && I(S.on) ? k = new m(w) : (n.File && S instanceof File || S instanceof Object) && (k = new d(w)), k.stream(S);
        (k = (() => {
          var z;
          return !!c.WORKERS_SUPPORTED && (z = (() => {
            var x = n.URL || n.webkitURL || null, F = r.toString();
            return c.BLOB_URL || (c.BLOB_URL = x.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", F, ")();"], { type: "text/javascript" })));
          })(), (z = new n.Worker(z)).onmessage = _, z.id = u++, s[z.id] = z);
        })()).userStep = w.step, k.userChunk = w.chunk, k.userComplete = w.complete, k.userError = w.error, w.step = I(w.step), w.chunk = I(w.chunk), w.complete = I(w.complete), w.error = I(w.error), delete w.worker, k.postMessage({ input: S, config: w, workerId: k.id });
      }, c.unparse = function(S, w) {
        var k = !1, z = !0, x = ",", F = `\r
`, g = '"', q = g + g, ie = !1, M = null, Z = !1, L = ((() => {
          if (typeof w == "object") {
            if (typeof w.delimiter != "string" || c.BAD_DELIMITERS.filter(function(D) {
              return w.delimiter.indexOf(D) !== -1;
            }).length || (x = w.delimiter), typeof w.quotes != "boolean" && typeof w.quotes != "function" && !Array.isArray(w.quotes) || (k = w.quotes), typeof w.skipEmptyLines != "boolean" && typeof w.skipEmptyLines != "string" || (ie = w.skipEmptyLines), typeof w.newline == "string" && (F = w.newline), typeof w.quoteChar == "string" && (g = w.quoteChar), typeof w.header == "boolean" && (z = w.header), Array.isArray(w.columns)) {
              if (w.columns.length === 0) throw new Error("Option columns is empty");
              M = w.columns;
            }
            w.escapeChar !== void 0 && (q = w.escapeChar + g), w.escapeFormulae instanceof RegExp ? Z = w.escapeFormulae : typeof w.escapeFormulae == "boolean" && w.escapeFormulae && (Z = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(b(g), "g"));
        if (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S)) {
          if (!S.length || Array.isArray(S[0])) return re(null, S, ie);
          if (typeof S[0] == "object") return re(M || Object.keys(S[0]), S, ie);
        } else if (typeof S == "object") return typeof S.data == "string" && (S.data = JSON.parse(S.data)), Array.isArray(S.data) && (S.fields || (S.fields = S.meta && S.meta.fields || M), S.fields || (S.fields = Array.isArray(S.data[0]) ? S.fields : typeof S.data[0] == "object" ? Object.keys(S.data[0]) : []), Array.isArray(S.data[0]) || typeof S.data[0] == "object" || (S.data = [S.data])), re(S.fields || [], S.data || [], ie);
        throw new Error("Unable to serialize unrecognized input");
        function re(D, K, ee) {
          var H = "", pe = (typeof D == "string" && (D = JSON.parse(D)), typeof K == "string" && (K = JSON.parse(K)), Array.isArray(D) && 0 < D.length), xe = !Array.isArray(K[0]);
          if (pe && z) {
            for (var ce = 0; ce < D.length; ce++) 0 < ce && (H += x), H += N(D[ce], ce);
            0 < K.length && (H += F);
          }
          for (var le = 0; le < K.length; le++) {
            var ve = (pe ? D : K[le]).length, fe = !1, we = pe ? Object.keys(K[le]).length === 0 : K[le].length === 0;
            if (ee && !pe && (fe = ee === "greedy" ? K[le].join("").trim() === "" : K[le].length === 1 && K[le][0].length === 0), ee === "greedy" && pe) {
              for (var Ee = [], v = 0; v < ve; v++) {
                var X = xe ? D[v] : v;
                Ee.push(K[le][X]);
              }
              fe = Ee.join("").trim() === "";
            }
            if (!fe) {
              for (var W = 0; W < ve; W++) {
                0 < W && !we && (H += x);
                var P = pe && xe ? D[W] : W;
                H += N(K[le][P], W);
              }
              le < K.length - 1 && (!ee || 0 < ve && !we) && (H += F);
            }
          }
          return H;
        }
        function N(D, K) {
          var ee, H;
          return D == null ? "" : D.constructor === Date ? JSON.stringify(D).slice(1, 25) : (H = !1, Z && typeof D == "string" && Z.test(D) && (D = "'" + D, H = !0), ee = D.toString().replace(L, q), (H = H || k === !0 || typeof k == "function" && k(D, K) || Array.isArray(k) && k[K] || ((pe, xe) => {
            for (var ce = 0; ce < xe.length; ce++) if (-1 < pe.indexOf(xe[ce])) return !0;
            return !1;
          })(ee, c.BAD_DELIMITERS) || -1 < ee.indexOf(x) || ee.charAt(0) === " " || ee.charAt(ee.length - 1) === " ") ? g + ee + g : ee);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !a && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = y, c.ParserHandle = p, c.NetworkStreamer = f, c.FileStreamer = d, c.StringStreamer = h, c.ReadableStreamStreamer = m, n.jQuery && ((i = n.jQuery).fn.parse = function(S) {
        var w = S.config || {}, k = [];
        return this.each(function(F) {
          if (!(i(this).prop("tagName").toUpperCase() === "INPUT" && i(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var g = 0; g < this.files.length; g++) k.push({ file: this.files[g], inputElem: this, instanceConfig: i.extend({}, w) });
        }), z(), this;
        function z() {
          if (k.length === 0) I(S.complete) && S.complete();
          else {
            var F, g, q, ie, M = k[0];
            if (I(S.before)) {
              var Z = S.before(M.file, M.inputElem);
              if (typeof Z == "object") {
                if (Z.action === "abort") return F = "AbortError", g = M.file, q = M.inputElem, ie = Z.reason, void (I(S.error) && S.error({ name: F }, g, q, ie));
                if (Z.action === "skip") return void x();
                typeof Z.config == "object" && (M.instanceConfig = i.extend(M.instanceConfig, Z.config));
              } else if (Z === "skip") return void x();
            }
            var L = M.instanceConfig.complete;
            M.instanceConfig.complete = function(re) {
              I(L) && L(re, M.file, M.inputElem), x();
            }, c.parse(M.file, M.instanceConfig);
          }
        }
        function x() {
          k.splice(0, 1), z();
        }
      }), o && (n.onmessage = function(S) {
        S = S.data, c.WORKER_ID === void 0 && S && (c.WORKER_ID = S.workerId), typeof S.input == "string" ? n.postMessage({ workerId: c.WORKER_ID, results: c.parse(S.input, S.config), finished: !0 }) : (n.File && S.input instanceof File || S.input instanceof Object) && (S = c.parse(S.input, S.config)) && n.postMessage({ workerId: c.WORKER_ID, results: S, finished: !0 });
      }), (f.prototype = Object.create(l.prototype)).constructor = f, (d.prototype = Object.create(l.prototype)).constructor = d, (h.prototype = Object.create(h.prototype)).constructor = h, (m.prototype = Object.create(l.prototype)).constructor = m, c;
    });
  }(Ti)), Ti.exports;
}
var jT = BT();
const CC = /* @__PURE__ */ hn(jT);
export {
  gn as A,
  TC as B,
  OC as C,
  qT as D,
  tC as E,
  nf as F,
  eC as G,
  VT as H,
  JT as I,
  gC as J,
  GT as K,
  WT as L,
  HT as M,
  rC as N,
  KT as O,
  CC as P,
  YT as Q,
  _C as R,
  XT as S,
  ZT as T,
  QT as U,
  pC as V,
  vC as _,
  oC as a,
  fC as b,
  st as c,
  iC as d,
  ji as e,
  lC as f,
  nC as g,
  aC as h,
  sC as i,
  wC as j,
  xC as k,
  SC as l,
  is as m,
  se as n,
  EC as o,
  Lx as p,
  yC as q,
  bC as r,
  uC as s,
  qn as t,
  dC as u,
  cC as v,
  UT as w,
  $T as x,
  D0 as y,
  hC as z
};

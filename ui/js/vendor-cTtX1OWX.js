var H0 = Object.defineProperty;
var K0 = (e, t, r) => t in e ? H0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var kl = (e, t, r) => K0(e, typeof t != "symbol" ? t + "" : t, r);
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
function Pl(e, t) {
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
    t % 2 ? Pl(Object(r), !0).forEach(function(n) {
      Y0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pl(Object(r)).forEach(function(n) {
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
const Nl = () => {
};
let zc = {}, $g = {}, Wg = null, Gg = {
  mark: Nl,
  measure: Nl
};
try {
  typeof window < "u" && (zc = window), typeof document < "u" && ($g = document), typeof MutationObserver < "u" && (Wg = MutationObserver), typeof performance < "u" && (Gg = performance);
} catch {
}
const {
  userAgent: Ml = ""
} = zc.navigator || {}, gr = zc, De = $g, Dl = Wg, ci = Gg;
gr.document;
const rr = !!De.documentElement && !!De.head && typeof De.addEventListener == "function" && typeof De.createElement == "function", Vg = ~Ml.indexOf("MSIE") || ~Ml.indexOf("Trident/");
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
}, Kg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], nt = "classic", $i = "duotone", tb = "sharp", rb = "sharp-duotone", Yg = [nt, $i, tb, rb], nb = {
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
}, ob = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Fl = {
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
}, Ll = {
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
const er = "___FONT_AWESOME___", Wu = 16, Zg = "fa", Jg = "svg-inline--fa", Mr = "data-fa-i2svg", Gu = "data-fa-pseudo-element", Eb = "data-fa-pseudo-element-pending", qc = "data-prefix", Uc = "data-icon", Bl = "fontawesome-i2svg", xb = "async", Ob = ["HTML", "HEAD", "STYLE", "SCRIPT"], Qg = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function $n(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[nt];
    }
  });
}
const ev = oe({}, Hg);
ev[nt] = oe(oe(oe(oe({}, {
  "fa-duotone": "duotone"
}), Hg[nt]), Fl.kit), Fl["kit-duotone"]);
const Sb = $n(ev), Vu = oe({}, sb);
Vu[nt] = oe(oe(oe(oe({}, {
  duotone: "fad"
}), Vu[nt]), Ll.kit), Ll["kit-duotone"]);
const jl = $n(Vu), Hu = oe({}, Uu);
Hu[nt] = oe(oe({}, Hu[nt]), lb.kit);
const $c = $n(Hu), Ku = oe({}, mb);
Ku[nt] = oe(oe({}, Ku[nt]), cb.kit);
$n(Ku);
const Tb = J0, tv = "fa-layers-text", Cb = Q0, Ab = oe({}, nb);
$n(Ab);
const Rb = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Pa = eb, Ib = [...ub, ..._b], kn = gr.FontAwesomeConfig || {};
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
  i != null && (kn[n] = i);
});
const rv = {
  styleDefault: "solid",
  familyDefault: nt,
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
kn.familyPrefix && (kn.cssPrefix = kn.familyPrefix);
const nn = oe(oe({}, rv), kn);
nn.autoReplaceSvg || (nn.observeMutations = !1);
const ge = {};
Object.keys(rv).forEach((e) => {
  Object.defineProperty(ge, e, {
    enumerable: !0,
    set: function(t) {
      nn[e] = t, Pn.forEach((r) => r(ge));
    },
    get: function() {
      return nn[e];
    }
  });
});
Object.defineProperty(ge, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    nn.cssPrefix = e, Pn.forEach((t) => t(ge));
  },
  get: function() {
    return nn.cssPrefix;
  }
});
gr.FontAwesomeConfig = ge;
const Pn = [];
function Nb(e) {
  return Pn.push(e), () => {
    Pn.splice(Pn.indexOf(e), 1);
  };
}
const ur = Wu, zt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Mb(e) {
  if (!e || !rr)
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
function Dn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Db[Math.random() * 62 | 0];
  return t;
}
function cn(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function Wc(e) {
  return e.classList ? cn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
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
  return e.size !== zt.size || e.x !== zt.x || e.y !== zt.y || e.rotate !== zt.rotate || e.flipX || e.flipY;
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
  return i && Vg ? a += "translate(".concat(t.x / ur - r / 2, "em, ").concat(t.y / ur - n / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / ur, "em), calc(-50% + ").concat(t.y / ur, "em)) ") : a += "translate(".concat(t.x / ur, "em, ").concat(t.y / ur, "em) "), a += "scale(".concat(t.size / ur * (t.flipX ? -1 : 1), ", ").concat(t.size / ur * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
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
let zl = !1;
function Na() {
  ge.autoAddCss && !zl && (Mb(iv()), zl = !0);
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
const tr = gr || {};
tr[er] || (tr[er] = {});
tr[er].styles || (tr[er].styles = {});
tr[er].hooks || (tr[er].hooks = {});
tr[er].shims || (tr[er].shims = []);
var qt = tr[er];
const av = [], sv = function() {
  De.removeEventListener("DOMContentLoaded", sv), Ci = 1, av.map((e) => e());
};
let Ci = !1;
rr && (Ci = (De.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(De.readyState), Ci || De.addEventListener("DOMContentLoaded", sv));
function qb(e) {
  rr && (Ci ? setTimeout(e, 0) : av.push(e));
}
function Wn(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? nv(e) : "<".concat(t, " ").concat(Fb(r), ">").concat(n.map(Wn).join(""), "</").concat(t, ">");
}
function ql(e, t, r) {
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
function Ul(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function Xu(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = Ul(t);
  typeof qt.hooks.addPack == "function" && !n ? qt.hooks.addPack(e, Ul(t)) : qt.styles[e] = oe(oe({}, qt.styles[e] || {}), i), e === "fas" && Xu("fa", t);
}
const {
  styles: Fn,
  shims: Wb
} = qt, ov = Object.keys($c), Gb = ov.reduce((e, t) => (e[t] = Object.keys($c[t]), e), {});
let Vc = null, uv = {}, cv = {}, fv = {}, lv = {}, hv = {};
function Vb(e) {
  return ~Ib.indexOf(e);
}
function Hb(e, t) {
  const r = t.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === e && i !== "" && !Vb(i) ? i : null;
}
const dv = () => {
  const e = (n) => Ma(Fn, (i, a, o) => (i[o] = Ma(a, n, {}), i), {});
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
  const t = "far" in Fn || ge.autoFetchSvg, r = Ma(Wb, (n, i) => {
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
function vr() {
  return Vc;
}
const mv = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Xb(e) {
  let t = nt;
  const r = ov.reduce((n, i) => (n[i] = "".concat(ge.cssPrefix, "-").concat(i), n), {});
  return Yg.forEach((n) => {
    (e.includes(r[n]) || e.some((i) => Gb[n].includes(i))) && (t = n);
  }), t;
}
function Gi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = nt
  } = t, n = Sb[r][e];
  if (r === $i && !e)
    return "fad";
  const i = jl[r][e] || jl[r][n], a = e in qt.styles ? e : null;
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
function $l(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function Vi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const i = $u.concat(db), a = $l(e.filter((f) => i.includes(f))), o = $l(e.filter((f) => !$u.includes(f))), s = a.filter((f) => (n = f, !Kg.includes(f))), [u = null] = s, c = Xb(a), l = oe(oe({}, Zb(o)), {}, {
    prefix: Gi(u, {
      family: c
    })
  });
  return oe(oe(oe({}, l), t1({
    values: e,
    family: c,
    styles: Fn,
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
  return i = a.iconName || o || i, n = a.prefix || n, n === "far" && !Fn.far && Fn.fas && !ge.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const Qb = Yg.filter((e) => e !== nt || e !== $i), e1 = Object.keys(Uu).filter((e) => e !== nt).map((e) => Object.keys(Uu[e])).flat();
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
  return (n.prefix === "fa" || i === "fa") && (n.prefix = vr() || "fas"), n;
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
      const o = $c[nt][a];
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
let Wl = [], Qr = {};
const tn = {}, n1 = Object.keys(tn);
function i1(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return Wl = e, Qr = {}, Object.keys(tn).forEach((n) => {
    n1.indexOf(n) === -1 && delete tn[n];
  }), Wl.forEach((n) => {
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
function Dr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  (Qr[e] || []).forEach((a) => {
    a.apply(null, r);
  });
}
function yr() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return tn[e] ? tn[e].apply(null, t) : void 0;
}
function Ju(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || vr();
  if (t)
    return t = Ar(r, t) || t, ql(gv.definitions, r, t) || ql(qt.styles, r, t);
}
const gv = new r1(), a1 = () => {
  ge.autoReplaceSvg = !1, ge.observeMutations = !1, Dr("noAuto");
}, s1 = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return rr ? (Dr("beforeI2svg", e), yr("pseudoElements2svg", e), yr("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ge.autoReplaceSvg === !1 && (ge.autoReplaceSvg = !0), ge.observeMutations = !0, qb(() => {
      u1({
        autoReplaceSvgRoot: t
      }), Dr("watch", e);
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
        prefix: t.prefix || vr(),
        iconName: Ar(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = vr();
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
  toHtml: Wn
}, u1 = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = De
  } = e;
  (Object.keys(qt.styles).length > 0 || ge.autoFetchSvg) && rr && ge.autoReplaceSvg && yt.dom.i2svg({
    node: t
  });
};
function Hi(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => Wn(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!rr) return;
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
  f && (b.attributes[Mr] = ""), s && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(c || Dn())
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
    attributes: S
  } = r.found && t.found ? yr("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : yr("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = E, _.attributes = S, o ? f1(_) : c1(_);
}
function Gl(e) {
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
  s && (u[Mr] = "");
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
} = qt;
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
  return t === "fa" && ge.styleDefault !== null && (t = vr()), new Promise((n, i) => {
    if (r === "fa") {
      const a = pv(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Da[t] && Da[t][e]) {
      const a = Da[t][e];
      return n(Qu(a));
    }
    d1(e, t), n(oe(oe({}, h1), {}, {
      icon: ge.showMissingIcons && e ? yr("missingIconAbstract") || {} : {}
    }));
  });
}
const Vl = () => {
}, tc = ge.measurePerformance && ci && ci.mark && ci.measure ? ci : {
  mark: Vl,
  measure: Vl
}, An = 'FA "6.7.2"', p1 = (e) => (tc.mark("".concat(An, " ").concat(e, " begins")), () => vv(e)), vv = (e) => {
  tc.mark("".concat(An, " ").concat(e, " ends")), tc.measure("".concat(An, " ").concat(e), "".concat(An, " ").concat(e, " begins"), "".concat(An, " ").concat(e, " ends"));
};
var Yc = {
  begin: p1,
  end: vv
};
const _i = () => {
};
function Hl(e) {
  return typeof (e.getAttribute ? e.getAttribute(Mr) : null) == "string";
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
      }), t.getAttribute(Mr) === null && ge.keepOriginalSource) {
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
    const i = r.map((a) => Wn(a)).join(`
`);
    t.setAttribute(Mr, ""), t.innerHTML = i;
  }
};
function Kl(e) {
  e();
}
function bv(e, t) {
  const r = typeof t == "function" ? t : _i;
  if (e.length === 0)
    r();
  else {
    let n = Kl;
    ge.mutateApproach === xb && (n = gr.requestAnimationFrame || Kl), n(() => {
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
function Yl(e) {
  if (!Dl || !ge.observeMutations)
    return;
  const {
    treeCallback: t = _i,
    nodeCallback: r = _i,
    pseudoElementsCallback: n = _i,
    observeMutationsRoot: i = De
  } = e;
  Ai = new Dl((a) => {
    if (Xc) return;
    const o = vr();
    cn(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Hl(s.addedNodes[0]) && (ge.searchPseudoElements && n(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && ge.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && Hl(s.target) && ~Rb.indexOf(s.attributeName))
        if (s.attributeName === "class" && m1(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = Vi(Wc(s.target));
          s.target.setAttribute(qc, u || o), c && s.target.setAttribute(Uc, c);
        } else g1(s.target) && r(s.target);
    });
  }), rr && Ai.observe(i, {
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
  return i.prefix || (i.prefix = vr()), t && r && (i.prefix = t, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = Kb(i.prefix, e.innerText) || Hc(i.prefix, Yu(e.innerText))), !i.iconName && ge.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function O1(e) {
  const t = cn(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return ge.autoA11y && (r ? t["aria-labelledby"] = "".concat(ge.replacementClass, "-title-").concat(n || Dn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function S1() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: zt,
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
function Xl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = x1(e), a = O1(e), o = Zu("parseNodeAttributes", {}, e);
  let s = t.styleParser ? E1(e) : [];
  return oe({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: zt,
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
} = qt;
function wv(e) {
  const t = ge.autoReplaceSvg === "nest" ? Xl(e, {
    styleParser: !1
  }) : Xl(e);
  return ~t.extra.classes.indexOf(tv) ? yr("generateLayersText", e, t) : yr("generateSvgReplacementMutation", e, t);
}
function C1() {
  return [...ob, ...$u];
}
function Zl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!rr) return Promise.resolve();
  const r = De.documentElement.classList, n = (l) => r.add("".concat(Bl, "-").concat(l)), i = (l) => r.remove("".concat(Bl, "-").concat(l)), a = ge.autoFetchSvg ? C1() : Kg.concat(Object.keys(T1));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(tv, ":not([").concat(Mr, "])")].concat(a.map((l) => ".".concat(l, ":not([").concat(Mr, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = cn(e.querySelectorAll(o));
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
    transform: r = zt,
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
  }, e), () => (Dr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ge.autoA11y && (o ? c["aria-labelledby"] = "".concat(ge.replacementClass, "-title-").concat(s || Dn()) : (c["aria-hidden"] = "true", c.focusable = "false")), Kc({
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
    transform: oe(oe({}, zt), r),
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
        return e.treeCallback = Zl, e.nodeCallback = A1, e;
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
      return Zl(r, n);
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
      return Gc(a) && (u = yr("generateAbstractTransformGrouping", {
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
          Dr("beforeDOMElementCreation", {
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
        }, () => (Dr("beforeDOMElementCreation", {
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
          transform: r = zt,
          title: n = null,
          classes: i = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return Hi({
          type: "text",
          content: e
        }, () => (Dr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Gl({
          content: e,
          transform: oe(oe({}, zt), r),
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
      return ge.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Gl({
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
const D1 = new RegExp('"', "ug"), Jl = [1105920, 1112319], Ql = oe(oe(oe(oe({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), ib), wb), pb), nc = Object.keys(Ql).reduce((e, t) => (e[t.toLowerCase()] = Ql[t], e), {}), F1 = Object.keys(nc).reduce((e, t) => {
  const r = nc[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function L1(e) {
  const t = e.replace(D1, ""), r = $b(t, 0), n = r >= Jl[0] && r <= Jl[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Yu(i ? t[0] : t),
    isSecondary: n || i
  };
}
function B1(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), i = isNaN(n) ? "normal" : n;
  return (nc[r] || {})[i] || F1[r];
}
function eh(e, t) {
  const r = "".concat(Eb).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null)
      return n();
    const o = cn(e.children).filter((d) => d.getAttribute(Gu) === t)[0], s = gr.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), c = u.match(Cb), l = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
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
        const E = S1(), {
          extra: S
        } = E;
        S.attributes[Gu] = t, ec(y, h).then((C) => {
          const B = Kc(oe(oe({}, E), {}, {
            icons: {
              main: C,
              mask: mv()
            },
            prefix: h,
            iconName: _,
            extra: S,
            watchable: !0
          })), I = De.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(I, e.firstChild) : e.appendChild(I), I.outerHTML = B.map((O) => Wn(O)).join(`
`), e.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function j1(e) {
  return Promise.all([eh(e, "::before"), eh(e, "::after")]);
}
function z1(e) {
  return e.parentNode !== document.head && !~Ob.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Gu) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function th(e) {
  if (rr)
    return new Promise((t, r) => {
      const n = cn(e.querySelectorAll("*")).filter(z1).map(j1), i = Yc.begin("searchPseudoElements");
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
        return e.pseudoElementsCallback = th, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = De
      } = t;
      ge.searchPseudoElements && th(r);
    };
  }
};
let rh = !1;
var U1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          _v(), rh = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Yl(Zu("mutationObserverCallbacks", {}));
      },
      noAuto() {
        w1();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        rh ? rc() : Yl(Zu("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const nh = (e) => {
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
        transform: (e) => nh(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = nh(r)), e;
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
function ih(e) {
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
        return n.prefix || (n.prefix = vr()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        children: c.children.map(ih)
      } : {}, p = {
        tag: "g",
        attributes: oe({}, d.inner),
        children: [ih(oe({
          tag: c.tag,
          attributes: oe(oe({}, c.attributes), d.path)
        }, m))]
      }, b = {
        tag: "g",
        attributes: oe({}, d.outer),
        children: [p]
      }, y = "mask-".concat(o || Dn()), _ = "clip-".concat(o || Dn()), E = {
        tag: "mask",
        attributes: oe(oe({}, Fa), {}, {
          id: y,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, b]
      }, S = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: W1(f)
        }, E]
      };
      return r.push(S, {
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
    gr.matchMedia && (t = gr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
const YT = yt.library;
yt.dom;
const XT = yt.parse;
yt.findIconDefinition;
yt.toHtml;
const ZT = yt.icon;
yt.layer;
yt.text;
yt.counter;
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const JT = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, QT = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, eC = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, tC = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
};
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const rC = {
  prefix: "fass",
  iconName: "spray-can",
  icon: [512, 512, [], "f5bd", "M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, nC = {
  prefix: "fass",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, iC = {
  prefix: "fass",
  iconName: "files",
  icon: [448, 512, [], "e178", "M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z"]
}, aC = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, sC = {
  prefix: "fass",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M288 32l0-32L224 0l0 32 0 192L32 224 0 224l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-192 192 0 32 0 0-64-32 0-192 0 0-192z"]
}, oC = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, uC = {
  prefix: "fass",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32L0 32 0 64l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 32zM64 352l0-32L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 32l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM448 352l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z"]
}, cC = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, fC = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
var Ev = typeof global == "object" && global && global.Object === Object && global, Y1 = typeof self == "object" && self && self.Object === Object && self, nr = Ev || Y1 || Function("return this")(), br = nr.Symbol, xv = Object.prototype, X1 = xv.hasOwnProperty, Z1 = xv.toString, vn = br ? br.toStringTag : void 0;
function J1(e) {
  var t = X1.call(e, vn), r = e[vn];
  try {
    e[vn] = void 0;
    var n = !0;
  } catch {
  }
  var i = Z1.call(e);
  return n && (t ? e[vn] = r : delete e[vn]), i;
}
var Q1 = Object.prototype, e_ = Q1.toString;
function t_(e) {
  return e_.call(e);
}
var r_ = "[object Null]", n_ = "[object Undefined]", ah = br ? br.toStringTag : void 0;
function qr(e) {
  return e == null ? e === void 0 ? n_ : r_ : ah && ah in Object(e) ? J1(e) : t_(e);
}
function Fr(e) {
  return e != null && typeof e == "object";
}
var i_ = "[object Symbol]";
function Ki(e) {
  return typeof e == "symbol" || Fr(e) && qr(e) == i_;
}
function a_(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var _r = Array.isArray, sh = br ? br.prototype : void 0, oh = sh ? sh.toString : void 0;
function Ov(e) {
  if (typeof e == "string")
    return e;
  if (_r(e))
    return a_(e, Ov) + "";
  if (Ki(e))
    return oh ? oh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var s_ = /\s/;
function o_(e) {
  for (var t = e.length; t-- && s_.test(e.charAt(t)); )
    ;
  return t;
}
var u_ = /^\s+/;
function c_(e) {
  return e && e.slice(0, o_(e) + 1).replace(u_, "");
}
function wr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var uh = NaN, f_ = /^[-+]0x[0-9a-f]+$/i, l_ = /^0b[01]+$/i, h_ = /^0o[0-7]+$/i, d_ = parseInt;
function lC(e) {
  if (typeof e == "number")
    return e;
  if (Ki(e))
    return uh;
  if (wr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = c_(e);
  var r = l_.test(e);
  return r || h_.test(e) ? d_(e.slice(2), r ? 2 : 8) : f_.test(e) ? uh : +e;
}
function Sv(e) {
  return e;
}
var p_ = "[object AsyncFunction]", m_ = "[object Function]", g_ = "[object GeneratorFunction]", v_ = "[object Proxy]";
function Tv(e) {
  if (!wr(e))
    return !1;
  var t = qr(e);
  return t == m_ || t == g_ || t == p_ || t == v_;
}
var La = nr["__core-js_shared__"], ch = function() {
  var e = /[^.]+$/.exec(La && La.keys && La.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function y_(e) {
  return !!ch && ch in e;
}
var b_ = Function.prototype, __ = b_.toString;
function Ur(e) {
  if (e != null) {
    try {
      return __.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var w_ = /[\\^$.*+?()[\]{}|]/g, E_ = /^\[object .+?Constructor\]$/, x_ = Function.prototype, O_ = Object.prototype, S_ = x_.toString, T_ = O_.hasOwnProperty, C_ = RegExp(
  "^" + S_.call(T_).replace(w_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function A_(e) {
  if (!wr(e) || y_(e))
    return !1;
  var t = Tv(e) ? C_ : E_;
  return t.test(Ur(e));
}
function R_(e, t) {
  return e == null ? void 0 : e[t];
}
function $r(e, t) {
  var r = R_(e, t);
  return A_(r) ? r : void 0;
}
var ic = $r(nr, "WeakMap");
function I_(e, t, r) {
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
var k_ = 800, P_ = 16, N_ = Date.now;
function M_(e) {
  var t = 0, r = 0;
  return function() {
    var n = N_(), i = P_ - (n - r);
    if (r = n, i > 0) {
      if (++t >= k_)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function D_(e) {
  return function() {
    return e;
  };
}
var Ri = function() {
  try {
    var e = $r(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), F_ = Ri ? function(e, t) {
  return Ri(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: D_(t),
    writable: !0
  });
} : Sv, L_ = M_(F_), B_ = 9007199254740991, j_ = /^(?:0|[1-9]\d*)$/;
function Yi(e, t) {
  var r = typeof e;
  return t = t ?? B_, !!t && (r == "number" || r != "symbol" && j_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function z_(e, t, r) {
  t == "__proto__" && Ri ? Ri(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Gn(e, t) {
  return e === t || e !== e && t !== t;
}
var q_ = Object.prototype, U_ = q_.hasOwnProperty;
function $_(e, t, r) {
  var n = e[t];
  (!(U_.call(e, t) && Gn(n, r)) || r === void 0 && !(t in e)) && z_(e, t, r);
}
var fh = Math.max;
function W_(e, t, r) {
  return t = fh(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = fh(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), I_(e, this, s);
  };
}
function G_(e, t) {
  return L_(W_(e, t, Sv), e + "");
}
var V_ = 9007199254740991;
function Zc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= V_;
}
function Jc(e) {
  return e != null && Zc(e.length) && !Tv(e);
}
function H_(e, t, r) {
  if (!wr(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Jc(r) && Yi(t, r.length) : n == "string" && t in r) ? Gn(r[t], e) : !1;
}
var K_ = Object.prototype;
function Cv(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || K_;
  return e === r;
}
function Y_(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var X_ = "[object Arguments]";
function lh(e) {
  return Fr(e) && qr(e) == X_;
}
var Av = Object.prototype, Z_ = Av.hasOwnProperty, J_ = Av.propertyIsEnumerable, Rv = lh(/* @__PURE__ */ function() {
  return arguments;
}()) ? lh : function(e) {
  return Fr(e) && Z_.call(e, "callee") && !J_.call(e, "callee");
};
function Q_() {
  return !1;
}
var Iv = typeof exports == "object" && exports && !exports.nodeType && exports, hh = Iv && typeof module == "object" && module && !module.nodeType && module, ew = hh && hh.exports === Iv, dh = ew ? nr.Buffer : void 0, tw = dh ? dh.isBuffer : void 0, ac = tw || Q_, rw = "[object Arguments]", nw = "[object Array]", iw = "[object Boolean]", aw = "[object Date]", sw = "[object Error]", ow = "[object Function]", uw = "[object Map]", cw = "[object Number]", fw = "[object Object]", lw = "[object RegExp]", hw = "[object Set]", dw = "[object String]", pw = "[object WeakMap]", mw = "[object ArrayBuffer]", gw = "[object DataView]", vw = "[object Float32Array]", yw = "[object Float64Array]", bw = "[object Int8Array]", _w = "[object Int16Array]", ww = "[object Int32Array]", Ew = "[object Uint8Array]", xw = "[object Uint8ClampedArray]", Ow = "[object Uint16Array]", Sw = "[object Uint32Array]", Ne = {};
Ne[vw] = Ne[yw] = Ne[bw] = Ne[_w] = Ne[ww] = Ne[Ew] = Ne[xw] = Ne[Ow] = Ne[Sw] = !0;
Ne[rw] = Ne[nw] = Ne[mw] = Ne[iw] = Ne[gw] = Ne[aw] = Ne[sw] = Ne[ow] = Ne[uw] = Ne[cw] = Ne[fw] = Ne[lw] = Ne[hw] = Ne[dw] = Ne[pw] = !1;
function Tw(e) {
  return Fr(e) && Zc(e.length) && !!Ne[qr(e)];
}
function Cw(e) {
  return function(t) {
    return e(t);
  };
}
var kv = typeof exports == "object" && exports && !exports.nodeType && exports, Nn = kv && typeof module == "object" && module && !module.nodeType && module, Aw = Nn && Nn.exports === kv, Ba = Aw && Ev.process, ph = function() {
  try {
    var e = Nn && Nn.require && Nn.require("util").types;
    return e || Ba && Ba.binding && Ba.binding("util");
  } catch {
  }
}(), mh = ph && ph.isTypedArray, Pv = mh ? Cw(mh) : Tw, Rw = Object.prototype, Iw = Rw.hasOwnProperty;
function Nv(e, t) {
  var r = _r(e), n = !r && Rv(e), i = !r && !n && ac(e), a = !r && !n && !i && Pv(e), o = r || n || i || a, s = o ? Y_(e.length, String) : [], u = s.length;
  for (var c in e)
    (t || Iw.call(e, c)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Yi(c, u))) && s.push(c);
  return s;
}
function kw(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Pw = kw(Object.keys, Object), Nw = Object.prototype, Mw = Nw.hasOwnProperty;
function Dw(e) {
  if (!Cv(e))
    return Pw(e);
  var t = [];
  for (var r in Object(e))
    Mw.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Fw(e) {
  return Jc(e) ? Nv(e) : Dw(e);
}
function Lw(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Bw = Object.prototype, jw = Bw.hasOwnProperty;
function zw(e) {
  if (!wr(e))
    return Lw(e);
  var t = Cv(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !jw.call(e, n)) || r.push(n);
  return r;
}
function qw(e) {
  return Jc(e) ? Nv(e, !0) : zw(e);
}
var Uw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $w = /^\w*$/;
function Ww(e, t) {
  if (_r(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ki(e) ? !0 : $w.test(e) || !Uw.test(e) || t != null && e in Object(t);
}
var Ln = $r(Object, "create");
function Gw() {
  this.__data__ = Ln ? Ln(null) : {}, this.size = 0;
}
function Vw(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Hw = "__lodash_hash_undefined__", Kw = Object.prototype, Yw = Kw.hasOwnProperty;
function Xw(e) {
  var t = this.__data__;
  if (Ln) {
    var r = t[e];
    return r === Hw ? void 0 : r;
  }
  return Yw.call(t, e) ? t[e] : void 0;
}
var Zw = Object.prototype, Jw = Zw.hasOwnProperty;
function Qw(e) {
  var t = this.__data__;
  return Ln ? t[e] !== void 0 : Jw.call(t, e);
}
var eE = "__lodash_hash_undefined__";
function tE(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ln && t === void 0 ? eE : t, this;
}
function Lr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Lr.prototype.clear = Gw;
Lr.prototype.delete = Vw;
Lr.prototype.get = Xw;
Lr.prototype.has = Qw;
Lr.prototype.set = tE;
function rE() {
  this.__data__ = [], this.size = 0;
}
function Xi(e, t) {
  for (var r = e.length; r--; )
    if (Gn(e[r][0], t))
      return r;
  return -1;
}
var nE = Array.prototype, iE = nE.splice;
function aE(e) {
  var t = this.__data__, r = Xi(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : iE.call(t, r, 1), --this.size, !0;
}
function sE(e) {
  var t = this.__data__, r = Xi(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function oE(e) {
  return Xi(this.__data__, e) > -1;
}
function uE(e, t) {
  var r = this.__data__, n = Xi(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function ir(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ir.prototype.clear = rE;
ir.prototype.delete = aE;
ir.prototype.get = sE;
ir.prototype.has = oE;
ir.prototype.set = uE;
var Bn = $r(nr, "Map");
function cE() {
  this.size = 0, this.__data__ = {
    hash: new Lr(),
    map: new (Bn || ir)(),
    string: new Lr()
  };
}
function fE(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Zi(e, t) {
  var r = e.__data__;
  return fE(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function lE(e) {
  var t = Zi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function hE(e) {
  return Zi(this, e).get(e);
}
function dE(e) {
  return Zi(this, e).has(e);
}
function pE(e, t) {
  var r = Zi(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ar(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ar.prototype.clear = cE;
ar.prototype.delete = lE;
ar.prototype.get = hE;
ar.prototype.has = dE;
ar.prototype.set = pE;
var mE = "Expected a function";
function Qc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(mE);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Qc.Cache || ar)(), r;
}
Qc.Cache = ar;
var gE = 500;
function vE(e) {
  var t = Qc(e, function(n) {
    return r.size === gE && r.clear(), n;
  }), r = t.cache;
  return t;
}
var yE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bE = /\\(\\)?/g, _E = vE(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(yE, function(r, n, i, a) {
    t.push(i ? a.replace(bE, "$1") : n || r);
  }), t;
});
function wE(e) {
  return e == null ? "" : Ov(e);
}
function ef(e, t) {
  return _r(e) ? e : Ww(e, t) ? [e] : _E(wE(e));
}
function tf(e) {
  if (typeof e == "string" || Ki(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function EE(e, t) {
  t = ef(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[tf(t[r++])];
  return r && r == n ? e : void 0;
}
function hC(e, t, r) {
  var n = e == null ? void 0 : EE(e, t);
  return n === void 0 ? r : n;
}
function xE(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function OE() {
  this.__data__ = new ir(), this.size = 0;
}
function SE(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function TE(e) {
  return this.__data__.get(e);
}
function CE(e) {
  return this.__data__.has(e);
}
var AE = 200;
function RE(e, t) {
  var r = this.__data__;
  if (r instanceof ir) {
    var n = r.__data__;
    if (!Bn || n.length < AE - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ar(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function dr(e) {
  var t = this.__data__ = new ir(e);
  this.size = t.size;
}
dr.prototype.clear = OE;
dr.prototype.delete = SE;
dr.prototype.get = TE;
dr.prototype.has = CE;
dr.prototype.set = RE;
function IE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function kE() {
  return [];
}
var PE = Object.prototype, NE = PE.propertyIsEnumerable, gh = Object.getOwnPropertySymbols, ME = gh ? function(e) {
  return e == null ? [] : (e = Object(e), IE(gh(e), function(t) {
    return NE.call(e, t);
  }));
} : kE;
function DE(e, t, r) {
  var n = t(e);
  return _r(e) ? n : xE(n, r(e));
}
function vh(e) {
  return DE(e, Fw, ME);
}
var sc = $r(nr, "DataView"), oc = $r(nr, "Promise"), uc = $r(nr, "Set"), yh = "[object Map]", FE = "[object Object]", bh = "[object Promise]", _h = "[object Set]", wh = "[object WeakMap]", Eh = "[object DataView]", LE = Ur(sc), BE = Ur(Bn), jE = Ur(oc), zE = Ur(uc), qE = Ur(ic), lr = qr;
(sc && lr(new sc(new ArrayBuffer(1))) != Eh || Bn && lr(new Bn()) != yh || oc && lr(oc.resolve()) != bh || uc && lr(new uc()) != _h || ic && lr(new ic()) != wh) && (lr = function(e) {
  var t = qr(e), r = t == FE ? e.constructor : void 0, n = r ? Ur(r) : "";
  if (n)
    switch (n) {
      case LE:
        return Eh;
      case BE:
        return yh;
      case jE:
        return bh;
      case zE:
        return _h;
      case qE:
        return wh;
    }
  return t;
});
var xh = nr.Uint8Array, UE = "__lodash_hash_undefined__";
function $E(e) {
  return this.__data__.set(e, UE), this;
}
function WE(e) {
  return this.__data__.has(e);
}
function Ii(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ar(); ++t < r; )
    this.add(e[t]);
}
Ii.prototype.add = Ii.prototype.push = $E;
Ii.prototype.has = WE;
function GE(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function VE(e, t) {
  return e.has(t);
}
var HE = 1, KE = 2;
function Mv(e, t, r, n, i, a) {
  var o = r & HE, s = e.length, u = t.length;
  if (s != u && !(o && u > s))
    return !1;
  var c = a.get(e), l = a.get(t);
  if (c && l)
    return c == t && l == e;
  var f = -1, d = !0, h = r & KE ? new Ii() : void 0;
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
      if (!GE(t, function(y, _) {
        if (!VE(h, _) && (m === y || i(m, y, r, n, a)))
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
function YE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function XE(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ZE = 1, JE = 2, QE = "[object Boolean]", e2 = "[object Date]", t2 = "[object Error]", r2 = "[object Map]", n2 = "[object Number]", i2 = "[object RegExp]", a2 = "[object Set]", s2 = "[object String]", o2 = "[object Symbol]", u2 = "[object ArrayBuffer]", c2 = "[object DataView]", Oh = br ? br.prototype : void 0, ja = Oh ? Oh.valueOf : void 0;
function f2(e, t, r, n, i, a, o) {
  switch (r) {
    case c2:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case u2:
      return !(e.byteLength != t.byteLength || !a(new xh(e), new xh(t)));
    case QE:
    case e2:
    case n2:
      return Gn(+e, +t);
    case t2:
      return e.name == t.name && e.message == t.message;
    case i2:
    case s2:
      return e == t + "";
    case r2:
      var s = YE;
    case a2:
      var u = n & ZE;
      if (s || (s = XE), e.size != t.size && !u)
        return !1;
      var c = o.get(e);
      if (c)
        return c == t;
      n |= JE, o.set(e, t);
      var l = Mv(s(e), s(t), n, i, a, o);
      return o.delete(e), l;
    case o2:
      if (ja)
        return ja.call(e) == ja.call(t);
  }
  return !1;
}
var l2 = 1, h2 = Object.prototype, d2 = h2.hasOwnProperty;
function p2(e, t, r, n, i, a) {
  var o = r & l2, s = vh(e), u = s.length, c = vh(t), l = c.length;
  if (u != l && !o)
    return !1;
  for (var f = u; f--; ) {
    var d = s[f];
    if (!(o ? d in t : d2.call(t, d)))
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
    var S = e.constructor, C = t.constructor;
    S != C && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof C == "function" && C instanceof C) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var m2 = 1, Sh = "[object Arguments]", Th = "[object Array]", li = "[object Object]", g2 = Object.prototype, Ch = g2.hasOwnProperty;
function v2(e, t, r, n, i, a) {
  var o = _r(e), s = _r(t), u = o ? Th : lr(e), c = s ? Th : lr(t);
  u = u == Sh ? li : u, c = c == Sh ? li : c;
  var l = u == li, f = c == li, d = u == c;
  if (d && ac(e)) {
    if (!ac(t))
      return !1;
    o = !0, l = !1;
  }
  if (d && !l)
    return a || (a = new dr()), o || Pv(e) ? Mv(e, t, r, n, i, a) : f2(e, t, u, r, n, i, a);
  if (!(r & m2)) {
    var h = l && Ch.call(e, "__wrapped__"), m = f && Ch.call(t, "__wrapped__");
    if (h || m) {
      var p = h ? e.value() : e, b = m ? t.value() : t;
      return a || (a = new dr()), i(p, b, r, n, a);
    }
  }
  return d ? (a || (a = new dr()), p2(e, t, r, n, i, a)) : !1;
}
function Dv(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Fr(e) && !Fr(t) ? e !== e && t !== t : v2(e, t, r, n, Dv, i);
}
function y2(e, t, r) {
  t = ef(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = tf(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Zc(i) && Yi(o, i) && (_r(e) || Rv(e)));
}
var Fv = Object.prototype, b2 = Fv.hasOwnProperty, dC = G_(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, i = n > 2 ? t[2] : void 0;
  for (i && H_(t[0], t[1], i) && (n = 1); ++r < n; )
    for (var a = t[r], o = qw(a), s = -1, u = o.length; ++s < u; ) {
      var c = o[s], l = e[c];
      (l === void 0 || Gn(l, Fv[c]) && !b2.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), _2 = Object.prototype, w2 = _2.hasOwnProperty;
function E2(e, t) {
  return e != null && w2.call(e, t);
}
function pC(e, t) {
  return e != null && y2(e, t, E2);
}
function mC(e, t) {
  return Dv(e, t);
}
var x2 = "[object Number]";
function O2(e) {
  return typeof e == "number" || Fr(e) && qr(e) == x2;
}
function gC(e) {
  return O2(e) && e != +e;
}
function S2(e, t, r, n) {
  if (!wr(e))
    return e;
  t = ef(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var u = tf(t[i]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != o) {
      var l = s[u];
      c = void 0, c === void 0 && (c = wr(l) ? l : Yi(t[i + 1]) ? [] : {});
    }
    $_(s, u, c), s = s[u];
  }
  return e;
}
function vC(e, t, r) {
  return e == null ? e : S2(e, t, r);
}
const Qe = [];
for (let e = 0; e < 256; ++e)
  Qe.push((e + 256).toString(16).slice(1));
function T2(e, t = 0) {
  return (Qe[e[t + 0]] + Qe[e[t + 1]] + Qe[e[t + 2]] + Qe[e[t + 3]] + "-" + Qe[e[t + 4]] + Qe[e[t + 5]] + "-" + Qe[e[t + 6]] + Qe[e[t + 7]] + "-" + Qe[e[t + 8]] + Qe[e[t + 9]] + "-" + Qe[e[t + 10]] + Qe[e[t + 11]] + Qe[e[t + 12]] + Qe[e[t + 13]] + Qe[e[t + 14]] + Qe[e[t + 15]]).toLowerCase();
}
let za;
const C2 = new Uint8Array(16);
function A2() {
  if (!za) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    za = crypto.getRandomValues.bind(crypto);
  }
  return za(C2);
}
const R2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ah = { randomUUID: R2 };
function yC(e, t, r) {
  var i;
  if (Ah.randomUUID && !e)
    return Ah.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? A2();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, T2(n);
}
typeof BigInt > "u" && (BigInt = function(e) {
  if (isNaN(e)) throw new Error("");
  return e;
});
const ye = BigInt(0), Oe = BigInt(1), jn = BigInt(2), cc = BigInt(5), ht = BigInt(10), I2 = 2e3, he = {
  s: Oe,
  n: ye,
  d: Oe
};
function Zt(e, t) {
  try {
    e = BigInt(e);
  } catch {
    throw fr();
  }
  return e * t;
}
function xt(e) {
  return typeof e == "bigint" ? e : Math.floor(e);
}
function je(e, t) {
  if (t === ye)
    throw nf();
  const r = Object.create(rf.prototype);
  r.s = e < ye ? -Oe : Oe, e = e < ye ? -e : e;
  const n = Cr(e, t);
  return r.n = e / n, r.d = t / n, r;
}
function Jr(e) {
  const t = {};
  let r = e, n = jn, i = cc - Oe;
  for (; i <= r; ) {
    for (; r % n === ye; )
      r /= n, t[n] = (t[n] || ye) + Oe;
    i += Oe + jn * n++;
  }
  return r !== e ? r > 1 && (t[r] = (t[r] || ye) + Oe) : t[e] = (t[e] || ye) + Oe, t;
}
const Ye = function(e, t) {
  let r = ye, n = Oe, i = Oe;
  if (e != null) if (t !== void 0) {
    if (typeof e == "bigint")
      r = e;
    else {
      if (isNaN(e))
        throw fr();
      if (e % 1 !== 0)
        throw Rh();
      r = BigInt(e);
    }
    if (typeof t == "bigint")
      n = t;
    else {
      if (isNaN(t))
        throw fr();
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
      throw fr();
    i = r * n;
  } else if (typeof e == "number") {
    if (isNaN(e))
      throw fr();
    if (e < 0 && (i = -Oe, e = -e), e % 1 === 0)
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
    let a = 0, o = ye, s = ye, u = ye, c = Oe, l = Oe, f = e.replace(/_/g, "").match(/\d+|./g);
    if (f === null)
      throw fr();
    if (f[a] === "-" ? (i = -Oe, a++) : f[a] === "+" && a++, f.length === a + 1 ? s = Zt(f[a++], i) : f[a + 1] === "." || f[a] === "." ? (f[a] !== "." && (o = Zt(f[a++], i)), a++, (a + 1 === f.length || f[a + 1] === "(" && f[a + 3] === ")" || f[a + 1] === "'" && f[a + 3] === "'") && (s = Zt(f[a], i), c = ht ** BigInt(f[a].length), a++), (f[a] === "(" && f[a + 2] === ")" || f[a] === "'" && f[a + 2] === "'") && (u = Zt(f[a + 1], i), l = ht ** BigInt(f[a + 1].length) - Oe, a += 3)) : f[a + 1] === "/" || f[a + 1] === ":" ? (s = Zt(f[a], i), c = Zt(f[a + 2], Oe), a += 3) : f[a + 3] === "/" && f[a + 1] === " " && (o = Zt(f[a], i), s = Zt(f[a + 2], i), c = Zt(f[a + 4], Oe), a += 5), f.length <= a)
      n = c * l, i = /* void */
      r = u + n * o + l * s;
    else
      throw fr();
  } else if (typeof e == "bigint")
    r = e, i = e, n = Oe;
  else
    throw fr();
  if (n === ye)
    throw nf();
  he.s = i < ye ? -Oe : Oe, he.n = r < ye ? -r : r, he.d = n < ye ? -n : n;
};
function k2(e, t, r) {
  let n = Oe;
  for (; t > ye; e = e * e % r, t >>= Oe)
    t & Oe && (n = n * e % r);
  return n;
}
function P2(e, t) {
  for (; t % jn === ye; t /= jn)
    ;
  for (; t % cc === ye; t /= cc)
    ;
  if (t === Oe)
    return ye;
  let r = ht % t, n = 1;
  for (; r !== Oe; n++)
    if (r = r * ht % t, n > I2)
      return ye;
  return BigInt(n);
}
function N2(e, t, r) {
  let n = Oe, i = k2(ht, r, t);
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
function rf(e, t) {
  if (Ye(e, t), this instanceof rf)
    e = Cr(he.d, he.n), this.s = he.s, this.n = he.n / e, this.d = he.d / e;
  else
    return je(he.s * he.n, he.d);
}
var nf = function() {
  return new Error("Division by Zero");
}, fr = function() {
  return new Error("Invalid argument");
}, Rh = function() {
  return new Error("Parameters must be integer");
};
rf.prototype = {
  s: Oe,
  n: ye,
  d: Oe,
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
    return Ye(e, t), je(
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
    return Ye(e, t), je(
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
    return Ye(e, t), je(
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
    return Ye(e, t), je(
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
      return je(this.s * this.n % this.d, Oe);
    if (Ye(e, t), ye === he.n * this.d)
      throw nf();
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
    return Ye(e, t), je(Cr(he.n, this.n) * Cr(he.d, this.d), he.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(e, t) {
    return Ye(e, t), he.n === ye && this.n === ye ? je(ye, Oe) : je(he.n * this.n, Cr(he.n, this.n) * Cr(he.d, this.d));
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
    if (Ye(e, t), he.d === Oe)
      return he.s < ye ? je((this.s * this.d) ** he.n, this.n ** he.n) : je((this.s * this.n) ** he.n, this.d ** he.n);
    if (this.s < ye) return null;
    let r = Jr(this.n), n = Jr(this.d), i = Oe, a = Oe;
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
    if (Ye(e, t), this.s <= ye || he.s <= ye) return null;
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
    return Ye(e, t), this.s * this.n * he.d === he.s * he.n * this.d;
  },
  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lt: function(e, t) {
    return Ye(e, t), this.s * this.n * he.d < he.s * he.n * this.d;
  },
  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lte: function(e, t) {
    return Ye(e, t), this.s * this.n * he.d <= he.s * he.n * this.d;
  },
  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gt: function(e, t) {
    return Ye(e, t), this.s * this.n * he.d > he.s * he.n * this.d;
  },
  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gte: function(e, t) {
    return Ye(e, t), this.s * this.n * he.d >= he.s * he.n * this.d;
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
    Ye(e, t);
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
      xt(this.s * e * this.n / this.d) + (e * this.n % this.d > ye && this.s >= ye ? Oe : ye),
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
      xt(this.s * e * this.n / this.d) - (e * this.n % this.d > ye && this.s < ye ? Oe : ye),
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
      xt(this.s * e * this.n / this.d) + this.s * ((this.s >= ye ? Oe : ye) + jn * (e * this.n % this.d) > this.d ? Oe : ye),
      e
    );
  },
  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  roundTo: function(e, t) {
    Ye(e, t);
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
    return Ye(e, t), !(!(he.n * this.d) || this.n * he.d % (he.n * this.d));
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
    let n = P2(t, r), i = N2(t, r, n), a = this.s < ye ? "-" : "";
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
    if (r === Oe)
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
    if (r === Oe)
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
    } while (e !== Oe);
    return r;
  },
  simplify: function(e) {
    const t = BigInt(1 / (e || 1e-3) | 0), r = this.abs(), n = r.toContinued();
    for (let i = 1; i < n.length; i++) {
      let a = je(n[i - 1], Oe);
      for (let s = i - 2; s >= 0; s--)
        a = a.inverse().add(n[s]);
      let o = a.sub(r);
      if (o.n * t < o.d)
        return a.mul(this.s);
    }
    return this;
  }
};
var Lv = Object.defineProperty, M2 = Object.getOwnPropertyNames, Y = (e, t) => Lv(e, "name", { value: t, configurable: !0 }), D2 = (e, t) => function() {
  return t || (0, e[M2(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, af = (e, t) => {
  for (var r in t)
    Lv(e, r, { get: t[r], enumerable: !0 });
}, F2 = D2({
  "(disabled):util"() {
  }
}), ki = {};
af(ki, {
  addChainableMethod: () => vf,
  addLengthGuard: () => Kn,
  addMethod: () => pf,
  addProperty: () => df,
  checkError: () => mt,
  compareByInspect: () => Di,
  eql: () => fy,
  expectTypes: () => Wv,
  flag: () => Se,
  getActual: () => Qi,
  getMessage: () => uf,
  getName: () => ta,
  getOperator: () => wf,
  getOwnEnumerableProperties: () => _f,
  getOwnEnumerablePropertySymbols: () => bf,
  getPathInfo: () => hf,
  hasProperty: () => ea,
  inspect: () => Re,
  isNaN: () => Fi,
  isNumeric: () => Xe,
  isProxyEnabled: () => Hn,
  isRegExp: () => Li,
  objDisplay: () => Ir,
  overwriteChainableMethod: () => yf,
  overwriteMethod: () => gf,
  overwriteProperty: () => mf,
  proxify: () => fn,
  test: () => sf,
  transferFlags: () => It,
  type: () => ke
});
var mt = {};
af(mt, {
  compatibleConstructor: () => zv,
  compatibleInstance: () => jv,
  compatibleMessage: () => qv,
  getConstructorName: () => Uv,
  getMessage: () => $v
});
function Ji(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
Y(Ji, "isErrorInstance");
function Bv(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Y(Bv, "isRegExp");
function jv(e, t) {
  return Ji(t) && e === t;
}
Y(jv, "compatibleInstance");
function zv(e, t) {
  return Ji(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
Y(zv, "compatibleConstructor");
function qv(e, t) {
  const r = typeof e == "string" ? e : e.message;
  return Bv(t) ? t.test(r) : typeof t == "string" ? r.indexOf(t) !== -1 : !1;
}
Y(qv, "compatibleMessage");
function Uv(e) {
  let t = e;
  return Ji(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
Y(Uv, "getConstructorName");
function $v(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
Y($v, "getMessage");
function Se(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    n[t] = r;
  else
    return n[t];
}
Y(Se, "flag");
function sf(e, t) {
  var r = Se(e, "negate"), n = t[0];
  return r ? !n : n;
}
Y(sf, "test");
function ke(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Y(ke, "type");
var L2 = "captureStackTrace" in Error, Nr, Ie = (Nr = class extends Error {
  constructor(r = "Unspecified AssertionError", n, i) {
    super(r);
    kl(this, "message");
    this.message = r, L2 && Error.captureStackTrace(this, i || Nr);
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
}, Y(Nr, "AssertionError"), Nr);
function Wv(e, t) {
  var r = Se(e, "message"), n = Se(e, "ssfi");
  r = r ? r + ": " : "", e = Se(e, "object"), t = t.map(function(o) {
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
function Qi(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
Y(Qi, "getActual");
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
}, B2 = {
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
}, an = "…";
function Gv(e, t) {
  const r = Ih[B2[t]] || Ih[t] || "";
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
function sr(e, t, r = an) {
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
Y(sr, "truncate");
function _t(e, t, r, n = ", ") {
  r = r || t.inspect;
  const i = e.length;
  if (i === 0)
    return "";
  const a = t.truncate;
  let o = "", s = "", u = "";
  for (let c = 0; c < i; c += 1) {
    const l = c + 1 === e.length, f = c + 2 === e.length;
    u = `${an}(${e.length - c})`;
    const d = e[c];
    t.truncate = a - o.length - (l ? 0 : n.length);
    const h = s || r(d, t) + (l ? "" : n), m = o.length + h.length, p = m + u.length;
    if (l && m > a && o.length + u.length <= a || !l && !f && p > a || (s = l ? "" : r(e[c + 1], t) + (f ? "" : n), !l && f && p > a && m + s.length > a))
      break;
    if (o += h, !l && !f && m + s.length >= a) {
      u = `${an}(${e.length - c - 1})`;
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
function sn([e, t], r) {
  return r.truncate -= 2, typeof e == "string" ? e = Kv(e) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`), r.truncate -= e.length, t = r.inspect(t, r), `${e}: ${t}`;
}
Y(sn, "inspectProperty");
function Yv(e, t) {
  const r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length)
    return "[]";
  t.truncate -= 4;
  const n = _t(e, t);
  t.truncate -= n.length;
  let i = "";
  return r.length && (i = _t(r.map((a) => [a, e[a]]), t, sn)), `[ ${n}${i ? `, ${i}` : ""} ]`;
}
Y(Yv, "inspectArray");
var j2 = /* @__PURE__ */ Y((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function jt(e, t) {
  const r = j2(e);
  t.truncate -= r.length + 4;
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return `${r}[]`;
  let i = "";
  for (let o = 0; o < e.length; o++) {
    const s = `${t.stylize(sr(e[o], t.truncate), "number")}${o === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= s.length, e[o] !== e.length && t.truncate <= 3) {
      i += `${an}(${e.length - e[o] + 1})`;
      break;
    }
    i += s;
  }
  let a = "";
  return n.length && (a = _t(n.map((o) => [o, e[o]]), t, sn)), `${r}[ ${i}${a ? `, ${a}` : ""} ]`;
}
Y(jt, "inspectTypedArray");
function Xv(e, t) {
  const r = e.toJSON();
  if (r === null)
    return "Invalid Date";
  const n = r.split("T"), i = n[0];
  return t.stylize(`${i}T${sr(n[1], t.truncate - i.length - 1)}`, "date");
}
Y(Xv, "inspectDate");
function fc(e, t) {
  const r = e[Symbol.toStringTag] || "Function", n = e.name;
  return n ? t.stylize(`[${r} ${sr(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
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
var z2 = Number.isNaN || ((e) => e !== e);
function lc(e, t) {
  return z2(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(sr(String(e), t.truncate), "number");
}
Y(lc, "inspectNumber");
function hc(e, t) {
  let r = sr(e.toString(), t.truncate - 1);
  return r !== an && (r += "n"), t.stylize(r, "bigint");
}
Y(hc, "inspectBigInt");
function ey(e, t) {
  const r = e.toString().split("/")[2], n = t.truncate - (2 + r.length), i = e.source;
  return t.stylize(`/${sr(i, n)}/${r}`, "regexp");
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
var kh = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), q2 = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, U2 = 16;
function ny(e) {
  return q2[e] || `\\u${`0000${e.charCodeAt(0).toString(U2)}`.slice(-4)}`;
}
Y(ny, "escape");
function dc(e, t) {
  return kh.test(e) && (e = e.replace(kh, ny)), t.stylize(`'${sr(e, t.truncate - 2)}'`, "string");
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
var $2 = iy;
function Mn(e, t) {
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const i = _t(r.map((s) => [s, e[s]]), t, sn), a = _t(n.map((s) => [s, e[s]]), t, sn);
  t.seen.pop();
  let o = "";
  return i && a && (o = ", "), `{ ${i}${o}${a} }`;
}
Y(Mn, "inspectObject");
var qa = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function ay(e, t) {
  let r = "";
  return qa && qa in e && (r = e[qa]), r = r || e.constructor.name, (!r || r === "_class") && (r = "<Anonymous Class>"), t.truncate -= r.length, `${r}${Mn(e, t)}`;
}
Y(ay, "inspectClass");
function sy(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${_t(e, t)} ]`);
}
Y(sy, "inspectArguments");
var W2 = [
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
  const r = Object.getOwnPropertyNames(e).filter((o) => W2.indexOf(o) === -1), n = e.name;
  t.truncate -= n.length;
  let i = "";
  if (typeof e.message == "string" ? i = sr(e.message, t.truncate) : r.unshift("message"), i = i ? `: ${i}` : "", t.truncate -= i.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const a = _t(r.map((o) => [o, e[o]]), t, sn);
  return `${n}${i}${a ? ` { ${a} }` : ""}`;
}
Y(oy, "inspectObject");
function uy([e, t], r) {
  return r.truncate -= 3, t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
Y(uy, "inspectAttribute");
function Pi(e, t) {
  return _t(e, t, of, `
`);
}
Y(Pi, "inspectHTMLCollection");
function of(e, t) {
  const r = e.getAttributeNames(), n = e.tagName.toLowerCase(), i = t.stylize(`<${n}`, "special"), a = t.stylize(">", "special"), o = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let s = "";
  r.length > 0 && (s += " ", s += _t(r.map((l) => [l, e.getAttribute(l)]), t, uy, " ")), t.truncate -= s.length;
  const u = t.truncate;
  let c = Pi(e.children, t);
  return c && c.length > u && (c = `${an}(${e.children.length})`), `${i}${s}${a}${c}${o}`;
}
Y(of, "inspectHTML");
var G2 = typeof Symbol == "function" && typeof Symbol.for == "function", Ua = G2 ? Symbol.for("chai/inspect") : "@@chai/inspect", en = !1;
try {
  const e = F2();
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
  Promise: $2,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: sy,
  Int8Array: jt,
  Uint8Array: jt,
  Uint8ClampedArray: jt,
  Int16Array: jt,
  Uint16Array: jt,
  Int32Array: jt,
  Uint32Array: jt,
  Float32Array: jt,
  Float64Array: jt,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: oy,
  HTMLCollection: Pi,
  NodeList: Pi
}, V2 = /* @__PURE__ */ Y((e, t, r) => Ua in e && typeof e[Ua] == "function" ? e[Ua](t) : en && en in e && typeof e[en] == "function" ? e[en](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && Ph.has(e.constructor) ? Ph.get(e.constructor)(e, t) : Nh[r] ? Nh[r](e, t) : "", "inspectCustom"), H2 = Object.prototype.toString;
function Ni(e, t = {}) {
  const r = Vv(t, Ni), { customInspect: n } = r;
  let i = e === null ? "null" : typeof e;
  if (i === "object" && (i = H2.call(e).slice(8, -1)), i in Mh)
    return Mh[i](e, r);
  if (n && e) {
    const o = V2(e, r, i);
    if (o)
      return typeof o == "string" ? o : Ni(o, r);
  }
  const a = e ? Object.getPrototypeOf(e) : !1;
  return a === Object.prototype || a === null ? Mn(e, r) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? of(e, r) : "constructor" in e ? e.constructor !== Object ? ay(e, r) : Mn(e, r) : e === Object(e) ? Mn(e, r) : r.stylize(String(e), i);
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
function uf(e, t) {
  var r = Se(e, "negate"), n = Se(e, "object"), i = t[3], a = Qi(e, t), o = r ? t[2] : t[1], s = Se(e, "message");
  return typeof o == "function" && (o = o()), o = o || "", o = o.replace(/#\{this\}/g, function() {
    return Ir(n);
  }).replace(/#\{act\}/g, function() {
    return Ir(a);
  }).replace(/#\{exp\}/g, function() {
    return Ir(i);
  }), s ? s + ": " + o : o;
}
Y(uf, "getMessage");
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
function cf() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
Y(cf, "FakeMap");
cf.prototype = {
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
var cy = typeof WeakMap == "function" ? WeakMap : cf;
function gc(e, t, r) {
  if (!r || Br(e) || Br(t))
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
function Rn(e, t, r, n) {
  if (!(!r || Br(e) || Br(t))) {
    var i = r.get(e);
    i ? i.set(t, n) : (i = new cy(), i.set(t, n), r.set(e, i));
  }
}
Y(Rn, "memoizeSet");
var fy = Vn;
function Vn(e, t, r) {
  if (r && r.comparator)
    return vc(e, t, r);
  var n = ff(e, t);
  return n !== null ? n : vc(e, t, r);
}
Y(Vn, "deepEqual");
function ff(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : Br(e) || Br(t) ? !1 : null;
}
Y(ff, "simpleEqual");
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
      return Rn(e, t, r.memoize, o), o;
    var s = ff(e, t);
    if (s !== null)
      return s;
  }
  var u = mc(e);
  if (u !== mc(t))
    return Rn(e, t, r.memoize, !1), !1;
  Rn(e, t, r.memoize, !0);
  var c = ly(e, t, u, r);
  return Rn(e, t, r.memoize, c), c;
}
Y(vc, "extensiveDeepEqual");
function ly(e, t, r, n) {
  switch (r) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return Vn(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return lf(e, t, ["name", "message", "code"], n);
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
      return pr(e, t, n);
    case "RegExp":
      return hy(e, t);
    case "Generator":
      return dy(e, t, n);
    case "DataView":
      return pr(new Uint8Array(e.buffer), new Uint8Array(t.buffer), n);
    case "ArrayBuffer":
      return pr(new Uint8Array(e), new Uint8Array(t), n);
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
  }, "gatherEntries")), pr(n.sort(), i.sort(), r);
}
Y(yc, "entriesEqual");
function pr(e, t, r) {
  var n = e.length;
  if (n !== t.length)
    return !1;
  if (n === 0)
    return !0;
  for (var i = -1; ++i < n; )
    if (Vn(e[i], t[i], r) === !1)
      return !1;
  return !0;
}
Y(pr, "iterableEqual");
function dy(e, t, r) {
  return pr(Mi(e), Mi(t), r);
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
function lf(e, t, r, n) {
  var i = r.length;
  if (i === 0)
    return !0;
  for (var a = 0; a < i; a += 1)
    if (Vn(e[r[a]], t[r[a]], n) === !1)
      return !1;
  return !0;
}
Y(lf, "keysEqual");
function my(e, t, r) {
  var n = _c(e), i = _c(t), a = wc(e), o = wc(t);
  if (n = n.concat(a), i = i.concat(o), n.length && n.length === i.length)
    return pr(Ec(n).sort(), Ec(i).sort()) === !1 ? !1 : lf(e, t, n, r);
  var s = bc(e), u = bc(t);
  return s.length && s.length === u.length ? (s.sort(), u.sort(), pr(s, u, r)) : n.length === 0 && s.length === 0 && i.length === 0 && u.length === 0;
}
Y(my, "objectEqual");
function Br(e) {
  return e === null || typeof e != "object";
}
Y(Br, "isPrimitive");
function Ec(e) {
  return e.map(/* @__PURE__ */ Y(function(r) {
    return typeof r == "symbol" ? r.toString() : r;
  }, "mapSymbol"));
}
Y(Ec, "mapSymbols");
function ea(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
Y(ea, "hasProperty");
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
function hf(e, t) {
  const r = gy(t), n = r[r.length - 1], i = {
    parent: r.length > 1 ? xc(e, r, r.length - 1) : e,
    name: n.p || n.i,
    value: xc(e, r)
  };
  return i.exists = ea(i.parent, i.name), i;
}
Y(hf, "getPathInfo");
function R(e, t, r, n) {
  return Se(this, "ssfi", r || R), Se(this, "lockSsfi", n), Se(this, "object", e), Se(this, "message", t), Se(this, "eql", st.deepEqual || fy), fn(this);
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
  df(this.prototype, e, t);
};
R.addMethod = function(e, t) {
  pf(this.prototype, e, t);
};
R.addChainableMethod = function(e, t, r) {
  vf(this.prototype, e, t, r);
};
R.overwriteProperty = function(e, t) {
  mf(this.prototype, e, t);
};
R.overwriteMethod = function(e, t) {
  gf(this.prototype, e, t);
};
R.overwriteChainableMethod = function(e, t, r) {
  yf(this.prototype, e, t, r);
};
R.prototype.assert = function(e, t, r, n, i, a) {
  var o = sf(this, arguments);
  if (a !== !1 && (a = !0), n === void 0 && i === void 0 && (a = !1), st.showDiff !== !0 && (a = !1), !o) {
    t = uf(this, arguments);
    var s = Qi(this, arguments), u = {
      actual: s,
      expected: n,
      showDiff: a
    }, c = wf(this, arguments);
    throw c && (u.operator = c), new Ie(
      t,
      u,
      st.includeStack ? this.assert : Se(this, "ssfi")
    );
  }
};
Object.defineProperty(R.prototype, "_obj", {
  get: function() {
    return Se(this, "object");
  },
  set: function(e) {
    Se(this, "object", e);
  }
});
function Hn() {
  return st.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
Y(Hn, "isProxyEnabled");
function df(e, t, r) {
  r = r === void 0 ? function() {
  } : r, Object.defineProperty(e, t, {
    get: /* @__PURE__ */ Y(function n() {
      !Hn() && !Se(this, "lockSsfi") && Se(this, "ssfi", n);
      var i = r.call(this);
      if (i !== void 0)
        return i;
      var a = new R();
      return It(this, a), a;
    }, "propertyGetter"),
    configurable: !0
  });
}
Y(df, "addProperty");
var K2 = Object.getOwnPropertyDescriptor(function() {
}, "length");
function Kn(e, t, r) {
  return K2.configurable && Object.defineProperty(e, "length", {
    get: function() {
      throw Error(
        r ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".'
      );
    }
  }), e;
}
Y(Kn, "addLengthGuard");
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
function fn(e, t) {
  return Hn() ? new Proxy(e, {
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
      return Dh.indexOf(i) === -1 && !Se(n, "lockSsfi") && Se(n, "ssfi", r), Reflect.get(n, i);
    }, "proxyGetter")
  }) : e;
}
Y(fn, "proxify");
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
function pf(e, t, r) {
  var n = /* @__PURE__ */ Y(function() {
    Se(this, "lockSsfi") || Se(this, "ssfi", n);
    var i = r.apply(this, arguments);
    if (i !== void 0)
      return i;
    var a = new R();
    return It(this, a), a;
  }, "methodWrapper");
  Kn(n, t, !1), e[t] = fn(n, t);
}
Y(pf, "addMethod");
function mf(e, t, r) {
  var n = Object.getOwnPropertyDescriptor(e, t), i = /* @__PURE__ */ Y(function() {
  }, "_super");
  n && typeof n.get == "function" && (i = n.get), Object.defineProperty(e, t, {
    get: /* @__PURE__ */ Y(function a() {
      !Hn() && !Se(this, "lockSsfi") && Se(this, "ssfi", a);
      var o = Se(this, "lockSsfi");
      Se(this, "lockSsfi", !0);
      var s = r(i).call(this);
      if (Se(this, "lockSsfi", o), s !== void 0)
        return s;
      var u = new R();
      return It(this, u), u;
    }, "overwritingPropertyGetter"),
    configurable: !0
  });
}
Y(mf, "overwriteProperty");
function gf(e, t, r) {
  var n = e[t], i = /* @__PURE__ */ Y(function() {
    throw new Error(t + " is not a function");
  }, "_super");
  n && typeof n == "function" && (i = n);
  var a = /* @__PURE__ */ Y(function() {
    Se(this, "lockSsfi") || Se(this, "ssfi", a);
    var o = Se(this, "lockSsfi");
    Se(this, "lockSsfi", !0);
    var s = r(i).apply(this, arguments);
    if (Se(this, "lockSsfi", o), s !== void 0)
      return s;
    var u = new R();
    return It(this, u), u;
  }, "overwritingMethodWrapper");
  Kn(a, t, !1), e[t] = fn(a, t);
}
Y(gf, "overwriteMethod");
var Y2 = typeof Object.setPrototypeOf == "function", Fh = /* @__PURE__ */ Y(function() {
}, "testFn"), X2 = Object.getOwnPropertyNames(Fh).filter(function(e) {
  var t = Object.getOwnPropertyDescriptor(Fh, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), Z2 = Function.prototype.call, J2 = Function.prototype.apply;
function vf(e, t, r, n) {
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
        Se(this, "lockSsfi") || Se(this, "ssfi", o);
        var c = i.method.apply(this, arguments);
        if (c !== void 0)
          return c;
        var l = new R();
        return It(this, l), l;
      }, "chainableMethodWrapper");
      if (Kn(o, t, !0), Y2) {
        var s = Object.create(this);
        s.call = Z2, s.apply = J2, Object.setPrototypeOf(o, s);
      } else {
        var u = Object.getOwnPropertyNames(e);
        u.forEach(function(c) {
          if (X2.indexOf(c) === -1) {
            var l = Object.getOwnPropertyDescriptor(e, c);
            Object.defineProperty(o, c, l);
          }
        });
      }
      return It(this, o), fn(o);
    }, "chainableMethodGetter"),
    configurable: !0
  });
}
Y(vf, "addChainableMethod");
function yf(e, t, r, n) {
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
Y(yf, "overwriteChainableMethod");
function Di(e, t) {
  return Re(e) < Re(t) ? -1 : 1;
}
Y(Di, "compareByInspect");
function bf(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
Y(bf, "getOwnEnumerablePropertySymbols");
function _f(e) {
  return Object.keys(e).concat(bf(e));
}
Y(_f, "getOwnEnumerableProperties");
var Fi = Number.isNaN;
function by(e) {
  var t = ke(e), r = ["Array", "Object", "Function"];
  return r.indexOf(t) !== -1;
}
Y(by, "isObjectType");
function wf(e, t) {
  var r = Se(e, "operator"), n = Se(e, "negate"), i = t[3], a = n ? t[2] : t[1];
  if (r)
    return r;
  if (typeof a == "function" && (a = a()), a = a || "", !!a && !/\shave\s/.test(a)) {
    var o = by(i);
    return /\snot\s/.test(a) ? o ? "notDeepStrictEqual" : "notStrictEqual" : o ? "deepStrictEqual" : "strictEqual";
  }
}
Y(wf, "getOperator");
function ta(e) {
  return e.name;
}
Y(ta, "getName");
function Li(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Y(Li, "isRegExp");
function Xe(e) {
  return ["Number", "BigInt"].includes(ke(e));
}
Y(Xe, "isNumeric");
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
function Ef(e, t) {
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
Y(Ef, "an");
R.addChainableMethod("an", Ef);
R.addChainableMethod("a", Ef);
function _y(e, t) {
  return Fi(e) && Fi(t) || e === t;
}
Y(_y, "SameValueZero");
function Yn() {
  $(this, "contains", !0);
}
Y(Yn, "includeChainingBehavior");
function Xn(e, t) {
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
Y(Xn, "include");
R.addChainableMethod("include", Xn, Yn);
R.addChainableMethod("contain", Xn, Yn);
R.addChainableMethod("contains", Xn, Yn);
R.addChainableMethod("includes", Xn, Yn);
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
function xf() {
  var e = $(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
Y(xf, "assertExist");
R.addProperty("exist", xf);
R.addProperty("exists", xf);
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
      var i = r + ".empty was passed a function " + ta(e);
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
function ra(e, t) {
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
Y(ra, "assertEqual");
R.addMethod("equal", ra);
R.addMethod("equals", ra);
R.addMethod("eq", ra);
function Sf(e, t) {
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
Y(Sf, "assertEql");
R.addMethod("eql", Sf);
R.addMethod("eqls", Sf);
function na(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase();
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    throw new Ie(
      a + "the argument to above must be a date",
      void 0,
      o
    );
  if (!Xe(e) && (n || Xe(r)))
    throw new Ie(
      a + "the argument to above must be a number",
      void 0,
      o
    );
  if (!n && s !== "date" && !Xe(r)) {
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
Y(na, "assertAbove");
R.addMethod("above", na);
R.addMethod("gt", na);
R.addMethod("greaterThan", na);
function ia(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to least must be a date";
  else if (!Xe(e) && (n || Xe(r)))
    c = a + "the argument to least must be a number";
  else if (!n && s !== "date" && !Xe(r)) {
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
Y(ia, "assertLeast");
R.addMethod("least", ia);
R.addMethod("gte", ia);
R.addMethod("greaterThanOrEqual", ia);
function aa(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to below must be a date";
  else if (!Xe(e) && (n || Xe(r)))
    c = a + "the argument to below must be a number";
  else if (!n && s !== "date" && !Xe(r)) {
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
Y(aa, "assertBelow");
R.addMethod("below", aa);
R.addMethod("lt", aa);
R.addMethod("lessThan", aa);
function sa(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to most must be a date";
  else if (!Xe(e) && (n || Xe(r)))
    c = a + "the argument to most must be a number";
  else if (!n && s !== "date" && !Xe(r)) {
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
Y(sa, "assertMost");
R.addMethod("most", sa);
R.addMethod("lte", sa);
R.addMethod("lessThanOrEqual", sa);
R.addMethod("within", function(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "doLength"), a = $(this, "message"), o = a ? a + ": " : "", s = $(this, "ssfi"), u = ke(n).toLowerCase(), c = ke(e).toLowerCase(), l = ke(t).toLowerCase(), f, d = !0, h = c === "date" && l === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (i && u !== "map" && u !== "set" && new R(n, a, s, !0).to.have.property("length"), !i && u === "date" && (c !== "date" || l !== "date"))
    f = o + "the arguments to within must be dates";
  else if ((!Xe(e) || !Xe(t)) && (i || Xe(n)))
    f = o + "the arguments to within must be numbers";
  else if (!i && u !== "date" && !Xe(n)) {
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
function Tf(e, t) {
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
  var o = ta(e);
  o == null && (o = "an unnamed constructor"), this.assert(
    a,
    "expected #{this} to be an instance of " + o,
    "expected #{this} to not be an instance of " + o
  );
}
Y(Tf, "assertInstanceOf");
R.addMethod("instanceof", Tf);
R.addMethod("instanceOf", Tf);
function Cf(e, t, r) {
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
  var c = $(this, "deep"), l = $(this, "negate"), f = n ? hf(o, e) : null, d = n ? f.value : o[e], h = c ? $(this, "eql") : (b, y) => b === y, m = "";
  c && (m += "deep "), i && (m += "own "), n && (m += "nested "), m += "property ";
  var p;
  i ? p = Object.prototype.hasOwnProperty.call(o, e) : n ? p = f.exists : p = ea(o, e), (!l || arguments.length === 1) && this.assert(
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
Y(Cf, "assertProperty");
R.addMethod("property", Cf);
function Af(e, t, r) {
  $(this, "own", !0), Cf.apply(this, arguments);
}
Y(Af, "assertOwnProperty");
R.addMethod("ownProperty", Af);
R.addMethod("haveOwnProperty", Af);
function Rf(e, t, r) {
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
Y(Rf, "assertOwnPropertyDescriptor");
R.addMethod("ownPropertyDescriptor", Rf);
R.addMethod("haveOwnPropertyDescriptor", Rf);
function If() {
  $(this, "doLength", !0);
}
Y(If, "assertLengthChain");
function kf(e, t) {
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
Y(kf, "assertLength");
R.addChainableMethod("length", kf, If);
R.addChainableMethod("lengthOf", kf, If);
function Pf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object");
  this.assert(
    e.exec(r),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
Y(Pf, "assertMatch");
R.addMethod("match", Pf);
R.addMethod("matches", Pf);
R.addMethod("string", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new R(r, n, i, !0).is.a("string"), this.assert(
    ~r.indexOf(e),
    "expected #{this} to contain " + Re(e),
    "expected #{this} to not contain " + Re(e)
  );
});
function Nf(e) {
  var t = $(this, "object"), r = ke(t), n = ke(e), i = $(this, "ssfi"), a = $(this, "deep"), o, s = "", u, c = !0, l = $(this, "message");
  l = l ? l + ": " : "";
  var f = l + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (r === "Map" || r === "Set")
    s = a ? "deeply " : "", u = [], t.forEach(function(_, E) {
      u.push(E);
    }), n !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (u = _f(t), n) {
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
Y(Nf, "assertKeys");
R.addMethod("keys", Nf);
R.addMethod("key", Nf);
function oa(e, t, r) {
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
Y(oa, "assertThrows");
R.addMethod("throw", oa);
R.addMethod("throws", oa);
R.addMethod("Throw", oa);
function Mf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "itself"), i = typeof r == "function" && !n ? r.prototype[e] : r[e];
  this.assert(
    typeof i == "function",
    "expected #{this} to respond to " + Re(e),
    "expected #{this} to not respond to " + Re(e)
  );
}
Y(Mf, "respondTo");
R.addMethod("respondTo", Mf);
R.addMethod("respondsTo", Mf);
R.addProperty("itself", function() {
  $(this, "itself", !0);
});
function Df(e, t) {
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
Y(Df, "satisfy");
R.addMethod("satisfy", Df);
R.addMethod("satisfies", Df);
function Ff(e, t, r) {
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
Y(Ff, "closeTo");
R.addMethod("closeTo", Ff);
R.addMethod("approximately", Ff);
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
function Lf(e, t, r) {
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
Y(Lf, "assertChanges");
R.addMethod("change", Lf);
R.addMethod("changes", Lf);
function Bf(e, t, r) {
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
Y(Bf, "assertIncreases");
R.addMethod("increase", Bf);
R.addMethod("increases", Bf);
function jf(e, t, r) {
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
Y(jf, "assertDecreases");
R.addMethod("decrease", jf);
R.addMethod("decreases", jf);
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
  const t = Se(this, "object"), r = st.showDiff;
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
var Oy = {};
af(Oy, {
  Should: () => ex,
  should: () => Q2
});
function zf() {
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
Y(zf, "loadShould");
var Q2 = zf, ex = zf;
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
    t == Se(n, "object"),
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
    t != Se(n, "object"),
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
  return Se(i, "object");
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
    Se(a, "object") === !0,
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
var tx = [
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
for (const [e, t] of tx)
  A[t] = A[e];
var Bh = [];
function Sy(e) {
  const t = {
    use: Sy,
    AssertionError: Ie,
    util: ki,
    config: st,
    expect: ji,
    assert: A,
    Assertion: R,
    ...Oy
  };
  return ~Bh.indexOf(e) || (e(t, ki), Bh.push(e)), t;
}
Y(Sy, "use");
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
function ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hi = { exports: {} }, $a, jh;
function rx() {
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
function nx() {
  if (zh) return Wa;
  zh = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = rx(), n.destroy = l, Object.keys(t).forEach((f) => {
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
        const _ = b, E = Number(/* @__PURE__ */ new Date()), S = E - (d || E);
        _.diff = S, _.prev = d, _.curr = E, d = E, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let C = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (I, O) => {
          if (I === "%%")
            return "%";
          C++;
          const w = n.formatters[O];
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
function ix() {
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
    e.exports = nx()(t);
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
var ax = ix();
const bC = /* @__PURE__ */ ln(ax);
var di = { exports: {} }, Ga, Uh;
function sx() {
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
function ox() {
  if ($h) return Va;
  $h = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = sx(), n.destroy = l, Object.keys(t).forEach((f) => {
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
        const _ = b, E = Number(/* @__PURE__ */ new Date()), S = E - (d || E);
        _.diff = S, _.prev = d, _.curr = E, d = E, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let C = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (I, O) => {
          if (I === "%%")
            return "%";
          C++;
          const w = n.formatters[O];
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
function ux() {
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
    e.exports = ox()(t);
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
var cx = ux();
const _C = /* @__PURE__ */ ln(cx);
function zn(e) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
}
var rt = Uint8Array, gt = Uint16Array, qf = Int32Array, ua = new rt([
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
]), ca = new rt([
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
]), Oc = new rt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Ty = function(e, t) {
  for (var r = new gt(31), n = 0; n < 31; ++n)
    r[n] = t += 1 << e[n - 1];
  for (var i = new qf(r[30]), n = 1; n < 30; ++n)
    for (var a = r[n]; a < r[n + 1]; ++a)
      i[a] = a - r[n] << 5 | n;
  return { b: r, r: i };
}, Cy = Ty(ua, 2), Ay = Cy.b, Sc = Cy.r;
Ay[28] = 258, Sc[258] = 28;
var Ry = Ty(ca, 0), fx = Ry.b, Gh = Ry.r, Tc = new gt(32768);
for (var Me = 0; Me < 32768; ++Me) {
  var cr = (Me & 43690) >> 1 | (Me & 21845) << 1;
  cr = (cr & 52428) >> 2 | (cr & 13107) << 2, cr = (cr & 61680) >> 4 | (cr & 3855) << 4, Tc[Me] = ((cr & 65280) >> 8 | (cr & 255) << 8) >> 1;
}
var Ut = function(e, t, r) {
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
}, Er = new rt(288);
for (var Me = 0; Me < 144; ++Me)
  Er[Me] = 8;
for (var Me = 144; Me < 256; ++Me)
  Er[Me] = 9;
for (var Me = 256; Me < 280; ++Me)
  Er[Me] = 7;
for (var Me = 280; Me < 288; ++Me)
  Er[Me] = 8;
var qn = new rt(32);
for (var Me = 0; Me < 32; ++Me)
  qn[Me] = 5;
var lx = /* @__PURE__ */ Ut(Er, 9, 0), hx = /* @__PURE__ */ Ut(Er, 9, 1), dx = /* @__PURE__ */ Ut(qn, 5, 0), px = /* @__PURE__ */ Ut(qn, 5, 1), Ha = function(e) {
  for (var t = e[0], r = 1; r < e.length; ++r)
    e[r] > t && (t = e[r]);
  return t;
}, Ot = function(e, t, r) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8) >> (t & 7) & r;
}, Ka = function(e, t) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (t & 7);
}, Uf = function(e) {
  return (e + 7) / 8 | 0;
}, Iy = function(e, t, r) {
  return (r == null || r > e.length) && (r = e.length), new rt(e.subarray(t, r));
}, mx = [
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
  var n = new Error(t || mx[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, At), !r)
    throw n;
  return n;
}, gx = function(e, t, r, n) {
  var i = e.length, a = 0;
  if (!i || t.f && !t.l)
    return r || new rt(0);
  var o = !r, s = o || t.i != 2, u = t.i;
  o && (r = new rt(i * 3));
  var c = function(fe) {
    var we = r.length;
    if (fe > we) {
      var Ee = new rt(Math.max(we * 2, fe));
      Ee.set(r), r = Ee;
    }
  }, l = t.f || 0, f = t.p || 0, d = t.b || 0, h = t.l, m = t.d, p = t.m, b = t.n, y = i * 8;
  do {
    if (!h) {
      l = Ot(e, f, 1);
      var _ = Ot(e, f + 1, 3);
      if (f += 3, _)
        if (_ == 1)
          h = hx, m = px, p = 9, b = 5;
        else if (_ == 2) {
          var B = Ot(e, f, 31) + 257, I = Ot(e, f + 10, 15) + 4, O = B + Ot(e, f + 5, 31) + 1;
          f += 14;
          for (var w = new rt(O), k = new rt(19), q = 0; q < I; ++q)
            k[Oc[q]] = Ot(e, f + q * 3, 7);
          f += I * 3;
          for (var x = Ha(k), L = (1 << x) - 1, v = Ut(k, x, 1), q = 0; q < O; ) {
            var z = v[Ot(e, f, L)];
            f += z & 15;
            var E = z >> 4;
            if (E < 16)
              w[q++] = E;
            else {
              var ie = 0, D = 0;
              for (E == 16 ? (D = 3 + Ot(e, f, 3), f += 2, ie = w[q - 1]) : E == 17 ? (D = 3 + Ot(e, f, 7), f += 3) : E == 18 && (D = 11 + Ot(e, f, 127), f += 7); D--; )
                w[q++] = ie;
            }
          }
          var Q = w.subarray(0, B), F = w.subarray(B);
          p = Ha(Q), b = Ha(F), h = Ut(Q, p, 1), m = Ut(F, b, 1);
        } else
          At(1);
      else {
        var E = Uf(f) + 4, S = e[E - 4] | e[E - 3] << 8, C = E + S;
        if (C > i) {
          u && At(0);
          break;
        }
        s && c(d + S), r.set(e.subarray(E, C), d), t.b = d += S, t.p = f = C * 8, t.f = l;
        continue;
      }
      if (f > y) {
        u && At(0);
        break;
      }
    }
    s && c(d + 131072);
    for (var ee = (1 << p) - 1, N = (1 << b) - 1, M = f; ; M = f) {
      var ie = h[Ka(e, f) & ee], K = ie >> 4;
      if (f += ie & 15, f > y) {
        u && At(0);
        break;
      }
      if (ie || At(2), K < 256)
        r[d++] = K;
      else if (K == 256) {
        M = f, h = null;
        break;
      } else {
        var te = K - 254;
        if (K > 264) {
          var q = K - 257, H = ua[q];
          te = Ot(e, f, (1 << H) - 1) + Ay[q], f += H;
        }
        var pe = m[Ka(e, f) & N], xe = pe >> 4;
        pe || At(3), f += pe & 15;
        var F = fx[xe];
        if (xe > 3) {
          var H = ca[xe];
          F += Ka(e, f) & (1 << H) - 1, f += H;
        }
        if (f > y) {
          u && At(0);
          break;
        }
        s && c(d + 131072);
        var ce = d + te;
        if (d < F) {
          var le = a - F, ve = Math.min(F, ce);
          for (le + d < 0 && At(3); d < ve; ++d)
            r[d] = n[le + d];
        }
        for (; d < ce; ++d)
          r[d] = r[d - F];
      }
    }
    t.l = h, t.p = M, t.b = d, t.f = l, h && (l = 1, t.m = p, t.d = m, t.n = b);
  } while (!l);
  return d != r.length && o ? Iy(r, 0, d) : r.subarray(0, d);
}, Jt = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8;
}, yn = function(e, t, r) {
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
    var o = new rt(r[0].s + 1);
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
      var S = a[n].s;
      h[S] == t && (--h[S], ++p);
    }
    m = t;
  }
  return { t: new rt(h), l: m };
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
}, bn = function(e, t) {
  for (var r = 0, n = 0; n < t.length; ++n)
    r += e[n] * t[n];
  return r;
}, ky = function(e, t, r) {
  var n = r.length, i = Uf(t + 2);
  e[i] = n & 255, e[i + 1] = n >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
  for (var a = 0; a < n; ++a)
    e[i + a + 4] = r[a];
  return (i + 4 + n) * 8;
}, Hh = function(e, t, r, n, i, a, o, s, u, c, l) {
  Jt(t, l++, r), ++i[256];
  for (var f = Ya(i, 15), d = f.t, h = f.l, m = Ya(a, 15), p = m.t, b = m.l, y = Vh(d), _ = y.c, E = y.n, S = Vh(p), C = S.c, B = S.n, I = new gt(19), O = 0; O < _.length; ++O)
    ++I[_[O] & 31];
  for (var O = 0; O < C.length; ++O)
    ++I[C[O] & 31];
  for (var w = Ya(I, 7), k = w.t, q = w.l, x = 19; x > 4 && !k[Oc[x - 1]]; --x)
    ;
  var L = c + 5 << 3, v = bn(i, Er) + bn(a, qn) + o, z = bn(i, d) + bn(a, p) + o + 14 + 3 * x + bn(I, k) + 2 * I[16] + 3 * I[17] + 7 * I[18];
  if (u >= 0 && L <= v && L <= z)
    return ky(t, l, e.subarray(u, u + c));
  var ie, D, Q, F;
  if (Jt(t, l, 1 + (z < v)), l += 2, z < v) {
    ie = Ut(d, h, 0), D = d, Q = Ut(p, b, 0), F = p;
    var ee = Ut(k, q, 0);
    Jt(t, l, E - 257), Jt(t, l + 5, B - 1), Jt(t, l + 10, x - 4), l += 14;
    for (var O = 0; O < x; ++O)
      Jt(t, l + 3 * O, k[Oc[O]]);
    l += 3 * x;
    for (var N = [_, C], M = 0; M < 2; ++M)
      for (var K = N[M], O = 0; O < K.length; ++O) {
        var te = K[O] & 31;
        Jt(t, l, ee[te]), l += k[te], te > 15 && (Jt(t, l, K[O] >> 5 & 127), l += K[O] >> 12);
      }
  } else
    ie = lx, D = Er, Q = dx, F = qn;
  for (var O = 0; O < s; ++O) {
    var H = n[O];
    if (H > 255) {
      var te = H >> 18 & 31;
      yn(t, l, ie[te + 257]), l += D[te + 257], te > 7 && (Jt(t, l, H >> 23 & 31), l += ua[te]);
      var pe = H & 31;
      yn(t, l, Q[pe]), l += F[pe], pe > 3 && (yn(t, l, H >> 5 & 8191), l += ca[pe]);
    } else
      yn(t, l, ie[H]), l += D[H];
  }
  return yn(t, l, ie[256]), l + D[256];
}, vx = /* @__PURE__ */ new qf([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Py = /* @__PURE__ */ new rt(0), yx = function(e, t, r, n, i, a) {
  var o = a.z || e.length, s = new rt(n + o + 5 * (1 + Math.ceil(o / 7e3)) + i), u = s.subarray(n, s.length - i), c = a.l, l = (a.r || 0) & 7;
  if (t) {
    l && (u[0] = a.r >> 3);
    for (var f = vx[t - 1], d = f >> 13, h = f & 8191, m = (1 << r) - 1, p = a.p || new gt(32768), b = a.h || new gt(m + 1), y = Math.ceil(r / 3), _ = 2 * y, E = function(g) {
      return (e[g] ^ e[g + 1] << y ^ e[g + 2] << _) & m;
    }, S = new qf(25e3), C = new gt(288), B = new gt(32), I = 0, O = 0, w = a.i || 0, k = 0, q = a.w || 0, x = 0; w + 2 < o; ++w) {
      var L = E(w), v = w & 32767, z = b[L];
      if (p[v] = z, b[L] = v, q <= w) {
        var ie = o - w;
        if ((I > 7e3 || k > 24576) && (ie > 423 || !c)) {
          l = Hh(e, u, 0, S, C, B, O, k, x, w - x, l), k = I = O = 0, x = w;
          for (var D = 0; D < 286; ++D)
            C[D] = 0;
          for (var D = 0; D < 30; ++D)
            B[D] = 0;
        }
        var Q = 2, F = 0, ee = h, N = v - z & 32767;
        if (ie > 2 && L == E(w - N))
          for (var M = Math.min(d, ie) - 1, K = Math.min(32767, w), te = Math.min(258, ie); N <= K && --ee && v != z; ) {
            if (e[w + Q] == e[w + Q - N]) {
              for (var H = 0; H < te && e[w + H] == e[w + H - N]; ++H)
                ;
              if (H > Q) {
                if (Q = H, F = N, H > M)
                  break;
                for (var pe = Math.min(N, H - 2), xe = 0, D = 0; D < pe; ++D) {
                  var ce = w - N + D & 32767, le = p[ce], ve = ce - le & 32767;
                  ve > xe && (xe = ve, z = ce);
                }
              }
            }
            v = z, z = p[v], N += v - z & 32767;
          }
        if (F) {
          S[k++] = 268435456 | Sc[Q] << 18 | Gh[F];
          var fe = Sc[Q] & 31, we = Gh[F] & 31;
          O += ua[fe] + ca[we], ++C[257 + fe], ++B[we], q = w + Q, ++I;
        } else
          S[k++] = e[w], ++C[e[w]];
      }
    }
    for (w = Math.max(w, q); w < o; ++w)
      S[k++] = e[w], ++C[e[w]];
    l = Hh(e, u, c, S, C, B, O, k, x, w - x, l), c || (a.r = l & 7 | u[l / 8 | 0] << 3, l -= 7, a.h = b, a.p = p, a.i = w, a.w = q);
  } else {
    for (var w = a.w || 0; w < o + c; w += 65535) {
      var Ee = w + 65535;
      Ee >= o && (u[l / 8 | 0] = c, Ee = o), l = ky(u, l + 1, e.subarray(w, Ee));
    }
    a.i = o;
  }
  return Iy(s, 0, n + Uf(l) + i);
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
}, bx = function(e, t, r, n, i) {
  if (!i && (i = { l: 1 }, t.dictionary)) {
    var a = t.dictionary.subarray(-32768), o = new rt(a.length + e.length);
    o.set(a), o.set(e, a.length), e = o, i.w = a.length;
  }
  return yx(e, t.level == null ? 6 : t.level, t.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, n, i);
}, My = function(e, t, r) {
  for (; r; ++t)
    e[t] = r, r >>>= 8;
}, _x = function(e, t) {
  var r = t.level, n = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = n << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
    var i = Ny();
    i.p(t.dictionary), My(e, 2, i.d());
  }
}, wx = function(e, t) {
  return ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) && At(6, "invalid zlib data"), (e[1] >> 5 & 1) == 1 && At(6, "invalid zlib data: " + (e[1] & 32 ? "need" : "unexpected") + " dictionary"), (e[1] >> 3 & 4) + 2;
};
function wC(e, t) {
  t || (t = {});
  var r = Ny();
  r.p(e);
  var n = bx(e, t, t.dictionary ? 6 : 2, 4);
  return _x(n, t), My(n, n.length - 4, r.d()), n;
}
function EC(e, t) {
  return gx(e.subarray(wx(e), -4), { i: 2 }, t, t);
}
var Ex = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), xx = 0;
try {
  Ex.decode(Py, { stream: !0 }), xx = 1;
} catch {
}
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries: Dy,
  setPrototypeOf: Kh,
  isFrozen: Ox,
  getPrototypeOf: Sx,
  getOwnPropertyDescriptor: Tx
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
const pi = ut(Array.prototype.forEach), Cx = ut(Array.prototype.lastIndexOf), Yh = ut(Array.prototype.pop), _n = ut(Array.prototype.push), Ax = ut(Array.prototype.splice), Ei = ut(String.prototype.toLowerCase), Xa = ut(String.prototype.toString), Xh = ut(String.prototype.match), wn = ut(String.prototype.replace), Rx = ut(String.prototype.indexOf), Ix = ut(String.prototype.trim), Ct = ut(Object.prototype.hasOwnProperty), at = ut(RegExp.prototype.test), En = kx(TypeError);
function ut(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ac(e, t, n);
  };
}
function kx(e) {
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
      a !== i && (Ox(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function Px(e) {
  for (let t = 0; t < e.length; t++)
    Ct(e, t) || (e[t] = null);
  return e;
}
function Sr(e) {
  const t = Fy(null);
  for (const [r, n] of Dy(e))
    Ct(e, r) && (Array.isArray(n) ? t[r] = Px(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Sr(n) : t[r] = n);
  return t;
}
function xn(e, t) {
  for (; e !== null; ) {
    const n = Tx(e, t);
    if (n) {
      if (n.get)
        return ut(n.get);
      if (typeof n.value == "function")
        return ut(n.value);
    }
    e = Sx(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Zh = ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Za = ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ja = ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nx = ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Qa = ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Mx = ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Jh = ot(["#text"]), Qh = ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), es = ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ed = ot(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), mi = ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Dx = wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Fx = wt(/<%[\w\W]*|[\w\W]*%>/gm), Lx = wt(/\$\{[\w\W]*/gm), Bx = wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), jx = wt(/^aria-[\-\w]+$/), Ly = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), zx = wt(/^(?:\w+script|data):/i), qx = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), By = wt(/^html$/i), Ux = wt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var td = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: jx,
  ATTR_WHITESPACE: qx,
  CUSTOM_ELEMENT: Ux,
  DATA_ATTR: Bx,
  DOCTYPE_NAME: By,
  ERB_EXPR: Fx,
  IS_ALLOWED_URI: Ly,
  IS_SCRIPT_OR_DATA: zx,
  MUSTACHE_EXPR: Dx,
  TMPLIT_EXPR: Lx
});
const On = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, $x = function() {
  return typeof window > "u" ? null : window;
}, Wx = function(t, r) {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $x();
  const t = (be) => jy(be);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== On.document || !e.Element)
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
  } = e, m = u.prototype, p = xn(m, "cloneNode"), b = xn(m, "remove"), y = xn(m, "nextSibling"), _ = xn(m, "childNodes"), E = xn(m, "parentNode");
  if (typeof o == "function") {
    const be = r.createElement("template");
    be.content && be.content.ownerDocument && (r = be.content.ownerDocument);
  }
  let S, C = "";
  const {
    implementation: B,
    createNodeIterator: I,
    createDocumentFragment: O,
    getElementsByTagName: w
  } = r, {
    importNode: k
  } = n;
  let q = rd();
  t.isSupported = typeof Dy == "function" && typeof E == "function" && B && B.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: x,
    ERB_EXPR: L,
    TMPLIT_EXPR: v,
    DATA_ATTR: z,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: D,
    ATTR_WHITESPACE: Q,
    CUSTOM_ELEMENT: F
  } = td;
  let {
    IS_ALLOWED_URI: ee
  } = td, N = null;
  const M = Te({}, [...Zh, ...Za, ...Ja, ...Qa, ...Jh]);
  let K = null;
  const te = Te({}, [...Qh, ...es, ...ed, ...mi]);
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
  })), pe = null, xe = null, ce = !0, le = !0, ve = !1, fe = !0, we = !1, Ee = !0, g = !1, X = !1, W = !1, P = !1, T = !1, j = !1, re = !0, ne = !1;
  const G = "user-content-";
  let V = !0, J = !1, Z = {}, ae = null;
  const de = Te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _e = null;
  const Fe = Te({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ve = null;
  const Pe = Te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Le = "http://www.w3.org/1998/Math/MathML", Ce = "http://www.w3.org/2000/svg", He = "http://www.w3.org/1999/xhtml";
  let Ft = He, pt = !1, Hr = null;
  const Ra = Te({}, [Le, Ce, He], Xa);
  let Kr = Te({}, ["mi", "mo", "mn", "ms", "mtext"]), Yr = Te({}, ["annotation-xml"]);
  const oi = Te({}, ["title", "style", "font", "a", "script"]);
  let Et = null;
  const Xr = ["application/xhtml+xml", "text/html"], $0 = "text/html";
  let Ke = null, Zr = null;
  const W0 = r.createElement("form"), bl = function(U) {
    return U instanceof RegExp || U instanceof Function;
  }, Ia = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Zr && Zr === U)) {
      if ((!U || typeof U != "object") && (U = {}), U = Sr(U), Et = // eslint-disable-next-line unicorn/prefer-includes
      Xr.indexOf(U.PARSER_MEDIA_TYPE) === -1 ? $0 : U.PARSER_MEDIA_TYPE, Ke = Et === "application/xhtml+xml" ? Xa : Ei, N = Ct(U, "ALLOWED_TAGS") ? Te({}, U.ALLOWED_TAGS, Ke) : M, K = Ct(U, "ALLOWED_ATTR") ? Te({}, U.ALLOWED_ATTR, Ke) : te, Hr = Ct(U, "ALLOWED_NAMESPACES") ? Te({}, U.ALLOWED_NAMESPACES, Xa) : Ra, Ve = Ct(U, "ADD_URI_SAFE_ATTR") ? Te(Sr(Pe), U.ADD_URI_SAFE_ATTR, Ke) : Pe, _e = Ct(U, "ADD_DATA_URI_TAGS") ? Te(Sr(Fe), U.ADD_DATA_URI_TAGS, Ke) : Fe, ae = Ct(U, "FORBID_CONTENTS") ? Te({}, U.FORBID_CONTENTS, Ke) : de, pe = Ct(U, "FORBID_TAGS") ? Te({}, U.FORBID_TAGS, Ke) : {}, xe = Ct(U, "FORBID_ATTR") ? Te({}, U.FORBID_ATTR, Ke) : {}, Z = Ct(U, "USE_PROFILES") ? U.USE_PROFILES : !1, ce = U.ALLOW_ARIA_ATTR !== !1, le = U.ALLOW_DATA_ATTR !== !1, ve = U.ALLOW_UNKNOWN_PROTOCOLS || !1, fe = U.ALLOW_SELF_CLOSE_IN_ATTR !== !1, we = U.SAFE_FOR_TEMPLATES || !1, Ee = U.SAFE_FOR_XML !== !1, g = U.WHOLE_DOCUMENT || !1, P = U.RETURN_DOM || !1, T = U.RETURN_DOM_FRAGMENT || !1, j = U.RETURN_TRUSTED_TYPE || !1, W = U.FORCE_BODY || !1, re = U.SANITIZE_DOM !== !1, ne = U.SANITIZE_NAMED_PROPS || !1, V = U.KEEP_CONTENT !== !1, J = U.IN_PLACE || !1, ee = U.ALLOWED_URI_REGEXP || Ly, Ft = U.NAMESPACE || He, Kr = U.MATHML_TEXT_INTEGRATION_POINTS || Kr, Yr = U.HTML_INTEGRATION_POINTS || Yr, H = U.CUSTOM_ELEMENT_HANDLING || {}, U.CUSTOM_ELEMENT_HANDLING && bl(U.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = U.CUSTOM_ELEMENT_HANDLING.tagNameCheck), U.CUSTOM_ELEMENT_HANDLING && bl(U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), U.CUSTOM_ELEMENT_HANDLING && typeof U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), we && (le = !1), T && (P = !0), Z && (N = Te({}, Jh), K = [], Z.html === !0 && (Te(N, Zh), Te(K, Qh)), Z.svg === !0 && (Te(N, Za), Te(K, es), Te(K, mi)), Z.svgFilters === !0 && (Te(N, Ja), Te(K, es), Te(K, mi)), Z.mathMl === !0 && (Te(N, Qa), Te(K, ed), Te(K, mi))), U.ADD_TAGS && (N === M && (N = Sr(N)), Te(N, U.ADD_TAGS, Ke)), U.ADD_ATTR && (K === te && (K = Sr(K)), Te(K, U.ADD_ATTR, Ke)), U.ADD_URI_SAFE_ATTR && Te(Ve, U.ADD_URI_SAFE_ATTR, Ke), U.FORBID_CONTENTS && (ae === de && (ae = Sr(ae)), Te(ae, U.FORBID_CONTENTS, Ke)), V && (N["#text"] = !0), g && Te(N, ["html", "head", "body"]), N.table && (Te(N, ["tbody"]), delete pe.tbody), U.TRUSTED_TYPES_POLICY) {
        if (typeof U.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw En('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof U.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw En('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = U.TRUSTED_TYPES_POLICY, C = S.createHTML("");
      } else
        S === void 0 && (S = Wx(h, i)), S !== null && typeof C == "string" && (C = S.createHTML(""));
      ot && ot(U), Zr = U;
    }
  }, _l = Te({}, [...Za, ...Ja, ...Nx]), wl = Te({}, [...Qa, ...Mx]), G0 = function(U) {
    let ue = E(U);
    (!ue || !ue.tagName) && (ue = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const me = Ei(U.tagName), Be = Ei(ue.tagName);
    return Hr[U.namespaceURI] ? U.namespaceURI === Ce ? ue.namespaceURI === He ? me === "svg" : ue.namespaceURI === Le ? me === "svg" && (Be === "annotation-xml" || Kr[Be]) : !!_l[me] : U.namespaceURI === Le ? ue.namespaceURI === He ? me === "math" : ue.namespaceURI === Ce ? me === "math" && Yr[Be] : !!wl[me] : U.namespaceURI === He ? ue.namespaceURI === Ce && !Yr[Be] || ue.namespaceURI === Le && !Kr[Be] ? !1 : !wl[me] && (oi[me] || !_l[me]) : !!(Et === "application/xhtml+xml" && Hr[U.namespaceURI]) : !1;
  }, Lt = function(U) {
    _n(t.removed, {
      element: U
    });
    try {
      E(U).removeChild(U);
    } catch {
      b(U);
    }
  }, ui = function(U, ue) {
    try {
      _n(t.removed, {
        attribute: ue.getAttributeNode(U),
        from: ue
      });
    } catch {
      _n(t.removed, {
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
  }, El = function(U) {
    let ue = null, me = null;
    if (W)
      U = "<remove></remove>" + U;
    else {
      const Je = Xh(U, /^[\r\n\t ]+/);
      me = Je && Je[0];
    }
    Et === "application/xhtml+xml" && Ft === He && (U = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + U + "</body></html>");
    const Be = S ? S.createHTML(U) : U;
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
    return U && me && tt.insertBefore(r.createTextNode(me), tt.childNodes[0] || null), Ft === He ? w.call(ue, g ? "html" : "body")[0] : g ? ue.documentElement : tt;
  }, xl = function(U) {
    return I.call(
      U.ownerDocument || U,
      U,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ka = function(U) {
    return U instanceof f && (typeof U.nodeName != "string" || typeof U.textContent != "string" || typeof U.removeChild != "function" || !(U.attributes instanceof l) || typeof U.removeAttribute != "function" || typeof U.setAttribute != "function" || typeof U.namespaceURI != "string" || typeof U.insertBefore != "function" || typeof U.hasChildNodes != "function");
  }, Ol = function(U) {
    return typeof s == "function" && U instanceof s;
  };
  function Xt(be, U, ue) {
    pi(be, (me) => {
      me.call(t, U, ue, Zr);
    });
  }
  const Sl = function(U) {
    let ue = null;
    if (Xt(q.beforeSanitizeElements, U, null), ka(U))
      return Lt(U), !0;
    const me = Ke(U.nodeName);
    if (Xt(q.uponSanitizeElement, U, {
      tagName: me,
      allowedTags: N
    }), U.hasChildNodes() && !Ol(U.firstElementChild) && at(/<[/\w!]/g, U.innerHTML) && at(/<[/\w!]/g, U.textContent) || U.nodeType === On.progressingInstruction || Ee && U.nodeType === On.comment && at(/<[/\w]/g, U.data))
      return Lt(U), !0;
    if (!N[me] || pe[me]) {
      if (!pe[me] && Cl(me) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, me) || H.tagNameCheck instanceof Function && H.tagNameCheck(me)))
        return !1;
      if (V && !ae[me]) {
        const Be = E(U) || U.parentNode, tt = _(U) || U.childNodes;
        if (tt && Be) {
          const Je = tt.length;
          for (let lt = Je - 1; lt >= 0; --lt) {
            const Bt = p(tt[lt], !0);
            Bt.__removalCount = (U.__removalCount || 0) + 1, Be.insertBefore(Bt, y(U));
          }
        }
      }
      return Lt(U), !0;
    }
    return U instanceof u && !G0(U) || (me === "noscript" || me === "noembed" || me === "noframes") && at(/<\/no(script|embed|frames)/i, U.innerHTML) ? (Lt(U), !0) : (we && U.nodeType === On.text && (ue = U.textContent, pi([x, L, v], (Be) => {
      ue = wn(ue, Be, " ");
    }), U.textContent !== ue && (_n(t.removed, {
      element: U.cloneNode()
    }), U.textContent = ue)), Xt(q.afterSanitizeElements, U, null), !1);
  }, Tl = function(U, ue, me) {
    if (re && (ue === "id" || ue === "name") && (me in r || me in W0))
      return !1;
    if (!(le && !xe[ue] && at(z, ue))) {
      if (!(ce && at(ie, ue))) {
        if (!K[ue] || xe[ue]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Cl(U) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, U) || H.tagNameCheck instanceof Function && H.tagNameCheck(U)) && (H.attributeNameCheck instanceof RegExp && at(H.attributeNameCheck, ue) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(ue)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ue === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, me) || H.tagNameCheck instanceof Function && H.tagNameCheck(me)))
          ) return !1;
        } else if (!Ve[ue]) {
          if (!at(ee, wn(me, Q, ""))) {
            if (!((ue === "src" || ue === "xlink:href" || ue === "href") && U !== "script" && Rx(me, "data:") === 0 && _e[U])) {
              if (!(ve && !at(D, wn(me, Q, "")))) {
                if (me)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Cl = function(U) {
    return U !== "annotation-xml" && Xh(U, F);
  }, Al = function(U) {
    Xt(q.beforeSanitizeAttributes, U, null);
    const {
      attributes: ue
    } = U;
    if (!ue || ka(U))
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
        name: Je,
        namespaceURI: lt,
        value: Bt
      } = tt, gn = Ke(Je);
      let it = Je === "value" ? Bt : Ix(Bt);
      if (me.attrName = gn, me.attrValue = it, me.keepAttr = !0, me.forceKeepAttr = void 0, Xt(q.uponSanitizeAttribute, U, me), it = me.attrValue, ne && (gn === "id" || gn === "name") && (ui(Je, U), it = G + it), Ee && at(/((--!?|])>)|<\/(style|title)/i, it)) {
        ui(Je, U);
        continue;
      }
      if (me.forceKeepAttr || (ui(Je, U), !me.keepAttr))
        continue;
      if (!fe && at(/\/>/i, it)) {
        ui(Je, U);
        continue;
      }
      we && pi([x, L, v], (Il) => {
        it = wn(it, Il, " ");
      });
      const Rl = Ke(U.nodeName);
      if (Tl(Rl, gn, it)) {
        if (S && typeof h == "object" && typeof h.getAttributeType == "function" && !lt)
          switch (h.getAttributeType(Rl, gn)) {
            case "TrustedHTML": {
              it = S.createHTML(it);
              break;
            }
            case "TrustedScriptURL": {
              it = S.createScriptURL(it);
              break;
            }
          }
        try {
          lt ? U.setAttributeNS(lt, Je, it) : U.setAttribute(Je, it), ka(U) ? Lt(U) : Yh(t.removed);
        } catch {
        }
      }
    }
    Xt(q.afterSanitizeAttributes, U, null);
  }, V0 = function be(U) {
    let ue = null;
    const me = xl(U);
    for (Xt(q.beforeSanitizeShadowDOM, U, null); ue = me.nextNode(); )
      Xt(q.uponSanitizeShadowNode, ue, null), Sl(ue), Al(ue), ue.content instanceof a && be(ue.content);
    Xt(q.afterSanitizeShadowDOM, U, null);
  };
  return t.sanitize = function(be) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ue = null, me = null, Be = null, tt = null;
    if (pt = !be, pt && (be = "<!-->"), typeof be != "string" && !Ol(be))
      if (typeof be.toString == "function") {
        if (be = be.toString(), typeof be != "string")
          throw En("dirty is not a string, aborting");
      } else
        throw En("toString is not a function");
    if (!t.isSupported)
      return be;
    if (X || Ia(U), t.removed = [], typeof be == "string" && (J = !1), J) {
      if (be.nodeName) {
        const Bt = Ke(be.nodeName);
        if (!N[Bt] || pe[Bt])
          throw En("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (be instanceof s)
      ue = El("<!---->"), me = ue.ownerDocument.importNode(be, !0), me.nodeType === On.element && me.nodeName === "BODY" || me.nodeName === "HTML" ? ue = me : ue.appendChild(me);
    else {
      if (!P && !we && !g && // eslint-disable-next-line unicorn/prefer-includes
      be.indexOf("<") === -1)
        return S && j ? S.createHTML(be) : be;
      if (ue = El(be), !ue)
        return P ? null : j ? C : "";
    }
    ue && W && Lt(ue.firstChild);
    const Je = xl(J ? be : ue);
    for (; Be = Je.nextNode(); )
      Sl(Be), Al(Be), Be.content instanceof a && V0(Be.content);
    if (J)
      return be;
    if (P) {
      if (T)
        for (tt = O.call(ue.ownerDocument); ue.firstChild; )
          tt.appendChild(ue.firstChild);
      else
        tt = ue;
      return (K.shadowroot || K.shadowrootmode) && (tt = k.call(n, tt, !0)), tt;
    }
    let lt = g ? ue.outerHTML : ue.innerHTML;
    return g && N["!doctype"] && ue.ownerDocument && ue.ownerDocument.doctype && ue.ownerDocument.doctype.name && at(By, ue.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + ue.ownerDocument.doctype.name + `>
` + lt), we && pi([x, L, v], (Bt) => {
      lt = wn(lt, Bt, " ");
    }), S && j ? S.createHTML(lt) : lt;
  }, t.setConfig = function() {
    let be = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ia(be), X = !0;
  }, t.clearConfig = function() {
    Zr = null, X = !1;
  }, t.isValidAttribute = function(be, U, ue) {
    Zr || Ia({});
    const me = Ke(be), Be = Ke(U);
    return Tl(me, Be, ue);
  }, t.addHook = function(be, U) {
    typeof U == "function" && _n(q[be], U);
  }, t.removeHook = function(be, U) {
    if (U !== void 0) {
      const ue = Cx(q[be], U);
      return ue === -1 ? void 0 : Ax(q[be], ue, 1)[0];
    }
    return Yh(q[be]);
  }, t.removeHooks = function(be) {
    q[be] = [];
  }, t.removeAllHooks = function() {
    q = rd();
  }, t;
}
var Gx = jy();
const xC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Gx }, Symbol.toStringTag, { value: "Module" })), Gt = /* @__PURE__ */ Object.create(null);
Gt.open = "0";
Gt.close = "1";
Gt.ping = "2";
Gt.pong = "3";
Gt.message = "4";
Gt.upgrade = "5";
Gt.noop = "6";
const xi = /* @__PURE__ */ Object.create(null);
Object.keys(Gt).forEach((e) => {
  xi[Gt[e]] = e;
});
const Ic = { type: "error", data: "parser error" }, zy = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", qy = typeof ArrayBuffer == "function", Uy = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, $f = ({ type: e, data: t }, r, n) => zy && t instanceof Blob ? r ? n(t) : nd(t, n) : qy && (t instanceof ArrayBuffer || Uy(t)) ? r ? n(t) : nd(new Blob([t]), n) : n(Gt[e] + (t || "")), nd = (e, t) => {
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
function Vx(e, t) {
  if (zy && e.data instanceof Blob)
    return e.data.arrayBuffer().then(id).then(t);
  if (qy && (e.data instanceof ArrayBuffer || Uy(e.data)))
    return t(id(e.data));
  $f(e, !1, (r) => {
    ts || (ts = new TextEncoder()), t(ts.encode(r));
  });
}
const ad = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", In = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < ad.length; e++)
  In[ad.charCodeAt(e)] = e;
const Hx = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, a, o, s, u;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const c = new ArrayBuffer(t), l = new Uint8Array(c);
  for (n = 0; n < r; n += 4)
    a = In[e.charCodeAt(n)], o = In[e.charCodeAt(n + 1)], s = In[e.charCodeAt(n + 2)], u = In[e.charCodeAt(n + 3)], l[i++] = a << 2 | o >> 4, l[i++] = (o & 15) << 4 | s >> 2, l[i++] = (s & 3) << 6 | u & 63;
  return c;
}, Kx = typeof ArrayBuffer == "function", Wf = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: $y(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: Yx(e.substring(1), t)
  } : xi[r] ? e.length > 1 ? {
    type: xi[r],
    data: e.substring(1)
  } : {
    type: xi[r]
  } : Ic;
}, Yx = (e, t) => {
  if (Kx) {
    const r = Hx(e);
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
}, Wy = "", Xx = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((a, o) => {
    $f(a, !1, (s) => {
      n[o] = s, ++i === r && t(n.join(Wy));
    });
  });
}, Zx = (e, t) => {
  const r = e.split(Wy), n = [];
  for (let i = 0; i < r.length; i++) {
    const a = Wf(r[i], t);
    if (n.push(a), a.type === "error")
      break;
  }
  return n;
};
function Jx() {
  return new TransformStream({
    transform(e, t) {
      Vx(e, (r) => {
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
function Qx(e, t) {
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
          s.enqueue(Wf(a ? u : rs.decode(u), t)), n = 0;
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
  if (e) return eO(e);
}
function eO(e) {
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
const fa = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), bt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), tO = "arraybuffer";
function Vy(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const rO = bt.setTimeout, nO = bt.clearTimeout;
function la(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = rO.bind(bt), e.clearTimeoutFn = nO.bind(bt)) : (e.setTimeoutFn = bt.setTimeout.bind(bt), e.clearTimeoutFn = bt.clearTimeout.bind(bt));
}
const iO = 1.33;
function aO(e) {
  return typeof e == "string" ? sO(e) : Math.ceil((e.byteLength || e.size) * iO);
}
function sO(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function Hy() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function oO(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function uO(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
  }
  return t;
}
class cO extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class Gf extends Ge {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, la(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
    return super.emitReserved("error", new cO(t, r, n)), this;
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
    const r = Wf(t, this.socket.binaryType);
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
    const r = oO(t);
    return r.length ? "?" + r : "";
  }
}
class fO extends Gf {
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
    Zx(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Xx(t, (r) => {
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
const lO = Ky;
function hO() {
}
class dO extends fO {
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
class $t extends Ge {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, r, n) {
    super(), this.createRequest = t, la(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
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
    typeof document < "u" && (this._index = $t.requestsCount++, $t.requests[this._index] = this);
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
      if (this._xhr.onreadystatechange = hO, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete $t.requests[this._index], this._xhr = null;
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
$t.requestsCount = 0;
$t.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", sd);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in bt ? "pagehide" : "unload";
    addEventListener(e, sd, !1);
  }
}
function sd() {
  for (let e in $t.requests)
    $t.requests.hasOwnProperty(e) && $t.requests[e].abort();
}
const pO = function() {
  const e = Yy({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class mO extends dO {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = pO && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new $t(Yy, this.uri(), t);
  }
}
function Yy(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || lO))
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
class gO extends Gf {
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
      $f(n, this.supportsBinary, (a) => {
        try {
          this.doWrite(n, a);
        } catch {
        }
        i && fa(() => {
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
class vO extends gO {
  createSocket(t, r, n) {
    return Xy ? new ns(t, r, n) : r ? new ns(t, r) : new ns(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class yO extends Gf {
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
        const r = Qx(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), i = Jx();
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
        i && fa(() => {
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
const bO = {
  websocket: vO,
  webtransport: yO,
  polling: mO
}, _O = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, wO = [
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
  let i = _O.exec(e || ""), a = {}, o = 14;
  for (; o--; )
    a[wO[o]] = i[o] || "";
  return r != -1 && n != -1 && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = EO(a, a.path), a.queryKey = xO(a, a.query), a;
}
function EO(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function xO(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, a) {
    i && (r[i] = a);
  }), r;
}
const Pc = typeof addEventListener == "function" && typeof removeEventListener == "function", Oi = [];
Pc && addEventListener("offline", () => {
  Oi.forEach((e) => e());
}, !1);
class mr extends Ge {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = tO, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
      const n = kc(t);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = kc(r.host).host);
    la(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = uO(this.opts.query)), Pc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Oi.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    const t = this.opts.rememberUpgrade && mr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", mr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (i && (r += aO(i)), n > 0 && r > this._maxPayload)
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
    return t && (this._pingTimeoutTime = 0, fa(() => {
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
    if (mr.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
        const n = Oi.indexOf(this._offlineEventListener);
        n !== -1 && Oi.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
mr.protocol = Gy;
class OO extends mr {
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
    mr.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            mr.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
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
let SO = class extends OO {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((i) => bO[i]).filter((i) => !!i)), super(t, n);
  }
};
function TO(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = kc(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const a = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + a + ":" + n.port + t, n.href = n.protocol + "://" + a + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const CO = typeof ArrayBuffer == "function", AO = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Zy = Object.prototype.toString, RO = typeof Blob == "function" || typeof Blob < "u" && Zy.call(Blob) === "[object BlobConstructor]", IO = typeof File == "function" || typeof File < "u" && Zy.call(File) === "[object FileConstructor]";
function Vf(e) {
  return CO && (e instanceof ArrayBuffer || AO(e)) || RO && e instanceof Blob || IO && e instanceof File;
}
function Si(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (Si(e[r]))
        return !0;
    return !1;
  }
  if (Vf(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Si(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && Si(e[r]))
      return !0;
  return !1;
}
function kO(e) {
  const t = [], r = e.data, n = e;
  return n.data = Nc(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function Nc(e, t) {
  if (!e)
    return e;
  if (Vf(e)) {
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
function PO(e, t) {
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
const NO = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], MO = 5;
var Ae;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Ae || (Ae = {}));
class DO {
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
    return (t.type === Ae.EVENT || t.type === Ae.ACK) && Si(t) ? this.encodeAsBinary({
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
    const r = kO(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function od(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Hf extends Ge {
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
      n || r.type === Ae.BINARY_ACK ? (r.type = n ? Ae.EVENT : Ae.ACK, this.reconstructor = new FO(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (Vf(t) || t.base64)
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
      if (Hf.isPayloadValid(n.type, a))
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
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && NO.indexOf(r[0]) === -1);
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
class FO {
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
      const r = PO(this.reconPack, this.buffers);
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
const LO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: Hf, Encoder: DO, get PacketType() {
  return Ae;
}, protocol: MO }, Symbol.toStringTag, { value: "Module" }));
function Rt(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const BO = Object.freeze({
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
    if (BO.hasOwnProperty(t))
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
function hn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
hn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
hn.prototype.reset = function() {
  this.attempts = 0;
};
hn.prototype.setMin = function(e) {
  this.ms = e;
};
hn.prototype.setMax = function(e) {
  this.max = e;
};
hn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Dc extends Ge {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, la(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new hn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || LO;
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
    this.engine = new SO(this.uri, this.opts);
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
    fa(() => {
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
const Sn = {};
function is(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = TO(e, t.path || "/socket.io"), n = r.source, i = r.id, a = r.path, o = Sn[i] && a in Sn[i].nsps, s = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let u;
  return s ? u = new Dc(n, t) : (Sn[i] || (Sn[i] = new Dc(n, t)), u = Sn[i]), r.query && !t.query && (t.query = r.queryKey), u.socket(r.path, t);
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
function jO() {
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
          for (var c, l, f, d, h, m, p, b = [], y = 0, _ = u.length, E = _, S = a.getTypeOf(u) !== "string"; y < u.length; ) E = _ - y, f = S ? (c = u[y++], l = y < _ ? u[y++] : 0, y < _ ? u[y++] : 0) : (c = u.charCodeAt(y++), l = y < _ ? u.charCodeAt(y++) : 0, y < _ ? u.charCodeAt(y++) : 0), d = c >> 2, h = (3 & c) << 4 | l >> 4, m = 1 < E ? (15 & l) << 2 | f >> 6 : 64, p = 2 < E ? 63 & f : 64, b.push(s.charAt(d) + s.charAt(h) + s.charAt(m) + s.charAt(p));
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
          var E, S, C = h.file, B = h.compression, I = _ !== c.utf8encode, O = s.transformTo("string", _(C.name)), w = s.transformTo("string", c.utf8encode(C.name)), k = C.comment, q = s.transformTo("string", _(k)), x = s.transformTo("string", c.utf8encode(k)), L = w.length !== C.name.length, v = x.length !== k.length, z = "", ie = "", D = "", Q = C.dir, F = C.date, ee = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          m && !p || (ee.crc32 = h.crc32, ee.compressedSize = h.compressedSize, ee.uncompressedSize = h.uncompressedSize);
          var N = 0;
          m && (N |= 8), I || !L && !v || (N |= 2048);
          var M = 0, K = 0;
          Q && (M |= 16), y === "UNIX" ? (K = 798, M |= function(H, pe) {
            var xe = H;
            return H || (xe = pe ? 16893 : 33204), (65535 & xe) << 16;
          }(C.unixPermissions, Q)) : (K = 20, M |= function(H) {
            return 63 & (H || 0);
          }(C.dosPermissions)), E = F.getUTCHours(), E <<= 6, E |= F.getUTCMinutes(), E <<= 5, E |= F.getUTCSeconds() / 2, S = F.getUTCFullYear() - 1980, S <<= 4, S |= F.getUTCMonth() + 1, S <<= 5, S |= F.getUTCDate(), L && (ie = a(1, 1) + a(l(O), 4) + w, z += "up" + a(ie.length, 2) + ie), v && (D = a(1, 1) + a(l(q), 4) + x, z += "uc" + a(D.length, 2) + D);
          var te = "";
          return te += `
\0`, te += a(N, 2), te += B.magic, te += a(E, 2), te += a(S, 2), te += a(ee.crc32, 4), te += a(ee.compressedSize, 4), te += a(ee.uncompressedSize, 4), te += a(O.length, 2), te += a(z.length, 2), { fileRecord: f.LOCAL_FILE_HEADER + te + O + z, dirRecord: f.CENTRAL_FILE_HEADER + a(K, 2) + te + a(q.length, 2) + "\0\0\0\0" + a(M, 4) + a(b, 4) + O + z + q };
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
          var p = this.bytesWritten - h, b = function(y, _, E, S, C) {
            var B = s.transformTo("string", C(S));
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
                var S = _ || E, C = a[S];
                if (!C) throw new Error(S + " is not a valid compression method !");
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
              var E = y[_], S = E.fileNameStr, C = a.resolve(E.fileNameStr);
              m.file(C, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: h.createFolders }), E.dir || (m.file(C).unsafeOriginalName = S);
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
          var O, w = s.getTypeOf(B), k = s.extend(I || {}, l);
          k.date = k.date || /* @__PURE__ */ new Date(), k.compression !== null && (k.compression = k.compression.toUpperCase()), typeof k.unixPermissions == "string" && (k.unixPermissions = parseInt(k.unixPermissions, 8)), k.unixPermissions && 16384 & k.unixPermissions && (k.dir = !0), k.dosPermissions && 16 & k.dosPermissions && (k.dir = !0), k.dir && (C = y(C)), k.createFolders && (O = b(C)) && _.call(this, O, !0);
          var q = w === "string" && k.binary === !1 && k.base64 === !1;
          I && I.binary !== void 0 || (k.binary = !q), (B instanceof f && B.uncompressedSize === 0 || k.dir || !B || B.length === 0) && (k.base64 = !1, k.binary = !0, B = "", k.compression = "STORE", w = "string");
          var x = null;
          x = B instanceof f || B instanceof u ? B : m.isNode && m.isStream(B) ? new p(C, B) : s.prepareContent(C, B, k.binary, k.optimizedBinaryString, k.base64);
          var L = new d(C, x, k);
          this.files[C] = L;
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
        var S = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(C) {
          var B, I, O;
          for (B in this.files) O = this.files[B], (I = B.slice(this.root.length, B.length)) && B.slice(0, this.root.length) === this.root && C(I, O);
        }, filter: function(C) {
          var B = [];
          return this.forEach(function(I, O) {
            C(I, O) && B.push(O);
          }), B;
        }, file: function(C, B, I) {
          if (arguments.length !== 1) return C = this.root + C, a.call(this, C, B, I), this;
          if (E(C)) {
            var O = C;
            return this.filter(function(k, q) {
              return !q.dir && O.test(k);
            });
          }
          var w = this.files[this.root + C];
          return w && !w.dir ? w : null;
        }, folder: function(C) {
          if (!C) return this;
          if (E(C)) return this.filter(function(w, k) {
            return k.dir && C.test(w);
          });
          var B = this.root + C, I = _.call(this, B), O = this.clone();
          return O.root = I.name, O;
        }, remove: function(C) {
          C = this.root + C;
          var B = this.files[C];
          if (B || (C.slice(-1) !== "/" && (C += "/"), B = this.files[C]), B && !B.dir) delete this.files[C];
          else for (var I = this.filter(function(w, k) {
            return k.name.slice(0, C.length) === C;
          }), O = 0; O < I.length; O++) delete this.files[I[O].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(C) {
          var B, I = {};
          try {
            if ((I = s.extend(C || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: o.utf8encode })).type = I.type.toLowerCase(), I.compression = I.compression.toUpperCase(), I.type === "binarystring" && (I.type = "string"), !I.type) throw new Error("No output type specified.");
            s.checkSupport(I.type), I.platform !== "darwin" && I.platform !== "freebsd" && I.platform !== "linux" && I.platform !== "sunos" || (I.platform = "UNIX"), I.platform === "win32" && (I.platform = "DOS");
            var O = I.comment || this.comment || "";
            B = h.generateWorker(this, I, O);
          } catch (w) {
            (B = new u("error")).error(w);
          }
          return new c(B, I.type || "string", I.mimeType);
        }, generateAsync: function(C, B) {
          return this.generateInternalStream(C).accumulate(B);
        }, generateNodeStream: function(C, B) {
          return (C = C || {}).type || (C.type = "nodebuffer"), this.generateInternalStream(C).toNodejsStream(B);
        } };
        n.exports = S;
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
            var _ = [], E = m._internalType, S = m._outputType, C = m._mimeType;
            m.on("data", function(B, I) {
              _.push(B), p && p(I);
            }).on("error", function(B) {
              _ = [], y(B);
            }).on("end", function() {
              try {
                var B = function(I, O, w) {
                  switch (I) {
                    case "blob":
                      return a.newBlob(a.transformTo("arraybuffer", O), w);
                    case "base64":
                      return u.encode(O);
                    default:
                      return a.transformTo(I, O);
                  }
                }(S, function(I, O) {
                  var w, k = 0, q = null, x = 0;
                  for (w = 0; w < O.length; w++) x += O[w].length;
                  switch (I) {
                    case "string":
                      return O.join("");
                    case "array":
                      return Array.prototype.concat.apply([], O);
                    case "uint8array":
                      for (q = new Uint8Array(x), w = 0; w < O.length; w++) q.set(O[w], k), k += O[w].length;
                      return q;
                    case "nodebuffer":
                      return Buffer.concat(O);
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
            var p, b, y, _, E, S = m.length, C = 0;
            for (_ = 0; _ < S; _++) (64512 & (b = m.charCodeAt(_))) == 55296 && _ + 1 < S && (64512 & (y = m.charCodeAt(_ + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (y - 56320), _++), C += b < 128 ? 1 : b < 2048 ? 2 : b < 65536 ? 3 : 4;
            for (p = o.uint8array ? new Uint8Array(C) : new Array(C), _ = E = 0; E < C; _++) (64512 & (b = m.charCodeAt(_))) == 55296 && _ + 1 < S && (64512 & (y = m.charCodeAt(_ + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (y - 56320), _++), b < 128 ? p[E++] = b : (b < 2048 ? p[E++] = 192 | b >>> 6 : (b < 65536 ? p[E++] = 224 | b >>> 12 : (p[E++] = 240 | b >>> 18, p[E++] = 128 | b >>> 12 & 63), p[E++] = 128 | b >>> 6 & 63), p[E++] = 128 | 63 & b);
            return p;
          }(h);
        }, i.utf8decode = function(h) {
          return o.nodebuffer ? a.transformTo("nodebuffer", h).toString("utf-8") : function(m) {
            var p, b, y, _, E = m.length, S = new Array(2 * E);
            for (p = b = 0; p < E; ) if ((y = m[p++]) < 128) S[b++] = y;
            else if (4 < (_ = c[y])) S[b++] = 65533, p += _ - 1;
            else {
              for (y &= _ === 2 ? 31 : _ === 3 ? 15 : 7; 1 < _ && p < E; ) y = y << 6 | 63 & m[p++], _--;
              1 < _ ? S[b++] = 65533 : y < 65536 ? S[b++] = y : (y -= 65536, S[b++] = 55296 | y >> 10 & 1023, S[b++] = 56320 | 1023 & y);
            }
            return S.length !== b && (S.subarray ? S = S.subarray(0, b) : S.length = b), a.applyFromCharCode(S);
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
            var S;
            for ((E = E || _.length) > _.length && (E = _.length), S = E - 1; 0 <= S && (192 & _[S]) == 128; ) S--;
            return S < 0 || S === 0 ? E : S + c[_[S]] > E ? S : E;
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
          var _ = [], E = 0, S = p.length;
          if (S <= y) return String.fromCharCode.apply(null, p);
          for (; E < S; ) b === "array" || b === "nodebuffer" ? _.push(String.fromCharCode.apply(null, p.slice(E, Math.min(E + y, S)))) : _.push(String.fromCharCode.apply(null, p.subarray(E, Math.min(E + y, S)))), E += y;
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
          return u.Promise.resolve(b).then(function(S) {
            return a.blob && (S instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(S)) !== -1) && typeof FileReader < "u" ? new u.Promise(function(C, B) {
              var I = new FileReader();
              I.onload = function(O) {
                C(O.target.result);
              }, I.onerror = function(O) {
                B(O.target.error);
              }, I.readAsArrayBuffer(S);
            }) : S;
          }).then(function(S) {
            var C = i.getTypeOf(S);
            return C ? (C === "arraybuffer" ? S = i.transformTo("uint8array", S) : C === "string" && (E ? S = o.decode(S) : y && _ !== !0 && (S = function(B) {
              return l(B, a.uint8array ? new Uint8Array(B.length) : new Array(B.length));
            }(S))), S) : u.Promise.reject(new Error("Can't read the data of '" + p + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
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
            var S;
            try {
              S = _(E);
            } catch (C) {
              return s.reject(y, C);
            }
            S === y ? s.reject(y, new TypeError("Cannot resolve promise with itself")) : s.resolve(y, S);
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
          function S(I) {
            E || (E = !0, s.reject(y, I));
          }
          function C(I) {
            E || (E = !0, s.resolve(y, I));
          }
          var B = b(function() {
            _(C, S);
          });
          B.status === "error" && S(B.value);
        }
        function b(y, _) {
          var E = {};
          try {
            E.value = y(_), E.status = "success";
          } catch (S) {
            E.status = "error", E.value = S;
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
          var S = E.value;
          if (S) p(y, S);
          else {
            y.state = c, y.outcome = _;
            for (var C = -1, B = y.queue.length; ++C < B; ) y.queue[C].callFulfilled(_);
          }
          return y;
        }, s.reject = function(y, _) {
          y.state = u, y.outcome = _;
          for (var E = -1, S = y.queue.length; ++E < S; ) y.queue[E].callRejected(_);
          return y;
        }, f.resolve = function(y) {
          return y instanceof this ? y : s.resolve(new this(o), y);
        }, f.reject = function(y) {
          var _ = new this(o);
          return s.reject(_, y);
        }, f.all = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var E = y.length, S = !1;
          if (!E) return this.resolve([]);
          for (var C = new Array(E), B = 0, I = -1, O = new this(o); ++I < E; ) w(y[I], I);
          return O;
          function w(k, q) {
            _.resolve(k).then(function(x) {
              C[q] = x, ++B !== E || S || (S = !0, s.resolve(O, C));
            }, function(x) {
              S || (S = !0, s.reject(O, x));
            });
          }
        }, f.race = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var E = y.length, S = !1;
          if (!E) return this.resolve([]);
          for (var C = -1, B = new this(o); ++C < E; ) I = y[C], _.resolve(I).then(function(O) {
            S || (S = !0, s.resolve(B, O));
          }, function(O) {
            S || (S = !0, s.reject(B, O));
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
            var S;
            if (S = typeof _.dictionary == "string" ? s.string2buf(_.dictionary) : l.call(_.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(_.dictionary) : _.dictionary, (E = a.deflateSetDictionary(this.strm, S)) !== f) throw new Error(u[E]);
            this._dict_set = !0;
          }
        }
        function b(y, _) {
          var E = new p(_);
          if (E.push(y, !0), E.err) throw E.msg || u[E.err];
          return E.result;
        }
        p.prototype.push = function(y, _) {
          var E, S, C = this.strm, B = this.options.chunkSize;
          if (this.ended) return !1;
          S = _ === ~~_ ? _ : _ === !0 ? 4 : 0, typeof y == "string" ? C.input = s.string2buf(y) : l.call(y) === "[object ArrayBuffer]" ? C.input = new Uint8Array(y) : C.input = y, C.next_in = 0, C.avail_in = C.input.length;
          do {
            if (C.avail_out === 0 && (C.output = new o.Buf8(B), C.next_out = 0, C.avail_out = B), (E = a.deflate(C, S)) !== 1 && E !== f) return this.onEnd(E), !(this.ended = !0);
            C.avail_out !== 0 && (C.avail_in !== 0 || S !== 4 && S !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(C.output, C.next_out))) : this.onData(o.shrinkBuf(C.output, C.next_out)));
          } while ((0 < C.avail_in || C.avail_out === 0) && E !== 1);
          return S === 4 ? (E = a.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === f) : S !== 2 || (this.onEnd(f), !(C.avail_out = 0));
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
          var y, _, E, S, C, B, I = this.strm, O = this.options.chunkSize, w = this.options.dictionary, k = !1;
          if (this.ended) return !1;
          _ = b === ~~b ? b : b === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof p == "string" ? I.input = s.binstring2buf(p) : d.call(p) === "[object ArrayBuffer]" ? I.input = new Uint8Array(p) : I.input = p, I.next_in = 0, I.avail_in = I.input.length;
          do {
            if (I.avail_out === 0 && (I.output = new o.Buf8(O), I.next_out = 0, I.avail_out = O), (y = a.inflate(I, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && w && (B = typeof w == "string" ? s.string2buf(w) : d.call(w) === "[object ArrayBuffer]" ? new Uint8Array(w) : w, y = a.inflateSetDictionary(this.strm, B)), y === u.Z_BUF_ERROR && k === !0 && (y = u.Z_OK, k = !1), y !== u.Z_STREAM_END && y !== u.Z_OK) return this.onEnd(y), !(this.ended = !0);
            I.next_out && (I.avail_out !== 0 && y !== u.Z_STREAM_END && (I.avail_in !== 0 || _ !== u.Z_FINISH && _ !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = s.utf8border(I.output, I.next_out), S = I.next_out - E, C = s.buf2string(I.output, E), I.next_out = S, I.avail_out = O - S, S && o.arraySet(I.output, I.output, E, S, 0), this.onData(C)) : this.onData(o.shrinkBuf(I.output, I.next_out)))), I.avail_in === 0 && I.avail_out === 0 && (k = !0);
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
        var a, o = r("../utils/common"), s = r("./trees"), u = r("./adler32"), c = r("./crc32"), l = r("./messages"), f = 0, d = 4, h = 0, m = -2, p = -1, b = 4, y = 2, _ = 8, E = 9, S = 286, C = 30, B = 19, I = 2 * S + 1, O = 15, w = 3, k = 258, q = k + w + 1, x = 42, L = 113, v = 1, z = 2, ie = 3, D = 4;
        function Q(g, X) {
          return g.msg = l[X], X;
        }
        function F(g) {
          return (g << 1) - (4 < g ? 9 : 0);
        }
        function ee(g) {
          for (var X = g.length; 0 <= --X; ) g[X] = 0;
        }
        function N(g) {
          var X = g.state, W = X.pending;
          W > g.avail_out && (W = g.avail_out), W !== 0 && (o.arraySet(g.output, X.pending_buf, X.pending_out, W, g.next_out), g.next_out += W, X.pending_out += W, g.total_out += W, g.avail_out -= W, X.pending -= W, X.pending === 0 && (X.pending_out = 0));
        }
        function M(g, X) {
          s._tr_flush_block(g, 0 <= g.block_start ? g.block_start : -1, g.strstart - g.block_start, X), g.block_start = g.strstart, N(g.strm);
        }
        function K(g, X) {
          g.pending_buf[g.pending++] = X;
        }
        function te(g, X) {
          g.pending_buf[g.pending++] = X >>> 8 & 255, g.pending_buf[g.pending++] = 255 & X;
        }
        function H(g, X) {
          var W, P, T = g.max_chain_length, j = g.strstart, re = g.prev_length, ne = g.nice_match, G = g.strstart > g.w_size - q ? g.strstart - (g.w_size - q) : 0, V = g.window, J = g.w_mask, Z = g.prev, ae = g.strstart + k, de = V[j + re - 1], _e = V[j + re];
          g.prev_length >= g.good_match && (T >>= 2), ne > g.lookahead && (ne = g.lookahead);
          do
            if (V[(W = X) + re] === _e && V[W + re - 1] === de && V[W] === V[j] && V[++W] === V[j + 1]) {
              j += 2, W++;
              do
                ;
              while (V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && j < ae);
              if (P = k - (ae - j), j = ae - k, re < P) {
                if (g.match_start = X, ne <= (re = P)) break;
                de = V[j + re - 1], _e = V[j + re];
              }
            }
          while ((X = Z[X & J]) > G && --T != 0);
          return re <= g.lookahead ? re : g.lookahead;
        }
        function pe(g) {
          var X, W, P, T, j, re, ne, G, V, J, Z = g.w_size;
          do {
            if (T = g.window_size - g.lookahead - g.strstart, g.strstart >= Z + (Z - q)) {
              for (o.arraySet(g.window, g.window, Z, Z, 0), g.match_start -= Z, g.strstart -= Z, g.block_start -= Z, X = W = g.hash_size; P = g.head[--X], g.head[X] = Z <= P ? P - Z : 0, --W; ) ;
              for (X = W = Z; P = g.prev[--X], g.prev[X] = Z <= P ? P - Z : 0, --W; ) ;
              T += Z;
            }
            if (g.strm.avail_in === 0) break;
            if (re = g.strm, ne = g.window, G = g.strstart + g.lookahead, V = T, J = void 0, J = re.avail_in, V < J && (J = V), W = J === 0 ? 0 : (re.avail_in -= J, o.arraySet(ne, re.input, re.next_in, J, G), re.state.wrap === 1 ? re.adler = u(re.adler, ne, J, G) : re.state.wrap === 2 && (re.adler = c(re.adler, ne, J, G)), re.next_in += J, re.total_in += J, J), g.lookahead += W, g.lookahead + g.insert >= w) for (j = g.strstart - g.insert, g.ins_h = g.window[j], g.ins_h = (g.ins_h << g.hash_shift ^ g.window[j + 1]) & g.hash_mask; g.insert && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[j + w - 1]) & g.hash_mask, g.prev[j & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = j, j++, g.insert--, !(g.lookahead + g.insert < w)); ) ;
          } while (g.lookahead < q && g.strm.avail_in !== 0);
        }
        function xe(g, X) {
          for (var W, P; ; ) {
            if (g.lookahead < q) {
              if (pe(g), g.lookahead < q && X === f) return v;
              if (g.lookahead === 0) break;
            }
            if (W = 0, g.lookahead >= w && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, W = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), W !== 0 && g.strstart - W <= g.w_size - q && (g.match_length = H(g, W)), g.match_length >= w) if (P = s._tr_tally(g, g.strstart - g.match_start, g.match_length - w), g.lookahead -= g.match_length, g.match_length <= g.max_lazy_match && g.lookahead >= w) {
              for (g.match_length--; g.strstart++, g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, W = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart, --g.match_length != 0; ) ;
              g.strstart++;
            } else g.strstart += g.match_length, g.match_length = 0, g.ins_h = g.window[g.strstart], g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + 1]) & g.hash_mask;
            else P = s._tr_tally(g, 0, g.window[g.strstart]), g.lookahead--, g.strstart++;
            if (P && (M(g, !1), g.strm.avail_out === 0)) return v;
          }
          return g.insert = g.strstart < w - 1 ? g.strstart : w - 1, X === d ? (M(g, !0), g.strm.avail_out === 0 ? ie : D) : g.last_lit && (M(g, !1), g.strm.avail_out === 0) ? v : z;
        }
        function ce(g, X) {
          for (var W, P, T; ; ) {
            if (g.lookahead < q) {
              if (pe(g), g.lookahead < q && X === f) return v;
              if (g.lookahead === 0) break;
            }
            if (W = 0, g.lookahead >= w && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, W = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), g.prev_length = g.match_length, g.prev_match = g.match_start, g.match_length = w - 1, W !== 0 && g.prev_length < g.max_lazy_match && g.strstart - W <= g.w_size - q && (g.match_length = H(g, W), g.match_length <= 5 && (g.strategy === 1 || g.match_length === w && 4096 < g.strstart - g.match_start) && (g.match_length = w - 1)), g.prev_length >= w && g.match_length <= g.prev_length) {
              for (T = g.strstart + g.lookahead - w, P = s._tr_tally(g, g.strstart - 1 - g.prev_match, g.prev_length - w), g.lookahead -= g.prev_length - 1, g.prev_length -= 2; ++g.strstart <= T && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, W = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), --g.prev_length != 0; ) ;
              if (g.match_available = 0, g.match_length = w - 1, g.strstart++, P && (M(g, !1), g.strm.avail_out === 0)) return v;
            } else if (g.match_available) {
              if ((P = s._tr_tally(g, 0, g.window[g.strstart - 1])) && M(g, !1), g.strstart++, g.lookahead--, g.strm.avail_out === 0) return v;
            } else g.match_available = 1, g.strstart++, g.lookahead--;
          }
          return g.match_available && (P = s._tr_tally(g, 0, g.window[g.strstart - 1]), g.match_available = 0), g.insert = g.strstart < w - 1 ? g.strstart : w - 1, X === d ? (M(g, !0), g.strm.avail_out === 0 ? ie : D) : g.last_lit && (M(g, !1), g.strm.avail_out === 0) ? v : z;
        }
        function le(g, X, W, P, T) {
          this.good_length = g, this.max_lazy = X, this.nice_length = W, this.max_chain = P, this.func = T;
        }
        function ve() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * I), this.dyn_dtree = new o.Buf16(2 * (2 * C + 1)), this.bl_tree = new o.Buf16(2 * (2 * B + 1)), ee(this.dyn_ltree), ee(this.dyn_dtree), ee(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(O + 1), this.heap = new o.Buf16(2 * S + 1), ee(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * S + 1), ee(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function fe(g) {
          var X;
          return g && g.state ? (g.total_in = g.total_out = 0, g.data_type = y, (X = g.state).pending = 0, X.pending_out = 0, X.wrap < 0 && (X.wrap = -X.wrap), X.status = X.wrap ? x : L, g.adler = X.wrap === 2 ? 0 : 1, X.last_flush = f, s._tr_init(X), h) : Q(g, m);
        }
        function we(g) {
          var X = fe(g);
          return X === h && function(W) {
            W.window_size = 2 * W.w_size, ee(W.head), W.max_lazy_match = a[W.level].max_lazy, W.good_match = a[W.level].good_length, W.nice_match = a[W.level].nice_length, W.max_chain_length = a[W.level].max_chain, W.strstart = 0, W.block_start = 0, W.lookahead = 0, W.insert = 0, W.match_length = W.prev_length = w - 1, W.match_available = 0, W.ins_h = 0;
          }(g.state), X;
        }
        function Ee(g, X, W, P, T, j) {
          if (!g) return m;
          var re = 1;
          if (X === p && (X = 6), P < 0 ? (re = 0, P = -P) : 15 < P && (re = 2, P -= 16), T < 1 || E < T || W !== _ || P < 8 || 15 < P || X < 0 || 9 < X || j < 0 || b < j) return Q(g, m);
          P === 8 && (P = 9);
          var ne = new ve();
          return (g.state = ne).strm = g, ne.wrap = re, ne.gzhead = null, ne.w_bits = P, ne.w_size = 1 << ne.w_bits, ne.w_mask = ne.w_size - 1, ne.hash_bits = T + 7, ne.hash_size = 1 << ne.hash_bits, ne.hash_mask = ne.hash_size - 1, ne.hash_shift = ~~((ne.hash_bits + w - 1) / w), ne.window = new o.Buf8(2 * ne.w_size), ne.head = new o.Buf16(ne.hash_size), ne.prev = new o.Buf16(ne.w_size), ne.lit_bufsize = 1 << T + 6, ne.pending_buf_size = 4 * ne.lit_bufsize, ne.pending_buf = new o.Buf8(ne.pending_buf_size), ne.d_buf = 1 * ne.lit_bufsize, ne.l_buf = 3 * ne.lit_bufsize, ne.level = X, ne.strategy = j, ne.method = W, we(g);
        }
        a = [new le(0, 0, 0, 0, function(g, X) {
          var W = 65535;
          for (W > g.pending_buf_size - 5 && (W = g.pending_buf_size - 5); ; ) {
            if (g.lookahead <= 1) {
              if (pe(g), g.lookahead === 0 && X === f) return v;
              if (g.lookahead === 0) break;
            }
            g.strstart += g.lookahead, g.lookahead = 0;
            var P = g.block_start + W;
            if ((g.strstart === 0 || g.strstart >= P) && (g.lookahead = g.strstart - P, g.strstart = P, M(g, !1), g.strm.avail_out === 0) || g.strstart - g.block_start >= g.w_size - q && (M(g, !1), g.strm.avail_out === 0)) return v;
          }
          return g.insert = 0, X === d ? (M(g, !0), g.strm.avail_out === 0 ? ie : D) : (g.strstart > g.block_start && (M(g, !1), g.strm.avail_out), v);
        }), new le(4, 4, 8, 4, xe), new le(4, 5, 16, 8, xe), new le(4, 6, 32, 32, xe), new le(4, 4, 16, 16, ce), new le(8, 16, 32, 32, ce), new le(8, 16, 128, 128, ce), new le(8, 32, 128, 256, ce), new le(32, 128, 258, 1024, ce), new le(32, 258, 258, 4096, ce)], i.deflateInit = function(g, X) {
          return Ee(g, X, _, 15, 8, 0);
        }, i.deflateInit2 = Ee, i.deflateReset = we, i.deflateResetKeep = fe, i.deflateSetHeader = function(g, X) {
          return g && g.state ? g.state.wrap !== 2 ? m : (g.state.gzhead = X, h) : m;
        }, i.deflate = function(g, X) {
          var W, P, T, j;
          if (!g || !g.state || 5 < X || X < 0) return g ? Q(g, m) : m;
          if (P = g.state, !g.output || !g.input && g.avail_in !== 0 || P.status === 666 && X !== d) return Q(g, g.avail_out === 0 ? -5 : m);
          if (P.strm = g, W = P.last_flush, P.last_flush = X, P.status === x) if (P.wrap === 2) g.adler = 0, K(P, 31), K(P, 139), K(P, 8), P.gzhead ? (K(P, (P.gzhead.text ? 1 : 0) + (P.gzhead.hcrc ? 2 : 0) + (P.gzhead.extra ? 4 : 0) + (P.gzhead.name ? 8 : 0) + (P.gzhead.comment ? 16 : 0)), K(P, 255 & P.gzhead.time), K(P, P.gzhead.time >> 8 & 255), K(P, P.gzhead.time >> 16 & 255), K(P, P.gzhead.time >> 24 & 255), K(P, P.level === 9 ? 2 : 2 <= P.strategy || P.level < 2 ? 4 : 0), K(P, 255 & P.gzhead.os), P.gzhead.extra && P.gzhead.extra.length && (K(P, 255 & P.gzhead.extra.length), K(P, P.gzhead.extra.length >> 8 & 255)), P.gzhead.hcrc && (g.adler = c(g.adler, P.pending_buf, P.pending, 0)), P.gzindex = 0, P.status = 69) : (K(P, 0), K(P, 0), K(P, 0), K(P, 0), K(P, 0), K(P, P.level === 9 ? 2 : 2 <= P.strategy || P.level < 2 ? 4 : 0), K(P, 3), P.status = L);
          else {
            var re = _ + (P.w_bits - 8 << 4) << 8;
            re |= (2 <= P.strategy || P.level < 2 ? 0 : P.level < 6 ? 1 : P.level === 6 ? 2 : 3) << 6, P.strstart !== 0 && (re |= 32), re += 31 - re % 31, P.status = L, te(P, re), P.strstart !== 0 && (te(P, g.adler >>> 16), te(P, 65535 & g.adler)), g.adler = 1;
          }
          if (P.status === 69) if (P.gzhead.extra) {
            for (T = P.pending; P.gzindex < (65535 & P.gzhead.extra.length) && (P.pending !== P.pending_buf_size || (P.gzhead.hcrc && P.pending > T && (g.adler = c(g.adler, P.pending_buf, P.pending - T, T)), N(g), T = P.pending, P.pending !== P.pending_buf_size)); ) K(P, 255 & P.gzhead.extra[P.gzindex]), P.gzindex++;
            P.gzhead.hcrc && P.pending > T && (g.adler = c(g.adler, P.pending_buf, P.pending - T, T)), P.gzindex === P.gzhead.extra.length && (P.gzindex = 0, P.status = 73);
          } else P.status = 73;
          if (P.status === 73) if (P.gzhead.name) {
            T = P.pending;
            do {
              if (P.pending === P.pending_buf_size && (P.gzhead.hcrc && P.pending > T && (g.adler = c(g.adler, P.pending_buf, P.pending - T, T)), N(g), T = P.pending, P.pending === P.pending_buf_size)) {
                j = 1;
                break;
              }
              j = P.gzindex < P.gzhead.name.length ? 255 & P.gzhead.name.charCodeAt(P.gzindex++) : 0, K(P, j);
            } while (j !== 0);
            P.gzhead.hcrc && P.pending > T && (g.adler = c(g.adler, P.pending_buf, P.pending - T, T)), j === 0 && (P.gzindex = 0, P.status = 91);
          } else P.status = 91;
          if (P.status === 91) if (P.gzhead.comment) {
            T = P.pending;
            do {
              if (P.pending === P.pending_buf_size && (P.gzhead.hcrc && P.pending > T && (g.adler = c(g.adler, P.pending_buf, P.pending - T, T)), N(g), T = P.pending, P.pending === P.pending_buf_size)) {
                j = 1;
                break;
              }
              j = P.gzindex < P.gzhead.comment.length ? 255 & P.gzhead.comment.charCodeAt(P.gzindex++) : 0, K(P, j);
            } while (j !== 0);
            P.gzhead.hcrc && P.pending > T && (g.adler = c(g.adler, P.pending_buf, P.pending - T, T)), j === 0 && (P.status = 103);
          } else P.status = 103;
          if (P.status === 103 && (P.gzhead.hcrc ? (P.pending + 2 > P.pending_buf_size && N(g), P.pending + 2 <= P.pending_buf_size && (K(P, 255 & g.adler), K(P, g.adler >> 8 & 255), g.adler = 0, P.status = L)) : P.status = L), P.pending !== 0) {
            if (N(g), g.avail_out === 0) return P.last_flush = -1, h;
          } else if (g.avail_in === 0 && F(X) <= F(W) && X !== d) return Q(g, -5);
          if (P.status === 666 && g.avail_in !== 0) return Q(g, -5);
          if (g.avail_in !== 0 || P.lookahead !== 0 || X !== f && P.status !== 666) {
            var ne = P.strategy === 2 ? function(G, V) {
              for (var J; ; ) {
                if (G.lookahead === 0 && (pe(G), G.lookahead === 0)) {
                  if (V === f) return v;
                  break;
                }
                if (G.match_length = 0, J = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++, J && (M(G, !1), G.strm.avail_out === 0)) return v;
              }
              return G.insert = 0, V === d ? (M(G, !0), G.strm.avail_out === 0 ? ie : D) : G.last_lit && (M(G, !1), G.strm.avail_out === 0) ? v : z;
            }(P, X) : P.strategy === 3 ? function(G, V) {
              for (var J, Z, ae, de, _e = G.window; ; ) {
                if (G.lookahead <= k) {
                  if (pe(G), G.lookahead <= k && V === f) return v;
                  if (G.lookahead === 0) break;
                }
                if (G.match_length = 0, G.lookahead >= w && 0 < G.strstart && (Z = _e[ae = G.strstart - 1]) === _e[++ae] && Z === _e[++ae] && Z === _e[++ae]) {
                  de = G.strstart + k;
                  do
                    ;
                  while (Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && ae < de);
                  G.match_length = k - (de - ae), G.match_length > G.lookahead && (G.match_length = G.lookahead);
                }
                if (G.match_length >= w ? (J = s._tr_tally(G, 1, G.match_length - w), G.lookahead -= G.match_length, G.strstart += G.match_length, G.match_length = 0) : (J = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++), J && (M(G, !1), G.strm.avail_out === 0)) return v;
              }
              return G.insert = 0, V === d ? (M(G, !0), G.strm.avail_out === 0 ? ie : D) : G.last_lit && (M(G, !1), G.strm.avail_out === 0) ? v : z;
            }(P, X) : a[P.level].func(P, X);
            if (ne !== ie && ne !== D || (P.status = 666), ne === v || ne === ie) return g.avail_out === 0 && (P.last_flush = -1), h;
            if (ne === z && (X === 1 ? s._tr_align(P) : X !== 5 && (s._tr_stored_block(P, 0, 0, !1), X === 3 && (ee(P.head), P.lookahead === 0 && (P.strstart = 0, P.block_start = 0, P.insert = 0))), N(g), g.avail_out === 0)) return P.last_flush = -1, h;
          }
          return X !== d ? h : P.wrap <= 0 ? 1 : (P.wrap === 2 ? (K(P, 255 & g.adler), K(P, g.adler >> 8 & 255), K(P, g.adler >> 16 & 255), K(P, g.adler >> 24 & 255), K(P, 255 & g.total_in), K(P, g.total_in >> 8 & 255), K(P, g.total_in >> 16 & 255), K(P, g.total_in >> 24 & 255)) : (te(P, g.adler >>> 16), te(P, 65535 & g.adler)), N(g), 0 < P.wrap && (P.wrap = -P.wrap), P.pending !== 0 ? h : 1);
        }, i.deflateEnd = function(g) {
          var X;
          return g && g.state ? (X = g.state.status) !== x && X !== 69 && X !== 73 && X !== 91 && X !== 103 && X !== L && X !== 666 ? Q(g, m) : (g.state = null, X === L ? Q(g, -3) : h) : m;
        }, i.deflateSetDictionary = function(g, X) {
          var W, P, T, j, re, ne, G, V, J = X.length;
          if (!g || !g.state || (j = (W = g.state).wrap) === 2 || j === 1 && W.status !== x || W.lookahead) return m;
          for (j === 1 && (g.adler = u(g.adler, X, J, 0)), W.wrap = 0, J >= W.w_size && (j === 0 && (ee(W.head), W.strstart = 0, W.block_start = 0, W.insert = 0), V = new o.Buf8(W.w_size), o.arraySet(V, X, J - W.w_size, W.w_size, 0), X = V, J = W.w_size), re = g.avail_in, ne = g.next_in, G = g.input, g.avail_in = J, g.next_in = 0, g.input = X, pe(W); W.lookahead >= w; ) {
            for (P = W.strstart, T = W.lookahead - (w - 1); W.ins_h = (W.ins_h << W.hash_shift ^ W.window[P + w - 1]) & W.hash_mask, W.prev[P & W.w_mask] = W.head[W.ins_h], W.head[W.ins_h] = P, P++, --T; ) ;
            W.strstart = P, W.lookahead = w - 1, pe(W);
          }
          return W.strstart += W.lookahead, W.block_start = W.strstart, W.insert = W.lookahead, W.lookahead = 0, W.match_length = W.prev_length = w - 1, W.match_available = 0, g.next_in = ne, g.input = G, g.avail_in = re, W.wrap = j, h;
        }, i.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, n, i) {
        n.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(r, n, i) {
        n.exports = function(a, o) {
          var s, u, c, l, f, d, h, m, p, b, y, _, E, S, C, B, I, O, w, k, q, x, L, v, z;
          s = a.state, u = a.next_in, v = a.input, c = u + (a.avail_in - 5), l = a.next_out, z = a.output, f = l - (o - a.avail_out), d = l + (a.avail_out - 257), h = s.dmax, m = s.wsize, p = s.whave, b = s.wnext, y = s.window, _ = s.hold, E = s.bits, S = s.lencode, C = s.distcode, B = (1 << s.lenbits) - 1, I = (1 << s.distbits) - 1;
          e: do {
            E < 15 && (_ += v[u++] << E, E += 8, _ += v[u++] << E, E += 8), O = S[_ & B];
            t: for (; ; ) {
              if (_ >>>= w = O >>> 24, E -= w, (w = O >>> 16 & 255) === 0) z[l++] = 65535 & O;
              else {
                if (!(16 & w)) {
                  if ((64 & w) == 0) {
                    O = S[(65535 & O) + (_ & (1 << w) - 1)];
                    continue t;
                  }
                  if (32 & w) {
                    s.mode = 12;
                    break e;
                  }
                  a.msg = "invalid literal/length code", s.mode = 30;
                  break e;
                }
                k = 65535 & O, (w &= 15) && (E < w && (_ += v[u++] << E, E += 8), k += _ & (1 << w) - 1, _ >>>= w, E -= w), E < 15 && (_ += v[u++] << E, E += 8, _ += v[u++] << E, E += 8), O = C[_ & I];
                r: for (; ; ) {
                  if (_ >>>= w = O >>> 24, E -= w, !(16 & (w = O >>> 16 & 255))) {
                    if ((64 & w) == 0) {
                      O = C[(65535 & O) + (_ & (1 << w) - 1)];
                      continue r;
                    }
                    a.msg = "invalid distance code", s.mode = 30;
                    break e;
                  }
                  if (q = 65535 & O, E < (w &= 15) && (_ += v[u++] << E, (E += 8) < w && (_ += v[u++] << E, E += 8)), h < (q += _ & (1 << w) - 1)) {
                    a.msg = "invalid distance too far back", s.mode = 30;
                    break e;
                  }
                  if (_ >>>= w, E -= w, (w = l - f) < q) {
                    if (p < (w = q - w) && s.sane) {
                      a.msg = "invalid distance too far back", s.mode = 30;
                      break e;
                    }
                    if (L = y, (x = 0) === b) {
                      if (x += m - w, w < k) {
                        for (k -= w; z[l++] = y[x++], --w; ) ;
                        x = l - q, L = z;
                      }
                    } else if (b < w) {
                      if (x += m + b - w, (w -= b) < k) {
                        for (k -= w; z[l++] = y[x++], --w; ) ;
                        if (x = 0, b < k) {
                          for (k -= w = b; z[l++] = y[x++], --w; ) ;
                          x = l - q, L = z;
                        }
                      }
                    } else if (x += b - w, w < k) {
                      for (k -= w; z[l++] = y[x++], --w; ) ;
                      x = l - q, L = z;
                    }
                    for (; 2 < k; ) z[l++] = L[x++], z[l++] = L[x++], z[l++] = L[x++], k -= 3;
                    k && (z[l++] = L[x++], 1 < k && (z[l++] = L[x++]));
                  } else {
                    for (x = l - q; z[l++] = z[x++], z[l++] = z[x++], z[l++] = z[x++], 2 < (k -= 3); ) ;
                    k && (z[l++] = z[x++], 1 < k && (z[l++] = z[x++]));
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
          var L;
          return x && x.state ? (L = x.state, x.total_in = x.total_out = L.total = 0, x.msg = "", L.wrap && (x.adler = 1 & L.wrap), L.mode = m, L.last = 0, L.havedict = 0, L.dmax = 32768, L.head = null, L.hold = 0, L.bits = 0, L.lencode = L.lendyn = new a.Buf32(p), L.distcode = L.distdyn = new a.Buf32(b), L.sane = 1, L.back = -1, d) : h;
        }
        function S(x) {
          var L;
          return x && x.state ? ((L = x.state).wsize = 0, L.whave = 0, L.wnext = 0, E(x)) : h;
        }
        function C(x, L) {
          var v, z;
          return x && x.state ? (z = x.state, L < 0 ? (v = 0, L = -L) : (v = 1 + (L >> 4), L < 48 && (L &= 15)), L && (L < 8 || 15 < L) ? h : (z.window !== null && z.wbits !== L && (z.window = null), z.wrap = v, z.wbits = L, S(x))) : h;
        }
        function B(x, L) {
          var v, z;
          return x ? (z = new _(), (x.state = z).window = null, (v = C(x, L)) !== d && (x.state = null), v) : h;
        }
        var I, O, w = !0;
        function k(x) {
          if (w) {
            var L;
            for (I = new a.Buf32(512), O = new a.Buf32(32), L = 0; L < 144; ) x.lens[L++] = 8;
            for (; L < 256; ) x.lens[L++] = 9;
            for (; L < 280; ) x.lens[L++] = 7;
            for (; L < 288; ) x.lens[L++] = 8;
            for (c(l, x.lens, 0, 288, I, 0, x.work, { bits: 9 }), L = 0; L < 32; ) x.lens[L++] = 5;
            c(f, x.lens, 0, 32, O, 0, x.work, { bits: 5 }), w = !1;
          }
          x.lencode = I, x.lenbits = 9, x.distcode = O, x.distbits = 5;
        }
        function q(x, L, v, z) {
          var ie, D = x.state;
          return D.window === null && (D.wsize = 1 << D.wbits, D.wnext = 0, D.whave = 0, D.window = new a.Buf8(D.wsize)), z >= D.wsize ? (a.arraySet(D.window, L, v - D.wsize, D.wsize, 0), D.wnext = 0, D.whave = D.wsize) : (z < (ie = D.wsize - D.wnext) && (ie = z), a.arraySet(D.window, L, v - z, ie, D.wnext), (z -= ie) ? (a.arraySet(D.window, L, v - z, z, 0), D.wnext = z, D.whave = D.wsize) : (D.wnext += ie, D.wnext === D.wsize && (D.wnext = 0), D.whave < D.wsize && (D.whave += ie))), 0;
        }
        i.inflateReset = S, i.inflateReset2 = C, i.inflateResetKeep = E, i.inflateInit = function(x) {
          return B(x, 15);
        }, i.inflateInit2 = B, i.inflate = function(x, L) {
          var v, z, ie, D, Q, F, ee, N, M, K, te, H, pe, xe, ce, le, ve, fe, we, Ee, g, X, W, P, T = 0, j = new a.Buf8(4), re = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!x || !x.state || !x.output || !x.input && x.avail_in !== 0) return h;
          (v = x.state).mode === 12 && (v.mode = 13), Q = x.next_out, ie = x.output, ee = x.avail_out, D = x.next_in, z = x.input, F = x.avail_in, N = v.hold, M = v.bits, K = F, te = ee, X = d;
          e: for (; ; ) switch (v.mode) {
            case m:
              if (v.wrap === 0) {
                v.mode = 13;
                break;
              }
              for (; M < 16; ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              if (2 & v.wrap && N === 35615) {
                j[v.check = 0] = 255 & N, j[1] = N >>> 8 & 255, v.check = s(v.check, j, 2, 0), M = N = 0, v.mode = 2;
                break;
              }
              if (v.flags = 0, v.head && (v.head.done = !1), !(1 & v.wrap) || (((255 & N) << 8) + (N >> 8)) % 31) {
                x.msg = "incorrect header check", v.mode = 30;
                break;
              }
              if ((15 & N) != 8) {
                x.msg = "unknown compression method", v.mode = 30;
                break;
              }
              if (M -= 4, g = 8 + (15 & (N >>>= 4)), v.wbits === 0) v.wbits = g;
              else if (g > v.wbits) {
                x.msg = "invalid window size", v.mode = 30;
                break;
              }
              v.dmax = 1 << g, x.adler = v.check = 1, v.mode = 512 & N ? 10 : 12, M = N = 0;
              break;
            case 2:
              for (; M < 16; ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              if (v.flags = N, (255 & v.flags) != 8) {
                x.msg = "unknown compression method", v.mode = 30;
                break;
              }
              if (57344 & v.flags) {
                x.msg = "unknown header flags set", v.mode = 30;
                break;
              }
              v.head && (v.head.text = N >> 8 & 1), 512 & v.flags && (j[0] = 255 & N, j[1] = N >>> 8 & 255, v.check = s(v.check, j, 2, 0)), M = N = 0, v.mode = 3;
            case 3:
              for (; M < 32; ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              v.head && (v.head.time = N), 512 & v.flags && (j[0] = 255 & N, j[1] = N >>> 8 & 255, j[2] = N >>> 16 & 255, j[3] = N >>> 24 & 255, v.check = s(v.check, j, 4, 0)), M = N = 0, v.mode = 4;
            case 4:
              for (; M < 16; ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              v.head && (v.head.xflags = 255 & N, v.head.os = N >> 8), 512 & v.flags && (j[0] = 255 & N, j[1] = N >>> 8 & 255, v.check = s(v.check, j, 2, 0)), M = N = 0, v.mode = 5;
            case 5:
              if (1024 & v.flags) {
                for (; M < 16; ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                v.length = N, v.head && (v.head.extra_len = N), 512 & v.flags && (j[0] = 255 & N, j[1] = N >>> 8 & 255, v.check = s(v.check, j, 2, 0)), M = N = 0;
              } else v.head && (v.head.extra = null);
              v.mode = 6;
            case 6:
              if (1024 & v.flags && (F < (H = v.length) && (H = F), H && (v.head && (g = v.head.extra_len - v.length, v.head.extra || (v.head.extra = new Array(v.head.extra_len)), a.arraySet(v.head.extra, z, D, H, g)), 512 & v.flags && (v.check = s(v.check, z, H, D)), F -= H, D += H, v.length -= H), v.length)) break e;
              v.length = 0, v.mode = 7;
            case 7:
              if (2048 & v.flags) {
                if (F === 0) break e;
                for (H = 0; g = z[D + H++], v.head && g && v.length < 65536 && (v.head.name += String.fromCharCode(g)), g && H < F; ) ;
                if (512 & v.flags && (v.check = s(v.check, z, H, D)), F -= H, D += H, g) break e;
              } else v.head && (v.head.name = null);
              v.length = 0, v.mode = 8;
            case 8:
              if (4096 & v.flags) {
                if (F === 0) break e;
                for (H = 0; g = z[D + H++], v.head && g && v.length < 65536 && (v.head.comment += String.fromCharCode(g)), g && H < F; ) ;
                if (512 & v.flags && (v.check = s(v.check, z, H, D)), F -= H, D += H, g) break e;
              } else v.head && (v.head.comment = null);
              v.mode = 9;
            case 9:
              if (512 & v.flags) {
                for (; M < 16; ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                if (N !== (65535 & v.check)) {
                  x.msg = "header crc mismatch", v.mode = 30;
                  break;
                }
                M = N = 0;
              }
              v.head && (v.head.hcrc = v.flags >> 9 & 1, v.head.done = !0), x.adler = v.check = 0, v.mode = 12;
              break;
            case 10:
              for (; M < 32; ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              x.adler = v.check = y(N), M = N = 0, v.mode = 11;
            case 11:
              if (v.havedict === 0) return x.next_out = Q, x.avail_out = ee, x.next_in = D, x.avail_in = F, v.hold = N, v.bits = M, 2;
              x.adler = v.check = 1, v.mode = 12;
            case 12:
              if (L === 5 || L === 6) break e;
            case 13:
              if (v.last) {
                N >>>= 7 & M, M -= 7 & M, v.mode = 27;
                break;
              }
              for (; M < 3; ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              switch (v.last = 1 & N, M -= 1, 3 & (N >>>= 1)) {
                case 0:
                  v.mode = 14;
                  break;
                case 1:
                  if (k(v), v.mode = 20, L !== 6) break;
                  N >>>= 2, M -= 2;
                  break e;
                case 2:
                  v.mode = 17;
                  break;
                case 3:
                  x.msg = "invalid block type", v.mode = 30;
              }
              N >>>= 2, M -= 2;
              break;
            case 14:
              for (N >>>= 7 & M, M -= 7 & M; M < 32; ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              if ((65535 & N) != (N >>> 16 ^ 65535)) {
                x.msg = "invalid stored block lengths", v.mode = 30;
                break;
              }
              if (v.length = 65535 & N, M = N = 0, v.mode = 15, L === 6) break e;
            case 15:
              v.mode = 16;
            case 16:
              if (H = v.length) {
                if (F < H && (H = F), ee < H && (H = ee), H === 0) break e;
                a.arraySet(ie, z, D, H, Q), F -= H, D += H, ee -= H, Q += H, v.length -= H;
                break;
              }
              v.mode = 12;
              break;
            case 17:
              for (; M < 14; ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              if (v.nlen = 257 + (31 & N), N >>>= 5, M -= 5, v.ndist = 1 + (31 & N), N >>>= 5, M -= 5, v.ncode = 4 + (15 & N), N >>>= 4, M -= 4, 286 < v.nlen || 30 < v.ndist) {
                x.msg = "too many length or distance symbols", v.mode = 30;
                break;
              }
              v.have = 0, v.mode = 18;
            case 18:
              for (; v.have < v.ncode; ) {
                for (; M < 3; ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                v.lens[re[v.have++]] = 7 & N, N >>>= 3, M -= 3;
              }
              for (; v.have < 19; ) v.lens[re[v.have++]] = 0;
              if (v.lencode = v.lendyn, v.lenbits = 7, W = { bits: v.lenbits }, X = c(0, v.lens, 0, 19, v.lencode, 0, v.work, W), v.lenbits = W.bits, X) {
                x.msg = "invalid code lengths set", v.mode = 30;
                break;
              }
              v.have = 0, v.mode = 19;
            case 19:
              for (; v.have < v.nlen + v.ndist; ) {
                for (; le = (T = v.lencode[N & (1 << v.lenbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                if (ve < 16) N >>>= ce, M -= ce, v.lens[v.have++] = ve;
                else {
                  if (ve === 16) {
                    for (P = ce + 2; M < P; ) {
                      if (F === 0) break e;
                      F--, N += z[D++] << M, M += 8;
                    }
                    if (N >>>= ce, M -= ce, v.have === 0) {
                      x.msg = "invalid bit length repeat", v.mode = 30;
                      break;
                    }
                    g = v.lens[v.have - 1], H = 3 + (3 & N), N >>>= 2, M -= 2;
                  } else if (ve === 17) {
                    for (P = ce + 3; M < P; ) {
                      if (F === 0) break e;
                      F--, N += z[D++] << M, M += 8;
                    }
                    M -= ce, g = 0, H = 3 + (7 & (N >>>= ce)), N >>>= 3, M -= 3;
                  } else {
                    for (P = ce + 7; M < P; ) {
                      if (F === 0) break e;
                      F--, N += z[D++] << M, M += 8;
                    }
                    M -= ce, g = 0, H = 11 + (127 & (N >>>= ce)), N >>>= 7, M -= 7;
                  }
                  if (v.have + H > v.nlen + v.ndist) {
                    x.msg = "invalid bit length repeat", v.mode = 30;
                    break;
                  }
                  for (; H--; ) v.lens[v.have++] = g;
                }
              }
              if (v.mode === 30) break;
              if (v.lens[256] === 0) {
                x.msg = "invalid code -- missing end-of-block", v.mode = 30;
                break;
              }
              if (v.lenbits = 9, W = { bits: v.lenbits }, X = c(l, v.lens, 0, v.nlen, v.lencode, 0, v.work, W), v.lenbits = W.bits, X) {
                x.msg = "invalid literal/lengths set", v.mode = 30;
                break;
              }
              if (v.distbits = 6, v.distcode = v.distdyn, W = { bits: v.distbits }, X = c(f, v.lens, v.nlen, v.ndist, v.distcode, 0, v.work, W), v.distbits = W.bits, X) {
                x.msg = "invalid distances set", v.mode = 30;
                break;
              }
              if (v.mode = 20, L === 6) break e;
            case 20:
              v.mode = 21;
            case 21:
              if (6 <= F && 258 <= ee) {
                x.next_out = Q, x.avail_out = ee, x.next_in = D, x.avail_in = F, v.hold = N, v.bits = M, u(x, te), Q = x.next_out, ie = x.output, ee = x.avail_out, D = x.next_in, z = x.input, F = x.avail_in, N = v.hold, M = v.bits, v.mode === 12 && (v.back = -1);
                break;
              }
              for (v.back = 0; le = (T = v.lencode[N & (1 << v.lenbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              if (le && (240 & le) == 0) {
                for (fe = ce, we = le, Ee = ve; le = (T = v.lencode[Ee + ((N & (1 << fe + we) - 1) >> fe)]) >>> 16 & 255, ve = 65535 & T, !(fe + (ce = T >>> 24) <= M); ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                N >>>= fe, M -= fe, v.back += fe;
              }
              if (N >>>= ce, M -= ce, v.back += ce, v.length = ve, le === 0) {
                v.mode = 26;
                break;
              }
              if (32 & le) {
                v.back = -1, v.mode = 12;
                break;
              }
              if (64 & le) {
                x.msg = "invalid literal/length code", v.mode = 30;
                break;
              }
              v.extra = 15 & le, v.mode = 22;
            case 22:
              if (v.extra) {
                for (P = v.extra; M < P; ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                v.length += N & (1 << v.extra) - 1, N >>>= v.extra, M -= v.extra, v.back += v.extra;
              }
              v.was = v.length, v.mode = 23;
            case 23:
              for (; le = (T = v.distcode[N & (1 << v.distbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                if (F === 0) break e;
                F--, N += z[D++] << M, M += 8;
              }
              if ((240 & le) == 0) {
                for (fe = ce, we = le, Ee = ve; le = (T = v.distcode[Ee + ((N & (1 << fe + we) - 1) >> fe)]) >>> 16 & 255, ve = 65535 & T, !(fe + (ce = T >>> 24) <= M); ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                N >>>= fe, M -= fe, v.back += fe;
              }
              if (N >>>= ce, M -= ce, v.back += ce, 64 & le) {
                x.msg = "invalid distance code", v.mode = 30;
                break;
              }
              v.offset = ve, v.extra = 15 & le, v.mode = 24;
            case 24:
              if (v.extra) {
                for (P = v.extra; M < P; ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                v.offset += N & (1 << v.extra) - 1, N >>>= v.extra, M -= v.extra, v.back += v.extra;
              }
              if (v.offset > v.dmax) {
                x.msg = "invalid distance too far back", v.mode = 30;
                break;
              }
              v.mode = 25;
            case 25:
              if (ee === 0) break e;
              if (H = te - ee, v.offset > H) {
                if ((H = v.offset - H) > v.whave && v.sane) {
                  x.msg = "invalid distance too far back", v.mode = 30;
                  break;
                }
                pe = H > v.wnext ? (H -= v.wnext, v.wsize - H) : v.wnext - H, H > v.length && (H = v.length), xe = v.window;
              } else xe = ie, pe = Q - v.offset, H = v.length;
              for (ee < H && (H = ee), ee -= H, v.length -= H; ie[Q++] = xe[pe++], --H; ) ;
              v.length === 0 && (v.mode = 21);
              break;
            case 26:
              if (ee === 0) break e;
              ie[Q++] = v.length, ee--, v.mode = 21;
              break;
            case 27:
              if (v.wrap) {
                for (; M < 32; ) {
                  if (F === 0) break e;
                  F--, N |= z[D++] << M, M += 8;
                }
                if (te -= ee, x.total_out += te, v.total += te, te && (x.adler = v.check = v.flags ? s(v.check, ie, te, Q - te) : o(v.check, ie, te, Q - te)), te = ee, (v.flags ? N : y(N)) !== v.check) {
                  x.msg = "incorrect data check", v.mode = 30;
                  break;
                }
                M = N = 0;
              }
              v.mode = 28;
            case 28:
              if (v.wrap && v.flags) {
                for (; M < 32; ) {
                  if (F === 0) break e;
                  F--, N += z[D++] << M, M += 8;
                }
                if (N !== (4294967295 & v.total)) {
                  x.msg = "incorrect length check", v.mode = 30;
                  break;
                }
                M = N = 0;
              }
              v.mode = 29;
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
          return x.next_out = Q, x.avail_out = ee, x.next_in = D, x.avail_in = F, v.hold = N, v.bits = M, (v.wsize || te !== x.avail_out && v.mode < 30 && (v.mode < 27 || L !== 4)) && q(x, x.output, x.next_out, te - x.avail_out) ? (v.mode = 31, -4) : (K -= x.avail_in, te -= x.avail_out, x.total_in += K, x.total_out += te, v.total += te, v.wrap && te && (x.adler = v.check = v.flags ? s(v.check, ie, te, x.next_out - te) : o(v.check, ie, te, x.next_out - te)), x.data_type = v.bits + (v.last ? 64 : 0) + (v.mode === 12 ? 128 : 0) + (v.mode === 20 || v.mode === 15 ? 256 : 0), (K == 0 && te === 0 || L === 4) && X === d && (X = -5), X);
        }, i.inflateEnd = function(x) {
          if (!x || !x.state) return h;
          var L = x.state;
          return L.window && (L.window = null), x.state = null, d;
        }, i.inflateGetHeader = function(x, L) {
          var v;
          return x && x.state ? (2 & (v = x.state).wrap) == 0 ? h : ((v.head = L).done = !1, d) : h;
        }, i.inflateSetDictionary = function(x, L) {
          var v, z = L.length;
          return x && x.state ? (v = x.state).wrap !== 0 && v.mode !== 11 ? h : v.mode === 11 && o(1, L, z, 0) !== v.check ? -3 : q(x, L, z, z) ? (v.mode = 31, -4) : (v.havedict = 1, d) : h;
        }, i.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, n, i) {
        var a = r("../utils/common"), o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        n.exports = function(l, f, d, h, m, p, b, y) {
          var _, E, S, C, B, I, O, w, k, q = y.bits, x = 0, L = 0, v = 0, z = 0, ie = 0, D = 0, Q = 0, F = 0, ee = 0, N = 0, M = null, K = 0, te = new a.Buf16(16), H = new a.Buf16(16), pe = null, xe = 0;
          for (x = 0; x <= 15; x++) te[x] = 0;
          for (L = 0; L < h; L++) te[f[d + L]]++;
          for (ie = q, z = 15; 1 <= z && te[z] === 0; z--) ;
          if (z < ie && (ie = z), z === 0) return m[p++] = 20971520, m[p++] = 20971520, y.bits = 1, 0;
          for (v = 1; v < z && te[v] === 0; v++) ;
          for (ie < v && (ie = v), x = F = 1; x <= 15; x++) if (F <<= 1, (F -= te[x]) < 0) return -1;
          if (0 < F && (l === 0 || z !== 1)) return -1;
          for (H[1] = 0, x = 1; x < 15; x++) H[x + 1] = H[x] + te[x];
          for (L = 0; L < h; L++) f[d + L] !== 0 && (b[H[f[d + L]]++] = L);
          if (I = l === 0 ? (M = pe = b, 19) : l === 1 ? (M = o, K -= 257, pe = s, xe -= 257, 256) : (M = u, pe = c, -1), x = v, B = p, Q = L = N = 0, S = -1, C = (ee = 1 << (D = ie)) - 1, l === 1 && 852 < ee || l === 2 && 592 < ee) return 1;
          for (; ; ) {
            for (O = x - Q, k = b[L] < I ? (w = 0, b[L]) : b[L] > I ? (w = pe[xe + b[L]], M[K + b[L]]) : (w = 96, 0), _ = 1 << x - Q, v = E = 1 << D; m[B + (N >> Q) + (E -= _)] = O << 24 | w << 16 | k | 0, E !== 0; ) ;
            for (_ = 1 << x - 1; N & _; ) _ >>= 1;
            if (_ !== 0 ? (N &= _ - 1, N += _) : N = 0, L++, --te[x] == 0) {
              if (x === z) break;
              x = f[d + b[L]];
            }
            if (ie < x && (N & C) !== S) {
              for (Q === 0 && (Q = ie), B += v, F = 1 << (D = x - Q); D + Q < z && !((F -= te[D + Q]) <= 0); ) D++, F <<= 1;
              if (ee += 1 << D, l === 1 && 852 < ee || l === 2 && 592 < ee) return 1;
              m[S = N & C] = ie << 24 | D << 16 | B - p | 0;
            }
          }
          return N !== 0 && (m[B + N] = x - Q << 24 | 64 << 16 | 0), y.bits = ie, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(r, n, i) {
        n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(r, n, i) {
        var a = r("../utils/common"), o = 0, s = 1;
        function u(T) {
          for (var j = T.length; 0 <= --j; ) T[j] = 0;
        }
        var c = 0, l = 29, f = 256, d = f + 1 + l, h = 30, m = 19, p = 2 * d + 1, b = 15, y = 16, _ = 7, E = 256, S = 16, C = 17, B = 18, I = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], O = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], q = new Array(2 * (d + 2));
        u(q);
        var x = new Array(2 * h);
        u(x);
        var L = new Array(512);
        u(L);
        var v = new Array(256);
        u(v);
        var z = new Array(l);
        u(z);
        var ie, D, Q, F = new Array(h);
        function ee(T, j, re, ne, G) {
          this.static_tree = T, this.extra_bits = j, this.extra_base = re, this.elems = ne, this.max_length = G, this.has_stree = T && T.length;
        }
        function N(T, j) {
          this.dyn_tree = T, this.max_code = 0, this.stat_desc = j;
        }
        function M(T) {
          return T < 256 ? L[T] : L[256 + (T >>> 7)];
        }
        function K(T, j) {
          T.pending_buf[T.pending++] = 255 & j, T.pending_buf[T.pending++] = j >>> 8 & 255;
        }
        function te(T, j, re) {
          T.bi_valid > y - re ? (T.bi_buf |= j << T.bi_valid & 65535, K(T, T.bi_buf), T.bi_buf = j >> y - T.bi_valid, T.bi_valid += re - y) : (T.bi_buf |= j << T.bi_valid & 65535, T.bi_valid += re);
        }
        function H(T, j, re) {
          te(T, re[2 * j], re[2 * j + 1]);
        }
        function pe(T, j) {
          for (var re = 0; re |= 1 & T, T >>>= 1, re <<= 1, 0 < --j; ) ;
          return re >>> 1;
        }
        function xe(T, j, re) {
          var ne, G, V = new Array(b + 1), J = 0;
          for (ne = 1; ne <= b; ne++) V[ne] = J = J + re[ne - 1] << 1;
          for (G = 0; G <= j; G++) {
            var Z = T[2 * G + 1];
            Z !== 0 && (T[2 * G] = pe(V[Z]++, Z));
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
        function ve(T, j, re, ne) {
          var G = 2 * j, V = 2 * re;
          return T[G] < T[V] || T[G] === T[V] && ne[j] <= ne[re];
        }
        function fe(T, j, re) {
          for (var ne = T.heap[re], G = re << 1; G <= T.heap_len && (G < T.heap_len && ve(j, T.heap[G + 1], T.heap[G], T.depth) && G++, !ve(j, ne, T.heap[G], T.depth)); ) T.heap[re] = T.heap[G], re = G, G <<= 1;
          T.heap[re] = ne;
        }
        function we(T, j, re) {
          var ne, G, V, J, Z = 0;
          if (T.last_lit !== 0) for (; ne = T.pending_buf[T.d_buf + 2 * Z] << 8 | T.pending_buf[T.d_buf + 2 * Z + 1], G = T.pending_buf[T.l_buf + Z], Z++, ne === 0 ? H(T, G, j) : (H(T, (V = v[G]) + f + 1, j), (J = I[V]) !== 0 && te(T, G -= z[V], J), H(T, V = M(--ne), re), (J = O[V]) !== 0 && te(T, ne -= F[V], J)), Z < T.last_lit; ) ;
          H(T, E, j);
        }
        function Ee(T, j) {
          var re, ne, G, V = j.dyn_tree, J = j.stat_desc.static_tree, Z = j.stat_desc.has_stree, ae = j.stat_desc.elems, de = -1;
          for (T.heap_len = 0, T.heap_max = p, re = 0; re < ae; re++) V[2 * re] !== 0 ? (T.heap[++T.heap_len] = de = re, T.depth[re] = 0) : V[2 * re + 1] = 0;
          for (; T.heap_len < 2; ) V[2 * (G = T.heap[++T.heap_len] = de < 2 ? ++de : 0)] = 1, T.depth[G] = 0, T.opt_len--, Z && (T.static_len -= J[2 * G + 1]);
          for (j.max_code = de, re = T.heap_len >> 1; 1 <= re; re--) fe(T, V, re);
          for (G = ae; re = T.heap[1], T.heap[1] = T.heap[T.heap_len--], fe(T, V, 1), ne = T.heap[1], T.heap[--T.heap_max] = re, T.heap[--T.heap_max] = ne, V[2 * G] = V[2 * re] + V[2 * ne], T.depth[G] = (T.depth[re] >= T.depth[ne] ? T.depth[re] : T.depth[ne]) + 1, V[2 * re + 1] = V[2 * ne + 1] = G, T.heap[1] = G++, fe(T, V, 1), 2 <= T.heap_len; ) ;
          T.heap[--T.heap_max] = T.heap[1], function(_e, Fe) {
            var Ve, Pe, Le, Ce, He, Ft, pt = Fe.dyn_tree, Hr = Fe.max_code, Ra = Fe.stat_desc.static_tree, Kr = Fe.stat_desc.has_stree, Yr = Fe.stat_desc.extra_bits, oi = Fe.stat_desc.extra_base, Et = Fe.stat_desc.max_length, Xr = 0;
            for (Ce = 0; Ce <= b; Ce++) _e.bl_count[Ce] = 0;
            for (pt[2 * _e.heap[_e.heap_max] + 1] = 0, Ve = _e.heap_max + 1; Ve < p; Ve++) Et < (Ce = pt[2 * pt[2 * (Pe = _e.heap[Ve]) + 1] + 1] + 1) && (Ce = Et, Xr++), pt[2 * Pe + 1] = Ce, Hr < Pe || (_e.bl_count[Ce]++, He = 0, oi <= Pe && (He = Yr[Pe - oi]), Ft = pt[2 * Pe], _e.opt_len += Ft * (Ce + He), Kr && (_e.static_len += Ft * (Ra[2 * Pe + 1] + He)));
            if (Xr !== 0) {
              do {
                for (Ce = Et - 1; _e.bl_count[Ce] === 0; ) Ce--;
                _e.bl_count[Ce]--, _e.bl_count[Ce + 1] += 2, _e.bl_count[Et]--, Xr -= 2;
              } while (0 < Xr);
              for (Ce = Et; Ce !== 0; Ce--) for (Pe = _e.bl_count[Ce]; Pe !== 0; ) Hr < (Le = _e.heap[--Ve]) || (pt[2 * Le + 1] !== Ce && (_e.opt_len += (Ce - pt[2 * Le + 1]) * pt[2 * Le], pt[2 * Le + 1] = Ce), Pe--);
            }
          }(T, j), xe(V, de, T.bl_count);
        }
        function g(T, j, re) {
          var ne, G, V = -1, J = j[1], Z = 0, ae = 7, de = 4;
          for (J === 0 && (ae = 138, de = 3), j[2 * (re + 1) + 1] = 65535, ne = 0; ne <= re; ne++) G = J, J = j[2 * (ne + 1) + 1], ++Z < ae && G === J || (Z < de ? T.bl_tree[2 * G] += Z : G !== 0 ? (G !== V && T.bl_tree[2 * G]++, T.bl_tree[2 * S]++) : Z <= 10 ? T.bl_tree[2 * C]++ : T.bl_tree[2 * B]++, V = G, de = (Z = 0) === J ? (ae = 138, 3) : G === J ? (ae = 6, 3) : (ae = 7, 4));
        }
        function X(T, j, re) {
          var ne, G, V = -1, J = j[1], Z = 0, ae = 7, de = 4;
          for (J === 0 && (ae = 138, de = 3), ne = 0; ne <= re; ne++) if (G = J, J = j[2 * (ne + 1) + 1], !(++Z < ae && G === J)) {
            if (Z < de) for (; H(T, G, T.bl_tree), --Z != 0; ) ;
            else G !== 0 ? (G !== V && (H(T, G, T.bl_tree), Z--), H(T, S, T.bl_tree), te(T, Z - 3, 2)) : Z <= 10 ? (H(T, C, T.bl_tree), te(T, Z - 3, 3)) : (H(T, B, T.bl_tree), te(T, Z - 11, 7));
            V = G, de = (Z = 0) === J ? (ae = 138, 3) : G === J ? (ae = 6, 3) : (ae = 7, 4);
          }
        }
        u(F);
        var W = !1;
        function P(T, j, re, ne) {
          te(T, (c << 1) + (ne ? 1 : 0), 3), function(G, V, J, Z) {
            le(G), K(G, J), K(G, ~J), a.arraySet(G.pending_buf, G.window, V, J, G.pending), G.pending += J;
          }(T, j, re);
        }
        i._tr_init = function(T) {
          W || (function() {
            var j, re, ne, G, V, J = new Array(b + 1);
            for (G = ne = 0; G < l - 1; G++) for (z[G] = ne, j = 0; j < 1 << I[G]; j++) v[ne++] = G;
            for (v[ne - 1] = G, G = V = 0; G < 16; G++) for (F[G] = V, j = 0; j < 1 << O[G]; j++) L[V++] = G;
            for (V >>= 7; G < h; G++) for (F[G] = V << 7, j = 0; j < 1 << O[G] - 7; j++) L[256 + V++] = G;
            for (re = 0; re <= b; re++) J[re] = 0;
            for (j = 0; j <= 143; ) q[2 * j + 1] = 8, j++, J[8]++;
            for (; j <= 255; ) q[2 * j + 1] = 9, j++, J[9]++;
            for (; j <= 279; ) q[2 * j + 1] = 7, j++, J[7]++;
            for (; j <= 287; ) q[2 * j + 1] = 8, j++, J[8]++;
            for (xe(q, d + 1, J), j = 0; j < h; j++) x[2 * j + 1] = 5, x[2 * j] = pe(j, 5);
            ie = new ee(q, I, f + 1, d, b), D = new ee(x, O, 0, h, b), Q = new ee(new Array(0), w, 0, m, _);
          }(), W = !0), T.l_desc = new N(T.dyn_ltree, ie), T.d_desc = new N(T.dyn_dtree, D), T.bl_desc = new N(T.bl_tree, Q), T.bi_buf = 0, T.bi_valid = 0, ce(T);
        }, i._tr_stored_block = P, i._tr_flush_block = function(T, j, re, ne) {
          var G, V, J = 0;
          0 < T.level ? (T.strm.data_type === 2 && (T.strm.data_type = function(Z) {
            var ae, de = 4093624447;
            for (ae = 0; ae <= 31; ae++, de >>>= 1) if (1 & de && Z.dyn_ltree[2 * ae] !== 0) return o;
            if (Z.dyn_ltree[18] !== 0 || Z.dyn_ltree[20] !== 0 || Z.dyn_ltree[26] !== 0) return s;
            for (ae = 32; ae < f; ae++) if (Z.dyn_ltree[2 * ae] !== 0) return s;
            return o;
          }(T)), Ee(T, T.l_desc), Ee(T, T.d_desc), J = function(Z) {
            var ae;
            for (g(Z, Z.dyn_ltree, Z.l_desc.max_code), g(Z, Z.dyn_dtree, Z.d_desc.max_code), Ee(Z, Z.bl_desc), ae = m - 1; 3 <= ae && Z.bl_tree[2 * k[ae] + 1] === 0; ae--) ;
            return Z.opt_len += 3 * (ae + 1) + 5 + 5 + 4, ae;
          }(T), G = T.opt_len + 3 + 7 >>> 3, (V = T.static_len + 3 + 7 >>> 3) <= G && (G = V)) : G = V = re + 5, re + 4 <= G && j !== -1 ? P(T, j, re, ne) : T.strategy === 4 || V === G ? (te(T, 2 + (ne ? 1 : 0), 3), we(T, q, x)) : (te(T, 4 + (ne ? 1 : 0), 3), function(Z, ae, de, _e) {
            var Fe;
            for (te(Z, ae - 257, 5), te(Z, de - 1, 5), te(Z, _e - 4, 4), Fe = 0; Fe < _e; Fe++) te(Z, Z.bl_tree[2 * k[Fe] + 1], 3);
            X(Z, Z.dyn_ltree, ae - 1), X(Z, Z.dyn_dtree, de - 1);
          }(T, T.l_desc.max_code + 1, T.d_desc.max_code + 1, J + 1), we(T, T.dyn_ltree, T.dyn_dtree)), ce(T), ne && le(T);
        }, i._tr_tally = function(T, j, re) {
          return T.pending_buf[T.d_buf + 2 * T.last_lit] = j >>> 8 & 255, T.pending_buf[T.d_buf + 2 * T.last_lit + 1] = 255 & j, T.pending_buf[T.l_buf + T.last_lit] = 255 & re, T.last_lit++, j === 0 ? T.dyn_ltree[2 * re]++ : (T.matches++, j--, T.dyn_ltree[2 * (v[re] + f + 1)]++, T.dyn_dtree[2 * M(j)]++), T.last_lit === T.lit_bufsize - 1;
        }, i._tr_align = function(T) {
          te(T, 2, 3), H(T, E, q), function(j) {
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
              b = b && b.setTimeout ? b : o, u = {}.toString.call(o.process) === "[object process]" ? function(S) {
                process.nextTick(function() {
                  _(S);
                });
              } : function() {
                if (o.postMessage && !o.importScripts) {
                  var S = !0, C = o.onmessage;
                  return o.onmessage = function() {
                    S = !1;
                  }, o.postMessage("", "*"), o.onmessage = C, S;
                }
              }() ? (f = "setImmediate$" + Math.random() + "$", o.addEventListener ? o.addEventListener("message", E, !1) : o.attachEvent("onmessage", E), function(S) {
                o.postMessage(f + S, "*");
              }) : o.MessageChannel ? ((l = new MessageChannel()).port1.onmessage = function(S) {
                _(S.data);
              }, function(S) {
                l.port2.postMessage(S);
              }) : p && "onreadystatechange" in p.createElement("script") ? (c = p.documentElement, function(S) {
                var C = p.createElement("script");
                C.onreadystatechange = function() {
                  _(S), C.onreadystatechange = null, c.removeChild(C), C = null;
                }, c.appendChild(C);
              }) : function(S) {
                setTimeout(_, 0, S);
              }, b.setImmediate = function(S) {
                typeof S != "function" && (S = new Function("" + S));
                for (var C = new Array(arguments.length - 1), B = 0; B < C.length; B++) C[B] = arguments[B + 1];
                var I = { callback: S, args: C };
                return h[d] = I, u(d), d++;
              }, b.clearImmediate = y;
            }
            function y(S) {
              delete h[S];
            }
            function _(S) {
              if (m) setTimeout(_, 0, S);
              else {
                var C = h[S];
                if (C) {
                  m = !0;
                  try {
                    (function(B) {
                      var I = B.callback, O = B.args;
                      switch (O.length) {
                        case 0:
                          I();
                          break;
                        case 1:
                          I(O[0]);
                          break;
                        case 2:
                          I(O[0], O[1]);
                          break;
                        case 3:
                          I(O[0], O[1], O[2]);
                          break;
                        default:
                          I.apply(s, O);
                      }
                    })(C);
                  } finally {
                    y(S), m = !1;
                  }
                }
              }
            }
            function E(S) {
              S.source === o && typeof S.data == "string" && S.data.indexOf(f) === 0 && _(+S.data.slice(f.length));
            }
          })(typeof self > "u" ? a === void 0 ? this : a : self);
        }).call(this, typeof Rr < "u" ? Rr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }(as)), as.exports;
}
var zO = jO();
const SC = /* @__PURE__ */ ln(zO);
var cd = {}, fd = {}, Tn, ld;
function ze() {
  if (ld) return Tn;
  ld = 1;
  var e = function(t) {
    return t && t.Math === Math && t;
  };
  return Tn = // eslint-disable-next-line es/no-global-this -- safe
  e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  e(typeof self == "object" && self) || e(typeof Rr == "object" && Rr) || e(typeof Tn == "object" && Tn) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), Tn;
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
function ha() {
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
  var e = ha(), t = Function.prototype.call;
  return fs = e ? t.bind(t) : function() {
    return t.apply(t, arguments);
  }, fs;
}
var ls = {}, gd;
function qO() {
  if (gd) return ls;
  gd = 1;
  var e = {}.propertyIsEnumerable, t = Object.getOwnPropertyDescriptor, r = t && !e.call({ 1: 2 }, 1);
  return ls.f = r ? function(i) {
    var a = t(this, i);
    return !!a && a.enumerable;
  } : e, ls;
}
var hs, vd;
function Kf() {
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
  var e = ha(), t = Function.prototype, r = t.call, n = e && t.bind.bind(r, r);
  return ds = e ? n : function(i) {
    return function() {
      return r.apply(i, arguments);
    };
  }, ds;
}
var ps, bd;
function Wr() {
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
  var e = Ue(), t = qe(), r = Wr(), n = Object, i = e("".split);
  return ms = t(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(a) {
    return r(a) === "String" ? i(a, "") : n(a);
  } : n, ms;
}
var gs, wd;
function da() {
  return wd || (wd = 1, gs = function(e) {
    return e == null;
  }), gs;
}
var vs, Ed;
function Mt() {
  if (Ed) return vs;
  Ed = 1;
  var e = da(), t = TypeError;
  return vs = function(r) {
    if (e(r)) throw new t("Can't call method on " + r);
    return r;
  }, vs;
}
var ys, xd;
function Zn() {
  if (xd) return ys;
  xd = 1;
  var e = Qy(), t = Mt();
  return ys = function(r) {
    return e(t(r));
  }, ys;
}
var bs, Od;
function $e() {
  if (Od) return bs;
  Od = 1;
  var e = typeof document == "object" && document.all;
  return bs = typeof e > "u" && e !== void 0 ? function(t) {
    return typeof t == "function" || t === e;
  } : function(t) {
    return typeof t == "function";
  }, bs;
}
var _s, Sd;
function dt() {
  if (Sd) return _s;
  Sd = 1;
  var e = $e();
  return _s = function(t) {
    return typeof t == "object" ? t !== null : e(t);
  }, _s;
}
var ws, Td;
function Gr() {
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
function pa() {
  if (Cd) return Es;
  Cd = 1;
  var e = Ue();
  return Es = e({}.isPrototypeOf), Es;
}
var xs, Ad;
function Jn() {
  if (Ad) return xs;
  Ad = 1;
  var e = ze(), t = e.navigator, r = t && t.userAgent;
  return xs = r ? String(r) : "", xs;
}
var Os, Rd;
function Yf() {
  if (Rd) return Os;
  Rd = 1;
  var e = ze(), t = Jn(), r = e.process, n = e.Deno, i = r && r.versions || n && n.version, a = i && i.v8, o, s;
  return a && (o = a.split("."), s = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !s && t && (o = t.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = t.match(/Chrome\/(\d+)/), o && (s = +o[1]))), Os = s, Os;
}
var Ss, Id;
function e0() {
  if (Id) return Ss;
  Id = 1;
  var e = Yf(), t = qe(), r = ze(), n = r.String;
  return Ss = !!Object.getOwnPropertySymbols && !t(function() {
    var i = Symbol("symbol detection");
    return !n(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && e && e < 41;
  }), Ss;
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
  var e = Gr(), t = $e(), r = pa(), n = t0(), i = Object;
  return Cs = n ? function(a) {
    return typeof a == "symbol";
  } : function(a) {
    var o = e("Symbol");
    return t(o) && r(o.prototype, i(a));
  }, Cs;
}
var As, Nd;
function ma() {
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
function or() {
  if (Md) return Rs;
  Md = 1;
  var e = $e(), t = ma(), r = TypeError;
  return Rs = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a function");
  }, Rs;
}
var Is, Dd;
function dn() {
  if (Dd) return Is;
  Dd = 1;
  var e = or(), t = da();
  return Is = function(r, n) {
    var i = r[n];
    return t(i) ? void 0 : e(i);
  }, Is;
}
var ks, Fd;
function UO() {
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
function Ht() {
  return Ld || (Ld = 1, Ns = !1), Ns;
}
var Ms, Bd;
function Xf() {
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
function Zf() {
  if (jd) return Ps.exports;
  jd = 1;
  var e = Ht(), t = ze(), r = Xf(), n = "__core-js_shared__", i = Ps.exports = t[n] || r(n, {});
  return (i.versions || (i.versions = [])).push({
    version: "3.42.0",
    mode: e ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Ps.exports;
}
var Ds, zd;
function Jf() {
  if (zd) return Ds;
  zd = 1;
  var e = Zf();
  return Ds = function(t, r) {
    return e[t] || (e[t] = r || {});
  }, Ds;
}
var Fs, qd;
function ga() {
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
  var e = Ue(), t = ga(), r = e({}.hasOwnProperty);
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
function Ze() {
  if (Wd) return js;
  Wd = 1;
  var e = ze(), t = Jf(), r = Dt(), n = n0(), i = e0(), a = t0(), o = e.Symbol, s = t("wks"), u = a ? o.for || o : o && o.withoutSetter || n;
  return js = function(c) {
    return r(s, c) || (s[c] = i && r(o, c) ? o[c] : u("Symbol." + c)), s[c];
  }, js;
}
var zs, Gd;
function $O() {
  if (Gd) return zs;
  Gd = 1;
  var e = et(), t = dt(), r = r0(), n = dn(), i = UO(), a = Ze(), o = TypeError, s = a("toPrimitive");
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
  var e = $O(), t = r0();
  return qs = function(r) {
    var n = e(r, "string");
    return t(n) ? n : n + "";
  }, qs;
}
var Us, Hd;
function va() {
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
  var e = Nt(), t = qe(), r = va();
  return $s = !e && !t(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), $s;
}
var Yd;
function ya() {
  if (Yd) return ss;
  Yd = 1;
  var e = Nt(), t = et(), r = qO(), n = Kf(), i = Zn(), a = i0(), o = Dt(), s = a0(), u = Object.getOwnPropertyDescriptor;
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
function Qn() {
  if (Qd) return Hs;
  Qd = 1;
  var e = Nt(), t = Or(), r = Kf();
  return Hs = e ? function(n, i, a) {
    return t.f(n, i, r(1, a));
  } : function(n, i, a) {
    return n[i] = a, n;
  }, Hs;
}
var Ks = { exports: {} }, Ys, ep;
function ba() {
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
function Qf() {
  if (tp) return Xs;
  tp = 1;
  var e = Ue(), t = $e(), r = Zf(), n = e(Function.toString);
  return t(r.inspectSource) || (r.inspectSource = function(i) {
    return n(i);
  }), Xs = r.inspectSource, Xs;
}
var Zs, rp;
function WO() {
  if (rp) return Zs;
  rp = 1;
  var e = ze(), t = $e(), r = e.WeakMap;
  return Zs = t(r) && /native code/.test(String(r)), Zs;
}
var Js, np;
function el() {
  if (np) return Js;
  np = 1;
  var e = Jf(), t = n0(), r = e("keys");
  return Js = function(n) {
    return r[n] || (r[n] = t(n));
  }, Js;
}
var Qs, ip;
function tl() {
  return ip || (ip = 1, Qs = {}), Qs;
}
var eo, ap;
function _a() {
  if (ap) return eo;
  ap = 1;
  var e = WO(), t = ze(), r = dt(), n = Qn(), i = Dt(), a = Zf(), o = el(), s = tl(), u = "Object already initialized", c = t.TypeError, l = t.WeakMap, f, d, h, m = function(_) {
    return h(_) ? d(_) : f(_, {});
  }, p = function(_) {
    return function(E) {
      var S;
      if (!r(E) || (S = d(E)).type !== _)
        throw new c("Incompatible receiver, " + _ + " required");
      return S;
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
  var e = Ue(), t = qe(), r = $e(), n = Dt(), i = Nt(), a = ba().CONFIGURABLE, o = Qf(), s = _a(), u = s.enforce, c = s.get, l = String, f = Object.defineProperty, d = e("".slice), h = e("".replace), m = e([].join), p = i && !t(function() {
    return f(function() {
    }, "length", { value: 8 }).length !== 8;
  }), b = String(String).split("String"), y = Ks.exports = function(_, E, S) {
    d(l(E), 0, 7) === "Symbol(" && (E = "[" + h(l(E), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), S && S.getter && (E = "get " + E), S && S.setter && (E = "set " + E), (!n(_, "name") || a && _.name !== E) && (i ? f(_, "name", { value: E, configurable: !0 }) : _.name = E), p && S && n(S, "arity") && _.length !== S.arity && f(_, "length", { value: S.arity });
    try {
      S && n(S, "constructor") && S.constructor ? i && f(_, "prototype", { writable: !1 }) : _.prototype && (_.prototype = void 0);
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
function Vr() {
  if (op) return to;
  op = 1;
  var e = $e(), t = Or(), r = o0(), n = Xf();
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
function GO() {
  if (up) return no;
  up = 1;
  var e = Math.ceil, t = Math.floor;
  return no = Math.trunc || function(n) {
    var i = +n;
    return (i > 0 ? t : e)(i);
  }, no;
}
var io, cp;
function wa() {
  if (cp) return io;
  cp = 1;
  var e = GO();
  return io = function(t) {
    var r = +t;
    return r !== r || r === 0 ? 0 : e(r);
  }, io;
}
var ao, fp;
function VO() {
  if (fp) return ao;
  fp = 1;
  var e = wa(), t = Math.max, r = Math.min;
  return ao = function(n, i) {
    var a = e(n);
    return a < 0 ? t(a + i, 0) : r(a, i);
  }, ao;
}
var so, lp;
function pn() {
  if (lp) return so;
  lp = 1;
  var e = wa(), t = Math.min;
  return so = function(r) {
    var n = e(r);
    return n > 0 ? t(n, 9007199254740991) : 0;
  }, so;
}
var oo, hp;
function rl() {
  if (hp) return oo;
  hp = 1;
  var e = pn();
  return oo = function(t) {
    return e(t.length);
  }, oo;
}
var uo, dp;
function u0() {
  if (dp) return uo;
  dp = 1;
  var e = Zn(), t = VO(), r = rl(), n = function(i) {
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
  var e = Ue(), t = Dt(), r = Zn(), n = u0().indexOf, i = tl(), a = e([].push);
  return co = function(o, s) {
    var u = r(o), c = 0, l = [], f;
    for (f in u) !t(i, f) && t(u, f) && a(l, f);
    for (; s.length > c; ) t(u, f = s[c++]) && (~n(l, f) || a(l, f));
    return l;
  }, co;
}
var fo, mp;
function nl() {
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
function HO() {
  if (gp) return ro;
  gp = 1;
  var e = c0(), t = nl(), r = t.concat("length", "prototype");
  return ro.f = Object.getOwnPropertyNames || function(i) {
    return e(i, r);
  }, ro;
}
var lo = {}, vp;
function KO() {
  return vp || (vp = 1, lo.f = Object.getOwnPropertySymbols), lo;
}
var ho, yp;
function YO() {
  if (yp) return ho;
  yp = 1;
  var e = Gr(), t = Ue(), r = HO(), n = KO(), i = ct(), a = t([].concat);
  return ho = e("Reflect", "ownKeys") || function(s) {
    var u = r.f(i(s)), c = n.f;
    return c ? a(u, c(s)) : u;
  }, ho;
}
var po, bp;
function XO() {
  if (bp) return po;
  bp = 1;
  var e = Dt(), t = YO(), r = ya(), n = Or();
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
  var e = ze(), t = ya().f, r = Qn(), n = Vr(), i = Xf(), a = XO(), o = f0();
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
  var e = ze(), t = Jn(), r = Wr(), n = function(i) {
    return t.slice(0, i.length) === i;
  };
  return vo = function() {
    return n("Bun/") ? "BUN" : n("Cloudflare-Workers") ? "CLOUDFLARE" : n("Deno/") ? "DENO" : n("Node.js/") ? "NODE" : e.Bun && typeof Bun.version == "string" ? "BUN" : e.Deno && typeof Deno.version == "object" ? "DENO" : r(e.process) === "process" ? "NODE" : e.window && e.document ? "BROWSER" : "REST";
  }(), vo;
}
var yo, xp;
function Ea() {
  if (xp) return yo;
  xp = 1;
  var e = l0();
  return yo = e === "NODE", yo;
}
var bo, Op;
function ZO() {
  if (Op) return bo;
  Op = 1;
  var e = Ue(), t = or();
  return bo = function(r, n, i) {
    try {
      return e(t(Object.getOwnPropertyDescriptor(r, n)[i]));
    } catch {
    }
  }, bo;
}
var _o, Sp;
function JO() {
  if (Sp) return _o;
  Sp = 1;
  var e = dt();
  return _o = function(t) {
    return e(t) || t === null;
  }, _o;
}
var wo, Tp;
function QO() {
  if (Tp) return wo;
  Tp = 1;
  var e = JO(), t = String, r = TypeError;
  return wo = function(n) {
    if (e(n)) return n;
    throw new r("Can't set " + t(n) + " as a prototype");
  }, wo;
}
var Eo, Cp;
function h0() {
  if (Cp) return Eo;
  Cp = 1;
  var e = ZO(), t = dt(), r = Mt(), n = QO();
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
function xa() {
  if (Ap) return xo;
  Ap = 1;
  var e = Or().f, t = Dt(), r = Ze(), n = r("toStringTag");
  return xo = function(i, a, o) {
    i && !o && (i = i.prototype), i && !t(i, n) && e(i, n, { configurable: !0, value: a });
  }, xo;
}
var Oo, Rp;
function eS() {
  if (Rp) return Oo;
  Rp = 1;
  var e = o0(), t = Or();
  return Oo = function(r, n, i) {
    return i.get && e(i.get, n, { getter: !0 }), i.set && e(i.set, n, { setter: !0 }), t.f(r, n, i);
  }, Oo;
}
var So, Ip;
function tS() {
  if (Ip) return So;
  Ip = 1;
  var e = Gr(), t = eS(), r = Ze(), n = Nt(), i = r("species");
  return So = function(a) {
    var o = e(a);
    n && o && !o[i] && t(o, i, {
      configurable: !0,
      get: function() {
        return this;
      }
    });
  }, So;
}
var To, kp;
function rS() {
  if (kp) return To;
  kp = 1;
  var e = pa(), t = TypeError;
  return To = function(r, n) {
    if (e(n, r)) return r;
    throw new t("Incorrect invocation");
  }, To;
}
var Co, Pp;
function nS() {
  if (Pp) return Co;
  Pp = 1;
  var e = Ze(), t = e("toStringTag"), r = {};
  return r[t] = "z", Co = String(r) === "[object z]", Co;
}
var Ao, Np;
function il() {
  if (Np) return Ao;
  Np = 1;
  var e = nS(), t = $e(), r = Wr(), n = Ze(), i = n("toStringTag"), a = Object, o = r(/* @__PURE__ */ function() {
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
function iS() {
  if (Mp) return Ro;
  Mp = 1;
  var e = Ue(), t = qe(), r = $e(), n = il(), i = Gr(), a = Qf(), o = function() {
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
function aS() {
  if (Dp) return Io;
  Dp = 1;
  var e = iS(), t = ma(), r = TypeError;
  return Io = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a constructor");
  }, Io;
}
var ko, Fp;
function d0() {
  if (Fp) return ko;
  Fp = 1;
  var e = ct(), t = aS(), r = da(), n = Ze(), i = n("species");
  return ko = function(a, o) {
    var s = e(a).constructor, u;
    return s === void 0 || r(u = e(s)[i]) ? o : t(u);
  }, ko;
}
var Po, Lp;
function p0() {
  if (Lp) return Po;
  Lp = 1;
  var e = ha(), t = Function.prototype, r = t.apply, n = t.call;
  return Po = typeof Reflect == "object" && Reflect.apply || (e ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), Po;
}
var No, Bp;
function Oa() {
  if (Bp) return No;
  Bp = 1;
  var e = Wr(), t = Ue();
  return No = function(r) {
    if (e(r) === "Function") return t(r);
  }, No;
}
var Mo, jp;
function al() {
  if (jp) return Mo;
  jp = 1;
  var e = Oa(), t = or(), r = ha(), n = e(e.bind);
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
  var e = Gr();
  return Do = e("document", "documentElement"), Do;
}
var Fo, qp;
function sS() {
  if (qp) return Fo;
  qp = 1;
  var e = Ue();
  return Fo = e([].slice), Fo;
}
var Lo, Up;
function oS() {
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
  var e = Jn();
  return Bo = /(?:ipad|iphone|ipod).*applewebkit/i.test(e), Bo;
}
var jo, Wp;
function v0() {
  if (Wp) return jo;
  Wp = 1;
  var e = ze(), t = p0(), r = al(), n = $e(), i = Dt(), a = qe(), o = m0(), s = sS(), u = va(), c = oS(), l = g0(), f = Ea(), d = e.setImmediate, h = e.clearImmediate, m = e.process, p = e.Dispatch, b = e.Function, y = e.MessageChannel, _ = e.String, E = 0, S = {}, C = "onreadystatechange", B, I, O, w;
  a(function() {
    B = e.location;
  });
  var k = function(v) {
    if (i(S, v)) {
      var z = S[v];
      delete S[v], z();
    }
  }, q = function(v) {
    return function() {
      k(v);
    };
  }, x = function(v) {
    k(v.data);
  }, L = function(v) {
    e.postMessage(_(v), B.protocol + "//" + B.host);
  };
  return (!d || !h) && (d = function(z) {
    c(arguments.length, 1);
    var ie = n(z) ? z : b(z), D = s(arguments, 1);
    return S[++E] = function() {
      t(ie, void 0, D);
    }, I(E), E;
  }, h = function(z) {
    delete S[z];
  }, f ? I = function(v) {
    m.nextTick(q(v));
  } : p && p.now ? I = function(v) {
    p.now(q(v));
  } : y && !l ? (O = new y(), w = O.port2, O.port1.onmessage = x, I = r(w.postMessage, w)) : e.addEventListener && n(e.postMessage) && !e.importScripts && B && B.protocol !== "file:" && !a(L) ? (I = L, e.addEventListener("message", x, !1)) : C in u("script") ? I = function(v) {
    o.appendChild(u("script"))[C] = function() {
      o.removeChild(this), k(v);
    };
  } : I = function(v) {
    setTimeout(q(v), 0);
  }), jo = {
    set: d,
    clear: h
  }, jo;
}
var zo, Gp;
function uS() {
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
function cS() {
  if (Hp) return Uo;
  Hp = 1;
  var e = Jn();
  return Uo = /ipad|iphone|ipod/i.test(e) && typeof Pebble < "u", Uo;
}
var $o, Kp;
function fS() {
  if (Kp) return $o;
  Kp = 1;
  var e = Jn();
  return $o = /web0s(?!.*chrome)/i.test(e), $o;
}
var Wo, Yp;
function lS() {
  if (Yp) return Wo;
  Yp = 1;
  var e = ze(), t = uS(), r = al(), n = v0().set, i = y0(), a = g0(), o = cS(), s = fS(), u = Ea(), c = e.MutationObserver || e.WebKitMutationObserver, l = e.document, f = e.process, d = e.Promise, h = t("queueMicrotask"), m, p, b, y, _;
  if (!h) {
    var E = new i(), S = function() {
      var C, B;
      for (u && (C = f.domain) && C.exit(); B = E.get(); ) try {
        B();
      } catch (I) {
        throw E.head && m(), I;
      }
      C && C.enter();
    };
    !a && !u && !s && c && l ? (p = !0, b = l.createTextNode(""), new c(S).observe(b, { characterData: !0 }), m = function() {
      b.data = p = !p;
    }) : !o && d && d.resolve ? (y = d.resolve(void 0), y.constructor = d, _ = r(y.then, y), m = function() {
      _(S);
    }) : u ? m = function() {
      f.nextTick(S);
    } : (n = r(n, e), m = function() {
      n(S);
    }), h = function(C) {
      E.head || m(), E.add(C);
    };
  }
  return Wo = h, Wo;
}
var Go, Xp;
function hS() {
  return Xp || (Xp = 1, Go = function(e, t) {
    try {
      arguments.length === 1 ? console.error(e) : console.error(e, t);
    } catch {
    }
  }), Go;
}
var Vo, Zp;
function sl() {
  return Zp || (Zp = 1, Vo = function(e) {
    try {
      return { error: !1, value: e() };
    } catch (t) {
      return { error: !0, value: t };
    }
  }), Vo;
}
var Ho, Jp;
function ei() {
  if (Jp) return Ho;
  Jp = 1;
  var e = ze();
  return Ho = e.Promise, Ho;
}
var Ko, Qp;
function ti() {
  if (Qp) return Ko;
  Qp = 1;
  var e = ze(), t = ei(), r = $e(), n = f0(), i = Qf(), a = Ze(), o = l0(), s = Ht(), u = Yf(), c = t && t.prototype, l = a("species"), f = !1, d = r(e.PromiseRejectionEvent), h = n("Promise", function() {
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
function ri() {
  if (em) return Yo;
  em = 1;
  var e = or(), t = TypeError, r = function(n) {
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
function dS() {
  if (tm) return fd;
  tm = 1;
  var e = ft(), t = Ht(), r = Ea(), n = ze(), i = et(), a = Vr(), o = h0(), s = xa(), u = tS(), c = or(), l = $e(), f = dt(), d = rS(), h = d0(), m = v0().set, p = lS(), b = hS(), y = sl(), _ = y0(), E = _a(), S = ei(), C = ti(), B = ri(), I = "Promise", O = C.CONSTRUCTOR, w = C.REJECTION_EVENT, k = C.SUBCLASSING, q = E.getterFor(I), x = E.set, L = S && S.prototype, v = S, z = L, ie = n.TypeError, D = n.document, Q = n.process, F = B.f, ee = F, N = !!(D && D.createEvent && n.dispatchEvent), M = "unhandledrejection", K = "rejectionhandled", te = 0, H = 1, pe = 2, xe = 1, ce = 2, le, ve, fe, we, Ee = function(V) {
    var J;
    return f(V) && l(J = V.then) ? J : !1;
  }, g = function(V, J) {
    var Z = J.value, ae = J.state === H, de = ae ? V.ok : V.fail, _e = V.resolve, Fe = V.reject, Ve = V.domain, Pe, Le, Ce;
    try {
      de ? (ae || (J.rejection === ce && j(J), J.rejection = xe), de === !0 ? Pe = Z : (Ve && Ve.enter(), Pe = de(Z), Ve && (Ve.exit(), Ce = !0)), Pe === V.promise ? Fe(new ie("Promise-chain cycle")) : (Le = Ee(Pe)) ? i(Le, Pe, _e, Fe) : _e(Pe)) : Fe(Z);
    } catch (He) {
      Ve && !Ce && Ve.exit(), Fe(He);
    }
  }, X = function(V, J) {
    V.notified || (V.notified = !0, p(function() {
      for (var Z = V.reactions, ae; ae = Z.get(); )
        g(ae, V);
      V.notified = !1, J && !V.rejection && P(V);
    }));
  }, W = function(V, J, Z) {
    var ae, de;
    N ? (ae = D.createEvent("Event"), ae.promise = J, ae.reason = Z, ae.initEvent(V, !1, !0), n.dispatchEvent(ae)) : ae = { promise: J, reason: Z }, !w && (de = n["on" + V]) ? de(ae) : V === M && b("Unhandled promise rejection", Z);
  }, P = function(V) {
    i(m, n, function() {
      var J = V.facade, Z = V.value, ae = T(V), de;
      if (ae && (de = y(function() {
        r ? Q.emit("unhandledRejection", Z, J) : W(M, J, Z);
      }), V.rejection = r || T(V) ? ce : xe, de.error))
        throw de.value;
    });
  }, T = function(V) {
    return V.rejection !== xe && !V.parent;
  }, j = function(V) {
    i(m, n, function() {
      var J = V.facade;
      r ? Q.emit("rejectionHandled", J) : W(K, J, V.value);
    });
  }, re = function(V, J, Z) {
    return function(ae) {
      V(J, ae, Z);
    };
  }, ne = function(V, J, Z) {
    V.done || (V.done = !0, Z && (V = Z), V.value = J, V.state = pe, X(V, !0));
  }, G = function(V, J, Z) {
    if (!V.done) {
      V.done = !0, Z && (V = Z);
      try {
        if (V.facade === J) throw new ie("Promise can't be resolved itself");
        var ae = Ee(J);
        ae ? p(function() {
          var de = { done: !1 };
          try {
            i(
              ae,
              J,
              re(G, de, V),
              re(ne, de, V)
            );
          } catch (_e) {
            ne(de, _e, V);
          }
        }) : (V.value = J, V.state = H, X(V, !1));
      } catch (de) {
        ne({ done: !1 }, de, V);
      }
    }
  };
  if (O && (v = function(J) {
    d(this, z), c(J), i(le, this);
    var Z = q(this);
    try {
      J(re(G, Z), re(ne, Z));
    } catch (ae) {
      ne(Z, ae);
    }
  }, z = v.prototype, le = function(J) {
    x(this, {
      type: I,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new _(),
      rejection: !1,
      state: te,
      value: null
    });
  }, le.prototype = a(z, "then", function(J, Z) {
    var ae = q(this), de = F(h(this, v));
    return ae.parent = !0, de.ok = l(J) ? J : !0, de.fail = l(Z) && Z, de.domain = r ? Q.domain : void 0, ae.state === te ? ae.reactions.add(de) : p(function() {
      g(de, ae);
    }), de.promise;
  }), ve = function() {
    var V = new le(), J = q(V);
    this.promise = V, this.resolve = re(G, J), this.reject = re(ne, J);
  }, B.f = F = function(V) {
    return V === v || V === fe ? new ve(V) : ee(V);
  }, !t && l(S) && L !== Object.prototype)) {
    we = L.then, k || a(L, "then", function(J, Z) {
      var ae = this;
      return new v(function(de, _e) {
        i(we, ae, de, _e);
      }).then(J, Z);
    }, { unsafe: !0 });
    try {
      delete L.constructor;
    } catch {
    }
    o && o(L, z);
  }
  return e({ global: !0, constructor: !0, wrap: !0, forced: O }, {
    Promise: v
  }), s(v, I, !1, !0), u(I), fd;
}
var rm = {}, Xo, nm;
function ni() {
  return nm || (nm = 1, Xo = {}), Xo;
}
var Zo, im;
function pS() {
  if (im) return Zo;
  im = 1;
  var e = Ze(), t = ni(), r = e("iterator"), n = Array.prototype;
  return Zo = function(i) {
    return i !== void 0 && (t.Array === i || n[r] === i);
  }, Zo;
}
var Jo, am;
function b0() {
  if (am) return Jo;
  am = 1;
  var e = il(), t = dn(), r = da(), n = ni(), i = Ze(), a = i("iterator");
  return Jo = function(o) {
    if (!r(o)) return t(o, a) || t(o, "@@iterator") || n[e(o)];
  }, Jo;
}
var Qo, sm;
function mS() {
  if (sm) return Qo;
  sm = 1;
  var e = et(), t = or(), r = ct(), n = ma(), i = b0(), a = TypeError;
  return Qo = function(o, s) {
    var u = arguments.length < 2 ? i(o) : s;
    if (t(u)) return r(e(u, o));
    throw new a(n(o) + " is not iterable");
  }, Qo;
}
var eu, om;
function gS() {
  if (om) return eu;
  om = 1;
  var e = et(), t = ct(), r = dn();
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
  var e = al(), t = et(), r = ct(), n = ma(), i = pS(), a = rl(), o = pa(), s = mS(), u = b0(), c = gS(), l = TypeError, f = function(h, m) {
    this.stopped = h, this.result = m;
  }, d = f.prototype;
  return tu = function(h, m, p) {
    var b = p && p.that, y = !!(p && p.AS_ENTRIES), _ = !!(p && p.IS_RECORD), E = !!(p && p.IS_ITERATOR), S = !!(p && p.INTERRUPTED), C = e(m, b), B, I, O, w, k, q, x, L = function(z) {
      return B && c(B, "normal", z), new f(!0, z);
    }, v = function(z) {
      return y ? (r(z), S ? C(z[0], z[1], L) : C(z[0], z[1])) : S ? C(z, L) : C(z);
    };
    if (_)
      B = h.iterator;
    else if (E)
      B = h;
    else {
      if (I = u(h), !I) throw new l(n(h) + " is not iterable");
      if (i(I)) {
        for (O = 0, w = a(h); w > O; O++)
          if (k = v(h[O]), k && o(d, k)) return k;
        return new f(!1);
      }
      B = s(h, I);
    }
    for (q = _ ? h.next : B.next; !(x = t(q, B)).done; ) {
      try {
        k = v(x.value);
      } catch (z) {
        c(B, "throw", z);
      }
      if (typeof k == "object" && k && o(d, k)) return k;
    }
    return new f(!1);
  }, tu;
}
var ru, cm;
function vS() {
  if (cm) return ru;
  cm = 1;
  var e = Ze(), t = e("iterator"), r = !1;
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
  var e = ei(), t = vS(), r = ti().CONSTRUCTOR;
  return nu = r || !t(function(n) {
    e.all(n).then(void 0, function() {
    });
  }), nu;
}
var lm;
function yS() {
  if (lm) return rm;
  lm = 1;
  var e = ft(), t = et(), r = or(), n = ri(), i = sl(), a = _0(), o = w0();
  return e({ target: "Promise", stat: !0, forced: o }, {
    all: function(u) {
      var c = this, l = n.f(c), f = l.resolve, d = l.reject, h = i(function() {
        var m = r(c.resolve), p = [], b = 0, y = 1;
        a(u, function(_) {
          var E = b++, S = !1;
          y++, t(m, c, _).then(function(C) {
            S || (S = !0, p[E] = C, --y || f(p));
          }, d);
        }), --y || f(p);
      });
      return h.error && d(h.value), l.promise;
    }
  }), rm;
}
var hm = {}, dm;
function bS() {
  if (dm) return hm;
  dm = 1;
  var e = ft(), t = Ht(), r = ti().CONSTRUCTOR, n = ei(), i = Gr(), a = $e(), o = Vr(), s = n && n.prototype;
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
function _S() {
  if (mm) return pm;
  mm = 1;
  var e = ft(), t = et(), r = or(), n = ri(), i = sl(), a = _0(), o = w0();
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
function wS() {
  if (vm) return gm;
  vm = 1;
  var e = ft(), t = ri(), r = ti().CONSTRUCTOR;
  return e({ target: "Promise", stat: !0, forced: r }, {
    reject: function(i) {
      var a = t.f(this), o = a.reject;
      return o(i), a.promise;
    }
  }), gm;
}
var ym = {}, iu, bm;
function ES() {
  if (bm) return iu;
  bm = 1;
  var e = ct(), t = dt(), r = ri();
  return iu = function(n, i) {
    if (e(n), t(i) && i.constructor === n) return i;
    var a = r.f(n), o = a.resolve;
    return o(i), a.promise;
  }, iu;
}
var _m;
function xS() {
  if (_m) return ym;
  _m = 1;
  var e = ft(), t = Gr(), r = Ht(), n = ei(), i = ti().CONSTRUCTOR, a = ES(), o = t("Promise"), s = r && !i;
  return e({ target: "Promise", stat: !0, forced: r || i }, {
    resolve: function(c) {
      return a(s && this === o ? n : this, c);
    }
  }), ym;
}
var wm;
function OS() {
  return wm || (wm = 1, dS(), yS(), bS(), _S(), wS(), xS()), cd;
}
OS();
function Em(e, t, r, n, i, a, o) {
  try {
    var s = e[a](o), u = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, i);
}
function TC(e) {
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
var xm = {}, Om = {}, au, Sm;
function Kt() {
  if (Sm) return au;
  Sm = 1;
  var e = il(), t = String;
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
function SS() {
  if (Am) return cu;
  Am = 1;
  var e = c0(), t = nl();
  return cu = Object.keys || function(n) {
    return e(n, t);
  }, cu;
}
var Rm;
function TS() {
  if (Rm) return uu;
  Rm = 1;
  var e = Nt(), t = s0(), r = Or(), n = ct(), i = Zn(), a = SS();
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
  var e = ct(), t = TS(), r = nl(), n = tl(), i = m0(), a = va(), o = el(), s = ">", u = "<", c = "prototype", l = "script", f = o("IE_PROTO"), d = function() {
  }, h = function(_) {
    return u + l + s + _ + u + "/" + l + s;
  }, m = function(_) {
    _.write(h("")), _.close();
    var E = _.parentWindow.Object;
    return _ = null, E;
  }, p = function() {
    var _ = a("iframe"), E = "java" + l + ":", S;
    return _.style.display = "none", i.appendChild(_), _.src = String(E), S = _.contentWindow.document, S.open(), S.write(h("document.F=Object")), S.close(), S.F;
  }, b, y = function() {
    try {
      b = new ActiveXObject("htmlfile");
    } catch {
    }
    y = typeof document < "u" ? document.domain && b ? m(b) : p() : m(b);
    for (var _ = r.length; _--; ) delete y[c][r[_]];
    return y();
  };
  return n[f] = !0, fu = Object.create || function(E, S) {
    var C;
    return E !== null ? (d[c] = e(E), C = new d(), d[c] = null, C[f] = E) : C = y(), S === void 0 ? C : t.f(C, S);
  }, fu;
}
var lu, km;
function CS() {
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
function AS() {
  if (Pm) return hu;
  Pm = 1;
  var e = qe(), t = ze(), r = t.RegExp;
  return hu = e(function() {
    var n = r("(?<a>b)", "g");
    return n.exec("b").groups.a !== "b" || "b".replace(n, "$<a>c") !== "bc";
  }), hu;
}
var du, Nm;
function ol() {
  if (Nm) return du;
  Nm = 1;
  var e = et(), t = Ue(), r = Kt(), n = E0(), i = x0(), a = Jf(), o = Sa(), s = _a().get, u = CS(), c = AS(), l = a("native-string-replace", String.prototype.replace), f = RegExp.prototype.exec, d = f, h = t("".charAt), m = t("".indexOf), p = t("".replace), b = t("".slice), y = function() {
    var C = /a/, B = /b*/g;
    return e(f, C, "a"), e(f, B, "a"), C.lastIndex !== 0 || B.lastIndex !== 0;
  }(), _ = i.BROKEN_CARET, E = /()??/.exec("")[1] !== void 0, S = y || E || _ || u || c;
  return S && (d = function(B) {
    var I = this, O = s(I), w = r(B), k = O.raw, q, x, L, v, z, ie, D;
    if (k)
      return k.lastIndex = I.lastIndex, q = e(d, k, w), I.lastIndex = k.lastIndex, q;
    var Q = O.groups, F = _ && I.sticky, ee = e(n, I), N = I.source, M = 0, K = w;
    if (F && (ee = p(ee, "y", ""), m(ee, "g") === -1 && (ee += "g"), K = b(w, I.lastIndex), I.lastIndex > 0 && (!I.multiline || I.multiline && h(w, I.lastIndex - 1) !== `
`) && (N = "(?: " + N + ")", K = " " + K, M++), x = new RegExp("^(?:" + N + ")", ee)), E && (x = new RegExp("^" + N + "$(?!\\s)", ee)), y && (L = I.lastIndex), v = e(f, F ? x : I, K), F ? v ? (v.input = b(v.input, M), v[0] = b(v[0], M), v.index = I.lastIndex, I.lastIndex += v[0].length) : I.lastIndex = 0 : y && v && (I.lastIndex = I.global ? v.index + v[0].length : L), E && v && v.length > 1 && e(l, v[0], x, function() {
      for (z = 1; z < arguments.length - 2; z++)
        arguments[z] === void 0 && (v[z] = void 0);
    }), v && Q)
      for (v.groups = ie = o(null), z = 0; z < Q.length; z++)
        D = Q[z], ie[D[0]] = v[D[1]];
    return v;
  }), du = d, du;
}
var Mm;
function RS() {
  if (Mm) return Om;
  Mm = 1;
  var e = ft(), t = ol();
  return e({ target: "RegExp", proto: !0, forced: /./.exec !== t }, {
    exec: t
  }), Om;
}
var pu, Dm;
function ul() {
  if (Dm) return pu;
  Dm = 1, RS();
  var e = et(), t = Vr(), r = ol(), n = qe(), i = Ze(), a = Qn(), o = i("species"), s = RegExp.prototype;
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
      var p = /./[d], b = c(d, ""[u], function(y, _, E, S, C) {
        var B = _.exec;
        return B === r || B === s.exec ? h && !C ? { done: !0, value: e(p, _, E, S) } : { done: !0, value: e(y, E, _, S) } : { done: !1 };
      });
      t(String.prototype, u, b[0]), t(s, d, b[1]);
    }
    f && a(s[d], "sham", !0);
  }, pu;
}
var mu, Fm;
function IS() {
  if (Fm) return mu;
  Fm = 1;
  var e = Ue(), t = wa(), r = Kt(), n = Mt(), i = e("".charAt), a = e("".charCodeAt), o = e("".slice), s = function(u) {
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
function cl() {
  if (Lm) return gu;
  Lm = 1;
  var e = IS().charAt;
  return gu = function(t, r, n) {
    return r + (n ? e(t, r).length : 1);
  }, gu;
}
var vu, Bm;
function fl() {
  if (Bm) return vu;
  Bm = 1;
  var e = et(), t = ct(), r = $e(), n = Wr(), i = ol(), a = TypeError;
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
function kS() {
  if (jm) return xm;
  jm = 1;
  var e = et(), t = ul(), r = ct(), n = dt(), i = pn(), a = Kt(), o = Mt(), s = dn(), u = cl(), c = fl();
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
        for (var _ = [], E = 0, S; (S = c(m, p)) !== null; ) {
          var C = a(S[0]);
          _[E] = C, C === "" && (m.lastIndex = u(p, i(m.lastIndex), y)), E++;
        }
        return E === 0 ? null : _;
      }
    ];
  }), xm;
}
kS();
var zm = {}, yu, qm;
function PS() {
  if (qm) return yu;
  qm = 1;
  var e = Ue(), t = ga(), r = Math.floor, n = e("".charAt), i = e("".replace), a = e("".slice), o = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, s = /\$([$&'`]|\d{1,2})/g;
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
          var S = +_;
          if (S === 0) return y;
          if (S > p) {
            var C = r(S / 10);
            return C === 0 ? y : C <= p ? f[C - 1] === void 0 ? n(_, 1) : f[C - 1] + n(_, 1) : y;
          }
          E = f[S - 1];
      }
      return E === void 0 ? "" : E;
    });
  }, yu;
}
var Um;
function NS() {
  if (Um) return zm;
  Um = 1;
  var e = p0(), t = et(), r = Ue(), n = ul(), i = qe(), a = ct(), o = $e(), s = dt(), u = wa(), c = pn(), l = Kt(), f = Mt(), d = cl(), h = dn(), m = PS(), p = fl(), b = Ze(), y = b("replace"), _ = Math.max, E = Math.min, S = r([].concat), C = r([].push), B = r("".indexOf), I = r("".slice), O = function(x) {
    return x === void 0 ? x : String(x);
  }, w = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), k = function() {
    return /./[y] ? /./[y]("a", "$0") === "" : !1;
  }(), q = !i(function() {
    var x = /./;
    return x.exec = function() {
      var L = [];
      return L.groups = { a: "7" }, L;
    }, "".replace(x, "$<a>") !== "7";
  });
  return n("replace", function(x, L, v) {
    var z = k ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function(D, Q) {
        var F = f(this), ee = s(D) ? h(D, y) : void 0;
        return ee ? t(ee, D, F, Q) : t(L, l(F), D, Q);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(ie, D) {
        var Q = a(this), F = l(ie);
        if (typeof D == "string" && B(D, z) === -1 && B(D, "$<") === -1) {
          var ee = v(L, Q, F, D);
          if (ee.done) return ee.value;
        }
        var N = o(D);
        N || (D = l(D));
        var M = Q.global, K;
        M && (K = Q.unicode, Q.lastIndex = 0);
        for (var te = [], H; H = p(Q, F), !(H === null || (C(te, H), !M)); ) {
          var pe = l(H[0]);
          pe === "" && (Q.lastIndex = d(F, c(Q.lastIndex), K));
        }
        for (var xe = "", ce = 0, le = 0; le < te.length; le++) {
          H = te[le];
          for (var ve = l(H[0]), fe = _(E(u(H.index), F.length), 0), we = [], Ee, g = 1; g < H.length; g++) C(we, O(H[g]));
          var X = H.groups;
          if (N) {
            var W = S([ve], we, fe, F);
            X !== void 0 && C(W, X), Ee = l(e(D, void 0, W));
          } else
            Ee = m(ve, F, fe, we, X, D);
          fe >= ce && (xe += I(F, ce, fe) + Ee, ce = fe + ve.length);
        }
        return xe + I(F, ce);
      }
    ];
  }, !q || !w || k), zm;
}
NS();
var $m = {}, bu, Wm;
function MS() {
  if (Wm) return bu;
  Wm = 1;
  var e = dt(), t = Wr(), r = Ze(), n = r("match");
  return bu = function(i) {
    var a;
    return e(i) && ((a = i[n]) !== void 0 ? !!a : t(i) === "RegExp");
  }, bu;
}
var _u, Gm;
function ll() {
  if (Gm) return _u;
  Gm = 1;
  var e = MS(), t = TypeError;
  return _u = function(r) {
    if (e(r))
      throw new t("The method doesn't accept regular expressions");
    return r;
  }, _u;
}
var wu, Vm;
function hl() {
  if (Vm) return wu;
  Vm = 1;
  var e = Ze(), t = e("match");
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
function DS() {
  if (Hm) return $m;
  Hm = 1;
  var e = ft(), t = Oa(), r = ya().f, n = pn(), i = Kt(), a = ll(), o = Mt(), s = hl(), u = Ht(), c = t("".slice), l = Math.min, f = s("startsWith"), d = !u && !f && !!function() {
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
DS();
var Eu, Km;
function FS() {
  if (Km) return Eu;
  Km = 1;
  var e = Ze(), t = Sa(), r = Or().f, n = e("unscopables"), i = Array.prototype;
  return i[n] === void 0 && r(i, n, {
    configurable: !0,
    value: t(null)
  }), Eu = function(a) {
    i[n][a] = !0;
  }, Eu;
}
var xu, Ym;
function LS() {
  if (Ym) return xu;
  Ym = 1;
  var e = qe();
  return xu = !e(function() {
    function t() {
    }
    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }), xu;
}
var Ou, Xm;
function O0() {
  if (Xm) return Ou;
  Xm = 1;
  var e = Dt(), t = $e(), r = ga(), n = el(), i = LS(), a = n("IE_PROTO"), o = Object, s = o.prototype;
  return Ou = i ? o.getPrototypeOf : function(u) {
    var c = r(u);
    if (e(c, a)) return c[a];
    var l = c.constructor;
    return t(l) && c instanceof l ? l.prototype : c instanceof o ? s : null;
  }, Ou;
}
var Su, Zm;
function S0() {
  if (Zm) return Su;
  Zm = 1;
  var e = qe(), t = $e(), r = dt(), n = Sa(), i = O0(), a = Vr(), o = Ze(), s = Ht(), u = o("iterator"), c = !1, l, f, d;
  [].keys && (d = [].keys(), "next" in d ? (f = i(i(d)), f !== Object.prototype && (l = f)) : c = !0);
  var h = !r(l) || e(function() {
    var m = {};
    return l[u].call(m) !== m;
  });
  return h ? l = {} : s && (l = n(l)), t(l[u]) || a(l, u, function() {
    return this;
  }), Su = {
    IteratorPrototype: l,
    BUGGY_SAFARI_ITERATORS: c
  }, Su;
}
var Tu, Jm;
function BS() {
  if (Jm) return Tu;
  Jm = 1;
  var e = S0().IteratorPrototype, t = Sa(), r = Kf(), n = xa(), i = ni(), a = function() {
    return this;
  };
  return Tu = function(o, s, u, c) {
    var l = s + " Iterator";
    return o.prototype = t(e, { next: r(+!c, u) }), n(o, l, !1, !0), i[l] = a, o;
  }, Tu;
}
var Cu, Qm;
function jS() {
  if (Qm) return Cu;
  Qm = 1;
  var e = ft(), t = et(), r = Ht(), n = ba(), i = $e(), a = BS(), o = O0(), s = h0(), u = xa(), c = Qn(), l = Vr(), f = Ze(), d = ni(), h = S0(), m = n.PROPER, p = n.CONFIGURABLE, b = h.IteratorPrototype, y = h.BUGGY_SAFARI_ITERATORS, _ = f("iterator"), E = "keys", S = "values", C = "entries", B = function() {
    return this;
  };
  return Cu = function(I, O, w, k, q, x, L) {
    a(w, O, k);
    var v = function(te) {
      if (te === q && F) return F;
      if (!y && te && te in D) return D[te];
      switch (te) {
        case E:
          return function() {
            return new w(this, te);
          };
        case S:
          return function() {
            return new w(this, te);
          };
        case C:
          return function() {
            return new w(this, te);
          };
      }
      return function() {
        return new w(this);
      };
    }, z = O + " Iterator", ie = !1, D = I.prototype, Q = D[_] || D["@@iterator"] || q && D[q], F = !y && Q || v(q), ee = O === "Array" && D.entries || Q, N, M, K;
    if (ee && (N = o(ee.call(new I())), N !== Object.prototype && N.next && (!r && o(N) !== b && (s ? s(N, b) : i(N[_]) || l(N, _, B)), u(N, z, !0, !0), r && (d[z] = B))), m && q === S && Q && Q.name !== S && (!r && p ? c(D, "name", S) : (ie = !0, F = function() {
      return t(Q, this);
    })), q)
      if (M = {
        values: v(S),
        keys: x ? F : v(E),
        entries: v(C)
      }, L) for (K in M)
        (y || ie || !(K in D)) && l(D, K, M[K]);
      else e({ target: O, proto: !0, forced: y || ie }, M);
    return (!r || L) && D[_] !== F && l(D, _, F, { name: q }), d[O] = F, M;
  }, Cu;
}
var Au, eg;
function zS() {
  return eg || (eg = 1, Au = function(e, t) {
    return { value: e, done: t };
  }), Au;
}
var Ru, tg;
function T0() {
  if (tg) return Ru;
  tg = 1;
  var e = Zn(), t = FS(), r = ni(), n = _a(), i = Or().f, a = jS(), o = zS(), s = Ht(), u = Nt(), c = "Array Iterator", l = n.set, f = n.getterFor(c);
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
function qS() {
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
function US() {
  if (ig) return ku;
  ig = 1;
  var e = va(), t = e("span").classList, r = t && t.constructor && t.constructor.prototype;
  return ku = r === Object.prototype ? void 0 : r, ku;
}
var ag;
function $S() {
  if (ag) return rg;
  ag = 1;
  var e = ze(), t = qS(), r = US(), n = T0(), i = Qn(), a = xa(), o = Ze(), s = o("iterator"), u = n.values, c = function(f, d) {
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
$S();
function WS(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GS(e) {
  var t = WS(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function CC(e, t, r) {
  return (t = GS(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var sg = {}, Pu, og;
function VS() {
  if (og) return Pu;
  og = 1;
  var e = or(), t = ga(), r = Qy(), n = rl(), i = TypeError, a = "Reduce of empty array with no initial value", o = function(s) {
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
function HS() {
  if (cg) return sg;
  cg = 1;
  var e = ft(), t = VS().left, r = C0(), n = Yf(), i = Ea(), a = !i && n > 79 && n < 83, o = a || !r("reduce");
  return e({ target: "Array", proto: !0, forced: o }, {
    reduce: function(u) {
      var c = arguments.length;
      return t(this, u, c, c > 1 ? arguments[1] : void 0);
    }
  }), sg;
}
HS();
var fg = {}, lg;
function KS() {
  if (lg) return fg;
  lg = 1;
  var e = ft(), t = Oa(), r = ya().f, n = pn(), i = Kt(), a = ll(), o = Mt(), s = hl(), u = Ht(), c = t("".slice), l = Math.min, f = s("endsWith"), d = !u && !f && !!function() {
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
KS();
var hg = {}, dg;
function YS() {
  if (dg) return hg;
  dg = 1;
  var e = et(), t = Ue(), r = ul(), n = ct(), i = dt(), a = Mt(), o = d0(), s = cl(), u = pn(), c = Kt(), l = dn(), f = fl(), d = x0(), h = qe(), m = d.UNSUPPORTED_Y, p = 4294967295, b = Math.min, y = t([].push), _ = t("".slice), E = !h(function() {
    var C = /(?:)/, B = C.exec;
    C.exec = function() {
      return B.apply(this, arguments);
    };
    var I = "ab".split(C);
    return I.length !== 2 || I[0] !== "a" || I[1] !== "b";
  }), S = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length;
  return r("split", function(C, B, I) {
    var O = "0".split(void 0, 0).length ? function(w, k) {
      return w === void 0 && k === 0 ? [] : e(B, this, w, k);
    } : B;
    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function(k, q) {
        var x = a(this), L = i(k) ? l(k, C) : void 0;
        return L ? e(L, k, x, q) : e(O, c(x), k, q);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(w, k) {
        var q = n(this), x = c(w);
        if (!S) {
          var L = I(O, q, x, k, O !== B);
          if (L.done) return L.value;
        }
        var v = o(q, RegExp), z = q.unicode, ie = (q.ignoreCase ? "i" : "") + (q.multiline ? "m" : "") + (q.unicode ? "u" : "") + (m ? "g" : "y"), D = new v(m ? "^(?:" + q.source + ")" : q, ie), Q = k === void 0 ? p : k >>> 0;
        if (Q === 0) return [];
        if (x.length === 0) return f(D, x) === null ? [x] : [];
        for (var F = 0, ee = 0, N = []; ee < x.length; ) {
          D.lastIndex = m ? 0 : ee;
          var M = f(D, m ? _(x, ee) : x), K;
          if (M === null || (K = b(u(D.lastIndex + (m ? ee : 0)), x.length)) === F)
            ee = s(x, ee, z);
          else {
            if (y(N, _(x, F, ee)), N.length === Q) return N;
            for (var te = 1; te <= M.length - 1; te++)
              if (y(N, M[te]), N.length === Q) return N;
            ee = F = K;
          }
        }
        return y(N, _(x, F)), N;
      }
    ];
  }, S || !E, m), hg;
}
YS();
var Cn = { exports: {} }, Tr = { exports: {} }, XS = Tr.exports, pg;
function ZS() {
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
  }).call(XS)), Tr.exports;
}
var mg;
function JS() {
  if (mg) return Cn.exports;
  mg = 1;
  for (var e = ZS(), t = typeof window > "u" ? Rr : window, r = ["moz", "webkit"], n = "AnimationFrame", i = t["request" + n], a = t["cancel" + n] || t["cancelRequest" + n], o = 0; !i && o < r.length; o++)
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
  return Cn.exports = function(f) {
    return i.call(t, f);
  }, Cn.exports.cancel = function() {
    a.apply(t, arguments);
  }, Cn.exports.polyfill = function(f) {
    f || (f = t), f.requestAnimationFrame = i, f.cancelAnimationFrame = a;
  }, Cn.exports;
}
var QS = JS();
const AC = /* @__PURE__ */ ln(QS);
var gg = {}, Mu, vg;
function A0() {
  return vg || (vg = 1, Mu = `	
\v\f\r                　\u2028\u2029\uFEFF`), Mu;
}
var Du, yg;
function eT() {
  if (yg) return Du;
  yg = 1;
  var e = Ue(), t = Mt(), r = Kt(), n = A0(), i = e("".replace), a = RegExp("^[" + n + "]+"), o = RegExp("(^|[^" + n + "])[" + n + "]+$"), s = function(u) {
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
function tT() {
  if (bg) return Fu;
  bg = 1;
  var e = ba().PROPER, t = qe(), r = A0(), n = "​᠎";
  return Fu = function(i) {
    return t(function() {
      return !!r[i]() || n[i]() !== n || e && r[i].name !== i;
    });
  }, Fu;
}
var _g;
function rT() {
  if (_g) return gg;
  _g = 1;
  var e = ft(), t = eT().trim, r = tT();
  return e({ target: "String", proto: !0, forced: r("trim") }, {
    trim: function() {
      return t(this);
    }
  }), gg;
}
rT();
var Lu, wg;
function nT() {
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
var iT = nT();
const RC = /* @__PURE__ */ ln(iT);
var Eg = {}, xg;
function aT() {
  if (xg) return Eg;
  xg = 1;
  var e = ft(), t = Oa(), r = u0().indexOf, n = C0(), i = t([].indexOf), a = !!i && 1 / i([1], 1, -0) < 0, o = a || !n("indexOf");
  return e({ target: "Array", proto: !0, forced: o }, {
    indexOf: function(u) {
      var c = arguments.length > 1 ? arguments[1] : void 0;
      return a ? i(this, u, c) || 0 : r(this, u, c);
    }
  }), Eg;
}
aT();
var Og = {}, Sg;
function sT() {
  if (Sg) return Og;
  Sg = 1;
  var e = ft(), t = Ue(), r = ll(), n = Mt(), i = Kt(), a = hl(), o = t("".indexOf);
  return e({ target: "String", proto: !0, forced: !a("includes") }, {
    includes: function(u) {
      return !!~o(
        i(n(this)),
        i(r(u)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }), Og;
}
sT();
var Tg = {}, Bu, Cg;
function oT() {
  if (Cg) return Bu;
  Cg = 1;
  var e = Wr();
  return Bu = Array.isArray || function(r) {
    return e(r) === "Array";
  }, Bu;
}
var Ag;
function uT() {
  if (Ag) return Tg;
  Ag = 1;
  var e = ft(), t = Ue(), r = oT(), n = t([].reverse), i = [1, 2];
  return e({ target: "Array", proto: !0, forced: String(i) === String(i.reverse()) }, {
    reverse: function() {
      return r(this) && (this.length = this.length), n(this);
    }
  }), Tg;
}
uT();
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
function cT(e) {
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
var hr = Math.PI;
function ju(e, t, r) {
  e.lArcFlag = e.lArcFlag === 0 ? 0 : 1, e.sweepFlag = e.sweepFlag === 0 ? 0 : 1;
  var n = e.rX, i = e.rY, a = e.x, o = e.y;
  n = Math.abs(e.rX), i = Math.abs(e.rY);
  var s = Fc([(t - a) / 2, (r - o) / 2], -e.xRot / 180 * hr), u = s[0], c = s[1], l = Math.pow(u, 2) / Math.pow(n, 2) + Math.pow(c, 2) / Math.pow(i, 2);
  1 < l && (n *= Math.sqrt(l), i *= Math.sqrt(l)), e.rX = n, e.rY = i;
  var f = Math.pow(n, 2) * Math.pow(c, 2) + Math.pow(i, 2) * Math.pow(u, 2), d = (e.lArcFlag !== e.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - f) / f)), h = n * c / i * d, m = -i * u / n * d, p = Fc([h, m], e.xRot / 180 * hr);
  e.cX = p[0] + (t + a) / 2, e.cY = p[1] + (r + o) / 2, e.phi1 = Math.atan2((c - m) / i, (u - h) / n), e.phi2 = Math.atan2((-c - m) / i, (-u - h) / n), e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * hr), e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * hr), e.phi1 *= 180 / hr, e.phi2 *= 180 / hr;
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
  return e + Math.cos(n / 180 * hr) * t + Math.sin(n / 180 * hr) * r;
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
      var y = h.x1, _ = h.x2, E = h.relative && !isNaN(b), S = h.x !== void 0 ? h.x : E ? 0 : m, C = h.y !== void 0 ? h.y : E ? 0 : p;
      function B(M) {
        return M * M;
      }
      h.type & se.HORIZ_LINE_TO && u !== 0 && (h.type = se.LINE_TO, h.y = h.relative ? 0 : p), h.type & se.VERT_LINE_TO && c !== 0 && (h.type = se.LINE_TO, h.x = h.relative ? 0 : m), h.x !== void 0 && (h.x = h.x * s + C * c + (E ? 0 : f)), h.y !== void 0 && (h.y = S * u + h.y * l + (E ? 0 : d)), h.x1 !== void 0 && (h.x1 = h.x1 * s + h.y1 * c + (E ? 0 : f)), h.y1 !== void 0 && (h.y1 = y * u + h.y1 * l + (E ? 0 : d)), h.x2 !== void 0 && (h.x2 = h.x2 * s + h.y2 * c + (E ? 0 : f)), h.y2 !== void 0 && (h.y2 = _ * u + h.y2 * l + (E ? 0 : d));
      var I = s * l - u * c;
      if (h.xRot !== void 0 && (s !== 1 || u !== 0 || c !== 0 || l !== 1)) if (I === 0) delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag, h.type = se.LINE_TO;
      else {
        var O = h.xRot * Math.PI / 180, w = Math.sin(O), k = Math.cos(O), q = 1 / B(h.rX), x = 1 / B(h.rY), L = B(k) * q + B(w) * x, v = 2 * w * k * (q - x), z = B(w) * q + B(k) * x, ie = L * l * l - v * u * l + z * u * u, D = v * (s * l + u * c) - 2 * (L * c * l + z * s * u), Q = L * c * c - v * s * c + z * s * s, F = (Math.atan2(D, ie - Q) + Math.PI) % Math.PI / 2, ee = Math.sin(F), N = Math.cos(F);
        h.rX = Math.abs(I) / Math.sqrt(ie * B(N) + D * ee * N + Q * B(ee)), h.rY = Math.abs(I) / Math.sqrt(ie * B(ee) - D * ee * N + Q * B(N)), h.xRot = 180 * F / Math.PI;
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
      var y = Math.abs, _ = !1, E = 0, S = 0;
      if (d.type & se.SMOOTH_CURVE_TO && (E = isNaN(u) ? 0 : h - u, S = isNaN(c) ? 0 : m - c), d.type & (se.CURVE_TO | se.SMOOTH_CURVE_TO) ? (u = d.relative ? h + d.x2 : d.x2, c = d.relative ? m + d.y2 : d.y2) : (u = NaN, c = NaN), d.type & se.SMOOTH_QUAD_TO ? (l = isNaN(l) ? h : 2 * h - l, f = isNaN(f) ? m : 2 * m - f) : d.type & se.QUAD_TO ? (l = d.relative ? h + d.x1 : d.x1, f = d.relative ? m + d.y1 : d.y2) : (l = NaN, f = NaN), d.type & se.LINE_COMMANDS || d.type & se.ARC && (d.rX === 0 || d.rY === 0 || !d.lArcFlag) || d.type & se.CURVE_TO || d.type & se.SMOOTH_CURVE_TO || d.type & se.QUAD_TO || d.type & se.SMOOTH_QUAD_TO) {
        var C = d.x === void 0 ? 0 : d.relative ? d.x : d.x - h, B = d.y === void 0 ? 0 : d.relative ? d.y : d.y - m;
        E = isNaN(l) ? d.x1 === void 0 ? E : d.relative ? d.x : d.x1 - h : l - h, S = isNaN(f) ? d.y1 === void 0 ? S : d.relative ? d.y : d.y1 - m : f - m;
        var I = d.x2 === void 0 ? 0 : d.relative ? d.x : d.x2 - h, O = d.y2 === void 0 ? 0 : d.relative ? d.y : d.y2 - m;
        y(C) <= s && y(B) <= s && y(E) <= s && y(S) <= s && y(I) <= s && y(O) <= s && (_ = !0);
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
        for (var y = Math.min(l.phi1, l.phi2), _ = Math.max(l.phi1, l.phi2) - y, E = Math.ceil(_ / 90), S = new Array(E), C = f, B = d, I = 0; I < E; I++) {
          var O = Ig(l.phi1, l.phi2, I / E), w = Ig(l.phi1, l.phi2, (I + 1) / E), k = w - O, q = 4 / 3 * Math.tan(k * Qt / 4), x = [Math.cos(O * Qt) - q * Math.sin(O * Qt), Math.sin(O * Qt) + q * Math.cos(O * Qt)], L = x[0], v = x[1], z = [Math.cos(w * Qt), Math.sin(w * Qt)], ie = z[0], D = z[1], Q = [ie + q * Math.sin(w * Qt), D - q * Math.cos(w * Qt)], F = Q[0], ee = Q[1];
          S[I] = { relative: l.relative, type: se.CURVE_TO };
          var N = function(M, K) {
            var te = Fc([M * l.rX, K * l.rY], l.xRot), H = te[0], pe = te[1];
            return [l.cX + H, l.cY + pe];
          };
          h = N(L, v), S[I].x1 = h[0], S[I].y1 = h[1], m = N(F, ee), S[I].x2 = m[0], S[I].y2 = m[1], p = N(ie, D), S[I].x = p[0], S[I].y = p[1], l.relative && (S[I].x1 -= C, S[I].y1 -= B, S[I].x2 -= C, S[I].y2 -= B, S[I].x -= C, S[I].y -= B), C = (b = [S[I].x, S[I].y])[0], B = b[1];
        }
        return S;
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
      function b(ee) {
        ee > f.maxX && (f.maxX = ee), ee < f.minX && (f.minX = ee);
      }
      function y(ee) {
        ee > f.maxY && (f.maxY = ee), ee < f.minY && (f.minY = ee);
      }
      if (p.type & se.DRAWING_COMMANDS && (b(h), y(m)), p.type & se.HORIZ_LINE_TO && b(p.x), p.type & se.VERT_LINE_TO && y(p.y), p.type & se.LINE_TO && (b(p.x), y(p.y)), p.type & se.CURVE_TO) {
        b(p.x), y(p.y);
        for (var _ = 0, E = Pg(h, p.x1, p.x2, p.x); _ < E.length; _++)
          0 < (F = E[_]) && 1 > F && b(Ng(h, p.x1, p.x2, p.x, F));
        for (var S = 0, C = Pg(m, p.y1, p.y2, p.y); S < C.length; S++)
          0 < (F = C[S]) && 1 > F && y(Ng(m, p.y1, p.y2, p.y, F));
      }
      if (p.type & se.ARC) {
        b(p.x), y(p.y), ju(p, h, m);
        for (var B = p.xRot / 180 * Math.PI, I = Math.cos(B) * p.rX, O = Math.sin(B) * p.rX, w = -Math.sin(B) * p.rY, k = Math.cos(B) * p.rY, q = p.phi1 < p.phi2 ? [p.phi1, p.phi2] : -180 > p.phi2 ? [p.phi2 + 360, p.phi1 + 360] : [p.phi2, p.phi1], x = q[0], L = q[1], v = function(ee) {
          var N = ee[0], M = ee[1], K = 180 * Math.atan2(M, N) / Math.PI;
          return K < x ? K + 360 : K;
        }, z = 0, ie = Rg(w, -I, 0).map(v); z < ie.length; z++)
          (F = ie[z]) > x && F < L && b(kg(p.cX, I, w, F));
        for (var D = 0, Q = Rg(k, -O, 0).map(v); D < Q.length; D++) {
          var F;
          (F = Q[D]) > x && F < L && y(kg(p.cY, O, k, F));
        }
      }
      return d;
    });
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(We || (We = {}));
var St, k0 = function() {
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
}(), fT = function(e) {
  return e === " " || e === "	" || e === "\r" || e === `
`;
}, Mg = function(e) {
  return 48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57;
}, lT = function(e) {
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
          this.curArgs.push(l), this.curArgs.length === hT[this.curCommandType] && (se.HORIZ_LINE_TO === this.curCommandType ? a({ type: se.HORIZ_LINE_TO, relative: this.curCommandRelative, x: l }) : se.VERT_LINE_TO === this.curCommandType ? a({ type: se.VERT_LINE_TO, relative: this.curCommandRelative, y: l }) : this.curCommandType === se.MOVE_TO || this.curCommandType === se.LINE_TO || this.curCommandType === se.SMOOTH_QUAD_TO ? (a({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), se.MOVE_TO === this.curCommandType && (this.curCommandType = se.LINE_TO)) : this.curCommandType === se.CURVE_TO ? a({ type: se.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === se.SMOOTH_CURVE_TO ? a({ type: se.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.QUAD_TO ? a({ type: se.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.ARC && a({ type: se.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!fT(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
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
    return cT(r);
  }, t.parse = function(r) {
    var n = new lT(), i = [];
    return n.parse(r, i), n.finish(i), i;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(k0), hT = ((St = {})[se.MOVE_TO] = 2, St[se.LINE_TO] = 2, St[se.HORIZ_LINE_TO] = 1, St[se.VERT_LINE_TO] = 1, St[se.CLOSE_PATH] = 0, St[se.QUAD_TO] = 4, St[se.SMOOTH_QUAD_TO] = 2, St[se.CURVE_TO] = 6, St[se.SMOOTH_CURVE_TO] = 4, St[se.ARC] = 7, St), Dg = {}, zu, Fg;
function dT() {
  if (Fg) return zu;
  Fg = 1;
  var e = et(), t = Dt(), r = pa(), n = E0(), i = RegExp.prototype;
  return zu = function(a) {
    var o = a.flags;
    return o === void 0 && !("flags" in i) && !t(a, "flags") && r(i, a) ? e(n, a) : o;
  }, zu;
}
var Lg;
function pT() {
  if (Lg) return Dg;
  Lg = 1;
  var e = ba().PROPER, t = Vr(), r = ct(), n = Kt(), i = qe(), a = dT(), o = "toString", s = RegExp.prototype, u = s[o], c = i(function() {
    return u.call({ source: "a", flags: "b" }) !== "/a/b";
  }), l = e && u.name !== o;
  return (c || l) && t(s, o, function() {
    var d = r(this), h = n(d.source), m = n(a(d));
    return "/" + h + "/" + m;
  }, { unsafe: !0 }), Dg;
}
pT();
const on = Math.min, kr = Math.max, zi = Math.round, bi = Math.floor, Wt = (e) => ({
  x: e,
  y: e
}), mT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gT = {
  start: "end",
  end: "start"
};
function Lc(e, t, r) {
  return kr(e, on(t, r));
}
function ii(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jr(e) {
  return e.split("-")[0];
}
function ai(e) {
  return e.split("-")[1];
}
function P0(e) {
  return e === "x" ? "y" : "x";
}
function dl(e) {
  return e === "y" ? "height" : "width";
}
function Pr(e) {
  return ["top", "bottom"].includes(jr(e)) ? "y" : "x";
}
function pl(e) {
  return P0(Pr(e));
}
function vT(e, t, r) {
  r === void 0 && (r = !1);
  const n = ai(e), i = pl(e), a = dl(i);
  let o = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = qi(o)), [o, qi(o)];
}
function yT(e) {
  const t = qi(e);
  return [Bc(e), t, Bc(t)];
}
function Bc(e) {
  return e.replace(/start|end/g, (t) => gT[t]);
}
function bT(e, t, r) {
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
function _T(e, t, r, n) {
  const i = ai(e);
  let a = bT(jr(e), r === "start", n);
  return i && (a = a.map((o) => o + "-" + i), t && (a = a.concat(a.map(Bc)))), a;
}
function qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => mT[t]);
}
function wT(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function N0(e) {
  return typeof e != "number" ? wT(e) : {
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
  const a = Pr(t), o = pl(t), s = dl(o), u = jr(t), c = a === "y", l = n.x + n.width / 2 - i.width / 2, f = n.y + n.height / 2 - i.height / 2, d = n[s] / 2 - i[s] / 2;
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
  switch (ai(t)) {
    case "start":
      h[o] -= d * (r && c ? -1 : 1);
      break;
    case "end":
      h[o] += d * (r && c ? -1 : 1);
      break;
  }
  return h;
}
const ET = async (e, t, r) => {
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
      data: S,
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
        ...S
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
  } = ii(t, e), m = N0(h), b = s[d ? f === "floating" ? "reference" : "floating" : f], y = Ui(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: l,
    strategy: u
  })), _ = f === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(E)) ? await (a.getScale == null ? void 0 : a.getScale(E)) || {
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
    top: (y.top - C.top + m.top) / S.y,
    bottom: (C.bottom - y.bottom + m.bottom) / S.y,
    left: (y.left - C.left + m.left) / S.x,
    right: (C.right - y.right + m.right) / S.x
  };
}
const xT = (e) => ({
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
    } = ii(e, t) || {};
    if (c == null)
      return {};
    const f = N0(l), d = {
      x: r,
      y: n
    }, h = pl(i), m = dl(h), p = await o.getDimensions(c), b = h === "y", y = b ? "top" : "left", _ = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", S = a.reference[m] + a.reference[h] - d[h] - a.floating[m], C = d[h] - a.reference[h], B = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let I = B ? B[E] : 0;
    (!I || !await (o.isElement == null ? void 0 : o.isElement(B))) && (I = s.floating[E] || a.floating[m]);
    const O = S / 2 - C / 2, w = I / 2 - p[m] / 2 - 1, k = on(f[y], w), q = on(f[_], w), x = k, L = I - p[m] - q, v = I / 2 - p[m] / 2 + O, z = Lc(x, v, L), ie = !u.arrow && ai(i) != null && v !== z && a.reference[m] / 2 - (v < x ? k : q) - p[m] / 2 < 0, D = ie ? v < x ? v - x : v - L : 0;
    return {
      [h]: d[h] + D,
      data: {
        [h]: z,
        centerOffset: v - z - D,
        ...ie && {
          alignmentOffset: D
        }
      },
      reset: ie
    };
  }
}), OT = function(e) {
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
      } = ii(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const y = jr(i), _ = Pr(s), E = jr(s) === s, S = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), C = d || (E || !p ? [qi(s)] : yT(s)), B = m !== "none";
      !d && B && C.push(..._T(s, p, m, S));
      const I = [s, ...C], O = await M0(t, b), w = [];
      let k = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (l && w.push(O[y]), f) {
        const z = vT(i, o, S);
        w.push(O[z[0]], O[z[1]]);
      }
      if (k = [...k, {
        placement: i,
        overflows: w
      }], !w.every((z) => z <= 0)) {
        var q, x;
        const z = (((q = a.flip) == null ? void 0 : q.index) || 0) + 1, ie = I[z];
        if (ie) {
          var L;
          const Q = f === "alignment" ? _ !== Pr(ie) : !1, F = ((L = k[0]) == null ? void 0 : L.overflows[0]) > 0;
          if (!Q || F)
            return {
              data: {
                index: z,
                overflows: k
              },
              reset: {
                placement: ie
              }
            };
        }
        let D = (x = k.filter((Q) => Q.overflows[0] <= 0).sort((Q, F) => Q.overflows[1] - F.overflows[1])[0]) == null ? void 0 : x.placement;
        if (!D)
          switch (h) {
            case "bestFit": {
              var v;
              const Q = (v = k.filter((F) => {
                if (B) {
                  const ee = Pr(F.placement);
                  return ee === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ee === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((ee) => ee > 0).reduce((ee, N) => ee + N, 0)]).sort((F, ee) => F[1] - ee[1])[0]) == null ? void 0 : v[0];
              Q && (D = Q);
              break;
            }
            case "initialPlacement":
              D = s;
              break;
          }
        if (i !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
async function ST(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = jr(r), s = ai(r), u = Pr(r) === "y", c = ["left", "top"].includes(o) ? -1 : 1, l = a && u ? -1 : 1, f = ii(t, e);
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
const TT = function(e) {
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
      } = t, u = await ST(t, e);
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
}, CT = function(e) {
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
      } = ii(e, t), c = {
        x: r,
        y: n
      }, l = await M0(t, u), f = Pr(jr(i)), d = P0(f);
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
function Ta() {
  return typeof window < "u";
}
function mn(e) {
  return D0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
  var t;
  return (t = (D0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function D0(e) {
  return Ta() ? e instanceof Node || e instanceof vt(e).Node : !1;
}
function kt(e) {
  return Ta() ? e instanceof Element || e instanceof vt(e).Element : !1;
}
function Vt(e) {
  return Ta() ? e instanceof HTMLElement || e instanceof vt(e).HTMLElement : !1;
}
function jg(e) {
  return !Ta() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof vt(e).ShadowRoot;
}
function si(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = Pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function AT(e) {
  return ["table", "td", "th"].includes(mn(e));
}
function Ca(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ml(e) {
  const t = gl(), r = kt(e) ? Pt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function RT(e) {
  let t = xr(e);
  for (; Vt(t) && !un(t); ) {
    if (ml(t))
      return t;
    if (Ca(t))
      return null;
    t = xr(t);
  }
  return null;
}
function gl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function un(e) {
  return ["html", "body", "#document"].includes(mn(e));
}
function Pt(e) {
  return vt(e).getComputedStyle(e);
}
function Aa(e) {
  return kt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function xr(e) {
  if (mn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    jg(e) && e.host || // Fallback.
    Yt(e)
  );
  return jg(t) ? t.host : t;
}
function F0(e) {
  const t = xr(e);
  return un(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vt(t) && si(t) ? t : F0(t);
}
function Un(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = F0(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = vt(i);
  if (a) {
    const s = jc(o);
    return t.concat(o, o.visualViewport || [], si(i) ? i : [], s && r ? Un(s) : []);
  }
  return t.concat(i, Un(i, [], r));
}
function jc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function L0(e) {
  const t = Pt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Vt(e), a = i ? e.offsetWidth : r, o = i ? e.offsetHeight : n, s = zi(r) !== a || zi(n) !== o;
  return s && (r = a, n = o), {
    width: r,
    height: n,
    $: s
  };
}
function vl(e) {
  return kt(e) ? e : e.contextElement;
}
function rn(e) {
  const t = vl(e);
  if (!Vt(t))
    return Wt(1);
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
const IT = /* @__PURE__ */ Wt(0);
function B0(e) {
  const t = vt(e);
  return !gl() || !t.visualViewport ? IT : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function kT(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== vt(e) ? !1 : t;
}
function zr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = vl(e);
  let o = Wt(1);
  t && (n ? kt(n) && (o = rn(n)) : o = rn(e));
  const s = kT(a, r, n) ? B0(a) : Wt(0);
  let u = (i.left + s.x) / o.x, c = (i.top + s.y) / o.y, l = i.width / o.x, f = i.height / o.y;
  if (a) {
    const d = vt(a), h = n && kt(n) ? vt(n) : n;
    let m = d, p = jc(m);
    for (; p && n && h !== m; ) {
      const b = rn(p), y = p.getBoundingClientRect(), _ = Pt(p), E = y.left + (p.clientLeft + parseFloat(_.paddingLeft)) * b.x, S = y.top + (p.clientTop + parseFloat(_.paddingTop)) * b.y;
      u *= b.x, c *= b.y, l *= b.x, f *= b.y, u += E, c += S, m = vt(p), p = jc(m);
    }
  }
  return Ui({
    width: l,
    height: f,
    x: u,
    y: c
  });
}
function yl(e, t) {
  const r = Aa(e).scrollLeft;
  return t ? t.left + r : zr(Yt(e)).left + r;
}
function j0(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), i = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    yl(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: i,
    y: a
  };
}
function PT(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", o = Yt(n), s = t ? Ca(t.floating) : !1;
  if (n === o || s && a)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Wt(1);
  const l = Wt(0), f = Vt(n);
  if ((f || !f && !a) && ((mn(n) !== "body" || si(o)) && (u = Aa(n)), Vt(n))) {
    const h = zr(n);
    c = rn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  const d = o && !f && !a ? j0(o, u, !0) : Wt(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - u.scrollLeft * c.x + l.x + d.x,
    y: r.y * c.y - u.scrollTop * c.y + l.y + d.y
  };
}
function NT(e) {
  return Array.from(e.getClientRects());
}
function MT(e) {
  const t = Yt(e), r = Aa(e), n = e.ownerDocument.body, i = kr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = kr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + yl(e);
  const s = -r.scrollTop;
  return Pt(n).direction === "rtl" && (o += kr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  };
}
function DT(e, t) {
  const r = vt(e), n = Yt(e), i = r.visualViewport;
  let a = n.clientWidth, o = n.clientHeight, s = 0, u = 0;
  if (i) {
    a = i.width, o = i.height;
    const c = gl();
    (!c || c && t === "fixed") && (s = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s,
    y: u
  };
}
function FT(e, t) {
  const r = zr(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = Vt(e) ? rn(e) : Wt(1), o = e.clientWidth * a.x, s = e.clientHeight * a.y, u = i * a.x, c = n * a.y;
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
    n = DT(e, r);
  else if (t === "document")
    n = MT(Yt(e));
  else if (kt(t))
    n = FT(t, r);
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
  const r = xr(e);
  return r === t || !kt(r) || un(r) ? !1 : Pt(r).position === "fixed" || z0(r, t);
}
function LT(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Un(e, [], !1).filter((s) => kt(s) && mn(s) !== "body"), i = null;
  const a = Pt(e).position === "fixed";
  let o = a ? xr(e) : e;
  for (; kt(o) && !un(o); ) {
    const s = Pt(o), u = ml(o);
    !u && s.position === "fixed" && (i = null), (a ? !u && !i : !u && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || si(o) && !u && z0(e, o)) ? n = n.filter((l) => l !== o) : i = s, o = xr(o);
  }
  return t.set(e, n), n;
}
function BT(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const o = [...r === "clippingAncestors" ? Ca(t) ? [] : LT(t, this._c) : [].concat(r), n], s = o[0], u = o.reduce((c, l) => {
    const f = zg(t, l, i);
    return c.top = kr(f.top, c.top), c.right = on(f.right, c.right), c.bottom = on(f.bottom, c.bottom), c.left = kr(f.left, c.left), c;
  }, zg(t, s, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function jT(e) {
  const {
    width: t,
    height: r
  } = L0(e);
  return {
    width: t,
    height: r
  };
}
function zT(e, t, r) {
  const n = Vt(t), i = Yt(t), a = r === "fixed", o = zr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Wt(0);
  function c() {
    u.x = yl(i);
  }
  if (n || !n && !a)
    if ((mn(t) !== "body" || si(i)) && (s = Aa(t)), n) {
      const h = zr(t, !0, a, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else i && c();
  a && !n && i && c();
  const l = i && !n && !a ? j0(i, s) : Wt(0), f = o.left + s.scrollLeft - u.x - l.x, d = o.top + s.scrollTop - u.y - l.y;
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
  if (!Vt(e) || Pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Yt(e) === r && (r = r.ownerDocument.body), r;
}
function q0(e, t) {
  const r = vt(e);
  if (Ca(e))
    return r;
  if (!Vt(e)) {
    let i = xr(e);
    for (; i && !un(i); ) {
      if (kt(i) && !qu(i))
        return i;
      i = xr(i);
    }
    return r;
  }
  let n = qg(e, t);
  for (; n && AT(n) && qu(n); )
    n = qg(n, t);
  return n && un(n) && qu(n) && !ml(n) ? r : n || RT(e) || r;
}
const qT = async function(e) {
  const t = this.getOffsetParent || q0, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: zT(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function UT(e) {
  return Pt(e).direction === "rtl";
}
const $T = {
  convertOffsetParentRelativeRectToViewportRelativeRect: PT,
  getDocumentElement: Yt,
  getClippingRect: BT,
  getOffsetParent: q0,
  getElementRects: qT,
  getClientRects: NT,
  getDimensions: jT,
  getScale: rn,
  isElement: kt,
  isRTL: UT
};
function U0(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function WT(e, t) {
  let r = null, n;
  const i = Yt(e);
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
      threshold: kr(0, on(1, u)) || 1
    };
    let S = !0;
    function C(B) {
      const I = B[0].intersectionRatio;
      if (I !== u) {
        if (!S)
          return o();
        I ? o(!1, I) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      I === 1 && !U0(c, e.getBoundingClientRect()) && o(), S = !1;
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
function IC(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = vl(e), l = i || a ? [...c ? Un(c) : [], ...Un(t)] : [];
  l.forEach((y) => {
    i && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const f = c && s ? WT(c, r) : null;
  let d = -1, h = null;
  o && (h = new ResizeObserver((y) => {
    let [_] = y;
    _ && _.target === c && h && (h.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var E;
      (E = h) == null || E.observe(t);
    })), r();
  }), c && !u && h.observe(c), h.observe(t));
  let m, p = u ? zr(e) : null;
  u && b();
  function b() {
    const y = zr(e);
    p && !U0(p, y) && r(), p = y, m = requestAnimationFrame(b);
  }
  return r(), () => {
    var y;
    l.forEach((_) => {
      i && _.removeEventListener("scroll", r), a && _.removeEventListener("resize", r);
    }), f == null || f(), (y = h) == null || y.disconnect(), h = null, u && cancelAnimationFrame(m);
  };
}
const kC = TT, PC = CT, NC = OT, MC = xT, DC = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: $T,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return ET(e, t, {
    ...i,
    platform: a
  });
};
var Ti = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var GT = Ti.exports, Ug;
function VT() {
  return Ug || (Ug = 1, function(e, t) {
    ((r, n) => {
      e.exports = n();
    })(GT, function r() {
      var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, i, a = !n.document && !!n.postMessage, o = n.IS_PAPA_WORKER || !1, s = {}, u = 0, c = {};
      function l(O) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(w) {
          var k = C(w);
          k.chunkSize = parseInt(k.chunkSize), w.step || w.chunk || (k.chunkSize = null), this._handle = new p(k), (this._handle.streamer = this)._config = k;
        }).call(this, O), this.parseChunk = function(w, k) {
          var q = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < q) {
            let L = this._config.newline;
            L || (x = this._config.quoteChar || '"', L = this._handle.guessLineEndings(w, x)), w = [...w.split(L).slice(q)].join(L);
          }
          this.isFirstChunk && I(this._config.beforeFirstChunk) && (x = this._config.beforeFirstChunk(w)) !== void 0 && (w = x), this.isFirstChunk = !1, this._halted = !1;
          var q = this._partialLine + w, x = (this._partialLine = "", this._handle.parse(q, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (w = x.meta.cursor, q = (this._finished || (this._partialLine = q.substring(w - this._baseIndex), this._baseIndex = w), x && x.data && (this._rowCount += x.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), o) n.postMessage({ results: x, workerId: c.WORKER_ID, finished: q });
            else if (I(this._config.chunk) && !k) {
              if (this._config.chunk(x, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = x = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(x.data), this._completeResults.errors = this._completeResults.errors.concat(x.errors), this._completeResults.meta = x.meta), this._completed || !q || !I(this._config.complete) || x && x.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), q || x && x.meta.paused || this._nextChunk(), x;
          }
          this._halted = !0;
        }, this._sendError = function(w) {
          I(this._config.error) ? this._config.error(w) : o && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: w, finished: !1 });
        };
      }
      function f(O) {
        var w;
        (O = O || {}).chunkSize || (O.chunkSize = c.RemoteChunkSize), l.call(this, O), this._nextChunk = a ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(k) {
          this._input = k, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (w = new XMLHttpRequest(), this._config.withCredentials && (w.withCredentials = this._config.withCredentials), a || (w.onload = B(this._chunkLoaded, this), w.onerror = B(this._chunkError, this)), w.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !a), this._config.downloadRequestHeaders) {
              var k, q = this._config.downloadRequestHeaders;
              for (k in q) w.setRequestHeader(k, q[k]);
            }
            var x;
            this._config.chunkSize && (x = this._start + this._config.chunkSize - 1, w.setRequestHeader("Range", "bytes=" + this._start + "-" + x));
            try {
              w.send(this._config.downloadRequestBody);
            } catch (L) {
              this._chunkError(L.message);
            }
            a && w.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          w.readyState === 4 && (w.status < 200 || 400 <= w.status ? this._chunkError() : (this._start += this._config.chunkSize || w.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((k) => (k = k.getResponseHeader("Content-Range")) !== null ? parseInt(k.substring(k.lastIndexOf("/") + 1)) : -1)(w), this.parseChunk(w.responseText)));
        }, this._chunkError = function(k) {
          k = w.statusText || k, this._sendError(new Error(k));
        };
      }
      function d(O) {
        (O = O || {}).chunkSize || (O.chunkSize = c.LocalChunkSize), l.call(this, O);
        var w, k, q = typeof FileReader < "u";
        this.stream = function(x) {
          this._input = x, k = x.slice || x.webkitSlice || x.mozSlice, q ? ((w = new FileReader()).onload = B(this._chunkLoaded, this), w.onerror = B(this._chunkError, this)) : w = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var x = this._input, L = (this._config.chunkSize && (L = Math.min(this._start + this._config.chunkSize, this._input.size), x = k.call(x, this._start, L)), w.readAsText(x, this._config.encoding));
          q || this._chunkLoaded({ target: { result: L } });
        }, this._chunkLoaded = function(x) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(x.target.result);
        }, this._chunkError = function() {
          this._sendError(w.error);
        };
      }
      function h(O) {
        var w;
        l.call(this, O = O || {}), this.stream = function(k) {
          return w = k, this._nextChunk();
        }, this._nextChunk = function() {
          var k, q;
          if (!this._finished) return k = this._config.chunkSize, w = k ? (q = w.substring(0, k), w.substring(k)) : (q = w, ""), this._finished = !w, this.parseChunk(q);
        };
      }
      function m(O) {
        l.call(this, O = O || {});
        var w = [], k = !0, q = !1;
        this.pause = function() {
          l.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          l.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(x) {
          this._input = x, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          q && w.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), w.length ? this.parseChunk(w.shift()) : k = !0;
        }, this._streamData = B(function(x) {
          try {
            w.push(typeof x == "string" ? x : x.toString(this._config.encoding)), k && (k = !1, this._checkIsFinished(), this.parseChunk(w.shift()));
          } catch (L) {
            this._streamError(L);
          }
        }, this), this._streamError = B(function(x) {
          this._streamCleanUp(), this._sendError(x);
        }, this), this._streamEnd = B(function() {
          this._streamCleanUp(), q = !0, this._streamData("");
        }, this), this._streamCleanUp = B(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function p(O) {
        var w, k, q, x, L = Math.pow(2, 53), v = -L, z = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, ie = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, D = this, Q = 0, F = 0, ee = !1, N = !1, M = [], K = { data: [], errors: [], meta: {} };
        function te(ce) {
          return O.skipEmptyLines === "greedy" ? ce.join("").trim() === "" : ce.length === 1 && ce[0].length === 0;
        }
        function H() {
          if (K && q && (xe("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), q = !1), O.skipEmptyLines && (K.data = K.data.filter(function(fe) {
            return !te(fe);
          })), pe()) {
            let fe = function(we, Ee) {
              I(O.transformHeader) && (we = O.transformHeader(we, Ee)), M.push(we);
            };
            if (K) if (Array.isArray(K.data[0])) {
              for (var ce = 0; pe() && ce < K.data.length; ce++) K.data[ce].forEach(fe);
              K.data.splice(0, 1);
            } else K.data.forEach(fe);
          }
          function le(fe, we) {
            for (var Ee = O.header ? {} : [], g = 0; g < fe.length; g++) {
              var X = g, W = fe[g], W = ((P, T) => ((j) => (O.dynamicTypingFunction && O.dynamicTyping[j] === void 0 && (O.dynamicTyping[j] = O.dynamicTypingFunction(j)), (O.dynamicTyping[j] || O.dynamicTyping) === !0))(P) ? T === "true" || T === "TRUE" || T !== "false" && T !== "FALSE" && (((j) => {
                if (z.test(j) && (j = parseFloat(j), v < j && j < L))
                  return 1;
              })(T) ? parseFloat(T) : ie.test(T) ? new Date(T) : T === "" ? null : T) : T)(X = O.header ? g >= M.length ? "__parsed_extra" : M[g] : X, W = O.transform ? O.transform(W, X) : W);
              X === "__parsed_extra" ? (Ee[X] = Ee[X] || [], Ee[X].push(W)) : Ee[X] = W;
            }
            return O.header && (g > M.length ? xe("FieldMismatch", "TooManyFields", "Too many fields: expected " + M.length + " fields but parsed " + g, F + we) : g < M.length && xe("FieldMismatch", "TooFewFields", "Too few fields: expected " + M.length + " fields but parsed " + g, F + we)), Ee;
          }
          var ve;
          K && (O.header || O.dynamicTyping || O.transform) && (ve = 1, !K.data.length || Array.isArray(K.data[0]) ? (K.data = K.data.map(le), ve = K.data.length) : K.data = le(K.data, 0), O.header && K.meta && (K.meta.fields = M), F += ve);
        }
        function pe() {
          return O.header && M.length === 0;
        }
        function xe(ce, le, ve, fe) {
          ce = { type: ce, code: le, message: ve }, fe !== void 0 && (ce.row = fe), K.errors.push(ce);
        }
        I(O.step) && (x = O.step, O.step = function(ce) {
          K = ce, pe() ? H() : (H(), K.data.length !== 0 && (Q += ce.data.length, O.preview && Q > O.preview ? k.abort() : (K.data = K.data[0], x(K, D))));
        }), this.parse = function(ce, le, ve) {
          var fe = O.quoteChar || '"', fe = (O.newline || (O.newline = this.guessLineEndings(ce, fe)), q = !1, O.delimiter ? I(O.delimiter) && (O.delimiter = O.delimiter(ce), K.meta.delimiter = O.delimiter) : ((fe = ((we, Ee, g, X, W) => {
            var P, T, j, re;
            W = W || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ne = 0; ne < W.length; ne++) {
              for (var G, V = W[ne], J = 0, Z = 0, ae = 0, de = (j = void 0, new y({ comments: X, delimiter: V, newline: Ee, preview: 10 }).parse(we)), _e = 0; _e < de.data.length; _e++) g && te(de.data[_e]) ? ae++ : (G = de.data[_e].length, Z += G, j === void 0 ? j = G : 0 < G && (J += Math.abs(G - j), j = G));
              0 < de.data.length && (Z /= de.data.length - ae), (T === void 0 || J <= T) && (re === void 0 || re < Z) && 1.99 < Z && (T = J, P = V, re = Z);
            }
            return { successful: !!(O.delimiter = P), bestDelimiter: P };
          })(ce, O.newline, O.skipEmptyLines, O.comments, O.delimitersToGuess)).successful ? O.delimiter = fe.bestDelimiter : (q = !0, O.delimiter = c.DefaultDelimiter), K.meta.delimiter = O.delimiter), C(O));
          return O.preview && O.header && fe.preview++, w = ce, k = new y(fe), K = k.parse(w, le, ve), H(), ee ? { meta: { paused: !0 } } : K || { meta: { paused: !1 } };
        }, this.paused = function() {
          return ee;
        }, this.pause = function() {
          ee = !0, k.abort(), w = I(O.chunk) ? "" : w.substring(k.getCharIndex());
        }, this.resume = function() {
          D.streamer._halted ? (ee = !1, D.streamer.parseChunk(w, !0)) : setTimeout(D.resume, 3);
        }, this.aborted = function() {
          return N;
        }, this.abort = function() {
          N = !0, k.abort(), K.meta.aborted = !0, I(O.complete) && O.complete(K), w = "";
        }, this.guessLineEndings = function(we, fe) {
          we = we.substring(0, 1048576);
          var fe = new RegExp(b(fe) + "([^]*?)" + b(fe), "gm"), ve = (we = we.replace(fe, "")).split("\r"), fe = we.split(`
`), we = 1 < fe.length && fe[0].length < ve[0].length;
          if (ve.length === 1 || we) return `
`;
          for (var Ee = 0, g = 0; g < ve.length; g++) ve[g][0] === `
` && Ee++;
          return Ee >= ve.length / 2 ? `\r
` : "\r";
        };
      }
      function b(O) {
        return O.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function y(O) {
        var w = (O = O || {}).delimiter, k = O.newline, q = O.comments, x = O.step, L = O.preview, v = O.fastMode, z = null, ie = !1, D = O.quoteChar == null ? '"' : O.quoteChar, Q = D;
        if (O.escapeChar !== void 0 && (Q = O.escapeChar), (typeof w != "string" || -1 < c.BAD_DELIMITERS.indexOf(w)) && (w = ","), q === w) throw new Error("Comment character same as delimiter");
        q === !0 ? q = "#" : (typeof q != "string" || -1 < c.BAD_DELIMITERS.indexOf(q)) && (q = !1), k !== `
` && k !== "\r" && k !== `\r
` && (k = `
`);
        var F = 0, ee = !1;
        this.parse = function(N, M, K) {
          if (typeof N != "string") throw new Error("Input must be a string");
          var te = N.length, H = w.length, pe = k.length, xe = q.length, ce = I(x), le = [], ve = [], fe = [], we = F = 0;
          if (!N) return J();
          if (v || v !== !1 && N.indexOf(D) === -1) {
            for (var Ee = N.split(k), g = 0; g < Ee.length; g++) {
              if (fe = Ee[g], F += fe.length, g !== Ee.length - 1) F += k.length;
              else if (K) return J();
              if (!q || fe.substring(0, xe) !== q) {
                if (ce) {
                  if (le = [], re(fe.split(w)), Z(), ee) return J();
                } else re(fe.split(w));
                if (L && L <= g) return le = le.slice(0, L), J(!0);
              }
            }
            return J();
          }
          for (var X = N.indexOf(w, F), W = N.indexOf(k, F), P = new RegExp(b(Q) + b(D), "g"), T = N.indexOf(D, F); ; ) if (N[F] === D) for (T = F, F++; ; ) {
            if ((T = N.indexOf(D, T + 1)) === -1) return K || ve.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: le.length, index: F }), G();
            if (T === te - 1) return G(N.substring(F, T).replace(P, D));
            if (D === Q && N[T + 1] === Q) T++;
            else if (D === Q || T === 0 || N[T - 1] !== Q) {
              X !== -1 && X < T + 1 && (X = N.indexOf(w, T + 1));
              var j = ne((W = W !== -1 && W < T + 1 ? N.indexOf(k, T + 1) : W) === -1 ? X : Math.min(X, W));
              if (N.substr(T + 1 + j, H) === w) {
                fe.push(N.substring(F, T).replace(P, D)), N[F = T + 1 + j + H] !== D && (T = N.indexOf(D, F)), X = N.indexOf(w, F), W = N.indexOf(k, F);
                break;
              }
              if (j = ne(W), N.substring(T + 1 + j, T + 1 + j + pe) === k) {
                if (fe.push(N.substring(F, T).replace(P, D)), V(T + 1 + j + pe), X = N.indexOf(w, F), T = N.indexOf(D, F), ce && (Z(), ee)) return J();
                if (L && le.length >= L) return J(!0);
                break;
              }
              ve.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: le.length, index: F }), T++;
            }
          }
          else if (q && fe.length === 0 && N.substring(F, F + xe) === q) {
            if (W === -1) return J();
            F = W + pe, W = N.indexOf(k, F), X = N.indexOf(w, F);
          } else if (X !== -1 && (X < W || W === -1)) fe.push(N.substring(F, X)), F = X + H, X = N.indexOf(w, F);
          else {
            if (W === -1) break;
            if (fe.push(N.substring(F, W)), V(W + pe), ce && (Z(), ee)) return J();
            if (L && le.length >= L) return J(!0);
          }
          return G();
          function re(ae) {
            le.push(ae), we = F;
          }
          function ne(ae) {
            var de = 0;
            return de = ae !== -1 && (ae = N.substring(T + 1, ae)) && ae.trim() === "" ? ae.length : de;
          }
          function G(ae) {
            return K || (ae === void 0 && (ae = N.substring(F)), fe.push(ae), F = te, re(fe), ce && Z()), J();
          }
          function V(ae) {
            F = ae, re(fe), fe = [], W = N.indexOf(k, F);
          }
          function J(ae) {
            if (O.header && !M && le.length && !ie) {
              var de = le[0], _e = {}, Fe = new Set(de);
              let Ve = !1;
              for (let Pe = 0; Pe < de.length; Pe++) {
                let Le = de[Pe];
                if (_e[Le = I(O.transformHeader) ? O.transformHeader(Le, Pe) : Le]) {
                  let Ce, He = _e[Le];
                  for (; Ce = Le + "_" + He, He++, Fe.has(Ce); ) ;
                  Fe.add(Ce), de[Pe] = Ce, _e[Le]++, Ve = !0, (z = z === null ? {} : z)[Ce] = Le;
                } else _e[Le] = 1, de[Pe] = Le;
                Fe.add(Le);
              }
              Ve && console.warn("Duplicate headers found and renamed."), ie = !0;
            }
            return { data: le, errors: ve, meta: { delimiter: w, linebreak: k, aborted: ee, truncated: !!ae, cursor: we + (M || 0), renamedHeaders: z } };
          }
          function Z() {
            x(J()), le = [], ve = [];
          }
        }, this.abort = function() {
          ee = !0;
        }, this.getCharIndex = function() {
          return F;
        };
      }
      function _(O) {
        var w = O.data, k = s[w.workerId], q = !1;
        if (w.error) k.userError(w.error, w.file);
        else if (w.results && w.results.data) {
          var x = { abort: function() {
            q = !0, E(w.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: S, resume: S };
          if (I(k.userStep)) {
            for (var L = 0; L < w.results.data.length && (k.userStep({ data: w.results.data[L], errors: w.results.errors, meta: w.results.meta }, x), !q); L++) ;
            delete w.results;
          } else I(k.userChunk) && (k.userChunk(w.results, x, w.file), delete w.results);
        }
        w.finished && !q && E(w.workerId, w.results);
      }
      function E(O, w) {
        var k = s[O];
        I(k.userComplete) && k.userComplete(w), k.terminate(), delete s[O];
      }
      function S() {
        throw new Error("Not implemented.");
      }
      function C(O) {
        if (typeof O != "object" || O === null) return O;
        var w, k = Array.isArray(O) ? [] : {};
        for (w in O) k[w] = C(O[w]);
        return k;
      }
      function B(O, w) {
        return function() {
          O.apply(w, arguments);
        };
      }
      function I(O) {
        return typeof O == "function";
      }
      return c.parse = function(O, w) {
        var k = (w = w || {}).dynamicTyping || !1;
        if (I(k) && (w.dynamicTypingFunction = k, k = {}), w.dynamicTyping = k, w.transform = !!I(w.transform) && w.transform, !w.worker || !c.WORKERS_SUPPORTED) return k = null, c.NODE_STREAM_INPUT, typeof O == "string" ? (O = ((q) => q.charCodeAt(0) !== 65279 ? q : q.slice(1))(O), k = new (w.download ? f : h)(w)) : O.readable === !0 && I(O.read) && I(O.on) ? k = new m(w) : (n.File && O instanceof File || O instanceof Object) && (k = new d(w)), k.stream(O);
        (k = (() => {
          var q;
          return !!c.WORKERS_SUPPORTED && (q = (() => {
            var x = n.URL || n.webkitURL || null, L = r.toString();
            return c.BLOB_URL || (c.BLOB_URL = x.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", L, ")();"], { type: "text/javascript" })));
          })(), (q = new n.Worker(q)).onmessage = _, q.id = u++, s[q.id] = q);
        })()).userStep = w.step, k.userChunk = w.chunk, k.userComplete = w.complete, k.userError = w.error, w.step = I(w.step), w.chunk = I(w.chunk), w.complete = I(w.complete), w.error = I(w.error), delete w.worker, k.postMessage({ input: O, config: w, workerId: k.id });
      }, c.unparse = function(O, w) {
        var k = !1, q = !0, x = ",", L = `\r
`, v = '"', z = v + v, ie = !1, D = null, Q = !1, F = ((() => {
          if (typeof w == "object") {
            if (typeof w.delimiter != "string" || c.BAD_DELIMITERS.filter(function(M) {
              return w.delimiter.indexOf(M) !== -1;
            }).length || (x = w.delimiter), typeof w.quotes != "boolean" && typeof w.quotes != "function" && !Array.isArray(w.quotes) || (k = w.quotes), typeof w.skipEmptyLines != "boolean" && typeof w.skipEmptyLines != "string" || (ie = w.skipEmptyLines), typeof w.newline == "string" && (L = w.newline), typeof w.quoteChar == "string" && (v = w.quoteChar), typeof w.header == "boolean" && (q = w.header), Array.isArray(w.columns)) {
              if (w.columns.length === 0) throw new Error("Option columns is empty");
              D = w.columns;
            }
            w.escapeChar !== void 0 && (z = w.escapeChar + v), w.escapeFormulae instanceof RegExp ? Q = w.escapeFormulae : typeof w.escapeFormulae == "boolean" && w.escapeFormulae && (Q = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(b(v), "g"));
        if (typeof O == "string" && (O = JSON.parse(O)), Array.isArray(O)) {
          if (!O.length || Array.isArray(O[0])) return ee(null, O, ie);
          if (typeof O[0] == "object") return ee(D || Object.keys(O[0]), O, ie);
        } else if (typeof O == "object") return typeof O.data == "string" && (O.data = JSON.parse(O.data)), Array.isArray(O.data) && (O.fields || (O.fields = O.meta && O.meta.fields || D), O.fields || (O.fields = Array.isArray(O.data[0]) ? O.fields : typeof O.data[0] == "object" ? Object.keys(O.data[0]) : []), Array.isArray(O.data[0]) || typeof O.data[0] == "object" || (O.data = [O.data])), ee(O.fields || [], O.data || [], ie);
        throw new Error("Unable to serialize unrecognized input");
        function ee(M, K, te) {
          var H = "", pe = (typeof M == "string" && (M = JSON.parse(M)), typeof K == "string" && (K = JSON.parse(K)), Array.isArray(M) && 0 < M.length), xe = !Array.isArray(K[0]);
          if (pe && q) {
            for (var ce = 0; ce < M.length; ce++) 0 < ce && (H += x), H += N(M[ce], ce);
            0 < K.length && (H += L);
          }
          for (var le = 0; le < K.length; le++) {
            var ve = (pe ? M : K[le]).length, fe = !1, we = pe ? Object.keys(K[le]).length === 0 : K[le].length === 0;
            if (te && !pe && (fe = te === "greedy" ? K[le].join("").trim() === "" : K[le].length === 1 && K[le][0].length === 0), te === "greedy" && pe) {
              for (var Ee = [], g = 0; g < ve; g++) {
                var X = xe ? M[g] : g;
                Ee.push(K[le][X]);
              }
              fe = Ee.join("").trim() === "";
            }
            if (!fe) {
              for (var W = 0; W < ve; W++) {
                0 < W && !we && (H += x);
                var P = pe && xe ? M[W] : W;
                H += N(K[le][P], W);
              }
              le < K.length - 1 && (!te || 0 < ve && !we) && (H += L);
            }
          }
          return H;
        }
        function N(M, K) {
          var te, H;
          return M == null ? "" : M.constructor === Date ? JSON.stringify(M).slice(1, 25) : (H = !1, Q && typeof M == "string" && Q.test(M) && (M = "'" + M, H = !0), te = M.toString().replace(F, z), (H = H || k === !0 || typeof k == "function" && k(M, K) || Array.isArray(k) && k[K] || ((pe, xe) => {
            for (var ce = 0; ce < xe.length; ce++) if (-1 < pe.indexOf(xe[ce])) return !0;
            return !1;
          })(te, c.BAD_DELIMITERS) || -1 < te.indexOf(x) || te.charAt(0) === " " || te.charAt(te.length - 1) === " ") ? v + te + v : te);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !a && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = y, c.ParserHandle = p, c.NetworkStreamer = f, c.FileStreamer = d, c.StringStreamer = h, c.ReadableStreamStreamer = m, n.jQuery && ((i = n.jQuery).fn.parse = function(O) {
        var w = O.config || {}, k = [];
        return this.each(function(L) {
          if (!(i(this).prop("tagName").toUpperCase() === "INPUT" && i(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var v = 0; v < this.files.length; v++) k.push({ file: this.files[v], inputElem: this, instanceConfig: i.extend({}, w) });
        }), q(), this;
        function q() {
          if (k.length === 0) I(O.complete) && O.complete();
          else {
            var L, v, z, ie, D = k[0];
            if (I(O.before)) {
              var Q = O.before(D.file, D.inputElem);
              if (typeof Q == "object") {
                if (Q.action === "abort") return L = "AbortError", v = D.file, z = D.inputElem, ie = Q.reason, void (I(O.error) && O.error({ name: L }, v, z, ie));
                if (Q.action === "skip") return void x();
                typeof Q.config == "object" && (D.instanceConfig = i.extend(D.instanceConfig, Q.config));
              } else if (Q === "skip") return void x();
            }
            var F = D.instanceConfig.complete;
            D.instanceConfig.complete = function(ee) {
              I(F) && F(ee, D.file, D.inputElem), x();
            }, c.parse(D.file, D.instanceConfig);
          }
        }
        function x() {
          k.splice(0, 1), q();
        }
      }), o && (n.onmessage = function(O) {
        O = O.data, c.WORKER_ID === void 0 && O && (c.WORKER_ID = O.workerId), typeof O.input == "string" ? n.postMessage({ workerId: c.WORKER_ID, results: c.parse(O.input, O.config), finished: !0 }) : (n.File && O.input instanceof File || O.input instanceof Object) && (O = c.parse(O.input, O.config)) && n.postMessage({ workerId: c.WORKER_ID, results: O, finished: !0 });
      }), (f.prototype = Object.create(l.prototype)).constructor = f, (d.prototype = Object.create(l.prototype)).constructor = d, (h.prototype = Object.create(h.prototype)).constructor = h, (m.prototype = Object.create(l.prototype)).constructor = m, c;
    });
  }(Ti)), Ti.exports;
}
var HT = VT();
const FC = /* @__PURE__ */ ln(HT);
export {
  D0 as A,
  mn as B,
  DC as C,
  MC as D,
  YT as E,
  rf as F,
  cC as G,
  uC as H,
  eC as I,
  SC as J,
  sC as K,
  QT as L,
  JT as M,
  tC as N,
  fC as O,
  FC as P,
  rC as Q,
  RC as R,
  nC as S,
  iC as T,
  aC as U,
  oC as V,
  xC as W,
  TC as _,
  gC as a,
  bC as b,
  st as c,
  dC as d,
  ji as e,
  _C as f,
  hC as g,
  pC as h,
  mC as i,
  IC as j,
  PC as k,
  NC as l,
  is as m,
  se as n,
  kC as o,
  Gx as p,
  CC as q,
  AC as r,
  vC as s,
  lC as t,
  zn as u,
  yC as v,
  EC as w,
  XT as x,
  ZT as y,
  wC as z
};

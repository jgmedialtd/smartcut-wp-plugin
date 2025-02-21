var v0 = Object.defineProperty;
var y0 = (e, t, r) => t in e ? v0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var vf = (e, t, r) => y0(e, typeof t != "symbol" ? t + "" : t, r);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function b0(e, t, r) {
  return (t = w0(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function yf(e, t) {
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
    t % 2 ? yf(Object(r), !0).forEach(function(n) {
      b0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w0(e) {
  var t = _0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const bf = () => {
};
let Tc = {}, vg = {}, yg = null, bg = {
  mark: bf,
  measure: bf
};
try {
  typeof window < "u" && (Tc = window), typeof document < "u" && (vg = document), typeof MutationObserver < "u" && (yg = MutationObserver), typeof performance < "u" && (bg = performance);
} catch {
}
const {
  userAgent: _f = ""
} = Tc.navigator || {}, fr = Tc, De = vg, wf = yg, ni = bg;
fr.document;
const rr = !!De.documentElement && !!De.head && typeof De.addEventListener == "function" && typeof De.createElement == "function", _g = ~_f.indexOf("MSIE") || ~_f.indexOf("Trident/");
var x0 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, E0 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, wg = {
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
}, O0 = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, xg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], nt = "classic", Mi = "duotone", S0 = "sharp", T0 = "sharp-duotone", Eg = [nt, Mi, S0, T0], C0 = {
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
}, A0 = {
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
}, R0 = /* @__PURE__ */ new Map([["classic", {
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
}]]), I0 = {
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
}, k0 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], xf = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, N0 = ["kit"], P0 = {
  kit: {
    "fa-kit": "fak"
  }
}, M0 = ["fak", "fakd"], D0 = {
  kit: {
    fak: "fa-kit"
  }
}, Ef = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, ii = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, F0 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], L0 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], B0 = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, j0 = {
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
}, z0 = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Pu = {
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
}, q0 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Mu = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...F0, ...q0], U0 = ["solid", "regular", "light", "thin", "duotone", "brands"], Og = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], $0 = Og.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), W0 = [...Object.keys(z0), ...U0, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ii.GROUP, ii.SWAP_OPACITY, ii.PRIMARY, ii.SECONDARY].concat(Og.map((e) => "".concat(e, "x"))).concat($0.map((e) => "w-".concat(e))), G0 = {
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
const er = "___FONT_AWESOME___", Du = 16, Sg = "fa", Tg = "svg-inline--fa", Tr = "data-fa-i2svg", Fu = "data-fa-pseudo-element", V0 = "data-fa-pseudo-element-pending", Cc = "data-prefix", Ac = "data-icon", Of = "fontawesome-i2svg", H0 = "async", K0 = ["HTML", "HEAD", "STYLE", "SCRIPT"], Cg = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Dn(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[nt];
    }
  });
}
const Ag = oe({}, wg);
Ag[nt] = oe(oe(oe(oe({}, {
  "fa-duotone": "duotone"
}), wg[nt]), xf.kit), xf["kit-duotone"]);
const Y0 = Dn(Ag), Lu = oe({}, I0);
Lu[nt] = oe(oe(oe(oe({}, {
  duotone: "fad"
}), Lu[nt]), Ef.kit), Ef["kit-duotone"]);
const Sf = Dn(Lu), Bu = oe({}, Pu);
Bu[nt] = oe(oe({}, Bu[nt]), D0.kit);
const Rc = Dn(Bu), ju = oe({}, j0);
ju[nt] = oe(oe({}, ju[nt]), P0.kit);
Dn(ju);
const X0 = x0, Rg = "fa-layers-text", Z0 = E0, J0 = oe({}, C0);
Dn(J0);
const Q0 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Oa = O0, eb = [...N0, ...W0], On = fr.FontAwesomeConfig || {};
function tb(e) {
  var t = De.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function rb(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
De && typeof De.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const i = rb(tb(r));
  i != null && (On[n] = i);
});
const Ig = {
  styleDefault: "solid",
  familyDefault: nt,
  cssPrefix: Sg,
  replacementClass: Tg,
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
On.familyPrefix && (On.cssPrefix = On.familyPrefix);
const Hr = oe(oe({}, Ig), On);
Hr.autoReplaceSvg || (Hr.observeMutations = !1);
const ge = {};
Object.keys(Ig).forEach((e) => {
  Object.defineProperty(ge, e, {
    enumerable: !0,
    set: function(t) {
      Hr[e] = t, Sn.forEach((r) => r(ge));
    },
    get: function() {
      return Hr[e];
    }
  });
});
Object.defineProperty(ge, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Hr.cssPrefix = e, Sn.forEach((t) => t(ge));
  },
  get: function() {
    return Hr.cssPrefix;
  }
});
fr.FontAwesomeConfig = ge;
const Sn = [];
function nb(e) {
  return Sn.push(e), () => {
    Sn.splice(Sn.indexOf(e), 1);
  };
}
const ar = Du, zt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ib(e) {
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
const ab = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function An() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += ab[Math.random() * 62 | 0];
  return t;
}
function en(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function Ic(e) {
  return e.classList ? en(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function kg(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function sb(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(kg(e[r]), '" '), "").trim();
}
function Di(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function kc(e) {
  return e.size !== zt.size || e.x !== zt.x || e.y !== zt.y || e.rotate !== zt.rotate || e.flipX || e.flipY;
}
function ob(e) {
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
function ub(e) {
  let {
    transform: t,
    width: r = Du,
    height: n = Du,
    startCentered: i = !1
  } = e, a = "";
  return i && _g ? a += "translate(".concat(t.x / ar - r / 2, "em, ").concat(t.y / ar - n / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / ar, "em), calc(-50% + ").concat(t.y / ar, "em)) ") : a += "translate(".concat(t.x / ar, "em, ").concat(t.y / ar, "em) "), a += "scale(".concat(t.size / ar * (t.flipX ? -1 : 1), ", ").concat(t.size / ar * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var cb = `:root, :host {
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
function Ng() {
  const e = Sg, t = Tg, r = ge.cssPrefix, n = ge.replacementClass;
  let i = cb;
  if (r !== e || n !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
let Tf = !1;
function Sa() {
  ge.autoAddCss && !Tf && (ib(Ng()), Tf = !0);
}
var lb = {
  mixout() {
    return {
      dom: {
        css: Ng,
        insertCss: Sa
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Sa();
      },
      beforeI2svg() {
        Sa();
      }
    };
  }
};
const tr = fr || {};
tr[er] || (tr[er] = {});
tr[er].styles || (tr[er].styles = {});
tr[er].hooks || (tr[er].hooks = {});
tr[er].shims || (tr[er].shims = []);
var qt = tr[er];
const Pg = [], Mg = function() {
  De.removeEventListener("DOMContentLoaded", Mg), _i = 1, Pg.map((e) => e());
};
let _i = !1;
rr && (_i = (De.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(De.readyState), _i || De.addEventListener("DOMContentLoaded", Mg));
function fb(e) {
  rr && (_i ? setTimeout(e, 0) : Pg.push(e));
}
function Fn(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? kg(e) : "<".concat(t, " ").concat(sb(r), ">").concat(n.map(Fn).join(""), "</").concat(t, ">");
}
function Cf(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Ta = function(t, r, n, i) {
  var a = Object.keys(t), o = a.length, s = r, u, c, f;
  for (n === void 0 ? (u = 1, f = t[a[0]]) : (u = 0, f = n); u < o; u++)
    c = a[u], f = s(f, t[c], c, t);
  return f;
};
function hb(e) {
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
function zu(e) {
  const t = hb(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function db(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), i;
  return n >= 55296 && n <= 56319 && r > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function Af(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function qu(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = Af(t);
  typeof qt.hooks.addPack == "function" && !n ? qt.hooks.addPack(e, Af(t)) : qt.styles[e] = oe(oe({}, qt.styles[e] || {}), i), e === "fas" && qu("fa", t);
}
const {
  styles: Rn,
  shims: pb
} = qt, Dg = Object.keys(Rc), mb = Dg.reduce((e, t) => (e[t] = Object.keys(Rc[t]), e), {});
let Nc = null, Fg = {}, Lg = {}, Bg = {}, jg = {}, zg = {};
function gb(e) {
  return ~eb.indexOf(e);
}
function vb(e, t) {
  const r = t.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === e && i !== "" && !gb(i) ? i : null;
}
const qg = () => {
  const e = (n) => Ta(Rn, (i, a, o) => (i[o] = Ta(a, n, {}), i), {});
  Fg = e((n, i, a) => (i[3] && (n[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    n[s.toString(16)] = a;
  }), n)), Lg = e((n, i, a) => (n[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    n[s] = a;
  }), n)), zg = e((n, i, a) => {
    const o = i[2];
    return n[a] = a, o.forEach((s) => {
      n[s] = a;
    }), n;
  });
  const t = "far" in Rn || ge.autoFetchSvg, r = Ta(pb, (n, i) => {
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
  Bg = r.names, jg = r.unicodes, Nc = Fi(ge.styleDefault, {
    family: ge.familyDefault
  });
};
nb((e) => {
  Nc = Fi(e.styleDefault, {
    family: ge.familyDefault
  });
});
qg();
function Pc(e, t) {
  return (Fg[e] || {})[t];
}
function yb(e, t) {
  return (Lg[e] || {})[t];
}
function wr(e, t) {
  return (zg[e] || {})[t];
}
function Ug(e) {
  return Bg[e] || {
    prefix: null,
    iconName: null
  };
}
function bb(e) {
  const t = jg[e], r = Pc("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function hr() {
  return Nc;
}
const $g = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function _b(e) {
  let t = nt;
  const r = Dg.reduce((n, i) => (n[i] = "".concat(ge.cssPrefix, "-").concat(i), n), {});
  return Eg.forEach((n) => {
    (e.includes(r[n]) || e.some((i) => mb[n].includes(i))) && (t = n);
  }), t;
}
function Fi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = nt
  } = t, n = Y0[r][e];
  if (r === Mi && !e)
    return "fad";
  const i = Sf[r][e] || Sf[r][n], a = e in qt.styles ? e : null;
  return i || a || null;
}
function wb(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const i = vb(ge.cssPrefix, n);
    i ? r = i : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function Rf(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function Li(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const i = Mu.concat(L0), a = Rf(e.filter((l) => i.includes(l))), o = Rf(e.filter((l) => !Mu.includes(l))), s = a.filter((l) => (n = l, !xg.includes(l))), [u = null] = s, c = _b(a), f = oe(oe({}, wb(o)), {}, {
    prefix: Fi(u, {
      family: c
    })
  });
  return oe(oe(oe({}, f), Sb({
    values: e,
    family: c,
    styles: Rn,
    config: ge,
    canonical: f,
    givenPrefix: n
  })), xb(r, n, f));
}
function xb(e, t, r) {
  let {
    prefix: n,
    iconName: i
  } = r;
  if (e || !n || !i)
    return {
      prefix: n,
      iconName: i
    };
  const a = t === "fa" ? Ug(i) : {}, o = wr(n, i);
  return i = a.iconName || o || i, n = a.prefix || n, n === "far" && !Rn.far && Rn.fas && !ge.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const Eb = Eg.filter((e) => e !== nt || e !== Mi), Ob = Object.keys(Pu).filter((e) => e !== nt).map((e) => Object.keys(Pu[e])).flat();
function Sb(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = r === Mi, u = t.includes("fa-duotone") || t.includes("fad"), c = o.familyDefault === "duotone", f = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!s && (u || c || f) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Eb.includes(r) && (Object.keys(a).find((d) => Ob.includes(d)) || o.autoFetchSvg)) {
    const d = R0.get(r).defaultShortPrefixId;
    n.prefix = d, n.iconName = wr(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = hr() || "fas"), n;
}
class Tb {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const i = r.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = oe(oe({}, this.definitions[a] || {}), i[a]), qu(a, i[a]);
      const o = Rc[nt][a];
      o && qu(o, i[a]), qg();
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
let If = [], $r = {};
const Gr = {}, Cb = Object.keys(Gr);
function Ab(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return If = e, $r = {}, Object.keys(Gr).forEach((n) => {
    Cb.indexOf(n) === -1 && delete Gr[n];
  }), If.forEach((n) => {
    const i = n.mixout ? n.mixout() : {};
    if (Object.keys(i).forEach((a) => {
      typeof i[a] == "function" && (r[a] = i[a]), typeof i[a] == "object" && Object.keys(i[a]).forEach((o) => {
        r[a] || (r[a] = {}), r[a][o] = i[a][o];
      });
    }), n.hooks) {
      const a = n.hooks();
      Object.keys(a).forEach((o) => {
        $r[o] || ($r[o] = []), $r[o].push(a[o]);
      });
    }
    n.provides && n.provides(Gr);
  }), r;
}
function Uu(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  return ($r[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...n]);
  }), t;
}
function Cr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  ($r[e] || []).forEach((a) => {
    a.apply(null, r);
  });
}
function dr() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Gr[e] ? Gr[e].apply(null, t) : void 0;
}
function $u(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || hr();
  if (t)
    return t = wr(r, t) || t, Cf(Wg.definitions, r, t) || Cf(qt.styles, r, t);
}
const Wg = new Tb(), Rb = () => {
  ge.autoReplaceSvg = !1, ge.observeMutations = !1, Cr("noAuto");
}, Ib = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return rr ? (Cr("beforeI2svg", e), dr("pseudoElements2svg", e), dr("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ge.autoReplaceSvg === !1 && (ge.autoReplaceSvg = !0), ge.observeMutations = !0, fb(() => {
      Nb({
        autoReplaceSvgRoot: t
      }), Cr("watch", e);
    });
  }
}, kb = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: wr(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Fi(e[0]);
      return {
        prefix: r,
        iconName: wr(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ge.cssPrefix, "-")) > -1 || e.match(X0))) {
      const t = Li(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || hr(),
        iconName: wr(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = hr();
      return {
        prefix: t,
        iconName: wr(t, e) || e
      };
    }
  }
}, vt = {
  noAuto: Rb,
  config: ge,
  dom: Ib,
  parse: kb,
  library: Wg,
  findIconDefinition: $u,
  toHtml: Fn
}, Nb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = De
  } = e;
  (Object.keys(qt.styles).length > 0 || ge.autoFetchSvg) && rr && ge.autoReplaceSvg && vt.dom.i2svg({
    node: t
  });
};
function Bi(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => Fn(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!rr) return;
      const r = De.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function Pb(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (kc(o) && r.found && !n.found) {
    const {
      width: s,
      height: u
    } = r, c = {
      x: s / u / 2,
      y: 0.5
    };
    i.style = Di(oe(oe({}, a), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function Mb(e) {
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
function Mc(e) {
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
    extra: f,
    watchable: l = !1
  } = e, {
    width: d,
    height: h
  } = r.found ? r : t, m = M0.includes(n), p = [ge.replacementClass, i ? "".concat(ge.cssPrefix, "-").concat(i) : ""].filter((C) => f.classes.indexOf(C) === -1).filter((C) => C !== "" || !!C).concat(f.classes).join(" ");
  let b = {
    children: [],
    attributes: oe(oe({}, f.attributes), {}, {
      "data-prefix": n,
      "data-icon": i,
      class: p,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(d, " ").concat(h)
    })
  };
  const y = m && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(d / h * 16 * 0.0625, "em")
  } : {};
  l && (b.attributes[Tr] = ""), s && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(c || An())
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
    styles: oe(oe({}, y), f.styles)
  }), {
    children: x,
    attributes: S
  } = r.found && t.found ? dr("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : dr("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = x, _.attributes = S, o ? Mb(_) : Pb(_);
}
function kf(e) {
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
  s && (u[Tr] = "");
  const c = oe({}, o.styles);
  kc(i) && (c.transform = ub({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  const f = Di(c);
  f.length > 0 && (u.style = f);
  const l = [];
  return l.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), a && l.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), l;
}
function Db(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, i = oe(oe(oe({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), a = Di(n.styles);
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
  styles: Ca
} = qt;
function Wu(e) {
  const t = e[0], r = e[1], [n] = e.slice(4);
  let i = null;
  return Array.isArray(n) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(ge.cssPrefix, "-").concat(Oa.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ge.cssPrefix, "-").concat(Oa.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ge.cssPrefix, "-").concat(Oa.PRIMARY),
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
const Fb = {
  found: !1,
  width: 512,
  height: 512
};
function Lb(e, t) {
  !Cg && !ge.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Gu(e, t) {
  let r = t;
  return t === "fa" && ge.styleDefault !== null && (t = hr()), new Promise((n, i) => {
    if (r === "fa") {
      const a = Ug(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Ca[t] && Ca[t][e]) {
      const a = Ca[t][e];
      return n(Wu(a));
    }
    Lb(e, t), n(oe(oe({}, Fb), {}, {
      icon: ge.showMissingIcons && e ? dr("missingIconAbstract") || {} : {}
    }));
  });
}
const Nf = () => {
}, Vu = ge.measurePerformance && ni && ni.mark && ni.measure ? ni : {
  mark: Nf,
  measure: Nf
}, wn = 'FA "6.7.2"', Bb = (e) => (Vu.mark("".concat(wn, " ").concat(e, " begins")), () => Gg(e)), Gg = (e) => {
  Vu.mark("".concat(wn, " ").concat(e, " ends")), Vu.measure("".concat(wn, " ").concat(e), "".concat(wn, " ").concat(e, " begins"), "".concat(wn, " ").concat(e, " ends"));
};
var Dc = {
  begin: Bb,
  end: Gg
};
const di = () => {
};
function Pf(e) {
  return typeof (e.getAttribute ? e.getAttribute(Tr) : null) == "string";
}
function jb(e) {
  const t = e.getAttribute ? e.getAttribute(Cc) : null, r = e.getAttribute ? e.getAttribute(Ac) : null;
  return t && r;
}
function zb(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ge.replacementClass);
}
function qb() {
  return ge.autoReplaceSvg === !0 ? pi.replace : pi[ge.autoReplaceSvg] || pi.replace;
}
function Ub(e) {
  return De.createElementNS("http://www.w3.org/2000/svg", e);
}
function $b(e) {
  return De.createElement(e);
}
function Vg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? Ub : $b
  } = t;
  if (typeof e == "string")
    return De.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    n.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    n.appendChild(Vg(a, {
      ceFn: r
    }));
  }), n;
}
function Wb(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const pi = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(Vg(r), t);
      }), t.getAttribute(Tr) === null && ge.keepOriginalSource) {
        let r = De.createComment(Wb(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~Ic(t).indexOf(ge.replacementClass))
      return pi.replace(e);
    const n = new RegExp("".concat(ge.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const a = r[0].attributes.class.split(" ").reduce((o, s) => (s === ge.replacementClass || s.match(n) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = r.map((a) => Fn(a)).join(`
`);
    t.setAttribute(Tr, ""), t.innerHTML = i;
  }
};
function Mf(e) {
  e();
}
function Hg(e, t) {
  const r = typeof t == "function" ? t : di;
  if (e.length === 0)
    r();
  else {
    let n = Mf;
    ge.mutateApproach === H0 && (n = fr.requestAnimationFrame || Mf), n(() => {
      const i = qb(), a = Dc.begin("mutate");
      e.map(i), a(), r();
    });
  }
}
let Fc = !1;
function Kg() {
  Fc = !0;
}
function Hu() {
  Fc = !1;
}
let wi = null;
function Df(e) {
  if (!wf || !ge.observeMutations)
    return;
  const {
    treeCallback: t = di,
    nodeCallback: r = di,
    pseudoElementsCallback: n = di,
    observeMutationsRoot: i = De
  } = e;
  wi = new wf((a) => {
    if (Fc) return;
    const o = hr();
    en(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Pf(s.addedNodes[0]) && (ge.searchPseudoElements && n(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && ge.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && Pf(s.target) && ~Q0.indexOf(s.attributeName))
        if (s.attributeName === "class" && jb(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = Li(Ic(s.target));
          s.target.setAttribute(Cc, u || o), c && s.target.setAttribute(Ac, c);
        } else zb(s.target) && r(s.target);
    });
  }), rr && wi.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Gb() {
  wi && wi.disconnect();
}
function Vb(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function Hb(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = Li(Ic(e));
  return i.prefix || (i.prefix = hr()), t && r && (i.prefix = t, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = yb(i.prefix, e.innerText) || Pc(i.prefix, zu(e.innerText))), !i.iconName && ge.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function Kb(e) {
  const t = en(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return ge.autoA11y && (r ? t["aria-labelledby"] = "".concat(ge.replacementClass, "-title-").concat(n || An()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Yb() {
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
function Ff(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = Hb(e), a = Kb(e), o = Uu("parseNodeAttributes", {}, e);
  let s = t.styleParser ? Vb(e) : [];
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
  styles: Xb
} = qt;
function Yg(e) {
  const t = ge.autoReplaceSvg === "nest" ? Ff(e, {
    styleParser: !1
  }) : Ff(e);
  return ~t.extra.classes.indexOf(Rg) ? dr("generateLayersText", e, t) : dr("generateSvgReplacementMutation", e, t);
}
function Zb() {
  return [...k0, ...Mu];
}
function Lf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!rr) return Promise.resolve();
  const r = De.documentElement.classList, n = (f) => r.add("".concat(Of, "-").concat(f)), i = (f) => r.remove("".concat(Of, "-").concat(f)), a = ge.autoFetchSvg ? Zb() : xg.concat(Object.keys(Xb));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Rg, ":not([").concat(Tr, "])")].concat(a.map((f) => ".".concat(f, ":not([").concat(Tr, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = en(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  const u = Dc.begin("onTree"), c = s.reduce((f, l) => {
    try {
      const d = Yg(l);
      d && f.push(d);
    } catch (d) {
      Cg || d.name === "MissingIcon" && console.error(d);
    }
    return f;
  }, []);
  return new Promise((f, l) => {
    Promise.all(c).then((d) => {
      Hg(d, () => {
        n("active"), n("complete"), i("pending"), typeof t == "function" && t(), u(), f();
      });
    }).catch((d) => {
      u(), l(d);
    });
  });
}
function Jb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Yg(e).then((r) => {
    r && Hg([r], t);
  });
}
function Qb(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : $u(t || {});
    let {
      mask: i
    } = r;
    return i && (i = (i || {}).icon ? i : $u(i || {})), e(n, oe(oe({}, r), {}, {
      mask: i
    }));
  };
}
const e1 = function(e) {
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
    styles: f = {}
  } = t;
  if (!e) return;
  const {
    prefix: l,
    iconName: d,
    icon: h
  } = e;
  return Bi(oe({
    type: "icon"
  }, e), () => (Cr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ge.autoA11y && (o ? c["aria-labelledby"] = "".concat(ge.replacementClass, "-title-").concat(s || An()) : (c["aria-hidden"] = "true", c.focusable = "false")), Mc({
    icons: {
      main: Wu(h),
      mask: i ? Wu(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: l,
    iconName: d,
    transform: oe(oe({}, zt), r),
    symbol: n,
    title: o,
    maskId: a,
    titleId: s,
    extra: {
      attributes: c,
      styles: f,
      classes: u
    }
  })));
};
var t1 = {
  mixout() {
    return {
      icon: Qb(e1)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Lf, e.nodeCallback = Jb, e;
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
      return Lf(r, n);
    }, e.generateSvgReplacementMutation = function(t, r) {
      const {
        iconName: n,
        title: i,
        titleId: a,
        prefix: o,
        transform: s,
        symbol: u,
        mask: c,
        maskId: f,
        extra: l
      } = r;
      return new Promise((d, h) => {
        Promise.all([Gu(n, o), c.iconName ? Gu(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [p, b] = m;
          d([t, Mc({
            icons: {
              main: p,
              mask: b
            },
            prefix: o,
            iconName: n,
            transform: s,
            symbol: u,
            maskId: f,
            title: i,
            titleId: a,
            extra: l,
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
      const s = Di(o);
      s.length > 0 && (n.style = s);
      let u;
      return kc(a) && (u = dr("generateAbstractTransformGrouping", {
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
}, r1 = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = t;
        return Bi({
          type: "layer"
        }, () => {
          Cr("beforeDOMElementCreation", {
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
}, n1 = {
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
        return Bi({
          type: "counter",
          content: e
        }, () => (Cr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Db({
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
}, i1 = {
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
        return Bi({
          type: "text",
          content: e
        }, () => (Cr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), kf({
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
      if (_g) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / u, s = c.height / u;
      }
      return ge.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, kf({
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
const a1 = new RegExp('"', "ug"), Bf = [1105920, 1112319], jf = oe(oe(oe(oe({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), A0), G0), B0), Ku = Object.keys(jf).reduce((e, t) => (e[t.toLowerCase()] = jf[t], e), {}), s1 = Object.keys(Ku).reduce((e, t) => {
  const r = Ku[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function o1(e) {
  const t = e.replace(a1, ""), r = db(t, 0), n = r >= Bf[0] && r <= Bf[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: zu(i ? t[0] : t),
    isSecondary: n || i
  };
}
function u1(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), i = isNaN(n) ? "normal" : n;
  return (Ku[r] || {})[i] || s1[r];
}
function zf(e, t) {
  const r = "".concat(V0).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null)
      return n();
    const o = en(e.children).filter((d) => d.getAttribute(Fu) === t)[0], s = fr.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), c = u.match(Z0), f = s.getPropertyValue("font-weight"), l = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), n();
    if (c && l !== "none" && l !== "") {
      const d = s.getPropertyValue("content");
      let h = u1(u, f);
      const {
        value: m,
        isSecondary: p
      } = o1(d), b = c[0].startsWith("FontAwesome");
      let y = Pc(h, m), _ = y;
      if (b) {
        const x = bb(m);
        x.iconName && x.prefix && (y = x.iconName, h = x.prefix);
      }
      if (y && !p && (!o || o.getAttribute(Cc) !== h || o.getAttribute(Ac) !== _)) {
        e.setAttribute(r, _), o && e.removeChild(o);
        const x = Yb(), {
          extra: S
        } = x;
        S.attributes[Fu] = t, Gu(y, h).then((C) => {
          const B = Mc(oe(oe({}, x), {}, {
            icons: {
              main: C,
              mask: $g()
            },
            prefix: h,
            iconName: _,
            extra: S,
            watchable: !0
          })), A = De.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(A, e.firstChild) : e.appendChild(A), A.outerHTML = B.map((O) => Fn(O)).join(`
`), e.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function c1(e) {
  return Promise.all([zf(e, "::before"), zf(e, "::after")]);
}
function l1(e) {
  return e.parentNode !== document.head && !~K0.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Fu) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function qf(e) {
  if (rr)
    return new Promise((t, r) => {
      const n = en(e.querySelectorAll("*")).filter(l1).map(c1), i = Dc.begin("searchPseudoElements");
      Kg(), Promise.all(n).then(() => {
        i(), Hu(), t();
      }).catch(() => {
        i(), Hu(), r();
      });
    });
}
var f1 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = qf, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = De
      } = t;
      ge.searchPseudoElements && qf(r);
    };
  }
};
let Uf = !1;
var h1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Kg(), Uf = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Df(Uu("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Gb();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Uf ? Hu() : Df(Uu("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const $f = (e) => {
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
var d1 = {
  mixout() {
    return {
      parse: {
        transform: (e) => $f(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = $f(r)), e;
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
      }, s = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), u = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), c = "rotate(".concat(n.rotate, " 0 0)"), f = {
        transform: "".concat(s, " ").concat(u, " ").concat(c)
      }, l = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, d = {
        outer: o,
        inner: f,
        path: l
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
const Aa = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Wf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function p1(e) {
  return e.tag === "g" ? e.children : [e];
}
var m1 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? Li(r.split(" ").map((i) => i.trim())) : $g();
        return n.prefix || (n.prefix = hr()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        width: f,
        icon: l
      } = a, d = ob({
        transform: s,
        containerWidth: f,
        iconWidth: u
      }), h = {
        tag: "rect",
        attributes: oe(oe({}, Aa), {}, {
          fill: "white"
        })
      }, m = c.children ? {
        children: c.children.map(Wf)
      } : {}, p = {
        tag: "g",
        attributes: oe({}, d.inner),
        children: [Wf(oe({
          tag: c.tag,
          attributes: oe(oe({}, c.attributes), d.path)
        }, m))]
      }, b = {
        tag: "g",
        attributes: oe({}, d.outer),
        children: [p]
      }, y = "mask-".concat(o || An()), _ = "clip-".concat(o || An()), x = {
        tag: "mask",
        attributes: oe(oe({}, Aa), {}, {
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
          children: p1(l)
        }, x]
      };
      return r.push(S, {
        tag: "rect",
        attributes: oe({
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(y, ")")
        }, Aa)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, g1 = {
  provides(e) {
    let t = !1;
    fr.matchMedia && (t = fr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, v1 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, y1 = [lb, t1, r1, n1, i1, f1, h1, d1, m1, g1, v1];
Ab(y1, {
  mixoutsTo: vt
});
vt.noAuto;
vt.config;
const wS = vt.library;
vt.dom;
const xS = vt.parse;
vt.findIconDefinition;
vt.toHtml;
const ES = vt.icon;
vt.layer;
vt.text;
vt.counter;
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const OS = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, SS = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, TS = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, CS = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
};
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const AS = {
  prefix: "fass",
  iconName: "spray-can",
  icon: [512, 512, [], "f5bd", "M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, RS = {
  prefix: "fass",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, IS = {
  prefix: "fass",
  iconName: "files",
  icon: [448, 512, [], "e178", "M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z"]
}, kS = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, NS = {
  prefix: "fass",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M288 32l0-32L224 0l0 32 0 192L32 224 0 224l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-192 192 0 32 0 0-64-32 0-192 0 0-192z"]
}, PS = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, MS = {
  prefix: "fass",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32L0 32 0 64l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 32zM64 352l0-32L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 32l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM448 352l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z"]
}, DS = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, FS = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
var Xg = typeof global == "object" && global && global.Object === Object && global, b1 = typeof self == "object" && self && self.Object === Object && self, ji = Xg || b1 || Function("return this")(), Kr = ji.Symbol, Zg = Object.prototype, _1 = Zg.hasOwnProperty, w1 = Zg.toString, ln = Kr ? Kr.toStringTag : void 0;
function x1(e) {
  var t = _1.call(e, ln), r = e[ln];
  try {
    e[ln] = void 0;
    var n = !0;
  } catch {
  }
  var i = w1.call(e);
  return n && (t ? e[ln] = r : delete e[ln]), i;
}
var E1 = Object.prototype, O1 = E1.toString;
function S1(e) {
  return O1.call(e);
}
var T1 = "[object Null]", C1 = "[object Undefined]", Gf = Kr ? Kr.toStringTag : void 0;
function Ln(e) {
  return e == null ? e === void 0 ? C1 : T1 : Gf && Gf in Object(e) ? x1(e) : S1(e);
}
function Bn(e) {
  return e != null && typeof e == "object";
}
var A1 = "[object Symbol]";
function zi(e) {
  return typeof e == "symbol" || Bn(e) && Ln(e) == A1;
}
function R1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var jn = Array.isArray, Vf = Kr ? Kr.prototype : void 0, Hf = Vf ? Vf.toString : void 0;
function Jg(e) {
  if (typeof e == "string")
    return e;
  if (jn(e))
    return R1(e, Jg) + "";
  if (zi(e))
    return Hf ? Hf.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var I1 = /\s/;
function k1(e) {
  for (var t = e.length; t-- && I1.test(e.charAt(t)); )
    ;
  return t;
}
var N1 = /^\s+/;
function P1(e) {
  return e && e.slice(0, k1(e) + 1).replace(N1, "");
}
function pr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Kf = NaN, M1 = /^[-+]0x[0-9a-f]+$/i, D1 = /^0b[01]+$/i, F1 = /^0o[0-7]+$/i, L1 = parseInt;
function LS(e) {
  if (typeof e == "number")
    return e;
  if (zi(e))
    return Kf;
  if (pr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = pr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = P1(e);
  var r = D1.test(e);
  return r || F1.test(e) ? L1(e.slice(2), r ? 2 : 8) : M1.test(e) ? Kf : +e;
}
function Qg(e) {
  return e;
}
var B1 = "[object AsyncFunction]", j1 = "[object Function]", z1 = "[object GeneratorFunction]", q1 = "[object Proxy]";
function ev(e) {
  if (!pr(e))
    return !1;
  var t = Ln(e);
  return t == j1 || t == z1 || t == B1 || t == q1;
}
var Ra = ji["__core-js_shared__"], Yf = function() {
  var e = /[^.]+$/.exec(Ra && Ra.keys && Ra.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function U1(e) {
  return !!Yf && Yf in e;
}
var $1 = Function.prototype, W1 = $1.toString;
function G1(e) {
  if (e != null) {
    try {
      return W1.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var V1 = /[\\^$.*+?()[\]{}|]/g, H1 = /^\[object .+?Constructor\]$/, K1 = Function.prototype, Y1 = Object.prototype, X1 = K1.toString, Z1 = Y1.hasOwnProperty, J1 = RegExp(
  "^" + X1.call(Z1).replace(V1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Q1(e) {
  if (!pr(e) || U1(e))
    return !1;
  var t = ev(e) ? J1 : H1;
  return t.test(G1(e));
}
function e_(e, t) {
  return e == null ? void 0 : e[t];
}
function Lc(e, t) {
  var r = e_(e, t);
  return Q1(r) ? r : void 0;
}
function t_(e, t, r) {
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
var r_ = 800, n_ = 16, i_ = Date.now;
function a_(e) {
  var t = 0, r = 0;
  return function() {
    var n = i_(), i = n_ - (n - r);
    if (r = n, i > 0) {
      if (++t >= r_)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function s_(e) {
  return function() {
    return e;
  };
}
var xi = function() {
  try {
    var e = Lc(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), o_ = xi ? function(e, t) {
  return xi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: s_(t),
    writable: !0
  });
} : Qg, u_ = a_(o_), c_ = 9007199254740991, l_ = /^(?:0|[1-9]\d*)$/;
function qi(e, t) {
  var r = typeof e;
  return t = t ?? c_, !!t && (r == "number" || r != "symbol" && l_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function f_(e, t, r) {
  t == "__proto__" && xi ? xi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Ui(e, t) {
  return e === t || e !== e && t !== t;
}
var h_ = Object.prototype, d_ = h_.hasOwnProperty;
function p_(e, t, r) {
  var n = e[t];
  (!(d_.call(e, t) && Ui(n, r)) || r === void 0 && !(t in e)) && f_(e, t, r);
}
var Xf = Math.max;
function m_(e, t, r) {
  return t = Xf(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Xf(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), t_(e, this, s);
  };
}
function g_(e, t) {
  return u_(m_(e, t, Qg), e + "");
}
var v_ = 9007199254740991;
function Bc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= v_;
}
function tv(e) {
  return e != null && Bc(e.length) && !ev(e);
}
function y_(e, t, r) {
  if (!pr(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? tv(r) && qi(t, r.length) : n == "string" && t in r) ? Ui(r[t], e) : !1;
}
var b_ = Object.prototype;
function __(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || b_;
  return e === r;
}
function w_(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var x_ = "[object Arguments]";
function Zf(e) {
  return Bn(e) && Ln(e) == x_;
}
var rv = Object.prototype, E_ = rv.hasOwnProperty, O_ = rv.propertyIsEnumerable, nv = Zf(/* @__PURE__ */ function() {
  return arguments;
}()) ? Zf : function(e) {
  return Bn(e) && E_.call(e, "callee") && !O_.call(e, "callee");
};
function S_() {
  return !1;
}
var iv = typeof exports == "object" && exports && !exports.nodeType && exports, Jf = iv && typeof module == "object" && module && !module.nodeType && module, T_ = Jf && Jf.exports === iv, Qf = T_ ? ji.Buffer : void 0, C_ = Qf ? Qf.isBuffer : void 0, A_ = C_ || S_, R_ = "[object Arguments]", I_ = "[object Array]", k_ = "[object Boolean]", N_ = "[object Date]", P_ = "[object Error]", M_ = "[object Function]", D_ = "[object Map]", F_ = "[object Number]", L_ = "[object Object]", B_ = "[object RegExp]", j_ = "[object Set]", z_ = "[object String]", q_ = "[object WeakMap]", U_ = "[object ArrayBuffer]", $_ = "[object DataView]", W_ = "[object Float32Array]", G_ = "[object Float64Array]", V_ = "[object Int8Array]", H_ = "[object Int16Array]", K_ = "[object Int32Array]", Y_ = "[object Uint8Array]", X_ = "[object Uint8ClampedArray]", Z_ = "[object Uint16Array]", J_ = "[object Uint32Array]", Pe = {};
Pe[W_] = Pe[G_] = Pe[V_] = Pe[H_] = Pe[K_] = Pe[Y_] = Pe[X_] = Pe[Z_] = Pe[J_] = !0;
Pe[R_] = Pe[I_] = Pe[U_] = Pe[k_] = Pe[$_] = Pe[N_] = Pe[P_] = Pe[M_] = Pe[D_] = Pe[F_] = Pe[L_] = Pe[B_] = Pe[j_] = Pe[z_] = Pe[q_] = !1;
function Q_(e) {
  return Bn(e) && Bc(e.length) && !!Pe[Ln(e)];
}
function ew(e) {
  return function(t) {
    return e(t);
  };
}
var av = typeof exports == "object" && exports && !exports.nodeType && exports, Tn = av && typeof module == "object" && module && !module.nodeType && module, tw = Tn && Tn.exports === av, Ia = tw && Xg.process, eh = function() {
  try {
    var e = Tn && Tn.require && Tn.require("util").types;
    return e || Ia && Ia.binding && Ia.binding("util");
  } catch {
  }
}(), th = eh && eh.isTypedArray, rw = th ? ew(th) : Q_;
function nw(e, t) {
  var r = jn(e), n = !r && nv(e), i = !r && !n && A_(e), a = !r && !n && !i && rw(e), o = r || n || i || a, s = o ? w_(e.length, String) : [], u = s.length;
  for (var c in e)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    qi(c, u)) || s.push(c);
  return s;
}
function iw(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var aw = Object.prototype, sw = aw.hasOwnProperty;
function ow(e) {
  if (!pr(e))
    return iw(e);
  var t = __(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !sw.call(e, n)) || r.push(n);
  return r;
}
function uw(e) {
  return tv(e) ? nw(e) : ow(e);
}
var cw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lw = /^\w*$/;
function fw(e, t) {
  if (jn(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || zi(e) ? !0 : lw.test(e) || !cw.test(e) || t != null && e in Object(t);
}
var In = Lc(Object, "create");
function hw() {
  this.__data__ = In ? In(null) : {}, this.size = 0;
}
function dw(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var pw = "__lodash_hash_undefined__", mw = Object.prototype, gw = mw.hasOwnProperty;
function vw(e) {
  var t = this.__data__;
  if (In) {
    var r = t[e];
    return r === pw ? void 0 : r;
  }
  return gw.call(t, e) ? t[e] : void 0;
}
var yw = Object.prototype, bw = yw.hasOwnProperty;
function _w(e) {
  var t = this.__data__;
  return In ? t[e] !== void 0 : bw.call(t, e);
}
var ww = "__lodash_hash_undefined__";
function xw(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = In && t === void 0 ? ww : t, this;
}
function Ar(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ar.prototype.clear = hw;
Ar.prototype.delete = dw;
Ar.prototype.get = vw;
Ar.prototype.has = _w;
Ar.prototype.set = xw;
function Ew() {
  this.__data__ = [], this.size = 0;
}
function $i(e, t) {
  for (var r = e.length; r--; )
    if (Ui(e[r][0], t))
      return r;
  return -1;
}
var Ow = Array.prototype, Sw = Ow.splice;
function Tw(e) {
  var t = this.__data__, r = $i(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Sw.call(t, r, 1), --this.size, !0;
}
function Cw(e) {
  var t = this.__data__, r = $i(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Aw(e) {
  return $i(this.__data__, e) > -1;
}
function Rw(e, t) {
  var r = this.__data__, n = $i(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function tn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
tn.prototype.clear = Ew;
tn.prototype.delete = Tw;
tn.prototype.get = Cw;
tn.prototype.has = Aw;
tn.prototype.set = Rw;
var Iw = Lc(ji, "Map");
function kw() {
  this.size = 0, this.__data__ = {
    hash: new Ar(),
    map: new (Iw || tn)(),
    string: new Ar()
  };
}
function Nw(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Wi(e, t) {
  var r = e.__data__;
  return Nw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Pw(e) {
  var t = Wi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Mw(e) {
  return Wi(this, e).get(e);
}
function Dw(e) {
  return Wi(this, e).has(e);
}
function Fw(e, t) {
  var r = Wi(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Nr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Nr.prototype.clear = kw;
Nr.prototype.delete = Pw;
Nr.prototype.get = Mw;
Nr.prototype.has = Dw;
Nr.prototype.set = Fw;
var Lw = "Expected a function";
function jc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Lw);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (jc.Cache || Nr)(), r;
}
jc.Cache = Nr;
var Bw = 500;
function jw(e) {
  var t = jc(e, function(n) {
    return r.size === Bw && r.clear(), n;
  }), r = t.cache;
  return t;
}
var zw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qw = /\\(\\)?/g, Uw = jw(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(zw, function(r, n, i, a) {
    t.push(i ? a.replace(qw, "$1") : n || r);
  }), t;
});
function $w(e) {
  return e == null ? "" : Jg(e);
}
function zc(e, t) {
  return jn(e) ? e : fw(e, t) ? [e] : Uw($w(e));
}
function qc(e) {
  if (typeof e == "string" || zi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ww(e, t) {
  t = zc(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[qc(t[r++])];
  return r && r == n ? e : void 0;
}
function BS(e, t, r) {
  var n = e == null ? void 0 : Ww(e, t);
  return n === void 0 ? r : n;
}
function Gw(e, t, r) {
  t = zc(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = qc(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Bc(i) && qi(o, i) && (jn(e) || nv(e)));
}
var sv = Object.prototype, Vw = sv.hasOwnProperty, jS = g_(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, i = n > 2 ? t[2] : void 0;
  for (i && y_(t[0], t[1], i) && (n = 1); ++r < n; )
    for (var a = t[r], o = uw(a), s = -1, u = o.length; ++s < u; ) {
      var c = o[s], f = e[c];
      (f === void 0 || Ui(f, sv[c]) && !Vw.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), Hw = Object.prototype, Kw = Hw.hasOwnProperty;
function Yw(e, t) {
  return e != null && Kw.call(e, t);
}
function zS(e, t) {
  return e != null && Gw(e, t, Yw);
}
var Xw = "[object Number]";
function Zw(e) {
  return typeof e == "number" || Bn(e) && Ln(e) == Xw;
}
function qS(e) {
  return Zw(e) && e != +e;
}
function Jw(e, t, r, n) {
  if (!pr(e))
    return e;
  t = zc(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var u = qc(t[i]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != o) {
      var f = s[u];
      c = void 0, c === void 0 && (c = pr(f) ? f : qi(t[i + 1]) ? [] : {});
    }
    p_(s, u, c), s = s[u];
  }
  return e;
}
function US(e, t, r) {
  return e == null ? e : Jw(e, t, r);
}
const Qe = [];
for (let e = 0; e < 256; ++e)
  Qe.push((e + 256).toString(16).slice(1));
function Qw(e, t = 0) {
  return (Qe[e[t + 0]] + Qe[e[t + 1]] + Qe[e[t + 2]] + Qe[e[t + 3]] + "-" + Qe[e[t + 4]] + Qe[e[t + 5]] + "-" + Qe[e[t + 6]] + Qe[e[t + 7]] + "-" + Qe[e[t + 8]] + Qe[e[t + 9]] + "-" + Qe[e[t + 10]] + Qe[e[t + 11]] + Qe[e[t + 12]] + Qe[e[t + 13]] + Qe[e[t + 14]] + Qe[e[t + 15]]).toLowerCase();
}
let ka;
const e2 = new Uint8Array(16);
function t2() {
  if (!ka) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ka = crypto.getRandomValues.bind(crypto);
  }
  return ka(e2);
}
const r2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), rh = { randomUUID: r2 };
function $S(e, t, r) {
  var i;
  if (rh.randomUUID && !e)
    return rh.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? t2();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Qw(n);
}
typeof BigInt > "u" && (BigInt = function(e) {
  if (isNaN(e)) throw new Error("");
  return e;
});
const ye = BigInt(0), Oe = BigInt(1), kn = BigInt(2), Yu = BigInt(5), ft = BigInt(10), n2 = 2e3, he = {
  s: Oe,
  n: ye,
  d: Oe
};
function Zt(e, t) {
  try {
    e = BigInt(e);
  } catch {
    throw or();
  }
  return e * t;
}
function xt(e) {
  return typeof e == "bigint" ? e : Math.floor(e);
}
function je(e, t) {
  if (t === ye)
    throw $c();
  const r = Object.create(Uc.prototype);
  r.s = e < ye ? -Oe : Oe, e = e < ye ? -e : e;
  const n = _r(e, t);
  return r.n = e / n, r.d = t / n, r;
}
function Ur(e) {
  const t = {};
  let r = e, n = kn, i = Yu - Oe;
  for (; i <= r; ) {
    for (; r % n === ye; )
      r /= n, t[n] = (t[n] || ye) + Oe;
    i += Oe + kn * n++;
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
        throw or();
      if (e % 1 !== 0)
        throw nh();
      r = BigInt(e);
    }
    if (typeof t == "bigint")
      n = t;
    else {
      if (isNaN(t))
        throw or();
      if (t % 1 !== 0)
        throw nh();
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
      throw or();
    i = r * n;
  } else if (typeof e == "number") {
    if (isNaN(e))
      throw or();
    if (e < 0 && (i = -Oe, e = -e), e % 1 === 0)
      r = BigInt(e);
    else if (e > 0) {
      let a = 1, o = 0, s = 1, u = 1, c = 1, f = 1e7;
      for (e >= 1 && (a = 10 ** Math.floor(1 + Math.log10(e)), e /= a); s <= f && c <= f; ) {
        let l = (o + u) / (s + c);
        if (e === l) {
          s + c <= f ? (r = o + u, n = s + c) : c > s ? (r = u, n = c) : (r = o, n = s);
          break;
        } else
          e > l ? (o += u, s += c) : (u += o, c += s), s > f ? (r = u, n = c) : (r = o, n = s);
      }
      r = BigInt(r) * BigInt(a), n = BigInt(n);
    }
  } else if (typeof e == "string") {
    let a = 0, o = ye, s = ye, u = ye, c = Oe, f = Oe, l = e.replace(/_/g, "").match(/\d+|./g);
    if (l === null)
      throw or();
    if (l[a] === "-" ? (i = -Oe, a++) : l[a] === "+" && a++, l.length === a + 1 ? s = Zt(l[a++], i) : l[a + 1] === "." || l[a] === "." ? (l[a] !== "." && (o = Zt(l[a++], i)), a++, (a + 1 === l.length || l[a + 1] === "(" && l[a + 3] === ")" || l[a + 1] === "'" && l[a + 3] === "'") && (s = Zt(l[a], i), c = ft ** BigInt(l[a].length), a++), (l[a] === "(" && l[a + 2] === ")" || l[a] === "'" && l[a + 2] === "'") && (u = Zt(l[a + 1], i), f = ft ** BigInt(l[a + 1].length) - Oe, a += 3)) : l[a + 1] === "/" || l[a + 1] === ":" ? (s = Zt(l[a], i), c = Zt(l[a + 2], Oe), a += 3) : l[a + 3] === "/" && l[a + 1] === " " && (o = Zt(l[a], i), s = Zt(l[a + 2], i), c = Zt(l[a + 4], Oe), a += 5), l.length <= a)
      n = c * f, i = /* void */
      r = u + n * o + f * s;
    else
      throw or();
  } else if (typeof e == "bigint")
    r = e, i = e, n = Oe;
  else
    throw or();
  if (n === ye)
    throw $c();
  he.s = i < ye ? -Oe : Oe, he.n = r < ye ? -r : r, he.d = n < ye ? -n : n;
};
function i2(e, t, r) {
  let n = Oe;
  for (; t > ye; e = e * e % r, t >>= Oe)
    t & Oe && (n = n * e % r);
  return n;
}
function a2(e, t) {
  for (; t % kn === ye; t /= kn)
    ;
  for (; t % Yu === ye; t /= Yu)
    ;
  if (t === Oe)
    return ye;
  let r = ft % t, n = 1;
  for (; r !== Oe; n++)
    if (r = r * ft % t, n > n2)
      return ye;
  return BigInt(n);
}
function s2(e, t, r) {
  let n = Oe, i = i2(ft, r, t);
  for (let a = 0; a < 300; a++) {
    if (n === i)
      return BigInt(a);
    n = n * ft % t, i = i * ft % t;
  }
  return 0;
}
function _r(e, t) {
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
function Uc(e, t) {
  if (Ye(e, t), this instanceof Uc)
    e = _r(he.d, he.n), this.s = he.s, this.n = he.n / e, this.d = he.d / e;
  else
    return je(he.s * he.n, he.d);
}
var $c = function() {
  return new Error("Division by Zero");
}, or = function() {
  return new Error("Invalid argument");
}, nh = function() {
  return new Error("Parameters must be integer");
};
Uc.prototype = {
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
      throw $c();
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
    return Ye(e, t), je(_r(he.n, this.n) * _r(he.d, this.d), he.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(e, t) {
    return Ye(e, t), he.n === ye && this.n === ye ? je(ye, Oe) : je(he.n * this.n, _r(he.n, this.n) * _r(he.d, this.d));
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
    let r = Ur(this.n), n = Ur(this.d), i = Oe, a = Oe;
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
    const r = {}, n = Ur(he.n), i = Ur(he.d), a = Ur(this.n), o = Ur(this.d);
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
      const f = n[c] || ye, l = a[c] || ye;
      if (f === ye) {
        if (l !== ye)
          return null;
        continue;
      }
      let d = l, h = f;
      const m = _r(d, h);
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
    return e = ft ** BigInt(e || 0), je(
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
    return e = ft ** BigInt(e || 0), je(
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
    return e = ft ** BigInt(e || 0), je(
      xt(this.s * e * this.n / this.d) + this.s * ((this.s >= ye ? Oe : ye) + kn * (e * this.n % this.d) > this.d ? Oe : ye),
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
    let n = a2(t, r), i = s2(t, r, n), a = this.s < ye ? "-" : "";
    if (a += xt(t / r), t %= r, t *= ft, t && (a += "."), n) {
      for (let o = i; o--; )
        a += xt(t / r), t %= r, t *= ft;
      a += "(";
      for (let o = n; o--; )
        a += xt(t / r), t %= r, t *= ft;
      a += ")";
    } else
      for (let o = e; t && o--; )
        a += xt(t / r), t %= r, t *= ft;
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
var ov = Object.defineProperty, o2 = Object.getOwnPropertyNames, Y = (e, t) => ov(e, "name", { value: t, configurable: !0 }), u2 = (e, t) => function() {
  return t || (0, e[o2(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Wc = (e, t) => {
  for (var r in t)
    ov(e, r, { get: t[r], enumerable: !0 });
}, c2 = u2({
  "(disabled):util"() {
  }
}), Ei = {};
Wc(Ei, {
  addChainableMethod: () => rl,
  addLengthGuard: () => Un,
  addMethod: () => Qc,
  addProperty: () => Jc,
  checkError: () => pt,
  compareByInspect: () => Ci,
  eql: () => Mv,
  expectTypes: () => pv,
  flag: () => Se,
  getActual: () => Vi,
  getMessage: () => Hc,
  getName: () => Ki,
  getOperator: () => sl,
  getOwnEnumerableProperties: () => al,
  getOwnEnumerablePropertySymbols: () => il,
  getPathInfo: () => Zc,
  hasProperty: () => Hi,
  inspect: () => Re,
  isNaN: () => Ai,
  isNumeric: () => Xe,
  isProxyEnabled: () => qn,
  isRegExp: () => Ri,
  objDisplay: () => Er,
  overwriteChainableMethod: () => nl,
  overwriteMethod: () => tl,
  overwriteProperty: () => el,
  proxify: () => rn,
  test: () => Gc,
  transferFlags: () => Rt,
  type: () => ke
});
var pt = {};
Wc(pt, {
  compatibleConstructor: () => lv,
  compatibleInstance: () => cv,
  compatibleMessage: () => fv,
  getConstructorName: () => hv,
  getMessage: () => dv
});
function Gi(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
Y(Gi, "isErrorInstance");
function uv(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Y(uv, "isRegExp");
function cv(e, t) {
  return Gi(t) && e === t;
}
Y(cv, "compatibleInstance");
function lv(e, t) {
  return Gi(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
Y(lv, "compatibleConstructor");
function fv(e, t) {
  const r = typeof e == "string" ? e : e.message;
  return uv(t) ? t.test(r) : typeof t == "string" ? r.indexOf(t) !== -1 : !1;
}
Y(fv, "compatibleMessage");
function hv(e) {
  let t = e;
  return Gi(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
Y(hv, "getConstructorName");
function dv(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
Y(dv, "getMessage");
function Se(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    n[t] = r;
  else
    return n[t];
}
Y(Se, "flag");
function Gc(e, t) {
  var r = Se(e, "negate"), n = t[0];
  return r ? !n : n;
}
Y(Gc, "test");
function ke(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Y(ke, "type");
var l2 = "captureStackTrace" in Error, Sr, Ie = (Sr = class extends Error {
  constructor(r = "Unspecified AssertionError", n, i) {
    super(r);
    vf(this, "message");
    this.message = r, l2 && Error.captureStackTrace(this, i || Sr);
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
}, Y(Sr, "AssertionError"), Sr);
function pv(e, t) {
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
Y(pv, "expectTypes");
function Vi(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
Y(Vi, "getActual");
var ih = {
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
}, f2 = {
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
}, Yr = "…";
function mv(e, t) {
  const r = ih[f2[t]] || ih[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
Y(mv, "colorise");
function gv({
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
} = {}, f) {
  const l = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!i,
    maxArrayLength: Number(a),
    breakLength: Number(o),
    truncate: Number(u),
    seen: s,
    inspect: f,
    stylize: c
  };
  return l.colors && (l.stylize = mv), l;
}
Y(gv, "normaliseOptions");
function vv(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
Y(vv, "isHighSurrogate");
function nr(e, t, r = Yr) {
  e = String(e);
  const n = r.length, i = e.length;
  if (n > t && i > n)
    return r;
  if (i > t && i > n) {
    let a = t - n;
    return a > 0 && vv(e[a - 1]) && (a = a - 1), `${e.slice(0, a)}${r}`;
  }
  return e;
}
Y(nr, "truncate");
function bt(e, t, r, n = ", ") {
  r = r || t.inspect;
  const i = e.length;
  if (i === 0)
    return "";
  const a = t.truncate;
  let o = "", s = "", u = "";
  for (let c = 0; c < i; c += 1) {
    const f = c + 1 === e.length, l = c + 2 === e.length;
    u = `${Yr}(${e.length - c})`;
    const d = e[c];
    t.truncate = a - o.length - (f ? 0 : n.length);
    const h = s || r(d, t) + (f ? "" : n), m = o.length + h.length, p = m + u.length;
    if (f && m > a && o.length + u.length <= a || !f && !l && p > a || (s = f ? "" : r(e[c + 1], t) + (l ? "" : n), !f && l && p > a && m + s.length > a))
      break;
    if (o += h, !f && !l && m + s.length >= a) {
      u = `${Yr}(${e.length - c - 1})`;
      break;
    }
    u = "";
  }
  return `${o}${u}`;
}
Y(bt, "inspectList");
function yv(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
Y(yv, "quoteComplexKey");
function Xr([e, t], r) {
  return r.truncate -= 2, typeof e == "string" ? e = yv(e) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`), r.truncate -= e.length, t = r.inspect(t, r), `${e}: ${t}`;
}
Y(Xr, "inspectProperty");
function bv(e, t) {
  const r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length)
    return "[]";
  t.truncate -= 4;
  const n = bt(e, t);
  t.truncate -= n.length;
  let i = "";
  return r.length && (i = bt(r.map((a) => [a, e[a]]), t, Xr)), `[ ${n}${i ? `, ${i}` : ""} ]`;
}
Y(bv, "inspectArray");
var h2 = /* @__PURE__ */ Y((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function jt(e, t) {
  const r = h2(e);
  t.truncate -= r.length + 4;
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return `${r}[]`;
  let i = "";
  for (let o = 0; o < e.length; o++) {
    const s = `${t.stylize(nr(e[o], t.truncate), "number")}${o === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= s.length, e[o] !== e.length && t.truncate <= 3) {
      i += `${Yr}(${e.length - e[o] + 1})`;
      break;
    }
    i += s;
  }
  let a = "";
  return n.length && (a = bt(n.map((o) => [o, e[o]]), t, Xr)), `${r}[ ${i}${a ? `, ${a}` : ""} ]`;
}
Y(jt, "inspectTypedArray");
function _v(e, t) {
  const r = e.toJSON();
  if (r === null)
    return "Invalid Date";
  const n = r.split("T"), i = n[0];
  return t.stylize(`${i}T${nr(n[1], t.truncate - i.length - 1)}`, "date");
}
Y(_v, "inspectDate");
function Xu(e, t) {
  const r = e[Symbol.toStringTag] || "Function", n = e.name;
  return n ? t.stylize(`[${r} ${nr(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
Y(Xu, "inspectFunction");
function wv([e, t], r) {
  return r.truncate -= 4, e = r.inspect(e, r), r.truncate -= e.length, t = r.inspect(t, r), `${e} => ${t}`;
}
Y(wv, "inspectMapEntry");
function xv(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push([n, r]);
  }), t;
}
Y(xv, "mapToEntries");
function Ev(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${bt(xv(e), t, wv)} }`);
}
Y(Ev, "inspectMap");
var d2 = Number.isNaN || ((e) => e !== e);
function Zu(e, t) {
  return d2(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(nr(String(e), t.truncate), "number");
}
Y(Zu, "inspectNumber");
function Ju(e, t) {
  let r = nr(e.toString(), t.truncate - 1);
  return r !== Yr && (r += "n"), t.stylize(r, "bigint");
}
Y(Ju, "inspectBigInt");
function Ov(e, t) {
  const r = e.toString().split("/")[2], n = t.truncate - (2 + r.length), i = e.source;
  return t.stylize(`/${nr(i, n)}/${r}`, "regexp");
}
Y(Ov, "inspectRegExp");
function Sv(e) {
  const t = [];
  return e.forEach((r) => {
    t.push(r);
  }), t;
}
Y(Sv, "arrayFromSet");
function Tv(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${bt(Sv(e), t)} }`);
}
Y(Tv, "inspectSet");
var ah = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), p2 = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, m2 = 16;
function Cv(e) {
  return p2[e] || `\\u${`0000${e.charCodeAt(0).toString(m2)}`.slice(-4)}`;
}
Y(Cv, "escape");
function Qu(e, t) {
  return ah.test(e) && (e = e.replace(ah, Cv)), t.stylize(`'${nr(e, t.truncate - 2)}'`, "string");
}
Y(Qu, "inspectString");
function ec(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
Y(ec, "inspectSymbol");
var Av = /* @__PURE__ */ Y(() => "Promise{…}", "getPromiseValue");
try {
  const { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (Av = /* @__PURE__ */ Y((n, i) => {
    const [a, o] = e(n);
    return a === t ? "Promise{<pending>}" : `Promise${a === r ? "!" : ""}{${i.inspect(o, i)}}`;
  }, "getPromiseValue"));
} catch {
}
var g2 = Av;
function Cn(e, t) {
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const i = bt(r.map((s) => [s, e[s]]), t, Xr), a = bt(n.map((s) => [s, e[s]]), t, Xr);
  t.seen.pop();
  let o = "";
  return i && a && (o = ", "), `{ ${i}${o}${a} }`;
}
Y(Cn, "inspectObject");
var Na = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Rv(e, t) {
  let r = "";
  return Na && Na in e && (r = e[Na]), r = r || e.constructor.name, (!r || r === "_class") && (r = "<Anonymous Class>"), t.truncate -= r.length, `${r}${Cn(e, t)}`;
}
Y(Rv, "inspectClass");
function Iv(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${bt(e, t)} ]`);
}
Y(Iv, "inspectArguments");
var v2 = [
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
function kv(e, t) {
  const r = Object.getOwnPropertyNames(e).filter((o) => v2.indexOf(o) === -1), n = e.name;
  t.truncate -= n.length;
  let i = "";
  if (typeof e.message == "string" ? i = nr(e.message, t.truncate) : r.unshift("message"), i = i ? `: ${i}` : "", t.truncate -= i.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const a = bt(r.map((o) => [o, e[o]]), t, Xr);
  return `${n}${i}${a ? ` { ${a} }` : ""}`;
}
Y(kv, "inspectObject");
function Nv([e, t], r) {
  return r.truncate -= 3, t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
Y(Nv, "inspectAttribute");
function Oi(e, t) {
  return bt(e, t, Vc, `
`);
}
Y(Oi, "inspectHTMLCollection");
function Vc(e, t) {
  const r = e.getAttributeNames(), n = e.tagName.toLowerCase(), i = t.stylize(`<${n}`, "special"), a = t.stylize(">", "special"), o = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let s = "";
  r.length > 0 && (s += " ", s += bt(r.map((f) => [f, e.getAttribute(f)]), t, Nv, " ")), t.truncate -= s.length;
  const u = t.truncate;
  let c = Oi(e.children, t);
  return c && c.length > u && (c = `${Yr}(${e.children.length})`), `${i}${s}${a}${c}${o}`;
}
Y(Vc, "inspectHTML");
var y2 = typeof Symbol == "function" && typeof Symbol.for == "function", Pa = y2 ? Symbol.for("chai/inspect") : "@@chai/inspect", Wr = !1;
try {
  const e = c2();
  Wr = e.inspect ? e.inspect.custom : !1;
} catch {
  Wr = !1;
}
var sh = /* @__PURE__ */ new WeakMap(), oh = {}, uh = {
  undefined: (e, t) => t.stylize("undefined", "undefined"),
  null: (e, t) => t.stylize("null", "null"),
  boolean: (e, t) => t.stylize(String(e), "boolean"),
  Boolean: (e, t) => t.stylize(String(e), "boolean"),
  number: Zu,
  Number: Zu,
  bigint: Ju,
  BigInt: Ju,
  string: Qu,
  String: Qu,
  function: Xu,
  Function: Xu,
  symbol: ec,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: ec,
  Array: bv,
  Date: _v,
  Map: Ev,
  Set: Tv,
  RegExp: Ov,
  Promise: g2,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: Iv,
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
  Error: kv,
  HTMLCollection: Oi,
  NodeList: Oi
}, b2 = /* @__PURE__ */ Y((e, t, r) => Pa in e && typeof e[Pa] == "function" ? e[Pa](t) : Wr && Wr in e && typeof e[Wr] == "function" ? e[Wr](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && sh.has(e.constructor) ? sh.get(e.constructor)(e, t) : oh[r] ? oh[r](e, t) : "", "inspectCustom"), _2 = Object.prototype.toString;
function Si(e, t = {}) {
  const r = gv(t, Si), { customInspect: n } = r;
  let i = e === null ? "null" : typeof e;
  if (i === "object" && (i = _2.call(e).slice(8, -1)), i in uh)
    return uh[i](e, r);
  if (n && e) {
    const o = b2(e, r, i);
    if (o)
      return typeof o == "string" ? o : Si(o, r);
  }
  const a = e ? Object.getPrototypeOf(e) : !1;
  return a === Object.prototype || a === null ? Cn(e, r) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? Vc(e, r) : "constructor" in e ? e.constructor !== Object ? Rv(e, r) : Cn(e, r) : e === Object(e) ? Cn(e, r) : r.stylize(String(e), i);
}
Y(Si, "inspect");
var ht = {
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
    truncate: ht.truncateThreshold ? ht.truncateThreshold : 1 / 0
  };
  return Si(e, i);
}
Y(Re, "inspect");
function Er(e) {
  var t = Re(e), r = Object.prototype.toString.call(e);
  if (ht.truncateThreshold && t.length >= ht.truncateThreshold) {
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
Y(Er, "objDisplay");
function Hc(e, t) {
  var r = Se(e, "negate"), n = Se(e, "object"), i = t[3], a = Vi(e, t), o = r ? t[2] : t[1], s = Se(e, "message");
  return typeof o == "function" && (o = o()), o = o || "", o = o.replace(/#\{this\}/g, function() {
    return Er(n);
  }).replace(/#\{act\}/g, function() {
    return Er(a);
  }).replace(/#\{exp\}/g, function() {
    return Er(i);
  }), s ? s + ": " + o : o;
}
Y(Hc, "getMessage");
function Rt(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), r = arguments.length === 3 ? r : !0;
  for (var i in n)
    (r || i !== "object" && i !== "ssfi" && i !== "lockSsfi" && i != "message") && (t.__flags[i] = n[i]);
}
Y(Rt, "transferFlags");
function tc(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Y(tc, "type");
function Kc() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
Y(Kc, "FakeMap");
Kc.prototype = {
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
var Pv = typeof WeakMap == "function" ? WeakMap : Kc;
function rc(e, t, r) {
  if (!r || Rr(e) || Rr(t))
    return null;
  var n = r.get(e);
  if (n) {
    var i = n.get(t);
    if (typeof i == "boolean")
      return i;
  }
  return null;
}
Y(rc, "memoizeCompare");
function xn(e, t, r, n) {
  if (!(!r || Rr(e) || Rr(t))) {
    var i = r.get(e);
    i ? i.set(t, n) : (i = new Pv(), i.set(t, n), r.set(e, i));
  }
}
Y(xn, "memoizeSet");
var Mv = zn;
function zn(e, t, r) {
  if (r && r.comparator)
    return nc(e, t, r);
  var n = Yc(e, t);
  return n !== null ? n : nc(e, t, r);
}
Y(zn, "deepEqual");
function Yc(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : Rr(e) || Rr(t) ? !1 : null;
}
Y(Yc, "simpleEqual");
function nc(e, t, r) {
  r = r || {}, r.memoize = r.memoize === !1 ? !1 : r.memoize || new Pv();
  var n = r && r.comparator, i = rc(e, t, r.memoize);
  if (i !== null)
    return i;
  var a = rc(t, e, r.memoize);
  if (a !== null)
    return a;
  if (n) {
    var o = n(e, t);
    if (o === !1 || o === !0)
      return xn(e, t, r.memoize, o), o;
    var s = Yc(e, t);
    if (s !== null)
      return s;
  }
  var u = tc(e);
  if (u !== tc(t))
    return xn(e, t, r.memoize, !1), !1;
  xn(e, t, r.memoize, !0);
  var c = Dv(e, t, u, r);
  return xn(e, t, r.memoize, c), c;
}
Y(nc, "extensiveDeepEqual");
function Dv(e, t, r, n) {
  switch (r) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return zn(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return Xc(e, t, ["name", "message", "code"], n);
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
      return cr(e, t, n);
    case "RegExp":
      return Fv(e, t);
    case "Generator":
      return Lv(e, t, n);
    case "DataView":
      return cr(new Uint8Array(e.buffer), new Uint8Array(t.buffer), n);
    case "ArrayBuffer":
      return cr(new Uint8Array(e), new Uint8Array(t), n);
    case "Set":
      return ic(e, t, n);
    case "Map":
      return ic(e, t, n);
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
      return jv(e, t, n);
  }
}
Y(Dv, "extensiveDeepEqualByType");
function Fv(e, t) {
  return e.toString() === t.toString();
}
Y(Fv, "regexpEqual");
function ic(e, t, r) {
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
  }, "gatherEntries")), cr(n.sort(), i.sort(), r);
}
Y(ic, "entriesEqual");
function cr(e, t, r) {
  var n = e.length;
  if (n !== t.length)
    return !1;
  if (n === 0)
    return !0;
  for (var i = -1; ++i < n; )
    if (zn(e[i], t[i], r) === !1)
      return !1;
  return !0;
}
Y(cr, "iterableEqual");
function Lv(e, t, r) {
  return cr(Ti(e), Ti(t), r);
}
Y(Lv, "generatorEqual");
function Bv(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
Y(Bv, "hasIteratorFunction");
function ac(e) {
  if (Bv(e))
    try {
      return Ti(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
Y(ac, "getIteratorEntries");
function Ti(e) {
  for (var t = e.next(), r = [t.value]; t.done === !1; )
    t = e.next(), r.push(t.value);
  return r;
}
Y(Ti, "getGeneratorEntries");
function sc(e) {
  var t = [];
  for (var r in e)
    t.push(r);
  return t;
}
Y(sc, "getEnumerableKeys");
function oc(e) {
  for (var t = [], r = Object.getOwnPropertySymbols(e), n = 0; n < r.length; n += 1) {
    var i = r[n];
    Object.getOwnPropertyDescriptor(e, i).enumerable && t.push(i);
  }
  return t;
}
Y(oc, "getEnumerableSymbols");
function Xc(e, t, r, n) {
  var i = r.length;
  if (i === 0)
    return !0;
  for (var a = 0; a < i; a += 1)
    if (zn(e[r[a]], t[r[a]], n) === !1)
      return !1;
  return !0;
}
Y(Xc, "keysEqual");
function jv(e, t, r) {
  var n = sc(e), i = sc(t), a = oc(e), o = oc(t);
  if (n = n.concat(a), i = i.concat(o), n.length && n.length === i.length)
    return cr(uc(n).sort(), uc(i).sort()) === !1 ? !1 : Xc(e, t, n, r);
  var s = ac(e), u = ac(t);
  return s.length && s.length === u.length ? (s.sort(), u.sort(), cr(s, u, r)) : n.length === 0 && s.length === 0 && i.length === 0 && u.length === 0;
}
Y(jv, "objectEqual");
function Rr(e) {
  return e === null || typeof e != "object";
}
Y(Rr, "isPrimitive");
function uc(e) {
  return e.map(/* @__PURE__ */ Y(function(r) {
    return typeof r == "symbol" ? r.toString() : r;
  }, "mapSymbol"));
}
Y(uc, "mapSymbols");
function Hi(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
Y(Hi, "hasProperty");
function zv(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((n) => {
    if (n === "constructor" || n === "__proto__" || n === "prototype")
      return {};
    const a = /^\[(\d+)\]$/.exec(n);
    let o = null;
    return a ? o = { i: parseFloat(a[1]) } : o = { p: n.replace(/\\([.[\]])/g, "$1") }, o;
  });
}
Y(zv, "parsePath");
function cc(e, t, r) {
  let n = e, i = null;
  r = typeof r > "u" ? t.length : r;
  for (let a = 0; a < r; a++) {
    const o = t[a];
    n && (typeof o.p > "u" ? n = n[o.i] : n = n[o.p], a === r - 1 && (i = n));
  }
  return i;
}
Y(cc, "internalGetPathValue");
function Zc(e, t) {
  const r = zv(t), n = r[r.length - 1], i = {
    parent: r.length > 1 ? cc(e, r, r.length - 1) : e,
    name: n.p || n.i,
    value: cc(e, r)
  };
  return i.exists = Hi(i.parent, i.name), i;
}
Y(Zc, "getPathInfo");
function I(e, t, r, n) {
  return Se(this, "ssfi", r || I), Se(this, "lockSsfi", n), Se(this, "object", e), Se(this, "message", t), Se(this, "eql", ht.deepEqual || Mv), rn(this);
}
Y(I, "Assertion");
Object.defineProperty(I, "includeStack", {
  get: function() {
    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), ht.includeStack;
  },
  set: function(e) {
    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), ht.includeStack = e;
  }
});
Object.defineProperty(I, "showDiff", {
  get: function() {
    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), ht.showDiff;
  },
  set: function(e) {
    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), ht.showDiff = e;
  }
});
I.addProperty = function(e, t) {
  Jc(this.prototype, e, t);
};
I.addMethod = function(e, t) {
  Qc(this.prototype, e, t);
};
I.addChainableMethod = function(e, t, r) {
  rl(this.prototype, e, t, r);
};
I.overwriteProperty = function(e, t) {
  el(this.prototype, e, t);
};
I.overwriteMethod = function(e, t) {
  tl(this.prototype, e, t);
};
I.overwriteChainableMethod = function(e, t, r) {
  nl(this.prototype, e, t, r);
};
I.prototype.assert = function(e, t, r, n, i, a) {
  var o = Gc(this, arguments);
  if (a !== !1 && (a = !0), n === void 0 && i === void 0 && (a = !1), ht.showDiff !== !0 && (a = !1), !o) {
    t = Hc(this, arguments);
    var s = Vi(this, arguments), u = {
      actual: s,
      expected: n,
      showDiff: a
    }, c = sl(this, arguments);
    throw c && (u.operator = c), new Ie(
      t,
      u,
      ht.includeStack ? this.assert : Se(this, "ssfi")
    );
  }
};
Object.defineProperty(
  I.prototype,
  "_obj",
  {
    get: function() {
      return Se(this, "object");
    },
    set: function(e) {
      Se(this, "object", e);
    }
  }
);
function qn() {
  return ht.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
Y(qn, "isProxyEnabled");
function Jc(e, t, r) {
  r = r === void 0 ? function() {
  } : r, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ Y(function n() {
        !qn() && !Se(this, "lockSsfi") && Se(this, "ssfi", n);
        var i = r.call(this);
        if (i !== void 0)
          return i;
        var a = new I();
        return Rt(this, a), a;
      }, "propertyGetter"),
      configurable: !0
    }
  );
}
Y(Jc, "addProperty");
var w2 = Object.getOwnPropertyDescriptor(function() {
}, "length");
function Un(e, t, r) {
  return w2.configurable && Object.defineProperty(e, "length", {
    get: function() {
      throw Error(r ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".');
    }
  }), e;
}
Y(Un, "addLengthGuard");
function qv(e) {
  var t = Object.getOwnPropertyNames(e);
  function r(i) {
    t.indexOf(i) === -1 && t.push(i);
  }
  Y(r, "addProperty");
  for (var n = Object.getPrototypeOf(e); n !== null; )
    Object.getOwnPropertyNames(n).forEach(r), n = Object.getPrototypeOf(n);
  return t;
}
Y(qv, "getProperties");
var ch = ["__flags", "__methods", "_obj", "assert"];
function rn(e, t) {
  return qn() ? new Proxy(e, {
    get: /* @__PURE__ */ Y(function r(n, i) {
      if (typeof i == "string" && ht.proxyExcludedKeys.indexOf(i) === -1 && !Reflect.has(n, i)) {
        if (t)
          throw Error("Invalid Chai property: " + t + "." + i + '. See docs for proper usage of "' + t + '".');
        var a = null, o = 4;
        throw qv(n).forEach(function(s) {
          if (!Object.prototype.hasOwnProperty(s) && ch.indexOf(s) === -1) {
            var u = Uv(
              i,
              s,
              o
            );
            u < o && (a = s, o = u);
          }
        }), Error(a !== null ? "Invalid Chai property: " + i + '. Did you mean "' + a + '"?' : "Invalid Chai property: " + i);
      }
      return ch.indexOf(i) === -1 && !Se(n, "lockSsfi") && Se(n, "ssfi", r), Reflect.get(n, i);
    }, "proxyGetter")
  }) : e;
}
Y(rn, "proxify");
function Uv(e, t, r) {
  if (Math.abs(e.length - t.length) >= r)
    return r;
  for (var n = [], i = 0; i <= e.length; i++)
    n[i] = Array(t.length + 1).fill(0), n[i][0] = i;
  for (var a = 0; a < t.length; a++)
    n[0][a] = a;
  for (var i = 1; i <= e.length; i++)
    for (var o = e.charCodeAt(i - 1), a = 1; a <= t.length; a++) {
      if (Math.abs(i - a) >= r) {
        n[i][a] = r;
        continue;
      }
      n[i][a] = Math.min(
        n[i - 1][a] + 1,
        n[i][a - 1] + 1,
        n[i - 1][a - 1] + (o === t.charCodeAt(a - 1) ? 0 : 1)
      );
    }
  return n[e.length][t.length];
}
Y(Uv, "stringDistanceCapped");
function Qc(e, t, r) {
  var n = /* @__PURE__ */ Y(function() {
    Se(this, "lockSsfi") || Se(this, "ssfi", n);
    var i = r.apply(this, arguments);
    if (i !== void 0)
      return i;
    var a = new I();
    return Rt(this, a), a;
  }, "methodWrapper");
  Un(n, t, !1), e[t] = rn(n, t);
}
Y(Qc, "addMethod");
function el(e, t, r) {
  var n = Object.getOwnPropertyDescriptor(e, t), i = /* @__PURE__ */ Y(function() {
  }, "_super");
  n && typeof n.get == "function" && (i = n.get), Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ Y(function a() {
        !qn() && !Se(this, "lockSsfi") && Se(this, "ssfi", a);
        var o = Se(this, "lockSsfi");
        Se(this, "lockSsfi", !0);
        var s = r(i).call(this);
        if (Se(this, "lockSsfi", o), s !== void 0)
          return s;
        var u = new I();
        return Rt(this, u), u;
      }, "overwritingPropertyGetter"),
      configurable: !0
    }
  );
}
Y(el, "overwriteProperty");
function tl(e, t, r) {
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
    var u = new I();
    return Rt(this, u), u;
  }, "overwritingMethodWrapper");
  Un(a, t, !1), e[t] = rn(a, t);
}
Y(tl, "overwriteMethod");
var x2 = typeof Object.setPrototypeOf == "function", lh = /* @__PURE__ */ Y(function() {
}, "testFn"), E2 = Object.getOwnPropertyNames(lh).filter(function(e) {
  var t = Object.getOwnPropertyDescriptor(lh, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), O2 = Function.prototype.call, S2 = Function.prototype.apply;
function rl(e, t, r, n) {
  typeof n != "function" && (n = /* @__PURE__ */ Y(function() {
  }, "chainingBehavior"));
  var i = {
    method: r,
    chainingBehavior: n
  };
  e.__methods || (e.__methods = {}), e.__methods[t] = i, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ Y(function() {
        i.chainingBehavior.call(this);
        var o = /* @__PURE__ */ Y(function() {
          Se(this, "lockSsfi") || Se(this, "ssfi", o);
          var c = i.method.apply(this, arguments);
          if (c !== void 0)
            return c;
          var f = new I();
          return Rt(this, f), f;
        }, "chainableMethodWrapper");
        if (Un(o, t, !0), x2) {
          var s = Object.create(this);
          s.call = O2, s.apply = S2, Object.setPrototypeOf(o, s);
        } else {
          var u = Object.getOwnPropertyNames(e);
          u.forEach(function(c) {
            if (E2.indexOf(c) === -1) {
              var f = Object.getOwnPropertyDescriptor(e, c);
              Object.defineProperty(o, c, f);
            }
          });
        }
        return Rt(this, o), rn(o);
      }, "chainableMethodGetter"),
      configurable: !0
    }
  );
}
Y(rl, "addChainableMethod");
function nl(e, t, r, n) {
  var i = e.__methods[t], a = i.chainingBehavior;
  i.chainingBehavior = /* @__PURE__ */ Y(function() {
    var u = n(a).call(this);
    if (u !== void 0)
      return u;
    var c = new I();
    return Rt(this, c), c;
  }, "overwritingChainableMethodGetter");
  var o = i.method;
  i.method = /* @__PURE__ */ Y(function() {
    var u = r(o).apply(this, arguments);
    if (u !== void 0)
      return u;
    var c = new I();
    return Rt(this, c), c;
  }, "overwritingChainableMethodWrapper");
}
Y(nl, "overwriteChainableMethod");
function Ci(e, t) {
  return Re(e) < Re(t) ? -1 : 1;
}
Y(Ci, "compareByInspect");
function il(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
Y(il, "getOwnEnumerablePropertySymbols");
function al(e) {
  return Object.keys(e).concat(il(e));
}
Y(al, "getOwnEnumerableProperties");
function $v(e) {
  return e !== e;
}
Y($v, "_isNaN");
var Ai = Number.isNaN || $v;
function Wv(e) {
  var t = ke(e), r = ["Array", "Object", "Function"];
  return r.indexOf(t) !== -1;
}
Y(Wv, "isObjectType");
function sl(e, t) {
  var r = Se(e, "operator"), n = Se(e, "negate"), i = t[3], a = n ? t[2] : t[1];
  if (r)
    return r;
  if (typeof a == "function" && (a = a()), a = a || "", !!a && !/\shave\s/.test(a)) {
    var o = Wv(i);
    return /\snot\s/.test(a) ? o ? "notDeepStrictEqual" : "notStrictEqual" : o ? "deepStrictEqual" : "strictEqual";
  }
}
Y(sl, "getOperator");
function Ki(e) {
  return e.name;
}
Y(Ki, "getName");
function Ri(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Y(Ri, "isRegExp");
function Xe(e) {
  return ["Number", "BigInt"].includes(ke(e));
}
Y(Xe, "isNumeric");
var { flag: $ } = Ei;
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
  I.addProperty(e);
});
I.addProperty("not", function() {
  $(this, "negate", !0);
});
I.addProperty("deep", function() {
  $(this, "deep", !0);
});
I.addProperty("nested", function() {
  $(this, "nested", !0);
});
I.addProperty("own", function() {
  $(this, "own", !0);
});
I.addProperty("ordered", function() {
  $(this, "ordered", !0);
});
I.addProperty("any", function() {
  $(this, "any", !0), $(this, "all", !1);
});
I.addProperty("all", function() {
  $(this, "all", !0), $(this, "any", !1);
});
var fh = {
  function: ["function", "asyncfunction", "generatorfunction", "asyncgeneratorfunction"],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function ol(e, t) {
  t && $(this, "message", t), e = e.toLowerCase();
  var r = $(this, "object"), n = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const i = ke(r).toLowerCase();
  fh.function.includes(e) ? this.assert(
    fh[e].includes(i),
    "expected #{this} to be " + n + e,
    "expected #{this} not to be " + n + e
  ) : this.assert(
    e === i,
    "expected #{this} to be " + n + e,
    "expected #{this} not to be " + n + e
  );
}
Y(ol, "an");
I.addChainableMethod("an", ol);
I.addChainableMethod("a", ol);
function Gv(e, t) {
  return Ai(e) && Ai(t) || e === t;
}
Y(Gv, "SameValueZero");
function $n() {
  $(this, "contains", !0);
}
Y($n, "includeChainingBehavior");
function Wn(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = ke(r).toLowerCase(), i = $(this, "message"), a = $(this, "negate"), o = $(this, "ssfi"), s = $(this, "deep"), u = s ? "deep " : "", c = s ? $(this, "eql") : Gv;
  i = i ? i + ": " : "";
  var f = !1;
  switch (n) {
    case "string":
      f = r.indexOf(e) !== -1;
      break;
    case "weakset":
      if (s)
        throw new Ie(
          i + "unable to use .deep.include with WeakSet",
          void 0,
          o
        );
      f = r.has(e);
      break;
    case "map":
      r.forEach(function(m) {
        f = f || c(m, e);
      });
      break;
    case "set":
      s ? r.forEach(function(m) {
        f = f || c(m, e);
      }) : f = r.has(e);
      break;
    case "array":
      s ? f = r.some(function(m) {
        return c(m, e);
      }) : f = r.indexOf(e) !== -1;
      break;
    default:
      if (e !== Object(e))
        throw new Ie(
          i + "the given combination of arguments (" + n + " and " + ke(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + ke(e).toLowerCase(),
          void 0,
          o
        );
      var l = Object.keys(e), d = null, h = 0;
      if (l.forEach(function(m) {
        var p = new I(r);
        if (Rt(this, p, !0), $(p, "lockSsfi", !0), !a || l.length === 1) {
          p.property(m, e[m]);
          return;
        }
        try {
          p.property(m, e[m]);
        } catch (b) {
          if (!pt.compatibleConstructor(b, Ie))
            throw b;
          d === null && (d = b), h++;
        }
      }, this), a && l.length > 1 && h === l.length)
        throw d;
      return;
  }
  this.assert(
    f,
    "expected #{this} to " + u + "include " + Re(e),
    "expected #{this} to not " + u + "include " + Re(e)
  );
}
Y(Wn, "include");
I.addChainableMethod("include", Wn, $n);
I.addChainableMethod("contain", Wn, $n);
I.addChainableMethod("contains", Wn, $n);
I.addChainableMethod("includes", Wn, $n);
I.addProperty("ok", function() {
  this.assert(
    $(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
I.addProperty("true", function() {
  this.assert(
    $(this, "object") === !0,
    "expected #{this} to be true",
    "expected #{this} to be false",
    !$(this, "negate")
  );
});
I.addProperty("numeric", function() {
  const e = $(this, "object");
  this.assert(
    ["Number", "BigInt"].includes(ke(e)),
    "expected #{this} to be numeric",
    "expected #{this} to not be numeric",
    !$(this, "negate")
  );
});
I.addProperty("callable", function() {
  const e = $(this, "object"), t = $(this, "ssfi"), r = $(this, "message"), n = r ? `${r}: ` : "", i = $(this, "negate"), a = i ? `${n}expected ${Re(e)} not to be a callable function` : `${n}expected ${Re(e)} to be a callable function`, o = ["Function", "AsyncFunction", "GeneratorFunction", "AsyncGeneratorFunction"].includes(ke(e));
  if (o && i || !o && !i)
    throw new Ie(
      a,
      void 0,
      t
    );
});
I.addProperty("false", function() {
  this.assert(
    $(this, "object") === !1,
    "expected #{this} to be false",
    "expected #{this} to be true",
    !!$(this, "negate")
  );
});
I.addProperty("null", function() {
  this.assert(
    $(this, "object") === null,
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
I.addProperty("undefined", function() {
  this.assert(
    $(this, "object") === void 0,
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
I.addProperty("NaN", function() {
  this.assert(
    Ai($(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function ul() {
  var e = $(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
Y(ul, "assertExist");
I.addProperty("exist", ul);
I.addProperty("exists", ul);
I.addProperty("empty", function() {
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
      var i = r + ".empty was passed a function " + Ki(e);
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
function cl() {
  var e = $(this, "object"), t = ke(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
Y(cl, "checkArguments");
I.addProperty("arguments", cl);
I.addProperty("Arguments", cl);
function Yi(e, t) {
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
Y(Yi, "assertEqual");
I.addMethod("equal", Yi);
I.addMethod("equals", Yi);
I.addMethod("eq", Yi);
function ll(e, t) {
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
Y(ll, "assertEql");
I.addMethod("eql", ll);
I.addMethod("eqls", ll);
function Xi(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase();
  if (n && s !== "map" && s !== "set" && new I(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    throw new Ie(a + "the argument to above must be a date", void 0, o);
  if (!Xe(e) && (n || Xe(r)))
    throw new Ie(a + "the argument to above must be a number", void 0, o);
  if (!n && s !== "date" && !Xe(r)) {
    var c = s === "string" ? "'" + r + "'" : r;
    throw new Ie(a + "expected " + c + " to be a number or a date", void 0, o);
  }
  if (n) {
    var f = "length", l;
    s === "map" || s === "set" ? (f = "size", l = r.size) : l = r.length, this.assert(
      l > e,
      "expected #{this} to have a " + f + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + f + " above #{exp}",
      e,
      l
    );
  } else
    this.assert(
      r > e,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      e
    );
}
Y(Xi, "assertAbove");
I.addMethod("above", Xi);
I.addMethod("gt", Xi);
I.addMethod("greaterThan", Xi);
function Zi(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, f = !0;
  if (n && s !== "map" && s !== "set" && new I(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to least must be a date";
  else if (!Xe(e) && (n || Xe(r)))
    c = a + "the argument to least must be a number";
  else if (!n && s !== "date" && !Xe(r)) {
    var l = s === "string" ? "'" + r + "'" : r;
    c = a + "expected " + l + " to be a number or a date";
  } else
    f = !1;
  if (f)
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
Y(Zi, "assertLeast");
I.addMethod("least", Zi);
I.addMethod("gte", Zi);
I.addMethod("greaterThanOrEqual", Zi);
function Ji(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, f = !0;
  if (n && s !== "map" && s !== "set" && new I(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to below must be a date";
  else if (!Xe(e) && (n || Xe(r)))
    c = a + "the argument to below must be a number";
  else if (!n && s !== "date" && !Xe(r)) {
    var l = s === "string" ? "'" + r + "'" : r;
    c = a + "expected " + l + " to be a number or a date";
  } else
    f = !1;
  if (f)
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
Y(Ji, "assertBelow");
I.addMethod("below", Ji);
I.addMethod("lt", Ji);
I.addMethod("lessThan", Ji);
function Qi(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, f = !0;
  if (n && s !== "map" && s !== "set" && new I(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to most must be a date";
  else if (!Xe(e) && (n || Xe(r)))
    c = a + "the argument to most must be a number";
  else if (!n && s !== "date" && !Xe(r)) {
    var l = s === "string" ? "'" + r + "'" : r;
    c = a + "expected " + l + " to be a number or a date";
  } else
    f = !1;
  if (f)
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
Y(Qi, "assertMost");
I.addMethod("most", Qi);
I.addMethod("lte", Qi);
I.addMethod("lessThanOrEqual", Qi);
I.addMethod("within", function(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "doLength"), a = $(this, "message"), o = a ? a + ": " : "", s = $(this, "ssfi"), u = ke(n).toLowerCase(), c = ke(e).toLowerCase(), f = ke(t).toLowerCase(), l, d = !0, h = c === "date" && f === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (i && u !== "map" && u !== "set" && new I(n, a, s, !0).to.have.property("length"), !i && u === "date" && (c !== "date" || f !== "date"))
    l = o + "the arguments to within must be dates";
  else if ((!Xe(e) || !Xe(t)) && (i || Xe(n)))
    l = o + "the arguments to within must be numbers";
  else if (!i && u !== "date" && !Xe(n)) {
    var m = u === "string" ? "'" + n + "'" : n;
    l = o + "expected " + m + " to be a number or a date";
  } else
    d = !1;
  if (d)
    throw new Ie(l, void 0, s);
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
function fl(e, t) {
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
  var o = Ki(e);
  o == null && (o = "an unnamed constructor"), this.assert(
    a,
    "expected #{this} to be an instance of " + o,
    "expected #{this} to not be an instance of " + o
  );
}
Y(fl, "assertInstanceOf");
I.addMethod("instanceof", fl);
I.addMethod("instanceOf", fl);
function hl(e, t, r) {
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
  var c = $(this, "deep"), f = $(this, "negate"), l = n ? Zc(o, e) : null, d = n ? l.value : o[e], h = c ? $(this, "eql") : (b, y) => b === y, m = "";
  c && (m += "deep "), i && (m += "own "), n && (m += "nested "), m += "property ";
  var p;
  i ? p = Object.prototype.hasOwnProperty.call(o, e) : n ? p = l.exists : p = Hi(o, e), (!f || arguments.length === 1) && this.assert(
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
Y(hl, "assertProperty");
I.addMethod("property", hl);
function dl(e, t, r) {
  $(this, "own", !0), hl.apply(this, arguments);
}
Y(dl, "assertOwnProperty");
I.addMethod("ownProperty", dl);
I.addMethod("haveOwnProperty", dl);
function pl(e, t, r) {
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
Y(pl, "assertOwnPropertyDescriptor");
I.addMethod("ownPropertyDescriptor", pl);
I.addMethod("haveOwnPropertyDescriptor", pl);
function ml() {
  $(this, "doLength", !0);
}
Y(ml, "assertLengthChain");
function gl(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = ke(r).toLowerCase(), i = $(this, "message"), a = $(this, "ssfi"), o = "length", s;
  switch (n) {
    case "map":
    case "set":
      o = "size", s = r.size;
      break;
    default:
      new I(r, i, a, !0).to.have.property("length"), s = r.length;
  }
  this.assert(
    s == e,
    "expected #{this} to have a " + o + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + o + " of #{act}",
    e,
    s
  );
}
Y(gl, "assertLength");
I.addChainableMethod("length", gl, ml);
I.addChainableMethod("lengthOf", gl, ml);
function vl(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object");
  this.assert(
    e.exec(r),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
Y(vl, "assertMatch");
I.addMethod("match", vl);
I.addMethod("matches", vl);
I.addMethod("string", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new I(r, n, i, !0).is.a("string"), this.assert(
    ~r.indexOf(e),
    "expected #{this} to contain " + Re(e),
    "expected #{this} to not contain " + Re(e)
  );
});
function yl(e) {
  var t = $(this, "object"), r = ke(t), n = ke(e), i = $(this, "ssfi"), a = $(this, "deep"), o, s = "", u, c = !0, f = $(this, "message");
  f = f ? f + ": " : "";
  var l = f + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (r === "Map" || r === "Set")
    s = a ? "deeply " : "", u = [], t.forEach(function(_, x) {
      u.push(x);
    }), n !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (u = al(t), n) {
      case "Array":
        if (arguments.length > 1)
          throw new Ie(l, void 0, i);
        break;
      case "Object":
        if (arguments.length > 1)
          throw new Ie(l, void 0, i);
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
    throw new Ie(f + "keys required", void 0, i);
  var d = e.length, h = $(this, "any"), m = $(this, "all"), p = e, b = a ? $(this, "eql") : (_, x) => _ === x;
  if (!h && !m && (m = !0), h && (c = p.some(function(_) {
    return u.some(function(x) {
      return b(_, x);
    });
  })), m && (c = p.every(function(_) {
    return u.some(function(x) {
      return b(_, x);
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
    p.slice(0).sort(Ci),
    u.sort(Ci),
    !0
  );
}
Y(yl, "assertKeys");
I.addMethod("keys", yl);
I.addMethod("key", yl);
function ea(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "ssfi"), a = $(this, "message"), o = $(this, "negate") || !1;
  new I(n, a, i, !0).is.a("function"), (Ri(e) || typeof e == "string") && (t = e, e = null);
  let s, u = !1;
  try {
    n();
  } catch (_) {
    u = !0, s = _;
  }
  var c = e === void 0 && t === void 0, f = !!(e && t), l = !1, d = !1;
  if (c || !c && !o) {
    var h = "an error";
    e instanceof Error ? h = "#{exp}" : e && (h = pt.getConstructorName(e));
    let _ = s;
    if (s instanceof Error)
      _ = s.toString();
    else if (typeof s == "string")
      _ = s;
    else if (s && (typeof s == "object" || typeof s == "function"))
      try {
        _ = pt.getConstructorName(s);
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
      var m = pt.compatibleInstance(s, e);
      m === o && (f && o ? l = !0 : this.assert(
        o,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (s && !o ? " but #{act} was thrown" : ""),
        e.toString(),
        s.toString()
      ));
    }
    var p = pt.compatibleConstructor(s, e);
    p === o && (f && o ? l = !0 : this.assert(
      o,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (s ? " but #{act} was thrown" : ""),
      e instanceof Error ? e.toString() : e && pt.getConstructorName(e),
      s instanceof Error ? s.toString() : s && pt.getConstructorName(s)
    ));
  }
  if (s && t !== void 0 && t !== null) {
    var b = "including";
    Ri(t) && (b = "matching");
    var y = pt.compatibleMessage(s, t);
    y === o && (f && o ? d = !0 : this.assert(
      o,
      "expected #{this} to throw error " + b + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + b + " #{exp}",
      t,
      pt.getMessage(s)
    ));
  }
  l && d && this.assert(
    o,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (s ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && pt.getConstructorName(e),
    s instanceof Error ? s.toString() : s && pt.getConstructorName(s)
  ), $(this, "object", s);
}
Y(ea, "assertThrows");
I.addMethod("throw", ea);
I.addMethod("throws", ea);
I.addMethod("Throw", ea);
function bl(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "itself"), i = typeof r == "function" && !n ? r.prototype[e] : r[e];
  this.assert(
    typeof i == "function",
    "expected #{this} to respond to " + Re(e),
    "expected #{this} to not respond to " + Re(e)
  );
}
Y(bl, "respondTo");
I.addMethod("respondTo", bl);
I.addMethod("respondsTo", bl);
I.addProperty("itself", function() {
  $(this, "itself", !0);
});
function _l(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = e(r);
  this.assert(
    n,
    "expected #{this} to satisfy " + Er(e),
    "expected #{this} to not satisfy" + Er(e),
    !$(this, "negate"),
    n
  );
}
Y(_l, "satisfy");
I.addMethod("satisfy", _l);
I.addMethod("satisfies", _l);
function wl(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new I(n, i, a, !0).is.numeric;
  let o = "A `delta` value is required for `closeTo`";
  if (t == null)
    throw new Ie(i ? `${i}: ${o}` : o, void 0, a);
  if (new I(t, i, a, !0).is.numeric, o = "A `expected` value is required for `closeTo`", e == null)
    throw new Ie(i ? `${i}: ${o}` : o, void 0, a);
  new I(e, i, a, !0).is.numeric;
  const s = /* @__PURE__ */ Y((u) => u < 0n ? -u : u, "abs");
  this.assert(
    s(n - e) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
Y(wl, "closeTo");
I.addMethod("closeTo", wl);
I.addMethod("approximately", wl);
function Vv(e, t, r, n, i) {
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
    return a.some(function(f, l) {
      return r(s, f) ? (n || a.splice(l, 1), !0) : !1;
    });
  });
}
Y(Vv, "isSubsetOf");
I.addMethod("members", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new I(r, n, i, !0).to.be.iterable, new I(e, n, i, !0).to.be.iterable;
  var a = $(this, "contains"), o = $(this, "ordered"), s, u, c;
  a ? (s = o ? "an ordered superset" : "a superset", u = "expected #{this} to be " + s + " of #{exp}", c = "expected #{this} to not be " + s + " of #{exp}") : (s = o ? "ordered members" : "members", u = "expected #{this} to have the same " + s + " as #{exp}", c = "expected #{this} to not have the same " + s + " as #{exp}");
  var f = $(this, "deep") ? $(this, "eql") : void 0;
  this.assert(
    Vv(e, r, f, a, o),
    u,
    c,
    e,
    r,
    !0
  );
});
I.addProperty("iterable", function(e) {
  e && $(this, "message", e);
  var t = $(this, "object");
  this.assert(
    t != null && t[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    t
  );
});
function Hv(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi"), a = $(this, "contains"), o = $(this, "deep"), s = $(this, "eql");
  new I(e, n, i, !0).to.be.an("array"), a ? this.assert(
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
Y(Hv, "oneOf");
I.addMethod("oneOf", Hv);
function xl(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new I(n, i, a, !0).is.a("function");
  var o;
  t ? (new I(e, i, a, !0).to.have.property(t), o = e[t]) : (new I(e, i, a, !0).is.a("function"), o = e()), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "change"), $(this, "realDelta", s !== o), this.assert(
    o !== s,
    "expected " + u + " to change",
    "expected " + u + " to not change"
  );
}
Y(xl, "assertChanges");
I.addMethod("change", xl);
I.addMethod("changes", xl);
function El(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new I(n, i, a, !0).is.a("function");
  var o;
  t ? (new I(e, i, a, !0).to.have.property(t), o = e[t]) : (new I(e, i, a, !0).is.a("function"), o = e()), new I(o, i, a, !0).is.a("number"), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "increase"), $(this, "realDelta", s - o), this.assert(
    s - o > 0,
    "expected " + u + " to increase",
    "expected " + u + " to not increase"
  );
}
Y(El, "assertIncreases");
I.addMethod("increase", El);
I.addMethod("increases", El);
function Ol(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new I(n, i, a, !0).is.a("function");
  var o;
  t ? (new I(e, i, a, !0).to.have.property(t), o = e[t]) : (new I(e, i, a, !0).is.a("function"), o = e()), new I(o, i, a, !0).is.a("number"), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "decrease"), $(this, "realDelta", o - s), this.assert(
    s - o < 0,
    "expected " + u + " to decrease",
    "expected " + u + " to not decrease"
  );
}
Y(Ol, "assertDecreases");
I.addMethod("decrease", Ol);
I.addMethod("decreases", Ol);
function Kv(e, t) {
  t && $(this, "message", t);
  var r = $(this, "deltaMsgObj"), n = $(this, "initialDeltaValue"), i = $(this, "finalDeltaValue"), a = $(this, "deltaBehavior"), o = $(this, "realDelta"), s;
  a === "change" ? s = Math.abs(i - n) === Math.abs(e) : s = o === Math.abs(e), this.assert(
    s,
    "expected " + r + " to " + a + " by " + e,
    "expected " + r + " to not " + a + " by " + e
  );
}
Y(Kv, "assertDelta");
I.addMethod("by", Kv);
I.addProperty("extensible", function() {
  var e = $(this, "object"), t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
I.addProperty("sealed", function() {
  var e = $(this, "object"), t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
I.addProperty("frozen", function() {
  var e = $(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
I.addProperty("finite", function(e) {
  var t = $(this, "object");
  this.assert(
    typeof t == "number" && isFinite(t),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function Ii(e, t) {
  return new I(e, t);
}
Y(Ii, "expect");
Ii.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "expect.fail()", new Ie(r, {
    actual: e,
    expected: t,
    operator: n
  }, Ii.fail);
};
var Yv = {};
Wc(Yv, {
  Should: () => C2,
  should: () => T2
});
function Sl() {
  function e() {
    return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new I(this.valueOf(), null, e) : new I(this, null, e);
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
    throw arguments.length < 2 && (a = n, n = void 0), a = a || "should.fail()", new Ie(a, {
      actual: n,
      expected: i,
      operator: o
    }, r.fail);
  }, r.equal = function(n, i, a) {
    new I(n, a).to.equal(i);
  }, r.Throw = function(n, i, a, o) {
    new I(n, o).to.Throw(i, a);
  }, r.exist = function(n, i) {
    new I(n, i).to.exist;
  }, r.not = {}, r.not.equal = function(n, i, a) {
    new I(n, a).to.not.equal(i);
  }, r.not.Throw = function(n, i, a, o) {
    new I(n, o).to.not.Throw(i, a);
  }, r.not.exist = function(n, i) {
    new I(n, i).to.not.exist;
  }, r.throw = r.Throw, r.not.throw = r.not.Throw, r;
}
Y(Sl, "loadShould");
var T2 = Sl, C2 = Sl;
function R(e, t) {
  var r = new I(null, null, R, !0);
  r.assert(
    e,
    t,
    "[ negation message unavailable ]"
  );
}
Y(R, "assert");
R.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "assert.fail()", new Ie(r, {
    actual: e,
    expected: t,
    operator: n
  }, R.fail);
};
R.isOk = function(e, t) {
  new I(e, t, R.isOk, !0).is.ok;
};
R.isNotOk = function(e, t) {
  new I(e, t, R.isNotOk, !0).is.not.ok;
};
R.equal = function(e, t, r) {
  var n = new I(e, r, R.equal, !0);
  n.assert(
    t == Se(n, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    t,
    e,
    !0
  );
};
R.notEqual = function(e, t, r) {
  var n = new I(e, r, R.notEqual, !0);
  n.assert(
    t != Se(n, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    t,
    e,
    !0
  );
};
R.strictEqual = function(e, t, r) {
  new I(e, r, R.strictEqual, !0).to.equal(t);
};
R.notStrictEqual = function(e, t, r) {
  new I(e, r, R.notStrictEqual, !0).to.not.equal(t);
};
R.deepEqual = R.deepStrictEqual = function(e, t, r) {
  new I(e, r, R.deepEqual, !0).to.eql(t);
};
R.notDeepEqual = function(e, t, r) {
  new I(e, r, R.notDeepEqual, !0).to.not.eql(t);
};
R.isAbove = function(e, t, r) {
  new I(e, r, R.isAbove, !0).to.be.above(t);
};
R.isAtLeast = function(e, t, r) {
  new I(e, r, R.isAtLeast, !0).to.be.least(t);
};
R.isBelow = function(e, t, r) {
  new I(e, r, R.isBelow, !0).to.be.below(t);
};
R.isAtMost = function(e, t, r) {
  new I(e, r, R.isAtMost, !0).to.be.most(t);
};
R.isTrue = function(e, t) {
  new I(e, t, R.isTrue, !0).is.true;
};
R.isNotTrue = function(e, t) {
  new I(e, t, R.isNotTrue, !0).to.not.equal(!0);
};
R.isFalse = function(e, t) {
  new I(e, t, R.isFalse, !0).is.false;
};
R.isNotFalse = function(e, t) {
  new I(e, t, R.isNotFalse, !0).to.not.equal(!1);
};
R.isNull = function(e, t) {
  new I(e, t, R.isNull, !0).to.equal(null);
};
R.isNotNull = function(e, t) {
  new I(e, t, R.isNotNull, !0).to.not.equal(null);
};
R.isNaN = function(e, t) {
  new I(e, t, R.isNaN, !0).to.be.NaN;
};
R.isNotNaN = function(e, t) {
  new I(e, t, R.isNotNaN, !0).not.to.be.NaN;
};
R.exists = function(e, t) {
  new I(e, t, R.exists, !0).to.exist;
};
R.notExists = function(e, t) {
  new I(e, t, R.notExists, !0).to.not.exist;
};
R.isUndefined = function(e, t) {
  new I(e, t, R.isUndefined, !0).to.equal(void 0);
};
R.isDefined = function(e, t) {
  new I(e, t, R.isDefined, !0).to.not.equal(void 0);
};
R.isCallable = function(e, t) {
  new I(e, t, R.isCallable, !0).is.callable;
};
R.isNotCallable = function(e, t) {
  new I(e, t, R.isNotCallable, !0).is.not.callable;
};
R.isObject = function(e, t) {
  new I(e, t, R.isObject, !0).to.be.a("object");
};
R.isNotObject = function(e, t) {
  new I(e, t, R.isNotObject, !0).to.not.be.a("object");
};
R.isArray = function(e, t) {
  new I(e, t, R.isArray, !0).to.be.an("array");
};
R.isNotArray = function(e, t) {
  new I(e, t, R.isNotArray, !0).to.not.be.an("array");
};
R.isString = function(e, t) {
  new I(e, t, R.isString, !0).to.be.a("string");
};
R.isNotString = function(e, t) {
  new I(e, t, R.isNotString, !0).to.not.be.a("string");
};
R.isNumber = function(e, t) {
  new I(e, t, R.isNumber, !0).to.be.a("number");
};
R.isNotNumber = function(e, t) {
  new I(e, t, R.isNotNumber, !0).to.not.be.a("number");
};
R.isNumeric = function(e, t) {
  new I(e, t, R.isNumeric, !0).is.numeric;
};
R.isNotNumeric = function(e, t) {
  new I(e, t, R.isNotNumeric, !0).is.not.numeric;
};
R.isFinite = function(e, t) {
  new I(e, t, R.isFinite, !0).to.be.finite;
};
R.isBoolean = function(e, t) {
  new I(e, t, R.isBoolean, !0).to.be.a("boolean");
};
R.isNotBoolean = function(e, t) {
  new I(e, t, R.isNotBoolean, !0).to.not.be.a("boolean");
};
R.typeOf = function(e, t, r) {
  new I(e, r, R.typeOf, !0).to.be.a(t);
};
R.notTypeOf = function(e, t, r) {
  new I(e, r, R.notTypeOf, !0).to.not.be.a(t);
};
R.instanceOf = function(e, t, r) {
  new I(e, r, R.instanceOf, !0).to.be.instanceOf(t);
};
R.notInstanceOf = function(e, t, r) {
  new I(e, r, R.notInstanceOf, !0).to.not.be.instanceOf(t);
};
R.include = function(e, t, r) {
  new I(e, r, R.include, !0).include(t);
};
R.notInclude = function(e, t, r) {
  new I(e, r, R.notInclude, !0).not.include(t);
};
R.deepInclude = function(e, t, r) {
  new I(e, r, R.deepInclude, !0).deep.include(t);
};
R.notDeepInclude = function(e, t, r) {
  new I(e, r, R.notDeepInclude, !0).not.deep.include(t);
};
R.nestedInclude = function(e, t, r) {
  new I(e, r, R.nestedInclude, !0).nested.include(t);
};
R.notNestedInclude = function(e, t, r) {
  new I(e, r, R.notNestedInclude, !0).not.nested.include(t);
};
R.deepNestedInclude = function(e, t, r) {
  new I(e, r, R.deepNestedInclude, !0).deep.nested.include(t);
};
R.notDeepNestedInclude = function(e, t, r) {
  new I(e, r, R.notDeepNestedInclude, !0).not.deep.nested.include(t);
};
R.ownInclude = function(e, t, r) {
  new I(e, r, R.ownInclude, !0).own.include(t);
};
R.notOwnInclude = function(e, t, r) {
  new I(e, r, R.notOwnInclude, !0).not.own.include(t);
};
R.deepOwnInclude = function(e, t, r) {
  new I(e, r, R.deepOwnInclude, !0).deep.own.include(t);
};
R.notDeepOwnInclude = function(e, t, r) {
  new I(e, r, R.notDeepOwnInclude, !0).not.deep.own.include(t);
};
R.match = function(e, t, r) {
  new I(e, r, R.match, !0).to.match(t);
};
R.notMatch = function(e, t, r) {
  new I(e, r, R.notMatch, !0).to.not.match(t);
};
R.property = function(e, t, r) {
  new I(e, r, R.property, !0).to.have.property(t);
};
R.notProperty = function(e, t, r) {
  new I(e, r, R.notProperty, !0).to.not.have.property(t);
};
R.propertyVal = function(e, t, r, n) {
  new I(e, n, R.propertyVal, !0).to.have.property(t, r);
};
R.notPropertyVal = function(e, t, r, n) {
  new I(e, n, R.notPropertyVal, !0).to.not.have.property(t, r);
};
R.deepPropertyVal = function(e, t, r, n) {
  new I(e, n, R.deepPropertyVal, !0).to.have.deep.property(t, r);
};
R.notDeepPropertyVal = function(e, t, r, n) {
  new I(e, n, R.notDeepPropertyVal, !0).to.not.have.deep.property(t, r);
};
R.ownProperty = function(e, t, r) {
  new I(e, r, R.ownProperty, !0).to.have.own.property(t);
};
R.notOwnProperty = function(e, t, r) {
  new I(e, r, R.notOwnProperty, !0).to.not.have.own.property(t);
};
R.ownPropertyVal = function(e, t, r, n) {
  new I(e, n, R.ownPropertyVal, !0).to.have.own.property(t, r);
};
R.notOwnPropertyVal = function(e, t, r, n) {
  new I(e, n, R.notOwnPropertyVal, !0).to.not.have.own.property(t, r);
};
R.deepOwnPropertyVal = function(e, t, r, n) {
  new I(e, n, R.deepOwnPropertyVal, !0).to.have.deep.own.property(t, r);
};
R.notDeepOwnPropertyVal = function(e, t, r, n) {
  new I(e, n, R.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(t, r);
};
R.nestedProperty = function(e, t, r) {
  new I(e, r, R.nestedProperty, !0).to.have.nested.property(t);
};
R.notNestedProperty = function(e, t, r) {
  new I(e, r, R.notNestedProperty, !0).to.not.have.nested.property(t);
};
R.nestedPropertyVal = function(e, t, r, n) {
  new I(e, n, R.nestedPropertyVal, !0).to.have.nested.property(t, r);
};
R.notNestedPropertyVal = function(e, t, r, n) {
  new I(e, n, R.notNestedPropertyVal, !0).to.not.have.nested.property(t, r);
};
R.deepNestedPropertyVal = function(e, t, r, n) {
  new I(e, n, R.deepNestedPropertyVal, !0).to.have.deep.nested.property(t, r);
};
R.notDeepNestedPropertyVal = function(e, t, r, n) {
  new I(e, n, R.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(t, r);
};
R.lengthOf = function(e, t, r) {
  new I(e, r, R.lengthOf, !0).to.have.lengthOf(t);
};
R.hasAnyKeys = function(e, t, r) {
  new I(e, r, R.hasAnyKeys, !0).to.have.any.keys(t);
};
R.hasAllKeys = function(e, t, r) {
  new I(e, r, R.hasAllKeys, !0).to.have.all.keys(t);
};
R.containsAllKeys = function(e, t, r) {
  new I(e, r, R.containsAllKeys, !0).to.contain.all.keys(t);
};
R.doesNotHaveAnyKeys = function(e, t, r) {
  new I(e, r, R.doesNotHaveAnyKeys, !0).to.not.have.any.keys(t);
};
R.doesNotHaveAllKeys = function(e, t, r) {
  new I(e, r, R.doesNotHaveAllKeys, !0).to.not.have.all.keys(t);
};
R.hasAnyDeepKeys = function(e, t, r) {
  new I(e, r, R.hasAnyDeepKeys, !0).to.have.any.deep.keys(t);
};
R.hasAllDeepKeys = function(e, t, r) {
  new I(e, r, R.hasAllDeepKeys, !0).to.have.all.deep.keys(t);
};
R.containsAllDeepKeys = function(e, t, r) {
  new I(e, r, R.containsAllDeepKeys, !0).to.contain.all.deep.keys(t);
};
R.doesNotHaveAnyDeepKeys = function(e, t, r) {
  new I(e, r, R.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(t);
};
R.doesNotHaveAllDeepKeys = function(e, t, r) {
  new I(e, r, R.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(t);
};
R.throws = function(e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && (r = t, t = null);
  var i = new I(e, n, R.throws, !0).to.throw(t, r);
  return Se(i, "object");
};
R.doesNotThrow = function(e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && (r = t, t = null), new I(e, n, R.doesNotThrow, !0).to.not.throw(t, r);
};
R.operator = function(e, t, r, n) {
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
        R.operator
      );
  }
  var a = new I(i, n, R.operator, !0);
  a.assert(
    Se(a, "object") === !0,
    "expected " + Re(e) + " to be " + t + " " + Re(r),
    "expected " + Re(e) + " to not be " + t + " " + Re(r)
  );
};
R.closeTo = function(e, t, r, n) {
  new I(e, n, R.closeTo, !0).to.be.closeTo(t, r);
};
R.approximately = function(e, t, r, n) {
  new I(e, n, R.approximately, !0).to.be.approximately(t, r);
};
R.sameMembers = function(e, t, r) {
  new I(e, r, R.sameMembers, !0).to.have.same.members(t);
};
R.notSameMembers = function(e, t, r) {
  new I(e, r, R.notSameMembers, !0).to.not.have.same.members(t);
};
R.sameDeepMembers = function(e, t, r) {
  new I(e, r, R.sameDeepMembers, !0).to.have.same.deep.members(t);
};
R.notSameDeepMembers = function(e, t, r) {
  new I(e, r, R.notSameDeepMembers, !0).to.not.have.same.deep.members(t);
};
R.sameOrderedMembers = function(e, t, r) {
  new I(e, r, R.sameOrderedMembers, !0).to.have.same.ordered.members(t);
};
R.notSameOrderedMembers = function(e, t, r) {
  new I(e, r, R.notSameOrderedMembers, !0).to.not.have.same.ordered.members(t);
};
R.sameDeepOrderedMembers = function(e, t, r) {
  new I(e, r, R.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(t);
};
R.notSameDeepOrderedMembers = function(e, t, r) {
  new I(e, r, R.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(t);
};
R.includeMembers = function(e, t, r) {
  new I(e, r, R.includeMembers, !0).to.include.members(t);
};
R.notIncludeMembers = function(e, t, r) {
  new I(e, r, R.notIncludeMembers, !0).to.not.include.members(t);
};
R.includeDeepMembers = function(e, t, r) {
  new I(e, r, R.includeDeepMembers, !0).to.include.deep.members(t);
};
R.notIncludeDeepMembers = function(e, t, r) {
  new I(e, r, R.notIncludeDeepMembers, !0).to.not.include.deep.members(t);
};
R.includeOrderedMembers = function(e, t, r) {
  new I(e, r, R.includeOrderedMembers, !0).to.include.ordered.members(t);
};
R.notIncludeOrderedMembers = function(e, t, r) {
  new I(e, r, R.notIncludeOrderedMembers, !0).to.not.include.ordered.members(t);
};
R.includeDeepOrderedMembers = function(e, t, r) {
  new I(e, r, R.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(t);
};
R.notIncludeDeepOrderedMembers = function(e, t, r) {
  new I(e, r, R.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(t);
};
R.oneOf = function(e, t, r) {
  new I(e, r, R.oneOf, !0).to.be.oneOf(t);
};
R.isIterable = function(e, t) {
  if (e == null || !e[Symbol.iterator])
    throw t = t ? `${t} expected ${Re(e)} to be an iterable` : `expected ${Re(e)} to be an iterable`, new Ie(
      t,
      void 0,
      R.isIterable
    );
};
R.changes = function(e, t, r, n) {
  arguments.length === 3 && typeof t == "function" && (n = r, r = null), new I(e, n, R.changes, !0).to.change(t, r);
};
R.changesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new I(e, i, R.changesBy, !0).to.change(t, r).by(n);
};
R.doesNotChange = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new I(e, n, R.doesNotChange, !0).to.not.change(t, r);
};
R.changesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new I(e, i, R.changesButNotBy, !0).to.change(t, r).but.not.by(n);
};
R.increases = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new I(e, n, R.increases, !0).to.increase(t, r);
};
R.increasesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new I(e, i, R.increasesBy, !0).to.increase(t, r).by(n);
};
R.doesNotIncrease = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new I(e, n, R.doesNotIncrease, !0).to.not.increase(t, r);
};
R.increasesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new I(e, i, R.increasesButNotBy, !0).to.increase(t, r).but.not.by(n);
};
R.decreases = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new I(e, n, R.decreases, !0).to.decrease(t, r);
};
R.decreasesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new I(e, i, R.decreasesBy, !0).to.decrease(t, r).by(n);
};
R.doesNotDecrease = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new I(e, n, R.doesNotDecrease, !0).to.not.decrease(t, r);
};
R.doesNotDecreaseBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  return new I(e, i, R.doesNotDecreaseBy, !0).to.not.decrease(t, r).by(n);
};
R.decreasesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new I(e, i, R.decreasesButNotBy, !0).to.decrease(t, r).but.not.by(n);
};
R.ifError = function(e) {
  if (e)
    throw e;
};
R.isExtensible = function(e, t) {
  new I(e, t, R.isExtensible, !0).to.be.extensible;
};
R.isNotExtensible = function(e, t) {
  new I(e, t, R.isNotExtensible, !0).to.not.be.extensible;
};
R.isSealed = function(e, t) {
  new I(e, t, R.isSealed, !0).to.be.sealed;
};
R.isNotSealed = function(e, t) {
  new I(e, t, R.isNotSealed, !0).to.not.be.sealed;
};
R.isFrozen = function(e, t) {
  new I(e, t, R.isFrozen, !0).to.be.frozen;
};
R.isNotFrozen = function(e, t) {
  new I(e, t, R.isNotFrozen, !0).to.not.be.frozen;
};
R.isEmpty = function(e, t) {
  new I(e, t, R.isEmpty, !0).to.be.empty;
};
R.isNotEmpty = function(e, t) {
  new I(e, t, R.isNotEmpty, !0).to.not.be.empty;
};
(/* @__PURE__ */ Y(function e(t, r) {
  return R[r] = R[t], e;
}, "alias"))("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty")("isCallable", "isFunction")("isNotCallable", "isNotFunction");
var hh = [];
function A2(e) {
  const t = {
    AssertionError: Ie,
    util: Ei,
    config: ht,
    expect: Ii,
    assert: R,
    Assertion: I,
    ...Yv
  };
  return ~hh.indexOf(e) || (e(t, Ei), hh.push(e)), t;
}
Y(A2, "use");
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
var xr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function WS(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var ai = { exports: {} }, Ma, dh;
function R2() {
  if (dh) return Ma;
  dh = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  Ma = function(f, l) {
    l = l || {};
    var d = typeof f;
    if (d === "string" && f.length > 0)
      return o(f);
    if (d === "number" && isFinite(f))
      return l.long ? u(f) : s(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function o(f) {
    if (f = String(f), !(f.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (l) {
        var d = parseFloat(l[1]), h = (l[2] || "ms").toLowerCase();
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
  function s(f) {
    var l = Math.abs(f);
    return l >= n ? Math.round(f / n) + "d" : l >= r ? Math.round(f / r) + "h" : l >= t ? Math.round(f / t) + "m" : l >= e ? Math.round(f / e) + "s" : f + "ms";
  }
  function u(f) {
    var l = Math.abs(f);
    return l >= n ? c(f, l, n, "day") : l >= r ? c(f, l, r, "hour") : l >= t ? c(f, l, t, "minute") : l >= e ? c(f, l, e, "second") : f + " ms";
  }
  function c(f, l, d, h) {
    var m = l >= d * 1.5;
    return Math.round(f / d) + " " + h + (m ? "s" : "");
  }
  return Ma;
}
var Da, ph;
function I2() {
  if (ph) return Da;
  ph = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = R2(), n.destroy = f, Object.keys(t).forEach((l) => {
      n[l] = t[l];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(l) {
      let d = 0;
      for (let h = 0; h < l.length; h++)
        d = (d << 5) - d + l.charCodeAt(h), d |= 0;
      return n.colors[Math.abs(d) % n.colors.length];
    }
    n.selectColor = r;
    function n(l) {
      let d, h = null, m, p;
      function b(...y) {
        if (!b.enabled)
          return;
        const _ = b, x = Number(/* @__PURE__ */ new Date()), S = x - (d || x);
        _.diff = S, _.prev = d, _.curr = x, d = x, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let C = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (A, O) => {
          if (A === "%%")
            return "%";
          C++;
          const w = n.formatters[O];
          if (typeof w == "function") {
            const N = y[C];
            A = w.call(_, N), y.splice(C, 1), C--;
          }
          return A;
        }), n.formatArgs.call(_, y), (_.log || n.log).apply(_, y);
      }
      return b.namespace = l, b.useColors = n.useColors(), b.color = n.selectColor(l), b.extend = i, b.destroy = n.destroy, Object.defineProperty(b, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (m !== n.namespaces && (m = n.namespaces, p = n.enabled(l)), p),
        set: (y) => {
          h = y;
        }
      }), typeof n.init == "function" && n.init(b), b;
    }
    function i(l, d) {
      const h = n(this.namespace + (typeof d > "u" ? ":" : d) + l);
      return h.log = this.log, h;
    }
    function a(l) {
      n.save(l), n.namespaces = l, n.names = [], n.skips = [];
      const d = (typeof l == "string" ? l : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const h of d)
        h[0] === "-" ? n.skips.push(h.slice(1)) : n.names.push(h);
    }
    function o(l, d) {
      let h = 0, m = 0, p = -1, b = 0;
      for (; h < l.length; )
        if (m < d.length && (d[m] === l[h] || d[m] === "*"))
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
      const l = [
        ...n.names,
        ...n.skips.map((d) => "-" + d)
      ].join(",");
      return n.enable(""), l;
    }
    function u(l) {
      for (const d of n.skips)
        if (o(l, d))
          return !1;
      for (const d of n.names)
        if (o(l, d))
          return !0;
      return !1;
    }
    function c(l) {
      return l instanceof Error ? l.stack || l.message : l;
    }
    function f() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return Da = e, Da;
}
var mh;
function k2() {
  return mh || (mh = 1, function(e, t) {
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
      let f = 0, l = 0;
      u[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (f++, d === "%c" && (l = f));
      }), u.splice(l, 0, c);
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
        u = t.storage.getItem("debug");
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
    e.exports = I2()(t);
    const { formatters: s } = e.exports;
    s.j = function(u) {
      try {
        return JSON.stringify(u);
      } catch (c) {
        return "[UnexpectedJSONParseError]: " + c.message;
      }
    };
  }(ai, ai.exports)), ai.exports;
}
var N2 = k2();
const GS = /* @__PURE__ */ nn(N2);
var si = { exports: {} }, Fa, gh;
function P2() {
  if (gh) return Fa;
  gh = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  Fa = function(f, l) {
    l = l || {};
    var d = typeof f;
    if (d === "string" && f.length > 0)
      return o(f);
    if (d === "number" && isFinite(f))
      return l.long ? u(f) : s(f);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(f)
    );
  };
  function o(f) {
    if (f = String(f), !(f.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        f
      );
      if (l) {
        var d = parseFloat(l[1]), h = (l[2] || "ms").toLowerCase();
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
  function s(f) {
    var l = Math.abs(f);
    return l >= n ? Math.round(f / n) + "d" : l >= r ? Math.round(f / r) + "h" : l >= t ? Math.round(f / t) + "m" : l >= e ? Math.round(f / e) + "s" : f + "ms";
  }
  function u(f) {
    var l = Math.abs(f);
    return l >= n ? c(f, l, n, "day") : l >= r ? c(f, l, r, "hour") : l >= t ? c(f, l, t, "minute") : l >= e ? c(f, l, e, "second") : f + " ms";
  }
  function c(f, l, d, h) {
    var m = l >= d * 1.5;
    return Math.round(f / d) + " " + h + (m ? "s" : "");
  }
  return Fa;
}
var La, vh;
function M2() {
  if (vh) return La;
  vh = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = P2(), n.destroy = f, Object.keys(t).forEach((l) => {
      n[l] = t[l];
    }), n.names = [], n.skips = [], n.formatters = {};
    function r(l) {
      let d = 0;
      for (let h = 0; h < l.length; h++)
        d = (d << 5) - d + l.charCodeAt(h), d |= 0;
      return n.colors[Math.abs(d) % n.colors.length];
    }
    n.selectColor = r;
    function n(l) {
      let d, h = null, m, p;
      function b(...y) {
        if (!b.enabled)
          return;
        const _ = b, x = Number(/* @__PURE__ */ new Date()), S = x - (d || x);
        _.diff = S, _.prev = d, _.curr = x, d = x, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let C = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (A, O) => {
          if (A === "%%")
            return "%";
          C++;
          const w = n.formatters[O];
          if (typeof w == "function") {
            const N = y[C];
            A = w.call(_, N), y.splice(C, 1), C--;
          }
          return A;
        }), n.formatArgs.call(_, y), (_.log || n.log).apply(_, y);
      }
      return b.namespace = l, b.useColors = n.useColors(), b.color = n.selectColor(l), b.extend = i, b.destroy = n.destroy, Object.defineProperty(b, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (m !== n.namespaces && (m = n.namespaces, p = n.enabled(l)), p),
        set: (y) => {
          h = y;
        }
      }), typeof n.init == "function" && n.init(b), b;
    }
    function i(l, d) {
      const h = n(this.namespace + (typeof d > "u" ? ":" : d) + l);
      return h.log = this.log, h;
    }
    function a(l) {
      n.save(l), n.namespaces = l, n.names = [], n.skips = [];
      const d = (typeof l == "string" ? l : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const h of d)
        h[0] === "-" ? n.skips.push(h.slice(1)) : n.names.push(h);
    }
    function o(l, d) {
      let h = 0, m = 0, p = -1, b = 0;
      for (; h < l.length; )
        if (m < d.length && (d[m] === l[h] || d[m] === "*"))
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
      const l = [
        ...n.names,
        ...n.skips.map((d) => "-" + d)
      ].join(",");
      return n.enable(""), l;
    }
    function u(l) {
      for (const d of n.skips)
        if (o(l, d))
          return !1;
      for (const d of n.names)
        if (o(l, d))
          return !0;
      return !1;
    }
    function c(l) {
      return l instanceof Error ? l.stack || l.message : l;
    }
    function f() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return n.enable(n.load()), n;
  }
  return La = e, La;
}
var yh;
function D2() {
  return yh || (yh = 1, function(e, t) {
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
      let f = 0, l = 0;
      u[0].replace(/%[a-zA-Z%]/g, (d) => {
        d !== "%%" && (f++, d === "%c" && (l = f));
      }), u.splice(l, 0, c);
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
        u = t.storage.getItem("debug");
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
    e.exports = M2()(t);
    const { formatters: s } = e.exports;
    s.j = function(u) {
      try {
        return JSON.stringify(u);
      } catch (c) {
        return "[UnexpectedJSONParseError]: " + c.message;
      }
    };
  }(si, si.exports)), si.exports;
}
var F2 = D2();
const VS = /* @__PURE__ */ nn(F2);
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
}
var rt = Uint8Array, mt = Uint16Array, Tl = Int32Array, ta = new rt([
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
]), ra = new rt([
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
]), lc = new rt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Xv = function(e, t) {
  for (var r = new mt(31), n = 0; n < 31; ++n)
    r[n] = t += 1 << e[n - 1];
  for (var i = new Tl(r[30]), n = 1; n < 30; ++n)
    for (var a = r[n]; a < r[n + 1]; ++a)
      i[a] = a - r[n] << 5 | n;
  return { b: r, r: i };
}, Zv = Xv(ta, 2), Jv = Zv.b, fc = Zv.r;
Jv[28] = 258, fc[258] = 28;
var Qv = Xv(ra, 0), L2 = Qv.b, bh = Qv.r, hc = new mt(32768);
for (var Me = 0; Me < 32768; ++Me) {
  var sr = (Me & 43690) >> 1 | (Me & 21845) << 1;
  sr = (sr & 52428) >> 2 | (sr & 13107) << 2, sr = (sr & 61680) >> 4 | (sr & 3855) << 4, hc[Me] = ((sr & 65280) >> 8 | (sr & 255) << 8) >> 1;
}
var Ut = function(e, t, r) {
  for (var n = e.length, i = 0, a = new mt(t); i < n; ++i)
    e[i] && ++a[e[i] - 1];
  var o = new mt(t);
  for (i = 1; i < t; ++i)
    o[i] = o[i - 1] + a[i - 1] << 1;
  var s;
  if (r) {
    s = new mt(1 << t);
    var u = 15 - t;
    for (i = 0; i < n; ++i)
      if (e[i])
        for (var c = i << 4 | e[i], f = t - e[i], l = o[e[i] - 1]++ << f, d = l | (1 << f) - 1; l <= d; ++l)
          s[hc[l] >> u] = c;
  } else
    for (s = new mt(n), i = 0; i < n; ++i)
      e[i] && (s[i] = hc[o[e[i] - 1]++] >> 15 - e[i]);
  return s;
}, mr = new rt(288);
for (var Me = 0; Me < 144; ++Me)
  mr[Me] = 8;
for (var Me = 144; Me < 256; ++Me)
  mr[Me] = 9;
for (var Me = 256; Me < 280; ++Me)
  mr[Me] = 7;
for (var Me = 280; Me < 288; ++Me)
  mr[Me] = 8;
var Pn = new rt(32);
for (var Me = 0; Me < 32; ++Me)
  Pn[Me] = 5;
var B2 = /* @__PURE__ */ Ut(mr, 9, 0), j2 = /* @__PURE__ */ Ut(mr, 9, 1), z2 = /* @__PURE__ */ Ut(Pn, 5, 0), q2 = /* @__PURE__ */ Ut(Pn, 5, 1), Ba = function(e) {
  for (var t = e[0], r = 1; r < e.length; ++r)
    e[r] > t && (t = e[r]);
  return t;
}, Et = function(e, t, r) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8) >> (t & 7) & r;
}, ja = function(e, t) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (t & 7);
}, Cl = function(e) {
  return (e + 7) / 8 | 0;
}, ey = function(e, t, r) {
  return (r == null || r > e.length) && (r = e.length), new rt(e.subarray(t, r));
}, U2 = [
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
], Ct = function(e, t, r) {
  var n = new Error(t || U2[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, Ct), !r)
    throw n;
  return n;
}, $2 = function(e, t, r, n) {
  var i = e.length, a = 0;
  if (!i || t.f && !t.l)
    return r || new rt(0);
  var o = !r, s = o || t.i != 2, u = t.i;
  o && (r = new rt(i * 3));
  var c = function(le) {
    var we = r.length;
    if (le > we) {
      var xe = new rt(Math.max(we * 2, le));
      xe.set(r), r = xe;
    }
  }, f = t.f || 0, l = t.p || 0, d = t.b || 0, h = t.l, m = t.d, p = t.m, b = t.n, y = i * 8;
  do {
    if (!h) {
      f = Et(e, l, 1);
      var _ = Et(e, l + 1, 3);
      if (l += 3, _)
        if (_ == 1)
          h = j2, m = q2, p = 9, b = 5;
        else if (_ == 2) {
          var B = Et(e, l, 31) + 257, A = Et(e, l + 10, 15) + 4, O = B + Et(e, l + 5, 31) + 1;
          l += 14;
          for (var w = new rt(O), N = new rt(19), z = 0; z < A; ++z)
            N[lc[z]] = Et(e, l + z * 3, 7);
          l += A * 3;
          for (var E = Ba(N), F = (1 << E) - 1, g = Ut(N, E, 1), z = 0; z < O; ) {
            var q = g[Et(e, l, F)];
            l += q & 15;
            var x = q >> 4;
            if (x < 16)
              w[z++] = x;
            else {
              var ie = 0, D = 0;
              for (x == 16 ? (D = 3 + Et(e, l, 3), l += 2, ie = w[z - 1]) : x == 17 ? (D = 3 + Et(e, l, 7), l += 3) : x == 18 && (D = 11 + Et(e, l, 127), l += 7); D--; )
                w[z++] = ie;
            }
          }
          var Q = w.subarray(0, B), L = w.subarray(B);
          p = Ba(Q), b = Ba(L), h = Ut(Q, p, 1), m = Ut(L, b, 1);
        } else
          Ct(1);
      else {
        var x = Cl(l) + 4, S = e[x - 4] | e[x - 3] << 8, C = x + S;
        if (C > i) {
          u && Ct(0);
          break;
        }
        s && c(d + S), r.set(e.subarray(x, C), d), t.b = d += S, t.p = l = C * 8, t.f = f;
        continue;
      }
      if (l > y) {
        u && Ct(0);
        break;
      }
    }
    s && c(d + 131072);
    for (var re = (1 << p) - 1, P = (1 << b) - 1, M = l; ; M = l) {
      var ie = h[ja(e, l) & re], K = ie >> 4;
      if (l += ie & 15, l > y) {
        u && Ct(0);
        break;
      }
      if (ie || Ct(2), K < 256)
        r[d++] = K;
      else if (K == 256) {
        M = l, h = null;
        break;
      } else {
        var ee = K - 254;
        if (K > 264) {
          var z = K - 257, H = ta[z];
          ee = Et(e, l, (1 << H) - 1) + Jv[z], l += H;
        }
        var pe = m[ja(e, l) & P], Ee = pe >> 4;
        pe || Ct(3), l += pe & 15;
        var L = L2[Ee];
        if (Ee > 3) {
          var H = ra[Ee];
          L += ja(e, l) & (1 << H) - 1, l += H;
        }
        if (l > y) {
          u && Ct(0);
          break;
        }
        s && c(d + 131072);
        var ce = d + ee;
        if (d < L) {
          var fe = a - L, ve = Math.min(L, ce);
          for (fe + d < 0 && Ct(3); d < ve; ++d)
            r[d] = n[fe + d];
        }
        for (; d < ce; ++d)
          r[d] = r[d - L];
      }
    }
    t.l = h, t.p = M, t.b = d, t.f = f, h && (f = 1, t.m = p, t.d = m, t.n = b);
  } while (!f);
  return d != r.length && o ? ey(r, 0, d) : r.subarray(0, d);
}, Jt = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8;
}, fn = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8, e[n + 2] |= r >> 16;
}, za = function(e, t) {
  for (var r = [], n = 0; n < e.length; ++n)
    e[n] && r.push({ s: n, f: e[n] });
  var i = r.length, a = r.slice();
  if (!i)
    return { t: ry, l: 0 };
  if (i == 1) {
    var o = new rt(r[0].s + 1);
    return o[r[0].s] = 1, { t: o, l: 1 };
  }
  r.sort(function(C, B) {
    return C.f - B.f;
  }), r.push({ s: -1, f: 25001 });
  var s = r[0], u = r[1], c = 0, f = 1, l = 2;
  for (r[0] = { s: -1, f: s.f + u.f, l: s, r: u }; f != i - 1; )
    s = r[r[c].f < r[l].f ? c++ : l++], u = r[c != f && r[c].f < r[l].f ? c++ : l++], r[f++] = { s: -1, f: s.f + u.f, l: s, r: u };
  for (var d = a[0].s, n = 1; n < i; ++n)
    a[n].s > d && (d = a[n].s);
  var h = new mt(d + 1), m = dc(r[f - 1], h, 0);
  if (m > t) {
    var n = 0, p = 0, b = m - t, y = 1 << b;
    for (a.sort(function(B, A) {
      return h[A.s] - h[B.s] || B.f - A.f;
    }); n < i; ++n) {
      var _ = a[n].s;
      if (h[_] > t)
        p += y - (1 << m - h[_]), h[_] = t;
      else
        break;
    }
    for (p >>= b; p > 0; ) {
      var x = a[n].s;
      h[x] < t ? p -= 1 << t - h[x]++ - 1 : ++n;
    }
    for (; n >= 0 && p; --n) {
      var S = a[n].s;
      h[S] == t && (--h[S], ++p);
    }
    m = t;
  }
  return { t: new rt(h), l: m };
}, dc = function(e, t, r) {
  return e.s == -1 ? Math.max(dc(e.l, t, r + 1), dc(e.r, t, r + 1)) : t[e.s] = r;
}, _h = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var r = new mt(++t), n = 0, i = e[0], a = 1, o = function(u) {
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
}, hn = function(e, t) {
  for (var r = 0, n = 0; n < t.length; ++n)
    r += e[n] * t[n];
  return r;
}, ty = function(e, t, r) {
  var n = r.length, i = Cl(t + 2);
  e[i] = n & 255, e[i + 1] = n >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
  for (var a = 0; a < n; ++a)
    e[i + a + 4] = r[a];
  return (i + 4 + n) * 8;
}, wh = function(e, t, r, n, i, a, o, s, u, c, f) {
  Jt(t, f++, r), ++i[256];
  for (var l = za(i, 15), d = l.t, h = l.l, m = za(a, 15), p = m.t, b = m.l, y = _h(d), _ = y.c, x = y.n, S = _h(p), C = S.c, B = S.n, A = new mt(19), O = 0; O < _.length; ++O)
    ++A[_[O] & 31];
  for (var O = 0; O < C.length; ++O)
    ++A[C[O] & 31];
  for (var w = za(A, 7), N = w.t, z = w.l, E = 19; E > 4 && !N[lc[E - 1]]; --E)
    ;
  var F = c + 5 << 3, g = hn(i, mr) + hn(a, Pn) + o, q = hn(i, d) + hn(a, p) + o + 14 + 3 * E + hn(A, N) + 2 * A[16] + 3 * A[17] + 7 * A[18];
  if (u >= 0 && F <= g && F <= q)
    return ty(t, f, e.subarray(u, u + c));
  var ie, D, Q, L;
  if (Jt(t, f, 1 + (q < g)), f += 2, q < g) {
    ie = Ut(d, h, 0), D = d, Q = Ut(p, b, 0), L = p;
    var re = Ut(N, z, 0);
    Jt(t, f, x - 257), Jt(t, f + 5, B - 1), Jt(t, f + 10, E - 4), f += 14;
    for (var O = 0; O < E; ++O)
      Jt(t, f + 3 * O, N[lc[O]]);
    f += 3 * E;
    for (var P = [_, C], M = 0; M < 2; ++M)
      for (var K = P[M], O = 0; O < K.length; ++O) {
        var ee = K[O] & 31;
        Jt(t, f, re[ee]), f += N[ee], ee > 15 && (Jt(t, f, K[O] >> 5 & 127), f += K[O] >> 12);
      }
  } else
    ie = B2, D = mr, Q = z2, L = Pn;
  for (var O = 0; O < s; ++O) {
    var H = n[O];
    if (H > 255) {
      var ee = H >> 18 & 31;
      fn(t, f, ie[ee + 257]), f += D[ee + 257], ee > 7 && (Jt(t, f, H >> 23 & 31), f += ta[ee]);
      var pe = H & 31;
      fn(t, f, Q[pe]), f += L[pe], pe > 3 && (fn(t, f, H >> 5 & 8191), f += ra[pe]);
    } else
      fn(t, f, ie[H]), f += D[H];
  }
  return fn(t, f, ie[256]), f + D[256];
}, W2 = /* @__PURE__ */ new Tl([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), ry = /* @__PURE__ */ new rt(0), G2 = function(e, t, r, n, i, a) {
  var o = a.z || e.length, s = new rt(n + o + 5 * (1 + Math.ceil(o / 7e3)) + i), u = s.subarray(n, s.length - i), c = a.l, f = (a.r || 0) & 7;
  if (t) {
    f && (u[0] = a.r >> 3);
    for (var l = W2[t - 1], d = l >> 13, h = l & 8191, m = (1 << r) - 1, p = a.p || new mt(32768), b = a.h || new mt(m + 1), y = Math.ceil(r / 3), _ = 2 * y, x = function(v) {
      return (e[v] ^ e[v + 1] << y ^ e[v + 2] << _) & m;
    }, S = new Tl(25e3), C = new mt(288), B = new mt(32), A = 0, O = 0, w = a.i || 0, N = 0, z = a.w || 0, E = 0; w + 2 < o; ++w) {
      var F = x(w), g = w & 32767, q = b[F];
      if (p[g] = q, b[F] = g, z <= w) {
        var ie = o - w;
        if ((A > 7e3 || N > 24576) && (ie > 423 || !c)) {
          f = wh(e, u, 0, S, C, B, O, N, E, w - E, f), N = A = O = 0, E = w;
          for (var D = 0; D < 286; ++D)
            C[D] = 0;
          for (var D = 0; D < 30; ++D)
            B[D] = 0;
        }
        var Q = 2, L = 0, re = h, P = g - q & 32767;
        if (ie > 2 && F == x(w - P))
          for (var M = Math.min(d, ie) - 1, K = Math.min(32767, w), ee = Math.min(258, ie); P <= K && --re && g != q; ) {
            if (e[w + Q] == e[w + Q - P]) {
              for (var H = 0; H < ee && e[w + H] == e[w + H - P]; ++H)
                ;
              if (H > Q) {
                if (Q = H, L = P, H > M)
                  break;
                for (var pe = Math.min(P, H - 2), Ee = 0, D = 0; D < pe; ++D) {
                  var ce = w - P + D & 32767, fe = p[ce], ve = ce - fe & 32767;
                  ve > Ee && (Ee = ve, q = ce);
                }
              }
            }
            g = q, q = p[g], P += g - q & 32767;
          }
        if (L) {
          S[N++] = 268435456 | fc[Q] << 18 | bh[L];
          var le = fc[Q] & 31, we = bh[L] & 31;
          O += ta[le] + ra[we], ++C[257 + le], ++B[we], z = w + Q, ++A;
        } else
          S[N++] = e[w], ++C[e[w]];
      }
    }
    for (w = Math.max(w, z); w < o; ++w)
      S[N++] = e[w], ++C[e[w]];
    f = wh(e, u, c, S, C, B, O, N, E, w - E, f), c || (a.r = f & 7 | u[f / 8 | 0] << 3, f -= 7, a.h = b, a.p = p, a.i = w, a.w = z);
  } else {
    for (var w = a.w || 0; w < o + c; w += 65535) {
      var xe = w + 65535;
      xe >= o && (u[f / 8 | 0] = c, xe = o), f = ty(u, f + 1, e.subarray(w, xe));
    }
    a.i = o;
  }
  return ey(s, 0, n + Cl(f) + i);
}, ny = function() {
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
}, V2 = function(e, t, r, n, i) {
  if (!i && (i = { l: 1 }, t.dictionary)) {
    var a = t.dictionary.subarray(-32768), o = new rt(a.length + e.length);
    o.set(a), o.set(e, a.length), e = o, i.w = a.length;
  }
  return G2(e, t.level == null ? 6 : t.level, t.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, n, i);
}, iy = function(e, t, r) {
  for (; r; ++t)
    e[t] = r, r >>>= 8;
}, H2 = function(e, t) {
  var r = t.level, n = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = n << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
    var i = ny();
    i.p(t.dictionary), iy(e, 2, i.d());
  }
}, K2 = function(e, t) {
  return ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) && Ct(6, "invalid zlib data"), (e[1] >> 5 & 1) == 1 && Ct(6, "invalid zlib data: " + (e[1] & 32 ? "need" : "unexpected") + " dictionary"), (e[1] >> 3 & 4) + 2;
};
function HS(e, t) {
  t || (t = {});
  var r = ny();
  r.p(e);
  var n = V2(e, t, t.dictionary ? 6 : 2, 4);
  return H2(n, t), iy(n, n.length - 4, r.d()), n;
}
function KS(e, t) {
  return $2(e.subarray(K2(e), -4), { i: 2 }, t, t);
}
var Y2 = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), X2 = 0;
try {
  Y2.decode(ry, { stream: !0 }), X2 = 1;
} catch {
}
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: ay,
  setPrototypeOf: xh,
  isFrozen: Z2,
  getPrototypeOf: J2,
  getOwnPropertyDescriptor: Q2
} = Object;
let {
  freeze: st,
  seal: _t,
  create: sy
} = Object, {
  apply: pc,
  construct: mc
} = typeof Reflect < "u" && Reflect;
st || (st = function(t) {
  return t;
});
_t || (_t = function(t) {
  return t;
});
pc || (pc = function(t, r, n) {
  return t.apply(r, n);
});
mc || (mc = function(t, r) {
  return new t(...r);
});
const oi = ot(Array.prototype.forEach), ex = ot(Array.prototype.lastIndexOf), Eh = ot(Array.prototype.pop), dn = ot(Array.prototype.push), tx = ot(Array.prototype.splice), mi = ot(String.prototype.toLowerCase), qa = ot(String.prototype.toString), Oh = ot(String.prototype.match), pn = ot(String.prototype.replace), rx = ot(String.prototype.indexOf), nx = ot(String.prototype.trim), Tt = ot(Object.prototype.hasOwnProperty), at = ot(RegExp.prototype.test), mn = ix(TypeError);
function ot(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return pc(e, t, n);
  };
}
function ix(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return mc(e, r);
  };
}
function Te(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : mi;
  xh && xh(e, null);
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const a = r(i);
      a !== i && (Z2(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function ax(e) {
  for (let t = 0; t < e.length; t++)
    Tt(e, t) || (e[t] = null);
  return e;
}
function yr(e) {
  const t = sy(null);
  for (const [r, n] of ay(e))
    Tt(e, r) && (Array.isArray(n) ? t[r] = ax(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = yr(n) : t[r] = n);
  return t;
}
function gn(e, t) {
  for (; e !== null; ) {
    const n = Q2(e, t);
    if (n) {
      if (n.get)
        return ot(n.get);
      if (typeof n.value == "function")
        return ot(n.value);
    }
    e = J2(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Sh = st(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ua = st(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $a = st(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sx = st(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Wa = st(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ox = st(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Th = st(["#text"]), Ch = st(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ga = st(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ah = st(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ui = st(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ux = _t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), cx = _t(/<%[\w\W]*|[\w\W]*%>/gm), lx = _t(/\$\{[\w\W]*/gm), fx = _t(/^data-[\-\w.\u00B7-\uFFFF]+$/), hx = _t(/^aria-[\-\w]+$/), oy = _t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dx = _t(/^(?:\w+script|data):/i), px = _t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), uy = _t(/^html$/i), mx = _t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Rh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: hx,
  ATTR_WHITESPACE: px,
  CUSTOM_ELEMENT: mx,
  DATA_ATTR: fx,
  DOCTYPE_NAME: uy,
  ERB_EXPR: cx,
  IS_ALLOWED_URI: oy,
  IS_SCRIPT_OR_DATA: dx,
  MUSTACHE_EXPR: ux,
  TMPLIT_EXPR: lx
});
const vn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, gx = function() {
  return typeof window > "u" ? null : window;
}, vx = function(t, r) {
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
}, Ih = function() {
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
function cy() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gx();
  const t = (be) => cy(be);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== vn.document || !e.Element)
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
    NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: l,
    DOMParser: d,
    trustedTypes: h
  } = e, m = u.prototype, p = gn(m, "cloneNode"), b = gn(m, "remove"), y = gn(m, "nextSibling"), _ = gn(m, "childNodes"), x = gn(m, "parentNode");
  if (typeof o == "function") {
    const be = r.createElement("template");
    be.content && be.content.ownerDocument && (r = be.content.ownerDocument);
  }
  let S, C = "";
  const {
    implementation: B,
    createNodeIterator: A,
    createDocumentFragment: O,
    getElementsByTagName: w
  } = r, {
    importNode: N
  } = n;
  let z = Ih();
  t.isSupported = typeof ay == "function" && typeof x == "function" && B && B.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: E,
    ERB_EXPR: F,
    TMPLIT_EXPR: g,
    DATA_ATTR: q,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: D,
    ATTR_WHITESPACE: Q,
    CUSTOM_ELEMENT: L
  } = Rh;
  let {
    IS_ALLOWED_URI: re
  } = Rh, P = null;
  const M = Te({}, [...Sh, ...Ua, ...$a, ...Wa, ...Th]);
  let K = null;
  const ee = Te({}, [...Ch, ...Ga, ...Ah, ...ui]);
  let H = Object.seal(sy(null, {
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
  })), pe = null, Ee = null, ce = !0, fe = !0, ve = !1, le = !0, we = !1, xe = !0, v = !1, X = !1, W = !1, k = !1, T = !1, j = !1, te = !0, ne = !1;
  const G = "user-content-";
  let V = !0, J = !1, Z = {}, ae = null;
  const de = Te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _e = null;
  const Fe = Te({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ve = null;
  const Ne = Te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Le = "http://www.w3.org/1998/Math/MathML", Ce = "http://www.w3.org/2000/svg", He = "http://www.w3.org/1999/xhtml";
  let Ft = He, dt = !1, Lr = null;
  const wa = Te({}, [Le, Ce, He], qa);
  let Br = Te({}, ["mi", "mo", "mn", "ms", "mtext"]), jr = Te({}, ["annotation-xml"]);
  const ti = Te({}, ["title", "style", "font", "a", "script"]);
  let wt = null;
  const zr = ["application/xhtml+xml", "text/html"], d0 = "text/html";
  let Ke = null, qr = null;
  const p0 = r.createElement("form"), af = function(U) {
    return U instanceof RegExp || U instanceof Function;
  }, xa = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(qr && qr === U)) {
      if ((!U || typeof U != "object") && (U = {}), U = yr(U), wt = // eslint-disable-next-line unicorn/prefer-includes
      zr.indexOf(U.PARSER_MEDIA_TYPE) === -1 ? d0 : U.PARSER_MEDIA_TYPE, Ke = wt === "application/xhtml+xml" ? qa : mi, P = Tt(U, "ALLOWED_TAGS") ? Te({}, U.ALLOWED_TAGS, Ke) : M, K = Tt(U, "ALLOWED_ATTR") ? Te({}, U.ALLOWED_ATTR, Ke) : ee, Lr = Tt(U, "ALLOWED_NAMESPACES") ? Te({}, U.ALLOWED_NAMESPACES, qa) : wa, Ve = Tt(U, "ADD_URI_SAFE_ATTR") ? Te(yr(Ne), U.ADD_URI_SAFE_ATTR, Ke) : Ne, _e = Tt(U, "ADD_DATA_URI_TAGS") ? Te(yr(Fe), U.ADD_DATA_URI_TAGS, Ke) : Fe, ae = Tt(U, "FORBID_CONTENTS") ? Te({}, U.FORBID_CONTENTS, Ke) : de, pe = Tt(U, "FORBID_TAGS") ? Te({}, U.FORBID_TAGS, Ke) : {}, Ee = Tt(U, "FORBID_ATTR") ? Te({}, U.FORBID_ATTR, Ke) : {}, Z = Tt(U, "USE_PROFILES") ? U.USE_PROFILES : !1, ce = U.ALLOW_ARIA_ATTR !== !1, fe = U.ALLOW_DATA_ATTR !== !1, ve = U.ALLOW_UNKNOWN_PROTOCOLS || !1, le = U.ALLOW_SELF_CLOSE_IN_ATTR !== !1, we = U.SAFE_FOR_TEMPLATES || !1, xe = U.SAFE_FOR_XML !== !1, v = U.WHOLE_DOCUMENT || !1, k = U.RETURN_DOM || !1, T = U.RETURN_DOM_FRAGMENT || !1, j = U.RETURN_TRUSTED_TYPE || !1, W = U.FORCE_BODY || !1, te = U.SANITIZE_DOM !== !1, ne = U.SANITIZE_NAMED_PROPS || !1, V = U.KEEP_CONTENT !== !1, J = U.IN_PLACE || !1, re = U.ALLOWED_URI_REGEXP || oy, Ft = U.NAMESPACE || He, Br = U.MATHML_TEXT_INTEGRATION_POINTS || Br, jr = U.HTML_INTEGRATION_POINTS || jr, H = U.CUSTOM_ELEMENT_HANDLING || {}, U.CUSTOM_ELEMENT_HANDLING && af(U.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = U.CUSTOM_ELEMENT_HANDLING.tagNameCheck), U.CUSTOM_ELEMENT_HANDLING && af(U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), U.CUSTOM_ELEMENT_HANDLING && typeof U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), we && (fe = !1), T && (k = !0), Z && (P = Te({}, Th), K = [], Z.html === !0 && (Te(P, Sh), Te(K, Ch)), Z.svg === !0 && (Te(P, Ua), Te(K, Ga), Te(K, ui)), Z.svgFilters === !0 && (Te(P, $a), Te(K, Ga), Te(K, ui)), Z.mathMl === !0 && (Te(P, Wa), Te(K, Ah), Te(K, ui))), U.ADD_TAGS && (P === M && (P = yr(P)), Te(P, U.ADD_TAGS, Ke)), U.ADD_ATTR && (K === ee && (K = yr(K)), Te(K, U.ADD_ATTR, Ke)), U.ADD_URI_SAFE_ATTR && Te(Ve, U.ADD_URI_SAFE_ATTR, Ke), U.FORBID_CONTENTS && (ae === de && (ae = yr(ae)), Te(ae, U.FORBID_CONTENTS, Ke)), V && (P["#text"] = !0), v && Te(P, ["html", "head", "body"]), P.table && (Te(P, ["tbody"]), delete pe.tbody), U.TRUSTED_TYPES_POLICY) {
        if (typeof U.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof U.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = U.TRUSTED_TYPES_POLICY, C = S.createHTML("");
      } else
        S === void 0 && (S = vx(h, i)), S !== null && typeof C == "string" && (C = S.createHTML(""));
      st && st(U), qr = U;
    }
  }, sf = Te({}, [...Ua, ...$a, ...sx]), of = Te({}, [...Wa, ...ox]), m0 = function(U) {
    let ue = x(U);
    (!ue || !ue.tagName) && (ue = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const me = mi(U.tagName), Be = mi(ue.tagName);
    return Lr[U.namespaceURI] ? U.namespaceURI === Ce ? ue.namespaceURI === He ? me === "svg" : ue.namespaceURI === Le ? me === "svg" && (Be === "annotation-xml" || Br[Be]) : !!sf[me] : U.namespaceURI === Le ? ue.namespaceURI === He ? me === "math" : ue.namespaceURI === Ce ? me === "math" && jr[Be] : !!of[me] : U.namespaceURI === He ? ue.namespaceURI === Ce && !jr[Be] || ue.namespaceURI === Le && !Br[Be] ? !1 : !of[me] && (ti[me] || !sf[me]) : !!(wt === "application/xhtml+xml" && Lr[U.namespaceURI]) : !1;
  }, Lt = function(U) {
    dn(t.removed, {
      element: U
    });
    try {
      x(U).removeChild(U);
    } catch {
      b(U);
    }
  }, ri = function(U, ue) {
    try {
      dn(t.removed, {
        attribute: ue.getAttributeNode(U),
        from: ue
      });
    } catch {
      dn(t.removed, {
        attribute: null,
        from: ue
      });
    }
    if (ue.removeAttribute(U), U === "is")
      if (k || T)
        try {
          Lt(ue);
        } catch {
        }
      else
        try {
          ue.setAttribute(U, "");
        } catch {
        }
  }, uf = function(U) {
    let ue = null, me = null;
    if (W)
      U = "<remove></remove>" + U;
    else {
      const Je = Oh(U, /^[\r\n\t ]+/);
      me = Je && Je[0];
    }
    wt === "application/xhtml+xml" && Ft === He && (U = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + U + "</body></html>");
    const Be = S ? S.createHTML(U) : U;
    if (Ft === He)
      try {
        ue = new d().parseFromString(Be, wt);
      } catch {
      }
    if (!ue || !ue.documentElement) {
      ue = B.createDocument(Ft, "template", null);
      try {
        ue.documentElement.innerHTML = dt ? C : Be;
      } catch {
      }
    }
    const tt = ue.body || ue.documentElement;
    return U && me && tt.insertBefore(r.createTextNode(me), tt.childNodes[0] || null), Ft === He ? w.call(ue, v ? "html" : "body")[0] : v ? ue.documentElement : tt;
  }, cf = function(U) {
    return A.call(
      U.ownerDocument || U,
      U,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ea = function(U) {
    return U instanceof l && (typeof U.nodeName != "string" || typeof U.textContent != "string" || typeof U.removeChild != "function" || !(U.attributes instanceof f) || typeof U.removeAttribute != "function" || typeof U.setAttribute != "function" || typeof U.namespaceURI != "string" || typeof U.insertBefore != "function" || typeof U.hasChildNodes != "function");
  }, lf = function(U) {
    return typeof s == "function" && U instanceof s;
  };
  function Xt(be, U, ue) {
    oi(be, (me) => {
      me.call(t, U, ue, qr);
    });
  }
  const ff = function(U) {
    let ue = null;
    if (Xt(z.beforeSanitizeElements, U, null), Ea(U))
      return Lt(U), !0;
    const me = Ke(U.nodeName);
    if (Xt(z.uponSanitizeElement, U, {
      tagName: me,
      allowedTags: P
    }), U.hasChildNodes() && !lf(U.firstElementChild) && at(/<[/\w]/g, U.innerHTML) && at(/<[/\w]/g, U.textContent) || U.nodeType === vn.progressingInstruction || xe && U.nodeType === vn.comment && at(/<[/\w]/g, U.data))
      return Lt(U), !0;
    if (!P[me] || pe[me]) {
      if (!pe[me] && df(me) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, me) || H.tagNameCheck instanceof Function && H.tagNameCheck(me)))
        return !1;
      if (V && !ae[me]) {
        const Be = x(U) || U.parentNode, tt = _(U) || U.childNodes;
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
    return U instanceof u && !m0(U) || (me === "noscript" || me === "noembed" || me === "noframes") && at(/<\/no(script|embed|frames)/i, U.innerHTML) ? (Lt(U), !0) : (we && U.nodeType === vn.text && (ue = U.textContent, oi([E, F, g], (Be) => {
      ue = pn(ue, Be, " ");
    }), U.textContent !== ue && (dn(t.removed, {
      element: U.cloneNode()
    }), U.textContent = ue)), Xt(z.afterSanitizeElements, U, null), !1);
  }, hf = function(U, ue, me) {
    if (te && (ue === "id" || ue === "name") && (me in r || me in p0))
      return !1;
    if (!(fe && !Ee[ue] && at(q, ue))) {
      if (!(ce && at(ie, ue))) {
        if (!K[ue] || Ee[ue]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(df(U) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, U) || H.tagNameCheck instanceof Function && H.tagNameCheck(U)) && (H.attributeNameCheck instanceof RegExp && at(H.attributeNameCheck, ue) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(ue)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ue === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, me) || H.tagNameCheck instanceof Function && H.tagNameCheck(me)))
          ) return !1;
        } else if (!Ve[ue]) {
          if (!at(re, pn(me, Q, ""))) {
            if (!((ue === "src" || ue === "xlink:href" || ue === "href") && U !== "script" && rx(me, "data:") === 0 && _e[U])) {
              if (!(ve && !at(D, pn(me, Q, "")))) {
                if (me)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, df = function(U) {
    return U !== "annotation-xml" && Oh(U, L);
  }, pf = function(U) {
    Xt(z.beforeSanitizeAttributes, U, null);
    const {
      attributes: ue
    } = U;
    if (!ue || Ea(U))
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
      } = tt, cn = Ke(Je);
      let it = Je === "value" ? Bt : nx(Bt);
      if (me.attrName = cn, me.attrValue = it, me.keepAttr = !0, me.forceKeepAttr = void 0, Xt(z.uponSanitizeAttribute, U, me), it = me.attrValue, ne && (cn === "id" || cn === "name") && (ri(Je, U), it = G + it), xe && at(/((--!?|])>)|<\/(style|title)/i, it)) {
        ri(Je, U);
        continue;
      }
      if (me.forceKeepAttr || (ri(Je, U), !me.keepAttr))
        continue;
      if (!le && at(/\/>/i, it)) {
        ri(Je, U);
        continue;
      }
      we && oi([E, F, g], (gf) => {
        it = pn(it, gf, " ");
      });
      const mf = Ke(U.nodeName);
      if (hf(mf, cn, it)) {
        if (S && typeof h == "object" && typeof h.getAttributeType == "function" && !lt)
          switch (h.getAttributeType(mf, cn)) {
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
          lt ? U.setAttributeNS(lt, Je, it) : U.setAttribute(Je, it), Ea(U) ? Lt(U) : Eh(t.removed);
        } catch {
        }
      }
    }
    Xt(z.afterSanitizeAttributes, U, null);
  }, g0 = function be(U) {
    let ue = null;
    const me = cf(U);
    for (Xt(z.beforeSanitizeShadowDOM, U, null); ue = me.nextNode(); )
      Xt(z.uponSanitizeShadowNode, ue, null), ff(ue), pf(ue), ue.content instanceof a && be(ue.content);
    Xt(z.afterSanitizeShadowDOM, U, null);
  };
  return t.sanitize = function(be) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ue = null, me = null, Be = null, tt = null;
    if (dt = !be, dt && (be = "<!-->"), typeof be != "string" && !lf(be))
      if (typeof be.toString == "function") {
        if (be = be.toString(), typeof be != "string")
          throw mn("dirty is not a string, aborting");
      } else
        throw mn("toString is not a function");
    if (!t.isSupported)
      return be;
    if (X || xa(U), t.removed = [], typeof be == "string" && (J = !1), J) {
      if (be.nodeName) {
        const Bt = Ke(be.nodeName);
        if (!P[Bt] || pe[Bt])
          throw mn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (be instanceof s)
      ue = uf("<!---->"), me = ue.ownerDocument.importNode(be, !0), me.nodeType === vn.element && me.nodeName === "BODY" || me.nodeName === "HTML" ? ue = me : ue.appendChild(me);
    else {
      if (!k && !we && !v && // eslint-disable-next-line unicorn/prefer-includes
      be.indexOf("<") === -1)
        return S && j ? S.createHTML(be) : be;
      if (ue = uf(be), !ue)
        return k ? null : j ? C : "";
    }
    ue && W && Lt(ue.firstChild);
    const Je = cf(J ? be : ue);
    for (; Be = Je.nextNode(); )
      ff(Be), pf(Be), Be.content instanceof a && g0(Be.content);
    if (J)
      return be;
    if (k) {
      if (T)
        for (tt = O.call(ue.ownerDocument); ue.firstChild; )
          tt.appendChild(ue.firstChild);
      else
        tt = ue;
      return (K.shadowroot || K.shadowrootmode) && (tt = N.call(n, tt, !0)), tt;
    }
    let lt = v ? ue.outerHTML : ue.innerHTML;
    return v && P["!doctype"] && ue.ownerDocument && ue.ownerDocument.doctype && ue.ownerDocument.doctype.name && at(uy, ue.ownerDocument.doctype.name) && (lt = "<!DOCTYPE " + ue.ownerDocument.doctype.name + `>
` + lt), we && oi([E, F, g], (Bt) => {
      lt = pn(lt, Bt, " ");
    }), S && j ? S.createHTML(lt) : lt;
  }, t.setConfig = function() {
    let be = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    xa(be), X = !0;
  }, t.clearConfig = function() {
    qr = null, X = !1;
  }, t.isValidAttribute = function(be, U, ue) {
    qr || xa({});
    const me = Ke(be), Be = Ke(U);
    return hf(me, Be, ue);
  }, t.addHook = function(be, U) {
    typeof U == "function" && dn(z[be], U);
  }, t.removeHook = function(be, U) {
    if (U !== void 0) {
      const ue = ex(z[be], U);
      return ue === -1 ? void 0 : tx(z[be], ue, 1)[0];
    }
    return Eh(z[be]);
  }, t.removeHooks = function(be) {
    z[be] = [];
  }, t.removeAllHooks = function() {
    z = Ih();
  }, t;
}
var YS = cy();
const Gt = /* @__PURE__ */ Object.create(null);
Gt.open = "0";
Gt.close = "1";
Gt.ping = "2";
Gt.pong = "3";
Gt.message = "4";
Gt.upgrade = "5";
Gt.noop = "6";
const gi = /* @__PURE__ */ Object.create(null);
Object.keys(Gt).forEach((e) => {
  gi[Gt[e]] = e;
});
const gc = { type: "error", data: "parser error" }, ly = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", fy = typeof ArrayBuffer == "function", hy = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Al = ({ type: e, data: t }, r, n) => ly && t instanceof Blob ? r ? n(t) : kh(t, n) : fy && (t instanceof ArrayBuffer || hy(t)) ? r ? n(t) : kh(new Blob([t]), n) : n(Gt[e] + (t || "")), kh = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
};
function Nh(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Va;
function yx(e, t) {
  if (ly && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Nh).then(t);
  if (fy && (e.data instanceof ArrayBuffer || hy(e.data)))
    return t(Nh(e.data));
  Al(e, !1, (r) => {
    Va || (Va = new TextEncoder()), t(Va.encode(r));
  });
}
const Ph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", En = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ph.length; e++)
  En[Ph.charCodeAt(e)] = e;
const bx = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, a, o, s, u;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const c = new ArrayBuffer(t), f = new Uint8Array(c);
  for (n = 0; n < r; n += 4)
    a = En[e.charCodeAt(n)], o = En[e.charCodeAt(n + 1)], s = En[e.charCodeAt(n + 2)], u = En[e.charCodeAt(n + 3)], f[i++] = a << 2 | o >> 4, f[i++] = (o & 15) << 4 | s >> 2, f[i++] = (s & 3) << 6 | u & 63;
  return c;
}, _x = typeof ArrayBuffer == "function", Rl = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: dy(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: wx(e.substring(1), t)
  } : gi[r] ? e.length > 1 ? {
    type: gi[r],
    data: e.substring(1)
  } : {
    type: gi[r]
  } : gc;
}, wx = (e, t) => {
  if (_x) {
    const r = bx(e);
    return dy(r, t);
  } else
    return { base64: !0, data: e };
}, dy = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, py = "", xx = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((a, o) => {
    Al(a, !1, (s) => {
      n[o] = s, ++i === r && t(n.join(py));
    });
  });
}, Ex = (e, t) => {
  const r = e.split(py), n = [];
  for (let i = 0; i < r.length; i++) {
    const a = Rl(r[i], t);
    if (n.push(a), a.type === "error")
      break;
  }
  return n;
};
function Ox() {
  return new TransformStream({
    transform(e, t) {
      yx(e, (r) => {
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
let Ha;
function ci(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function li(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let i = 0; i < t; i++)
    r[i] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function Sx(e, t) {
  Ha || (Ha = new TextDecoder());
  const r = [];
  let n = 0, i = -1, a = !1;
  return new TransformStream({
    transform(o, s) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (ci(r) < 1)
            break;
          const u = li(r, 1);
          a = (u[0] & 128) === 128, i = u[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (ci(r) < 2)
            break;
          const u = li(r, 2);
          i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (ci(r) < 8)
            break;
          const u = li(r, 8), c = new DataView(u.buffer, u.byteOffset, u.length), f = c.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            s.enqueue(gc);
            break;
          }
          i = f * Math.pow(2, 32) + c.getUint32(4), n = 3;
        } else {
          if (ci(r) < i)
            break;
          const u = li(r, i);
          s.enqueue(Rl(a ? u : Ha.decode(u), t)), n = 0;
        }
        if (i === 0 || i > e) {
          s.enqueue(gc);
          break;
        }
      }
    }
  });
}
const my = 4;
function Ge(e) {
  if (e) return Tx(e);
}
function Tx(e) {
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
const na = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), yt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Cx = "arraybuffer";
function gy(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const Ax = yt.setTimeout, Rx = yt.clearTimeout;
function ia(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Ax.bind(yt), e.clearTimeoutFn = Rx.bind(yt)) : (e.setTimeoutFn = yt.setTimeout.bind(yt), e.clearTimeoutFn = yt.clearTimeout.bind(yt));
}
const Ix = 1.33;
function kx(e) {
  return typeof e == "string" ? Nx(e) : Math.ceil((e.byteLength || e.size) * Ix);
}
function Nx(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function vy() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Px(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function Mx(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
  }
  return t;
}
class Dx extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class Il extends Ge {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, ia(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
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
    return super.emitReserved("error", new Dx(t, r, n)), this;
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
    const r = Rl(t, this.socket.binaryType);
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
    const r = Px(t);
    return r.length ? "?" + r : "";
  }
}
class Fx extends Il {
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
    Ex(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, xx(t, (r) => {
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
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = vy()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(t, r);
  }
}
let yy = !1;
try {
  yy = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Lx = yy;
function Bx() {
}
class jx extends Fx {
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
    super(), this.createRequest = t, ia(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const r = gy(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
      if (this._xhr.onreadystatechange = Bx, t)
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
    attachEvent("onunload", Mh);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in yt ? "pagehide" : "unload";
    addEventListener(e, Mh, !1);
  }
}
function Mh() {
  for (let e in $t.requests)
    $t.requests.hasOwnProperty(e) && $t.requests[e].abort();
}
const zx = function() {
  const e = by({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class qx extends jx {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = zx && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new $t(by, this.uri(), t);
  }
}
function by(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || Lx))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new yt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const _y = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Ux extends Il {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), r = this.opts.protocols, n = _y ? {} : gy(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Al(n, this.supportsBinary, (a) => {
        try {
          this.doWrite(n, a);
        } catch {
        }
        i && na(() => {
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
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = vy()), this.supportsBinary || (r.b64 = 1), this.createUri(t, r);
  }
}
const Ka = yt.WebSocket || yt.MozWebSocket;
class $x extends Ux {
  createSocket(t, r, n) {
    return _y ? new Ka(t, r, n) : r ? new Ka(t, r) : new Ka(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class Wx extends Il {
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
        const r = Sx(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), i = Ox();
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
        i && na(() => {
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
const Gx = {
  websocket: $x,
  webtransport: Wx,
  polling: qx
}, Vx = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Hx = [
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
function vc(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = Vx.exec(e || ""), a = {}, o = 14;
  for (; o--; )
    a[Hx[o]] = i[o] || "";
  return r != -1 && n != -1 && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = Kx(a, a.path), a.queryKey = Yx(a, a.query), a;
}
function Kx(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Yx(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, a) {
    i && (r[i] = a);
  }), r;
}
const yc = typeof addEventListener == "function" && typeof removeEventListener == "function", vi = [];
yc && addEventListener("offline", () => {
  vi.forEach((e) => e());
}, !1);
class lr extends Ge {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = Cx, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
      const n = vc(t);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = vc(r.host).host);
    ia(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n) => {
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Mx(this.opts.query)), yc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, vi.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    r.EIO = my, r.transport = t, this.id && (r.sid = this.id);
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
    const t = this.opts.rememberUpgrade && lr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", lr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (i && (r += kx(i)), n > 0 && r > this._maxPayload)
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
    return t && (this._pingTimeoutTime = 0, na(() => {
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
    if (lr.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), yc && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = vi.indexOf(this._offlineEventListener);
        n !== -1 && vi.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
lr.protocol = my;
class Xx extends lr {
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
    lr.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (l) => {
        if (!n)
          if (l.type === "pong" && l.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            lr.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
              n || this.readyState !== "closed" && (f(), this.setTransport(r), r.send([{ type: "upgrade" }]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
            });
          } else {
            const d = new Error("probe error");
            d.transport = r.name, this.emitReserved("upgradeError", d);
          }
      }));
    };
    function a() {
      n || (n = !0, f(), r.close(), r = null);
    }
    const o = (l) => {
      const d = new Error("probe error: " + l);
      d.transport = r.name, a(), this.emitReserved("upgradeError", d);
    };
    function s() {
      o("transport closed");
    }
    function u() {
      o("socket closed");
    }
    function c(l) {
      r && l.name !== r.name && a();
    }
    const f = () => {
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
let Zx = class extends Xx {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((i) => Gx[i]).filter((i) => !!i)), super(t, n);
  }
};
function Jx(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = vc(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const a = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + a + ":" + n.port + t, n.href = n.protocol + "://" + a + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const Qx = typeof ArrayBuffer == "function", eE = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, wy = Object.prototype.toString, tE = typeof Blob == "function" || typeof Blob < "u" && wy.call(Blob) === "[object BlobConstructor]", rE = typeof File == "function" || typeof File < "u" && wy.call(File) === "[object FileConstructor]";
function kl(e) {
  return Qx && (e instanceof ArrayBuffer || eE(e)) || tE && e instanceof Blob || rE && e instanceof File;
}
function yi(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (yi(e[r]))
        return !0;
    return !1;
  }
  if (kl(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return yi(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && yi(e[r]))
      return !0;
  return !1;
}
function nE(e) {
  const t = [], r = e.data, n = e;
  return n.data = bc(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function bc(e, t) {
  if (!e)
    return e;
  if (kl(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = bc(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = bc(e[n], t));
    return r;
  }
  return e;
}
function iE(e, t) {
  return e.data = _c(e.data, t), delete e.attachments, e;
}
function _c(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = _c(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = _c(e[r], t));
  return e;
}
const aE = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], sE = 5;
var Ae;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Ae || (Ae = {}));
class oE {
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
    return (t.type === Ae.EVENT || t.type === Ae.ACK) && yi(t) ? this.encodeAsBinary({
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
    const r = nE(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function Dh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Nl extends Ge {
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
      n || r.type === Ae.BINARY_ACK ? (r.type = n ? Ae.EVENT : Ae.ACK, this.reconstructor = new uE(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (kl(t) || t.base64)
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
      if (Nl.isPayloadValid(n.type, a))
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
        return Dh(r);
      case Ae.DISCONNECT:
        return r === void 0;
      case Ae.CONNECT_ERROR:
        return typeof r == "string" || Dh(r);
      case Ae.EVENT:
      case Ae.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && aE.indexOf(r[0]) === -1);
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
class uE {
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
      const r = iE(this.reconPack, this.buffers);
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
const cE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: Nl, Encoder: oE, get PacketType() {
  return Ae;
}, protocol: sE }, Symbol.toStringTag, { value: "Module" }));
function At(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const lE = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class xy extends Ge {
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
      At(t, "open", this.onopen.bind(this)),
      At(t, "packet", this.onpacket.bind(this)),
      At(t, "error", this.onerror.bind(this)),
      At(t, "close", this.onclose.bind(this))
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
    if (lE.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const o = {
      type: Ae.EVENT,
      data: r
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
      const f = this.ids++, l = r.pop();
      this._registerAckCallback(f, l), o.id = f;
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
function an(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
an.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + r : e - r;
  }
  return Math.min(e, this.max) | 0;
};
an.prototype.reset = function() {
  this.attempts = 0;
};
an.prototype.setMin = function(e) {
  this.ms = e;
};
an.prototype.setMax = function(e) {
  this.max = e;
};
an.prototype.setJitter = function(e) {
  this.jitter = e;
};
class wc extends Ge {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, ia(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new an({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || cE;
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
    this.engine = new Zx(this.uri, this.opts);
    const r = this.engine, n = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const i = At(r, "open", function() {
      n.onopen(), t && t();
    }), a = (s) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", s), t ? t(s) : this.maybeReconnectOnOpen();
    }, o = At(r, "error", a);
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
      At(t, "ping", this.onping.bind(this)),
      At(t, "data", this.ondata.bind(this)),
      At(t, "error", this.onerror.bind(this)),
      At(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      At(this.decoder, "decoded", this.ondecoded.bind(this))
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
    na(() => {
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new xy(this, t, r), this.nsps[t] = n), n;
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
const yn = {};
function Ya(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = Jx(e, t.path || "/socket.io"), n = r.source, i = r.id, a = r.path, o = yn[i] && a in yn[i].nsps, s = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let u;
  return s ? u = new wc(n, t) : (yn[i] || (yn[i] = new wc(n, t)), u = yn[i]), r.query && !t.query && (t.query = r.queryKey), u.socket(r.path, t);
}
Object.assign(Ya, {
  Manager: wc,
  Socket: xy,
  io: Ya,
  connect: Ya
});
function fi(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Xa = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
var Fh;
function fE() {
  return Fh || (Fh = 1, function(e, t) {
    (function(r) {
      e.exports = r();
    })(function() {
      return function r(n, i, a) {
        function o(c, f) {
          if (!i[c]) {
            if (!n[c]) {
              var l = typeof fi == "function" && fi;
              if (!f && l) return l(c, !0);
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
        for (var s = typeof fi == "function" && fi, u = 0; u < a.length; u++) o(a[u]);
        return o;
      }({ 1: [function(r, n, i) {
        var a = r("./utils"), o = r("./support"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        i.encode = function(u) {
          for (var c, f, l, d, h, m, p, b = [], y = 0, _ = u.length, x = _, S = a.getTypeOf(u) !== "string"; y < u.length; ) x = _ - y, l = S ? (c = u[y++], f = y < _ ? u[y++] : 0, y < _ ? u[y++] : 0) : (c = u.charCodeAt(y++), f = y < _ ? u.charCodeAt(y++) : 0, y < _ ? u.charCodeAt(y++) : 0), d = c >> 2, h = (3 & c) << 4 | f >> 4, m = 1 < x ? (15 & f) << 2 | l >> 6 : 64, p = 2 < x ? 63 & l : 64, b.push(s.charAt(d) + s.charAt(h) + s.charAt(m) + s.charAt(p));
          return b.join("");
        }, i.decode = function(u) {
          var c, f, l, d, h, m, p = 0, b = 0, y = "data:";
          if (u.substr(0, y.length) === y) throw new Error("Invalid base64 input, it looks like a data url.");
          var _, x = 3 * (u = u.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (u.charAt(u.length - 1) === s.charAt(64) && x--, u.charAt(u.length - 2) === s.charAt(64) && x--, x % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (_ = o.uint8array ? new Uint8Array(0 | x) : new Array(0 | x); p < u.length; ) c = s.indexOf(u.charAt(p++)) << 2 | (d = s.indexOf(u.charAt(p++))) >> 4, f = (15 & d) << 4 | (h = s.indexOf(u.charAt(p++))) >> 2, l = (3 & h) << 6 | (m = s.indexOf(u.charAt(p++))), _[b++] = c, h !== 64 && (_[b++] = f), m !== 64 && (_[b++] = l);
          return _;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(r, n, i) {
        var a = r("./external"), o = r("./stream/DataWorker"), s = r("./stream/Crc32Probe"), u = r("./stream/DataLengthProbe");
        function c(f, l, d, h, m) {
          this.compressedSize = f, this.uncompressedSize = l, this.crc32 = d, this.compression = h, this.compressedContent = m;
        }
        c.prototype = { getContentWorker: function() {
          var f = new o(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")), l = this;
          return f.on("end", function() {
            if (this.streamInfo.data_length !== l.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), f;
        }, getCompressedWorker: function() {
          return new o(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, c.createWorkerFrom = function(f, l, d) {
          return f.pipe(new s()).pipe(new u("uncompressedSize")).pipe(l.compressWorker(d)).pipe(new u("compressedSize")).withStreamInfo("compression", l);
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
            for (var f = 0; f < 8; f++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
            u[c] = s;
          }
          return u;
        }();
        n.exports = function(s, u) {
          return s !== void 0 && s.length ? a.getTypeOf(s) !== "string" ? function(c, f, l, d) {
            var h = o, m = d + l;
            c ^= -1;
            for (var p = d; p < m; p++) c = c >>> 8 ^ h[255 & (c ^ f[p])];
            return -1 ^ c;
          }(0 | u, s, s.length, 0) : function(c, f, l, d) {
            var h = o, m = d + l;
            c ^= -1;
            for (var p = d; p < m; p++) c = c >>> 8 ^ h[255 & (c ^ f.charCodeAt(p))];
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
        function f(l, d) {
          u.call(this, "FlateWorker/" + l), this._pako = null, this._pakoAction = l, this._pakoOptions = d, this.meta = {};
        }
        i.magic = "\b\0", s.inherits(f, u), f.prototype.processChunk = function(l) {
          this.meta = l.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(c, l.data), !1);
        }, f.prototype.flush = function() {
          u.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, f.prototype.cleanUp = function() {
          u.prototype.cleanUp.call(this), this._pako = null;
        }, f.prototype._createPako = function() {
          this._pako = new o[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var l = this;
          this._pako.onData = function(d) {
            l.push({ data: d, meta: l.meta });
          };
        }, i.compressWorker = function(l) {
          return new f("Deflate", l);
        }, i.uncompressWorker = function() {
          return new f("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, n, i) {
        function a(h, m) {
          var p, b = "";
          for (p = 0; p < m; p++) b += String.fromCharCode(255 & h), h >>>= 8;
          return b;
        }
        function o(h, m, p, b, y, _) {
          var x, S, C = h.file, B = h.compression, A = _ !== c.utf8encode, O = s.transformTo("string", _(C.name)), w = s.transformTo("string", c.utf8encode(C.name)), N = C.comment, z = s.transformTo("string", _(N)), E = s.transformTo("string", c.utf8encode(N)), F = w.length !== C.name.length, g = E.length !== N.length, q = "", ie = "", D = "", Q = C.dir, L = C.date, re = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          m && !p || (re.crc32 = h.crc32, re.compressedSize = h.compressedSize, re.uncompressedSize = h.uncompressedSize);
          var P = 0;
          m && (P |= 8), A || !F && !g || (P |= 2048);
          var M = 0, K = 0;
          Q && (M |= 16), y === "UNIX" ? (K = 798, M |= function(H, pe) {
            var Ee = H;
            return H || (Ee = pe ? 16893 : 33204), (65535 & Ee) << 16;
          }(C.unixPermissions, Q)) : (K = 20, M |= function(H) {
            return 63 & (H || 0);
          }(C.dosPermissions)), x = L.getUTCHours(), x <<= 6, x |= L.getUTCMinutes(), x <<= 5, x |= L.getUTCSeconds() / 2, S = L.getUTCFullYear() - 1980, S <<= 4, S |= L.getUTCMonth() + 1, S <<= 5, S |= L.getUTCDate(), F && (ie = a(1, 1) + a(f(O), 4) + w, q += "up" + a(ie.length, 2) + ie), g && (D = a(1, 1) + a(f(z), 4) + E, q += "uc" + a(D.length, 2) + D);
          var ee = "";
          return ee += `
\0`, ee += a(P, 2), ee += B.magic, ee += a(x, 2), ee += a(S, 2), ee += a(re.crc32, 4), ee += a(re.compressedSize, 4), ee += a(re.uncompressedSize, 4), ee += a(O.length, 2), ee += a(q.length, 2), { fileRecord: l.LOCAL_FILE_HEADER + ee + O + q, dirRecord: l.CENTRAL_FILE_HEADER + a(K, 2) + ee + a(z.length, 2) + "\0\0\0\0" + a(M, 4) + a(b, 4) + O + q + z };
        }
        var s = r("../utils"), u = r("../stream/GenericWorker"), c = r("../utf8"), f = r("../crc32"), l = r("../signature");
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
            return l.DATA_DESCRIPTOR + a(b.crc32, 4) + a(b.compressedSize, 4) + a(b.uncompressedSize, 4);
          }(h), meta: { percent: 100 } });
          else for (this.push({ data: p.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, d.prototype.flush = function() {
          for (var h = this.bytesWritten, m = 0; m < this.dirRecords.length; m++) this.push({ data: this.dirRecords[m], meta: { percent: 100 } });
          var p = this.bytesWritten - h, b = function(y, _, x, S, C) {
            var B = s.transformTo("string", C(S));
            return l.CENTRAL_DIRECTORY_END + "\0\0\0\0" + a(y, 2) + a(y, 2) + a(_, 4) + a(x, 4) + a(B.length, 2) + B;
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
          var f = new o(u.streamFiles, c, u.platform, u.encodeFileName), l = 0;
          try {
            s.forEach(function(d, h) {
              l++;
              var m = function(_, x) {
                var S = _ || x, C = a[S];
                if (!C) throw new Error(S + " is not a valid compression method !");
                return C;
              }(h.options.compression, u.compression), p = h.options.compressionOptions || u.compressionOptions || {}, b = h.dir, y = h.date;
              h._compressWorker(m, p).withStreamInfo("file", { name: d, dir: b, date: y, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(f);
            }), f.entriesCount = l;
          } catch (d) {
            f.error(d);
          }
          return f;
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
        var a = r("./utils"), o = r("./external"), s = r("./utf8"), u = r("./zipEntries"), c = r("./stream/Crc32Probe"), f = r("./nodejsUtils");
        function l(d) {
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
          return h = a.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: s.utf8decode }), f.isNode && f.isStream(d) ? o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : a.prepareContent("the loaded zip file", d, !0, h.optimizedBinaryString, h.base64).then(function(p) {
            var b = new u(h);
            return b.load(p), b;
          }).then(function(p) {
            var b = [o.Promise.resolve(p)], y = p.files;
            if (h.checkCRC32) for (var _ = 0; _ < y.length; _++) b.push(l(y[_]));
            return o.Promise.all(b);
          }).then(function(p) {
            for (var b = p.shift(), y = b.files, _ = 0; _ < y.length; _++) {
              var x = y[_], S = x.fileNameStr, C = a.resolve(x.fileNameStr);
              m.file(C, x.decompressed, { binary: !0, optimizedBinaryString: !0, date: x.date, dir: x.dir, comment: x.fileCommentStr.length ? x.fileCommentStr : null, unixPermissions: x.unixPermissions, dosPermissions: x.dosPermissions, createFolders: h.createFolders }), x.dir || (m.file(C).unsafeOriginalName = S);
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
          (this._stream = u).pause(), u.on("data", function(f) {
            c.push({ data: f, meta: { percent: 0 } });
          }).on("error", function(f) {
            c.isPaused ? this.generatedError = f : c.error(f);
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
          var f = this;
          s.on("data", function(l, d) {
            f.push(l) || f._helper.pause(), c && c(d);
          }).on("error", function(l) {
            f.emit("error", l);
          }).on("end", function() {
            f.push(null);
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
        function a(C, B, A) {
          var O, w = s.getTypeOf(B), N = s.extend(A || {}, f);
          N.date = N.date || /* @__PURE__ */ new Date(), N.compression !== null && (N.compression = N.compression.toUpperCase()), typeof N.unixPermissions == "string" && (N.unixPermissions = parseInt(N.unixPermissions, 8)), N.unixPermissions && 16384 & N.unixPermissions && (N.dir = !0), N.dosPermissions && 16 & N.dosPermissions && (N.dir = !0), N.dir && (C = y(C)), N.createFolders && (O = b(C)) && _.call(this, O, !0);
          var z = w === "string" && N.binary === !1 && N.base64 === !1;
          A && A.binary !== void 0 || (N.binary = !z), (B instanceof l && B.uncompressedSize === 0 || N.dir || !B || B.length === 0) && (N.base64 = !1, N.binary = !0, B = "", N.compression = "STORE", w = "string");
          var E = null;
          E = B instanceof l || B instanceof u ? B : m.isNode && m.isStream(B) ? new p(C, B) : s.prepareContent(C, B, N.binary, N.optimizedBinaryString, N.base64);
          var F = new d(C, E, N);
          this.files[C] = F;
        }
        var o = r("./utf8"), s = r("./utils"), u = r("./stream/GenericWorker"), c = r("./stream/StreamHelper"), f = r("./defaults"), l = r("./compressedObject"), d = r("./zipObject"), h = r("./generate"), m = r("./nodejsUtils"), p = r("./nodejs/NodejsStreamInputAdapter"), b = function(C) {
          C.slice(-1) === "/" && (C = C.substring(0, C.length - 1));
          var B = C.lastIndexOf("/");
          return 0 < B ? C.substring(0, B) : "";
        }, y = function(C) {
          return C.slice(-1) !== "/" && (C += "/"), C;
        }, _ = function(C, B) {
          return B = B !== void 0 ? B : f.createFolders, C = y(C), this.files[C] || a.call(this, C, null, { dir: !0, createFolders: B }), this.files[C];
        };
        function x(C) {
          return Object.prototype.toString.call(C) === "[object RegExp]";
        }
        var S = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(C) {
          var B, A, O;
          for (B in this.files) O = this.files[B], (A = B.slice(this.root.length, B.length)) && B.slice(0, this.root.length) === this.root && C(A, O);
        }, filter: function(C) {
          var B = [];
          return this.forEach(function(A, O) {
            C(A, O) && B.push(O);
          }), B;
        }, file: function(C, B, A) {
          if (arguments.length !== 1) return C = this.root + C, a.call(this, C, B, A), this;
          if (x(C)) {
            var O = C;
            return this.filter(function(N, z) {
              return !z.dir && O.test(N);
            });
          }
          var w = this.files[this.root + C];
          return w && !w.dir ? w : null;
        }, folder: function(C) {
          if (!C) return this;
          if (x(C)) return this.filter(function(w, N) {
            return N.dir && C.test(w);
          });
          var B = this.root + C, A = _.call(this, B), O = this.clone();
          return O.root = A.name, O;
        }, remove: function(C) {
          C = this.root + C;
          var B = this.files[C];
          if (B || (C.slice(-1) !== "/" && (C += "/"), B = this.files[C]), B && !B.dir) delete this.files[C];
          else for (var A = this.filter(function(w, N) {
            return N.name.slice(0, C.length) === C;
          }), O = 0; O < A.length; O++) delete this.files[A[O].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(C) {
          var B, A = {};
          try {
            if ((A = s.extend(C || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: o.utf8encode })).type = A.type.toLowerCase(), A.compression = A.compression.toUpperCase(), A.type === "binarystring" && (A.type = "string"), !A.type) throw new Error("No output type specified.");
            s.checkSupport(A.type), A.platform !== "darwin" && A.platform !== "freebsd" && A.platform !== "linux" && A.platform !== "sunos" || (A.platform = "UNIX"), A.platform === "win32" && (A.platform = "DOS");
            var O = A.comment || this.comment || "";
            B = h.generateWorker(this, A, O);
          } catch (w) {
            (B = new u("error")).error(w);
          }
          return new c(B, A.type || "string", A.mimeType);
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
          for (var u = s.charCodeAt(0), c = s.charCodeAt(1), f = s.charCodeAt(2), l = s.charCodeAt(3), d = this.length - 4; 0 <= d; --d) if (this.data[d] === u && this.data[d + 1] === c && this.data[d + 2] === f && this.data[d + 3] === l) return d - this.zero;
          return -1;
        }, o.prototype.readAndCheckSignature = function(s) {
          var u = s.charCodeAt(0), c = s.charCodeAt(1), f = s.charCodeAt(2), l = s.charCodeAt(3), d = this.readData(4);
          return u === d[0] && c === d[1] && f === d[2] && l === d[3];
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
        var a = r("../utils"), o = r("../support"), s = r("./ArrayReader"), u = r("./StringReader"), c = r("./NodeBufferReader"), f = r("./Uint8ArrayReader");
        n.exports = function(l) {
          var d = a.getTypeOf(l);
          return a.checkSupport(d), d !== "string" || o.uint8array ? d === "nodebuffer" ? new c(l) : o.uint8array ? new f(a.transformTo("uint8array", l)) : new s(a.transformTo("array", l)) : new u(l);
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
          this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, u.then(function(f) {
            c.dataIsReady = !0, c.data = f, c.max = f && f.length || 0, c.type = a.getTypeOf(f), c.isPaused || c._tickAndRepeat();
          }, function(f) {
            c.error(f);
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
        var a = r("../utils"), o = r("./ConvertWorker"), s = r("./GenericWorker"), u = r("../base64"), c = r("../support"), f = r("../external"), l = null;
        if (c.nodestream) try {
          l = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
        function d(m, p) {
          return new f.Promise(function(b, y) {
            var _ = [], x = m._internalType, S = m._outputType, C = m._mimeType;
            m.on("data", function(B, A) {
              _.push(B), p && p(A);
            }).on("error", function(B) {
              _ = [], y(B);
            }).on("end", function() {
              try {
                var B = function(A, O, w) {
                  switch (A) {
                    case "blob":
                      return a.newBlob(a.transformTo("arraybuffer", O), w);
                    case "base64":
                      return u.encode(O);
                    default:
                      return a.transformTo(A, O);
                  }
                }(S, function(A, O) {
                  var w, N = 0, z = null, E = 0;
                  for (w = 0; w < O.length; w++) E += O[w].length;
                  switch (A) {
                    case "string":
                      return O.join("");
                    case "array":
                      return Array.prototype.concat.apply([], O);
                    case "uint8array":
                      for (z = new Uint8Array(E), w = 0; w < O.length; w++) z.set(O[w], N), N += O[w].length;
                      return z;
                    case "nodebuffer":
                      return Buffer.concat(O);
                    default:
                      throw new Error("concat : unsupported type '" + A + "'");
                  }
                }(x, _), C);
                b(B);
              } catch (A) {
                y(A);
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
          return new l(this, { objectMode: this._outputType !== "nodebuffer" }, m);
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
        for (var a = r("./utils"), o = r("./support"), s = r("./nodejsUtils"), u = r("./stream/GenericWorker"), c = new Array(256), f = 0; f < 256; f++) c[f] = 252 <= f ? 6 : 248 <= f ? 5 : 240 <= f ? 4 : 224 <= f ? 3 : 192 <= f ? 2 : 1;
        c[254] = c[254] = 1;
        function l() {
          u.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function d() {
          u.call(this, "utf-8 encode");
        }
        i.utf8encode = function(h) {
          return o.nodebuffer ? s.newBufferFrom(h, "utf-8") : function(m) {
            var p, b, y, _, x, S = m.length, C = 0;
            for (_ = 0; _ < S; _++) (64512 & (b = m.charCodeAt(_))) == 55296 && _ + 1 < S && (64512 & (y = m.charCodeAt(_ + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (y - 56320), _++), C += b < 128 ? 1 : b < 2048 ? 2 : b < 65536 ? 3 : 4;
            for (p = o.uint8array ? new Uint8Array(C) : new Array(C), _ = x = 0; x < C; _++) (64512 & (b = m.charCodeAt(_))) == 55296 && _ + 1 < S && (64512 & (y = m.charCodeAt(_ + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (y - 56320), _++), b < 128 ? p[x++] = b : (b < 2048 ? p[x++] = 192 | b >>> 6 : (b < 65536 ? p[x++] = 224 | b >>> 12 : (p[x++] = 240 | b >>> 18, p[x++] = 128 | b >>> 12 & 63), p[x++] = 128 | b >>> 6 & 63), p[x++] = 128 | 63 & b);
            return p;
          }(h);
        }, i.utf8decode = function(h) {
          return o.nodebuffer ? a.transformTo("nodebuffer", h).toString("utf-8") : function(m) {
            var p, b, y, _, x = m.length, S = new Array(2 * x);
            for (p = b = 0; p < x; ) if ((y = m[p++]) < 128) S[b++] = y;
            else if (4 < (_ = c[y])) S[b++] = 65533, p += _ - 1;
            else {
              for (y &= _ === 2 ? 31 : _ === 3 ? 15 : 7; 1 < _ && p < x; ) y = y << 6 | 63 & m[p++], _--;
              1 < _ ? S[b++] = 65533 : y < 65536 ? S[b++] = y : (y -= 65536, S[b++] = 55296 | y >> 10 & 1023, S[b++] = 56320 | 1023 & y);
            }
            return S.length !== b && (S.subarray ? S = S.subarray(0, b) : S.length = b), a.applyFromCharCode(S);
          }(h = a.transformTo(o.uint8array ? "uint8array" : "array", h));
        }, a.inherits(l, u), l.prototype.processChunk = function(h) {
          var m = a.transformTo(o.uint8array ? "uint8array" : "array", h.data);
          if (this.leftOver && this.leftOver.length) {
            if (o.uint8array) {
              var p = m;
              (m = new Uint8Array(p.length + this.leftOver.length)).set(this.leftOver, 0), m.set(p, this.leftOver.length);
            } else m = this.leftOver.concat(m);
            this.leftOver = null;
          }
          var b = function(_, x) {
            var S;
            for ((x = x || _.length) > _.length && (x = _.length), S = x - 1; 0 <= S && (192 & _[S]) == 128; ) S--;
            return S < 0 || S === 0 ? x : S + c[_[S]] > x ? S : x;
          }(m), y = m;
          b !== m.length && (o.uint8array ? (y = m.subarray(0, b), this.leftOver = m.subarray(b, m.length)) : (y = m.slice(0, b), this.leftOver = m.slice(b, m.length))), this.push({ data: i.utf8decode(y), meta: h.meta });
        }, l.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: i.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, i.Utf8DecodeWorker = l, a.inherits(d, u), d.prototype.processChunk = function(h) {
          this.push({ data: i.utf8encode(h.data), meta: h.meta });
        }, i.Utf8EncodeWorker = d;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, n, i) {
        var a = r("./support"), o = r("./base64"), s = r("./nodejsUtils"), u = r("./external");
        function c(p) {
          return p;
        }
        function f(p, b) {
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
        var l = { stringifyByChunk: function(p, b, y) {
          var _ = [], x = 0, S = p.length;
          if (S <= y) return String.fromCharCode.apply(null, p);
          for (; x < S; ) b === "array" || b === "nodebuffer" ? _.push(String.fromCharCode.apply(null, p.slice(x, Math.min(x + y, S)))) : _.push(String.fromCharCode.apply(null, p.subarray(x, Math.min(x + y, S)))), x += y;
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
          if (y === "uint8array" ? _ = l.applyCanBeUsed.uint8array : y === "nodebuffer" && (_ = l.applyCanBeUsed.nodebuffer), _) for (; 1 < b; ) try {
            return l.stringifyByChunk(p, y, b);
          } catch {
            b = Math.floor(b / 2);
          }
          return l.stringifyByChar(p);
        }
        function h(p, b) {
          for (var y = 0; y < p.length; y++) b[y] = p[y];
          return b;
        }
        i.applyFromCharCode = d;
        var m = {};
        m.string = { string: c, array: function(p) {
          return f(p, new Array(p.length));
        }, arraybuffer: function(p) {
          return m.string.uint8array(p).buffer;
        }, uint8array: function(p) {
          return f(p, new Uint8Array(p.length));
        }, nodebuffer: function(p) {
          return f(p, s.allocBuffer(p.length));
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
            var x = b[_];
            x === "." || x === "" && _ !== 0 && _ !== b.length - 1 || (x === ".." ? y.pop() : y.push(x));
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
        }, i.prepareContent = function(p, b, y, _, x) {
          return u.Promise.resolve(b).then(function(S) {
            return a.blob && (S instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(S)) !== -1) && typeof FileReader < "u" ? new u.Promise(function(C, B) {
              var A = new FileReader();
              A.onload = function(O) {
                C(O.target.result);
              }, A.onerror = function(O) {
                B(O.target.error);
              }, A.readAsArrayBuffer(S);
            }) : S;
          }).then(function(S) {
            var C = i.getTypeOf(S);
            return C ? (C === "arraybuffer" ? S = i.transformTo("uint8array", S) : C === "string" && (x ? S = o.decode(S) : y && _ !== !0 && (S = function(B) {
              return f(B, a.uint8array ? new Uint8Array(B.length) : new Array(B.length));
            }(S))), S) : u.Promise.reject(new Error("Can't read the data of '" + p + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, n, i) {
        var a = r("./reader/readerFor"), o = r("./utils"), s = r("./signature"), u = r("./zipEntry"), c = r("./support");
        function f(l) {
          this.files = [], this.loadOptions = l;
        }
        f.prototype = { checkSignature: function(l) {
          if (!this.reader.readAndCheckSignature(l)) {
            this.reader.index -= 4;
            var d = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + o.pretty(d) + ", expected " + o.pretty(l) + ")");
          }
        }, isSignature: function(l, d) {
          var h = this.reader.index;
          this.reader.setIndex(l);
          var m = this.reader.readString(4) === d;
          return this.reader.setIndex(h), m;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var l = this.reader.readData(this.zipCommentLength), d = c.uint8array ? "uint8array" : "array", h = o.transformTo(d, l);
          this.zipComment = this.loadOptions.decodeFileName(h);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var l, d, h, m = this.zip64EndOfCentralSize - 44; 0 < m; ) l = this.reader.readInt(2), d = this.reader.readInt(4), h = this.reader.readData(d), this.zip64ExtensibleData[l] = { id: l, length: d, value: h };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var l, d;
          for (l = 0; l < this.files.length; l++) d = this.files[l], this.reader.setIndex(d.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), d.readLocalPart(this.reader), d.handleUTF8(), d.processAttributes();
        }, readCentralDir: function() {
          var l;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (l = new u({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(l);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var l = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (l < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(l);
          var d = l;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (l = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(l), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var h = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
          var m = d - h;
          if (0 < m) this.isSignature(d, s.CENTRAL_FILE_HEADER) || (this.reader.zero = m);
          else if (m < 0) throw new Error("Corrupted zip: missing " + Math.abs(m) + " bytes.");
        }, prepareReader: function(l) {
          this.reader = a(l);
        }, load: function(l) {
          this.prepareReader(l), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, n.exports = f;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, n, i) {
        var a = r("./reader/readerFor"), o = r("./utils"), s = r("./compressedObject"), u = r("./crc32"), c = r("./utf8"), f = r("./compressions"), l = r("./support");
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
            for (var y in f) if (Object.prototype.hasOwnProperty.call(f, y) && f[y].magic === b) return f[y];
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
          var h = l.uint8array ? "uint8array" : "array";
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
        var o = r("./stream/StreamHelper"), s = r("./stream/DataWorker"), u = r("./utf8"), c = r("./compressedObject"), f = r("./stream/GenericWorker");
        a.prototype = { internalStream: function(m) {
          var p = null, b = "string";
          try {
            if (!m) throw new Error("No output type specified.");
            var y = (b = m.toLowerCase()) === "string" || b === "text";
            b !== "binarystring" && b !== "text" || (b = "string"), p = this._decompressWorker();
            var _ = !this._dataBinary;
            _ && !y && (p = p.pipe(new u.Utf8EncodeWorker())), !_ && y && (p = p.pipe(new u.Utf8DecodeWorker()));
          } catch (x) {
            (p = new f("error")).error(x);
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
          return this._data instanceof c ? this._data.getContentWorker() : this._data instanceof f ? this._data : new s(this._data);
        } };
        for (var l = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], d = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, h = 0; h < l.length; h++) a.prototype[l[h]] = d;
        n.exports = a;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, n, i) {
        (function(a) {
          var o, s, u = a.MutationObserver || a.WebKitMutationObserver;
          if (u) {
            var c = 0, f = new u(m), l = a.document.createTextNode("");
            f.observe(l, { characterData: !0 }), o = function() {
              l.data = c = ++c % 2;
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
        }).call(this, typeof xr < "u" ? xr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(r, n, i) {
        var a = r("immediate");
        function o() {
        }
        var s = {}, u = ["REJECTED"], c = ["FULFILLED"], f = ["PENDING"];
        function l(y) {
          if (typeof y != "function") throw new TypeError("resolver must be a function");
          this.state = f, this.queue = [], this.outcome = void 0, y !== o && p(this, y);
        }
        function d(y, _, x) {
          this.promise = y, typeof _ == "function" && (this.onFulfilled = _, this.callFulfilled = this.otherCallFulfilled), typeof x == "function" && (this.onRejected = x, this.callRejected = this.otherCallRejected);
        }
        function h(y, _, x) {
          a(function() {
            var S;
            try {
              S = _(x);
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
          var x = !1;
          function S(A) {
            x || (x = !0, s.reject(y, A));
          }
          function C(A) {
            x || (x = !0, s.resolve(y, A));
          }
          var B = b(function() {
            _(C, S);
          });
          B.status === "error" && S(B.value);
        }
        function b(y, _) {
          var x = {};
          try {
            x.value = y(_), x.status = "success";
          } catch (S) {
            x.status = "error", x.value = S;
          }
          return x;
        }
        (n.exports = l).prototype.finally = function(y) {
          if (typeof y != "function") return this;
          var _ = this.constructor;
          return this.then(function(x) {
            return _.resolve(y()).then(function() {
              return x;
            });
          }, function(x) {
            return _.resolve(y()).then(function() {
              throw x;
            });
          });
        }, l.prototype.catch = function(y) {
          return this.then(null, y);
        }, l.prototype.then = function(y, _) {
          if (typeof y != "function" && this.state === c || typeof _ != "function" && this.state === u) return this;
          var x = new this.constructor(o);
          return this.state !== f ? h(x, this.state === c ? y : _, this.outcome) : this.queue.push(new d(x, y, _)), x;
        }, d.prototype.callFulfilled = function(y) {
          s.resolve(this.promise, y);
        }, d.prototype.otherCallFulfilled = function(y) {
          h(this.promise, this.onFulfilled, y);
        }, d.prototype.callRejected = function(y) {
          s.reject(this.promise, y);
        }, d.prototype.otherCallRejected = function(y) {
          h(this.promise, this.onRejected, y);
        }, s.resolve = function(y, _) {
          var x = b(m, _);
          if (x.status === "error") return s.reject(y, x.value);
          var S = x.value;
          if (S) p(y, S);
          else {
            y.state = c, y.outcome = _;
            for (var C = -1, B = y.queue.length; ++C < B; ) y.queue[C].callFulfilled(_);
          }
          return y;
        }, s.reject = function(y, _) {
          y.state = u, y.outcome = _;
          for (var x = -1, S = y.queue.length; ++x < S; ) y.queue[x].callRejected(_);
          return y;
        }, l.resolve = function(y) {
          return y instanceof this ? y : s.resolve(new this(o), y);
        }, l.reject = function(y) {
          var _ = new this(o);
          return s.reject(_, y);
        }, l.all = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = y.length, S = !1;
          if (!x) return this.resolve([]);
          for (var C = new Array(x), B = 0, A = -1, O = new this(o); ++A < x; ) w(y[A], A);
          return O;
          function w(N, z) {
            _.resolve(N).then(function(E) {
              C[z] = E, ++B !== x || S || (S = !0, s.resolve(O, C));
            }, function(E) {
              S || (S = !0, s.reject(O, E));
            });
          }
        }, l.race = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = y.length, S = !1;
          if (!x) return this.resolve([]);
          for (var C = -1, B = new this(o); ++C < x; ) A = y[C], _.resolve(A).then(function(O) {
            S || (S = !0, s.resolve(B, O));
          }, function(O) {
            S || (S = !0, s.reject(B, O));
          });
          var A;
          return B;
        };
      }, { immediate: 36 }], 38: [function(r, n, i) {
        var a = {};
        (0, r("./lib/utils/common").assign)(a, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), n.exports = a;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, n, i) {
        var a = r("./zlib/deflate"), o = r("./utils/common"), s = r("./utils/strings"), u = r("./zlib/messages"), c = r("./zlib/zstream"), f = Object.prototype.toString, l = 0, d = -1, h = 0, m = 8;
        function p(y) {
          if (!(this instanceof p)) return new p(y);
          this.options = o.assign({ level: d, method: m, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, y || {});
          var _ = this.options;
          _.raw && 0 < _.windowBits ? _.windowBits = -_.windowBits : _.gzip && 0 < _.windowBits && _.windowBits < 16 && (_.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
          var x = a.deflateInit2(this.strm, _.level, _.method, _.windowBits, _.memLevel, _.strategy);
          if (x !== l) throw new Error(u[x]);
          if (_.header && a.deflateSetHeader(this.strm, _.header), _.dictionary) {
            var S;
            if (S = typeof _.dictionary == "string" ? s.string2buf(_.dictionary) : f.call(_.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(_.dictionary) : _.dictionary, (x = a.deflateSetDictionary(this.strm, S)) !== l) throw new Error(u[x]);
            this._dict_set = !0;
          }
        }
        function b(y, _) {
          var x = new p(_);
          if (x.push(y, !0), x.err) throw x.msg || u[x.err];
          return x.result;
        }
        p.prototype.push = function(y, _) {
          var x, S, C = this.strm, B = this.options.chunkSize;
          if (this.ended) return !1;
          S = _ === ~~_ ? _ : _ === !0 ? 4 : 0, typeof y == "string" ? C.input = s.string2buf(y) : f.call(y) === "[object ArrayBuffer]" ? C.input = new Uint8Array(y) : C.input = y, C.next_in = 0, C.avail_in = C.input.length;
          do {
            if (C.avail_out === 0 && (C.output = new o.Buf8(B), C.next_out = 0, C.avail_out = B), (x = a.deflate(C, S)) !== 1 && x !== l) return this.onEnd(x), !(this.ended = !0);
            C.avail_out !== 0 && (C.avail_in !== 0 || S !== 4 && S !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(C.output, C.next_out))) : this.onData(o.shrinkBuf(C.output, C.next_out)));
          } while ((0 < C.avail_in || C.avail_out === 0) && x !== 1);
          return S === 4 ? (x = a.deflateEnd(this.strm), this.onEnd(x), this.ended = !0, x === l) : S !== 2 || (this.onEnd(l), !(C.avail_out = 0));
        }, p.prototype.onData = function(y) {
          this.chunks.push(y);
        }, p.prototype.onEnd = function(y) {
          y === l && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = y, this.msg = this.strm.msg;
        }, i.Deflate = p, i.deflate = b, i.deflateRaw = function(y, _) {
          return (_ = _ || {}).raw = !0, b(y, _);
        }, i.gzip = function(y, _) {
          return (_ = _ || {}).gzip = !0, b(y, _);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, n, i) {
        var a = r("./zlib/inflate"), o = r("./utils/common"), s = r("./utils/strings"), u = r("./zlib/constants"), c = r("./zlib/messages"), f = r("./zlib/zstream"), l = r("./zlib/gzheader"), d = Object.prototype.toString;
        function h(p) {
          if (!(this instanceof h)) return new h(p);
          this.options = o.assign({ chunkSize: 16384, windowBits: 0, to: "" }, p || {});
          var b = this.options;
          b.raw && 0 <= b.windowBits && b.windowBits < 16 && (b.windowBits = -b.windowBits, b.windowBits === 0 && (b.windowBits = -15)), !(0 <= b.windowBits && b.windowBits < 16) || p && p.windowBits || (b.windowBits += 32), 15 < b.windowBits && b.windowBits < 48 && !(15 & b.windowBits) && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
          var y = a.inflateInit2(this.strm, b.windowBits);
          if (y !== u.Z_OK) throw new Error(c[y]);
          this.header = new l(), a.inflateGetHeader(this.strm, this.header);
        }
        function m(p, b) {
          var y = new h(b);
          if (y.push(p, !0), y.err) throw y.msg || c[y.err];
          return y.result;
        }
        h.prototype.push = function(p, b) {
          var y, _, x, S, C, B, A = this.strm, O = this.options.chunkSize, w = this.options.dictionary, N = !1;
          if (this.ended) return !1;
          _ = b === ~~b ? b : b === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof p == "string" ? A.input = s.binstring2buf(p) : d.call(p) === "[object ArrayBuffer]" ? A.input = new Uint8Array(p) : A.input = p, A.next_in = 0, A.avail_in = A.input.length;
          do {
            if (A.avail_out === 0 && (A.output = new o.Buf8(O), A.next_out = 0, A.avail_out = O), (y = a.inflate(A, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && w && (B = typeof w == "string" ? s.string2buf(w) : d.call(w) === "[object ArrayBuffer]" ? new Uint8Array(w) : w, y = a.inflateSetDictionary(this.strm, B)), y === u.Z_BUF_ERROR && N === !0 && (y = u.Z_OK, N = !1), y !== u.Z_STREAM_END && y !== u.Z_OK) return this.onEnd(y), !(this.ended = !0);
            A.next_out && (A.avail_out !== 0 && y !== u.Z_STREAM_END && (A.avail_in !== 0 || _ !== u.Z_FINISH && _ !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (x = s.utf8border(A.output, A.next_out), S = A.next_out - x, C = s.buf2string(A.output, x), A.next_out = S, A.avail_out = O - S, S && o.arraySet(A.output, A.output, x, S, 0), this.onData(C)) : this.onData(o.shrinkBuf(A.output, A.next_out)))), A.avail_in === 0 && A.avail_out === 0 && (N = !0);
          } while ((0 < A.avail_in || A.avail_out === 0) && y !== u.Z_STREAM_END);
          return y === u.Z_STREAM_END && (_ = u.Z_FINISH), _ === u.Z_FINISH ? (y = a.inflateEnd(this.strm), this.onEnd(y), this.ended = !0, y === u.Z_OK) : _ !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK), !(A.avail_out = 0));
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
            var f = c.shift();
            if (f) {
              if (typeof f != "object") throw new TypeError(f + "must be non-object");
              for (var l in f) f.hasOwnProperty(l) && (u[l] = f[l]);
            }
          }
          return u;
        }, i.shrinkBuf = function(u, c) {
          return u.length === c ? u : u.subarray ? u.subarray(0, c) : (u.length = c, u);
        };
        var o = { arraySet: function(u, c, f, l, d) {
          if (c.subarray && u.subarray) u.set(c.subarray(f, f + l), d);
          else for (var h = 0; h < l; h++) u[d + h] = c[f + h];
        }, flattenChunks: function(u) {
          var c, f, l, d, h, m;
          for (c = l = 0, f = u.length; c < f; c++) l += u[c].length;
          for (m = new Uint8Array(l), c = d = 0, f = u.length; c < f; c++) h = u[c], m.set(h, d), d += h.length;
          return m;
        } }, s = { arraySet: function(u, c, f, l, d) {
          for (var h = 0; h < l; h++) u[d + h] = c[f + h];
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
        function f(l, d) {
          if (d < 65537 && (l.subarray && s || !l.subarray && o)) return String.fromCharCode.apply(null, a.shrinkBuf(l, d));
          for (var h = "", m = 0; m < d; m++) h += String.fromCharCode(l[m]);
          return h;
        }
        u[254] = u[254] = 1, i.string2buf = function(l) {
          var d, h, m, p, b, y = l.length, _ = 0;
          for (p = 0; p < y; p++) (64512 & (h = l.charCodeAt(p))) == 55296 && p + 1 < y && (64512 & (m = l.charCodeAt(p + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (m - 56320), p++), _ += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
          for (d = new a.Buf8(_), p = b = 0; b < _; p++) (64512 & (h = l.charCodeAt(p))) == 55296 && p + 1 < y && (64512 & (m = l.charCodeAt(p + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (m - 56320), p++), h < 128 ? d[b++] = h : (h < 2048 ? d[b++] = 192 | h >>> 6 : (h < 65536 ? d[b++] = 224 | h >>> 12 : (d[b++] = 240 | h >>> 18, d[b++] = 128 | h >>> 12 & 63), d[b++] = 128 | h >>> 6 & 63), d[b++] = 128 | 63 & h);
          return d;
        }, i.buf2binstring = function(l) {
          return f(l, l.length);
        }, i.binstring2buf = function(l) {
          for (var d = new a.Buf8(l.length), h = 0, m = d.length; h < m; h++) d[h] = l.charCodeAt(h);
          return d;
        }, i.buf2string = function(l, d) {
          var h, m, p, b, y = d || l.length, _ = new Array(2 * y);
          for (h = m = 0; h < y; ) if ((p = l[h++]) < 128) _[m++] = p;
          else if (4 < (b = u[p])) _[m++] = 65533, h += b - 1;
          else {
            for (p &= b === 2 ? 31 : b === 3 ? 15 : 7; 1 < b && h < y; ) p = p << 6 | 63 & l[h++], b--;
            1 < b ? _[m++] = 65533 : p < 65536 ? _[m++] = p : (p -= 65536, _[m++] = 55296 | p >> 10 & 1023, _[m++] = 56320 | 1023 & p);
          }
          return f(_, m);
        }, i.utf8border = function(l, d) {
          var h;
          for ((d = d || l.length) > l.length && (d = l.length), h = d - 1; 0 <= h && (192 & l[h]) == 128; ) h--;
          return h < 0 || h === 0 ? d : h + u[l[h]] > d ? h : d;
        };
      }, { "./common": 41 }], 43: [function(r, n, i) {
        n.exports = function(a, o, s, u) {
          for (var c = 65535 & a | 0, f = a >>> 16 & 65535 | 0, l = 0; s !== 0; ) {
            for (s -= l = 2e3 < s ? 2e3 : s; f = f + (c = c + o[u++] | 0) | 0, --l; ) ;
            c %= 65521, f %= 65521;
          }
          return c | f << 16 | 0;
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
          var f = a, l = c + u;
          o ^= -1;
          for (var d = c; d < l; d++) o = o >>> 8 ^ f[255 & (o ^ s[d])];
          return -1 ^ o;
        };
      }, {}], 46: [function(r, n, i) {
        var a, o = r("../utils/common"), s = r("./trees"), u = r("./adler32"), c = r("./crc32"), f = r("./messages"), l = 0, d = 4, h = 0, m = -2, p = -1, b = 4, y = 2, _ = 8, x = 9, S = 286, C = 30, B = 19, A = 2 * S + 1, O = 15, w = 3, N = 258, z = N + w + 1, E = 42, F = 113, g = 1, q = 2, ie = 3, D = 4;
        function Q(v, X) {
          return v.msg = f[X], X;
        }
        function L(v) {
          return (v << 1) - (4 < v ? 9 : 0);
        }
        function re(v) {
          for (var X = v.length; 0 <= --X; ) v[X] = 0;
        }
        function P(v) {
          var X = v.state, W = X.pending;
          W > v.avail_out && (W = v.avail_out), W !== 0 && (o.arraySet(v.output, X.pending_buf, X.pending_out, W, v.next_out), v.next_out += W, X.pending_out += W, v.total_out += W, v.avail_out -= W, X.pending -= W, X.pending === 0 && (X.pending_out = 0));
        }
        function M(v, X) {
          s._tr_flush_block(v, 0 <= v.block_start ? v.block_start : -1, v.strstart - v.block_start, X), v.block_start = v.strstart, P(v.strm);
        }
        function K(v, X) {
          v.pending_buf[v.pending++] = X;
        }
        function ee(v, X) {
          v.pending_buf[v.pending++] = X >>> 8 & 255, v.pending_buf[v.pending++] = 255 & X;
        }
        function H(v, X) {
          var W, k, T = v.max_chain_length, j = v.strstart, te = v.prev_length, ne = v.nice_match, G = v.strstart > v.w_size - z ? v.strstart - (v.w_size - z) : 0, V = v.window, J = v.w_mask, Z = v.prev, ae = v.strstart + N, de = V[j + te - 1], _e = V[j + te];
          v.prev_length >= v.good_match && (T >>= 2), ne > v.lookahead && (ne = v.lookahead);
          do
            if (V[(W = X) + te] === _e && V[W + te - 1] === de && V[W] === V[j] && V[++W] === V[j + 1]) {
              j += 2, W++;
              do
                ;
              while (V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && j < ae);
              if (k = N - (ae - j), j = ae - N, te < k) {
                if (v.match_start = X, ne <= (te = k)) break;
                de = V[j + te - 1], _e = V[j + te];
              }
            }
          while ((X = Z[X & J]) > G && --T != 0);
          return te <= v.lookahead ? te : v.lookahead;
        }
        function pe(v) {
          var X, W, k, T, j, te, ne, G, V, J, Z = v.w_size;
          do {
            if (T = v.window_size - v.lookahead - v.strstart, v.strstart >= Z + (Z - z)) {
              for (o.arraySet(v.window, v.window, Z, Z, 0), v.match_start -= Z, v.strstart -= Z, v.block_start -= Z, X = W = v.hash_size; k = v.head[--X], v.head[X] = Z <= k ? k - Z : 0, --W; ) ;
              for (X = W = Z; k = v.prev[--X], v.prev[X] = Z <= k ? k - Z : 0, --W; ) ;
              T += Z;
            }
            if (v.strm.avail_in === 0) break;
            if (te = v.strm, ne = v.window, G = v.strstart + v.lookahead, V = T, J = void 0, J = te.avail_in, V < J && (J = V), W = J === 0 ? 0 : (te.avail_in -= J, o.arraySet(ne, te.input, te.next_in, J, G), te.state.wrap === 1 ? te.adler = u(te.adler, ne, J, G) : te.state.wrap === 2 && (te.adler = c(te.adler, ne, J, G)), te.next_in += J, te.total_in += J, J), v.lookahead += W, v.lookahead + v.insert >= w) for (j = v.strstart - v.insert, v.ins_h = v.window[j], v.ins_h = (v.ins_h << v.hash_shift ^ v.window[j + 1]) & v.hash_mask; v.insert && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[j + w - 1]) & v.hash_mask, v.prev[j & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = j, j++, v.insert--, !(v.lookahead + v.insert < w)); ) ;
          } while (v.lookahead < z && v.strm.avail_in !== 0);
        }
        function Ee(v, X) {
          for (var W, k; ; ) {
            if (v.lookahead < z) {
              if (pe(v), v.lookahead < z && X === l) return g;
              if (v.lookahead === 0) break;
            }
            if (W = 0, v.lookahead >= w && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + w - 1]) & v.hash_mask, W = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), W !== 0 && v.strstart - W <= v.w_size - z && (v.match_length = H(v, W)), v.match_length >= w) if (k = s._tr_tally(v, v.strstart - v.match_start, v.match_length - w), v.lookahead -= v.match_length, v.match_length <= v.max_lazy_match && v.lookahead >= w) {
              for (v.match_length--; v.strstart++, v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + w - 1]) & v.hash_mask, W = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart, --v.match_length != 0; ) ;
              v.strstart++;
            } else v.strstart += v.match_length, v.match_length = 0, v.ins_h = v.window[v.strstart], v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + 1]) & v.hash_mask;
            else k = s._tr_tally(v, 0, v.window[v.strstart]), v.lookahead--, v.strstart++;
            if (k && (M(v, !1), v.strm.avail_out === 0)) return g;
          }
          return v.insert = v.strstart < w - 1 ? v.strstart : w - 1, X === d ? (M(v, !0), v.strm.avail_out === 0 ? ie : D) : v.last_lit && (M(v, !1), v.strm.avail_out === 0) ? g : q;
        }
        function ce(v, X) {
          for (var W, k, T; ; ) {
            if (v.lookahead < z) {
              if (pe(v), v.lookahead < z && X === l) return g;
              if (v.lookahead === 0) break;
            }
            if (W = 0, v.lookahead >= w && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + w - 1]) & v.hash_mask, W = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), v.prev_length = v.match_length, v.prev_match = v.match_start, v.match_length = w - 1, W !== 0 && v.prev_length < v.max_lazy_match && v.strstart - W <= v.w_size - z && (v.match_length = H(v, W), v.match_length <= 5 && (v.strategy === 1 || v.match_length === w && 4096 < v.strstart - v.match_start) && (v.match_length = w - 1)), v.prev_length >= w && v.match_length <= v.prev_length) {
              for (T = v.strstart + v.lookahead - w, k = s._tr_tally(v, v.strstart - 1 - v.prev_match, v.prev_length - w), v.lookahead -= v.prev_length - 1, v.prev_length -= 2; ++v.strstart <= T && (v.ins_h = (v.ins_h << v.hash_shift ^ v.window[v.strstart + w - 1]) & v.hash_mask, W = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h], v.head[v.ins_h] = v.strstart), --v.prev_length != 0; ) ;
              if (v.match_available = 0, v.match_length = w - 1, v.strstart++, k && (M(v, !1), v.strm.avail_out === 0)) return g;
            } else if (v.match_available) {
              if ((k = s._tr_tally(v, 0, v.window[v.strstart - 1])) && M(v, !1), v.strstart++, v.lookahead--, v.strm.avail_out === 0) return g;
            } else v.match_available = 1, v.strstart++, v.lookahead--;
          }
          return v.match_available && (k = s._tr_tally(v, 0, v.window[v.strstart - 1]), v.match_available = 0), v.insert = v.strstart < w - 1 ? v.strstart : w - 1, X === d ? (M(v, !0), v.strm.avail_out === 0 ? ie : D) : v.last_lit && (M(v, !1), v.strm.avail_out === 0) ? g : q;
        }
        function fe(v, X, W, k, T) {
          this.good_length = v, this.max_lazy = X, this.nice_length = W, this.max_chain = k, this.func = T;
        }
        function ve() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * A), this.dyn_dtree = new o.Buf16(2 * (2 * C + 1)), this.bl_tree = new o.Buf16(2 * (2 * B + 1)), re(this.dyn_ltree), re(this.dyn_dtree), re(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(O + 1), this.heap = new o.Buf16(2 * S + 1), re(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * S + 1), re(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function le(v) {
          var X;
          return v && v.state ? (v.total_in = v.total_out = 0, v.data_type = y, (X = v.state).pending = 0, X.pending_out = 0, X.wrap < 0 && (X.wrap = -X.wrap), X.status = X.wrap ? E : F, v.adler = X.wrap === 2 ? 0 : 1, X.last_flush = l, s._tr_init(X), h) : Q(v, m);
        }
        function we(v) {
          var X = le(v);
          return X === h && function(W) {
            W.window_size = 2 * W.w_size, re(W.head), W.max_lazy_match = a[W.level].max_lazy, W.good_match = a[W.level].good_length, W.nice_match = a[W.level].nice_length, W.max_chain_length = a[W.level].max_chain, W.strstart = 0, W.block_start = 0, W.lookahead = 0, W.insert = 0, W.match_length = W.prev_length = w - 1, W.match_available = 0, W.ins_h = 0;
          }(v.state), X;
        }
        function xe(v, X, W, k, T, j) {
          if (!v) return m;
          var te = 1;
          if (X === p && (X = 6), k < 0 ? (te = 0, k = -k) : 15 < k && (te = 2, k -= 16), T < 1 || x < T || W !== _ || k < 8 || 15 < k || X < 0 || 9 < X || j < 0 || b < j) return Q(v, m);
          k === 8 && (k = 9);
          var ne = new ve();
          return (v.state = ne).strm = v, ne.wrap = te, ne.gzhead = null, ne.w_bits = k, ne.w_size = 1 << ne.w_bits, ne.w_mask = ne.w_size - 1, ne.hash_bits = T + 7, ne.hash_size = 1 << ne.hash_bits, ne.hash_mask = ne.hash_size - 1, ne.hash_shift = ~~((ne.hash_bits + w - 1) / w), ne.window = new o.Buf8(2 * ne.w_size), ne.head = new o.Buf16(ne.hash_size), ne.prev = new o.Buf16(ne.w_size), ne.lit_bufsize = 1 << T + 6, ne.pending_buf_size = 4 * ne.lit_bufsize, ne.pending_buf = new o.Buf8(ne.pending_buf_size), ne.d_buf = 1 * ne.lit_bufsize, ne.l_buf = 3 * ne.lit_bufsize, ne.level = X, ne.strategy = j, ne.method = W, we(v);
        }
        a = [new fe(0, 0, 0, 0, function(v, X) {
          var W = 65535;
          for (W > v.pending_buf_size - 5 && (W = v.pending_buf_size - 5); ; ) {
            if (v.lookahead <= 1) {
              if (pe(v), v.lookahead === 0 && X === l) return g;
              if (v.lookahead === 0) break;
            }
            v.strstart += v.lookahead, v.lookahead = 0;
            var k = v.block_start + W;
            if ((v.strstart === 0 || v.strstart >= k) && (v.lookahead = v.strstart - k, v.strstart = k, M(v, !1), v.strm.avail_out === 0) || v.strstart - v.block_start >= v.w_size - z && (M(v, !1), v.strm.avail_out === 0)) return g;
          }
          return v.insert = 0, X === d ? (M(v, !0), v.strm.avail_out === 0 ? ie : D) : (v.strstart > v.block_start && (M(v, !1), v.strm.avail_out), g);
        }), new fe(4, 4, 8, 4, Ee), new fe(4, 5, 16, 8, Ee), new fe(4, 6, 32, 32, Ee), new fe(4, 4, 16, 16, ce), new fe(8, 16, 32, 32, ce), new fe(8, 16, 128, 128, ce), new fe(8, 32, 128, 256, ce), new fe(32, 128, 258, 1024, ce), new fe(32, 258, 258, 4096, ce)], i.deflateInit = function(v, X) {
          return xe(v, X, _, 15, 8, 0);
        }, i.deflateInit2 = xe, i.deflateReset = we, i.deflateResetKeep = le, i.deflateSetHeader = function(v, X) {
          return v && v.state ? v.state.wrap !== 2 ? m : (v.state.gzhead = X, h) : m;
        }, i.deflate = function(v, X) {
          var W, k, T, j;
          if (!v || !v.state || 5 < X || X < 0) return v ? Q(v, m) : m;
          if (k = v.state, !v.output || !v.input && v.avail_in !== 0 || k.status === 666 && X !== d) return Q(v, v.avail_out === 0 ? -5 : m);
          if (k.strm = v, W = k.last_flush, k.last_flush = X, k.status === E) if (k.wrap === 2) v.adler = 0, K(k, 31), K(k, 139), K(k, 8), k.gzhead ? (K(k, (k.gzhead.text ? 1 : 0) + (k.gzhead.hcrc ? 2 : 0) + (k.gzhead.extra ? 4 : 0) + (k.gzhead.name ? 8 : 0) + (k.gzhead.comment ? 16 : 0)), K(k, 255 & k.gzhead.time), K(k, k.gzhead.time >> 8 & 255), K(k, k.gzhead.time >> 16 & 255), K(k, k.gzhead.time >> 24 & 255), K(k, k.level === 9 ? 2 : 2 <= k.strategy || k.level < 2 ? 4 : 0), K(k, 255 & k.gzhead.os), k.gzhead.extra && k.gzhead.extra.length && (K(k, 255 & k.gzhead.extra.length), K(k, k.gzhead.extra.length >> 8 & 255)), k.gzhead.hcrc && (v.adler = c(v.adler, k.pending_buf, k.pending, 0)), k.gzindex = 0, k.status = 69) : (K(k, 0), K(k, 0), K(k, 0), K(k, 0), K(k, 0), K(k, k.level === 9 ? 2 : 2 <= k.strategy || k.level < 2 ? 4 : 0), K(k, 3), k.status = F);
          else {
            var te = _ + (k.w_bits - 8 << 4) << 8;
            te |= (2 <= k.strategy || k.level < 2 ? 0 : k.level < 6 ? 1 : k.level === 6 ? 2 : 3) << 6, k.strstart !== 0 && (te |= 32), te += 31 - te % 31, k.status = F, ee(k, te), k.strstart !== 0 && (ee(k, v.adler >>> 16), ee(k, 65535 & v.adler)), v.adler = 1;
          }
          if (k.status === 69) if (k.gzhead.extra) {
            for (T = k.pending; k.gzindex < (65535 & k.gzhead.extra.length) && (k.pending !== k.pending_buf_size || (k.gzhead.hcrc && k.pending > T && (v.adler = c(v.adler, k.pending_buf, k.pending - T, T)), P(v), T = k.pending, k.pending !== k.pending_buf_size)); ) K(k, 255 & k.gzhead.extra[k.gzindex]), k.gzindex++;
            k.gzhead.hcrc && k.pending > T && (v.adler = c(v.adler, k.pending_buf, k.pending - T, T)), k.gzindex === k.gzhead.extra.length && (k.gzindex = 0, k.status = 73);
          } else k.status = 73;
          if (k.status === 73) if (k.gzhead.name) {
            T = k.pending;
            do {
              if (k.pending === k.pending_buf_size && (k.gzhead.hcrc && k.pending > T && (v.adler = c(v.adler, k.pending_buf, k.pending - T, T)), P(v), T = k.pending, k.pending === k.pending_buf_size)) {
                j = 1;
                break;
              }
              j = k.gzindex < k.gzhead.name.length ? 255 & k.gzhead.name.charCodeAt(k.gzindex++) : 0, K(k, j);
            } while (j !== 0);
            k.gzhead.hcrc && k.pending > T && (v.adler = c(v.adler, k.pending_buf, k.pending - T, T)), j === 0 && (k.gzindex = 0, k.status = 91);
          } else k.status = 91;
          if (k.status === 91) if (k.gzhead.comment) {
            T = k.pending;
            do {
              if (k.pending === k.pending_buf_size && (k.gzhead.hcrc && k.pending > T && (v.adler = c(v.adler, k.pending_buf, k.pending - T, T)), P(v), T = k.pending, k.pending === k.pending_buf_size)) {
                j = 1;
                break;
              }
              j = k.gzindex < k.gzhead.comment.length ? 255 & k.gzhead.comment.charCodeAt(k.gzindex++) : 0, K(k, j);
            } while (j !== 0);
            k.gzhead.hcrc && k.pending > T && (v.adler = c(v.adler, k.pending_buf, k.pending - T, T)), j === 0 && (k.status = 103);
          } else k.status = 103;
          if (k.status === 103 && (k.gzhead.hcrc ? (k.pending + 2 > k.pending_buf_size && P(v), k.pending + 2 <= k.pending_buf_size && (K(k, 255 & v.adler), K(k, v.adler >> 8 & 255), v.adler = 0, k.status = F)) : k.status = F), k.pending !== 0) {
            if (P(v), v.avail_out === 0) return k.last_flush = -1, h;
          } else if (v.avail_in === 0 && L(X) <= L(W) && X !== d) return Q(v, -5);
          if (k.status === 666 && v.avail_in !== 0) return Q(v, -5);
          if (v.avail_in !== 0 || k.lookahead !== 0 || X !== l && k.status !== 666) {
            var ne = k.strategy === 2 ? function(G, V) {
              for (var J; ; ) {
                if (G.lookahead === 0 && (pe(G), G.lookahead === 0)) {
                  if (V === l) return g;
                  break;
                }
                if (G.match_length = 0, J = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++, J && (M(G, !1), G.strm.avail_out === 0)) return g;
              }
              return G.insert = 0, V === d ? (M(G, !0), G.strm.avail_out === 0 ? ie : D) : G.last_lit && (M(G, !1), G.strm.avail_out === 0) ? g : q;
            }(k, X) : k.strategy === 3 ? function(G, V) {
              for (var J, Z, ae, de, _e = G.window; ; ) {
                if (G.lookahead <= N) {
                  if (pe(G), G.lookahead <= N && V === l) return g;
                  if (G.lookahead === 0) break;
                }
                if (G.match_length = 0, G.lookahead >= w && 0 < G.strstart && (Z = _e[ae = G.strstart - 1]) === _e[++ae] && Z === _e[++ae] && Z === _e[++ae]) {
                  de = G.strstart + N;
                  do
                    ;
                  while (Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && Z === _e[++ae] && ae < de);
                  G.match_length = N - (de - ae), G.match_length > G.lookahead && (G.match_length = G.lookahead);
                }
                if (G.match_length >= w ? (J = s._tr_tally(G, 1, G.match_length - w), G.lookahead -= G.match_length, G.strstart += G.match_length, G.match_length = 0) : (J = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++), J && (M(G, !1), G.strm.avail_out === 0)) return g;
              }
              return G.insert = 0, V === d ? (M(G, !0), G.strm.avail_out === 0 ? ie : D) : G.last_lit && (M(G, !1), G.strm.avail_out === 0) ? g : q;
            }(k, X) : a[k.level].func(k, X);
            if (ne !== ie && ne !== D || (k.status = 666), ne === g || ne === ie) return v.avail_out === 0 && (k.last_flush = -1), h;
            if (ne === q && (X === 1 ? s._tr_align(k) : X !== 5 && (s._tr_stored_block(k, 0, 0, !1), X === 3 && (re(k.head), k.lookahead === 0 && (k.strstart = 0, k.block_start = 0, k.insert = 0))), P(v), v.avail_out === 0)) return k.last_flush = -1, h;
          }
          return X !== d ? h : k.wrap <= 0 ? 1 : (k.wrap === 2 ? (K(k, 255 & v.adler), K(k, v.adler >> 8 & 255), K(k, v.adler >> 16 & 255), K(k, v.adler >> 24 & 255), K(k, 255 & v.total_in), K(k, v.total_in >> 8 & 255), K(k, v.total_in >> 16 & 255), K(k, v.total_in >> 24 & 255)) : (ee(k, v.adler >>> 16), ee(k, 65535 & v.adler)), P(v), 0 < k.wrap && (k.wrap = -k.wrap), k.pending !== 0 ? h : 1);
        }, i.deflateEnd = function(v) {
          var X;
          return v && v.state ? (X = v.state.status) !== E && X !== 69 && X !== 73 && X !== 91 && X !== 103 && X !== F && X !== 666 ? Q(v, m) : (v.state = null, X === F ? Q(v, -3) : h) : m;
        }, i.deflateSetDictionary = function(v, X) {
          var W, k, T, j, te, ne, G, V, J = X.length;
          if (!v || !v.state || (j = (W = v.state).wrap) === 2 || j === 1 && W.status !== E || W.lookahead) return m;
          for (j === 1 && (v.adler = u(v.adler, X, J, 0)), W.wrap = 0, J >= W.w_size && (j === 0 && (re(W.head), W.strstart = 0, W.block_start = 0, W.insert = 0), V = new o.Buf8(W.w_size), o.arraySet(V, X, J - W.w_size, W.w_size, 0), X = V, J = W.w_size), te = v.avail_in, ne = v.next_in, G = v.input, v.avail_in = J, v.next_in = 0, v.input = X, pe(W); W.lookahead >= w; ) {
            for (k = W.strstart, T = W.lookahead - (w - 1); W.ins_h = (W.ins_h << W.hash_shift ^ W.window[k + w - 1]) & W.hash_mask, W.prev[k & W.w_mask] = W.head[W.ins_h], W.head[W.ins_h] = k, k++, --T; ) ;
            W.strstart = k, W.lookahead = w - 1, pe(W);
          }
          return W.strstart += W.lookahead, W.block_start = W.strstart, W.insert = W.lookahead, W.lookahead = 0, W.match_length = W.prev_length = w - 1, W.match_available = 0, v.next_in = ne, v.input = G, v.avail_in = te, W.wrap = j, h;
        }, i.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, n, i) {
        n.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(r, n, i) {
        n.exports = function(a, o) {
          var s, u, c, f, l, d, h, m, p, b, y, _, x, S, C, B, A, O, w, N, z, E, F, g, q;
          s = a.state, u = a.next_in, g = a.input, c = u + (a.avail_in - 5), f = a.next_out, q = a.output, l = f - (o - a.avail_out), d = f + (a.avail_out - 257), h = s.dmax, m = s.wsize, p = s.whave, b = s.wnext, y = s.window, _ = s.hold, x = s.bits, S = s.lencode, C = s.distcode, B = (1 << s.lenbits) - 1, A = (1 << s.distbits) - 1;
          e: do {
            x < 15 && (_ += g[u++] << x, x += 8, _ += g[u++] << x, x += 8), O = S[_ & B];
            t: for (; ; ) {
              if (_ >>>= w = O >>> 24, x -= w, (w = O >>> 16 & 255) === 0) q[f++] = 65535 & O;
              else {
                if (!(16 & w)) {
                  if (!(64 & w)) {
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
                N = 65535 & O, (w &= 15) && (x < w && (_ += g[u++] << x, x += 8), N += _ & (1 << w) - 1, _ >>>= w, x -= w), x < 15 && (_ += g[u++] << x, x += 8, _ += g[u++] << x, x += 8), O = C[_ & A];
                r: for (; ; ) {
                  if (_ >>>= w = O >>> 24, x -= w, !(16 & (w = O >>> 16 & 255))) {
                    if (!(64 & w)) {
                      O = C[(65535 & O) + (_ & (1 << w) - 1)];
                      continue r;
                    }
                    a.msg = "invalid distance code", s.mode = 30;
                    break e;
                  }
                  if (z = 65535 & O, x < (w &= 15) && (_ += g[u++] << x, (x += 8) < w && (_ += g[u++] << x, x += 8)), h < (z += _ & (1 << w) - 1)) {
                    a.msg = "invalid distance too far back", s.mode = 30;
                    break e;
                  }
                  if (_ >>>= w, x -= w, (w = f - l) < z) {
                    if (p < (w = z - w) && s.sane) {
                      a.msg = "invalid distance too far back", s.mode = 30;
                      break e;
                    }
                    if (F = y, (E = 0) === b) {
                      if (E += m - w, w < N) {
                        for (N -= w; q[f++] = y[E++], --w; ) ;
                        E = f - z, F = q;
                      }
                    } else if (b < w) {
                      if (E += m + b - w, (w -= b) < N) {
                        for (N -= w; q[f++] = y[E++], --w; ) ;
                        if (E = 0, b < N) {
                          for (N -= w = b; q[f++] = y[E++], --w; ) ;
                          E = f - z, F = q;
                        }
                      }
                    } else if (E += b - w, w < N) {
                      for (N -= w; q[f++] = y[E++], --w; ) ;
                      E = f - z, F = q;
                    }
                    for (; 2 < N; ) q[f++] = F[E++], q[f++] = F[E++], q[f++] = F[E++], N -= 3;
                    N && (q[f++] = F[E++], 1 < N && (q[f++] = F[E++]));
                  } else {
                    for (E = f - z; q[f++] = q[E++], q[f++] = q[E++], q[f++] = q[E++], 2 < (N -= 3); ) ;
                    N && (q[f++] = q[E++], 1 < N && (q[f++] = q[E++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (u < c && f < d);
          u -= N = x >> 3, _ &= (1 << (x -= N << 3)) - 1, a.next_in = u, a.next_out = f, a.avail_in = u < c ? c - u + 5 : 5 - (u - c), a.avail_out = f < d ? d - f + 257 : 257 - (f - d), s.hold = _, s.bits = x;
        };
      }, {}], 49: [function(r, n, i) {
        var a = r("../utils/common"), o = r("./adler32"), s = r("./crc32"), u = r("./inffast"), c = r("./inftrees"), f = 1, l = 2, d = 0, h = -2, m = 1, p = 852, b = 592;
        function y(E) {
          return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
        }
        function _() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new a.Buf16(320), this.work = new a.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function x(E) {
          var F;
          return E && E.state ? (F = E.state, E.total_in = E.total_out = F.total = 0, E.msg = "", F.wrap && (E.adler = 1 & F.wrap), F.mode = m, F.last = 0, F.havedict = 0, F.dmax = 32768, F.head = null, F.hold = 0, F.bits = 0, F.lencode = F.lendyn = new a.Buf32(p), F.distcode = F.distdyn = new a.Buf32(b), F.sane = 1, F.back = -1, d) : h;
        }
        function S(E) {
          var F;
          return E && E.state ? ((F = E.state).wsize = 0, F.whave = 0, F.wnext = 0, x(E)) : h;
        }
        function C(E, F) {
          var g, q;
          return E && E.state ? (q = E.state, F < 0 ? (g = 0, F = -F) : (g = 1 + (F >> 4), F < 48 && (F &= 15)), F && (F < 8 || 15 < F) ? h : (q.window !== null && q.wbits !== F && (q.window = null), q.wrap = g, q.wbits = F, S(E))) : h;
        }
        function B(E, F) {
          var g, q;
          return E ? (q = new _(), (E.state = q).window = null, (g = C(E, F)) !== d && (E.state = null), g) : h;
        }
        var A, O, w = !0;
        function N(E) {
          if (w) {
            var F;
            for (A = new a.Buf32(512), O = new a.Buf32(32), F = 0; F < 144; ) E.lens[F++] = 8;
            for (; F < 256; ) E.lens[F++] = 9;
            for (; F < 280; ) E.lens[F++] = 7;
            for (; F < 288; ) E.lens[F++] = 8;
            for (c(f, E.lens, 0, 288, A, 0, E.work, { bits: 9 }), F = 0; F < 32; ) E.lens[F++] = 5;
            c(l, E.lens, 0, 32, O, 0, E.work, { bits: 5 }), w = !1;
          }
          E.lencode = A, E.lenbits = 9, E.distcode = O, E.distbits = 5;
        }
        function z(E, F, g, q) {
          var ie, D = E.state;
          return D.window === null && (D.wsize = 1 << D.wbits, D.wnext = 0, D.whave = 0, D.window = new a.Buf8(D.wsize)), q >= D.wsize ? (a.arraySet(D.window, F, g - D.wsize, D.wsize, 0), D.wnext = 0, D.whave = D.wsize) : (q < (ie = D.wsize - D.wnext) && (ie = q), a.arraySet(D.window, F, g - q, ie, D.wnext), (q -= ie) ? (a.arraySet(D.window, F, g - q, q, 0), D.wnext = q, D.whave = D.wsize) : (D.wnext += ie, D.wnext === D.wsize && (D.wnext = 0), D.whave < D.wsize && (D.whave += ie))), 0;
        }
        i.inflateReset = S, i.inflateReset2 = C, i.inflateResetKeep = x, i.inflateInit = function(E) {
          return B(E, 15);
        }, i.inflateInit2 = B, i.inflate = function(E, F) {
          var g, q, ie, D, Q, L, re, P, M, K, ee, H, pe, Ee, ce, fe, ve, le, we, xe, v, X, W, k, T = 0, j = new a.Buf8(4), te = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0) return h;
          (g = E.state).mode === 12 && (g.mode = 13), Q = E.next_out, ie = E.output, re = E.avail_out, D = E.next_in, q = E.input, L = E.avail_in, P = g.hold, M = g.bits, K = L, ee = re, X = d;
          e: for (; ; ) switch (g.mode) {
            case m:
              if (g.wrap === 0) {
                g.mode = 13;
                break;
              }
              for (; M < 16; ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              if (2 & g.wrap && P === 35615) {
                j[g.check = 0] = 255 & P, j[1] = P >>> 8 & 255, g.check = s(g.check, j, 2, 0), M = P = 0, g.mode = 2;
                break;
              }
              if (g.flags = 0, g.head && (g.head.done = !1), !(1 & g.wrap) || (((255 & P) << 8) + (P >> 8)) % 31) {
                E.msg = "incorrect header check", g.mode = 30;
                break;
              }
              if ((15 & P) != 8) {
                E.msg = "unknown compression method", g.mode = 30;
                break;
              }
              if (M -= 4, v = 8 + (15 & (P >>>= 4)), g.wbits === 0) g.wbits = v;
              else if (v > g.wbits) {
                E.msg = "invalid window size", g.mode = 30;
                break;
              }
              g.dmax = 1 << v, E.adler = g.check = 1, g.mode = 512 & P ? 10 : 12, M = P = 0;
              break;
            case 2:
              for (; M < 16; ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              if (g.flags = P, (255 & g.flags) != 8) {
                E.msg = "unknown compression method", g.mode = 30;
                break;
              }
              if (57344 & g.flags) {
                E.msg = "unknown header flags set", g.mode = 30;
                break;
              }
              g.head && (g.head.text = P >> 8 & 1), 512 & g.flags && (j[0] = 255 & P, j[1] = P >>> 8 & 255, g.check = s(g.check, j, 2, 0)), M = P = 0, g.mode = 3;
            case 3:
              for (; M < 32; ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              g.head && (g.head.time = P), 512 & g.flags && (j[0] = 255 & P, j[1] = P >>> 8 & 255, j[2] = P >>> 16 & 255, j[3] = P >>> 24 & 255, g.check = s(g.check, j, 4, 0)), M = P = 0, g.mode = 4;
            case 4:
              for (; M < 16; ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              g.head && (g.head.xflags = 255 & P, g.head.os = P >> 8), 512 & g.flags && (j[0] = 255 & P, j[1] = P >>> 8 & 255, g.check = s(g.check, j, 2, 0)), M = P = 0, g.mode = 5;
            case 5:
              if (1024 & g.flags) {
                for (; M < 16; ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                g.length = P, g.head && (g.head.extra_len = P), 512 & g.flags && (j[0] = 255 & P, j[1] = P >>> 8 & 255, g.check = s(g.check, j, 2, 0)), M = P = 0;
              } else g.head && (g.head.extra = null);
              g.mode = 6;
            case 6:
              if (1024 & g.flags && (L < (H = g.length) && (H = L), H && (g.head && (v = g.head.extra_len - g.length, g.head.extra || (g.head.extra = new Array(g.head.extra_len)), a.arraySet(g.head.extra, q, D, H, v)), 512 & g.flags && (g.check = s(g.check, q, H, D)), L -= H, D += H, g.length -= H), g.length)) break e;
              g.length = 0, g.mode = 7;
            case 7:
              if (2048 & g.flags) {
                if (L === 0) break e;
                for (H = 0; v = q[D + H++], g.head && v && g.length < 65536 && (g.head.name += String.fromCharCode(v)), v && H < L; ) ;
                if (512 & g.flags && (g.check = s(g.check, q, H, D)), L -= H, D += H, v) break e;
              } else g.head && (g.head.name = null);
              g.length = 0, g.mode = 8;
            case 8:
              if (4096 & g.flags) {
                if (L === 0) break e;
                for (H = 0; v = q[D + H++], g.head && v && g.length < 65536 && (g.head.comment += String.fromCharCode(v)), v && H < L; ) ;
                if (512 & g.flags && (g.check = s(g.check, q, H, D)), L -= H, D += H, v) break e;
              } else g.head && (g.head.comment = null);
              g.mode = 9;
            case 9:
              if (512 & g.flags) {
                for (; M < 16; ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                if (P !== (65535 & g.check)) {
                  E.msg = "header crc mismatch", g.mode = 30;
                  break;
                }
                M = P = 0;
              }
              g.head && (g.head.hcrc = g.flags >> 9 & 1, g.head.done = !0), E.adler = g.check = 0, g.mode = 12;
              break;
            case 10:
              for (; M < 32; ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              E.adler = g.check = y(P), M = P = 0, g.mode = 11;
            case 11:
              if (g.havedict === 0) return E.next_out = Q, E.avail_out = re, E.next_in = D, E.avail_in = L, g.hold = P, g.bits = M, 2;
              E.adler = g.check = 1, g.mode = 12;
            case 12:
              if (F === 5 || F === 6) break e;
            case 13:
              if (g.last) {
                P >>>= 7 & M, M -= 7 & M, g.mode = 27;
                break;
              }
              for (; M < 3; ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              switch (g.last = 1 & P, M -= 1, 3 & (P >>>= 1)) {
                case 0:
                  g.mode = 14;
                  break;
                case 1:
                  if (N(g), g.mode = 20, F !== 6) break;
                  P >>>= 2, M -= 2;
                  break e;
                case 2:
                  g.mode = 17;
                  break;
                case 3:
                  E.msg = "invalid block type", g.mode = 30;
              }
              P >>>= 2, M -= 2;
              break;
            case 14:
              for (P >>>= 7 & M, M -= 7 & M; M < 32; ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              if ((65535 & P) != (P >>> 16 ^ 65535)) {
                E.msg = "invalid stored block lengths", g.mode = 30;
                break;
              }
              if (g.length = 65535 & P, M = P = 0, g.mode = 15, F === 6) break e;
            case 15:
              g.mode = 16;
            case 16:
              if (H = g.length) {
                if (L < H && (H = L), re < H && (H = re), H === 0) break e;
                a.arraySet(ie, q, D, H, Q), L -= H, D += H, re -= H, Q += H, g.length -= H;
                break;
              }
              g.mode = 12;
              break;
            case 17:
              for (; M < 14; ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              if (g.nlen = 257 + (31 & P), P >>>= 5, M -= 5, g.ndist = 1 + (31 & P), P >>>= 5, M -= 5, g.ncode = 4 + (15 & P), P >>>= 4, M -= 4, 286 < g.nlen || 30 < g.ndist) {
                E.msg = "too many length or distance symbols", g.mode = 30;
                break;
              }
              g.have = 0, g.mode = 18;
            case 18:
              for (; g.have < g.ncode; ) {
                for (; M < 3; ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                g.lens[te[g.have++]] = 7 & P, P >>>= 3, M -= 3;
              }
              for (; g.have < 19; ) g.lens[te[g.have++]] = 0;
              if (g.lencode = g.lendyn, g.lenbits = 7, W = { bits: g.lenbits }, X = c(0, g.lens, 0, 19, g.lencode, 0, g.work, W), g.lenbits = W.bits, X) {
                E.msg = "invalid code lengths set", g.mode = 30;
                break;
              }
              g.have = 0, g.mode = 19;
            case 19:
              for (; g.have < g.nlen + g.ndist; ) {
                for (; fe = (T = g.lencode[P & (1 << g.lenbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                if (ve < 16) P >>>= ce, M -= ce, g.lens[g.have++] = ve;
                else {
                  if (ve === 16) {
                    for (k = ce + 2; M < k; ) {
                      if (L === 0) break e;
                      L--, P += q[D++] << M, M += 8;
                    }
                    if (P >>>= ce, M -= ce, g.have === 0) {
                      E.msg = "invalid bit length repeat", g.mode = 30;
                      break;
                    }
                    v = g.lens[g.have - 1], H = 3 + (3 & P), P >>>= 2, M -= 2;
                  } else if (ve === 17) {
                    for (k = ce + 3; M < k; ) {
                      if (L === 0) break e;
                      L--, P += q[D++] << M, M += 8;
                    }
                    M -= ce, v = 0, H = 3 + (7 & (P >>>= ce)), P >>>= 3, M -= 3;
                  } else {
                    for (k = ce + 7; M < k; ) {
                      if (L === 0) break e;
                      L--, P += q[D++] << M, M += 8;
                    }
                    M -= ce, v = 0, H = 11 + (127 & (P >>>= ce)), P >>>= 7, M -= 7;
                  }
                  if (g.have + H > g.nlen + g.ndist) {
                    E.msg = "invalid bit length repeat", g.mode = 30;
                    break;
                  }
                  for (; H--; ) g.lens[g.have++] = v;
                }
              }
              if (g.mode === 30) break;
              if (g.lens[256] === 0) {
                E.msg = "invalid code -- missing end-of-block", g.mode = 30;
                break;
              }
              if (g.lenbits = 9, W = { bits: g.lenbits }, X = c(f, g.lens, 0, g.nlen, g.lencode, 0, g.work, W), g.lenbits = W.bits, X) {
                E.msg = "invalid literal/lengths set", g.mode = 30;
                break;
              }
              if (g.distbits = 6, g.distcode = g.distdyn, W = { bits: g.distbits }, X = c(l, g.lens, g.nlen, g.ndist, g.distcode, 0, g.work, W), g.distbits = W.bits, X) {
                E.msg = "invalid distances set", g.mode = 30;
                break;
              }
              if (g.mode = 20, F === 6) break e;
            case 20:
              g.mode = 21;
            case 21:
              if (6 <= L && 258 <= re) {
                E.next_out = Q, E.avail_out = re, E.next_in = D, E.avail_in = L, g.hold = P, g.bits = M, u(E, ee), Q = E.next_out, ie = E.output, re = E.avail_out, D = E.next_in, q = E.input, L = E.avail_in, P = g.hold, M = g.bits, g.mode === 12 && (g.back = -1);
                break;
              }
              for (g.back = 0; fe = (T = g.lencode[P & (1 << g.lenbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              if (fe && !(240 & fe)) {
                for (le = ce, we = fe, xe = ve; fe = (T = g.lencode[xe + ((P & (1 << le + we) - 1) >> le)]) >>> 16 & 255, ve = 65535 & T, !(le + (ce = T >>> 24) <= M); ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                P >>>= le, M -= le, g.back += le;
              }
              if (P >>>= ce, M -= ce, g.back += ce, g.length = ve, fe === 0) {
                g.mode = 26;
                break;
              }
              if (32 & fe) {
                g.back = -1, g.mode = 12;
                break;
              }
              if (64 & fe) {
                E.msg = "invalid literal/length code", g.mode = 30;
                break;
              }
              g.extra = 15 & fe, g.mode = 22;
            case 22:
              if (g.extra) {
                for (k = g.extra; M < k; ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                g.length += P & (1 << g.extra) - 1, P >>>= g.extra, M -= g.extra, g.back += g.extra;
              }
              g.was = g.length, g.mode = 23;
            case 23:
              for (; fe = (T = g.distcode[P & (1 << g.distbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                if (L === 0) break e;
                L--, P += q[D++] << M, M += 8;
              }
              if (!(240 & fe)) {
                for (le = ce, we = fe, xe = ve; fe = (T = g.distcode[xe + ((P & (1 << le + we) - 1) >> le)]) >>> 16 & 255, ve = 65535 & T, !(le + (ce = T >>> 24) <= M); ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                P >>>= le, M -= le, g.back += le;
              }
              if (P >>>= ce, M -= ce, g.back += ce, 64 & fe) {
                E.msg = "invalid distance code", g.mode = 30;
                break;
              }
              g.offset = ve, g.extra = 15 & fe, g.mode = 24;
            case 24:
              if (g.extra) {
                for (k = g.extra; M < k; ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                g.offset += P & (1 << g.extra) - 1, P >>>= g.extra, M -= g.extra, g.back += g.extra;
              }
              if (g.offset > g.dmax) {
                E.msg = "invalid distance too far back", g.mode = 30;
                break;
              }
              g.mode = 25;
            case 25:
              if (re === 0) break e;
              if (H = ee - re, g.offset > H) {
                if ((H = g.offset - H) > g.whave && g.sane) {
                  E.msg = "invalid distance too far back", g.mode = 30;
                  break;
                }
                pe = H > g.wnext ? (H -= g.wnext, g.wsize - H) : g.wnext - H, H > g.length && (H = g.length), Ee = g.window;
              } else Ee = ie, pe = Q - g.offset, H = g.length;
              for (re < H && (H = re), re -= H, g.length -= H; ie[Q++] = Ee[pe++], --H; ) ;
              g.length === 0 && (g.mode = 21);
              break;
            case 26:
              if (re === 0) break e;
              ie[Q++] = g.length, re--, g.mode = 21;
              break;
            case 27:
              if (g.wrap) {
                for (; M < 32; ) {
                  if (L === 0) break e;
                  L--, P |= q[D++] << M, M += 8;
                }
                if (ee -= re, E.total_out += ee, g.total += ee, ee && (E.adler = g.check = g.flags ? s(g.check, ie, ee, Q - ee) : o(g.check, ie, ee, Q - ee)), ee = re, (g.flags ? P : y(P)) !== g.check) {
                  E.msg = "incorrect data check", g.mode = 30;
                  break;
                }
                M = P = 0;
              }
              g.mode = 28;
            case 28:
              if (g.wrap && g.flags) {
                for (; M < 32; ) {
                  if (L === 0) break e;
                  L--, P += q[D++] << M, M += 8;
                }
                if (P !== (4294967295 & g.total)) {
                  E.msg = "incorrect length check", g.mode = 30;
                  break;
                }
                M = P = 0;
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
          return E.next_out = Q, E.avail_out = re, E.next_in = D, E.avail_in = L, g.hold = P, g.bits = M, (g.wsize || ee !== E.avail_out && g.mode < 30 && (g.mode < 27 || F !== 4)) && z(E, E.output, E.next_out, ee - E.avail_out) ? (g.mode = 31, -4) : (K -= E.avail_in, ee -= E.avail_out, E.total_in += K, E.total_out += ee, g.total += ee, g.wrap && ee && (E.adler = g.check = g.flags ? s(g.check, ie, ee, E.next_out - ee) : o(g.check, ie, ee, E.next_out - ee)), E.data_type = g.bits + (g.last ? 64 : 0) + (g.mode === 12 ? 128 : 0) + (g.mode === 20 || g.mode === 15 ? 256 : 0), (K == 0 && ee === 0 || F === 4) && X === d && (X = -5), X);
        }, i.inflateEnd = function(E) {
          if (!E || !E.state) return h;
          var F = E.state;
          return F.window && (F.window = null), E.state = null, d;
        }, i.inflateGetHeader = function(E, F) {
          var g;
          return E && E.state && 2 & (g = E.state).wrap ? ((g.head = F).done = !1, d) : h;
        }, i.inflateSetDictionary = function(E, F) {
          var g, q = F.length;
          return E && E.state ? (g = E.state).wrap !== 0 && g.mode !== 11 ? h : g.mode === 11 && o(1, F, q, 0) !== g.check ? -3 : z(E, F, q, q) ? (g.mode = 31, -4) : (g.havedict = 1, d) : h;
        }, i.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, n, i) {
        var a = r("../utils/common"), o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        n.exports = function(f, l, d, h, m, p, b, y) {
          var _, x, S, C, B, A, O, w, N, z = y.bits, E = 0, F = 0, g = 0, q = 0, ie = 0, D = 0, Q = 0, L = 0, re = 0, P = 0, M = null, K = 0, ee = new a.Buf16(16), H = new a.Buf16(16), pe = null, Ee = 0;
          for (E = 0; E <= 15; E++) ee[E] = 0;
          for (F = 0; F < h; F++) ee[l[d + F]]++;
          for (ie = z, q = 15; 1 <= q && ee[q] === 0; q--) ;
          if (q < ie && (ie = q), q === 0) return m[p++] = 20971520, m[p++] = 20971520, y.bits = 1, 0;
          for (g = 1; g < q && ee[g] === 0; g++) ;
          for (ie < g && (ie = g), E = L = 1; E <= 15; E++) if (L <<= 1, (L -= ee[E]) < 0) return -1;
          if (0 < L && (f === 0 || q !== 1)) return -1;
          for (H[1] = 0, E = 1; E < 15; E++) H[E + 1] = H[E] + ee[E];
          for (F = 0; F < h; F++) l[d + F] !== 0 && (b[H[l[d + F]]++] = F);
          if (A = f === 0 ? (M = pe = b, 19) : f === 1 ? (M = o, K -= 257, pe = s, Ee -= 257, 256) : (M = u, pe = c, -1), E = g, B = p, Q = F = P = 0, S = -1, C = (re = 1 << (D = ie)) - 1, f === 1 && 852 < re || f === 2 && 592 < re) return 1;
          for (; ; ) {
            for (O = E - Q, N = b[F] < A ? (w = 0, b[F]) : b[F] > A ? (w = pe[Ee + b[F]], M[K + b[F]]) : (w = 96, 0), _ = 1 << E - Q, g = x = 1 << D; m[B + (P >> Q) + (x -= _)] = O << 24 | w << 16 | N | 0, x !== 0; ) ;
            for (_ = 1 << E - 1; P & _; ) _ >>= 1;
            if (_ !== 0 ? (P &= _ - 1, P += _) : P = 0, F++, --ee[E] == 0) {
              if (E === q) break;
              E = l[d + b[F]];
            }
            if (ie < E && (P & C) !== S) {
              for (Q === 0 && (Q = ie), B += g, L = 1 << (D = E - Q); D + Q < q && !((L -= ee[D + Q]) <= 0); ) D++, L <<= 1;
              if (re += 1 << D, f === 1 && 852 < re || f === 2 && 592 < re) return 1;
              m[S = P & C] = ie << 24 | D << 16 | B - p | 0;
            }
          }
          return P !== 0 && (m[B + P] = E - Q << 24 | 64 << 16 | 0), y.bits = ie, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(r, n, i) {
        n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(r, n, i) {
        var a = r("../utils/common"), o = 0, s = 1;
        function u(T) {
          for (var j = T.length; 0 <= --j; ) T[j] = 0;
        }
        var c = 0, f = 29, l = 256, d = l + 1 + f, h = 30, m = 19, p = 2 * d + 1, b = 15, y = 16, _ = 7, x = 256, S = 16, C = 17, B = 18, A = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], O = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], N = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (d + 2));
        u(z);
        var E = new Array(2 * h);
        u(E);
        var F = new Array(512);
        u(F);
        var g = new Array(256);
        u(g);
        var q = new Array(f);
        u(q);
        var ie, D, Q, L = new Array(h);
        function re(T, j, te, ne, G) {
          this.static_tree = T, this.extra_bits = j, this.extra_base = te, this.elems = ne, this.max_length = G, this.has_stree = T && T.length;
        }
        function P(T, j) {
          this.dyn_tree = T, this.max_code = 0, this.stat_desc = j;
        }
        function M(T) {
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
        function Ee(T, j, te) {
          var ne, G, V = new Array(b + 1), J = 0;
          for (ne = 1; ne <= b; ne++) V[ne] = J = J + te[ne - 1] << 1;
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
          T.dyn_ltree[2 * x] = 1, T.opt_len = T.static_len = 0, T.last_lit = T.matches = 0;
        }
        function fe(T) {
          8 < T.bi_valid ? K(T, T.bi_buf) : 0 < T.bi_valid && (T.pending_buf[T.pending++] = T.bi_buf), T.bi_buf = 0, T.bi_valid = 0;
        }
        function ve(T, j, te, ne) {
          var G = 2 * j, V = 2 * te;
          return T[G] < T[V] || T[G] === T[V] && ne[j] <= ne[te];
        }
        function le(T, j, te) {
          for (var ne = T.heap[te], G = te << 1; G <= T.heap_len && (G < T.heap_len && ve(j, T.heap[G + 1], T.heap[G], T.depth) && G++, !ve(j, ne, T.heap[G], T.depth)); ) T.heap[te] = T.heap[G], te = G, G <<= 1;
          T.heap[te] = ne;
        }
        function we(T, j, te) {
          var ne, G, V, J, Z = 0;
          if (T.last_lit !== 0) for (; ne = T.pending_buf[T.d_buf + 2 * Z] << 8 | T.pending_buf[T.d_buf + 2 * Z + 1], G = T.pending_buf[T.l_buf + Z], Z++, ne === 0 ? H(T, G, j) : (H(T, (V = g[G]) + l + 1, j), (J = A[V]) !== 0 && ee(T, G -= q[V], J), H(T, V = M(--ne), te), (J = O[V]) !== 0 && ee(T, ne -= L[V], J)), Z < T.last_lit; ) ;
          H(T, x, j);
        }
        function xe(T, j) {
          var te, ne, G, V = j.dyn_tree, J = j.stat_desc.static_tree, Z = j.stat_desc.has_stree, ae = j.stat_desc.elems, de = -1;
          for (T.heap_len = 0, T.heap_max = p, te = 0; te < ae; te++) V[2 * te] !== 0 ? (T.heap[++T.heap_len] = de = te, T.depth[te] = 0) : V[2 * te + 1] = 0;
          for (; T.heap_len < 2; ) V[2 * (G = T.heap[++T.heap_len] = de < 2 ? ++de : 0)] = 1, T.depth[G] = 0, T.opt_len--, Z && (T.static_len -= J[2 * G + 1]);
          for (j.max_code = de, te = T.heap_len >> 1; 1 <= te; te--) le(T, V, te);
          for (G = ae; te = T.heap[1], T.heap[1] = T.heap[T.heap_len--], le(T, V, 1), ne = T.heap[1], T.heap[--T.heap_max] = te, T.heap[--T.heap_max] = ne, V[2 * G] = V[2 * te] + V[2 * ne], T.depth[G] = (T.depth[te] >= T.depth[ne] ? T.depth[te] : T.depth[ne]) + 1, V[2 * te + 1] = V[2 * ne + 1] = G, T.heap[1] = G++, le(T, V, 1), 2 <= T.heap_len; ) ;
          T.heap[--T.heap_max] = T.heap[1], function(_e, Fe) {
            var Ve, Ne, Le, Ce, He, Ft, dt = Fe.dyn_tree, Lr = Fe.max_code, wa = Fe.stat_desc.static_tree, Br = Fe.stat_desc.has_stree, jr = Fe.stat_desc.extra_bits, ti = Fe.stat_desc.extra_base, wt = Fe.stat_desc.max_length, zr = 0;
            for (Ce = 0; Ce <= b; Ce++) _e.bl_count[Ce] = 0;
            for (dt[2 * _e.heap[_e.heap_max] + 1] = 0, Ve = _e.heap_max + 1; Ve < p; Ve++) wt < (Ce = dt[2 * dt[2 * (Ne = _e.heap[Ve]) + 1] + 1] + 1) && (Ce = wt, zr++), dt[2 * Ne + 1] = Ce, Lr < Ne || (_e.bl_count[Ce]++, He = 0, ti <= Ne && (He = jr[Ne - ti]), Ft = dt[2 * Ne], _e.opt_len += Ft * (Ce + He), Br && (_e.static_len += Ft * (wa[2 * Ne + 1] + He)));
            if (zr !== 0) {
              do {
                for (Ce = wt - 1; _e.bl_count[Ce] === 0; ) Ce--;
                _e.bl_count[Ce]--, _e.bl_count[Ce + 1] += 2, _e.bl_count[wt]--, zr -= 2;
              } while (0 < zr);
              for (Ce = wt; Ce !== 0; Ce--) for (Ne = _e.bl_count[Ce]; Ne !== 0; ) Lr < (Le = _e.heap[--Ve]) || (dt[2 * Le + 1] !== Ce && (_e.opt_len += (Ce - dt[2 * Le + 1]) * dt[2 * Le], dt[2 * Le + 1] = Ce), Ne--);
            }
          }(T, j), Ee(V, de, T.bl_count);
        }
        function v(T, j, te) {
          var ne, G, V = -1, J = j[1], Z = 0, ae = 7, de = 4;
          for (J === 0 && (ae = 138, de = 3), j[2 * (te + 1) + 1] = 65535, ne = 0; ne <= te; ne++) G = J, J = j[2 * (ne + 1) + 1], ++Z < ae && G === J || (Z < de ? T.bl_tree[2 * G] += Z : G !== 0 ? (G !== V && T.bl_tree[2 * G]++, T.bl_tree[2 * S]++) : Z <= 10 ? T.bl_tree[2 * C]++ : T.bl_tree[2 * B]++, V = G, de = (Z = 0) === J ? (ae = 138, 3) : G === J ? (ae = 6, 3) : (ae = 7, 4));
        }
        function X(T, j, te) {
          var ne, G, V = -1, J = j[1], Z = 0, ae = 7, de = 4;
          for (J === 0 && (ae = 138, de = 3), ne = 0; ne <= te; ne++) if (G = J, J = j[2 * (ne + 1) + 1], !(++Z < ae && G === J)) {
            if (Z < de) for (; H(T, G, T.bl_tree), --Z != 0; ) ;
            else G !== 0 ? (G !== V && (H(T, G, T.bl_tree), Z--), H(T, S, T.bl_tree), ee(T, Z - 3, 2)) : Z <= 10 ? (H(T, C, T.bl_tree), ee(T, Z - 3, 3)) : (H(T, B, T.bl_tree), ee(T, Z - 11, 7));
            V = G, de = (Z = 0) === J ? (ae = 138, 3) : G === J ? (ae = 6, 3) : (ae = 7, 4);
          }
        }
        u(L);
        var W = !1;
        function k(T, j, te, ne) {
          ee(T, (c << 1) + (ne ? 1 : 0), 3), function(G, V, J, Z) {
            fe(G), K(G, J), K(G, ~J), a.arraySet(G.pending_buf, G.window, V, J, G.pending), G.pending += J;
          }(T, j, te);
        }
        i._tr_init = function(T) {
          W || (function() {
            var j, te, ne, G, V, J = new Array(b + 1);
            for (G = ne = 0; G < f - 1; G++) for (q[G] = ne, j = 0; j < 1 << A[G]; j++) g[ne++] = G;
            for (g[ne - 1] = G, G = V = 0; G < 16; G++) for (L[G] = V, j = 0; j < 1 << O[G]; j++) F[V++] = G;
            for (V >>= 7; G < h; G++) for (L[G] = V << 7, j = 0; j < 1 << O[G] - 7; j++) F[256 + V++] = G;
            for (te = 0; te <= b; te++) J[te] = 0;
            for (j = 0; j <= 143; ) z[2 * j + 1] = 8, j++, J[8]++;
            for (; j <= 255; ) z[2 * j + 1] = 9, j++, J[9]++;
            for (; j <= 279; ) z[2 * j + 1] = 7, j++, J[7]++;
            for (; j <= 287; ) z[2 * j + 1] = 8, j++, J[8]++;
            for (Ee(z, d + 1, J), j = 0; j < h; j++) E[2 * j + 1] = 5, E[2 * j] = pe(j, 5);
            ie = new re(z, A, l + 1, d, b), D = new re(E, O, 0, h, b), Q = new re(new Array(0), w, 0, m, _);
          }(), W = !0), T.l_desc = new P(T.dyn_ltree, ie), T.d_desc = new P(T.dyn_dtree, D), T.bl_desc = new P(T.bl_tree, Q), T.bi_buf = 0, T.bi_valid = 0, ce(T);
        }, i._tr_stored_block = k, i._tr_flush_block = function(T, j, te, ne) {
          var G, V, J = 0;
          0 < T.level ? (T.strm.data_type === 2 && (T.strm.data_type = function(Z) {
            var ae, de = 4093624447;
            for (ae = 0; ae <= 31; ae++, de >>>= 1) if (1 & de && Z.dyn_ltree[2 * ae] !== 0) return o;
            if (Z.dyn_ltree[18] !== 0 || Z.dyn_ltree[20] !== 0 || Z.dyn_ltree[26] !== 0) return s;
            for (ae = 32; ae < l; ae++) if (Z.dyn_ltree[2 * ae] !== 0) return s;
            return o;
          }(T)), xe(T, T.l_desc), xe(T, T.d_desc), J = function(Z) {
            var ae;
            for (v(Z, Z.dyn_ltree, Z.l_desc.max_code), v(Z, Z.dyn_dtree, Z.d_desc.max_code), xe(Z, Z.bl_desc), ae = m - 1; 3 <= ae && Z.bl_tree[2 * N[ae] + 1] === 0; ae--) ;
            return Z.opt_len += 3 * (ae + 1) + 5 + 5 + 4, ae;
          }(T), G = T.opt_len + 3 + 7 >>> 3, (V = T.static_len + 3 + 7 >>> 3) <= G && (G = V)) : G = V = te + 5, te + 4 <= G && j !== -1 ? k(T, j, te, ne) : T.strategy === 4 || V === G ? (ee(T, 2 + (ne ? 1 : 0), 3), we(T, z, E)) : (ee(T, 4 + (ne ? 1 : 0), 3), function(Z, ae, de, _e) {
            var Fe;
            for (ee(Z, ae - 257, 5), ee(Z, de - 1, 5), ee(Z, _e - 4, 4), Fe = 0; Fe < _e; Fe++) ee(Z, Z.bl_tree[2 * N[Fe] + 1], 3);
            X(Z, Z.dyn_ltree, ae - 1), X(Z, Z.dyn_dtree, de - 1);
          }(T, T.l_desc.max_code + 1, T.d_desc.max_code + 1, J + 1), we(T, T.dyn_ltree, T.dyn_dtree)), ce(T), ne && fe(T);
        }, i._tr_tally = function(T, j, te) {
          return T.pending_buf[T.d_buf + 2 * T.last_lit] = j >>> 8 & 255, T.pending_buf[T.d_buf + 2 * T.last_lit + 1] = 255 & j, T.pending_buf[T.l_buf + T.last_lit] = 255 & te, T.last_lit++, j === 0 ? T.dyn_ltree[2 * te]++ : (T.matches++, j--, T.dyn_ltree[2 * (g[te] + l + 1)]++, T.dyn_dtree[2 * M(j)]++), T.last_lit === T.lit_bufsize - 1;
        }, i._tr_align = function(T) {
          ee(T, 2, 3), H(T, x, z), function(j) {
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
              var u, c, f, l, d = 1, h = {}, m = !1, p = o.document, b = Object.getPrototypeOf && Object.getPrototypeOf(o);
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
              }() ? (l = "setImmediate$" + Math.random() + "$", o.addEventListener ? o.addEventListener("message", x, !1) : o.attachEvent("onmessage", x), function(S) {
                o.postMessage(l + S, "*");
              }) : o.MessageChannel ? ((f = new MessageChannel()).port1.onmessage = function(S) {
                _(S.data);
              }, function(S) {
                f.port2.postMessage(S);
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
                var A = { callback: S, args: C };
                return h[d] = A, u(d), d++;
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
                      var A = B.callback, O = B.args;
                      switch (O.length) {
                        case 0:
                          A();
                          break;
                        case 1:
                          A(O[0]);
                          break;
                        case 2:
                          A(O[0], O[1]);
                          break;
                        case 3:
                          A(O[0], O[1], O[2]);
                          break;
                        default:
                          A.apply(s, O);
                      }
                    })(C);
                  } finally {
                    y(S), m = !1;
                  }
                }
              }
            }
            function x(S) {
              S.source === o && typeof S.data == "string" && S.data.indexOf(l) === 0 && _(+S.data.slice(l.length));
            }
          })(typeof self > "u" ? a === void 0 ? this : a : self);
        }).call(this, typeof xr < "u" ? xr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }(Xa)), Xa.exports;
}
var hE = fE();
const ZS = /* @__PURE__ */ nn(hE);
var Lh = {}, Bh = {}, bn, jh;
function ze() {
  if (jh) return bn;
  jh = 1;
  var e = function(t) {
    return t && t.Math === Math && t;
  };
  return bn = // eslint-disable-next-line es/no-global-this -- safe
  e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  e(typeof self == "object" && self) || e(typeof xr == "object" && xr) || e(typeof bn == "object" && bn) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), bn;
}
var Za = {}, Ja, zh;
function qe() {
  return zh || (zh = 1, Ja = function(e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  }), Ja;
}
var Qa, qh;
function Nt() {
  if (qh) return Qa;
  qh = 1;
  var e = qe();
  return Qa = !e(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), Qa;
}
var es, Uh;
function aa() {
  if (Uh) return es;
  Uh = 1;
  var e = qe();
  return es = !e(function() {
    var t = (function() {
    }).bind();
    return typeof t != "function" || t.hasOwnProperty("prototype");
  }), es;
}
var ts, $h;
function et() {
  if ($h) return ts;
  $h = 1;
  var e = aa(), t = Function.prototype.call;
  return ts = e ? t.bind(t) : function() {
    return t.apply(t, arguments);
  }, ts;
}
var rs = {}, Wh;
function dE() {
  if (Wh) return rs;
  Wh = 1;
  var e = {}.propertyIsEnumerable, t = Object.getOwnPropertyDescriptor, r = t && !e.call({ 1: 2 }, 1);
  return rs.f = r ? function(i) {
    var a = t(this, i);
    return !!a && a.enumerable;
  } : e, rs;
}
var ns, Gh;
function Pl() {
  return Gh || (Gh = 1, ns = function(e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t
    };
  }), ns;
}
var is, Vh;
function Ue() {
  if (Vh) return is;
  Vh = 1;
  var e = aa(), t = Function.prototype, r = t.call, n = e && t.bind.bind(r, r);
  return is = e ? n : function(i) {
    return function() {
      return r.apply(i, arguments);
    };
  }, is;
}
var as, Hh;
function Pr() {
  if (Hh) return as;
  Hh = 1;
  var e = Ue(), t = e({}.toString), r = e("".slice);
  return as = function(n) {
    return r(t(n), 8, -1);
  }, as;
}
var ss, Kh;
function Ey() {
  if (Kh) return ss;
  Kh = 1;
  var e = Ue(), t = qe(), r = Pr(), n = Object, i = e("".split);
  return ss = t(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(a) {
    return r(a) === "String" ? i(a, "") : n(a);
  } : n, ss;
}
var os, Yh;
function Mr() {
  return Yh || (Yh = 1, os = function(e) {
    return e == null;
  }), os;
}
var us, Xh;
function Pt() {
  if (Xh) return us;
  Xh = 1;
  var e = Mr(), t = TypeError;
  return us = function(r) {
    if (e(r)) throw new t("Can't call method on " + r);
    return r;
  }, us;
}
var cs, Zh;
function Gn() {
  if (Zh) return cs;
  Zh = 1;
  var e = Ey(), t = Pt();
  return cs = function(r) {
    return e(t(r));
  }, cs;
}
var ls, Jh;
function $e() {
  if (Jh) return ls;
  Jh = 1;
  var e = typeof document == "object" && document.all;
  return ls = typeof e > "u" && e !== void 0 ? function(t) {
    return typeof t == "function" || t === e;
  } : function(t) {
    return typeof t == "function";
  }, ls;
}
var fs, Qh;
function Mt() {
  if (Qh) return fs;
  Qh = 1;
  var e = $e();
  return fs = function(t) {
    return typeof t == "object" ? t !== null : e(t);
  }, fs;
}
var hs, ed;
function Dr() {
  if (ed) return hs;
  ed = 1;
  var e = ze(), t = $e(), r = function(n) {
    return t(n) ? n : void 0;
  };
  return hs = function(n, i) {
    return arguments.length < 2 ? r(e[n]) : e[n] && e[n][i];
  }, hs;
}
var ds, td;
function sa() {
  if (td) return ds;
  td = 1;
  var e = Ue();
  return ds = e({}.isPrototypeOf), ds;
}
var ps, rd;
function Vn() {
  if (rd) return ps;
  rd = 1;
  var e = ze(), t = e.navigator, r = t && t.userAgent;
  return ps = r ? String(r) : "", ps;
}
var ms, nd;
function Ml() {
  if (nd) return ms;
  nd = 1;
  var e = ze(), t = Vn(), r = e.process, n = e.Deno, i = r && r.versions || n && n.version, a = i && i.v8, o, s;
  return a && (o = a.split("."), s = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !s && t && (o = t.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = t.match(/Chrome\/(\d+)/), o && (s = +o[1]))), ms = s, ms;
}
var gs, id;
function Oy() {
  if (id) return gs;
  id = 1;
  var e = Ml(), t = qe(), r = ze(), n = r.String;
  return gs = !!Object.getOwnPropertySymbols && !t(function() {
    var i = Symbol("symbol detection");
    return !n(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && e && e < 41;
  }), gs;
}
var vs, ad;
function Sy() {
  if (ad) return vs;
  ad = 1;
  var e = Oy();
  return vs = e && !Symbol.sham && typeof Symbol.iterator == "symbol", vs;
}
var ys, sd;
function Ty() {
  if (sd) return ys;
  sd = 1;
  var e = Dr(), t = $e(), r = sa(), n = Sy(), i = Object;
  return ys = n ? function(a) {
    return typeof a == "symbol";
  } : function(a) {
    var o = e("Symbol");
    return t(o) && r(o.prototype, i(a));
  }, ys;
}
var bs, od;
function oa() {
  if (od) return bs;
  od = 1;
  var e = String;
  return bs = function(t) {
    try {
      return e(t);
    } catch {
      return "Object";
    }
  }, bs;
}
var _s, ud;
function ir() {
  if (ud) return _s;
  ud = 1;
  var e = $e(), t = oa(), r = TypeError;
  return _s = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a function");
  }, _s;
}
var ws, cd;
function sn() {
  if (cd) return ws;
  cd = 1;
  var e = ir(), t = Mr();
  return ws = function(r, n) {
    var i = r[n];
    return t(i) ? void 0 : e(i);
  }, ws;
}
var xs, ld;
function pE() {
  if (ld) return xs;
  ld = 1;
  var e = et(), t = $e(), r = Mt(), n = TypeError;
  return xs = function(i, a) {
    var o, s;
    if (a === "string" && t(o = i.toString) && !r(s = e(o, i)) || t(o = i.valueOf) && !r(s = e(o, i)) || a !== "string" && t(o = i.toString) && !r(s = e(o, i))) return s;
    throw new n("Can't convert object to primitive value");
  }, xs;
}
var Es = { exports: {} }, Os, fd;
function Ht() {
  return fd || (fd = 1, Os = !1), Os;
}
var Ss, hd;
function Dl() {
  if (hd) return Ss;
  hd = 1;
  var e = ze(), t = Object.defineProperty;
  return Ss = function(r, n) {
    try {
      t(e, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      e[r] = n;
    }
    return n;
  }, Ss;
}
var dd;
function Fl() {
  if (dd) return Es.exports;
  dd = 1;
  var e = Ht(), t = ze(), r = Dl(), n = "__core-js_shared__", i = Es.exports = t[n] || r(n, {});
  return (i.versions || (i.versions = [])).push({
    version: "3.40.0",
    mode: e ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Es.exports;
}
var Ts, pd;
function Ll() {
  if (pd) return Ts;
  pd = 1;
  var e = Fl();
  return Ts = function(t, r) {
    return e[t] || (e[t] = r || {});
  }, Ts;
}
var Cs, md;
function ua() {
  if (md) return Cs;
  md = 1;
  var e = Pt(), t = Object;
  return Cs = function(r) {
    return t(e(r));
  }, Cs;
}
var As, gd;
function Dt() {
  if (gd) return As;
  gd = 1;
  var e = Ue(), t = ua(), r = e({}.hasOwnProperty);
  return As = Object.hasOwn || function(i, a) {
    return r(t(i), a);
  }, As;
}
var Rs, vd;
function Cy() {
  if (vd) return Rs;
  vd = 1;
  var e = Ue(), t = 0, r = Math.random(), n = e(1 .toString);
  return Rs = function(i) {
    return "Symbol(" + (i === void 0 ? "" : i) + ")_" + n(++t + r, 36);
  }, Rs;
}
var Is, yd;
function Ze() {
  if (yd) return Is;
  yd = 1;
  var e = ze(), t = Ll(), r = Dt(), n = Cy(), i = Oy(), a = Sy(), o = e.Symbol, s = t("wks"), u = a ? o.for || o : o && o.withoutSetter || n;
  return Is = function(c) {
    return r(s, c) || (s[c] = i && r(o, c) ? o[c] : u("Symbol." + c)), s[c];
  }, Is;
}
var ks, bd;
function mE() {
  if (bd) return ks;
  bd = 1;
  var e = et(), t = Mt(), r = Ty(), n = sn(), i = pE(), a = Ze(), o = TypeError, s = a("toPrimitive");
  return ks = function(u, c) {
    if (!t(u) || r(u)) return u;
    var f = n(u, s), l;
    if (f) {
      if (c === void 0 && (c = "default"), l = e(f, u, c), !t(l) || r(l)) return l;
      throw new o("Can't convert object to primitive value");
    }
    return c === void 0 && (c = "number"), i(u, c);
  }, ks;
}
var Ns, _d;
function Ay() {
  if (_d) return Ns;
  _d = 1;
  var e = mE(), t = Ty();
  return Ns = function(r) {
    var n = e(r, "string");
    return t(n) ? n : n + "";
  }, Ns;
}
var Ps, wd;
function ca() {
  if (wd) return Ps;
  wd = 1;
  var e = ze(), t = Mt(), r = e.document, n = t(r) && t(r.createElement);
  return Ps = function(i) {
    return n ? r.createElement(i) : {};
  }, Ps;
}
var Ms, xd;
function Ry() {
  if (xd) return Ms;
  xd = 1;
  var e = Nt(), t = qe(), r = ca();
  return Ms = !e && !t(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), Ms;
}
var Ed;
function la() {
  if (Ed) return Za;
  Ed = 1;
  var e = Nt(), t = et(), r = dE(), n = Pl(), i = Gn(), a = Ay(), o = Dt(), s = Ry(), u = Object.getOwnPropertyDescriptor;
  return Za.f = e ? u : function(f, l) {
    if (f = i(f), l = a(l), s) try {
      return u(f, l);
    } catch {
    }
    if (o(f, l)) return n(!t(r.f, f, l), f[l]);
  }, Za;
}
var Ds = {}, Fs, Od;
function Iy() {
  if (Od) return Fs;
  Od = 1;
  var e = Nt(), t = qe();
  return Fs = e && t(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), Fs;
}
var Ls, Sd;
function ut() {
  if (Sd) return Ls;
  Sd = 1;
  var e = Mt(), t = String, r = TypeError;
  return Ls = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not an object");
  }, Ls;
}
var Td;
function vr() {
  if (Td) return Ds;
  Td = 1;
  var e = Nt(), t = Ry(), r = Iy(), n = ut(), i = Ay(), a = TypeError, o = Object.defineProperty, s = Object.getOwnPropertyDescriptor, u = "enumerable", c = "configurable", f = "writable";
  return Ds.f = e ? r ? function(d, h, m) {
    if (n(d), h = i(h), n(m), typeof d == "function" && h === "prototype" && "value" in m && f in m && !m[f]) {
      var p = s(d, h);
      p && p[f] && (d[h] = m.value, m = {
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
  }, Ds;
}
var Bs, Cd;
function Hn() {
  if (Cd) return Bs;
  Cd = 1;
  var e = Nt(), t = vr(), r = Pl();
  return Bs = e ? function(n, i, a) {
    return t.f(n, i, r(1, a));
  } : function(n, i, a) {
    return n[i] = a, n;
  }, Bs;
}
var js = { exports: {} }, zs, Ad;
function fa() {
  if (Ad) return zs;
  Ad = 1;
  var e = Nt(), t = Dt(), r = Function.prototype, n = e && Object.getOwnPropertyDescriptor, i = t(r, "name"), a = i && (function() {
  }).name === "something", o = i && (!e || e && n(r, "name").configurable);
  return zs = {
    EXISTS: i,
    PROPER: a,
    CONFIGURABLE: o
  }, zs;
}
var qs, Rd;
function Bl() {
  if (Rd) return qs;
  Rd = 1;
  var e = Ue(), t = $e(), r = Fl(), n = e(Function.toString);
  return t(r.inspectSource) || (r.inspectSource = function(i) {
    return n(i);
  }), qs = r.inspectSource, qs;
}
var Us, Id;
function gE() {
  if (Id) return Us;
  Id = 1;
  var e = ze(), t = $e(), r = e.WeakMap;
  return Us = t(r) && /native code/.test(String(r)), Us;
}
var $s, kd;
function jl() {
  if (kd) return $s;
  kd = 1;
  var e = Ll(), t = Cy(), r = e("keys");
  return $s = function(n) {
    return r[n] || (r[n] = t(n));
  }, $s;
}
var Ws, Nd;
function zl() {
  return Nd || (Nd = 1, Ws = {}), Ws;
}
var Gs, Pd;
function ha() {
  if (Pd) return Gs;
  Pd = 1;
  var e = gE(), t = ze(), r = Mt(), n = Hn(), i = Dt(), a = Fl(), o = jl(), s = zl(), u = "Object already initialized", c = t.TypeError, f = t.WeakMap, l, d, h, m = function(_) {
    return h(_) ? d(_) : l(_, {});
  }, p = function(_) {
    return function(x) {
      var S;
      if (!r(x) || (S = d(x)).type !== _)
        throw new c("Incompatible receiver, " + _ + " required");
      return S;
    };
  };
  if (e || a.state) {
    var b = a.state || (a.state = new f());
    b.get = b.get, b.has = b.has, b.set = b.set, l = function(_, x) {
      if (b.has(_)) throw new c(u);
      return x.facade = _, b.set(_, x), x;
    }, d = function(_) {
      return b.get(_) || {};
    }, h = function(_) {
      return b.has(_);
    };
  } else {
    var y = o("state");
    s[y] = !0, l = function(_, x) {
      if (i(_, y)) throw new c(u);
      return x.facade = _, n(_, y, x), x;
    }, d = function(_) {
      return i(_, y) ? _[y] : {};
    }, h = function(_) {
      return i(_, y);
    };
  }
  return Gs = {
    set: l,
    get: d,
    has: h,
    enforce: m,
    getterFor: p
  }, Gs;
}
var Md;
function ky() {
  if (Md) return js.exports;
  Md = 1;
  var e = Ue(), t = qe(), r = $e(), n = Dt(), i = Nt(), a = fa().CONFIGURABLE, o = Bl(), s = ha(), u = s.enforce, c = s.get, f = String, l = Object.defineProperty, d = e("".slice), h = e("".replace), m = e([].join), p = i && !t(function() {
    return l(function() {
    }, "length", { value: 8 }).length !== 8;
  }), b = String(String).split("String"), y = js.exports = function(_, x, S) {
    d(f(x), 0, 7) === "Symbol(" && (x = "[" + h(f(x), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), S && S.getter && (x = "get " + x), S && S.setter && (x = "set " + x), (!n(_, "name") || a && _.name !== x) && (i ? l(_, "name", { value: x, configurable: !0 }) : _.name = x), p && S && n(S, "arity") && _.length !== S.arity && l(_, "length", { value: S.arity });
    try {
      S && n(S, "constructor") && S.constructor ? i && l(_, "prototype", { writable: !1 }) : _.prototype && (_.prototype = void 0);
    } catch {
    }
    var C = u(_);
    return n(C, "source") || (C.source = m(b, typeof x == "string" ? x : "")), _;
  };
  return Function.prototype.toString = y(function() {
    return r(this) && c(this).source || o(this);
  }, "toString"), js.exports;
}
var Vs, Dd;
function Fr() {
  if (Dd) return Vs;
  Dd = 1;
  var e = $e(), t = vr(), r = ky(), n = Dl();
  return Vs = function(i, a, o, s) {
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
  }, Vs;
}
var Hs = {}, Ks, Fd;
function vE() {
  if (Fd) return Ks;
  Fd = 1;
  var e = Math.ceil, t = Math.floor;
  return Ks = Math.trunc || function(n) {
    var i = +n;
    return (i > 0 ? t : e)(i);
  }, Ks;
}
var Ys, Ld;
function da() {
  if (Ld) return Ys;
  Ld = 1;
  var e = vE();
  return Ys = function(t) {
    var r = +t;
    return r !== r || r === 0 ? 0 : e(r);
  }, Ys;
}
var Xs, Bd;
function yE() {
  if (Bd) return Xs;
  Bd = 1;
  var e = da(), t = Math.max, r = Math.min;
  return Xs = function(n, i) {
    var a = e(n);
    return a < 0 ? t(a + i, 0) : r(a, i);
  }, Xs;
}
var Zs, jd;
function on() {
  if (jd) return Zs;
  jd = 1;
  var e = da(), t = Math.min;
  return Zs = function(r) {
    var n = e(r);
    return n > 0 ? t(n, 9007199254740991) : 0;
  }, Zs;
}
var Js, zd;
function ql() {
  if (zd) return Js;
  zd = 1;
  var e = on();
  return Js = function(t) {
    return e(t.length);
  }, Js;
}
var Qs, qd;
function Ny() {
  if (qd) return Qs;
  qd = 1;
  var e = Gn(), t = yE(), r = ql(), n = function(i) {
    return function(a, o, s) {
      var u = e(a), c = r(u);
      if (c === 0) return !i && -1;
      var f = t(s, c), l;
      if (i && o !== o) {
        for (; c > f; )
          if (l = u[f++], l !== l) return !0;
      } else for (; c > f; f++)
        if ((i || f in u) && u[f] === o) return i || f || 0;
      return !i && -1;
    };
  };
  return Qs = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: n(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: n(!1)
  }, Qs;
}
var eo, Ud;
function Py() {
  if (Ud) return eo;
  Ud = 1;
  var e = Ue(), t = Dt(), r = Gn(), n = Ny().indexOf, i = zl(), a = e([].push);
  return eo = function(o, s) {
    var u = r(o), c = 0, f = [], l;
    for (l in u) !t(i, l) && t(u, l) && a(f, l);
    for (; s.length > c; ) t(u, l = s[c++]) && (~n(f, l) || a(f, l));
    return f;
  }, eo;
}
var to, $d;
function Ul() {
  return $d || ($d = 1, to = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), to;
}
var Wd;
function bE() {
  if (Wd) return Hs;
  Wd = 1;
  var e = Py(), t = Ul(), r = t.concat("length", "prototype");
  return Hs.f = Object.getOwnPropertyNames || function(i) {
    return e(i, r);
  }, Hs;
}
var ro = {}, Gd;
function _E() {
  return Gd || (Gd = 1, ro.f = Object.getOwnPropertySymbols), ro;
}
var no, Vd;
function wE() {
  if (Vd) return no;
  Vd = 1;
  var e = Dr(), t = Ue(), r = bE(), n = _E(), i = ut(), a = t([].concat);
  return no = e("Reflect", "ownKeys") || function(s) {
    var u = r.f(i(s)), c = n.f;
    return c ? a(u, c(s)) : u;
  }, no;
}
var io, Hd;
function xE() {
  if (Hd) return io;
  Hd = 1;
  var e = Dt(), t = wE(), r = la(), n = vr();
  return io = function(i, a, o) {
    for (var s = t(a), u = n.f, c = r.f, f = 0; f < s.length; f++) {
      var l = s[f];
      !e(i, l) && !(o && e(o, l)) && u(i, l, c(a, l));
    }
  }, io;
}
var ao, Kd;
function My() {
  if (Kd) return ao;
  Kd = 1;
  var e = qe(), t = $e(), r = /#|\.prototype\./, n = function(u, c) {
    var f = a[i(u)];
    return f === s ? !0 : f === o ? !1 : t(c) ? e(c) : !!c;
  }, i = n.normalize = function(u) {
    return String(u).replace(r, ".").toLowerCase();
  }, a = n.data = {}, o = n.NATIVE = "N", s = n.POLYFILL = "P";
  return ao = n, ao;
}
var so, Yd;
function ct() {
  if (Yd) return so;
  Yd = 1;
  var e = ze(), t = la().f, r = Hn(), n = Fr(), i = Dl(), a = xE(), o = My();
  return so = function(s, u) {
    var c = s.target, f = s.global, l = s.stat, d, h, m, p, b, y;
    if (f ? h = e : l ? h = e[c] || i(c, {}) : h = e[c] && e[c].prototype, h) for (m in u) {
      if (b = u[m], s.dontCallGetSet ? (y = t(h, m), p = y && y.value) : p = h[m], d = o(f ? m : c + (l ? "." : "#") + m, s.forced), !d && p !== void 0) {
        if (typeof b == typeof p) continue;
        a(b, p);
      }
      (s.sham || p && p.sham) && r(b, "sham", !0), n(h, m, b, s);
    }
  }, so;
}
var oo, Xd;
function Dy() {
  if (Xd) return oo;
  Xd = 1;
  var e = ze(), t = Vn(), r = Pr(), n = function(i) {
    return t.slice(0, i.length) === i;
  };
  return oo = function() {
    return n("Bun/") ? "BUN" : n("Cloudflare-Workers") ? "CLOUDFLARE" : n("Deno/") ? "DENO" : n("Node.js/") ? "NODE" : e.Bun && typeof Bun.version == "string" ? "BUN" : e.Deno && typeof Deno.version == "object" ? "DENO" : r(e.process) === "process" ? "NODE" : e.window && e.document ? "BROWSER" : "REST";
  }(), oo;
}
var uo, Zd;
function pa() {
  if (Zd) return uo;
  Zd = 1;
  var e = Dy();
  return uo = e === "NODE", uo;
}
var co, Jd;
function EE() {
  if (Jd) return co;
  Jd = 1;
  var e = Ue(), t = ir();
  return co = function(r, n, i) {
    try {
      return e(t(Object.getOwnPropertyDescriptor(r, n)[i]));
    } catch {
    }
  }, co;
}
var lo, Qd;
function OE() {
  if (Qd) return lo;
  Qd = 1;
  var e = Mt();
  return lo = function(t) {
    return e(t) || t === null;
  }, lo;
}
var fo, ep;
function SE() {
  if (ep) return fo;
  ep = 1;
  var e = OE(), t = String, r = TypeError;
  return fo = function(n) {
    if (e(n)) return n;
    throw new r("Can't set " + t(n) + " as a prototype");
  }, fo;
}
var ho, tp;
function Fy() {
  if (tp) return ho;
  tp = 1;
  var e = EE(), t = Mt(), r = Pt(), n = SE();
  return ho = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var i = !1, a = {}, o;
    try {
      o = e(Object.prototype, "__proto__", "set"), o(a, []), i = a instanceof Array;
    } catch {
    }
    return function(u, c) {
      return r(u), n(c), t(u) && (i ? o(u, c) : u.__proto__ = c), u;
    };
  }() : void 0), ho;
}
var po, rp;
function ma() {
  if (rp) return po;
  rp = 1;
  var e = vr().f, t = Dt(), r = Ze(), n = r("toStringTag");
  return po = function(i, a, o) {
    i && !o && (i = i.prototype), i && !t(i, n) && e(i, n, { configurable: !0, value: a });
  }, po;
}
var mo, np;
function TE() {
  if (np) return mo;
  np = 1;
  var e = ky(), t = vr();
  return mo = function(r, n, i) {
    return i.get && e(i.get, n, { getter: !0 }), i.set && e(i.set, n, { setter: !0 }), t.f(r, n, i);
  }, mo;
}
var go, ip;
function CE() {
  if (ip) return go;
  ip = 1;
  var e = Dr(), t = TE(), r = Ze(), n = Nt(), i = r("species");
  return go = function(a) {
    var o = e(a);
    n && o && !o[i] && t(o, i, {
      configurable: !0,
      get: function() {
        return this;
      }
    });
  }, go;
}
var vo, ap;
function AE() {
  if (ap) return vo;
  ap = 1;
  var e = sa(), t = TypeError;
  return vo = function(r, n) {
    if (e(n, r)) return r;
    throw new t("Incorrect invocation");
  }, vo;
}
var yo, sp;
function RE() {
  if (sp) return yo;
  sp = 1;
  var e = Ze(), t = e("toStringTag"), r = {};
  return r[t] = "z", yo = String(r) === "[object z]", yo;
}
var bo, op;
function $l() {
  if (op) return bo;
  op = 1;
  var e = RE(), t = $e(), r = Pr(), n = Ze(), i = n("toStringTag"), a = Object, o = r(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", s = function(u, c) {
    try {
      return u[c];
    } catch {
    }
  };
  return bo = e ? r : function(u) {
    var c, f, l;
    return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (f = s(c = a(u), i)) == "string" ? f : o ? r(c) : (l = r(c)) === "Object" && t(c.callee) ? "Arguments" : l;
  }, bo;
}
var _o, up;
function IE() {
  if (up) return _o;
  up = 1;
  var e = Ue(), t = qe(), r = $e(), n = $l(), i = Dr(), a = Bl(), o = function() {
  }, s = i("Reflect", "construct"), u = /^\s*(?:class|function)\b/, c = e(u.exec), f = !u.test(o), l = function(m) {
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
      return f || !!c(u, a(m));
    } catch {
      return !0;
    }
  };
  return d.sham = !0, _o = !s || t(function() {
    var h;
    return l(l.call) || !l(Object) || !l(function() {
      h = !0;
    }) || h;
  }) ? d : l, _o;
}
var wo, cp;
function kE() {
  if (cp) return wo;
  cp = 1;
  var e = IE(), t = oa(), r = TypeError;
  return wo = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a constructor");
  }, wo;
}
var xo, lp;
function Ly() {
  if (lp) return xo;
  lp = 1;
  var e = ut(), t = kE(), r = Mr(), n = Ze(), i = n("species");
  return xo = function(a, o) {
    var s = e(a).constructor, u;
    return s === void 0 || r(u = e(s)[i]) ? o : t(u);
  }, xo;
}
var Eo, fp;
function By() {
  if (fp) return Eo;
  fp = 1;
  var e = aa(), t = Function.prototype, r = t.apply, n = t.call;
  return Eo = typeof Reflect == "object" && Reflect.apply || (e ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), Eo;
}
var Oo, hp;
function ga() {
  if (hp) return Oo;
  hp = 1;
  var e = Pr(), t = Ue();
  return Oo = function(r) {
    if (e(r) === "Function") return t(r);
  }, Oo;
}
var So, dp;
function Wl() {
  if (dp) return So;
  dp = 1;
  var e = ga(), t = ir(), r = aa(), n = e(e.bind);
  return So = function(i, a) {
    return t(i), a === void 0 ? i : r ? n(i, a) : function() {
      return i.apply(a, arguments);
    };
  }, So;
}
var To, pp;
function jy() {
  if (pp) return To;
  pp = 1;
  var e = Dr();
  return To = e("document", "documentElement"), To;
}
var Co, mp;
function NE() {
  if (mp) return Co;
  mp = 1;
  var e = Ue();
  return Co = e([].slice), Co;
}
var Ao, gp;
function PE() {
  if (gp) return Ao;
  gp = 1;
  var e = TypeError;
  return Ao = function(t, r) {
    if (t < r) throw new e("Not enough arguments");
    return t;
  }, Ao;
}
var Ro, vp;
function zy() {
  if (vp) return Ro;
  vp = 1;
  var e = Vn();
  return Ro = /(?:ipad|iphone|ipod).*applewebkit/i.test(e), Ro;
}
var Io, yp;
function qy() {
  if (yp) return Io;
  yp = 1;
  var e = ze(), t = By(), r = Wl(), n = $e(), i = Dt(), a = qe(), o = jy(), s = NE(), u = ca(), c = PE(), f = zy(), l = pa(), d = e.setImmediate, h = e.clearImmediate, m = e.process, p = e.Dispatch, b = e.Function, y = e.MessageChannel, _ = e.String, x = 0, S = {}, C = "onreadystatechange", B, A, O, w;
  a(function() {
    B = e.location;
  });
  var N = function(g) {
    if (i(S, g)) {
      var q = S[g];
      delete S[g], q();
    }
  }, z = function(g) {
    return function() {
      N(g);
    };
  }, E = function(g) {
    N(g.data);
  }, F = function(g) {
    e.postMessage(_(g), B.protocol + "//" + B.host);
  };
  return (!d || !h) && (d = function(q) {
    c(arguments.length, 1);
    var ie = n(q) ? q : b(q), D = s(arguments, 1);
    return S[++x] = function() {
      t(ie, void 0, D);
    }, A(x), x;
  }, h = function(q) {
    delete S[q];
  }, l ? A = function(g) {
    m.nextTick(z(g));
  } : p && p.now ? A = function(g) {
    p.now(z(g));
  } : y && !f ? (O = new y(), w = O.port2, O.port1.onmessage = E, A = r(w.postMessage, w)) : e.addEventListener && n(e.postMessage) && !e.importScripts && B && B.protocol !== "file:" && !a(F) ? (A = F, e.addEventListener("message", E, !1)) : C in u("script") ? A = function(g) {
    o.appendChild(u("script"))[C] = function() {
      o.removeChild(this), N(g);
    };
  } : A = function(g) {
    setTimeout(z(g), 0);
  }), Io = {
    set: d,
    clear: h
  }, Io;
}
var ko, bp;
function ME() {
  if (bp) return ko;
  bp = 1;
  var e = ze(), t = Nt(), r = Object.getOwnPropertyDescriptor;
  return ko = function(n) {
    if (!t) return e[n];
    var i = r(e, n);
    return i && i.value;
  }, ko;
}
var No, _p;
function Uy() {
  if (_p) return No;
  _p = 1;
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
  }, No = e, No;
}
var Po, wp;
function DE() {
  if (wp) return Po;
  wp = 1;
  var e = Vn();
  return Po = /ipad|iphone|ipod/i.test(e) && typeof Pebble < "u", Po;
}
var Mo, xp;
function FE() {
  if (xp) return Mo;
  xp = 1;
  var e = Vn();
  return Mo = /web0s(?!.*chrome)/i.test(e), Mo;
}
var Do, Ep;
function LE() {
  if (Ep) return Do;
  Ep = 1;
  var e = ze(), t = ME(), r = Wl(), n = qy().set, i = Uy(), a = zy(), o = DE(), s = FE(), u = pa(), c = e.MutationObserver || e.WebKitMutationObserver, f = e.document, l = e.process, d = e.Promise, h = t("queueMicrotask"), m, p, b, y, _;
  if (!h) {
    var x = new i(), S = function() {
      var C, B;
      for (u && (C = l.domain) && C.exit(); B = x.get(); ) try {
        B();
      } catch (A) {
        throw x.head && m(), A;
      }
      C && C.enter();
    };
    !a && !u && !s && c && f ? (p = !0, b = f.createTextNode(""), new c(S).observe(b, { characterData: !0 }), m = function() {
      b.data = p = !p;
    }) : !o && d && d.resolve ? (y = d.resolve(void 0), y.constructor = d, _ = r(y.then, y), m = function() {
      _(S);
    }) : u ? m = function() {
      l.nextTick(S);
    } : (n = r(n, e), m = function() {
      n(S);
    }), h = function(C) {
      x.head || m(), x.add(C);
    };
  }
  return Do = h, Do;
}
var Fo, Op;
function BE() {
  return Op || (Op = 1, Fo = function(e, t) {
    try {
      arguments.length === 1 ? console.error(e) : console.error(e, t);
    } catch {
    }
  }), Fo;
}
var Lo, Sp;
function Gl() {
  return Sp || (Sp = 1, Lo = function(e) {
    try {
      return { error: !1, value: e() };
    } catch (t) {
      return { error: !0, value: t };
    }
  }), Lo;
}
var Bo, Tp;
function Kn() {
  if (Tp) return Bo;
  Tp = 1;
  var e = ze();
  return Bo = e.Promise, Bo;
}
var jo, Cp;
function Yn() {
  if (Cp) return jo;
  Cp = 1;
  var e = ze(), t = Kn(), r = $e(), n = My(), i = Bl(), a = Ze(), o = Dy(), s = Ht(), u = Ml(), c = t && t.prototype, f = a("species"), l = !1, d = r(e.PromiseRejectionEvent), h = n("Promise", function() {
    var m = i(t), p = m !== String(t);
    if (!p && u === 66 || s && !(c.catch && c.finally)) return !0;
    if (!u || u < 51 || !/native code/.test(m)) {
      var b = new t(function(x) {
        x(1);
      }), y = function(x) {
        x(function() {
        }, function() {
        });
      }, _ = b.constructor = {};
      if (_[f] = y, l = b.then(function() {
      }) instanceof y, !l) return !0;
    }
    return !p && (o === "BROWSER" || o === "DENO") && !d;
  });
  return jo = {
    CONSTRUCTOR: h,
    REJECTION_EVENT: d,
    SUBCLASSING: l
  }, jo;
}
var zo = {}, Ap;
function Xn() {
  if (Ap) return zo;
  Ap = 1;
  var e = ir(), t = TypeError, r = function(n) {
    var i, a;
    this.promise = new n(function(o, s) {
      if (i !== void 0 || a !== void 0) throw new t("Bad Promise constructor");
      i = o, a = s;
    }), this.resolve = e(i), this.reject = e(a);
  };
  return zo.f = function(n) {
    return new r(n);
  }, zo;
}
var Rp;
function jE() {
  if (Rp) return Bh;
  Rp = 1;
  var e = ct(), t = Ht(), r = pa(), n = ze(), i = et(), a = Fr(), o = Fy(), s = ma(), u = CE(), c = ir(), f = $e(), l = Mt(), d = AE(), h = Ly(), m = qy().set, p = LE(), b = BE(), y = Gl(), _ = Uy(), x = ha(), S = Kn(), C = Yn(), B = Xn(), A = "Promise", O = C.CONSTRUCTOR, w = C.REJECTION_EVENT, N = C.SUBCLASSING, z = x.getterFor(A), E = x.set, F = S && S.prototype, g = S, q = F, ie = n.TypeError, D = n.document, Q = n.process, L = B.f, re = L, P = !!(D && D.createEvent && n.dispatchEvent), M = "unhandledrejection", K = "rejectionhandled", ee = 0, H = 1, pe = 2, Ee = 1, ce = 2, fe, ve, le, we, xe = function(V) {
    var J;
    return l(V) && f(J = V.then) ? J : !1;
  }, v = function(V, J) {
    var Z = J.value, ae = J.state === H, de = ae ? V.ok : V.fail, _e = V.resolve, Fe = V.reject, Ve = V.domain, Ne, Le, Ce;
    try {
      de ? (ae || (J.rejection === ce && j(J), J.rejection = Ee), de === !0 ? Ne = Z : (Ve && Ve.enter(), Ne = de(Z), Ve && (Ve.exit(), Ce = !0)), Ne === V.promise ? Fe(new ie("Promise-chain cycle")) : (Le = xe(Ne)) ? i(Le, Ne, _e, Fe) : _e(Ne)) : Fe(Z);
    } catch (He) {
      Ve && !Ce && Ve.exit(), Fe(He);
    }
  }, X = function(V, J) {
    V.notified || (V.notified = !0, p(function() {
      for (var Z = V.reactions, ae; ae = Z.get(); )
        v(ae, V);
      V.notified = !1, J && !V.rejection && k(V);
    }));
  }, W = function(V, J, Z) {
    var ae, de;
    P ? (ae = D.createEvent("Event"), ae.promise = J, ae.reason = Z, ae.initEvent(V, !1, !0), n.dispatchEvent(ae)) : ae = { promise: J, reason: Z }, !w && (de = n["on" + V]) ? de(ae) : V === M && b("Unhandled promise rejection", Z);
  }, k = function(V) {
    i(m, n, function() {
      var J = V.facade, Z = V.value, ae = T(V), de;
      if (ae && (de = y(function() {
        r ? Q.emit("unhandledRejection", Z, J) : W(M, J, Z);
      }), V.rejection = r || T(V) ? ce : Ee, de.error))
        throw de.value;
    });
  }, T = function(V) {
    return V.rejection !== Ee && !V.parent;
  }, j = function(V) {
    i(m, n, function() {
      var J = V.facade;
      r ? Q.emit("rejectionHandled", J) : W(K, J, V.value);
    });
  }, te = function(V, J, Z) {
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
        var ae = xe(J);
        ae ? p(function() {
          var de = { done: !1 };
          try {
            i(
              ae,
              J,
              te(G, de, V),
              te(ne, de, V)
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
  if (O && (g = function(J) {
    d(this, q), c(J), i(fe, this);
    var Z = z(this);
    try {
      J(te(G, Z), te(ne, Z));
    } catch (ae) {
      ne(Z, ae);
    }
  }, q = g.prototype, fe = function(J) {
    E(this, {
      type: A,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new _(),
      rejection: !1,
      state: ee,
      value: null
    });
  }, fe.prototype = a(q, "then", function(J, Z) {
    var ae = z(this), de = L(h(this, g));
    return ae.parent = !0, de.ok = f(J) ? J : !0, de.fail = f(Z) && Z, de.domain = r ? Q.domain : void 0, ae.state === ee ? ae.reactions.add(de) : p(function() {
      v(de, ae);
    }), de.promise;
  }), ve = function() {
    var V = new fe(), J = z(V);
    this.promise = V, this.resolve = te(G, J), this.reject = te(ne, J);
  }, B.f = L = function(V) {
    return V === g || V === le ? new ve(V) : re(V);
  }, !t && f(S) && F !== Object.prototype)) {
    we = F.then, N || a(F, "then", function(J, Z) {
      var ae = this;
      return new g(function(de, _e) {
        i(we, ae, de, _e);
      }).then(J, Z);
    }, { unsafe: !0 });
    try {
      delete F.constructor;
    } catch {
    }
    o && o(F, q);
  }
  return e({ global: !0, constructor: !0, wrap: !0, forced: O }, {
    Promise: g
  }), s(g, A, !1, !0), u(A), Bh;
}
var Ip = {}, qo, kp;
function Zn() {
  return kp || (kp = 1, qo = {}), qo;
}
var Uo, Np;
function zE() {
  if (Np) return Uo;
  Np = 1;
  var e = Ze(), t = Zn(), r = e("iterator"), n = Array.prototype;
  return Uo = function(i) {
    return i !== void 0 && (t.Array === i || n[r] === i);
  }, Uo;
}
var $o, Pp;
function $y() {
  if (Pp) return $o;
  Pp = 1;
  var e = $l(), t = sn(), r = Mr(), n = Zn(), i = Ze(), a = i("iterator");
  return $o = function(o) {
    if (!r(o)) return t(o, a) || t(o, "@@iterator") || n[e(o)];
  }, $o;
}
var Wo, Mp;
function qE() {
  if (Mp) return Wo;
  Mp = 1;
  var e = et(), t = ir(), r = ut(), n = oa(), i = $y(), a = TypeError;
  return Wo = function(o, s) {
    var u = arguments.length < 2 ? i(o) : s;
    if (t(u)) return r(e(u, o));
    throw new a(n(o) + " is not iterable");
  }, Wo;
}
var Go, Dp;
function UE() {
  if (Dp) return Go;
  Dp = 1;
  var e = et(), t = ut(), r = sn();
  return Go = function(n, i, a) {
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
  }, Go;
}
var Vo, Fp;
function Wy() {
  if (Fp) return Vo;
  Fp = 1;
  var e = Wl(), t = et(), r = ut(), n = oa(), i = zE(), a = ql(), o = sa(), s = qE(), u = $y(), c = UE(), f = TypeError, l = function(h, m) {
    this.stopped = h, this.result = m;
  }, d = l.prototype;
  return Vo = function(h, m, p) {
    var b = p && p.that, y = !!(p && p.AS_ENTRIES), _ = !!(p && p.IS_RECORD), x = !!(p && p.IS_ITERATOR), S = !!(p && p.INTERRUPTED), C = e(m, b), B, A, O, w, N, z, E, F = function(q) {
      return B && c(B, "normal", q), new l(!0, q);
    }, g = function(q) {
      return y ? (r(q), S ? C(q[0], q[1], F) : C(q[0], q[1])) : S ? C(q, F) : C(q);
    };
    if (_)
      B = h.iterator;
    else if (x)
      B = h;
    else {
      if (A = u(h), !A) throw new f(n(h) + " is not iterable");
      if (i(A)) {
        for (O = 0, w = a(h); w > O; O++)
          if (N = g(h[O]), N && o(d, N)) return N;
        return new l(!1);
      }
      B = s(h, A);
    }
    for (z = _ ? h.next : B.next; !(E = t(z, B)).done; ) {
      try {
        N = g(E.value);
      } catch (q) {
        c(B, "throw", q);
      }
      if (typeof N == "object" && N && o(d, N)) return N;
    }
    return new l(!1);
  }, Vo;
}
var Ho, Lp;
function $E() {
  if (Lp) return Ho;
  Lp = 1;
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
  return Ho = function(a, o) {
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
  }, Ho;
}
var Ko, Bp;
function Gy() {
  if (Bp) return Ko;
  Bp = 1;
  var e = Kn(), t = $E(), r = Yn().CONSTRUCTOR;
  return Ko = r || !t(function(n) {
    e.all(n).then(void 0, function() {
    });
  }), Ko;
}
var jp;
function WE() {
  if (jp) return Ip;
  jp = 1;
  var e = ct(), t = et(), r = ir(), n = Xn(), i = Gl(), a = Wy(), o = Gy();
  return e({ target: "Promise", stat: !0, forced: o }, {
    all: function(u) {
      var c = this, f = n.f(c), l = f.resolve, d = f.reject, h = i(function() {
        var m = r(c.resolve), p = [], b = 0, y = 1;
        a(u, function(_) {
          var x = b++, S = !1;
          y++, t(m, c, _).then(function(C) {
            S || (S = !0, p[x] = C, --y || l(p));
          }, d);
        }), --y || l(p);
      });
      return h.error && d(h.value), f.promise;
    }
  }), Ip;
}
var zp = {}, qp;
function GE() {
  if (qp) return zp;
  qp = 1;
  var e = ct(), t = Ht(), r = Yn().CONSTRUCTOR, n = Kn(), i = Dr(), a = $e(), o = Fr(), s = n && n.prototype;
  if (e({ target: "Promise", proto: !0, forced: r, real: !0 }, {
    catch: function(c) {
      return this.then(void 0, c);
    }
  }), !t && a(n)) {
    var u = i("Promise").prototype.catch;
    s.catch !== u && o(s, "catch", u, { unsafe: !0 });
  }
  return zp;
}
var Up = {}, $p;
function VE() {
  if ($p) return Up;
  $p = 1;
  var e = ct(), t = et(), r = ir(), n = Xn(), i = Gl(), a = Wy(), o = Gy();
  return e({ target: "Promise", stat: !0, forced: o }, {
    race: function(u) {
      var c = this, f = n.f(c), l = f.reject, d = i(function() {
        var h = r(c.resolve);
        a(u, function(m) {
          t(h, c, m).then(f.resolve, l);
        });
      });
      return d.error && l(d.value), f.promise;
    }
  }), Up;
}
var Wp = {}, Gp;
function HE() {
  if (Gp) return Wp;
  Gp = 1;
  var e = ct(), t = Xn(), r = Yn().CONSTRUCTOR;
  return e({ target: "Promise", stat: !0, forced: r }, {
    reject: function(i) {
      var a = t.f(this), o = a.reject;
      return o(i), a.promise;
    }
  }), Wp;
}
var Vp = {}, Yo, Hp;
function KE() {
  if (Hp) return Yo;
  Hp = 1;
  var e = ut(), t = Mt(), r = Xn();
  return Yo = function(n, i) {
    if (e(n), t(i) && i.constructor === n) return i;
    var a = r.f(n), o = a.resolve;
    return o(i), a.promise;
  }, Yo;
}
var Kp;
function YE() {
  if (Kp) return Vp;
  Kp = 1;
  var e = ct(), t = Dr(), r = Ht(), n = Kn(), i = Yn().CONSTRUCTOR, a = KE(), o = t("Promise"), s = r && !i;
  return e({ target: "Promise", stat: !0, forced: r || i }, {
    resolve: function(c) {
      return a(s && this === o ? n : this, c);
    }
  }), Vp;
}
var Yp;
function XE() {
  return Yp || (Yp = 1, jE(), WE(), GE(), VE(), HE(), YE()), Lh;
}
XE();
function Xp(e, t, r, n, i, a, o) {
  try {
    var s = e[a](o), u = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, i);
}
function JS(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, i) {
      var a = e.apply(t, r);
      function o(u) {
        Xp(a, n, i, o, s, "next", u);
      }
      function s(u) {
        Xp(a, n, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var Zp = {}, Jp = {}, Xo, Qp;
function Kt() {
  if (Qp) return Xo;
  Qp = 1;
  var e = $l(), t = String;
  return Xo = function(r) {
    if (e(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return t(r);
  }, Xo;
}
var Zo, em;
function Vy() {
  if (em) return Zo;
  em = 1;
  var e = ut();
  return Zo = function() {
    var t = e(this), r = "";
    return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r;
  }, Zo;
}
var Jo, tm;
function Hy() {
  if (tm) return Jo;
  tm = 1;
  var e = qe(), t = ze(), r = t.RegExp, n = e(function() {
    var o = r("a", "y");
    return o.lastIndex = 2, o.exec("abcd") !== null;
  }), i = n || e(function() {
    return !r("a", "y").sticky;
  }), a = n || e(function() {
    var o = r("^r", "gy");
    return o.lastIndex = 2, o.exec("str") !== null;
  });
  return Jo = {
    BROKEN_CARET: a,
    MISSED_STICKY: i,
    UNSUPPORTED_Y: n
  }, Jo;
}
var Qo = {}, eu, rm;
function ZE() {
  if (rm) return eu;
  rm = 1;
  var e = Py(), t = Ul();
  return eu = Object.keys || function(n) {
    return e(n, t);
  }, eu;
}
var nm;
function JE() {
  if (nm) return Qo;
  nm = 1;
  var e = Nt(), t = Iy(), r = vr(), n = ut(), i = Gn(), a = ZE();
  return Qo.f = e && !t ? Object.defineProperties : function(s, u) {
    n(s);
    for (var c = i(u), f = a(u), l = f.length, d = 0, h; l > d; ) r.f(s, h = f[d++], c[h]);
    return s;
  }, Qo;
}
var tu, im;
function va() {
  if (im) return tu;
  im = 1;
  var e = ut(), t = JE(), r = Ul(), n = zl(), i = jy(), a = ca(), o = jl(), s = ">", u = "<", c = "prototype", f = "script", l = o("IE_PROTO"), d = function() {
  }, h = function(_) {
    return u + f + s + _ + u + "/" + f + s;
  }, m = function(_) {
    _.write(h("")), _.close();
    var x = _.parentWindow.Object;
    return _ = null, x;
  }, p = function() {
    var _ = a("iframe"), x = "java" + f + ":", S;
    return _.style.display = "none", i.appendChild(_), _.src = String(x), S = _.contentWindow.document, S.open(), S.write(h("document.F=Object")), S.close(), S.F;
  }, b, y = function() {
    try {
      b = new ActiveXObject("htmlfile");
    } catch {
    }
    y = typeof document < "u" ? document.domain && b ? m(b) : p() : m(b);
    for (var _ = r.length; _--; ) delete y[c][r[_]];
    return y();
  };
  return n[l] = !0, tu = Object.create || function(x, S) {
    var C;
    return x !== null ? (d[c] = e(x), C = new d(), d[c] = null, C[l] = x) : C = y(), S === void 0 ? C : t.f(C, S);
  }, tu;
}
var ru, am;
function QE() {
  if (am) return ru;
  am = 1;
  var e = qe(), t = ze(), r = t.RegExp;
  return ru = e(function() {
    var n = r(".", "s");
    return !(n.dotAll && n.test(`
`) && n.flags === "s");
  }), ru;
}
var nu, sm;
function eO() {
  if (sm) return nu;
  sm = 1;
  var e = qe(), t = ze(), r = t.RegExp;
  return nu = e(function() {
    var n = r("(?<a>b)", "g");
    return n.exec("b").groups.a !== "b" || "b".replace(n, "$<a>c") !== "bc";
  }), nu;
}
var iu, om;
function Vl() {
  if (om) return iu;
  om = 1;
  var e = et(), t = Ue(), r = Kt(), n = Vy(), i = Hy(), a = Ll(), o = va(), s = ha().get, u = QE(), c = eO(), f = a("native-string-replace", String.prototype.replace), l = RegExp.prototype.exec, d = l, h = t("".charAt), m = t("".indexOf), p = t("".replace), b = t("".slice), y = function() {
    var C = /a/, B = /b*/g;
    return e(l, C, "a"), e(l, B, "a"), C.lastIndex !== 0 || B.lastIndex !== 0;
  }(), _ = i.BROKEN_CARET, x = /()??/.exec("")[1] !== void 0, S = y || x || _ || u || c;
  return S && (d = function(B) {
    var A = this, O = s(A), w = r(B), N = O.raw, z, E, F, g, q, ie, D;
    if (N)
      return N.lastIndex = A.lastIndex, z = e(d, N, w), A.lastIndex = N.lastIndex, z;
    var Q = O.groups, L = _ && A.sticky, re = e(n, A), P = A.source, M = 0, K = w;
    if (L && (re = p(re, "y", ""), m(re, "g") === -1 && (re += "g"), K = b(w, A.lastIndex), A.lastIndex > 0 && (!A.multiline || A.multiline && h(w, A.lastIndex - 1) !== `
`) && (P = "(?: " + P + ")", K = " " + K, M++), E = new RegExp("^(?:" + P + ")", re)), x && (E = new RegExp("^" + P + "$(?!\\s)", re)), y && (F = A.lastIndex), g = e(l, L ? E : A, K), L ? g ? (g.input = b(g.input, M), g[0] = b(g[0], M), g.index = A.lastIndex, A.lastIndex += g[0].length) : A.lastIndex = 0 : y && g && (A.lastIndex = A.global ? g.index + g[0].length : F), x && g && g.length > 1 && e(f, g[0], E, function() {
      for (q = 1; q < arguments.length - 2; q++)
        arguments[q] === void 0 && (g[q] = void 0);
    }), g && Q)
      for (g.groups = ie = o(null), q = 0; q < Q.length; q++)
        D = Q[q], ie[D[0]] = g[D[1]];
    return g;
  }), iu = d, iu;
}
var um;
function tO() {
  if (um) return Jp;
  um = 1;
  var e = ct(), t = Vl();
  return e({ target: "RegExp", proto: !0, forced: /./.exec !== t }, {
    exec: t
  }), Jp;
}
var au, cm;
function Hl() {
  if (cm) return au;
  cm = 1, tO();
  var e = et(), t = Fr(), r = Vl(), n = qe(), i = Ze(), a = Hn(), o = i("species"), s = RegExp.prototype;
  return au = function(u, c, f, l) {
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
    if (!h || !m || f) {
      var p = /./[d], b = c(d, ""[u], function(y, _, x, S, C) {
        var B = _.exec;
        return B === r || B === s.exec ? h && !C ? { done: !0, value: e(p, _, x, S) } : { done: !0, value: e(y, x, _, S) } : { done: !1 };
      });
      t(String.prototype, u, b[0]), t(s, d, b[1]);
    }
    l && a(s[d], "sham", !0);
  }, au;
}
var su, lm;
function rO() {
  if (lm) return su;
  lm = 1;
  var e = Ue(), t = da(), r = Kt(), n = Pt(), i = e("".charAt), a = e("".charCodeAt), o = e("".slice), s = function(u) {
    return function(c, f) {
      var l = r(n(c)), d = t(f), h = l.length, m, p;
      return d < 0 || d >= h ? u ? "" : void 0 : (m = a(l, d), m < 55296 || m > 56319 || d + 1 === h || (p = a(l, d + 1)) < 56320 || p > 57343 ? u ? i(l, d) : m : u ? o(l, d, d + 2) : (m - 55296 << 10) + (p - 56320) + 65536);
    };
  };
  return su = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: s(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: s(!0)
  }, su;
}
var ou, fm;
function Kl() {
  if (fm) return ou;
  fm = 1;
  var e = rO().charAt;
  return ou = function(t, r, n) {
    return r + (n ? e(t, r).length : 1);
  }, ou;
}
var uu, hm;
function Yl() {
  if (hm) return uu;
  hm = 1;
  var e = et(), t = ut(), r = $e(), n = Pr(), i = Vl(), a = TypeError;
  return uu = function(o, s) {
    var u = o.exec;
    if (r(u)) {
      var c = e(u, o, s);
      return c !== null && t(c), c;
    }
    if (n(o) === "RegExp") return e(i, o, s);
    throw new a("RegExp#exec called on incompatible receiver");
  }, uu;
}
var dm;
function nO() {
  if (dm) return Zp;
  dm = 1;
  var e = et(), t = Hl(), r = ut(), n = Mr(), i = on(), a = Kt(), o = Pt(), s = sn(), u = Kl(), c = Yl();
  return t("match", function(f, l, d) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function(m) {
        var p = o(this), b = n(m) ? void 0 : s(m, f);
        return b ? e(b, m, p) : new RegExp(m)[f](a(p));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function(h) {
        var m = r(this), p = a(h), b = d(l, m, p);
        if (b.done) return b.value;
        if (!m.global) return c(m, p);
        var y = m.unicode;
        m.lastIndex = 0;
        for (var _ = [], x = 0, S; (S = c(m, p)) !== null; ) {
          var C = a(S[0]);
          _[x] = C, C === "" && (m.lastIndex = u(p, i(m.lastIndex), y)), x++;
        }
        return x === 0 ? null : _;
      }
    ];
  }), Zp;
}
nO();
var pm = {}, cu, mm;
function iO() {
  if (mm) return cu;
  mm = 1;
  var e = Ue(), t = ua(), r = Math.floor, n = e("".charAt), i = e("".replace), a = e("".slice), o = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, s = /\$([$&'`]|\d{1,2})/g;
  return cu = function(u, c, f, l, d, h) {
    var m = f + u.length, p = l.length, b = s;
    return d !== void 0 && (d = t(d), b = o), i(h, b, function(y, _) {
      var x;
      switch (n(_, 0)) {
        case "$":
          return "$";
        case "&":
          return u;
        case "`":
          return a(c, 0, f);
        case "'":
          return a(c, m);
        case "<":
          x = d[a(_, 1, -1)];
          break;
        default:
          var S = +_;
          if (S === 0) return y;
          if (S > p) {
            var C = r(S / 10);
            return C === 0 ? y : C <= p ? l[C - 1] === void 0 ? n(_, 1) : l[C - 1] + n(_, 1) : y;
          }
          x = l[S - 1];
      }
      return x === void 0 ? "" : x;
    });
  }, cu;
}
var gm;
function aO() {
  if (gm) return pm;
  gm = 1;
  var e = By(), t = et(), r = Ue(), n = Hl(), i = qe(), a = ut(), o = $e(), s = Mr(), u = da(), c = on(), f = Kt(), l = Pt(), d = Kl(), h = sn(), m = iO(), p = Yl(), b = Ze(), y = b("replace"), _ = Math.max, x = Math.min, S = r([].concat), C = r([].push), B = r("".indexOf), A = r("".slice), O = function(E) {
    return E === void 0 ? E : String(E);
  }, w = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), N = function() {
    return /./[y] ? /./[y]("a", "$0") === "" : !1;
  }(), z = !i(function() {
    var E = /./;
    return E.exec = function() {
      var F = [];
      return F.groups = { a: "7" }, F;
    }, "".replace(E, "$<a>") !== "7";
  });
  return n("replace", function(E, F, g) {
    var q = N ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function(D, Q) {
        var L = l(this), re = s(D) ? void 0 : h(D, y);
        return re ? t(re, D, L, Q) : t(F, f(L), D, Q);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(ie, D) {
        var Q = a(this), L = f(ie);
        if (typeof D == "string" && B(D, q) === -1 && B(D, "$<") === -1) {
          var re = g(F, Q, L, D);
          if (re.done) return re.value;
        }
        var P = o(D);
        P || (D = f(D));
        var M = Q.global, K;
        M && (K = Q.unicode, Q.lastIndex = 0);
        for (var ee = [], H; H = p(Q, L), !(H === null || (C(ee, H), !M)); ) {
          var pe = f(H[0]);
          pe === "" && (Q.lastIndex = d(L, c(Q.lastIndex), K));
        }
        for (var Ee = "", ce = 0, fe = 0; fe < ee.length; fe++) {
          H = ee[fe];
          for (var ve = f(H[0]), le = _(x(u(H.index), L.length), 0), we = [], xe, v = 1; v < H.length; v++) C(we, O(H[v]));
          var X = H.groups;
          if (P) {
            var W = S([ve], we, le, L);
            X !== void 0 && C(W, X), xe = f(e(D, void 0, W));
          } else
            xe = m(ve, L, le, we, X, D);
          le >= ce && (Ee += A(L, ce, le) + xe, ce = le + ve.length);
        }
        return Ee + A(L, ce);
      }
    ];
  }, !z || !w || N), pm;
}
aO();
var vm = {}, lu, ym;
function sO() {
  if (ym) return lu;
  ym = 1;
  var e = Mt(), t = Pr(), r = Ze(), n = r("match");
  return lu = function(i) {
    var a;
    return e(i) && ((a = i[n]) !== void 0 ? !!a : t(i) === "RegExp");
  }, lu;
}
var fu, bm;
function Xl() {
  if (bm) return fu;
  bm = 1;
  var e = sO(), t = TypeError;
  return fu = function(r) {
    if (e(r))
      throw new t("The method doesn't accept regular expressions");
    return r;
  }, fu;
}
var hu, _m;
function Zl() {
  if (_m) return hu;
  _m = 1;
  var e = Ze(), t = e("match");
  return hu = function(r) {
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
  }, hu;
}
var wm;
function oO() {
  if (wm) return vm;
  wm = 1;
  var e = ct(), t = ga(), r = la().f, n = on(), i = Kt(), a = Xl(), o = Pt(), s = Zl(), u = Ht(), c = t("".slice), f = Math.min, l = s("startsWith"), d = !u && !l && !!function() {
    var h = r(String.prototype, "startsWith");
    return h && !h.writable;
  }();
  return e({ target: "String", proto: !0, forced: !d && !l }, {
    startsWith: function(m) {
      var p = i(o(this));
      a(m);
      var b = n(f(arguments.length > 1 ? arguments[1] : void 0, p.length)), y = i(m);
      return c(p, b, b + y.length) === y;
    }
  }), vm;
}
oO();
var du, xm;
function uO() {
  if (xm) return du;
  xm = 1;
  var e = Ze(), t = va(), r = vr().f, n = e("unscopables"), i = Array.prototype;
  return i[n] === void 0 && r(i, n, {
    configurable: !0,
    value: t(null)
  }), du = function(a) {
    i[n][a] = !0;
  }, du;
}
var pu, Em;
function cO() {
  if (Em) return pu;
  Em = 1;
  var e = qe();
  return pu = !e(function() {
    function t() {
    }
    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }), pu;
}
var mu, Om;
function Ky() {
  if (Om) return mu;
  Om = 1;
  var e = Dt(), t = $e(), r = ua(), n = jl(), i = cO(), a = n("IE_PROTO"), o = Object, s = o.prototype;
  return mu = i ? o.getPrototypeOf : function(u) {
    var c = r(u);
    if (e(c, a)) return c[a];
    var f = c.constructor;
    return t(f) && c instanceof f ? f.prototype : c instanceof o ? s : null;
  }, mu;
}
var gu, Sm;
function Yy() {
  if (Sm) return gu;
  Sm = 1;
  var e = qe(), t = $e(), r = Mt(), n = va(), i = Ky(), a = Fr(), o = Ze(), s = Ht(), u = o("iterator"), c = !1, f, l, d;
  [].keys && (d = [].keys(), "next" in d ? (l = i(i(d)), l !== Object.prototype && (f = l)) : c = !0);
  var h = !r(f) || e(function() {
    var m = {};
    return f[u].call(m) !== m;
  });
  return h ? f = {} : s && (f = n(f)), t(f[u]) || a(f, u, function() {
    return this;
  }), gu = {
    IteratorPrototype: f,
    BUGGY_SAFARI_ITERATORS: c
  }, gu;
}
var vu, Tm;
function lO() {
  if (Tm) return vu;
  Tm = 1;
  var e = Yy().IteratorPrototype, t = va(), r = Pl(), n = ma(), i = Zn(), a = function() {
    return this;
  };
  return vu = function(o, s, u, c) {
    var f = s + " Iterator";
    return o.prototype = t(e, { next: r(+!c, u) }), n(o, f, !1, !0), i[f] = a, o;
  }, vu;
}
var yu, Cm;
function fO() {
  if (Cm) return yu;
  Cm = 1;
  var e = ct(), t = et(), r = Ht(), n = fa(), i = $e(), a = lO(), o = Ky(), s = Fy(), u = ma(), c = Hn(), f = Fr(), l = Ze(), d = Zn(), h = Yy(), m = n.PROPER, p = n.CONFIGURABLE, b = h.IteratorPrototype, y = h.BUGGY_SAFARI_ITERATORS, _ = l("iterator"), x = "keys", S = "values", C = "entries", B = function() {
    return this;
  };
  return yu = function(A, O, w, N, z, E, F) {
    a(w, O, N);
    var g = function(ee) {
      if (ee === z && L) return L;
      if (!y && ee && ee in D) return D[ee];
      switch (ee) {
        case x:
          return function() {
            return new w(this, ee);
          };
        case S:
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
    }, q = O + " Iterator", ie = !1, D = A.prototype, Q = D[_] || D["@@iterator"] || z && D[z], L = !y && Q || g(z), re = O === "Array" && D.entries || Q, P, M, K;
    if (re && (P = o(re.call(new A())), P !== Object.prototype && P.next && (!r && o(P) !== b && (s ? s(P, b) : i(P[_]) || f(P, _, B)), u(P, q, !0, !0), r && (d[q] = B))), m && z === S && Q && Q.name !== S && (!r && p ? c(D, "name", S) : (ie = !0, L = function() {
      return t(Q, this);
    })), z)
      if (M = {
        values: g(S),
        keys: E ? L : g(x),
        entries: g(C)
      }, F) for (K in M)
        (y || ie || !(K in D)) && f(D, K, M[K]);
      else e({ target: O, proto: !0, forced: y || ie }, M);
    return (!r || F) && D[_] !== L && f(D, _, L, { name: z }), d[O] = L, M;
  }, yu;
}
var bu, Am;
function hO() {
  return Am || (Am = 1, bu = function(e, t) {
    return { value: e, done: t };
  }), bu;
}
var _u, Rm;
function Xy() {
  if (Rm) return _u;
  Rm = 1;
  var e = Gn(), t = uO(), r = Zn(), n = ha(), i = vr().f, a = fO(), o = hO(), s = Ht(), u = Nt(), c = "Array Iterator", f = n.set, l = n.getterFor(c);
  _u = a(Array, "Array", function(h, m) {
    f(this, {
      type: c,
      target: e(h),
      // target
      index: 0,
      // next index
      kind: m
      // kind
    });
  }, function() {
    var h = l(this), m = h.target, p = h.index++;
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
  return _u;
}
Xy();
var Im = {}, wu, km;
function dO() {
  return km || (km = 1, wu = {
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
  }), wu;
}
var xu, Nm;
function pO() {
  if (Nm) return xu;
  Nm = 1;
  var e = ca(), t = e("span").classList, r = t && t.constructor && t.constructor.prototype;
  return xu = r === Object.prototype ? void 0 : r, xu;
}
var Pm;
function mO() {
  if (Pm) return Im;
  Pm = 1;
  var e = ze(), t = dO(), r = pO(), n = Xy(), i = Hn(), a = ma(), o = Ze(), s = o("iterator"), u = n.values, c = function(l, d) {
    if (l) {
      if (l[s] !== u) try {
        i(l, s, u);
      } catch {
        l[s] = u;
      }
      if (a(l, d, !0), t[d]) {
        for (var h in n)
          if (l[h] !== n[h]) try {
            i(l, h, n[h]);
          } catch {
            l[h] = n[h];
          }
      }
    }
  };
  for (var f in t)
    c(e[f] && e[f].prototype, f);
  return c(r, "DOMTokenList"), Im;
}
mO();
function gO(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vO(e) {
  var t = gO(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function QS(e, t, r) {
  return (t = vO(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Mm = {}, Eu, Dm;
function yO() {
  if (Dm) return Eu;
  Dm = 1;
  var e = ir(), t = ua(), r = Ey(), n = ql(), i = TypeError, a = "Reduce of empty array with no initial value", o = function(s) {
    return function(u, c, f, l) {
      var d = t(u), h = r(d), m = n(d);
      if (e(c), m === 0 && f < 2) throw new i(a);
      var p = s ? m - 1 : 0, b = s ? -1 : 1;
      if (f < 2) for (; ; ) {
        if (p in h) {
          l = h[p], p += b;
          break;
        }
        if (p += b, s ? p < 0 : m <= p)
          throw new i(a);
      }
      for (; s ? p >= 0 : m > p; p += b) p in h && (l = c(l, h[p], p, d));
      return l;
    };
  };
  return Eu = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: o(!1),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: o(!0)
  }, Eu;
}
var Ou, Fm;
function Zy() {
  if (Fm) return Ou;
  Fm = 1;
  var e = qe();
  return Ou = function(t, r) {
    var n = [][t];
    return !!n && e(function() {
      n.call(null, r || function() {
        return 1;
      }, 1);
    });
  }, Ou;
}
var Lm;
function bO() {
  if (Lm) return Mm;
  Lm = 1;
  var e = ct(), t = yO().left, r = Zy(), n = Ml(), i = pa(), a = !i && n > 79 && n < 83, o = a || !r("reduce");
  return e({ target: "Array", proto: !0, forced: o }, {
    reduce: function(u) {
      var c = arguments.length;
      return t(this, u, c, c > 1 ? arguments[1] : void 0);
    }
  }), Mm;
}
bO();
var Bm = {}, jm;
function _O() {
  if (jm) return Bm;
  jm = 1;
  var e = ct(), t = ga(), r = la().f, n = on(), i = Kt(), a = Xl(), o = Pt(), s = Zl(), u = Ht(), c = t("".slice), f = Math.min, l = s("endsWith"), d = !u && !l && !!function() {
    var h = r(String.prototype, "endsWith");
    return h && !h.writable;
  }();
  return e({ target: "String", proto: !0, forced: !d && !l }, {
    endsWith: function(m) {
      var p = i(o(this));
      a(m);
      var b = arguments.length > 1 ? arguments[1] : void 0, y = p.length, _ = b === void 0 ? y : f(n(b), y), x = i(m);
      return c(p, _ - x.length, _) === x;
    }
  }), Bm;
}
_O();
var zm = {}, qm;
function wO() {
  if (qm) return zm;
  qm = 1;
  var e = et(), t = Ue(), r = Hl(), n = ut(), i = Mr(), a = Pt(), o = Ly(), s = Kl(), u = on(), c = Kt(), f = sn(), l = Yl(), d = Hy(), h = qe(), m = d.UNSUPPORTED_Y, p = 4294967295, b = Math.min, y = t([].push), _ = t("".slice), x = !h(function() {
    var C = /(?:)/, B = C.exec;
    C.exec = function() {
      return B.apply(this, arguments);
    };
    var A = "ab".split(C);
    return A.length !== 2 || A[0] !== "a" || A[1] !== "b";
  }), S = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length;
  return r("split", function(C, B, A) {
    var O = "0".split(void 0, 0).length ? function(w, N) {
      return w === void 0 && N === 0 ? [] : e(B, this, w, N);
    } : B;
    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function(N, z) {
        var E = a(this), F = i(N) ? void 0 : f(N, C);
        return F ? e(F, N, E, z) : e(O, c(E), N, z);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(w, N) {
        var z = n(this), E = c(w);
        if (!S) {
          var F = A(O, z, E, N, O !== B);
          if (F.done) return F.value;
        }
        var g = o(z, RegExp), q = z.unicode, ie = (z.ignoreCase ? "i" : "") + (z.multiline ? "m" : "") + (z.unicode ? "u" : "") + (m ? "g" : "y"), D = new g(m ? "^(?:" + z.source + ")" : z, ie), Q = N === void 0 ? p : N >>> 0;
        if (Q === 0) return [];
        if (E.length === 0) return l(D, E) === null ? [E] : [];
        for (var L = 0, re = 0, P = []; re < E.length; ) {
          D.lastIndex = m ? 0 : re;
          var M = l(D, m ? _(E, re) : E), K;
          if (M === null || (K = b(u(D.lastIndex + (m ? re : 0)), E.length)) === L)
            re = s(E, re, q);
          else {
            if (y(P, _(E, L, re)), P.length === Q) return P;
            for (var ee = 1; ee <= M.length - 1; ee++)
              if (y(P, M[ee]), P.length === Q) return P;
            re = L = K;
          }
        }
        return y(P, _(E, L)), P;
      }
    ];
  }, S || !x, m), zm;
}
wO();
var _n = { exports: {} }, br = { exports: {} }, xO = br.exports, Um;
function EO() {
  return Um || (Um = 1, (function() {
    var e, t, r, n, i, a;
    typeof performance < "u" && performance !== null && performance.now ? br.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (br.exports = function() {
      return (e() - i) / 1e6;
    }, t = process.hrtime, e = function() {
      var o;
      return o = t(), o[0] * 1e9 + o[1];
    }, n = e(), a = process.uptime() * 1e9, i = n - a) : Date.now ? (br.exports = function() {
      return Date.now() - r;
    }, r = Date.now()) : (br.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - r;
    }, r = (/* @__PURE__ */ new Date()).getTime());
  }).call(xO)), br.exports;
}
var $m;
function OO() {
  if ($m) return _n.exports;
  $m = 1;
  for (var e = EO(), t = typeof window > "u" ? xr : window, r = ["moz", "webkit"], n = "AnimationFrame", i = t["request" + n], a = t["cancel" + n] || t["cancelRequest" + n], o = 0; !i && o < r.length; o++)
    i = t[r[o] + "Request" + n], a = t[r[o] + "Cancel" + n] || t[r[o] + "CancelRequest" + n];
  if (!i || !a) {
    var s = 0, u = 0, c = [], f = 1e3 / 60;
    i = function(l) {
      if (c.length === 0) {
        var d = e(), h = Math.max(0, f - (d - s));
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
        callback: l,
        cancelled: !1
      }), u;
    }, a = function(l) {
      for (var d = 0; d < c.length; d++)
        c[d].handle === l && (c[d].cancelled = !0);
    };
  }
  return _n.exports = function(l) {
    return i.call(t, l);
  }, _n.exports.cancel = function() {
    a.apply(t, arguments);
  }, _n.exports.polyfill = function(l) {
    l || (l = t), l.requestAnimationFrame = i, l.cancelAnimationFrame = a;
  }, _n.exports;
}
var SO = OO();
const eT = /* @__PURE__ */ nn(SO);
var Wm = {}, Su, Gm;
function Jy() {
  return Gm || (Gm = 1, Su = `	
\v\f\r                　\u2028\u2029\uFEFF`), Su;
}
var Tu, Vm;
function TO() {
  if (Vm) return Tu;
  Vm = 1;
  var e = Ue(), t = Pt(), r = Kt(), n = Jy(), i = e("".replace), a = RegExp("^[" + n + "]+"), o = RegExp("(^|[^" + n + "])[" + n + "]+$"), s = function(u) {
    return function(c) {
      var f = r(t(c));
      return u & 1 && (f = i(f, a, "")), u & 2 && (f = i(f, o, "$1")), f;
    };
  };
  return Tu = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: s(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: s(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: s(3)
  }, Tu;
}
var Cu, Hm;
function CO() {
  if (Hm) return Cu;
  Hm = 1;
  var e = fa().PROPER, t = qe(), r = Jy(), n = "​᠎";
  return Cu = function(i) {
    return t(function() {
      return !!r[i]() || n[i]() !== n || e && r[i].name !== i;
    });
  }, Cu;
}
var Km;
function AO() {
  if (Km) return Wm;
  Km = 1;
  var e = ct(), t = TO().trim, r = CO();
  return e({ target: "String", proto: !0, forced: r("trim") }, {
    trim: function() {
      return t(this);
    }
  }), Wm;
}
AO();
var Au, Ym;
function RO() {
  return Ym || (Ym = 1, Au = function(e) {
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
      var u = this.r.toString(16), c = this.g.toString(16), f = this.b.toString(16);
      return u.length == 1 && (u = "0" + u), c.length == 1 && (c = "0" + c), f.length == 1 && (f = "0" + f), "#" + u + c + f;
    }, this.getHelpXML = function() {
      for (var u = new Array(), c = 0; c < r.length; c++)
        for (var f = r[c].example, l = 0; l < f.length; l++)
          u[u.length] = f[l];
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
  }), Au;
}
var IO = RO();
const tT = /* @__PURE__ */ nn(IO);
var Xm = {}, Zm;
function kO() {
  if (Zm) return Xm;
  Zm = 1;
  var e = ct(), t = ga(), r = Ny().indexOf, n = Zy(), i = t([].indexOf), a = !!i && 1 / i([1], 1, -0) < 0, o = a || !n("indexOf");
  return e({ target: "Array", proto: !0, forced: o }, {
    indexOf: function(u) {
      var c = arguments.length > 1 ? arguments[1] : void 0;
      return a ? i(this, u, c) || 0 : r(this, u, c);
    }
  }), Xm;
}
kO();
var Jm = {}, Qm;
function NO() {
  if (Qm) return Jm;
  Qm = 1;
  var e = ct(), t = Ue(), r = Xl(), n = Pt(), i = Kt(), a = Zl(), o = t("".indexOf);
  return e({ target: "String", proto: !0, forced: !a("includes") }, {
    includes: function(u) {
      return !!~o(
        i(n(this)),
        i(r(u)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }), Jm;
}
NO();
var eg = {}, Ru, tg;
function PO() {
  if (tg) return Ru;
  tg = 1;
  var e = Pr();
  return Ru = Array.isArray || function(r) {
    return e(r) === "Array";
  }, Ru;
}
var rg;
function MO() {
  if (rg) return eg;
  rg = 1;
  var e = ct(), t = Ue(), r = PO(), n = t([].reverse), i = [1, 2];
  return e({ target: "Array", proto: !0, forced: String(i) === String(i.reverse()) }, {
    reverse: function() {
      return r(this) && (this.length = this.length), n(this);
    }
  }), eg;
}
MO();
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
var Qy = function(e, t) {
  return (Qy = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  })(e, t);
};
function e0(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  Qy(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function DO(e) {
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
function xc(e, t) {
  var r = e[0], n = e[1];
  return [r * Math.cos(t) - n * Math.sin(t), r * Math.sin(t) + n * Math.cos(t)];
}
function St() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = 0; r < e.length; r++) if (typeof e[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof e[r] + " == typeof " + e[r]);
  return !0;
}
var ur = Math.PI;
function Iu(e, t, r) {
  e.lArcFlag = e.lArcFlag === 0 ? 0 : 1, e.sweepFlag = e.sweepFlag === 0 ? 0 : 1;
  var n = e.rX, i = e.rY, a = e.x, o = e.y;
  n = Math.abs(e.rX), i = Math.abs(e.rY);
  var s = xc([(t - a) / 2, (r - o) / 2], -e.xRot / 180 * ur), u = s[0], c = s[1], f = Math.pow(u, 2) / Math.pow(n, 2) + Math.pow(c, 2) / Math.pow(i, 2);
  1 < f && (n *= Math.sqrt(f), i *= Math.sqrt(f)), e.rX = n, e.rY = i;
  var l = Math.pow(n, 2) * Math.pow(c, 2) + Math.pow(i, 2) * Math.pow(u, 2), d = (e.lArcFlag !== e.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - l) / l)), h = n * c / i * d, m = -i * u / n * d, p = xc([h, m], e.xRot / 180 * ur);
  e.cX = p[0] + (t + a) / 2, e.cY = p[1] + (r + o) / 2, e.phi1 = Math.atan2((c - m) / i, (u - h) / n), e.phi2 = Math.atan2((-c - m) / i, (-u - h) / n), e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * ur), e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * ur), e.phi1 *= 180 / ur, e.phi2 *= 180 / ur;
}
function ng(e, t, r) {
  St(e, t, r);
  var n = e * e + t * t - r * r;
  if (0 > n) return [];
  if (n === 0) return [[e * r / (e * e + t * t), t * r / (e * e + t * t)]];
  var i = Math.sqrt(n);
  return [[(e * r + t * i) / (e * e + t * t), (t * r - e * i) / (e * e + t * t)], [(e * r - t * i) / (e * e + t * t), (t * r + e * i) / (e * e + t * t)]];
}
var We, Qt = Math.PI / 180;
function ig(e, t, r) {
  return (1 - r) * e + r * t;
}
function ag(e, t, r, n) {
  return e + Math.cos(n / 180 * ur) * t + Math.sin(n / 180 * ur) * r;
}
function sg(e, t, r, n) {
  var i = 1e-6, a = t - e, o = r - t, s = 3 * a + 3 * (n - r) - 6 * o, u = 6 * (o - a), c = 3 * a;
  return Math.abs(s) < i ? [-c / u] : function(f, l, d) {
    var h = f * f / 4 - l;
    if (h < -1e-6) return [];
    if (h <= d) return [-f / 2];
    var m = Math.sqrt(h);
    return [-f / 2 - m, -f / 2 + m];
  }(u / s, c / s, i);
}
function og(e, t, r, n, i) {
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
    var s = NaN, u = NaN, c = NaN, f = NaN;
    return i(function(l, d, h) {
      return l.type & se.SMOOTH_CURVE_TO && (l.type = se.CURVE_TO, s = isNaN(s) ? d : s, u = isNaN(u) ? h : u, l.x1 = l.relative ? d - s : 2 * d - s, l.y1 = l.relative ? h - u : 2 * h - u), l.type & se.CURVE_TO ? (s = l.relative ? d + l.x2 : l.x2, u = l.relative ? h + l.y2 : l.y2) : (s = NaN, u = NaN), l.type & se.SMOOTH_QUAD_TO && (l.type = se.QUAD_TO, c = isNaN(c) ? d : c, f = isNaN(f) ? h : f, l.x1 = l.relative ? d - c : 2 * d - c, l.y1 = l.relative ? h - f : 2 * h - f), l.type & se.QUAD_TO ? (c = l.relative ? d + l.x1 : l.x1, f = l.relative ? h + l.y1 : l.y1) : (c = NaN, f = NaN), l;
    });
  }
  function n() {
    var s = NaN, u = NaN;
    return i(function(c, f, l) {
      if (c.type & se.SMOOTH_QUAD_TO && (c.type = se.QUAD_TO, s = isNaN(s) ? f : s, u = isNaN(u) ? l : u, c.x1 = c.relative ? f - s : 2 * f - s, c.y1 = c.relative ? l - u : 2 * l - u), c.type & se.QUAD_TO) {
        s = c.relative ? f + c.x1 : c.x1, u = c.relative ? l + c.y1 : c.y1;
        var d = c.x1, h = c.y1;
        c.type = se.CURVE_TO, c.x1 = ((c.relative ? 0 : f) + 2 * d) / 3, c.y1 = ((c.relative ? 0 : l) + 2 * h) / 3, c.x2 = (c.x + 2 * d) / 3, c.y2 = (c.y + 2 * h) / 3;
      } else s = NaN, u = NaN;
      return c;
    });
  }
  function i(s) {
    var u = 0, c = 0, f = NaN, l = NaN;
    return function(d) {
      if (isNaN(f) && !(d.type & se.MOVE_TO)) throw new Error("path must start with moveto");
      var h = s(d, u, c, f, l);
      return d.type & se.CLOSE_PATH && (u = f, c = l), d.x !== void 0 && (u = d.relative ? u + d.x : d.x), d.y !== void 0 && (c = d.relative ? c + d.y : d.y), d.type & se.MOVE_TO && (f = u, l = c), h;
    };
  }
  function a(s, u, c, f, l, d) {
    return St(s, u, c, f, l, d), i(function(h, m, p, b) {
      var y = h.x1, _ = h.x2, x = h.relative && !isNaN(b), S = h.x !== void 0 ? h.x : x ? 0 : m, C = h.y !== void 0 ? h.y : x ? 0 : p;
      function B(M) {
        return M * M;
      }
      h.type & se.HORIZ_LINE_TO && u !== 0 && (h.type = se.LINE_TO, h.y = h.relative ? 0 : p), h.type & se.VERT_LINE_TO && c !== 0 && (h.type = se.LINE_TO, h.x = h.relative ? 0 : m), h.x !== void 0 && (h.x = h.x * s + C * c + (x ? 0 : l)), h.y !== void 0 && (h.y = S * u + h.y * f + (x ? 0 : d)), h.x1 !== void 0 && (h.x1 = h.x1 * s + h.y1 * c + (x ? 0 : l)), h.y1 !== void 0 && (h.y1 = y * u + h.y1 * f + (x ? 0 : d)), h.x2 !== void 0 && (h.x2 = h.x2 * s + h.y2 * c + (x ? 0 : l)), h.y2 !== void 0 && (h.y2 = _ * u + h.y2 * f + (x ? 0 : d));
      var A = s * f - u * c;
      if (h.xRot !== void 0 && (s !== 1 || u !== 0 || c !== 0 || f !== 1)) if (A === 0) delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag, h.type = se.LINE_TO;
      else {
        var O = h.xRot * Math.PI / 180, w = Math.sin(O), N = Math.cos(O), z = 1 / B(h.rX), E = 1 / B(h.rY), F = B(N) * z + B(w) * E, g = 2 * w * N * (z - E), q = B(w) * z + B(N) * E, ie = F * f * f - g * u * f + q * u * u, D = g * (s * f + u * c) - 2 * (F * c * f + q * s * u), Q = F * c * c - g * s * c + q * s * s, L = (Math.atan2(D, ie - Q) + Math.PI) % Math.PI / 2, re = Math.sin(L), P = Math.cos(L);
        h.rX = Math.abs(A) / Math.sqrt(ie * B(P) + D * re * P + Q * B(re)), h.rY = Math.abs(A) / Math.sqrt(ie * B(re) - D * re * P + Q * B(P)), h.xRot = 180 * L / Math.PI;
      }
      return h.sweepFlag !== void 0 && 0 > A && (h.sweepFlag = +!h.sweepFlag), h;
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
    return s === void 0 && (s = 1e13), St(s), function(c) {
      return c.x1 !== void 0 && (c.x1 = u(c.x1)), c.y1 !== void 0 && (c.y1 = u(c.y1)), c.x2 !== void 0 && (c.x2 = u(c.x2)), c.y2 !== void 0 && (c.y2 = u(c.y2)), c.x !== void 0 && (c.x = u(c.x)), c.y !== void 0 && (c.y = u(c.y)), c.rX !== void 0 && (c.rX = u(c.rX)), c.rY !== void 0 && (c.rY = u(c.rY)), c;
    };
  }, e.TO_ABS = t, e.TO_REL = function() {
    return i(function(s, u, c) {
      return s.relative || (s.x1 !== void 0 && (s.x1 -= u), s.y1 !== void 0 && (s.y1 -= c), s.x2 !== void 0 && (s.x2 -= u), s.y2 !== void 0 && (s.y2 -= c), s.x !== void 0 && (s.x -= u), s.y !== void 0 && (s.y -= c), s.relative = !0), s;
    });
  }, e.NORMALIZE_HVZ = function(s, u, c) {
    return s === void 0 && (s = !0), u === void 0 && (u = !0), c === void 0 && (c = !0), i(function(f, l, d, h, m) {
      if (isNaN(h) && !(f.type & se.MOVE_TO)) throw new Error("path must start with moveto");
      return u && f.type & se.HORIZ_LINE_TO && (f.type = se.LINE_TO, f.y = f.relative ? 0 : d), c && f.type & se.VERT_LINE_TO && (f.type = se.LINE_TO, f.x = f.relative ? 0 : l), s && f.type & se.CLOSE_PATH && (f.type = se.LINE_TO, f.x = f.relative ? h - l : h, f.y = f.relative ? m - d : m), f.type & se.ARC && (f.rX === 0 || f.rY === 0) && (f.type = se.LINE_TO, delete f.rX, delete f.rY, delete f.xRot, delete f.lArcFlag, delete f.sweepFlag), f;
    });
  }, e.NORMALIZE_ST = r, e.QT_TO_C = n, e.INFO = i, e.SANITIZE = function(s) {
    s === void 0 && (s = 0), St(s);
    var u = NaN, c = NaN, f = NaN, l = NaN;
    return i(function(d, h, m, p, b) {
      var y = Math.abs, _ = !1, x = 0, S = 0;
      if (d.type & se.SMOOTH_CURVE_TO && (x = isNaN(u) ? 0 : h - u, S = isNaN(c) ? 0 : m - c), d.type & (se.CURVE_TO | se.SMOOTH_CURVE_TO) ? (u = d.relative ? h + d.x2 : d.x2, c = d.relative ? m + d.y2 : d.y2) : (u = NaN, c = NaN), d.type & se.SMOOTH_QUAD_TO ? (f = isNaN(f) ? h : 2 * h - f, l = isNaN(l) ? m : 2 * m - l) : d.type & se.QUAD_TO ? (f = d.relative ? h + d.x1 : d.x1, l = d.relative ? m + d.y1 : d.y2) : (f = NaN, l = NaN), d.type & se.LINE_COMMANDS || d.type & se.ARC && (d.rX === 0 || d.rY === 0 || !d.lArcFlag) || d.type & se.CURVE_TO || d.type & se.SMOOTH_CURVE_TO || d.type & se.QUAD_TO || d.type & se.SMOOTH_QUAD_TO) {
        var C = d.x === void 0 ? 0 : d.relative ? d.x : d.x - h, B = d.y === void 0 ? 0 : d.relative ? d.y : d.y - m;
        x = isNaN(f) ? d.x1 === void 0 ? x : d.relative ? d.x : d.x1 - h : f - h, S = isNaN(l) ? d.y1 === void 0 ? S : d.relative ? d.y : d.y1 - m : l - m;
        var A = d.x2 === void 0 ? 0 : d.relative ? d.x : d.x2 - h, O = d.y2 === void 0 ? 0 : d.relative ? d.y : d.y2 - m;
        y(C) <= s && y(B) <= s && y(x) <= s && y(S) <= s && y(A) <= s && y(O) <= s && (_ = !0);
      }
      return d.type & se.CLOSE_PATH && y(h - p) <= s && y(m - b) <= s && (_ = !0), _ ? [] : d;
    });
  }, e.MATRIX = a, e.ROTATE = function(s, u, c) {
    u === void 0 && (u = 0), c === void 0 && (c = 0), St(s, u, c);
    var f = Math.sin(s), l = Math.cos(s);
    return a(l, f, -f, l, u - u * l + c * f, c - u * f - c * l);
  }, e.TRANSLATE = function(s, u) {
    return u === void 0 && (u = 0), St(s, u), a(1, 0, 0, 1, s, u);
  }, e.SCALE = function(s, u) {
    return u === void 0 && (u = s), St(s, u), a(s, 0, 0, u, 0, 0);
  }, e.SKEW_X = function(s) {
    return St(s), a(1, 0, Math.atan(s), 1, 0, 0);
  }, e.SKEW_Y = function(s) {
    return St(s), a(1, Math.atan(s), 0, 1, 0, 0);
  }, e.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), St(s), a(-1, 0, 0, 1, s, 0);
  }, e.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), St(s), a(1, 0, 0, -1, 0, s);
  }, e.A_TO_C = function() {
    return i(function(s, u, c) {
      return se.ARC === s.type ? function(f, l, d) {
        var h, m, p, b;
        f.cX || Iu(f, l, d);
        for (var y = Math.min(f.phi1, f.phi2), _ = Math.max(f.phi1, f.phi2) - y, x = Math.ceil(_ / 90), S = new Array(x), C = l, B = d, A = 0; A < x; A++) {
          var O = ig(f.phi1, f.phi2, A / x), w = ig(f.phi1, f.phi2, (A + 1) / x), N = w - O, z = 4 / 3 * Math.tan(N * Qt / 4), E = [Math.cos(O * Qt) - z * Math.sin(O * Qt), Math.sin(O * Qt) + z * Math.cos(O * Qt)], F = E[0], g = E[1], q = [Math.cos(w * Qt), Math.sin(w * Qt)], ie = q[0], D = q[1], Q = [ie + z * Math.sin(w * Qt), D - z * Math.cos(w * Qt)], L = Q[0], re = Q[1];
          S[A] = { relative: f.relative, type: se.CURVE_TO };
          var P = function(M, K) {
            var ee = xc([M * f.rX, K * f.rY], f.xRot), H = ee[0], pe = ee[1];
            return [f.cX + H, f.cY + pe];
          };
          h = P(F, g), S[A].x1 = h[0], S[A].y1 = h[1], m = P(L, re), S[A].x2 = m[0], S[A].y2 = m[1], p = P(ie, D), S[A].x = p[0], S[A].y = p[1], f.relative && (S[A].x1 -= C, S[A].y1 -= B, S[A].x2 -= C, S[A].y2 -= B, S[A].x -= C, S[A].y -= B), C = (b = [S[A].x, S[A].y])[0], B = b[1];
        }
        return S;
      }(s, s.relative ? 0 : u, s.relative ? 0 : c) : s;
    });
  }, e.ANNOTATE_ARCS = function() {
    return i(function(s, u, c) {
      return s.relative && (u = 0, c = 0), se.ARC === s.type && Iu(s, u, c), s;
    });
  }, e.CLONE = o, e.CALCULATE_BOUNDS = function() {
    var s = function(d) {
      var h = {};
      for (var m in d) h[m] = d[m];
      return h;
    }, u = t(), c = n(), f = r(), l = i(function(d, h, m) {
      var p = f(c(u(s(d))));
      function b(re) {
        re > l.maxX && (l.maxX = re), re < l.minX && (l.minX = re);
      }
      function y(re) {
        re > l.maxY && (l.maxY = re), re < l.minY && (l.minY = re);
      }
      if (p.type & se.DRAWING_COMMANDS && (b(h), y(m)), p.type & se.HORIZ_LINE_TO && b(p.x), p.type & se.VERT_LINE_TO && y(p.y), p.type & se.LINE_TO && (b(p.x), y(p.y)), p.type & se.CURVE_TO) {
        b(p.x), y(p.y);
        for (var _ = 0, x = sg(h, p.x1, p.x2, p.x); _ < x.length; _++)
          0 < (L = x[_]) && 1 > L && b(og(h, p.x1, p.x2, p.x, L));
        for (var S = 0, C = sg(m, p.y1, p.y2, p.y); S < C.length; S++)
          0 < (L = C[S]) && 1 > L && y(og(m, p.y1, p.y2, p.y, L));
      }
      if (p.type & se.ARC) {
        b(p.x), y(p.y), Iu(p, h, m);
        for (var B = p.xRot / 180 * Math.PI, A = Math.cos(B) * p.rX, O = Math.sin(B) * p.rX, w = -Math.sin(B) * p.rY, N = Math.cos(B) * p.rY, z = p.phi1 < p.phi2 ? [p.phi1, p.phi2] : -180 > p.phi2 ? [p.phi2 + 360, p.phi1 + 360] : [p.phi2, p.phi1], E = z[0], F = z[1], g = function(re) {
          var P = re[0], M = re[1], K = 180 * Math.atan2(M, P) / Math.PI;
          return K < E ? K + 360 : K;
        }, q = 0, ie = ng(w, -A, 0).map(g); q < ie.length; q++)
          (L = ie[q]) > E && L < F && b(ag(p.cX, A, w, L));
        for (var D = 0, Q = ng(N, -O, 0).map(g); D < Q.length; D++) {
          var L;
          (L = Q[D]) > E && L < F && y(ag(p.cY, O, N, L));
        }
      }
      return d;
    });
    return l.minX = 1 / 0, l.maxX = -1 / 0, l.minY = 1 / 0, l.maxY = -1 / 0, l;
  };
})(We || (We = {}));
var Ot, t0 = function() {
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
}(), FO = function(e) {
  return e === " " || e === "	" || e === "\r" || e === `
`;
}, ug = function(e) {
  return 48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57;
}, LO = function(e) {
  function t() {
    var r = e.call(this) || this;
    return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
  }
  return e0(t, e), t.prototype.finish = function(r) {
    if (r === void 0 && (r = []), this.parse(" ", r), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return r;
  }, t.prototype.parse = function(r, n) {
    var i = this;
    n === void 0 && (n = []);
    for (var a = function(l) {
      n.push(l), i.curArgs.length = 0, i.canParseCommandOrComma = !0;
    }, o = 0; o < r.length; o++) {
      var s = r[o], u = !(this.curCommandType !== se.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), c = ug(s) && (this.curNumber === "0" && s === "0" || u);
      if (!ug(s) || c) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var f = Number(this.curNumber);
          if (isNaN(f)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === se.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > f) throw new SyntaxError('Expected positive number, got "' + f + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(f), this.curArgs.length === BO[this.curCommandType] && (se.HORIZ_LINE_TO === this.curCommandType ? a({ type: se.HORIZ_LINE_TO, relative: this.curCommandRelative, x: f }) : se.VERT_LINE_TO === this.curCommandType ? a({ type: se.VERT_LINE_TO, relative: this.curCommandRelative, y: f }) : this.curCommandType === se.MOVE_TO || this.curCommandType === se.LINE_TO || this.curCommandType === se.SMOOTH_QUAD_TO ? (a({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), se.MOVE_TO === this.curCommandType && (this.curCommandType = se.LINE_TO)) : this.curCommandType === se.CURVE_TO ? a({ type: se.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === se.SMOOTH_CURVE_TO ? a({ type: se.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.QUAD_TO ? a({ type: se.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.ARC && a({ type: se.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!FO(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
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
}(t0), se = function(e) {
  function t(r) {
    var n = e.call(this) || this;
    return n.commands = typeof r == "string" ? t.parse(r) : r, n;
  }
  return e0(t, e), t.prototype.encode = function() {
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
    return DO(r);
  }, t.parse = function(r) {
    var n = new LO(), i = [];
    return n.parse(r, i), n.finish(i), i;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(t0), BO = ((Ot = {})[se.MOVE_TO] = 2, Ot[se.LINE_TO] = 2, Ot[se.HORIZ_LINE_TO] = 1, Ot[se.VERT_LINE_TO] = 1, Ot[se.CLOSE_PATH] = 0, Ot[se.QUAD_TO] = 4, Ot[se.SMOOTH_QUAD_TO] = 2, Ot[se.CURVE_TO] = 6, Ot[se.SMOOTH_CURVE_TO] = 4, Ot[se.ARC] = 7, Ot), cg = {}, ku, lg;
function jO() {
  if (lg) return ku;
  lg = 1;
  var e = et(), t = Dt(), r = sa(), n = Vy(), i = RegExp.prototype;
  return ku = function(a) {
    var o = a.flags;
    return o === void 0 && !("flags" in i) && !t(a, "flags") && r(i, a) ? e(n, a) : o;
  }, ku;
}
var fg;
function zO() {
  if (fg) return cg;
  fg = 1;
  var e = fa().PROPER, t = Fr(), r = ut(), n = Kt(), i = qe(), a = jO(), o = "toString", s = RegExp.prototype, u = s[o], c = i(function() {
    return u.call({ source: "a", flags: "b" }) !== "/a/b";
  }), f = e && u.name !== o;
  return (c || f) && t(s, o, function() {
    var d = r(this), h = n(d.source), m = n(a(d));
    return "/" + h + "/" + m;
  }, { unsafe: !0 }), cg;
}
zO();
const Zr = Math.min, Or = Math.max, ki = Math.round, hi = Math.floor, Wt = (e) => ({
  x: e,
  y: e
}), qO = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, UO = {
  start: "end",
  end: "start"
};
function Ec(e, t, r) {
  return Or(e, Zr(t, r));
}
function Jn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ir(e) {
  return e.split("-")[0];
}
function Qn(e) {
  return e.split("-")[1];
}
function r0(e) {
  return e === "x" ? "y" : "x";
}
function Jl(e) {
  return e === "y" ? "height" : "width";
}
function Jr(e) {
  return ["top", "bottom"].includes(Ir(e)) ? "y" : "x";
}
function Ql(e) {
  return r0(Jr(e));
}
function $O(e, t, r) {
  r === void 0 && (r = !1);
  const n = Qn(e), i = Ql(e), a = Jl(i);
  let o = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = Ni(o)), [o, Ni(o)];
}
function WO(e) {
  const t = Ni(e);
  return [Oc(e), t, Oc(t)];
}
function Oc(e) {
  return e.replace(/start|end/g, (t) => UO[t]);
}
function GO(e, t, r) {
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
function VO(e, t, r, n) {
  const i = Qn(e);
  let a = GO(Ir(e), r === "start", n);
  return i && (a = a.map((o) => o + "-" + i), t && (a = a.concat(a.map(Oc)))), a;
}
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qO[t]);
}
function HO(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function n0(e) {
  return typeof e != "number" ? HO(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pi(e) {
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
function hg(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = Jr(t), o = Ql(t), s = Jl(o), u = Ir(t), c = a === "y", f = n.x + n.width / 2 - i.width / 2, l = n.y + n.height / 2 - i.height / 2, d = n[s] / 2 - i[s] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: f,
        y: n.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: l
      };
      break;
    case "left":
      h = {
        x: n.x - i.width,
        y: l
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (Qn(t)) {
    case "start":
      h[o] -= d * (r && c ? -1 : 1);
      break;
    case "end":
      h[o] += d * (r && c ? -1 : 1);
      break;
  }
  return h;
}
const KO = async (e, t, r) => {
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
    x: f,
    y: l
  } = hg(c, n, u), d = n, h = {}, m = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: b,
      fn: y
    } = s[p], {
      x: _,
      y: x,
      data: S,
      reset: C
    } = await y({
      x: f,
      y: l,
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
    f = _ ?? f, l = x ?? l, h = {
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
      x: f,
      y: l
    } = hg(c, d, u)), p = -1);
  }
  return {
    x: f,
    y: l,
    placement: d,
    strategy: i,
    middlewareData: h
  };
};
async function i0(e, t) {
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
    rootBoundary: f = "viewport",
    elementContext: l = "floating",
    altBoundary: d = !1,
    padding: h = 0
  } = Jn(t, e), m = n0(h), b = s[d ? l === "floating" ? "reference" : "floating" : l], y = Pi(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: u
  })), _ = l === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Pi(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: x,
    strategy: u
  }) : _);
  return {
    top: (y.top - C.top + m.top) / S.y,
    bottom: (C.bottom - y.bottom + m.bottom) / S.y,
    left: (y.left - C.left + m.left) / S.x,
    right: (C.right - y.right + m.right) / S.x
  };
}
const YO = (e) => ({
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
      padding: f = 0
    } = Jn(e, t) || {};
    if (c == null)
      return {};
    const l = n0(f), d = {
      x: r,
      y: n
    }, h = Ql(i), m = Jl(h), p = await o.getDimensions(c), b = h === "y", y = b ? "top" : "left", _ = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", S = a.reference[m] + a.reference[h] - d[h] - a.floating[m], C = d[h] - a.reference[h], B = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let A = B ? B[x] : 0;
    (!A || !await (o.isElement == null ? void 0 : o.isElement(B))) && (A = s.floating[x] || a.floating[m]);
    const O = S / 2 - C / 2, w = A / 2 - p[m] / 2 - 1, N = Zr(l[y], w), z = Zr(l[_], w), E = N, F = A - p[m] - z, g = A / 2 - p[m] / 2 + O, q = Ec(E, g, F), ie = !u.arrow && Qn(i) != null && g !== q && a.reference[m] / 2 - (g < E ? N : z) - p[m] / 2 < 0, D = ie ? g < E ? g - E : g - F : 0;
    return {
      [h]: d[h] + D,
      data: {
        [h]: q,
        centerOffset: g - q - D,
        ...ie && {
          alignmentOffset: D
        }
      },
      reset: ie
    };
  }
}), XO = function(e) {
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
        mainAxis: f = !0,
        crossAxis: l = !0,
        fallbackPlacements: d,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: p = !0,
        ...b
      } = Jn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const y = Ir(i), _ = Jr(s), x = Ir(s) === s, S = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), C = d || (x || !p ? [Ni(s)] : WO(s)), B = m !== "none";
      !d && B && C.push(...VO(s, p, m, S));
      const A = [s, ...C], O = await i0(t, b), w = [];
      let N = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (f && w.push(O[y]), l) {
        const g = $O(i, o, S);
        w.push(O[g[0]], O[g[1]]);
      }
      if (N = [...N, {
        placement: i,
        overflows: w
      }], !w.every((g) => g <= 0)) {
        var z, E;
        const g = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1, q = A[g];
        if (q)
          return {
            data: {
              index: g,
              overflows: N
            },
            reset: {
              placement: q
            }
          };
        let ie = (E = N.filter((D) => D.overflows[0] <= 0).sort((D, Q) => D.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!ie)
          switch (h) {
            case "bestFit": {
              var F;
              const D = (F = N.filter((Q) => {
                if (B) {
                  const L = Jr(Q.placement);
                  return L === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((Q) => [Q.placement, Q.overflows.filter((L) => L > 0).reduce((L, re) => L + re, 0)]).sort((Q, L) => Q[1] - L[1])[0]) == null ? void 0 : F[0];
              D && (ie = D);
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
async function ZO(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Ir(r), s = Qn(r), u = Jr(r) === "y", c = ["left", "top"].includes(o) ? -1 : 1, f = a && u ? -1 : 1, l = Jn(t, e);
  let {
    mainAxis: d,
    crossAxis: h,
    alignmentAxis: m
  } = typeof l == "number" ? {
    mainAxis: l,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: l.mainAxis || 0,
    crossAxis: l.crossAxis || 0,
    alignmentAxis: l.alignmentAxis
  };
  return s && typeof m == "number" && (h = s === "end" ? m * -1 : m), u ? {
    x: h * f,
    y: d * c
  } : {
    x: d * c,
    y: h * f
  };
}
const JO = function(e) {
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
      } = t, u = await ZO(t, e);
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
}, QO = function(e) {
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
      } = Jn(e, t), c = {
        x: r,
        y: n
      }, f = await i0(t, u), l = Jr(Ir(i)), d = r0(l);
      let h = c[d], m = c[l];
      if (a) {
        const b = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", _ = h + f[b], x = h - f[y];
        h = Ec(_, h, x);
      }
      if (o) {
        const b = l === "y" ? "top" : "left", y = l === "y" ? "bottom" : "right", _ = m + f[b], x = m - f[y];
        m = Ec(_, m, x);
      }
      const p = s.fn({
        ...t,
        [d]: h,
        [l]: m
      });
      return {
        ...p,
        data: {
          x: p.x - r,
          y: p.y - n,
          enabled: {
            [d]: a,
            [l]: o
          }
        }
      };
    }
  };
};
function ya() {
  return typeof window < "u";
}
function un(e) {
  return a0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function gt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
  var t;
  return (t = (a0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function a0(e) {
  return ya() ? e instanceof Node || e instanceof gt(e).Node : !1;
}
function It(e) {
  return ya() ? e instanceof Element || e instanceof gt(e).Element : !1;
}
function Vt(e) {
  return ya() ? e instanceof HTMLElement || e instanceof gt(e).HTMLElement : !1;
}
function dg(e) {
  return !ya() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof gt(e).ShadowRoot;
}
function ei(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function eS(e) {
  return ["table", "td", "th"].includes(un(e));
}
function ba(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ef(e) {
  const t = tf(), r = It(e) ? kt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function tS(e) {
  let t = gr(e);
  for (; Vt(t) && !Qr(t); ) {
    if (ef(t))
      return t;
    if (ba(t))
      return null;
    t = gr(t);
  }
  return null;
}
function tf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Qr(e) {
  return ["html", "body", "#document"].includes(un(e));
}
function kt(e) {
  return gt(e).getComputedStyle(e);
}
function _a(e) {
  return It(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function gr(e) {
  if (un(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dg(e) && e.host || // Fallback.
    Yt(e)
  );
  return dg(t) ? t.host : t;
}
function s0(e) {
  const t = gr(e);
  return Qr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vt(t) && ei(t) ? t : s0(t);
}
function Mn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = s0(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = gt(i);
  if (a) {
    const s = Sc(o);
    return t.concat(o, o.visualViewport || [], ei(i) ? i : [], s && r ? Mn(s) : []);
  }
  return t.concat(i, Mn(i, [], r));
}
function Sc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function o0(e) {
  const t = kt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Vt(e), a = i ? e.offsetWidth : r, o = i ? e.offsetHeight : n, s = ki(r) !== a || ki(n) !== o;
  return s && (r = a, n = o), {
    width: r,
    height: n,
    $: s
  };
}
function rf(e) {
  return It(e) ? e : e.contextElement;
}
function Vr(e) {
  const t = rf(e);
  if (!Vt(t))
    return Wt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = o0(t);
  let o = (a ? ki(r.width) : r.width) / n, s = (a ? ki(r.height) : r.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const rS = /* @__PURE__ */ Wt(0);
function u0(e) {
  const t = gt(e);
  return !tf() || !t.visualViewport ? rS : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function nS(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== gt(e) ? !1 : t;
}
function kr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = rf(e);
  let o = Wt(1);
  t && (n ? It(n) && (o = Vr(n)) : o = Vr(e));
  const s = nS(a, r, n) ? u0(a) : Wt(0);
  let u = (i.left + s.x) / o.x, c = (i.top + s.y) / o.y, f = i.width / o.x, l = i.height / o.y;
  if (a) {
    const d = gt(a), h = n && It(n) ? gt(n) : n;
    let m = d, p = Sc(m);
    for (; p && n && h !== m; ) {
      const b = Vr(p), y = p.getBoundingClientRect(), _ = kt(p), x = y.left + (p.clientLeft + parseFloat(_.paddingLeft)) * b.x, S = y.top + (p.clientTop + parseFloat(_.paddingTop)) * b.y;
      u *= b.x, c *= b.y, f *= b.x, l *= b.y, u += x, c += S, m = gt(p), p = Sc(m);
    }
  }
  return Pi({
    width: f,
    height: l,
    x: u,
    y: c
  });
}
function nf(e, t) {
  const r = _a(e).scrollLeft;
  return t ? t.left + r : kr(Yt(e)).left + r;
}
function c0(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), i = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    nf(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: i,
    y: a
  };
}
function iS(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", o = Yt(n), s = t ? ba(t.floating) : !1;
  if (n === o || s && a)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Wt(1);
  const f = Wt(0), l = Vt(n);
  if ((l || !l && !a) && ((un(n) !== "body" || ei(o)) && (u = _a(n)), Vt(n))) {
    const h = kr(n);
    c = Vr(n), f.x = h.x + n.clientLeft, f.y = h.y + n.clientTop;
  }
  const d = o && !l && !a ? c0(o, u, !0) : Wt(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - u.scrollLeft * c.x + f.x + d.x,
    y: r.y * c.y - u.scrollTop * c.y + f.y + d.y
  };
}
function aS(e) {
  return Array.from(e.getClientRects());
}
function sS(e) {
  const t = Yt(e), r = _a(e), n = e.ownerDocument.body, i = Or(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Or(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + nf(e);
  const s = -r.scrollTop;
  return kt(n).direction === "rtl" && (o += Or(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  };
}
function oS(e, t) {
  const r = gt(e), n = Yt(e), i = r.visualViewport;
  let a = n.clientWidth, o = n.clientHeight, s = 0, u = 0;
  if (i) {
    a = i.width, o = i.height;
    const c = tf();
    (!c || c && t === "fixed") && (s = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s,
    y: u
  };
}
function uS(e, t) {
  const r = kr(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = Vt(e) ? Vr(e) : Wt(1), o = e.clientWidth * a.x, s = e.clientHeight * a.y, u = i * a.x, c = n * a.y;
  return {
    width: o,
    height: s,
    x: u,
    y: c
  };
}
function pg(e, t, r) {
  let n;
  if (t === "viewport")
    n = oS(e, r);
  else if (t === "document")
    n = sS(Yt(e));
  else if (It(t))
    n = uS(t, r);
  else {
    const i = u0(e);
    n = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Pi(n);
}
function l0(e, t) {
  const r = gr(e);
  return r === t || !It(r) || Qr(r) ? !1 : kt(r).position === "fixed" || l0(r, t);
}
function cS(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Mn(e, [], !1).filter((s) => It(s) && un(s) !== "body"), i = null;
  const a = kt(e).position === "fixed";
  let o = a ? gr(e) : e;
  for (; It(o) && !Qr(o); ) {
    const s = kt(o), u = ef(o);
    !u && s.position === "fixed" && (i = null), (a ? !u && !i : !u && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ei(o) && !u && l0(e, o)) ? n = n.filter((f) => f !== o) : i = s, o = gr(o);
  }
  return t.set(e, n), n;
}
function lS(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const o = [...r === "clippingAncestors" ? ba(t) ? [] : cS(t, this._c) : [].concat(r), n], s = o[0], u = o.reduce((c, f) => {
    const l = pg(t, f, i);
    return c.top = Or(l.top, c.top), c.right = Zr(l.right, c.right), c.bottom = Zr(l.bottom, c.bottom), c.left = Or(l.left, c.left), c;
  }, pg(t, s, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function fS(e) {
  const {
    width: t,
    height: r
  } = o0(e);
  return {
    width: t,
    height: r
  };
}
function hS(e, t, r) {
  const n = Vt(t), i = Yt(t), a = r === "fixed", o = kr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Wt(0);
  if (n || !n && !a)
    if ((un(t) !== "body" || ei(i)) && (s = _a(t)), n) {
      const d = kr(t, !0, a, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else i && (u.x = nf(i));
  const c = i && !n && !a ? c0(i, s) : Wt(0), f = o.left + s.scrollLeft - u.x - c.x, l = o.top + s.scrollTop - u.y - c.y;
  return {
    x: f,
    y: l,
    width: o.width,
    height: o.height
  };
}
function Nu(e) {
  return kt(e).position === "static";
}
function mg(e, t) {
  if (!Vt(e) || kt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Yt(e) === r && (r = r.ownerDocument.body), r;
}
function f0(e, t) {
  const r = gt(e);
  if (ba(e))
    return r;
  if (!Vt(e)) {
    let i = gr(e);
    for (; i && !Qr(i); ) {
      if (It(i) && !Nu(i))
        return i;
      i = gr(i);
    }
    return r;
  }
  let n = mg(e, t);
  for (; n && eS(n) && Nu(n); )
    n = mg(n, t);
  return n && Qr(n) && Nu(n) && !ef(n) ? r : n || tS(e) || r;
}
const dS = async function(e) {
  const t = this.getOffsetParent || f0, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: hS(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function pS(e) {
  return kt(e).direction === "rtl";
}
const mS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: iS,
  getDocumentElement: Yt,
  getClippingRect: lS,
  getOffsetParent: f0,
  getElementRects: dS,
  getClientRects: aS,
  getDimensions: fS,
  getScale: Vr,
  isElement: It,
  isRTL: pS
};
function h0(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function gS(e, t) {
  let r = null, n;
  const i = Yt(e);
  function a() {
    var s;
    clearTimeout(n), (s = r) == null || s.disconnect(), r = null;
  }
  function o(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), a();
    const c = e.getBoundingClientRect(), {
      left: f,
      top: l,
      width: d,
      height: h
    } = c;
    if (s || t(), !d || !h)
      return;
    const m = hi(l), p = hi(i.clientWidth - (f + d)), b = hi(i.clientHeight - (l + h)), y = hi(f), x = {
      rootMargin: -m + "px " + -p + "px " + -b + "px " + -y + "px",
      threshold: Or(0, Zr(1, u)) || 1
    };
    let S = !0;
    function C(B) {
      const A = B[0].intersectionRatio;
      if (A !== u) {
        if (!S)
          return o();
        A ? o(!1, A) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !h0(c, e.getBoundingClientRect()) && o(), S = !1;
    }
    try {
      r = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(C, x);
    }
    r.observe(e);
  }
  return o(!0), a;
}
function rT(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = rf(e), f = i || a ? [...c ? Mn(c) : [], ...Mn(t)] : [];
  f.forEach((y) => {
    i && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const l = c && s ? gS(c, r) : null;
  let d = -1, h = null;
  o && (h = new ResizeObserver((y) => {
    let [_] = y;
    _ && _.target === c && h && (h.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), r();
  }), c && !u && h.observe(c), h.observe(t));
  let m, p = u ? kr(e) : null;
  u && b();
  function b() {
    const y = kr(e);
    p && !h0(p, y) && r(), p = y, m = requestAnimationFrame(b);
  }
  return r(), () => {
    var y;
    f.forEach((_) => {
      i && _.removeEventListener("scroll", r), a && _.removeEventListener("resize", r);
    }), l == null || l(), (y = h) == null || y.disconnect(), h = null, u && cancelAnimationFrame(m);
  };
}
const nT = JO, iT = QO, aT = XO, sT = YO, oT = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: mS,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return KO(e, t, {
    ...i,
    platform: a
  });
};
var bi = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var vS = bi.exports, gg;
function yS() {
  return gg || (gg = 1, function(e, t) {
    ((r, n) => {
      e.exports = n();
    })(vS, function r() {
      var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, i, a = !n.document && !!n.postMessage, o = n.IS_PAPA_WORKER || !1, s = {}, u = 0, c = {};
      function f(O) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(w) {
          var N = C(w);
          N.chunkSize = parseInt(N.chunkSize), w.step || w.chunk || (N.chunkSize = null), this._handle = new p(N), (this._handle.streamer = this)._config = N;
        }).call(this, O), this.parseChunk = function(w, N) {
          var z = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < z) {
            let F = this._config.newline;
            F || (E = this._config.quoteChar || '"', F = this._handle.guessLineEndings(w, E)), w = [...w.split(F).slice(z)].join(F);
          }
          this.isFirstChunk && A(this._config.beforeFirstChunk) && (E = this._config.beforeFirstChunk(w)) !== void 0 && (w = E), this.isFirstChunk = !1, this._halted = !1;
          var z = this._partialLine + w, E = (this._partialLine = "", this._handle.parse(z, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (w = E.meta.cursor, z = (this._finished || (this._partialLine = z.substring(w - this._baseIndex), this._baseIndex = w), E && E.data && (this._rowCount += E.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), o) n.postMessage({ results: E, workerId: c.WORKER_ID, finished: z });
            else if (A(this._config.chunk) && !N) {
              if (this._config.chunk(E, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = E = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(E.data), this._completeResults.errors = this._completeResults.errors.concat(E.errors), this._completeResults.meta = E.meta), this._completed || !z || !A(this._config.complete) || E && E.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), z || E && E.meta.paused || this._nextChunk(), E;
          }
          this._halted = !0;
        }, this._sendError = function(w) {
          A(this._config.error) ? this._config.error(w) : o && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: w, finished: !1 });
        };
      }
      function l(O) {
        var w;
        (O = O || {}).chunkSize || (O.chunkSize = c.RemoteChunkSize), f.call(this, O), this._nextChunk = a ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(N) {
          this._input = N, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (w = new XMLHttpRequest(), this._config.withCredentials && (w.withCredentials = this._config.withCredentials), a || (w.onload = B(this._chunkLoaded, this), w.onerror = B(this._chunkError, this)), w.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !a), this._config.downloadRequestHeaders) {
              var N, z = this._config.downloadRequestHeaders;
              for (N in z) w.setRequestHeader(N, z[N]);
            }
            var E;
            this._config.chunkSize && (E = this._start + this._config.chunkSize - 1, w.setRequestHeader("Range", "bytes=" + this._start + "-" + E));
            try {
              w.send(this._config.downloadRequestBody);
            } catch (F) {
              this._chunkError(F.message);
            }
            a && w.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          w.readyState === 4 && (w.status < 200 || 400 <= w.status ? this._chunkError() : (this._start += this._config.chunkSize || w.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((N) => (N = N.getResponseHeader("Content-Range")) !== null ? parseInt(N.substring(N.lastIndexOf("/") + 1)) : -1)(w), this.parseChunk(w.responseText)));
        }, this._chunkError = function(N) {
          N = w.statusText || N, this._sendError(new Error(N));
        };
      }
      function d(O) {
        (O = O || {}).chunkSize || (O.chunkSize = c.LocalChunkSize), f.call(this, O);
        var w, N, z = typeof FileReader < "u";
        this.stream = function(E) {
          this._input = E, N = E.slice || E.webkitSlice || E.mozSlice, z ? ((w = new FileReader()).onload = B(this._chunkLoaded, this), w.onerror = B(this._chunkError, this)) : w = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var E = this._input, F = (this._config.chunkSize && (F = Math.min(this._start + this._config.chunkSize, this._input.size), E = N.call(E, this._start, F)), w.readAsText(E, this._config.encoding));
          z || this._chunkLoaded({ target: { result: F } });
        }, this._chunkLoaded = function(E) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(E.target.result);
        }, this._chunkError = function() {
          this._sendError(w.error);
        };
      }
      function h(O) {
        var w;
        f.call(this, O = O || {}), this.stream = function(N) {
          return w = N, this._nextChunk();
        }, this._nextChunk = function() {
          var N, z;
          if (!this._finished) return N = this._config.chunkSize, w = N ? (z = w.substring(0, N), w.substring(N)) : (z = w, ""), this._finished = !w, this.parseChunk(z);
        };
      }
      function m(O) {
        f.call(this, O = O || {});
        var w = [], N = !0, z = !1;
        this.pause = function() {
          f.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          f.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(E) {
          this._input = E, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          z && w.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), w.length ? this.parseChunk(w.shift()) : N = !0;
        }, this._streamData = B(function(E) {
          try {
            w.push(typeof E == "string" ? E : E.toString(this._config.encoding)), N && (N = !1, this._checkIsFinished(), this.parseChunk(w.shift()));
          } catch (F) {
            this._streamError(F);
          }
        }, this), this._streamError = B(function(E) {
          this._streamCleanUp(), this._sendError(E);
        }, this), this._streamEnd = B(function() {
          this._streamCleanUp(), z = !0, this._streamData("");
        }, this), this._streamCleanUp = B(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function p(O) {
        var w, N, z, E, F = Math.pow(2, 53), g = -F, q = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, ie = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, D = this, Q = 0, L = 0, re = !1, P = !1, M = [], K = { data: [], errors: [], meta: {} };
        function ee(ce) {
          return O.skipEmptyLines === "greedy" ? ce.join("").trim() === "" : ce.length === 1 && ce[0].length === 0;
        }
        function H() {
          if (K && z && (Ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), z = !1), O.skipEmptyLines && (K.data = K.data.filter(function(le) {
            return !ee(le);
          })), pe()) {
            let le = function(we, xe) {
              A(O.transformHeader) && (we = O.transformHeader(we, xe)), M.push(we);
            };
            if (K) if (Array.isArray(K.data[0])) {
              for (var ce = 0; pe() && ce < K.data.length; ce++) K.data[ce].forEach(le);
              K.data.splice(0, 1);
            } else K.data.forEach(le);
          }
          function fe(le, we) {
            for (var xe = O.header ? {} : [], v = 0; v < le.length; v++) {
              var X = v, W = le[v], W = ((k, T) => ((j) => (O.dynamicTypingFunction && O.dynamicTyping[j] === void 0 && (O.dynamicTyping[j] = O.dynamicTypingFunction(j)), (O.dynamicTyping[j] || O.dynamicTyping) === !0))(k) ? T === "true" || T === "TRUE" || T !== "false" && T !== "FALSE" && (((j) => {
                if (q.test(j) && (j = parseFloat(j), g < j && j < F))
                  return 1;
              })(T) ? parseFloat(T) : ie.test(T) ? new Date(T) : T === "" ? null : T) : T)(X = O.header ? v >= M.length ? "__parsed_extra" : M[v] : X, W = O.transform ? O.transform(W, X) : W);
              X === "__parsed_extra" ? (xe[X] = xe[X] || [], xe[X].push(W)) : xe[X] = W;
            }
            return O.header && (v > M.length ? Ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + M.length + " fields but parsed " + v, L + we) : v < M.length && Ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + M.length + " fields but parsed " + v, L + we)), xe;
          }
          var ve;
          K && (O.header || O.dynamicTyping || O.transform) && (ve = 1, !K.data.length || Array.isArray(K.data[0]) ? (K.data = K.data.map(fe), ve = K.data.length) : K.data = fe(K.data, 0), O.header && K.meta && (K.meta.fields = M), L += ve);
        }
        function pe() {
          return O.header && M.length === 0;
        }
        function Ee(ce, fe, ve, le) {
          ce = { type: ce, code: fe, message: ve }, le !== void 0 && (ce.row = le), K.errors.push(ce);
        }
        A(O.step) && (E = O.step, O.step = function(ce) {
          K = ce, pe() ? H() : (H(), K.data.length !== 0 && (Q += ce.data.length, O.preview && Q > O.preview ? N.abort() : (K.data = K.data[0], E(K, D))));
        }), this.parse = function(ce, fe, ve) {
          var le = O.quoteChar || '"', le = (O.newline || (O.newline = this.guessLineEndings(ce, le)), z = !1, O.delimiter ? A(O.delimiter) && (O.delimiter = O.delimiter(ce), K.meta.delimiter = O.delimiter) : ((le = ((we, xe, v, X, W) => {
            var k, T, j, te;
            W = W || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ne = 0; ne < W.length; ne++) {
              for (var G, V = W[ne], J = 0, Z = 0, ae = 0, de = (j = void 0, new y({ comments: X, delimiter: V, newline: xe, preview: 10 }).parse(we)), _e = 0; _e < de.data.length; _e++) v && ee(de.data[_e]) ? ae++ : (G = de.data[_e].length, Z += G, j === void 0 ? j = G : 0 < G && (J += Math.abs(G - j), j = G));
              0 < de.data.length && (Z /= de.data.length - ae), (T === void 0 || J <= T) && (te === void 0 || te < Z) && 1.99 < Z && (T = J, k = V, te = Z);
            }
            return { successful: !!(O.delimiter = k), bestDelimiter: k };
          })(ce, O.newline, O.skipEmptyLines, O.comments, O.delimitersToGuess)).successful ? O.delimiter = le.bestDelimiter : (z = !0, O.delimiter = c.DefaultDelimiter), K.meta.delimiter = O.delimiter), C(O));
          return O.preview && O.header && le.preview++, w = ce, N = new y(le), K = N.parse(w, fe, ve), H(), re ? { meta: { paused: !0 } } : K || { meta: { paused: !1 } };
        }, this.paused = function() {
          return re;
        }, this.pause = function() {
          re = !0, N.abort(), w = A(O.chunk) ? "" : w.substring(N.getCharIndex());
        }, this.resume = function() {
          D.streamer._halted ? (re = !1, D.streamer.parseChunk(w, !0)) : setTimeout(D.resume, 3);
        }, this.aborted = function() {
          return P;
        }, this.abort = function() {
          P = !0, N.abort(), K.meta.aborted = !0, A(O.complete) && O.complete(K), w = "";
        }, this.guessLineEndings = function(we, le) {
          we = we.substring(0, 1048576);
          var le = new RegExp(b(le) + "([^]*?)" + b(le), "gm"), ve = (we = we.replace(le, "")).split("\r"), le = we.split(`
`), we = 1 < le.length && le[0].length < ve[0].length;
          if (ve.length === 1 || we) return `
`;
          for (var xe = 0, v = 0; v < ve.length; v++) ve[v][0] === `
` && xe++;
          return xe >= ve.length / 2 ? `\r
` : "\r";
        };
      }
      function b(O) {
        return O.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function y(O) {
        var w = (O = O || {}).delimiter, N = O.newline, z = O.comments, E = O.step, F = O.preview, g = O.fastMode, q = null, ie = !1, D = O.quoteChar == null ? '"' : O.quoteChar, Q = D;
        if (O.escapeChar !== void 0 && (Q = O.escapeChar), (typeof w != "string" || -1 < c.BAD_DELIMITERS.indexOf(w)) && (w = ","), z === w) throw new Error("Comment character same as delimiter");
        z === !0 ? z = "#" : (typeof z != "string" || -1 < c.BAD_DELIMITERS.indexOf(z)) && (z = !1), N !== `
` && N !== "\r" && N !== `\r
` && (N = `
`);
        var L = 0, re = !1;
        this.parse = function(P, M, K) {
          if (typeof P != "string") throw new Error("Input must be a string");
          var ee = P.length, H = w.length, pe = N.length, Ee = z.length, ce = A(E), fe = [], ve = [], le = [], we = L = 0;
          if (!P) return J();
          if (g || g !== !1 && P.indexOf(D) === -1) {
            for (var xe = P.split(N), v = 0; v < xe.length; v++) {
              if (le = xe[v], L += le.length, v !== xe.length - 1) L += N.length;
              else if (K) return J();
              if (!z || le.substring(0, Ee) !== z) {
                if (ce) {
                  if (fe = [], te(le.split(w)), Z(), re) return J();
                } else te(le.split(w));
                if (F && F <= v) return fe = fe.slice(0, F), J(!0);
              }
            }
            return J();
          }
          for (var X = P.indexOf(w, L), W = P.indexOf(N, L), k = new RegExp(b(Q) + b(D), "g"), T = P.indexOf(D, L); ; ) if (P[L] === D) for (T = L, L++; ; ) {
            if ((T = P.indexOf(D, T + 1)) === -1) return K || ve.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: fe.length, index: L }), G();
            if (T === ee - 1) return G(P.substring(L, T).replace(k, D));
            if (D === Q && P[T + 1] === Q) T++;
            else if (D === Q || T === 0 || P[T - 1] !== Q) {
              X !== -1 && X < T + 1 && (X = P.indexOf(w, T + 1));
              var j = ne((W = W !== -1 && W < T + 1 ? P.indexOf(N, T + 1) : W) === -1 ? X : Math.min(X, W));
              if (P.substr(T + 1 + j, H) === w) {
                le.push(P.substring(L, T).replace(k, D)), P[L = T + 1 + j + H] !== D && (T = P.indexOf(D, L)), X = P.indexOf(w, L), W = P.indexOf(N, L);
                break;
              }
              if (j = ne(W), P.substring(T + 1 + j, T + 1 + j + pe) === N) {
                if (le.push(P.substring(L, T).replace(k, D)), V(T + 1 + j + pe), X = P.indexOf(w, L), T = P.indexOf(D, L), ce && (Z(), re)) return J();
                if (F && fe.length >= F) return J(!0);
                break;
              }
              ve.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: fe.length, index: L }), T++;
            }
          }
          else if (z && le.length === 0 && P.substring(L, L + Ee) === z) {
            if (W === -1) return J();
            L = W + pe, W = P.indexOf(N, L), X = P.indexOf(w, L);
          } else if (X !== -1 && (X < W || W === -1)) le.push(P.substring(L, X)), L = X + H, X = P.indexOf(w, L);
          else {
            if (W === -1) break;
            if (le.push(P.substring(L, W)), V(W + pe), ce && (Z(), re)) return J();
            if (F && fe.length >= F) return J(!0);
          }
          return G();
          function te(ae) {
            fe.push(ae), we = L;
          }
          function ne(ae) {
            var de = 0;
            return de = ae !== -1 && (ae = P.substring(T + 1, ae)) && ae.trim() === "" ? ae.length : de;
          }
          function G(ae) {
            return K || (ae === void 0 && (ae = P.substring(L)), le.push(ae), L = ee, te(le), ce && Z()), J();
          }
          function V(ae) {
            L = ae, te(le), le = [], W = P.indexOf(N, L);
          }
          function J(ae) {
            if (O.header && !M && fe.length && !ie) {
              var de = fe[0], _e = {}, Fe = new Set(de);
              let Ve = !1;
              for (let Ne = 0; Ne < de.length; Ne++) {
                let Le = de[Ne];
                if (_e[Le = A(O.transformHeader) ? O.transformHeader(Le, Ne) : Le]) {
                  let Ce, He = _e[Le];
                  for (; Ce = Le + "_" + He, He++, Fe.has(Ce); ) ;
                  Fe.add(Ce), de[Ne] = Ce, _e[Le]++, Ve = !0, (q = q === null ? {} : q)[Ce] = Le;
                } else _e[Le] = 1, de[Ne] = Le;
                Fe.add(Le);
              }
              Ve && console.warn("Duplicate headers found and renamed."), ie = !0;
            }
            return { data: fe, errors: ve, meta: { delimiter: w, linebreak: N, aborted: re, truncated: !!ae, cursor: we + (M || 0), renamedHeaders: q } };
          }
          function Z() {
            E(J()), fe = [], ve = [];
          }
        }, this.abort = function() {
          re = !0;
        }, this.getCharIndex = function() {
          return L;
        };
      }
      function _(O) {
        var w = O.data, N = s[w.workerId], z = !1;
        if (w.error) N.userError(w.error, w.file);
        else if (w.results && w.results.data) {
          var E = { abort: function() {
            z = !0, x(w.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: S, resume: S };
          if (A(N.userStep)) {
            for (var F = 0; F < w.results.data.length && (N.userStep({ data: w.results.data[F], errors: w.results.errors, meta: w.results.meta }, E), !z); F++) ;
            delete w.results;
          } else A(N.userChunk) && (N.userChunk(w.results, E, w.file), delete w.results);
        }
        w.finished && !z && x(w.workerId, w.results);
      }
      function x(O, w) {
        var N = s[O];
        A(N.userComplete) && N.userComplete(w), N.terminate(), delete s[O];
      }
      function S() {
        throw new Error("Not implemented.");
      }
      function C(O) {
        if (typeof O != "object" || O === null) return O;
        var w, N = Array.isArray(O) ? [] : {};
        for (w in O) N[w] = C(O[w]);
        return N;
      }
      function B(O, w) {
        return function() {
          O.apply(w, arguments);
        };
      }
      function A(O) {
        return typeof O == "function";
      }
      return c.parse = function(O, w) {
        var N = (w = w || {}).dynamicTyping || !1;
        if (A(N) && (w.dynamicTypingFunction = N, N = {}), w.dynamicTyping = N, w.transform = !!A(w.transform) && w.transform, !w.worker || !c.WORKERS_SUPPORTED) return N = null, c.NODE_STREAM_INPUT, typeof O == "string" ? (O = ((z) => z.charCodeAt(0) !== 65279 ? z : z.slice(1))(O), N = new (w.download ? l : h)(w)) : O.readable === !0 && A(O.read) && A(O.on) ? N = new m(w) : (n.File && O instanceof File || O instanceof Object) && (N = new d(w)), N.stream(O);
        (N = (() => {
          var z;
          return !!c.WORKERS_SUPPORTED && (z = (() => {
            var E = n.URL || n.webkitURL || null, F = r.toString();
            return c.BLOB_URL || (c.BLOB_URL = E.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", F, ")();"], { type: "text/javascript" })));
          })(), (z = new n.Worker(z)).onmessage = _, z.id = u++, s[z.id] = z);
        })()).userStep = w.step, N.userChunk = w.chunk, N.userComplete = w.complete, N.userError = w.error, w.step = A(w.step), w.chunk = A(w.chunk), w.complete = A(w.complete), w.error = A(w.error), delete w.worker, N.postMessage({ input: O, config: w, workerId: N.id });
      }, c.unparse = function(O, w) {
        var N = !1, z = !0, E = ",", F = `\r
`, g = '"', q = g + g, ie = !1, D = null, Q = !1, L = ((() => {
          if (typeof w == "object") {
            if (typeof w.delimiter != "string" || c.BAD_DELIMITERS.filter(function(M) {
              return w.delimiter.indexOf(M) !== -1;
            }).length || (E = w.delimiter), typeof w.quotes != "boolean" && typeof w.quotes != "function" && !Array.isArray(w.quotes) || (N = w.quotes), typeof w.skipEmptyLines != "boolean" && typeof w.skipEmptyLines != "string" || (ie = w.skipEmptyLines), typeof w.newline == "string" && (F = w.newline), typeof w.quoteChar == "string" && (g = w.quoteChar), typeof w.header == "boolean" && (z = w.header), Array.isArray(w.columns)) {
              if (w.columns.length === 0) throw new Error("Option columns is empty");
              D = w.columns;
            }
            w.escapeChar !== void 0 && (q = w.escapeChar + g), w.escapeFormulae instanceof RegExp ? Q = w.escapeFormulae : typeof w.escapeFormulae == "boolean" && w.escapeFormulae && (Q = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(b(g), "g"));
        if (typeof O == "string" && (O = JSON.parse(O)), Array.isArray(O)) {
          if (!O.length || Array.isArray(O[0])) return re(null, O, ie);
          if (typeof O[0] == "object") return re(D || Object.keys(O[0]), O, ie);
        } else if (typeof O == "object") return typeof O.data == "string" && (O.data = JSON.parse(O.data)), Array.isArray(O.data) && (O.fields || (O.fields = O.meta && O.meta.fields || D), O.fields || (O.fields = Array.isArray(O.data[0]) ? O.fields : typeof O.data[0] == "object" ? Object.keys(O.data[0]) : []), Array.isArray(O.data[0]) || typeof O.data[0] == "object" || (O.data = [O.data])), re(O.fields || [], O.data || [], ie);
        throw new Error("Unable to serialize unrecognized input");
        function re(M, K, ee) {
          var H = "", pe = (typeof M == "string" && (M = JSON.parse(M)), typeof K == "string" && (K = JSON.parse(K)), Array.isArray(M) && 0 < M.length), Ee = !Array.isArray(K[0]);
          if (pe && z) {
            for (var ce = 0; ce < M.length; ce++) 0 < ce && (H += E), H += P(M[ce], ce);
            0 < K.length && (H += F);
          }
          for (var fe = 0; fe < K.length; fe++) {
            var ve = (pe ? M : K[fe]).length, le = !1, we = pe ? Object.keys(K[fe]).length === 0 : K[fe].length === 0;
            if (ee && !pe && (le = ee === "greedy" ? K[fe].join("").trim() === "" : K[fe].length === 1 && K[fe][0].length === 0), ee === "greedy" && pe) {
              for (var xe = [], v = 0; v < ve; v++) {
                var X = Ee ? M[v] : v;
                xe.push(K[fe][X]);
              }
              le = xe.join("").trim() === "";
            }
            if (!le) {
              for (var W = 0; W < ve; W++) {
                0 < W && !we && (H += E);
                var k = pe && Ee ? M[W] : W;
                H += P(K[fe][k], W);
              }
              fe < K.length - 1 && (!ee || 0 < ve && !we) && (H += F);
            }
          }
          return H;
        }
        function P(M, K) {
          var ee, H;
          return M == null ? "" : M.constructor === Date ? JSON.stringify(M).slice(1, 25) : (H = !1, Q && typeof M == "string" && Q.test(M) && (M = "'" + M, H = !0), ee = M.toString().replace(L, q), (H = H || N === !0 || typeof N == "function" && N(M, K) || Array.isArray(N) && N[K] || ((pe, Ee) => {
            for (var ce = 0; ce < Ee.length; ce++) if (-1 < pe.indexOf(Ee[ce])) return !0;
            return !1;
          })(ee, c.BAD_DELIMITERS) || -1 < ee.indexOf(E) || ee.charAt(0) === " " || ee.charAt(ee.length - 1) === " ") ? g + ee + g : ee);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !a && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = y, c.ParserHandle = p, c.NetworkStreamer = l, c.FileStreamer = d, c.StringStreamer = h, c.ReadableStreamStreamer = m, n.jQuery && ((i = n.jQuery).fn.parse = function(O) {
        var w = O.config || {}, N = [];
        return this.each(function(F) {
          if (!(i(this).prop("tagName").toUpperCase() === "INPUT" && i(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var g = 0; g < this.files.length; g++) N.push({ file: this.files[g], inputElem: this, instanceConfig: i.extend({}, w) });
        }), z(), this;
        function z() {
          if (N.length === 0) A(O.complete) && O.complete();
          else {
            var F, g, q, ie, D = N[0];
            if (A(O.before)) {
              var Q = O.before(D.file, D.inputElem);
              if (typeof Q == "object") {
                if (Q.action === "abort") return F = "AbortError", g = D.file, q = D.inputElem, ie = Q.reason, void (A(O.error) && O.error({ name: F }, g, q, ie));
                if (Q.action === "skip") return void E();
                typeof Q.config == "object" && (D.instanceConfig = i.extend(D.instanceConfig, Q.config));
              } else if (Q === "skip") return void E();
            }
            var L = D.instanceConfig.complete;
            D.instanceConfig.complete = function(re) {
              A(L) && L(re, D.file, D.inputElem), E();
            }, c.parse(D.file, D.instanceConfig);
          }
        }
        function E() {
          N.splice(0, 1), z();
        }
      }), o && (n.onmessage = function(O) {
        O = O.data, c.WORKER_ID === void 0 && O && (c.WORKER_ID = O.workerId), typeof O.input == "string" ? n.postMessage({ workerId: c.WORKER_ID, results: c.parse(O.input, O.config), finished: !0 }) : (n.File && O.input instanceof File || O.input instanceof Object) && (O = c.parse(O.input, O.config)) && n.postMessage({ workerId: c.WORKER_ID, results: O, finished: !0 });
      }), (l.prototype = Object.create(f.prototype)).constructor = l, (d.prototype = Object.create(f.prototype)).constructor = d, (h.prototype = Object.create(h.prototype)).constructor = h, (m.prototype = Object.create(f.prototype)).constructor = m, c;
    });
  }(bi)), bi.exports;
}
var bS = yS();
const uT = /* @__PURE__ */ nn(bS);
export {
  xS as A,
  ES as B,
  a0 as C,
  un as D,
  oT as E,
  Uc as F,
  sT as G,
  wS as H,
  DS as I,
  ZS as J,
  MS as K,
  TS as L,
  NS as M,
  SS as N,
  OS as O,
  uT as P,
  CS as Q,
  tT as R,
  FS as S,
  AS as T,
  RS as U,
  IS as V,
  kS as W,
  PS as X,
  JS as _,
  GS as a,
  VS as b,
  ht as c,
  jS as d,
  Ii as e,
  rT as f,
  BS as g,
  zS as h,
  qS as i,
  iT as j,
  aT as k,
  Ya as l,
  se as m,
  QS as n,
  nT as o,
  YS as p,
  Nn as q,
  eT as r,
  US as s,
  LS as t,
  KS as u,
  $S as v,
  WS as w,
  xr as x,
  nn as y,
  HS as z
};

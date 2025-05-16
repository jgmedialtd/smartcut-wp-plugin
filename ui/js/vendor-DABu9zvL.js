var y0 = Object.defineProperty;
var b0 = (e, t, r) => t in e ? y0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var yf = (e, t, r) => b0(e, typeof t != "symbol" ? t + "" : t, r);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function _0(e, t, r) {
  return (t = x0(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function bf(e, t) {
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
    t % 2 ? bf(Object(r), !0).forEach(function(n) {
      _0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function w0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function x0(e) {
  var t = w0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const _f = () => {
};
let Cc = {}, yg = {}, bg = null, _g = {
  mark: _f,
  measure: _f
};
try {
  typeof window < "u" && (Cc = window), typeof document < "u" && (yg = document), typeof MutationObserver < "u" && (bg = MutationObserver), typeof performance < "u" && (_g = performance);
} catch {
}
const {
  userAgent: wf = ""
} = Cc.navigator || {}, fr = Cc, De = yg, xf = bg, ri = _g;
fr.document;
const rr = !!De.documentElement && !!De.head && typeof De.addEventListener == "function" && typeof De.createElement == "function", wg = ~wf.indexOf("MSIE") || ~wf.indexOf("Trident/");
var E0 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, S0 = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, xg = {
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
}, Eg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], nt = "classic", Mi = "duotone", T0 = "sharp", C0 = "sharp-duotone", Sg = [nt, Mi, T0, C0], A0 = {
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
}, R0 = {
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
}, I0 = /* @__PURE__ */ new Map([["classic", {
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
}]]), k0 = {
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
}, N0 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ef = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, P0 = ["kit"], M0 = {
  kit: {
    "fa-kit": "fak"
  }
}, D0 = ["fak", "fakd"], F0 = {
  kit: {
    fak: "fa-kit"
  }
}, Sf = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, ni = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, L0 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], B0 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], j0 = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, z0 = {
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
}, q0 = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, Mu = {
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
}, U0 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Du = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...L0, ...U0], $0 = ["solid", "regular", "light", "thin", "duotone", "brands"], Og = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], W0 = Og.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), G0 = [...Object.keys(q0), ...$0, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ni.GROUP, ni.SWAP_OPACITY, ni.PRIMARY, ni.SECONDARY].concat(Og.map((e) => "".concat(e, "x"))).concat(W0.map((e) => "w-".concat(e))), V0 = {
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
const er = "___FONT_AWESOME___", Fu = 16, Tg = "fa", Cg = "svg-inline--fa", Cr = "data-fa-i2svg", Lu = "data-fa-pseudo-element", H0 = "data-fa-pseudo-element-pending", Ac = "data-prefix", Rc = "data-icon", Of = "fontawesome-i2svg", K0 = "async", Y0 = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ag = (() => {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
function Mn(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[nt];
    }
  });
}
const Rg = oe({}, xg);
Rg[nt] = oe(oe(oe(oe({}, {
  "fa-duotone": "duotone"
}), xg[nt]), Ef.kit), Ef["kit-duotone"]);
const X0 = Mn(Rg), Bu = oe({}, k0);
Bu[nt] = oe(oe(oe(oe({}, {
  duotone: "fad"
}), Bu[nt]), Sf.kit), Sf["kit-duotone"]);
const Tf = Mn(Bu), ju = oe({}, Mu);
ju[nt] = oe(oe({}, ju[nt]), F0.kit);
const Ic = Mn(ju), zu = oe({}, z0);
zu[nt] = oe(oe({}, zu[nt]), M0.kit);
Mn(zu);
const Z0 = E0, Ig = "fa-layers-text", J0 = S0, Q0 = oe({}, A0);
Mn(Q0);
const eb = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Oa = O0, tb = [...P0, ...G0], En = fr.FontAwesomeConfig || {};
function rb(e) {
  var t = De.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function nb(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
De && typeof De.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const i = nb(rb(r));
  i != null && (En[n] = i);
});
const kg = {
  styleDefault: "solid",
  familyDefault: nt,
  cssPrefix: Tg,
  replacementClass: Cg,
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
En.familyPrefix && (En.cssPrefix = En.familyPrefix);
const Hr = oe(oe({}, kg), En);
Hr.autoReplaceSvg || (Hr.observeMutations = !1);
const ge = {};
Object.keys(kg).forEach((e) => {
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
function ib(e) {
  return Sn.push(e), () => {
    Sn.splice(Sn.indexOf(e), 1);
  };
}
const ar = Fu, zt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ab(e) {
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
const sb = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Cn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += sb[Math.random() * 62 | 0];
  return t;
}
function Qr(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function kc(e) {
  return e.classList ? Qr(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Ng(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ob(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(Ng(e[r]), '" '), "").trim();
}
function Di(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function Nc(e) {
  return e.size !== zt.size || e.x !== zt.x || e.y !== zt.y || e.rotate !== zt.rotate || e.flipX || e.flipY;
}
function ub(e) {
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
function cb(e) {
  let {
    transform: t,
    width: r = Fu,
    height: n = Fu,
    startCentered: i = !1
  } = e, a = "";
  return i && wg ? a += "translate(".concat(t.x / ar - r / 2, "em, ").concat(t.y / ar - n / 2, "em) ") : i ? a += "translate(calc(-50% + ".concat(t.x / ar, "em), calc(-50% + ").concat(t.y / ar, "em)) ") : a += "translate(".concat(t.x / ar, "em, ").concat(t.y / ar, "em) "), a += "scale(".concat(t.size / ar * (t.flipX ? -1 : 1), ", ").concat(t.size / ar * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var lb = `:root, :host {
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
function Pg() {
  const e = Tg, t = Cg, r = ge.cssPrefix, n = ge.replacementClass;
  let i = lb;
  if (r !== e || n !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
let Cf = !1;
function Ta() {
  ge.autoAddCss && !Cf && (ab(Pg()), Cf = !0);
}
var fb = {
  mixout() {
    return {
      dom: {
        css: Pg,
        insertCss: Ta
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ta();
      },
      beforeI2svg() {
        Ta();
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
const Mg = [], Dg = function() {
  De.removeEventListener("DOMContentLoaded", Dg), bi = 1, Mg.map((e) => e());
};
let bi = !1;
rr && (bi = (De.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(De.readyState), bi || De.addEventListener("DOMContentLoaded", Dg));
function hb(e) {
  rr && (bi ? setTimeout(e, 0) : Mg.push(e));
}
function Dn(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? Ng(e) : "<".concat(t, " ").concat(ob(r), ">").concat(n.map(Dn).join(""), "</").concat(t, ">");
}
function Af(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Ca = function(t, r, n, i) {
  var a = Object.keys(t), o = a.length, s = r, u, c, f;
  for (n === void 0 ? (u = 1, f = t[a[0]]) : (u = 0, f = n); u < o; u++)
    c = a[u], f = s(f, t[c], c, t);
  return f;
};
function db(e) {
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
function qu(e) {
  const t = db(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function pb(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), i;
  return n >= 55296 && n <= 56319 && r > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (n - 55296) * 1024 + i - 56320 + 65536 : n;
}
function Rf(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function Uu(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = Rf(t);
  typeof qt.hooks.addPack == "function" && !n ? qt.hooks.addPack(e, Rf(t)) : qt.styles[e] = oe(oe({}, qt.styles[e] || {}), i), e === "fas" && Uu("fa", t);
}
const {
  styles: An,
  shims: mb
} = qt, Fg = Object.keys(Ic), gb = Fg.reduce((e, t) => (e[t] = Object.keys(Ic[t]), e), {});
let Pc = null, Lg = {}, Bg = {}, jg = {}, zg = {}, qg = {};
function vb(e) {
  return ~tb.indexOf(e);
}
function yb(e, t) {
  const r = t.split("-"), n = r[0], i = r.slice(1).join("-");
  return n === e && i !== "" && !vb(i) ? i : null;
}
const Ug = () => {
  const e = (n) => Ca(An, (i, a, o) => (i[o] = Ca(a, n, {}), i), {});
  Lg = e((n, i, a) => (i[3] && (n[i[3]] = a), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    n[s.toString(16)] = a;
  }), n)), Bg = e((n, i, a) => (n[a] = a, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    n[s] = a;
  }), n)), qg = e((n, i, a) => {
    const o = i[2];
    return n[a] = a, o.forEach((s) => {
      n[s] = a;
    }), n;
  });
  const t = "far" in An || ge.autoFetchSvg, r = Ca(mb, (n, i) => {
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
  jg = r.names, zg = r.unicodes, Pc = Fi(ge.styleDefault, {
    family: ge.familyDefault
  });
};
ib((e) => {
  Pc = Fi(e.styleDefault, {
    family: ge.familyDefault
  });
});
Ug();
function Mc(e, t) {
  return (Lg[e] || {})[t];
}
function bb(e, t) {
  return (Bg[e] || {})[t];
}
function wr(e, t) {
  return (qg[e] || {})[t];
}
function $g(e) {
  return jg[e] || {
    prefix: null,
    iconName: null
  };
}
function _b(e) {
  const t = zg[e], r = Mc("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function hr() {
  return Pc;
}
const Wg = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function wb(e) {
  let t = nt;
  const r = Fg.reduce((n, i) => (n[i] = "".concat(ge.cssPrefix, "-").concat(i), n), {});
  return Sg.forEach((n) => {
    (e.includes(r[n]) || e.some((i) => gb[n].includes(i))) && (t = n);
  }), t;
}
function Fi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = nt
  } = t, n = X0[r][e];
  if (r === Mi && !e)
    return "fad";
  const i = Tf[r][e] || Tf[r][n], a = e in qt.styles ? e : null;
  return i || a || null;
}
function xb(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const i = yb(ge.cssPrefix, n);
    i ? r = i : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function If(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function Li(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const i = Du.concat(B0), a = If(e.filter((l) => i.includes(l))), o = If(e.filter((l) => !Du.includes(l))), s = a.filter((l) => (n = l, !Eg.includes(l))), [u = null] = s, c = wb(a), f = oe(oe({}, xb(o)), {}, {
    prefix: Fi(u, {
      family: c
    })
  });
  return oe(oe(oe({}, f), Tb({
    values: e,
    family: c,
    styles: An,
    config: ge,
    canonical: f,
    givenPrefix: n
  })), Eb(r, n, f));
}
function Eb(e, t, r) {
  let {
    prefix: n,
    iconName: i
  } = r;
  if (e || !n || !i)
    return {
      prefix: n,
      iconName: i
    };
  const a = t === "fa" ? $g(i) : {}, o = wr(n, i);
  return i = a.iconName || o || i, n = a.prefix || n, n === "far" && !An.far && An.fas && !ge.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const Sb = Sg.filter((e) => e !== nt || e !== Mi), Ob = Object.keys(Mu).filter((e) => e !== nt).map((e) => Object.keys(Mu[e])).flat();
function Tb(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = r === Mi, u = t.includes("fa-duotone") || t.includes("fad"), c = o.familyDefault === "duotone", f = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!s && (u || c || f) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Sb.includes(r) && (Object.keys(a).find((d) => Ob.includes(d)) || o.autoFetchSvg)) {
    const d = I0.get(r).defaultShortPrefixId;
    n.prefix = d, n.iconName = wr(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || i === "fa") && (n.prefix = hr() || "fas"), n;
}
class Cb {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const i = r.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((a) => {
      this.definitions[a] = oe(oe({}, this.definitions[a] || {}), i[a]), Uu(a, i[a]);
      const o = Ic[nt][a];
      o && Uu(o, i[a]), Ug();
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
let kf = [], $r = {};
const Gr = {}, Ab = Object.keys(Gr);
function Rb(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return kf = e, $r = {}, Object.keys(Gr).forEach((n) => {
    Ab.indexOf(n) === -1 && delete Gr[n];
  }), kf.forEach((n) => {
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
function $u(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  return ($r[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...n]);
  }), t;
}
function Ar(e) {
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
function Wu(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || hr();
  if (t)
    return t = wr(r, t) || t, Af(Gg.definitions, r, t) || Af(qt.styles, r, t);
}
const Gg = new Cb(), Ib = () => {
  ge.autoReplaceSvg = !1, ge.observeMutations = !1, Ar("noAuto");
}, kb = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return rr ? (Ar("beforeI2svg", e), dr("pseudoElements2svg", e), dr("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ge.autoReplaceSvg === !1 && (ge.autoReplaceSvg = !0), ge.observeMutations = !0, hb(() => {
      Pb({
        autoReplaceSvgRoot: t
      }), Ar("watch", e);
    });
  }
}, Nb = {
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
    if (typeof e == "string" && (e.indexOf("".concat(ge.cssPrefix, "-")) > -1 || e.match(Z0))) {
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
}, yt = {
  noAuto: Ib,
  config: ge,
  dom: kb,
  parse: Nb,
  library: Gg,
  findIconDefinition: Wu,
  toHtml: Dn
}, Pb = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = De
  } = e;
  (Object.keys(qt.styles).length > 0 || ge.autoFetchSvg) && rr && ge.autoReplaceSvg && yt.dom.i2svg({
    node: t
  });
};
function Bi(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => Dn(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!rr) return;
      const r = De.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function Mb(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: i,
    styles: a,
    transform: o
  } = e;
  if (Nc(o) && r.found && !n.found) {
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
function Db(e) {
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
function Dc(e) {
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
  } = r.found ? r : t, m = D0.includes(n), p = [ge.replacementClass, i ? "".concat(ge.cssPrefix, "-").concat(i) : ""].filter((C) => f.classes.indexOf(C) === -1).filter((C) => C !== "" || !!C).concat(f.classes).join(" ");
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
  l && (b.attributes[Cr] = ""), s && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(c || Cn())
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
    attributes: O
  } = r.found && t.found ? dr("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : dr("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = x, _.attributes = O, o ? Db(_) : Mb(_);
}
function Nf(e) {
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
  s && (u[Cr] = "");
  const c = oe({}, o.styles);
  Nc(i) && (c.transform = cb({
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
function Fb(e) {
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
  styles: Aa
} = qt;
function Gu(e) {
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
const Lb = {
  found: !1,
  width: 512,
  height: 512
};
function Bb(e, t) {
  !Ag && !ge.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Vu(e, t) {
  let r = t;
  return t === "fa" && ge.styleDefault !== null && (t = hr()), new Promise((n, i) => {
    if (r === "fa") {
      const a = $g(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Aa[t] && Aa[t][e]) {
      const a = Aa[t][e];
      return n(Gu(a));
    }
    Bb(e, t), n(oe(oe({}, Lb), {}, {
      icon: ge.showMissingIcons && e ? dr("missingIconAbstract") || {} : {}
    }));
  });
}
const Pf = () => {
}, Hu = ge.measurePerformance && ri && ri.mark && ri.measure ? ri : {
  mark: Pf,
  measure: Pf
}, _n = 'FA "6.7.2"', jb = (e) => (Hu.mark("".concat(_n, " ").concat(e, " begins")), () => Vg(e)), Vg = (e) => {
  Hu.mark("".concat(_n, " ").concat(e, " ends")), Hu.measure("".concat(_n, " ").concat(e), "".concat(_n, " ").concat(e, " begins"), "".concat(_n, " ").concat(e, " ends"));
};
var Fc = {
  begin: jb,
  end: Vg
};
const hi = () => {
};
function Mf(e) {
  return typeof (e.getAttribute ? e.getAttribute(Cr) : null) == "string";
}
function zb(e) {
  const t = e.getAttribute ? e.getAttribute(Ac) : null, r = e.getAttribute ? e.getAttribute(Rc) : null;
  return t && r;
}
function qb(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ge.replacementClass);
}
function Ub() {
  return ge.autoReplaceSvg === !0 ? di.replace : di[ge.autoReplaceSvg] || di.replace;
}
function $b(e) {
  return De.createElementNS("http://www.w3.org/2000/svg", e);
}
function Wb(e) {
  return De.createElement(e);
}
function Hg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? $b : Wb
  } = t;
  if (typeof e == "string")
    return De.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    n.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    n.appendChild(Hg(a, {
      ceFn: r
    }));
  }), n;
}
function Gb(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const di = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(Hg(r), t);
      }), t.getAttribute(Cr) === null && ge.keepOriginalSource) {
        let r = De.createComment(Gb(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~kc(t).indexOf(ge.replacementClass))
      return di.replace(e);
    const n = new RegExp("".concat(ge.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const a = r[0].attributes.class.split(" ").reduce((o, s) => (s === ge.replacementClass || s.match(n) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const i = r.map((a) => Dn(a)).join(`
`);
    t.setAttribute(Cr, ""), t.innerHTML = i;
  }
};
function Df(e) {
  e();
}
function Kg(e, t) {
  const r = typeof t == "function" ? t : hi;
  if (e.length === 0)
    r();
  else {
    let n = Df;
    ge.mutateApproach === K0 && (n = fr.requestAnimationFrame || Df), n(() => {
      const i = Ub(), a = Fc.begin("mutate");
      e.map(i), a(), r();
    });
  }
}
let Lc = !1;
function Yg() {
  Lc = !0;
}
function Ku() {
  Lc = !1;
}
let _i = null;
function Ff(e) {
  if (!xf || !ge.observeMutations)
    return;
  const {
    treeCallback: t = hi,
    nodeCallback: r = hi,
    pseudoElementsCallback: n = hi,
    observeMutationsRoot: i = De
  } = e;
  _i = new xf((a) => {
    if (Lc) return;
    const o = hr();
    Qr(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Mf(s.addedNodes[0]) && (ge.searchPseudoElements && n(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && ge.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && Mf(s.target) && ~eb.indexOf(s.attributeName))
        if (s.attributeName === "class" && zb(s.target)) {
          const {
            prefix: u,
            iconName: c
          } = Li(kc(s.target));
          s.target.setAttribute(Ac, u || o), c && s.target.setAttribute(Rc, c);
        } else qb(s.target) && r(s.target);
    });
  }), rr && _i.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Vb() {
  _i && _i.disconnect();
}
function Hb(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, i) => {
    const a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function Kb(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = Li(kc(e));
  return i.prefix || (i.prefix = hr()), t && r && (i.prefix = t, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = bb(i.prefix, e.innerText) || Mc(i.prefix, qu(e.innerText))), !i.iconName && ge.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function Yb(e) {
  const t = Qr(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return ge.autoA11y && (r ? t["aria-labelledby"] = "".concat(ge.replacementClass, "-title-").concat(n || Cn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Xb() {
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
function Lf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = Kb(e), a = Yb(e), o = $u("parseNodeAttributes", {}, e);
  let s = t.styleParser ? Hb(e) : [];
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
  styles: Zb
} = qt;
function Xg(e) {
  const t = ge.autoReplaceSvg === "nest" ? Lf(e, {
    styleParser: !1
  }) : Lf(e);
  return ~t.extra.classes.indexOf(Ig) ? dr("generateLayersText", e, t) : dr("generateSvgReplacementMutation", e, t);
}
function Jb() {
  return [...N0, ...Du];
}
function Bf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!rr) return Promise.resolve();
  const r = De.documentElement.classList, n = (f) => r.add("".concat(Of, "-").concat(f)), i = (f) => r.remove("".concat(Of, "-").concat(f)), a = ge.autoFetchSvg ? Jb() : Eg.concat(Object.keys(Zb));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Ig, ":not([").concat(Cr, "])")].concat(a.map((f) => ".".concat(f, ":not([").concat(Cr, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Qr(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), i("complete");
  else
    return Promise.resolve();
  const u = Fc.begin("onTree"), c = s.reduce((f, l) => {
    try {
      const d = Xg(l);
      d && f.push(d);
    } catch (d) {
      Ag || d.name === "MissingIcon" && console.error(d);
    }
    return f;
  }, []);
  return new Promise((f, l) => {
    Promise.all(c).then((d) => {
      Kg(d, () => {
        n("active"), n("complete"), i("pending"), typeof t == "function" && t(), u(), f();
      });
    }).catch((d) => {
      u(), l(d);
    });
  });
}
function Qb(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Xg(e).then((r) => {
    r && Kg([r], t);
  });
}
function e1(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : Wu(t || {});
    let {
      mask: i
    } = r;
    return i && (i = (i || {}).icon ? i : Wu(i || {})), e(n, oe(oe({}, r), {}, {
      mask: i
    }));
  };
}
const t1 = function(e) {
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
  }, e), () => (Ar("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ge.autoA11y && (o ? c["aria-labelledby"] = "".concat(ge.replacementClass, "-title-").concat(s || Cn()) : (c["aria-hidden"] = "true", c.focusable = "false")), Dc({
    icons: {
      main: Gu(h),
      mask: i ? Gu(i.icon) : {
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
var r1 = {
  mixout() {
    return {
      icon: e1(t1)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Bf, e.nodeCallback = Qb, e;
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
      return Bf(r, n);
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
        Promise.all([Vu(n, o), c.iconName ? Vu(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [p, b] = m;
          d([t, Dc({
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
      return Nc(a) && (u = dr("generateAbstractTransformGrouping", {
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
}, n1 = {
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
          Ar("beforeDOMElementCreation", {
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
}, i1 = {
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
        }, () => (Ar("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Fb({
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
}, a1 = {
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
        }, () => (Ar("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Nf({
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
      if (wg) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / u, s = c.height / u;
      }
      return ge.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Nf({
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
const s1 = new RegExp('"', "ug"), jf = [1105920, 1112319], zf = oe(oe(oe(oe({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), R0), V0), j0), Yu = Object.keys(zf).reduce((e, t) => (e[t.toLowerCase()] = zf[t], e), {}), o1 = Object.keys(Yu).reduce((e, t) => {
  const r = Yu[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function u1(e) {
  const t = e.replace(s1, ""), r = pb(t, 0), n = r >= jf[0] && r <= jf[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: qu(i ? t[0] : t),
    isSecondary: n || i
  };
}
function c1(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), i = isNaN(n) ? "normal" : n;
  return (Yu[r] || {})[i] || o1[r];
}
function qf(e, t) {
  const r = "".concat(H0).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null)
      return n();
    const o = Qr(e.children).filter((d) => d.getAttribute(Lu) === t)[0], s = fr.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), c = u.match(J0), f = s.getPropertyValue("font-weight"), l = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), n();
    if (c && l !== "none" && l !== "") {
      const d = s.getPropertyValue("content");
      let h = c1(u, f);
      const {
        value: m,
        isSecondary: p
      } = u1(d), b = c[0].startsWith("FontAwesome");
      let y = Mc(h, m), _ = y;
      if (b) {
        const x = _b(m);
        x.iconName && x.prefix && (y = x.iconName, h = x.prefix);
      }
      if (y && !p && (!o || o.getAttribute(Ac) !== h || o.getAttribute(Rc) !== _)) {
        e.setAttribute(r, _), o && e.removeChild(o);
        const x = Xb(), {
          extra: O
        } = x;
        O.attributes[Lu] = t, Vu(y, h).then((C) => {
          const B = Dc(oe(oe({}, x), {}, {
            icons: {
              main: C,
              mask: Wg()
            },
            prefix: h,
            iconName: _,
            extra: O,
            watchable: !0
          })), I = De.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(I, e.firstChild) : e.appendChild(I), I.outerHTML = B.map((S) => Dn(S)).join(`
`), e.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function l1(e) {
  return Promise.all([qf(e, "::before"), qf(e, "::after")]);
}
function f1(e) {
  return e.parentNode !== document.head && !~Y0.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Lu) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Uf(e) {
  if (rr)
    return new Promise((t, r) => {
      const n = Qr(e.querySelectorAll("*")).filter(f1).map(l1), i = Fc.begin("searchPseudoElements");
      Yg(), Promise.all(n).then(() => {
        i(), Ku(), t();
      }).catch(() => {
        i(), Ku(), r();
      });
    });
}
var h1 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Uf, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = De
      } = t;
      ge.searchPseudoElements && Uf(r);
    };
  }
};
let $f = !1;
var d1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Yg(), $f = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Ff($u("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Vb();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        $f ? Ku() : Ff($u("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Wf = (e) => {
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
var p1 = {
  mixout() {
    return {
      parse: {
        transform: (e) => Wf(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = Wf(r)), e;
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
const Ra = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Gf(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function m1(e) {
  return e.tag === "g" ? e.children : [e];
}
var g1 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? Li(r.split(" ").map((i) => i.trim())) : Wg();
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
      } = a, d = ub({
        transform: s,
        containerWidth: f,
        iconWidth: u
      }), h = {
        tag: "rect",
        attributes: oe(oe({}, Ra), {}, {
          fill: "white"
        })
      }, m = c.children ? {
        children: c.children.map(Gf)
      } : {}, p = {
        tag: "g",
        attributes: oe({}, d.inner),
        children: [Gf(oe({
          tag: c.tag,
          attributes: oe(oe({}, c.attributes), d.path)
        }, m))]
      }, b = {
        tag: "g",
        attributes: oe({}, d.outer),
        children: [p]
      }, y = "mask-".concat(o || Cn()), _ = "clip-".concat(o || Cn()), x = {
        tag: "mask",
        attributes: oe(oe({}, Ra), {}, {
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
          children: m1(l)
        }, x]
      };
      return r.push(O, {
        tag: "rect",
        attributes: oe({
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(y, ")")
        }, Ra)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, v1 = {
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
}, y1 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, b1 = [fb, r1, n1, i1, a1, h1, d1, p1, g1, v1, y1];
Rb(b1, {
  mixoutsTo: yt
});
yt.noAuto;
yt.config;
const EO = yt.library;
yt.dom;
const SO = yt.parse;
yt.findIconDefinition;
yt.toHtml;
const OO = yt.icon;
yt.layer;
yt.text;
yt.counter;
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const TO = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, CO = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, AO = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, RO = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
};
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const IO = {
  prefix: "fass",
  iconName: "spray-can",
  icon: [512, 512, [], "f5bd", "M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, kO = {
  prefix: "fass",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, NO = {
  prefix: "fass",
  iconName: "files",
  icon: [448, 512, [], "e178", "M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z"]
}, PO = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, MO = {
  prefix: "fass",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M288 32l0-32L224 0l0 32 0 192L32 224 0 224l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-192 192 0 32 0 0-64-32 0-192 0 0-192z"]
}, DO = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, FO = {
  prefix: "fass",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32L0 32 0 64l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 32zM64 352l0-32L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 32l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM448 352l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z"]
}, LO = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, BO = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
var Zg = typeof global == "object" && global && global.Object === Object && global, _1 = typeof self == "object" && self && self.Object === Object && self, ji = Zg || _1 || Function("return this")(), Kr = ji.Symbol, Jg = Object.prototype, w1 = Jg.hasOwnProperty, x1 = Jg.toString, cn = Kr ? Kr.toStringTag : void 0;
function E1(e) {
  var t = w1.call(e, cn), r = e[cn];
  try {
    e[cn] = void 0;
    var n = !0;
  } catch {
  }
  var i = x1.call(e);
  return n && (t ? e[cn] = r : delete e[cn]), i;
}
var S1 = Object.prototype, O1 = S1.toString;
function T1(e) {
  return O1.call(e);
}
var C1 = "[object Null]", A1 = "[object Undefined]", Vf = Kr ? Kr.toStringTag : void 0;
function Fn(e) {
  return e == null ? e === void 0 ? A1 : C1 : Vf && Vf in Object(e) ? E1(e) : T1(e);
}
function Ln(e) {
  return e != null && typeof e == "object";
}
var R1 = "[object Symbol]";
function zi(e) {
  return typeof e == "symbol" || Ln(e) && Fn(e) == R1;
}
function I1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var Bn = Array.isArray, Hf = Kr ? Kr.prototype : void 0, Kf = Hf ? Hf.toString : void 0;
function Qg(e) {
  if (typeof e == "string")
    return e;
  if (Bn(e))
    return I1(e, Qg) + "";
  if (zi(e))
    return Kf ? Kf.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var k1 = /\s/;
function N1(e) {
  for (var t = e.length; t-- && k1.test(e.charAt(t)); )
    ;
  return t;
}
var P1 = /^\s+/;
function M1(e) {
  return e && e.slice(0, N1(e) + 1).replace(P1, "");
}
function pr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Yf = NaN, D1 = /^[-+]0x[0-9a-f]+$/i, F1 = /^0b[01]+$/i, L1 = /^0o[0-7]+$/i, B1 = parseInt;
function jO(e) {
  if (typeof e == "number")
    return e;
  if (zi(e))
    return Yf;
  if (pr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = pr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = M1(e);
  var r = F1.test(e);
  return r || L1.test(e) ? B1(e.slice(2), r ? 2 : 8) : D1.test(e) ? Yf : +e;
}
function ev(e) {
  return e;
}
var j1 = "[object AsyncFunction]", z1 = "[object Function]", q1 = "[object GeneratorFunction]", U1 = "[object Proxy]";
function tv(e) {
  if (!pr(e))
    return !1;
  var t = Fn(e);
  return t == z1 || t == q1 || t == j1 || t == U1;
}
var Ia = ji["__core-js_shared__"], Xf = function() {
  var e = /[^.]+$/.exec(Ia && Ia.keys && Ia.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $1(e) {
  return !!Xf && Xf in e;
}
var W1 = Function.prototype, G1 = W1.toString;
function V1(e) {
  if (e != null) {
    try {
      return G1.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var H1 = /[\\^$.*+?()[\]{}|]/g, K1 = /^\[object .+?Constructor\]$/, Y1 = Function.prototype, X1 = Object.prototype, Z1 = Y1.toString, J1 = X1.hasOwnProperty, Q1 = RegExp(
  "^" + Z1.call(J1).replace(H1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function e_(e) {
  if (!pr(e) || $1(e))
    return !1;
  var t = tv(e) ? Q1 : K1;
  return t.test(V1(e));
}
function t_(e, t) {
  return e == null ? void 0 : e[t];
}
function Bc(e, t) {
  var r = t_(e, t);
  return e_(r) ? r : void 0;
}
function r_(e, t, r) {
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
var n_ = 800, i_ = 16, a_ = Date.now;
function s_(e) {
  var t = 0, r = 0;
  return function() {
    var n = a_(), i = i_ - (n - r);
    if (r = n, i > 0) {
      if (++t >= n_)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function o_(e) {
  return function() {
    return e;
  };
}
var wi = function() {
  try {
    var e = Bc(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), u_ = wi ? function(e, t) {
  return wi(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: o_(t),
    writable: !0
  });
} : ev, c_ = s_(u_), l_ = 9007199254740991, f_ = /^(?:0|[1-9]\d*)$/;
function qi(e, t) {
  var r = typeof e;
  return t = t ?? l_, !!t && (r == "number" || r != "symbol" && f_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function h_(e, t, r) {
  t == "__proto__" && wi ? wi(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Ui(e, t) {
  return e === t || e !== e && t !== t;
}
var d_ = Object.prototype, p_ = d_.hasOwnProperty;
function m_(e, t, r) {
  var n = e[t];
  (!(p_.call(e, t) && Ui(n, r)) || r === void 0 && !(t in e)) && h_(e, t, r);
}
var Zf = Math.max;
function g_(e, t, r) {
  return t = Zf(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Zf(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = n[i];
    return s[t] = r(o), r_(e, this, s);
  };
}
function v_(e, t) {
  return c_(g_(e, t, ev), e + "");
}
var y_ = 9007199254740991;
function jc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= y_;
}
function rv(e) {
  return e != null && jc(e.length) && !tv(e);
}
function b_(e, t, r) {
  if (!pr(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? rv(r) && qi(t, r.length) : n == "string" && t in r) ? Ui(r[t], e) : !1;
}
var __ = Object.prototype;
function w_(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || __;
  return e === r;
}
function x_(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var E_ = "[object Arguments]";
function Jf(e) {
  return Ln(e) && Fn(e) == E_;
}
var nv = Object.prototype, S_ = nv.hasOwnProperty, O_ = nv.propertyIsEnumerable, iv = Jf(/* @__PURE__ */ function() {
  return arguments;
}()) ? Jf : function(e) {
  return Ln(e) && S_.call(e, "callee") && !O_.call(e, "callee");
};
function T_() {
  return !1;
}
var av = typeof exports == "object" && exports && !exports.nodeType && exports, Qf = av && typeof module == "object" && module && !module.nodeType && module, C_ = Qf && Qf.exports === av, eh = C_ ? ji.Buffer : void 0, A_ = eh ? eh.isBuffer : void 0, R_ = A_ || T_, I_ = "[object Arguments]", k_ = "[object Array]", N_ = "[object Boolean]", P_ = "[object Date]", M_ = "[object Error]", D_ = "[object Function]", F_ = "[object Map]", L_ = "[object Number]", B_ = "[object Object]", j_ = "[object RegExp]", z_ = "[object Set]", q_ = "[object String]", U_ = "[object WeakMap]", $_ = "[object ArrayBuffer]", W_ = "[object DataView]", G_ = "[object Float32Array]", V_ = "[object Float64Array]", H_ = "[object Int8Array]", K_ = "[object Int16Array]", Y_ = "[object Int32Array]", X_ = "[object Uint8Array]", Z_ = "[object Uint8ClampedArray]", J_ = "[object Uint16Array]", Q_ = "[object Uint32Array]", Pe = {};
Pe[G_] = Pe[V_] = Pe[H_] = Pe[K_] = Pe[Y_] = Pe[X_] = Pe[Z_] = Pe[J_] = Pe[Q_] = !0;
Pe[I_] = Pe[k_] = Pe[$_] = Pe[N_] = Pe[W_] = Pe[P_] = Pe[M_] = Pe[D_] = Pe[F_] = Pe[L_] = Pe[B_] = Pe[j_] = Pe[z_] = Pe[q_] = Pe[U_] = !1;
function ew(e) {
  return Ln(e) && jc(e.length) && !!Pe[Fn(e)];
}
function tw(e) {
  return function(t) {
    return e(t);
  };
}
var sv = typeof exports == "object" && exports && !exports.nodeType && exports, On = sv && typeof module == "object" && module && !module.nodeType && module, rw = On && On.exports === sv, ka = rw && Zg.process, th = function() {
  try {
    var e = On && On.require && On.require("util").types;
    return e || ka && ka.binding && ka.binding("util");
  } catch {
  }
}(), rh = th && th.isTypedArray, nw = rh ? tw(rh) : ew;
function iw(e, t) {
  var r = Bn(e), n = !r && iv(e), i = !r && !n && R_(e), a = !r && !n && !i && nw(e), o = r || n || i || a, s = o ? x_(e.length, String) : [], u = s.length;
  for (var c in e)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    qi(c, u)) || s.push(c);
  return s;
}
function aw(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var sw = Object.prototype, ow = sw.hasOwnProperty;
function uw(e) {
  if (!pr(e))
    return aw(e);
  var t = w_(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !ow.call(e, n)) || r.push(n);
  return r;
}
function cw(e) {
  return rv(e) ? iw(e) : uw(e);
}
var lw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fw = /^\w*$/;
function hw(e, t) {
  if (Bn(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || zi(e) ? !0 : fw.test(e) || !lw.test(e) || t != null && e in Object(t);
}
var Rn = Bc(Object, "create");
function dw() {
  this.__data__ = Rn ? Rn(null) : {}, this.size = 0;
}
function pw(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var mw = "__lodash_hash_undefined__", gw = Object.prototype, vw = gw.hasOwnProperty;
function yw(e) {
  var t = this.__data__;
  if (Rn) {
    var r = t[e];
    return r === mw ? void 0 : r;
  }
  return vw.call(t, e) ? t[e] : void 0;
}
var bw = Object.prototype, _w = bw.hasOwnProperty;
function ww(e) {
  var t = this.__data__;
  return Rn ? t[e] !== void 0 : _w.call(t, e);
}
var xw = "__lodash_hash_undefined__";
function Ew(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Rn && t === void 0 ? xw : t, this;
}
function Rr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Rr.prototype.clear = dw;
Rr.prototype.delete = pw;
Rr.prototype.get = yw;
Rr.prototype.has = ww;
Rr.prototype.set = Ew;
function Sw() {
  this.__data__ = [], this.size = 0;
}
function $i(e, t) {
  for (var r = e.length; r--; )
    if (Ui(e[r][0], t))
      return r;
  return -1;
}
var Ow = Array.prototype, Tw = Ow.splice;
function Cw(e) {
  var t = this.__data__, r = $i(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Tw.call(t, r, 1), --this.size, !0;
}
function Aw(e) {
  var t = this.__data__, r = $i(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Rw(e) {
  return $i(this.__data__, e) > -1;
}
function Iw(e, t) {
  var r = this.__data__, n = $i(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function en(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
en.prototype.clear = Sw;
en.prototype.delete = Cw;
en.prototype.get = Aw;
en.prototype.has = Rw;
en.prototype.set = Iw;
var kw = Bc(ji, "Map");
function Nw() {
  this.size = 0, this.__data__ = {
    hash: new Rr(),
    map: new (kw || en)(),
    string: new Rr()
  };
}
function Pw(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Wi(e, t) {
  var r = e.__data__;
  return Pw(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Mw(e) {
  var t = Wi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Dw(e) {
  return Wi(this, e).get(e);
}
function Fw(e) {
  return Wi(this, e).has(e);
}
function Lw(e, t) {
  var r = Wi(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Pr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Pr.prototype.clear = Nw;
Pr.prototype.delete = Mw;
Pr.prototype.get = Dw;
Pr.prototype.has = Fw;
Pr.prototype.set = Lw;
var Bw = "Expected a function";
function zc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Bw);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (zc.Cache || Pr)(), r;
}
zc.Cache = Pr;
var jw = 500;
function zw(e) {
  var t = zc(e, function(n) {
    return r.size === jw && r.clear(), n;
  }), r = t.cache;
  return t;
}
var qw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Uw = /\\(\\)?/g, $w = zw(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(qw, function(r, n, i, a) {
    t.push(i ? a.replace(Uw, "$1") : n || r);
  }), t;
});
function Ww(e) {
  return e == null ? "" : Qg(e);
}
function qc(e, t) {
  return Bn(e) ? e : hw(e, t) ? [e] : $w(Ww(e));
}
function Uc(e) {
  if (typeof e == "string" || zi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Gw(e, t) {
  t = qc(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Uc(t[r++])];
  return r && r == n ? e : void 0;
}
function zO(e, t, r) {
  var n = e == null ? void 0 : Gw(e, t);
  return n === void 0 ? r : n;
}
function Vw(e, t, r) {
  t = qc(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = Uc(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && jc(i) && qi(o, i) && (Bn(e) || iv(e)));
}
var ov = Object.prototype, Hw = ov.hasOwnProperty, qO = v_(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, i = n > 2 ? t[2] : void 0;
  for (i && b_(t[0], t[1], i) && (n = 1); ++r < n; )
    for (var a = t[r], o = cw(a), s = -1, u = o.length; ++s < u; ) {
      var c = o[s], f = e[c];
      (f === void 0 || Ui(f, ov[c]) && !Hw.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), Kw = Object.prototype, Yw = Kw.hasOwnProperty;
function Xw(e, t) {
  return e != null && Yw.call(e, t);
}
function UO(e, t) {
  return e != null && Vw(e, t, Xw);
}
var Zw = "[object Number]";
function Jw(e) {
  return typeof e == "number" || Ln(e) && Fn(e) == Zw;
}
function $O(e) {
  return Jw(e) && e != +e;
}
function Qw(e, t, r, n) {
  if (!pr(e))
    return e;
  t = qc(t, e);
  for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
    var u = Uc(t[i]), c = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != o) {
      var f = s[u];
      c = void 0, c === void 0 && (c = pr(f) ? f : qi(t[i + 1]) ? [] : {});
    }
    m_(s, u, c), s = s[u];
  }
  return e;
}
function WO(e, t, r) {
  return e == null ? e : Qw(e, t, r);
}
const Qe = [];
for (let e = 0; e < 256; ++e)
  Qe.push((e + 256).toString(16).slice(1));
function e2(e, t = 0) {
  return (Qe[e[t + 0]] + Qe[e[t + 1]] + Qe[e[t + 2]] + Qe[e[t + 3]] + "-" + Qe[e[t + 4]] + Qe[e[t + 5]] + "-" + Qe[e[t + 6]] + Qe[e[t + 7]] + "-" + Qe[e[t + 8]] + Qe[e[t + 9]] + "-" + Qe[e[t + 10]] + Qe[e[t + 11]] + Qe[e[t + 12]] + Qe[e[t + 13]] + Qe[e[t + 14]] + Qe[e[t + 15]]).toLowerCase();
}
let Na;
const t2 = new Uint8Array(16);
function r2() {
  if (!Na) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Na = crypto.getRandomValues.bind(crypto);
  }
  return Na(t2);
}
const n2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), nh = { randomUUID: n2 };
function GO(e, t, r) {
  var i;
  if (nh.randomUUID && !e)
    return nh.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? r2();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, e2(n);
}
typeof BigInt > "u" && (BigInt = function(e) {
  if (isNaN(e)) throw new Error("");
  return e;
});
const ye = BigInt(0), Se = BigInt(1), In = BigInt(2), Xu = BigInt(5), ht = BigInt(10), i2 = 2e3, he = {
  s: Se,
  n: ye,
  d: Se
};
function Zt(e, t) {
  try {
    e = BigInt(e);
  } catch {
    throw or();
  }
  return e * t;
}
function Et(e) {
  return typeof e == "bigint" ? e : Math.floor(e);
}
function je(e, t) {
  if (t === ye)
    throw Wc();
  const r = Object.create($c.prototype);
  r.s = e < ye ? -Se : Se, e = e < ye ? -e : e;
  const n = _r(e, t);
  return r.n = e / n, r.d = t / n, r;
}
function Ur(e) {
  const t = {};
  let r = e, n = In, i = Xu - Se;
  for (; i <= r; ) {
    for (; r % n === ye; )
      r /= n, t[n] = (t[n] || ye) + Se;
    i += Se + In * n++;
  }
  return r !== e ? r > 1 && (t[r] = (t[r] || ye) + Se) : t[e] = (t[e] || ye) + Se, t;
}
const Ye = function(e, t) {
  let r = ye, n = Se, i = Se;
  if (e != null) if (t !== void 0) {
    if (typeof e == "bigint")
      r = e;
    else {
      if (isNaN(e))
        throw or();
      if (e % 1 !== 0)
        throw ih();
      r = BigInt(e);
    }
    if (typeof t == "bigint")
      n = t;
    else {
      if (isNaN(t))
        throw or();
      if (t % 1 !== 0)
        throw ih();
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
    if (e < 0 && (i = -Se, e = -e), e % 1 === 0)
      r = BigInt(e);
    else {
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
    let a = 0, o = ye, s = ye, u = ye, c = Se, f = Se, l = e.replace(/_/g, "").match(/\d+|./g);
    if (l === null)
      throw or();
    if (l[a] === "-" ? (i = -Se, a++) : l[a] === "+" && a++, l.length === a + 1 ? s = Zt(l[a++], i) : l[a + 1] === "." || l[a] === "." ? (l[a] !== "." && (o = Zt(l[a++], i)), a++, (a + 1 === l.length || l[a + 1] === "(" && l[a + 3] === ")" || l[a + 1] === "'" && l[a + 3] === "'") && (s = Zt(l[a], i), c = ht ** BigInt(l[a].length), a++), (l[a] === "(" && l[a + 2] === ")" || l[a] === "'" && l[a + 2] === "'") && (u = Zt(l[a + 1], i), f = ht ** BigInt(l[a + 1].length) - Se, a += 3)) : l[a + 1] === "/" || l[a + 1] === ":" ? (s = Zt(l[a], i), c = Zt(l[a + 2], Se), a += 3) : l[a + 3] === "/" && l[a + 1] === " " && (o = Zt(l[a], i), s = Zt(l[a + 2], i), c = Zt(l[a + 4], Se), a += 5), l.length <= a)
      n = c * f, i = /* void */
      r = u + n * o + f * s;
    else
      throw or();
  } else if (typeof e == "bigint")
    r = e, i = e, n = Se;
  else
    throw or();
  if (n === ye)
    throw Wc();
  he.s = i < ye ? -Se : Se, he.n = r < ye ? -r : r, he.d = n < ye ? -n : n;
};
function a2(e, t, r) {
  let n = Se;
  for (; t > ye; e = e * e % r, t >>= Se)
    t & Se && (n = n * e % r);
  return n;
}
function s2(e, t) {
  for (; t % In === ye; t /= In)
    ;
  for (; t % Xu === ye; t /= Xu)
    ;
  if (t === Se)
    return ye;
  let r = ht % t, n = 1;
  for (; r !== Se; n++)
    if (r = r * ht % t, n > i2)
      return ye;
  return BigInt(n);
}
function o2(e, t, r) {
  let n = Se, i = a2(ht, r, t);
  for (let a = 0; a < 300; a++) {
    if (n === i)
      return BigInt(a);
    n = n * ht % t, i = i * ht % t;
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
function $c(e, t) {
  if (Ye(e, t), this instanceof $c)
    e = _r(he.d, he.n), this.s = he.s, this.n = he.n / e, this.d = he.d / e;
  else
    return je(he.s * he.n, he.d);
}
var Wc = function() {
  return new Error("Division by Zero");
}, or = function() {
  return new Error("Invalid argument");
}, ih = function() {
  return new Error("Parameters must be integer");
};
$c.prototype = {
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
      return je(this.s * this.n % this.d, Se);
    if (Ye(e, t), ye === he.n * this.d)
      throw Wc();
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
    return Ye(e, t), he.n === ye && this.n === ye ? je(ye, Se) : je(he.n * this.n, _r(he.n, this.n) * _r(he.d, this.d));
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
    if (Ye(e, t), he.d === Se)
      return he.s < ye ? je((this.s * this.d) ** he.n, this.n ** he.n) : je((this.s * this.n) ** he.n, this.d ** he.n);
    if (this.s < ye) return null;
    let r = Ur(this.n), n = Ur(this.d), i = Se, a = Se;
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
    return e = ht ** BigInt(e || 0), je(
      Et(this.s * e * this.n / this.d) + (e * this.n % this.d > ye && this.s >= ye ? Se : ye),
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
      Et(this.s * e * this.n / this.d) - (e * this.n % this.d > ye && this.s < ye ? Se : ye),
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
      Et(this.s * e * this.n / this.d) + this.s * ((this.s >= ye ? Se : ye) + In * (e * this.n % this.d) > this.d ? Se : ye),
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
    let a = Et(r / n);
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
    let n = s2(t, r), i = o2(t, r, n), a = this.s < ye ? "-" : "";
    if (a += Et(t / r), t %= r, t *= ht, t && (a += "."), n) {
      for (let o = i; o--; )
        a += Et(t / r), t %= r, t *= ht;
      a += "(";
      for (let o = n; o--; )
        a += Et(t / r), t %= r, t *= ht;
      a += ")";
    } else
      for (let o = e; t && o--; )
        a += Et(t / r), t %= r, t *= ht;
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
      let i = Et(t / r);
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
      let i = Et(t / r);
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
      r.push(Et(e / t));
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
var uv = Object.defineProperty, u2 = Object.getOwnPropertyNames, Y = (e, t) => uv(e, "name", { value: t, configurable: !0 }), c2 = (e, t) => function() {
  return t || (0, e[u2(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Gc = (e, t) => {
  for (var r in t)
    uv(e, r, { get: t[r], enumerable: !0 });
}, l2 = c2({
  "(disabled):util"() {
  }
}), xi = {};
Gc(xi, {
  addChainableMethod: () => nl,
  addLengthGuard: () => qn,
  addMethod: () => el,
  addProperty: () => Qc,
  checkError: () => mt,
  compareByInspect: () => Ti,
  eql: () => Dv,
  expectTypes: () => mv,
  flag: () => Oe,
  getActual: () => Vi,
  getMessage: () => Kc,
  getName: () => Ki,
  getOperator: () => ol,
  getOwnEnumerableProperties: () => sl,
  getOwnEnumerablePropertySymbols: () => al,
  getPathInfo: () => Jc,
  hasProperty: () => Hi,
  inspect: () => Re,
  isNaN: () => Ci,
  isNumeric: () => Xe,
  isProxyEnabled: () => zn,
  isRegExp: () => Ai,
  objDisplay: () => Er,
  overwriteChainableMethod: () => il,
  overwriteMethod: () => rl,
  overwriteProperty: () => tl,
  proxify: () => tn,
  test: () => Vc,
  transferFlags: () => It,
  type: () => ke
});
var mt = {};
Gc(mt, {
  compatibleConstructor: () => fv,
  compatibleInstance: () => lv,
  compatibleMessage: () => hv,
  getConstructorName: () => dv,
  getMessage: () => pv
});
function Gi(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
Y(Gi, "isErrorInstance");
function cv(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Y(cv, "isRegExp");
function lv(e, t) {
  return Gi(t) && e === t;
}
Y(lv, "compatibleInstance");
function fv(e, t) {
  return Gi(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
Y(fv, "compatibleConstructor");
function hv(e, t) {
  const r = typeof e == "string" ? e : e.message;
  return cv(t) ? t.test(r) : typeof t == "string" ? r.indexOf(t) !== -1 : !1;
}
Y(hv, "compatibleMessage");
function dv(e) {
  let t = e;
  return Gi(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
Y(dv, "getConstructorName");
function pv(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
Y(pv, "getMessage");
function Oe(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    n[t] = r;
  else
    return n[t];
}
Y(Oe, "flag");
function Vc(e, t) {
  var r = Oe(e, "negate"), n = t[0];
  return r ? !n : n;
}
Y(Vc, "test");
function ke(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Y(ke, "type");
var f2 = "captureStackTrace" in Error, Tr, Ie = (Tr = class extends Error {
  constructor(r = "Unspecified AssertionError", n, i) {
    super(r);
    yf(this, "message");
    this.message = r, f2 && Error.captureStackTrace(this, i || Tr);
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
}, Y(Tr, "AssertionError"), Tr);
function mv(e, t) {
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
Y(mv, "expectTypes");
function Vi(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
Y(Vi, "getActual");
var ah = {
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
}, h2 = {
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
function gv(e, t) {
  const r = ah[h2[t]] || ah[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
Y(gv, "colorise");
function vv({
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
  return l.colors && (l.stylize = gv), l;
}
Y(vv, "normaliseOptions");
function yv(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
Y(yv, "isHighSurrogate");
function nr(e, t, r = Yr) {
  e = String(e);
  const n = r.length, i = e.length;
  if (n > t && i > n)
    return r;
  if (i > t && i > n) {
    let a = t - n;
    return a > 0 && yv(e[a - 1]) && (a = a - 1), `${e.slice(0, a)}${r}`;
  }
  return e;
}
Y(nr, "truncate");
function _t(e, t, r, n = ", ") {
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
Y(_t, "inspectList");
function bv(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
Y(bv, "quoteComplexKey");
function Xr([e, t], r) {
  return r.truncate -= 2, typeof e == "string" ? e = bv(e) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`), r.truncate -= e.length, t = r.inspect(t, r), `${e}: ${t}`;
}
Y(Xr, "inspectProperty");
function _v(e, t) {
  const r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length)
    return "[]";
  t.truncate -= 4;
  const n = _t(e, t);
  t.truncate -= n.length;
  let i = "";
  return r.length && (i = _t(r.map((a) => [a, e[a]]), t, Xr)), `[ ${n}${i ? `, ${i}` : ""} ]`;
}
Y(_v, "inspectArray");
var d2 = /* @__PURE__ */ Y((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function jt(e, t) {
  const r = d2(e);
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
  return n.length && (a = _t(n.map((o) => [o, e[o]]), t, Xr)), `${r}[ ${i}${a ? `, ${a}` : ""} ]`;
}
Y(jt, "inspectTypedArray");
function wv(e, t) {
  const r = e.toJSON();
  if (r === null)
    return "Invalid Date";
  const n = r.split("T"), i = n[0];
  return t.stylize(`${i}T${nr(n[1], t.truncate - i.length - 1)}`, "date");
}
Y(wv, "inspectDate");
function Zu(e, t) {
  const r = e[Symbol.toStringTag] || "Function", n = e.name;
  return n ? t.stylize(`[${r} ${nr(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
Y(Zu, "inspectFunction");
function xv([e, t], r) {
  return r.truncate -= 4, e = r.inspect(e, r), r.truncate -= e.length, t = r.inspect(t, r), `${e} => ${t}`;
}
Y(xv, "inspectMapEntry");
function Ev(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push([n, r]);
  }), t;
}
Y(Ev, "mapToEntries");
function Sv(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${_t(Ev(e), t, xv)} }`);
}
Y(Sv, "inspectMap");
var p2 = Number.isNaN || ((e) => e !== e);
function Ju(e, t) {
  return p2(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(nr(String(e), t.truncate), "number");
}
Y(Ju, "inspectNumber");
function Qu(e, t) {
  let r = nr(e.toString(), t.truncate - 1);
  return r !== Yr && (r += "n"), t.stylize(r, "bigint");
}
Y(Qu, "inspectBigInt");
function Ov(e, t) {
  const r = e.toString().split("/")[2], n = t.truncate - (2 + r.length), i = e.source;
  return t.stylize(`/${nr(i, n)}/${r}`, "regexp");
}
Y(Ov, "inspectRegExp");
function Tv(e) {
  const t = [];
  return e.forEach((r) => {
    t.push(r);
  }), t;
}
Y(Tv, "arrayFromSet");
function Cv(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${_t(Tv(e), t)} }`);
}
Y(Cv, "inspectSet");
var sh = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), m2 = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, g2 = 16;
function Av(e) {
  return m2[e] || `\\u${`0000${e.charCodeAt(0).toString(g2)}`.slice(-4)}`;
}
Y(Av, "escape");
function ec(e, t) {
  return sh.test(e) && (e = e.replace(sh, Av)), t.stylize(`'${nr(e, t.truncate - 2)}'`, "string");
}
Y(ec, "inspectString");
function tc(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
Y(tc, "inspectSymbol");
var Rv = /* @__PURE__ */ Y(() => "Promise{…}", "getPromiseValue");
try {
  const { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (Rv = /* @__PURE__ */ Y((n, i) => {
    const [a, o] = e(n);
    return a === t ? "Promise{<pending>}" : `Promise${a === r ? "!" : ""}{${i.inspect(o, i)}}`;
  }, "getPromiseValue"));
} catch {
}
var v2 = Rv;
function Tn(e, t) {
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const i = _t(r.map((s) => [s, e[s]]), t, Xr), a = _t(n.map((s) => [s, e[s]]), t, Xr);
  t.seen.pop();
  let o = "";
  return i && a && (o = ", "), `{ ${i}${o}${a} }`;
}
Y(Tn, "inspectObject");
var Pa = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Iv(e, t) {
  let r = "";
  return Pa && Pa in e && (r = e[Pa]), r = r || e.constructor.name, (!r || r === "_class") && (r = "<Anonymous Class>"), t.truncate -= r.length, `${r}${Tn(e, t)}`;
}
Y(Iv, "inspectClass");
function kv(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${_t(e, t)} ]`);
}
Y(kv, "inspectArguments");
var y2 = [
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
function Nv(e, t) {
  const r = Object.getOwnPropertyNames(e).filter((o) => y2.indexOf(o) === -1), n = e.name;
  t.truncate -= n.length;
  let i = "";
  if (typeof e.message == "string" ? i = nr(e.message, t.truncate) : r.unshift("message"), i = i ? `: ${i}` : "", t.truncate -= i.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const a = _t(r.map((o) => [o, e[o]]), t, Xr);
  return `${n}${i}${a ? ` { ${a} }` : ""}`;
}
Y(Nv, "inspectObject");
function Pv([e, t], r) {
  return r.truncate -= 3, t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
Y(Pv, "inspectAttribute");
function Ei(e, t) {
  return _t(e, t, Hc, `
`);
}
Y(Ei, "inspectHTMLCollection");
function Hc(e, t) {
  const r = e.getAttributeNames(), n = e.tagName.toLowerCase(), i = t.stylize(`<${n}`, "special"), a = t.stylize(">", "special"), o = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let s = "";
  r.length > 0 && (s += " ", s += _t(r.map((f) => [f, e.getAttribute(f)]), t, Pv, " ")), t.truncate -= s.length;
  const u = t.truncate;
  let c = Ei(e.children, t);
  return c && c.length > u && (c = `${Yr}(${e.children.length})`), `${i}${s}${a}${c}${o}`;
}
Y(Hc, "inspectHTML");
var b2 = typeof Symbol == "function" && typeof Symbol.for == "function", Ma = b2 ? Symbol.for("chai/inspect") : "@@chai/inspect", Wr = !1;
try {
  const e = l2();
  Wr = e.inspect ? e.inspect.custom : !1;
} catch {
  Wr = !1;
}
var oh = /* @__PURE__ */ new WeakMap(), uh = {}, ch = {
  undefined: (e, t) => t.stylize("undefined", "undefined"),
  null: (e, t) => t.stylize("null", "null"),
  boolean: (e, t) => t.stylize(String(e), "boolean"),
  Boolean: (e, t) => t.stylize(String(e), "boolean"),
  number: Ju,
  Number: Ju,
  bigint: Qu,
  BigInt: Qu,
  string: ec,
  String: ec,
  function: Zu,
  Function: Zu,
  symbol: tc,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: tc,
  Array: _v,
  Date: wv,
  Map: Sv,
  Set: Cv,
  RegExp: Ov,
  Promise: v2,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: kv,
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
  Error: Nv,
  HTMLCollection: Ei,
  NodeList: Ei
}, _2 = /* @__PURE__ */ Y((e, t, r) => Ma in e && typeof e[Ma] == "function" ? e[Ma](t) : Wr && Wr in e && typeof e[Wr] == "function" ? e[Wr](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && oh.has(e.constructor) ? oh.get(e.constructor)(e, t) : uh[r] ? uh[r](e, t) : "", "inspectCustom"), w2 = Object.prototype.toString;
function Si(e, t = {}) {
  const r = vv(t, Si), { customInspect: n } = r;
  let i = e === null ? "null" : typeof e;
  if (i === "object" && (i = w2.call(e).slice(8, -1)), i in ch)
    return ch[i](e, r);
  if (n && e) {
    const o = _2(e, r, i);
    if (o)
      return typeof o == "string" ? o : Si(o, r);
  }
  const a = e ? Object.getPrototypeOf(e) : !1;
  return a === Object.prototype || a === null ? Tn(e, r) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? Hc(e, r) : "constructor" in e ? e.constructor !== Object ? Iv(e, r) : Tn(e, r) : e === Object(e) ? Tn(e, r) : r.stylize(String(e), i);
}
Y(Si, "inspect");
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
  return Si(e, i);
}
Y(Re, "inspect");
function Er(e) {
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
Y(Er, "objDisplay");
function Kc(e, t) {
  var r = Oe(e, "negate"), n = Oe(e, "object"), i = t[3], a = Vi(e, t), o = r ? t[2] : t[1], s = Oe(e, "message");
  return typeof o == "function" && (o = o()), o = o || "", o = o.replace(/#\{this\}/g, function() {
    return Er(n);
  }).replace(/#\{act\}/g, function() {
    return Er(a);
  }).replace(/#\{exp\}/g, function() {
    return Er(i);
  }), s ? s + ": " + o : o;
}
Y(Kc, "getMessage");
function It(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), r = arguments.length === 3 ? r : !0;
  for (var i in n)
    (r || i !== "object" && i !== "ssfi" && i !== "lockSsfi" && i != "message") && (t.__flags[i] = n[i]);
}
Y(It, "transferFlags");
function rc(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Y(rc, "type");
function Yc() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
Y(Yc, "FakeMap");
Yc.prototype = {
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
var Mv = typeof WeakMap == "function" ? WeakMap : Yc;
function nc(e, t, r) {
  if (!r || Ir(e) || Ir(t))
    return null;
  var n = r.get(e);
  if (n) {
    var i = n.get(t);
    if (typeof i == "boolean")
      return i;
  }
  return null;
}
Y(nc, "memoizeCompare");
function wn(e, t, r, n) {
  if (!(!r || Ir(e) || Ir(t))) {
    var i = r.get(e);
    i ? i.set(t, n) : (i = new Mv(), i.set(t, n), r.set(e, i));
  }
}
Y(wn, "memoizeSet");
var Dv = jn;
function jn(e, t, r) {
  if (r && r.comparator)
    return ic(e, t, r);
  var n = Xc(e, t);
  return n !== null ? n : ic(e, t, r);
}
Y(jn, "deepEqual");
function Xc(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : Ir(e) || Ir(t) ? !1 : null;
}
Y(Xc, "simpleEqual");
function ic(e, t, r) {
  r = r || {}, r.memoize = r.memoize === !1 ? !1 : r.memoize || new Mv();
  var n = r && r.comparator, i = nc(e, t, r.memoize);
  if (i !== null)
    return i;
  var a = nc(t, e, r.memoize);
  if (a !== null)
    return a;
  if (n) {
    var o = n(e, t);
    if (o === !1 || o === !0)
      return wn(e, t, r.memoize, o), o;
    var s = Xc(e, t);
    if (s !== null)
      return s;
  }
  var u = rc(e);
  if (u !== rc(t))
    return wn(e, t, r.memoize, !1), !1;
  wn(e, t, r.memoize, !0);
  var c = Fv(e, t, u, r);
  return wn(e, t, r.memoize, c), c;
}
Y(ic, "extensiveDeepEqual");
function Fv(e, t, r, n) {
  switch (r) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return jn(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return Zc(e, t, ["name", "message", "code"], n);
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
      return Lv(e, t);
    case "Generator":
      return Bv(e, t, n);
    case "DataView":
      return cr(new Uint8Array(e.buffer), new Uint8Array(t.buffer), n);
    case "ArrayBuffer":
      return cr(new Uint8Array(e), new Uint8Array(t), n);
    case "Set":
      return ac(e, t, n);
    case "Map":
      return ac(e, t, n);
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
      return zv(e, t, n);
  }
}
Y(Fv, "extensiveDeepEqualByType");
function Lv(e, t) {
  return e.toString() === t.toString();
}
Y(Lv, "regexpEqual");
function ac(e, t, r) {
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
Y(ac, "entriesEqual");
function cr(e, t, r) {
  var n = e.length;
  if (n !== t.length)
    return !1;
  if (n === 0)
    return !0;
  for (var i = -1; ++i < n; )
    if (jn(e[i], t[i], r) === !1)
      return !1;
  return !0;
}
Y(cr, "iterableEqual");
function Bv(e, t, r) {
  return cr(Oi(e), Oi(t), r);
}
Y(Bv, "generatorEqual");
function jv(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
Y(jv, "hasIteratorFunction");
function sc(e) {
  if (jv(e))
    try {
      return Oi(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
Y(sc, "getIteratorEntries");
function Oi(e) {
  for (var t = e.next(), r = [t.value]; t.done === !1; )
    t = e.next(), r.push(t.value);
  return r;
}
Y(Oi, "getGeneratorEntries");
function oc(e) {
  var t = [];
  for (var r in e)
    t.push(r);
  return t;
}
Y(oc, "getEnumerableKeys");
function uc(e) {
  for (var t = [], r = Object.getOwnPropertySymbols(e), n = 0; n < r.length; n += 1) {
    var i = r[n];
    Object.getOwnPropertyDescriptor(e, i).enumerable && t.push(i);
  }
  return t;
}
Y(uc, "getEnumerableSymbols");
function Zc(e, t, r, n) {
  var i = r.length;
  if (i === 0)
    return !0;
  for (var a = 0; a < i; a += 1)
    if (jn(e[r[a]], t[r[a]], n) === !1)
      return !1;
  return !0;
}
Y(Zc, "keysEqual");
function zv(e, t, r) {
  var n = oc(e), i = oc(t), a = uc(e), o = uc(t);
  if (n = n.concat(a), i = i.concat(o), n.length && n.length === i.length)
    return cr(cc(n).sort(), cc(i).sort()) === !1 ? !1 : Zc(e, t, n, r);
  var s = sc(e), u = sc(t);
  return s.length && s.length === u.length ? (s.sort(), u.sort(), cr(s, u, r)) : n.length === 0 && s.length === 0 && i.length === 0 && u.length === 0;
}
Y(zv, "objectEqual");
function Ir(e) {
  return e === null || typeof e != "object";
}
Y(Ir, "isPrimitive");
function cc(e) {
  return e.map(/* @__PURE__ */ Y(function(r) {
    return typeof r == "symbol" ? r.toString() : r;
  }, "mapSymbol"));
}
Y(cc, "mapSymbols");
function Hi(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
Y(Hi, "hasProperty");
function qv(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((n) => {
    if (n === "constructor" || n === "__proto__" || n === "prototype")
      return {};
    const a = /^\[(\d+)\]$/.exec(n);
    let o = null;
    return a ? o = { i: parseFloat(a[1]) } : o = { p: n.replace(/\\([.[\]])/g, "$1") }, o;
  });
}
Y(qv, "parsePath");
function lc(e, t, r) {
  let n = e, i = null;
  r = typeof r > "u" ? t.length : r;
  for (let a = 0; a < r; a++) {
    const o = t[a];
    n && (typeof o.p > "u" ? n = n[o.i] : n = n[o.p], a === r - 1 && (i = n));
  }
  return i;
}
Y(lc, "internalGetPathValue");
function Jc(e, t) {
  const r = qv(t), n = r[r.length - 1], i = {
    parent: r.length > 1 ? lc(e, r, r.length - 1) : e,
    name: n.p || n.i,
    value: lc(e, r)
  };
  return i.exists = Hi(i.parent, i.name), i;
}
Y(Jc, "getPathInfo");
function R(e, t, r, n) {
  return Oe(this, "ssfi", r || R), Oe(this, "lockSsfi", n), Oe(this, "object", e), Oe(this, "message", t), Oe(this, "eql", st.deepEqual || Dv), tn(this);
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
  Qc(this.prototype, e, t);
};
R.addMethod = function(e, t) {
  el(this.prototype, e, t);
};
R.addChainableMethod = function(e, t, r) {
  nl(this.prototype, e, t, r);
};
R.overwriteProperty = function(e, t) {
  tl(this.prototype, e, t);
};
R.overwriteMethod = function(e, t) {
  rl(this.prototype, e, t);
};
R.overwriteChainableMethod = function(e, t, r) {
  il(this.prototype, e, t, r);
};
R.prototype.assert = function(e, t, r, n, i, a) {
  var o = Vc(this, arguments);
  if (a !== !1 && (a = !0), n === void 0 && i === void 0 && (a = !1), st.showDiff !== !0 && (a = !1), !o) {
    t = Kc(this, arguments);
    var s = Vi(this, arguments), u = {
      actual: s,
      expected: n,
      showDiff: a
    }, c = ol(this, arguments);
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
function zn() {
  return st.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
Y(zn, "isProxyEnabled");
function Qc(e, t, r) {
  r = r === void 0 ? function() {
  } : r, Object.defineProperty(e, t, {
    get: /* @__PURE__ */ Y(function n() {
      !zn() && !Oe(this, "lockSsfi") && Oe(this, "ssfi", n);
      var i = r.call(this);
      if (i !== void 0)
        return i;
      var a = new R();
      return It(this, a), a;
    }, "propertyGetter"),
    configurable: !0
  });
}
Y(Qc, "addProperty");
var x2 = Object.getOwnPropertyDescriptor(function() {
}, "length");
function qn(e, t, r) {
  return x2.configurable && Object.defineProperty(e, "length", {
    get: function() {
      throw Error(
        r ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".'
      );
    }
  }), e;
}
Y(qn, "addLengthGuard");
function Uv(e) {
  var t = Object.getOwnPropertyNames(e);
  function r(i) {
    t.indexOf(i) === -1 && t.push(i);
  }
  Y(r, "addProperty");
  for (var n = Object.getPrototypeOf(e); n !== null; )
    Object.getOwnPropertyNames(n).forEach(r), n = Object.getPrototypeOf(n);
  return t;
}
Y(Uv, "getProperties");
var lh = ["__flags", "__methods", "_obj", "assert"];
function tn(e, t) {
  return zn() ? new Proxy(e, {
    get: /* @__PURE__ */ Y(function r(n, i) {
      if (typeof i == "string" && st.proxyExcludedKeys.indexOf(i) === -1 && !Reflect.has(n, i)) {
        if (t)
          throw Error(
            "Invalid Chai property: " + t + "." + i + '. See docs for proper usage of "' + t + '".'
          );
        var a = null, o = 4;
        throw Uv(n).forEach(function(s) {
          if (
            // we actually mean to check `Object.prototype` here
            // eslint-disable-next-line no-prototype-builtins
            !Object.prototype.hasOwnProperty(s) && lh.indexOf(s) === -1
          ) {
            var u = $v(i, s, o);
            u < o && (a = s, o = u);
          }
        }), Error(
          a !== null ? "Invalid Chai property: " + i + '. Did you mean "' + a + '"?' : "Invalid Chai property: " + i
        );
      }
      return lh.indexOf(i) === -1 && !Oe(n, "lockSsfi") && Oe(n, "ssfi", r), Reflect.get(n, i);
    }, "proxyGetter")
  }) : e;
}
Y(tn, "proxify");
function $v(e, t, r) {
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
Y($v, "stringDistanceCapped");
function el(e, t, r) {
  var n = /* @__PURE__ */ Y(function() {
    Oe(this, "lockSsfi") || Oe(this, "ssfi", n);
    var i = r.apply(this, arguments);
    if (i !== void 0)
      return i;
    var a = new R();
    return It(this, a), a;
  }, "methodWrapper");
  qn(n, t, !1), e[t] = tn(n, t);
}
Y(el, "addMethod");
function tl(e, t, r) {
  var n = Object.getOwnPropertyDescriptor(e, t), i = /* @__PURE__ */ Y(function() {
  }, "_super");
  n && typeof n.get == "function" && (i = n.get), Object.defineProperty(e, t, {
    get: /* @__PURE__ */ Y(function a() {
      !zn() && !Oe(this, "lockSsfi") && Oe(this, "ssfi", a);
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
Y(tl, "overwriteProperty");
function rl(e, t, r) {
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
  qn(a, t, !1), e[t] = tn(a, t);
}
Y(rl, "overwriteMethod");
var E2 = typeof Object.setPrototypeOf == "function", fh = /* @__PURE__ */ Y(function() {
}, "testFn"), S2 = Object.getOwnPropertyNames(fh).filter(function(e) {
  var t = Object.getOwnPropertyDescriptor(fh, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), O2 = Function.prototype.call, T2 = Function.prototype.apply;
function nl(e, t, r, n) {
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
        var f = new R();
        return It(this, f), f;
      }, "chainableMethodWrapper");
      if (qn(o, t, !0), E2) {
        var s = Object.create(this);
        s.call = O2, s.apply = T2, Object.setPrototypeOf(o, s);
      } else {
        var u = Object.getOwnPropertyNames(e);
        u.forEach(function(c) {
          if (S2.indexOf(c) === -1) {
            var f = Object.getOwnPropertyDescriptor(e, c);
            Object.defineProperty(o, c, f);
          }
        });
      }
      return It(this, o), tn(o);
    }, "chainableMethodGetter"),
    configurable: !0
  });
}
Y(nl, "addChainableMethod");
function il(e, t, r, n) {
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
Y(il, "overwriteChainableMethod");
function Ti(e, t) {
  return Re(e) < Re(t) ? -1 : 1;
}
Y(Ti, "compareByInspect");
function al(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
Y(al, "getOwnEnumerablePropertySymbols");
function sl(e) {
  return Object.keys(e).concat(al(e));
}
Y(sl, "getOwnEnumerableProperties");
var Ci = Number.isNaN;
function Wv(e) {
  var t = ke(e), r = ["Array", "Object", "Function"];
  return r.indexOf(t) !== -1;
}
Y(Wv, "isObjectType");
function ol(e, t) {
  var r = Oe(e, "operator"), n = Oe(e, "negate"), i = t[3], a = n ? t[2] : t[1];
  if (r)
    return r;
  if (typeof a == "function" && (a = a()), a = a || "", !!a && !/\shave\s/.test(a)) {
    var o = Wv(i);
    return /\snot\s/.test(a) ? o ? "notDeepStrictEqual" : "notStrictEqual" : o ? "deepStrictEqual" : "strictEqual";
  }
}
Y(ol, "getOperator");
function Ki(e) {
  return e.name;
}
Y(Ki, "getName");
function Ai(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Y(Ai, "isRegExp");
function Xe(e) {
  return ["Number", "BigInt"].includes(ke(e));
}
Y(Xe, "isNumeric");
var { flag: $ } = xi;
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
var hh = {
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
function ul(e, t) {
  t && $(this, "message", t), e = e.toLowerCase();
  var r = $(this, "object"), n = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const i = ke(r).toLowerCase();
  hh.function.includes(e) ? this.assert(
    hh[e].includes(i),
    "expected #{this} to be " + n + e,
    "expected #{this} not to be " + n + e
  ) : this.assert(
    e === i,
    "expected #{this} to be " + n + e,
    "expected #{this} not to be " + n + e
  );
}
Y(ul, "an");
R.addChainableMethod("an", ul);
R.addChainableMethod("a", ul);
function Gv(e, t) {
  return Ci(e) && Ci(t) || e === t;
}
Y(Gv, "SameValueZero");
function Un() {
  $(this, "contains", !0);
}
Y(Un, "includeChainingBehavior");
function $n(e, t) {
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
        var p = new R(r);
        if (It(this, p, !0), $(p, "lockSsfi", !0), !a || l.length === 1) {
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
Y($n, "include");
R.addChainableMethod("include", $n, Un);
R.addChainableMethod("contain", $n, Un);
R.addChainableMethod("contains", $n, Un);
R.addChainableMethod("includes", $n, Un);
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
    Ci($(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function cl() {
  var e = $(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
Y(cl, "assertExist");
R.addProperty("exist", cl);
R.addProperty("exists", cl);
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
function ll() {
  var e = $(this, "object"), t = ke(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
Y(ll, "checkArguments");
R.addProperty("arguments", ll);
R.addProperty("Arguments", ll);
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
R.addMethod("equal", Yi);
R.addMethod("equals", Yi);
R.addMethod("eq", Yi);
function fl(e, t) {
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
Y(fl, "assertEql");
R.addMethod("eql", fl);
R.addMethod("eqls", fl);
function Xi(e, t) {
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
R.addMethod("above", Xi);
R.addMethod("gt", Xi);
R.addMethod("greaterThan", Xi);
function Zi(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, f = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
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
R.addMethod("least", Zi);
R.addMethod("gte", Zi);
R.addMethod("greaterThanOrEqual", Zi);
function Ji(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, f = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
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
R.addMethod("below", Ji);
R.addMethod("lt", Ji);
R.addMethod("lessThan", Ji);
function Qi(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = ke(r).toLowerCase(), u = ke(e).toLowerCase(), c, f = !0;
  if (n && s !== "map" && s !== "set" && new R(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
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
R.addMethod("most", Qi);
R.addMethod("lte", Qi);
R.addMethod("lessThanOrEqual", Qi);
R.addMethod("within", function(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "doLength"), a = $(this, "message"), o = a ? a + ": " : "", s = $(this, "ssfi"), u = ke(n).toLowerCase(), c = ke(e).toLowerCase(), f = ke(t).toLowerCase(), l, d = !0, h = c === "date" && f === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (i && u !== "map" && u !== "set" && new R(n, a, s, !0).to.have.property("length"), !i && u === "date" && (c !== "date" || f !== "date"))
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
function hl(e, t) {
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
Y(hl, "assertInstanceOf");
R.addMethod("instanceof", hl);
R.addMethod("instanceOf", hl);
function dl(e, t, r) {
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
  var c = $(this, "deep"), f = $(this, "negate"), l = n ? Jc(o, e) : null, d = n ? l.value : o[e], h = c ? $(this, "eql") : (b, y) => b === y, m = "";
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
Y(dl, "assertProperty");
R.addMethod("property", dl);
function pl(e, t, r) {
  $(this, "own", !0), dl.apply(this, arguments);
}
Y(pl, "assertOwnProperty");
R.addMethod("ownProperty", pl);
R.addMethod("haveOwnProperty", pl);
function ml(e, t, r) {
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
Y(ml, "assertOwnPropertyDescriptor");
R.addMethod("ownPropertyDescriptor", ml);
R.addMethod("haveOwnPropertyDescriptor", ml);
function gl() {
  $(this, "doLength", !0);
}
Y(gl, "assertLengthChain");
function vl(e, t) {
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
Y(vl, "assertLength");
R.addChainableMethod("length", vl, gl);
R.addChainableMethod("lengthOf", vl, gl);
function yl(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object");
  this.assert(
    e.exec(r),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
Y(yl, "assertMatch");
R.addMethod("match", yl);
R.addMethod("matches", yl);
R.addMethod("string", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new R(r, n, i, !0).is.a("string"), this.assert(
    ~r.indexOf(e),
    "expected #{this} to contain " + Re(e),
    "expected #{this} to not contain " + Re(e)
  );
});
function bl(e) {
  var t = $(this, "object"), r = ke(t), n = ke(e), i = $(this, "ssfi"), a = $(this, "deep"), o, s = "", u, c = !0, f = $(this, "message");
  f = f ? f + ": " : "";
  var l = f + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (r === "Map" || r === "Set")
    s = a ? "deeply " : "", u = [], t.forEach(function(_, x) {
      u.push(x);
    }), n !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (u = sl(t), n) {
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
    p.slice(0).sort(Ti),
    u.sort(Ti),
    !0
  );
}
Y(bl, "assertKeys");
R.addMethod("keys", bl);
R.addMethod("key", bl);
function ea(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "ssfi"), a = $(this, "message"), o = $(this, "negate") || !1;
  new R(n, a, i, !0).is.a("function"), (Ai(e) || typeof e == "string") && (t = e, e = null);
  let s, u = !1;
  try {
    n();
  } catch (_) {
    u = !0, s = _;
  }
  var c = e === void 0 && t === void 0, f = !!(e && t), l = !1, d = !1;
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
      m === o && (f && o ? l = !0 : this.assert(
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
    p === o && (f && o ? l = !0 : this.assert(
      o,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (s ? " but #{act} was thrown" : ""),
      e instanceof Error ? e.toString() : e && mt.getConstructorName(e),
      s instanceof Error ? s.toString() : s && mt.getConstructorName(s)
    ));
  }
  if (s && t !== void 0 && t !== null) {
    var b = "including";
    Ai(t) && (b = "matching");
    var y = mt.compatibleMessage(
      s,
      t
    );
    y === o && (f && o ? d = !0 : this.assert(
      o,
      "expected #{this} to throw error " + b + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + b + " #{exp}",
      t,
      mt.getMessage(s)
    ));
  }
  l && d && this.assert(
    o,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (s ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && mt.getConstructorName(e),
    s instanceof Error ? s.toString() : s && mt.getConstructorName(s)
  ), $(this, "object", s);
}
Y(ea, "assertThrows");
R.addMethod("throw", ea);
R.addMethod("throws", ea);
R.addMethod("Throw", ea);
function _l(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "itself"), i = typeof r == "function" && !n ? r.prototype[e] : r[e];
  this.assert(
    typeof i == "function",
    "expected #{this} to respond to " + Re(e),
    "expected #{this} to not respond to " + Re(e)
  );
}
Y(_l, "respondTo");
R.addMethod("respondTo", _l);
R.addMethod("respondsTo", _l);
R.addProperty("itself", function() {
  $(this, "itself", !0);
});
function wl(e, t) {
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
Y(wl, "satisfy");
R.addMethod("satisfy", wl);
R.addMethod("satisfies", wl);
function xl(e, t, r) {
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
Y(xl, "closeTo");
R.addMethod("closeTo", xl);
R.addMethod("approximately", xl);
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
R.addMethod("members", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new R(r, n, i, !0).to.be.iterable, new R(e, n, i, !0).to.be.iterable;
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
function Hv(e, t) {
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
Y(Hv, "oneOf");
R.addMethod("oneOf", Hv);
function El(e, t, r) {
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
Y(El, "assertChanges");
R.addMethod("change", El);
R.addMethod("changes", El);
function Sl(e, t, r) {
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
Y(Sl, "assertIncreases");
R.addMethod("increase", Sl);
R.addMethod("increases", Sl);
function Ol(e, t, r) {
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
Y(Ol, "assertDecreases");
R.addMethod("decrease", Ol);
R.addMethod("decreases", Ol);
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
R.addMethod("by", Kv);
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
function Ri(e, t) {
  return e === t ? !0 : typeof t != typeof e ? !1 : typeof e != "object" || e === null ? e === t : t ? Array.isArray(e) ? Array.isArray(t) ? e.every(function(r) {
    return t.some(function(n) {
      return Ri(r, n);
    });
  }) : !1 : e instanceof Date ? t instanceof Date ? e.getTime() === t.getTime() : !1 : Object.keys(e).every(function(r) {
    var n = e[r], i = t[r];
    return typeof n == "object" && n !== null && i !== null ? Ri(n, i) : typeof n == "function" ? n(i) : i === n;
  }) : !1;
}
Y(Ri, "compareSubset");
R.addMethod("containSubset", function(e) {
  const t = Oe(this, "object"), r = st.showDiff;
  this.assert(
    Ri(e, t),
    "expected #{act} to contain subset #{exp}",
    "expected #{act} to not contain subset #{exp}",
    e,
    t,
    r
  );
});
function Ii(e, t) {
  return new R(e, t);
}
Y(Ii, "expect");
Ii.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "expect.fail()", new Ie(
    r,
    {
      actual: e,
      expected: t,
      operator: n
    },
    Ii.fail
  );
};
var Yv = {};
Gc(Yv, {
  Should: () => A2,
  should: () => C2
});
function Tl() {
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
Y(Tl, "loadShould");
var C2 = Tl, A2 = Tl;
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
var R2 = [
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
for (const [e, t] of R2)
  A[t] = A[e];
var dh = [];
function Xv(e) {
  const t = {
    use: Xv,
    AssertionError: Ie,
    util: xi,
    config: st,
    expect: Ii,
    assert: A,
    Assertion: R,
    ...Yv
  };
  return ~dh.indexOf(e) || (e(t, xi), dh.push(e)), t;
}
Y(Xv, "use");
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
function rn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ii = { exports: {} }, Da, ph;
function I2() {
  if (ph) return Da;
  ph = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  Da = function(f, l) {
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
  return Da;
}
var Fa, mh;
function k2() {
  if (mh) return Fa;
  mh = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = I2(), n.destroy = f, Object.keys(t).forEach((l) => {
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
        const _ = b, x = Number(/* @__PURE__ */ new Date()), O = x - (d || x);
        _.diff = O, _.prev = d, _.curr = x, d = x, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
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
      const d = (typeof l == "string" ? l : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
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
  return Fa = e, Fa;
}
var gh;
function N2() {
  return gh || (gh = 1, function(e, t) {
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
    e.exports = k2()(t);
    const { formatters: s } = e.exports;
    s.j = function(u) {
      try {
        return JSON.stringify(u);
      } catch (c) {
        return "[UnexpectedJSONParseError]: " + c.message;
      }
    };
  }(ii, ii.exports)), ii.exports;
}
var P2 = N2();
const VO = /* @__PURE__ */ rn(P2);
var ai = { exports: {} }, La, vh;
function M2() {
  if (vh) return La;
  vh = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  La = function(f, l) {
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
  return La;
}
var Ba, yh;
function D2() {
  if (yh) return Ba;
  yh = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = M2(), n.destroy = f, Object.keys(t).forEach((l) => {
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
        const _ = b, x = Number(/* @__PURE__ */ new Date()), O = x - (d || x);
        _.diff = O, _.prev = d, _.curr = x, d = x, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
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
      const d = (typeof l == "string" ? l : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
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
  return Ba = e, Ba;
}
var bh;
function F2() {
  return bh || (bh = 1, function(e, t) {
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
    e.exports = D2()(t);
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
var L2 = F2();
const HO = /* @__PURE__ */ rn(L2);
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e);
}
var rt = Uint8Array, gt = Uint16Array, Cl = Int32Array, ta = new rt([
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
]), fc = new rt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Zv = function(e, t) {
  for (var r = new gt(31), n = 0; n < 31; ++n)
    r[n] = t += 1 << e[n - 1];
  for (var i = new Cl(r[30]), n = 1; n < 30; ++n)
    for (var a = r[n]; a < r[n + 1]; ++a)
      i[a] = a - r[n] << 5 | n;
  return { b: r, r: i };
}, Jv = Zv(ta, 2), Qv = Jv.b, hc = Jv.r;
Qv[28] = 258, hc[258] = 28;
var ey = Zv(ra, 0), B2 = ey.b, _h = ey.r, dc = new gt(32768);
for (var Me = 0; Me < 32768; ++Me) {
  var sr = (Me & 43690) >> 1 | (Me & 21845) << 1;
  sr = (sr & 52428) >> 2 | (sr & 13107) << 2, sr = (sr & 61680) >> 4 | (sr & 3855) << 4, dc[Me] = ((sr & 65280) >> 8 | (sr & 255) << 8) >> 1;
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
        for (var c = i << 4 | e[i], f = t - e[i], l = o[e[i] - 1]++ << f, d = l | (1 << f) - 1; l <= d; ++l)
          s[dc[l] >> u] = c;
  } else
    for (s = new gt(n), i = 0; i < n; ++i)
      e[i] && (s[i] = dc[o[e[i] - 1]++] >> 15 - e[i]);
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
var Nn = new rt(32);
for (var Me = 0; Me < 32; ++Me)
  Nn[Me] = 5;
var j2 = /* @__PURE__ */ Ut(mr, 9, 0), z2 = /* @__PURE__ */ Ut(mr, 9, 1), q2 = /* @__PURE__ */ Ut(Nn, 5, 0), U2 = /* @__PURE__ */ Ut(Nn, 5, 1), ja = function(e) {
  for (var t = e[0], r = 1; r < e.length; ++r)
    e[r] > t && (t = e[r]);
  return t;
}, St = function(e, t, r) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8) >> (t & 7) & r;
}, za = function(e, t) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (t & 7);
}, Al = function(e) {
  return (e + 7) / 8 | 0;
}, ty = function(e, t, r) {
  return (r == null || r > e.length) && (r = e.length), new rt(e.subarray(t, r));
}, $2 = [
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
  var n = new Error(t || $2[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, At), !r)
    throw n;
  return n;
}, W2 = function(e, t, r, n) {
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
      f = St(e, l, 1);
      var _ = St(e, l + 1, 3);
      if (l += 3, _)
        if (_ == 1)
          h = z2, m = U2, p = 9, b = 5;
        else if (_ == 2) {
          var B = St(e, l, 31) + 257, I = St(e, l + 10, 15) + 4, S = B + St(e, l + 5, 31) + 1;
          l += 14;
          for (var w = new rt(S), k = new rt(19), q = 0; q < I; ++q)
            k[fc[q]] = St(e, l + q * 3, 7);
          l += I * 3;
          for (var E = ja(k), L = (1 << E) - 1, v = Ut(k, E, 1), q = 0; q < S; ) {
            var z = v[St(e, l, L)];
            l += z & 15;
            var x = z >> 4;
            if (x < 16)
              w[q++] = x;
            else {
              var ie = 0, D = 0;
              for (x == 16 ? (D = 3 + St(e, l, 3), l += 2, ie = w[q - 1]) : x == 17 ? (D = 3 + St(e, l, 7), l += 3) : x == 18 && (D = 11 + St(e, l, 127), l += 7); D--; )
                w[q++] = ie;
            }
          }
          var Q = w.subarray(0, B), F = w.subarray(B);
          p = ja(Q), b = ja(F), h = Ut(Q, p, 1), m = Ut(F, b, 1);
        } else
          At(1);
      else {
        var x = Al(l) + 4, O = e[x - 4] | e[x - 3] << 8, C = x + O;
        if (C > i) {
          u && At(0);
          break;
        }
        s && c(d + O), r.set(e.subarray(x, C), d), t.b = d += O, t.p = l = C * 8, t.f = f;
        continue;
      }
      if (l > y) {
        u && At(0);
        break;
      }
    }
    s && c(d + 131072);
    for (var ee = (1 << p) - 1, P = (1 << b) - 1, M = l; ; M = l) {
      var ie = h[za(e, l) & ee], K = ie >> 4;
      if (l += ie & 15, l > y) {
        u && At(0);
        break;
      }
      if (ie || At(2), K < 256)
        r[d++] = K;
      else if (K == 256) {
        M = l, h = null;
        break;
      } else {
        var te = K - 254;
        if (K > 264) {
          var q = K - 257, H = ta[q];
          te = St(e, l, (1 << H) - 1) + Qv[q], l += H;
        }
        var pe = m[za(e, l) & P], Ee = pe >> 4;
        pe || At(3), l += pe & 15;
        var F = B2[Ee];
        if (Ee > 3) {
          var H = ra[Ee];
          F += za(e, l) & (1 << H) - 1, l += H;
        }
        if (l > y) {
          u && At(0);
          break;
        }
        s && c(d + 131072);
        var ce = d + te;
        if (d < F) {
          var fe = a - F, ve = Math.min(F, ce);
          for (fe + d < 0 && At(3); d < ve; ++d)
            r[d] = n[fe + d];
        }
        for (; d < ce; ++d)
          r[d] = r[d - F];
      }
    }
    t.l = h, t.p = M, t.b = d, t.f = f, h && (f = 1, t.m = p, t.d = m, t.n = b);
  } while (!f);
  return d != r.length && o ? ty(r, 0, d) : r.subarray(0, d);
}, Jt = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8;
}, ln = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8, e[n + 2] |= r >> 16;
}, qa = function(e, t) {
  for (var r = [], n = 0; n < e.length; ++n)
    e[n] && r.push({ s: n, f: e[n] });
  var i = r.length, a = r.slice();
  if (!i)
    return { t: ny, l: 0 };
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
  var h = new gt(d + 1), m = pc(r[f - 1], h, 0);
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
      var x = a[n].s;
      h[x] < t ? p -= 1 << t - h[x]++ - 1 : ++n;
    }
    for (; n >= 0 && p; --n) {
      var O = a[n].s;
      h[O] == t && (--h[O], ++p);
    }
    m = t;
  }
  return { t: new rt(h), l: m };
}, pc = function(e, t, r) {
  return e.s == -1 ? Math.max(pc(e.l, t, r + 1), pc(e.r, t, r + 1)) : t[e.s] = r;
}, wh = function(e) {
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
}, fn = function(e, t) {
  for (var r = 0, n = 0; n < t.length; ++n)
    r += e[n] * t[n];
  return r;
}, ry = function(e, t, r) {
  var n = r.length, i = Al(t + 2);
  e[i] = n & 255, e[i + 1] = n >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
  for (var a = 0; a < n; ++a)
    e[i + a + 4] = r[a];
  return (i + 4 + n) * 8;
}, xh = function(e, t, r, n, i, a, o, s, u, c, f) {
  Jt(t, f++, r), ++i[256];
  for (var l = qa(i, 15), d = l.t, h = l.l, m = qa(a, 15), p = m.t, b = m.l, y = wh(d), _ = y.c, x = y.n, O = wh(p), C = O.c, B = O.n, I = new gt(19), S = 0; S < _.length; ++S)
    ++I[_[S] & 31];
  for (var S = 0; S < C.length; ++S)
    ++I[C[S] & 31];
  for (var w = qa(I, 7), k = w.t, q = w.l, E = 19; E > 4 && !k[fc[E - 1]]; --E)
    ;
  var L = c + 5 << 3, v = fn(i, mr) + fn(a, Nn) + o, z = fn(i, d) + fn(a, p) + o + 14 + 3 * E + fn(I, k) + 2 * I[16] + 3 * I[17] + 7 * I[18];
  if (u >= 0 && L <= v && L <= z)
    return ry(t, f, e.subarray(u, u + c));
  var ie, D, Q, F;
  if (Jt(t, f, 1 + (z < v)), f += 2, z < v) {
    ie = Ut(d, h, 0), D = d, Q = Ut(p, b, 0), F = p;
    var ee = Ut(k, q, 0);
    Jt(t, f, x - 257), Jt(t, f + 5, B - 1), Jt(t, f + 10, E - 4), f += 14;
    for (var S = 0; S < E; ++S)
      Jt(t, f + 3 * S, k[fc[S]]);
    f += 3 * E;
    for (var P = [_, C], M = 0; M < 2; ++M)
      for (var K = P[M], S = 0; S < K.length; ++S) {
        var te = K[S] & 31;
        Jt(t, f, ee[te]), f += k[te], te > 15 && (Jt(t, f, K[S] >> 5 & 127), f += K[S] >> 12);
      }
  } else
    ie = j2, D = mr, Q = q2, F = Nn;
  for (var S = 0; S < s; ++S) {
    var H = n[S];
    if (H > 255) {
      var te = H >> 18 & 31;
      ln(t, f, ie[te + 257]), f += D[te + 257], te > 7 && (Jt(t, f, H >> 23 & 31), f += ta[te]);
      var pe = H & 31;
      ln(t, f, Q[pe]), f += F[pe], pe > 3 && (ln(t, f, H >> 5 & 8191), f += ra[pe]);
    } else
      ln(t, f, ie[H]), f += D[H];
  }
  return ln(t, f, ie[256]), f + D[256];
}, G2 = /* @__PURE__ */ new Cl([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), ny = /* @__PURE__ */ new rt(0), V2 = function(e, t, r, n, i, a) {
  var o = a.z || e.length, s = new rt(n + o + 5 * (1 + Math.ceil(o / 7e3)) + i), u = s.subarray(n, s.length - i), c = a.l, f = (a.r || 0) & 7;
  if (t) {
    f && (u[0] = a.r >> 3);
    for (var l = G2[t - 1], d = l >> 13, h = l & 8191, m = (1 << r) - 1, p = a.p || new gt(32768), b = a.h || new gt(m + 1), y = Math.ceil(r / 3), _ = 2 * y, x = function(g) {
      return (e[g] ^ e[g + 1] << y ^ e[g + 2] << _) & m;
    }, O = new Cl(25e3), C = new gt(288), B = new gt(32), I = 0, S = 0, w = a.i || 0, k = 0, q = a.w || 0, E = 0; w + 2 < o; ++w) {
      var L = x(w), v = w & 32767, z = b[L];
      if (p[v] = z, b[L] = v, q <= w) {
        var ie = o - w;
        if ((I > 7e3 || k > 24576) && (ie > 423 || !c)) {
          f = xh(e, u, 0, O, C, B, S, k, E, w - E, f), k = I = S = 0, E = w;
          for (var D = 0; D < 286; ++D)
            C[D] = 0;
          for (var D = 0; D < 30; ++D)
            B[D] = 0;
        }
        var Q = 2, F = 0, ee = h, P = v - z & 32767;
        if (ie > 2 && L == x(w - P))
          for (var M = Math.min(d, ie) - 1, K = Math.min(32767, w), te = Math.min(258, ie); P <= K && --ee && v != z; ) {
            if (e[w + Q] == e[w + Q - P]) {
              for (var H = 0; H < te && e[w + H] == e[w + H - P]; ++H)
                ;
              if (H > Q) {
                if (Q = H, F = P, H > M)
                  break;
                for (var pe = Math.min(P, H - 2), Ee = 0, D = 0; D < pe; ++D) {
                  var ce = w - P + D & 32767, fe = p[ce], ve = ce - fe & 32767;
                  ve > Ee && (Ee = ve, z = ce);
                }
              }
            }
            v = z, z = p[v], P += v - z & 32767;
          }
        if (F) {
          O[k++] = 268435456 | hc[Q] << 18 | _h[F];
          var le = hc[Q] & 31, we = _h[F] & 31;
          S += ta[le] + ra[we], ++C[257 + le], ++B[we], q = w + Q, ++I;
        } else
          O[k++] = e[w], ++C[e[w]];
      }
    }
    for (w = Math.max(w, q); w < o; ++w)
      O[k++] = e[w], ++C[e[w]];
    f = xh(e, u, c, O, C, B, S, k, E, w - E, f), c || (a.r = f & 7 | u[f / 8 | 0] << 3, f -= 7, a.h = b, a.p = p, a.i = w, a.w = q);
  } else {
    for (var w = a.w || 0; w < o + c; w += 65535) {
      var xe = w + 65535;
      xe >= o && (u[f / 8 | 0] = c, xe = o), f = ry(u, f + 1, e.subarray(w, xe));
    }
    a.i = o;
  }
  return ty(s, 0, n + Al(f) + i);
}, iy = function() {
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
}, H2 = function(e, t, r, n, i) {
  if (!i && (i = { l: 1 }, t.dictionary)) {
    var a = t.dictionary.subarray(-32768), o = new rt(a.length + e.length);
    o.set(a), o.set(e, a.length), e = o, i.w = a.length;
  }
  return V2(e, t.level == null ? 6 : t.level, t.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, n, i);
}, ay = function(e, t, r) {
  for (; r; ++t)
    e[t] = r, r >>>= 8;
}, K2 = function(e, t) {
  var r = t.level, n = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = n << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
    var i = iy();
    i.p(t.dictionary), ay(e, 2, i.d());
  }
}, Y2 = function(e, t) {
  return ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) && At(6, "invalid zlib data"), (e[1] >> 5 & 1) == 1 && At(6, "invalid zlib data: " + (e[1] & 32 ? "need" : "unexpected") + " dictionary"), (e[1] >> 3 & 4) + 2;
};
function KO(e, t) {
  t || (t = {});
  var r = iy();
  r.p(e);
  var n = H2(e, t, t.dictionary ? 6 : 2, 4);
  return K2(n, t), ay(n, n.length - 4, r.d()), n;
}
function YO(e, t) {
  return W2(e.subarray(Y2(e), -4), { i: 2 }, t, t);
}
var X2 = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Z2 = 0;
try {
  X2.decode(ny, { stream: !0 }), Z2 = 1;
} catch {
}
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries: sy,
  setPrototypeOf: Eh,
  isFrozen: J2,
  getPrototypeOf: Q2,
  getOwnPropertyDescriptor: ex
} = Object;
let {
  freeze: ot,
  seal: wt,
  create: oy
} = Object, {
  apply: mc,
  construct: gc
} = typeof Reflect < "u" && Reflect;
ot || (ot = function(t) {
  return t;
});
wt || (wt = function(t) {
  return t;
});
mc || (mc = function(t, r, n) {
  return t.apply(r, n);
});
gc || (gc = function(t, r) {
  return new t(...r);
});
const si = ut(Array.prototype.forEach), tx = ut(Array.prototype.lastIndexOf), Sh = ut(Array.prototype.pop), hn = ut(Array.prototype.push), rx = ut(Array.prototype.splice), pi = ut(String.prototype.toLowerCase), Ua = ut(String.prototype.toString), Oh = ut(String.prototype.match), dn = ut(String.prototype.replace), nx = ut(String.prototype.indexOf), ix = ut(String.prototype.trim), Ct = ut(Object.prototype.hasOwnProperty), at = ut(RegExp.prototype.test), pn = ax(TypeError);
function ut(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return mc(e, t, n);
  };
}
function ax(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return gc(e, r);
  };
}
function Te(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : pi;
  Eh && Eh(e, null);
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const a = r(i);
      a !== i && (J2(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function sx(e) {
  for (let t = 0; t < e.length; t++)
    Ct(e, t) || (e[t] = null);
  return e;
}
function yr(e) {
  const t = oy(null);
  for (const [r, n] of sy(e))
    Ct(e, r) && (Array.isArray(n) ? t[r] = sx(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = yr(n) : t[r] = n);
  return t;
}
function mn(e, t) {
  for (; e !== null; ) {
    const n = ex(e, t);
    if (n) {
      if (n.get)
        return ut(n.get);
      if (typeof n.value == "function")
        return ut(n.value);
    }
    e = Q2(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Th = ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), $a = ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Wa = ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ox = ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ga = ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ux = ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ch = ot(["#text"]), Ah = ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Va = ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Rh = ot(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), oi = ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), cx = wt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), lx = wt(/<%[\w\W]*|[\w\W]*%>/gm), fx = wt(/\$\{[\w\W]*/gm), hx = wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), dx = wt(/^aria-[\-\w]+$/), uy = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), px = wt(/^(?:\w+script|data):/i), mx = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), cy = wt(/^html$/i), gx = wt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ih = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: dx,
  ATTR_WHITESPACE: mx,
  CUSTOM_ELEMENT: gx,
  DATA_ATTR: hx,
  DOCTYPE_NAME: cy,
  ERB_EXPR: lx,
  IS_ALLOWED_URI: uy,
  IS_SCRIPT_OR_DATA: px,
  MUSTACHE_EXPR: cx,
  TMPLIT_EXPR: fx
});
const gn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, vx = function() {
  return typeof window > "u" ? null : window;
}, yx = function(t, r) {
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
}, kh = function() {
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
function ly() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vx();
  const t = (be) => ly(be);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== gn.document || !e.Element)
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
  } = e, m = u.prototype, p = mn(m, "cloneNode"), b = mn(m, "remove"), y = mn(m, "nextSibling"), _ = mn(m, "childNodes"), x = mn(m, "parentNode");
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
  let q = kh();
  t.isSupported = typeof sy == "function" && typeof x == "function" && B && B.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: E,
    ERB_EXPR: L,
    TMPLIT_EXPR: v,
    DATA_ATTR: z,
    ARIA_ATTR: ie,
    IS_SCRIPT_OR_DATA: D,
    ATTR_WHITESPACE: Q,
    CUSTOM_ELEMENT: F
  } = Ih;
  let {
    IS_ALLOWED_URI: ee
  } = Ih, P = null;
  const M = Te({}, [...Th, ...$a, ...Wa, ...Ga, ...Ch]);
  let K = null;
  const te = Te({}, [...Ah, ...Va, ...Rh, ...oi]);
  let H = Object.seal(oy(null, {
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
  })), pe = null, Ee = null, ce = !0, fe = !0, ve = !1, le = !0, we = !1, xe = !0, g = !1, X = !1, W = !1, N = !1, T = !1, j = !1, re = !0, ne = !1;
  const G = "user-content-";
  let V = !0, J = !1, Z = {}, ae = null;
  const de = Te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _e = null;
  const Fe = Te({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ve = null;
  const Ne = Te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Le = "http://www.w3.org/1998/Math/MathML", Ce = "http://www.w3.org/2000/svg", He = "http://www.w3.org/1999/xhtml";
  let Ft = He, pt = !1, Lr = null;
  const xa = Te({}, [Le, Ce, He], Ua);
  let Br = Te({}, ["mi", "mo", "mn", "ms", "mtext"]), jr = Te({}, ["annotation-xml"]);
  const ei = Te({}, ["title", "style", "font", "a", "script"]);
  let xt = null;
  const zr = ["application/xhtml+xml", "text/html"], p0 = "text/html";
  let Ke = null, qr = null;
  const m0 = r.createElement("form"), sf = function(U) {
    return U instanceof RegExp || U instanceof Function;
  }, Ea = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(qr && qr === U)) {
      if ((!U || typeof U != "object") && (U = {}), U = yr(U), xt = // eslint-disable-next-line unicorn/prefer-includes
      zr.indexOf(U.PARSER_MEDIA_TYPE) === -1 ? p0 : U.PARSER_MEDIA_TYPE, Ke = xt === "application/xhtml+xml" ? Ua : pi, P = Ct(U, "ALLOWED_TAGS") ? Te({}, U.ALLOWED_TAGS, Ke) : M, K = Ct(U, "ALLOWED_ATTR") ? Te({}, U.ALLOWED_ATTR, Ke) : te, Lr = Ct(U, "ALLOWED_NAMESPACES") ? Te({}, U.ALLOWED_NAMESPACES, Ua) : xa, Ve = Ct(U, "ADD_URI_SAFE_ATTR") ? Te(yr(Ne), U.ADD_URI_SAFE_ATTR, Ke) : Ne, _e = Ct(U, "ADD_DATA_URI_TAGS") ? Te(yr(Fe), U.ADD_DATA_URI_TAGS, Ke) : Fe, ae = Ct(U, "FORBID_CONTENTS") ? Te({}, U.FORBID_CONTENTS, Ke) : de, pe = Ct(U, "FORBID_TAGS") ? Te({}, U.FORBID_TAGS, Ke) : {}, Ee = Ct(U, "FORBID_ATTR") ? Te({}, U.FORBID_ATTR, Ke) : {}, Z = Ct(U, "USE_PROFILES") ? U.USE_PROFILES : !1, ce = U.ALLOW_ARIA_ATTR !== !1, fe = U.ALLOW_DATA_ATTR !== !1, ve = U.ALLOW_UNKNOWN_PROTOCOLS || !1, le = U.ALLOW_SELF_CLOSE_IN_ATTR !== !1, we = U.SAFE_FOR_TEMPLATES || !1, xe = U.SAFE_FOR_XML !== !1, g = U.WHOLE_DOCUMENT || !1, N = U.RETURN_DOM || !1, T = U.RETURN_DOM_FRAGMENT || !1, j = U.RETURN_TRUSTED_TYPE || !1, W = U.FORCE_BODY || !1, re = U.SANITIZE_DOM !== !1, ne = U.SANITIZE_NAMED_PROPS || !1, V = U.KEEP_CONTENT !== !1, J = U.IN_PLACE || !1, ee = U.ALLOWED_URI_REGEXP || uy, Ft = U.NAMESPACE || He, Br = U.MATHML_TEXT_INTEGRATION_POINTS || Br, jr = U.HTML_INTEGRATION_POINTS || jr, H = U.CUSTOM_ELEMENT_HANDLING || {}, U.CUSTOM_ELEMENT_HANDLING && sf(U.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = U.CUSTOM_ELEMENT_HANDLING.tagNameCheck), U.CUSTOM_ELEMENT_HANDLING && sf(U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = U.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), U.CUSTOM_ELEMENT_HANDLING && typeof U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = U.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), we && (fe = !1), T && (N = !0), Z && (P = Te({}, Ch), K = [], Z.html === !0 && (Te(P, Th), Te(K, Ah)), Z.svg === !0 && (Te(P, $a), Te(K, Va), Te(K, oi)), Z.svgFilters === !0 && (Te(P, Wa), Te(K, Va), Te(K, oi)), Z.mathMl === !0 && (Te(P, Ga), Te(K, Rh), Te(K, oi))), U.ADD_TAGS && (P === M && (P = yr(P)), Te(P, U.ADD_TAGS, Ke)), U.ADD_ATTR && (K === te && (K = yr(K)), Te(K, U.ADD_ATTR, Ke)), U.ADD_URI_SAFE_ATTR && Te(Ve, U.ADD_URI_SAFE_ATTR, Ke), U.FORBID_CONTENTS && (ae === de && (ae = yr(ae)), Te(ae, U.FORBID_CONTENTS, Ke)), V && (P["#text"] = !0), g && Te(P, ["html", "head", "body"]), P.table && (Te(P, ["tbody"]), delete pe.tbody), U.TRUSTED_TYPES_POLICY) {
        if (typeof U.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof U.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        O = U.TRUSTED_TYPES_POLICY, C = O.createHTML("");
      } else
        O === void 0 && (O = yx(h, i)), O !== null && typeof C == "string" && (C = O.createHTML(""));
      ot && ot(U), qr = U;
    }
  }, of = Te({}, [...$a, ...Wa, ...ox]), uf = Te({}, [...Ga, ...ux]), g0 = function(U) {
    let ue = x(U);
    (!ue || !ue.tagName) && (ue = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const me = pi(U.tagName), Be = pi(ue.tagName);
    return Lr[U.namespaceURI] ? U.namespaceURI === Ce ? ue.namespaceURI === He ? me === "svg" : ue.namespaceURI === Le ? me === "svg" && (Be === "annotation-xml" || Br[Be]) : !!of[me] : U.namespaceURI === Le ? ue.namespaceURI === He ? me === "math" : ue.namespaceURI === Ce ? me === "math" && jr[Be] : !!uf[me] : U.namespaceURI === He ? ue.namespaceURI === Ce && !jr[Be] || ue.namespaceURI === Le && !Br[Be] ? !1 : !uf[me] && (ei[me] || !of[me]) : !!(xt === "application/xhtml+xml" && Lr[U.namespaceURI]) : !1;
  }, Lt = function(U) {
    hn(t.removed, {
      element: U
    });
    try {
      x(U).removeChild(U);
    } catch {
      b(U);
    }
  }, ti = function(U, ue) {
    try {
      hn(t.removed, {
        attribute: ue.getAttributeNode(U),
        from: ue
      });
    } catch {
      hn(t.removed, {
        attribute: null,
        from: ue
      });
    }
    if (ue.removeAttribute(U), U === "is")
      if (N || T)
        try {
          Lt(ue);
        } catch {
        }
      else
        try {
          ue.setAttribute(U, "");
        } catch {
        }
  }, cf = function(U) {
    let ue = null, me = null;
    if (W)
      U = "<remove></remove>" + U;
    else {
      const Je = Oh(U, /^[\r\n\t ]+/);
      me = Je && Je[0];
    }
    xt === "application/xhtml+xml" && Ft === He && (U = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + U + "</body></html>");
    const Be = O ? O.createHTML(U) : U;
    if (Ft === He)
      try {
        ue = new d().parseFromString(Be, xt);
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
  }, lf = function(U) {
    return I.call(
      U.ownerDocument || U,
      U,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Sa = function(U) {
    return U instanceof l && (typeof U.nodeName != "string" || typeof U.textContent != "string" || typeof U.removeChild != "function" || !(U.attributes instanceof f) || typeof U.removeAttribute != "function" || typeof U.setAttribute != "function" || typeof U.namespaceURI != "string" || typeof U.insertBefore != "function" || typeof U.hasChildNodes != "function");
  }, ff = function(U) {
    return typeof s == "function" && U instanceof s;
  };
  function Xt(be, U, ue) {
    si(be, (me) => {
      me.call(t, U, ue, qr);
    });
  }
  const hf = function(U) {
    let ue = null;
    if (Xt(q.beforeSanitizeElements, U, null), Sa(U))
      return Lt(U), !0;
    const me = Ke(U.nodeName);
    if (Xt(q.uponSanitizeElement, U, {
      tagName: me,
      allowedTags: P
    }), U.hasChildNodes() && !ff(U.firstElementChild) && at(/<[/\w!]/g, U.innerHTML) && at(/<[/\w!]/g, U.textContent) || U.nodeType === gn.progressingInstruction || xe && U.nodeType === gn.comment && at(/<[/\w]/g, U.data))
      return Lt(U), !0;
    if (!P[me] || pe[me]) {
      if (!pe[me] && pf(me) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, me) || H.tagNameCheck instanceof Function && H.tagNameCheck(me)))
        return !1;
      if (V && !ae[me]) {
        const Be = x(U) || U.parentNode, tt = _(U) || U.childNodes;
        if (tt && Be) {
          const Je = tt.length;
          for (let ft = Je - 1; ft >= 0; --ft) {
            const Bt = p(tt[ft], !0);
            Bt.__removalCount = (U.__removalCount || 0) + 1, Be.insertBefore(Bt, y(U));
          }
        }
      }
      return Lt(U), !0;
    }
    return U instanceof u && !g0(U) || (me === "noscript" || me === "noembed" || me === "noframes") && at(/<\/no(script|embed|frames)/i, U.innerHTML) ? (Lt(U), !0) : (we && U.nodeType === gn.text && (ue = U.textContent, si([E, L, v], (Be) => {
      ue = dn(ue, Be, " ");
    }), U.textContent !== ue && (hn(t.removed, {
      element: U.cloneNode()
    }), U.textContent = ue)), Xt(q.afterSanitizeElements, U, null), !1);
  }, df = function(U, ue, me) {
    if (re && (ue === "id" || ue === "name") && (me in r || me in m0))
      return !1;
    if (!(fe && !Ee[ue] && at(z, ue))) {
      if (!(ce && at(ie, ue))) {
        if (!K[ue] || Ee[ue]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(pf(U) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, U) || H.tagNameCheck instanceof Function && H.tagNameCheck(U)) && (H.attributeNameCheck instanceof RegExp && at(H.attributeNameCheck, ue) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(ue)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ue === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, me) || H.tagNameCheck instanceof Function && H.tagNameCheck(me)))
          ) return !1;
        } else if (!Ve[ue]) {
          if (!at(ee, dn(me, Q, ""))) {
            if (!((ue === "src" || ue === "xlink:href" || ue === "href") && U !== "script" && nx(me, "data:") === 0 && _e[U])) {
              if (!(ve && !at(D, dn(me, Q, "")))) {
                if (me)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, pf = function(U) {
    return U !== "annotation-xml" && Oh(U, F);
  }, mf = function(U) {
    Xt(q.beforeSanitizeAttributes, U, null);
    const {
      attributes: ue
    } = U;
    if (!ue || Sa(U))
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
        namespaceURI: ft,
        value: Bt
      } = tt, un = Ke(Je);
      let it = Je === "value" ? Bt : ix(Bt);
      if (me.attrName = un, me.attrValue = it, me.keepAttr = !0, me.forceKeepAttr = void 0, Xt(q.uponSanitizeAttribute, U, me), it = me.attrValue, ne && (un === "id" || un === "name") && (ti(Je, U), it = G + it), xe && at(/((--!?|])>)|<\/(style|title)/i, it)) {
        ti(Je, U);
        continue;
      }
      if (me.forceKeepAttr || (ti(Je, U), !me.keepAttr))
        continue;
      if (!le && at(/\/>/i, it)) {
        ti(Je, U);
        continue;
      }
      we && si([E, L, v], (vf) => {
        it = dn(it, vf, " ");
      });
      const gf = Ke(U.nodeName);
      if (df(gf, un, it)) {
        if (O && typeof h == "object" && typeof h.getAttributeType == "function" && !ft)
          switch (h.getAttributeType(gf, un)) {
            case "TrustedHTML": {
              it = O.createHTML(it);
              break;
            }
            case "TrustedScriptURL": {
              it = O.createScriptURL(it);
              break;
            }
          }
        try {
          ft ? U.setAttributeNS(ft, Je, it) : U.setAttribute(Je, it), Sa(U) ? Lt(U) : Sh(t.removed);
        } catch {
        }
      }
    }
    Xt(q.afterSanitizeAttributes, U, null);
  }, v0 = function be(U) {
    let ue = null;
    const me = lf(U);
    for (Xt(q.beforeSanitizeShadowDOM, U, null); ue = me.nextNode(); )
      Xt(q.uponSanitizeShadowNode, ue, null), hf(ue), mf(ue), ue.content instanceof a && be(ue.content);
    Xt(q.afterSanitizeShadowDOM, U, null);
  };
  return t.sanitize = function(be) {
    let U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ue = null, me = null, Be = null, tt = null;
    if (pt = !be, pt && (be = "<!-->"), typeof be != "string" && !ff(be))
      if (typeof be.toString == "function") {
        if (be = be.toString(), typeof be != "string")
          throw pn("dirty is not a string, aborting");
      } else
        throw pn("toString is not a function");
    if (!t.isSupported)
      return be;
    if (X || Ea(U), t.removed = [], typeof be == "string" && (J = !1), J) {
      if (be.nodeName) {
        const Bt = Ke(be.nodeName);
        if (!P[Bt] || pe[Bt])
          throw pn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (be instanceof s)
      ue = cf("<!---->"), me = ue.ownerDocument.importNode(be, !0), me.nodeType === gn.element && me.nodeName === "BODY" || me.nodeName === "HTML" ? ue = me : ue.appendChild(me);
    else {
      if (!N && !we && !g && // eslint-disable-next-line unicorn/prefer-includes
      be.indexOf("<") === -1)
        return O && j ? O.createHTML(be) : be;
      if (ue = cf(be), !ue)
        return N ? null : j ? C : "";
    }
    ue && W && Lt(ue.firstChild);
    const Je = lf(J ? be : ue);
    for (; Be = Je.nextNode(); )
      hf(Be), mf(Be), Be.content instanceof a && v0(Be.content);
    if (J)
      return be;
    if (N) {
      if (T)
        for (tt = S.call(ue.ownerDocument); ue.firstChild; )
          tt.appendChild(ue.firstChild);
      else
        tt = ue;
      return (K.shadowroot || K.shadowrootmode) && (tt = k.call(n, tt, !0)), tt;
    }
    let ft = g ? ue.outerHTML : ue.innerHTML;
    return g && P["!doctype"] && ue.ownerDocument && ue.ownerDocument.doctype && ue.ownerDocument.doctype.name && at(cy, ue.ownerDocument.doctype.name) && (ft = "<!DOCTYPE " + ue.ownerDocument.doctype.name + `>
` + ft), we && si([E, L, v], (Bt) => {
      ft = dn(ft, Bt, " ");
    }), O && j ? O.createHTML(ft) : ft;
  }, t.setConfig = function() {
    let be = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ea(be), X = !0;
  }, t.clearConfig = function() {
    qr = null, X = !1;
  }, t.isValidAttribute = function(be, U, ue) {
    qr || Ea({});
    const me = Ke(be), Be = Ke(U);
    return df(me, Be, ue);
  }, t.addHook = function(be, U) {
    typeof U == "function" && hn(q[be], U);
  }, t.removeHook = function(be, U) {
    if (U !== void 0) {
      const ue = tx(q[be], U);
      return ue === -1 ? void 0 : rx(q[be], ue, 1)[0];
    }
    return Sh(q[be]);
  }, t.removeHooks = function(be) {
    q[be] = [];
  }, t.removeAllHooks = function() {
    q = kh();
  }, t;
}
var bx = ly();
const XO = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: bx }, Symbol.toStringTag, { value: "Module" })), Gt = /* @__PURE__ */ Object.create(null);
Gt.open = "0";
Gt.close = "1";
Gt.ping = "2";
Gt.pong = "3";
Gt.message = "4";
Gt.upgrade = "5";
Gt.noop = "6";
const mi = /* @__PURE__ */ Object.create(null);
Object.keys(Gt).forEach((e) => {
  mi[Gt[e]] = e;
});
const vc = { type: "error", data: "parser error" }, fy = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", hy = typeof ArrayBuffer == "function", dy = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Rl = ({ type: e, data: t }, r, n) => fy && t instanceof Blob ? r ? n(t) : Nh(t, n) : hy && (t instanceof ArrayBuffer || dy(t)) ? r ? n(t) : Nh(new Blob([t]), n) : n(Gt[e] + (t || "")), Nh = (e, t) => {
  const r = new FileReader();
  return r.onload = function() {
    const n = r.result.split(",")[1];
    t("b" + (n || ""));
  }, r.readAsDataURL(e);
};
function Ph(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Ha;
function _x(e, t) {
  if (fy && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Ph).then(t);
  if (hy && (e.data instanceof ArrayBuffer || dy(e.data)))
    return t(Ph(e.data));
  Rl(e, !1, (r) => {
    Ha || (Ha = new TextEncoder()), t(Ha.encode(r));
  });
}
const Mh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Mh.length; e++)
  xn[Mh.charCodeAt(e)] = e;
const wx = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, a, o, s, u;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const c = new ArrayBuffer(t), f = new Uint8Array(c);
  for (n = 0; n < r; n += 4)
    a = xn[e.charCodeAt(n)], o = xn[e.charCodeAt(n + 1)], s = xn[e.charCodeAt(n + 2)], u = xn[e.charCodeAt(n + 3)], f[i++] = a << 2 | o >> 4, f[i++] = (o & 15) << 4 | s >> 2, f[i++] = (s & 3) << 6 | u & 63;
  return c;
}, xx = typeof ArrayBuffer == "function", Il = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: py(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: Ex(e.substring(1), t)
  } : mi[r] ? e.length > 1 ? {
    type: mi[r],
    data: e.substring(1)
  } : {
    type: mi[r]
  } : vc;
}, Ex = (e, t) => {
  if (xx) {
    const r = wx(e);
    return py(r, t);
  } else
    return { base64: !0, data: e };
}, py = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, my = "", Sx = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((a, o) => {
    Rl(a, !1, (s) => {
      n[o] = s, ++i === r && t(n.join(my));
    });
  });
}, Ox = (e, t) => {
  const r = e.split(my), n = [];
  for (let i = 0; i < r.length; i++) {
    const a = Il(r[i], t);
    if (n.push(a), a.type === "error")
      break;
  }
  return n;
};
function Tx() {
  return new TransformStream({
    transform(e, t) {
      _x(e, (r) => {
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
let Ka;
function ui(e) {
  return e.reduce((t, r) => t + r.length, 0);
}
function ci(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let i = 0; i < t; i++)
    r[i] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function Cx(e, t) {
  Ka || (Ka = new TextDecoder());
  const r = [];
  let n = 0, i = -1, a = !1;
  return new TransformStream({
    transform(o, s) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (ui(r) < 1)
            break;
          const u = ci(r, 1);
          a = (u[0] & 128) === 128, i = u[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (ui(r) < 2)
            break;
          const u = ci(r, 2);
          i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (ui(r) < 8)
            break;
          const u = ci(r, 8), c = new DataView(u.buffer, u.byteOffset, u.length), f = c.getUint32(0);
          if (f > Math.pow(2, 21) - 1) {
            s.enqueue(vc);
            break;
          }
          i = f * Math.pow(2, 32) + c.getUint32(4), n = 3;
        } else {
          if (ui(r) < i)
            break;
          const u = ci(r, i);
          s.enqueue(Il(a ? u : Ka.decode(u), t)), n = 0;
        }
        if (i === 0 || i > e) {
          s.enqueue(vc);
          break;
        }
      }
    }
  });
}
const gy = 4;
function Ge(e) {
  if (e) return Ax(e);
}
function Ax(e) {
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
const na = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), bt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Rx = "arraybuffer";
function vy(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const Ix = bt.setTimeout, kx = bt.clearTimeout;
function ia(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Ix.bind(bt), e.clearTimeoutFn = kx.bind(bt)) : (e.setTimeoutFn = bt.setTimeout.bind(bt), e.clearTimeoutFn = bt.clearTimeout.bind(bt));
}
const Nx = 1.33;
function Px(e) {
  return typeof e == "string" ? Mx(e) : Math.ceil((e.byteLength || e.size) * Nx);
}
function Mx(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function yy() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Dx(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function Fx(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
  }
  return t;
}
class Lx extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class kl extends Ge {
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
    return super.emitReserved("error", new Lx(t, r, n)), this;
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
    const r = Il(t, this.socket.binaryType);
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
    const r = Dx(t);
    return r.length ? "?" + r : "";
  }
}
class Bx extends kl {
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
    Ox(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, Sx(t, (r) => {
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
    return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = yy()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(t, r);
  }
}
let by = !1;
try {
  by = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const jx = by;
function zx() {
}
class qx extends Bx {
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
    const r = vy(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
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
      if (this._xhr.onreadystatechange = zx, t)
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
    attachEvent("onunload", Dh);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in bt ? "pagehide" : "unload";
    addEventListener(e, Dh, !1);
  }
}
function Dh() {
  for (let e in $t.requests)
    $t.requests.hasOwnProperty(e) && $t.requests[e].abort();
}
const Ux = function() {
  const e = _y({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class $x extends qx {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = Ux && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new $t(_y, this.uri(), t);
  }
}
function _y(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || jx))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new bt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const wy = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class Wx extends kl {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), r = this.opts.protocols, n = wy ? {} : vy(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
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
      Rl(n, this.supportsBinary, (a) => {
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
    return this.opts.timestampRequests && (r[this.opts.timestampParam] = yy()), this.supportsBinary || (r.b64 = 1), this.createUri(t, r);
  }
}
const Ya = bt.WebSocket || bt.MozWebSocket;
class Gx extends Wx {
  createSocket(t, r, n) {
    return wy ? new Ya(t, r, n) : r ? new Ya(t, r) : new Ya(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class Vx extends kl {
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
        const r = Cx(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), i = Tx();
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
const Hx = {
  websocket: Gx,
  webtransport: Vx,
  polling: $x
}, Kx = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Yx = [
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
function yc(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, r = e.indexOf("["), n = e.indexOf("]");
  r != -1 && n != -1 && (e = e.substring(0, r) + e.substring(r, n).replace(/:/g, ";") + e.substring(n, e.length));
  let i = Kx.exec(e || ""), a = {}, o = 14;
  for (; o--; )
    a[Yx[o]] = i[o] || "";
  return r != -1 && n != -1 && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = Xx(a, a.path), a.queryKey = Zx(a, a.query), a;
}
function Xx(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Zx(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, a) {
    i && (r[i] = a);
  }), r;
}
const bc = typeof addEventListener == "function" && typeof removeEventListener == "function", gi = [];
bc && addEventListener("offline", () => {
  gi.forEach((e) => e());
}, !1);
class lr extends Ge {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = Rx, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
      const n = yc(t);
      r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
    } else r.host && (r.hostname = yc(r.host).host);
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = Fx(this.opts.query)), bc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, gi.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
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
    r.EIO = gy, r.transport = t, this.id && (r.sid = this.id);
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
      if (i && (r += Px(i)), n > 0 && r > this._maxPayload)
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
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), bc && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const n = gi.indexOf(this._offlineEventListener);
        n !== -1 && gi.splice(n, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, r), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
lr.protocol = gy;
class Jx extends lr {
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
let Qx = class extends Jx {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((i) => Hx[i]).filter((i) => !!i)), super(t, n);
  }
};
function eE(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = yc(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const a = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + a + ":" + n.port + t, n.href = n.protocol + "://" + a + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const tE = typeof ArrayBuffer == "function", rE = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, xy = Object.prototype.toString, nE = typeof Blob == "function" || typeof Blob < "u" && xy.call(Blob) === "[object BlobConstructor]", iE = typeof File == "function" || typeof File < "u" && xy.call(File) === "[object FileConstructor]";
function Nl(e) {
  return tE && (e instanceof ArrayBuffer || rE(e)) || nE && e instanceof Blob || iE && e instanceof File;
}
function vi(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let r = 0, n = e.length; r < n; r++)
      if (vi(e[r]))
        return !0;
    return !1;
  }
  if (Nl(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return vi(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && vi(e[r]))
      return !0;
  return !1;
}
function aE(e) {
  const t = [], r = e.data, n = e;
  return n.data = _c(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function _c(e, t) {
  if (!e)
    return e;
  if (Nl(e)) {
    const r = { _placeholder: !0, num: t.length };
    return t.push(e), r;
  } else if (Array.isArray(e)) {
    const r = new Array(e.length);
    for (let n = 0; n < e.length; n++)
      r[n] = _c(e[n], t);
    return r;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const r = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (r[n] = _c(e[n], t));
    return r;
  }
  return e;
}
function sE(e, t) {
  return e.data = wc(e.data, t), delete e.attachments, e;
}
function wc(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let r = 0; r < e.length; r++)
      e[r] = wc(e[r], t);
  else if (typeof e == "object")
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (e[r] = wc(e[r], t));
  return e;
}
const oE = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], uE = 5;
var Ae;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Ae || (Ae = {}));
class cE {
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
    return (t.type === Ae.EVENT || t.type === Ae.ACK) && vi(t) ? this.encodeAsBinary({
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
    const r = aE(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function Fh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Pl extends Ge {
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
      n || r.type === Ae.BINARY_ACK ? (r.type = n ? Ae.EVENT : Ae.ACK, this.reconstructor = new lE(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (Nl(t) || t.base64)
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
      if (Pl.isPayloadValid(n.type, a))
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
        return Fh(r);
      case Ae.DISCONNECT:
        return r === void 0;
      case Ae.CONNECT_ERROR:
        return typeof r == "string" || Fh(r);
      case Ae.EVENT:
      case Ae.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && oE.indexOf(r[0]) === -1);
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
class lE {
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
      const r = sE(this.reconPack, this.buffers);
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
const fE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: Pl, Encoder: cE, get PacketType() {
  return Ae;
}, protocol: uE }, Symbol.toStringTag, { value: "Module" }));
function Rt(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const hE = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Ey extends Ge {
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
    if (hE.hasOwnProperty(t))
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
function nn(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
nn.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), r = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - r : e + r;
  }
  return Math.min(e, this.max) | 0;
};
nn.prototype.reset = function() {
  this.attempts = 0;
};
nn.prototype.setMin = function(e) {
  this.ms = e;
};
nn.prototype.setMax = function(e) {
  this.max = e;
};
nn.prototype.setJitter = function(e) {
  this.jitter = e;
};
class xc extends Ge {
  constructor(t, r) {
    var n;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (r = t, t = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, ia(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new nn({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = t;
    const i = r.parser || fE;
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
    this.engine = new Qx(this.uri, this.opts);
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
    return n ? this._autoConnect && !n.active && n.connect() : (n = new Ey(this, t, r), this.nsps[t] = n), n;
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
const vn = {};
function Xa(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const r = eE(e, t.path || "/socket.io"), n = r.source, i = r.id, a = r.path, o = vn[i] && a in vn[i].nsps, s = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let u;
  return s ? u = new xc(n, t) : (vn[i] || (vn[i] = new xc(n, t)), u = vn[i]), r.query && !t.query && (t.query = r.queryKey), u.socket(r.path, t);
}
Object.assign(Xa, {
  Manager: xc,
  Socket: Ey,
  io: Xa,
  connect: Xa
});
function li(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Za = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
var Lh;
function dE() {
  return Lh || (Lh = 1, function(e, t) {
    (function(r) {
      e.exports = r();
    })(function() {
      return function r(n, i, a) {
        function o(c, f) {
          if (!i[c]) {
            if (!n[c]) {
              var l = typeof li == "function" && li;
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
        for (var s = typeof li == "function" && li, u = 0; u < a.length; u++) o(a[u]);
        return o;
      }({ 1: [function(r, n, i) {
        var a = r("./utils"), o = r("./support"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        i.encode = function(u) {
          for (var c, f, l, d, h, m, p, b = [], y = 0, _ = u.length, x = _, O = a.getTypeOf(u) !== "string"; y < u.length; ) x = _ - y, l = O ? (c = u[y++], f = y < _ ? u[y++] : 0, y < _ ? u[y++] : 0) : (c = u.charCodeAt(y++), f = y < _ ? u.charCodeAt(y++) : 0, y < _ ? u.charCodeAt(y++) : 0), d = c >> 2, h = (3 & c) << 4 | f >> 4, m = 1 < x ? (15 & f) << 2 | l >> 6 : 64, p = 2 < x ? 63 & l : 64, b.push(s.charAt(d) + s.charAt(h) + s.charAt(m) + s.charAt(p));
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
          var x, O, C = h.file, B = h.compression, I = _ !== c.utf8encode, S = s.transformTo("string", _(C.name)), w = s.transformTo("string", c.utf8encode(C.name)), k = C.comment, q = s.transformTo("string", _(k)), E = s.transformTo("string", c.utf8encode(k)), L = w.length !== C.name.length, v = E.length !== k.length, z = "", ie = "", D = "", Q = C.dir, F = C.date, ee = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          m && !p || (ee.crc32 = h.crc32, ee.compressedSize = h.compressedSize, ee.uncompressedSize = h.uncompressedSize);
          var P = 0;
          m && (P |= 8), I || !L && !v || (P |= 2048);
          var M = 0, K = 0;
          Q && (M |= 16), y === "UNIX" ? (K = 798, M |= function(H, pe) {
            var Ee = H;
            return H || (Ee = pe ? 16893 : 33204), (65535 & Ee) << 16;
          }(C.unixPermissions, Q)) : (K = 20, M |= function(H) {
            return 63 & (H || 0);
          }(C.dosPermissions)), x = F.getUTCHours(), x <<= 6, x |= F.getUTCMinutes(), x <<= 5, x |= F.getUTCSeconds() / 2, O = F.getUTCFullYear() - 1980, O <<= 4, O |= F.getUTCMonth() + 1, O <<= 5, O |= F.getUTCDate(), L && (ie = a(1, 1) + a(f(S), 4) + w, z += "up" + a(ie.length, 2) + ie), v && (D = a(1, 1) + a(f(q), 4) + E, z += "uc" + a(D.length, 2) + D);
          var te = "";
          return te += `
\0`, te += a(P, 2), te += B.magic, te += a(x, 2), te += a(O, 2), te += a(ee.crc32, 4), te += a(ee.compressedSize, 4), te += a(ee.uncompressedSize, 4), te += a(S.length, 2), te += a(z.length, 2), { fileRecord: l.LOCAL_FILE_HEADER + te + S + z, dirRecord: l.CENTRAL_FILE_HEADER + a(K, 2) + te + a(q.length, 2) + "\0\0\0\0" + a(M, 4) + a(b, 4) + S + z + q };
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
          var p = this.bytesWritten - h, b = function(y, _, x, O, C) {
            var B = s.transformTo("string", C(O));
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
                var O = _ || x, C = a[O];
                if (!C) throw new Error(O + " is not a valid compression method !");
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
              var x = y[_], O = x.fileNameStr, C = a.resolve(x.fileNameStr);
              m.file(C, x.decompressed, { binary: !0, optimizedBinaryString: !0, date: x.date, dir: x.dir, comment: x.fileCommentStr.length ? x.fileCommentStr : null, unixPermissions: x.unixPermissions, dosPermissions: x.dosPermissions, createFolders: h.createFolders }), x.dir || (m.file(C).unsafeOriginalName = O);
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
        function a(C, B, I) {
          var S, w = s.getTypeOf(B), k = s.extend(I || {}, f);
          k.date = k.date || /* @__PURE__ */ new Date(), k.compression !== null && (k.compression = k.compression.toUpperCase()), typeof k.unixPermissions == "string" && (k.unixPermissions = parseInt(k.unixPermissions, 8)), k.unixPermissions && 16384 & k.unixPermissions && (k.dir = !0), k.dosPermissions && 16 & k.dosPermissions && (k.dir = !0), k.dir && (C = y(C)), k.createFolders && (S = b(C)) && _.call(this, S, !0);
          var q = w === "string" && k.binary === !1 && k.base64 === !1;
          I && I.binary !== void 0 || (k.binary = !q), (B instanceof l && B.uncompressedSize === 0 || k.dir || !B || B.length === 0) && (k.base64 = !1, k.binary = !0, B = "", k.compression = "STORE", w = "string");
          var E = null;
          E = B instanceof l || B instanceof u ? B : m.isNode && m.isStream(B) ? new p(C, B) : s.prepareContent(C, B, k.binary, k.optimizedBinaryString, k.base64);
          var L = new d(C, E, k);
          this.files[C] = L;
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
          if (x(C)) {
            var S = C;
            return this.filter(function(k, q) {
              return !q.dir && S.test(k);
            });
          }
          var w = this.files[this.root + C];
          return w && !w.dir ? w : null;
        }, folder: function(C) {
          if (!C) return this;
          if (x(C)) return this.filter(function(w, k) {
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
            var _ = [], x = m._internalType, O = m._outputType, C = m._mimeType;
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
                  var w, k = 0, q = null, E = 0;
                  for (w = 0; w < S.length; w++) E += S[w].length;
                  switch (I) {
                    case "string":
                      return S.join("");
                    case "array":
                      return Array.prototype.concat.apply([], S);
                    case "uint8array":
                      for (q = new Uint8Array(E), w = 0; w < S.length; w++) q.set(S[w], k), k += S[w].length;
                      return q;
                    case "nodebuffer":
                      return Buffer.concat(S);
                    default:
                      throw new Error("concat : unsupported type '" + I + "'");
                  }
                }(x, _), C);
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
            var p, b, y, _, x, O = m.length, C = 0;
            for (_ = 0; _ < O; _++) (64512 & (b = m.charCodeAt(_))) == 55296 && _ + 1 < O && (64512 & (y = m.charCodeAt(_ + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (y - 56320), _++), C += b < 128 ? 1 : b < 2048 ? 2 : b < 65536 ? 3 : 4;
            for (p = o.uint8array ? new Uint8Array(C) : new Array(C), _ = x = 0; x < C; _++) (64512 & (b = m.charCodeAt(_))) == 55296 && _ + 1 < O && (64512 & (y = m.charCodeAt(_ + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (y - 56320), _++), b < 128 ? p[x++] = b : (b < 2048 ? p[x++] = 192 | b >>> 6 : (b < 65536 ? p[x++] = 224 | b >>> 12 : (p[x++] = 240 | b >>> 18, p[x++] = 128 | b >>> 12 & 63), p[x++] = 128 | b >>> 6 & 63), p[x++] = 128 | 63 & b);
            return p;
          }(h);
        }, i.utf8decode = function(h) {
          return o.nodebuffer ? a.transformTo("nodebuffer", h).toString("utf-8") : function(m) {
            var p, b, y, _, x = m.length, O = new Array(2 * x);
            for (p = b = 0; p < x; ) if ((y = m[p++]) < 128) O[b++] = y;
            else if (4 < (_ = c[y])) O[b++] = 65533, p += _ - 1;
            else {
              for (y &= _ === 2 ? 31 : _ === 3 ? 15 : 7; 1 < _ && p < x; ) y = y << 6 | 63 & m[p++], _--;
              1 < _ ? O[b++] = 65533 : y < 65536 ? O[b++] = y : (y -= 65536, O[b++] = 55296 | y >> 10 & 1023, O[b++] = 56320 | 1023 & y);
            }
            return O.length !== b && (O.subarray ? O = O.subarray(0, b) : O.length = b), a.applyFromCharCode(O);
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
            var O;
            for ((x = x || _.length) > _.length && (x = _.length), O = x - 1; 0 <= O && (192 & _[O]) == 128; ) O--;
            return O < 0 || O === 0 ? x : O + c[_[O]] > x ? O : x;
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
          var _ = [], x = 0, O = p.length;
          if (O <= y) return String.fromCharCode.apply(null, p);
          for (; x < O; ) b === "array" || b === "nodebuffer" ? _.push(String.fromCharCode.apply(null, p.slice(x, Math.min(x + y, O)))) : _.push(String.fromCharCode.apply(null, p.subarray(x, Math.min(x + y, O)))), x += y;
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
            return C ? (C === "arraybuffer" ? O = i.transformTo("uint8array", O) : C === "string" && (x ? O = o.decode(O) : y && _ !== !0 && (O = function(B) {
              return f(B, a.uint8array ? new Uint8Array(B.length) : new Array(B.length));
            }(O))), O) : u.Promise.reject(new Error("Can't read the data of '" + p + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
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
            var O;
            try {
              O = _(x);
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
          var x = !1;
          function O(I) {
            x || (x = !0, s.reject(y, I));
          }
          function C(I) {
            x || (x = !0, s.resolve(y, I));
          }
          var B = b(function() {
            _(C, O);
          });
          B.status === "error" && O(B.value);
        }
        function b(y, _) {
          var x = {};
          try {
            x.value = y(_), x.status = "success";
          } catch (O) {
            x.status = "error", x.value = O;
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
          var O = x.value;
          if (O) p(y, O);
          else {
            y.state = c, y.outcome = _;
            for (var C = -1, B = y.queue.length; ++C < B; ) y.queue[C].callFulfilled(_);
          }
          return y;
        }, s.reject = function(y, _) {
          y.state = u, y.outcome = _;
          for (var x = -1, O = y.queue.length; ++x < O; ) y.queue[x].callRejected(_);
          return y;
        }, l.resolve = function(y) {
          return y instanceof this ? y : s.resolve(new this(o), y);
        }, l.reject = function(y) {
          var _ = new this(o);
          return s.reject(_, y);
        }, l.all = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = y.length, O = !1;
          if (!x) return this.resolve([]);
          for (var C = new Array(x), B = 0, I = -1, S = new this(o); ++I < x; ) w(y[I], I);
          return S;
          function w(k, q) {
            _.resolve(k).then(function(E) {
              C[q] = E, ++B !== x || O || (O = !0, s.resolve(S, C));
            }, function(E) {
              O || (O = !0, s.reject(S, E));
            });
          }
        }, l.race = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = y.length, O = !1;
          if (!x) return this.resolve([]);
          for (var C = -1, B = new this(o); ++C < x; ) I = y[C], _.resolve(I).then(function(S) {
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
        var a = r("./zlib/deflate"), o = r("./utils/common"), s = r("./utils/strings"), u = r("./zlib/messages"), c = r("./zlib/zstream"), f = Object.prototype.toString, l = 0, d = -1, h = 0, m = 8;
        function p(y) {
          if (!(this instanceof p)) return new p(y);
          this.options = o.assign({ level: d, method: m, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, y || {});
          var _ = this.options;
          _.raw && 0 < _.windowBits ? _.windowBits = -_.windowBits : _.gzip && 0 < _.windowBits && _.windowBits < 16 && (_.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
          var x = a.deflateInit2(this.strm, _.level, _.method, _.windowBits, _.memLevel, _.strategy);
          if (x !== l) throw new Error(u[x]);
          if (_.header && a.deflateSetHeader(this.strm, _.header), _.dictionary) {
            var O;
            if (O = typeof _.dictionary == "string" ? s.string2buf(_.dictionary) : f.call(_.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(_.dictionary) : _.dictionary, (x = a.deflateSetDictionary(this.strm, O)) !== l) throw new Error(u[x]);
            this._dict_set = !0;
          }
        }
        function b(y, _) {
          var x = new p(_);
          if (x.push(y, !0), x.err) throw x.msg || u[x.err];
          return x.result;
        }
        p.prototype.push = function(y, _) {
          var x, O, C = this.strm, B = this.options.chunkSize;
          if (this.ended) return !1;
          O = _ === ~~_ ? _ : _ === !0 ? 4 : 0, typeof y == "string" ? C.input = s.string2buf(y) : f.call(y) === "[object ArrayBuffer]" ? C.input = new Uint8Array(y) : C.input = y, C.next_in = 0, C.avail_in = C.input.length;
          do {
            if (C.avail_out === 0 && (C.output = new o.Buf8(B), C.next_out = 0, C.avail_out = B), (x = a.deflate(C, O)) !== 1 && x !== l) return this.onEnd(x), !(this.ended = !0);
            C.avail_out !== 0 && (C.avail_in !== 0 || O !== 4 && O !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(C.output, C.next_out))) : this.onData(o.shrinkBuf(C.output, C.next_out)));
          } while ((0 < C.avail_in || C.avail_out === 0) && x !== 1);
          return O === 4 ? (x = a.deflateEnd(this.strm), this.onEnd(x), this.ended = !0, x === l) : O !== 2 || (this.onEnd(l), !(C.avail_out = 0));
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
          b.raw && 0 <= b.windowBits && b.windowBits < 16 && (b.windowBits = -b.windowBits, b.windowBits === 0 && (b.windowBits = -15)), !(0 <= b.windowBits && b.windowBits < 16) || p && p.windowBits || (b.windowBits += 32), 15 < b.windowBits && b.windowBits < 48 && (15 & b.windowBits) == 0 && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
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
          var y, _, x, O, C, B, I = this.strm, S = this.options.chunkSize, w = this.options.dictionary, k = !1;
          if (this.ended) return !1;
          _ = b === ~~b ? b : b === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof p == "string" ? I.input = s.binstring2buf(p) : d.call(p) === "[object ArrayBuffer]" ? I.input = new Uint8Array(p) : I.input = p, I.next_in = 0, I.avail_in = I.input.length;
          do {
            if (I.avail_out === 0 && (I.output = new o.Buf8(S), I.next_out = 0, I.avail_out = S), (y = a.inflate(I, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && w && (B = typeof w == "string" ? s.string2buf(w) : d.call(w) === "[object ArrayBuffer]" ? new Uint8Array(w) : w, y = a.inflateSetDictionary(this.strm, B)), y === u.Z_BUF_ERROR && k === !0 && (y = u.Z_OK, k = !1), y !== u.Z_STREAM_END && y !== u.Z_OK) return this.onEnd(y), !(this.ended = !0);
            I.next_out && (I.avail_out !== 0 && y !== u.Z_STREAM_END && (I.avail_in !== 0 || _ !== u.Z_FINISH && _ !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (x = s.utf8border(I.output, I.next_out), O = I.next_out - x, C = s.buf2string(I.output, x), I.next_out = O, I.avail_out = S - O, O && o.arraySet(I.output, I.output, x, O, 0), this.onData(C)) : this.onData(o.shrinkBuf(I.output, I.next_out)))), I.avail_in === 0 && I.avail_out === 0 && (k = !0);
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
        var a, o = r("../utils/common"), s = r("./trees"), u = r("./adler32"), c = r("./crc32"), f = r("./messages"), l = 0, d = 4, h = 0, m = -2, p = -1, b = 4, y = 2, _ = 8, x = 9, O = 286, C = 30, B = 19, I = 2 * O + 1, S = 15, w = 3, k = 258, q = k + w + 1, E = 42, L = 113, v = 1, z = 2, ie = 3, D = 4;
        function Q(g, X) {
          return g.msg = f[X], X;
        }
        function F(g) {
          return (g << 1) - (4 < g ? 9 : 0);
        }
        function ee(g) {
          for (var X = g.length; 0 <= --X; ) g[X] = 0;
        }
        function P(g) {
          var X = g.state, W = X.pending;
          W > g.avail_out && (W = g.avail_out), W !== 0 && (o.arraySet(g.output, X.pending_buf, X.pending_out, W, g.next_out), g.next_out += W, X.pending_out += W, g.total_out += W, g.avail_out -= W, X.pending -= W, X.pending === 0 && (X.pending_out = 0));
        }
        function M(g, X) {
          s._tr_flush_block(g, 0 <= g.block_start ? g.block_start : -1, g.strstart - g.block_start, X), g.block_start = g.strstart, P(g.strm);
        }
        function K(g, X) {
          g.pending_buf[g.pending++] = X;
        }
        function te(g, X) {
          g.pending_buf[g.pending++] = X >>> 8 & 255, g.pending_buf[g.pending++] = 255 & X;
        }
        function H(g, X) {
          var W, N, T = g.max_chain_length, j = g.strstart, re = g.prev_length, ne = g.nice_match, G = g.strstart > g.w_size - q ? g.strstart - (g.w_size - q) : 0, V = g.window, J = g.w_mask, Z = g.prev, ae = g.strstart + k, de = V[j + re - 1], _e = V[j + re];
          g.prev_length >= g.good_match && (T >>= 2), ne > g.lookahead && (ne = g.lookahead);
          do
            if (V[(W = X) + re] === _e && V[W + re - 1] === de && V[W] === V[j] && V[++W] === V[j + 1]) {
              j += 2, W++;
              do
                ;
              while (V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && V[++j] === V[++W] && j < ae);
              if (N = k - (ae - j), j = ae - k, re < N) {
                if (g.match_start = X, ne <= (re = N)) break;
                de = V[j + re - 1], _e = V[j + re];
              }
            }
          while ((X = Z[X & J]) > G && --T != 0);
          return re <= g.lookahead ? re : g.lookahead;
        }
        function pe(g) {
          var X, W, N, T, j, re, ne, G, V, J, Z = g.w_size;
          do {
            if (T = g.window_size - g.lookahead - g.strstart, g.strstart >= Z + (Z - q)) {
              for (o.arraySet(g.window, g.window, Z, Z, 0), g.match_start -= Z, g.strstart -= Z, g.block_start -= Z, X = W = g.hash_size; N = g.head[--X], g.head[X] = Z <= N ? N - Z : 0, --W; ) ;
              for (X = W = Z; N = g.prev[--X], g.prev[X] = Z <= N ? N - Z : 0, --W; ) ;
              T += Z;
            }
            if (g.strm.avail_in === 0) break;
            if (re = g.strm, ne = g.window, G = g.strstart + g.lookahead, V = T, J = void 0, J = re.avail_in, V < J && (J = V), W = J === 0 ? 0 : (re.avail_in -= J, o.arraySet(ne, re.input, re.next_in, J, G), re.state.wrap === 1 ? re.adler = u(re.adler, ne, J, G) : re.state.wrap === 2 && (re.adler = c(re.adler, ne, J, G)), re.next_in += J, re.total_in += J, J), g.lookahead += W, g.lookahead + g.insert >= w) for (j = g.strstart - g.insert, g.ins_h = g.window[j], g.ins_h = (g.ins_h << g.hash_shift ^ g.window[j + 1]) & g.hash_mask; g.insert && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[j + w - 1]) & g.hash_mask, g.prev[j & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = j, j++, g.insert--, !(g.lookahead + g.insert < w)); ) ;
          } while (g.lookahead < q && g.strm.avail_in !== 0);
        }
        function Ee(g, X) {
          for (var W, N; ; ) {
            if (g.lookahead < q) {
              if (pe(g), g.lookahead < q && X === l) return v;
              if (g.lookahead === 0) break;
            }
            if (W = 0, g.lookahead >= w && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, W = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), W !== 0 && g.strstart - W <= g.w_size - q && (g.match_length = H(g, W)), g.match_length >= w) if (N = s._tr_tally(g, g.strstart - g.match_start, g.match_length - w), g.lookahead -= g.match_length, g.match_length <= g.max_lazy_match && g.lookahead >= w) {
              for (g.match_length--; g.strstart++, g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, W = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart, --g.match_length != 0; ) ;
              g.strstart++;
            } else g.strstart += g.match_length, g.match_length = 0, g.ins_h = g.window[g.strstart], g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + 1]) & g.hash_mask;
            else N = s._tr_tally(g, 0, g.window[g.strstart]), g.lookahead--, g.strstart++;
            if (N && (M(g, !1), g.strm.avail_out === 0)) return v;
          }
          return g.insert = g.strstart < w - 1 ? g.strstart : w - 1, X === d ? (M(g, !0), g.strm.avail_out === 0 ? ie : D) : g.last_lit && (M(g, !1), g.strm.avail_out === 0) ? v : z;
        }
        function ce(g, X) {
          for (var W, N, T; ; ) {
            if (g.lookahead < q) {
              if (pe(g), g.lookahead < q && X === l) return v;
              if (g.lookahead === 0) break;
            }
            if (W = 0, g.lookahead >= w && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, W = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), g.prev_length = g.match_length, g.prev_match = g.match_start, g.match_length = w - 1, W !== 0 && g.prev_length < g.max_lazy_match && g.strstart - W <= g.w_size - q && (g.match_length = H(g, W), g.match_length <= 5 && (g.strategy === 1 || g.match_length === w && 4096 < g.strstart - g.match_start) && (g.match_length = w - 1)), g.prev_length >= w && g.match_length <= g.prev_length) {
              for (T = g.strstart + g.lookahead - w, N = s._tr_tally(g, g.strstart - 1 - g.prev_match, g.prev_length - w), g.lookahead -= g.prev_length - 1, g.prev_length -= 2; ++g.strstart <= T && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, W = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), --g.prev_length != 0; ) ;
              if (g.match_available = 0, g.match_length = w - 1, g.strstart++, N && (M(g, !1), g.strm.avail_out === 0)) return v;
            } else if (g.match_available) {
              if ((N = s._tr_tally(g, 0, g.window[g.strstart - 1])) && M(g, !1), g.strstart++, g.lookahead--, g.strm.avail_out === 0) return v;
            } else g.match_available = 1, g.strstart++, g.lookahead--;
          }
          return g.match_available && (N = s._tr_tally(g, 0, g.window[g.strstart - 1]), g.match_available = 0), g.insert = g.strstart < w - 1 ? g.strstart : w - 1, X === d ? (M(g, !0), g.strm.avail_out === 0 ? ie : D) : g.last_lit && (M(g, !1), g.strm.avail_out === 0) ? v : z;
        }
        function fe(g, X, W, N, T) {
          this.good_length = g, this.max_lazy = X, this.nice_length = W, this.max_chain = N, this.func = T;
        }
        function ve() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * I), this.dyn_dtree = new o.Buf16(2 * (2 * C + 1)), this.bl_tree = new o.Buf16(2 * (2 * B + 1)), ee(this.dyn_ltree), ee(this.dyn_dtree), ee(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(S + 1), this.heap = new o.Buf16(2 * O + 1), ee(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * O + 1), ee(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function le(g) {
          var X;
          return g && g.state ? (g.total_in = g.total_out = 0, g.data_type = y, (X = g.state).pending = 0, X.pending_out = 0, X.wrap < 0 && (X.wrap = -X.wrap), X.status = X.wrap ? E : L, g.adler = X.wrap === 2 ? 0 : 1, X.last_flush = l, s._tr_init(X), h) : Q(g, m);
        }
        function we(g) {
          var X = le(g);
          return X === h && function(W) {
            W.window_size = 2 * W.w_size, ee(W.head), W.max_lazy_match = a[W.level].max_lazy, W.good_match = a[W.level].good_length, W.nice_match = a[W.level].nice_length, W.max_chain_length = a[W.level].max_chain, W.strstart = 0, W.block_start = 0, W.lookahead = 0, W.insert = 0, W.match_length = W.prev_length = w - 1, W.match_available = 0, W.ins_h = 0;
          }(g.state), X;
        }
        function xe(g, X, W, N, T, j) {
          if (!g) return m;
          var re = 1;
          if (X === p && (X = 6), N < 0 ? (re = 0, N = -N) : 15 < N && (re = 2, N -= 16), T < 1 || x < T || W !== _ || N < 8 || 15 < N || X < 0 || 9 < X || j < 0 || b < j) return Q(g, m);
          N === 8 && (N = 9);
          var ne = new ve();
          return (g.state = ne).strm = g, ne.wrap = re, ne.gzhead = null, ne.w_bits = N, ne.w_size = 1 << ne.w_bits, ne.w_mask = ne.w_size - 1, ne.hash_bits = T + 7, ne.hash_size = 1 << ne.hash_bits, ne.hash_mask = ne.hash_size - 1, ne.hash_shift = ~~((ne.hash_bits + w - 1) / w), ne.window = new o.Buf8(2 * ne.w_size), ne.head = new o.Buf16(ne.hash_size), ne.prev = new o.Buf16(ne.w_size), ne.lit_bufsize = 1 << T + 6, ne.pending_buf_size = 4 * ne.lit_bufsize, ne.pending_buf = new o.Buf8(ne.pending_buf_size), ne.d_buf = 1 * ne.lit_bufsize, ne.l_buf = 3 * ne.lit_bufsize, ne.level = X, ne.strategy = j, ne.method = W, we(g);
        }
        a = [new fe(0, 0, 0, 0, function(g, X) {
          var W = 65535;
          for (W > g.pending_buf_size - 5 && (W = g.pending_buf_size - 5); ; ) {
            if (g.lookahead <= 1) {
              if (pe(g), g.lookahead === 0 && X === l) return v;
              if (g.lookahead === 0) break;
            }
            g.strstart += g.lookahead, g.lookahead = 0;
            var N = g.block_start + W;
            if ((g.strstart === 0 || g.strstart >= N) && (g.lookahead = g.strstart - N, g.strstart = N, M(g, !1), g.strm.avail_out === 0) || g.strstart - g.block_start >= g.w_size - q && (M(g, !1), g.strm.avail_out === 0)) return v;
          }
          return g.insert = 0, X === d ? (M(g, !0), g.strm.avail_out === 0 ? ie : D) : (g.strstart > g.block_start && (M(g, !1), g.strm.avail_out), v);
        }), new fe(4, 4, 8, 4, Ee), new fe(4, 5, 16, 8, Ee), new fe(4, 6, 32, 32, Ee), new fe(4, 4, 16, 16, ce), new fe(8, 16, 32, 32, ce), new fe(8, 16, 128, 128, ce), new fe(8, 32, 128, 256, ce), new fe(32, 128, 258, 1024, ce), new fe(32, 258, 258, 4096, ce)], i.deflateInit = function(g, X) {
          return xe(g, X, _, 15, 8, 0);
        }, i.deflateInit2 = xe, i.deflateReset = we, i.deflateResetKeep = le, i.deflateSetHeader = function(g, X) {
          return g && g.state ? g.state.wrap !== 2 ? m : (g.state.gzhead = X, h) : m;
        }, i.deflate = function(g, X) {
          var W, N, T, j;
          if (!g || !g.state || 5 < X || X < 0) return g ? Q(g, m) : m;
          if (N = g.state, !g.output || !g.input && g.avail_in !== 0 || N.status === 666 && X !== d) return Q(g, g.avail_out === 0 ? -5 : m);
          if (N.strm = g, W = N.last_flush, N.last_flush = X, N.status === E) if (N.wrap === 2) g.adler = 0, K(N, 31), K(N, 139), K(N, 8), N.gzhead ? (K(N, (N.gzhead.text ? 1 : 0) + (N.gzhead.hcrc ? 2 : 0) + (N.gzhead.extra ? 4 : 0) + (N.gzhead.name ? 8 : 0) + (N.gzhead.comment ? 16 : 0)), K(N, 255 & N.gzhead.time), K(N, N.gzhead.time >> 8 & 255), K(N, N.gzhead.time >> 16 & 255), K(N, N.gzhead.time >> 24 & 255), K(N, N.level === 9 ? 2 : 2 <= N.strategy || N.level < 2 ? 4 : 0), K(N, 255 & N.gzhead.os), N.gzhead.extra && N.gzhead.extra.length && (K(N, 255 & N.gzhead.extra.length), K(N, N.gzhead.extra.length >> 8 & 255)), N.gzhead.hcrc && (g.adler = c(g.adler, N.pending_buf, N.pending, 0)), N.gzindex = 0, N.status = 69) : (K(N, 0), K(N, 0), K(N, 0), K(N, 0), K(N, 0), K(N, N.level === 9 ? 2 : 2 <= N.strategy || N.level < 2 ? 4 : 0), K(N, 3), N.status = L);
          else {
            var re = _ + (N.w_bits - 8 << 4) << 8;
            re |= (2 <= N.strategy || N.level < 2 ? 0 : N.level < 6 ? 1 : N.level === 6 ? 2 : 3) << 6, N.strstart !== 0 && (re |= 32), re += 31 - re % 31, N.status = L, te(N, re), N.strstart !== 0 && (te(N, g.adler >>> 16), te(N, 65535 & g.adler)), g.adler = 1;
          }
          if (N.status === 69) if (N.gzhead.extra) {
            for (T = N.pending; N.gzindex < (65535 & N.gzhead.extra.length) && (N.pending !== N.pending_buf_size || (N.gzhead.hcrc && N.pending > T && (g.adler = c(g.adler, N.pending_buf, N.pending - T, T)), P(g), T = N.pending, N.pending !== N.pending_buf_size)); ) K(N, 255 & N.gzhead.extra[N.gzindex]), N.gzindex++;
            N.gzhead.hcrc && N.pending > T && (g.adler = c(g.adler, N.pending_buf, N.pending - T, T)), N.gzindex === N.gzhead.extra.length && (N.gzindex = 0, N.status = 73);
          } else N.status = 73;
          if (N.status === 73) if (N.gzhead.name) {
            T = N.pending;
            do {
              if (N.pending === N.pending_buf_size && (N.gzhead.hcrc && N.pending > T && (g.adler = c(g.adler, N.pending_buf, N.pending - T, T)), P(g), T = N.pending, N.pending === N.pending_buf_size)) {
                j = 1;
                break;
              }
              j = N.gzindex < N.gzhead.name.length ? 255 & N.gzhead.name.charCodeAt(N.gzindex++) : 0, K(N, j);
            } while (j !== 0);
            N.gzhead.hcrc && N.pending > T && (g.adler = c(g.adler, N.pending_buf, N.pending - T, T)), j === 0 && (N.gzindex = 0, N.status = 91);
          } else N.status = 91;
          if (N.status === 91) if (N.gzhead.comment) {
            T = N.pending;
            do {
              if (N.pending === N.pending_buf_size && (N.gzhead.hcrc && N.pending > T && (g.adler = c(g.adler, N.pending_buf, N.pending - T, T)), P(g), T = N.pending, N.pending === N.pending_buf_size)) {
                j = 1;
                break;
              }
              j = N.gzindex < N.gzhead.comment.length ? 255 & N.gzhead.comment.charCodeAt(N.gzindex++) : 0, K(N, j);
            } while (j !== 0);
            N.gzhead.hcrc && N.pending > T && (g.adler = c(g.adler, N.pending_buf, N.pending - T, T)), j === 0 && (N.status = 103);
          } else N.status = 103;
          if (N.status === 103 && (N.gzhead.hcrc ? (N.pending + 2 > N.pending_buf_size && P(g), N.pending + 2 <= N.pending_buf_size && (K(N, 255 & g.adler), K(N, g.adler >> 8 & 255), g.adler = 0, N.status = L)) : N.status = L), N.pending !== 0) {
            if (P(g), g.avail_out === 0) return N.last_flush = -1, h;
          } else if (g.avail_in === 0 && F(X) <= F(W) && X !== d) return Q(g, -5);
          if (N.status === 666 && g.avail_in !== 0) return Q(g, -5);
          if (g.avail_in !== 0 || N.lookahead !== 0 || X !== l && N.status !== 666) {
            var ne = N.strategy === 2 ? function(G, V) {
              for (var J; ; ) {
                if (G.lookahead === 0 && (pe(G), G.lookahead === 0)) {
                  if (V === l) return v;
                  break;
                }
                if (G.match_length = 0, J = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++, J && (M(G, !1), G.strm.avail_out === 0)) return v;
              }
              return G.insert = 0, V === d ? (M(G, !0), G.strm.avail_out === 0 ? ie : D) : G.last_lit && (M(G, !1), G.strm.avail_out === 0) ? v : z;
            }(N, X) : N.strategy === 3 ? function(G, V) {
              for (var J, Z, ae, de, _e = G.window; ; ) {
                if (G.lookahead <= k) {
                  if (pe(G), G.lookahead <= k && V === l) return v;
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
            }(N, X) : a[N.level].func(N, X);
            if (ne !== ie && ne !== D || (N.status = 666), ne === v || ne === ie) return g.avail_out === 0 && (N.last_flush = -1), h;
            if (ne === z && (X === 1 ? s._tr_align(N) : X !== 5 && (s._tr_stored_block(N, 0, 0, !1), X === 3 && (ee(N.head), N.lookahead === 0 && (N.strstart = 0, N.block_start = 0, N.insert = 0))), P(g), g.avail_out === 0)) return N.last_flush = -1, h;
          }
          return X !== d ? h : N.wrap <= 0 ? 1 : (N.wrap === 2 ? (K(N, 255 & g.adler), K(N, g.adler >> 8 & 255), K(N, g.adler >> 16 & 255), K(N, g.adler >> 24 & 255), K(N, 255 & g.total_in), K(N, g.total_in >> 8 & 255), K(N, g.total_in >> 16 & 255), K(N, g.total_in >> 24 & 255)) : (te(N, g.adler >>> 16), te(N, 65535 & g.adler)), P(g), 0 < N.wrap && (N.wrap = -N.wrap), N.pending !== 0 ? h : 1);
        }, i.deflateEnd = function(g) {
          var X;
          return g && g.state ? (X = g.state.status) !== E && X !== 69 && X !== 73 && X !== 91 && X !== 103 && X !== L && X !== 666 ? Q(g, m) : (g.state = null, X === L ? Q(g, -3) : h) : m;
        }, i.deflateSetDictionary = function(g, X) {
          var W, N, T, j, re, ne, G, V, J = X.length;
          if (!g || !g.state || (j = (W = g.state).wrap) === 2 || j === 1 && W.status !== E || W.lookahead) return m;
          for (j === 1 && (g.adler = u(g.adler, X, J, 0)), W.wrap = 0, J >= W.w_size && (j === 0 && (ee(W.head), W.strstart = 0, W.block_start = 0, W.insert = 0), V = new o.Buf8(W.w_size), o.arraySet(V, X, J - W.w_size, W.w_size, 0), X = V, J = W.w_size), re = g.avail_in, ne = g.next_in, G = g.input, g.avail_in = J, g.next_in = 0, g.input = X, pe(W); W.lookahead >= w; ) {
            for (N = W.strstart, T = W.lookahead - (w - 1); W.ins_h = (W.ins_h << W.hash_shift ^ W.window[N + w - 1]) & W.hash_mask, W.prev[N & W.w_mask] = W.head[W.ins_h], W.head[W.ins_h] = N, N++, --T; ) ;
            W.strstart = N, W.lookahead = w - 1, pe(W);
          }
          return W.strstart += W.lookahead, W.block_start = W.strstart, W.insert = W.lookahead, W.lookahead = 0, W.match_length = W.prev_length = w - 1, W.match_available = 0, g.next_in = ne, g.input = G, g.avail_in = re, W.wrap = j, h;
        }, i.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, n, i) {
        n.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(r, n, i) {
        n.exports = function(a, o) {
          var s, u, c, f, l, d, h, m, p, b, y, _, x, O, C, B, I, S, w, k, q, E, L, v, z;
          s = a.state, u = a.next_in, v = a.input, c = u + (a.avail_in - 5), f = a.next_out, z = a.output, l = f - (o - a.avail_out), d = f + (a.avail_out - 257), h = s.dmax, m = s.wsize, p = s.whave, b = s.wnext, y = s.window, _ = s.hold, x = s.bits, O = s.lencode, C = s.distcode, B = (1 << s.lenbits) - 1, I = (1 << s.distbits) - 1;
          e: do {
            x < 15 && (_ += v[u++] << x, x += 8, _ += v[u++] << x, x += 8), S = O[_ & B];
            t: for (; ; ) {
              if (_ >>>= w = S >>> 24, x -= w, (w = S >>> 16 & 255) === 0) z[f++] = 65535 & S;
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
                k = 65535 & S, (w &= 15) && (x < w && (_ += v[u++] << x, x += 8), k += _ & (1 << w) - 1, _ >>>= w, x -= w), x < 15 && (_ += v[u++] << x, x += 8, _ += v[u++] << x, x += 8), S = C[_ & I];
                r: for (; ; ) {
                  if (_ >>>= w = S >>> 24, x -= w, !(16 & (w = S >>> 16 & 255))) {
                    if ((64 & w) == 0) {
                      S = C[(65535 & S) + (_ & (1 << w) - 1)];
                      continue r;
                    }
                    a.msg = "invalid distance code", s.mode = 30;
                    break e;
                  }
                  if (q = 65535 & S, x < (w &= 15) && (_ += v[u++] << x, (x += 8) < w && (_ += v[u++] << x, x += 8)), h < (q += _ & (1 << w) - 1)) {
                    a.msg = "invalid distance too far back", s.mode = 30;
                    break e;
                  }
                  if (_ >>>= w, x -= w, (w = f - l) < q) {
                    if (p < (w = q - w) && s.sane) {
                      a.msg = "invalid distance too far back", s.mode = 30;
                      break e;
                    }
                    if (L = y, (E = 0) === b) {
                      if (E += m - w, w < k) {
                        for (k -= w; z[f++] = y[E++], --w; ) ;
                        E = f - q, L = z;
                      }
                    } else if (b < w) {
                      if (E += m + b - w, (w -= b) < k) {
                        for (k -= w; z[f++] = y[E++], --w; ) ;
                        if (E = 0, b < k) {
                          for (k -= w = b; z[f++] = y[E++], --w; ) ;
                          E = f - q, L = z;
                        }
                      }
                    } else if (E += b - w, w < k) {
                      for (k -= w; z[f++] = y[E++], --w; ) ;
                      E = f - q, L = z;
                    }
                    for (; 2 < k; ) z[f++] = L[E++], z[f++] = L[E++], z[f++] = L[E++], k -= 3;
                    k && (z[f++] = L[E++], 1 < k && (z[f++] = L[E++]));
                  } else {
                    for (E = f - q; z[f++] = z[E++], z[f++] = z[E++], z[f++] = z[E++], 2 < (k -= 3); ) ;
                    k && (z[f++] = z[E++], 1 < k && (z[f++] = z[E++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (u < c && f < d);
          u -= k = x >> 3, _ &= (1 << (x -= k << 3)) - 1, a.next_in = u, a.next_out = f, a.avail_in = u < c ? c - u + 5 : 5 - (u - c), a.avail_out = f < d ? d - f + 257 : 257 - (f - d), s.hold = _, s.bits = x;
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
          var L;
          return E && E.state ? (L = E.state, E.total_in = E.total_out = L.total = 0, E.msg = "", L.wrap && (E.adler = 1 & L.wrap), L.mode = m, L.last = 0, L.havedict = 0, L.dmax = 32768, L.head = null, L.hold = 0, L.bits = 0, L.lencode = L.lendyn = new a.Buf32(p), L.distcode = L.distdyn = new a.Buf32(b), L.sane = 1, L.back = -1, d) : h;
        }
        function O(E) {
          var L;
          return E && E.state ? ((L = E.state).wsize = 0, L.whave = 0, L.wnext = 0, x(E)) : h;
        }
        function C(E, L) {
          var v, z;
          return E && E.state ? (z = E.state, L < 0 ? (v = 0, L = -L) : (v = 1 + (L >> 4), L < 48 && (L &= 15)), L && (L < 8 || 15 < L) ? h : (z.window !== null && z.wbits !== L && (z.window = null), z.wrap = v, z.wbits = L, O(E))) : h;
        }
        function B(E, L) {
          var v, z;
          return E ? (z = new _(), (E.state = z).window = null, (v = C(E, L)) !== d && (E.state = null), v) : h;
        }
        var I, S, w = !0;
        function k(E) {
          if (w) {
            var L;
            for (I = new a.Buf32(512), S = new a.Buf32(32), L = 0; L < 144; ) E.lens[L++] = 8;
            for (; L < 256; ) E.lens[L++] = 9;
            for (; L < 280; ) E.lens[L++] = 7;
            for (; L < 288; ) E.lens[L++] = 8;
            for (c(f, E.lens, 0, 288, I, 0, E.work, { bits: 9 }), L = 0; L < 32; ) E.lens[L++] = 5;
            c(l, E.lens, 0, 32, S, 0, E.work, { bits: 5 }), w = !1;
          }
          E.lencode = I, E.lenbits = 9, E.distcode = S, E.distbits = 5;
        }
        function q(E, L, v, z) {
          var ie, D = E.state;
          return D.window === null && (D.wsize = 1 << D.wbits, D.wnext = 0, D.whave = 0, D.window = new a.Buf8(D.wsize)), z >= D.wsize ? (a.arraySet(D.window, L, v - D.wsize, D.wsize, 0), D.wnext = 0, D.whave = D.wsize) : (z < (ie = D.wsize - D.wnext) && (ie = z), a.arraySet(D.window, L, v - z, ie, D.wnext), (z -= ie) ? (a.arraySet(D.window, L, v - z, z, 0), D.wnext = z, D.whave = D.wsize) : (D.wnext += ie, D.wnext === D.wsize && (D.wnext = 0), D.whave < D.wsize && (D.whave += ie))), 0;
        }
        i.inflateReset = O, i.inflateReset2 = C, i.inflateResetKeep = x, i.inflateInit = function(E) {
          return B(E, 15);
        }, i.inflateInit2 = B, i.inflate = function(E, L) {
          var v, z, ie, D, Q, F, ee, P, M, K, te, H, pe, Ee, ce, fe, ve, le, we, xe, g, X, W, N, T = 0, j = new a.Buf8(4), re = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0) return h;
          (v = E.state).mode === 12 && (v.mode = 13), Q = E.next_out, ie = E.output, ee = E.avail_out, D = E.next_in, z = E.input, F = E.avail_in, P = v.hold, M = v.bits, K = F, te = ee, X = d;
          e: for (; ; ) switch (v.mode) {
            case m:
              if (v.wrap === 0) {
                v.mode = 13;
                break;
              }
              for (; M < 16; ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              if (2 & v.wrap && P === 35615) {
                j[v.check = 0] = 255 & P, j[1] = P >>> 8 & 255, v.check = s(v.check, j, 2, 0), M = P = 0, v.mode = 2;
                break;
              }
              if (v.flags = 0, v.head && (v.head.done = !1), !(1 & v.wrap) || (((255 & P) << 8) + (P >> 8)) % 31) {
                E.msg = "incorrect header check", v.mode = 30;
                break;
              }
              if ((15 & P) != 8) {
                E.msg = "unknown compression method", v.mode = 30;
                break;
              }
              if (M -= 4, g = 8 + (15 & (P >>>= 4)), v.wbits === 0) v.wbits = g;
              else if (g > v.wbits) {
                E.msg = "invalid window size", v.mode = 30;
                break;
              }
              v.dmax = 1 << g, E.adler = v.check = 1, v.mode = 512 & P ? 10 : 12, M = P = 0;
              break;
            case 2:
              for (; M < 16; ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              if (v.flags = P, (255 & v.flags) != 8) {
                E.msg = "unknown compression method", v.mode = 30;
                break;
              }
              if (57344 & v.flags) {
                E.msg = "unknown header flags set", v.mode = 30;
                break;
              }
              v.head && (v.head.text = P >> 8 & 1), 512 & v.flags && (j[0] = 255 & P, j[1] = P >>> 8 & 255, v.check = s(v.check, j, 2, 0)), M = P = 0, v.mode = 3;
            case 3:
              for (; M < 32; ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              v.head && (v.head.time = P), 512 & v.flags && (j[0] = 255 & P, j[1] = P >>> 8 & 255, j[2] = P >>> 16 & 255, j[3] = P >>> 24 & 255, v.check = s(v.check, j, 4, 0)), M = P = 0, v.mode = 4;
            case 4:
              for (; M < 16; ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              v.head && (v.head.xflags = 255 & P, v.head.os = P >> 8), 512 & v.flags && (j[0] = 255 & P, j[1] = P >>> 8 & 255, v.check = s(v.check, j, 2, 0)), M = P = 0, v.mode = 5;
            case 5:
              if (1024 & v.flags) {
                for (; M < 16; ) {
                  if (F === 0) break e;
                  F--, P += z[D++] << M, M += 8;
                }
                v.length = P, v.head && (v.head.extra_len = P), 512 & v.flags && (j[0] = 255 & P, j[1] = P >>> 8 & 255, v.check = s(v.check, j, 2, 0)), M = P = 0;
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
                  F--, P += z[D++] << M, M += 8;
                }
                if (P !== (65535 & v.check)) {
                  E.msg = "header crc mismatch", v.mode = 30;
                  break;
                }
                M = P = 0;
              }
              v.head && (v.head.hcrc = v.flags >> 9 & 1, v.head.done = !0), E.adler = v.check = 0, v.mode = 12;
              break;
            case 10:
              for (; M < 32; ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              E.adler = v.check = y(P), M = P = 0, v.mode = 11;
            case 11:
              if (v.havedict === 0) return E.next_out = Q, E.avail_out = ee, E.next_in = D, E.avail_in = F, v.hold = P, v.bits = M, 2;
              E.adler = v.check = 1, v.mode = 12;
            case 12:
              if (L === 5 || L === 6) break e;
            case 13:
              if (v.last) {
                P >>>= 7 & M, M -= 7 & M, v.mode = 27;
                break;
              }
              for (; M < 3; ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              switch (v.last = 1 & P, M -= 1, 3 & (P >>>= 1)) {
                case 0:
                  v.mode = 14;
                  break;
                case 1:
                  if (k(v), v.mode = 20, L !== 6) break;
                  P >>>= 2, M -= 2;
                  break e;
                case 2:
                  v.mode = 17;
                  break;
                case 3:
                  E.msg = "invalid block type", v.mode = 30;
              }
              P >>>= 2, M -= 2;
              break;
            case 14:
              for (P >>>= 7 & M, M -= 7 & M; M < 32; ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              if ((65535 & P) != (P >>> 16 ^ 65535)) {
                E.msg = "invalid stored block lengths", v.mode = 30;
                break;
              }
              if (v.length = 65535 & P, M = P = 0, v.mode = 15, L === 6) break e;
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
                F--, P += z[D++] << M, M += 8;
              }
              if (v.nlen = 257 + (31 & P), P >>>= 5, M -= 5, v.ndist = 1 + (31 & P), P >>>= 5, M -= 5, v.ncode = 4 + (15 & P), P >>>= 4, M -= 4, 286 < v.nlen || 30 < v.ndist) {
                E.msg = "too many length or distance symbols", v.mode = 30;
                break;
              }
              v.have = 0, v.mode = 18;
            case 18:
              for (; v.have < v.ncode; ) {
                for (; M < 3; ) {
                  if (F === 0) break e;
                  F--, P += z[D++] << M, M += 8;
                }
                v.lens[re[v.have++]] = 7 & P, P >>>= 3, M -= 3;
              }
              for (; v.have < 19; ) v.lens[re[v.have++]] = 0;
              if (v.lencode = v.lendyn, v.lenbits = 7, W = { bits: v.lenbits }, X = c(0, v.lens, 0, 19, v.lencode, 0, v.work, W), v.lenbits = W.bits, X) {
                E.msg = "invalid code lengths set", v.mode = 30;
                break;
              }
              v.have = 0, v.mode = 19;
            case 19:
              for (; v.have < v.nlen + v.ndist; ) {
                for (; fe = (T = v.lencode[P & (1 << v.lenbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                  if (F === 0) break e;
                  F--, P += z[D++] << M, M += 8;
                }
                if (ve < 16) P >>>= ce, M -= ce, v.lens[v.have++] = ve;
                else {
                  if (ve === 16) {
                    for (N = ce + 2; M < N; ) {
                      if (F === 0) break e;
                      F--, P += z[D++] << M, M += 8;
                    }
                    if (P >>>= ce, M -= ce, v.have === 0) {
                      E.msg = "invalid bit length repeat", v.mode = 30;
                      break;
                    }
                    g = v.lens[v.have - 1], H = 3 + (3 & P), P >>>= 2, M -= 2;
                  } else if (ve === 17) {
                    for (N = ce + 3; M < N; ) {
                      if (F === 0) break e;
                      F--, P += z[D++] << M, M += 8;
                    }
                    M -= ce, g = 0, H = 3 + (7 & (P >>>= ce)), P >>>= 3, M -= 3;
                  } else {
                    for (N = ce + 7; M < N; ) {
                      if (F === 0) break e;
                      F--, P += z[D++] << M, M += 8;
                    }
                    M -= ce, g = 0, H = 11 + (127 & (P >>>= ce)), P >>>= 7, M -= 7;
                  }
                  if (v.have + H > v.nlen + v.ndist) {
                    E.msg = "invalid bit length repeat", v.mode = 30;
                    break;
                  }
                  for (; H--; ) v.lens[v.have++] = g;
                }
              }
              if (v.mode === 30) break;
              if (v.lens[256] === 0) {
                E.msg = "invalid code -- missing end-of-block", v.mode = 30;
                break;
              }
              if (v.lenbits = 9, W = { bits: v.lenbits }, X = c(f, v.lens, 0, v.nlen, v.lencode, 0, v.work, W), v.lenbits = W.bits, X) {
                E.msg = "invalid literal/lengths set", v.mode = 30;
                break;
              }
              if (v.distbits = 6, v.distcode = v.distdyn, W = { bits: v.distbits }, X = c(l, v.lens, v.nlen, v.ndist, v.distcode, 0, v.work, W), v.distbits = W.bits, X) {
                E.msg = "invalid distances set", v.mode = 30;
                break;
              }
              if (v.mode = 20, L === 6) break e;
            case 20:
              v.mode = 21;
            case 21:
              if (6 <= F && 258 <= ee) {
                E.next_out = Q, E.avail_out = ee, E.next_in = D, E.avail_in = F, v.hold = P, v.bits = M, u(E, te), Q = E.next_out, ie = E.output, ee = E.avail_out, D = E.next_in, z = E.input, F = E.avail_in, P = v.hold, M = v.bits, v.mode === 12 && (v.back = -1);
                break;
              }
              for (v.back = 0; fe = (T = v.lencode[P & (1 << v.lenbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              if (fe && (240 & fe) == 0) {
                for (le = ce, we = fe, xe = ve; fe = (T = v.lencode[xe + ((P & (1 << le + we) - 1) >> le)]) >>> 16 & 255, ve = 65535 & T, !(le + (ce = T >>> 24) <= M); ) {
                  if (F === 0) break e;
                  F--, P += z[D++] << M, M += 8;
                }
                P >>>= le, M -= le, v.back += le;
              }
              if (P >>>= ce, M -= ce, v.back += ce, v.length = ve, fe === 0) {
                v.mode = 26;
                break;
              }
              if (32 & fe) {
                v.back = -1, v.mode = 12;
                break;
              }
              if (64 & fe) {
                E.msg = "invalid literal/length code", v.mode = 30;
                break;
              }
              v.extra = 15 & fe, v.mode = 22;
            case 22:
              if (v.extra) {
                for (N = v.extra; M < N; ) {
                  if (F === 0) break e;
                  F--, P += z[D++] << M, M += 8;
                }
                v.length += P & (1 << v.extra) - 1, P >>>= v.extra, M -= v.extra, v.back += v.extra;
              }
              v.was = v.length, v.mode = 23;
            case 23:
              for (; fe = (T = v.distcode[P & (1 << v.distbits) - 1]) >>> 16 & 255, ve = 65535 & T, !((ce = T >>> 24) <= M); ) {
                if (F === 0) break e;
                F--, P += z[D++] << M, M += 8;
              }
              if ((240 & fe) == 0) {
                for (le = ce, we = fe, xe = ve; fe = (T = v.distcode[xe + ((P & (1 << le + we) - 1) >> le)]) >>> 16 & 255, ve = 65535 & T, !(le + (ce = T >>> 24) <= M); ) {
                  if (F === 0) break e;
                  F--, P += z[D++] << M, M += 8;
                }
                P >>>= le, M -= le, v.back += le;
              }
              if (P >>>= ce, M -= ce, v.back += ce, 64 & fe) {
                E.msg = "invalid distance code", v.mode = 30;
                break;
              }
              v.offset = ve, v.extra = 15 & fe, v.mode = 24;
            case 24:
              if (v.extra) {
                for (N = v.extra; M < N; ) {
                  if (F === 0) break e;
                  F--, P += z[D++] << M, M += 8;
                }
                v.offset += P & (1 << v.extra) - 1, P >>>= v.extra, M -= v.extra, v.back += v.extra;
              }
              if (v.offset > v.dmax) {
                E.msg = "invalid distance too far back", v.mode = 30;
                break;
              }
              v.mode = 25;
            case 25:
              if (ee === 0) break e;
              if (H = te - ee, v.offset > H) {
                if ((H = v.offset - H) > v.whave && v.sane) {
                  E.msg = "invalid distance too far back", v.mode = 30;
                  break;
                }
                pe = H > v.wnext ? (H -= v.wnext, v.wsize - H) : v.wnext - H, H > v.length && (H = v.length), Ee = v.window;
              } else Ee = ie, pe = Q - v.offset, H = v.length;
              for (ee < H && (H = ee), ee -= H, v.length -= H; ie[Q++] = Ee[pe++], --H; ) ;
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
                  F--, P |= z[D++] << M, M += 8;
                }
                if (te -= ee, E.total_out += te, v.total += te, te && (E.adler = v.check = v.flags ? s(v.check, ie, te, Q - te) : o(v.check, ie, te, Q - te)), te = ee, (v.flags ? P : y(P)) !== v.check) {
                  E.msg = "incorrect data check", v.mode = 30;
                  break;
                }
                M = P = 0;
              }
              v.mode = 28;
            case 28:
              if (v.wrap && v.flags) {
                for (; M < 32; ) {
                  if (F === 0) break e;
                  F--, P += z[D++] << M, M += 8;
                }
                if (P !== (4294967295 & v.total)) {
                  E.msg = "incorrect length check", v.mode = 30;
                  break;
                }
                M = P = 0;
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
          return E.next_out = Q, E.avail_out = ee, E.next_in = D, E.avail_in = F, v.hold = P, v.bits = M, (v.wsize || te !== E.avail_out && v.mode < 30 && (v.mode < 27 || L !== 4)) && q(E, E.output, E.next_out, te - E.avail_out) ? (v.mode = 31, -4) : (K -= E.avail_in, te -= E.avail_out, E.total_in += K, E.total_out += te, v.total += te, v.wrap && te && (E.adler = v.check = v.flags ? s(v.check, ie, te, E.next_out - te) : o(v.check, ie, te, E.next_out - te)), E.data_type = v.bits + (v.last ? 64 : 0) + (v.mode === 12 ? 128 : 0) + (v.mode === 20 || v.mode === 15 ? 256 : 0), (K == 0 && te === 0 || L === 4) && X === d && (X = -5), X);
        }, i.inflateEnd = function(E) {
          if (!E || !E.state) return h;
          var L = E.state;
          return L.window && (L.window = null), E.state = null, d;
        }, i.inflateGetHeader = function(E, L) {
          var v;
          return E && E.state ? (2 & (v = E.state).wrap) == 0 ? h : ((v.head = L).done = !1, d) : h;
        }, i.inflateSetDictionary = function(E, L) {
          var v, z = L.length;
          return E && E.state ? (v = E.state).wrap !== 0 && v.mode !== 11 ? h : v.mode === 11 && o(1, L, z, 0) !== v.check ? -3 : q(E, L, z, z) ? (v.mode = 31, -4) : (v.havedict = 1, d) : h;
        }, i.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, n, i) {
        var a = r("../utils/common"), o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        n.exports = function(f, l, d, h, m, p, b, y) {
          var _, x, O, C, B, I, S, w, k, q = y.bits, E = 0, L = 0, v = 0, z = 0, ie = 0, D = 0, Q = 0, F = 0, ee = 0, P = 0, M = null, K = 0, te = new a.Buf16(16), H = new a.Buf16(16), pe = null, Ee = 0;
          for (E = 0; E <= 15; E++) te[E] = 0;
          for (L = 0; L < h; L++) te[l[d + L]]++;
          for (ie = q, z = 15; 1 <= z && te[z] === 0; z--) ;
          if (z < ie && (ie = z), z === 0) return m[p++] = 20971520, m[p++] = 20971520, y.bits = 1, 0;
          for (v = 1; v < z && te[v] === 0; v++) ;
          for (ie < v && (ie = v), E = F = 1; E <= 15; E++) if (F <<= 1, (F -= te[E]) < 0) return -1;
          if (0 < F && (f === 0 || z !== 1)) return -1;
          for (H[1] = 0, E = 1; E < 15; E++) H[E + 1] = H[E] + te[E];
          for (L = 0; L < h; L++) l[d + L] !== 0 && (b[H[l[d + L]]++] = L);
          if (I = f === 0 ? (M = pe = b, 19) : f === 1 ? (M = o, K -= 257, pe = s, Ee -= 257, 256) : (M = u, pe = c, -1), E = v, B = p, Q = L = P = 0, O = -1, C = (ee = 1 << (D = ie)) - 1, f === 1 && 852 < ee || f === 2 && 592 < ee) return 1;
          for (; ; ) {
            for (S = E - Q, k = b[L] < I ? (w = 0, b[L]) : b[L] > I ? (w = pe[Ee + b[L]], M[K + b[L]]) : (w = 96, 0), _ = 1 << E - Q, v = x = 1 << D; m[B + (P >> Q) + (x -= _)] = S << 24 | w << 16 | k | 0, x !== 0; ) ;
            for (_ = 1 << E - 1; P & _; ) _ >>= 1;
            if (_ !== 0 ? (P &= _ - 1, P += _) : P = 0, L++, --te[E] == 0) {
              if (E === z) break;
              E = l[d + b[L]];
            }
            if (ie < E && (P & C) !== O) {
              for (Q === 0 && (Q = ie), B += v, F = 1 << (D = E - Q); D + Q < z && !((F -= te[D + Q]) <= 0); ) D++, F <<= 1;
              if (ee += 1 << D, f === 1 && 852 < ee || f === 2 && 592 < ee) return 1;
              m[O = P & C] = ie << 24 | D << 16 | B - p | 0;
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
        var c = 0, f = 29, l = 256, d = l + 1 + f, h = 30, m = 19, p = 2 * d + 1, b = 15, y = 16, _ = 7, x = 256, O = 16, C = 17, B = 18, I = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], k = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], q = new Array(2 * (d + 2));
        u(q);
        var E = new Array(2 * h);
        u(E);
        var L = new Array(512);
        u(L);
        var v = new Array(256);
        u(v);
        var z = new Array(f);
        u(z);
        var ie, D, Q, F = new Array(h);
        function ee(T, j, re, ne, G) {
          this.static_tree = T, this.extra_bits = j, this.extra_base = re, this.elems = ne, this.max_length = G, this.has_stree = T && T.length;
        }
        function P(T, j) {
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
        function Ee(T, j, re) {
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
          T.dyn_ltree[2 * x] = 1, T.opt_len = T.static_len = 0, T.last_lit = T.matches = 0;
        }
        function fe(T) {
          8 < T.bi_valid ? K(T, T.bi_buf) : 0 < T.bi_valid && (T.pending_buf[T.pending++] = T.bi_buf), T.bi_buf = 0, T.bi_valid = 0;
        }
        function ve(T, j, re, ne) {
          var G = 2 * j, V = 2 * re;
          return T[G] < T[V] || T[G] === T[V] && ne[j] <= ne[re];
        }
        function le(T, j, re) {
          for (var ne = T.heap[re], G = re << 1; G <= T.heap_len && (G < T.heap_len && ve(j, T.heap[G + 1], T.heap[G], T.depth) && G++, !ve(j, ne, T.heap[G], T.depth)); ) T.heap[re] = T.heap[G], re = G, G <<= 1;
          T.heap[re] = ne;
        }
        function we(T, j, re) {
          var ne, G, V, J, Z = 0;
          if (T.last_lit !== 0) for (; ne = T.pending_buf[T.d_buf + 2 * Z] << 8 | T.pending_buf[T.d_buf + 2 * Z + 1], G = T.pending_buf[T.l_buf + Z], Z++, ne === 0 ? H(T, G, j) : (H(T, (V = v[G]) + l + 1, j), (J = I[V]) !== 0 && te(T, G -= z[V], J), H(T, V = M(--ne), re), (J = S[V]) !== 0 && te(T, ne -= F[V], J)), Z < T.last_lit; ) ;
          H(T, x, j);
        }
        function xe(T, j) {
          var re, ne, G, V = j.dyn_tree, J = j.stat_desc.static_tree, Z = j.stat_desc.has_stree, ae = j.stat_desc.elems, de = -1;
          for (T.heap_len = 0, T.heap_max = p, re = 0; re < ae; re++) V[2 * re] !== 0 ? (T.heap[++T.heap_len] = de = re, T.depth[re] = 0) : V[2 * re + 1] = 0;
          for (; T.heap_len < 2; ) V[2 * (G = T.heap[++T.heap_len] = de < 2 ? ++de : 0)] = 1, T.depth[G] = 0, T.opt_len--, Z && (T.static_len -= J[2 * G + 1]);
          for (j.max_code = de, re = T.heap_len >> 1; 1 <= re; re--) le(T, V, re);
          for (G = ae; re = T.heap[1], T.heap[1] = T.heap[T.heap_len--], le(T, V, 1), ne = T.heap[1], T.heap[--T.heap_max] = re, T.heap[--T.heap_max] = ne, V[2 * G] = V[2 * re] + V[2 * ne], T.depth[G] = (T.depth[re] >= T.depth[ne] ? T.depth[re] : T.depth[ne]) + 1, V[2 * re + 1] = V[2 * ne + 1] = G, T.heap[1] = G++, le(T, V, 1), 2 <= T.heap_len; ) ;
          T.heap[--T.heap_max] = T.heap[1], function(_e, Fe) {
            var Ve, Ne, Le, Ce, He, Ft, pt = Fe.dyn_tree, Lr = Fe.max_code, xa = Fe.stat_desc.static_tree, Br = Fe.stat_desc.has_stree, jr = Fe.stat_desc.extra_bits, ei = Fe.stat_desc.extra_base, xt = Fe.stat_desc.max_length, zr = 0;
            for (Ce = 0; Ce <= b; Ce++) _e.bl_count[Ce] = 0;
            for (pt[2 * _e.heap[_e.heap_max] + 1] = 0, Ve = _e.heap_max + 1; Ve < p; Ve++) xt < (Ce = pt[2 * pt[2 * (Ne = _e.heap[Ve]) + 1] + 1] + 1) && (Ce = xt, zr++), pt[2 * Ne + 1] = Ce, Lr < Ne || (_e.bl_count[Ce]++, He = 0, ei <= Ne && (He = jr[Ne - ei]), Ft = pt[2 * Ne], _e.opt_len += Ft * (Ce + He), Br && (_e.static_len += Ft * (xa[2 * Ne + 1] + He)));
            if (zr !== 0) {
              do {
                for (Ce = xt - 1; _e.bl_count[Ce] === 0; ) Ce--;
                _e.bl_count[Ce]--, _e.bl_count[Ce + 1] += 2, _e.bl_count[xt]--, zr -= 2;
              } while (0 < zr);
              for (Ce = xt; Ce !== 0; Ce--) for (Ne = _e.bl_count[Ce]; Ne !== 0; ) Lr < (Le = _e.heap[--Ve]) || (pt[2 * Le + 1] !== Ce && (_e.opt_len += (Ce - pt[2 * Le + 1]) * pt[2 * Le], pt[2 * Le + 1] = Ce), Ne--);
            }
          }(T, j), Ee(V, de, T.bl_count);
        }
        function g(T, j, re) {
          var ne, G, V = -1, J = j[1], Z = 0, ae = 7, de = 4;
          for (J === 0 && (ae = 138, de = 3), j[2 * (re + 1) + 1] = 65535, ne = 0; ne <= re; ne++) G = J, J = j[2 * (ne + 1) + 1], ++Z < ae && G === J || (Z < de ? T.bl_tree[2 * G] += Z : G !== 0 ? (G !== V && T.bl_tree[2 * G]++, T.bl_tree[2 * O]++) : Z <= 10 ? T.bl_tree[2 * C]++ : T.bl_tree[2 * B]++, V = G, de = (Z = 0) === J ? (ae = 138, 3) : G === J ? (ae = 6, 3) : (ae = 7, 4));
        }
        function X(T, j, re) {
          var ne, G, V = -1, J = j[1], Z = 0, ae = 7, de = 4;
          for (J === 0 && (ae = 138, de = 3), ne = 0; ne <= re; ne++) if (G = J, J = j[2 * (ne + 1) + 1], !(++Z < ae && G === J)) {
            if (Z < de) for (; H(T, G, T.bl_tree), --Z != 0; ) ;
            else G !== 0 ? (G !== V && (H(T, G, T.bl_tree), Z--), H(T, O, T.bl_tree), te(T, Z - 3, 2)) : Z <= 10 ? (H(T, C, T.bl_tree), te(T, Z - 3, 3)) : (H(T, B, T.bl_tree), te(T, Z - 11, 7));
            V = G, de = (Z = 0) === J ? (ae = 138, 3) : G === J ? (ae = 6, 3) : (ae = 7, 4);
          }
        }
        u(F);
        var W = !1;
        function N(T, j, re, ne) {
          te(T, (c << 1) + (ne ? 1 : 0), 3), function(G, V, J, Z) {
            fe(G), K(G, J), K(G, ~J), a.arraySet(G.pending_buf, G.window, V, J, G.pending), G.pending += J;
          }(T, j, re);
        }
        i._tr_init = function(T) {
          W || (function() {
            var j, re, ne, G, V, J = new Array(b + 1);
            for (G = ne = 0; G < f - 1; G++) for (z[G] = ne, j = 0; j < 1 << I[G]; j++) v[ne++] = G;
            for (v[ne - 1] = G, G = V = 0; G < 16; G++) for (F[G] = V, j = 0; j < 1 << S[G]; j++) L[V++] = G;
            for (V >>= 7; G < h; G++) for (F[G] = V << 7, j = 0; j < 1 << S[G] - 7; j++) L[256 + V++] = G;
            for (re = 0; re <= b; re++) J[re] = 0;
            for (j = 0; j <= 143; ) q[2 * j + 1] = 8, j++, J[8]++;
            for (; j <= 255; ) q[2 * j + 1] = 9, j++, J[9]++;
            for (; j <= 279; ) q[2 * j + 1] = 7, j++, J[7]++;
            for (; j <= 287; ) q[2 * j + 1] = 8, j++, J[8]++;
            for (Ee(q, d + 1, J), j = 0; j < h; j++) E[2 * j + 1] = 5, E[2 * j] = pe(j, 5);
            ie = new ee(q, I, l + 1, d, b), D = new ee(E, S, 0, h, b), Q = new ee(new Array(0), w, 0, m, _);
          }(), W = !0), T.l_desc = new P(T.dyn_ltree, ie), T.d_desc = new P(T.dyn_dtree, D), T.bl_desc = new P(T.bl_tree, Q), T.bi_buf = 0, T.bi_valid = 0, ce(T);
        }, i._tr_stored_block = N, i._tr_flush_block = function(T, j, re, ne) {
          var G, V, J = 0;
          0 < T.level ? (T.strm.data_type === 2 && (T.strm.data_type = function(Z) {
            var ae, de = 4093624447;
            for (ae = 0; ae <= 31; ae++, de >>>= 1) if (1 & de && Z.dyn_ltree[2 * ae] !== 0) return o;
            if (Z.dyn_ltree[18] !== 0 || Z.dyn_ltree[20] !== 0 || Z.dyn_ltree[26] !== 0) return s;
            for (ae = 32; ae < l; ae++) if (Z.dyn_ltree[2 * ae] !== 0) return s;
            return o;
          }(T)), xe(T, T.l_desc), xe(T, T.d_desc), J = function(Z) {
            var ae;
            for (g(Z, Z.dyn_ltree, Z.l_desc.max_code), g(Z, Z.dyn_dtree, Z.d_desc.max_code), xe(Z, Z.bl_desc), ae = m - 1; 3 <= ae && Z.bl_tree[2 * k[ae] + 1] === 0; ae--) ;
            return Z.opt_len += 3 * (ae + 1) + 5 + 5 + 4, ae;
          }(T), G = T.opt_len + 3 + 7 >>> 3, (V = T.static_len + 3 + 7 >>> 3) <= G && (G = V)) : G = V = re + 5, re + 4 <= G && j !== -1 ? N(T, j, re, ne) : T.strategy === 4 || V === G ? (te(T, 2 + (ne ? 1 : 0), 3), we(T, q, E)) : (te(T, 4 + (ne ? 1 : 0), 3), function(Z, ae, de, _e) {
            var Fe;
            for (te(Z, ae - 257, 5), te(Z, de - 1, 5), te(Z, _e - 4, 4), Fe = 0; Fe < _e; Fe++) te(Z, Z.bl_tree[2 * k[Fe] + 1], 3);
            X(Z, Z.dyn_ltree, ae - 1), X(Z, Z.dyn_dtree, de - 1);
          }(T, T.l_desc.max_code + 1, T.d_desc.max_code + 1, J + 1), we(T, T.dyn_ltree, T.dyn_dtree)), ce(T), ne && fe(T);
        }, i._tr_tally = function(T, j, re) {
          return T.pending_buf[T.d_buf + 2 * T.last_lit] = j >>> 8 & 255, T.pending_buf[T.d_buf + 2 * T.last_lit + 1] = 255 & j, T.pending_buf[T.l_buf + T.last_lit] = 255 & re, T.last_lit++, j === 0 ? T.dyn_ltree[2 * re]++ : (T.matches++, j--, T.dyn_ltree[2 * (v[re] + l + 1)]++, T.dyn_dtree[2 * M(j)]++), T.last_lit === T.lit_bufsize - 1;
        }, i._tr_align = function(T) {
          te(T, 2, 3), H(T, x, q), function(j) {
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
              }() ? (l = "setImmediate$" + Math.random() + "$", o.addEventListener ? o.addEventListener("message", x, !1) : o.attachEvent("onmessage", x), function(O) {
                o.postMessage(l + O, "*");
              }) : o.MessageChannel ? ((f = new MessageChannel()).port1.onmessage = function(O) {
                _(O.data);
              }, function(O) {
                f.port2.postMessage(O);
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
            function x(O) {
              O.source === o && typeof O.data == "string" && O.data.indexOf(l) === 0 && _(+O.data.slice(l.length));
            }
          })(typeof self > "u" ? a === void 0 ? this : a : self);
        }).call(this, typeof xr < "u" ? xr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }(Za)), Za.exports;
}
var pE = dE();
const JO = /* @__PURE__ */ rn(pE);
var Bh = {}, jh = {}, yn, zh;
function ze() {
  if (zh) return yn;
  zh = 1;
  var e = function(t) {
    return t && t.Math === Math && t;
  };
  return yn = // eslint-disable-next-line es/no-global-this -- safe
  e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  e(typeof self == "object" && self) || e(typeof xr == "object" && xr) || e(typeof yn == "object" && yn) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")(), yn;
}
var Ja = {}, Qa, qh;
function qe() {
  return qh || (qh = 1, Qa = function(e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  }), Qa;
}
var es, Uh;
function Pt() {
  if (Uh) return es;
  Uh = 1;
  var e = qe();
  return es = !e(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  }), es;
}
var ts, $h;
function aa() {
  if ($h) return ts;
  $h = 1;
  var e = qe();
  return ts = !e(function() {
    var t = (function() {
    }).bind();
    return typeof t != "function" || t.hasOwnProperty("prototype");
  }), ts;
}
var rs, Wh;
function et() {
  if (Wh) return rs;
  Wh = 1;
  var e = aa(), t = Function.prototype.call;
  return rs = e ? t.bind(t) : function() {
    return t.apply(t, arguments);
  }, rs;
}
var ns = {}, Gh;
function mE() {
  if (Gh) return ns;
  Gh = 1;
  var e = {}.propertyIsEnumerable, t = Object.getOwnPropertyDescriptor, r = t && !e.call({ 1: 2 }, 1);
  return ns.f = r ? function(i) {
    var a = t(this, i);
    return !!a && a.enumerable;
  } : e, ns;
}
var is, Vh;
function Ml() {
  return Vh || (Vh = 1, is = function(e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t
    };
  }), is;
}
var as, Hh;
function Ue() {
  if (Hh) return as;
  Hh = 1;
  var e = aa(), t = Function.prototype, r = t.call, n = e && t.bind.bind(r, r);
  return as = e ? n : function(i) {
    return function() {
      return r.apply(i, arguments);
    };
  }, as;
}
var ss, Kh;
function Mr() {
  if (Kh) return ss;
  Kh = 1;
  var e = Ue(), t = e({}.toString), r = e("".slice);
  return ss = function(n) {
    return r(t(n), 8, -1);
  }, ss;
}
var os, Yh;
function Sy() {
  if (Yh) return os;
  Yh = 1;
  var e = Ue(), t = qe(), r = Mr(), n = Object, i = e("".split);
  return os = t(function() {
    return !n("z").propertyIsEnumerable(0);
  }) ? function(a) {
    return r(a) === "String" ? i(a, "") : n(a);
  } : n, os;
}
var us, Xh;
function sa() {
  return Xh || (Xh = 1, us = function(e) {
    return e == null;
  }), us;
}
var cs, Zh;
function Mt() {
  if (Zh) return cs;
  Zh = 1;
  var e = sa(), t = TypeError;
  return cs = function(r) {
    if (e(r)) throw new t("Can't call method on " + r);
    return r;
  }, cs;
}
var ls, Jh;
function Wn() {
  if (Jh) return ls;
  Jh = 1;
  var e = Sy(), t = Mt();
  return ls = function(r) {
    return e(t(r));
  }, ls;
}
var fs, Qh;
function $e() {
  if (Qh) return fs;
  Qh = 1;
  var e = typeof document == "object" && document.all;
  return fs = typeof e > "u" && e !== void 0 ? function(t) {
    return typeof t == "function" || t === e;
  } : function(t) {
    return typeof t == "function";
  }, fs;
}
var hs, ed;
function dt() {
  if (ed) return hs;
  ed = 1;
  var e = $e();
  return hs = function(t) {
    return typeof t == "object" ? t !== null : e(t);
  }, hs;
}
var ds, td;
function Dr() {
  if (td) return ds;
  td = 1;
  var e = ze(), t = $e(), r = function(n) {
    return t(n) ? n : void 0;
  };
  return ds = function(n, i) {
    return arguments.length < 2 ? r(e[n]) : e[n] && e[n][i];
  }, ds;
}
var ps, rd;
function oa() {
  if (rd) return ps;
  rd = 1;
  var e = Ue();
  return ps = e({}.isPrototypeOf), ps;
}
var ms, nd;
function Gn() {
  if (nd) return ms;
  nd = 1;
  var e = ze(), t = e.navigator, r = t && t.userAgent;
  return ms = r ? String(r) : "", ms;
}
var gs, id;
function Dl() {
  if (id) return gs;
  id = 1;
  var e = ze(), t = Gn(), r = e.process, n = e.Deno, i = r && r.versions || n && n.version, a = i && i.v8, o, s;
  return a && (o = a.split("."), s = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !s && t && (o = t.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = t.match(/Chrome\/(\d+)/), o && (s = +o[1]))), gs = s, gs;
}
var vs, ad;
function Oy() {
  if (ad) return vs;
  ad = 1;
  var e = Dl(), t = qe(), r = ze(), n = r.String;
  return vs = !!Object.getOwnPropertySymbols && !t(function() {
    var i = Symbol("symbol detection");
    return !n(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && e && e < 41;
  }), vs;
}
var ys, sd;
function Ty() {
  if (sd) return ys;
  sd = 1;
  var e = Oy();
  return ys = e && !Symbol.sham && typeof Symbol.iterator == "symbol", ys;
}
var bs, od;
function Cy() {
  if (od) return bs;
  od = 1;
  var e = Dr(), t = $e(), r = oa(), n = Ty(), i = Object;
  return bs = n ? function(a) {
    return typeof a == "symbol";
  } : function(a) {
    var o = e("Symbol");
    return t(o) && r(o.prototype, i(a));
  }, bs;
}
var _s, ud;
function ua() {
  if (ud) return _s;
  ud = 1;
  var e = String;
  return _s = function(t) {
    try {
      return e(t);
    } catch {
      return "Object";
    }
  }, _s;
}
var ws, cd;
function ir() {
  if (cd) return ws;
  cd = 1;
  var e = $e(), t = ua(), r = TypeError;
  return ws = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a function");
  }, ws;
}
var xs, ld;
function an() {
  if (ld) return xs;
  ld = 1;
  var e = ir(), t = sa();
  return xs = function(r, n) {
    var i = r[n];
    return t(i) ? void 0 : e(i);
  }, xs;
}
var Es, fd;
function gE() {
  if (fd) return Es;
  fd = 1;
  var e = et(), t = $e(), r = dt(), n = TypeError;
  return Es = function(i, a) {
    var o, s;
    if (a === "string" && t(o = i.toString) && !r(s = e(o, i)) || t(o = i.valueOf) && !r(s = e(o, i)) || a !== "string" && t(o = i.toString) && !r(s = e(o, i))) return s;
    throw new n("Can't convert object to primitive value");
  }, Es;
}
var Ss = { exports: {} }, Os, hd;
function Ht() {
  return hd || (hd = 1, Os = !1), Os;
}
var Ts, dd;
function Fl() {
  if (dd) return Ts;
  dd = 1;
  var e = ze(), t = Object.defineProperty;
  return Ts = function(r, n) {
    try {
      t(e, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      e[r] = n;
    }
    return n;
  }, Ts;
}
var pd;
function Ll() {
  if (pd) return Ss.exports;
  pd = 1;
  var e = Ht(), t = ze(), r = Fl(), n = "__core-js_shared__", i = Ss.exports = t[n] || r(n, {});
  return (i.versions || (i.versions = [])).push({
    version: "3.42.0",
    mode: e ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Ss.exports;
}
var Cs, md;
function Bl() {
  if (md) return Cs;
  md = 1;
  var e = Ll();
  return Cs = function(t, r) {
    return e[t] || (e[t] = r || {});
  }, Cs;
}
var As, gd;
function ca() {
  if (gd) return As;
  gd = 1;
  var e = Mt(), t = Object;
  return As = function(r) {
    return t(e(r));
  }, As;
}
var Rs, vd;
function Dt() {
  if (vd) return Rs;
  vd = 1;
  var e = Ue(), t = ca(), r = e({}.hasOwnProperty);
  return Rs = Object.hasOwn || function(i, a) {
    return r(t(i), a);
  }, Rs;
}
var Is, yd;
function Ay() {
  if (yd) return Is;
  yd = 1;
  var e = Ue(), t = 0, r = Math.random(), n = e(1 .toString);
  return Is = function(i) {
    return "Symbol(" + (i === void 0 ? "" : i) + ")_" + n(++t + r, 36);
  }, Is;
}
var ks, bd;
function Ze() {
  if (bd) return ks;
  bd = 1;
  var e = ze(), t = Bl(), r = Dt(), n = Ay(), i = Oy(), a = Ty(), o = e.Symbol, s = t("wks"), u = a ? o.for || o : o && o.withoutSetter || n;
  return ks = function(c) {
    return r(s, c) || (s[c] = i && r(o, c) ? o[c] : u("Symbol." + c)), s[c];
  }, ks;
}
var Ns, _d;
function vE() {
  if (_d) return Ns;
  _d = 1;
  var e = et(), t = dt(), r = Cy(), n = an(), i = gE(), a = Ze(), o = TypeError, s = a("toPrimitive");
  return Ns = function(u, c) {
    if (!t(u) || r(u)) return u;
    var f = n(u, s), l;
    if (f) {
      if (c === void 0 && (c = "default"), l = e(f, u, c), !t(l) || r(l)) return l;
      throw new o("Can't convert object to primitive value");
    }
    return c === void 0 && (c = "number"), i(u, c);
  }, Ns;
}
var Ps, wd;
function Ry() {
  if (wd) return Ps;
  wd = 1;
  var e = vE(), t = Cy();
  return Ps = function(r) {
    var n = e(r, "string");
    return t(n) ? n : n + "";
  }, Ps;
}
var Ms, xd;
function la() {
  if (xd) return Ms;
  xd = 1;
  var e = ze(), t = dt(), r = e.document, n = t(r) && t(r.createElement);
  return Ms = function(i) {
    return n ? r.createElement(i) : {};
  }, Ms;
}
var Ds, Ed;
function Iy() {
  if (Ed) return Ds;
  Ed = 1;
  var e = Pt(), t = qe(), r = la();
  return Ds = !e && !t(function() {
    return Object.defineProperty(r("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  }), Ds;
}
var Sd;
function fa() {
  if (Sd) return Ja;
  Sd = 1;
  var e = Pt(), t = et(), r = mE(), n = Ml(), i = Wn(), a = Ry(), o = Dt(), s = Iy(), u = Object.getOwnPropertyDescriptor;
  return Ja.f = e ? u : function(f, l) {
    if (f = i(f), l = a(l), s) try {
      return u(f, l);
    } catch {
    }
    if (o(f, l)) return n(!t(r.f, f, l), f[l]);
  }, Ja;
}
var Fs = {}, Ls, Od;
function ky() {
  if (Od) return Ls;
  Od = 1;
  var e = Pt(), t = qe();
  return Ls = e && t(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), Ls;
}
var Bs, Td;
function ct() {
  if (Td) return Bs;
  Td = 1;
  var e = dt(), t = String, r = TypeError;
  return Bs = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not an object");
  }, Bs;
}
var Cd;
function vr() {
  if (Cd) return Fs;
  Cd = 1;
  var e = Pt(), t = Iy(), r = ky(), n = ct(), i = Ry(), a = TypeError, o = Object.defineProperty, s = Object.getOwnPropertyDescriptor, u = "enumerable", c = "configurable", f = "writable";
  return Fs.f = e ? r ? function(d, h, m) {
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
  }, Fs;
}
var js, Ad;
function Vn() {
  if (Ad) return js;
  Ad = 1;
  var e = Pt(), t = vr(), r = Ml();
  return js = e ? function(n, i, a) {
    return t.f(n, i, r(1, a));
  } : function(n, i, a) {
    return n[i] = a, n;
  }, js;
}
var zs = { exports: {} }, qs, Rd;
function ha() {
  if (Rd) return qs;
  Rd = 1;
  var e = Pt(), t = Dt(), r = Function.prototype, n = e && Object.getOwnPropertyDescriptor, i = t(r, "name"), a = i && (function() {
  }).name === "something", o = i && (!e || e && n(r, "name").configurable);
  return qs = {
    EXISTS: i,
    PROPER: a,
    CONFIGURABLE: o
  }, qs;
}
var Us, Id;
function jl() {
  if (Id) return Us;
  Id = 1;
  var e = Ue(), t = $e(), r = Ll(), n = e(Function.toString);
  return t(r.inspectSource) || (r.inspectSource = function(i) {
    return n(i);
  }), Us = r.inspectSource, Us;
}
var $s, kd;
function yE() {
  if (kd) return $s;
  kd = 1;
  var e = ze(), t = $e(), r = e.WeakMap;
  return $s = t(r) && /native code/.test(String(r)), $s;
}
var Ws, Nd;
function zl() {
  if (Nd) return Ws;
  Nd = 1;
  var e = Bl(), t = Ay(), r = e("keys");
  return Ws = function(n) {
    return r[n] || (r[n] = t(n));
  }, Ws;
}
var Gs, Pd;
function ql() {
  return Pd || (Pd = 1, Gs = {}), Gs;
}
var Vs, Md;
function da() {
  if (Md) return Vs;
  Md = 1;
  var e = yE(), t = ze(), r = dt(), n = Vn(), i = Dt(), a = Ll(), o = zl(), s = ql(), u = "Object already initialized", c = t.TypeError, f = t.WeakMap, l, d, h, m = function(_) {
    return h(_) ? d(_) : l(_, {});
  }, p = function(_) {
    return function(x) {
      var O;
      if (!r(x) || (O = d(x)).type !== _)
        throw new c("Incompatible receiver, " + _ + " required");
      return O;
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
  return Vs = {
    set: l,
    get: d,
    has: h,
    enforce: m,
    getterFor: p
  }, Vs;
}
var Dd;
function Ny() {
  if (Dd) return zs.exports;
  Dd = 1;
  var e = Ue(), t = qe(), r = $e(), n = Dt(), i = Pt(), a = ha().CONFIGURABLE, o = jl(), s = da(), u = s.enforce, c = s.get, f = String, l = Object.defineProperty, d = e("".slice), h = e("".replace), m = e([].join), p = i && !t(function() {
    return l(function() {
    }, "length", { value: 8 }).length !== 8;
  }), b = String(String).split("String"), y = zs.exports = function(_, x, O) {
    d(f(x), 0, 7) === "Symbol(" && (x = "[" + h(f(x), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), O && O.getter && (x = "get " + x), O && O.setter && (x = "set " + x), (!n(_, "name") || a && _.name !== x) && (i ? l(_, "name", { value: x, configurable: !0 }) : _.name = x), p && O && n(O, "arity") && _.length !== O.arity && l(_, "length", { value: O.arity });
    try {
      O && n(O, "constructor") && O.constructor ? i && l(_, "prototype", { writable: !1 }) : _.prototype && (_.prototype = void 0);
    } catch {
    }
    var C = u(_);
    return n(C, "source") || (C.source = m(b, typeof x == "string" ? x : "")), _;
  };
  return Function.prototype.toString = y(function() {
    return r(this) && c(this).source || o(this);
  }, "toString"), zs.exports;
}
var Hs, Fd;
function Fr() {
  if (Fd) return Hs;
  Fd = 1;
  var e = $e(), t = vr(), r = Ny(), n = Fl();
  return Hs = function(i, a, o, s) {
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
  }, Hs;
}
var Ks = {}, Ys, Ld;
function bE() {
  if (Ld) return Ys;
  Ld = 1;
  var e = Math.ceil, t = Math.floor;
  return Ys = Math.trunc || function(n) {
    var i = +n;
    return (i > 0 ? t : e)(i);
  }, Ys;
}
var Xs, Bd;
function pa() {
  if (Bd) return Xs;
  Bd = 1;
  var e = bE();
  return Xs = function(t) {
    var r = +t;
    return r !== r || r === 0 ? 0 : e(r);
  }, Xs;
}
var Zs, jd;
function _E() {
  if (jd) return Zs;
  jd = 1;
  var e = pa(), t = Math.max, r = Math.min;
  return Zs = function(n, i) {
    var a = e(n);
    return a < 0 ? t(a + i, 0) : r(a, i);
  }, Zs;
}
var Js, zd;
function sn() {
  if (zd) return Js;
  zd = 1;
  var e = pa(), t = Math.min;
  return Js = function(r) {
    var n = e(r);
    return n > 0 ? t(n, 9007199254740991) : 0;
  }, Js;
}
var Qs, qd;
function Ul() {
  if (qd) return Qs;
  qd = 1;
  var e = sn();
  return Qs = function(t) {
    return e(t.length);
  }, Qs;
}
var eo, Ud;
function Py() {
  if (Ud) return eo;
  Ud = 1;
  var e = Wn(), t = _E(), r = Ul(), n = function(i) {
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
  return eo = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: n(!0),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: n(!1)
  }, eo;
}
var to, $d;
function My() {
  if ($d) return to;
  $d = 1;
  var e = Ue(), t = Dt(), r = Wn(), n = Py().indexOf, i = ql(), a = e([].push);
  return to = function(o, s) {
    var u = r(o), c = 0, f = [], l;
    for (l in u) !t(i, l) && t(u, l) && a(f, l);
    for (; s.length > c; ) t(u, l = s[c++]) && (~n(f, l) || a(f, l));
    return f;
  }, to;
}
var ro, Wd;
function $l() {
  return Wd || (Wd = 1, ro = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ]), ro;
}
var Gd;
function wE() {
  if (Gd) return Ks;
  Gd = 1;
  var e = My(), t = $l(), r = t.concat("length", "prototype");
  return Ks.f = Object.getOwnPropertyNames || function(i) {
    return e(i, r);
  }, Ks;
}
var no = {}, Vd;
function xE() {
  return Vd || (Vd = 1, no.f = Object.getOwnPropertySymbols), no;
}
var io, Hd;
function EE() {
  if (Hd) return io;
  Hd = 1;
  var e = Dr(), t = Ue(), r = wE(), n = xE(), i = ct(), a = t([].concat);
  return io = e("Reflect", "ownKeys") || function(s) {
    var u = r.f(i(s)), c = n.f;
    return c ? a(u, c(s)) : u;
  }, io;
}
var ao, Kd;
function SE() {
  if (Kd) return ao;
  Kd = 1;
  var e = Dt(), t = EE(), r = fa(), n = vr();
  return ao = function(i, a, o) {
    for (var s = t(a), u = n.f, c = r.f, f = 0; f < s.length; f++) {
      var l = s[f];
      !e(i, l) && !(o && e(o, l)) && u(i, l, c(a, l));
    }
  }, ao;
}
var so, Yd;
function Dy() {
  if (Yd) return so;
  Yd = 1;
  var e = qe(), t = $e(), r = /#|\.prototype\./, n = function(u, c) {
    var f = a[i(u)];
    return f === s ? !0 : f === o ? !1 : t(c) ? e(c) : !!c;
  }, i = n.normalize = function(u) {
    return String(u).replace(r, ".").toLowerCase();
  }, a = n.data = {}, o = n.NATIVE = "N", s = n.POLYFILL = "P";
  return so = n, so;
}
var oo, Xd;
function lt() {
  if (Xd) return oo;
  Xd = 1;
  var e = ze(), t = fa().f, r = Vn(), n = Fr(), i = Fl(), a = SE(), o = Dy();
  return oo = function(s, u) {
    var c = s.target, f = s.global, l = s.stat, d, h, m, p, b, y;
    if (f ? h = e : l ? h = e[c] || i(c, {}) : h = e[c] && e[c].prototype, h) for (m in u) {
      if (b = u[m], s.dontCallGetSet ? (y = t(h, m), p = y && y.value) : p = h[m], d = o(f ? m : c + (l ? "." : "#") + m, s.forced), !d && p !== void 0) {
        if (typeof b == typeof p) continue;
        a(b, p);
      }
      (s.sham || p && p.sham) && r(b, "sham", !0), n(h, m, b, s);
    }
  }, oo;
}
var uo, Zd;
function Fy() {
  if (Zd) return uo;
  Zd = 1;
  var e = ze(), t = Gn(), r = Mr(), n = function(i) {
    return t.slice(0, i.length) === i;
  };
  return uo = function() {
    return n("Bun/") ? "BUN" : n("Cloudflare-Workers") ? "CLOUDFLARE" : n("Deno/") ? "DENO" : n("Node.js/") ? "NODE" : e.Bun && typeof Bun.version == "string" ? "BUN" : e.Deno && typeof Deno.version == "object" ? "DENO" : r(e.process) === "process" ? "NODE" : e.window && e.document ? "BROWSER" : "REST";
  }(), uo;
}
var co, Jd;
function ma() {
  if (Jd) return co;
  Jd = 1;
  var e = Fy();
  return co = e === "NODE", co;
}
var lo, Qd;
function OE() {
  if (Qd) return lo;
  Qd = 1;
  var e = Ue(), t = ir();
  return lo = function(r, n, i) {
    try {
      return e(t(Object.getOwnPropertyDescriptor(r, n)[i]));
    } catch {
    }
  }, lo;
}
var fo, ep;
function TE() {
  if (ep) return fo;
  ep = 1;
  var e = dt();
  return fo = function(t) {
    return e(t) || t === null;
  }, fo;
}
var ho, tp;
function CE() {
  if (tp) return ho;
  tp = 1;
  var e = TE(), t = String, r = TypeError;
  return ho = function(n) {
    if (e(n)) return n;
    throw new r("Can't set " + t(n) + " as a prototype");
  }, ho;
}
var po, rp;
function Ly() {
  if (rp) return po;
  rp = 1;
  var e = OE(), t = dt(), r = Mt(), n = CE();
  return po = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var i = !1, a = {}, o;
    try {
      o = e(Object.prototype, "__proto__", "set"), o(a, []), i = a instanceof Array;
    } catch {
    }
    return function(u, c) {
      return r(u), n(c), t(u) && (i ? o(u, c) : u.__proto__ = c), u;
    };
  }() : void 0), po;
}
var mo, np;
function ga() {
  if (np) return mo;
  np = 1;
  var e = vr().f, t = Dt(), r = Ze(), n = r("toStringTag");
  return mo = function(i, a, o) {
    i && !o && (i = i.prototype), i && !t(i, n) && e(i, n, { configurable: !0, value: a });
  }, mo;
}
var go, ip;
function AE() {
  if (ip) return go;
  ip = 1;
  var e = Ny(), t = vr();
  return go = function(r, n, i) {
    return i.get && e(i.get, n, { getter: !0 }), i.set && e(i.set, n, { setter: !0 }), t.f(r, n, i);
  }, go;
}
var vo, ap;
function RE() {
  if (ap) return vo;
  ap = 1;
  var e = Dr(), t = AE(), r = Ze(), n = Pt(), i = r("species");
  return vo = function(a) {
    var o = e(a);
    n && o && !o[i] && t(o, i, {
      configurable: !0,
      get: function() {
        return this;
      }
    });
  }, vo;
}
var yo, sp;
function IE() {
  if (sp) return yo;
  sp = 1;
  var e = oa(), t = TypeError;
  return yo = function(r, n) {
    if (e(n, r)) return r;
    throw new t("Incorrect invocation");
  }, yo;
}
var bo, op;
function kE() {
  if (op) return bo;
  op = 1;
  var e = Ze(), t = e("toStringTag"), r = {};
  return r[t] = "z", bo = String(r) === "[object z]", bo;
}
var _o, up;
function Wl() {
  if (up) return _o;
  up = 1;
  var e = kE(), t = $e(), r = Mr(), n = Ze(), i = n("toStringTag"), a = Object, o = r(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", s = function(u, c) {
    try {
      return u[c];
    } catch {
    }
  };
  return _o = e ? r : function(u) {
    var c, f, l;
    return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (f = s(c = a(u), i)) == "string" ? f : o ? r(c) : (l = r(c)) === "Object" && t(c.callee) ? "Arguments" : l;
  }, _o;
}
var wo, cp;
function NE() {
  if (cp) return wo;
  cp = 1;
  var e = Ue(), t = qe(), r = $e(), n = Wl(), i = Dr(), a = jl(), o = function() {
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
  return d.sham = !0, wo = !s || t(function() {
    var h;
    return l(l.call) || !l(Object) || !l(function() {
      h = !0;
    }) || h;
  }) ? d : l, wo;
}
var xo, lp;
function PE() {
  if (lp) return xo;
  lp = 1;
  var e = NE(), t = ua(), r = TypeError;
  return xo = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a constructor");
  }, xo;
}
var Eo, fp;
function By() {
  if (fp) return Eo;
  fp = 1;
  var e = ct(), t = PE(), r = sa(), n = Ze(), i = n("species");
  return Eo = function(a, o) {
    var s = e(a).constructor, u;
    return s === void 0 || r(u = e(s)[i]) ? o : t(u);
  }, Eo;
}
var So, hp;
function jy() {
  if (hp) return So;
  hp = 1;
  var e = aa(), t = Function.prototype, r = t.apply, n = t.call;
  return So = typeof Reflect == "object" && Reflect.apply || (e ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), So;
}
var Oo, dp;
function va() {
  if (dp) return Oo;
  dp = 1;
  var e = Mr(), t = Ue();
  return Oo = function(r) {
    if (e(r) === "Function") return t(r);
  }, Oo;
}
var To, pp;
function Gl() {
  if (pp) return To;
  pp = 1;
  var e = va(), t = ir(), r = aa(), n = e(e.bind);
  return To = function(i, a) {
    return t(i), a === void 0 ? i : r ? n(i, a) : function() {
      return i.apply(a, arguments);
    };
  }, To;
}
var Co, mp;
function zy() {
  if (mp) return Co;
  mp = 1;
  var e = Dr();
  return Co = e("document", "documentElement"), Co;
}
var Ao, gp;
function ME() {
  if (gp) return Ao;
  gp = 1;
  var e = Ue();
  return Ao = e([].slice), Ao;
}
var Ro, vp;
function DE() {
  if (vp) return Ro;
  vp = 1;
  var e = TypeError;
  return Ro = function(t, r) {
    if (t < r) throw new e("Not enough arguments");
    return t;
  }, Ro;
}
var Io, yp;
function qy() {
  if (yp) return Io;
  yp = 1;
  var e = Gn();
  return Io = /(?:ipad|iphone|ipod).*applewebkit/i.test(e), Io;
}
var ko, bp;
function Uy() {
  if (bp) return ko;
  bp = 1;
  var e = ze(), t = jy(), r = Gl(), n = $e(), i = Dt(), a = qe(), o = zy(), s = ME(), u = la(), c = DE(), f = qy(), l = ma(), d = e.setImmediate, h = e.clearImmediate, m = e.process, p = e.Dispatch, b = e.Function, y = e.MessageChannel, _ = e.String, x = 0, O = {}, C = "onreadystatechange", B, I, S, w;
  a(function() {
    B = e.location;
  });
  var k = function(v) {
    if (i(O, v)) {
      var z = O[v];
      delete O[v], z();
    }
  }, q = function(v) {
    return function() {
      k(v);
    };
  }, E = function(v) {
    k(v.data);
  }, L = function(v) {
    e.postMessage(_(v), B.protocol + "//" + B.host);
  };
  return (!d || !h) && (d = function(z) {
    c(arguments.length, 1);
    var ie = n(z) ? z : b(z), D = s(arguments, 1);
    return O[++x] = function() {
      t(ie, void 0, D);
    }, I(x), x;
  }, h = function(z) {
    delete O[z];
  }, l ? I = function(v) {
    m.nextTick(q(v));
  } : p && p.now ? I = function(v) {
    p.now(q(v));
  } : y && !f ? (S = new y(), w = S.port2, S.port1.onmessage = E, I = r(w.postMessage, w)) : e.addEventListener && n(e.postMessage) && !e.importScripts && B && B.protocol !== "file:" && !a(L) ? (I = L, e.addEventListener("message", E, !1)) : C in u("script") ? I = function(v) {
    o.appendChild(u("script"))[C] = function() {
      o.removeChild(this), k(v);
    };
  } : I = function(v) {
    setTimeout(q(v), 0);
  }), ko = {
    set: d,
    clear: h
  }, ko;
}
var No, _p;
function FE() {
  if (_p) return No;
  _p = 1;
  var e = ze(), t = Pt(), r = Object.getOwnPropertyDescriptor;
  return No = function(n) {
    if (!t) return e[n];
    var i = r(e, n);
    return i && i.value;
  }, No;
}
var Po, wp;
function $y() {
  if (wp) return Po;
  wp = 1;
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
  }, Po = e, Po;
}
var Mo, xp;
function LE() {
  if (xp) return Mo;
  xp = 1;
  var e = Gn();
  return Mo = /ipad|iphone|ipod/i.test(e) && typeof Pebble < "u", Mo;
}
var Do, Ep;
function BE() {
  if (Ep) return Do;
  Ep = 1;
  var e = Gn();
  return Do = /web0s(?!.*chrome)/i.test(e), Do;
}
var Fo, Sp;
function jE() {
  if (Sp) return Fo;
  Sp = 1;
  var e = ze(), t = FE(), r = Gl(), n = Uy().set, i = $y(), a = qy(), o = LE(), s = BE(), u = ma(), c = e.MutationObserver || e.WebKitMutationObserver, f = e.document, l = e.process, d = e.Promise, h = t("queueMicrotask"), m, p, b, y, _;
  if (!h) {
    var x = new i(), O = function() {
      var C, B;
      for (u && (C = l.domain) && C.exit(); B = x.get(); ) try {
        B();
      } catch (I) {
        throw x.head && m(), I;
      }
      C && C.enter();
    };
    !a && !u && !s && c && f ? (p = !0, b = f.createTextNode(""), new c(O).observe(b, { characterData: !0 }), m = function() {
      b.data = p = !p;
    }) : !o && d && d.resolve ? (y = d.resolve(void 0), y.constructor = d, _ = r(y.then, y), m = function() {
      _(O);
    }) : u ? m = function() {
      l.nextTick(O);
    } : (n = r(n, e), m = function() {
      n(O);
    }), h = function(C) {
      x.head || m(), x.add(C);
    };
  }
  return Fo = h, Fo;
}
var Lo, Op;
function zE() {
  return Op || (Op = 1, Lo = function(e, t) {
    try {
      arguments.length === 1 ? console.error(e) : console.error(e, t);
    } catch {
    }
  }), Lo;
}
var Bo, Tp;
function Vl() {
  return Tp || (Tp = 1, Bo = function(e) {
    try {
      return { error: !1, value: e() };
    } catch (t) {
      return { error: !0, value: t };
    }
  }), Bo;
}
var jo, Cp;
function Hn() {
  if (Cp) return jo;
  Cp = 1;
  var e = ze();
  return jo = e.Promise, jo;
}
var zo, Ap;
function Kn() {
  if (Ap) return zo;
  Ap = 1;
  var e = ze(), t = Hn(), r = $e(), n = Dy(), i = jl(), a = Ze(), o = Fy(), s = Ht(), u = Dl(), c = t && t.prototype, f = a("species"), l = !1, d = r(e.PromiseRejectionEvent), h = n("Promise", function() {
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
  return zo = {
    CONSTRUCTOR: h,
    REJECTION_EVENT: d,
    SUBCLASSING: l
  }, zo;
}
var qo = {}, Rp;
function Yn() {
  if (Rp) return qo;
  Rp = 1;
  var e = ir(), t = TypeError, r = function(n) {
    var i, a;
    this.promise = new n(function(o, s) {
      if (i !== void 0 || a !== void 0) throw new t("Bad Promise constructor");
      i = o, a = s;
    }), this.resolve = e(i), this.reject = e(a);
  };
  return qo.f = function(n) {
    return new r(n);
  }, qo;
}
var Ip;
function qE() {
  if (Ip) return jh;
  Ip = 1;
  var e = lt(), t = Ht(), r = ma(), n = ze(), i = et(), a = Fr(), o = Ly(), s = ga(), u = RE(), c = ir(), f = $e(), l = dt(), d = IE(), h = By(), m = Uy().set, p = jE(), b = zE(), y = Vl(), _ = $y(), x = da(), O = Hn(), C = Kn(), B = Yn(), I = "Promise", S = C.CONSTRUCTOR, w = C.REJECTION_EVENT, k = C.SUBCLASSING, q = x.getterFor(I), E = x.set, L = O && O.prototype, v = O, z = L, ie = n.TypeError, D = n.document, Q = n.process, F = B.f, ee = F, P = !!(D && D.createEvent && n.dispatchEvent), M = "unhandledrejection", K = "rejectionhandled", te = 0, H = 1, pe = 2, Ee = 1, ce = 2, fe, ve, le, we, xe = function(V) {
    var J;
    return l(V) && f(J = V.then) ? J : !1;
  }, g = function(V, J) {
    var Z = J.value, ae = J.state === H, de = ae ? V.ok : V.fail, _e = V.resolve, Fe = V.reject, Ve = V.domain, Ne, Le, Ce;
    try {
      de ? (ae || (J.rejection === ce && j(J), J.rejection = Ee), de === !0 ? Ne = Z : (Ve && Ve.enter(), Ne = de(Z), Ve && (Ve.exit(), Ce = !0)), Ne === V.promise ? Fe(new ie("Promise-chain cycle")) : (Le = xe(Ne)) ? i(Le, Ne, _e, Fe) : _e(Ne)) : Fe(Z);
    } catch (He) {
      Ve && !Ce && Ve.exit(), Fe(He);
    }
  }, X = function(V, J) {
    V.notified || (V.notified = !0, p(function() {
      for (var Z = V.reactions, ae; ae = Z.get(); )
        g(ae, V);
      V.notified = !1, J && !V.rejection && N(V);
    }));
  }, W = function(V, J, Z) {
    var ae, de;
    P ? (ae = D.createEvent("Event"), ae.promise = J, ae.reason = Z, ae.initEvent(V, !1, !0), n.dispatchEvent(ae)) : ae = { promise: J, reason: Z }, !w && (de = n["on" + V]) ? de(ae) : V === M && b("Unhandled promise rejection", Z);
  }, N = function(V) {
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
        var ae = xe(J);
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
  if (S && (v = function(J) {
    d(this, z), c(J), i(fe, this);
    var Z = q(this);
    try {
      J(re(G, Z), re(ne, Z));
    } catch (ae) {
      ne(Z, ae);
    }
  }, z = v.prototype, fe = function(J) {
    E(this, {
      type: I,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new _(),
      rejection: !1,
      state: te,
      value: null
    });
  }, fe.prototype = a(z, "then", function(J, Z) {
    var ae = q(this), de = F(h(this, v));
    return ae.parent = !0, de.ok = f(J) ? J : !0, de.fail = f(Z) && Z, de.domain = r ? Q.domain : void 0, ae.state === te ? ae.reactions.add(de) : p(function() {
      g(de, ae);
    }), de.promise;
  }), ve = function() {
    var V = new fe(), J = q(V);
    this.promise = V, this.resolve = re(G, J), this.reject = re(ne, J);
  }, B.f = F = function(V) {
    return V === v || V === le ? new ve(V) : ee(V);
  }, !t && f(O) && L !== Object.prototype)) {
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
  return e({ global: !0, constructor: !0, wrap: !0, forced: S }, {
    Promise: v
  }), s(v, I, !1, !0), u(I), jh;
}
var kp = {}, Uo, Np;
function Xn() {
  return Np || (Np = 1, Uo = {}), Uo;
}
var $o, Pp;
function UE() {
  if (Pp) return $o;
  Pp = 1;
  var e = Ze(), t = Xn(), r = e("iterator"), n = Array.prototype;
  return $o = function(i) {
    return i !== void 0 && (t.Array === i || n[r] === i);
  }, $o;
}
var Wo, Mp;
function Wy() {
  if (Mp) return Wo;
  Mp = 1;
  var e = Wl(), t = an(), r = sa(), n = Xn(), i = Ze(), a = i("iterator");
  return Wo = function(o) {
    if (!r(o)) return t(o, a) || t(o, "@@iterator") || n[e(o)];
  }, Wo;
}
var Go, Dp;
function $E() {
  if (Dp) return Go;
  Dp = 1;
  var e = et(), t = ir(), r = ct(), n = ua(), i = Wy(), a = TypeError;
  return Go = function(o, s) {
    var u = arguments.length < 2 ? i(o) : s;
    if (t(u)) return r(e(u, o));
    throw new a(n(o) + " is not iterable");
  }, Go;
}
var Vo, Fp;
function WE() {
  if (Fp) return Vo;
  Fp = 1;
  var e = et(), t = ct(), r = an();
  return Vo = function(n, i, a) {
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
  }, Vo;
}
var Ho, Lp;
function Gy() {
  if (Lp) return Ho;
  Lp = 1;
  var e = Gl(), t = et(), r = ct(), n = ua(), i = UE(), a = Ul(), o = oa(), s = $E(), u = Wy(), c = WE(), f = TypeError, l = function(h, m) {
    this.stopped = h, this.result = m;
  }, d = l.prototype;
  return Ho = function(h, m, p) {
    var b = p && p.that, y = !!(p && p.AS_ENTRIES), _ = !!(p && p.IS_RECORD), x = !!(p && p.IS_ITERATOR), O = !!(p && p.INTERRUPTED), C = e(m, b), B, I, S, w, k, q, E, L = function(z) {
      return B && c(B, "normal", z), new l(!0, z);
    }, v = function(z) {
      return y ? (r(z), O ? C(z[0], z[1], L) : C(z[0], z[1])) : O ? C(z, L) : C(z);
    };
    if (_)
      B = h.iterator;
    else if (x)
      B = h;
    else {
      if (I = u(h), !I) throw new f(n(h) + " is not iterable");
      if (i(I)) {
        for (S = 0, w = a(h); w > S; S++)
          if (k = v(h[S]), k && o(d, k)) return k;
        return new l(!1);
      }
      B = s(h, I);
    }
    for (q = _ ? h.next : B.next; !(E = t(q, B)).done; ) {
      try {
        k = v(E.value);
      } catch (z) {
        c(B, "throw", z);
      }
      if (typeof k == "object" && k && o(d, k)) return k;
    }
    return new l(!1);
  }, Ho;
}
var Ko, Bp;
function GE() {
  if (Bp) return Ko;
  Bp = 1;
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
  return Ko = function(a, o) {
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
  }, Ko;
}
var Yo, jp;
function Vy() {
  if (jp) return Yo;
  jp = 1;
  var e = Hn(), t = GE(), r = Kn().CONSTRUCTOR;
  return Yo = r || !t(function(n) {
    e.all(n).then(void 0, function() {
    });
  }), Yo;
}
var zp;
function VE() {
  if (zp) return kp;
  zp = 1;
  var e = lt(), t = et(), r = ir(), n = Yn(), i = Vl(), a = Gy(), o = Vy();
  return e({ target: "Promise", stat: !0, forced: o }, {
    all: function(u) {
      var c = this, f = n.f(c), l = f.resolve, d = f.reject, h = i(function() {
        var m = r(c.resolve), p = [], b = 0, y = 1;
        a(u, function(_) {
          var x = b++, O = !1;
          y++, t(m, c, _).then(function(C) {
            O || (O = !0, p[x] = C, --y || l(p));
          }, d);
        }), --y || l(p);
      });
      return h.error && d(h.value), f.promise;
    }
  }), kp;
}
var qp = {}, Up;
function HE() {
  if (Up) return qp;
  Up = 1;
  var e = lt(), t = Ht(), r = Kn().CONSTRUCTOR, n = Hn(), i = Dr(), a = $e(), o = Fr(), s = n && n.prototype;
  if (e({ target: "Promise", proto: !0, forced: r, real: !0 }, {
    catch: function(c) {
      return this.then(void 0, c);
    }
  }), !t && a(n)) {
    var u = i("Promise").prototype.catch;
    s.catch !== u && o(s, "catch", u, { unsafe: !0 });
  }
  return qp;
}
var $p = {}, Wp;
function KE() {
  if (Wp) return $p;
  Wp = 1;
  var e = lt(), t = et(), r = ir(), n = Yn(), i = Vl(), a = Gy(), o = Vy();
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
  }), $p;
}
var Gp = {}, Vp;
function YE() {
  if (Vp) return Gp;
  Vp = 1;
  var e = lt(), t = Yn(), r = Kn().CONSTRUCTOR;
  return e({ target: "Promise", stat: !0, forced: r }, {
    reject: function(i) {
      var a = t.f(this), o = a.reject;
      return o(i), a.promise;
    }
  }), Gp;
}
var Hp = {}, Xo, Kp;
function XE() {
  if (Kp) return Xo;
  Kp = 1;
  var e = ct(), t = dt(), r = Yn();
  return Xo = function(n, i) {
    if (e(n), t(i) && i.constructor === n) return i;
    var a = r.f(n), o = a.resolve;
    return o(i), a.promise;
  }, Xo;
}
var Yp;
function ZE() {
  if (Yp) return Hp;
  Yp = 1;
  var e = lt(), t = Dr(), r = Ht(), n = Hn(), i = Kn().CONSTRUCTOR, a = XE(), o = t("Promise"), s = r && !i;
  return e({ target: "Promise", stat: !0, forced: r || i }, {
    resolve: function(c) {
      return a(s && this === o ? n : this, c);
    }
  }), Hp;
}
var Xp;
function JE() {
  return Xp || (Xp = 1, qE(), VE(), HE(), KE(), YE(), ZE()), Bh;
}
JE();
function Zp(e, t, r, n, i, a, o) {
  try {
    var s = e[a](o), u = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, i);
}
function QO(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, i) {
      var a = e.apply(t, r);
      function o(u) {
        Zp(a, n, i, o, s, "next", u);
      }
      function s(u) {
        Zp(a, n, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var Jp = {}, Qp = {}, Zo, em;
function Kt() {
  if (em) return Zo;
  em = 1;
  var e = Wl(), t = String;
  return Zo = function(r) {
    if (e(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return t(r);
  }, Zo;
}
var Jo, tm;
function Hy() {
  if (tm) return Jo;
  tm = 1;
  var e = ct();
  return Jo = function() {
    var t = e(this), r = "";
    return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r;
  }, Jo;
}
var Qo, rm;
function Ky() {
  if (rm) return Qo;
  rm = 1;
  var e = qe(), t = ze(), r = t.RegExp, n = e(function() {
    var o = r("a", "y");
    return o.lastIndex = 2, o.exec("abcd") !== null;
  }), i = n || e(function() {
    return !r("a", "y").sticky;
  }), a = n || e(function() {
    var o = r("^r", "gy");
    return o.lastIndex = 2, o.exec("str") !== null;
  });
  return Qo = {
    BROKEN_CARET: a,
    MISSED_STICKY: i,
    UNSUPPORTED_Y: n
  }, Qo;
}
var eu = {}, tu, nm;
function QE() {
  if (nm) return tu;
  nm = 1;
  var e = My(), t = $l();
  return tu = Object.keys || function(n) {
    return e(n, t);
  }, tu;
}
var im;
function eS() {
  if (im) return eu;
  im = 1;
  var e = Pt(), t = ky(), r = vr(), n = ct(), i = Wn(), a = QE();
  return eu.f = e && !t ? Object.defineProperties : function(s, u) {
    n(s);
    for (var c = i(u), f = a(u), l = f.length, d = 0, h; l > d; ) r.f(s, h = f[d++], c[h]);
    return s;
  }, eu;
}
var ru, am;
function ya() {
  if (am) return ru;
  am = 1;
  var e = ct(), t = eS(), r = $l(), n = ql(), i = zy(), a = la(), o = zl(), s = ">", u = "<", c = "prototype", f = "script", l = o("IE_PROTO"), d = function() {
  }, h = function(_) {
    return u + f + s + _ + u + "/" + f + s;
  }, m = function(_) {
    _.write(h("")), _.close();
    var x = _.parentWindow.Object;
    return _ = null, x;
  }, p = function() {
    var _ = a("iframe"), x = "java" + f + ":", O;
    return _.style.display = "none", i.appendChild(_), _.src = String(x), O = _.contentWindow.document, O.open(), O.write(h("document.F=Object")), O.close(), O.F;
  }, b, y = function() {
    try {
      b = new ActiveXObject("htmlfile");
    } catch {
    }
    y = typeof document < "u" ? document.domain && b ? m(b) : p() : m(b);
    for (var _ = r.length; _--; ) delete y[c][r[_]];
    return y();
  };
  return n[l] = !0, ru = Object.create || function(x, O) {
    var C;
    return x !== null ? (d[c] = e(x), C = new d(), d[c] = null, C[l] = x) : C = y(), O === void 0 ? C : t.f(C, O);
  }, ru;
}
var nu, sm;
function tS() {
  if (sm) return nu;
  sm = 1;
  var e = qe(), t = ze(), r = t.RegExp;
  return nu = e(function() {
    var n = r(".", "s");
    return !(n.dotAll && n.test(`
`) && n.flags === "s");
  }), nu;
}
var iu, om;
function rS() {
  if (om) return iu;
  om = 1;
  var e = qe(), t = ze(), r = t.RegExp;
  return iu = e(function() {
    var n = r("(?<a>b)", "g");
    return n.exec("b").groups.a !== "b" || "b".replace(n, "$<a>c") !== "bc";
  }), iu;
}
var au, um;
function Hl() {
  if (um) return au;
  um = 1;
  var e = et(), t = Ue(), r = Kt(), n = Hy(), i = Ky(), a = Bl(), o = ya(), s = da().get, u = tS(), c = rS(), f = a("native-string-replace", String.prototype.replace), l = RegExp.prototype.exec, d = l, h = t("".charAt), m = t("".indexOf), p = t("".replace), b = t("".slice), y = function() {
    var C = /a/, B = /b*/g;
    return e(l, C, "a"), e(l, B, "a"), C.lastIndex !== 0 || B.lastIndex !== 0;
  }(), _ = i.BROKEN_CARET, x = /()??/.exec("")[1] !== void 0, O = y || x || _ || u || c;
  return O && (d = function(B) {
    var I = this, S = s(I), w = r(B), k = S.raw, q, E, L, v, z, ie, D;
    if (k)
      return k.lastIndex = I.lastIndex, q = e(d, k, w), I.lastIndex = k.lastIndex, q;
    var Q = S.groups, F = _ && I.sticky, ee = e(n, I), P = I.source, M = 0, K = w;
    if (F && (ee = p(ee, "y", ""), m(ee, "g") === -1 && (ee += "g"), K = b(w, I.lastIndex), I.lastIndex > 0 && (!I.multiline || I.multiline && h(w, I.lastIndex - 1) !== `
`) && (P = "(?: " + P + ")", K = " " + K, M++), E = new RegExp("^(?:" + P + ")", ee)), x && (E = new RegExp("^" + P + "$(?!\\s)", ee)), y && (L = I.lastIndex), v = e(l, F ? E : I, K), F ? v ? (v.input = b(v.input, M), v[0] = b(v[0], M), v.index = I.lastIndex, I.lastIndex += v[0].length) : I.lastIndex = 0 : y && v && (I.lastIndex = I.global ? v.index + v[0].length : L), x && v && v.length > 1 && e(f, v[0], E, function() {
      for (z = 1; z < arguments.length - 2; z++)
        arguments[z] === void 0 && (v[z] = void 0);
    }), v && Q)
      for (v.groups = ie = o(null), z = 0; z < Q.length; z++)
        D = Q[z], ie[D[0]] = v[D[1]];
    return v;
  }), au = d, au;
}
var cm;
function nS() {
  if (cm) return Qp;
  cm = 1;
  var e = lt(), t = Hl();
  return e({ target: "RegExp", proto: !0, forced: /./.exec !== t }, {
    exec: t
  }), Qp;
}
var su, lm;
function Kl() {
  if (lm) return su;
  lm = 1, nS();
  var e = et(), t = Fr(), r = Hl(), n = qe(), i = Ze(), a = Vn(), o = i("species"), s = RegExp.prototype;
  return su = function(u, c, f, l) {
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
      var p = /./[d], b = c(d, ""[u], function(y, _, x, O, C) {
        var B = _.exec;
        return B === r || B === s.exec ? h && !C ? { done: !0, value: e(p, _, x, O) } : { done: !0, value: e(y, x, _, O) } : { done: !1 };
      });
      t(String.prototype, u, b[0]), t(s, d, b[1]);
    }
    l && a(s[d], "sham", !0);
  }, su;
}
var ou, fm;
function iS() {
  if (fm) return ou;
  fm = 1;
  var e = Ue(), t = pa(), r = Kt(), n = Mt(), i = e("".charAt), a = e("".charCodeAt), o = e("".slice), s = function(u) {
    return function(c, f) {
      var l = r(n(c)), d = t(f), h = l.length, m, p;
      return d < 0 || d >= h ? u ? "" : void 0 : (m = a(l, d), m < 55296 || m > 56319 || d + 1 === h || (p = a(l, d + 1)) < 56320 || p > 57343 ? u ? i(l, d) : m : u ? o(l, d, d + 2) : (m - 55296 << 10) + (p - 56320) + 65536);
    };
  };
  return ou = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: s(!1),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: s(!0)
  }, ou;
}
var uu, hm;
function Yl() {
  if (hm) return uu;
  hm = 1;
  var e = iS().charAt;
  return uu = function(t, r, n) {
    return r + (n ? e(t, r).length : 1);
  }, uu;
}
var cu, dm;
function Xl() {
  if (dm) return cu;
  dm = 1;
  var e = et(), t = ct(), r = $e(), n = Mr(), i = Hl(), a = TypeError;
  return cu = function(o, s) {
    var u = o.exec;
    if (r(u)) {
      var c = e(u, o, s);
      return c !== null && t(c), c;
    }
    if (n(o) === "RegExp") return e(i, o, s);
    throw new a("RegExp#exec called on incompatible receiver");
  }, cu;
}
var pm;
function aS() {
  if (pm) return Jp;
  pm = 1;
  var e = et(), t = Kl(), r = ct(), n = dt(), i = sn(), a = Kt(), o = Mt(), s = an(), u = Yl(), c = Xl();
  return t("match", function(f, l, d) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function(m) {
        var p = o(this), b = n(m) ? s(m, f) : void 0;
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
        for (var _ = [], x = 0, O; (O = c(m, p)) !== null; ) {
          var C = a(O[0]);
          _[x] = C, C === "" && (m.lastIndex = u(p, i(m.lastIndex), y)), x++;
        }
        return x === 0 ? null : _;
      }
    ];
  }), Jp;
}
aS();
var mm = {}, lu, gm;
function sS() {
  if (gm) return lu;
  gm = 1;
  var e = Ue(), t = ca(), r = Math.floor, n = e("".charAt), i = e("".replace), a = e("".slice), o = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, s = /\$([$&'`]|\d{1,2})/g;
  return lu = function(u, c, f, l, d, h) {
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
          var O = +_;
          if (O === 0) return y;
          if (O > p) {
            var C = r(O / 10);
            return C === 0 ? y : C <= p ? l[C - 1] === void 0 ? n(_, 1) : l[C - 1] + n(_, 1) : y;
          }
          x = l[O - 1];
      }
      return x === void 0 ? "" : x;
    });
  }, lu;
}
var vm;
function oS() {
  if (vm) return mm;
  vm = 1;
  var e = jy(), t = et(), r = Ue(), n = Kl(), i = qe(), a = ct(), o = $e(), s = dt(), u = pa(), c = sn(), f = Kt(), l = Mt(), d = Yl(), h = an(), m = sS(), p = Xl(), b = Ze(), y = b("replace"), _ = Math.max, x = Math.min, O = r([].concat), C = r([].push), B = r("".indexOf), I = r("".slice), S = function(E) {
    return E === void 0 ? E : String(E);
  }, w = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), k = function() {
    return /./[y] ? /./[y]("a", "$0") === "" : !1;
  }(), q = !i(function() {
    var E = /./;
    return E.exec = function() {
      var L = [];
      return L.groups = { a: "7" }, L;
    }, "".replace(E, "$<a>") !== "7";
  });
  return n("replace", function(E, L, v) {
    var z = k ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function(D, Q) {
        var F = l(this), ee = s(D) ? h(D, y) : void 0;
        return ee ? t(ee, D, F, Q) : t(L, f(F), D, Q);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(ie, D) {
        var Q = a(this), F = f(ie);
        if (typeof D == "string" && B(D, z) === -1 && B(D, "$<") === -1) {
          var ee = v(L, Q, F, D);
          if (ee.done) return ee.value;
        }
        var P = o(D);
        P || (D = f(D));
        var M = Q.global, K;
        M && (K = Q.unicode, Q.lastIndex = 0);
        for (var te = [], H; H = p(Q, F), !(H === null || (C(te, H), !M)); ) {
          var pe = f(H[0]);
          pe === "" && (Q.lastIndex = d(F, c(Q.lastIndex), K));
        }
        for (var Ee = "", ce = 0, fe = 0; fe < te.length; fe++) {
          H = te[fe];
          for (var ve = f(H[0]), le = _(x(u(H.index), F.length), 0), we = [], xe, g = 1; g < H.length; g++) C(we, S(H[g]));
          var X = H.groups;
          if (P) {
            var W = O([ve], we, le, F);
            X !== void 0 && C(W, X), xe = f(e(D, void 0, W));
          } else
            xe = m(ve, F, le, we, X, D);
          le >= ce && (Ee += I(F, ce, le) + xe, ce = le + ve.length);
        }
        return Ee + I(F, ce);
      }
    ];
  }, !q || !w || k), mm;
}
oS();
var ym = {}, fu, bm;
function uS() {
  if (bm) return fu;
  bm = 1;
  var e = dt(), t = Mr(), r = Ze(), n = r("match");
  return fu = function(i) {
    var a;
    return e(i) && ((a = i[n]) !== void 0 ? !!a : t(i) === "RegExp");
  }, fu;
}
var hu, _m;
function Zl() {
  if (_m) return hu;
  _m = 1;
  var e = uS(), t = TypeError;
  return hu = function(r) {
    if (e(r))
      throw new t("The method doesn't accept regular expressions");
    return r;
  }, hu;
}
var du, wm;
function Jl() {
  if (wm) return du;
  wm = 1;
  var e = Ze(), t = e("match");
  return du = function(r) {
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
  }, du;
}
var xm;
function cS() {
  if (xm) return ym;
  xm = 1;
  var e = lt(), t = va(), r = fa().f, n = sn(), i = Kt(), a = Zl(), o = Mt(), s = Jl(), u = Ht(), c = t("".slice), f = Math.min, l = s("startsWith"), d = !u && !l && !!function() {
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
  }), ym;
}
cS();
var pu, Em;
function lS() {
  if (Em) return pu;
  Em = 1;
  var e = Ze(), t = ya(), r = vr().f, n = e("unscopables"), i = Array.prototype;
  return i[n] === void 0 && r(i, n, {
    configurable: !0,
    value: t(null)
  }), pu = function(a) {
    i[n][a] = !0;
  }, pu;
}
var mu, Sm;
function fS() {
  if (Sm) return mu;
  Sm = 1;
  var e = qe();
  return mu = !e(function() {
    function t() {
    }
    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }), mu;
}
var gu, Om;
function Yy() {
  if (Om) return gu;
  Om = 1;
  var e = Dt(), t = $e(), r = ca(), n = zl(), i = fS(), a = n("IE_PROTO"), o = Object, s = o.prototype;
  return gu = i ? o.getPrototypeOf : function(u) {
    var c = r(u);
    if (e(c, a)) return c[a];
    var f = c.constructor;
    return t(f) && c instanceof f ? f.prototype : c instanceof o ? s : null;
  }, gu;
}
var vu, Tm;
function Xy() {
  if (Tm) return vu;
  Tm = 1;
  var e = qe(), t = $e(), r = dt(), n = ya(), i = Yy(), a = Fr(), o = Ze(), s = Ht(), u = o("iterator"), c = !1, f, l, d;
  [].keys && (d = [].keys(), "next" in d ? (l = i(i(d)), l !== Object.prototype && (f = l)) : c = !0);
  var h = !r(f) || e(function() {
    var m = {};
    return f[u].call(m) !== m;
  });
  return h ? f = {} : s && (f = n(f)), t(f[u]) || a(f, u, function() {
    return this;
  }), vu = {
    IteratorPrototype: f,
    BUGGY_SAFARI_ITERATORS: c
  }, vu;
}
var yu, Cm;
function hS() {
  if (Cm) return yu;
  Cm = 1;
  var e = Xy().IteratorPrototype, t = ya(), r = Ml(), n = ga(), i = Xn(), a = function() {
    return this;
  };
  return yu = function(o, s, u, c) {
    var f = s + " Iterator";
    return o.prototype = t(e, { next: r(+!c, u) }), n(o, f, !1, !0), i[f] = a, o;
  }, yu;
}
var bu, Am;
function dS() {
  if (Am) return bu;
  Am = 1;
  var e = lt(), t = et(), r = Ht(), n = ha(), i = $e(), a = hS(), o = Yy(), s = Ly(), u = ga(), c = Vn(), f = Fr(), l = Ze(), d = Xn(), h = Xy(), m = n.PROPER, p = n.CONFIGURABLE, b = h.IteratorPrototype, y = h.BUGGY_SAFARI_ITERATORS, _ = l("iterator"), x = "keys", O = "values", C = "entries", B = function() {
    return this;
  };
  return bu = function(I, S, w, k, q, E, L) {
    a(w, S, k);
    var v = function(te) {
      if (te === q && F) return F;
      if (!y && te && te in D) return D[te];
      switch (te) {
        case x:
          return function() {
            return new w(this, te);
          };
        case O:
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
    }, z = S + " Iterator", ie = !1, D = I.prototype, Q = D[_] || D["@@iterator"] || q && D[q], F = !y && Q || v(q), ee = S === "Array" && D.entries || Q, P, M, K;
    if (ee && (P = o(ee.call(new I())), P !== Object.prototype && P.next && (!r && o(P) !== b && (s ? s(P, b) : i(P[_]) || f(P, _, B)), u(P, z, !0, !0), r && (d[z] = B))), m && q === O && Q && Q.name !== O && (!r && p ? c(D, "name", O) : (ie = !0, F = function() {
      return t(Q, this);
    })), q)
      if (M = {
        values: v(O),
        keys: E ? F : v(x),
        entries: v(C)
      }, L) for (K in M)
        (y || ie || !(K in D)) && f(D, K, M[K]);
      else e({ target: S, proto: !0, forced: y || ie }, M);
    return (!r || L) && D[_] !== F && f(D, _, F, { name: q }), d[S] = F, M;
  }, bu;
}
var _u, Rm;
function pS() {
  return Rm || (Rm = 1, _u = function(e, t) {
    return { value: e, done: t };
  }), _u;
}
var wu, Im;
function Zy() {
  if (Im) return wu;
  Im = 1;
  var e = Wn(), t = lS(), r = Xn(), n = da(), i = vr().f, a = dS(), o = pS(), s = Ht(), u = Pt(), c = "Array Iterator", f = n.set, l = n.getterFor(c);
  wu = a(Array, "Array", function(h, m) {
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
  return wu;
}
Zy();
var km = {}, xu, Nm;
function mS() {
  return Nm || (Nm = 1, xu = {
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
  }), xu;
}
var Eu, Pm;
function gS() {
  if (Pm) return Eu;
  Pm = 1;
  var e = la(), t = e("span").classList, r = t && t.constructor && t.constructor.prototype;
  return Eu = r === Object.prototype ? void 0 : r, Eu;
}
var Mm;
function vS() {
  if (Mm) return km;
  Mm = 1;
  var e = ze(), t = mS(), r = gS(), n = Zy(), i = Vn(), a = ga(), o = Ze(), s = o("iterator"), u = n.values, c = function(l, d) {
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
  return c(r, "DOMTokenList"), km;
}
vS();
function yS(e, t) {
  if (kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bS(e) {
  var t = yS(e, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function eT(e, t, r) {
  return (t = bS(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Dm = {}, Su, Fm;
function _S() {
  if (Fm) return Su;
  Fm = 1;
  var e = ir(), t = ca(), r = Sy(), n = Ul(), i = TypeError, a = "Reduce of empty array with no initial value", o = function(s) {
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
  return Su = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: o(!1),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: o(!0)
  }, Su;
}
var Ou, Lm;
function Jy() {
  if (Lm) return Ou;
  Lm = 1;
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
var Bm;
function wS() {
  if (Bm) return Dm;
  Bm = 1;
  var e = lt(), t = _S().left, r = Jy(), n = Dl(), i = ma(), a = !i && n > 79 && n < 83, o = a || !r("reduce");
  return e({ target: "Array", proto: !0, forced: o }, {
    reduce: function(u) {
      var c = arguments.length;
      return t(this, u, c, c > 1 ? arguments[1] : void 0);
    }
  }), Dm;
}
wS();
var jm = {}, zm;
function xS() {
  if (zm) return jm;
  zm = 1;
  var e = lt(), t = va(), r = fa().f, n = sn(), i = Kt(), a = Zl(), o = Mt(), s = Jl(), u = Ht(), c = t("".slice), f = Math.min, l = s("endsWith"), d = !u && !l && !!function() {
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
  }), jm;
}
xS();
var qm = {}, Um;
function ES() {
  if (Um) return qm;
  Um = 1;
  var e = et(), t = Ue(), r = Kl(), n = ct(), i = dt(), a = Mt(), o = By(), s = Yl(), u = sn(), c = Kt(), f = an(), l = Xl(), d = Ky(), h = qe(), m = d.UNSUPPORTED_Y, p = 4294967295, b = Math.min, y = t([].push), _ = t("".slice), x = !h(function() {
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
      function(k, q) {
        var E = a(this), L = i(k) ? f(k, C) : void 0;
        return L ? e(L, k, E, q) : e(S, c(E), k, q);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(w, k) {
        var q = n(this), E = c(w);
        if (!O) {
          var L = I(S, q, E, k, S !== B);
          if (L.done) return L.value;
        }
        var v = o(q, RegExp), z = q.unicode, ie = (q.ignoreCase ? "i" : "") + (q.multiline ? "m" : "") + (q.unicode ? "u" : "") + (m ? "g" : "y"), D = new v(m ? "^(?:" + q.source + ")" : q, ie), Q = k === void 0 ? p : k >>> 0;
        if (Q === 0) return [];
        if (E.length === 0) return l(D, E) === null ? [E] : [];
        for (var F = 0, ee = 0, P = []; ee < E.length; ) {
          D.lastIndex = m ? 0 : ee;
          var M = l(D, m ? _(E, ee) : E), K;
          if (M === null || (K = b(u(D.lastIndex + (m ? ee : 0)), E.length)) === F)
            ee = s(E, ee, z);
          else {
            if (y(P, _(E, F, ee)), P.length === Q) return P;
            for (var te = 1; te <= M.length - 1; te++)
              if (y(P, M[te]), P.length === Q) return P;
            ee = F = K;
          }
        }
        return y(P, _(E, F)), P;
      }
    ];
  }, O || !x, m), qm;
}
ES();
var bn = { exports: {} }, br = { exports: {} }, SS = br.exports, $m;
function OS() {
  return $m || ($m = 1, (function() {
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
  }).call(SS)), br.exports;
}
var Wm;
function TS() {
  if (Wm) return bn.exports;
  Wm = 1;
  for (var e = OS(), t = typeof window > "u" ? xr : window, r = ["moz", "webkit"], n = "AnimationFrame", i = t["request" + n], a = t["cancel" + n] || t["cancelRequest" + n], o = 0; !i && o < r.length; o++)
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
  return bn.exports = function(l) {
    return i.call(t, l);
  }, bn.exports.cancel = function() {
    a.apply(t, arguments);
  }, bn.exports.polyfill = function(l) {
    l || (l = t), l.requestAnimationFrame = i, l.cancelAnimationFrame = a;
  }, bn.exports;
}
var CS = TS();
const tT = /* @__PURE__ */ rn(CS);
var Gm = {}, Tu, Vm;
function Qy() {
  return Vm || (Vm = 1, Tu = `	
\v\f\r                　\u2028\u2029\uFEFF`), Tu;
}
var Cu, Hm;
function AS() {
  if (Hm) return Cu;
  Hm = 1;
  var e = Ue(), t = Mt(), r = Kt(), n = Qy(), i = e("".replace), a = RegExp("^[" + n + "]+"), o = RegExp("(^|[^" + n + "])[" + n + "]+$"), s = function(u) {
    return function(c) {
      var f = r(t(c));
      return u & 1 && (f = i(f, a, "")), u & 2 && (f = i(f, o, "$1")), f;
    };
  };
  return Cu = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: s(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: s(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: s(3)
  }, Cu;
}
var Au, Km;
function RS() {
  if (Km) return Au;
  Km = 1;
  var e = ha().PROPER, t = qe(), r = Qy(), n = "​᠎";
  return Au = function(i) {
    return t(function() {
      return !!r[i]() || n[i]() !== n || e && r[i].name !== i;
    });
  }, Au;
}
var Ym;
function IS() {
  if (Ym) return Gm;
  Ym = 1;
  var e = lt(), t = AS().trim, r = RS();
  return e({ target: "String", proto: !0, forced: r("trim") }, {
    trim: function() {
      return t(this);
    }
  }), Gm;
}
IS();
var Ru, Xm;
function kS() {
  return Xm || (Xm = 1, Ru = function(e) {
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
  }), Ru;
}
var NS = kS();
const rT = /* @__PURE__ */ rn(NS);
var Zm = {}, Jm;
function PS() {
  if (Jm) return Zm;
  Jm = 1;
  var e = lt(), t = va(), r = Py().indexOf, n = Jy(), i = t([].indexOf), a = !!i && 1 / i([1], 1, -0) < 0, o = a || !n("indexOf");
  return e({ target: "Array", proto: !0, forced: o }, {
    indexOf: function(u) {
      var c = arguments.length > 1 ? arguments[1] : void 0;
      return a ? i(this, u, c) || 0 : r(this, u, c);
    }
  }), Zm;
}
PS();
var Qm = {}, eg;
function MS() {
  if (eg) return Qm;
  eg = 1;
  var e = lt(), t = Ue(), r = Zl(), n = Mt(), i = Kt(), a = Jl(), o = t("".indexOf);
  return e({ target: "String", proto: !0, forced: !a("includes") }, {
    includes: function(u) {
      return !!~o(
        i(n(this)),
        i(r(u)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }), Qm;
}
MS();
var tg = {}, Iu, rg;
function DS() {
  if (rg) return Iu;
  rg = 1;
  var e = Mr();
  return Iu = Array.isArray || function(r) {
    return e(r) === "Array";
  }, Iu;
}
var ng;
function FS() {
  if (ng) return tg;
  ng = 1;
  var e = lt(), t = Ue(), r = DS(), n = t([].reverse), i = [1, 2];
  return e({ target: "Array", proto: !0, forced: String(i) === String(i.reverse()) }, {
    reverse: function() {
      return r(this) && (this.length = this.length), n(this);
    }
  }), tg;
}
FS();
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
var e0 = function(e, t) {
  return (e0 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  })(e, t);
};
function t0(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  e0(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function LS(e) {
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
function Ec(e, t) {
  var r = e[0], n = e[1];
  return [r * Math.cos(t) - n * Math.sin(t), r * Math.sin(t) + n * Math.cos(t)];
}
function Tt() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = 0; r < e.length; r++) if (typeof e[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof e[r] + " == typeof " + e[r]);
  return !0;
}
var ur = Math.PI;
function ku(e, t, r) {
  e.lArcFlag = e.lArcFlag === 0 ? 0 : 1, e.sweepFlag = e.sweepFlag === 0 ? 0 : 1;
  var n = e.rX, i = e.rY, a = e.x, o = e.y;
  n = Math.abs(e.rX), i = Math.abs(e.rY);
  var s = Ec([(t - a) / 2, (r - o) / 2], -e.xRot / 180 * ur), u = s[0], c = s[1], f = Math.pow(u, 2) / Math.pow(n, 2) + Math.pow(c, 2) / Math.pow(i, 2);
  1 < f && (n *= Math.sqrt(f), i *= Math.sqrt(f)), e.rX = n, e.rY = i;
  var l = Math.pow(n, 2) * Math.pow(c, 2) + Math.pow(i, 2) * Math.pow(u, 2), d = (e.lArcFlag !== e.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - l) / l)), h = n * c / i * d, m = -i * u / n * d, p = Ec([h, m], e.xRot / 180 * ur);
  e.cX = p[0] + (t + a) / 2, e.cY = p[1] + (r + o) / 2, e.phi1 = Math.atan2((c - m) / i, (u - h) / n), e.phi2 = Math.atan2((-c - m) / i, (-u - h) / n), e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * ur), e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * ur), e.phi1 *= 180 / ur, e.phi2 *= 180 / ur;
}
function ig(e, t, r) {
  Tt(e, t, r);
  var n = e * e + t * t - r * r;
  if (0 > n) return [];
  if (n === 0) return [[e * r / (e * e + t * t), t * r / (e * e + t * t)]];
  var i = Math.sqrt(n);
  return [[(e * r + t * i) / (e * e + t * t), (t * r - e * i) / (e * e + t * t)], [(e * r - t * i) / (e * e + t * t), (t * r + e * i) / (e * e + t * t)]];
}
var We, Qt = Math.PI / 180;
function ag(e, t, r) {
  return (1 - r) * e + r * t;
}
function sg(e, t, r, n) {
  return e + Math.cos(n / 180 * ur) * t + Math.sin(n / 180 * ur) * r;
}
function og(e, t, r, n) {
  var i = 1e-6, a = t - e, o = r - t, s = 3 * a + 3 * (n - r) - 6 * o, u = 6 * (o - a), c = 3 * a;
  return Math.abs(s) < i ? [-c / u] : function(f, l, d) {
    var h = f * f / 4 - l;
    if (h < -1e-6) return [];
    if (h <= d) return [-f / 2];
    var m = Math.sqrt(h);
    return [-f / 2 - m, -f / 2 + m];
  }(u / s, c / s, i);
}
function ug(e, t, r, n, i) {
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
    return Tt(s, u, c, f, l, d), i(function(h, m, p, b) {
      var y = h.x1, _ = h.x2, x = h.relative && !isNaN(b), O = h.x !== void 0 ? h.x : x ? 0 : m, C = h.y !== void 0 ? h.y : x ? 0 : p;
      function B(M) {
        return M * M;
      }
      h.type & se.HORIZ_LINE_TO && u !== 0 && (h.type = se.LINE_TO, h.y = h.relative ? 0 : p), h.type & se.VERT_LINE_TO && c !== 0 && (h.type = se.LINE_TO, h.x = h.relative ? 0 : m), h.x !== void 0 && (h.x = h.x * s + C * c + (x ? 0 : l)), h.y !== void 0 && (h.y = O * u + h.y * f + (x ? 0 : d)), h.x1 !== void 0 && (h.x1 = h.x1 * s + h.y1 * c + (x ? 0 : l)), h.y1 !== void 0 && (h.y1 = y * u + h.y1 * f + (x ? 0 : d)), h.x2 !== void 0 && (h.x2 = h.x2 * s + h.y2 * c + (x ? 0 : l)), h.y2 !== void 0 && (h.y2 = _ * u + h.y2 * f + (x ? 0 : d));
      var I = s * f - u * c;
      if (h.xRot !== void 0 && (s !== 1 || u !== 0 || c !== 0 || f !== 1)) if (I === 0) delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag, h.type = se.LINE_TO;
      else {
        var S = h.xRot * Math.PI / 180, w = Math.sin(S), k = Math.cos(S), q = 1 / B(h.rX), E = 1 / B(h.rY), L = B(k) * q + B(w) * E, v = 2 * w * k * (q - E), z = B(w) * q + B(k) * E, ie = L * f * f - v * u * f + z * u * u, D = v * (s * f + u * c) - 2 * (L * c * f + z * s * u), Q = L * c * c - v * s * c + z * s * s, F = (Math.atan2(D, ie - Q) + Math.PI) % Math.PI / 2, ee = Math.sin(F), P = Math.cos(F);
        h.rX = Math.abs(I) / Math.sqrt(ie * B(P) + D * ee * P + Q * B(ee)), h.rY = Math.abs(I) / Math.sqrt(ie * B(ee) - D * ee * P + Q * B(P)), h.xRot = 180 * F / Math.PI;
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
    return s === void 0 && (s = !0), u === void 0 && (u = !0), c === void 0 && (c = !0), i(function(f, l, d, h, m) {
      if (isNaN(h) && !(f.type & se.MOVE_TO)) throw new Error("path must start with moveto");
      return u && f.type & se.HORIZ_LINE_TO && (f.type = se.LINE_TO, f.y = f.relative ? 0 : d), c && f.type & se.VERT_LINE_TO && (f.type = se.LINE_TO, f.x = f.relative ? 0 : l), s && f.type & se.CLOSE_PATH && (f.type = se.LINE_TO, f.x = f.relative ? h - l : h, f.y = f.relative ? m - d : m), f.type & se.ARC && (f.rX === 0 || f.rY === 0) && (f.type = se.LINE_TO, delete f.rX, delete f.rY, delete f.xRot, delete f.lArcFlag, delete f.sweepFlag), f;
    });
  }, e.NORMALIZE_ST = r, e.QT_TO_C = n, e.INFO = i, e.SANITIZE = function(s) {
    s === void 0 && (s = 0), Tt(s);
    var u = NaN, c = NaN, f = NaN, l = NaN;
    return i(function(d, h, m, p, b) {
      var y = Math.abs, _ = !1, x = 0, O = 0;
      if (d.type & se.SMOOTH_CURVE_TO && (x = isNaN(u) ? 0 : h - u, O = isNaN(c) ? 0 : m - c), d.type & (se.CURVE_TO | se.SMOOTH_CURVE_TO) ? (u = d.relative ? h + d.x2 : d.x2, c = d.relative ? m + d.y2 : d.y2) : (u = NaN, c = NaN), d.type & se.SMOOTH_QUAD_TO ? (f = isNaN(f) ? h : 2 * h - f, l = isNaN(l) ? m : 2 * m - l) : d.type & se.QUAD_TO ? (f = d.relative ? h + d.x1 : d.x1, l = d.relative ? m + d.y1 : d.y2) : (f = NaN, l = NaN), d.type & se.LINE_COMMANDS || d.type & se.ARC && (d.rX === 0 || d.rY === 0 || !d.lArcFlag) || d.type & se.CURVE_TO || d.type & se.SMOOTH_CURVE_TO || d.type & se.QUAD_TO || d.type & se.SMOOTH_QUAD_TO) {
        var C = d.x === void 0 ? 0 : d.relative ? d.x : d.x - h, B = d.y === void 0 ? 0 : d.relative ? d.y : d.y - m;
        x = isNaN(f) ? d.x1 === void 0 ? x : d.relative ? d.x : d.x1 - h : f - h, O = isNaN(l) ? d.y1 === void 0 ? O : d.relative ? d.y : d.y1 - m : l - m;
        var I = d.x2 === void 0 ? 0 : d.relative ? d.x : d.x2 - h, S = d.y2 === void 0 ? 0 : d.relative ? d.y : d.y2 - m;
        y(C) <= s && y(B) <= s && y(x) <= s && y(O) <= s && y(I) <= s && y(S) <= s && (_ = !0);
      }
      return d.type & se.CLOSE_PATH && y(h - p) <= s && y(m - b) <= s && (_ = !0), _ ? [] : d;
    });
  }, e.MATRIX = a, e.ROTATE = function(s, u, c) {
    u === void 0 && (u = 0), c === void 0 && (c = 0), Tt(s, u, c);
    var f = Math.sin(s), l = Math.cos(s);
    return a(l, f, -f, l, u - u * l + c * f, c - u * f - c * l);
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
      return se.ARC === s.type ? function(f, l, d) {
        var h, m, p, b;
        f.cX || ku(f, l, d);
        for (var y = Math.min(f.phi1, f.phi2), _ = Math.max(f.phi1, f.phi2) - y, x = Math.ceil(_ / 90), O = new Array(x), C = l, B = d, I = 0; I < x; I++) {
          var S = ag(f.phi1, f.phi2, I / x), w = ag(f.phi1, f.phi2, (I + 1) / x), k = w - S, q = 4 / 3 * Math.tan(k * Qt / 4), E = [Math.cos(S * Qt) - q * Math.sin(S * Qt), Math.sin(S * Qt) + q * Math.cos(S * Qt)], L = E[0], v = E[1], z = [Math.cos(w * Qt), Math.sin(w * Qt)], ie = z[0], D = z[1], Q = [ie + q * Math.sin(w * Qt), D - q * Math.cos(w * Qt)], F = Q[0], ee = Q[1];
          O[I] = { relative: f.relative, type: se.CURVE_TO };
          var P = function(M, K) {
            var te = Ec([M * f.rX, K * f.rY], f.xRot), H = te[0], pe = te[1];
            return [f.cX + H, f.cY + pe];
          };
          h = P(L, v), O[I].x1 = h[0], O[I].y1 = h[1], m = P(F, ee), O[I].x2 = m[0], O[I].y2 = m[1], p = P(ie, D), O[I].x = p[0], O[I].y = p[1], f.relative && (O[I].x1 -= C, O[I].y1 -= B, O[I].x2 -= C, O[I].y2 -= B, O[I].x -= C, O[I].y -= B), C = (b = [O[I].x, O[I].y])[0], B = b[1];
        }
        return O;
      }(s, s.relative ? 0 : u, s.relative ? 0 : c) : s;
    });
  }, e.ANNOTATE_ARCS = function() {
    return i(function(s, u, c) {
      return s.relative && (u = 0, c = 0), se.ARC === s.type && ku(s, u, c), s;
    });
  }, e.CLONE = o, e.CALCULATE_BOUNDS = function() {
    var s = function(d) {
      var h = {};
      for (var m in d) h[m] = d[m];
      return h;
    }, u = t(), c = n(), f = r(), l = i(function(d, h, m) {
      var p = f(c(u(s(d))));
      function b(ee) {
        ee > l.maxX && (l.maxX = ee), ee < l.minX && (l.minX = ee);
      }
      function y(ee) {
        ee > l.maxY && (l.maxY = ee), ee < l.minY && (l.minY = ee);
      }
      if (p.type & se.DRAWING_COMMANDS && (b(h), y(m)), p.type & se.HORIZ_LINE_TO && b(p.x), p.type & se.VERT_LINE_TO && y(p.y), p.type & se.LINE_TO && (b(p.x), y(p.y)), p.type & se.CURVE_TO) {
        b(p.x), y(p.y);
        for (var _ = 0, x = og(h, p.x1, p.x2, p.x); _ < x.length; _++)
          0 < (F = x[_]) && 1 > F && b(ug(h, p.x1, p.x2, p.x, F));
        for (var O = 0, C = og(m, p.y1, p.y2, p.y); O < C.length; O++)
          0 < (F = C[O]) && 1 > F && y(ug(m, p.y1, p.y2, p.y, F));
      }
      if (p.type & se.ARC) {
        b(p.x), y(p.y), ku(p, h, m);
        for (var B = p.xRot / 180 * Math.PI, I = Math.cos(B) * p.rX, S = Math.sin(B) * p.rX, w = -Math.sin(B) * p.rY, k = Math.cos(B) * p.rY, q = p.phi1 < p.phi2 ? [p.phi1, p.phi2] : -180 > p.phi2 ? [p.phi2 + 360, p.phi1 + 360] : [p.phi2, p.phi1], E = q[0], L = q[1], v = function(ee) {
          var P = ee[0], M = ee[1], K = 180 * Math.atan2(M, P) / Math.PI;
          return K < E ? K + 360 : K;
        }, z = 0, ie = ig(w, -I, 0).map(v); z < ie.length; z++)
          (F = ie[z]) > E && F < L && b(sg(p.cX, I, w, F));
        for (var D = 0, Q = ig(k, -S, 0).map(v); D < Q.length; D++) {
          var F;
          (F = Q[D]) > E && F < L && y(sg(p.cY, S, k, F));
        }
      }
      return d;
    });
    return l.minX = 1 / 0, l.maxX = -1 / 0, l.minY = 1 / 0, l.maxY = -1 / 0, l;
  };
})(We || (We = {}));
var Ot, r0 = function() {
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
}(), BS = function(e) {
  return e === " " || e === "	" || e === "\r" || e === `
`;
}, cg = function(e) {
  return 48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57;
}, jS = function(e) {
  function t() {
    var r = e.call(this) || this;
    return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
  }
  return t0(t, e), t.prototype.finish = function(r) {
    if (r === void 0 && (r = []), this.parse(" ", r), this.curArgs.length !== 0 || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return r;
  }, t.prototype.parse = function(r, n) {
    var i = this;
    n === void 0 && (n = []);
    for (var a = function(l) {
      n.push(l), i.curArgs.length = 0, i.canParseCommandOrComma = !0;
    }, o = 0; o < r.length; o++) {
      var s = r[o], u = !(this.curCommandType !== se.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), c = cg(s) && (this.curNumber === "0" && s === "0" || u);
      if (!cg(s) || c) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var f = Number(this.curNumber);
          if (isNaN(f)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === se.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > f) throw new SyntaxError('Expected positive number, got "' + f + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(f), this.curArgs.length === zS[this.curCommandType] && (se.HORIZ_LINE_TO === this.curCommandType ? a({ type: se.HORIZ_LINE_TO, relative: this.curCommandRelative, x: f }) : se.VERT_LINE_TO === this.curCommandType ? a({ type: se.VERT_LINE_TO, relative: this.curCommandRelative, y: f }) : this.curCommandType === se.MOVE_TO || this.curCommandType === se.LINE_TO || this.curCommandType === se.SMOOTH_QUAD_TO ? (a({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), se.MOVE_TO === this.curCommandType && (this.curCommandType = se.LINE_TO)) : this.curCommandType === se.CURVE_TO ? a({ type: se.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === se.SMOOTH_CURVE_TO ? a({ type: se.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.QUAD_TO ? a({ type: se.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.ARC && a({ type: se.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!BS(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
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
}(r0), se = function(e) {
  function t(r) {
    var n = e.call(this) || this;
    return n.commands = typeof r == "string" ? t.parse(r) : r, n;
  }
  return t0(t, e), t.prototype.encode = function() {
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
    return LS(r);
  }, t.parse = function(r) {
    var n = new jS(), i = [];
    return n.parse(r, i), n.finish(i), i;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(r0), zS = ((Ot = {})[se.MOVE_TO] = 2, Ot[se.LINE_TO] = 2, Ot[se.HORIZ_LINE_TO] = 1, Ot[se.VERT_LINE_TO] = 1, Ot[se.CLOSE_PATH] = 0, Ot[se.QUAD_TO] = 4, Ot[se.SMOOTH_QUAD_TO] = 2, Ot[se.CURVE_TO] = 6, Ot[se.SMOOTH_CURVE_TO] = 4, Ot[se.ARC] = 7, Ot), lg = {}, Nu, fg;
function qS() {
  if (fg) return Nu;
  fg = 1;
  var e = et(), t = Dt(), r = oa(), n = Hy(), i = RegExp.prototype;
  return Nu = function(a) {
    var o = a.flags;
    return o === void 0 && !("flags" in i) && !t(a, "flags") && r(i, a) ? e(n, a) : o;
  }, Nu;
}
var hg;
function US() {
  if (hg) return lg;
  hg = 1;
  var e = ha().PROPER, t = Fr(), r = ct(), n = Kt(), i = qe(), a = qS(), o = "toString", s = RegExp.prototype, u = s[o], c = i(function() {
    return u.call({ source: "a", flags: "b" }) !== "/a/b";
  }), f = e && u.name !== o;
  return (c || f) && t(s, o, function() {
    var d = r(this), h = n(d.source), m = n(a(d));
    return "/" + h + "/" + m;
  }, { unsafe: !0 }), lg;
}
US();
const Zr = Math.min, Sr = Math.max, ki = Math.round, fi = Math.floor, Wt = (e) => ({
  x: e,
  y: e
}), $S = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, WS = {
  start: "end",
  end: "start"
};
function Sc(e, t, r) {
  return Sr(e, Zr(t, r));
}
function Zn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kr(e) {
  return e.split("-")[0];
}
function Jn(e) {
  return e.split("-")[1];
}
function n0(e) {
  return e === "x" ? "y" : "x";
}
function Ql(e) {
  return e === "y" ? "height" : "width";
}
function Or(e) {
  return ["top", "bottom"].includes(kr(e)) ? "y" : "x";
}
function ef(e) {
  return n0(Or(e));
}
function GS(e, t, r) {
  r === void 0 && (r = !1);
  const n = Jn(e), i = ef(e), a = Ql(i);
  let o = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = Ni(o)), [o, Ni(o)];
}
function VS(e) {
  const t = Ni(e);
  return [Oc(e), t, Oc(t)];
}
function Oc(e) {
  return e.replace(/start|end/g, (t) => WS[t]);
}
function HS(e, t, r) {
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
function KS(e, t, r, n) {
  const i = Jn(e);
  let a = HS(kr(e), r === "start", n);
  return i && (a = a.map((o) => o + "-" + i), t && (a = a.concat(a.map(Oc)))), a;
}
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $S[t]);
}
function YS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function i0(e) {
  return typeof e != "number" ? YS(e) : {
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
function dg(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = Or(t), o = ef(t), s = Ql(o), u = kr(t), c = a === "y", f = n.x + n.width / 2 - i.width / 2, l = n.y + n.height / 2 - i.height / 2, d = n[s] / 2 - i[s] / 2;
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
  switch (Jn(t)) {
    case "start":
      h[o] -= d * (r && c ? -1 : 1);
      break;
    case "end":
      h[o] += d * (r && c ? -1 : 1);
      break;
  }
  return h;
}
const XS = async (e, t, r) => {
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
  } = dg(c, n, u), d = n, h = {}, m = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: b,
      fn: y
    } = s[p], {
      x: _,
      y: x,
      data: O,
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
        ...O
      }
    }, C && m <= 50 && (m++, typeof C == "object" && (C.placement && (d = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : C.rects), {
      x: f,
      y: l
    } = dg(c, d, u)), p = -1);
  }
  return {
    x: f,
    y: l,
    placement: d,
    strategy: i,
    middlewareData: h
  };
};
async function a0(e, t) {
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
  } = Zn(t, e), m = i0(h), b = s[d ? l === "floating" ? "reference" : "floating" : l], y = Pi(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: u
  })), _ = l === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, x = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), O = await (a.isElement == null ? void 0 : a.isElement(x)) ? await (a.getScale == null ? void 0 : a.getScale(x)) || {
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
    top: (y.top - C.top + m.top) / O.y,
    bottom: (C.bottom - y.bottom + m.bottom) / O.y,
    left: (y.left - C.left + m.left) / O.x,
    right: (C.right - y.right + m.right) / O.x
  };
}
const ZS = (e) => ({
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
    } = Zn(e, t) || {};
    if (c == null)
      return {};
    const l = i0(f), d = {
      x: r,
      y: n
    }, h = ef(i), m = Ql(h), p = await o.getDimensions(c), b = h === "y", y = b ? "top" : "left", _ = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", O = a.reference[m] + a.reference[h] - d[h] - a.floating[m], C = d[h] - a.reference[h], B = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let I = B ? B[x] : 0;
    (!I || !await (o.isElement == null ? void 0 : o.isElement(B))) && (I = s.floating[x] || a.floating[m]);
    const S = O / 2 - C / 2, w = I / 2 - p[m] / 2 - 1, k = Zr(l[y], w), q = Zr(l[_], w), E = k, L = I - p[m] - q, v = I / 2 - p[m] / 2 + S, z = Sc(E, v, L), ie = !u.arrow && Jn(i) != null && v !== z && a.reference[m] / 2 - (v < E ? k : q) - p[m] / 2 < 0, D = ie ? v < E ? v - E : v - L : 0;
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
}), JS = function(e) {
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
      } = Zn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const y = kr(i), _ = Or(s), x = kr(s) === s, O = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), C = d || (x || !p ? [Ni(s)] : VS(s)), B = m !== "none";
      !d && B && C.push(...KS(s, p, m, O));
      const I = [s, ...C], S = await a0(t, b), w = [];
      let k = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (f && w.push(S[y]), l) {
        const z = GS(i, o, O);
        w.push(S[z[0]], S[z[1]]);
      }
      if (k = [...k, {
        placement: i,
        overflows: w
      }], !w.every((z) => z <= 0)) {
        var q, E;
        const z = (((q = a.flip) == null ? void 0 : q.index) || 0) + 1, ie = I[z];
        if (ie) {
          var L;
          const Q = l === "alignment" ? _ !== Or(ie) : !1, F = ((L = k[0]) == null ? void 0 : L.overflows[0]) > 0;
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
        let D = (E = k.filter((Q) => Q.overflows[0] <= 0).sort((Q, F) => Q.overflows[1] - F.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!D)
          switch (h) {
            case "bestFit": {
              var v;
              const Q = (v = k.filter((F) => {
                if (B) {
                  const ee = Or(F.placement);
                  return ee === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ee === "y";
                }
                return !0;
              }).map((F) => [F.placement, F.overflows.filter((ee) => ee > 0).reduce((ee, P) => ee + P, 0)]).sort((F, ee) => F[1] - ee[1])[0]) == null ? void 0 : v[0];
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
async function QS(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = kr(r), s = Jn(r), u = Or(r) === "y", c = ["left", "top"].includes(o) ? -1 : 1, f = a && u ? -1 : 1, l = Zn(t, e);
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
const eO = function(e) {
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
      } = t, u = await QS(t, e);
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
}, tO = function(e) {
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
      } = Zn(e, t), c = {
        x: r,
        y: n
      }, f = await a0(t, u), l = Or(kr(i)), d = n0(l);
      let h = c[d], m = c[l];
      if (a) {
        const b = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", _ = h + f[b], x = h - f[y];
        h = Sc(_, h, x);
      }
      if (o) {
        const b = l === "y" ? "top" : "left", y = l === "y" ? "bottom" : "right", _ = m + f[b], x = m - f[y];
        m = Sc(_, m, x);
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
function ba() {
  return typeof window < "u";
}
function on(e) {
  return s0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
  var t;
  return (t = (s0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function s0(e) {
  return ba() ? e instanceof Node || e instanceof vt(e).Node : !1;
}
function kt(e) {
  return ba() ? e instanceof Element || e instanceof vt(e).Element : !1;
}
function Vt(e) {
  return ba() ? e instanceof HTMLElement || e instanceof vt(e).HTMLElement : !1;
}
function pg(e) {
  return !ba() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof vt(e).ShadowRoot;
}
function Qn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = Nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function rO(e) {
  return ["table", "td", "th"].includes(on(e));
}
function _a(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function tf(e) {
  const t = rf(), r = kt(e) ? Nt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function nO(e) {
  let t = gr(e);
  for (; Vt(t) && !Jr(t); ) {
    if (tf(t))
      return t;
    if (_a(t))
      return null;
    t = gr(t);
  }
  return null;
}
function rf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Jr(e) {
  return ["html", "body", "#document"].includes(on(e));
}
function Nt(e) {
  return vt(e).getComputedStyle(e);
}
function wa(e) {
  return kt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function gr(e) {
  if (on(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pg(e) && e.host || // Fallback.
    Yt(e)
  );
  return pg(t) ? t.host : t;
}
function o0(e) {
  const t = gr(e);
  return Jr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vt(t) && Qn(t) ? t : o0(t);
}
function Pn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = o0(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = vt(i);
  if (a) {
    const s = Tc(o);
    return t.concat(o, o.visualViewport || [], Qn(i) ? i : [], s && r ? Pn(s) : []);
  }
  return t.concat(i, Pn(i, [], r));
}
function Tc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function u0(e) {
  const t = Nt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Vt(e), a = i ? e.offsetWidth : r, o = i ? e.offsetHeight : n, s = ki(r) !== a || ki(n) !== o;
  return s && (r = a, n = o), {
    width: r,
    height: n,
    $: s
  };
}
function nf(e) {
  return kt(e) ? e : e.contextElement;
}
function Vr(e) {
  const t = nf(e);
  if (!Vt(t))
    return Wt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = u0(t);
  let o = (a ? ki(r.width) : r.width) / n, s = (a ? ki(r.height) : r.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const iO = /* @__PURE__ */ Wt(0);
function c0(e) {
  const t = vt(e);
  return !rf() || !t.visualViewport ? iO : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function aO(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== vt(e) ? !1 : t;
}
function Nr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = nf(e);
  let o = Wt(1);
  t && (n ? kt(n) && (o = Vr(n)) : o = Vr(e));
  const s = aO(a, r, n) ? c0(a) : Wt(0);
  let u = (i.left + s.x) / o.x, c = (i.top + s.y) / o.y, f = i.width / o.x, l = i.height / o.y;
  if (a) {
    const d = vt(a), h = n && kt(n) ? vt(n) : n;
    let m = d, p = Tc(m);
    for (; p && n && h !== m; ) {
      const b = Vr(p), y = p.getBoundingClientRect(), _ = Nt(p), x = y.left + (p.clientLeft + parseFloat(_.paddingLeft)) * b.x, O = y.top + (p.clientTop + parseFloat(_.paddingTop)) * b.y;
      u *= b.x, c *= b.y, f *= b.x, l *= b.y, u += x, c += O, m = vt(p), p = Tc(m);
    }
  }
  return Pi({
    width: f,
    height: l,
    x: u,
    y: c
  });
}
function af(e, t) {
  const r = wa(e).scrollLeft;
  return t ? t.left + r : Nr(Yt(e)).left + r;
}
function l0(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), i = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    af(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: i,
    y: a
  };
}
function sO(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", o = Yt(n), s = t ? _a(t.floating) : !1;
  if (n === o || s && a)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Wt(1);
  const f = Wt(0), l = Vt(n);
  if ((l || !l && !a) && ((on(n) !== "body" || Qn(o)) && (u = wa(n)), Vt(n))) {
    const h = Nr(n);
    c = Vr(n), f.x = h.x + n.clientLeft, f.y = h.y + n.clientTop;
  }
  const d = o && !l && !a ? l0(o, u, !0) : Wt(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - u.scrollLeft * c.x + f.x + d.x,
    y: r.y * c.y - u.scrollTop * c.y + f.y + d.y
  };
}
function oO(e) {
  return Array.from(e.getClientRects());
}
function uO(e) {
  const t = Yt(e), r = wa(e), n = e.ownerDocument.body, i = Sr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Sr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + af(e);
  const s = -r.scrollTop;
  return Nt(n).direction === "rtl" && (o += Sr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  };
}
function cO(e, t) {
  const r = vt(e), n = Yt(e), i = r.visualViewport;
  let a = n.clientWidth, o = n.clientHeight, s = 0, u = 0;
  if (i) {
    a = i.width, o = i.height;
    const c = rf();
    (!c || c && t === "fixed") && (s = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s,
    y: u
  };
}
function lO(e, t) {
  const r = Nr(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = Vt(e) ? Vr(e) : Wt(1), o = e.clientWidth * a.x, s = e.clientHeight * a.y, u = i * a.x, c = n * a.y;
  return {
    width: o,
    height: s,
    x: u,
    y: c
  };
}
function mg(e, t, r) {
  let n;
  if (t === "viewport")
    n = cO(e, r);
  else if (t === "document")
    n = uO(Yt(e));
  else if (kt(t))
    n = lO(t, r);
  else {
    const i = c0(e);
    n = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Pi(n);
}
function f0(e, t) {
  const r = gr(e);
  return r === t || !kt(r) || Jr(r) ? !1 : Nt(r).position === "fixed" || f0(r, t);
}
function fO(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Pn(e, [], !1).filter((s) => kt(s) && on(s) !== "body"), i = null;
  const a = Nt(e).position === "fixed";
  let o = a ? gr(e) : e;
  for (; kt(o) && !Jr(o); ) {
    const s = Nt(o), u = tf(o);
    !u && s.position === "fixed" && (i = null), (a ? !u && !i : !u && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Qn(o) && !u && f0(e, o)) ? n = n.filter((f) => f !== o) : i = s, o = gr(o);
  }
  return t.set(e, n), n;
}
function hO(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const o = [...r === "clippingAncestors" ? _a(t) ? [] : fO(t, this._c) : [].concat(r), n], s = o[0], u = o.reduce((c, f) => {
    const l = mg(t, f, i);
    return c.top = Sr(l.top, c.top), c.right = Zr(l.right, c.right), c.bottom = Zr(l.bottom, c.bottom), c.left = Sr(l.left, c.left), c;
  }, mg(t, s, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function dO(e) {
  const {
    width: t,
    height: r
  } = u0(e);
  return {
    width: t,
    height: r
  };
}
function pO(e, t, r) {
  const n = Vt(t), i = Yt(t), a = r === "fixed", o = Nr(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Wt(0);
  function c() {
    u.x = af(i);
  }
  if (n || !n && !a)
    if ((on(t) !== "body" || Qn(i)) && (s = wa(t)), n) {
      const h = Nr(t, !0, a, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else i && c();
  a && !n && i && c();
  const f = i && !n && !a ? l0(i, s) : Wt(0), l = o.left + s.scrollLeft - u.x - f.x, d = o.top + s.scrollTop - u.y - f.y;
  return {
    x: l,
    y: d,
    width: o.width,
    height: o.height
  };
}
function Pu(e) {
  return Nt(e).position === "static";
}
function gg(e, t) {
  if (!Vt(e) || Nt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Yt(e) === r && (r = r.ownerDocument.body), r;
}
function h0(e, t) {
  const r = vt(e);
  if (_a(e))
    return r;
  if (!Vt(e)) {
    let i = gr(e);
    for (; i && !Jr(i); ) {
      if (kt(i) && !Pu(i))
        return i;
      i = gr(i);
    }
    return r;
  }
  let n = gg(e, t);
  for (; n && rO(n) && Pu(n); )
    n = gg(n, t);
  return n && Jr(n) && Pu(n) && !tf(n) ? r : n || nO(e) || r;
}
const mO = async function(e) {
  const t = this.getOffsetParent || h0, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: pO(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function gO(e) {
  return Nt(e).direction === "rtl";
}
const vO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sO,
  getDocumentElement: Yt,
  getClippingRect: hO,
  getOffsetParent: h0,
  getElementRects: mO,
  getClientRects: oO,
  getDimensions: dO,
  getScale: Vr,
  isElement: kt,
  isRTL: gO
};
function d0(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function yO(e, t) {
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
    const m = fi(l), p = fi(i.clientWidth - (f + d)), b = fi(i.clientHeight - (l + h)), y = fi(f), x = {
      rootMargin: -m + "px " + -p + "px " + -b + "px " + -y + "px",
      threshold: Sr(0, Zr(1, u)) || 1
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
      I === 1 && !d0(c, e.getBoundingClientRect()) && o(), O = !1;
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
function nT(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = nf(e), f = i || a ? [...c ? Pn(c) : [], ...Pn(t)] : [];
  f.forEach((y) => {
    i && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const l = c && s ? yO(c, r) : null;
  let d = -1, h = null;
  o && (h = new ResizeObserver((y) => {
    let [_] = y;
    _ && _.target === c && h && (h.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var x;
      (x = h) == null || x.observe(t);
    })), r();
  }), c && !u && h.observe(c), h.observe(t));
  let m, p = u ? Nr(e) : null;
  u && b();
  function b() {
    const y = Nr(e);
    p && !d0(p, y) && r(), p = y, m = requestAnimationFrame(b);
  }
  return r(), () => {
    var y;
    f.forEach((_) => {
      i && _.removeEventListener("scroll", r), a && _.removeEventListener("resize", r);
    }), l == null || l(), (y = h) == null || y.disconnect(), h = null, u && cancelAnimationFrame(m);
  };
}
const iT = eO, aT = tO, sT = JS, oT = ZS, uT = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: vO,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return XS(e, t, {
    ...i,
    platform: a
  });
};
var yi = { exports: {} };
/* @license
Papa Parse
v5.5.2
https://github.com/mholt/PapaParse
License: MIT
*/
var bO = yi.exports, vg;
function _O() {
  return vg || (vg = 1, function(e, t) {
    ((r, n) => {
      e.exports = n();
    })(bO, function r() {
      var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, i, a = !n.document && !!n.postMessage, o = n.IS_PAPA_WORKER || !1, s = {}, u = 0, c = {};
      function f(S) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(w) {
          var k = C(w);
          k.chunkSize = parseInt(k.chunkSize), w.step || w.chunk || (k.chunkSize = null), this._handle = new p(k), (this._handle.streamer = this)._config = k;
        }).call(this, S), this.parseChunk = function(w, k) {
          var q = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < q) {
            let L = this._config.newline;
            L || (E = this._config.quoteChar || '"', L = this._handle.guessLineEndings(w, E)), w = [...w.split(L).slice(q)].join(L);
          }
          this.isFirstChunk && I(this._config.beforeFirstChunk) && (E = this._config.beforeFirstChunk(w)) !== void 0 && (w = E), this.isFirstChunk = !1, this._halted = !1;
          var q = this._partialLine + w, E = (this._partialLine = "", this._handle.parse(q, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (w = E.meta.cursor, q = (this._finished || (this._partialLine = q.substring(w - this._baseIndex), this._baseIndex = w), E && E.data && (this._rowCount += E.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), o) n.postMessage({ results: E, workerId: c.WORKER_ID, finished: q });
            else if (I(this._config.chunk) && !k) {
              if (this._config.chunk(E, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = E = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(E.data), this._completeResults.errors = this._completeResults.errors.concat(E.errors), this._completeResults.meta = E.meta), this._completed || !q || !I(this._config.complete) || E && E.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), q || E && E.meta.paused || this._nextChunk(), E;
          }
          this._halted = !0;
        }, this._sendError = function(w) {
          I(this._config.error) ? this._config.error(w) : o && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: w, finished: !1 });
        };
      }
      function l(S) {
        var w;
        (S = S || {}).chunkSize || (S.chunkSize = c.RemoteChunkSize), f.call(this, S), this._nextChunk = a ? function() {
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
            var E;
            this._config.chunkSize && (E = this._start + this._config.chunkSize - 1, w.setRequestHeader("Range", "bytes=" + this._start + "-" + E));
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
      function d(S) {
        (S = S || {}).chunkSize || (S.chunkSize = c.LocalChunkSize), f.call(this, S);
        var w, k, q = typeof FileReader < "u";
        this.stream = function(E) {
          this._input = E, k = E.slice || E.webkitSlice || E.mozSlice, q ? ((w = new FileReader()).onload = B(this._chunkLoaded, this), w.onerror = B(this._chunkError, this)) : w = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var E = this._input, L = (this._config.chunkSize && (L = Math.min(this._start + this._config.chunkSize, this._input.size), E = k.call(E, this._start, L)), w.readAsText(E, this._config.encoding));
          q || this._chunkLoaded({ target: { result: L } });
        }, this._chunkLoaded = function(E) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(E.target.result);
        }, this._chunkError = function() {
          this._sendError(w.error);
        };
      }
      function h(S) {
        var w;
        f.call(this, S = S || {}), this.stream = function(k) {
          return w = k, this._nextChunk();
        }, this._nextChunk = function() {
          var k, q;
          if (!this._finished) return k = this._config.chunkSize, w = k ? (q = w.substring(0, k), w.substring(k)) : (q = w, ""), this._finished = !w, this.parseChunk(q);
        };
      }
      function m(S) {
        f.call(this, S = S || {});
        var w = [], k = !0, q = !1;
        this.pause = function() {
          f.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          f.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(E) {
          this._input = E, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          q && w.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), w.length ? this.parseChunk(w.shift()) : k = !0;
        }, this._streamData = B(function(E) {
          try {
            w.push(typeof E == "string" ? E : E.toString(this._config.encoding)), k && (k = !1, this._checkIsFinished(), this.parseChunk(w.shift()));
          } catch (L) {
            this._streamError(L);
          }
        }, this), this._streamError = B(function(E) {
          this._streamCleanUp(), this._sendError(E);
        }, this), this._streamEnd = B(function() {
          this._streamCleanUp(), q = !0, this._streamData("");
        }, this), this._streamCleanUp = B(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function p(S) {
        var w, k, q, E, L = Math.pow(2, 53), v = -L, z = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, ie = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, D = this, Q = 0, F = 0, ee = !1, P = !1, M = [], K = { data: [], errors: [], meta: {} };
        function te(ce) {
          return S.skipEmptyLines === "greedy" ? ce.join("").trim() === "" : ce.length === 1 && ce[0].length === 0;
        }
        function H() {
          if (K && q && (Ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), q = !1), S.skipEmptyLines && (K.data = K.data.filter(function(le) {
            return !te(le);
          })), pe()) {
            let le = function(we, xe) {
              I(S.transformHeader) && (we = S.transformHeader(we, xe)), M.push(we);
            };
            if (K) if (Array.isArray(K.data[0])) {
              for (var ce = 0; pe() && ce < K.data.length; ce++) K.data[ce].forEach(le);
              K.data.splice(0, 1);
            } else K.data.forEach(le);
          }
          function fe(le, we) {
            for (var xe = S.header ? {} : [], g = 0; g < le.length; g++) {
              var X = g, W = le[g], W = ((N, T) => ((j) => (S.dynamicTypingFunction && S.dynamicTyping[j] === void 0 && (S.dynamicTyping[j] = S.dynamicTypingFunction(j)), (S.dynamicTyping[j] || S.dynamicTyping) === !0))(N) ? T === "true" || T === "TRUE" || T !== "false" && T !== "FALSE" && (((j) => {
                if (z.test(j) && (j = parseFloat(j), v < j && j < L))
                  return 1;
              })(T) ? parseFloat(T) : ie.test(T) ? new Date(T) : T === "" ? null : T) : T)(X = S.header ? g >= M.length ? "__parsed_extra" : M[g] : X, W = S.transform ? S.transform(W, X) : W);
              X === "__parsed_extra" ? (xe[X] = xe[X] || [], xe[X].push(W)) : xe[X] = W;
            }
            return S.header && (g > M.length ? Ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + M.length + " fields but parsed " + g, F + we) : g < M.length && Ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + M.length + " fields but parsed " + g, F + we)), xe;
          }
          var ve;
          K && (S.header || S.dynamicTyping || S.transform) && (ve = 1, !K.data.length || Array.isArray(K.data[0]) ? (K.data = K.data.map(fe), ve = K.data.length) : K.data = fe(K.data, 0), S.header && K.meta && (K.meta.fields = M), F += ve);
        }
        function pe() {
          return S.header && M.length === 0;
        }
        function Ee(ce, fe, ve, le) {
          ce = { type: ce, code: fe, message: ve }, le !== void 0 && (ce.row = le), K.errors.push(ce);
        }
        I(S.step) && (E = S.step, S.step = function(ce) {
          K = ce, pe() ? H() : (H(), K.data.length !== 0 && (Q += ce.data.length, S.preview && Q > S.preview ? k.abort() : (K.data = K.data[0], E(K, D))));
        }), this.parse = function(ce, fe, ve) {
          var le = S.quoteChar || '"', le = (S.newline || (S.newline = this.guessLineEndings(ce, le)), q = !1, S.delimiter ? I(S.delimiter) && (S.delimiter = S.delimiter(ce), K.meta.delimiter = S.delimiter) : ((le = ((we, xe, g, X, W) => {
            var N, T, j, re;
            W = W || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ne = 0; ne < W.length; ne++) {
              for (var G, V = W[ne], J = 0, Z = 0, ae = 0, de = (j = void 0, new y({ comments: X, delimiter: V, newline: xe, preview: 10 }).parse(we)), _e = 0; _e < de.data.length; _e++) g && te(de.data[_e]) ? ae++ : (G = de.data[_e].length, Z += G, j === void 0 ? j = G : 0 < G && (J += Math.abs(G - j), j = G));
              0 < de.data.length && (Z /= de.data.length - ae), (T === void 0 || J <= T) && (re === void 0 || re < Z) && 1.99 < Z && (T = J, N = V, re = Z);
            }
            return { successful: !!(S.delimiter = N), bestDelimiter: N };
          })(ce, S.newline, S.skipEmptyLines, S.comments, S.delimitersToGuess)).successful ? S.delimiter = le.bestDelimiter : (q = !0, S.delimiter = c.DefaultDelimiter), K.meta.delimiter = S.delimiter), C(S));
          return S.preview && S.header && le.preview++, w = ce, k = new y(le), K = k.parse(w, fe, ve), H(), ee ? { meta: { paused: !0 } } : K || { meta: { paused: !1 } };
        }, this.paused = function() {
          return ee;
        }, this.pause = function() {
          ee = !0, k.abort(), w = I(S.chunk) ? "" : w.substring(k.getCharIndex());
        }, this.resume = function() {
          D.streamer._halted ? (ee = !1, D.streamer.parseChunk(w, !0)) : setTimeout(D.resume, 3);
        }, this.aborted = function() {
          return P;
        }, this.abort = function() {
          P = !0, k.abort(), K.meta.aborted = !0, I(S.complete) && S.complete(K), w = "";
        }, this.guessLineEndings = function(we, le) {
          we = we.substring(0, 1048576);
          var le = new RegExp(b(le) + "([^]*?)" + b(le), "gm"), ve = (we = we.replace(le, "")).split("\r"), le = we.split(`
`), we = 1 < le.length && le[0].length < ve[0].length;
          if (ve.length === 1 || we) return `
`;
          for (var xe = 0, g = 0; g < ve.length; g++) ve[g][0] === `
` && xe++;
          return xe >= ve.length / 2 ? `\r
` : "\r";
        };
      }
      function b(S) {
        return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function y(S) {
        var w = (S = S || {}).delimiter, k = S.newline, q = S.comments, E = S.step, L = S.preview, v = S.fastMode, z = null, ie = !1, D = S.quoteChar == null ? '"' : S.quoteChar, Q = D;
        if (S.escapeChar !== void 0 && (Q = S.escapeChar), (typeof w != "string" || -1 < c.BAD_DELIMITERS.indexOf(w)) && (w = ","), q === w) throw new Error("Comment character same as delimiter");
        q === !0 ? q = "#" : (typeof q != "string" || -1 < c.BAD_DELIMITERS.indexOf(q)) && (q = !1), k !== `
` && k !== "\r" && k !== `\r
` && (k = `
`);
        var F = 0, ee = !1;
        this.parse = function(P, M, K) {
          if (typeof P != "string") throw new Error("Input must be a string");
          var te = P.length, H = w.length, pe = k.length, Ee = q.length, ce = I(E), fe = [], ve = [], le = [], we = F = 0;
          if (!P) return J();
          if (v || v !== !1 && P.indexOf(D) === -1) {
            for (var xe = P.split(k), g = 0; g < xe.length; g++) {
              if (le = xe[g], F += le.length, g !== xe.length - 1) F += k.length;
              else if (K) return J();
              if (!q || le.substring(0, Ee) !== q) {
                if (ce) {
                  if (fe = [], re(le.split(w)), Z(), ee) return J();
                } else re(le.split(w));
                if (L && L <= g) return fe = fe.slice(0, L), J(!0);
              }
            }
            return J();
          }
          for (var X = P.indexOf(w, F), W = P.indexOf(k, F), N = new RegExp(b(Q) + b(D), "g"), T = P.indexOf(D, F); ; ) if (P[F] === D) for (T = F, F++; ; ) {
            if ((T = P.indexOf(D, T + 1)) === -1) return K || ve.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: fe.length, index: F }), G();
            if (T === te - 1) return G(P.substring(F, T).replace(N, D));
            if (D === Q && P[T + 1] === Q) T++;
            else if (D === Q || T === 0 || P[T - 1] !== Q) {
              X !== -1 && X < T + 1 && (X = P.indexOf(w, T + 1));
              var j = ne((W = W !== -1 && W < T + 1 ? P.indexOf(k, T + 1) : W) === -1 ? X : Math.min(X, W));
              if (P.substr(T + 1 + j, H) === w) {
                le.push(P.substring(F, T).replace(N, D)), P[F = T + 1 + j + H] !== D && (T = P.indexOf(D, F)), X = P.indexOf(w, F), W = P.indexOf(k, F);
                break;
              }
              if (j = ne(W), P.substring(T + 1 + j, T + 1 + j + pe) === k) {
                if (le.push(P.substring(F, T).replace(N, D)), V(T + 1 + j + pe), X = P.indexOf(w, F), T = P.indexOf(D, F), ce && (Z(), ee)) return J();
                if (L && fe.length >= L) return J(!0);
                break;
              }
              ve.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: fe.length, index: F }), T++;
            }
          }
          else if (q && le.length === 0 && P.substring(F, F + Ee) === q) {
            if (W === -1) return J();
            F = W + pe, W = P.indexOf(k, F), X = P.indexOf(w, F);
          } else if (X !== -1 && (X < W || W === -1)) le.push(P.substring(F, X)), F = X + H, X = P.indexOf(w, F);
          else {
            if (W === -1) break;
            if (le.push(P.substring(F, W)), V(W + pe), ce && (Z(), ee)) return J();
            if (L && fe.length >= L) return J(!0);
          }
          return G();
          function re(ae) {
            fe.push(ae), we = F;
          }
          function ne(ae) {
            var de = 0;
            return de = ae !== -1 && (ae = P.substring(T + 1, ae)) && ae.trim() === "" ? ae.length : de;
          }
          function G(ae) {
            return K || (ae === void 0 && (ae = P.substring(F)), le.push(ae), F = te, re(le), ce && Z()), J();
          }
          function V(ae) {
            F = ae, re(le), le = [], W = P.indexOf(k, F);
          }
          function J(ae) {
            if (S.header && !M && fe.length && !ie) {
              var de = fe[0], _e = {}, Fe = new Set(de);
              let Ve = !1;
              for (let Ne = 0; Ne < de.length; Ne++) {
                let Le = de[Ne];
                if (_e[Le = I(S.transformHeader) ? S.transformHeader(Le, Ne) : Le]) {
                  let Ce, He = _e[Le];
                  for (; Ce = Le + "_" + He, He++, Fe.has(Ce); ) ;
                  Fe.add(Ce), de[Ne] = Ce, _e[Le]++, Ve = !0, (z = z === null ? {} : z)[Ce] = Le;
                } else _e[Le] = 1, de[Ne] = Le;
                Fe.add(Le);
              }
              Ve && console.warn("Duplicate headers found and renamed."), ie = !0;
            }
            return { data: fe, errors: ve, meta: { delimiter: w, linebreak: k, aborted: ee, truncated: !!ae, cursor: we + (M || 0), renamedHeaders: z } };
          }
          function Z() {
            E(J()), fe = [], ve = [];
          }
        }, this.abort = function() {
          ee = !0;
        }, this.getCharIndex = function() {
          return F;
        };
      }
      function _(S) {
        var w = S.data, k = s[w.workerId], q = !1;
        if (w.error) k.userError(w.error, w.file);
        else if (w.results && w.results.data) {
          var E = { abort: function() {
            q = !0, x(w.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: O, resume: O };
          if (I(k.userStep)) {
            for (var L = 0; L < w.results.data.length && (k.userStep({ data: w.results.data[L], errors: w.results.errors, meta: w.results.meta }, E), !q); L++) ;
            delete w.results;
          } else I(k.userChunk) && (k.userChunk(w.results, E, w.file), delete w.results);
        }
        w.finished && !q && x(w.workerId, w.results);
      }
      function x(S, w) {
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
        if (I(k) && (w.dynamicTypingFunction = k, k = {}), w.dynamicTyping = k, w.transform = !!I(w.transform) && w.transform, !w.worker || !c.WORKERS_SUPPORTED) return k = null, c.NODE_STREAM_INPUT, typeof S == "string" ? (S = ((q) => q.charCodeAt(0) !== 65279 ? q : q.slice(1))(S), k = new (w.download ? l : h)(w)) : S.readable === !0 && I(S.read) && I(S.on) ? k = new m(w) : (n.File && S instanceof File || S instanceof Object) && (k = new d(w)), k.stream(S);
        (k = (() => {
          var q;
          return !!c.WORKERS_SUPPORTED && (q = (() => {
            var E = n.URL || n.webkitURL || null, L = r.toString();
            return c.BLOB_URL || (c.BLOB_URL = E.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", L, ")();"], { type: "text/javascript" })));
          })(), (q = new n.Worker(q)).onmessage = _, q.id = u++, s[q.id] = q);
        })()).userStep = w.step, k.userChunk = w.chunk, k.userComplete = w.complete, k.userError = w.error, w.step = I(w.step), w.chunk = I(w.chunk), w.complete = I(w.complete), w.error = I(w.error), delete w.worker, k.postMessage({ input: S, config: w, workerId: k.id });
      }, c.unparse = function(S, w) {
        var k = !1, q = !0, E = ",", L = `\r
`, v = '"', z = v + v, ie = !1, D = null, Q = !1, F = ((() => {
          if (typeof w == "object") {
            if (typeof w.delimiter != "string" || c.BAD_DELIMITERS.filter(function(M) {
              return w.delimiter.indexOf(M) !== -1;
            }).length || (E = w.delimiter), typeof w.quotes != "boolean" && typeof w.quotes != "function" && !Array.isArray(w.quotes) || (k = w.quotes), typeof w.skipEmptyLines != "boolean" && typeof w.skipEmptyLines != "string" || (ie = w.skipEmptyLines), typeof w.newline == "string" && (L = w.newline), typeof w.quoteChar == "string" && (v = w.quoteChar), typeof w.header == "boolean" && (q = w.header), Array.isArray(w.columns)) {
              if (w.columns.length === 0) throw new Error("Option columns is empty");
              D = w.columns;
            }
            w.escapeChar !== void 0 && (z = w.escapeChar + v), w.escapeFormulae instanceof RegExp ? Q = w.escapeFormulae : typeof w.escapeFormulae == "boolean" && w.escapeFormulae && (Q = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(b(v), "g"));
        if (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S)) {
          if (!S.length || Array.isArray(S[0])) return ee(null, S, ie);
          if (typeof S[0] == "object") return ee(D || Object.keys(S[0]), S, ie);
        } else if (typeof S == "object") return typeof S.data == "string" && (S.data = JSON.parse(S.data)), Array.isArray(S.data) && (S.fields || (S.fields = S.meta && S.meta.fields || D), S.fields || (S.fields = Array.isArray(S.data[0]) ? S.fields : typeof S.data[0] == "object" ? Object.keys(S.data[0]) : []), Array.isArray(S.data[0]) || typeof S.data[0] == "object" || (S.data = [S.data])), ee(S.fields || [], S.data || [], ie);
        throw new Error("Unable to serialize unrecognized input");
        function ee(M, K, te) {
          var H = "", pe = (typeof M == "string" && (M = JSON.parse(M)), typeof K == "string" && (K = JSON.parse(K)), Array.isArray(M) && 0 < M.length), Ee = !Array.isArray(K[0]);
          if (pe && q) {
            for (var ce = 0; ce < M.length; ce++) 0 < ce && (H += E), H += P(M[ce], ce);
            0 < K.length && (H += L);
          }
          for (var fe = 0; fe < K.length; fe++) {
            var ve = (pe ? M : K[fe]).length, le = !1, we = pe ? Object.keys(K[fe]).length === 0 : K[fe].length === 0;
            if (te && !pe && (le = te === "greedy" ? K[fe].join("").trim() === "" : K[fe].length === 1 && K[fe][0].length === 0), te === "greedy" && pe) {
              for (var xe = [], g = 0; g < ve; g++) {
                var X = Ee ? M[g] : g;
                xe.push(K[fe][X]);
              }
              le = xe.join("").trim() === "";
            }
            if (!le) {
              for (var W = 0; W < ve; W++) {
                0 < W && !we && (H += E);
                var N = pe && Ee ? M[W] : W;
                H += P(K[fe][N], W);
              }
              fe < K.length - 1 && (!te || 0 < ve && !we) && (H += L);
            }
          }
          return H;
        }
        function P(M, K) {
          var te, H;
          return M == null ? "" : M.constructor === Date ? JSON.stringify(M).slice(1, 25) : (H = !1, Q && typeof M == "string" && Q.test(M) && (M = "'" + M, H = !0), te = M.toString().replace(F, z), (H = H || k === !0 || typeof k == "function" && k(M, K) || Array.isArray(k) && k[K] || ((pe, Ee) => {
            for (var ce = 0; ce < Ee.length; ce++) if (-1 < pe.indexOf(Ee[ce])) return !0;
            return !1;
          })(te, c.BAD_DELIMITERS) || -1 < te.indexOf(E) || te.charAt(0) === " " || te.charAt(te.length - 1) === " ") ? v + te + v : te);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !a && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = y, c.ParserHandle = p, c.NetworkStreamer = l, c.FileStreamer = d, c.StringStreamer = h, c.ReadableStreamStreamer = m, n.jQuery && ((i = n.jQuery).fn.parse = function(S) {
        var w = S.config || {}, k = [];
        return this.each(function(L) {
          if (!(i(this).prop("tagName").toUpperCase() === "INPUT" && i(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var v = 0; v < this.files.length; v++) k.push({ file: this.files[v], inputElem: this, instanceConfig: i.extend({}, w) });
        }), q(), this;
        function q() {
          if (k.length === 0) I(S.complete) && S.complete();
          else {
            var L, v, z, ie, D = k[0];
            if (I(S.before)) {
              var Q = S.before(D.file, D.inputElem);
              if (typeof Q == "object") {
                if (Q.action === "abort") return L = "AbortError", v = D.file, z = D.inputElem, ie = Q.reason, void (I(S.error) && S.error({ name: L }, v, z, ie));
                if (Q.action === "skip") return void E();
                typeof Q.config == "object" && (D.instanceConfig = i.extend(D.instanceConfig, Q.config));
              } else if (Q === "skip") return void E();
            }
            var F = D.instanceConfig.complete;
            D.instanceConfig.complete = function(ee) {
              I(F) && F(ee, D.file, D.inputElem), E();
            }, c.parse(D.file, D.instanceConfig);
          }
        }
        function E() {
          k.splice(0, 1), q();
        }
      }), o && (n.onmessage = function(S) {
        S = S.data, c.WORKER_ID === void 0 && S && (c.WORKER_ID = S.workerId), typeof S.input == "string" ? n.postMessage({ workerId: c.WORKER_ID, results: c.parse(S.input, S.config), finished: !0 }) : (n.File && S.input instanceof File || S.input instanceof Object) && (S = c.parse(S.input, S.config)) && n.postMessage({ workerId: c.WORKER_ID, results: S, finished: !0 });
      }), (l.prototype = Object.create(f.prototype)).constructor = l, (d.prototype = Object.create(f.prototype)).constructor = d, (h.prototype = Object.create(h.prototype)).constructor = h, (m.prototype = Object.create(f.prototype)).constructor = m, c;
    });
  }(yi)), yi.exports;
}
var wO = _O();
const cT = /* @__PURE__ */ rn(wO);
export {
  on as A,
  uT as B,
  oT as C,
  EO as D,
  LO as E,
  $c as F,
  FO as G,
  AO as H,
  MO as I,
  JO as J,
  CO as K,
  TO as L,
  RO as M,
  BO as N,
  IO as O,
  cT as P,
  kO as Q,
  rT as R,
  NO as S,
  PO as T,
  DO as U,
  XO as V,
  QO as _,
  VO as a,
  HO as b,
  st as c,
  qO as d,
  Ii as e,
  nT as f,
  zO as g,
  UO as h,
  $O as i,
  aT as j,
  sT as k,
  Xa as l,
  se as m,
  eT as n,
  iT as o,
  bx as p,
  kn as q,
  tT as r,
  WO as s,
  jO as t,
  YO as u,
  GO as v,
  SO as w,
  OO as x,
  s0 as y,
  KO as z
};

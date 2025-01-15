var v0 = Object.defineProperty;
var y0 = (e, t, r) => t in e ? v0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var vl = (e, t, r) => y0(e, typeof t != "symbol" ? t + "" : t, r);
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
function yl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yl(Object(r), !0).forEach(function(n) {
      b0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _0(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w0(e) {
  var t = _0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const bl = () => {
};
let Tc = {}, vg = {}, yg = null, bg = {
  mark: bl,
  measure: bl
};
try {
  typeof window < "u" && (Tc = window), typeof document < "u" && (vg = document), typeof MutationObserver < "u" && (yg = MutationObserver), typeof performance < "u" && (bg = performance);
} catch {
}
const {
  userAgent: _l = ""
} = Tc.navigator || {}, lr = Tc, De = vg, wl = yg, ni = bg;
lr.document;
const rr = !!De.documentElement && !!De.head && typeof De.addEventListener == "function" && typeof De.createElement == "function", _g = ~_l.indexOf("MSIE") || ~_l.indexOf("Trident/");
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
}, S0 = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, xg = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], nt = "classic", Mi = "duotone", O0 = "sharp", T0 = "sharp-duotone", Eg = [nt, Mi, O0, T0], C0 = {
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
}, k0 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], xl = {
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
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, M0 = ["fak", "fakd"], D0 = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, El = {
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
}, q0 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Mu = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...F0, ...q0], U0 = ["solid", "regular", "light", "thin", "duotone", "brands"], Sg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], $0 = Sg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), W0 = [...Object.keys(z0), ...U0, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ii.GROUP, ii.SWAP_OPACITY, ii.PRIMARY, ii.SECONDARY].concat(Sg.map((e) => "".concat(e, "x"))).concat($0.map((e) => "w-".concat(e))), G0 = {
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
const er = "___FONT_AWESOME___", Du = 16, Og = "fa", Tg = "svg-inline--fa", Tr = "data-fa-i2svg", Fu = "data-fa-pseudo-element", V0 = "data-fa-pseudo-element-pending", Cc = "data-prefix", Ac = "data-icon", Sl = "fontawesome-i2svg", H0 = "async", K0 = ["HTML", "HEAD", "STYLE", "SCRIPT"], Cg = (() => {
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
const Ag = ue({}, wg);
Ag[nt] = ue(ue(ue(ue({}, {
  "fa-duotone": "duotone"
}), wg[nt]), xl.kit), xl["kit-duotone"]);
const Y0 = Dn(Ag), Lu = ue({}, I0);
Lu[nt] = ue(ue(ue(ue({}, {
  duotone: "fad"
}), Lu[nt]), El.kit), El["kit-duotone"]);
const Ol = Dn(Lu), Bu = ue({}, Pu);
Bu[nt] = ue(ue({}, Bu[nt]), D0.kit);
const Rc = Dn(Bu), ju = ue({}, j0);
ju[nt] = ue(ue({}, ju[nt]), P0.kit);
Dn(ju);
const X0 = x0, Rg = "fa-layers-text", Z0 = E0, J0 = ue({}, C0);
Dn(J0);
const Q0 = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Sa = S0, eb = [...N0, ...W0], Sn = lr.FontAwesomeConfig || {};
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
  i != null && (Sn[n] = i);
});
const Ig = {
  styleDefault: "solid",
  familyDefault: nt,
  cssPrefix: Og,
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
Sn.familyPrefix && (Sn.cssPrefix = Sn.familyPrefix);
const Hr = ue(ue({}, Ig), Sn);
Hr.autoReplaceSvg || (Hr.observeMutations = !1);
const ve = {};
Object.keys(Ig).forEach((e) => {
  Object.defineProperty(ve, e, {
    enumerable: !0,
    set: function(t) {
      Hr[e] = t, On.forEach((r) => r(ve));
    },
    get: function() {
      return Hr[e];
    }
  });
});
Object.defineProperty(ve, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Hr.cssPrefix = e, On.forEach((t) => t(ve));
  },
  get: function() {
    return Hr.cssPrefix;
  }
});
lr.FontAwesomeConfig = ve;
const On = [];
function nb(e) {
  return On.push(e), () => {
    On.splice(On.indexOf(e), 1);
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
  const e = Og, t = Tg, r = ve.cssPrefix, n = ve.replacementClass;
  let i = cb;
  if (r !== e || n !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return i;
}
let Tl = !1;
function Oa() {
  ve.autoAddCss && !Tl && (ib(Ng()), Tl = !0);
}
var fb = {
  mixout() {
    return {
      dom: {
        css: Ng,
        insertCss: Oa
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Oa();
      },
      beforeI2svg() {
        Oa();
      }
    };
  }
};
const tr = lr || {};
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
function lb(e) {
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
function Cl(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var Ta = function(t, r, n, i) {
  var a = Object.keys(t), o = a.length, s = r, u, c, l;
  for (n === void 0 ? (u = 1, l = t[a[0]]) : (u = 0, l = n); u < o; u++)
    c = a[u], l = s(l, t[c], c, t);
  return l;
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
function Al(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function qu(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, i = Al(t);
  typeof qt.hooks.addPack == "function" && !n ? qt.hooks.addPack(e, Al(t)) : qt.styles[e] = ue(ue({}, qt.styles[e] || {}), i), e === "fas" && qu("fa", t);
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
  const t = "far" in Rn || ve.autoFetchSvg, r = Ta(pb, (n, i) => {
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
  Bg = r.names, jg = r.unicodes, Nc = Fi(ve.styleDefault, {
    family: ve.familyDefault
  });
};
nb((e) => {
  Nc = Fi(e.styleDefault, {
    family: ve.familyDefault
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
  const r = Dg.reduce((n, i) => (n[i] = "".concat(ve.cssPrefix, "-").concat(i), n), {});
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
  const i = Ol[r][e] || Ol[r][n], a = e in qt.styles ? e : null;
  return i || a || null;
}
function wb(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const i = vb(ve.cssPrefix, n);
    i ? r = i : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function Rl(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function Li(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const i = Mu.concat(L0), a = Rl(e.filter((f) => i.includes(f))), o = Rl(e.filter((f) => !Mu.includes(f))), s = a.filter((f) => (n = f, !xg.includes(f))), [u = null] = s, c = _b(a), l = ue(ue({}, wb(o)), {}, {
    prefix: Fi(u, {
      family: c
    })
  });
  return ue(ue(ue({}, l), Ob({
    values: e,
    family: c,
    styles: Rn,
    config: ve,
    canonical: l,
    givenPrefix: n
  })), xb(r, n, l));
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
  return i = a.iconName || o || i, n = a.prefix || n, n === "far" && !Rn.far && Rn.fas && !ve.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: i
  };
}
const Eb = Eg.filter((e) => e !== nt || e !== Mi), Sb = Object.keys(Pu).filter((e) => e !== nt).map((e) => Object.keys(Pu[e])).flat();
function Ob(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: i = "",
    styles: a = {},
    config: o = {}
  } = e, s = r === Mi, u = t.includes("fa-duotone") || t.includes("fad"), c = o.familyDefault === "duotone", l = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!s && (u || c || l) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Eb.includes(r) && (Object.keys(a).find((d) => Sb.includes(d)) || o.autoFetchSvg)) {
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
      this.definitions[a] = ue(ue({}, this.definitions[a] || {}), i[a]), qu(a, i[a]);
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
let Il = [], $r = {};
const Gr = {}, Cb = Object.keys(Gr);
function Ab(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return Il = e, $r = {}, Object.keys(Gr).forEach((n) => {
    Cb.indexOf(n) === -1 && delete Gr[n];
  }), Il.forEach((n) => {
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
    return t = wr(r, t) || t, Cl(Wg.definitions, r, t) || Cl(qt.styles, r, t);
}
const Wg = new Tb(), Rb = () => {
  ve.autoReplaceSvg = !1, ve.observeMutations = !1, Cr("noAuto");
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
    ve.autoReplaceSvg === !1 && (ve.autoReplaceSvg = !0), ve.observeMutations = !0, lb(() => {
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
    if (typeof e == "string" && (e.indexOf("".concat(ve.cssPrefix, "-")) > -1 || e.match(X0))) {
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
  config: ve,
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
  (Object.keys(qt.styles).length > 0 || ve.autoFetchSvg) && rr && ve.autoReplaceSvg && vt.dom.i2svg({
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
    i.style = Di(ue(ue({}, a), {}, {
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
  const o = a === !0 ? "".concat(t, "-").concat(ve.cssPrefix, "-").concat(r) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: ue(ue({}, i), {}, {
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
    extra: l,
    watchable: f = !1
  } = e, {
    width: d,
    height: h
  } = r.found ? r : t, m = M0.includes(n), p = [ve.replacementClass, i ? "".concat(ve.cssPrefix, "-").concat(i) : ""].filter((C) => l.classes.indexOf(C) === -1).filter((C) => C !== "" || !!C).concat(l.classes).join(" ");
  let b = {
    children: [],
    attributes: ue(ue({}, l.attributes), {}, {
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
  f && (b.attributes[Tr] = ""), s && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(c || An())
    },
    children: [s]
  }), delete b.attributes.title);
  const _ = ue(ue({}, b), {}, {
    prefix: n,
    iconName: i,
    main: t,
    mask: r,
    maskId: u,
    transform: a,
    symbol: o,
    styles: ue(ue({}, y), l.styles)
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
  return _.children = x, _.attributes = O, o ? Mb(_) : Pb(_);
}
function kl(e) {
  const {
    content: t,
    width: r,
    height: n,
    transform: i,
    title: a,
    extra: o,
    watchable: s = !1
  } = e, u = ue(ue(ue({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  s && (u[Tr] = "");
  const c = ue({}, o.styles);
  kc(i) && (c.transform = ub({
    transform: i,
    startCentered: !0,
    width: r,
    height: n
  }), c["-webkit-transform"] = c.transform);
  const l = Di(c);
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
function Db(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, i = ue(ue(ue({}, n.attributes), r ? {
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
      class: "".concat(ve.cssPrefix, "-").concat(Sa.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ve.cssPrefix, "-").concat(Sa.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ve.cssPrefix, "-").concat(Sa.PRIMARY),
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
  !Cg && !ve.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Gu(e, t) {
  let r = t;
  return t === "fa" && ve.styleDefault !== null && (t = hr()), new Promise((n, i) => {
    if (r === "fa") {
      const a = Ug(e);
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Ca[t] && Ca[t][e]) {
      const a = Ca[t][e];
      return n(Wu(a));
    }
    Lb(e, t), n(ue(ue({}, Fb), {}, {
      icon: ve.showMissingIcons && e ? dr("missingIconAbstract") || {} : {}
    }));
  });
}
const Nl = () => {
}, Vu = ve.measurePerformance && ni && ni.mark && ni.measure ? ni : {
  mark: Nl,
  measure: Nl
}, wn = 'FA "6.7.2"', Bb = (e) => (Vu.mark("".concat(wn, " ").concat(e, " begins")), () => Gg(e)), Gg = (e) => {
  Vu.mark("".concat(wn, " ").concat(e, " ends")), Vu.measure("".concat(wn, " ").concat(e), "".concat(wn, " ").concat(e, " begins"), "".concat(wn, " ").concat(e, " ends"));
};
var Dc = {
  begin: Bb,
  end: Gg
};
const di = () => {
};
function Pl(e) {
  return typeof (e.getAttribute ? e.getAttribute(Tr) : null) == "string";
}
function jb(e) {
  const t = e.getAttribute ? e.getAttribute(Cc) : null, r = e.getAttribute ? e.getAttribute(Ac) : null;
  return t && r;
}
function zb(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ve.replacementClass);
}
function qb() {
  return ve.autoReplaceSvg === !0 ? pi.replace : pi[ve.autoReplaceSvg] || pi.replace;
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
      }), t.getAttribute(Tr) === null && ve.keepOriginalSource) {
        let r = De.createComment(Wb(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~Ic(t).indexOf(ve.replacementClass))
      return pi.replace(e);
    const n = new RegExp("".concat(ve.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const a = r[0].attributes.class.split(" ").reduce((o, s) => (s === ve.replacementClass || s.match(n) ? o.toSvg.push(s) : o.toNode.push(s), o), {
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
function Ml(e) {
  e();
}
function Hg(e, t) {
  const r = typeof t == "function" ? t : di;
  if (e.length === 0)
    r();
  else {
    let n = Ml;
    ve.mutateApproach === H0 && (n = lr.requestAnimationFrame || Ml), n(() => {
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
function Dl(e) {
  if (!wl || !ve.observeMutations)
    return;
  const {
    treeCallback: t = di,
    nodeCallback: r = di,
    pseudoElementsCallback: n = di,
    observeMutationsRoot: i = De
  } = e;
  wi = new wl((a) => {
    if (Fc) return;
    const o = hr();
    en(a).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Pl(s.addedNodes[0]) && (ve.searchPseudoElements && n(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && ve.searchPseudoElements && n(s.target.parentNode), s.type === "attributes" && Pl(s.target) && ~Q0.indexOf(s.attributeName))
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
  return i.prefix || (i.prefix = hr()), t && r && (i.prefix = t, i.iconName = r), i.iconName && i.prefix || (i.prefix && n.length > 0 && (i.iconName = yb(i.prefix, e.innerText) || Pc(i.prefix, zu(e.innerText))), !i.iconName && ve.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function Kb(e) {
  const t = en(e.attributes).reduce((i, a) => (i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return ve.autoA11y && (r ? t["aria-labelledby"] = "".concat(ve.replacementClass, "-title-").concat(n || An()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
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
function Fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: i
  } = Hb(e), a = Kb(e), o = Uu("parseNodeAttributes", {}, e);
  let s = t.styleParser ? Vb(e) : [];
  return ue({
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
  const t = ve.autoReplaceSvg === "nest" ? Fl(e, {
    styleParser: !1
  }) : Fl(e);
  return ~t.extra.classes.indexOf(Rg) ? dr("generateLayersText", e, t) : dr("generateSvgReplacementMutation", e, t);
}
function Zb() {
  return [...k0, ...Mu];
}
function Ll(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!rr) return Promise.resolve();
  const r = De.documentElement.classList, n = (l) => r.add("".concat(Sl, "-").concat(l)), i = (l) => r.remove("".concat(Sl, "-").concat(l)), a = ve.autoFetchSvg ? Zb() : xg.concat(Object.keys(Xb));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Rg, ":not([").concat(Tr, "])")].concat(a.map((l) => ".".concat(l, ":not([").concat(Tr, "])"))).join(", ");
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
  const u = Dc.begin("onTree"), c = s.reduce((l, f) => {
    try {
      const d = Yg(f);
      d && l.push(d);
    } catch (d) {
      Cg || d.name === "MissingIcon" && console.error(d);
    }
    return l;
  }, []);
  return new Promise((l, f) => {
    Promise.all(c).then((d) => {
      Hg(d, () => {
        n("active"), n("complete"), i("pending"), typeof t == "function" && t(), u(), l();
      });
    }).catch((d) => {
      u(), f(d);
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
    return i && (i = (i || {}).icon ? i : $u(i || {})), e(n, ue(ue({}, r), {}, {
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
    styles: l = {}
  } = t;
  if (!e) return;
  const {
    prefix: f,
    iconName: d,
    icon: h
  } = e;
  return Bi(ue({
    type: "icon"
  }, e), () => (Cr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ve.autoA11y && (o ? c["aria-labelledby"] = "".concat(ve.replacementClass, "-title-").concat(s || An()) : (c["aria-hidden"] = "true", c.focusable = "false")), Mc({
    icons: {
      main: Wu(h),
      mask: i ? Wu(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: f,
    iconName: d,
    transform: ue(ue({}, zt), r),
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
var t1 = {
  mixout() {
    return {
      icon: Qb(e1)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Ll, e.nodeCallback = Jb, e;
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
      return Ll(r, n);
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
              class: ["".concat(ve.cssPrefix, "-layers"), ...r].join(" ")
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
            classes: ["".concat(ve.cssPrefix, "-layers-counter"), ...n]
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
        }), kl({
          content: e,
          transform: ue(ue({}, zt), r),
          title: n,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(ve.cssPrefix, "-layers-text"), ...i]
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
      return ve.autoA11y && !n && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, kl({
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
const a1 = new RegExp('"', "ug"), Bl = [1105920, 1112319], jl = ue(ue(ue(ue({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), A0), G0), B0), Ku = Object.keys(jl).reduce((e, t) => (e[t.toLowerCase()] = jl[t], e), {}), s1 = Object.keys(Ku).reduce((e, t) => {
  const r = Ku[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function o1(e) {
  const t = e.replace(a1, ""), r = db(t, 0), n = r >= Bl[0] && r <= Bl[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: zu(i ? t[0] : t),
    isSecondary: n || i
  };
}
function u1(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), i = isNaN(n) ? "normal" : n;
  return (Ku[r] || {})[i] || s1[r];
}
function zl(e, t) {
  const r = "".concat(V0).concat(t.replace(":", "-"));
  return new Promise((n, i) => {
    if (e.getAttribute(r) !== null)
      return n();
    const o = en(e.children).filter((d) => d.getAttribute(Fu) === t)[0], s = lr.getComputedStyle(e, t), u = s.getPropertyValue("font-family"), c = u.match(Z0), l = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), n();
    if (c && f !== "none" && f !== "") {
      const d = s.getPropertyValue("content");
      let h = u1(u, l);
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
          extra: O
        } = x;
        O.attributes[Fu] = t, Gu(y, h).then((C) => {
          const F = Mc(ue(ue({}, x), {}, {
            icons: {
              main: C,
              mask: $g()
            },
            prefix: h,
            iconName: _,
            extra: O,
            watchable: !0
          })), R = De.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(R, e.firstChild) : e.appendChild(R), R.outerHTML = F.map((S) => Fn(S)).join(`
`), e.removeAttribute(r), n();
        }).catch(i);
      } else
        n();
    } else
      n();
  });
}
function c1(e) {
  return Promise.all([zl(e, "::before"), zl(e, "::after")]);
}
function f1(e) {
  return e.parentNode !== document.head && !~K0.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Fu) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function ql(e) {
  if (rr)
    return new Promise((t, r) => {
      const n = en(e.querySelectorAll("*")).filter(f1).map(c1), i = Dc.begin("searchPseudoElements");
      Kg(), Promise.all(n).then(() => {
        i(), Hu(), t();
      }).catch(() => {
        i(), Hu(), r();
      });
    });
}
var l1 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = ql, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = De
      } = t;
      ve.searchPseudoElements && ql(r);
    };
  }
};
let Ul = !1;
var h1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Kg(), Ul = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Dl(Uu("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Gb();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Ul ? Hu() : Dl(Uu("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const $l = (e) => {
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
        transform: (e) => $l(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = $l(r)), e;
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
        attributes: ue({}, d.outer),
        children: [{
          tag: "g",
          attributes: ue({}, d.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: ue(ue({}, r.icon.attributes), d.path)
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
function Wl(e) {
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
        width: l,
        icon: f
      } = a, d = ob({
        transform: s,
        containerWidth: l,
        iconWidth: u
      }), h = {
        tag: "rect",
        attributes: ue(ue({}, Aa), {}, {
          fill: "white"
        })
      }, m = c.children ? {
        children: c.children.map(Wl)
      } : {}, p = {
        tag: "g",
        attributes: ue({}, d.inner),
        children: [Wl(ue({
          tag: c.tag,
          attributes: ue(ue({}, c.attributes), d.path)
        }, m))]
      }, b = {
        tag: "g",
        attributes: ue({}, d.outer),
        children: [p]
      }, y = "mask-".concat(o || An()), _ = "clip-".concat(o || An()), x = {
        tag: "mask",
        attributes: ue(ue({}, Aa), {}, {
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
          children: p1(f)
        }, x]
      };
      return r.push(O, {
        tag: "rect",
        attributes: ue({
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
    lr.matchMedia && (t = lr.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: ue(ue({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = ue(ue({}, i), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: ue(ue({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: ue(ue({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: ue(ue({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(o), r.push({
        tag: "path",
        attributes: ue(ue({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: ue(ue({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: ue(ue({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: ue(ue({}, a), {}, {
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
}, y1 = [fb, t1, r1, n1, i1, l1, h1, d1, m1, g1, v1];
Ab(y1, {
  mixoutsTo: vt
});
vt.noAuto;
vt.config;
const bO = vt.library;
vt.dom;
const _O = vt.parse;
vt.findIconDefinition;
vt.toHtml;
const wO = vt.icon;
vt.layer;
vt.text;
vt.counter;
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const xO = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
}, EO = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
}, SO = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
}, OO = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
};
/*!
* Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Commercial License)
* Copyright 2024 Fonticons, Inc.
*/
const TO = {
  prefix: "fass",
  iconName: "spray-can",
  icon: [512, 512, [], "f5bd", "M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, CO = {
  prefix: "fass",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, AO = {
  prefix: "fass",
  iconName: "files",
  icon: [448, 512, [], "e178", "M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z"]
}, RO = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
}, IO = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
}, kO = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
}, NO = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
var Xg = typeof global == "object" && global && global.Object === Object && global, b1 = typeof self == "object" && self && self.Object === Object && self, ji = Xg || b1 || Function("return this")(), Kr = ji.Symbol, Zg = Object.prototype, _1 = Zg.hasOwnProperty, w1 = Zg.toString, fn = Kr ? Kr.toStringTag : void 0;
function x1(e) {
  var t = _1.call(e, fn), r = e[fn];
  try {
    e[fn] = void 0;
    var n = !0;
  } catch {
  }
  var i = w1.call(e);
  return n && (t ? e[fn] = r : delete e[fn]), i;
}
var E1 = Object.prototype, S1 = E1.toString;
function O1(e) {
  return S1.call(e);
}
var T1 = "[object Null]", C1 = "[object Undefined]", Gl = Kr ? Kr.toStringTag : void 0;
function Ln(e) {
  return e == null ? e === void 0 ? C1 : T1 : Gl && Gl in Object(e) ? x1(e) : O1(e);
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
var jn = Array.isArray, Vl = Kr ? Kr.prototype : void 0, Hl = Vl ? Vl.toString : void 0;
function Jg(e) {
  if (typeof e == "string")
    return e;
  if (jn(e))
    return R1(e, Jg) + "";
  if (zi(e))
    return Hl ? Hl.call(e) : "";
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
var Kl = NaN, M1 = /^[-+]0x[0-9a-f]+$/i, D1 = /^0b[01]+$/i, F1 = /^0o[0-7]+$/i, L1 = parseInt;
function PO(e) {
  if (typeof e == "number")
    return e;
  if (zi(e))
    return Kl;
  if (pr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = pr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = P1(e);
  var r = D1.test(e);
  return r || F1.test(e) ? L1(e.slice(2), r ? 2 : 8) : M1.test(e) ? Kl : +e;
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
var Ra = ji["__core-js_shared__"], Yl = function() {
  var e = /[^.]+$/.exec(Ra && Ra.keys && Ra.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function U1(e) {
  return !!Yl && Yl in e;
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
} : Qg, u_ = a_(o_), c_ = 9007199254740991, f_ = /^(?:0|[1-9]\d*)$/;
function qi(e, t) {
  var r = typeof e;
  return t = t ?? c_, !!t && (r == "number" || r != "symbol" && f_.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function l_(e, t, r) {
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
  (!(d_.call(e, t) && Ui(n, r)) || r === void 0 && !(t in e)) && l_(e, t, r);
}
var Xl = Math.max;
function m_(e, t, r) {
  return t = Xl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Xl(n.length - t, 0), o = Array(a); ++i < a; )
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
function Zl(e) {
  return Bn(e) && Ln(e) == x_;
}
var rv = Object.prototype, E_ = rv.hasOwnProperty, S_ = rv.propertyIsEnumerable, nv = Zl(/* @__PURE__ */ function() {
  return arguments;
}()) ? Zl : function(e) {
  return Bn(e) && E_.call(e, "callee") && !S_.call(e, "callee");
};
function O_() {
  return !1;
}
var iv = typeof exports == "object" && exports && !exports.nodeType && exports, Jl = iv && typeof module == "object" && module && !module.nodeType && module, T_ = Jl && Jl.exports === iv, Ql = T_ ? ji.Buffer : void 0, C_ = Ql ? Ql.isBuffer : void 0, A_ = C_ || O_, R_ = "[object Arguments]", I_ = "[object Array]", k_ = "[object Boolean]", N_ = "[object Date]", P_ = "[object Error]", M_ = "[object Function]", D_ = "[object Map]", F_ = "[object Number]", L_ = "[object Object]", B_ = "[object RegExp]", j_ = "[object Set]", z_ = "[object String]", q_ = "[object WeakMap]", U_ = "[object ArrayBuffer]", $_ = "[object DataView]", W_ = "[object Float32Array]", G_ = "[object Float64Array]", V_ = "[object Int8Array]", H_ = "[object Int16Array]", K_ = "[object Int32Array]", Y_ = "[object Uint8Array]", X_ = "[object Uint8ClampedArray]", Z_ = "[object Uint16Array]", J_ = "[object Uint32Array]", Pe = {};
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
var cw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fw = /^\w*$/;
function lw(e, t) {
  if (jn(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || zi(e) ? !0 : fw.test(e) || !cw.test(e) || t != null && e in Object(t);
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
var Sw = Array.prototype, Ow = Sw.splice;
function Tw(e) {
  var t = this.__data__, r = $i(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Ow.call(t, r, 1), --this.size, !0;
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
  return jn(e) ? e : lw(e, t) ? [e] : Uw($w(e));
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
function MO(e, t, r) {
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
var sv = Object.prototype, Vw = sv.hasOwnProperty, DO = g_(function(e, t) {
  e = Object(e);
  var r = -1, n = t.length, i = n > 2 ? t[2] : void 0;
  for (i && y_(t[0], t[1], i) && (n = 1); ++r < n; )
    for (var a = t[r], o = uw(a), s = -1, u = o.length; ++s < u; ) {
      var c = o[s], l = e[c];
      (l === void 0 || Ui(l, sv[c]) && !Vw.call(e, c)) && (e[c] = a[c]);
    }
  return e;
}), Hw = Object.prototype, Kw = Hw.hasOwnProperty;
function Yw(e, t) {
  return e != null && Kw.call(e, t);
}
function FO(e, t) {
  return e != null && Gw(e, t, Yw);
}
var Xw = "[object Number]";
function Zw(e) {
  return typeof e == "number" || Bn(e) && Ln(e) == Xw;
}
function LO(e) {
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
      var l = s[u];
      c = void 0, c === void 0 && (c = pr(l) ? l : qi(t[i + 1]) ? [] : {});
    }
    p_(s, u, c), s = s[u];
  }
  return e;
}
function BO(e, t, r) {
  return e == null ? e : Jw(e, t, r);
}
const Je = [];
for (let e = 0; e < 256; ++e)
  Je.push((e + 256).toString(16).slice(1));
function Qw(e, t = 0) {
  return (Je[e[t + 0]] + Je[e[t + 1]] + Je[e[t + 2]] + Je[e[t + 3]] + "-" + Je[e[t + 4]] + Je[e[t + 5]] + "-" + Je[e[t + 6]] + Je[e[t + 7]] + "-" + Je[e[t + 8]] + Je[e[t + 9]] + "-" + Je[e[t + 10]] + Je[e[t + 11]] + Je[e[t + 12]] + Je[e[t + 13]] + Je[e[t + 14]] + Je[e[t + 15]]).toLowerCase();
}
let ka;
const ex = new Uint8Array(16);
function tx() {
  if (!ka) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ka = crypto.getRandomValues.bind(crypto);
  }
  return ka(ex);
}
const rx = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), rh = { randomUUID: rx };
function jO(e, t, r) {
  var i;
  if (rh.randomUUID && !e)
    return rh.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? tx();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Qw(n);
}
var ov = Object.defineProperty, nx = Object.getOwnPropertyNames, Z = (e, t) => ov(e, "name", { value: t, configurable: !0 }), ix = (e, t) => function() {
  return t || (0, e[nx(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Uc = (e, t) => {
  for (var r in t)
    ov(e, r, { get: t[r], enumerable: !0 });
}, ax = ix({
  "(disabled):util"() {
  }
}), Ei = {};
Uc(Ei, {
  addChainableMethod: () => ef,
  addLengthGuard: () => Un,
  addMethod: () => Zc,
  addProperty: () => Xc,
  checkError: () => dt,
  compareByInspect: () => Ci,
  eql: () => Mv,
  expectTypes: () => pv,
  flag: () => Oe,
  getActual: () => Vi,
  getMessage: () => Gc,
  getName: () => Ki,
  getOperator: () => af,
  getOwnEnumerableProperties: () => nf,
  getOwnEnumerablePropertySymbols: () => rf,
  getPathInfo: () => Yc,
  hasProperty: () => Hi,
  inspect: () => Ae,
  isNaN: () => Ai,
  isNumeric: () => Ye,
  isProxyEnabled: () => qn,
  isRegExp: () => Ri,
  objDisplay: () => Er,
  overwriteChainableMethod: () => tf,
  overwriteMethod: () => Qc,
  overwriteProperty: () => Jc,
  proxify: () => rn,
  test: () => $c,
  transferFlags: () => Rt,
  type: () => Ne
});
var dt = {};
Uc(dt, {
  compatibleConstructor: () => fv,
  compatibleInstance: () => cv,
  compatibleMessage: () => lv,
  getConstructorName: () => hv,
  getMessage: () => dv
});
function Gi(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
Z(Gi, "isErrorInstance");
function uv(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Z(uv, "isRegExp");
function cv(e, t) {
  return Gi(t) && e === t;
}
Z(cv, "compatibleInstance");
function fv(e, t) {
  return Gi(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
Z(fv, "compatibleConstructor");
function lv(e, t) {
  const r = typeof e == "string" ? e : e.message;
  return uv(t) ? t.test(r) : typeof t == "string" ? r.indexOf(t) !== -1 : !1;
}
Z(lv, "compatibleMessage");
function hv(e) {
  let t = e;
  return Gi(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
Z(hv, "getConstructorName");
function dv(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
Z(dv, "getMessage");
function Oe(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    n[t] = r;
  else
    return n[t];
}
Z(Oe, "flag");
function $c(e, t) {
  var r = Oe(e, "negate"), n = t[0];
  return r ? !n : n;
}
Z($c, "test");
function Ne(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Z(Ne, "type");
var sx = "captureStackTrace" in Error, Or, Ie = (Or = class extends Error {
  constructor(r = "Unspecified AssertionError", n, i) {
    super(r);
    vl(this, "message");
    this.message = r, sx && Error.captureStackTrace(this, i || Or);
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
}, Z(Or, "AssertionError"), Or);
function pv(e, t) {
  var r = Oe(e, "message"), n = Oe(e, "ssfi");
  r = r ? r + ": " : "", e = Oe(e, "object"), t = t.map(function(o) {
    return o.toLowerCase();
  }), t.sort();
  var i = t.map(function(o, s) {
    var u = ~["a", "e", "i", "o", "u"].indexOf(o.charAt(0)) ? "an" : "a", c = t.length > 1 && s === t.length - 1 ? "or " : "";
    return c + u + " " + o;
  }).join(", "), a = Ne(e).toLowerCase();
  if (!t.some(function(o) {
    return a === o;
  }))
    throw new Ie(
      r + "object tested must be " + i + ", but " + a + " given",
      void 0,
      n
    );
}
Z(pv, "expectTypes");
function Vi(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
Z(Vi, "getActual");
var nh = {
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
}, ox = {
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
  const r = nh[ox[t]] || nh[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
Z(mv, "colorise");
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
  return f.colors && (f.stylize = mv), f;
}
Z(gv, "normaliseOptions");
function vv(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
Z(vv, "isHighSurrogate");
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
Z(nr, "truncate");
function bt(e, t, r, n = ", ") {
  r = r || t.inspect;
  const i = e.length;
  if (i === 0)
    return "";
  const a = t.truncate;
  let o = "", s = "", u = "";
  for (let c = 0; c < i; c += 1) {
    const l = c + 1 === e.length, f = c + 2 === e.length;
    u = `${Yr}(${e.length - c})`;
    const d = e[c];
    t.truncate = a - o.length - (l ? 0 : n.length);
    const h = s || r(d, t) + (l ? "" : n), m = o.length + h.length, p = m + u.length;
    if (l && m > a && o.length + u.length <= a || !l && !f && p > a || (s = l ? "" : r(e[c + 1], t) + (f ? "" : n), !l && f && p > a && m + s.length > a))
      break;
    if (o += h, !l && !f && m + s.length >= a) {
      u = `${Yr}(${e.length - c - 1})`;
      break;
    }
    u = "";
  }
  return `${o}${u}`;
}
Z(bt, "inspectList");
function yv(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
Z(yv, "quoteComplexKey");
function Xr([e, t], r) {
  return r.truncate -= 2, typeof e == "string" ? e = yv(e) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`), r.truncate -= e.length, t = r.inspect(t, r), `${e}: ${t}`;
}
Z(Xr, "inspectProperty");
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
Z(bv, "inspectArray");
var ux = /* @__PURE__ */ Z((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function jt(e, t) {
  const r = ux(e);
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
Z(jt, "inspectTypedArray");
function _v(e, t) {
  const r = e.toJSON();
  if (r === null)
    return "Invalid Date";
  const n = r.split("T"), i = n[0];
  return t.stylize(`${i}T${nr(n[1], t.truncate - i.length - 1)}`, "date");
}
Z(_v, "inspectDate");
function Yu(e, t) {
  const r = e[Symbol.toStringTag] || "Function", n = e.name;
  return n ? t.stylize(`[${r} ${nr(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
Z(Yu, "inspectFunction");
function wv([e, t], r) {
  return r.truncate -= 4, e = r.inspect(e, r), r.truncate -= e.length, t = r.inspect(t, r), `${e} => ${t}`;
}
Z(wv, "inspectMapEntry");
function xv(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push([n, r]);
  }), t;
}
Z(xv, "mapToEntries");
function Ev(e, t) {
  return e.size - 1 <= 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${bt(xv(e), t, wv)} }`);
}
Z(Ev, "inspectMap");
var cx = Number.isNaN || ((e) => e !== e);
function Xu(e, t) {
  return cx(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(nr(String(e), t.truncate), "number");
}
Z(Xu, "inspectNumber");
function Zu(e, t) {
  let r = nr(e.toString(), t.truncate - 1);
  return r !== Yr && (r += "n"), t.stylize(r, "bigint");
}
Z(Zu, "inspectBigInt");
function Sv(e, t) {
  const r = e.toString().split("/")[2], n = t.truncate - (2 + r.length), i = e.source;
  return t.stylize(`/${nr(i, n)}/${r}`, "regexp");
}
Z(Sv, "inspectRegExp");
function Ov(e) {
  const t = [];
  return e.forEach((r) => {
    t.push(r);
  }), t;
}
Z(Ov, "arrayFromSet");
function Tv(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${bt(Ov(e), t)} }`);
}
Z(Tv, "inspectSet");
var ih = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), fx = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, lx = 16;
function Cv(e) {
  return fx[e] || `\\u${`0000${e.charCodeAt(0).toString(lx)}`.slice(-4)}`;
}
Z(Cv, "escape");
function Ju(e, t) {
  return ih.test(e) && (e = e.replace(ih, Cv)), t.stylize(`'${nr(e, t.truncate - 2)}'`, "string");
}
Z(Ju, "inspectString");
function Qu(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
Z(Qu, "inspectSymbol");
var Av = /* @__PURE__ */ Z(() => "Promise{…}", "getPromiseValue");
try {
  const { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (Av = /* @__PURE__ */ Z((n, i) => {
    const [a, o] = e(n);
    return a === t ? "Promise{<pending>}" : `Promise${a === r ? "!" : ""}{${i.inspect(o, i)}}`;
  }, "getPromiseValue"));
} catch {
}
var hx = Av;
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
Z(Cn, "inspectObject");
var Na = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Rv(e, t) {
  let r = "";
  return Na && Na in e && (r = e[Na]), r = r || e.constructor.name, (!r || r === "_class") && (r = "<Anonymous Class>"), t.truncate -= r.length, `${r}${Cn(e, t)}`;
}
Z(Rv, "inspectClass");
function Iv(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${bt(e, t)} ]`);
}
Z(Iv, "inspectArguments");
var dx = [
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
  const r = Object.getOwnPropertyNames(e).filter((o) => dx.indexOf(o) === -1), n = e.name;
  t.truncate -= n.length;
  let i = "";
  if (typeof e.message == "string" ? i = nr(e.message, t.truncate) : r.unshift("message"), i = i ? `: ${i}` : "", t.truncate -= i.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const a = bt(r.map((o) => [o, e[o]]), t, Xr);
  return `${n}${i}${a ? ` { ${a} }` : ""}`;
}
Z(kv, "inspectObject");
function Nv([e, t], r) {
  return r.truncate -= 3, t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
Z(Nv, "inspectAttribute");
function Si(e, t) {
  return bt(e, t, Wc, `
`);
}
Z(Si, "inspectHTMLCollection");
function Wc(e, t) {
  const r = e.getAttributeNames(), n = e.tagName.toLowerCase(), i = t.stylize(`<${n}`, "special"), a = t.stylize(">", "special"), o = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let s = "";
  r.length > 0 && (s += " ", s += bt(r.map((l) => [l, e.getAttribute(l)]), t, Nv, " ")), t.truncate -= s.length;
  const u = t.truncate;
  let c = Si(e.children, t);
  return c && c.length > u && (c = `${Yr}(${e.children.length})`), `${i}${s}${a}${c}${o}`;
}
Z(Wc, "inspectHTML");
var px = typeof Symbol == "function" && typeof Symbol.for == "function", Pa = px ? Symbol.for("chai/inspect") : "@@chai/inspect", Wr = !1;
try {
  const e = ax();
  Wr = e.inspect ? e.inspect.custom : !1;
} catch {
  Wr = !1;
}
var ah = /* @__PURE__ */ new WeakMap(), sh = {}, oh = {
  undefined: (e, t) => t.stylize("undefined", "undefined"),
  null: (e, t) => t.stylize("null", "null"),
  boolean: (e, t) => t.stylize(String(e), "boolean"),
  Boolean: (e, t) => t.stylize(String(e), "boolean"),
  number: Xu,
  Number: Xu,
  bigint: Zu,
  BigInt: Zu,
  string: Ju,
  String: Ju,
  function: Yu,
  Function: Yu,
  symbol: Qu,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: Qu,
  Array: bv,
  Date: _v,
  Map: Ev,
  Set: Tv,
  RegExp: Sv,
  Promise: hx,
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
  HTMLCollection: Si,
  NodeList: Si
}, mx = /* @__PURE__ */ Z((e, t, r) => Pa in e && typeof e[Pa] == "function" ? e[Pa](t) : Wr && Wr in e && typeof e[Wr] == "function" ? e[Wr](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && ah.has(e.constructor) ? ah.get(e.constructor)(e, t) : sh[r] ? sh[r](e, t) : "", "inspectCustom"), gx = Object.prototype.toString;
function Oi(e, t = {}) {
  const r = gv(t, Oi), { customInspect: n } = r;
  let i = e === null ? "null" : typeof e;
  if (i === "object" && (i = gx.call(e).slice(8, -1)), i in oh)
    return oh[i](e, r);
  if (n && e) {
    const o = mx(e, r, i);
    if (o)
      return typeof o == "string" ? o : Oi(o, r);
  }
  const a = e ? Object.getPrototypeOf(e) : !1;
  return a === Object.prototype || a === null ? Cn(e, r) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? Wc(e, r) : "constructor" in e ? e.constructor !== Object ? Rv(e, r) : Cn(e, r) : e === Object(e) ? Cn(e, r) : r.stylize(String(e), i);
}
Z(Oi, "inspect");
var lt = {
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
function Ae(e, t, r, n) {
  var i = {
    colors: n,
    depth: typeof r > "u" ? 2 : r,
    showHidden: t,
    truncate: lt.truncateThreshold ? lt.truncateThreshold : 1 / 0
  };
  return Oi(e, i);
}
Z(Ae, "inspect");
function Er(e) {
  var t = Ae(e), r = Object.prototype.toString.call(e);
  if (lt.truncateThreshold && t.length >= lt.truncateThreshold) {
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
Z(Er, "objDisplay");
function Gc(e, t) {
  var r = Oe(e, "negate"), n = Oe(e, "object"), i = t[3], a = Vi(e, t), o = r ? t[2] : t[1], s = Oe(e, "message");
  return typeof o == "function" && (o = o()), o = o || "", o = o.replace(/#\{this\}/g, function() {
    return Er(n);
  }).replace(/#\{act\}/g, function() {
    return Er(a);
  }).replace(/#\{exp\}/g, function() {
    return Er(i);
  }), s ? s + ": " + o : o;
}
Z(Gc, "getMessage");
function Rt(e, t, r) {
  var n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), r = arguments.length === 3 ? r : !0;
  for (var i in n)
    (r || i !== "object" && i !== "ssfi" && i !== "lockSsfi" && i != "message") && (t.__flags[i] = n[i]);
}
Z(Rt, "transferFlags");
function ec(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
Z(ec, "type");
function Vc() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
Z(Vc, "FakeMap");
Vc.prototype = {
  get: /* @__PURE__ */ Z(function(t) {
    return t[this._key];
  }, "get"),
  set: /* @__PURE__ */ Z(function(t, r) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: r,
      configurable: !0
    });
  }, "set")
};
var Pv = typeof WeakMap == "function" ? WeakMap : Vc;
function tc(e, t, r) {
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
Z(tc, "memoizeCompare");
function xn(e, t, r, n) {
  if (!(!r || Rr(e) || Rr(t))) {
    var i = r.get(e);
    i ? i.set(t, n) : (i = new Pv(), i.set(t, n), r.set(e, i));
  }
}
Z(xn, "memoizeSet");
var Mv = zn;
function zn(e, t, r) {
  if (r && r.comparator)
    return rc(e, t, r);
  var n = Hc(e, t);
  return n !== null ? n : rc(e, t, r);
}
Z(zn, "deepEqual");
function Hc(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : Rr(e) || Rr(t) ? !1 : null;
}
Z(Hc, "simpleEqual");
function rc(e, t, r) {
  r = r || {}, r.memoize = r.memoize === !1 ? !1 : r.memoize || new Pv();
  var n = r && r.comparator, i = tc(e, t, r.memoize);
  if (i !== null)
    return i;
  var a = tc(t, e, r.memoize);
  if (a !== null)
    return a;
  if (n) {
    var o = n(e, t);
    if (o === !1 || o === !0)
      return xn(e, t, r.memoize, o), o;
    var s = Hc(e, t);
    if (s !== null)
      return s;
  }
  var u = ec(e);
  if (u !== ec(t))
    return xn(e, t, r.memoize, !1), !1;
  xn(e, t, r.memoize, !0);
  var c = Dv(e, t, u, r);
  return xn(e, t, r.memoize, c), c;
}
Z(rc, "extensiveDeepEqual");
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
      return Kc(e, t, ["name", "message", "code"], n);
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
      return nc(e, t, n);
    case "Map":
      return nc(e, t, n);
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
Z(Dv, "extensiveDeepEqualByType");
function Fv(e, t) {
  return e.toString() === t.toString();
}
Z(Fv, "regexpEqual");
function nc(e, t, r) {
  try {
    if (e.size !== t.size)
      return !1;
    if (e.size === 0)
      return !0;
  } catch {
    return !1;
  }
  var n = [], i = [];
  return e.forEach(/* @__PURE__ */ Z(function(o, s) {
    n.push([o, s]);
  }, "gatherEntries")), t.forEach(/* @__PURE__ */ Z(function(o, s) {
    i.push([o, s]);
  }, "gatherEntries")), cr(n.sort(), i.sort(), r);
}
Z(nc, "entriesEqual");
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
Z(cr, "iterableEqual");
function Lv(e, t, r) {
  return cr(Ti(e), Ti(t), r);
}
Z(Lv, "generatorEqual");
function Bv(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
Z(Bv, "hasIteratorFunction");
function ic(e) {
  if (Bv(e))
    try {
      return Ti(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
Z(ic, "getIteratorEntries");
function Ti(e) {
  for (var t = e.next(), r = [t.value]; t.done === !1; )
    t = e.next(), r.push(t.value);
  return r;
}
Z(Ti, "getGeneratorEntries");
function ac(e) {
  var t = [];
  for (var r in e)
    t.push(r);
  return t;
}
Z(ac, "getEnumerableKeys");
function sc(e) {
  for (var t = [], r = Object.getOwnPropertySymbols(e), n = 0; n < r.length; n += 1) {
    var i = r[n];
    Object.getOwnPropertyDescriptor(e, i).enumerable && t.push(i);
  }
  return t;
}
Z(sc, "getEnumerableSymbols");
function Kc(e, t, r, n) {
  var i = r.length;
  if (i === 0)
    return !0;
  for (var a = 0; a < i; a += 1)
    if (zn(e[r[a]], t[r[a]], n) === !1)
      return !1;
  return !0;
}
Z(Kc, "keysEqual");
function jv(e, t, r) {
  var n = ac(e), i = ac(t), a = sc(e), o = sc(t);
  if (n = n.concat(a), i = i.concat(o), n.length && n.length === i.length)
    return cr(oc(n).sort(), oc(i).sort()) === !1 ? !1 : Kc(e, t, n, r);
  var s = ic(e), u = ic(t);
  return s.length && s.length === u.length ? (s.sort(), u.sort(), cr(s, u, r)) : n.length === 0 && s.length === 0 && i.length === 0 && u.length === 0;
}
Z(jv, "objectEqual");
function Rr(e) {
  return e === null || typeof e != "object";
}
Z(Rr, "isPrimitive");
function oc(e) {
  return e.map(/* @__PURE__ */ Z(function(r) {
    return typeof r == "symbol" ? r.toString() : r;
  }, "mapSymbol"));
}
Z(oc, "mapSymbols");
function Hi(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
Z(Hi, "hasProperty");
function zv(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((n) => {
    if (n === "constructor" || n === "__proto__" || n === "prototype")
      return {};
    const a = /^\[(\d+)\]$/.exec(n);
    let o = null;
    return a ? o = { i: parseFloat(a[1]) } : o = { p: n.replace(/\\([.[\]])/g, "$1") }, o;
  });
}
Z(zv, "parsePath");
function uc(e, t, r) {
  let n = e, i = null;
  r = typeof r > "u" ? t.length : r;
  for (let a = 0; a < r; a++) {
    const o = t[a];
    n && (typeof o.p > "u" ? n = n[o.i] : n = n[o.p], a === r - 1 && (i = n));
  }
  return i;
}
Z(uc, "internalGetPathValue");
function Yc(e, t) {
  const r = zv(t), n = r[r.length - 1], i = {
    parent: r.length > 1 ? uc(e, r, r.length - 1) : e,
    name: n.p || n.i,
    value: uc(e, r)
  };
  return i.exists = Hi(i.parent, i.name), i;
}
Z(Yc, "getPathInfo");
function k(e, t, r, n) {
  return Oe(this, "ssfi", r || k), Oe(this, "lockSsfi", n), Oe(this, "object", e), Oe(this, "message", t), Oe(this, "eql", lt.deepEqual || Mv), rn(this);
}
Z(k, "Assertion");
Object.defineProperty(k, "includeStack", {
  get: function() {
    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), lt.includeStack;
  },
  set: function(e) {
    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), lt.includeStack = e;
  }
});
Object.defineProperty(k, "showDiff", {
  get: function() {
    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), lt.showDiff;
  },
  set: function(e) {
    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), lt.showDiff = e;
  }
});
k.addProperty = function(e, t) {
  Xc(this.prototype, e, t);
};
k.addMethod = function(e, t) {
  Zc(this.prototype, e, t);
};
k.addChainableMethod = function(e, t, r) {
  ef(this.prototype, e, t, r);
};
k.overwriteProperty = function(e, t) {
  Jc(this.prototype, e, t);
};
k.overwriteMethod = function(e, t) {
  Qc(this.prototype, e, t);
};
k.overwriteChainableMethod = function(e, t, r) {
  tf(this.prototype, e, t, r);
};
k.prototype.assert = function(e, t, r, n, i, a) {
  var o = $c(this, arguments);
  if (a !== !1 && (a = !0), n === void 0 && i === void 0 && (a = !1), lt.showDiff !== !0 && (a = !1), !o) {
    t = Gc(this, arguments);
    var s = Vi(this, arguments), u = {
      actual: s,
      expected: n,
      showDiff: a
    }, c = af(this, arguments);
    throw c && (u.operator = c), new Ie(
      t,
      u,
      lt.includeStack ? this.assert : Oe(this, "ssfi")
    );
  }
};
Object.defineProperty(
  k.prototype,
  "_obj",
  {
    get: function() {
      return Oe(this, "object");
    },
    set: function(e) {
      Oe(this, "object", e);
    }
  }
);
function qn() {
  return lt.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
Z(qn, "isProxyEnabled");
function Xc(e, t, r) {
  r = r === void 0 ? function() {
  } : r, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ Z(function n() {
        !qn() && !Oe(this, "lockSsfi") && Oe(this, "ssfi", n);
        var i = r.call(this);
        if (i !== void 0)
          return i;
        var a = new k();
        return Rt(this, a), a;
      }, "propertyGetter"),
      configurable: !0
    }
  );
}
Z(Xc, "addProperty");
var vx = Object.getOwnPropertyDescriptor(function() {
}, "length");
function Un(e, t, r) {
  return vx.configurable && Object.defineProperty(e, "length", {
    get: function() {
      throw Error(r ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".');
    }
  }), e;
}
Z(Un, "addLengthGuard");
function qv(e) {
  var t = Object.getOwnPropertyNames(e);
  function r(i) {
    t.indexOf(i) === -1 && t.push(i);
  }
  Z(r, "addProperty");
  for (var n = Object.getPrototypeOf(e); n !== null; )
    Object.getOwnPropertyNames(n).forEach(r), n = Object.getPrototypeOf(n);
  return t;
}
Z(qv, "getProperties");
var uh = ["__flags", "__methods", "_obj", "assert"];
function rn(e, t) {
  return qn() ? new Proxy(e, {
    get: /* @__PURE__ */ Z(function r(n, i) {
      if (typeof i == "string" && lt.proxyExcludedKeys.indexOf(i) === -1 && !Reflect.has(n, i)) {
        if (t)
          throw Error("Invalid Chai property: " + t + "." + i + '. See docs for proper usage of "' + t + '".');
        var a = null, o = 4;
        throw qv(n).forEach(function(s) {
          if (!Object.prototype.hasOwnProperty(s) && uh.indexOf(s) === -1) {
            var u = Uv(
              i,
              s,
              o
            );
            u < o && (a = s, o = u);
          }
        }), Error(a !== null ? "Invalid Chai property: " + i + '. Did you mean "' + a + '"?' : "Invalid Chai property: " + i);
      }
      return uh.indexOf(i) === -1 && !Oe(n, "lockSsfi") && Oe(n, "ssfi", r), Reflect.get(n, i);
    }, "proxyGetter")
  }) : e;
}
Z(rn, "proxify");
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
Z(Uv, "stringDistanceCapped");
function Zc(e, t, r) {
  var n = /* @__PURE__ */ Z(function() {
    Oe(this, "lockSsfi") || Oe(this, "ssfi", n);
    var i = r.apply(this, arguments);
    if (i !== void 0)
      return i;
    var a = new k();
    return Rt(this, a), a;
  }, "methodWrapper");
  Un(n, t, !1), e[t] = rn(n, t);
}
Z(Zc, "addMethod");
function Jc(e, t, r) {
  var n = Object.getOwnPropertyDescriptor(e, t), i = /* @__PURE__ */ Z(function() {
  }, "_super");
  n && typeof n.get == "function" && (i = n.get), Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ Z(function a() {
        !qn() && !Oe(this, "lockSsfi") && Oe(this, "ssfi", a);
        var o = Oe(this, "lockSsfi");
        Oe(this, "lockSsfi", !0);
        var s = r(i).call(this);
        if (Oe(this, "lockSsfi", o), s !== void 0)
          return s;
        var u = new k();
        return Rt(this, u), u;
      }, "overwritingPropertyGetter"),
      configurable: !0
    }
  );
}
Z(Jc, "overwriteProperty");
function Qc(e, t, r) {
  var n = e[t], i = /* @__PURE__ */ Z(function() {
    throw new Error(t + " is not a function");
  }, "_super");
  n && typeof n == "function" && (i = n);
  var a = /* @__PURE__ */ Z(function() {
    Oe(this, "lockSsfi") || Oe(this, "ssfi", a);
    var o = Oe(this, "lockSsfi");
    Oe(this, "lockSsfi", !0);
    var s = r(i).apply(this, arguments);
    if (Oe(this, "lockSsfi", o), s !== void 0)
      return s;
    var u = new k();
    return Rt(this, u), u;
  }, "overwritingMethodWrapper");
  Un(a, t, !1), e[t] = rn(a, t);
}
Z(Qc, "overwriteMethod");
var yx = typeof Object.setPrototypeOf == "function", ch = /* @__PURE__ */ Z(function() {
}, "testFn"), bx = Object.getOwnPropertyNames(ch).filter(function(e) {
  var t = Object.getOwnPropertyDescriptor(ch, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), _x = Function.prototype.call, wx = Function.prototype.apply;
function ef(e, t, r, n) {
  typeof n != "function" && (n = /* @__PURE__ */ Z(function() {
  }, "chainingBehavior"));
  var i = {
    method: r,
    chainingBehavior: n
  };
  e.__methods || (e.__methods = {}), e.__methods[t] = i, Object.defineProperty(
    e,
    t,
    {
      get: /* @__PURE__ */ Z(function() {
        i.chainingBehavior.call(this);
        var o = /* @__PURE__ */ Z(function() {
          Oe(this, "lockSsfi") || Oe(this, "ssfi", o);
          var c = i.method.apply(this, arguments);
          if (c !== void 0)
            return c;
          var l = new k();
          return Rt(this, l), l;
        }, "chainableMethodWrapper");
        if (Un(o, t, !0), yx) {
          var s = Object.create(this);
          s.call = _x, s.apply = wx, Object.setPrototypeOf(o, s);
        } else {
          var u = Object.getOwnPropertyNames(e);
          u.forEach(function(c) {
            if (bx.indexOf(c) === -1) {
              var l = Object.getOwnPropertyDescriptor(e, c);
              Object.defineProperty(o, c, l);
            }
          });
        }
        return Rt(this, o), rn(o);
      }, "chainableMethodGetter"),
      configurable: !0
    }
  );
}
Z(ef, "addChainableMethod");
function tf(e, t, r, n) {
  var i = e.__methods[t], a = i.chainingBehavior;
  i.chainingBehavior = /* @__PURE__ */ Z(function() {
    var u = n(a).call(this);
    if (u !== void 0)
      return u;
    var c = new k();
    return Rt(this, c), c;
  }, "overwritingChainableMethodGetter");
  var o = i.method;
  i.method = /* @__PURE__ */ Z(function() {
    var u = r(o).apply(this, arguments);
    if (u !== void 0)
      return u;
    var c = new k();
    return Rt(this, c), c;
  }, "overwritingChainableMethodWrapper");
}
Z(tf, "overwriteChainableMethod");
function Ci(e, t) {
  return Ae(e) < Ae(t) ? -1 : 1;
}
Z(Ci, "compareByInspect");
function rf(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
Z(rf, "getOwnEnumerablePropertySymbols");
function nf(e) {
  return Object.keys(e).concat(rf(e));
}
Z(nf, "getOwnEnumerableProperties");
function $v(e) {
  return e !== e;
}
Z($v, "_isNaN");
var Ai = Number.isNaN || $v;
function Wv(e) {
  var t = Ne(e), r = ["Array", "Object", "Function"];
  return r.indexOf(t) !== -1;
}
Z(Wv, "isObjectType");
function af(e, t) {
  var r = Oe(e, "operator"), n = Oe(e, "negate"), i = t[3], a = n ? t[2] : t[1];
  if (r)
    return r;
  if (typeof a == "function" && (a = a()), a = a || "", !!a && !/\shave\s/.test(a)) {
    var o = Wv(i);
    return /\snot\s/.test(a) ? o ? "notDeepStrictEqual" : "notStrictEqual" : o ? "deepStrictEqual" : "strictEqual";
  }
}
Z(af, "getOperator");
function Ki(e) {
  return e.name;
}
Z(Ki, "getName");
function Ri(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
Z(Ri, "isRegExp");
function Ye(e) {
  return ["Number", "BigInt"].includes(Ne(e));
}
Z(Ye, "isNumeric");
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
  k.addProperty(e);
});
k.addProperty("not", function() {
  $(this, "negate", !0);
});
k.addProperty("deep", function() {
  $(this, "deep", !0);
});
k.addProperty("nested", function() {
  $(this, "nested", !0);
});
k.addProperty("own", function() {
  $(this, "own", !0);
});
k.addProperty("ordered", function() {
  $(this, "ordered", !0);
});
k.addProperty("any", function() {
  $(this, "any", !0), $(this, "all", !1);
});
k.addProperty("all", function() {
  $(this, "all", !0), $(this, "any", !1);
});
var fh = {
  function: ["function", "asyncfunction", "generatorfunction", "asyncgeneratorfunction"],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function sf(e, t) {
  t && $(this, "message", t), e = e.toLowerCase();
  var r = $(this, "object"), n = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const i = Ne(r).toLowerCase();
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
Z(sf, "an");
k.addChainableMethod("an", sf);
k.addChainableMethod("a", sf);
function Gv(e, t) {
  return Ai(e) && Ai(t) || e === t;
}
Z(Gv, "SameValueZero");
function $n() {
  $(this, "contains", !0);
}
Z($n, "includeChainingBehavior");
function Wn(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = Ne(r).toLowerCase(), i = $(this, "message"), a = $(this, "negate"), o = $(this, "ssfi"), s = $(this, "deep"), u = s ? "deep " : "", c = s ? $(this, "eql") : Gv;
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
          i + "the given combination of arguments (" + n + " and " + Ne(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + Ne(e).toLowerCase(),
          void 0,
          o
        );
      var f = Object.keys(e), d = null, h = 0;
      if (f.forEach(function(m) {
        var p = new k(r);
        if (Rt(this, p, !0), $(p, "lockSsfi", !0), !a || f.length === 1) {
          p.property(m, e[m]);
          return;
        }
        try {
          p.property(m, e[m]);
        } catch (b) {
          if (!dt.compatibleConstructor(b, Ie))
            throw b;
          d === null && (d = b), h++;
        }
      }, this), a && f.length > 1 && h === f.length)
        throw d;
      return;
  }
  this.assert(
    l,
    "expected #{this} to " + u + "include " + Ae(e),
    "expected #{this} to not " + u + "include " + Ae(e)
  );
}
Z(Wn, "include");
k.addChainableMethod("include", Wn, $n);
k.addChainableMethod("contain", Wn, $n);
k.addChainableMethod("contains", Wn, $n);
k.addChainableMethod("includes", Wn, $n);
k.addProperty("ok", function() {
  this.assert(
    $(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
k.addProperty("true", function() {
  this.assert(
    $(this, "object") === !0,
    "expected #{this} to be true",
    "expected #{this} to be false",
    !$(this, "negate")
  );
});
k.addProperty("numeric", function() {
  const e = $(this, "object");
  this.assert(
    ["Number", "BigInt"].includes(Ne(e)),
    "expected #{this} to be numeric",
    "expected #{this} to not be numeric",
    !$(this, "negate")
  );
});
k.addProperty("callable", function() {
  const e = $(this, "object"), t = $(this, "ssfi"), r = $(this, "message"), n = r ? `${r}: ` : "", i = $(this, "negate"), a = i ? `${n}expected ${Ae(e)} not to be a callable function` : `${n}expected ${Ae(e)} to be a callable function`, o = ["Function", "AsyncFunction", "GeneratorFunction", "AsyncGeneratorFunction"].includes(Ne(e));
  if (o && i || !o && !i)
    throw new Ie(
      a,
      void 0,
      t
    );
});
k.addProperty("false", function() {
  this.assert(
    $(this, "object") === !1,
    "expected #{this} to be false",
    "expected #{this} to be true",
    !!$(this, "negate")
  );
});
k.addProperty("null", function() {
  this.assert(
    $(this, "object") === null,
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
k.addProperty("undefined", function() {
  this.assert(
    $(this, "object") === void 0,
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
k.addProperty("NaN", function() {
  this.assert(
    Ai($(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function of() {
  var e = $(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
Z(of, "assertExist");
k.addProperty("exist", of);
k.addProperty("exists", of);
k.addProperty("empty", function() {
  var e = $(this, "object"), t = $(this, "ssfi"), r = $(this, "message"), n;
  switch (r = r ? r + ": " : "", Ne(e).toLowerCase()) {
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
          r + ".empty was passed non-string primitive " + Ae(e),
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
function uf() {
  var e = $(this, "object"), t = Ne(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
Z(uf, "checkArguments");
k.addProperty("arguments", uf);
k.addProperty("Arguments", uf);
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
Z(Yi, "assertEqual");
k.addMethod("equal", Yi);
k.addMethod("equals", Yi);
k.addMethod("eq", Yi);
function cf(e, t) {
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
Z(cf, "assertEql");
k.addMethod("eql", cf);
k.addMethod("eqls", cf);
function Xi(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = Ne(r).toLowerCase(), u = Ne(e).toLowerCase();
  if (n && s !== "map" && s !== "set" && new k(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    throw new Ie(a + "the argument to above must be a date", void 0, o);
  if (!Ye(e) && (n || Ye(r)))
    throw new Ie(a + "the argument to above must be a number", void 0, o);
  if (!n && s !== "date" && !Ye(r)) {
    var c = s === "string" ? "'" + r + "'" : r;
    throw new Ie(a + "expected " + c + " to be a number or a date", void 0, o);
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
Z(Xi, "assertAbove");
k.addMethod("above", Xi);
k.addMethod("gt", Xi);
k.addMethod("greaterThan", Xi);
function Zi(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = Ne(r).toLowerCase(), u = Ne(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new k(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to least must be a date";
  else if (!Ye(e) && (n || Ye(r)))
    c = a + "the argument to least must be a number";
  else if (!n && s !== "date" && !Ye(r)) {
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
Z(Zi, "assertLeast");
k.addMethod("least", Zi);
k.addMethod("gte", Zi);
k.addMethod("greaterThanOrEqual", Zi);
function Ji(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = Ne(r).toLowerCase(), u = Ne(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new k(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to below must be a date";
  else if (!Ye(e) && (n || Ye(r)))
    c = a + "the argument to below must be a number";
  else if (!n && s !== "date" && !Ye(r)) {
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
Z(Ji, "assertBelow");
k.addMethod("below", Ji);
k.addMethod("lt", Ji);
k.addMethod("lessThan", Ji);
function Qi(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "doLength"), i = $(this, "message"), a = i ? i + ": " : "", o = $(this, "ssfi"), s = Ne(r).toLowerCase(), u = Ne(e).toLowerCase(), c, l = !0;
  if (n && s !== "map" && s !== "set" && new k(r, i, o, !0).to.have.property("length"), !n && s === "date" && u !== "date")
    c = a + "the argument to most must be a date";
  else if (!Ye(e) && (n || Ye(r)))
    c = a + "the argument to most must be a number";
  else if (!n && s !== "date" && !Ye(r)) {
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
Z(Qi, "assertMost");
k.addMethod("most", Qi);
k.addMethod("lte", Qi);
k.addMethod("lessThanOrEqual", Qi);
k.addMethod("within", function(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "doLength"), a = $(this, "message"), o = a ? a + ": " : "", s = $(this, "ssfi"), u = Ne(n).toLowerCase(), c = Ne(e).toLowerCase(), l = Ne(t).toLowerCase(), f, d = !0, h = c === "date" && l === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (i && u !== "map" && u !== "set" && new k(n, a, s, !0).to.have.property("length"), !i && u === "date" && (c !== "date" || l !== "date"))
    f = o + "the arguments to within must be dates";
  else if ((!Ye(e) || !Ye(t)) && (i || Ye(n)))
    f = o + "the arguments to within must be numbers";
  else if (!i && u !== "date" && !Ye(n)) {
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
function ff(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "ssfi"), i = $(this, "message");
  try {
    var a = r instanceof e;
  } catch (s) {
    throw s instanceof TypeError ? (i = i ? i + ": " : "", new Ie(
      i + "The instanceof assertion needs a constructor but " + Ne(e) + " was given.",
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
Z(ff, "assertInstanceOf");
k.addMethod("instanceof", ff);
k.addMethod("instanceOf", ff);
function lf(e, t, r) {
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
  var c = $(this, "deep"), l = $(this, "negate"), f = n ? Yc(o, e) : null, d = n ? f.value : o[e], h = c ? $(this, "eql") : (b, y) => b === y, m = "";
  c && (m += "deep "), i && (m += "own "), n && (m += "nested "), m += "property ";
  var p;
  i ? p = Object.prototype.hasOwnProperty.call(o, e) : n ? p = f.exists : p = Hi(o, e), (!l || arguments.length === 1) && this.assert(
    p,
    "expected #{this} to have " + m + Ae(e),
    "expected #{this} to not have " + m + Ae(e)
  ), arguments.length > 1 && this.assert(
    p && h(t, d),
    "expected #{this} to have " + m + Ae(e) + " of #{exp}, but got #{act}",
    "expected #{this} to not have " + m + Ae(e) + " of #{act}",
    t,
    d
  ), $(this, "object", d);
}
Z(lf, "assertProperty");
k.addMethod("property", lf);
function hf(e, t, r) {
  $(this, "own", !0), lf.apply(this, arguments);
}
Z(hf, "assertOwnProperty");
k.addMethod("ownProperty", hf);
k.addMethod("haveOwnProperty", hf);
function df(e, t, r) {
  typeof t == "string" && (r = t, t = null), r && $(this, "message", r);
  var n = $(this, "object"), i = Object.getOwnPropertyDescriptor(Object(n), e), a = $(this, "eql");
  i && t ? this.assert(
    a(t, i),
    "expected the own property descriptor for " + Ae(e) + " on #{this} to match " + Ae(t) + ", got " + Ae(i),
    "expected the own property descriptor for " + Ae(e) + " on #{this} to not match " + Ae(t),
    t,
    i,
    !0
  ) : this.assert(
    i,
    "expected #{this} to have an own property descriptor for " + Ae(e),
    "expected #{this} to not have an own property descriptor for " + Ae(e)
  ), $(this, "object", i);
}
Z(df, "assertOwnPropertyDescriptor");
k.addMethod("ownPropertyDescriptor", df);
k.addMethod("haveOwnPropertyDescriptor", df);
function pf() {
  $(this, "doLength", !0);
}
Z(pf, "assertLengthChain");
function mf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = Ne(r).toLowerCase(), i = $(this, "message"), a = $(this, "ssfi"), o = "length", s;
  switch (n) {
    case "map":
    case "set":
      o = "size", s = r.size;
      break;
    default:
      new k(r, i, a, !0).to.have.property("length"), s = r.length;
  }
  this.assert(
    s == e,
    "expected #{this} to have a " + o + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + o + " of #{act}",
    e,
    s
  );
}
Z(mf, "assertLength");
k.addChainableMethod("length", mf, pf);
k.addChainableMethod("lengthOf", mf, pf);
function gf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object");
  this.assert(
    e.exec(r),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
Z(gf, "assertMatch");
k.addMethod("match", gf);
k.addMethod("matches", gf);
k.addMethod("string", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new k(r, n, i, !0).is.a("string"), this.assert(
    ~r.indexOf(e),
    "expected #{this} to contain " + Ae(e),
    "expected #{this} to not contain " + Ae(e)
  );
});
function vf(e) {
  var t = $(this, "object"), r = Ne(t), n = Ne(e), i = $(this, "ssfi"), a = $(this, "deep"), o, s = "", u, c = !0, l = $(this, "message");
  l = l ? l + ": " : "";
  var f = l + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (r === "Map" || r === "Set")
    s = a ? "deeply " : "", u = [], t.forEach(function(_, x) {
      u.push(x);
    }), n !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (u = nf(t), n) {
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
      return Ae(_);
    });
    var y = e.pop();
    m && (o = e.join(", ") + ", and " + y), h && (o = e.join(", ") + ", or " + y);
  } else
    o = Ae(e[0]);
  o = (d > 1 ? "keys " : "key ") + o, o = ($(this, "contains") ? "contain " : "have ") + o, this.assert(
    c,
    "expected #{this} to " + s + o,
    "expected #{this} to not " + s + o,
    p.slice(0).sort(Ci),
    u.sort(Ci),
    !0
  );
}
Z(vf, "assertKeys");
k.addMethod("keys", vf);
k.addMethod("key", vf);
function ea(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "ssfi"), a = $(this, "message"), o = $(this, "negate") || !1;
  new k(n, a, i, !0).is.a("function"), (Ri(e) || typeof e == "string") && (t = e, e = null);
  let s, u = !1;
  try {
    n();
  } catch (_) {
    u = !0, s = _;
  }
  var c = e === void 0 && t === void 0, l = !!(e && t), f = !1, d = !1;
  if (c || !c && !o) {
    var h = "an error";
    e instanceof Error ? h = "#{exp}" : e && (h = dt.getConstructorName(e));
    let _ = s;
    if (s instanceof Error)
      _ = s.toString();
    else if (typeof s == "string")
      _ = s;
    else if (s && (typeof s == "object" || typeof s == "function"))
      try {
        _ = dt.getConstructorName(s);
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
      var m = dt.compatibleInstance(s, e);
      m === o && (l && o ? f = !0 : this.assert(
        o,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (s && !o ? " but #{act} was thrown" : ""),
        e.toString(),
        s.toString()
      ));
    }
    var p = dt.compatibleConstructor(s, e);
    p === o && (l && o ? f = !0 : this.assert(
      o,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (s ? " but #{act} was thrown" : ""),
      e instanceof Error ? e.toString() : e && dt.getConstructorName(e),
      s instanceof Error ? s.toString() : s && dt.getConstructorName(s)
    ));
  }
  if (s && t !== void 0 && t !== null) {
    var b = "including";
    Ri(t) && (b = "matching");
    var y = dt.compatibleMessage(s, t);
    y === o && (l && o ? d = !0 : this.assert(
      o,
      "expected #{this} to throw error " + b + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + b + " #{exp}",
      t,
      dt.getMessage(s)
    ));
  }
  f && d && this.assert(
    o,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (s ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && dt.getConstructorName(e),
    s instanceof Error ? s.toString() : s && dt.getConstructorName(s)
  ), $(this, "object", s);
}
Z(ea, "assertThrows");
k.addMethod("throw", ea);
k.addMethod("throws", ea);
k.addMethod("Throw", ea);
function yf(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "itself"), i = typeof r == "function" && !n ? r.prototype[e] : r[e];
  this.assert(
    typeof i == "function",
    "expected #{this} to respond to " + Ae(e),
    "expected #{this} to not respond to " + Ae(e)
  );
}
Z(yf, "respondTo");
k.addMethod("respondTo", yf);
k.addMethod("respondsTo", yf);
k.addProperty("itself", function() {
  $(this, "itself", !0);
});
function bf(e, t) {
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
Z(bf, "satisfy");
k.addMethod("satisfy", bf);
k.addMethod("satisfies", bf);
function _f(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new k(n, i, a, !0).is.numeric;
  let o = "A `delta` value is required for `closeTo`";
  if (t == null)
    throw new Ie(i ? `${i}: ${o}` : o, void 0, a);
  if (new k(t, i, a, !0).is.numeric, o = "A `expected` value is required for `closeTo`", e == null)
    throw new Ie(i ? `${i}: ${o}` : o, void 0, a);
  new k(e, i, a, !0).is.numeric;
  const s = /* @__PURE__ */ Z((u) => u < 0n ? -u : u, "abs");
  this.assert(
    s(n - e) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
Z(_f, "closeTo");
k.addMethod("closeTo", _f);
k.addMethod("approximately", _f);
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
    return a.some(function(l, f) {
      return r(s, l) ? (n || a.splice(f, 1), !0) : !1;
    });
  });
}
Z(Vv, "isSubsetOf");
k.addMethod("members", function(e, t) {
  t && $(this, "message", t);
  var r = $(this, "object"), n = $(this, "message"), i = $(this, "ssfi");
  new k(r, n, i, !0).to.be.iterable, new k(e, n, i, !0).to.be.iterable;
  var a = $(this, "contains"), o = $(this, "ordered"), s, u, c;
  a ? (s = o ? "an ordered superset" : "a superset", u = "expected #{this} to be " + s + " of #{exp}", c = "expected #{this} to not be " + s + " of #{exp}") : (s = o ? "ordered members" : "members", u = "expected #{this} to have the same " + s + " as #{exp}", c = "expected #{this} to not have the same " + s + " as #{exp}");
  var l = $(this, "deep") ? $(this, "eql") : void 0;
  this.assert(
    Vv(e, r, l, a, o),
    u,
    c,
    e,
    r,
    !0
  );
});
k.addProperty("iterable", function(e) {
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
  new k(e, n, i, !0).to.be.an("array"), a ? this.assert(
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
Z(Hv, "oneOf");
k.addMethod("oneOf", Hv);
function wf(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new k(n, i, a, !0).is.a("function");
  var o;
  t ? (new k(e, i, a, !0).to.have.property(t), o = e[t]) : (new k(e, i, a, !0).is.a("function"), o = e()), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "change"), $(this, "realDelta", s !== o), this.assert(
    o !== s,
    "expected " + u + " to change",
    "expected " + u + " to not change"
  );
}
Z(wf, "assertChanges");
k.addMethod("change", wf);
k.addMethod("changes", wf);
function xf(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new k(n, i, a, !0).is.a("function");
  var o;
  t ? (new k(e, i, a, !0).to.have.property(t), o = e[t]) : (new k(e, i, a, !0).is.a("function"), o = e()), new k(o, i, a, !0).is.a("number"), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "increase"), $(this, "realDelta", s - o), this.assert(
    s - o > 0,
    "expected " + u + " to increase",
    "expected " + u + " to not increase"
  );
}
Z(xf, "assertIncreases");
k.addMethod("increase", xf);
k.addMethod("increases", xf);
function Ef(e, t, r) {
  r && $(this, "message", r);
  var n = $(this, "object"), i = $(this, "message"), a = $(this, "ssfi");
  new k(n, i, a, !0).is.a("function");
  var o;
  t ? (new k(e, i, a, !0).to.have.property(t), o = e[t]) : (new k(e, i, a, !0).is.a("function"), o = e()), new k(o, i, a, !0).is.a("number"), n();
  var s = t == null ? e() : e[t], u = t == null ? o : "." + t;
  $(this, "deltaMsgObj", u), $(this, "initialDeltaValue", o), $(this, "finalDeltaValue", s), $(this, "deltaBehavior", "decrease"), $(this, "realDelta", o - s), this.assert(
    s - o < 0,
    "expected " + u + " to decrease",
    "expected " + u + " to not decrease"
  );
}
Z(Ef, "assertDecreases");
k.addMethod("decrease", Ef);
k.addMethod("decreases", Ef);
function Kv(e, t) {
  t && $(this, "message", t);
  var r = $(this, "deltaMsgObj"), n = $(this, "initialDeltaValue"), i = $(this, "finalDeltaValue"), a = $(this, "deltaBehavior"), o = $(this, "realDelta"), s;
  a === "change" ? s = Math.abs(i - n) === Math.abs(e) : s = o === Math.abs(e), this.assert(
    s,
    "expected " + r + " to " + a + " by " + e,
    "expected " + r + " to not " + a + " by " + e
  );
}
Z(Kv, "assertDelta");
k.addMethod("by", Kv);
k.addProperty("extensible", function() {
  var e = $(this, "object"), t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
k.addProperty("sealed", function() {
  var e = $(this, "object"), t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
k.addProperty("frozen", function() {
  var e = $(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
k.addProperty("finite", function(e) {
  var t = $(this, "object");
  this.assert(
    typeof t == "number" && isFinite(t),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function Ii(e, t) {
  return new k(e, t);
}
Z(Ii, "expect");
Ii.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "expect.fail()", new Ie(r, {
    actual: e,
    expected: t,
    operator: n
  }, Ii.fail);
};
var Yv = {};
Uc(Yv, {
  Should: () => Ex,
  should: () => xx
});
function Sf() {
  function e() {
    return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new k(this.valueOf(), null, e) : new k(this, null, e);
  }
  Z(e, "shouldGetter");
  function t(n) {
    Object.defineProperty(this, "should", {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  }
  Z(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", {
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
    new k(n, a).to.equal(i);
  }, r.Throw = function(n, i, a, o) {
    new k(n, o).to.Throw(i, a);
  }, r.exist = function(n, i) {
    new k(n, i).to.exist;
  }, r.not = {}, r.not.equal = function(n, i, a) {
    new k(n, a).to.not.equal(i);
  }, r.not.Throw = function(n, i, a, o) {
    new k(n, o).to.not.Throw(i, a);
  }, r.not.exist = function(n, i) {
    new k(n, i).to.not.exist;
  }, r.throw = r.Throw, r.not.throw = r.not.Throw, r;
}
Z(Sf, "loadShould");
var xx = Sf, Ex = Sf;
function I(e, t) {
  var r = new k(null, null, I, !0);
  r.assert(
    e,
    t,
    "[ negation message unavailable ]"
  );
}
Z(I, "assert");
I.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "assert.fail()", new Ie(r, {
    actual: e,
    expected: t,
    operator: n
  }, I.fail);
};
I.isOk = function(e, t) {
  new k(e, t, I.isOk, !0).is.ok;
};
I.isNotOk = function(e, t) {
  new k(e, t, I.isNotOk, !0).is.not.ok;
};
I.equal = function(e, t, r) {
  var n = new k(e, r, I.equal, !0);
  n.assert(
    t == Oe(n, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    t,
    e,
    !0
  );
};
I.notEqual = function(e, t, r) {
  var n = new k(e, r, I.notEqual, !0);
  n.assert(
    t != Oe(n, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    t,
    e,
    !0
  );
};
I.strictEqual = function(e, t, r) {
  new k(e, r, I.strictEqual, !0).to.equal(t);
};
I.notStrictEqual = function(e, t, r) {
  new k(e, r, I.notStrictEqual, !0).to.not.equal(t);
};
I.deepEqual = I.deepStrictEqual = function(e, t, r) {
  new k(e, r, I.deepEqual, !0).to.eql(t);
};
I.notDeepEqual = function(e, t, r) {
  new k(e, r, I.notDeepEqual, !0).to.not.eql(t);
};
I.isAbove = function(e, t, r) {
  new k(e, r, I.isAbove, !0).to.be.above(t);
};
I.isAtLeast = function(e, t, r) {
  new k(e, r, I.isAtLeast, !0).to.be.least(t);
};
I.isBelow = function(e, t, r) {
  new k(e, r, I.isBelow, !0).to.be.below(t);
};
I.isAtMost = function(e, t, r) {
  new k(e, r, I.isAtMost, !0).to.be.most(t);
};
I.isTrue = function(e, t) {
  new k(e, t, I.isTrue, !0).is.true;
};
I.isNotTrue = function(e, t) {
  new k(e, t, I.isNotTrue, !0).to.not.equal(!0);
};
I.isFalse = function(e, t) {
  new k(e, t, I.isFalse, !0).is.false;
};
I.isNotFalse = function(e, t) {
  new k(e, t, I.isNotFalse, !0).to.not.equal(!1);
};
I.isNull = function(e, t) {
  new k(e, t, I.isNull, !0).to.equal(null);
};
I.isNotNull = function(e, t) {
  new k(e, t, I.isNotNull, !0).to.not.equal(null);
};
I.isNaN = function(e, t) {
  new k(e, t, I.isNaN, !0).to.be.NaN;
};
I.isNotNaN = function(e, t) {
  new k(e, t, I.isNotNaN, !0).not.to.be.NaN;
};
I.exists = function(e, t) {
  new k(e, t, I.exists, !0).to.exist;
};
I.notExists = function(e, t) {
  new k(e, t, I.notExists, !0).to.not.exist;
};
I.isUndefined = function(e, t) {
  new k(e, t, I.isUndefined, !0).to.equal(void 0);
};
I.isDefined = function(e, t) {
  new k(e, t, I.isDefined, !0).to.not.equal(void 0);
};
I.isCallable = function(e, t) {
  new k(e, t, I.isCallable, !0).is.callable;
};
I.isNotCallable = function(e, t) {
  new k(e, t, I.isNotCallable, !0).is.not.callable;
};
I.isObject = function(e, t) {
  new k(e, t, I.isObject, !0).to.be.a("object");
};
I.isNotObject = function(e, t) {
  new k(e, t, I.isNotObject, !0).to.not.be.a("object");
};
I.isArray = function(e, t) {
  new k(e, t, I.isArray, !0).to.be.an("array");
};
I.isNotArray = function(e, t) {
  new k(e, t, I.isNotArray, !0).to.not.be.an("array");
};
I.isString = function(e, t) {
  new k(e, t, I.isString, !0).to.be.a("string");
};
I.isNotString = function(e, t) {
  new k(e, t, I.isNotString, !0).to.not.be.a("string");
};
I.isNumber = function(e, t) {
  new k(e, t, I.isNumber, !0).to.be.a("number");
};
I.isNotNumber = function(e, t) {
  new k(e, t, I.isNotNumber, !0).to.not.be.a("number");
};
I.isNumeric = function(e, t) {
  new k(e, t, I.isNumeric, !0).is.numeric;
};
I.isNotNumeric = function(e, t) {
  new k(e, t, I.isNotNumeric, !0).is.not.numeric;
};
I.isFinite = function(e, t) {
  new k(e, t, I.isFinite, !0).to.be.finite;
};
I.isBoolean = function(e, t) {
  new k(e, t, I.isBoolean, !0).to.be.a("boolean");
};
I.isNotBoolean = function(e, t) {
  new k(e, t, I.isNotBoolean, !0).to.not.be.a("boolean");
};
I.typeOf = function(e, t, r) {
  new k(e, r, I.typeOf, !0).to.be.a(t);
};
I.notTypeOf = function(e, t, r) {
  new k(e, r, I.notTypeOf, !0).to.not.be.a(t);
};
I.instanceOf = function(e, t, r) {
  new k(e, r, I.instanceOf, !0).to.be.instanceOf(t);
};
I.notInstanceOf = function(e, t, r) {
  new k(e, r, I.notInstanceOf, !0).to.not.be.instanceOf(t);
};
I.include = function(e, t, r) {
  new k(e, r, I.include, !0).include(t);
};
I.notInclude = function(e, t, r) {
  new k(e, r, I.notInclude, !0).not.include(t);
};
I.deepInclude = function(e, t, r) {
  new k(e, r, I.deepInclude, !0).deep.include(t);
};
I.notDeepInclude = function(e, t, r) {
  new k(e, r, I.notDeepInclude, !0).not.deep.include(t);
};
I.nestedInclude = function(e, t, r) {
  new k(e, r, I.nestedInclude, !0).nested.include(t);
};
I.notNestedInclude = function(e, t, r) {
  new k(e, r, I.notNestedInclude, !0).not.nested.include(t);
};
I.deepNestedInclude = function(e, t, r) {
  new k(e, r, I.deepNestedInclude, !0).deep.nested.include(t);
};
I.notDeepNestedInclude = function(e, t, r) {
  new k(e, r, I.notDeepNestedInclude, !0).not.deep.nested.include(t);
};
I.ownInclude = function(e, t, r) {
  new k(e, r, I.ownInclude, !0).own.include(t);
};
I.notOwnInclude = function(e, t, r) {
  new k(e, r, I.notOwnInclude, !0).not.own.include(t);
};
I.deepOwnInclude = function(e, t, r) {
  new k(e, r, I.deepOwnInclude, !0).deep.own.include(t);
};
I.notDeepOwnInclude = function(e, t, r) {
  new k(e, r, I.notDeepOwnInclude, !0).not.deep.own.include(t);
};
I.match = function(e, t, r) {
  new k(e, r, I.match, !0).to.match(t);
};
I.notMatch = function(e, t, r) {
  new k(e, r, I.notMatch, !0).to.not.match(t);
};
I.property = function(e, t, r) {
  new k(e, r, I.property, !0).to.have.property(t);
};
I.notProperty = function(e, t, r) {
  new k(e, r, I.notProperty, !0).to.not.have.property(t);
};
I.propertyVal = function(e, t, r, n) {
  new k(e, n, I.propertyVal, !0).to.have.property(t, r);
};
I.notPropertyVal = function(e, t, r, n) {
  new k(e, n, I.notPropertyVal, !0).to.not.have.property(t, r);
};
I.deepPropertyVal = function(e, t, r, n) {
  new k(e, n, I.deepPropertyVal, !0).to.have.deep.property(t, r);
};
I.notDeepPropertyVal = function(e, t, r, n) {
  new k(e, n, I.notDeepPropertyVal, !0).to.not.have.deep.property(t, r);
};
I.ownProperty = function(e, t, r) {
  new k(e, r, I.ownProperty, !0).to.have.own.property(t);
};
I.notOwnProperty = function(e, t, r) {
  new k(e, r, I.notOwnProperty, !0).to.not.have.own.property(t);
};
I.ownPropertyVal = function(e, t, r, n) {
  new k(e, n, I.ownPropertyVal, !0).to.have.own.property(t, r);
};
I.notOwnPropertyVal = function(e, t, r, n) {
  new k(e, n, I.notOwnPropertyVal, !0).to.not.have.own.property(t, r);
};
I.deepOwnPropertyVal = function(e, t, r, n) {
  new k(e, n, I.deepOwnPropertyVal, !0).to.have.deep.own.property(t, r);
};
I.notDeepOwnPropertyVal = function(e, t, r, n) {
  new k(e, n, I.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(t, r);
};
I.nestedProperty = function(e, t, r) {
  new k(e, r, I.nestedProperty, !0).to.have.nested.property(t);
};
I.notNestedProperty = function(e, t, r) {
  new k(e, r, I.notNestedProperty, !0).to.not.have.nested.property(t);
};
I.nestedPropertyVal = function(e, t, r, n) {
  new k(e, n, I.nestedPropertyVal, !0).to.have.nested.property(t, r);
};
I.notNestedPropertyVal = function(e, t, r, n) {
  new k(e, n, I.notNestedPropertyVal, !0).to.not.have.nested.property(t, r);
};
I.deepNestedPropertyVal = function(e, t, r, n) {
  new k(e, n, I.deepNestedPropertyVal, !0).to.have.deep.nested.property(t, r);
};
I.notDeepNestedPropertyVal = function(e, t, r, n) {
  new k(e, n, I.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(t, r);
};
I.lengthOf = function(e, t, r) {
  new k(e, r, I.lengthOf, !0).to.have.lengthOf(t);
};
I.hasAnyKeys = function(e, t, r) {
  new k(e, r, I.hasAnyKeys, !0).to.have.any.keys(t);
};
I.hasAllKeys = function(e, t, r) {
  new k(e, r, I.hasAllKeys, !0).to.have.all.keys(t);
};
I.containsAllKeys = function(e, t, r) {
  new k(e, r, I.containsAllKeys, !0).to.contain.all.keys(t);
};
I.doesNotHaveAnyKeys = function(e, t, r) {
  new k(e, r, I.doesNotHaveAnyKeys, !0).to.not.have.any.keys(t);
};
I.doesNotHaveAllKeys = function(e, t, r) {
  new k(e, r, I.doesNotHaveAllKeys, !0).to.not.have.all.keys(t);
};
I.hasAnyDeepKeys = function(e, t, r) {
  new k(e, r, I.hasAnyDeepKeys, !0).to.have.any.deep.keys(t);
};
I.hasAllDeepKeys = function(e, t, r) {
  new k(e, r, I.hasAllDeepKeys, !0).to.have.all.deep.keys(t);
};
I.containsAllDeepKeys = function(e, t, r) {
  new k(e, r, I.containsAllDeepKeys, !0).to.contain.all.deep.keys(t);
};
I.doesNotHaveAnyDeepKeys = function(e, t, r) {
  new k(e, r, I.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(t);
};
I.doesNotHaveAllDeepKeys = function(e, t, r) {
  new k(e, r, I.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(t);
};
I.throws = function(e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && (r = t, t = null);
  var i = new k(e, n, I.throws, !0).to.throw(t, r);
  return Oe(i, "object");
};
I.doesNotThrow = function(e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && (r = t, t = null), new k(e, n, I.doesNotThrow, !0).to.not.throw(t, r);
};
I.operator = function(e, t, r, n) {
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
        I.operator
      );
  }
  var a = new k(i, n, I.operator, !0);
  a.assert(
    Oe(a, "object") === !0,
    "expected " + Ae(e) + " to be " + t + " " + Ae(r),
    "expected " + Ae(e) + " to not be " + t + " " + Ae(r)
  );
};
I.closeTo = function(e, t, r, n) {
  new k(e, n, I.closeTo, !0).to.be.closeTo(t, r);
};
I.approximately = function(e, t, r, n) {
  new k(e, n, I.approximately, !0).to.be.approximately(t, r);
};
I.sameMembers = function(e, t, r) {
  new k(e, r, I.sameMembers, !0).to.have.same.members(t);
};
I.notSameMembers = function(e, t, r) {
  new k(e, r, I.notSameMembers, !0).to.not.have.same.members(t);
};
I.sameDeepMembers = function(e, t, r) {
  new k(e, r, I.sameDeepMembers, !0).to.have.same.deep.members(t);
};
I.notSameDeepMembers = function(e, t, r) {
  new k(e, r, I.notSameDeepMembers, !0).to.not.have.same.deep.members(t);
};
I.sameOrderedMembers = function(e, t, r) {
  new k(e, r, I.sameOrderedMembers, !0).to.have.same.ordered.members(t);
};
I.notSameOrderedMembers = function(e, t, r) {
  new k(e, r, I.notSameOrderedMembers, !0).to.not.have.same.ordered.members(t);
};
I.sameDeepOrderedMembers = function(e, t, r) {
  new k(e, r, I.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(t);
};
I.notSameDeepOrderedMembers = function(e, t, r) {
  new k(e, r, I.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(t);
};
I.includeMembers = function(e, t, r) {
  new k(e, r, I.includeMembers, !0).to.include.members(t);
};
I.notIncludeMembers = function(e, t, r) {
  new k(e, r, I.notIncludeMembers, !0).to.not.include.members(t);
};
I.includeDeepMembers = function(e, t, r) {
  new k(e, r, I.includeDeepMembers, !0).to.include.deep.members(t);
};
I.notIncludeDeepMembers = function(e, t, r) {
  new k(e, r, I.notIncludeDeepMembers, !0).to.not.include.deep.members(t);
};
I.includeOrderedMembers = function(e, t, r) {
  new k(e, r, I.includeOrderedMembers, !0).to.include.ordered.members(t);
};
I.notIncludeOrderedMembers = function(e, t, r) {
  new k(e, r, I.notIncludeOrderedMembers, !0).to.not.include.ordered.members(t);
};
I.includeDeepOrderedMembers = function(e, t, r) {
  new k(e, r, I.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(t);
};
I.notIncludeDeepOrderedMembers = function(e, t, r) {
  new k(e, r, I.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(t);
};
I.oneOf = function(e, t, r) {
  new k(e, r, I.oneOf, !0).to.be.oneOf(t);
};
I.isIterable = function(e, t) {
  if (e == null || !e[Symbol.iterator])
    throw t = t ? `${t} expected ${Ae(e)} to be an iterable` : `expected ${Ae(e)} to be an iterable`, new Ie(
      t,
      void 0,
      I.isIterable
    );
};
I.changes = function(e, t, r, n) {
  arguments.length === 3 && typeof t == "function" && (n = r, r = null), new k(e, n, I.changes, !0).to.change(t, r);
};
I.changesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new k(e, i, I.changesBy, !0).to.change(t, r).by(n);
};
I.doesNotChange = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new k(e, n, I.doesNotChange, !0).to.not.change(t, r);
};
I.changesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new k(e, i, I.changesButNotBy, !0).to.change(t, r).but.not.by(n);
};
I.increases = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new k(e, n, I.increases, !0).to.increase(t, r);
};
I.increasesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new k(e, i, I.increasesBy, !0).to.increase(t, r).by(n);
};
I.doesNotIncrease = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new k(e, n, I.doesNotIncrease, !0).to.not.increase(t, r);
};
I.increasesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new k(e, i, I.increasesButNotBy, !0).to.increase(t, r).but.not.by(n);
};
I.decreases = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new k(e, n, I.decreases, !0).to.decrease(t, r);
};
I.decreasesBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new k(e, i, I.decreasesBy, !0).to.decrease(t, r).by(n);
};
I.doesNotDecrease = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new k(e, n, I.doesNotDecrease, !0).to.not.decrease(t, r);
};
I.doesNotDecreaseBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  return new k(e, i, I.doesNotDecreaseBy, !0).to.not.decrease(t, r).by(n);
};
I.decreasesButNotBy = function(e, t, r, n, i) {
  if (arguments.length === 4 && typeof t == "function") {
    var a = n;
    n = r, i = a;
  } else arguments.length === 3 && (n = r, r = null);
  new k(e, i, I.decreasesButNotBy, !0).to.decrease(t, r).but.not.by(n);
};
I.ifError = function(e) {
  if (e)
    throw e;
};
I.isExtensible = function(e, t) {
  new k(e, t, I.isExtensible, !0).to.be.extensible;
};
I.isNotExtensible = function(e, t) {
  new k(e, t, I.isNotExtensible, !0).to.not.be.extensible;
};
I.isSealed = function(e, t) {
  new k(e, t, I.isSealed, !0).to.be.sealed;
};
I.isNotSealed = function(e, t) {
  new k(e, t, I.isNotSealed, !0).to.not.be.sealed;
};
I.isFrozen = function(e, t) {
  new k(e, t, I.isFrozen, !0).to.be.frozen;
};
I.isNotFrozen = function(e, t) {
  new k(e, t, I.isNotFrozen, !0).to.not.be.frozen;
};
I.isEmpty = function(e, t) {
  new k(e, t, I.isEmpty, !0).to.be.empty;
};
I.isNotEmpty = function(e, t) {
  new k(e, t, I.isNotEmpty, !0).to.not.be.empty;
};
(/* @__PURE__ */ Z(function e(t, r) {
  return I[r] = I[t], e;
}, "alias"))("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty")("isCallable", "isFunction")("isNotCallable", "isNotFunction");
var lh = [];
function Sx(e) {
  const t = {
    AssertionError: Ie,
    util: Ei,
    config: lt,
    expect: Ii,
    assert: I,
    Assertion: k,
    ...Yv
  };
  return ~lh.indexOf(e) || (e(t, Ei), lh.push(e)), t;
}
Z(Sx, "use");
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
function zO(e) {
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
var ai = { exports: {} }, Ma, hh;
function Ox() {
  if (hh) return Ma;
  hh = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  Ma = function(l, f) {
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
  return Ma;
}
var Da, dh;
function Tx() {
  if (dh) return Da;
  dh = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = Ox(), n.destroy = l, Object.keys(t).forEach((f) => {
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
        const _ = b, x = Number(/* @__PURE__ */ new Date()), O = x - (d || x);
        _.diff = O, _.prev = d, _.curr = x, d = x, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let C = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (R, S) => {
          if (R === "%%")
            return "%";
          C++;
          const w = n.formatters[S];
          if (typeof w == "function") {
            const N = y[C];
            R = w.call(_, N), y.splice(C, 1), C--;
          }
          return R;
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
      const d = (typeof f == "string" ? f : "").trim().replace(" ", ",").split(",").filter(Boolean);
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
  return Da = e, Da;
}
var ph;
function Cx() {
  return ph || (ph = 1, function(e, t) {
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
    e.exports = Tx()(t);
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
var Ax = Cx();
const qO = /* @__PURE__ */ nn(Ax);
var si = { exports: {} }, Fa, mh;
function Rx() {
  if (mh) return Fa;
  mh = 1;
  var e = 1e3, t = e * 60, r = t * 60, n = r * 24, i = n * 7, a = n * 365.25;
  Fa = function(l, f) {
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
  return Fa;
}
var La, gh;
function Ix() {
  if (gh) return La;
  gh = 1;
  function e(t) {
    n.debug = n, n.default = n, n.coerce = c, n.disable = s, n.enable = a, n.enabled = u, n.humanize = Rx(), n.destroy = l, Object.keys(t).forEach((f) => {
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
        const _ = b, x = Number(/* @__PURE__ */ new Date()), O = x - (d || x);
        _.diff = O, _.prev = d, _.curr = x, d = x, y[0] = n.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
        let C = 0;
        y[0] = y[0].replace(/%([a-zA-Z%])/g, (R, S) => {
          if (R === "%%")
            return "%";
          C++;
          const w = n.formatters[S];
          if (typeof w == "function") {
            const N = y[C];
            R = w.call(_, N), y.splice(C, 1), C--;
          }
          return R;
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
      const d = (typeof f == "string" ? f : "").trim().replace(" ", ",").split(",").filter(Boolean);
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
  return La = e, La;
}
var vh;
function kx() {
  return vh || (vh = 1, function(e, t) {
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
    e.exports = Ix()(t);
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
var Nx = kx();
const UO = /* @__PURE__ */ nn(Nx);
typeof BigInt > "u" && (BigInt = function(e) {
  if (isNaN(e)) throw new Error("");
  return e;
});
const ye = BigInt(0), Se = BigInt(1), kn = BigInt(2), cc = BigInt(5), ft = BigInt(10), Px = 2e3, fe = {
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
function xt(e) {
  return typeof e == "bigint" ? e : Math.floor(e);
}
function Le(e, t) {
  if (t === ye)
    throw Tf();
  const r = Object.create(Of.prototype);
  r.s = e < ye ? -Se : Se, e = e < ye ? -e : e;
  const n = _r(e, t);
  return r.n = e / n, r.d = t / n, r;
}
function Ur(e) {
  const t = {};
  let r = e, n = kn, i = cc - Se;
  for (; i <= r; ) {
    for (; r % n === ye; )
      r /= n, t[n] = (t[n] || ye) + Se;
    i += Se + kn * n++;
  }
  return r !== e ? r > 1 && (t[r] = (t[r] || ye) + Se) : t[e] = (t[e] || ye) + Se, t;
}
const Ke = function(e, t) {
  let r = ye, n = Se, i = Se;
  if (e != null) if (t !== void 0) {
    if (typeof e == "bigint")
      r = e;
    else {
      if (isNaN(e))
        throw or();
      if (e % 1 !== 0)
        throw yh();
      r = BigInt(e);
    }
    if (typeof t == "bigint")
      n = t;
    else {
      if (isNaN(t))
        throw or();
      if (t % 1 !== 0)
        throw yh();
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
    else if (e > 0) {
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
      throw or();
    if (f[a] === "-" ? (i = -Se, a++) : f[a] === "+" && a++, f.length === a + 1 ? s = Zt(f[a++], i) : f[a + 1] === "." || f[a] === "." ? (f[a] !== "." && (o = Zt(f[a++], i)), a++, (a + 1 === f.length || f[a + 1] === "(" && f[a + 3] === ")" || f[a + 1] === "'" && f[a + 3] === "'") && (s = Zt(f[a], i), c = ft ** BigInt(f[a].length), a++), (f[a] === "(" && f[a + 2] === ")" || f[a] === "'" && f[a + 2] === "'") && (u = Zt(f[a + 1], i), l = ft ** BigInt(f[a + 1].length) - Se, a += 3)) : f[a + 1] === "/" || f[a + 1] === ":" ? (s = Zt(f[a], i), c = Zt(f[a + 2], Se), a += 3) : f[a + 3] === "/" && f[a + 1] === " " && (o = Zt(f[a], i), s = Zt(f[a + 2], i), c = Zt(f[a + 4], Se), a += 5), f.length <= a)
      n = c * l, i = /* void */
      r = u + n * o + l * s;
    else
      throw or();
  } else if (typeof e == "bigint")
    r = e, i = e, n = Se;
  else
    throw or();
  if (n === ye)
    throw Tf();
  fe.s = i < ye ? -Se : Se, fe.n = r < ye ? -r : r, fe.d = n < ye ? -n : n;
};
function Mx(e, t, r) {
  let n = Se;
  for (; t > ye; e = e * e % r, t >>= Se)
    t & Se && (n = n * e % r);
  return n;
}
function Dx(e, t) {
  for (; t % kn === ye; t /= kn)
    ;
  for (; t % cc === ye; t /= cc)
    ;
  if (t === Se)
    return ye;
  let r = ft % t, n = 1;
  for (; r !== Se; n++)
    if (r = r * ft % t, n > Px)
      return ye;
  return BigInt(n);
}
function Fx(e, t, r) {
  let n = Se, i = Mx(ft, r, t);
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
function Of(e, t) {
  if (Ke(e, t), this instanceof Of)
    e = _r(fe.d, fe.n), this.s = fe.s, this.n = fe.n / e, this.d = fe.d / e;
  else
    return Le(fe.s * fe.n, fe.d);
}
var Tf = function() {
  return new Error("Division by Zero");
}, or = function() {
  return new Error("Invalid argument");
}, yh = function() {
  return new Error("Parameters must be integer");
};
Of.prototype = {
  s: Se,
  n: ye,
  d: Se,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return Le(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return Le(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(e, t) {
    return Ke(e, t), Le(
      this.s * this.n * fe.d + fe.s * this.d * fe.n,
      this.d * fe.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(e, t) {
    return Ke(e, t), Le(
      this.s * this.n * fe.d - fe.s * this.d * fe.n,
      this.d * fe.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(e, t) {
    return Ke(e, t), Le(
      this.s * fe.s * this.n * fe.n,
      this.d * fe.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(e, t) {
    return Ke(e, t), Le(
      this.s * fe.s * this.n * fe.d,
      this.d * fe.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return Le(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
   **/
  mod: function(e, t) {
    if (e === void 0)
      return Le(this.s * this.n % this.d, Se);
    if (Ke(e, t), ye === fe.n * this.d)
      throw Tf();
    return Le(
      this.s * (fe.d * this.n) % (fe.n * this.d),
      fe.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(e, t) {
    return Ke(e, t), Le(_r(fe.n, this.n) * _r(fe.d, this.d), fe.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(e, t) {
    return Ke(e, t), fe.n === ye && this.n === ye ? Le(ye, Se) : Le(fe.n * this.n, _r(fe.n, this.n) * _r(fe.d, this.d));
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return Le(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some integer exponent
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(e, t) {
    if (Ke(e, t), fe.d === Se)
      return fe.s < ye ? Le((this.s * this.d) ** fe.n, this.n ** fe.n) : Le((this.s * this.n) ** fe.n, this.d ** fe.n);
    if (this.s < ye) return null;
    let r = Ur(this.n), n = Ur(this.d), i = Se, a = Se;
    for (let o in r)
      if (o !== "1") {
        if (o === "0") {
          i = ye;
          break;
        }
        if (r[o] *= fe.n, r[o] % fe.d === ye)
          r[o] /= fe.d;
        else return null;
        i *= BigInt(o) ** r[o];
      }
    for (let o in n)
      if (o !== "1") {
        if (n[o] *= fe.n, n[o] % fe.d === ye)
          n[o] /= fe.d;
        else return null;
        a *= BigInt(o) ** n[o];
      }
    return fe.s < ye ? Le(a, i) : Le(i, a);
  },
  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */
  log: function(e, t) {
    if (Ke(e, t), this.s <= ye || fe.s <= ye) return null;
    const r = {}, n = Ur(fe.n), i = Ur(fe.d), a = Ur(this.n), o = Ur(this.d);
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
      const m = _r(d, h);
      if (d /= m, h /= m, s === null && u === null)
        s = d, u = h;
      else if (d * u !== s * h)
        return null;
    }
    return s !== null && u !== null ? Le(s, u) : null;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(e, t) {
    return Ke(e, t), this.s * this.n * fe.d === fe.s * fe.n * this.d;
  },
  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lt: function(e, t) {
    return Ke(e, t), this.s * this.n * fe.d < fe.s * fe.n * this.d;
  },
  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lte: function(e, t) {
    return Ke(e, t), this.s * this.n * fe.d <= fe.s * fe.n * this.d;
  },
  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gt: function(e, t) {
    return Ke(e, t), this.s * this.n * fe.d > fe.s * fe.n * this.d;
  },
  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gte: function(e, t) {
    return Ke(e, t), this.s * this.n * fe.d >= fe.s * fe.n * this.d;
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
    Ke(e, t);
    let r = this.s * this.n * fe.d - fe.s * fe.n * this.d;
    return (ye < r) - (r < ye);
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(e) {
    return e = ft ** BigInt(e || 0), Le(
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
    return e = ft ** BigInt(e || 0), Le(
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
    return e = ft ** BigInt(e || 0), Le(
      xt(this.s * e * this.n / this.d) + this.s * ((this.s >= ye ? Se : ye) + kn * (e * this.n % this.d) > this.d ? Se : ye),
      e
    );
  },
  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  roundTo: function(e, t) {
    Ke(e, t);
    const r = this.n * fe.d, n = this.d * fe.n, i = r % n;
    let a = xt(r / n);
    return i + i >= n && a++, Le(this.s * a * fe.n, fe.d);
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(e, t) {
    return Ke(e, t), !(!(fe.n * this.d) || this.n * fe.d % (fe.n * this.d));
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
    let n = Dx(t, r), i = Fx(t, r, n), a = this.s < ye ? "-" : "";
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
      let a = Le(n[i - 1], Se);
      for (let s = i - 2; s >= 0; s--)
        a = a.inverse().add(n[s]);
      let o = a.sub(r);
      if (o.n * t < o.d)
        return a.mul(this.s);
    }
    return this;
  }
};
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
}
var rt = Uint8Array, pt = Uint16Array, Cf = Int32Array, ta = new rt([
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
]), fc = new rt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Xv = function(e, t) {
  for (var r = new pt(31), n = 0; n < 31; ++n)
    r[n] = t += 1 << e[n - 1];
  for (var i = new Cf(r[30]), n = 1; n < 30; ++n)
    for (var a = r[n]; a < r[n + 1]; ++a)
      i[a] = a - r[n] << 5 | n;
  return { b: r, r: i };
}, Zv = Xv(ta, 2), Jv = Zv.b, lc = Zv.r;
Jv[28] = 258, lc[258] = 28;
var Qv = Xv(ra, 0), Lx = Qv.b, bh = Qv.r, hc = new pt(32768);
for (var Me = 0; Me < 32768; ++Me) {
  var sr = (Me & 43690) >> 1 | (Me & 21845) << 1;
  sr = (sr & 52428) >> 2 | (sr & 13107) << 2, sr = (sr & 61680) >> 4 | (sr & 3855) << 4, hc[Me] = ((sr & 65280) >> 8 | (sr & 255) << 8) >> 1;
}
var Ut = function(e, t, r) {
  for (var n = e.length, i = 0, a = new pt(t); i < n; ++i)
    e[i] && ++a[e[i] - 1];
  var o = new pt(t);
  for (i = 1; i < t; ++i)
    o[i] = o[i - 1] + a[i - 1] << 1;
  var s;
  if (r) {
    s = new pt(1 << t);
    var u = 15 - t;
    for (i = 0; i < n; ++i)
      if (e[i])
        for (var c = i << 4 | e[i], l = t - e[i], f = o[e[i] - 1]++ << l, d = f | (1 << l) - 1; f <= d; ++f)
          s[hc[f] >> u] = c;
  } else
    for (s = new pt(n), i = 0; i < n; ++i)
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
var Bx = /* @__PURE__ */ Ut(mr, 9, 0), jx = /* @__PURE__ */ Ut(mr, 9, 1), zx = /* @__PURE__ */ Ut(Pn, 5, 0), qx = /* @__PURE__ */ Ut(Pn, 5, 1), Ba = function(e) {
  for (var t = e[0], r = 1; r < e.length; ++r)
    e[r] > t && (t = e[r]);
  return t;
}, Et = function(e, t, r) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8) >> (t & 7) & r;
}, ja = function(e, t) {
  var r = t / 8 | 0;
  return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (t & 7);
}, Af = function(e) {
  return (e + 7) / 8 | 0;
}, ey = function(e, t, r) {
  return (r == null || r > e.length) && (r = e.length), new rt(e.subarray(t, r));
}, Ux = [
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
  var n = new Error(t || Ux[e]);
  if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, Ct), !r)
    throw n;
  return n;
}, $x = function(e, t, r, n) {
  var i = e.length, a = 0;
  if (!i || t.f && !t.l)
    return r || new rt(0);
  var o = !r, s = o || t.i != 2, u = t.i;
  o && (r = new rt(i * 3));
  var c = function(he) {
    var be = r.length;
    if (he > be) {
      var xe = new rt(Math.max(be * 2, he));
      xe.set(r), r = xe;
    }
  }, l = t.f || 0, f = t.p || 0, d = t.b || 0, h = t.l, m = t.d, p = t.m, b = t.n, y = i * 8;
  do {
    if (!h) {
      l = Et(e, f, 1);
      var _ = Et(e, f + 1, 3);
      if (f += 3, _)
        if (_ == 1)
          h = jx, m = qx, p = 9, b = 5;
        else if (_ == 2) {
          var F = Et(e, f, 31) + 257, R = Et(e, f + 10, 15) + 4, S = F + Et(e, f + 5, 31) + 1;
          f += 14;
          for (var w = new rt(S), N = new rt(19), z = 0; z < R; ++z)
            N[fc[z]] = Et(e, f + z * 3, 7);
          f += R * 3;
          for (var E = Ba(N), D = (1 << E) - 1, v = Ut(N, E, 1), z = 0; z < S; ) {
            var j = v[Et(e, f, D)];
            f += j & 15;
            var x = j >> 4;
            if (x < 16)
              w[z++] = x;
            else {
              var te = 0, L = 0;
              for (x == 16 ? (L = 3 + Et(e, f, 3), f += 2, te = w[z - 1]) : x == 17 ? (L = 3 + Et(e, f, 7), f += 3) : x == 18 && (L = 11 + Et(e, f, 127), f += 7); L--; )
                w[z++] = te;
            }
          }
          var Y = w.subarray(0, F), U = w.subarray(F);
          p = Ba(Y), b = Ba(U), h = Ut(Y, p, 1), m = Ut(U, b, 1);
        } else
          Ct(1);
      else {
        var x = Af(f) + 4, O = e[x - 4] | e[x - 3] << 8, C = x + O;
        if (C > i) {
          u && Ct(0);
          break;
        }
        s && c(d + O), r.set(e.subarray(x, C), d), t.b = d += O, t.p = f = C * 8, t.f = l;
        continue;
      }
      if (f > y) {
        u && Ct(0);
        break;
      }
    }
    s && c(d + 131072);
    for (var J = (1 << p) - 1, M = (1 << b) - 1, P = f; ; P = f) {
      var te = h[ja(e, f) & J], K = te >> 4;
      if (f += te & 15, f > y) {
        u && Ct(0);
        break;
      }
      if (te || Ct(2), K < 256)
        r[d++] = K;
      else if (K == 256) {
        P = f, h = null;
        break;
      } else {
        var ee = K - 254;
        if (K > 264) {
          var z = K - 257, H = ta[z];
          ee = Et(e, f, (1 << H) - 1) + Jv[z], f += H;
        }
        var me = m[ja(e, f) & M], Ee = me >> 4;
        me || Ct(3), f += me & 15;
        var U = Lx[Ee];
        if (Ee > 3) {
          var H = ra[Ee];
          U += ja(e, f) & (1 << H) - 1, f += H;
        }
        if (f > y) {
          u && Ct(0);
          break;
        }
        s && c(d + 131072);
        var oe = d + ee;
        if (d < U) {
          var le = a - U, de = Math.min(U, oe);
          for (le + d < 0 && Ct(3); d < de; ++d)
            r[d] = n[le + d];
        }
        for (; d < oe; ++d)
          r[d] = r[d - U];
      }
    }
    t.l = h, t.p = P, t.b = d, t.f = l, h && (l = 1, t.m = p, t.d = m, t.n = b);
  } while (!l);
  return d != r.length && o ? ey(r, 0, d) : r.subarray(0, d);
}, Jt = function(e, t, r) {
  r <<= t & 7;
  var n = t / 8 | 0;
  e[n] |= r, e[n + 1] |= r >> 8;
}, ln = function(e, t, r) {
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
  r.sort(function(C, F) {
    return C.f - F.f;
  }), r.push({ s: -1, f: 25001 });
  var s = r[0], u = r[1], c = 0, l = 1, f = 2;
  for (r[0] = { s: -1, f: s.f + u.f, l: s, r: u }; l != i - 1; )
    s = r[r[c].f < r[f].f ? c++ : f++], u = r[c != l && r[c].f < r[f].f ? c++ : f++], r[l++] = { s: -1, f: s.f + u.f, l: s, r: u };
  for (var d = a[0].s, n = 1; n < i; ++n)
    a[n].s > d && (d = a[n].s);
  var h = new pt(d + 1), m = dc(r[l - 1], h, 0);
  if (m > t) {
    var n = 0, p = 0, b = m - t, y = 1 << b;
    for (a.sort(function(F, R) {
      return h[R.s] - h[F.s] || F.f - R.f;
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
}, dc = function(e, t, r) {
  return e.s == -1 ? Math.max(dc(e.l, t, r + 1), dc(e.r, t, r + 1)) : t[e.s] = r;
}, _h = function(e) {
  for (var t = e.length; t && !e[--t]; )
    ;
  for (var r = new pt(++t), n = 0, i = e[0], a = 1, o = function(u) {
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
  var n = r.length, i = Af(t + 2);
  e[i] = n & 255, e[i + 1] = n >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
  for (var a = 0; a < n; ++a)
    e[i + a + 4] = r[a];
  return (i + 4 + n) * 8;
}, wh = function(e, t, r, n, i, a, o, s, u, c, l) {
  Jt(t, l++, r), ++i[256];
  for (var f = za(i, 15), d = f.t, h = f.l, m = za(a, 15), p = m.t, b = m.l, y = _h(d), _ = y.c, x = y.n, O = _h(p), C = O.c, F = O.n, R = new pt(19), S = 0; S < _.length; ++S)
    ++R[_[S] & 31];
  for (var S = 0; S < C.length; ++S)
    ++R[C[S] & 31];
  for (var w = za(R, 7), N = w.t, z = w.l, E = 19; E > 4 && !N[fc[E - 1]]; --E)
    ;
  var D = c + 5 << 3, v = hn(i, mr) + hn(a, Pn) + o, j = hn(i, d) + hn(a, p) + o + 14 + 3 * E + hn(R, N) + 2 * R[16] + 3 * R[17] + 7 * R[18];
  if (u >= 0 && D <= v && D <= j)
    return ty(t, l, e.subarray(u, u + c));
  var te, L, Y, U;
  if (Jt(t, l, 1 + (j < v)), l += 2, j < v) {
    te = Ut(d, h, 0), L = d, Y = Ut(p, b, 0), U = p;
    var J = Ut(N, z, 0);
    Jt(t, l, x - 257), Jt(t, l + 5, F - 1), Jt(t, l + 10, E - 4), l += 14;
    for (var S = 0; S < E; ++S)
      Jt(t, l + 3 * S, N[fc[S]]);
    l += 3 * E;
    for (var M = [_, C], P = 0; P < 2; ++P)
      for (var K = M[P], S = 0; S < K.length; ++S) {
        var ee = K[S] & 31;
        Jt(t, l, J[ee]), l += N[ee], ee > 15 && (Jt(t, l, K[S] >> 5 & 127), l += K[S] >> 12);
      }
  } else
    te = Bx, L = mr, Y = zx, U = Pn;
  for (var S = 0; S < s; ++S) {
    var H = n[S];
    if (H > 255) {
      var ee = H >> 18 & 31;
      ln(t, l, te[ee + 257]), l += L[ee + 257], ee > 7 && (Jt(t, l, H >> 23 & 31), l += ta[ee]);
      var me = H & 31;
      ln(t, l, Y[me]), l += U[me], me > 3 && (ln(t, l, H >> 5 & 8191), l += ra[me]);
    } else
      ln(t, l, te[H]), l += L[H];
  }
  return ln(t, l, te[256]), l + L[256];
}, Wx = /* @__PURE__ */ new Cf([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), ry = /* @__PURE__ */ new rt(0), Gx = function(e, t, r, n, i, a) {
  var o = a.z || e.length, s = new rt(n + o + 5 * (1 + Math.ceil(o / 7e3)) + i), u = s.subarray(n, s.length - i), c = a.l, l = (a.r || 0) & 7;
  if (t) {
    l && (u[0] = a.r >> 3);
    for (var f = Wx[t - 1], d = f >> 13, h = f & 8191, m = (1 << r) - 1, p = a.p || new pt(32768), b = a.h || new pt(m + 1), y = Math.ceil(r / 3), _ = 2 * y, x = function(g) {
      return (e[g] ^ e[g + 1] << y ^ e[g + 2] << _) & m;
    }, O = new Cf(25e3), C = new pt(288), F = new pt(32), R = 0, S = 0, w = a.i || 0, N = 0, z = a.w || 0, E = 0; w + 2 < o; ++w) {
      var D = x(w), v = w & 32767, j = b[D];
      if (p[v] = j, b[D] = v, z <= w) {
        var te = o - w;
        if ((R > 7e3 || N > 24576) && (te > 423 || !c)) {
          l = wh(e, u, 0, O, C, F, S, N, E, w - E, l), N = R = S = 0, E = w;
          for (var L = 0; L < 286; ++L)
            C[L] = 0;
          for (var L = 0; L < 30; ++L)
            F[L] = 0;
        }
        var Y = 2, U = 0, J = h, M = v - j & 32767;
        if (te > 2 && D == x(w - M))
          for (var P = Math.min(d, te) - 1, K = Math.min(32767, w), ee = Math.min(258, te); M <= K && --J && v != j; ) {
            if (e[w + Y] == e[w + Y - M]) {
              for (var H = 0; H < ee && e[w + H] == e[w + H - M]; ++H)
                ;
              if (H > Y) {
                if (Y = H, U = M, H > P)
                  break;
                for (var me = Math.min(M, H - 2), Ee = 0, L = 0; L < me; ++L) {
                  var oe = w - M + L & 32767, le = p[oe], de = oe - le & 32767;
                  de > Ee && (Ee = de, j = oe);
                }
              }
            }
            v = j, j = p[v], M += v - j & 32767;
          }
        if (U) {
          O[N++] = 268435456 | lc[Y] << 18 | bh[U];
          var he = lc[Y] & 31, be = bh[U] & 31;
          S += ta[he] + ra[be], ++C[257 + he], ++F[be], z = w + Y, ++R;
        } else
          O[N++] = e[w], ++C[e[w]];
      }
    }
    for (w = Math.max(w, z); w < o; ++w)
      O[N++] = e[w], ++C[e[w]];
    l = wh(e, u, c, O, C, F, S, N, E, w - E, l), c || (a.r = l & 7 | u[l / 8 | 0] << 3, l -= 7, a.h = b, a.p = p, a.i = w, a.w = z);
  } else {
    for (var w = a.w || 0; w < o + c; w += 65535) {
      var xe = w + 65535;
      xe >= o && (u[l / 8 | 0] = c, xe = o), l = ty(u, l + 1, e.subarray(w, xe));
    }
    a.i = o;
  }
  return ey(s, 0, n + Af(l) + i);
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
}, Vx = function(e, t, r, n, i) {
  if (!i && (i = { l: 1 }, t.dictionary)) {
    var a = t.dictionary.subarray(-32768), o = new rt(a.length + e.length);
    o.set(a), o.set(e, a.length), e = o, i.w = a.length;
  }
  return Gx(e, t.level == null ? 6 : t.level, t.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, r, n, i);
}, iy = function(e, t, r) {
  for (; r; ++t)
    e[t] = r, r >>>= 8;
}, Hx = function(e, t) {
  var r = t.level, n = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = n << 6 | (t.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, t.dictionary) {
    var i = ny();
    i.p(t.dictionary), iy(e, 2, i.d());
  }
}, Kx = function(e, t) {
  return ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) && Ct(6, "invalid zlib data"), (e[1] >> 5 & 1) == 1 && Ct(6, "invalid zlib data: " + (e[1] & 32 ? "need" : "unexpected") + " dictionary"), (e[1] >> 3 & 4) + 2;
};
function $O(e, t) {
  t || (t = {});
  var r = ny();
  r.p(e);
  var n = Vx(e, t, t.dictionary ? 6 : 2, 4);
  return Hx(n, t), iy(n, n.length - 4, r.d()), n;
}
function WO(e, t) {
  return $x(e.subarray(Kx(e), -4), { i: 2 }, t, t);
}
var Yx = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Xx = 0;
try {
  Yx.decode(ry, { stream: !0 }), Xx = 1;
} catch {
}
/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */
const {
  entries: ay,
  setPrototypeOf: xh,
  isFrozen: Zx,
  getPrototypeOf: Jx,
  getOwnPropertyDescriptor: Qx
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
const oi = gt(Array.prototype.forEach), Eh = gt(Array.prototype.pop), dn = gt(Array.prototype.push), mi = gt(String.prototype.toLowerCase), qa = gt(String.prototype.toString), Sh = gt(String.prototype.match), pn = gt(String.prototype.replace), eE = gt(String.prototype.indexOf), tE = gt(String.prototype.trim), Tt = gt(Object.prototype.hasOwnProperty), at = gt(RegExp.prototype.test), mn = rE(TypeError);
function gt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return pc(e, t, n);
  };
}
function rE(e) {
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
      a !== i && (Zx(t) || (t[n] = a), i = a);
    }
    e[i] = !0;
  }
  return e;
}
function nE(e) {
  for (let t = 0; t < e.length; t++)
    Tt(e, t) || (e[t] = null);
  return e;
}
function yr(e) {
  const t = sy(null);
  for (const [r, n] of ay(e))
    Tt(e, r) && (Array.isArray(n) ? t[r] = nE(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = yr(n) : t[r] = n);
  return t;
}
function gn(e, t) {
  for (; e !== null; ) {
    const n = Qx(e, t);
    if (n) {
      if (n.get)
        return gt(n.get);
      if (typeof n.value == "function")
        return gt(n.value);
    }
    e = Jx(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Oh = st(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ua = st(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $a = st(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), iE = st(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Wa = st(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), aE = st(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Th = st(["#text"]), Ch = st(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ga = st(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ah = st(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ui = st(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sE = _t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), oE = _t(/<%[\w\W]*|[\w\W]*%>/gm), uE = _t(/\$\{[\w\W]*}/gm), cE = _t(/^data-[\-\w.\u00B7-\uFFFF]+$/), fE = _t(/^aria-[\-\w]+$/), oy = _t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), lE = _t(/^(?:\w+script|data):/i), hE = _t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), uy = _t(/^html$/i), dE = _t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Rh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: fE,
  ATTR_WHITESPACE: hE,
  CUSTOM_ELEMENT: dE,
  DATA_ATTR: cE,
  DOCTYPE_NAME: uy,
  ERB_EXPR: oE,
  IS_ALLOWED_URI: oy,
  IS_SCRIPT_OR_DATA: lE,
  MUSTACHE_EXPR: sE,
  TMPLIT_EXPR: uE
});
const vn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, pE = function() {
  return typeof window > "u" ? null : window;
}, mE = function(t, r) {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pE();
  const t = (we) => cy(we);
  if (t.version = "3.2.3", t.removed = [], !e || !e.document || e.document.nodeType !== vn.document)
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
  } = e, m = u.prototype, p = gn(m, "cloneNode"), b = gn(m, "remove"), y = gn(m, "nextSibling"), _ = gn(m, "childNodes"), x = gn(m, "parentNode");
  if (typeof o == "function") {
    const we = r.createElement("template");
    we.content && we.content.ownerDocument && (r = we.content.ownerDocument);
  }
  let O, C = "";
  const {
    implementation: F,
    createNodeIterator: R,
    createDocumentFragment: S,
    getElementsByTagName: w
  } = r, {
    importNode: N
  } = n;
  let z = Ih();
  t.isSupported = typeof ay == "function" && typeof x == "function" && F && F.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: E,
    ERB_EXPR: D,
    TMPLIT_EXPR: v,
    DATA_ATTR: j,
    ARIA_ATTR: te,
    IS_SCRIPT_OR_DATA: L,
    ATTR_WHITESPACE: Y,
    CUSTOM_ELEMENT: U
  } = Rh;
  let {
    IS_ALLOWED_URI: J
  } = Rh, M = null;
  const P = Te({}, [...Oh, ...Ua, ...$a, ...Wa, ...Th]);
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
  })), me = null, Ee = null, oe = !0, le = !0, de = !1, he = !0, be = !1, xe = !0, g = !1, X = !1, V = !1, A = !1, T = !1, B = !1, ne = !0, ie = !1;
  const G = "user-content-";
  let W = !0, re = !1, Q = {}, ae = null;
  const pe = Te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _e = null;
  const Be = Te({}, ["audio", "video", "img", "source", "image", "track"]);
  let je = null;
  const ke = Te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ve = "http://www.w3.org/1998/Math/MathML", Re = "http://www.w3.org/2000/svg", et = "http://www.w3.org/1999/xhtml";
  let Ft = et, ht = !1, Lr = null;
  const wa = Te({}, [Ve, Re, et], qa);
  let Br = Te({}, ["mi", "mo", "mn", "ms", "mtext"]), jr = Te({}, ["annotation-xml"]);
  const ti = Te({}, ["title", "style", "font", "a", "script"]);
  let wt = null;
  const zr = ["application/xhtml+xml", "text/html"], d0 = "text/html";
  let He = null, qr = null;
  const p0 = r.createElement("form"), al = function(q) {
    return q instanceof RegExp || q instanceof Function;
  }, xa = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(qr && qr === q)) {
      if ((!q || typeof q != "object") && (q = {}), q = yr(q), wt = // eslint-disable-next-line unicorn/prefer-includes
      zr.indexOf(q.PARSER_MEDIA_TYPE) === -1 ? d0 : q.PARSER_MEDIA_TYPE, He = wt === "application/xhtml+xml" ? qa : mi, M = Tt(q, "ALLOWED_TAGS") ? Te({}, q.ALLOWED_TAGS, He) : P, K = Tt(q, "ALLOWED_ATTR") ? Te({}, q.ALLOWED_ATTR, He) : ee, Lr = Tt(q, "ALLOWED_NAMESPACES") ? Te({}, q.ALLOWED_NAMESPACES, qa) : wa, je = Tt(q, "ADD_URI_SAFE_ATTR") ? Te(yr(ke), q.ADD_URI_SAFE_ATTR, He) : ke, _e = Tt(q, "ADD_DATA_URI_TAGS") ? Te(yr(Be), q.ADD_DATA_URI_TAGS, He) : Be, ae = Tt(q, "FORBID_CONTENTS") ? Te({}, q.FORBID_CONTENTS, He) : pe, me = Tt(q, "FORBID_TAGS") ? Te({}, q.FORBID_TAGS, He) : {}, Ee = Tt(q, "FORBID_ATTR") ? Te({}, q.FORBID_ATTR, He) : {}, Q = Tt(q, "USE_PROFILES") ? q.USE_PROFILES : !1, oe = q.ALLOW_ARIA_ATTR !== !1, le = q.ALLOW_DATA_ATTR !== !1, de = q.ALLOW_UNKNOWN_PROTOCOLS || !1, he = q.ALLOW_SELF_CLOSE_IN_ATTR !== !1, be = q.SAFE_FOR_TEMPLATES || !1, xe = q.SAFE_FOR_XML !== !1, g = q.WHOLE_DOCUMENT || !1, A = q.RETURN_DOM || !1, T = q.RETURN_DOM_FRAGMENT || !1, B = q.RETURN_TRUSTED_TYPE || !1, V = q.FORCE_BODY || !1, ne = q.SANITIZE_DOM !== !1, ie = q.SANITIZE_NAMED_PROPS || !1, W = q.KEEP_CONTENT !== !1, re = q.IN_PLACE || !1, J = q.ALLOWED_URI_REGEXP || oy, Ft = q.NAMESPACE || et, Br = q.MATHML_TEXT_INTEGRATION_POINTS || Br, jr = q.HTML_INTEGRATION_POINTS || jr, H = q.CUSTOM_ELEMENT_HANDLING || {}, q.CUSTOM_ELEMENT_HANDLING && al(q.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = q.CUSTOM_ELEMENT_HANDLING.tagNameCheck), q.CUSTOM_ELEMENT_HANDLING && al(q.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = q.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), q.CUSTOM_ELEMENT_HANDLING && typeof q.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = q.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), be && (le = !1), T && (A = !0), Q && (M = Te({}, Th), K = [], Q.html === !0 && (Te(M, Oh), Te(K, Ch)), Q.svg === !0 && (Te(M, Ua), Te(K, Ga), Te(K, ui)), Q.svgFilters === !0 && (Te(M, $a), Te(K, Ga), Te(K, ui)), Q.mathMl === !0 && (Te(M, Wa), Te(K, Ah), Te(K, ui))), q.ADD_TAGS && (M === P && (M = yr(M)), Te(M, q.ADD_TAGS, He)), q.ADD_ATTR && (K === ee && (K = yr(K)), Te(K, q.ADD_ATTR, He)), q.ADD_URI_SAFE_ATTR && Te(je, q.ADD_URI_SAFE_ATTR, He), q.FORBID_CONTENTS && (ae === pe && (ae = yr(ae)), Te(ae, q.FORBID_CONTENTS, He)), W && (M["#text"] = !0), g && Te(M, ["html", "head", "body"]), M.table && (Te(M, ["tbody"]), delete me.tbody), q.TRUSTED_TYPES_POLICY) {
        if (typeof q.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof q.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        O = q.TRUSTED_TYPES_POLICY, C = O.createHTML("");
      } else
        O === void 0 && (O = mE(h, i)), O !== null && typeof C == "string" && (C = O.createHTML(""));
      st && st(q), qr = q;
    }
  }, sl = Te({}, [...Ua, ...$a, ...iE]), ol = Te({}, [...Wa, ...aE]), m0 = function(q) {
    let ce = x(q);
    (!ce || !ce.tagName) && (ce = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const ge = mi(q.tagName), Fe = mi(ce.tagName);
    return Lr[q.namespaceURI] ? q.namespaceURI === Re ? ce.namespaceURI === et ? ge === "svg" : ce.namespaceURI === Ve ? ge === "svg" && (Fe === "annotation-xml" || Br[Fe]) : !!sl[ge] : q.namespaceURI === Ve ? ce.namespaceURI === et ? ge === "math" : ce.namespaceURI === Re ? ge === "math" && jr[Fe] : !!ol[ge] : q.namespaceURI === et ? ce.namespaceURI === Re && !jr[Fe] || ce.namespaceURI === Ve && !Br[Fe] ? !1 : !ol[ge] && (ti[ge] || !sl[ge]) : !!(wt === "application/xhtml+xml" && Lr[q.namespaceURI]) : !1;
  }, Lt = function(q) {
    dn(t.removed, {
      element: q
    });
    try {
      x(q).removeChild(q);
    } catch {
      b(q);
    }
  }, ri = function(q, ce) {
    try {
      dn(t.removed, {
        attribute: ce.getAttributeNode(q),
        from: ce
      });
    } catch {
      dn(t.removed, {
        attribute: null,
        from: ce
      });
    }
    if (ce.removeAttribute(q), q === "is")
      if (A || T)
        try {
          Lt(ce);
        } catch {
        }
      else
        try {
          ce.setAttribute(q, "");
        } catch {
        }
  }, ul = function(q) {
    let ce = null, ge = null;
    if (V)
      q = "<remove></remove>" + q;
    else {
      const Ze = Sh(q, /^[\r\n\t ]+/);
      ge = Ze && Ze[0];
    }
    wt === "application/xhtml+xml" && Ft === et && (q = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + q + "</body></html>");
    const Fe = O ? O.createHTML(q) : q;
    if (Ft === et)
      try {
        ce = new d().parseFromString(Fe, wt);
      } catch {
      }
    if (!ce || !ce.documentElement) {
      ce = F.createDocument(Ft, "template", null);
      try {
        ce.documentElement.innerHTML = ht ? C : Fe;
      } catch {
      }
    }
    const tt = ce.body || ce.documentElement;
    return q && ge && tt.insertBefore(r.createTextNode(ge), tt.childNodes[0] || null), Ft === et ? w.call(ce, g ? "html" : "body")[0] : g ? ce.documentElement : tt;
  }, cl = function(q) {
    return R.call(
      q.ownerDocument || q,
      q,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ea = function(q) {
    return q instanceof f && (typeof q.nodeName != "string" || typeof q.textContent != "string" || typeof q.removeChild != "function" || !(q.attributes instanceof l) || typeof q.removeAttribute != "function" || typeof q.setAttribute != "function" || typeof q.namespaceURI != "string" || typeof q.insertBefore != "function" || typeof q.hasChildNodes != "function");
  }, fl = function(q) {
    return typeof s == "function" && q instanceof s;
  };
  function Xt(we, q, ce) {
    oi(we, (ge) => {
      ge.call(t, q, ce, qr);
    });
  }
  const ll = function(q) {
    let ce = null;
    if (Xt(z.beforeSanitizeElements, q, null), Ea(q))
      return Lt(q), !0;
    const ge = He(q.nodeName);
    if (Xt(z.uponSanitizeElement, q, {
      tagName: ge,
      allowedTags: M
    }), q.hasChildNodes() && !fl(q.firstElementChild) && at(/<[/\w]/g, q.innerHTML) && at(/<[/\w]/g, q.textContent) || q.nodeType === vn.progressingInstruction || xe && q.nodeType === vn.comment && at(/<[/\w]/g, q.data))
      return Lt(q), !0;
    if (!M[ge] || me[ge]) {
      if (!me[ge] && dl(ge) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, ge) || H.tagNameCheck instanceof Function && H.tagNameCheck(ge)))
        return !1;
      if (W && !ae[ge]) {
        const Fe = x(q) || q.parentNode, tt = _(q) || q.childNodes;
        if (tt && Fe) {
          const Ze = tt.length;
          for (let ct = Ze - 1; ct >= 0; --ct) {
            const Bt = p(tt[ct], !0);
            Bt.__removalCount = (q.__removalCount || 0) + 1, Fe.insertBefore(Bt, y(q));
          }
        }
      }
      return Lt(q), !0;
    }
    return q instanceof u && !m0(q) || (ge === "noscript" || ge === "noembed" || ge === "noframes") && at(/<\/no(script|embed|frames)/i, q.innerHTML) ? (Lt(q), !0) : (be && q.nodeType === vn.text && (ce = q.textContent, oi([E, D, v], (Fe) => {
      ce = pn(ce, Fe, " ");
    }), q.textContent !== ce && (dn(t.removed, {
      element: q.cloneNode()
    }), q.textContent = ce)), Xt(z.afterSanitizeElements, q, null), !1);
  }, hl = function(q, ce, ge) {
    if (ne && (ce === "id" || ce === "name") && (ge in r || ge in p0))
      return !1;
    if (!(le && !Ee[ce] && at(j, ce))) {
      if (!(oe && at(te, ce))) {
        if (!K[ce] || Ee[ce]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(dl(q) && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, q) || H.tagNameCheck instanceof Function && H.tagNameCheck(q)) && (H.attributeNameCheck instanceof RegExp && at(H.attributeNameCheck, ce) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(ce)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ce === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && at(H.tagNameCheck, ge) || H.tagNameCheck instanceof Function && H.tagNameCheck(ge)))
          ) return !1;
        } else if (!je[ce]) {
          if (!at(J, pn(ge, Y, ""))) {
            if (!((ce === "src" || ce === "xlink:href" || ce === "href") && q !== "script" && eE(ge, "data:") === 0 && _e[q])) {
              if (!(de && !at(L, pn(ge, Y, "")))) {
                if (ge)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, dl = function(q) {
    return q !== "annotation-xml" && Sh(q, U);
  }, pl = function(q) {
    Xt(z.beforeSanitizeAttributes, q, null);
    const {
      attributes: ce
    } = q;
    if (!ce || Ea(q))
      return;
    const ge = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: K,
      forceKeepAttr: void 0
    };
    let Fe = ce.length;
    for (; Fe--; ) {
      const tt = ce[Fe], {
        name: Ze,
        namespaceURI: ct,
        value: Bt
      } = tt, cn = He(Ze);
      let it = Ze === "value" ? Bt : tE(Bt);
      if (ge.attrName = cn, ge.attrValue = it, ge.keepAttr = !0, ge.forceKeepAttr = void 0, Xt(z.uponSanitizeAttribute, q, ge), it = ge.attrValue, ie && (cn === "id" || cn === "name") && (ri(Ze, q), it = G + it), xe && at(/((--!?|])>)|<\/(style|title)/i, it)) {
        ri(Ze, q);
        continue;
      }
      if (ge.forceKeepAttr || (ri(Ze, q), !ge.keepAttr))
        continue;
      if (!he && at(/\/>/i, it)) {
        ri(Ze, q);
        continue;
      }
      be && oi([E, D, v], (gl) => {
        it = pn(it, gl, " ");
      });
      const ml = He(q.nodeName);
      if (hl(ml, cn, it)) {
        if (O && typeof h == "object" && typeof h.getAttributeType == "function" && !ct)
          switch (h.getAttributeType(ml, cn)) {
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
          ct ? q.setAttributeNS(ct, Ze, it) : q.setAttribute(Ze, it), Ea(q) ? Lt(q) : Eh(t.removed);
        } catch {
        }
      }
    }
    Xt(z.afterSanitizeAttributes, q, null);
  }, g0 = function we(q) {
    let ce = null;
    const ge = cl(q);
    for (Xt(z.beforeSanitizeShadowDOM, q, null); ce = ge.nextNode(); )
      Xt(z.uponSanitizeShadowNode, ce, null), ll(ce), pl(ce), ce.content instanceof a && we(ce.content);
    Xt(z.afterSanitizeShadowDOM, q, null);
  };
  return t.sanitize = function(we) {
    let q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ce = null, ge = null, Fe = null, tt = null;
    if (ht = !we, ht && (we = "<!-->"), typeof we != "string" && !fl(we))
      if (typeof we.toString == "function") {
        if (we = we.toString(), typeof we != "string")
          throw mn("dirty is not a string, aborting");
      } else
        throw mn("toString is not a function");
    if (!t.isSupported)
      return we;
    if (X || xa(q), t.removed = [], typeof we == "string" && (re = !1), re) {
      if (we.nodeName) {
        const Bt = He(we.nodeName);
        if (!M[Bt] || me[Bt])
          throw mn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (we instanceof s)
      ce = ul("<!---->"), ge = ce.ownerDocument.importNode(we, !0), ge.nodeType === vn.element && ge.nodeName === "BODY" || ge.nodeName === "HTML" ? ce = ge : ce.appendChild(ge);
    else {
      if (!A && !be && !g && // eslint-disable-next-line unicorn/prefer-includes
      we.indexOf("<") === -1)
        return O && B ? O.createHTML(we) : we;
      if (ce = ul(we), !ce)
        return A ? null : B ? C : "";
    }
    ce && V && Lt(ce.firstChild);
    const Ze = cl(re ? we : ce);
    for (; Fe = Ze.nextNode(); )
      ll(Fe), pl(Fe), Fe.content instanceof a && g0(Fe.content);
    if (re)
      return we;
    if (A) {
      if (T)
        for (tt = S.call(ce.ownerDocument); ce.firstChild; )
          tt.appendChild(ce.firstChild);
      else
        tt = ce;
      return (K.shadowroot || K.shadowrootmode) && (tt = N.call(n, tt, !0)), tt;
    }
    let ct = g ? ce.outerHTML : ce.innerHTML;
    return g && M["!doctype"] && ce.ownerDocument && ce.ownerDocument.doctype && ce.ownerDocument.doctype.name && at(uy, ce.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + ce.ownerDocument.doctype.name + `>
` + ct), be && oi([E, D, v], (Bt) => {
      ct = pn(ct, Bt, " ");
    }), O && B ? O.createHTML(ct) : ct;
  }, t.setConfig = function() {
    let we = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    xa(we), X = !0;
  }, t.clearConfig = function() {
    qr = null, X = !1;
  }, t.isValidAttribute = function(we, q, ce) {
    qr || xa({});
    const ge = He(we), Fe = He(q);
    return hl(ge, Fe, ce);
  }, t.addHook = function(we, q) {
    typeof q == "function" && dn(z[we], q);
  }, t.removeHook = function(we) {
    return Eh(z[we]);
  }, t.removeHooks = function(we) {
    z[we] = [];
  }, t.removeAllHooks = function() {
    z = Ih();
  }, t;
}
var GO = cy();
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
const gc = { type: "error", data: "parser error" }, fy = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", ly = typeof ArrayBuffer == "function", hy = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, Rf = ({ type: e, data: t }, r, n) => fy && t instanceof Blob ? r ? n(t) : kh(t, n) : ly && (t instanceof ArrayBuffer || hy(t)) ? r ? n(t) : kh(new Blob([t]), n) : n(Gt[e] + (t || "")), kh = (e, t) => {
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
function gE(e, t) {
  if (fy && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Nh).then(t);
  if (ly && (e.data instanceof ArrayBuffer || hy(e.data)))
    return t(Nh(e.data));
  Rf(e, !1, (r) => {
    Va || (Va = new TextEncoder()), t(Va.encode(r));
  });
}
const Ph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", En = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ph.length; e++)
  En[Ph.charCodeAt(e)] = e;
const vE = (e) => {
  let t = e.length * 0.75, r = e.length, n, i = 0, a, o, s, u;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const c = new ArrayBuffer(t), l = new Uint8Array(c);
  for (n = 0; n < r; n += 4)
    a = En[e.charCodeAt(n)], o = En[e.charCodeAt(n + 1)], s = En[e.charCodeAt(n + 2)], u = En[e.charCodeAt(n + 3)], l[i++] = a << 2 | o >> 4, l[i++] = (o & 15) << 4 | s >> 2, l[i++] = (s & 3) << 6 | u & 63;
  return c;
}, yE = typeof ArrayBuffer == "function", If = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: dy(e, t)
    };
  const r = e.charAt(0);
  return r === "b" ? {
    type: "message",
    data: bE(e.substring(1), t)
  } : gi[r] ? e.length > 1 ? {
    type: gi[r],
    data: e.substring(1)
  } : {
    type: gi[r]
  } : gc;
}, bE = (e, t) => {
  if (yE) {
    const r = vE(e);
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
}, py = "", _E = (e, t) => {
  const r = e.length, n = new Array(r);
  let i = 0;
  e.forEach((a, o) => {
    Rf(a, !1, (s) => {
      n[o] = s, ++i === r && t(n.join(py));
    });
  });
}, wE = (e, t) => {
  const r = e.split(py), n = [];
  for (let i = 0; i < r.length; i++) {
    const a = If(r[i], t);
    if (n.push(a), a.type === "error")
      break;
  }
  return n;
};
function xE() {
  return new TransformStream({
    transform(e, t) {
      gE(e, (r) => {
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
function fi(e, t) {
  if (e[0].length === t)
    return e.shift();
  const r = new Uint8Array(t);
  let n = 0;
  for (let i = 0; i < t; i++)
    r[i] = e[0][n++], n === e[0].length && (e.shift(), n = 0);
  return e.length && n < e[0].length && (e[0] = e[0].slice(n)), r;
}
function EE(e, t) {
  Ha || (Ha = new TextDecoder());
  const r = [];
  let n = 0, i = -1, a = !1;
  return new TransformStream({
    transform(o, s) {
      for (r.push(o); ; ) {
        if (n === 0) {
          if (ci(r) < 1)
            break;
          const u = fi(r, 1);
          a = (u[0] & 128) === 128, i = u[0] & 127, i < 126 ? n = 3 : i === 126 ? n = 1 : n = 2;
        } else if (n === 1) {
          if (ci(r) < 2)
            break;
          const u = fi(r, 2);
          i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0), n = 3;
        } else if (n === 2) {
          if (ci(r) < 8)
            break;
          const u = fi(r, 8), c = new DataView(u.buffer, u.byteOffset, u.length), l = c.getUint32(0);
          if (l > Math.pow(2, 21) - 1) {
            s.enqueue(gc);
            break;
          }
          i = l * Math.pow(2, 32) + c.getUint32(4), n = 3;
        } else {
          if (ci(r) < i)
            break;
          const u = fi(r, i);
          s.enqueue(If(a ? u : Ha.decode(u), t)), n = 0;
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
  if (e) return SE(e);
}
function SE(e) {
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
const na = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, r) => r(t, 0), yt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), OE = "arraybuffer";
function gy(e, ...t) {
  return t.reduce((r, n) => (e.hasOwnProperty(n) && (r[n] = e[n]), r), {});
}
const TE = yt.setTimeout, CE = yt.clearTimeout;
function ia(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = TE.bind(yt), e.clearTimeoutFn = CE.bind(yt)) : (e.setTimeoutFn = yt.setTimeout.bind(yt), e.clearTimeoutFn = yt.clearTimeout.bind(yt));
}
const AE = 1.33;
function RE(e) {
  return typeof e == "string" ? IE(e) : Math.ceil((e.byteLength || e.size) * AE);
}
function IE(e) {
  let t = 0, r = 0;
  for (let n = 0, i = e.length; n < i; n++)
    t = e.charCodeAt(n), t < 128 ? r += 1 : t < 2048 ? r += 2 : t < 55296 || t >= 57344 ? r += 3 : (n++, r += 4);
  return r;
}
function vy() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function kE(e) {
  let t = "";
  for (let r in e)
    e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
  return t;
}
function NE(e) {
  let t = {}, r = e.split("&");
  for (let n = 0, i = r.length; n < i; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
  }
  return t;
}
class PE extends Error {
  constructor(t, r, n) {
    super(t), this.description = r, this.context = n, this.type = "TransportError";
  }
}
class kf extends Ge {
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
    return super.emitReserved("error", new PE(t, r, n)), this;
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
    const r = If(t, this.socket.binaryType);
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
    const r = kE(t);
    return r.length ? "?" + r : "";
  }
}
class ME extends kf {
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
    wE(t, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
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
    this.writable = !1, _E(t, (r) => {
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
const DE = yy;
function FE() {
}
class LE extends ME {
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
      if (this._xhr.onreadystatechange = FE, t)
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
const BE = function() {
  const e = by({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class jE extends LE {
  constructor(t) {
    super(t);
    const r = t && t.forceBase64;
    this.supportsBinary = BE && !r;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new $t(by, this.uri(), t);
  }
}
function by(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || DE))
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
class zE extends kf {
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
      Rf(n, this.supportsBinary, (a) => {
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
class qE extends zE {
  createSocket(t, r, n) {
    return _y ? new Ka(t, r, n) : r ? new Ka(t, r) : new Ka(t);
  }
  doWrite(t, r) {
    this.ws.send(r);
  }
}
class UE extends kf {
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
        const r = EE(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = t.readable.pipeThrough(r).getReader(), i = xE();
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
const $E = {
  websocket: qE,
  webtransport: UE,
  polling: jE
}, WE = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, GE = [
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
  let i = WE.exec(e || ""), a = {}, o = 14;
  for (; o--; )
    a[GE[o]] = i[o] || "";
  return r != -1 && n != -1 && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = VE(a, a.path), a.queryKey = HE(a, a.query), a;
}
function VE(e, t) {
  const r = /\/{2,9}/g, n = t.replace(r, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function HE(e, t) {
  const r = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, a) {
    i && (r[i] = a);
  }), r;
}
const yc = typeof addEventListener == "function" && typeof removeEventListener == "function", vi = [];
yc && addEventListener("offline", () => {
  vi.forEach((e) => e());
}, !1);
class fr extends Ge {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, r) {
    if (super(), this.binaryType = OE, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (r = t, t = null), t) {
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
    }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = NE(this.opts.query)), yc && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
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
    const t = this.opts.rememberUpgrade && fr.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
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
    this.readyState = "open", fr.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
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
      if (i && (r += RE(i)), n > 0 && r > this._maxPayload)
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
    if (fr.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
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
fr.protocol = my;
class KE extends fr {
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
    fr.priorWebsocketSuccess = !1;
    const i = () => {
      n || (r.send([{ type: "ping", data: "probe" }]), r.once("packet", (f) => {
        if (!n)
          if (f.type === "pong" && f.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", r), !r)
              return;
            fr.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(() => {
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
let YE = class extends KE {
  constructor(t, r = {}) {
    const n = typeof t == "object" ? t : r;
    (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((i) => $E[i]).filter((i) => !!i)), super(t, n);
  }
};
function XE(e, t = "", r) {
  let n = e;
  r = r || typeof location < "u" && location, e == null && (e = r.protocol + "//" + r.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = r.protocol + e : e = r.host + e), /^(https?|wss?):\/\//.test(e) || (typeof r < "u" ? e = r.protocol + "//" + e : e = "https://" + e), n = vc(e)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
  const a = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
  return n.id = n.protocol + "://" + a + ":" + n.port + t, n.href = n.protocol + "://" + a + (r && r.port === n.port ? "" : ":" + n.port), n;
}
const ZE = typeof ArrayBuffer == "function", JE = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, wy = Object.prototype.toString, QE = typeof Blob == "function" || typeof Blob < "u" && wy.call(Blob) === "[object BlobConstructor]", e2 = typeof File == "function" || typeof File < "u" && wy.call(File) === "[object FileConstructor]";
function Nf(e) {
  return ZE && (e instanceof ArrayBuffer || JE(e)) || QE && e instanceof Blob || e2 && e instanceof File;
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
  if (Nf(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return yi(e.toJSON(), !0);
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && yi(e[r]))
      return !0;
  return !1;
}
function t2(e) {
  const t = [], r = e.data, n = e;
  return n.data = bc(r, t), n.attachments = t.length, { packet: n, buffers: t };
}
function bc(e, t) {
  if (!e)
    return e;
  if (Nf(e)) {
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
function r2(e, t) {
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
const n2 = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], i2 = 5;
var Ce;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Ce || (Ce = {}));
class a2 {
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
    return (t.type === Ce.EVENT || t.type === Ce.ACK) && yi(t) ? this.encodeAsBinary({
      type: t.type === Ce.EVENT ? Ce.BINARY_EVENT : Ce.BINARY_ACK,
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
    return (t.type === Ce.BINARY_EVENT || t.type === Ce.BINARY_ACK) && (r += t.attachments + "-"), t.nsp && t.nsp !== "/" && (r += t.nsp + ","), t.id != null && (r += t.id), t.data != null && (r += JSON.stringify(t.data, this.replacer)), r;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const r = t2(t), n = this.encodeAsString(r.packet), i = r.buffers;
    return i.unshift(n), i;
  }
}
function Dh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class Pf extends Ge {
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
      const n = r.type === Ce.BINARY_EVENT;
      n || r.type === Ce.BINARY_ACK ? (r.type = n ? Ce.EVENT : Ce.ACK, this.reconstructor = new s2(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
    } else if (Nf(t) || t.base64)
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
    if (Ce[n.type] === void 0)
      throw new Error("unknown packet type " + n.type);
    if (n.type === Ce.BINARY_EVENT || n.type === Ce.BINARY_ACK) {
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
      if (Pf.isPayloadValid(n.type, a))
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
      case Ce.CONNECT:
        return Dh(r);
      case Ce.DISCONNECT:
        return r === void 0;
      case Ce.CONNECT_ERROR:
        return typeof r == "string" || Dh(r);
      case Ce.EVENT:
      case Ce.BINARY_EVENT:
        return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && n2.indexOf(r[0]) === -1);
      case Ce.ACK:
      case Ce.BINARY_ACK:
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
class s2 {
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
      const r = r2(this.reconPack, this.buffers);
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
const o2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Decoder: Pf, Encoder: a2, get PacketType() {
  return Ce;
}, protocol: i2 }, Symbol.toStringTag, { value: "Module" }));
function At(e, t, r) {
  return e.on(t, r), function() {
    e.off(t, r);
  };
}
const u2 = Object.freeze({
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
    if (u2.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (r.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(r), this;
    const o = {
      type: Ce.EVENT,
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
      type: Ce.CONNECT,
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
        case Ce.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Ce.EVENT:
        case Ce.BINARY_EVENT:
          this.onevent(t);
          break;
        case Ce.ACK:
        case Ce.BINARY_ACK:
          this.onack(t);
          break;
        case Ce.DISCONNECT:
          this.ondisconnect();
          break;
        case Ce.CONNECT_ERROR:
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
        type: Ce.ACK,
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
    return this.connected && this.packet({ type: Ce.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
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
    const i = r.parser || o2;
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
    this.engine = new YE(this.uri, this.opts);
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
  const r = XE(e, t.path || "/socket.io"), n = r.source, i = r.id, a = r.path, o = yn[i] && a in yn[i].nsps, s = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let u;
  return s ? u = new wc(n, t) : (yn[i] || (yn[i] = new wc(n, t)), u = yn[i]), r.query && !t.query && (t.query = r.queryKey), u.socket(r.path, t);
}
Object.assign(Ya, {
  Manager: wc,
  Socket: xy,
  io: Ya,
  connect: Ya
});
function li(e) {
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
function c2() {
  return Fh || (Fh = 1, function(e, t) {
    (function(r) {
      e.exports = r();
    })(function() {
      return function r(n, i, a) {
        function o(c, l) {
          if (!i[c]) {
            if (!n[c]) {
              var f = typeof li == "function" && li;
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
        for (var s = typeof li == "function" && li, u = 0; u < a.length; u++) o(a[u]);
        return o;
      }({ 1: [function(r, n, i) {
        var a = r("./utils"), o = r("./support"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        i.encode = function(u) {
          for (var c, l, f, d, h, m, p, b = [], y = 0, _ = u.length, x = _, O = a.getTypeOf(u) !== "string"; y < u.length; ) x = _ - y, f = O ? (c = u[y++], l = y < _ ? u[y++] : 0, y < _ ? u[y++] : 0) : (c = u.charCodeAt(y++), l = y < _ ? u.charCodeAt(y++) : 0, y < _ ? u.charCodeAt(y++) : 0), d = c >> 2, h = (3 & c) << 4 | l >> 4, m = 1 < x ? (15 & l) << 2 | f >> 6 : 64, p = 2 < x ? 63 & f : 64, b.push(s.charAt(d) + s.charAt(h) + s.charAt(m) + s.charAt(p));
          return b.join("");
        }, i.decode = function(u) {
          var c, l, f, d, h, m, p = 0, b = 0, y = "data:";
          if (u.substr(0, y.length) === y) throw new Error("Invalid base64 input, it looks like a data url.");
          var _, x = 3 * (u = u.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (u.charAt(u.length - 1) === s.charAt(64) && x--, u.charAt(u.length - 2) === s.charAt(64) && x--, x % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (_ = o.uint8array ? new Uint8Array(0 | x) : new Array(0 | x); p < u.length; ) c = s.indexOf(u.charAt(p++)) << 2 | (d = s.indexOf(u.charAt(p++))) >> 4, l = (15 & d) << 4 | (h = s.indexOf(u.charAt(p++))) >> 2, f = (3 & h) << 6 | (m = s.indexOf(u.charAt(p++))), _[b++] = c, h !== 64 && (_[b++] = l), m !== 64 && (_[b++] = f);
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
          var x, O, C = h.file, F = h.compression, R = _ !== c.utf8encode, S = s.transformTo("string", _(C.name)), w = s.transformTo("string", c.utf8encode(C.name)), N = C.comment, z = s.transformTo("string", _(N)), E = s.transformTo("string", c.utf8encode(N)), D = w.length !== C.name.length, v = E.length !== N.length, j = "", te = "", L = "", Y = C.dir, U = C.date, J = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          m && !p || (J.crc32 = h.crc32, J.compressedSize = h.compressedSize, J.uncompressedSize = h.uncompressedSize);
          var M = 0;
          m && (M |= 8), R || !D && !v || (M |= 2048);
          var P = 0, K = 0;
          Y && (P |= 16), y === "UNIX" ? (K = 798, P |= function(H, me) {
            var Ee = H;
            return H || (Ee = me ? 16893 : 33204), (65535 & Ee) << 16;
          }(C.unixPermissions, Y)) : (K = 20, P |= function(H) {
            return 63 & (H || 0);
          }(C.dosPermissions)), x = U.getUTCHours(), x <<= 6, x |= U.getUTCMinutes(), x <<= 5, x |= U.getUTCSeconds() / 2, O = U.getUTCFullYear() - 1980, O <<= 4, O |= U.getUTCMonth() + 1, O <<= 5, O |= U.getUTCDate(), D && (te = a(1, 1) + a(l(S), 4) + w, j += "up" + a(te.length, 2) + te), v && (L = a(1, 1) + a(l(z), 4) + E, j += "uc" + a(L.length, 2) + L);
          var ee = "";
          return ee += `
\0`, ee += a(M, 2), ee += F.magic, ee += a(x, 2), ee += a(O, 2), ee += a(J.crc32, 4), ee += a(J.compressedSize, 4), ee += a(J.uncompressedSize, 4), ee += a(S.length, 2), ee += a(j.length, 2), { fileRecord: f.LOCAL_FILE_HEADER + ee + S + j, dirRecord: f.CENTRAL_FILE_HEADER + a(K, 2) + ee + a(z.length, 2) + "\0\0\0\0" + a(P, 4) + a(b, 4) + S + j + z };
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
          var p = this.bytesWritten - h, b = function(y, _, x, O, C) {
            var F = s.transformTo("string", C(O));
            return f.CENTRAL_DIRECTORY_END + "\0\0\0\0" + a(y, 2) + a(y, 2) + a(_, 4) + a(x, 4) + a(F.length, 2) + F;
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
              var m = function(_, x) {
                var O = _ || x, C = a[O];
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
        function a(C, F, R) {
          var S, w = s.getTypeOf(F), N = s.extend(R || {}, l);
          N.date = N.date || /* @__PURE__ */ new Date(), N.compression !== null && (N.compression = N.compression.toUpperCase()), typeof N.unixPermissions == "string" && (N.unixPermissions = parseInt(N.unixPermissions, 8)), N.unixPermissions && 16384 & N.unixPermissions && (N.dir = !0), N.dosPermissions && 16 & N.dosPermissions && (N.dir = !0), N.dir && (C = y(C)), N.createFolders && (S = b(C)) && _.call(this, S, !0);
          var z = w === "string" && N.binary === !1 && N.base64 === !1;
          R && R.binary !== void 0 || (N.binary = !z), (F instanceof f && F.uncompressedSize === 0 || N.dir || !F || F.length === 0) && (N.base64 = !1, N.binary = !0, F = "", N.compression = "STORE", w = "string");
          var E = null;
          E = F instanceof f || F instanceof u ? F : m.isNode && m.isStream(F) ? new p(C, F) : s.prepareContent(C, F, N.binary, N.optimizedBinaryString, N.base64);
          var D = new d(C, E, N);
          this.files[C] = D;
        }
        var o = r("./utf8"), s = r("./utils"), u = r("./stream/GenericWorker"), c = r("./stream/StreamHelper"), l = r("./defaults"), f = r("./compressedObject"), d = r("./zipObject"), h = r("./generate"), m = r("./nodejsUtils"), p = r("./nodejs/NodejsStreamInputAdapter"), b = function(C) {
          C.slice(-1) === "/" && (C = C.substring(0, C.length - 1));
          var F = C.lastIndexOf("/");
          return 0 < F ? C.substring(0, F) : "";
        }, y = function(C) {
          return C.slice(-1) !== "/" && (C += "/"), C;
        }, _ = function(C, F) {
          return F = F !== void 0 ? F : l.createFolders, C = y(C), this.files[C] || a.call(this, C, null, { dir: !0, createFolders: F }), this.files[C];
        };
        function x(C) {
          return Object.prototype.toString.call(C) === "[object RegExp]";
        }
        var O = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(C) {
          var F, R, S;
          for (F in this.files) S = this.files[F], (R = F.slice(this.root.length, F.length)) && F.slice(0, this.root.length) === this.root && C(R, S);
        }, filter: function(C) {
          var F = [];
          return this.forEach(function(R, S) {
            C(R, S) && F.push(S);
          }), F;
        }, file: function(C, F, R) {
          if (arguments.length !== 1) return C = this.root + C, a.call(this, C, F, R), this;
          if (x(C)) {
            var S = C;
            return this.filter(function(N, z) {
              return !z.dir && S.test(N);
            });
          }
          var w = this.files[this.root + C];
          return w && !w.dir ? w : null;
        }, folder: function(C) {
          if (!C) return this;
          if (x(C)) return this.filter(function(w, N) {
            return N.dir && C.test(w);
          });
          var F = this.root + C, R = _.call(this, F), S = this.clone();
          return S.root = R.name, S;
        }, remove: function(C) {
          C = this.root + C;
          var F = this.files[C];
          if (F || (C.slice(-1) !== "/" && (C += "/"), F = this.files[C]), F && !F.dir) delete this.files[C];
          else for (var R = this.filter(function(w, N) {
            return N.name.slice(0, C.length) === C;
          }), S = 0; S < R.length; S++) delete this.files[R[S].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(C) {
          var F, R = {};
          try {
            if ((R = s.extend(C || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: o.utf8encode })).type = R.type.toLowerCase(), R.compression = R.compression.toUpperCase(), R.type === "binarystring" && (R.type = "string"), !R.type) throw new Error("No output type specified.");
            s.checkSupport(R.type), R.platform !== "darwin" && R.platform !== "freebsd" && R.platform !== "linux" && R.platform !== "sunos" || (R.platform = "UNIX"), R.platform === "win32" && (R.platform = "DOS");
            var S = R.comment || this.comment || "";
            F = h.generateWorker(this, R, S);
          } catch (w) {
            (F = new u("error")).error(w);
          }
          return new c(F, R.type || "string", R.mimeType);
        }, generateAsync: function(C, F) {
          return this.generateInternalStream(C).accumulate(F);
        }, generateNodeStream: function(C, F) {
          return (C = C || {}).type || (C.type = "nodebuffer"), this.generateInternalStream(C).toNodejsStream(F);
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
            var _ = [], x = m._internalType, O = m._outputType, C = m._mimeType;
            m.on("data", function(F, R) {
              _.push(F), p && p(R);
            }).on("error", function(F) {
              _ = [], y(F);
            }).on("end", function() {
              try {
                var F = function(R, S, w) {
                  switch (R) {
                    case "blob":
                      return a.newBlob(a.transformTo("arraybuffer", S), w);
                    case "base64":
                      return u.encode(S);
                    default:
                      return a.transformTo(R, S);
                  }
                }(O, function(R, S) {
                  var w, N = 0, z = null, E = 0;
                  for (w = 0; w < S.length; w++) E += S[w].length;
                  switch (R) {
                    case "string":
                      return S.join("");
                    case "array":
                      return Array.prototype.concat.apply([], S);
                    case "uint8array":
                      for (z = new Uint8Array(E), w = 0; w < S.length; w++) z.set(S[w], N), N += S[w].length;
                      return z;
                    case "nodebuffer":
                      return Buffer.concat(S);
                    default:
                      throw new Error("concat : unsupported type '" + R + "'");
                  }
                }(x, _), C);
                b(F);
              } catch (R) {
                y(R);
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
        }, a.inherits(f, u), f.prototype.processChunk = function(h) {
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
            return a.blob && (O instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(O)) !== -1) && typeof FileReader < "u" ? new u.Promise(function(C, F) {
              var R = new FileReader();
              R.onload = function(S) {
                C(S.target.result);
              }, R.onerror = function(S) {
                F(S.target.error);
              }, R.readAsArrayBuffer(O);
            }) : O;
          }).then(function(O) {
            var C = i.getTypeOf(O);
            return C ? (C === "arraybuffer" ? O = i.transformTo("uint8array", O) : C === "string" && (x ? O = o.decode(O) : y && _ !== !0 && (O = function(F) {
              return l(F, a.uint8array ? new Uint8Array(F.length) : new Array(F.length));
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
          } catch (x) {
            (p = new l("error")).error(x);
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
        }).call(this, typeof xr < "u" ? xr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(r, n, i) {
        var a = r("immediate");
        function o() {
        }
        var s = {}, u = ["REJECTED"], c = ["FULFILLED"], l = ["PENDING"];
        function f(y) {
          if (typeof y != "function") throw new TypeError("resolver must be a function");
          this.state = l, this.queue = [], this.outcome = void 0, y !== o && p(this, y);
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
          function O(R) {
            x || (x = !0, s.reject(y, R));
          }
          function C(R) {
            x || (x = !0, s.resolve(y, R));
          }
          var F = b(function() {
            _(C, O);
          });
          F.status === "error" && O(F.value);
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
        (n.exports = f).prototype.finally = function(y) {
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
        }, f.prototype.catch = function(y) {
          return this.then(null, y);
        }, f.prototype.then = function(y, _) {
          if (typeof y != "function" && this.state === c || typeof _ != "function" && this.state === u) return this;
          var x = new this.constructor(o);
          return this.state !== l ? h(x, this.state === c ? y : _, this.outcome) : this.queue.push(new d(x, y, _)), x;
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
            for (var C = -1, F = y.queue.length; ++C < F; ) y.queue[C].callFulfilled(_);
          }
          return y;
        }, s.reject = function(y, _) {
          y.state = u, y.outcome = _;
          for (var x = -1, O = y.queue.length; ++x < O; ) y.queue[x].callRejected(_);
          return y;
        }, f.resolve = function(y) {
          return y instanceof this ? y : s.resolve(new this(o), y);
        }, f.reject = function(y) {
          var _ = new this(o);
          return s.reject(_, y);
        }, f.all = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = y.length, O = !1;
          if (!x) return this.resolve([]);
          for (var C = new Array(x), F = 0, R = -1, S = new this(o); ++R < x; ) w(y[R], R);
          return S;
          function w(N, z) {
            _.resolve(N).then(function(E) {
              C[z] = E, ++F !== x || O || (O = !0, s.resolve(S, C));
            }, function(E) {
              O || (O = !0, s.reject(S, E));
            });
          }
        }, f.race = function(y) {
          var _ = this;
          if (Object.prototype.toString.call(y) !== "[object Array]") return this.reject(new TypeError("must be an array"));
          var x = y.length, O = !1;
          if (!x) return this.resolve([]);
          for (var C = -1, F = new this(o); ++C < x; ) R = y[C], _.resolve(R).then(function(S) {
            O || (O = !0, s.resolve(F, S));
          }, function(S) {
            O || (O = !0, s.reject(F, S));
          });
          var R;
          return F;
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
          var x = a.deflateInit2(this.strm, _.level, _.method, _.windowBits, _.memLevel, _.strategy);
          if (x !== f) throw new Error(u[x]);
          if (_.header && a.deflateSetHeader(this.strm, _.header), _.dictionary) {
            var O;
            if (O = typeof _.dictionary == "string" ? s.string2buf(_.dictionary) : l.call(_.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(_.dictionary) : _.dictionary, (x = a.deflateSetDictionary(this.strm, O)) !== f) throw new Error(u[x]);
            this._dict_set = !0;
          }
        }
        function b(y, _) {
          var x = new p(_);
          if (x.push(y, !0), x.err) throw x.msg || u[x.err];
          return x.result;
        }
        p.prototype.push = function(y, _) {
          var x, O, C = this.strm, F = this.options.chunkSize;
          if (this.ended) return !1;
          O = _ === ~~_ ? _ : _ === !0 ? 4 : 0, typeof y == "string" ? C.input = s.string2buf(y) : l.call(y) === "[object ArrayBuffer]" ? C.input = new Uint8Array(y) : C.input = y, C.next_in = 0, C.avail_in = C.input.length;
          do {
            if (C.avail_out === 0 && (C.output = new o.Buf8(F), C.next_out = 0, C.avail_out = F), (x = a.deflate(C, O)) !== 1 && x !== f) return this.onEnd(x), !(this.ended = !0);
            C.avail_out !== 0 && (C.avail_in !== 0 || O !== 4 && O !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(C.output, C.next_out))) : this.onData(o.shrinkBuf(C.output, C.next_out)));
          } while ((0 < C.avail_in || C.avail_out === 0) && x !== 1);
          return O === 4 ? (x = a.deflateEnd(this.strm), this.onEnd(x), this.ended = !0, x === f) : O !== 2 || (this.onEnd(f), !(C.avail_out = 0));
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
          b.raw && 0 <= b.windowBits && b.windowBits < 16 && (b.windowBits = -b.windowBits, b.windowBits === 0 && (b.windowBits = -15)), !(0 <= b.windowBits && b.windowBits < 16) || p && p.windowBits || (b.windowBits += 32), 15 < b.windowBits && b.windowBits < 48 && !(15 & b.windowBits) && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;
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
          var y, _, x, O, C, F, R = this.strm, S = this.options.chunkSize, w = this.options.dictionary, N = !1;
          if (this.ended) return !1;
          _ = b === ~~b ? b : b === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof p == "string" ? R.input = s.binstring2buf(p) : d.call(p) === "[object ArrayBuffer]" ? R.input = new Uint8Array(p) : R.input = p, R.next_in = 0, R.avail_in = R.input.length;
          do {
            if (R.avail_out === 0 && (R.output = new o.Buf8(S), R.next_out = 0, R.avail_out = S), (y = a.inflate(R, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && w && (F = typeof w == "string" ? s.string2buf(w) : d.call(w) === "[object ArrayBuffer]" ? new Uint8Array(w) : w, y = a.inflateSetDictionary(this.strm, F)), y === u.Z_BUF_ERROR && N === !0 && (y = u.Z_OK, N = !1), y !== u.Z_STREAM_END && y !== u.Z_OK) return this.onEnd(y), !(this.ended = !0);
            R.next_out && (R.avail_out !== 0 && y !== u.Z_STREAM_END && (R.avail_in !== 0 || _ !== u.Z_FINISH && _ !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (x = s.utf8border(R.output, R.next_out), O = R.next_out - x, C = s.buf2string(R.output, x), R.next_out = O, R.avail_out = S - O, O && o.arraySet(R.output, R.output, x, O, 0), this.onData(C)) : this.onData(o.shrinkBuf(R.output, R.next_out)))), R.avail_in === 0 && R.avail_out === 0 && (N = !0);
          } while ((0 < R.avail_in || R.avail_out === 0) && y !== u.Z_STREAM_END);
          return y === u.Z_STREAM_END && (_ = u.Z_FINISH), _ === u.Z_FINISH ? (y = a.inflateEnd(this.strm), this.onEnd(y), this.ended = !0, y === u.Z_OK) : _ !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK), !(R.avail_out = 0));
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
        var a, o = r("../utils/common"), s = r("./trees"), u = r("./adler32"), c = r("./crc32"), l = r("./messages"), f = 0, d = 4, h = 0, m = -2, p = -1, b = 4, y = 2, _ = 8, x = 9, O = 286, C = 30, F = 19, R = 2 * O + 1, S = 15, w = 3, N = 258, z = N + w + 1, E = 42, D = 113, v = 1, j = 2, te = 3, L = 4;
        function Y(g, X) {
          return g.msg = l[X], X;
        }
        function U(g) {
          return (g << 1) - (4 < g ? 9 : 0);
        }
        function J(g) {
          for (var X = g.length; 0 <= --X; ) g[X] = 0;
        }
        function M(g) {
          var X = g.state, V = X.pending;
          V > g.avail_out && (V = g.avail_out), V !== 0 && (o.arraySet(g.output, X.pending_buf, X.pending_out, V, g.next_out), g.next_out += V, X.pending_out += V, g.total_out += V, g.avail_out -= V, X.pending -= V, X.pending === 0 && (X.pending_out = 0));
        }
        function P(g, X) {
          s._tr_flush_block(g, 0 <= g.block_start ? g.block_start : -1, g.strstart - g.block_start, X), g.block_start = g.strstart, M(g.strm);
        }
        function K(g, X) {
          g.pending_buf[g.pending++] = X;
        }
        function ee(g, X) {
          g.pending_buf[g.pending++] = X >>> 8 & 255, g.pending_buf[g.pending++] = 255 & X;
        }
        function H(g, X) {
          var V, A, T = g.max_chain_length, B = g.strstart, ne = g.prev_length, ie = g.nice_match, G = g.strstart > g.w_size - z ? g.strstart - (g.w_size - z) : 0, W = g.window, re = g.w_mask, Q = g.prev, ae = g.strstart + N, pe = W[B + ne - 1], _e = W[B + ne];
          g.prev_length >= g.good_match && (T >>= 2), ie > g.lookahead && (ie = g.lookahead);
          do
            if (W[(V = X) + ne] === _e && W[V + ne - 1] === pe && W[V] === W[B] && W[++V] === W[B + 1]) {
              B += 2, V++;
              do
                ;
              while (W[++B] === W[++V] && W[++B] === W[++V] && W[++B] === W[++V] && W[++B] === W[++V] && W[++B] === W[++V] && W[++B] === W[++V] && W[++B] === W[++V] && W[++B] === W[++V] && B < ae);
              if (A = N - (ae - B), B = ae - N, ne < A) {
                if (g.match_start = X, ie <= (ne = A)) break;
                pe = W[B + ne - 1], _e = W[B + ne];
              }
            }
          while ((X = Q[X & re]) > G && --T != 0);
          return ne <= g.lookahead ? ne : g.lookahead;
        }
        function me(g) {
          var X, V, A, T, B, ne, ie, G, W, re, Q = g.w_size;
          do {
            if (T = g.window_size - g.lookahead - g.strstart, g.strstart >= Q + (Q - z)) {
              for (o.arraySet(g.window, g.window, Q, Q, 0), g.match_start -= Q, g.strstart -= Q, g.block_start -= Q, X = V = g.hash_size; A = g.head[--X], g.head[X] = Q <= A ? A - Q : 0, --V; ) ;
              for (X = V = Q; A = g.prev[--X], g.prev[X] = Q <= A ? A - Q : 0, --V; ) ;
              T += Q;
            }
            if (g.strm.avail_in === 0) break;
            if (ne = g.strm, ie = g.window, G = g.strstart + g.lookahead, W = T, re = void 0, re = ne.avail_in, W < re && (re = W), V = re === 0 ? 0 : (ne.avail_in -= re, o.arraySet(ie, ne.input, ne.next_in, re, G), ne.state.wrap === 1 ? ne.adler = u(ne.adler, ie, re, G) : ne.state.wrap === 2 && (ne.adler = c(ne.adler, ie, re, G)), ne.next_in += re, ne.total_in += re, re), g.lookahead += V, g.lookahead + g.insert >= w) for (B = g.strstart - g.insert, g.ins_h = g.window[B], g.ins_h = (g.ins_h << g.hash_shift ^ g.window[B + 1]) & g.hash_mask; g.insert && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[B + w - 1]) & g.hash_mask, g.prev[B & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = B, B++, g.insert--, !(g.lookahead + g.insert < w)); ) ;
          } while (g.lookahead < z && g.strm.avail_in !== 0);
        }
        function Ee(g, X) {
          for (var V, A; ; ) {
            if (g.lookahead < z) {
              if (me(g), g.lookahead < z && X === f) return v;
              if (g.lookahead === 0) break;
            }
            if (V = 0, g.lookahead >= w && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, V = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), V !== 0 && g.strstart - V <= g.w_size - z && (g.match_length = H(g, V)), g.match_length >= w) if (A = s._tr_tally(g, g.strstart - g.match_start, g.match_length - w), g.lookahead -= g.match_length, g.match_length <= g.max_lazy_match && g.lookahead >= w) {
              for (g.match_length--; g.strstart++, g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, V = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart, --g.match_length != 0; ) ;
              g.strstart++;
            } else g.strstart += g.match_length, g.match_length = 0, g.ins_h = g.window[g.strstart], g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + 1]) & g.hash_mask;
            else A = s._tr_tally(g, 0, g.window[g.strstart]), g.lookahead--, g.strstart++;
            if (A && (P(g, !1), g.strm.avail_out === 0)) return v;
          }
          return g.insert = g.strstart < w - 1 ? g.strstart : w - 1, X === d ? (P(g, !0), g.strm.avail_out === 0 ? te : L) : g.last_lit && (P(g, !1), g.strm.avail_out === 0) ? v : j;
        }
        function oe(g, X) {
          for (var V, A, T; ; ) {
            if (g.lookahead < z) {
              if (me(g), g.lookahead < z && X === f) return v;
              if (g.lookahead === 0) break;
            }
            if (V = 0, g.lookahead >= w && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, V = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), g.prev_length = g.match_length, g.prev_match = g.match_start, g.match_length = w - 1, V !== 0 && g.prev_length < g.max_lazy_match && g.strstart - V <= g.w_size - z && (g.match_length = H(g, V), g.match_length <= 5 && (g.strategy === 1 || g.match_length === w && 4096 < g.strstart - g.match_start) && (g.match_length = w - 1)), g.prev_length >= w && g.match_length <= g.prev_length) {
              for (T = g.strstart + g.lookahead - w, A = s._tr_tally(g, g.strstart - 1 - g.prev_match, g.prev_length - w), g.lookahead -= g.prev_length - 1, g.prev_length -= 2; ++g.strstart <= T && (g.ins_h = (g.ins_h << g.hash_shift ^ g.window[g.strstart + w - 1]) & g.hash_mask, V = g.prev[g.strstart & g.w_mask] = g.head[g.ins_h], g.head[g.ins_h] = g.strstart), --g.prev_length != 0; ) ;
              if (g.match_available = 0, g.match_length = w - 1, g.strstart++, A && (P(g, !1), g.strm.avail_out === 0)) return v;
            } else if (g.match_available) {
              if ((A = s._tr_tally(g, 0, g.window[g.strstart - 1])) && P(g, !1), g.strstart++, g.lookahead--, g.strm.avail_out === 0) return v;
            } else g.match_available = 1, g.strstart++, g.lookahead--;
          }
          return g.match_available && (A = s._tr_tally(g, 0, g.window[g.strstart - 1]), g.match_available = 0), g.insert = g.strstart < w - 1 ? g.strstart : w - 1, X === d ? (P(g, !0), g.strm.avail_out === 0 ? te : L) : g.last_lit && (P(g, !1), g.strm.avail_out === 0) ? v : j;
        }
        function le(g, X, V, A, T) {
          this.good_length = g, this.max_lazy = X, this.nice_length = V, this.max_chain = A, this.func = T;
        }
        function de() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * R), this.dyn_dtree = new o.Buf16(2 * (2 * C + 1)), this.bl_tree = new o.Buf16(2 * (2 * F + 1)), J(this.dyn_ltree), J(this.dyn_dtree), J(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(S + 1), this.heap = new o.Buf16(2 * O + 1), J(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * O + 1), J(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function he(g) {
          var X;
          return g && g.state ? (g.total_in = g.total_out = 0, g.data_type = y, (X = g.state).pending = 0, X.pending_out = 0, X.wrap < 0 && (X.wrap = -X.wrap), X.status = X.wrap ? E : D, g.adler = X.wrap === 2 ? 0 : 1, X.last_flush = f, s._tr_init(X), h) : Y(g, m);
        }
        function be(g) {
          var X = he(g);
          return X === h && function(V) {
            V.window_size = 2 * V.w_size, J(V.head), V.max_lazy_match = a[V.level].max_lazy, V.good_match = a[V.level].good_length, V.nice_match = a[V.level].nice_length, V.max_chain_length = a[V.level].max_chain, V.strstart = 0, V.block_start = 0, V.lookahead = 0, V.insert = 0, V.match_length = V.prev_length = w - 1, V.match_available = 0, V.ins_h = 0;
          }(g.state), X;
        }
        function xe(g, X, V, A, T, B) {
          if (!g) return m;
          var ne = 1;
          if (X === p && (X = 6), A < 0 ? (ne = 0, A = -A) : 15 < A && (ne = 2, A -= 16), T < 1 || x < T || V !== _ || A < 8 || 15 < A || X < 0 || 9 < X || B < 0 || b < B) return Y(g, m);
          A === 8 && (A = 9);
          var ie = new de();
          return (g.state = ie).strm = g, ie.wrap = ne, ie.gzhead = null, ie.w_bits = A, ie.w_size = 1 << ie.w_bits, ie.w_mask = ie.w_size - 1, ie.hash_bits = T + 7, ie.hash_size = 1 << ie.hash_bits, ie.hash_mask = ie.hash_size - 1, ie.hash_shift = ~~((ie.hash_bits + w - 1) / w), ie.window = new o.Buf8(2 * ie.w_size), ie.head = new o.Buf16(ie.hash_size), ie.prev = new o.Buf16(ie.w_size), ie.lit_bufsize = 1 << T + 6, ie.pending_buf_size = 4 * ie.lit_bufsize, ie.pending_buf = new o.Buf8(ie.pending_buf_size), ie.d_buf = 1 * ie.lit_bufsize, ie.l_buf = 3 * ie.lit_bufsize, ie.level = X, ie.strategy = B, ie.method = V, be(g);
        }
        a = [new le(0, 0, 0, 0, function(g, X) {
          var V = 65535;
          for (V > g.pending_buf_size - 5 && (V = g.pending_buf_size - 5); ; ) {
            if (g.lookahead <= 1) {
              if (me(g), g.lookahead === 0 && X === f) return v;
              if (g.lookahead === 0) break;
            }
            g.strstart += g.lookahead, g.lookahead = 0;
            var A = g.block_start + V;
            if ((g.strstart === 0 || g.strstart >= A) && (g.lookahead = g.strstart - A, g.strstart = A, P(g, !1), g.strm.avail_out === 0) || g.strstart - g.block_start >= g.w_size - z && (P(g, !1), g.strm.avail_out === 0)) return v;
          }
          return g.insert = 0, X === d ? (P(g, !0), g.strm.avail_out === 0 ? te : L) : (g.strstart > g.block_start && (P(g, !1), g.strm.avail_out), v);
        }), new le(4, 4, 8, 4, Ee), new le(4, 5, 16, 8, Ee), new le(4, 6, 32, 32, Ee), new le(4, 4, 16, 16, oe), new le(8, 16, 32, 32, oe), new le(8, 16, 128, 128, oe), new le(8, 32, 128, 256, oe), new le(32, 128, 258, 1024, oe), new le(32, 258, 258, 4096, oe)], i.deflateInit = function(g, X) {
          return xe(g, X, _, 15, 8, 0);
        }, i.deflateInit2 = xe, i.deflateReset = be, i.deflateResetKeep = he, i.deflateSetHeader = function(g, X) {
          return g && g.state ? g.state.wrap !== 2 ? m : (g.state.gzhead = X, h) : m;
        }, i.deflate = function(g, X) {
          var V, A, T, B;
          if (!g || !g.state || 5 < X || X < 0) return g ? Y(g, m) : m;
          if (A = g.state, !g.output || !g.input && g.avail_in !== 0 || A.status === 666 && X !== d) return Y(g, g.avail_out === 0 ? -5 : m);
          if (A.strm = g, V = A.last_flush, A.last_flush = X, A.status === E) if (A.wrap === 2) g.adler = 0, K(A, 31), K(A, 139), K(A, 8), A.gzhead ? (K(A, (A.gzhead.text ? 1 : 0) + (A.gzhead.hcrc ? 2 : 0) + (A.gzhead.extra ? 4 : 0) + (A.gzhead.name ? 8 : 0) + (A.gzhead.comment ? 16 : 0)), K(A, 255 & A.gzhead.time), K(A, A.gzhead.time >> 8 & 255), K(A, A.gzhead.time >> 16 & 255), K(A, A.gzhead.time >> 24 & 255), K(A, A.level === 9 ? 2 : 2 <= A.strategy || A.level < 2 ? 4 : 0), K(A, 255 & A.gzhead.os), A.gzhead.extra && A.gzhead.extra.length && (K(A, 255 & A.gzhead.extra.length), K(A, A.gzhead.extra.length >> 8 & 255)), A.gzhead.hcrc && (g.adler = c(g.adler, A.pending_buf, A.pending, 0)), A.gzindex = 0, A.status = 69) : (K(A, 0), K(A, 0), K(A, 0), K(A, 0), K(A, 0), K(A, A.level === 9 ? 2 : 2 <= A.strategy || A.level < 2 ? 4 : 0), K(A, 3), A.status = D);
          else {
            var ne = _ + (A.w_bits - 8 << 4) << 8;
            ne |= (2 <= A.strategy || A.level < 2 ? 0 : A.level < 6 ? 1 : A.level === 6 ? 2 : 3) << 6, A.strstart !== 0 && (ne |= 32), ne += 31 - ne % 31, A.status = D, ee(A, ne), A.strstart !== 0 && (ee(A, g.adler >>> 16), ee(A, 65535 & g.adler)), g.adler = 1;
          }
          if (A.status === 69) if (A.gzhead.extra) {
            for (T = A.pending; A.gzindex < (65535 & A.gzhead.extra.length) && (A.pending !== A.pending_buf_size || (A.gzhead.hcrc && A.pending > T && (g.adler = c(g.adler, A.pending_buf, A.pending - T, T)), M(g), T = A.pending, A.pending !== A.pending_buf_size)); ) K(A, 255 & A.gzhead.extra[A.gzindex]), A.gzindex++;
            A.gzhead.hcrc && A.pending > T && (g.adler = c(g.adler, A.pending_buf, A.pending - T, T)), A.gzindex === A.gzhead.extra.length && (A.gzindex = 0, A.status = 73);
          } else A.status = 73;
          if (A.status === 73) if (A.gzhead.name) {
            T = A.pending;
            do {
              if (A.pending === A.pending_buf_size && (A.gzhead.hcrc && A.pending > T && (g.adler = c(g.adler, A.pending_buf, A.pending - T, T)), M(g), T = A.pending, A.pending === A.pending_buf_size)) {
                B = 1;
                break;
              }
              B = A.gzindex < A.gzhead.name.length ? 255 & A.gzhead.name.charCodeAt(A.gzindex++) : 0, K(A, B);
            } while (B !== 0);
            A.gzhead.hcrc && A.pending > T && (g.adler = c(g.adler, A.pending_buf, A.pending - T, T)), B === 0 && (A.gzindex = 0, A.status = 91);
          } else A.status = 91;
          if (A.status === 91) if (A.gzhead.comment) {
            T = A.pending;
            do {
              if (A.pending === A.pending_buf_size && (A.gzhead.hcrc && A.pending > T && (g.adler = c(g.adler, A.pending_buf, A.pending - T, T)), M(g), T = A.pending, A.pending === A.pending_buf_size)) {
                B = 1;
                break;
              }
              B = A.gzindex < A.gzhead.comment.length ? 255 & A.gzhead.comment.charCodeAt(A.gzindex++) : 0, K(A, B);
            } while (B !== 0);
            A.gzhead.hcrc && A.pending > T && (g.adler = c(g.adler, A.pending_buf, A.pending - T, T)), B === 0 && (A.status = 103);
          } else A.status = 103;
          if (A.status === 103 && (A.gzhead.hcrc ? (A.pending + 2 > A.pending_buf_size && M(g), A.pending + 2 <= A.pending_buf_size && (K(A, 255 & g.adler), K(A, g.adler >> 8 & 255), g.adler = 0, A.status = D)) : A.status = D), A.pending !== 0) {
            if (M(g), g.avail_out === 0) return A.last_flush = -1, h;
          } else if (g.avail_in === 0 && U(X) <= U(V) && X !== d) return Y(g, -5);
          if (A.status === 666 && g.avail_in !== 0) return Y(g, -5);
          if (g.avail_in !== 0 || A.lookahead !== 0 || X !== f && A.status !== 666) {
            var ie = A.strategy === 2 ? function(G, W) {
              for (var re; ; ) {
                if (G.lookahead === 0 && (me(G), G.lookahead === 0)) {
                  if (W === f) return v;
                  break;
                }
                if (G.match_length = 0, re = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++, re && (P(G, !1), G.strm.avail_out === 0)) return v;
              }
              return G.insert = 0, W === d ? (P(G, !0), G.strm.avail_out === 0 ? te : L) : G.last_lit && (P(G, !1), G.strm.avail_out === 0) ? v : j;
            }(A, X) : A.strategy === 3 ? function(G, W) {
              for (var re, Q, ae, pe, _e = G.window; ; ) {
                if (G.lookahead <= N) {
                  if (me(G), G.lookahead <= N && W === f) return v;
                  if (G.lookahead === 0) break;
                }
                if (G.match_length = 0, G.lookahead >= w && 0 < G.strstart && (Q = _e[ae = G.strstart - 1]) === _e[++ae] && Q === _e[++ae] && Q === _e[++ae]) {
                  pe = G.strstart + N;
                  do
                    ;
                  while (Q === _e[++ae] && Q === _e[++ae] && Q === _e[++ae] && Q === _e[++ae] && Q === _e[++ae] && Q === _e[++ae] && Q === _e[++ae] && Q === _e[++ae] && ae < pe);
                  G.match_length = N - (pe - ae), G.match_length > G.lookahead && (G.match_length = G.lookahead);
                }
                if (G.match_length >= w ? (re = s._tr_tally(G, 1, G.match_length - w), G.lookahead -= G.match_length, G.strstart += G.match_length, G.match_length = 0) : (re = s._tr_tally(G, 0, G.window[G.strstart]), G.lookahead--, G.strstart++), re && (P(G, !1), G.strm.avail_out === 0)) return v;
              }
              return G.insert = 0, W === d ? (P(G, !0), G.strm.avail_out === 0 ? te : L) : G.last_lit && (P(G, !1), G.strm.avail_out === 0) ? v : j;
            }(A, X) : a[A.level].func(A, X);
            if (ie !== te && ie !== L || (A.status = 666), ie === v || ie === te) return g.avail_out === 0 && (A.last_flush = -1), h;
            if (ie === j && (X === 1 ? s._tr_align(A) : X !== 5 && (s._tr_stored_block(A, 0, 0, !1), X === 3 && (J(A.head), A.lookahead === 0 && (A.strstart = 0, A.block_start = 0, A.insert = 0))), M(g), g.avail_out === 0)) return A.last_flush = -1, h;
          }
          return X !== d ? h : A.wrap <= 0 ? 1 : (A.wrap === 2 ? (K(A, 255 & g.adler), K(A, g.adler >> 8 & 255), K(A, g.adler >> 16 & 255), K(A, g.adler >> 24 & 255), K(A, 255 & g.total_in), K(A, g.total_in >> 8 & 255), K(A, g.total_in >> 16 & 255), K(A, g.total_in >> 24 & 255)) : (ee(A, g.adler >>> 16), ee(A, 65535 & g.adler)), M(g), 0 < A.wrap && (A.wrap = -A.wrap), A.pending !== 0 ? h : 1);
        }, i.deflateEnd = function(g) {
          var X;
          return g && g.state ? (X = g.state.status) !== E && X !== 69 && X !== 73 && X !== 91 && X !== 103 && X !== D && X !== 666 ? Y(g, m) : (g.state = null, X === D ? Y(g, -3) : h) : m;
        }, i.deflateSetDictionary = function(g, X) {
          var V, A, T, B, ne, ie, G, W, re = X.length;
          if (!g || !g.state || (B = (V = g.state).wrap) === 2 || B === 1 && V.status !== E || V.lookahead) return m;
          for (B === 1 && (g.adler = u(g.adler, X, re, 0)), V.wrap = 0, re >= V.w_size && (B === 0 && (J(V.head), V.strstart = 0, V.block_start = 0, V.insert = 0), W = new o.Buf8(V.w_size), o.arraySet(W, X, re - V.w_size, V.w_size, 0), X = W, re = V.w_size), ne = g.avail_in, ie = g.next_in, G = g.input, g.avail_in = re, g.next_in = 0, g.input = X, me(V); V.lookahead >= w; ) {
            for (A = V.strstart, T = V.lookahead - (w - 1); V.ins_h = (V.ins_h << V.hash_shift ^ V.window[A + w - 1]) & V.hash_mask, V.prev[A & V.w_mask] = V.head[V.ins_h], V.head[V.ins_h] = A, A++, --T; ) ;
            V.strstart = A, V.lookahead = w - 1, me(V);
          }
          return V.strstart += V.lookahead, V.block_start = V.strstart, V.insert = V.lookahead, V.lookahead = 0, V.match_length = V.prev_length = w - 1, V.match_available = 0, g.next_in = ie, g.input = G, g.avail_in = ne, V.wrap = B, h;
        }, i.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, n, i) {
        n.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(r, n, i) {
        n.exports = function(a, o) {
          var s, u, c, l, f, d, h, m, p, b, y, _, x, O, C, F, R, S, w, N, z, E, D, v, j;
          s = a.state, u = a.next_in, v = a.input, c = u + (a.avail_in - 5), l = a.next_out, j = a.output, f = l - (o - a.avail_out), d = l + (a.avail_out - 257), h = s.dmax, m = s.wsize, p = s.whave, b = s.wnext, y = s.window, _ = s.hold, x = s.bits, O = s.lencode, C = s.distcode, F = (1 << s.lenbits) - 1, R = (1 << s.distbits) - 1;
          e: do {
            x < 15 && (_ += v[u++] << x, x += 8, _ += v[u++] << x, x += 8), S = O[_ & F];
            t: for (; ; ) {
              if (_ >>>= w = S >>> 24, x -= w, (w = S >>> 16 & 255) === 0) j[l++] = 65535 & S;
              else {
                if (!(16 & w)) {
                  if (!(64 & w)) {
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
                N = 65535 & S, (w &= 15) && (x < w && (_ += v[u++] << x, x += 8), N += _ & (1 << w) - 1, _ >>>= w, x -= w), x < 15 && (_ += v[u++] << x, x += 8, _ += v[u++] << x, x += 8), S = C[_ & R];
                r: for (; ; ) {
                  if (_ >>>= w = S >>> 24, x -= w, !(16 & (w = S >>> 16 & 255))) {
                    if (!(64 & w)) {
                      S = C[(65535 & S) + (_ & (1 << w) - 1)];
                      continue r;
                    }
                    a.msg = "invalid distance code", s.mode = 30;
                    break e;
                  }
                  if (z = 65535 & S, x < (w &= 15) && (_ += v[u++] << x, (x += 8) < w && (_ += v[u++] << x, x += 8)), h < (z += _ & (1 << w) - 1)) {
                    a.msg = "invalid distance too far back", s.mode = 30;
                    break e;
                  }
                  if (_ >>>= w, x -= w, (w = l - f) < z) {
                    if (p < (w = z - w) && s.sane) {
                      a.msg = "invalid distance too far back", s.mode = 30;
                      break e;
                    }
                    if (D = y, (E = 0) === b) {
                      if (E += m - w, w < N) {
                        for (N -= w; j[l++] = y[E++], --w; ) ;
                        E = l - z, D = j;
                      }
                    } else if (b < w) {
                      if (E += m + b - w, (w -= b) < N) {
                        for (N -= w; j[l++] = y[E++], --w; ) ;
                        if (E = 0, b < N) {
                          for (N -= w = b; j[l++] = y[E++], --w; ) ;
                          E = l - z, D = j;
                        }
                      }
                    } else if (E += b - w, w < N) {
                      for (N -= w; j[l++] = y[E++], --w; ) ;
                      E = l - z, D = j;
                    }
                    for (; 2 < N; ) j[l++] = D[E++], j[l++] = D[E++], j[l++] = D[E++], N -= 3;
                    N && (j[l++] = D[E++], 1 < N && (j[l++] = D[E++]));
                  } else {
                    for (E = l - z; j[l++] = j[E++], j[l++] = j[E++], j[l++] = j[E++], 2 < (N -= 3); ) ;
                    N && (j[l++] = j[E++], 1 < N && (j[l++] = j[E++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (u < c && l < d);
          u -= N = x >> 3, _ &= (1 << (x -= N << 3)) - 1, a.next_in = u, a.next_out = l, a.avail_in = u < c ? c - u + 5 : 5 - (u - c), a.avail_out = l < d ? d - l + 257 : 257 - (l - d), s.hold = _, s.bits = x;
        };
      }, {}], 49: [function(r, n, i) {
        var a = r("../utils/common"), o = r("./adler32"), s = r("./crc32"), u = r("./inffast"), c = r("./inftrees"), l = 1, f = 2, d = 0, h = -2, m = 1, p = 852, b = 592;
        function y(E) {
          return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
        }
        function _() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new a.Buf16(320), this.work = new a.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function x(E) {
          var D;
          return E && E.state ? (D = E.state, E.total_in = E.total_out = D.total = 0, E.msg = "", D.wrap && (E.adler = 1 & D.wrap), D.mode = m, D.last = 0, D.havedict = 0, D.dmax = 32768, D.head = null, D.hold = 0, D.bits = 0, D.lencode = D.lendyn = new a.Buf32(p), D.distcode = D.distdyn = new a.Buf32(b), D.sane = 1, D.back = -1, d) : h;
        }
        function O(E) {
          var D;
          return E && E.state ? ((D = E.state).wsize = 0, D.whave = 0, D.wnext = 0, x(E)) : h;
        }
        function C(E, D) {
          var v, j;
          return E && E.state ? (j = E.state, D < 0 ? (v = 0, D = -D) : (v = 1 + (D >> 4), D < 48 && (D &= 15)), D && (D < 8 || 15 < D) ? h : (j.window !== null && j.wbits !== D && (j.window = null), j.wrap = v, j.wbits = D, O(E))) : h;
        }
        function F(E, D) {
          var v, j;
          return E ? (j = new _(), (E.state = j).window = null, (v = C(E, D)) !== d && (E.state = null), v) : h;
        }
        var R, S, w = !0;
        function N(E) {
          if (w) {
            var D;
            for (R = new a.Buf32(512), S = new a.Buf32(32), D = 0; D < 144; ) E.lens[D++] = 8;
            for (; D < 256; ) E.lens[D++] = 9;
            for (; D < 280; ) E.lens[D++] = 7;
            for (; D < 288; ) E.lens[D++] = 8;
            for (c(l, E.lens, 0, 288, R, 0, E.work, { bits: 9 }), D = 0; D < 32; ) E.lens[D++] = 5;
            c(f, E.lens, 0, 32, S, 0, E.work, { bits: 5 }), w = !1;
          }
          E.lencode = R, E.lenbits = 9, E.distcode = S, E.distbits = 5;
        }
        function z(E, D, v, j) {
          var te, L = E.state;
          return L.window === null && (L.wsize = 1 << L.wbits, L.wnext = 0, L.whave = 0, L.window = new a.Buf8(L.wsize)), j >= L.wsize ? (a.arraySet(L.window, D, v - L.wsize, L.wsize, 0), L.wnext = 0, L.whave = L.wsize) : (j < (te = L.wsize - L.wnext) && (te = j), a.arraySet(L.window, D, v - j, te, L.wnext), (j -= te) ? (a.arraySet(L.window, D, v - j, j, 0), L.wnext = j, L.whave = L.wsize) : (L.wnext += te, L.wnext === L.wsize && (L.wnext = 0), L.whave < L.wsize && (L.whave += te))), 0;
        }
        i.inflateReset = O, i.inflateReset2 = C, i.inflateResetKeep = x, i.inflateInit = function(E) {
          return F(E, 15);
        }, i.inflateInit2 = F, i.inflate = function(E, D) {
          var v, j, te, L, Y, U, J, M, P, K, ee, H, me, Ee, oe, le, de, he, be, xe, g, X, V, A, T = 0, B = new a.Buf8(4), ne = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0) return h;
          (v = E.state).mode === 12 && (v.mode = 13), Y = E.next_out, te = E.output, J = E.avail_out, L = E.next_in, j = E.input, U = E.avail_in, M = v.hold, P = v.bits, K = U, ee = J, X = d;
          e: for (; ; ) switch (v.mode) {
            case m:
              if (v.wrap === 0) {
                v.mode = 13;
                break;
              }
              for (; P < 16; ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              if (2 & v.wrap && M === 35615) {
                B[v.check = 0] = 255 & M, B[1] = M >>> 8 & 255, v.check = s(v.check, B, 2, 0), P = M = 0, v.mode = 2;
                break;
              }
              if (v.flags = 0, v.head && (v.head.done = !1), !(1 & v.wrap) || (((255 & M) << 8) + (M >> 8)) % 31) {
                E.msg = "incorrect header check", v.mode = 30;
                break;
              }
              if ((15 & M) != 8) {
                E.msg = "unknown compression method", v.mode = 30;
                break;
              }
              if (P -= 4, g = 8 + (15 & (M >>>= 4)), v.wbits === 0) v.wbits = g;
              else if (g > v.wbits) {
                E.msg = "invalid window size", v.mode = 30;
                break;
              }
              v.dmax = 1 << g, E.adler = v.check = 1, v.mode = 512 & M ? 10 : 12, P = M = 0;
              break;
            case 2:
              for (; P < 16; ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              if (v.flags = M, (255 & v.flags) != 8) {
                E.msg = "unknown compression method", v.mode = 30;
                break;
              }
              if (57344 & v.flags) {
                E.msg = "unknown header flags set", v.mode = 30;
                break;
              }
              v.head && (v.head.text = M >> 8 & 1), 512 & v.flags && (B[0] = 255 & M, B[1] = M >>> 8 & 255, v.check = s(v.check, B, 2, 0)), P = M = 0, v.mode = 3;
            case 3:
              for (; P < 32; ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              v.head && (v.head.time = M), 512 & v.flags && (B[0] = 255 & M, B[1] = M >>> 8 & 255, B[2] = M >>> 16 & 255, B[3] = M >>> 24 & 255, v.check = s(v.check, B, 4, 0)), P = M = 0, v.mode = 4;
            case 4:
              for (; P < 16; ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              v.head && (v.head.xflags = 255 & M, v.head.os = M >> 8), 512 & v.flags && (B[0] = 255 & M, B[1] = M >>> 8 & 255, v.check = s(v.check, B, 2, 0)), P = M = 0, v.mode = 5;
            case 5:
              if (1024 & v.flags) {
                for (; P < 16; ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                v.length = M, v.head && (v.head.extra_len = M), 512 & v.flags && (B[0] = 255 & M, B[1] = M >>> 8 & 255, v.check = s(v.check, B, 2, 0)), P = M = 0;
              } else v.head && (v.head.extra = null);
              v.mode = 6;
            case 6:
              if (1024 & v.flags && (U < (H = v.length) && (H = U), H && (v.head && (g = v.head.extra_len - v.length, v.head.extra || (v.head.extra = new Array(v.head.extra_len)), a.arraySet(v.head.extra, j, L, H, g)), 512 & v.flags && (v.check = s(v.check, j, H, L)), U -= H, L += H, v.length -= H), v.length)) break e;
              v.length = 0, v.mode = 7;
            case 7:
              if (2048 & v.flags) {
                if (U === 0) break e;
                for (H = 0; g = j[L + H++], v.head && g && v.length < 65536 && (v.head.name += String.fromCharCode(g)), g && H < U; ) ;
                if (512 & v.flags && (v.check = s(v.check, j, H, L)), U -= H, L += H, g) break e;
              } else v.head && (v.head.name = null);
              v.length = 0, v.mode = 8;
            case 8:
              if (4096 & v.flags) {
                if (U === 0) break e;
                for (H = 0; g = j[L + H++], v.head && g && v.length < 65536 && (v.head.comment += String.fromCharCode(g)), g && H < U; ) ;
                if (512 & v.flags && (v.check = s(v.check, j, H, L)), U -= H, L += H, g) break e;
              } else v.head && (v.head.comment = null);
              v.mode = 9;
            case 9:
              if (512 & v.flags) {
                for (; P < 16; ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                if (M !== (65535 & v.check)) {
                  E.msg = "header crc mismatch", v.mode = 30;
                  break;
                }
                P = M = 0;
              }
              v.head && (v.head.hcrc = v.flags >> 9 & 1, v.head.done = !0), E.adler = v.check = 0, v.mode = 12;
              break;
            case 10:
              for (; P < 32; ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              E.adler = v.check = y(M), P = M = 0, v.mode = 11;
            case 11:
              if (v.havedict === 0) return E.next_out = Y, E.avail_out = J, E.next_in = L, E.avail_in = U, v.hold = M, v.bits = P, 2;
              E.adler = v.check = 1, v.mode = 12;
            case 12:
              if (D === 5 || D === 6) break e;
            case 13:
              if (v.last) {
                M >>>= 7 & P, P -= 7 & P, v.mode = 27;
                break;
              }
              for (; P < 3; ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              switch (v.last = 1 & M, P -= 1, 3 & (M >>>= 1)) {
                case 0:
                  v.mode = 14;
                  break;
                case 1:
                  if (N(v), v.mode = 20, D !== 6) break;
                  M >>>= 2, P -= 2;
                  break e;
                case 2:
                  v.mode = 17;
                  break;
                case 3:
                  E.msg = "invalid block type", v.mode = 30;
              }
              M >>>= 2, P -= 2;
              break;
            case 14:
              for (M >>>= 7 & P, P -= 7 & P; P < 32; ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              if ((65535 & M) != (M >>> 16 ^ 65535)) {
                E.msg = "invalid stored block lengths", v.mode = 30;
                break;
              }
              if (v.length = 65535 & M, P = M = 0, v.mode = 15, D === 6) break e;
            case 15:
              v.mode = 16;
            case 16:
              if (H = v.length) {
                if (U < H && (H = U), J < H && (H = J), H === 0) break e;
                a.arraySet(te, j, L, H, Y), U -= H, L += H, J -= H, Y += H, v.length -= H;
                break;
              }
              v.mode = 12;
              break;
            case 17:
              for (; P < 14; ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              if (v.nlen = 257 + (31 & M), M >>>= 5, P -= 5, v.ndist = 1 + (31 & M), M >>>= 5, P -= 5, v.ncode = 4 + (15 & M), M >>>= 4, P -= 4, 286 < v.nlen || 30 < v.ndist) {
                E.msg = "too many length or distance symbols", v.mode = 30;
                break;
              }
              v.have = 0, v.mode = 18;
            case 18:
              for (; v.have < v.ncode; ) {
                for (; P < 3; ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                v.lens[ne[v.have++]] = 7 & M, M >>>= 3, P -= 3;
              }
              for (; v.have < 19; ) v.lens[ne[v.have++]] = 0;
              if (v.lencode = v.lendyn, v.lenbits = 7, V = { bits: v.lenbits }, X = c(0, v.lens, 0, 19, v.lencode, 0, v.work, V), v.lenbits = V.bits, X) {
                E.msg = "invalid code lengths set", v.mode = 30;
                break;
              }
              v.have = 0, v.mode = 19;
            case 19:
              for (; v.have < v.nlen + v.ndist; ) {
                for (; le = (T = v.lencode[M & (1 << v.lenbits) - 1]) >>> 16 & 255, de = 65535 & T, !((oe = T >>> 24) <= P); ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                if (de < 16) M >>>= oe, P -= oe, v.lens[v.have++] = de;
                else {
                  if (de === 16) {
                    for (A = oe + 2; P < A; ) {
                      if (U === 0) break e;
                      U--, M += j[L++] << P, P += 8;
                    }
                    if (M >>>= oe, P -= oe, v.have === 0) {
                      E.msg = "invalid bit length repeat", v.mode = 30;
                      break;
                    }
                    g = v.lens[v.have - 1], H = 3 + (3 & M), M >>>= 2, P -= 2;
                  } else if (de === 17) {
                    for (A = oe + 3; P < A; ) {
                      if (U === 0) break e;
                      U--, M += j[L++] << P, P += 8;
                    }
                    P -= oe, g = 0, H = 3 + (7 & (M >>>= oe)), M >>>= 3, P -= 3;
                  } else {
                    for (A = oe + 7; P < A; ) {
                      if (U === 0) break e;
                      U--, M += j[L++] << P, P += 8;
                    }
                    P -= oe, g = 0, H = 11 + (127 & (M >>>= oe)), M >>>= 7, P -= 7;
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
              if (v.lenbits = 9, V = { bits: v.lenbits }, X = c(l, v.lens, 0, v.nlen, v.lencode, 0, v.work, V), v.lenbits = V.bits, X) {
                E.msg = "invalid literal/lengths set", v.mode = 30;
                break;
              }
              if (v.distbits = 6, v.distcode = v.distdyn, V = { bits: v.distbits }, X = c(f, v.lens, v.nlen, v.ndist, v.distcode, 0, v.work, V), v.distbits = V.bits, X) {
                E.msg = "invalid distances set", v.mode = 30;
                break;
              }
              if (v.mode = 20, D === 6) break e;
            case 20:
              v.mode = 21;
            case 21:
              if (6 <= U && 258 <= J) {
                E.next_out = Y, E.avail_out = J, E.next_in = L, E.avail_in = U, v.hold = M, v.bits = P, u(E, ee), Y = E.next_out, te = E.output, J = E.avail_out, L = E.next_in, j = E.input, U = E.avail_in, M = v.hold, P = v.bits, v.mode === 12 && (v.back = -1);
                break;
              }
              for (v.back = 0; le = (T = v.lencode[M & (1 << v.lenbits) - 1]) >>> 16 & 255, de = 65535 & T, !((oe = T >>> 24) <= P); ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              if (le && !(240 & le)) {
                for (he = oe, be = le, xe = de; le = (T = v.lencode[xe + ((M & (1 << he + be) - 1) >> he)]) >>> 16 & 255, de = 65535 & T, !(he + (oe = T >>> 24) <= P); ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                M >>>= he, P -= he, v.back += he;
              }
              if (M >>>= oe, P -= oe, v.back += oe, v.length = de, le === 0) {
                v.mode = 26;
                break;
              }
              if (32 & le) {
                v.back = -1, v.mode = 12;
                break;
              }
              if (64 & le) {
                E.msg = "invalid literal/length code", v.mode = 30;
                break;
              }
              v.extra = 15 & le, v.mode = 22;
            case 22:
              if (v.extra) {
                for (A = v.extra; P < A; ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                v.length += M & (1 << v.extra) - 1, M >>>= v.extra, P -= v.extra, v.back += v.extra;
              }
              v.was = v.length, v.mode = 23;
            case 23:
              for (; le = (T = v.distcode[M & (1 << v.distbits) - 1]) >>> 16 & 255, de = 65535 & T, !((oe = T >>> 24) <= P); ) {
                if (U === 0) break e;
                U--, M += j[L++] << P, P += 8;
              }
              if (!(240 & le)) {
                for (he = oe, be = le, xe = de; le = (T = v.distcode[xe + ((M & (1 << he + be) - 1) >> he)]) >>> 16 & 255, de = 65535 & T, !(he + (oe = T >>> 24) <= P); ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                M >>>= he, P -= he, v.back += he;
              }
              if (M >>>= oe, P -= oe, v.back += oe, 64 & le) {
                E.msg = "invalid distance code", v.mode = 30;
                break;
              }
              v.offset = de, v.extra = 15 & le, v.mode = 24;
            case 24:
              if (v.extra) {
                for (A = v.extra; P < A; ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                v.offset += M & (1 << v.extra) - 1, M >>>= v.extra, P -= v.extra, v.back += v.extra;
              }
              if (v.offset > v.dmax) {
                E.msg = "invalid distance too far back", v.mode = 30;
                break;
              }
              v.mode = 25;
            case 25:
              if (J === 0) break e;
              if (H = ee - J, v.offset > H) {
                if ((H = v.offset - H) > v.whave && v.sane) {
                  E.msg = "invalid distance too far back", v.mode = 30;
                  break;
                }
                me = H > v.wnext ? (H -= v.wnext, v.wsize - H) : v.wnext - H, H > v.length && (H = v.length), Ee = v.window;
              } else Ee = te, me = Y - v.offset, H = v.length;
              for (J < H && (H = J), J -= H, v.length -= H; te[Y++] = Ee[me++], --H; ) ;
              v.length === 0 && (v.mode = 21);
              break;
            case 26:
              if (J === 0) break e;
              te[Y++] = v.length, J--, v.mode = 21;
              break;
            case 27:
              if (v.wrap) {
                for (; P < 32; ) {
                  if (U === 0) break e;
                  U--, M |= j[L++] << P, P += 8;
                }
                if (ee -= J, E.total_out += ee, v.total += ee, ee && (E.adler = v.check = v.flags ? s(v.check, te, ee, Y - ee) : o(v.check, te, ee, Y - ee)), ee = J, (v.flags ? M : y(M)) !== v.check) {
                  E.msg = "incorrect data check", v.mode = 30;
                  break;
                }
                P = M = 0;
              }
              v.mode = 28;
            case 28:
              if (v.wrap && v.flags) {
                for (; P < 32; ) {
                  if (U === 0) break e;
                  U--, M += j[L++] << P, P += 8;
                }
                if (M !== (4294967295 & v.total)) {
                  E.msg = "incorrect length check", v.mode = 30;
                  break;
                }
                P = M = 0;
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
          return E.next_out = Y, E.avail_out = J, E.next_in = L, E.avail_in = U, v.hold = M, v.bits = P, (v.wsize || ee !== E.avail_out && v.mode < 30 && (v.mode < 27 || D !== 4)) && z(E, E.output, E.next_out, ee - E.avail_out) ? (v.mode = 31, -4) : (K -= E.avail_in, ee -= E.avail_out, E.total_in += K, E.total_out += ee, v.total += ee, v.wrap && ee && (E.adler = v.check = v.flags ? s(v.check, te, ee, E.next_out - ee) : o(v.check, te, ee, E.next_out - ee)), E.data_type = v.bits + (v.last ? 64 : 0) + (v.mode === 12 ? 128 : 0) + (v.mode === 20 || v.mode === 15 ? 256 : 0), (K == 0 && ee === 0 || D === 4) && X === d && (X = -5), X);
        }, i.inflateEnd = function(E) {
          if (!E || !E.state) return h;
          var D = E.state;
          return D.window && (D.window = null), E.state = null, d;
        }, i.inflateGetHeader = function(E, D) {
          var v;
          return E && E.state && 2 & (v = E.state).wrap ? ((v.head = D).done = !1, d) : h;
        }, i.inflateSetDictionary = function(E, D) {
          var v, j = D.length;
          return E && E.state ? (v = E.state).wrap !== 0 && v.mode !== 11 ? h : v.mode === 11 && o(1, D, j, 0) !== v.check ? -3 : z(E, D, j, j) ? (v.mode = 31, -4) : (v.havedict = 1, d) : h;
        }, i.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, n, i) {
        var a = r("../utils/common"), o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        n.exports = function(l, f, d, h, m, p, b, y) {
          var _, x, O, C, F, R, S, w, N, z = y.bits, E = 0, D = 0, v = 0, j = 0, te = 0, L = 0, Y = 0, U = 0, J = 0, M = 0, P = null, K = 0, ee = new a.Buf16(16), H = new a.Buf16(16), me = null, Ee = 0;
          for (E = 0; E <= 15; E++) ee[E] = 0;
          for (D = 0; D < h; D++) ee[f[d + D]]++;
          for (te = z, j = 15; 1 <= j && ee[j] === 0; j--) ;
          if (j < te && (te = j), j === 0) return m[p++] = 20971520, m[p++] = 20971520, y.bits = 1, 0;
          for (v = 1; v < j && ee[v] === 0; v++) ;
          for (te < v && (te = v), E = U = 1; E <= 15; E++) if (U <<= 1, (U -= ee[E]) < 0) return -1;
          if (0 < U && (l === 0 || j !== 1)) return -1;
          for (H[1] = 0, E = 1; E < 15; E++) H[E + 1] = H[E] + ee[E];
          for (D = 0; D < h; D++) f[d + D] !== 0 && (b[H[f[d + D]]++] = D);
          if (R = l === 0 ? (P = me = b, 19) : l === 1 ? (P = o, K -= 257, me = s, Ee -= 257, 256) : (P = u, me = c, -1), E = v, F = p, Y = D = M = 0, O = -1, C = (J = 1 << (L = te)) - 1, l === 1 && 852 < J || l === 2 && 592 < J) return 1;
          for (; ; ) {
            for (S = E - Y, N = b[D] < R ? (w = 0, b[D]) : b[D] > R ? (w = me[Ee + b[D]], P[K + b[D]]) : (w = 96, 0), _ = 1 << E - Y, v = x = 1 << L; m[F + (M >> Y) + (x -= _)] = S << 24 | w << 16 | N | 0, x !== 0; ) ;
            for (_ = 1 << E - 1; M & _; ) _ >>= 1;
            if (_ !== 0 ? (M &= _ - 1, M += _) : M = 0, D++, --ee[E] == 0) {
              if (E === j) break;
              E = f[d + b[D]];
            }
            if (te < E && (M & C) !== O) {
              for (Y === 0 && (Y = te), F += v, U = 1 << (L = E - Y); L + Y < j && !((U -= ee[L + Y]) <= 0); ) L++, U <<= 1;
              if (J += 1 << L, l === 1 && 852 < J || l === 2 && 592 < J) return 1;
              m[O = M & C] = te << 24 | L << 16 | F - p | 0;
            }
          }
          return M !== 0 && (m[F + M] = E - Y << 24 | 64 << 16 | 0), y.bits = te, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(r, n, i) {
        n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(r, n, i) {
        var a = r("../utils/common"), o = 0, s = 1;
        function u(T) {
          for (var B = T.length; 0 <= --B; ) T[B] = 0;
        }
        var c = 0, l = 29, f = 256, d = f + 1 + l, h = 30, m = 19, p = 2 * d + 1, b = 15, y = 16, _ = 7, x = 256, O = 16, C = 17, F = 18, R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], w = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], N = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (d + 2));
        u(z);
        var E = new Array(2 * h);
        u(E);
        var D = new Array(512);
        u(D);
        var v = new Array(256);
        u(v);
        var j = new Array(l);
        u(j);
        var te, L, Y, U = new Array(h);
        function J(T, B, ne, ie, G) {
          this.static_tree = T, this.extra_bits = B, this.extra_base = ne, this.elems = ie, this.max_length = G, this.has_stree = T && T.length;
        }
        function M(T, B) {
          this.dyn_tree = T, this.max_code = 0, this.stat_desc = B;
        }
        function P(T) {
          return T < 256 ? D[T] : D[256 + (T >>> 7)];
        }
        function K(T, B) {
          T.pending_buf[T.pending++] = 255 & B, T.pending_buf[T.pending++] = B >>> 8 & 255;
        }
        function ee(T, B, ne) {
          T.bi_valid > y - ne ? (T.bi_buf |= B << T.bi_valid & 65535, K(T, T.bi_buf), T.bi_buf = B >> y - T.bi_valid, T.bi_valid += ne - y) : (T.bi_buf |= B << T.bi_valid & 65535, T.bi_valid += ne);
        }
        function H(T, B, ne) {
          ee(T, ne[2 * B], ne[2 * B + 1]);
        }
        function me(T, B) {
          for (var ne = 0; ne |= 1 & T, T >>>= 1, ne <<= 1, 0 < --B; ) ;
          return ne >>> 1;
        }
        function Ee(T, B, ne) {
          var ie, G, W = new Array(b + 1), re = 0;
          for (ie = 1; ie <= b; ie++) W[ie] = re = re + ne[ie - 1] << 1;
          for (G = 0; G <= B; G++) {
            var Q = T[2 * G + 1];
            Q !== 0 && (T[2 * G] = me(W[Q]++, Q));
          }
        }
        function oe(T) {
          var B;
          for (B = 0; B < d; B++) T.dyn_ltree[2 * B] = 0;
          for (B = 0; B < h; B++) T.dyn_dtree[2 * B] = 0;
          for (B = 0; B < m; B++) T.bl_tree[2 * B] = 0;
          T.dyn_ltree[2 * x] = 1, T.opt_len = T.static_len = 0, T.last_lit = T.matches = 0;
        }
        function le(T) {
          8 < T.bi_valid ? K(T, T.bi_buf) : 0 < T.bi_valid && (T.pending_buf[T.pending++] = T.bi_buf), T.bi_buf = 0, T.bi_valid = 0;
        }
        function de(T, B, ne, ie) {
          var G = 2 * B, W = 2 * ne;
          return T[G] < T[W] || T[G] === T[W] && ie[B] <= ie[ne];
        }
        function he(T, B, ne) {
          for (var ie = T.heap[ne], G = ne << 1; G <= T.heap_len && (G < T.heap_len && de(B, T.heap[G + 1], T.heap[G], T.depth) && G++, !de(B, ie, T.heap[G], T.depth)); ) T.heap[ne] = T.heap[G], ne = G, G <<= 1;
          T.heap[ne] = ie;
        }
        function be(T, B, ne) {
          var ie, G, W, re, Q = 0;
          if (T.last_lit !== 0) for (; ie = T.pending_buf[T.d_buf + 2 * Q] << 8 | T.pending_buf[T.d_buf + 2 * Q + 1], G = T.pending_buf[T.l_buf + Q], Q++, ie === 0 ? H(T, G, B) : (H(T, (W = v[G]) + f + 1, B), (re = R[W]) !== 0 && ee(T, G -= j[W], re), H(T, W = P(--ie), ne), (re = S[W]) !== 0 && ee(T, ie -= U[W], re)), Q < T.last_lit; ) ;
          H(T, x, B);
        }
        function xe(T, B) {
          var ne, ie, G, W = B.dyn_tree, re = B.stat_desc.static_tree, Q = B.stat_desc.has_stree, ae = B.stat_desc.elems, pe = -1;
          for (T.heap_len = 0, T.heap_max = p, ne = 0; ne < ae; ne++) W[2 * ne] !== 0 ? (T.heap[++T.heap_len] = pe = ne, T.depth[ne] = 0) : W[2 * ne + 1] = 0;
          for (; T.heap_len < 2; ) W[2 * (G = T.heap[++T.heap_len] = pe < 2 ? ++pe : 0)] = 1, T.depth[G] = 0, T.opt_len--, Q && (T.static_len -= re[2 * G + 1]);
          for (B.max_code = pe, ne = T.heap_len >> 1; 1 <= ne; ne--) he(T, W, ne);
          for (G = ae; ne = T.heap[1], T.heap[1] = T.heap[T.heap_len--], he(T, W, 1), ie = T.heap[1], T.heap[--T.heap_max] = ne, T.heap[--T.heap_max] = ie, W[2 * G] = W[2 * ne] + W[2 * ie], T.depth[G] = (T.depth[ne] >= T.depth[ie] ? T.depth[ne] : T.depth[ie]) + 1, W[2 * ne + 1] = W[2 * ie + 1] = G, T.heap[1] = G++, he(T, W, 1), 2 <= T.heap_len; ) ;
          T.heap[--T.heap_max] = T.heap[1], function(_e, Be) {
            var je, ke, Ve, Re, et, Ft, ht = Be.dyn_tree, Lr = Be.max_code, wa = Be.stat_desc.static_tree, Br = Be.stat_desc.has_stree, jr = Be.stat_desc.extra_bits, ti = Be.stat_desc.extra_base, wt = Be.stat_desc.max_length, zr = 0;
            for (Re = 0; Re <= b; Re++) _e.bl_count[Re] = 0;
            for (ht[2 * _e.heap[_e.heap_max] + 1] = 0, je = _e.heap_max + 1; je < p; je++) wt < (Re = ht[2 * ht[2 * (ke = _e.heap[je]) + 1] + 1] + 1) && (Re = wt, zr++), ht[2 * ke + 1] = Re, Lr < ke || (_e.bl_count[Re]++, et = 0, ti <= ke && (et = jr[ke - ti]), Ft = ht[2 * ke], _e.opt_len += Ft * (Re + et), Br && (_e.static_len += Ft * (wa[2 * ke + 1] + et)));
            if (zr !== 0) {
              do {
                for (Re = wt - 1; _e.bl_count[Re] === 0; ) Re--;
                _e.bl_count[Re]--, _e.bl_count[Re + 1] += 2, _e.bl_count[wt]--, zr -= 2;
              } while (0 < zr);
              for (Re = wt; Re !== 0; Re--) for (ke = _e.bl_count[Re]; ke !== 0; ) Lr < (Ve = _e.heap[--je]) || (ht[2 * Ve + 1] !== Re && (_e.opt_len += (Re - ht[2 * Ve + 1]) * ht[2 * Ve], ht[2 * Ve + 1] = Re), ke--);
            }
          }(T, B), Ee(W, pe, T.bl_count);
        }
        function g(T, B, ne) {
          var ie, G, W = -1, re = B[1], Q = 0, ae = 7, pe = 4;
          for (re === 0 && (ae = 138, pe = 3), B[2 * (ne + 1) + 1] = 65535, ie = 0; ie <= ne; ie++) G = re, re = B[2 * (ie + 1) + 1], ++Q < ae && G === re || (Q < pe ? T.bl_tree[2 * G] += Q : G !== 0 ? (G !== W && T.bl_tree[2 * G]++, T.bl_tree[2 * O]++) : Q <= 10 ? T.bl_tree[2 * C]++ : T.bl_tree[2 * F]++, W = G, pe = (Q = 0) === re ? (ae = 138, 3) : G === re ? (ae = 6, 3) : (ae = 7, 4));
        }
        function X(T, B, ne) {
          var ie, G, W = -1, re = B[1], Q = 0, ae = 7, pe = 4;
          for (re === 0 && (ae = 138, pe = 3), ie = 0; ie <= ne; ie++) if (G = re, re = B[2 * (ie + 1) + 1], !(++Q < ae && G === re)) {
            if (Q < pe) for (; H(T, G, T.bl_tree), --Q != 0; ) ;
            else G !== 0 ? (G !== W && (H(T, G, T.bl_tree), Q--), H(T, O, T.bl_tree), ee(T, Q - 3, 2)) : Q <= 10 ? (H(T, C, T.bl_tree), ee(T, Q - 3, 3)) : (H(T, F, T.bl_tree), ee(T, Q - 11, 7));
            W = G, pe = (Q = 0) === re ? (ae = 138, 3) : G === re ? (ae = 6, 3) : (ae = 7, 4);
          }
        }
        u(U);
        var V = !1;
        function A(T, B, ne, ie) {
          ee(T, (c << 1) + (ie ? 1 : 0), 3), function(G, W, re, Q) {
            le(G), K(G, re), K(G, ~re), a.arraySet(G.pending_buf, G.window, W, re, G.pending), G.pending += re;
          }(T, B, ne);
        }
        i._tr_init = function(T) {
          V || (function() {
            var B, ne, ie, G, W, re = new Array(b + 1);
            for (G = ie = 0; G < l - 1; G++) for (j[G] = ie, B = 0; B < 1 << R[G]; B++) v[ie++] = G;
            for (v[ie - 1] = G, G = W = 0; G < 16; G++) for (U[G] = W, B = 0; B < 1 << S[G]; B++) D[W++] = G;
            for (W >>= 7; G < h; G++) for (U[G] = W << 7, B = 0; B < 1 << S[G] - 7; B++) D[256 + W++] = G;
            for (ne = 0; ne <= b; ne++) re[ne] = 0;
            for (B = 0; B <= 143; ) z[2 * B + 1] = 8, B++, re[8]++;
            for (; B <= 255; ) z[2 * B + 1] = 9, B++, re[9]++;
            for (; B <= 279; ) z[2 * B + 1] = 7, B++, re[7]++;
            for (; B <= 287; ) z[2 * B + 1] = 8, B++, re[8]++;
            for (Ee(z, d + 1, re), B = 0; B < h; B++) E[2 * B + 1] = 5, E[2 * B] = me(B, 5);
            te = new J(z, R, f + 1, d, b), L = new J(E, S, 0, h, b), Y = new J(new Array(0), w, 0, m, _);
          }(), V = !0), T.l_desc = new M(T.dyn_ltree, te), T.d_desc = new M(T.dyn_dtree, L), T.bl_desc = new M(T.bl_tree, Y), T.bi_buf = 0, T.bi_valid = 0, oe(T);
        }, i._tr_stored_block = A, i._tr_flush_block = function(T, B, ne, ie) {
          var G, W, re = 0;
          0 < T.level ? (T.strm.data_type === 2 && (T.strm.data_type = function(Q) {
            var ae, pe = 4093624447;
            for (ae = 0; ae <= 31; ae++, pe >>>= 1) if (1 & pe && Q.dyn_ltree[2 * ae] !== 0) return o;
            if (Q.dyn_ltree[18] !== 0 || Q.dyn_ltree[20] !== 0 || Q.dyn_ltree[26] !== 0) return s;
            for (ae = 32; ae < f; ae++) if (Q.dyn_ltree[2 * ae] !== 0) return s;
            return o;
          }(T)), xe(T, T.l_desc), xe(T, T.d_desc), re = function(Q) {
            var ae;
            for (g(Q, Q.dyn_ltree, Q.l_desc.max_code), g(Q, Q.dyn_dtree, Q.d_desc.max_code), xe(Q, Q.bl_desc), ae = m - 1; 3 <= ae && Q.bl_tree[2 * N[ae] + 1] === 0; ae--) ;
            return Q.opt_len += 3 * (ae + 1) + 5 + 5 + 4, ae;
          }(T), G = T.opt_len + 3 + 7 >>> 3, (W = T.static_len + 3 + 7 >>> 3) <= G && (G = W)) : G = W = ne + 5, ne + 4 <= G && B !== -1 ? A(T, B, ne, ie) : T.strategy === 4 || W === G ? (ee(T, 2 + (ie ? 1 : 0), 3), be(T, z, E)) : (ee(T, 4 + (ie ? 1 : 0), 3), function(Q, ae, pe, _e) {
            var Be;
            for (ee(Q, ae - 257, 5), ee(Q, pe - 1, 5), ee(Q, _e - 4, 4), Be = 0; Be < _e; Be++) ee(Q, Q.bl_tree[2 * N[Be] + 1], 3);
            X(Q, Q.dyn_ltree, ae - 1), X(Q, Q.dyn_dtree, pe - 1);
          }(T, T.l_desc.max_code + 1, T.d_desc.max_code + 1, re + 1), be(T, T.dyn_ltree, T.dyn_dtree)), oe(T), ie && le(T);
        }, i._tr_tally = function(T, B, ne) {
          return T.pending_buf[T.d_buf + 2 * T.last_lit] = B >>> 8 & 255, T.pending_buf[T.d_buf + 2 * T.last_lit + 1] = 255 & B, T.pending_buf[T.l_buf + T.last_lit] = 255 & ne, T.last_lit++, B === 0 ? T.dyn_ltree[2 * ne]++ : (T.matches++, B--, T.dyn_ltree[2 * (v[ne] + f + 1)]++, T.dyn_dtree[2 * P(B)]++), T.last_lit === T.lit_bufsize - 1;
        }, i._tr_align = function(T) {
          ee(T, 2, 3), H(T, x, z), function(B) {
            B.bi_valid === 16 ? (K(B, B.bi_buf), B.bi_buf = 0, B.bi_valid = 0) : 8 <= B.bi_valid && (B.pending_buf[B.pending++] = 255 & B.bi_buf, B.bi_buf >>= 8, B.bi_valid -= 8);
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
              }() ? (f = "setImmediate$" + Math.random() + "$", o.addEventListener ? o.addEventListener("message", x, !1) : o.attachEvent("onmessage", x), function(O) {
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
                for (var C = new Array(arguments.length - 1), F = 0; F < C.length; F++) C[F] = arguments[F + 1];
                var R = { callback: O, args: C };
                return h[d] = R, u(d), d++;
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
                    (function(F) {
                      var R = F.callback, S = F.args;
                      switch (S.length) {
                        case 0:
                          R();
                          break;
                        case 1:
                          R(S[0]);
                          break;
                        case 2:
                          R(S[0], S[1]);
                          break;
                        case 3:
                          R(S[0], S[1], S[2]);
                          break;
                        default:
                          R.apply(s, S);
                      }
                    })(C);
                  } finally {
                    y(O), m = !1;
                  }
                }
              }
            }
            function x(O) {
              O.source === o && typeof O.data == "string" && O.data.indexOf(f) === 0 && _(+O.data.slice(f.length));
            }
          })(typeof self > "u" ? a === void 0 ? this : a : self);
        }).call(this, typeof xr < "u" ? xr : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }(Xa)), Xa.exports;
}
var f2 = c2();
const HO = /* @__PURE__ */ nn(f2);
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
function Qe() {
  if ($h) return ts;
  $h = 1;
  var e = aa(), t = Function.prototype.call;
  return ts = e ? t.bind(t) : function() {
    return t.apply(t, arguments);
  }, ts;
}
var rs = {}, Wh;
function l2() {
  if (Wh) return rs;
  Wh = 1;
  var e = {}.propertyIsEnumerable, t = Object.getOwnPropertyDescriptor, r = t && !e.call({ 1: 2 }, 1);
  return rs.f = r ? function(i) {
    var a = t(this, i);
    return !!a && a.enumerable;
  } : e, rs;
}
var ns, Gh;
function Mf() {
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
var fs, Jh;
function $e() {
  if (Jh) return fs;
  Jh = 1;
  var e = typeof document == "object" && document.all;
  return fs = typeof e > "u" && e !== void 0 ? function(t) {
    return typeof t == "function" || t === e;
  } : function(t) {
    return typeof t == "function";
  }, fs;
}
var ls, Qh;
function Mt() {
  if (Qh) return ls;
  Qh = 1;
  var e = $e();
  return ls = function(t) {
    return typeof t == "object" ? t !== null : e(t);
  }, ls;
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
function Df() {
  if (nd) return ms;
  nd = 1;
  var e = ze(), t = Vn(), r = e.process, n = e.Deno, i = r && r.versions || n && n.version, a = i && i.v8, o, s;
  return a && (o = a.split("."), s = o[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !s && t && (o = t.match(/Edge\/(\d+)/), (!o || o[1] >= 74) && (o = t.match(/Chrome\/(\d+)/), o && (s = +o[1]))), ms = s, ms;
}
var gs, id;
function Sy() {
  if (id) return gs;
  id = 1;
  var e = Df(), t = qe(), r = ze(), n = r.String;
  return gs = !!Object.getOwnPropertySymbols && !t(function() {
    var i = Symbol("symbol detection");
    return !n(i) || !(Object(i) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && e && e < 41;
  }), gs;
}
var vs, ad;
function Oy() {
  if (ad) return vs;
  ad = 1;
  var e = Sy();
  return vs = e && !Symbol.sham && typeof Symbol.iterator == "symbol", vs;
}
var ys, sd;
function Ty() {
  if (sd) return ys;
  sd = 1;
  var e = Dr(), t = $e(), r = sa(), n = Oy(), i = Object;
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
var xs, fd;
function h2() {
  if (fd) return xs;
  fd = 1;
  var e = Qe(), t = $e(), r = Mt(), n = TypeError;
  return xs = function(i, a) {
    var o, s;
    if (a === "string" && t(o = i.toString) && !r(s = e(o, i)) || t(o = i.valueOf) && !r(s = e(o, i)) || a !== "string" && t(o = i.toString) && !r(s = e(o, i))) return s;
    throw new n("Can't convert object to primitive value");
  }, xs;
}
var Es = { exports: {} }, Ss, ld;
function Ht() {
  return ld || (ld = 1, Ss = !1), Ss;
}
var Os, hd;
function Ff() {
  if (hd) return Os;
  hd = 1;
  var e = ze(), t = Object.defineProperty;
  return Os = function(r, n) {
    try {
      t(e, r, { value: n, configurable: !0, writable: !0 });
    } catch {
      e[r] = n;
    }
    return n;
  }, Os;
}
var dd;
function Lf() {
  if (dd) return Es.exports;
  dd = 1;
  var e = Ht(), t = ze(), r = Ff(), n = "__core-js_shared__", i = Es.exports = t[n] || r(n, {});
  return (i.versions || (i.versions = [])).push({
    version: "3.40.0",
    mode: e ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  }), Es.exports;
}
var Ts, pd;
function Bf() {
  if (pd) return Ts;
  pd = 1;
  var e = Lf();
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
function Xe() {
  if (yd) return Is;
  yd = 1;
  var e = ze(), t = Bf(), r = Dt(), n = Cy(), i = Sy(), a = Oy(), o = e.Symbol, s = t("wks"), u = a ? o.for || o : o && o.withoutSetter || n;
  return Is = function(c) {
    return r(s, c) || (s[c] = i && r(o, c) ? o[c] : u("Symbol." + c)), s[c];
  }, Is;
}
var ks, bd;
function d2() {
  if (bd) return ks;
  bd = 1;
  var e = Qe(), t = Mt(), r = Ty(), n = sn(), i = h2(), a = Xe(), o = TypeError, s = a("toPrimitive");
  return ks = function(u, c) {
    if (!t(u) || r(u)) return u;
    var l = n(u, s), f;
    if (l) {
      if (c === void 0 && (c = "default"), f = e(l, u, c), !t(f) || r(f)) return f;
      throw new o("Can't convert object to primitive value");
    }
    return c === void 0 && (c = "number"), i(u, c);
  }, ks;
}
var Ns, _d;
function Ay() {
  if (_d) return Ns;
  _d = 1;
  var e = d2(), t = Ty();
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
function fa() {
  if (Ed) return Za;
  Ed = 1;
  var e = Nt(), t = Qe(), r = l2(), n = Mf(), i = Gn(), a = Ay(), o = Dt(), s = Ry(), u = Object.getOwnPropertyDescriptor;
  return Za.f = e ? u : function(l, f) {
    if (l = i(l), f = a(f), s) try {
      return u(l, f);
    } catch {
    }
    if (o(l, f)) return n(!t(r.f, l, f), l[f]);
  }, Za;
}
var Ds = {}, Fs, Sd;
function Iy() {
  if (Sd) return Fs;
  Sd = 1;
  var e = Nt(), t = qe();
  return Fs = e && t(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  }), Fs;
}
var Ls, Od;
function ot() {
  if (Od) return Ls;
  Od = 1;
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
  var e = Nt(), t = Ry(), r = Iy(), n = ot(), i = Ay(), a = TypeError, o = Object.defineProperty, s = Object.getOwnPropertyDescriptor, u = "enumerable", c = "configurable", l = "writable";
  return Ds.f = e ? r ? function(d, h, m) {
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
  }, Ds;
}
var Bs, Cd;
function Hn() {
  if (Cd) return Bs;
  Cd = 1;
  var e = Nt(), t = vr(), r = Mf();
  return Bs = e ? function(n, i, a) {
    return t.f(n, i, r(1, a));
  } : function(n, i, a) {
    return n[i] = a, n;
  }, Bs;
}
var js = { exports: {} }, zs, Ad;
function la() {
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
function jf() {
  if (Rd) return qs;
  Rd = 1;
  var e = Ue(), t = $e(), r = Lf(), n = e(Function.toString);
  return t(r.inspectSource) || (r.inspectSource = function(i) {
    return n(i);
  }), qs = r.inspectSource, qs;
}
var Us, Id;
function p2() {
  if (Id) return Us;
  Id = 1;
  var e = ze(), t = $e(), r = e.WeakMap;
  return Us = t(r) && /native code/.test(String(r)), Us;
}
var $s, kd;
function zf() {
  if (kd) return $s;
  kd = 1;
  var e = Bf(), t = Cy(), r = e("keys");
  return $s = function(n) {
    return r[n] || (r[n] = t(n));
  }, $s;
}
var Ws, Nd;
function qf() {
  return Nd || (Nd = 1, Ws = {}), Ws;
}
var Gs, Pd;
function ha() {
  if (Pd) return Gs;
  Pd = 1;
  var e = p2(), t = ze(), r = Mt(), n = Hn(), i = Dt(), a = Lf(), o = zf(), s = qf(), u = "Object already initialized", c = t.TypeError, l = t.WeakMap, f, d, h, m = function(_) {
    return h(_) ? d(_) : f(_, {});
  }, p = function(_) {
    return function(x) {
      var O;
      if (!r(x) || (O = d(x)).type !== _)
        throw new c("Incompatible receiver, " + _ + " required");
      return O;
    };
  };
  if (e || a.state) {
    var b = a.state || (a.state = new l());
    b.get = b.get, b.has = b.has, b.set = b.set, f = function(_, x) {
      if (b.has(_)) throw new c(u);
      return x.facade = _, b.set(_, x), x;
    }, d = function(_) {
      return b.get(_) || {};
    }, h = function(_) {
      return b.has(_);
    };
  } else {
    var y = o("state");
    s[y] = !0, f = function(_, x) {
      if (i(_, y)) throw new c(u);
      return x.facade = _, n(_, y, x), x;
    }, d = function(_) {
      return i(_, y) ? _[y] : {};
    }, h = function(_) {
      return i(_, y);
    };
  }
  return Gs = {
    set: f,
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
  var e = Ue(), t = qe(), r = $e(), n = Dt(), i = Nt(), a = la().CONFIGURABLE, o = jf(), s = ha(), u = s.enforce, c = s.get, l = String, f = Object.defineProperty, d = e("".slice), h = e("".replace), m = e([].join), p = i && !t(function() {
    return f(function() {
    }, "length", { value: 8 }).length !== 8;
  }), b = String(String).split("String"), y = js.exports = function(_, x, O) {
    d(l(x), 0, 7) === "Symbol(" && (x = "[" + h(l(x), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), O && O.getter && (x = "get " + x), O && O.setter && (x = "set " + x), (!n(_, "name") || a && _.name !== x) && (i ? f(_, "name", { value: x, configurable: !0 }) : _.name = x), p && O && n(O, "arity") && _.length !== O.arity && f(_, "length", { value: O.arity });
    try {
      O && n(O, "constructor") && O.constructor ? i && f(_, "prototype", { writable: !1 }) : _.prototype && (_.prototype = void 0);
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
  var e = $e(), t = vr(), r = ky(), n = Ff();
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
function m2() {
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
  var e = m2();
  return Ys = function(t) {
    var r = +t;
    return r !== r || r === 0 ? 0 : e(r);
  }, Ys;
}
var Xs, Bd;
function g2() {
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
function Uf() {
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
  var e = Gn(), t = g2(), r = Uf(), n = function(i) {
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
  var e = Ue(), t = Dt(), r = Gn(), n = Ny().indexOf, i = qf(), a = e([].push);
  return eo = function(o, s) {
    var u = r(o), c = 0, l = [], f;
    for (f in u) !t(i, f) && t(u, f) && a(l, f);
    for (; s.length > c; ) t(u, f = s[c++]) && (~n(l, f) || a(l, f));
    return l;
  }, eo;
}
var to, $d;
function $f() {
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
function v2() {
  if (Wd) return Hs;
  Wd = 1;
  var e = Py(), t = $f(), r = t.concat("length", "prototype");
  return Hs.f = Object.getOwnPropertyNames || function(i) {
    return e(i, r);
  }, Hs;
}
var ro = {}, Gd;
function y2() {
  return Gd || (Gd = 1, ro.f = Object.getOwnPropertySymbols), ro;
}
var no, Vd;
function b2() {
  if (Vd) return no;
  Vd = 1;
  var e = Dr(), t = Ue(), r = v2(), n = y2(), i = ot(), a = t([].concat);
  return no = e("Reflect", "ownKeys") || function(s) {
    var u = r.f(i(s)), c = n.f;
    return c ? a(u, c(s)) : u;
  }, no;
}
var io, Hd;
function _2() {
  if (Hd) return io;
  Hd = 1;
  var e = Dt(), t = b2(), r = fa(), n = vr();
  return io = function(i, a, o) {
    for (var s = t(a), u = n.f, c = r.f, l = 0; l < s.length; l++) {
      var f = s[l];
      !e(i, f) && !(o && e(o, f)) && u(i, f, c(a, f));
    }
  }, io;
}
var ao, Kd;
function My() {
  if (Kd) return ao;
  Kd = 1;
  var e = qe(), t = $e(), r = /#|\.prototype\./, n = function(u, c) {
    var l = a[i(u)];
    return l === s ? !0 : l === o ? !1 : t(c) ? e(c) : !!c;
  }, i = n.normalize = function(u) {
    return String(u).replace(r, ".").toLowerCase();
  }, a = n.data = {}, o = n.NATIVE = "N", s = n.POLYFILL = "P";
  return ao = n, ao;
}
var so, Yd;
function ut() {
  if (Yd) return so;
  Yd = 1;
  var e = ze(), t = fa().f, r = Hn(), n = Fr(), i = Ff(), a = _2(), o = My();
  return so = function(s, u) {
    var c = s.target, l = s.global, f = s.stat, d, h, m, p, b, y;
    if (l ? h = e : f ? h = e[c] || i(c, {}) : h = e[c] && e[c].prototype, h) for (m in u) {
      if (b = u[m], s.dontCallGetSet ? (y = t(h, m), p = y && y.value) : p = h[m], d = o(l ? m : c + (f ? "." : "#") + m, s.forced), !d && p !== void 0) {
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
function w2() {
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
var fo, Qd;
function x2() {
  if (Qd) return fo;
  Qd = 1;
  var e = Mt();
  return fo = function(t) {
    return e(t) || t === null;
  }, fo;
}
var lo, ep;
function E2() {
  if (ep) return lo;
  ep = 1;
  var e = x2(), t = String, r = TypeError;
  return lo = function(n) {
    if (e(n)) return n;
    throw new r("Can't set " + t(n) + " as a prototype");
  }, lo;
}
var ho, tp;
function Fy() {
  if (tp) return ho;
  tp = 1;
  var e = w2(), t = Mt(), r = Pt(), n = E2();
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
  var e = vr().f, t = Dt(), r = Xe(), n = r("toStringTag");
  return po = function(i, a, o) {
    i && !o && (i = i.prototype), i && !t(i, n) && e(i, n, { configurable: !0, value: a });
  }, po;
}
var mo, np;
function S2() {
  if (np) return mo;
  np = 1;
  var e = ky(), t = vr();
  return mo = function(r, n, i) {
    return i.get && e(i.get, n, { getter: !0 }), i.set && e(i.set, n, { setter: !0 }), t.f(r, n, i);
  }, mo;
}
var go, ip;
function O2() {
  if (ip) return go;
  ip = 1;
  var e = Dr(), t = S2(), r = Xe(), n = Nt(), i = r("species");
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
function T2() {
  if (ap) return vo;
  ap = 1;
  var e = sa(), t = TypeError;
  return vo = function(r, n) {
    if (e(n, r)) return r;
    throw new t("Incorrect invocation");
  }, vo;
}
var yo, sp;
function C2() {
  if (sp) return yo;
  sp = 1;
  var e = Xe(), t = e("toStringTag"), r = {};
  return r[t] = "z", yo = String(r) === "[object z]", yo;
}
var bo, op;
function Wf() {
  if (op) return bo;
  op = 1;
  var e = C2(), t = $e(), r = Pr(), n = Xe(), i = n("toStringTag"), a = Object, o = r(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments", s = function(u, c) {
    try {
      return u[c];
    } catch {
    }
  };
  return bo = e ? r : function(u) {
    var c, l, f;
    return u === void 0 ? "Undefined" : u === null ? "Null" : typeof (l = s(c = a(u), i)) == "string" ? l : o ? r(c) : (f = r(c)) === "Object" && t(c.callee) ? "Arguments" : f;
  }, bo;
}
var _o, up;
function A2() {
  if (up) return _o;
  up = 1;
  var e = Ue(), t = qe(), r = $e(), n = Wf(), i = Dr(), a = jf(), o = function() {
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
  return d.sham = !0, _o = !s || t(function() {
    var h;
    return f(f.call) || !f(Object) || !f(function() {
      h = !0;
    }) || h;
  }) ? d : f, _o;
}
var wo, cp;
function R2() {
  if (cp) return wo;
  cp = 1;
  var e = A2(), t = oa(), r = TypeError;
  return wo = function(n) {
    if (e(n)) return n;
    throw new r(t(n) + " is not a constructor");
  }, wo;
}
var xo, fp;
function Ly() {
  if (fp) return xo;
  fp = 1;
  var e = ot(), t = R2(), r = Mr(), n = Xe(), i = n("species");
  return xo = function(a, o) {
    var s = e(a).constructor, u;
    return s === void 0 || r(u = e(s)[i]) ? o : t(u);
  }, xo;
}
var Eo, lp;
function By() {
  if (lp) return Eo;
  lp = 1;
  var e = aa(), t = Function.prototype, r = t.apply, n = t.call;
  return Eo = typeof Reflect == "object" && Reflect.apply || (e ? n.bind(r) : function() {
    return n.apply(r, arguments);
  }), Eo;
}
var So, hp;
function ga() {
  if (hp) return So;
  hp = 1;
  var e = Pr(), t = Ue();
  return So = function(r) {
    if (e(r) === "Function") return t(r);
  }, So;
}
var Oo, dp;
function Gf() {
  if (dp) return Oo;
  dp = 1;
  var e = ga(), t = ir(), r = aa(), n = e(e.bind);
  return Oo = function(i, a) {
    return t(i), a === void 0 ? i : r ? n(i, a) : function() {
      return i.apply(a, arguments);
    };
  }, Oo;
}
var To, pp;
function jy() {
  if (pp) return To;
  pp = 1;
  var e = Dr();
  return To = e("document", "documentElement"), To;
}
var Co, mp;
function I2() {
  if (mp) return Co;
  mp = 1;
  var e = Ue();
  return Co = e([].slice), Co;
}
var Ao, gp;
function k2() {
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
  var e = ze(), t = By(), r = Gf(), n = $e(), i = Dt(), a = qe(), o = jy(), s = I2(), u = ca(), c = k2(), l = zy(), f = pa(), d = e.setImmediate, h = e.clearImmediate, m = e.process, p = e.Dispatch, b = e.Function, y = e.MessageChannel, _ = e.String, x = 0, O = {}, C = "onreadystatechange", F, R, S, w;
  a(function() {
    F = e.location;
  });
  var N = function(v) {
    if (i(O, v)) {
      var j = O[v];
      delete O[v], j();
    }
  }, z = function(v) {
    return function() {
      N(v);
    };
  }, E = function(v) {
    N(v.data);
  }, D = function(v) {
    e.postMessage(_(v), F.protocol + "//" + F.host);
  };
  return (!d || !h) && (d = function(j) {
    c(arguments.length, 1);
    var te = n(j) ? j : b(j), L = s(arguments, 1);
    return O[++x] = function() {
      t(te, void 0, L);
    }, R(x), x;
  }, h = function(j) {
    delete O[j];
  }, f ? R = function(v) {
    m.nextTick(z(v));
  } : p && p.now ? R = function(v) {
    p.now(z(v));
  } : y && !l ? (S = new y(), w = S.port2, S.port1.onmessage = E, R = r(w.postMessage, w)) : e.addEventListener && n(e.postMessage) && !e.importScripts && F && F.protocol !== "file:" && !a(D) ? (R = D, e.addEventListener("message", E, !1)) : C in u("script") ? R = function(v) {
    o.appendChild(u("script"))[C] = function() {
      o.removeChild(this), N(v);
    };
  } : R = function(v) {
    setTimeout(z(v), 0);
  }), Io = {
    set: d,
    clear: h
  }, Io;
}
var ko, bp;
function N2() {
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
function P2() {
  if (wp) return Po;
  wp = 1;
  var e = Vn();
  return Po = /ipad|iphone|ipod/i.test(e) && typeof Pebble < "u", Po;
}
var Mo, xp;
function M2() {
  if (xp) return Mo;
  xp = 1;
  var e = Vn();
  return Mo = /web0s(?!.*chrome)/i.test(e), Mo;
}
var Do, Ep;
function D2() {
  if (Ep) return Do;
  Ep = 1;
  var e = ze(), t = N2(), r = Gf(), n = qy().set, i = Uy(), a = zy(), o = P2(), s = M2(), u = pa(), c = e.MutationObserver || e.WebKitMutationObserver, l = e.document, f = e.process, d = e.Promise, h = t("queueMicrotask"), m, p, b, y, _;
  if (!h) {
    var x = new i(), O = function() {
      var C, F;
      for (u && (C = f.domain) && C.exit(); F = x.get(); ) try {
        F();
      } catch (R) {
        throw x.head && m(), R;
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
      x.head || m(), x.add(C);
    };
  }
  return Do = h, Do;
}
var Fo, Sp;
function F2() {
  return Sp || (Sp = 1, Fo = function(e, t) {
    try {
      arguments.length === 1 ? console.error(e) : console.error(e, t);
    } catch {
    }
  }), Fo;
}
var Lo, Op;
function Vf() {
  return Op || (Op = 1, Lo = function(e) {
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
  var e = ze(), t = Kn(), r = $e(), n = My(), i = jf(), a = Xe(), o = Dy(), s = Ht(), u = Df(), c = t && t.prototype, l = a("species"), f = !1, d = r(e.PromiseRejectionEvent), h = n("Promise", function() {
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
      if (_[l] = y, f = b.then(function() {
      }) instanceof y, !f) return !0;
    }
    return !p && (o === "BROWSER" || o === "DENO") && !d;
  });
  return jo = {
    CONSTRUCTOR: h,
    REJECTION_EVENT: d,
    SUBCLASSING: f
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
function L2() {
  if (Rp) return Bh;
  Rp = 1;
  var e = ut(), t = Ht(), r = pa(), n = ze(), i = Qe(), a = Fr(), o = Fy(), s = ma(), u = O2(), c = ir(), l = $e(), f = Mt(), d = T2(), h = Ly(), m = qy().set, p = D2(), b = F2(), y = Vf(), _ = Uy(), x = ha(), O = Kn(), C = Yn(), F = Xn(), R = "Promise", S = C.CONSTRUCTOR, w = C.REJECTION_EVENT, N = C.SUBCLASSING, z = x.getterFor(R), E = x.set, D = O && O.prototype, v = O, j = D, te = n.TypeError, L = n.document, Y = n.process, U = F.f, J = U, M = !!(L && L.createEvent && n.dispatchEvent), P = "unhandledrejection", K = "rejectionhandled", ee = 0, H = 1, me = 2, Ee = 1, oe = 2, le, de, he, be, xe = function(W) {
    var re;
    return f(W) && l(re = W.then) ? re : !1;
  }, g = function(W, re) {
    var Q = re.value, ae = re.state === H, pe = ae ? W.ok : W.fail, _e = W.resolve, Be = W.reject, je = W.domain, ke, Ve, Re;
    try {
      pe ? (ae || (re.rejection === oe && B(re), re.rejection = Ee), pe === !0 ? ke = Q : (je && je.enter(), ke = pe(Q), je && (je.exit(), Re = !0)), ke === W.promise ? Be(new te("Promise-chain cycle")) : (Ve = xe(ke)) ? i(Ve, ke, _e, Be) : _e(ke)) : Be(Q);
    } catch (et) {
      je && !Re && je.exit(), Be(et);
    }
  }, X = function(W, re) {
    W.notified || (W.notified = !0, p(function() {
      for (var Q = W.reactions, ae; ae = Q.get(); )
        g(ae, W);
      W.notified = !1, re && !W.rejection && A(W);
    }));
  }, V = function(W, re, Q) {
    var ae, pe;
    M ? (ae = L.createEvent("Event"), ae.promise = re, ae.reason = Q, ae.initEvent(W, !1, !0), n.dispatchEvent(ae)) : ae = { promise: re, reason: Q }, !w && (pe = n["on" + W]) ? pe(ae) : W === P && b("Unhandled promise rejection", Q);
  }, A = function(W) {
    i(m, n, function() {
      var re = W.facade, Q = W.value, ae = T(W), pe;
      if (ae && (pe = y(function() {
        r ? Y.emit("unhandledRejection", Q, re) : V(P, re, Q);
      }), W.rejection = r || T(W) ? oe : Ee, pe.error))
        throw pe.value;
    });
  }, T = function(W) {
    return W.rejection !== Ee && !W.parent;
  }, B = function(W) {
    i(m, n, function() {
      var re = W.facade;
      r ? Y.emit("rejectionHandled", re) : V(K, re, W.value);
    });
  }, ne = function(W, re, Q) {
    return function(ae) {
      W(re, ae, Q);
    };
  }, ie = function(W, re, Q) {
    W.done || (W.done = !0, Q && (W = Q), W.value = re, W.state = me, X(W, !0));
  }, G = function(W, re, Q) {
    if (!W.done) {
      W.done = !0, Q && (W = Q);
      try {
        if (W.facade === re) throw new te("Promise can't be resolved itself");
        var ae = xe(re);
        ae ? p(function() {
          var pe = { done: !1 };
          try {
            i(
              ae,
              re,
              ne(G, pe, W),
              ne(ie, pe, W)
            );
          } catch (_e) {
            ie(pe, _e, W);
          }
        }) : (W.value = re, W.state = H, X(W, !1));
      } catch (pe) {
        ie({ done: !1 }, pe, W);
      }
    }
  };
  if (S && (v = function(re) {
    d(this, j), c(re), i(le, this);
    var Q = z(this);
    try {
      re(ne(G, Q), ne(ie, Q));
    } catch (ae) {
      ie(Q, ae);
    }
  }, j = v.prototype, le = function(re) {
    E(this, {
      type: R,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new _(),
      rejection: !1,
      state: ee,
      value: null
    });
  }, le.prototype = a(j, "then", function(re, Q) {
    var ae = z(this), pe = U(h(this, v));
    return ae.parent = !0, pe.ok = l(re) ? re : !0, pe.fail = l(Q) && Q, pe.domain = r ? Y.domain : void 0, ae.state === ee ? ae.reactions.add(pe) : p(function() {
      g(pe, ae);
    }), pe.promise;
  }), de = function() {
    var W = new le(), re = z(W);
    this.promise = W, this.resolve = ne(G, re), this.reject = ne(ie, re);
  }, F.f = U = function(W) {
    return W === v || W === he ? new de(W) : J(W);
  }, !t && l(O) && D !== Object.prototype)) {
    be = D.then, N || a(D, "then", function(re, Q) {
      var ae = this;
      return new v(function(pe, _e) {
        i(be, ae, pe, _e);
      }).then(re, Q);
    }, { unsafe: !0 });
    try {
      delete D.constructor;
    } catch {
    }
    o && o(D, j);
  }
  return e({ global: !0, constructor: !0, wrap: !0, forced: S }, {
    Promise: v
  }), s(v, R, !1, !0), u(R), Bh;
}
var Ip = {}, qo, kp;
function Zn() {
  return kp || (kp = 1, qo = {}), qo;
}
var Uo, Np;
function B2() {
  if (Np) return Uo;
  Np = 1;
  var e = Xe(), t = Zn(), r = e("iterator"), n = Array.prototype;
  return Uo = function(i) {
    return i !== void 0 && (t.Array === i || n[r] === i);
  }, Uo;
}
var $o, Pp;
function $y() {
  if (Pp) return $o;
  Pp = 1;
  var e = Wf(), t = sn(), r = Mr(), n = Zn(), i = Xe(), a = i("iterator");
  return $o = function(o) {
    if (!r(o)) return t(o, a) || t(o, "@@iterator") || n[e(o)];
  }, $o;
}
var Wo, Mp;
function j2() {
  if (Mp) return Wo;
  Mp = 1;
  var e = Qe(), t = ir(), r = ot(), n = oa(), i = $y(), a = TypeError;
  return Wo = function(o, s) {
    var u = arguments.length < 2 ? i(o) : s;
    if (t(u)) return r(e(u, o));
    throw new a(n(o) + " is not iterable");
  }, Wo;
}
var Go, Dp;
function z2() {
  if (Dp) return Go;
  Dp = 1;
  var e = Qe(), t = ot(), r = sn();
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
  var e = Gf(), t = Qe(), r = ot(), n = oa(), i = B2(), a = Uf(), o = sa(), s = j2(), u = $y(), c = z2(), l = TypeError, f = function(h, m) {
    this.stopped = h, this.result = m;
  }, d = f.prototype;
  return Vo = function(h, m, p) {
    var b = p && p.that, y = !!(p && p.AS_ENTRIES), _ = !!(p && p.IS_RECORD), x = !!(p && p.IS_ITERATOR), O = !!(p && p.INTERRUPTED), C = e(m, b), F, R, S, w, N, z, E, D = function(j) {
      return F && c(F, "normal", j), new f(!0, j);
    }, v = function(j) {
      return y ? (r(j), O ? C(j[0], j[1], D) : C(j[0], j[1])) : O ? C(j, D) : C(j);
    };
    if (_)
      F = h.iterator;
    else if (x)
      F = h;
    else {
      if (R = u(h), !R) throw new l(n(h) + " is not iterable");
      if (i(R)) {
        for (S = 0, w = a(h); w > S; S++)
          if (N = v(h[S]), N && o(d, N)) return N;
        return new f(!1);
      }
      F = s(h, R);
    }
    for (z = _ ? h.next : F.next; !(E = t(z, F)).done; ) {
      try {
        N = v(E.value);
      } catch (j) {
        c(F, "throw", j);
      }
      if (typeof N == "object" && N && o(d, N)) return N;
    }
    return new f(!1);
  }, Vo;
}
var Ho, Lp;
function q2() {
  if (Lp) return Ho;
  Lp = 1;
  var e = Xe(), t = e("iterator"), r = !1;
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
  var e = Kn(), t = q2(), r = Yn().CONSTRUCTOR;
  return Ko = r || !t(function(n) {
    e.all(n).then(void 0, function() {
    });
  }), Ko;
}
var jp;
function U2() {
  if (jp) return Ip;
  jp = 1;
  var e = ut(), t = Qe(), r = ir(), n = Xn(), i = Vf(), a = Wy(), o = Gy();
  return e({ target: "Promise", stat: !0, forced: o }, {
    all: function(u) {
      var c = this, l = n.f(c), f = l.resolve, d = l.reject, h = i(function() {
        var m = r(c.resolve), p = [], b = 0, y = 1;
        a(u, function(_) {
          var x = b++, O = !1;
          y++, t(m, c, _).then(function(C) {
            O || (O = !0, p[x] = C, --y || f(p));
          }, d);
        }), --y || f(p);
      });
      return h.error && d(h.value), l.promise;
    }
  }), Ip;
}
var zp = {}, qp;
function $2() {
  if (qp) return zp;
  qp = 1;
  var e = ut(), t = Ht(), r = Yn().CONSTRUCTOR, n = Kn(), i = Dr(), a = $e(), o = Fr(), s = n && n.prototype;
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
function W2() {
  if ($p) return Up;
  $p = 1;
  var e = ut(), t = Qe(), r = ir(), n = Xn(), i = Vf(), a = Wy(), o = Gy();
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
  }), Up;
}
var Wp = {}, Gp;
function G2() {
  if (Gp) return Wp;
  Gp = 1;
  var e = ut(), t = Xn(), r = Yn().CONSTRUCTOR;
  return e({ target: "Promise", stat: !0, forced: r }, {
    reject: function(i) {
      var a = t.f(this), o = a.reject;
      return o(i), a.promise;
    }
  }), Wp;
}
var Vp = {}, Yo, Hp;
function V2() {
  if (Hp) return Yo;
  Hp = 1;
  var e = ot(), t = Mt(), r = Xn();
  return Yo = function(n, i) {
    if (e(n), t(i) && i.constructor === n) return i;
    var a = r.f(n), o = a.resolve;
    return o(i), a.promise;
  }, Yo;
}
var Kp;
function H2() {
  if (Kp) return Vp;
  Kp = 1;
  var e = ut(), t = Dr(), r = Ht(), n = Kn(), i = Yn().CONSTRUCTOR, a = V2(), o = t("Promise"), s = r && !i;
  return e({ target: "Promise", stat: !0, forced: r || i }, {
    resolve: function(c) {
      return a(s && this === o ? n : this, c);
    }
  }), Vp;
}
var Yp;
function K2() {
  return Yp || (Yp = 1, L2(), U2(), $2(), W2(), G2(), H2()), Lh;
}
K2();
function Xp(e, t, r, n, i, a, o) {
  try {
    var s = e[a](o), u = s.value;
  } catch (c) {
    return void r(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, i);
}
function KO(e) {
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
  var e = Wf(), t = String;
  return Xo = function(r) {
    if (e(r) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return t(r);
  }, Xo;
}
var Zo, em;
function Vy() {
  if (em) return Zo;
  em = 1;
  var e = ot();
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
function Y2() {
  if (rm) return eu;
  rm = 1;
  var e = Py(), t = $f();
  return eu = Object.keys || function(n) {
    return e(n, t);
  }, eu;
}
var nm;
function X2() {
  if (nm) return Qo;
  nm = 1;
  var e = Nt(), t = Iy(), r = vr(), n = ot(), i = Gn(), a = Y2();
  return Qo.f = e && !t ? Object.defineProperties : function(s, u) {
    n(s);
    for (var c = i(u), l = a(u), f = l.length, d = 0, h; f > d; ) r.f(s, h = l[d++], c[h]);
    return s;
  }, Qo;
}
var tu, im;
function va() {
  if (im) return tu;
  im = 1;
  var e = ot(), t = X2(), r = $f(), n = qf(), i = jy(), a = ca(), o = zf(), s = ">", u = "<", c = "prototype", l = "script", f = o("IE_PROTO"), d = function() {
  }, h = function(_) {
    return u + l + s + _ + u + "/" + l + s;
  }, m = function(_) {
    _.write(h("")), _.close();
    var x = _.parentWindow.Object;
    return _ = null, x;
  }, p = function() {
    var _ = a("iframe"), x = "java" + l + ":", O;
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
  return n[f] = !0, tu = Object.create || function(x, O) {
    var C;
    return x !== null ? (d[c] = e(x), C = new d(), d[c] = null, C[f] = x) : C = y(), O === void 0 ? C : t.f(C, O);
  }, tu;
}
var ru, am;
function Z2() {
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
function J2() {
  if (sm) return nu;
  sm = 1;
  var e = qe(), t = ze(), r = t.RegExp;
  return nu = e(function() {
    var n = r("(?<a>b)", "g");
    return n.exec("b").groups.a !== "b" || "b".replace(n, "$<a>c") !== "bc";
  }), nu;
}
var iu, om;
function Hf() {
  if (om) return iu;
  om = 1;
  var e = Qe(), t = Ue(), r = Kt(), n = Vy(), i = Hy(), a = Bf(), o = va(), s = ha().get, u = Z2(), c = J2(), l = a("native-string-replace", String.prototype.replace), f = RegExp.prototype.exec, d = f, h = t("".charAt), m = t("".indexOf), p = t("".replace), b = t("".slice), y = function() {
    var C = /a/, F = /b*/g;
    return e(f, C, "a"), e(f, F, "a"), C.lastIndex !== 0 || F.lastIndex !== 0;
  }(), _ = i.BROKEN_CARET, x = /()??/.exec("")[1] !== void 0, O = y || x || _ || u || c;
  return O && (d = function(F) {
    var R = this, S = s(R), w = r(F), N = S.raw, z, E, D, v, j, te, L;
    if (N)
      return N.lastIndex = R.lastIndex, z = e(d, N, w), R.lastIndex = N.lastIndex, z;
    var Y = S.groups, U = _ && R.sticky, J = e(n, R), M = R.source, P = 0, K = w;
    if (U && (J = p(J, "y", ""), m(J, "g") === -1 && (J += "g"), K = b(w, R.lastIndex), R.lastIndex > 0 && (!R.multiline || R.multiline && h(w, R.lastIndex - 1) !== `
`) && (M = "(?: " + M + ")", K = " " + K, P++), E = new RegExp("^(?:" + M + ")", J)), x && (E = new RegExp("^" + M + "$(?!\\s)", J)), y && (D = R.lastIndex), v = e(f, U ? E : R, K), U ? v ? (v.input = b(v.input, P), v[0] = b(v[0], P), v.index = R.lastIndex, R.lastIndex += v[0].length) : R.lastIndex = 0 : y && v && (R.lastIndex = R.global ? v.index + v[0].length : D), x && v && v.length > 1 && e(l, v[0], E, function() {
      for (j = 1; j < arguments.length - 2; j++)
        arguments[j] === void 0 && (v[j] = void 0);
    }), v && Y)
      for (v.groups = te = o(null), j = 0; j < Y.length; j++)
        L = Y[j], te[L[0]] = v[L[1]];
    return v;
  }), iu = d, iu;
}
var um;
function Q2() {
  if (um) return Jp;
  um = 1;
  var e = ut(), t = Hf();
  return e({ target: "RegExp", proto: !0, forced: /./.exec !== t }, {
    exec: t
  }), Jp;
}
var au, cm;
function Kf() {
  if (cm) return au;
  cm = 1, Q2();
  var e = Qe(), t = Fr(), r = Hf(), n = qe(), i = Xe(), a = Hn(), o = i("species"), s = RegExp.prototype;
  return au = function(u, c, l, f) {
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
      var p = /./[d], b = c(d, ""[u], function(y, _, x, O, C) {
        var F = _.exec;
        return F === r || F === s.exec ? h && !C ? { done: !0, value: e(p, _, x, O) } : { done: !0, value: e(y, x, _, O) } : { done: !1 };
      });
      t(String.prototype, u, b[0]), t(s, d, b[1]);
    }
    f && a(s[d], "sham", !0);
  }, au;
}
var su, fm;
function eS() {
  if (fm) return su;
  fm = 1;
  var e = Ue(), t = da(), r = Kt(), n = Pt(), i = e("".charAt), a = e("".charCodeAt), o = e("".slice), s = function(u) {
    return function(c, l) {
      var f = r(n(c)), d = t(l), h = f.length, m, p;
      return d < 0 || d >= h ? u ? "" : void 0 : (m = a(f, d), m < 55296 || m > 56319 || d + 1 === h || (p = a(f, d + 1)) < 56320 || p > 57343 ? u ? i(f, d) : m : u ? o(f, d, d + 2) : (m - 55296 << 10) + (p - 56320) + 65536);
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
var ou, lm;
function Yf() {
  if (lm) return ou;
  lm = 1;
  var e = eS().charAt;
  return ou = function(t, r, n) {
    return r + (n ? e(t, r).length : 1);
  }, ou;
}
var uu, hm;
function Xf() {
  if (hm) return uu;
  hm = 1;
  var e = Qe(), t = ot(), r = $e(), n = Pr(), i = Hf(), a = TypeError;
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
function tS() {
  if (dm) return Zp;
  dm = 1;
  var e = Qe(), t = Kf(), r = ot(), n = Mr(), i = on(), a = Kt(), o = Pt(), s = sn(), u = Yf(), c = Xf();
  return t("match", function(l, f, d) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function(m) {
        var p = o(this), b = n(m) ? void 0 : s(m, l);
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
        for (var _ = [], x = 0, O; (O = c(m, p)) !== null; ) {
          var C = a(O[0]);
          _[x] = C, C === "" && (m.lastIndex = u(p, i(m.lastIndex), y)), x++;
        }
        return x === 0 ? null : _;
      }
    ];
  }), Zp;
}
tS();
var pm = {}, cu, mm;
function rS() {
  if (mm) return cu;
  mm = 1;
  var e = Ue(), t = ua(), r = Math.floor, n = e("".charAt), i = e("".replace), a = e("".slice), o = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, s = /\$([$&'`]|\d{1,2})/g;
  return cu = function(u, c, l, f, d, h) {
    var m = l + u.length, p = f.length, b = s;
    return d !== void 0 && (d = t(d), b = o), i(h, b, function(y, _) {
      var x;
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
          x = d[a(_, 1, -1)];
          break;
        default:
          var O = +_;
          if (O === 0) return y;
          if (O > p) {
            var C = r(O / 10);
            return C === 0 ? y : C <= p ? f[C - 1] === void 0 ? n(_, 1) : f[C - 1] + n(_, 1) : y;
          }
          x = f[O - 1];
      }
      return x === void 0 ? "" : x;
    });
  }, cu;
}
var gm;
function nS() {
  if (gm) return pm;
  gm = 1;
  var e = By(), t = Qe(), r = Ue(), n = Kf(), i = qe(), a = ot(), o = $e(), s = Mr(), u = da(), c = on(), l = Kt(), f = Pt(), d = Yf(), h = sn(), m = rS(), p = Xf(), b = Xe(), y = b("replace"), _ = Math.max, x = Math.min, O = r([].concat), C = r([].push), F = r("".indexOf), R = r("".slice), S = function(E) {
    return E === void 0 ? E : String(E);
  }, w = function() {
    return "a".replace(/./, "$0") === "$0";
  }(), N = function() {
    return /./[y] ? /./[y]("a", "$0") === "" : !1;
  }(), z = !i(function() {
    var E = /./;
    return E.exec = function() {
      var D = [];
      return D.groups = { a: "7" }, D;
    }, "".replace(E, "$<a>") !== "7";
  });
  return n("replace", function(E, D, v) {
    var j = N ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function(L, Y) {
        var U = f(this), J = s(L) ? void 0 : h(L, y);
        return J ? t(J, L, U, Y) : t(D, l(U), L, Y);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(te, L) {
        var Y = a(this), U = l(te);
        if (typeof L == "string" && F(L, j) === -1 && F(L, "$<") === -1) {
          var J = v(D, Y, U, L);
          if (J.done) return J.value;
        }
        var M = o(L);
        M || (L = l(L));
        var P = Y.global, K;
        P && (K = Y.unicode, Y.lastIndex = 0);
        for (var ee = [], H; H = p(Y, U), !(H === null || (C(ee, H), !P)); ) {
          var me = l(H[0]);
          me === "" && (Y.lastIndex = d(U, c(Y.lastIndex), K));
        }
        for (var Ee = "", oe = 0, le = 0; le < ee.length; le++) {
          H = ee[le];
          for (var de = l(H[0]), he = _(x(u(H.index), U.length), 0), be = [], xe, g = 1; g < H.length; g++) C(be, S(H[g]));
          var X = H.groups;
          if (M) {
            var V = O([de], be, he, U);
            X !== void 0 && C(V, X), xe = l(e(L, void 0, V));
          } else
            xe = m(de, U, he, be, X, L);
          he >= oe && (Ee += R(U, oe, he) + xe, oe = he + de.length);
        }
        return Ee + R(U, oe);
      }
    ];
  }, !z || !w || N), pm;
}
nS();
var vm = {}, fu, ym;
function iS() {
  if (ym) return fu;
  ym = 1;
  var e = Mt(), t = Pr(), r = Xe(), n = r("match");
  return fu = function(i) {
    var a;
    return e(i) && ((a = i[n]) !== void 0 ? !!a : t(i) === "RegExp");
  }, fu;
}
var lu, bm;
function Zf() {
  if (bm) return lu;
  bm = 1;
  var e = iS(), t = TypeError;
  return lu = function(r) {
    if (e(r))
      throw new t("The method doesn't accept regular expressions");
    return r;
  }, lu;
}
var hu, _m;
function Jf() {
  if (_m) return hu;
  _m = 1;
  var e = Xe(), t = e("match");
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
function aS() {
  if (wm) return vm;
  wm = 1;
  var e = ut(), t = ga(), r = fa().f, n = on(), i = Kt(), a = Zf(), o = Pt(), s = Jf(), u = Ht(), c = t("".slice), l = Math.min, f = s("startsWith"), d = !u && !f && !!function() {
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
  }), vm;
}
aS();
var du, xm;
function sS() {
  if (xm) return du;
  xm = 1;
  var e = Xe(), t = va(), r = vr().f, n = e("unscopables"), i = Array.prototype;
  return i[n] === void 0 && r(i, n, {
    configurable: !0,
    value: t(null)
  }), du = function(a) {
    i[n][a] = !0;
  }, du;
}
var pu, Em;
function oS() {
  if (Em) return pu;
  Em = 1;
  var e = qe();
  return pu = !e(function() {
    function t() {
    }
    return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
  }), pu;
}
var mu, Sm;
function Ky() {
  if (Sm) return mu;
  Sm = 1;
  var e = Dt(), t = $e(), r = ua(), n = zf(), i = oS(), a = n("IE_PROTO"), o = Object, s = o.prototype;
  return mu = i ? o.getPrototypeOf : function(u) {
    var c = r(u);
    if (e(c, a)) return c[a];
    var l = c.constructor;
    return t(l) && c instanceof l ? l.prototype : c instanceof o ? s : null;
  }, mu;
}
var gu, Om;
function Yy() {
  if (Om) return gu;
  Om = 1;
  var e = qe(), t = $e(), r = Mt(), n = va(), i = Ky(), a = Fr(), o = Xe(), s = Ht(), u = o("iterator"), c = !1, l, f, d;
  [].keys && (d = [].keys(), "next" in d ? (f = i(i(d)), f !== Object.prototype && (l = f)) : c = !0);
  var h = !r(l) || e(function() {
    var m = {};
    return l[u].call(m) !== m;
  });
  return h ? l = {} : s && (l = n(l)), t(l[u]) || a(l, u, function() {
    return this;
  }), gu = {
    IteratorPrototype: l,
    BUGGY_SAFARI_ITERATORS: c
  }, gu;
}
var vu, Tm;
function uS() {
  if (Tm) return vu;
  Tm = 1;
  var e = Yy().IteratorPrototype, t = va(), r = Mf(), n = ma(), i = Zn(), a = function() {
    return this;
  };
  return vu = function(o, s, u, c) {
    var l = s + " Iterator";
    return o.prototype = t(e, { next: r(+!c, u) }), n(o, l, !1, !0), i[l] = a, o;
  }, vu;
}
var yu, Cm;
function cS() {
  if (Cm) return yu;
  Cm = 1;
  var e = ut(), t = Qe(), r = Ht(), n = la(), i = $e(), a = uS(), o = Ky(), s = Fy(), u = ma(), c = Hn(), l = Fr(), f = Xe(), d = Zn(), h = Yy(), m = n.PROPER, p = n.CONFIGURABLE, b = h.IteratorPrototype, y = h.BUGGY_SAFARI_ITERATORS, _ = f("iterator"), x = "keys", O = "values", C = "entries", F = function() {
    return this;
  };
  return yu = function(R, S, w, N, z, E, D) {
    a(w, S, N);
    var v = function(ee) {
      if (ee === z && U) return U;
      if (!y && ee && ee in L) return L[ee];
      switch (ee) {
        case x:
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
    }, j = S + " Iterator", te = !1, L = R.prototype, Y = L[_] || L["@@iterator"] || z && L[z], U = !y && Y || v(z), J = S === "Array" && L.entries || Y, M, P, K;
    if (J && (M = o(J.call(new R())), M !== Object.prototype && M.next && (!r && o(M) !== b && (s ? s(M, b) : i(M[_]) || l(M, _, F)), u(M, j, !0, !0), r && (d[j] = F))), m && z === O && Y && Y.name !== O && (!r && p ? c(L, "name", O) : (te = !0, U = function() {
      return t(Y, this);
    })), z)
      if (P = {
        values: v(O),
        keys: E ? U : v(x),
        entries: v(C)
      }, D) for (K in P)
        (y || te || !(K in L)) && l(L, K, P[K]);
      else e({ target: S, proto: !0, forced: y || te }, P);
    return (!r || D) && L[_] !== U && l(L, _, U, { name: z }), d[S] = U, P;
  }, yu;
}
var bu, Am;
function fS() {
  return Am || (Am = 1, bu = function(e, t) {
    return { value: e, done: t };
  }), bu;
}
var _u, Rm;
function Xy() {
  if (Rm) return _u;
  Rm = 1;
  var e = Gn(), t = sS(), r = Zn(), n = ha(), i = vr().f, a = cS(), o = fS(), s = Ht(), u = Nt(), c = "Array Iterator", l = n.set, f = n.getterFor(c);
  _u = a(Array, "Array", function(h, m) {
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
  return _u;
}
Xy();
var Im = {}, wu, km;
function lS() {
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
function hS() {
  if (Nm) return xu;
  Nm = 1;
  var e = ca(), t = e("span").classList, r = t && t.constructor && t.constructor.prototype;
  return xu = r === Object.prototype ? void 0 : r, xu;
}
var Pm;
function dS() {
  if (Pm) return Im;
  Pm = 1;
  var e = ze(), t = lS(), r = hS(), n = Xy(), i = Hn(), a = ma(), o = Xe(), s = o("iterator"), u = n.values, c = function(f, d) {
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
  return c(r, "DOMTokenList"), Im;
}
dS();
function pS(e, t) {
  if (Nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mS(e) {
  var t = pS(e, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function YO(e, t, r) {
  return (t = mS(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Mm = {}, Eu, Dm;
function gS() {
  if (Dm) return Eu;
  Dm = 1;
  var e = ir(), t = ua(), r = Ey(), n = Uf(), i = TypeError, a = "Reduce of empty array with no initial value", o = function(s) {
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
  return Eu = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: o(!1),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: o(!0)
  }, Eu;
}
var Su, Fm;
function Zy() {
  if (Fm) return Su;
  Fm = 1;
  var e = qe();
  return Su = function(t, r) {
    var n = [][t];
    return !!n && e(function() {
      n.call(null, r || function() {
        return 1;
      }, 1);
    });
  }, Su;
}
var Lm;
function vS() {
  if (Lm) return Mm;
  Lm = 1;
  var e = ut(), t = gS().left, r = Zy(), n = Df(), i = pa(), a = !i && n > 79 && n < 83, o = a || !r("reduce");
  return e({ target: "Array", proto: !0, forced: o }, {
    reduce: function(u) {
      var c = arguments.length;
      return t(this, u, c, c > 1 ? arguments[1] : void 0);
    }
  }), Mm;
}
vS();
var Bm = {}, jm;
function yS() {
  if (jm) return Bm;
  jm = 1;
  var e = ut(), t = ga(), r = fa().f, n = on(), i = Kt(), a = Zf(), o = Pt(), s = Jf(), u = Ht(), c = t("".slice), l = Math.min, f = s("endsWith"), d = !u && !f && !!function() {
    var h = r(String.prototype, "endsWith");
    return h && !h.writable;
  }();
  return e({ target: "String", proto: !0, forced: !d && !f }, {
    endsWith: function(m) {
      var p = i(o(this));
      a(m);
      var b = arguments.length > 1 ? arguments[1] : void 0, y = p.length, _ = b === void 0 ? y : l(n(b), y), x = i(m);
      return c(p, _ - x.length, _) === x;
    }
  }), Bm;
}
yS();
var zm = {}, qm;
function bS() {
  if (qm) return zm;
  qm = 1;
  var e = Qe(), t = Ue(), r = Kf(), n = ot(), i = Mr(), a = Pt(), o = Ly(), s = Yf(), u = on(), c = Kt(), l = sn(), f = Xf(), d = Hy(), h = qe(), m = d.UNSUPPORTED_Y, p = 4294967295, b = Math.min, y = t([].push), _ = t("".slice), x = !h(function() {
    var C = /(?:)/, F = C.exec;
    C.exec = function() {
      return F.apply(this, arguments);
    };
    var R = "ab".split(C);
    return R.length !== 2 || R[0] !== "a" || R[1] !== "b";
  }), O = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length;
  return r("split", function(C, F, R) {
    var S = "0".split(void 0, 0).length ? function(w, N) {
      return w === void 0 && N === 0 ? [] : e(F, this, w, N);
    } : F;
    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function(N, z) {
        var E = a(this), D = i(N) ? void 0 : l(N, C);
        return D ? e(D, N, E, z) : e(S, c(E), N, z);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(w, N) {
        var z = n(this), E = c(w);
        if (!O) {
          var D = R(S, z, E, N, S !== F);
          if (D.done) return D.value;
        }
        var v = o(z, RegExp), j = z.unicode, te = (z.ignoreCase ? "i" : "") + (z.multiline ? "m" : "") + (z.unicode ? "u" : "") + (m ? "g" : "y"), L = new v(m ? "^(?:" + z.source + ")" : z, te), Y = N === void 0 ? p : N >>> 0;
        if (Y === 0) return [];
        if (E.length === 0) return f(L, E) === null ? [E] : [];
        for (var U = 0, J = 0, M = []; J < E.length; ) {
          L.lastIndex = m ? 0 : J;
          var P = f(L, m ? _(E, J) : E), K;
          if (P === null || (K = b(u(L.lastIndex + (m ? J : 0)), E.length)) === U)
            J = s(E, J, j);
          else {
            if (y(M, _(E, U, J)), M.length === Y) return M;
            for (var ee = 1; ee <= P.length - 1; ee++)
              if (y(M, P[ee]), M.length === Y) return M;
            J = U = K;
          }
        }
        return y(M, _(E, U)), M;
      }
    ];
  }, O || !x, m), zm;
}
bS();
var _n = { exports: {} }, br = { exports: {} }, _S = br.exports, Um;
function wS() {
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
  }).call(_S)), br.exports;
}
var $m;
function xS() {
  if ($m) return _n.exports;
  $m = 1;
  for (var e = wS(), t = typeof window > "u" ? xr : window, r = ["moz", "webkit"], n = "AnimationFrame", i = t["request" + n], a = t["cancel" + n] || t["cancelRequest" + n], o = 0; !i && o < r.length; o++)
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
  return _n.exports = function(f) {
    return i.call(t, f);
  }, _n.exports.cancel = function() {
    a.apply(t, arguments);
  }, _n.exports.polyfill = function(f) {
    f || (f = t), f.requestAnimationFrame = i, f.cancelAnimationFrame = a;
  }, _n.exports;
}
var ES = xS();
const XO = /* @__PURE__ */ nn(ES);
var Wm = {}, Ou, Gm;
function Jy() {
  return Gm || (Gm = 1, Ou = `	
\v\f\r                　\u2028\u2029\uFEFF`), Ou;
}
var Tu, Vm;
function SS() {
  if (Vm) return Tu;
  Vm = 1;
  var e = Ue(), t = Pt(), r = Kt(), n = Jy(), i = e("".replace), a = RegExp("^[" + n + "]+"), o = RegExp("(^|[^" + n + "])[" + n + "]+$"), s = function(u) {
    return function(c) {
      var l = r(t(c));
      return u & 1 && (l = i(l, a, "")), u & 2 && (l = i(l, o, "$1")), l;
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
function OS() {
  if (Hm) return Cu;
  Hm = 1;
  var e = la().PROPER, t = qe(), r = Jy(), n = "​᠎";
  return Cu = function(i) {
    return t(function() {
      return !!r[i]() || n[i]() !== n || e && r[i].name !== i;
    });
  }, Cu;
}
var Km;
function TS() {
  if (Km) return Wm;
  Km = 1;
  var e = ut(), t = SS().trim, r = OS();
  return e({ target: "String", proto: !0, forced: r("trim") }, {
    trim: function() {
      return t(this);
    }
  }), Wm;
}
TS();
var Au, Ym;
function CS() {
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
  }), Au;
}
var AS = CS();
const ZO = /* @__PURE__ */ nn(AS);
var Xm = {}, Zm;
function RS() {
  if (Zm) return Xm;
  Zm = 1;
  var e = ut(), t = ga(), r = Ny().indexOf, n = Zy(), i = t([].indexOf), a = !!i && 1 / i([1], 1, -0) < 0, o = a || !n("indexOf");
  return e({ target: "Array", proto: !0, forced: o }, {
    indexOf: function(u) {
      var c = arguments.length > 1 ? arguments[1] : void 0;
      return a ? i(this, u, c) || 0 : r(this, u, c);
    }
  }), Xm;
}
RS();
var Jm = {}, Qm;
function IS() {
  if (Qm) return Jm;
  Qm = 1;
  var e = ut(), t = Ue(), r = Zf(), n = Pt(), i = Kt(), a = Jf(), o = t("".indexOf);
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
IS();
var eg = {}, Ru, tg;
function kS() {
  if (tg) return Ru;
  tg = 1;
  var e = Pr();
  return Ru = Array.isArray || function(r) {
    return e(r) === "Array";
  }, Ru;
}
var rg;
function NS() {
  if (rg) return eg;
  rg = 1;
  var e = ut(), t = Ue(), r = kS(), n = t([].reverse), i = [1, 2];
  return e({ target: "Array", proto: !0, forced: String(i) === String(i.reverse()) }, {
    reverse: function() {
      return r(this) && (this.length = this.length), n(this);
    }
  }), eg;
}
NS();
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
function PS(e) {
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
function Ot() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var r = 0; r < e.length; r++) if (typeof e[r] != "number") throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof e[r] + " == typeof " + e[r]);
  return !0;
}
var ur = Math.PI;
function Iu(e, t, r) {
  e.lArcFlag = e.lArcFlag === 0 ? 0 : 1, e.sweepFlag = e.sweepFlag === 0 ? 0 : 1;
  var n = e.rX, i = e.rY, a = e.x, o = e.y;
  n = Math.abs(e.rX), i = Math.abs(e.rY);
  var s = xc([(t - a) / 2, (r - o) / 2], -e.xRot / 180 * ur), u = s[0], c = s[1], l = Math.pow(u, 2) / Math.pow(n, 2) + Math.pow(c, 2) / Math.pow(i, 2);
  1 < l && (n *= Math.sqrt(l), i *= Math.sqrt(l)), e.rX = n, e.rY = i;
  var f = Math.pow(n, 2) * Math.pow(c, 2) + Math.pow(i, 2) * Math.pow(u, 2), d = (e.lArcFlag !== e.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - f) / f)), h = n * c / i * d, m = -i * u / n * d, p = xc([h, m], e.xRot / 180 * ur);
  e.cX = p[0] + (t + a) / 2, e.cY = p[1] + (r + o) / 2, e.phi1 = Math.atan2((c - m) / i, (u - h) / n), e.phi2 = Math.atan2((-c - m) / i, (-u - h) / n), e.sweepFlag === 0 && e.phi2 > e.phi1 && (e.phi2 -= 2 * ur), e.sweepFlag === 1 && e.phi2 < e.phi1 && (e.phi2 += 2 * ur), e.phi1 *= 180 / ur, e.phi2 *= 180 / ur;
}
function ng(e, t, r) {
  Ot(e, t, r);
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
  return Math.abs(s) < i ? [-c / u] : function(l, f, d) {
    var h = l * l / 4 - f;
    if (h < -1e-6) return [];
    if (h <= d) return [-l / 2];
    var m = Math.sqrt(h);
    return [-l / 2 - m, -l / 2 + m];
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
    return Ot(s, u, c, l, f, d), i(function(h, m, p, b) {
      var y = h.x1, _ = h.x2, x = h.relative && !isNaN(b), O = h.x !== void 0 ? h.x : x ? 0 : m, C = h.y !== void 0 ? h.y : x ? 0 : p;
      function F(P) {
        return P * P;
      }
      h.type & se.HORIZ_LINE_TO && u !== 0 && (h.type = se.LINE_TO, h.y = h.relative ? 0 : p), h.type & se.VERT_LINE_TO && c !== 0 && (h.type = se.LINE_TO, h.x = h.relative ? 0 : m), h.x !== void 0 && (h.x = h.x * s + C * c + (x ? 0 : f)), h.y !== void 0 && (h.y = O * u + h.y * l + (x ? 0 : d)), h.x1 !== void 0 && (h.x1 = h.x1 * s + h.y1 * c + (x ? 0 : f)), h.y1 !== void 0 && (h.y1 = y * u + h.y1 * l + (x ? 0 : d)), h.x2 !== void 0 && (h.x2 = h.x2 * s + h.y2 * c + (x ? 0 : f)), h.y2 !== void 0 && (h.y2 = _ * u + h.y2 * l + (x ? 0 : d));
      var R = s * l - u * c;
      if (h.xRot !== void 0 && (s !== 1 || u !== 0 || c !== 0 || l !== 1)) if (R === 0) delete h.rX, delete h.rY, delete h.xRot, delete h.lArcFlag, delete h.sweepFlag, h.type = se.LINE_TO;
      else {
        var S = h.xRot * Math.PI / 180, w = Math.sin(S), N = Math.cos(S), z = 1 / F(h.rX), E = 1 / F(h.rY), D = F(N) * z + F(w) * E, v = 2 * w * N * (z - E), j = F(w) * z + F(N) * E, te = D * l * l - v * u * l + j * u * u, L = v * (s * l + u * c) - 2 * (D * c * l + j * s * u), Y = D * c * c - v * s * c + j * s * s, U = (Math.atan2(L, te - Y) + Math.PI) % Math.PI / 2, J = Math.sin(U), M = Math.cos(U);
        h.rX = Math.abs(R) / Math.sqrt(te * F(M) + L * J * M + Y * F(J)), h.rY = Math.abs(R) / Math.sqrt(te * F(J) - L * J * M + Y * F(M)), h.xRot = 180 * U / Math.PI;
      }
      return h.sweepFlag !== void 0 && 0 > R && (h.sweepFlag = +!h.sweepFlag), h;
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
    return s === void 0 && (s = 1e13), Ot(s), function(c) {
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
    s === void 0 && (s = 0), Ot(s);
    var u = NaN, c = NaN, l = NaN, f = NaN;
    return i(function(d, h, m, p, b) {
      var y = Math.abs, _ = !1, x = 0, O = 0;
      if (d.type & se.SMOOTH_CURVE_TO && (x = isNaN(u) ? 0 : h - u, O = isNaN(c) ? 0 : m - c), d.type & (se.CURVE_TO | se.SMOOTH_CURVE_TO) ? (u = d.relative ? h + d.x2 : d.x2, c = d.relative ? m + d.y2 : d.y2) : (u = NaN, c = NaN), d.type & se.SMOOTH_QUAD_TO ? (l = isNaN(l) ? h : 2 * h - l, f = isNaN(f) ? m : 2 * m - f) : d.type & se.QUAD_TO ? (l = d.relative ? h + d.x1 : d.x1, f = d.relative ? m + d.y1 : d.y2) : (l = NaN, f = NaN), d.type & se.LINE_COMMANDS || d.type & se.ARC && (d.rX === 0 || d.rY === 0 || !d.lArcFlag) || d.type & se.CURVE_TO || d.type & se.SMOOTH_CURVE_TO || d.type & se.QUAD_TO || d.type & se.SMOOTH_QUAD_TO) {
        var C = d.x === void 0 ? 0 : d.relative ? d.x : d.x - h, F = d.y === void 0 ? 0 : d.relative ? d.y : d.y - m;
        x = isNaN(l) ? d.x1 === void 0 ? x : d.relative ? d.x : d.x1 - h : l - h, O = isNaN(f) ? d.y1 === void 0 ? O : d.relative ? d.y : d.y1 - m : f - m;
        var R = d.x2 === void 0 ? 0 : d.relative ? d.x : d.x2 - h, S = d.y2 === void 0 ? 0 : d.relative ? d.y : d.y2 - m;
        y(C) <= s && y(F) <= s && y(x) <= s && y(O) <= s && y(R) <= s && y(S) <= s && (_ = !0);
      }
      return d.type & se.CLOSE_PATH && y(h - p) <= s && y(m - b) <= s && (_ = !0), _ ? [] : d;
    });
  }, e.MATRIX = a, e.ROTATE = function(s, u, c) {
    u === void 0 && (u = 0), c === void 0 && (c = 0), Ot(s, u, c);
    var l = Math.sin(s), f = Math.cos(s);
    return a(f, l, -l, f, u - u * f + c * l, c - u * l - c * f);
  }, e.TRANSLATE = function(s, u) {
    return u === void 0 && (u = 0), Ot(s, u), a(1, 0, 0, 1, s, u);
  }, e.SCALE = function(s, u) {
    return u === void 0 && (u = s), Ot(s, u), a(s, 0, 0, u, 0, 0);
  }, e.SKEW_X = function(s) {
    return Ot(s), a(1, 0, Math.atan(s), 1, 0, 0);
  }, e.SKEW_Y = function(s) {
    return Ot(s), a(1, Math.atan(s), 0, 1, 0, 0);
  }, e.X_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), Ot(s), a(-1, 0, 0, 1, s, 0);
  }, e.Y_AXIS_SYMMETRY = function(s) {
    return s === void 0 && (s = 0), Ot(s), a(1, 0, 0, -1, 0, s);
  }, e.A_TO_C = function() {
    return i(function(s, u, c) {
      return se.ARC === s.type ? function(l, f, d) {
        var h, m, p, b;
        l.cX || Iu(l, f, d);
        for (var y = Math.min(l.phi1, l.phi2), _ = Math.max(l.phi1, l.phi2) - y, x = Math.ceil(_ / 90), O = new Array(x), C = f, F = d, R = 0; R < x; R++) {
          var S = ig(l.phi1, l.phi2, R / x), w = ig(l.phi1, l.phi2, (R + 1) / x), N = w - S, z = 4 / 3 * Math.tan(N * Qt / 4), E = [Math.cos(S * Qt) - z * Math.sin(S * Qt), Math.sin(S * Qt) + z * Math.cos(S * Qt)], D = E[0], v = E[1], j = [Math.cos(w * Qt), Math.sin(w * Qt)], te = j[0], L = j[1], Y = [te + z * Math.sin(w * Qt), L - z * Math.cos(w * Qt)], U = Y[0], J = Y[1];
          O[R] = { relative: l.relative, type: se.CURVE_TO };
          var M = function(P, K) {
            var ee = xc([P * l.rX, K * l.rY], l.xRot), H = ee[0], me = ee[1];
            return [l.cX + H, l.cY + me];
          };
          h = M(D, v), O[R].x1 = h[0], O[R].y1 = h[1], m = M(U, J), O[R].x2 = m[0], O[R].y2 = m[1], p = M(te, L), O[R].x = p[0], O[R].y = p[1], l.relative && (O[R].x1 -= C, O[R].y1 -= F, O[R].x2 -= C, O[R].y2 -= F, O[R].x -= C, O[R].y -= F), C = (b = [O[R].x, O[R].y])[0], F = b[1];
        }
        return O;
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
    }, u = t(), c = n(), l = r(), f = i(function(d, h, m) {
      var p = l(c(u(s(d))));
      function b(J) {
        J > f.maxX && (f.maxX = J), J < f.minX && (f.minX = J);
      }
      function y(J) {
        J > f.maxY && (f.maxY = J), J < f.minY && (f.minY = J);
      }
      if (p.type & se.DRAWING_COMMANDS && (b(h), y(m)), p.type & se.HORIZ_LINE_TO && b(p.x), p.type & se.VERT_LINE_TO && y(p.y), p.type & se.LINE_TO && (b(p.x), y(p.y)), p.type & se.CURVE_TO) {
        b(p.x), y(p.y);
        for (var _ = 0, x = sg(h, p.x1, p.x2, p.x); _ < x.length; _++)
          0 < (U = x[_]) && 1 > U && b(og(h, p.x1, p.x2, p.x, U));
        for (var O = 0, C = sg(m, p.y1, p.y2, p.y); O < C.length; O++)
          0 < (U = C[O]) && 1 > U && y(og(m, p.y1, p.y2, p.y, U));
      }
      if (p.type & se.ARC) {
        b(p.x), y(p.y), Iu(p, h, m);
        for (var F = p.xRot / 180 * Math.PI, R = Math.cos(F) * p.rX, S = Math.sin(F) * p.rX, w = -Math.sin(F) * p.rY, N = Math.cos(F) * p.rY, z = p.phi1 < p.phi2 ? [p.phi1, p.phi2] : -180 > p.phi2 ? [p.phi2 + 360, p.phi1 + 360] : [p.phi2, p.phi1], E = z[0], D = z[1], v = function(J) {
          var M = J[0], P = J[1], K = 180 * Math.atan2(P, M) / Math.PI;
          return K < E ? K + 360 : K;
        }, j = 0, te = ng(w, -R, 0).map(v); j < te.length; j++)
          (U = te[j]) > E && U < D && b(ag(p.cX, R, w, U));
        for (var L = 0, Y = ng(N, -S, 0).map(v); L < Y.length; L++) {
          var U;
          (U = Y[L]) > E && U < D && y(ag(p.cY, S, N, U));
        }
      }
      return d;
    });
    return f.minX = 1 / 0, f.maxX = -1 / 0, f.minY = 1 / 0, f.maxY = -1 / 0, f;
  };
})(We || (We = {}));
var St, t0 = function() {
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
}(), MS = function(e) {
  return e === " " || e === "	" || e === "\r" || e === `
`;
}, ug = function(e) {
  return 48 <= e.charCodeAt(0) && e.charCodeAt(0) <= 57;
}, DS = function(e) {
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
    for (var a = function(f) {
      n.push(f), i.curArgs.length = 0, i.canParseCommandOrComma = !0;
    }, o = 0; o < r.length; o++) {
      var s = r[o], u = !(this.curCommandType !== se.ARC || this.curArgs.length !== 3 && this.curArgs.length !== 4 || this.curNumber.length !== 1 || this.curNumber !== "0" && this.curNumber !== "1"), c = ug(s) && (this.curNumber === "0" && s === "0" || u);
      if (!ug(s) || c) if (s !== "e" && s !== "E") if (s !== "-" && s !== "+" || !this.curNumberHasExp || this.curNumberHasExpDigits) if (s !== "." || this.curNumberHasExp || this.curNumberHasDecimal || u) {
        if (this.curNumber && this.curCommandType !== -1) {
          var l = Number(this.curNumber);
          if (isNaN(l)) throw new SyntaxError("Invalid number ending at " + o);
          if (this.curCommandType === se.ARC) {
            if (this.curArgs.length === 0 || this.curArgs.length === 1) {
              if (0 > l) throw new SyntaxError('Expected positive number, got "' + l + '" at index "' + o + '"');
            } else if ((this.curArgs.length === 3 || this.curArgs.length === 4) && this.curNumber !== "0" && this.curNumber !== "1") throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + o + '"');
          }
          this.curArgs.push(l), this.curArgs.length === FS[this.curCommandType] && (se.HORIZ_LINE_TO === this.curCommandType ? a({ type: se.HORIZ_LINE_TO, relative: this.curCommandRelative, x: l }) : se.VERT_LINE_TO === this.curCommandType ? a({ type: se.VERT_LINE_TO, relative: this.curCommandRelative, y: l }) : this.curCommandType === se.MOVE_TO || this.curCommandType === se.LINE_TO || this.curCommandType === se.SMOOTH_QUAD_TO ? (a({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), se.MOVE_TO === this.curCommandType && (this.curCommandType = se.LINE_TO)) : this.curCommandType === se.CURVE_TO ? a({ type: se.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === se.SMOOTH_CURVE_TO ? a({ type: se.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.QUAD_TO ? a({ type: se.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === se.ARC && a({ type: se.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
        }
        if (!MS(s)) if (s === "," && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
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
    return PS(r);
  }, t.parse = function(r) {
    var n = new DS(), i = [];
    return n.parse(r, i), n.finish(i), i;
  }, t.CLOSE_PATH = 1, t.MOVE_TO = 2, t.HORIZ_LINE_TO = 4, t.VERT_LINE_TO = 8, t.LINE_TO = 16, t.CURVE_TO = 32, t.SMOOTH_CURVE_TO = 64, t.QUAD_TO = 128, t.SMOOTH_QUAD_TO = 256, t.ARC = 512, t.LINE_COMMANDS = t.LINE_TO | t.HORIZ_LINE_TO | t.VERT_LINE_TO, t.DRAWING_COMMANDS = t.HORIZ_LINE_TO | t.VERT_LINE_TO | t.LINE_TO | t.CURVE_TO | t.SMOOTH_CURVE_TO | t.QUAD_TO | t.SMOOTH_QUAD_TO | t.ARC, t;
}(t0), FS = ((St = {})[se.MOVE_TO] = 2, St[se.LINE_TO] = 2, St[se.HORIZ_LINE_TO] = 1, St[se.VERT_LINE_TO] = 1, St[se.CLOSE_PATH] = 0, St[se.QUAD_TO] = 4, St[se.SMOOTH_QUAD_TO] = 2, St[se.CURVE_TO] = 6, St[se.SMOOTH_CURVE_TO] = 4, St[se.ARC] = 7, St), cg = {}, ku, fg;
function LS() {
  if (fg) return ku;
  fg = 1;
  var e = Qe(), t = Dt(), r = sa(), n = Vy(), i = RegExp.prototype;
  return ku = function(a) {
    var o = a.flags;
    return o === void 0 && !("flags" in i) && !t(a, "flags") && r(i, a) ? e(n, a) : o;
  }, ku;
}
var lg;
function BS() {
  if (lg) return cg;
  lg = 1;
  var e = la().PROPER, t = Fr(), r = ot(), n = Kt(), i = qe(), a = LS(), o = "toString", s = RegExp.prototype, u = s[o], c = i(function() {
    return u.call({ source: "a", flags: "b" }) !== "/a/b";
  }), l = e && u.name !== o;
  return (c || l) && t(s, o, function() {
    var d = r(this), h = n(d.source), m = n(a(d));
    return "/" + h + "/" + m;
  }, { unsafe: !0 }), cg;
}
BS();
const Zr = Math.min, Sr = Math.max, ki = Math.round, hi = Math.floor, Wt = (e) => ({
  x: e,
  y: e
}), jS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, zS = {
  start: "end",
  end: "start"
};
function Ec(e, t, r) {
  return Sr(e, Zr(t, r));
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
function Qf(e) {
  return e === "y" ? "height" : "width";
}
function Jr(e) {
  return ["top", "bottom"].includes(Ir(e)) ? "y" : "x";
}
function el(e) {
  return r0(Jr(e));
}
function qS(e, t, r) {
  r === void 0 && (r = !1);
  const n = Qn(e), i = el(e), a = Qf(i);
  let o = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = Ni(o)), [o, Ni(o)];
}
function US(e) {
  const t = Ni(e);
  return [Sc(e), t, Sc(t)];
}
function Sc(e) {
  return e.replace(/start|end/g, (t) => zS[t]);
}
function $S(e, t, r) {
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
function WS(e, t, r, n) {
  const i = Qn(e);
  let a = $S(Ir(e), r === "start", n);
  return i && (a = a.map((o) => o + "-" + i), t && (a = a.concat(a.map(Sc)))), a;
}
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => jS[t]);
}
function GS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function n0(e) {
  return typeof e != "number" ? GS(e) : {
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
  const a = Jr(t), o = el(t), s = Qf(o), u = Ir(t), c = a === "y", l = n.x + n.width / 2 - i.width / 2, f = n.y + n.height / 2 - i.height / 2, d = n[s] / 2 - i[s] / 2;
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
const VS = async (e, t, r) => {
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
  } = hg(c, n, u), d = n, h = {}, m = 0;
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
    l = _ ?? l, f = x ?? f, h = {
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
    } = hg(c, d, u)), p = -1);
  }
  return {
    x: l,
    y: f,
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
    rootBoundary: l = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: h = 0
  } = Jn(t, e), m = n0(h), b = s[d ? f === "floating" ? "reference" : "floating" : f], y = Pi(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(b))) == null || r ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: l,
    strategy: u
  })), _ = f === "floating" ? {
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
const HS = (e) => ({
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
    } = Jn(e, t) || {};
    if (c == null)
      return {};
    const f = n0(l), d = {
      x: r,
      y: n
    }, h = el(i), m = Qf(h), p = await o.getDimensions(c), b = h === "y", y = b ? "top" : "left", _ = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", O = a.reference[m] + a.reference[h] - d[h] - a.floating[m], C = d[h] - a.reference[h], F = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let R = F ? F[x] : 0;
    (!R || !await (o.isElement == null ? void 0 : o.isElement(F))) && (R = s.floating[x] || a.floating[m]);
    const S = O / 2 - C / 2, w = R / 2 - p[m] / 2 - 1, N = Zr(f[y], w), z = Zr(f[_], w), E = N, D = R - p[m] - z, v = R / 2 - p[m] / 2 + S, j = Ec(E, v, D), te = !u.arrow && Qn(i) != null && v !== j && a.reference[m] / 2 - (v < E ? N : z) - p[m] / 2 < 0, L = te ? v < E ? v - E : v - D : 0;
    return {
      [h]: d[h] + L,
      data: {
        [h]: j,
        centerOffset: v - j - L,
        ...te && {
          alignmentOffset: L
        }
      },
      reset: te
    };
  }
}), KS = function(e) {
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
      } = Jn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const y = Ir(i), _ = Jr(s), x = Ir(s) === s, O = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), C = d || (x || !p ? [Ni(s)] : US(s)), F = m !== "none";
      !d && F && C.push(...WS(s, p, m, O));
      const R = [s, ...C], S = await i0(t, b), w = [];
      let N = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (l && w.push(S[y]), f) {
        const v = qS(i, o, O);
        w.push(S[v[0]], S[v[1]]);
      }
      if (N = [...N, {
        placement: i,
        overflows: w
      }], !w.every((v) => v <= 0)) {
        var z, E;
        const v = (((z = a.flip) == null ? void 0 : z.index) || 0) + 1, j = R[v];
        if (j)
          return {
            data: {
              index: v,
              overflows: N
            },
            reset: {
              placement: j
            }
          };
        let te = (E = N.filter((L) => L.overflows[0] <= 0).sort((L, Y) => L.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!te)
          switch (h) {
            case "bestFit": {
              var D;
              const L = (D = N.filter((Y) => {
                if (F) {
                  const U = Jr(Y.placement);
                  return U === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((U) => U > 0).reduce((U, J) => U + J, 0)]).sort((Y, U) => Y[1] - U[1])[0]) == null ? void 0 : D[0];
              L && (te = L);
              break;
            }
            case "initialPlacement":
              te = s;
              break;
          }
        if (i !== te)
          return {
            reset: {
              placement: te
            }
          };
      }
      return {};
    }
  };
};
async function YS(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Ir(r), s = Qn(r), u = Jr(r) === "y", c = ["left", "top"].includes(o) ? -1 : 1, l = a && u ? -1 : 1, f = Jn(t, e);
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
const XS = function(e) {
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
      } = t, u = await YS(t, e);
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
}, ZS = function(e) {
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
      }, l = await i0(t, u), f = Jr(Ir(i)), d = r0(f);
      let h = c[d], m = c[f];
      if (a) {
        const b = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", _ = h + l[b], x = h - l[y];
        h = Ec(_, h, x);
      }
      if (o) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", _ = m + l[b], x = m - l[y];
        m = Ec(_, m, x);
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
function ya() {
  return typeof window < "u";
}
function un(e) {
  return a0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
  var t;
  return (t = (a0(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function a0(e) {
  return ya() ? e instanceof Node || e instanceof mt(e).Node : !1;
}
function It(e) {
  return ya() ? e instanceof Element || e instanceof mt(e).Element : !1;
}
function Vt(e) {
  return ya() ? e instanceof HTMLElement || e instanceof mt(e).HTMLElement : !1;
}
function dg(e) {
  return !ya() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof mt(e).ShadowRoot;
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
function JS(e) {
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
function tl(e) {
  const t = rl(), r = It(e) ? kt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function QS(e) {
  let t = gr(e);
  for (; Vt(t) && !Qr(t); ) {
    if (tl(t))
      return t;
    if (ba(t))
      return null;
    t = gr(t);
  }
  return null;
}
function rl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Qr(e) {
  return ["html", "body", "#document"].includes(un(e));
}
function kt(e) {
  return mt(e).getComputedStyle(e);
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
  const i = s0(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), o = mt(i);
  if (a) {
    const s = Oc(o);
    return t.concat(o, o.visualViewport || [], ei(i) ? i : [], s && r ? Mn(s) : []);
  }
  return t.concat(i, Mn(i, [], r));
}
function Oc(e) {
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
function nl(e) {
  return It(e) ? e : e.contextElement;
}
function Vr(e) {
  const t = nl(e);
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
const eO = /* @__PURE__ */ Wt(0);
function u0(e) {
  const t = mt(e);
  return !rl() || !t.visualViewport ? eO : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function tO(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== mt(e) ? !1 : t;
}
function kr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = nl(e);
  let o = Wt(1);
  t && (n ? It(n) && (o = Vr(n)) : o = Vr(e));
  const s = tO(a, r, n) ? u0(a) : Wt(0);
  let u = (i.left + s.x) / o.x, c = (i.top + s.y) / o.y, l = i.width / o.x, f = i.height / o.y;
  if (a) {
    const d = mt(a), h = n && It(n) ? mt(n) : n;
    let m = d, p = Oc(m);
    for (; p && n && h !== m; ) {
      const b = Vr(p), y = p.getBoundingClientRect(), _ = kt(p), x = y.left + (p.clientLeft + parseFloat(_.paddingLeft)) * b.x, O = y.top + (p.clientTop + parseFloat(_.paddingTop)) * b.y;
      u *= b.x, c *= b.y, l *= b.x, f *= b.y, u += x, c += O, m = mt(p), p = Oc(m);
    }
  }
  return Pi({
    width: l,
    height: f,
    x: u,
    y: c
  });
}
function il(e, t) {
  const r = _a(e).scrollLeft;
  return t ? t.left + r : kr(Yt(e)).left + r;
}
function c0(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), i = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    il(e, n)
  )), a = n.top + t.scrollTop;
  return {
    x: i,
    y: a
  };
}
function rO(e) {
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
  const l = Wt(0), f = Vt(n);
  if ((f || !f && !a) && ((un(n) !== "body" || ei(o)) && (u = _a(n)), Vt(n))) {
    const h = kr(n);
    c = Vr(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  const d = o && !f && !a ? c0(o, u, !0) : Wt(0);
  return {
    width: r.width * c.x,
    height: r.height * c.y,
    x: r.x * c.x - u.scrollLeft * c.x + l.x + d.x,
    y: r.y * c.y - u.scrollTop * c.y + l.y + d.y
  };
}
function nO(e) {
  return Array.from(e.getClientRects());
}
function iO(e) {
  const t = Yt(e), r = _a(e), n = e.ownerDocument.body, i = Sr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = Sr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + il(e);
  const s = -r.scrollTop;
  return kt(n).direction === "rtl" && (o += Sr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: o,
    y: s
  };
}
function aO(e, t) {
  const r = mt(e), n = Yt(e), i = r.visualViewport;
  let a = n.clientWidth, o = n.clientHeight, s = 0, u = 0;
  if (i) {
    a = i.width, o = i.height;
    const c = rl();
    (!c || c && t === "fixed") && (s = i.offsetLeft, u = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s,
    y: u
  };
}
function sO(e, t) {
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
    n = aO(e, r);
  else if (t === "document")
    n = iO(Yt(e));
  else if (It(t))
    n = sO(t, r);
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
function f0(e, t) {
  const r = gr(e);
  return r === t || !It(r) || Qr(r) ? !1 : kt(r).position === "fixed" || f0(r, t);
}
function oO(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Mn(e, [], !1).filter((s) => It(s) && un(s) !== "body"), i = null;
  const a = kt(e).position === "fixed";
  let o = a ? gr(e) : e;
  for (; It(o) && !Qr(o); ) {
    const s = kt(o), u = tl(o);
    !u && s.position === "fixed" && (i = null), (a ? !u && !i : !u && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ei(o) && !u && f0(e, o)) ? n = n.filter((l) => l !== o) : i = s, o = gr(o);
  }
  return t.set(e, n), n;
}
function uO(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const o = [...r === "clippingAncestors" ? ba(t) ? [] : oO(t, this._c) : [].concat(r), n], s = o[0], u = o.reduce((c, l) => {
    const f = pg(t, l, i);
    return c.top = Sr(f.top, c.top), c.right = Zr(f.right, c.right), c.bottom = Zr(f.bottom, c.bottom), c.left = Sr(f.left, c.left), c;
  }, pg(t, s, i));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function cO(e) {
  const {
    width: t,
    height: r
  } = o0(e);
  return {
    width: t,
    height: r
  };
}
function fO(e, t, r) {
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
    } else i && (u.x = il(i));
  const c = i && !n && !a ? c0(i, s) : Wt(0), l = o.left + s.scrollLeft - u.x - c.x, f = o.top + s.scrollTop - u.y - c.y;
  return {
    x: l,
    y: f,
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
function l0(e, t) {
  const r = mt(e);
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
  for (; n && JS(n) && Nu(n); )
    n = mg(n, t);
  return n && Qr(n) && Nu(n) && !tl(n) ? r : n || QS(e) || r;
}
const lO = async function(e) {
  const t = this.getOffsetParent || l0, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: fO(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function hO(e) {
  return kt(e).direction === "rtl";
}
const dO = {
  convertOffsetParentRelativeRectToViewportRelativeRect: rO,
  getDocumentElement: Yt,
  getClippingRect: uO,
  getOffsetParent: l0,
  getElementRects: lO,
  getClientRects: nO,
  getDimensions: cO,
  getScale: Vr,
  isElement: It,
  isRTL: hO
};
function h0(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pO(e, t) {
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
    const m = hi(f), p = hi(i.clientWidth - (l + d)), b = hi(i.clientHeight - (f + h)), y = hi(l), x = {
      rootMargin: -m + "px " + -p + "px " + -b + "px " + -y + "px",
      threshold: Sr(0, Zr(1, u)) || 1
    };
    let O = !0;
    function C(F) {
      const R = F[0].intersectionRatio;
      if (R !== u) {
        if (!O)
          return o();
        R ? o(!1, R) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !h0(c, e.getBoundingClientRect()) && o(), O = !1;
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
function JO(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, c = nl(e), l = i || a ? [...c ? Mn(c) : [], ...Mn(t)] : [];
  l.forEach((y) => {
    i && y.addEventListener("scroll", r, {
      passive: !0
    }), a && y.addEventListener("resize", r);
  });
  const f = c && s ? pO(c, r) : null;
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
    l.forEach((_) => {
      i && _.removeEventListener("scroll", r), a && _.removeEventListener("resize", r);
    }), f == null || f(), (y = h) == null || y.disconnect(), h = null, u && cancelAnimationFrame(m);
  };
}
const QO = XS, eT = ZS, tT = KS, rT = HS, nT = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: dO,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return VS(e, t, {
    ...i,
    platform: a
  });
};
var bi = { exports: {} };
/* @license
Papa Parse
v5.5.1
https://github.com/mholt/PapaParse
License: MIT
*/
var mO = bi.exports, gg;
function gO() {
  return gg || (gg = 1, function(e, t) {
    ((r, n) => {
      e.exports = n();
    })(mO, function r() {
      var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, i, a = !n.document && !!n.postMessage, o = n.IS_PAPA_WORKER || !1, s = {}, u = 0, c = {};
      function l(S) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(w) {
          var N = C(w);
          N.chunkSize = parseInt(N.chunkSize), w.step || w.chunk || (N.chunkSize = null), this._handle = new p(N), (this._handle.streamer = this)._config = N;
        }).call(this, S), this.parseChunk = function(w, N) {
          var z = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < z) {
            let D = this._config.newline;
            D || (E = this._config.quoteChar || '"', D = this._handle.guessLineEndings(w, E)), w = [...w.split(D).slice(z)].join(D);
          }
          this.isFirstChunk && R(this._config.beforeFirstChunk) && (E = this._config.beforeFirstChunk(w)) !== void 0 && (w = E), this.isFirstChunk = !1, this._halted = !1;
          var z = this._partialLine + w, E = (this._partialLine = "", this._handle.parse(z, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (w = E.meta.cursor, z = (this._finished || (this._partialLine = z.substring(w - this._baseIndex), this._baseIndex = w), E && E.data && (this._rowCount += E.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), o) n.postMessage({ results: E, workerId: c.WORKER_ID, finished: z });
            else if (R(this._config.chunk) && !N) {
              if (this._config.chunk(E, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = E = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(E.data), this._completeResults.errors = this._completeResults.errors.concat(E.errors), this._completeResults.meta = E.meta), this._completed || !z || !R(this._config.complete) || E && E.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), z || E && E.meta.paused || this._nextChunk(), E;
          }
          this._halted = !0;
        }, this._sendError = function(w) {
          R(this._config.error) ? this._config.error(w) : o && this._config.error && n.postMessage({ workerId: c.WORKER_ID, error: w, finished: !1 });
        };
      }
      function f(S) {
        var w;
        (S = S || {}).chunkSize || (S.chunkSize = c.RemoteChunkSize), l.call(this, S), this._nextChunk = a ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(N) {
          this._input = N, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (w = new XMLHttpRequest(), this._config.withCredentials && (w.withCredentials = this._config.withCredentials), a || (w.onload = F(this._chunkLoaded, this), w.onerror = F(this._chunkError, this)), w.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !a), this._config.downloadRequestHeaders) {
              var N, z = this._config.downloadRequestHeaders;
              for (N in z) w.setRequestHeader(N, z[N]);
            }
            var E;
            this._config.chunkSize && (E = this._start + this._config.chunkSize - 1, w.setRequestHeader("Range", "bytes=" + this._start + "-" + E));
            try {
              w.send(this._config.downloadRequestBody);
            } catch (D) {
              this._chunkError(D.message);
            }
            a && w.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          w.readyState === 4 && (w.status < 200 || 400 <= w.status ? this._chunkError() : (this._start += this._config.chunkSize || w.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((N) => (N = N.getResponseHeader("Content-Range")) !== null ? parseInt(N.substring(N.lastIndexOf("/") + 1)) : -1)(w), this.parseChunk(w.responseText)));
        }, this._chunkError = function(N) {
          N = w.statusText || N, this._sendError(new Error(N));
        };
      }
      function d(S) {
        (S = S || {}).chunkSize || (S.chunkSize = c.LocalChunkSize), l.call(this, S);
        var w, N, z = typeof FileReader < "u";
        this.stream = function(E) {
          this._input = E, N = E.slice || E.webkitSlice || E.mozSlice, z ? ((w = new FileReader()).onload = F(this._chunkLoaded, this), w.onerror = F(this._chunkError, this)) : w = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var E = this._input, D = (this._config.chunkSize && (D = Math.min(this._start + this._config.chunkSize, this._input.size), E = N.call(E, this._start, D)), w.readAsText(E, this._config.encoding));
          z || this._chunkLoaded({ target: { result: D } });
        }, this._chunkLoaded = function(E) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(E.target.result);
        }, this._chunkError = function() {
          this._sendError(w.error);
        };
      }
      function h(S) {
        var w;
        l.call(this, S = S || {}), this.stream = function(N) {
          return w = N, this._nextChunk();
        }, this._nextChunk = function() {
          var N, z;
          if (!this._finished) return N = this._config.chunkSize, w = N ? (z = w.substring(0, N), w.substring(N)) : (z = w, ""), this._finished = !w, this.parseChunk(z);
        };
      }
      function m(S) {
        l.call(this, S = S || {});
        var w = [], N = !0, z = !1;
        this.pause = function() {
          l.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          l.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(E) {
          this._input = E, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          z && w.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), w.length ? this.parseChunk(w.shift()) : N = !0;
        }, this._streamData = F(function(E) {
          try {
            w.push(typeof E == "string" ? E : E.toString(this._config.encoding)), N && (N = !1, this._checkIsFinished(), this.parseChunk(w.shift()));
          } catch (D) {
            this._streamError(D);
          }
        }, this), this._streamError = F(function(E) {
          this._streamCleanUp(), this._sendError(E);
        }, this), this._streamEnd = F(function() {
          this._streamCleanUp(), z = !0, this._streamData("");
        }, this), this._streamCleanUp = F(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function p(S) {
        var w, N, z, E, D = Math.pow(2, 53), v = -D, j = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, te = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, L = this, Y = 0, U = 0, J = !1, M = !1, P = [], K = { data: [], errors: [], meta: {} };
        function ee(oe) {
          return S.skipEmptyLines === "greedy" ? oe.join("").trim() === "" : oe.length === 1 && oe[0].length === 0;
        }
        function H() {
          if (K && z && (Ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), z = !1), S.skipEmptyLines && (K.data = K.data.filter(function(he) {
            return !ee(he);
          })), me()) {
            let he = function(be, xe) {
              R(S.transformHeader) && (be = S.transformHeader(be, xe)), P.push(be);
            };
            if (K) if (Array.isArray(K.data[0])) {
              for (var oe = 0; me() && oe < K.data.length; oe++) K.data[oe].forEach(he);
              K.data.splice(0, 1);
            } else K.data.forEach(he);
          }
          function le(he, be) {
            for (var xe = S.header ? {} : [], g = 0; g < he.length; g++) {
              var X = g, V = he[g], V = ((A, T) => ((B) => (S.dynamicTypingFunction && S.dynamicTyping[B] === void 0 && (S.dynamicTyping[B] = S.dynamicTypingFunction(B)), (S.dynamicTyping[B] || S.dynamicTyping) === !0))(A) ? T === "true" || T === "TRUE" || T !== "false" && T !== "FALSE" && (((B) => {
                if (j.test(B) && (B = parseFloat(B), v < B && B < D))
                  return 1;
              })(T) ? parseFloat(T) : te.test(T) ? new Date(T) : T === "" ? null : T) : T)(X = S.header ? g >= P.length ? "__parsed_extra" : P[g] : X, V = S.transform ? S.transform(V, X) : V);
              X === "__parsed_extra" ? (xe[X] = xe[X] || [], xe[X].push(V)) : xe[X] = V;
            }
            return S.header && (g > P.length ? Ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + P.length + " fields but parsed " + g, U + be) : g < P.length && Ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + P.length + " fields but parsed " + g, U + be)), xe;
          }
          var de;
          K && (S.header || S.dynamicTyping || S.transform) && (de = 1, !K.data.length || Array.isArray(K.data[0]) ? (K.data = K.data.map(le), de = K.data.length) : K.data = le(K.data, 0), S.header && K.meta && (K.meta.fields = P), U += de);
        }
        function me() {
          return S.header && P.length === 0;
        }
        function Ee(oe, le, de, he) {
          oe = { type: oe, code: le, message: de }, he !== void 0 && (oe.row = he), K.errors.push(oe);
        }
        R(S.step) && (E = S.step, S.step = function(oe) {
          K = oe, me() ? H() : (H(), K.data.length !== 0 && (Y += oe.data.length, S.preview && Y > S.preview ? N.abort() : (K.data = K.data[0], E(K, L))));
        }), this.parse = function(oe, le, de) {
          var he = S.quoteChar || '"', he = (S.newline || (S.newline = this.guessLineEndings(oe, he)), z = !1, S.delimiter ? R(S.delimiter) && (S.delimiter = S.delimiter(oe), K.meta.delimiter = S.delimiter) : ((he = ((be, xe, g, X, V) => {
            var A, T, B, ne;
            V = V || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ie = 0; ie < V.length; ie++) {
              for (var G, W = V[ie], re = 0, Q = 0, ae = 0, pe = (B = void 0, new y({ comments: X, delimiter: W, newline: xe, preview: 10 }).parse(be)), _e = 0; _e < pe.data.length; _e++) g && ee(pe.data[_e]) ? ae++ : (G = pe.data[_e].length, Q += G, B === void 0 ? B = G : 0 < G && (re += Math.abs(G - B), B = G));
              0 < pe.data.length && (Q /= pe.data.length - ae), (T === void 0 || re <= T) && (ne === void 0 || ne < Q) && 1.99 < Q && (T = re, A = W, ne = Q);
            }
            return { successful: !!(S.delimiter = A), bestDelimiter: A };
          })(oe, S.newline, S.skipEmptyLines, S.comments, S.delimitersToGuess)).successful ? S.delimiter = he.bestDelimiter : (z = !0, S.delimiter = c.DefaultDelimiter), K.meta.delimiter = S.delimiter), C(S));
          return S.preview && S.header && he.preview++, w = oe, N = new y(he), K = N.parse(w, le, de), H(), J ? { meta: { paused: !0 } } : K || { meta: { paused: !1 } };
        }, this.paused = function() {
          return J;
        }, this.pause = function() {
          J = !0, N.abort(), w = R(S.chunk) ? "" : w.substring(N.getCharIndex());
        }, this.resume = function() {
          L.streamer._halted ? (J = !1, L.streamer.parseChunk(w, !0)) : setTimeout(L.resume, 3);
        }, this.aborted = function() {
          return M;
        }, this.abort = function() {
          M = !0, N.abort(), K.meta.aborted = !0, R(S.complete) && S.complete(K), w = "";
        }, this.guessLineEndings = function(be, he) {
          be = be.substring(0, 1048576);
          var he = new RegExp(b(he) + "([^]*?)" + b(he), "gm"), de = (be = be.replace(he, "")).split("\r"), he = be.split(`
`), be = 1 < he.length && he[0].length < de[0].length;
          if (de.length === 1 || be) return `
`;
          for (var xe = 0, g = 0; g < de.length; g++) de[g][0] === `
` && xe++;
          return xe >= de.length / 2 ? `\r
` : "\r";
        };
      }
      function b(S) {
        return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function y(S) {
        var w = (S = S || {}).delimiter, N = S.newline, z = S.comments, E = S.step, D = S.preview, v = S.fastMode, j = null, te = S.quoteChar == null ? '"' : S.quoteChar, L = te;
        if (S.escapeChar !== void 0 && (L = S.escapeChar), (typeof w != "string" || -1 < c.BAD_DELIMITERS.indexOf(w)) && (w = ","), z === w) throw new Error("Comment character same as delimiter");
        z === !0 ? z = "#" : (typeof z != "string" || -1 < c.BAD_DELIMITERS.indexOf(z)) && (z = !1), N !== `
` && N !== "\r" && N !== `\r
` && (N = `
`);
        var Y = 0, U = !1;
        this.parse = function(J, M, P) {
          if (typeof J != "string") throw new Error("Input must be a string");
          var K = J.length, ee = w.length, H = N.length, me = z.length, Ee = R(E), oe = [], le = [], de = [], he = Y = 0;
          if (!J) return W();
          if (v || v !== !1 && J.indexOf(te) === -1) {
            for (var be = J.split(N), xe = 0; xe < be.length; xe++) {
              if (de = be[xe], Y += de.length, xe !== be.length - 1) Y += N.length;
              else if (P) return W();
              if (!z || de.substring(0, me) !== z) {
                if (Ee) {
                  if (oe = [], B(de.split(w)), re(), U) return W();
                } else B(de.split(w));
                if (D && D <= xe) return oe = oe.slice(0, D), W(!0);
              }
            }
            return W();
          }
          for (var g = J.indexOf(w, Y), X = J.indexOf(N, Y), V = new RegExp(b(L) + b(te), "g"), A = J.indexOf(te, Y); ; ) if (J[Y] === te) for (A = Y, Y++; ; ) {
            if ((A = J.indexOf(te, A + 1)) === -1) return P || le.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: oe.length, index: Y }), ie();
            if (A === K - 1) return ie(J.substring(Y, A).replace(V, te));
            if (te === L && J[A + 1] === L) A++;
            else if (te === L || A === 0 || J[A - 1] !== L) {
              g !== -1 && g < A + 1 && (g = J.indexOf(w, A + 1));
              var T = ne((X = X !== -1 && X < A + 1 ? J.indexOf(N, A + 1) : X) === -1 ? g : Math.min(g, X));
              if (J.substr(A + 1 + T, ee) === w) {
                de.push(J.substring(Y, A).replace(V, te)), J[Y = A + 1 + T + ee] !== te && (A = J.indexOf(te, Y)), g = J.indexOf(w, Y), X = J.indexOf(N, Y);
                break;
              }
              if (T = ne(X), J.substring(A + 1 + T, A + 1 + T + H) === N) {
                if (de.push(J.substring(Y, A).replace(V, te)), G(A + 1 + T + H), g = J.indexOf(w, Y), A = J.indexOf(te, Y), Ee && (re(), U)) return W();
                if (D && oe.length >= D) return W(!0);
                break;
              }
              le.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: oe.length, index: Y }), A++;
            }
          }
          else if (z && de.length === 0 && J.substring(Y, Y + me) === z) {
            if (X === -1) return W();
            Y = X + H, X = J.indexOf(N, Y), g = J.indexOf(w, Y);
          } else if (g !== -1 && (g < X || X === -1)) de.push(J.substring(Y, g)), Y = g + ee, g = J.indexOf(w, Y);
          else {
            if (X === -1) break;
            if (de.push(J.substring(Y, X)), G(X + H), Ee && (re(), U)) return W();
            if (D && oe.length >= D) return W(!0);
          }
          return ie();
          function B(Q) {
            oe.push(Q), he = Y;
          }
          function ne(Q) {
            var ae = 0;
            return ae = Q !== -1 && (Q = J.substring(A + 1, Q)) && Q.trim() === "" ? Q.length : ae;
          }
          function ie(Q) {
            return P || (Q === void 0 && (Q = J.substring(Y)), de.push(Q), Y = K, B(de), Ee && re()), W();
          }
          function G(Q) {
            Y = Q, B(de), de = [], X = J.indexOf(N, Y);
          }
          function W(Q) {
            if (S.header && !M && oe.length) {
              var ae = oe[0], pe = {}, _e = new Set(ae);
              let Be = !1;
              for (let je = 0; je < ae.length; je++) {
                let ke = ae[je];
                if (pe[ke = R(S.transformHeader) ? S.transformHeader(ke, je) : ke]) {
                  let Ve, Re = pe[ke];
                  for (; Ve = ke + "_" + Re, Re++, _e.has(Ve); ) ;
                  _e.add(Ve), ae[je] = Ve, pe[ke]++, Be = !0, (j = j === null ? {} : j)[Ve] = ke;
                } else pe[ke] = 1, ae[je] = ke;
                _e.add(ke);
              }
              Be && console.warn("Duplicate headers found and renamed.");
            }
            return { data: oe, errors: le, meta: { delimiter: w, linebreak: N, aborted: U, truncated: !!Q, cursor: he + (M || 0), renamedHeaders: j } };
          }
          function re() {
            E(W()), oe = [], le = [];
          }
        }, this.abort = function() {
          U = !0;
        }, this.getCharIndex = function() {
          return Y;
        };
      }
      function _(S) {
        var w = S.data, N = s[w.workerId], z = !1;
        if (w.error) N.userError(w.error, w.file);
        else if (w.results && w.results.data) {
          var E = { abort: function() {
            z = !0, x(w.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: O, resume: O };
          if (R(N.userStep)) {
            for (var D = 0; D < w.results.data.length && (N.userStep({ data: w.results.data[D], errors: w.results.errors, meta: w.results.meta }, E), !z); D++) ;
            delete w.results;
          } else R(N.userChunk) && (N.userChunk(w.results, E, w.file), delete w.results);
        }
        w.finished && !z && x(w.workerId, w.results);
      }
      function x(S, w) {
        var N = s[S];
        R(N.userComplete) && N.userComplete(w), N.terminate(), delete s[S];
      }
      function O() {
        throw new Error("Not implemented.");
      }
      function C(S) {
        if (typeof S != "object" || S === null) return S;
        var w, N = Array.isArray(S) ? [] : {};
        for (w in S) N[w] = C(S[w]);
        return N;
      }
      function F(S, w) {
        return function() {
          S.apply(w, arguments);
        };
      }
      function R(S) {
        return typeof S == "function";
      }
      return c.parse = function(S, w) {
        var N = (w = w || {}).dynamicTyping || !1;
        if (R(N) && (w.dynamicTypingFunction = N, N = {}), w.dynamicTyping = N, w.transform = !!R(w.transform) && w.transform, !w.worker || !c.WORKERS_SUPPORTED) return N = null, c.NODE_STREAM_INPUT, typeof S == "string" ? (S = ((z) => z.charCodeAt(0) !== 65279 ? z : z.slice(1))(S), N = new (w.download ? f : h)(w)) : S.readable === !0 && R(S.read) && R(S.on) ? N = new m(w) : (n.File && S instanceof File || S instanceof Object) && (N = new d(w)), N.stream(S);
        (N = (() => {
          var z;
          return !!c.WORKERS_SUPPORTED && (z = (() => {
            var E = n.URL || n.webkitURL || null, D = r.toString();
            return c.BLOB_URL || (c.BLOB_URL = E.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", D, ")();"], { type: "text/javascript" })));
          })(), (z = new n.Worker(z)).onmessage = _, z.id = u++, s[z.id] = z);
        })()).userStep = w.step, N.userChunk = w.chunk, N.userComplete = w.complete, N.userError = w.error, w.step = R(w.step), w.chunk = R(w.chunk), w.complete = R(w.complete), w.error = R(w.error), delete w.worker, N.postMessage({ input: S, config: w, workerId: N.id });
      }, c.unparse = function(S, w) {
        var N = !1, z = !0, E = ",", D = `\r
`, v = '"', j = v + v, te = !1, L = null, Y = !1, U = ((() => {
          if (typeof w == "object") {
            if (typeof w.delimiter != "string" || c.BAD_DELIMITERS.filter(function(P) {
              return w.delimiter.indexOf(P) !== -1;
            }).length || (E = w.delimiter), typeof w.quotes != "boolean" && typeof w.quotes != "function" && !Array.isArray(w.quotes) || (N = w.quotes), typeof w.skipEmptyLines != "boolean" && typeof w.skipEmptyLines != "string" || (te = w.skipEmptyLines), typeof w.newline == "string" && (D = w.newline), typeof w.quoteChar == "string" && (v = w.quoteChar), typeof w.header == "boolean" && (z = w.header), Array.isArray(w.columns)) {
              if (w.columns.length === 0) throw new Error("Option columns is empty");
              L = w.columns;
            }
            w.escapeChar !== void 0 && (j = w.escapeChar + v), w.escapeFormulae instanceof RegExp ? Y = w.escapeFormulae : typeof w.escapeFormulae == "boolean" && w.escapeFormulae && (Y = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(b(v), "g"));
        if (typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S)) {
          if (!S.length || Array.isArray(S[0])) return J(null, S, te);
          if (typeof S[0] == "object") return J(L || Object.keys(S[0]), S, te);
        } else if (typeof S == "object") return typeof S.data == "string" && (S.data = JSON.parse(S.data)), Array.isArray(S.data) && (S.fields || (S.fields = S.meta && S.meta.fields || L), S.fields || (S.fields = Array.isArray(S.data[0]) ? S.fields : typeof S.data[0] == "object" ? Object.keys(S.data[0]) : []), Array.isArray(S.data[0]) || typeof S.data[0] == "object" || (S.data = [S.data])), J(S.fields || [], S.data || [], te);
        throw new Error("Unable to serialize unrecognized input");
        function J(P, K, ee) {
          var H = "", me = (typeof P == "string" && (P = JSON.parse(P)), typeof K == "string" && (K = JSON.parse(K)), Array.isArray(P) && 0 < P.length), Ee = !Array.isArray(K[0]);
          if (me && z) {
            for (var oe = 0; oe < P.length; oe++) 0 < oe && (H += E), H += M(P[oe], oe);
            0 < K.length && (H += D);
          }
          for (var le = 0; le < K.length; le++) {
            var de = (me ? P : K[le]).length, he = !1, be = me ? Object.keys(K[le]).length === 0 : K[le].length === 0;
            if (ee && !me && (he = ee === "greedy" ? K[le].join("").trim() === "" : K[le].length === 1 && K[le][0].length === 0), ee === "greedy" && me) {
              for (var xe = [], g = 0; g < de; g++) {
                var X = Ee ? P[g] : g;
                xe.push(K[le][X]);
              }
              he = xe.join("").trim() === "";
            }
            if (!he) {
              for (var V = 0; V < de; V++) {
                0 < V && !be && (H += E);
                var A = me && Ee ? P[V] : V;
                H += M(K[le][A], V);
              }
              le < K.length - 1 && (!ee || 0 < de && !be) && (H += D);
            }
          }
          return H;
        }
        function M(P, K) {
          var ee, H;
          return P == null ? "" : P.constructor === Date ? JSON.stringify(P).slice(1, 25) : (H = !1, Y && typeof P == "string" && Y.test(P) && (P = "'" + P, H = !0), ee = P.toString().replace(U, j), (H = H || N === !0 || typeof N == "function" && N(P, K) || Array.isArray(N) && N[K] || ((me, Ee) => {
            for (var oe = 0; oe < Ee.length; oe++) if (-1 < me.indexOf(Ee[oe])) return !0;
            return !1;
          })(ee, c.BAD_DELIMITERS) || -1 < ee.indexOf(E) || ee.charAt(0) === " " || ee.charAt(ee.length - 1) === " ") ? v + ee + v : ee);
        }
      }, c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !a && !!n.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = y, c.ParserHandle = p, c.NetworkStreamer = f, c.FileStreamer = d, c.StringStreamer = h, c.ReadableStreamStreamer = m, n.jQuery && ((i = n.jQuery).fn.parse = function(S) {
        var w = S.config || {}, N = [];
        return this.each(function(D) {
          if (!(i(this).prop("tagName").toUpperCase() === "INPUT" && i(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var v = 0; v < this.files.length; v++) N.push({ file: this.files[v], inputElem: this, instanceConfig: i.extend({}, w) });
        }), z(), this;
        function z() {
          if (N.length === 0) R(S.complete) && S.complete();
          else {
            var D, v, j, te, L = N[0];
            if (R(S.before)) {
              var Y = S.before(L.file, L.inputElem);
              if (typeof Y == "object") {
                if (Y.action === "abort") return D = "AbortError", v = L.file, j = L.inputElem, te = Y.reason, void (R(S.error) && S.error({ name: D }, v, j, te));
                if (Y.action === "skip") return void E();
                typeof Y.config == "object" && (L.instanceConfig = i.extend(L.instanceConfig, Y.config));
              } else if (Y === "skip") return void E();
            }
            var U = L.instanceConfig.complete;
            L.instanceConfig.complete = function(J) {
              R(U) && U(J, L.file, L.inputElem), E();
            }, c.parse(L.file, L.instanceConfig);
          }
        }
        function E() {
          N.splice(0, 1), z();
        }
      }), o && (n.onmessage = function(S) {
        S = S.data, c.WORKER_ID === void 0 && S && (c.WORKER_ID = S.workerId), typeof S.input == "string" ? n.postMessage({ workerId: c.WORKER_ID, results: c.parse(S.input, S.config), finished: !0 }) : (n.File && S.input instanceof File || S.input instanceof Object) && (S = c.parse(S.input, S.config)) && n.postMessage({ workerId: c.WORKER_ID, results: S, finished: !0 });
      }), (f.prototype = Object.create(l.prototype)).constructor = f, (d.prototype = Object.create(l.prototype)).constructor = d, (h.prototype = Object.create(h.prototype)).constructor = h, (m.prototype = Object.create(l.prototype)).constructor = m, c;
    });
  }(bi)), bi.exports;
}
var vO = gO();
const iT = /* @__PURE__ */ nn(vO);
export {
  _O as A,
  wO as B,
  a0 as C,
  un as D,
  nT as E,
  Of as F,
  rT as G,
  bO as H,
  kO as I,
  HO as J,
  SO as K,
  xO as L,
  OO as M,
  NO as N,
  TO as O,
  iT as P,
  CO as Q,
  ZO as R,
  AO as S,
  RO as T,
  EO as U,
  IO as V,
  KO as _,
  qO as a,
  UO as b,
  lt as c,
  DO as d,
  Ii as e,
  JO as f,
  MO as g,
  FO as h,
  LO as i,
  eT as j,
  tT as k,
  Ya as l,
  se as m,
  YO as n,
  QO as o,
  GO as p,
  Nn as q,
  XO as r,
  BO as s,
  PO as t,
  WO as u,
  jO as v,
  zO as w,
  xr as x,
  nn as y,
  $O as z
};

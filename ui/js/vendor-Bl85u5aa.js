var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField = (obj, key, value2) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
var _a;
function _defineProperty$1(e2, r2, t2) {
  return (r2 = _toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function ownKeys$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty$1(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _toPrimitive(t2, r2) {
  if ("object" != typeof t2 || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
const noop = () => {
};
let _WINDOW = {};
let _DOCUMENT = {};
let _MUTATION_OBSERVER = null;
let _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined") _WINDOW = window;
  if (typeof document !== "undefined") _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined") _PERFORMANCE = performance;
} catch (e2) {
}
const {
  userAgent = ""
} = _WINDOW.navigator || {};
const WINDOW = _WINDOW;
const DOCUMENT = _DOCUMENT;
const MUTATION_OBSERVER = _MUTATION_OBSERVER;
const PERFORMANCE = _PERFORMANCE;
!!WINDOW.document;
const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === "function" && typeof DOCUMENT.createElement === "function";
const IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var p$1 = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, g = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
var S = {
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
}, A = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, P$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var s$1 = "classic", t$1 = "duotone", r$1 = "sharp", o$1 = "sharp-duotone", L = [s$1, t$1, r$1, o$1];
var G = {
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
};
var lt = {
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
};
var pt = /* @__PURE__ */ new Map([["classic", {
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
}]]), xt = {
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
};
var Ft = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], St = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, At = ["kit"];
var Ct = {
  kit: {
    "fa-kit": "fak"
  }
};
var Lt = ["fak", "fakd"], Wt = {
  kit: {
    fak: "fa-kit"
  }
};
var Et = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
var t$1$1 = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, r$1$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"];
var bt$1 = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
var Yt = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
};
var ua = {
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
}, I$1 = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ga = {
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
}, x$1 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], Ia = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...r$1$1, ...x$1], m$1 = ["solid", "regular", "light", "thin", "duotone", "brands"], c$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], F$1 = c$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ma = [...Object.keys(I$1), ...m$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1$1.GROUP, t$1$1.SWAP_OPACITY, t$1$1.PRIMARY, t$1$1.SECONDARY].concat(c$1.map((a2) => "".concat(a2, "x"))).concat(F$1.map((a2) => "w-".concat(a2)));
var wa = {
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
const NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
const UNITS_IN_GRID = 16;
const DEFAULT_CSS_PREFIX = "fa";
const DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
const DATA_FA_I2SVG = "data-fa-i2svg";
const DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
const DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
const DATA_PREFIX = "data-prefix";
const DATA_ICON = "data-icon";
const HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
const MUTATION_APPROACH_ASYNC = "async";
const TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
const PRODUCTION = (() => {
  try {
    return true;
  } catch (e$$1) {
    return false;
  }
})();
function familyProxy(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      return prop in target ? target[prop] : target[s$1];
    }
  });
}
const _PREFIX_TO_STYLE = _objectSpread2({}, S);
_PREFIX_TO_STYLE[s$1] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  "fa-duotone": "duotone"
}), S[s$1]), St["kit"]), St["kit-duotone"]);
const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
const _STYLE_TO_PREFIX = _objectSpread2({}, xt);
_STYLE_TO_PREFIX[s$1] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  duotone: "fad"
}), _STYLE_TO_PREFIX[s$1]), Et["kit"]), Et["kit-duotone"]);
const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
const _PREFIX_TO_LONG_STYLE = _objectSpread2({}, ga);
_PREFIX_TO_LONG_STYLE[s$1] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[s$1]), Wt["kit"]);
const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
const _LONG_STYLE_TO_PREFIX = _objectSpread2({}, ua);
_LONG_STYLE_TO_PREFIX[s$1] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[s$1]), Ct["kit"]);
familyProxy(_LONG_STYLE_TO_PREFIX);
const ICON_SELECTION_SYNTAX_PATTERN = p$1;
const LAYERS_TEXT_CLASSNAME = "fa-layers-text";
const FONT_FAMILY_PATTERN = g;
const _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, G);
familyProxy(_FONT_WEIGHT_TO_PREFIX);
const ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
const DUOTONE_CLASSES = A;
const RESERVED_CLASSES = [...At, ...ma];
const initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "") return true;
  if (val === "false") return false;
  if (val === "true") return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === "function") {
  const attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach((_ref) => {
    let [attr, key] = _ref;
    const val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
const _default = {
  styleDefault: "solid",
  familyDefault: s$1,
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
const _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
const config$1 = {};
Object.keys(_default).forEach((key) => {
  Object.defineProperty(config$1, key, {
    enumerable: true,
    set: function(val) {
      _config[key] = val;
      _onChangeCb.forEach((cb) => cb(config$1));
    },
    get: function() {
      return _config[key];
    }
  });
});
Object.defineProperty(config$1, "familyPrefix", {
  enumerable: true,
  set: function(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach((cb) => cb(config$1));
  },
  get: function() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config$1;
const _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return () => {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
const d$2 = UNITS_IN_GRID;
const meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  const style = DOCUMENT.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css2;
  const headChildren = DOCUMENT.head.childNodes;
  let beforeChild = null;
  for (let i2 = headChildren.length - 1; i2 > -1; i2--) {
    const child = headChildren[i2];
    const tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css2;
}
const idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId() {
  let size = 12;
  let id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray$1(obj) {
  const array = [];
  for (let i2 = (obj || []).length >>> 0; i2--; ) {
    array[i2] = obj[i2];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray$1(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter((i2) => i2);
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce((acc, attributeName) => {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce((acc, styleName) => {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  let {
    transform,
    containerWidth,
    iconWidth
  } = _ref;
  const outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  const inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  const path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  let {
    transform,
    width = UNITS_IN_GRID,
    height = UNITS_IN_GRID,
    startCentered = false
  } = _ref2;
  let val = "";
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
  }
  val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';
function css() {
  const dcp = DEFAULT_CSS_PREFIX;
  const drc = DEFAULT_REPLACEMENT_CLASS;
  const fp = config$1.cssPrefix;
  const rc = config$1.replacementClass;
  let s2 = baseStyles;
  if (fp !== dcp || rc !== drc) {
    const dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    const rPatt = new RegExp("\\.".concat(drc), "g");
    s2 = s2.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s2;
}
let _cssInserted = false;
function ensureCss() {
  if (config$1.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg() {
        ensureCss();
      }
    };
  }
};
const w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];
const functions = [];
const listener = function() {
  DOCUMENT.removeEventListener("DOMContentLoaded", listener);
  loaded = 1;
  functions.map((fn) => fn());
};
let loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener("DOMContentLoaded", listener);
}
function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  const {
    tag,
    attributes = {},
    children = []
  } = abstractNodes;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys2 = Object.keys(subject), length = keys2.length, iterator = fn, i2, key, result;
  if (initialValue === void 0) {
    i2 = 1;
    result = subject[keys2[0]];
  } else {
    i2 = 0;
    result = initialValue;
  }
  for (; i2 < length; i2++) {
    key = keys2[i2];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function ucs2decode(string) {
  const output = [];
  let counter2 = 0;
  const length = string.length;
  while (counter2 < length) {
    const value2 = string.charCodeAt(counter2++);
    if (value2 >= 55296 && value2 <= 56319 && counter2 < length) {
      const extra = string.charCodeAt(counter2++);
      if ((extra & 64512) == 56320) {
        output.push(((value2 & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value2);
        counter2--;
      }
    } else {
      output.push(value2);
    }
  }
  return output;
}
function toHex(unicode) {
  const decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  const size = string.length;
  let first = string.charCodeAt(index);
  let second;
  if (first >= 55296 && first <= 56319 && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce((acc, iconName) => {
    const icon2 = icons[iconName];
    const expanded = !!icon2.icon;
    if (expanded) {
      acc[icon2.iconName] = icon2.icon;
    } else {
      acc[iconName] = icon2;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks = false
  } = params;
  const normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
const {
  styles: styles$1,
  shims
} = namespace;
const FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
const PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce((acc, familyId) => {
  acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
  return acc;
}, {});
let _defaultUsablePrefix = null;
let _byUnicode = {};
let _byLigature = {};
let _byOldName = {};
let _byOldUnicode = {};
let _byAlias = {};
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  const parts2 = cls.split("-");
  const prefix = parts2[0];
  const iconName = parts2.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
const build = () => {
  const lookup2 = (reducer) => {
    return reduce(styles$1, (o$$1, style, prefix) => {
      o$$1[prefix] = reduce(style, reducer, {});
      return o$$1;
    }, {});
  };
  _byUnicode = lookup2((acc, icon2, iconName) => {
    if (icon2[3]) {
      acc[icon2[3]] = iconName;
    }
    if (icon2[2]) {
      const aliases2 = icon2[2].filter((a$$1) => {
        return typeof a$$1 === "number";
      });
      aliases2.forEach((alias) => {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup2((acc, icon2, iconName) => {
    acc[iconName] = iconName;
    if (icon2[2]) {
      const aliases2 = icon2[2].filter((a$$1) => {
        return typeof a$$1 === "string";
      });
      aliases2.forEach((alias) => {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup2((acc, icon2, iconName) => {
    const aliases2 = icon2[2];
    acc[iconName] = iconName;
    aliases2.forEach((alias) => {
      acc[alias] = iconName;
    });
    return acc;
  });
  const hasRegular = "far" in styles$1 || config$1.autoFetchSvg;
  const shimLookups = reduce(shims, (acc, shim) => {
    const maybeNameMaybeUnicode = shim[0];
    let prefix = shim[1];
    const iconName = shim[2];
    if (prefix === "far" && !hasRegular) {
      prefix = "fas";
    }
    if (typeof maybeNameMaybeUnicode === "string") {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === "number") {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config$1.styleDefault, {
    family: config$1.familyDefault
  });
};
onChange((c$$1) => {
  _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
    family: config$1.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  const oldUnicode = _byOldUnicode[unicode];
  const newUnicode = byUnicode("fas", unicode);
  return oldUnicode || (newUnicode ? {
    prefix: "fas",
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
const emptyCanonicalIcon = () => {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getFamilyId(values) {
  let family = s$1;
  const famProps = FAMILY_NAMES.reduce((acc, familyId) => {
    acc[familyId] = "".concat(config$1.cssPrefix, "-").concat(familyId);
    return acc;
  }, {});
  L.forEach((familyId) => {
    if (values.includes(famProps[familyId]) || values.some((v$$1) => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
      family = familyId;
    }
  });
  return family;
}
function getCanonicalPrefix(styleOrPrefix) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family = s$1
  } = params;
  const style = PREFIX_TO_STYLE[family][styleOrPrefix];
  if (family === t$1 && !styleOrPrefix) {
    return "fad";
  }
  const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  const result = prefix || defined || null;
  return result;
}
function moveNonFaClassesToRest(classNames) {
  let rest = [];
  let iconName = null;
  classNames.forEach((cls) => {
    const result = getIconName(config$1.cssPrefix, cls);
    if (result) {
      iconName = result;
    } else if (cls) {
      rest.push(cls);
    }
  });
  return {
    iconName,
    rest
  };
}
function sortedUniqueValues(arr) {
  return arr.sort().filter((value2, index, arr2) => {
    return arr2.indexOf(value2) === index;
  });
}
function getCanonicalIcon(values) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups = false
  } = params;
  let givenPrefix = null;
  const faCombinedClasses = Ia.concat(bt$1);
  const faStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls) => faCombinedClasses.includes(cls)));
  const nonStyleOrFamilyClasses = sortedUniqueValues(values.filter((cls) => !Ia.includes(cls)));
  const faStyles = faStyleOrFamilyClasses.filter((cls) => {
    givenPrefix = cls;
    return !P$1.includes(cls);
  });
  const [styleFromValues = null] = faStyles;
  const family = getFamilyId(faStyleOrFamilyClasses);
  const canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
    prefix: getCanonicalPrefix(styleFromValues, {
      family
    })
  });
  return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
    values,
    family,
    styles: styles$1,
    config: config$1,
    canonical,
    givenPrefix
  })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
  let {
    prefix,
    iconName
  } = canonical;
  if (skipLookups || !prefix || !iconName) {
    return {
      prefix,
      iconName
    };
  }
  const shim = givenPrefix === "fa" ? byOldName(iconName) : {};
  const aliasIconName = byAlias(prefix, iconName);
  iconName = shim.iconName || aliasIconName || iconName;
  prefix = shim.prefix || prefix;
  if (prefix === "far" && !styles$1["far"] && styles$1["fas"] && !config$1.autoFetchSvg) {
    prefix = "fas";
  }
  return {
    prefix,
    iconName
  };
}
const newCanonicalFamilies = L.filter((familyId) => {
  return familyId !== s$1 || familyId !== t$1;
});
const newCanonicalStyles = Object.keys(ga).filter((key) => key !== s$1).map((key) => Object.keys(ga[key])).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
  const {
    values,
    family,
    canonical,
    givenPrefix = "",
    styles: styles2 = {},
    config: config$$1 = {}
  } = prefixOptions;
  const isDuotoneFamily = family === t$1;
  const valuesHasDuotone = values.includes("fa-duotone") || values.includes("fad");
  const defaultFamilyIsDuotone = config$$1.familyDefault === "duotone";
  const canonicalPrefixIsDuotone = canonical.prefix === "fad" || canonical.prefix === "fa-duotone";
  if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
    canonical.prefix = "fad";
  }
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
    const validPrefix = Object.keys(styles2).find((key) => newCanonicalStyles.includes(key));
    if (validPrefix || config$$1.autoFetchSvg) {
      const defaultPrefix = pt.get(family).defaultShortPrefixId;
      canonical.prefix = defaultPrefix;
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
class Library {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
      definitions[_key] = arguments[_key];
    }
    const additions = definitions.reduce(this._pullDefinitions, {});
    Object.keys(additions).forEach((key) => {
      this.definitions[key] = _objectSpread2(_objectSpread2({}, this.definitions[key] || {}), additions[key]);
      defineIcons(key, additions[key]);
      const longPrefix = PREFIX_TO_LONG_STYLE[s$1][key];
      if (longPrefix) defineIcons(longPrefix, additions[key]);
      build();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(additions, definition) {
    const normalized = definition.prefix && definition.iconName && definition.icon ? {
      0: definition
    } : definition;
    Object.keys(normalized).map((key) => {
      const {
        prefix,
        iconName,
        icon: icon2
      } = normalized[key];
      const aliases2 = icon2[2];
      if (!additions[prefix]) additions[prefix] = {};
      if (aliases2.length > 0) {
        aliases2.forEach((alias) => {
          if (typeof alias === "string") {
            additions[prefix][alias] = icon2;
          }
        });
      }
      additions[prefix][iconName] = icon2;
    });
    return additions;
  }
}
let _plugins = [];
let _hooks = {};
const providers = {};
const defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  let {
    mixoutsTo: obj
  } = _ref;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach((k) => {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach((plugin) => {
    const mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach((tk) => {
      if (typeof mixout[tk] === "function") {
        obj[tk] = mixout[tk];
      }
      if (typeof mixout[tk] === "object") {
        Object.keys(mixout[tk]).forEach((sk) => {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      const hooks = plugin.hooks();
      Object.keys(hooks).forEach((hook) => {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach((hookFn) => {
    accumulator = hookFn.apply(null, [accumulator, ...args]);
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach((hookFn) => {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  const hook = arguments[0];
  const args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  let {
    iconName
  } = iconLookup;
  const prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
const library = new Library();
const noAuto = () => {
  config$1.autoReplaceSvg = false;
  config$1.observeMutations = false;
  callHooks("noAuto");
};
const dom = {
  i2svg: function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (IS_DOM) {
      callHooks("beforeI2svg", params);
      callProvided("pseudoElements2svg", params);
      return callProvided("i2svg", params);
    } else {
      return Promise.reject(new Error("Operation requires a DOM of some kind."));
    }
  },
  watch: function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot
    } = params;
    if (config$1.autoReplaceSvg === false) {
      config$1.autoReplaceSvg = true;
    }
    config$1.observeMutations = true;
    domready(() => {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks("watch", params);
    });
  }
};
const parse$2 = {
  icon: (icon2) => {
    if (icon2 === null) {
      return null;
    }
    if (typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
      return {
        prefix: icon2.prefix,
        iconName: byAlias(icon2.prefix, icon2.iconName) || icon2.iconName
      };
    }
    if (Array.isArray(icon2) && icon2.length === 2) {
      const iconName = icon2[1].indexOf("fa-") === 0 ? icon2[1].slice(3) : icon2[1];
      const prefix = getCanonicalPrefix(icon2[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof icon2 === "string" && (icon2.indexOf("".concat(config$1.cssPrefix, "-")) > -1 || icon2.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      const canonicalIcon = getCanonicalIcon(icon2.split(" "), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof icon2 === "string") {
      const prefix = getDefaultUsablePrefix();
      return {
        prefix,
        iconName: byAlias(prefix, icon2) || icon2
      };
    }
  }
};
const api = {
  noAuto,
  config: config$1,
  dom,
  parse: parse$2,
  library,
  findIconDefinition,
  toHtml
};
const autoReplace = function() {
  let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot = DOCUMENT
  } = params;
  if ((Object.keys(namespace.styles).length > 0 || config$1.autoFetchSvg) && IS_DOM && config$1.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function() {
      return val.abstract.map((a2) => toHtml(a2));
    }
  });
  Object.defineProperty(val, "node", {
    get: function() {
      if (!IS_DOM) return;
      const container = DOCUMENT.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref) {
  let {
    children,
    main,
    mask,
    attributes,
    styles: styles2,
    transform
  } = _ref;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    const {
      width,
      height
    } = main;
    const offset2 = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(_objectSpread2(_objectSpread2({}, styles2), {}, {
      "transform-origin": "".concat(offset2.x + transform.x / 16, "em ").concat(offset2.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref) {
  let {
    prefix,
    iconName,
    children,
    attributes,
    symbol
  } = _ref;
  const id = symbol === true ? "".concat(prefix, "-").concat(config$1.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  const {
    icons: {
      main,
      mask
    },
    prefix,
    iconName,
    transform,
    symbol,
    title,
    maskId,
    titleId,
    extra,
    watchable = false
  } = params;
  const {
    width,
    height
  } = mask.found ? mask : main;
  const isUploadedIcon = Lt.includes(prefix);
  const attrClass = [config$1.replacementClass, iconName ? "".concat(config$1.cssPrefix, "-").concat(iconName) : ""].filter((c$$1) => extra.classes.indexOf(c$$1) === -1).filter((c$$1) => c$$1 !== "" || !!c$$1).concat(extra.classes).join(" ");
  let content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) {
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  const args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
  });
  const {
    children,
    attributes
  } = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  };
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  const {
    content,
    width,
    height,
    transform,
    title,
    extra,
    watchable = false
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  const styles2 = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  const styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  const val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  const {
    content,
    title,
    extra
  } = params;
  const attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
    "title": title
  } : {}), {}, {
    "class": extra.classes.join(" ")
  });
  const styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  const val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
const {
  styles: styles$1$1
} = namespace;
function asFoundIcon(icon2) {
  const width = icon2[0];
  const height = icon2[1];
  const [vectorData] = icon2.slice(4);
  let element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config$1.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config$1.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config$1.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
const missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config$1.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  let givenPrefix = prefix;
  if (prefix === "fa" && config$1.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise((resolve, reject) => {
    if (givenPrefix === "fa") {
      const shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1$1[prefix] && styles$1$1[prefix][iconName]) {
      const icon2 = styles$1$1[prefix][iconName];
      return resolve(asFoundIcon(icon2));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config$1.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
const noop$1 = () => {
};
const p$2 = config$1.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
const preamble = 'FA "6.7.2"';
const begin = (name) => {
  p$2.mark("".concat(preamble, " ").concat(name, " begins"));
  return () => end(name);
};
const end = (name) => {
  p$2.mark("".concat(preamble, " ").concat(name, " ends"));
  p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
const noop$2 = () => {
};
function isWatched(node) {
  const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === "string";
}
function hasPrefixAndIcon(node) {
  const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  const icon2 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon2;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config$1.replacementClass);
}
function getMutator() {
  if (config$1.autoReplaceSvg === true) {
    return mutators.replace;
  }
  const mutator = mutators[config$1.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn = abstractObj.tag === "svg" ? createElementNS : createElement
  } = params;
  if (typeof abstractObj === "string") {
    return DOCUMENT.createTextNode(abstractObj);
  }
  const tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  const children = abstractObj.children || [];
  children.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  let comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
const mutators = {
  replace: function(mutation) {
    const node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach((abstract) => {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config$1.keepOriginalSource) {
        let comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function(mutation) {
    const node = mutation[0];
    const abstract = mutation[1];
    if (~classArray(node).indexOf(config$1.replacementClass)) {
      return mutators.replace(mutation);
    }
    const forSvg = new RegExp("".concat(config$1.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      const splitClasses = abstract[0].attributes.class.split(" ").reduce((acc, cls) => {
        if (cls === config$1.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(" ");
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute("class");
      } else {
        node.setAttribute("class", splitClasses.toNode.join(" "));
      }
    }
    const newInnerHTML = abstract.map((a2) => toHtml(a2)).join("\n");
    node.setAttribute(DATA_FA_I2SVG, "");
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform$1(mutations, callback) {
  const callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    let frame = performOperationSync;
    if (config$1.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(() => {
      const mutator = getMutator();
      const mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
let disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
let mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config$1.observeMutations) {
    return;
  }
  const {
    treeCallback = noop$2,
    nodeCallback = noop$2,
    pseudoElementsCallback = noop$2,
    observeMutationsRoot = DOCUMENT
  } = options;
  mo = new MUTATION_OBSERVER((objects) => {
    if (disabled) return;
    const defaultPrefix = getDefaultUsablePrefix();
    toArray$1(objects).forEach((mutationRecord) => {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config$1.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config$1.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          const {
            prefix,
            iconName
          } = getCanonicalIcon(classArray(mutationRecord.target));
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}
function styleParser(node) {
  const style = node.getAttribute("style");
  let val = [];
  if (style) {
    val = style.split(";").reduce((acc, style2) => {
      const styles2 = style2.split(":");
      const prop = styles2[0];
      const value2 = styles2.slice(1);
      if (prop && value2.length > 0) {
        acc[prop] = value2.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  const existingPrefix = node.getAttribute("data-prefix");
  const existingIconName = node.getAttribute("data-icon");
  const innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  let val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config$1.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  const extraAttributes = toArray$1(node.attributes).reduce((acc, attr) => {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  const title = node.getAttribute("title");
  const titleId = node.getAttribute("data-fa-title-id");
  if (config$1.autoA11y) {
    if (title) {
      extraAttributes["aria-labelledby"] = "".concat(config$1.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes["aria-hidden"] = "true";
      extraAttributes["focusable"] = "false";
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
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
function parseMeta(node) {
  let parser2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  };
  const {
    iconName,
    prefix,
    rest: extraClasses
  } = classParser(node);
  const extraAttributes = attributesParser(node);
  const pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  let extraStyles = parser2.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName,
    title: node.getAttribute("title"),
    titleId: node.getAttribute("data-fa-title-id"),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
const {
  styles: styles$2
} = namespace;
function generateMutation(node) {
  const nodeMeta = config$1.autoReplaceSvg === "nest" ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
}
function getKnownPrefixes() {
  return [...Ft, ...Ia];
}
function onTree(root2) {
  let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  const htmlClassList = DOCUMENT.documentElement.classList;
  const hclAdd = (suffix) => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const hclRemove = (suffix) => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const prefixes = config$1.autoFetchSvg ? getKnownPrefixes() : P$1.concat(Object.keys(styles$2));
  if (!prefixes.includes("fa")) {
    prefixes.push("fa");
  }
  const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map((p$$1) => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  let candidates = [];
  try {
    candidates = toArray$1(root2.querySelectorAll(prefixesDomQuery));
  } catch (e$$1) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  const mark = perf.begin("onTree");
  const mutations = candidates.reduce((acc, node) => {
    try {
      const mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e$$1) {
      if (!PRODUCTION) {
        if (e$$1.name === "MissingIcon") {
          console.error(e$$1);
        }
      }
    }
    return acc;
  }, []);
  return new Promise((resolve, reject) => {
    Promise.all(mutations).then((resolvedMutations) => {
      perform$1(resolvedMutations, () => {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function") callback();
        mark();
        resolve();
      });
    }).catch((e$$1) => {
      mark();
      reject(e$$1);
    });
  });
}
function onNode(node) {
  let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then((mutation) => {
    if (mutation) {
      perform$1([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    let {
      mask
    } = params;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask
    }));
  };
}
const render = function(iconDefinition) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform = meaninglessTransform,
    symbol = false,
    mask = null,
    maskId = null,
    title = null,
    titleId = null,
    classes = [],
    attributes = {},
    styles: styles2 = {}
  } = params;
  if (!iconDefinition) return;
  const {
    prefix,
    iconName,
    icon: icon2
  } = iconDefinition;
  return domVariants(_objectSpread2({
    type: "icon"
  }, iconDefinition), () => {
    callHooks("beforeDOMElementCreation", {
      iconDefinition,
      params
    });
    if (config$1.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config$1.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon2),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides(providers$$1) {
    providers$$1.i2svg = function(params) {
      const {
        node = DOCUMENT,
        callback = () => {
        }
      } = params;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
      const {
        iconName,
        title,
        titleId,
        prefix,
        transform,
        symbol,
        mask,
        maskId,
        extra
      } = nodeMeta;
      return new Promise((resolve, reject) => {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then((_ref) => {
          let [main, mask2] = _ref;
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask: mask2
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function(_ref2) {
      let {
        children,
        attributes,
        main,
        transform,
        styles: styles2
      } = _ref2;
      const styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      let nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided("generateAbstractTransformGrouping", {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};
var Layers = {
  mixout() {
    return {
      layer(assembler) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes = []
        } = params;
        return domVariants({
          type: "layer"
        }, () => {
          callHooks("beforeDOMElementCreation", {
            assembler,
            params
          });
          let children = [];
          assembler((args) => {
            Array.isArray(args) ? args.map((a2) => {
              children = children.concat(a2.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: "span",
            attributes: {
              class: ["".concat(config$1.cssPrefix, "-layers"), ...classes].join(" ")
            },
            children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout() {
    return {
      counter(content) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title = null,
          classes = [],
          attributes = {},
          styles: styles2 = {}
        } = params;
        return domVariants({
          type: "counter",
          content
        }, () => {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config$1.cssPrefix, "-layers-counter"), ...classes]
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout() {
    return {
      text(content) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform = meaninglessTransform,
          title = null,
          classes = [],
          attributes = {},
          styles: styles2 = {}
        } = params;
        return domVariants({
          type: "text",
          content
        }, () => {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config$1.cssPrefix, "-layers-text"), ...classes]
            }
          });
        });
      }
    };
  },
  provides(providers$$1) {
    providers$$1.generateLayersText = function(node, nodeMeta) {
      const {
        title,
        transform,
        extra
      } = nodeMeta;
      let width = null;
      let height = null;
      if (IS_IE) {
        const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        const boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config$1.autoA11y && !title) {
        extra.attributes["aria-hidden"] = "true";
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};
const CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
const SECONDARY_UNICODE_RANGE = [1105920, 1112319];
const _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), lt), wa), Yt);
const FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
  acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
  return acc;
}, {});
const FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
  const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
  acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
  return acc;
}, {});
function hexValueFromContent(content) {
  const cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  const codePoint = codePointAt(cleaned, 0);
  const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function getPrefix(fontFamily, fontWeight) {
  const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase();
  const fontWeightInteger = parseInt(fontWeight);
  const fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
  return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
  const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise((resolve, reject) => {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve();
    }
    const children = toArray$1(node.children);
    const alreadyProcessedPseudoElement = children.filter((c$$1) => c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
    const styles2 = WINDOW.getComputedStyle(node, position);
    const fontFamily = styles2.getPropertyValue("font-family");
    const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
    const fontWeight = styles2.getPropertyValue("font-weight");
    const content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamilyMatch && content !== "none" && content !== "") {
      const content2 = styles2.getPropertyValue("content");
      let prefix = getPrefix(fontFamily, fontWeight);
      const {
        value: hexValue,
        isSecondary
      } = hexValueFromContent(content2);
      const isV4 = fontFamilyMatch[0].startsWith("FontAwesome");
      let iconName = byUnicode(prefix, hexValue);
      let iconIdentifier = iconName;
      if (isV4) {
        const iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        const meta = blankMeta();
        const {
          extra
        } = meta;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then((main) => {
          const abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          const element = DOCUMENT.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map((a$$1) => toHtml(a$$1)).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root2) {
  if (!IS_DOM) return;
  return new Promise((resolve, reject) => {
    const operations = toArray$1(root2.querySelectorAll("*")).filter(processable).map(replace);
    const end2 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(() => {
      end2();
      enableObservation();
      resolve();
    }).catch(() => {
      end2();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.pseudoElements2svg = function(params) {
      const {
        node = DOCUMENT
      } = params;
      if (config$1.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
let _unwatched = false;
var MutationObserver$1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        observe(chainHooks("mutationObserverCallbacks", {}));
      },
      noAuto() {
        disconnect();
      },
      watch(params) {
        const {
          observeMutationsRoot
        } = params;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks("mutationObserverCallbacks", {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
const parseTransformString = (transformString) => {
  let transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(" ").reduce((acc, n2) => {
    const parts2 = n2.toLowerCase().split("-");
    const first = parts2[0];
    let rest = parts2.slice(1).join("-");
    if (first && rest === "h") {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === "v") {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case "grow":
        acc.size = acc.size + rest;
        break;
      case "shrink":
        acc.size = acc.size - rest;
        break;
      case "left":
        acc.x = acc.x - rest;
        break;
      case "right":
        acc.x = acc.x + rest;
        break;
      case "up":
        acc.y = acc.y - rest;
        break;
      case "down":
        acc.y = acc.y + rest;
        break;
      case "rotate":
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout() {
    return {
      parse: {
        transform: (transformString) => {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const transformString = node.getAttribute("data-fa-transform");
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.generateAbstractTransformGrouping = function(_ref) {
      let {
        main,
        transform,
        containerWidth,
        iconWidth
      } = _ref;
      const outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      const inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      const path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      const operations = {
        outer,
        inner,
        path
      };
      return {
        tag: "g",
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: "g",
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
const ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(abstract) {
  let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = "black";
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === "g") {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var Masks = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const maskData = node.getAttribute("data-fa-mask");
        const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map((i2) => i2.trim()));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute("data-fa-mask-id");
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.generateAbstractMask = function(_ref) {
      let {
        children,
        attributes,
        main,
        mask,
        maskId: explicitMaskId,
        transform
      } = _ref;
      const {
        width: mainWidth,
        icon: mainPath
      } = main;
      const {
        width: maskWidth,
        icon: maskPath
      } = mask;
      const trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      const maskRect = {
        tag: "rect",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: "white"
        })
      };
      const maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      const maskInnerGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      const maskOuterGroup = {
        tag: "g",
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      const maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      const clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      const maskTag = {
        tag: "mask",
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [maskRect, maskOuterGroup]
      };
      const defs = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: "rect",
        attributes: _objectSpread2({
          fill: "currentColor",
          "clip-path": "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides(providers2) {
    let reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    providers2.missingIconAbstract = function() {
      const gChildren = [];
      const FILL = {
        fill: "currentColor"
      };
      const ANIMATION_BASE = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: "opacity"
      });
      const dot = {
        tag: "circle",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;1;1;0;1;"
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: "path",
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: reduceMotion ? [] : [{
          tag: "animate",
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      });
      if (!reduceMotion) {
        gChildren.push({
          tag: "path",
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: "0;0;1;1;0;0;"
            })
          }]
        });
      }
      return {
        tag: "g",
        attributes: {
          "class": "missing"
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const symbolData = node.getAttribute("data-fa-symbol");
        const symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
        accumulator["symbol"] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
api.noAuto;
api.config;
const library$1 = api.library;
api.dom;
const parse$1$1 = api.parse;
api.findIconDefinition;
api.toHtml;
const icon = api.icon;
api.layer;
api.text;
api.counter;
/*!
 * Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2024 Fonticons, Inc.
 */
const faArrowsLeftRight = {
  prefix: "fasr",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z"]
};
const faPlusLarge$1 = {
  prefix: "fasr",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M488 232l24 0 0 48-24 0-208 0 0 208 0 24-48 0 0-24 0-208L24 280 0 280l0-48 24 0 208 0 0-208 0-24 48 0 0 24 0 208 208 0z"]
};
const faExpand$1 = {
  prefix: "fasr",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M136 32l24 0 0 48-24 0L48 80l0 88 0 24L0 192l0-24L0 56 0 32l24 0 112 0zM0 344l0-24 48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 480 0 480l0-24L0 344zM424 32l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48 24 0 112 0zM400 344l0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48 24 0 88 0 0-88z"]
};
const faArrowsUpDown = {
  prefix: "fasr",
  iconName: "arrows-up-down",
  icon: [320, 512, ["arrows-v"], "f07d", "M177 18.2l-17-17-17 17-96 96-17 17L64 165.1l17-17 55-55 0 325.7-55-55-17-17L30.1 380.8l17 17 96 96 17 17 17-17 96-96 17-17L256 346.9l-17 17-55 55 0-325.7 55 55 17 17 33.9-33.9-17-17-96-96z"]
};
/*!
 * Font Awesome Pro 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 * Copyright 2024 Fonticons, Inc.
 */
const faSprayCan = {
  prefix: "fass",
  iconName: "spray-can",
  icon: [512, 512, [], "f5bd", "M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0zM256 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
};
const faImage = {
  prefix: "fass",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 32l512 0 0 448L0 480 0 32zM323.5 202.1L304 174.7l-19.5 27.3L196.2 325.6l-26.3-29.6L152 275.9l-17.9 20.2-64 72L64 374.9l0 9.1 0 8 0 24 24 0 72 0 24 0 32 0 24 0 184 0 24 0 0-24 0-8 0-7.7-4.5-6.3-120-168zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
};
const faFiles = {
  prefix: "fass",
  iconName: "files",
  icon: [448, 512, [], "e178", "M320 96l0 32 32 0 96 0 0 288L96 416 96 0 320 0l0 96zm128 0l-45.3 0L384 96l-32 0 0-32 0-18.7L352 0l32 32 32 32 32 32zM48 120l0 344 280 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0 0 24z"]
};
const faTrash = {
  prefix: "fass",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z"]
};
const faPlusLarge = {
  prefix: "fass",
  iconName: "plus-large",
  icon: [512, 512, [], "e59e", "M288 32l0-32L224 0l0 32 0 192L32 224 0 224l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-192 192 0 32 0 0-64-32 0-192 0 0-192z"]
};
const faCalculator = {
  prefix: "fass",
  iconName: "calculator",
  icon: [384, 512, [128425], "f1ec", "M384 0L0 0 0 512l384 0L384 0zM320 64l0 96L64 160l0-96 256 0zM64 192l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0zM64 384l160 0 0 64L64 448l0-64zM224 192l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm160-96l0 64-64 0 0-64 64 0zm-64 96l64 0 0 64-64 0 0-64zm64 96l0 64-64 0 0-64 64 0z"]
};
const faExpand = {
  prefix: "fass",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32L0 32 0 64l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 32zM64 352l0-32L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 32l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM448 352l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z"]
};
const faXmark = {
  prefix: "fass",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"]
};
const faHammer = {
  prefix: "fass",
  iconName: "hammer",
  icon: [576, 512, [128296], "f6e3", "M225.6 18.2L176 48l96 48 0 48L384 256l24-24 24 24-24 24 48 48L576 208l-48-48-24 24-24-24 24-24L405.5 37.5C381.5 13.5 348.9 0 315 0L291.5 0c-23.2 0-46 6.3-65.9 18.2zM0 416l96 96L330.7 248 264 181.3 0 416z"]
};
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value2) {
  var isOwn = hasOwnProperty$c.call(value2, symToStringTag$1), tag = value2[symToStringTag$1];
  try {
    value2[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag$1] = tag;
    } else {
      delete value2[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString(value2) {
  return nativeObjectToString.call(value2);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString(value2);
}
function isObjectLike(value2) {
  return value2 != null && typeof value2 == "object";
}
var symbolTag$1 = "[object Symbol]";
function isSymbol$1(value2) {
  return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag(value2) == symbolTag$1;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray$1 = Array.isArray;
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value2) {
  if (typeof value2 == "string") {
    return value2;
  }
  if (isArray$1(value2)) {
    return arrayMap(value2, baseToString) + "";
  }
  if (isSymbol$1(value2)) {
    return symbolToString ? symbolToString.call(value2) : "";
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -Infinity ? "-0" : result;
}
function isObject$2(value2) {
  var type3 = typeof value2;
  return value2 != null && (type3 == "object" || type3 == "function");
}
function identity(value2) {
  return value2;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value2) {
  if (!isObject$2(value2)) {
    return false;
  }
  var tag = baseGetTag(value2);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$d = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value2) {
  if (!isObject$2(value2) || isMasked(value2)) {
    return false;
  }
  var pattern = isFunction(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value2));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value2 = getValue(object, key);
  return baseIsNative(value2) ? value2 : void 0;
}
var WeakMap$1 = getNative(root, "WeakMap");
function apply$2(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value2) {
  return function() {
    return value2;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value2, length) {
  var type3 = typeof value2;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type3 == "number" || type3 != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length);
}
function baseAssignValue(object, key, value2) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value2,
      "writable": true
    });
  } else {
    object[key] = value2;
  }
}
function eq(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function assignValue(object, key, value2) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value2)) || value2 === void 0 && !(key in object)) {
    baseAssignValue(object, key, value2);
  }
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply$2(func, this, otherArgs);
  };
}
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value2) {
  return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
}
function isArrayLike(value2) {
  return value2 != null && isLength(value2.length) && !isFunction(value2);
}
function isIterateeCall(value2, index, object) {
  if (!isObject$2(object)) {
    return false;
  }
  var type3 = typeof index;
  if (type3 == "number" ? isArrayLike(object) && isIndex(index, object.length) : type3 == "string" && index in object) {
    return eq(object[index], value2);
  }
  return false;
}
var objectProto$b = Object.prototype;
function isPrototype(value2) {
  var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$b;
  return value2 === proto;
}
function baseTimes(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value2) {
  return isObjectLike(value2) && baseGetTag(value2) == argsTag$2;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value2) {
  return isObjectLike(value2) && hasOwnProperty$9.call(value2, "callee") && !propertyIsEnumerable$1.call(value2, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer$1 = moduleExports$1 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value2) {
  return isObjectLike(value2) && isLength(value2.length) && !!typedArrayTags[baseGetTag(value2)];
}
function baseUnary(func) {
  return function(value2) {
    return func(value2);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function arrayLikeKeys(value2, inherited) {
  var isArr = isArray$1(value2), isArg = !isArr && isArguments(value2), isBuff = !isArr && !isArg && isBuffer(value2), isType = !isArr && !isArg && !isBuff && isTypedArray(value2), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value2.length, String) : [], length = result.length;
  for (var key in value2) {
    if ((inherited || hasOwnProperty$8.call(value2, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value2, object) {
  if (isArray$1(value2)) {
    return false;
  }
  var type3 = typeof value2;
  if (type3 == "number" || type3 == "symbol" || type3 == "boolean" || value2 == null || isSymbol$1(value2)) {
    return true;
  }
  return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value2) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value2 === void 0 ? HASH_UNDEFINED$1 : value2;
  return this;
}
function Hash(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value2) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value2]);
  } else {
    data[index][1] = value2;
  }
  return this;
}
function ListCache(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value2) {
  var type3 = typeof value2;
  return type3 == "string" || type3 == "number" || type3 == "symbol" || type3 == "boolean" ? value2 !== "__proto__" : value2 === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value2) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value2);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key)) {
      return cache2.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache2.size === MAX_MEMOIZE_SIZE) {
      cache2.clear();
    }
    return key;
  });
  var cache2 = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toString$3(value2) {
  return value2 == null ? "" : baseToString(value2);
}
function castPath(value2, object) {
  if (isArray$1(value2)) {
    return value2;
  }
  return isKey(value2, object) ? [value2] : stringToPath(toString$3(value2));
}
function toKey(value2) {
  if (typeof value2 == "string" || isSymbol$1(value2)) {
    return value2;
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -Infinity ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush$1(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value2) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value2]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value2);
  this.size = data.size;
  return this;
}
function Stack(entries2) {
  var data = this.__data__ = new ListCache(entries2);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value2 = array[index];
    if (predicate(value2, index, array)) {
      result[resIndex++] = value2;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$4 = Object.prototype;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush$1(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
var DataView$1 = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1()) != mapTag$1 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$1 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value2) {
    var result = baseGetTag(value2), Ctor = result == objectTag$1 ? value2.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var Uint8Array$1 = root.Uint8Array;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value2) {
  this.__data__.set(value2, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value2) {
  return this.__data__.has(value2);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache2, key) {
  return cache2.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value2, key) {
    result[++index] = [key, value2];
  });
  return result;
}
function setToArray(set3) {
  var index = -1, result = Array(set3.size);
  set3.forEach(function(value2) {
    result[++index] = value2;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag$1 = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$3.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$2.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value2, other, bitmask, customizer, stack) {
  if (value2 === other) {
    return true;
  }
  if (value2 == null || other == null || !isObjectLike(value2) && !isObjectLike(other)) {
    return value2 !== value2 && other !== other;
  }
  return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments(object));
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
var defaults = baseRest(function(object, sources) {
  object = Object(object);
  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value2 = object[key];
      if (value2 === void 0 || eq(value2, objectProto$1[key]) && !hasOwnProperty$1.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}
function isEqual(value2, other) {
  return baseIsEqual(value2, other);
}
var numberTag = "[object Number]";
function isNumber(value2) {
  return typeof value2 == "number" || isObjectLike(value2) && baseGetTag(value2) == numberTag;
}
function isNaN$2(value2) {
  return isNumber(value2) && value2 != +value2;
}
function baseSet(object, path, value2, customizer) {
  if (!isObject$2(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value2;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = void 0;
      if (newValue === void 0) {
        newValue = isObject$2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function set(object, path, value2) {
  return object == null ? object : baseSet(object, path, value2);
}
const byteToHex = [];
for (let i2 = 0; i2 < 256; ++i2) {
  byteToHex.push((i2 + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset2 = 0) {
  return (byteToHex[arr[offset2 + 0]] + byteToHex[arr[offset2 + 1]] + byteToHex[arr[offset2 + 2]] + byteToHex[arr[offset2 + 3]] + "-" + byteToHex[arr[offset2 + 4]] + byteToHex[arr[offset2 + 5]] + "-" + byteToHex[arr[offset2 + 6]] + byteToHex[arr[offset2 + 7]] + "-" + byteToHex[arr[offset2 + 8]] + byteToHex[arr[offset2 + 9]] + "-" + byteToHex[arr[offset2 + 10]] + byteToHex[arr[offset2 + 11]] + byteToHex[arr[offset2 + 12]] + byteToHex[arr[offset2 + 13]] + byteToHex[arr[offset2 + 14]] + byteToHex[arr[offset2 + 15]]).toLowerCase();
}
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const native = { randomUUID };
function v4(options, buf, offset2) {
  var _a3;
  if (native.randomUUID && true && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? ((_a3 = options.rng) == null ? void 0 : _a3.call(options)) ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
if (typeof BigInt === "undefined") BigInt = function(n2) {
  if (isNaN(n2)) throw new Error("");
  return n2;
};
const C_ZERO = BigInt(0);
const C_ONE = BigInt(1);
const C_TWO = BigInt(2);
const C_FIVE = BigInt(5);
const C_TEN = BigInt(10);
const MAX_CYCLE_LEN = 2e3;
const P = {
  "s": C_ONE,
  "n": C_ZERO,
  "d": C_ONE
};
function assign(n2, s2) {
  try {
    n2 = BigInt(n2);
  } catch (e2) {
    throw InvalidParameter();
  }
  return n2 * s2;
}
function trunc(x) {
  return typeof x === "bigint" ? x : Math.floor(x);
}
function newFraction(n2, d) {
  if (d === C_ZERO) {
    throw DivisionByZero();
  }
  const f2 = Object.create(Fraction.prototype);
  f2["s"] = n2 < C_ZERO ? -C_ONE : C_ONE;
  n2 = n2 < C_ZERO ? -n2 : n2;
  const a2 = gcd(n2, d);
  f2["n"] = n2 / a2;
  f2["d"] = d / a2;
  return f2;
}
function factorize(num) {
  const factors = {};
  let n2 = num;
  let i2 = C_TWO;
  let s2 = C_FIVE - C_ONE;
  while (s2 <= n2) {
    while (n2 % i2 === C_ZERO) {
      n2 /= i2;
      factors[i2] = (factors[i2] || C_ZERO) + C_ONE;
    }
    s2 += C_ONE + C_TWO * i2++;
  }
  if (n2 !== num) {
    if (n2 > 1)
      factors[n2] = (factors[n2] || C_ZERO) + C_ONE;
  } else {
    factors[num] = (factors[num] || C_ZERO) + C_ONE;
  }
  return factors;
}
const parse$1 = function(p1, p2) {
  let n2 = C_ZERO, d = C_ONE, s2 = C_ONE;
  if (p1 === void 0 || p1 === null) ;
  else if (p2 !== void 0) {
    if (typeof p1 === "bigint") {
      n2 = p1;
    } else if (isNaN(p1)) {
      throw InvalidParameter();
    } else if (p1 % 1 !== 0) {
      throw NonIntegerParameter();
    } else {
      n2 = BigInt(p1);
    }
    if (typeof p2 === "bigint") {
      d = p2;
    } else if (isNaN(p2)) {
      throw InvalidParameter();
    } else if (p2 % 1 !== 0) {
      throw NonIntegerParameter();
    } else {
      d = BigInt(p2);
    }
    s2 = n2 * d;
  } else if (typeof p1 === "object") {
    if ("d" in p1 && "n" in p1) {
      n2 = BigInt(p1["n"]);
      d = BigInt(p1["d"]);
      if ("s" in p1)
        n2 *= BigInt(p1["s"]);
    } else if (0 in p1) {
      n2 = BigInt(p1[0]);
      if (1 in p1)
        d = BigInt(p1[1]);
    } else if (typeof p1 === "bigint") {
      n2 = p1;
    } else {
      throw InvalidParameter();
    }
    s2 = n2 * d;
  } else if (typeof p1 === "number") {
    if (isNaN(p1)) {
      throw InvalidParameter();
    }
    if (p1 < 0) {
      s2 = -C_ONE;
      p1 = -p1;
    }
    if (p1 % 1 === 0) {
      n2 = BigInt(p1);
    } else {
      let z = 1;
      let A2 = 0, B = 1;
      let C = 1, D = 1;
      let N2 = 1e7;
      if (p1 >= 1) {
        z = 10 ** Math.floor(1 + Math.log10(p1));
        p1 /= z;
      }
      while (B <= N2 && D <= N2) {
        let M = (A2 + C) / (B + D);
        if (p1 === M) {
          if (B + D <= N2) {
            n2 = A2 + C;
            d = B + D;
          } else if (D > B) {
            n2 = C;
            d = D;
          } else {
            n2 = A2;
            d = B;
          }
          break;
        } else {
          if (p1 > M) {
            A2 += C;
            B += D;
          } else {
            C += A2;
            D += B;
          }
          if (B > N2) {
            n2 = C;
            d = D;
          } else {
            n2 = A2;
            d = B;
          }
        }
      }
      n2 = BigInt(n2) * BigInt(z);
      d = BigInt(d);
    }
  } else if (typeof p1 === "string") {
    let ndx = 0;
    let v2 = C_ZERO, w2 = C_ZERO, x = C_ZERO, y2 = C_ONE, z = C_ONE;
    let match = p1.replace(/_/g, "").match(/\d+|./g);
    if (match === null)
      throw InvalidParameter();
    if (match[ndx] === "-") {
      s2 = -C_ONE;
      ndx++;
    } else if (match[ndx] === "+") {
      ndx++;
    }
    if (match.length === ndx + 1) {
      w2 = assign(match[ndx++], s2);
    } else if (match[ndx + 1] === "." || match[ndx] === ".") {
      if (match[ndx] !== ".") {
        v2 = assign(match[ndx++], s2);
      }
      ndx++;
      if (ndx + 1 === match.length || match[ndx + 1] === "(" && match[ndx + 3] === ")" || match[ndx + 1] === "'" && match[ndx + 3] === "'") {
        w2 = assign(match[ndx], s2);
        y2 = C_TEN ** BigInt(match[ndx].length);
        ndx++;
      }
      if (match[ndx] === "(" && match[ndx + 2] === ")" || match[ndx] === "'" && match[ndx + 2] === "'") {
        x = assign(match[ndx + 1], s2);
        z = C_TEN ** BigInt(match[ndx + 1].length) - C_ONE;
        ndx += 3;
      }
    } else if (match[ndx + 1] === "/" || match[ndx + 1] === ":") {
      w2 = assign(match[ndx], s2);
      y2 = assign(match[ndx + 2], C_ONE);
      ndx += 3;
    } else if (match[ndx + 3] === "/" && match[ndx + 1] === " ") {
      v2 = assign(match[ndx], s2);
      w2 = assign(match[ndx + 2], s2);
      y2 = assign(match[ndx + 4], C_ONE);
      ndx += 5;
    }
    if (match.length <= ndx) {
      d = y2 * z;
      s2 = /* void */
      n2 = x + d * v2 + z * w2;
    } else {
      throw InvalidParameter();
    }
  } else if (typeof p1 === "bigint") {
    n2 = p1;
    s2 = p1;
    d = C_ONE;
  } else {
    throw InvalidParameter();
  }
  if (d === C_ZERO) {
    throw DivisionByZero();
  }
  P["s"] = s2 < C_ZERO ? -C_ONE : C_ONE;
  P["n"] = n2 < C_ZERO ? -n2 : n2;
  P["d"] = d < C_ZERO ? -d : d;
};
function modpow(b, e2, m2) {
  let r2 = C_ONE;
  for (; e2 > C_ZERO; b = b * b % m2, e2 >>= C_ONE) {
    if (e2 & C_ONE) {
      r2 = r2 * b % m2;
    }
  }
  return r2;
}
function cycleLen(n2, d) {
  for (; d % C_TWO === C_ZERO; d /= C_TWO) {
  }
  for (; d % C_FIVE === C_ZERO; d /= C_FIVE) {
  }
  if (d === C_ONE)
    return C_ZERO;
  let rem = C_TEN % d;
  let t2 = 1;
  for (; rem !== C_ONE; t2++) {
    rem = rem * C_TEN % d;
    if (t2 > MAX_CYCLE_LEN)
      return C_ZERO;
  }
  return BigInt(t2);
}
function cycleStart(n2, d, len) {
  let rem1 = C_ONE;
  let rem2 = modpow(C_TEN, len, d);
  for (let t2 = 0; t2 < 300; t2++) {
    if (rem1 === rem2)
      return BigInt(t2);
    rem1 = rem1 * C_TEN % d;
    rem2 = rem2 * C_TEN % d;
  }
  return 0;
}
function gcd(a2, b) {
  if (!a2)
    return b;
  if (!b)
    return a2;
  while (1) {
    a2 %= b;
    if (!a2)
      return b;
    b %= a2;
    if (!b)
      return a2;
  }
}
function Fraction(a2, b) {
  parse$1(a2, b);
  if (this instanceof Fraction) {
    a2 = gcd(P["d"], P["n"]);
    this["s"] = P["s"];
    this["n"] = P["n"] / a2;
    this["d"] = P["d"] / a2;
  } else {
    return newFraction(P["s"] * P["n"], P["d"]);
  }
}
var DivisionByZero = function() {
  return new Error("Division by Zero");
};
var InvalidParameter = function() {
  return new Error("Invalid argument");
};
var NonIntegerParameter = function() {
  return new Error("Parameters must be integer");
};
Fraction.prototype = {
  "s": C_ONE,
  "n": C_ZERO,
  "d": C_ONE,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  "abs": function() {
    return newFraction(this["n"], this["d"]);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  "neg": function() {
    return newFraction(-this["s"] * this["n"], this["d"]);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  "add": function(a2, b) {
    parse$1(a2, b);
    return newFraction(
      this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"],
      this["d"] * P["d"]
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  "sub": function(a2, b) {
    parse$1(a2, b);
    return newFraction(
      this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"],
      this["d"] * P["d"]
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  "mul": function(a2, b) {
    parse$1(a2, b);
    return newFraction(
      this["s"] * P["s"] * this["n"] * P["n"],
      this["d"] * P["d"]
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  "div": function(a2, b) {
    parse$1(a2, b);
    return newFraction(
      this["s"] * P["s"] * this["n"] * P["d"],
      this["d"] * P["n"]
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  "clone": function() {
    return newFraction(this["s"] * this["n"], this["d"]);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
   **/
  "mod": function(a2, b) {
    if (a2 === void 0) {
      return newFraction(this["s"] * this["n"] % this["d"], C_ONE);
    }
    parse$1(a2, b);
    if (C_ZERO === P["n"] * this["d"]) {
      throw DivisionByZero();
    }
    return newFraction(
      this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]),
      P["d"] * this["d"]
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  "gcd": function(a2, b) {
    parse$1(a2, b);
    return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  "lcm": function(a2, b) {
    parse$1(a2, b);
    if (P["n"] === C_ZERO && this["n"] === C_ZERO) {
      return newFraction(C_ZERO, C_ONE);
    }
    return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  "inverse": function() {
    return newFraction(this["s"] * this["d"], this["n"]);
  },
  /**
   * Calculates the fraction to some integer exponent
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  "pow": function(a2, b) {
    parse$1(a2, b);
    if (P["d"] === C_ONE) {
      if (P["s"] < C_ZERO) {
        return newFraction((this["s"] * this["d"]) ** P["n"], this["n"] ** P["n"]);
      } else {
        return newFraction((this["s"] * this["n"]) ** P["n"], this["d"] ** P["n"]);
      }
    }
    if (this["s"] < C_ZERO) return null;
    let N2 = factorize(this["n"]);
    let D = factorize(this["d"]);
    let n2 = C_ONE;
    let d = C_ONE;
    for (let k in N2) {
      if (k === "1") continue;
      if (k === "0") {
        n2 = C_ZERO;
        break;
      }
      N2[k] *= P["n"];
      if (N2[k] % P["d"] === C_ZERO) {
        N2[k] /= P["d"];
      } else return null;
      n2 *= BigInt(k) ** N2[k];
    }
    for (let k in D) {
      if (k === "1") continue;
      D[k] *= P["n"];
      if (D[k] % P["d"] === C_ZERO) {
        D[k] /= P["d"];
      } else return null;
      d *= BigInt(k) ** D[k];
    }
    if (P["s"] < C_ZERO) {
      return newFraction(d, n2);
    }
    return newFraction(n2, d);
  },
  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */
  "log": function(a2, b) {
    parse$1(a2, b);
    if (this["s"] <= C_ZERO || P["s"] <= C_ZERO) return null;
    const allPrimes = {};
    const baseFactors = factorize(P["n"]);
    const T1 = factorize(P["d"]);
    const numberFactors = factorize(this["n"]);
    const T2 = factorize(this["d"]);
    for (const prime in T1) {
      baseFactors[prime] = (baseFactors[prime] || C_ZERO) - T1[prime];
    }
    for (const prime in T2) {
      numberFactors[prime] = (numberFactors[prime] || C_ZERO) - T2[prime];
    }
    for (const prime in baseFactors) {
      if (prime === "1") continue;
      allPrimes[prime] = true;
    }
    for (const prime in numberFactors) {
      if (prime === "1") continue;
      allPrimes[prime] = true;
    }
    let retN = null;
    let retD = null;
    for (const prime in allPrimes) {
      const baseExponent = baseFactors[prime] || C_ZERO;
      const numberExponent = numberFactors[prime] || C_ZERO;
      if (baseExponent === C_ZERO) {
        if (numberExponent !== C_ZERO) {
          return null;
        }
        continue;
      }
      let curN = numberExponent;
      let curD = baseExponent;
      const gcdValue = gcd(curN, curD);
      curN /= gcdValue;
      curD /= gcdValue;
      if (retN === null && retD === null) {
        retN = curN;
        retD = curD;
      } else if (curN * retD !== retN * curD) {
        return null;
      }
    }
    return retN !== null && retD !== null ? newFraction(retN, retD) : null;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  "equals": function(a2, b) {
    parse$1(a2, b);
    return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"];
  },
  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  "lt": function(a2, b) {
    parse$1(a2, b);
    return this["s"] * this["n"] * P["d"] < P["s"] * P["n"] * this["d"];
  },
  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  "lte": function(a2, b) {
    parse$1(a2, b);
    return this["s"] * this["n"] * P["d"] <= P["s"] * P["n"] * this["d"];
  },
  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  "gt": function(a2, b) {
    parse$1(a2, b);
    return this["s"] * this["n"] * P["d"] > P["s"] * P["n"] * this["d"];
  },
  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  "gte": function(a2, b) {
    parse$1(a2, b);
    return this["s"] * this["n"] * P["d"] >= P["s"] * P["n"] * this["d"];
  },
  /**
   * Compare two rational numbers
   * < 0 iff this < that
   * > 0 iff this > that
   * = 0 iff this = that
   *
   * Ex: new Fraction(19.6).compare([98, 5]);
   **/
  "compare": function(a2, b) {
    parse$1(a2, b);
    let t2 = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
    return (C_ZERO < t2) - (t2 < C_ZERO);
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  "ceil": function(places) {
    places = C_TEN ** BigInt(places || 0);
    return newFraction(
      trunc(this["s"] * places * this["n"] / this["d"]) + (places * this["n"] % this["d"] > C_ZERO && this["s"] >= C_ZERO ? C_ONE : C_ZERO),
      places
    );
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  "floor": function(places) {
    places = C_TEN ** BigInt(places || 0);
    return newFraction(
      trunc(this["s"] * places * this["n"] / this["d"]) - (places * this["n"] % this["d"] > C_ZERO && this["s"] < C_ZERO ? C_ONE : C_ZERO),
      places
    );
  },
  /**
   * Rounds a rational numbers
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  "round": function(places) {
    places = C_TEN ** BigInt(places || 0);
    return newFraction(
      trunc(this["s"] * places * this["n"] / this["d"]) + this["s"] * ((this["s"] >= C_ZERO ? C_ONE : C_ZERO) + C_TWO * (places * this["n"] % this["d"]) > this["d"] ? C_ONE : C_ZERO),
      places
    );
  },
  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  "roundTo": function(a2, b) {
    parse$1(a2, b);
    const n2 = this["n"] * P["d"];
    const d = this["d"] * P["n"];
    const r2 = n2 % d;
    let k = trunc(n2 / d);
    if (r2 + r2 >= d) {
      k++;
    }
    return newFraction(this["s"] * k * P["n"], P["d"]);
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  "divisible": function(a2, b) {
    parse$1(a2, b);
    return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
  },
  /**
   * Returns a decimal representation of the fraction
   *
   * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
   **/
  "valueOf": function() {
    return Number(this["s"] * this["n"]) / Number(this["d"]);
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  "toString": function(dec) {
    let N2 = this["n"];
    let D = this["d"];
    dec = dec || 15;
    let cycLen = cycleLen(N2, D);
    let cycOff = cycleStart(N2, D, cycLen);
    let str = this["s"] < C_ZERO ? "-" : "";
    str += trunc(N2 / D);
    N2 %= D;
    N2 *= C_TEN;
    if (N2)
      str += ".";
    if (cycLen) {
      for (let i2 = cycOff; i2--; ) {
        str += trunc(N2 / D);
        N2 %= D;
        N2 *= C_TEN;
      }
      str += "(";
      for (let i2 = cycLen; i2--; ) {
        str += trunc(N2 / D);
        N2 %= D;
        N2 *= C_TEN;
      }
      str += ")";
    } else {
      for (let i2 = dec; N2 && i2--; ) {
        str += trunc(N2 / D);
        N2 %= D;
        N2 *= C_TEN;
      }
    }
    return str;
  },
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
   **/
  "toFraction": function(showMixed) {
    let n2 = this["n"];
    let d = this["d"];
    let str = this["s"] < C_ZERO ? "-" : "";
    if (d === C_ONE) {
      str += n2;
    } else {
      let whole = trunc(n2 / d);
      if (showMixed && whole > C_ZERO) {
        str += whole;
        str += " ";
        n2 %= d;
      }
      str += n2;
      str += "/";
      str += d;
    }
    return str;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  "toLatex": function(showMixed) {
    let n2 = this["n"];
    let d = this["d"];
    let str = this["s"] < C_ZERO ? "-" : "";
    if (d === C_ONE) {
      str += n2;
    } else {
      let whole = trunc(n2 / d);
      if (showMixed && whole > C_ZERO) {
        str += whole;
        n2 %= d;
      }
      str += "\\frac{";
      str += n2;
      str += "}{";
      str += d;
      str += "}";
    }
    return str;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  "toContinued": function() {
    let a2 = this["n"];
    let b = this["d"];
    let res = [];
    do {
      res.push(trunc(a2 / b));
      let t2 = a2 % b;
      a2 = b;
      b = t2;
    } while (a2 !== C_ONE);
    return res;
  },
  "simplify": function(eps) {
    const ieps = BigInt(1 / (eps || 1e-3) | 0);
    const thisABS = this["abs"]();
    const cont = thisABS["toContinued"]();
    for (let i2 = 1; i2 < cont.length; i2++) {
      let s2 = newFraction(cont[i2 - 1], C_ONE);
      for (let k = i2 - 2; k >= 0; k--) {
        s2 = s2["inverse"]()["add"](cont[k]);
      }
      let t2 = s2["sub"](thisABS);
      if (t2["n"] * ieps < t2["d"]) {
        return s2["mul"](this["s"]);
      }
    }
    return this;
  }
};
var __defProp2 = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value2) => __defProp2(target, "name", { value: value2, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var require_util = __commonJS({
  "(disabled):util"() {
  }
});
var utils_exports = {};
__export(utils_exports, {
  addChainableMethod: () => addChainableMethod,
  addLengthGuard: () => addLengthGuard,
  addMethod: () => addMethod,
  addProperty: () => addProperty,
  checkError: () => check_error_exports,
  compareByInspect: () => compareByInspect,
  eql: () => deep_eql_default,
  expectTypes: () => expectTypes,
  flag: () => flag,
  getActual: () => getActual,
  getMessage: () => getMessage2,
  getName: () => getName,
  getOperator: () => getOperator,
  getOwnEnumerableProperties: () => getOwnEnumerableProperties,
  getOwnEnumerablePropertySymbols: () => getOwnEnumerablePropertySymbols,
  getPathInfo: () => getPathInfo,
  hasProperty: () => hasProperty,
  inspect: () => inspect2,
  isNaN: () => isNaN2,
  isNumeric: () => isNumeric,
  isProxyEnabled: () => isProxyEnabled,
  isRegExp: () => isRegExp2,
  objDisplay: () => objDisplay,
  overwriteChainableMethod: () => overwriteChainableMethod,
  overwriteMethod: () => overwriteMethod,
  overwriteProperty: () => overwriteProperty,
  proxify: () => proxify,
  test: () => test,
  transferFlags: () => transferFlags,
  type: () => type
});
var check_error_exports = {};
__export(check_error_exports, {
  compatibleConstructor: () => compatibleConstructor,
  compatibleInstance: () => compatibleInstance,
  compatibleMessage: () => compatibleMessage,
  getConstructorName: () => getConstructorName,
  getMessage: () => getMessage
});
function isErrorInstance(obj) {
  return obj instanceof Error || Object.prototype.toString.call(obj) === "[object Error]";
}
__name(isErrorInstance, "isErrorInstance");
function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
}
__name(isRegExp, "isRegExp");
function compatibleInstance(thrown, errorLike) {
  return isErrorInstance(errorLike) && thrown === errorLike;
}
__name(compatibleInstance, "compatibleInstance");
function compatibleConstructor(thrown, errorLike) {
  if (isErrorInstance(errorLike)) {
    return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
  } else if ((typeof errorLike === "object" || typeof errorLike === "function") && errorLike.prototype) {
    return thrown.constructor === errorLike || thrown instanceof errorLike;
  }
  return false;
}
__name(compatibleConstructor, "compatibleConstructor");
function compatibleMessage(thrown, errMatcher) {
  const comparisonString = typeof thrown === "string" ? thrown : thrown.message;
  if (isRegExp(errMatcher)) {
    return errMatcher.test(comparisonString);
  } else if (typeof errMatcher === "string") {
    return comparisonString.indexOf(errMatcher) !== -1;
  }
  return false;
}
__name(compatibleMessage, "compatibleMessage");
function getConstructorName(errorLike) {
  let constructorName = errorLike;
  if (isErrorInstance(errorLike)) {
    constructorName = errorLike.constructor.name;
  } else if (typeof errorLike === "function") {
    constructorName = errorLike.name;
    if (constructorName === "") {
      const newConstructorName = new errorLike().name;
      constructorName = newConstructorName || constructorName;
    }
  }
  return constructorName;
}
__name(getConstructorName, "getConstructorName");
function getMessage(errorLike) {
  let msg = "";
  if (errorLike && errorLike.message) {
    msg = errorLike.message;
  } else if (typeof errorLike === "string") {
    msg = errorLike;
  }
  return msg;
}
__name(getMessage, "getMessage");
function flag(obj, key, value2) {
  var flags = obj.__flags || (obj.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value2;
  } else {
    return flags[key];
  }
}
__name(flag, "flag");
function test(obj, args) {
  var negate = flag(obj, "negate"), expr = args[0];
  return negate ? !expr : expr;
}
__name(test, "test");
function type(obj) {
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  const stringTag2 = obj[Symbol.toStringTag];
  if (typeof stringTag2 === "string") {
    return stringTag2;
  }
  const type3 = Object.prototype.toString.call(obj).slice(8, -1);
  return type3;
}
__name(type, "type");
var canElideFrames = "captureStackTrace" in Error;
var AssertionError = (_a = class extends Error {
  constructor(message = "Unspecified AssertionError", props, ssf) {
    super(message);
    __publicField(this, "message");
    this.message = message;
    if (canElideFrames) {
      Error.captureStackTrace(this, ssf || _a);
    }
    for (const key in props) {
      if (!(key in this)) {
        this[key] = props[key];
      }
    }
  }
  get name() {
    return "AssertionError";
  }
  get ok() {
    return false;
  }
  toJSON(stack) {
    return {
      ...this,
      name: this.name,
      message: this.message,
      ok: false,
      stack: stack !== false ? this.stack : void 0
    };
  }
}, __name(_a, "AssertionError"), _a);
function expectTypes(obj, types) {
  var flagMsg = flag(obj, "message");
  var ssfi = flag(obj, "ssfi");
  flagMsg = flagMsg ? flagMsg + ": " : "";
  obj = flag(obj, "object");
  types = types.map(function(t2) {
    return t2.toLowerCase();
  });
  types.sort();
  var str = types.map(function(t2, index) {
    var art = ~["a", "e", "i", "o", "u"].indexOf(t2.charAt(0)) ? "an" : "a";
    var or = types.length > 1 && index === types.length - 1 ? "or " : "";
    return or + art + " " + t2;
  }).join(", ");
  var objType = type(obj).toLowerCase();
  if (!types.some(function(expected) {
    return objType === expected;
  })) {
    throw new AssertionError(
      flagMsg + "object tested must be " + str + ", but " + objType + " given",
      void 0,
      ssfi
    );
  }
}
__name(expectTypes, "expectTypes");
function getActual(obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
}
__name(getActual, "getActual");
var ansiColors = {
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
};
var styles = {
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
};
var truncator = "…";
function colorise(value2, styleType) {
  const color = ansiColors[styles[styleType]] || ansiColors[styleType] || "";
  if (!color) {
    return String(value2);
  }
  return `\x1B[${color[0]}m${String(value2)}\x1B[${color[1]}m`;
}
__name(colorise, "colorise");
function normaliseOptions({
  showHidden = false,
  depth = 2,
  colors = false,
  customInspect = true,
  showProxy = false,
  maxArrayLength = Infinity,
  breakLength = Infinity,
  seen = [],
  // eslint-disable-next-line no-shadow
  truncate: truncate2 = Infinity,
  stylize = String
} = {}, inspect3) {
  const options = {
    showHidden: Boolean(showHidden),
    depth: Number(depth),
    colors: Boolean(colors),
    customInspect: Boolean(customInspect),
    showProxy: Boolean(showProxy),
    maxArrayLength: Number(maxArrayLength),
    breakLength: Number(breakLength),
    truncate: Number(truncate2),
    seen,
    inspect: inspect3,
    stylize
  };
  if (options.colors) {
    options.stylize = colorise;
  }
  return options;
}
__name(normaliseOptions, "normaliseOptions");
function isHighSurrogate(char) {
  return char >= "\uD800" && char <= "\uDBFF";
}
__name(isHighSurrogate, "isHighSurrogate");
function truncate(string, length, tail = truncator) {
  string = String(string);
  const tailLength = tail.length;
  const stringLength = string.length;
  if (tailLength > length && stringLength > tailLength) {
    return tail;
  }
  if (stringLength > length && stringLength > tailLength) {
    let end2 = length - tailLength;
    if (end2 > 0 && isHighSurrogate(string[end2 - 1])) {
      end2 = end2 - 1;
    }
    return `${string.slice(0, end2)}${tail}`;
  }
  return string;
}
__name(truncate, "truncate");
function inspectList(list, options, inspectItem, separator = ", ") {
  inspectItem = inspectItem || options.inspect;
  const size = list.length;
  if (size === 0)
    return "";
  const originalLength = options.truncate;
  let output = "";
  let peek = "";
  let truncated = "";
  for (let i2 = 0; i2 < size; i2 += 1) {
    const last = i2 + 1 === list.length;
    const secondToLast = i2 + 2 === list.length;
    truncated = `${truncator}(${list.length - i2})`;
    const value2 = list[i2];
    options.truncate = originalLength - output.length - (last ? 0 : separator.length);
    const string = peek || inspectItem(value2, options) + (last ? "" : separator);
    const nextLength = output.length + string.length;
    const truncatedLength = nextLength + truncated.length;
    if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
      break;
    }
    if (!last && !secondToLast && truncatedLength > originalLength) {
      break;
    }
    peek = last ? "" : inspectItem(list[i2 + 1], options) + (secondToLast ? "" : separator);
    if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
      break;
    }
    output += string;
    if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
      truncated = `${truncator}(${list.length - i2 - 1})`;
      break;
    }
    truncated = "";
  }
  return `${output}${truncated}`;
}
__name(inspectList, "inspectList");
function quoteComplexKey(key) {
  if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
    return key;
  }
  return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
__name(quoteComplexKey, "quoteComplexKey");
function inspectProperty([key, value2], options) {
  options.truncate -= 2;
  if (typeof key === "string") {
    key = quoteComplexKey(key);
  } else if (typeof key !== "number") {
    key = `[${options.inspect(key, options)}]`;
  }
  options.truncate -= key.length;
  value2 = options.inspect(value2, options);
  return `${key}: ${value2}`;
}
__name(inspectProperty, "inspectProperty");
function inspectArray(array, options) {
  const nonIndexProperties = Object.keys(array).slice(array.length);
  if (!array.length && !nonIndexProperties.length)
    return "[]";
  options.truncate -= 4;
  const listContents = inspectList(array, options);
  options.truncate -= listContents.length;
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(nonIndexProperties.map((key) => [key, array[key]]), options, inspectProperty);
  }
  return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
__name(inspectArray, "inspectArray");
var getArrayName = /* @__PURE__ */ __name((array) => {
  if (typeof Buffer === "function" && array instanceof Buffer) {
    return "Buffer";
  }
  if (array[Symbol.toStringTag]) {
    return array[Symbol.toStringTag];
  }
  return array.constructor.name;
}, "getArrayName");
function inspectTypedArray(array, options) {
  const name = getArrayName(array);
  options.truncate -= name.length + 4;
  const nonIndexProperties = Object.keys(array).slice(array.length);
  if (!array.length && !nonIndexProperties.length)
    return `${name}[]`;
  let output = "";
  for (let i2 = 0; i2 < array.length; i2++) {
    const string = `${options.stylize(truncate(array[i2], options.truncate), "number")}${i2 === array.length - 1 ? "" : ", "}`;
    options.truncate -= string.length;
    if (array[i2] !== array.length && options.truncate <= 3) {
      output += `${truncator}(${array.length - array[i2] + 1})`;
      break;
    }
    output += string;
  }
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(nonIndexProperties.map((key) => [key, array[key]]), options, inspectProperty);
  }
  return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
__name(inspectTypedArray, "inspectTypedArray");
function inspectDate(dateObject, options) {
  const stringRepresentation = dateObject.toJSON();
  if (stringRepresentation === null) {
    return "Invalid Date";
  }
  const split = stringRepresentation.split("T");
  const date = split[0];
  return options.stylize(`${date}T${truncate(split[1], options.truncate - date.length - 1)}`, "date");
}
__name(inspectDate, "inspectDate");
function inspectFunction(func, options) {
  const functionType = func[Symbol.toStringTag] || "Function";
  const name = func.name;
  if (!name) {
    return options.stylize(`[${functionType}]`, "special");
  }
  return options.stylize(`[${functionType} ${truncate(name, options.truncate - 11)}]`, "special");
}
__name(inspectFunction, "inspectFunction");
function inspectMapEntry([key, value2], options) {
  options.truncate -= 4;
  key = options.inspect(key, options);
  options.truncate -= key.length;
  value2 = options.inspect(value2, options);
  return `${key} => ${value2}`;
}
__name(inspectMapEntry, "inspectMapEntry");
function mapToEntries(map) {
  const entries2 = [];
  map.forEach((value2, key) => {
    entries2.push([key, value2]);
  });
  return entries2;
}
__name(mapToEntries, "mapToEntries");
function inspectMap(map, options) {
  const size = map.size - 1;
  if (size <= 0) {
    return "Map{}";
  }
  options.truncate -= 7;
  return `Map{ ${inspectList(mapToEntries(map), options, inspectMapEntry)} }`;
}
__name(inspectMap, "inspectMap");
var isNaN$1 = Number.isNaN || ((i2) => i2 !== i2);
function inspectNumber(number, options) {
  if (isNaN$1(number)) {
    return options.stylize("NaN", "number");
  }
  if (number === Infinity) {
    return options.stylize("Infinity", "number");
  }
  if (number === -Infinity) {
    return options.stylize("-Infinity", "number");
  }
  if (number === 0) {
    return options.stylize(1 / number === Infinity ? "+0" : "-0", "number");
  }
  return options.stylize(truncate(String(number), options.truncate), "number");
}
__name(inspectNumber, "inspectNumber");
function inspectBigInt(number, options) {
  let nums = truncate(number.toString(), options.truncate - 1);
  if (nums !== truncator)
    nums += "n";
  return options.stylize(nums, "bigint");
}
__name(inspectBigInt, "inspectBigInt");
function inspectRegExp(value2, options) {
  const flags = value2.toString().split("/")[2];
  const sourceLength = options.truncate - (2 + flags.length);
  const source = value2.source;
  return options.stylize(`/${truncate(source, sourceLength)}/${flags}`, "regexp");
}
__name(inspectRegExp, "inspectRegExp");
function arrayFromSet(set22) {
  const values = [];
  set22.forEach((value2) => {
    values.push(value2);
  });
  return values;
}
__name(arrayFromSet, "arrayFromSet");
function inspectSet(set22, options) {
  if (set22.size === 0)
    return "Set{}";
  options.truncate -= 7;
  return `Set{ ${inspectList(arrayFromSet(set22), options)} }`;
}
__name(inspectSet, "inspectSet");
var stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g");
var escapeCharacters = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
};
var hex = 16;
function escape(char) {
  return escapeCharacters[char] || `\\u${`0000${char.charCodeAt(0).toString(hex)}`.slice(-4)}`;
}
__name(escape, "escape");
function inspectString(string, options) {
  if (stringEscapeChars.test(string)) {
    string = string.replace(stringEscapeChars, escape);
  }
  return options.stylize(`'${truncate(string, options.truncate - 2)}'`, "string");
}
__name(inspectString, "inspectString");
function inspectSymbol(value2) {
  if ("description" in Symbol.prototype) {
    return value2.description ? `Symbol(${value2.description})` : "Symbol()";
  }
  return value2.toString();
}
__name(inspectSymbol, "inspectSymbol");
var getPromiseValue = /* @__PURE__ */ __name(() => "Promise{…}", "getPromiseValue");
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue = /* @__PURE__ */ __name((value2, options) => {
      const [state, innerValue] = getPromiseDetails(value2);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    }, "getPromiseValue");
  }
} catch (notNode) {
}
var promise_default = getPromiseValue;
function inspectObject(object, options) {
  const properties = Object.getOwnPropertyNames(object);
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : [];
  if (properties.length === 0 && symbols.length === 0) {
    return "{}";
  }
  options.truncate -= 4;
  options.seen = options.seen || [];
  if (options.seen.includes(object)) {
    return "[Circular]";
  }
  options.seen.push(object);
  const propertyContents = inspectList(properties.map((key) => [key, object[key]]), options, inspectProperty);
  const symbolContents = inspectList(symbols.map((key) => [key, object[key]]), options, inspectProperty);
  options.seen.pop();
  let sep = "";
  if (propertyContents && symbolContents) {
    sep = ", ";
  }
  return `{ ${propertyContents}${sep}${symbolContents} }`;
}
__name(inspectObject, "inspectObject");
var toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
function inspectClass(value2, options) {
  let name = "";
  if (toStringTag && toStringTag in value2) {
    name = value2[toStringTag];
  }
  name = name || value2.constructor.name;
  if (!name || name === "_class") {
    name = "<Anonymous Class>";
  }
  options.truncate -= name.length;
  return `${name}${inspectObject(value2, options)}`;
}
__name(inspectClass, "inspectClass");
function inspectArguments(args, options) {
  if (args.length === 0)
    return "Arguments[]";
  options.truncate -= 13;
  return `Arguments[ ${inspectList(args, options)} ]`;
}
__name(inspectArguments, "inspectArguments");
var errorKeys = [
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
function inspectObject2(error, options) {
  const properties = Object.getOwnPropertyNames(error).filter((key) => errorKeys.indexOf(key) === -1);
  const name = error.name;
  options.truncate -= name.length;
  let message = "";
  if (typeof error.message === "string") {
    message = truncate(error.message, options.truncate);
  } else {
    properties.unshift("message");
  }
  message = message ? `: ${message}` : "";
  options.truncate -= message.length + 5;
  options.seen = options.seen || [];
  if (options.seen.includes(error)) {
    return "[Circular]";
  }
  options.seen.push(error);
  const propertyContents = inspectList(properties.map((key) => [key, error[key]]), options, inspectProperty);
  return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ""}`;
}
__name(inspectObject2, "inspectObject");
function inspectAttribute([key, value2], options) {
  options.truncate -= 3;
  if (!value2) {
    return `${options.stylize(String(key), "yellow")}`;
  }
  return `${options.stylize(String(key), "yellow")}=${options.stylize(`"${value2}"`, "string")}`;
}
__name(inspectAttribute, "inspectAttribute");
function inspectHTMLCollection(collection, options) {
  return inspectList(collection, options, inspectHTML, "\n");
}
__name(inspectHTMLCollection, "inspectHTMLCollection");
function inspectHTML(element, options) {
  const properties = element.getAttributeNames();
  const name = element.tagName.toLowerCase();
  const head = options.stylize(`<${name}`, "special");
  const headClose = options.stylize(`>`, "special");
  const tail = options.stylize(`</${name}>`, "special");
  options.truncate -= name.length * 2 + 5;
  let propertyContents = "";
  if (properties.length > 0) {
    propertyContents += " ";
    propertyContents += inspectList(properties.map((key) => [key, element.getAttribute(key)]), options, inspectAttribute, " ");
  }
  options.truncate -= propertyContents.length;
  const truncate2 = options.truncate;
  let children = inspectHTMLCollection(element.children, options);
  if (children && children.length > truncate2) {
    children = `${truncator}(${element.children.length})`;
  }
  return `${head}${propertyContents}${headClose}${children}${tail}`;
}
__name(inspectHTML, "inspectHTML");
var symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
var chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
var nodeInspect = false;
try {
  const nodeUtil2 = require_util();
  nodeInspect = nodeUtil2.inspect ? nodeUtil2.inspect.custom : false;
} catch (noNodeInspect) {
  nodeInspect = false;
}
var constructorMap = /* @__PURE__ */ new WeakMap();
var stringTagMap = {};
var baseTypesMap = {
  undefined: (value2, options) => options.stylize("undefined", "undefined"),
  null: (value2, options) => options.stylize("null", "null"),
  boolean: (value2, options) => options.stylize(String(value2), "boolean"),
  Boolean: (value2, options) => options.stylize(String(value2), "boolean"),
  number: inspectNumber,
  Number: inspectNumber,
  bigint: inspectBigInt,
  BigInt: inspectBigInt,
  string: inspectString,
  String: inspectString,
  function: inspectFunction,
  Function: inspectFunction,
  symbol: inspectSymbol,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: inspectSymbol,
  Array: inspectArray,
  Date: inspectDate,
  Map: inspectMap,
  Set: inspectSet,
  RegExp: inspectRegExp,
  Promise: promise_default,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (value2, options) => options.stylize("WeakSet{…}", "special"),
  WeakMap: (value2, options) => options.stylize("WeakMap{…}", "special"),
  Arguments: inspectArguments,
  Int8Array: inspectTypedArray,
  Uint8Array: inspectTypedArray,
  Uint8ClampedArray: inspectTypedArray,
  Int16Array: inspectTypedArray,
  Uint16Array: inspectTypedArray,
  Int32Array: inspectTypedArray,
  Uint32Array: inspectTypedArray,
  Float32Array: inspectTypedArray,
  Float64Array: inspectTypedArray,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: inspectObject2,
  HTMLCollection: inspectHTMLCollection,
  NodeList: inspectHTMLCollection
};
var inspectCustom = /* @__PURE__ */ __name((value2, options, type3) => {
  if (chaiInspect in value2 && typeof value2[chaiInspect] === "function") {
    return value2[chaiInspect](options);
  }
  if (nodeInspect && nodeInspect in value2 && typeof value2[nodeInspect] === "function") {
    return value2[nodeInspect](options.depth, options);
  }
  if ("inspect" in value2 && typeof value2.inspect === "function") {
    return value2.inspect(options.depth, options);
  }
  if ("constructor" in value2 && constructorMap.has(value2.constructor)) {
    return constructorMap.get(value2.constructor)(value2, options);
  }
  if (stringTagMap[type3]) {
    return stringTagMap[type3](value2, options);
  }
  return "";
}, "inspectCustom");
var toString$2 = Object.prototype.toString;
function inspect(value2, opts = {}) {
  const options = normaliseOptions(opts, inspect);
  const { customInspect } = options;
  let type3 = value2 === null ? "null" : typeof value2;
  if (type3 === "object") {
    type3 = toString$2.call(value2).slice(8, -1);
  }
  if (type3 in baseTypesMap) {
    return baseTypesMap[type3](value2, options);
  }
  if (customInspect && value2) {
    const output = inspectCustom(value2, options, type3);
    if (output) {
      if (typeof output === "string")
        return output;
      return inspect(output, options);
    }
  }
  const proto = value2 ? Object.getPrototypeOf(value2) : false;
  if (proto === Object.prototype || proto === null) {
    return inspectObject(value2, options);
  }
  if (value2 && typeof HTMLElement === "function" && value2 instanceof HTMLElement) {
    return inspectHTML(value2, options);
  }
  if ("constructor" in value2) {
    if (value2.constructor !== Object) {
      return inspectClass(value2, options);
    }
    return inspectObject(value2, options);
  }
  if (value2 === Object(value2)) {
    return inspectObject(value2, options);
  }
  return options.stylize(String(value2), type3);
}
__name(inspect, "inspect");
var config = {
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
  includeStack: false,
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
  showDiff: true,
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
  useProxy: true,
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
function inspect2(obj, showHidden, depth, colors) {
  var options = {
    colors,
    depth: typeof depth === "undefined" ? 2 : depth,
    showHidden,
    truncate: config.truncateThreshold ? config.truncateThreshold : Infinity
  };
  return inspect(obj, options);
}
__name(inspect2, "inspect");
function objDisplay(obj) {
  var str = inspect2(obj), type3 = Object.prototype.toString.call(obj);
  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type3 === "[object Function]") {
      return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
    } else if (type3 === "[object Array]") {
      return "[ Array(" + obj.length + ") ]";
    } else if (type3 === "[object Object]") {
      var keys2 = Object.keys(obj), kstr = keys2.length > 2 ? keys2.splice(0, 2).join(", ") + ", ..." : keys2.join(", ");
      return "{ Object (" + kstr + ") }";
    } else {
      return str;
    }
  } else {
    return str;
  }
}
__name(objDisplay, "objDisplay");
function getMessage2(obj, args) {
  var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
  if (typeof msg === "function")
    msg = msg();
  msg = msg || "";
  msg = msg.replace(/#\{this\}/g, function() {
    return objDisplay(val);
  }).replace(/#\{act\}/g, function() {
    return objDisplay(actual);
  }).replace(/#\{exp\}/g, function() {
    return objDisplay(expected);
  });
  return flagMsg ? flagMsg + ": " + msg : msg;
}
__name(getMessage2, "getMessage");
function transferFlags(assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = /* @__PURE__ */ Object.create(null));
  if (!object.__flags) {
    object.__flags = /* @__PURE__ */ Object.create(null);
  }
  includeAll = arguments.length === 3 ? includeAll : true;
  for (var flag3 in flags) {
    if (includeAll || flag3 !== "object" && flag3 !== "ssfi" && flag3 !== "lockSsfi" && flag3 != "message") {
      object.__flags[flag3] = flags[flag3];
    }
  }
}
__name(transferFlags, "transferFlags");
function type2(obj) {
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  const stringTag2 = obj[Symbol.toStringTag];
  if (typeof stringTag2 === "string") {
    return stringTag2;
  }
  const sliceStart = 8;
  const sliceEnd = -1;
  return Object.prototype.toString.call(obj).slice(sliceStart, sliceEnd);
}
__name(type2, "type");
function FakeMap() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
__name(FakeMap, "FakeMap");
FakeMap.prototype = {
  get: /* @__PURE__ */ __name(function get2(key) {
    return key[this._key];
  }, "get"),
  set: /* @__PURE__ */ __name(function set2(key, value2) {
    if (Object.isExtensible(key)) {
      Object.defineProperty(key, this._key, {
        value: value2,
        configurable: true
      });
    }
  }, "set")
};
var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap;
function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === "boolean") {
      return result;
    }
  }
  return null;
}
__name(memoizeCompare, "memoizeCompare");
function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}
__name(memoizeSet, "memoizeSet");
var deep_eql_default = deepEqual;
function deepEqual(leftHandOperand, rightHandOperand, options) {
  if (options && options.comparator) {
    return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }
  var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }
  return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}
__name(deepEqual, "deepEqual");
function simpleEqual(leftHandOperand, rightHandOperand) {
  if (leftHandOperand === rightHandOperand) {
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }
  if (leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
  rightHandOperand !== rightHandOperand) {
    return true;
  }
  if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return false;
  }
  return null;
}
__name(simpleEqual, "simpleEqual");
function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
  var comparator = options && options.comparator;
  var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }
  if (comparator) {
    var comparatorResult = comparator(leftHandOperand, rightHandOperand);
    if (comparatorResult === false || comparatorResult === true) {
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      return simpleResult;
    }
  }
  var leftHandType = type2(leftHandOperand);
  if (leftHandType !== type2(rightHandOperand)) {
    memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);
  var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}
__name(extensiveDeepEqual, "extensiveDeepEqual");
function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return leftHandOperand === rightHandOperand;
    case "Error":
      return keysEqual(leftHandOperand, rightHandOperand, ["name", "message", "code"], options);
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
      return iterableEqual(leftHandOperand, rightHandOperand, options);
    case "RegExp":
      return regexpEqual(leftHandOperand, rightHandOperand);
    case "Generator":
      return generatorEqual(leftHandOperand, rightHandOperand, options);
    case "DataView":
      return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case "ArrayBuffer":
      return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case "Set":
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case "Map":
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return leftHandOperand.equals(rightHandOperand);
    case "Temporal.Duration":
      return leftHandOperand.total("nanoseconds") === rightHandOperand.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return leftHandOperand.toString() === rightHandOperand.toString();
    default:
      return objectEqual(leftHandOperand, rightHandOperand, options);
  }
}
__name(extensiveDeepEqualByType, "extensiveDeepEqualByType");
function regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}
__name(regexpEqual, "regexpEqual");
function entriesEqual(leftHandOperand, rightHandOperand, options) {
  try {
    if (leftHandOperand.size !== rightHandOperand.size) {
      return false;
    }
    if (leftHandOperand.size === 0) {
      return true;
    }
  } catch (sizeError) {
    return false;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(/* @__PURE__ */ __name(function gatherEntries(key, value2) {
    leftHandItems.push([key, value2]);
  }, "gatherEntries"));
  rightHandOperand.forEach(/* @__PURE__ */ __name(function gatherEntries(key, value2) {
    rightHandItems.push([key, value2]);
  }, "gatherEntries"));
  return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}
__name(entriesEqual, "entriesEqual");
function iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length = leftHandOperand.length;
  if (length !== rightHandOperand.length) {
    return false;
  }
  if (length === 0) {
    return true;
  }
  var index = -1;
  while (++index < length) {
    if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
      return false;
    }
  }
  return true;
}
__name(iterableEqual, "iterableEqual");
function generatorEqual(leftHandOperand, rightHandOperand, options) {
  return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
}
__name(generatorEqual, "generatorEqual");
function hasIteratorFunction(target) {
  return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
}
__name(hasIteratorFunction, "hasIteratorFunction");
function getIteratorEntries(target) {
  if (hasIteratorFunction(target)) {
    try {
      return getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}
__name(getIteratorEntries, "getIteratorEntries");
function getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [generatorResult.value];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}
__name(getGeneratorEntries, "getGeneratorEntries");
function getEnumerableKeys(target) {
  var keys2 = [];
  for (var key in target) {
    keys2.push(key);
  }
  return keys2;
}
__name(getEnumerableKeys, "getEnumerableKeys");
function getEnumerableSymbols(target) {
  var keys2 = [];
  var allKeys = Object.getOwnPropertySymbols(target);
  for (var i2 = 0; i2 < allKeys.length; i2 += 1) {
    var key = allKeys[i2];
    if (Object.getOwnPropertyDescriptor(target, key).enumerable) {
      keys2.push(key);
    }
  }
  return keys2;
}
__name(getEnumerableSymbols, "getEnumerableSymbols");
function keysEqual(leftHandOperand, rightHandOperand, keys2, options) {
  var length = keys2.length;
  if (length === 0) {
    return true;
  }
  for (var i2 = 0; i2 < length; i2 += 1) {
    if (deepEqual(leftHandOperand[keys2[i2]], rightHandOperand[keys2[i2]], options) === false) {
      return false;
    }
  }
  return true;
}
__name(keysEqual, "keysEqual");
function objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = getEnumerableKeys(leftHandOperand);
  var rightHandKeys = getEnumerableKeys(rightHandOperand);
  var leftHandSymbols = getEnumerableSymbols(leftHandOperand);
  var rightHandSymbols = getEnumerableSymbols(rightHandOperand);
  leftHandKeys = leftHandKeys.concat(leftHandSymbols);
  rightHandKeys = rightHandKeys.concat(rightHandSymbols);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    if (iterableEqual(mapSymbols(leftHandKeys).sort(), mapSymbols(rightHandKeys).sort()) === false) {
      return false;
    }
    return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }
  var leftHandEntries = getIteratorEntries(leftHandOperand);
  var rightHandEntries = getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return iterableEqual(leftHandEntries, rightHandEntries, options);
  }
  if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
    return true;
  }
  return false;
}
__name(objectEqual, "objectEqual");
function isPrimitive(value2) {
  return value2 === null || typeof value2 !== "object";
}
__name(isPrimitive, "isPrimitive");
function mapSymbols(arr) {
  return arr.map(/* @__PURE__ */ __name(function mapSymbol(entry) {
    if (typeof entry === "symbol") {
      return entry.toString();
    }
    return entry;
  }, "mapSymbol"));
}
__name(mapSymbols, "mapSymbols");
function hasProperty(obj, name) {
  if (typeof obj === "undefined" || obj === null) {
    return false;
  }
  return name in Object(obj);
}
__name(hasProperty, "hasProperty");
function parsePath(path) {
  const str = path.replace(/([^\\])\[/g, "$1.[");
  const parts2 = str.match(/(\\\.|[^.]+?)+/g);
  return parts2.map((value2) => {
    if (value2 === "constructor" || value2 === "__proto__" || value2 === "prototype") {
      return {};
    }
    const regexp = /^\[(\d+)\]$/;
    const mArr = regexp.exec(value2);
    let parsed = null;
    if (mArr) {
      parsed = { i: parseFloat(mArr[1]) };
    } else {
      parsed = { p: value2.replace(/\\([.[\]])/g, "$1") };
    }
    return parsed;
  });
}
__name(parsePath, "parsePath");
function internalGetPathValue(obj, parsed, pathDepth) {
  let temporaryValue = obj;
  let res = null;
  pathDepth = typeof pathDepth === "undefined" ? parsed.length : pathDepth;
  for (let i2 = 0; i2 < pathDepth; i2++) {
    const part = parsed[i2];
    if (temporaryValue) {
      if (typeof part.p === "undefined") {
        temporaryValue = temporaryValue[part.i];
      } else {
        temporaryValue = temporaryValue[part.p];
      }
      if (i2 === pathDepth - 1) {
        res = temporaryValue;
      }
    }
  }
  return res;
}
__name(internalGetPathValue, "internalGetPathValue");
function getPathInfo(obj, path) {
  const parsed = parsePath(path);
  const last = parsed[parsed.length - 1];
  const info = {
    parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: internalGetPathValue(obj, parsed)
  };
  info.exists = hasProperty(info.parent, info.name);
  return info;
}
__name(getPathInfo, "getPathInfo");
function Assertion(obj, msg, ssfi, lockSsfi) {
  flag(this, "ssfi", ssfi || Assertion);
  flag(this, "lockSsfi", lockSsfi);
  flag(this, "object", obj);
  flag(this, "message", msg);
  flag(this, "eql", config.deepEqual || deep_eql_default);
  return proxify(this);
}
__name(Assertion, "Assertion");
Object.defineProperty(Assertion, "includeStack", {
  get: function() {
    console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    );
    return config.includeStack;
  },
  set: function(value2) {
    console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    );
    config.includeStack = value2;
  }
});
Object.defineProperty(Assertion, "showDiff", {
  get: function() {
    console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    );
    return config.showDiff;
  },
  set: function(value2) {
    console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    );
    config.showDiff = value2;
  }
});
Assertion.addProperty = function(name, fn) {
  addProperty(this.prototype, name, fn);
};
Assertion.addMethod = function(name, fn) {
  addMethod(this.prototype, name, fn);
};
Assertion.addChainableMethod = function(name, fn, chainingBehavior) {
  addChainableMethod(this.prototype, name, fn, chainingBehavior);
};
Assertion.overwriteProperty = function(name, fn) {
  overwriteProperty(this.prototype, name, fn);
};
Assertion.overwriteMethod = function(name, fn) {
  overwriteMethod(this.prototype, name, fn);
};
Assertion.overwriteChainableMethod = function(name, fn, chainingBehavior) {
  overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
};
Assertion.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
  var ok = test(this, arguments);
  if (false !== showDiff)
    showDiff = true;
  if (void 0 === expected && void 0 === _actual)
    showDiff = false;
  if (true !== config.showDiff)
    showDiff = false;
  if (!ok) {
    msg = getMessage2(this, arguments);
    var actual = getActual(this, arguments);
    var assertionErrorObjectProperties = {
      actual,
      expected,
      showDiff
    };
    var operator = getOperator(this, arguments);
    if (operator) {
      assertionErrorObjectProperties.operator = operator;
    }
    throw new AssertionError(
      msg,
      assertionErrorObjectProperties,
      config.includeStack ? this.assert : flag(this, "ssfi")
    );
  }
};
Object.defineProperty(Assertion.prototype, "_obj", {
  get: function() {
    return flag(this, "object");
  },
  set: function(val) {
    flag(this, "object", val);
  }
});
function isProxyEnabled() {
  return config.useProxy && typeof Proxy !== "undefined" && typeof Reflect !== "undefined";
}
__name(isProxyEnabled, "isProxyEnabled");
function addProperty(ctx, name, getter) {
  getter = getter === void 0 ? function() {
  } : getter;
  Object.defineProperty(ctx, name, {
    get: /* @__PURE__ */ __name(function propertyGetter() {
      if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
        flag(this, "ssfi", propertyGetter);
      }
      var result = getter.call(this);
      if (result !== void 0)
        return result;
      var newAssertion = new Assertion();
      transferFlags(this, newAssertion);
      return newAssertion;
    }, "propertyGetter"),
    configurable: true
  });
}
__name(addProperty, "addProperty");
var fnLengthDesc = Object.getOwnPropertyDescriptor(function() {
}, "length");
function addLengthGuard(fn, assertionName, isChainable) {
  if (!fnLengthDesc.configurable)
    return fn;
  Object.defineProperty(fn, "length", {
    get: function() {
      if (isChainable) {
        throw Error(
          "Invalid Chai property: " + assertionName + '.length. Due to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.'
        );
      }
      throw Error(
        "Invalid Chai property: " + assertionName + '.length. See docs for proper usage of "' + assertionName + '".'
      );
    }
  });
  return fn;
}
__name(addLengthGuard, "addLengthGuard");
function getProperties(object) {
  var result = Object.getOwnPropertyNames(object);
  function addProperty2(property) {
    if (result.indexOf(property) === -1) {
      result.push(property);
    }
  }
  __name(addProperty2, "addProperty");
  var proto = Object.getPrototypeOf(object);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty2);
    proto = Object.getPrototypeOf(proto);
  }
  return result;
}
__name(getProperties, "getProperties");
var builtins = ["__flags", "__methods", "_obj", "assert"];
function proxify(obj, nonChainableMethodName) {
  if (!isProxyEnabled())
    return obj;
  return new Proxy(obj, {
    get: /* @__PURE__ */ __name(function proxyGetter(target, property) {
      if (typeof property === "string" && config.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
        if (nonChainableMethodName) {
          throw Error(
            "Invalid Chai property: " + nonChainableMethodName + "." + property + '. See docs for proper usage of "' + nonChainableMethodName + '".'
          );
        }
        var suggestion = null;
        var suggestionDistance = 4;
        getProperties(target).forEach(function(prop) {
          if (
            // we actually mean to check `Object.prototype` here
            // eslint-disable-next-line no-prototype-builtins
            !Object.prototype.hasOwnProperty(prop) && builtins.indexOf(prop) === -1
          ) {
            var dist = stringDistanceCapped(property, prop, suggestionDistance);
            if (dist < suggestionDistance) {
              suggestion = prop;
              suggestionDistance = dist;
            }
          }
        });
        if (suggestion !== null) {
          throw Error(
            "Invalid Chai property: " + property + '. Did you mean "' + suggestion + '"?'
          );
        } else {
          throw Error("Invalid Chai property: " + property);
        }
      }
      if (builtins.indexOf(property) === -1 && !flag(target, "lockSsfi")) {
        flag(target, "ssfi", proxyGetter);
      }
      return Reflect.get(target, property);
    }, "proxyGetter")
  });
}
__name(proxify, "proxify");
function stringDistanceCapped(strA, strB, cap) {
  if (Math.abs(strA.length - strB.length) >= cap) {
    return cap;
  }
  var memo = [];
  for (let i2 = 0; i2 <= strA.length; i2++) {
    memo[i2] = Array(strB.length + 1).fill(0);
    memo[i2][0] = i2;
  }
  for (let j = 0; j < strB.length; j++) {
    memo[0][j] = j;
  }
  for (let i2 = 1; i2 <= strA.length; i2++) {
    var ch = strA.charCodeAt(i2 - 1);
    for (let j = 1; j <= strB.length; j++) {
      if (Math.abs(i2 - j) >= cap) {
        memo[i2][j] = cap;
        continue;
      }
      memo[i2][j] = Math.min(
        memo[i2 - 1][j] + 1,
        memo[i2][j - 1] + 1,
        memo[i2 - 1][j - 1] + (ch === strB.charCodeAt(j - 1) ? 0 : 1)
      );
    }
  }
  return memo[strA.length][strB.length];
}
__name(stringDistanceCapped, "stringDistanceCapped");
function addMethod(ctx, name, method) {
  var methodWrapper = /* @__PURE__ */ __name(function() {
    if (!flag(this, "lockSsfi")) {
      flag(this, "ssfi", methodWrapper);
    }
    var result = method.apply(this, arguments);
    if (result !== void 0)
      return result;
    var newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }, "methodWrapper");
  addLengthGuard(methodWrapper, name, false);
  ctx[name] = proxify(methodWrapper, name);
}
__name(addMethod, "addMethod");
function overwriteProperty(ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = /* @__PURE__ */ __name(function() {
  }, "_super");
  if (_get && "function" === typeof _get.get)
    _super = _get.get;
  Object.defineProperty(ctx, name, {
    get: /* @__PURE__ */ __name(function overwritingPropertyGetter() {
      if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
        flag(this, "ssfi", overwritingPropertyGetter);
      }
      var origLockSsfi = flag(this, "lockSsfi");
      flag(this, "lockSsfi", true);
      var result = getter(_super).call(this);
      flag(this, "lockSsfi", origLockSsfi);
      if (result !== void 0) {
        return result;
      }
      var newAssertion = new Assertion();
      transferFlags(this, newAssertion);
      return newAssertion;
    }, "overwritingPropertyGetter"),
    configurable: true
  });
}
__name(overwriteProperty, "overwriteProperty");
function overwriteMethod(ctx, name, method) {
  var _method = ctx[name], _super = /* @__PURE__ */ __name(function() {
    throw new Error(name + " is not a function");
  }, "_super");
  if (_method && "function" === typeof _method)
    _super = _method;
  var overwritingMethodWrapper = /* @__PURE__ */ __name(function() {
    if (!flag(this, "lockSsfi")) {
      flag(this, "ssfi", overwritingMethodWrapper);
    }
    var origLockSsfi = flag(this, "lockSsfi");
    flag(this, "lockSsfi", true);
    var result = method(_super).apply(this, arguments);
    flag(this, "lockSsfi", origLockSsfi);
    if (result !== void 0) {
      return result;
    }
    var newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }, "overwritingMethodWrapper");
  addLengthGuard(overwritingMethodWrapper, name, false);
  ctx[name] = proxify(overwritingMethodWrapper, name);
}
__name(overwriteMethod, "overwriteMethod");
var canSetPrototype = typeof Object.setPrototypeOf === "function";
var testFn = /* @__PURE__ */ __name(function() {
}, "testFn");
var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
  var propDesc = Object.getOwnPropertyDescriptor(testFn, name);
  if (typeof propDesc !== "object")
    return true;
  return !propDesc.configurable;
});
var call = Function.prototype.call;
var apply$1 = Function.prototype.apply;
function addChainableMethod(ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== "function") {
    chainingBehavior = /* @__PURE__ */ __name(function() {
    }, "chainingBehavior");
  }
  var chainableBehavior = {
    method,
    chainingBehavior
  };
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;
  Object.defineProperty(ctx, name, {
    get: /* @__PURE__ */ __name(function chainableMethodGetter() {
      chainableBehavior.chainingBehavior.call(this);
      var chainableMethodWrapper = /* @__PURE__ */ __name(function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", chainableMethodWrapper);
        }
        var result = chainableBehavior.method.apply(this, arguments);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      }, "chainableMethodWrapper");
      addLengthGuard(chainableMethodWrapper, name, true);
      if (canSetPrototype) {
        var prototype = Object.create(this);
        prototype.call = call;
        prototype.apply = apply$1;
        Object.setPrototypeOf(chainableMethodWrapper, prototype);
      } else {
        var asserterNames = Object.getOwnPropertyNames(ctx);
        asserterNames.forEach(function(asserterName) {
          if (excludeNames.indexOf(asserterName) !== -1) {
            return;
          }
          var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
          Object.defineProperty(chainableMethodWrapper, asserterName, pd);
        });
      }
      transferFlags(this, chainableMethodWrapper);
      return proxify(chainableMethodWrapper);
    }, "chainableMethodGetter"),
    configurable: true
  });
}
__name(addChainableMethod, "addChainableMethod");
function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];
  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = /* @__PURE__ */ __name(function overwritingChainableMethodGetter() {
    var result = chainingBehavior(_chainingBehavior).call(this);
    if (result !== void 0) {
      return result;
    }
    var newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }, "overwritingChainableMethodGetter");
  var _method = chainableBehavior.method;
  chainableBehavior.method = /* @__PURE__ */ __name(function overwritingChainableMethodWrapper() {
    var result = method(_method).apply(this, arguments);
    if (result !== void 0) {
      return result;
    }
    var newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }, "overwritingChainableMethodWrapper");
}
__name(overwriteChainableMethod, "overwriteChainableMethod");
function compareByInspect(a2, b) {
  return inspect2(a2) < inspect2(b) ? -1 : 1;
}
__name(compareByInspect, "compareByInspect");
function getOwnEnumerablePropertySymbols(obj) {
  if (typeof Object.getOwnPropertySymbols !== "function")
    return [];
  return Object.getOwnPropertySymbols(obj).filter(function(sym) {
    return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
  });
}
__name(getOwnEnumerablePropertySymbols, "getOwnEnumerablePropertySymbols");
function getOwnEnumerableProperties(obj) {
  return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
}
__name(getOwnEnumerableProperties, "getOwnEnumerableProperties");
var isNaN2 = Number.isNaN;
function isObjectType(obj) {
  var objectType = type(obj);
  var objectTypes = ["Array", "Object", "Function"];
  return objectTypes.indexOf(objectType) !== -1;
}
__name(isObjectType, "isObjectType");
function getOperator(obj, args) {
  var operator = flag(obj, "operator");
  var negate = flag(obj, "negate");
  var expected = args[3];
  var msg = negate ? args[2] : args[1];
  if (operator) {
    return operator;
  }
  if (typeof msg === "function")
    msg = msg();
  msg = msg || "";
  if (!msg) {
    return void 0;
  }
  if (/\shave\s/.test(msg)) {
    return void 0;
  }
  var isObject2 = isObjectType(expected);
  if (/\snot\s/.test(msg)) {
    return isObject2 ? "notDeepStrictEqual" : "notStrictEqual";
  }
  return isObject2 ? "deepStrictEqual" : "strictEqual";
}
__name(getOperator, "getOperator");
function getName(fn) {
  return fn.name;
}
__name(getName, "getName");
function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
}
__name(isRegExp2, "isRegExp");
function isNumeric(obj) {
  return ["Number", "BigInt"].includes(type(obj));
}
__name(isNumeric, "isNumeric");
var { flag: flag2 } = utils_exports;
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
].forEach(function(chain) {
  Assertion.addProperty(chain);
});
Assertion.addProperty("not", function() {
  flag2(this, "negate", true);
});
Assertion.addProperty("deep", function() {
  flag2(this, "deep", true);
});
Assertion.addProperty("nested", function() {
  flag2(this, "nested", true);
});
Assertion.addProperty("own", function() {
  flag2(this, "own", true);
});
Assertion.addProperty("ordered", function() {
  flag2(this, "ordered", true);
});
Assertion.addProperty("any", function() {
  flag2(this, "any", true);
  flag2(this, "all", false);
});
Assertion.addProperty("all", function() {
  flag2(this, "all", true);
  flag2(this, "any", false);
});
var functionTypes = {
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
function an(type3, msg) {
  if (msg)
    flag2(this, "message", msg);
  type3 = type3.toLowerCase();
  var obj = flag2(this, "object"), article = ~["a", "e", "i", "o", "u"].indexOf(type3.charAt(0)) ? "an " : "a ";
  const detectedType = type(obj).toLowerCase();
  if (functionTypes["function"].includes(type3)) {
    this.assert(
      functionTypes[type3].includes(detectedType),
      "expected #{this} to be " + article + type3,
      "expected #{this} not to be " + article + type3
    );
  } else {
    this.assert(
      type3 === detectedType,
      "expected #{this} to be " + article + type3,
      "expected #{this} not to be " + article + type3
    );
  }
}
__name(an, "an");
Assertion.addChainableMethod("an", an);
Assertion.addChainableMethod("a", an);
function SameValueZero(a2, b) {
  return isNaN2(a2) && isNaN2(b) || a2 === b;
}
__name(SameValueZero, "SameValueZero");
function includeChainingBehavior() {
  flag2(this, "contains", true);
}
__name(includeChainingBehavior, "includeChainingBehavior");
function include(val, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), objType = type(obj).toLowerCase(), flagMsg = flag2(this, "message"), negate = flag2(this, "negate"), ssfi = flag2(this, "ssfi"), isDeep = flag2(this, "deep"), descriptor = isDeep ? "deep " : "", isEql = isDeep ? flag2(this, "eql") : SameValueZero;
  flagMsg = flagMsg ? flagMsg + ": " : "";
  var included = false;
  switch (objType) {
    case "string":
      included = obj.indexOf(val) !== -1;
      break;
    case "weakset":
      if (isDeep) {
        throw new AssertionError(
          flagMsg + "unable to use .deep.include with WeakSet",
          void 0,
          ssfi
        );
      }
      included = obj.has(val);
      break;
    case "map":
      obj.forEach(function(item) {
        included = included || isEql(item, val);
      });
      break;
    case "set":
      if (isDeep) {
        obj.forEach(function(item) {
          included = included || isEql(item, val);
        });
      } else {
        included = obj.has(val);
      }
      break;
    case "array":
      if (isDeep) {
        included = obj.some(function(item) {
          return isEql(item, val);
        });
      } else {
        included = obj.indexOf(val) !== -1;
      }
      break;
    default:
      if (val !== Object(val)) {
        throw new AssertionError(
          flagMsg + "the given combination of arguments (" + objType + " and " + type(val).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + type(val).toLowerCase(),
          void 0,
          ssfi
        );
      }
      var props = Object.keys(val), firstErr = null, numErrs = 0;
      props.forEach(function(prop) {
        var propAssertion = new Assertion(obj);
        transferFlags(this, propAssertion, true);
        flag2(propAssertion, "lockSsfi", true);
        if (!negate || props.length === 1) {
          propAssertion.property(prop, val[prop]);
          return;
        }
        try {
          propAssertion.property(prop, val[prop]);
        } catch (err2) {
          if (!check_error_exports.compatibleConstructor(err2, AssertionError)) {
            throw err2;
          }
          if (firstErr === null)
            firstErr = err2;
          numErrs++;
        }
      }, this);
      if (negate && props.length > 1 && numErrs === props.length) {
        throw firstErr;
      }
      return;
  }
  this.assert(
    included,
    "expected #{this} to " + descriptor + "include " + inspect2(val),
    "expected #{this} to not " + descriptor + "include " + inspect2(val)
  );
}
__name(include, "include");
Assertion.addChainableMethod("include", include, includeChainingBehavior);
Assertion.addChainableMethod("contain", include, includeChainingBehavior);
Assertion.addChainableMethod("contains", include, includeChainingBehavior);
Assertion.addChainableMethod("includes", include, includeChainingBehavior);
Assertion.addProperty("ok", function() {
  this.assert(
    flag2(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
Assertion.addProperty("true", function() {
  this.assert(
    true === flag2(this, "object"),
    "expected #{this} to be true",
    "expected #{this} to be false",
    flag2(this, "negate") ? false : true
  );
});
Assertion.addProperty("numeric", function() {
  const object = flag2(this, "object");
  this.assert(
    ["Number", "BigInt"].includes(type(object)),
    "expected #{this} to be numeric",
    "expected #{this} to not be numeric",
    flag2(this, "negate") ? false : true
  );
});
Assertion.addProperty("callable", function() {
  const val = flag2(this, "object");
  const ssfi = flag2(this, "ssfi");
  const message = flag2(this, "message");
  const msg = message ? `${message}: ` : "";
  const negate = flag2(this, "negate");
  const assertionMessage = negate ? `${msg}expected ${inspect2(val)} not to be a callable function` : `${msg}expected ${inspect2(val)} to be a callable function`;
  const isCallable2 = [
    "Function",
    "AsyncFunction",
    "GeneratorFunction",
    "AsyncGeneratorFunction"
  ].includes(type(val));
  if (isCallable2 && negate || !isCallable2 && !negate) {
    throw new AssertionError(assertionMessage, void 0, ssfi);
  }
});
Assertion.addProperty("false", function() {
  this.assert(
    false === flag2(this, "object"),
    "expected #{this} to be false",
    "expected #{this} to be true",
    flag2(this, "negate") ? true : false
  );
});
Assertion.addProperty("null", function() {
  this.assert(
    null === flag2(this, "object"),
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
Assertion.addProperty("undefined", function() {
  this.assert(
    void 0 === flag2(this, "object"),
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
Assertion.addProperty("NaN", function() {
  this.assert(
    isNaN2(flag2(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function assertExist() {
  var val = flag2(this, "object");
  this.assert(
    val !== null && val !== void 0,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
__name(assertExist, "assertExist");
Assertion.addProperty("exist", assertExist);
Assertion.addProperty("exists", assertExist);
Assertion.addProperty("empty", function() {
  var val = flag2(this, "object"), ssfi = flag2(this, "ssfi"), flagMsg = flag2(this, "message"), itemsCount;
  flagMsg = flagMsg ? flagMsg + ": " : "";
  switch (type(val).toLowerCase()) {
    case "array":
    case "string":
      itemsCount = val.length;
      break;
    case "map":
    case "set":
      itemsCount = val.size;
      break;
    case "weakmap":
    case "weakset":
      throw new AssertionError(
        flagMsg + ".empty was passed a weak collection",
        void 0,
        ssfi
      );
    case "function":
      var msg = flagMsg + ".empty was passed a function " + getName(val);
      throw new AssertionError(msg.trim(), void 0, ssfi);
    default:
      if (val !== Object(val)) {
        throw new AssertionError(
          flagMsg + ".empty was passed non-string primitive " + inspect2(val),
          void 0,
          ssfi
        );
      }
      itemsCount = Object.keys(val).length;
  }
  this.assert(
    0 === itemsCount,
    "expected #{this} to be empty",
    "expected #{this} not to be empty"
  );
});
function checkArguments() {
  var obj = flag2(this, "object"), type3 = type(obj);
  this.assert(
    "Arguments" === type3,
    "expected #{this} to be arguments but got " + type3,
    "expected #{this} to not be arguments"
  );
}
__name(checkArguments, "checkArguments");
Assertion.addProperty("arguments", checkArguments);
Assertion.addProperty("Arguments", checkArguments);
function assertEqual(val, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  if (flag2(this, "deep")) {
    var prevLockSsfi = flag2(this, "lockSsfi");
    flag2(this, "lockSsfi", true);
    this.eql(val);
    flag2(this, "lockSsfi", prevLockSsfi);
  } else {
    this.assert(
      val === obj,
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{exp}",
      val,
      this._obj,
      true
    );
  }
}
__name(assertEqual, "assertEqual");
Assertion.addMethod("equal", assertEqual);
Assertion.addMethod("equals", assertEqual);
Assertion.addMethod("eq", assertEqual);
function assertEql(obj, msg) {
  if (msg)
    flag2(this, "message", msg);
  var eql = flag2(this, "eql");
  this.assert(
    eql(obj, flag2(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    obj,
    this._obj,
    true
  );
}
__name(assertEql, "assertEql");
Assertion.addMethod("eql", assertEql);
Assertion.addMethod("eqls", assertEql);
function assertAbove(n2, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), nType = type(n2).toLowerCase();
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && nType !== "date") {
    throw new AssertionError(
      msgPrefix + "the argument to above must be a date",
      void 0,
      ssfi
    );
  } else if (!isNumeric(n2) && (doLength || isNumeric(obj))) {
    throw new AssertionError(
      msgPrefix + "the argument to above must be a number",
      void 0,
      ssfi
    );
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    throw new AssertionError(
      msgPrefix + "expected " + printObj + " to be a number or a date",
      void 0,
      ssfi
    );
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount > n2,
      "expected #{this} to have a " + descriptor + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + descriptor + " above #{exp}",
      n2,
      itemsCount
    );
  } else {
    this.assert(
      obj > n2,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      n2
    );
  }
}
__name(assertAbove, "assertAbove");
Assertion.addMethod("above", assertAbove);
Assertion.addMethod("gt", assertAbove);
Assertion.addMethod("greaterThan", assertAbove);
function assertLeast(n2, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), nType = type(n2).toLowerCase(), errorMessage, shouldThrow = true;
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && nType !== "date") {
    errorMessage = msgPrefix + "the argument to least must be a date";
  } else if (!isNumeric(n2) && (doLength || isNumeric(obj))) {
    errorMessage = msgPrefix + "the argument to least must be a number";
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
  } else {
    shouldThrow = false;
  }
  if (shouldThrow) {
    throw new AssertionError(errorMessage, void 0, ssfi);
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount >= n2,
      "expected #{this} to have a " + descriptor + " at least #{exp} but got #{act}",
      "expected #{this} to have a " + descriptor + " below #{exp}",
      n2,
      itemsCount
    );
  } else {
    this.assert(
      obj >= n2,
      "expected #{this} to be at least #{exp}",
      "expected #{this} to be below #{exp}",
      n2
    );
  }
}
__name(assertLeast, "assertLeast");
Assertion.addMethod("least", assertLeast);
Assertion.addMethod("gte", assertLeast);
Assertion.addMethod("greaterThanOrEqual", assertLeast);
function assertBelow(n2, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), nType = type(n2).toLowerCase(), errorMessage, shouldThrow = true;
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && nType !== "date") {
    errorMessage = msgPrefix + "the argument to below must be a date";
  } else if (!isNumeric(n2) && (doLength || isNumeric(obj))) {
    errorMessage = msgPrefix + "the argument to below must be a number";
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
  } else {
    shouldThrow = false;
  }
  if (shouldThrow) {
    throw new AssertionError(errorMessage, void 0, ssfi);
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount < n2,
      "expected #{this} to have a " + descriptor + " below #{exp} but got #{act}",
      "expected #{this} to not have a " + descriptor + " below #{exp}",
      n2,
      itemsCount
    );
  } else {
    this.assert(
      obj < n2,
      "expected #{this} to be below #{exp}",
      "expected #{this} to be at least #{exp}",
      n2
    );
  }
}
__name(assertBelow, "assertBelow");
Assertion.addMethod("below", assertBelow);
Assertion.addMethod("lt", assertBelow);
Assertion.addMethod("lessThan", assertBelow);
function assertMost(n2, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), nType = type(n2).toLowerCase(), errorMessage, shouldThrow = true;
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && nType !== "date") {
    errorMessage = msgPrefix + "the argument to most must be a date";
  } else if (!isNumeric(n2) && (doLength || isNumeric(obj))) {
    errorMessage = msgPrefix + "the argument to most must be a number";
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
  } else {
    shouldThrow = false;
  }
  if (shouldThrow) {
    throw new AssertionError(errorMessage, void 0, ssfi);
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount <= n2,
      "expected #{this} to have a " + descriptor + " at most #{exp} but got #{act}",
      "expected #{this} to have a " + descriptor + " above #{exp}",
      n2,
      itemsCount
    );
  } else {
    this.assert(
      obj <= n2,
      "expected #{this} to be at most #{exp}",
      "expected #{this} to be above #{exp}",
      n2
    );
  }
}
__name(assertMost, "assertMost");
Assertion.addMethod("most", assertMost);
Assertion.addMethod("lte", assertMost);
Assertion.addMethod("lessThanOrEqual", assertMost);
Assertion.addMethod("within", function(start, finish, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), doLength = flag2(this, "doLength"), flagMsg = flag2(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag2(this, "ssfi"), objType = type(obj).toLowerCase(), startType = type(start).toLowerCase(), finishType = type(finish).toLowerCase(), errorMessage, shouldThrow = true, range = startType === "date" && finishType === "date" ? start.toISOString() + ".." + finish.toISOString() : start + ".." + finish;
  if (doLength && objType !== "map" && objType !== "set") {
    new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
  }
  if (!doLength && objType === "date" && (startType !== "date" || finishType !== "date")) {
    errorMessage = msgPrefix + "the arguments to within must be dates";
  } else if ((!isNumeric(start) || !isNumeric(finish)) && (doLength || isNumeric(obj))) {
    errorMessage = msgPrefix + "the arguments to within must be numbers";
  } else if (!doLength && objType !== "date" && !isNumeric(obj)) {
    var printObj = objType === "string" ? "'" + obj + "'" : obj;
    errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
  } else {
    shouldThrow = false;
  }
  if (shouldThrow) {
    throw new AssertionError(errorMessage, void 0, ssfi);
  }
  if (doLength) {
    var descriptor = "length", itemsCount;
    if (objType === "map" || objType === "set") {
      descriptor = "size";
      itemsCount = obj.size;
    } else {
      itemsCount = obj.length;
    }
    this.assert(
      itemsCount >= start && itemsCount <= finish,
      "expected #{this} to have a " + descriptor + " within " + range,
      "expected #{this} to not have a " + descriptor + " within " + range
    );
  } else {
    this.assert(
      obj >= start && obj <= finish,
      "expected #{this} to be within " + range,
      "expected #{this} to not be within " + range
    );
  }
});
function assertInstanceOf(constructor, msg) {
  if (msg)
    flag2(this, "message", msg);
  var target = flag2(this, "object");
  var ssfi = flag2(this, "ssfi");
  var flagMsg = flag2(this, "message");
  try {
    var isInstanceOf = target instanceof constructor;
  } catch (err2) {
    if (err2 instanceof TypeError) {
      flagMsg = flagMsg ? flagMsg + ": " : "";
      throw new AssertionError(
        flagMsg + "The instanceof assertion needs a constructor but " + type(constructor) + " was given.",
        void 0,
        ssfi
      );
    }
    throw err2;
  }
  var name = getName(constructor);
  if (name == null) {
    name = "an unnamed constructor";
  }
  this.assert(
    isInstanceOf,
    "expected #{this} to be an instance of " + name,
    "expected #{this} to not be an instance of " + name
  );
}
__name(assertInstanceOf, "assertInstanceOf");
Assertion.addMethod("instanceof", assertInstanceOf);
Assertion.addMethod("instanceOf", assertInstanceOf);
function assertProperty(name, val, msg) {
  if (msg)
    flag2(this, "message", msg);
  var isNested = flag2(this, "nested"), isOwn = flag2(this, "own"), flagMsg = flag2(this, "message"), obj = flag2(this, "object"), ssfi = flag2(this, "ssfi"), nameType = typeof name;
  flagMsg = flagMsg ? flagMsg + ": " : "";
  if (isNested) {
    if (nameType !== "string") {
      throw new AssertionError(
        flagMsg + "the argument to property must be a string when using nested syntax",
        void 0,
        ssfi
      );
    }
  } else {
    if (nameType !== "string" && nameType !== "number" && nameType !== "symbol") {
      throw new AssertionError(
        flagMsg + "the argument to property must be a string, number, or symbol",
        void 0,
        ssfi
      );
    }
  }
  if (isNested && isOwn) {
    throw new AssertionError(
      flagMsg + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      ssfi
    );
  }
  if (obj === null || obj === void 0) {
    throw new AssertionError(
      flagMsg + "Target cannot be null or undefined.",
      void 0,
      ssfi
    );
  }
  var isDeep = flag2(this, "deep"), negate = flag2(this, "negate"), pathInfo = isNested ? getPathInfo(obj, name) : null, value2 = isNested ? pathInfo.value : obj[name], isEql = isDeep ? flag2(this, "eql") : (val1, val2) => val1 === val2;
  var descriptor = "";
  if (isDeep)
    descriptor += "deep ";
  if (isOwn)
    descriptor += "own ";
  if (isNested)
    descriptor += "nested ";
  descriptor += "property ";
  var hasProperty2;
  if (isOwn)
    hasProperty2 = Object.prototype.hasOwnProperty.call(obj, name);
  else if (isNested)
    hasProperty2 = pathInfo.exists;
  else
    hasProperty2 = hasProperty(obj, name);
  if (!negate || arguments.length === 1) {
    this.assert(
      hasProperty2,
      "expected #{this} to have " + descriptor + inspect2(name),
      "expected #{this} to not have " + descriptor + inspect2(name)
    );
  }
  if (arguments.length > 1) {
    this.assert(
      hasProperty2 && isEql(val, value2),
      "expected #{this} to have " + descriptor + inspect2(name) + " of #{exp}, but got #{act}",
      "expected #{this} to not have " + descriptor + inspect2(name) + " of #{act}",
      val,
      value2
    );
  }
  flag2(this, "object", value2);
}
__name(assertProperty, "assertProperty");
Assertion.addMethod("property", assertProperty);
function assertOwnProperty(_name, _value, _msg) {
  flag2(this, "own", true);
  assertProperty.apply(this, arguments);
}
__name(assertOwnProperty, "assertOwnProperty");
Assertion.addMethod("ownProperty", assertOwnProperty);
Assertion.addMethod("haveOwnProperty", assertOwnProperty);
function assertOwnPropertyDescriptor(name, descriptor, msg) {
  if (typeof descriptor === "string") {
    msg = descriptor;
    descriptor = null;
  }
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
  var eql = flag2(this, "eql");
  if (actualDescriptor && descriptor) {
    this.assert(
      eql(descriptor, actualDescriptor),
      "expected the own property descriptor for " + inspect2(name) + " on #{this} to match " + inspect2(descriptor) + ", got " + inspect2(actualDescriptor),
      "expected the own property descriptor for " + inspect2(name) + " on #{this} to not match " + inspect2(descriptor),
      descriptor,
      actualDescriptor,
      true
    );
  } else {
    this.assert(
      actualDescriptor,
      "expected #{this} to have an own property descriptor for " + inspect2(name),
      "expected #{this} to not have an own property descriptor for " + inspect2(name)
    );
  }
  flag2(this, "object", actualDescriptor);
}
__name(assertOwnPropertyDescriptor, "assertOwnPropertyDescriptor");
Assertion.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
Assertion.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
function assertLengthChain() {
  flag2(this, "doLength", true);
}
__name(assertLengthChain, "assertLengthChain");
function assertLength(n2, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), objType = type(obj).toLowerCase(), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi"), descriptor = "length", itemsCount;
  switch (objType) {
    case "map":
    case "set":
      descriptor = "size";
      itemsCount = obj.size;
      break;
    default:
      new Assertion(obj, flagMsg, ssfi, true).to.have.property("length");
      itemsCount = obj.length;
  }
  this.assert(
    itemsCount == n2,
    "expected #{this} to have a " + descriptor + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + descriptor + " of #{act}",
    n2,
    itemsCount
  );
}
__name(assertLength, "assertLength");
Assertion.addChainableMethod("length", assertLength, assertLengthChain);
Assertion.addChainableMethod("lengthOf", assertLength, assertLengthChain);
function assertMatch(re2, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  this.assert(
    re2.exec(obj),
    "expected #{this} to match " + re2,
    "expected #{this} not to match " + re2
  );
}
__name(assertMatch, "assertMatch");
Assertion.addMethod("match", assertMatch);
Assertion.addMethod("matches", assertMatch);
Assertion.addMethod("string", function(str, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(obj, flagMsg, ssfi, true).is.a("string");
  this.assert(
    ~obj.indexOf(str),
    "expected #{this} to contain " + inspect2(str),
    "expected #{this} to not contain " + inspect2(str)
  );
});
function assertKeys(keys2) {
  var obj = flag2(this, "object"), objType = type(obj), keysType = type(keys2), ssfi = flag2(this, "ssfi"), isDeep = flag2(this, "deep"), str, deepStr = "", actual, ok = true, flagMsg = flag2(this, "message");
  flagMsg = flagMsg ? flagMsg + ": " : "";
  var mixedArgsMsg = flagMsg + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (objType === "Map" || objType === "Set") {
    deepStr = isDeep ? "deeply " : "";
    actual = [];
    obj.forEach(function(val, key) {
      actual.push(key);
    });
    if (keysType !== "Array") {
      keys2 = Array.prototype.slice.call(arguments);
    }
  } else {
    actual = getOwnEnumerableProperties(obj);
    switch (keysType) {
      case "Array":
        if (arguments.length > 1) {
          throw new AssertionError(mixedArgsMsg, void 0, ssfi);
        }
        break;
      case "Object":
        if (arguments.length > 1) {
          throw new AssertionError(mixedArgsMsg, void 0, ssfi);
        }
        keys2 = Object.keys(keys2);
        break;
      default:
        keys2 = Array.prototype.slice.call(arguments);
    }
    keys2 = keys2.map(function(val) {
      return typeof val === "symbol" ? val : String(val);
    });
  }
  if (!keys2.length) {
    throw new AssertionError(flagMsg + "keys required", void 0, ssfi);
  }
  var len = keys2.length, any = flag2(this, "any"), all = flag2(this, "all"), expected = keys2, isEql = isDeep ? flag2(this, "eql") : (val1, val2) => val1 === val2;
  if (!any && !all) {
    all = true;
  }
  if (any) {
    ok = expected.some(function(expectedKey) {
      return actual.some(function(actualKey) {
        return isEql(expectedKey, actualKey);
      });
    });
  }
  if (all) {
    ok = expected.every(function(expectedKey) {
      return actual.some(function(actualKey) {
        return isEql(expectedKey, actualKey);
      });
    });
    if (!flag2(this, "contains")) {
      ok = ok && keys2.length == actual.length;
    }
  }
  if (len > 1) {
    keys2 = keys2.map(function(key) {
      return inspect2(key);
    });
    var last = keys2.pop();
    if (all) {
      str = keys2.join(", ") + ", and " + last;
    }
    if (any) {
      str = keys2.join(", ") + ", or " + last;
    }
  } else {
    str = inspect2(keys2[0]);
  }
  str = (len > 1 ? "keys " : "key ") + str;
  str = (flag2(this, "contains") ? "contain " : "have ") + str;
  this.assert(
    ok,
    "expected #{this} to " + deepStr + str,
    "expected #{this} to not " + deepStr + str,
    expected.slice(0).sort(compareByInspect),
    actual.sort(compareByInspect),
    true
  );
}
__name(assertKeys, "assertKeys");
Assertion.addMethod("keys", assertKeys);
Assertion.addMethod("key", assertKeys);
function assertThrows(errorLike, errMsgMatcher, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), ssfi = flag2(this, "ssfi"), flagMsg = flag2(this, "message"), negate = flag2(this, "negate") || false;
  new Assertion(obj, flagMsg, ssfi, true).is.a("function");
  if (isRegExp2(errorLike) || typeof errorLike === "string") {
    errMsgMatcher = errorLike;
    errorLike = null;
  }
  let caughtErr;
  let errorWasThrown = false;
  try {
    obj();
  } catch (err2) {
    errorWasThrown = true;
    caughtErr = err2;
  }
  var everyArgIsUndefined = errorLike === void 0 && errMsgMatcher === void 0;
  var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
  var errorLikeFail = false;
  var errMsgMatcherFail = false;
  if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
    var errorLikeString = "an error";
    if (errorLike instanceof Error) {
      errorLikeString = "#{exp}";
    } else if (errorLike) {
      errorLikeString = check_error_exports.getConstructorName(errorLike);
    }
    let actual = caughtErr;
    if (caughtErr instanceof Error) {
      actual = caughtErr.toString();
    } else if (typeof caughtErr === "string") {
      actual = caughtErr;
    } else if (caughtErr && (typeof caughtErr === "object" || typeof caughtErr === "function")) {
      try {
        actual = check_error_exports.getConstructorName(caughtErr);
      } catch (_err) {
      }
    }
    this.assert(
      errorWasThrown,
      "expected #{this} to throw " + errorLikeString,
      "expected #{this} to not throw an error but #{act} was thrown",
      errorLike && errorLike.toString(),
      actual
    );
  }
  if (errorLike && caughtErr) {
    if (errorLike instanceof Error) {
      var isCompatibleInstance = check_error_exports.compatibleInstance(
        caughtErr,
        errorLike
      );
      if (isCompatibleInstance === negate) {
        if (everyArgIsDefined && negate) {
          errorLikeFail = true;
        } else {
          this.assert(
            negate,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (caughtErr && !negate ? " but #{act} was thrown" : ""),
            errorLike.toString(),
            caughtErr.toString()
          );
        }
      }
    }
    var isCompatibleConstructor = check_error_exports.compatibleConstructor(
      caughtErr,
      errorLike
    );
    if (isCompatibleConstructor === negate) {
      if (everyArgIsDefined && negate) {
        errorLikeFail = true;
      } else {
        this.assert(
          negate,
          "expected #{this} to throw #{exp} but #{act} was thrown",
          "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
          errorLike instanceof Error ? errorLike.toString() : errorLike && check_error_exports.getConstructorName(errorLike),
          caughtErr instanceof Error ? caughtErr.toString() : caughtErr && check_error_exports.getConstructorName(caughtErr)
        );
      }
    }
  }
  if (caughtErr && errMsgMatcher !== void 0 && errMsgMatcher !== null) {
    var placeholder = "including";
    if (isRegExp2(errMsgMatcher)) {
      placeholder = "matching";
    }
    var isCompatibleMessage = check_error_exports.compatibleMessage(
      caughtErr,
      errMsgMatcher
    );
    if (isCompatibleMessage === negate) {
      if (everyArgIsDefined && negate) {
        errMsgMatcherFail = true;
      } else {
        this.assert(
          negate,
          "expected #{this} to throw error " + placeholder + " #{exp} but got #{act}",
          "expected #{this} to throw error not " + placeholder + " #{exp}",
          errMsgMatcher,
          check_error_exports.getMessage(caughtErr)
        );
      }
    }
  }
  if (errorLikeFail && errMsgMatcherFail) {
    this.assert(
      negate,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
      errorLike instanceof Error ? errorLike.toString() : errorLike && check_error_exports.getConstructorName(errorLike),
      caughtErr instanceof Error ? caughtErr.toString() : caughtErr && check_error_exports.getConstructorName(caughtErr)
    );
  }
  flag2(this, "object", caughtErr);
}
__name(assertThrows, "assertThrows");
Assertion.addMethod("throw", assertThrows);
Assertion.addMethod("throws", assertThrows);
Assertion.addMethod("Throw", assertThrows);
function respondTo(method, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), itself = flag2(this, "itself"), context = "function" === typeof obj && !itself ? obj.prototype[method] : obj[method];
  this.assert(
    "function" === typeof context,
    "expected #{this} to respond to " + inspect2(method),
    "expected #{this} to not respond to " + inspect2(method)
  );
}
__name(respondTo, "respondTo");
Assertion.addMethod("respondTo", respondTo);
Assertion.addMethod("respondsTo", respondTo);
Assertion.addProperty("itself", function() {
  flag2(this, "itself", true);
});
function satisfy(matcher, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  var result = matcher(obj);
  this.assert(
    result,
    "expected #{this} to satisfy " + objDisplay(matcher),
    "expected #{this} to not satisfy" + objDisplay(matcher),
    flag2(this, "negate") ? false : true,
    result
  );
}
__name(satisfy, "satisfy");
Assertion.addMethod("satisfy", satisfy);
Assertion.addMethod("satisfies", satisfy);
function closeTo(expected, delta, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(obj, flagMsg, ssfi, true).is.numeric;
  let message = "A `delta` value is required for `closeTo`";
  if (delta == void 0)
    throw new AssertionError(
      flagMsg ? `${flagMsg}: ${message}` : message,
      void 0,
      ssfi
    );
  new Assertion(delta, flagMsg, ssfi, true).is.numeric;
  message = "A `expected` value is required for `closeTo`";
  if (expected == void 0)
    throw new AssertionError(
      flagMsg ? `${flagMsg}: ${message}` : message,
      void 0,
      ssfi
    );
  new Assertion(expected, flagMsg, ssfi, true).is.numeric;
  const abs = /* @__PURE__ */ __name((x) => x < 0n ? -x : x, "abs");
  const strip = /* @__PURE__ */ __name((number) => parseFloat(parseFloat(number).toPrecision(12)), "strip");
  this.assert(
    strip(abs(obj - expected)) <= delta,
    "expected #{this} to be close to " + expected + " +/- " + delta,
    "expected #{this} not to be close to " + expected + " +/- " + delta
  );
}
__name(closeTo, "closeTo");
Assertion.addMethod("closeTo", closeTo);
Assertion.addMethod("approximately", closeTo);
function isSubsetOf(_subset, _superset, cmp, contains, ordered) {
  let superset = Array.from(_superset);
  let subset = Array.from(_subset);
  if (!contains) {
    if (subset.length !== superset.length)
      return false;
    superset = superset.slice();
  }
  return subset.every(function(elem, idx) {
    if (ordered)
      return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];
    if (!cmp) {
      var matchIdx = superset.indexOf(elem);
      if (matchIdx === -1)
        return false;
      if (!contains)
        superset.splice(matchIdx, 1);
      return true;
    }
    return superset.some(function(elem2, matchIdx2) {
      if (!cmp(elem, elem2))
        return false;
      if (!contains)
        superset.splice(matchIdx2, 1);
      return true;
    });
  });
}
__name(isSubsetOf, "isSubsetOf");
Assertion.addMethod("members", function(subset, msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(obj, flagMsg, ssfi, true).to.be.iterable;
  new Assertion(subset, flagMsg, ssfi, true).to.be.iterable;
  var contains = flag2(this, "contains");
  var ordered = flag2(this, "ordered");
  var subject, failMsg, failNegateMsg;
  if (contains) {
    subject = ordered ? "an ordered superset" : "a superset";
    failMsg = "expected #{this} to be " + subject + " of #{exp}";
    failNegateMsg = "expected #{this} to not be " + subject + " of #{exp}";
  } else {
    subject = ordered ? "ordered members" : "members";
    failMsg = "expected #{this} to have the same " + subject + " as #{exp}";
    failNegateMsg = "expected #{this} to not have the same " + subject + " as #{exp}";
  }
  var cmp = flag2(this, "deep") ? flag2(this, "eql") : void 0;
  this.assert(
    isSubsetOf(subset, obj, cmp, contains, ordered),
    failMsg,
    failNegateMsg,
    subset,
    obj,
    true
  );
});
Assertion.addProperty("iterable", function(msg) {
  if (msg)
    flag2(this, "message", msg);
  var obj = flag2(this, "object");
  this.assert(
    obj != void 0 && obj[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    obj
  );
});
function oneOf(list, msg) {
  if (msg)
    flag2(this, "message", msg);
  var expected = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi"), contains = flag2(this, "contains"), isDeep = flag2(this, "deep"), eql = flag2(this, "eql");
  new Assertion(list, flagMsg, ssfi, true).to.be.an("array");
  if (contains) {
    this.assert(
      list.some(function(possibility) {
        return expected.indexOf(possibility) > -1;
      }),
      "expected #{this} to contain one of #{exp}",
      "expected #{this} to not contain one of #{exp}",
      list,
      expected
    );
  } else {
    if (isDeep) {
      this.assert(
        list.some(function(possibility) {
          return eql(expected, possibility);
        }),
        "expected #{this} to deeply equal one of #{exp}",
        "expected #{this} to deeply equal one of #{exp}",
        list,
        expected
      );
    } else {
      this.assert(
        list.indexOf(expected) > -1,
        "expected #{this} to be one of #{exp}",
        "expected #{this} to not be one of #{exp}",
        list,
        expected
      );
    }
  }
}
__name(oneOf, "oneOf");
Assertion.addMethod("oneOf", oneOf);
function assertChanges(subject, prop, msg) {
  if (msg)
    flag2(this, "message", msg);
  var fn = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(fn, flagMsg, ssfi, true).is.a("function");
  var initial2;
  if (!prop) {
    new Assertion(subject, flagMsg, ssfi, true).is.a("function");
    initial2 = subject();
  } else {
    new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
    initial2 = subject[prop];
  }
  fn();
  var final = prop === void 0 || prop === null ? subject() : subject[prop];
  var msgObj = prop === void 0 || prop === null ? initial2 : "." + prop;
  flag2(this, "deltaMsgObj", msgObj);
  flag2(this, "initialDeltaValue", initial2);
  flag2(this, "finalDeltaValue", final);
  flag2(this, "deltaBehavior", "change");
  flag2(this, "realDelta", final !== initial2);
  this.assert(
    initial2 !== final,
    "expected " + msgObj + " to change",
    "expected " + msgObj + " to not change"
  );
}
__name(assertChanges, "assertChanges");
Assertion.addMethod("change", assertChanges);
Assertion.addMethod("changes", assertChanges);
function assertIncreases(subject, prop, msg) {
  if (msg)
    flag2(this, "message", msg);
  var fn = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(fn, flagMsg, ssfi, true).is.a("function");
  var initial2;
  if (!prop) {
    new Assertion(subject, flagMsg, ssfi, true).is.a("function");
    initial2 = subject();
  } else {
    new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
    initial2 = subject[prop];
  }
  new Assertion(initial2, flagMsg, ssfi, true).is.a("number");
  fn();
  var final = prop === void 0 || prop === null ? subject() : subject[prop];
  var msgObj = prop === void 0 || prop === null ? initial2 : "." + prop;
  flag2(this, "deltaMsgObj", msgObj);
  flag2(this, "initialDeltaValue", initial2);
  flag2(this, "finalDeltaValue", final);
  flag2(this, "deltaBehavior", "increase");
  flag2(this, "realDelta", final - initial2);
  this.assert(
    final - initial2 > 0,
    "expected " + msgObj + " to increase",
    "expected " + msgObj + " to not increase"
  );
}
__name(assertIncreases, "assertIncreases");
Assertion.addMethod("increase", assertIncreases);
Assertion.addMethod("increases", assertIncreases);
function assertDecreases(subject, prop, msg) {
  if (msg)
    flag2(this, "message", msg);
  var fn = flag2(this, "object"), flagMsg = flag2(this, "message"), ssfi = flag2(this, "ssfi");
  new Assertion(fn, flagMsg, ssfi, true).is.a("function");
  var initial2;
  if (!prop) {
    new Assertion(subject, flagMsg, ssfi, true).is.a("function");
    initial2 = subject();
  } else {
    new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
    initial2 = subject[prop];
  }
  new Assertion(initial2, flagMsg, ssfi, true).is.a("number");
  fn();
  var final = prop === void 0 || prop === null ? subject() : subject[prop];
  var msgObj = prop === void 0 || prop === null ? initial2 : "." + prop;
  flag2(this, "deltaMsgObj", msgObj);
  flag2(this, "initialDeltaValue", initial2);
  flag2(this, "finalDeltaValue", final);
  flag2(this, "deltaBehavior", "decrease");
  flag2(this, "realDelta", initial2 - final);
  this.assert(
    final - initial2 < 0,
    "expected " + msgObj + " to decrease",
    "expected " + msgObj + " to not decrease"
  );
}
__name(assertDecreases, "assertDecreases");
Assertion.addMethod("decrease", assertDecreases);
Assertion.addMethod("decreases", assertDecreases);
function assertDelta(delta, msg) {
  if (msg)
    flag2(this, "message", msg);
  var msgObj = flag2(this, "deltaMsgObj");
  var initial2 = flag2(this, "initialDeltaValue");
  var final = flag2(this, "finalDeltaValue");
  var behavior = flag2(this, "deltaBehavior");
  var realDelta = flag2(this, "realDelta");
  var expression;
  if (behavior === "change") {
    expression = Math.abs(final - initial2) === Math.abs(delta);
  } else {
    expression = realDelta === Math.abs(delta);
  }
  this.assert(
    expression,
    "expected " + msgObj + " to " + behavior + " by " + delta,
    "expected " + msgObj + " to not " + behavior + " by " + delta
  );
}
__name(assertDelta, "assertDelta");
Assertion.addMethod("by", assertDelta);
Assertion.addProperty("extensible", function() {
  var obj = flag2(this, "object");
  var isExtensible = obj === Object(obj) && Object.isExtensible(obj);
  this.assert(
    isExtensible,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
Assertion.addProperty("sealed", function() {
  var obj = flag2(this, "object");
  var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;
  this.assert(
    isSealed,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
Assertion.addProperty("frozen", function() {
  var obj = flag2(this, "object");
  var isFrozen2 = obj === Object(obj) ? Object.isFrozen(obj) : true;
  this.assert(
    isFrozen2,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
Assertion.addProperty("finite", function(_msg) {
  var obj = flag2(this, "object");
  this.assert(
    typeof obj === "number" && isFinite(obj),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function compareSubset(expected, actual) {
  if (expected === actual) {
    return true;
  }
  if (typeof actual !== typeof expected) {
    return false;
  }
  if (typeof expected !== "object" || expected === null) {
    return expected === actual;
  }
  if (!actual) {
    return false;
  }
  if (Array.isArray(expected)) {
    if (!Array.isArray(actual)) {
      return false;
    }
    return expected.every(function(exp) {
      return actual.some(function(act) {
        return compareSubset(exp, act);
      });
    });
  }
  if (expected instanceof Date) {
    if (actual instanceof Date) {
      return expected.getTime() === actual.getTime();
    } else {
      return false;
    }
  }
  return Object.keys(expected).every(function(key) {
    var expectedValue = expected[key];
    var actualValue = actual[key];
    if (typeof expectedValue === "object" && expectedValue !== null && actualValue !== null) {
      return compareSubset(expectedValue, actualValue);
    }
    if (typeof expectedValue === "function") {
      return expectedValue(actualValue);
    }
    return actualValue === expectedValue;
  });
}
__name(compareSubset, "compareSubset");
Assertion.addMethod("containSubset", function(expected) {
  const actual = flag(this, "object");
  const showDiff = config.showDiff;
  this.assert(
    compareSubset(expected, actual),
    "expected #{act} to contain subset #{exp}",
    "expected #{act} to not contain subset #{exp}",
    expected,
    actual,
    showDiff
  );
});
function expect(val, message) {
  return new Assertion(val, message);
}
__name(expect, "expect");
expect.fail = function(actual, expected, message, operator) {
  if (arguments.length < 2) {
    message = actual;
    actual = void 0;
  }
  message = message || "expect.fail()";
  throw new AssertionError(
    message,
    {
      actual,
      expected,
      operator
    },
    expect.fail
  );
};
var should_exports = {};
__export(should_exports, {
  Should: () => Should,
  should: () => should
});
function loadShould() {
  function shouldGetter() {
    if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === "function" && this instanceof Symbol || typeof BigInt === "function" && this instanceof BigInt) {
      return new Assertion(this.valueOf(), null, shouldGetter);
    }
    return new Assertion(this, null, shouldGetter);
  }
  __name(shouldGetter, "shouldGetter");
  function shouldSetter(value2) {
    Object.defineProperty(this, "should", {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  }
  __name(shouldSetter, "shouldSetter");
  Object.defineProperty(Object.prototype, "should", {
    set: shouldSetter,
    get: shouldGetter,
    configurable: true
  });
  var should2 = {};
  should2.fail = function(actual, expected, message, operator) {
    if (arguments.length < 2) {
      message = actual;
      actual = void 0;
    }
    message = message || "should.fail()";
    throw new AssertionError(
      message,
      {
        actual,
        expected,
        operator
      },
      should2.fail
    );
  };
  should2.equal = function(actual, expected, message) {
    new Assertion(actual, message).to.equal(expected);
  };
  should2.Throw = function(fn, errt, errs, msg) {
    new Assertion(fn, msg).to.Throw(errt, errs);
  };
  should2.exist = function(val, msg) {
    new Assertion(val, msg).to.exist;
  };
  should2.not = {};
  should2.not.equal = function(actual, expected, msg) {
    new Assertion(actual, msg).to.not.equal(expected);
  };
  should2.not.Throw = function(fn, errt, errs, msg) {
    new Assertion(fn, msg).to.not.Throw(errt, errs);
  };
  should2.not.exist = function(val, msg) {
    new Assertion(val, msg).to.not.exist;
  };
  should2["throw"] = should2["Throw"];
  should2.not["throw"] = should2.not["Throw"];
  return should2;
}
__name(loadShould, "loadShould");
var should = loadShould;
var Should = loadShould;
function assert(express, errmsg) {
  var test2 = new Assertion(null, null, assert, true);
  test2.assert(express, errmsg, "[ negation message unavailable ]");
}
__name(assert, "assert");
assert.fail = function(actual, expected, message, operator) {
  if (arguments.length < 2) {
    message = actual;
    actual = void 0;
  }
  message = message || "assert.fail()";
  throw new AssertionError(
    message,
    {
      actual,
      expected,
      operator
    },
    assert.fail
  );
};
assert.isOk = function(val, msg) {
  new Assertion(val, msg, assert.isOk, true).is.ok;
};
assert.isNotOk = function(val, msg) {
  new Assertion(val, msg, assert.isNotOk, true).is.not.ok;
};
assert.equal = function(act, exp, msg) {
  var test2 = new Assertion(act, msg, assert.equal, true);
  test2.assert(
    exp == flag(test2, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    exp,
    act,
    true
  );
};
assert.notEqual = function(act, exp, msg) {
  var test2 = new Assertion(act, msg, assert.notEqual, true);
  test2.assert(
    exp != flag(test2, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    exp,
    act,
    true
  );
};
assert.strictEqual = function(act, exp, msg) {
  new Assertion(act, msg, assert.strictEqual, true).to.equal(exp);
};
assert.notStrictEqual = function(act, exp, msg) {
  new Assertion(act, msg, assert.notStrictEqual, true).to.not.equal(exp);
};
assert.deepEqual = assert.deepStrictEqual = function(act, exp, msg) {
  new Assertion(act, msg, assert.deepEqual, true).to.eql(exp);
};
assert.notDeepEqual = function(act, exp, msg) {
  new Assertion(act, msg, assert.notDeepEqual, true).to.not.eql(exp);
};
assert.isAbove = function(val, abv, msg) {
  new Assertion(val, msg, assert.isAbove, true).to.be.above(abv);
};
assert.isAtLeast = function(val, atlst, msg) {
  new Assertion(val, msg, assert.isAtLeast, true).to.be.least(atlst);
};
assert.isBelow = function(val, blw, msg) {
  new Assertion(val, msg, assert.isBelow, true).to.be.below(blw);
};
assert.isAtMost = function(val, atmst, msg) {
  new Assertion(val, msg, assert.isAtMost, true).to.be.most(atmst);
};
assert.isTrue = function(val, msg) {
  new Assertion(val, msg, assert.isTrue, true).is["true"];
};
assert.isNotTrue = function(val, msg) {
  new Assertion(val, msg, assert.isNotTrue, true).to.not.equal(true);
};
assert.isFalse = function(val, msg) {
  new Assertion(val, msg, assert.isFalse, true).is["false"];
};
assert.isNotFalse = function(val, msg) {
  new Assertion(val, msg, assert.isNotFalse, true).to.not.equal(false);
};
assert.isNull = function(val, msg) {
  new Assertion(val, msg, assert.isNull, true).to.equal(null);
};
assert.isNotNull = function(val, msg) {
  new Assertion(val, msg, assert.isNotNull, true).to.not.equal(null);
};
assert.isNaN = function(val, msg) {
  new Assertion(val, msg, assert.isNaN, true).to.be.NaN;
};
assert.isNotNaN = function(value2, message) {
  new Assertion(value2, message, assert.isNotNaN, true).not.to.be.NaN;
};
assert.exists = function(val, msg) {
  new Assertion(val, msg, assert.exists, true).to.exist;
};
assert.notExists = function(val, msg) {
  new Assertion(val, msg, assert.notExists, true).to.not.exist;
};
assert.isUndefined = function(val, msg) {
  new Assertion(val, msg, assert.isUndefined, true).to.equal(void 0);
};
assert.isDefined = function(val, msg) {
  new Assertion(val, msg, assert.isDefined, true).to.not.equal(void 0);
};
assert.isCallable = function(value2, message) {
  new Assertion(value2, message, assert.isCallable, true).is.callable;
};
assert.isNotCallable = function(value2, message) {
  new Assertion(value2, message, assert.isNotCallable, true).is.not.callable;
};
assert.isObject = function(val, msg) {
  new Assertion(val, msg, assert.isObject, true).to.be.a("object");
};
assert.isNotObject = function(val, msg) {
  new Assertion(val, msg, assert.isNotObject, true).to.not.be.a("object");
};
assert.isArray = function(val, msg) {
  new Assertion(val, msg, assert.isArray, true).to.be.an("array");
};
assert.isNotArray = function(val, msg) {
  new Assertion(val, msg, assert.isNotArray, true).to.not.be.an("array");
};
assert.isString = function(val, msg) {
  new Assertion(val, msg, assert.isString, true).to.be.a("string");
};
assert.isNotString = function(val, msg) {
  new Assertion(val, msg, assert.isNotString, true).to.not.be.a("string");
};
assert.isNumber = function(val, msg) {
  new Assertion(val, msg, assert.isNumber, true).to.be.a("number");
};
assert.isNotNumber = function(val, msg) {
  new Assertion(val, msg, assert.isNotNumber, true).to.not.be.a("number");
};
assert.isNumeric = function(val, msg) {
  new Assertion(val, msg, assert.isNumeric, true).is.numeric;
};
assert.isNotNumeric = function(val, msg) {
  new Assertion(val, msg, assert.isNotNumeric, true).is.not.numeric;
};
assert.isFinite = function(val, msg) {
  new Assertion(val, msg, assert.isFinite, true).to.be.finite;
};
assert.isBoolean = function(val, msg) {
  new Assertion(val, msg, assert.isBoolean, true).to.be.a("boolean");
};
assert.isNotBoolean = function(val, msg) {
  new Assertion(val, msg, assert.isNotBoolean, true).to.not.be.a("boolean");
};
assert.typeOf = function(val, type3, msg) {
  new Assertion(val, msg, assert.typeOf, true).to.be.a(type3);
};
assert.notTypeOf = function(value2, type3, message) {
  new Assertion(value2, message, assert.notTypeOf, true).to.not.be.a(type3);
};
assert.instanceOf = function(val, type3, msg) {
  new Assertion(val, msg, assert.instanceOf, true).to.be.instanceOf(type3);
};
assert.notInstanceOf = function(val, type3, msg) {
  new Assertion(val, msg, assert.notInstanceOf, true).to.not.be.instanceOf(
    type3
  );
};
assert.include = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.include, true).include(inc);
};
assert.notInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.notInclude, true).not.include(inc);
};
assert.deepInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.deepInclude, true).deep.include(inc);
};
assert.notDeepInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.notDeepInclude, true).not.deep.include(inc);
};
assert.nestedInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.nestedInclude, true).nested.include(inc);
};
assert.notNestedInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.notNestedInclude, true).not.nested.include(
    inc
  );
};
assert.deepNestedInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.deepNestedInclude, true).deep.nested.include(
    inc
  );
};
assert.notDeepNestedInclude = function(exp, inc, msg) {
  new Assertion(
    exp,
    msg,
    assert.notDeepNestedInclude,
    true
  ).not.deep.nested.include(inc);
};
assert.ownInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.ownInclude, true).own.include(inc);
};
assert.notOwnInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.notOwnInclude, true).not.own.include(inc);
};
assert.deepOwnInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.deepOwnInclude, true).deep.own.include(inc);
};
assert.notDeepOwnInclude = function(exp, inc, msg) {
  new Assertion(exp, msg, assert.notDeepOwnInclude, true).not.deep.own.include(
    inc
  );
};
assert.match = function(exp, re2, msg) {
  new Assertion(exp, msg, assert.match, true).to.match(re2);
};
assert.notMatch = function(exp, re2, msg) {
  new Assertion(exp, msg, assert.notMatch, true).to.not.match(re2);
};
assert.property = function(obj, prop, msg) {
  new Assertion(obj, msg, assert.property, true).to.have.property(prop);
};
assert.notProperty = function(obj, prop, msg) {
  new Assertion(obj, msg, assert.notProperty, true).to.not.have.property(prop);
};
assert.propertyVal = function(obj, prop, val, msg) {
  new Assertion(obj, msg, assert.propertyVal, true).to.have.property(prop, val);
};
assert.notPropertyVal = function(obj, prop, val, msg) {
  new Assertion(obj, msg, assert.notPropertyVal, true).to.not.have.property(
    prop,
    val
  );
};
assert.deepPropertyVal = function(obj, prop, val, msg) {
  new Assertion(obj, msg, assert.deepPropertyVal, true).to.have.deep.property(
    prop,
    val
  );
};
assert.notDeepPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert.notDeepPropertyVal,
    true
  ).to.not.have.deep.property(prop, val);
};
assert.ownProperty = function(obj, prop, msg) {
  new Assertion(obj, msg, assert.ownProperty, true).to.have.own.property(prop);
};
assert.notOwnProperty = function(obj, prop, msg) {
  new Assertion(obj, msg, assert.notOwnProperty, true).to.not.have.own.property(
    prop
  );
};
assert.ownPropertyVal = function(obj, prop, value2, msg) {
  new Assertion(obj, msg, assert.ownPropertyVal, true).to.have.own.property(
    prop,
    value2
  );
};
assert.notOwnPropertyVal = function(obj, prop, value2, msg) {
  new Assertion(
    obj,
    msg,
    assert.notOwnPropertyVal,
    true
  ).to.not.have.own.property(prop, value2);
};
assert.deepOwnPropertyVal = function(obj, prop, value2, msg) {
  new Assertion(
    obj,
    msg,
    assert.deepOwnPropertyVal,
    true
  ).to.have.deep.own.property(prop, value2);
};
assert.notDeepOwnPropertyVal = function(obj, prop, value2, msg) {
  new Assertion(
    obj,
    msg,
    assert.notDeepOwnPropertyVal,
    true
  ).to.not.have.deep.own.property(prop, value2);
};
assert.nestedProperty = function(obj, prop, msg) {
  new Assertion(obj, msg, assert.nestedProperty, true).to.have.nested.property(
    prop
  );
};
assert.notNestedProperty = function(obj, prop, msg) {
  new Assertion(
    obj,
    msg,
    assert.notNestedProperty,
    true
  ).to.not.have.nested.property(prop);
};
assert.nestedPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert.nestedPropertyVal,
    true
  ).to.have.nested.property(prop, val);
};
assert.notNestedPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert.notNestedPropertyVal,
    true
  ).to.not.have.nested.property(prop, val);
};
assert.deepNestedPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert.deepNestedPropertyVal,
    true
  ).to.have.deep.nested.property(prop, val);
};
assert.notDeepNestedPropertyVal = function(obj, prop, val, msg) {
  new Assertion(
    obj,
    msg,
    assert.notDeepNestedPropertyVal,
    true
  ).to.not.have.deep.nested.property(prop, val);
};
assert.lengthOf = function(exp, len, msg) {
  new Assertion(exp, msg, assert.lengthOf, true).to.have.lengthOf(len);
};
assert.hasAnyKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert.hasAnyKeys, true).to.have.any.keys(keys2);
};
assert.hasAllKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert.hasAllKeys, true).to.have.all.keys(keys2);
};
assert.containsAllKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert.containsAllKeys, true).to.contain.all.keys(
    keys2
  );
};
assert.doesNotHaveAnyKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert.doesNotHaveAnyKeys, true).to.not.have.any.keys(
    keys2
  );
};
assert.doesNotHaveAllKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert.doesNotHaveAllKeys, true).to.not.have.all.keys(
    keys2
  );
};
assert.hasAnyDeepKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert.hasAnyDeepKeys, true).to.have.any.deep.keys(
    keys2
  );
};
assert.hasAllDeepKeys = function(obj, keys2, msg) {
  new Assertion(obj, msg, assert.hasAllDeepKeys, true).to.have.all.deep.keys(
    keys2
  );
};
assert.containsAllDeepKeys = function(obj, keys2, msg) {
  new Assertion(
    obj,
    msg,
    assert.containsAllDeepKeys,
    true
  ).to.contain.all.deep.keys(keys2);
};
assert.doesNotHaveAnyDeepKeys = function(obj, keys2, msg) {
  new Assertion(
    obj,
    msg,
    assert.doesNotHaveAnyDeepKeys,
    true
  ).to.not.have.any.deep.keys(keys2);
};
assert.doesNotHaveAllDeepKeys = function(obj, keys2, msg) {
  new Assertion(
    obj,
    msg,
    assert.doesNotHaveAllDeepKeys,
    true
  ).to.not.have.all.deep.keys(keys2);
};
assert.throws = function(fn, errorLike, errMsgMatcher, msg) {
  if ("string" === typeof errorLike || errorLike instanceof RegExp) {
    errMsgMatcher = errorLike;
    errorLike = null;
  }
  var assertErr = new Assertion(fn, msg, assert.throws, true).to.throw(
    errorLike,
    errMsgMatcher
  );
  return flag(assertErr, "object");
};
assert.doesNotThrow = function(fn, errorLike, errMsgMatcher, message) {
  if ("string" === typeof errorLike || errorLike instanceof RegExp) {
    errMsgMatcher = errorLike;
    errorLike = null;
  }
  new Assertion(fn, message, assert.doesNotThrow, true).to.not.throw(
    errorLike,
    errMsgMatcher
  );
};
assert.operator = function(val, operator, val2, msg) {
  var ok;
  switch (operator) {
    case "==":
      ok = val == val2;
      break;
    case "===":
      ok = val === val2;
      break;
    case ">":
      ok = val > val2;
      break;
    case ">=":
      ok = val >= val2;
      break;
    case "<":
      ok = val < val2;
      break;
    case "<=":
      ok = val <= val2;
      break;
    case "!=":
      ok = val != val2;
      break;
    case "!==":
      ok = val !== val2;
      break;
    default:
      msg = msg ? msg + ": " : msg;
      throw new AssertionError(
        msg + 'Invalid operator "' + operator + '"',
        void 0,
        assert.operator
      );
  }
  var test2 = new Assertion(ok, msg, assert.operator, true);
  test2.assert(
    true === flag(test2, "object"),
    "expected " + inspect2(val) + " to be " + operator + " " + inspect2(val2),
    "expected " + inspect2(val) + " to not be " + operator + " " + inspect2(val2)
  );
};
assert.closeTo = function(act, exp, delta, msg) {
  new Assertion(act, msg, assert.closeTo, true).to.be.closeTo(exp, delta);
};
assert.approximately = function(act, exp, delta, msg) {
  new Assertion(act, msg, assert.approximately, true).to.be.approximately(
    exp,
    delta
  );
};
assert.sameMembers = function(set1, set22, msg) {
  new Assertion(set1, msg, assert.sameMembers, true).to.have.same.members(set22);
};
assert.notSameMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert.notSameMembers,
    true
  ).to.not.have.same.members(set22);
};
assert.sameDeepMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert.sameDeepMembers,
    true
  ).to.have.same.deep.members(set22);
};
assert.notSameDeepMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert.notSameDeepMembers,
    true
  ).to.not.have.same.deep.members(set22);
};
assert.sameOrderedMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert.sameOrderedMembers,
    true
  ).to.have.same.ordered.members(set22);
};
assert.notSameOrderedMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert.notSameOrderedMembers,
    true
  ).to.not.have.same.ordered.members(set22);
};
assert.sameDeepOrderedMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert.sameDeepOrderedMembers,
    true
  ).to.have.same.deep.ordered.members(set22);
};
assert.notSameDeepOrderedMembers = function(set1, set22, msg) {
  new Assertion(
    set1,
    msg,
    assert.notSameDeepOrderedMembers,
    true
  ).to.not.have.same.deep.ordered.members(set22);
};
assert.includeMembers = function(superset, subset, msg) {
  new Assertion(superset, msg, assert.includeMembers, true).to.include.members(
    subset
  );
};
assert.notIncludeMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert.notIncludeMembers,
    true
  ).to.not.include.members(subset);
};
assert.includeDeepMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert.includeDeepMembers,
    true
  ).to.include.deep.members(subset);
};
assert.notIncludeDeepMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert.notIncludeDeepMembers,
    true
  ).to.not.include.deep.members(subset);
};
assert.includeOrderedMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert.includeOrderedMembers,
    true
  ).to.include.ordered.members(subset);
};
assert.notIncludeOrderedMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert.notIncludeOrderedMembers,
    true
  ).to.not.include.ordered.members(subset);
};
assert.includeDeepOrderedMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert.includeDeepOrderedMembers,
    true
  ).to.include.deep.ordered.members(subset);
};
assert.notIncludeDeepOrderedMembers = function(superset, subset, msg) {
  new Assertion(
    superset,
    msg,
    assert.notIncludeDeepOrderedMembers,
    true
  ).to.not.include.deep.ordered.members(subset);
};
assert.oneOf = function(inList, list, msg) {
  new Assertion(inList, msg, assert.oneOf, true).to.be.oneOf(list);
};
assert.isIterable = function(obj, msg) {
  if (obj == void 0 || !obj[Symbol.iterator]) {
    msg = msg ? `${msg} expected ${inspect2(obj)} to be an iterable` : `expected ${inspect2(obj)} to be an iterable`;
    throw new AssertionError(msg, void 0, assert.isIterable);
  }
};
assert.changes = function(fn, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  new Assertion(fn, msg, assert.changes, true).to.change(obj, prop);
};
assert.changesBy = function(fn, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn, msg, assert.changesBy, true).to.change(obj, prop).by(delta);
};
assert.doesNotChange = function(fn, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn, msg, assert.doesNotChange, true).to.not.change(
    obj,
    prop
  );
};
assert.changesButNotBy = function(fn, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn, msg, assert.changesButNotBy, true).to.change(obj, prop).but.not.by(delta);
};
assert.increases = function(fn, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn, msg, assert.increases, true).to.increase(obj, prop);
};
assert.increasesBy = function(fn, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn, msg, assert.increasesBy, true).to.increase(obj, prop).by(delta);
};
assert.doesNotIncrease = function(fn, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn, msg, assert.doesNotIncrease, true).to.not.increase(
    obj,
    prop
  );
};
assert.increasesButNotBy = function(fn, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn, msg, assert.increasesButNotBy, true).to.increase(obj, prop).but.not.by(delta);
};
assert.decreases = function(fn, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn, msg, assert.decreases, true).to.decrease(obj, prop);
};
assert.decreasesBy = function(fn, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn, msg, assert.decreasesBy, true).to.decrease(obj, prop).by(delta);
};
assert.doesNotDecrease = function(fn, obj, prop, msg) {
  if (arguments.length === 3 && typeof obj === "function") {
    msg = prop;
    prop = null;
  }
  return new Assertion(fn, msg, assert.doesNotDecrease, true).to.not.decrease(
    obj,
    prop
  );
};
assert.doesNotDecreaseBy = function(fn, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  return new Assertion(fn, msg, assert.doesNotDecreaseBy, true).to.not.decrease(obj, prop).by(delta);
};
assert.decreasesButNotBy = function(fn, obj, prop, delta, msg) {
  if (arguments.length === 4 && typeof obj === "function") {
    var tmpMsg = delta;
    delta = prop;
    msg = tmpMsg;
  } else if (arguments.length === 3) {
    delta = prop;
    prop = null;
  }
  new Assertion(fn, msg, assert.decreasesButNotBy, true).to.decrease(obj, prop).but.not.by(delta);
};
assert.ifError = function(val) {
  if (val) {
    throw val;
  }
};
assert.isExtensible = function(obj, msg) {
  new Assertion(obj, msg, assert.isExtensible, true).to.be.extensible;
};
assert.isNotExtensible = function(obj, msg) {
  new Assertion(obj, msg, assert.isNotExtensible, true).to.not.be.extensible;
};
assert.isSealed = function(obj, msg) {
  new Assertion(obj, msg, assert.isSealed, true).to.be.sealed;
};
assert.isNotSealed = function(obj, msg) {
  new Assertion(obj, msg, assert.isNotSealed, true).to.not.be.sealed;
};
assert.isFrozen = function(obj, msg) {
  new Assertion(obj, msg, assert.isFrozen, true).to.be.frozen;
};
assert.isNotFrozen = function(obj, msg) {
  new Assertion(obj, msg, assert.isNotFrozen, true).to.not.be.frozen;
};
assert.isEmpty = function(val, msg) {
  new Assertion(val, msg, assert.isEmpty, true).to.be.empty;
};
assert.isNotEmpty = function(val, msg) {
  new Assertion(val, msg, assert.isNotEmpty, true).to.not.be.empty;
};
assert.containsSubset = function(val, exp, msg) {
  new Assertion(val, msg).to.containSubset(exp);
};
assert.doesNotContainSubset = function(val, exp, msg) {
  new Assertion(val, msg).to.not.containSubset(exp);
};
var aliases = [
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
for (const [name, as] of aliases) {
  assert[as] = assert[name];
}
var used = [];
function use(fn) {
  const exports2 = {
    use,
    AssertionError,
    util: utils_exports,
    config,
    expect,
    assert,
    Assertion,
    ...should_exports
  };
  if (!~used.indexOf(fn)) {
    fn(exports2, utils_exports);
    used.push(fn);
  }
  return exports2;
}
__name(use, "use");
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
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var browser$1 = { exports: {} };
var ms$1;
var hasRequiredMs$1;
function requireMs$1() {
  if (hasRequiredMs$1) return ms$1;
  hasRequiredMs$1 = 1;
  var s2 = 1e3;
  var m2 = s2 * 60;
  var h2 = m2 * 60;
  var d = h2 * 24;
  var w2 = d * 7;
  var y2 = d * 365.25;
  ms$1 = function(val, options) {
    options = options || {};
    var type3 = typeof val;
    if (type3 === "string" && val.length > 0) {
      return parse2(val);
    } else if (type3 === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse2(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n2 = parseFloat(match[1]);
    var type3 = (match[2] || "ms").toLowerCase();
    switch (type3) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n2 * y2;
      case "weeks":
      case "week":
      case "w":
        return n2 * w2;
      case "days":
      case "day":
      case "d":
        return n2 * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n2 * h2;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n2 * m2;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n2 * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n2;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (msAbs >= h2) {
      return Math.round(ms2 / h2) + "h";
    }
    if (msAbs >= m2) {
      return Math.round(ms2 / m2) + "m";
    }
    if (msAbs >= s2) {
      return Math.round(ms2 / s2) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return plural(ms2, msAbs, d, "day");
    }
    if (msAbs >= h2) {
      return plural(ms2, msAbs, h2, "hour");
    }
    if (msAbs >= m2) {
      return plural(ms2, msAbs, m2, "minute");
    }
    if (msAbs >= s2) {
      return plural(ms2, msAbs, s2, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n2, name) {
    var isPlural = msAbs >= n2 * 1.5;
    return Math.round(ms2 / n2) + " " + name + (isPlural ? "s" : "");
  }
  return ms$1;
}
var common$1;
var hasRequiredCommon$1;
function requireCommon$1() {
  if (hasRequiredCommon$1) return common$1;
  hasRequiredCommon$1 = 1;
  function setup(env) {
    createDebug2.debug = createDebug2;
    createDebug2.default = createDebug2;
    createDebug2.coerce = coerce2;
    createDebug2.disable = disable;
    createDebug2.enable = enable;
    createDebug2.enabled = enabled;
    createDebug2.humanize = requireMs$1();
    createDebug2.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug2[key] = env[key];
    });
    createDebug2.names = [];
    createDebug2.skips = [];
    createDebug2.formatters = {};
    function selectColor(namespace2) {
      let hash = 0;
      for (let i2 = 0; i2 < namespace2.length; i2++) {
        hash = (hash << 5) - hash + namespace2.charCodeAt(i2);
        hash |= 0;
      }
      return createDebug2.colors[Math.abs(hash) % createDebug2.colors.length];
    }
    createDebug2.selectColor = selectColor;
    function createDebug2(namespace2) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug(...args) {
        if (!debug.enabled) {
          return;
        }
        const self2 = debug;
        const curr = Number(/* @__PURE__ */ new Date());
        const ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        args[0] = createDebug2.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug2.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug2.formatArgs.call(self2, args);
        const logFn = self2.log || createDebug2.log;
        logFn.apply(self2, args);
      }
      debug.namespace = namespace2;
      debug.useColors = createDebug2.useColors();
      debug.color = createDebug2.selectColor(namespace2);
      debug.extend = extend;
      debug.destroy = createDebug2.destroy;
      Object.defineProperty(debug, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug2.namespaces) {
            namespacesCache = createDebug2.namespaces;
            enabledCache = createDebug2.enabled(namespace2);
          }
          return enabledCache;
        },
        set: (v2) => {
          enableOverride = v2;
        }
      });
      if (typeof createDebug2.init === "function") {
        createDebug2.init(debug);
      }
      return debug;
    }
    function extend(namespace2, delimiter) {
      const newDebug = createDebug2(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace2);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug2.save(namespaces);
      createDebug2.namespaces = namespaces;
      createDebug2.names = [];
      createDebug2.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug2.skips.push(ns.slice(1));
        } else {
          createDebug2.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (templateIndex < template.length && template[templateIndex] === "*") {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug2.names,
        ...createDebug2.skips.map((namespace2) => "-" + namespace2)
      ].join(",");
      createDebug2.enable("");
      return namespaces;
    }
    function enabled(name) {
      for (const skip of createDebug2.skips) {
        if (matchesTemplate(name, skip)) {
          return false;
        }
      }
      for (const ns of createDebug2.names) {
        if (matchesTemplate(name, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce2(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug2.enable(createDebug2.load());
    return createDebug2;
  }
  common$1 = setup;
  return common$1;
}
var hasRequiredBrowser$1;
function requireBrowser$1() {
  if (hasRequiredBrowser$1) return browser$1.exports;
  hasRequiredBrowser$1 = 1;
  (function(module2, exports2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
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
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m2;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m2 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m2[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c2 = "color: " + this.color;
      args.splice(1, 0, c2, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c2);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r2;
      try {
        r2 = exports2.storage.getItem("debug") || exports2.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = void 0;
      }
      return r2;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = requireCommon$1()(exports2);
    const { formatters } = module2.exports;
    formatters.j = function(v2) {
      try {
        return JSON.stringify(v2);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  })(browser$1, browser$1.exports);
  return browser$1.exports;
}
var browserExports$1 = requireBrowser$1();
const createDebug$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports$1);
var browser = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs) return ms;
  hasRequiredMs = 1;
  var s2 = 1e3;
  var m2 = s2 * 60;
  var h2 = m2 * 60;
  var d = h2 * 24;
  var w2 = d * 7;
  var y2 = d * 365.25;
  ms = function(val, options) {
    options = options || {};
    var type3 = typeof val;
    if (type3 === "string" && val.length > 0) {
      return parse2(val);
    } else if (type3 === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
    );
  };
  function parse2(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
      str
    );
    if (!match) {
      return;
    }
    var n2 = parseFloat(match[1]);
    var type3 = (match[2] || "ms").toLowerCase();
    switch (type3) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n2 * y2;
      case "weeks":
      case "week":
      case "w":
        return n2 * w2;
      case "days":
      case "day":
      case "d":
        return n2 * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n2 * h2;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n2 * m2;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n2 * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n2;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (msAbs >= h2) {
      return Math.round(ms2 / h2) + "h";
    }
    if (msAbs >= m2) {
      return Math.round(ms2 / m2) + "m";
    }
    if (msAbs >= s2) {
      return Math.round(ms2 / s2) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return plural(ms2, msAbs, d, "day");
    }
    if (msAbs >= h2) {
      return plural(ms2, msAbs, h2, "hour");
    }
    if (msAbs >= m2) {
      return plural(ms2, msAbs, m2, "minute");
    }
    if (msAbs >= s2) {
      return plural(ms2, msAbs, s2, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n2, name) {
    var isPlural = msAbs >= n2 * 1.5;
    return Math.round(ms2 / n2) + " " + name + (isPlural ? "s" : "");
  }
  return ms;
}
var common;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  function setup(env) {
    createDebug2.debug = createDebug2;
    createDebug2.default = createDebug2;
    createDebug2.coerce = coerce2;
    createDebug2.disable = disable;
    createDebug2.enable = enable;
    createDebug2.enabled = enabled;
    createDebug2.humanize = requireMs();
    createDebug2.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug2[key] = env[key];
    });
    createDebug2.names = [];
    createDebug2.skips = [];
    createDebug2.formatters = {};
    function selectColor(namespace2) {
      let hash = 0;
      for (let i2 = 0; i2 < namespace2.length; i2++) {
        hash = (hash << 5) - hash + namespace2.charCodeAt(i2);
        hash |= 0;
      }
      return createDebug2.colors[Math.abs(hash) % createDebug2.colors.length];
    }
    createDebug2.selectColor = selectColor;
    function createDebug2(namespace2) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug(...args) {
        if (!debug.enabled) {
          return;
        }
        const self2 = debug;
        const curr = Number(/* @__PURE__ */ new Date());
        const ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        args[0] = createDebug2.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug2.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug2.formatArgs.call(self2, args);
        const logFn = self2.log || createDebug2.log;
        logFn.apply(self2, args);
      }
      debug.namespace = namespace2;
      debug.useColors = createDebug2.useColors();
      debug.color = createDebug2.selectColor(namespace2);
      debug.extend = extend;
      debug.destroy = createDebug2.destroy;
      Object.defineProperty(debug, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug2.namespaces) {
            namespacesCache = createDebug2.namespaces;
            enabledCache = createDebug2.enabled(namespace2);
          }
          return enabledCache;
        },
        set: (v2) => {
          enableOverride = v2;
        }
      });
      if (typeof createDebug2.init === "function") {
        createDebug2.init(debug);
      }
      return debug;
    }
    function extend(namespace2, delimiter) {
      const newDebug = createDebug2(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace2);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug2.save(namespaces);
      createDebug2.namespaces = namespaces;
      createDebug2.names = [];
      createDebug2.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug2.skips.push(ns.slice(1));
        } else {
          createDebug2.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (templateIndex < template.length && template[templateIndex] === "*") {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug2.names,
        ...createDebug2.skips.map((namespace2) => "-" + namespace2)
      ].join(",");
      createDebug2.enable("");
      return namespaces;
    }
    function enabled(name) {
      for (const skip of createDebug2.skips) {
        if (matchesTemplate(name, skip)) {
          return false;
        }
      }
      for (const ns of createDebug2.names) {
        if (matchesTemplate(name, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce2(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug2.enable(createDebug2.load());
    return createDebug2;
  }
  common = setup;
  return common;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser.exports;
  hasRequiredBrowser = 1;
  (function(module2, exports2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
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
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m2;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m2 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m2[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c2 = "color: " + this.color;
      args.splice(1, 0, c2, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c2);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r2;
      try {
        r2 = exports2.storage.getItem("debug") || exports2.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r2 && typeof process !== "undefined" && "env" in process) {
        r2 = void 0;
      }
      return r2;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = requireCommon()(exports2);
    const { formatters } = module2.exports;
    formatters.j = function(v2) {
      try {
        return JSON.stringify(v2);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  })(browser, browser.exports);
  return browser.exports;
}
var browserExports = requireBrowser();
const createDebug = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
var fleb = new u8([
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
]);
var fdeb = new u8([
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
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b[i2] = start += 1 << eb[i2 - 1];
  }
  var r2 = new i32(b[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b[i2]; j < b[i2 + 1]; ++j) {
      r2[j] = j - b[i2] << 5 | i2;
    }
  }
  return { b, r: r2 };
};
var _a2 = freb(fleb, 2), fl = _a2.b, revfl = _a2.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b.b, revfd = _b.r;
var rev = new u16(32768);
for (var i$1 = 0; i$1 < 32768; ++i$1) {
  var x = (i$1 & 43690) >> 1 | (i$1 & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i$1] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var hMap = function(cd, mb, r2) {
  var s2 = cd.length;
  var i2 = 0;
  var l2 = new u16(mb);
  for (; i2 < s2; ++i2) {
    if (cd[i2])
      ++l2[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l2[i2 - 1] << 1;
  }
  var co;
  if (r2) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v2 = le[cd[i2] - 1]++ << r_1;
        for (var m2 = v2 | (1 << r_1) - 1; v2 <= m2; ++v2) {
          co[rev[v2] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s2);
    for (i2 = 0; i2 < s2; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i$1 = 0; i$1 < 144; ++i$1)
  flt[i$1] = 8;
for (var i$1 = 144; i$1 < 256; ++i$1)
  flt[i$1] = 9;
for (var i$1 = 256; i$1 < 280; ++i$1)
  flt[i$1] = 7;
for (var i$1 = 280; i$1 < 288; ++i$1)
  flt[i$1] = 8;
var fdt = new u8(32);
for (var i$1 = 0; i$1 < 32; ++i$1)
  fdt[i$1] = 5;
var flm = /* @__PURE__ */ hMap(flt, 9, 0), flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0), fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max$1 = function(a2) {
  var m2 = a2[0];
  for (var i2 = 1; i2 < a2.length; ++i2) {
    if (a2[i2] > m2)
      m2 = a2[i2];
  }
  return m2;
};
var bits = function(d, p2, m2) {
  var o2 = p2 / 8 | 0;
  return (d[o2] | d[o2 + 1] << 8) >> (p2 & 7) & m2;
};
var bits16 = function(d, p2) {
  var o2 = p2 / 8 | 0;
  return (d[o2] | d[o2 + 1] << 8 | d[o2 + 2] << 16) >> (p2 & 7);
};
var shft = function(p2) {
  return (p2 + 7) / 8 | 0;
};
var slc = function(v2, s2, e2) {
  if (e2 == null || e2 > v2.length)
    e2 = v2.length;
  return new u8(v2.subarray(s2, e2));
};
var ec = [
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
];
var err = function(ind, msg, nt) {
  var e2 = new Error(msg || ec[ind]);
  e2.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e2, err);
  if (!nt)
    throw e2;
  return e2;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l3) {
    var bl = buf.length;
    if (l3 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l3));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type3 = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type3) {
        var s2 = shft(pos) + 4, l2 = dat[s2 - 4] | dat[s2 - 3] << 8, t2 = s2 + l2;
        if (t2 > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l2);
        buf.set(dat.subarray(s2, t2), bt);
        st.b = bt += l2, st.p = pos = t2 * 8, st.f = final;
        continue;
      } else if (type3 == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type3 == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max$1(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r2 = clm[bits(dat, pos, clbmsk)];
          pos += r2 & 15;
          var s2 = r2 >> 4;
          if (s2 < 16) {
            ldt[i2++] = s2;
          } else {
            var c2 = 0, n2 = 0;
            if (s2 == 16)
              n2 = 3 + bits(dat, pos, 3), pos += 2, c2 = ldt[i2 - 1];
            else if (s2 == 17)
              n2 = 3 + bits(dat, pos, 7), pos += 3;
            else if (s2 == 18)
              n2 = 11 + bits(dat, pos, 127), pos += 7;
            while (n2--)
              ldt[i2++] = c2;
          }
        }
        var lt2 = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max$1(lt2);
        dbt = max$1(dt);
        lm = hMap(lt2, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c2 = lm[bits16(dat, pos) & lms], sym = c2 >> 4;
      pos += c2 & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c2)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b = fleb[i2];
          add = bits(dat, pos, (1 << b) - 1) + fl[i2];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end2 = bt + add;
        if (bt < dt) {
          var shift2 = dl - dt, dend = Math.min(dt, end2);
          if (shift2 + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift2 + bt];
        }
        for (; bt < end2; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d, p2, v2) {
  v2 <<= p2 & 7;
  var o2 = p2 / 8 | 0;
  d[o2] |= v2;
  d[o2 + 1] |= v2 >> 8;
};
var wbits16 = function(d, p2, v2) {
  v2 <<= p2 & 7;
  var o2 = p2 / 8 | 0;
  d[o2] |= v2;
  d[o2 + 1] |= v2 >> 8;
  d[o2 + 2] |= v2 >> 16;
};
var hTree = function(d, mb) {
  var t2 = [];
  for (var i2 = 0; i2 < d.length; ++i2) {
    if (d[i2])
      t2.push({ s: i2, f: d[i2] });
  }
  var s2 = t2.length;
  var t22 = t2.slice();
  if (!s2)
    return { t: et, l: 0 };
  if (s2 == 1) {
    var v2 = new u8(t2[0].s + 1);
    v2[t2[0].s] = 1;
    return { t: v2, l: 1 };
  }
  t2.sort(function(a2, b) {
    return a2.f - b.f;
  });
  t2.push({ s: -1, f: 25001 });
  var l2 = t2[0], r2 = t2[1], i0 = 0, i1 = 1, i22 = 2;
  t2[0] = { s: -1, f: l2.f + r2.f, l: l2, r: r2 };
  while (i1 != s2 - 1) {
    l2 = t2[t2[i0].f < t2[i22].f ? i0++ : i22++];
    r2 = t2[i0 != i1 && t2[i0].f < t2[i22].f ? i0++ : i22++];
    t2[i1++] = { s: -1, f: l2.f + r2.f, l: l2, r: r2 };
  }
  var maxSym = t22[0].s;
  for (var i2 = 1; i2 < s2; ++i2) {
    if (t22[i2].s > maxSym)
      maxSym = t22[i2].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t2[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i2 = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t22.sort(function(a2, b) {
      return tr[b.s] - tr[a2.s] || a2.f - b.f;
    });
    for (; i2 < s2; ++i2) {
      var i2_1 = t22[i2].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t22[i2].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i2;
    }
    for (; i2 >= 0 && dt; --i2) {
      var i2_3 = t22[i2].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return { t: new u8(tr), l: mbt };
};
var ln = function(n2, l2, d) {
  return n2.s == -1 ? Math.max(ln(n2.l, l2, d + 1), ln(n2.r, l2, d + 1)) : l2[n2.s] = d;
};
var lc = function(c2) {
  var s2 = c2.length;
  while (s2 && !c2[--s2])
    ;
  var cl = new u16(++s2);
  var cli = 0, cln = c2[0], cls = 1;
  var w2 = function(v2) {
    cl[cli++] = v2;
  };
  for (var i2 = 1; i2 <= s2; ++i2) {
    if (c2[i2] == cln && i2 != s2)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w2(32754);
        if (cls > 2) {
          w2(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w2(cln), --cls;
        for (; cls > 6; cls -= 6)
          w2(8304);
        if (cls > 2)
          w2(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w2(cln);
      cls = 1;
      cln = c2[i2];
    }
  }
  return { c: cl.subarray(0, cli), n: s2 };
};
var clen = function(cf, cl) {
  var l2 = 0;
  for (var i2 = 0; i2 < cl.length; ++i2)
    l2 += cf[i2] * cl[i2];
  return l2;
};
var wfblk = function(out, pos, dat) {
  var s2 = dat.length;
  var o2 = shft(pos + 2);
  out[o2] = s2 & 255;
  out[o2 + 1] = s2 >> 8;
  out[o2 + 2] = out[o2] ^ 255;
  out[o2 + 3] = out[o2 + 1] ^ 255;
  for (var i2 = 0; i2 < s2; ++i2)
    out[o2 + i2 + 4] = dat[i2];
  return (o2 + 4 + s2) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p2) {
  wbits(out, p2++, final);
  ++lf[256];
  var _a3 = hTree(lf, 15), dlt = _a3.t, mlb = _a3.l;
  var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
  var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
  var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
  var lcfreq = new u16(19);
  for (var i2 = 0; i2 < lclt.length; ++i2)
    ++lcfreq[lclt[i2] & 31];
  for (var i2 = 0; i2 < lcdt.length; ++i2)
    ++lcfreq[lcdt[i2] & 31];
  var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
  if (bs >= 0 && flen <= ftlen && flen <= dtlen)
    return wfblk(out, p2, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p2, 1 + (dtlen < ftlen)), p2 += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p2, nlc - 257);
    wbits(out, p2 + 5, ndc - 1);
    wbits(out, p2 + 10, nlcc - 4);
    p2 += 14;
    for (var i2 = 0; i2 < nlcc; ++i2)
      wbits(out, p2 + 3 * i2, lct[clim[i2]]);
    p2 += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i2 = 0; i2 < clct.length; ++i2) {
        var len = clct[i2] & 31;
        wbits(out, p2, llm[len]), p2 += lct[len];
        if (len > 15)
          wbits(out, p2, clct[i2] >> 5 & 127), p2 += clct[i2] >> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i2 = 0; i2 < li; ++i2) {
    var sym = syms[i2];
    if (sym > 255) {
      var len = sym >> 18 & 31;
      wbits16(out, p2, lm[len + 257]), p2 += ll[len + 257];
      if (len > 7)
        wbits(out, p2, sym >> 23 & 31), p2 += fleb[len];
      var dst = sym & 31;
      wbits16(out, p2, dm[dst]), p2 += dl[dst];
      if (dst > 3)
        wbits16(out, p2, sym >> 5 & 8191), p2 += fdeb[dst];
    } else {
      wbits16(out, p2, lm[sym]), p2 += ll[sym];
    }
  }
  wbits16(out, p2, lm[256]);
  return p2 + ll[256];
};
var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
  var s2 = st.z || dat.length;
  var o2 = new u8(pre + s2 + 5 * (1 + Math.ceil(s2 / 7e3)) + post);
  var w2 = o2.subarray(pre, o2.length - post);
  var lst = st.l;
  var pos = (st.r || 0) & 7;
  if (lvl) {
    if (pos)
      w2[0] = st.r >> 3;
    var opt = deo[lvl - 1];
    var n2 = opt >> 13, c2 = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i3) {
      return (dat[i3] ^ dat[i3 + 1] << bs1_1 ^ dat[i3 + 2] << bs2_1) & msk_1;
    };
    var syms = new i32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i2 = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
    for (; i2 + 2 < s2; ++i2) {
      var hv = hsh(i2);
      var imod = i2 & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i2) {
        var rem = s2 - i2;
        if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
          pos = wblk(dat, w2, 0, syms, lf, df, eb, li, bs, i2 - bs, pos);
          li = lc_1 = eb = 0, bs = i2;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l2 = 2, d = 0, ch_1 = c2, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i2 - dif)) {
          var maxn = Math.min(n2, rem) - 1;
          var maxd = Math.min(32767, i2);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i2 + l2] == dat[i2 + l2 - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i2 + nl] == dat[i2 + nl - dif]; ++nl)
                ;
              if (nl > l2) {
                l2 = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i2 - dif + j & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l2] << 18 | revfd[d];
          var lin = revfl[l2] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i2 + l2;
          ++lc_1;
        } else {
          syms[li++] = dat[i2];
          ++lf[dat[i2]];
        }
      }
    }
    for (i2 = Math.max(i2, wi); i2 < s2; ++i2) {
      syms[li++] = dat[i2];
      ++lf[dat[i2]];
    }
    pos = wblk(dat, w2, lst, syms, lf, df, eb, li, bs, i2 - bs, pos);
    if (!lst) {
      st.r = pos & 7 | w2[pos / 8 | 0] << 3;
      pos -= 7;
      st.h = head, st.p = prev, st.i = i2, st.w = wi;
    }
  } else {
    for (var i2 = st.w || 0; i2 < s2 + lst; i2 += 65535) {
      var e2 = i2 + 65535;
      if (e2 >= s2) {
        w2[pos / 8 | 0] = lst;
        e2 = s2;
      }
      pos = wfblk(w2, pos + 1, dat.subarray(i2, e2));
    }
    st.i = s2;
  }
  return slc(o2, 0, pre + shft(pos) + post);
};
var adler = function() {
  var a2 = 1, b = 0;
  return {
    p: function(d) {
      var n2 = a2, m2 = b;
      var l2 = d.length | 0;
      for (var i2 = 0; i2 != l2; ) {
        var e2 = Math.min(i2 + 2655, l2);
        for (; i2 < e2; ++i2)
          m2 += n2 += d[i2];
        n2 = (n2 & 65535) + 15 * (n2 >> 16), m2 = (m2 & 65535) + 15 * (m2 >> 16);
      }
      a2 = n2, b = m2;
    },
    d: function() {
      a2 %= 65521, b %= 65521;
      return (a2 & 255) << 24 | (a2 & 65280) << 8 | (b & 255) << 8 | b >> 8;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  if (!st) {
    st = { l: 1 };
    if (opt.dictionary) {
      var dict = opt.dictionary.subarray(-32768);
      var newDat = new u8(dict.length + dat.length);
      newDat.set(dict);
      newDat.set(dat, dict.length);
      dat = newDat;
      st.w = dict.length;
    }
  }
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var wbytes = function(d, b, v2) {
  for (; v2; ++b)
    d[b] = v2, v2 >>>= 8;
};
var zlh = function(c2, o2) {
  var lv = o2.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c2[0] = 120, c2[1] = fl2 << 6 | (o2.dictionary && 32);
  c2[1] |= 31 - (c2[0] << 8 | c2[1]) % 31;
  if (o2.dictionary) {
    var h2 = adler();
    h2.p(o2.dictionary);
    wbytes(c2, 2, h2.d());
  }
};
var zls = function(d, dict) {
  if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    err(6, "invalid zlib data");
  if ((d[1] >> 5 & 1) == 1)
    err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d[1] >> 3 & 4) + 2;
};
function zlibSync(data, opts) {
  if (!opts)
    opts = {};
  var a2 = adler();
  a2.p(data);
  var d = dopt(data, opts, opts.dictionary ? 6 : 2, 4);
  return zlh(d, opts), wbytes(d, d.length - 4, a2.d()), d;
}
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data), -4), { i: 2 }, opts, opts);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e2) {
}
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
let {
  freeze,
  seal,
  create
} = Object;
let {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const arraySplice = unapply(Array.prototype.splice);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim$1 = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set3, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set3, null);
  }
  let l2 = array.length;
  while (l2--) {
    let element = array[l2];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l2] = lcElement;
        }
        element = lcElement;
      }
    }
    set3[element] = true;
  }
  return set3;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value2] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value2)) {
        newObject[property] = cleanArray(value2);
      } else if (value2 && typeof value2 === "object" && value2.constructor === Object) {
        newObject[property] = clone(value2);
      } else {
        newObject[property] = value2;
      }
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const text = freeze(["#text"]);
const html$2 = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR,
  ATTR_WHITESPACE,
  CUSTOM_ELEMENT,
  DATA_ATTR,
  DOCTYPE_NAME,
  ERB_EXPR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  MUSTACHE_EXPR,
  TMPLIT_EXPR
});
const NODE_TYPE = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
};
const getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
const _createHooksMap = function _createHooksMap2() {
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
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root2) => createDOMPurify(root2);
  DOMPurify.version = "3.2.6";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document: document2
  } = window2;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node: Node2,
    Element: Element2,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element2.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode2 = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document2;
  const {
    importNode
  } = originalDocument;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode2 === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html$2, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html$2);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode2(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode2(node).removeChild(node);
    } catch (_2) {
      remove(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_2) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_2) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_2) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_2) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root2) {
    return createNodeIterator.call(
      root2.ownerDocument || root2,
      root2,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(element) {
    return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(value2) {
    return typeof Node2 === "function" && value2 instanceof Node2;
  };
  function _executeHooks(hooks2, currentNode, data) {
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode2(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i2 = childCount - 1; i2 >= 0; --i2) {
            const childClone = cloneNode(childNodes[i2], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value2) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value2 in document2 || value2 in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName)) ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value2) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value2))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value2, ATTR_WHITESPACE2, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value2, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value2, ATTR_WHITESPACE2, ""))) ;
    else if (value2) {
      return false;
    } else ;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l2 = attributes.length;
    while (l2--) {
      const attr = attributes[l2];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value2 = name === "value" ? initValue : stringTrim$1(initValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value2;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value2 = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value2 = SANITIZE_NAMED_PROPS_PREFIX + value2;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value2)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value2)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          value2 = stringReplace(value2, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value2)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI) ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value2 = trustedTypesPolicy.createHTML(value2);
              break;
            }
            case "TrustedScriptURL": {
              value2 = trustedTypesPolicy.createScriptURL(value2);
              break;
            }
          }
        }
      }
      if (value2 !== initValue) {
        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value2);
          } else {
            currentNode.setAttribute(name, value2);
          }
          if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
          } else {
            arrayPop(DOMPurify.removed);
          }
        } catch (_2) {
          _removeAttribute(name, currentNode);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode);
      _sanitizeAttributes(shadowNode);
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node2) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      _sanitizeElements(currentNode);
      _sanitizeAttributes(currentNode);
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value2) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value2);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();
const purify_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: purify
}, Symbol.toStringTag, { value: "Module" }));
const PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };
const withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
const isView$1 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type: type3, data }, supportsBinary, callback) => {
  if (withNativeBlob$1 && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type3] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
function toArray(data) {
  if (data instanceof Uint8Array) {
    return data;
  } else if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
  if (withNativeBlob$1 && packet.data instanceof Blob) {
    return packet.data.arrayBuffer().then(toArray).then(callback);
  } else if (withNativeArrayBuffer$2 && (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
    return callback(toArray(packet.data));
  }
  encodePacket(packet, false, (encoded) => {
    if (!TEXT_ENCODER) {
      TEXT_ENCODER = new TextEncoder();
    }
    callback(TEXT_ENCODER.encode(encoded));
  });
}
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i2 = 0; i2 < chars.length; i2++) {
  lookup$1[chars.charCodeAt(i2)] = i2;
}
const decode$1 = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i2, p2 = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup$1[base64.charCodeAt(i2)];
    encoded2 = lookup$1[base64.charCodeAt(i2 + 1)];
    encoded3 = lookup$1[base64.charCodeAt(i2 + 2)];
    encoded4 = lookup$1[base64.charCodeAt(i2 + 3)];
    bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type3 = encodedPacket.charAt(0);
  if (type3 === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type3];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type3],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type3]
  };
};
const decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer$1) {
    const decoded = decode$1(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      if (data instanceof Blob) {
        return data;
      } else {
        return new Blob([data]);
      }
    case "arraybuffer":
    default:
      if (data instanceof ArrayBuffer) {
        return data;
      } else {
        return data.buffer;
      }
  }
};
const SEPARATOR = String.fromCharCode(30);
const encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i2) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i2] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i2 = 0; i2 < encodedPackets.length; i2++) {
    const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
function createPacketEncoderStream() {
  return new TransformStream({
    transform(packet, controller) {
      encodePacketToBinary(packet, (encodedPacket) => {
        const payloadLength = encodedPacket.length;
        let header;
        if (payloadLength < 126) {
          header = new Uint8Array(1);
          new DataView(header.buffer).setUint8(0, payloadLength);
        } else if (payloadLength < 65536) {
          header = new Uint8Array(3);
          const view = new DataView(header.buffer);
          view.setUint8(0, 126);
          view.setUint16(1, payloadLength);
        } else {
          header = new Uint8Array(9);
          const view = new DataView(header.buffer);
          view.setUint8(0, 127);
          view.setBigUint64(1, BigInt(payloadLength));
        }
        if (packet.data && typeof packet.data !== "string") {
          header[0] |= 128;
        }
        controller.enqueue(header);
        controller.enqueue(encodedPacket);
      });
    }
  });
}
let TEXT_DECODER;
function totalLength(chunks) {
  return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
  if (chunks[0].length === size) {
    return chunks.shift();
  }
  const buffer = new Uint8Array(size);
  let j = 0;
  for (let i2 = 0; i2 < size; i2++) {
    buffer[i2] = chunks[0][j++];
    if (j === chunks[0].length) {
      chunks.shift();
      j = 0;
    }
  }
  if (chunks.length && j < chunks[0].length) {
    chunks[0] = chunks[0].slice(j);
  }
  return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
  if (!TEXT_DECODER) {
    TEXT_DECODER = new TextDecoder();
  }
  const chunks = [];
  let state = 0;
  let expectedLength = -1;
  let isBinary2 = false;
  return new TransformStream({
    transform(chunk, controller) {
      chunks.push(chunk);
      while (true) {
        if (state === 0) {
          if (totalLength(chunks) < 1) {
            break;
          }
          const header = concatChunks(chunks, 1);
          isBinary2 = (header[0] & 128) === 128;
          expectedLength = header[0] & 127;
          if (expectedLength < 126) {
            state = 3;
          } else if (expectedLength === 126) {
            state = 1;
          } else {
            state = 2;
          }
        } else if (state === 1) {
          if (totalLength(chunks) < 2) {
            break;
          }
          const headerArray = concatChunks(chunks, 2);
          expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
          state = 3;
        } else if (state === 2) {
          if (totalLength(chunks) < 8) {
            break;
          }
          const headerArray = concatChunks(chunks, 8);
          const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
          const n2 = view.getUint32(0);
          if (n2 > Math.pow(2, 53 - 32) - 1) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
          expectedLength = n2 * Math.pow(2, 32) + view.getUint32(4);
          state = 3;
        } else {
          if (totalLength(chunks) < expectedLength) {
            break;
          }
          const data = concatChunks(chunks, expectedLength);
          controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
          state = 0;
        }
        if (expectedLength === 0 || expectedLength > maxPayload) {
          controller.enqueue(ERROR_PACKET);
          break;
        }
      }
    }
  });
}
const protocol$1 = 4;
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }
  on2.fn = fn;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i2 = 0; i2 < callbacks.length; i2++) {
    cb = callbacks[i2];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i2, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i2 = 1; i2 < arguments.length; i2++) {
    args[i2 - 1] = arguments[i2];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
      callbacks[i2].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};
const nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
const globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() {
}
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c2 = 0, length = 0;
  for (let i2 = 0, l2 = str.length; i2 < l2; i2++) {
    c2 = str.charCodeAt(i2);
    if (c2 < 128) {
      length += 1;
    } else if (c2 < 2048) {
      length += 2;
    } else if (c2 < 55296 || c2 >= 57344) {
      length += 3;
    } else {
      i2++;
      length += 4;
    }
  }
  return length;
}
function randomString() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function encode(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l2 = pairs.length; i2 < l2; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}
class TransportError extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
}
class Transport extends Emitter {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
    this.supportsBinary = !opts.forceBase64;
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
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  /**
   * Opens the transport.
   */
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  /**
   * Closes the transport.
   */
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    }
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(onPause) {
  }
  createUri(schema, query = {}) {
    return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
  }
  _hostname() {
    const hostname = this.opts.hostname;
    return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
  }
  _port() {
    if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
      return ":" + this.opts.port;
    } else {
      return "";
    }
  }
  _query(query) {
    const encodedQuery = encode(query);
    return encodedQuery.length ? "?" + encodedQuery : "";
  }
}
class Polling extends Transport {
  constructor() {
    super(...arguments);
    this._polling = false;
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
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this._polling || !this.writable) {
      let total = 0;
      if (this._polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this._polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this._poll();
      }
    }
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "https" : "http";
    const query = this.query || {};
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
}
let value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err2) {
}
const hasCORS = value;
function empty() {
}
class BaseXHR extends Polling {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(opts) {
    super(opts);
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
}
class Request extends Emitter {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(createRequest, uri, opts) {
    super();
    this.createRequest = createRequest;
    installTimerFunctions(this, opts);
    this._opts = opts;
    this._method = opts.method || "GET";
    this._uri = uri;
    this._data = void 0 !== opts.data ? opts.data : null;
    this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var _a3;
    const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this._opts.xd;
    const xhr = this._xhr = this.createRequest(opts);
    try {
      xhr.open(this._method, this._uri, true);
      try {
        if (this._opts.extraHeaders) {
          xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
          for (let i2 in this._opts.extraHeaders) {
            if (this._opts.extraHeaders.hasOwnProperty(i2)) {
              xhr.setRequestHeader(i2, this._opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e2) {
      }
      if ("POST" === this._method) {
        try {
          xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e2) {
        }
      }
      try {
        xhr.setRequestHeader("Accept", "*/*");
      } catch (e2) {
      }
      (_a3 = this._opts.cookieJar) === null || _a3 === void 0 ? void 0 : _a3.addCookies(xhr);
      if ("withCredentials" in xhr) {
        xhr.withCredentials = this._opts.withCredentials;
      }
      if (this._opts.requestTimeout) {
        xhr.timeout = this._opts.requestTimeout;
      }
      xhr.onreadystatechange = () => {
        var _a4;
        if (xhr.readyState === 3) {
          (_a4 = this._opts.cookieJar) === null || _a4 === void 0 ? void 0 : _a4.parseCookies(
            // @ts-ignore
            xhr.getResponseHeader("set-cookie")
          );
        }
        if (4 !== xhr.readyState)
          return;
        if (200 === xhr.status || 1223 === xhr.status) {
          this._onLoad();
        } else {
          this.setTimeoutFn(() => {
            this._onError(typeof xhr.status === "number" ? xhr.status : 0);
          }, 0);
        }
      };
      xhr.send(this._data);
    } catch (e2) {
      this.setTimeoutFn(() => {
        this._onError(e2);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this._index = Request.requestsCount++;
      Request.requests[this._index] = this;
    }
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(err2) {
    this.emitReserved("error", err2, this._xhr);
    this._cleanup(true);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(fromError) {
    if ("undefined" === typeof this._xhr || null === this._xhr) {
      return;
    }
    this._xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this._xhr.abort();
      } catch (e2) {
      }
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this._index];
    }
    this._xhr = null;
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const data = this._xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this._cleanup();
    }
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
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}
const hasXHR2 = function() {
  const xhr = newRequest({
    xdomain: false
  });
  return xhr && xhr.responseType !== null;
}();
class XHR extends BaseXHR {
  constructor(opts) {
    super(opts);
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd }, this.opts);
    return new Request(newRequest, this.uri(), opts);
  }
}
function newRequest(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e2) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e2) {
    }
  }
}
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class BaseWS extends Transport {
  get name() {
    return "websocket";
  }
  doOpen() {
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = this.createSocket(uri, protocols, opts);
    } catch (err2) {
      return this.emitReserved("error", err2);
    }
    this.ws.binaryType = this.socket.binaryType;
    this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e2) => this.onError("websocket error", e2);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        try {
          this.doWrite(packet, data);
        } catch (e2) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.onerror = () => {
      };
      this.ws.close();
      this.ws = null;
    }
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const schema = this.opts.secure ? "wss" : "ws";
    const query = this.query || {};
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = randomString();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    return this.createUri(schema, query);
  }
}
const WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
class WS extends BaseWS {
  createSocket(uri, protocols, opts) {
    return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
  }
  doWrite(_packet, data) {
    this.ws.send(data);
  }
}
class WT extends Transport {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (err2) {
      return this.emitReserved("error", err2);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((err2) => {
      this.onError("webtransport error", err2);
    });
    this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((stream) => {
        const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
        const reader = stream.readable.pipeThrough(decoderStream).getReader();
        const encoderStream = createPacketEncoderStream();
        encoderStream.readable.pipeTo(stream.writable);
        this._writer = encoderStream.writable.getWriter();
        const read = () => {
          reader.read().then(({ done, value: value2 }) => {
            if (done) {
              return;
            }
            this.onPacket(value2);
            read();
          }).catch((err2) => {
          });
        };
        read();
        const packet = { type: "open" };
        if (this.query.sid) {
          packet.data = `{"sid":"${this.query.sid}"}`;
        }
        this._writer.write(packet).then(() => this.onOpen());
      });
    });
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      this._writer.write(packet).then(() => {
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    var _a3;
    (_a3 = this._transport) === null || _a3 === void 0 ? void 0 : _a3.close();
  }
}
const transports = {
  websocket: WS,
  webtransport: WT,
  polling: XHR
};
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
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
function parse(str) {
  if (str.length > 8e3) {
    throw "URI too long";
  }
  const src = str, b = str.indexOf("["), e2 = str.indexOf("]");
  if (b != -1 && e2 != -1) {
    str = str.substring(0, b) + str.substring(b, e2).replace(/:/g, ";") + str.substring(e2, str.length);
  }
  let m2 = re.exec(str || ""), uri = {}, i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m2[i2] || "";
  }
  if (b != -1 && e2 != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}
const withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
  addEventListener("offline", () => {
    OFFLINE_EVENT_LISTENERS.forEach((listener2) => listener2());
  }, false);
}
class SocketWithoutUpgrade extends Emitter {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(uri, opts) {
    super();
    this.binaryType = defaultBinaryType;
    this.writeBuffer = [];
    this._prevBufferLen = 0;
    this._pingInterval = -1;
    this._pingTimeout = -1;
    this._maxPayload = -1;
    this._pingTimeoutTime = Infinity;
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      const parsedUri = parse(uri);
      opts.hostname = parsedUri.host;
      opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
      opts.port = parsedUri.port;
      if (parsedUri.query)
        opts.query = parsedUri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = [];
    this._transportsByName = {};
    opts.transports.forEach((t2) => {
      const transportName = t2.prototype.name;
      this.transports.push(transportName);
      this._transportsByName[transportName] = t2;
    });
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: false
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    if (withEventListeners) {
      if (this.opts.closeOnBeforeunload) {
        this._beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this._beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this._offlineEventListener = () => {
          this._onClose("transport close", {
            description: "network connection lost"
          });
        };
        OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
      }
    }
    if (this.opts.withCredentials) {
      this._cookieJar = createCookieJar();
    }
    this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol$1;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[name]);
    return new this._transportsByName[name](opts);
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
    const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const transport = this.createTransport(transportName);
    transport.open();
    this.setTransport(transport);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open";
    SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this._sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          this._resetPingTimeout();
          break;
        case "error":
          const err2 = new Error("server error");
          err2.code = packet.data;
          this._onError(err2);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this._pingInterval = data.pingInterval;
    this._pingTimeout = data.pingTimeout;
    this._maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const delay = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + delay;
    this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, delay);
    if (this.opts.autoUnref) {
      this._pingTimeoutTimer.unref();
    }
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen);
    this._prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this._getWritablePackets();
      this.transport.send(packets);
      this._prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this._maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
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
      return true;
    const hasExpired = Date.now() > this._pingTimeoutTime;
    if (hasExpired) {
      this._pingTimeoutTime = 0;
      nextTick(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn);
    }
    return hasExpired;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(msg, options, fn) {
    this._sendPacket("message", msg, options, fn);
    return this;
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
  _sendPacket(type3, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type: type3,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const close = () => {
      this._onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(err2) {
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
      this.transports.shift();
      return this._open();
    }
    this.emitReserved("error", err2);
    this._onClose("transport error", err2);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (withEventListeners) {
        if (this._beforeunloadEventListener) {
          removeEventListener("beforeunload", this._beforeunloadEventListener, false);
        }
        if (this._offlineEventListener) {
          const i2 = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
          if (i2 !== -1) {
            OFFLINE_EVENT_LISTENERS.splice(i2, 1);
          }
        }
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this._prevBufferLen = 0;
    }
  }
}
SocketWithoutUpgrade.protocol = protocol$1;
class SocketWithUpgrade extends SocketWithoutUpgrade {
  constructor() {
    super(...arguments);
    this._upgrades = [];
  }
  onOpen() {
    super.onOpen();
    if ("open" === this.readyState && this.opts.upgrade) {
      for (let i2 = 0; i2 < this._upgrades.length; i2++) {
        this._probe(this._upgrades[i2]);
      }
    }
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    SocketWithoutUpgrade.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err2 = new Error("probe error");
          err2.transport = transport.name;
          this.emitReserved("upgradeError", err2);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err2) => {
      const error = new Error("probe error: " + err2);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
      this.setTimeoutFn(() => {
        if (!failed) {
          transport.open();
        }
      }, 200);
    } else {
      transport.open();
    }
  }
  onHandshake(data) {
    this._upgrades = this._filterUpgrades(data.upgrades);
    super.onHandshake(data);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    for (let i2 = 0; i2 < upgrades.length; i2++) {
      if (~this.transports.indexOf(upgrades[i2]))
        filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
}
let Socket$1 = class Socket extends SocketWithUpgrade {
  constructor(uri, opts = {}) {
    const o2 = typeof uri === "object" ? uri : opts;
    if (!o2.transports || o2.transports && typeof o2.transports[0] === "string") {
      o2.transports = (o2.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t2) => !!t2);
    }
    super(uri, o2);
  }
};
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString$1 = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString$1.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString$1.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      if (hasBinary(obj[i2])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i2 = 0; i2 < data.length; i2++) {
      newData[i2] = _deconstructPacket(data[i2], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i2 = 0; i2 < data.length; i2++) {
      data[i2] = _reconstructPacket(data[i2], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}
const RESERVED_EVENTS$1 = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
];
const protocol = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(replacer) {
    this.replacer = replacer;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
}
function isObject$1(value2) {
  return Object.prototype.toString.call(value2) === "[object Object]";
}
class Decoder extends Emitter {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(str) {
    let i2 = 0;
    const p2 = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p2.type] === void 0) {
      throw new Error("unknown packet type " + p2.type);
    }
    if (p2.type === PacketType.BINARY_EVENT || p2.type === PacketType.BINARY_ACK) {
      const start = i2 + 1;
      while (str.charAt(++i2) !== "-" && i2 != str.length) {
      }
      const buf = str.substring(start, i2);
      if (buf != Number(buf) || str.charAt(i2) !== "-") {
        throw new Error("Illegal attachments");
      }
      p2.attachments = Number(buf);
    }
    if ("/" === str.charAt(i2 + 1)) {
      const start = i2 + 1;
      while (++i2) {
        const c2 = str.charAt(i2);
        if ("," === c2)
          break;
        if (i2 === str.length)
          break;
      }
      p2.nsp = str.substring(start, i2);
    } else {
      p2.nsp = "/";
    }
    const next = str.charAt(i2 + 1);
    if ("" !== next && Number(next) == next) {
      const start = i2 + 1;
      while (++i2) {
        const c2 = str.charAt(i2);
        if (null == c2 || Number(c2) != c2) {
          --i2;
          break;
        }
        if (i2 === str.length)
          break;
      }
      p2.id = Number(str.substring(start, i2 + 1));
    }
    if (str.charAt(++i2)) {
      const payload = this.tryParse(str.substr(i2));
      if (Decoder.isPayloadValid(p2.type, payload)) {
        p2.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p2;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e2) {
      return false;
    }
  }
  static isPayloadValid(type3, payload) {
    switch (type3) {
      case PacketType.CONNECT:
        return isObject$1(payload);
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || isObject$1(payload);
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
}
class BinaryReconstructor {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
}
const parser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder,
  Encoder,
  get PacketType() {
    return PacketType;
  },
  protocol
}, Symbol.toStringTag, { value: "Module" }));
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}
const RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Socket2 extends Emitter {
  /**
   * `Socket` constructor.
   */
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
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
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
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
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
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
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
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
  emit(ev, ...args) {
    var _a3, _b2, _c;
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = (_b2 = (_a3 = this.io.engine) === null || _a3 === void 0 ? void 0 : _a3.transport) === null || _b2 === void 0 ? void 0 : _b2.writable;
    const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
    const discardPacket = this.flags.volatile && !isTransportWritable;
    if (discardPacket) ;
    else if (isConnected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  /**
   * @private
   */
  _registerAckCallback(id, ack) {
    var _a3;
    const timeout = (_a3 = this.flags.timeout) !== null && _a3 !== void 0 ? _a3 : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
        if (this.sendBuffer[i2].id === id) {
          this.sendBuffer.splice(i2, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    const fn = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, args);
    };
    fn.withError = true;
    this.acks[id] = fn;
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
  emitWithAck(ev, ...args) {
    return new Promise((resolve, reject) => {
      const fn = (arg1, arg2) => {
        return arg1 ? reject(arg1) : resolve(arg2);
      };
      fn.withError = true;
      args.push(fn);
      this.emit(ev, ...args);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err2, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err2 !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err2);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(err2) {
    if (!this.connected) {
      this.emitReserved("connect_error", err2);
    }
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
    this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((id) => {
      const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
      if (!isBuffered) {
        const ack = this.acks[id];
        delete this.acks[id];
        if (ack.withError) {
          ack.call(this, new Error("socket has been disconnected"));
        }
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err2 = new Error(packet.data.message);
        err2.data = packet.data.data;
        this.emitReserved("connect_error", err2);
        break;
    }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener2 of listeners) {
        listener2.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack !== "function") {
      return;
    }
    delete this.acks[packet.id];
    if (ack.withError) {
      packet.data.unshift(null);
    }
    ack.apply(this, packet.data);
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
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
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
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
  compress(compress) {
    this.flags.compress = compress;
    return this;
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
    this.flags.volatile = true;
    return this;
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
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
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
  onAny(listener2) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener2);
    return this;
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
  prependAny(listener2) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener2);
    return this;
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
  offAny(listener2) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener2) {
      const listeners = this._anyListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener2 === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
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
  onAnyOutgoing(listener2) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener2);
    return this;
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
  prependAnyOutgoing(listener2) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener2);
    return this;
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
  offAnyOutgoing(listener2) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener2) {
      const listeners = this._anyOutgoingListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener2 === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
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
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener2 of listeners) {
        listener2.apply(this, packet.data);
      }
    }
  }
}
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms2 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms2);
    ms2 = (Math.floor(rand * 10) & 1) == 0 ? ms2 - deviation : ms2 + deviation;
  }
  return Math.min(ms2, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min2) {
  this.ms = min2;
};
Backoff.prototype.setMax = function(max2) {
  this.max = max2;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};
class Manager extends Emitter {
  constructor(uri, opts) {
    var _a3;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a3 = opts.randomizationFactor) !== null && _a3 !== void 0 ? _a3 : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v2) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v2;
    if (!v2) {
      this.skipReconnect = true;
    }
    return this;
  }
  reconnectionAttempts(v2) {
    if (v2 === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v2;
    return this;
  }
  reconnectionDelay(v2) {
    var _a3;
    if (v2 === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v2;
    (_a3 = this.backoff) === null || _a3 === void 0 ? void 0 : _a3.setMin(v2);
    return this;
  }
  randomizationFactor(v2) {
    var _a3;
    if (v2 === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v2;
    (_a3 = this.backoff) === null || _a3 === void 0 ? void 0 : _a3.setJitter(v2);
    return this;
  }
  reconnectionDelayMax(v2) {
    var _a3;
    if (v2 === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v2;
    (_a3 = this.backoff) === null || _a3 === void 0 ? void 0 : _a3.setMax(v2);
    return this;
  }
  timeout(v2) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v2;
    return this;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket$1(this.uri, this.opts);
    const socket = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const onError = (err2) => {
      this.cleanup();
      this._readyState = "closed";
      this.emitReserved("error", err2);
      if (fn) {
        fn(err2);
      } else {
        this.maybeReconnectOnOpen();
      }
    };
    const errorSub = on(socket, "error", onError);
    if (false !== this._timeout) {
      const timeout = this._timeout;
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        onError(new Error("timeout"));
        socket.close();
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(fn) {
    return this.open(fn);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket = this.engine;
    this.subs.push(
      on(socket, "ping", this.onping.bind(this)),
      on(socket, "data", this.ondata.bind(this)),
      on(socket, "error", this.onerror.bind(this)),
      on(socket, "close", this.onclose.bind(this)),
      // @ts-ignore
      on(this.decoder, "decoded", this.ondecoded.bind(this))
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
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e2) {
      this.onclose("parse error", e2);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(err2) {
    this.emitReserved("error", err2);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(nsp, opts) {
    let socket = this.nsps[nsp];
    if (!socket) {
      socket = new Socket2(this, nsp, opts);
      this.nsps[nsp] = socket;
    } else if (this._autoConnect && !socket.active) {
      socket.connect();
    }
    return socket;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(socket) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket2 = this.nsps[nsp];
      if (socket2.active) {
        return;
      }
    }
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      this.engine.write(encodedPackets[i2], packet.options);
    }
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
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
  onclose(reason, description) {
    var _a3;
    this.cleanup();
    (_a3 = this.engine) === null || _a3 === void 0 ? void 0 : _a3.close();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err2) => {
          if (err2) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err2);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(() => {
        this.clearTimeoutFn(timer);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
}
const cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket: Socket2,
  io: lookup,
  connect: lookup
});
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var jszip_min = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
var hasRequiredJszip_min;
function requireJszip_min() {
  if (hasRequiredJszip_min) return jszip_min.exports;
  hasRequiredJszip_min = 1;
  (function(module2, exports2) {
    !function(e2) {
      module2.exports = e2();
    }(function() {
      return function s2(a2, o2, h2) {
        function u2(r2, e3) {
          if (!o2[r2]) {
            if (!a2[r2]) {
              var t2 = "function" == typeof commonjsRequire && commonjsRequire;
              if (!e3 && t2) return t2(r2, true);
              if (l2) return l2(r2, true);
              var n2 = new Error("Cannot find module '" + r2 + "'");
              throw n2.code = "MODULE_NOT_FOUND", n2;
            }
            var i2 = o2[r2] = { exports: {} };
            a2[r2][0].call(i2.exports, function(e4) {
              var t3 = a2[r2][1][e4];
              return u2(t3 || e4);
            }, i2, i2.exports, s2, a2, o2, h2);
          }
          return o2[r2].exports;
        }
        for (var l2 = "function" == typeof commonjsRequire && commonjsRequire, e2 = 0; e2 < h2.length; e2++) u2(h2[e2]);
        return u2;
      }({ 1: [function(e2, t2, r2) {
        var d = e2("./utils"), c2 = e2("./support"), p2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r2.encode = function(e3) {
          for (var t3, r3, n2, i2, s2, a2, o2, h2 = [], u2 = 0, l2 = e3.length, f2 = l2, c3 = "string" !== d.getTypeOf(e3); u2 < e3.length; ) f2 = l2 - u2, n2 = c3 ? (t3 = e3[u2++], r3 = u2 < l2 ? e3[u2++] : 0, u2 < l2 ? e3[u2++] : 0) : (t3 = e3.charCodeAt(u2++), r3 = u2 < l2 ? e3.charCodeAt(u2++) : 0, u2 < l2 ? e3.charCodeAt(u2++) : 0), i2 = t3 >> 2, s2 = (3 & t3) << 4 | r3 >> 4, a2 = 1 < f2 ? (15 & r3) << 2 | n2 >> 6 : 64, o2 = 2 < f2 ? 63 & n2 : 64, h2.push(p2.charAt(i2) + p2.charAt(s2) + p2.charAt(a2) + p2.charAt(o2));
          return h2.join("");
        }, r2.decode = function(e3) {
          var t3, r3, n2, i2, s2, a2, o2 = 0, h2 = 0, u2 = "data:";
          if (e3.substr(0, u2.length) === u2) throw new Error("Invalid base64 input, it looks like a data url.");
          var l2, f2 = 3 * (e3 = e3.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (e3.charAt(e3.length - 1) === p2.charAt(64) && f2--, e3.charAt(e3.length - 2) === p2.charAt(64) && f2--, f2 % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (l2 = c2.uint8array ? new Uint8Array(0 | f2) : new Array(0 | f2); o2 < e3.length; ) t3 = p2.indexOf(e3.charAt(o2++)) << 2 | (i2 = p2.indexOf(e3.charAt(o2++))) >> 4, r3 = (15 & i2) << 4 | (s2 = p2.indexOf(e3.charAt(o2++))) >> 2, n2 = (3 & s2) << 6 | (a2 = p2.indexOf(e3.charAt(o2++))), l2[h2++] = t3, 64 !== s2 && (l2[h2++] = r3), 64 !== a2 && (l2[h2++] = n2);
          return l2;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e2, t2, r2) {
        var n2 = e2("./external"), i2 = e2("./stream/DataWorker"), s2 = e2("./stream/Crc32Probe"), a2 = e2("./stream/DataLengthProbe");
        function o2(e3, t3, r3, n3, i3) {
          this.compressedSize = e3, this.uncompressedSize = t3, this.crc32 = r3, this.compression = n3, this.compressedContent = i3;
        }
        o2.prototype = { getContentWorker: function() {
          var e3 = new i2(n2.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a2("data_length")), t3 = this;
          return e3.on("end", function() {
            if (this.streamInfo.data_length !== t3.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e3;
        }, getCompressedWorker: function() {
          return new i2(n2.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, o2.createWorkerFrom = function(e3, t3, r3) {
          return e3.pipe(new s2()).pipe(new a2("uncompressedSize")).pipe(t3.compressWorker(r3)).pipe(new a2("compressedSize")).withStreamInfo("compression", t3);
        }, t2.exports = o2;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e2, t2, r2) {
        var n2 = e2("./stream/GenericWorker");
        r2.STORE = { magic: "\0\0", compressWorker: function() {
          return new n2("STORE compression");
        }, uncompressWorker: function() {
          return new n2("STORE decompression");
        } }, r2.DEFLATE = e2("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e2, t2, r2) {
        var n2 = e2("./utils");
        var o2 = function() {
          for (var e3, t3 = [], r3 = 0; r3 < 256; r3++) {
            e3 = r3;
            for (var n3 = 0; n3 < 8; n3++) e3 = 1 & e3 ? 3988292384 ^ e3 >>> 1 : e3 >>> 1;
            t3[r3] = e3;
          }
          return t3;
        }();
        t2.exports = function(e3, t3) {
          return void 0 !== e3 && e3.length ? "string" !== n2.getTypeOf(e3) ? function(e4, t4, r3, n3) {
            var i2 = o2, s2 = n3 + r3;
            e4 ^= -1;
            for (var a2 = n3; a2 < s2; a2++) e4 = e4 >>> 8 ^ i2[255 & (e4 ^ t4[a2])];
            return -1 ^ e4;
          }(0 | t3, e3, e3.length, 0) : function(e4, t4, r3, n3) {
            var i2 = o2, s2 = n3 + r3;
            e4 ^= -1;
            for (var a2 = n3; a2 < s2; a2++) e4 = e4 >>> 8 ^ i2[255 & (e4 ^ t4.charCodeAt(a2))];
            return -1 ^ e4;
          }(0 | t3, e3, e3.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e2, t2, r2) {
        r2.base64 = false, r2.binary = false, r2.dir = false, r2.createFolders = true, r2.date = null, r2.compression = null, r2.compressionOptions = null, r2.comment = null, r2.unixPermissions = null, r2.dosPermissions = null;
      }, {}], 6: [function(e2, t2, r2) {
        var n2 = null;
        n2 = "undefined" != typeof Promise ? Promise : e2("lie"), t2.exports = { Promise: n2 };
      }, { lie: 37 }], 7: [function(e2, t2, r2) {
        var n2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i2 = e2("pako"), s2 = e2("./utils"), a2 = e2("./stream/GenericWorker"), o2 = n2 ? "uint8array" : "array";
        function h2(e3, t3) {
          a2.call(this, "FlateWorker/" + e3), this._pako = null, this._pakoAction = e3, this._pakoOptions = t3, this.meta = {};
        }
        r2.magic = "\b\0", s2.inherits(h2, a2), h2.prototype.processChunk = function(e3) {
          this.meta = e3.meta, null === this._pako && this._createPako(), this._pako.push(s2.transformTo(o2, e3.data), false);
        }, h2.prototype.flush = function() {
          a2.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
        }, h2.prototype.cleanUp = function() {
          a2.prototype.cleanUp.call(this), this._pako = null;
        }, h2.prototype._createPako = function() {
          this._pako = new i2[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
          var t3 = this;
          this._pako.onData = function(e3) {
            t3.push({ data: e3, meta: t3.meta });
          };
        }, r2.compressWorker = function(e3) {
          return new h2("Deflate", e3);
        }, r2.uncompressWorker = function() {
          return new h2("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e2, t2, r2) {
        function A2(e3, t3) {
          var r3, n3 = "";
          for (r3 = 0; r3 < t3; r3++) n3 += String.fromCharCode(255 & e3), e3 >>>= 8;
          return n3;
        }
        function n2(e3, t3, r3, n3, i3, s3) {
          var a2, o2, h2 = e3.file, u2 = e3.compression, l2 = s3 !== O2.utf8encode, f2 = I.transformTo("string", s3(h2.name)), c2 = I.transformTo("string", O2.utf8encode(h2.name)), d = h2.comment, p2 = I.transformTo("string", s3(d)), m2 = I.transformTo("string", O2.utf8encode(d)), _2 = c2.length !== h2.name.length, g2 = m2.length !== d.length, b = "", v2 = "", y2 = "", w2 = h2.dir, k = h2.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          t3 && !r3 || (x.crc32 = e3.crc32, x.compressedSize = e3.compressedSize, x.uncompressedSize = e3.uncompressedSize);
          var S2 = 0;
          t3 && (S2 |= 8), l2 || !_2 && !g2 || (S2 |= 2048);
          var z = 0, C = 0;
          w2 && (z |= 16), "UNIX" === i3 ? (C = 798, z |= function(e4, t4) {
            var r4 = e4;
            return e4 || (r4 = t4 ? 16893 : 33204), (65535 & r4) << 16;
          }(h2.unixPermissions, w2)) : (C = 20, z |= function(e4) {
            return 63 & (e4 || 0);
          }(h2.dosPermissions)), a2 = k.getUTCHours(), a2 <<= 6, a2 |= k.getUTCMinutes(), a2 <<= 5, a2 |= k.getUTCSeconds() / 2, o2 = k.getUTCFullYear() - 1980, o2 <<= 4, o2 |= k.getUTCMonth() + 1, o2 <<= 5, o2 |= k.getUTCDate(), _2 && (v2 = A2(1, 1) + A2(B(f2), 4) + c2, b += "up" + A2(v2.length, 2) + v2), g2 && (y2 = A2(1, 1) + A2(B(p2), 4) + m2, b += "uc" + A2(y2.length, 2) + y2);
          var E = "";
          return E += "\n\0", E += A2(S2, 2), E += u2.magic, E += A2(a2, 2), E += A2(o2, 2), E += A2(x.crc32, 4), E += A2(x.compressedSize, 4), E += A2(x.uncompressedSize, 4), E += A2(f2.length, 2), E += A2(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f2 + b, dirRecord: R.CENTRAL_FILE_HEADER + A2(C, 2) + E + A2(p2.length, 2) + "\0\0\0\0" + A2(z, 4) + A2(n3, 4) + f2 + b + p2 };
        }
        var I = e2("../utils"), i2 = e2("../stream/GenericWorker"), O2 = e2("../utf8"), B = e2("../crc32"), R = e2("../signature");
        function s2(e3, t3, r3, n3) {
          i2.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t3, this.zipPlatform = r3, this.encodeFileName = n3, this.streamFiles = e3, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        I.inherits(s2, i2), s2.prototype.push = function(e3) {
          var t3 = e3.meta.percent || 0, r3 = this.entriesCount, n3 = this._sources.length;
          this.accumulate ? this.contentBuffer.push(e3) : (this.bytesWritten += e3.data.length, i2.prototype.push.call(this, { data: e3.data, meta: { currentFile: this.currentFile, percent: r3 ? (t3 + 100 * (r3 - n3 - 1)) / r3 : 100 } }));
        }, s2.prototype.openedSource = function(e3) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = e3.file.name;
          var t3 = this.streamFiles && !e3.file.dir;
          if (t3) {
            var r3 = n2(e3, t3, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: r3.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = true;
        }, s2.prototype.closedSource = function(e3) {
          this.accumulate = false;
          var t3 = this.streamFiles && !e3.file.dir, r3 = n2(e3, t3, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(r3.dirRecord), t3) this.push({ data: function(e4) {
            return R.DATA_DESCRIPTOR + A2(e4.crc32, 4) + A2(e4.compressedSize, 4) + A2(e4.uncompressedSize, 4);
          }(e3), meta: { percent: 100 } });
          else for (this.push({ data: r3.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, s2.prototype.flush = function() {
          for (var e3 = this.bytesWritten, t3 = 0; t3 < this.dirRecords.length; t3++) this.push({ data: this.dirRecords[t3], meta: { percent: 100 } });
          var r3 = this.bytesWritten - e3, n3 = function(e4, t4, r4, n4, i3) {
            var s3 = I.transformTo("string", i3(n4));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A2(e4, 2) + A2(e4, 2) + A2(t4, 4) + A2(r4, 4) + A2(s3.length, 2) + s3;
          }(this.dirRecords.length, r3, e3, this.zipComment, this.encodeFileName);
          this.push({ data: n3, meta: { percent: 100 } });
        }, s2.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, s2.prototype.registerPrevious = function(e3) {
          this._sources.push(e3);
          var t3 = this;
          return e3.on("data", function(e4) {
            t3.processChunk(e4);
          }), e3.on("end", function() {
            t3.closedSource(t3.previous.streamInfo), t3._sources.length ? t3.prepareNextSource() : t3.end();
          }), e3.on("error", function(e4) {
            t3.error(e4);
          }), this;
        }, s2.prototype.resume = function() {
          return !!i2.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
        }, s2.prototype.error = function(e3) {
          var t3 = this._sources;
          if (!i2.prototype.error.call(this, e3)) return false;
          for (var r3 = 0; r3 < t3.length; r3++) try {
            t3[r3].error(e3);
          } catch (e4) {
          }
          return true;
        }, s2.prototype.lock = function() {
          i2.prototype.lock.call(this);
          for (var e3 = this._sources, t3 = 0; t3 < e3.length; t3++) e3[t3].lock();
        }, t2.exports = s2;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e2, t2, r2) {
        var u2 = e2("../compressions"), n2 = e2("./ZipFileWorker");
        r2.generateWorker = function(e3, a2, t3) {
          var o2 = new n2(a2.streamFiles, t3, a2.platform, a2.encodeFileName), h2 = 0;
          try {
            e3.forEach(function(e4, t4) {
              h2++;
              var r3 = function(e5, t5) {
                var r4 = e5 || t5, n4 = u2[r4];
                if (!n4) throw new Error(r4 + " is not a valid compression method !");
                return n4;
              }(t4.options.compression, a2.compression), n3 = t4.options.compressionOptions || a2.compressionOptions || {}, i2 = t4.dir, s2 = t4.date;
              t4._compressWorker(r3, n3).withStreamInfo("file", { name: e4, dir: i2, date: s2, comment: t4.comment || "", unixPermissions: t4.unixPermissions, dosPermissions: t4.dosPermissions }).pipe(o2);
            }), o2.entriesCount = h2;
          } catch (e4) {
            o2.error(e4);
          }
          return o2;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e2, t2, r2) {
        function n2() {
          if (!(this instanceof n2)) return new n2();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var e3 = new n2();
            for (var t3 in this) "function" != typeof this[t3] && (e3[t3] = this[t3]);
            return e3;
          };
        }
        (n2.prototype = e2("./object")).loadAsync = e2("./load"), n2.support = e2("./support"), n2.defaults = e2("./defaults"), n2.version = "3.10.1", n2.loadAsync = function(e3, t3) {
          return new n2().loadAsync(e3, t3);
        }, n2.external = e2("./external"), t2.exports = n2;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e2, t2, r2) {
        var u2 = e2("./utils"), i2 = e2("./external"), n2 = e2("./utf8"), s2 = e2("./zipEntries"), a2 = e2("./stream/Crc32Probe"), l2 = e2("./nodejsUtils");
        function f2(n3) {
          return new i2.Promise(function(e3, t3) {
            var r3 = n3.decompressed.getContentWorker().pipe(new a2());
            r3.on("error", function(e4) {
              t3(e4);
            }).on("end", function() {
              r3.streamInfo.crc32 !== n3.decompressed.crc32 ? t3(new Error("Corrupted zip : CRC32 mismatch")) : e3();
            }).resume();
          });
        }
        t2.exports = function(e3, o2) {
          var h2 = this;
          return o2 = u2.extend(o2 || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n2.utf8decode }), l2.isNode && l2.isStream(e3) ? i2.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u2.prepareContent("the loaded zip file", e3, true, o2.optimizedBinaryString, o2.base64).then(function(e4) {
            var t3 = new s2(o2);
            return t3.load(e4), t3;
          }).then(function(e4) {
            var t3 = [i2.Promise.resolve(e4)], r3 = e4.files;
            if (o2.checkCRC32) for (var n3 = 0; n3 < r3.length; n3++) t3.push(f2(r3[n3]));
            return i2.Promise.all(t3);
          }).then(function(e4) {
            for (var t3 = e4.shift(), r3 = t3.files, n3 = 0; n3 < r3.length; n3++) {
              var i3 = r3[n3], s3 = i3.fileNameStr, a3 = u2.resolve(i3.fileNameStr);
              h2.file(a3, i3.decompressed, { binary: true, optimizedBinaryString: true, date: i3.date, dir: i3.dir, comment: i3.fileCommentStr.length ? i3.fileCommentStr : null, unixPermissions: i3.unixPermissions, dosPermissions: i3.dosPermissions, createFolders: o2.createFolders }), i3.dir || (h2.file(a3).unsafeOriginalName = s3);
            }
            return t3.zipComment.length && (h2.comment = t3.zipComment), h2;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e2, t2, r2) {
        var n2 = e2("../utils"), i2 = e2("../stream/GenericWorker");
        function s2(e3, t3) {
          i2.call(this, "Nodejs stream input adapter for " + e3), this._upstreamEnded = false, this._bindStream(t3);
        }
        n2.inherits(s2, i2), s2.prototype._bindStream = function(e3) {
          var t3 = this;
          (this._stream = e3).pause(), e3.on("data", function(e4) {
            t3.push({ data: e4, meta: { percent: 0 } });
          }).on("error", function(e4) {
            t3.isPaused ? this.generatedError = e4 : t3.error(e4);
          }).on("end", function() {
            t3.isPaused ? t3._upstreamEnded = true : t3.end();
          });
        }, s2.prototype.pause = function() {
          return !!i2.prototype.pause.call(this) && (this._stream.pause(), true);
        }, s2.prototype.resume = function() {
          return !!i2.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        }, t2.exports = s2;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e2, t2, r2) {
        var i2 = e2("readable-stream").Readable;
        function n2(e3, t3, r3) {
          i2.call(this, t3), this._helper = e3;
          var n3 = this;
          e3.on("data", function(e4, t4) {
            n3.push(e4) || n3._helper.pause(), r3 && r3(t4);
          }).on("error", function(e4) {
            n3.emit("error", e4);
          }).on("end", function() {
            n3.push(null);
          });
        }
        e2("../utils").inherits(n2, i2), n2.prototype._read = function() {
          this._helper.resume();
        }, t2.exports = n2;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e2, t2, r2) {
        t2.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e3, t3) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e3, t3);
          if ("number" == typeof e3) throw new Error('The "data" argument must not be a number');
          return new Buffer(e3, t3);
        }, allocBuffer: function(e3) {
          if (Buffer.alloc) return Buffer.alloc(e3);
          var t3 = new Buffer(e3);
          return t3.fill(0), t3;
        }, isBuffer: function(e3) {
          return Buffer.isBuffer(e3);
        }, isStream: function(e3) {
          return e3 && "function" == typeof e3.on && "function" == typeof e3.pause && "function" == typeof e3.resume;
        } };
      }, {}], 15: [function(e2, t2, r2) {
        function s2(e3, t3, r3) {
          var n3, i3 = u2.getTypeOf(t3), s3 = u2.extend(r3 || {}, f2);
          s3.date = s3.date || /* @__PURE__ */ new Date(), null !== s3.compression && (s3.compression = s3.compression.toUpperCase()), "string" == typeof s3.unixPermissions && (s3.unixPermissions = parseInt(s3.unixPermissions, 8)), s3.unixPermissions && 16384 & s3.unixPermissions && (s3.dir = true), s3.dosPermissions && 16 & s3.dosPermissions && (s3.dir = true), s3.dir && (e3 = g2(e3)), s3.createFolders && (n3 = _2(e3)) && b.call(this, n3, true);
          var a3 = "string" === i3 && false === s3.binary && false === s3.base64;
          r3 && void 0 !== r3.binary || (s3.binary = !a3), (t3 instanceof c2 && 0 === t3.uncompressedSize || s3.dir || !t3 || 0 === t3.length) && (s3.base64 = false, s3.binary = true, t3 = "", s3.compression = "STORE", i3 = "string");
          var o3 = null;
          o3 = t3 instanceof c2 || t3 instanceof l2 ? t3 : p2.isNode && p2.isStream(t3) ? new m2(e3, t3) : u2.prepareContent(e3, t3, s3.binary, s3.optimizedBinaryString, s3.base64);
          var h3 = new d(e3, o3, s3);
          this.files[e3] = h3;
        }
        var i2 = e2("./utf8"), u2 = e2("./utils"), l2 = e2("./stream/GenericWorker"), a2 = e2("./stream/StreamHelper"), f2 = e2("./defaults"), c2 = e2("./compressedObject"), d = e2("./zipObject"), o2 = e2("./generate"), p2 = e2("./nodejsUtils"), m2 = e2("./nodejs/NodejsStreamInputAdapter"), _2 = function(e3) {
          "/" === e3.slice(-1) && (e3 = e3.substring(0, e3.length - 1));
          var t3 = e3.lastIndexOf("/");
          return 0 < t3 ? e3.substring(0, t3) : "";
        }, g2 = function(e3) {
          return "/" !== e3.slice(-1) && (e3 += "/"), e3;
        }, b = function(e3, t3) {
          return t3 = void 0 !== t3 ? t3 : f2.createFolders, e3 = g2(e3), this.files[e3] || s2.call(this, e3, null, { dir: true, createFolders: t3 }), this.files[e3];
        };
        function h2(e3) {
          return "[object RegExp]" === Object.prototype.toString.call(e3);
        }
        var n2 = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(e3) {
          var t3, r3, n3;
          for (t3 in this.files) n3 = this.files[t3], (r3 = t3.slice(this.root.length, t3.length)) && t3.slice(0, this.root.length) === this.root && e3(r3, n3);
        }, filter: function(r3) {
          var n3 = [];
          return this.forEach(function(e3, t3) {
            r3(e3, t3) && n3.push(t3);
          }), n3;
        }, file: function(e3, t3, r3) {
          if (1 !== arguments.length) return e3 = this.root + e3, s2.call(this, e3, t3, r3), this;
          if (h2(e3)) {
            var n3 = e3;
            return this.filter(function(e4, t4) {
              return !t4.dir && n3.test(e4);
            });
          }
          var i3 = this.files[this.root + e3];
          return i3 && !i3.dir ? i3 : null;
        }, folder: function(r3) {
          if (!r3) return this;
          if (h2(r3)) return this.filter(function(e4, t4) {
            return t4.dir && r3.test(e4);
          });
          var e3 = this.root + r3, t3 = b.call(this, e3), n3 = this.clone();
          return n3.root = t3.name, n3;
        }, remove: function(r3) {
          r3 = this.root + r3;
          var e3 = this.files[r3];
          if (e3 || ("/" !== r3.slice(-1) && (r3 += "/"), e3 = this.files[r3]), e3 && !e3.dir) delete this.files[r3];
          else for (var t3 = this.filter(function(e4, t4) {
            return t4.name.slice(0, r3.length) === r3;
          }), n3 = 0; n3 < t3.length; n3++) delete this.files[t3[n3].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(e3) {
          var t3, r3 = {};
          try {
            if ((r3 = u2.extend(e3 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i2.utf8encode })).type = r3.type.toLowerCase(), r3.compression = r3.compression.toUpperCase(), "binarystring" === r3.type && (r3.type = "string"), !r3.type) throw new Error("No output type specified.");
            u2.checkSupport(r3.type), "darwin" !== r3.platform && "freebsd" !== r3.platform && "linux" !== r3.platform && "sunos" !== r3.platform || (r3.platform = "UNIX"), "win32" === r3.platform && (r3.platform = "DOS");
            var n3 = r3.comment || this.comment || "";
            t3 = o2.generateWorker(this, r3, n3);
          } catch (e4) {
            (t3 = new l2("error")).error(e4);
          }
          return new a2(t3, r3.type || "string", r3.mimeType);
        }, generateAsync: function(e3, t3) {
          return this.generateInternalStream(e3).accumulate(t3);
        }, generateNodeStream: function(e3, t3) {
          return (e3 = e3 || {}).type || (e3.type = "nodebuffer"), this.generateInternalStream(e3).toNodejsStream(t3);
        } };
        t2.exports = n2;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e2, t2, r2) {
        t2.exports = e2("stream");
      }, { stream: void 0 }], 17: [function(e2, t2, r2) {
        var n2 = e2("./DataReader");
        function i2(e3) {
          n2.call(this, e3);
          for (var t3 = 0; t3 < this.data.length; t3++) e3[t3] = 255 & e3[t3];
        }
        e2("../utils").inherits(i2, n2), i2.prototype.byteAt = function(e3) {
          return this.data[this.zero + e3];
        }, i2.prototype.lastIndexOfSignature = function(e3) {
          for (var t3 = e3.charCodeAt(0), r3 = e3.charCodeAt(1), n3 = e3.charCodeAt(2), i3 = e3.charCodeAt(3), s2 = this.length - 4; 0 <= s2; --s2) if (this.data[s2] === t3 && this.data[s2 + 1] === r3 && this.data[s2 + 2] === n3 && this.data[s2 + 3] === i3) return s2 - this.zero;
          return -1;
        }, i2.prototype.readAndCheckSignature = function(e3) {
          var t3 = e3.charCodeAt(0), r3 = e3.charCodeAt(1), n3 = e3.charCodeAt(2), i3 = e3.charCodeAt(3), s2 = this.readData(4);
          return t3 === s2[0] && r3 === s2[1] && n3 === s2[2] && i3 === s2[3];
        }, i2.prototype.readData = function(e3) {
          if (this.checkOffset(e3), 0 === e3) return [];
          var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
          return this.index += e3, t3;
        }, t2.exports = i2;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e2, t2, r2) {
        var n2 = e2("../utils");
        function i2(e3) {
          this.data = e3, this.length = e3.length, this.index = 0, this.zero = 0;
        }
        i2.prototype = { checkOffset: function(e3) {
          this.checkIndex(this.index + e3);
        }, checkIndex: function(e3) {
          if (this.length < this.zero + e3 || e3 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e3 + "). Corrupted zip ?");
        }, setIndex: function(e3) {
          this.checkIndex(e3), this.index = e3;
        }, skip: function(e3) {
          this.setIndex(this.index + e3);
        }, byteAt: function() {
        }, readInt: function(e3) {
          var t3, r3 = 0;
          for (this.checkOffset(e3), t3 = this.index + e3 - 1; t3 >= this.index; t3--) r3 = (r3 << 8) + this.byteAt(t3);
          return this.index += e3, r3;
        }, readString: function(e3) {
          return n2.transformTo("string", this.readData(e3));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var e3 = this.readInt(4);
          return new Date(Date.UTC(1980 + (e3 >> 25 & 127), (e3 >> 21 & 15) - 1, e3 >> 16 & 31, e3 >> 11 & 31, e3 >> 5 & 63, (31 & e3) << 1));
        } }, t2.exports = i2;
      }, { "../utils": 32 }], 19: [function(e2, t2, r2) {
        var n2 = e2("./Uint8ArrayReader");
        function i2(e3) {
          n2.call(this, e3);
        }
        e2("../utils").inherits(i2, n2), i2.prototype.readData = function(e3) {
          this.checkOffset(e3);
          var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
          return this.index += e3, t3;
        }, t2.exports = i2;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e2, t2, r2) {
        var n2 = e2("./DataReader");
        function i2(e3) {
          n2.call(this, e3);
        }
        e2("../utils").inherits(i2, n2), i2.prototype.byteAt = function(e3) {
          return this.data.charCodeAt(this.zero + e3);
        }, i2.prototype.lastIndexOfSignature = function(e3) {
          return this.data.lastIndexOf(e3) - this.zero;
        }, i2.prototype.readAndCheckSignature = function(e3) {
          return e3 === this.readData(4);
        }, i2.prototype.readData = function(e3) {
          this.checkOffset(e3);
          var t3 = this.data.slice(this.zero + this.index, this.zero + this.index + e3);
          return this.index += e3, t3;
        }, t2.exports = i2;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e2, t2, r2) {
        var n2 = e2("./ArrayReader");
        function i2(e3) {
          n2.call(this, e3);
        }
        e2("../utils").inherits(i2, n2), i2.prototype.readData = function(e3) {
          if (this.checkOffset(e3), 0 === e3) return new Uint8Array(0);
          var t3 = this.data.subarray(this.zero + this.index, this.zero + this.index + e3);
          return this.index += e3, t3;
        }, t2.exports = i2;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e2, t2, r2) {
        var n2 = e2("../utils"), i2 = e2("../support"), s2 = e2("./ArrayReader"), a2 = e2("./StringReader"), o2 = e2("./NodeBufferReader"), h2 = e2("./Uint8ArrayReader");
        t2.exports = function(e3) {
          var t3 = n2.getTypeOf(e3);
          return n2.checkSupport(t3), "string" !== t3 || i2.uint8array ? "nodebuffer" === t3 ? new o2(e3) : i2.uint8array ? new h2(n2.transformTo("uint8array", e3)) : new s2(n2.transformTo("array", e3)) : new a2(e3);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e2, t2, r2) {
        r2.LOCAL_FILE_HEADER = "PK", r2.CENTRAL_FILE_HEADER = "PK", r2.CENTRAL_DIRECTORY_END = "PK", r2.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r2.ZIP64_CENTRAL_DIRECTORY_END = "PK", r2.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e2, t2, r2) {
        var n2 = e2("./GenericWorker"), i2 = e2("../utils");
        function s2(e3) {
          n2.call(this, "ConvertWorker to " + e3), this.destType = e3;
        }
        i2.inherits(s2, n2), s2.prototype.processChunk = function(e3) {
          this.push({ data: i2.transformTo(this.destType, e3.data), meta: e3.meta });
        }, t2.exports = s2;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e2, t2, r2) {
        var n2 = e2("./GenericWorker"), i2 = e2("../crc32");
        function s2() {
          n2.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e2("../utils").inherits(s2, n2), s2.prototype.processChunk = function(e3) {
          this.streamInfo.crc32 = i2(e3.data, this.streamInfo.crc32 || 0), this.push(e3);
        }, t2.exports = s2;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e2, t2, r2) {
        var n2 = e2("../utils"), i2 = e2("./GenericWorker");
        function s2(e3) {
          i2.call(this, "DataLengthProbe for " + e3), this.propName = e3, this.withStreamInfo(e3, 0);
        }
        n2.inherits(s2, i2), s2.prototype.processChunk = function(e3) {
          if (e3) {
            var t3 = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t3 + e3.data.length;
          }
          i2.prototype.processChunk.call(this, e3);
        }, t2.exports = s2;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e2, t2, r2) {
        var n2 = e2("../utils"), i2 = e2("./GenericWorker");
        function s2(e3) {
          i2.call(this, "DataWorker");
          var t3 = this;
          this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e3.then(function(e4) {
            t3.dataIsReady = true, t3.data = e4, t3.max = e4 && e4.length || 0, t3.type = n2.getTypeOf(e4), t3.isPaused || t3._tickAndRepeat();
          }, function(e4) {
            t3.error(e4);
          });
        }
        n2.inherits(s2, i2), s2.prototype.cleanUp = function() {
          i2.prototype.cleanUp.call(this), this.data = null;
        }, s2.prototype.resume = function() {
          return !!i2.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n2.delay(this._tickAndRepeat, [], this)), true);
        }, s2.prototype._tickAndRepeat = function() {
          this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n2.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
        }, s2.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return false;
          var e3 = null, t3 = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              e3 = this.data.substring(this.index, t3);
              break;
            case "uint8array":
              e3 = this.data.subarray(this.index, t3);
              break;
            case "array":
            case "nodebuffer":
              e3 = this.data.slice(this.index, t3);
          }
          return this.index = t3, this.push({ data: e3, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, t2.exports = s2;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e2, t2, r2) {
        function n2(e3) {
          this.name = e3 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n2.prototype = { push: function(e3) {
          this.emit("data", e3);
        }, end: function() {
          if (this.isFinished) return false;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = true;
          } catch (e3) {
            this.emit("error", e3);
          }
          return true;
        }, error: function(e3) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e3 : (this.isFinished = true, this.emit("error", e3), this.previous && this.previous.error(e3), this.cleanUp()), true);
        }, on: function(e3, t3) {
          return this._listeners[e3].push(t3), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(e3, t3) {
          if (this._listeners[e3]) for (var r3 = 0; r3 < this._listeners[e3].length; r3++) this._listeners[e3][r3].call(this, t3);
        }, pipe: function(e3) {
          return e3.registerPrevious(this);
        }, registerPrevious: function(e3) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e3.streamInfo, this.mergeStreamInfo(), this.previous = e3;
          var t3 = this;
          return e3.on("data", function(e4) {
            t3.processChunk(e4);
          }), e3.on("end", function() {
            t3.end();
          }), e3.on("error", function(e4) {
            t3.error(e4);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return false;
          var e3 = this.isPaused = false;
          return this.generatedError && (this.error(this.generatedError), e3 = true), this.previous && this.previous.resume(), !e3;
        }, flush: function() {
        }, processChunk: function(e3) {
          this.push(e3);
        }, withStreamInfo: function(e3, t3) {
          return this.extraStreamInfo[e3] = t3, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var e3 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e3) && (this.streamInfo[e3] = this.extraStreamInfo[e3]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = true, this.previous && this.previous.lock();
        }, toString: function() {
          var e3 = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e3 : e3;
        } }, t2.exports = n2;
      }, {}], 29: [function(e2, t2, r2) {
        var h2 = e2("../utils"), i2 = e2("./ConvertWorker"), s2 = e2("./GenericWorker"), u2 = e2("../base64"), n2 = e2("../support"), a2 = e2("../external"), o2 = null;
        if (n2.nodestream) try {
          o2 = e2("../nodejs/NodejsStreamOutputAdapter");
        } catch (e3) {
        }
        function l2(e3, o3) {
          return new a2.Promise(function(t3, r3) {
            var n3 = [], i3 = e3._internalType, s3 = e3._outputType, a3 = e3._mimeType;
            e3.on("data", function(e4, t4) {
              n3.push(e4), o3 && o3(t4);
            }).on("error", function(e4) {
              n3 = [], r3(e4);
            }).on("end", function() {
              try {
                var e4 = function(e5, t4, r4) {
                  switch (e5) {
                    case "blob":
                      return h2.newBlob(h2.transformTo("arraybuffer", t4), r4);
                    case "base64":
                      return u2.encode(t4);
                    default:
                      return h2.transformTo(e5, t4);
                  }
                }(s3, function(e5, t4) {
                  var r4, n4 = 0, i4 = null, s4 = 0;
                  for (r4 = 0; r4 < t4.length; r4++) s4 += t4[r4].length;
                  switch (e5) {
                    case "string":
                      return t4.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t4);
                    case "uint8array":
                      for (i4 = new Uint8Array(s4), r4 = 0; r4 < t4.length; r4++) i4.set(t4[r4], n4), n4 += t4[r4].length;
                      return i4;
                    case "nodebuffer":
                      return Buffer.concat(t4);
                    default:
                      throw new Error("concat : unsupported type '" + e5 + "'");
                  }
                }(i3, n3), a3);
                t3(e4);
              } catch (e5) {
                r3(e5);
              }
              n3 = [];
            }).resume();
          });
        }
        function f2(e3, t3, r3) {
          var n3 = t3;
          switch (t3) {
            case "blob":
            case "arraybuffer":
              n3 = "uint8array";
              break;
            case "base64":
              n3 = "string";
          }
          try {
            this._internalType = n3, this._outputType = t3, this._mimeType = r3, h2.checkSupport(n3), this._worker = e3.pipe(new i2(n3)), e3.lock();
          } catch (e4) {
            this._worker = new s2("error"), this._worker.error(e4);
          }
        }
        f2.prototype = { accumulate: function(e3) {
          return l2(this, e3);
        }, on: function(e3, t3) {
          var r3 = this;
          return "data" === e3 ? this._worker.on(e3, function(e4) {
            t3.call(r3, e4.data, e4.meta);
          }) : this._worker.on(e3, function() {
            h2.delay(t3, arguments, r3);
          }), this;
        }, resume: function() {
          return h2.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(e3) {
          if (h2.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o2(this, { objectMode: "nodebuffer" !== this._outputType }, e3);
        } }, t2.exports = f2;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e2, t2, r2) {
        if (r2.base64 = true, r2.array = true, r2.string = true, r2.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r2.nodebuffer = "undefined" != typeof Buffer, r2.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r2.blob = false;
        else {
          var n2 = new ArrayBuffer(0);
          try {
            r2.blob = 0 === new Blob([n2], { type: "application/zip" }).size;
          } catch (e3) {
            try {
              var i2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i2.append(n2), r2.blob = 0 === i2.getBlob("application/zip").size;
            } catch (e4) {
              r2.blob = false;
            }
          }
        }
        try {
          r2.nodestream = !!e2("readable-stream").Readable;
        } catch (e3) {
          r2.nodestream = false;
        }
      }, { "readable-stream": 16 }], 31: [function(e2, t2, s2) {
        for (var o2 = e2("./utils"), h2 = e2("./support"), r2 = e2("./nodejsUtils"), n2 = e2("./stream/GenericWorker"), u2 = new Array(256), i2 = 0; i2 < 256; i2++) u2[i2] = 252 <= i2 ? 6 : 248 <= i2 ? 5 : 240 <= i2 ? 4 : 224 <= i2 ? 3 : 192 <= i2 ? 2 : 1;
        u2[254] = u2[254] = 1;
        function a2() {
          n2.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function l2() {
          n2.call(this, "utf-8 encode");
        }
        s2.utf8encode = function(e3) {
          return h2.nodebuffer ? r2.newBufferFrom(e3, "utf-8") : function(e4) {
            var t3, r3, n3, i3, s3, a3 = e4.length, o3 = 0;
            for (i3 = 0; i3 < a3; i3++) 55296 == (64512 & (r3 = e4.charCodeAt(i3))) && i3 + 1 < a3 && 56320 == (64512 & (n3 = e4.charCodeAt(i3 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i3++), o3 += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
            for (t3 = h2.uint8array ? new Uint8Array(o3) : new Array(o3), i3 = s3 = 0; s3 < o3; i3++) 55296 == (64512 & (r3 = e4.charCodeAt(i3))) && i3 + 1 < a3 && 56320 == (64512 & (n3 = e4.charCodeAt(i3 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i3++), r3 < 128 ? t3[s3++] = r3 : (r3 < 2048 ? t3[s3++] = 192 | r3 >>> 6 : (r3 < 65536 ? t3[s3++] = 224 | r3 >>> 12 : (t3[s3++] = 240 | r3 >>> 18, t3[s3++] = 128 | r3 >>> 12 & 63), t3[s3++] = 128 | r3 >>> 6 & 63), t3[s3++] = 128 | 63 & r3);
            return t3;
          }(e3);
        }, s2.utf8decode = function(e3) {
          return h2.nodebuffer ? o2.transformTo("nodebuffer", e3).toString("utf-8") : function(e4) {
            var t3, r3, n3, i3, s3 = e4.length, a3 = new Array(2 * s3);
            for (t3 = r3 = 0; t3 < s3; ) if ((n3 = e4[t3++]) < 128) a3[r3++] = n3;
            else if (4 < (i3 = u2[n3])) a3[r3++] = 65533, t3 += i3 - 1;
            else {
              for (n3 &= 2 === i3 ? 31 : 3 === i3 ? 15 : 7; 1 < i3 && t3 < s3; ) n3 = n3 << 6 | 63 & e4[t3++], i3--;
              1 < i3 ? a3[r3++] = 65533 : n3 < 65536 ? a3[r3++] = n3 : (n3 -= 65536, a3[r3++] = 55296 | n3 >> 10 & 1023, a3[r3++] = 56320 | 1023 & n3);
            }
            return a3.length !== r3 && (a3.subarray ? a3 = a3.subarray(0, r3) : a3.length = r3), o2.applyFromCharCode(a3);
          }(e3 = o2.transformTo(h2.uint8array ? "uint8array" : "array", e3));
        }, o2.inherits(a2, n2), a2.prototype.processChunk = function(e3) {
          var t3 = o2.transformTo(h2.uint8array ? "uint8array" : "array", e3.data);
          if (this.leftOver && this.leftOver.length) {
            if (h2.uint8array) {
              var r3 = t3;
              (t3 = new Uint8Array(r3.length + this.leftOver.length)).set(this.leftOver, 0), t3.set(r3, this.leftOver.length);
            } else t3 = this.leftOver.concat(t3);
            this.leftOver = null;
          }
          var n3 = function(e4, t4) {
            var r4;
            for ((t4 = t4 || e4.length) > e4.length && (t4 = e4.length), r4 = t4 - 1; 0 <= r4 && 128 == (192 & e4[r4]); ) r4--;
            return r4 < 0 ? t4 : 0 === r4 ? t4 : r4 + u2[e4[r4]] > t4 ? r4 : t4;
          }(t3), i3 = t3;
          n3 !== t3.length && (h2.uint8array ? (i3 = t3.subarray(0, n3), this.leftOver = t3.subarray(n3, t3.length)) : (i3 = t3.slice(0, n3), this.leftOver = t3.slice(n3, t3.length))), this.push({ data: s2.utf8decode(i3), meta: e3.meta });
        }, a2.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: s2.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, s2.Utf8DecodeWorker = a2, o2.inherits(l2, n2), l2.prototype.processChunk = function(e3) {
          this.push({ data: s2.utf8encode(e3.data), meta: e3.meta });
        }, s2.Utf8EncodeWorker = l2;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e2, t2, a2) {
        var o2 = e2("./support"), h2 = e2("./base64"), r2 = e2("./nodejsUtils"), u2 = e2("./external");
        function n2(e3) {
          return e3;
        }
        function l2(e3, t3) {
          for (var r3 = 0; r3 < e3.length; ++r3) t3[r3] = 255 & e3.charCodeAt(r3);
          return t3;
        }
        e2("setimmediate"), a2.newBlob = function(t3, r3) {
          a2.checkSupport("blob");
          try {
            return new Blob([t3], { type: r3 });
          } catch (e3) {
            try {
              var n3 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return n3.append(t3), n3.getBlob(r3);
            } catch (e4) {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var i2 = { stringifyByChunk: function(e3, t3, r3) {
          var n3 = [], i3 = 0, s3 = e3.length;
          if (s3 <= r3) return String.fromCharCode.apply(null, e3);
          for (; i3 < s3; ) "array" === t3 || "nodebuffer" === t3 ? n3.push(String.fromCharCode.apply(null, e3.slice(i3, Math.min(i3 + r3, s3)))) : n3.push(String.fromCharCode.apply(null, e3.subarray(i3, Math.min(i3 + r3, s3)))), i3 += r3;
          return n3.join("");
        }, stringifyByChar: function(e3) {
          for (var t3 = "", r3 = 0; r3 < e3.length; r3++) t3 += String.fromCharCode(e3[r3]);
          return t3;
        }, applyCanBeUsed: { uint8array: function() {
          try {
            return o2.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e3) {
            return false;
          }
        }(), nodebuffer: function() {
          try {
            return o2.nodebuffer && 1 === String.fromCharCode.apply(null, r2.allocBuffer(1)).length;
          } catch (e3) {
            return false;
          }
        }() } };
        function s2(e3) {
          var t3 = 65536, r3 = a2.getTypeOf(e3), n3 = true;
          if ("uint8array" === r3 ? n3 = i2.applyCanBeUsed.uint8array : "nodebuffer" === r3 && (n3 = i2.applyCanBeUsed.nodebuffer), n3) for (; 1 < t3; ) try {
            return i2.stringifyByChunk(e3, r3, t3);
          } catch (e4) {
            t3 = Math.floor(t3 / 2);
          }
          return i2.stringifyByChar(e3);
        }
        function f2(e3, t3) {
          for (var r3 = 0; r3 < e3.length; r3++) t3[r3] = e3[r3];
          return t3;
        }
        a2.applyFromCharCode = s2;
        var c2 = {};
        c2.string = { string: n2, array: function(e3) {
          return l2(e3, new Array(e3.length));
        }, arraybuffer: function(e3) {
          return c2.string.uint8array(e3).buffer;
        }, uint8array: function(e3) {
          return l2(e3, new Uint8Array(e3.length));
        }, nodebuffer: function(e3) {
          return l2(e3, r2.allocBuffer(e3.length));
        } }, c2.array = { string: s2, array: n2, arraybuffer: function(e3) {
          return new Uint8Array(e3).buffer;
        }, uint8array: function(e3) {
          return new Uint8Array(e3);
        }, nodebuffer: function(e3) {
          return r2.newBufferFrom(e3);
        } }, c2.arraybuffer = { string: function(e3) {
          return s2(new Uint8Array(e3));
        }, array: function(e3) {
          return f2(new Uint8Array(e3), new Array(e3.byteLength));
        }, arraybuffer: n2, uint8array: function(e3) {
          return new Uint8Array(e3);
        }, nodebuffer: function(e3) {
          return r2.newBufferFrom(new Uint8Array(e3));
        } }, c2.uint8array = { string: s2, array: function(e3) {
          return f2(e3, new Array(e3.length));
        }, arraybuffer: function(e3) {
          return e3.buffer;
        }, uint8array: n2, nodebuffer: function(e3) {
          return r2.newBufferFrom(e3);
        } }, c2.nodebuffer = { string: s2, array: function(e3) {
          return f2(e3, new Array(e3.length));
        }, arraybuffer: function(e3) {
          return c2.nodebuffer.uint8array(e3).buffer;
        }, uint8array: function(e3) {
          return f2(e3, new Uint8Array(e3.length));
        }, nodebuffer: n2 }, a2.transformTo = function(e3, t3) {
          if (t3 = t3 || "", !e3) return t3;
          a2.checkSupport(e3);
          var r3 = a2.getTypeOf(t3);
          return c2[r3][e3](t3);
        }, a2.resolve = function(e3) {
          for (var t3 = e3.split("/"), r3 = [], n3 = 0; n3 < t3.length; n3++) {
            var i3 = t3[n3];
            "." === i3 || "" === i3 && 0 !== n3 && n3 !== t3.length - 1 || (".." === i3 ? r3.pop() : r3.push(i3));
          }
          return r3.join("/");
        }, a2.getTypeOf = function(e3) {
          return "string" == typeof e3 ? "string" : "[object Array]" === Object.prototype.toString.call(e3) ? "array" : o2.nodebuffer && r2.isBuffer(e3) ? "nodebuffer" : o2.uint8array && e3 instanceof Uint8Array ? "uint8array" : o2.arraybuffer && e3 instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a2.checkSupport = function(e3) {
          if (!o2[e3.toLowerCase()]) throw new Error(e3 + " is not supported by this platform");
        }, a2.MAX_VALUE_16BITS = 65535, a2.MAX_VALUE_32BITS = -1, a2.pretty = function(e3) {
          var t3, r3, n3 = "";
          for (r3 = 0; r3 < (e3 || "").length; r3++) n3 += "\\x" + ((t3 = e3.charCodeAt(r3)) < 16 ? "0" : "") + t3.toString(16).toUpperCase();
          return n3;
        }, a2.delay = function(e3, t3, r3) {
          setImmediate(function() {
            e3.apply(r3 || null, t3 || []);
          });
        }, a2.inherits = function(e3, t3) {
          function r3() {
          }
          r3.prototype = t3.prototype, e3.prototype = new r3();
        }, a2.extend = function() {
          var e3, t3, r3 = {};
          for (e3 = 0; e3 < arguments.length; e3++) for (t3 in arguments[e3]) Object.prototype.hasOwnProperty.call(arguments[e3], t3) && void 0 === r3[t3] && (r3[t3] = arguments[e3][t3]);
          return r3;
        }, a2.prepareContent = function(r3, e3, n3, i3, s3) {
          return u2.Promise.resolve(e3).then(function(n4) {
            return o2.blob && (n4 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n4))) && "undefined" != typeof FileReader ? new u2.Promise(function(t3, r4) {
              var e4 = new FileReader();
              e4.onload = function(e5) {
                t3(e5.target.result);
              }, e4.onerror = function(e5) {
                r4(e5.target.error);
              }, e4.readAsArrayBuffer(n4);
            }) : n4;
          }).then(function(e4) {
            var t3 = a2.getTypeOf(e4);
            return t3 ? ("arraybuffer" === t3 ? e4 = a2.transformTo("uint8array", e4) : "string" === t3 && (s3 ? e4 = h2.decode(e4) : n3 && true !== i3 && (e4 = function(e5) {
              return l2(e5, o2.uint8array ? new Uint8Array(e5.length) : new Array(e5.length));
            }(e4))), e4) : u2.Promise.reject(new Error("Can't read the data of '" + r3 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e2, t2, r2) {
        var n2 = e2("./reader/readerFor"), i2 = e2("./utils"), s2 = e2("./signature"), a2 = e2("./zipEntry"), o2 = e2("./support");
        function h2(e3) {
          this.files = [], this.loadOptions = e3;
        }
        h2.prototype = { checkSignature: function(e3) {
          if (!this.reader.readAndCheckSignature(e3)) {
            this.reader.index -= 4;
            var t3 = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i2.pretty(t3) + ", expected " + i2.pretty(e3) + ")");
          }
        }, isSignature: function(e3, t3) {
          var r3 = this.reader.index;
          this.reader.setIndex(e3);
          var n3 = this.reader.readString(4) === t3;
          return this.reader.setIndex(r3), n3;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e3 = this.reader.readData(this.zipCommentLength), t3 = o2.uint8array ? "uint8array" : "array", r3 = i2.transformTo(t3, e3);
          this.zipComment = this.loadOptions.decodeFileName(r3);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e3, t3, r3, n3 = this.zip64EndOfCentralSize - 44; 0 < n3; ) e3 = this.reader.readInt(2), t3 = this.reader.readInt(4), r3 = this.reader.readData(t3), this.zip64ExtensibleData[e3] = { id: e3, length: t3, value: r3 };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var e3, t3;
          for (e3 = 0; e3 < this.files.length; e3++) t3 = this.files[e3], this.reader.setIndex(t3.localHeaderOffset), this.checkSignature(s2.LOCAL_FILE_HEADER), t3.readLocalPart(this.reader), t3.handleUTF8(), t3.processAttributes();
        }, readCentralDir: function() {
          var e3;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s2.CENTRAL_FILE_HEADER); ) (e3 = new a2({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e3);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var e3 = this.reader.lastIndexOfSignature(s2.CENTRAL_DIRECTORY_END);
          if (e3 < 0) throw !this.isSignature(0, s2.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e3);
          var t3 = e3;
          if (this.checkSignature(s2.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i2.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i2.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i2.MAX_VALUE_16BITS || this.centralDirRecords === i2.MAX_VALUE_16BITS || this.centralDirSize === i2.MAX_VALUE_32BITS || this.centralDirOffset === i2.MAX_VALUE_32BITS) {
            if (this.zip64 = true, (e3 = this.reader.lastIndexOfSignature(s2.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e3), this.checkSignature(s2.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s2.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s2.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s2.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r3 = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r3 += 20, r3 += 12 + this.zip64EndOfCentralSize);
          var n3 = t3 - r3;
          if (0 < n3) this.isSignature(t3, s2.CENTRAL_FILE_HEADER) || (this.reader.zero = n3);
          else if (n3 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n3) + " bytes.");
        }, prepareReader: function(e3) {
          this.reader = n2(e3);
        }, load: function(e3) {
          this.prepareReader(e3), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, t2.exports = h2;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e2, t2, r2) {
        var n2 = e2("./reader/readerFor"), s2 = e2("./utils"), i2 = e2("./compressedObject"), a2 = e2("./crc32"), o2 = e2("./utf8"), h2 = e2("./compressions"), u2 = e2("./support");
        function l2(e3, t3) {
          this.options = e3, this.loadOptions = t3;
        }
        l2.prototype = { isEncrypted: function() {
          return 1 == (1 & this.bitFlag);
        }, useUTF8: function() {
          return 2048 == (2048 & this.bitFlag);
        }, readLocalPart: function(e3) {
          var t3, r3;
          if (e3.skip(22), this.fileNameLength = e3.readInt(2), r3 = e3.readInt(2), this.fileName = e3.readData(this.fileNameLength), e3.skip(r3), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t3 = function(e4) {
            for (var t4 in h2) if (Object.prototype.hasOwnProperty.call(h2, t4) && h2[t4].magic === e4) return h2[t4];
            return null;
          }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s2.pretty(this.compressionMethod) + " unknown (inner file : " + s2.transformTo("string", this.fileName) + ")");
          this.decompressed = new i2(this.compressedSize, this.uncompressedSize, this.crc32, t3, e3.readData(this.compressedSize));
        }, readCentralPart: function(e3) {
          this.versionMadeBy = e3.readInt(2), e3.skip(2), this.bitFlag = e3.readInt(2), this.compressionMethod = e3.readString(2), this.date = e3.readDate(), this.crc32 = e3.readInt(4), this.compressedSize = e3.readInt(4), this.uncompressedSize = e3.readInt(4);
          var t3 = e3.readInt(2);
          if (this.extraFieldsLength = e3.readInt(2), this.fileCommentLength = e3.readInt(2), this.diskNumberStart = e3.readInt(2), this.internalFileAttributes = e3.readInt(2), this.externalFileAttributes = e3.readInt(4), this.localHeaderOffset = e3.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e3.skip(t3), this.readExtraFields(e3), this.parseZIP64ExtraField(e3), this.fileComment = e3.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e3 = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e3 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var e3 = n2(this.extraFields[1].value);
            this.uncompressedSize === s2.MAX_VALUE_32BITS && (this.uncompressedSize = e3.readInt(8)), this.compressedSize === s2.MAX_VALUE_32BITS && (this.compressedSize = e3.readInt(8)), this.localHeaderOffset === s2.MAX_VALUE_32BITS && (this.localHeaderOffset = e3.readInt(8)), this.diskNumberStart === s2.MAX_VALUE_32BITS && (this.diskNumberStart = e3.readInt(4));
          }
        }, readExtraFields: function(e3) {
          var t3, r3, n3, i3 = e3.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e3.index + 4 < i3; ) t3 = e3.readInt(2), r3 = e3.readInt(2), n3 = e3.readData(r3), this.extraFields[t3] = { id: t3, length: r3, value: n3 };
          e3.setIndex(i3);
        }, handleUTF8: function() {
          var e3 = u2.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o2.utf8decode(this.fileName), this.fileCommentStr = o2.utf8decode(this.fileComment);
          else {
            var t3 = this.findExtraFieldUnicodePath();
            if (null !== t3) this.fileNameStr = t3;
            else {
              var r3 = s2.transformTo(e3, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r3);
            }
            var n3 = this.findExtraFieldUnicodeComment();
            if (null !== n3) this.fileCommentStr = n3;
            else {
              var i3 = s2.transformTo(e3, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i3);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var e3 = this.extraFields[28789];
          if (e3) {
            var t3 = n2(e3.value);
            return 1 !== t3.readInt(1) ? null : a2(this.fileName) !== t3.readInt(4) ? null : o2.utf8decode(t3.readData(e3.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var e3 = this.extraFields[25461];
          if (e3) {
            var t3 = n2(e3.value);
            return 1 !== t3.readInt(1) ? null : a2(this.fileComment) !== t3.readInt(4) ? null : o2.utf8decode(t3.readData(e3.length - 5));
          }
          return null;
        } }, t2.exports = l2;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e2, t2, r2) {
        function n2(e3, t3, r3) {
          this.name = e3, this.dir = r3.dir, this.date = r3.date, this.comment = r3.comment, this.unixPermissions = r3.unixPermissions, this.dosPermissions = r3.dosPermissions, this._data = t3, this._dataBinary = r3.binary, this.options = { compression: r3.compression, compressionOptions: r3.compressionOptions };
        }
        var s2 = e2("./stream/StreamHelper"), i2 = e2("./stream/DataWorker"), a2 = e2("./utf8"), o2 = e2("./compressedObject"), h2 = e2("./stream/GenericWorker");
        n2.prototype = { internalStream: function(e3) {
          var t3 = null, r3 = "string";
          try {
            if (!e3) throw new Error("No output type specified.");
            var n3 = "string" === (r3 = e3.toLowerCase()) || "text" === r3;
            "binarystring" !== r3 && "text" !== r3 || (r3 = "string"), t3 = this._decompressWorker();
            var i3 = !this._dataBinary;
            i3 && !n3 && (t3 = t3.pipe(new a2.Utf8EncodeWorker())), !i3 && n3 && (t3 = t3.pipe(new a2.Utf8DecodeWorker()));
          } catch (e4) {
            (t3 = new h2("error")).error(e4);
          }
          return new s2(t3, r3, "");
        }, async: function(e3, t3) {
          return this.internalStream(e3).accumulate(t3);
        }, nodeStream: function(e3, t3) {
          return this.internalStream(e3 || "nodebuffer").toNodejsStream(t3);
        }, _compressWorker: function(e3, t3) {
          if (this._data instanceof o2 && this._data.compression.magic === e3.magic) return this._data.getCompressedWorker();
          var r3 = this._decompressWorker();
          return this._dataBinary || (r3 = r3.pipe(new a2.Utf8EncodeWorker())), o2.createWorkerFrom(r3, e3, t3);
        }, _decompressWorker: function() {
          return this._data instanceof o2 ? this._data.getContentWorker() : this._data instanceof h2 ? this._data : new i2(this._data);
        } };
        for (var u2 = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l2 = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f2 = 0; f2 < u2.length; f2++) n2.prototype[u2[f2]] = l2;
        t2.exports = n2;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e2, l2, t2) {
        (function(t3) {
          var r2, n2, e3 = t3.MutationObserver || t3.WebKitMutationObserver;
          if (e3) {
            var i2 = 0, s2 = new e3(u2), a2 = t3.document.createTextNode("");
            s2.observe(a2, { characterData: true }), r2 = function() {
              a2.data = i2 = ++i2 % 2;
            };
          } else if (t3.setImmediate || void 0 === t3.MessageChannel) r2 = "document" in t3 && "onreadystatechange" in t3.document.createElement("script") ? function() {
            var e4 = t3.document.createElement("script");
            e4.onreadystatechange = function() {
              u2(), e4.onreadystatechange = null, e4.parentNode.removeChild(e4), e4 = null;
            }, t3.document.documentElement.appendChild(e4);
          } : function() {
            setTimeout(u2, 0);
          };
          else {
            var o2 = new t3.MessageChannel();
            o2.port1.onmessage = u2, r2 = function() {
              o2.port2.postMessage(0);
            };
          }
          var h2 = [];
          function u2() {
            var e4, t4;
            n2 = true;
            for (var r3 = h2.length; r3; ) {
              for (t4 = h2, h2 = [], e4 = -1; ++e4 < r3; ) t4[e4]();
              r3 = h2.length;
            }
            n2 = false;
          }
          l2.exports = function(e4) {
            1 !== h2.push(e4) || n2 || r2();
          };
        }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}], 37: [function(e2, t2, r2) {
        var i2 = e2("immediate");
        function u2() {
        }
        var l2 = {}, s2 = ["REJECTED"], a2 = ["FULFILLED"], n2 = ["PENDING"];
        function o2(e3) {
          if ("function" != typeof e3) throw new TypeError("resolver must be a function");
          this.state = n2, this.queue = [], this.outcome = void 0, e3 !== u2 && d(this, e3);
        }
        function h2(e3, t3, r3) {
          this.promise = e3, "function" == typeof t3 && (this.onFulfilled = t3, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r3 && (this.onRejected = r3, this.callRejected = this.otherCallRejected);
        }
        function f2(t3, r3, n3) {
          i2(function() {
            var e3;
            try {
              e3 = r3(n3);
            } catch (e4) {
              return l2.reject(t3, e4);
            }
            e3 === t3 ? l2.reject(t3, new TypeError("Cannot resolve promise with itself")) : l2.resolve(t3, e3);
          });
        }
        function c2(e3) {
          var t3 = e3 && e3.then;
          if (e3 && ("object" == typeof e3 || "function" == typeof e3) && "function" == typeof t3) return function() {
            t3.apply(e3, arguments);
          };
        }
        function d(t3, e3) {
          var r3 = false;
          function n3(e4) {
            r3 || (r3 = true, l2.reject(t3, e4));
          }
          function i3(e4) {
            r3 || (r3 = true, l2.resolve(t3, e4));
          }
          var s3 = p2(function() {
            e3(i3, n3);
          });
          "error" === s3.status && n3(s3.value);
        }
        function p2(e3, t3) {
          var r3 = {};
          try {
            r3.value = e3(t3), r3.status = "success";
          } catch (e4) {
            r3.status = "error", r3.value = e4;
          }
          return r3;
        }
        (t2.exports = o2).prototype.finally = function(t3) {
          if ("function" != typeof t3) return this;
          var r3 = this.constructor;
          return this.then(function(e3) {
            return r3.resolve(t3()).then(function() {
              return e3;
            });
          }, function(e3) {
            return r3.resolve(t3()).then(function() {
              throw e3;
            });
          });
        }, o2.prototype.catch = function(e3) {
          return this.then(null, e3);
        }, o2.prototype.then = function(e3, t3) {
          if ("function" != typeof e3 && this.state === a2 || "function" != typeof t3 && this.state === s2) return this;
          var r3 = new this.constructor(u2);
          this.state !== n2 ? f2(r3, this.state === a2 ? e3 : t3, this.outcome) : this.queue.push(new h2(r3, e3, t3));
          return r3;
        }, h2.prototype.callFulfilled = function(e3) {
          l2.resolve(this.promise, e3);
        }, h2.prototype.otherCallFulfilled = function(e3) {
          f2(this.promise, this.onFulfilled, e3);
        }, h2.prototype.callRejected = function(e3) {
          l2.reject(this.promise, e3);
        }, h2.prototype.otherCallRejected = function(e3) {
          f2(this.promise, this.onRejected, e3);
        }, l2.resolve = function(e3, t3) {
          var r3 = p2(c2, t3);
          if ("error" === r3.status) return l2.reject(e3, r3.value);
          var n3 = r3.value;
          if (n3) d(e3, n3);
          else {
            e3.state = a2, e3.outcome = t3;
            for (var i3 = -1, s3 = e3.queue.length; ++i3 < s3; ) e3.queue[i3].callFulfilled(t3);
          }
          return e3;
        }, l2.reject = function(e3, t3) {
          e3.state = s2, e3.outcome = t3;
          for (var r3 = -1, n3 = e3.queue.length; ++r3 < n3; ) e3.queue[r3].callRejected(t3);
          return e3;
        }, o2.resolve = function(e3) {
          if (e3 instanceof this) return e3;
          return l2.resolve(new this(u2), e3);
        }, o2.reject = function(e3) {
          var t3 = new this(u2);
          return l2.reject(t3, e3);
        }, o2.all = function(e3) {
          var r3 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e3)) return this.reject(new TypeError("must be an array"));
          var n3 = e3.length, i3 = false;
          if (!n3) return this.resolve([]);
          var s3 = new Array(n3), a3 = 0, t3 = -1, o3 = new this(u2);
          for (; ++t3 < n3; ) h3(e3[t3], t3);
          return o3;
          function h3(e4, t4) {
            r3.resolve(e4).then(function(e5) {
              s3[t4] = e5, ++a3 !== n3 || i3 || (i3 = true, l2.resolve(o3, s3));
            }, function(e5) {
              i3 || (i3 = true, l2.reject(o3, e5));
            });
          }
        }, o2.race = function(e3) {
          var t3 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e3)) return this.reject(new TypeError("must be an array"));
          var r3 = e3.length, n3 = false;
          if (!r3) return this.resolve([]);
          var i3 = -1, s3 = new this(u2);
          for (; ++i3 < r3; ) a3 = e3[i3], t3.resolve(a3).then(function(e4) {
            n3 || (n3 = true, l2.resolve(s3, e4));
          }, function(e4) {
            n3 || (n3 = true, l2.reject(s3, e4));
          });
          var a3;
          return s3;
        };
      }, { immediate: 36 }], 38: [function(e2, t2, r2) {
        var n2 = {};
        (0, e2("./lib/utils/common").assign)(n2, e2("./lib/deflate"), e2("./lib/inflate"), e2("./lib/zlib/constants")), t2.exports = n2;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e2, t2, r2) {
        var a2 = e2("./zlib/deflate"), o2 = e2("./utils/common"), h2 = e2("./utils/strings"), i2 = e2("./zlib/messages"), s2 = e2("./zlib/zstream"), u2 = Object.prototype.toString, l2 = 0, f2 = -1, c2 = 0, d = 8;
        function p2(e3) {
          if (!(this instanceof p2)) return new p2(e3);
          this.options = o2.assign({ level: f2, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c2, to: "" }, e3 || {});
          var t3 = this.options;
          t3.raw && 0 < t3.windowBits ? t3.windowBits = -t3.windowBits : t3.gzip && 0 < t3.windowBits && t3.windowBits < 16 && (t3.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s2(), this.strm.avail_out = 0;
          var r3 = a2.deflateInit2(this.strm, t3.level, t3.method, t3.windowBits, t3.memLevel, t3.strategy);
          if (r3 !== l2) throw new Error(i2[r3]);
          if (t3.header && a2.deflateSetHeader(this.strm, t3.header), t3.dictionary) {
            var n3;
            if (n3 = "string" == typeof t3.dictionary ? h2.string2buf(t3.dictionary) : "[object ArrayBuffer]" === u2.call(t3.dictionary) ? new Uint8Array(t3.dictionary) : t3.dictionary, (r3 = a2.deflateSetDictionary(this.strm, n3)) !== l2) throw new Error(i2[r3]);
            this._dict_set = true;
          }
        }
        function n2(e3, t3) {
          var r3 = new p2(t3);
          if (r3.push(e3, true), r3.err) throw r3.msg || i2[r3.err];
          return r3.result;
        }
        p2.prototype.push = function(e3, t3) {
          var r3, n3, i3 = this.strm, s3 = this.options.chunkSize;
          if (this.ended) return false;
          n3 = t3 === ~~t3 ? t3 : true === t3 ? 4 : 0, "string" == typeof e3 ? i3.input = h2.string2buf(e3) : "[object ArrayBuffer]" === u2.call(e3) ? i3.input = new Uint8Array(e3) : i3.input = e3, i3.next_in = 0, i3.avail_in = i3.input.length;
          do {
            if (0 === i3.avail_out && (i3.output = new o2.Buf8(s3), i3.next_out = 0, i3.avail_out = s3), 1 !== (r3 = a2.deflate(i3, n3)) && r3 !== l2) return this.onEnd(r3), !(this.ended = true);
            0 !== i3.avail_out && (0 !== i3.avail_in || 4 !== n3 && 2 !== n3) || ("string" === this.options.to ? this.onData(h2.buf2binstring(o2.shrinkBuf(i3.output, i3.next_out))) : this.onData(o2.shrinkBuf(i3.output, i3.next_out)));
          } while ((0 < i3.avail_in || 0 === i3.avail_out) && 1 !== r3);
          return 4 === n3 ? (r3 = a2.deflateEnd(this.strm), this.onEnd(r3), this.ended = true, r3 === l2) : 2 !== n3 || (this.onEnd(l2), !(i3.avail_out = 0));
        }, p2.prototype.onData = function(e3) {
          this.chunks.push(e3);
        }, p2.prototype.onEnd = function(e3) {
          e3 === l2 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o2.flattenChunks(this.chunks)), this.chunks = [], this.err = e3, this.msg = this.strm.msg;
        }, r2.Deflate = p2, r2.deflate = n2, r2.deflateRaw = function(e3, t3) {
          return (t3 = t3 || {}).raw = true, n2(e3, t3);
        }, r2.gzip = function(e3, t3) {
          return (t3 = t3 || {}).gzip = true, n2(e3, t3);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e2, t2, r2) {
        var c2 = e2("./zlib/inflate"), d = e2("./utils/common"), p2 = e2("./utils/strings"), m2 = e2("./zlib/constants"), n2 = e2("./zlib/messages"), i2 = e2("./zlib/zstream"), s2 = e2("./zlib/gzheader"), _2 = Object.prototype.toString;
        function a2(e3) {
          if (!(this instanceof a2)) return new a2(e3);
          this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e3 || {});
          var t3 = this.options;
          t3.raw && 0 <= t3.windowBits && t3.windowBits < 16 && (t3.windowBits = -t3.windowBits, 0 === t3.windowBits && (t3.windowBits = -15)), !(0 <= t3.windowBits && t3.windowBits < 16) || e3 && e3.windowBits || (t3.windowBits += 32), 15 < t3.windowBits && t3.windowBits < 48 && 0 == (15 & t3.windowBits) && (t3.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i2(), this.strm.avail_out = 0;
          var r3 = c2.inflateInit2(this.strm, t3.windowBits);
          if (r3 !== m2.Z_OK) throw new Error(n2[r3]);
          this.header = new s2(), c2.inflateGetHeader(this.strm, this.header);
        }
        function o2(e3, t3) {
          var r3 = new a2(t3);
          if (r3.push(e3, true), r3.err) throw r3.msg || n2[r3.err];
          return r3.result;
        }
        a2.prototype.push = function(e3, t3) {
          var r3, n3, i3, s3, a3, o3, h2 = this.strm, u2 = this.options.chunkSize, l2 = this.options.dictionary, f2 = false;
          if (this.ended) return false;
          n3 = t3 === ~~t3 ? t3 : true === t3 ? m2.Z_FINISH : m2.Z_NO_FLUSH, "string" == typeof e3 ? h2.input = p2.binstring2buf(e3) : "[object ArrayBuffer]" === _2.call(e3) ? h2.input = new Uint8Array(e3) : h2.input = e3, h2.next_in = 0, h2.avail_in = h2.input.length;
          do {
            if (0 === h2.avail_out && (h2.output = new d.Buf8(u2), h2.next_out = 0, h2.avail_out = u2), (r3 = c2.inflate(h2, m2.Z_NO_FLUSH)) === m2.Z_NEED_DICT && l2 && (o3 = "string" == typeof l2 ? p2.string2buf(l2) : "[object ArrayBuffer]" === _2.call(l2) ? new Uint8Array(l2) : l2, r3 = c2.inflateSetDictionary(this.strm, o3)), r3 === m2.Z_BUF_ERROR && true === f2 && (r3 = m2.Z_OK, f2 = false), r3 !== m2.Z_STREAM_END && r3 !== m2.Z_OK) return this.onEnd(r3), !(this.ended = true);
            h2.next_out && (0 !== h2.avail_out && r3 !== m2.Z_STREAM_END && (0 !== h2.avail_in || n3 !== m2.Z_FINISH && n3 !== m2.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i3 = p2.utf8border(h2.output, h2.next_out), s3 = h2.next_out - i3, a3 = p2.buf2string(h2.output, i3), h2.next_out = s3, h2.avail_out = u2 - s3, s3 && d.arraySet(h2.output, h2.output, i3, s3, 0), this.onData(a3)) : this.onData(d.shrinkBuf(h2.output, h2.next_out)))), 0 === h2.avail_in && 0 === h2.avail_out && (f2 = true);
          } while ((0 < h2.avail_in || 0 === h2.avail_out) && r3 !== m2.Z_STREAM_END);
          return r3 === m2.Z_STREAM_END && (n3 = m2.Z_FINISH), n3 === m2.Z_FINISH ? (r3 = c2.inflateEnd(this.strm), this.onEnd(r3), this.ended = true, r3 === m2.Z_OK) : n3 !== m2.Z_SYNC_FLUSH || (this.onEnd(m2.Z_OK), !(h2.avail_out = 0));
        }, a2.prototype.onData = function(e3) {
          this.chunks.push(e3);
        }, a2.prototype.onEnd = function(e3) {
          e3 === m2.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e3, this.msg = this.strm.msg;
        }, r2.Inflate = a2, r2.inflate = o2, r2.inflateRaw = function(e3, t3) {
          return (t3 = t3 || {}).raw = true, o2(e3, t3);
        }, r2.ungzip = o2;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e2, t2, r2) {
        var n2 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        r2.assign = function(e3) {
          for (var t3 = Array.prototype.slice.call(arguments, 1); t3.length; ) {
            var r3 = t3.shift();
            if (r3) {
              if ("object" != typeof r3) throw new TypeError(r3 + "must be non-object");
              for (var n3 in r3) r3.hasOwnProperty(n3) && (e3[n3] = r3[n3]);
            }
          }
          return e3;
        }, r2.shrinkBuf = function(e3, t3) {
          return e3.length === t3 ? e3 : e3.subarray ? e3.subarray(0, t3) : (e3.length = t3, e3);
        };
        var i2 = { arraySet: function(e3, t3, r3, n3, i3) {
          if (t3.subarray && e3.subarray) e3.set(t3.subarray(r3, r3 + n3), i3);
          else for (var s3 = 0; s3 < n3; s3++) e3[i3 + s3] = t3[r3 + s3];
        }, flattenChunks: function(e3) {
          var t3, r3, n3, i3, s3, a2;
          for (t3 = n3 = 0, r3 = e3.length; t3 < r3; t3++) n3 += e3[t3].length;
          for (a2 = new Uint8Array(n3), t3 = i3 = 0, r3 = e3.length; t3 < r3; t3++) s3 = e3[t3], a2.set(s3, i3), i3 += s3.length;
          return a2;
        } }, s2 = { arraySet: function(e3, t3, r3, n3, i3) {
          for (var s3 = 0; s3 < n3; s3++) e3[i3 + s3] = t3[r3 + s3];
        }, flattenChunks: function(e3) {
          return [].concat.apply([], e3);
        } };
        r2.setTyped = function(e3) {
          e3 ? (r2.Buf8 = Uint8Array, r2.Buf16 = Uint16Array, r2.Buf32 = Int32Array, r2.assign(r2, i2)) : (r2.Buf8 = Array, r2.Buf16 = Array, r2.Buf32 = Array, r2.assign(r2, s2));
        }, r2.setTyped(n2);
      }, {}], 42: [function(e2, t2, r2) {
        var h2 = e2("./common"), i2 = true, s2 = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e3) {
          i2 = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e3) {
          s2 = false;
        }
        for (var u2 = new h2.Buf8(256), n2 = 0; n2 < 256; n2++) u2[n2] = 252 <= n2 ? 6 : 248 <= n2 ? 5 : 240 <= n2 ? 4 : 224 <= n2 ? 3 : 192 <= n2 ? 2 : 1;
        function l2(e3, t3) {
          if (t3 < 65537 && (e3.subarray && s2 || !e3.subarray && i2)) return String.fromCharCode.apply(null, h2.shrinkBuf(e3, t3));
          for (var r3 = "", n3 = 0; n3 < t3; n3++) r3 += String.fromCharCode(e3[n3]);
          return r3;
        }
        u2[254] = u2[254] = 1, r2.string2buf = function(e3) {
          var t3, r3, n3, i3, s3, a2 = e3.length, o2 = 0;
          for (i3 = 0; i3 < a2; i3++) 55296 == (64512 & (r3 = e3.charCodeAt(i3))) && i3 + 1 < a2 && 56320 == (64512 & (n3 = e3.charCodeAt(i3 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i3++), o2 += r3 < 128 ? 1 : r3 < 2048 ? 2 : r3 < 65536 ? 3 : 4;
          for (t3 = new h2.Buf8(o2), i3 = s3 = 0; s3 < o2; i3++) 55296 == (64512 & (r3 = e3.charCodeAt(i3))) && i3 + 1 < a2 && 56320 == (64512 & (n3 = e3.charCodeAt(i3 + 1))) && (r3 = 65536 + (r3 - 55296 << 10) + (n3 - 56320), i3++), r3 < 128 ? t3[s3++] = r3 : (r3 < 2048 ? t3[s3++] = 192 | r3 >>> 6 : (r3 < 65536 ? t3[s3++] = 224 | r3 >>> 12 : (t3[s3++] = 240 | r3 >>> 18, t3[s3++] = 128 | r3 >>> 12 & 63), t3[s3++] = 128 | r3 >>> 6 & 63), t3[s3++] = 128 | 63 & r3);
          return t3;
        }, r2.buf2binstring = function(e3) {
          return l2(e3, e3.length);
        }, r2.binstring2buf = function(e3) {
          for (var t3 = new h2.Buf8(e3.length), r3 = 0, n3 = t3.length; r3 < n3; r3++) t3[r3] = e3.charCodeAt(r3);
          return t3;
        }, r2.buf2string = function(e3, t3) {
          var r3, n3, i3, s3, a2 = t3 || e3.length, o2 = new Array(2 * a2);
          for (r3 = n3 = 0; r3 < a2; ) if ((i3 = e3[r3++]) < 128) o2[n3++] = i3;
          else if (4 < (s3 = u2[i3])) o2[n3++] = 65533, r3 += s3 - 1;
          else {
            for (i3 &= 2 === s3 ? 31 : 3 === s3 ? 15 : 7; 1 < s3 && r3 < a2; ) i3 = i3 << 6 | 63 & e3[r3++], s3--;
            1 < s3 ? o2[n3++] = 65533 : i3 < 65536 ? o2[n3++] = i3 : (i3 -= 65536, o2[n3++] = 55296 | i3 >> 10 & 1023, o2[n3++] = 56320 | 1023 & i3);
          }
          return l2(o2, n3);
        }, r2.utf8border = function(e3, t3) {
          var r3;
          for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
          return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u2[e3[r3]] > t3 ? r3 : t3;
        };
      }, { "./common": 41 }], 43: [function(e2, t2, r2) {
        t2.exports = function(e3, t3, r3, n2) {
          for (var i2 = 65535 & e3 | 0, s2 = e3 >>> 16 & 65535 | 0, a2 = 0; 0 !== r3; ) {
            for (r3 -= a2 = 2e3 < r3 ? 2e3 : r3; s2 = s2 + (i2 = i2 + t3[n2++] | 0) | 0, --a2; ) ;
            i2 %= 65521, s2 %= 65521;
          }
          return i2 | s2 << 16 | 0;
        };
      }, {}], 44: [function(e2, t2, r2) {
        t2.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e2, t2, r2) {
        var o2 = function() {
          for (var e3, t3 = [], r3 = 0; r3 < 256; r3++) {
            e3 = r3;
            for (var n2 = 0; n2 < 8; n2++) e3 = 1 & e3 ? 3988292384 ^ e3 >>> 1 : e3 >>> 1;
            t3[r3] = e3;
          }
          return t3;
        }();
        t2.exports = function(e3, t3, r3, n2) {
          var i2 = o2, s2 = n2 + r3;
          e3 ^= -1;
          for (var a2 = n2; a2 < s2; a2++) e3 = e3 >>> 8 ^ i2[255 & (e3 ^ t3[a2])];
          return -1 ^ e3;
        };
      }, {}], 46: [function(e2, t2, r2) {
        var h2, c2 = e2("../utils/common"), u2 = e2("./trees"), d = e2("./adler32"), p2 = e2("./crc32"), n2 = e2("./messages"), l2 = 0, f2 = 4, m2 = 0, _2 = -2, g2 = -1, b = 4, i2 = 2, v2 = 8, y2 = 9, s2 = 286, a2 = 30, o2 = 19, w2 = 2 * s2 + 1, k = 15, x = 3, S2 = 258, z = S2 + x + 1, C = 42, E = 113, A2 = 1, I = 2, O2 = 3, B = 4;
        function R(e3, t3) {
          return e3.msg = n2[t3], t3;
        }
        function T2(e3) {
          return (e3 << 1) - (4 < e3 ? 9 : 0);
        }
        function D(e3) {
          for (var t3 = e3.length; 0 <= --t3; ) e3[t3] = 0;
        }
        function F(e3) {
          var t3 = e3.state, r3 = t3.pending;
          r3 > e3.avail_out && (r3 = e3.avail_out), 0 !== r3 && (c2.arraySet(e3.output, t3.pending_buf, t3.pending_out, r3, e3.next_out), e3.next_out += r3, t3.pending_out += r3, e3.total_out += r3, e3.avail_out -= r3, t3.pending -= r3, 0 === t3.pending && (t3.pending_out = 0));
        }
        function N2(e3, t3) {
          u2._tr_flush_block(e3, 0 <= e3.block_start ? e3.block_start : -1, e3.strstart - e3.block_start, t3), e3.block_start = e3.strstart, F(e3.strm);
        }
        function U(e3, t3) {
          e3.pending_buf[e3.pending++] = t3;
        }
        function P2(e3, t3) {
          e3.pending_buf[e3.pending++] = t3 >>> 8 & 255, e3.pending_buf[e3.pending++] = 255 & t3;
        }
        function L2(e3, t3) {
          var r3, n3, i3 = e3.max_chain_length, s3 = e3.strstart, a3 = e3.prev_length, o3 = e3.nice_match, h3 = e3.strstart > e3.w_size - z ? e3.strstart - (e3.w_size - z) : 0, u3 = e3.window, l3 = e3.w_mask, f3 = e3.prev, c3 = e3.strstart + S2, d2 = u3[s3 + a3 - 1], p3 = u3[s3 + a3];
          e3.prev_length >= e3.good_match && (i3 >>= 2), o3 > e3.lookahead && (o3 = e3.lookahead);
          do {
            if (u3[(r3 = t3) + a3] === p3 && u3[r3 + a3 - 1] === d2 && u3[r3] === u3[s3] && u3[++r3] === u3[s3 + 1]) {
              s3 += 2, r3++;
              do {
              } while (u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && u3[++s3] === u3[++r3] && s3 < c3);
              if (n3 = S2 - (c3 - s3), s3 = c3 - S2, a3 < n3) {
                if (e3.match_start = t3, o3 <= (a3 = n3)) break;
                d2 = u3[s3 + a3 - 1], p3 = u3[s3 + a3];
              }
            }
          } while ((t3 = f3[t3 & l3]) > h3 && 0 != --i3);
          return a3 <= e3.lookahead ? a3 : e3.lookahead;
        }
        function j(e3) {
          var t3, r3, n3, i3, s3, a3, o3, h3, u3, l3, f3 = e3.w_size;
          do {
            if (i3 = e3.window_size - e3.lookahead - e3.strstart, e3.strstart >= f3 + (f3 - z)) {
              for (c2.arraySet(e3.window, e3.window, f3, f3, 0), e3.match_start -= f3, e3.strstart -= f3, e3.block_start -= f3, t3 = r3 = e3.hash_size; n3 = e3.head[--t3], e3.head[t3] = f3 <= n3 ? n3 - f3 : 0, --r3; ) ;
              for (t3 = r3 = f3; n3 = e3.prev[--t3], e3.prev[t3] = f3 <= n3 ? n3 - f3 : 0, --r3; ) ;
              i3 += f3;
            }
            if (0 === e3.strm.avail_in) break;
            if (a3 = e3.strm, o3 = e3.window, h3 = e3.strstart + e3.lookahead, u3 = i3, l3 = void 0, l3 = a3.avail_in, u3 < l3 && (l3 = u3), r3 = 0 === l3 ? 0 : (a3.avail_in -= l3, c2.arraySet(o3, a3.input, a3.next_in, l3, h3), 1 === a3.state.wrap ? a3.adler = d(a3.adler, o3, l3, h3) : 2 === a3.state.wrap && (a3.adler = p2(a3.adler, o3, l3, h3)), a3.next_in += l3, a3.total_in += l3, l3), e3.lookahead += r3, e3.lookahead + e3.insert >= x) for (s3 = e3.strstart - e3.insert, e3.ins_h = e3.window[s3], e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[s3 + 1]) & e3.hash_mask; e3.insert && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[s3 + x - 1]) & e3.hash_mask, e3.prev[s3 & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = s3, s3++, e3.insert--, !(e3.lookahead + e3.insert < x)); ) ;
          } while (e3.lookahead < z && 0 !== e3.strm.avail_in);
        }
        function Z(e3, t3) {
          for (var r3, n3; ; ) {
            if (e3.lookahead < z) {
              if (j(e3), e3.lookahead < z && t3 === l2) return A2;
              if (0 === e3.lookahead) break;
            }
            if (r3 = 0, e3.lookahead >= x && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), 0 !== r3 && e3.strstart - r3 <= e3.w_size - z && (e3.match_length = L2(e3, r3)), e3.match_length >= x) if (n3 = u2._tr_tally(e3, e3.strstart - e3.match_start, e3.match_length - x), e3.lookahead -= e3.match_length, e3.match_length <= e3.max_lazy_match && e3.lookahead >= x) {
              for (e3.match_length--; e3.strstart++, e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart, 0 != --e3.match_length; ) ;
              e3.strstart++;
            } else e3.strstart += e3.match_length, e3.match_length = 0, e3.ins_h = e3.window[e3.strstart], e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + 1]) & e3.hash_mask;
            else n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++;
            if (n3 && (N2(e3, false), 0 === e3.strm.avail_out)) return A2;
          }
          return e3.insert = e3.strstart < x - 1 ? e3.strstart : x - 1, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B) : e3.last_lit && (N2(e3, false), 0 === e3.strm.avail_out) ? A2 : I;
        }
        function W(e3, t3) {
          for (var r3, n3, i3; ; ) {
            if (e3.lookahead < z) {
              if (j(e3), e3.lookahead < z && t3 === l2) return A2;
              if (0 === e3.lookahead) break;
            }
            if (r3 = 0, e3.lookahead >= x && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), e3.prev_length = e3.match_length, e3.prev_match = e3.match_start, e3.match_length = x - 1, 0 !== r3 && e3.prev_length < e3.max_lazy_match && e3.strstart - r3 <= e3.w_size - z && (e3.match_length = L2(e3, r3), e3.match_length <= 5 && (1 === e3.strategy || e3.match_length === x && 4096 < e3.strstart - e3.match_start) && (e3.match_length = x - 1)), e3.prev_length >= x && e3.match_length <= e3.prev_length) {
              for (i3 = e3.strstart + e3.lookahead - x, n3 = u2._tr_tally(e3, e3.strstart - 1 - e3.prev_match, e3.prev_length - x), e3.lookahead -= e3.prev_length - 1, e3.prev_length -= 2; ++e3.strstart <= i3 && (e3.ins_h = (e3.ins_h << e3.hash_shift ^ e3.window[e3.strstart + x - 1]) & e3.hash_mask, r3 = e3.prev[e3.strstart & e3.w_mask] = e3.head[e3.ins_h], e3.head[e3.ins_h] = e3.strstart), 0 != --e3.prev_length; ) ;
              if (e3.match_available = 0, e3.match_length = x - 1, e3.strstart++, n3 && (N2(e3, false), 0 === e3.strm.avail_out)) return A2;
            } else if (e3.match_available) {
              if ((n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart - 1])) && N2(e3, false), e3.strstart++, e3.lookahead--, 0 === e3.strm.avail_out) return A2;
            } else e3.match_available = 1, e3.strstart++, e3.lookahead--;
          }
          return e3.match_available && (n3 = u2._tr_tally(e3, 0, e3.window[e3.strstart - 1]), e3.match_available = 0), e3.insert = e3.strstart < x - 1 ? e3.strstart : x - 1, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B) : e3.last_lit && (N2(e3, false), 0 === e3.strm.avail_out) ? A2 : I;
        }
        function M(e3, t3, r3, n3, i3) {
          this.good_length = e3, this.max_lazy = t3, this.nice_length = r3, this.max_chain = n3, this.func = i3;
        }
        function H() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c2.Buf16(2 * w2), this.dyn_dtree = new c2.Buf16(2 * (2 * a2 + 1)), this.bl_tree = new c2.Buf16(2 * (2 * o2 + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c2.Buf16(k + 1), this.heap = new c2.Buf16(2 * s2 + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c2.Buf16(2 * s2 + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function G2(e3) {
          var t3;
          return e3 && e3.state ? (e3.total_in = e3.total_out = 0, e3.data_type = i2, (t3 = e3.state).pending = 0, t3.pending_out = 0, t3.wrap < 0 && (t3.wrap = -t3.wrap), t3.status = t3.wrap ? C : E, e3.adler = 2 === t3.wrap ? 0 : 1, t3.last_flush = l2, u2._tr_init(t3), m2) : R(e3, _2);
        }
        function K(e3) {
          var t3 = G2(e3);
          return t3 === m2 && function(e4) {
            e4.window_size = 2 * e4.w_size, D(e4.head), e4.max_lazy_match = h2[e4.level].max_lazy, e4.good_match = h2[e4.level].good_length, e4.nice_match = h2[e4.level].nice_length, e4.max_chain_length = h2[e4.level].max_chain, e4.strstart = 0, e4.block_start = 0, e4.lookahead = 0, e4.insert = 0, e4.match_length = e4.prev_length = x - 1, e4.match_available = 0, e4.ins_h = 0;
          }(e3.state), t3;
        }
        function Y(e3, t3, r3, n3, i3, s3) {
          if (!e3) return _2;
          var a3 = 1;
          if (t3 === g2 && (t3 = 6), n3 < 0 ? (a3 = 0, n3 = -n3) : 15 < n3 && (a3 = 2, n3 -= 16), i3 < 1 || y2 < i3 || r3 !== v2 || n3 < 8 || 15 < n3 || t3 < 0 || 9 < t3 || s3 < 0 || b < s3) return R(e3, _2);
          8 === n3 && (n3 = 9);
          var o3 = new H();
          return (e3.state = o3).strm = e3, o3.wrap = a3, o3.gzhead = null, o3.w_bits = n3, o3.w_size = 1 << o3.w_bits, o3.w_mask = o3.w_size - 1, o3.hash_bits = i3 + 7, o3.hash_size = 1 << o3.hash_bits, o3.hash_mask = o3.hash_size - 1, o3.hash_shift = ~~((o3.hash_bits + x - 1) / x), o3.window = new c2.Buf8(2 * o3.w_size), o3.head = new c2.Buf16(o3.hash_size), o3.prev = new c2.Buf16(o3.w_size), o3.lit_bufsize = 1 << i3 + 6, o3.pending_buf_size = 4 * o3.lit_bufsize, o3.pending_buf = new c2.Buf8(o3.pending_buf_size), o3.d_buf = 1 * o3.lit_bufsize, o3.l_buf = 3 * o3.lit_bufsize, o3.level = t3, o3.strategy = s3, o3.method = r3, K(e3);
        }
        h2 = [new M(0, 0, 0, 0, function(e3, t3) {
          var r3 = 65535;
          for (r3 > e3.pending_buf_size - 5 && (r3 = e3.pending_buf_size - 5); ; ) {
            if (e3.lookahead <= 1) {
              if (j(e3), 0 === e3.lookahead && t3 === l2) return A2;
              if (0 === e3.lookahead) break;
            }
            e3.strstart += e3.lookahead, e3.lookahead = 0;
            var n3 = e3.block_start + r3;
            if ((0 === e3.strstart || e3.strstart >= n3) && (e3.lookahead = e3.strstart - n3, e3.strstart = n3, N2(e3, false), 0 === e3.strm.avail_out)) return A2;
            if (e3.strstart - e3.block_start >= e3.w_size - z && (N2(e3, false), 0 === e3.strm.avail_out)) return A2;
          }
          return e3.insert = 0, t3 === f2 ? (N2(e3, true), 0 === e3.strm.avail_out ? O2 : B) : (e3.strstart > e3.block_start && (N2(e3, false), e3.strm.avail_out), A2);
        }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r2.deflateInit = function(e3, t3) {
          return Y(e3, t3, v2, 15, 8, 0);
        }, r2.deflateInit2 = Y, r2.deflateReset = K, r2.deflateResetKeep = G2, r2.deflateSetHeader = function(e3, t3) {
          return e3 && e3.state ? 2 !== e3.state.wrap ? _2 : (e3.state.gzhead = t3, m2) : _2;
        }, r2.deflate = function(e3, t3) {
          var r3, n3, i3, s3;
          if (!e3 || !e3.state || 5 < t3 || t3 < 0) return e3 ? R(e3, _2) : _2;
          if (n3 = e3.state, !e3.output || !e3.input && 0 !== e3.avail_in || 666 === n3.status && t3 !== f2) return R(e3, 0 === e3.avail_out ? -5 : _2);
          if (n3.strm = e3, r3 = n3.last_flush, n3.last_flush = t3, n3.status === C) if (2 === n3.wrap) e3.adler = 0, U(n3, 31), U(n3, 139), U(n3, 8), n3.gzhead ? (U(n3, (n3.gzhead.text ? 1 : 0) + (n3.gzhead.hcrc ? 2 : 0) + (n3.gzhead.extra ? 4 : 0) + (n3.gzhead.name ? 8 : 0) + (n3.gzhead.comment ? 16 : 0)), U(n3, 255 & n3.gzhead.time), U(n3, n3.gzhead.time >> 8 & 255), U(n3, n3.gzhead.time >> 16 & 255), U(n3, n3.gzhead.time >> 24 & 255), U(n3, 9 === n3.level ? 2 : 2 <= n3.strategy || n3.level < 2 ? 4 : 0), U(n3, 255 & n3.gzhead.os), n3.gzhead.extra && n3.gzhead.extra.length && (U(n3, 255 & n3.gzhead.extra.length), U(n3, n3.gzhead.extra.length >> 8 & 255)), n3.gzhead.hcrc && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending, 0)), n3.gzindex = 0, n3.status = 69) : (U(n3, 0), U(n3, 0), U(n3, 0), U(n3, 0), U(n3, 0), U(n3, 9 === n3.level ? 2 : 2 <= n3.strategy || n3.level < 2 ? 4 : 0), U(n3, 3), n3.status = E);
          else {
            var a3 = v2 + (n3.w_bits - 8 << 4) << 8;
            a3 |= (2 <= n3.strategy || n3.level < 2 ? 0 : n3.level < 6 ? 1 : 6 === n3.level ? 2 : 3) << 6, 0 !== n3.strstart && (a3 |= 32), a3 += 31 - a3 % 31, n3.status = E, P2(n3, a3), 0 !== n3.strstart && (P2(n3, e3.adler >>> 16), P2(n3, 65535 & e3.adler)), e3.adler = 1;
          }
          if (69 === n3.status) if (n3.gzhead.extra) {
            for (i3 = n3.pending; n3.gzindex < (65535 & n3.gzhead.extra.length) && (n3.pending !== n3.pending_buf_size || (n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), F(e3), i3 = n3.pending, n3.pending !== n3.pending_buf_size)); ) U(n3, 255 & n3.gzhead.extra[n3.gzindex]), n3.gzindex++;
            n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), n3.gzindex === n3.gzhead.extra.length && (n3.gzindex = 0, n3.status = 73);
          } else n3.status = 73;
          if (73 === n3.status) if (n3.gzhead.name) {
            i3 = n3.pending;
            do {
              if (n3.pending === n3.pending_buf_size && (n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), F(e3), i3 = n3.pending, n3.pending === n3.pending_buf_size)) {
                s3 = 1;
                break;
              }
              s3 = n3.gzindex < n3.gzhead.name.length ? 255 & n3.gzhead.name.charCodeAt(n3.gzindex++) : 0, U(n3, s3);
            } while (0 !== s3);
            n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), 0 === s3 && (n3.gzindex = 0, n3.status = 91);
          } else n3.status = 91;
          if (91 === n3.status) if (n3.gzhead.comment) {
            i3 = n3.pending;
            do {
              if (n3.pending === n3.pending_buf_size && (n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), F(e3), i3 = n3.pending, n3.pending === n3.pending_buf_size)) {
                s3 = 1;
                break;
              }
              s3 = n3.gzindex < n3.gzhead.comment.length ? 255 & n3.gzhead.comment.charCodeAt(n3.gzindex++) : 0, U(n3, s3);
            } while (0 !== s3);
            n3.gzhead.hcrc && n3.pending > i3 && (e3.adler = p2(e3.adler, n3.pending_buf, n3.pending - i3, i3)), 0 === s3 && (n3.status = 103);
          } else n3.status = 103;
          if (103 === n3.status && (n3.gzhead.hcrc ? (n3.pending + 2 > n3.pending_buf_size && F(e3), n3.pending + 2 <= n3.pending_buf_size && (U(n3, 255 & e3.adler), U(n3, e3.adler >> 8 & 255), e3.adler = 0, n3.status = E)) : n3.status = E), 0 !== n3.pending) {
            if (F(e3), 0 === e3.avail_out) return n3.last_flush = -1, m2;
          } else if (0 === e3.avail_in && T2(t3) <= T2(r3) && t3 !== f2) return R(e3, -5);
          if (666 === n3.status && 0 !== e3.avail_in) return R(e3, -5);
          if (0 !== e3.avail_in || 0 !== n3.lookahead || t3 !== l2 && 666 !== n3.status) {
            var o3 = 2 === n3.strategy ? function(e4, t4) {
              for (var r4; ; ) {
                if (0 === e4.lookahead && (j(e4), 0 === e4.lookahead)) {
                  if (t4 === l2) return A2;
                  break;
                }
                if (e4.match_length = 0, r4 = u2._tr_tally(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++, r4 && (N2(e4, false), 0 === e4.strm.avail_out)) return A2;
              }
              return e4.insert = 0, t4 === f2 ? (N2(e4, true), 0 === e4.strm.avail_out ? O2 : B) : e4.last_lit && (N2(e4, false), 0 === e4.strm.avail_out) ? A2 : I;
            }(n3, t3) : 3 === n3.strategy ? function(e4, t4) {
              for (var r4, n4, i4, s4, a4 = e4.window; ; ) {
                if (e4.lookahead <= S2) {
                  if (j(e4), e4.lookahead <= S2 && t4 === l2) return A2;
                  if (0 === e4.lookahead) break;
                }
                if (e4.match_length = 0, e4.lookahead >= x && 0 < e4.strstart && (n4 = a4[i4 = e4.strstart - 1]) === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4]) {
                  s4 = e4.strstart + S2;
                  do {
                  } while (n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && n4 === a4[++i4] && i4 < s4);
                  e4.match_length = S2 - (s4 - i4), e4.match_length > e4.lookahead && (e4.match_length = e4.lookahead);
                }
                if (e4.match_length >= x ? (r4 = u2._tr_tally(e4, 1, e4.match_length - x), e4.lookahead -= e4.match_length, e4.strstart += e4.match_length, e4.match_length = 0) : (r4 = u2._tr_tally(e4, 0, e4.window[e4.strstart]), e4.lookahead--, e4.strstart++), r4 && (N2(e4, false), 0 === e4.strm.avail_out)) return A2;
              }
              return e4.insert = 0, t4 === f2 ? (N2(e4, true), 0 === e4.strm.avail_out ? O2 : B) : e4.last_lit && (N2(e4, false), 0 === e4.strm.avail_out) ? A2 : I;
            }(n3, t3) : h2[n3.level].func(n3, t3);
            if (o3 !== O2 && o3 !== B || (n3.status = 666), o3 === A2 || o3 === O2) return 0 === e3.avail_out && (n3.last_flush = -1), m2;
            if (o3 === I && (1 === t3 ? u2._tr_align(n3) : 5 !== t3 && (u2._tr_stored_block(n3, 0, 0, false), 3 === t3 && (D(n3.head), 0 === n3.lookahead && (n3.strstart = 0, n3.block_start = 0, n3.insert = 0))), F(e3), 0 === e3.avail_out)) return n3.last_flush = -1, m2;
          }
          return t3 !== f2 ? m2 : n3.wrap <= 0 ? 1 : (2 === n3.wrap ? (U(n3, 255 & e3.adler), U(n3, e3.adler >> 8 & 255), U(n3, e3.adler >> 16 & 255), U(n3, e3.adler >> 24 & 255), U(n3, 255 & e3.total_in), U(n3, e3.total_in >> 8 & 255), U(n3, e3.total_in >> 16 & 255), U(n3, e3.total_in >> 24 & 255)) : (P2(n3, e3.adler >>> 16), P2(n3, 65535 & e3.adler)), F(e3), 0 < n3.wrap && (n3.wrap = -n3.wrap), 0 !== n3.pending ? m2 : 1);
        }, r2.deflateEnd = function(e3) {
          var t3;
          return e3 && e3.state ? (t3 = e3.state.status) !== C && 69 !== t3 && 73 !== t3 && 91 !== t3 && 103 !== t3 && t3 !== E && 666 !== t3 ? R(e3, _2) : (e3.state = null, t3 === E ? R(e3, -3) : m2) : _2;
        }, r2.deflateSetDictionary = function(e3, t3) {
          var r3, n3, i3, s3, a3, o3, h3, u3, l3 = t3.length;
          if (!e3 || !e3.state) return _2;
          if (2 === (s3 = (r3 = e3.state).wrap) || 1 === s3 && r3.status !== C || r3.lookahead) return _2;
          for (1 === s3 && (e3.adler = d(e3.adler, t3, l3, 0)), r3.wrap = 0, l3 >= r3.w_size && (0 === s3 && (D(r3.head), r3.strstart = 0, r3.block_start = 0, r3.insert = 0), u3 = new c2.Buf8(r3.w_size), c2.arraySet(u3, t3, l3 - r3.w_size, r3.w_size, 0), t3 = u3, l3 = r3.w_size), a3 = e3.avail_in, o3 = e3.next_in, h3 = e3.input, e3.avail_in = l3, e3.next_in = 0, e3.input = t3, j(r3); r3.lookahead >= x; ) {
            for (n3 = r3.strstart, i3 = r3.lookahead - (x - 1); r3.ins_h = (r3.ins_h << r3.hash_shift ^ r3.window[n3 + x - 1]) & r3.hash_mask, r3.prev[n3 & r3.w_mask] = r3.head[r3.ins_h], r3.head[r3.ins_h] = n3, n3++, --i3; ) ;
            r3.strstart = n3, r3.lookahead = x - 1, j(r3);
          }
          return r3.strstart += r3.lookahead, r3.block_start = r3.strstart, r3.insert = r3.lookahead, r3.lookahead = 0, r3.match_length = r3.prev_length = x - 1, r3.match_available = 0, e3.next_in = o3, e3.input = h3, e3.avail_in = a3, r3.wrap = s3, m2;
        }, r2.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e2, t2, r2) {
        t2.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, {}], 48: [function(e2, t2, r2) {
        t2.exports = function(e3, t3) {
          var r3, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p2, m2, _2, g2, b, v2, y2, w2, k, x, S2, z, C;
          r3 = e3.state, n2 = e3.next_in, z = e3.input, i2 = n2 + (e3.avail_in - 5), s2 = e3.next_out, C = e3.output, a2 = s2 - (t3 - e3.avail_out), o2 = s2 + (e3.avail_out - 257), h2 = r3.dmax, u2 = r3.wsize, l2 = r3.whave, f2 = r3.wnext, c2 = r3.window, d = r3.hold, p2 = r3.bits, m2 = r3.lencode, _2 = r3.distcode, g2 = (1 << r3.lenbits) - 1, b = (1 << r3.distbits) - 1;
          e: do {
            p2 < 15 && (d += z[n2++] << p2, p2 += 8, d += z[n2++] << p2, p2 += 8), v2 = m2[d & g2];
            t: for (; ; ) {
              if (d >>>= y2 = v2 >>> 24, p2 -= y2, 0 === (y2 = v2 >>> 16 & 255)) C[s2++] = 65535 & v2;
              else {
                if (!(16 & y2)) {
                  if (0 == (64 & y2)) {
                    v2 = m2[(65535 & v2) + (d & (1 << y2) - 1)];
                    continue t;
                  }
                  if (32 & y2) {
                    r3.mode = 12;
                    break e;
                  }
                  e3.msg = "invalid literal/length code", r3.mode = 30;
                  break e;
                }
                w2 = 65535 & v2, (y2 &= 15) && (p2 < y2 && (d += z[n2++] << p2, p2 += 8), w2 += d & (1 << y2) - 1, d >>>= y2, p2 -= y2), p2 < 15 && (d += z[n2++] << p2, p2 += 8, d += z[n2++] << p2, p2 += 8), v2 = _2[d & b];
                r: for (; ; ) {
                  if (d >>>= y2 = v2 >>> 24, p2 -= y2, !(16 & (y2 = v2 >>> 16 & 255))) {
                    if (0 == (64 & y2)) {
                      v2 = _2[(65535 & v2) + (d & (1 << y2) - 1)];
                      continue r;
                    }
                    e3.msg = "invalid distance code", r3.mode = 30;
                    break e;
                  }
                  if (k = 65535 & v2, p2 < (y2 &= 15) && (d += z[n2++] << p2, (p2 += 8) < y2 && (d += z[n2++] << p2, p2 += 8)), h2 < (k += d & (1 << y2) - 1)) {
                    e3.msg = "invalid distance too far back", r3.mode = 30;
                    break e;
                  }
                  if (d >>>= y2, p2 -= y2, (y2 = s2 - a2) < k) {
                    if (l2 < (y2 = k - y2) && r3.sane) {
                      e3.msg = "invalid distance too far back", r3.mode = 30;
                      break e;
                    }
                    if (S2 = c2, (x = 0) === f2) {
                      if (x += u2 - y2, y2 < w2) {
                        for (w2 -= y2; C[s2++] = c2[x++], --y2; ) ;
                        x = s2 - k, S2 = C;
                      }
                    } else if (f2 < y2) {
                      if (x += u2 + f2 - y2, (y2 -= f2) < w2) {
                        for (w2 -= y2; C[s2++] = c2[x++], --y2; ) ;
                        if (x = 0, f2 < w2) {
                          for (w2 -= y2 = f2; C[s2++] = c2[x++], --y2; ) ;
                          x = s2 - k, S2 = C;
                        }
                      }
                    } else if (x += f2 - y2, y2 < w2) {
                      for (w2 -= y2; C[s2++] = c2[x++], --y2; ) ;
                      x = s2 - k, S2 = C;
                    }
                    for (; 2 < w2; ) C[s2++] = S2[x++], C[s2++] = S2[x++], C[s2++] = S2[x++], w2 -= 3;
                    w2 && (C[s2++] = S2[x++], 1 < w2 && (C[s2++] = S2[x++]));
                  } else {
                    for (x = s2 - k; C[s2++] = C[x++], C[s2++] = C[x++], C[s2++] = C[x++], 2 < (w2 -= 3); ) ;
                    w2 && (C[s2++] = C[x++], 1 < w2 && (C[s2++] = C[x++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (n2 < i2 && s2 < o2);
          n2 -= w2 = p2 >> 3, d &= (1 << (p2 -= w2 << 3)) - 1, e3.next_in = n2, e3.next_out = s2, e3.avail_in = n2 < i2 ? i2 - n2 + 5 : 5 - (n2 - i2), e3.avail_out = s2 < o2 ? o2 - s2 + 257 : 257 - (s2 - o2), r3.hold = d, r3.bits = p2;
        };
      }, {}], 49: [function(e2, t2, r2) {
        var I = e2("../utils/common"), O2 = e2("./adler32"), B = e2("./crc32"), R = e2("./inffast"), T2 = e2("./inftrees"), D = 1, F = 2, N2 = 0, U = -2, P2 = 1, n2 = 852, i2 = 592;
        function L2(e3) {
          return (e3 >>> 24 & 255) + (e3 >>> 8 & 65280) + ((65280 & e3) << 8) + ((255 & e3) << 24);
        }
        function s2() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function a2(e3) {
          var t3;
          return e3 && e3.state ? (t3 = e3.state, e3.total_in = e3.total_out = t3.total = 0, e3.msg = "", t3.wrap && (e3.adler = 1 & t3.wrap), t3.mode = P2, t3.last = 0, t3.havedict = 0, t3.dmax = 32768, t3.head = null, t3.hold = 0, t3.bits = 0, t3.lencode = t3.lendyn = new I.Buf32(n2), t3.distcode = t3.distdyn = new I.Buf32(i2), t3.sane = 1, t3.back = -1, N2) : U;
        }
        function o2(e3) {
          var t3;
          return e3 && e3.state ? ((t3 = e3.state).wsize = 0, t3.whave = 0, t3.wnext = 0, a2(e3)) : U;
        }
        function h2(e3, t3) {
          var r3, n3;
          return e3 && e3.state ? (n3 = e3.state, t3 < 0 ? (r3 = 0, t3 = -t3) : (r3 = 1 + (t3 >> 4), t3 < 48 && (t3 &= 15)), t3 && (t3 < 8 || 15 < t3) ? U : (null !== n3.window && n3.wbits !== t3 && (n3.window = null), n3.wrap = r3, n3.wbits = t3, o2(e3))) : U;
        }
        function u2(e3, t3) {
          var r3, n3;
          return e3 ? (n3 = new s2(), (e3.state = n3).window = null, (r3 = h2(e3, t3)) !== N2 && (e3.state = null), r3) : U;
        }
        var l2, f2, c2 = true;
        function j(e3) {
          if (c2) {
            var t3;
            for (l2 = new I.Buf32(512), f2 = new I.Buf32(32), t3 = 0; t3 < 144; ) e3.lens[t3++] = 8;
            for (; t3 < 256; ) e3.lens[t3++] = 9;
            for (; t3 < 280; ) e3.lens[t3++] = 7;
            for (; t3 < 288; ) e3.lens[t3++] = 8;
            for (T2(D, e3.lens, 0, 288, l2, 0, e3.work, { bits: 9 }), t3 = 0; t3 < 32; ) e3.lens[t3++] = 5;
            T2(F, e3.lens, 0, 32, f2, 0, e3.work, { bits: 5 }), c2 = false;
          }
          e3.lencode = l2, e3.lenbits = 9, e3.distcode = f2, e3.distbits = 5;
        }
        function Z(e3, t3, r3, n3) {
          var i3, s3 = e3.state;
          return null === s3.window && (s3.wsize = 1 << s3.wbits, s3.wnext = 0, s3.whave = 0, s3.window = new I.Buf8(s3.wsize)), n3 >= s3.wsize ? (I.arraySet(s3.window, t3, r3 - s3.wsize, s3.wsize, 0), s3.wnext = 0, s3.whave = s3.wsize) : (n3 < (i3 = s3.wsize - s3.wnext) && (i3 = n3), I.arraySet(s3.window, t3, r3 - n3, i3, s3.wnext), (n3 -= i3) ? (I.arraySet(s3.window, t3, r3 - n3, n3, 0), s3.wnext = n3, s3.whave = s3.wsize) : (s3.wnext += i3, s3.wnext === s3.wsize && (s3.wnext = 0), s3.whave < s3.wsize && (s3.whave += i3))), 0;
        }
        r2.inflateReset = o2, r2.inflateReset2 = h2, r2.inflateResetKeep = a2, r2.inflateInit = function(e3) {
          return u2(e3, 15);
        }, r2.inflateInit2 = u2, r2.inflate = function(e3, t3) {
          var r3, n3, i3, s3, a3, o3, h3, u3, l3, f3, c3, d, p2, m2, _2, g2, b, v2, y2, w2, k, x, S2, z, C = 0, E = new I.Buf8(4), A2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e3 || !e3.state || !e3.output || !e3.input && 0 !== e3.avail_in) return U;
          12 === (r3 = e3.state).mode && (r3.mode = 13), a3 = e3.next_out, i3 = e3.output, h3 = e3.avail_out, s3 = e3.next_in, n3 = e3.input, o3 = e3.avail_in, u3 = r3.hold, l3 = r3.bits, f3 = o3, c3 = h3, x = N2;
          e: for (; ; ) switch (r3.mode) {
            case P2:
              if (0 === r3.wrap) {
                r3.mode = 13;
                break;
              }
              for (; l3 < 16; ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              if (2 & r3.wrap && 35615 === u3) {
                E[r3.check = 0] = 255 & u3, E[1] = u3 >>> 8 & 255, r3.check = B(r3.check, E, 2, 0), l3 = u3 = 0, r3.mode = 2;
                break;
              }
              if (r3.flags = 0, r3.head && (r3.head.done = false), !(1 & r3.wrap) || (((255 & u3) << 8) + (u3 >> 8)) % 31) {
                e3.msg = "incorrect header check", r3.mode = 30;
                break;
              }
              if (8 != (15 & u3)) {
                e3.msg = "unknown compression method", r3.mode = 30;
                break;
              }
              if (l3 -= 4, k = 8 + (15 & (u3 >>>= 4)), 0 === r3.wbits) r3.wbits = k;
              else if (k > r3.wbits) {
                e3.msg = "invalid window size", r3.mode = 30;
                break;
              }
              r3.dmax = 1 << k, e3.adler = r3.check = 1, r3.mode = 512 & u3 ? 10 : 12, l3 = u3 = 0;
              break;
            case 2:
              for (; l3 < 16; ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              if (r3.flags = u3, 8 != (255 & r3.flags)) {
                e3.msg = "unknown compression method", r3.mode = 30;
                break;
              }
              if (57344 & r3.flags) {
                e3.msg = "unknown header flags set", r3.mode = 30;
                break;
              }
              r3.head && (r3.head.text = u3 >> 8 & 1), 512 & r3.flags && (E[0] = 255 & u3, E[1] = u3 >>> 8 & 255, r3.check = B(r3.check, E, 2, 0)), l3 = u3 = 0, r3.mode = 3;
            case 3:
              for (; l3 < 32; ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              r3.head && (r3.head.time = u3), 512 & r3.flags && (E[0] = 255 & u3, E[1] = u3 >>> 8 & 255, E[2] = u3 >>> 16 & 255, E[3] = u3 >>> 24 & 255, r3.check = B(r3.check, E, 4, 0)), l3 = u3 = 0, r3.mode = 4;
            case 4:
              for (; l3 < 16; ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              r3.head && (r3.head.xflags = 255 & u3, r3.head.os = u3 >> 8), 512 & r3.flags && (E[0] = 255 & u3, E[1] = u3 >>> 8 & 255, r3.check = B(r3.check, E, 2, 0)), l3 = u3 = 0, r3.mode = 5;
            case 5:
              if (1024 & r3.flags) {
                for (; l3 < 16; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                r3.length = u3, r3.head && (r3.head.extra_len = u3), 512 & r3.flags && (E[0] = 255 & u3, E[1] = u3 >>> 8 & 255, r3.check = B(r3.check, E, 2, 0)), l3 = u3 = 0;
              } else r3.head && (r3.head.extra = null);
              r3.mode = 6;
            case 6:
              if (1024 & r3.flags && (o3 < (d = r3.length) && (d = o3), d && (r3.head && (k = r3.head.extra_len - r3.length, r3.head.extra || (r3.head.extra = new Array(r3.head.extra_len)), I.arraySet(r3.head.extra, n3, s3, d, k)), 512 & r3.flags && (r3.check = B(r3.check, n3, d, s3)), o3 -= d, s3 += d, r3.length -= d), r3.length)) break e;
              r3.length = 0, r3.mode = 7;
            case 7:
              if (2048 & r3.flags) {
                if (0 === o3) break e;
                for (d = 0; k = n3[s3 + d++], r3.head && k && r3.length < 65536 && (r3.head.name += String.fromCharCode(k)), k && d < o3; ) ;
                if (512 & r3.flags && (r3.check = B(r3.check, n3, d, s3)), o3 -= d, s3 += d, k) break e;
              } else r3.head && (r3.head.name = null);
              r3.length = 0, r3.mode = 8;
            case 8:
              if (4096 & r3.flags) {
                if (0 === o3) break e;
                for (d = 0; k = n3[s3 + d++], r3.head && k && r3.length < 65536 && (r3.head.comment += String.fromCharCode(k)), k && d < o3; ) ;
                if (512 & r3.flags && (r3.check = B(r3.check, n3, d, s3)), o3 -= d, s3 += d, k) break e;
              } else r3.head && (r3.head.comment = null);
              r3.mode = 9;
            case 9:
              if (512 & r3.flags) {
                for (; l3 < 16; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if (u3 !== (65535 & r3.check)) {
                  e3.msg = "header crc mismatch", r3.mode = 30;
                  break;
                }
                l3 = u3 = 0;
              }
              r3.head && (r3.head.hcrc = r3.flags >> 9 & 1, r3.head.done = true), e3.adler = r3.check = 0, r3.mode = 12;
              break;
            case 10:
              for (; l3 < 32; ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              e3.adler = r3.check = L2(u3), l3 = u3 = 0, r3.mode = 11;
            case 11:
              if (0 === r3.havedict) return e3.next_out = a3, e3.avail_out = h3, e3.next_in = s3, e3.avail_in = o3, r3.hold = u3, r3.bits = l3, 2;
              e3.adler = r3.check = 1, r3.mode = 12;
            case 12:
              if (5 === t3 || 6 === t3) break e;
            case 13:
              if (r3.last) {
                u3 >>>= 7 & l3, l3 -= 7 & l3, r3.mode = 27;
                break;
              }
              for (; l3 < 3; ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              switch (r3.last = 1 & u3, l3 -= 1, 3 & (u3 >>>= 1)) {
                case 0:
                  r3.mode = 14;
                  break;
                case 1:
                  if (j(r3), r3.mode = 20, 6 !== t3) break;
                  u3 >>>= 2, l3 -= 2;
                  break e;
                case 2:
                  r3.mode = 17;
                  break;
                case 3:
                  e3.msg = "invalid block type", r3.mode = 30;
              }
              u3 >>>= 2, l3 -= 2;
              break;
            case 14:
              for (u3 >>>= 7 & l3, l3 -= 7 & l3; l3 < 32; ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              if ((65535 & u3) != (u3 >>> 16 ^ 65535)) {
                e3.msg = "invalid stored block lengths", r3.mode = 30;
                break;
              }
              if (r3.length = 65535 & u3, l3 = u3 = 0, r3.mode = 15, 6 === t3) break e;
            case 15:
              r3.mode = 16;
            case 16:
              if (d = r3.length) {
                if (o3 < d && (d = o3), h3 < d && (d = h3), 0 === d) break e;
                I.arraySet(i3, n3, s3, d, a3), o3 -= d, s3 += d, h3 -= d, a3 += d, r3.length -= d;
                break;
              }
              r3.mode = 12;
              break;
            case 17:
              for (; l3 < 14; ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              if (r3.nlen = 257 + (31 & u3), u3 >>>= 5, l3 -= 5, r3.ndist = 1 + (31 & u3), u3 >>>= 5, l3 -= 5, r3.ncode = 4 + (15 & u3), u3 >>>= 4, l3 -= 4, 286 < r3.nlen || 30 < r3.ndist) {
                e3.msg = "too many length or distance symbols", r3.mode = 30;
                break;
              }
              r3.have = 0, r3.mode = 18;
            case 18:
              for (; r3.have < r3.ncode; ) {
                for (; l3 < 3; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                r3.lens[A2[r3.have++]] = 7 & u3, u3 >>>= 3, l3 -= 3;
              }
              for (; r3.have < 19; ) r3.lens[A2[r3.have++]] = 0;
              if (r3.lencode = r3.lendyn, r3.lenbits = 7, S2 = { bits: r3.lenbits }, x = T2(0, r3.lens, 0, 19, r3.lencode, 0, r3.work, S2), r3.lenbits = S2.bits, x) {
                e3.msg = "invalid code lengths set", r3.mode = 30;
                break;
              }
              r3.have = 0, r3.mode = 19;
            case 19:
              for (; r3.have < r3.nlen + r3.ndist; ) {
                for (; g2 = (C = r3.lencode[u3 & (1 << r3.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_2 = C >>> 24) <= l3); ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if (b < 16) u3 >>>= _2, l3 -= _2, r3.lens[r3.have++] = b;
                else {
                  if (16 === b) {
                    for (z = _2 + 2; l3 < z; ) {
                      if (0 === o3) break e;
                      o3--, u3 += n3[s3++] << l3, l3 += 8;
                    }
                    if (u3 >>>= _2, l3 -= _2, 0 === r3.have) {
                      e3.msg = "invalid bit length repeat", r3.mode = 30;
                      break;
                    }
                    k = r3.lens[r3.have - 1], d = 3 + (3 & u3), u3 >>>= 2, l3 -= 2;
                  } else if (17 === b) {
                    for (z = _2 + 3; l3 < z; ) {
                      if (0 === o3) break e;
                      o3--, u3 += n3[s3++] << l3, l3 += 8;
                    }
                    l3 -= _2, k = 0, d = 3 + (7 & (u3 >>>= _2)), u3 >>>= 3, l3 -= 3;
                  } else {
                    for (z = _2 + 7; l3 < z; ) {
                      if (0 === o3) break e;
                      o3--, u3 += n3[s3++] << l3, l3 += 8;
                    }
                    l3 -= _2, k = 0, d = 11 + (127 & (u3 >>>= _2)), u3 >>>= 7, l3 -= 7;
                  }
                  if (r3.have + d > r3.nlen + r3.ndist) {
                    e3.msg = "invalid bit length repeat", r3.mode = 30;
                    break;
                  }
                  for (; d--; ) r3.lens[r3.have++] = k;
                }
              }
              if (30 === r3.mode) break;
              if (0 === r3.lens[256]) {
                e3.msg = "invalid code -- missing end-of-block", r3.mode = 30;
                break;
              }
              if (r3.lenbits = 9, S2 = { bits: r3.lenbits }, x = T2(D, r3.lens, 0, r3.nlen, r3.lencode, 0, r3.work, S2), r3.lenbits = S2.bits, x) {
                e3.msg = "invalid literal/lengths set", r3.mode = 30;
                break;
              }
              if (r3.distbits = 6, r3.distcode = r3.distdyn, S2 = { bits: r3.distbits }, x = T2(F, r3.lens, r3.nlen, r3.ndist, r3.distcode, 0, r3.work, S2), r3.distbits = S2.bits, x) {
                e3.msg = "invalid distances set", r3.mode = 30;
                break;
              }
              if (r3.mode = 20, 6 === t3) break e;
            case 20:
              r3.mode = 21;
            case 21:
              if (6 <= o3 && 258 <= h3) {
                e3.next_out = a3, e3.avail_out = h3, e3.next_in = s3, e3.avail_in = o3, r3.hold = u3, r3.bits = l3, R(e3, c3), a3 = e3.next_out, i3 = e3.output, h3 = e3.avail_out, s3 = e3.next_in, n3 = e3.input, o3 = e3.avail_in, u3 = r3.hold, l3 = r3.bits, 12 === r3.mode && (r3.back = -1);
                break;
              }
              for (r3.back = 0; g2 = (C = r3.lencode[u3 & (1 << r3.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_2 = C >>> 24) <= l3); ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              if (g2 && 0 == (240 & g2)) {
                for (v2 = _2, y2 = g2, w2 = b; g2 = (C = r3.lencode[w2 + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b = 65535 & C, !(v2 + (_2 = C >>> 24) <= l3); ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                u3 >>>= v2, l3 -= v2, r3.back += v2;
              }
              if (u3 >>>= _2, l3 -= _2, r3.back += _2, r3.length = b, 0 === g2) {
                r3.mode = 26;
                break;
              }
              if (32 & g2) {
                r3.back = -1, r3.mode = 12;
                break;
              }
              if (64 & g2) {
                e3.msg = "invalid literal/length code", r3.mode = 30;
                break;
              }
              r3.extra = 15 & g2, r3.mode = 22;
            case 22:
              if (r3.extra) {
                for (z = r3.extra; l3 < z; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                r3.length += u3 & (1 << r3.extra) - 1, u3 >>>= r3.extra, l3 -= r3.extra, r3.back += r3.extra;
              }
              r3.was = r3.length, r3.mode = 23;
            case 23:
              for (; g2 = (C = r3.distcode[u3 & (1 << r3.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_2 = C >>> 24) <= l3); ) {
                if (0 === o3) break e;
                o3--, u3 += n3[s3++] << l3, l3 += 8;
              }
              if (0 == (240 & g2)) {
                for (v2 = _2, y2 = g2, w2 = b; g2 = (C = r3.distcode[w2 + ((u3 & (1 << v2 + y2) - 1) >> v2)]) >>> 16 & 255, b = 65535 & C, !(v2 + (_2 = C >>> 24) <= l3); ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                u3 >>>= v2, l3 -= v2, r3.back += v2;
              }
              if (u3 >>>= _2, l3 -= _2, r3.back += _2, 64 & g2) {
                e3.msg = "invalid distance code", r3.mode = 30;
                break;
              }
              r3.offset = b, r3.extra = 15 & g2, r3.mode = 24;
            case 24:
              if (r3.extra) {
                for (z = r3.extra; l3 < z; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                r3.offset += u3 & (1 << r3.extra) - 1, u3 >>>= r3.extra, l3 -= r3.extra, r3.back += r3.extra;
              }
              if (r3.offset > r3.dmax) {
                e3.msg = "invalid distance too far back", r3.mode = 30;
                break;
              }
              r3.mode = 25;
            case 25:
              if (0 === h3) break e;
              if (d = c3 - h3, r3.offset > d) {
                if ((d = r3.offset - d) > r3.whave && r3.sane) {
                  e3.msg = "invalid distance too far back", r3.mode = 30;
                  break;
                }
                p2 = d > r3.wnext ? (d -= r3.wnext, r3.wsize - d) : r3.wnext - d, d > r3.length && (d = r3.length), m2 = r3.window;
              } else m2 = i3, p2 = a3 - r3.offset, d = r3.length;
              for (h3 < d && (d = h3), h3 -= d, r3.length -= d; i3[a3++] = m2[p2++], --d; ) ;
              0 === r3.length && (r3.mode = 21);
              break;
            case 26:
              if (0 === h3) break e;
              i3[a3++] = r3.length, h3--, r3.mode = 21;
              break;
            case 27:
              if (r3.wrap) {
                for (; l3 < 32; ) {
                  if (0 === o3) break e;
                  o3--, u3 |= n3[s3++] << l3, l3 += 8;
                }
                if (c3 -= h3, e3.total_out += c3, r3.total += c3, c3 && (e3.adler = r3.check = r3.flags ? B(r3.check, i3, c3, a3 - c3) : O2(r3.check, i3, c3, a3 - c3)), c3 = h3, (r3.flags ? u3 : L2(u3)) !== r3.check) {
                  e3.msg = "incorrect data check", r3.mode = 30;
                  break;
                }
                l3 = u3 = 0;
              }
              r3.mode = 28;
            case 28:
              if (r3.wrap && r3.flags) {
                for (; l3 < 32; ) {
                  if (0 === o3) break e;
                  o3--, u3 += n3[s3++] << l3, l3 += 8;
                }
                if (u3 !== (4294967295 & r3.total)) {
                  e3.msg = "incorrect length check", r3.mode = 30;
                  break;
                }
                l3 = u3 = 0;
              }
              r3.mode = 29;
            case 29:
              x = 1;
              break e;
            case 30:
              x = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return U;
          }
          return e3.next_out = a3, e3.avail_out = h3, e3.next_in = s3, e3.avail_in = o3, r3.hold = u3, r3.bits = l3, (r3.wsize || c3 !== e3.avail_out && r3.mode < 30 && (r3.mode < 27 || 4 !== t3)) && Z(e3, e3.output, e3.next_out, c3 - e3.avail_out) ? (r3.mode = 31, -4) : (f3 -= e3.avail_in, c3 -= e3.avail_out, e3.total_in += f3, e3.total_out += c3, r3.total += c3, r3.wrap && c3 && (e3.adler = r3.check = r3.flags ? B(r3.check, i3, c3, e3.next_out - c3) : O2(r3.check, i3, c3, e3.next_out - c3)), e3.data_type = r3.bits + (r3.last ? 64 : 0) + (12 === r3.mode ? 128 : 0) + (20 === r3.mode || 15 === r3.mode ? 256 : 0), (0 == f3 && 0 === c3 || 4 === t3) && x === N2 && (x = -5), x);
        }, r2.inflateEnd = function(e3) {
          if (!e3 || !e3.state) return U;
          var t3 = e3.state;
          return t3.window && (t3.window = null), e3.state = null, N2;
        }, r2.inflateGetHeader = function(e3, t3) {
          var r3;
          return e3 && e3.state ? 0 == (2 & (r3 = e3.state).wrap) ? U : ((r3.head = t3).done = false, N2) : U;
        }, r2.inflateSetDictionary = function(e3, t3) {
          var r3, n3 = t3.length;
          return e3 && e3.state ? 0 !== (r3 = e3.state).wrap && 11 !== r3.mode ? U : 11 === r3.mode && O2(1, t3, n3, 0) !== r3.check ? -3 : Z(e3, t3, n3, n3) ? (r3.mode = 31, -4) : (r3.havedict = 1, N2) : U;
        }, r2.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e2, t2, r2) {
        var D = e2("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N2 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P2 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t2.exports = function(e3, t3, r3, n2, i2, s2, a2, o2) {
          var h2, u2, l2, f2, c2, d, p2, m2, _2, g2 = o2.bits, b = 0, v2 = 0, y2 = 0, w2 = 0, k = 0, x = 0, S2 = 0, z = 0, C = 0, E = 0, A2 = null, I = 0, O2 = new D.Buf16(16), B = new D.Buf16(16), R = null, T2 = 0;
          for (b = 0; b <= 15; b++) O2[b] = 0;
          for (v2 = 0; v2 < n2; v2++) O2[t3[r3 + v2]]++;
          for (k = g2, w2 = 15; 1 <= w2 && 0 === O2[w2]; w2--) ;
          if (w2 < k && (k = w2), 0 === w2) return i2[s2++] = 20971520, i2[s2++] = 20971520, o2.bits = 1, 0;
          for (y2 = 1; y2 < w2 && 0 === O2[y2]; y2++) ;
          for (k < y2 && (k = y2), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O2[b]) < 0) return -1;
          if (0 < z && (0 === e3 || 1 !== w2)) return -1;
          for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O2[b];
          for (v2 = 0; v2 < n2; v2++) 0 !== t3[r3 + v2] && (a2[B[t3[r3 + v2]]++] = v2);
          if (d = 0 === e3 ? (A2 = R = a2, 19) : 1 === e3 ? (A2 = F, I -= 257, R = N2, T2 -= 257, 256) : (A2 = U, R = P2, -1), b = y2, c2 = s2, S2 = v2 = E = 0, l2 = -1, f2 = (C = 1 << (x = k)) - 1, 1 === e3 && 852 < C || 2 === e3 && 592 < C) return 1;
          for (; ; ) {
            for (p2 = b - S2, _2 = a2[v2] < d ? (m2 = 0, a2[v2]) : a2[v2] > d ? (m2 = R[T2 + a2[v2]], A2[I + a2[v2]]) : (m2 = 96, 0), h2 = 1 << b - S2, y2 = u2 = 1 << x; i2[c2 + (E >> S2) + (u2 -= h2)] = p2 << 24 | m2 << 16 | _2 | 0, 0 !== u2; ) ;
            for (h2 = 1 << b - 1; E & h2; ) h2 >>= 1;
            if (0 !== h2 ? (E &= h2 - 1, E += h2) : E = 0, v2++, 0 == --O2[b]) {
              if (b === w2) break;
              b = t3[r3 + a2[v2]];
            }
            if (k < b && (E & f2) !== l2) {
              for (0 === S2 && (S2 = k), c2 += y2, z = 1 << (x = b - S2); x + S2 < w2 && !((z -= O2[x + S2]) <= 0); ) x++, z <<= 1;
              if (C += 1 << x, 1 === e3 && 852 < C || 2 === e3 && 592 < C) return 1;
              i2[l2 = E & f2] = k << 24 | x << 16 | c2 - s2 | 0;
            }
          }
          return 0 !== E && (i2[c2 + E] = b - S2 << 24 | 64 << 16 | 0), o2.bits = k, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e2, t2, r2) {
        t2.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e2, t2, r2) {
        var i2 = e2("../utils/common"), o2 = 0, h2 = 1;
        function n2(e3) {
          for (var t3 = e3.length; 0 <= --t3; ) e3[t3] = 0;
        }
        var s2 = 0, a2 = 29, u2 = 256, l2 = u2 + 1 + a2, f2 = 30, c2 = 19, _2 = 2 * l2 + 1, g2 = 15, d = 16, p2 = 7, m2 = 256, b = 16, v2 = 17, y2 = 18, w2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l2 + 2));
        n2(z);
        var C = new Array(2 * f2);
        n2(C);
        var E = new Array(512);
        n2(E);
        var A2 = new Array(256);
        n2(A2);
        var I = new Array(a2);
        n2(I);
        var O2, B, R, T2 = new Array(f2);
        function D(e3, t3, r3, n3, i3) {
          this.static_tree = e3, this.extra_bits = t3, this.extra_base = r3, this.elems = n3, this.max_length = i3, this.has_stree = e3 && e3.length;
        }
        function F(e3, t3) {
          this.dyn_tree = e3, this.max_code = 0, this.stat_desc = t3;
        }
        function N2(e3) {
          return e3 < 256 ? E[e3] : E[256 + (e3 >>> 7)];
        }
        function U(e3, t3) {
          e3.pending_buf[e3.pending++] = 255 & t3, e3.pending_buf[e3.pending++] = t3 >>> 8 & 255;
        }
        function P2(e3, t3, r3) {
          e3.bi_valid > d - r3 ? (e3.bi_buf |= t3 << e3.bi_valid & 65535, U(e3, e3.bi_buf), e3.bi_buf = t3 >> d - e3.bi_valid, e3.bi_valid += r3 - d) : (e3.bi_buf |= t3 << e3.bi_valid & 65535, e3.bi_valid += r3);
        }
        function L2(e3, t3, r3) {
          P2(e3, r3[2 * t3], r3[2 * t3 + 1]);
        }
        function j(e3, t3) {
          for (var r3 = 0; r3 |= 1 & e3, e3 >>>= 1, r3 <<= 1, 0 < --t3; ) ;
          return r3 >>> 1;
        }
        function Z(e3, t3, r3) {
          var n3, i3, s3 = new Array(g2 + 1), a3 = 0;
          for (n3 = 1; n3 <= g2; n3++) s3[n3] = a3 = a3 + r3[n3 - 1] << 1;
          for (i3 = 0; i3 <= t3; i3++) {
            var o3 = e3[2 * i3 + 1];
            0 !== o3 && (e3[2 * i3] = j(s3[o3]++, o3));
          }
        }
        function W(e3) {
          var t3;
          for (t3 = 0; t3 < l2; t3++) e3.dyn_ltree[2 * t3] = 0;
          for (t3 = 0; t3 < f2; t3++) e3.dyn_dtree[2 * t3] = 0;
          for (t3 = 0; t3 < c2; t3++) e3.bl_tree[2 * t3] = 0;
          e3.dyn_ltree[2 * m2] = 1, e3.opt_len = e3.static_len = 0, e3.last_lit = e3.matches = 0;
        }
        function M(e3) {
          8 < e3.bi_valid ? U(e3, e3.bi_buf) : 0 < e3.bi_valid && (e3.pending_buf[e3.pending++] = e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0;
        }
        function H(e3, t3, r3, n3) {
          var i3 = 2 * t3, s3 = 2 * r3;
          return e3[i3] < e3[s3] || e3[i3] === e3[s3] && n3[t3] <= n3[r3];
        }
        function G2(e3, t3, r3) {
          for (var n3 = e3.heap[r3], i3 = r3 << 1; i3 <= e3.heap_len && (i3 < e3.heap_len && H(t3, e3.heap[i3 + 1], e3.heap[i3], e3.depth) && i3++, !H(t3, n3, e3.heap[i3], e3.depth)); ) e3.heap[r3] = e3.heap[i3], r3 = i3, i3 <<= 1;
          e3.heap[r3] = n3;
        }
        function K(e3, t3, r3) {
          var n3, i3, s3, a3, o3 = 0;
          if (0 !== e3.last_lit) for (; n3 = e3.pending_buf[e3.d_buf + 2 * o3] << 8 | e3.pending_buf[e3.d_buf + 2 * o3 + 1], i3 = e3.pending_buf[e3.l_buf + o3], o3++, 0 === n3 ? L2(e3, i3, t3) : (L2(e3, (s3 = A2[i3]) + u2 + 1, t3), 0 !== (a3 = w2[s3]) && P2(e3, i3 -= I[s3], a3), L2(e3, s3 = N2(--n3), r3), 0 !== (a3 = k[s3]) && P2(e3, n3 -= T2[s3], a3)), o3 < e3.last_lit; ) ;
          L2(e3, m2, t3);
        }
        function Y(e3, t3) {
          var r3, n3, i3, s3 = t3.dyn_tree, a3 = t3.stat_desc.static_tree, o3 = t3.stat_desc.has_stree, h3 = t3.stat_desc.elems, u3 = -1;
          for (e3.heap_len = 0, e3.heap_max = _2, r3 = 0; r3 < h3; r3++) 0 !== s3[2 * r3] ? (e3.heap[++e3.heap_len] = u3 = r3, e3.depth[r3] = 0) : s3[2 * r3 + 1] = 0;
          for (; e3.heap_len < 2; ) s3[2 * (i3 = e3.heap[++e3.heap_len] = u3 < 2 ? ++u3 : 0)] = 1, e3.depth[i3] = 0, e3.opt_len--, o3 && (e3.static_len -= a3[2 * i3 + 1]);
          for (t3.max_code = u3, r3 = e3.heap_len >> 1; 1 <= r3; r3--) G2(e3, s3, r3);
          for (i3 = h3; r3 = e3.heap[1], e3.heap[1] = e3.heap[e3.heap_len--], G2(e3, s3, 1), n3 = e3.heap[1], e3.heap[--e3.heap_max] = r3, e3.heap[--e3.heap_max] = n3, s3[2 * i3] = s3[2 * r3] + s3[2 * n3], e3.depth[i3] = (e3.depth[r3] >= e3.depth[n3] ? e3.depth[r3] : e3.depth[n3]) + 1, s3[2 * r3 + 1] = s3[2 * n3 + 1] = i3, e3.heap[1] = i3++, G2(e3, s3, 1), 2 <= e3.heap_len; ) ;
          e3.heap[--e3.heap_max] = e3.heap[1], function(e4, t4) {
            var r4, n4, i4, s4, a4, o4, h4 = t4.dyn_tree, u4 = t4.max_code, l3 = t4.stat_desc.static_tree, f3 = t4.stat_desc.has_stree, c3 = t4.stat_desc.extra_bits, d2 = t4.stat_desc.extra_base, p3 = t4.stat_desc.max_length, m3 = 0;
            for (s4 = 0; s4 <= g2; s4++) e4.bl_count[s4] = 0;
            for (h4[2 * e4.heap[e4.heap_max] + 1] = 0, r4 = e4.heap_max + 1; r4 < _2; r4++) p3 < (s4 = h4[2 * h4[2 * (n4 = e4.heap[r4]) + 1] + 1] + 1) && (s4 = p3, m3++), h4[2 * n4 + 1] = s4, u4 < n4 || (e4.bl_count[s4]++, a4 = 0, d2 <= n4 && (a4 = c3[n4 - d2]), o4 = h4[2 * n4], e4.opt_len += o4 * (s4 + a4), f3 && (e4.static_len += o4 * (l3[2 * n4 + 1] + a4)));
            if (0 !== m3) {
              do {
                for (s4 = p3 - 1; 0 === e4.bl_count[s4]; ) s4--;
                e4.bl_count[s4]--, e4.bl_count[s4 + 1] += 2, e4.bl_count[p3]--, m3 -= 2;
              } while (0 < m3);
              for (s4 = p3; 0 !== s4; s4--) for (n4 = e4.bl_count[s4]; 0 !== n4; ) u4 < (i4 = e4.heap[--r4]) || (h4[2 * i4 + 1] !== s4 && (e4.opt_len += (s4 - h4[2 * i4 + 1]) * h4[2 * i4], h4[2 * i4 + 1] = s4), n4--);
            }
          }(e3, t3), Z(s3, u3, e3.bl_count);
        }
        function X(e3, t3, r3) {
          var n3, i3, s3 = -1, a3 = t3[1], o3 = 0, h3 = 7, u3 = 4;
          for (0 === a3 && (h3 = 138, u3 = 3), t3[2 * (r3 + 1) + 1] = 65535, n3 = 0; n3 <= r3; n3++) i3 = a3, a3 = t3[2 * (n3 + 1) + 1], ++o3 < h3 && i3 === a3 || (o3 < u3 ? e3.bl_tree[2 * i3] += o3 : 0 !== i3 ? (i3 !== s3 && e3.bl_tree[2 * i3]++, e3.bl_tree[2 * b]++) : o3 <= 10 ? e3.bl_tree[2 * v2]++ : e3.bl_tree[2 * y2]++, s3 = i3, u3 = (o3 = 0) === a3 ? (h3 = 138, 3) : i3 === a3 ? (h3 = 6, 3) : (h3 = 7, 4));
        }
        function V(e3, t3, r3) {
          var n3, i3, s3 = -1, a3 = t3[1], o3 = 0, h3 = 7, u3 = 4;
          for (0 === a3 && (h3 = 138, u3 = 3), n3 = 0; n3 <= r3; n3++) if (i3 = a3, a3 = t3[2 * (n3 + 1) + 1], !(++o3 < h3 && i3 === a3)) {
            if (o3 < u3) for (; L2(e3, i3, e3.bl_tree), 0 != --o3; ) ;
            else 0 !== i3 ? (i3 !== s3 && (L2(e3, i3, e3.bl_tree), o3--), L2(e3, b, e3.bl_tree), P2(e3, o3 - 3, 2)) : o3 <= 10 ? (L2(e3, v2, e3.bl_tree), P2(e3, o3 - 3, 3)) : (L2(e3, y2, e3.bl_tree), P2(e3, o3 - 11, 7));
            s3 = i3, u3 = (o3 = 0) === a3 ? (h3 = 138, 3) : i3 === a3 ? (h3 = 6, 3) : (h3 = 7, 4);
          }
        }
        n2(T2);
        var q = false;
        function J(e3, t3, r3, n3) {
          P2(e3, (s2 << 1) + (n3 ? 1 : 0), 3), function(e4, t4, r4, n4) {
            M(e4), U(e4, r4), U(e4, ~r4), i2.arraySet(e4.pending_buf, e4.window, t4, r4, e4.pending), e4.pending += r4;
          }(e3, t3, r3);
        }
        r2._tr_init = function(e3) {
          q || (function() {
            var e4, t3, r3, n3, i3, s3 = new Array(g2 + 1);
            for (n3 = r3 = 0; n3 < a2 - 1; n3++) for (I[n3] = r3, e4 = 0; e4 < 1 << w2[n3]; e4++) A2[r3++] = n3;
            for (A2[r3 - 1] = n3, n3 = i3 = 0; n3 < 16; n3++) for (T2[n3] = i3, e4 = 0; e4 < 1 << k[n3]; e4++) E[i3++] = n3;
            for (i3 >>= 7; n3 < f2; n3++) for (T2[n3] = i3 << 7, e4 = 0; e4 < 1 << k[n3] - 7; e4++) E[256 + i3++] = n3;
            for (t3 = 0; t3 <= g2; t3++) s3[t3] = 0;
            for (e4 = 0; e4 <= 143; ) z[2 * e4 + 1] = 8, e4++, s3[8]++;
            for (; e4 <= 255; ) z[2 * e4 + 1] = 9, e4++, s3[9]++;
            for (; e4 <= 279; ) z[2 * e4 + 1] = 7, e4++, s3[7]++;
            for (; e4 <= 287; ) z[2 * e4 + 1] = 8, e4++, s3[8]++;
            for (Z(z, l2 + 1, s3), e4 = 0; e4 < f2; e4++) C[2 * e4 + 1] = 5, C[2 * e4] = j(e4, 5);
            O2 = new D(z, w2, u2 + 1, l2, g2), B = new D(C, k, 0, f2, g2), R = new D(new Array(0), x, 0, c2, p2);
          }(), q = true), e3.l_desc = new F(e3.dyn_ltree, O2), e3.d_desc = new F(e3.dyn_dtree, B), e3.bl_desc = new F(e3.bl_tree, R), e3.bi_buf = 0, e3.bi_valid = 0, W(e3);
        }, r2._tr_stored_block = J, r2._tr_flush_block = function(e3, t3, r3, n3) {
          var i3, s3, a3 = 0;
          0 < e3.level ? (2 === e3.strm.data_type && (e3.strm.data_type = function(e4) {
            var t4, r4 = 4093624447;
            for (t4 = 0; t4 <= 31; t4++, r4 >>>= 1) if (1 & r4 && 0 !== e4.dyn_ltree[2 * t4]) return o2;
            if (0 !== e4.dyn_ltree[18] || 0 !== e4.dyn_ltree[20] || 0 !== e4.dyn_ltree[26]) return h2;
            for (t4 = 32; t4 < u2; t4++) if (0 !== e4.dyn_ltree[2 * t4]) return h2;
            return o2;
          }(e3)), Y(e3, e3.l_desc), Y(e3, e3.d_desc), a3 = function(e4) {
            var t4;
            for (X(e4, e4.dyn_ltree, e4.l_desc.max_code), X(e4, e4.dyn_dtree, e4.d_desc.max_code), Y(e4, e4.bl_desc), t4 = c2 - 1; 3 <= t4 && 0 === e4.bl_tree[2 * S2[t4] + 1]; t4--) ;
            return e4.opt_len += 3 * (t4 + 1) + 5 + 5 + 4, t4;
          }(e3), i3 = e3.opt_len + 3 + 7 >>> 3, (s3 = e3.static_len + 3 + 7 >>> 3) <= i3 && (i3 = s3)) : i3 = s3 = r3 + 5, r3 + 4 <= i3 && -1 !== t3 ? J(e3, t3, r3, n3) : 4 === e3.strategy || s3 === i3 ? (P2(e3, 2 + (n3 ? 1 : 0), 3), K(e3, z, C)) : (P2(e3, 4 + (n3 ? 1 : 0), 3), function(e4, t4, r4, n4) {
            var i4;
            for (P2(e4, t4 - 257, 5), P2(e4, r4 - 1, 5), P2(e4, n4 - 4, 4), i4 = 0; i4 < n4; i4++) P2(e4, e4.bl_tree[2 * S2[i4] + 1], 3);
            V(e4, e4.dyn_ltree, t4 - 1), V(e4, e4.dyn_dtree, r4 - 1);
          }(e3, e3.l_desc.max_code + 1, e3.d_desc.max_code + 1, a3 + 1), K(e3, e3.dyn_ltree, e3.dyn_dtree)), W(e3), n3 && M(e3);
        }, r2._tr_tally = function(e3, t3, r3) {
          return e3.pending_buf[e3.d_buf + 2 * e3.last_lit] = t3 >>> 8 & 255, e3.pending_buf[e3.d_buf + 2 * e3.last_lit + 1] = 255 & t3, e3.pending_buf[e3.l_buf + e3.last_lit] = 255 & r3, e3.last_lit++, 0 === t3 ? e3.dyn_ltree[2 * r3]++ : (e3.matches++, t3--, e3.dyn_ltree[2 * (A2[r3] + u2 + 1)]++, e3.dyn_dtree[2 * N2(t3)]++), e3.last_lit === e3.lit_bufsize - 1;
        }, r2._tr_align = function(e3) {
          P2(e3, 2, 3), L2(e3, m2, z), function(e4) {
            16 === e4.bi_valid ? (U(e4, e4.bi_buf), e4.bi_buf = 0, e4.bi_valid = 0) : 8 <= e4.bi_valid && (e4.pending_buf[e4.pending++] = 255 & e4.bi_buf, e4.bi_buf >>= 8, e4.bi_valid -= 8);
          }(e3);
        };
      }, { "../utils/common": 41 }], 53: [function(e2, t2, r2) {
        t2.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e2, t2, r2) {
        (function(e3) {
          !function(r3, n2) {
            if (!r3.setImmediate) {
              var i2, s2, t3, a2, o2 = 1, h2 = {}, u2 = false, l2 = r3.document, e4 = Object.getPrototypeOf && Object.getPrototypeOf(r3);
              e4 = e4 && e4.setTimeout ? e4 : r3, i2 = "[object process]" === {}.toString.call(r3.process) ? function(e5) {
                process.nextTick(function() {
                  c2(e5);
                });
              } : function() {
                if (r3.postMessage && !r3.importScripts) {
                  var e5 = true, t4 = r3.onmessage;
                  return r3.onmessage = function() {
                    e5 = false;
                  }, r3.postMessage("", "*"), r3.onmessage = t4, e5;
                }
              }() ? (a2 = "setImmediate$" + Math.random() + "$", r3.addEventListener ? r3.addEventListener("message", d, false) : r3.attachEvent("onmessage", d), function(e5) {
                r3.postMessage(a2 + e5, "*");
              }) : r3.MessageChannel ? ((t3 = new MessageChannel()).port1.onmessage = function(e5) {
                c2(e5.data);
              }, function(e5) {
                t3.port2.postMessage(e5);
              }) : l2 && "onreadystatechange" in l2.createElement("script") ? (s2 = l2.documentElement, function(e5) {
                var t4 = l2.createElement("script");
                t4.onreadystatechange = function() {
                  c2(e5), t4.onreadystatechange = null, s2.removeChild(t4), t4 = null;
                }, s2.appendChild(t4);
              }) : function(e5) {
                setTimeout(c2, 0, e5);
              }, e4.setImmediate = function(e5) {
                "function" != typeof e5 && (e5 = new Function("" + e5));
                for (var t4 = new Array(arguments.length - 1), r4 = 0; r4 < t4.length; r4++) t4[r4] = arguments[r4 + 1];
                var n3 = { callback: e5, args: t4 };
                return h2[o2] = n3, i2(o2), o2++;
              }, e4.clearImmediate = f2;
            }
            function f2(e5) {
              delete h2[e5];
            }
            function c2(e5) {
              if (u2) setTimeout(c2, 0, e5);
              else {
                var t4 = h2[e5];
                if (t4) {
                  u2 = true;
                  try {
                    !function(e6) {
                      var t5 = e6.callback, r4 = e6.args;
                      switch (r4.length) {
                        case 0:
                          t5();
                          break;
                        case 1:
                          t5(r4[0]);
                          break;
                        case 2:
                          t5(r4[0], r4[1]);
                          break;
                        case 3:
                          t5(r4[0], r4[1], r4[2]);
                          break;
                        default:
                          t5.apply(n2, r4);
                      }
                    }(t4);
                  } finally {
                    f2(e5), u2 = false;
                  }
                }
              }
            }
            function d(e5) {
              e5.source === r3 && "string" == typeof e5.data && 0 === e5.data.indexOf(a2) && c2(+e5.data.slice(a2.length));
            }
          }("undefined" == typeof self ? void 0 === e3 ? this : e3 : self);
        }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}] }, {}, [10])(10);
    });
  })(jszip_min);
  return jszip_min.exports;
}
var jszip_minExports = requireJszip_min();
const JSZip = /* @__PURE__ */ getDefaultExportFromCjs(jszip_minExports);
var es_promise = {};
var es_promise_constructor = {};
var globalThis_1;
var hasRequiredGlobalThis;
function requireGlobalThis() {
  if (hasRequiredGlobalThis) return globalThis_1;
  hasRequiredGlobalThis = 1;
  var check = function(it) {
    return it && it.Math === Math && it;
  };
  globalThis_1 = // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || check(typeof globalThis_1 == "object" && globalThis_1) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")();
  return globalThis_1;
}
var objectGetOwnPropertyDescriptor = {};
var fails;
var hasRequiredFails;
function requireFails() {
  if (hasRequiredFails) return fails;
  hasRequiredFails = 1;
  fails = function(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  return fails;
}
var descriptors;
var hasRequiredDescriptors;
function requireDescriptors() {
  if (hasRequiredDescriptors) return descriptors;
  hasRequiredDescriptors = 1;
  var fails2 = requireFails();
  descriptors = !fails2(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  });
  return descriptors;
}
var functionBindNative;
var hasRequiredFunctionBindNative;
function requireFunctionBindNative() {
  if (hasRequiredFunctionBindNative) return functionBindNative;
  hasRequiredFunctionBindNative = 1;
  var fails2 = requireFails();
  functionBindNative = !fails2(function() {
    var test2 = (function() {
    }).bind();
    return typeof test2 != "function" || test2.hasOwnProperty("prototype");
  });
  return functionBindNative;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var call2 = Function.prototype.call;
  functionCall = NATIVE_BIND ? call2.bind(call2) : function() {
    return call2.apply(call2, arguments);
  };
  return functionCall;
}
var objectPropertyIsEnumerable = {};
var hasRequiredObjectPropertyIsEnumerable;
function requireObjectPropertyIsEnumerable() {
  if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
  hasRequiredObjectPropertyIsEnumerable = 1;
  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
  var NASHORN_BUG = getOwnPropertyDescriptor2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable2(V) {
    var descriptor = getOwnPropertyDescriptor2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
  return objectPropertyIsEnumerable;
}
var createPropertyDescriptor;
var hasRequiredCreatePropertyDescriptor;
function requireCreatePropertyDescriptor() {
  if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
  hasRequiredCreatePropertyDescriptor = 1;
  createPropertyDescriptor = function(bitmap, value2) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value2
    };
  };
  return createPropertyDescriptor;
}
var functionUncurryThis;
var hasRequiredFunctionUncurryThis;
function requireFunctionUncurryThis() {
  if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
  hasRequiredFunctionUncurryThis = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var FunctionPrototype = Function.prototype;
  var call2 = FunctionPrototype.call;
  var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call2, call2);
  functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
      return call2.apply(fn, arguments);
    };
  };
  return functionUncurryThis;
}
var classofRaw;
var hasRequiredClassofRaw;
function requireClassofRaw() {
  if (hasRequiredClassofRaw) return classofRaw;
  hasRequiredClassofRaw = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toString2 = uncurryThis({}.toString);
  var stringSlice = uncurryThis("".slice);
  classofRaw = function(it) {
    return stringSlice(toString2(it), 8, -1);
  };
  return classofRaw;
}
var indexedObject;
var hasRequiredIndexedObject;
function requireIndexedObject() {
  if (hasRequiredIndexedObject) return indexedObject;
  hasRequiredIndexedObject = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails2 = requireFails();
  var classof2 = requireClassofRaw();
  var $Object = Object;
  var split = uncurryThis("".split);
  indexedObject = fails2(function() {
    return !$Object("z").propertyIsEnumerable(0);
  }) ? function(it) {
    return classof2(it) === "String" ? split(it, "") : $Object(it);
  } : $Object;
  return indexedObject;
}
var isNullOrUndefined;
var hasRequiredIsNullOrUndefined;
function requireIsNullOrUndefined() {
  if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  hasRequiredIsNullOrUndefined = 1;
  isNullOrUndefined = function(it) {
    return it === null || it === void 0;
  };
  return isNullOrUndefined;
}
var requireObjectCoercible;
var hasRequiredRequireObjectCoercible;
function requireRequireObjectCoercible() {
  if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
  hasRequiredRequireObjectCoercible = 1;
  var isNullOrUndefined2 = requireIsNullOrUndefined();
  var $TypeError = TypeError;
  requireObjectCoercible = function(it) {
    if (isNullOrUndefined2(it)) throw new $TypeError("Can't call method on " + it);
    return it;
  };
  return requireObjectCoercible;
}
var toIndexedObject;
var hasRequiredToIndexedObject;
function requireToIndexedObject() {
  if (hasRequiredToIndexedObject) return toIndexedObject;
  hasRequiredToIndexedObject = 1;
  var IndexedObject = requireIndexedObject();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  toIndexedObject = function(it) {
    return IndexedObject(requireObjectCoercible2(it));
  };
  return toIndexedObject;
}
var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable) return isCallable;
  hasRequiredIsCallable = 1;
  var documentAll = typeof document == "object" && document.all;
  isCallable = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
  } : function(argument) {
    return typeof argument == "function";
  };
  return isCallable;
}
var isObject;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject;
  hasRequiredIsObject = 1;
  var isCallable2 = requireIsCallable();
  isObject = function(it) {
    return typeof it == "object" ? it !== null : isCallable2(it);
  };
  return isObject;
}
var getBuiltIn;
var hasRequiredGetBuiltIn;
function requireGetBuiltIn() {
  if (hasRequiredGetBuiltIn) return getBuiltIn;
  hasRequiredGetBuiltIn = 1;
  var globalThis2 = requireGlobalThis();
  var isCallable2 = requireIsCallable();
  var aFunction = function(argument) {
    return isCallable2(argument) ? argument : void 0;
  };
  getBuiltIn = function(namespace2, method) {
    return arguments.length < 2 ? aFunction(globalThis2[namespace2]) : globalThis2[namespace2] && globalThis2[namespace2][method];
  };
  return getBuiltIn;
}
var objectIsPrototypeOf;
var hasRequiredObjectIsPrototypeOf;
function requireObjectIsPrototypeOf() {
  if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
  hasRequiredObjectIsPrototypeOf = 1;
  var uncurryThis = requireFunctionUncurryThis();
  objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
  return objectIsPrototypeOf;
}
var environmentUserAgent;
var hasRequiredEnvironmentUserAgent;
function requireEnvironmentUserAgent() {
  if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
  hasRequiredEnvironmentUserAgent = 1;
  var globalThis2 = requireGlobalThis();
  var navigator2 = globalThis2.navigator;
  var userAgent2 = navigator2 && navigator2.userAgent;
  environmentUserAgent = userAgent2 ? String(userAgent2) : "";
  return environmentUserAgent;
}
var environmentV8Version;
var hasRequiredEnvironmentV8Version;
function requireEnvironmentV8Version() {
  if (hasRequiredEnvironmentV8Version) return environmentV8Version;
  hasRequiredEnvironmentV8Version = 1;
  var globalThis2 = requireGlobalThis();
  var userAgent2 = requireEnvironmentUserAgent();
  var process2 = globalThis2.process;
  var Deno2 = globalThis2.Deno;
  var versions = process2 && process2.versions || Deno2 && Deno2.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split(".");
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }
  if (!version && userAgent2) {
    match = userAgent2.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent2.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  environmentV8Version = version;
  return environmentV8Version;
}
var symbolConstructorDetection;
var hasRequiredSymbolConstructorDetection;
function requireSymbolConstructorDetection() {
  if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
  hasRequiredSymbolConstructorDetection = 1;
  var V8_VERSION = requireEnvironmentV8Version();
  var fails2 = requireFails();
  var globalThis2 = requireGlobalThis();
  var $String = globalThis2.String;
  symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails2(function() {
    var symbol = Symbol("symbol detection");
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });
  return symbolConstructorDetection;
}
var useSymbolAsUid;
var hasRequiredUseSymbolAsUid;
function requireUseSymbolAsUid() {
  if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
  hasRequiredUseSymbolAsUid = 1;
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  useSymbolAsUid = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  return useSymbolAsUid;
}
var isSymbol;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol;
  hasRequiredIsSymbol = 1;
  var getBuiltIn2 = requireGetBuiltIn();
  var isCallable2 = requireIsCallable();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var $Object = Object;
  isSymbol = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
  } : function(it) {
    var $Symbol = getBuiltIn2("Symbol");
    return isCallable2($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  };
  return isSymbol;
}
var tryToString;
var hasRequiredTryToString;
function requireTryToString() {
  if (hasRequiredTryToString) return tryToString;
  hasRequiredTryToString = 1;
  var $String = String;
  tryToString = function(argument) {
    try {
      return $String(argument);
    } catch (error) {
      return "Object";
    }
  };
  return tryToString;
}
var aCallable;
var hasRequiredACallable;
function requireACallable() {
  if (hasRequiredACallable) return aCallable;
  hasRequiredACallable = 1;
  var isCallable2 = requireIsCallable();
  var tryToString2 = requireTryToString();
  var $TypeError = TypeError;
  aCallable = function(argument) {
    if (isCallable2(argument)) return argument;
    throw new $TypeError(tryToString2(argument) + " is not a function");
  };
  return aCallable;
}
var getMethod;
var hasRequiredGetMethod;
function requireGetMethod() {
  if (hasRequiredGetMethod) return getMethod;
  hasRequiredGetMethod = 1;
  var aCallable2 = requireACallable();
  var isNullOrUndefined2 = requireIsNullOrUndefined();
  getMethod = function(V, P2) {
    var func = V[P2];
    return isNullOrUndefined2(func) ? void 0 : aCallable2(func);
  };
  return getMethod;
}
var ordinaryToPrimitive;
var hasRequiredOrdinaryToPrimitive;
function requireOrdinaryToPrimitive() {
  if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
  hasRequiredOrdinaryToPrimitive = 1;
  var call2 = requireFunctionCall();
  var isCallable2 = requireIsCallable();
  var isObject2 = requireIsObject();
  var $TypeError = TypeError;
  ordinaryToPrimitive = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable2(fn = input.toString) && !isObject2(val = call2(fn, input))) return val;
    if (isCallable2(fn = input.valueOf) && !isObject2(val = call2(fn, input))) return val;
    if (pref !== "string" && isCallable2(fn = input.toString) && !isObject2(val = call2(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
  };
  return ordinaryToPrimitive;
}
var sharedStore = { exports: {} };
var isPure;
var hasRequiredIsPure;
function requireIsPure() {
  if (hasRequiredIsPure) return isPure;
  hasRequiredIsPure = 1;
  isPure = false;
  return isPure;
}
var defineGlobalProperty;
var hasRequiredDefineGlobalProperty;
function requireDefineGlobalProperty() {
  if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
  hasRequiredDefineGlobalProperty = 1;
  var globalThis2 = requireGlobalThis();
  var defineProperty2 = Object.defineProperty;
  defineGlobalProperty = function(key, value2) {
    try {
      defineProperty2(globalThis2, key, { value: value2, configurable: true, writable: true });
    } catch (error) {
      globalThis2[key] = value2;
    }
    return value2;
  };
  return defineGlobalProperty;
}
var hasRequiredSharedStore;
function requireSharedStore() {
  if (hasRequiredSharedStore) return sharedStore.exports;
  hasRequiredSharedStore = 1;
  var IS_PURE = requireIsPure();
  var globalThis2 = requireGlobalThis();
  var defineGlobalProperty2 = requireDefineGlobalProperty();
  var SHARED = "__core-js_shared__";
  var store = sharedStore.exports = globalThis2[SHARED] || defineGlobalProperty2(SHARED, {});
  (store.versions || (store.versions = [])).push({
    version: "3.42.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.42.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
  return sharedStore.exports;
}
var shared;
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared) return shared;
  hasRequiredShared = 1;
  var store = requireSharedStore();
  shared = function(key, value2) {
    return store[key] || (store[key] = value2 || {});
  };
  return shared;
}
var toObject;
var hasRequiredToObject;
function requireToObject() {
  if (hasRequiredToObject) return toObject;
  hasRequiredToObject = 1;
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var $Object = Object;
  toObject = function(argument) {
    return $Object(requireObjectCoercible2(argument));
  };
  return toObject;
}
var hasOwnProperty_1;
var hasRequiredHasOwnProperty;
function requireHasOwnProperty() {
  if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
  hasRequiredHasOwnProperty = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toObject2 = requireToObject();
  var hasOwnProperty2 = uncurryThis({}.hasOwnProperty);
  hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty2(toObject2(it), key);
  };
  return hasOwnProperty_1;
}
var uid;
var hasRequiredUid;
function requireUid() {
  if (hasRequiredUid) return uid;
  hasRequiredUid = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var id = 0;
  var postfix = Math.random();
  var toString2 = uncurryThis(1 .toString);
  uid = function(key) {
    return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString2(++id + postfix, 36);
  };
  return uid;
}
var wellKnownSymbol;
var hasRequiredWellKnownSymbol;
function requireWellKnownSymbol() {
  if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
  hasRequiredWellKnownSymbol = 1;
  var globalThis2 = requireGlobalThis();
  var shared2 = requireShared();
  var hasOwn = requireHasOwnProperty();
  var uid2 = requireUid();
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var Symbol2 = globalThis2.Symbol;
  var WellKnownSymbolsStore = shared2("wks");
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid2;
  wellKnownSymbol = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
    }
    return WellKnownSymbolsStore[name];
  };
  return wellKnownSymbol;
}
var toPrimitive$1;
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive$1;
  hasRequiredToPrimitive = 1;
  var call2 = requireFunctionCall();
  var isObject2 = requireIsObject();
  var isSymbol2 = requireIsSymbol();
  var getMethod2 = requireGetMethod();
  var ordinaryToPrimitive2 = requireOrdinaryToPrimitive();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var $TypeError = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol2("toPrimitive");
  toPrimitive$1 = function(input, pref) {
    if (!isObject2(input) || isSymbol2(input)) return input;
    var exoticToPrim = getMethod2(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === void 0) pref = "default";
      result = call2(exoticToPrim, input, pref);
      if (!isObject2(result) || isSymbol2(result)) return result;
      throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === void 0) pref = "number";
    return ordinaryToPrimitive2(input, pref);
  };
  return toPrimitive$1;
}
var toPropertyKey$1;
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey$1;
  hasRequiredToPropertyKey = 1;
  var toPrimitive2 = requireToPrimitive();
  var isSymbol2 = requireIsSymbol();
  toPropertyKey$1 = function(argument) {
    var key = toPrimitive2(argument, "string");
    return isSymbol2(key) ? key : key + "";
  };
  return toPropertyKey$1;
}
var documentCreateElement;
var hasRequiredDocumentCreateElement;
function requireDocumentCreateElement() {
  if (hasRequiredDocumentCreateElement) return documentCreateElement;
  hasRequiredDocumentCreateElement = 1;
  var globalThis2 = requireGlobalThis();
  var isObject2 = requireIsObject();
  var document2 = globalThis2.document;
  var EXISTS = isObject2(document2) && isObject2(document2.createElement);
  documentCreateElement = function(it) {
    return EXISTS ? document2.createElement(it) : {};
  };
  return documentCreateElement;
}
var ie8DomDefine;
var hasRequiredIe8DomDefine;
function requireIe8DomDefine() {
  if (hasRequiredIe8DomDefine) return ie8DomDefine;
  hasRequiredIe8DomDefine = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails2 = requireFails();
  var createElement2 = requireDocumentCreateElement();
  ie8DomDefine = !DESCRIPTORS && !fails2(function() {
    return Object.defineProperty(createElement2("div"), "a", {
      get: function() {
        return 7;
      }
    }).a !== 7;
  });
  return ie8DomDefine;
}
var hasRequiredObjectGetOwnPropertyDescriptor;
function requireObjectGetOwnPropertyDescriptor() {
  if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
  hasRequiredObjectGetOwnPropertyDescriptor = 1;
  var DESCRIPTORS = requireDescriptors();
  var call2 = requireFunctionCall();
  var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
  var toIndexedObject2 = requireToIndexedObject();
  var toPropertyKey2 = requireToPropertyKey();
  var hasOwn = requireHasOwnProperty();
  var IE8_DOM_DEFINE = requireIe8DomDefine();
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor2(O2, P2) {
    O2 = toIndexedObject2(O2);
    P2 = toPropertyKey2(P2);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O2, P2);
    } catch (error) {
    }
    if (hasOwn(O2, P2)) return createPropertyDescriptor2(!call2(propertyIsEnumerableModule.f, O2, P2), O2[P2]);
  };
  return objectGetOwnPropertyDescriptor;
}
var objectDefineProperty = {};
var v8PrototypeDefineBug;
var hasRequiredV8PrototypeDefineBug;
function requireV8PrototypeDefineBug() {
  if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
  hasRequiredV8PrototypeDefineBug = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails2 = requireFails();
  v8PrototypeDefineBug = DESCRIPTORS && fails2(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
  return v8PrototypeDefineBug;
}
var anObject;
var hasRequiredAnObject;
function requireAnObject() {
  if (hasRequiredAnObject) return anObject;
  hasRequiredAnObject = 1;
  var isObject2 = requireIsObject();
  var $String = String;
  var $TypeError = TypeError;
  anObject = function(argument) {
    if (isObject2(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
  };
  return anObject;
}
var hasRequiredObjectDefineProperty;
function requireObjectDefineProperty() {
  if (hasRequiredObjectDefineProperty) return objectDefineProperty;
  hasRequiredObjectDefineProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var IE8_DOM_DEFINE = requireIe8DomDefine();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var anObject2 = requireAnObject();
  var toPropertyKey2 = requireToPropertyKey();
  var $TypeError = TypeError;
  var $defineProperty = Object.defineProperty;
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = "enumerable";
  var CONFIGURABLE = "configurable";
  var WRITABLE = "writable";
  objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty2(O2, P2, Attributes) {
    anObject2(O2);
    P2 = toPropertyKey2(P2);
    anObject2(Attributes);
    if (typeof O2 === "function" && P2 === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O2, P2);
      if (current && current[WRITABLE]) {
        O2[P2] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O2, P2, Attributes);
  } : $defineProperty : function defineProperty2(O2, P2, Attributes) {
    anObject2(O2);
    P2 = toPropertyKey2(P2);
    anObject2(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O2, P2, Attributes);
    } catch (error) {
    }
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O2[P2] = Attributes.value;
    return O2;
  };
  return objectDefineProperty;
}
var createNonEnumerableProperty;
var hasRequiredCreateNonEnumerableProperty;
function requireCreateNonEnumerableProperty() {
  if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
  hasRequiredCreateNonEnumerableProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var definePropertyModule = requireObjectDefineProperty();
  var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
  createNonEnumerableProperty = DESCRIPTORS ? function(object, key, value2) {
    return definePropertyModule.f(object, key, createPropertyDescriptor2(1, value2));
  } : function(object, key, value2) {
    object[key] = value2;
    return object;
  };
  return createNonEnumerableProperty;
}
var makeBuiltIn = { exports: {} };
var functionName;
var hasRequiredFunctionName;
function requireFunctionName() {
  if (hasRequiredFunctionName) return functionName;
  hasRequiredFunctionName = 1;
  var DESCRIPTORS = requireDescriptors();
  var hasOwn = requireHasOwnProperty();
  var FunctionPrototype = Function.prototype;
  var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn(FunctionPrototype, "name");
  var PROPER = EXISTS && (function something() {
  }).name === "something";
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
  functionName = {
    EXISTS,
    PROPER,
    CONFIGURABLE
  };
  return functionName;
}
var inspectSource;
var hasRequiredInspectSource;
function requireInspectSource() {
  if (hasRequiredInspectSource) return inspectSource;
  hasRequiredInspectSource = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var isCallable2 = requireIsCallable();
  var store = requireSharedStore();
  var functionToString = uncurryThis(Function.toString);
  if (!isCallable2(store.inspectSource)) {
    store.inspectSource = function(it) {
      return functionToString(it);
    };
  }
  inspectSource = store.inspectSource;
  return inspectSource;
}
var weakMapBasicDetection;
var hasRequiredWeakMapBasicDetection;
function requireWeakMapBasicDetection() {
  if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
  hasRequiredWeakMapBasicDetection = 1;
  var globalThis2 = requireGlobalThis();
  var isCallable2 = requireIsCallable();
  var WeakMap2 = globalThis2.WeakMap;
  weakMapBasicDetection = isCallable2(WeakMap2) && /native code/.test(String(WeakMap2));
  return weakMapBasicDetection;
}
var sharedKey;
var hasRequiredSharedKey;
function requireSharedKey() {
  if (hasRequiredSharedKey) return sharedKey;
  hasRequiredSharedKey = 1;
  var shared2 = requireShared();
  var uid2 = requireUid();
  var keys2 = shared2("keys");
  sharedKey = function(key) {
    return keys2[key] || (keys2[key] = uid2(key));
  };
  return sharedKey;
}
var hiddenKeys;
var hasRequiredHiddenKeys;
function requireHiddenKeys() {
  if (hasRequiredHiddenKeys) return hiddenKeys;
  hasRequiredHiddenKeys = 1;
  hiddenKeys = {};
  return hiddenKeys;
}
var internalState;
var hasRequiredInternalState;
function requireInternalState() {
  if (hasRequiredInternalState) return internalState;
  hasRequiredInternalState = 1;
  var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
  var globalThis2 = requireGlobalThis();
  var isObject2 = requireIsObject();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var hasOwn = requireHasOwnProperty();
  var shared2 = requireSharedStore();
  var sharedKey2 = requireSharedKey();
  var hiddenKeys2 = requireHiddenKeys();
  var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
  var TypeError2 = globalThis2.TypeError;
  var WeakMap2 = globalThis2.WeakMap;
  var set3, get3, has2;
  var enforce = function(it) {
    return has2(it) ? get3(it) : set3(it, {});
  };
  var getterFor = function(TYPE) {
    return function(it) {
      var state;
      if (!isObject2(it) || (state = get3(it)).type !== TYPE) {
        throw new TypeError2("Incompatible receiver, " + TYPE + " required");
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared2.state) {
    var store = shared2.state || (shared2.state = new WeakMap2());
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    set3 = function(it, metadata) {
      if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get3 = function(it) {
      return store.get(it) || {};
    };
    has2 = function(it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey2("state");
    hiddenKeys2[STATE] = true;
    set3 = function(it, metadata) {
      if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty2(it, STATE, metadata);
      return metadata;
    };
    get3 = function(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has2 = function(it) {
      return hasOwn(it, STATE);
    };
  }
  internalState = {
    set: set3,
    get: get3,
    has: has2,
    enforce,
    getterFor
  };
  return internalState;
}
var hasRequiredMakeBuiltIn;
function requireMakeBuiltIn() {
  if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
  hasRequiredMakeBuiltIn = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails2 = requireFails();
  var isCallable2 = requireIsCallable();
  var hasOwn = requireHasOwnProperty();
  var DESCRIPTORS = requireDescriptors();
  var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
  var inspectSource2 = requireInspectSource();
  var InternalStateModule = requireInternalState();
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  var defineProperty2 = Object.defineProperty;
  var stringSlice = uncurryThis("".slice);
  var replace2 = uncurryThis("".replace);
  var join = uncurryThis([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails2(function() {
    return defineProperty2(function() {
    }, "length", { value: 8 }).length !== 8;
  });
  var TEMPLATE = String(String).split("String");
  var makeBuiltIn$1 = makeBuiltIn.exports = function(value2, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") {
      name = "[" + replace2($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    }
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value2, "name") || CONFIGURABLE_FUNCTION_NAME && value2.name !== name) {
      if (DESCRIPTORS) defineProperty2(value2, "name", { value: name, configurable: true });
      else value2.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value2.length !== options.arity) {
      defineProperty2(value2, "length", { value: options.arity });
    }
    try {
      if (options && hasOwn(options, "constructor") && options.constructor) {
        if (DESCRIPTORS) defineProperty2(value2, "prototype", { writable: false });
      } else if (value2.prototype) value2.prototype = void 0;
    } catch (error) {
    }
    var state = enforceInternalState(value2);
    if (!hasOwn(state, "source")) {
      state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    }
    return value2;
  };
  Function.prototype.toString = makeBuiltIn$1(function toString2() {
    return isCallable2(this) && getInternalState(this).source || inspectSource2(this);
  }, "toString");
  return makeBuiltIn.exports;
}
var defineBuiltIn;
var hasRequiredDefineBuiltIn;
function requireDefineBuiltIn() {
  if (hasRequiredDefineBuiltIn) return defineBuiltIn;
  hasRequiredDefineBuiltIn = 1;
  var isCallable2 = requireIsCallable();
  var definePropertyModule = requireObjectDefineProperty();
  var makeBuiltIn2 = requireMakeBuiltIn();
  var defineGlobalProperty2 = requireDefineGlobalProperty();
  defineBuiltIn = function(O2, key, value2, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== void 0 ? options.name : key;
    if (isCallable2(value2)) makeBuiltIn2(value2, name, options);
    if (options.global) {
      if (simple) O2[key] = value2;
      else defineGlobalProperty2(key, value2);
    } else {
      try {
        if (!options.unsafe) delete O2[key];
        else if (O2[key]) simple = true;
      } catch (error) {
      }
      if (simple) O2[key] = value2;
      else definePropertyModule.f(O2, key, {
        value: value2,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    }
    return O2;
  };
  return defineBuiltIn;
}
var objectGetOwnPropertyNames = {};
var mathTrunc;
var hasRequiredMathTrunc;
function requireMathTrunc() {
  if (hasRequiredMathTrunc) return mathTrunc;
  hasRequiredMathTrunc = 1;
  var ceil = Math.ceil;
  var floor2 = Math.floor;
  mathTrunc = Math.trunc || function trunc2(x) {
    var n2 = +x;
    return (n2 > 0 ? floor2 : ceil)(n2);
  };
  return mathTrunc;
}
var toIntegerOrInfinity;
var hasRequiredToIntegerOrInfinity;
function requireToIntegerOrInfinity() {
  if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
  hasRequiredToIntegerOrInfinity = 1;
  var trunc2 = requireMathTrunc();
  toIntegerOrInfinity = function(argument) {
    var number = +argument;
    return number !== number || number === 0 ? 0 : trunc2(number);
  };
  return toIntegerOrInfinity;
}
var toAbsoluteIndex;
var hasRequiredToAbsoluteIndex;
function requireToAbsoluteIndex() {
  if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
  hasRequiredToAbsoluteIndex = 1;
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var max2 = Math.max;
  var min2 = Math.min;
  toAbsoluteIndex = function(index, length) {
    var integer = toIntegerOrInfinity2(index);
    return integer < 0 ? max2(integer + length, 0) : min2(integer, length);
  };
  return toAbsoluteIndex;
}
var toLength;
var hasRequiredToLength;
function requireToLength() {
  if (hasRequiredToLength) return toLength;
  hasRequiredToLength = 1;
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var min2 = Math.min;
  toLength = function(argument) {
    var len = toIntegerOrInfinity2(argument);
    return len > 0 ? min2(len, 9007199254740991) : 0;
  };
  return toLength;
}
var lengthOfArrayLike;
var hasRequiredLengthOfArrayLike;
function requireLengthOfArrayLike() {
  if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
  hasRequiredLengthOfArrayLike = 1;
  var toLength2 = requireToLength();
  lengthOfArrayLike = function(obj) {
    return toLength2(obj.length);
  };
  return lengthOfArrayLike;
}
var arrayIncludes;
var hasRequiredArrayIncludes;
function requireArrayIncludes() {
  if (hasRequiredArrayIncludes) return arrayIncludes;
  hasRequiredArrayIncludes = 1;
  var toIndexedObject2 = requireToIndexedObject();
  var toAbsoluteIndex2 = requireToAbsoluteIndex();
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
      var O2 = toIndexedObject2($this);
      var length = lengthOfArrayLike2(O2);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex2(fromIndex, length);
      var value2;
      if (IS_INCLUDES && el !== el) while (length > index) {
        value2 = O2[index++];
        if (value2 !== value2) return true;
      }
      else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O2) && O2[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };
  return arrayIncludes;
}
var objectKeysInternal;
var hasRequiredObjectKeysInternal;
function requireObjectKeysInternal() {
  if (hasRequiredObjectKeysInternal) return objectKeysInternal;
  hasRequiredObjectKeysInternal = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var hasOwn = requireHasOwnProperty();
  var toIndexedObject2 = requireToIndexedObject();
  var indexOf = requireArrayIncludes().indexOf;
  var hiddenKeys2 = requireHiddenKeys();
  var push = uncurryThis([].push);
  objectKeysInternal = function(object, names) {
    var O2 = toIndexedObject2(object);
    var i2 = 0;
    var result = [];
    var key;
    for (key in O2) !hasOwn(hiddenKeys2, key) && hasOwn(O2, key) && push(result, key);
    while (names.length > i2) if (hasOwn(O2, key = names[i2++])) {
      ~indexOf(result, key) || push(result, key);
    }
    return result;
  };
  return objectKeysInternal;
}
var enumBugKeys;
var hasRequiredEnumBugKeys;
function requireEnumBugKeys() {
  if (hasRequiredEnumBugKeys) return enumBugKeys;
  hasRequiredEnumBugKeys = 1;
  enumBugKeys = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ];
  return enumBugKeys;
}
var hasRequiredObjectGetOwnPropertyNames;
function requireObjectGetOwnPropertyNames() {
  if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
  hasRequiredObjectGetOwnPropertyNames = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys2 = requireEnumBugKeys();
  var hiddenKeys2 = enumBugKeys2.concat("length", "prototype");
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O2) {
    return internalObjectKeys(O2, hiddenKeys2);
  };
  return objectGetOwnPropertyNames;
}
var objectGetOwnPropertySymbols = {};
var hasRequiredObjectGetOwnPropertySymbols;
function requireObjectGetOwnPropertySymbols() {
  if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
  hasRequiredObjectGetOwnPropertySymbols = 1;
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  return objectGetOwnPropertySymbols;
}
var ownKeys;
var hasRequiredOwnKeys;
function requireOwnKeys() {
  if (hasRequiredOwnKeys) return ownKeys;
  hasRequiredOwnKeys = 1;
  var getBuiltIn2 = requireGetBuiltIn();
  var uncurryThis = requireFunctionUncurryThis();
  var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  var anObject2 = requireAnObject();
  var concat = uncurryThis([].concat);
  ownKeys = getBuiltIn2("Reflect", "ownKeys") || function ownKeys2(it) {
    var keys2 = getOwnPropertyNamesModule.f(anObject2(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys2, getOwnPropertySymbols(it)) : keys2;
  };
  return ownKeys;
}
var copyConstructorProperties;
var hasRequiredCopyConstructorProperties;
function requireCopyConstructorProperties() {
  if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
  hasRequiredCopyConstructorProperties = 1;
  var hasOwn = requireHasOwnProperty();
  var ownKeys2 = requireOwnKeys();
  var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  var definePropertyModule = requireObjectDefineProperty();
  copyConstructorProperties = function(target, source, exceptions) {
    var keys2 = ownKeys2(source);
    var defineProperty2 = definePropertyModule.f;
    var getOwnPropertyDescriptor2 = getOwnPropertyDescriptorModule.f;
    for (var i2 = 0; i2 < keys2.length; i2++) {
      var key = keys2[i2];
      if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
        defineProperty2(target, key, getOwnPropertyDescriptor2(source, key));
      }
    }
  };
  return copyConstructorProperties;
}
var isForced_1;
var hasRequiredIsForced;
function requireIsForced() {
  if (hasRequiredIsForced) return isForced_1;
  hasRequiredIsForced = 1;
  var fails2 = requireFails();
  var isCallable2 = requireIsCallable();
  var replacement = /#|\.prototype\./;
  var isForced = function(feature, detection) {
    var value2 = data[normalize(feature)];
    return value2 === POLYFILL ? true : value2 === NATIVE ? false : isCallable2(detection) ? fails2(detection) : !!detection;
  };
  var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = "N";
  var POLYFILL = isForced.POLYFILL = "P";
  isForced_1 = isForced;
  return isForced_1;
}
var _export;
var hasRequired_export;
function require_export() {
  if (hasRequired_export) return _export;
  hasRequired_export = 1;
  var globalThis2 = requireGlobalThis();
  var getOwnPropertyDescriptor2 = requireObjectGetOwnPropertyDescriptor().f;
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var defineGlobalProperty2 = requireDefineGlobalProperty();
  var copyConstructorProperties2 = requireCopyConstructorProperties();
  var isForced = requireIsForced();
  _export = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = globalThis2;
    } else if (STATIC) {
      target = globalThis2[TARGET] || defineGlobalProperty2(TARGET, {});
    } else {
      target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties2(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty2(sourceProperty, "sham", true);
      }
      defineBuiltIn2(target, key, sourceProperty, options);
    }
  };
  return _export;
}
var environment;
var hasRequiredEnvironment;
function requireEnvironment() {
  if (hasRequiredEnvironment) return environment;
  hasRequiredEnvironment = 1;
  var globalThis2 = requireGlobalThis();
  var userAgent2 = requireEnvironmentUserAgent();
  var classof2 = requireClassofRaw();
  var userAgentStartsWith = function(string) {
    return userAgent2.slice(0, string.length) === string;
  };
  environment = function() {
    if (userAgentStartsWith("Bun/")) return "BUN";
    if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
    if (userAgentStartsWith("Deno/")) return "DENO";
    if (userAgentStartsWith("Node.js/")) return "NODE";
    if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
    if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
    if (classof2(globalThis2.process) === "process") return "NODE";
    if (globalThis2.window && globalThis2.document) return "BROWSER";
    return "REST";
  }();
  return environment;
}
var environmentIsNode;
var hasRequiredEnvironmentIsNode;
function requireEnvironmentIsNode() {
  if (hasRequiredEnvironmentIsNode) return environmentIsNode;
  hasRequiredEnvironmentIsNode = 1;
  var ENVIRONMENT = requireEnvironment();
  environmentIsNode = ENVIRONMENT === "NODE";
  return environmentIsNode;
}
var functionUncurryThisAccessor;
var hasRequiredFunctionUncurryThisAccessor;
function requireFunctionUncurryThisAccessor() {
  if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
  hasRequiredFunctionUncurryThisAccessor = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var aCallable2 = requireACallable();
  functionUncurryThisAccessor = function(object, key, method) {
    try {
      return uncurryThis(aCallable2(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {
    }
  };
  return functionUncurryThisAccessor;
}
var isPossiblePrototype;
var hasRequiredIsPossiblePrototype;
function requireIsPossiblePrototype() {
  if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  hasRequiredIsPossiblePrototype = 1;
  var isObject2 = requireIsObject();
  isPossiblePrototype = function(argument) {
    return isObject2(argument) || argument === null;
  };
  return isPossiblePrototype;
}
var aPossiblePrototype;
var hasRequiredAPossiblePrototype;
function requireAPossiblePrototype() {
  if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
  hasRequiredAPossiblePrototype = 1;
  var isPossiblePrototype2 = requireIsPossiblePrototype();
  var $String = String;
  var $TypeError = TypeError;
  aPossiblePrototype = function(argument) {
    if (isPossiblePrototype2(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
  };
  return aPossiblePrototype;
}
var objectSetPrototypeOf;
var hasRequiredObjectSetPrototypeOf;
function requireObjectSetPrototypeOf() {
  if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
  hasRequiredObjectSetPrototypeOf = 1;
  var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  var isObject2 = requireIsObject();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var aPossiblePrototype2 = requireAPossiblePrototype();
  objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test2 = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
      setter(test2, []);
      CORRECT_SETTER = test2 instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf2(O2, proto) {
      requireObjectCoercible2(O2);
      aPossiblePrototype2(proto);
      if (!isObject2(O2)) return O2;
      if (CORRECT_SETTER) setter(O2, proto);
      else O2.__proto__ = proto;
      return O2;
    };
  }() : void 0);
  return objectSetPrototypeOf;
}
var setToStringTag;
var hasRequiredSetToStringTag;
function requireSetToStringTag() {
  if (hasRequiredSetToStringTag) return setToStringTag;
  hasRequiredSetToStringTag = 1;
  var defineProperty2 = requireObjectDefineProperty().f;
  var hasOwn = requireHasOwnProperty();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
  setToStringTag = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) {
      defineProperty2(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
  };
  return setToStringTag;
}
var defineBuiltInAccessor;
var hasRequiredDefineBuiltInAccessor;
function requireDefineBuiltInAccessor() {
  if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
  hasRequiredDefineBuiltInAccessor = 1;
  var makeBuiltIn2 = requireMakeBuiltIn();
  var defineProperty2 = requireObjectDefineProperty();
  defineBuiltInAccessor = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn2(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn2(descriptor.set, name, { setter: true });
    return defineProperty2.f(target, name, descriptor);
  };
  return defineBuiltInAccessor;
}
var setSpecies;
var hasRequiredSetSpecies;
function requireSetSpecies() {
  if (hasRequiredSetSpecies) return setSpecies;
  hasRequiredSetSpecies = 1;
  var getBuiltIn2 = requireGetBuiltIn();
  var defineBuiltInAccessor2 = requireDefineBuiltInAccessor();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var DESCRIPTORS = requireDescriptors();
  var SPECIES = wellKnownSymbol2("species");
  setSpecies = function(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn2(CONSTRUCTOR_NAME);
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
      defineBuiltInAccessor2(Constructor, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
    }
  };
  return setSpecies;
}
var anInstance;
var hasRequiredAnInstance;
function requireAnInstance() {
  if (hasRequiredAnInstance) return anInstance;
  hasRequiredAnInstance = 1;
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var $TypeError = TypeError;
  anInstance = function(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw new $TypeError("Incorrect invocation");
  };
  return anInstance;
}
var toStringTagSupport;
var hasRequiredToStringTagSupport;
function requireToStringTagSupport() {
  if (hasRequiredToStringTagSupport) return toStringTagSupport;
  hasRequiredToStringTagSupport = 1;
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
  var test2 = {};
  test2[TO_STRING_TAG] = "z";
  toStringTagSupport = String(test2) === "[object z]";
  return toStringTagSupport;
}
var classof;
var hasRequiredClassof;
function requireClassof() {
  if (hasRequiredClassof) return classof;
  hasRequiredClassof = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var isCallable2 = requireIsCallable();
  var classofRaw2 = requireClassofRaw();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
  var $Object = Object;
  var CORRECT_ARGUMENTS = classofRaw2(/* @__PURE__ */ function() {
    return arguments;
  }()) === "Arguments";
  var tryGet = function(it, key) {
    try {
      return it[key];
    } catch (error) {
    }
  };
  classof = TO_STRING_TAG_SUPPORT ? classofRaw2 : function(it) {
    var O2, tag, result;
    return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O2 = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw2(O2) : (result = classofRaw2(O2)) === "Object" && isCallable2(O2.callee) ? "Arguments" : result;
  };
  return classof;
}
var isConstructor;
var hasRequiredIsConstructor;
function requireIsConstructor() {
  if (hasRequiredIsConstructor) return isConstructor;
  hasRequiredIsConstructor = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails2 = requireFails();
  var isCallable2 = requireIsCallable();
  var classof2 = requireClassof();
  var getBuiltIn2 = requireGetBuiltIn();
  var inspectSource2 = requireInspectSource();
  var noop2 = function() {
  };
  var construct2 = getBuiltIn2("Reflect", "construct");
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = uncurryThis(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.test(noop2);
  var isConstructorModern = function isConstructor2(argument) {
    if (!isCallable2(argument)) return false;
    try {
      construct2(noop2, [], argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function isConstructor2(argument) {
    if (!isCallable2(argument)) return false;
    switch (classof2(argument)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return false;
    }
    try {
      return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource2(argument));
    } catch (error) {
      return true;
    }
  };
  isConstructorLegacy.sham = true;
  isConstructor = !construct2 || fails2(function() {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;
  return isConstructor;
}
var aConstructor;
var hasRequiredAConstructor;
function requireAConstructor() {
  if (hasRequiredAConstructor) return aConstructor;
  hasRequiredAConstructor = 1;
  var isConstructor2 = requireIsConstructor();
  var tryToString2 = requireTryToString();
  var $TypeError = TypeError;
  aConstructor = function(argument) {
    if (isConstructor2(argument)) return argument;
    throw new $TypeError(tryToString2(argument) + " is not a constructor");
  };
  return aConstructor;
}
var speciesConstructor;
var hasRequiredSpeciesConstructor;
function requireSpeciesConstructor() {
  if (hasRequiredSpeciesConstructor) return speciesConstructor;
  hasRequiredSpeciesConstructor = 1;
  var anObject2 = requireAnObject();
  var aConstructor2 = requireAConstructor();
  var isNullOrUndefined2 = requireIsNullOrUndefined();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var SPECIES = wellKnownSymbol2("species");
  speciesConstructor = function(O2, defaultConstructor) {
    var C = anObject2(O2).constructor;
    var S2;
    return C === void 0 || isNullOrUndefined2(S2 = anObject2(C)[SPECIES]) ? defaultConstructor : aConstructor2(S2);
  };
  return speciesConstructor;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var FunctionPrototype = Function.prototype;
  var apply2 = FunctionPrototype.apply;
  var call2 = FunctionPrototype.call;
  functionApply = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call2.bind(apply2) : function() {
    return call2.apply(apply2, arguments);
  });
  return functionApply;
}
var functionUncurryThisClause;
var hasRequiredFunctionUncurryThisClause;
function requireFunctionUncurryThisClause() {
  if (hasRequiredFunctionUncurryThisClause) return functionUncurryThisClause;
  hasRequiredFunctionUncurryThisClause = 1;
  var classofRaw2 = requireClassofRaw();
  var uncurryThis = requireFunctionUncurryThis();
  functionUncurryThisClause = function(fn) {
    if (classofRaw2(fn) === "Function") return uncurryThis(fn);
  };
  return functionUncurryThisClause;
}
var functionBindContext;
var hasRequiredFunctionBindContext;
function requireFunctionBindContext() {
  if (hasRequiredFunctionBindContext) return functionBindContext;
  hasRequiredFunctionBindContext = 1;
  var uncurryThis = requireFunctionUncurryThisClause();
  var aCallable2 = requireACallable();
  var NATIVE_BIND = requireFunctionBindNative();
  var bind = uncurryThis(uncurryThis.bind);
  functionBindContext = function(fn, that) {
    aCallable2(fn);
    return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
      return fn.apply(that, arguments);
    };
  };
  return functionBindContext;
}
var html;
var hasRequiredHtml;
function requireHtml() {
  if (hasRequiredHtml) return html;
  hasRequiredHtml = 1;
  var getBuiltIn2 = requireGetBuiltIn();
  html = getBuiltIn2("document", "documentElement");
  return html;
}
var arraySlice;
var hasRequiredArraySlice;
function requireArraySlice() {
  if (hasRequiredArraySlice) return arraySlice;
  hasRequiredArraySlice = 1;
  var uncurryThis = requireFunctionUncurryThis();
  arraySlice = uncurryThis([].slice);
  return arraySlice;
}
var validateArgumentsLength;
var hasRequiredValidateArgumentsLength;
function requireValidateArgumentsLength() {
  if (hasRequiredValidateArgumentsLength) return validateArgumentsLength;
  hasRequiredValidateArgumentsLength = 1;
  var $TypeError = TypeError;
  validateArgumentsLength = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
  };
  return validateArgumentsLength;
}
var environmentIsIos;
var hasRequiredEnvironmentIsIos;
function requireEnvironmentIsIos() {
  if (hasRequiredEnvironmentIsIos) return environmentIsIos;
  hasRequiredEnvironmentIsIos = 1;
  var userAgent2 = requireEnvironmentUserAgent();
  environmentIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent2);
  return environmentIsIos;
}
var task;
var hasRequiredTask;
function requireTask() {
  if (hasRequiredTask) return task;
  hasRequiredTask = 1;
  var globalThis2 = requireGlobalThis();
  var apply2 = requireFunctionApply();
  var bind = requireFunctionBindContext();
  var isCallable2 = requireIsCallable();
  var hasOwn = requireHasOwnProperty();
  var fails2 = requireFails();
  var html2 = requireHtml();
  var arraySlice2 = requireArraySlice();
  var createElement2 = requireDocumentCreateElement();
  var validateArgumentsLength2 = requireValidateArgumentsLength();
  var IS_IOS = requireEnvironmentIsIos();
  var IS_NODE = requireEnvironmentIsNode();
  var set3 = globalThis2.setImmediate;
  var clear = globalThis2.clearImmediate;
  var process2 = globalThis2.process;
  var Dispatch = globalThis2.Dispatch;
  var Function2 = globalThis2.Function;
  var MessageChannel2 = globalThis2.MessageChannel;
  var String2 = globalThis2.String;
  var counter = 0;
  var queue2 = {};
  var ONREADYSTATECHANGE = "onreadystatechange";
  var $location, defer, channel, port;
  fails2(function() {
    $location = globalThis2.location;
  });
  var run = function(id) {
    if (hasOwn(queue2, id)) {
      var fn = queue2[id];
      delete queue2[id];
      fn();
    }
  };
  var runner = function(id) {
    return function() {
      run(id);
    };
  };
  var eventListener = function(event) {
    run(event.data);
  };
  var globalPostMessageDefer = function(id) {
    globalThis2.postMessage(String2(id), $location.protocol + "//" + $location.host);
  };
  if (!set3 || !clear) {
    set3 = function setImmediate2(handler) {
      validateArgumentsLength2(arguments.length, 1);
      var fn = isCallable2(handler) ? handler : Function2(handler);
      var args = arraySlice2(arguments, 1);
      queue2[++counter] = function() {
        apply2(fn, void 0, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue2[id];
    };
    if (IS_NODE) {
      defer = function(id) {
        process2.nextTick(runner(id));
      };
    } else if (Dispatch && Dispatch.now) {
      defer = function(id) {
        Dispatch.now(runner(id));
      };
    } else if (MessageChannel2 && !IS_IOS) {
      channel = new MessageChannel2();
      port = channel.port2;
      channel.port1.onmessage = eventListener;
      defer = bind(port.postMessage, port);
    } else if (globalThis2.addEventListener && isCallable2(globalThis2.postMessage) && !globalThis2.importScripts && $location && $location.protocol !== "file:" && !fails2(globalPostMessageDefer)) {
      defer = globalPostMessageDefer;
      globalThis2.addEventListener("message", eventListener, false);
    } else if (ONREADYSTATECHANGE in createElement2("script")) {
      defer = function(id) {
        html2.appendChild(createElement2("script"))[ONREADYSTATECHANGE] = function() {
          html2.removeChild(this);
          run(id);
        };
      };
    } else {
      defer = function(id) {
        setTimeout(runner(id), 0);
      };
    }
  }
  task = {
    set: set3,
    clear
  };
  return task;
}
var safeGetBuiltIn;
var hasRequiredSafeGetBuiltIn;
function requireSafeGetBuiltIn() {
  if (hasRequiredSafeGetBuiltIn) return safeGetBuiltIn;
  hasRequiredSafeGetBuiltIn = 1;
  var globalThis2 = requireGlobalThis();
  var DESCRIPTORS = requireDescriptors();
  var getOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
  safeGetBuiltIn = function(name) {
    if (!DESCRIPTORS) return globalThis2[name];
    var descriptor = getOwnPropertyDescriptor2(globalThis2, name);
    return descriptor && descriptor.value;
  };
  return safeGetBuiltIn;
}
var queue;
var hasRequiredQueue;
function requireQueue() {
  if (hasRequiredQueue) return queue;
  hasRequiredQueue = 1;
  var Queue = function() {
    this.head = null;
    this.tail = null;
  };
  Queue.prototype = {
    add: function(item) {
      var entry = { item, next: null };
      var tail = this.tail;
      if (tail) tail.next = entry;
      else this.head = entry;
      this.tail = entry;
    },
    get: function() {
      var entry = this.head;
      if (entry) {
        var next = this.head = entry.next;
        if (next === null) this.tail = null;
        return entry.item;
      }
    }
  };
  queue = Queue;
  return queue;
}
var environmentIsIosPebble;
var hasRequiredEnvironmentIsIosPebble;
function requireEnvironmentIsIosPebble() {
  if (hasRequiredEnvironmentIsIosPebble) return environmentIsIosPebble;
  hasRequiredEnvironmentIsIosPebble = 1;
  var userAgent2 = requireEnvironmentUserAgent();
  environmentIsIosPebble = /ipad|iphone|ipod/i.test(userAgent2) && typeof Pebble != "undefined";
  return environmentIsIosPebble;
}
var environmentIsWebosWebkit;
var hasRequiredEnvironmentIsWebosWebkit;
function requireEnvironmentIsWebosWebkit() {
  if (hasRequiredEnvironmentIsWebosWebkit) return environmentIsWebosWebkit;
  hasRequiredEnvironmentIsWebosWebkit = 1;
  var userAgent2 = requireEnvironmentUserAgent();
  environmentIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent2);
  return environmentIsWebosWebkit;
}
var microtask_1;
var hasRequiredMicrotask;
function requireMicrotask() {
  if (hasRequiredMicrotask) return microtask_1;
  hasRequiredMicrotask = 1;
  var globalThis2 = requireGlobalThis();
  var safeGetBuiltIn2 = requireSafeGetBuiltIn();
  var bind = requireFunctionBindContext();
  var macrotask = requireTask().set;
  var Queue = requireQueue();
  var IS_IOS = requireEnvironmentIsIos();
  var IS_IOS_PEBBLE = requireEnvironmentIsIosPebble();
  var IS_WEBOS_WEBKIT = requireEnvironmentIsWebosWebkit();
  var IS_NODE = requireEnvironmentIsNode();
  var MutationObserver2 = globalThis2.MutationObserver || globalThis2.WebKitMutationObserver;
  var document2 = globalThis2.document;
  var process2 = globalThis2.process;
  var Promise2 = globalThis2.Promise;
  var microtask = safeGetBuiltIn2("queueMicrotask");
  var notify, toggle, node, promise, then;
  if (!microtask) {
    var queue2 = new Queue();
    var flush = function() {
      var parent, fn;
      if (IS_NODE && (parent = process2.domain)) parent.exit();
      while (fn = queue2.get()) try {
        fn();
      } catch (error) {
        if (queue2.head) notify();
        throw error;
      }
      if (parent) parent.enter();
    };
    if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver2 && document2) {
      toggle = true;
      node = document2.createTextNode("");
      new MutationObserver2(flush).observe(node, { characterData: true });
      notify = function() {
        node.data = toggle = !toggle;
      };
    } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
      promise = Promise2.resolve(void 0);
      promise.constructor = Promise2;
      then = bind(promise.then, promise);
      notify = function() {
        then(flush);
      };
    } else if (IS_NODE) {
      notify = function() {
        process2.nextTick(flush);
      };
    } else {
      macrotask = bind(macrotask, globalThis2);
      notify = function() {
        macrotask(flush);
      };
    }
    microtask = function(fn) {
      if (!queue2.head) notify();
      queue2.add(fn);
    };
  }
  microtask_1 = microtask;
  return microtask_1;
}
var hostReportErrors;
var hasRequiredHostReportErrors;
function requireHostReportErrors() {
  if (hasRequiredHostReportErrors) return hostReportErrors;
  hasRequiredHostReportErrors = 1;
  hostReportErrors = function(a2, b) {
    try {
      arguments.length === 1 ? console.error(a2) : console.error(a2, b);
    } catch (error) {
    }
  };
  return hostReportErrors;
}
var perform;
var hasRequiredPerform;
function requirePerform() {
  if (hasRequiredPerform) return perform;
  hasRequiredPerform = 1;
  perform = function(exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };
  return perform;
}
var promiseNativeConstructor;
var hasRequiredPromiseNativeConstructor;
function requirePromiseNativeConstructor() {
  if (hasRequiredPromiseNativeConstructor) return promiseNativeConstructor;
  hasRequiredPromiseNativeConstructor = 1;
  var globalThis2 = requireGlobalThis();
  promiseNativeConstructor = globalThis2.Promise;
  return promiseNativeConstructor;
}
var promiseConstructorDetection;
var hasRequiredPromiseConstructorDetection;
function requirePromiseConstructorDetection() {
  if (hasRequiredPromiseConstructorDetection) return promiseConstructorDetection;
  hasRequiredPromiseConstructorDetection = 1;
  var globalThis2 = requireGlobalThis();
  var NativePromiseConstructor = requirePromiseNativeConstructor();
  var isCallable2 = requireIsCallable();
  var isForced = requireIsForced();
  var inspectSource2 = requireInspectSource();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var ENVIRONMENT = requireEnvironment();
  var IS_PURE = requireIsPure();
  var V8_VERSION = requireEnvironmentV8Version();
  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  var SPECIES = wellKnownSymbol2("species");
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT = isCallable2(globalThis2.PromiseRejectionEvent);
  var FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", function() {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource2(NativePromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
    if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"])) return true;
    if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
      var promise = new NativePromiseConstructor(function(resolve) {
        resolve(1);
      });
      var FakePromise = function(exec) {
        exec(function() {
        }, function() {
        });
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES] = FakePromise;
      SUBCLASSING = promise.then(function() {
      }) instanceof FakePromise;
      if (!SUBCLASSING) return true;
    }
    return !GLOBAL_CORE_JS_PROMISE && (ENVIRONMENT === "BROWSER" || ENVIRONMENT === "DENO") && !NATIVE_PROMISE_REJECTION_EVENT;
  });
  promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
    SUBCLASSING
  };
  return promiseConstructorDetection;
}
var newPromiseCapability = {};
var hasRequiredNewPromiseCapability;
function requireNewPromiseCapability() {
  if (hasRequiredNewPromiseCapability) return newPromiseCapability;
  hasRequiredNewPromiseCapability = 1;
  var aCallable2 = requireACallable();
  var $TypeError = TypeError;
  var PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
      if (resolve !== void 0 || reject !== void 0) throw new $TypeError("Bad Promise constructor");
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable2(resolve);
    this.reject = aCallable2(reject);
  };
  newPromiseCapability.f = function(C) {
    return new PromiseCapability(C);
  };
  return newPromiseCapability;
}
var hasRequiredEs_promise_constructor;
function requireEs_promise_constructor() {
  if (hasRequiredEs_promise_constructor) return es_promise_constructor;
  hasRequiredEs_promise_constructor = 1;
  var $ = require_export();
  var IS_PURE = requireIsPure();
  var IS_NODE = requireEnvironmentIsNode();
  var globalThis2 = requireGlobalThis();
  var call2 = requireFunctionCall();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var setPrototypeOf2 = requireObjectSetPrototypeOf();
  var setToStringTag2 = requireSetToStringTag();
  var setSpecies2 = requireSetSpecies();
  var aCallable2 = requireACallable();
  var isCallable2 = requireIsCallable();
  var isObject2 = requireIsObject();
  var anInstance2 = requireAnInstance();
  var speciesConstructor2 = requireSpeciesConstructor();
  var task2 = requireTask().set;
  var microtask = requireMicrotask();
  var hostReportErrors2 = requireHostReportErrors();
  var perform2 = requirePerform();
  var Queue = requireQueue();
  var InternalStateModule = requireInternalState();
  var NativePromiseConstructor = requirePromiseNativeConstructor();
  var PromiseConstructorDetection = requirePromiseConstructorDetection();
  var newPromiseCapabilityModule = requireNewPromiseCapability();
  var PROMISE = "Promise";
  var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
  var setInternalState = InternalStateModule.set;
  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  var PromiseConstructor = NativePromiseConstructor;
  var PromisePrototype = NativePromisePrototype;
  var TypeError2 = globalThis2.TypeError;
  var document2 = globalThis2.document;
  var process2 = globalThis2.process;
  var newPromiseCapability2 = newPromiseCapabilityModule.f;
  var newGenericPromiseCapability = newPromiseCapability2;
  var DISPATCH_EVENT = !!(document2 && document2.createEvent && globalThis2.dispatchEvent);
  var UNHANDLED_REJECTION = "unhandledrejection";
  var REJECTION_HANDLED = "rejectionhandled";
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var isThenable = function(it) {
    var then;
    return isObject2(it) && isCallable2(then = it.then) ? then : false;
  };
  var callReaction = function(reaction, state) {
    var value2 = state.value;
    var ok = state.state === FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }
        if (handler === true) result = value2;
        else {
          if (domain) domain.enter();
          result = handler(value2);
          if (domain) {
            domain.exit();
            exited = true;
          }
        }
        if (result === reaction.promise) {
          reject(new TypeError2("Promise-chain cycle"));
        } else if (then = isThenable(result)) {
          call2(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value2);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };
  var notify = function(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function() {
      var reactions = state.reactions;
      var reaction;
      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };
  var dispatchEvent = function(name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document2.createEvent("Event");
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      globalThis2.dispatchEvent(event);
    } else event = { promise, reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = globalThis2["on" + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors2("Unhandled promise rejection", reason);
  };
  var onUnhandled = function(state) {
    call2(task2, globalThis2, function() {
      var promise = state.facade;
      var value2 = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform2(function() {
          if (IS_NODE) {
            process2.emit("unhandledRejection", value2, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value2);
        });
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };
  var isUnhandled = function(state) {
    return state.rejection !== HANDLED && !state.parent;
  };
  var onHandleUnhandled = function(state) {
    call2(task2, globalThis2, function() {
      var promise = state.facade;
      if (IS_NODE) {
        process2.emit("rejectionHandled", promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };
  var bind = function(fn, state, unwrap) {
    return function(value2) {
      fn(state, value2, unwrap);
    };
  };
  var internalReject = function(state, value2, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value2;
    state.state = REJECTED;
    notify(state, true);
  };
  var internalResolve = function(state, value2, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value2) throw new TypeError2("Promise can't be resolved itself");
      var then = isThenable(value2);
      if (then) {
        microtask(function() {
          var wrapper = { done: false };
          try {
            call2(
              then,
              value2,
              bind(internalResolve, wrapper, state),
              bind(internalReject, wrapper, state)
            );
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value2;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({ done: false }, error, state);
    }
  };
  if (FORCED_PROMISE_CONSTRUCTOR) {
    PromiseConstructor = function Promise2(executor) {
      anInstance2(this, PromisePrototype);
      aCallable2(executor);
      call2(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };
    PromisePrototype = PromiseConstructor.prototype;
    Internal = function Promise2(executor) {
      setInternalState(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: null
      });
    };
    Internal.prototype = defineBuiltIn2(PromisePrototype, "then", function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability2(speciesConstructor2(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable2(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable2(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process2.domain : void 0;
      if (state.state === PENDING) state.reactions.add(reaction);
      else microtask(function() {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });
    OwnPromiseCapability = function() {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability2 = function(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (!IS_PURE && isCallable2(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;
      if (!NATIVE_PROMISE_SUBCLASSING) {
        defineBuiltIn2(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function(resolve, reject) {
            call2(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
        }, { unsafe: true });
      }
      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
      }
      if (setPrototypeOf2) {
        setPrototypeOf2(NativePromisePrototype, PromisePrototype);
      }
    }
  }
  $({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
    Promise: PromiseConstructor
  });
  setToStringTag2(PromiseConstructor, PROMISE, false, true);
  setSpecies2(PROMISE);
  return es_promise_constructor;
}
var es_promise_all = {};
var iterators;
var hasRequiredIterators;
function requireIterators() {
  if (hasRequiredIterators) return iterators;
  hasRequiredIterators = 1;
  iterators = {};
  return iterators;
}
var isArrayIteratorMethod;
var hasRequiredIsArrayIteratorMethod;
function requireIsArrayIteratorMethod() {
  if (hasRequiredIsArrayIteratorMethod) return isArrayIteratorMethod;
  hasRequiredIsArrayIteratorMethod = 1;
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var Iterators = requireIterators();
  var ITERATOR = wellKnownSymbol2("iterator");
  var ArrayPrototype = Array.prototype;
  isArrayIteratorMethod = function(it) {
    return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  };
  return isArrayIteratorMethod;
}
var getIteratorMethod;
var hasRequiredGetIteratorMethod;
function requireGetIteratorMethod() {
  if (hasRequiredGetIteratorMethod) return getIteratorMethod;
  hasRequiredGetIteratorMethod = 1;
  var classof2 = requireClassof();
  var getMethod2 = requireGetMethod();
  var isNullOrUndefined2 = requireIsNullOrUndefined();
  var Iterators = requireIterators();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var ITERATOR = wellKnownSymbol2("iterator");
  getIteratorMethod = function(it) {
    if (!isNullOrUndefined2(it)) return getMethod2(it, ITERATOR) || getMethod2(it, "@@iterator") || Iterators[classof2(it)];
  };
  return getIteratorMethod;
}
var getIterator;
var hasRequiredGetIterator;
function requireGetIterator() {
  if (hasRequiredGetIterator) return getIterator;
  hasRequiredGetIterator = 1;
  var call2 = requireFunctionCall();
  var aCallable2 = requireACallable();
  var anObject2 = requireAnObject();
  var tryToString2 = requireTryToString();
  var getIteratorMethod2 = requireGetIteratorMethod();
  var $TypeError = TypeError;
  getIterator = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod2(argument) : usingIterator;
    if (aCallable2(iteratorMethod)) return anObject2(call2(iteratorMethod, argument));
    throw new $TypeError(tryToString2(argument) + " is not iterable");
  };
  return getIterator;
}
var iteratorClose;
var hasRequiredIteratorClose;
function requireIteratorClose() {
  if (hasRequiredIteratorClose) return iteratorClose;
  hasRequiredIteratorClose = 1;
  var call2 = requireFunctionCall();
  var anObject2 = requireAnObject();
  var getMethod2 = requireGetMethod();
  iteratorClose = function(iterator, kind, value2) {
    var innerResult, innerError;
    anObject2(iterator);
    try {
      innerResult = getMethod2(iterator, "return");
      if (!innerResult) {
        if (kind === "throw") throw value2;
        return value2;
      }
      innerResult = call2(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === "throw") throw value2;
    if (innerError) throw innerResult;
    anObject2(innerResult);
    return value2;
  };
  return iteratorClose;
}
var iterate;
var hasRequiredIterate;
function requireIterate() {
  if (hasRequiredIterate) return iterate;
  hasRequiredIterate = 1;
  var bind = requireFunctionBindContext();
  var call2 = requireFunctionCall();
  var anObject2 = requireAnObject();
  var tryToString2 = requireTryToString();
  var isArrayIteratorMethod2 = requireIsArrayIteratorMethod();
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var getIterator2 = requireGetIterator();
  var getIteratorMethod2 = requireGetIteratorMethod();
  var iteratorClose2 = requireIteratorClose();
  var $TypeError = TypeError;
  var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var ResultPrototype = Result.prototype;
  iterate = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
      if (iterator) iteratorClose2(iterator, "normal", condition);
      return new Result(true, condition);
    };
    var callFn = function(value2) {
      if (AS_ENTRIES) {
        anObject2(value2);
        return INTERRUPTED ? fn(value2[0], value2[1], stop) : fn(value2[0], value2[1]);
      }
      return INTERRUPTED ? fn(value2, stop) : fn(value2);
    };
    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod2(iterable);
      if (!iterFn) throw new $TypeError(tryToString2(iterable) + " is not iterable");
      if (isArrayIteratorMethod2(iterFn)) {
        for (index = 0, length = lengthOfArrayLike2(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf(ResultPrototype, result)) return result;
        }
        return new Result(false);
      }
      iterator = getIterator2(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call2(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose2(iterator, "throw", error);
      }
      if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
  };
  return iterate;
}
var checkCorrectnessOfIteration;
var hasRequiredCheckCorrectnessOfIteration;
function requireCheckCorrectnessOfIteration() {
  if (hasRequiredCheckCorrectnessOfIteration) return checkCorrectnessOfIteration;
  hasRequiredCheckCorrectnessOfIteration = 1;
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var ITERATOR = wellKnownSymbol2("iterator");
  var SAFE_CLOSING = false;
  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function() {
        return { done: !!called++ };
      },
      "return": function() {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR] = function() {
      return this;
    };
    Array.from(iteratorWithReturn, function() {
      throw 2;
    });
  } catch (error) {
  }
  checkCorrectnessOfIteration = function(exec, SKIP_CLOSING) {
    try {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    } catch (error) {
      return false;
    }
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR] = function() {
        return {
          next: function() {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) {
    }
    return ITERATION_SUPPORT;
  };
  return checkCorrectnessOfIteration;
}
var promiseStaticsIncorrectIteration;
var hasRequiredPromiseStaticsIncorrectIteration;
function requirePromiseStaticsIncorrectIteration() {
  if (hasRequiredPromiseStaticsIncorrectIteration) return promiseStaticsIncorrectIteration;
  hasRequiredPromiseStaticsIncorrectIteration = 1;
  var NativePromiseConstructor = requirePromiseNativeConstructor();
  var checkCorrectnessOfIteration2 = requireCheckCorrectnessOfIteration();
  var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;
  promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration2(function(iterable) {
    NativePromiseConstructor.all(iterable).then(void 0, function() {
    });
  });
  return promiseStaticsIncorrectIteration;
}
var hasRequiredEs_promise_all;
function requireEs_promise_all() {
  if (hasRequiredEs_promise_all) return es_promise_all;
  hasRequiredEs_promise_all = 1;
  var $ = require_export();
  var call2 = requireFunctionCall();
  var aCallable2 = requireACallable();
  var newPromiseCapabilityModule = requireNewPromiseCapability();
  var perform2 = requirePerform();
  var iterate2 = requireIterate();
  var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();
  $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform2(function() {
        var $promiseResolve = aCallable2(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate2(iterable, function(promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call2($promiseResolve, C, promise).then(function(value2) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value2;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });
  return es_promise_all;
}
var es_promise_catch = {};
var hasRequiredEs_promise_catch;
function requireEs_promise_catch() {
  if (hasRequiredEs_promise_catch) return es_promise_catch;
  hasRequiredEs_promise_catch = 1;
  var $ = require_export();
  var IS_PURE = requireIsPure();
  var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;
  var NativePromiseConstructor = requirePromiseNativeConstructor();
  var getBuiltIn2 = requireGetBuiltIn();
  var isCallable2 = requireIsCallable();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
  $({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
    "catch": function(onRejected) {
      return this.then(void 0, onRejected);
    }
  });
  if (!IS_PURE && isCallable2(NativePromiseConstructor)) {
    var method = getBuiltIn2("Promise").prototype["catch"];
    if (NativePromisePrototype["catch"] !== method) {
      defineBuiltIn2(NativePromisePrototype, "catch", method, { unsafe: true });
    }
  }
  return es_promise_catch;
}
var es_promise_race = {};
var hasRequiredEs_promise_race;
function requireEs_promise_race() {
  if (hasRequiredEs_promise_race) return es_promise_race;
  hasRequiredEs_promise_race = 1;
  var $ = require_export();
  var call2 = requireFunctionCall();
  var aCallable2 = requireACallable();
  var newPromiseCapabilityModule = requireNewPromiseCapability();
  var perform2 = requirePerform();
  var iterate2 = requireIterate();
  var PROMISE_STATICS_INCORRECT_ITERATION = requirePromiseStaticsIncorrectIteration();
  $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule.f(C);
      var reject = capability.reject;
      var result = perform2(function() {
        var $promiseResolve = aCallable2(C.resolve);
        iterate2(iterable, function(promise) {
          call2($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });
  return es_promise_race;
}
var es_promise_reject = {};
var hasRequiredEs_promise_reject;
function requireEs_promise_reject() {
  if (hasRequiredEs_promise_reject) return es_promise_reject;
  hasRequiredEs_promise_reject = 1;
  var $ = require_export();
  var newPromiseCapabilityModule = requireNewPromiseCapability();
  var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;
  $({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
    reject: function reject(r2) {
      var capability = newPromiseCapabilityModule.f(this);
      var capabilityReject = capability.reject;
      capabilityReject(r2);
      return capability.promise;
    }
  });
  return es_promise_reject;
}
var es_promise_resolve = {};
var promiseResolve;
var hasRequiredPromiseResolve;
function requirePromiseResolve() {
  if (hasRequiredPromiseResolve) return promiseResolve;
  hasRequiredPromiseResolve = 1;
  var anObject2 = requireAnObject();
  var isObject2 = requireIsObject();
  var newPromiseCapability2 = requireNewPromiseCapability();
  promiseResolve = function(C, x) {
    anObject2(C);
    if (isObject2(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability2.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };
  return promiseResolve;
}
var hasRequiredEs_promise_resolve;
function requireEs_promise_resolve() {
  if (hasRequiredEs_promise_resolve) return es_promise_resolve;
  hasRequiredEs_promise_resolve = 1;
  var $ = require_export();
  var getBuiltIn2 = requireGetBuiltIn();
  var IS_PURE = requireIsPure();
  var NativePromiseConstructor = requirePromiseNativeConstructor();
  var FORCED_PROMISE_CONSTRUCTOR = requirePromiseConstructorDetection().CONSTRUCTOR;
  var promiseResolve2 = requirePromiseResolve();
  var PromiseConstructorWrapper = getBuiltIn2("Promise");
  var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
  $({ target: "Promise", stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
    resolve: function resolve(x) {
      return promiseResolve2(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
    }
  });
  return es_promise_resolve;
}
var hasRequiredEs_promise;
function requireEs_promise() {
  if (hasRequiredEs_promise) return es_promise;
  hasRequiredEs_promise = 1;
  requireEs_promise_constructor();
  requireEs_promise_all();
  requireEs_promise_catch();
  requireEs_promise_race();
  requireEs_promise_reject();
  requireEs_promise_resolve();
  return es_promise;
}
requireEs_promise();
function asyncGeneratorStep(n2, t2, e2, r2, o2, a2, c2) {
  try {
    var i2 = n2[a2](c2), u2 = i2.value;
  } catch (n3) {
    return void e2(n3);
  }
  i2.done ? t2(u2) : Promise.resolve(u2).then(r2, o2);
}
function _asyncToGenerator(n2) {
  return function() {
    var t2 = this, e2 = arguments;
    return new Promise(function(r2, o2) {
      var a2 = n2.apply(t2, e2);
      function _next(n3) {
        asyncGeneratorStep(a2, r2, o2, _next, _throw, "next", n3);
      }
      function _throw(n3) {
        asyncGeneratorStep(a2, r2, o2, _next, _throw, "throw", n3);
      }
      _next(void 0);
    });
  };
}
var es_string_match = {};
var es_regexp_exec = {};
var toString;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString;
  hasRequiredToString = 1;
  var classof2 = requireClassof();
  var $String = String;
  toString = function(argument) {
    if (classof2(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return $String(argument);
  };
  return toString;
}
var regexpFlags;
var hasRequiredRegexpFlags;
function requireRegexpFlags() {
  if (hasRequiredRegexpFlags) return regexpFlags;
  hasRequiredRegexpFlags = 1;
  var anObject2 = requireAnObject();
  regexpFlags = function() {
    var that = anObject2(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
  };
  return regexpFlags;
}
var regexpStickyHelpers;
var hasRequiredRegexpStickyHelpers;
function requireRegexpStickyHelpers() {
  if (hasRequiredRegexpStickyHelpers) return regexpStickyHelpers;
  hasRequiredRegexpStickyHelpers = 1;
  var fails2 = requireFails();
  var globalThis2 = requireGlobalThis();
  var $RegExp = globalThis2.RegExp;
  var UNSUPPORTED_Y = fails2(function() {
    var re2 = $RegExp("a", "y");
    re2.lastIndex = 2;
    return re2.exec("abcd") !== null;
  });
  var MISSED_STICKY = UNSUPPORTED_Y || fails2(function() {
    return !$RegExp("a", "y").sticky;
  });
  var BROKEN_CARET = UNSUPPORTED_Y || fails2(function() {
    var re2 = $RegExp("^r", "gy");
    re2.lastIndex = 2;
    return re2.exec("str") !== null;
  });
  regexpStickyHelpers = {
    BROKEN_CARET,
    MISSED_STICKY,
    UNSUPPORTED_Y
  };
  return regexpStickyHelpers;
}
var objectDefineProperties = {};
var objectKeys;
var hasRequiredObjectKeys;
function requireObjectKeys() {
  if (hasRequiredObjectKeys) return objectKeys;
  hasRequiredObjectKeys = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys2 = requireEnumBugKeys();
  objectKeys = Object.keys || function keys2(O2) {
    return internalObjectKeys(O2, enumBugKeys2);
  };
  return objectKeys;
}
var hasRequiredObjectDefineProperties;
function requireObjectDefineProperties() {
  if (hasRequiredObjectDefineProperties) return objectDefineProperties;
  hasRequiredObjectDefineProperties = 1;
  var DESCRIPTORS = requireDescriptors();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var definePropertyModule = requireObjectDefineProperty();
  var anObject2 = requireAnObject();
  var toIndexedObject2 = requireToIndexedObject();
  var objectKeys2 = requireObjectKeys();
  objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O2, Properties) {
    anObject2(O2);
    var props = toIndexedObject2(Properties);
    var keys2 = objectKeys2(Properties);
    var length = keys2.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O2, key = keys2[index++], props[key]);
    return O2;
  };
  return objectDefineProperties;
}
var objectCreate;
var hasRequiredObjectCreate;
function requireObjectCreate() {
  if (hasRequiredObjectCreate) return objectCreate;
  hasRequiredObjectCreate = 1;
  var anObject2 = requireAnObject();
  var definePropertiesModule = requireObjectDefineProperties();
  var enumBugKeys2 = requireEnumBugKeys();
  var hiddenKeys2 = requireHiddenKeys();
  var html2 = requireHtml();
  var documentCreateElement2 = requireDocumentCreateElement();
  var sharedKey2 = requireSharedKey();
  var GT = ">";
  var LT = "<";
  var PROTOTYPE = "prototype";
  var SCRIPT = "script";
  var IE_PROTO = sharedKey2("IE_PROTO");
  var EmptyConstructor = function() {
  };
  var scriptTag = function(content) {
    return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
  };
  var NullProtoObjectViaActiveX = function(activeXDocument2) {
    activeXDocument2.write(scriptTag(""));
    activeXDocument2.close();
    var temp = activeXDocument2.parentWindow.Object;
    activeXDocument2 = null;
    return temp;
  };
  var NullProtoObjectViaIFrame = function() {
    var iframe = documentCreateElement2("iframe");
    var JS = "java" + SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    html2.appendChild(iframe);
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
  };
  var activeXDocument;
  var NullProtoObject = function() {
    try {
      activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {
    }
    NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
    var length = enumBugKeys2.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys2[length]];
    return NullProtoObject();
  };
  hiddenKeys2[IE_PROTO] = true;
  objectCreate = Object.create || function create2(O2, Properties) {
    var result;
    if (O2 !== null) {
      EmptyConstructor[PROTOTYPE] = anObject2(O2);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      result[IE_PROTO] = O2;
    } else result = NullProtoObject();
    return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
  };
  return objectCreate;
}
var regexpUnsupportedDotAll;
var hasRequiredRegexpUnsupportedDotAll;
function requireRegexpUnsupportedDotAll() {
  if (hasRequiredRegexpUnsupportedDotAll) return regexpUnsupportedDotAll;
  hasRequiredRegexpUnsupportedDotAll = 1;
  var fails2 = requireFails();
  var globalThis2 = requireGlobalThis();
  var $RegExp = globalThis2.RegExp;
  regexpUnsupportedDotAll = fails2(function() {
    var re2 = $RegExp(".", "s");
    return !(re2.dotAll && re2.test("\n") && re2.flags === "s");
  });
  return regexpUnsupportedDotAll;
}
var regexpUnsupportedNcg;
var hasRequiredRegexpUnsupportedNcg;
function requireRegexpUnsupportedNcg() {
  if (hasRequiredRegexpUnsupportedNcg) return regexpUnsupportedNcg;
  hasRequiredRegexpUnsupportedNcg = 1;
  var fails2 = requireFails();
  var globalThis2 = requireGlobalThis();
  var $RegExp = globalThis2.RegExp;
  regexpUnsupportedNcg = fails2(function() {
    var re2 = $RegExp("(?<a>b)", "g");
    return re2.exec("b").groups.a !== "b" || "b".replace(re2, "$<a>c") !== "bc";
  });
  return regexpUnsupportedNcg;
}
var regexpExec;
var hasRequiredRegexpExec;
function requireRegexpExec() {
  if (hasRequiredRegexpExec) return regexpExec;
  hasRequiredRegexpExec = 1;
  var call2 = requireFunctionCall();
  var uncurryThis = requireFunctionUncurryThis();
  var toString2 = requireToString();
  var regexpFlags2 = requireRegexpFlags();
  var stickyHelpers = requireRegexpStickyHelpers();
  var shared2 = requireShared();
  var create2 = requireObjectCreate();
  var getInternalState = requireInternalState().get;
  var UNSUPPORTED_DOT_ALL = requireRegexpUnsupportedDotAll();
  var UNSUPPORTED_NCG = requireRegexpUnsupportedNcg();
  var nativeReplace = shared2("native-string-replace", String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt = uncurryThis("".charAt);
  var indexOf = uncurryThis("".indexOf);
  var replace2 = uncurryThis("".replace);
  var stringSlice = uncurryThis("".slice);
  var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/;
    var re2 = /b*/g;
    call2(nativeExec, re1, "a");
    call2(nativeExec, re2, "a");
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
  var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
  if (PATCH) {
    patchedExec = function exec(string) {
      var re2 = this;
      var state = getInternalState(re2);
      var str = toString2(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i2, object, group;
      if (raw) {
        raw.lastIndex = re2.lastIndex;
        result = call2(patchedExec, raw, str);
        re2.lastIndex = raw.lastIndex;
        return result;
      }
      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re2.sticky;
      var flags = call2(regexpFlags2, re2);
      var source = re2.source;
      var charsAdded = 0;
      var strCopy = str;
      if (sticky) {
        flags = replace2(flags, "y", "");
        if (indexOf(flags, "g") === -1) {
          flags += "g";
        }
        strCopy = stringSlice(str, re2.lastIndex);
        if (re2.lastIndex > 0 && (!re2.multiline || re2.multiline && charAt(str, re2.lastIndex - 1) !== "\n")) {
          source = "(?: " + source + ")";
          strCopy = " " + strCopy;
          charsAdded++;
        }
        reCopy = new RegExp("^(?:" + source + ")", flags);
      }
      if (NPCG_INCLUDED) {
        reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re2.lastIndex;
      match = call2(nativeExec, sticky ? reCopy : re2, strCopy);
      if (sticky) {
        if (match) {
          match.input = stringSlice(match.input, charsAdded);
          match[0] = stringSlice(match[0], charsAdded);
          match.index = re2.lastIndex;
          re2.lastIndex += match[0].length;
        } else re2.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re2.lastIndex = re2.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        call2(nativeReplace, match[0], reCopy, function() {
          for (i2 = 1; i2 < arguments.length - 2; i2++) {
            if (arguments[i2] === void 0) match[i2] = void 0;
          }
        });
      }
      if (match && groups) {
        match.groups = object = create2(null);
        for (i2 = 0; i2 < groups.length; i2++) {
          group = groups[i2];
          object[group[0]] = match[group[1]];
        }
      }
      return match;
    };
  }
  regexpExec = patchedExec;
  return regexpExec;
}
var hasRequiredEs_regexp_exec;
function requireEs_regexp_exec() {
  if (hasRequiredEs_regexp_exec) return es_regexp_exec;
  hasRequiredEs_regexp_exec = 1;
  var $ = require_export();
  var exec = requireRegexpExec();
  $({ target: "RegExp", proto: true, forced: /./.exec !== exec }, {
    exec
  });
  return es_regexp_exec;
}
var fixRegexpWellKnownSymbolLogic;
var hasRequiredFixRegexpWellKnownSymbolLogic;
function requireFixRegexpWellKnownSymbolLogic() {
  if (hasRequiredFixRegexpWellKnownSymbolLogic) return fixRegexpWellKnownSymbolLogic;
  hasRequiredFixRegexpWellKnownSymbolLogic = 1;
  requireEs_regexp_exec();
  var call2 = requireFunctionCall();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var regexpExec2 = requireRegexpExec();
  var fails2 = requireFails();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var SPECIES = wellKnownSymbol2("species");
  var RegExpPrototype = RegExp.prototype;
  fixRegexpWellKnownSymbolLogic = function(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol2(KEY);
    var DELEGATES_TO_SYMBOL = !fails2(function() {
      var O2 = {};
      O2[SYMBOL] = function() {
        return 7;
      };
      return ""[KEY](O2) !== 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails2(function() {
      var execCalled = false;
      var re2 = /a/;
      if (KEY === "split") {
        re2 = {};
        re2.constructor = {};
        re2.constructor[SPECIES] = function() {
          return re2;
        };
        re2.flags = "";
        re2[SYMBOL] = /./[SYMBOL];
      }
      re2.exec = function() {
        execCalled = true;
        return null;
      };
      re2[SYMBOL]("");
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;
        if ($exec === regexpExec2 || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            return { done: true, value: call2(nativeRegExpMethod, regexp, str, arg2) };
          }
          return { done: true, value: call2(nativeMethod, str, regexp, arg2) };
        }
        return { done: false };
      });
      defineBuiltIn2(String.prototype, KEY, methods[0]);
      defineBuiltIn2(RegExpPrototype, SYMBOL, methods[1]);
    }
    if (SHAM) createNonEnumerableProperty2(RegExpPrototype[SYMBOL], "sham", true);
  };
  return fixRegexpWellKnownSymbolLogic;
}
var stringMultibyte;
var hasRequiredStringMultibyte;
function requireStringMultibyte() {
  if (hasRequiredStringMultibyte) return stringMultibyte;
  hasRequiredStringMultibyte = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var toString2 = requireToString();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var charAt = uncurryThis("".charAt);
  var charCodeAt = uncurryThis("".charCodeAt);
  var stringSlice = uncurryThis("".slice);
  var createMethod = function(CONVERT_TO_STRING) {
    return function($this, pos) {
      var S2 = toString2(requireObjectCoercible2($this));
      var position = toIntegerOrInfinity2(pos);
      var size = S2.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
      first = charCodeAt(S2, position);
      return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S2, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S2, position) : first : CONVERT_TO_STRING ? stringSlice(S2, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
    };
  };
  stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };
  return stringMultibyte;
}
var advanceStringIndex;
var hasRequiredAdvanceStringIndex;
function requireAdvanceStringIndex() {
  if (hasRequiredAdvanceStringIndex) return advanceStringIndex;
  hasRequiredAdvanceStringIndex = 1;
  var charAt = requireStringMultibyte().charAt;
  advanceStringIndex = function(S2, index, unicode) {
    return index + (unicode ? charAt(S2, index).length : 1);
  };
  return advanceStringIndex;
}
var regexpExecAbstract;
var hasRequiredRegexpExecAbstract;
function requireRegexpExecAbstract() {
  if (hasRequiredRegexpExecAbstract) return regexpExecAbstract;
  hasRequiredRegexpExecAbstract = 1;
  var call2 = requireFunctionCall();
  var anObject2 = requireAnObject();
  var isCallable2 = requireIsCallable();
  var classof2 = requireClassofRaw();
  var regexpExec2 = requireRegexpExec();
  var $TypeError = TypeError;
  regexpExecAbstract = function(R, S2) {
    var exec = R.exec;
    if (isCallable2(exec)) {
      var result = call2(exec, R, S2);
      if (result !== null) anObject2(result);
      return result;
    }
    if (classof2(R) === "RegExp") return call2(regexpExec2, R, S2);
    throw new $TypeError("RegExp#exec called on incompatible receiver");
  };
  return regexpExecAbstract;
}
var hasRequiredEs_string_match;
function requireEs_string_match() {
  if (hasRequiredEs_string_match) return es_string_match;
  hasRequiredEs_string_match = 1;
  var call2 = requireFunctionCall();
  var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  var anObject2 = requireAnObject();
  var isObject2 = requireIsObject();
  var toLength2 = requireToLength();
  var toString2 = requireToString();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var getMethod2 = requireGetMethod();
  var advanceStringIndex2 = requireAdvanceStringIndex();
  var regExpExec = requireRegexpExecAbstract();
  fixRegExpWellKnownSymbolLogic("match", function(MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O2 = requireObjectCoercible2(this);
        var matcher = isObject2(regexp) ? getMethod2(regexp, MATCH) : void 0;
        return matcher ? call2(matcher, regexp, O2) : new RegExp(regexp)[MATCH](toString2(O2));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function(string) {
        var rx = anObject2(this);
        var S2 = toString2(string);
        var res = maybeCallNative(nativeMatch, rx, S2);
        if (res.done) return res.value;
        if (!rx.global) return regExpExec(rx, S2);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A2 = [];
        var n2 = 0;
        var result;
        while ((result = regExpExec(rx, S2)) !== null) {
          var matchStr = toString2(result[0]);
          A2[n2] = matchStr;
          if (matchStr === "") rx.lastIndex = advanceStringIndex2(S2, toLength2(rx.lastIndex), fullUnicode);
          n2++;
        }
        return n2 === 0 ? null : A2;
      }
    ];
  });
  return es_string_match;
}
requireEs_string_match();
var es_string_replace = {};
var getSubstitution;
var hasRequiredGetSubstitution;
function requireGetSubstitution() {
  if (hasRequiredGetSubstitution) return getSubstitution;
  hasRequiredGetSubstitution = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toObject2 = requireToObject();
  var floor2 = Math.floor;
  var charAt = uncurryThis("".charAt);
  var replace2 = uncurryThis("".replace);
  var stringSlice = uncurryThis("".slice);
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
  getSubstitution = function(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m2 = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== void 0) {
      namedCaptures = toObject2(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace2(replacement, symbols, function(match, ch) {
      var capture;
      switch (charAt(ch, 0)) {
        case "$":
          return "$";
        case "&":
          return matched;
        case "`":
          return stringSlice(str, 0, position);
        case "'":
          return stringSlice(str, tailPos);
        case "<":
          capture = namedCaptures[stringSlice(ch, 1, -1)];
          break;
        default:
          var n2 = +ch;
          if (n2 === 0) return match;
          if (n2 > m2) {
            var f2 = floor2(n2 / 10);
            if (f2 === 0) return match;
            if (f2 <= m2) return captures[f2 - 1] === void 0 ? charAt(ch, 1) : captures[f2 - 1] + charAt(ch, 1);
            return match;
          }
          capture = captures[n2 - 1];
      }
      return capture === void 0 ? "" : capture;
    });
  };
  return getSubstitution;
}
var hasRequiredEs_string_replace;
function requireEs_string_replace() {
  if (hasRequiredEs_string_replace) return es_string_replace;
  hasRequiredEs_string_replace = 1;
  var apply2 = requireFunctionApply();
  var call2 = requireFunctionCall();
  var uncurryThis = requireFunctionUncurryThis();
  var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  var fails2 = requireFails();
  var anObject2 = requireAnObject();
  var isCallable2 = requireIsCallable();
  var isObject2 = requireIsObject();
  var toIntegerOrInfinity2 = requireToIntegerOrInfinity();
  var toLength2 = requireToLength();
  var toString2 = requireToString();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var advanceStringIndex2 = requireAdvanceStringIndex();
  var getMethod2 = requireGetMethod();
  var getSubstitution2 = requireGetSubstitution();
  var regExpExec = requireRegexpExecAbstract();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var REPLACE = wellKnownSymbol2("replace");
  var max2 = Math.max;
  var min2 = Math.min;
  var concat = uncurryThis([].concat);
  var push = uncurryThis([].push);
  var stringIndexOf2 = uncurryThis("".indexOf);
  var stringSlice = uncurryThis("".slice);
  var maybeToString = function(it) {
    return it === void 0 ? it : String(it);
  };
  var REPLACE_KEEPS_$0 = function() {
    return "a".replace(/./, "$0") === "$0";
  }();
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
    if (/./[REPLACE]) {
      return /./[REPLACE]("a", "$0") === "";
    }
    return false;
  }();
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails2(function() {
    var re2 = /./;
    re2.exec = function() {
      var result = [];
      result.groups = { a: "7" };
      return result;
    };
    return "".replace(re2, "$<a>") !== "7";
  });
  fixRegExpWellKnownSymbolLogic("replace", function(_2, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace2(searchValue, replaceValue) {
        var O2 = requireObjectCoercible2(this);
        var replacer = isObject2(searchValue) ? getMethod2(searchValue, REPLACE) : void 0;
        return replacer ? call2(replacer, searchValue, O2, replaceValue) : call2(nativeReplace, toString2(O2), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function(string, replaceValue) {
        var rx = anObject2(this);
        var S2 = toString2(string);
        if (typeof replaceValue == "string" && stringIndexOf2(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf2(replaceValue, "$<") === -1) {
          var res = maybeCallNative(nativeReplace, rx, S2, replaceValue);
          if (res.done) return res.value;
        }
        var functionalReplace = isCallable2(replaceValue);
        if (!functionalReplace) replaceValue = toString2(replaceValue);
        var global2 = rx.global;
        var fullUnicode;
        if (global2) {
          fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        var result;
        while (true) {
          result = regExpExec(rx, S2);
          if (result === null) break;
          push(results, result);
          if (!global2) break;
          var matchStr = toString2(result[0]);
          if (matchStr === "") rx.lastIndex = advanceStringIndex2(S2, toLength2(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = "";
        var nextSourcePosition = 0;
        for (var i2 = 0; i2 < results.length; i2++) {
          result = results[i2];
          var matched = toString2(result[0]);
          var position = max2(min2(toIntegerOrInfinity2(result.index), S2.length), 0);
          var captures = [];
          var replacement;
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S2);
            if (namedCaptures !== void 0) push(replacerArgs, namedCaptures);
            replacement = toString2(apply2(replaceValue, void 0, replacerArgs));
          } else {
            replacement = getSubstitution2(matched, S2, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S2, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice(S2, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
  return es_string_replace;
}
requireEs_string_replace();
var es_string_startsWith = {};
var isRegexp;
var hasRequiredIsRegexp;
function requireIsRegexp() {
  if (hasRequiredIsRegexp) return isRegexp;
  hasRequiredIsRegexp = 1;
  var isObject2 = requireIsObject();
  var classof2 = requireClassofRaw();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var MATCH = wellKnownSymbol2("match");
  isRegexp = function(it) {
    var isRegExp3;
    return isObject2(it) && ((isRegExp3 = it[MATCH]) !== void 0 ? !!isRegExp3 : classof2(it) === "RegExp");
  };
  return isRegexp;
}
var notARegexp;
var hasRequiredNotARegexp;
function requireNotARegexp() {
  if (hasRequiredNotARegexp) return notARegexp;
  hasRequiredNotARegexp = 1;
  var isRegExp3 = requireIsRegexp();
  var $TypeError = TypeError;
  notARegexp = function(it) {
    if (isRegExp3(it)) {
      throw new $TypeError("The method doesn't accept regular expressions");
    }
    return it;
  };
  return notARegexp;
}
var correctIsRegexpLogic;
var hasRequiredCorrectIsRegexpLogic;
function requireCorrectIsRegexpLogic() {
  if (hasRequiredCorrectIsRegexpLogic) return correctIsRegexpLogic;
  hasRequiredCorrectIsRegexpLogic = 1;
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var MATCH = wellKnownSymbol2("match");
  correctIsRegexpLogic = function(METHOD_NAME) {
    var regexp = /./;
    try {
      "/./"[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return "/./"[METHOD_NAME](regexp);
      } catch (error2) {
      }
    }
    return false;
  };
  return correctIsRegexpLogic;
}
var hasRequiredEs_string_startsWith;
function requireEs_string_startsWith() {
  if (hasRequiredEs_string_startsWith) return es_string_startsWith;
  hasRequiredEs_string_startsWith = 1;
  var $ = require_export();
  var uncurryThis = requireFunctionUncurryThisClause();
  var getOwnPropertyDescriptor2 = requireObjectGetOwnPropertyDescriptor().f;
  var toLength2 = requireToLength();
  var toString2 = requireToString();
  var notARegExp = requireNotARegexp();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
  var IS_PURE = requireIsPure();
  var stringSlice = uncurryThis("".slice);
  var min2 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("startsWith");
  var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor2(String.prototype, "startsWith");
    return descriptor && !descriptor.writable;
  }();
  $({ target: "String", proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    startsWith: function startsWith(searchString) {
      var that = toString2(requireObjectCoercible2(this));
      notARegExp(searchString);
      var index = toLength2(min2(arguments.length > 1 ? arguments[1] : void 0, that.length));
      var search = toString2(searchString);
      return stringSlice(that, index, index + search.length) === search;
    }
  });
  return es_string_startsWith;
}
requireEs_string_startsWith();
var addToUnscopables;
var hasRequiredAddToUnscopables;
function requireAddToUnscopables() {
  if (hasRequiredAddToUnscopables) return addToUnscopables;
  hasRequiredAddToUnscopables = 1;
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var create2 = requireObjectCreate();
  var defineProperty2 = requireObjectDefineProperty().f;
  var UNSCOPABLES = wellKnownSymbol2("unscopables");
  var ArrayPrototype = Array.prototype;
  if (ArrayPrototype[UNSCOPABLES] === void 0) {
    defineProperty2(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create2(null)
    });
  }
  addToUnscopables = function(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };
  return addToUnscopables;
}
var correctPrototypeGetter;
var hasRequiredCorrectPrototypeGetter;
function requireCorrectPrototypeGetter() {
  if (hasRequiredCorrectPrototypeGetter) return correctPrototypeGetter;
  hasRequiredCorrectPrototypeGetter = 1;
  var fails2 = requireFails();
  correctPrototypeGetter = !fails2(function() {
    function F() {
    }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  return correctPrototypeGetter;
}
var objectGetPrototypeOf;
var hasRequiredObjectGetPrototypeOf;
function requireObjectGetPrototypeOf() {
  if (hasRequiredObjectGetPrototypeOf) return objectGetPrototypeOf;
  hasRequiredObjectGetPrototypeOf = 1;
  var hasOwn = requireHasOwnProperty();
  var isCallable2 = requireIsCallable();
  var toObject2 = requireToObject();
  var sharedKey2 = requireSharedKey();
  var CORRECT_PROTOTYPE_GETTER = requireCorrectPrototypeGetter();
  var IE_PROTO = sharedKey2("IE_PROTO");
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;
  objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O2) {
    var object = toObject2(O2);
    if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable2(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }
    return object instanceof $Object ? ObjectPrototype : null;
  };
  return objectGetPrototypeOf;
}
var iteratorsCore;
var hasRequiredIteratorsCore;
function requireIteratorsCore() {
  if (hasRequiredIteratorsCore) return iteratorsCore;
  hasRequiredIteratorsCore = 1;
  var fails2 = requireFails();
  var isCallable2 = requireIsCallable();
  var isObject2 = requireIsObject();
  var create2 = requireObjectCreate();
  var getPrototypeOf2 = requireObjectGetPrototypeOf();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var IS_PURE = requireIsPure();
  var ITERATOR = wellKnownSymbol2("iterator");
  var BUGGY_SAFARI_ITERATORS = false;
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
  if ([].keys) {
    arrayIterator = [].keys();
    if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf2(getPrototypeOf2(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
    }
  }
  var NEW_ITERATOR_PROTOTYPE = !isObject2(IteratorPrototype) || fails2(function() {
    var test2 = {};
    return IteratorPrototype[ITERATOR].call(test2) !== test2;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
  else if (IS_PURE) IteratorPrototype = create2(IteratorPrototype);
  if (!isCallable2(IteratorPrototype[ITERATOR])) {
    defineBuiltIn2(IteratorPrototype, ITERATOR, function() {
      return this;
    });
  }
  iteratorsCore = {
    IteratorPrototype,
    BUGGY_SAFARI_ITERATORS
  };
  return iteratorsCore;
}
var iteratorCreateConstructor;
var hasRequiredIteratorCreateConstructor;
function requireIteratorCreateConstructor() {
  if (hasRequiredIteratorCreateConstructor) return iteratorCreateConstructor;
  hasRequiredIteratorCreateConstructor = 1;
  var IteratorPrototype = requireIteratorsCore().IteratorPrototype;
  var create2 = requireObjectCreate();
  var createPropertyDescriptor2 = requireCreatePropertyDescriptor();
  var setToStringTag2 = requireSetToStringTag();
  var Iterators = requireIterators();
  var returnThis = function() {
    return this;
  };
  iteratorCreateConstructor = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + " Iterator";
    IteratorConstructor.prototype = create2(IteratorPrototype, { next: createPropertyDescriptor2(+!ENUMERABLE_NEXT, next) });
    setToStringTag2(IteratorConstructor, TO_STRING_TAG, false, true);
    Iterators[TO_STRING_TAG] = returnThis;
    return IteratorConstructor;
  };
  return iteratorCreateConstructor;
}
var iteratorDefine;
var hasRequiredIteratorDefine;
function requireIteratorDefine() {
  if (hasRequiredIteratorDefine) return iteratorDefine;
  hasRequiredIteratorDefine = 1;
  var $ = require_export();
  var call2 = requireFunctionCall();
  var IS_PURE = requireIsPure();
  var FunctionName = requireFunctionName();
  var isCallable2 = requireIsCallable();
  var createIteratorConstructor = requireIteratorCreateConstructor();
  var getPrototypeOf2 = requireObjectGetPrototypeOf();
  var setPrototypeOf2 = requireObjectSetPrototypeOf();
  var setToStringTag2 = requireSetToStringTag();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var defineBuiltIn2 = requireDefineBuiltIn();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var Iterators = requireIterators();
  var IteratorsCore = requireIteratorsCore();
  var PROPER_FUNCTION_NAME = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR = wellKnownSymbol2("iterator");
  var KEYS = "keys";
  var VALUES = "values";
  var ENTRIES = "entries";
  var returnThis = function() {
    return this;
  };
  iteratorDefine = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS:
          return function keys2() {
            return new IteratorConstructor(this, KIND);
          };
        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };
        case ENTRIES:
          return function entries2() {
            return new IteratorConstructor(this, KIND);
          };
      }
      return function() {
        return new IteratorConstructor(this);
      };
    };
    var TO_STRING_TAG = NAME + " Iterator";
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf2(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (!IS_PURE && getPrototypeOf2(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf2) {
            setPrototypeOf2(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable2(CurrentIteratorPrototype[ITERATOR])) {
            defineBuiltIn2(CurrentIteratorPrototype, ITERATOR, returnThis);
          }
        }
        setToStringTag2(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
      }
    }
    if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty2(IterablePrototype, "name", VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() {
          return call2(nativeIterator, this);
        };
      }
    }
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn2(IterablePrototype, KEY, methods[KEY]);
        }
      }
      else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }
    if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
      defineBuiltIn2(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
    }
    Iterators[NAME] = defaultIterator;
    return methods;
  };
  return iteratorDefine;
}
var createIterResultObject;
var hasRequiredCreateIterResultObject;
function requireCreateIterResultObject() {
  if (hasRequiredCreateIterResultObject) return createIterResultObject;
  hasRequiredCreateIterResultObject = 1;
  createIterResultObject = function(value2, done) {
    return { value: value2, done };
  };
  return createIterResultObject;
}
var es_array_iterator;
var hasRequiredEs_array_iterator;
function requireEs_array_iterator() {
  if (hasRequiredEs_array_iterator) return es_array_iterator;
  hasRequiredEs_array_iterator = 1;
  var toIndexedObject2 = requireToIndexedObject();
  var addToUnscopables2 = requireAddToUnscopables();
  var Iterators = requireIterators();
  var InternalStateModule = requireInternalState();
  var defineProperty2 = requireObjectDefineProperty().f;
  var defineIterator = requireIteratorDefine();
  var createIterResultObject2 = requireCreateIterResultObject();
  var IS_PURE = requireIsPure();
  var DESCRIPTORS = requireDescriptors();
  var ARRAY_ITERATOR = "Array Iterator";
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
  es_array_iterator = defineIterator(Array, "Array", function(iterated, kind) {
    setInternalState(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject2(iterated),
      // target
      index: 0,
      // next index
      kind
      // kind
    });
  }, function() {
    var state = getInternalState(this);
    var target = state.target;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = null;
      return createIterResultObject2(void 0, true);
    }
    switch (state.kind) {
      case "keys":
        return createIterResultObject2(index, false);
      case "values":
        return createIterResultObject2(target[index], false);
    }
    return createIterResultObject2([index, target[index]], false);
  }, "values");
  var values = Iterators.Arguments = Iterators.Array;
  addToUnscopables2("keys");
  addToUnscopables2("values");
  addToUnscopables2("entries");
  if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
    defineProperty2(values, "name", { value: "values" });
  } catch (error) {
  }
  return es_array_iterator;
}
requireEs_array_iterator();
var web_domCollections_iterator = {};
var domIterables;
var hasRequiredDomIterables;
function requireDomIterables() {
  if (hasRequiredDomIterables) return domIterables;
  hasRequiredDomIterables = 1;
  domIterables = {
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
  };
  return domIterables;
}
var domTokenListPrototype;
var hasRequiredDomTokenListPrototype;
function requireDomTokenListPrototype() {
  if (hasRequiredDomTokenListPrototype) return domTokenListPrototype;
  hasRequiredDomTokenListPrototype = 1;
  var documentCreateElement2 = requireDocumentCreateElement();
  var classList = documentCreateElement2("span").classList;
  var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
  domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? void 0 : DOMTokenListPrototype;
  return domTokenListPrototype;
}
var hasRequiredWeb_domCollections_iterator;
function requireWeb_domCollections_iterator() {
  if (hasRequiredWeb_domCollections_iterator) return web_domCollections_iterator;
  hasRequiredWeb_domCollections_iterator = 1;
  var globalThis2 = requireGlobalThis();
  var DOMIterables = requireDomIterables();
  var DOMTokenListPrototype = requireDomTokenListPrototype();
  var ArrayIteratorMethods = requireEs_array_iterator();
  var createNonEnumerableProperty2 = requireCreateNonEnumerableProperty();
  var setToStringTag2 = requireSetToStringTag();
  var wellKnownSymbol2 = requireWellKnownSymbol();
  var ITERATOR = wellKnownSymbol2("iterator");
  var ArrayValues = ArrayIteratorMethods.values;
  var handlePrototype = function(CollectionPrototype, COLLECTION_NAME2) {
    if (CollectionPrototype) {
      if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty2(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
      setToStringTag2(CollectionPrototype, COLLECTION_NAME2, true);
      if (DOMIterables[COLLECTION_NAME2]) for (var METHOD_NAME in ArrayIteratorMethods) {
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };
  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(globalThis2[COLLECTION_NAME] && globalThis2[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }
  handlePrototype(DOMTokenListPrototype, "DOMTokenList");
  return web_domCollections_iterator;
}
requireWeb_domCollections_iterator();
function toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2);
    if ("object" != _typeof(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i2 = toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : i2 + "";
}
function _defineProperty(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
var es_array_reduce = {};
var arrayReduce;
var hasRequiredArrayReduce;
function requireArrayReduce() {
  if (hasRequiredArrayReduce) return arrayReduce;
  hasRequiredArrayReduce = 1;
  var aCallable2 = requireACallable();
  var toObject2 = requireToObject();
  var IndexedObject = requireIndexedObject();
  var lengthOfArrayLike2 = requireLengthOfArrayLike();
  var $TypeError = TypeError;
  var REDUCE_EMPTY = "Reduce of empty array with no initial value";
  var createMethod = function(IS_RIGHT) {
    return function(that, callbackfn, argumentsLength, memo) {
      var O2 = toObject2(that);
      var self2 = IndexedObject(O2);
      var length = lengthOfArrayLike2(O2);
      aCallable2(callbackfn);
      if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
      var index = IS_RIGHT ? length - 1 : 0;
      var i2 = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self2) {
          memo = self2[index];
          index += i2;
          break;
        }
        index += i2;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw new $TypeError(REDUCE_EMPTY);
        }
      }
      for (; IS_RIGHT ? index >= 0 : length > index; index += i2) if (index in self2) {
        memo = callbackfn(memo, self2[index], index, O2);
      }
      return memo;
    };
  };
  arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
  };
  return arrayReduce;
}
var arrayMethodIsStrict;
var hasRequiredArrayMethodIsStrict;
function requireArrayMethodIsStrict() {
  if (hasRequiredArrayMethodIsStrict) return arrayMethodIsStrict;
  hasRequiredArrayMethodIsStrict = 1;
  var fails2 = requireFails();
  arrayMethodIsStrict = function(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails2(function() {
      method.call(null, argument || function() {
        return 1;
      }, 1);
    });
  };
  return arrayMethodIsStrict;
}
var hasRequiredEs_array_reduce;
function requireEs_array_reduce() {
  if (hasRequiredEs_array_reduce) return es_array_reduce;
  hasRequiredEs_array_reduce = 1;
  var $ = require_export();
  var $reduce = requireArrayReduce().left;
  var arrayMethodIsStrict2 = requireArrayMethodIsStrict();
  var CHROME_VERSION = requireEnvironmentV8Version();
  var IS_NODE = requireEnvironmentIsNode();
  var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
  var FORCED = CHROME_BUG || !arrayMethodIsStrict2("reduce");
  $({ target: "Array", proto: true, forced: FORCED }, {
    reduce: function reduce2(callbackfn) {
      var length = arguments.length;
      return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
    }
  });
  return es_array_reduce;
}
requireEs_array_reduce();
var es_string_endsWith = {};
var hasRequiredEs_string_endsWith;
function requireEs_string_endsWith() {
  if (hasRequiredEs_string_endsWith) return es_string_endsWith;
  hasRequiredEs_string_endsWith = 1;
  var $ = require_export();
  var uncurryThis = requireFunctionUncurryThisClause();
  var getOwnPropertyDescriptor2 = requireObjectGetOwnPropertyDescriptor().f;
  var toLength2 = requireToLength();
  var toString2 = requireToString();
  var notARegExp = requireNotARegexp();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
  var IS_PURE = requireIsPure();
  var slice = uncurryThis("".slice);
  var min2 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("endsWith");
  var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function() {
    var descriptor = getOwnPropertyDescriptor2(String.prototype, "endsWith");
    return descriptor && !descriptor.writable;
  }();
  $({ target: "String", proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    endsWith: function endsWith(searchString) {
      var that = toString2(requireObjectCoercible2(this));
      notARegExp(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : void 0;
      var len = that.length;
      var end2 = endPosition === void 0 ? len : min2(toLength2(endPosition), len);
      var search = toString2(searchString);
      return slice(that, end2 - search.length, end2) === search;
    }
  });
  return es_string_endsWith;
}
requireEs_string_endsWith();
var es_string_split = {};
var hasRequiredEs_string_split;
function requireEs_string_split() {
  if (hasRequiredEs_string_split) return es_string_split;
  hasRequiredEs_string_split = 1;
  var call2 = requireFunctionCall();
  var uncurryThis = requireFunctionUncurryThis();
  var fixRegExpWellKnownSymbolLogic = requireFixRegexpWellKnownSymbolLogic();
  var anObject2 = requireAnObject();
  var isObject2 = requireIsObject();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var speciesConstructor2 = requireSpeciesConstructor();
  var advanceStringIndex2 = requireAdvanceStringIndex();
  var toLength2 = requireToLength();
  var toString2 = requireToString();
  var getMethod2 = requireGetMethod();
  var regExpExec = requireRegexpExecAbstract();
  var stickyHelpers = requireRegexpStickyHelpers();
  var fails2 = requireFails();
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 4294967295;
  var min2 = Math.min;
  var push = uncurryThis([].push);
  var stringSlice = uncurryThis("".slice);
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails2(function() {
    var re2 = /(?:)/;
    var originalExec = re2.exec;
    re2.exec = function() {
      return originalExec.apply(this, arguments);
    };
    var result = "ab".split(re2);
    return result.length !== 2 || result[0] !== "a" || result[1] !== "b";
  });
  var BUGGY = "abbc".split(/(b)*/)[1] === "c" || // eslint-disable-next-line regexp/no-empty-group -- required for testing
  "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  ".".split(/()()/).length > 1 || "".split(/.?/).length;
  fixRegExpWellKnownSymbolLogic("split", function(SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit = "0".split(void 0, 0).length ? function(separator, limit) {
      return separator === void 0 && limit === 0 ? [] : call2(nativeSplit, this, separator, limit);
    } : nativeSplit;
    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O2 = requireObjectCoercible2(this);
        var splitter = isObject2(separator) ? getMethod2(separator, SPLIT) : void 0;
        return splitter ? call2(splitter, separator, O2, limit) : call2(internalSplit, toString2(O2), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function(string, limit) {
        var rx = anObject2(this);
        var S2 = toString2(string);
        if (!BUGGY) {
          var res = maybeCallNative(internalSplit, rx, S2, limit, internalSplit !== nativeSplit);
          if (res.done) return res.value;
        }
        var C = speciesConstructor2(rx, RegExp);
        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (UNSUPPORTED_Y ? "g" : "y");
        var splitter = new C(UNSUPPORTED_Y ? "^(?:" + rx.source + ")" : rx, flags);
        var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S2.length === 0) return regExpExec(splitter, S2) === null ? [S2] : [];
        var p2 = 0;
        var q = 0;
        var A2 = [];
        while (q < S2.length) {
          splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
          var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S2, q) : S2);
          var e2;
          if (z === null || (e2 = min2(toLength2(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S2.length)) === p2) {
            q = advanceStringIndex2(S2, q, unicodeMatching);
          } else {
            push(A2, stringSlice(S2, p2, q));
            if (A2.length === lim) return A2;
            for (var i2 = 1; i2 <= z.length - 1; i2++) {
              push(A2, z[i2]);
              if (A2.length === lim) return A2;
            }
            q = p2 = e2;
          }
        }
        push(A2, stringSlice(S2, p2));
        return A2;
      }
    ];
  }, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
  return es_string_split;
}
requireEs_string_split();
var raf = { exports: {} };
var performanceNow$1 = { exports: {} };
var performanceNow = performanceNow$1.exports;
var hasRequiredPerformanceNow;
function requirePerformanceNow() {
  if (hasRequiredPerformanceNow) return performanceNow$1.exports;
  hasRequiredPerformanceNow = 1;
  (function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) {
      performanceNow$1.exports = function() {
        return performance.now();
      };
    } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
      performanceNow$1.exports = function() {
        return (getNanoSeconds() - nodeLoadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function() {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      moduleLoadTime = getNanoSeconds();
      upTime = process.uptime() * 1e9;
      nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
      performanceNow$1.exports = function() {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      performanceNow$1.exports = function() {
        return (/* @__PURE__ */ new Date()).getTime() - loadTime;
      };
      loadTime = (/* @__PURE__ */ new Date()).getTime();
    }
  }).call(performanceNow);
  return performanceNow$1.exports;
}
var hasRequiredRaf;
function requireRaf() {
  if (hasRequiredRaf) return raf.exports;
  hasRequiredRaf = 1;
  var now = requirePerformanceNow(), root2 = typeof window === "undefined" ? commonjsGlobal : window, vendors = ["moz", "webkit"], suffix = "AnimationFrame", raf$1 = root2["request" + suffix], caf = root2["cancel" + suffix] || root2["cancelRequest" + suffix];
  for (var i2 = 0; !raf$1 && i2 < vendors.length; i2++) {
    raf$1 = root2[vendors[i2] + "Request" + suffix];
    caf = root2[vendors[i2] + "Cancel" + suffix] || root2[vendors[i2] + "CancelRequest" + suffix];
  }
  if (!raf$1 || !caf) {
    var last = 0, id = 0, queue2 = [], frameDuration = 1e3 / 60;
    raf$1 = function(callback) {
      if (queue2.length === 0) {
        var _now = now(), next = Math.max(0, frameDuration - (_now - last));
        last = next + _now;
        setTimeout(function() {
          var cp = queue2.slice(0);
          queue2.length = 0;
          for (var i3 = 0; i3 < cp.length; i3++) {
            if (!cp[i3].cancelled) {
              try {
                cp[i3].callback(last);
              } catch (e2) {
                setTimeout(function() {
                  throw e2;
                }, 0);
              }
            }
          }
        }, Math.round(next));
      }
      queue2.push({
        handle: ++id,
        callback,
        cancelled: false
      });
      return id;
    };
    caf = function(handle) {
      for (var i3 = 0; i3 < queue2.length; i3++) {
        if (queue2[i3].handle === handle) {
          queue2[i3].cancelled = true;
        }
      }
    };
  }
  raf.exports = function(fn) {
    return raf$1.call(root2, fn);
  };
  raf.exports.cancel = function() {
    caf.apply(root2, arguments);
  };
  raf.exports.polyfill = function(object) {
    if (!object) {
      object = root2;
    }
    object.requestAnimationFrame = raf$1;
    object.cancelAnimationFrame = caf;
  };
  return raf.exports;
}
var rafExports = requireRaf();
const requestAnimationFrame$1 = /* @__PURE__ */ getDefaultExportFromCjs(rafExports);
var es_string_trim = {};
var whitespaces;
var hasRequiredWhitespaces;
function requireWhitespaces() {
  if (hasRequiredWhitespaces) return whitespaces;
  hasRequiredWhitespaces = 1;
  whitespaces = "	\n\v\f\r                　\u2028\u2029\uFEFF";
  return whitespaces;
}
var stringTrim;
var hasRequiredStringTrim;
function requireStringTrim() {
  if (hasRequiredStringTrim) return stringTrim;
  hasRequiredStringTrim = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var toString2 = requireToString();
  var whitespaces2 = requireWhitespaces();
  var replace2 = uncurryThis("".replace);
  var ltrim = RegExp("^[" + whitespaces2 + "]+");
  var rtrim = RegExp("(^|[^" + whitespaces2 + "])[" + whitespaces2 + "]+$");
  var createMethod = function(TYPE) {
    return function($this) {
      var string = toString2(requireObjectCoercible2($this));
      if (TYPE & 1) string = replace2(string, ltrim, "");
      if (TYPE & 2) string = replace2(string, rtrim, "$1");
      return string;
    };
  };
  stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };
  return stringTrim;
}
var stringTrimForced;
var hasRequiredStringTrimForced;
function requireStringTrimForced() {
  if (hasRequiredStringTrimForced) return stringTrimForced;
  hasRequiredStringTrimForced = 1;
  var PROPER_FUNCTION_NAME = requireFunctionName().PROPER;
  var fails2 = requireFails();
  var whitespaces2 = requireWhitespaces();
  var non = "​᠎";
  stringTrimForced = function(METHOD_NAME) {
    return fails2(function() {
      return !!whitespaces2[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces2[METHOD_NAME].name !== METHOD_NAME;
    });
  };
  return stringTrimForced;
}
var hasRequiredEs_string_trim;
function requireEs_string_trim() {
  if (hasRequiredEs_string_trim) return es_string_trim;
  hasRequiredEs_string_trim = 1;
  var $ = require_export();
  var $trim = requireStringTrim().trim;
  var forcedStringTrimMethod = requireStringTrimForced();
  $({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") }, {
    trim: function trim() {
      return $trim(this);
    }
  });
  return es_string_trim;
}
requireEs_string_trim();
var rgbcolor;
var hasRequiredRgbcolor;
function requireRgbcolor() {
  if (hasRequiredRgbcolor) return rgbcolor;
  hasRequiredRgbcolor = 1;
  rgbcolor = function(color_string) {
    this.ok = false;
    this.alpha = 1;
    if (color_string.charAt(0) == "#") {
      color_string = color_string.substr(1, 6);
    }
    color_string = color_string.replace(/ /g, "");
    color_string = color_string.toLowerCase();
    var simple_colors = {
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
    color_string = simple_colors[color_string] || color_string;
    var color_defs = [
      {
        re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
        example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
        process: function(bits3) {
          return [
            parseInt(bits3[1]),
            parseInt(bits3[2]),
            parseInt(bits3[3]),
            parseFloat(bits3[4])
          ];
        }
      },
      {
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function(bits3) {
          return [
            parseInt(bits3[1]),
            parseInt(bits3[2]),
            parseInt(bits3[3])
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        example: ["#00ff00", "336699"],
        process: function(bits3) {
          return [
            parseInt(bits3[1], 16),
            parseInt(bits3[2], 16),
            parseInt(bits3[3], 16)
          ];
        }
      },
      {
        re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        example: ["#fb0", "f0f"],
        process: function(bits3) {
          return [
            parseInt(bits3[1] + bits3[1], 16),
            parseInt(bits3[2] + bits3[2], 16),
            parseInt(bits3[3] + bits3[3], 16)
          ];
        }
      }
    ];
    for (var i2 = 0; i2 < color_defs.length; i2++) {
      var re2 = color_defs[i2].re;
      var processor = color_defs[i2].process;
      var bits2 = re2.exec(color_string);
      if (bits2) {
        var channels = processor(bits2);
        this.r = channels[0];
        this.g = channels[1];
        this.b = channels[2];
        if (channels.length > 3) {
          this.alpha = channels[3];
        }
        this.ok = true;
      }
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
    this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
    this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
    this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha;
    this.toRGB = function() {
      return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    this.toRGBA = function() {
      return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    };
    this.toHex = function() {
      var r2 = this.r.toString(16);
      var g2 = this.g.toString(16);
      var b = this.b.toString(16);
      if (r2.length == 1) r2 = "0" + r2;
      if (g2.length == 1) g2 = "0" + g2;
      if (b.length == 1) b = "0" + b;
      return "#" + r2 + g2 + b;
    };
    this.getHelpXML = function() {
      var examples = new Array();
      for (var i3 = 0; i3 < color_defs.length; i3++) {
        var example = color_defs[i3].example;
        for (var j = 0; j < example.length; j++) {
          examples[examples.length] = example[j];
        }
      }
      for (var sc in simple_colors) {
        examples[examples.length] = sc;
      }
      var xml2 = document.createElement("ul");
      xml2.setAttribute("id", "rgbcolor-examples");
      for (var i3 = 0; i3 < examples.length; i3++) {
        try {
          var list_item = document.createElement("li");
          var list_color = new RGBColor(examples[i3]);
          var example_div = document.createElement("div");
          example_div.style.cssText = "margin: 3px; border: 1px solid black; background:" + list_color.toHex() + "; color:" + list_color.toHex();
          example_div.appendChild(document.createTextNode("test"));
          var list_item_value = document.createTextNode(
            " " + examples[i3] + " -> " + list_color.toRGB() + " -> " + list_color.toHex()
          );
          list_item.appendChild(example_div);
          list_item.appendChild(list_item_value);
          xml2.appendChild(list_item);
        } catch (e2) {
        }
      }
      return xml2;
    };
  };
  return rgbcolor;
}
var rgbcolorExports = requireRgbcolor();
const RGBColor$1 = /* @__PURE__ */ getDefaultExportFromCjs(rgbcolorExports);
var es_array_indexOf = {};
var hasRequiredEs_array_indexOf;
function requireEs_array_indexOf() {
  if (hasRequiredEs_array_indexOf) return es_array_indexOf;
  hasRequiredEs_array_indexOf = 1;
  var $ = require_export();
  var uncurryThis = requireFunctionUncurryThisClause();
  var $indexOf = requireArrayIncludes().indexOf;
  var arrayMethodIsStrict2 = requireArrayMethodIsStrict();
  var nativeIndexOf = uncurryThis([].indexOf);
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
  var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict2("indexOf");
  $({ target: "Array", proto: true, forced: FORCED }, {
    indexOf: function indexOf(searchElement) {
      var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
      return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
    }
  });
  return es_array_indexOf;
}
requireEs_array_indexOf();
var es_string_includes = {};
var hasRequiredEs_string_includes;
function requireEs_string_includes() {
  if (hasRequiredEs_string_includes) return es_string_includes;
  hasRequiredEs_string_includes = 1;
  var $ = require_export();
  var uncurryThis = requireFunctionUncurryThis();
  var notARegExp = requireNotARegexp();
  var requireObjectCoercible2 = requireRequireObjectCoercible();
  var toString2 = requireToString();
  var correctIsRegExpLogic = requireCorrectIsRegexpLogic();
  var stringIndexOf2 = uncurryThis("".indexOf);
  $({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
    includes: function includes(searchString) {
      return !!~stringIndexOf2(
        toString2(requireObjectCoercible2(this)),
        toString2(notARegExp(searchString)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  });
  return es_string_includes;
}
requireEs_string_includes();
var es_array_reverse = {};
var isArray;
var hasRequiredIsArray;
function requireIsArray() {
  if (hasRequiredIsArray) return isArray;
  hasRequiredIsArray = 1;
  var classof2 = requireClassofRaw();
  isArray = Array.isArray || function isArray2(argument) {
    return classof2(argument) === "Array";
  };
  return isArray;
}
var hasRequiredEs_array_reverse;
function requireEs_array_reverse() {
  if (hasRequiredEs_array_reverse) return es_array_reverse;
  hasRequiredEs_array_reverse = 1;
  var $ = require_export();
  var uncurryThis = requireFunctionUncurryThis();
  var isArray2 = requireIsArray();
  var nativeReverse = uncurryThis([].reverse);
  var test2 = [1, 2];
  $({ target: "Array", proto: true, forced: String(test2) === String(test2.reverse()) }, {
    reverse: function reverse() {
      if (isArray2(this)) this.length = this.length;
      return nativeReverse(this);
    }
  });
  return es_array_reverse;
}
requireEs_array_reverse();
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
var t = function(r2, e2) {
  return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t2, r3) {
    t2.__proto__ = r3;
  } || function(t2, r3) {
    for (var e3 in r3) Object.prototype.hasOwnProperty.call(r3, e3) && (t2[e3] = r3[e3]);
  })(r2, e2);
};
function r(r2, e2) {
  if ("function" != typeof e2 && null !== e2) throw new TypeError("Class extends value " + String(e2) + " is not a constructor or null");
  function i2() {
    this.constructor = r2;
  }
  t(r2, e2), r2.prototype = null === e2 ? Object.create(e2) : (i2.prototype = e2.prototype, new i2());
}
function e(t2) {
  var r2 = "";
  Array.isArray(t2) || (t2 = [t2]);
  for (var e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2];
    if (i2.type === _.CLOSE_PATH) r2 += "z";
    else if (i2.type === _.HORIZ_LINE_TO) r2 += (i2.relative ? "h" : "H") + i2.x;
    else if (i2.type === _.VERT_LINE_TO) r2 += (i2.relative ? "v" : "V") + i2.y;
    else if (i2.type === _.MOVE_TO) r2 += (i2.relative ? "m" : "M") + i2.x + " " + i2.y;
    else if (i2.type === _.LINE_TO) r2 += (i2.relative ? "l" : "L") + i2.x + " " + i2.y;
    else if (i2.type === _.CURVE_TO) r2 += (i2.relative ? "c" : "C") + i2.x1 + " " + i2.y1 + " " + i2.x2 + " " + i2.y2 + " " + i2.x + " " + i2.y;
    else if (i2.type === _.SMOOTH_CURVE_TO) r2 += (i2.relative ? "s" : "S") + i2.x2 + " " + i2.y2 + " " + i2.x + " " + i2.y;
    else if (i2.type === _.QUAD_TO) r2 += (i2.relative ? "q" : "Q") + i2.x1 + " " + i2.y1 + " " + i2.x + " " + i2.y;
    else if (i2.type === _.SMOOTH_QUAD_TO) r2 += (i2.relative ? "t" : "T") + i2.x + " " + i2.y;
    else {
      if (i2.type !== _.ARC) throw new Error('Unexpected command type "' + i2.type + '" at index ' + e2 + ".");
      r2 += (i2.relative ? "a" : "A") + i2.rX + " " + i2.rY + " " + i2.xRot + " " + +i2.lArcFlag + " " + +i2.sweepFlag + " " + i2.x + " " + i2.y;
    }
  }
  return r2;
}
function i(t2, r2) {
  var e2 = t2[0], i2 = t2[1];
  return [e2 * Math.cos(r2) - i2 * Math.sin(r2), e2 * Math.sin(r2) + i2 * Math.cos(r2)];
}
function a() {
  for (var t2 = [], r2 = 0; r2 < arguments.length; r2++) t2[r2] = arguments[r2];
  for (var e2 = 0; e2 < t2.length; e2++) if ("number" != typeof t2[e2]) throw new Error("assertNumbers arguments[" + e2 + "] is not a number. " + typeof t2[e2] + " == typeof " + t2[e2]);
  return true;
}
var n = Math.PI;
function o(t2, r2, e2) {
  t2.lArcFlag = 0 === t2.lArcFlag ? 0 : 1, t2.sweepFlag = 0 === t2.sweepFlag ? 0 : 1;
  var a2 = t2.rX, o2 = t2.rY, s2 = t2.x, u2 = t2.y;
  a2 = Math.abs(t2.rX), o2 = Math.abs(t2.rY);
  var h2 = i([(r2 - s2) / 2, (e2 - u2) / 2], -t2.xRot / 180 * n), c2 = h2[0], y2 = h2[1], p2 = Math.pow(c2, 2) / Math.pow(a2, 2) + Math.pow(y2, 2) / Math.pow(o2, 2);
  1 < p2 && (a2 *= Math.sqrt(p2), o2 *= Math.sqrt(p2)), t2.rX = a2, t2.rY = o2;
  var m2 = Math.pow(a2, 2) * Math.pow(y2, 2) + Math.pow(o2, 2) * Math.pow(c2, 2), O2 = (t2.lArcFlag !== t2.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a2, 2) * Math.pow(o2, 2) - m2) / m2)), l2 = a2 * y2 / o2 * O2, T2 = -o2 * c2 / a2 * O2, v2 = i([l2, T2], t2.xRot / 180 * n);
  t2.cX = v2[0] + (r2 + s2) / 2, t2.cY = v2[1] + (e2 + u2) / 2, t2.phi1 = Math.atan2((y2 - T2) / o2, (c2 - l2) / a2), t2.phi2 = Math.atan2((-y2 - T2) / o2, (-c2 - l2) / a2), 0 === t2.sweepFlag && t2.phi2 > t2.phi1 && (t2.phi2 -= 2 * n), 1 === t2.sweepFlag && t2.phi2 < t2.phi1 && (t2.phi2 += 2 * n), t2.phi1 *= 180 / n, t2.phi2 *= 180 / n;
}
function s(t2, r2, e2) {
  a(t2, r2, e2);
  var i2 = t2 * t2 + r2 * r2 - e2 * e2;
  if (0 > i2) return [];
  if (0 === i2) return [[t2 * e2 / (t2 * t2 + r2 * r2), r2 * e2 / (t2 * t2 + r2 * r2)]];
  var n2 = Math.sqrt(i2);
  return [[(t2 * e2 + r2 * n2) / (t2 * t2 + r2 * r2), (r2 * e2 - t2 * n2) / (t2 * t2 + r2 * r2)], [(t2 * e2 - r2 * n2) / (t2 * t2 + r2 * r2), (r2 * e2 + t2 * n2) / (t2 * t2 + r2 * r2)]];
}
var u, h = Math.PI / 180;
function c(t2, r2, e2) {
  return (1 - e2) * t2 + e2 * r2;
}
function y(t2, r2, e2, i2) {
  return t2 + Math.cos(i2 / 180 * n) * r2 + Math.sin(i2 / 180 * n) * e2;
}
function p(t2, r2, e2, i2) {
  var a2 = 1e-6, n2 = r2 - t2, o2 = e2 - r2, s2 = 3 * n2 + 3 * (i2 - e2) - 6 * o2, u2 = 6 * (o2 - n2), h2 = 3 * n2;
  return Math.abs(s2) < a2 ? [-h2 / u2] : function(t3, r3, e3) {
    var i3 = t3 * t3 / 4 - r3;
    if (i3 < -1e-6) return [];
    if (i3 <= e3) return [-t3 / 2];
    var a3 = Math.sqrt(i3);
    return [-t3 / 2 - a3, -t3 / 2 + a3];
  }(u2 / s2, h2 / s2, a2);
}
function m(t2, r2, e2, i2, a2) {
  var n2 = 1 - a2;
  return t2 * (n2 * n2 * n2) + r2 * (3 * n2 * n2 * a2) + e2 * (3 * n2 * a2 * a2) + i2 * (a2 * a2 * a2);
}
!function(t2) {
  function r2() {
    return u2(function(t3, r3, e3) {
      return t3.relative && (void 0 !== t3.x1 && (t3.x1 += r3), void 0 !== t3.y1 && (t3.y1 += e3), void 0 !== t3.x2 && (t3.x2 += r3), void 0 !== t3.y2 && (t3.y2 += e3), void 0 !== t3.x && (t3.x += r3), void 0 !== t3.y && (t3.y += e3), t3.relative = false), t3;
    });
  }
  function e2() {
    var t3 = NaN, r3 = NaN, e3 = NaN, i2 = NaN;
    return u2(function(a2, n3, o2) {
      return a2.type & _.SMOOTH_CURVE_TO && (a2.type = _.CURVE_TO, t3 = isNaN(t3) ? n3 : t3, r3 = isNaN(r3) ? o2 : r3, a2.x1 = a2.relative ? n3 - t3 : 2 * n3 - t3, a2.y1 = a2.relative ? o2 - r3 : 2 * o2 - r3), a2.type & _.CURVE_TO ? (t3 = a2.relative ? n3 + a2.x2 : a2.x2, r3 = a2.relative ? o2 + a2.y2 : a2.y2) : (t3 = NaN, r3 = NaN), a2.type & _.SMOOTH_QUAD_TO && (a2.type = _.QUAD_TO, e3 = isNaN(e3) ? n3 : e3, i2 = isNaN(i2) ? o2 : i2, a2.x1 = a2.relative ? n3 - e3 : 2 * n3 - e3, a2.y1 = a2.relative ? o2 - i2 : 2 * o2 - i2), a2.type & _.QUAD_TO ? (e3 = a2.relative ? n3 + a2.x1 : a2.x1, i2 = a2.relative ? o2 + a2.y1 : a2.y1) : (e3 = NaN, i2 = NaN), a2;
    });
  }
  function n2() {
    var t3 = NaN, r3 = NaN;
    return u2(function(e3, i2, a2) {
      if (e3.type & _.SMOOTH_QUAD_TO && (e3.type = _.QUAD_TO, t3 = isNaN(t3) ? i2 : t3, r3 = isNaN(r3) ? a2 : r3, e3.x1 = e3.relative ? i2 - t3 : 2 * i2 - t3, e3.y1 = e3.relative ? a2 - r3 : 2 * a2 - r3), e3.type & _.QUAD_TO) {
        t3 = e3.relative ? i2 + e3.x1 : e3.x1, r3 = e3.relative ? a2 + e3.y1 : e3.y1;
        var n3 = e3.x1, o2 = e3.y1;
        e3.type = _.CURVE_TO, e3.x1 = ((e3.relative ? 0 : i2) + 2 * n3) / 3, e3.y1 = ((e3.relative ? 0 : a2) + 2 * o2) / 3, e3.x2 = (e3.x + 2 * n3) / 3, e3.y2 = (e3.y + 2 * o2) / 3;
      } else t3 = NaN, r3 = NaN;
      return e3;
    });
  }
  function u2(t3) {
    var r3 = 0, e3 = 0, i2 = NaN, a2 = NaN;
    return function(n3) {
      if (isNaN(i2) && !(n3.type & _.MOVE_TO)) throw new Error("path must start with moveto");
      var o2 = t3(n3, r3, e3, i2, a2);
      return n3.type & _.CLOSE_PATH && (r3 = i2, e3 = a2), void 0 !== n3.x && (r3 = n3.relative ? r3 + n3.x : n3.x), void 0 !== n3.y && (e3 = n3.relative ? e3 + n3.y : n3.y), n3.type & _.MOVE_TO && (i2 = r3, a2 = e3), o2;
    };
  }
  function O2(t3, r3, e3, i2, n3, o2) {
    return a(t3, r3, e3, i2, n3, o2), u2(function(a2, s2, u3, h2) {
      var c2 = a2.x1, y2 = a2.x2, p2 = a2.relative && !isNaN(h2), m2 = void 0 !== a2.x ? a2.x : p2 ? 0 : s2, O3 = void 0 !== a2.y ? a2.y : p2 ? 0 : u3;
      function l3(t4) {
        return t4 * t4;
      }
      a2.type & _.HORIZ_LINE_TO && 0 !== r3 && (a2.type = _.LINE_TO, a2.y = a2.relative ? 0 : u3), a2.type & _.VERT_LINE_TO && 0 !== e3 && (a2.type = _.LINE_TO, a2.x = a2.relative ? 0 : s2), void 0 !== a2.x && (a2.x = a2.x * t3 + O3 * e3 + (p2 ? 0 : n3)), void 0 !== a2.y && (a2.y = m2 * r3 + a2.y * i2 + (p2 ? 0 : o2)), void 0 !== a2.x1 && (a2.x1 = a2.x1 * t3 + a2.y1 * e3 + (p2 ? 0 : n3)), void 0 !== a2.y1 && (a2.y1 = c2 * r3 + a2.y1 * i2 + (p2 ? 0 : o2)), void 0 !== a2.x2 && (a2.x2 = a2.x2 * t3 + a2.y2 * e3 + (p2 ? 0 : n3)), void 0 !== a2.y2 && (a2.y2 = y2 * r3 + a2.y2 * i2 + (p2 ? 0 : o2));
      var T2 = t3 * i2 - r3 * e3;
      if (void 0 !== a2.xRot && (1 !== t3 || 0 !== r3 || 0 !== e3 || 1 !== i2)) if (0 === T2) delete a2.rX, delete a2.rY, delete a2.xRot, delete a2.lArcFlag, delete a2.sweepFlag, a2.type = _.LINE_TO;
      else {
        var v2 = a2.xRot * Math.PI / 180, f2 = Math.sin(v2), N2 = Math.cos(v2), x = 1 / l3(a2.rX), d = 1 / l3(a2.rY), E = l3(N2) * x + l3(f2) * d, A2 = 2 * f2 * N2 * (x - d), C = l3(f2) * x + l3(N2) * d, M = E * i2 * i2 - A2 * r3 * i2 + C * r3 * r3, R = A2 * (t3 * i2 + r3 * e3) - 2 * (E * e3 * i2 + C * t3 * r3), g2 = E * e3 * e3 - A2 * t3 * e3 + C * t3 * t3, I = (Math.atan2(R, M - g2) + Math.PI) % Math.PI / 2, S2 = Math.sin(I), L2 = Math.cos(I);
        a2.rX = Math.abs(T2) / Math.sqrt(M * l3(L2) + R * S2 * L2 + g2 * l3(S2)), a2.rY = Math.abs(T2) / Math.sqrt(M * l3(S2) - R * S2 * L2 + g2 * l3(L2)), a2.xRot = 180 * I / Math.PI;
      }
      return void 0 !== a2.sweepFlag && 0 > T2 && (a2.sweepFlag = +!a2.sweepFlag), a2;
    });
  }
  function l2() {
    return function(t3) {
      var r3 = {};
      for (var e3 in t3) r3[e3] = t3[e3];
      return r3;
    };
  }
  t2.ROUND = function(t3) {
    function r3(r4) {
      return Math.round(r4 * t3) / t3;
    }
    return void 0 === t3 && (t3 = 1e13), a(t3), function(t4) {
      return void 0 !== t4.x1 && (t4.x1 = r3(t4.x1)), void 0 !== t4.y1 && (t4.y1 = r3(t4.y1)), void 0 !== t4.x2 && (t4.x2 = r3(t4.x2)), void 0 !== t4.y2 && (t4.y2 = r3(t4.y2)), void 0 !== t4.x && (t4.x = r3(t4.x)), void 0 !== t4.y && (t4.y = r3(t4.y)), void 0 !== t4.rX && (t4.rX = r3(t4.rX)), void 0 !== t4.rY && (t4.rY = r3(t4.rY)), t4;
    };
  }, t2.TO_ABS = r2, t2.TO_REL = function() {
    return u2(function(t3, r3, e3) {
      return t3.relative || (void 0 !== t3.x1 && (t3.x1 -= r3), void 0 !== t3.y1 && (t3.y1 -= e3), void 0 !== t3.x2 && (t3.x2 -= r3), void 0 !== t3.y2 && (t3.y2 -= e3), void 0 !== t3.x && (t3.x -= r3), void 0 !== t3.y && (t3.y -= e3), t3.relative = true), t3;
    });
  }, t2.NORMALIZE_HVZ = function(t3, r3, e3) {
    return void 0 === t3 && (t3 = true), void 0 === r3 && (r3 = true), void 0 === e3 && (e3 = true), u2(function(i2, a2, n3, o2, s2) {
      if (isNaN(o2) && !(i2.type & _.MOVE_TO)) throw new Error("path must start with moveto");
      return r3 && i2.type & _.HORIZ_LINE_TO && (i2.type = _.LINE_TO, i2.y = i2.relative ? 0 : n3), e3 && i2.type & _.VERT_LINE_TO && (i2.type = _.LINE_TO, i2.x = i2.relative ? 0 : a2), t3 && i2.type & _.CLOSE_PATH && (i2.type = _.LINE_TO, i2.x = i2.relative ? o2 - a2 : o2, i2.y = i2.relative ? s2 - n3 : s2), i2.type & _.ARC && (0 === i2.rX || 0 === i2.rY) && (i2.type = _.LINE_TO, delete i2.rX, delete i2.rY, delete i2.xRot, delete i2.lArcFlag, delete i2.sweepFlag), i2;
    });
  }, t2.NORMALIZE_ST = e2, t2.QT_TO_C = n2, t2.INFO = u2, t2.SANITIZE = function(t3) {
    void 0 === t3 && (t3 = 0), a(t3);
    var r3 = NaN, e3 = NaN, i2 = NaN, n3 = NaN;
    return u2(function(a2, o2, s2, u3, h2) {
      var c2 = Math.abs, y2 = false, p2 = 0, m2 = 0;
      if (a2.type & _.SMOOTH_CURVE_TO && (p2 = isNaN(r3) ? 0 : o2 - r3, m2 = isNaN(e3) ? 0 : s2 - e3), a2.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (r3 = a2.relative ? o2 + a2.x2 : a2.x2, e3 = a2.relative ? s2 + a2.y2 : a2.y2) : (r3 = NaN, e3 = NaN), a2.type & _.SMOOTH_QUAD_TO ? (i2 = isNaN(i2) ? o2 : 2 * o2 - i2, n3 = isNaN(n3) ? s2 : 2 * s2 - n3) : a2.type & _.QUAD_TO ? (i2 = a2.relative ? o2 + a2.x1 : a2.x1, n3 = a2.relative ? s2 + a2.y1 : a2.y2) : (i2 = NaN, n3 = NaN), a2.type & _.LINE_COMMANDS || a2.type & _.ARC && (0 === a2.rX || 0 === a2.rY || !a2.lArcFlag) || a2.type & _.CURVE_TO || a2.type & _.SMOOTH_CURVE_TO || a2.type & _.QUAD_TO || a2.type & _.SMOOTH_QUAD_TO) {
        var O3 = void 0 === a2.x ? 0 : a2.relative ? a2.x : a2.x - o2, l3 = void 0 === a2.y ? 0 : a2.relative ? a2.y : a2.y - s2;
        p2 = isNaN(i2) ? void 0 === a2.x1 ? p2 : a2.relative ? a2.x : a2.x1 - o2 : i2 - o2, m2 = isNaN(n3) ? void 0 === a2.y1 ? m2 : a2.relative ? a2.y : a2.y1 - s2 : n3 - s2;
        var T2 = void 0 === a2.x2 ? 0 : a2.relative ? a2.x : a2.x2 - o2, v2 = void 0 === a2.y2 ? 0 : a2.relative ? a2.y : a2.y2 - s2;
        c2(O3) <= t3 && c2(l3) <= t3 && c2(p2) <= t3 && c2(m2) <= t3 && c2(T2) <= t3 && c2(v2) <= t3 && (y2 = true);
      }
      return a2.type & _.CLOSE_PATH && c2(o2 - u3) <= t3 && c2(s2 - h2) <= t3 && (y2 = true), y2 ? [] : a2;
    });
  }, t2.MATRIX = O2, t2.ROTATE = function(t3, r3, e3) {
    void 0 === r3 && (r3 = 0), void 0 === e3 && (e3 = 0), a(t3, r3, e3);
    var i2 = Math.sin(t3), n3 = Math.cos(t3);
    return O2(n3, i2, -i2, n3, r3 - r3 * n3 + e3 * i2, e3 - r3 * i2 - e3 * n3);
  }, t2.TRANSLATE = function(t3, r3) {
    return void 0 === r3 && (r3 = 0), a(t3, r3), O2(1, 0, 0, 1, t3, r3);
  }, t2.SCALE = function(t3, r3) {
    return void 0 === r3 && (r3 = t3), a(t3, r3), O2(t3, 0, 0, r3, 0, 0);
  }, t2.SKEW_X = function(t3) {
    return a(t3), O2(1, 0, Math.atan(t3), 1, 0, 0);
  }, t2.SKEW_Y = function(t3) {
    return a(t3), O2(1, Math.atan(t3), 0, 1, 0, 0);
  }, t2.X_AXIS_SYMMETRY = function(t3) {
    return void 0 === t3 && (t3 = 0), a(t3), O2(-1, 0, 0, 1, t3, 0);
  }, t2.Y_AXIS_SYMMETRY = function(t3) {
    return void 0 === t3 && (t3 = 0), a(t3), O2(1, 0, 0, -1, 0, t3);
  }, t2.A_TO_C = function() {
    return u2(function(t3, r3, e3) {
      return _.ARC === t3.type ? function(t4, r4, e4) {
        var a2, n3, s2, u3;
        t4.cX || o(t4, r4, e4);
        for (var y2 = Math.min(t4.phi1, t4.phi2), p2 = Math.max(t4.phi1, t4.phi2) - y2, m2 = Math.ceil(p2 / 90), O3 = new Array(m2), l3 = r4, T2 = e4, v2 = 0; v2 < m2; v2++) {
          var f2 = c(t4.phi1, t4.phi2, v2 / m2), N2 = c(t4.phi1, t4.phi2, (v2 + 1) / m2), x = N2 - f2, d = 4 / 3 * Math.tan(x * h / 4), E = [Math.cos(f2 * h) - d * Math.sin(f2 * h), Math.sin(f2 * h) + d * Math.cos(f2 * h)], A2 = E[0], C = E[1], M = [Math.cos(N2 * h), Math.sin(N2 * h)], R = M[0], g2 = M[1], I = [R + d * Math.sin(N2 * h), g2 - d * Math.cos(N2 * h)], S2 = I[0], L2 = I[1];
          O3[v2] = { relative: t4.relative, type: _.CURVE_TO };
          var H = function(r5, e5) {
            var a3 = i([r5 * t4.rX, e5 * t4.rY], t4.xRot), n4 = a3[0], o2 = a3[1];
            return [t4.cX + n4, t4.cY + o2];
          };
          a2 = H(A2, C), O3[v2].x1 = a2[0], O3[v2].y1 = a2[1], n3 = H(S2, L2), O3[v2].x2 = n3[0], O3[v2].y2 = n3[1], s2 = H(R, g2), O3[v2].x = s2[0], O3[v2].y = s2[1], t4.relative && (O3[v2].x1 -= l3, O3[v2].y1 -= T2, O3[v2].x2 -= l3, O3[v2].y2 -= T2, O3[v2].x -= l3, O3[v2].y -= T2), l3 = (u3 = [O3[v2].x, O3[v2].y])[0], T2 = u3[1];
        }
        return O3;
      }(t3, t3.relative ? 0 : r3, t3.relative ? 0 : e3) : t3;
    });
  }, t2.ANNOTATE_ARCS = function() {
    return u2(function(t3, r3, e3) {
      return t3.relative && (r3 = 0, e3 = 0), _.ARC === t3.type && o(t3, r3, e3), t3;
    });
  }, t2.CLONE = l2, t2.CALCULATE_BOUNDS = function() {
    var t3 = function(t4) {
      var r3 = {};
      for (var e3 in t4) r3[e3] = t4[e3];
      return r3;
    }, i2 = r2(), a2 = n2(), h2 = e2(), c2 = u2(function(r3, e3, n3) {
      var u3 = h2(a2(i2(t3(r3))));
      function O3(t4) {
        t4 > c2.maxX && (c2.maxX = t4), t4 < c2.minX && (c2.minX = t4);
      }
      function l3(t4) {
        t4 > c2.maxY && (c2.maxY = t4), t4 < c2.minY && (c2.minY = t4);
      }
      if (u3.type & _.DRAWING_COMMANDS && (O3(e3), l3(n3)), u3.type & _.HORIZ_LINE_TO && O3(u3.x), u3.type & _.VERT_LINE_TO && l3(u3.y), u3.type & _.LINE_TO && (O3(u3.x), l3(u3.y)), u3.type & _.CURVE_TO) {
        O3(u3.x), l3(u3.y);
        for (var T2 = 0, v2 = p(e3, u3.x1, u3.x2, u3.x); T2 < v2.length; T2++) {
          0 < (w2 = v2[T2]) && 1 > w2 && O3(m(e3, u3.x1, u3.x2, u3.x, w2));
        }
        for (var f2 = 0, N2 = p(n3, u3.y1, u3.y2, u3.y); f2 < N2.length; f2++) {
          0 < (w2 = N2[f2]) && 1 > w2 && l3(m(n3, u3.y1, u3.y2, u3.y, w2));
        }
      }
      if (u3.type & _.ARC) {
        O3(u3.x), l3(u3.y), o(u3, e3, n3);
        for (var x = u3.xRot / 180 * Math.PI, d = Math.cos(x) * u3.rX, E = Math.sin(x) * u3.rX, A2 = -Math.sin(x) * u3.rY, C = Math.cos(x) * u3.rY, M = u3.phi1 < u3.phi2 ? [u3.phi1, u3.phi2] : -180 > u3.phi2 ? [u3.phi2 + 360, u3.phi1 + 360] : [u3.phi2, u3.phi1], R = M[0], g2 = M[1], I = function(t4) {
          var r4 = t4[0], e4 = t4[1], i3 = 180 * Math.atan2(e4, r4) / Math.PI;
          return i3 < R ? i3 + 360 : i3;
        }, S2 = 0, L2 = s(A2, -d, 0).map(I); S2 < L2.length; S2++) {
          (w2 = L2[S2]) > R && w2 < g2 && O3(y(u3.cX, d, A2, w2));
        }
        for (var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++) {
          var w2;
          (w2 = U[H]) > R && w2 < g2 && l3(y(u3.cY, E, C, w2));
        }
      }
      return r3;
    });
    return c2.minX = 1 / 0, c2.maxX = -1 / 0, c2.minY = 1 / 0, c2.maxY = -1 / 0, c2;
  };
}(u || (u = {}));
var O, l = function() {
  function t2() {
  }
  return t2.prototype.round = function(t3) {
    return this.transform(u.ROUND(t3));
  }, t2.prototype.toAbs = function() {
    return this.transform(u.TO_ABS());
  }, t2.prototype.toRel = function() {
    return this.transform(u.TO_REL());
  }, t2.prototype.normalizeHVZ = function(t3, r2, e2) {
    return this.transform(u.NORMALIZE_HVZ(t3, r2, e2));
  }, t2.prototype.normalizeST = function() {
    return this.transform(u.NORMALIZE_ST());
  }, t2.prototype.qtToC = function() {
    return this.transform(u.QT_TO_C());
  }, t2.prototype.aToC = function() {
    return this.transform(u.A_TO_C());
  }, t2.prototype.sanitize = function(t3) {
    return this.transform(u.SANITIZE(t3));
  }, t2.prototype.translate = function(t3, r2) {
    return this.transform(u.TRANSLATE(t3, r2));
  }, t2.prototype.scale = function(t3, r2) {
    return this.transform(u.SCALE(t3, r2));
  }, t2.prototype.rotate = function(t3, r2, e2) {
    return this.transform(u.ROTATE(t3, r2, e2));
  }, t2.prototype.matrix = function(t3, r2, e2, i2, a2, n2) {
    return this.transform(u.MATRIX(t3, r2, e2, i2, a2, n2));
  }, t2.prototype.skewX = function(t3) {
    return this.transform(u.SKEW_X(t3));
  }, t2.prototype.skewY = function(t3) {
    return this.transform(u.SKEW_Y(t3));
  }, t2.prototype.xSymmetry = function(t3) {
    return this.transform(u.X_AXIS_SYMMETRY(t3));
  }, t2.prototype.ySymmetry = function(t3) {
    return this.transform(u.Y_AXIS_SYMMETRY(t3));
  }, t2.prototype.annotateArcs = function() {
    return this.transform(u.ANNOTATE_ARCS());
  }, t2;
}(), T = function(t2) {
  return " " === t2 || "	" === t2 || "\r" === t2 || "\n" === t2;
}, v = function(t2) {
  return "0".charCodeAt(0) <= t2.charCodeAt(0) && t2.charCodeAt(0) <= "9".charCodeAt(0);
}, f = function(t2) {
  function e2() {
    var r2 = t2.call(this) || this;
    return r2.curNumber = "", r2.curCommandType = -1, r2.curCommandRelative = false, r2.canParseCommandOrComma = true, r2.curNumberHasExp = false, r2.curNumberHasExpDigits = false, r2.curNumberHasDecimal = false, r2.curArgs = [], r2;
  }
  return r(e2, t2), e2.prototype.finish = function(t3) {
    if (void 0 === t3 && (t3 = []), this.parse(" ", t3), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
    return t3;
  }, e2.prototype.parse = function(t3, r2) {
    var e3 = this;
    void 0 === r2 && (r2 = []);
    for (var i2 = function(t4) {
      r2.push(t4), e3.curArgs.length = 0, e3.canParseCommandOrComma = true;
    }, a2 = 0; a2 < t3.length; a2++) {
      var n2 = t3[a2], o2 = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber), s2 = v(n2) && ("0" === this.curNumber && "0" === n2 || o2);
      if (!v(n2) || s2) if ("e" !== n2 && "E" !== n2) if ("-" !== n2 && "+" !== n2 || !this.curNumberHasExp || this.curNumberHasExpDigits) if ("." !== n2 || this.curNumberHasExp || this.curNumberHasDecimal || o2) {
        if (this.curNumber && -1 !== this.curCommandType) {
          var u2 = Number(this.curNumber);
          if (isNaN(u2)) throw new SyntaxError("Invalid number ending at " + a2);
          if (this.curCommandType === _.ARC) {
            if (0 === this.curArgs.length || 1 === this.curArgs.length) {
              if (0 > u2) throw new SyntaxError('Expected positive number, got "' + u2 + '" at index "' + a2 + '"');
            } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a2 + '"');
          }
          this.curArgs.push(u2), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? i2({ type: _.HORIZ_LINE_TO, relative: this.curCommandRelative, x: u2 }) : _.VERT_LINE_TO === this.curCommandType ? i2({ type: _.VERT_LINE_TO, relative: this.curCommandRelative, y: u2 }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (i2({ type: this.curCommandType, relative: this.curCommandRelative, x: this.curArgs[0], y: this.curArgs[1] }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? i2({ type: _.CURVE_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x2: this.curArgs[2], y2: this.curArgs[3], x: this.curArgs[4], y: this.curArgs[5] }) : this.curCommandType === _.SMOOTH_CURVE_TO ? i2({ type: _.SMOOTH_CURVE_TO, relative: this.curCommandRelative, x2: this.curArgs[0], y2: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === _.QUAD_TO ? i2({ type: _.QUAD_TO, relative: this.curCommandRelative, x1: this.curArgs[0], y1: this.curArgs[1], x: this.curArgs[2], y: this.curArgs[3] }) : this.curCommandType === _.ARC && i2({ type: _.ARC, relative: this.curCommandRelative, rX: this.curArgs[0], rY: this.curArgs[1], xRot: this.curArgs[2], lArcFlag: this.curArgs[3], sweepFlag: this.curArgs[4], x: this.curArgs[5], y: this.curArgs[6] })), this.curNumber = "", this.curNumberHasExpDigits = false, this.curNumberHasExp = false, this.curNumberHasDecimal = false, this.canParseCommandOrComma = true;
        }
        if (!T(n2)) if ("," === n2 && this.canParseCommandOrComma) this.canParseCommandOrComma = false;
        else if ("+" !== n2 && "-" !== n2 && "." !== n2) if (s2) this.curNumber = n2, this.curNumberHasDecimal = false;
        else {
          if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + a2 + ".");
          if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n2 + '" at index ' + a2 + ". Command cannot follow comma");
          if (this.canParseCommandOrComma = false, "z" !== n2 && "Z" !== n2) if ("h" === n2 || "H" === n2) this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = "h" === n2;
          else if ("v" === n2 || "V" === n2) this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = "v" === n2;
          else if ("m" === n2 || "M" === n2) this.curCommandType = _.MOVE_TO, this.curCommandRelative = "m" === n2;
          else if ("l" === n2 || "L" === n2) this.curCommandType = _.LINE_TO, this.curCommandRelative = "l" === n2;
          else if ("c" === n2 || "C" === n2) this.curCommandType = _.CURVE_TO, this.curCommandRelative = "c" === n2;
          else if ("s" === n2 || "S" === n2) this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n2;
          else if ("q" === n2 || "Q" === n2) this.curCommandType = _.QUAD_TO, this.curCommandRelative = "q" === n2;
          else if ("t" === n2 || "T" === n2) this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n2;
          else {
            if ("a" !== n2 && "A" !== n2) throw new SyntaxError('Unexpected character "' + n2 + '" at index ' + a2 + ".");
            this.curCommandType = _.ARC, this.curCommandRelative = "a" === n2;
          }
          else r2.push({ type: _.CLOSE_PATH }), this.canParseCommandOrComma = true, this.curCommandType = -1;
        }
        else this.curNumber = n2, this.curNumberHasDecimal = "." === n2;
      } else this.curNumber += n2, this.curNumberHasDecimal = true;
      else this.curNumber += n2;
      else this.curNumber += n2, this.curNumberHasExp = true;
      else this.curNumber += n2, this.curNumberHasExpDigits = this.curNumberHasExp;
    }
    return r2;
  }, e2.prototype.transform = function(t3) {
    return Object.create(this, { parse: { value: function(r2, e3) {
      void 0 === e3 && (e3 = []);
      for (var i2 = 0, a2 = Object.getPrototypeOf(this).parse.call(this, r2); i2 < a2.length; i2++) {
        var n2 = a2[i2], o2 = t3(n2);
        Array.isArray(o2) ? e3.push.apply(e3, o2) : e3.push(o2);
      }
      return e3;
    } } });
  }, e2;
}(l), _ = function(t2) {
  function i2(r2) {
    var e2 = t2.call(this) || this;
    return e2.commands = "string" == typeof r2 ? i2.parse(r2) : r2, e2;
  }
  return r(i2, t2), i2.prototype.encode = function() {
    return i2.encode(this.commands);
  }, i2.prototype.getBounds = function() {
    var t3 = u.CALCULATE_BOUNDS();
    return this.transform(t3), t3;
  }, i2.prototype.transform = function(t3) {
    for (var r2 = [], e2 = 0, i3 = this.commands; e2 < i3.length; e2++) {
      var a2 = t3(i3[e2]);
      Array.isArray(a2) ? r2.push.apply(r2, a2) : r2.push(a2);
    }
    return this.commands = r2, this;
  }, i2.encode = function(t3) {
    return e(t3);
  }, i2.parse = function(t3) {
    var r2 = new f(), e2 = [];
    return r2.parse(t3, e2), r2.finish(e2), e2;
  }, i2.CLOSE_PATH = 1, i2.MOVE_TO = 2, i2.HORIZ_LINE_TO = 4, i2.VERT_LINE_TO = 8, i2.LINE_TO = 16, i2.CURVE_TO = 32, i2.SMOOTH_CURVE_TO = 64, i2.QUAD_TO = 128, i2.SMOOTH_QUAD_TO = 256, i2.ARC = 512, i2.LINE_COMMANDS = i2.LINE_TO | i2.HORIZ_LINE_TO | i2.VERT_LINE_TO, i2.DRAWING_COMMANDS = i2.HORIZ_LINE_TO | i2.VERT_LINE_TO | i2.LINE_TO | i2.CURVE_TO | i2.SMOOTH_CURVE_TO | i2.QUAD_TO | i2.SMOOTH_QUAD_TO | i2.ARC, i2;
}(l), N = ((O = {})[_.MOVE_TO] = 2, O[_.LINE_TO] = 2, O[_.HORIZ_LINE_TO] = 1, O[_.VERT_LINE_TO] = 1, O[_.CLOSE_PATH] = 0, O[_.QUAD_TO] = 4, O[_.SMOOTH_QUAD_TO] = 2, O[_.CURVE_TO] = 6, O[_.SMOOTH_CURVE_TO] = 4, O[_.ARC] = 7, O);
var es_regexp_toString = {};
var regexpGetFlags;
var hasRequiredRegexpGetFlags;
function requireRegexpGetFlags() {
  if (hasRequiredRegexpGetFlags) return regexpGetFlags;
  hasRequiredRegexpGetFlags = 1;
  var call2 = requireFunctionCall();
  var hasOwn = requireHasOwnProperty();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var regExpFlags = requireRegexpFlags();
  var RegExpPrototype = RegExp.prototype;
  regexpGetFlags = function(R) {
    var flags = R.flags;
    return flags === void 0 && !("flags" in RegExpPrototype) && !hasOwn(R, "flags") && isPrototypeOf(RegExpPrototype, R) ? call2(regExpFlags, R) : flags;
  };
  return regexpGetFlags;
}
var hasRequiredEs_regexp_toString;
function requireEs_regexp_toString() {
  if (hasRequiredEs_regexp_toString) return es_regexp_toString;
  hasRequiredEs_regexp_toString = 1;
  var PROPER_FUNCTION_NAME = requireFunctionName().PROPER;
  var defineBuiltIn2 = requireDefineBuiltIn();
  var anObject2 = requireAnObject();
  var $toString = requireToString();
  var fails2 = requireFails();
  var getRegExpFlags = requireRegexpGetFlags();
  var TO_STRING = "toString";
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];
  var NOT_GENERIC = fails2(function() {
    return nativeToString.call({ source: "a", flags: "b" }) !== "/a/b";
  });
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name !== TO_STRING;
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn2(RegExpPrototype, TO_STRING, function toString2() {
      var R = anObject2(this);
      var pattern = $toString(R.source);
      var flags = $toString(getRegExpFlags(R));
      return "/" + pattern + "/" + flags;
    }, { unsafe: true });
  }
  return es_regexp_toString;
}
requireEs_regexp_toString();
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v2) => ({
  x: v2,
  y: v2
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value2, end2) {
  return max(start, min(value2, end2));
}
function evaluate(value2, param) {
  return typeof value2 === "function" ? value2(param) : value2;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x,
    right: x + width,
    bottom: y2 + height,
    x,
    y: y2
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config2) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config2;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
    }
  }
  return {
    x,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b) => a2.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y3
            } = _ref;
            return {
              x: x2,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y: y2
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value2) {
  if (!hasWindow()) {
    return false;
  }
  return value2 instanceof Node || value2 instanceof getWindow(value2).Node;
}
function isElement(value2) {
  if (!hasWindow()) {
    return false;
  }
  return value2 instanceof Element || value2 instanceof getWindow(value2).Element;
}
function isHTMLElement(value2) {
  if (!hasWindow()) {
    return false;
  }
  return value2 instanceof HTMLElement || value2 instanceof getWindow(value2).HTMLElement;
}
function isShadowRoot(value2) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value2 instanceof ShadowRoot || value2 instanceof getWindow(value2).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e2) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css2 = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((value2) => css2[value2] ? css2[value2] !== "none" : false) || (css2.containerType ? css2.containerType !== "normal" : false) || !webkit && (css2.backdropFilter ? css2.backdropFilter !== "none" : false) || !webkit && (css2.filter ? css2.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value2) => (css2.willChange || "").includes(value2)) || ["paint", "layout", "strict", "content"].some((value2) => (css2.contain || "").includes(value2));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css2 = getComputedStyle$1(element);
  let width = parseFloat(css2.width) || 0;
  let height = parseFloat(css2.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y2 = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x,
    y: y2
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css2 = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css2.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css2.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y: y2
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y2 = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y: y2
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html2 = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html2.scrollWidth, html2.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html2.scrollHeight, html2.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html2.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html2 = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html2.clientWidth;
  let height = html2.clientHeight;
  let x = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache2) {
  const cachedResult = cache2.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache2.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a2, b) {
  return a2.x === b.x && a2.y === b.y && a2.width === b.width && a2.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root2 = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root2.clientWidth - (left + width));
    const insetBottom = floor(root2.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries2) {
      const ratio = entries2[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root2.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const shift = shift$1;
const flip = flip$1;
const arrow = arrow$1;
const computePosition = (reference, floating, options) => {
  const cache2 = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache2
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
var papaparse_min$1 = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
var papaparse_min = papaparse_min$1.exports;
var hasRequiredPapaparse_min;
function requirePapaparse_min() {
  if (hasRequiredPapaparse_min) return papaparse_min$1.exports;
  hasRequiredPapaparse_min = 1;
  (function(module2, exports2) {
    ((e2, t2) => {
      module2.exports = t2();
    })(papaparse_min, function r2() {
      var n2 = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n2 ? n2 : {};
      var d, s2 = !n2.document && !!n2.postMessage, a2 = n2.IS_PAPA_WORKER || false, o2 = {}, h2 = 0, v2 = {};
      function u2(e2) {
        this._handle = null, this._finished = false, this._completed = false, this._halted = false, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = true, this._completeResults = { data: [], errors: [], meta: {} }, (function(e3) {
          var t2 = b(e3);
          t2.chunkSize = parseInt(t2.chunkSize), e3.step || e3.chunk || (t2.chunkSize = null);
          this._handle = new i2(t2), (this._handle.streamer = this)._config = t2;
        }).call(this, e2), this.parseChunk = function(t2, e3) {
          var i3 = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < i3) {
            let e4 = this._config.newline;
            e4 || (r3 = this._config.quoteChar || '"', e4 = this._handle.guessLineEndings(t2, r3)), t2 = [...t2.split(e4).slice(i3)].join(e4);
          }
          this.isFirstChunk && U(this._config.beforeFirstChunk) && void 0 !== (r3 = this._config.beforeFirstChunk(t2)) && (t2 = r3), this.isFirstChunk = false, this._halted = false;
          var i3 = this._partialLine + t2, r3 = (this._partialLine = "", this._handle.parse(i3, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            t2 = r3.meta.cursor, i3 = (this._finished || (this._partialLine = i3.substring(t2 - this._baseIndex), this._baseIndex = t2), r3 && r3.data && (this._rowCount += r3.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview);
            if (a2) n2.postMessage({ results: r3, workerId: v2.WORKER_ID, finished: i3 });
            else if (U(this._config.chunk) && !e3) {
              if (this._config.chunk(r3, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = true);
              this._completeResults = r3 = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(r3.data), this._completeResults.errors = this._completeResults.errors.concat(r3.errors), this._completeResults.meta = r3.meta), this._completed || !i3 || !U(this._config.complete) || r3 && r3.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = true), i3 || r3 && r3.meta.paused || this._nextChunk(), r3;
          }
          this._halted = true;
        }, this._sendError = function(e3) {
          U(this._config.error) ? this._config.error(e3) : a2 && this._config.error && n2.postMessage({ workerId: v2.WORKER_ID, error: e3, finished: false });
        };
      }
      function f2(e2) {
        var r3;
        (e2 = e2 || {}).chunkSize || (e2.chunkSize = v2.RemoteChunkSize), u2.call(this, e2), this._nextChunk = s2 ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(e3) {
          this._input = e3, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (r3 = new XMLHttpRequest(), this._config.withCredentials && (r3.withCredentials = this._config.withCredentials), s2 || (r3.onload = y2(this._chunkLoaded, this), r3.onerror = y2(this._chunkError, this)), r3.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s2), this._config.downloadRequestHeaders) {
              var e3, t2 = this._config.downloadRequestHeaders;
              for (e3 in t2) r3.setRequestHeader(e3, t2[e3]);
            }
            var i3;
            this._config.chunkSize && (i3 = this._start + this._config.chunkSize - 1, r3.setRequestHeader("Range", "bytes=" + this._start + "-" + i3));
            try {
              r3.send(this._config.downloadRequestBody);
            } catch (e4) {
              this._chunkError(e4.message);
            }
            s2 && 0 === r3.status && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          4 === r3.readyState && (r3.status < 200 || 400 <= r3.status ? this._chunkError() : (this._start += this._config.chunkSize || r3.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((e3) => null !== (e3 = e3.getResponseHeader("Content-Range")) ? parseInt(e3.substring(e3.lastIndexOf("/") + 1)) : -1)(r3), this.parseChunk(r3.responseText)));
        }, this._chunkError = function(e3) {
          e3 = r3.statusText || e3;
          this._sendError(new Error(e3));
        };
      }
      function l2(e2) {
        (e2 = e2 || {}).chunkSize || (e2.chunkSize = v2.LocalChunkSize), u2.call(this, e2);
        var i3, r3, n3 = "undefined" != typeof FileReader;
        this.stream = function(e3) {
          this._input = e3, r3 = e3.slice || e3.webkitSlice || e3.mozSlice, n3 ? ((i3 = new FileReader()).onload = y2(this._chunkLoaded, this), i3.onerror = y2(this._chunkError, this)) : i3 = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var e3 = this._input, t2 = (this._config.chunkSize && (t2 = Math.min(this._start + this._config.chunkSize, this._input.size), e3 = r3.call(e3, this._start, t2)), i3.readAsText(e3, this._config.encoding));
          n3 || this._chunkLoaded({ target: { result: t2 } });
        }, this._chunkLoaded = function(e3) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e3.target.result);
        }, this._chunkError = function() {
          this._sendError(i3.error);
        };
      }
      function c2(e2) {
        var i3;
        u2.call(this, e2 = e2 || {}), this.stream = function(e3) {
          return i3 = e3, this._nextChunk();
        }, this._nextChunk = function() {
          var e3, t2;
          if (!this._finished) return e3 = this._config.chunkSize, i3 = e3 ? (t2 = i3.substring(0, e3), i3.substring(e3)) : (t2 = i3, ""), this._finished = !i3, this.parseChunk(t2);
        };
      }
      function p2(e2) {
        u2.call(this, e2 = e2 || {});
        var t2 = [], i3 = true, r3 = false;
        this.pause = function() {
          u2.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          u2.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e3) {
          this._input = e3, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          r3 && 1 === t2.length && (this._finished = true);
        }, this._nextChunk = function() {
          this._checkIsFinished(), t2.length ? this.parseChunk(t2.shift()) : i3 = true;
        }, this._streamData = y2(function(e3) {
          try {
            t2.push("string" == typeof e3 ? e3 : e3.toString(this._config.encoding)), i3 && (i3 = false, this._checkIsFinished(), this.parseChunk(t2.shift()));
          } catch (e4) {
            this._streamError(e4);
          }
        }, this), this._streamError = y2(function(e3) {
          this._streamCleanUp(), this._sendError(e3);
        }, this), this._streamEnd = y2(function() {
          this._streamCleanUp(), r3 = true, this._streamData("");
        }, this), this._streamCleanUp = y2(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function i2(m3) {
        var n3, s3, a3, t2, o3 = Math.pow(2, 53), h3 = -o3, u3 = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, d2 = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, i3 = this, r3 = 0, f3 = 0, l3 = false, e2 = false, c3 = [], p3 = { data: [], errors: [], meta: {} };
        function y3(e3) {
          return "greedy" === m3.skipEmptyLines ? "" === e3.join("").trim() : 1 === e3.length && 0 === e3[0].length;
        }
        function g3() {
          if (p3 && a3 && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + v2.DefaultDelimiter + "'"), a3 = false), m3.skipEmptyLines && (p3.data = p3.data.filter(function(e4) {
            return !y3(e4);
          })), _3()) {
            let t3 = function(e4, t4) {
              U(m3.transformHeader) && (e4 = m3.transformHeader(e4, t4)), c3.push(e4);
            };
            if (p3) if (Array.isArray(p3.data[0])) {
              for (var e3 = 0; _3() && e3 < p3.data.length; e3++) p3.data[e3].forEach(t3);
              p3.data.splice(0, 1);
            } else p3.data.forEach(t3);
          }
          function i4(e4, t3) {
            for (var i5 = m3.header ? {} : [], r5 = 0; r5 < e4.length; r5++) {
              var n4 = r5, s4 = e4[r5], s4 = ((e5, t4) => ((e6) => (m3.dynamicTypingFunction && void 0 === m3.dynamicTyping[e6] && (m3.dynamicTyping[e6] = m3.dynamicTypingFunction(e6)), true === (m3.dynamicTyping[e6] || m3.dynamicTyping)))(e5) ? "true" === t4 || "TRUE" === t4 || "false" !== t4 && "FALSE" !== t4 && (((e6) => {
                if (u3.test(e6)) {
                  e6 = parseFloat(e6);
                  if (h3 < e6 && e6 < o3) return 1;
                }
              })(t4) ? parseFloat(t4) : d2.test(t4) ? new Date(t4) : "" === t4 ? null : t4) : t4)(n4 = m3.header ? r5 >= c3.length ? "__parsed_extra" : c3[r5] : n4, s4 = m3.transform ? m3.transform(s4, n4) : s4);
              "__parsed_extra" === n4 ? (i5[n4] = i5[n4] || [], i5[n4].push(s4)) : i5[n4] = s4;
            }
            return m3.header && (r5 > c3.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + c3.length + " fields but parsed " + r5, f3 + t3) : r5 < c3.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + c3.length + " fields but parsed " + r5, f3 + t3)), i5;
          }
          var r4;
          p3 && (m3.header || m3.dynamicTyping || m3.transform) && (r4 = 1, !p3.data.length || Array.isArray(p3.data[0]) ? (p3.data = p3.data.map(i4), r4 = p3.data.length) : p3.data = i4(p3.data, 0), m3.header && p3.meta && (p3.meta.fields = c3), f3 += r4);
        }
        function _3() {
          return m3.header && 0 === c3.length;
        }
        function k(e3, t3, i4, r4) {
          e3 = { type: e3, code: t3, message: i4 };
          void 0 !== r4 && (e3.row = r4), p3.errors.push(e3);
        }
        U(m3.step) && (t2 = m3.step, m3.step = function(e3) {
          p3 = e3, _3() ? g3() : (g3(), 0 !== p3.data.length && (r3 += e3.data.length, m3.preview && r3 > m3.preview ? s3.abort() : (p3.data = p3.data[0], t2(p3, i3))));
        }), this.parse = function(e3, t3, i4) {
          var r4 = m3.quoteChar || '"', r4 = (m3.newline || (m3.newline = this.guessLineEndings(e3, r4)), a3 = false, m3.delimiter ? U(m3.delimiter) && (m3.delimiter = m3.delimiter(e3), p3.meta.delimiter = m3.delimiter) : ((r4 = ((e4, t4, i5, r5, n4) => {
            var s4, a4, o4, h4;
            n4 = n4 || [",", "	", "|", ";", v2.RECORD_SEP, v2.UNIT_SEP];
            for (var u4 = 0; u4 < n4.length; u4++) {
              for (var d3, f4 = n4[u4], l4 = 0, c4 = 0, p4 = 0, g4 = (o4 = void 0, new E({ comments: r5, delimiter: f4, newline: t4, preview: 10 }).parse(e4)), _4 = 0; _4 < g4.data.length; _4++) i5 && y3(g4.data[_4]) ? p4++ : (d3 = g4.data[_4].length, c4 += d3, void 0 === o4 ? o4 = d3 : 0 < d3 && (l4 += Math.abs(d3 - o4), o4 = d3));
              0 < g4.data.length && (c4 /= g4.data.length - p4), (void 0 === a4 || l4 <= a4) && (void 0 === h4 || h4 < c4) && 1.99 < c4 && (a4 = l4, s4 = f4, h4 = c4);
            }
            return { successful: !!(m3.delimiter = s4), bestDelimiter: s4 };
          })(e3, m3.newline, m3.skipEmptyLines, m3.comments, m3.delimitersToGuess)).successful ? m3.delimiter = r4.bestDelimiter : (a3 = true, m3.delimiter = v2.DefaultDelimiter), p3.meta.delimiter = m3.delimiter), b(m3));
          return m3.preview && m3.header && r4.preview++, n3 = e3, s3 = new E(r4), p3 = s3.parse(n3, t3, i4), g3(), l3 ? { meta: { paused: true } } : p3 || { meta: { paused: false } };
        }, this.paused = function() {
          return l3;
        }, this.pause = function() {
          l3 = true, s3.abort(), n3 = U(m3.chunk) ? "" : n3.substring(s3.getCharIndex());
        }, this.resume = function() {
          i3.streamer._halted ? (l3 = false, i3.streamer.parseChunk(n3, true)) : setTimeout(i3.resume, 3);
        }, this.aborted = function() {
          return e2;
        }, this.abort = function() {
          e2 = true, s3.abort(), p3.meta.aborted = true, U(m3.complete) && m3.complete(p3), n3 = "";
        }, this.guessLineEndings = function(e3, t3) {
          e3 = e3.substring(0, 1048576);
          var t3 = new RegExp(P2(t3) + "([^]*?)" + P2(t3), "gm"), i4 = (e3 = e3.replace(t3, "")).split("\r"), t3 = e3.split("\n"), e3 = 1 < t3.length && t3[0].length < i4[0].length;
          if (1 === i4.length || e3) return "\n";
          for (var r4 = 0, n4 = 0; n4 < i4.length; n4++) "\n" === i4[n4][0] && r4++;
          return r4 >= i4.length / 2 ? "\r\n" : "\r";
        };
      }
      function P2(e2) {
        return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function E(C) {
        var S2 = (C = C || {}).delimiter, O2 = C.newline, x = C.comments, I = C.step, A2 = C.preview, T2 = C.fastMode, D = null, L2 = false, F = null == C.quoteChar ? '"' : C.quoteChar, j = F;
        if (void 0 !== C.escapeChar && (j = C.escapeChar), ("string" != typeof S2 || -1 < v2.BAD_DELIMITERS.indexOf(S2)) && (S2 = ","), x === S2) throw new Error("Comment character same as delimiter");
        true === x ? x = "#" : ("string" != typeof x || -1 < v2.BAD_DELIMITERS.indexOf(x)) && (x = false), "\n" !== O2 && "\r" !== O2 && "\r\n" !== O2 && (O2 = "\n");
        var z = 0, M = false;
        this.parse = function(i3, t2, r3) {
          if ("string" != typeof i3) throw new Error("Input must be a string");
          var n3 = i3.length, e2 = S2.length, s3 = O2.length, a3 = x.length, o3 = U(I), h3 = [], u3 = [], d2 = [], f3 = z = 0;
          if (!i3) return w2();
          if (T2 || false !== T2 && -1 === i3.indexOf(F)) {
            for (var l3 = i3.split(O2), c3 = 0; c3 < l3.length; c3++) {
              if (d2 = l3[c3], z += d2.length, c3 !== l3.length - 1) z += O2.length;
              else if (r3) return w2();
              if (!x || d2.substring(0, a3) !== x) {
                if (o3) {
                  if (h3 = [], k(d2.split(S2)), R(), M) return w2();
                } else k(d2.split(S2));
                if (A2 && A2 <= c3) return h3 = h3.slice(0, A2), w2(true);
              }
            }
            return w2();
          }
          for (var p3 = i3.indexOf(S2, z), g3 = i3.indexOf(O2, z), _3 = new RegExp(P2(j) + P2(F), "g"), m3 = i3.indexOf(F, z); ; ) if (i3[z] === F) for (m3 = z, z++; ; ) {
            if (-1 === (m3 = i3.indexOf(F, m3 + 1))) return r3 || u3.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: h3.length, index: z }), E2();
            if (m3 === n3 - 1) return E2(i3.substring(z, m3).replace(_3, F));
            if (F === j && i3[m3 + 1] === j) m3++;
            else if (F === j || 0 === m3 || i3[m3 - 1] !== j) {
              -1 !== p3 && p3 < m3 + 1 && (p3 = i3.indexOf(S2, m3 + 1));
              var y3 = v3(-1 === (g3 = -1 !== g3 && g3 < m3 + 1 ? i3.indexOf(O2, m3 + 1) : g3) ? p3 : Math.min(p3, g3));
              if (i3.substr(m3 + 1 + y3, e2) === S2) {
                d2.push(i3.substring(z, m3).replace(_3, F)), i3[z = m3 + 1 + y3 + e2] !== F && (m3 = i3.indexOf(F, z)), p3 = i3.indexOf(S2, z), g3 = i3.indexOf(O2, z);
                break;
              }
              y3 = v3(g3);
              if (i3.substring(m3 + 1 + y3, m3 + 1 + y3 + s3) === O2) {
                if (d2.push(i3.substring(z, m3).replace(_3, F)), b2(m3 + 1 + y3 + s3), p3 = i3.indexOf(S2, z), m3 = i3.indexOf(F, z), o3 && (R(), M)) return w2();
                if (A2 && h3.length >= A2) return w2(true);
                break;
              }
              u3.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: h3.length, index: z }), m3++;
            }
          }
          else if (x && 0 === d2.length && i3.substring(z, z + a3) === x) {
            if (-1 === g3) return w2();
            z = g3 + s3, g3 = i3.indexOf(O2, z), p3 = i3.indexOf(S2, z);
          } else if (-1 !== p3 && (p3 < g3 || -1 === g3)) d2.push(i3.substring(z, p3)), z = p3 + e2, p3 = i3.indexOf(S2, z);
          else {
            if (-1 === g3) break;
            if (d2.push(i3.substring(z, g3)), b2(g3 + s3), o3 && (R(), M)) return w2();
            if (A2 && h3.length >= A2) return w2(true);
          }
          return E2();
          function k(e3) {
            h3.push(e3), f3 = z;
          }
          function v3(e3) {
            var t3 = 0;
            return t3 = -1 !== e3 && (e3 = i3.substring(m3 + 1, e3)) && "" === e3.trim() ? e3.length : t3;
          }
          function E2(e3) {
            return r3 || (void 0 === e3 && (e3 = i3.substring(z)), d2.push(e3), z = n3, k(d2), o3 && R()), w2();
          }
          function b2(e3) {
            z = e3, k(d2), d2 = [], g3 = i3.indexOf(O2, z);
          }
          function w2(e3) {
            if (C.header && !t2 && h3.length && !L2) {
              var s4 = h3[0], a4 = /* @__PURE__ */ Object.create(null), o4 = new Set(s4);
              let n4 = false;
              for (let r4 = 0; r4 < s4.length; r4++) {
                let i4 = s4[r4];
                if (a4[i4 = U(C.transformHeader) ? C.transformHeader(i4, r4) : i4]) {
                  let e4, t3 = a4[i4];
                  for (; e4 = i4 + "_" + t3, t3++, o4.has(e4); ) ;
                  o4.add(e4), s4[r4] = e4, a4[i4]++, n4 = true, (D = null === D ? {} : D)[e4] = i4;
                } else a4[i4] = 1, s4[r4] = i4;
                o4.add(i4);
              }
              n4 && console.warn("Duplicate headers found and renamed."), L2 = true;
            }
            return { data: h3, errors: u3, meta: { delimiter: S2, linebreak: O2, aborted: M, truncated: !!e3, cursor: f3 + (t2 || 0), renamedHeaders: D } };
          }
          function R() {
            I(w2()), h3 = [], u3 = [];
          }
        }, this.abort = function() {
          M = true;
        }, this.getCharIndex = function() {
          return z;
        };
      }
      function g2(e2) {
        var t2 = e2.data, i3 = o2[t2.workerId], r3 = false;
        if (t2.error) i3.userError(t2.error, t2.file);
        else if (t2.results && t2.results.data) {
          var n3 = { abort: function() {
            r3 = true, _2(t2.workerId, { data: [], errors: [], meta: { aborted: true } });
          }, pause: m2, resume: m2 };
          if (U(i3.userStep)) {
            for (var s3 = 0; s3 < t2.results.data.length && (i3.userStep({ data: t2.results.data[s3], errors: t2.results.errors, meta: t2.results.meta }, n3), !r3); s3++) ;
            delete t2.results;
          } else U(i3.userChunk) && (i3.userChunk(t2.results, n3, t2.file), delete t2.results);
        }
        t2.finished && !r3 && _2(t2.workerId, t2.results);
      }
      function _2(e2, t2) {
        var i3 = o2[e2];
        U(i3.userComplete) && i3.userComplete(t2), i3.terminate(), delete o2[e2];
      }
      function m2() {
        throw new Error("Not implemented.");
      }
      function b(e2) {
        if ("object" != typeof e2 || null === e2) return e2;
        var t2, i3 = Array.isArray(e2) ? [] : {};
        for (t2 in e2) i3[t2] = b(e2[t2]);
        return i3;
      }
      function y2(e2, t2) {
        return function() {
          e2.apply(t2, arguments);
        };
      }
      function U(e2) {
        return "function" == typeof e2;
      }
      return v2.parse = function(e2, t2) {
        var i3 = (t2 = t2 || {}).dynamicTyping || false;
        U(i3) && (t2.dynamicTypingFunction = i3, i3 = {});
        if (t2.dynamicTyping = i3, t2.transform = !!U(t2.transform) && t2.transform, !t2.worker || !v2.WORKERS_SUPPORTED) return i3 = null, v2.NODE_STREAM_INPUT, "string" == typeof e2 ? (e2 = ((e3) => 65279 !== e3.charCodeAt(0) ? e3 : e3.slice(1))(e2), i3 = new (t2.download ? f2 : c2)(t2)) : true === e2.readable && U(e2.read) && U(e2.on) ? i3 = new p2(t2) : (n2.File && e2 instanceof File || e2 instanceof Object) && (i3 = new l2(t2)), i3.stream(e2);
        (i3 = (() => {
          var e3;
          return !!v2.WORKERS_SUPPORTED && (e3 = (() => {
            var e4 = n2.URL || n2.webkitURL || null, t3 = r2.toString();
            return v2.BLOB_URL || (v2.BLOB_URL = e4.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", t3, ")();"], { type: "text/javascript" })));
          })(), (e3 = new n2.Worker(e3)).onmessage = g2, e3.id = h2++, o2[e3.id] = e3);
        })()).userStep = t2.step, i3.userChunk = t2.chunk, i3.userComplete = t2.complete, i3.userError = t2.error, t2.step = U(t2.step), t2.chunk = U(t2.chunk), t2.complete = U(t2.complete), t2.error = U(t2.error), delete t2.worker, i3.postMessage({ input: e2, config: t2, workerId: i3.id });
      }, v2.unparse = function(e2, t2) {
        var n3 = false, _3 = true, m3 = ",", y3 = "\r\n", s3 = '"', a3 = s3 + s3, i3 = false, r3 = null, o3 = false, h3 = ((() => {
          if ("object" == typeof t2) {
            if ("string" != typeof t2.delimiter || v2.BAD_DELIMITERS.filter(function(e3) {
              return -1 !== t2.delimiter.indexOf(e3);
            }).length || (m3 = t2.delimiter), "boolean" != typeof t2.quotes && "function" != typeof t2.quotes && !Array.isArray(t2.quotes) || (n3 = t2.quotes), "boolean" != typeof t2.skipEmptyLines && "string" != typeof t2.skipEmptyLines || (i3 = t2.skipEmptyLines), "string" == typeof t2.newline && (y3 = t2.newline), "string" == typeof t2.quoteChar && (s3 = t2.quoteChar), "boolean" == typeof t2.header && (_3 = t2.header), Array.isArray(t2.columns)) {
              if (0 === t2.columns.length) throw new Error("Option columns is empty");
              r3 = t2.columns;
            }
            void 0 !== t2.escapeChar && (a3 = t2.escapeChar + s3), t2.escapeFormulae instanceof RegExp ? o3 = t2.escapeFormulae : "boolean" == typeof t2.escapeFormulae && t2.escapeFormulae && (o3 = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(P2(s3), "g"));
        "string" == typeof e2 && (e2 = JSON.parse(e2));
        if (Array.isArray(e2)) {
          if (!e2.length || Array.isArray(e2[0])) return u3(null, e2, i3);
          if ("object" == typeof e2[0]) return u3(r3 || Object.keys(e2[0]), e2, i3);
        } else if ("object" == typeof e2) return "string" == typeof e2.data && (e2.data = JSON.parse(e2.data)), Array.isArray(e2.data) && (e2.fields || (e2.fields = e2.meta && e2.meta.fields || r3), e2.fields || (e2.fields = Array.isArray(e2.data[0]) ? e2.fields : "object" == typeof e2.data[0] ? Object.keys(e2.data[0]) : []), Array.isArray(e2.data[0]) || "object" == typeof e2.data[0] || (e2.data = [e2.data])), u3(e2.fields || [], e2.data || [], i3);
        throw new Error("Unable to serialize unrecognized input");
        function u3(e3, t3, i4) {
          var r4 = "", n4 = ("string" == typeof e3 && (e3 = JSON.parse(e3)), "string" == typeof t3 && (t3 = JSON.parse(t3)), Array.isArray(e3) && 0 < e3.length), s4 = !Array.isArray(t3[0]);
          if (n4 && _3) {
            for (var a4 = 0; a4 < e3.length; a4++) 0 < a4 && (r4 += m3), r4 += k(e3[a4], a4);
            0 < t3.length && (r4 += y3);
          }
          for (var o4 = 0; o4 < t3.length; o4++) {
            var h4 = (n4 ? e3 : t3[o4]).length, u4 = false, d2 = n4 ? 0 === Object.keys(t3[o4]).length : 0 === t3[o4].length;
            if (i4 && !n4 && (u4 = "greedy" === i4 ? "" === t3[o4].join("").trim() : 1 === t3[o4].length && 0 === t3[o4][0].length), "greedy" === i4 && n4) {
              for (var f3 = [], l3 = 0; l3 < h4; l3++) {
                var c3 = s4 ? e3[l3] : l3;
                f3.push(t3[o4][c3]);
              }
              u4 = "" === f3.join("").trim();
            }
            if (!u4) {
              for (var p3 = 0; p3 < h4; p3++) {
                0 < p3 && !d2 && (r4 += m3);
                var g3 = n4 && s4 ? e3[p3] : p3;
                r4 += k(t3[o4][g3], p3);
              }
              o4 < t3.length - 1 && (!i4 || 0 < h4 && !d2) && (r4 += y3);
            }
          }
          return r4;
        }
        function k(e3, t3) {
          var i4, r4;
          return null == e3 ? "" : e3.constructor === Date ? JSON.stringify(e3).slice(1, 25) : (r4 = false, o3 && "string" == typeof e3 && o3.test(e3) && (e3 = "'" + e3, r4 = true), i4 = e3.toString().replace(h3, a3), (r4 = r4 || true === n3 || "function" == typeof n3 && n3(e3, t3) || Array.isArray(n3) && n3[t3] || ((e4, t4) => {
            for (var i5 = 0; i5 < t4.length; i5++) if (-1 < e4.indexOf(t4[i5])) return true;
            return false;
          })(i4, v2.BAD_DELIMITERS) || -1 < i4.indexOf(m3) || " " === i4.charAt(0) || " " === i4.charAt(i4.length - 1)) ? s3 + i4 + s3 : i4);
        }
      }, v2.RECORD_SEP = String.fromCharCode(30), v2.UNIT_SEP = String.fromCharCode(31), v2.BYTE_ORDER_MARK = "\uFEFF", v2.BAD_DELIMITERS = ["\r", "\n", '"', v2.BYTE_ORDER_MARK], v2.WORKERS_SUPPORTED = !s2 && !!n2.Worker, v2.NODE_STREAM_INPUT = 1, v2.LocalChunkSize = 10485760, v2.RemoteChunkSize = 5242880, v2.DefaultDelimiter = ",", v2.Parser = E, v2.ParserHandle = i2, v2.NetworkStreamer = f2, v2.FileStreamer = l2, v2.StringStreamer = c2, v2.ReadableStreamStreamer = p2, n2.jQuery && ((d = n2.jQuery).fn.parse = function(o3) {
        var i3 = o3.config || {}, h3 = [];
        return this.each(function(e3) {
          if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && n2.FileReader) || !this.files || 0 === this.files.length) return true;
          for (var t2 = 0; t2 < this.files.length; t2++) h3.push({ file: this.files[t2], inputElem: this, instanceConfig: d.extend({}, i3) });
        }), e2(), this;
        function e2() {
          if (0 === h3.length) U(o3.complete) && o3.complete();
          else {
            var e3, t2, i4, r3, n3 = h3[0];
            if (U(o3.before)) {
              var s3 = o3.before(n3.file, n3.inputElem);
              if ("object" == typeof s3) {
                if ("abort" === s3.action) return e3 = "AbortError", t2 = n3.file, i4 = n3.inputElem, r3 = s3.reason, void (U(o3.error) && o3.error({ name: e3 }, t2, i4, r3));
                if ("skip" === s3.action) return void u3();
                "object" == typeof s3.config && (n3.instanceConfig = d.extend(n3.instanceConfig, s3.config));
              } else if ("skip" === s3) return void u3();
            }
            var a3 = n3.instanceConfig.complete;
            n3.instanceConfig.complete = function(e4) {
              U(a3) && a3(e4, n3.file, n3.inputElem), u3();
            }, v2.parse(n3.file, n3.instanceConfig);
          }
        }
        function u3() {
          h3.splice(0, 1), e2();
        }
      }), a2 && (n2.onmessage = function(e2) {
        e2 = e2.data;
        void 0 === v2.WORKER_ID && e2 && (v2.WORKER_ID = e2.workerId);
        "string" == typeof e2.input ? n2.postMessage({ workerId: v2.WORKER_ID, results: v2.parse(e2.input, e2.config), finished: true }) : (n2.File && e2.input instanceof File || e2.input instanceof Object) && (e2 = v2.parse(e2.input, e2.config)) && n2.postMessage({ workerId: v2.WORKER_ID, results: e2, finished: true });
      }), (f2.prototype = Object.create(u2.prototype)).constructor = f2, (l2.prototype = Object.create(u2.prototype)).constructor = l2, (c2.prototype = Object.create(c2.prototype)).constructor = c2, (p2.prototype = Object.create(u2.prototype)).constructor = p2, v2;
    });
  })(papaparse_min$1);
  return papaparse_min$1.exports;
}
var papaparse_minExports = requirePapaparse_min();
const Papa = /* @__PURE__ */ getDefaultExportFromCjs(papaparse_minExports);
export {
  getNodeName as A,
  computePosition as B,
  arrow as C,
  library$1 as D,
  faXmark as E,
  Fraction as F,
  faExpand as G,
  faExpand$1 as H,
  faPlusLarge as I,
  JSZip as J,
  faPlusLarge$1 as K,
  faArrowsLeftRight as L,
  faArrowsUpDown as M,
  faHammer as N,
  faSprayCan as O,
  Papa as P,
  faImage as Q,
  RGBColor$1 as R,
  faFiles as S,
  faTrash as T,
  faCalculator as U,
  purify_es as V,
  _asyncToGenerator as _,
  isNaN$2 as a,
  createDebug$1 as b,
  config as c,
  defaults as d,
  expect as e,
  createDebug as f,
  get as g,
  has as h,
  isEqual as i,
  autoUpdate as j,
  shift as k,
  flip as l,
  lookup as m,
  _ as n,
  offset as o,
  purify as p,
  _defineProperty as q,
  requestAnimationFrame$1 as r,
  set as s,
  _typeof as t,
  unzlibSync as u,
  v4 as v,
  parse$1$1 as w,
  icon as x,
  isNode as y,
  zlibSync as z
};
//# sourceMappingURL=vendor-Bl85u5aa.js.map

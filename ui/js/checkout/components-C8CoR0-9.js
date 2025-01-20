var Un = Object.defineProperty;
var jn = (i, t, e) => t in i ? Un(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => jn(i, typeof t != "symbol" ? t + "" : t, e);
import { d as Oe, o as y, c as C, F as Se, r as Te, n as xe, a as ke, b as A, t as ie, w as es, v as ts, e as zn, f as H, g as B, h as ee, i as $e, j as at, k as Ke, l as is, m as oi, u as k, p as Vt, q as ge, s as ss, x as Vn, y as Gi, z as Bt, A as we, B as Yn, C as It, D as Xn, E as Kn, G as Zn, H as Jn, I as dt, J as Qn, T as er, K as Xs, L as tr, M as xs, N as ir, O as sr, P as nr, Q as rr, R as or } from "./vendor-vue-B39CQo2S.js";
import { u as Ks, a as Hi, b as Zs, c as lr, d as ar, e as ur } from "./composables-C2YFngV_.js";
import { l as tt, a as Ai, b as Di, c as Js, d as Qs, s as Re, e as li, r as Mt, f as en, p as cr, g as hr, S as dr, h as fr, i as pr, j as gr, k as mr } from "./vendor-d3-BrvhDTRC.js";
import { c as yr, a as tn, b as Je, F as ui, g as Yt, v as ns, i as fi, t as Ei, d as ri, e as Ii, h as vr, s as br, f as wr, o as Sr, j as kr, k as xr, P as Cr } from "./vendor-UJdh33XB.js";
import { i as $r } from "./vendor-i18n-D9hV6ZJH.js";
function pi(i) {
  return !(!i || typeof i != "string");
}
function Pr(i) {
  return !pi(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function jt(i) {
  return pi(i) ? i.trim().split(" ").map((t) => Ie(t)).join(" ") : "";
}
function Ie(i) {
  return pi(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function Ni(i) {
  return pi(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function Lr(i, t = 100) {
  return pi(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let sn = $r;
function $c(i) {
  sn = i;
}
function We(i, t) {
  return sn.t(i, { ns: ["main", "errors"], ...t });
}
const Ut = 1e-10, Ir = 10, Tr = Number.MAX_SAFE_INTEGER, Or = 4294967295, _e = (i) => typeof i == "number" && Number.isFinite(i), Ti = (i) => Array.isArray(i) && i.length > 0;
function si(i, t, e = Ut) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Ar = {
  greaterThan: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) >= 0,
  lessThan: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) <= 0,
  equalTo: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) === 0
};
function Dr(i) {
  return _e(i) ? Number.isInteger(i) ? i : Number(i.toFixed(Ir)) : !1;
}
function Er(i) {
  if (!_e(i) || i < 0 || i > Tr)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Or + 1) * i);
}
function Rr(i, t) {
  if (!Ti(i))
    throw new Error("Invalid array parameter");
  if (!_e(t) || t < 0 || t > i.length)
    throw new Error("Invalid size parameter");
  const e = i.slice(), s = i.length - t;
  for (let n = i.length - 1; n >= s; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e.slice(s);
}
class ki {
  static calculateMean(t) {
    if (!Ti(t))
      throw new Error("Invalid input array");
    return t.reduce((e, s) => e + s, 0) / t.length;
  }
  static calculateStandardDeviation(t, e = null) {
    if (!Ti(t))
      throw new Error("Invalid input array");
    const s = e ?? this.calculateMean(t), n = t.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / t.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(t) {
    if (!Ti(t))
      throw new Error("Invalid input array");
    const e = this.calculateMean(t);
    if (e === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(t, e) / e;
  }
}
const ce = {
  ...Ar,
  isNumber: _e,
  round: Dr,
  getRandom: Er,
  getRandomSample: Rr,
  calculateStandardDeviation: ki.calculateStandardDeviation.bind(ki),
  calculateCoefficientOfVariation: ki.calculateCoefficientOfVariation.bind(ki)
}, Ri = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function Cs(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function $s(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Ps(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const ve = (i, t, e) => t in i ? i[t] : (console.warn(Ri.missingProperty(String(t), e)), null), xi = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, Wt = (i, t) => {
  if (!Cs(i) || !Cs(t))
    return console.warn(Ri.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, nt = (i, t) => {
  const e = ve(i, "id", "first item"), s = ve(t, "id", "second item");
  if (e === null || s === null) return 0;
  const n = e.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function rt(i) {
  const t = Array.isArray(i[0]) ? i.map(([e, s]) => ({ key: e, direction: s })) : i;
  return (e, s) => {
    for (const { key: n, direction: r } of t) {
      const o = ve(e, n, "first item"), l = ve(s, n, "second item");
      if (!(o === null || l === null) && o !== l)
        return r === "desc" ? o < l ? 1 : -1 : o < l ? -1 : 1;
    }
    return 0;
  };
}
const Mi = {
  // Dimension-based sorts
  WDLD: rt([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: rt([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: rt([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: rt([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: rt([["w", "desc"]]),
  LD: rt([["l", "desc"]]),
  // ID-based sorts
  LDIDA: xi(
    rt([["l", "desc"]]),
    nt
  ),
  WDIDA: xi(
    rt([["w", "desc"]]),
    nt
  ),
  // Area-based sorts
  AD: (i, t) => -Wt(i, t),
  AA: Wt,
  AAID: xi(
    Wt,
    nt
  ),
  ADID: xi(
    (i, t) => -Wt(i, t),
    nt
  ),
  // ID sorts
  ID: nt,
  IDDesc: (i, t) => -nt(i, t),
  StockID: (i, t) => {
    const e = ve(i, "stock", "first item"), s = ve(t, "stock", "second item");
    return !e || !s ? 0 : nt(e, s);
  },
  StockIDAD: (i, t) => {
    const e = ve(i, "stock", "first item"), s = ve(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = nt(e, s);
    return n !== 0 ? n : -Wt(i, t);
  },
  // Position sorts
  YX: rt([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: rt([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (i, t) => {
    const e = ve(i, "placementOrder", "first item") ?? 0, s = ve(t, "placementOrder", "second item") ?? 0;
    return e - s;
  },
  typePlacementOrder: (i, t) => {
    const e = ve(i, "offcut", "first item"), s = ve(t, "offcut", "second item"), n = ve(i, "placementOrder", "first item") ?? 0, r = ve(t, "placementOrder", "second item") ?? 0;
    return e && !s ? 1 : !e && s ? -1 : n - r;
  },
  stockIDTypePlacementOrder: (i, t) => {
    const e = ve(i, "stock", "first item"), s = ve(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = nt(e, s);
    if (n !== 0) return n;
    const r = ve(i, "offcut", "first item"), o = ve(t, "offcut", "second item");
    if (r && !o) return 1;
    if (!r && o) return -1;
    const l = ve(i, "placementOrder", "first item") ?? 0, a = ve(t, "placementOrder", "second item") ?? 0;
    return l - a;
  },
  offcutPlacementOrder: (i, t) => {
    const e = ve(i, "stock", "first item"), s = ve(t, "stock", "second item");
    if (!(e != null && e.id) || !(s != null && s.id)) return 0;
    const n = nt(e, s);
    if (n !== 0) return n;
    if ("placementOrder" in i && "placementOrder" in t) {
      const r = ve(i, "placementOrder", "first item") ?? 0, o = ve(t, "placementOrder", "second item") ?? 0;
      return r - o;
    }
    return 0;
  },
  groupPlacementOrder: (i, t) => {
    const e = ve(i, "placementOrder", "first item") ?? 0, s = ve(t, "placementOrder", "second item") ?? 0, n = e - s;
    if (n !== 0) return n;
    const r = ve(i, "groupPlacementOrder", "first item") ?? 0, o = ve(t, "groupPlacementOrder", "second item") ?? 0;
    return r - o;
  },
  // Array manipulation utilities
  swapFirstTwo(i) {
    i.length < 2 || ([i[0], i[1]] = [i[1], i[0]]);
  },
  shuffle(i) {
    for (let t = i.length - 1; t > 0; t--) {
      const e = Math.floor(Math.random() * (t + 1));
      [i[t], i[e]] = [i[e], i[t]];
    }
  },
  // Aspect and area sorts
  aspect(i, t) {
    return !$s(i) || !$s(t) ? (console.warn(Ri.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Ps(t) || !Ps(e) ? (console.warn(Ri.missingLongSide), 0) : e[i] === t[i] ? -Wt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function Mr(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function _t(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function Fr(i) {
  return i ? i === "x" ? "y" : "x" : null;
}
class zt {
  constructor(t) {
    c(this, "x1");
    c(this, "x2");
    c(this, "y1");
    c(this, "y2");
    c(this, "dimension");
    c(this, "direction");
    c(this, "shapeCollisions");
    c(this, "origin");
    c(this, "type");
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = _r(this), this.direction = qr(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
}
function $t(i, t, e, s, n = null, r = null) {
  return new zt({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function _r(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function qr(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function Br(i, t) {
  const e = i.getCorners(), s = {};
  return e.bottomLeft.x > 0 && e.bottomLeft.y > 0 && (s.bottomLeftDown = $t(
    e.bottomLeft.x,
    e.bottomLeft.y,
    e.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = $t(
    e.bottomLeft.x,
    e.bottomLeft.y,
    0,
    e.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), e.topLeft.x > 0 && e.topLeft.y < t.w && (s.topLeftLeft = $t(
    e.topLeft.x,
    e.topLeft.y,
    0,
    e.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = $t(
    e.topLeft.x,
    e.topLeft.y,
    e.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), e.topRight.y < t.w && e.topRight.x < t.l && (s.topRightTop = $t(
    e.topRight.x,
    e.topRight.y,
    e.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = $t(
    e.topRight.x,
    e.topRight.y,
    t.l,
    e.topRight.y,
    "topRight",
    "topRightRight"
  )), e.bottomRight.x < t.l && e.bottomRight.y > 0 && (s.bottomRightRight = $t(
    e.bottomRight.x,
    e.bottomRight.y,
    t.l,
    e.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = $t(
    e.bottomRight.x,
    e.bottomRight.y,
    e.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
const Gr = {
  cacheResults: !0,
  successMetric: "efficiency",
  calculateCuts: !0,
  stack: !0,
  findDuplicatePatterns: !0,
  //dev specific
  captureProfile: !1,
  runTests: !1,
  throwErrorsOnFailedTests: !1,
  // recordPlacementPositions: isDevOrTest ? true : false,
  sample: {
    enable: !0,
    groupSize: 6,
    efficiency: 4,
    guillotine: 2
  },
  priority: {
    enable: !0,
    variationThreshold: 0.3
  },
  secondRun: {
    enabled: !1,
    efficiencyCutoff: 0.5,
    stack: !1
  },
  efficiency: {
    tidy: !1,
    //[] issue with picking winner when tidy is enabled
    rayCasting: !0
  },
  groups: {
    shapeAreaCutOff: 0.7,
    tolerance: 0.04,
    guillotine: {
      strips: !0,
      segments: !0,
      runWithout: !1
    },
    efficiency: {
      firstShapes: !0,
      position: !0,
      limit: 100
    }
  },
  guillotine: {
    viableShapeArea: 0.5,
    secondPass: !0,
    strips: {
      rearrange: !0,
      efficiencyThreshold: 0.7
    },
    stripShapes: {
      allocation: !0,
      iterations: 6,
      numPriorityShapes: 1
    }
  },
  subset: {
    shuffles: 80,
    //this is the default - can be overwritten (for example when creating groups)
    guillotine: {
      shuffles: 80
    },
    efficiency: {
      limit: 0.5
    }
  },
  evo: {
    disable: !1,
    stockLimit: 40
  }
};
yr.showDiff = !0;
tn("tests");
tn("timers");
function nn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function rn(i = [], t = null) {
  i != null && i.length && nn() && Gr.runTests;
}
Je.colors = [
  2,
  3,
  4,
  5,
  7,
  9,
  10,
  11,
  14,
  159
];
Je("logs");
Je("cuts");
Je("guillotine");
Je("results");
Je("scoring");
Je("calculations");
Je("subset");
Je("secondRun");
Je("stack");
const Hr = Je("errors");
Je("allStock");
Hr.color = 1;
function Nr(i) {
  if (i != null && i.dimension)
    switch (i.dimension) {
      case "l":
        return i.x2 - i.x1;
      case "w":
        return i.y2 - i.y1;
    }
  switch (i.type) {
    case "top":
    case "bottom":
      return i.x2 - i.x1;
    case "left":
    case "right":
      return i.y2 - i.y1;
  }
  return 0;
}
class Wi extends zt {
  //used to mark for removal
  constructor(e) {
    var s, n, r, o;
    e.x2 < e.x1 && ([e.x1, e.x2] = [e.x2, e.x1]), e.y2 < e.y1 && ([e.y1, e.y2] = [e.y2, e.y1]);
    super(e);
    c(this, "stock");
    c(this, "stockId");
    c(this, "guillotine");
    c(this, "guillotineData");
    c(this, "isTrim");
    c(this, "distances");
    c(this, "beamTrimX1");
    c(this, "beamTrimY1");
    c(this, "type", null);
    c(this, "remove");
    x(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Dt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.guillotine = e.guillotine, this.guillotineData = x(e.guillotineData) ? e.guillotineData : {}, this.guillotineData.ptxDummyCut = (e == null ? void 0 : e.ptxDummyCut) || ((o = e == null ? void 0 : e.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = x(e.isTrim) ? e.isTrim : !1, this.distances = x(e.distances) ? e.distances : {}, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const e = structuredClone(this);
    return new Wi(e);
  }
  getCoordinates() {
    return {
      x1: this.x1,
      x2: this.x2,
      y1: this.y1,
      y2: this.y2
    };
  }
  trim() {
    this.dimension === "l" ? (this.x1 = this.x1 < 0 ? 0 : this.x1, this.x2 = this.x2 > this.stock.l ? this.stock.l : this.x2) : this.dimension === "w" && (this.y1 = this.y1 < 0 ? 0 : this.y1, this.y2 = this.y2 > this.stock.w ? this.stock.w : this.y2);
  }
  lookupDirectionByType(e) {
    const n = {
      top: "l",
      bottom: "l",
      left: "w",
      right: "w"
    }[e];
    if (n) return n;
    throw new Error("no direction found in lookupDirectionByType");
  }
  isInsideStock() {
    switch (this.type) {
      case "bottom":
        return ce.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return ce.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return ce.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return ce.lessThan(
          this.x1 - this.stock.getBladeWidth() / 2,
          this.stock.l
        );
      default:
        return !0;
    }
  }
  /**
      * the cuts are visualised differently from their exact dimensions
      * @param {string} coord
      */
  getVisCoords(e) {
    return this[e];
  }
  getLength() {
    return Nr(this);
  }
  getArea() {
    if (!this.stock) return 0;
    const e = this.getLength();
    return e ? e * this.stock.getBladeWidth() : 0;
  }
}
const Wr = {
  tb: {
    bottomLeft: {
      top: "topRight",
      topLeft: "topLeft"
    },
    bottomRight: {
      top: "topLeft",
      topRight: "topRight"
    }
  },
  bt: {
    topLeft: {
      bottom: "bottomRight",
      bottomLeft: "bottomLeft"
    },
    topRight: {
      bottom: "bottomLeft",
      bottomRight: "bottomRight"
    }
  },
  lr: {
    topRight: {
      left: "bottomLeft",
      topLeft: "topLeft"
    },
    bottomRight: {
      left: "topLeft",
      bottomLeft: "bottomLeft"
    }
  },
  rl: {
    topLeft: {
      right: "bottomRight",
      topRight: "topRight"
    },
    bottomLeft: {
      right: "topRight",
      bottomRight: "bottomRight"
    }
  }
}, Ci = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, $i = {
  topRight: {
    top: ["topLeft"],
    right: ["bottomRight"],
    default: ["topLeft", "bottomRight"]
  },
  topLeft: {
    top: ["topRight"],
    left: ["bottomLeft"],
    default: ["topRight", "bottomLeft"]
  },
  bottomRight: {
    bottom: ["bottomLeft"],
    right: ["topRight"],
    default: ["bottomLeft", "topRight"]
  },
  bottomLeft: {
    bottom: ["bottomRight"],
    left: ["topLeft"],
    default: ["bottomRight", "topLeft"]
  }
};
class Ee {
  constructor(t, e, s = null) {
    c(this, "x");
    c(this, "y");
    c(this, "z");
    c(this, "a");
    //shape id
    c(this, "b");
    //shape id
    c(this, "direction");
    //direction of the raay
    c(this, "type");
    //[] need to type
    c(this, "corner");
    //originating corner of this point
    c(this, "grid");
    //if a grid point, which grid position
    c(this, "stockID");
    c(this, "raycast");
    c(this, "collision");
    c(this, "tooClose");
    c(this, "adjustedForMinSpacing");
    this.x = parseFloat(t), this.y = parseFloat(e), this.z = parseFloat(s) || 0, this.validate();
  }
  /**
   * clone with the ability to change the coordinates
   * NOTE: looks odd for performance reasons
   */
  clone(t = null, e = null) {
    const s = new Ee(t ?? this.x, e ?? this.y);
    for (const n in this)
      n !== "x" && n !== "y" && (s[n] = this[n]);
    return s;
  }
  validate() {
    if (isNaN(this.x) || isNaN(this.y))
      throw new Error("invalid point coordinates");
  }
  coords() {
    return {
      x: this.x,
      y: this.y
    };
  }
  collidesWith(t) {
    return this.x >= t.x && this.x <= t.x + t.l && this.y >= t.y && this.y <= t.y + t.w;
  }
  isIdenticalTo(t) {
    return this.x === t.x && this.y === t.y;
  }
  /**
   * given a point from a shape corner or a ray, get the available positions for this shape
   * @returns the position of the shape relative to the point e.g. bottomRight means the shape is placed to the bottom right of the point
   * @remarks does not cater for diagonals
   */
  //[x] needs to cater for raycast coords, which don't originate from a shape corner
  //[x] cater for raycast corners and grid
  getAvailableShapePositions(t) {
    const e = /* @__PURE__ */ new Set();
    if (this.raycast) {
      const s = Wr[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Ci[this.corner] && (this.grid ? Ci[this.corner][this.grid] && Ci[this.corner][this.grid].forEach((s) => e.add(s)) : Ci[this.corner].default.forEach((s) => e.add(s))), e) : ($i[this.corner] && (this.grid ? $i[this.corner][this.grid] && $i[this.corner][this.grid].forEach((s) => e.add(s)) : $i[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class Gt {
  constructor(t = []) {
    c(this, "points", /* @__PURE__ */ new Map());
    t.forEach((e) => this.addPoint(e));
  }
  addPoint(t, e = null) {
    if (this.contains(t)) {
      const s = this.getPoint(t);
      s.type === "group" && !e && (s.type = void 0);
      return;
    }
    t.validate(), e && (t.type = e), this.points.set(this.createKey(t), t);
  }
  addPoints(t, e = null) {
    for (const s of t) {
      if (!s) return;
      s.validate(), this.addPoint(s, e);
    }
  }
  createKey(t) {
    return `${t.x},${t.y}`;
  }
  getPoint(t) {
    return this.points.get(this.createKey(t));
  }
  deletePoint(t) {
    t.validate(), this.points.delete(this.createKey(t));
  }
  deletePoints(t) {
    for (const e of t)
      e.validate(), this.deletePoint(e);
  }
  clear() {
    this.points.clear();
  }
  toArray() {
    return Array.from(this.points.values());
  }
  contains(t) {
    return this.points.has(this.createKey(t));
  }
}
function pe(i, t, e, s, n) {
  const r = Ur[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const Ur = {
  bottom: (i, t) => {
    const e = i.clone(i.x, i.y - t);
    return e.grid = "bottom", e;
  },
  bottomLeft: (i, t) => {
    const e = i.clone(i.x - t, i.y - t);
    return e.grid = "bottomLeft", e;
  },
  bottomRight: (i, t) => {
    const e = i.clone(i.x + t, i.y - t);
    return e.grid = "bottomRight", e;
  },
  left: (i, t) => {
    const e = i.clone(i.x - t, i.y);
    return e.grid = "left", e;
  },
  centre: (i) => {
    const t = i.clone(i.x, i.y);
    return t.grid = "centre", t;
  },
  right: (i, t) => {
    const e = i.clone(i.x + t, i.y);
    return e.grid = "right", e;
  },
  top: (i, t) => {
    const e = i.clone(i.x, i.y + t);
    return e.grid = "top", e;
  },
  topLeft: (i, t) => {
    const e = i.clone(i.x - t, i.y + t);
    return e.grid = "topLeft", e;
  },
  topRight: (i, t) => {
    const e = i.clone(i.x + t, i.y + t);
    return e.grid = "topRight", e;
  }
};
function jr(i, t, e) {
  var o, l, a, u, h, v;
  const s = new Gt(), n = e.toArray().sort(on), r = t.getBladeWidth();
  if (n.forEach((w) => {
    const d = w.corner, g = w.type;
    if (!r)
      s.addPoint(w);
    else
      switch (d) {
        case "topRight":
          s.addPoint(
            pe("top", w, r, d),
            g
          ), s.addPoint(
            pe("right", w, r, d),
            g
          );
          break;
        case "topLeft":
          s.addPoint(
            pe("top", w, r, d),
            g
          ), s.addPoint(
            pe("left", w, r, d),
            g
          );
          break;
        case "bottomRight":
          s.addPoint(
            pe("bottom", w, r, d),
            g
          ), s.addPoint(
            pe("right", w, r, d),
            g
          );
          break;
        case "bottomLeft":
          s.addPoint(
            pe("bottom", w, r, d),
            g
          ), s.addPoint(
            pe("left", w, r, d),
            g
          );
          break;
      }
    const S = s.toArray();
    if (r)
      for (let _ = S.length; _--; ) {
        const Y = S[_];
        e.contains(Y) && s.deletePoint(Y);
      }
    else
      for (let _ = S.length; _--; ) {
        const Y = S[_];
        for (let V = i.length; V--; ) {
          const K = i[V];
          if (Y.x === K.x && Y.y === K.y) {
            s.deletePoint(Y);
            break;
          }
        }
      }
  }), r) {
    const w = /* @__PURE__ */ new Set();
    let d, g, S, _;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (d = t.x, g = t.y, S = t.x + t.l, _ = t.y + t.w) : (d = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), g = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), S = t.x + t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2), _ = t.y + t.w - ((v = t == null ? void 0 : t.trim) == null ? void 0 : v.y2));
    let Y = s.toArray();
    for (let V = Y.length; V--; ) {
      const K = Y[V];
      (ce.lessThan(K.x, d) || ce.lessThan(K.y, g) || ce.greaterThan(K.x, S) || ce.greaterThan(K.y, _)) && Y.splice(V, 1);
    }
    s.clear(), s.addPoints(Y), w.clear(), Y = s.toArray();
    for (let V = Y.length; V--; ) {
      const K = Y[V];
      for (let Q = i.length; Q--; ) {
        const oe = i[Q];
        if (K.collidesWith(oe)) {
          s.deletePoint(K);
          break;
        }
      }
    }
  }
  return s;
}
function zr(i, t, e) {
  let s = [];
  const n = i.getMinSpacing(e), r = t.corner, o = t.direction;
  if (t.type === "shape")
    switch (r) {
      case "topLeft":
        o === "rl" && (s.push(pe("right", t, n, r, o)), s.push(pe("topRight", t, n, r, o))), o === "bt" && (s.push(pe("bottom", t, n, r, o)), s.push(pe("bottomLeft", t, n, r, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(pe("left", t, n, r, o)), s.push(pe("topLeft", t, n, r, o))), o === "bt" && (s.push(pe("bottom", t, n, r, o)), s.push(pe("bottomRight", t, n, r, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(pe("left", t, n, r, o)), s.push(pe("bottomLeft", t, n, r, o))), o === "tb" && (s.push(pe("top", t, n, r, o)), s.push(pe("topRight", t, n, r, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(pe("right", t, n, r, o)), s.push(pe("bottomRight", t, n, r, o))), o === "tb" && (s.push(pe("top", t, n, r, o)), s.push(pe("topLeft", t, n, r, o)));
        break;
    }
  else if (t.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(pe("top", t, 0)), s.push(pe("centre", t, 0)), s.push(pe("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        s.push(pe("left", t, 0)), s.push(pe("right", t, 0)), s.push(pe("centre", t, 0));
        break;
    }
  if (s = s.filter((a) => a.x >= 0 && a.y >= 0), !s.length) return null;
  const l = new Gt();
  for (const a of s)
    a.raycast = !0, l.addPoints(un(i, a, e).toArray());
  return cn(i, e, l), l;
}
function Vr(i, t) {
  const e = new Gt();
  return i.sort(on), i.forEach((s) => {
    ft(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function Yr(i = [], t, e) {
  const s = Vr(
    i === null ? t : i,
    e
  );
  return jr(
    t,
    e,
    s
  );
}
function on(i, t) {
  return i.y === t.y ? t.x - i.x : t.y - i.y;
}
function ln(i, t, e, s, n, r) {
  i.a = t.id, i.b = e ? e.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function Xr(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new Gt();
  const s = an(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const h of u)
        Kr(
          h,
          a.shape,
          l,
          e
        );
    }
  const r = i.saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb", o = t.reduce((l, a) => (r === "tb" ? l.x + l.l > a.x + a.l : l.y + l.w > a.y + a.w) ? l : a);
  return s.filter(({ shape: l }) => l.id === o.id).forEach(({ shape: l, rays: a }) => {
    const u = Object.values(a);
    for (const h of u) {
      const v = new Ee(h.x2, h.y2);
      r === h.direction && (ln(v, l, null, h.direction, "edge"), e.addPoint(v));
    }
  }), e = Zr(e), e;
}
function an(i, t) {
  return i.map((e) => {
    const s = Br(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function Kr(i, t, e, s) {
  switch (i.direction) {
    case "rl":
      Pi(
        i,
        t,
        e,
        s,
        e.x + e.l
      );
      break;
    case "lr":
      Pi(
        i,
        t,
        e,
        s,
        e.x
      );
      break;
    case "tb":
      Pi(
        i,
        t,
        e,
        s,
        e.y + e.w
      );
      break;
    case "bt":
      Pi(
        i,
        t,
        e,
        s,
        e.y
      );
      break;
  }
}
function Pi(i, t, e, s, n) {
  const r = i.dimension === "w", o = r ? "y" : "x", l = r ? "x" : "y", a = r ? "l" : "w";
  if (i[`${l}1`] >= e[l] && i[`${l}1`] <= e[l] + e[a]) {
    const u = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, h = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, v = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, w = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (u || h || v || w) {
      const g = r ? i[`${l}1`] : n, S = r ? n : i[`${l}1`], _ = new Ee(g, S), Y = i.origin;
      ln(_, t, e, i.direction, "shape", Y), s.addPoint(_);
    }
  }
}
function Zr(i) {
  const t = new Gt();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = Jr(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function Jr(i, t) {
  return i.length === 0 ? null : i.reduce((e, s) => {
    switch (t) {
      case "left":
        return !e || s.x < e.x ? s : e;
      case "right":
        return !e || s.x > e.x ? s : e;
      case "top":
        return !e || s.y > e.y ? s : e;
      case "bottom":
        return !e || s.y < e.y ? s : e;
      default:
        return null;
    }
  }, null);
}
function un(i, t, e) {
  const s = new Gt(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = Qr(t, i, e), r) {
      case "bottomLeft":
        o = o.clone(o.x - i.l, o.y - i.w), o.shapePosition = "bottomLeft";
        break;
      case "bottomRight":
        o = o.clone(o.x, o.y - i.w), o.shapePosition = "bottomRight";
        break;
      case "topLeft":
        o = o.clone(o.x - i.l, o.y), o.shapePosition = "topLeft";
        break;
      case "topRight":
        o = o.clone(o.x, o.y), o.shapePosition = "topRight";
        break;
    }
    s.addPoint(o);
  }
  return cn(i, e, s), s;
}
function Qr(i, t, e) {
  if (e.saw.cutType !== "efficiency") return i;
  const s = t.getMinSpacing(e), n = e.getBladeWidth();
  if (!s || s === n) return i;
  let r;
  if (!i.grid) return i;
  switch (i.grid) {
    case "bottom":
      r = i.clone(i.x, i.y - s + n);
      break;
    case "top":
      r = i.clone(i.x, i.y + s - n);
      break;
    case "left":
      r = i.clone(i.x - s + n, i.y);
      break;
    case "right":
      r = i.clone(i.x + s - n, i.y);
      break;
  }
  return r ? (r.x < 0 && (r.x = 0), r.y < 0 && (r.y = 0), r.adjustedForMinSpacing = !0, r) : i;
}
function cn(i, t, e) {
  var a, u, h, v, w, d;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (h = t == null ? void 0 : t.trim) == null ? void 0 : h.x1, n = (v = t == null ? void 0 : t.trim) == null ? void 0 : v.y1, r = t.l - ((w = t == null ? void 0 : t.trim) == null ? void 0 : w.x2) - i.l, o = t.w - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.y2) - i.w);
  const l = e.toArray();
  for (let g = l.length; g--; ) {
    const S = l[g];
    (ce.lessThan(S.x, s) || ce.lessThan(S.y, n) || ce.greaterThan(S.x, r) || ce.greaterThan(S.y, o) || S.x < 0 || S.y < 0) && e.deletePoint(S);
  }
}
const eo = 10, to = 0;
class rs extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
function io(i) {
  const t = i.toString(), e = t.indexOf(".");
  return e === -1 ? 0 : t.length - e - 1;
}
function T(i) {
  const {
    v: t,
    nf: e,
    dp: s,
    pl: n,
    fr: r,
    o
  } = i, l = o ? {
    nf: o.numberFormat,
    dp: o.decimalPlaces,
    pl: o.parseLocale,
    fr: o.fractionRoundTo
  } : {}, {
    nf: a = "decimal",
    dp: u = eo,
    pl: h = !1,
    fr: v = to
  } = { nf: e, dp: s, pl: n, fr: r, ...l };
  if (t == null || t === "")
    return a === "decimal" ? null : "";
  try {
    const w = lo(t, h);
    return w ? a === "decimal" ? so(
      w,
      t,
      u
    ) : no(
      w,
      v
    ) : a === "decimal" ? 0 : "0";
  } catch (w) {
    throw new rs(
      `Failed to convert number format: ${t} to ${a}. ${w.message}`
    );
  }
}
function so(i, t, e) {
  if (!String(i).includes("/")) {
    const o = String(i);
    if (o.includes("e")) {
      if (typeof e == "number") {
        const l = Number(Number(o).toFixed(e));
        return ni(l);
      }
      return Number(o);
    }
    if (typeof e == "number") {
      const [l, a = ""] = o.split("."), u = a.padEnd(e, "0"), h = +`${l}.${u.slice(0, e)}`;
      return ni(h);
    }
    return ni(Number(o));
  }
  const n = new ui(i).valueOf();
  if (typeof t == "string" && t.includes("/"))
    return typeof e == "number" ? ni(Number(n.toFixed(e))) : n;
  const r = io(String(t));
  return ni(Number(n.toFixed(r)));
}
function no(i, t) {
  const e = new ui(i);
  if (t > 0) {
    const s = e.valueOf(), n = Math.round(s * t);
    return new ui(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function ni(i) {
  const t = i.toString();
  return t.includes(".") && /\.0+$/.test(t) ? parseInt(t, 10) : i;
}
function ro(i = "en-US") {
  var t, e;
  try {
    const s = Intl.NumberFormat(i).formatToParts(123456789e-2);
    return {
      thousandsSeparator: ((t = s.find((n) => n.type === "group")) == null ? void 0 : t.value) || ",",
      decimalSeparator: ((e = s.find((n) => n.type === "decimal")) == null ? void 0 : e.value) || "."
    };
  } catch {
    return console.warn("Failed to detect number separators. Using defaults."), { thousandsSeparator: ",", decimalSeparator: "." };
  }
}
function Oi(i) {
  if (i == null || i === "") return null;
  const t = String(i).trim();
  if (!t) return null;
  try {
    const { thousandsSeparator: e, decimalSeparator: s } = ro(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch {
    throw new rs(`Failed to parse number: ${i}`);
  }
}
function oo(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  return /^(\d+\s+)?\d+\/\d+$|^\d+$|^\d+'\s*(\d+\s+)?\d+\/\d+"$|^\d+'\s*(\d+\s+)?\d+\/\d+$|^(\d+\s+)?\d+\/\d+"$/.test(t);
}
function lo(i, t = !1) {
  if (!i && i !== 0) return null;
  let e = String(i).trim();
  if (!e) return null;
  try {
    if (oo(i))
      return e.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
    {
      t ? (e = e.replace(/[^0-9,. -]/g, ""), e = e.replace(/\s/g, "")) : (e = e.replace(/[^0-9,.-]/g, ""), e = e.replace(/,/g, "")), e.startsWith(".") && (e = "0" + e), e.startsWith("-.") && (e = "-0." + e.slice(2));
      const s = t ? Oi(e) : parseFloat(e);
      return s === null || isNaN(s) ? null : s.toString();
    }
  } catch (s) {
    throw new rs(
      `Failed to clean numeric input: ${i}. ${s.message}`
    );
  }
}
function Pc(i, t, e = null, s = null) {
  if (i && !(!Ne(i) && !ai(i))) {
    if (!["decimal", "fraction"].includes(t)) {
      console.warn("Attempting to update to an invalid number format:", t);
      return;
    }
    for (const n of i.numberFormatKeys) {
      if (typeof i[n] == "object") {
        for (const r in i[n])
          i[n][r] = T({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s });
        return;
      }
      i[n] = T({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
    }
  }
}
function ao(i, t, e, s) {
  return t.filter((n, r) => {
    var o, l;
    return i.stockMatch.material[r] = null, i.stockMatch.thickness[r] = null, i.stockMatch.width[r] = null, i.stockMatch.fit[r] = null, (yt(i) || cs(i)) && (pn(n, i) ? i.stockMatch.fit[r] = !0 : i.stockMatch.fit[r] = !1), e ? !(n != null && n.material) && !(i != null && i.material) || ((o = n == null ? void 0 : n.material) == null ? void 0 : o.toLowerCase()) === ((l = i == null ? void 0 : i.material) == null ? void 0 : l.toLowerCase()) ? i.stockMatch.material[r] = !0 : i.stockMatch.material[r] = !1 : i.stockMatch.material[r] = !0, s ? x(i.t) && x(n.t) ? (yt(i) && ce.equalTo(i.t, n.t) || i.t === n.t) && (i.stockMatch.thickness[r] = !0) : i.stockMatch.thickness[r] = !1 : i.stockMatch.thickness[r] = !0, n.type === "linear" ? yt(i) && (i.canRotate(0, n) && ce.equalTo(i.w, n.w) || i.canRotate(1, n) && ce.equalTo(i.l, n.w) ? i.stockMatch.width[r] = !0 : i.stockMatch.width[r] = !1) : i.stockMatch.width[r] = !0, i.stockMatch.fit[r] && i.stockMatch.material[r] && i.stockMatch.thickness[r] && i.stockMatch.width[r];
  });
}
function uo(i, t, e) {
  const s = Ne(i[0]);
  if (s && (t = t.map((h) => {
    const v = new Dt(h);
    return v.trimDimensions(), v;
  }), i = i.map((h) => {
    const v = new vt(h);
    return v.trimDimensions(), v;
  })), i.some((h) => x(h.stockLock) && h.stockLock.length)) return;
  s || (t = t.filter((h) => h.autoAdd === !0 || x(h.q) && h.q > 0));
  const r = t.some((h) => x(h.material)), o = t.some((h) => x(h.t)), l = /* @__PURE__ */ new Set();
  for (const h of i) {
    h.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const v = ao(h, t, r, o);
    if (h.stockMatch.fit = !h.stockMatch.fit.every((w) => w === !1), h.stockMatch.material = !h.stockMatch.material.every((w) => w === !1 || w === null), h.stockMatch.thickness = !h.stockMatch.thickness.every((w) => w === !1 || w === null), h.stockMatch.width = !h.stockMatch.width.every((w) => w === !1), !s) {
      if (v.length) {
        const w = v.map((d) => d.getParentID());
        h.stockLock = w, w.forEach((d) => l.add(d));
      } else
        h.stockMatch.fit ? (h.stockMatch.material || new Z({
          item: h,
          field: [["material"]],
          message: "no stock with matching material found"
        }), h.stockMatch.thickness || new Z({
          item: h,
          field: [["t"]],
          message: `thicknesses must match - could not find any stock with ${h.t ? "thickness " + h.t : "no thickness set"}`
        }), e === "linear" && !h.stockMatch.width && new Z({
          item: h,
          field: [["w"]],
          message: `widths must match for linear calculations - could not find any stock with ${h.w ? "width " + h.w : "no width set"}`
        })) : new Z({
          item: h,
          field: [["l"], ["w"]],
          message: "Will not fit on any stock - check dimensions, min spacing, trim & orientation lock"
        });
      h.stockMatch = null;
    }
  }
  const a = i.filter((h) => !h.stockLock || !h.stockLock.length).sort(Mi.ID), u = t.filter((h) => !l.has(h.parentID)).sort(Mi.ID);
  return t = t.filter((h) => At(h)).filter((h) => l.has(h.parentID)), (r || o) && (i = i.filter((h) => {
    var v;
    return (v = h == null ? void 0 : h.stockLock) == null ? void 0 : v.length;
  })), {
    stockList: t,
    unusableStock: u,
    shapeList: i,
    unusableShapes: a
  };
}
class Z {
  constructor({
    item: t = null,
    message: e = "",
    field: s = [],
    index: n = null,
    issues: r = null,
    type: o = "error",
    throwError: l = !1
  }) {
    c(this, "message");
    c(this, "identifier");
    c(this, "field");
    c(this, "index");
    c(this, "type", "error");
    var u, h, v;
    this.message = We(e, { ns: ["main", "errors"] }), this.field = s, this.index = n, this.type = o, t && ("name" in t && ((u = t.name) != null && u.length) ? this.identifier = t.name.toLocaleUpperCase() : "id" in t && ((h = t.id) != null && h.length) ? this.identifier = t.id : "parentID" in t && ((v = t.parentID) != null && v.length) ? this.identifier = t.parentID : typeof this.index[0] == "number" && (this.identifier = String(this.index[0] + 1)), "issues" in t && Array.isArray(t.issues) && t.issues.push(this)), Array.isArray(r) && r.push(this);
    const a = `issue created for ${Go(t)}: ${this.identifier || "N/A"} - ${this.message} for field ${this.field || "N/A"}`;
    if (l) throw new Error(a);
  }
}
const Yi = {
  partMaterial: "material",
  stockMaterial: "material"
};
function co(i) {
  return (Yi == null ? void 0 : Yi[i]) || i;
}
function Lt(i) {
  return i.length ? (i == null ? void 0 : i.filter((t) => t.type === "error")) || [] : [];
}
function Ls(i, t, e = !1) {
  var r;
  return !("issues" in i) || !((r = i.issues) != null && r.length) ? !1 : i.issues.filter((o) => o.type === (e ? "warning" : "error")).some((o) => {
    var l;
    if (!((l = o.field) != null && l.length))
      return !1;
    for (let a = 0; a < o.field.length; a++)
      if (o.field[a].every((u, h) => u === co(t[h])))
        return !0;
    return !1;
  });
}
const Kt = ({ item: i, field: t, index: e, newIssues: s, min: n = null, max: r = null, required: o = !1, allowZero: l = !0, isWarning: a = !1 }) => {
  let u = Yt(i, t);
  if (o && (u == null || u === ""))
    return new Z({
      item: i,
      message: We("not_set", { x: Me[t.join(".")] }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), null;
  if (!l && u === 0)
    return new Z({
      item: i,
      message: We("greater_than", { x: Me[t.join(".")], y: 0 }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), 0;
  if (u == null || u === "") return null;
  try {
    u = T(u);
  } catch {
    return ho({
      item: i,
      field: t,
      value: Yt(i, t),
      index: e,
      issues: s,
      isWarning: a
    }), null;
  }
  return fo({ item: i, field: t, value: u, index: e, issues: s, min: n, isWarning: a }), po({ item: i, field: t, value: u, index: e, issues: s, max: r, isWarning: a }), u;
}, ho = ({ item: i, field: t, value: e, index: s, issues: n, isWarning: r }) => {
  new Z({
    item: i,
    message: We("not_understood", { x: t.join("."), y: e }),
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, fo = ({ item: i, field: t, value: e, index: s, issues: n, min: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e < r && new Z({
    item: i,
    message: We("greater_than_or_equal", { x: Me[t.join(".")], y: r }),
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, po = ({ item: i, field: t, value: e, index: s, issues: n, max: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e > r && new Z({
    item: i,
    message: We("less_than_or_equal", { x: Me[t.join(".")], y: r }),
    field: [t],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, go = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "banding" in i && typeof i.banding != "object" && new Z({
    item: i,
    message: We("must_be_object", { x: "banding" }),
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, mo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "x" in i && Kt({ item: i, field: ["x"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, yo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "y" in i && Kt({ item: i, field: ["y"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, vo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "l" in i && Kt({ item: i, field: ["l"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, bo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "w" in i && Kt({ item: i, field: ["w"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, wo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "t" in i && Kt({ item: i, field: ["t"], index: t, newIssues: n, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, So = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "q" in i && T({ v: i.q }) <= 0 && (!("autoAdd" in i) || (i == null ? void 0 : i.autoAdd) === !1) && new Z({
    item: i,
    message: We("greater_than_or_equal", { x: Me.q, y: 0 }),
    field: [["q"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, ko = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("orientationLock" in i) || i.orientationLock === void 0 || i.orientationLock === null || i.orientationLock === "") return s;
  const n = i.orientationLock.toLowerCase();
  return n !== "l" && n !== "w" && new Z({
    item: i,
    message: We("must_be_values", { x: Me.orientationLock, y: "l, w" }),
    field: [["orientationLock"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, xo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("grain" in i) || i.grain === void 0 || i.grain === null || i.grain === "") return s;
  const n = i.grain.toLowerCase();
  return n !== "l" && n !== "w" && new Z({
    item: i,
    message: We("must_be_values", { x: Me.grain, y: "l, w" }),
    field: [["grain"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Co = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("customData" in i)) return s;
  const n = i.customData;
  if (typeof n != "object")
    return new Z({
      item: i,
      message: We("must_be_object", { x: Me.customData }),
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const r in n) {
    const o = n[r];
    o != null && (["string", "number", "boolean"].includes(typeof o) || new Z({
      item: i,
      message: We("must_be_string_number_boolean", { x: Me.customData }),
      field: [["customData"]],
      index: [t],
      type: e ? "warning" : "error",
      issues: s
    }));
  }
  return s;
}, $o = ({
  item: i,
  partTrim: t,
  index: e = null,
  isWarning: s = !1
}) => {
  const n = [];
  if (!t || !("l" in i) || !("w" in i) || !i.l || !i.w) return n;
  const r = T({ v: t }), o = T({ v: i.l }), l = T({ v: i.w }), a = o - r * 2, u = l - r * 2;
  return (a <= 0 || u <= 0) && new Z({
    item: i,
    message: We("too_much_trim", { x: "part", y: r, z: `${a}x${u}` }),
    field: [["l"], ["w"], ["trim"]],
    index: [e],
    type: s ? "warning" : "error",
    issues: n
  }), n;
}, Po = ({
  item: i,
  index: t = null,
  min: e = null,
  max: s = null,
  isWarning: n = !1
}) => {
  const r = [];
  if (!("l" in i) || !("w" in i) || !i.l || !i.w || !("trim" in i)) return r;
  if (!At(i) || At(i) && !(i != null && i.trimmed)) {
    const o = ["l", "w"], [l, a] = o.map((u) => T(i[u]));
    for (const u in i.trim)
      Kt({ item: i, field: ["trim", u], index: t, newIssues: r, min: e, max: s });
    if (r.length) return r;
    if (l && a && l > 0 && a > 0) {
      const u = T({ v: i.trim.x1 }), h = T({ v: i.trim.x2 }), v = T({ v: i.trim.y1 }), w = T({ v: i.trim.y2 }), d = (u || 0) + (h || 0), g = (v || 0) + (w || 0);
      d >= l && new Z({
        item: i,
        message: We("too_much_trim", {
          x: `${Me.x1.toUpperCase()} + ${Me.x2.toUpperCase()}`,
          y: Me.w,
          z: l
        }),
        field: [["trim", "x1"], ["trim", "x2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      }), g >= a && new Z({
        item: i,
        message: We("too_much_trim", {
          x: `${Me.y1.toUpperCase()} + ${Me.y2.toUpperCase()}`,
          y: Me.l,
          z: a
        }),
        field: [["trim", "y1"], ["trim", "y2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      });
    }
  }
  return r;
}, Lo = ({
  item: i,
  inputStockList: t,
  stockType: e,
  partTrim: s = 0,
  index: n = null,
  isWarning: r = !1
}) => {
  const o = [];
  if (!("q" in i) || !("l" in i) || !("w" in i) || !i.l || !i.w || ("applyPartTrim" in i && i.applyPartTrim(s, e), i.issues.length)) return o;
  const l = uo([i], t, e);
  if (!l) return o;
  if (l.unusableShapes.length) {
    const u = l.unusableShapes[0].stockMatch;
    u.fit || new Z({
      item: i,
      message: "will_not_fit",
      field: [["l"], ["w"]],
      index: [n],
      type: r ? "warning" : "error",
      issues: o
    }), u.material || new Z({
      item: i,
      message: "no_matching_stock_material",
      field: [["material"]],
      index: [n],
      issues: o
    }), u.thickness || new Z({
      item: i,
      message: "no_matching_stock_thickness",
      field: [["t"]],
      index: [n],
      issues: o
    }), !u.width && e === "linear" && new Z({
      item: i,
      message: "no_matching_stock_width",
      field: [["w"]],
      index: [n],
      issues: o
    });
  }
  return o;
}, Io = ({ item: i = null, index: t = null }) => {
  i.machining.validateEverything(i, t);
}, je = {
  customData: Co,
  banding: go,
  partTrim: $o,
  trim: Po,
  x: mo,
  y: yo,
  l: vo,
  w: bo,
  t: wo,
  q: So,
  orientationLock: ko,
  grain: xo,
  stockMatch: Lo,
  machining: Io
};
function Xi(i) {
  let t, e;
  switch (i) {
    case "l":
    case "length":
      t = "guillotine", e = "l";
      break;
    case "w":
    case "width":
      t = "guillotine", e = "w";
      break;
    case "flex":
      t = "guillotine", e = "flex";
      break;
    case "efficiency":
      t = "efficiency", e = "none";
      break;
    case "beam":
      t = "beam", e = "l";
      break;
    default:
      t = null, e = null;
      break;
  }
  return {
    cutPreference: e,
    cutType: t
  };
}
function To(i, t, e) {
  if (!gi.includes(t) || !i.machining.corners) return 0;
  const s = hn(i, t);
  return e * s;
}
function hn(i, t) {
  if (!gi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Fi(i, t, e, s) {
  Object.keys(t).forEach((n) => {
    var r, o;
    n in i && ((r = t[n]) != null && r.min && T({ v: i[n] }) < T({ v: t[n].min }) ? e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${t[n].min}.`,
      fields: [n]
    }) : (o = t[n]) != null && o.max && T({ v: i[n] }) > T({ v: t[n].max }) && e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be greater than ${t[n].max}.`,
      fields: [n]
    }));
  });
}
class Ki {
  constructor({ x: t, y: e, diameter: s, depth: n = 0, face: r = 0, type: o = null }) {
    c(this, "x");
    c(this, "y");
    c(this, "diameter");
    c(this, "depth");
    c(this, "face");
    c(this, "valid");
    c(this, "type");
    this.x = t, this.y = e, this.diameter = s, this.depth = n, this.face = r, this.type = o;
  }
  getFace() {
    return pt[this.face];
  }
  getXDrawPosition(t) {
    let e = 0;
    const s = T({ v: this.x });
    return t.rot ? e = t.l - T({ v: this.y }) + ("x" in t ? T({ v: t.x }) : 0) : e = s + ("x" in t ? T({ v: t.x }) : 0), e;
  }
  getYDrawPosition(t, e, s) {
    let n = t.rot ? T({ v: this.x }) : T({ v: this.y });
    return n += "y" in t ? T({ v: t.y }) : 0, e === 1 && (s ? n = T({ v: s.w }) - n : n = T({ v: t.w }) - n), n;
  }
  shouldShow(t, e) {
    return this.face === e || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || T({ v: this.depth }) >= T({ v: t.t });
  }
  getDistanceToEdge(t) {
    const e = this.x, s = this.y, n = this.diameter / 2, r = T({ v: t.getLongSide() }), o = T({ v: t.getShortSide() }), l = t.machining.corners.map((g) => g.type ? g.size : 0), a = [
      {
        edge: "left",
        distance: e - n
      },
      {
        edge: "right",
        distance: r - e - n
      },
      {
        edge: "bottom",
        distance: o - s - n
      },
      {
        edge: "top",
        distance: s - n
      }
    ], u = t.machining.corners.map((g, S) => {
      const _ = S === 0 || S === 3, Y = S < 2, V = _ ? e : r - e;
      let K = null;
      this.face === 0 ? K = Y ? s : o - s : this.face === 1 && (K = Y ? o - s : s);
      const Q = Math.sqrt(V * V + K * K);
      return {
        c: g,
        distance: Q
      };
    }), h = Math.min(...a.map((g) => g.distance)), v = Math.min(...u.map((g) => g.distance)), w = u.findIndex((g) => g.distance === v), d = t.machining.corners[w];
    if (d && d.type === "radius") {
      let g = w === 0 || w === 3 ? 0 : r, S = w < 2 ? 0 : o;
      const _ = w < 2;
      g += w === 0 || w === 3 ? l[w] : -l[w], S += _ ? l[w] : -l[w];
      const V = e - g, K = w < 2;
      let Q;
      this.face === 0 ? Q = K ? s : o - s : this.face === 1 && (Q = K ? o - s : s);
      const oe = Q - S, U = Math.sqrt(V * V + oe * oe), J = l[w] - U - n;
      let m = !1;
      return d.index === 0 ? m = e <= g && Q <= S : d.index === 1 ? m = e >= g && Q <= S : d.index === 2 ? m = e >= g && Q >= S : d.index === 3 && (m = e <= g && Q >= S), m && J < h ? J : h;
    } else if (d && d.type === "bevel") {
      let g, S, _;
      d.index === 0 ? (g = 1, S = 1, _ = -d.size) : d.index === 1 ? (g = 1, S = -1, _ = -r + d.size) : d.index === 2 ? (g = 1, S = 1, _ = -r - o + d.size) : d.index === 3 && (g = -1, S = 1, _ = -o + d.size);
      const Y = d.index === 0 ? 1 : -1, V = (g * e + S * s + _) / Math.sqrt(g * g + S * S) * Y - n;
      return V < h ? V : h;
    } else
      return h;
  }
  validate(t, e, s = null) {
    const n = [];
    if (!x(this.x) || !x(this.y) || !x(this.diameter)) {
      const o = {
        index: e,
        message: "X, Y & diameter are all required.",
        fields: []
      };
      this.x || o.fields.push("x"), this.y || o.fields.push("y"), this.diameter || o.fields.push("diameter"), n.push(o);
    }
    return T({ v: this.diameter }) <= 0 && n.push({
      index: e,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), T({ v: this.depth }) < 0 && n.push({
      index: e,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && T({ v: t.t }) > 0 && T({ v: this.depth }) > T({ v: t.t }) && n.push({
      index: e,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && T({ v: this.depth }) > 0 && n.push({
      index: e,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(t) < 0 && n.push({
      index: e,
      message: "Outside of part."
    }), s && Fi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Is {
  constructor({
    position: t = null,
    //from left or bottom
    edge: e = "x1",
    face: s = 0,
    numHoles: n = null,
    diameter: r = 0,
    depth: o = 0,
    distanceFromEdge: l = 0,
    outerSpacing: a = 0,
    hingeLength: u = 0,
    minimumHoleDistance: h = 0,
    positionLimit: v = 0
  }, w) {
    c(this, "position");
    c(this, "edge");
    c(this, "face");
    c(this, "numHoles");
    c(this, "holes", []);
    c(this, "diameter");
    c(this, "depth");
    c(this, "distanceFromEdge");
    //from edge to center of hole
    c(this, "outerSpacing");
    //from edge to center of hole
    c(this, "hingeLength");
    c(this, "minimumHoleDistance");
    c(this, "positionLimit");
    c(this, "valid");
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = u, this.minimumHoleDistance = h, this.positionLimit = v, w && this.createHoles(w);
  }
  getFace() {
    return pt[this.face];
  }
  getHoleSpacing() {
    const t = T({ v: this.hingeLength }) - T({ v: this.outerSpacing }) * 2, e = this.numHoles - 1;
    return t / e;
  }
  getHoleXPosition(t, e) {
    let s = 0;
    const n = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
        s = this.distanceFromEdge;
        break;
      case "x2":
        s = t.getLongSide() - T({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = T({ v: this.position }) + T({ v: this.outerSpacing }) + n * e;
        break;
    }
    return s;
  }
  getHoleYPosition(t, e) {
    let s = 0;
    const n = this.getHoleSpacing();
    switch (this.edge) {
      case "x1":
      case "x2":
        s = T({ v: this.position }) + T({ v: this.outerSpacing }) + n * e;
        break;
      case "y1":
        s = T({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = t.getShortSide() - T({ v: this.distanceFromEdge });
        break;
    }
    return s;
  }
  createHoles(t) {
    this.holes = [];
    for (let e = 0; e < this.numHoles; e++) {
      const s = new Ki({
        x: this.getHoleXPosition(t, e),
        y: this.getHoleYPosition(t, e),
        diameter: this.diameter,
        depth: this.depth,
        face: this.face,
        type: "hinge"
      });
      this.holes.push(s);
    }
    return this.holes;
  }
  validate(t, e, s = null) {
    const n = [];
    return this.holes.forEach((r, o) => {
      const l = r.validate(t, o).map((a) => (a.index = e, a.message = `Hole ${o + 1}: ${a.message}`, a));
      n.push(...l);
    }), s && Fi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Ts {
  constructor({ type: t = "radius", size: e, index: s }) {
    c(this, "type");
    c(this, "size");
    c(this, "index");
    c(this, "valid");
    this.type = t, this.size = e, this.index = s;
  }
  getLength() {
    return this.type === "radius" ? Math.PI * this.size / 2 : this.type === "bevel" ? Math.sqrt(2) * this.size : 0;
  }
  getCorner() {
    return ["a", "b", "c", "d"][this.index];
  }
  isPresent() {
    return (this.valid === !0 || this.valid === void 0) && this.type !== null && this.size > 0;
  }
  validate(t, e) {
    const s = t.getShortSide(), n = [];
    if (this.type === null) {
      this.size = null;
      const r = this.getCorner();
      t.banding[r] = !1;
    }
    return this.type && T({ v: this.size }) <= 0 && n.push({
      index: e,
      message: "Corner size cannot be zero or negative"
    }), this.type && T({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
let dn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: e = [],
    corners: s = []
  } = {}) {
    c(this, "holes", []);
    c(this, "corners", []);
    c(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new Ts(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Ts({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new Ki(n))), e && (this.hingeHoles = e.map((n) => new Is(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && new Z({
      item: t,
      index: e,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    }), n.length && new Z({
      item: t,
      index: e,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new Z({
      item: t,
      index: e,
      message: "Issue with machining -> corners",
      field: [["machining"]]
    });
  }
  validate(t, e, s = null) {
    if (!t) return [];
    if (!e) return [];
    const n = [];
    return n.push(...this.validateAll(t, e, s)), n;
  }
  validateAll(t, e, s = null) {
    if (!t) return [];
    const n = [];
    return this[e].forEach((r, o) => n.push(...r.validate(t, o, s))), n;
  }
  createHole(t, e, s, n = 0, r = 0) {
    const o = new Ki({
      x: t,
      y: e,
      diameter: s,
      depth: n,
      face: r
    });
    return this.holes.push(o), o;
  }
  createHingeHoles({
    numHoles: t,
    position: e,
    diameter: s,
    depth: n = 0,
    edge: r = "x1",
    face: o = 0,
    distanceFromEdge: l = 0,
    outerSpacing: a = 0,
    minimumHoleDistance: u = 0,
    hingeLength: h = 0
  }) {
    const v = new Is({
      numHoles: t,
      position: e,
      //from left or bottom
      edge: r,
      face: o,
      diameter: s,
      depth: n,
      distanceFromEdge: l,
      outerSpacing: a,
      minimumHoleDistance: u,
      hingeLength: h
    });
    return this.hingeHoles.push(v), v;
  }
  updateHingeHoles(t) {
    this.hingeHoles.forEach((e) => e.createHoles(t));
  }
  getAllHingeHoles(t) {
    const e = [];
    return this.hingeHoles.forEach((s) => {
      s.holes.length ? e.push(...s.holes) : (s.createHoles(t), e.push(...s.holes));
    }), e;
  }
  getNumHoles() {
    return this.holes.length + this.hingeHoles.reduce(
      (t, e) => t + e.numHoles,
      0
    );
  }
  getNumCorners() {
    return this.corners.filter((t) => t.type !== null).length;
  }
};
function os(i) {
  var t, e, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (e = (t = i.machining) == null ? void 0 : t.holes) != null && e.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((u) => u.type && u.size) : !1;
}
function Oo(i) {
  var t, e, s, n;
  if ("machining" in i) {
    if (!os(i)) {
      i.machining = null;
      return;
    }
    (t = i.machining.holes) != null && t.length || (i.machining.holes = null), (e = i.machining.hingeHoles) != null && e.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class ls {
  constructor(t = null) {
    c(this, "id");
    //api
    c(this, "listId");
    c(this, "shapeListIds", []);
    c(this, "shapes");
    c(this, "direction");
    c(this, "q");
    c(this, "duplicate", !1);
    c(this, "issues", []);
    c(this, "stockMatch");
    var e;
    this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = t == null ? void 0 : t.id, this.shapes = x(t == null ? void 0 : t.shapes) ? t.shapes.map((s) => s.toString()) : [], this.shapeListIds = x(t == null ? void 0 : t.shapeListIds) ? t.shapeListIds : [], this.direction = x(t == null ? void 0 : t.direction) ? t.direction : "l", this.q = x(t == null ? void 0 : t.q) ? t.q : 1, x(t == null ? void 0 : t.shapeList) && ((e = t.shapeList) != null && e.length) && this.validate(t.shapeList);
  }
  validate(t = []) {
    var o, l;
    if (this.issues = [], !(t != null && t.length))
      throw new Error("shapeList is required to validate user group");
    const e = this.findShapes(t);
    if (!e.length)
      return new Z({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    const s = e[0];
    if (yt(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new Z({
          item: this,
          message: "Must have 2 or more parts."
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new Z({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    if (e.forEach((a, u) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new Z({
        item: this,
        field: [["orientationLock"]],
        message: `Part in position ${u + 1} must have orientation lock set to be part of a group.`
      });
    }), this.issues.length) return this.issues;
    const n = _t(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, u) => {
      if (a.id === s.id) return;
      const h = a.getTrimmedDimensions(!0)[n];
      ce.equalTo(h, r) || new Z({
        item: this,
        message: `Part in position ${u + 1} final ${n === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${h}. Check the dimensions, trim & orientation lock.`
      });
    }), this.issues;
  }
  findShapes(t = []) {
    var s, n;
    if (!t.length) return [];
    let e = [];
    if (Ne(t[0])) {
      if (!((s = this.shapeListIds) != null && s.length)) return [];
      if (e = this.shapeListIds.map((r) => t.find((o) => o.listId === r)).filter((r) => r), !e.length)
        throw new Error("could not map group shapes to shape list");
      return e;
    } else {
      if (!((n = this.shapes) != null && n.length)) return [];
      const r = /* @__PURE__ */ new Set();
      e = this.shapes.map((o) => {
        const l = t.find((a) => a.parentID === o && !a.inUserGroup && !r.has(a.id));
        return l ? (r.add(l.id), l) : null;
      }).filter((o) => o);
    }
    if (!e.length)
      throw new Error("could not map group shapes to shape list");
    return e;
  }
  populateParentID(t) {
    var e;
    t != null && t.length && (e = this == null ? void 0 : this.shapeListIds) != null && e.length && (this.shapes = this.shapeListIds.map((s) => (t.findIndex((r) => r.listId === s) + 1).toString()));
  }
  //create a group from a user group
  createGroup(t = 0, e = 0, s = [], n = null) {
    if (!(s != null && s.length))
      throw new Error("some parts are required to create a user group");
    if (!yt(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((h) => {
      const v = s.findIndex((w) => !w.inUserGroup && w.parentID === h.parentID);
      if (v === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(v, 1), h.setRotationToOrientationLockWithoutContainer(), h.inUserGroup = !0;
    });
    let l = 0, a = 0;
    this.direction === "l" ? a = o.w : l = o.l;
    let u;
    try {
      const h = {
        id: `ug${t}.${e}`,
        shapes: r,
        l,
        w: a,
        t: o == null ? void 0 : o.t,
        material: o == null ? void 0 : o.material,
        // joinDimension:
        //     referenceShape.l === l ? referenceShape.l : referenceShape.w,
        direction: this.direction,
        preventAutoRotation: !0,
        container: n,
        type: "user"
      };
      u = new lt(h);
    } catch (h) {
      return console.error(h), !1;
    }
    return u.parentID = `ug${t}`, n && u.updateShapeSpacing(n), u;
  }
}
function Ic(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new ls(s));
  return t.length && Ao(e, t), e;
}
function Ao(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function Do(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function Eo(i, t, e = !0) {
  const s = Do(i), n = [];
  for (const r in s) {
    const o = s[r], l = t.findIndex((u) => u.listId === r);
    l < 0 && new Z({
      message: "Cannot find at least one part in the list.",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new Z({
      message: `Not enough of part ${a != null && a.name ? a.name : l + 1} to form groups - ${o} needed, ${a.q ?? 0} found.`,
      issues: n
    });
  }
  return e && i.forEach((r) => {
    const o = r.validate(t);
    o != null && o.length && n.push(...o);
  }), n;
}
const mt = ["y1", "y2", "x1", "x2"], gi = ["a", "b", "c", "d"], Tt = [...mt, ...gi], pt = ["a", "b"];
function fn(i) {
  return gi.includes(i);
}
function Ro(i) {
  return Tt.includes(i);
}
const Me = {
  x: "x",
  y: "y",
  l: "length",
  w: "width",
  t: "thickness",
  q: "quantity",
  orientationLock: "rotation",
  name: "name",
  material: "material",
  banding: "banding",
  finish: "finish",
  cost: "cost",
  grain: "grain",
  trim: "trim",
  x1: "w1",
  x2: "w2",
  y1: "l1",
  y2: "l2",
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  all: "all"
};
function Mo(i) {
  return mt.map((t) => i[t] ?? null);
}
function qt(i) {
  if (!x(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function Tc({
  stockList: i,
  removeScores: t = !1,
  saw: e = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    e && (r.saw = e), s && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new Dt(r);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(Mi.ID);
}
function Oc({
  shapeList: i,
  stockList: t,
  preventAutoRotation: e = !1
}) {
  if (typeof t > "u")
    throw new Error("recreateShapeList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.filter((s) => s).map((s) => {
    var o;
    e && (s.preventAutoRotation = !0);
    let n;
    if (Fo(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
      s.shapes = s.shapes.map((l) => new vt(l));
      try {
        n = new lt(s);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      n = new vt(s);
    if (n.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${n.issues.map((l) => l.message).join(", ")}`);
    const r = t.find((l) => {
      var a;
      return l.id === (((a = s == null ? void 0 : s.stock) == null ? void 0 : a.id) ?? (s == null ? void 0 : s.stockId));
    });
    return n.stock = r, n;
  }).sort(Mi.ID);
}
function Ac({
  cutList: i,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = new Wi(e), n = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return s.stock = n, s;
  });
}
function Dc({
  segmentList: i,
  stockList: t
}) {
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return e.stock = s, new us(e);
  });
}
function pn(i = null, t = null, e = null) {
  if (!i) throw new Error("no container supplied to willItFit");
  if (!t) throw new Error("no shape supplied to willItFit");
  const s = t.rot;
  function n(w = !1, d = "l") {
    var g, S;
    return ce.equalTo(
      t[w ? _t(d) : d],
      i[d]
    ) || ce.lessThanOrEqualTo(t[w ? _t(d) : d], i[d] - (Zi(i) ? (S = (g = i == null ? void 0 : i.saw) == null ? void 0 : g.options) == null ? void 0 : S.minSpacing : 0));
  }
  function r(w = !0) {
    return t.forceRotate(s), w;
  }
  const o = t.getNecessaryOrientation(i);
  let l = null;
  if (o && (l = o === "l" ? 0 : 1), t.orientationLock) {
    if (x(e) && e !== l)
      return r(!1);
    t.forceRotate(l);
  } else x(e) && t.forceRotate(e);
  if (l && t.rot !== l)
    return r(!1);
  const a = n(!1, "l"), u = n(!1, "w"), h = n(!0, "l"), v = n(!0, "w");
  return x(e) || o ? r(a && u) : r(a && u || h && v);
}
function _i(i, t, e = "decimal", s = !1) {
  return x(i == null ? void 0 : i[t]) ? T({ v: i[t], nf: e, pl: s }) : null;
}
class as {
  constructor(t, e = "decimal", s = !1) {
    c(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    c(this, "warningKeys", ["q"]);
    c(this, "issueKeys", ["l", "w", "t", "trim"]);
    c(this, "readonly");
    c(this, "id");
    c(this, "listId");
    // numberFormat: NumberFormat = 'decimal';
    c(this, "l");
    c(this, "w");
    c(this, "t");
    c(this, "q");
    c(this, "name");
    c(this, "material");
    c(this, "trim", {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    });
    c(this, "cost", null);
    c(this, "grain", "");
    c(this, "selected", !1);
    //used for multiple editing
    c(this, "multiEdit", !1);
    //is this the multi-select stock
    c(this, "type", null);
    c(this, "autoAdd", !1);
    c(this, "used");
    c(this, "saw");
    c(this, "preventGrainRotation");
    c(this, "allowExactFitShapes");
    c(this, "issues", []);
    c(this, "warnings", []);
    c(this, "notes", "");
    var o, l;
    t = qt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ns(), ["l", "w", "t"].forEach((a) => {
      this[a] = _i(t, a, e, s);
    }), this.q = x(t == null ? void 0 : t.q) ? fi(Ei(t.q)) ? null : Ei(t.q) : null, this.autoAdd = x(t.autoAdd) ? t.autoAdd : !1, this.name = x(t.name) ? Ni(t.name).toUpperCase() : "", this.material = x(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((a) => {
      this.trim[a] = _i(t.trim, a, e, s);
    }), this.cost = x(t.cost) ? t.cost : null, t.grain = (o = t == null ? void 0 : t.grain) == null ? void 0 : o.toLowerCase(), (t == null ? void 0 : t.grain) === " " && (t.grain = ""), this.grain = t.grain, this.grain = x(t.grain) && ["l", "w"].includes(t.grain.toLowerCase()) ? t.grain.toLowerCase() : "", this.multiEdit = t.multiEdit, this.type = t.type, this.allowExactFitShapes = x(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.preventGrainRotation = !0, this.notes = t != null && t.notes ? (l = t.notes) == null ? void 0 : l.replace(/,/g, " ") : "";
  }
  //change the type of stock
  changeType(t) {
    switch (t !== "sheet" && (this.grain = ""), t) {
      case "linear":
        this.trim.y1 = 0, this.trim.y2 = 0;
        break;
      case "roll":
        this.trim.x1 = 0, this.trim.x2 = 0, this.trim.y1 = 0, this.trim.y2 = 0, this.t = null;
        break;
    }
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  isSquare() {
    return this.l === this.w;
  }
  validate() {
    return this.issues = [], ["l", "w", "t"].forEach((t) => je[t]({ item: this })), je.trim({ item: this }), ["q"].forEach((t) => je[t]({ item: this, isWarning: !0 })), this.issues = this.issues.filter((t) => t), this.issues;
  }
}
class Ui {
  constructor(t, e = "decimal", s = !1) {
    c(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    c(this, "readonly");
    c(this, "id");
    c(this, "listId");
    // numberFormat: NumberFormat = 'decimal';
    c(this, "l");
    c(this, "w");
    c(this, "t");
    c(this, "q", 1);
    c(this, "name", "");
    c(this, "material", "");
    c(this, "cost");
    c(this, "orientationLock");
    c(this, "selectedMaterial");
    c(this, "selected", !1);
    //used for multiple editing
    c(this, "multiEdit", !1);
    c(this, "issues", []);
    c(this, "notes", "");
    c(this, "stockLock");
    c(this, "stockMatch");
    c(this, "customData");
    //objects
    c(this, "machining");
    c(this, "trim", Object.fromEntries(
      mt.map((t) => [t, 0])
    ));
    c(this, "banding", Object.fromEntries(
      Tt.map((t) => [t, !1])
    ));
    c(this, "bandingOptions", Object.fromEntries([
      ...Tt,
      "all"
    ].map((t) => [t, {}])));
    c(this, "finish", Object.fromEntries(
      pt.map((t) => [t, ""])
    ));
    c(this, "finishOptions", Object.fromEntries(
      pt.map((t) => [t, {}])
    ));
    var r, o, l, a, u;
    t = t = qt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ns(), ["l", "w", "t"].forEach((h) => {
      this[h] = _i(t, h, e, s);
    }), this.q = x(t == null ? void 0 : t.q) ? fi(Ei(t.q)) ? null : Ei(t.q) : null, this.name = x(t.name) ? Ni(t.name).toUpperCase() : "", this.material = x(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, this.notes = t != null && t.notes ? (r = t.notes) == null ? void 0 : r.replace(/,/g, " ") : "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [];
    for (const h of Object.keys(this.trim))
      this.trim[h] = _i(t.trim, h, e, s);
    for (const h of Object.keys(this.banding))
      this.banding[h] = x((o = t == null ? void 0 : t.banding) == null ? void 0 : o[h]) ? t.banding[h] : !1;
    for (const h of Object.keys(this.bandingOptions))
      this.bandingOptions[h] = x((l = t == null ? void 0 : t.bandingOptions) == null ? void 0 : l[h]) ? t.bandingOptions[h] : {};
    for (const h of Object.keys(this.finish))
      this.finish[h] = x((a = t == null ? void 0 : t.finish) == null ? void 0 : a[h]) ? t.finish[h] : "";
    for (const h of Object.keys(this.finishOptions))
      this.finishOptions[h] = x((u = t == null ? void 0 : t.finishOptions) == null ? void 0 : u[h]) ? t.finishOptions[h] : {};
    this.orientationLock = x(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new dn(t.machining ?? {
      holes: [],
      hingeHoles: [],
      corners: []
    }), this.customData = (t == null ? void 0 : t.customData) ?? {};
  }
  isSquare() {
    return this.l === this.w;
  }
  /**
   * change the type of the stock
   * @param {String} newType
   */
  changeStockType(t) {
    switch (t) {
      case "sheet":
      case "roll":
        this.orientationLock = "", t === "roll" && (this.t = null);
        break;
      case "linear":
        this.orientationLock = "", this.banding = Object.fromEntries(
          Tt.map((e) => [e, !1])
        );
        break;
    }
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  getLongSide() {
    return T({ v: this.l }) > T({ v: this.w }) ? T({ v: this.l }) : T({ v: this.w });
  }
  getShortSide() {
    return T({ v: this.l }) < T({ v: this.w }) ? T({ v: this.l }) : T({ v: this.w });
  }
  getRotatedDimensions() {
    return ["l", "w"].includes(this.orientationLock) ? {
      name: this.name,
      listId: this.listId,
      l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
      w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
      orientationLock: this.orientationLock
    } : {
      name: this.name,
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  getTrimmedDimensions(t = !1) {
    let e = { l: T({ v: this.l }), w: T({ v: this.w }) };
    return t && (e = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: e.l - (T({ v: this.trim.x1 }) + T({ v: this.trim.x2 })),
      w: e.w - (T({ v: this.trim.y1 }) + T({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, e) {
    if (!this.readonly)
      if (t = T({ v: t }), this.trim) {
        for (const s in this.trim)
          this.trim[s] = t;
        e === "linear" && (this.trim.y1 = 0, this.trim.y2 = 0);
      } else
        this.trim = {
          x1: t,
          x2: t,
          y1: e !== "linear" ? t : 0,
          y2: e !== "linear" ? t : 0
        };
  }
  /**
   * to align with Shape
   * @remarks input shapes are always 0
   */
  get rot() {
    return 0;
  }
  validate({
    inputStockList: t = [],
    index: e = null,
    stockType: s = null,
    partTrim: n = 0,
    useInventory: r = !1
  }) {
    return this.issues = [], ["l", "w", "t"].forEach((o) => je[o]({ item: this, index: e })), n = T({ v: n }), je.partTrim({ item: this, partTrim: n, index: e }), je.trim({ item: this, index: e }), je.machining({ item: this, index: e }), ["q"].forEach((o) => {
      je[o]({ item: this, index: e, isWarning: !0 });
    }), t.length && !r && je.stockMatch({ item: this, inputStockList: t, stockType: s, partTrim: n, index: e, isWarning: !0 }), this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class Zt {
  constructor(t) {
    c(this, "id");
    c(this, "parentID");
    c(this, "name");
    c(this, "x");
    c(this, "y");
    c(this, "l");
    c(this, "w");
    c(this, "t");
    c(this, "q");
    c(this, "material");
    c(this, "grain");
    c(this, "orientationLock");
    c(this, "duplicate");
    c(this, "trimmed");
    c(this, "preventAutoRotation");
    c(this, "preventGrainRotation");
    c(this, "numberFormat");
    c(this, "issues", []);
    c(this, "stock");
    c(this, "stockId");
    //used when object is compressed
    c(this, "cost");
    c(this, "offcut");
    c(this, "notes");
    //for user notes
    c(this, "proximity");
    //objects
    c(this, "_trim", Object.fromEntries(
      mt.map((t) => [t, 0])
    ));
    c(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    this.issues = [];
    const e = [];
    ["x", "y", "l", "w", "t"].forEach((s) => e.push(...je[s]({ item: t }))), this.issues.push(...je.customData({ item: t })), this.issues.push(...e.filter((s) => s));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = x(t.id) ? t.id.toString() : this.id || null, this.setParentID(), x(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = x(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = Lr(Ni(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, x(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = x(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = x(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && x(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.trimmed = x(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = x(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
        rectangle: null,
        distance: null
      };
      try {
        this.trim = (t == null ? void 0 : t.trim) || (t == null ? void 0 : t._trim);
      } catch (l) {
        if ((o = l == null ? void 0 : l.cause) != null && o.issues) this.issues.push(...l.cause.issues);
        else throw new Error(`error when attempting to set trim ${JSON.stringify(l)}`);
      }
    }
    [
      {
        key: "x",
        default: 0,
        required: !1
      },
      {
        key: "y",
        default: 0,
        required: !1
      },
      {
        key: "l",
        default: null,
        required: !0
      },
      {
        key: "w",
        default: 1,
        //for linear
        required: !0
      },
      {
        key: "t",
        default: null,
        required: !1
      }
    ].forEach((l) => {
      let a = t[l.key];
      if (!x(a))
        return this[l.key] = this[l.key] || l.default;
      typeof a == "string" && (a = T({ v: a })), this[l.key] = a;
    }), !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = _t(this.grain))), x(t == null ? void 0 : t.stock) && (At(t.stock) ? this.stock = t.stock : this.stock = new Dt(t.stock), this.stockId = this.stock.id);
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      mt.map((e) => [e, 0])
    ), !!Xt(t, !0))
      for (const e of mt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = T({ v: t[e] });
          } catch {
            s = 0, new Z({ item: this, field: [["trim", e]], message: `${t[e] ?? "N/A"} is not a valid value for trim: ${e}` });
          }
        else
          s = t[e];
        this._trim[e] = s;
      }
  }
  get trim() {
    return this._trim;
  }
  get rot() {
    return this.w > this.l ? 1 : 0;
  }
  setParentID() {
    this.parentID = this.getParentID();
  }
  getParentID() {
    return this.id ? this.parentID ? this.parentID : typeof this.id != "number" && this.id.includes(".") ? this.id.split(".")[0] : typeof this.id != "number" && !this.id.includes(".") ? null : this != null && this.id ? this.id.toString() : null : null;
  }
  getCopyNumber() {
    return typeof this.id != "number" && this.id.includes(".") ? parseInt(this.id.split(".")[1]) : 0;
  }
  dimensions() {
    return {
      id: this.id,
      l: this.l,
      w: this.w,
      t: this.t
    };
  }
  getRotatedDimensions() {
    return ["l", "w"].includes(this.orientationLock) ? {
      l: this.orientationLock === "l" ? this.getLongSide() : this.getShortSide(),
      w: this.orientationLock === "l" ? this.getShortSide() : this.getLongSide(),
      orientationLock: this.orientationLock
    } : {
      l: this.getLongSide(),
      w: this.getShortSide(),
      orientationLock: this.orientationLock
    };
  }
  coords() {
    return {
      id: this.id,
      x: this.x,
      y: this.y
    };
  }
  hasCoords(t, e) {
    return this.x === t && this.y === e;
  }
  getAspect() {
    return this.l > this.w ? this.w / this.l : this.l / this.w;
  }
  getPerimeter() {
    return this.w * 2 + this.l * 2;
  }
  getLongSide() {
    return this.l > this.w ? this.l : this.w;
  }
  getShortSide() {
    return this.l < this.w ? this.l : this.w;
  }
  getSides() {
    return [
      this.getSide("bottom"),
      this.getSide("right"),
      this.getSide("top"),
      this.getSide("left")
    ];
  }
  getSide(t) {
    switch (t) {
      case "bottom":
        return new zt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new zt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new zt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new zt({
          x1: this.x,
          x2: this.x,
          y1: this.y,
          y2: this.y + this.w,
          type: "left"
          // parentID: this.id
        });
    }
  }
  getTopPosition(t = !0, e = null) {
    var s;
    if (t && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && e === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.y + this.w + ((this.stock.getBladeWidth() || e) ?? 0) : this.y + this.w;
  }
  getRightPosition(t = !0, e = null) {
    var s;
    if (t && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && e === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.x + this.l + ((this.stock.getBladeWidth() || e) ?? 0) : this.x + this.l;
  }
  getBottomPosition(t = !0, e = null) {
    var s;
    if (t && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && e === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.y - ((this.stock.getBladeWidth() || e) ?? 0) : this.y;
  }
  getLeftPosition(t = !0, e = null) {
    var s;
    if (t && typeof ((s = this.stock) == null ? void 0 : s.getBladeWidth) > "u" && e === null)
      throw new Error("not able to detect blade width in getTopPosition");
    return t ? this.x - ((this.stock.getBladeWidth() || e) ?? 0) : this.x;
  }
  sharesSide(t, e = 0, s = null) {
    switch (s) {
      case "left":
        return t.x + t.l + e === this.x;
      case "right":
        return t.x === this.x + this.l + e;
      case "bottom":
        return t.y + t.w + e === this.y;
      case "top":
        return t.y === this.y + this.w + e;
    }
    return !1;
  }
  sameSide(t, e = null) {
    switch (e) {
      case "left":
        return t.x === this.x;
      case "right":
        return t.x + t.l === this.x + this.l;
      case "bottom":
        return t.y === this.y;
      case "top":
        return t.y + t.w === this.y + this.w;
    }
    return !1;
  }
  //considers if the shape can rotate
  getLongestDimension(t) {
    return this.orientationLock ? this[t] : this.getLongSide();
  }
  getArea() {
    return this.w * this.l;
  }
  getCoords(t, e = !1) {
    const s = new Ee(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Ee(this.x, this.y + this.w);
    if (n.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !e)
      return [n, s];
    const r = new Ee(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new Ee(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, n, o, s];
  }
  getCorners() {
    return {
      bottomLeft: new Ee(this.x, this.y),
      topLeft: new Ee(this.x, this.y + this.w),
      topRight: new Ee(this.x + this.l, this.y + this.w),
      bottomRight: new Ee(this.x + this.l, this.y)
    };
  }
  round() {
    return {
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  getClass() {
    return this.constructor.name;
  }
  getTrimmedDimensions(t = !1) {
    let e = { l: this.l, w: this.w };
    return t && (e = this.getRotatedDimensions()), this.trimmed ? e : {
      l: e.l - (this.trim.x1 + this.trim.x2),
      w: e.w - (this.trim.y1 + this.trim.y2)
    };
  }
  //trim the rectangle
  trimDimensions() {
    var t, e, s, n;
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !fi(parseFloat(String(r)))).length && (x(this.l) && (this.l -= (x((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (x((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new Z({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), x(this.w) && (this.w -= (x((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (x((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new Z({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
  }
  /**
   * change the size of the rectangle back to the original size
   */
  removeTrim() {
    var t, e, s, n;
    if (this.trimmed) {
      if (this.l += (typeof ((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) == "number" ? this.trim.x1 : 0) + (typeof ((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) == "number" ? this.trim.x2 : 0), this.w += (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) == "number" ? this.trim.y1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) == "number" ? this.trim.y2 : 0), this.l <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative length`);
      if (this.w <= 0)
        throw new Error(`trimming this ${this.id} has produced a negative width`);
      this.trimmed = !1;
    }
  }
  getUntrimmedDimensions() {
    var s, n, r, o;
    if (!this.trimmed) return { l: this.l, w: this.w };
    const t = this.getLongSide(), e = this.getShortSide();
    return {
      l: t + (typeof ((s = this == null ? void 0 : this.trim) == null ? void 0 : s.x1) == "number" ? this.trim.x1 : 0) + (typeof ((n = this == null ? void 0 : this.trim) == null ? void 0 : n.x2) == "number" ? this.trim.x2 : 0),
      w: e + (typeof ((r = this == null ? void 0 : this.trim) == null ? void 0 : r.y1) == "number" ? this.trim.y1 : 0) + (typeof ((o = this == null ? void 0 : this.trim) == null ? void 0 : o.y2) == "number" ? this.trim.y2 : 0)
    };
  }
  isIdentical(t, e = !1) {
    if (this.constructor !== t.constructor || this.t !== t.t || this.orientationLock !== t.orientationLock)
      return !1;
    if (ft(this)) {
      if (t.id === this.id) return !0;
    } else {
      if (t.parentID === this.parentID) return !0;
      if (yt(this) && e && this.parentID !== t.parentID) return !1;
    }
    const { w: s, l: n } = this, { w: r, l: o } = t;
    if (!(s === r && n === o) && !(s === o && n === r))
      return !1;
    const l = this.trim, a = t.trim;
    return !l || !a ? l === a : l.x1 === a.x1 && l.x2 === a.x2 && l.y1 === a.y1 && l.y2 === a.y2;
  }
  /**
   * is this rectangle a square
   */
  isSquare() {
    return this.l === this.w;
  }
  getDistancesToContainerEdges(t) {
    return [
      this.x - t.x,
      t.l - (this.x + this.l),
      t.w - (this.y + this.w),
      this.y - t.y
    ];
  }
  isInsideStock(t) {
    return !(this.x + this.l > t.l || this.y + this.w > t.w || this.x < 0 || this.y < 0);
  }
  /**
  * Creates or retrieves a cached rectangle used for proximity detection.
  * Optimized for frequent calls with the same distance parameter.
  */
  getProximityRectangle(t) {
    if (!t || t < 0) return null;
    const e = this.proximity;
    if ((e == null ? void 0 : e.distance) === t) {
      const n = e.rectangle;
      return this.x === 0 ? (n.x = 0, n.l = this.l + t) : (n.x = this.x - t, n.l = this.l + t * 2), this.y === 0 ? (n.y = 0, n.w = this.w + t) : (n.y = this.y - t, n.w = this.w + t * 2), n;
    }
    const s = new Zt({
      id: `${this.id}-proximity`,
      name: "proximity",
      x: this.x === 0 ? 0 : this.x - t,
      y: this.y === 0 ? 0 : this.y - t,
      l: this.x === 0 ? this.l + t : this.l + t * 2,
      w: this.y === 0 ? this.w + t : this.w + t * 2,
      preventAutoRotation: !0
    });
    return this.proximity = { rectangle: s, distance: t }, s;
  }
  isShape() {
    return yt(this);
  }
  isSegment() {
    return qo(this);
  }
  isStock() {
    return At(this);
  }
  isGroup() {
    return ft(this);
  }
  isUserGroup() {
    return cs(this);
  }
}
class ji extends Zt {
  //used by evo
  constructor(e) {
    super(e);
    c(this, "type");
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes(e.type) ? this.type = e.type : new Z({ item: this, field: [["type"]], message: `Container type ${e.type ?? "N/A"} is not valid` }), this.type || (this.type = "sheet"), this.setSaw(e), this.cutType) {
      case "beam":
        (!x(this.t) || this.t <= 0) && new Z({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e) {
    var s, n, r, o;
    if (x(e) || (this.saw = new Ot(null)), x(e == null ? void 0 : e.saw)) {
      if (!((n = e == null ? void 0 : e.saw) != null && n.cutType)) {
        const { cutType: l, cutPreference: a } = Xi(e.saw.cutPreference);
        e.saw.cutType = l, e.saw.cutPreference = a;
      }
    } else {
      e.saw = {};
      const { cutType: l, cutPreference: a } = Xi(e.cutPreference);
      e.saw.cutType = l, e.saw.cutPreference = a, x(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), x((s = e == null ? void 0 : e.blade) == null ? void 0 : s.width) && (e.saw.bladeWidth = e.blade.width), x(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), x(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), x(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
    }
    try {
      x(e == null ? void 0 : e.saw) && (Bo(e.saw) ? this.saw = e.saw : this.saw = new Ot(e.saw, this.type)), (o = (r = this.saw) == null ? void 0 : r.issues) != null && o.length && this.issues.push(...this.saw.issues);
    } catch (l) {
      throw new Error("error creating saw", { cause: l });
    }
  }
  get cutType() {
    var e, s, n, r;
    return x((e = this == null ? void 0 : this.saw) == null ? void 0 : e.cutType) ? this.saw.cutType : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutType) ?? null;
  }
  get cutPreference() {
    var e, s, n, r;
    return x((e = this.saw) == null ? void 0 : e.cutPreference) ? this.saw.cutPreference : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var e, s, n, r;
    return x((e = this.saw) == null ? void 0 : e.guillotineOptions) ? this.saw.guillotineOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var e, s, n, r;
    return x((e = this.saw) == null ? void 0 : e.efficiencyOptions) ? this.saw.efficiencyOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.efficiencyOptions) ?? null;
  }
  get primaryCompression() {
    var e, s;
    if (this.cutType === "efficiency")
      return (s = (e = this.saw) == null ? void 0 : e.efficiencyOptions) != null && s.primaryCompression ? this.efficiencyOptions.primaryCompression : "y";
  }
  getHalfBladeWidth() {
    const e = this.getBladeWidth();
    return e ? e / 2 : 0;
  }
  getBladeWidth() {
    var s, n, r;
    const e = (((s = this == null ? void 0 : this.saw) == null ? void 0 : s.bladeWidth) || ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.bladeWidth)) ?? 0;
    return fi(e) ? 0 : e;
  }
  getStock() {
    return At(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Ot {
  constructor(t, e = "sheet") {
    c(this, "bladeWidth");
    c(this, "stockType");
    c(this, "issues");
    c(this, "cutType");
    c(this, "cutPreference");
    c(this, "guillotineOptions");
    c(this, "efficiencyOptions");
    c(this, "stackHeight");
    c(this, "options");
    switch (t = qt(t), this.options = ri({}, t == null ? void 0 : t.options, {
      stockSelection: "efficiency",
      stackingMode: "dimensions",
      minSpacing: 0,
      minSpacingDimension: {}
    }), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? null, this.stockType = (t == null ? void 0 : t.stockType) ?? e, this.issues = [], ["sheet", "linear", "roll"].includes(this.stockType) || new Z({ item: this, field: [["stockType"]], message: `Saw stock type: ${this.stockType} not valid` }), this.stockType || (this.stockType = "sheet"), this.cutType = t == null ? void 0 : t.cutType, this.stockType) {
      case "sheet":
        [
          "efficiency",
          "guillotine",
          "beam",
          null,
          void 0
        ].includes(this.cutType) || new Z({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
      case "roll":
        ["efficiency", "guillotine", null, void 0].includes(this.cutType) || new Z({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
      case "linear":
        break;
      default:
        ["none", null, void 0].includes(this.cutType) || new Z({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
    }
    switch (this.cutPreference = t == null ? void 0 : t.cutPreference, this.cutType) {
      case "guillotine":
        ["l", "w", "flex"].includes(this.cutPreference) || new Z({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"}` }), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && new Z({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"} and stock type: ${this.stockType}` }), this.options.minSpacing = 0;
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || new Z({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"}` }), this.options.minSpacing = 0;
        break;
    }
    switch (x(t == null ? void 0 : t.bladeWidth) ? typeof t.bladeWidth == "string" ? this.bladeWidth = T({ v: t.bladeWidth }) : this.bladeWidth = t.bladeWidth : this.bladeWidth = 0, (fi(this.bladeWidth) || this.bladeWidth < 0) && (new Z({ item: this, field: [["bladeWidth"]], message: `Saw blade width: ${this.bladeWidth ?? "N/A"} is not valid` }), this.bladeWidth = 0), this.stockType) {
      case "sheet":
        [
          "efficiency",
          "guillotine",
          "beam",
          null,
          void 0
        ].includes(this.cutType) || new Z({ item: this, field: [["cutType"], ["stockType"]], message: `Invalid cut type: ${this.cutType} for stock type: ${e}` }), this.cutType === "guillotine" && (["l", "w", "flex"].includes(this.cutPreference) || new Z({ item: this, field: [["cutPreference"], ["cutType"]], message: `Invalid cut preference: ${this.cutPreference} for stock type: ${e}, cut type: ${this.cutType}` })), this.cutType === "beam" && [null, void 0].includes(this.stackHeight) && new Z({ item: this, field: [["stackHeight"], ["cutType"]], message: "Beam saws require a stack height to be set" }), this.cutType === "beam" && (this.cutPreference = "l"), this.cutType || (this.cutType = "efficiency");
        break;
      case "linear":
        this.cutType = null, this.cutPreference = null;
        break;
    }
    switch (this.cutType) {
      case "efficiency":
        this.efficiencyOptions = ri({}, t == null ? void 0 : t.efficiencyOptions, { primaryCompression: "y" });
        break;
      case "guillotine":
        this.guillotineOptions = ri({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null });
        break;
      case "beam":
        this.guillotineOptions = ri({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null }), this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && new Z({ item: this, field: [["stackHeight"], ["cutType"]], message: "Beam saws require a stack height to be set" });
        break;
    }
  }
  clone() {
    const t = structuredClone(this);
    return new Ot(t);
  }
}
class Dt extends ji {
  constructor(e) {
    e = qt(e), e.preventAutoRotation = (e == null ? void 0 : e.type) === "roll", e.autoAdd && !e.q && (e.q = 1);
    super(e);
    c(this, "_id");
    //used for mongo
    c(this, "autoAdd");
    c(this, "allowExactFitShapes");
    c(this, "analysis");
    c(this, "tidy");
    c(this, "used");
    c(this, "stack");
    c(this, "winningStrategy");
    //used for reporting
    c(this, "unusable");
    //used by stock matching
    c(this, "duplicatePattern");
    c(this, "score");
    c(this, "rootSegment");
    delete this.stock, this._id = e == null ? void 0 : e._id, this.autoAdd = x(e == null ? void 0 : e.autoAdd) ? e.autoAdd : !1, this.allowExactFitShapes = x(e == null ? void 0 : e.allowExactFitShapes) ? e.allowExactFitShapes : !1, this.analysis = x(e.analysis) ? e.analysis : null, this.tidy = x(e == null ? void 0 : e.tidy) ? e.tidy : !1, this.algoBenchmark = null, this.used = x(e == null ? void 0 : e.used) ? e.used : !1, this.stack = x(e == null ? void 0 : e.stack) ? e.stack : !1, this.duplicatePattern = (e == null ? void 0 : e.duplicatePattern) ?? null, this.initStock(e);
  }
  initStock(e) {
    switch (this.type) {
      case "linear":
      case "roll":
        this.trim.y1 = 0, this.trim.y2 = 0, this.grain = null;
        break;
    }
    this.validateStock(e);
  }
  reset() {
    this.used = !1, this.stack = null, this.score = null, this.rootSegment = null, this.tidy = null, this.analysis = null, this.duplicatePattern = null, this.shapes = [];
  }
  validateStock(e) {
    const s = [];
    e.autoAdd || ["q"].forEach((n) => s.push(...je[n]({ item: e }))), ["grain"].forEach((n) => s.push(...je[n]({ item: e }))), this.issues.push(...s.filter((n) => n));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = At(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
  }
  resetStrategies() {
    this.algoBenchmark = null;
  }
  isIdentical(e) {
    let s = !1, n = !1, r = !1, o = !1;
    if (this.material === e.material && (s = !0), this.t === e.t && (n = !0), this.l === e.l && (r = !0), this.w === e.w && (o = !0), s && n && r && o) return !0;
  }
  hasStack() {
    return typeof this.stack == "number";
  }
  isStacked() {
    return At(this.stack) || typeof this.stack == "string";
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = parseInt(s.pop()), e++), s.push(e.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Dt(r);
  }
}
class gn extends Zt {
  constructor(e) {
    super(e);
    c(this, "addToInventory");
    //for front end selection
    c(this, "added");
    //for adding to inputStock
    c(this, "placementOrder");
    c(this, "flex");
    this.cost = this.getCost(), this.addToInventory = (e == null ? void 0 : e.addToInventory) ?? !0, this.added = !1, this.placementOrder = (e == null ? void 0 : e.placementOrder) ?? null, this.offcut = !0;
  }
  compressForSaving() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) || ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.stock, delete this._trim, delete this.trimmed;
  }
  getCost() {
    var e;
    return (e = this.stock) != null && e.isStock() && this.stock ? parseFloat((this.getArea() / this.stock.getArea() * this.stock.cost).toFixed(2)) : 0;
  }
}
function Ec({
  offcuts: i,
  stockList: t,
  preventAutoRotation: e = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    const n = t.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, e && (s.preventAutoRotation = !0), new gn(s);
  });
}
class vt extends Zt {
  constructor(e) {
    e = qt(e);
    super(e);
    c(this, "added");
    c(this, "guillotineData");
    c(this, "stockLock");
    c(this, "score");
    c(this, "bestScore");
    c(this, "placementOrder");
    //groups
    c(this, "groupPlacementOrder");
    c(this, "group");
    c(this, "groupID");
    c(this, "inGroup");
    //is the shape currently part of at least one group
    c(this, "inUserGroup");
    //is the shape currently part of a user group`
    c(this, "addedAsGroup");
    c(this, "isFirstShape");
    c(this, "firstShapeSampleRotations", []);
    //used for setting the rotation of the first shape (guillotine)
    c(this, "index");
    //used for ptx
    c(this, "patternMatch");
    //used for stack detection
    c(this, "stockMatch");
    c(this, "minSpacing");
    c(this, "priority");
    c(this, "weighting", {});
    //objects
    c(this, "machining");
    c(this, "_banding", Object.fromEntries(
      Tt.map((e) => [e, !1])
    ));
    c(this, "_finish", Object.fromEntries(
      pt.map((e) => [e, ""])
    ));
    c(this, "_trim", { x1: 0, x2: 0, y1: 0, y2: 0 });
    this.initShape(e);
  }
  get trim() {
    return super.trim;
  }
  set trim(e) {
    super.trim = e;
  }
  initShape(e, s = !1) {
    var n;
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = x(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, x(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = x(e == null ? void 0 : e.machining) ? new dn(e.machining) : null), this.added = x(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = x(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = x(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = x(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = x(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = x(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = x(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = x(e == null ? void 0 : e.placementOrder) ? e.placementOrder : this.placementOrder || null, this.groupPlacementOrder = x(e == null ? void 0 : e.groupPlacementOrder) ? e.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (e == null ? void 0 : e.minSpacing) ?? (this.minSpacing || 0), this.priority = (e == null ? void 0 : e.priority) ?? {};
  }
  initGuillotineData(e) {
    var s, n, r, o, l, a, u, h;
    this.guillotineData = ri({}, e == null ? void 0 : e.guillotineData, {
      firstShape: ((s = this == null ? void 0 : this.guillotineData) == null ? void 0 : s.firstShape) || null,
      myPhase: ((n = this == null ? void 0 : this.guillotineData) == null ? void 0 : n.myPhase) || null,
      myStripParent: ((r = this == null ? void 0 : this.guillotineData) == null ? void 0 : r.myStripParent) || null,
      myStripDirection: ((o = this == null ? void 0 : this.guillotineData) == null ? void 0 : o.myStripDirection) || null,
      stripShapeBatches: {
        subsetUsed: ((a = (l = this == null ? void 0 : this.guillotineData) == null ? void 0 : l.stripShapeBatches) == null ? void 0 : a.subsetUsed) || !1,
        groups: ((h = (u = this == null ? void 0 : this.guillotineData) == null ? void 0 : u.stripShapeBatches) == null ? void 0 : h.groups) || {}
      }
    });
  }
  cloneGuillotineData() {
    var e;
    return (e = this.guillotineData) != null && e.myStripParent && (yt(this.guillotineData.myStripParent) || ft(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(e, s = !1) {
    var o, l;
    if (!e) return 0;
    let n = (this == null ? void 0 : this.minSpacing) || ((l = (o = e.saw) == null ? void 0 : o.options) == null ? void 0 : l.minSpacing) || 0;
    const r = e.getBladeWidth();
    return r > n && (n = r), s && (n -= r), n < 0 && (n = 0), n;
  }
  validateShape(e) {
    const s = [];
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...je[n]({ item: e }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
  }
  //individual shape weighting
  /* calculateWeighting()
  	{
  		// const aspect = this.w / this.l;
  		if ( aspect > 0.5 )
  		{
  			//cater for small parts
  			const area = s.getArea();
  			const areaPercentage = area / maxArea;
  
  			if ( areaPercentage <= 0.1 )
  			{
  				s.weighting.edge = areaPercentage;
  			}
  		}
  		//the closer to zero, the higher the edge weighting
  		this.weighting.edge = 1 - aspect;
  		this.weighting.edge *= 2;
  	} */
  update(e) {
    e = qt(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Tt.map((s) => [s, !1])
    ), !!Xt(e, !0))
      for (const s of Tt)
        this._banding[s] = x(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return Mo(this._banding);
  }
  get finish() {
    return this._finish;
  }
  get FacesArray() {
    return pt.map((e) => {
      var s;
      return (s = this.finish) == null ? void 0 : s[e];
    });
  }
  set finish(e) {
    if (this._finish = Object.fromEntries(
      pt.map((s) => [s, ""])
    ), !!Xt(e, !0))
      for (const s of pt)
        this._finish[s] = x(e == null ? void 0 : e[s]) ? e[s] : "";
  }
  //compress for saving / transfer
  save() {
    var e, s, n;
    delete this.group, (e = this == null ? void 0 : this.guillotineData) == null || delete e.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, Tt.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), pt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), Oo(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = _t(e.grain)), rn([
      () => Ii(this.isInsideStock(e), `shape ${this.id} is not inside stock`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, ft(this) && this.shapes.forEach((e) => e.removeFromStock());
  }
  setBestScore(e, s = null) {
    const n = {
      x: e.x,
      y: e.y,
      rot: e.rot,
      total: e.score.total,
      score: e.score,
      group: e.group,
      weighting: null,
      point: s
    };
    this.bestScore = n;
  }
  resetBestScore() {
    const e = {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    };
    this.bestScore = e, this.resetGuillotineData(!0);
  }
  resetScore() {
    this.score = null, this.resetGuillotineData(!0);
  }
  resetBothScores() {
    this.resetBestScore(), this.resetScore();
  }
  resetPosition() {
    this.x = 0, this.y = 0, this.placementOrder = null, this.resetGuillotineData(!0);
  }
  resetGroupData() {
    this.inGroup = !1, this.group = null, this.groupID = null, this.groupPlacementOrder = null, this.grain = null;
  }
  resetGuillotineData(e = !1) {
    var n, r;
    const s = {
      firstShape: !1,
      myPhase: null,
      myStripDirection: null,
      stripShapeBatches: {
        subsetUsed: !1,
        groups: {}
      }
    };
    e && (s.stripShapeBatches.groups = (r = (n = this.guillotineData) == null ? void 0 : n.stripShapeBatches) == null ? void 0 : r.groups), this.guillotineData = s;
  }
  reset(e = !1, s = !0, n = !1) {
    this.removeFromStock(), this.resetPosition(), this.setRotation(0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, e || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
  }
  round() {
    return {
      x: Math.round(this.x),
      y: Math.round(this.y),
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  //get an array of allowed rotations for this container
  getAllowedRotations(e) {
    const s = [];
    for (let n = 0; n <= 1; n++)
      this.canRotate(n, e) && this.willItFit(e, n) && s.push(n);
    return s;
  }
  /**
   * checks if a shape can rotate
   * checks for fit and grain
   * does not change the shape's rotation during the checks
   * @returns false if cannot rotate or can rotate but won't fit
   */
  canRotate(e = null, s = null) {
    if (!x(e))
      throw new Error("no rotation provided to canRotate");
    if (e === !0 && (e = 1), e === !1 && (e = 0), this.isSquare() && e || s && !this.willItFit(s, e))
      return !1;
    const n = this.getNecessaryOrientation(s);
    return !(n === "l" && e === 1 || n === "w" && e === 0);
  }
  /**
   * can a shape rotate to produce the specified dimensions on a specific side
   * @todo tests
   */
  canRotateToDimension(e, s, n = null) {
    if (!s) throw new Error("requiredSide not supplied to canRotateToDimension");
    if (this.l !== e && this.w !== e) return !1;
    if (this.l === this.w) return !0;
    const r = this.getLongSide(), o = this.getShortSide();
    if (n) {
      if (s === "l") {
        if (r === e && this.canRotate(0, n) || o === e && this.canRotate(1, n)) return !0;
      } else if (s === "w" && (o === e && this.canRotate(0, n) || r === e && this.canRotate(1, n)))
        return !0;
    } else if (this.orientationLock) {
      if (this.orientationLock === "l")
        return s === "l" && e === r;
      if (this.orientationLock === "w")
        return s === "l" && e === o;
    }
    return !1;
  }
  canRotateToDimensionRange(e, s, n, r = null) {
    if (!n) throw new Error("requiredSide not supplied to canRotateToDimensionRange");
    if (this.l >= e && this.l <= s || this.w >= e && this.w <= s) {
      if (this.l === this.w) return !0;
      const o = this.getLongSide(), l = this.getShortSide();
      if (r) {
        if (n === "l") {
          if (o >= e && o <= s && this.canRotate(0, r) || l >= e && l <= s && this.canRotate(1, r)) return !0;
        } else if (n === "w" && (l >= e && l <= s && this.canRotate(0, r) || o >= e && o <= s && this.canRotate(1, r)))
          return !0;
      } else if (this.orientationLock) {
        if (this.orientationLock === "l")
          return n === "l" && o >= e && o <= s;
        if (this.orientationLock === "w")
          return n === "l" && l >= e && l <= s;
      }
    }
    return !1;
  }
  rotateToDimension(e, s, n) {
    if (!s) throw new Error("requiredSide not supplied to rotateToDimension");
    if (this.l !== e && this.w !== e) return !1;
    if (this.l === this.w) return !0;
    const r = this.getLongSide(), o = this.getShortSide();
    if (s === "l") {
      if (r === e && this.canRotate(0, n)) return this.setRotation(0);
      if (o === e && this.canRotate(1, n)) return this.setRotation(1);
    } else if (s === "w") {
      if (o === e && this.canRotate(0, n)) return this.setRotation(0);
      if (r === e && this.canRotate(1, n)) return this.setRotation(1);
    }
    return !1;
  }
  //get the orientation lock catering for container grain
  convertShapeGrainToOrientationLock(e) {
    if (!e) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
    if (!Zi(e)) throw new Error("container is not a container");
    if (ft(this)) return this.orientationLock;
    if (!x(this.orientationLock)) return null;
    const s = e.getStock();
    return x(s.grain) ? this.orientationLock === s.grain ? "l" : "w" : this.orientationLock;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getNecessaryOrientation(e) {
    if (!e) return this.orientationLock;
    if (ft(this)) return this.orientationLock;
    if (!x(this.orientationLock)) return null;
    if (Zi(e))
      return this.convertShapeGrainToOrientationLock(e);
    if (ft(this) || cs(this))
      return x(this.orientationLock) ? this.orientationLock : null;
  }
  /**
   * get the required grain rotation
   * checks for stock grain and part orientationLock
   * does not check for fit
   */
  getGrainRotation(e) {
    if (ft(this)) return this.rot;
    if (!x(this.orientationLock)) return null;
    const s = e.getStock();
    return !this.orientationLock || !x(s == null ? void 0 : s.grain) ? null : this.isGroup() ? this.orientationLock === "l" ? 0 : 1 : this.orientationLock === (s == null ? void 0 : s.grain) ? 0 : 1;
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  rotate(e = null, s = null) {
    return e === null && (e = this.rot === 0 ? 1 : 0), this.canRotate(e, s) ? (this.rot === e || this.swapDimensions(), !0) : !1;
  }
  swapDimensions() {
    [this.l, this.w] = [this.w, this.l];
  }
  forceRotate(e) {
    return e === null && (e = this.rot === 0 ? 1 : 0), this.rot === e || this.swapDimensions(), !0;
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  setRotation(e = null, s = null) {
    return e ? e = 1 : e = 0, s && e && !this.willItFit(s, e) ? !1 : this.rotate(e, s);
  }
  /**
   * rotates the shape if allowed
   * checks for fit and grain
   * @returns false if cannot rotate or can rotate but won't fit
   */
  setRotationToOrientationLock(e) {
    if (!e)
      throw new Error("container not supplied to setRotationToOrientationLock");
    const s = this.getNecessaryOrientation(e);
    if (s === "l") return this.setRotation(0);
    if (s === "w") return this.setRotation(1);
  }
  setRotationToOrientationLockWithoutContainer() {
    if (this.orientationLock === "l") return this.setRotation(0);
    if (this.orientationLock === "w") return this.setRotation(1);
  }
  getBandingLength(e) {
    return !Ro(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : fn(e) ? hn(this, e) : 0;
  }
  getPriority(e) {
    var n;
    if (!e) return 0;
    const s = e.parentID;
    return (n = this.priority) != null && n[s] ? this.priority[s] : 0;
  }
  clearPriority() {
    this.priority = {};
  }
  getPerimeterCutVectors() {
    var n;
    const e = (n = this.stock) != null && n.isStock() ? this.stock.getBladeWidth() / 2 : null;
    return [
      //bottom
      {
        x1: this.x - e,
        x2: this.x + this.l + e,
        y1: this.y - e,
        y2: this.y - e,
        type: "bottom"
      },
      //right
      {
        x1: this.x + this.l + e,
        x2: this.x + this.l + e,
        y1: this.y - e,
        y2: this.y + this.w + e,
        type: "right"
      },
      //top
      {
        x1: this.x - e,
        x2: this.x + this.l + e,
        y1: this.y + this.w + e,
        y2: this.y + this.w + e,
        type: "top"
      },
      //left
      {
        x1: this.x - e,
        x2: this.x - e,
        y1: this.y - e,
        y2: this.y + this.w + e,
        type: "left"
      }
    ];
  }
  /* getTrimmedDimensions()
  	{
  		if ( this.trimmed )
  			return {
  				l: this.l,
  				w: this.w
  			};
  
  		return {
  			l: this.l - this.trim.x1 - this.trim.x2,
  			w: this.w - this.trim.y1 - this.trim.y2
  		};
  	} */
  /**
   * create cuts around the perimeter of a shape
   * @param {Stock} stock
   * @returns {Array} cuts
   */
  createPerimeterCuts(e = null) {
    let s = [];
    if (e = e || this.stock, !e) throw new Error("stock is required to create a cut");
    return this.getPerimeterCutVectors().forEach((r) => {
      var o;
      return s.push(new Wi({
        stock: (o = this.stock) != null && o.isStock() ? this.stock : e,
        x1: r.x1,
        x2: r.x2,
        y1: r.y1,
        y2: r.y2,
        type: r.type
      }));
    }), s = s.filter((r) => r.isInsideStock()), s;
  }
  createOffset(e) {
    if (!this.stock) throw new Error("createOffset - stock not defined");
    const s = {
      x: this.x - e,
      y: this.y - e,
      l: this.l + e * 2,
      w: this.w + e * 2
    };
    return s.x < 0 && (s.x = 0, s.l -= e), s.y < 0 && (s.y = 0, s.w -= e), s.x + s.l > this.stock.l && (s.l = this.stock.l - s.x), s.y + s.w > this.stock.w && (s.w = this.stock.w - s.y), s;
  }
  setPositionToBestScore() {
    this.setRotation(this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(e, s = null) {
    return pn(e, this, s);
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = s.pop(), e++), s.push(e);
    const n = s.join("."), r = this.stock;
    this.stock = null;
    const o = structuredClone(this);
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new vt(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const e = this.cloneGuillotineData();
    return e.myStripParent = _o(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
      id: this.id,
      x: this.added ? this.x : 0,
      y: this.added ? this.y : 0,
      l: this.l,
      w: this.w,
      added: this.added,
      guillotineData: e,
      placementOrder: this.placementOrder,
      bestScore: this.bestScore,
      inGroup: this.inGroup,
      groupID: this.groupID,
      addedAsGroup: this.addedAsGroup,
      groupPlacementOrder: this.groupPlacementOrder,
      minSpacing: this.minSpacing,
      cloneType: "shape",
      priority: Object.assign({}, this.priority)
    };
  }
  isTooCloseToEdges(e) {
    var n, r;
    const s = ((r = (n = e.saw) == null ? void 0 : n.options) == null ? void 0 : r.minSpacing) || this.minSpacing;
    return s ? this.getDistancesToContainerEdges(e).some((o) => o > 0 && o <= s) : !1;
  }
  validateStripShapeBatches() {
    const e = Object.values(this.guillotineData.stripShapeBatches.groups);
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      if (n.id !== this.id)
        throw new Error(`strip shape group id does not match shape id ${this.id} ${n.id} ${s}`);
      if (![this.l, this.w].includes(n.dimension))
        throw new Error(`strip shape group dimension does not match shape dimensions ${this.id} ${n.id} ${s} ${this.l} ${this.w} ${n.dimension}`);
    }
  }
  getStripShapeBatchData(e) {
    var s;
    return typeof e != "number" || !((s = this == null ? void 0 : this.guillotineData) != null && s.stripShapeBatches) || !this.guillotineData.stripShapeBatches.groups || !(e in this.guillotineData.stripShapeBatches.groups) ? !1 : this.guillotineData.stripShapeBatches.groups[e];
  }
  isInStripShapeBatch(e) {
    return !!this.getStripShapeBatchData(e);
  }
  isStacked() {
    return this.added && this.stock && this.stock.isStacked();
  }
}
class us extends ji {
  constructor(e) {
    var t = (...Wc) => (super(...Wc), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
    c(this, "parent"), c(this, "segmentType"), c(this, "completed"), //used by vis only
    c(this, "rowSegment"), //used by cuts
    c(this, "placementOrder"), c(this, "hasBeamTrim"), this);
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.shapes = x(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = x(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = x(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = x(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = x(e == null ? void 0 : e.parent) ? e.parent : null, this.children = x(e == null ? void 0 : e.children) ? e.children : [], this.siblings = x(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = x(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = x(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = x(e == null ? void 0 : e.cutDirection) ? e.cutDirection : "l", this.hasBeamTrim = x(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1);
  }
  validateSegment(e) {
    var s, n;
    (ce.lessThanOrEqualTo(e.w, 0) || ce.lessThanOrEqualTo(e.l, 0)) && new Z({
      item: this,
      message: `Zero / negative dimension - l: ${e.l}, w: ${e.w}.`,
      field: [["l"], ["w"]]
    }), (ce.lessThan(e.x, 0) || ce.lessThan(e.y, 0)) && new Z({
      item: this,
      message: `Negative position - x: ${e.x}, y: ${e.y}.`,
      field: [["x"], ["y"]]
    }), e != null && e.stock && (ce.greaterThan(e.x + e.l, e.stock.l) || ce.greaterThan(e.y + e.w, e.stock.w)) && new Z({
      item: this,
      field: [["x"], ["y"], ["l"], ["w"]],
      message: `Outside of stock ${e.stock.id} - x: ${e.x}, y: ${e.y}, l: ${e.l}, w: ${e.w}, sl: ${(s = e == null ? void 0 : e.stock) == null ? void 0 : s.l}, sw: ${(n = e == null ? void 0 : e.stock) == null ? void 0 : n.w}.`
    });
  }
  //compress for saving / transfer
  save() {
    var e;
    this.children = this.children.map((s) => ({
      id: s.id,
      x: s.x,
      y: s.y,
      l: s.l,
      w: s.w,
      offcut: s.offcut
    })), this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.stock, delete this.shapes, delete this.saw, delete this.siblings, delete this.parent, delete this.trim, this.algoBenchmark = null;
  }
  getBladeWidth() {
    return this.stock.getBladeWidth();
  }
  /**
   * create a normalised shape list to allow searching for duplicates
   */
  getNormalisedShapes(e) {
    return e.map((s) => ({
      x: s.x - this.x,
      y: s.y - this.y,
      l: s.l,
      w: s.w
    }));
  }
  reset() {
    this.stock.used = !1, this.children = [], this.siblings = [], this.parent = null, this.cuts = [], this.phase = null;
  }
}
class lt extends vt {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = qt(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
      throw new Error("attempting to create a group with no shapes");
    e.preventAutoRotation = !0;
    super(e);
    c(this, "shapes");
    c(this, "positions");
    c(this, "direction");
    c(this, "container");
    c(this, "outOfBounds");
    c(this, "collision");
    c(this, "counter", 0);
    c(this, "type");
    c(this, "efficiency");
    this.q = 1, delete this._banding, delete this._finish, delete this._trim, this.shapes = e.shapes, this.positions = (n = e == null ? void 0 : e.positions) != null && n.length ? e.positions : [], this.direction = e.direction, this.container = e.container, this.type = (e == null ? void 0 : e.type) ?? "auto", this.initGroup();
  }
  initGroup() {
    var e;
    (e = this == null ? void 0 : this.shapes) != null && e.length && (this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]));
  }
  setShapePositions() {
    if (!this.container) return;
    this.positions = [], this.type !== "user" && this.sortShapes();
    let e = 0;
    const s = Mr(this.direction);
    this.shapes.forEach((o, l) => {
      this.positions.push({
        shape: o.id,
        [s]: e,
        [Fr(s)]: 0,
        rot: o.rot.valueOf()
      }), o.inGroup = !0, e += l === this.shapes.length - 1 ? o[this.direction] : o[this.direction] + o.getMinSpacing(this.container);
    }), this[this.direction] = e;
    const n = _t(this.direction), r = this.shapes.reduce((o, l) => l[n] > o ? l[n] : o, 0);
    if (this[n] = r, nn()) {
      const o = this.shapes.slice(0, -1).reduce((u, h) => u + h.getMinSpacing(this.container), 0), a = this.shapes.reduce((u, h) => u + h[this.direction], 0) + o;
      rn([
        () => Ii(ce.equalTo(a, this[this.direction]), "group dimension is incorrect in direction").to.be.true,
        () => Ii(e, "currentPosition is incorrect in direction").to.equal(this[this.direction]),
        () => Ii(r, "group dimension in other direction is not correct").to.equal(this[n])
      ]);
    }
    if (this.w > this.container.w || this.l > this.container.l)
      throw new Error(`group ${this.id} is bigger than container - group ${this.l}x${this.w}, container ${this.container.l}x${this.container.w}`);
  }
  //update the shape spacing and overall group dimensions to account for min spacing
  updateShapeSpacing(e) {
    this.container = e, this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]);
  }
  //get the area of the shapes (does not include blade width) - overwrites the rectangle method
  getArea() {
    return this.shapes.reduce((e, s) => e + s.getArea(), 0);
  }
  destroy() {
    super.reset();
    for (const e of this.shapes) e.reset(!1, !1, !1);
  }
  reset() {
    super.reset();
    for (const e of this.shapes) e.reset(!1, !1, !0);
  }
  /**
   * orientate all the shapes correctly to fit in the group
   */
  orientateShapes(e) {
    this.shapes.forEach((s) => {
      const n = this.positions.find((o) => o.shape === s.id);
      if (!n) throw new Error("position not found for shape in group");
      if (!s.rotate(n.rot, e)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const e = _t(this.direction);
    this.shapes.sort((s, n) => n[e] === s[e] ? n[this.direction] === s[this.direction] ? s.id.localeCompare(n.id, void 0, { numeric: !0 }) : n[this.direction] - s[this.direction] : n[e] - s[e]);
  }
  /**
   * place the group shapes on the stock
   */
  placeMyShapes(e) {
    if (!e) throw new Error("placeShapes requires stock");
    this.addToStock(e);
    for (let s = 0; s < this.shapes.length; s++) {
      const n = this.shapes[s];
      n.addToStock(e);
      const r = this.positions.find((a) => a.shape === n.id);
      if (!r) throw new Error("position not found for shape in group");
      if (n.x = this.x + r.x, n.y = this.y + r.y, !n.rotate(r.rot, e)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(e) {
    this.orientateShapes(e), this.setRotationToOrientationLock(e);
  }
  clone(e = []) {
    const n = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container, l = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = e, a.id = n, new lt(a);
  }
  compress() {
    const e = super.compress.call(this);
    return e.direction = this.direction, e.positions = structuredClone(this.positions), e.shapes = this.shapes.map((s) => s.compress()), e.type = this.type, e.cloneType = "group", e;
  }
}
function Rc(i) {
  if (!i.length) return "n";
  const t = i.map((e) => e.grain).filter((e) => e);
  return t.length ? t.every((e) => e === "l") ? "l" : t.every((e) => e === "w") ? "w" : t.some((e) => e === "l" || e === "w") ? "y" : "n" : "n";
}
function Fo(i) {
  return i.shapes !== void 0;
}
function ft(i) {
  return i instanceof lt && i.type !== "user";
}
function cs(i) {
  return i instanceof lt && i.type === "user";
}
function Ft(i) {
  return i instanceof ls;
}
function ai(i) {
  return i instanceof as;
}
function Ne(i) {
  return i instanceof Ui;
}
function At(i) {
  return i instanceof Dt;
}
function Zi(i) {
  return i instanceof ji;
}
function yt(i) {
  return i instanceof vt && !(i instanceof lt);
}
function _o(i) {
  return i instanceof vt || i instanceof lt;
}
function qo(i) {
  return i instanceof us;
}
function Bo(i) {
  return i instanceof Ot;
}
function Go(i) {
  return i instanceof lt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof ls ? "inputUserGroup" : i instanceof as ? "inputStock" : i instanceof Ui ? "inputShape" : i instanceof Dt ? "stock" : i instanceof ji ? "container" : i instanceof vt && !(i instanceof lt) ? "shape" : i instanceof us ? "segment" : i instanceof gn ? "offcut" : i instanceof Ot ? "saw" : i instanceof Zt ? "rectangle" : null;
}
function Os(i, t) {
  return vr(i, t);
}
function Rt(i, t) {
  return Yt(i, t);
}
function Ho(i, t, e) {
  br(i, t, e);
}
function x(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function Xt(i, t = !1) {
  if (!x(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => x(s) && s) : e.some((s) => x(s));
}
function Mc(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return ai(e) && e.autoAdd ? s = 1 : s = x(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function Fc(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = No(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function No(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function Wo() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function Ji(i = 0, t, e = null, s = null, n = null) {
  if (!Ne(e) && !Ft || s === "stock") return !1;
  let r, o;
  if (Ne(e) ? r = e.orientationLock : Ft(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || Ft(e))
    switch (t) {
      case "n":
        o = r === "w" || n === "w";
        break;
      case "l":
      case "y":
        o = r === "w" || n === "w";
        break;
      case "w":
        o = r === "l" || n === "l";
        break;
      default:
        o = n === "w";
    }
  else if (i === 1)
    if (e) o = e.w > e.l;
    else return !1;
  else if (i === 2) {
    if (!e) return !1;
    switch (t) {
      case "n":
        o = e.w > e.l;
        break;
      case "y":
      case "l":
        o = e.w > e.l;
        break;
      case "w":
        o = e.l >= e.w;
        break;
      default:
        o = !1;
    }
  }
  return o;
}
function As(i, t, e = null, s = null, n = null) {
  if (!Ne(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? Ji(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Uo(i) {
  i.banding && (i.banding = qi(i.banding, "cc")), i.trim && (i.trim = qi(i.trim, "cc"));
}
function _c(i, t = 0) {
  return yt(i) || Ne(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && Uo(i)), i;
}
function qi(i, t = "cc", e = {
  x1: "y1",
  x2: "y2",
  y1: "x1",
  y2: "x2"
}, s = {
  a: "d",
  b: "a",
  c: "b",
  d: "c"
}) {
  const n = {
    x1: null,
    x2: null,
    y1: null,
    y2: null
  };
  if (t === "c") {
    for (const [r, o] of Object.entries(e))
      n[o] = i[r];
    for (const [r, o] of Object.entries(s))
      o in i && (n[o] = i[r]);
  } else if (t === "cc") {
    for (const [r, o] of Object.entries(e))
      n[r] = i[o];
    for (const [r, o] of Object.entries(s))
      o in i && (n[r] = i[o]);
  }
  return n;
}
const { addNotice: ot } = Hi(), {
  inputs: Ce,
  totalInputShapes: jo,
  totalInputStock: zo,
  createStockList: Vo,
  createShapeList: Yo,
  validateInputShapes: Xo,
  validateInputStock: mn,
  removeShape: Ds,
  removeStock: Es
} = Ks(), Ko = {
  t: (i) => i,
  isAdmin: !1,
  partTrim: 0,
  shared: !1,
  maxShapes: 1 / 0,
  maxStock: 1 / 0,
  useInventory: !1,
  selectedSaw: void 0,
  materialStore: void 0,
  onLimit: () => {
  }
}, Zo = () => {
  var i, t;
  if ((i = Ce == null ? void 0 : Ce.inputStock) != null && i.value) {
    for (let e = Ce.inputStock.value.length - 1; e >= 0; e--) {
      const s = Ce.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ce.inputStock.value.length > 1 || e !== 0) && Es(s.listId);
    }
    if ((t = Ce == null ? void 0 : Ce.inputShapes) != null && t.value)
      for (let e = Ce.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Ce.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ce.inputShapes.value.length > 1 || e !== 0) && Ds(s.listId);
      }
  }
}, Jo = (i, t = !1) => {
  var s, n;
  if (!t) return [];
  const e = [];
  if (!((s = Ce == null ? void 0 : Ce.inputShapes) != null && s.value)) return e;
  for (let r = Ce.inputShapes.value.length - 1; r >= 0; r--) {
    const o = Ce.inputShapes.value[r];
    if (!o) continue;
    if (!x(o.material)) {
      e.push(new Z({
        item: o,
        message: "no_material",
        index: [r]
      }));
      continue;
    }
    const l = i.items.find((a) => a._id === o.material);
    (n = l == null ? void 0 : l.t) != null && n.length && (o.t ? l.t.includes(o.t) || e.push(new Z({
      item: o,
      message: "invalid_thickness",
      index: [r]
    })) : e.push(new Z({
      item: o,
      message: "no_thickness",
      index: [r]
    })));
  }
  return e;
}, yn = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...Ko,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, Qo = (i = {}) => {
  const t = yn(i), e = t.t;
  Zo();
  const s = [];
  t.useInventory || s.push(...mn()), s.push(...Xo({
    saw: null,
    partTrim: T({ v: t.partTrim }),
    useInventory: t.useInventory
  }));
  const n = Lt(s);
  return n.length > 0 ? (console.warn("Validation errors:", JSON.parse(JSON.stringify(n))), ot({
    type: "error",
    message: e("inputs_issue", { x: "part" }),
    additional: n.map((r) => e(r.message))
  }), !1) : !0;
};
async function el(i) {
  var s, n;
  const t = yn(i), e = t.t;
  try {
    if (!Qo(t))
      return { valid: !1 };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (jo.value > t.maxShapes || zo.value > t.maxStock))
      return t.onLimit(), { valid: !1 };
    if (t.useInventory) {
      const d = Jo(t.materialStore, !0), g = Lt(d);
      if (g.length > 0)
        return ot({
          type: "error",
          message: e("inputs_issue", { x: "material" }),
          additional: g.map((S) => e(S.message))
        }), { valid: !1 };
    } else {
      const d = mn(), g = Lt(d);
      if (g.length > 0)
        return ot({
          type: "error",
          message: e("inputs_issue", { x: "stock" }),
          additional: g.map((S) => e(S.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new Ot(t.selectedSaw) : new Ot(t.sawData), o = Lt(r.issues);
    if (o.length > 0)
      return ot({
        type: "error",
        message: e("inputs_issue", { x: "saw" }),
        additional: o.map((d) => e(d.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await Vo(r), u = Lt(a);
    if (u.length > 0)
      return ot({
        type: "error",
        message: e("inputs_issue", { x: "stock" }),
        additional: u.map((d) => e(d.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return ot({
        type: "error",
        message: e("no_stock")
      }), { valid: !1 };
    const { shapeList: h, issues: v } = await Yo({
      orientationModel: t.orientationModel
    }), w = Lt(v);
    if (w.length > 0)
      return ot({
        type: "error",
        message: e("inputs_issue", { x: "part" }),
        additional: w.map((d) => e(d.message))
      }), { valid: !1 };
    if (!(h != null && h.length))
      return ot({
        type: "error",
        message: e("no_parts_list")
      }), { valid: !1 };
    if (((n = (s = Ce.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      Ce.userGroups.value.forEach((S) => S.populateParentID(Ce.inputShapes.value));
      const d = Eo(
        Ce.userGroups.value,
        Ce.inputShapes.value
      ), g = Lt(d);
      if (g.length > 0)
        return ot({
          type: "error",
          message: e("inputs_issue", { x: "group" }),
          additional: g.map((S) => e(S.message))
        }), { valid: !1 };
    }
    return {
      valid: !0,
      saw: r,
      stockList: l,
      shapeList: h
    };
  } catch (r) {
    return console.error("Validation error:", r), ot({
      type: "error",
      message: e("unexpected_error")
    }), { valid: !1 };
  }
}
function tl(i) {
  return !i || !Xt(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function hs(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function ds(i) {
  return `${i}Options`;
}
function il(i, t, e) {
  const s = ds(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function sl(i, t, e = !0) {
  if (!hs(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    fs(i, t, r, e);
  e && vn(i, t, "all");
}
function fs(i, t, e, s = !0) {
  s && vn(i, t, e), e !== "all" && hs(i, t) && (i[t][e] = !1);
}
function vn(i, t, e) {
  if (!hs(i, t, "Options")) return;
  const n = i[`${t}Options`][e];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function ps(i, t, e, s, n, r) {
  var h;
  const o = t + "Options";
  if (!((h = i == null ? void 0 : i[o]) != null && h[e]) || !(s in i[o][e])) return;
  ci(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((v) => v);
  if (!Array.isArray(a)) return;
  const u = Bi(i, t, e, r);
  ci(i, t, e, !!_e(u));
}
function bn(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Bi(i, t, "all", r), u = i[o][e], h = Object.values(u || {}).filter((v) => v);
  for (const v of l)
    v !== "all" && (n.includes(v) || (ps(i, t, v, e, s, r), Array.isArray(h) || ci(i, t, v, !1), ci(i, t, v, !!_e(a))));
}
function ci(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = ds(t), r = tl((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
  s ? i[t][e] = r || !0 : i[t][e] = !1;
}
function Bi(i, t, e, s) {
  var a;
  const n = t + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[e])) return !1;
  const r = i[n][e], o = Object.values(r || {}).filter((u) => u);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && fn(e) && _e(l) ? To(i, e, l) / 1e3 : l;
}
function qc(i) {
  i != null && i.type && delete i.type, nl.call(this, i);
}
function nl(i) {
  if (!(i != null && i.banding) || typeof i.banding != "object") return;
  const t = Object.keys(i.banding);
  if (!t.length) return;
  const e = ["labels", "pricing"];
  if (!t.every((s) => e.includes(s)))
    console.warn("SmartCut - legacy banding data provided - please update to use { labels: string[], pricing: Record<string, number> }");
  else return;
  i.banding = {
    labels: Object.keys(i.banding),
    pricing: i.bandingPricing
  };
}
function rl(i) {
  if (i != null && i.enable) return;
  i.enable = {};
  const t = {
    showDiagram: { new: "diagram", map: "equal" },
    enableFocus: { new: "focus", map: "equal" },
    enableMachining: { new: "machining", map: "equal" },
    enableCSVImport: { new: "csvImport", map: "equal" },
    showProgressNumber: { new: "progressNumber", map: "equal" },
    disableBanding: { new: "banding", map: "reverse" },
    disableFinish: { new: "finish", map: "reverse" },
    disableOrientation: { new: "orientation", map: "reverse" },
    disableClick: { new: "click", map: "reverse" },
    disablePartName: { new: "partName", map: "reverse" }
  };
  for (const e of Object.keys(t))
    e in i && (i.enable[t[e].new] = t[e].map === "reverse" ? !i[e] : i[e], delete i[e]);
  console.log(i);
}
const ol = { id: "mini-stock-nav" }, ll = ["onMousedown"], al = { class: "id" }, ul = /* @__PURE__ */ Oe({
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
  setup(i, { emit: t }) {
    const e = i, s = t, n = (r) => {
      s("show-stock", r);
    };
    return (r, o) => (y(), C("div", ol, [
      (y(!0), C(Se, null, Te(e.stockList, (l, a) => (y(), C("button", {
        key: a,
        class: xe(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: ke({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        A("div", al, ie(a + 1), 1),
        es(A("div", { class: "stack legibility" }, ie(l.stack), 513), [
          [ts, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, ll))), 128))
    ]));
  }
}), Jt = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, cl = {
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
}, hl = { id: "spinner" }, dl = ["width", "height"], fl = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function pl(i, t, e, s, n, r) {
  return y(), C("div", hl, [
    e.complete ? H("", !0) : (y(), C("svg", {
      key: 0,
      class: "loading",
      style: ke({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      zn('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, dl)),
    e.complete ? (y(), C("svg", {
      key: 1,
      class: "complete",
      style: ke({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      A("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : H("", !0),
    e.showNumber ? (y(), C("div", fl, ie(e.number), 1)) : H("", !0)
  ]);
}
const Rs = /* @__PURE__ */ Jt(cl, [["render", pl]]);
function gl(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function ml(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function yl(i, t, e, s, n = []) {
  const r = ml(i, e, s);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((h) => h.id)), u = o.map((h) => h.id).filter((h) => !a.has(h)).map((h) => `'${h}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return n.length && o.sort((a, u) => {
    const h = n.indexOf(a.id), v = n.indexOf(u.id);
    return h === -1 ? 1 : v === -1 ? -1 : h - v;
  }), o;
}
const vl = ["id"], bl = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, wl = /* @__PURE__ */ Oe({
  __name: "OrientationButton",
  props: {
    id: { default: "" },
    orientationModel: { default: 0 },
    rectangleType: { default: null },
    rectangle: { default: () => null },
    shapeOrientation: { default: "" },
    stockGrain: { default: "n" },
    buttonBackground: { default: "#848484" },
    iconColor: { default: "#FFFFFF" },
    disabled: { type: Boolean, default: !1 },
    debug: { type: Boolean, default: !1 }
  },
  emits: ["updateOrientation"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = B(0), r = B(!1), o = (m, L, z, D) => {
      if (!Ne(z) || L === 0)
        return m;
      const R = l();
      return L === 1 || L === 2 && D !== "n" && m ? R : m;
    }, l = (m) => {
      const L = { ...e, ...m };
      if (!L.rectangle || !Ne(L.rectangle)) return "";
      let z = "";
      switch (L.orientationModel) {
        case 0:
          z = K.value;
          break;
        case 1:
          L.stockGrain === "y" || L.stockGrain === "n" ? z = L.rectangle.l >= L.rectangle.w ? "l" : "w" : L.rectangle.l >= L.rectangle.w ? z = L.stockGrain : z = z = L.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          z = L.rectangle.l >= L.rectangle.w ? "l" : "w";
          break;
      }
      return z;
    }, a = () => {
      if (e.disabled || Y.value.length <= 1) return;
      let m = null;
      [1, 2].includes(e.orientationModel) ? m = v() : m = h(), n.value = m;
    }, u = (m) => {
      const L = Y.value.findIndex((z) => z === m);
      return L === -1 ? 0 : L;
    }, h = () => {
      let m = 0;
      return m = u(K.value) + 1, m > Y.value.length - 1 && (m = 0), m;
    }, v = () => {
      let m = 0;
      if (K.value)
        m = Y.value.findIndex((L) => L === "");
      else {
        const L = l();
        m = Y.value.findIndex((z) => z === L);
      }
      return m;
    }, w = (m) => {
      s("updateOrientation", m);
    }, d = () => {
      const m = K.value;
      switch (e.orientationModel) {
        case 0:
          return m ? e.stockGrain === "n" ? m || e.shapeOrientation || "default" : e.stockGrain === "w" ? m === "w" ? "w" : "l" : m === "l" ? "l" : "w" : "default";
        case 1:
          return m ? e.stockGrain === "n" ? m || e.shapeOrientation || "default" : e.stockGrain === "w" ? m === "w" ? "w" : "l" : m === "l" ? "l" : "w" : "default";
        case 2:
          return m ? e.stockGrain === "n" ? m || e.shapeOrientation || "default" : e.stockGrain === "w" ? m === "w" ? "w" : "l" : m === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, g = () => {
      if (!e.rectangle) return;
      const m = o(
        K.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (m !== K.value) {
        S(m);
        return;
      }
      if (n.value = u(K.value), !!Ne(e.rectangle)) {
        if (e.orientationModel === 1) {
          const L = oe.value ? l() : K.value;
          S(L);
          return;
        }
        if (e.orientationModel === 2) {
          let L;
          oe.value ? L = e.stockGrain !== "n" ? l() : "" : L = K.value, S(L);
        }
      }
    }, S = (m) => {
      n.value = u(m), w(m);
    }, _ = () => {
      const m = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], L = ["l", "w", "y", "n"], z = [0, 1, 2], D = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, R = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, le = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, de = [];
      m.forEach(($) => {
        L.forEach((q) => {
          z.forEach((G) => {
            const te = new Ui({
              l: $.l,
              w: $.w
            }), me = l({
              orientationModel: G,
              rectangle: te,
              stockGrain: q
            });
            let he = "";
            te.l === te.w ? he = "l === w" : te.l > te.w ? he = "l >= w" : he = "w > l";
            const Ue = ["l", "w", "y"].includes(q) ? D : R;
            de.push({
              Model: G,
              "Stock grain": q,
              "Stock grain description": le[q],
              Dimensions: he,
              "Orientation lock": me || "N/A",
              "Orientation Lock description": Ue[me] || "N/A"
            });
          });
        });
      }), de.sort(($, q) => {
        if ($.Model !== q.Model)
          return $.Model - q.Model;
        if ($["Stock grain"] !== q["Stock grain"])
          return $["Stock grain"].localeCompare(q["Stock grain"]);
        const G = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return G[$.Dimensions] - G[q.Dimensions];
      }), console.table(de);
    }, Y = ee(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Ft(e.rectangle)) return ["l", "w"];
      let m = ["", "l", "w"];
      return e.rectangle.multiEdit && (m = [" ", "", "l", "w"]), V.value && (m = m.filter((L) => L !== "w")), m;
    }), V = ee(() => {
      var m, L, z, D;
      return Ne(e.rectangle) || ai(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((m = e.rectangle) != null && m.l) && ((L = e.rectangle) != null && L.w) ? ((z = e.rectangle) == null ? void 0 : z.l) === ((D = e.rectangle) == null ? void 0 : D.w) : !1;
    }), K = ee(() => {
      let m = "";
      return Ft(e.rectangle) ? m = e.rectangle.direction : Ne(e.rectangle) ? m = e.rectangle.orientationLock ?? "" : ai(e.rectangle) && (m = e.rectangle.grain ?? ""), m;
    }), Q = ee(() => Ft(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), oe = ee(() => !Q.value.l && !Q.value.w), U = ee(() => Ji(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), J = ee(() => {
      var D;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (ai(e.rectangle) || e.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[e.rectangle.grain] || "noGrain";
      const m = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, L = e.stockGrain || "default";
      let z = "default";
      return Ne(e.rectangle) || e.rectangleType === "shape" ? z = d() : Ft(e.rectangle) && (z = e.rectangle.direction || "default"), ((D = m[L]) == null ? void 0 : D[z]) || m[L].default;
    });
    return $e(n, (m, L) => {
      r.value && L !== void 0 && w(Y.value[m]);
    }, { immediate: !1 }), $e(Q, (m, L) => {
      if (!e.rectangle || e.orientationModel === 0 || !Ne(e.rectangle) || Ne(e.rectangle) && (e.orientationModel === 2 && L.l && L.w && !K.value || e.stockGrain === "n" && !K.value))
        return;
      const z = l();
      K.value !== z && w(z);
    }, { immediate: !1 }), $e(() => e.stockGrain, (m, L) => {
      m !== L && g();
    }, { immediate: !0 }), at(() => {
      g(), Ke(() => {
        r.value = !0, e.debug && _();
      });
    }), (m, L) => (y(), C("div", {
      id: m.id,
      class: xe(["orientation-button", { rot: U.value, square: V.value, disabled: m.disabled, [J.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: ke({
        backgroundColor: m.buttonBackground
      }),
      onClick: a
    }, [
      J.value === "delete" ? (y(), C("svg", bl, L[0] || (L[0] = [
        A("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : H("", !0),
      J.value === "freeRotation" ? (y(), C("svg", {
        key: 1,
        class: "arrow",
        style: ke({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[1] || (L[1] = [
        A("g", null, [
          A("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          A("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          A("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          A("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : H("", !0),
      J.value === "leftRight" ? (y(), C("svg", {
        key: 2,
        class: "arrow",
        style: ke({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[2] || (L[2] = [
        A("g", null, [
          A("path", { d: "m5.408 19.408h61.095" }),
          A("g", null, [
            A("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            A("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : H("", !0),
      J.value === "topBottom" ? (y(), C("svg", {
        key: 3,
        class: "arrow",
        style: ke({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[3] || (L[3] = [
        A("g", null, [
          A("path", { d: "m19.408 66.503v-61.095" }),
          A("g", null, [
            A("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            A("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : H("", !0),
      J.value === "grainLeftRight" ? (y(), C("svg", {
        key: 4,
        class: "grain",
        style: ke({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[4] || (L[4] = [
        A("g", null, [
          A("path", { d: "m3 3h99.887" }),
          A("path", { d: "m3.113 32h99.887" }),
          A("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : H("", !0),
      J.value === "grainTopBottom" ? (y(), C("svg", {
        key: 5,
        class: "grain",
        style: ke({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[5] || (L[5] = [
        A("g", null, [
          A("path", { d: "m61 3v99.887" }),
          A("path", { d: "m32 3.113v99.887" }),
          A("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : H("", !0)
    ], 14, vl));
  }
}), Sl = ["id"], kl = /* @__PURE__ */ Oe({
  __name: "BandingButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    orientationModel: { default: 0 },
    stockGrain: { default: "n" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["clicked"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = B({
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    $e(() => e.inputShape.orientationLock, () => {
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = As(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = qi(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 }), $e([
      () => {
        var l;
        return (l = e.inputShape) == null ? void 0 : l.banding;
      },
      () => e.orientationModel,
      () => e.stockGrain,
      () => {
        var l;
        return (l = e.inputShape) == null ? void 0 : l.orientationLock;
      }
    ], () => {
      var u;
      if (!((u = e.inputShape) != null && u.banding)) return;
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = As(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = qi(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 });
    const r = (l) => {
      (l.key === "Enter" || l.key === " ") && o();
    }, o = () => {
      e.disabled || s("clicked");
    };
    return at(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), is(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (y(), C("div", {
      id: l.id,
      class: xe(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      A("div", {
        class: xe(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        A("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, Sl));
  }
}), xl = (i) => {
  i = i.replace(/['"]+/g, "");
  try {
    return new ui(i).valueOf();
  } catch {
    return null;
  }
};
function Cl({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = B({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (o, l = !1) => {
    if (o == null || o === "")
      return i.required ? {
        value: null,
        valid: !1,
        message: "field_required"
      } : {
        value: null,
        valid: !0
      };
    if (i.allowZero === !1 && (o === 0 || o === "0"))
      return {
        value: null,
        valid: !1,
        message: "zero_not_allowed"
      };
    const a = String(o);
    switch (i.type) {
      case "string":
        return { value: a, valid: !0 };
      case "unitDependent":
        if (i.numberFormat === "fraction") {
          if (l) {
            const d = /^-?\d*\s*-?\d*\/?-?\d*$/.test(a);
            return {
              value: a,
              valid: d
            };
          }
          const u = xl(a);
          if (u === null)
            return {
              value: null,
              valid: !1,
              message: "invalid_fraction"
            };
          let h = u;
          return typeof i.min == "number" && (h = Math.max(h, i.min)), typeof i.max == "number" && (h = Math.min(h, i.max)), {
            value: new ui(h).toFraction(!0),
            valid: !0
          };
        } else if (i.numberFormat === "decimal") {
          const u = parseFloat(a);
          if (isNaN(u))
            return {
              value: null,
              valid: !1,
              message: "invalid_number"
            };
          let h = u;
          return typeof i.min == "number" && (h = Math.max(h, i.min)), typeof i.max == "number" && (h = Math.min(h, i.max)), { value: h, valid: !0 };
        }
        break;
      case "integer":
      case "float":
        if (l) {
          const u = i.type === "integer" ? /^-?\d*$/ : /^-?\d*\.?\d*$/;
          return {
            value: a,
            valid: u.test(a)
          };
        }
        {
          const u = a.replace(
            i.type === "integer" ? /[^0-9-]/g : /[^0-9.-]/g,
            ""
          ), h = i.type === "integer" ? parseInt(u) : parseFloat(u);
          return isNaN(h) ? { value: null, valid: !1 } : { value: h, valid: !0 };
        }
      default:
        return { value: o, valid: !0 };
    }
  };
  return {
    state: s,
    ...{
      handleInput: (o) => {
        if (!e.value) return;
        const l = o.target;
        s.value.isTyping = !0;
        const a = n(l.value, !0);
        t("validation", a, i.id), t("input", l.value);
      },
      handleBlur: (o) => {
        if (!e.value) return;
        s.value.isTyping = !1;
        const l = o.target, a = n(l.value, !1);
        t("validation", a, i.id), a.valid && t("update:value", a.value), t("blur", o);
      },
      handleFocus: (o) => {
        e.value && t("focus", o);
      },
      handleKeydown: (o) => {
        if (e.value && !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(o.key)) {
          if (["Backspace", "Delete", "Tab", "Enter", "Escape"].includes(o.key) || (i.type === "unitDependent" && i.numberFormat === "fraction" ? /^[-0-9\s/]$/.test(o.key) || o.preventDefault() : (i.type === "integer" || i.type === "float") && ((i.type === "integer" ? /^[-0-9]$/.test(o.key) : /^[-0-9.]$/.test(o.key)) || o.preventDefault())), o.key === "Enter") {
            s.value.isTyping = !1;
            const l = o.target, a = n(l.value, !1);
            a.valid && t("update:value", a.value), t("enter", a);
          }
          o.key === "Escape" && t("escape");
        }
      },
      getInputPattern: () => {
        switch (i.type) {
          case "integer":
            return "-?[0-9]*";
          case "float":
            return "-?[0-9]*\\.?[0-9]*";
          case "unitDependent":
            return i.numberFormat === "fraction" ? "-?([0-9]+ )?[0-9]*/[0-9]*" : "-?[0-9]*\\.?[0-9]*";
          default:
            return;
        }
      },
      getInputMode: () => {
        switch (i.type) {
          case "integer":
            return "numeric";
          case "float":
            return "decimal";
          case "unitDependent":
            return i.numberFormat === "fraction" ? "numeric" : "decimal";
          default:
            return "text";
        }
      },
      handleCompositionStart: () => {
        s.value.isComposing = !0;
      },
      handleCompositionEnd: (o) => {
        s.value.isComposing = !1, s.value.isTyping = !1;
        const l = o.target, a = n(l.value, !1);
        a.valid && t("update:value", a.value);
      },
      handlePaste: (o) => {
        var a;
        if (!e.value) return;
        const l = ((a = o.clipboardData) == null ? void 0 : a.getData("text")) || "";
        if ((i.type === "integer" || i.type === "float") && !(i.type === "integer" ? /^-?\d+$/ : /^-?\d*\.?\d*$/).test(l)) {
          o.preventDefault();
          return;
        }
        if (i.type === "unitDependent" && i.numberFormat === "fraction" && !/^-?\d*\s*\/?-?\d*$/.test(l)) {
          o.preventDefault();
          return;
        }
        t("paste", o);
      }
    },
    processValue: n
  };
}
function $l({
  props: i,
  emit: t,
  isMounted: e
}) {
  return {
    handleSelectChange: (s) => {
      if (!e.value) return;
      const n = s.target;
      if (i.multiEdit && n.value === " ") {
        t("update:value", null);
        return;
      }
      t("update:value", n.value);
    },
    handleFocus: (s) => {
      e.value && t("focus", s);
    },
    handleBlur: (s) => {
      e.value && t("blur", s);
    }
  };
}
function Pl({
  props: i,
  emit: t,
  isMounted: e
}) {
  return {
    handleCheckboxChange: (s) => {
      if (!e.value) return;
      const r = s.target.checked ? i.trueValue : i.falseValue;
      if (r === void 0) {
        console.warn("Checkbox true/false values not properly configured");
        return;
      }
      t("update:value", r);
    },
    handleFocus: (s) => {
      e.value && t("focus", s);
    },
    handleBlur: (s) => {
      e.value && t("blur", s);
    }
  };
}
const Ll = ["id", "value", "inputmode", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Il = /* @__PURE__ */ Oe({
  __name: "TextInput",
  props: {
    type: {},
    inputType: {},
    inputMode: {},
    placeholder: {},
    allowZero: { type: Boolean },
    min: {},
    max: {},
    debounceMs: {},
    numberFormat: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "input", "focus", "blur", "validation", "enter", "escape", "paste"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = B(!0), r = B(null), {
      handleInput: o,
      handleFocus: l,
      handleBlur: a,
      handleKeydown: u,
      handleCompositionStart: h,
      handleCompositionEnd: v,
      handlePaste: w
    } = Cl({
      props: e,
      emit: s,
      isMounted: n
    });
    return is(() => {
      n.value = !1;
    }), (d, g) => (y(), C("input", oi(d.$attrs, {
      id: e.id,
      ref_key: "inputRef",
      ref: r,
      value: e.value,
      inputmode: e.inputMode,
      type: e.inputType,
      placeholder: e.placeholder,
      disabled: e.disabled,
      readonly: e.readonly,
      required: e.required,
      min: e.min,
      max: e.max,
      "aria-label": e.ariaLabel,
      "aria-invalid": !!e.issue,
      "aria-describedby": e.errorId,
      onInput: g[0] || (g[0] = //@ts-ignore
      (...S) => k(o) && k(o)(...S)),
      onFocus: g[1] || (g[1] = //@ts-ignore
      (...S) => k(l) && k(l)(...S)),
      onBlur: g[2] || (g[2] = //@ts-ignore
      (...S) => k(a) && k(a)(...S)),
      onKeydown: g[3] || (g[3] = //@ts-ignore
      (...S) => k(u) && k(u)(...S)),
      onCompositionstart: g[4] || (g[4] = //@ts-ignore
      (...S) => k(h) && k(h)(...S)),
      onCompositionend: g[5] || (g[5] = //@ts-ignore
      (...S) => k(v) && k(v)(...S)),
      onPaste: g[6] || (g[6] = //@ts-ignore
      (...S) => k(w) && k(w)(...S))
    }), null, 16, Ll));
  }
}), Tl = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ol = /* @__PURE__ */ Oe({
  __name: "CheckBoxInput",
  props: {
    trueValue: {},
    falseValue: {},
    focus: { type: Boolean },
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "input", "focus", "blur"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = B(!0), r = B(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = Pl({
      props: e,
      emit: s,
      isMounted: n
    });
    return at(() => {
      e.focus && r.value && r.value.focus();
    }), (u, h) => (y(), C("input", {
      id: e.id,
      ref_key: "inputRef",
      ref: r,
      type: "checkbox",
      checked: e.value === e.trueValue,
      disabled: e.readonly || e.disabled,
      required: e.required,
      "aria-label": e.ariaLabel,
      "aria-invalid": !!e.issue,
      "aria-describedby": e.errorId,
      onChange: h[0] || (h[0] = //@ts-ignore
      (...v) => k(o) && k(o)(...v)),
      onFocus: h[1] || (h[1] = //@ts-ignore
      (...v) => k(l) && k(l)(...v)),
      onBlur: h[2] || (h[2] = //@ts-ignore
      (...v) => k(a) && k(a)(...v))
    }, null, 40, Tl));
  }
}), Al = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Dl = ["disabled", "selected"], El = {
  key: 0,
  value: " "
}, Rl = ["hidden", "value", "disabled"], Ml = /* @__PURE__ */ Oe({
  __name: "SelectInput",
  props: {
    options: {},
    selectFirstOptionDisabled: { type: Boolean },
    multiEdit: { type: Boolean },
    text: {},
    id: {},
    value: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    issue: { type: Boolean },
    ariaLabel: {},
    errorId: {},
    inputClasses: {}
  },
  emits: ["update:value", "focus", "blur"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = B(!0), r = B(null), o = ee(() => e.options.map((h) => {
      var v, w, d;
      return {
        value: h.value,
        label: ((v = h.label) == null ? void 0 : v.toUpperCase()) ?? ((d = (w = h.value) == null ? void 0 : w.toString()) == null ? void 0 : d.toUpperCase()),
        hidden: h.hidden ?? !1,
        disabled: h.disabled ?? !1
      };
    })), {
      handleSelectChange: l,
      handleFocus: a,
      handleBlur: u
    } = $l({
      props: e,
      emit: s,
      isMounted: n
    });
    return (h, v) => {
      var w, d, g, S;
      return y(), C("select", oi(h.$attrs, {
        id: e.id,
        ref_key: "inputRef",
        ref: r,
        value: e.value,
        disabled: e.readonly || e.disabled,
        required: e.required,
        "aria-label": e.ariaLabel,
        "aria-invalid": !!e.issue,
        "aria-describedby": e.errorId,
        onChange: v[0] || (v[0] = //@ts-ignore
        (..._) => k(l) && k(l)(..._)),
        onFocus: v[1] || (v[1] = //@ts-ignore
        (..._) => k(a) && k(a)(..._)),
        onBlur: v[2] || (v[2] = //@ts-ignore
        (..._) => k(u) && k(u)(..._))
      }), [
        A("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, ie(((d = (w = e.text) == null ? void 0 : w.select) == null ? void 0 : d.toUpperCase()) ?? "SELECT"), 9, Dl),
        e.multiEdit ? (y(), C("option", El, ie(((S = (g = e.text) == null ? void 0 : g.delete) == null ? void 0 : S.toUpperCase()) ?? "DELETE"), 1)) : H("", !0),
        (y(!0), C(Se, null, Te(o.value, (_) => (y(), C("option", {
          key: _.value,
          hidden: _.hidden,
          value: _.value,
          disabled: _.disabled
        }, ie(_.label), 9, Rl))), 128))
      ], 16, Al);
    };
  }
}), Fl = ["for"], _l = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, Ms = /* @__PURE__ */ Oe({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (y(), C("label", {
      for: t.id,
      class: "input-label"
    }, [
      Vt(ie(t.label) + " ", 1),
      t.required ? (y(), C("span", _l, "*")) : H("", !0)
    ], 8, Fl));
  }
}), ql = ["data-field-id"], Bl = ["disabled", "selected"], Gl = {
  key: 0,
  value: " "
}, Hl = ["hidden", "value", "disabled"], gt = /* @__PURE__ */ Oe({
  inheritAttrs: !1,
  __name: "InputField",
  props: {
    value: { default: null },
    id: { default: "" },
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
    ariaLabel: {}
  },
  emits: ["update:value", "validation"],
  setup(i, { emit: t }) {
    const e = t, s = i, n = B(null), r = B(null), o = B(!0), l = B(s.numberFormat), a = ee(() => s.custom ? "custom-" + s.id : s.id), u = ee(() => `${a.value}-error`), h = ee(() => s.label || s.placeholder), v = ee(() => J(s.type, s.numberFormat)), w = ee(() => m(s.type, s.numberFormat)), d = ee(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), g = ee(() => {
      if (s.type !== "unitDependent" || !s.value) return s.value;
      try {
        return T({ v: s.value, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), S = ee(() => s.options.map((D) => {
      var R, le;
      return {
        value: D.value,
        label: ((R = D.label) == null ? void 0 : R.toUpperCase()) || ((le = D.value) == null ? void 0 : le.toString().toUpperCase()),
        hidden: D.hidden || !1,
        disabled: D.disabled || !1
      };
    })), _ = ee(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), Y = ee(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": h.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), V = ee(() => ({
      ...Y.value,
      type: s.type,
      inputMode: w.value,
      inputType: v.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      numberFormat: s.numberFormat
    })), K = ee(() => ({
      ...Y.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), Q = ee(() => ({
      ...Y.value,
      options: S.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      text: s.text
    })), oe = (D) => {
      r.value = D;
    }, U = (D) => s.label && s.enableLabel && s.labelPosition === D, J = (D, R) => {
      if (D === "unitDependent")
        return R === "fraction" ? "text" : "number";
      switch (D) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, m = (D, R) => {
      if (D === "unitDependent")
        return R === "fraction" ? "text" : "decimal";
      switch (D) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, L = (D) => {
      e("update:value", D);
    }, z = (D, R) => {
      D.valid === void 0 || D.valid === !0 ? (o.value = !0, e("validation", n.value, D)) : D.valid === !1 && D.message && (o.value = !1, console.warn(`Field validation error for field ${R} - ${D.message}`), e("validation", n.value, D));
    };
    return $e(() => s.numberFormat, (D, R) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && D !== R && s.value)
          try {
            const le = T({ v: s.value, nf: D });
            e("update:value", le);
          } catch {
            e("update:value", D === "decimal" ? 0 : "0");
          }
        l.value = D;
      }
    }), (D, R) => (y(), C("div", {
      ref_key: "fieldRef",
      ref: n,
      class: xe(["input-wrapper", _.value]),
      "data-field-id": a.value
    }, [
      U("first") ? (y(), ge(Ms, {
        key: 0,
        id: a.value,
        label: D.label,
        required: D.required
      }, null, 8, ["id", "label", "required"])) : H("", !0),
      d.value ? (y(), ge(Il, oi({
        key: 1,
        ref: oe
      }, V.value, {
        "input-type": v.value,
        "input-mode": w.value,
        value: g.value,
        onValidation: z,
        "onUpdate:value": L
      }), null, 16, ["input-type", "input-mode", "value"])) : D.type === "checkbox" ? (y(), ge(Ol, oi({
        key: 2,
        ref: oe,
        type: "checkbox"
      }, K.value, {
        checked: D.value === D.trueValue,
        "onUpdate:value": R[0] || (R[0] = (le) => e("update:value", le))
      }), null, 16, ["checked"])) : D.type === "select" ? (y(), ge(Ml, oi({
        key: 3,
        ref: oe
      }, Q.value, {
        "onUpdate:value": R[1] || (R[1] = (le) => e("update:value", le))
      }), {
        default: ss(() => {
          var le, de, $, q;
          return [
            A("option", {
              value: "",
              disabled: D.selectFirstOptionDisabled,
              selected: !D.value
            }, ie(((de = (le = D.text) == null ? void 0 : le.select) == null ? void 0 : de.toUpperCase()) ?? "SELECT"), 9, Bl),
            D.multiEdit ? (y(), C("option", Gl, ie(((q = ($ = D.text) == null ? void 0 : $.delete) == null ? void 0 : q.toUpperCase()) ?? "DELETE"), 1)) : H("", !0),
            (y(!0), C(Se, null, Te(S.value, (G) => (y(), C("option", {
              key: G.value,
              hidden: G.hidden,
              value: G.value,
              disabled: G.disabled
            }, ie(G.label), 9, Hl))), 128))
          ];
        }),
        _: 1
      }, 16)) : H("", !0),
      U("last") ? (y(), ge(Ms, {
        key: 4,
        id: a.value,
        label: D.label,
        required: D.required
      }, null, 8, ["id", "label", "required"])) : H("", !0),
      Vn(D.$slots, "default")
    ], 10, ql));
  }
}), Nl = {
  key: 0,
  class: "inputs"
}, Wl = { class: "label" }, Ul = { class: "label" }, jl = { class: "label" }, zl = ["onClick"], Vl = { class: "price" }, Yl = ["aria-label"], Qi = /* @__PURE__ */ Oe({
  __name: "ExtrasInputs",
  props: {
    translate: { type: Boolean, default: !0 },
    shape: {},
    shapeIndex: { default: 0 },
    extraType: {},
    extraLabel: {},
    extraKeys: {},
    allOptions: {},
    pricing: { default: () => ({}) },
    labels: {},
    userFriendlyFieldMap: {},
    partColumns: {},
    orientationModel: { default: 0 },
    getPrice: {},
    formatPrice: {},
    getAvailablePricingOptions: {}
  },
  emits: ["update-all", "set"],
  setup(i, { emit: t }) {
    const e = i, s = t, { t: n } = Gi(["main", "errors"]), r = B(!1), o = ee(() => e.extraType + "Options"), l = ee(() => {
      var S;
      if (!((S = e.allOptions) != null && S.length)) return "auto";
      const d = e.allOptions.length;
      return d ? `repeat(${d + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), a = (d, g) => {
      s("update-all", e.shape, e.extraType, d, g);
    }, u = (d, g, S) => {
      s("set", e.shape, e.extraType, d, g, S);
    }, h = (d, g, S, _, Y) => {
      var oe;
      if (!d) return [];
      const V = (oe = g == null ? void 0 : g[S]) == null ? void 0 : oe[_];
      if (!V)
        return console.error(`ExtrasInputs: cannot find pricing options for ${S} > ${_}`), [];
      const K = Object.values(V);
      if (!K.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${S} > ${_}`), [];
      const Q = K.filter((U) => typeof U == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(d, Q, Y) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, v = (d) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const g = e.getPrice(e.shape, e.extraType, d);
      return g ? e.formatPrice(g) : "";
    }, w = () => {
      const d = [];
      e.extraType in e.shape || new Z(
        {
          item: e.shape,
          message: `The extra type '${e.extraType}' does not exist in the part`
        }
      ), o.value in e.shape || new Z(
        {
          item: e.shape,
          message: `The options key '${o.value}' does not exist in the part`
        }
      ), d.length && (r.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + d.map((g) => g.message).join(" ")));
    };
    return at(() => w()), (d, g) => {
      var _, Y, V, K, Q, oe, U, J;
      const S = Bt("font-awesome-icon");
      return r.value ? H("", !0) : (y(), C("div", {
        key: 0,
        class: xe(["extras group", [d.extraType]]),
        style: ke({ "grid-column-end": "span " + d.partColumns })
      }, [
        d.allOptions.length === 1 && d.allOptions[0].length === 1 ? (y(), C("div", Nl, [
          A("div", Wl, ie((Y = (_ = d.allOptions) == null ? void 0 : _[0]) == null ? void 0 : Y[0]), 1),
          A("div", null, [
            (V = d.shape) != null && V[o.value] && "all" in d.shape[o.value] ? (y(), ge(gt, {
              key: 0,
              id: `${d.extraType}-all-${d.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: k(jt)(k(n)("all")),
              "true-value": (Q = (K = d.allOptions) == null ? void 0 : K[0]) == null ? void 0 : Q[0],
              "false-value": "",
              value: (U = d.shape[o.value].all) == null ? void 0 : U[(oe = d.labels) == null ? void 0 : oe[0]],
              "onUpdate:value": g[0] || (g[0] = (m) => {
                var L, z;
                u("all", (L = d.labels) == null ? void 0 : L[0], m), a((z = d.labels) == null ? void 0 : z[0], m);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : H("", !0)
          ]),
          (y(!0), C(Se, null, Te(d.extraKeys, (m) => {
            var L, z, D, R, le, de;
            return y(), C("div", { key: m }, [
              (L = d.labels) != null && L[0] && ((D = (z = d.shape) == null ? void 0 : z[o.value]) != null && D[m]) && d.labels[0] in d.shape[o.value][m] ? (y(), ge(gt, {
                key: 0,
                id: `${d.extraType}-${m}-${d.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: k(jt)(k(n)(((R = d.userFriendlyFieldMap) == null ? void 0 : R[m]) || m)),
                "true-value": (de = (le = d.allOptions) == null ? void 0 : le[0]) == null ? void 0 : de[0],
                "false-value": "",
                value: d.shape[o.value][m][d.labels[0]],
                "onUpdate:value": ($) => u(m, d.labels[0], $)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : H("", !0)
            ]);
          }), 128))
        ])) : (y(), C("div", {
          key: 1,
          class: "grid inputs",
          style: ke({
            "grid-template-columns": l.value
          })
        }, [
          (J = d.shape) != null && J[o.value] && "all" in d.shape[o.value] ? (y(), C(Se, { key: 0 }, [
            A("div", Ul, ie(k(jt)(k(n)("all"))), 1),
            (y(!0), C(Se, null, Te(d.allOptions, (m, L) => {
              var z, D;
              return y(), ge(gt, {
                id: `${d.extraType}-all-${d.labels[L]}-${L}-${d.shapeIndex}`,
                key: `${d.extraType}-all-${d.labels[L]}-${L}-${d.shapeIndex}`,
                type: "select",
                disabled: h(d.pricing, d.shape, o.value, "all", L).length === 0,
                options: h(d.pricing, d.shape, o.value, "all", L).map((R) => ({ value: R, label: R })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (D = d.shape[o.value].all) == null ? void 0 : D[(z = d.labels) == null ? void 0 : z[L]],
                "onUpdate:value": (R) => {
                  var le, de;
                  u("all", (le = d.labels) == null ? void 0 : le[L], R), a((de = d.labels) == null ? void 0 : de[L], R);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            g[2] || (g[2] = A("div", null, null, -1)),
            g[3] || (g[3] = A("div", null, null, -1))
          ], 64)) : H("", !0),
          (y(!0), C(Se, null, Te(d.extraKeys, (m) => {
            var L, z;
            return y(), C(Se, { key: m }, [
              (L = d.shape) != null && L[o.value] && m in d.shape[o.value] ? (y(), C(Se, { key: 0 }, [
                A("div", jl, ie(k(jt)(k(n)(((z = d.userFriendlyFieldMap) == null ? void 0 : z[m]) || m))), 1),
                (y(!0), C(Se, null, Te(d.allOptions, (D, R) => {
                  var le;
                  return y(), ge(gt, {
                    id: `${d.extraType}-${m}-${d.labels[R]}-${R}-${d.shapeIndex}`,
                    key: `${d.extraType}-${m}-${d.labels[R]}-${R}-${d.shapeIndex}`,
                    type: "select",
                    disabled: h(d.pricing, d.shape, o.value, m, R).length === 0,
                    options: h(d.pricing, d.shape, o.value, m, R).map((de) => ({
                      value: de,
                      label: de
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: d.shape[o.value][m][(le = d.labels) == null ? void 0 : le[R]],
                    "onUpdate:value": (de) => {
                      var $;
                      return u(m, ($ = d.labels) == null ? void 0 : $[R], de);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : H("", !0),
              A("div", {
                class: "delete",
                onClick: () => k(fs)(d.shape, d.extraType, m)
              }, [
                we(S, { icon: ["fass", "trash"] })
              ], 8, zl),
              A("div", Vl, ie(v(m) || k(n)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        A("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": k(n)("action_item", { a: "delete", i: d.extraLabel }),
          onClick: g[1] || (g[1] = () => k(sl)(d.shape, d.extraType, !0))
        }, [
          we(S, { icon: ["fass", "trash"] }),
          Vt(" " + ie(k(n)("action_item", { a: "delete", i: d.extraLabel })), 1)
        ], 8, Yl)
      ], 6));
    };
  }
}), Xl = ["id", "disabled"], Kl = { class: "icon" }, Zl = /* @__PURE__ */ Oe({
  __name: "FinishButton",
  props: {
    inputShape: { default: null },
    open: { type: Boolean, default: !1 },
    id: { default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["clicked"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = () => {
      e.disabled || s("clicked");
    };
    return (r, o) => {
      var a, u, h, v;
      const l = Bt("font-awesome-icon");
      return y(), C("button", {
        id: r.id,
        class: xe(["finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (v = (h = r.inputShape) == null ? void 0 : h.finish) == null ? void 0 : v.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        A("div", Kl, [
          we(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = A("div", { class: "indicator" }, null, -1))
      ], 10, Xl);
    };
  }
}), Jl = Oe({
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
      return os(this.inputShape);
    },
    disabledOrReadonly() {
      var i;
      return this.disabled || !!((i = this.inputShape) != null && i.readonly);
    }
  },
  methods: {
    openMachining() {
      this.disabled || this.$emit("open");
    }
  }
}), Ql = ["id", "disabled"];
function ea(i, t, e, s, n, r) {
  const o = Bt("font-awesome-icon");
  return y(), C("button", {
    id: i.id,
    class: xe(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    we(o, { icon: ["fass", "hammer"] })
  ], 10, Ql);
}
const ta = /* @__PURE__ */ Jt(Jl, [["render", ea]]), ia = { id: "uploader" }, sa = {
  key: 0,
  class: "debug"
}, na = {
  key: 1,
  class: "selected-files"
}, ra = ["src"], oa = ["onClick"], la = !0, aa = /* @__PURE__ */ Oe({
  __name: "ImageUpload",
  props: {
    shapeId: {
      type: String,
      required: !0
    },
    prefix: {
      type: String,
      required: !0
    },
    uniqueId: {
      type: String,
      required: !0
    },
    env: {
      type: String,
      required: !1,
      default: "production"
    },
    maxImages: {
      type: Number,
      required: !1,
      default: 5
    },
    images: {
      type: Array,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(i, { emit: t }) {
    const e = It(() => Promise.resolve().then(() => Vi)), s = B(null), n = B({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (d) => ["image/jpeg", "image/jpg", "image/png"].includes(d.type), a = () => {
      var d;
      (d = s.value) == null || d.click();
    }, u = (d) => {
      const g = d.target, S = g.files;
      if (!S) return;
      const _ = Array.from(S), Y = _.filter((m) => !l(m));
      if (Y.length > 0) {
        const m = Y.map((L) => L.name).join(", ");
        alert(`Invalid file type(s): ${m}
Only JPG and PNG files are allowed.`), g.value = "";
        return;
      }
      const V = n.value.files || [];
      if (V.length + _.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), g.value = "";
        return;
      }
      const Q = [...V, ..._], oe = h(Q), U = Q.map((m, L) => ({
        originalName: m.name,
        newName: `${r.prefix}-${L + 1}-${r.uniqueId}${v(m.name)}`
      })), J = {
        shapeId: r.shapeId,
        files: Q,
        previewUrls: oe,
        metadata: U
      };
      n.value = J, o("update", J), g.value = "";
    }, h = (d) => d.map((g) => URL.createObjectURL(g)), v = (d) => d.substring(d.lastIndexOf(".")), w = (d) => {
      URL.revokeObjectURL(n.value.previewUrls[d]);
      const g = [...n.value.files], S = [...n.value.previewUrls], _ = [...n.value.metadata];
      if (g.splice(d, 1), S.splice(d, 1), _.splice(d, 1), g.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const Y = {
          shapeId: r.shapeId,
          files: g,
          previewUrls: S,
          metadata: _
        };
        n.value = Y, o("update", Y);
      }
    };
    return Yn(() => {
      var d;
      (d = n.value) != null && d.previewUrls && n.value.previewUrls.forEach((g) => URL.revokeObjectURL(g));
    }), at(() => {
      n.value.shapeId = r.shapeId;
      const d = r.images.find((g) => g.shapeId === r.shapeId);
      if (d) {
        const g = h(d.files);
        n.value = {
          ...d,
          previewUrls: g
        };
      }
    }), (d, g) => {
      var _;
      const S = Bt("font-awesome-icon");
      return y(), C("div", ia, [
        i.env === "development" && la ? (y(), C("div", sa, [
          we(k(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : H("", !0),
        A("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        A("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          we(S, { icon: ["fass", "files"] })
        ]),
        (_ = n.value.files) != null && _.length ? (y(), C("div", na, [
          (y(!0), C(Se, null, Te(n.value.files, (Y, V) => (y(), C("div", {
            key: V,
            class: "selected-file"
          }, [
            A("img", {
              src: n.value.previewUrls[V],
              alt: "Preview"
            }, null, 8, ra),
            A("button", {
              class: "remove-file",
              type: "button",
              onClick: (K) => w(V)
            }, [
              we(S, { icon: ["fass", "trash"] })
            ], 8, oa)
          ]))), 128))
        ])) : H("", !0)
      ]);
    };
  }
}), ua = /* @__PURE__ */ Jt(aa, [["__scopeId", "data-v-bb77aee9"]]);
function ca(i) {
  var l;
  const t = i.x, e = i.x + i.l, s = tt().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = tt().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
  this.axes.shapeXAxis ? this.axes.shapeXAxis.call(Ai(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(Ai(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((l = i == null ? void 0 : i.stock) == null ? void 0 : l.type) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.call(Di(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(Di(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function ha() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(Js(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(Qs(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function wn(i, t, e) {
  !e || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    e === "x" ? da.call(this, r, o, t[n]) : fa.call(this, r, o, t[n]);
  });
}
function da(i, t, e) {
  const s = tt().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = Sn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Ai(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, h;
    return ((h = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : h.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function fa(i, t, e) {
  const s = tt().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = Sn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Di(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  pa(r), this.axes.cutMeasurementYAxes.push(r);
}
function Sn(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function pa(i) {
  i.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (t, e, s) => {
    var n, r;
    return ((r = (n = s[e]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.height) + 10;
  }).attr("dx", (t, e, s) => {
    var n, r;
    return ((r = (n = s[e]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.width) / 4;
  }).attr("transform", (t, e, s) => {
    var n, r;
    return "rotate(90) translate(" + ((r = (n = s[e]) == null ? void 0 : n.getBBox()) == null ? void 0 : r.width) / 4 + ")";
  });
}
function hi() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function ga() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function zi() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function ma() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => ya.call(this, e)).classed("hidden", (e, s, n) => this.isTextHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => va.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, s, n) => this.isNameHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, s, n) => {
      const r = n[s];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(r.getBBox().height / 2 + 1)
      );
    }),
    (t) => t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, s, n) => {
      const r = n[s];
      return this.getRectangleCoordinate(
        e,
        "y",
        "bottom",
        -(r.getBBox().height / 2 + 1)
      );
    })
  );
  const i = this.selections.shapeWrappers.selectAll("text.shape-text.length");
  i.empty() ? this.selections.shapeLengthText = this.selections.shapeWrappers.append("text").attr("class", "shape-text length").text((t) => ba.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
    const r = s[e].getBBox().height;
    return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
  }) : i.each((t, e, s) => {
    const n = s[e], r = n.getAttribute("x"), o = n.getAttribute("y"), l = this.getRectangleCoordinate(t, "x", "center").toString(), a = n.getBBox().height, u = this.getRectangleCoordinate(t, "y", "top", -(a / 2 + 2)).toString();
    (r != l || o != u) && (n.setAttribute("x", l), n.setAttribute("y", u));
  }), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => wa.call(this, e)).classed("hidden", (e, s, n) => this.isWidthHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, s, n) => {
      const r = n[s], o = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(r.getBBox().height / 2 + 2)
      ), l = this.getRectangleCoordinate(e, "y", "center"), a = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${l}) rotate(${a})`;
    }),
    (t) => t.attr("transform", (e, s, n) => {
      const r = n[s], o = this.getRectangleCoordinate(
        e,
        "x",
        "left",
        -(r.getBBox().height / 2 + 2)
      ), l = this.getRectangleCoordinate(e, "y", "center"), a = this.state.device === "mobile" ? 90 : -90;
      return `translate(${o},${l}) rotate(${a})`;
    })
  );
}
function ya(i) {
  var t, e;
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        {
          const s = i.guillotineData.myStripDirection, n = i.addedAsGroup;
          let r = "";
          if (s === "l" ? r = `→ ${i.parentID}` : s === "w" && (r = `↑ ${i.parentID}`), (e = i == null ? void 0 : i.priority) != null && e[(t = i == null ? void 0 : i.stock) == null ? void 0 : t.parentID] && (r += "P"), n && (r += "G"), r.length) return r;
        }
        break;
      case "groups":
        {
          const s = i.addedAsGroup;
          if (s) return s.split(".")[0].toUpperCase();
        }
        break;
      case "positions":
        return i.id;
    }
  return i.parentID ? i.parentID : i.getParentID();
}
function va(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function ba(i) {
  return this.state.debug === "guillotine" ? "" : T({ v: i.l, o: this.numberConfig }).toString();
}
function wa(i) {
  return this.state.debug === "guillotine" ? "" : T({ v: i.w, o: this.numberConfig }).toString();
}
function Sa(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = Yr(
    null,
    this.props.shapes.value,
    this.props.stock.value
  );
  let s;
  if (this.props.stock.value.cutType === "efficiency") {
    if (this.state.env === "development") {
      let r = function(u) {
        return `${u.x1}-${u.y1}-${u.x2}-${u.y2}`;
      }, o = function(u) {
        u.attr("class", "ray").attr("x1", (h) => this.scales.xPositionScale(h.x1)).attr("x2", (h) => this.scales.xPositionScale(h.x2)).attr("y1", (h) => this.scales.yPositionScale(h.y1)).attr("y2", (h) => this.scales.yPositionScale(h.y2));
      };
      if (this.state.env !== "development") return;
      const a = an(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (u) => u.append("line").call((h) => o.call(this, h)),
        (u) => u.call((h) => o.call(this, h)),
        (u) => u.remove()
      );
    }
    s = Xr(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Gt();
  for (const r of e.toArray()) {
    const o = un(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = zr(i, o, this.props.stock.value);
      l && n.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new Ee(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Ee(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Ee(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      0 + (this.props.stock.value.trim.y1 ?? 0)
    ),
    new Ee(
      0 + (this.props.stock.value.trim.x1 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    ),
    new Ee(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    )
  ].forEach((r) => n.addPoint(r)), t = n.toArray()) : (n.addPoint(new Ee(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), t = n.toArray());
  for (let r = t.length; r--; ) {
    const o = t[r];
    i.x = o.x, i.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(i, l, this.props.stock.value)) {
        t.splice(r, 1);
        break;
      }
  }
  return ka.call(this, t, i), xa.call(this, t, i), !!(t != null && t.length);
}
function ka(i, t) {
  function e(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n, r) {
    n.attr("data-id", (o, l) => l).attr("class", "shape ghost").attr("x", (o) => (r.x = o.x, this.getRectangleCoordinate(r, "x"))).attr("y", (o) => (r.y = o.y, this.getRectangleCoordinate(r, "y"))).attr("width", this.getWidthAttribute(r)).attr("height", this.getHeightAttribute(r)).on("mousedown", (o, l) => {
      this.callbacks.onMoveShape(r, l);
    });
  }
  this.selections.ghostShapeGroup.selectAll("rect").data(i, e).join(
    (n) => n.append("rect").call((r) => s.call(this, r, t)),
    (n) => n.call((r) => s.call(this, r, t)),
    (n) => n.remove()
  ), this.state.hasTouch || this.selections.ghostShapeGroup.selectAll("rect").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), Re(this).classed("hover", !0), Re(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), Re(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function xa(i, t) {
  function e(n) {
    return `${n.x}-${n.y}`;
  }
  function s(n) {
    n.attr("class", "dot").attr("cx", (r) => this.scales.xPositionScale(r.x)).attr("cy", (r) => this.scales.yPositionScale(r.y)).attr("r", 6).on("mousedown", (r, o) => {
      this.callbacks.onMoveShape(t, o);
    });
  }
  this.selections.dotGroup.selectAll("circle").data(i, e).join(
    (n) => n.append("circle").call((r) => s.call(this, r)),
    (n) => n.call((r) => s.call(this, r)),
    (n) => n.remove()
  ), t.x = 0, t.y = 0, this.state.hasTouch || this.selections.dotGroup.selectAll("circle").on(
    "mouseover",
    function(n) {
      n.stopPropagation(), Re(this).classed("hover", !0);
      const r = Re(this).attr("data-id"), o = Re(`.ghost[data-id="${r}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), Re(this).classed("hover", !1);
      const r = Re(this).attr("data-id");
      Re(`.ghost[data-id="${r}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
const Ca = (i) => `${i.parentID}-${i.x}-${i.y}-${i.w}-${i.l}`;
function $a() {
  if (!this.props.containerWidth) return;
  hi.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && La.call(this), Pa.call(this);
}
function Pa() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Ca).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return Fs.call(this, t), t.size() > 0 && Gs.call(this, t.data()), _s.call(this, t), t.on("mousedown", qs.bind(this)), t;
    },
    (i) => (Fs.call(this, i), i.size() > 0 && Gs.call(this, i.data()), _s.call(this, i), i.on("mousedown", qs.bind(this)), i),
    (i) => i.remove()
  ), this.settings.main && requestAnimationFrame(() => ma.call(this)), this.selections.shapeWrappers.size() > 0;
}
function La() {
  var n;
  let i = 1 / 0, t = -1 / 0;
  for (const r of this.props.shapes.value) {
    const o = (n = r == null ? void 0 : r.bestScore) == null ? void 0 : n.total;
    if (o !== 0 && o !== null && o !== void 0) {
      i = o, t = o;
      break;
    }
  }
  const e = this.props.shapes.value.reduce((r, o) => {
    var a;
    const l = (a = o == null ? void 0 : o.bestScore) == null ? void 0 : a.total;
    return l === 0 || l === null || l === void 0 ? r : l < r ? l : r;
  }, i), s = this.props.shapes.value.reduce((r, o) => {
    var a;
    const l = (a = o == null ? void 0 : o.bestScore) == null ? void 0 : a.total;
    return l == null ? r : l > r ? l : r;
  }, t);
  this.scales.scoreColorScale = li([Mt(251, 224, 255), Mt(122, 0, 138)]).domain([e, s]);
}
function Fs(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => {
    var s;
    return (s = di.call(this, e)) == null ? void 0 : s.toString();
  });
  this.selections.shapeRectangles ? this.selections.shapeRectangles = en(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function Ia(i) {
  return {
    x1: "y1",
    x2: "y2",
    y1: "x2",
    y2: "x1",
    l1: "w1",
    l2: "w2",
    w1: "l2",
    w2: "l1"
  }[i] || i;
}
function _s(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (t) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const e = Re(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    var n;
    const s = Re(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", (n = di.call(this, e)) == null ? void 0 : n.toString());
  }, { passive: !0 });
}
function qs(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Ta.call(this, i, t), (this.settings.app || this.settings.embed) && Da.call(this, i, t), this.state.device === "desktop" && (zi.call(this), ca.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function Ta(i, t) {
  if (console.clear(), t) {
    let e;
    switch (this.state.debug) {
      case "guillotine":
        e = [
          "id",
          "placementOrder",
          "priority",
          "guillotineData.myPhase",
          "guillotineData.myStripDirection",
          "guillotineData.myStripParent",
          "guillotineData.firstShape",
          "addedAsGroup"
        ], Aa.call(this, t);
        break;
      case "groups":
        e = ["id", "addedAsGroup"];
        break;
      case "score":
        e = ["id", "bestScore.score"];
        break;
      default:
        e = ["id", "placementOrder", "priority", "addedAsGroup", "bestScore.score"];
    }
    console.table(Oa(t, e));
  }
}
function Oa(i, t) {
  return t.reduce((e, s) => {
    const n = Pn(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function Aa(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function Da(i, t) {
  var n, r;
  const e = {
    name: t.name,
    id: t.id,
    x: t.x,
    y: t.y,
    l: t.l,
    w: t.w,
    banding: t != null && t.banding && typeof t.banding == "object" ? t.banding : null,
    rot: t.rot,
    stock: (n = t == null ? void 0 : t.stock) == null ? void 0 : n.id,
    color: (r = di.call(this, t)) == null ? void 0 : r.toString(),
    notes: t == null ? void 0 : t.notes
  };
  this.state.env === "development" && console.log(e);
  const s = new CustomEvent("partClick", {
    detail: e
  });
  if (this.selections.htmlEl.dispatchEvent(s), this.settings.app) return !1;
}
function di(i) {
  var t;
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (i.guillotineData.firstShape)
          return Mt(252, 3, 182);
        if (i.addedAsGroup)
          return Mt(43, 156, 16);
        if (typeof i.guillotineData.myPhase == "number") {
          const e = [0, 115, 255], s = [176, 255, 231];
          return `rgb(${e.map((r, o) => Math.round(r + i.guillotineData.myPhase / 5 * (s[o] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (i.addedAsGroup !== !1)
          return Mt(43, 156, 16);
        break;
      case "priorityShapes":
        if (i != null && i.priority && ((t = i.priority) != null && t[i.stock.parentID]))
          return Mt(139, 171, 46);
        break;
      case "score":
        return this.scales.scoreColorScale(i.bestScore.total);
    }
  return this.scales.shapeColorScale(parseInt(i.parentID));
}
function Ea(i) {
  const t = [];
  for (const e of i)
    if (e != null && e._banding)
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = Ia.call(this, s));
        const o = Ra.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function Bs(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Li.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Li.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Li.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Li.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Gs(i) {
  if (!this.settings.main) return;
  const t = Ea.call(this, i);
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t).join(
    (e) => e.append("line").call((s) => Bs.call(this, s)),
    (e) => e.call((s) => Bs.call(this, s)),
    (e) => e.remove()
  );
}
function Li(i, t) {
  var s;
  return ((s = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[i]) == null ? void 0 : s[t]) ?? 0;
}
function Ra(i, t) {
  const e = {
    x1: i.x,
    x2: i.x,
    y1: i.y,
    y2: i.y,
    type: t
  };
  switch (t) {
    case "x1":
      e.y2 = i.y + i.w;
      break;
    case "x2":
      e.x1 = e.x2 = i.x + i.l, e.y2 = i.y + i.w;
      break;
    case "y1":
      e.x2 = i.x + i.l;
      break;
    case "y2":
      e.y1 = e.y2 = i.y + i.w, e.x2 = i.x + i.l;
      break;
    default:
      return null;
  }
  return e;
}
function Ma(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const Hs = (i) => `${i.w}-${i.l}-${i.grain}`;
function Ns(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Ws(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Fa() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), ha.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Hs).join(
    (i) => i.append("rect").attr("class", "background stock").call((t) => Ns.call(this, t)),
    (i) => i.call((t) => Ns.call(this, t)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Hs).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((t) => Ws.call(this, t)),
    (i) => i.call((t) => Ws.call(this, t)),
    (i) => i.remove()
  );
}
function kn(i) {
  return `${i.x}-${i.y}-${i.w}-${i.l}`;
}
function Us(i) {
  if (!this.props.containerWidth)
    return !1;
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(i, kn).join(
    (t) => t.append("rect").attr("class", "segment").call((e) => js.call(this, e)),
    (t) => t.call((e) => js.call(this, e)),
    (t) => t.remove()
  ), _a.call(this, this.selections.segmentRectangles), !this.settings.app && this.state.env === "development" && Ba.call(this);
}
function js(i) {
  return i.style("opacity", (t) => (t == null ? void 0 : t.offcut) === !0 ? 0.5 : 1).classed("offcut", (t) => t.offcut).classed("merged", (t) => t.merged).classed("near", (t) => t.shapePosition === "near").classed("far", (t) => t.shapePosition === "far").classed("completed", (t) => t.completed).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function _a(i) {
  this.selections.segmentGroup.selectAll("text").data(i, kn).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => zs.call(this, e)),
    (t) => t.call((e) => zs.call(this, e)),
    (t) => t.remove()
  );
}
function zs(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").text(qa.call(this)).attr("dominant-baseline", "middle");
}
function qa(i) {
  if (this.state.env !== "development" || i.offcut) return null;
  const t = i.cutDirection === "l" ? "→" : "↑";
  return this.state.env === "development" ? `${t} ${i.id}` : t;
}
function Ba() {
  this.selections.segmentRectangles.on("mousedown", function(i, t) {
    const e = structuredClone(t);
    console.log([
      "id",
      "x",
      "y",
      "l",
      "w",
      "cutDirection",
      "cutPreference"
    ].reduce((n, r) => (n[r] = Pn(e, r), n), {}));
  });
}
function xn(i) {
  var n;
  const t = (n = i == null ? void 0 : i.guillotineData) == null ? void 0 : n.parentSegmentID;
  if (!this.props.segments.value.length) return !1;
  let e;
  if (t ? e = this.props.segments.value.find((r) => r.id === t) : e = this.props.segments.value.find((r) => r.segmentType === "root"), e === void 0) return !1;
  const s = e == null ? void 0 : e.children;
  if (s != null && s.length) {
    const r = s.map((o) => this.props.segments.value.find((a) => a.x === o.x && a.y === o.y && a.l === o.l && a.w === o.w) || null).filter((o) => o !== null);
    return {
      main: e,
      siblings: r
    };
  }
  return !1;
}
function Ga(i) {
  return `${i.stock.saw.bladeWidth}-${i.x1}-${i.y1}-${i.x2}-${i.y2}`;
}
function Ha() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, Ga).join(
    (i) => i.append("line").attr("class", "cut").call((t) => Vs.call(this, t)),
    (i) => i.call((t) => Vs.call(this, t)),
    (i) => i.remove()
  ));
}
function Vs(i) {
  return i.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return e < 1 ? 1 : Math.ceil(e);
  }).attr("x1", (t) => this.scales.xPositionScale(t.getVisCoords("x1"))).attr("x2", (t) => this.scales.xPositionScale(t.getVisCoords("x2"))).attr("y1", (t) => this.scales.yPositionScale(t.getVisCoords("y1"))).attr("y2", (t) => this.scales.yPositionScale(t.getVisCoords("y2"))).classed("trim", (t) => t.isTrim);
}
function Cn(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function $n(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function Na(i, t, e, s) {
  this.selections.cutLines.style("visibility", (n) => typeof i.guillotineData[e] == "number" && n.guillotineData[e] <= i.guillotineData[e] || !s && n.guillotineData.parentSegmentID === t ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", (n) => i.stock.cutType === "guillotine" && n.isTrim ? n.type === i.type : n.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (n) => n.guillotineData.ptxDummyCut), s || Ua.call(this, i, t);
}
function Wa(i, t, e, s, n) {
  this.selections.cutLines.style("visibility", (o, l) => l <= t ? "visible" : "hidden");
  let r;
  if ((i == null ? void 0 : i.dimension) === "l" ? r = [
    [0 + (e.y1 ?? 0), i.y1 - n],
    [i.y1 + n, i.stock.w - (e != null && e.y2 ? e.y2 : 0)]
  ] : (i == null ? void 0 : i.dimension) === "w" && (r = [
    [0 + (e.x1 ?? 0), i.x1 - n],
    [i.x1 + n, i.stock.l - (e != null && e.x2 ? e.x2 : 0)]
  ]), r != null && r.length) {
    const o = [
      r[0][1] - r[0][0],
      r[1][1] - r[1][0]
    ];
    this.state.device === "desktop" && !i.isTrim && wn.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function Ua(i, t) {
  var r, o, l, a, u, h;
  const e = (r = i == null ? void 0 : i.guillotineData) == null ? void 0 : r.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (v) => Cn(v, t, e)), this.selections.cutLines.classed("inside-segment", (v) => $n(v, t));
  const s = xn.call(this, i);
  if (s === !1) return;
  const n = (l = s == null ? void 0 : s.siblings) == null ? void 0 : l[(o = s.main) != null && o.hasBeamTrim ? e - 1 : e];
  if (n) {
    let v = [], w;
    const d = this.getHalfBladeWidth(i.stock), g = i.dimension === "l" ? "y" : "x";
    (i == null ? void 0 : i.dimension) === "l" ? (v = [
      [
        n.y,
        n.y + n.w
      ],
      [
        i.y1 + d,
        (s == null ? void 0 : s.main.y) + (s == null ? void 0 : s.main.w)
      ]
    ], w = [(a = i == null ? void 0 : i.distances) == null ? void 0 : a.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (v = [
      [
        n.x,
        n.x + n.l
      ],
      [
        i.x1 + d,
        (s == null ? void 0 : s.main.x) + (s == null ? void 0 : s.main.l)
      ]
    ], w = [(u = i == null ? void 0 : i.distances) == null ? void 0 : u.left, (h = i == null ? void 0 : i.distances) == null ? void 0 : h.right]), this.state.device === "desktop" && !i.isTrim && w && wn.call(this, v, w, g);
  }
}
function ja(i = null, t = "") {
  var d, g, S, _;
  if (i === null || this.selections.cutLines.empty()) return;
  const e = this.props.cuts.value[i];
  hi.call(this), zi.call(this), Re(this.selections.cutLines.nodes()[i].parentElement).raise();
  const s = (d = e.guillotineData) == null ? void 0 : d.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (g = e == null ? void 0 : e.stock) == null ? void 0 : g.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((S = e == null ? void 0 : e.stock) == null ? void 0 : S.cutType) && s !== null && typeof s < "u" ? Na.call(this, e, s, l, t) : Wa.call(this, e, i, o, r, n), za.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = xn.call(this, e);
  if (a === !1) return;
  const { main: u, siblings: h } = a;
  if (!((_ = e == null ? void 0 : e.guillotineData) != null && _.parentSegmentID))
    return Us.call(this, [u]);
  const v = h == null ? void 0 : h.length;
  let w = [];
  if (v) {
    for (let V = v; V--; )
      h[V] && (h[V].completed = !1);
    if (e.guillotineData.segmentCutOrder === void 0 || e.guillotineData.segmentCutOrder === null)
      return;
    const Y = e.guillotineData.segmentCutOrder;
    for (let V = 0; V < v; V++)
      V < Y && (h[V].completed = !0);
    w.push(...h), w = w.filter((V) => V);
  }
  w.length && Us.call(this, w);
}
function za(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var l;
    let r = Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock)));
    const o = (l = i == null ? void 0 : i.guillotineData) == null ? void 0 : l.segmentCutOrder;
    return (Cn(s, e, o) || $n(s, e)) && (r += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (r = 5), r;
  });
}
function Va() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections.cutLines.attr("stroke-width", (i) => {
    const t = this.scales.measurementScale(this.getBladeWidth(i.stock));
    return t < 1 ? 1 : Math.ceil(t);
  }), hi.call(this), zi.call(this);
}
function Ya(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Pn(i, t) {
  return Yt(i, t);
}
class Xa {
  constructor(t) {
    c(this, "config");
    c(this, "props");
    c(this, "settings");
    c(this, "options");
    c(this, "numberConfig");
    c(this, "callbacks");
    c(this, "selections");
    c(this, "state");
    c(this, "scales");
    c(this, "axes");
    c(this, "formatNumber", (t) => T({
      v: t,
      o: this.numberConfig
    }).toString());
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = Re(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: tt(),
      yScale: tt(),
      yPositionScale: tt(),
      xPositionScale: tt(),
      yAxisScale: tt(),
      measurementScale: tt(),
      shapeColorScale: li(),
      scoreColorScale: li()
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
    }, this.props = t.props, this.settings = t.settings, this.options = t.options, this.callbacks = t.callbacks, this.numberConfig = t.numberConfig, this.initColors(t), this.initNumbers(t), this.init());
  }
  initColors(t) {
    const e = {
      partA: "#1d9bc4",
      partB: "#127da1",
      partHover: "#29c778",
      partSelected: "#1bc319",
      stock: "#ffd166",
      text: "#ffffff"
    }, s = (n, r) => Mt("#" + (Ya(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = li([
      this.config.colors.partA,
      this.config.colors.partB
    ]);
  }
  initNumbers(t) {
    this.numberConfig = t.numberConfig, (this.numberConfig.decimalPlaces === null || this.numberConfig.decimalPlaces === void 0 || isNaN(this.numberConfig.decimalPlaces)) && (this.numberConfig.decimalPlaces = 2), (this.numberConfig.fractionRoundTo === null || this.numberConfig.fractionRoundTo === void 0 || isNaN(this.numberConfig.fractionRoundTo)) && (this.numberConfig.fractionRoundTo = 0);
  }
  init() {
    this.state.hasTouch = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    const t = this.selections.htmlEl.querySelector("svg");
    if (t === null) {
      const e = this.selections.el.append("svg").attr("class", "vis");
      if (e === null) return;
      e.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), e.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(90)").attr("id", "grain-l").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), e.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("id", "grain-w").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "1"), this.selections.svgCanvas = e;
    } else
      this.selections.svgCanvas = Re(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, e, s) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), e && (this.numberConfig.decimalPlaces = e), s && (this.numberConfig.fractionRoundTo = s));
  }
  trimNameToFit(t, e) {
    function s(n, r, o) {
      const l = o[r], a = Re(l);
      a.text(n.name);
      let u = a.text();
      const h = a.node();
      if (!h) return;
      let v = h.getComputedTextLength();
      const w = this.getWidthAttribute(n) - 20;
      for (; v > w && u.length > 0; )
        u = u.slice(0, -1), a.text(u.length ? u + "..." : ""), v = a.node().getComputedTextLength();
    }
    t.each(s.bind(e));
  }
  setDevice() {
    if (!(!this.selections.htmlEl || this.selections.htmlEl.style.display === "none") && this.selections.htmlEl.offsetWidth) {
      if (this.props.containerWidth.value === 0) return !1;
      this.settings.main ? this.props.containerWidth.value <= this.state.mobileBreakpoint || this.settings.app ? (this.state.device = "mobile", this.state.padding = 0) : (this.state.device = "desktop", this.state.padding = 50) : this.state.padding = 0, this.state.w = this.props.containerWidth.value;
    }
  }
  // find the largest dimensions of all the stock (not just the active one)
  findLargestStockDimensions() {
    const t = this.props.stockList.value.filter((n) => n.used);
    if (!t) return [null, null];
    const e = t.reduce((n, r) => n.l > r.l ? n : r), s = t.reduce((n, r) => n.w > r.w ? n : r);
    return [e, s];
  }
  debounce(t, e, s = !1) {
    let n;
    return (...r) => new Promise((o) => {
      const l = () => {
        n = null, s || o(t.apply(this, r));
      };
      clearTimeout(n), s && !n && o(t.apply(this, r)), n = setTimeout(l, e);
    });
  }
  requiresStretch(t, e = null) {
    return t ? (e === null && (e = t.w / t.l), e < 0.15) : !1;
  }
  setAspectRatio() {
    if (!this.props.stock || !this.props.stock.value) return;
    this.state.w = this.props.containerWidth.value;
    const t = this.props.stock.value.w / this.props.stock.value.l;
    this.scales.xScale.domain([0, this.props.stock.value.l]).range([this.state.padding, this.state.w - this.state.padding]), this.requiresStretch(this.props.stock.value, t) && this.options.enableStretch ? (this.state.h = this.selections.htmlEl.clientWidth * 0.15 + this.state.padding * 2, this.state.stretched = !0) : (this.state.h = this.scales.xScale(this.props.stock.value.getShortSide()) + this.state.padding, this.state.stretched = !1), this.scales.yScale.domain([0, this.props.stock.value.w]).range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, this.props.stock.value.w] : [this.props.stock.value.w, 0]).range([this.state.padding, this.state.h - this.state.padding]), this.scales.yPositionScale.domain([0, this.props.stock.value.w]).range(this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]), t > 2 && (this.state.w = this.selections.htmlEl.clientWidth / t + this.state.padding * 2, this.scales.xScale.domain([0, this.props.stock.value.l]).range([this.state.padding, this.state.w - this.state.padding]), this.state.h = this.scales.xScale(this.props.stock.value.getShortSide()) + this.state.padding), this.scales.xPositionScale.domain([0, this.props.stock.value.l]).range(this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]), this.scales.measurementScale.domain([0, this.props.stock.value.l]).range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 && (t > 2 ? this.selections.el.style("width", this.state.w + "px") : this.selections.el.style("width", ""), this.selections.el.style("height", this.state.h + "px"));
  }
  //--------------------------------------------------------
  // FIND
  //--------------------------------------------------------
  findShapeElement(t) {
    const e = this.selections.shapeWrappers.filter((s) => s.id === t);
    return e.empty() ? null : e.node();
  }
  findShape(t) {
    const e = this.findShapeElement.call(this, t);
    e && this.selectShape.call(this, e);
  }
  selectShape(t) {
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => di.call(this, s));
    const e = Re(t).select("rect");
    if (e) {
      e.classed("selected", !0), e.style("fill", this.config.colors.partSelected.toString());
      const s = Re(t).datum();
      this.callbacks.onShapeSelect(s);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    $a.call(this);
  }
  drawStock() {
    Fa.call(this);
  }
  drawCuts() {
    Ha.call(this);
  }
  drawAll() {
    this.drawStock(), this.drawShapes(), this.drawCuts();
  }
  // Measurement & Calculation Methods
  getWidthAttribute(t) {
    return t != null && t.l ? this.scales.xScale(t.l) - this.state.padding : 0;
  }
  getHeightAttribute(t) {
    return t != null && t.w ? this.scales.yScale(t.w) - this.state.padding : 0;
  }
  getRectangleCoordinate(t, e, s, n) {
    let r;
    if (e === "x") {
      let o;
      switch (s) {
        case "center":
          o = this.scales.xPositionScale(t.x + t.l / 2), n && (o += n);
          break;
        case "right":
          o = this.scales.xPositionScale(t.x + t.l), n && (o -= n);
          break;
        case "left":
        default:
          o = this.scales.xPositionScale(this.settings.flipX ? t.x - t.l : t.x), n && (o -= n);
      }
      r = o;
    } else if (e === "y") {
      let o;
      switch (s) {
        case "center":
          o = this.scales.yPositionScale(t.y + t.w / 2), n && (o += n);
          break;
        case "bottom":
          o = this.scales.yPositionScale(this.settings.flipY ? t.y + t.w : t.y), n && (o += n);
          break;
        case "top":
        default:
          o = this.scales.yPositionScale(this.settings.flipY ? t.y : t.y + t.w), n && (o -= n);
      }
      r = o;
    }
    return r;
  }
  // Blade Width Methods
  getBladeWidth(t = null) {
    return x(t) && t !== null ? t.getBladeWidth() : 0;
  }
  getHalfBladeWidth(t = null) {
    const e = this.getBladeWidth(t);
    return e !== void 0 && e > 0 ? e / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), hi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), ga.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), zi.call(this);
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
  collision(t, e, s) {
    if (t.id === e.id)
      throw new Error("collision comparing to self");
    return (
      // 1 left
      t.x < e.x + e.l + this.getBladeWidth(s) && // 2 right
      t.x + t.l + this.getBladeWidth(s) > e.x && // 3 bottom
      t.y < e.y + e.w + this.getBladeWidth(s) && // 4 top
      t.y + t.w + this.getBladeWidth(s) > e.y
    );
  }
  // TOGGLE
  //--------------------------------------------------------
  toggleShapes(t = !1) {
    t ? (this.selections.shapeGroup.attr("display", "block"), this.selections.bandingGroup.attr("display", "block")) : (this.selections.shapeGroup.attr("display", "none"), this.selections.bandingGroup.attr("display", "none"));
  }
  toggleSegments(t = !0) {
    t ? this.selections.segmentGroup.attr("display", "block") : this.selections.segmentGroup.attr("display", "none");
  }
  toggleCuts(t = !0) {
    t ? this.selections.cutGroup.attr("display", "block") : this.selections.cutGroup.attr("display", "none");
  }
  // Padding Helper
  addPadding(t) {
    return t + this.state.padding;
  }
  // Text Visibility Helpers
  isTextHidden(t, e, s) {
    const n = s[e];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(t.l), l = this.scales.yScale(t.w);
    return r.width >= o || r.height >= l - this.state.padding;
  }
  isNameHidden(t, e, s) {
    const n = s[e];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(t.l), l = this.scales.measurementScale(t.w);
    return r.width >= o || l < 40;
  }
  isLengthHidden(t, e, s) {
    var a;
    if (this.settings.app) {
      const u = this.scales.measurementScale(t.l), h = this.scales.measurementScale(t.w);
      return u < 50 || h < 50;
    }
    if (((a = t == null ? void 0 : t.stock) == null ? void 0 : a.type) === "linear") return !1;
    const n = s[e];
    if (!n) return !0;
    const r = n.getBBox(), o = this.scales.measurementScale(t.l), l = this.scales.measurementScale(t.w);
    return r.width >= o || l < 30;
  }
  isWidthHidden(t, e, s) {
    if (this.settings.app)
      return this.scales.measurementScale(t.l) < 50 || this.scales.measurementScale(t.w) < 50;
    const r = s[e].getBBox();
    return this.scales.measurementScale(t.l) < 30 || r.height >= this.scales.measurementScale(t.w);
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
  						parentId: s.parentID,
  						addedAsGroup: s.addedAsGroup
  					} ) )
  				} );
  			} );
  	}
  } */
  // Clear Selection
  clearSelection() {
    var t, e;
    (t = this == null ? void 0 : this.selections) != null && t.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => di.call(this, s)), (e = this == null ? void 0 : this.selections) != null && e.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    hi.call(this);
  }
  updateShapeVisibility() {
    Ma.call(this);
  }
  drawPositions(t) {
    Sa.call(this, t);
  }
  showCut(t) {
    ja.call(this, t);
  }
  resetCuts() {
    Va.call(this);
  }
}
const Ka = ["id"], Za = /* @__PURE__ */ Oe({
  __name: "Diagram",
  props: {
    elementId: {},
    numberFormat: { default: "decimal" },
    decimalPlaces: { default: 2 },
    main: { type: Boolean, default: !0 },
    stockId: { default: null },
    colors: { default: null },
    disableClick: { type: Boolean, default: !1 },
    enableStretch: { type: Boolean, default: !0 },
    moveMode: { default: () => B(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape"],
  setup(i, { expose: t, emit: e }) {
    const { r: s, activeStock: n, activeShapes: r, activeCuts: o, activeSegments: l, currentCutIndex: a, getStock: u, getShapes: h, getSegments: v, getCuts: w } = Zs(), d = i, g = e, S = (se) => {
      g("shape-colour-update", se);
    }, _ = (se) => {
      se != null && se.id && g("shape-select", se.id.toString());
    }, Y = (se) => {
      se && g("add-to-parts-bin", se);
    }, V = (se, st) => {
      se && g("move-shape", se, st);
    }, K = B(0), Q = B(0), oe = B(null);
    let U, J = B(!1);
    at(() => le());
    const m = ee(() => ({
      format: d.numberFormat,
      decimals: d.decimalPlaces
    })), L = ee(() => d.stockId ? u(d.stockId) : n.value), z = ee(() => d.stockId ? h(d.stockId) : r.value), D = ee(() => d.main ? d.stockId ? w(d.stockId) : o.value : []), R = ee(() => d.main ? d.stockId ? v(d.stockId) : l.value : []);
    Xn(oe, (se) => {
      const st = se[0], { width: bt } = st.contentRect;
      bt > 0 && (K.value = bt);
    }), Kn(
      K,
      (se) => {
        U && (se <= 0 || (U.setDevice(), U.resetShapeAxes(), U.drawAll()));
      },
      { throttle: 100 }
    ), $e(n, (se) => {
      se && (K.value <= 0 || (U.setDevice(), U.drawStock()));
    }), $e(r, (se) => {
      se && (K.value <= 0 || (U.setDevice(), U.drawShapes()));
    }), $e(o, () => {
      K.value <= 0 || U.drawCuts();
    }), $e(a, () => {
      K.value <= 0 || (U.toggleSegments(!0), U.showCut(a.value));
    }), $e(m, (se) => {
      U.updateNumberFormat(se.format, se.decimals, null);
    });
    const le = () => {
      const se = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${d.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: d.numberFormat,
          decimalPlaces: d.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: d.colors || null,
        //[] check this
        settings: {
          main: d.main,
          app: !1,
          embed: !1,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: Q,
          containerWidth: K,
          stock: L,
          shapes: z,
          cuts: D,
          segments: R,
          stockList: s.stockList,
          moveMode: d.moveMode
        },
        options: {
          disableClick: d.disableClick,
          enableStretch: d.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: S,
          onShapeSelect: _,
          onAddToPartsBin: Y,
          onMoveShape: V
        }
      };
      U = new Xa(se), J.value = !0;
    };
    return t({
      loaded: J,
      toggleShapes: (se = !1) => {
        U && U.toggleShapes(se);
      },
      toggleCuts: (se = !1) => {
        U && U.toggleCuts(se);
      },
      toggleSegments: (se = !1) => {
        U && U.toggleSegments(se);
      },
      drawShapes: () => {
        U && U.drawShapes();
      },
      drawStock: () => {
        U && U.drawStock();
      },
      drawPositions: (se) => {
        U && U.drawPositions(se);
      },
      resetPositions: () => {
        U && U.removePositions();
      },
      findShape: (se) => {
        U && U.findShape(se);
      },
      clearSelection: () => {
        U && U.clearSelection();
      },
      resetCuts: () => {
        U && (U.toggleSegments(!1), U.resetCuts());
      },
      showCut: (se) => {
        U && (U.toggleSegments(!0), U.showCut(se));
      },
      requiresStretch: (se) => {
        U && U.requiresStretch(se);
      }
    }), (se, st) => (y(), C("div", {
      id: se.elementId,
      ref_key: "diagramContainerRef",
      ref: oe,
      class: "diagram-container"
    }, null, 8, Ka));
  }
}), Ja = {
  key: 0,
  class: "debug"
}, Qa = { key: 2 }, eu = {
  key: 0,
  class: "row table-heading"
}, tu = {
  key: 0,
  class: "cell center"
}, iu = {
  key: 1,
  class: "cell delete"
}, su = { class: "cell" }, nu = ["id", "disabled", "onClick"], ru = {
  key: 0,
  class: "cell center"
}, ou = ["onClick"], lu = {
  key: 1,
  class: "cell"
}, au = ["disabled", "aria-label", "onClick"], uu = { class: "button-wrapper main" }, cu = ["aria-label"], hu = ["aria-label", "disabled"], du = ["aria-label"], fu = { id: "part-count" }, pu = {
  key: 3,
  id: "messages"
}, gu = {
  key: 0,
  class: "heading"
}, mu = { class: "content" }, yu = {
  key: 4,
  id: "progress"
}, vu = !1, bu = /* @__PURE__ */ Oe({
  __name: "CheckoutCalculator",
  props: {
    debug: {
      type: Boolean,
      default: !1
    },
    stock: {
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
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "result", "no-result", "log", "error"],
  setup(i, { expose: t, emit: e }) {
    const s = It(() => Promise.resolve().then(() => Au)), n = It(() => Promise.resolve().then(() => Eu)), r = It(() => Promise.resolve().then(() => Qu)), o = It(() => Promise.resolve().then(() => rc)), l = It(() => Promise.resolve().then(() => Vi)), { t: a } = Gi(["main", "errors"]), { inputs: u, totalInputShapes: h, getShapeGrainSummary: v, updateNumberFormat: w, validateInputStock: d } = Ks(), { r: g, updateFromResult: S, stackedStock: _, uniqueAddedShapes: Y, uniqueUsedStock: V, activeStockId: K, setActiveStockId: Q } = Zs(), { progress: oe, reset: U } = ur(), { addNotice: J } = Hi(), { tip: m, update: L, hide: z } = lr(), D = i, R = e, le = "production", de = B((navigator == null ? void 0 : navigator.language) || "en-US"), $ = Zn(null), q = window.location.hostname, G = B(!1), te = B(!0), ne = Jn("Checkout/currentURL", window.location.href), me = ns(), he = B([]), Ue = B(!1), it = B(!1), O = B(!1), ut = B(!1), se = B(0), st = B(!1), bt = B(Wo()), wt = B(!1), { socket: ct } = ar({
      refs: {
        connected: G,
        thinking: O
      },
      callbacks: {
        onResult(f) {
          var I, F, X, fe;
          const p = f.result;
          if (S(p), !((I = p.shapeList) != null && I.length) || !((F = p.stockList) != null && F.length)) {
            U(), J({
              type: "error",
              message: Ie(a("no_result")),
              additional: [Ie(a("check_inputs"))]
            }), O.value = !1;
            return;
          }
          qn();
          const b = {
            jobId: f.jobId,
            metadata: g.metadata.value,
            parts: Y.value.map((E) => {
              var j, re, N;
              return {
                l: E.l,
                w: E.w,
                t: E == null ? void 0 : E.t,
                material: E.material,
                orientationLock: E.orientationLock,
                q: (re = (j = g.metadata.value) == null ? void 0 : j.addedPartTally) == null ? void 0 : re[E.parentID],
                name: E.name,
                banding: E.banding,
                finish: E.finish,
                customData: E.customData,
                stockId: ((N = E == null ? void 0 : E.stock) == null ? void 0 : N.id) || (E == null ? void 0 : E.stockId)
              };
            }),
            stock: V.value.map((E) => {
              var j, re;
              return {
                id: E.id,
                name: E == null ? void 0 : E.name,
                l: E.l,
                w: E.w,
                t: E == null ? void 0 : E.t,
                material: E.material,
                q: (re = (j = g.metadata.value) == null ? void 0 : j.usedStockTally) == null ? void 0 : re[E.parentID],
                trim: E == null ? void 0 : E.trim,
                cost: E == null ? void 0 : E.cost,
                analysis: E == null ? void 0 : E.analysis,
                type: E == null ? void 0 : E.type
              };
            }),
            offcuts: g.offcuts.value.map((E) => ({
              l: E.l,
              w: E.w,
              t: (E == null ? void 0 : E.t) ?? null,
              q: E.q,
              stockId: E.stockId
            })),
            inputs: {
              parts: u.inputShapes.value.map((E) => {
                const j = { ...E };
                return delete j.listId, j;
              })
            }
          };
          if ((fe = (X = g == null ? void 0 : g.metadata.value) == null ? void 0 : X.unplacedParts) != null && fe.length) {
            const E = g.metadata.value.unplacedParts.map((j) => j.id).join();
            J({
              type: "warning",
              message: Ie(a("parts_not_fit")) + ": " + E
            });
          }
          R("result", b), O.value = !1;
        },
        onUser(f) {
          f.value = f;
        },
        onConnectError(f) {
          J({
            type: "error",
            message: Ie(a("cannot_connect")),
            additional: [f]
          });
        },
        onError(f) {
          J({
            type: "error",
            message: Ie(a("error_occurred")),
            additional: [f]
          });
        }
      }
    }), Ze = {
      enable: {
        diagram: !0,
        focus: !0,
        click: !0,
        partName: !0,
        progressNumber: !0,
        orientation: !0,
        banding: !1,
        finish: !1,
        machining: !1,
        csvImport: !1,
        imageUpload: !1
      },
      colors: {
        partA: "#118ab2",
        partB: null,
        partHover: null,
        partSelected: null,
        stock: "#ffd166",
        button: "#118ab2",
        buttonText: "#ffffff",
        text: "#ffffff"
      },
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      stackHeight: 100,
      maxParts: null,
      locale: (navigator == null ? void 0 : navigator.language) || "en-US",
      orientationModel: 0,
      customFields: [],
      fieldOrder: [],
      minDimension: 0,
      stockSelection: null,
      cutPreference: null,
      bladeWidth: null,
      stockType: null,
      minSpacing: 0,
      stockGrain: null,
      partTrim: 0
    }, M = dt(Ze), Ae = dt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), Le = B(null), Qt = B(!1), Pe = B(""), ht = B(""), qe = dt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Be = B([]), Fe = B([]), Et = B([]), Ht = B(!1), ze = dt({
      numberFormat: "decimal",
      faces: { enabled: !0 },
      holes: { enabled: !1 },
      corners: {
        enabled: !1,
        types: []
      },
      banding: { enabled: !1 },
      hingeHoles: { enabled: !1 },
      shelfHoles: { enabled: !1 }
    }), be = dt({
      labels: [],
      pricing: {},
      options: {},
      keys: mt
    }), De = dt({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), ei = dt({
      parts: {
        sheet: [
          { id: "material", enabled: !1 },
          { id: "l", enabled: !0 },
          { id: "w", enabled: !0 },
          { id: "t", enabled: !1 },
          { id: "q", enabled: !0 },
          { id: "name", enabled: !0 },
          { id: "orientationLock", enabled: !0 },
          { id: "banding", enabled: !1 },
          { id: "finish", enabled: !1 },
          { id: "machining", enabled: !1 },
          { id: "imageUpload", enabled: !1 }
        ],
        linear: [
          { id: "l", enabled: !0 },
          { id: "q", enabled: !0 },
          { id: "name", enabled: !0 },
          { id: "finish", enabled: !1 },
          { id: "imageUpload", enabled: !1 }
        ],
        roll: [
          { id: "l", enabled: !0 },
          { id: "w", enabled: !0 },
          { id: "q", enabled: !0 },
          { id: "name", enabled: !0 },
          { id: "orientationLock", enabled: !0 },
          { id: "imageUpload", enabled: !1 }
        ]
      }
    }), Nt = B([]), mi = ee(() => {
      var p;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (p = Be.value[0]) == null ? void 0 : p.name,
          options: Be.value.map((b) => ({
            value: b.name,
            label: b.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: M.numberFormat === "decimal" ? "float" : "string",
          label: "thickness",
          allowZero: !1
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "length",
          min: 0,
          required: !0,
          allowZero: !1
        },
        {
          id: "w",
          fieldMap: "w",
          type: "unitDependent",
          label: "width",
          min: 0,
          required: !0,
          allowZero: !1
        },
        {
          id: "q",
          fieldMap: "q",
          type: "integer",
          default: 1,
          label: "quantity",
          min: 0
        },
        {
          id: "name",
          fieldMap: "name",
          type: "string",
          label: "name"
        },
        {
          id: "orientationLock",
          w: "32px",
          label: "rotation",
          fieldMap: "orientationLock"
        },
        {
          id: "banding",
          w: "32px",
          label: "banding",
          fieldMap: "bandingOptions"
        },
        {
          id: "finish",
          type: "checkbox",
          w: "32px",
          label: "finish",
          fieldMap: "finish"
        },
        {
          id: "machining",
          w: "32px",
          label: "machining",
          fieldMap: "machining"
        },
        {
          id: "imageUpload",
          w: "32px",
          label: "image_upload",
          fieldMap: "imageUpload"
        }
      ], ...Nt.value];
    }), St = ee(() => yl(
      ei,
      mi.value,
      "parts",
      Ae.stockType,
      M.fieldOrder
    )), kt = ee(() => {
      let f = St.value.length + 1;
      return u.inputShapes.value.length > 1 && f++, f;
    }), P = ee(() => {
      const f = {
        id: "34px",
        del: "30px",
        info: "30px"
      }, p = [];
      for (const b of St.value)
        b.id !== "trim" && p.push(b.w ?? "minmax(20px, 1fr)");
      return p.unshift(f.id), u.inputShapes.value.length > 1 && p.push(f.del), p.join(" ");
    }), W = ee(() => ({
      fontSize: "11px",
      textAlign: "right",
      width: "100%",
      height: "auto",
      position: "relative",
      display: "flex",
      visibility: "visible",
      opacity: "1",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-end",
      paddingRight: "10px",
      marginTop: "10px",
      marginBottom: "2px",
      userSelect: "none",
      alignItems: "center"
    })), ae = ee(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), ye = {
      stockType: (f) => {
        const p = ["sheet", "linear", "roll"];
        p.includes(f) || console.warn(`${f} is not a valid stockType, expected ${p.join("|")}`), Ae.stockType = f, f === "linear" && (Ae.cutType = null, Ae.cutPreference = null);
      },
      stockSelection: (f) => {
        const p = ["efficiency", "smallest"];
        f && !p.includes(f) ? console.warn(`${f} is not a valid stockSelection, expected ${p.join("|")}`) : Ae.options.stockSelection = f;
      },
      minSpacing: (f) => {
        Ae.options.minSpacing = f;
      },
      stackHeight: (f) => {
        Ae.stackHeight = f;
      },
      cutPreference: (f) => {
        const p = ["efficiency", "length", "width", "beam"];
        if (p.includes(f)) {
          const { cutType: b, cutPreference: I } = Xi(f);
          Ae.cutType = b, Ae.cutPreference = I;
        } else
          console.warn(`SmartCut - ${f} is not one of ${p.join("|")}`);
      },
      bladeWidth: (f) => {
        f >= 0 ? Ae.bladeWidth = f : console.warn(`SmartCut - you provided an incorrect blade width of: ${f}`);
      },
      maxParts: (f) => {
        M.maxParts = f;
      },
      locale: (f) => {
        de.value = f.replace(/_/g, "-");
      },
      enable: (f) => {
        const p = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const b in Ze.enable)
          b in f && (M.enable[b] = f[b]);
        for (const b in p)
          Ye(b, Rt(f, [p[b]]) ?? Ze.enable[p[b]]);
        st.value = Rt(f, ["csvImport"]) ?? Ze.enable.csvImport;
      },
      colors: (f) => {
        for (const p in Ze.colors)
          p in f && (M.colors[p] = f[p]);
      },
      orientationModel: (f) => {
        if (![0, 1, 2].includes(f)) {
          M.orientationModel = 0;
          return;
        }
        M.orientationModel = f;
      },
      numberFormat: (f) => {
        if (!["decimal", "fraction"].includes(f)) {
          M.numberFormat = "decimal";
          return;
        }
        M.numberFormat = f;
      },
      customFields: (f) => {
        if (!Array.isArray(f) || !(f != null && f.length)) return;
        const p = [];
        f.forEach((b, I) => {
          p.push(b), p[I].custom = !0;
          const F = ti(b.id);
          p[I].id = F, p[I].fieldMap = "customData." + F, b.type === "checkbox" && (p[I].w = "32px"), b.type === "select" && (p[I].output = b.output ?? "string", p[I].options = b.options);
        }), Nt.value = p;
        for (const b of u.inputShapes.value)
          b.customData = f.reduce((I, F) => {
            const X = ti(F.id);
            return I[X] = b.customData[X] || F.default || "", I;
          }, {});
      }
    }, Ve = (f) => {
      if (D.debug && R("log", ["checkout init...", f]), f != null && f.options) {
        const b = f.options;
        rl(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((X) => {
          X in b || R("error", `${X} is a required option`);
        });
        const F = ["enable", "colors"];
        for (const X in b)
          F.includes(X) || (M[X] = b[X]), X in ye && ye[X](b[X]);
      }
      f.colors && "colors" in ye && ye.colors(f.colors), Ss("banding", f), Ss("finish", f), Qe(f), Tn(f), it.value = !0, D.debug && R("log", ["init complete"]);
      const p = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(p), Ke(() => {
        Rn() || alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Ge = (f, p) => {
      f && (f.orientationLock = p);
    }, Ye = (f, p = !1) => {
      gl(ei, "parts", Ae.stockType, f, p);
    }, ti = (f) => f ? Ni(f).toLowerCase() : null, He = (f, p) => {
      p.valid ? z() : L({
        referenceEl: f,
        show: !0,
        content: a(`fieldValidation.${p.message}`),
        type: "error"
      });
    }, Qe = (f) => {
      var p, b, I, F, X;
      if (Rt(M, ["enable", "machining"]) && f != null && f.machining) {
        for (const fe in ze)
          f.machining[fe] && (ze[fe] = f.machining[fe]);
        if (["holes", "hingeHoles"].forEach((fe) => {
          var E, j;
          (E = f == null ? void 0 : f.machining) != null && E[fe] && (ze[fe].enabled = (j = f == null ? void 0 : f.machining) == null ? void 0 : j[fe].enabled);
        }), (I = (b = (p = f == null ? void 0 : f.machining) == null ? void 0 : p.corners) == null ? void 0 : b.types) != null && I.length && (ze.corners.enabled = !0, ze.corners.types = f.machining.corners.types), f.banding && ((X = (F = f == null ? void 0 : f.options) == null ? void 0 : F.enable) != null && X.banding)) {
          if (!be) return;
          ze.banding = {
            enabled: !0
          }, be.options.length && (ze.banding.options = be.options), be.labels.length && (ze.banding.labels = be.labels), Xt(be.pricing) && (ze.banding.pricing = be.pricing);
        }
      }
    }, ue = (f = null) => {
      Le.value = f, f && f.l && f.w ? Ht.value = !0 : alert("Please enter dimensions first");
    }, xt = () => {
      Ht.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, Ct = (f = []) => {
      if (Fe.value = [], Et.value = [], Ye("t", !1), !!f.length) {
        for (const p of f)
          if (p != null && p.t)
            if (typeof p.t == "string" && p.t.includes(",")) {
              const b = gs(p.t, !0);
              b.length === 2 ? (On(b), Ye("t", !0), p.t = Fe.value[0]) : R("error", "bonded thickness found which does not have 2 options");
            } else Fe.value.includes(p.t) || Fe.value.push(p.t);
        Fe.value.length > 1 && Ye("t", !0);
      }
    }, Ln = (f) => {
      var F;
      if (!f) return { thicknesses: [], bondedThicknesses: [] };
      if (!((F = Be.value) != null && F.length))
        return {
          thicknesses: Fe.value,
          bondedThicknesses: []
        };
      if (!f.material) return { thicknesses: [], bondedThicknesses: [] };
      const p = Be.value.find((X) => X.name === f.material);
      if (!p) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...p.thicknesses], I = [];
      for (let X = 0; X < b.length; X++) {
        const fe = b[X], E = gs(fe), j = [];
        if (E.length) {
          for (const re of E)
            b[X] = re, j.push(X);
          X++;
        }
        j.length && I.push(j);
      }
      return {
        thicknesses: b,
        bondedThicknesses: I
      };
    }, In = (f) => Ln(f).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), Tn = (f) => {
      var p, b;
      if ((p = f == null ? void 0 : f.stock) != null && p.some((I) => I == null ? void 0 : I.material)) {
        Be.value = [], Fe.value = [], Et.value = [];
        const I = /* @__PURE__ */ new Map();
        for (const F of f.stock) {
          if (!F.material) continue;
          const X = F.material.toUpperCase();
          I.has(X) || I.set(X, /* @__PURE__ */ new Set()), F.t != null && ((b = I.get(X)) == null || b.add(T({ v: F.t })));
        }
        Be.value = Array.from(I.entries()).map(([F, X]) => ({
          name: F,
          thicknesses: Array.from(X).sort((E, j) => E - j)
        })), Be.value.length > 1 && Ye("material", !0);
      } else
        Ct(f.stock);
    }, On = (f, p = null) => {
      if (!Array.isArray(f)) {
        R("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let I = 0; I < f.length; I++) {
        let F = f[I];
        M.numberFormat === "decimal" && (F = parseFloat(F)), Fe.value.push(F), p && p.thicknesses.push(F), b.push(Fe.value.length - 1);
      }
      Et.value.push(b);
    }, gs = (f, p = !1) => {
      if (typeof f == "string" && f.includes(",")) {
        const b = f.split(",");
        return p ? b.map((I) => T({ v: I })) : b;
      }
      return [];
    }, An = () => {
      wt.value ? En() : Dn();
    }, Dn = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), wt.value = !0;
    }, En = () => {
      document.exitFullscreen && document.exitFullscreen(), wt.value = !1;
    }, Rn = () => {
      var I, F;
      if ((F = (I = $.value) == null ? void 0 : I.api) != null && F.whiteLabel) return !0;
      let f = !0;
      const p = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [p, b].forEach((X, fe) => {
        if (!X) return f = !1;
        const E = window.getComputedStyle(X);
        if (E.display === "none" || E.display === "hidden" || E.opacity === "0" || E.color === "transparent" || E.position !== "relative" || fe === 1 && E.color !== "#4e4e4e" && E.color !== "rgb(78, 78, 78)")
          return f = !1;
      }), te.value = f, f;
    }, ms = (f, p, b, I, F) => {
      ps(
        f,
        p,
        b,
        I,
        F,
        D.findExtrasPrice
      );
    }, ys = (f, p, b, I) => {
      bn(
        f,
        p,
        b,
        I,
        p === "banding" ? gi : [],
        D.findExtrasPrice
      );
    }, yi = (f, p) => {
      const b = p === "banding" ? be == null ? void 0 : be.labels : De == null ? void 0 : De.labels;
      il(f, p, b);
      const I = ds(p);
      if (f != null && f[I])
        for (const F in f[I]) {
          const X = Bi(f, p, F, D.findExtrasPrice);
          !X && F && f[p][F] && new Z({
            item: f,
            field: [[p, F]],
            type: "error",
            message: Ie(a("option_not_available", { x: f[p][F], y: a(p) }))
          }), ci(f, p, F, !!X);
        }
    }, vs = (f) => {
      const p = Object.keys(f);
      return Math.max(...p.map((I) => I.split("|").length));
    }, bs = (f) => {
      const p = [], b = Object.keys(f), I = vs(f);
      for (let F = I; F--; ) p.push(/* @__PURE__ */ new Set());
      for (const F of b)
        F.split("|").forEach((fe, E) => p[E].add(fe));
      for (let F = 0; F < I; F++)
        p[F] = Array.from(p[F]);
      return p;
    }, vi = (f, p = [], b) => {
      if (!f) return [];
      if (b > 0 && !p[b - 1]) return [];
      const I = /* @__PURE__ */ new Set();
      for (const F of Object.keys(f)) {
        const X = F.split("|");
        if (X.length > b) {
          let fe = !0;
          for (let E = 0; E < b; E++)
            if (p[E] && X[E] !== p[E]) {
              fe = !1;
              break;
            }
          fe && I.add(X[b]);
        }
      }
      return Array.from(I);
    }, bi = (f, p, b) => Bi(
      f,
      p,
      b,
      D.findExtrasPrice
    ), Mn = (f) => {
      const p = he.value.findIndex((b) => b.shapeId === f.shapeId);
      p !== -1 ? he.value[p] = f : he.value.push(f), window.smartcutImages = he.value;
    }, Fn = (f) => {
      he.value = he.value.filter((p) => p.shapeId !== f), window.smartcutImages = he.value;
    }, wi = (f = 1) => {
      for (let p = f; p--; ) {
        let b;
        if (u.inputShapes.value.length > 0) {
          const I = u.inputShapes.value[u.inputShapes.value.length - 1];
          b = ii({
            material: I.material,
            t: I.t
          });
        } else
          b = ii();
        u.inputShapes.value.push(b);
      }
    }, _n = (f) => {
      var b;
      if (D.readonly || u.inputShapes.value.length === 1) return;
      const p = u.inputShapes.value[f].listId;
      u.inputShapes.value.splice(f, 1), ((b = Le.value) == null ? void 0 : b.listId) === p && (Le.value = null), U();
    }, ii = (f = {
      l: null,
      w: Ae.stockType === "linear" ? ((p) => (p = u.inputStock.value[0]) == null ? void 0 : p.w)() : null,
      t: Fe.value.length ? Fe.value[0] : null,
      q: 1,
      material: ((b) => (b = Be.value) == null ? void 0 : b.length)() === 1 ? Be.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var F, X;
      f.id = (u.inputShapes.value.length + 1).toString();
      const I = new Ui(f, M.numberFormat);
      return (F = be == null ? void 0 : be.labels) != null && F.length && yi(I, "banding"), (X = De == null ? void 0 : De.labels) != null && X.length && yi(I, "finish"), I;
    }, qn = () => {
      Fe.value.length && g.shapeList.value.forEach((f) => {
        if (!f.t) return;
        const p = Fe.value.findIndex(
          (F) => T({ v: F }) === f.t
        ), b = Et.value.find((F) => F.includes(p));
        if (!b) return;
        const I = Math.min(
          ...b.map((F) => Fe.value[F])
        );
        f.t > I && (f.q = f.q * (f.t / I), f.t = I);
      });
    }, ws = () => {
      U(), Q(null), g.stockList.value = [], g.shapeList.value = [], g.cutList.value = [], se.value = 0;
    }, Bn = () => {
      u.inputShapes.value.length = 0, Ke(() => wi(1));
    }, Gn = async () => {
      if (R("calculating"), O.value) return !1;
      O.value = !0, ut.value = !1;
      const { valid: f, saw: p, stockList: b, shapeList: I } = await el({
        t: a,
        partTrim: M.partTrim,
        maxShapes: M.maxParts,
        orientationModel: M.orientationModel,
        sawData: Ae,
        onLimit: () => {
          J({
            type: "error",
            message: a("max_parts") + " " + M.maxParts
          });
        }
      });
      if (!f) {
        R("validation-error"), O.value = !1;
        return;
      }
      ws(), D.debug && console.log(
        "SmartCut - calculating",
        "stock",
        b.map((X) => X.dimensions()),
        "parts",
        I.map((X) => X.dimensions())
      );
      const F = {
        inputs: {
          parts: u.inputShapes.value,
          stock: u.inputStock.value,
          saw: p
        },
        saw: p,
        shapeList: I,
        stockList: b,
        enableEvo: !0,
        domain: q
      };
      ct.connect(), ct.emit("calculate", F);
    }, Ss = (f, p) => {
      var N;
      if (Ye(f, !1), !f || !p || !(p != null && p[f]) || !Rt(M, ["enable", f])) return;
      const b = [f, "pricing"];
      if (!Os(p, b)) {
        R("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const I = Rt(p, b);
      if (typeof I != "object") {
        R("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!Xt(I)) {
        R("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const F = Object.keys(I), X = Object.values(I);
      if (!F.length) {
        R("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const fe = /,/;
      for (const Xe of F)
        if (fe.test(Xe)) {
          R("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (X.some((Xe) => isNaN(Xe))) {
        R("error", `${b} values must be a number`);
        return;
      }
      const E = vs(I), j = [f, "labels"];
      let re = [];
      if (Os(p, j))
        re = Rt(p, j);
      else {
        R("error", `${j.join(".")} not found`);
        return;
      }
      if (!re) {
        R("error", `${j.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(re)) {
        R("error", `${j.join(".")} data must be an array`);
        return;
      }
      if (!(re != null && re.length)) {
        R("error", `if provided, ${j.join(".")} data must contain values`);
        return;
      }
      if (re.length !== E) {
        R("error", `${j.join(".")} length (${re.length}) must match the number of levels in ${b.join(".")} (${E})`);
        return;
      }
      switch (f) {
        case "banding":
          be.labels = re, be.pricing = I, be.options = bs(I);
          break;
        case "finish":
          De.labels = re, De.pricing = I, De.options = bs(I);
          break;
      }
      if (Ye(f, !0), !!((N = u.inputShapes.value) != null && N.length))
        for (const Xe of u.inputShapes.value)
          yi(Xe, f);
    }, Si = (f, p) => {
      if (!p) return;
      f !== "info" && Object.keys(qe).forEach((I) => {
        I !== f && I !== "info" && (qe[I] = null);
      });
      const b = u.inputShapes.value.indexOf(p);
      qe[f] === b ? (Le.value = null, qe[f] = null) : (Le.value = p, qe[f] = b);
    }, ks = (f) => {
      if (R("log", ["load event received"]), !it.value) {
        R("log", ["load event received"]);
        return;
      }
      Hn(f.detail);
    }, Hn = (f) => {
      var I, F, X;
      if (R("log", ["loading parts..."]), !f || !((F = (I = f == null ? void 0 : f.inputs) == null ? void 0 : I.parts) != null && F.length)) {
        R("log", ["could not find any parts to import"]);
        return;
      }
      u.inputShapes.value.length = 0;
      let p = 0;
      for (const fe of f.inputs.parts) {
        const E = ii(fe);
        E ? (u.inputShapes.value.push(E), (X = E.issues) != null && X.length && R("log", [`SmartCut - issues found while importing part at index ${p}`, E.issues])) : R("log", [`SmartCut - error loading part at index ${p}`, fe]), p++;
      }
      u.inputShapes.value.map((fe) => Lt(fe.issues)).flat().length && J({
        type: "error",
        message: Ie(a("issues_found"))
      }), R("log", [`SmartCut - loaded ${u.inputShapes.value.length} parts`]);
    }, Nn = (f) => {
      u.inputShapes.value.length = 0, Ke(() => {
        var p, b;
        for (const I of f)
          I.t = ((b = (p = u.inputStock.value) == null ? void 0 : p[0]) == null ? void 0 : b.t) ?? null, u.inputShapes.value.push(ii(I));
      });
    };
    $e(() => D.stock, (f) => {
      if (ws(), Array.isArray(f) || console.warn("SmartCut - stock must be passed as an array"), !!(f != null && f.length)) {
        u.inputStock.value.length = 0, Be.value.length || Ct(f);
        for (const p of f) {
          const b = new as({
            ...p,
            autoAdd: !0,
            id: (u.inputStock.value.length + 1).toString(),
            type: Ae.stockType
          }, M.numberFormat);
          u.inputStock.value.push(b);
        }
        if (u.inputStock.value.length) {
          u.inputShapes.value.length ? Ke(() => {
            u.inputShapes.value.forEach((b) => {
              if (b.material) {
                const I = Be.value.find((F) => F.name === b.material);
                I && (b.t = T({ v: I.thicknesses[0] }));
              } else
                b.t = T({ v: u.inputStock.value[0].t });
            });
          }) : Ke(() => wi(1));
          const p = d();
          p.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(p))), J({
            type: "error",
            message: Ie(a("stock_issue")),
            additional: p.map((b) => a(b.message))
          }));
        }
      }
    }, { immediate: !0 }), $e(u.inputShapes, (f) => {
      R("inputs-changed"), f.forEach((p) => {
        var I;
        Ae.stockType === "linear" && (p.w = (I = u.inputShapes.value[0]) == null ? void 0 : I.w);
        const b = Be.value.find((F) => F.name === p.material);
        b && (b.thicknesses.includes(T({ v: p.t })) || (p.t = T({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), $e(() => M.numberFormat, (f) => {
      w(f);
    });
    const Wn = () => {
      ct && ct.disconnect();
    };
    return at(() => {
      if (Ue.value) return;
      const f = new URL(window.location.href), p = f.searchParams.toString(), b = f.origin + f.pathname + (p ? `?${p}` : "");
      ne.value !== b && (u.inputShapes.value.length = 0, wi(1)), ne.value = b, de.value = M.locale, ct.connect(), ct.emit("getUserFromDomain"), window.addEventListener("smartcut/load", ks), Ue.value = !0, D.debug && R("log", [
        "ready...",
        "fields:",
        St.value.map((I) => I.id)
      ]);
    }), is(() => {
      window.removeEventListener("smartcut/load", ks), Wn(), delete window.smartcutCheckout;
    }), t({
      init: Ve,
      getAvailablePricingOptions: vi,
      getExtrasPrice: bi,
      formatPrice: D.formatPrice,
      findExtrasPrice: D.findExtrasPrice,
      inputShapes: u.inputShapes,
      initExtrasOptions: yi,
      createInputShape: ii
    }), (f, p) => {
      var I, F, X, fe, E;
      const b = Bt("font-awesome-icon");
      return y(), C(Se, null, [
        we(k(s), {
          content: k(m).content,
          type: k(m).type,
          show: k(m).show,
          "reference-el": k(m).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        k(le) === "development" && vu ? (y(), C("div", Ja, [
          p[5] || (p[5] = A("div", null, "Developer information", -1)),
          A("div", null, ie((I = k(u).inputShapes[0]) == null ? void 0 : I.banding), 1)
        ])) : H("", !0),
        Ht.value && ((F = Le.value) != null && F.machining) ? (y(), ge(k(r), {
          key: 1,
          shape: Le.value,
          "onUpdate:shape": p[0] || (p[0] = (j) => Le.value = j),
          translate: !0,
          options: ze,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": bi,
          "get-available-pricing-options": vi,
          "format-price": i.formatPrice,
          onClose: xt
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : H("", !0),
        it.value ? H("", !0) : (y(), C("div", Qa, [
          we(Rs, {
            size: 50,
            "show-number": !1
          })
        ])),
        it.value ? (y(), C("div", {
          key: 3,
          id: "smartcut-checkout",
          class: xe({ fullscreen: wt.value })
        }, [
          bt.value && !i.readonly ? (y(), C("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: p[1] || (p[1] = (j) => An())
          }, [
            we(b, { icon: ["fasr", "expand"] }),
            Vt(" " + ie(k(Ie)(k(a)("full_screen"))), 1)
          ])) : H("", !0),
          (fe = (X = $.value) == null ? void 0 : X.api) != null && fe.whiteLabel ? H("", !0) : (y(), C("div", {
            key: 1,
            id: "credit",
            style: ke(W.value)
          }, [
            A("a", {
              title: "SmartCut | Cut list optimization software",
              style: ke(ae.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, ie(k(Pr)(k(a)("powered_by"))), 5)
          ], 4)),
          A("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: ke({ "grid-template-columns": P.value })
          }, [
            k(u).inputShapes.value.length ? (y(), C("div", eu, [
              p[6] || (p[6] = A("div", { class: "cell id" }, null, -1)),
              (y(!0), C(Se, null, Te(St.value, (j) => (y(), C("div", {
                key: j.id,
                class: xe(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(j.id) || j.type === "checkbox" }])
              }, ie(k(Ie)(k(a)(j.label))), 3))), 128)),
              k(le) === "development" ? (y(), C("div", tu, " Info ")) : H("", !0),
              k(u).inputShapes.value.length > 1 ? (y(), C("div", iu)) : H("", !0)
            ])) : H("", !0),
            (y(!0), C(Se, null, Te(k(u).inputShapes.value, (j, re) => (y(), C("div", {
              key: re,
              class: "row inputs"
            }, [
              A("div", su, [
                A("div", {
                  class: "id",
                  style: ke({
                    background: M.colors.partA,
                    color: M.colors.text
                  })
                }, ie(re + 1), 5)
              ]),
              (y(!0), C(Se, null, Te(St.value, (N) => (y(), C("div", {
                key: N.fieldMap,
                class: xe(["cell", [`${N.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(N.id) || N.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(N.id) ? N.id === "orientationLock" ? (y(), ge(wl, {
                  key: 1,
                  id: "orientation-" + re,
                  rectangle: j,
                  disabled: i.readonly,
                  "stock-grain": k(v)(j),
                  "button-background": M.colors.button,
                  "icon-color": M.colors.buttonText,
                  "orientation-model": M.orientationModel,
                  onUpdateOrientation: (Xe) => Ge(j, Xe)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : N.id === "banding" ? (y(), ge(kl, {
                  key: 2,
                  id: "banding-" + re,
                  "input-shape": j,
                  disabled: i.readonly,
                  "stock-grain": k(v)(j),
                  open: qe.banding === re,
                  "orientation-model": M.orientationModel,
                  onClicked: (Xe) => Si("banding", j)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : N.id === "finish" ? (y(), ge(Zl, {
                  key: 3,
                  id: "finish-" + re,
                  "input-shape": j,
                  disabled: i.readonly,
                  open: qe.finish === re,
                  onClicked: (Xe) => Si("finish", j)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : N.fieldMap === "machining" && bt.value ? (y(), ge(ta, {
                  key: 4,
                  id: "machining-" + re,
                  disabled: i.readonly,
                  "input-shape": j,
                  onOpen: (Xe) => ue(j)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : N.fieldMap === "imageUpload" ? (y(), C("button", {
                  key: 5,
                  id: "image-upload-" + re,
                  type: "button",
                  disabled: i.readonly,
                  class: xe({ selected: qe.info === re }),
                  onClick: (Xe) => Si("imageUpload", j)
                }, [
                  we(b, { icon: ["fass", "image"] })
                ], 10, nu)) : H("", !0) : (y(), ge(gt, {
                  key: 0,
                  id: N.id + "-" + re,
                  focus: !i.readonly && M.enable.focus && re === k(u).inputShapes.value.length - 1 && N.id === "l",
                  issue: k(Ls)(j, [N.fieldMap]),
                  warning: k(Ls)(j, [N.fieldMap], !0),
                  type: N.type,
                  output: N.output,
                  label: N != null && N.label ? k(Ie)(k(a)(N.label)) : null,
                  placeholder: N != null && N.placeholder ? k(Ie)(k(a)(N.placeholder)) : null,
                  "enable-label": !1,
                  "number-format": M.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (N == null ? void 0 : N.required) ?? !1,
                  "allow-zero": (N == null ? void 0 : N.allowZero) ?? !0,
                  options: N.id === "t" ? In(j) : N == null ? void 0 : N.options,
                  "true-value": N == null ? void 0 : N.trueValue,
                  "false-value": N == null ? void 0 : N.falseValue,
                  default: N == null ? void 0 : N.default,
                  min: typeof (N == null ? void 0 : N.min) == "number" ? N.min : null,
                  max: typeof (N == null ? void 0 : N.max) == "number" ? N.max : null,
                  custom: N == null ? void 0 : N.custom,
                  value: k(Rt)(j, N == null ? void 0 : N.fieldMap),
                  text: {
                    delete: k(jt)(k(a)("delete")),
                    select: k(jt)(k(a)("select"))
                  },
                  onValidation: He,
                  "onUpdate:value": (Xe) => {
                    N.fieldMap && k(Ho)(j, N.fieldMap, Xe);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onUpdate:value"]))
              ], 2))), 128)),
              k(le) === "development" ? (y(), C("div", ru, [
                A("button", {
                  type: "button",
                  class: xe({ selected: qe.info === re }),
                  onClick: (N) => Si("info", j)
                }, " i ", 10, ou)
              ])) : H("", !0),
              k(u).inputShapes.value.length > 1 ? (y(), C("div", lu, [
                A("button", {
                  type: "button",
                  disabled: i.readonly,
                  class: "delete",
                  "aria-label": k(Ie)(k(a)("action_item", { a: "remove", i: "part" })),
                  onClick: (N) => _n(re)
                }, [
                  we(b, { icon: ["fass", "trash"] })
                ], 8, au)
              ])) : H("", !0),
              we(k(n), {
                item: j,
                "num-columns": kt.value
              }, null, 8, ["item", "num-columns"]),
              qe.banding === re && be.options.length > 0 ? (y(), ge(Qi, {
                key: 2,
                shape: j,
                "shape-index": re,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": be.keys,
                "all-options": be.options,
                pricing: be.pricing,
                labels: be.labels,
                "user-friendly-field-map": k(Me),
                "part-columns": kt.value,
                "get-price": bi,
                "format-price": i.formatPrice,
                "orientation-model": M.orientationModel,
                "get-available-pricing-options": vi,
                onUpdateAll: ys,
                onSet: ms
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : H("", !0),
              qe.finish === re && De.options.length > 0 ? (y(), ge(Qi, {
                key: 3,
                shape: j,
                "shape-index": re,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": De.keys,
                "all-options": De.options,
                pricing: De.pricing,
                labels: De.labels,
                "user-friendly-field-map": k(Me),
                "part-columns": kt.value,
                "get-price": bi,
                "format-price": i.formatPrice,
                "orientation-model": M.orientationModel,
                "get-available-pricing-options": vi,
                onUpdateAll: ys,
                onSet: ms
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : H("", !0),
              qe.info === re ? (y(), C("div", {
                key: 4,
                id: "shape-info",
                style: ke({ "grid-column-end": "span " + kt.value })
              }, [
                we(k(l), {
                  data: [j == null ? void 0 : j.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : H("", !0),
              qe.imageUpload === re ? (y(), ge(ua, {
                key: 5,
                prefix: (re + 1).toString(),
                "unique-id": k(me),
                "shape-id": j.listId,
                style: ke({ "grid-column-end": "span " + kt.value }),
                images: he.value,
                onUpdate: Mn,
                onRemove: Fn
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : H("", !0)
            ]))), 128))
          ], 4),
          A("div", uu, [
            i.readonly ? H("", !0) : (y(), C("button", {
              key: 0,
              type: "button",
              "aria-label": k(a)("action_item", { a: "add", i: "part" }),
              style: ke({ background: M.colors.button, color: M.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: p[2] || (p[2] = (j) => wi(1))
            }, [
              we(b, { icon: ["fasr", "plus-large"] }),
              Vt(" " + ie(k(Ie)(k(a)("action_item", { a: k(a)("add"), i: k(a)("part") }))), 1)
            ], 12, cu)),
            A("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": k(Ie)(k(a)("calculate")),
              style: ke({
                background: M.colors.button,
                color: M.colors.buttonText
              }),
              disabled: !((E = k(u).inputStock.value) != null && E.length) || O.value,
              onClick: p[3] || (p[3] = (j) => Gn())
            }, [
              we(b, { icon: ["fass", "calculator"] }),
              Vt(ie(k(Ie)(k(a)("calculate"))), 1)
            ], 12, hu),
            i.readonly ? H("", !0) : (y(), C("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": k(Ie)(k(a)("clear")),
              onClick: p[4] || (p[4] = (j) => Bn())
            }, [
              we(b, { icon: ["fass", "trash"] })
            ], 8, du)),
            A("div", fu, ie(k(h)) + ie(M != null && M.maxParts ? "/" + M.maxParts : ""), 1)
          ]),
          st.value && !i.readonly ? (y(), ge(k(o), {
            key: 2,
            ref: "import",
            "number-format": M.numberFormat,
            "custom-fields": Nt.value,
            "banding-options": be.options,
            "banding-labels": be.labels,
            "finish-options": De.options,
            "finish-labels": De.labels,
            onImport: Nn
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : H("", !0),
          Qt.value ? (y(), C("div", pu, [
            Pe.value ? (y(), C("div", gu, ie(Pe.value), 1)) : H("", !0),
            A("pre", mu, ie(ht.value), 1)
          ])) : H("", !0),
          (M.enable.diagram ? O.value && !k(oe).complete : O.value || k(oe).complete) ? (y(), C("div", yu, [
            we(Rs, {
              size: 50,
              number: k(oe).shapeCount,
              complete: k(oe).complete,
              "show-number": M.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : H("", !0),
          es(we(Za, {
            "element-id": "diagram",
            "number-format": M.numberFormat,
            "decimal-places": M.decimalPlaces,
            colors: M.colors
          }, null, 8, ["number-format", "decimal-places", "colors"]), [
            [ts, M.enable.diagram && k(oe).complete]
          ]),
          M.enable.diagram && k(_).length > 1 && se.value > 0 && k(oe).complete ? (y(), ge(ul, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": k(K),
            "stock-list": k(_),
            onShowStock: k(Q)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : H("", !0)
        ], 2)) : H("", !0)
      ], 64);
    };
  }
}), Bc = /* @__PURE__ */ Jt(bu, [["__scopeId", "data-v-3087fda1"]]), wu = {
  name: "ObjectViewer",
  props: {
    data: {
      type: Array,
      required: !0
    },
    paths: {
      type: Array,
      required: !0
    }
  },
  data() {
    return {
      expanded: []
    };
  },
  created() {
    this.data.forEach((i, t) => {
      this.expanded[t] = !0;
    });
  },
  methods: {
    toggle(i) {
      this.expanded[i] = !this.expanded[i];
    },
    getValueType(i) {
      return i === null ? "null" : Array.isArray(i) ? "array" : typeof i;
    },
    formatValue(i) {
      return i === null ? "null" : i === void 0 ? "undefined" : typeof i == "boolean" ? i.toString() : typeof i != "object" ? typeof i == "string" ? `'${i}'` : String(i) : Array.isArray(i) ? `[ ${i.map((s) => typeof s == "object" && s !== null ? `{ ${Object.entries(s).map(([r, o]) => `${r}: ${typeof o == "string" ? `'${o}'` : o}`).join(", ")} }` : typeof s == "string" ? `'${s}'` : String(s)).join(", ")} ]` : `{ ${Object.entries(i).map(([e, s]) => Array.isArray(s) ? `${e}: ${this.formatValue(s)}` : `${e}: ${typeof s == "string" ? `'${s}'` : s}`).join(", ")} }`;
    }
  }
}, Su = { class: "smartcut-object-viewer" }, ku = ["onClick"], xu = { class: "toggle-icon" }, Cu = { class: "path-label" }, $u = {
  key: 0,
  class: "object-properties"
}, Pu = { class: "key" };
function Lu(i, t, e, s, n, r) {
  return y(), C("div", Su, [
    (y(!0), C(Se, null, Te(e.data, (o, l) => (y(), C("div", {
      key: l,
      class: "array-item"
    }, [
      A("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        A("div", xu, ie(n.expanded[l] ? "▼" : "▶"), 1),
        A("div", Cu, ie(e.paths[l] || l), 1)
      ], 8, ku),
      n.expanded[l] ? (y(), C("div", $u, [
        (y(!0), C(Se, null, Te(o, (a, u) => (y(), C("div", {
          key: u,
          class: "property-item"
        }, [
          A("div", Pu, ie(u) + ": ", 1),
          A("div", {
            class: xe(["value", r.getValueType(a)])
          }, ie(r.formatValue(a)), 3)
        ]))), 128))
      ])) : H("", !0)
    ]))), 128))
  ]);
}
const Iu = /* @__PURE__ */ Jt(wu, [["render", Lu]]), Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Iu }, Symbol.toStringTag, { value: "Module" })), Tu = ["data-placement"], Ou = /* @__PURE__ */ Oe({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = B(null), s = B(null), n = ee(() => ({
      getBoundingClientRect: () => {
        var v;
        return ((v = t.referenceEl) == null ? void 0 : v.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      Sr(8),
      kr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      xr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      tr({ element: s })
    ], { floatingStyles: o, middlewareData: l, placement: a } = Qn(
      n,
      e,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (v, w, d) => wr(
          v,
          w,
          d,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), u = ee(() => ({
      position: o.value.position,
      top: o.value.top,
      left: o.value.left,
      transform: o.value.transform,
      zIndex: "1000"
    })), h = ee(() => {
      if (!l.value.arrow) return {};
      const { x: v, y: w } = l.value.arrow, d = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: v != null ? `${v}px` : void 0,
        top: w != null ? `${w}px` : void 0,
        [d]: "-4px"
      };
    });
    return (v, w) => (y(), ge(Xs, { to: "body" }, [
      we(er, { name: "fade" }, {
        default: ss(() => [
          v.show && v.referenceEl ? (y(), C("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: xe(["tooltip", v.type]),
            style: ke(u.value),
            "data-placement": k(a)
          }, [
            Vt(ie(v.content) + " ", 1),
            A("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: ke(h.value)
            }, null, 4)
          ], 14, Tu)) : H("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ou }, Symbol.toStringTag, { value: "Module" })), Du = /* @__PURE__ */ Oe({
  __name: "InputIssues",
  props: {
    item: {
      type: Object,
      required: !0
    },
    numColumns: {
      type: Number,
      required: !0
    }
  },
  setup(i) {
    const t = i;
    return (e, s) => {
      var n, r, o, l;
      return y(), C(Se, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (y(), C("div", {
          key: 0,
          class: "group issues",
          style: ke({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          A("pre", null, ie(t.item.issues.filter((a) => a.type === "error").map((a) => k(Ie)(a.message)).flat().join(`
`)), 1)
        ], 4)) : H("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (y(), C("div", {
          key: 1,
          class: "group warnings",
          style: ke({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          A("pre", null, ie(t.item.issues.filter((a) => a.type === "warning").map((a) => k(Ie)(a.message)).flat().join(`
`)), 1)
        ], 4)) : H("", !0)
      ], 64);
    };
  }
}), Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Du }, Symbol.toStringTag, { value: "Module" })), et = {
  precisionFixed: cr,
  format: hr,
  select: Re,
  selectAll: en,
  scaleLinear: tt,
  scaleSequential: li,
  axisTop: Js,
  axisBottom: Ai,
  axisRight: Qs,
  axisLeft: Di,
  symbol: dr,
  path: fr,
  arc: pr,
  symbolTriangle: gr,
  symbolSquare: mr
};
class Ru {
  constructor({
    HTMLElement: t,
    vueComponent: e,
    shape: s,
    numberFormat: n = "decimal",
    decimalPlaces: r = 2
  }) {
    c(this, "HTMLElement");
    c(this, "HTMLElementWidth");
    c(this, "el");
    c(this, "numberFormat");
    c(this, "decimalPlaces");
    c(this, "vueComponent");
    c(this, "shape");
    c(this, "h");
    c(this, "w");
    c(this, "shapeL");
    c(this, "shapeW");
    c(this, "padding", 40);
    c(this, "xScale", et.scaleLinear());
    c(this, "yScale", et.scaleLinear());
    c(this, "yScaleFlipped", et.scaleLinear());
    c(this, "measurementScale", et.scaleLinear());
    c(this, "xAxis");
    c(this, "yAxis");
    c(this, "formatDp");
    c(this, "svgCanvas");
    c(this, "currentSide", 0);
    c(this, "bandingStrokeWidth", 4);
    c(this, "shapeGroup");
    c(this, "bandingGroup");
    c(this, "holeGroup");
    c(this, "hingeHoleGroup");
    c(this, "cornerGroup");
    c(this, "legendGroup");
    c(this, "pointGroup");
    c(this, "loaded", !1);
    this.HTMLElement = t, this.numberFormat = n, this.decimalPlaces = r, this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.vueComponent = e, this.shape = s, this.w = 0, this.h = 0;
  }
  init() {
    if (!this.loaded) {
      if (!this.HTMLElement || !this.shape || !this.shape.l || !this.shape.w) return !1;
      if (this.el = et.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = et.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
        const t = this.el.append("svg").attr("class", "vis");
        if (t === null) return;
        this.svgCanvas = t;
      }
      this.loaded = !0;
    }
  }
  create() {
    if (!this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h || this.w - this.padding * 2 < 0 || this.h - this.padding * 2 < 0)
      return !1;
    this.svgCanvas.append("defs").append("pattern").attr("patternUnits", "userSpaceOnUse").attr("patternTransform", "rotate(45)").attr("id", "stripes").attr("width", 6).attr("height", 6).append("line").attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 6).attr("stroke", "#a1a1a1").attr("stroke-width", "2"), this.shapeGroup = this.svgCanvas.append("g").attr("class", "shape-group"), this.pointGroup = this.svgCanvas.append("g").attr("class", "point-group"), this.bandingGroup = this.svgCanvas.append("g").attr("class", "banding-group"), this.holeGroup = this.svgCanvas.append("g").attr("class", "hole-group"), this.hingeHoleGroup = this.svgCanvas.append("g").attr("class", "hinge-hole-group"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createBanding(), this.xAxis = this.svgCanvas.append("g").attr("transform", `translate(0, ${this.padding})`).attr("class", "axis x"), this.xAxis.call(
      et.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      et.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = et.path(), e = this.shape.machining.corners, s = [], n = [];
    [0, 1, 2, 3].forEach((o) => {
      const l = e[o];
      l && l.type ? (s.push(l.size ? T({ v: l.size ?? 0, o: this }) : 0), n.push(l.type)) : (s.push(0), n.push(null));
    });
    const r = (o, l, a, u, h) => {
      n[o] === "radius" ? t.arcTo(
        this.xScale(l),
        this.getYScale()(a),
        this.xScale(u),
        this.getYScale()(h),
        this.measurementScale(s[o])
      ) : n[o] === "bevel" ? t.lineTo(this.xScale(u), this.getYScale()(h)) : (t.lineTo(this.xScale(l), this.getYScale()(a)), t.lineTo(this.xScale(u), this.getYScale()(h)));
    };
    t.moveTo(this.xScale(0), this.getYScale()(s[0])), r(0, 0, 0, s[0], 0), (n[0] === "bevel" || n[1] === "bevel") && t.lineTo(this.xScale(this.shapeL - s[1]), this.getYScale()(0)), r(1, this.shapeL, 0, this.shapeL, s[1]), (n[1] === "bevel" || n[2] === "bevel") && t.lineTo(
      this.xScale(this.shapeL),
      this.getYScale()(this.shapeW - s[2])
    ), r(
      2,
      this.shapeL,
      this.shapeW,
      this.shapeL - s[2],
      this.shapeW
    ), (n[2] === "bevel" || n[3] === "bevel") && t.lineTo(this.xScale(s[3]), this.getYScale()(this.shapeW)), r(3, 0, this.shapeW, 0, this.shapeW - s[3]), t.closePath(), this.shapeGroup.append("path").attr("id", "shape").attr("d", t.toString());
  }
  createLegend() {
    this.legendGroup.selectAll("*").remove();
    let t;
    t = this.legendGroup.append("text").text("L1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("L2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("x", this.xScale(this.shapeL / 2)).attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), this.legendGroup.append("text").text("W1").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("y", this.yScale(this.shapeW / 2)).attr("dx", "5px"), this.legendGroup.append("text").text("W2").attr("class", "side").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.yScale(this.shapeW / 2)), t = this.legendGroup.append("text").text("A").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("B").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(0)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 1 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("C").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "end").attr("x", this.xScale(this.shapeL)).attr("dx", "-5px").attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    ), t = this.legendGroup.append("text").text("D").attr("class", "corner").attr("dominant-baseline", "middle").attr("text-anchor", "start").attr("x", this.xScale(0)).attr("dx", "5px").attr("y", this.getYScale()(this.shapeW)), t.attr(
      "dy",
      t.node().getBBox().height / 2 * (this.currentSide === 0 ? 2 : -1.5) + "px"
    );
  }
  createHoles() {
    this.svgCanvas.selectAll(".hole-group > *").remove(), this.holeGroup.selectAll("g").data(
      this.shape.machining.holes.filter((t) => t.shouldShow(this.shape, this.currentSide))
    ).join("circle").attr("class", "hole").classed("invalid", (t) => t.valid === !1).classed("partial", (t) => !t.isThroughShape(this.shape)).attr("cx", (t) => this.xScale(t.x)).attr("cy", (t) => {
      const e = t.getYDrawPosition(this.shape, this.currentSide);
      return this.yScale(e);
    }).attr("r", (t) => this.measurementScale(t.diameter / 2));
  }
  createHingeHoles() {
    this.svgCanvas.selectAll(".hinge-hole-group > *").remove();
    const e = this.shape.machining.getAllHingeHoles(this.shape).filter((s) => s.shouldShow(this.shape, this.currentSide));
    this.hingeHoleGroup.selectAll("g").data(e).join("circle").attr("class", "hole").classed("invalid", (s) => s.valid === !1).classed("partial", (s) => !s.isThroughShape(this.shape)).attr("cx", (s) => this.xScale(s.x)).attr("cy", (s) => this.yScale(s.getYDrawPosition(this.shape, this.currentSide))).attr("r", (s) => this.measurementScale(s.diameter / 2));
  }
  createBanding() {
    this.svgCanvas.selectAll(".banding-group > *").remove();
    const t = this.shape.banding, e = -1, s = [];
    for (const r of mt)
      if (t[r])
        switch (r) {
          case "x1":
            s.push({
              x1: this.padding - e,
              x2: this.padding - e,
              y1: this.getYScale()(this.shape.machining.corners[0].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[3].size ?? 0)
              )
            });
            break;
          case "x2":
            s.push({
              x1: this.w - this.padding + e,
              x2: this.w - this.padding + e,
              y1: this.getYScale()(this.shape.machining.corners[1].size ?? 0),
              y2: this.getYScale()(
                this.shapeW - (this.shape.machining.corners[2].size ?? 0)
              )
            });
            break;
          case "y1":
            s.push({
              x1: this.padding + this.getCornerBandingSize(0),
              x2: this.w - this.padding - this.getCornerBandingSize(1),
              y1: this.getYScale()(0) + (this.currentSide === 0 ? e : 1),
              y2: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
            });
            break;
          case "y2":
            s.push({
              x1: this.padding + this.getCornerBandingSize(3),
              x2: this.w - this.padding - this.getCornerBandingSize(2),
              y1: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : e),
              y2: this.getYScale()(this.shapeW) + (this.currentSide === 0 ? 1 : e)
            });
            break;
        }
    this.bandingGroup.selectAll("g").data(s).join("line").attr("class", "banding").attr("x1", (r) => r.x1).attr("x2", (r) => r.x2).attr("y1", (r) => r.y1).attr("y2", (r) => r.y2).attr("stroke-width", this.bandingStrokeWidth);
    const n = et.path();
    this.shape.machining.corners.forEach((r, o) => {
      if (!r.type) return;
      let l, a, u;
      switch (o) {
        case 0:
          if (!x(t.a) || t.a === !1) return;
          l = {
            x: this.xScale(0) - e,
            y: this.getYScale()(T({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(T({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!x(t.b) || t.b === !1) return;
          l = {
            x: this.xScale(this.shapeL - T({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, a = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(T({ v: r.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!x(t.c) || t.c === !1) return;
          l = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - T({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(this.shapeL - T({ v: r.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!x(t.d) || t.d === !1) return;
          l = {
            x: this.xScale(T({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - T({ v: r.size ?? 0, o: this })) + e
          };
          break;
        default:
          return;
      }
      if (n.moveTo(l.x, l.y), r.type === "radius")
        switch (n.arcTo(
          a.x,
          a.y,
          u.x,
          u.y,
          this.measurementScale(r.size ?? 0)
        ), o) {
          case 0:
          case 2:
            n.lineTo(u.x + e, u.y);
            break;
          case 1:
          case 3:
            n.lineTo(u.x, u.y - (this.currentSide === 0 ? e : -1));
            break;
        }
      else r.type === "bevel" && n.lineTo(u.x, u.y);
      this.bandingGroup.append("path").attr("class", () => `banding corner ${["a", "b", "c", "d"][o]}`).attr("stroke-width", this.bandingStrokeWidth).attr("d", n.toString());
    });
  }
  getYScale() {
    return this.currentSide === 0 ? this.yScale : this.yScaleFlipped;
  }
  reset() {
    this.svgCanvas && this.svgCanvas.selectAll("*").remove();
  }
  flip() {
    this.currentSide = this.currentSide === 0 ? 1 : 0, this.yAxis.call(
      et.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.createShape(), this.createHoles(), this.createHingeHoles(), this.createLegend(), this.createBanding();
  }
  getCornerBandingSize(t) {
    return this.shape.machining.corners[t].type ? this.measurementScale(this.shape.machining.corners[t].size ?? 0) : 0;
  }
  updateSize() {
    if (this.vueComponent && "suppressResizeObserver" in this.vueComponent && (this.vueComponent.suppressResizeObserver = !0), this.HTMLElementWidth = this.HTMLElement.offsetWidth, this.HTMLElementWidth === 0) return;
    this.reset();
    let t = this.shape.getShortSide() / this.shape.getLongSide();
    if (this.w = this.HTMLElementWidth, this.w - this.padding * 2 < 0) return;
    let e = window.innerHeight - this.padding * 2 - 20;
    e > 600 && (e = 600), this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding]), t > 0.3 ? this.h = this.xScale(this.shape.getShortSide()) + this.padding : (t = 0.3, this.h = this.w * t), this.h > e && (this.h = e, this.w = this.h / t, this.xScale.domain([0, this.shapeL]).range([this.padding, this.w - this.padding])), this.yScale.domain([this.shapeW, 0]).range([this.padding, this.h - this.padding]), this.yScaleFlipped.domain([0, this.shapeW]).range([this.padding, this.h - this.padding]), this.measurementScale.domain([0, this.shapeL]).range([0, this.w - this.padding * 2]), this.HTMLElement.style.height = this.h + "px", this.create();
  }
}
function Mu(i) {
  var t;
  if (!(i != null && i[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[i[0]]) < "u")
    return Yt(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return Yt(this, i);
}
const Fu = { id: "machining" }, _u = {
  key: 0,
  class: "debug"
}, qu = { class: "inputs" }, Bu = {
  key: 0,
  class: "shape-name"
}, Gu = { class: "shape-dimensions" }, Hu = {
  key: 1,
  class: "sides-wrapper"
}, Nu = { class: "menu" }, Wu = { class: "button-wrapper" }, Uu = { class: "row table-heading" }, ju = {
  key: 0,
  class: "id"
}, zu = {
  key: 0,
  class: "cell"
}, Vu = { class: "id" }, Yu = ["onClick"], Xu = { class: "remove" }, Ku = { key: 5 }, Zu = !1, Ju = /* @__PURE__ */ Oe({
  __name: "Machining",
  props: /* @__PURE__ */ xs({
    env: { default: "production" },
    translate: { type: Boolean, default: !1 },
    findExtrasPrice: { type: Function, default: () => null },
    getExtrasPrice: { type: Function, default: () => null },
    getAvailablePricingOptions: { type: Function, default: () => [] },
    formatPrice: { type: Function, default: () => "" },
    options: { default: () => ({
      numberFormat: "decimal",
      decimalPlaces: 2,
      fractionRoundTo: 0,
      faces: { enabled: !0 },
      holes: {
        enabled: !0,
        defaultDiameter: 10,
        diameters: [],
        minDiameter: 0,
        maxDiameter: 100,
        enableDepth: !0,
        depths: [],
        defaultDepth: 0,
        minDepth: 0,
        maxDepth: 100
      },
      hingeHoles: {
        enabled: !0,
        minimumHoleDistance: 0,
        defaultDistanceFromEdge: 22,
        defaultOuterSpacing: 10,
        defaultHingeLength: 50
      },
      shelfHoles: {
        enabled: !1,
        diameters: [],
        depths: []
      },
      corners: {
        enabled: !0,
        minValue: 0,
        types: ["bevel", "radius"]
      },
      banding: {
        enabled: !1,
        options: [[]],
        labels: [],
        pricing: {},
        enableCorners: !1
      }
    }) }
  }, {
    shape: {
      required: !0
    },
    shapeModifiers: {}
  }),
  emits: /* @__PURE__ */ xs(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var qe, Be, Fe, Et, Ht, ze, be, De, ei, Nt, mi, St, kt;
    const e = It(() => Promise.resolve().then(() => Vi)), s = i, n = t, r = ee(() => os(O.value)), o = ee(() => Mu.call({ options: s.options }, ["units"])), l = ee(() => {
      var W;
      if (!((W = h.value) != null && W.length)) return 0;
      if (M.value === "banding") return 1;
      let P = Object.values(u.value).filter((ae) => ae.enabled).length;
      return P += 2, P;
    }), a = ee(() => {
      if (!h.value.length || M.value === "banding") return;
      const P = {
        id: "34px",
        del: "30px"
      }, W = [];
      return h.value.forEach((ae) => {
        const ye = u.value[ae];
        ye.enabled && W.push(ye.w ?? "1fr");
      }), W.unshift(P.id), W.push(P.del), W.join(" ");
    }), u = ee(() => !M.value || M.value === "banding" ? null : Qt[M.value]), h = ee(() => !M.value || M.value === "banding" ? [] : Object.keys(Qt[M.value]).filter((P) => Qt[M.value][P].enabled)), v = ee(() => M.value ? K() : []), w = ee(() => {
      var W, ae, ye, Ve;
      const P = ((Ve = (ye = (ae = (W = O.value) == null ? void 0 : W.machining) == null ? void 0 : ae.corners) == null ? void 0 : ye.map((Ge) => {
        var Ye;
        return (Ye = Ge == null ? void 0 : Ge.isPresent) != null && Ye.call(Ge) ? Ge.getCorner() : null;
      })) == null ? void 0 : Ve.filter((Ge) => Ge)) ?? [];
      return [...mt, ...P];
    }), d = (P = !0) => {
      P ? wt.value = P : Ke(() => wt.value = !1);
    }, g = () => {
      z(), D(), R(), le();
    }, S = (P, W, ae) => {
      Ke(() => {
        P[W] = ae;
      });
    }, _ = (P) => {
      if (M.value === "corners")
        switch (P) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return P;
        }
      return P + 1;
    }, Y = () => M.value !== "banding", V = (P, W = null) => {
      if (!(P != null && P.length)) return [];
      let ae = "None";
      W === "depth" && (ae = "Through");
      const ye = [{ label: ae, value: null }];
      return P.forEach((Ve) => {
        const Ge = Ve.toString().charAt(0).toUpperCase() + Ve.toString().slice(1);
        ye.push({ label: Ge, value: Ve });
      }), ye;
    }, K = () => {
      if (!M.value) return [];
      if (M.value === "banding") return [];
      const P = O.value.machining[M.value];
      return Array.isArray(P) ? P : [P];
    };
    let Q = null;
    const oe = () => {
      O.value && (Q = new Ru({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: O.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), Q.init(), bt.value = !0, setTimeout(() => {
        Q.updateSize();
      }, 100));
    }, U = () => {
      Ze.value = Ze.value === 0 ? 1 : 0, Q.flip();
    }, J = () => {
      switch (M.value) {
        case "holes":
          m();
          break;
        case "hingeHoles":
          L();
          break;
      }
    }, m = () => {
      O.value.machining.createHole(
        T({ v: O.value.getLongSide() }) / 2,
        T({ v: O.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        Ze.value
      ), Q.createHoles();
    }, L = () => {
      O.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: Ze.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), Q.createHingeHoles();
    }, z = () => {
      O.value.machining.holes.length = 0;
    }, D = () => {
      O.value.machining.hingeHoles.length = 0;
    }, R = () => {
      O.value.machining.corners.forEach((P) => {
        P.size = null, P.type = null;
      }), O.value.banding.a = !1, O.value.banding.b = !1, O.value.banding.c = !1, O.value.banding.d = !1;
    }, le = () => {
      O.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, de = (P) => {
      switch (M.value) {
        case "holes":
          return O.value.machining.holes.splice(P, 1);
        case "hingeHoles":
          return O.value.machining.hingeHoles.splice(P, 1);
        case "corners":
          O.value.machining.corners[P].size = null, O.value.machining.corners[P].type = null;
          return;
      }
    }, $ = () => {
      switch (M.value) {
        case "holes":
          return z();
        case "hingeHoles":
          return D();
        case "corners":
          return R();
      }
    }, q = () => {
      var P;
      if (Le.value = [], !!s.options.banding.enabled) {
        d();
        for (const W in O.value.banding)
          O.value.banding[W] ? s.options.banding.enableTypes && ((P = s.options.banding.types) != null && P.length) && (O.value.banding[W] || Le.value.push({
            index: W,
            message: "Please select a type"
          })) : O.value.banding[W] = "";
        d(!1);
      }
    }, G = (P) => {
      const W = Le.value.filter((ae) => ae.index === P);
      return W.length ? W.map((ae) => ae.message) : [];
    }, te = (P) => {
      const W = Le.value.filter((ye) => ye.index === P && (ye == null ? void 0 : ye.fields)), ae = W.map((ye) => ye.fields).flat();
      return W.length ? ae : [];
    }, ne = (P, W) => {
      const ae = te(P);
      return ae != null && ae.length ? ae.includes(W) : !1;
    }, me = () => {
      n("close");
    }, he = (P) => P && typeof P.disabled == "function" ? P.disabled : !1, Ue = (P, W, ae, ye, Ve) => {
      ps(P, W, ae, ye, Ve, s.findExtrasPrice);
    }, it = (P, W, ae, ye) => {
      bn(
        P,
        W,
        ae,
        ye,
        [],
        s.findExtrasPrice
      );
    }, O = ir(i, "shape");
    if (!((qe = O.value) != null && qe.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const ut = B(null), se = B(null), st = B(!1), bt = B(!1), wt = B(!1), ct = B(!1), Ze = B(0), M = B(null), Ae = B(0), Le = B([]), Qt = dt({
      holes: {
        x: {
          enabled: !0,
          type: "unitDependent",
          label: "X position",
          required: !0
        },
        y: {
          enabled: !0,
          type: "unitDependent",
          label: "Y position",
          required: !0
        },
        diameter: {
          enabled: !0,
          type: (Be = s.options.holes.diameters) != null && Be.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (Fe = s.options.holes.diameters) != null && Fe.length ? "float" : void 0,
          options: (Et = s.options.holes.diameters) != null && Et.length ? V(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof O.value.t < "u" && T({ v: O.value.t }) > 0,
          //[]
          required: !1,
          type: (Ht = s.options.holes.depths) != null && Ht.length ? "select" : "unitDependent",
          output: (ze = s.options.holes.depths) != null && ze.length ? "float" : void 0,
          options: (be = s.options.holes.depths) != null && be.length ? V(s.options.holes.depths) : void 0
        },
        face: {
          required: !0,
          enabled: s.options.faces.enabled,
          type: "select",
          output: "integer",
          options: [
            {
              label: "A",
              value: 0
            },
            {
              label: "B",
              value: 1
            }
          ]
        }
      },
      hingeHoles: {
        position: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          min: 0
        },
        hingeLength: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: "Hinge length",
          min: 0
        },
        outerSpacing: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: "Outer spacing",
          min: 0
        },
        distanceFromEdge: {
          enabled: !0,
          required: !0,
          type: "unitDependent",
          label: "Distance from edge",
          min: 0
        },
        //[] separate option for hinges
        depth: {
          enabled: s.options.holes.enableDepth && typeof O.value.t < "u" && T({ v: O.value.t }) > 0,
          required: !1,
          type: (De = s.options.holes.depths) != null && De.length ? "select" : "unitDependent",
          output: (ei = s.options.holes.depths) != null && ei.length ? "float" : void 0,
          options: (Nt = s.options.holes.depths) != null && Nt.length ? V(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (mi = s.options.holes.diameters) != null && mi.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (St = s.options.holes.diameters) != null && St.length ? "float" : void 0,
          options: (kt = s.options.holes.diameters) != null && kt.length ? V(s.options.holes.diameters) : void 0
        },
        numHoles: {
          enabled: !0,
          required: !0,
          type: "integer",
          label: "Num holes",
          min: 2
        },
        face: {
          enabled: s.options.faces.enabled,
          type: "select",
          required: !0,
          output: "integer",
          options: [
            {
              label: "A",
              value: 0
            },
            {
              label: "B",
              value: 1
            }
          ]
        },
        edge: {
          enabled: !0,
          required: !0,
          type: "select",
          output: "string",
          options: [
            {
              label: "W1",
              value: "x1"
            },
            {
              label: "W2",
              value: "x2"
            },
            {
              label: "L1",
              value: "y1"
            },
            {
              label: "L2",
              value: "y2"
            }
          ]
        }
      },
      shelfHoles: {
        x: {
          enabled: !0,
          required: !0,
          type: "unitDependent"
        },
        y: {
          enabled: !0,
          required: !0,
          type: "unitDependent"
        },
        depth: {
          required: !1,
          enabled: !0,
          type: "unitDependent"
        }
      },
      corners: {
        type: {
          enabled: !0,
          required: !0,
          label: "Type",
          type: "select",
          output: "string",
          options: V(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: "Size",
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? T({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? T({ v: s.options.corners.maxValue, o: s.options }) : T({ v: O.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), Pe = dt({
      holes: {
        diameter: {
          min: s.options.holes.minDiameter,
          max: s.options.holes.maxDiameter
        },
        depth: {
          min: s.options.holes.minDepth,
          max: s.options.holes.maxDepth
        }
      },
      hingeHoles: {
        holeDistance: {
          min: s.options.hingeHoles.minimumHoleDistance
        }
      },
      corners: {
        size: {
          min: s.options.corners.minValue,
          max: s.options.corners.maxValue
        }
      }
    }), ht = () => {
      var P;
      return !(!((P = O == null ? void 0 : O.value) != null && P.machining) || !st.value || wt.value);
    };
    return $e(() => {
      var P;
      return (P = O.value) == null ? void 0 : P.listId;
    }, () => {
      ht() && oe();
    }), $e(() => {
      var P;
      return (P = O.value) == null ? void 0 : P.id;
    }, () => {
      ht() && oe();
    }), $e(M, (P) => {
      if (ht()) {
        if (P === "banding") {
          d(), q(), d(!1);
          return;
        }
        if (!P) {
          Le.value = [];
          return;
        }
        d(), Le.value = O.value.machining.validate(
          O.value,
          P,
          Pe == null ? void 0 : Pe[P]
        ), P === "hingeHoles" && O.value.machining.hingeHoles.forEach((W, ae) => {
          Fi(W, Pe == null ? void 0 : Pe.holes, Le.value, ae);
        }), d(!1);
      }
    }, { deep: !0, immediate: !0 }), $e(() => {
      var P, W;
      return (W = (P = O == null ? void 0 : O.value) == null ? void 0 : P.machining) == null ? void 0 : W.holes;
    }, () => {
      ht() && (d(), Le.value = O.value.machining.validate(
        O.value,
        "holes",
        Pe == null ? void 0 : Pe.holes
      ), Q.createHoles(), d(!1));
    }, { deep: !0, immediate: !0 }), $e(() => {
      var P, W;
      return (W = (P = O == null ? void 0 : O.value) == null ? void 0 : P.machining) == null ? void 0 : W.hingeHoles;
    }, () => {
      ht() && (d(), O.value.machining.updateHingeHoles(O.value), Le.value = O.value.machining.validate(
        O.value,
        "hingeHoles",
        Pe == null ? void 0 : Pe.hingeHoles
      ), O.value.machining.hingeHoles.forEach((P, W) => {
        Fi(P, Pe == null ? void 0 : Pe.holes, Le.value, W);
      }), Q.createHingeHoles(), d(!1));
    }, { deep: !0, immediate: !0 }), $e(() => {
      var P, W;
      return (W = (P = O == null ? void 0 : O.value) == null ? void 0 : P.machining) == null ? void 0 : W.corners;
    }, () => {
      if (ht()) {
        d(), Le.value = O.value.machining.validate(
          O.value,
          "corners",
          Pe == null ? void 0 : Pe.corners
        ), O.value.machining.validate(O.value, "holes"), O.value.machining.validate(O.value, "hingeHoles"), Q.createShape(), Q.createHoles(), Q.createHingeHoles();
        for (const P of O.value.machining.corners)
          P.isPresent() || fs(O.value, "banding", P.getCorner(), !0);
        Q.createBanding(), d(!1);
      }
    }, { deep: !0, immediate: !0 }), $e(() => {
      var P;
      return (P = O == null ? void 0 : O.value) == null ? void 0 : P.banding;
    }, () => {
      ht() && (q(), Q.createBanding());
    }, { deep: !0, immediate: !0 }), at(() => {
      var W;
      if ((W = document.getElementById("machining")) == null || W.requestFullscreen(), !O.value || !O.value.l || !O.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      Ke(() => oe());
      const P = document.querySelector("#smartcut-app #machining .diagram");
      ut.value || (ut.value = new ResizeObserver((ae) => {
        clearTimeout(se.value ?? void 0), bt.value && (se.value = window.setTimeout(() => {
          if (ct.value) {
            ct.value = !1;
            return;
          }
          ae[0].contentRect.width !== Ae.value && (Ae.value = ae[0].contentRect.width, Ae.value && Q.updateSize());
        }, 10));
      }), ut.value.observe(P)), st.value = !0;
    }), (P, W) => {
      var ye, Ve, Ge, Ye, ti;
      const ae = Bt("font-awesome-icon");
      return y(), C("div", Fu, [
        P.env === "development" && Zu ? (y(), C("div", _u, [
          we(k(e), {
            data: [O.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : H("", !0),
        A("div", null, [
          A("div", qu, [
            A("button", {
              type: "button",
              class: "close",
              onClick: me
            }, [
              we(ae, { icon: ["fass", "xmark"] })
            ]),
            (ye = O.value) != null && ye.name ? (y(), C("div", Bu, ie(O.value.name), 1)) : H("", !0),
            A("div", Gu, ie((Ve = O.value) == null ? void 0 : Ve.l) + " x " + ie((Ge = O.value) == null ? void 0 : Ge.w) + " " + ie((Ye = O.value) != null && Ye.t ? "x " + ((ti = O.value) == null ? void 0 : ti.t) : null), 1),
            P.options.faces.enabled ? (y(), C("div", Hu, [
              A("div", {
                ref: "sides",
                class: xe(["sides", { flipped: Ze.value === 1 }]),
                onClick: U
              }, W[4] || (W[4] = [
                A("div", { class: "side-a" }, " A ", -1),
                A("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              W[5] || (W[5] = A("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : H("", !0),
            r.value ? (y(), C("button", {
              key: 2,
              onClick: g
            }, " Delete all machining ")) : H("", !0),
            A("div", Nu, [
              P.options.holes.enabled ? (y(), C("div", {
                key: 0,
                class: xe({ selected: M.value === "holes" }),
                onClick: W[0] || (W[0] = (He) => M.value = "holes")
              }, " Holes ", 2)) : H("", !0),
              P.options.hingeHoles.enabled ? (y(), C("div", {
                key: 1,
                class: xe({ selected: M.value === "hingeHoles" }),
                onClick: W[1] || (W[1] = (He) => M.value = "hingeHoles")
              }, " Hinge holes ", 2)) : H("", !0),
              P.options.corners.enabled ? (y(), C("div", {
                key: 2,
                class: xe({ selected: M.value === "corners" }),
                onClick: W[2] || (W[2] = (He) => M.value = "corners")
              }, " Corners ", 2)) : H("", !0),
              P.options.banding.enabled ? (y(), C("div", {
                key: 3,
                class: xe({ selected: M.value === "banding" }),
                onClick: W[3] || (W[3] = (He) => M.value = "banding")
              }, " Banding ", 2)) : H("", !0)
            ]),
            A("div", Wu, [
              M.value === "holes" || M.value === "hingeHoles" ? (y(), C("button", {
                key: 0,
                type: "button",
                onClick: J
              }, " Create ")) : H("", !0),
              M.value && M.value !== "banding" ? (y(), C("button", {
                key: 1,
                type: "button",
                onClick: $
              }, " Delete all ")) : H("", !0)
            ]),
            M.value === "banding" && O.value ? (y(), ge(Qi, {
              key: 3,
              shape: O.value,
              env: P.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": w.value,
              labels: P.options.banding.labels,
              "all-options": P.options.banding.options,
              pricing: P.options.banding.pricing,
              "user-friendly-field-map": k(Me),
              "part-columns": 1,
              translate: P.translate,
              "orientation-model": 0,
              "get-price": P.getExtrasPrice,
              "format-price": P.formatPrice,
              "get-available-pricing-options": P.getAvailablePricingOptions,
              onSet: Ue,
              onUpdateAll: it
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : H("", !0),
            M.value !== "banding" && v.value.length ? (y(), C("div", {
              key: 4,
              class: xe(["grid-table", M.value]),
              style: ke({ "grid-template-columns": a.value })
            }, [
              A("div", Uu, [
                Y() ? (y(), C("div", ju)) : H("", !0),
                (y(!0), C(Se, null, Te(u.value, (He, Qe, ue) => es((y(), C("div", {
                  key: ue,
                  class: "cell"
                }, ie(He.label ?? Qe), 1)), [
                  [ts, He.enabled]
                ])), 128)),
                W[6] || (W[6] = A("div", { class: "del" }, null, -1))
              ]),
              (y(!0), C(Se, null, Te(v.value, (He, Qe) => (y(), C("div", {
                key: Qe,
                class: "row"
              }, [
                Y() ? (y(), C("div", zu, [
                  A("div", Vu, ie(_(Qe)), 1)
                ])) : H("", !0),
                (y(!0), C(Se, null, Te(h.value, (ue, xt) => (y(), C("div", {
                  key: xt,
                  class: "cell"
                }, [
                  u.value[ue].type !== "select" && u.value[ue].type !== "checkbox" ? (y(), ge(gt, {
                    key: 0,
                    id: ue + "-" + xt,
                    warning: ne(Qe, ue),
                    type: u.value[ue].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: u.value[ue].label ?? ue,
                    disabled: he(u.value[ue]),
                    value: He[ue],
                    units: o.value,
                    output: u.value[ue].output,
                    "onUpdate:value": (Ct) => S(He, ue, Ct)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : u.value[ue].type === "checkbox" ? (y(), ge(gt, {
                    key: 1,
                    id: ue + "-" + xt,
                    type: "checkbox",
                    warning: ne(Qe, ue),
                    "enable-label": !1,
                    disabled: he(u.value[ue]),
                    value: He[ue],
                    output: u.value[ue].output,
                    "onUpdate:value": (Ct) => S(He, ue, Ct)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : u.value[ue].type === "select" ? (y(), ge(gt, {
                    key: 2,
                    id: ue + "-" + xt,
                    type: "select",
                    "enable-label": !1,
                    warning: ne(Qe, ue),
                    disabled: he(u.value[ue]),
                    value: He[ue],
                    options: u.value[ue].options,
                    output: u.value[ue].output,
                    "onUpdate:value": (Ct) => S(He, ue, Ct)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : H("", !0)
                ]))), 128)),
                A("div", {
                  class: "cell",
                  onClick: (ue) => de(Qe)
                }, [
                  A("div", Xu, [
                    we(ae, { icon: ["fass", "trash"] })
                  ])
                ], 8, Yu),
                (y(!0), C(Se, null, Te(G(Qe), (ue, xt) => (y(), C("div", {
                  key: xt,
                  class: "group validation",
                  style: ke({ "grid-column-end": "span " + l.value })
                }, ie(ue), 5))), 128))
              ]))), 128))
            ], 6)) : M.value !== "banding" ? (y(), C("div", Ku, " Please select from the menu above ")) : H("", !0)
          ]),
          A("div", {
            id: "machining-diagram",
            class: xe(["diagram", { flipped: Ze.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
}), Qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ju }, Symbol.toStringTag, { value: "Module" })), ec = {
  name: "Drop",
  props: {
    requiredType: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Drop file here"
    },
    thinking: {
      type: Boolean,
      default: !1
    },
    maxFiles: {
      type: Number,
      default: 1
    }
  },
  emits: ["drop"],
  data() {
    return {
      dropClass: null,
      events: ["dragenter", "dragover", "dragleave", "dragend", "drop"],
      loadingProgress: 0,
      files: sr([])
    };
  },
  mounted() {
    this.events.forEach((i) => {
      this.$el.addEventListener(i, this.eventHandler);
    });
  },
  unmounted() {
    this.events.forEach((i) => {
      this.$el.removeEventListener(i, this.eventHandler);
    });
  },
  methods: {
    readFileAsync(i) {
      return new Promise((t, e) => {
        const s = new FileReader();
        s.onloadend = () => {
          t(s.result);
        }, s.onerror = e, s.readAsText(i);
      });
    },
    async onDrop(i) {
      const t = [...i.dataTransfer.files];
      if (this.maxFiles && t.length > this.maxFiles) {
        alert(`You can only drop ${this.maxFiles} file${this.maxFiles > 1 ? "s" : ""} at a time`);
        return;
      }
      this.requiredType && (t.every((e) => e.type === this.requiredType) || alert("We did not detect a valid file type - this might be safe to ignore")), this.files.length = 0;
      for (let e = 0; e < t.length; e++) {
        const s = t[e];
        let n;
        try {
          n = await this.readFileAsync(s);
        } catch (l) {
          console.error(l), alert(`Error reading file ${e + 1}`);
          return;
        }
        const r = {
          data: n,
          name: s.name
        };
        this.files.push(r);
        const o = e / t.length * 100;
        this.loadingProgress = o;
      }
      this.$emit("drop", structuredClone(this.files)), this.files.length = 0;
    },
    eventHandler(i) {
      this.dropClass = (i == null ? void 0 : i.type) ?? null, i.preventDefault();
    }
  }
};
function tc(i, t, e, s, n, r) {
  return y(), C("div", {
    id: "drop",
    class: xe({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = nr((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    A("div", null, ie(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const ic = /* @__PURE__ */ Jt(ec, [["render", tc]]), sc = { id: "import-file" }, nc = /* @__PURE__ */ Oe({
  __name: "ImportCSV",
  props: {
    numberFormat: {
      type: String,
      default: "decimal"
    },
    bandingOptions: {
      type: Object,
      default: () => ({})
    },
    finishOptions: {
      type: Object,
      default: () => ({})
    },
    bandingLabels: {
      type: Array,
      default: () => []
    },
    finishLabels: {
      type: Array,
      default: () => []
    },
    customFields: {
      type: Array,
      default: () => []
    }
  },
  emits: ["error", "import"],
  setup(i, { emit: t }) {
    const e = i, s = t, { t: n } = Gi(["main", "errors"]), r = B([]), o = B([]), l = B([]), a = B([]), u = B({}), h = B([]), v = B(!1), w = B(null), d = B(null), g = [
      "l",
      "w",
      "t",
      "q",
      "orientationLock",
      "name",
      "material",
      "banding",
      "finish",
      "cost"
    ], S = ee(() => {
      const $ = {};
      return r.value.forEach((q, G) => {
        $[G] = {};
        for (const [te, ne] of Object.entries(q)) {
          if (!g.includes(te)) continue;
          const me = V(te, ne);
          (me === !0 || me === !1) && ($[G][te] = me);
        }
      }), $;
    }), _ = ee(() => e.customFields.map(($) => $.label)), Y = ($, q) => {
      if (q) {
        const G = Object.keys(q), te = [[]];
        G.forEach((me) => {
          const he = q[me], Ue = [];
          te.forEach((it) => {
            he.forEach((O) => Ue.push([...it, O]));
          }), te.splice(0, te.length, ...Ue);
        });
        const ne = /* @__PURE__ */ new Set();
        te.forEach((me) => ne.add(me.join("|").toLowerCase())), $ === "banding" ? w.value = ne : d.value = ne;
      }
    }, V = ($, q) => {
      if (q === "???") return !0;
      function G(ne) {
        return ne ? (ne = ne.trim().toLowerCase(), ne === "l" || ne === "w") : !0;
      }
      const te = {
        banding: (ne) => K(ne, w.value, "banding"),
        finish: (ne) => K(ne, d.value, "finish"),
        orientationLock: G
      };
      return $ in te ? te[$](q) : null;
    }, K = ($, q, G) => {
      if ($ = D($), !$) return !0;
      const te = $.split(","), ne = te.every((me) => !me || q.has(me.toLowerCase()));
      if (!ne) {
        const me = te.filter((he) => !q.has(he.toLowerCase()));
        console.log(`Valid ${G} choices...`), console.table(Array.from(q)), console.log(`The following ${G} choices are invalid`, me);
      }
      return ne;
    }, Q = ($, q) => {
      const G = {
        bandingOptions: (te) => oe(te, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (te) => oe(te, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return $ in G ? G[$](q) : null;
    }, oe = ($, q, G, te) => {
      if ($ = D($), !$)
        return te.reduce((he, Ue) => ({ ...he, [Ue]: {} }), {});
      const ne = $.split(",").map((he) => he.toLowerCase()), me = {};
      return te.forEach((he, Ue) => {
        me[he] = {}, Object.keys(q).forEach((it, O) => {
          var ut;
          me[he][G[O]] = ((ut = ne[Ue]) == null ? void 0 : ut.split("|")[O]) || "";
        });
      }), me;
    }, U = () => r.value.map(($, q) => ({
      l: e.numberFormat === "decimal" ? Oi($.l) : $.l,
      w: e.numberFormat === "decimal" ? Oi($.w) : $.w,
      t: e.numberFormat === "decimal" ? Oi($.t) : $.t,
      q: $.q,
      orientationLock: $.orientationLock,
      name: $.name,
      material: $.material,
      bandingOptions: S.value[q].banding ? Q("bandingOptions", $.banding) : null,
      finishOptions: S.value[q].finish ? Q("finishOptions", $.finish) : null,
      numberFormat: e.numberFormat,
      customData: le($)
    })), J = ($) => {
      var G;
      const q = (G = $ == null ? void 0 : $[0]) == null ? void 0 : G.data;
      q && Cr.parse(q, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (te) => m(te),
        error: () => s("error")
      });
    }, m = ($) => {
      o.value = $.data.filter((q) => q.some((G) => G)), l.value = o.value[0], u.value = {};
      for (let q = l.value.length; q--; ) {
        const G = l.value[q], te = L(G);
        te ? u.value[q] = te : (u.value[q] = null, _.value.includes(G) && (u.value[q] = "customData." + e.customFields.find((ne) => ne.label === G).id));
      }
      z(), o.value.shift(), R(), de();
    }, L = ($) => {
      const q = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", n("l"), n("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", n("w"), n("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", n("t"), n("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", n("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", n("quantity"), n("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", n("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", n("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", n("banding")],
        finish: ["finish", "paint"]
      }, G = Object.entries(q).reduce(
        (te, [ne, me]) => (me.some((he) => $ && $.toLowerCase() === he) && te.push(ne), te),
        []
      );
      return G.length > 1 ? null : G[0];
    }, z = () => {
      v.value = !1, a.value = Object.values(u.value).map((q) => !q || q === "N" ? null : g.includes(q) ? q : (v.value = !0, null));
      const $ = a.value.filter((q, G) => a.value.indexOf(q) !== G);
      h.value = $.map((q) => a.value.reduce(
        (G, te, ne) => (te && te === q && G.push(ne), G),
        []
      ));
    }, D = ($) => $ && $.replace(/\s*,\s*/g, ","), R = () => {
      const $ = o.value.map((q) => {
        const G = {};
        return l.value.forEach((te, ne) => {
          if (h.value.flat().includes(ne))
            return G[u.value[ne]] = "???";
          G[u.value[ne]] = q[ne];
        }), G;
      });
      r.value = $;
    }, le = ($) => {
      let q = {};
      for (let G in $)
        if (G.startsWith("customData.")) {
          let te = G.slice(11);
          q[te] = $[G];
        }
      return q;
    }, de = () => {
      const $ = U();
      $ != null && $.length && s("import", $);
    };
    return at(() => {
      Y("banding", e.bandingOptions), Y("finish", e.finishOptions);
    }), ($, q) => (y(), C("div", sc, [
      we(ic, {
        label: k(n)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: J
      }, null, 8, ["label"])
    ]));
  }
}), rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: nc }, Symbol.toStringTag, { value: "Module" }));
class Pt extends Error {
  constructor(t, e) {
    super(t), this.code = e, this.name = "FormulaError";
  }
}
class Ys {
  constructor({ url: t = null, spec: e = null }) {
    c(this, "url");
    c(this, "spec");
    // Update the operations object to use the FormulaOperation type
    c(this, "operations", {
      add: (t, e) => t + e,
      subtract: (t, e) => t - e,
      multiply: (t, e) => t * e,
      divide: (t, e) => {
        if (e === 0) throw new Pt("Division by zero", "DIVISION_BY_ZERO");
        return t / e;
      },
      ">": (t, e) => t > e,
      "<": (t, e) => t < e,
      ">=": (t, e) => t >= e,
      "<=": (t, e) => t <= e,
      "==": (t, e) => t === e
    });
    c(this, "precedence", {
      "+": 4,
      "-": 4,
      "*": 5,
      "/": 5,
      ">": 3,
      "<": 3,
      ">=": 3,
      "<=": 3,
      "==": 3,
      "?": 2,
      ":": 2
    });
    t && (this.url = t), e && (this.spec = e);
  }
  // private formulaCache: FormulaCache = new Map();
  // Update the evaluate method to use the type guard
  evaluate(t, e = {}) {
    if (typeof t == "number" || typeof t == "boolean") return t;
    if (typeof t == "string") {
      if (this.isStringLiteral(t))
        return t.slice(1, -1);
      if (!(t in e))
        throw new Error(`Undefined variable: ${t}`);
      return e[t];
    }
    const { operation: s, operands: n } = t;
    if (!s)
      throw new Error("Invalid formula structure");
    if (!this.isFormulaOperation(s))
      throw new Error(`Invalid operation: ${s}`);
    if (s === "ternary") {
      const l = this.evaluate(t.condition, e), a = this.evaluate(t.trueExpr, e), u = this.evaluate(t.falseExpr, e);
      return l ? a : u;
    }
    if (!n || !Array.isArray(n) || n.length !== 2)
      throw new Error("Invalid formula structure");
    const [r, o] = n.map((l) => this.evaluate(l, e));
    return [">", "<", ">=", "<=", "=="].includes(s) ? this.evaluateComparison(s, r, o) : this.operations[s](r, o);
  }
  // Update getOperation to use the type guard
  getOperation(t) {
    const s = {
      "+": "add",
      "-": "subtract",
      "*": "multiply",
      "/": "divide",
      ">": ">",
      "<": "<",
      ">=": ">=",
      "<=": "<=",
      "==": "==",
      "?:": "ternary"
    }[t];
    if (!this.isFormulaOperation(s))
      throw new Error(`Unsupported operator: ${t}`);
    return s;
  }
  isFormulaOperation(t) {
    return ["add", "subtract", "multiply", "divide", ">", "<", ">=", "<=", "==", "ternary"].includes(t);
  }
  isFormula(t) {
    return typeof t == "string" && t.startsWith("=");
  }
  stripFormulaPrefix(t) {
    return t.substring(1);
  }
  evaluateValue(t, e, s = {}) {
    return typeof t == "number" || !this.isFormula(t) ? t : this.evaluateFormula(this.stripFormulaPrefix(t), e, s);
  }
  extractDependencies(t) {
    const e = /* @__PURE__ */ new Set();
    if (typeof t == "string") {
      const s = Array.from(t.matchAll(/panels\.(\w+)\.([lwt])/g));
      for (const o of s)
        e.add(`${o[1]}.${o[2]}`);
      const n = Array.from(t.matchAll(/inputs\.(\w+)/g));
      for (const o of n)
        e.add(`input.${o[1]}`);
      const r = /* @__PURE__ */ new Set(["width", "depth", "height", "quantity"]);
      for (const o of r)
        t.includes(o) && e.add(`input.${o}`);
    }
    return e;
  }
  buildFormulaGraph(t, e) {
    const s = {
      nodes: /* @__PURE__ */ new Map(),
      edges: /* @__PURE__ */ new Map()
    }, n = (r, o) => {
      const l = `${t}.${r}`;
      s.nodes.set(l, {
        panelKey: t,
        attribute: r,
        formula: o
      }), s.edges.set(l, this.isFormula(o) ? this.extractDependencies(this.stripFormulaPrefix(o.toString())) : /* @__PURE__ */ new Set());
    };
    return n("l", e.l), n("w", e.w), n("t", e.t), n("q", e.q), s;
  }
  resolveFormulas(t, e, s, n = {}) {
    const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = (a) => {
      if (r.has(a))
        return r.get(a);
      const [u, h] = a.split(".");
      if (!t.nodes.has(a)) {
        const S = n[u];
        if (S)
          return h === "q" ? S.q : S[h];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const v = t.nodes.get(a);
      if (typeof v.formula == "number")
        return r.set(a, v.formula), v.formula;
      o.add(a);
      const w = t.edges.get(a) || /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
      for (const S of w)
        if (S.startsWith("input.")) {
          const _ = S.split(".")[1];
          d.set(S, s[_]);
        } else
          d.set(S, l(S));
      const g = this.evaluateFormulaWithDeps(v.formula, d, s);
      return r.set(a, g), o.delete(a), g;
    };
    for (const a of t.nodes.keys())
      l(a);
    return Object.fromEntries(r);
  }
  evaluateFormulaWithDeps(t, e, s, n) {
    if (!this.isFormula(t)) return t;
    let r = this.stripFormulaPrefix(t.toString());
    return r = r.replace(
      /inputs\.(\w+)/g,
      (o, l) => {
        var a;
        return ((a = s[l]) == null ? void 0 : a.toString()) || "0";
      }
    ), r = r.replace(
      /panels\.(\w+)\.(\w+)/g,
      (o, l, a) => {
        if (l === (n == null ? void 0 : n.panelKey) && n[a] !== void 0)
          return n[a].toString();
        if (e.has(`${l}.${a}`))
          return e.get(`${l}.${a}`).toString();
        throw new Error(`Undefined variable in formula: ${o}`);
      }
    ), this.evaluate(this.parse(r), s);
  }
  calculatePanels(t) {
    var s;
    if (!((s = this.spec) != null && s.panels)) return {};
    const e = {};
    for (const [n, r] of Object.entries(this.spec.panels)) {
      const o = this.buildFormulaGraph(n, r), l = this.resolveFormulas(o, r, t, e), a = {
        panelKey: n,
        l: l[`${n}.l`],
        w: l[`${n}.w`],
        t: l[`${n}.t`],
        q: l[`${n}.q`] || 1
      };
      e[n] = {
        name: r.name,
        material: r.material,
        bandingOptions: r.bandingOptions ?? {},
        finishOptions: r.finishOptions ?? {},
        orientationLock: r.orientationLock !== void 0 ? this.evaluateFormulaWithDeps(r.orientationLock, /* @__PURE__ */ new Map(), t, a) : void 0,
        ...a
      };
    }
    return e;
  }
  evaluateFormula(t, e, s = {}) {
    if (typeof t == "number") return t;
    if (typeof t == "string") {
      const n = t.replace(/inputs\.(\w+)/g, (o, l) => {
        if (!(l in e))
          throw new Error(`Input not found: ${l}`);
        return e[l].toString();
      }), r = n.match(/panels\.(\w+)\.(l|w|t|q)/);
      if (r) {
        const [, o, l] = r;
        if (!s[o])
          throw new Error(`Panel not found: ${o}`);
        return l === "q" ? s[o].q ?? 1 : s[o].dimensions[l];
      }
      return this.evaluate(this.parse(n), e);
    }
    throw new Error("Invalid formula type");
  }
  tokenize(t) {
    const e = /('(?:\\'|[^'])*'|[0-9.]+|>=|<=|==|!=|\+|-|\*|\/|>|<|\?|:|\(|\)|\w+|\.)/g;
    return t.match(e) || [];
  }
  isValidToken(t) {
    return this.isNumber(t) || this.isVariable(t) || t in this.precedence || t === "(" || t === ")" || t === "." || this.isIdentifier(t);
  }
  isIdentifier(t) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t);
  }
  evaluateComparison(t, e, s) {
    switch (t) {
      case ">":
        return e > s;
      case "<":
        return e < s;
      case ">=":
        return e >= s;
      case "<=":
        return e <= s;
      case "==":
        return e === s;
      default:
        throw new Error(`Unsupported comparison operator: ${t}`);
    }
  }
  isNumber(t) {
    return !isNaN(Number(t));
  }
  isVariable(t) {
    return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t);
  }
  toPostfix(t) {
    const e = [], s = [];
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (this.isNumber(r) || this.isStringLiteral(r) || this.isIdentifier(r))
        e.push(this.isNumber(r) ? Number(r) : r);
      else if (r === "(")
        s.push(r);
      else if (r === ")") {
        for (; s.length && s[s.length - 1] !== "("; )
          e.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched parentheses");
        s.pop();
      } else if (r === "?") {
        for (; s.length && this.precedence[s[s.length - 1]] > this.precedence[r]; )
          e.push(s.pop());
        s.push(r);
      } else if (r === ":") {
        for (; s.length && s[s.length - 1] !== "?"; )
          e.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched ternary operator");
        s.pop(), s.push("?:");
      } else if (r in this.precedence) {
        for (; s.length && this.precedence[s[s.length - 1]] >= this.precedence[r]; )
          e.push(s.pop());
        s.push(r);
      } else
        throw new Error(`Invalid token: ${r}`);
    }
    for (; s.length; ) {
      const n = s.pop();
      if (n === "(" || n === ")")
        throw new Error("Mismatched parentheses");
      e.push(n);
    }
    return e;
  }
  parse(t) {
    if (typeof t != "string")
      throw new Error("Parse input must be a string");
    if (!t.trim())
      throw new Error("Empty input");
    const e = this.tokenize(t), s = this.toPostfix(e);
    return this.toFormulaJSON(s);
  }
  isStringLiteral(t) {
    return /^'.*'$/.test(t);
  }
  toFormulaJSON(t) {
    const e = [];
    for (const s of t)
      if (typeof s == "number" || this.isStringLiteral(s.toString()) || this.isVariable(s.toString()))
        e.push(s);
      else if (s === "?:") {
        if (e.length < 3)
          throw new Error("Invalid ternary expression");
        const n = e.pop(), r = e.pop(), o = e.pop();
        e.push({
          operation: "ternary",
          condition: o,
          trueExpr: r,
          falseExpr: n
        });
      } else {
        if (e.length < 2)
          throw new Error("Invalid expression: insufficient operands");
        const n = e.pop(), r = e.pop();
        e.push({
          operation: this.getOperation(s.toString()),
          operands: [r, n]
        });
      }
    if (e.length !== 1)
      throw new Error("Invalid expression: too many operands");
    return e[0];
  }
  calculateHardware(t) {
    var e;
    return (e = this.spec) != null && e.hardware ? Object.entries(this.spec.hardware).reduce((s, [n, r]) => {
      const o = this.evaluateValue(r.q, t);
      return s[n] = {
        name: r.name,
        q: Math.ceil(o),
        totalCost: Math.ceil(o) * r.cost
      }, s;
    }, {}) : {};
  }
  calculateAll(t) {
    this.validateInputs(t);
    const e = this.calculatePanels(t), s = this.calculateHardware(t);
    return {
      inputs: t,
      panels: e,
      hardware: s
    };
  }
  validateInputs(t) {
    var e;
    if (!((e = this.spec) != null && e.inputs)) throw new Pt("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
      if (r === void 0)
        throw new Pt(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new Pt(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
    }
  }
  async getSpec() {
    if (this.spec)
      return this.validateSpec(), this.spec;
    if (!this.url) return null;
    try {
      const t = await fetch(this.url);
      if (!t.ok)
        throw new Error(`HTTP error! status: ${t.status}`);
      const e = await t.json();
      return this.spec = e, this.validateSpec(), e;
    } catch (t) {
      return console.error("Error fetching or parsing JSON file:", t), null;
    }
  }
  validateSpec() {
    const t = [];
    return this.spec ? ((!this.spec.inputs || Object.keys(this.spec.inputs).length === 0) && t.push("Specification must contain inputs"), { isValid: t.length === 0, errors: t }) : (t.push("Specification is required"), { isValid: !1, errors: t });
  }
  validateFields(t) {
    var n;
    if (!((n = this.spec) != null && n.inputs))
      throw new Pt("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new Pt(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new Pt(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new Pt(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
      s++;
    }
  }
  fieldsToInputs(t) {
    var s;
    const e = Object.keys(((s = this.spec) == null ? void 0 : s.inputs) || {});
    return t.reduce((n, r, o) => {
      const l = e[o];
      return l && (n[l] = r.value), n;
    }, {});
  }
  getEmptyFields() {
    var e;
    const t = {};
    return (e = this.spec) != null && e.inputs && Object.keys(this.spec.inputs).forEach((s, n) => {
      t[n] = { value: 0 };
    }), t;
  }
  getDefaultFields() {
    var e;
    const t = {};
    return (e = this.spec) != null && e.inputs && Object.values(this.spec.inputs).forEach((s, n) => {
      t[n] = { value: s.default };
    }), t;
  }
  calculatePanelsFromFields(t) {
    this.validateFields(t);
    const e = this.fieldsToInputs(t);
    return this.calculatePanels(e);
  }
  calculateHardwareFromFields(t) {
    this.validateFields(t);
    const e = this.fieldsToInputs(t);
    return this.calculateHardware(e);
  }
  calculateAllFromFields(t) {
    this.validateFields(t);
    const e = this.fieldsToInputs(t);
    return this.calculateAll(e);
  }
  getFieldMetadata() {
    var e;
    const t = [];
    return (e = this.spec) != null && e.inputs && Object.entries(this.spec.inputs).forEach(([s, n], r) => {
      t.push({
        index: r,
        name: s,
        label: n.label,
        type: n.type,
        min: n.min,
        max: n.max,
        default: n.default
      });
    }), t;
  }
}
const oc = {
  key: 0,
  class: "debug"
}, lc = { id: "formula-pricing" }, ac = {
  key: 0,
  class: "extras"
}, uc = { class: "heading" }, cc = { id: "hardware-total" }, hc = { class: "heading panels" }, dc = !1, fc = /* @__PURE__ */ Oe({
  __name: "FormulaPricing",
  props: {
    currency: {
      type: String,
      default: "GBP"
    },
    url: {
      type: String,
      default: ""
    },
    spec: {
      type: Object,
      default: () => ({})
    },
    debug: {
      type: Boolean,
      default: !1
    },
    units: {
      type: String,
      default: "mm"
    },
    formatPrice: {
      type: Function,
      default: (i) => i.toFixed(2)
    }
  },
  emits: ["hardware-result", "panel-result"],
  setup(i, { emit: t }) {
    const e = It(() => Promise.resolve().then(() => Vi)), { addNotice: s } = Hi(), n = i, { t: r } = Gi(["main", "errors"]), o = t, l = rr("calculator"), a = ee(() => l()), u = B("production");
    let h = null;
    const v = B(null), w = B([]), d = B(!1), g = ee(() => {
      if (!d.value || !w.value.length || w.value.every((m) => m.value === null)) return;
      const J = Q();
      return Ke(() => {
        o("panel-result", J);
      }), J;
    }), S = ee(() => {
      if (!a.value || !d.value || !w.value.length || w.value.every((m) => m.value === null)) return;
      const J = oe();
      return Ke(() => {
        o("hardware-result", J, _.value);
      }), J;
    }), _ = ee(() => {
      if (S.value)
        return Object.values(S.value).reduce((J, m) => J + m.totalCost, 0);
    });
    $e(g, (J) => {
      var D, R, le, de;
      if (!d.value || !J || !a.value || !((D = a.value) != null && D.inputShapes) || !((R = a.value.inputShapes) != null && R.length)) return;
      const m = ($) => $ != null && $.name ? $.name.toLowerCase() : "", L = new Map(
        a.value.inputShapes.map(($) => [m($), $])
      ), z = /* @__PURE__ */ new Set();
      for (const $ of Object.values(g.value)) {
        if (!$.name) continue;
        const q = m($), G = L.get(q), te = {
          ...$,
          name: $.name.toUpperCase() || (G == null ? void 0 : G.name.toUpperCase()),
          material: ((le = $.material) == null ? void 0 : le.toUpperCase()) || ((de = G == null ? void 0 : G.material) == null ? void 0 : de.toUpperCase()),
          bandingOptions: $.bandingOptions || {},
          finishOptions: $.finishOptions || {},
          orientationLock: $.orientationLock || null,
          readonly: !0
        }, ne = G || a.value.createInputShape(te);
        if (G) {
          Object.assign(G, te);
          for (const me of ["banding", "finish"])
            a.value.initExtrasOptions(G, me);
        } else
          a.value.inputShapes.push(ne);
        z.add(q);
      }
      a.value.inputShapes = a.value.inputShapes.filter(
        ($) => z.has(m($))
      );
    }, { immediate: !1 }), at(() => U());
    const Y = (J) => {
      n.debug && console.log(J);
    }, V = () => {
      w.value = Object.values(v.value.inputs).map(() => ({
        value: null
      }));
    }, K = (J, m) => {
      w.value[J] && (w.value[J].value = m);
    }, Q = () => {
      try {
        return h.calculatePanelsFromFields(w.value);
      } catch (J) {
        return Ke(() => {
          s({
            type: "error",
            message: J.message.split(`
`)[0]
          });
        }), null;
      }
    }, oe = () => {
      try {
        return h.calculateHardwareFromFields(w.value);
      } catch (J) {
        return Ke(() => {
          s({
            type: "error",
            message: J.message.split(`
`)[0]
          });
        }), null;
      }
    }, U = async () => {
      if (!n.url && !n.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      n.url ? (Y(`SmartCut - Formula calculator init from url: ${n.url}`), h = new Ys({ url: n.url }), v.value = await h.getSpec()) : n.spec && (Y("SmartCut - Formula calculator init with JSON"), h = new Ys({ spec: n.spec }), v.value = await h.getSpec()), V(), d.value = !0;
    };
    return (J, m) => {
      var L;
      return y(), C(Se, null, [
        u.value === "development" && dc ? (y(), C("div", oc, [
          m[0] || (m[0] = A("div", null, "Developer information", -1)),
          v.value ? (y(), ge(k(e), {
            key: 0,
            data: [v.value],
            paths: ["spec"]
          }, null, 8, ["data"])) : H("", !0),
          we(k(e), {
            data: [w.value],
            paths: ["this.fields"]
          }, null, 8, ["data"])
        ])) : H("", !0),
        A("div", lc, [
          (y(!0), C(Se, null, Te((L = v.value) == null ? void 0 : L.inputs, (z, D, R) => {
            var le;
            return y(), ge(gt, {
              id: "formula-field-" + R,
              key: R,
              type: z.type,
              label: z.label,
              placeholder: z.label,
              min: z.min ?? 0,
              max: z.max ?? null,
              default: z.default ?? 0,
              value: (le = w.value[R]) == null ? void 0 : le.value,
              "onUpdate:value": (de) => K(R, de)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          S.value ? (y(), C("div", ac, [
            A("div", uc, ie(k(r)("Hardware")), 1),
            (y(!0), C(Se, null, Te(S.value, (z, D) => (y(), C("div", { key: D }, ie(z.name) + " x" + ie(z.q) + " = " + ie(i.formatPrice(z.totalCost)), 1))), 128)),
            A("div", cc, ie(k(r)("Hardware total")) + " = " + ie(i.formatPrice(_.value)), 1)
          ])) : H("", !0),
          A("div", hc, ie(k(r)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), Gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: fc }, Symbol.toStringTag, { value: "Module" })), pc = { id: "smartcut-notices" }, gc = { class: "content" }, mc = ["onClick"], yc = ["innerHTML"], vc = /* @__PURE__ */ Oe({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = Hi(), n = B({}), r = ee(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Bt("font-awesome-icon");
      return y(), ge(Xs, { to: "body" }, [
        A("div", pc, [
          we(or, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: xe(["notices-container", t.position])
          }, {
            default: ss(() => [
              (y(!0), C(Se, null, Te(k(e), (u) => (y(), C("div", {
                key: u.id,
                ref_for: !0,
                ref: (h) => {
                  h && (n.value[u.id] = h);
                },
                class: xe([
                  "notice",
                  `notice--${u.type}`
                ])
              }, [
                A("div", gc, [
                  A("div", {
                    class: "message",
                    onClick: (h) => u.action()
                  }, ie(u.message), 9, mc),
                  A("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, yc)
                ]),
                u.persistent ? H("", !0) : (y(), ge(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (h) => k(s)(u.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: vc }, Symbol.toStringTag, { value: "Module" }));
export {
  Lr as A,
  Ni as B,
  Bc as C,
  qc as D,
  Gc as F,
  as as I,
  Hc as N,
  Vi as O,
  vt as S,
  Jt as _,
  Ui as a,
  Dt as b,
  Z as c,
  Fc as d,
  No as e,
  Mi as f,
  Rc as g,
  Ot as h,
  Tc as i,
  Oc as j,
  Ac as k,
  Dc as l,
  _c as m,
  Ec as n,
  T as o,
  jt as p,
  $c as q,
  Ic as r,
  Ie as s,
  Mc as t,
  Pc as u,
  mt as v,
  pt as w,
  Rt as x,
  Os as y,
  Xt as z
};

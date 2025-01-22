var Un = Object.defineProperty;
var jn = (i, t, e) => t in i ? Un(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => jn(i, typeof t != "symbol" ? t + "" : t, e);
import { d as Te, o as v, c as $, F as we, r as Ie, n as ke, a as Se, b as D, t as ie, w as es, v as ts, e as zn, f as G, g as H, h as Z, i as Ce, j as at, k as Ye, l as is, m as ri, u as x, p as jt, q as pe, s as ss, x as Vn, y as Gi, z as Ft, A as be, B as Yn, C as $t, D as Xn, E as Kn, G as Zn, H as Jn, I as ct, J as Qn, T as er, K as Xs, L as tr, M as xs, N as ir, O as sr, P as nr, Q as rr, R as or } from "./vendor-vue-B39CQo2S.js";
import { u as Ks, a as Hi, b as Zs, c as lr, d as ar, e as ur } from "./composables-qJYLCNHj.js";
import { l as Qe, a as Ai, b as Di, c as Js, d as Qs, s as Ee, e as oi, r as Dt, f as en, p as cr, g as hr, S as dr, h as fr, i as pr, j as gr, k as mr } from "./vendor-d3-BrvhDTRC.js";
import { c as yr, a as tn, b as Ke, F as ai, g as zt, v as ns, i as di, t as Ei, d as ni, e as Ii, h as vr, s as br, f as wr, o as Sr, j as kr, k as xr, P as Cr } from "./vendor-UJdh33XB.js";
import { i as $r } from "./vendor-i18n-D9hV6ZJH.js";
function fi(i) {
  return !(!i || typeof i != "string");
}
function Pr(i) {
  return !fi(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function Wt(i) {
  return fi(i) ? i.trim().split(" ").map((t) => Le(t)).join(" ") : "";
}
function Le(i) {
  return fi(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function Ni(i) {
  return fi(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function Lr(i, t = 100) {
  return fi(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let sn = $r;
function $c(i) {
  sn = i;
}
function _e(i, t) {
  return sn.t(i, { ns: ["main", "errors"], ...t });
}
const Nt = 1e-10, Ir = 10, Tr = Number.MAX_SAFE_INTEGER, Or = 4294967295, Fe = (i) => typeof i == "number" && Number.isFinite(i), Ti = (i) => Array.isArray(i) && i.length > 0;
function ii(i, t, e = Nt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Ar = {
  greaterThan: (i, t, e = Nt) => !Fe(i) || !Fe(t) ? !1 : ii(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Nt) => !Fe(i) || !Fe(t) ? !1 : ii(i, t, e) >= 0,
  lessThan: (i, t, e = Nt) => !Fe(i) || !Fe(t) ? !1 : ii(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Nt) => !Fe(i) || !Fe(t) ? !1 : ii(i, t, e) <= 0,
  equalTo: (i, t, e = Nt) => !Fe(i) || !Fe(t) ? !1 : ii(i, t, e) === 0
};
function Dr(i) {
  return Fe(i) ? Number.isInteger(i) ? i : Number(i.toFixed(Ir)) : !1;
}
function Er(i) {
  if (!Fe(i) || i < 0 || i > Tr)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Or + 1) * i);
}
function Rr(i, t) {
  if (!Ti(i))
    throw new Error("Invalid array parameter");
  if (!Fe(t) || t < 0 || t > i.length)
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
  isNumber: Fe,
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
const ye = (i, t, e) => t in i ? i[t] : (console.warn(Ri.missingProperty(String(t), e)), null), xi = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, Ht = (i, t) => {
  if (!Cs(i) || !Cs(t))
    return console.warn(Ri.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, nt = (i, t) => {
  const e = ye(i, "id", "first item"), s = ye(t, "id", "second item");
  if (e === null || s === null) return 0;
  const n = e.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function rt(i) {
  const t = Array.isArray(i[0]) ? i.map(([e, s]) => ({ key: e, direction: s })) : i;
  return (e, s) => {
    for (const { key: n, direction: r } of t) {
      const o = ye(e, n, "first item"), l = ye(s, n, "second item");
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
  AD: (i, t) => -Ht(i, t),
  AA: Ht,
  AAID: xi(
    Ht,
    nt
  ),
  ADID: xi(
    (i, t) => -Ht(i, t),
    nt
  ),
  // ID sorts
  ID: nt,
  IDDesc: (i, t) => -nt(i, t),
  StockID: (i, t) => {
    const e = ye(i, "stock", "first item"), s = ye(t, "stock", "second item");
    return !e || !s ? 0 : nt(e, s);
  },
  StockIDAD: (i, t) => {
    const e = ye(i, "stock", "first item"), s = ye(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = nt(e, s);
    return n !== 0 ? n : -Ht(i, t);
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
    const e = ye(i, "placementOrder", "first item") ?? 0, s = ye(t, "placementOrder", "second item") ?? 0;
    return e - s;
  },
  typePlacementOrder: (i, t) => {
    const e = ye(i, "offcut", "first item"), s = ye(t, "offcut", "second item"), n = ye(i, "placementOrder", "first item") ?? 0, r = ye(t, "placementOrder", "second item") ?? 0;
    return e && !s ? 1 : !e && s ? -1 : n - r;
  },
  stockIDTypePlacementOrder: (i, t) => {
    const e = ye(i, "stock", "first item"), s = ye(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = nt(e, s);
    if (n !== 0) return n;
    const r = ye(i, "offcut", "first item"), o = ye(t, "offcut", "second item");
    if (r && !o) return 1;
    if (!r && o) return -1;
    const l = ye(i, "placementOrder", "first item") ?? 0, a = ye(t, "placementOrder", "second item") ?? 0;
    return l - a;
  },
  offcutPlacementOrder: (i, t) => {
    const e = ye(i, "stock", "first item"), s = ye(t, "stock", "second item");
    if (!(e != null && e.id) || !(s != null && s.id)) return 0;
    const n = nt(e, s);
    if (n !== 0) return n;
    if ("placementOrder" in i && "placementOrder" in t) {
      const r = ye(i, "placementOrder", "first item") ?? 0, o = ye(t, "placementOrder", "second item") ?? 0;
      return r - o;
    }
    return 0;
  },
  groupPlacementOrder: (i, t) => {
    const e = ye(i, "placementOrder", "first item") ?? 0, s = ye(t, "placementOrder", "second item") ?? 0, n = e - s;
    if (n !== 0) return n;
    const r = ye(i, "groupPlacementOrder", "first item") ?? 0, o = ye(t, "groupPlacementOrder", "second item") ?? 0;
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
    return (t, e) => !Ps(t) || !Ps(e) ? (console.warn(Ri.missingLongSide), 0) : e[i] === t[i] ? -Ht(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function Mr(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function Rt(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function Fr(i) {
  return i ? i === "x" ? "y" : "x" : null;
}
class Ut {
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
function kt(i, t, e, s, n = null, r = null) {
  return new Ut({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function _r(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function qr(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function Br(i, t) {
  const e = i.getCorners(), s = {};
  return e.bottomLeft.x > 0 && e.bottomLeft.y > 0 && (s.bottomLeftDown = kt(
    e.bottomLeft.x,
    e.bottomLeft.y,
    e.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = kt(
    e.bottomLeft.x,
    e.bottomLeft.y,
    0,
    e.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), e.topLeft.x > 0 && e.topLeft.y < t.w && (s.topLeftLeft = kt(
    e.topLeft.x,
    e.topLeft.y,
    0,
    e.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = kt(
    e.topLeft.x,
    e.topLeft.y,
    e.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), e.topRight.y < t.w && e.topRight.x < t.l && (s.topRightTop = kt(
    e.topRight.x,
    e.topRight.y,
    e.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = kt(
    e.topRight.x,
    e.topRight.y,
    t.l,
    e.topRight.y,
    "topRight",
    "topRightRight"
  )), e.bottomRight.x < t.l && e.bottomRight.y > 0 && (s.bottomRightRight = kt(
    e.bottomRight.x,
    e.bottomRight.y,
    t.l,
    e.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = kt(
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
Ke.colors = [
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
Ke("logs");
Ke("cuts");
Ke("guillotine");
Ke("results");
Ke("scoring");
Ke("calculations");
Ke("subset");
Ke("secondRun");
Ke("stack");
const Hr = Ke("errors");
Ke("allStock");
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
class Wi extends Ut {
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
    C(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Tt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.guillotine = e.guillotine, this.guillotineData = C(e.guillotineData) ? e.guillotineData : {}, this.guillotineData.ptxDummyCut = (e == null ? void 0 : e.ptxDummyCut) || ((o = e == null ? void 0 : e.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = C(e.isTrim) ? e.isTrim : !1, this.distances = C(e.distances) ? e.distances : {}, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1;
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
class De {
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
    const s = new De(t ?? this.x, e ?? this.y);
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
class _t {
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
function fe(i, t, e, s, n) {
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
  var o, l, a, u, h, b;
  const s = new _t(), n = e.toArray().sort(on), r = t.getBladeWidth();
  if (n.forEach((S) => {
    const d = S.corner, g = S.type;
    if (!r)
      s.addPoint(S);
    else
      switch (d) {
        case "topRight":
          s.addPoint(
            fe("top", S, r, d),
            g
          ), s.addPoint(
            fe("right", S, r, d),
            g
          );
          break;
        case "topLeft":
          s.addPoint(
            fe("top", S, r, d),
            g
          ), s.addPoint(
            fe("left", S, r, d),
            g
          );
          break;
        case "bottomRight":
          s.addPoint(
            fe("bottom", S, r, d),
            g
          ), s.addPoint(
            fe("right", S, r, d),
            g
          );
          break;
        case "bottomLeft":
          s.addPoint(
            fe("bottom", S, r, d),
            g
          ), s.addPoint(
            fe("left", S, r, d),
            g
          );
          break;
      }
    const k = s.toArray();
    if (r)
      for (let _ = k.length; _--; ) {
        const z = k[_];
        e.contains(z) && s.deletePoint(z);
      }
    else
      for (let _ = k.length; _--; ) {
        const z = k[_];
        for (let j = i.length; j--; ) {
          const Y = i[j];
          if (z.x === Y.x && z.y === Y.y) {
            s.deletePoint(z);
            break;
          }
        }
      }
  }), r) {
    const S = /* @__PURE__ */ new Set();
    let d, g, k, _;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (d = t.x, g = t.y, k = t.x + t.l, _ = t.y + t.w) : (d = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), g = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), k = t.x + t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2), _ = t.y + t.w - ((b = t == null ? void 0 : t.trim) == null ? void 0 : b.y2));
    let z = s.toArray();
    for (let j = z.length; j--; ) {
      const Y = z[j];
      (ce.lessThan(Y.x, d) || ce.lessThan(Y.y, g) || ce.greaterThan(Y.x, k) || ce.greaterThan(Y.y, _)) && z.splice(j, 1);
    }
    s.clear(), s.addPoints(z), S.clear(), z = s.toArray();
    for (let j = z.length; j--; ) {
      const Y = z[j];
      for (let J = i.length; J--; ) {
        const re = i[J];
        if (Y.collidesWith(re)) {
          s.deletePoint(Y);
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
        o === "rl" && (s.push(fe("right", t, n, r, o)), s.push(fe("topRight", t, n, r, o))), o === "bt" && (s.push(fe("bottom", t, n, r, o)), s.push(fe("bottomLeft", t, n, r, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(fe("left", t, n, r, o)), s.push(fe("topLeft", t, n, r, o))), o === "bt" && (s.push(fe("bottom", t, n, r, o)), s.push(fe("bottomRight", t, n, r, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(fe("left", t, n, r, o)), s.push(fe("bottomLeft", t, n, r, o))), o === "tb" && (s.push(fe("top", t, n, r, o)), s.push(fe("topRight", t, n, r, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(fe("right", t, n, r, o)), s.push(fe("bottomRight", t, n, r, o))), o === "tb" && (s.push(fe("top", t, n, r, o)), s.push(fe("topLeft", t, n, r, o)));
        break;
    }
  else if (t.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(fe("top", t, 0)), s.push(fe("centre", t, 0)), s.push(fe("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        s.push(fe("left", t, 0)), s.push(fe("right", t, 0)), s.push(fe("centre", t, 0));
        break;
    }
  if (s = s.filter((a) => a.x >= 0 && a.y >= 0), !s.length) return null;
  const l = new _t();
  for (const a of s)
    a.raycast = !0, l.addPoints(un(i, a, e).toArray());
  return cn(i, e, l), l;
}
function Vr(i, t) {
  const e = new _t();
  return i.sort(on), i.forEach((s) => {
    ht(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
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
  let e = new _t();
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
      const b = new De(h.x2, h.y2);
      r === h.direction && (ln(b, l, null, h.direction, "edge"), e.addPoint(b));
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
    const u = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, h = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, b = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, S = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (u || h || b || S) {
      const g = r ? i[`${l}1`] : n, k = r ? n : i[`${l}1`], _ = new De(g, k), z = i.origin;
      ln(_, t, e, i.direction, "shape", z), s.addPoint(_);
    }
  }
}
function Zr(i) {
  const t = new _t();
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
  const s = new _t(), n = t.getAvailableShapePositions(e);
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
  var a, u, h, b, S, d;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (h = t == null ? void 0 : t.trim) == null ? void 0 : h.x1, n = (b = t == null ? void 0 : t.trim) == null ? void 0 : b.y1, r = t.l - ((S = t == null ? void 0 : t.trim) == null ? void 0 : S.x2) - i.l, o = t.w - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.y2) - i.w);
  const l = e.toArray();
  for (let g = l.length; g--; ) {
    const k = l[g];
    (ce.lessThan(k.x, s) || ce.lessThan(k.y, n) || ce.greaterThan(k.x, r) || ce.greaterThan(k.y, o) || k.x < 0 || k.y < 0) && e.deletePoint(k);
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
function O(i) {
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
    fr: b = to
  } = { nf: e, dp: s, pl: n, fr: r, ...l };
  if (t == null || t === "")
    return a === "decimal" ? null : "";
  try {
    const S = lo(t, h);
    return S ? a === "decimal" ? so(
      S,
      t,
      u
    ) : no(
      S,
      b
    ) : a === "decimal" ? 0 : "0";
  } catch (S) {
    throw new rs(
      `Failed to convert number format: ${t} to ${a}. ${S.message}`
    );
  }
}
function so(i, t, e) {
  if (!String(i).includes("/")) {
    const o = String(i);
    if (o.includes("e")) {
      if (typeof e == "number") {
        const l = Number(Number(o).toFixed(e));
        return si(l);
      }
      return Number(o);
    }
    if (typeof e == "number") {
      const [l, a = ""] = o.split("."), u = a.padEnd(e, "0"), h = +`${l}.${u.slice(0, e)}`;
      return si(h);
    }
    return si(Number(o));
  }
  const n = new ai(i).valueOf();
  if (typeof t == "string" && t.includes("/"))
    return typeof e == "number" ? si(Number(n.toFixed(e))) : n;
  const r = io(String(t));
  return si(Number(n.toFixed(r)));
}
function no(i, t) {
  const e = new ai(i);
  if (t > 0) {
    const s = e.valueOf(), n = Math.round(s * t);
    return new ai(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function si(i) {
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
  if (i && !(!He(i) && !li(i))) {
    if (!["decimal", "fraction"].includes(t)) {
      console.warn("Attempting to update to an invalid number format:", t);
      return;
    }
    for (const n of i.numberFormatKeys) {
      if (typeof i[n] == "object") {
        for (const r in i[n])
          i[n][r] = O({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s });
        return;
      }
      i[n] = O({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
    }
  }
}
function ao(i, t, e, s) {
  return t.filter((n, r) => {
    var o, l, a;
    return i.stockMatch.material[r] = null, i.stockMatch.thickness[r] = null, i.stockMatch.width[r] = null, i.stockMatch.fit[r] = null, (gt(i) || cs(i)) && (pn(n, i) ? i.stockMatch.fit[r] = !0 : i.stockMatch.fit[r] = !1), e ? !(n != null && n.material) && !(i != null && i.material) || ((o = n == null ? void 0 : n.material) == null ? void 0 : o.toLowerCase()) === ((l = i == null ? void 0 : i.material) == null ? void 0 : l.toLowerCase()) ? i.stockMatch.material[r] = !0 : i.stockMatch.material[r] = !1 : i.stockMatch.material[r] = !0, s ? C(i.t) && C(n.t) ? (gt(i) && ce.equalTo(i.t, n.t) || i.t === n.t) && (i.stockMatch.thickness[r] = !0) : i.stockMatch.thickness[r] = !1 : i.stockMatch.thickness[r] = !0, ((a = n == null ? void 0 : n.saw) == null ? void 0 : a.stockType) === "linear" ? gt(i) && (i.canRotate(0, n) && ce.equalTo(i.w, n.w) || i.canRotate(1, n) && ce.equalTo(i.l, n.w) ? i.stockMatch.width[r] = !0 : i.stockMatch.width[r] = !1) : i.stockMatch.width[r] = !0, i.stockMatch.fit[r] && i.stockMatch.material[r] && i.stockMatch.thickness[r] && i.stockMatch.width[r];
  });
}
function uo(i, t, e) {
  const s = He(i[0]);
  if (s && (t = t.map((h) => {
    const b = new Tt(h);
    return b.trimDimensions(), b;
  }), i = i.map((h) => {
    const b = new mt(h);
    return b.trimDimensions(), b;
  })), i.some((h) => C(h.stockLock) && h.stockLock.length)) return;
  s || (t = t.filter((h) => h.autoAdd === !0 || C(h.q) && h.q > 0));
  const r = t.some((h) => C(h.material)), o = t.some((h) => C(h.t)), l = /* @__PURE__ */ new Set();
  for (const h of i) {
    h.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const b = ao(h, t, r, o);
    if (h.stockMatch.fit = !h.stockMatch.fit.every((S) => S === !1), h.stockMatch.material = !h.stockMatch.material.every((S) => S === !1 || S === null), h.stockMatch.thickness = !h.stockMatch.thickness.every((S) => S === !1 || S === null), h.stockMatch.width = !h.stockMatch.width.every((S) => S === !1), !s) {
      if (b.length) {
        const S = b.map((d) => d.getParentID());
        h.stockLock = S, S.forEach((d) => l.add(d));
      } else
        h.stockMatch.fit ? (h.stockMatch.material || new V({
          item: h,
          field: [["material"]],
          message: "no stock with matching material found"
        }), h.stockMatch.thickness || new V({
          item: h,
          field: [["t"]],
          message: `thicknesses must match - could not find any stock with ${h.t ? "thickness " + h.t : "no thickness set"}`
        }), e === "linear" && !h.stockMatch.width && new V({
          item: h,
          field: [["w"]],
          message: `widths must match for linear calculations - could not find any stock with ${h.w ? "width " + h.w : "no width set"}`
        })) : new V({
          item: h,
          field: [["l"], ["w"]],
          message: "Will not fit on any stock - check dimensions, min spacing, trim & orientation lock"
        });
      h.stockMatch = null;
    }
  }
  const a = i.filter((h) => !h.stockLock || !h.stockLock.length).sort(Mi.ID), u = t.filter((h) => !l.has(h.parentID)).sort(Mi.ID);
  return t = t.filter((h) => It(h)).filter((h) => l.has(h.parentID)), (r || o) && (i = i.filter((h) => {
    var b;
    return (b = h == null ? void 0 : h.stockLock) == null ? void 0 : b.length;
  })), {
    stockList: t,
    unusableStock: u,
    shapeList: i,
    unusableShapes: a
  };
}
class V {
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
    var u, h, b, S;
    this.message = _e(e, { ns: ["main", "errors"] }), this.field = s, this.index = n, this.type = o, t && ("name" in t && ((u = t.name) != null && u.length) ? this.identifier = t.name.toLocaleUpperCase() : "id" in t && ((h = t.id) != null && h.length) ? this.identifier = t.id : "parentID" in t && ((b = t.parentID) != null && b.length) ? this.identifier = t.parentID : typeof ((S = this == null ? void 0 : this.index) == null ? void 0 : S[0]) == "number" && (this.identifier = String(this.index[0] + 1)), "issues" in t && Array.isArray(t.issues) && t.issues.push(this)), Array.isArray(r) && r.push(this);
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
function Ct(i) {
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
const Yt = ({ item: i, field: t, index: e, newIssues: s, min: n = null, max: r = null, required: o = !1, allowZero: l = !0, isWarning: a = !1 }) => {
  let u = zt(i, t);
  if (o && (u == null || u === ""))
    return new V({
      item: i,
      message: _e("not_set", { x: Re[t.join(".")] }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), null;
  if (!l && u === 0)
    return new V({
      item: i,
      message: _e("greater_than", { x: Re[t.join(".")], y: 0 }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), 0;
  if (u == null || u === "") return null;
  try {
    u = O(u);
  } catch {
    return ho({
      item: i,
      field: t,
      value: zt(i, t),
      index: e,
      issues: s,
      isWarning: a
    }), null;
  }
  return fo({ item: i, field: t, value: u, index: e, issues: s, min: n, isWarning: a }), po({ item: i, field: t, value: u, index: e, issues: s, max: r, isWarning: a }), u;
}, ho = ({ item: i, field: t, value: e, index: s, issues: n, isWarning: r }) => {
  new V({
    item: i,
    message: _e("not_understood", { x: t.join("."), y: e }),
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, fo = ({ item: i, field: t, value: e, index: s, issues: n, min: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e < r && new V({
    item: i,
    message: _e("greater_than_or_equal", { x: Re[t.join(".")], y: r }),
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, po = ({ item: i, field: t, value: e, index: s, issues: n, max: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e > r && new V({
    item: i,
    message: _e("less_than_or_equal", { x: Re[t.join(".")], y: r }),
    field: [t],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, go = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "banding" in i && typeof i.banding != "object" && new V({
    item: i,
    message: _e("must_be_object", { x: "banding" }),
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, mo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "x" in i && Yt({ item: i, field: ["x"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, yo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "y" in i && Yt({ item: i, field: ["y"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, vo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "l" in i && Yt({ item: i, field: ["l"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, bo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "w" in i && Yt({ item: i, field: ["w"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, wo = ({ item: i, index: t, max: e, isWarning: s, saw: n }) => {
  const r = [];
  return "t" in i && ((n == null ? void 0 : n.cutType) === "beam" && !i.t && new V({
    item: i,
    message: _e("thickness_required_for_beam_saw"),
    field: [["t"]],
    index: [t],
    type: "error",
    issues: r
  }), Yt({ item: i, field: ["t"], index: t, newIssues: r, allowZero: !1, min: 0, max: e, isWarning: s })), r;
}, So = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "q" in i && O({ v: i.q }) <= 0 && (!("autoAdd" in i) || (i == null ? void 0 : i.autoAdd) === !1) && new V({
    item: i,
    message: _e("greater_than_or_equal", { x: Re.q, y: 0 }),
    field: [["q"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, ko = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("orientationLock" in i) || i.orientationLock === void 0 || i.orientationLock === null || i.orientationLock === "") return s;
  const n = i.orientationLock.toLowerCase();
  return n !== "l" && n !== "w" && new V({
    item: i,
    message: _e("must_be_values", { x: Re.orientationLock, y: "l, w" }),
    field: [["orientationLock"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, xo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("grain" in i) || i.grain === void 0 || i.grain === null || i.grain === "") return s;
  const n = i.grain.toLowerCase();
  return n !== "l" && n !== "w" && new V({
    item: i,
    message: _e("must_be_values", { x: Re.grain, y: "l, w" }),
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
    return new V({
      item: i,
      message: _e("must_be_object", { x: Re.customData }),
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const r in n) {
    const o = n[r];
    o != null && (["string", "number", "boolean"].includes(typeof o) || new V({
      item: i,
      message: _e("must_be_string_number_boolean", { x: Re.customData }),
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
  const r = O({ v: t }), o = O({ v: i.l }), l = O({ v: i.w }), a = o - r * 2, u = l - r * 2;
  return (a <= 0 || u <= 0) && new V({
    item: i,
    message: _e("too_much_trim", { x: "part", y: r, z: `${a}x${u}` }),
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
  if (!It(i) || It(i) && !(i != null && i.trimmed)) {
    const o = ["l", "w"], [l, a] = o.map((u) => O(i[u]));
    for (const u in i.trim)
      Yt({ item: i, field: ["trim", u], index: t, newIssues: r, min: e, max: s });
    if (r.length) return r;
    if (l && a && l > 0 && a > 0) {
      const u = O({ v: i.trim.x1 }), h = O({ v: i.trim.x2 }), b = O({ v: i.trim.y1 }), S = O({ v: i.trim.y2 }), d = (u || 0) + (h || 0), g = (b || 0) + (S || 0);
      d >= l && new V({
        item: i,
        message: _e("too_much_trim", {
          x: `${Re.x1.toUpperCase()} + ${Re.x2.toUpperCase()}`,
          y: Re.w,
          z: l
        }),
        field: [["trim", "x1"], ["trim", "x2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      }), g >= a && new V({
        item: i,
        message: _e("too_much_trim", {
          x: `${Re.y1.toUpperCase()} + ${Re.y2.toUpperCase()}`,
          y: Re.l,
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
    u.fit || new V({
      item: i,
      message: "will_not_fit",
      field: [["l"], ["w"]],
      index: [n],
      type: r ? "warning" : "error",
      issues: o
    }), u.material || new V({
      item: i,
      message: "no_matching_stock_material",
      field: [["material"]],
      index: [n],
      issues: o
    }), u.thickness || new V({
      item: i,
      message: "no_matching_stock_thickness",
      field: [["t"]],
      index: [n],
      issues: o
    }), !u.width && e === "linear" && new V({
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
}, We = {
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
  if (!pi.includes(t) || !i.machining.corners) return 0;
  const s = hn(i, t);
  return e * s;
}
function hn(i, t) {
  if (!pi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Fi(i, t, e, s) {
  Object.keys(t).forEach((n) => {
    var r, o;
    n in i && ((r = t[n]) != null && r.min && O({ v: i[n] }) < O({ v: t[n].min }) ? e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${t[n].min}.`,
      fields: [n]
    }) : (o = t[n]) != null && o.max && O({ v: i[n] }) > O({ v: t[n].max }) && e.push({
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
    return dt[this.face];
  }
  getXDrawPosition(t) {
    let e = 0;
    const s = O({ v: this.x });
    return t.rot ? e = t.l - O({ v: this.y }) + ("x" in t ? O({ v: t.x }) : 0) : e = s + ("x" in t ? O({ v: t.x }) : 0), e;
  }
  getYDrawPosition(t, e, s) {
    let n = t.rot ? O({ v: this.x }) : O({ v: this.y });
    return n += "y" in t ? O({ v: t.y }) : 0, e === 1 && (s ? n = O({ v: s.w }) - n : n = O({ v: t.w }) - n), n;
  }
  shouldShow(t, e) {
    return this.face === e || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || O({ v: this.depth }) >= O({ v: t.t });
  }
  getDistanceToEdge(t) {
    const e = this.x, s = this.y, n = this.diameter / 2, r = O({ v: t.getLongSide() }), o = O({ v: t.getShortSide() }), l = t.machining.corners.map((g) => g.type ? g.size : 0), a = [
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
    ], u = t.machining.corners.map((g, k) => {
      const _ = k === 0 || k === 3, z = k < 2, j = _ ? e : r - e;
      let Y = null;
      this.face === 0 ? Y = z ? s : o - s : this.face === 1 && (Y = z ? o - s : s);
      const J = Math.sqrt(j * j + Y * Y);
      return {
        c: g,
        distance: J
      };
    }), h = Math.min(...a.map((g) => g.distance)), b = Math.min(...u.map((g) => g.distance)), S = u.findIndex((g) => g.distance === b), d = t.machining.corners[S];
    if (d && d.type === "radius") {
      let g = S === 0 || S === 3 ? 0 : r, k = S < 2 ? 0 : o;
      const _ = S < 2;
      g += S === 0 || S === 3 ? l[S] : -l[S], k += _ ? l[S] : -l[S];
      const j = e - g, Y = S < 2;
      let J;
      this.face === 0 ? J = Y ? s : o - s : this.face === 1 && (J = Y ? o - s : s);
      const re = J - k, W = Math.sqrt(j * j + re * re), X = l[S] - W - n;
      let m = !1;
      return d.index === 0 ? m = e <= g && J <= k : d.index === 1 ? m = e >= g && J <= k : d.index === 2 ? m = e >= g && J >= k : d.index === 3 && (m = e <= g && J >= k), m && X < h ? X : h;
    } else if (d && d.type === "bevel") {
      let g, k, _;
      d.index === 0 ? (g = 1, k = 1, _ = -d.size) : d.index === 1 ? (g = 1, k = -1, _ = -r + d.size) : d.index === 2 ? (g = 1, k = 1, _ = -r - o + d.size) : d.index === 3 && (g = -1, k = 1, _ = -o + d.size);
      const z = d.index === 0 ? 1 : -1, j = (g * e + k * s + _) / Math.sqrt(g * g + k * k) * z - n;
      return j < h ? j : h;
    } else
      return h;
  }
  validate(t, e, s = null) {
    const n = [];
    if (!C(this.x) || !C(this.y) || !C(this.diameter)) {
      const o = {
        index: e,
        message: "X, Y & diameter are all required.",
        fields: []
      };
      this.x || o.fields.push("x"), this.y || o.fields.push("y"), this.diameter || o.fields.push("diameter"), n.push(o);
    }
    return O({ v: this.diameter }) <= 0 && n.push({
      index: e,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), O({ v: this.depth }) < 0 && n.push({
      index: e,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && O({ v: t.t }) > 0 && O({ v: this.depth }) > O({ v: t.t }) && n.push({
      index: e,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && O({ v: this.depth }) > 0 && n.push({
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
    positionLimit: b = 0
  }, S) {
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
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = u, this.minimumHoleDistance = h, this.positionLimit = b, S && this.createHoles(S);
  }
  getFace() {
    return dt[this.face];
  }
  getHoleSpacing() {
    const t = O({ v: this.hingeLength }) - O({ v: this.outerSpacing }) * 2, e = this.numHoles - 1;
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
        s = t.getLongSide() - O({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = O({ v: this.position }) + O({ v: this.outerSpacing }) + n * e;
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
        s = O({ v: this.position }) + O({ v: this.outerSpacing }) + n * e;
        break;
      case "y1":
        s = O({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = t.getShortSide() - O({ v: this.distanceFromEdge });
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
    return this.type && O({ v: this.size }) <= 0 && n.push({
      index: e,
      message: "Corner size cannot be zero or negative"
    }), this.type && O({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
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
    s.length && new V({
      item: t,
      index: e,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    }), n.length && new V({
      item: t,
      index: e,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new V({
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
    const b = new Is({
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
    return this.hingeHoles.push(b), b;
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
    this.listId = t != null && t.listId ? t.listId : Date.now().toString() + Math.ceil(Math.random() * 1e16), this.id = t == null ? void 0 : t.id, this.shapes = C(t == null ? void 0 : t.shapes) ? t.shapes.map((s) => s.toString()) : [], this.shapeListIds = C(t == null ? void 0 : t.shapeListIds) ? t.shapeListIds : [], this.direction = C(t == null ? void 0 : t.direction) ? t.direction : "l", this.q = C(t == null ? void 0 : t.q) ? t.q : 1, C(t == null ? void 0 : t.shapeList) && ((e = t.shapeList) != null && e.length) && this.validate(t.shapeList);
  }
  validate(t = []) {
    var o, l;
    if (this.issues = [], !(t != null && t.length))
      throw new Error("shapeList is required to validate user group");
    const e = this.findShapes(t);
    if (!e.length)
      return new V({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    const s = e[0];
    if (gt(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new V({
          item: this,
          message: "Must have 2 or more parts."
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new V({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    if (e.forEach((a, u) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new V({
        item: this,
        field: [["orientationLock"]],
        message: `Part in position ${u + 1} must have orientation lock set to be part of a group.`
      });
    }), this.issues.length) return this.issues;
    const n = Rt(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, u) => {
      if (a.id === s.id) return;
      const h = a.getTrimmedDimensions(!0)[n];
      ce.equalTo(h, r) || new V({
        item: this,
        message: `Part in position ${u + 1} final ${n === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${h}. Check the dimensions, trim & orientation lock.`
      });
    }), this.issues;
  }
  findShapes(t = []) {
    var s, n;
    if (!t.length) return [];
    let e = [];
    if (He(t[0])) {
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
    if (!gt(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((h) => {
      const b = s.findIndex((S) => !S.inUserGroup && S.parentID === h.parentID);
      if (b === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(b, 1), h.setRotationToOrientationLockWithoutContainer(), h.inUserGroup = !0;
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
    l < 0 && new V({
      message: "Cannot find at least one part in the list.",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new V({
      message: `Not enough of part ${a != null && a.name ? a.name : l + 1} to form groups - ${o} needed, ${a.q ?? 0} found.`,
      issues: n
    });
  }
  return e && i.forEach((r) => {
    const o = r.validate(t);
    o != null && o.length && n.push(...o);
  }), n;
}
const pt = ["y1", "y2", "x1", "x2"], pi = ["a", "b", "c", "d"], Pt = [...pt, ...pi], dt = ["a", "b"];
function fn(i) {
  return pi.includes(i);
}
function Ro(i) {
  return Pt.includes(i);
}
const Re = {
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
  return pt.map((t) => i[t] ?? null);
}
function Mt(i) {
  if (!C(i) || typeof i != "object") return {};
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
    const o = new Tt(r);
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
      s.shapes = s.shapes.map((l) => new mt(l));
      try {
        n = new lt(s);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      n = new mt(s);
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
  function n(S = !1, d = "l") {
    var g, k;
    return ce.equalTo(
      t[S ? Rt(d) : d],
      i[d]
    ) || ce.lessThanOrEqualTo(t[S ? Rt(d) : d], i[d] - (Zi(i) ? (k = (g = i == null ? void 0 : i.saw) == null ? void 0 : g.options) == null ? void 0 : k.minSpacing : 0));
  }
  function r(S = !0) {
    return t.forceRotate(s), S;
  }
  const o = t.getNecessaryOrientation(i);
  let l = null;
  if (o && (l = o === "l" ? 0 : 1), t.orientationLock) {
    if (C(e) && e !== l)
      return r(!1);
    t.forceRotate(l);
  } else C(e) && t.forceRotate(e);
  if (l && t.rot !== l)
    return r(!1);
  const a = n(!1, "l"), u = n(!1, "w"), h = n(!0, "l"), b = n(!0, "w");
  return C(e) || o ? r(a && u) : r(a && u || h && b);
}
function _i(i, t, e = "decimal", s = !1) {
  return C(i == null ? void 0 : i[t]) ? O({ v: i[t], nf: e, pl: s }) : null;
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
    // type: StockType = null;
    c(this, "autoAdd", !1);
    c(this, "used");
    c(this, "saw");
    c(this, "preventGrainRotation");
    c(this, "allowExactFitShapes");
    c(this, "issues", []);
    c(this, "warnings", []);
    c(this, "notes", "");
    var o, l;
    t = Mt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ns(), ["l", "w", "t"].forEach((a) => {
      this[a] = _i(t, a, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? di(Ei(t.q)) ? null : Ei(t.q) : null, this.autoAdd = C(t.autoAdd) ? t.autoAdd : !1, this.name = C(t.name) ? Ni(t.name).toUpperCase() : "", this.material = C(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((a) => {
      this.trim[a] = _i(t.trim, a, e, s);
    }), this.cost = C(t.cost) ? t.cost : null, t.grain = (o = t == null ? void 0 : t.grain) == null ? void 0 : o.toLowerCase(), (t == null ? void 0 : t.grain) === " " && (t.grain = ""), this.grain = t.grain, this.grain = C(t.grain) && ["l", "w"].includes(t.grain.toLowerCase()) ? t.grain.toLowerCase() : "", this.multiEdit = t.multiEdit, this.allowExactFitShapes = C(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.preventGrainRotation = !0, this.notes = t != null && t.notes ? (l = t.notes) == null ? void 0 : l.replace(/,/g, " ") : "";
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
  validate(t) {
    return this.issues = [], ["l", "w", "t"].forEach((e) => We[e]({ item: this, saw: t })), We.trim({ item: this }), ["q"].forEach((e) => We[e]({ item: this, isWarning: !0 })), this.issues = this.issues.filter((e) => e), this.issues;
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
      pt.map((t) => [t, 0])
    ));
    c(this, "banding", Object.fromEntries(
      Pt.map((t) => [t, !1])
    ));
    c(this, "bandingOptions", Object.fromEntries([
      ...Pt,
      "all"
    ].map((t) => [t, {}])));
    c(this, "finish", Object.fromEntries(
      dt.map((t) => [t, ""])
    ));
    c(this, "finishOptions", Object.fromEntries(
      dt.map((t) => [t, {}])
    ));
    var r, o, l, a, u;
    t = t = Mt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ns(), ["l", "w", "t"].forEach((h) => {
      this[h] = _i(t, h, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? di(Ei(t.q)) ? null : Ei(t.q) : null, this.name = C(t.name) ? Ni(t.name).toUpperCase() : "", this.material = C(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, this.notes = t != null && t.notes ? (r = t.notes) == null ? void 0 : r.replace(/,/g, " ") : "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [];
    for (const h of Object.keys(this.trim))
      this.trim[h] = _i(t.trim, h, e, s);
    for (const h of Object.keys(this.banding))
      this.banding[h] = C((o = t == null ? void 0 : t.banding) == null ? void 0 : o[h]) ? t.banding[h] : !1;
    for (const h of Object.keys(this.bandingOptions))
      this.bandingOptions[h] = C((l = t == null ? void 0 : t.bandingOptions) == null ? void 0 : l[h]) ? t.bandingOptions[h] : {};
    for (const h of Object.keys(this.finish))
      this.finish[h] = C((a = t == null ? void 0 : t.finish) == null ? void 0 : a[h]) ? t.finish[h] : "";
    for (const h of Object.keys(this.finishOptions))
      this.finishOptions[h] = C((u = t == null ? void 0 : t.finishOptions) == null ? void 0 : u[h]) ? t.finishOptions[h] : {};
    this.orientationLock = C(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new dn(t.machining ?? {
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
          Pt.map((e) => [e, !1])
        );
        break;
    }
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  getLongSide() {
    return O({ v: this.l }) > O({ v: this.w }) ? O({ v: this.l }) : O({ v: this.w });
  }
  getShortSide() {
    return O({ v: this.l }) < O({ v: this.w }) ? O({ v: this.l }) : O({ v: this.w });
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
    let e = { l: O({ v: this.l }), w: O({ v: this.w }) };
    return t && (e = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: e.l - (O({ v: this.trim.x1 }) + O({ v: this.trim.x2 })),
      w: e.w - (O({ v: this.trim.y1 }) + O({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, e) {
    if (!this.readonly)
      if (t = O({ v: t }), this.trim) {
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
    useInventory: r = !1,
    saw: o = null
  }) {
    return this.issues = [], ["l", "w", "t"].forEach((l) => We[l]({ item: this, index: e, saw: o })), n = O({ v: n }), We.partTrim({ item: this, partTrim: n, index: e }), We.trim({ item: this, index: e }), We.machining({ item: this, index: e }), ["q"].forEach((l) => {
      We[l]({ item: this, index: e, isWarning: !0 });
    }), t.length && !r && We.stockMatch({ item: this, inputStockList: t, stockType: s, partTrim: n, index: e, isWarning: !0 }), this.issues = this.issues.filter((l) => l), this.issues;
  }
}
class Xt {
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
      pt.map((t) => [t, 0])
    ));
    c(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    this.issues = [];
    const e = [];
    ["x", "y", "l", "w", "t"].forEach((s) => e.push(...We[s]({ item: t }))), this.issues.push(...We.customData({ item: t })), this.issues.push(...e.filter((s) => s));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = C(t.id) ? t.id.toString() : this.id || null, this.setParentID(), C(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = C(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = Lr(Ni(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, C(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = C(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = C(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && C(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.trimmed = C(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = C(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
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
      if (!C(a))
        return this[l.key] = this[l.key] || l.default;
      typeof a == "string" && (a = O({ v: a })), this[l.key] = a;
    }), !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = Rt(this.grain))), C(t == null ? void 0 : t.stock) && (It(t.stock) ? this.stock = t.stock : this.stock = new Tt(t.stock), this.stockId = this.stock.id);
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      pt.map((e) => [e, 0])
    ), !!Vt(t, !0))
      for (const e of pt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = O({ v: t[e] });
          } catch {
            s = 0, new V({ item: this, field: [["trim", e]], message: `${t[e] ?? "N/A"} is not a valid value for trim: ${e}` });
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
        return new Ut({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Ut({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Ut({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Ut({
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
    const s = new De(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new De(this.x, this.y + this.w);
    if (n.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !e)
      return [n, s];
    const r = new De(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new De(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, n, o, s];
  }
  getCorners() {
    return {
      bottomLeft: new De(this.x, this.y),
      topLeft: new De(this.x, this.y + this.w),
      topRight: new De(this.x + this.l, this.y + this.w),
      bottomRight: new De(this.x + this.l, this.y)
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
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !di(parseFloat(String(r)))).length && (C(this.l) && (this.l -= (C((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (C((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new V({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), C(this.w) && (this.w -= (C((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (C((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new V({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
    if (ht(this)) {
      if (t.id === this.id) return !0;
    } else {
      if (t.parentID === this.parentID) return !0;
      if (gt(this) && e && this.parentID !== t.parentID) return !1;
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
    const s = new Xt({
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
    return gt(this);
  }
  isSegment() {
    return qo(this);
  }
  isStock() {
    return It(this);
  }
  isGroup() {
    return ht(this);
  }
  isUserGroup() {
    return cs(this);
  }
}
class ji extends Xt {
  //used by evo
  constructor(e) {
    var s, n;
    super(e);
    // type: StockType;
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((s = e == null ? void 0 : e.saw) == null ? void 0 : s.stockType) || new V({ item: this, field: [["type"]], message: `Container type ${((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) ?? "N/A"} is not valid` }), this.setSaw(e), this.cutType) {
      case "beam":
        (!C(this.t) || this.t <= 0) && new V({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e) {
    var s, n, r, o;
    if (C(e) || (this.saw = new Lt(null)), C(e == null ? void 0 : e.saw)) {
      if (!((n = e == null ? void 0 : e.saw) != null && n.cutType)) {
        const { cutType: l, cutPreference: a } = Xi(e.saw.cutPreference);
        e.saw.cutType = l, e.saw.cutPreference = a;
      }
    } else {
      e.saw = {};
      const { cutType: l, cutPreference: a } = Xi(e.cutPreference);
      e.saw.cutType = l, e.saw.cutPreference = a, C(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), C((s = e == null ? void 0 : e.blade) == null ? void 0 : s.width) && (e.saw.bladeWidth = e.blade.width), C(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), C(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), C(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
    }
    try {
      C(e == null ? void 0 : e.saw) && (Bo(e.saw) ? this.saw = e.saw : this.saw = new Lt(e.saw)), (o = (r = this.saw) == null ? void 0 : r.issues) != null && o.length && this.issues.push(...this.saw.issues);
    } catch (l) {
      throw new Error("error creating saw", { cause: l });
    }
  }
  get cutType() {
    var e, s, n, r;
    return C((e = this == null ? void 0 : this.saw) == null ? void 0 : e.cutType) ? this.saw.cutType : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutType) ?? null;
  }
  get cutPreference() {
    var e, s, n, r;
    return C((e = this.saw) == null ? void 0 : e.cutPreference) ? this.saw.cutPreference : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.cutPreference) ?? null;
  }
  get guillotineOptions() {
    var e, s, n, r;
    return C((e = this.saw) == null ? void 0 : e.guillotineOptions) ? this.saw.guillotineOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.guillotineOptions) ?? null;
  }
  get efficiencyOptions() {
    var e, s, n, r;
    return C((e = this.saw) == null ? void 0 : e.efficiencyOptions) ? this.saw.efficiencyOptions : (s = this.stock) != null && s.isStock() ? null : ((r = (n = this == null ? void 0 : this.stock) == null ? void 0 : n.saw) == null ? void 0 : r.efficiencyOptions) ?? null;
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
    return di(e) ? 0 : e;
  }
  getStock() {
    return It(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Lt {
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
    switch (t = Mt(t), this.options = ni({}, t == null ? void 0 : t.options, {
      stockSelection: "efficiency",
      stackingMode: "dimensions",
      minSpacing: 0,
      minSpacingDimension: {}
    }), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? null, this.stockType = (t == null ? void 0 : t.stockType) ?? e, this.issues = [], ["sheet", "linear", "roll"].includes(this.stockType) || new V({ item: this, field: [["stockType"]], message: `Saw stock type: ${this.stockType} not valid` }), this.stockType || (this.stockType = "sheet"), this.cutType = t == null ? void 0 : t.cutType, this.stockType) {
      case "sheet":
        [
          "efficiency",
          "guillotine",
          "beam",
          null,
          void 0
        ].includes(this.cutType) || new V({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
      case "roll":
        ["efficiency", "guillotine", null, void 0].includes(this.cutType) || new V({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
      case "linear":
        break;
      default:
        ["none", null, void 0].includes(this.cutType) || new V({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
    }
    switch (this.cutPreference = t == null ? void 0 : t.cutPreference, this.cutType) {
      case "guillotine":
        ["l", "w", "flex"].includes(this.cutPreference) || new V({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"}` }), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && new V({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"} and stock type: ${this.stockType}` }), this.options.minSpacing = 0;
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || new V({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"}` }), this.options.minSpacing = 0;
        break;
    }
    switch (C(t == null ? void 0 : t.bladeWidth) ? typeof t.bladeWidth == "string" ? this.bladeWidth = O({ v: t.bladeWidth }) : this.bladeWidth = t.bladeWidth : this.bladeWidth = 0, (di(this.bladeWidth) || this.bladeWidth < 0) && (new V({ item: this, field: [["bladeWidth"]], message: `Saw blade width: ${this.bladeWidth ?? "N/A"} is not valid` }), this.bladeWidth = 0), this.stockType) {
      case "sheet":
        [
          "efficiency",
          "guillotine",
          "beam",
          null,
          void 0
        ].includes(this.cutType) || new V({ item: this, field: [["cutType"], ["stockType"]], message: `Invalid cut type: ${this.cutType} for stock type: ${e}` }), this.cutType === "guillotine" && (["l", "w", "flex"].includes(this.cutPreference) || new V({ item: this, field: [["cutPreference"], ["cutType"]], message: `Invalid cut preference: ${this.cutPreference} for stock type: ${e}, cut type: ${this.cutType}` })), this.cutType === "beam" && [null, void 0].includes(this.stackHeight) && new V({ item: this, field: [["stackHeight"], ["cutType"]], message: "Beam saws require a stack height to be set" }), this.cutType === "beam" && (this.cutPreference = "l"), this.cutType || (this.cutType = "efficiency");
        break;
      case "linear":
        this.cutType = null, this.cutPreference = null;
        break;
    }
    switch (this.cutType) {
      case "efficiency":
        this.efficiencyOptions = ni({}, t == null ? void 0 : t.efficiencyOptions, { primaryCompression: "y" });
        break;
      case "guillotine":
        this.guillotineOptions = ni({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null });
        break;
      case "beam":
        this.guillotineOptions = ni({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null }), this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && new V({ item: this, field: [["stackHeight"], ["cutType"]], message: "Beam saws require a stack height to be set" });
        break;
    }
  }
  clone() {
    const t = structuredClone(this);
    return new Lt(t);
  }
}
class Tt extends ji {
  constructor(e) {
    var s;
    e = Mt(e), e.preventAutoRotation = ((s = e == null ? void 0 : e.saw) == null ? void 0 : s.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
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
    delete this.stock, this._id = e == null ? void 0 : e._id, this.autoAdd = C(e == null ? void 0 : e.autoAdd) ? e.autoAdd : !1, this.allowExactFitShapes = C(e == null ? void 0 : e.allowExactFitShapes) ? e.allowExactFitShapes : !1, this.analysis = C(e.analysis) ? e.analysis : null, this.tidy = C(e == null ? void 0 : e.tidy) ? e.tidy : !1, this.algoBenchmark = null, this.used = C(e == null ? void 0 : e.used) ? e.used : !1, this.stack = C(e == null ? void 0 : e.stack) ? e.stack : !1, this.duplicatePattern = (e == null ? void 0 : e.duplicatePattern) ?? null, this.initStock(e);
  }
  initStock(e) {
    switch (this.saw.stockType) {
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
    e.autoAdd || ["q"].forEach((n) => s.push(...We[n]({ item: e }))), ["grain"].forEach((n) => s.push(...We[n]({ item: e }))), this.issues.push(...s.filter((n) => n));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = It(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
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
    return It(this.stack) || typeof this.stack == "string";
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = parseInt(s.pop()), e++), s.push(e.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Tt(r);
  }
}
class gn extends Xt {
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
class mt extends Xt {
  constructor(e) {
    e = Mt(e);
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
      Pt.map((e) => [e, !1])
    ));
    c(this, "_finish", Object.fromEntries(
      dt.map((e) => [e, ""])
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
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = C(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, C(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = C(e == null ? void 0 : e.machining) ? new dn(e.machining) : null), this.added = C(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = C(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = C(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = C(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = C(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = C(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = C(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = C(e == null ? void 0 : e.placementOrder) ? e.placementOrder : this.placementOrder || null, this.groupPlacementOrder = C(e == null ? void 0 : e.groupPlacementOrder) ? e.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (e == null ? void 0 : e.minSpacing) ?? (this.minSpacing || 0), this.priority = (e == null ? void 0 : e.priority) ?? {};
  }
  initGuillotineData(e) {
    var s, n, r, o, l, a, u, h;
    this.guillotineData = ni({}, e == null ? void 0 : e.guillotineData, {
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
    return (e = this.guillotineData) != null && e.myStripParent && (gt(this.guillotineData.myStripParent) || ht(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
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
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...We[n]({ item: e }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
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
    e = Mt(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Pt.map((s) => [s, !1])
    ), !!Vt(e, !0))
      for (const s of Pt)
        this._banding[s] = C(e == null ? void 0 : e[s]) ? e[s] : !1;
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
    return dt.map((e) => {
      var s;
      return (s = this.finish) == null ? void 0 : s[e];
    });
  }
  set finish(e) {
    if (this._finish = Object.fromEntries(
      dt.map((s) => [s, ""])
    ), !!Vt(e, !0))
      for (const s of dt)
        this._finish[s] = C(e == null ? void 0 : e[s]) ? e[s] : "";
  }
  //compress for saving / transfer
  save() {
    var e, s, n;
    delete this.group, (e = this == null ? void 0 : this.guillotineData) == null || delete e.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, Pt.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), dt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), Oo(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = Rt(e.grain)), rn([
      () => Ii(this.isInsideStock(e), `shape ${this.id} is not inside stock`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, ht(this) && this.shapes.forEach((e) => e.removeFromStock());
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
    if (!C(e))
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
    if (ht(this)) return this.orientationLock;
    if (!C(this.orientationLock)) return null;
    const s = e.getStock();
    return C(s.grain) ? this.orientationLock === s.grain ? "l" : "w" : this.orientationLock;
  }
  /**
   * get the orientation lock catering for container grain
   */
  getNecessaryOrientation(e) {
    if (!e) return this.orientationLock;
    if (ht(this)) return this.orientationLock;
    if (!C(this.orientationLock)) return null;
    if (Zi(e))
      return this.convertShapeGrainToOrientationLock(e);
    if (ht(this) || cs(this))
      return C(this.orientationLock) ? this.orientationLock : null;
  }
  /**
   * get the required grain rotation
   * checks for stock grain and part orientationLock
   * does not check for fit
   */
  getGrainRotation(e) {
    if (ht(this)) return this.rot;
    if (!C(this.orientationLock)) return null;
    const s = e.getStock();
    return !this.orientationLock || !C(s == null ? void 0 : s.grain) ? null : this.isGroup() ? this.orientationLock === "l" ? 0 : 1 : this.orientationLock === (s == null ? void 0 : s.grain) ? 0 : 1;
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
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new mt(o);
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
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.shapes = C(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = C(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = C(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = C(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = C(e == null ? void 0 : e.parent) ? e.parent : null, this.children = C(e == null ? void 0 : e.children) ? e.children : [], this.siblings = C(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = C(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = C(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = C(e == null ? void 0 : e.cutDirection) ? e.cutDirection : "l", this.hasBeamTrim = C(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1);
  }
  validateSegment(e) {
    var s, n;
    (ce.lessThanOrEqualTo(e.w, 0) || ce.lessThanOrEqualTo(e.l, 0)) && new V({
      item: this,
      message: `Zero / negative dimension - l: ${e.l}, w: ${e.w}.`,
      field: [["l"], ["w"]]
    }), (ce.lessThan(e.x, 0) || ce.lessThan(e.y, 0)) && new V({
      item: this,
      message: `Negative position - x: ${e.x}, y: ${e.y}.`,
      field: [["x"], ["y"]]
    }), e != null && e.stock && (ce.greaterThan(e.x + e.l, e.stock.l) || ce.greaterThan(e.y + e.w, e.stock.w)) && new V({
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
class lt extends mt {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = Mt(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
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
    const n = Rt(this.direction), r = this.shapes.reduce((o, l) => l[n] > o ? l[n] : o, 0);
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
    const e = Rt(this.direction);
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
function ht(i) {
  return i instanceof lt && i.type !== "user";
}
function cs(i) {
  return i instanceof lt && i.type === "user";
}
function Et(i) {
  return i instanceof ls;
}
function li(i) {
  return i instanceof as;
}
function He(i) {
  return i instanceof Ui;
}
function It(i) {
  return i instanceof Tt;
}
function Zi(i) {
  return i instanceof ji;
}
function gt(i) {
  return i instanceof mt && !(i instanceof lt);
}
function _o(i) {
  return i instanceof mt || i instanceof lt;
}
function qo(i) {
  return i instanceof us;
}
function Bo(i) {
  return i instanceof Lt;
}
function Go(i) {
  return i instanceof lt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof ls ? "inputUserGroup" : i instanceof as ? "inputStock" : i instanceof Ui ? "inputShape" : i instanceof Tt ? "stock" : i instanceof ji ? "container" : i instanceof mt && !(i instanceof lt) ? "shape" : i instanceof us ? "segment" : i instanceof gn ? "offcut" : i instanceof Lt ? "saw" : i instanceof Xt ? "rectangle" : null;
}
function Os(i, t) {
  return vr(i, t);
}
function At(i, t) {
  return zt(i, t);
}
function Ho(i, t, e) {
  br(i, t, e);
}
function C(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function Vt(i, t = !1) {
  if (!C(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => C(s) && s) : e.some((s) => C(s));
}
function Mc(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return li(e) && e.autoAdd ? s = 1 : s = C(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
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
  if (!He(e) && !Et || s === "stock") return !1;
  let r, o;
  if (He(e) ? r = e.orientationLock : Et(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || Et(e))
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
  if (!He(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? Ji(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Uo(i) {
  i.banding && (i.banding = qi(i.banding, "cc")), i.trim && (i.trim = qi(i.trim, "cc"));
}
function _c(i, t = 0) {
  return gt(i) || He(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && Uo(i)), i;
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
  inputs: xe,
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
  if ((i = xe == null ? void 0 : xe.inputStock) != null && i.value) {
    for (let e = xe.inputStock.value.length - 1; e >= 0; e--) {
      const s = xe.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && xe.inputStock.value.length > 1 || e !== 0) && Es(s.listId);
    }
    if ((t = xe == null ? void 0 : xe.inputShapes) != null && t.value)
      for (let e = xe.inputShapes.value.length - 1; e >= 0; e--) {
        const s = xe.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && xe.inputShapes.value.length > 1 || e !== 0) && Ds(s.listId);
      }
  }
}, Jo = (i, t = !1) => {
  var s, n;
  if (!t) return [];
  const e = [];
  if (!((s = xe == null ? void 0 : xe.inputShapes) != null && s.value)) return e;
  for (let r = xe.inputShapes.value.length - 1; r >= 0; r--) {
    const o = xe.inputShapes.value[r];
    if (!o) continue;
    if (!C(o.material)) {
      e.push(new V({
        item: o,
        message: "no_material",
        index: [r]
      }));
      continue;
    }
    const l = i.items.find((a) => a._id === o.material);
    (n = l == null ? void 0 : l.t) != null && n.length && (o.t ? l.t.includes(o.t) || e.push(new V({
      item: o,
      message: "invalid_thickness",
      index: [r]
    })) : e.push(new V({
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
  t.useInventory || s.push(...mn(i == null ? void 0 : i.sawData)), s.push(...Xo({
    saw: t.sawData,
    partTrim: O({ v: t.partTrim }),
    useInventory: t.useInventory
  }));
  const n = Ct(s);
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
      const d = Jo(t.materialStore, !0), g = Ct(d);
      if (g.length > 0)
        return ot({
          type: "error",
          message: e("inputs_issue", { x: "material" }),
          additional: g.map((k) => e(k.message))
        }), { valid: !1 };
    } else {
      const d = mn(), g = Ct(d);
      if (g.length > 0)
        return ot({
          type: "error",
          message: e("inputs_issue", { x: "stock" }),
          additional: g.map((k) => e(k.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new Lt(t.selectedSaw) : new Lt(t.sawData), o = Ct(r.issues);
    if (o.length > 0)
      return ot({
        type: "error",
        message: e("inputs_issue", { x: "saw" }),
        additional: o.map((d) => e(d.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await Vo(r), u = Ct(a);
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
    const { shapeList: h, issues: b } = await Yo({
      orientationModel: t.orientationModel
    }), S = Ct(b);
    if (S.length > 0)
      return ot({
        type: "error",
        message: e("inputs_issue", { x: "part" }),
        additional: S.map((d) => e(d.message))
      }), { valid: !1 };
    if (!(h != null && h.length))
      return ot({
        type: "error",
        message: e("no_parts_list")
      }), { valid: !1 };
    if (((n = (s = xe.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      xe.userGroups.value.forEach((k) => k.populateParentID(xe.inputShapes.value));
      const d = Eo(
        xe.userGroups.value,
        xe.inputShapes.value
      ), g = Ct(d);
      if (g.length > 0)
        return ot({
          type: "error",
          message: e("inputs_issue", { x: "group" }),
          additional: g.map((k) => e(k.message))
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
      message: e("unexpected_error"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
  }
}
function tl(i) {
  return !i || !Vt(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
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
  ui(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((b) => b);
  if (!Array.isArray(a)) return;
  const u = Bi(i, t, e, r);
  ui(i, t, e, !!Fe(u));
}
function bn(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Bi(i, t, "all", r), u = i[o][e], h = Object.values(u || {}).filter((b) => b);
  for (const b of l)
    b !== "all" && (n.includes(b) || (ps(i, t, b, e, s, r), Array.isArray(h) || ui(i, t, b, !1), ui(i, t, b, !!Fe(a))));
}
function ui(i, t, e, s) {
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
  return t === "banding" && fn(e) && Fe(l) ? To(i, e, l) / 1e3 : l;
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
const ol = { id: "mini-stock-nav" }, ll = ["onMousedown"], al = { class: "id" }, ul = /* @__PURE__ */ Te({
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
    return (r, o) => (v(), $("div", ol, [
      (v(!0), $(we, null, Ie(e.stockList, (l, a) => (v(), $("button", {
        key: a,
        class: ke(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: Se({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        D("div", al, ie(a + 1), 1),
        es(D("div", { class: "stack legibility" }, ie(l.stack), 513), [
          [ts, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, ll))), 128))
    ]));
  }
}), Kt = (i, t) => {
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
  return v(), $("div", hl, [
    e.complete ? G("", !0) : (v(), $("svg", {
      key: 0,
      class: "loading",
      style: Se({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      zn('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, dl)),
    e.complete ? (v(), $("svg", {
      key: 1,
      class: "complete",
      style: Se({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      D("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : G("", !0),
    e.showNumber ? (v(), $("div", fl, ie(e.number), 1)) : G("", !0)
  ]);
}
const Rs = /* @__PURE__ */ Kt(cl, [["render", pl]]);
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
  return n.length && (o.sort((a, u) => {
    const h = n.indexOf(a.id), b = n.indexOf(u.id);
    return h === -1 ? 1 : b === -1 ? -1 : h - b;
  }), console.log(o)), o;
}
const vl = ["id"], bl = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, wl = /* @__PURE__ */ Te({
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
    const e = i, s = t, n = H(0), r = H(!1), o = (m, T, U, R) => {
      if (!He(U) || T === 0)
        return m;
      const M = l();
      return T === 1 || T === 2 && R !== "n" && m ? M : m;
    }, l = (m) => {
      const T = { ...e, ...m };
      if (!T.rectangle || !He(T.rectangle)) return "";
      let U = "";
      switch (T.orientationModel) {
        case 0:
          U = Y.value;
          break;
        case 1:
          T.stockGrain === "y" || T.stockGrain === "n" ? U = T.rectangle.l >= T.rectangle.w ? "l" : "w" : T.rectangle.l >= T.rectangle.w ? U = T.stockGrain : U = U = T.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          U = T.rectangle.l >= T.rectangle.w ? "l" : "w";
          break;
      }
      return U;
    }, a = () => {
      if (e.disabled || z.value.length <= 1) return;
      let m = null;
      [1, 2].includes(e.orientationModel) ? m = b() : m = h(), n.value = m;
    }, u = (m) => {
      const T = z.value.findIndex((U) => U === m);
      return T === -1 ? 0 : T;
    }, h = () => {
      let m = 0;
      return m = u(Y.value) + 1, m > z.value.length - 1 && (m = 0), m;
    }, b = () => {
      let m = 0;
      if (Y.value)
        m = z.value.findIndex((T) => T === "");
      else {
        const T = l();
        m = z.value.findIndex((U) => U === T);
      }
      return m;
    }, S = (m) => {
      s("updateOrientation", m);
    }, d = () => {
      const m = Y.value;
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
        Y.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (m !== Y.value) {
        k(m);
        return;
      }
      if (n.value = u(Y.value), !!He(e.rectangle)) {
        if (e.orientationModel === 1) {
          const T = re.value ? l() : Y.value;
          k(T);
          return;
        }
        if (e.orientationModel === 2) {
          let T;
          re.value ? T = e.stockGrain !== "n" ? l() : "" : T = Y.value, k(T);
        }
      }
    }, k = (m) => {
      n.value = u(m), S(m);
    }, _ = () => {
      const m = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], T = ["l", "w", "y", "n"], U = [0, 1, 2], R = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, M = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, oe = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, de = [];
      m.forEach((P) => {
        T.forEach((q) => {
          U.forEach((B) => {
            const ee = new Ui({
              l: P.l,
              w: P.w
            }), ge = l({
              orientationModel: B,
              rectangle: ee,
              stockGrain: q
            });
            let he = "";
            ee.l === ee.w ? he = "l === w" : ee.l > ee.w ? he = "l >= w" : he = "w > l";
            const Ne = ["l", "w", "y"].includes(q) ? R : M;
            de.push({
              Model: B,
              "Stock grain": q,
              "Stock grain description": oe[q],
              Dimensions: he,
              "Orientation lock": ge || "N/A",
              "Orientation Lock description": Ne[ge] || "N/A"
            });
          });
        });
      }), de.sort((P, q) => {
        if (P.Model !== q.Model)
          return P.Model - q.Model;
        if (P["Stock grain"] !== q["Stock grain"])
          return P["Stock grain"].localeCompare(q["Stock grain"]);
        const B = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return B[P.Dimensions] - B[q.Dimensions];
      }), console.table(de);
    }, z = Z(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Et(e.rectangle)) return ["l", "w"];
      let m = ["", "l", "w"];
      return e.rectangle.multiEdit && (m = [" ", "", "l", "w"]), j.value && (m = m.filter((T) => T !== "w")), m;
    }), j = Z(() => {
      var m, T, U, R;
      return He(e.rectangle) || li(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((m = e.rectangle) != null && m.l) && ((T = e.rectangle) != null && T.w) ? ((U = e.rectangle) == null ? void 0 : U.l) === ((R = e.rectangle) == null ? void 0 : R.w) : !1;
    }), Y = Z(() => {
      let m = "";
      return Et(e.rectangle) ? m = e.rectangle.direction : He(e.rectangle) ? m = e.rectangle.orientationLock ?? "" : li(e.rectangle) && (m = e.rectangle.grain ?? ""), m;
    }), J = Z(() => Et(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), re = Z(() => !J.value.l && !J.value.w), W = Z(() => Ji(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), X = Z(() => {
      var R;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (li(e.rectangle) || e.rectangleType === "stock")
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
      }, T = e.stockGrain || "default";
      let U = "default";
      return He(e.rectangle) || e.rectangleType === "shape" ? U = d() : Et(e.rectangle) && (U = e.rectangle.direction || "default"), ((R = m[T]) == null ? void 0 : R[U]) || m[T].default;
    });
    return Ce(n, (m, T) => {
      r.value && T !== void 0 && S(z.value[m]);
    }, { immediate: !1 }), Ce(J, (m, T) => {
      if (!e.rectangle || e.orientationModel === 0 || !He(e.rectangle) || He(e.rectangle) && (e.orientationModel === 2 && T.l && T.w && !Y.value || e.stockGrain === "n" && !Y.value))
        return;
      const U = l();
      Y.value !== U && S(U);
    }, { immediate: !1 }), Ce(() => e.stockGrain, (m, T) => {
      m !== T && g();
    }, { immediate: !0 }), at(() => {
      g(), Ye(() => {
        r.value = !0, e.debug && _();
      });
    }), (m, T) => (v(), $("div", {
      id: m.id,
      class: ke(["orientation-button", { rot: W.value, square: j.value, disabled: m.disabled, [X.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: Se({
        backgroundColor: m.buttonBackground
      }),
      onClick: a
    }, [
      X.value === "delete" ? (v(), $("svg", bl, T[0] || (T[0] = [
        D("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : G("", !0),
      X.value === "freeRotation" ? (v(), $("svg", {
        key: 1,
        class: "arrow",
        style: Se({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[1] || (T[1] = [
        D("g", null, [
          D("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          D("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          D("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          D("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : G("", !0),
      X.value === "leftRight" ? (v(), $("svg", {
        key: 2,
        class: "arrow",
        style: Se({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[2] || (T[2] = [
        D("g", null, [
          D("path", { d: "m5.408 19.408h61.095" }),
          D("g", null, [
            D("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            D("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      X.value === "topBottom" ? (v(), $("svg", {
        key: 3,
        class: "arrow",
        style: Se({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[3] || (T[3] = [
        D("g", null, [
          D("path", { d: "m19.408 66.503v-61.095" }),
          D("g", null, [
            D("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            D("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      X.value === "grainLeftRight" ? (v(), $("svg", {
        key: 4,
        class: "grain",
        style: Se({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[4] || (T[4] = [
        D("g", null, [
          D("path", { d: "m3 3h99.887" }),
          D("path", { d: "m3.113 32h99.887" }),
          D("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : G("", !0),
      X.value === "grainTopBottom" ? (v(), $("svg", {
        key: 5,
        class: "grain",
        style: Se({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[5] || (T[5] = [
        D("g", null, [
          D("path", { d: "m61 3v99.887" }),
          D("path", { d: "m32 3.113v99.887" }),
          D("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : G("", !0)
    ], 14, vl));
  }
}), Sl = ["id"], kl = /* @__PURE__ */ Te({
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
    const e = i, s = t, n = H({
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    Ce(() => e.inputShape.orientationLock, () => {
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
    }, { deep: !0, immediate: !0 }), Ce([
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
    }), (l, a) => (v(), $("div", {
      id: l.id,
      class: ke(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      D("div", {
        class: ke(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        D("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, Sl));
  }
}), xl = (i) => {
  i = i.replace(/['"]+/g, "");
  try {
    return new ai(i).valueOf();
  } catch {
    return null;
  }
};
function Cl({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = H({
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
            value: new ai(h).toFraction(!0),
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
const Ll = ["id", "value", "inputmode", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Il = /* @__PURE__ */ Te({
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
    const e = i, s = t, n = H(!0), r = H(null), {
      handleInput: o,
      handleFocus: l,
      handleBlur: a,
      handleKeydown: u,
      handleCompositionStart: h,
      handleCompositionEnd: b,
      handlePaste: S
    } = Cl({
      props: e,
      emit: s,
      isMounted: n
    });
    return is(() => {
      n.value = !1;
    }), (d, g) => (v(), $("input", ri(d.$attrs, {
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
      (...k) => x(o) && x(o)(...k)),
      onFocus: g[1] || (g[1] = //@ts-ignore
      (...k) => x(l) && x(l)(...k)),
      onBlur: g[2] || (g[2] = //@ts-ignore
      (...k) => x(a) && x(a)(...k)),
      onKeydown: g[3] || (g[3] = //@ts-ignore
      (...k) => x(u) && x(u)(...k)),
      onCompositionstart: g[4] || (g[4] = //@ts-ignore
      (...k) => x(h) && x(h)(...k)),
      onCompositionend: g[5] || (g[5] = //@ts-ignore
      (...k) => x(b) && x(b)(...k)),
      onPaste: g[6] || (g[6] = //@ts-ignore
      (...k) => x(S) && x(S)(...k))
    }), null, 16, Ll));
  }
}), Tl = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Ol = /* @__PURE__ */ Te({
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
    const e = i, s = t, n = H(!0), r = H(null), {
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
    }), (u, h) => (v(), $("input", {
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
      (...b) => x(o) && x(o)(...b)),
      onFocus: h[1] || (h[1] = //@ts-ignore
      (...b) => x(l) && x(l)(...b)),
      onBlur: h[2] || (h[2] = //@ts-ignore
      (...b) => x(a) && x(a)(...b))
    }, null, 40, Tl));
  }
}), Al = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Dl = ["disabled", "selected"], El = {
  key: 0,
  value: " "
}, Rl = ["hidden", "value", "disabled"], Ml = /* @__PURE__ */ Te({
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
    const e = i, s = t, n = H(!0), r = H(null), o = Z(() => e.options.map((h) => {
      var b, S, d;
      return {
        value: h.value,
        label: ((b = h.label) == null ? void 0 : b.toUpperCase()) ?? ((d = (S = h.value) == null ? void 0 : S.toString()) == null ? void 0 : d.toUpperCase()),
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
    return (h, b) => {
      var S, d, g, k;
      return v(), $("select", ri(h.$attrs, {
        id: e.id,
        ref_key: "inputRef",
        ref: r,
        value: e.value,
        disabled: e.readonly || e.disabled,
        required: e.required,
        "aria-label": e.ariaLabel,
        "aria-invalid": !!e.issue,
        "aria-describedby": e.errorId,
        onChange: b[0] || (b[0] = //@ts-ignore
        (..._) => x(l) && x(l)(..._)),
        onFocus: b[1] || (b[1] = //@ts-ignore
        (..._) => x(a) && x(a)(..._)),
        onBlur: b[2] || (b[2] = //@ts-ignore
        (..._) => x(u) && x(u)(..._))
      }), [
        D("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, ie(((d = (S = e.text) == null ? void 0 : S.select) == null ? void 0 : d.toUpperCase()) ?? "SELECT"), 9, Dl),
        e.multiEdit ? (v(), $("option", El, ie(((k = (g = e.text) == null ? void 0 : g.delete) == null ? void 0 : k.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
        (v(!0), $(we, null, Ie(o.value, (_) => (v(), $("option", {
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
}, Ms = /* @__PURE__ */ Te({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (v(), $("label", {
      for: t.id,
      class: "input-label"
    }, [
      jt(ie(t.label) + " ", 1),
      t.required ? (v(), $("span", _l, "*")) : G("", !0)
    ], 8, Fl));
  }
}), ql = ["data-field-id"], Bl = ["disabled", "selected"], Gl = {
  key: 0,
  value: " "
}, Hl = ["hidden", "value", "disabled"], ft = /* @__PURE__ */ Te({
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
    const e = t, s = i, n = H(null), r = H(null), o = H(!0), l = H(s.numberFormat), a = Z(() => s.custom ? "custom-" + s.id : s.id), u = Z(() => `${a.value}-error`), h = Z(() => s.label || s.placeholder), b = Z(() => X(s.type, s.numberFormat)), S = Z(() => m(s.type, s.numberFormat)), d = Z(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), g = Z(() => {
      if (s.type !== "unitDependent" || !s.value) return s.value;
      try {
        return O({ v: s.value, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), k = Z(() => s.options.map((R) => {
      var M, oe;
      return {
        value: R.value,
        label: ((M = R.label) == null ? void 0 : M.toUpperCase()) || ((oe = R.value) == null ? void 0 : oe.toString().toUpperCase()),
        hidden: R.hidden || !1,
        disabled: R.disabled || !1
      };
    })), _ = Z(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), z = Z(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": h.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), j = Z(() => ({
      ...z.value,
      type: s.type,
      inputMode: S.value,
      inputType: b.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      numberFormat: s.numberFormat
    })), Y = Z(() => ({
      ...z.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), J = Z(() => ({
      ...z.value,
      options: k.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      text: s.text
    })), re = (R) => {
      r.value = R;
    }, W = (R) => s.label && s.enableLabel && s.labelPosition === R, X = (R, M) => {
      if (R === "unitDependent")
        return M === "fraction" ? "text" : "number";
      switch (R) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, m = (R, M) => {
      if (R === "unitDependent")
        return M === "fraction" ? "text" : "decimal";
      switch (R) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, T = (R) => {
      e("update:value", R);
    }, U = (R, M) => {
      R.valid === void 0 || R.valid === !0 ? (o.value = !0, e("validation", n.value, R)) : R.valid === !1 && R.message && (o.value = !1, console.warn(`Field validation error for field ${M} - ${R.message}`), e("validation", n.value, R));
    };
    return Ce(() => s.numberFormat, (R, M) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && R !== M && s.value)
          try {
            const oe = O({ v: s.value, nf: R });
            e("update:value", oe);
          } catch {
            e("update:value", R === "decimal" ? 0 : "0");
          }
        l.value = R;
      }
    }), (R, M) => (v(), $("div", {
      ref_key: "fieldRef",
      ref: n,
      class: ke(["input-wrapper", _.value]),
      "data-field-id": a.value
    }, [
      W("first") ? (v(), pe(Ms, {
        key: 0,
        id: a.value,
        label: R.label,
        required: R.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      d.value ? (v(), pe(Il, ri({
        key: 1,
        ref: re
      }, j.value, {
        "input-type": b.value,
        "input-mode": S.value,
        value: g.value,
        onValidation: U,
        "onUpdate:value": T
      }), null, 16, ["input-type", "input-mode", "value"])) : R.type === "checkbox" ? (v(), pe(Ol, ri({
        key: 2,
        ref: re,
        type: "checkbox"
      }, Y.value, {
        checked: R.value === R.trueValue,
        "onUpdate:value": M[0] || (M[0] = (oe) => e("update:value", oe))
      }), null, 16, ["checked"])) : R.type === "select" ? (v(), pe(Ml, ri({
        key: 3,
        ref: re
      }, J.value, {
        "onUpdate:value": M[1] || (M[1] = (oe) => e("update:value", oe))
      }), {
        default: ss(() => {
          var oe, de, P, q;
          return [
            D("option", {
              value: "",
              disabled: R.selectFirstOptionDisabled,
              selected: !R.value
            }, ie(((de = (oe = R.text) == null ? void 0 : oe.select) == null ? void 0 : de.toUpperCase()) ?? "SELECT"), 9, Bl),
            R.multiEdit ? (v(), $("option", Gl, ie(((q = (P = R.text) == null ? void 0 : P.delete) == null ? void 0 : q.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
            (v(!0), $(we, null, Ie(k.value, (B) => (v(), $("option", {
              key: B.value,
              hidden: B.hidden,
              value: B.value,
              disabled: B.disabled
            }, ie(B.label), 9, Hl))), 128))
          ];
        }),
        _: 1
      }, 16)) : G("", !0),
      W("last") ? (v(), pe(Ms, {
        key: 4,
        id: a.value,
        label: R.label,
        required: R.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      Vn(R.$slots, "default")
    ], 10, ql));
  }
}), Nl = {
  key: 0,
  class: "inputs"
}, Wl = { class: "label" }, Ul = { class: "label" }, jl = { class: "label" }, zl = ["onClick"], Vl = { class: "price" }, Yl = ["aria-label"], Qi = /* @__PURE__ */ Te({
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
    const e = i, s = t, { t: n } = Gi(["main", "errors"]), r = H(!1), o = Z(() => e.extraType + "Options"), l = Z(() => {
      var k;
      if (!((k = e.allOptions) != null && k.length)) return "auto";
      const d = e.allOptions.length;
      return d ? `repeat(${d + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), a = (d, g) => {
      s("update-all", e.shape, e.extraType, d, g);
    }, u = (d, g, k) => {
      s("set", e.shape, e.extraType, d, g, k);
    }, h = (d, g, k, _, z) => {
      var re;
      if (!d) return [];
      const j = (re = g == null ? void 0 : g[k]) == null ? void 0 : re[_];
      if (!j)
        return console.error(`ExtrasInputs: cannot find pricing options for ${k} > ${_}`), [];
      const Y = Object.values(j);
      if (!Y.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${k} > ${_}`), [];
      const J = Y.filter((W) => typeof W == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(d, J, z) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, b = (d) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const g = e.getPrice(e.shape, e.extraType, d);
      return g ? e.formatPrice(g) : "";
    }, S = () => {
      const d = [];
      e.extraType in e.shape || new V(
        {
          item: e.shape,
          message: `The extra type '${e.extraType}' does not exist in the part`
        }
      ), o.value in e.shape || new V(
        {
          item: e.shape,
          message: `The options key '${o.value}' does not exist in the part`
        }
      ), d.length && (r.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + d.map((g) => g.message).join(" ")));
    };
    return at(() => S()), (d, g) => {
      var _, z, j, Y, J, re, W, X;
      const k = Ft("font-awesome-icon");
      return r.value ? G("", !0) : (v(), $("div", {
        key: 0,
        class: ke(["extras group", [d.extraType]]),
        style: Se({ "grid-column-end": "span " + d.partColumns })
      }, [
        d.allOptions.length === 1 && d.allOptions[0].length === 1 ? (v(), $("div", Nl, [
          D("div", Wl, ie((z = (_ = d.allOptions) == null ? void 0 : _[0]) == null ? void 0 : z[0]), 1),
          D("div", null, [
            (j = d.shape) != null && j[o.value] && "all" in d.shape[o.value] ? (v(), pe(ft, {
              key: 0,
              id: `${d.extraType}-all-${d.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: x(Wt)(x(n)("all")),
              "true-value": (J = (Y = d.allOptions) == null ? void 0 : Y[0]) == null ? void 0 : J[0],
              "false-value": "",
              value: (W = d.shape[o.value].all) == null ? void 0 : W[(re = d.labels) == null ? void 0 : re[0]],
              "onUpdate:value": g[0] || (g[0] = (m) => {
                var T, U;
                u("all", (T = d.labels) == null ? void 0 : T[0], m), a((U = d.labels) == null ? void 0 : U[0], m);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : G("", !0)
          ]),
          (v(!0), $(we, null, Ie(d.extraKeys, (m) => {
            var T, U, R, M, oe, de;
            return v(), $("div", { key: m }, [
              (T = d.labels) != null && T[0] && ((R = (U = d.shape) == null ? void 0 : U[o.value]) != null && R[m]) && d.labels[0] in d.shape[o.value][m] ? (v(), pe(ft, {
                key: 0,
                id: `${d.extraType}-${m}-${d.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: x(Wt)(x(n)(((M = d.userFriendlyFieldMap) == null ? void 0 : M[m]) || m)),
                "true-value": (de = (oe = d.allOptions) == null ? void 0 : oe[0]) == null ? void 0 : de[0],
                "false-value": "",
                value: d.shape[o.value][m][d.labels[0]],
                "onUpdate:value": (P) => u(m, d.labels[0], P)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : G("", !0)
            ]);
          }), 128))
        ])) : (v(), $("div", {
          key: 1,
          class: "grid inputs",
          style: Se({
            "grid-template-columns": l.value
          })
        }, [
          (X = d.shape) != null && X[o.value] && "all" in d.shape[o.value] ? (v(), $(we, { key: 0 }, [
            D("div", Ul, ie(x(Wt)(x(n)("all"))), 1),
            (v(!0), $(we, null, Ie(d.allOptions, (m, T) => {
              var U, R;
              return v(), pe(ft, {
                id: `${d.extraType}-all-${d.labels[T]}-${T}-${d.shapeIndex}`,
                key: `${d.extraType}-all-${d.labels[T]}-${T}-${d.shapeIndex}`,
                type: "select",
                disabled: h(d.pricing, d.shape, o.value, "all", T).length === 0,
                options: h(d.pricing, d.shape, o.value, "all", T).map((M) => ({ value: M, label: M })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (R = d.shape[o.value].all) == null ? void 0 : R[(U = d.labels) == null ? void 0 : U[T]],
                "onUpdate:value": (M) => {
                  var oe, de;
                  u("all", (oe = d.labels) == null ? void 0 : oe[T], M), a((de = d.labels) == null ? void 0 : de[T], M);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            g[2] || (g[2] = D("div", null, null, -1)),
            g[3] || (g[3] = D("div", null, null, -1))
          ], 64)) : G("", !0),
          (v(!0), $(we, null, Ie(d.extraKeys, (m) => {
            var T, U;
            return v(), $(we, { key: m }, [
              (T = d.shape) != null && T[o.value] && m in d.shape[o.value] ? (v(), $(we, { key: 0 }, [
                D("div", jl, ie(x(Wt)(x(n)(((U = d.userFriendlyFieldMap) == null ? void 0 : U[m]) || m))), 1),
                (v(!0), $(we, null, Ie(d.allOptions, (R, M) => {
                  var oe;
                  return v(), pe(ft, {
                    id: `${d.extraType}-${m}-${d.labels[M]}-${M}-${d.shapeIndex}`,
                    key: `${d.extraType}-${m}-${d.labels[M]}-${M}-${d.shapeIndex}`,
                    type: "select",
                    disabled: h(d.pricing, d.shape, o.value, m, M).length === 0,
                    options: h(d.pricing, d.shape, o.value, m, M).map((de) => ({
                      value: de,
                      label: de
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: d.shape[o.value][m][(oe = d.labels) == null ? void 0 : oe[M]],
                    "onUpdate:value": (de) => {
                      var P;
                      return u(m, (P = d.labels) == null ? void 0 : P[M], de);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : G("", !0),
              D("div", {
                class: "delete",
                onClick: () => x(fs)(d.shape, d.extraType, m)
              }, [
                be(k, { icon: ["fass", "trash"] })
              ], 8, zl),
              D("div", Vl, ie(b(m) || x(n)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        D("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": x(n)("action_item", { a: "delete", i: d.extraLabel }),
          onClick: g[1] || (g[1] = () => x(sl)(d.shape, d.extraType, !0))
        }, [
          be(k, { icon: ["fass", "trash"] }),
          jt(" " + ie(x(n)("action_item", { a: "delete", i: d.extraLabel })), 1)
        ], 8, Yl)
      ], 6));
    };
  }
}), Xl = ["id", "disabled"], Kl = { class: "icon" }, Zl = /* @__PURE__ */ Te({
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
      var a, u, h, b;
      const l = Ft("font-awesome-icon");
      return v(), $("button", {
        id: r.id,
        class: ke(["finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (b = (h = r.inputShape) == null ? void 0 : h.finish) == null ? void 0 : b.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        D("div", Kl, [
          be(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = D("div", { class: "indicator" }, null, -1))
      ], 10, Xl);
    };
  }
}), Jl = Te({
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
  const o = Ft("font-awesome-icon");
  return v(), $("button", {
    id: i.id,
    class: ke(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    be(o, { icon: ["fass", "hammer"] })
  ], 10, Ql);
}
const ta = /* @__PURE__ */ Kt(Jl, [["render", ea]]), ia = { id: "uploader" }, sa = {
  key: 0,
  class: "debug"
}, na = {
  key: 1,
  class: "selected-files"
}, ra = ["src"], oa = ["onClick"], la = !0, aa = /* @__PURE__ */ Te({
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
    const e = $t(() => Promise.resolve().then(() => Vi)), s = H(null), n = H({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (d) => ["image/jpeg", "image/jpg", "image/png"].includes(d.type), a = () => {
      var d;
      (d = s.value) == null || d.click();
    }, u = (d) => {
      const g = d.target, k = g.files;
      if (!k) return;
      const _ = Array.from(k), z = _.filter((m) => !l(m));
      if (z.length > 0) {
        const m = z.map((T) => T.name).join(", ");
        alert(`Invalid file type(s): ${m}
Only JPG and PNG files are allowed.`), g.value = "";
        return;
      }
      const j = n.value.files || [];
      if (j.length + _.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), g.value = "";
        return;
      }
      const J = [...j, ..._], re = h(J), W = J.map((m, T) => ({
        originalName: m.name,
        newName: `${r.prefix}-${T + 1}-${r.uniqueId}${b(m.name)}`
      })), X = {
        shapeId: r.shapeId,
        files: J,
        previewUrls: re,
        metadata: W
      };
      n.value = X, o("update", X), g.value = "";
    }, h = (d) => d.map((g) => URL.createObjectURL(g)), b = (d) => d.substring(d.lastIndexOf(".")), S = (d) => {
      URL.revokeObjectURL(n.value.previewUrls[d]);
      const g = [...n.value.files], k = [...n.value.previewUrls], _ = [...n.value.metadata];
      if (g.splice(d, 1), k.splice(d, 1), _.splice(d, 1), g.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const z = {
          shapeId: r.shapeId,
          files: g,
          previewUrls: k,
          metadata: _
        };
        n.value = z, o("update", z);
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
      const k = Ft("font-awesome-icon");
      return v(), $("div", ia, [
        i.env === "development" && la ? (v(), $("div", sa, [
          be(x(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        D("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        D("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          be(k, { icon: ["fass", "files"] })
        ]),
        (_ = n.value.files) != null && _.length ? (v(), $("div", na, [
          (v(!0), $(we, null, Ie(n.value.files, (z, j) => (v(), $("div", {
            key: j,
            class: "selected-file"
          }, [
            D("img", {
              src: n.value.previewUrls[j],
              alt: "Preview"
            }, null, 8, ra),
            D("button", {
              class: "remove-file",
              type: "button",
              onClick: (Y) => S(j)
            }, [
              be(k, { icon: ["fass", "trash"] })
            ], 8, oa)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}), ua = /* @__PURE__ */ Kt(aa, [["__scopeId", "data-v-bb77aee9"]]);
function ca(i) {
  var l;
  const t = i.x, e = i.x + i.l, s = Qe().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = Qe().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
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
  const s = Qe().domain([i, t]).range([
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
  const s = Qe().domain([i, t]).range([
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
function ci() {
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
  return this.state.debug === "guillotine" ? "" : O({ v: i.l, o: this.numberConfig }).toString();
}
function wa(i) {
  return this.state.debug === "guillotine" ? "" : O({ v: i.w, o: this.numberConfig }).toString();
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
  const n = new _t();
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
    new De(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new De(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new De(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      0 + (this.props.stock.value.trim.y1 ?? 0)
    ),
    new De(
      0 + (this.props.stock.value.trim.x1 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    ),
    new De(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    )
  ].forEach((r) => n.addPoint(r)), t = n.toArray()) : (n.addPoint(new De(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), t = n.toArray());
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
      n.stopPropagation(), Ee(this).classed("hover", !0), Ee(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), Ee(this).classed("hover", !1);
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
      n.stopPropagation(), Ee(this).classed("hover", !0);
      const r = Ee(this).attr("data-id"), o = Ee(`.ghost[data-id="${r}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), Ee(this).classed("hover", !1);
      const r = Ee(this).attr("data-id");
      Ee(`.ghost[data-id="${r}"]`).classed(
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
  ci.call(this);
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
  this.scales.scoreColorScale = oi([Dt(251, 224, 255), Dt(122, 0, 138)]).domain([e, s]);
}
function Fs(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => {
    var s;
    return (s = hi.call(this, e)) == null ? void 0 : s.toString();
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
    const e = Ee(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    var n;
    const s = Ee(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", (n = hi.call(this, e)) == null ? void 0 : n.toString());
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
    color: (r = hi.call(this, t)) == null ? void 0 : r.toString(),
    notes: t == null ? void 0 : t.notes
  };
  this.state.env === "development" && console.log(e);
  const s = new CustomEvent("partClick", {
    detail: e
  });
  if (this.selections.htmlEl.dispatchEvent(s), this.settings.app) return !1;
}
function hi(i) {
  var t;
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (i.guillotineData.firstShape)
          return Dt(252, 3, 182);
        if (i.addedAsGroup)
          return Dt(43, 156, 16);
        if (typeof i.guillotineData.myPhase == "number") {
          const e = [0, 115, 255], s = [176, 255, 231];
          return `rgb(${e.map((r, o) => Math.round(r + i.guillotineData.myPhase / 5 * (s[o] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (i.addedAsGroup !== !1)
          return Dt(43, 156, 16);
        break;
      case "priorityShapes":
        if (i != null && i.priority && ((t = i.priority) != null && t[i.stock.parentID]))
          return Dt(139, 171, 46);
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
  this.selections.cutLines.classed("completed", (b) => Cn(b, t, e)), this.selections.cutLines.classed("inside-segment", (b) => $n(b, t));
  const s = xn.call(this, i);
  if (s === !1) return;
  const n = (l = s == null ? void 0 : s.siblings) == null ? void 0 : l[(o = s.main) != null && o.hasBeamTrim ? e - 1 : e];
  if (n) {
    let b = [], S;
    const d = this.getHalfBladeWidth(i.stock), g = i.dimension === "l" ? "y" : "x";
    (i == null ? void 0 : i.dimension) === "l" ? (b = [
      [
        n.y,
        n.y + n.w
      ],
      [
        i.y1 + d,
        (s == null ? void 0 : s.main.y) + (s == null ? void 0 : s.main.w)
      ]
    ], S = [(a = i == null ? void 0 : i.distances) == null ? void 0 : a.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (b = [
      [
        n.x,
        n.x + n.l
      ],
      [
        i.x1 + d,
        (s == null ? void 0 : s.main.x) + (s == null ? void 0 : s.main.l)
      ]
    ], S = [(u = i == null ? void 0 : i.distances) == null ? void 0 : u.left, (h = i == null ? void 0 : i.distances) == null ? void 0 : h.right]), this.state.device === "desktop" && !i.isTrim && S && wn.call(this, b, S, g);
  }
}
function ja(i = null, t = "") {
  var d, g, k, _;
  if (i === null || this.selections.cutLines.empty()) return;
  const e = this.props.cuts.value[i];
  ci.call(this), zi.call(this), Ee(this.selections.cutLines.nodes()[i].parentElement).raise();
  const s = (d = e.guillotineData) == null ? void 0 : d.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (g = e == null ? void 0 : e.stock) == null ? void 0 : g.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((k = e == null ? void 0 : e.stock) == null ? void 0 : k.cutType) && s !== null && typeof s < "u" ? Na.call(this, e, s, l, t) : Wa.call(this, e, i, o, r, n), za.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = xn.call(this, e);
  if (a === !1) return;
  const { main: u, siblings: h } = a;
  if (!((_ = e == null ? void 0 : e.guillotineData) != null && _.parentSegmentID))
    return Us.call(this, [u]);
  const b = h == null ? void 0 : h.length;
  let S = [];
  if (b) {
    for (let j = b; j--; )
      h[j] && (h[j].completed = !1);
    if (e.guillotineData.segmentCutOrder === void 0 || e.guillotineData.segmentCutOrder === null)
      return;
    const z = e.guillotineData.segmentCutOrder;
    for (let j = 0; j < b; j++)
      j < z && (h[j].completed = !0);
    S.push(...h), S = S.filter((j) => j);
  }
  S.length && Us.call(this, S);
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
  }), ci.call(this), zi.call(this);
}
function Ya(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Pn(i, t) {
  return zt(i, t);
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
    c(this, "formatNumber", (t) => O({
      v: t,
      o: this.numberConfig
    }).toString());
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = Ee(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: Qe(),
      yScale: Qe(),
      yPositionScale: Qe(),
      xPositionScale: Qe(),
      yAxisScale: Qe(),
      measurementScale: Qe(),
      shapeColorScale: oi(),
      scoreColorScale: oi()
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
    }, s = (n, r) => Dt("#" + (Ya(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = oi([
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
      this.selections.svgCanvas = Ee(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, e, s) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), e && (this.numberConfig.decimalPlaces = e), s && (this.numberConfig.fractionRoundTo = s));
  }
  trimNameToFit(t, e) {
    function s(n, r, o) {
      const l = o[r], a = Ee(l);
      a.text(n.name);
      let u = a.text();
      const h = a.node();
      if (!h) return;
      let b = h.getComputedTextLength();
      const S = this.getWidthAttribute(n) - 20;
      for (; b > S && u.length > 0; )
        u = u.slice(0, -1), a.text(u.length ? u + "..." : ""), b = a.node().getComputedTextLength();
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => hi.call(this, s));
    const e = Ee(t).select("rect");
    if (e) {
      e.classed("selected", !0), e.style("fill", this.config.colors.partSelected.toString());
      const s = Ee(t).datum();
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
    return C(t) && t !== null ? t.getBladeWidth() : 0;
  }
  getHalfBladeWidth(t = null) {
    const e = this.getBladeWidth(t);
    return e !== void 0 && e > 0 ? e / 2 : 0;
  }
  // Reset Methods
  removeShapes() {
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), ci.call(this);
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
    (t = this == null ? void 0 : this.selections) != null && t.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => hi.call(this, s)), (e = this == null ? void 0 : this.selections) != null && e.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    ci.call(this);
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
const Ka = ["id"], Za = /* @__PURE__ */ Te({
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
    moveMode: { default: () => H(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape"],
  setup(i, { expose: t, emit: e }) {
    const { r: s, activeStock: n, activeShapes: r, activeCuts: o, activeSegments: l, currentCutIndex: a, getStock: u, getShapes: h, getSegments: b, getCuts: S } = Zs(), d = i, g = e, k = (se) => {
      g("shape-colour-update", se);
    }, _ = (se) => {
      se != null && se.id && g("shape-select", se.id.toString());
    }, z = (se) => {
      se && g("add-to-parts-bin", se);
    }, j = (se, tt) => {
      se && g("move-shape", se, tt);
    }, Y = H(0), J = H(0), re = H(null);
    let W, X = H(!1);
    at(() => oe());
    const m = Z(() => ({
      format: d.numberFormat,
      decimals: d.decimalPlaces
    })), T = Z(() => d.stockId ? u(d.stockId) : n.value), U = Z(() => d.stockId ? h(d.stockId) : r.value), R = Z(() => d.main ? d.stockId ? S(d.stockId) : o.value : []), M = Z(() => d.main ? d.stockId ? b(d.stockId) : l.value : []);
    Xn(re, (se) => {
      const tt = se[0], { width: it } = tt.contentRect;
      it > 0 && (Y.value = it);
    }), Kn(
      Y,
      (se) => {
        W && (se <= 0 || (W.setDevice(), W.resetShapeAxes(), W.drawAll()));
      },
      { throttle: 100 }
    ), Ce(n, (se) => {
      se && (Y.value <= 0 || (W.setDevice(), W.drawStock()));
    }), Ce(r, (se) => {
      se && (Y.value <= 0 || (W.setDevice(), W.drawShapes()));
    }), Ce(o, () => {
      Y.value <= 0 || W.drawCuts();
    }), Ce(a, () => {
      Y.value <= 0 || (W.toggleSegments(!0), W.showCut(a.value));
    }), Ce(m, (se) => {
      W.updateNumberFormat(se.format, se.decimals, null);
    });
    const oe = () => {
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
          containerHeight: J,
          containerWidth: Y,
          stock: T,
          shapes: U,
          cuts: R,
          segments: M,
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
          onShapeColourUpdate: k,
          onShapeSelect: _,
          onAddToPartsBin: z,
          onMoveShape: j
        }
      };
      W = new Xa(se), X.value = !0;
    };
    return t({
      loaded: X,
      toggleShapes: (se = !1) => {
        W && W.toggleShapes(se);
      },
      toggleCuts: (se = !1) => {
        W && W.toggleCuts(se);
      },
      toggleSegments: (se = !1) => {
        W && W.toggleSegments(se);
      },
      drawShapes: () => {
        W && W.drawShapes();
      },
      drawStock: () => {
        W && W.drawStock();
      },
      drawPositions: (se) => {
        W && W.drawPositions(se);
      },
      resetPositions: () => {
        W && W.removePositions();
      },
      findShape: (se) => {
        W && W.findShape(se);
      },
      clearSelection: () => {
        W && W.clearSelection();
      },
      resetCuts: () => {
        W && (W.toggleSegments(!1), W.resetCuts());
      },
      showCut: (se) => {
        W && (W.toggleSegments(!0), W.showCut(se));
      },
      requiresStretch: (se) => {
        W && W.requiresStretch(se);
      }
    }), (se, tt) => (v(), $("div", {
      id: se.elementId,
      ref_key: "diagramContainerRef",
      ref: re,
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
}, vu = !0, bu = /* @__PURE__ */ Te({
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
    const s = $t(() => Promise.resolve().then(() => Au)), n = $t(() => Promise.resolve().then(() => Eu)), r = $t(() => Promise.resolve().then(() => Qu)), o = $t(() => Promise.resolve().then(() => rc)), l = $t(() => Promise.resolve().then(() => Vi)), { t: a } = Gi(["main", "errors"]), { inputs: u, totalInputShapes: h, getShapeGrainSummary: b, updateNumberFormat: S, validateInputStock: d } = Ks(), { r: g, updateFromResult: k, stackedStock: _, uniqueAddedShapes: z, uniqueUsedStock: j, activeStockId: Y, setActiveStockId: J } = Zs(), { progress: re, reset: W } = ur(), { addNotice: X } = Hi(), { tip: m, update: T, hide: U } = lr(), R = i, M = e, oe = "production", de = H((navigator == null ? void 0 : navigator.language) || "en-US"), P = Zn(null), q = window.location.hostname, B = H(!1), ee = H(!0), ne = Jn("Checkout/currentURL", window.location.href), ge = ns(), he = H([]), Ne = H(!1), et = H(!1), A = H(!1), ut = H(!1), se = H(!1), tt = H(Wo()), it = H(!1), { socket: st } = ar({
      refs: {
        connected: B,
        thinking: A
      },
      callbacks: {
        onResult(f) {
          var I, F, E, te;
          const p = f.result;
          if (k(p), !((I = p.shapeList) != null && I.length) || !((F = p.stockList) != null && F.length)) {
            W(), X({
              type: "error",
              message: Le(a("no_result")),
              additional: [Le(a("check_inputs"))]
            }), A.value = !1;
            return;
          }
          qn();
          const w = {
            jobId: f.jobId,
            metadata: g.metadata.value,
            parts: z.value.map((y) => {
              var ae, Ae, ei;
              return {
                l: y.l,
                w: y.w,
                t: y == null ? void 0 : y.t,
                material: y.material,
                orientationLock: y.orientationLock,
                q: (Ae = (ae = g.metadata.value) == null ? void 0 : ae.addedPartTally) == null ? void 0 : Ae[y.parentID],
                name: y.name,
                banding: y.banding,
                finish: y.finish,
                customData: y.customData,
                stockId: ((ei = y == null ? void 0 : y.stock) == null ? void 0 : ei.id) || (y == null ? void 0 : y.stockId)
              };
            }),
            stock: j.value.map((y) => {
              var ae, Ae;
              return {
                id: y.id,
                name: y == null ? void 0 : y.name,
                l: y.l,
                w: y.w,
                t: y == null ? void 0 : y.t,
                material: y.material,
                q: (Ae = (ae = g.metadata.value) == null ? void 0 : ae.usedStockTally) == null ? void 0 : Ae[y.parentID],
                trim: y == null ? void 0 : y.trim,
                cost: y == null ? void 0 : y.cost,
                analysis: y == null ? void 0 : y.analysis
                // type: s?.type
              };
            }),
            offcuts: g.offcuts.value.map((y) => ({
              l: y.l,
              w: y.w,
              t: (y == null ? void 0 : y.t) ?? null,
              q: y.q,
              stockId: y.stockId
            })),
            inputs: {
              parts: u.inputShapes.value.map((y) => {
                const ae = { ...y };
                return delete ae.listId, ae;
              })
            }
          };
          if ((te = (E = g == null ? void 0 : g.metadata.value) == null ? void 0 : E.unplacedParts) != null && te.length) {
            const y = g.metadata.value.unplacedParts.map((ae) => ae.id).join();
            X({
              type: "warning",
              message: Le(a("parts_not_fit")) + ": " + y
            });
          }
          M("result", w), A.value = !1;
        },
        onUser(f) {
          P.value = f;
        },
        onConnectError(f) {
          X({
            type: "error",
            message: Le(a("cannot_connect")),
            additional: [f]
          });
        },
        onError(f) {
          X({
            type: "error",
            message: Le(a("error_occurred")),
            additional: [f]
          });
        }
      }
    }), yt = {
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
      partTrim: 0,
      invertL: !1
    }, K = ct(yt), Q = ct({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), Xe = H(null), Ue = H(!1), qt = H(""), Pe = H(""), $e = ct({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), qe = H([]), Me = H([]), Ot = H([]), Bt = H(!1), je = ct({
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
    }), ve = ct({
      labels: [],
      pricing: {},
      options: {},
      keys: pt
    }), Oe = ct({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), Zt = ct({
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
    }), Gt = H([]), gi = Z(() => {
      var p;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (p = qe.value[0]) == null ? void 0 : p.name,
          options: qe.value.map((w) => ({
            value: w.name,
            label: w.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: K.numberFormat === "decimal" ? "float" : "string",
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
      ], ...Gt.value];
    }), vt = Z(() => yl(
      Zt,
      gi.value,
      "parts",
      Q.stockType,
      K.fieldOrder
    )), bt = Z(() => {
      let f = vt.value.length + 1;
      return u.inputShapes.value.length > 1 && f++, f;
    }), mi = Z(() => {
      const f = {
        id: "34px",
        del: "30px",
        info: "30px"
      }, p = [];
      for (const w of vt.value)
        w.id !== "trim" && p.push(w.w ?? "minmax(20px, 1fr)");
      return p.unshift(f.id), u.inputShapes.value.length > 1 && p.push(f.del), p.join(" ");
    }), L = Z(() => ({
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
    })), N = Z(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), le = Z(() => {
      var f, p;
      return P.value ? !(P.value && ((p = (f = P.value) == null ? void 0 : f.api) != null && p.whiteLabel)) : !0;
    }), me = {
      stockType: (f) => {
        const p = ["sheet", "linear", "roll"];
        p.includes(f) || console.warn(`${f} is not a valid stockType, expected ${p.join("|")}`), Q.stockType = f, f === "linear" && (Q.cutType = null, Q.cutPreference = null);
      },
      stockSelection: (f) => {
        const p = ["efficiency", "smallest"];
        f && !p.includes(f) ? console.warn(`${f} is not a valid stockSelection, expected ${p.join("|")}`) : Q.options.stockSelection = f;
      },
      minSpacing: (f) => {
        Q.options.minSpacing = f;
      },
      stackHeight: (f) => {
        Q.stackHeight = f;
      },
      cutPreference: (f) => {
        const p = ["efficiency", "length", "width", "beam"];
        if (p.includes(f)) {
          const { cutType: w, cutPreference: I } = Xi(f);
          Q.cutType = w, Q.cutPreference = I;
        } else
          console.warn(`SmartCut - ${f} is not one of ${p.join("|")}`);
      },
      bladeWidth: (f) => {
        f >= 0 ? Q.bladeWidth = f : console.warn(`SmartCut - you provided an incorrect blade width of: ${f}`);
      },
      maxParts: (f) => {
        K.maxParts = f;
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
        for (const w in yt.enable)
          w in f && (K.enable[w] = f[w]);
        for (const w in p)
          Ve(w, At(f, [p[w]]) ?? yt.enable[p[w]]);
        se.value = At(f, ["csvImport"]) ?? yt.enable.csvImport;
      },
      colors: (f) => {
        for (const p in yt.colors)
          p in f && (K.colors[p] = f[p]);
      },
      orientationModel: (f) => {
        if (![0, 1, 2].includes(f)) {
          K.orientationModel = 0;
          return;
        }
        K.orientationModel = f;
      },
      numberFormat: (f) => {
        if (!["decimal", "fraction"].includes(f)) {
          K.numberFormat = "decimal";
          return;
        }
        K.numberFormat = f;
      },
      customFields: (f) => {
        if (!Array.isArray(f) || !(f != null && f.length)) return;
        const p = [];
        f.forEach((w, I) => {
          p.push(w), p[I].custom = !0;
          const F = Jt(w.id);
          p[I].id = F, p[I].fieldMap = "customData." + F, w.type === "checkbox" && (p[I].w = "32px"), w.type === "select" && (p[I].output = w.output ?? "string", p[I].options = w.options);
        }), Gt.value = p;
        for (const w of u.inputShapes.value)
          w.customData = f.reduce((I, F) => {
            const E = Jt(F.id);
            return I[E] = w.customData[E] || F.default || "", I;
          }, {});
      }
    }, ze = (f) => {
      if (R.debug && M("log", ["checkout init...", f]), f != null && f.options) {
        const w = f.options;
        rl(w), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((E) => {
          E in w || M("error", `${E} is a required option`);
        });
        const F = ["enable", "colors"];
        for (const E in w)
          F.includes(E) || (K[E] = w[E]), E in me && me[E](w[E]);
      }
      f.colors && "colors" in me && me.colors(f.colors), Ss("banding", f), Ss("finish", f), Ze(f), Tn(f), et.value = !0, R.debug && M("log", ["init complete"]);
      const p = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(p), Ye(() => {
        le.value && !Rn() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Be = (f, p) => {
      f && (f.orientationLock = p);
    }, Ve = (f, p = !1) => {
      gl(Zt, "parts", Q.stockType, f, p);
    }, Jt = (f) => f ? Ni(f).toLowerCase() : null, Ge = (f, p) => {
      p.valid ? U() : T({
        referenceEl: f,
        show: !0,
        content: a(`fieldValidation.${p.message}`),
        type: "error"
      });
    }, Ze = (f) => {
      var p, w, I, F, E;
      if (At(K, ["enable", "machining"]) && f != null && f.machining) {
        for (const te in je)
          f.machining[te] && (je[te] = f.machining[te]);
        if (["holes", "hingeHoles"].forEach((te) => {
          var y, ae;
          (y = f == null ? void 0 : f.machining) != null && y[te] && (je[te].enabled = (ae = f == null ? void 0 : f.machining) == null ? void 0 : ae[te].enabled);
        }), (I = (w = (p = f == null ? void 0 : f.machining) == null ? void 0 : p.corners) == null ? void 0 : w.types) != null && I.length && (je.corners.enabled = !0, je.corners.types = f.machining.corners.types), f.banding && ((E = (F = f == null ? void 0 : f.options) == null ? void 0 : F.enable) != null && E.banding)) {
          if (!ve) return;
          je.banding = {
            enabled: !0
          }, ve.options.length && (je.banding.options = ve.options), ve.labels.length && (je.banding.labels = ve.labels), Vt(ve.pricing) && (je.banding.pricing = ve.pricing);
        }
      }
    }, ue = (f = null) => {
      Xe.value = f, f && f.l && f.w ? Bt.value = !0 : alert("Please enter dimensions first");
    }, wt = () => {
      Bt.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, St = (f = []) => {
      if (Me.value = [], Ot.value = [], Ve("t", !1), !!f.length) {
        for (const p of f)
          if (p != null && p.t)
            if (typeof p.t == "string" && p.t.includes(",")) {
              const w = gs(p.t, !0);
              w.length === 2 ? (On(w), Ve("t", !0), p.t = Me.value[0]) : M("error", "bonded thickness found which does not have 2 options");
            } else Me.value.includes(p.t) || Me.value.push(p.t);
        Me.value.length > 1 && Ve("t", !0);
      }
    }, Ln = (f) => {
      var F;
      if (!f) return { thicknesses: [], bondedThicknesses: [] };
      if (!((F = qe.value) != null && F.length))
        return {
          thicknesses: Me.value,
          bondedThicknesses: []
        };
      if (!f.material) return { thicknesses: [], bondedThicknesses: [] };
      const p = qe.value.find((E) => E.name === f.material);
      if (!p) return { thicknesses: [], bondedThicknesses: [] };
      const w = [...p.thicknesses], I = [];
      for (let E = 0; E < w.length; E++) {
        const te = w[E], y = gs(te), ae = [];
        if (y.length) {
          for (const Ae of y)
            w[E] = Ae, ae.push(E);
          E++;
        }
        ae.length && I.push(ae);
      }
      return {
        thicknesses: w,
        bondedThicknesses: I
      };
    }, In = (f) => Ln(f).thicknesses.map((w) => ({
      label: w == null ? void 0 : w.toString(),
      value: w
    })), Tn = (f) => {
      var p, w;
      if ((p = f == null ? void 0 : f.stock) != null && p.some((I) => I == null ? void 0 : I.material)) {
        qe.value = [], Me.value = [], Ot.value = [];
        const I = /* @__PURE__ */ new Map();
        for (const F of f.stock) {
          if (!F.material) continue;
          const E = F.material.toUpperCase();
          I.has(E) || I.set(E, /* @__PURE__ */ new Set()), F.t != null && ((w = I.get(E)) == null || w.add(O({ v: F.t })));
        }
        qe.value = Array.from(I.entries()).map(([F, E]) => ({
          name: F,
          thicknesses: Array.from(E).sort((y, ae) => y - ae)
        })), qe.value.length > 1 && Ve("material", !0);
      } else
        St(f.stock);
    }, On = (f, p = null) => {
      if (!Array.isArray(f)) {
        M("error", "addBondedThicknesses expects an array");
        return;
      }
      const w = [];
      for (let I = 0; I < f.length; I++) {
        let F = f[I];
        K.numberFormat === "decimal" && (F = parseFloat(F)), Me.value.push(F), p && p.thicknesses.push(F), w.push(Me.value.length - 1);
      }
      Ot.value.push(w);
    }, gs = (f, p = !1) => {
      if (typeof f == "string" && f.includes(",")) {
        const w = f.split(",");
        return p ? w.map((I) => O({ v: I })) : w;
      }
      return [];
    }, An = () => {
      it.value ? En() : Dn();
    }, Dn = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), it.value = !0;
    }, En = () => {
      document.exitFullscreen && document.exitFullscreen(), it.value = !1;
    }, Rn = () => {
      var I, F;
      if ((F = (I = P.value) == null ? void 0 : I.api) != null && F.whiteLabel) return !0;
      let f = !0;
      const p = document.querySelector("#smartcut-app #credit"), w = document.querySelector("#smartcut-app #credit a");
      return [p, w].forEach((E, te) => {
        if (!E) return f = !1;
        const y = window.getComputedStyle(E);
        if (y.display === "none" || y.display === "hidden" || y.opacity === "0" || y.color === "transparent" || y.position !== "relative" || te === 1 && y.color !== "#4e4e4e" && y.color !== "rgb(78, 78, 78)")
          return f = !1;
      }), ee.value = f, f;
    }, ms = (f, p, w, I, F) => {
      ps(
        f,
        p,
        w,
        I,
        F,
        R.findExtrasPrice
      ), console.log("setExtrasOption", w, I, F, f.banding.y1, f.banding.y2);
    }, ys = (f, p, w, I) => {
      bn(
        f,
        p,
        w,
        I,
        p === "banding" ? pi : [],
        R.findExtrasPrice
      );
    }, yi = (f, p) => {
      const w = p === "banding" ? ve == null ? void 0 : ve.labels : Oe == null ? void 0 : Oe.labels;
      il(f, p, w);
      const I = ds(p);
      if (f != null && f[I])
        for (const F in f[I]) {
          const E = Bi(f, p, F, R.findExtrasPrice);
          !E && F && f[p][F] && new V({
            item: f,
            field: [[p, F]],
            type: "error",
            message: Le(a("option_not_available", { x: f[p][F], y: a(p) }))
          }), ui(f, p, F, !!E);
        }
    }, vs = (f) => {
      const p = Object.keys(f);
      return Math.max(...p.map((I) => I.split("|").length));
    }, bs = (f) => {
      const p = [], w = Object.keys(f), I = vs(f);
      for (let F = I; F--; ) p.push(/* @__PURE__ */ new Set());
      for (const F of w)
        F.split("|").forEach((te, y) => p[y].add(te));
      for (let F = 0; F < I; F++)
        p[F] = Array.from(p[F]);
      return p;
    }, vi = (f, p = [], w) => {
      if (!f) return [];
      if (w > 0 && !p[w - 1]) return [];
      const I = /* @__PURE__ */ new Set();
      for (const F of Object.keys(f)) {
        const E = F.split("|");
        if (E.length > w) {
          let te = !0;
          for (let y = 0; y < w; y++)
            if (p[y] && E[y] !== p[y]) {
              te = !1;
              break;
            }
          te && I.add(E[w]);
        }
      }
      return Array.from(I);
    }, bi = (f, p, w) => Bi(
      f,
      p,
      w,
      R.findExtrasPrice
    ), Mn = (f) => {
      const p = he.value.findIndex((w) => w.shapeId === f.shapeId);
      p !== -1 ? he.value[p] = f : he.value.push(f), window.smartcutImages = he.value;
    }, Fn = (f) => {
      he.value = he.value.filter((p) => p.shapeId !== f), window.smartcutImages = he.value;
    }, wi = (f = 1) => {
      for (let p = f; p--; ) {
        let w;
        if (u.inputShapes.value.length > 0) {
          const I = u.inputShapes.value[u.inputShapes.value.length - 1];
          w = Qt({
            material: I.material,
            t: I.t
          });
        } else
          w = Qt();
        u.inputShapes.value.push(w);
      }
    }, _n = (f) => {
      var w;
      if (R.readonly || u.inputShapes.value.length === 1) return;
      const p = u.inputShapes.value[f].listId;
      u.inputShapes.value.splice(f, 1), ((w = Xe.value) == null ? void 0 : w.listId) === p && (Xe.value = null), W();
    }, Qt = (f = {
      l: null,
      w: Q.stockType === "linear" ? ((p) => (p = u.inputStock.value[0]) == null ? void 0 : p.w)() : null,
      t: Me.value.length ? Me.value[0] : null,
      q: 1,
      material: ((w) => (w = qe.value) == null ? void 0 : w.length)() === 1 ? qe.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var F, E;
      f.id = (u.inputShapes.value.length + 1).toString();
      const I = new Ui(f, K.numberFormat);
      return (F = ve == null ? void 0 : ve.labels) != null && F.length && yi(I, "banding"), (E = Oe == null ? void 0 : Oe.labels) != null && E.length && yi(I, "finish"), I;
    }, qn = () => {
      Me.value.length && g.shapeList.value.forEach((f) => {
        if (!f.t) return;
        const p = Me.value.findIndex(
          (F) => O({ v: F }) === f.t
        ), w = Ot.value.find((F) => F.includes(p));
        if (!w) return;
        const I = Math.min(
          ...w.map((F) => Me.value[F])
        );
        f.t > I && (f.q = f.q * (f.t / I), f.t = I);
      });
    }, ws = () => {
      W(), J(null), g.stockList.value = [], g.shapeList.value = [], g.cutList.value = [];
    }, Bn = () => {
      u.inputShapes.value.length = 0, Ye(() => wi(1));
    }, Gn = async () => {
      if (M("calculating"), A.value) return !1;
      A.value = !0, ut.value = !1;
      const { valid: f, saw: p, stockList: w, shapeList: I } = await el({
        t: a,
        partTrim: K.partTrim,
        maxShapes: K.maxParts,
        orientationModel: K.orientationModel,
        sawData: Q,
        onLimit: () => {
          X({
            type: "error",
            message: a("max_parts") + " " + K.maxParts
          });
        }
      });
      if (!f) {
        M("validation-error"), A.value = !1;
        return;
      }
      ws(), R.debug && console.log(
        "SmartCut - calculating",
        "stock",
        w.map((E) => E.dimensions()),
        "parts",
        I.map((E) => E.dimensions())
      );
      const F = {
        inputs: {
          parts: u.inputShapes.value,
          stock: u.inputStock.value,
          saw: p
        },
        saw: p,
        shapeList: I,
        stockList: w,
        enableEvo: !0,
        domain: q
      };
      await st.connect(), st.emit("calculate", F);
    }, Ss = (f, p) => {
      var ei;
      if (Ve(f, !1), !f || !p || !(p != null && p[f]) || !At(K, ["enable", f])) return;
      const w = [f, "pricing"];
      if (!Os(p, w)) {
        M("error", `${w.join(".")} not found in sent data`);
        return;
      }
      const I = At(p, w);
      if (typeof I != "object") {
        M("error", `${w.join(".")} data must be an object`);
        return;
      }
      if (!Vt(I)) {
        M("error", `if provided, ${w.join(".")} data must contain some values`);
        return;
      }
      const F = Object.keys(I), E = Object.values(I);
      if (!F.length) {
        M("error", `no ${w.join(".")} pricing found`);
        return;
      }
      const te = /,/;
      for (const ti of F)
        if (te.test(ti)) {
          M("error", `${w} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (E.some((ti) => isNaN(ti))) {
        M("error", `${w} values must be a number`);
        return;
      }
      const y = vs(I), ae = [f, "labels"];
      let Ae = [];
      if (Os(p, ae))
        Ae = At(p, ae);
      else {
        M("error", `${ae.join(".")} not found`);
        return;
      }
      if (!Ae) {
        M("error", `${ae.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Ae)) {
        M("error", `${ae.join(".")} data must be an array`);
        return;
      }
      if (!(Ae != null && Ae.length)) {
        M("error", `if provided, ${ae.join(".")} data must contain values`);
        return;
      }
      if (Ae.length !== y) {
        M("error", `${ae.join(".")} length (${Ae.length}) must match the number of levels in ${w.join(".")} (${y})`);
        return;
      }
      switch (f) {
        case "banding":
          ve.labels = Ae, ve.pricing = I, ve.options = bs(I);
          break;
        case "finish":
          Oe.labels = Ae, Oe.pricing = I, Oe.options = bs(I);
          break;
      }
      if (Ve(f, !0), !!((ei = u.inputShapes.value) != null && ei.length))
        for (const ti of u.inputShapes.value)
          yi(ti, f);
    }, Si = (f, p) => {
      if (!p) return;
      f !== "info" && Object.keys($e).forEach((I) => {
        I !== f && I !== "info" && ($e[I] = null);
      });
      const w = u.inputShapes.value.indexOf(p);
      $e[f] === w ? (Xe.value = null, $e[f] = null) : (Xe.value = p, $e[f] = w);
    }, ks = (f) => {
      if (M("log", ["load event received"]), !et.value) {
        M("log", ["load event received"]);
        return;
      }
      Hn(f.detail);
    }, Hn = (f) => {
      var I, F, E;
      if (M("log", ["loading parts..."]), !f || !((F = (I = f == null ? void 0 : f.inputs) == null ? void 0 : I.parts) != null && F.length)) {
        M("log", ["could not find any parts to import"]);
        return;
      }
      u.inputShapes.value.length = 0;
      let p = 0;
      for (const te of f.inputs.parts) {
        const y = Qt(te);
        y ? (u.inputShapes.value.push(y), (E = y.issues) != null && E.length && M("log", [`SmartCut - issues found while importing part at index ${p}`, y.issues])) : M("log", [`SmartCut - error loading part at index ${p}`, te]), p++;
      }
      u.inputShapes.value.map((te) => Ct(te.issues)).flat().length && X({
        type: "error",
        message: Le(a("issues_found"))
      }), M("log", [`loaded ${u.inputShapes.value.length} parts`]);
    }, Nn = (f) => {
      u.inputShapes.value.length = 0, Ye(() => {
        var p, w;
        for (const I of f)
          I.t = ((w = (p = u.inputStock.value) == null ? void 0 : p[0]) == null ? void 0 : w.t) ?? null, u.inputShapes.value.push(Qt(I));
      });
    };
    Ce(() => R.stock, (f) => {
      if (ws(), Array.isArray(f) || console.warn("SmartCut - stock must be passed as an array"), !!(f != null && f.length)) {
        u.inputStock.value.length = 0, qe.value.length || St(f);
        for (const p of f) {
          const w = new as({
            ...p,
            autoAdd: !0,
            id: (u.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, K.numberFormat);
          u.inputStock.value.push(w);
        }
        if (u.inputStock.value.length) {
          u.inputShapes.value.length ? Ye(() => {
            u.inputShapes.value.forEach((w) => {
              if (w.material) {
                const I = qe.value.find((F) => F.name === w.material);
                I && (w.t = O({ v: I.thicknesses[0] }));
              } else
                w.t = O({ v: u.inputStock.value[0].t });
            });
          }) : Ye(() => wi(1));
          const p = d(Q);
          p.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(p))), X({
            type: "error",
            message: Le(a("stock_issue")),
            additional: p.map((w) => a(w.message))
          }));
        }
      }
    }, { immediate: !0 }), Ce(u.inputShapes, (f) => {
      M("inputs-changed"), f.forEach((p) => {
        var I;
        Q.stockType === "linear" && (p.w = (I = u.inputShapes.value[0]) == null ? void 0 : I.w);
        const w = qe.value.find((F) => F.name === p.material);
        w && (w.thicknesses.includes(O({ v: p.t })) || (p.t = O({ v: w.thicknesses[0] })));
      });
    }, { deep: !0 }), Ce(() => K.numberFormat, (f) => {
      S(f);
    }), at(async () => {
      if (Ne.value) return;
      const f = new URL(window.location.href), p = f.searchParams.toString(), w = f.origin + f.pathname + (p ? `?${p}` : "");
      ne.value !== w && (u.inputShapes.value.length = 0, wi(1)), ne.value = w, de.value = K.locale, await st.connect(), st.emit("getUserFromDomain"), window.addEventListener("smartcut/load", ks), Ne.value = !0, R.debug && M("log", [
        "ready...",
        "fields:",
        vt.value.map((I) => I.id)
      ]);
    });
    const Wn = () => {
      st && st.disconnect();
    };
    return is(() => {
      window.removeEventListener("smartcut/load", ks), Wn(), delete window.smartcutCheckout;
    }), t({
      init: ze,
      getAvailablePricingOptions: vi,
      getExtrasPrice: bi,
      formatPrice: R.formatPrice,
      findExtrasPrice: R.findExtrasPrice,
      inputShapes: u.inputShapes,
      initExtrasOptions: yi,
      createInputShape: Qt
    }), (f, p) => {
      var I, F;
      const w = Ft("font-awesome-icon");
      return v(), $(we, null, [
        be(x(s), {
          content: x(m).content,
          type: x(m).type,
          show: x(m).show,
          "reference-el": x(m).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        x(oe) === "development" && vu ? (v(), $("div", Ja, [
          p[5] || (p[5] = D("div", null, "Developer information", -1)),
          D("div", null, "options.orientationModel: " + ie(K.orientationModel), 1)
        ])) : G("", !0),
        Bt.value && ((I = Xe.value) != null && I.machining) ? (v(), pe(x(r), {
          key: 1,
          shape: Xe.value,
          "onUpdate:shape": p[0] || (p[0] = (E) => Xe.value = E),
          translate: !0,
          options: je,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": bi,
          "get-available-pricing-options": vi,
          "format-price": i.formatPrice,
          onClose: wt
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : G("", !0),
        et.value ? G("", !0) : (v(), $("div", Qa, [
          be(Rs, {
            size: 50,
            "show-number": !1
          })
        ])),
        et.value ? (v(), $("div", {
          key: 3,
          id: "smartcut-checkout",
          class: ke({ fullscreen: it.value })
        }, [
          tt.value && !i.readonly ? (v(), $("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: p[1] || (p[1] = (E) => An())
          }, [
            be(w, { icon: ["fasr", "expand"] }),
            jt(" " + ie(x(Le)(x(a)("full_screen"))), 1)
          ])) : G("", !0),
          le.value ? (v(), $("div", {
            key: 1,
            id: "credit",
            style: Se(L.value)
          }, [
            D("a", {
              title: "SmartCut | Cut list optimization software",
              style: Se(N.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, ie(x(Pr)(x(a)("powered_by"))), 5)
          ], 4)) : G("", !0),
          D("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: Se({ "grid-template-columns": mi.value })
          }, [
            x(u).inputShapes.value.length ? (v(), $("div", eu, [
              p[6] || (p[6] = D("div", { class: "cell id" }, null, -1)),
              (v(!0), $(we, null, Ie(vt.value, (E) => (v(), $("div", {
                key: E.id,
                class: ke(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(E.id) || E.type === "checkbox" }])
              }, ie(x(Le)(x(a)(E.label))), 3))), 128)),
              x(oe) === "development" ? (v(), $("div", tu, " Info ")) : G("", !0),
              x(u).inputShapes.value.length > 1 ? (v(), $("div", iu)) : G("", !0)
            ])) : G("", !0),
            (v(!0), $(we, null, Ie(x(u).inputShapes.value, (E, te) => (v(), $("div", {
              key: te,
              class: "row inputs"
            }, [
              D("div", su, [
                D("div", {
                  class: "id",
                  style: Se({
                    background: K.colors.partA,
                    color: K.colors.text
                  })
                }, ie(te + 1), 5)
              ]),
              (v(!0), $(we, null, Ie(vt.value, (y) => (v(), $("div", {
                key: y.fieldMap,
                class: ke(["cell", [`${y.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(y.id) || y.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(y.id) ? y.id === "orientationLock" ? (v(), pe(wl, {
                  key: 1,
                  id: "orientation-" + te,
                  rectangle: E,
                  disabled: i.readonly,
                  "stock-grain": x(b)(E),
                  "button-background": K.colors.button,
                  "icon-color": K.colors.buttonText,
                  "orientation-model": K.orientationModel,
                  onUpdateOrientation: (ae) => Be(E, ae)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : y.id === "banding" ? (v(), pe(kl, {
                  key: 2,
                  id: "banding-" + te,
                  "input-shape": E,
                  disabled: i.readonly,
                  "stock-grain": x(b)(E),
                  open: $e.banding === te,
                  "orientation-model": K.orientationModel,
                  onClicked: (ae) => Si("banding", E)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : y.id === "finish" ? (v(), pe(Zl, {
                  key: 3,
                  id: "finish-" + te,
                  "input-shape": E,
                  disabled: i.readonly,
                  open: $e.finish === te,
                  onClicked: (ae) => Si("finish", E)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : y.fieldMap === "machining" && tt.value ? (v(), pe(ta, {
                  key: 4,
                  id: "machining-" + te,
                  disabled: i.readonly,
                  "input-shape": E,
                  onOpen: (ae) => ue(E)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : y.fieldMap === "imageUpload" ? (v(), $("button", {
                  key: 5,
                  id: "image-upload-" + te,
                  type: "button",
                  disabled: i.readonly,
                  class: ke({ selected: $e.info === te }),
                  onClick: (ae) => Si("imageUpload", E)
                }, [
                  be(w, { icon: ["fass", "image"] })
                ], 10, nu)) : G("", !0) : (v(), pe(ft, {
                  key: 0,
                  id: y.id + "-" + te,
                  focus: !i.readonly && K.enable.focus && te === x(u).inputShapes.value.length - 1 && y.id === "l",
                  issue: x(Ls)(E, [y.fieldMap]),
                  warning: x(Ls)(E, [y.fieldMap], !0),
                  type: y.type,
                  output: y.output,
                  label: y != null && y.label ? x(Le)(x(a)(y.label)) : null,
                  placeholder: y != null && y.placeholder ? x(Le)(x(a)(y.placeholder)) : null,
                  "enable-label": !1,
                  "number-format": K.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (y == null ? void 0 : y.required) ?? !1,
                  "allow-zero": (y == null ? void 0 : y.allowZero) ?? !0,
                  options: y.id === "t" ? In(E) : y == null ? void 0 : y.options,
                  "true-value": y == null ? void 0 : y.trueValue,
                  "false-value": y == null ? void 0 : y.falseValue,
                  default: y == null ? void 0 : y.default,
                  min: typeof (y == null ? void 0 : y.min) == "number" ? y.min : null,
                  max: typeof (y == null ? void 0 : y.max) == "number" ? y.max : null,
                  custom: y == null ? void 0 : y.custom,
                  value: x(At)(E, y == null ? void 0 : y.fieldMap),
                  text: {
                    delete: x(Wt)(x(a)("delete")),
                    select: x(Wt)(x(a)("select"))
                  },
                  onValidation: Ge,
                  "onUpdate:value": (ae) => {
                    y.fieldMap && x(Ho)(E, y.fieldMap, ae);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onUpdate:value"]))
              ], 2))), 128)),
              x(oe) === "development" ? (v(), $("div", ru, [
                D("button", {
                  type: "button",
                  class: ke({ selected: $e.info === te }),
                  onClick: (y) => Si("info", E)
                }, " i ", 10, ou)
              ])) : G("", !0),
              x(u).inputShapes.value.length > 1 ? (v(), $("div", lu, [
                D("button", {
                  type: "button",
                  disabled: i.readonly,
                  class: "delete",
                  "aria-label": x(Le)(x(a)("action_item", { a: "remove", i: "part" })),
                  onClick: (y) => _n(te)
                }, [
                  be(w, { icon: ["fass", "trash"] })
                ], 8, au)
              ])) : G("", !0),
              be(x(n), {
                item: E,
                "num-columns": bt.value
              }, null, 8, ["item", "num-columns"]),
              $e.banding === te && ve.options.length > 0 ? (v(), pe(Qi, {
                key: 2,
                shape: E,
                "shape-index": te,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": ve.keys,
                "all-options": ve.options,
                pricing: ve.pricing,
                labels: ve.labels,
                "user-friendly-field-map": x(Re),
                "part-columns": bt.value,
                "get-price": bi,
                "format-price": i.formatPrice,
                "orientation-model": K.orientationModel,
                "get-available-pricing-options": vi,
                onUpdateAll: ys,
                onSet: ms
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              $e.finish === te && Oe.options.length > 0 ? (v(), pe(Qi, {
                key: 3,
                shape: E,
                "shape-index": te,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Oe.keys,
                "all-options": Oe.options,
                pricing: Oe.pricing,
                labels: Oe.labels,
                "user-friendly-field-map": x(Re),
                "part-columns": bt.value,
                "get-price": bi,
                "format-price": i.formatPrice,
                "orientation-model": K.orientationModel,
                "get-available-pricing-options": vi,
                onUpdateAll: ys,
                onSet: ms
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              $e.info === te ? (v(), $("div", {
                key: 4,
                id: "shape-info",
                style: Se({ "grid-column-end": "span " + bt.value })
              }, [
                be(x(l), {
                  data: [E == null ? void 0 : E.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : G("", !0),
              $e.imageUpload === te ? (v(), pe(ua, {
                key: 5,
                prefix: (te + 1).toString(),
                "unique-id": x(ge),
                "shape-id": E.listId,
                style: Se({ "grid-column-end": "span " + bt.value }),
                images: he.value,
                onUpdate: Mn,
                onRemove: Fn
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : G("", !0)
            ]))), 128))
          ], 4),
          D("div", uu, [
            i.readonly ? G("", !0) : (v(), $("button", {
              key: 0,
              type: "button",
              "aria-label": x(a)("action_item", { a: "add", i: "part" }),
              style: Se({ background: K.colors.button, color: K.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: p[2] || (p[2] = (E) => wi(1))
            }, [
              be(w, { icon: ["fasr", "plus-large"] }),
              jt(" " + ie(x(Le)(x(a)("action_item", { a: x(a)("add"), i: x(a)("part") }))), 1)
            ], 12, cu)),
            D("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": x(Le)(x(a)("calculate")),
              style: Se({
                background: K.colors.button,
                color: K.colors.buttonText
              }),
              disabled: !((F = x(u).inputStock.value) != null && F.length) || A.value,
              onClick: p[3] || (p[3] = (E) => Gn())
            }, [
              be(w, { icon: ["fass", "calculator"] }),
              jt(ie(x(Le)(x(a)("calculate"))), 1)
            ], 12, hu),
            i.readonly ? G("", !0) : (v(), $("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": x(Le)(x(a)("clear")),
              onClick: p[4] || (p[4] = (E) => Bn())
            }, [
              be(w, { icon: ["fass", "trash"] })
            ], 8, du)),
            D("div", fu, ie(x(h)) + ie(K != null && K.maxParts ? "/" + K.maxParts : ""), 1)
          ]),
          se.value && !i.readonly ? (v(), pe(x(o), {
            key: 2,
            ref: "import",
            "number-format": K.numberFormat,
            "custom-fields": Gt.value,
            "banding-options": ve.options,
            "banding-labels": ve.labels,
            "finish-options": Oe.options,
            "finish-labels": Oe.labels,
            onImport: Nn
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : G("", !0),
          Ue.value ? (v(), $("div", pu, [
            qt.value ? (v(), $("div", gu, ie(qt.value), 1)) : G("", !0),
            D("pre", mu, ie(Pe.value), 1)
          ])) : G("", !0),
          (K.enable.diagram ? A.value && !x(re).complete : A.value || x(re).complete) ? (v(), $("div", yu, [
            be(Rs, {
              size: 50,
              number: x(re).shapeCount,
              complete: x(re).complete,
              "show-number": K.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : G("", !0),
          es(be(Za, {
            "element-id": "diagram",
            "number-format": K.numberFormat,
            "decimal-places": K.decimalPlaces,
            colors: K.colors
          }, null, 8, ["number-format", "decimal-places", "colors"]), [
            [ts, K.enable.diagram && x(re).complete]
          ]),
          K.enable.diagram && x(_).length > 1 && x(re).complete ? (v(), pe(ul, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": x(Y),
            "stock-list": x(_),
            onShowStock: x(J)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : G("", !0)
        ], 2)) : G("", !0)
      ], 64);
    };
  }
}), Bc = /* @__PURE__ */ Kt(bu, [["__scopeId", "data-v-17e88250"]]), wu = {
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
  return v(), $("div", Su, [
    (v(!0), $(we, null, Ie(e.data, (o, l) => (v(), $("div", {
      key: l,
      class: "array-item"
    }, [
      D("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        D("div", xu, ie(n.expanded[l] ? "▼" : "▶"), 1),
        D("div", Cu, ie(e.paths[l] || l), 1)
      ], 8, ku),
      n.expanded[l] ? (v(), $("div", $u, [
        (v(!0), $(we, null, Ie(o, (a, u) => (v(), $("div", {
          key: u,
          class: "property-item"
        }, [
          D("div", Pu, ie(u) + ": ", 1),
          D("div", {
            class: ke(["value", r.getValueType(a)])
          }, ie(r.formatValue(a)), 3)
        ]))), 128))
      ])) : G("", !0)
    ]))), 128))
  ]);
}
const Iu = /* @__PURE__ */ Kt(wu, [["render", Lu]]), Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Iu }, Symbol.toStringTag, { value: "Module" })), Tu = ["data-placement"], Ou = /* @__PURE__ */ Te({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = H(null), s = H(null), n = Z(() => ({
      getBoundingClientRect: () => {
        var b;
        return ((b = t.referenceEl) == null ? void 0 : b.getBoundingClientRect()) || new DOMRect();
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
        whileElementsMounted: (b, S, d) => wr(
          b,
          S,
          d,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), u = Z(() => ({
      position: o.value.position,
      top: o.value.top,
      left: o.value.left,
      transform: o.value.transform,
      zIndex: "1000"
    })), h = Z(() => {
      if (!l.value.arrow) return {};
      const { x: b, y: S } = l.value.arrow, d = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: b != null ? `${b}px` : void 0,
        top: S != null ? `${S}px` : void 0,
        [d]: "-4px"
      };
    });
    return (b, S) => (v(), pe(Xs, { to: "body" }, [
      be(er, { name: "fade" }, {
        default: ss(() => [
          b.show && b.referenceEl ? (v(), $("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: ke(["tooltip", b.type]),
            style: Se(u.value),
            "data-placement": x(a)
          }, [
            jt(ie(b.content) + " ", 1),
            D("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: Se(h.value)
            }, null, 4)
          ], 14, Tu)) : G("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Ou }, Symbol.toStringTag, { value: "Module" })), Du = /* @__PURE__ */ Te({
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
      return v(), $(we, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (v(), $("div", {
          key: 0,
          class: "group issues",
          style: Se({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          D("pre", null, ie(t.item.issues.filter((a) => a.type === "error").map((a) => x(Le)(a.message)).flat().join(`
`)), 1)
        ], 4)) : G("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (v(), $("div", {
          key: 1,
          class: "group warnings",
          style: Se({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          D("pre", null, ie(t.item.issues.filter((a) => a.type === "warning").map((a) => x(Le)(a.message)).flat().join(`
`)), 1)
        ], 4)) : G("", !0)
      ], 64);
    };
  }
}), Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Du }, Symbol.toStringTag, { value: "Module" })), Je = {
  precisionFixed: cr,
  format: hr,
  select: Ee,
  selectAll: en,
  scaleLinear: Qe,
  scaleSequential: oi,
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
    c(this, "xScale", Je.scaleLinear());
    c(this, "yScale", Je.scaleLinear());
    c(this, "yScaleFlipped", Je.scaleLinear());
    c(this, "measurementScale", Je.scaleLinear());
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
      if (this.el = Je.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = Je.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
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
      Je.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      Je.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = Je.path(), e = this.shape.machining.corners, s = [], n = [];
    [0, 1, 2, 3].forEach((o) => {
      const l = e[o];
      l && l.type ? (s.push(l.size ? O({ v: l.size ?? 0, o: this }) : 0), n.push(l.type)) : (s.push(0), n.push(null));
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
    for (const r of pt)
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
    const n = Je.path();
    this.shape.machining.corners.forEach((r, o) => {
      if (!r.type) return;
      let l, a, u;
      switch (o) {
        case 0:
          if (!C(t.a) || t.a === !1) return;
          l = {
            x: this.xScale(0) - e,
            y: this.getYScale()(O({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(O({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!C(t.b) || t.b === !1) return;
          l = {
            x: this.xScale(this.shapeL - O({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, a = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(O({ v: r.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!C(t.c) || t.c === !1) return;
          l = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - O({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(this.shapeL - O({ v: r.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!C(t.d) || t.d === !1) return;
          l = {
            x: this.xScale(O({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - O({ v: r.size ?? 0, o: this })) + e
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
      Je.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
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
    return zt(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return zt(this, i);
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
}, Vu = { class: "id" }, Yu = ["onClick"], Xu = { class: "remove" }, Ku = { key: 5 }, Zu = !1, Ju = /* @__PURE__ */ Te({
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
    var qe, Me, Ot, Bt, je, ve, Oe, Zt, Gt, gi, vt, bt, mi;
    const e = $t(() => Promise.resolve().then(() => Vi)), s = i, n = t, r = Z(() => os(A.value)), o = Z(() => Mu.call({ options: s.options }, ["units"])), l = Z(() => {
      var N;
      if (!((N = h.value) != null && N.length)) return 0;
      if (Q.value === "banding") return 1;
      let L = Object.values(u.value).filter((le) => le.enabled).length;
      return L += 2, L;
    }), a = Z(() => {
      if (!h.value.length || Q.value === "banding") return;
      const L = {
        id: "34px",
        del: "30px"
      }, N = [];
      return h.value.forEach((le) => {
        const me = u.value[le];
        me.enabled && N.push(me.w ?? "1fr");
      }), N.unshift(L.id), N.push(L.del), N.join(" ");
    }), u = Z(() => !Q.value || Q.value === "banding" ? null : qt[Q.value]), h = Z(() => !Q.value || Q.value === "banding" ? [] : Object.keys(qt[Q.value]).filter((L) => qt[Q.value][L].enabled)), b = Z(() => Q.value ? Y() : []), S = Z(() => {
      var N, le, me, ze;
      const L = ((ze = (me = (le = (N = A.value) == null ? void 0 : N.machining) == null ? void 0 : le.corners) == null ? void 0 : me.map((Be) => {
        var Ve;
        return (Ve = Be == null ? void 0 : Be.isPresent) != null && Ve.call(Be) ? Be.getCorner() : null;
      })) == null ? void 0 : ze.filter((Be) => Be)) ?? [];
      return [...pt, ...L];
    }), d = (L = !0) => {
      L ? st.value = L : Ye(() => st.value = !1);
    }, g = () => {
      U(), R(), M(), oe();
    }, k = (L, N, le) => {
      Ye(() => {
        L[N] = le;
      });
    }, _ = (L) => {
      if (Q.value === "corners")
        switch (L) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return L;
        }
      return L + 1;
    }, z = () => Q.value !== "banding", j = (L, N = null) => {
      if (!(L != null && L.length)) return [];
      let le = "None";
      N === "depth" && (le = "Through");
      const me = [{ label: le, value: null }];
      return L.forEach((ze) => {
        const Be = ze.toString().charAt(0).toUpperCase() + ze.toString().slice(1);
        me.push({ label: Be, value: ze });
      }), me;
    }, Y = () => {
      if (!Q.value) return [];
      if (Q.value === "banding") return [];
      const L = A.value.machining[Q.value];
      return Array.isArray(L) ? L : [L];
    };
    let J = null;
    const re = () => {
      A.value && (J = new Ru({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: A.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), J.init(), it.value = !0, setTimeout(() => {
        J.updateSize();
      }, 100));
    }, W = () => {
      K.value = K.value === 0 ? 1 : 0, J.flip();
    }, X = () => {
      switch (Q.value) {
        case "holes":
          m();
          break;
        case "hingeHoles":
          T();
          break;
      }
    }, m = () => {
      A.value.machining.createHole(
        O({ v: A.value.getLongSide() }) / 2,
        O({ v: A.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        K.value
      ), J.createHoles();
    }, T = () => {
      A.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: K.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), J.createHingeHoles();
    }, U = () => {
      A.value.machining.holes.length = 0;
    }, R = () => {
      A.value.machining.hingeHoles.length = 0;
    }, M = () => {
      A.value.machining.corners.forEach((L) => {
        L.size = null, L.type = null;
      }), A.value.banding.a = !1, A.value.banding.b = !1, A.value.banding.c = !1, A.value.banding.d = !1;
    }, oe = () => {
      A.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, de = (L) => {
      switch (Q.value) {
        case "holes":
          return A.value.machining.holes.splice(L, 1);
        case "hingeHoles":
          return A.value.machining.hingeHoles.splice(L, 1);
        case "corners":
          A.value.machining.corners[L].size = null, A.value.machining.corners[L].type = null;
          return;
      }
    }, P = () => {
      switch (Q.value) {
        case "holes":
          return U();
        case "hingeHoles":
          return R();
        case "corners":
          return M();
      }
    }, q = () => {
      var L;
      if (Ue.value = [], !!s.options.banding.enabled) {
        d();
        for (const N in A.value.banding)
          A.value.banding[N] ? s.options.banding.enableTypes && ((L = s.options.banding.types) != null && L.length) && (A.value.banding[N] || Ue.value.push({
            index: N,
            message: "Please select a type"
          })) : A.value.banding[N] = "";
        d(!1);
      }
    }, B = (L) => {
      const N = Ue.value.filter((le) => le.index === L);
      return N.length ? N.map((le) => le.message) : [];
    }, ee = (L) => {
      const N = Ue.value.filter((me) => me.index === L && (me == null ? void 0 : me.fields)), le = N.map((me) => me.fields).flat();
      return N.length ? le : [];
    }, ne = (L, N) => {
      const le = ee(L);
      return le != null && le.length ? le.includes(N) : !1;
    }, ge = () => {
      n("close");
    }, he = (L) => L && typeof L.disabled == "function" ? L.disabled : !1, Ne = (L, N, le, me, ze) => {
      ps(L, N, le, me, ze, s.findExtrasPrice);
    }, et = (L, N, le, me) => {
      bn(
        L,
        N,
        le,
        me,
        [],
        s.findExtrasPrice
      );
    }, A = ir(i, "shape");
    if (!((qe = A.value) != null && qe.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const ut = H(null), se = H(null), tt = H(!1), it = H(!1), st = H(!1), yt = H(!1), K = H(0), Q = H(null), Xe = H(0), Ue = H([]), qt = ct({
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
          type: (Me = s.options.holes.diameters) != null && Me.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (Ot = s.options.holes.diameters) != null && Ot.length ? "float" : void 0,
          options: (Bt = s.options.holes.diameters) != null && Bt.length ? j(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof A.value.t < "u" && O({ v: A.value.t }) > 0,
          //[]
          required: !1,
          type: (je = s.options.holes.depths) != null && je.length ? "select" : "unitDependent",
          output: (ve = s.options.holes.depths) != null && ve.length ? "float" : void 0,
          options: (Oe = s.options.holes.depths) != null && Oe.length ? j(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof A.value.t < "u" && O({ v: A.value.t }) > 0,
          required: !1,
          type: (Zt = s.options.holes.depths) != null && Zt.length ? "select" : "unitDependent",
          output: (Gt = s.options.holes.depths) != null && Gt.length ? "float" : void 0,
          options: (gi = s.options.holes.depths) != null && gi.length ? j(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (vt = s.options.holes.diameters) != null && vt.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (bt = s.options.holes.diameters) != null && bt.length ? "float" : void 0,
          options: (mi = s.options.holes.diameters) != null && mi.length ? j(s.options.holes.diameters) : void 0
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
          options: j(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: "Size",
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? O({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? O({ v: s.options.corners.maxValue, o: s.options }) : O({ v: A.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), Pe = ct({
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
    }), $e = () => {
      var L;
      return !(!((L = A == null ? void 0 : A.value) != null && L.machining) || !tt.value || st.value);
    };
    return Ce(() => {
      var L;
      return (L = A.value) == null ? void 0 : L.listId;
    }, () => {
      $e() && re();
    }), Ce(() => {
      var L;
      return (L = A.value) == null ? void 0 : L.id;
    }, () => {
      $e() && re();
    }), Ce(Q, (L) => {
      if ($e()) {
        if (L === "banding") {
          d(), q(), d(!1);
          return;
        }
        if (!L) {
          Ue.value = [];
          return;
        }
        d(), Ue.value = A.value.machining.validate(
          A.value,
          L,
          Pe == null ? void 0 : Pe[L]
        ), L === "hingeHoles" && A.value.machining.hingeHoles.forEach((N, le) => {
          Fi(N, Pe == null ? void 0 : Pe.holes, Ue.value, le);
        }), d(!1);
      }
    }, { deep: !0, immediate: !0 }), Ce(() => {
      var L, N;
      return (N = (L = A == null ? void 0 : A.value) == null ? void 0 : L.machining) == null ? void 0 : N.holes;
    }, () => {
      $e() && (d(), Ue.value = A.value.machining.validate(
        A.value,
        "holes",
        Pe == null ? void 0 : Pe.holes
      ), J.createHoles(), d(!1));
    }, { deep: !0, immediate: !0 }), Ce(() => {
      var L, N;
      return (N = (L = A == null ? void 0 : A.value) == null ? void 0 : L.machining) == null ? void 0 : N.hingeHoles;
    }, () => {
      $e() && (d(), A.value.machining.updateHingeHoles(A.value), Ue.value = A.value.machining.validate(
        A.value,
        "hingeHoles",
        Pe == null ? void 0 : Pe.hingeHoles
      ), A.value.machining.hingeHoles.forEach((L, N) => {
        Fi(L, Pe == null ? void 0 : Pe.holes, Ue.value, N);
      }), J.createHingeHoles(), d(!1));
    }, { deep: !0, immediate: !0 }), Ce(() => {
      var L, N;
      return (N = (L = A == null ? void 0 : A.value) == null ? void 0 : L.machining) == null ? void 0 : N.corners;
    }, () => {
      if ($e()) {
        d(), Ue.value = A.value.machining.validate(
          A.value,
          "corners",
          Pe == null ? void 0 : Pe.corners
        ), A.value.machining.validate(A.value, "holes"), A.value.machining.validate(A.value, "hingeHoles"), J.createShape(), J.createHoles(), J.createHingeHoles();
        for (const L of A.value.machining.corners)
          L.isPresent() || fs(A.value, "banding", L.getCorner(), !0);
        J.createBanding(), d(!1);
      }
    }, { deep: !0, immediate: !0 }), Ce(() => {
      var L;
      return (L = A == null ? void 0 : A.value) == null ? void 0 : L.banding;
    }, () => {
      $e() && (q(), J.createBanding());
    }, { deep: !0, immediate: !0 }), at(() => {
      var N;
      if ((N = document.getElementById("machining")) == null || N.requestFullscreen(), !A.value || !A.value.l || !A.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      Ye(() => re());
      const L = document.querySelector("#smartcut-app #machining .diagram");
      ut.value || (ut.value = new ResizeObserver((le) => {
        clearTimeout(se.value ?? void 0), it.value && (se.value = window.setTimeout(() => {
          if (yt.value) {
            yt.value = !1;
            return;
          }
          le[0].contentRect.width !== Xe.value && (Xe.value = le[0].contentRect.width, Xe.value && J.updateSize());
        }, 10));
      }), ut.value.observe(L)), tt.value = !0;
    }), (L, N) => {
      var me, ze, Be, Ve, Jt;
      const le = Ft("font-awesome-icon");
      return v(), $("div", Fu, [
        L.env === "development" && Zu ? (v(), $("div", _u, [
          be(x(e), {
            data: [A.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        D("div", null, [
          D("div", qu, [
            D("button", {
              type: "button",
              class: "close",
              onClick: ge
            }, [
              be(le, { icon: ["fass", "xmark"] })
            ]),
            (me = A.value) != null && me.name ? (v(), $("div", Bu, ie(A.value.name), 1)) : G("", !0),
            D("div", Gu, ie((ze = A.value) == null ? void 0 : ze.l) + " x " + ie((Be = A.value) == null ? void 0 : Be.w) + " " + ie((Ve = A.value) != null && Ve.t ? "x " + ((Jt = A.value) == null ? void 0 : Jt.t) : null), 1),
            L.options.faces.enabled ? (v(), $("div", Hu, [
              D("div", {
                ref: "sides",
                class: ke(["sides", { flipped: K.value === 1 }]),
                onClick: W
              }, N[4] || (N[4] = [
                D("div", { class: "side-a" }, " A ", -1),
                D("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              N[5] || (N[5] = D("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : G("", !0),
            r.value ? (v(), $("button", {
              key: 2,
              onClick: g
            }, " Delete all machining ")) : G("", !0),
            D("div", Nu, [
              L.options.holes.enabled ? (v(), $("div", {
                key: 0,
                class: ke({ selected: Q.value === "holes" }),
                onClick: N[0] || (N[0] = (Ge) => Q.value = "holes")
              }, " Holes ", 2)) : G("", !0),
              L.options.hingeHoles.enabled ? (v(), $("div", {
                key: 1,
                class: ke({ selected: Q.value === "hingeHoles" }),
                onClick: N[1] || (N[1] = (Ge) => Q.value = "hingeHoles")
              }, " Hinge holes ", 2)) : G("", !0),
              L.options.corners.enabled ? (v(), $("div", {
                key: 2,
                class: ke({ selected: Q.value === "corners" }),
                onClick: N[2] || (N[2] = (Ge) => Q.value = "corners")
              }, " Corners ", 2)) : G("", !0),
              L.options.banding.enabled ? (v(), $("div", {
                key: 3,
                class: ke({ selected: Q.value === "banding" }),
                onClick: N[3] || (N[3] = (Ge) => Q.value = "banding")
              }, " Banding ", 2)) : G("", !0)
            ]),
            D("div", Wu, [
              Q.value === "holes" || Q.value === "hingeHoles" ? (v(), $("button", {
                key: 0,
                type: "button",
                onClick: X
              }, " Create ")) : G("", !0),
              Q.value && Q.value !== "banding" ? (v(), $("button", {
                key: 1,
                type: "button",
                onClick: P
              }, " Delete all ")) : G("", !0)
            ]),
            Q.value === "banding" && A.value ? (v(), pe(Qi, {
              key: 3,
              shape: A.value,
              env: L.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": S.value,
              labels: L.options.banding.labels,
              "all-options": L.options.banding.options,
              pricing: L.options.banding.pricing,
              "user-friendly-field-map": x(Re),
              "part-columns": 1,
              translate: L.translate,
              "orientation-model": 0,
              "get-price": L.getExtrasPrice,
              "format-price": L.formatPrice,
              "get-available-pricing-options": L.getAvailablePricingOptions,
              onSet: Ne,
              onUpdateAll: et
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : G("", !0),
            Q.value !== "banding" && b.value.length ? (v(), $("div", {
              key: 4,
              class: ke(["grid-table", Q.value]),
              style: Se({ "grid-template-columns": a.value })
            }, [
              D("div", Uu, [
                z() ? (v(), $("div", ju)) : G("", !0),
                (v(!0), $(we, null, Ie(u.value, (Ge, Ze, ue) => es((v(), $("div", {
                  key: ue,
                  class: "cell"
                }, ie(Ge.label ?? Ze), 1)), [
                  [ts, Ge.enabled]
                ])), 128)),
                N[6] || (N[6] = D("div", { class: "del" }, null, -1))
              ]),
              (v(!0), $(we, null, Ie(b.value, (Ge, Ze) => (v(), $("div", {
                key: Ze,
                class: "row"
              }, [
                z() ? (v(), $("div", zu, [
                  D("div", Vu, ie(_(Ze)), 1)
                ])) : G("", !0),
                (v(!0), $(we, null, Ie(h.value, (ue, wt) => (v(), $("div", {
                  key: wt,
                  class: "cell"
                }, [
                  u.value[ue].type !== "select" && u.value[ue].type !== "checkbox" ? (v(), pe(ft, {
                    key: 0,
                    id: ue + "-" + wt,
                    warning: ne(Ze, ue),
                    type: u.value[ue].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: u.value[ue].label ?? ue,
                    disabled: he(u.value[ue]),
                    value: Ge[ue],
                    units: o.value,
                    output: u.value[ue].output,
                    "onUpdate:value": (St) => k(Ge, ue, St)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : u.value[ue].type === "checkbox" ? (v(), pe(ft, {
                    key: 1,
                    id: ue + "-" + wt,
                    type: "checkbox",
                    warning: ne(Ze, ue),
                    "enable-label": !1,
                    disabled: he(u.value[ue]),
                    value: Ge[ue],
                    output: u.value[ue].output,
                    "onUpdate:value": (St) => k(Ge, ue, St)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : u.value[ue].type === "select" ? (v(), pe(ft, {
                    key: 2,
                    id: ue + "-" + wt,
                    type: "select",
                    "enable-label": !1,
                    warning: ne(Ze, ue),
                    disabled: he(u.value[ue]),
                    value: Ge[ue],
                    options: u.value[ue].options,
                    output: u.value[ue].output,
                    "onUpdate:value": (St) => k(Ge, ue, St)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : G("", !0)
                ]))), 128)),
                D("div", {
                  class: "cell",
                  onClick: (ue) => de(Ze)
                }, [
                  D("div", Xu, [
                    be(le, { icon: ["fass", "trash"] })
                  ])
                ], 8, Yu),
                (v(!0), $(we, null, Ie(B(Ze), (ue, wt) => (v(), $("div", {
                  key: wt,
                  class: "group validation",
                  style: Se({ "grid-column-end": "span " + l.value })
                }, ie(ue), 5))), 128))
              ]))), 128))
            ], 6)) : Q.value !== "banding" ? (v(), $("div", Ku, " Please select from the menu above ")) : G("", !0)
          ]),
          D("div", {
            id: "machining-diagram",
            class: ke(["diagram", { flipped: K.value === 1 }])
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
  return v(), $("div", {
    id: "drop",
    class: ke({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = nr((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    D("div", null, ie(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const ic = /* @__PURE__ */ Kt(ec, [["render", tc]]), sc = { id: "import-file" }, nc = /* @__PURE__ */ Te({
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
    const e = i, s = t, { t: n } = Gi(["main", "errors"]), r = H([]), o = H([]), l = H([]), a = H([]), u = H({}), h = H([]), b = H(!1), S = H(null), d = H(null), g = [
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
    ], k = Z(() => {
      const P = {};
      return r.value.forEach((q, B) => {
        P[B] = {};
        for (const [ee, ne] of Object.entries(q)) {
          if (!g.includes(ee)) continue;
          const ge = j(ee, ne);
          (ge === !0 || ge === !1) && (P[B][ee] = ge);
        }
      }), P;
    }), _ = Z(() => e.customFields.map((P) => P.label)), z = (P, q) => {
      if (q) {
        const B = Object.keys(q), ee = [[]];
        B.forEach((ge) => {
          const he = q[ge], Ne = [];
          ee.forEach((et) => {
            he.forEach((A) => Ne.push([...et, A]));
          }), ee.splice(0, ee.length, ...Ne);
        });
        const ne = /* @__PURE__ */ new Set();
        ee.forEach((ge) => ne.add(ge.join("|").toLowerCase())), P === "banding" ? S.value = ne : d.value = ne;
      }
    }, j = (P, q) => {
      if (q === "???") return !0;
      function B(ne) {
        return ne ? (ne = ne.trim().toLowerCase(), ne === "l" || ne === "w") : !0;
      }
      const ee = {
        banding: (ne) => Y(ne, S.value, "banding"),
        finish: (ne) => Y(ne, d.value, "finish"),
        orientationLock: B
      };
      return P in ee ? ee[P](q) : null;
    }, Y = (P, q, B) => {
      if (P = R(P), !P) return !0;
      const ee = P.split(","), ne = ee.every((ge) => !ge || q.has(ge.toLowerCase()));
      if (!ne) {
        const ge = ee.filter((he) => !q.has(he.toLowerCase()));
        console.log(`Valid ${B} choices...`), console.table(Array.from(q)), console.log(`The following ${B} choices are invalid`, ge);
      }
      return ne;
    }, J = (P, q) => {
      const B = {
        bandingOptions: (ee) => re(ee, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (ee) => re(ee, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return P in B ? B[P](q) : null;
    }, re = (P, q, B, ee) => {
      if (P = R(P), !P)
        return ee.reduce((he, Ne) => ({ ...he, [Ne]: {} }), {});
      const ne = P.split(",").map((he) => he.toLowerCase()), ge = {};
      return ee.forEach((he, Ne) => {
        ge[he] = {}, Object.keys(q).forEach((et, A) => {
          var ut;
          ge[he][B[A]] = ((ut = ne[Ne]) == null ? void 0 : ut.split("|")[A]) || "";
        });
      }), ge;
    }, W = () => r.value.map((P, q) => ({
      l: e.numberFormat === "decimal" ? Oi(P.l) : P.l,
      w: e.numberFormat === "decimal" ? Oi(P.w) : P.w,
      t: e.numberFormat === "decimal" ? Oi(P.t) : P.t,
      q: P.q,
      orientationLock: P.orientationLock,
      name: P.name,
      material: P.material,
      bandingOptions: k.value[q].banding ? J("bandingOptions", P.banding) : null,
      finishOptions: k.value[q].finish ? J("finishOptions", P.finish) : null,
      numberFormat: e.numberFormat,
      customData: oe(P)
    })), X = (P) => {
      var B;
      const q = (B = P == null ? void 0 : P[0]) == null ? void 0 : B.data;
      q && Cr.parse(q, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (ee) => m(ee),
        error: () => s("error")
      });
    }, m = (P) => {
      o.value = P.data.filter((q) => q.some((B) => B)), l.value = o.value[0], u.value = {};
      for (let q = l.value.length; q--; ) {
        const B = l.value[q], ee = T(B);
        ee ? u.value[q] = ee : (u.value[q] = null, _.value.includes(B) && (u.value[q] = "customData." + e.customFields.find((ne) => ne.label === B).id));
      }
      U(), o.value.shift(), M(), de();
    }, T = (P) => {
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
      }, B = Object.entries(q).reduce(
        (ee, [ne, ge]) => (ge.some((he) => P && P.toLowerCase() === he) && ee.push(ne), ee),
        []
      );
      return B.length > 1 ? null : B[0];
    }, U = () => {
      b.value = !1, a.value = Object.values(u.value).map((q) => !q || q === "N" ? null : g.includes(q) ? q : (b.value = !0, null));
      const P = a.value.filter((q, B) => a.value.indexOf(q) !== B);
      h.value = P.map((q) => a.value.reduce(
        (B, ee, ne) => (ee && ee === q && B.push(ne), B),
        []
      ));
    }, R = (P) => P && P.replace(/\s*,\s*/g, ","), M = () => {
      const P = o.value.map((q) => {
        const B = {};
        return l.value.forEach((ee, ne) => {
          if (h.value.flat().includes(ne))
            return B[u.value[ne]] = "???";
          B[u.value[ne]] = q[ne];
        }), B;
      });
      r.value = P;
    }, oe = (P) => {
      let q = {};
      for (let B in P)
        if (B.startsWith("customData.")) {
          let ee = B.slice(11);
          q[ee] = P[B];
        }
      return q;
    }, de = () => {
      const P = W();
      P != null && P.length && s("import", P);
    };
    return at(() => {
      z("banding", e.bandingOptions), z("finish", e.finishOptions);
    }), (P, q) => (v(), $("div", sc, [
      be(ic, {
        label: x(n)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: X
      }, null, 8, ["label"])
    ]));
  }
}), rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: nc }, Symbol.toStringTag, { value: "Module" }));
class xt extends Error {
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
        if (e === 0) throw new xt("Division by zero", "DIVISION_BY_ZERO");
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
        const k = n[u];
        if (k)
          return h === "q" ? k.q : k[h];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const b = t.nodes.get(a);
      if (typeof b.formula == "number")
        return r.set(a, b.formula), b.formula;
      o.add(a);
      const S = t.edges.get(a) || /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
      for (const k of S)
        if (k.startsWith("input.")) {
          const _ = k.split(".")[1];
          d.set(k, s[_]);
        } else
          d.set(k, l(k));
      const g = this.evaluateFormulaWithDeps(b.formula, d, s);
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
    if (!((e = this.spec) != null && e.inputs)) throw new xt("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
      if (r === void 0)
        throw new xt(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new xt(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new xt("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new xt(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new xt(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new xt(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
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
}, uc = { class: "heading" }, cc = { id: "hardware-total" }, hc = { class: "heading panels" }, dc = !1, fc = /* @__PURE__ */ Te({
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
    const e = $t(() => Promise.resolve().then(() => Vi)), { addNotice: s } = Hi(), n = i, { t: r } = Gi(["main", "errors"]), o = t, l = rr("calculator"), a = Z(() => l()), u = H("production");
    let h = null;
    const b = H(null), S = H([]), d = H(!1), g = Z(() => {
      if (!d.value || !S.value.length || S.value.every((m) => m.value === null)) return;
      const X = J();
      return Ye(() => {
        o("panel-result", X);
      }), X;
    }), k = Z(() => {
      if (!a.value || !d.value || !S.value.length || S.value.every((m) => m.value === null)) return;
      const X = re();
      return Ye(() => {
        o("hardware-result", X, _.value);
      }), X;
    }), _ = Z(() => {
      if (k.value)
        return Object.values(k.value).reduce((X, m) => X + m.totalCost, 0);
    });
    Ce(g, (X) => {
      var R, M, oe, de;
      if (!d.value || !X || !a.value || !((R = a.value) != null && R.inputShapes) || !((M = a.value.inputShapes) != null && M.length)) return;
      const m = (P) => P != null && P.name ? P.name.toLowerCase() : "", T = new Map(
        a.value.inputShapes.map((P) => [m(P), P])
      ), U = /* @__PURE__ */ new Set();
      for (const P of Object.values(g.value)) {
        if (!P.name) continue;
        const q = m(P), B = T.get(q), ee = {
          ...P,
          name: P.name.toUpperCase() || (B == null ? void 0 : B.name.toUpperCase()),
          material: ((oe = P.material) == null ? void 0 : oe.toUpperCase()) || ((de = B == null ? void 0 : B.material) == null ? void 0 : de.toUpperCase()),
          bandingOptions: P.bandingOptions || {},
          finishOptions: P.finishOptions || {},
          orientationLock: P.orientationLock || null,
          readonly: !0
        }, ne = B || a.value.createInputShape(ee);
        if (B) {
          Object.assign(B, ee);
          for (const ge of ["banding", "finish"])
            a.value.initExtrasOptions(B, ge);
        } else
          a.value.inputShapes.push(ne);
        U.add(q);
      }
      a.value.inputShapes = a.value.inputShapes.filter(
        (P) => U.has(m(P))
      );
    }, { immediate: !1 }), at(() => W());
    const z = (X) => {
      n.debug && console.log(X);
    }, j = () => {
      S.value = Object.values(b.value.inputs).map(() => ({
        value: null
      }));
    }, Y = (X, m) => {
      S.value[X] && (S.value[X].value = m);
    }, J = () => {
      try {
        return h.calculatePanelsFromFields(S.value);
      } catch (X) {
        return Ye(() => {
          s({
            type: "error",
            message: X.message.split(`
`)[0]
          });
        }), null;
      }
    }, re = () => {
      try {
        return h.calculateHardwareFromFields(S.value);
      } catch (X) {
        return Ye(() => {
          s({
            type: "error",
            message: X.message.split(`
`)[0]
          });
        }), null;
      }
    }, W = async () => {
      if (!n.url && !n.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      n.url ? (z(`SmartCut - Formula calculator init from url: ${n.url}`), h = new Ys({ url: n.url }), b.value = await h.getSpec()) : n.spec && (z("SmartCut - Formula calculator init with JSON"), h = new Ys({ spec: n.spec }), b.value = await h.getSpec()), j(), d.value = !0;
    };
    return (X, m) => {
      var T;
      return v(), $(we, null, [
        u.value === "development" && dc ? (v(), $("div", oc, [
          m[0] || (m[0] = D("div", null, "Developer information", -1)),
          b.value ? (v(), pe(x(e), {
            key: 0,
            data: [b.value],
            paths: ["spec"]
          }, null, 8, ["data"])) : G("", !0),
          be(x(e), {
            data: [S.value],
            paths: ["this.fields"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        D("div", lc, [
          (v(!0), $(we, null, Ie((T = b.value) == null ? void 0 : T.inputs, (U, R, M) => {
            var oe;
            return v(), pe(ft, {
              id: "formula-field-" + M,
              key: M,
              type: U.type,
              label: U.label,
              placeholder: U.label,
              min: U.min ?? 0,
              max: U.max ?? null,
              default: U.default ?? 0,
              value: (oe = S.value[M]) == null ? void 0 : oe.value,
              "onUpdate:value": (de) => Y(M, de)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          k.value ? (v(), $("div", ac, [
            D("div", uc, ie(x(r)("Hardware")), 1),
            (v(!0), $(we, null, Ie(k.value, (U, R) => (v(), $("div", { key: R }, ie(U.name) + " x" + ie(U.q) + " = " + ie(i.formatPrice(U.totalCost)), 1))), 128)),
            D("div", cc, ie(x(r)("Hardware total")) + " = " + ie(i.formatPrice(_.value)), 1)
          ])) : G("", !0),
          D("div", hc, ie(x(r)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), Gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: fc }, Symbol.toStringTag, { value: "Module" })), pc = { id: "smartcut-notices" }, gc = { class: "content" }, mc = ["onClick"], yc = ["innerHTML"], vc = /* @__PURE__ */ Te({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = Hi(), n = H({}), r = Z(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Ft("font-awesome-icon");
      return v(), pe(Xs, { to: "body" }, [
        D("div", pc, [
          be(or, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: ke(["notices-container", t.position])
          }, {
            default: ss(() => [
              (v(!0), $(we, null, Ie(x(e), (u) => (v(), $("div", {
                key: u.id,
                ref_for: !0,
                ref: (h) => {
                  h && (n.value[u.id] = h);
                },
                class: ke([
                  "notice",
                  `notice--${u.type}`
                ])
              }, [
                D("div", gc, [
                  D("div", {
                    class: "message",
                    onClick: (h) => u.action()
                  }, ie(u.message), 9, mc),
                  D("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, yc)
                ]),
                u.persistent ? G("", !0) : (v(), pe(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (h) => x(s)(u.id)
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
  mt as S,
  Kt as _,
  Ui as a,
  Tt as b,
  V as c,
  Fc as d,
  No as e,
  Mi as f,
  Rc as g,
  Lt as h,
  Tc as i,
  Oc as j,
  Ac as k,
  Dc as l,
  _c as m,
  Ec as n,
  O as o,
  Wt as p,
  $c as q,
  Ic as r,
  Le as s,
  Mc as t,
  Pc as u,
  pt as v,
  dt as w,
  At as x,
  Os as y,
  Vt as z
};

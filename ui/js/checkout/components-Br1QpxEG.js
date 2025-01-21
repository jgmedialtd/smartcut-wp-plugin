var jn = Object.defineProperty;
var zn = (i, t, e) => t in i ? jn(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => zn(i, typeof t != "symbol" ? t + "" : t, e);
import { d as Ie, o as v, c as $, F as be, r as Le, n as Se, a as we, b as E, t as te, w as es, v as ts, e as Vn, f as N, g as G, h as Z, i as xe, j as ot, k as Ve, l as is, m as oi, u as x, p as zt, q as fe, s as ss, x as Yn, y as Gi, z as qt, A as me, B as Xn, C as $t, D as Kn, E as Zn, G as Jn, H as Qn, I as ct, J as er, T as tr, K as Ks, L as ir, M as Cs, N as sr, O as nr, P as rr, Q as or, R as lr } from "./vendor-vue-B39CQo2S.js";
import { u as Zs, a as Hi, b as Js, c as ar, d as ur, e as cr } from "./composables-B8_Kyate.js";
import { l as Je, a as Ai, b as Di, c as Qs, d as en, s as Ee, e as li, r as Rt, f as tn, p as hr, g as dr, S as fr, h as pr, i as gr, j as mr, k as yr } from "./vendor-d3-BrvhDTRC.js";
import { c as vr, a as sn, b as Xe, F as ui, g as Vt, v as ns, i as fi, t as Ei, d as ri, e as Ii, h as br, s as wr, f as Sr, o as kr, j as xr, k as Cr, P as $r } from "./vendor-UJdh33XB.js";
import { i as Pr } from "./vendor-i18n-D9hV6ZJH.js";
function pi(i) {
  return !(!i || typeof i != "string");
}
function Lr(i) {
  return !pi(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function Ut(i) {
  return pi(i) ? i.trim().split(" ").map((t) => Pe(t)).join(" ") : "";
}
function Pe(i) {
  return pi(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function Ni(i) {
  return pi(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function Ir(i, t = 100) {
  return pi(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let nn = Pr;
function Pc(i) {
  nn = i;
}
function We(i, t) {
  return nn.t(i, { ns: ["main", "errors"], ...t });
}
const Wt = 1e-10, Tr = 10, Or = Number.MAX_SAFE_INTEGER, Ar = 4294967295, Fe = (i) => typeof i == "number" && Number.isFinite(i), Ti = (i) => Array.isArray(i) && i.length > 0;
function si(i, t, e = Wt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Dr = {
  greaterThan: (i, t, e = Wt) => !Fe(i) || !Fe(t) ? !1 : si(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Wt) => !Fe(i) || !Fe(t) ? !1 : si(i, t, e) >= 0,
  lessThan: (i, t, e = Wt) => !Fe(i) || !Fe(t) ? !1 : si(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Wt) => !Fe(i) || !Fe(t) ? !1 : si(i, t, e) <= 0,
  equalTo: (i, t, e = Wt) => !Fe(i) || !Fe(t) ? !1 : si(i, t, e) === 0
};
function Er(i) {
  return Fe(i) ? Number.isInteger(i) ? i : Number(i.toFixed(Tr)) : !1;
}
function Rr(i) {
  if (!Fe(i) || i < 0 || i > Or)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Ar + 1) * i);
}
function Mr(i, t) {
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
const ue = {
  ...Dr,
  isNumber: Fe,
  round: Er,
  getRandom: Rr,
  getRandomSample: Mr,
  calculateStandardDeviation: ki.calculateStandardDeviation.bind(ki),
  calculateCoefficientOfVariation: ki.calculateCoefficientOfVariation.bind(ki)
}, Ri = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function $s(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function Ps(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Ls(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const ge = (i, t, e) => t in i ? i[t] : (console.warn(Ri.missingProperty(String(t), e)), null), xi = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, Nt = (i, t) => {
  if (!$s(i) || !$s(t))
    return console.warn(Ri.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, it = (i, t) => {
  const e = ge(i, "id", "first item"), s = ge(t, "id", "second item");
  if (e === null || s === null) return 0;
  const n = e.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function st(i) {
  const t = Array.isArray(i[0]) ? i.map(([e, s]) => ({ key: e, direction: s })) : i;
  return (e, s) => {
    for (const { key: n, direction: r } of t) {
      const o = ge(e, n, "first item"), l = ge(s, n, "second item");
      if (!(o === null || l === null) && o !== l)
        return r === "desc" ? o < l ? 1 : -1 : o < l ? -1 : 1;
    }
    return 0;
  };
}
const Mi = {
  // Dimension-based sorts
  WDLD: st([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: st([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: st([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: st([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: st([["w", "desc"]]),
  LD: st([["l", "desc"]]),
  // ID-based sorts
  LDIDA: xi(
    st([["l", "desc"]]),
    it
  ),
  WDIDA: xi(
    st([["w", "desc"]]),
    it
  ),
  // Area-based sorts
  AD: (i, t) => -Nt(i, t),
  AA: Nt,
  AAID: xi(
    Nt,
    it
  ),
  ADID: xi(
    (i, t) => -Nt(i, t),
    it
  ),
  // ID sorts
  ID: it,
  IDDesc: (i, t) => -it(i, t),
  StockID: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    return !e || !s ? 0 : it(e, s);
  },
  StockIDAD: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = it(e, s);
    return n !== 0 ? n : -Nt(i, t);
  },
  // Position sorts
  YX: st([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: st([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (i, t) => {
    const e = ge(i, "placementOrder", "first item") ?? 0, s = ge(t, "placementOrder", "second item") ?? 0;
    return e - s;
  },
  typePlacementOrder: (i, t) => {
    const e = ge(i, "offcut", "first item"), s = ge(t, "offcut", "second item"), n = ge(i, "placementOrder", "first item") ?? 0, r = ge(t, "placementOrder", "second item") ?? 0;
    return e && !s ? 1 : !e && s ? -1 : n - r;
  },
  stockIDTypePlacementOrder: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = it(e, s);
    if (n !== 0) return n;
    const r = ge(i, "offcut", "first item"), o = ge(t, "offcut", "second item");
    if (r && !o) return 1;
    if (!r && o) return -1;
    const l = ge(i, "placementOrder", "first item") ?? 0, a = ge(t, "placementOrder", "second item") ?? 0;
    return l - a;
  },
  offcutPlacementOrder: (i, t) => {
    const e = ge(i, "stock", "first item"), s = ge(t, "stock", "second item");
    if (!(e != null && e.id) || !(s != null && s.id)) return 0;
    const n = it(e, s);
    if (n !== 0) return n;
    if ("placementOrder" in i && "placementOrder" in t) {
      const r = ge(i, "placementOrder", "first item") ?? 0, o = ge(t, "placementOrder", "second item") ?? 0;
      return r - o;
    }
    return 0;
  },
  groupPlacementOrder: (i, t) => {
    const e = ge(i, "placementOrder", "first item") ?? 0, s = ge(t, "placementOrder", "second item") ?? 0, n = e - s;
    if (n !== 0) return n;
    const r = ge(i, "groupPlacementOrder", "first item") ?? 0, o = ge(t, "groupPlacementOrder", "second item") ?? 0;
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
    return !Ps(i) || !Ps(t) ? (console.warn(Ri.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Ls(t) || !Ls(e) ? (console.warn(Ri.missingLongSide), 0) : e[i] === t[i] ? -Nt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function Fr(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function Ft(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function _r(i) {
  return i ? i === "x" ? "y" : "x" : null;
}
class jt {
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
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = qr(this), this.direction = Br(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
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
  return new jt({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function qr(i) {
  return typeof i > "u" || !ue.isNumber(i.x1) || !ue.isNumber(i.x2) || !ue.isNumber(i.y1) || !ue.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function Br(i) {
  return typeof i > "u" || !ue.isNumber(i.x1) || !ue.isNumber(i.x2) || !ue.isNumber(i.y1) || !ue.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function Gr(i, t) {
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
const Hr = {
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
vr.showDiff = !0;
sn("tests");
sn("timers");
function rn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function on(i = [], t = null) {
  i != null && i.length && rn() && Hr.runTests;
}
Xe.colors = [
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
Xe("logs");
Xe("cuts");
Xe("guillotine");
Xe("results");
Xe("scoring");
Xe("calculations");
Xe("subset");
Xe("secondRun");
Xe("stack");
const Nr = Xe("errors");
Xe("allStock");
Nr.color = 1;
function Wr(i) {
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
class Wi extends jt {
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
        return ue.greaterThan(
          this.y1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "left":
        return ue.greaterThan(
          this.x1 + this.stock.getBladeWidth() / 2,
          0
        );
      case "top":
        return ue.lessThan(
          this.y1 - this.stock.getBladeWidth() / 2,
          this.stock.w
        );
      case "right":
        return ue.lessThan(
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
    return Wr(this);
  }
  getArea() {
    if (!this.stock) return 0;
    const e = this.getLength();
    return e ? e * this.stock.getBladeWidth() : 0;
  }
}
const Ur = {
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
      const s = Ur[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Ci[this.corner] && (this.grid ? Ci[this.corner][this.grid] && Ci[this.corner][this.grid].forEach((s) => e.add(s)) : Ci[this.corner].default.forEach((s) => e.add(s))), e) : ($i[this.corner] && (this.grid ? $i[this.corner][this.grid] && $i[this.corner][this.grid].forEach((s) => e.add(s)) : $i[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class Bt {
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
function de(i, t, e, s, n) {
  const r = jr[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const jr = {
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
function zr(i, t, e) {
  var o, l, a, u, h, b;
  const s = new Bt(), n = e.toArray().sort(ln), r = t.getBladeWidth();
  if (n.forEach((S) => {
    const d = S.corner, g = S.type;
    if (!r)
      s.addPoint(S);
    else
      switch (d) {
        case "topRight":
          s.addPoint(
            de("top", S, r, d),
            g
          ), s.addPoint(
            de("right", S, r, d),
            g
          );
          break;
        case "topLeft":
          s.addPoint(
            de("top", S, r, d),
            g
          ), s.addPoint(
            de("left", S, r, d),
            g
          );
          break;
        case "bottomRight":
          s.addPoint(
            de("bottom", S, r, d),
            g
          ), s.addPoint(
            de("right", S, r, d),
            g
          );
          break;
        case "bottomLeft":
          s.addPoint(
            de("bottom", S, r, d),
            g
          ), s.addPoint(
            de("left", S, r, d),
            g
          );
          break;
      }
    const k = s.toArray();
    if (r)
      for (let q = k.length; q--; ) {
        const V = k[q];
        e.contains(V) && s.deletePoint(V);
      }
    else
      for (let q = k.length; q--; ) {
        const V = k[q];
        for (let z = i.length; z--; ) {
          const Y = i[z];
          if (V.x === Y.x && V.y === Y.y) {
            s.deletePoint(V);
            break;
          }
        }
      }
  }), r) {
    const S = /* @__PURE__ */ new Set();
    let d, g, k, q;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (d = t.x, g = t.y, k = t.x + t.l, q = t.y + t.w) : (d = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), g = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), k = t.x + t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2), q = t.y + t.w - ((b = t == null ? void 0 : t.trim) == null ? void 0 : b.y2));
    let V = s.toArray();
    for (let z = V.length; z--; ) {
      const Y = V[z];
      (ue.lessThan(Y.x, d) || ue.lessThan(Y.y, g) || ue.greaterThan(Y.x, k) || ue.greaterThan(Y.y, q)) && V.splice(z, 1);
    }
    s.clear(), s.addPoints(V), S.clear(), V = s.toArray();
    for (let z = V.length; z--; ) {
      const Y = V[z];
      for (let J = i.length; J--; ) {
        const ne = i[J];
        if (Y.collidesWith(ne)) {
          s.deletePoint(Y);
          break;
        }
      }
    }
  }
  return s;
}
function Vr(i, t, e) {
  let s = [];
  const n = i.getMinSpacing(e), r = t.corner, o = t.direction;
  if (t.type === "shape")
    switch (r) {
      case "topLeft":
        o === "rl" && (s.push(de("right", t, n, r, o)), s.push(de("topRight", t, n, r, o))), o === "bt" && (s.push(de("bottom", t, n, r, o)), s.push(de("bottomLeft", t, n, r, o)));
        break;
      case "topRight":
        o === "lr" && (s.push(de("left", t, n, r, o)), s.push(de("topLeft", t, n, r, o))), o === "bt" && (s.push(de("bottom", t, n, r, o)), s.push(de("bottomRight", t, n, r, o)));
        break;
      case "bottomRight":
        o === "lr" && (s.push(de("left", t, n, r, o)), s.push(de("bottomLeft", t, n, r, o))), o === "tb" && (s.push(de("top", t, n, r, o)), s.push(de("topRight", t, n, r, o)));
        break;
      case "bottomLeft":
        o === "rl" && (s.push(de("right", t, n, r, o)), s.push(de("bottomRight", t, n, r, o))), o === "tb" && (s.push(de("top", t, n, r, o)), s.push(de("topLeft", t, n, r, o)));
        break;
    }
  else if (t.type === "edge")
    switch (o) {
      case "rl":
      case "lr":
        s.push(de("top", t, 0)), s.push(de("centre", t, 0)), s.push(de("bottom", t, 0));
        break;
      case "tb":
      case "bt":
        s.push(de("left", t, 0)), s.push(de("right", t, 0)), s.push(de("centre", t, 0));
        break;
    }
  if (s = s.filter((a) => a.x >= 0 && a.y >= 0), !s.length) return null;
  const l = new Bt();
  for (const a of s)
    a.raycast = !0, l.addPoints(cn(i, a, e).toArray());
  return hn(i, e, l), l;
}
function Yr(i, t) {
  const e = new Bt();
  return i.sort(ln), i.forEach((s) => {
    ht(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function Xr(i = [], t, e) {
  const s = Yr(
    i === null ? t : i,
    e
  );
  return zr(
    t,
    e,
    s
  );
}
function ln(i, t) {
  return i.y === t.y ? t.x - i.x : t.y - i.y;
}
function an(i, t, e, s, n, r) {
  i.a = t.id, i.b = e ? e.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function Kr(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new Bt();
  const s = un(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const h of u)
        Zr(
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
      r === h.direction && (an(b, l, null, h.direction, "edge"), e.addPoint(b));
    }
  }), e = Jr(e), e;
}
function un(i, t) {
  return i.map((e) => {
    const s = Gr(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function Zr(i, t, e, s) {
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
      const g = r ? i[`${l}1`] : n, k = r ? n : i[`${l}1`], q = new De(g, k), V = i.origin;
      an(q, t, e, i.direction, "shape", V), s.addPoint(q);
    }
  }
}
function Jr(i) {
  const t = new Bt();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = Qr(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function Qr(i, t) {
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
function cn(i, t, e) {
  const s = new Bt(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = eo(t, i, e), r) {
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
  return hn(i, e, s), s;
}
function eo(i, t, e) {
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
function hn(i, t, e) {
  var a, u, h, b, S, d;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (h = t == null ? void 0 : t.trim) == null ? void 0 : h.x1, n = (b = t == null ? void 0 : t.trim) == null ? void 0 : b.y1, r = t.l - ((S = t == null ? void 0 : t.trim) == null ? void 0 : S.x2) - i.l, o = t.w - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.y2) - i.w);
  const l = e.toArray();
  for (let g = l.length; g--; ) {
    const k = l[g];
    (ue.lessThan(k.x, s) || ue.lessThan(k.y, n) || ue.greaterThan(k.x, r) || ue.greaterThan(k.y, o) || k.x < 0 || k.y < 0) && e.deletePoint(k);
  }
}
const to = 10, io = 0;
class rs extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
function so(i) {
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
    dp: u = to,
    pl: h = !1,
    fr: b = io
  } = { nf: e, dp: s, pl: n, fr: r, ...l };
  if (t == null || t === "")
    return a === "decimal" ? null : "";
  try {
    const S = ao(t, h);
    return S ? a === "decimal" ? no(
      S,
      t,
      u
    ) : ro(
      S,
      b
    ) : a === "decimal" ? 0 : "0";
  } catch (S) {
    throw new rs(
      `Failed to convert number format: ${t} to ${a}. ${S.message}`
    );
  }
}
function no(i, t, e) {
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
  const r = so(String(t));
  return ni(Number(n.toFixed(r)));
}
function ro(i, t) {
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
function oo(i = "en-US") {
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
    const { thousandsSeparator: e, decimalSeparator: s } = oo(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch {
    throw new rs(`Failed to parse number: ${i}`);
  }
}
function lo(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  return /^(\d+\s+)?\d+\/\d+$|^\d+$|^\d+'\s*(\d+\s+)?\d+\/\d+"$|^\d+'\s*(\d+\s+)?\d+\/\d+$|^(\d+\s+)?\d+\/\d+"$/.test(t);
}
function ao(i, t = !1) {
  if (!i && i !== 0) return null;
  let e = String(i).trim();
  if (!e) return null;
  try {
    if (lo(i))
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
function Lc(i, t, e = null, s = null) {
  if (i && !(!Ne(i) && !ai(i))) {
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
function uo(i, t, e, s) {
  return t.filter((n, r) => {
    var o, l;
    return i.stockMatch.material[r] = null, i.stockMatch.thickness[r] = null, i.stockMatch.width[r] = null, i.stockMatch.fit[r] = null, (gt(i) || cs(i)) && (gn(n, i) ? i.stockMatch.fit[r] = !0 : i.stockMatch.fit[r] = !1), e ? !(n != null && n.material) && !(i != null && i.material) || ((o = n == null ? void 0 : n.material) == null ? void 0 : o.toLowerCase()) === ((l = i == null ? void 0 : i.material) == null ? void 0 : l.toLowerCase()) ? i.stockMatch.material[r] = !0 : i.stockMatch.material[r] = !1 : i.stockMatch.material[r] = !0, s ? C(i.t) && C(n.t) ? (gt(i) && ue.equalTo(i.t, n.t) || i.t === n.t) && (i.stockMatch.thickness[r] = !0) : i.stockMatch.thickness[r] = !1 : i.stockMatch.thickness[r] = !0, n.type === "linear" ? gt(i) && (i.canRotate(0, n) && ue.equalTo(i.w, n.w) || i.canRotate(1, n) && ue.equalTo(i.l, n.w) ? i.stockMatch.width[r] = !0 : i.stockMatch.width[r] = !1) : i.stockMatch.width[r] = !0, i.stockMatch.fit[r] && i.stockMatch.material[r] && i.stockMatch.thickness[r] && i.stockMatch.width[r];
  });
}
function co(i, t, e) {
  const s = Ne(i[0]);
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
    const b = uo(h, t, r, o);
    if (h.stockMatch.fit = !h.stockMatch.fit.every((S) => S === !1), h.stockMatch.material = !h.stockMatch.material.every((S) => S === !1 || S === null), h.stockMatch.thickness = !h.stockMatch.thickness.every((S) => S === !1 || S === null), h.stockMatch.width = !h.stockMatch.width.every((S) => S === !1), !s) {
      if (b.length) {
        const S = b.map((d) => d.getParentID());
        h.stockLock = S, S.forEach((d) => l.add(d));
      } else
        h.stockMatch.fit ? (h.stockMatch.material || new X({
          item: h,
          field: [["material"]],
          message: "no stock with matching material found"
        }), h.stockMatch.thickness || new X({
          item: h,
          field: [["t"]],
          message: `thicknesses must match - could not find any stock with ${h.t ? "thickness " + h.t : "no thickness set"}`
        }), e === "linear" && !h.stockMatch.width && new X({
          item: h,
          field: [["w"]],
          message: `widths must match for linear calculations - could not find any stock with ${h.w ? "width " + h.w : "no width set"}`
        })) : new X({
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
class X {
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
    this.message = We(e, { ns: ["main", "errors"] }), this.field = s, this.index = n, this.type = o, t && ("name" in t && ((u = t.name) != null && u.length) ? this.identifier = t.name.toLocaleUpperCase() : "id" in t && ((h = t.id) != null && h.length) ? this.identifier = t.id : "parentID" in t && ((b = t.parentID) != null && b.length) ? this.identifier = t.parentID : typeof ((S = this == null ? void 0 : this.index) == null ? void 0 : S[0]) == "number" && (this.identifier = String(this.index[0] + 1)), "issues" in t && Array.isArray(t.issues) && t.issues.push(this)), Array.isArray(r) && r.push(this);
    const a = `issue created for ${Ho(t)}: ${this.identifier || "N/A"} - ${this.message} for field ${this.field || "N/A"}`;
    if (l) throw new Error(a);
  }
}
const Yi = {
  partMaterial: "material",
  stockMaterial: "material"
};
function ho(i) {
  return (Yi == null ? void 0 : Yi[i]) || i;
}
function Ct(i) {
  return i.length ? (i == null ? void 0 : i.filter((t) => t.type === "error")) || [] : [];
}
function Is(i, t, e = !1) {
  var r;
  return !("issues" in i) || !((r = i.issues) != null && r.length) ? !1 : i.issues.filter((o) => o.type === (e ? "warning" : "error")).some((o) => {
    var l;
    if (!((l = o.field) != null && l.length))
      return !1;
    for (let a = 0; a < o.field.length; a++)
      if (o.field[a].every((u, h) => u === ho(t[h])))
        return !0;
    return !1;
  });
}
const Xt = ({ item: i, field: t, index: e, newIssues: s, min: n = null, max: r = null, required: o = !1, allowZero: l = !0, isWarning: a = !1 }) => {
  let u = Vt(i, t);
  if (o && (u == null || u === ""))
    return new X({
      item: i,
      message: We("not_set", { x: Re[t.join(".")] }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), null;
  if (!l && u === 0)
    return new X({
      item: i,
      message: We("greater_than", { x: Re[t.join(".")], y: 0 }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), 0;
  if (u == null || u === "") return null;
  try {
    u = O(u);
  } catch {
    return fo({
      item: i,
      field: t,
      value: Vt(i, t),
      index: e,
      issues: s,
      isWarning: a
    }), null;
  }
  return po({ item: i, field: t, value: u, index: e, issues: s, min: n, isWarning: a }), go({ item: i, field: t, value: u, index: e, issues: s, max: r, isWarning: a }), u;
}, fo = ({ item: i, field: t, value: e, index: s, issues: n, isWarning: r }) => {
  new X({
    item: i,
    message: We("not_understood", { x: t.join("."), y: e }),
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, po = ({ item: i, field: t, value: e, index: s, issues: n, min: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e < r && new X({
    item: i,
    message: We("greater_than_or_equal", { x: Re[t.join(".")], y: r }),
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, go = ({ item: i, field: t, value: e, index: s, issues: n, max: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e > r && new X({
    item: i,
    message: We("less_than_or_equal", { x: Re[t.join(".")], y: r }),
    field: [t],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, mo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "banding" in i && typeof i.banding != "object" && new X({
    item: i,
    message: We("must_be_object", { x: "banding" }),
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, yo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "x" in i && Xt({ item: i, field: ["x"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, vo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "y" in i && Xt({ item: i, field: ["y"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, bo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "l" in i && Xt({ item: i, field: ["l"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, wo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "w" in i && Xt({ item: i, field: ["w"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, So = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "t" in i && Xt({ item: i, field: ["t"], index: t, newIssues: n, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, ko = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "q" in i && O({ v: i.q }) <= 0 && (!("autoAdd" in i) || (i == null ? void 0 : i.autoAdd) === !1) && new X({
    item: i,
    message: We("greater_than_or_equal", { x: Re.q, y: 0 }),
    field: [["q"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, xo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("orientationLock" in i) || i.orientationLock === void 0 || i.orientationLock === null || i.orientationLock === "") return s;
  const n = i.orientationLock.toLowerCase();
  return n !== "l" && n !== "w" && new X({
    item: i,
    message: We("must_be_values", { x: Re.orientationLock, y: "l, w" }),
    field: [["orientationLock"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Co = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("grain" in i) || i.grain === void 0 || i.grain === null || i.grain === "") return s;
  const n = i.grain.toLowerCase();
  return n !== "l" && n !== "w" && new X({
    item: i,
    message: We("must_be_values", { x: Re.grain, y: "l, w" }),
    field: [["grain"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, $o = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("customData" in i)) return s;
  const n = i.customData;
  if (typeof n != "object")
    return new X({
      item: i,
      message: We("must_be_object", { x: Re.customData }),
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const r in n) {
    const o = n[r];
    o != null && (["string", "number", "boolean"].includes(typeof o) || new X({
      item: i,
      message: We("must_be_string_number_boolean", { x: Re.customData }),
      field: [["customData"]],
      index: [t],
      type: e ? "warning" : "error",
      issues: s
    }));
  }
  return s;
}, Po = ({
  item: i,
  partTrim: t,
  index: e = null,
  isWarning: s = !1
}) => {
  const n = [];
  if (!t || !("l" in i) || !("w" in i) || !i.l || !i.w) return n;
  const r = O({ v: t }), o = O({ v: i.l }), l = O({ v: i.w }), a = o - r * 2, u = l - r * 2;
  return (a <= 0 || u <= 0) && new X({
    item: i,
    message: We("too_much_trim", { x: "part", y: r, z: `${a}x${u}` }),
    field: [["l"], ["w"], ["trim"]],
    index: [e],
    type: s ? "warning" : "error",
    issues: n
  }), n;
}, Lo = ({
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
      Xt({ item: i, field: ["trim", u], index: t, newIssues: r, min: e, max: s });
    if (r.length) return r;
    if (l && a && l > 0 && a > 0) {
      const u = O({ v: i.trim.x1 }), h = O({ v: i.trim.x2 }), b = O({ v: i.trim.y1 }), S = O({ v: i.trim.y2 }), d = (u || 0) + (h || 0), g = (b || 0) + (S || 0);
      d >= l && new X({
        item: i,
        message: We("too_much_trim", {
          x: `${Re.x1.toUpperCase()} + ${Re.x2.toUpperCase()}`,
          y: Re.w,
          z: l
        }),
        field: [["trim", "x1"], ["trim", "x2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      }), g >= a && new X({
        item: i,
        message: We("too_much_trim", {
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
}, Io = ({
  item: i,
  inputStockList: t,
  stockType: e,
  partTrim: s = 0,
  index: n = null,
  isWarning: r = !1
}) => {
  const o = [];
  if (!("q" in i) || !("l" in i) || !("w" in i) || !i.l || !i.w || ("applyPartTrim" in i && i.applyPartTrim(s, e), i.issues.length)) return o;
  const l = co([i], t, e);
  if (!l) return o;
  if (l.unusableShapes.length) {
    const u = l.unusableShapes[0].stockMatch;
    u.fit || new X({
      item: i,
      message: "will_not_fit",
      field: [["l"], ["w"]],
      index: [n],
      type: r ? "warning" : "error",
      issues: o
    }), u.material || new X({
      item: i,
      message: "no_matching_stock_material",
      field: [["material"]],
      index: [n],
      issues: o
    }), u.thickness || new X({
      item: i,
      message: "no_matching_stock_thickness",
      field: [["t"]],
      index: [n],
      issues: o
    }), !u.width && e === "linear" && new X({
      item: i,
      message: "no_matching_stock_width",
      field: [["w"]],
      index: [n],
      issues: o
    });
  }
  return o;
}, To = ({ item: i = null, index: t = null }) => {
  i.machining.validateEverything(i, t);
}, je = {
  customData: $o,
  banding: mo,
  partTrim: Po,
  trim: Lo,
  x: yo,
  y: vo,
  l: bo,
  w: wo,
  t: So,
  q: ko,
  orientationLock: xo,
  grain: Co,
  stockMatch: Io,
  machining: To
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
function Oo(i, t, e) {
  if (!gi.includes(t) || !i.machining.corners) return 0;
  const s = dn(i, t);
  return e * s;
}
function dn(i, t) {
  if (!gi.includes(t) || !i.machining.corners) return 0;
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
      const q = k === 0 || k === 3, V = k < 2, z = q ? e : r - e;
      let Y = null;
      this.face === 0 ? Y = V ? s : o - s : this.face === 1 && (Y = V ? o - s : s);
      const J = Math.sqrt(z * z + Y * Y);
      return {
        c: g,
        distance: J
      };
    }), h = Math.min(...a.map((g) => g.distance)), b = Math.min(...u.map((g) => g.distance)), S = u.findIndex((g) => g.distance === b), d = t.machining.corners[S];
    if (d && d.type === "radius") {
      let g = S === 0 || S === 3 ? 0 : r, k = S < 2 ? 0 : o;
      const q = S < 2;
      g += S === 0 || S === 3 ? l[S] : -l[S], k += q ? l[S] : -l[S];
      const z = e - g, Y = S < 2;
      let J;
      this.face === 0 ? J = Y ? s : o - s : this.face === 1 && (J = Y ? o - s : s);
      const ne = J - k, U = Math.sqrt(z * z + ne * ne), K = l[S] - U - n;
      let y = !1;
      return d.index === 0 ? y = e <= g && J <= k : d.index === 1 ? y = e >= g && J <= k : d.index === 2 ? y = e >= g && J >= k : d.index === 3 && (y = e <= g && J >= k), y && K < h ? K : h;
    } else if (d && d.type === "bevel") {
      let g, k, q;
      d.index === 0 ? (g = 1, k = 1, q = -d.size) : d.index === 1 ? (g = 1, k = -1, q = -r + d.size) : d.index === 2 ? (g = 1, k = 1, q = -r - o + d.size) : d.index === 3 && (g = -1, k = 1, q = -o + d.size);
      const V = d.index === 0 ? 1 : -1, z = (g * e + k * s + q) / Math.sqrt(g * g + k * k) * V - n;
      return z < h ? z : h;
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
class Ts {
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
class Os {
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
let fn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: e = [],
    corners: s = []
  } = {}) {
    c(this, "holes", []);
    c(this, "corners", []);
    c(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new Os(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Os({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new Ki(n))), e && (this.hingeHoles = e.map((n) => new Ts(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && new X({
      item: t,
      index: e,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    }), n.length && new X({
      item: t,
      index: e,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new X({
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
    const b = new Ts({
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
function Ao(i) {
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
      return new X({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    const s = e[0];
    if (gt(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new X({
          item: this,
          message: "Must have 2 or more parts."
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new X({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    if (e.forEach((a, u) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new X({
        item: this,
        field: [["orientationLock"]],
        message: `Part in position ${u + 1} must have orientation lock set to be part of a group.`
      });
    }), this.issues.length) return this.issues;
    const n = Ft(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, u) => {
      if (a.id === s.id) return;
      const h = a.getTrimmedDimensions(!0)[n];
      ue.equalTo(h, r) || new X({
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
      u = new rt(h);
    } catch (h) {
      return console.error(h), !1;
    }
    return u.parentID = `ug${t}`, n && u.updateShapeSpacing(n), u;
  }
}
function Tc(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new ls(s));
  return t.length && Do(e, t), e;
}
function Do(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function Eo(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function Ro(i, t, e = !0) {
  const s = Eo(i), n = [];
  for (const r in s) {
    const o = s[r], l = t.findIndex((u) => u.listId === r);
    l < 0 && new X({
      message: "Cannot find at least one part in the list.",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new X({
      message: `Not enough of part ${a != null && a.name ? a.name : l + 1} to form groups - ${o} needed, ${a.q ?? 0} found.`,
      issues: n
    });
  }
  return e && i.forEach((r) => {
    const o = r.validate(t);
    o != null && o.length && n.push(...o);
  }), n;
}
const pt = ["y1", "y2", "x1", "x2"], gi = ["a", "b", "c", "d"], Pt = [...pt, ...gi], dt = ["a", "b"];
function pn(i) {
  return gi.includes(i);
}
function Mo(i) {
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
function Fo(i) {
  return pt.map((t) => i[t] ?? null);
}
function _t(i) {
  if (!C(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function Oc({
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
function Ac({
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
    if (_o(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
      s.shapes = s.shapes.map((l) => new mt(l));
      try {
        n = new rt(s);
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
function Dc({
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
function Ec({
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
function gn(i = null, t = null, e = null) {
  if (!i) throw new Error("no container supplied to willItFit");
  if (!t) throw new Error("no shape supplied to willItFit");
  const s = t.rot;
  function n(S = !1, d = "l") {
    var g, k;
    return ue.equalTo(
      t[S ? Ft(d) : d],
      i[d]
    ) || ue.lessThanOrEqualTo(t[S ? Ft(d) : d], i[d] - (Zi(i) ? (k = (g = i == null ? void 0 : i.saw) == null ? void 0 : g.options) == null ? void 0 : k.minSpacing : 0));
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
    t = _t(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ns(), ["l", "w", "t"].forEach((a) => {
      this[a] = _i(t, a, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? fi(Ei(t.q)) ? null : Ei(t.q) : null, this.autoAdd = C(t.autoAdd) ? t.autoAdd : !1, this.name = C(t.name) ? Ni(t.name).toUpperCase() : "", this.material = C(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((a) => {
      this.trim[a] = _i(t.trim, a, e, s);
    }), this.cost = C(t.cost) ? t.cost : null, t.grain = (o = t == null ? void 0 : t.grain) == null ? void 0 : o.toLowerCase(), (t == null ? void 0 : t.grain) === " " && (t.grain = ""), this.grain = t.grain, this.grain = C(t.grain) && ["l", "w"].includes(t.grain.toLowerCase()) ? t.grain.toLowerCase() : "", this.multiEdit = t.multiEdit, this.type = t.type, this.allowExactFitShapes = C(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.preventGrainRotation = !0, this.notes = t != null && t.notes ? (l = t.notes) == null ? void 0 : l.replace(/,/g, " ") : "";
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
    t = t = _t(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ns(), ["l", "w", "t"].forEach((h) => {
      this[h] = _i(t, h, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? fi(Ei(t.q)) ? null : Ei(t.q) : null, this.name = C(t.name) ? Ni(t.name).toUpperCase() : "", this.material = C(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, this.notes = t != null && t.notes ? (r = t.notes) == null ? void 0 : r.replace(/,/g, " ") : "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [];
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
    this.orientationLock = C(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new fn(t.machining ?? {
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
    useInventory: r = !1
  }) {
    return this.issues = [], ["l", "w", "t"].forEach((o) => je[o]({ item: this, index: e })), n = O({ v: n }), je.partTrim({ item: this, partTrim: n, index: e }), je.trim({ item: this, index: e }), je.machining({ item: this, index: e }), ["q"].forEach((o) => {
      je[o]({ item: this, index: e, isWarning: !0 });
    }), t.length && !r && je.stockMatch({ item: this, inputStockList: t, stockType: s, partTrim: n, index: e, isWarning: !0 }), this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class Kt {
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
    ["x", "y", "l", "w", "t"].forEach((s) => e.push(...je[s]({ item: t }))), this.issues.push(...je.customData({ item: t })), this.issues.push(...e.filter((s) => s));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = C(t.id) ? t.id.toString() : this.id || null, this.setParentID(), C(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = C(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = Ir(Ni(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, C(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = C(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = C(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && C(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.trimmed = C(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = C(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
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
    }), !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = Ft(this.grain))), C(t == null ? void 0 : t.stock) && (It(t.stock) ? this.stock = t.stock : this.stock = new Tt(t.stock), this.stockId = this.stock.id);
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      pt.map((e) => [e, 0])
    ), !!Yt(t, !0))
      for (const e of pt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = O({ v: t[e] });
          } catch {
            s = 0, new X({ item: this, field: [["trim", e]], message: `${t[e] ?? "N/A"} is not a valid value for trim: ${e}` });
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
        return new jt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new jt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new jt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new jt({
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
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !fi(parseFloat(String(r)))).length && (C(this.l) && (this.l -= (C((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (C((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new X({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), C(this.w) && (this.w -= (C((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (C((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new X({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
    const s = new Kt({
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
    return Bo(this);
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
class ji extends Kt {
  //used by evo
  constructor(e) {
    super(e);
    c(this, "type");
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes(e.type) ? this.type = e.type : new X({ item: this, field: [["type"]], message: `Container type ${e.type ?? "N/A"} is not valid` }), this.type || (this.type = "sheet"), this.setSaw(e), this.cutType) {
      case "beam":
        (!C(this.t) || this.t <= 0) && new X({ item: this, message: "Stock for beam saws must have a thickness set" });
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
      C(e == null ? void 0 : e.saw) && (Go(e.saw) ? this.saw = e.saw : this.saw = new Lt(e.saw, this.type)), (o = (r = this.saw) == null ? void 0 : r.issues) != null && o.length && this.issues.push(...this.saw.issues);
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
    return fi(e) ? 0 : e;
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
    switch (t = _t(t), this.options = ri({}, t == null ? void 0 : t.options, {
      stockSelection: "efficiency",
      stackingMode: "dimensions",
      minSpacing: 0,
      minSpacingDimension: {}
    }), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? null, this.stockType = (t == null ? void 0 : t.stockType) ?? e, this.issues = [], ["sheet", "linear", "roll"].includes(this.stockType) || new X({ item: this, field: [["stockType"]], message: `Saw stock type: ${this.stockType} not valid` }), this.stockType || (this.stockType = "sheet"), this.cutType = t == null ? void 0 : t.cutType, this.stockType) {
      case "sheet":
        [
          "efficiency",
          "guillotine",
          "beam",
          null,
          void 0
        ].includes(this.cutType) || new X({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
      case "roll":
        ["efficiency", "guillotine", null, void 0].includes(this.cutType) || new X({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
      case "linear":
        break;
      default:
        ["none", null, void 0].includes(this.cutType) || new X({ item: this, field: [["cutType"]], message: `Saw cut type: ${this.cutType} not valid for stock type: ${this.stockType}` });
        break;
    }
    switch (this.cutPreference = t == null ? void 0 : t.cutPreference, this.cutType) {
      case "guillotine":
        ["l", "w", "flex"].includes(this.cutPreference) || new X({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"}` }), this.cutType === "guillotine" && this.cutPreference === "l" && this.stockType === "roll" && new X({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"} and stock type: ${this.stockType}` }), this.options.minSpacing = 0;
        break;
      case "beam":
        ["l", null, void 0].includes(this.cutPreference) || new X({ item: this, field: [["cutPreference"], ["cutType"]], message: `Saw cut preference: ${this.cutPreference || "N/A"} not valid for cut type: ${this.cutType || "N/A"}` }), this.options.minSpacing = 0;
        break;
    }
    switch (C(t == null ? void 0 : t.bladeWidth) ? typeof t.bladeWidth == "string" ? this.bladeWidth = O({ v: t.bladeWidth }) : this.bladeWidth = t.bladeWidth : this.bladeWidth = 0, (fi(this.bladeWidth) || this.bladeWidth < 0) && (new X({ item: this, field: [["bladeWidth"]], message: `Saw blade width: ${this.bladeWidth ?? "N/A"} is not valid` }), this.bladeWidth = 0), this.stockType) {
      case "sheet":
        [
          "efficiency",
          "guillotine",
          "beam",
          null,
          void 0
        ].includes(this.cutType) || new X({ item: this, field: [["cutType"], ["stockType"]], message: `Invalid cut type: ${this.cutType} for stock type: ${e}` }), this.cutType === "guillotine" && (["l", "w", "flex"].includes(this.cutPreference) || new X({ item: this, field: [["cutPreference"], ["cutType"]], message: `Invalid cut preference: ${this.cutPreference} for stock type: ${e}, cut type: ${this.cutType}` })), this.cutType === "beam" && [null, void 0].includes(this.stackHeight) && new X({ item: this, field: [["stackHeight"], ["cutType"]], message: "Beam saws require a stack height to be set" }), this.cutType === "beam" && (this.cutPreference = "l"), this.cutType || (this.cutType = "efficiency");
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
        this.guillotineOptions = ri({}, t == null ? void 0 : t.guillotineOptions, { strategy: "efficiency", maxPhase: null }), this.cutPreference = "l", [null, void 0].includes(this.stackHeight) && new X({ item: this, field: [["stackHeight"], ["cutType"]], message: "Beam saws require a stack height to be set" });
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
    e = _t(e), e.preventAutoRotation = (e == null ? void 0 : e.type) === "roll", e.autoAdd && !e.q && (e.q = 1);
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
class mn extends Kt {
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
function Rc({
  offcuts: i,
  stockList: t,
  preventAutoRotation: e = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    const n = t.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, e && (s.preventAutoRotation = !0), new mn(s);
  });
}
class mt extends Kt {
  constructor(e) {
    e = _t(e);
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
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = C(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, C(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = C(e == null ? void 0 : e.machining) ? new fn(e.machining) : null), this.added = C(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = C(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = C(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = C(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = C(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = C(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = C(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = C(e == null ? void 0 : e.placementOrder) ? e.placementOrder : this.placementOrder || null, this.groupPlacementOrder = C(e == null ? void 0 : e.groupPlacementOrder) ? e.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (e == null ? void 0 : e.minSpacing) ?? (this.minSpacing || 0), this.priority = (e == null ? void 0 : e.priority) ?? {};
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
    e = _t(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Pt.map((s) => [s, !1])
    ), !!Yt(e, !0))
      for (const s of Pt)
        this._banding[s] = C(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return Fo(this._banding);
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
    ), !!Yt(e, !0))
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
    }) && (this._finish = null), Ao(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = Ft(e.grain)), on([
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
    return !Mo(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : pn(e) ? dn(this, e) : 0;
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
    return gn(e, this, s);
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
    return e.myStripParent = qo(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
    var t = (...Uc) => (super(...Uc), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
    c(this, "parent"), c(this, "segmentType"), c(this, "completed"), //used by vis only
    c(this, "rowSegment"), //used by cuts
    c(this, "placementOrder"), c(this, "hasBeamTrim"), this);
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.shapes = C(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = C(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = C(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = C(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = C(e == null ? void 0 : e.parent) ? e.parent : null, this.children = C(e == null ? void 0 : e.children) ? e.children : [], this.siblings = C(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = C(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = C(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = C(e == null ? void 0 : e.cutDirection) ? e.cutDirection : "l", this.hasBeamTrim = C(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1);
  }
  validateSegment(e) {
    var s, n;
    (ue.lessThanOrEqualTo(e.w, 0) || ue.lessThanOrEqualTo(e.l, 0)) && new X({
      item: this,
      message: `Zero / negative dimension - l: ${e.l}, w: ${e.w}.`,
      field: [["l"], ["w"]]
    }), (ue.lessThan(e.x, 0) || ue.lessThan(e.y, 0)) && new X({
      item: this,
      message: `Negative position - x: ${e.x}, y: ${e.y}.`,
      field: [["x"], ["y"]]
    }), e != null && e.stock && (ue.greaterThan(e.x + e.l, e.stock.l) || ue.greaterThan(e.y + e.w, e.stock.w)) && new X({
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
class rt extends mt {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = _t(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
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
    const s = Fr(this.direction);
    this.shapes.forEach((o, l) => {
      this.positions.push({
        shape: o.id,
        [s]: e,
        [_r(s)]: 0,
        rot: o.rot.valueOf()
      }), o.inGroup = !0, e += l === this.shapes.length - 1 ? o[this.direction] : o[this.direction] + o.getMinSpacing(this.container);
    }), this[this.direction] = e;
    const n = Ft(this.direction), r = this.shapes.reduce((o, l) => l[n] > o ? l[n] : o, 0);
    if (this[n] = r, rn()) {
      const o = this.shapes.slice(0, -1).reduce((u, h) => u + h.getMinSpacing(this.container), 0), a = this.shapes.reduce((u, h) => u + h[this.direction], 0) + o;
      on([
        () => Ii(ue.equalTo(a, this[this.direction]), "group dimension is incorrect in direction").to.be.true,
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
    const e = Ft(this.direction);
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
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = e, a.id = n, new rt(a);
  }
  compress() {
    const e = super.compress.call(this);
    return e.direction = this.direction, e.positions = structuredClone(this.positions), e.shapes = this.shapes.map((s) => s.compress()), e.type = this.type, e.cloneType = "group", e;
  }
}
function Mc(i) {
  if (!i.length) return "n";
  const t = i.map((e) => e.grain).filter((e) => e);
  return t.length ? t.every((e) => e === "l") ? "l" : t.every((e) => e === "w") ? "w" : t.some((e) => e === "l" || e === "w") ? "y" : "n" : "n";
}
function _o(i) {
  return i.shapes !== void 0;
}
function ht(i) {
  return i instanceof rt && i.type !== "user";
}
function cs(i) {
  return i instanceof rt && i.type === "user";
}
function Mt(i) {
  return i instanceof ls;
}
function ai(i) {
  return i instanceof as;
}
function Ne(i) {
  return i instanceof Ui;
}
function It(i) {
  return i instanceof Tt;
}
function Zi(i) {
  return i instanceof ji;
}
function gt(i) {
  return i instanceof mt && !(i instanceof rt);
}
function qo(i) {
  return i instanceof mt || i instanceof rt;
}
function Bo(i) {
  return i instanceof us;
}
function Go(i) {
  return i instanceof Lt;
}
function Ho(i) {
  return i instanceof rt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof ls ? "inputUserGroup" : i instanceof as ? "inputStock" : i instanceof Ui ? "inputShape" : i instanceof Tt ? "stock" : i instanceof ji ? "container" : i instanceof mt && !(i instanceof rt) ? "shape" : i instanceof us ? "segment" : i instanceof mn ? "offcut" : i instanceof Lt ? "saw" : i instanceof Kt ? "rectangle" : null;
}
function As(i, t) {
  return br(i, t);
}
function Et(i, t) {
  return Vt(i, t);
}
function No(i, t, e) {
  wr(i, t, e);
}
function C(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function Yt(i, t = !1) {
  if (!C(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => C(s) && s) : e.some((s) => C(s));
}
function Fc(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return ai(e) && e.autoAdd ? s = 1 : s = C(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function _c(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = Wo(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function Wo(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function Uo() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function Ji(i = 0, t, e = null, s = null, n = null) {
  if (!Ne(e) && !Mt || s === "stock") return !1;
  let r, o;
  if (Ne(e) ? r = e.orientationLock : Mt(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || Mt(e))
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
function Ds(i, t, e = null, s = null, n = null) {
  if (!Ne(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? Ji(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function jo(i) {
  i.banding && (i.banding = qi(i.banding, "cc")), i.trim && (i.trim = qi(i.trim, "cc"));
}
function qc(i, t = 0) {
  return gt(i) || Ne(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && jo(i)), i;
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
const { addNotice: nt } = Hi(), {
  inputs: ke,
  totalInputShapes: zo,
  totalInputStock: Vo,
  createStockList: Yo,
  createShapeList: Xo,
  validateInputShapes: Ko,
  validateInputStock: yn,
  removeShape: Es,
  removeStock: Rs
} = Zs(), Zo = {
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
}, Jo = () => {
  var i, t;
  if ((i = ke == null ? void 0 : ke.inputStock) != null && i.value) {
    for (let e = ke.inputStock.value.length - 1; e >= 0; e--) {
      const s = ke.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && ke.inputStock.value.length > 1 || e !== 0) && Rs(s.listId);
    }
    if ((t = ke == null ? void 0 : ke.inputShapes) != null && t.value)
      for (let e = ke.inputShapes.value.length - 1; e >= 0; e--) {
        const s = ke.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && ke.inputShapes.value.length > 1 || e !== 0) && Es(s.listId);
      }
  }
}, Qo = (i, t = !1) => {
  var s, n;
  if (!t) return [];
  const e = [];
  if (!((s = ke == null ? void 0 : ke.inputShapes) != null && s.value)) return e;
  for (let r = ke.inputShapes.value.length - 1; r >= 0; r--) {
    const o = ke.inputShapes.value[r];
    if (!o) continue;
    if (!C(o.material)) {
      e.push(new X({
        item: o,
        message: "no_material",
        index: [r]
      }));
      continue;
    }
    const l = i.items.find((a) => a._id === o.material);
    (n = l == null ? void 0 : l.t) != null && n.length && (o.t ? l.t.includes(o.t) || e.push(new X({
      item: o,
      message: "invalid_thickness",
      index: [r]
    })) : e.push(new X({
      item: o,
      message: "no_thickness",
      index: [r]
    })));
  }
  return e;
}, vn = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...Zo,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, el = (i = {}) => {
  const t = vn(i), e = t.t;
  Jo();
  const s = [];
  t.useInventory || s.push(...yn()), s.push(...Ko({
    saw: null,
    partTrim: O({ v: t.partTrim }),
    useInventory: t.useInventory
  }));
  const n = Ct(s);
  return n.length > 0 ? (console.warn("Validation errors:", JSON.parse(JSON.stringify(n))), nt({
    type: "error",
    message: e("inputs_issue", { x: "part" }),
    additional: n.map((r) => e(r.message))
  }), !1) : !0;
};
async function tl(i) {
  var s, n;
  const t = vn(i), e = t.t;
  try {
    if (!el(t))
      return { valid: !1 };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (zo.value > t.maxShapes || Vo.value > t.maxStock))
      return t.onLimit(), { valid: !1 };
    if (t.useInventory) {
      const d = Qo(t.materialStore, !0), g = Ct(d);
      if (g.length > 0)
        return nt({
          type: "error",
          message: e("inputs_issue", { x: "material" }),
          additional: g.map((k) => e(k.message))
        }), { valid: !1 };
    } else {
      const d = yn(), g = Ct(d);
      if (g.length > 0)
        return nt({
          type: "error",
          message: e("inputs_issue", { x: "stock" }),
          additional: g.map((k) => e(k.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new Lt(t.selectedSaw) : new Lt(t.sawData), o = Ct(r.issues);
    if (o.length > 0)
      return nt({
        type: "error",
        message: e("inputs_issue", { x: "saw" }),
        additional: o.map((d) => e(d.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await Yo(r), u = Ct(a);
    if (u.length > 0)
      return nt({
        type: "error",
        message: e("inputs_issue", { x: "stock" }),
        additional: u.map((d) => e(d.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return nt({
        type: "error",
        message: e("no_stock")
      }), { valid: !1 };
    const { shapeList: h, issues: b } = await Xo({
      orientationModel: t.orientationModel
    }), S = Ct(b);
    if (S.length > 0)
      return nt({
        type: "error",
        message: e("inputs_issue", { x: "part" }),
        additional: S.map((d) => e(d.message))
      }), { valid: !1 };
    if (!(h != null && h.length))
      return nt({
        type: "error",
        message: e("no_parts_list")
      }), { valid: !1 };
    if (((n = (s = ke.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      ke.userGroups.value.forEach((k) => k.populateParentID(ke.inputShapes.value));
      const d = Ro(
        ke.userGroups.value,
        ke.inputShapes.value
      ), g = Ct(d);
      if (g.length > 0)
        return nt({
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
    return console.error("Validation error:", r), nt({
      type: "error",
      message: e("unexpected_error"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
  }
}
function il(i) {
  return !i || !Yt(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function hs(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function ds(i) {
  return `${i}Options`;
}
function sl(i, t, e) {
  const s = ds(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function nl(i, t, e = !0) {
  if (!hs(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    fs(i, t, r, e);
  e && bn(i, t, "all");
}
function fs(i, t, e, s = !0) {
  s && bn(i, t, e), e !== "all" && hs(i, t) && (i[t][e] = !1);
}
function bn(i, t, e) {
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
  const l = i[o][e], a = Object.values(l || {}).filter((b) => b);
  if (!Array.isArray(a)) return;
  const u = Bi(i, t, e, r);
  ci(i, t, e, !!Fe(u));
}
function wn(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Bi(i, t, "all", r), u = i[o][e], h = Object.values(u || {}).filter((b) => b);
  for (const b of l)
    b !== "all" && (n.includes(b) || (ps(i, t, b, e, s, r), Array.isArray(h) || ci(i, t, b, !1), ci(i, t, b, !!Fe(a))));
}
function ci(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = ds(t), r = il((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
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
  return t === "banding" && pn(e) && Fe(l) ? Oo(i, e, l) / 1e3 : l;
}
function Bc(i) {
  i != null && i.type && delete i.type, rl.call(this, i);
}
function rl(i) {
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
function ol(i) {
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
const ll = { id: "mini-stock-nav" }, al = ["onMousedown"], ul = { class: "id" }, cl = /* @__PURE__ */ Ie({
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
    return (r, o) => (v(), $("div", ll, [
      (v(!0), $(be, null, Le(e.stockList, (l, a) => (v(), $("button", {
        key: a,
        class: Se(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: we({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        E("div", ul, te(a + 1), 1),
        es(E("div", { class: "stack legibility" }, te(l.stack), 513), [
          [ts, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, al))), 128))
    ]));
  }
}), Zt = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, hl = {
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
}, dl = { id: "spinner" }, fl = ["width", "height"], pl = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function gl(i, t, e, s, n, r) {
  return v(), $("div", dl, [
    e.complete ? N("", !0) : (v(), $("svg", {
      key: 0,
      class: "loading",
      style: we({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      Vn('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, fl)),
    e.complete ? (v(), $("svg", {
      key: 1,
      class: "complete",
      style: we({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      E("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : N("", !0),
    e.showNumber ? (v(), $("div", pl, te(e.number), 1)) : N("", !0)
  ]);
}
const Ms = /* @__PURE__ */ Zt(hl, [["render", gl]]);
function ml(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function yl(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function vl(i, t, e, s, n = []) {
  const r = yl(i, e, s);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((h) => h.id)), u = o.map((h) => h.id).filter((h) => !a.has(h)).map((h) => `'${h}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return n.length && o.sort((a, u) => {
    const h = n.indexOf(a.id), b = n.indexOf(u.id);
    return h === -1 ? 1 : b === -1 ? -1 : h - b;
  }), o;
}
const bl = ["id"], wl = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Sl = /* @__PURE__ */ Ie({
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
    const e = i, s = t, n = G(0), r = G(!1), o = (y, T, j, R) => {
      if (!Ne(j) || T === 0)
        return y;
      const M = l();
      return T === 1 || T === 2 && R !== "n" && y ? M : y;
    }, l = (y) => {
      const T = { ...e, ...y };
      if (!T.rectangle || !Ne(T.rectangle)) return "";
      let j = "";
      switch (T.orientationModel) {
        case 0:
          j = Y.value;
          break;
        case 1:
          T.stockGrain === "y" || T.stockGrain === "n" ? j = T.rectangle.l >= T.rectangle.w ? "l" : "w" : T.rectangle.l >= T.rectangle.w ? j = T.stockGrain : j = j = T.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          j = T.rectangle.l >= T.rectangle.w ? "l" : "w";
          break;
      }
      return j;
    }, a = () => {
      if (e.disabled || V.value.length <= 1) return;
      let y = null;
      [1, 2].includes(e.orientationModel) ? y = b() : y = h(), n.value = y;
    }, u = (y) => {
      const T = V.value.findIndex((j) => j === y);
      return T === -1 ? 0 : T;
    }, h = () => {
      let y = 0;
      return y = u(Y.value) + 1, y > V.value.length - 1 && (y = 0), y;
    }, b = () => {
      let y = 0;
      if (Y.value)
        y = V.value.findIndex((T) => T === "");
      else {
        const T = l();
        y = V.value.findIndex((j) => j === T);
      }
      return y;
    }, S = (y) => {
      s("updateOrientation", y);
    }, d = () => {
      const y = Y.value;
      switch (e.orientationModel) {
        case 0:
          return y ? e.stockGrain === "n" ? y || e.shapeOrientation || "default" : e.stockGrain === "w" ? y === "w" ? "w" : "l" : y === "l" ? "l" : "w" : "default";
        case 1:
          return y ? e.stockGrain === "n" ? y || e.shapeOrientation || "default" : e.stockGrain === "w" ? y === "w" ? "w" : "l" : y === "l" ? "l" : "w" : "default";
        case 2:
          return y ? e.stockGrain === "n" ? y || e.shapeOrientation || "default" : e.stockGrain === "w" ? y === "w" ? "w" : "l" : y === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, g = () => {
      if (!e.rectangle) return;
      const y = o(
        Y.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (y !== Y.value) {
        k(y);
        return;
      }
      if (n.value = u(Y.value), !!Ne(e.rectangle)) {
        if (e.orientationModel === 1) {
          const T = ne.value ? l() : Y.value;
          k(T);
          return;
        }
        if (e.orientationModel === 2) {
          let T;
          ne.value ? T = e.stockGrain !== "n" ? l() : "" : T = Y.value, k(T);
        }
      }
    }, k = (y) => {
      n.value = u(y), S(y);
    }, q = () => {
      const y = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], T = ["l", "w", "y", "n"], j = [0, 1, 2], R = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, M = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, re = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, he = [];
      y.forEach((P) => {
        T.forEach((B) => {
          j.forEach((H) => {
            const Q = new Ui({
              l: P.l,
              w: P.w
            }), pe = l({
              orientationModel: H,
              rectangle: Q,
              stockGrain: B
            });
            let ce = "";
            Q.l === Q.w ? ce = "l === w" : Q.l > Q.w ? ce = "l >= w" : ce = "w > l";
            const Ue = ["l", "w", "y"].includes(B) ? R : M;
            he.push({
              Model: H,
              "Stock grain": B,
              "Stock grain description": re[B],
              Dimensions: ce,
              "Orientation lock": pe || "N/A",
              "Orientation Lock description": Ue[pe] || "N/A"
            });
          });
        });
      }), he.sort((P, B) => {
        if (P.Model !== B.Model)
          return P.Model - B.Model;
        if (P["Stock grain"] !== B["Stock grain"])
          return P["Stock grain"].localeCompare(B["Stock grain"]);
        const H = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return H[P.Dimensions] - H[B.Dimensions];
      }), console.table(he);
    }, V = Z(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Mt(e.rectangle)) return ["l", "w"];
      let y = ["", "l", "w"];
      return e.rectangle.multiEdit && (y = [" ", "", "l", "w"]), z.value && (y = y.filter((T) => T !== "w")), y;
    }), z = Z(() => {
      var y, T, j, R;
      return Ne(e.rectangle) || ai(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((y = e.rectangle) != null && y.l) && ((T = e.rectangle) != null && T.w) ? ((j = e.rectangle) == null ? void 0 : j.l) === ((R = e.rectangle) == null ? void 0 : R.w) : !1;
    }), Y = Z(() => {
      let y = "";
      return Mt(e.rectangle) ? y = e.rectangle.direction : Ne(e.rectangle) ? y = e.rectangle.orientationLock ?? "" : ai(e.rectangle) && (y = e.rectangle.grain ?? ""), y;
    }), J = Z(() => Mt(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), ne = Z(() => !J.value.l && !J.value.w), U = Z(() => Ji(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), K = Z(() => {
      var R;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (ai(e.rectangle) || e.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[e.rectangle.grain] || "noGrain";
      const y = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, T = e.stockGrain || "default";
      let j = "default";
      return Ne(e.rectangle) || e.rectangleType === "shape" ? j = d() : Mt(e.rectangle) && (j = e.rectangle.direction || "default"), ((R = y[T]) == null ? void 0 : R[j]) || y[T].default;
    });
    return xe(n, (y, T) => {
      r.value && T !== void 0 && S(V.value[y]);
    }, { immediate: !1 }), xe(J, (y, T) => {
      if (!e.rectangle || e.orientationModel === 0 || !Ne(e.rectangle) || Ne(e.rectangle) && (e.orientationModel === 2 && T.l && T.w && !Y.value || e.stockGrain === "n" && !Y.value))
        return;
      const j = l();
      Y.value !== j && S(j);
    }, { immediate: !1 }), xe(() => e.stockGrain, (y, T) => {
      y !== T && g();
    }, { immediate: !0 }), ot(() => {
      g(), Ve(() => {
        r.value = !0, e.debug && q();
      });
    }), (y, T) => (v(), $("div", {
      id: y.id,
      class: Se(["orientation-button", { rot: U.value, square: z.value, disabled: y.disabled, [K.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: we({
        backgroundColor: y.buttonBackground
      }),
      onClick: a
    }, [
      K.value === "delete" ? (v(), $("svg", wl, T[0] || (T[0] = [
        E("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : N("", !0),
      K.value === "freeRotation" ? (v(), $("svg", {
        key: 1,
        class: "arrow",
        style: we({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[1] || (T[1] = [
        E("g", null, [
          E("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          E("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          E("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          E("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : N("", !0),
      K.value === "leftRight" ? (v(), $("svg", {
        key: 2,
        class: "arrow",
        style: we({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[2] || (T[2] = [
        E("g", null, [
          E("path", { d: "m5.408 19.408h61.095" }),
          E("g", null, [
            E("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            E("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : N("", !0),
      K.value === "topBottom" ? (v(), $("svg", {
        key: 3,
        class: "arrow",
        style: we({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[3] || (T[3] = [
        E("g", null, [
          E("path", { d: "m19.408 66.503v-61.095" }),
          E("g", null, [
            E("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            E("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : N("", !0),
      K.value === "grainLeftRight" ? (v(), $("svg", {
        key: 4,
        class: "grain",
        style: we({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[4] || (T[4] = [
        E("g", null, [
          E("path", { d: "m3 3h99.887" }),
          E("path", { d: "m3.113 32h99.887" }),
          E("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : N("", !0),
      K.value === "grainTopBottom" ? (v(), $("svg", {
        key: 5,
        class: "grain",
        style: we({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, T[5] || (T[5] = [
        E("g", null, [
          E("path", { d: "m61 3v99.887" }),
          E("path", { d: "m32 3.113v99.887" }),
          E("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : N("", !0)
    ], 14, bl));
  }
}), kl = ["id"], xl = /* @__PURE__ */ Ie({
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
    const e = i, s = t, n = G({
      x1: !1,
      x2: !1,
      y1: !1,
      y2: !1
    });
    xe(() => e.inputShape.orientationLock, () => {
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = Ds(
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
    }, { deep: !0, immediate: !0 }), xe([
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
      const a = Ds(
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
    return ot(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), is(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (v(), $("div", {
      id: l.id,
      class: Se(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      E("div", {
        class: Se(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        E("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, kl));
  }
}), Cl = (i) => {
  i = i.replace(/['"]+/g, "");
  try {
    return new ui(i).valueOf();
  } catch {
    return null;
  }
};
function $l({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = G({
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
          const u = Cl(a);
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
function Pl({
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
function Ll({
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
const Il = ["id", "value", "inputmode", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Tl = /* @__PURE__ */ Ie({
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
    const e = i, s = t, n = G(!0), r = G(null), {
      handleInput: o,
      handleFocus: l,
      handleBlur: a,
      handleKeydown: u,
      handleCompositionStart: h,
      handleCompositionEnd: b,
      handlePaste: S
    } = $l({
      props: e,
      emit: s,
      isMounted: n
    });
    return is(() => {
      n.value = !1;
    }), (d, g) => (v(), $("input", oi(d.$attrs, {
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
    }), null, 16, Il));
  }
}), Ol = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Al = /* @__PURE__ */ Ie({
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
    const e = i, s = t, n = G(!0), r = G(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = Ll({
      props: e,
      emit: s,
      isMounted: n
    });
    return ot(() => {
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
    }, null, 40, Ol));
  }
}), Dl = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], El = ["disabled", "selected"], Rl = {
  key: 0,
  value: " "
}, Ml = ["hidden", "value", "disabled"], Fl = /* @__PURE__ */ Ie({
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
    const e = i, s = t, n = G(!0), r = G(null), o = Z(() => e.options.map((h) => {
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
    } = Pl({
      props: e,
      emit: s,
      isMounted: n
    });
    return (h, b) => {
      var S, d, g, k;
      return v(), $("select", oi(h.$attrs, {
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
        (...q) => x(l) && x(l)(...q)),
        onFocus: b[1] || (b[1] = //@ts-ignore
        (...q) => x(a) && x(a)(...q)),
        onBlur: b[2] || (b[2] = //@ts-ignore
        (...q) => x(u) && x(u)(...q))
      }), [
        E("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, te(((d = (S = e.text) == null ? void 0 : S.select) == null ? void 0 : d.toUpperCase()) ?? "SELECT"), 9, El),
        e.multiEdit ? (v(), $("option", Rl, te(((k = (g = e.text) == null ? void 0 : g.delete) == null ? void 0 : k.toUpperCase()) ?? "DELETE"), 1)) : N("", !0),
        (v(!0), $(be, null, Le(o.value, (q) => (v(), $("option", {
          key: q.value,
          hidden: q.hidden,
          value: q.value,
          disabled: q.disabled
        }, te(q.label), 9, Ml))), 128))
      ], 16, Dl);
    };
  }
}), _l = ["for"], ql = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, Fs = /* @__PURE__ */ Ie({
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
      zt(te(t.label) + " ", 1),
      t.required ? (v(), $("span", ql, "*")) : N("", !0)
    ], 8, _l));
  }
}), Bl = ["data-field-id"], Gl = ["disabled", "selected"], Hl = {
  key: 0,
  value: " "
}, Nl = ["hidden", "value", "disabled"], ft = /* @__PURE__ */ Ie({
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
    const e = t, s = i, n = G(null), r = G(null), o = G(!0), l = G(s.numberFormat), a = Z(() => s.custom ? "custom-" + s.id : s.id), u = Z(() => `${a.value}-error`), h = Z(() => s.label || s.placeholder), b = Z(() => K(s.type, s.numberFormat)), S = Z(() => y(s.type, s.numberFormat)), d = Z(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), g = Z(() => {
      if (s.type !== "unitDependent" || !s.value) return s.value;
      try {
        return O({ v: s.value, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), k = Z(() => s.options.map((R) => {
      var M, re;
      return {
        value: R.value,
        label: ((M = R.label) == null ? void 0 : M.toUpperCase()) || ((re = R.value) == null ? void 0 : re.toString().toUpperCase()),
        hidden: R.hidden || !1,
        disabled: R.disabled || !1
      };
    })), q = Z(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), V = Z(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": h.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), z = Z(() => ({
      ...V.value,
      type: s.type,
      inputMode: S.value,
      inputType: b.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      numberFormat: s.numberFormat
    })), Y = Z(() => ({
      ...V.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), J = Z(() => ({
      ...V.value,
      options: k.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      text: s.text
    })), ne = (R) => {
      r.value = R;
    }, U = (R) => s.label && s.enableLabel && s.labelPosition === R, K = (R, M) => {
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
    }, y = (R, M) => {
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
    }, j = (R, M) => {
      R.valid === void 0 || R.valid === !0 ? (o.value = !0, e("validation", n.value, R)) : R.valid === !1 && R.message && (o.value = !1, console.warn(`Field validation error for field ${M} - ${R.message}`), e("validation", n.value, R));
    };
    return xe(() => s.numberFormat, (R, M) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && R !== M && s.value)
          try {
            const re = O({ v: s.value, nf: R });
            e("update:value", re);
          } catch {
            e("update:value", R === "decimal" ? 0 : "0");
          }
        l.value = R;
      }
    }), (R, M) => (v(), $("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Se(["input-wrapper", q.value]),
      "data-field-id": a.value
    }, [
      U("first") ? (v(), fe(Fs, {
        key: 0,
        id: a.value,
        label: R.label,
        required: R.required
      }, null, 8, ["id", "label", "required"])) : N("", !0),
      d.value ? (v(), fe(Tl, oi({
        key: 1,
        ref: ne
      }, z.value, {
        "input-type": b.value,
        "input-mode": S.value,
        value: g.value,
        onValidation: j,
        "onUpdate:value": T
      }), null, 16, ["input-type", "input-mode", "value"])) : R.type === "checkbox" ? (v(), fe(Al, oi({
        key: 2,
        ref: ne,
        type: "checkbox"
      }, Y.value, {
        checked: R.value === R.trueValue,
        "onUpdate:value": M[0] || (M[0] = (re) => e("update:value", re))
      }), null, 16, ["checked"])) : R.type === "select" ? (v(), fe(Fl, oi({
        key: 3,
        ref: ne
      }, J.value, {
        "onUpdate:value": M[1] || (M[1] = (re) => e("update:value", re))
      }), {
        default: ss(() => {
          var re, he, P, B;
          return [
            E("option", {
              value: "",
              disabled: R.selectFirstOptionDisabled,
              selected: !R.value
            }, te(((he = (re = R.text) == null ? void 0 : re.select) == null ? void 0 : he.toUpperCase()) ?? "SELECT"), 9, Gl),
            R.multiEdit ? (v(), $("option", Hl, te(((B = (P = R.text) == null ? void 0 : P.delete) == null ? void 0 : B.toUpperCase()) ?? "DELETE"), 1)) : N("", !0),
            (v(!0), $(be, null, Le(k.value, (H) => (v(), $("option", {
              key: H.value,
              hidden: H.hidden,
              value: H.value,
              disabled: H.disabled
            }, te(H.label), 9, Nl))), 128))
          ];
        }),
        _: 1
      }, 16)) : N("", !0),
      U("last") ? (v(), fe(Fs, {
        key: 4,
        id: a.value,
        label: R.label,
        required: R.required
      }, null, 8, ["id", "label", "required"])) : N("", !0),
      Yn(R.$slots, "default")
    ], 10, Bl));
  }
}), Wl = {
  key: 0,
  class: "inputs"
}, Ul = { class: "label" }, jl = { class: "label" }, zl = { class: "label" }, Vl = ["onClick"], Yl = { class: "price" }, Xl = ["aria-label"], Qi = /* @__PURE__ */ Ie({
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
    const e = i, s = t, { t: n } = Gi(["main", "errors"]), r = G(!1), o = Z(() => e.extraType + "Options"), l = Z(() => {
      var k;
      if (!((k = e.allOptions) != null && k.length)) return "auto";
      const d = e.allOptions.length;
      return d ? `repeat(${d + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), a = (d, g) => {
      s("update-all", e.shape, e.extraType, d, g);
    }, u = (d, g, k) => {
      s("set", e.shape, e.extraType, d, g, k);
    }, h = (d, g, k, q, V) => {
      var ne;
      if (!d) return [];
      const z = (ne = g == null ? void 0 : g[k]) == null ? void 0 : ne[q];
      if (!z)
        return console.error(`ExtrasInputs: cannot find pricing options for ${k} > ${q}`), [];
      const Y = Object.values(z);
      if (!Y.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${k} > ${q}`), [];
      const J = Y.filter((U) => typeof U == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(d, J, V) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, b = (d) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const g = e.getPrice(e.shape, e.extraType, d);
      return g ? e.formatPrice(g) : "";
    }, S = () => {
      const d = [];
      e.extraType in e.shape || new X(
        {
          item: e.shape,
          message: `The extra type '${e.extraType}' does not exist in the part`
        }
      ), o.value in e.shape || new X(
        {
          item: e.shape,
          message: `The options key '${o.value}' does not exist in the part`
        }
      ), d.length && (r.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + d.map((g) => g.message).join(" ")));
    };
    return ot(() => S()), (d, g) => {
      var q, V, z, Y, J, ne, U, K;
      const k = qt("font-awesome-icon");
      return r.value ? N("", !0) : (v(), $("div", {
        key: 0,
        class: Se(["extras group", [d.extraType]]),
        style: we({ "grid-column-end": "span " + d.partColumns })
      }, [
        d.allOptions.length === 1 && d.allOptions[0].length === 1 ? (v(), $("div", Wl, [
          E("div", Ul, te((V = (q = d.allOptions) == null ? void 0 : q[0]) == null ? void 0 : V[0]), 1),
          E("div", null, [
            (z = d.shape) != null && z[o.value] && "all" in d.shape[o.value] ? (v(), fe(ft, {
              key: 0,
              id: `${d.extraType}-all-${d.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: x(Ut)(x(n)("all")),
              "true-value": (J = (Y = d.allOptions) == null ? void 0 : Y[0]) == null ? void 0 : J[0],
              "false-value": "",
              value: (U = d.shape[o.value].all) == null ? void 0 : U[(ne = d.labels) == null ? void 0 : ne[0]],
              "onUpdate:value": g[0] || (g[0] = (y) => {
                var T, j;
                u("all", (T = d.labels) == null ? void 0 : T[0], y), a((j = d.labels) == null ? void 0 : j[0], y);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : N("", !0)
          ]),
          (v(!0), $(be, null, Le(d.extraKeys, (y) => {
            var T, j, R, M, re, he;
            return v(), $("div", { key: y }, [
              (T = d.labels) != null && T[0] && ((R = (j = d.shape) == null ? void 0 : j[o.value]) != null && R[y]) && d.labels[0] in d.shape[o.value][y] ? (v(), fe(ft, {
                key: 0,
                id: `${d.extraType}-${y}-${d.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: x(Ut)(x(n)(((M = d.userFriendlyFieldMap) == null ? void 0 : M[y]) || y)),
                "true-value": (he = (re = d.allOptions) == null ? void 0 : re[0]) == null ? void 0 : he[0],
                "false-value": "",
                value: d.shape[o.value][y][d.labels[0]],
                "onUpdate:value": (P) => u(y, d.labels[0], P)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : N("", !0)
            ]);
          }), 128))
        ])) : (v(), $("div", {
          key: 1,
          class: "grid inputs",
          style: we({
            "grid-template-columns": l.value
          })
        }, [
          (K = d.shape) != null && K[o.value] && "all" in d.shape[o.value] ? (v(), $(be, { key: 0 }, [
            E("div", jl, te(x(Ut)(x(n)("all"))), 1),
            (v(!0), $(be, null, Le(d.allOptions, (y, T) => {
              var j, R;
              return v(), fe(ft, {
                id: `${d.extraType}-all-${d.labels[T]}-${T}-${d.shapeIndex}`,
                key: `${d.extraType}-all-${d.labels[T]}-${T}-${d.shapeIndex}`,
                type: "select",
                disabled: h(d.pricing, d.shape, o.value, "all", T).length === 0,
                options: h(d.pricing, d.shape, o.value, "all", T).map((M) => ({ value: M, label: M })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (R = d.shape[o.value].all) == null ? void 0 : R[(j = d.labels) == null ? void 0 : j[T]],
                "onUpdate:value": (M) => {
                  var re, he;
                  u("all", (re = d.labels) == null ? void 0 : re[T], M), a((he = d.labels) == null ? void 0 : he[T], M);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            g[2] || (g[2] = E("div", null, null, -1)),
            g[3] || (g[3] = E("div", null, null, -1))
          ], 64)) : N("", !0),
          (v(!0), $(be, null, Le(d.extraKeys, (y) => {
            var T, j;
            return v(), $(be, { key: y }, [
              (T = d.shape) != null && T[o.value] && y in d.shape[o.value] ? (v(), $(be, { key: 0 }, [
                E("div", zl, te(x(Ut)(x(n)(((j = d.userFriendlyFieldMap) == null ? void 0 : j[y]) || y))), 1),
                (v(!0), $(be, null, Le(d.allOptions, (R, M) => {
                  var re;
                  return v(), fe(ft, {
                    id: `${d.extraType}-${y}-${d.labels[M]}-${M}-${d.shapeIndex}`,
                    key: `${d.extraType}-${y}-${d.labels[M]}-${M}-${d.shapeIndex}`,
                    type: "select",
                    disabled: h(d.pricing, d.shape, o.value, y, M).length === 0,
                    options: h(d.pricing, d.shape, o.value, y, M).map((he) => ({
                      value: he,
                      label: he
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: d.shape[o.value][y][(re = d.labels) == null ? void 0 : re[M]],
                    "onUpdate:value": (he) => {
                      var P;
                      return u(y, (P = d.labels) == null ? void 0 : P[M], he);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : N("", !0),
              E("div", {
                class: "delete",
                onClick: () => x(fs)(d.shape, d.extraType, y)
              }, [
                me(k, { icon: ["fass", "trash"] })
              ], 8, Vl),
              E("div", Yl, te(b(y) || x(n)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        E("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": x(n)("action_item", { a: "delete", i: d.extraLabel }),
          onClick: g[1] || (g[1] = () => x(nl)(d.shape, d.extraType, !0))
        }, [
          me(k, { icon: ["fass", "trash"] }),
          zt(" " + te(x(n)("action_item", { a: "delete", i: d.extraLabel })), 1)
        ], 8, Xl)
      ], 6));
    };
  }
}), Kl = ["id", "disabled"], Zl = { class: "icon" }, Jl = /* @__PURE__ */ Ie({
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
      const l = qt("font-awesome-icon");
      return v(), $("button", {
        id: r.id,
        class: Se(["finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (b = (h = r.inputShape) == null ? void 0 : h.finish) == null ? void 0 : b.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        E("div", Zl, [
          me(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = E("div", { class: "indicator" }, null, -1))
      ], 10, Kl);
    };
  }
}), Ql = Ie({
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
}), ea = ["id", "disabled"];
function ta(i, t, e, s, n, r) {
  const o = qt("font-awesome-icon");
  return v(), $("button", {
    id: i.id,
    class: Se(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    me(o, { icon: ["fass", "hammer"] })
  ], 10, ea);
}
const ia = /* @__PURE__ */ Zt(Ql, [["render", ta]]), sa = { id: "uploader" }, na = {
  key: 0,
  class: "debug"
}, ra = {
  key: 1,
  class: "selected-files"
}, oa = ["src"], la = ["onClick"], aa = !0, ua = /* @__PURE__ */ Ie({
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
    const e = $t(() => Promise.resolve().then(() => Vi)), s = G(null), n = G({
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
      const q = Array.from(k), V = q.filter((y) => !l(y));
      if (V.length > 0) {
        const y = V.map((T) => T.name).join(", ");
        alert(`Invalid file type(s): ${y}
Only JPG and PNG files are allowed.`), g.value = "";
        return;
      }
      const z = n.value.files || [];
      if (z.length + q.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), g.value = "";
        return;
      }
      const J = [...z, ...q], ne = h(J), U = J.map((y, T) => ({
        originalName: y.name,
        newName: `${r.prefix}-${T + 1}-${r.uniqueId}${b(y.name)}`
      })), K = {
        shapeId: r.shapeId,
        files: J,
        previewUrls: ne,
        metadata: U
      };
      n.value = K, o("update", K), g.value = "";
    }, h = (d) => d.map((g) => URL.createObjectURL(g)), b = (d) => d.substring(d.lastIndexOf(".")), S = (d) => {
      URL.revokeObjectURL(n.value.previewUrls[d]);
      const g = [...n.value.files], k = [...n.value.previewUrls], q = [...n.value.metadata];
      if (g.splice(d, 1), k.splice(d, 1), q.splice(d, 1), g.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const V = {
          shapeId: r.shapeId,
          files: g,
          previewUrls: k,
          metadata: q
        };
        n.value = V, o("update", V);
      }
    };
    return Xn(() => {
      var d;
      (d = n.value) != null && d.previewUrls && n.value.previewUrls.forEach((g) => URL.revokeObjectURL(g));
    }), ot(() => {
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
      var q;
      const k = qt("font-awesome-icon");
      return v(), $("div", sa, [
        i.env === "development" && aa ? (v(), $("div", na, [
          me(x(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : N("", !0),
        E("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        E("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          me(k, { icon: ["fass", "files"] })
        ]),
        (q = n.value.files) != null && q.length ? (v(), $("div", ra, [
          (v(!0), $(be, null, Le(n.value.files, (V, z) => (v(), $("div", {
            key: z,
            class: "selected-file"
          }, [
            E("img", {
              src: n.value.previewUrls[z],
              alt: "Preview"
            }, null, 8, oa),
            E("button", {
              class: "remove-file",
              type: "button",
              onClick: (Y) => S(z)
            }, [
              me(k, { icon: ["fass", "trash"] })
            ], 8, la)
          ]))), 128))
        ])) : N("", !0)
      ]);
    };
  }
}), ca = /* @__PURE__ */ Zt(ua, [["__scopeId", "data-v-bb77aee9"]]);
function ha(i) {
  var l;
  const t = i.x, e = i.x + i.l, s = Je().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = Je().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
  this.axes.shapeXAxis ? this.axes.shapeXAxis.call(Ai(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(Ai(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((l = i == null ? void 0 : i.stock) == null ? void 0 : l.type) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.call(Di(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(Di(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function da() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(Qs(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(en(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function Sn(i, t, e) {
  !e || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    e === "x" ? fa.call(this, r, o, t[n]) : pa.call(this, r, o, t[n]);
  });
}
function fa(i, t, e) {
  const s = Je().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = kn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Ai(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, h;
    return ((h = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : h.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function pa(i, t, e) {
  const s = Je().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = kn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Di(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  ga(r), this.axes.cutMeasurementYAxes.push(r);
}
function kn(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function ga(i) {
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
function ma() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function zi() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function ya() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => va.call(this, e)).classed("hidden", (e, s, n) => this.isTextHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => ba.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, s, n) => this.isNameHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, s, n) => {
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
  i.empty() ? this.selections.shapeLengthText = this.selections.shapeWrappers.append("text").attr("class", "shape-text length").text((t) => wa.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
    const r = s[e].getBBox().height;
    return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
  }) : i.each((t, e, s) => {
    const n = s[e], r = n.getAttribute("x"), o = n.getAttribute("y"), l = this.getRectangleCoordinate(t, "x", "center").toString(), a = n.getBBox().height, u = this.getRectangleCoordinate(t, "y", "top", -(a / 2 + 2)).toString();
    (r != l || o != u) && (n.setAttribute("x", l), n.setAttribute("y", u));
  }), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Sa.call(this, e)).classed("hidden", (e, s, n) => this.isWidthHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, s, n) => {
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
function va(i) {
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
function ba(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function wa(i) {
  return this.state.debug === "guillotine" ? "" : O({ v: i.l, o: this.numberConfig }).toString();
}
function Sa(i) {
  return this.state.debug === "guillotine" ? "" : O({ v: i.w, o: this.numberConfig }).toString();
}
function ka(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = Xr(
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
      const a = un(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (u) => u.append("line").call((h) => o.call(this, h)),
        (u) => u.call((h) => o.call(this, h)),
        (u) => u.remove()
      );
    }
    s = Kr(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Bt();
  for (const r of e.toArray()) {
    const o = cn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = Vr(i, o, this.props.stock.value);
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
  return xa.call(this, t, i), Ca.call(this, t, i), !!(t != null && t.length);
}
function xa(i, t) {
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
function Ca(i, t) {
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
const $a = (i) => `${i.parentID}-${i.x}-${i.y}-${i.w}-${i.l}`;
function Pa() {
  if (!this.props.containerWidth) return;
  hi.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && Ia.call(this), La.call(this);
}
function La() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, $a).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return _s.call(this, t), t.size() > 0 && Hs.call(this, t.data()), qs.call(this, t), t.on("mousedown", Bs.bind(this)), t;
    },
    (i) => (_s.call(this, i), i.size() > 0 && Hs.call(this, i.data()), qs.call(this, i), i.on("mousedown", Bs.bind(this)), i),
    (i) => i.remove()
  ), this.settings.main && requestAnimationFrame(() => ya.call(this)), this.selections.shapeWrappers.size() > 0;
}
function Ia() {
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
  this.scales.scoreColorScale = li([Rt(251, 224, 255), Rt(122, 0, 138)]).domain([e, s]);
}
function _s(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => {
    var s;
    return (s = di.call(this, e)) == null ? void 0 : s.toString();
  });
  this.selections.shapeRectangles ? this.selections.shapeRectangles = tn(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function Ta(i) {
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
function qs(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (t) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const e = Ee(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    var n;
    const s = Ee(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", (n = di.call(this, e)) == null ? void 0 : n.toString());
  }, { passive: !0 });
}
function Bs(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Oa.call(this, i, t), (this.settings.app || this.settings.embed) && Ea.call(this, i, t), this.state.device === "desktop" && (zi.call(this), ha.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function Oa(i, t) {
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
        ], Da.call(this, t);
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
    console.table(Aa(t, e));
  }
}
function Aa(i, t) {
  return t.reduce((e, s) => {
    const n = Ln(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function Da(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function Ea(i, t) {
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
          return Rt(252, 3, 182);
        if (i.addedAsGroup)
          return Rt(43, 156, 16);
        if (typeof i.guillotineData.myPhase == "number") {
          const e = [0, 115, 255], s = [176, 255, 231];
          return `rgb(${e.map((r, o) => Math.round(r + i.guillotineData.myPhase / 5 * (s[o] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (i.addedAsGroup !== !1)
          return Rt(43, 156, 16);
        break;
      case "priorityShapes":
        if (i != null && i.priority && ((t = i.priority) != null && t[i.stock.parentID]))
          return Rt(139, 171, 46);
        break;
      case "score":
        return this.scales.scoreColorScale(i.bestScore.total);
    }
  return this.scales.shapeColorScale(parseInt(i.parentID));
}
function Ra(i) {
  const t = [];
  for (const e of i)
    if (e != null && e._banding)
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = Ta.call(this, s));
        const o = Ma.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function Gs(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Li.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Li.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Li.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Li.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Hs(i) {
  if (!this.settings.main) return;
  const t = Ra.call(this, i);
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t).join(
    (e) => e.append("line").call((s) => Gs.call(this, s)),
    (e) => e.call((s) => Gs.call(this, s)),
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
function Ma(i, t) {
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
function Fa(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const Ns = (i) => `${i.w}-${i.l}-${i.grain}`;
function Ws(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Us(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function _a() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), da.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Ns).join(
    (i) => i.append("rect").attr("class", "background stock").call((t) => Ws.call(this, t)),
    (i) => i.call((t) => Ws.call(this, t)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Ns).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((t) => Us.call(this, t)),
    (i) => i.call((t) => Us.call(this, t)),
    (i) => i.remove()
  );
}
function xn(i) {
  return `${i.x}-${i.y}-${i.w}-${i.l}`;
}
function js(i) {
  if (!this.props.containerWidth)
    return !1;
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(i, xn).join(
    (t) => t.append("rect").attr("class", "segment").call((e) => zs.call(this, e)),
    (t) => t.call((e) => zs.call(this, e)),
    (t) => t.remove()
  ), qa.call(this, this.selections.segmentRectangles), !this.settings.app && this.state.env === "development" && Ga.call(this);
}
function zs(i) {
  return i.style("opacity", (t) => (t == null ? void 0 : t.offcut) === !0 ? 0.5 : 1).classed("offcut", (t) => t.offcut).classed("merged", (t) => t.merged).classed("near", (t) => t.shapePosition === "near").classed("far", (t) => t.shapePosition === "far").classed("completed", (t) => t.completed).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function qa(i) {
  this.selections.segmentGroup.selectAll("text").data(i, xn).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => Vs.call(this, e)),
    (t) => t.call((e) => Vs.call(this, e)),
    (t) => t.remove()
  );
}
function Vs(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").text(Ba.call(this)).attr("dominant-baseline", "middle");
}
function Ba(i) {
  if (this.state.env !== "development" || i.offcut) return null;
  const t = i.cutDirection === "l" ? "→" : "↑";
  return this.state.env === "development" ? `${t} ${i.id}` : t;
}
function Ga() {
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
    ].reduce((n, r) => (n[r] = Ln(e, r), n), {}));
  });
}
function Cn(i) {
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
function Ha(i) {
  return `${i.stock.saw.bladeWidth}-${i.x1}-${i.y1}-${i.x2}-${i.y2}`;
}
function Na() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, Ha).join(
    (i) => i.append("line").attr("class", "cut").call((t) => Ys.call(this, t)),
    (i) => i.call((t) => Ys.call(this, t)),
    (i) => i.remove()
  ));
}
function Ys(i) {
  return i.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return e < 1 ? 1 : Math.ceil(e);
  }).attr("x1", (t) => this.scales.xPositionScale(t.getVisCoords("x1"))).attr("x2", (t) => this.scales.xPositionScale(t.getVisCoords("x2"))).attr("y1", (t) => this.scales.yPositionScale(t.getVisCoords("y1"))).attr("y2", (t) => this.scales.yPositionScale(t.getVisCoords("y2"))).classed("trim", (t) => t.isTrim);
}
function $n(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function Pn(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function Wa(i, t, e, s) {
  this.selections.cutLines.style("visibility", (n) => typeof i.guillotineData[e] == "number" && n.guillotineData[e] <= i.guillotineData[e] || !s && n.guillotineData.parentSegmentID === t ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", (n) => i.stock.cutType === "guillotine" && n.isTrim ? n.type === i.type : n.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (n) => n.guillotineData.ptxDummyCut), s || ja.call(this, i, t);
}
function Ua(i, t, e, s, n) {
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
    this.state.device === "desktop" && !i.isTrim && Sn.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function ja(i, t) {
  var r, o, l, a, u, h;
  const e = (r = i == null ? void 0 : i.guillotineData) == null ? void 0 : r.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (b) => $n(b, t, e)), this.selections.cutLines.classed("inside-segment", (b) => Pn(b, t));
  const s = Cn.call(this, i);
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
    ], S = [(u = i == null ? void 0 : i.distances) == null ? void 0 : u.left, (h = i == null ? void 0 : i.distances) == null ? void 0 : h.right]), this.state.device === "desktop" && !i.isTrim && S && Sn.call(this, b, S, g);
  }
}
function za(i = null, t = "") {
  var d, g, k, q;
  if (i === null || this.selections.cutLines.empty()) return;
  const e = this.props.cuts.value[i];
  hi.call(this), zi.call(this), Ee(this.selections.cutLines.nodes()[i].parentElement).raise();
  const s = (d = e.guillotineData) == null ? void 0 : d.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (g = e == null ? void 0 : e.stock) == null ? void 0 : g.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((k = e == null ? void 0 : e.stock) == null ? void 0 : k.cutType) && s !== null && typeof s < "u" ? Wa.call(this, e, s, l, t) : Ua.call(this, e, i, o, r, n), Va.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = Cn.call(this, e);
  if (a === !1) return;
  const { main: u, siblings: h } = a;
  if (!((q = e == null ? void 0 : e.guillotineData) != null && q.parentSegmentID))
    return js.call(this, [u]);
  const b = h == null ? void 0 : h.length;
  let S = [];
  if (b) {
    for (let z = b; z--; )
      h[z] && (h[z].completed = !1);
    if (e.guillotineData.segmentCutOrder === void 0 || e.guillotineData.segmentCutOrder === null)
      return;
    const V = e.guillotineData.segmentCutOrder;
    for (let z = 0; z < b; z++)
      z < V && (h[z].completed = !0);
    S.push(...h), S = S.filter((z) => z);
  }
  S.length && js.call(this, S);
}
function Va(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var l;
    let r = Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock)));
    const o = (l = i == null ? void 0 : i.guillotineData) == null ? void 0 : l.segmentCutOrder;
    return ($n(s, e, o) || Pn(s, e)) && (r += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (r = 5), r;
  });
}
function Ya() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections.cutLines.attr("stroke-width", (i) => {
    const t = this.scales.measurementScale(this.getBladeWidth(i.stock));
    return t < 1 ? 1 : Math.ceil(t);
  }), hi.call(this), zi.call(this);
}
function Xa(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Ln(i, t) {
  return Vt(i, t);
}
class Ka {
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
      xScale: Je(),
      yScale: Je(),
      yPositionScale: Je(),
      xPositionScale: Je(),
      yAxisScale: Je(),
      measurementScale: Je(),
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
    }, s = (n, r) => Rt("#" + (Xa(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => di.call(this, s));
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
    Pa.call(this);
  }
  drawStock() {
    _a.call(this);
  }
  drawCuts() {
    Na.call(this);
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), hi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), ma.call(this);
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
    Fa.call(this);
  }
  drawPositions(t) {
    ka.call(this, t);
  }
  showCut(t) {
    za.call(this, t);
  }
  resetCuts() {
    Ya.call(this);
  }
}
const Za = ["id"], Ja = /* @__PURE__ */ Ie({
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
    moveMode: { default: () => G(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape"],
  setup(i, { expose: t, emit: e }) {
    const { r: s, activeStock: n, activeShapes: r, activeCuts: o, activeSegments: l, currentCutIndex: a, getStock: u, getShapes: h, getSegments: b, getCuts: S } = Js(), d = i, g = e, k = (ie) => {
      g("shape-colour-update", ie);
    }, q = (ie) => {
      ie != null && ie.id && g("shape-select", ie.id.toString());
    }, V = (ie) => {
      ie && g("add-to-parts-bin", ie);
    }, z = (ie, et) => {
      ie && g("move-shape", ie, et);
    }, Y = G(0), J = G(0), ne = G(null);
    let U, K = G(!1);
    ot(() => re());
    const y = Z(() => ({
      format: d.numberFormat,
      decimals: d.decimalPlaces
    })), T = Z(() => d.stockId ? u(d.stockId) : n.value), j = Z(() => d.stockId ? h(d.stockId) : r.value), R = Z(() => d.main ? d.stockId ? S(d.stockId) : o.value : []), M = Z(() => d.main ? d.stockId ? b(d.stockId) : l.value : []);
    Kn(ne, (ie) => {
      const et = ie[0], { width: yt } = et.contentRect;
      yt > 0 && (Y.value = yt);
    }), Zn(
      Y,
      (ie) => {
        U && (ie <= 0 || (U.setDevice(), U.resetShapeAxes(), U.drawAll()));
      },
      { throttle: 100 }
    ), xe(n, (ie) => {
      ie && (Y.value <= 0 || (U.setDevice(), U.drawStock()));
    }), xe(r, (ie) => {
      ie && (Y.value <= 0 || (U.setDevice(), U.drawShapes()));
    }), xe(o, () => {
      Y.value <= 0 || U.drawCuts();
    }), xe(a, () => {
      Y.value <= 0 || (U.toggleSegments(!0), U.showCut(a.value));
    }), xe(y, (ie) => {
      U.updateNumberFormat(ie.format, ie.decimals, null);
    });
    const re = () => {
      const ie = {
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
          shapes: j,
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
          onShapeSelect: q,
          onAddToPartsBin: V,
          onMoveShape: z
        }
      };
      U = new Ka(ie), K.value = !0;
    };
    return t({
      loaded: K,
      toggleShapes: (ie = !1) => {
        U && U.toggleShapes(ie);
      },
      toggleCuts: (ie = !1) => {
        U && U.toggleCuts(ie);
      },
      toggleSegments: (ie = !1) => {
        U && U.toggleSegments(ie);
      },
      drawShapes: () => {
        U && U.drawShapes();
      },
      drawStock: () => {
        U && U.drawStock();
      },
      drawPositions: (ie) => {
        U && U.drawPositions(ie);
      },
      resetPositions: () => {
        U && U.removePositions();
      },
      findShape: (ie) => {
        U && U.findShape(ie);
      },
      clearSelection: () => {
        U && U.clearSelection();
      },
      resetCuts: () => {
        U && (U.toggleSegments(!1), U.resetCuts());
      },
      showCut: (ie) => {
        U && (U.toggleSegments(!0), U.showCut(ie));
      },
      requiresStretch: (ie) => {
        U && U.requiresStretch(ie);
      }
    }), (ie, et) => (v(), $("div", {
      id: ie.elementId,
      ref_key: "diagramContainerRef",
      ref: ne,
      class: "diagram-container"
    }, null, 8, Za));
  }
}), Qa = {
  key: 0,
  class: "debug"
}, eu = { key: 2 }, tu = {
  key: 0,
  class: "row table-heading"
}, iu = {
  key: 0,
  class: "cell center"
}, su = {
  key: 1,
  class: "cell delete"
}, nu = { class: "cell" }, ru = ["id", "disabled", "onClick"], ou = {
  key: 0,
  class: "cell center"
}, lu = ["onClick"], au = {
  key: 1,
  class: "cell"
}, uu = ["disabled", "aria-label", "onClick"], cu = { class: "button-wrapper main" }, hu = ["aria-label"], du = ["aria-label", "disabled"], fu = ["aria-label"], pu = { id: "part-count" }, gu = {
  key: 3,
  id: "messages"
}, mu = {
  key: 0,
  class: "heading"
}, yu = { class: "content" }, vu = {
  key: 4,
  id: "progress"
}, bu = !1, wu = /* @__PURE__ */ Ie({
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
    const s = $t(() => Promise.resolve().then(() => Du)), n = $t(() => Promise.resolve().then(() => Ru)), r = $t(() => Promise.resolve().then(() => ec)), o = $t(() => Promise.resolve().then(() => oc)), l = $t(() => Promise.resolve().then(() => Vi)), { t: a } = Gi(["main", "errors"]), { inputs: u, totalInputShapes: h, getShapeGrainSummary: b, updateNumberFormat: S, validateInputStock: d } = Zs(), { r: g, updateFromResult: k, stackedStock: q, uniqueAddedShapes: V, uniqueUsedStock: z, activeStockId: Y, setActiveStockId: J } = Js(), { progress: ne, reset: U } = cr(), { addNotice: K } = Hi(), { tip: y, update: T, hide: j } = ar(), R = i, M = e, re = "production", he = G((navigator == null ? void 0 : navigator.language) || "en-US"), P = Jn(null), B = window.location.hostname, H = G(!1), Q = G(!0), se = Qn("Checkout/currentURL", window.location.href), pe = ns(), ce = G([]), Ue = G(!1), Qe = G(!1), A = G(!1), lt = G(!1), ie = G(0), et = G(!1), yt = G(Uo()), vt = G(!1), { socket: at } = ur({
      refs: {
        connected: H,
        thinking: A
      },
      callbacks: {
        onResult(f) {
          var I, _, D, ee;
          const p = f.result;
          if (k(p), !((I = p.shapeList) != null && I.length) || !((_ = p.stockList) != null && _.length)) {
            U(), K({
              type: "error",
              message: Pe(a("no_result")),
              additional: [Pe(a("check_inputs"))]
            }), A.value = !1;
            return;
          }
          Bn();
          const w = {
            jobId: f.jobId,
            metadata: g.metadata.value,
            parts: V.value.map((m) => {
              var le, Ae, ti;
              return {
                l: m.l,
                w: m.w,
                t: m == null ? void 0 : m.t,
                material: m.material,
                orientationLock: m.orientationLock,
                q: (Ae = (le = g.metadata.value) == null ? void 0 : le.addedPartTally) == null ? void 0 : Ae[m.parentID],
                name: m.name,
                banding: m.banding,
                finish: m.finish,
                customData: m.customData,
                stockId: ((ti = m == null ? void 0 : m.stock) == null ? void 0 : ti.id) || (m == null ? void 0 : m.stockId)
              };
            }),
            stock: z.value.map((m) => {
              var le, Ae;
              return {
                id: m.id,
                name: m == null ? void 0 : m.name,
                l: m.l,
                w: m.w,
                t: m == null ? void 0 : m.t,
                material: m.material,
                q: (Ae = (le = g.metadata.value) == null ? void 0 : le.usedStockTally) == null ? void 0 : Ae[m.parentID],
                trim: m == null ? void 0 : m.trim,
                cost: m == null ? void 0 : m.cost,
                analysis: m == null ? void 0 : m.analysis,
                type: m == null ? void 0 : m.type
              };
            }),
            offcuts: g.offcuts.value.map((m) => ({
              l: m.l,
              w: m.w,
              t: (m == null ? void 0 : m.t) ?? null,
              q: m.q,
              stockId: m.stockId
            })),
            inputs: {
              parts: u.inputShapes.value.map((m) => {
                const le = { ...m };
                return delete le.listId, le;
              })
            }
          };
          if ((ee = (D = g == null ? void 0 : g.metadata.value) == null ? void 0 : D.unplacedParts) != null && ee.length) {
            const m = g.metadata.value.unplacedParts.map((le) => le.id).join();
            K({
              type: "warning",
              message: Pe(a("parts_not_fit")) + ": " + m
            });
          }
          M("result", w), A.value = !1;
        },
        onUser(f) {
          P.value = f;
        },
        onConnectError(f) {
          K({
            type: "error",
            message: Pe(a("cannot_connect")),
            additional: [f]
          });
        },
        onError(f) {
          K({
            type: "error",
            message: Pe(a("error_occurred")),
            additional: [f]
          });
        }
      }
    }), Ye = {
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
    }, F = ct(Ye), Te = ct({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), $e = G(null), Jt = G(!1), Ce = G(""), ut = G(""), _e = ct({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Ge = G([]), Me = G([]), Ot = G([]), Gt = G(!1), ze = ct({
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
    }), ye = ct({
      labels: [],
      pricing: {},
      options: {},
      keys: pt
    }), Oe = ct({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), Qt = ct({
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
    }), Ht = G([]), mi = Z(() => {
      var p;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (p = Ge.value[0]) == null ? void 0 : p.name,
          options: Ge.value.map((w) => ({
            value: w.name,
            label: w.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: F.numberFormat === "decimal" ? "float" : "string",
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
      ], ...Ht.value];
    }), bt = Z(() => vl(
      Qt,
      mi.value,
      "parts",
      Te.stockType,
      F.fieldOrder
    )), wt = Z(() => {
      let f = bt.value.length + 1;
      return u.inputShapes.value.length > 1 && f++, f;
    }), L = Z(() => {
      const f = {
        id: "34px",
        del: "30px",
        info: "30px"
      }, p = [];
      for (const w of bt.value)
        w.id !== "trim" && p.push(w.w ?? "minmax(20px, 1fr)");
      return p.unshift(f.id), u.inputShapes.value.length > 1 && p.push(f.del), p.join(" ");
    }), W = Z(() => ({
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
    })), oe = Z(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), ve = Z(() => {
      var f, p;
      return !(!P.value || P.value && ((p = (f = P.value) == null ? void 0 : f.api) != null && p.whiteLabel));
    }), qe = {
      stockType: (f) => {
        const p = ["sheet", "linear", "roll"];
        p.includes(f) || console.warn(`${f} is not a valid stockType, expected ${p.join("|")}`), Te.stockType = f, f === "linear" && (Te.cutType = null, Te.cutPreference = null);
      },
      stockSelection: (f) => {
        const p = ["efficiency", "smallest"];
        f && !p.includes(f) ? console.warn(`${f} is not a valid stockSelection, expected ${p.join("|")}`) : Te.options.stockSelection = f;
      },
      minSpacing: (f) => {
        Te.options.minSpacing = f;
      },
      stackHeight: (f) => {
        Te.stackHeight = f;
      },
      cutPreference: (f) => {
        const p = ["efficiency", "length", "width", "beam"];
        if (p.includes(f)) {
          const { cutType: w, cutPreference: I } = Xi(f);
          Te.cutType = w, Te.cutPreference = I;
        } else
          console.warn(`SmartCut - ${f} is not one of ${p.join("|")}`);
      },
      bladeWidth: (f) => {
        f >= 0 ? Te.bladeWidth = f : console.warn(`SmartCut - you provided an incorrect blade width of: ${f}`);
      },
      maxParts: (f) => {
        F.maxParts = f;
      },
      locale: (f) => {
        he.value = f.replace(/_/g, "-");
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
        for (const w in Ye.enable)
          w in f && (F.enable[w] = f[w]);
        for (const w in p)
          tt(w, Et(f, [p[w]]) ?? Ye.enable[p[w]]);
        et.value = Et(f, ["csvImport"]) ?? Ye.enable.csvImport;
      },
      colors: (f) => {
        for (const p in Ye.colors)
          p in f && (F.colors[p] = f[p]);
      },
      orientationModel: (f) => {
        if (![0, 1, 2].includes(f)) {
          F.orientationModel = 0;
          return;
        }
        F.orientationModel = f;
      },
      numberFormat: (f) => {
        if (!["decimal", "fraction"].includes(f)) {
          F.numberFormat = "decimal";
          return;
        }
        F.numberFormat = f;
      },
      customFields: (f) => {
        if (!Array.isArray(f) || !(f != null && f.length)) return;
        const p = [];
        f.forEach((w, I) => {
          p.push(w), p[I].custom = !0;
          const _ = Be(w.id);
          p[I].id = _, p[I].fieldMap = "customData." + _, w.type === "checkbox" && (p[I].w = "32px"), w.type === "select" && (p[I].output = w.output ?? "string", p[I].options = w.options);
        }), Ht.value = p;
        for (const w of u.inputShapes.value)
          w.customData = f.reduce((I, _) => {
            const D = Be(_.id);
            return I[D] = w.customData[D] || _.default || "", I;
          }, {});
      }
    }, He = (f) => {
      if (R.debug && M("log", ["checkout init...", f]), f != null && f.options) {
        const w = f.options;
        ol(w), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((D) => {
          D in w || M("error", `${D} is a required option`);
        });
        const _ = ["enable", "colors"];
        for (const D in w)
          _.includes(D) || (F[D] = w[D]), D in qe && qe[D](w[D]);
      }
      f.colors && "colors" in qe && qe.colors(f.colors), ks("banding", f), ks("finish", f), ae(f), On(f), Qe.value = !0, R.debug && M("log", ["init complete"]);
      const p = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(p), Ve(() => {
        ve.value && !Mn() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, At = (f, p) => {
      f && (f.orientationLock = p);
    }, tt = (f, p = !1) => {
      ml(Qt, "parts", Te.stockType, f, p);
    }, Be = (f) => f ? Ni(f).toLowerCase() : null, Ke = (f, p) => {
      p.valid ? j() : T({
        referenceEl: f,
        show: !0,
        content: a(`fieldValidation.${p.message}`),
        type: "error"
      });
    }, ae = (f) => {
      var p, w, I, _, D;
      if (Et(F, ["enable", "machining"]) && f != null && f.machining) {
        for (const ee in ze)
          f.machining[ee] && (ze[ee] = f.machining[ee]);
        if (["holes", "hingeHoles"].forEach((ee) => {
          var m, le;
          (m = f == null ? void 0 : f.machining) != null && m[ee] && (ze[ee].enabled = (le = f == null ? void 0 : f.machining) == null ? void 0 : le[ee].enabled);
        }), (I = (w = (p = f == null ? void 0 : f.machining) == null ? void 0 : p.corners) == null ? void 0 : w.types) != null && I.length && (ze.corners.enabled = !0, ze.corners.types = f.machining.corners.types), f.banding && ((D = (_ = f == null ? void 0 : f.options) == null ? void 0 : _.enable) != null && D.banding)) {
          if (!ye) return;
          ze.banding = {
            enabled: !0
          }, ye.options.length && (ze.banding.options = ye.options), ye.labels.length && (ze.banding.labels = ye.labels), Yt(ye.pricing) && (ze.banding.pricing = ye.pricing);
        }
      }
    }, St = (f = null) => {
      $e.value = f, f && f.l && f.w ? Gt.value = !0 : alert("Please enter dimensions first");
    }, Dt = () => {
      Gt.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, gs = (f = []) => {
      if (Me.value = [], Ot.value = [], tt("t", !1), !!f.length) {
        for (const p of f)
          if (p != null && p.t)
            if (typeof p.t == "string" && p.t.includes(",")) {
              const w = ms(p.t, !0);
              w.length === 2 ? (An(w), tt("t", !0), p.t = Me.value[0]) : M("error", "bonded thickness found which does not have 2 options");
            } else Me.value.includes(p.t) || Me.value.push(p.t);
        Me.value.length > 1 && tt("t", !0);
      }
    }, In = (f) => {
      var _;
      if (!f) return { thicknesses: [], bondedThicknesses: [] };
      if (!((_ = Ge.value) != null && _.length))
        return {
          thicknesses: Me.value,
          bondedThicknesses: []
        };
      if (!f.material) return { thicknesses: [], bondedThicknesses: [] };
      const p = Ge.value.find((D) => D.name === f.material);
      if (!p) return { thicknesses: [], bondedThicknesses: [] };
      const w = [...p.thicknesses], I = [];
      for (let D = 0; D < w.length; D++) {
        const ee = w[D], m = ms(ee), le = [];
        if (m.length) {
          for (const Ae of m)
            w[D] = Ae, le.push(D);
          D++;
        }
        le.length && I.push(le);
      }
      return {
        thicknesses: w,
        bondedThicknesses: I
      };
    }, Tn = (f) => In(f).thicknesses.map((w) => ({
      label: w == null ? void 0 : w.toString(),
      value: w
    })), On = (f) => {
      var p, w;
      if ((p = f == null ? void 0 : f.stock) != null && p.some((I) => I == null ? void 0 : I.material)) {
        Ge.value = [], Me.value = [], Ot.value = [];
        const I = /* @__PURE__ */ new Map();
        for (const _ of f.stock) {
          if (!_.material) continue;
          const D = _.material.toUpperCase();
          I.has(D) || I.set(D, /* @__PURE__ */ new Set()), _.t != null && ((w = I.get(D)) == null || w.add(O({ v: _.t })));
        }
        Ge.value = Array.from(I.entries()).map(([_, D]) => ({
          name: _,
          thicknesses: Array.from(D).sort((m, le) => m - le)
        })), Ge.value.length > 1 && tt("material", !0);
      } else
        gs(f.stock);
    }, An = (f, p = null) => {
      if (!Array.isArray(f)) {
        M("error", "addBondedThicknesses expects an array");
        return;
      }
      const w = [];
      for (let I = 0; I < f.length; I++) {
        let _ = f[I];
        F.numberFormat === "decimal" && (_ = parseFloat(_)), Me.value.push(_), p && p.thicknesses.push(_), w.push(Me.value.length - 1);
      }
      Ot.value.push(w);
    }, ms = (f, p = !1) => {
      if (typeof f == "string" && f.includes(",")) {
        const w = f.split(",");
        return p ? w.map((I) => O({ v: I })) : w;
      }
      return [];
    }, Dn = () => {
      vt.value ? Rn() : En();
    }, En = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), vt.value = !0;
    }, Rn = () => {
      document.exitFullscreen && document.exitFullscreen(), vt.value = !1;
    }, Mn = () => {
      var I, _;
      if ((_ = (I = P.value) == null ? void 0 : I.api) != null && _.whiteLabel) return !0;
      let f = !0;
      const p = document.querySelector("#smartcut-app #credit"), w = document.querySelector("#smartcut-app #credit a");
      return [p, w].forEach((D, ee) => {
        if (!D) return f = !1;
        const m = window.getComputedStyle(D);
        if (m.display === "none" || m.display === "hidden" || m.opacity === "0" || m.color === "transparent" || m.position !== "relative" || ee === 1 && m.color !== "#4e4e4e" && m.color !== "rgb(78, 78, 78)")
          return f = !1;
      }), Q.value = f, f;
    }, ys = (f, p, w, I, _) => {
      ps(
        f,
        p,
        w,
        I,
        _,
        R.findExtrasPrice
      ), console.log("setExtrasOption", w, I, _, f.banding.y1, f.banding.y2);
    }, vs = (f, p, w, I) => {
      wn(
        f,
        p,
        w,
        I,
        p === "banding" ? gi : [],
        R.findExtrasPrice
      );
    }, yi = (f, p) => {
      const w = p === "banding" ? ye == null ? void 0 : ye.labels : Oe == null ? void 0 : Oe.labels;
      sl(f, p, w);
      const I = ds(p);
      if (f != null && f[I])
        for (const _ in f[I]) {
          const D = Bi(f, p, _, R.findExtrasPrice);
          !D && _ && f[p][_] && new X({
            item: f,
            field: [[p, _]],
            type: "error",
            message: Pe(a("option_not_available", { x: f[p][_], y: a(p) }))
          }), ci(f, p, _, !!D);
        }
    }, bs = (f) => {
      const p = Object.keys(f);
      return Math.max(...p.map((I) => I.split("|").length));
    }, ws = (f) => {
      const p = [], w = Object.keys(f), I = bs(f);
      for (let _ = I; _--; ) p.push(/* @__PURE__ */ new Set());
      for (const _ of w)
        _.split("|").forEach((ee, m) => p[m].add(ee));
      for (let _ = 0; _ < I; _++)
        p[_] = Array.from(p[_]);
      return p;
    }, vi = (f, p = [], w) => {
      if (!f) return [];
      if (w > 0 && !p[w - 1]) return [];
      const I = /* @__PURE__ */ new Set();
      for (const _ of Object.keys(f)) {
        const D = _.split("|");
        if (D.length > w) {
          let ee = !0;
          for (let m = 0; m < w; m++)
            if (p[m] && D[m] !== p[m]) {
              ee = !1;
              break;
            }
          ee && I.add(D[w]);
        }
      }
      return Array.from(I);
    }, bi = (f, p, w) => Bi(
      f,
      p,
      w,
      R.findExtrasPrice
    ), Fn = (f) => {
      const p = ce.value.findIndex((w) => w.shapeId === f.shapeId);
      p !== -1 ? ce.value[p] = f : ce.value.push(f), window.smartcutImages = ce.value;
    }, _n = (f) => {
      ce.value = ce.value.filter((p) => p.shapeId !== f), window.smartcutImages = ce.value;
    }, wi = (f = 1) => {
      for (let p = f; p--; ) {
        let w;
        if (u.inputShapes.value.length > 0) {
          const I = u.inputShapes.value[u.inputShapes.value.length - 1];
          w = ei({
            material: I.material,
            t: I.t
          });
        } else
          w = ei();
        u.inputShapes.value.push(w);
      }
    }, qn = (f) => {
      var w;
      if (R.readonly || u.inputShapes.value.length === 1) return;
      const p = u.inputShapes.value[f].listId;
      u.inputShapes.value.splice(f, 1), ((w = $e.value) == null ? void 0 : w.listId) === p && ($e.value = null), U();
    }, ei = (f = {
      l: null,
      w: Te.stockType === "linear" ? ((p) => (p = u.inputStock.value[0]) == null ? void 0 : p.w)() : null,
      t: Me.value.length ? Me.value[0] : null,
      q: 1,
      material: ((w) => (w = Ge.value) == null ? void 0 : w.length)() === 1 ? Ge.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var _, D;
      f.id = (u.inputShapes.value.length + 1).toString();
      const I = new Ui(f, F.numberFormat);
      return (_ = ye == null ? void 0 : ye.labels) != null && _.length && yi(I, "banding"), (D = Oe == null ? void 0 : Oe.labels) != null && D.length && yi(I, "finish"), I;
    }, Bn = () => {
      Me.value.length && g.shapeList.value.forEach((f) => {
        if (!f.t) return;
        const p = Me.value.findIndex(
          (_) => O({ v: _ }) === f.t
        ), w = Ot.value.find((_) => _.includes(p));
        if (!w) return;
        const I = Math.min(
          ...w.map((_) => Me.value[_])
        );
        f.t > I && (f.q = f.q * (f.t / I), f.t = I);
      });
    }, Ss = () => {
      U(), J(null), g.stockList.value = [], g.shapeList.value = [], g.cutList.value = [], ie.value = 0;
    }, Gn = () => {
      u.inputShapes.value.length = 0, Ve(() => wi(1));
    }, Hn = async () => {
      if (M("calculating"), A.value) return !1;
      A.value = !0, lt.value = !1;
      const { valid: f, saw: p, stockList: w, shapeList: I } = await tl({
        t: a,
        partTrim: F.partTrim,
        maxShapes: F.maxParts,
        orientationModel: F.orientationModel,
        sawData: Te,
        onLimit: () => {
          K({
            type: "error",
            message: a("max_parts") + " " + F.maxParts
          });
        }
      });
      if (!f) {
        M("validation-error"), A.value = !1;
        return;
      }
      Ss(), R.debug && console.log(
        "SmartCut - calculating",
        "stock",
        w.map((D) => D.dimensions()),
        "parts",
        I.map((D) => D.dimensions())
      );
      const _ = {
        inputs: {
          parts: u.inputShapes.value,
          stock: u.inputStock.value,
          saw: p
        },
        saw: p,
        shapeList: I,
        stockList: w,
        enableEvo: !0,
        domain: B
      };
      await at.connect(), at.emit("calculate", _);
    }, ks = (f, p) => {
      var ti;
      if (tt(f, !1), !f || !p || !(p != null && p[f]) || !Et(F, ["enable", f])) return;
      const w = [f, "pricing"];
      if (!As(p, w)) {
        M("error", `${w.join(".")} not found in sent data`);
        return;
      }
      const I = Et(p, w);
      if (typeof I != "object") {
        M("error", `${w.join(".")} data must be an object`);
        return;
      }
      if (!Yt(I)) {
        M("error", `if provided, ${w.join(".")} data must contain some values`);
        return;
      }
      const _ = Object.keys(I), D = Object.values(I);
      if (!_.length) {
        M("error", `no ${w.join(".")} pricing found`);
        return;
      }
      const ee = /,/;
      for (const ii of _)
        if (ee.test(ii)) {
          M("error", `${w} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (D.some((ii) => isNaN(ii))) {
        M("error", `${w} values must be a number`);
        return;
      }
      const m = bs(I), le = [f, "labels"];
      let Ae = [];
      if (As(p, le))
        Ae = Et(p, le);
      else {
        M("error", `${le.join(".")} not found`);
        return;
      }
      if (!Ae) {
        M("error", `${le.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Ae)) {
        M("error", `${le.join(".")} data must be an array`);
        return;
      }
      if (!(Ae != null && Ae.length)) {
        M("error", `if provided, ${le.join(".")} data must contain values`);
        return;
      }
      if (Ae.length !== m) {
        M("error", `${le.join(".")} length (${Ae.length}) must match the number of levels in ${w.join(".")} (${m})`);
        return;
      }
      switch (f) {
        case "banding":
          ye.labels = Ae, ye.pricing = I, ye.options = ws(I);
          break;
        case "finish":
          Oe.labels = Ae, Oe.pricing = I, Oe.options = ws(I);
          break;
      }
      if (tt(f, !0), !!((ti = u.inputShapes.value) != null && ti.length))
        for (const ii of u.inputShapes.value)
          yi(ii, f);
    }, Si = (f, p) => {
      if (!p) return;
      f !== "info" && Object.keys(_e).forEach((I) => {
        I !== f && I !== "info" && (_e[I] = null);
      });
      const w = u.inputShapes.value.indexOf(p);
      _e[f] === w ? ($e.value = null, _e[f] = null) : ($e.value = p, _e[f] = w);
    }, xs = (f) => {
      if (M("log", ["load event received"]), !Qe.value) {
        M("log", ["load event received"]);
        return;
      }
      Nn(f.detail);
    }, Nn = (f) => {
      var I, _, D;
      if (M("log", ["loading parts..."]), !f || !((_ = (I = f == null ? void 0 : f.inputs) == null ? void 0 : I.parts) != null && _.length)) {
        M("log", ["could not find any parts to import"]);
        return;
      }
      u.inputShapes.value.length = 0;
      let p = 0;
      for (const ee of f.inputs.parts) {
        const m = ei(ee);
        m ? (u.inputShapes.value.push(m), (D = m.issues) != null && D.length && M("log", [`SmartCut - issues found while importing part at index ${p}`, m.issues])) : M("log", [`SmartCut - error loading part at index ${p}`, ee]), p++;
      }
      u.inputShapes.value.map((ee) => Ct(ee.issues)).flat().length && K({
        type: "error",
        message: Pe(a("issues_found"))
      }), M("log", [`loaded ${u.inputShapes.value.length} parts`]);
    }, Wn = (f) => {
      u.inputShapes.value.length = 0, Ve(() => {
        var p, w;
        for (const I of f)
          I.t = ((w = (p = u.inputStock.value) == null ? void 0 : p[0]) == null ? void 0 : w.t) ?? null, u.inputShapes.value.push(ei(I));
      });
    };
    xe(() => R.stock, (f) => {
      if (Ss(), Array.isArray(f) || console.warn("SmartCut - stock must be passed as an array"), !!(f != null && f.length)) {
        u.inputStock.value.length = 0, Ge.value.length || gs(f);
        for (const p of f) {
          const w = new as({
            ...p,
            autoAdd: !0,
            id: (u.inputStock.value.length + 1).toString(),
            type: Te.stockType
          }, F.numberFormat);
          u.inputStock.value.push(w);
        }
        if (u.inputStock.value.length) {
          u.inputShapes.value.length ? Ve(() => {
            u.inputShapes.value.forEach((w) => {
              if (w.material) {
                const I = Ge.value.find((_) => _.name === w.material);
                I && (w.t = O({ v: I.thicknesses[0] }));
              } else
                w.t = O({ v: u.inputStock.value[0].t });
            });
          }) : Ve(() => wi(1));
          const p = d();
          p.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(p))), K({
            type: "error",
            message: Pe(a("stock_issue")),
            additional: p.map((w) => a(w.message))
          }));
        }
      }
    }, { immediate: !0 }), xe(u.inputShapes, (f) => {
      M("inputs-changed"), f.forEach((p) => {
        var I;
        Te.stockType === "linear" && (p.w = (I = u.inputShapes.value[0]) == null ? void 0 : I.w);
        const w = Ge.value.find((_) => _.name === p.material);
        w && (w.thicknesses.includes(O({ v: p.t })) || (p.t = O({ v: w.thicknesses[0] })));
      });
    }, { deep: !0 }), xe(() => F.numberFormat, (f) => {
      S(f);
    }), ot(async () => {
      if (Ue.value) return;
      const f = new URL(window.location.href), p = f.searchParams.toString(), w = f.origin + f.pathname + (p ? `?${p}` : "");
      se.value !== w && (u.inputShapes.value.length = 0, wi(1)), se.value = w, he.value = F.locale, await at.connect(), at.emit("getUserFromDomain"), window.addEventListener("smartcut/load", xs), Ue.value = !0, R.debug && M("log", [
        "ready...",
        "fields:",
        bt.value.map((I) => I.id)
      ]);
    });
    const Un = () => {
      at && at.disconnect();
    };
    return is(() => {
      window.removeEventListener("smartcut/load", xs), Un(), delete window.smartcutCheckout;
    }), t({
      init: He,
      getAvailablePricingOptions: vi,
      getExtrasPrice: bi,
      formatPrice: R.formatPrice,
      findExtrasPrice: R.findExtrasPrice,
      inputShapes: u.inputShapes,
      initExtrasOptions: yi,
      createInputShape: ei
    }), (f, p) => {
      var I, _;
      const w = qt("font-awesome-icon");
      return v(), $(be, null, [
        me(x(s), {
          content: x(y).content,
          type: x(y).type,
          show: x(y).show,
          "reference-el": x(y).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        x(re) === "development" && bu ? (v(), $("div", Qa, [
          p[5] || (p[5] = E("div", null, "Developer information", -1)),
          me(x(l), {
            data: [x(u).inputShapes.value[0].banding],
            paths: ["inputs.inputShapes.banding"]
          }, null, 8, ["data"])
        ])) : N("", !0),
        Gt.value && ((I = $e.value) != null && I.machining) ? (v(), fe(x(r), {
          key: 1,
          shape: $e.value,
          "onUpdate:shape": p[0] || (p[0] = (D) => $e.value = D),
          translate: !0,
          options: ze,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": bi,
          "get-available-pricing-options": vi,
          "format-price": i.formatPrice,
          onClose: Dt
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : N("", !0),
        Qe.value ? N("", !0) : (v(), $("div", eu, [
          me(Ms, {
            size: 50,
            "show-number": !1
          })
        ])),
        Qe.value ? (v(), $("div", {
          key: 3,
          id: "smartcut-checkout",
          class: Se({ fullscreen: vt.value })
        }, [
          yt.value && !i.readonly ? (v(), $("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: p[1] || (p[1] = (D) => Dn())
          }, [
            me(w, { icon: ["fasr", "expand"] }),
            zt(" " + te(x(Pe)(x(a)("full_screen"))), 1)
          ])) : N("", !0),
          ve.value ? (v(), $("div", {
            key: 1,
            id: "credit",
            style: we(W.value)
          }, [
            E("a", {
              title: "SmartCut | Cut list optimization software",
              style: we(oe.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, te(x(Lr)(x(a)("powered_by"))), 5)
          ], 4)) : N("", !0),
          E("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: we({ "grid-template-columns": L.value })
          }, [
            x(u).inputShapes.value.length ? (v(), $("div", tu, [
              p[6] || (p[6] = E("div", { class: "cell id" }, null, -1)),
              (v(!0), $(be, null, Le(bt.value, (D) => (v(), $("div", {
                key: D.id,
                class: Se(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(D.id) || D.type === "checkbox" }])
              }, te(x(Pe)(x(a)(D.label))), 3))), 128)),
              x(re) === "development" ? (v(), $("div", iu, " Info ")) : N("", !0),
              x(u).inputShapes.value.length > 1 ? (v(), $("div", su)) : N("", !0)
            ])) : N("", !0),
            (v(!0), $(be, null, Le(x(u).inputShapes.value, (D, ee) => (v(), $("div", {
              key: ee,
              class: "row inputs"
            }, [
              E("div", nu, [
                E("div", {
                  class: "id",
                  style: we({
                    background: F.colors.partA,
                    color: F.colors.text
                  })
                }, te(ee + 1), 5)
              ]),
              (v(!0), $(be, null, Le(bt.value, (m) => (v(), $("div", {
                key: m.fieldMap,
                class: Se(["cell", [`${m.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(m.id) || m.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(m.id) ? m.id === "orientationLock" ? (v(), fe(Sl, {
                  key: 1,
                  id: "orientation-" + ee,
                  rectangle: D,
                  disabled: i.readonly,
                  "stock-grain": x(b)(D),
                  "button-background": F.colors.button,
                  "icon-color": F.colors.buttonText,
                  "orientation-model": F.orientationModel,
                  onUpdateOrientation: (le) => At(D, le)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : m.id === "banding" ? (v(), fe(xl, {
                  key: 2,
                  id: "banding-" + ee,
                  "input-shape": D,
                  disabled: i.readonly,
                  "stock-grain": x(b)(D),
                  open: _e.banding === ee,
                  "orientation-model": F.orientationModel,
                  onClicked: (le) => Si("banding", D)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : m.id === "finish" ? (v(), fe(Jl, {
                  key: 3,
                  id: "finish-" + ee,
                  "input-shape": D,
                  disabled: i.readonly,
                  open: _e.finish === ee,
                  onClicked: (le) => Si("finish", D)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : m.fieldMap === "machining" && yt.value ? (v(), fe(ia, {
                  key: 4,
                  id: "machining-" + ee,
                  disabled: i.readonly,
                  "input-shape": D,
                  onOpen: (le) => St(D)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : m.fieldMap === "imageUpload" ? (v(), $("button", {
                  key: 5,
                  id: "image-upload-" + ee,
                  type: "button",
                  disabled: i.readonly,
                  class: Se({ selected: _e.info === ee }),
                  onClick: (le) => Si("imageUpload", D)
                }, [
                  me(w, { icon: ["fass", "image"] })
                ], 10, ru)) : N("", !0) : (v(), fe(ft, {
                  key: 0,
                  id: m.id + "-" + ee,
                  focus: !i.readonly && F.enable.focus && ee === x(u).inputShapes.value.length - 1 && m.id === "l",
                  issue: x(Is)(D, [m.fieldMap]),
                  warning: x(Is)(D, [m.fieldMap], !0),
                  type: m.type,
                  output: m.output,
                  label: m != null && m.label ? x(Pe)(x(a)(m.label)) : null,
                  placeholder: m != null && m.placeholder ? x(Pe)(x(a)(m.placeholder)) : null,
                  "enable-label": !1,
                  "number-format": F.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (m == null ? void 0 : m.required) ?? !1,
                  "allow-zero": (m == null ? void 0 : m.allowZero) ?? !0,
                  options: m.id === "t" ? Tn(D) : m == null ? void 0 : m.options,
                  "true-value": m == null ? void 0 : m.trueValue,
                  "false-value": m == null ? void 0 : m.falseValue,
                  default: m == null ? void 0 : m.default,
                  min: typeof (m == null ? void 0 : m.min) == "number" ? m.min : null,
                  max: typeof (m == null ? void 0 : m.max) == "number" ? m.max : null,
                  custom: m == null ? void 0 : m.custom,
                  value: x(Et)(D, m == null ? void 0 : m.fieldMap),
                  text: {
                    delete: x(Ut)(x(a)("delete")),
                    select: x(Ut)(x(a)("select"))
                  },
                  onValidation: Ke,
                  "onUpdate:value": (le) => {
                    m.fieldMap && x(No)(D, m.fieldMap, le);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onUpdate:value"]))
              ], 2))), 128)),
              x(re) === "development" ? (v(), $("div", ou, [
                E("button", {
                  type: "button",
                  class: Se({ selected: _e.info === ee }),
                  onClick: (m) => Si("info", D)
                }, " i ", 10, lu)
              ])) : N("", !0),
              x(u).inputShapes.value.length > 1 ? (v(), $("div", au, [
                E("button", {
                  type: "button",
                  disabled: i.readonly,
                  class: "delete",
                  "aria-label": x(Pe)(x(a)("action_item", { a: "remove", i: "part" })),
                  onClick: (m) => qn(ee)
                }, [
                  me(w, { icon: ["fass", "trash"] })
                ], 8, uu)
              ])) : N("", !0),
              me(x(n), {
                item: D,
                "num-columns": wt.value
              }, null, 8, ["item", "num-columns"]),
              _e.banding === ee && ye.options.length > 0 ? (v(), fe(Qi, {
                key: 2,
                shape: D,
                "shape-index": ee,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": ye.keys,
                "all-options": ye.options,
                pricing: ye.pricing,
                labels: ye.labels,
                "user-friendly-field-map": x(Re),
                "part-columns": wt.value,
                "get-price": bi,
                "format-price": i.formatPrice,
                "orientation-model": F.orientationModel,
                "get-available-pricing-options": vi,
                onUpdateAll: vs,
                onSet: ys
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : N("", !0),
              _e.finish === ee && Oe.options.length > 0 ? (v(), fe(Qi, {
                key: 3,
                shape: D,
                "shape-index": ee,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Oe.keys,
                "all-options": Oe.options,
                pricing: Oe.pricing,
                labels: Oe.labels,
                "user-friendly-field-map": x(Re),
                "part-columns": wt.value,
                "get-price": bi,
                "format-price": i.formatPrice,
                "orientation-model": F.orientationModel,
                "get-available-pricing-options": vi,
                onUpdateAll: vs,
                onSet: ys
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : N("", !0),
              _e.info === ee ? (v(), $("div", {
                key: 4,
                id: "shape-info",
                style: we({ "grid-column-end": "span " + wt.value })
              }, [
                me(x(l), {
                  data: [D == null ? void 0 : D.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : N("", !0),
              _e.imageUpload === ee ? (v(), fe(ca, {
                key: 5,
                prefix: (ee + 1).toString(),
                "unique-id": x(pe),
                "shape-id": D.listId,
                style: we({ "grid-column-end": "span " + wt.value }),
                images: ce.value,
                onUpdate: Fn,
                onRemove: _n
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : N("", !0)
            ]))), 128))
          ], 4),
          E("div", cu, [
            i.readonly ? N("", !0) : (v(), $("button", {
              key: 0,
              type: "button",
              "aria-label": x(a)("action_item", { a: "add", i: "part" }),
              style: we({ background: F.colors.button, color: F.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: p[2] || (p[2] = (D) => wi(1))
            }, [
              me(w, { icon: ["fasr", "plus-large"] }),
              zt(" " + te(x(Pe)(x(a)("action_item", { a: x(a)("add"), i: x(a)("part") }))), 1)
            ], 12, hu)),
            E("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": x(Pe)(x(a)("calculate")),
              style: we({
                background: F.colors.button,
                color: F.colors.buttonText
              }),
              disabled: !((_ = x(u).inputStock.value) != null && _.length) || A.value,
              onClick: p[3] || (p[3] = (D) => Hn())
            }, [
              me(w, { icon: ["fass", "calculator"] }),
              zt(te(x(Pe)(x(a)("calculate"))), 1)
            ], 12, du),
            i.readonly ? N("", !0) : (v(), $("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": x(Pe)(x(a)("clear")),
              onClick: p[4] || (p[4] = (D) => Gn())
            }, [
              me(w, { icon: ["fass", "trash"] })
            ], 8, fu)),
            E("div", pu, te(x(h)) + te(F != null && F.maxParts ? "/" + F.maxParts : ""), 1)
          ]),
          et.value && !i.readonly ? (v(), fe(x(o), {
            key: 2,
            ref: "import",
            "number-format": F.numberFormat,
            "custom-fields": Ht.value,
            "banding-options": ye.options,
            "banding-labels": ye.labels,
            "finish-options": Oe.options,
            "finish-labels": Oe.labels,
            onImport: Wn
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : N("", !0),
          Jt.value ? (v(), $("div", gu, [
            Ce.value ? (v(), $("div", mu, te(Ce.value), 1)) : N("", !0),
            E("pre", yu, te(ut.value), 1)
          ])) : N("", !0),
          (F.enable.diagram ? A.value && !x(ne).complete : A.value || x(ne).complete) ? (v(), $("div", vu, [
            me(Ms, {
              size: 50,
              number: x(ne).shapeCount,
              complete: x(ne).complete,
              "show-number": F.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : N("", !0),
          es(me(Ja, {
            "element-id": "diagram",
            "number-format": F.numberFormat,
            "decimal-places": F.decimalPlaces,
            colors: F.colors
          }, null, 8, ["number-format", "decimal-places", "colors"]), [
            [ts, F.enable.diagram && x(ne).complete]
          ]),
          F.enable.diagram && x(q).length > 1 && ie.value > 0 && x(ne).complete ? (v(), fe(cl, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": x(Y),
            "stock-list": x(q),
            onShowStock: x(J)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : N("", !0)
        ], 2)) : N("", !0)
      ], 64);
    };
  }
}), Gc = /* @__PURE__ */ Zt(wu, [["__scopeId", "data-v-54d2ebe6"]]), Su = {
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
}, ku = { class: "smartcut-object-viewer" }, xu = ["onClick"], Cu = { class: "toggle-icon" }, $u = { class: "path-label" }, Pu = {
  key: 0,
  class: "object-properties"
}, Lu = { class: "key" };
function Iu(i, t, e, s, n, r) {
  return v(), $("div", ku, [
    (v(!0), $(be, null, Le(e.data, (o, l) => (v(), $("div", {
      key: l,
      class: "array-item"
    }, [
      E("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        E("div", Cu, te(n.expanded[l] ? "▼" : "▶"), 1),
        E("div", $u, te(e.paths[l] || l), 1)
      ], 8, xu),
      n.expanded[l] ? (v(), $("div", Pu, [
        (v(!0), $(be, null, Le(o, (a, u) => (v(), $("div", {
          key: u,
          class: "property-item"
        }, [
          E("div", Lu, te(u) + ": ", 1),
          E("div", {
            class: Se(["value", r.getValueType(a)])
          }, te(r.formatValue(a)), 3)
        ]))), 128))
      ])) : N("", !0)
    ]))), 128))
  ]);
}
const Tu = /* @__PURE__ */ Zt(Su, [["render", Iu]]), Vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Tu }, Symbol.toStringTag, { value: "Module" })), Ou = ["data-placement"], Au = /* @__PURE__ */ Ie({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = G(null), s = G(null), n = Z(() => ({
      getBoundingClientRect: () => {
        var b;
        return ((b = t.referenceEl) == null ? void 0 : b.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      kr(8),
      xr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      Cr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      ir({ element: s })
    ], { floatingStyles: o, middlewareData: l, placement: a } = er(
      n,
      e,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (b, S, d) => Sr(
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
    return (b, S) => (v(), fe(Ks, { to: "body" }, [
      me(tr, { name: "fade" }, {
        default: ss(() => [
          b.show && b.referenceEl ? (v(), $("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: Se(["tooltip", b.type]),
            style: we(u.value),
            "data-placement": x(a)
          }, [
            zt(te(b.content) + " ", 1),
            E("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: we(h.value)
            }, null, 4)
          ], 14, Ou)) : N("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Au }, Symbol.toStringTag, { value: "Module" })), Eu = /* @__PURE__ */ Ie({
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
      return v(), $(be, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (v(), $("div", {
          key: 0,
          class: "group issues",
          style: we({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          E("pre", null, te(t.item.issues.filter((a) => a.type === "error").map((a) => x(Pe)(a.message)).flat().join(`
`)), 1)
        ], 4)) : N("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (v(), $("div", {
          key: 1,
          class: "group warnings",
          style: we({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          E("pre", null, te(t.item.issues.filter((a) => a.type === "warning").map((a) => x(Pe)(a.message)).flat().join(`
`)), 1)
        ], 4)) : N("", !0)
      ], 64);
    };
  }
}), Ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Eu }, Symbol.toStringTag, { value: "Module" })), Ze = {
  precisionFixed: hr,
  format: dr,
  select: Ee,
  selectAll: tn,
  scaleLinear: Je,
  scaleSequential: li,
  axisTop: Qs,
  axisBottom: Ai,
  axisRight: en,
  axisLeft: Di,
  symbol: fr,
  path: pr,
  arc: gr,
  symbolTriangle: mr,
  symbolSquare: yr
};
class Mu {
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
    c(this, "xScale", Ze.scaleLinear());
    c(this, "yScale", Ze.scaleLinear());
    c(this, "yScaleFlipped", Ze.scaleLinear());
    c(this, "measurementScale", Ze.scaleLinear());
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
      if (this.el = Ze.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = Ze.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
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
      Ze.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      Ze.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = Ze.path(), e = this.shape.machining.corners, s = [], n = [];
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
    const n = Ze.path();
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
      Ze.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
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
function Fu(i) {
  var t;
  if (!(i != null && i[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[i[0]]) < "u")
    return Vt(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return Vt(this, i);
}
const _u = { id: "machining" }, qu = {
  key: 0,
  class: "debug"
}, Bu = { class: "inputs" }, Gu = {
  key: 0,
  class: "shape-name"
}, Hu = { class: "shape-dimensions" }, Nu = {
  key: 1,
  class: "sides-wrapper"
}, Wu = { class: "menu" }, Uu = { class: "button-wrapper" }, ju = { class: "row table-heading" }, zu = {
  key: 0,
  class: "id"
}, Vu = {
  key: 0,
  class: "cell"
}, Yu = { class: "id" }, Xu = ["onClick"], Ku = { class: "remove" }, Zu = { key: 5 }, Ju = !1, Qu = /* @__PURE__ */ Ie({
  __name: "Machining",
  props: /* @__PURE__ */ Cs({
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
  emits: /* @__PURE__ */ Cs(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var _e, Ge, Me, Ot, Gt, ze, ye, Oe, Qt, Ht, mi, bt, wt;
    const e = $t(() => Promise.resolve().then(() => Vi)), s = i, n = t, r = Z(() => os(A.value)), o = Z(() => Fu.call({ options: s.options }, ["units"])), l = Z(() => {
      var W;
      if (!((W = h.value) != null && W.length)) return 0;
      if (F.value === "banding") return 1;
      let L = Object.values(u.value).filter((oe) => oe.enabled).length;
      return L += 2, L;
    }), a = Z(() => {
      if (!h.value.length || F.value === "banding") return;
      const L = {
        id: "34px",
        del: "30px"
      }, W = [];
      return h.value.forEach((oe) => {
        const ve = u.value[oe];
        ve.enabled && W.push(ve.w ?? "1fr");
      }), W.unshift(L.id), W.push(L.del), W.join(" ");
    }), u = Z(() => !F.value || F.value === "banding" ? null : Jt[F.value]), h = Z(() => !F.value || F.value === "banding" ? [] : Object.keys(Jt[F.value]).filter((L) => Jt[F.value][L].enabled)), b = Z(() => F.value ? Y() : []), S = Z(() => {
      var W, oe, ve, qe;
      const L = ((qe = (ve = (oe = (W = A.value) == null ? void 0 : W.machining) == null ? void 0 : oe.corners) == null ? void 0 : ve.map((He) => {
        var At;
        return (At = He == null ? void 0 : He.isPresent) != null && At.call(He) ? He.getCorner() : null;
      })) == null ? void 0 : qe.filter((He) => He)) ?? [];
      return [...pt, ...L];
    }), d = (L = !0) => {
      L ? vt.value = L : Ve(() => vt.value = !1);
    }, g = () => {
      j(), R(), M(), re();
    }, k = (L, W, oe) => {
      Ve(() => {
        L[W] = oe;
      });
    }, q = (L) => {
      if (F.value === "corners")
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
    }, V = () => F.value !== "banding", z = (L, W = null) => {
      if (!(L != null && L.length)) return [];
      let oe = "None";
      W === "depth" && (oe = "Through");
      const ve = [{ label: oe, value: null }];
      return L.forEach((qe) => {
        const He = qe.toString().charAt(0).toUpperCase() + qe.toString().slice(1);
        ve.push({ label: He, value: qe });
      }), ve;
    }, Y = () => {
      if (!F.value) return [];
      if (F.value === "banding") return [];
      const L = A.value.machining[F.value];
      return Array.isArray(L) ? L : [L];
    };
    let J = null;
    const ne = () => {
      A.value && (J = new Mu({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: A.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), J.init(), yt.value = !0, setTimeout(() => {
        J.updateSize();
      }, 100));
    }, U = () => {
      Ye.value = Ye.value === 0 ? 1 : 0, J.flip();
    }, K = () => {
      switch (F.value) {
        case "holes":
          y();
          break;
        case "hingeHoles":
          T();
          break;
      }
    }, y = () => {
      A.value.machining.createHole(
        O({ v: A.value.getLongSide() }) / 2,
        O({ v: A.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        Ye.value
      ), J.createHoles();
    }, T = () => {
      A.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: Ye.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), J.createHingeHoles();
    }, j = () => {
      A.value.machining.holes.length = 0;
    }, R = () => {
      A.value.machining.hingeHoles.length = 0;
    }, M = () => {
      A.value.machining.corners.forEach((L) => {
        L.size = null, L.type = null;
      }), A.value.banding.a = !1, A.value.banding.b = !1, A.value.banding.c = !1, A.value.banding.d = !1;
    }, re = () => {
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
    }, he = (L) => {
      switch (F.value) {
        case "holes":
          return A.value.machining.holes.splice(L, 1);
        case "hingeHoles":
          return A.value.machining.hingeHoles.splice(L, 1);
        case "corners":
          A.value.machining.corners[L].size = null, A.value.machining.corners[L].type = null;
          return;
      }
    }, P = () => {
      switch (F.value) {
        case "holes":
          return j();
        case "hingeHoles":
          return R();
        case "corners":
          return M();
      }
    }, B = () => {
      var L;
      if ($e.value = [], !!s.options.banding.enabled) {
        d();
        for (const W in A.value.banding)
          A.value.banding[W] ? s.options.banding.enableTypes && ((L = s.options.banding.types) != null && L.length) && (A.value.banding[W] || $e.value.push({
            index: W,
            message: "Please select a type"
          })) : A.value.banding[W] = "";
        d(!1);
      }
    }, H = (L) => {
      const W = $e.value.filter((oe) => oe.index === L);
      return W.length ? W.map((oe) => oe.message) : [];
    }, Q = (L) => {
      const W = $e.value.filter((ve) => ve.index === L && (ve == null ? void 0 : ve.fields)), oe = W.map((ve) => ve.fields).flat();
      return W.length ? oe : [];
    }, se = (L, W) => {
      const oe = Q(L);
      return oe != null && oe.length ? oe.includes(W) : !1;
    }, pe = () => {
      n("close");
    }, ce = (L) => L && typeof L.disabled == "function" ? L.disabled : !1, Ue = (L, W, oe, ve, qe) => {
      ps(L, W, oe, ve, qe, s.findExtrasPrice);
    }, Qe = (L, W, oe, ve) => {
      wn(
        L,
        W,
        oe,
        ve,
        [],
        s.findExtrasPrice
      );
    }, A = sr(i, "shape");
    if (!((_e = A.value) != null && _e.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const lt = G(null), ie = G(null), et = G(!1), yt = G(!1), vt = G(!1), at = G(!1), Ye = G(0), F = G(null), Te = G(0), $e = G([]), Jt = ct({
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
          type: (Ge = s.options.holes.diameters) != null && Ge.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (Me = s.options.holes.diameters) != null && Me.length ? "float" : void 0,
          options: (Ot = s.options.holes.diameters) != null && Ot.length ? z(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof A.value.t < "u" && O({ v: A.value.t }) > 0,
          //[]
          required: !1,
          type: (Gt = s.options.holes.depths) != null && Gt.length ? "select" : "unitDependent",
          output: (ze = s.options.holes.depths) != null && ze.length ? "float" : void 0,
          options: (ye = s.options.holes.depths) != null && ye.length ? z(s.options.holes.depths) : void 0
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
          type: (Oe = s.options.holes.depths) != null && Oe.length ? "select" : "unitDependent",
          output: (Qt = s.options.holes.depths) != null && Qt.length ? "float" : void 0,
          options: (Ht = s.options.holes.depths) != null && Ht.length ? z(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (mi = s.options.holes.diameters) != null && mi.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (bt = s.options.holes.diameters) != null && bt.length ? "float" : void 0,
          options: (wt = s.options.holes.diameters) != null && wt.length ? z(s.options.holes.diameters) : void 0
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
          options: z(s.options.corners.types)
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
    }), Ce = ct({
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
    }), ut = () => {
      var L;
      return !(!((L = A == null ? void 0 : A.value) != null && L.machining) || !et.value || vt.value);
    };
    return xe(() => {
      var L;
      return (L = A.value) == null ? void 0 : L.listId;
    }, () => {
      ut() && ne();
    }), xe(() => {
      var L;
      return (L = A.value) == null ? void 0 : L.id;
    }, () => {
      ut() && ne();
    }), xe(F, (L) => {
      if (ut()) {
        if (L === "banding") {
          d(), B(), d(!1);
          return;
        }
        if (!L) {
          $e.value = [];
          return;
        }
        d(), $e.value = A.value.machining.validate(
          A.value,
          L,
          Ce == null ? void 0 : Ce[L]
        ), L === "hingeHoles" && A.value.machining.hingeHoles.forEach((W, oe) => {
          Fi(W, Ce == null ? void 0 : Ce.holes, $e.value, oe);
        }), d(!1);
      }
    }, { deep: !0, immediate: !0 }), xe(() => {
      var L, W;
      return (W = (L = A == null ? void 0 : A.value) == null ? void 0 : L.machining) == null ? void 0 : W.holes;
    }, () => {
      ut() && (d(), $e.value = A.value.machining.validate(
        A.value,
        "holes",
        Ce == null ? void 0 : Ce.holes
      ), J.createHoles(), d(!1));
    }, { deep: !0, immediate: !0 }), xe(() => {
      var L, W;
      return (W = (L = A == null ? void 0 : A.value) == null ? void 0 : L.machining) == null ? void 0 : W.hingeHoles;
    }, () => {
      ut() && (d(), A.value.machining.updateHingeHoles(A.value), $e.value = A.value.machining.validate(
        A.value,
        "hingeHoles",
        Ce == null ? void 0 : Ce.hingeHoles
      ), A.value.machining.hingeHoles.forEach((L, W) => {
        Fi(L, Ce == null ? void 0 : Ce.holes, $e.value, W);
      }), J.createHingeHoles(), d(!1));
    }, { deep: !0, immediate: !0 }), xe(() => {
      var L, W;
      return (W = (L = A == null ? void 0 : A.value) == null ? void 0 : L.machining) == null ? void 0 : W.corners;
    }, () => {
      if (ut()) {
        d(), $e.value = A.value.machining.validate(
          A.value,
          "corners",
          Ce == null ? void 0 : Ce.corners
        ), A.value.machining.validate(A.value, "holes"), A.value.machining.validate(A.value, "hingeHoles"), J.createShape(), J.createHoles(), J.createHingeHoles();
        for (const L of A.value.machining.corners)
          L.isPresent() || fs(A.value, "banding", L.getCorner(), !0);
        J.createBanding(), d(!1);
      }
    }, { deep: !0, immediate: !0 }), xe(() => {
      var L;
      return (L = A == null ? void 0 : A.value) == null ? void 0 : L.banding;
    }, () => {
      ut() && (B(), J.createBanding());
    }, { deep: !0, immediate: !0 }), ot(() => {
      var W;
      if ((W = document.getElementById("machining")) == null || W.requestFullscreen(), !A.value || !A.value.l || !A.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      Ve(() => ne());
      const L = document.querySelector("#smartcut-app #machining .diagram");
      lt.value || (lt.value = new ResizeObserver((oe) => {
        clearTimeout(ie.value ?? void 0), yt.value && (ie.value = window.setTimeout(() => {
          if (at.value) {
            at.value = !1;
            return;
          }
          oe[0].contentRect.width !== Te.value && (Te.value = oe[0].contentRect.width, Te.value && J.updateSize());
        }, 10));
      }), lt.value.observe(L)), et.value = !0;
    }), (L, W) => {
      var ve, qe, He, At, tt;
      const oe = qt("font-awesome-icon");
      return v(), $("div", _u, [
        L.env === "development" && Ju ? (v(), $("div", qu, [
          me(x(e), {
            data: [A.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : N("", !0),
        E("div", null, [
          E("div", Bu, [
            E("button", {
              type: "button",
              class: "close",
              onClick: pe
            }, [
              me(oe, { icon: ["fass", "xmark"] })
            ]),
            (ve = A.value) != null && ve.name ? (v(), $("div", Gu, te(A.value.name), 1)) : N("", !0),
            E("div", Hu, te((qe = A.value) == null ? void 0 : qe.l) + " x " + te((He = A.value) == null ? void 0 : He.w) + " " + te((At = A.value) != null && At.t ? "x " + ((tt = A.value) == null ? void 0 : tt.t) : null), 1),
            L.options.faces.enabled ? (v(), $("div", Nu, [
              E("div", {
                ref: "sides",
                class: Se(["sides", { flipped: Ye.value === 1 }]),
                onClick: U
              }, W[4] || (W[4] = [
                E("div", { class: "side-a" }, " A ", -1),
                E("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              W[5] || (W[5] = E("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : N("", !0),
            r.value ? (v(), $("button", {
              key: 2,
              onClick: g
            }, " Delete all machining ")) : N("", !0),
            E("div", Wu, [
              L.options.holes.enabled ? (v(), $("div", {
                key: 0,
                class: Se({ selected: F.value === "holes" }),
                onClick: W[0] || (W[0] = (Be) => F.value = "holes")
              }, " Holes ", 2)) : N("", !0),
              L.options.hingeHoles.enabled ? (v(), $("div", {
                key: 1,
                class: Se({ selected: F.value === "hingeHoles" }),
                onClick: W[1] || (W[1] = (Be) => F.value = "hingeHoles")
              }, " Hinge holes ", 2)) : N("", !0),
              L.options.corners.enabled ? (v(), $("div", {
                key: 2,
                class: Se({ selected: F.value === "corners" }),
                onClick: W[2] || (W[2] = (Be) => F.value = "corners")
              }, " Corners ", 2)) : N("", !0),
              L.options.banding.enabled ? (v(), $("div", {
                key: 3,
                class: Se({ selected: F.value === "banding" }),
                onClick: W[3] || (W[3] = (Be) => F.value = "banding")
              }, " Banding ", 2)) : N("", !0)
            ]),
            E("div", Uu, [
              F.value === "holes" || F.value === "hingeHoles" ? (v(), $("button", {
                key: 0,
                type: "button",
                onClick: K
              }, " Create ")) : N("", !0),
              F.value && F.value !== "banding" ? (v(), $("button", {
                key: 1,
                type: "button",
                onClick: P
              }, " Delete all ")) : N("", !0)
            ]),
            F.value === "banding" && A.value ? (v(), fe(Qi, {
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
              onSet: Ue,
              onUpdateAll: Qe
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : N("", !0),
            F.value !== "banding" && b.value.length ? (v(), $("div", {
              key: 4,
              class: Se(["grid-table", F.value]),
              style: we({ "grid-template-columns": a.value })
            }, [
              E("div", ju, [
                V() ? (v(), $("div", zu)) : N("", !0),
                (v(!0), $(be, null, Le(u.value, (Be, Ke, ae) => es((v(), $("div", {
                  key: ae,
                  class: "cell"
                }, te(Be.label ?? Ke), 1)), [
                  [ts, Be.enabled]
                ])), 128)),
                W[6] || (W[6] = E("div", { class: "del" }, null, -1))
              ]),
              (v(!0), $(be, null, Le(b.value, (Be, Ke) => (v(), $("div", {
                key: Ke,
                class: "row"
              }, [
                V() ? (v(), $("div", Vu, [
                  E("div", Yu, te(q(Ke)), 1)
                ])) : N("", !0),
                (v(!0), $(be, null, Le(h.value, (ae, St) => (v(), $("div", {
                  key: St,
                  class: "cell"
                }, [
                  u.value[ae].type !== "select" && u.value[ae].type !== "checkbox" ? (v(), fe(ft, {
                    key: 0,
                    id: ae + "-" + St,
                    warning: se(Ke, ae),
                    type: u.value[ae].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: u.value[ae].label ?? ae,
                    disabled: ce(u.value[ae]),
                    value: Be[ae],
                    units: o.value,
                    output: u.value[ae].output,
                    "onUpdate:value": (Dt) => k(Be, ae, Dt)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : u.value[ae].type === "checkbox" ? (v(), fe(ft, {
                    key: 1,
                    id: ae + "-" + St,
                    type: "checkbox",
                    warning: se(Ke, ae),
                    "enable-label": !1,
                    disabled: ce(u.value[ae]),
                    value: Be[ae],
                    output: u.value[ae].output,
                    "onUpdate:value": (Dt) => k(Be, ae, Dt)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : u.value[ae].type === "select" ? (v(), fe(ft, {
                    key: 2,
                    id: ae + "-" + St,
                    type: "select",
                    "enable-label": !1,
                    warning: se(Ke, ae),
                    disabled: ce(u.value[ae]),
                    value: Be[ae],
                    options: u.value[ae].options,
                    output: u.value[ae].output,
                    "onUpdate:value": (Dt) => k(Be, ae, Dt)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : N("", !0)
                ]))), 128)),
                E("div", {
                  class: "cell",
                  onClick: (ae) => he(Ke)
                }, [
                  E("div", Ku, [
                    me(oe, { icon: ["fass", "trash"] })
                  ])
                ], 8, Xu),
                (v(!0), $(be, null, Le(H(Ke), (ae, St) => (v(), $("div", {
                  key: St,
                  class: "group validation",
                  style: we({ "grid-column-end": "span " + l.value })
                }, te(ae), 5))), 128))
              ]))), 128))
            ], 6)) : F.value !== "banding" ? (v(), $("div", Zu, " Please select from the menu above ")) : N("", !0)
          ]),
          E("div", {
            id: "machining-diagram",
            class: Se(["diagram", { flipped: Ye.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
}), ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Qu }, Symbol.toStringTag, { value: "Module" })), tc = {
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
      files: nr([])
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
function ic(i, t, e, s, n, r) {
  return v(), $("div", {
    id: "drop",
    class: Se({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = rr((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    E("div", null, te(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const sc = /* @__PURE__ */ Zt(tc, [["render", ic]]), nc = { id: "import-file" }, rc = /* @__PURE__ */ Ie({
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
    const e = i, s = t, { t: n } = Gi(["main", "errors"]), r = G([]), o = G([]), l = G([]), a = G([]), u = G({}), h = G([]), b = G(!1), S = G(null), d = G(null), g = [
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
      return r.value.forEach((B, H) => {
        P[H] = {};
        for (const [Q, se] of Object.entries(B)) {
          if (!g.includes(Q)) continue;
          const pe = z(Q, se);
          (pe === !0 || pe === !1) && (P[H][Q] = pe);
        }
      }), P;
    }), q = Z(() => e.customFields.map((P) => P.label)), V = (P, B) => {
      if (B) {
        const H = Object.keys(B), Q = [[]];
        H.forEach((pe) => {
          const ce = B[pe], Ue = [];
          Q.forEach((Qe) => {
            ce.forEach((A) => Ue.push([...Qe, A]));
          }), Q.splice(0, Q.length, ...Ue);
        });
        const se = /* @__PURE__ */ new Set();
        Q.forEach((pe) => se.add(pe.join("|").toLowerCase())), P === "banding" ? S.value = se : d.value = se;
      }
    }, z = (P, B) => {
      if (B === "???") return !0;
      function H(se) {
        return se ? (se = se.trim().toLowerCase(), se === "l" || se === "w") : !0;
      }
      const Q = {
        banding: (se) => Y(se, S.value, "banding"),
        finish: (se) => Y(se, d.value, "finish"),
        orientationLock: H
      };
      return P in Q ? Q[P](B) : null;
    }, Y = (P, B, H) => {
      if (P = R(P), !P) return !0;
      const Q = P.split(","), se = Q.every((pe) => !pe || B.has(pe.toLowerCase()));
      if (!se) {
        const pe = Q.filter((ce) => !B.has(ce.toLowerCase()));
        console.log(`Valid ${H} choices...`), console.table(Array.from(B)), console.log(`The following ${H} choices are invalid`, pe);
      }
      return se;
    }, J = (P, B) => {
      const H = {
        bandingOptions: (Q) => ne(Q, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (Q) => ne(Q, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return P in H ? H[P](B) : null;
    }, ne = (P, B, H, Q) => {
      if (P = R(P), !P)
        return Q.reduce((ce, Ue) => ({ ...ce, [Ue]: {} }), {});
      const se = P.split(",").map((ce) => ce.toLowerCase()), pe = {};
      return Q.forEach((ce, Ue) => {
        pe[ce] = {}, Object.keys(B).forEach((Qe, A) => {
          var lt;
          pe[ce][H[A]] = ((lt = se[Ue]) == null ? void 0 : lt.split("|")[A]) || "";
        });
      }), pe;
    }, U = () => r.value.map((P, B) => ({
      l: e.numberFormat === "decimal" ? Oi(P.l) : P.l,
      w: e.numberFormat === "decimal" ? Oi(P.w) : P.w,
      t: e.numberFormat === "decimal" ? Oi(P.t) : P.t,
      q: P.q,
      orientationLock: P.orientationLock,
      name: P.name,
      material: P.material,
      bandingOptions: k.value[B].banding ? J("bandingOptions", P.banding) : null,
      finishOptions: k.value[B].finish ? J("finishOptions", P.finish) : null,
      numberFormat: e.numberFormat,
      customData: re(P)
    })), K = (P) => {
      var H;
      const B = (H = P == null ? void 0 : P[0]) == null ? void 0 : H.data;
      B && $r.parse(B, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (Q) => y(Q),
        error: () => s("error")
      });
    }, y = (P) => {
      o.value = P.data.filter((B) => B.some((H) => H)), l.value = o.value[0], u.value = {};
      for (let B = l.value.length; B--; ) {
        const H = l.value[B], Q = T(H);
        Q ? u.value[B] = Q : (u.value[B] = null, q.value.includes(H) && (u.value[B] = "customData." + e.customFields.find((se) => se.label === H).id));
      }
      j(), o.value.shift(), M(), he();
    }, T = (P) => {
      const B = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", n("l"), n("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", n("w"), n("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", n("t"), n("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", n("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", n("quantity"), n("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", n("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", n("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", n("banding")],
        finish: ["finish", "paint"]
      }, H = Object.entries(B).reduce(
        (Q, [se, pe]) => (pe.some((ce) => P && P.toLowerCase() === ce) && Q.push(se), Q),
        []
      );
      return H.length > 1 ? null : H[0];
    }, j = () => {
      b.value = !1, a.value = Object.values(u.value).map((B) => !B || B === "N" ? null : g.includes(B) ? B : (b.value = !0, null));
      const P = a.value.filter((B, H) => a.value.indexOf(B) !== H);
      h.value = P.map((B) => a.value.reduce(
        (H, Q, se) => (Q && Q === B && H.push(se), H),
        []
      ));
    }, R = (P) => P && P.replace(/\s*,\s*/g, ","), M = () => {
      const P = o.value.map((B) => {
        const H = {};
        return l.value.forEach((Q, se) => {
          if (h.value.flat().includes(se))
            return H[u.value[se]] = "???";
          H[u.value[se]] = B[se];
        }), H;
      });
      r.value = P;
    }, re = (P) => {
      let B = {};
      for (let H in P)
        if (H.startsWith("customData.")) {
          let Q = H.slice(11);
          B[Q] = P[H];
        }
      return B;
    }, he = () => {
      const P = U();
      P != null && P.length && s("import", P);
    };
    return ot(() => {
      V("banding", e.bandingOptions), V("finish", e.finishOptions);
    }), (P, B) => (v(), $("div", nc, [
      me(sc, {
        label: x(n)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: K
      }, null, 8, ["label"])
    ]));
  }
}), oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: rc }, Symbol.toStringTag, { value: "Module" }));
class xt extends Error {
  constructor(t, e) {
    super(t), this.code = e, this.name = "FormulaError";
  }
}
class Xs {
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
          const q = k.split(".")[1];
          d.set(k, s[q]);
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
const lc = {
  key: 0,
  class: "debug"
}, ac = { id: "formula-pricing" }, uc = {
  key: 0,
  class: "extras"
}, cc = { class: "heading" }, hc = { id: "hardware-total" }, dc = { class: "heading panels" }, fc = !1, pc = /* @__PURE__ */ Ie({
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
    const e = $t(() => Promise.resolve().then(() => Vi)), { addNotice: s } = Hi(), n = i, { t: r } = Gi(["main", "errors"]), o = t, l = or("calculator"), a = Z(() => l()), u = G("production");
    let h = null;
    const b = G(null), S = G([]), d = G(!1), g = Z(() => {
      if (!d.value || !S.value.length || S.value.every((y) => y.value === null)) return;
      const K = J();
      return Ve(() => {
        o("panel-result", K);
      }), K;
    }), k = Z(() => {
      if (!a.value || !d.value || !S.value.length || S.value.every((y) => y.value === null)) return;
      const K = ne();
      return Ve(() => {
        o("hardware-result", K, q.value);
      }), K;
    }), q = Z(() => {
      if (k.value)
        return Object.values(k.value).reduce((K, y) => K + y.totalCost, 0);
    });
    xe(g, (K) => {
      var R, M, re, he;
      if (!d.value || !K || !a.value || !((R = a.value) != null && R.inputShapes) || !((M = a.value.inputShapes) != null && M.length)) return;
      const y = (P) => P != null && P.name ? P.name.toLowerCase() : "", T = new Map(
        a.value.inputShapes.map((P) => [y(P), P])
      ), j = /* @__PURE__ */ new Set();
      for (const P of Object.values(g.value)) {
        if (!P.name) continue;
        const B = y(P), H = T.get(B), Q = {
          ...P,
          name: P.name.toUpperCase() || (H == null ? void 0 : H.name.toUpperCase()),
          material: ((re = P.material) == null ? void 0 : re.toUpperCase()) || ((he = H == null ? void 0 : H.material) == null ? void 0 : he.toUpperCase()),
          bandingOptions: P.bandingOptions || {},
          finishOptions: P.finishOptions || {},
          orientationLock: P.orientationLock || null,
          readonly: !0
        }, se = H || a.value.createInputShape(Q);
        if (H) {
          Object.assign(H, Q);
          for (const pe of ["banding", "finish"])
            a.value.initExtrasOptions(H, pe);
        } else
          a.value.inputShapes.push(se);
        j.add(B);
      }
      a.value.inputShapes = a.value.inputShapes.filter(
        (P) => j.has(y(P))
      );
    }, { immediate: !1 }), ot(() => U());
    const V = (K) => {
      n.debug && console.log(K);
    }, z = () => {
      S.value = Object.values(b.value.inputs).map(() => ({
        value: null
      }));
    }, Y = (K, y) => {
      S.value[K] && (S.value[K].value = y);
    }, J = () => {
      try {
        return h.calculatePanelsFromFields(S.value);
      } catch (K) {
        return Ve(() => {
          s({
            type: "error",
            message: K.message.split(`
`)[0]
          });
        }), null;
      }
    }, ne = () => {
      try {
        return h.calculateHardwareFromFields(S.value);
      } catch (K) {
        return Ve(() => {
          s({
            type: "error",
            message: K.message.split(`
`)[0]
          });
        }), null;
      }
    }, U = async () => {
      if (!n.url && !n.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      n.url ? (V(`SmartCut - Formula calculator init from url: ${n.url}`), h = new Xs({ url: n.url }), b.value = await h.getSpec()) : n.spec && (V("SmartCut - Formula calculator init with JSON"), h = new Xs({ spec: n.spec }), b.value = await h.getSpec()), z(), d.value = !0;
    };
    return (K, y) => {
      var T;
      return v(), $(be, null, [
        u.value === "development" && fc ? (v(), $("div", lc, [
          y[0] || (y[0] = E("div", null, "Developer information", -1)),
          b.value ? (v(), fe(x(e), {
            key: 0,
            data: [b.value],
            paths: ["spec"]
          }, null, 8, ["data"])) : N("", !0),
          me(x(e), {
            data: [S.value],
            paths: ["this.fields"]
          }, null, 8, ["data"])
        ])) : N("", !0),
        E("div", ac, [
          (v(!0), $(be, null, Le((T = b.value) == null ? void 0 : T.inputs, (j, R, M) => {
            var re;
            return v(), fe(ft, {
              id: "formula-field-" + M,
              key: M,
              type: j.type,
              label: j.label,
              placeholder: j.label,
              min: j.min ?? 0,
              max: j.max ?? null,
              default: j.default ?? 0,
              value: (re = S.value[M]) == null ? void 0 : re.value,
              "onUpdate:value": (he) => Y(M, he)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          k.value ? (v(), $("div", uc, [
            E("div", cc, te(x(r)("Hardware")), 1),
            (v(!0), $(be, null, Le(k.value, (j, R) => (v(), $("div", { key: R }, te(j.name) + " x" + te(j.q) + " = " + te(i.formatPrice(j.totalCost)), 1))), 128)),
            E("div", hc, te(x(r)("Hardware total")) + " = " + te(i.formatPrice(q.value)), 1)
          ])) : N("", !0),
          E("div", dc, te(x(r)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: pc }, Symbol.toStringTag, { value: "Module" })), gc = { id: "smartcut-notices" }, mc = { class: "content" }, yc = ["onClick"], vc = ["innerHTML"], bc = /* @__PURE__ */ Ie({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = Hi(), n = G({}), r = Z(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = qt("font-awesome-icon");
      return v(), fe(Ks, { to: "body" }, [
        E("div", gc, [
          me(lr, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: Se(["notices-container", t.position])
          }, {
            default: ss(() => [
              (v(!0), $(be, null, Le(x(e), (u) => (v(), $("div", {
                key: u.id,
                ref_for: !0,
                ref: (h) => {
                  h && (n.value[u.id] = h);
                },
                class: Se([
                  "notice",
                  `notice--${u.type}`
                ])
              }, [
                E("div", mc, [
                  E("div", {
                    class: "message",
                    onClick: (h) => u.action()
                  }, te(u.message), 9, yc),
                  E("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, vc)
                ]),
                u.persistent ? N("", !0) : (v(), fe(a, {
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
}), Nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: bc }, Symbol.toStringTag, { value: "Module" }));
export {
  Ir as A,
  Ni as B,
  Gc as C,
  Bc as D,
  Hc as F,
  as as I,
  Nc as N,
  Vi as O,
  mt as S,
  Zt as _,
  Ui as a,
  Tt as b,
  X as c,
  _c as d,
  Wo as e,
  Mi as f,
  Mc as g,
  Lt as h,
  Oc as i,
  Ac as j,
  Dc as k,
  Ec as l,
  qc as m,
  Rc as n,
  O as o,
  Ut as p,
  Pc as q,
  Tc as r,
  Pe as s,
  Fc as t,
  Lc as u,
  pt as v,
  dt as w,
  Et as x,
  As as y,
  Yt as z
};

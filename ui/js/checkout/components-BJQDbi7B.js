var er = Object.defineProperty;
var tr = (i, t, e) => t in i ? er(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => tr(i, typeof t != "symbol" ? t + "" : t, e);
import { F as ai, c as ir, a as sn, b as Ke, g as Yt, v as rs, i as fi, t as Di, d as ri, e as Ti, h as sr, s as nr, f as rr, o as or, j as lr, k as ar, P as ur } from "./vendor-CtQQhE4g.js";
import { d as Oe, o as v, c as k, F as we, r as Ae, n as ke, a as xe, b as E, t as se, w as os, v as ls, e as cr, f as G, g as N, h as J, i as $e, j as ut, k as Ye, l as as, m as oi, u as x, p as Vt, q as pe, s as us, x as hr, y as Gi, z as _t, A as be, B as dr, C as $t, D as fr, E as pr, G as gr, H as mr, I as ht, J as yr, T as vr, K as nn, L as br, M as Ts, N as wr, O as Sr, P as xr, Q as kr, R as Cr } from "./vendor-vue-CrziaopC.js";
import { u as rn, a as Ni, b as on, c as Ir, d as $r, e as Pr } from "./composables-B-aRqd4-.js";
import { l as Qe, a as Ei, b as Ri, c as ln, d as an, s as Re, e as li, r as Rt, f as un, p as Lr, g as Tr, S as Ar, h as Or, i as Dr, j as Er, k as Rr } from "./vendor-d3-BrvhDTRC.js";
import { i as Mr } from "./vendor-i18n-D9hV6ZJH.js";
function pi(i) {
  return !(!i || typeof i != "string");
}
function Fr(i) {
  return !pi(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function jt(i) {
  return pi(i) ? i.trim().split(" ").map((t) => Te(t)).join(" ") : "";
}
function Te(i) {
  return pi(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function Wi(i) {
  return pi(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function _r(i, t = 100) {
  return pi(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let cn = Mr;
function Uc(i) {
  cn = i;
}
function qe(i, t) {
  const e = cn.t(i, { ns: ["main", "errors"], ...t });
  return e || i;
}
const Ut = 1e-10, qr = 10, Br = Number.MAX_SAFE_INTEGER, Hr = 4294967295, _e = (i) => typeof i == "number" && Number.isFinite(i), Ai = (i) => Array.isArray(i) && i.length > 0;
function si(i, t, e = Ut) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Gr = {
  greaterThan: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) >= 0,
  lessThan: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) <= 0,
  equalTo: (i, t, e = Ut) => !_e(i) || !_e(t) ? !1 : si(i, t, e) === 0
};
function Nr(i) {
  return _e(i) ? Number.isInteger(i) ? i : Number(i.toFixed(qr)) : !1;
}
function Wr(i) {
  if (!_e(i) || i < 0 || i > Br)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Hr + 1) * i);
}
function Ur(i, t) {
  if (!Ai(i))
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
    if (!Ai(t))
      throw new Error("Invalid input array");
    return t.reduce((e, s) => e + s, 0) / t.length;
  }
  static calculateStandardDeviation(t, e = null) {
    if (!Ai(t))
      throw new Error("Invalid input array");
    const s = e ?? this.calculateMean(t), n = t.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / t.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(t) {
    if (!Ai(t))
      throw new Error("Invalid input array");
    const e = this.calculateMean(t);
    if (e === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(t, e) / e;
  }
}
const ue = {
  ...Gr,
  isNumber: _e,
  round: Nr,
  getRandom: Wr,
  getRandomSample: Ur,
  calculateStandardDeviation: ki.calculateStandardDeviation.bind(ki),
  calculateCoefficientOfVariation: ki.calculateCoefficientOfVariation.bind(ki)
}, jr = 10, zr = 0;
class cs extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
function Vr(i) {
  const t = i.toString(), e = t.indexOf(".");
  return e === -1 ? 0 : t.length - e - 1;
}
function A(i) {
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
    dp: u = jr,
    pl: h = !1,
    fr: y = zr
  } = { nf: e, dp: s, pl: n, fr: r, ...l };
  if (t == null || t === "")
    return a === "decimal" ? null : "";
  try {
    const w = Jr(t, h);
    return w ? a === "decimal" ? Yr(
      w,
      t,
      u
    ) : Xr(
      w,
      y
    ) : a === "decimal" ? 0 : "0";
  } catch (w) {
    throw new cs(
      `Failed to convert number format: ${t} to ${a}. ${w.message}`
    );
  }
}
function Yr(i, t, e) {
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
  const n = new ai(i).valueOf();
  if (typeof t == "string" && t.includes("/"))
    return typeof e == "number" ? ni(Number(n.toFixed(e))) : n;
  const r = Vr(String(t));
  return ni(Number(n.toFixed(r)));
}
function Xr(i, t) {
  const e = new ai(i);
  if (t > 0) {
    const s = e.valueOf(), n = Math.round(s * t);
    return new ai(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function ni(i) {
  const t = i.toString();
  return t.includes(".") && /\.0+$/.test(t) ? parseInt(t, 10) : i;
}
function Kr(i = "en-US") {
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
    const { thousandsSeparator: e, decimalSeparator: s } = Kr(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch {
    throw new cs(`Failed to parse number: ${i}`);
  }
}
function Zr(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  return /^(\d+\s+)?\d+\/\d+$|^\d+$|^\d+'\s*(\d+\s+)?\d+\/\d+"$|^\d+'\s*(\d+\s+)?\d+\/\d+$|^(\d+\s+)?\d+\/\d+"$/.test(t);
}
function Jr(i, t = !1) {
  if (!i && i !== 0) return null;
  let e = String(i).trim();
  if (!e) return null;
  try {
    if (Zr(i))
      return e.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
    {
      t ? (e = e.replace(/[^0-9,. -]/g, ""), e = e.replace(/\s/g, "")) : (e = e.replace(/[^0-9,.-]/g, ""), e = e.replace(/,/g, "")), e.startsWith(".") && (e = "0" + e), e.startsWith("-.") && (e = "-0." + e.slice(2));
      const s = t ? Oi(e) : parseFloat(e);
      return s === null || isNaN(s) ? null : s.toString();
    }
  } catch (s) {
    throw new cs(
      `Failed to clean numeric input: ${i}. ${s.message}`
    );
  }
}
function jc(i, t, e = null, s = null) {
  if (i && !(!Ce(i) && !ft(i))) {
    if (!["decimal", "fraction"].includes(t)) {
      console.warn("Attempting to update to an invalid number format:", t);
      return;
    }
    for (const n of i.numberFormatKeys) {
      if (typeof i[n] == "object") {
        for (const r in i[n])
          i[n][r] = A({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s });
        return;
      }
      i[n] = A({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
    }
  }
}
function Ji(i) {
  const t = {
    l: i.l,
    w: i.w
  };
  return (typeof t.l == "string" || typeof t.w == "string") && (t.l = A({ v: i.l }), t.w = A({ v: i.w })), t;
}
function hn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function Qr(i) {
  hn(i), [i.l, i.w] = [i.w, i.l];
}
function Ui(i, t, e) {
  var u, h;
  if (!t || !i)
    throw new Error("Container and shape are required");
  const s = ms(t) ? (h = (u = t == null ? void 0 : t.saw) == null ? void 0 : u.options) == null ? void 0 : h.minSpacing : 0, n = Ji(t);
  function r(y, w) {
    return ue.equalTo(y, w) || ue.lessThanOrEqualTo(y, w - s);
  }
  function o(y) {
    const w = Ji(y);
    return r(w.l, n.l) && r(w.w, n.w);
  }
  const l = hs(i, t);
  if (i.orientationLock || e !== void 0) {
    const w = Ki(i, e ?? (l === "l" ? 0 : 1));
    return o(w);
  }
  let a = Ki(i, 0);
  return o(a) ? !0 : (a = Ki(i, 1), o(a));
}
function dn(i) {
  let t = null;
  return At(i) ? t = i.direction : (at(i) || Ce(i)) && (t = i.orientationLock), t;
}
function Ki(i, t) {
  const e = {
    l: i.l,
    w: i.w
  };
  return ((i == null ? void 0 : i.rot) ?? 0) === t || ([e.l, e.w] = [e.w, e.l]), e;
}
function hs(i, t) {
  const e = dn(i);
  return !t || At(i) ? e : C(e) ? ms(t) ? eo(i, t) : e : null;
}
function eo(i, t) {
  if (!t) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!ms(t)) throw new Error("container is not a container");
  const e = dn(i);
  if (At(i)) return e;
  if (!C(e)) return null;
  const s = t.getStock();
  return C(s.grain) ? e === s.grain ? "l" : "w" : e;
}
function Qi(i, t = null, e = null) {
  if (!C(t))
    throw new Error("no rotation provided to canRotate");
  if (t === !0 && (t = 1), t === !1 && (t = 0), fn(i) && t || e && !Ui(i, e, t))
    return !1;
  const s = hs(i, e);
  return !(s === "l" && t === 1 || s === "w" && t === 0);
}
function es(i, t = null, e = null) {
  return t === null && (t = i.rot === 0 ? 1 : 0), Qi(i, t, e) ? (i.rot === t || Qr(i), !0) : !1;
}
function Xt(i, t = null, e = null) {
  return t ? t = 1 : t = 0, e && t && !Ui(i, e, t) ? !1 : es(i, t, e);
}
function to(i, t) {
  if (!t)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const e = hs(i, t);
  return e === "l" ? Xt(i, 0) : e === "w" ? Xt(i, 1) : !1;
}
function io(i) {
  return i.orientationLock === "l" ? Xt(i, 0) : i.orientationLock === "w" ? Xt(i, 1) : !1;
}
function fn(i) {
  hn(i);
  const t = Ji(i);
  return ue.equalTo(t.l, t.w);
}
const Mi = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function As(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function Os(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Ds(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const ye = (i, t, e) => t in i ? i[t] : (console.warn(Mi.missingProperty(String(t), e)), null), Ci = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, Wt = (i, t) => {
  if (!As(i) || !As(t))
    return console.warn(Mi.missingArea), 0;
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
const Fi = {
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
  LDIDA: Ci(
    rt([["l", "desc"]]),
    nt
  ),
  WDIDA: Ci(
    rt([["w", "desc"]]),
    nt
  ),
  // Area-based sorts
  AD: (i, t) => -Wt(i, t),
  AA: Wt,
  AAID: Ci(
    Wt,
    nt
  ),
  ADID: Ci(
    (i, t) => -Wt(i, t),
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
    return !Os(i) || !Os(t) ? (console.warn(Mi.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Ds(t) || !Ds(e) ? (console.warn(Mi.missingLongSide), 0) : e[i] === t[i] ? -Wt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function so(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function ui(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function no(i) {
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
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = ro(this), this.direction = oo(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
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
  return new zt({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function ro(i) {
  return typeof i > "u" || !ue.isNumber(i.x1) || !ue.isNumber(i.x2) || !ue.isNumber(i.y1) || !ue.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function oo(i) {
  return typeof i > "u" || !ue.isNumber(i.x1) || !ue.isNumber(i.x2) || !ue.isNumber(i.y1) || !ue.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function lo(i, t) {
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
const ao = {
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
ir.showDiff = !0;
sn("tests");
sn("timers");
function pn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function gn(i = [], t = null) {
  i != null && i.length && pn() && ao.runTests;
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
const uo = Ke("errors");
Ke("allStock");
uo.color = 1;
function co(i) {
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
class ji extends zt {
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
    C(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Bt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.guillotine = e.guillotine, this.guillotineData = C(e.guillotineData) ? e.guillotineData : {}, this.guillotineData.ptxDummyCut = (e == null ? void 0 : e.ptxDummyCut) || ((o = e == null ? void 0 : e.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = C(e.isTrim) ? e.isTrim : !1, this.distances = C(e.distances) ? e.distances : {}, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const e = structuredClone(this);
    return new ji(e);
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
    return co(this);
  }
  getArea() {
    if (!this.stock) return 0;
    const e = this.getLength();
    return e ? e * this.stock.getBladeWidth() : 0;
  }
}
const ho = {
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
}, Ii = {
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
      const s = ho[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Ii[this.corner] && (this.grid ? Ii[this.corner][this.grid] && Ii[this.corner][this.grid].forEach((s) => e.add(s)) : Ii[this.corner].default.forEach((s) => e.add(s))), e) : ($i[this.corner] && (this.grid ? $i[this.corner][this.grid] && $i[this.corner][this.grid].forEach((s) => e.add(s)) : $i[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class qt {
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
  const r = fo[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const fo = {
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
function po(i, t, e) {
  var o, l, a, u, h, y;
  const s = new qt(), n = e.toArray().sort(mn), r = t.getBladeWidth();
  if (n.forEach((w) => {
    const f = w.corner, g = w.type;
    if (!r)
      s.addPoint(w);
    else
      switch (f) {
        case "topRight":
          s.addPoint(
            fe("top", w, r, f),
            g
          ), s.addPoint(
            fe("right", w, r, f),
            g
          );
          break;
        case "topLeft":
          s.addPoint(
            fe("top", w, r, f),
            g
          ), s.addPoint(
            fe("left", w, r, f),
            g
          );
          break;
        case "bottomRight":
          s.addPoint(
            fe("bottom", w, r, f),
            g
          ), s.addPoint(
            fe("right", w, r, f),
            g
          );
          break;
        case "bottomLeft":
          s.addPoint(
            fe("bottom", w, r, f),
            g
          ), s.addPoint(
            fe("left", w, r, f),
            g
          );
          break;
      }
    const S = s.toArray();
    if (r)
      for (let q = S.length; q--; ) {
        const V = S[q];
        e.contains(V) && s.deletePoint(V);
      }
    else
      for (let q = S.length; q--; ) {
        const V = S[q];
        for (let z = i.length; z--; ) {
          const Y = i[z];
          if (V.x === Y.x && V.y === Y.y) {
            s.deletePoint(V);
            break;
          }
        }
      }
  }), r) {
    const w = /* @__PURE__ */ new Set();
    let f, g, S, q;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (f = t.x, g = t.y, S = t.x + t.l, q = t.y + t.w) : (f = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), g = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), S = t.x + t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2), q = t.y + t.w - ((y = t == null ? void 0 : t.trim) == null ? void 0 : y.y2));
    let V = s.toArray();
    for (let z = V.length; z--; ) {
      const Y = V[z];
      (ue.lessThan(Y.x, f) || ue.lessThan(Y.y, g) || ue.greaterThan(Y.x, S) || ue.greaterThan(Y.y, q)) && V.splice(z, 1);
    }
    s.clear(), s.addPoints(V), w.clear(), V = s.toArray();
    for (let z = V.length; z--; ) {
      const Y = V[z];
      for (let Q = i.length; Q--; ) {
        const oe = i[Q];
        if (Y.collidesWith(oe)) {
          s.deletePoint(Y);
          break;
        }
      }
    }
  }
  return s;
}
function go(i, t, e) {
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
  const l = new qt();
  for (const a of s)
    a.raycast = !0, l.addPoints(bn(i, a, e).toArray());
  return wn(i, e, l), l;
}
function mo(i, t) {
  const e = new qt();
  return i.sort(mn), i.forEach((s) => {
    At(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function yo(i = [], t, e) {
  const s = mo(
    i === null ? t : i,
    e
  );
  return po(
    t,
    e,
    s
  );
}
function mn(i, t) {
  return i.y === t.y ? t.x - i.x : t.y - i.y;
}
function yn(i, t, e, s, n, r) {
  i.a = t.id, i.b = e ? e.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function vo(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new qt();
  const s = vn(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const h of u)
        bo(
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
      const y = new Ee(h.x2, h.y2);
      r === h.direction && (yn(y, l, null, h.direction, "edge"), e.addPoint(y));
    }
  }), e = wo(e), e;
}
function vn(i, t) {
  return i.map((e) => {
    const s = lo(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function bo(i, t, e, s) {
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
    const u = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, h = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, y = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, w = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (u || h || y || w) {
      const g = r ? i[`${l}1`] : n, S = r ? n : i[`${l}1`], q = new Ee(g, S), V = i.origin;
      yn(q, t, e, i.direction, "shape", V), s.addPoint(q);
    }
  }
}
function wo(i) {
  const t = new qt();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = So(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function So(i, t) {
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
function bn(i, t, e) {
  const s = new qt(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = xo(t, i, e), r) {
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
  return wn(i, e, s), s;
}
function xo(i, t, e) {
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
function wn(i, t, e) {
  var a, u, h, y, w, f;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (h = t == null ? void 0 : t.trim) == null ? void 0 : h.x1, n = (y = t == null ? void 0 : t.trim) == null ? void 0 : y.y1, r = t.l - ((w = t == null ? void 0 : t.trim) == null ? void 0 : w.x2) - i.l, o = t.w - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.y2) - i.w);
  const l = e.toArray();
  for (let g = l.length; g--; ) {
    const S = l[g];
    (ue.lessThan(S.x, s) || ue.lessThan(S.y, n) || ue.greaterThan(S.x, r) || ue.greaterThan(S.y, o) || S.x < 0 || S.y < 0) && e.deletePoint(S);
  }
}
function ko(i, t, e = !1, s = !1) {
  return t.filter((n, r) => {
    const o = {
      fit: Co(i) && Ui(i, n),
      material: Io(i, n, e),
      thickness: $o(i, n, s),
      width: Po(i, n)
    };
    return Object.entries(o).forEach(([l, a]) => {
      i.stockMatch[l][r] = a;
    }), Object.values(o).every(Boolean);
  });
}
function Co(i) {
  return Ce(i) || at(i) || In(i);
}
function Io(i, t, e) {
  var r, o;
  if (!e) return !0;
  const s = (r = t == null ? void 0 : t.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function $o(i, t, e) {
  return e ? !C(i.t) || !C(t.t) ? !1 : at(i) ? ue.equalTo(i.t, t.t) : i.t === t.t : !0;
}
function Po(i, t) {
  var e;
  return ((e = t == null ? void 0 : t.saw) == null ? void 0 : e.stockType) !== "linear" || !at(i) ? !0 : Qi(i, 0, t) && ue.equalTo(i.w, t.w) || Qi(i, 1, t) && ue.equalTo(i.l, t.w);
}
const Es = (i) => i.some((t) => t === !0), Lo = (i, t) => i.some((e, s) => e && t[s]);
function To(i, t, e) {
  const s = Ce(i[0]);
  if (i.some((h) => C(h.stockLock) && h.stockLock.length)) return { stockList: t, shapeList: i, unusableShapes: [], unusableStock: [] };
  s || (t = t.filter((h) => h.autoAdd === !0 || C(h.q) && h.q > 0));
  const r = t.some((h) => C(h.material)), o = t.some((h) => C(h.t)), l = /* @__PURE__ */ new Set();
  for (const h of i) {
    h.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const y = ko(h, t, r, o);
    h.stockMatch.fit = Es(h.stockMatch.fit);
    const w = Lo(
      h.stockMatch.material,
      h.stockMatch.thickness
    );
    if (h.stockMatch.width = Es(h.stockMatch.width), !s && y.length) {
      const f = y.map((g) => g.getParentID());
      h.stockLock = f, f.forEach((g) => l.add(g));
    }
    h.stockMatch.fit ? (w || new X({
      item: h,
      field: [["material"], ["t"]],
      message: "no_matching_stock_material_thickness"
    }), e === "linear" && !h.stockMatch.width && new X({
      item: h,
      field: [["w"]],
      message: "no_matching_stock_width"
    })) : new X({
      item: h,
      field: [["l"], ["w"]],
      message: "will_not_fit"
    }), h.stockMatch = null;
  }
  let a, u;
  return s || (a = i.filter((h) => !h.stockLock || !h.stockLock.length).sort(Fi.ID), u = t.filter((h) => !l.has(h.parentID)).sort(Fi.ID), t = t.filter((h) => Ot(h)).filter((h) => l.has(h.parentID)), (r || o) && (i = i.filter((h) => {
    var y;
    return (y = h == null ? void 0 : h.stockLock) == null ? void 0 : y.length;
  }))), {
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
    listId: r = null,
    issues: o = null,
    type: l = "error",
    throwError: a = !1
  }) {
    c(this, "message");
    c(this, "identifier");
    c(this, "field");
    c(this, "index");
    c(this, "listId");
    c(this, "type", "error");
    var h, y, w, f;
    this.message = qe(e), this.field = s, this.index = n, this.listId = r, this.type = l, t && ("name" in t && ((h = t.name) != null && h.length) ? this.identifier = t.name.toLocaleUpperCase() : "id" in t && ((y = t.id) != null && y.length) ? this.identifier = t.id : "parentID" in t && ((w = t.parentID) != null && w.length) ? this.identifier = t.parentID : typeof ((f = this == null ? void 0 : this.index) == null ? void 0 : f[0]) == "number" && (this.identifier = String(this.index[0] + 1)), "issues" in t && Array.isArray(t.issues) && t.issues.push(this)), Array.isArray(o) && o.push(this);
    const u = `issue created for ${rl(t)}: ${this.identifier || "N/A"} - ${this.message} for field ${this.field || "N/A"}`;
    if (a) throw new Error(u);
  }
}
const Zi = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Ao(i) {
  return (Zi == null ? void 0 : Zi[i]) || i;
}
function It(i) {
  return i.length ? (i == null ? void 0 : i.filter((t) => t.type === "error")) || [] : [];
}
function Rs(i, t, e = !1) {
  var r;
  return !("issues" in i) || !((r = i.issues) != null && r.length) ? !1 : i.issues.filter((o) => o.type === (e ? "warning" : "error")).some((o) => {
    var l;
    if (!((l = o.field) != null && l.length))
      return !1;
    for (let a = 0; a < o.field.length; a++)
      if (o.field[a].every((u, h) => u === Ao(t[h])))
        return !0;
    return !1;
  });
}
const Zt = ({ item: i, field: t, index: e, newIssues: s, min: n = null, max: r = null, required: o = !1, allowZero: l = !0, isWarning: a = !1 }) => {
  let u = Yt(i, t);
  if (o && (u == null || u === ""))
    return new X({
      item: i,
      message: qe("not_set", { x: Me[t.join(".")] }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), null;
  if (!l && u === 0)
    return new X({
      item: i,
      message: qe("greater_than", { x: Me[t.join(".")], y: 0 }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), 0;
  if (u == null || u === "") return null;
  try {
    u = A(u);
  } catch {
    return Oo({
      item: i,
      field: t,
      value: Yt(i, t),
      index: e,
      issues: s,
      isWarning: a
    }), null;
  }
  return Do({ item: i, field: t, value: u, index: e, issues: s, min: n, isWarning: a }), Eo({ item: i, field: t, value: u, index: e, issues: s, max: r, isWarning: a }), u;
}, Oo = ({ item: i, field: t, value: e, index: s, issues: n, isWarning: r }) => {
  new X({
    item: i,
    message: qe("not_understood", { x: t.join("."), y: e }),
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, Do = ({ item: i, field: t, value: e, index: s, issues: n, min: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e < r && new X({
    item: i,
    message: qe("greater_than_or_equal", { x: Me[t.join(".")], y: r }),
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, Eo = ({ item: i, field: t, value: e, index: s, issues: n, max: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e > r && new X({
    item: i,
    message: qe("less_than_or_equal", { x: Me[t.join(".")], y: r }),
    field: [t],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, Ro = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "banding" in i && typeof i.banding != "object" && new X({
    item: i,
    message: qe("must_be_object", { x: "banding" }),
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Mo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "x" in i && Zt({ item: i, field: ["x"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, Fo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "y" in i && Zt({ item: i, field: ["y"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, _o = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "l" in i && Zt({ item: i, field: ["l"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, qo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "w" in i && Zt({ item: i, field: ["w"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, Bo = ({ item: i, index: t, max: e, isWarning: s, saw: n }) => {
  const r = [];
  return "t" in i && ((n == null ? void 0 : n.cutType) === "beam" && !i.t && new X({
    item: i,
    message: qe("thickness_required_for_beam_saw"),
    field: [["t"]],
    index: [t],
    type: "error",
    issues: r
  }), Zt({ item: i, field: ["t"], index: t, newIssues: r, allowZero: !1, min: 0, max: e, isWarning: s })), r;
}, Ho = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "q" in i && A({ v: i.q }) <= 0 && (!("autoAdd" in i) || (i == null ? void 0 : i.autoAdd) === !1) && new X({
    item: i,
    message: qe("greater_than_or_equal", { x: Me.q, y: 0 }),
    field: [["q"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Go = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("orientationLock" in i) || i.orientationLock === void 0 || i.orientationLock === null || i.orientationLock === "") return s;
  const n = i.orientationLock.toLowerCase();
  return n !== "l" && n !== "w" && new X({
    item: i,
    message: qe("must_be_values", { x: Me.orientationLock, y: "l, w" }),
    field: [["orientationLock"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, No = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("grain" in i) || i.grain === void 0 || i.grain === null || i.grain === "") return s;
  const n = i.grain.toLowerCase();
  return n !== "l" && n !== "w" && new X({
    item: i,
    message: qe("must_be_values", { x: Me.grain, y: "l, w" }),
    field: [["grain"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Wo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("customData" in i)) return s;
  const n = i.customData;
  if (typeof n != "object")
    return new X({
      item: i,
      message: qe("must_be_object", { x: Me.customData }),
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const r in n) {
    const o = n[r];
    o != null && (["string", "number", "boolean"].includes(typeof o) || new X({
      item: i,
      message: qe("must_be_string_number_boolean", { x: Me.customData }),
      field: [["customData"]],
      index: [t],
      type: e ? "warning" : "error",
      issues: s
    }));
  }
  return s;
}, Uo = ({
  item: i,
  partTrim: t,
  index: e = null,
  isWarning: s = !1
}) => {
  const n = [];
  if (!t || !("l" in i) || !("w" in i) || !i.l || !i.w) return n;
  const r = A({ v: t }), o = A({ v: i.l }), l = A({ v: i.w }), a = o - r * 2, u = l - r * 2;
  return (a <= 0 || u <= 0) && new X({
    item: i,
    message: qe("too_much_trim", { x: "part", y: r, z: `${a}x${u}` }),
    field: [["l"], ["w"], ["trim"]],
    index: [e],
    type: s ? "warning" : "error",
    issues: n
  }), n;
}, jo = ({
  item: i,
  index: t = null,
  min: e = null,
  max: s = null,
  isWarning: n = !1
}) => {
  const r = [];
  if (!("l" in i) || !("w" in i) || !i.l || !i.w || !("trim" in i)) return r;
  if (!Ot(i) || Ot(i) && !(i != null && i.trimmed)) {
    const o = ["l", "w"], [l, a] = o.map((u) => A(i[u]));
    for (const u in i.trim)
      Zt({ item: i, field: ["trim", u], index: t, newIssues: r, min: e, max: s });
    if (r.length) return r;
    if (l && a && l > 0 && a > 0) {
      const u = A({ v: i.trim.x1 }), h = A({ v: i.trim.x2 }), y = A({ v: i.trim.y1 }), w = A({ v: i.trim.y2 }), f = (u || 0) + (h || 0), g = (y || 0) + (w || 0);
      f >= l && new X({
        item: i,
        message: qe("too_much_trim", {
          x: `${Me.x1.toUpperCase()} + ${Me.x2.toUpperCase()}`,
          y: Me.w,
          z: l
        }),
        field: [["trim", "x1"], ["trim", "x2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      }), g >= a && new X({
        item: i,
        message: qe("too_much_trim", {
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
}, zo = ({
  item: i,
  inputStockList: t,
  stockType: e,
  partTrim: s = 0,
  index: n = null,
  isWarning: r = !1
}) => {
  var a;
  const o = [];
  if (!("q" in i) || !("l" in i) || !("w" in i) || !i.l || !i.w || ("applyPartTrim" in i && i.applyPartTrim(s, e), i.issues.length)) return o;
  const l = To([i], t, e);
  if (!l) return o;
  if ((a = l == null ? void 0 : l.unusableShapes) != null && a.length) {
    const h = l.unusableShapes[0].stockMatch;
    h.fit || new X({
      item: i,
      message: "will_not_fit",
      field: [["l"], ["w"]],
      listId: Ce(i) || ft(i) ? [i.listId] : null,
      index: [n],
      type: r ? "warning" : "error",
      issues: o
    }), h.material || new X({
      item: i,
      message: "no_matching_stock_material",
      field: [["material"]],
      listId: Ce(i) || ft(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), h.thickness || new X({
      item: i,
      message: "no_matching_stock_thickness",
      field: [["t"]],
      listId: Ce(i) || ft(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), !h.width && e === "linear" && new X({
      item: i,
      message: "no_matching_stock_width",
      field: [["w"]],
      listId: Ce(i) || ft(i) ? [i.listId] : null,
      index: [n],
      issues: o
    });
  }
  return o;
}, Vo = ({ item: i = null, index: t = null }) => {
  i.machining.validateEverything(i, t);
}, We = {
  customData: Wo,
  banding: Ro,
  partTrim: Uo,
  trim: jo,
  x: Mo,
  y: Fo,
  l: _o,
  w: qo,
  t: Bo,
  q: Ho,
  orientationLock: Go,
  grain: No,
  stockMatch: zo,
  machining: Vo
};
function ts(i) {
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
function Yo(i, t, e) {
  if (!gi.includes(t) || !i.machining.corners) return 0;
  const s = Sn(i, t);
  return e * s;
}
function Sn(i, t) {
  if (!gi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function _i(i, t, e, s) {
  Object.keys(t).forEach((n) => {
    var r, o;
    n in i && ((r = t[n]) != null && r.min && A({ v: i[n] }) < A({ v: t[n].min }) ? e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${t[n].min}.`,
      fields: [n]
    }) : (o = t[n]) != null && o.max && A({ v: i[n] }) > A({ v: t[n].max }) && e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be greater than ${t[n].max}.`,
      fields: [n]
    }));
  });
}
class is {
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
    const s = A({ v: this.x });
    return t.rot ? e = t.l - A({ v: this.y }) + ("x" in t ? A({ v: t.x }) : 0) : e = s + ("x" in t ? A({ v: t.x }) : 0), e;
  }
  getYDrawPosition(t, e, s) {
    let n = t.rot ? A({ v: this.x }) : A({ v: this.y });
    return n += "y" in t ? A({ v: t.y }) : 0, e === 1 && (s ? n = A({ v: s.w }) - n : n = A({ v: t.w }) - n), n;
  }
  shouldShow(t, e) {
    return this.face === e || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || A({ v: this.depth }) >= A({ v: t.t });
  }
  getDistanceToEdge(t) {
    const e = this.x, s = this.y, n = this.diameter / 2, r = A({ v: t.getLongSide() }), o = A({ v: t.getShortSide() }), l = t.machining.corners.map((g) => g.type ? g.size : 0), a = [
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
      const q = S === 0 || S === 3, V = S < 2, z = q ? e : r - e;
      let Y = null;
      this.face === 0 ? Y = V ? s : o - s : this.face === 1 && (Y = V ? o - s : s);
      const Q = Math.sqrt(z * z + Y * Y);
      return {
        c: g,
        distance: Q
      };
    }), h = Math.min(...a.map((g) => g.distance)), y = Math.min(...u.map((g) => g.distance)), w = u.findIndex((g) => g.distance === y), f = t.machining.corners[w];
    if (f && f.type === "radius") {
      let g = w === 0 || w === 3 ? 0 : r, S = w < 2 ? 0 : o;
      const q = w < 2;
      g += w === 0 || w === 3 ? l[w] : -l[w], S += q ? l[w] : -l[w];
      const z = e - g, Y = w < 2;
      let Q;
      this.face === 0 ? Q = Y ? s : o - s : this.face === 1 && (Q = Y ? o - s : s);
      const oe = Q - S, U = Math.sqrt(z * z + oe * oe), K = l[w] - U - n;
      let m = !1;
      return f.index === 0 ? m = e <= g && Q <= S : f.index === 1 ? m = e >= g && Q <= S : f.index === 2 ? m = e >= g && Q >= S : f.index === 3 && (m = e <= g && Q >= S), m && K < h ? K : h;
    } else if (f && f.type === "bevel") {
      let g, S, q;
      f.index === 0 ? (g = 1, S = 1, q = -f.size) : f.index === 1 ? (g = 1, S = -1, q = -r + f.size) : f.index === 2 ? (g = 1, S = 1, q = -r - o + f.size) : f.index === 3 && (g = -1, S = 1, q = -o + f.size);
      const V = f.index === 0 ? 1 : -1, z = (g * e + S * s + q) / Math.sqrt(g * g + S * S) * V - n;
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
    return A({ v: this.diameter }) <= 0 && n.push({
      index: e,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), A({ v: this.depth }) < 0 && n.push({
      index: e,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && A({ v: t.t }) > 0 && A({ v: this.depth }) > A({ v: t.t }) && n.push({
      index: e,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && A({ v: this.depth }) > 0 && n.push({
      index: e,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(t) < 0 && n.push({
      index: e,
      message: "Outside of part."
    }), s && _i(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Ms {
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
    positionLimit: y = 0
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
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = u, this.minimumHoleDistance = h, this.positionLimit = y, w && this.createHoles(w);
  }
  getFace() {
    return dt[this.face];
  }
  getHoleSpacing() {
    const t = A({ v: this.hingeLength }) - A({ v: this.outerSpacing }) * 2, e = this.numHoles - 1;
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
        s = t.getLongSide() - A({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = A({ v: this.position }) + A({ v: this.outerSpacing }) + n * e;
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
        s = A({ v: this.position }) + A({ v: this.outerSpacing }) + n * e;
        break;
      case "y1":
        s = A({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = t.getShortSide() - A({ v: this.distanceFromEdge });
        break;
    }
    return s;
  }
  createHoles(t) {
    this.holes = [];
    for (let e = 0; e < this.numHoles; e++) {
      const s = new is({
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
    }), s && _i(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Fs {
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
    return this.type && A({ v: this.size }) <= 0 && n.push({
      index: e,
      message: "Corner size cannot be zero or negative"
    }), this.type && A({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
let xn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: e = [],
    corners: s = []
  } = {}) {
    c(this, "holes", []);
    c(this, "corners", []);
    c(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new Fs(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Fs({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new is(n))), e && (this.hingeHoles = e.map((n) => new Ms(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && new X({
      item: t,
      index: e,
      listId: Ce(t) ? [t.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    }), n.length && new X({
      item: t,
      index: e,
      listId: Ce(t) ? [t.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new X({
      item: t,
      index: e,
      listId: Ce(t) ? [t.listId] : null,
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
    const o = new is({
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
    const y = new Ms({
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
    return this.hingeHoles.push(y), y;
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
function ds(i) {
  var t, e, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (e = (t = i.machining) == null ? void 0 : t.holes) != null && e.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((u) => u.type && u.size) : !1;
}
function Xo(i) {
  var t, e, s, n;
  if ("machining" in i) {
    if (!ds(i)) {
      i.machining = null;
      return;
    }
    (t = i.machining.holes) != null && t.length || (i.machining.holes = null), (e = i.machining.hingeHoles) != null && e.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class fs {
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
    if (at(s)) {
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
    const n = ui(this.direction), r = s.getTrimmedDimensions(!0)[n];
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
    if (Ce(t[0])) {
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
    if (!at(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((h) => {
      const y = s.findIndex((w) => !w.inUserGroup && w.parentID === h.parentID);
      if (y === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(y, 1), io(h), h.inUserGroup = !0;
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
function Vc(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new fs(s));
  return t.length && Ko(e, t), e;
}
function Ko(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function Zo(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function Jo(i, t, e = !0) {
  const s = Zo(i), n = [];
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
const gt = ["y1", "y2", "x1", "x2"], gi = ["a", "b", "c", "d"], Pt = [...gt, ...gi], dt = ["a", "b"];
function kn(i) {
  return gi.includes(i);
}
function Qo(i) {
  return Pt.includes(i);
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
function el(i) {
  return gt.map((t) => i[t] ?? null);
}
function Ft(i) {
  if (!C(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function Yc({
  stockList: i,
  removeScores: t = !1,
  saw: e = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    e && (r.saw = e), s && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new Bt(r);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(Fi.ID);
}
function Xc({
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
    if (tl(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
      s.shapes = s.shapes.map((l) => new Tt(l));
      try {
        n = new lt(s);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      n = new Tt(s);
    if (n.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${n.issues.map((l) => l.message).join(", ")}`);
    const r = t.find((l) => {
      var a;
      return l.id === (((a = s == null ? void 0 : s.stock) == null ? void 0 : a.id) ?? (s == null ? void 0 : s.stockId));
    });
    return n.stock = r, n;
  }).sort(Fi.ID);
}
function Kc({
  cutList: i,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = new ji(e), n = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return s.stock = n, s;
  });
}
function Zc({
  segmentList: i,
  stockList: t
}) {
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return e.stock = s, new gs(e);
  });
}
function qi(i, t, e = "decimal", s = !1) {
  return C(i == null ? void 0 : i[t]) ? A({ v: i[t], nf: e, pl: s }) : null;
}
class ps {
  constructor(t, e = "decimal", s = !1) {
    c(this, "numberFormatKeys", ["l", "w", "t", "trim"]);
    c(this, "warningKeys", ["q"]);
    c(this, "issueKeys", ["l", "w", "t", "trim"]);
    c(this, "readonly");
    c(this, "id");
    c(this, "listId");
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
    t = Ft(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + rs(), ["l", "w", "t"].forEach((a) => {
      this[a] = qi(t, a, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? fi(Di(t.q)) ? null : Di(t.q) : null, this.autoAdd = C(t.autoAdd) ? t.autoAdd : !1, this.name = C(t.name) ? Wi(t.name).toUpperCase() : "", this.material = C(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((a) => {
      this.trim[a] = qi(t.trim, a, e, s);
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
    fn(this);
  }
  validate(t) {
    return this.issues = [], ["l", "w", "t"].forEach((e) => We[e]({ item: this, saw: t })), We.trim({ item: this }), ["q"].forEach((e) => We[e]({ item: this, isWarning: !0 })), this.issues = this.issues.filter((e) => e), this.issues;
  }
}
class zi {
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
      gt.map((t) => [t, 0])
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
    t = t = Ft(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + rs(), ["l", "w", "t"].forEach((h) => {
      this[h] = qi(t, h, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? fi(Di(t.q)) ? null : Di(t.q) : null, this.name = C(t.name) ? Wi(t.name).toUpperCase() : "", this.material = C(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, this.notes = t != null && t.notes ? (r = t.notes) == null ? void 0 : r.replace(/,/g, " ") : "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [];
    for (const h of Object.keys(this.trim))
      this.trim[h] = qi(t.trim, h, e, s);
    for (const h of Object.keys(this.banding))
      this.banding[h] = C((o = t == null ? void 0 : t.banding) == null ? void 0 : o[h]) ? t.banding[h] : !1;
    for (const h of Object.keys(this.bandingOptions))
      this.bandingOptions[h] = C((l = t == null ? void 0 : t.bandingOptions) == null ? void 0 : l[h]) ? t.bandingOptions[h] : {};
    for (const h of Object.keys(this.finish))
      this.finish[h] = C((a = t == null ? void 0 : t.finish) == null ? void 0 : a[h]) ? t.finish[h] : "";
    for (const h of Object.keys(this.finishOptions))
      this.finishOptions[h] = C((u = t == null ? void 0 : t.finishOptions) == null ? void 0 : u[h]) ? t.finishOptions[h] : {};
    this.orientationLock = C(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new xn(t.machining ?? {
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
    return A({ v: this.l }) > A({ v: this.w }) ? A({ v: this.l }) : A({ v: this.w });
  }
  getShortSide() {
    return A({ v: this.l }) < A({ v: this.w }) ? A({ v: this.l }) : A({ v: this.w });
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
    let e = { l: A({ v: this.l }), w: A({ v: this.w }) };
    return t && (e = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: e.l - (A({ v: this.trim.x1 }) + A({ v: this.trim.x2 })),
      w: e.w - (A({ v: this.trim.y1 }) + A({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, e) {
    if (!this.readonly)
      if (t = A({ v: t }), this.trim) {
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
    return this.issues = [], ["l", "w", "t"].forEach((l) => We[l]({ item: this, index: e, saw: o })), n = A({ v: n }), We.partTrim({ item: this, partTrim: n, index: e }), We.trim({ item: this, index: e }), We.machining({ item: this, index: e }), ["q"].forEach((l) => {
      We[l]({ item: this, index: e, isWarning: !0 });
    }), t.length && !r && We.stockMatch({ item: this, inputStockList: t, stockType: s, partTrim: n, index: e, isWarning: !0 }), this.issues = this.issues.filter((l) => l), this.issues;
  }
}
class Jt {
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
      gt.map((t) => [t, 0])
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
      this.validateRectangle(t), this.id = C(t.id) ? t.id.toString() : this.id || null, this.setParentID(), C(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = C(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = _r(Wi(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, C(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = C(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = C(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && C(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.trimmed = C(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = C(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
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
      typeof a == "string" && (a = A({ v: a })), this[l.key] = a;
    }), !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = ui(this.grain))), C(t == null ? void 0 : t.stock) && (Ot(t.stock) ? this.stock = t.stock : this.stock = new Bt(t.stock), this.stockId = this.stock.id);
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      gt.map((e) => [e, 0])
    ), !!Kt(t, !0))
      for (const e of gt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = A({ v: t[e] });
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
    if (At(this)) {
      if (t.id === this.id) return !0;
    } else {
      if (t.parentID === this.parentID) return !0;
      if (at(this) && e && this.parentID !== t.parentID) return !1;
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
    const s = new Jt({
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
    return at(this);
  }
  isSegment() {
    return sl(this);
  }
  isStock() {
    return Ot(this);
  }
  isGroup() {
    return At(this);
  }
  isUserGroup() {
    return In(this);
  }
}
class Vi extends Jt {
  //used by evo
  constructor(e) {
    var s, n;
    super(e);
    // type: StockType;
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((s = e == null ? void 0 : e.saw) == null ? void 0 : s.stockType) || new X({ item: this, field: [["type"]], message: `Container type ${((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) ?? "N/A"} is not valid` }), this.setSaw(e), this.cutType) {
      case "beam":
        (!C(this.t) || this.t <= 0) && new X({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e) {
    var s, n, r, o;
    if (C(e) || (this.saw = new Lt(null)), C(e == null ? void 0 : e.saw)) {
      if (!((n = e == null ? void 0 : e.saw) != null && n.cutType)) {
        const { cutType: l, cutPreference: a } = ts(e.saw.cutPreference);
        e.saw.cutType = l, e.saw.cutPreference = a;
      }
    } else {
      e.saw = {};
      const { cutType: l, cutPreference: a } = ts(e.cutPreference);
      e.saw.cutType = l, e.saw.cutPreference = a, C(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), C((s = e == null ? void 0 : e.blade) == null ? void 0 : s.width) && (e.saw.bladeWidth = e.blade.width), C(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), C(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), C(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
    }
    try {
      C(e == null ? void 0 : e.saw) && (nl(e.saw) ? this.saw = e.saw : this.saw = new Lt(e.saw)), (o = (r = this.saw) == null ? void 0 : r.issues) != null && o.length && this.issues.push(...this.saw.issues);
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
    return Ot(this) ? this : this != null && this.stock ? this.stock : null;
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
    switch (t = Ft(t), this.options = ri({}, t == null ? void 0 : t.options, {
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
    switch (C(t == null ? void 0 : t.bladeWidth) ? typeof t.bladeWidth == "string" ? this.bladeWidth = A({ v: t.bladeWidth }) : this.bladeWidth = t.bladeWidth : this.bladeWidth = 0, (fi(this.bladeWidth) || this.bladeWidth < 0) && (new X({ item: this, field: [["bladeWidth"]], message: `Saw blade width: ${this.bladeWidth ?? "N/A"} is not valid` }), this.bladeWidth = 0), this.stockType) {
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
class Bt extends Vi {
  constructor(e) {
    var s;
    e = Ft(e), e.preventAutoRotation = ((s = e == null ? void 0 : e.saw) == null ? void 0 : s.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
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
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = Ot(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
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
    return Ot(this.stack) || typeof this.stack == "string";
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = parseInt(s.pop()), e++), s.push(e.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Bt(r);
  }
}
class Cn extends Jt {
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
function Jc({
  offcuts: i,
  stockList: t,
  preventAutoRotation: e = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    const n = t.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, e && (s.preventAutoRotation = !0), new Cn(s);
  });
}
class Tt extends Jt {
  constructor(e) {
    e = Ft(e);
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
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = C(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, C(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = C(e == null ? void 0 : e.machining) ? new xn(e.machining) : null), this.added = C(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = C(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = C(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = C(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = C(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = C(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = C(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
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
    return (e = this.guillotineData) != null && e.myStripParent && (at(this.guillotineData.myStripParent) || At(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
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
    e = Ft(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Pt.map((s) => [s, !1])
    ), !!Kt(e, !0))
      for (const s of Pt)
        this._banding[s] = C(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return el(this._banding);
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
    ), !!Kt(e, !0))
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
    }) && (this._finish = null), Xo(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = ui(e.grain)), gn([
      () => Ti(this.isInsideStock(e), `shape ${this.id} is not inside stock`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, At(this) && this.shapes.forEach((e) => e.removeFromStock());
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
    this.removeFromStock(), this.resetPosition(), Xt(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, e || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
  }
  round() {
    return {
      x: Math.round(this.x),
      y: Math.round(this.y),
      l: Math.round(this.l),
      w: Math.round(this.w)
    };
  }
  getBandingLength(e) {
    return !Qo(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : kn(e) ? Sn(this, e) : 0;
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
      return s.push(new ji({
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
    Xt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(e, s = null) {
    return Ui(this, e, s);
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = s.pop(), e++), s.push(e);
    const n = s.join("."), r = this.stock;
    this.stock = null;
    const o = structuredClone(this);
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new Tt(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const e = this.cloneGuillotineData();
    return e.myStripParent = il(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
class gs extends Vi {
  constructor(e) {
    var t = (...ah) => (super(...ah), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
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
class lt extends Tt {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = Ft(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
      throw new Error("attempting to create a group with no shapes");
    e.preventAutoRotation = !0;
    super(e);
    c(this, "shapes");
    c(this, "direction");
    c(this, "container");
    //can be set after initial creation
    c(this, "positions");
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
    const s = so(this.direction);
    let n = 0;
    for (const l of this.shapes)
      this.positions.push({
        shape: l.id,
        [s]: e,
        [no(s)]: 0,
        rot: l.rot.valueOf()
      }), l.inGroup = !0, e += n === this.shapes.length - 1 ? l[this.direction] : l[this.direction] + l.getMinSpacing(this.container), n++;
    this[this.direction] = e;
    const r = ui(this.direction), o = this.shapes.reduce((l, a) => a[r] > l ? a[r] : l, 0);
    if (this[r] = o, pn()) {
      const l = this.shapes.slice(0, -1).reduce((h, y) => h + y.getMinSpacing(this.container), 0), u = this.shapes.reduce((h, y) => h + y[this.direction], 0) + l;
      gn([
        () => Ti(ue.equalTo(u, this[this.direction]), "group dimension is incorrect in direction").to.be.true,
        () => Ti(e, "currentPosition is incorrect in direction").to.equal(this[this.direction]),
        () => Ti(o, "group dimension in other direction is not correct").to.equal(this[r])
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
      if (!es(s, n.rot, e)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const e = ui(this.direction);
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
      if (n.x = this.x + r.x, n.y = this.y + r.y, !es(n, r.rot, e)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(e) {
    this.orientateShapes(e), to(this, e);
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
function Qc(i) {
  if (!i.length) return "n";
  const t = i.map((e) => e.grain).filter((e) => e);
  return t.length ? t.every((e) => e === "l") ? "l" : t.every((e) => e === "w") ? "w" : t.some((e) => e === "l" || e === "w") ? "y" : "n" : "n";
}
function tl(i) {
  return i.shapes !== void 0;
}
function At(i) {
  return i instanceof lt && i.type !== "user";
}
function In(i) {
  return i instanceof lt && i.type === "user";
}
function Mt(i) {
  return i instanceof fs;
}
function ft(i) {
  return i instanceof ps;
}
function Ce(i) {
  return i instanceof zi;
}
function Ot(i) {
  return i instanceof Bt;
}
function ms(i) {
  return i instanceof Vi;
}
function at(i) {
  return i instanceof Tt && !(i instanceof lt);
}
function il(i) {
  return i instanceof Tt || i instanceof lt;
}
function sl(i) {
  return i instanceof gs;
}
function nl(i) {
  return i instanceof Lt;
}
function rl(i) {
  return i instanceof lt ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof fs ? "inputUserGroup" : i instanceof ps ? "inputStock" : i instanceof zi ? "inputShape" : i instanceof Bt ? "stock" : i instanceof Vi ? "container" : i instanceof Tt && !(i instanceof lt) ? "shape" : i instanceof gs ? "segment" : i instanceof Cn ? "offcut" : i instanceof Lt ? "saw" : i instanceof Jt ? "rectangle" : null;
}
function _s(i, t) {
  return sr(i, t);
}
function Et(i, t) {
  return Yt(i, t);
}
function ol(i, t, e) {
  nr(i, t, e);
}
function C(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function Kt(i, t = !1) {
  if (!C(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => C(s) && s) : e.some((s) => C(s));
}
function eh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return ft(e) && e.autoAdd ? s = 1 : s = C(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function th(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = ll(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function ll(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function al() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function ss(i = 0, t, e = null, s = null, n = null) {
  if (!Ce(e) && !Mt || s === "stock") return !1;
  let r, o;
  if (Ce(e) ? r = e.orientationLock : Mt(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || Mt(e))
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
function qs(i, t, e = null, s = null, n = null) {
  if (!Ce(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? ss(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function ul(i) {
  i.banding && (i.banding = Bi(i.banding, "cc")), i.trim && (i.trim = Bi(i.trim, "cc"));
}
function ih(i, t = 0) {
  return at(i) || Ce(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && ul(i)), i;
}
function Bi(i, t = "cc", e = {
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
const { addNotice: ot } = Ni(), {
  inputs: Ie,
  totalInputShapes: cl,
  totalInputStock: hl,
  createStockList: dl,
  createShapeList: fl,
  validateInputShapes: pl,
  validateInputStock: $n,
  removeShape: Bs,
  removeStock: Hs
} = rn(), gl = {
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
}, ml = () => {
  var i, t;
  if ((i = Ie == null ? void 0 : Ie.inputStock) != null && i.value) {
    for (let e = Ie.inputStock.value.length - 1; e >= 0; e--) {
      const s = Ie.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ie.inputStock.value.length > 1 || e !== 0) && Hs(s.listId);
    }
    if ((t = Ie == null ? void 0 : Ie.inputShapes) != null && t.value)
      for (let e = Ie.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Ie.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ie.inputShapes.value.length > 1 || e !== 0) && Bs(s.listId);
      }
  }
}, yl = (i, t = !1) => {
  var s, n;
  if (!t) return [];
  const e = [];
  if (!((s = Ie == null ? void 0 : Ie.inputShapes) != null && s.value)) return e;
  for (let r = Ie.inputShapes.value.length - 1; r >= 0; r--) {
    const o = Ie.inputShapes.value[r];
    if (!o) continue;
    if (!C(o.material)) {
      e.push(new X({
        item: o,
        message: "no_material",
        listId: [o.listId]
      }));
      continue;
    }
    const l = i.items.find((a) => a._id === o.material);
    (n = l == null ? void 0 : l.t) != null && n.length && (o.t ? l.t.includes(o.t) || e.push(new X({
      item: o,
      message: "invalid_thickness",
      listId: [o.listId]
    })) : e.push(new X({
      item: o,
      message: "no_thickness",
      listId: [o.listId]
    })));
  }
  return e;
}, Pn = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...gl,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, vl = (i = {}) => {
  const t = Pn(i), e = t.t;
  ml();
  const s = [];
  t.useInventory || s.push(...$n(i == null ? void 0 : i.sawData)), s.push(...pl({
    saw: t.sawData,
    partTrim: A({ v: t.partTrim }),
    useInventory: t.useInventory
  }));
  const n = It(s);
  return n.length > 0 ? (console.warn("Validation errors:", JSON.parse(JSON.stringify(n))), ot({
    type: "error",
    message: e("inputs_issue", { x: "part" }),
    additional: n.map((r) => e(r.message))
  }), !1) : !0;
};
async function bl(i) {
  var s, n;
  const t = Pn(i), e = t.t;
  try {
    if (!vl(t))
      return { valid: !1 };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (cl.value > t.maxShapes || hl.value > t.maxStock))
      return t.onLimit(), { valid: !1 };
    if (t.useInventory) {
      const f = yl(t.materialStore, !0), g = It(f);
      if (g.length > 0)
        return ot({
          type: "error",
          message: e("inputs_issue", { x: "material" }),
          additional: g.map((S) => e(S.message))
        }), { valid: !1 };
    } else {
      const f = $n(), g = It(f);
      if (g.length > 0)
        return ot({
          type: "error",
          message: e("inputs_issue", { x: "stock" }),
          additional: g.map((S) => e(S.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new Lt(t.selectedSaw) : new Lt(t.sawData), o = It(r.issues);
    if (o.length > 0)
      return ot({
        type: "error",
        message: e("inputs_issue", { x: "saw" }),
        additional: o.map((f) => e(f.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await dl(r), u = It(a);
    if (u.length > 0)
      return ot({
        type: "error",
        message: e("inputs_issue", { x: "stock" }),
        additional: u.map((f) => e(f.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return ot({
        type: "error",
        message: e("no_stock")
      }), { valid: !1 };
    const { shapeList: h, issues: y } = await fl({
      orientationModel: t.orientationModel
    }), w = It(y);
    if (w.length > 0)
      return ot({
        type: "error",
        message: e("inputs_issue", { x: "part" }),
        additional: w.map((f) => e(f.message))
      }), { valid: !1 };
    if (!(h != null && h.length))
      return ot({
        type: "error",
        message: e("no_parts_list")
      }), { valid: !1 };
    if (((n = (s = Ie.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      Ie.userGroups.value.forEach((S) => S.populateParentID(Ie.inputShapes.value));
      const f = Jo(
        Ie.userGroups.value,
        Ie.inputShapes.value
      ), g = It(f);
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
      message: e("unexpected_error"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
  }
}
function wl(i) {
  return !i || !Kt(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function ys(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function vs(i) {
  return `${i}Options`;
}
function Sl(i, t, e) {
  const s = vs(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function xl(i, t, e = !0) {
  if (!ys(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    bs(i, t, r, e);
  e && Ln(i, t, "all");
}
function bs(i, t, e, s = !0) {
  s && Ln(i, t, e), e !== "all" && ys(i, t) && (i[t][e] = !1);
}
function Ln(i, t, e) {
  if (!ys(i, t, "Options")) return;
  const n = i[`${t}Options`][e];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function ws(i, t, e, s, n, r) {
  var h;
  const o = t + "Options";
  if (!((h = i == null ? void 0 : i[o]) != null && h[e]) || !(s in i[o][e])) return;
  ci(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((y) => y);
  if (!Array.isArray(a)) return;
  const u = Hi(i, t, e, r);
  ci(i, t, e, !!_e(u));
}
function Tn(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Hi(i, t, "all", r), u = i[o][e], h = Object.values(u || {}).filter((y) => y);
  for (const y of l)
    y !== "all" && (n.includes(y) || (ws(i, t, y, e, s, r), Array.isArray(h) || ci(i, t, y, !1), ci(i, t, y, !!_e(a))));
}
function ci(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = vs(t), r = wl((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
  s ? i[t][e] = r || !0 : i[t][e] = !1;
}
function Hi(i, t, e, s) {
  var a;
  const n = t + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[e])) return !1;
  const r = i[n][e], o = Object.values(r || {}).filter((u) => u);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && kn(e) && _e(l) ? Yo(i, e, l) / 1e3 : l;
}
function sh(i) {
  i != null && i.type && delete i.type, kl.call(this, i);
}
function kl(i) {
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
function Cl(i) {
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
const Il = { id: "mini-stock-nav" }, $l = ["onMousedown"], Pl = { class: "id" }, Ll = /* @__PURE__ */ Oe({
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
    return (r, o) => (v(), k("div", Il, [
      (v(!0), k(we, null, Ae(e.stockList, (l, a) => (v(), k("button", {
        key: a,
        class: ke(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: xe({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        E("div", Pl, se(a + 1), 1),
        os(E("div", { class: "stack legibility" }, se(l.stack), 513), [
          [ls, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, $l))), 128))
    ]));
  }
}), Qt = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, Tl = {
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
}, Al = { id: "spinner" }, Ol = ["width", "height"], Dl = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function El(i, t, e, s, n, r) {
  return v(), k("div", Al, [
    e.complete ? G("", !0) : (v(), k("svg", {
      key: 0,
      class: "loading",
      style: xe({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      cr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, Ol)),
    e.complete ? (v(), k("svg", {
      key: 1,
      class: "complete",
      style: xe({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      E("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : G("", !0),
    e.showNumber ? (v(), k("div", Dl, se(e.number), 1)) : G("", !0)
  ]);
}
const Gs = /* @__PURE__ */ Qt(Tl, [["render", El]]);
function Rl(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function Ml(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function Fl(i, t, e, s, n = []) {
  const r = Ml(i, e, s);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((h) => h.id)), u = o.map((h) => h.id).filter((h) => !a.has(h)).map((h) => `'${h}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return n.length && (o.sort((a, u) => {
    const h = n.indexOf(a.id), y = n.indexOf(u.id);
    return h === -1 ? 1 : y === -1 ? -1 : h - y;
  }), console.log(o)), o;
}
const _l = ["id"], ql = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Bl = /* @__PURE__ */ Oe({
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
    const e = i, s = t, n = N(0), r = N(!1), o = (m, L, j, R) => {
      if (!Ce(j) || L === 0)
        return m;
      const M = l();
      return L === 1 || L === 2 && R !== "n" && m ? M : m;
    }, l = (m) => {
      const L = { ...e, ...m };
      if (!L.rectangle || !Ce(L.rectangle)) return "";
      let j = "";
      switch (L.orientationModel) {
        case 0:
          j = Y.value;
          break;
        case 1:
          L.stockGrain === "y" || L.stockGrain === "n" ? j = L.rectangle.l >= L.rectangle.w ? "l" : "w" : L.rectangle.l >= L.rectangle.w ? j = L.stockGrain : j = j = L.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          j = L.rectangle.l >= L.rectangle.w ? "l" : "w";
          break;
      }
      return j;
    }, a = () => {
      if (e.disabled || V.value.length <= 1) return;
      let m = null;
      [1, 2].includes(e.orientationModel) ? m = y() : m = h(), n.value = m;
    }, u = (m) => {
      const L = V.value.findIndex((j) => j === m);
      return L === -1 ? 0 : L;
    }, h = () => {
      let m = 0;
      return m = u(Y.value) + 1, m > V.value.length - 1 && (m = 0), m;
    }, y = () => {
      let m = 0;
      if (Y.value)
        m = V.value.findIndex((L) => L === "");
      else {
        const L = l();
        m = V.value.findIndex((j) => j === L);
      }
      return m;
    }, w = (m) => {
      s("updateOrientation", m);
    }, f = () => {
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
        S(m);
        return;
      }
      if (n.value = u(Y.value), !!Ce(e.rectangle)) {
        if (e.orientationModel === 1) {
          const L = oe.value ? l() : Y.value;
          S(L);
          return;
        }
        if (e.orientationModel === 2) {
          let L;
          oe.value ? L = e.stockGrain !== "n" ? l() : "" : L = Y.value, S(L);
        }
      }
    }, S = (m) => {
      n.value = u(m), w(m);
    }, q = () => {
      const m = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], L = ["l", "w", "y", "n"], j = [0, 1, 2], R = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, M = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, le = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, de = [];
      m.forEach((I) => {
        L.forEach((B) => {
          j.forEach((H) => {
            const ie = new zi({
              l: I.l,
              w: I.w
            }), ge = l({
              orientationModel: H,
              rectangle: ie,
              stockGrain: B
            });
            let he = "";
            ie.l === ie.w ? he = "l === w" : ie.l > ie.w ? he = "l >= w" : he = "w > l";
            const Ne = ["l", "w", "y"].includes(B) ? R : M;
            de.push({
              Model: H,
              "Stock grain": B,
              "Stock grain description": le[B],
              Dimensions: he,
              "Orientation lock": ge || "N/A",
              "Orientation Lock description": Ne[ge] || "N/A"
            });
          });
        });
      }), de.sort((I, B) => {
        if (I.Model !== B.Model)
          return I.Model - B.Model;
        if (I["Stock grain"] !== B["Stock grain"])
          return I["Stock grain"].localeCompare(B["Stock grain"]);
        const H = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return H[I.Dimensions] - H[B.Dimensions];
      }), console.table(de);
    }, V = J(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Mt(e.rectangle)) return ["l", "w"];
      let m = ["", "l", "w"];
      return e.rectangle.multiEdit && (m = [" ", "", "l", "w"]), z.value && (m = m.filter((L) => L !== "w")), m;
    }), z = J(() => {
      var m, L, j, R;
      return Ce(e.rectangle) || ft(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((m = e.rectangle) != null && m.l) && ((L = e.rectangle) != null && L.w) ? ((j = e.rectangle) == null ? void 0 : j.l) === ((R = e.rectangle) == null ? void 0 : R.w) : !1;
    }), Y = J(() => {
      let m = "";
      return Mt(e.rectangle) ? m = e.rectangle.direction : Ce(e.rectangle) ? m = e.rectangle.orientationLock ?? "" : ft(e.rectangle) && (m = e.rectangle.grain ?? ""), m;
    }), Q = J(() => Mt(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), oe = J(() => !Q.value.l && !Q.value.w), U = J(() => ss(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), K = J(() => {
      var R;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (ft(e.rectangle) || e.rectangleType === "stock")
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
      let j = "default";
      return Ce(e.rectangle) || e.rectangleType === "shape" ? j = f() : Mt(e.rectangle) && (j = e.rectangle.direction || "default"), ((R = m[L]) == null ? void 0 : R[j]) || m[L].default;
    });
    return $e(n, (m, L) => {
      r.value && L !== void 0 && w(V.value[m]);
    }, { immediate: !1 }), $e(Q, (m, L) => {
      if (!e.rectangle || e.orientationModel === 0 || !Ce(e.rectangle) || Ce(e.rectangle) && (e.orientationModel === 2 && L.l && L.w && !Y.value || e.stockGrain === "n" && !Y.value))
        return;
      const j = l();
      Y.value !== j && w(j);
    }, { immediate: !1 }), $e(() => e.stockGrain, (m, L) => {
      m !== L && g();
    }, { immediate: !0 }), ut(() => {
      g(), Ye(() => {
        r.value = !0, e.debug && q();
      });
    }), (m, L) => (v(), k("div", {
      id: m.id,
      class: ke(["orientation-button", { rot: U.value, square: z.value, disabled: m.disabled, [K.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: xe({
        backgroundColor: m.buttonBackground
      }),
      onClick: a
    }, [
      K.value === "delete" ? (v(), k("svg", ql, L[0] || (L[0] = [
        E("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : G("", !0),
      K.value === "freeRotation" ? (v(), k("svg", {
        key: 1,
        class: "arrow",
        style: xe({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[1] || (L[1] = [
        E("g", null, [
          E("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          E("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          E("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          E("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : G("", !0),
      K.value === "leftRight" ? (v(), k("svg", {
        key: 2,
        class: "arrow",
        style: xe({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[2] || (L[2] = [
        E("g", null, [
          E("path", { d: "m5.408 19.408h61.095" }),
          E("g", null, [
            E("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            E("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      K.value === "topBottom" ? (v(), k("svg", {
        key: 3,
        class: "arrow",
        style: xe({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[3] || (L[3] = [
        E("g", null, [
          E("path", { d: "m19.408 66.503v-61.095" }),
          E("g", null, [
            E("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            E("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      K.value === "grainLeftRight" ? (v(), k("svg", {
        key: 4,
        class: "grain",
        style: xe({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[4] || (L[4] = [
        E("g", null, [
          E("path", { d: "m3 3h99.887" }),
          E("path", { d: "m3.113 32h99.887" }),
          E("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : G("", !0),
      K.value === "grainTopBottom" ? (v(), k("svg", {
        key: 5,
        class: "grain",
        style: xe({
          stroke: m.iconColor ? m.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, L[5] || (L[5] = [
        E("g", null, [
          E("path", { d: "m61 3v99.887" }),
          E("path", { d: "m32 3.113v99.887" }),
          E("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : G("", !0)
    ], 14, _l));
  }
}), Hl = ["id"], Gl = /* @__PURE__ */ Oe({
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
    const e = i, s = t, n = N({
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
      const a = qs(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Bi(l, a, {
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
      const a = qs(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Bi(l, a, {
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
    return ut(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), as(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (v(), k("div", {
      id: l.id,
      class: ke(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      E("div", {
        class: ke(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        E("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, Hl));
  }
}), Nl = (i) => {
  i = i.replace(/['"]+/g, "");
  try {
    return new ai(i).valueOf();
  } catch {
    return null;
  }
};
function Wl({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = N({
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
            const f = /^-?\d*\s*-?\d*\/?-?\d*$/.test(a);
            return {
              value: a,
              valid: f
            };
          }
          const u = Nl(a);
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
        const l = o.target, a = o.type === "input" && ["integer", "float"].includes(i.type) || i.type === "unitDependent" && i.numberFormat === "decimal";
        s.value.isTyping = !a;
        const u = n(l.value, !a);
        t("validation", u, i.id), t("input", l.value), a && u.valid && t("update:value", u.value);
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
function Ul({
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
function jl({
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
const zl = ["id", "value", "inputmode", "type", "placeholder", "disabled", "readonly", "required", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], Vl = /* @__PURE__ */ Oe({
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
    const e = i, s = t, n = N(!0), r = N(null), {
      handleInput: o,
      handleFocus: l,
      handleBlur: a,
      handleKeydown: u,
      handleCompositionStart: h,
      handleCompositionEnd: y,
      handlePaste: w
    } = Wl({
      props: e,
      emit: s,
      isMounted: n
    });
    return as(() => {
      n.value = !1;
    }), (f, g) => (v(), k("input", oi(f.$attrs, {
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
      (...S) => x(o) && x(o)(...S)),
      onFocus: g[1] || (g[1] = //@ts-ignore
      (...S) => x(l) && x(l)(...S)),
      onBlur: g[2] || (g[2] = //@ts-ignore
      (...S) => x(a) && x(a)(...S)),
      onKeydown: g[3] || (g[3] = //@ts-ignore
      (...S) => x(u) && x(u)(...S)),
      onCompositionstart: g[4] || (g[4] = //@ts-ignore
      (...S) => x(h) && x(h)(...S)),
      onCompositionend: g[5] || (g[5] = //@ts-ignore
      (...S) => x(y) && x(y)(...S)),
      onPaste: g[6] || (g[6] = //@ts-ignore
      (...S) => x(w) && x(w)(...S))
    }), null, 16, zl));
  }
}), Yl = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Xl = /* @__PURE__ */ Oe({
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
    const e = i, s = t, n = N(!0), r = N(null), {
      handleCheckboxChange: o,
      handleFocus: l,
      handleBlur: a
    } = jl({
      props: e,
      emit: s,
      isMounted: n
    });
    return ut(() => {
      e.focus && r.value && r.value.focus();
    }), (u, h) => (v(), k("input", {
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
      (...y) => x(o) && x(o)(...y)),
      onFocus: h[1] || (h[1] = //@ts-ignore
      (...y) => x(l) && x(l)(...y)),
      onBlur: h[2] || (h[2] = //@ts-ignore
      (...y) => x(a) && x(a)(...y))
    }, null, 40, Yl));
  }
}), Kl = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], Zl = ["disabled", "selected"], Jl = {
  key: 0,
  value: " "
}, Ql = ["hidden", "value", "disabled"], ea = /* @__PURE__ */ Oe({
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
    const e = i, s = t, n = N(!0), r = N(null), o = J(() => e.options.map((h) => {
      var y, w, f;
      return {
        value: h.value,
        label: ((y = h.label) == null ? void 0 : y.toUpperCase()) ?? ((f = (w = h.value) == null ? void 0 : w.toString()) == null ? void 0 : f.toUpperCase()),
        hidden: h.hidden ?? !1,
        disabled: h.disabled ?? !1
      };
    })), {
      handleSelectChange: l,
      handleFocus: a,
      handleBlur: u
    } = Ul({
      props: e,
      emit: s,
      isMounted: n
    });
    return (h, y) => {
      var w, f, g, S;
      return v(), k("select", oi(h.$attrs, {
        id: e.id,
        ref_key: "inputRef",
        ref: r,
        value: e.value,
        disabled: e.readonly || e.disabled,
        required: e.required,
        "aria-label": e.ariaLabel,
        "aria-invalid": !!e.issue,
        "aria-describedby": e.errorId,
        onChange: y[0] || (y[0] = //@ts-ignore
        (...q) => x(l) && x(l)(...q)),
        onFocus: y[1] || (y[1] = //@ts-ignore
        (...q) => x(a) && x(a)(...q)),
        onBlur: y[2] || (y[2] = //@ts-ignore
        (...q) => x(u) && x(u)(...q))
      }), [
        E("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, se(((f = (w = e.text) == null ? void 0 : w.select) == null ? void 0 : f.toUpperCase()) ?? "SELECT"), 9, Zl),
        e.multiEdit ? (v(), k("option", Jl, se(((S = (g = e.text) == null ? void 0 : g.delete) == null ? void 0 : S.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
        (v(!0), k(we, null, Ae(o.value, (q) => (v(), k("option", {
          key: q.value,
          hidden: q.hidden,
          value: q.value,
          disabled: q.disabled
        }, se(q.label), 9, Ql))), 128))
      ], 16, Kl);
    };
  }
}), ta = ["for"], ia = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, Ns = /* @__PURE__ */ Oe({
  __name: "InputLabel",
  props: {
    id: {},
    label: {},
    required: { type: Boolean }
  },
  setup(i) {
    return (t, e) => (v(), k("label", {
      for: t.id,
      class: "input-label"
    }, [
      Vt(se(t.label) + " ", 1),
      t.required ? (v(), k("span", ia, "*")) : G("", !0)
    ], 8, ta));
  }
}), sa = ["data-field-id"], na = ["disabled", "selected"], ra = {
  key: 0,
  value: " "
}, oa = ["hidden", "value", "disabled"], pt = /* @__PURE__ */ Oe({
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
    const e = t, s = i, n = N(null), r = N(null), o = N(!0), l = N(s.numberFormat), a = J(() => s.custom ? "custom-" + s.id : s.id), u = J(() => `${a.value}-error`), h = J(() => s.label || s.placeholder), y = J(() => K(s.type, s.numberFormat)), w = J(() => m(s.type, s.numberFormat)), f = J(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), g = J(() => {
      if (s.type !== "unitDependent" || !s.value) return s.value;
      try {
        return A({ v: s.value, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), S = J(() => s.options.map((R) => {
      var M, le;
      return {
        value: R.value,
        label: ((M = R.label) == null ? void 0 : M.toUpperCase()) || ((le = R.value) == null ? void 0 : le.toString().toUpperCase()),
        hidden: R.hidden || !1,
        disabled: R.disabled || !1
      };
    })), q = J(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), V = J(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": h.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), z = J(() => ({
      ...V.value,
      type: s.type,
      inputMode: w.value,
      inputType: y.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      numberFormat: s.numberFormat
    })), Y = J(() => ({
      ...V.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), Q = J(() => ({
      ...V.value,
      options: S.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      text: s.text
    })), oe = (R) => {
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
    }, L = (R) => {
      e("update:value", R);
    }, j = (R, M) => {
      R.valid === void 0 || R.valid === !0 ? (o.value = !0, e("validation", n.value, R)) : R.valid === !1 && R.message && (o.value = !1, console.warn(`Field validation error for field ${M} - ${R.message}`), e("validation", n.value, R));
    };
    return $e(() => s.numberFormat, (R, M) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && R !== M && s.value)
          try {
            const le = A({ v: s.value, nf: R });
            e("update:value", le);
          } catch {
            e("update:value", R === "decimal" ? 0 : "0");
          }
        l.value = R;
      }
    }), (R, M) => (v(), k("div", {
      ref_key: "fieldRef",
      ref: n,
      class: ke(["input-wrapper", q.value]),
      "data-field-id": a.value
    }, [
      U("first") ? (v(), pe(Ns, {
        key: 0,
        id: a.value,
        label: R.label,
        required: R.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      f.value ? (v(), pe(Vl, oi({
        key: 1,
        ref: oe
      }, z.value, {
        "input-type": y.value,
        "input-mode": w.value,
        value: g.value,
        onValidation: j,
        "onUpdate:value": L
      }), null, 16, ["input-type", "input-mode", "value"])) : R.type === "checkbox" ? (v(), pe(Xl, oi({
        key: 2,
        ref: oe,
        type: "checkbox"
      }, Y.value, {
        checked: R.value === R.trueValue,
        "onUpdate:value": M[0] || (M[0] = (le) => e("update:value", le))
      }), null, 16, ["checked"])) : R.type === "select" ? (v(), pe(ea, oi({
        key: 3,
        ref: oe
      }, Q.value, {
        "onUpdate:value": M[1] || (M[1] = (le) => e("update:value", le))
      }), {
        default: us(() => {
          var le, de, I, B;
          return [
            E("option", {
              value: "",
              disabled: R.selectFirstOptionDisabled,
              selected: !R.value
            }, se(((de = (le = R.text) == null ? void 0 : le.select) == null ? void 0 : de.toUpperCase()) ?? "SELECT"), 9, na),
            R.multiEdit ? (v(), k("option", ra, se(((B = (I = R.text) == null ? void 0 : I.delete) == null ? void 0 : B.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
            (v(!0), k(we, null, Ae(S.value, (H) => (v(), k("option", {
              key: H.value,
              hidden: H.hidden,
              value: H.value,
              disabled: H.disabled
            }, se(H.label), 9, oa))), 128))
          ];
        }),
        _: 1
      }, 16)) : G("", !0),
      U("last") ? (v(), pe(Ns, {
        key: 4,
        id: a.value,
        label: R.label,
        required: R.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      hr(R.$slots, "default")
    ], 10, sa));
  }
}), la = {
  key: 0,
  class: "inputs"
}, aa = { class: "label" }, ua = { class: "label" }, ca = { class: "label" }, ha = ["onClick"], da = { class: "price" }, fa = ["aria-label"], ns = /* @__PURE__ */ Oe({
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
    const e = i, s = t, { t: n } = Gi(["main", "errors"]), r = N(!1), o = J(() => e.extraType + "Options"), l = J(() => {
      var S;
      if (!((S = e.allOptions) != null && S.length)) return "auto";
      const f = e.allOptions.length;
      return f ? `repeat(${f + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), a = (f, g) => {
      s("update-all", e.shape, e.extraType, f, g);
    }, u = (f, g, S) => {
      s("set", e.shape, e.extraType, f, g, S);
    }, h = (f, g, S, q, V) => {
      var oe;
      if (!f) return [];
      const z = (oe = g == null ? void 0 : g[S]) == null ? void 0 : oe[q];
      if (!z)
        return console.error(`ExtrasInputs: cannot find pricing options for ${S} > ${q}`), [];
      const Y = Object.values(z);
      if (!Y.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${S} > ${q}`), [];
      const Q = Y.filter((U) => typeof U == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(f, Q, V) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, y = (f) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const g = e.getPrice(e.shape, e.extraType, f);
      return g ? e.formatPrice(g) : "";
    }, w = () => {
      const f = [];
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
      ), f.length && (r.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + f.map((g) => g.message).join(" ")));
    };
    return ut(() => w()), (f, g) => {
      var q, V, z, Y, Q, oe, U, K;
      const S = _t("font-awesome-icon");
      return r.value ? G("", !0) : (v(), k("div", {
        key: 0,
        class: ke(["extras group", [f.extraType]]),
        style: xe({ "grid-column-end": "span " + f.partColumns })
      }, [
        f.allOptions.length === 1 && f.allOptions[0].length === 1 ? (v(), k("div", la, [
          E("div", aa, se((V = (q = f.allOptions) == null ? void 0 : q[0]) == null ? void 0 : V[0]), 1),
          E("div", null, [
            (z = f.shape) != null && z[o.value] && "all" in f.shape[o.value] ? (v(), pe(pt, {
              key: 0,
              id: `${f.extraType}-all-${f.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: x(jt)(x(n)("all")),
              "true-value": (Q = (Y = f.allOptions) == null ? void 0 : Y[0]) == null ? void 0 : Q[0],
              "false-value": "",
              value: (U = f.shape[o.value].all) == null ? void 0 : U[(oe = f.labels) == null ? void 0 : oe[0]],
              "onUpdate:value": g[0] || (g[0] = (m) => {
                var L, j;
                u("all", (L = f.labels) == null ? void 0 : L[0], m), a((j = f.labels) == null ? void 0 : j[0], m);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : G("", !0)
          ]),
          (v(!0), k(we, null, Ae(f.extraKeys, (m) => {
            var L, j, R, M, le, de;
            return v(), k("div", { key: m }, [
              (L = f.labels) != null && L[0] && ((R = (j = f.shape) == null ? void 0 : j[o.value]) != null && R[m]) && f.labels[0] in f.shape[o.value][m] ? (v(), pe(pt, {
                key: 0,
                id: `${f.extraType}-${m}-${f.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: x(jt)(x(n)(((M = f.userFriendlyFieldMap) == null ? void 0 : M[m]) || m)),
                "true-value": (de = (le = f.allOptions) == null ? void 0 : le[0]) == null ? void 0 : de[0],
                "false-value": "",
                value: f.shape[o.value][m][f.labels[0]],
                "onUpdate:value": (I) => u(m, f.labels[0], I)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : G("", !0)
            ]);
          }), 128))
        ])) : (v(), k("div", {
          key: 1,
          class: "grid inputs",
          style: xe({
            "grid-template-columns": l.value
          })
        }, [
          (K = f.shape) != null && K[o.value] && "all" in f.shape[o.value] ? (v(), k(we, { key: 0 }, [
            E("div", ua, se(x(jt)(x(n)("all"))), 1),
            (v(!0), k(we, null, Ae(f.allOptions, (m, L) => {
              var j, R;
              return v(), pe(pt, {
                id: `${f.extraType}-all-${f.labels[L]}-${L}-${f.shapeIndex}`,
                key: `${f.extraType}-all-${f.labels[L]}-${L}-${f.shapeIndex}`,
                type: "select",
                disabled: h(f.pricing, f.shape, o.value, "all", L).length === 0,
                options: h(f.pricing, f.shape, o.value, "all", L).map((M) => ({ value: M, label: M })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (R = f.shape[o.value].all) == null ? void 0 : R[(j = f.labels) == null ? void 0 : j[L]],
                "onUpdate:value": (M) => {
                  var le, de;
                  u("all", (le = f.labels) == null ? void 0 : le[L], M), a((de = f.labels) == null ? void 0 : de[L], M);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            g[2] || (g[2] = E("div", null, null, -1)),
            g[3] || (g[3] = E("div", null, null, -1))
          ], 64)) : G("", !0),
          (v(!0), k(we, null, Ae(f.extraKeys, (m) => {
            var L, j;
            return v(), k(we, { key: m }, [
              (L = f.shape) != null && L[o.value] && m in f.shape[o.value] ? (v(), k(we, { key: 0 }, [
                E("div", ca, se(x(jt)(x(n)(((j = f.userFriendlyFieldMap) == null ? void 0 : j[m]) || m))), 1),
                (v(!0), k(we, null, Ae(f.allOptions, (R, M) => {
                  var le;
                  return v(), pe(pt, {
                    id: `${f.extraType}-${m}-${f.labels[M]}-${M}-${f.shapeIndex}`,
                    key: `${f.extraType}-${m}-${f.labels[M]}-${M}-${f.shapeIndex}`,
                    type: "select",
                    disabled: h(f.pricing, f.shape, o.value, m, M).length === 0,
                    options: h(f.pricing, f.shape, o.value, m, M).map((de) => ({
                      value: de,
                      label: de
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: f.shape[o.value][m][(le = f.labels) == null ? void 0 : le[M]],
                    "onUpdate:value": (de) => {
                      var I;
                      return u(m, (I = f.labels) == null ? void 0 : I[M], de);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : G("", !0),
              E("div", {
                class: "delete",
                onClick: () => x(bs)(f.shape, f.extraType, m)
              }, [
                be(S, { icon: ["fass", "trash"] })
              ], 8, ha),
              E("div", da, se(y(m) || x(n)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        E("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": x(n)("action_item", { a: "delete", i: f.extraLabel }),
          onClick: g[1] || (g[1] = () => x(xl)(f.shape, f.extraType, !0))
        }, [
          be(S, { icon: ["fass", "trash"] }),
          Vt(" " + se(x(n)("action_item", { a: "delete", i: f.extraLabel })), 1)
        ], 8, fa)
      ], 6));
    };
  }
}), pa = ["id", "disabled"], ga = { class: "icon" }, ma = /* @__PURE__ */ Oe({
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
      var a, u, h, y;
      const l = _t("font-awesome-icon");
      return v(), k("button", {
        id: r.id,
        class: ke(["finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (y = (h = r.inputShape) == null ? void 0 : h.finish) == null ? void 0 : y.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        E("div", ga, [
          be(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = E("div", { class: "indicator" }, null, -1))
      ], 10, pa);
    };
  }
}), ya = Oe({
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
      return ds(this.inputShape);
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
}), va = ["id", "disabled"];
function ba(i, t, e, s, n, r) {
  const o = _t("font-awesome-icon");
  return v(), k("button", {
    id: i.id,
    class: ke(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    be(o, { icon: ["fass", "hammer"] })
  ], 10, va);
}
const wa = /* @__PURE__ */ Qt(ya, [["render", ba]]), Sa = { id: "uploader" }, xa = {
  key: 0,
  class: "debug"
}, ka = {
  key: 1,
  class: "selected-files"
}, Ca = ["src"], Ia = ["onClick"], $a = !0, Pa = /* @__PURE__ */ Oe({
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
    const e = $t(() => Promise.resolve().then(() => Xi)), s = N(null), n = N({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (f) => ["image/jpeg", "image/jpg", "image/png"].includes(f.type), a = () => {
      var f;
      (f = s.value) == null || f.click();
    }, u = (f) => {
      const g = f.target, S = g.files;
      if (!S) return;
      const q = Array.from(S), V = q.filter((m) => !l(m));
      if (V.length > 0) {
        const m = V.map((L) => L.name).join(", ");
        alert(`Invalid file type(s): ${m}
Only JPG and PNG files are allowed.`), g.value = "";
        return;
      }
      const z = n.value.files || [];
      if (z.length + q.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), g.value = "";
        return;
      }
      const Q = [...z, ...q], oe = h(Q), U = Q.map((m, L) => ({
        originalName: m.name,
        newName: `${r.prefix}-${L + 1}-${r.uniqueId}${y(m.name)}`
      })), K = {
        shapeId: r.shapeId,
        files: Q,
        previewUrls: oe,
        metadata: U
      };
      n.value = K, o("update", K), g.value = "";
    }, h = (f) => f.map((g) => URL.createObjectURL(g)), y = (f) => f.substring(f.lastIndexOf(".")), w = (f) => {
      URL.revokeObjectURL(n.value.previewUrls[f]);
      const g = [...n.value.files], S = [...n.value.previewUrls], q = [...n.value.metadata];
      if (g.splice(f, 1), S.splice(f, 1), q.splice(f, 1), g.length === 0)
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
          previewUrls: S,
          metadata: q
        };
        n.value = V, o("update", V);
      }
    };
    return dr(() => {
      var f;
      (f = n.value) != null && f.previewUrls && n.value.previewUrls.forEach((g) => URL.revokeObjectURL(g));
    }), ut(() => {
      n.value.shapeId = r.shapeId;
      const f = r.images.find((g) => g.shapeId === r.shapeId);
      if (f) {
        const g = h(f.files);
        n.value = {
          ...f,
          previewUrls: g
        };
      }
    }), (f, g) => {
      var q;
      const S = _t("font-awesome-icon");
      return v(), k("div", Sa, [
        i.env === "development" && $a ? (v(), k("div", xa, [
          be(x(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : G("", !0),
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
          be(S, { icon: ["fass", "files"] })
        ]),
        (q = n.value.files) != null && q.length ? (v(), k("div", ka, [
          (v(!0), k(we, null, Ae(n.value.files, (V, z) => (v(), k("div", {
            key: z,
            class: "selected-file"
          }, [
            E("img", {
              src: n.value.previewUrls[z],
              alt: "Preview"
            }, null, 8, Ca),
            E("button", {
              class: "remove-file",
              type: "button",
              onClick: (Y) => w(z)
            }, [
              be(S, { icon: ["fass", "trash"] })
            ], 8, Ia)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}), La = /* @__PURE__ */ Qt(Pa, [["__scopeId", "data-v-bb77aee9"]]);
function Ta(i) {
  var l, a;
  const t = i.x, e = i.x + i.l, s = Qe().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = Qe().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
  this.axes.shapeXAxis ? this.axes.shapeXAxis.call(Ei(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(Ei(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((a = (l = i == null ? void 0 : i.stock) == null ? void 0 : l.saw) == null ? void 0 : a.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.call(Ri(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(Ri(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Aa() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(ln(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(an(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function An(i, t, e) {
  !e || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    e === "x" ? Oa.call(this, r, o, t[n]) : Da.call(this, r, o, t[n]);
  });
}
function Oa(i, t, e) {
  const s = Qe().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = On(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Ei(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, h;
    return ((h = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : h.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function Da(i, t, e) {
  const s = Qe().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = On(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(Ri(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  Ea(r), this.axes.cutMeasurementYAxes.push(r);
}
function On(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function Ea(i) {
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
function Ra() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Yi() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Ma() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text id").text((e) => Fa.call(this, e)).classed("hidden", (e, s, n) => this.isTextHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1),
    (t) => t.attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e) => this.getRectangleCoordinate(e, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text name").text((e) => _a.call(this, e)).call(this.trimNameToFit, this).classed("hidden", (e, s, n) => this.isNameHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (e) => this.getRectangleCoordinate(e, "x", "center")).attr("y", (e, s, n) => {
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
  i.empty() ? this.selections.shapeLengthText = this.selections.shapeWrappers.append("text").attr("class", "shape-text length").text((t) => qa.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
    const r = s[e].getBBox().height;
    return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
  }) : i.each((t, e, s) => {
    const n = s[e], r = n.getAttribute("x"), o = n.getAttribute("y"), l = this.getRectangleCoordinate(t, "x", "center").toString(), a = n.getBBox().height, u = this.getRectangleCoordinate(t, "y", "top", -(a / 2 + 2)).toString();
    (r != l || o != u) && (n.setAttribute("x", l), n.setAttribute("y", u));
  }), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((t) => [t]).join(
    (t) => t.append("text").attr("class", "shape-text width").text((e) => Ba.call(this, e)).classed("hidden", (e, s, n) => this.isWidthHidden(e, s, n)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (e, s, n) => {
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
function Fa(i) {
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
function _a(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function qa(i) {
  return this.state.debug === "guillotine" ? "" : A({ v: i.l, o: this.numberConfig }).toString();
}
function Ba(i) {
  return this.state.debug === "guillotine" ? "" : A({ v: i.w, o: this.numberConfig }).toString();
}
function Ha(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = yo(
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
      const a = vn(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (u) => u.append("line").call((h) => o.call(this, h)),
        (u) => u.call((h) => o.call(this, h)),
        (u) => u.remove()
      );
    }
    s = vo(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new qt();
  for (const r of e.toArray()) {
    const o = bn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = go(i, o, this.props.stock.value);
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
  return Ga.call(this, t, i), Na.call(this, t, i), !!(t != null && t.length);
}
function Ga(i, t) {
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
function Na(i, t) {
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
const Wa = (i) => `${i.parentID}-${i.x}-${i.y}-${i.w}-${i.l}`;
function Ua() {
  if (!this.props.containerWidth) return;
  hi.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && za.call(this), ja.call(this);
}
function ja() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, Wa).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return Ws.call(this, t), t.size() > 0 && Vs.call(this, t.data()), Us.call(this, t), t.on("mousedown", js.bind(this)), t;
    },
    (i) => (Ws.call(this, i), i.size() > 0 && Vs.call(this, i.data()), Us.call(this, i), i.on("mousedown", js.bind(this)), i),
    (i) => i.remove()
  ), this.settings.main && requestAnimationFrame(() => Ma.call(this)), this.selections.shapeWrappers.size() > 0;
}
function za() {
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
function Ws(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => {
    var s;
    return (s = di.call(this, e)) == null ? void 0 : s.toString();
  });
  this.selections.shapeRectangles ? this.selections.shapeRectangles = un(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function Va(i) {
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
function Us(i) {
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
function js(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && Ya.call(this, i, t), (this.settings.app || this.settings.embed) && Za.call(this, i, t), this.state.device === "desktop" && (Yi.call(this), Ta.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function Ya(i, t) {
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
        ], Ka.call(this, t);
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
    console.table(Xa(t, e));
  }
}
function Xa(i, t) {
  return t.reduce((e, s) => {
    const n = Fn(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function Ka(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function Za(i, t) {
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
function Ja(i) {
  const t = [];
  for (const e of i)
    if (e != null && e._banding)
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = Va.call(this, s));
        const o = Qa.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function zs(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Li.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Li.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Li.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Li.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Vs(i) {
  if (!this.settings.main) return;
  const t = Ja.call(this, i);
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t).join(
    (e) => e.append("line").call((s) => zs.call(this, s)),
    (e) => e.call((s) => zs.call(this, s)),
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
function Qa(i, t) {
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
function eu(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const Ys = (i) => `${i.w}-${i.l}-${i.grain}`;
function Xs(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function Ks(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function tu() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Aa.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Ys).join(
    (i) => i.append("rect").attr("class", "background stock").call((t) => Xs.call(this, t)),
    (i) => i.call((t) => Xs.call(this, t)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Ys).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((t) => Ks.call(this, t)),
    (i) => i.call((t) => Ks.call(this, t)),
    (i) => i.remove()
  );
}
function Dn(i) {
  return `${i.x}-${i.y}-${i.w}-${i.l}`;
}
function Zs(i) {
  if (!this.props.containerWidth)
    return !1;
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(i, Dn).join(
    (t) => t.append("rect").attr("class", "segment").call((e) => Js.call(this, e)),
    (t) => t.call((e) => Js.call(this, e)),
    (t) => t.remove()
  ), iu.call(this, this.selections.segmentRectangles), !this.settings.app && this.state.env === "development" && nu.call(this);
}
function Js(i) {
  return i.style("opacity", (t) => (t == null ? void 0 : t.offcut) === !0 ? 0.5 : 1).classed("offcut", (t) => t.offcut).classed("merged", (t) => t.merged).classed("near", (t) => t.shapePosition === "near").classed("far", (t) => t.shapePosition === "far").classed("completed", (t) => t.completed).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function iu(i) {
  this.selections.segmentGroup.selectAll("text").data(i, Dn).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => Qs.call(this, e)),
    (t) => t.call((e) => Qs.call(this, e)),
    (t) => t.remove()
  );
}
function Qs(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").text(su.call(this)).attr("dominant-baseline", "middle");
}
function su(i) {
  if (this.state.env !== "development" || i.offcut) return null;
  const t = i.cutDirection === "l" ? "→" : "↑";
  return this.state.env === "development" ? `${t} ${i.id}` : t;
}
function nu() {
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
    ].reduce((n, r) => (n[r] = Fn(e, r), n), {}));
  });
}
function En(i) {
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
function ru(i) {
  return `${i.stock.saw.bladeWidth}-${i.x1}-${i.y1}-${i.x2}-${i.y2}`;
}
function ou() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, ru).join(
    (i) => i.append("line").attr("class", "cut").call((t) => en.call(this, t)),
    (i) => i.call((t) => en.call(this, t)),
    (i) => i.remove()
  ));
}
function en(i) {
  return i.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return e < 1 ? 1 : Math.ceil(e);
  }).attr("x1", (t) => this.scales.xPositionScale(t.getVisCoords("x1"))).attr("x2", (t) => this.scales.xPositionScale(t.getVisCoords("x2"))).attr("y1", (t) => this.scales.yPositionScale(t.getVisCoords("y1"))).attr("y2", (t) => this.scales.yPositionScale(t.getVisCoords("y2"))).classed("trim", (t) => t.isTrim);
}
function Rn(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function Mn(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function lu(i, t, e, s) {
  this.selections.cutLines.style("visibility", (n) => typeof i.guillotineData[e] == "number" && n.guillotineData[e] <= i.guillotineData[e] || !s && n.guillotineData.parentSegmentID === t ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", (n) => i.stock.cutType === "guillotine" && n.isTrim ? n.type === i.type : n.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (n) => n.guillotineData.ptxDummyCut), s || uu.call(this, i, t);
}
function au(i, t, e, s, n) {
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
    this.state.device === "desktop" && !i.isTrim && An.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function uu(i, t) {
  var r, o, l, a, u, h;
  const e = (r = i == null ? void 0 : i.guillotineData) == null ? void 0 : r.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (y) => Rn(y, t, e)), this.selections.cutLines.classed("inside-segment", (y) => Mn(y, t));
  const s = En.call(this, i);
  if (s === !1) return;
  const n = (l = s == null ? void 0 : s.siblings) == null ? void 0 : l[(o = s.main) != null && o.hasBeamTrim ? e - 1 : e];
  if (n) {
    let y = [], w;
    const f = this.getHalfBladeWidth(i.stock), g = i.dimension === "l" ? "y" : "x";
    (i == null ? void 0 : i.dimension) === "l" ? (y = [
      [
        n.y,
        n.y + n.w
      ],
      [
        i.y1 + f,
        (s == null ? void 0 : s.main.y) + (s == null ? void 0 : s.main.w)
      ]
    ], w = [(a = i == null ? void 0 : i.distances) == null ? void 0 : a.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (y = [
      [
        n.x,
        n.x + n.l
      ],
      [
        i.x1 + f,
        (s == null ? void 0 : s.main.x) + (s == null ? void 0 : s.main.l)
      ]
    ], w = [(u = i == null ? void 0 : i.distances) == null ? void 0 : u.left, (h = i == null ? void 0 : i.distances) == null ? void 0 : h.right]), this.state.device === "desktop" && !i.isTrim && w && An.call(this, y, w, g);
  }
}
function cu(i = null, t = "") {
  var f, g, S, q;
  if (i === null || this.selections.cutLines.empty()) return;
  const e = this.props.cuts.value[i];
  hi.call(this), Yi.call(this), Re(this.selections.cutLines.nodes()[i].parentElement).raise();
  const s = (f = e.guillotineData) == null ? void 0 : f.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (g = e == null ? void 0 : e.stock) == null ? void 0 : g.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((S = e == null ? void 0 : e.stock) == null ? void 0 : S.cutType) && s !== null && typeof s < "u" ? lu.call(this, e, s, l, t) : au.call(this, e, i, o, r, n), hu.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = En.call(this, e);
  if (a === !1) return;
  const { main: u, siblings: h } = a;
  if (!((q = e == null ? void 0 : e.guillotineData) != null && q.parentSegmentID))
    return Zs.call(this, [u]);
  const y = h == null ? void 0 : h.length;
  let w = [];
  if (y) {
    for (let z = y; z--; )
      h[z] && (h[z].completed = !1);
    if (e.guillotineData.segmentCutOrder === void 0 || e.guillotineData.segmentCutOrder === null)
      return;
    const V = e.guillotineData.segmentCutOrder;
    for (let z = 0; z < y; z++)
      z < V && (h[z].completed = !0);
    w.push(...h), w = w.filter((z) => z);
  }
  w.length && Zs.call(this, w);
}
function hu(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var l;
    let r = Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock)));
    const o = (l = i == null ? void 0 : i.guillotineData) == null ? void 0 : l.segmentCutOrder;
    return (Rn(s, e, o) || Mn(s, e)) && (r += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (r = 5), r;
  });
}
function du() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections.cutLines.attr("stroke-width", (i) => {
    const t = this.scales.measurementScale(this.getBladeWidth(i.stock));
    return t < 1 ? 1 : Math.ceil(t);
  }), hi.call(this), Yi.call(this);
}
function fu(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Fn(i, t) {
  return Yt(i, t);
}
class pu {
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
    c(this, "formatNumber", (t) => A({
      v: t,
      o: this.numberConfig
    }).toString());
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = Re(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: Qe(),
      yScale: Qe(),
      yPositionScale: Qe(),
      xPositionScale: Qe(),
      yAxisScale: Qe(),
      measurementScale: Qe(),
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
    }, s = (n, r) => Rt("#" + (fu(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
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
      let y = h.getComputedTextLength();
      const w = this.getWidthAttribute(n) - 20;
      for (; y > w && u.length > 0; )
        u = u.slice(0, -1), a.text(u.length ? u + "..." : ""), y = a.node().getComputedTextLength();
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
    Ua.call(this);
  }
  drawStock() {
    tu.call(this);
  }
  drawCuts() {
    ou.call(this);
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
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), Ra.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Yi.call(this);
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
    var a, u;
    if (this.settings.app) {
      const h = this.scales.measurementScale(t.l), y = this.scales.measurementScale(t.w);
      return h < 50 || y < 50;
    }
    if (((u = (a = t == null ? void 0 : t.stock) == null ? void 0 : a.saw) == null ? void 0 : u.stockType) === "linear") return !1;
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
    eu.call(this);
  }
  drawPositions(t) {
    Ha.call(this, t);
  }
  showCut(t) {
    cu.call(this, t);
  }
  resetCuts() {
    du.call(this);
  }
}
const gu = ["id"], mu = /* @__PURE__ */ Oe({
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
    moveMode: { default: () => N(!1) }
  },
  emits: ["shape-select", "shape-colour-update", "add-to-parts-bin", "move-shape"],
  setup(i, { expose: t, emit: e }) {
    const { r: s, activeStock: n, activeShapes: r, activeCuts: o, activeSegments: l, currentCutIndex: a, getStock: u, getShapes: h, getSegments: y, getCuts: w } = on(), f = i, g = e, S = (ne) => {
      g("shape-colour-update", ne);
    }, q = (ne) => {
      ne != null && ne.id && g("shape-select", ne.id.toString());
    }, V = (ne) => {
      ne && g("add-to-parts-bin", ne);
    }, z = (ne, tt) => {
      ne && g("move-shape", ne, tt);
    }, Y = N(0), Q = N(0), oe = N(null);
    let U, K = N(!1);
    ut(() => le());
    const m = J(() => ({
      format: f.numberFormat,
      decimals: f.decimalPlaces
    })), L = J(() => f.stockId ? u(f.stockId) : n.value), j = J(() => f.stockId ? h(f.stockId) : r.value), R = J(() => f.main ? f.stockId ? w(f.stockId) : o.value : []), M = J(() => f.main ? f.stockId ? y(f.stockId) : l.value : []);
    fr(oe, (ne) => {
      const tt = ne[0], { width: it } = tt.contentRect;
      it > 0 && (Y.value = it);
    }), pr(
      Y,
      (ne) => {
        U && (ne <= 0 || (U.setDevice(), U.resetShapeAxes(), U.drawAll()));
      },
      { throttle: 100 }
    ), $e(n, (ne) => {
      ne && (Y.value <= 0 || (U.setDevice(), U.drawStock()));
    }), $e(r, (ne) => {
      ne && (Y.value <= 0 || (U.setDevice(), U.drawShapes()));
    }), $e(o, () => {
      Y.value <= 0 || U.drawCuts();
    }), $e(a, () => {
      Y.value <= 0 || (U.toggleSegments(!0), U.showCut(a.value));
    }), $e(m, (ne) => {
      U.updateNumberFormat(ne.format, ne.decimals, null);
    });
    const le = () => {
      const ne = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${f.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: f.numberFormat,
          decimalPlaces: f.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: f.colors || null,
        //[] check this
        settings: {
          main: f.main,
          app: !1,
          embed: !1,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: Q,
          containerWidth: Y,
          stock: L,
          shapes: j,
          cuts: R,
          segments: M,
          stockList: s.stockList,
          moveMode: f.moveMode
        },
        options: {
          disableClick: f.disableClick,
          enableStretch: f.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: S,
          onShapeSelect: q,
          onAddToPartsBin: V,
          onMoveShape: z
        }
      };
      U = new pu(ne), K.value = !0;
    };
    return t({
      loaded: K,
      toggleShapes: (ne = !1) => {
        U && U.toggleShapes(ne);
      },
      toggleCuts: (ne = !1) => {
        U && U.toggleCuts(ne);
      },
      toggleSegments: (ne = !1) => {
        U && U.toggleSegments(ne);
      },
      drawShapes: () => {
        U && U.drawShapes();
      },
      drawStock: () => {
        U && U.drawStock();
      },
      drawPositions: (ne) => {
        U && U.drawPositions(ne);
      },
      resetPositions: () => {
        U && U.removePositions();
      },
      findShape: (ne) => {
        U && U.findShape(ne);
      },
      clearSelection: () => {
        U && U.clearSelection();
      },
      resetCuts: () => {
        U && (U.toggleSegments(!1), U.resetCuts());
      },
      showCut: (ne) => {
        U && (U.toggleSegments(!0), U.showCut(ne));
      },
      requiresStretch: (ne) => {
        U && U.requiresStretch(ne);
      }
    }), (ne, tt) => (v(), k("div", {
      id: ne.elementId,
      ref_key: "diagramContainerRef",
      ref: oe,
      class: "diagram-container"
    }, null, 8, gu));
  }
}), yu = {
  key: 0,
  class: "debug"
}, vu = { key: 2 }, bu = {
  key: 0,
  class: "row table-heading"
}, wu = {
  key: 0,
  class: "cell center"
}, Su = {
  key: 1,
  class: "cell delete"
}, xu = { class: "cell" }, ku = ["id", "disabled", "onClick"], Cu = {
  key: 0,
  class: "cell center"
}, Iu = ["onClick"], $u = {
  key: 1,
  class: "cell"
}, Pu = ["disabled", "aria-label", "onClick"], Lu = { class: "button-wrapper main" }, Tu = ["aria-label"], Au = ["aria-label", "disabled"], Ou = ["aria-label"], Du = { id: "part-count" }, Eu = {
  key: 3,
  id: "messages"
}, Ru = {
  key: 0,
  class: "heading"
}, Mu = { class: "content" }, Fu = {
  key: 4,
  id: "progress"
}, _u = !0, qu = /* @__PURE__ */ Oe({
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
    const s = $t(() => Promise.resolve().then(() => Ku)), n = $t(() => Promise.resolve().then(() => Ju)), r = $t(() => Promise.resolve().then(() => vc)), o = $t(() => Promise.resolve().then(() => Cc)), l = $t(() => Promise.resolve().then(() => Xi)), { t: a } = Gi(["main", "errors"]), { inputs: u, totalInputShapes: h, getShapeGrainSummary: y, updateNumberFormat: w, validateInputStock: f } = rn(), { r: g, updateFromResult: S, stackedStock: q, uniqueAddedShapes: V, uniqueUsedStock: z, activeStockId: Y, setActiveStockId: Q } = on(), { progress: oe, reset: U } = Pr(), { addNotice: K } = Ni(), { tip: m, update: L, hide: j } = Ir(), R = i, M = e, le = "production", de = N((navigator == null ? void 0 : navigator.language) || "en-US"), I = gr(null), B = window.location.hostname, H = N(!1), ie = N(!0), re = mr("Checkout/currentURL", window.location.href), ge = rs(), he = N([]), Ne = N(!1), et = N(!1), D = N(!1), ct = N(!1), ne = N(!1), tt = N(al()), it = N(!1), { socket: st } = $r({
      refs: {
        connected: H,
        thinking: D
      },
      callbacks: {
        onResult(d) {
          var P, _, O, ee, T;
          const p = d.result;
          if (S(p), !((P = p.shapeList) != null && P.length) || !((_ = p.stockList) != null && _.length)) {
            U(), K({
              type: "error",
              message: Te(a("no_result")),
              additional: [Te(a("check_inputs"))]
            }), D.value = !1;
            return;
          }
          Yn();
          const b = {
            jobId: d.jobId,
            metadata: g.metadata.value,
            parts: V.value.map((F) => {
              var Se, St, xt;
              return {
                l: F.l,
                w: F.w,
                t: F == null ? void 0 : F.t,
                material: F.material,
                orientationLock: F.orientationLock,
                q: (St = (Se = g.metadata.value) == null ? void 0 : Se.addedPartTally) == null ? void 0 : St[F.parentID],
                name: F.name,
                banding: F.banding,
                finish: F.finish,
                customData: F.customData,
                stockId: ((xt = F == null ? void 0 : F.stock) == null ? void 0 : xt.id) || (F == null ? void 0 : F.stockId)
              };
            }),
            stock: z.value.map((F) => {
              var Se, St;
              return {
                id: F.id,
                name: F == null ? void 0 : F.name,
                l: F.l,
                w: F.w,
                t: F == null ? void 0 : F.t,
                material: F.material,
                q: (St = (Se = g.metadata.value) == null ? void 0 : Se.usedStockTally) == null ? void 0 : St[F.parentID],
                trim: F == null ? void 0 : F.trim,
                cost: F == null ? void 0 : F.cost,
                analysis: F == null ? void 0 : F.analysis
                // type: s?.type
              };
            }),
            offcuts: g.offcuts.value.map((F) => ({
              l: F.l,
              w: F.w,
              t: (F == null ? void 0 : F.t) ?? null,
              q: F.q,
              stockId: F.stockId
            })),
            inputs: {
              parts: u.inputShapes.value.map((F) => {
                const Se = { ...F };
                return delete Se.listId, Se;
              })
            }
          };
          if ((T = (ee = (O = g == null ? void 0 : g.metadata) == null ? void 0 : O.value) == null ? void 0 : ee.unplacedParts) != null && T.length) {
            const F = g.metadata.value.unplacedParts.map((Se) => Se.id).join();
            K({
              type: "warning",
              message: Te(a("parts_not_fit")) + ": " + F
            });
          }
          M("result", b), D.value = !1;
        },
        onUser(d) {
          I.value = d;
        },
        onConnectError(d) {
          K({
            type: "error",
            message: Te(a("cannot_connect")),
            additional: [d]
          });
        },
        onError(d) {
          K({
            type: "error",
            message: Te(a("error_occurred")),
            additional: [d]
          });
        }
      }
    }), mt = {
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
    }, Z = ht(mt), te = ht({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), Xe = N(null), Ue = N(!1), Ht = N(""), Le = N(""), Pe = ht({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Be = N([]), Fe = N([]), Dt = N([]), Gt = N(!1), je = ht({
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
    }), ve = ht({
      labels: [],
      pricing: {},
      options: {},
      keys: gt
    }), De = ht({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), ei = ht({
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
    }), Nt = N([]), mi = J(() => {
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
          output: Z.numberFormat === "decimal" ? "float" : "string",
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
    }), yt = J(() => Fl(
      ei,
      mi.value,
      "parts",
      te.stockType,
      Z.fieldOrder
    )), vt = J(() => {
      let d = yt.value.length + 1;
      return u.inputShapes.value.length > 1 && d++, d;
    }), yi = J(() => {
      const d = {
        id: "34px",
        del: "30px",
        info: "30px"
      }, p = [];
      for (const b of yt.value)
        b.id !== "trim" && p.push(b.w ?? "minmax(20px, 1fr)");
      return p.unshift(d.id), u.inputShapes.value.length > 1 && p.push(d.del), p.join(" ");
    }), $ = J(() => ({
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
    })), W = J(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), ae = J(() => {
      var d, p;
      return I.value ? !(I.value && ((p = (d = I.value) == null ? void 0 : d.api) != null && p.whiteLabel)) : !0;
    }), me = {
      stockType: (d) => {
        const p = ["sheet", "linear", "roll"];
        p.includes(d) || console.warn(`${d} is not a valid stockType, expected ${p.join("|")}`), te.stockType = d, d === "linear" && (te.cutType = null, te.cutPreference = null);
      },
      stockSelection: (d) => {
        const p = ["efficiency", "smallest"];
        d && !p.includes(d) ? console.warn(`${d} is not a valid stockSelection, expected ${p.join("|")}`) : te.options.stockSelection = d;
      },
      minSpacing: (d) => {
        te.options.minSpacing = d;
      },
      stackHeight: (d) => {
        te.stackHeight = d;
      },
      cutPreference: (d) => {
        const p = ["efficiency", "length", "width", "beam"];
        if (p.includes(d)) {
          const { cutType: b, cutPreference: P } = ts(d);
          te.cutType = b, te.cutPreference = P;
        } else
          console.warn(`SmartCut - ${d} is not one of ${p.join("|")}`);
      },
      bladeWidth: (d) => {
        d >= 0 ? te.bladeWidth = d : console.warn(`SmartCut - you provided an incorrect blade width of: ${d}`);
      },
      maxParts: (d) => {
        Z.maxParts = d;
      },
      locale: (d) => {
        de.value = d.replace(/_/g, "-");
      },
      enable: (d) => {
        const p = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const b in mt.enable)
          b in d && (Z.enable[b] = d[b]);
        for (const b in p)
          Ve(b, Et(d, [p[b]]) ?? mt.enable[p[b]]);
        ne.value = Et(d, ["csvImport"]) ?? mt.enable.csvImport;
      },
      colors: (d) => {
        for (const p in mt.colors)
          p in d && (Z.colors[p] = d[p]);
      },
      orientationModel: (d) => {
        if (![0, 1, 2].includes(d)) {
          Z.orientationModel = 0;
          return;
        }
        Z.orientationModel = d;
      },
      numberFormat: (d) => {
        if (!["decimal", "fraction"].includes(d)) {
          Z.numberFormat = "decimal";
          return;
        }
        Z.numberFormat = d;
      },
      customFields: (d) => {
        if (!Array.isArray(d) || !(d != null && d.length)) return;
        const p = [];
        d.forEach((b, P) => {
          p.push(b), p[P].custom = !0;
          const _ = ti(b.id);
          p[P].id = _, p[P].fieldMap = "customData." + _, b.type === "checkbox" && (p[P].w = "32px"), b.type === "select" && (p[P].output = b.output ?? "string", p[P].options = b.options);
        }), Nt.value = p;
        for (const b of u.inputShapes.value)
          b.customData = d.reduce((P, _) => {
            const O = ti(_.id);
            return P[O] = b.customData[O] || _.default || "", P;
          }, {});
      }
    }, ze = (d) => {
      if (R.debug && M("log", ["checkout init...", d]), d != null && d.options) {
        const b = d.options;
        Cl(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((O) => {
          O in b || M("error", `${O} is a required option`);
        });
        const _ = ["enable", "colors"];
        for (const O in b)
          _.includes(O) || (Z[O] = b[O]), O in me && me[O](b[O]);
      }
      d.colors && "colors" in me && me.colors(d.colors), Ps("banding", d), Ps("finish", d), Ze(d), Bn(d), et.value = !0, R.debug && M("log", ["init complete"]);
      const p = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(p), Ye(() => {
        ae.value && !Un() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, He = (d, p) => {
      d && (d.orientationLock = p);
    }, Ve = (d, p = !1) => {
      Rl(ei, "parts", te.stockType, d, p);
    }, ti = (d) => d ? Wi(d).toLowerCase() : null, Ge = (d, p, b, P) => {
      if (p.valid) {
        if (j(), b && P) {
          const _ = b.issues.findIndex((O) => O.field.some((ee) => ee.length === P.length && ee.every((T, F) => T === P[F])));
          _ !== -1 && b.issues.splice(_, 1);
        }
      } else
        L({
          referenceEl: d,
          show: !0,
          content: a(`fieldValidation.${p.message}`),
          type: "error"
        });
    }, Ze = (d) => {
      var p, b, P, _, O;
      if (Et(Z, ["enable", "machining"]) && d != null && d.machining) {
        for (const ee in je)
          d.machining[ee] && (je[ee] = d.machining[ee]);
        if (["holes", "hingeHoles"].forEach((ee) => {
          var T, F;
          (T = d == null ? void 0 : d.machining) != null && T[ee] && (je[ee].enabled = (F = d == null ? void 0 : d.machining) == null ? void 0 : F[ee].enabled);
        }), (P = (b = (p = d == null ? void 0 : d.machining) == null ? void 0 : p.corners) == null ? void 0 : b.types) != null && P.length && (je.corners.enabled = !0, je.corners.types = d.machining.corners.types), d.banding && ((O = (_ = d == null ? void 0 : d.options) == null ? void 0 : _.enable) != null && O.banding)) {
          if (!ve) return;
          je.banding = {
            enabled: !0
          }, ve.options.length && (je.banding.options = ve.options), ve.labels.length && (je.banding.labels = ve.labels), Kt(ve.pricing) && (je.banding.pricing = ve.pricing);
        }
      }
    }, ce = (d = null) => {
      Xe.value = d, d && d.l && d.w ? Gt.value = !0 : alert("Please enter dimensions first");
    }, bt = () => {
      Gt.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, wt = (d = []) => {
      if (Fe.value = [], Dt.value = [], Ve("t", !1), !!d.length) {
        for (const p of d)
          if (p != null && p.t)
            if (typeof p.t == "string" && p.t.includes(",")) {
              const b = Ss(p.t, !0);
              b.length === 2 ? (Hn(b), Ve("t", !0), p.t = Fe.value[0]) : M("error", "bonded thickness found which does not have 2 options");
            } else Fe.value.includes(p.t) || Fe.value.push(p.t);
        Fe.value.length > 1 && Ve("t", !0);
      }
    }, _n = (d) => {
      var _;
      if (!d) return { thicknesses: [], bondedThicknesses: [] };
      if (!((_ = Be.value) != null && _.length))
        return {
          thicknesses: Fe.value,
          bondedThicknesses: []
        };
      if (!d.material) return { thicknesses: [], bondedThicknesses: [] };
      const p = Be.value.find((O) => O.name === d.material);
      if (!p) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...p.thicknesses], P = [];
      for (let O = 0; O < b.length; O++) {
        const ee = b[O], T = Ss(ee), F = [];
        if (T.length) {
          for (const Se of T)
            b[O] = Se, F.push(O);
          O++;
        }
        F.length && P.push(F);
      }
      return {
        thicknesses: b,
        bondedThicknesses: P
      };
    }, qn = (d) => _n(d).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), Bn = (d) => {
      var p, b;
      if ((p = d == null ? void 0 : d.stock) != null && p.some((P) => P == null ? void 0 : P.material)) {
        Be.value = [], Fe.value = [], Dt.value = [];
        const P = /* @__PURE__ */ new Map();
        for (const _ of d.stock) {
          if (!_.material) continue;
          const O = _.material.toUpperCase();
          P.has(O) || P.set(O, /* @__PURE__ */ new Set()), _.t != null && ((b = P.get(O)) == null || b.add(A({ v: _.t })));
        }
        Be.value = Array.from(P.entries()).map(([_, O]) => ({
          name: _,
          thicknesses: Array.from(O).sort((T, F) => T - F)
        })), Be.value.length > 1 && Ve("material", !0);
      } else
        wt(d.stock);
    }, Hn = (d, p = null) => {
      if (!Array.isArray(d)) {
        M("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let P = 0; P < d.length; P++) {
        let _ = d[P];
        Z.numberFormat === "decimal" && (_ = parseFloat(_)), Fe.value.push(_), p && p.thicknesses.push(_), b.push(Fe.value.length - 1);
      }
      Dt.value.push(b);
    }, Ss = (d, p = !1) => {
      if (typeof d == "string" && d.includes(",")) {
        const b = d.split(",");
        return p ? b.map((P) => A({ v: P })) : b;
      }
      return [];
    }, Gn = () => {
      it.value ? Wn() : Nn();
    }, Nn = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), it.value = !0;
    }, Wn = () => {
      document.exitFullscreen && document.exitFullscreen(), it.value = !1;
    }, Un = () => {
      var P, _;
      if ((_ = (P = I.value) == null ? void 0 : P.api) != null && _.whiteLabel) return !0;
      let d = !0;
      const p = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [p, b].forEach((O, ee) => {
        if (!O) return d = !1;
        const T = window.getComputedStyle(O);
        if (T.display === "none" || T.display === "hidden" || T.opacity === "0" || T.color === "transparent" || T.position !== "relative" || ee === 1 && T.color !== "#4e4e4e" && T.color !== "rgb(78, 78, 78)")
          return d = !1;
      }), ie.value = d, d;
    }, xs = (d, p, b, P, _) => {
      ws(
        d,
        p,
        b,
        P,
        _,
        R.findExtrasPrice
      );
    }, ks = (d, p, b, P) => {
      Tn(
        d,
        p,
        b,
        P,
        p === "banding" ? gi : [],
        R.findExtrasPrice
      );
    }, vi = (d, p) => {
      const b = p === "banding" ? ve == null ? void 0 : ve.labels : De == null ? void 0 : De.labels;
      Sl(d, p, b);
      const P = vs(p);
      if (d != null && d[P])
        for (const _ in d[P]) {
          const O = Hi(d, p, _, R.findExtrasPrice);
          !O && _ && d[p][_] && new X({
            item: d,
            field: [[p, _]],
            type: "error",
            message: Te(a("option_not_available", { x: d[p][_], y: a(p) }))
          }), ci(d, p, _, !!O);
        }
    }, Cs = (d) => {
      const p = Object.keys(d);
      return Math.max(...p.map((P) => P.split("|").length));
    }, Is = (d) => {
      const p = [], b = Object.keys(d), P = Cs(d);
      for (let _ = P; _--; ) p.push(/* @__PURE__ */ new Set());
      for (const _ of b)
        _.split("|").forEach((ee, T) => p[T].add(ee));
      for (let _ = 0; _ < P; _++)
        p[_] = Array.from(p[_]);
      return p;
    }, bi = (d, p = [], b) => {
      if (!d) return [];
      if (b > 0 && !p[b - 1]) return [];
      const P = /* @__PURE__ */ new Set();
      for (const _ of Object.keys(d)) {
        const O = _.split("|");
        if (O.length > b) {
          let ee = !0;
          for (let T = 0; T < b; T++)
            if (p[T] && O[T] !== p[T]) {
              ee = !1;
              break;
            }
          ee && P.add(O[b]);
        }
      }
      return Array.from(P);
    }, wi = (d, p, b) => Hi(
      d,
      p,
      b,
      R.findExtrasPrice
    ), jn = (d) => {
      const p = he.value.findIndex((b) => b.shapeId === d.shapeId);
      p !== -1 ? he.value[p] = d : he.value.push(d), window.smartcutImages = he.value;
    }, zn = (d) => {
      he.value = he.value.filter((p) => p.shapeId !== d), window.smartcutImages = he.value;
    }, Si = (d = 1) => {
      for (let p = d; p--; ) {
        let b;
        if (u.inputShapes.value.length > 0) {
          const P = u.inputShapes.value[u.inputShapes.value.length - 1];
          b = ii({
            material: P.material,
            t: P.t
          });
        } else
          b = ii();
        u.inputShapes.value.push(b);
      }
    }, Vn = (d) => {
      var b;
      if (R.readonly || u.inputShapes.value.length === 1) return;
      const p = u.inputShapes.value[d].listId;
      u.inputShapes.value.splice(d, 1), ((b = Xe.value) == null ? void 0 : b.listId) === p && (Xe.value = null), U();
    }, ii = (d = {
      l: null,
      w: te.stockType === "linear" ? ((p) => (p = u.inputStock.value[0]) == null ? void 0 : p.w)() : null,
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
      var _, O;
      d.id = (u.inputShapes.value.length + 1).toString();
      const P = new zi(d, Z.numberFormat);
      return (_ = ve == null ? void 0 : ve.labels) != null && _.length && vi(P, "banding"), (O = De == null ? void 0 : De.labels) != null && O.length && vi(P, "finish"), P;
    }, Yn = () => {
      Fe.value.length && g.shapeList.value.forEach((d) => {
        if (!d.t) return;
        const p = Fe.value.findIndex(
          (_) => A({ v: _ }) === d.t
        ), b = Dt.value.find((_) => _.includes(p));
        if (!b) return;
        const P = Math.min(
          ...b.map((_) => Fe.value[_])
        );
        d.t > P && (d.q = d.q * (d.t / P), d.t = P);
      });
    }, $s = () => {
      U(), Q(null), g.stockList.value = [], g.shapeList.value = [], g.cutList.value = [];
    }, Xn = () => {
      u.inputShapes.value.length = 0, Ye(() => Si(1));
    }, Kn = async () => {
      if (M("calculating"), D.value) return !1;
      D.value = !0, ct.value = !1;
      const { valid: d, saw: p, stockList: b, shapeList: P } = await bl({
        t: a,
        partTrim: Z.partTrim,
        maxShapes: Z.maxParts,
        orientationModel: Z.orientationModel,
        sawData: te,
        onLimit: () => {
          K({
            type: "error",
            message: a("max_parts") + " " + Z.maxParts
          });
        }
      });
      if (!d) {
        M("validation-error"), D.value = !1;
        return;
      }
      $s(), R.debug && console.log(
        "SmartCut - calculating",
        "stock",
        b.map((O) => O.dimensions()),
        "parts",
        P.map((O) => O.dimensions())
      );
      const _ = {
        inputs: {
          parts: u.inputShapes.value,
          stock: u.inputStock.value,
          saw: p
        },
        saw: p,
        shapeList: P,
        stockList: b,
        enableEvo: !0,
        domain: B
      };
      await st.connect(), st.emit("calculate", _);
    }, Ps = (d, p) => {
      var St;
      if (Ve(d, !1), !d || !p || !(p != null && p[d]) || !Et(Z, ["enable", d])) return;
      const b = [d, "pricing"];
      if (!_s(p, b)) {
        M("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const P = Et(p, b);
      if (typeof P != "object") {
        M("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!Kt(P)) {
        M("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const _ = Object.keys(P), O = Object.values(P);
      if (!_.length) {
        M("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const ee = /,/;
      for (const xt of _)
        if (ee.test(xt)) {
          M("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (O.some((xt) => isNaN(xt))) {
        M("error", `${b} values must be a number`);
        return;
      }
      const T = Cs(P), F = [d, "labels"];
      let Se = [];
      if (_s(p, F))
        Se = Et(p, F);
      else {
        M("error", `${F.join(".")} not found`);
        return;
      }
      if (!Se) {
        M("error", `${F.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Se)) {
        M("error", `${F.join(".")} data must be an array`);
        return;
      }
      if (!(Se != null && Se.length)) {
        M("error", `if provided, ${F.join(".")} data must contain values`);
        return;
      }
      if (Se.length !== T) {
        M("error", `${F.join(".")} length (${Se.length}) must match the number of levels in ${b.join(".")} (${T})`);
        return;
      }
      switch (d) {
        case "banding":
          ve.labels = Se, ve.pricing = P, ve.options = Is(P);
          break;
        case "finish":
          De.labels = Se, De.pricing = P, De.options = Is(P);
          break;
      }
      if (Ve(d, !0), !!((St = u.inputShapes.value) != null && St.length))
        for (const xt of u.inputShapes.value)
          vi(xt, d);
    }, xi = (d, p) => {
      if (!p) return;
      d !== "info" && Object.keys(Pe).forEach((P) => {
        P !== d && P !== "info" && (Pe[P] = null);
      });
      const b = u.inputShapes.value.indexOf(p);
      Pe[d] === b ? (Xe.value = null, Pe[d] = null) : (Xe.value = p, Pe[d] = b);
    }, Ls = (d) => {
      if (M("log", ["load event received"]), !et.value) {
        M("log", ["load event received"]);
        return;
      }
      Zn(d.detail);
    }, Zn = (d) => {
      var P, _, O;
      if (M("log", ["loading parts..."]), !d || !((_ = (P = d == null ? void 0 : d.inputs) == null ? void 0 : P.parts) != null && _.length)) {
        M("log", ["could not find any parts to import"]);
        return;
      }
      u.inputShapes.value.length = 0;
      let p = 0;
      for (const ee of d.inputs.parts) {
        const T = ii(ee);
        T ? (u.inputShapes.value.push(T), (O = T.issues) != null && O.length && M("log", [`SmartCut - issues found while importing part at index ${p}`, T.issues])) : M("log", [`SmartCut - error loading part at index ${p}`, ee]), p++;
      }
      u.inputShapes.value.flatMap((ee) => It(ee.issues)).length && K({
        type: "error",
        message: Te(a("issues_found"))
      }), M("log", [`loaded ${u.inputShapes.value.length} parts`]);
    }, Jn = (d) => {
      u.inputShapes.value.length = 0, Ye(() => {
        var p, b;
        for (const P of d)
          P.t = ((b = (p = u.inputStock.value) == null ? void 0 : p[0]) == null ? void 0 : b.t) ?? null, u.inputShapes.value.push(ii(P));
      });
    };
    $e(() => R.stock, (d) => {
      if ($s(), Array.isArray(d) || console.warn("SmartCut - stock must be passed as an array"), !!(d != null && d.length)) {
        u.inputStock.value.length = 0, Be.value.length || wt(d);
        for (const p of d) {
          const b = new ps({
            ...p,
            autoAdd: !0,
            id: (u.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, Z.numberFormat);
          u.inputStock.value.push(b);
        }
        if (u.inputStock.value.length) {
          u.inputShapes.value.length ? Ye(() => {
            u.inputShapes.value.forEach((b) => {
              if (b.material) {
                const P = Be.value.find((_) => _.name === b.material);
                P && (b.t = A({ v: P.thicknesses[0] }));
              } else
                b.t = A({ v: u.inputStock.value[0].t });
            });
          }) : Ye(() => Si(1));
          const p = f(te);
          p.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(p))), K({
            type: "error",
            message: Te(a("stock_issue")),
            additional: p.map((b) => a(b.message))
          }));
        }
      }
    }, { immediate: !0 }), $e(u.inputShapes, (d) => {
      M("inputs-changed"), d.forEach((p) => {
        var P;
        te.stockType === "linear" && (p.w = (P = u.inputShapes.value[0]) == null ? void 0 : P.w);
        const b = Be.value.find((_) => _.name === p.material);
        b && (b.thicknesses.includes(A({ v: p.t })) || (p.t = A({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), $e(() => Z.numberFormat, (d) => {
      w(d);
    }), ut(async () => {
      if (Ne.value) return;
      const d = new URL(window.location.href), p = d.searchParams.toString(), b = d.origin + d.pathname + (p ? `?${p}` : "");
      re.value !== b && (u.inputShapes.value.length = 0, Si(1)), re.value = b, de.value = Z.locale, await st.connect(), st.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ls), Ne.value = !0, R.debug && M("log", [
        "ready...",
        "fields:",
        yt.value.map((P) => P.id)
      ]);
    });
    const Qn = () => {
      st && st.disconnect();
    };
    return as(() => {
      window.removeEventListener("smartcut/load", Ls), Qn(), delete window.smartcutCheckout;
    }), t({
      init: ze,
      getAvailablePricingOptions: bi,
      getExtrasPrice: wi,
      formatPrice: R.formatPrice,
      findExtrasPrice: R.findExtrasPrice,
      inputShapes: u.inputShapes,
      initExtrasOptions: vi,
      createInputShape: ii
    }), (d, p) => {
      var P, _;
      const b = _t("font-awesome-icon");
      return v(), k(we, null, [
        be(x(s), {
          content: x(m).content,
          type: x(m).type,
          show: x(m).show,
          "reference-el": x(m).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        x(le) === "development" && _u ? (v(), k("div", yu, [
          p[5] || (p[5] = E("div", null, "Developer information", -1)),
          E("div", null, "options.orientationModel: " + se(Z.orientationModel), 1)
        ])) : G("", !0),
        Gt.value && ((P = Xe.value) != null && P.machining) ? (v(), pe(x(r), {
          key: 1,
          shape: Xe.value,
          "onUpdate:shape": p[0] || (p[0] = (O) => Xe.value = O),
          translate: !0,
          options: je,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": wi,
          "get-available-pricing-options": bi,
          "format-price": i.formatPrice,
          onClose: bt
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : G("", !0),
        et.value ? G("", !0) : (v(), k("div", vu, [
          be(Gs, {
            size: 50,
            "show-number": !1
          })
        ])),
        et.value ? (v(), k("div", {
          key: 3,
          id: "smartcut-checkout",
          class: ke({ fullscreen: it.value })
        }, [
          tt.value && !i.readonly ? (v(), k("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: p[1] || (p[1] = (O) => Gn())
          }, [
            be(b, { icon: ["fasr", "expand"] }),
            Vt(" " + se(x(Te)(x(a)("full_screen"))), 1)
          ])) : G("", !0),
          ae.value ? (v(), k("div", {
            key: 1,
            id: "credit",
            style: xe($.value)
          }, [
            E("a", {
              title: "SmartCut | Cut list optimization software",
              style: xe(W.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, se(x(Fr)(x(a)("powered_by"))), 5)
          ], 4)) : G("", !0),
          E("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: xe({ "grid-template-columns": yi.value })
          }, [
            x(u).inputShapes.value.length ? (v(), k("div", bu, [
              p[6] || (p[6] = E("div", { class: "cell id" }, null, -1)),
              (v(!0), k(we, null, Ae(yt.value, (O) => (v(), k("div", {
                key: O.id,
                class: ke(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(O.id) || O.type === "checkbox" }])
              }, se(x(Te)(x(a)(O.label))), 3))), 128)),
              x(le) === "development" ? (v(), k("div", wu, " Info ")) : G("", !0),
              x(u).inputShapes.value.length > 1 ? (v(), k("div", Su)) : G("", !0)
            ])) : G("", !0),
            (v(!0), k(we, null, Ae(x(u).inputShapes.value, (O, ee) => (v(), k("div", {
              key: ee,
              class: "row inputs"
            }, [
              E("div", xu, [
                E("div", {
                  class: "id",
                  style: xe({
                    background: Z.colors.partA,
                    color: Z.colors.text
                  })
                }, se(ee + 1), 5)
              ]),
              (v(!0), k(we, null, Ae(yt.value, (T) => (v(), k("div", {
                key: T.fieldMap,
                class: ke(["cell", [`${T.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(T.id) || T.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(T.id) ? T.id === "orientationLock" ? (v(), pe(Bl, {
                  key: 1,
                  id: "orientation-" + ee,
                  rectangle: O,
                  disabled: i.readonly,
                  "stock-grain": x(y)(O),
                  "button-background": Z.colors.button,
                  "icon-color": Z.colors.buttonText,
                  "orientation-model": Z.orientationModel,
                  onUpdateOrientation: (F) => He(O, F)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : T.id === "banding" ? (v(), pe(Gl, {
                  key: 2,
                  id: "banding-" + ee,
                  "input-shape": O,
                  disabled: i.readonly,
                  "stock-grain": x(y)(O),
                  open: Pe.banding === ee,
                  "orientation-model": Z.orientationModel,
                  onClicked: (F) => xi("banding", O)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : T.id === "finish" ? (v(), pe(ma, {
                  key: 3,
                  id: "finish-" + ee,
                  "input-shape": O,
                  disabled: i.readonly,
                  open: Pe.finish === ee,
                  onClicked: (F) => xi("finish", O)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : T.fieldMap === "machining" && tt.value ? (v(), pe(wa, {
                  key: 4,
                  id: "machining-" + ee,
                  disabled: i.readonly,
                  "input-shape": O,
                  onOpen: (F) => ce(O)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : T.fieldMap === "imageUpload" ? (v(), k("button", {
                  key: 5,
                  id: "image-upload-" + ee,
                  type: "button",
                  disabled: i.readonly,
                  class: ke({ selected: Pe.info === ee }),
                  onClick: (F) => xi("imageUpload", O)
                }, [
                  be(b, { icon: ["fass", "image"] })
                ], 10, ku)) : G("", !0) : (v(), pe(pt, {
                  key: 0,
                  id: T.id + "-" + ee,
                  focus: !i.readonly && Z.enable.focus && ee === x(u).inputShapes.value.length - 1 && T.id === "l",
                  issue: x(Rs)(O, [T.fieldMap]),
                  warning: x(Rs)(O, [T.fieldMap], !0),
                  type: T.type,
                  output: T.output,
                  label: T != null && T.label ? x(Te)(x(a)(T.label)) : null,
                  placeholder: T != null && T.placeholder ? x(Te)(x(a)(T.placeholder)) : null,
                  "enable-label": !1,
                  "number-format": Z.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (T == null ? void 0 : T.required) ?? !1,
                  "allow-zero": (T == null ? void 0 : T.allowZero) ?? !0,
                  options: T.id === "t" ? qn(O) : T == null ? void 0 : T.options,
                  "true-value": T == null ? void 0 : T.trueValue,
                  "false-value": T == null ? void 0 : T.falseValue,
                  default: T == null ? void 0 : T.default,
                  min: typeof (T == null ? void 0 : T.min) == "number" ? T.min : null,
                  max: typeof (T == null ? void 0 : T.max) == "number" ? T.max : null,
                  custom: T == null ? void 0 : T.custom,
                  value: x(Et)(O, T == null ? void 0 : T.fieldMap),
                  text: {
                    delete: x(jt)(x(a)("delete")),
                    select: x(jt)(x(a)("select"))
                  },
                  onValidation: (F, Se) => Ge(F, Se, O, [T.fieldMap]),
                  "onUpdate:value": (F) => {
                    T.fieldMap && x(ol)(O, T.fieldMap, F);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ], 2))), 128)),
              x(le) === "development" ? (v(), k("div", Cu, [
                E("button", {
                  type: "button",
                  class: ke({ selected: Pe.info === ee }),
                  onClick: (T) => xi("info", O)
                }, " i ", 10, Iu)
              ])) : G("", !0),
              x(u).inputShapes.value.length > 1 ? (v(), k("div", $u, [
                E("button", {
                  type: "button",
                  disabled: i.readonly,
                  class: "delete",
                  "aria-label": x(Te)(x(a)("action_item", { a: "remove", i: "part" })),
                  onClick: (T) => Vn(ee)
                }, [
                  be(b, { icon: ["fass", "trash"] })
                ], 8, Pu)
              ])) : G("", !0),
              be(x(n), {
                item: O,
                "num-columns": vt.value
              }, null, 8, ["item", "num-columns"]),
              Pe.banding === ee && ve.options.length > 0 ? (v(), pe(ns, {
                key: 2,
                shape: O,
                "shape-index": ee,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": ve.keys,
                "all-options": ve.options,
                pricing: ve.pricing,
                labels: ve.labels,
                "user-friendly-field-map": x(Me),
                "part-columns": vt.value,
                "get-price": wi,
                "format-price": i.formatPrice,
                "orientation-model": Z.orientationModel,
                "get-available-pricing-options": bi,
                onUpdateAll: ks,
                onSet: xs
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              Pe.finish === ee && De.options.length > 0 ? (v(), pe(ns, {
                key: 3,
                shape: O,
                "shape-index": ee,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": De.keys,
                "all-options": De.options,
                pricing: De.pricing,
                labels: De.labels,
                "user-friendly-field-map": x(Me),
                "part-columns": vt.value,
                "get-price": wi,
                "format-price": i.formatPrice,
                "orientation-model": Z.orientationModel,
                "get-available-pricing-options": bi,
                onUpdateAll: ks,
                onSet: xs
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              Pe.info === ee ? (v(), k("div", {
                key: 4,
                id: "shape-info",
                style: xe({ "grid-column-end": "span " + vt.value })
              }, [
                be(x(l), {
                  data: [O == null ? void 0 : O.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : G("", !0),
              Pe.imageUpload === ee ? (v(), pe(La, {
                key: 5,
                prefix: (ee + 1).toString(),
                "unique-id": x(ge),
                "shape-id": O.listId,
                style: xe({ "grid-column-end": "span " + vt.value }),
                images: he.value,
                onUpdate: jn,
                onRemove: zn
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : G("", !0)
            ]))), 128))
          ], 4),
          E("div", Lu, [
            i.readonly ? G("", !0) : (v(), k("button", {
              key: 0,
              type: "button",
              "aria-label": x(a)("action_item", { a: "add", i: "part" }),
              style: xe({ background: Z.colors.button, color: Z.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: p[2] || (p[2] = (O) => Si(1))
            }, [
              be(b, { icon: ["fasr", "plus-large"] }),
              Vt(" " + se(x(Te)(x(a)("action_item", { a: x(a)("add"), i: x(a)("part") }))), 1)
            ], 12, Tu)),
            E("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": x(Te)(x(a)("calculate")),
              style: xe({
                background: Z.colors.button,
                color: Z.colors.buttonText
              }),
              disabled: !((_ = x(u).inputStock.value) != null && _.length) || D.value,
              onClick: p[3] || (p[3] = (O) => Kn())
            }, [
              be(b, { icon: ["fass", "calculator"] }),
              Vt(se(x(Te)(x(a)("calculate"))), 1)
            ], 12, Au),
            i.readonly ? G("", !0) : (v(), k("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": x(Te)(x(a)("clear")),
              onClick: p[4] || (p[4] = (O) => Xn())
            }, [
              be(b, { icon: ["fass", "trash"] })
            ], 8, Ou)),
            E("div", Du, se(x(h)) + se(Z != null && Z.maxParts ? "/" + Z.maxParts : ""), 1)
          ]),
          ne.value && !i.readonly ? (v(), pe(x(o), {
            key: 2,
            ref: "import",
            "number-format": Z.numberFormat,
            "custom-fields": Nt.value,
            "banding-options": ve.options,
            "banding-labels": ve.labels,
            "finish-options": De.options,
            "finish-labels": De.labels,
            onImport: Jn
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : G("", !0),
          Ue.value ? (v(), k("div", Eu, [
            Ht.value ? (v(), k("div", Ru, se(Ht.value), 1)) : G("", !0),
            E("pre", Mu, se(Le.value), 1)
          ])) : G("", !0),
          (Z.enable.diagram ? D.value && !x(oe).complete : D.value || x(oe).complete) ? (v(), k("div", Fu, [
            be(Gs, {
              size: 50,
              number: x(oe).shapeCount,
              complete: x(oe).complete,
              "show-number": Z.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : G("", !0),
          os(be(mu, {
            "element-id": "diagram",
            "number-format": Z.numberFormat,
            "decimal-places": Z.decimalPlaces,
            colors: Z.colors
          }, null, 8, ["number-format", "decimal-places", "colors"]), [
            [ls, Z.enable.diagram && x(oe).complete]
          ]),
          Z.enable.diagram && x(q).length > 1 && x(oe).complete ? (v(), pe(Ll, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": x(Y),
            "stock-list": x(q),
            onShowStock: x(Q)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : G("", !0)
        ], 2)) : G("", !0)
      ], 64);
    };
  }
}), nh = /* @__PURE__ */ Qt(qu, [["__scopeId", "data-v-ad681a2b"]]), Bu = {
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
}, Hu = { class: "smartcut-object-viewer" }, Gu = ["onClick"], Nu = { class: "toggle-icon" }, Wu = { class: "path-label" }, Uu = {
  key: 0,
  class: "object-properties"
}, ju = { class: "key" };
function zu(i, t, e, s, n, r) {
  return v(), k("div", Hu, [
    (v(!0), k(we, null, Ae(e.data, (o, l) => (v(), k("div", {
      key: l,
      class: "array-item"
    }, [
      E("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        E("div", Nu, se(n.expanded[l] ? "▼" : "▶"), 1),
        E("div", Wu, se(e.paths[l] || l), 1)
      ], 8, Gu),
      n.expanded[l] ? (v(), k("div", Uu, [
        (v(!0), k(we, null, Ae(o, (a, u) => (v(), k("div", {
          key: u,
          class: "property-item"
        }, [
          E("div", ju, se(u) + ": ", 1),
          E("div", {
            class: ke(["value", r.getValueType(a)])
          }, se(r.formatValue(a)), 3)
        ]))), 128))
      ])) : G("", !0)
    ]))), 128))
  ]);
}
const Vu = /* @__PURE__ */ Qt(Bu, [["render", zu]]), Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Vu }, Symbol.toStringTag, { value: "Module" })), Yu = ["data-placement"], Xu = /* @__PURE__ */ Oe({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = N(null), s = N(null), n = J(() => ({
      getBoundingClientRect: () => {
        var y;
        return ((y = t.referenceEl) == null ? void 0 : y.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      or(8),
      lr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      ar({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      br({ element: s })
    ], { floatingStyles: o, middlewareData: l, placement: a } = yr(
      n,
      e,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (y, w, f) => rr(
          y,
          w,
          f,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), u = J(() => ({
      position: o.value.position,
      top: o.value.top,
      left: o.value.left,
      transform: o.value.transform,
      zIndex: "1000"
    })), h = J(() => {
      if (!l.value.arrow) return {};
      const { x: y, y: w } = l.value.arrow, f = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: y != null ? `${y}px` : void 0,
        top: w != null ? `${w}px` : void 0,
        [f]: "-4px"
      };
    });
    return (y, w) => (v(), pe(nn, { to: "body" }, [
      be(vr, { name: "fade" }, {
        default: us(() => [
          y.show && y.referenceEl ? (v(), k("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: ke(["tooltip", y.type]),
            style: xe(u.value),
            "data-placement": x(a)
          }, [
            Vt(se(y.content) + " ", 1),
            E("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: xe(h.value)
            }, null, 4)
          ], 14, Yu)) : G("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), Ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Xu }, Symbol.toStringTag, { value: "Module" })), Zu = /* @__PURE__ */ Oe({
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
      return v(), k(we, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (v(), k("div", {
          key: 0,
          class: "group issues",
          style: xe({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          E("pre", null, se(t.item.issues.filter((a) => a.type === "error").flatMap((a) => x(Te)(a.message)).join(`
`)), 1)
        ], 4)) : G("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (v(), k("div", {
          key: 1,
          class: "group warnings",
          style: xe({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          E("pre", null, se(t.item.issues.filter((a) => a.type === "warning").flatMap((a) => x(Te)(a.message)).join(`
`)), 1)
        ], 4)) : G("", !0)
      ], 64);
    };
  }
}), Ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Zu }, Symbol.toStringTag, { value: "Module" })), Je = {
  precisionFixed: Lr,
  format: Tr,
  select: Re,
  selectAll: un,
  scaleLinear: Qe,
  scaleSequential: li,
  axisTop: ln,
  axisBottom: Ei,
  axisRight: an,
  axisLeft: Ri,
  symbol: Ar,
  path: Or,
  arc: Dr,
  symbolTriangle: Er,
  symbolSquare: Rr
};
class Qu {
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
      l && l.type ? (s.push(l.size ? A({ v: l.size ?? 0, o: this }) : 0), n.push(l.type)) : (s.push(0), n.push(null));
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
    for (const r of gt)
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
            y: this.getYScale()(A({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(A({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!C(t.b) || t.b === !1) return;
          l = {
            x: this.xScale(this.shapeL - A({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, a = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(A({ v: r.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!C(t.c) || t.c === !1) return;
          l = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - A({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(this.shapeL - A({ v: r.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!C(t.d) || t.d === !1) return;
          l = {
            x: this.xScale(A({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - A({ v: r.size ?? 0, o: this })) + e
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
function ec(i) {
  var t;
  if (!(i != null && i[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[i[0]]) < "u")
    return Yt(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return Yt(this, i);
}
const tc = { id: "machining" }, ic = {
  key: 0,
  class: "debug"
}, sc = { class: "inputs" }, nc = {
  key: 0,
  class: "shape-name"
}, rc = { class: "shape-dimensions" }, oc = {
  key: 1,
  class: "sides-wrapper"
}, lc = { class: "menu" }, ac = { class: "button-wrapper" }, uc = { class: "row table-heading" }, cc = {
  key: 0,
  class: "id"
}, hc = {
  key: 0,
  class: "cell"
}, dc = { class: "id" }, fc = ["onClick"], pc = { class: "remove" }, gc = { key: 5 }, mc = !1, yc = /* @__PURE__ */ Oe({
  __name: "Machining",
  props: /* @__PURE__ */ Ts({
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
  emits: /* @__PURE__ */ Ts(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var Be, Fe, Dt, Gt, je, ve, De, ei, Nt, mi, yt, vt, yi;
    const e = $t(() => Promise.resolve().then(() => Xi)), s = i, n = t, r = J(() => ds(D.value)), o = J(() => ec.call({ options: s.options }, ["units"])), l = J(() => {
      var W;
      if (!((W = h.value) != null && W.length)) return 0;
      if (te.value === "banding") return 1;
      let $ = Object.values(u.value).filter((ae) => ae.enabled).length;
      return $ += 2, $;
    }), a = J(() => {
      if (!h.value.length || te.value === "banding") return;
      const $ = {
        id: "34px",
        del: "30px"
      }, W = [];
      return h.value.forEach((ae) => {
        const me = u.value[ae];
        me.enabled && W.push(me.w ?? "1fr");
      }), W.unshift($.id), W.push($.del), W.join(" ");
    }), u = J(() => !te.value || te.value === "banding" ? null : Ht[te.value]), h = J(() => !te.value || te.value === "banding" ? [] : Object.keys(Ht[te.value]).filter(($) => Ht[te.value][$].enabled)), y = J(() => te.value ? Y() : []), w = J(() => {
      var W, ae, me, ze;
      const $ = ((ze = (me = (ae = (W = D.value) == null ? void 0 : W.machining) == null ? void 0 : ae.corners) == null ? void 0 : me.map((He) => {
        var Ve;
        return (Ve = He == null ? void 0 : He.isPresent) != null && Ve.call(He) ? He.getCorner() : null;
      })) == null ? void 0 : ze.filter((He) => He)) ?? [];
      return [...gt, ...$];
    }), f = ($ = !0) => {
      $ ? st.value = $ : Ye(() => st.value = !1);
    }, g = () => {
      j(), R(), M(), le();
    }, S = ($, W, ae) => {
      Ye(() => {
        $[W] = ae;
      });
    }, q = ($) => {
      if (te.value === "corners")
        switch ($) {
          case 0:
            return "a";
          case 1:
            return "b";
          case 2:
            return "c";
          case 3:
            return "d";
          default:
            return $;
        }
      return $ + 1;
    }, V = () => te.value !== "banding", z = ($, W = null) => {
      if (!($ != null && $.length)) return [];
      let ae = "None";
      W === "depth" && (ae = "Through");
      const me = [{ label: ae, value: null }];
      return $.forEach((ze) => {
        const He = ze.toString().charAt(0).toUpperCase() + ze.toString().slice(1);
        me.push({ label: He, value: ze });
      }), me;
    }, Y = () => {
      if (!te.value) return [];
      if (te.value === "banding") return [];
      const $ = D.value.machining[te.value];
      return Array.isArray($) ? $ : [$];
    };
    let Q = null;
    const oe = () => {
      D.value && (Q = new Qu({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: D.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), Q.init(), it.value = !0, setTimeout(() => {
        Q.updateSize();
      }, 100));
    }, U = () => {
      Z.value = Z.value === 0 ? 1 : 0, Q.flip();
    }, K = () => {
      switch (te.value) {
        case "holes":
          m();
          break;
        case "hingeHoles":
          L();
          break;
      }
    }, m = () => {
      D.value.machining.createHole(
        A({ v: D.value.getLongSide() }) / 2,
        A({ v: D.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        Z.value
      ), Q.createHoles();
    }, L = () => {
      D.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: Z.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), Q.createHingeHoles();
    }, j = () => {
      D.value.machining.holes.length = 0;
    }, R = () => {
      D.value.machining.hingeHoles.length = 0;
    }, M = () => {
      D.value.machining.corners.forEach(($) => {
        $.size = null, $.type = null;
      }), D.value.banding.a = !1, D.value.banding.b = !1, D.value.banding.c = !1, D.value.banding.d = !1;
    }, le = () => {
      D.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, de = ($) => {
      switch (te.value) {
        case "holes":
          return D.value.machining.holes.splice($, 1);
        case "hingeHoles":
          return D.value.machining.hingeHoles.splice($, 1);
        case "corners":
          D.value.machining.corners[$].size = null, D.value.machining.corners[$].type = null;
          return;
      }
    }, I = () => {
      switch (te.value) {
        case "holes":
          return j();
        case "hingeHoles":
          return R();
        case "corners":
          return M();
      }
    }, B = () => {
      var $;
      if (Ue.value = [], !!s.options.banding.enabled) {
        f();
        for (const W in D.value.banding)
          D.value.banding[W] ? s.options.banding.enableTypes && (($ = s.options.banding.types) != null && $.length) && (D.value.banding[W] || Ue.value.push({
            index: W,
            message: "Please select a type"
          })) : D.value.banding[W] = "";
        f(!1);
      }
    }, H = ($) => {
      const W = Ue.value.filter((ae) => ae.index === $);
      return W.length ? W.map((ae) => ae.message) : [];
    }, ie = ($) => {
      const W = Ue.value.filter((me) => me.index === $ && (me == null ? void 0 : me.fields)), ae = W.flatMap((me) => me.fields);
      return W.length ? ae : [];
    }, re = ($, W) => {
      const ae = ie($);
      return ae != null && ae.length ? ae.includes(W) : !1;
    }, ge = () => {
      n("close");
    }, he = ($) => $ && typeof $.disabled == "function" ? $.disabled : !1, Ne = ($, W, ae, me, ze) => {
      ws($, W, ae, me, ze, s.findExtrasPrice);
    }, et = ($, W, ae, me) => {
      Tn(
        $,
        W,
        ae,
        me,
        [],
        s.findExtrasPrice
      );
    }, D = wr(i, "shape");
    if (!((Be = D.value) != null && Be.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const ct = N(null), ne = N(null), tt = N(!1), it = N(!1), st = N(!1), mt = N(!1), Z = N(0), te = N(null), Xe = N(0), Ue = N([]), Ht = ht({
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
          type: (Fe = s.options.holes.diameters) != null && Fe.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (Dt = s.options.holes.diameters) != null && Dt.length ? "float" : void 0,
          options: (Gt = s.options.holes.diameters) != null && Gt.length ? z(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof D.value.t < "u" && A({ v: D.value.t }) > 0,
          //[]
          required: !1,
          type: (je = s.options.holes.depths) != null && je.length ? "select" : "unitDependent",
          output: (ve = s.options.holes.depths) != null && ve.length ? "float" : void 0,
          options: (De = s.options.holes.depths) != null && De.length ? z(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof D.value.t < "u" && A({ v: D.value.t }) > 0,
          required: !1,
          type: (ei = s.options.holes.depths) != null && ei.length ? "select" : "unitDependent",
          output: (Nt = s.options.holes.depths) != null && Nt.length ? "float" : void 0,
          options: (mi = s.options.holes.depths) != null && mi.length ? z(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (yt = s.options.holes.diameters) != null && yt.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (vt = s.options.holes.diameters) != null && vt.length ? "float" : void 0,
          options: (yi = s.options.holes.diameters) != null && yi.length ? z(s.options.holes.diameters) : void 0
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
          min: () => typeof s.options.corners.minValue < "u" ? A({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? A({ v: s.options.corners.maxValue, o: s.options }) : A({ v: D.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), Le = ht({
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
    }), Pe = () => {
      var $;
      return !(!(($ = D == null ? void 0 : D.value) != null && $.machining) || !tt.value || st.value);
    };
    return $e(() => {
      var $;
      return ($ = D.value) == null ? void 0 : $.listId;
    }, () => {
      Pe() && oe();
    }), $e(() => {
      var $;
      return ($ = D.value) == null ? void 0 : $.id;
    }, () => {
      Pe() && oe();
    }), $e(te, ($) => {
      if (Pe()) {
        if ($ === "banding") {
          f(), B(), f(!1);
          return;
        }
        if (!$) {
          Ue.value = [];
          return;
        }
        f(), Ue.value = D.value.machining.validate(
          D.value,
          $,
          Le == null ? void 0 : Le[$]
        ), $ === "hingeHoles" && D.value.machining.hingeHoles.forEach((W, ae) => {
          _i(W, Le == null ? void 0 : Le.holes, Ue.value, ae);
        }), f(!1);
      }
    }, { deep: !0, immediate: !0 }), $e(() => {
      var $, W;
      return (W = ($ = D == null ? void 0 : D.value) == null ? void 0 : $.machining) == null ? void 0 : W.holes;
    }, () => {
      Pe() && (f(), Ue.value = D.value.machining.validate(
        D.value,
        "holes",
        Le == null ? void 0 : Le.holes
      ), Q.createHoles(), f(!1));
    }, { deep: !0, immediate: !0 }), $e(() => {
      var $, W;
      return (W = ($ = D == null ? void 0 : D.value) == null ? void 0 : $.machining) == null ? void 0 : W.hingeHoles;
    }, () => {
      Pe() && (f(), D.value.machining.updateHingeHoles(D.value), Ue.value = D.value.machining.validate(
        D.value,
        "hingeHoles",
        Le == null ? void 0 : Le.hingeHoles
      ), D.value.machining.hingeHoles.forEach(($, W) => {
        _i($, Le == null ? void 0 : Le.holes, Ue.value, W);
      }), Q.createHingeHoles(), f(!1));
    }, { deep: !0, immediate: !0 }), $e(() => {
      var $, W;
      return (W = ($ = D == null ? void 0 : D.value) == null ? void 0 : $.machining) == null ? void 0 : W.corners;
    }, () => {
      if (Pe()) {
        f(), Ue.value = D.value.machining.validate(
          D.value,
          "corners",
          Le == null ? void 0 : Le.corners
        ), D.value.machining.validate(D.value, "holes"), D.value.machining.validate(D.value, "hingeHoles"), Q.createShape(), Q.createHoles(), Q.createHingeHoles();
        for (const $ of D.value.machining.corners)
          $.isPresent() || bs(D.value, "banding", $.getCorner(), !0);
        Q.createBanding(), f(!1);
      }
    }, { deep: !0, immediate: !0 }), $e(() => {
      var $;
      return ($ = D == null ? void 0 : D.value) == null ? void 0 : $.banding;
    }, () => {
      Pe() && (B(), Q.createBanding());
    }, { deep: !0, immediate: !0 }), ut(() => {
      var W;
      if ((W = document.getElementById("machining")) == null || W.requestFullscreen(), !D.value || !D.value.l || !D.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      Ye(() => oe());
      const $ = document.querySelector("#smartcut-app #machining .diagram");
      ct.value || (ct.value = new ResizeObserver((ae) => {
        clearTimeout(ne.value ?? void 0), it.value && (ne.value = window.setTimeout(() => {
          if (mt.value) {
            mt.value = !1;
            return;
          }
          ae[0].contentRect.width !== Xe.value && (Xe.value = ae[0].contentRect.width, Xe.value && Q.updateSize());
        }, 10));
      }), ct.value.observe($)), tt.value = !0;
    }), ($, W) => {
      var me, ze, He, Ve, ti;
      const ae = _t("font-awesome-icon");
      return v(), k("div", tc, [
        $.env === "development" && mc ? (v(), k("div", ic, [
          be(x(e), {
            data: [D.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        E("div", null, [
          E("div", sc, [
            E("button", {
              type: "button",
              class: "close",
              onClick: ge
            }, [
              be(ae, { icon: ["fass", "xmark"] })
            ]),
            (me = D.value) != null && me.name ? (v(), k("div", nc, se(D.value.name), 1)) : G("", !0),
            E("div", rc, se((ze = D.value) == null ? void 0 : ze.l) + " x " + se((He = D.value) == null ? void 0 : He.w) + " " + se((Ve = D.value) != null && Ve.t ? "x " + ((ti = D.value) == null ? void 0 : ti.t) : null), 1),
            $.options.faces.enabled ? (v(), k("div", oc, [
              E("div", {
                ref: "sides",
                class: ke(["sides", { flipped: Z.value === 1 }]),
                onClick: U
              }, W[4] || (W[4] = [
                E("div", { class: "side-a" }, " A ", -1),
                E("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              W[5] || (W[5] = E("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : G("", !0),
            r.value ? (v(), k("button", {
              key: 2,
              onClick: g
            }, " Delete all machining ")) : G("", !0),
            E("div", lc, [
              $.options.holes.enabled ? (v(), k("div", {
                key: 0,
                class: ke({ selected: te.value === "holes" }),
                onClick: W[0] || (W[0] = (Ge) => te.value = "holes")
              }, " Holes ", 2)) : G("", !0),
              $.options.hingeHoles.enabled ? (v(), k("div", {
                key: 1,
                class: ke({ selected: te.value === "hingeHoles" }),
                onClick: W[1] || (W[1] = (Ge) => te.value = "hingeHoles")
              }, " Hinge holes ", 2)) : G("", !0),
              $.options.corners.enabled ? (v(), k("div", {
                key: 2,
                class: ke({ selected: te.value === "corners" }),
                onClick: W[2] || (W[2] = (Ge) => te.value = "corners")
              }, " Corners ", 2)) : G("", !0),
              $.options.banding.enabled ? (v(), k("div", {
                key: 3,
                class: ke({ selected: te.value === "banding" }),
                onClick: W[3] || (W[3] = (Ge) => te.value = "banding")
              }, " Banding ", 2)) : G("", !0)
            ]),
            E("div", ac, [
              te.value === "holes" || te.value === "hingeHoles" ? (v(), k("button", {
                key: 0,
                type: "button",
                onClick: K
              }, " Create ")) : G("", !0),
              te.value && te.value !== "banding" ? (v(), k("button", {
                key: 1,
                type: "button",
                onClick: I
              }, " Delete all ")) : G("", !0)
            ]),
            te.value === "banding" && D.value ? (v(), pe(ns, {
              key: 3,
              shape: D.value,
              env: $.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": w.value,
              labels: $.options.banding.labels,
              "all-options": $.options.banding.options,
              pricing: $.options.banding.pricing,
              "user-friendly-field-map": x(Me),
              "part-columns": 1,
              translate: $.translate,
              "orientation-model": 0,
              "get-price": $.getExtrasPrice,
              "format-price": $.formatPrice,
              "get-available-pricing-options": $.getAvailablePricingOptions,
              onSet: Ne,
              onUpdateAll: et
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : G("", !0),
            te.value !== "banding" && y.value.length ? (v(), k("div", {
              key: 4,
              class: ke(["grid-table", te.value]),
              style: xe({ "grid-template-columns": a.value })
            }, [
              E("div", uc, [
                V() ? (v(), k("div", cc)) : G("", !0),
                (v(!0), k(we, null, Ae(u.value, (Ge, Ze, ce) => os((v(), k("div", {
                  key: ce,
                  class: "cell"
                }, se(Ge.label ?? Ze), 1)), [
                  [ls, Ge.enabled]
                ])), 128)),
                W[6] || (W[6] = E("div", { class: "del" }, null, -1))
              ]),
              (v(!0), k(we, null, Ae(y.value, (Ge, Ze) => (v(), k("div", {
                key: Ze,
                class: "row"
              }, [
                V() ? (v(), k("div", hc, [
                  E("div", dc, se(q(Ze)), 1)
                ])) : G("", !0),
                (v(!0), k(we, null, Ae(h.value, (ce, bt) => (v(), k("div", {
                  key: bt,
                  class: "cell"
                }, [
                  u.value[ce].type !== "select" && u.value[ce].type !== "checkbox" ? (v(), pe(pt, {
                    key: 0,
                    id: ce + "-" + bt,
                    warning: re(Ze, ce),
                    type: u.value[ce].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: u.value[ce].label ?? ce,
                    disabled: he(u.value[ce]),
                    value: Ge[ce],
                    units: o.value,
                    output: u.value[ce].output,
                    "onUpdate:value": (wt) => S(Ge, ce, wt)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : u.value[ce].type === "checkbox" ? (v(), pe(pt, {
                    key: 1,
                    id: ce + "-" + bt,
                    type: "checkbox",
                    warning: re(Ze, ce),
                    "enable-label": !1,
                    disabled: he(u.value[ce]),
                    value: Ge[ce],
                    output: u.value[ce].output,
                    "onUpdate:value": (wt) => S(Ge, ce, wt)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : u.value[ce].type === "select" ? (v(), pe(pt, {
                    key: 2,
                    id: ce + "-" + bt,
                    type: "select",
                    "enable-label": !1,
                    warning: re(Ze, ce),
                    disabled: he(u.value[ce]),
                    value: Ge[ce],
                    options: u.value[ce].options,
                    output: u.value[ce].output,
                    "onUpdate:value": (wt) => S(Ge, ce, wt)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : G("", !0)
                ]))), 128)),
                E("div", {
                  class: "cell",
                  onClick: (ce) => de(Ze)
                }, [
                  E("div", pc, [
                    be(ae, { icon: ["fass", "trash"] })
                  ])
                ], 8, fc),
                (v(!0), k(we, null, Ae(H(Ze), (ce, bt) => (v(), k("div", {
                  key: bt,
                  class: "group validation",
                  style: xe({ "grid-column-end": "span " + l.value })
                }, se(ce), 5))), 128))
              ]))), 128))
            ], 6)) : te.value !== "banding" ? (v(), k("div", gc, " Please select from the menu above ")) : G("", !0)
          ]),
          E("div", {
            id: "machining-diagram",
            class: ke(["diagram", { flipped: Z.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
}), vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: yc }, Symbol.toStringTag, { value: "Module" })), bc = {
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
      files: Sr([])
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
function wc(i, t, e, s, n, r) {
  return v(), k("div", {
    id: "drop",
    class: ke({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = xr((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    E("div", null, se(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const Sc = /* @__PURE__ */ Qt(bc, [["render", wc]]), xc = { id: "import-file" }, kc = /* @__PURE__ */ Oe({
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
    const e = i, s = t, { t: n } = Gi(["main", "errors"]), r = N([]), o = N([]), l = N([]), a = N([]), u = N({}), h = N([]), y = N(!1), w = N(null), f = N(null), g = [
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
    ], S = J(() => {
      const I = {};
      return r.value.forEach((B, H) => {
        I[H] = {};
        for (const [ie, re] of Object.entries(B)) {
          if (!g.includes(ie)) continue;
          const ge = z(ie, re);
          (ge === !0 || ge === !1) && (I[H][ie] = ge);
        }
      }), I;
    }), q = J(() => e.customFields.map((I) => I.label)), V = (I, B) => {
      if (B) {
        const H = Object.keys(B), ie = [[]];
        H.forEach((ge) => {
          const he = B[ge], Ne = [];
          ie.forEach((et) => {
            he.forEach((D) => Ne.push([...et, D]));
          }), ie.splice(0, ie.length, ...Ne);
        });
        const re = /* @__PURE__ */ new Set();
        ie.forEach((ge) => re.add(ge.join("|").toLowerCase())), I === "banding" ? w.value = re : f.value = re;
      }
    }, z = (I, B) => {
      if (B === "???") return !0;
      function H(re) {
        return re ? (re = re.trim().toLowerCase(), re === "l" || re === "w") : !0;
      }
      const ie = {
        banding: (re) => Y(re, w.value, "banding"),
        finish: (re) => Y(re, f.value, "finish"),
        orientationLock: H
      };
      return I in ie ? ie[I](B) : null;
    }, Y = (I, B, H) => {
      if (I = R(I), !I) return !0;
      const ie = I.split(","), re = ie.every((ge) => !ge || B.has(ge.toLowerCase()));
      if (!re) {
        const ge = ie.filter((he) => !B.has(he.toLowerCase()));
        console.log(`Valid ${H} choices...`), console.table(Array.from(B)), console.log(`The following ${H} choices are invalid`, ge);
      }
      return re;
    }, Q = (I, B) => {
      const H = {
        bandingOptions: (ie) => oe(ie, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (ie) => oe(ie, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return I in H ? H[I](B) : null;
    }, oe = (I, B, H, ie) => {
      if (I = R(I), !I)
        return ie.reduce((he, Ne) => ({ ...he, [Ne]: {} }), {});
      const re = I.split(",").map((he) => he.toLowerCase()), ge = {};
      return ie.forEach((he, Ne) => {
        ge[he] = {}, Object.keys(B).forEach((et, D) => {
          var ct;
          ge[he][H[D]] = ((ct = re[Ne]) == null ? void 0 : ct.split("|")[D]) || "";
        });
      }), ge;
    }, U = () => r.value.map((I, B) => ({
      l: e.numberFormat === "decimal" ? Oi(I.l) : I.l,
      w: e.numberFormat === "decimal" ? Oi(I.w) : I.w,
      t: e.numberFormat === "decimal" ? Oi(I.t) : I.t,
      q: I.q,
      orientationLock: I.orientationLock,
      name: I.name,
      material: I.material,
      bandingOptions: S.value[B].banding ? Q("bandingOptions", I.banding) : null,
      finishOptions: S.value[B].finish ? Q("finishOptions", I.finish) : null,
      numberFormat: e.numberFormat,
      customData: le(I)
    })), K = (I) => {
      var H;
      const B = (H = I == null ? void 0 : I[0]) == null ? void 0 : H.data;
      B && ur.parse(B, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (ie) => m(ie),
        error: () => s("error")
      });
    }, m = (I) => {
      o.value = I.data.filter((B) => B.some((H) => H)), l.value = o.value[0], u.value = {};
      for (let B = l.value.length; B--; ) {
        const H = l.value[B], ie = L(H);
        ie ? u.value[B] = ie : (u.value[B] = null, q.value.includes(H) && (u.value[B] = "customData." + e.customFields.find((re) => re.label === H).id));
      }
      j(), o.value.shift(), M(), de();
    }, L = (I) => {
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
        (ie, [re, ge]) => (ge.some((he) => I && I.toLowerCase() === he) && ie.push(re), ie),
        []
      );
      return H.length > 1 ? null : H[0];
    }, j = () => {
      y.value = !1, a.value = Object.values(u.value).map((B) => !B || B === "N" ? null : g.includes(B) ? B : (y.value = !0, null));
      const I = a.value.filter((B, H) => a.value.indexOf(B) !== H);
      h.value = I.map((B) => a.value.reduce(
        (H, ie, re) => (ie && ie === B && H.push(re), H),
        []
      ));
    }, R = (I) => I && I.replace(/\s*,\s*/g, ","), M = () => {
      const I = o.value.map((B) => {
        const H = {};
        return l.value.forEach((ie, re) => {
          if (h.value.flat().includes(re))
            return H[u.value[re]] = "???";
          H[u.value[re]] = B[re];
        }), H;
      });
      r.value = I;
    }, le = (I) => {
      let B = {};
      for (let H in I)
        if (H.startsWith("customData.")) {
          let ie = H.slice(11);
          B[ie] = I[H];
        }
      return B;
    }, de = () => {
      const I = U();
      I != null && I.length && s("import", I);
    };
    return ut(() => {
      V("banding", e.bandingOptions), V("finish", e.finishOptions);
    }), (I, B) => (v(), k("div", xc, [
      be(Sc, {
        label: x(n)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: K
      }, null, 8, ["label"])
    ]));
  }
}), Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: kc }, Symbol.toStringTag, { value: "Module" }));
class Ct extends Error {
  constructor(t, e) {
    super(t), this.code = e, this.name = "FormulaError";
  }
}
class tn {
  constructor({ url: t = null, spec: e = null }) {
    c(this, "url");
    c(this, "spec");
    // Update the operations object to use the FormulaOperation type
    c(this, "operations", {
      add: (t, e) => t + e,
      subtract: (t, e) => t - e,
      multiply: (t, e) => t * e,
      divide: (t, e) => {
        if (e === 0) throw new Ct("Division by zero", "DIVISION_BY_ZERO");
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
      const y = t.nodes.get(a);
      if (typeof y.formula == "number")
        return r.set(a, y.formula), y.formula;
      o.add(a);
      const w = t.edges.get(a) || /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map();
      for (const S of w)
        if (S.startsWith("input.")) {
          const q = S.split(".")[1];
          f.set(S, s[q]);
        } else
          f.set(S, l(S));
      const g = this.evaluateFormulaWithDeps(y.formula, f, s);
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
    if (!((e = this.spec) != null && e.inputs)) throw new Ct("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
      if (r === void 0)
        throw new Ct(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new Ct(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new Ct("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new Ct(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new Ct(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new Ct(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
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
const Ic = {
  key: 0,
  class: "debug"
}, $c = { id: "formula-pricing" }, Pc = {
  key: 0,
  class: "extras"
}, Lc = { class: "heading" }, Tc = { id: "hardware-total" }, Ac = { class: "heading panels" }, Oc = !1, Dc = /* @__PURE__ */ Oe({
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
    const e = $t(() => Promise.resolve().then(() => Xi)), { addNotice: s } = Ni(), n = i, { t: r } = Gi(["main", "errors"]), o = t, l = kr("calculator"), a = J(() => l()), u = N("production");
    let h = null;
    const y = N(null), w = N([]), f = N(!1), g = J(() => {
      if (!f.value || !w.value.length || w.value.every((m) => m.value === null)) return;
      const K = Q();
      return Ye(() => {
        o("panel-result", K);
      }), K;
    }), S = J(() => {
      if (!a.value || !f.value || !w.value.length || w.value.every((m) => m.value === null)) return;
      const K = oe();
      return Ye(() => {
        o("hardware-result", K, q.value);
      }), K;
    }), q = J(() => {
      if (S.value)
        return Object.values(S.value).reduce((K, m) => K + m.totalCost, 0);
    });
    $e(g, (K) => {
      var R, M, le, de;
      if (!f.value || !K || !a.value || !((R = a.value) != null && R.inputShapes) || !((M = a.value.inputShapes) != null && M.length)) return;
      const m = (I) => I != null && I.name ? I.name.toLowerCase() : "", L = new Map(
        a.value.inputShapes.map((I) => [m(I), I])
      ), j = /* @__PURE__ */ new Set();
      for (const I of Object.values(g.value)) {
        if (!I.name) continue;
        const B = m(I), H = L.get(B), ie = {
          ...I,
          name: I.name.toUpperCase() || (H == null ? void 0 : H.name.toUpperCase()),
          material: ((le = I.material) == null ? void 0 : le.toUpperCase()) || ((de = H == null ? void 0 : H.material) == null ? void 0 : de.toUpperCase()),
          bandingOptions: I.bandingOptions || {},
          finishOptions: I.finishOptions || {},
          orientationLock: I.orientationLock || null,
          readonly: !0
        }, re = H || a.value.createInputShape(ie);
        if (H) {
          Object.assign(H, ie);
          for (const ge of ["banding", "finish"])
            a.value.initExtrasOptions(H, ge);
        } else
          a.value.inputShapes.push(re);
        j.add(B);
      }
      a.value.inputShapes = a.value.inputShapes.filter(
        (I) => j.has(m(I))
      );
    }, { immediate: !1 }), ut(() => U());
    const V = (K) => {
      n.debug && console.log(K);
    }, z = () => {
      w.value = Object.values(y.value.inputs).map(() => ({
        value: null
      }));
    }, Y = (K, m) => {
      w.value[K] && (w.value[K].value = m);
    }, Q = () => {
      try {
        return h.calculatePanelsFromFields(w.value);
      } catch (K) {
        return Ye(() => {
          s({
            type: "error",
            message: K.message.split(`
`)[0]
          });
        }), null;
      }
    }, oe = () => {
      try {
        return h.calculateHardwareFromFields(w.value);
      } catch (K) {
        return Ye(() => {
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
      n.url ? (V(`SmartCut - Formula calculator init from url: ${n.url}`), h = new tn({ url: n.url }), y.value = await h.getSpec()) : n.spec && (V("SmartCut - Formula calculator init with JSON"), h = new tn({ spec: n.spec }), y.value = await h.getSpec()), z(), f.value = !0;
    };
    return (K, m) => {
      var L;
      return v(), k(we, null, [
        u.value === "development" && Oc ? (v(), k("div", Ic, [
          m[0] || (m[0] = E("div", null, "Developer information", -1)),
          y.value ? (v(), pe(x(e), {
            key: 0,
            data: [y.value],
            paths: ["spec"]
          }, null, 8, ["data"])) : G("", !0),
          be(x(e), {
            data: [w.value],
            paths: ["this.fields"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        E("div", $c, [
          (v(!0), k(we, null, Ae((L = y.value) == null ? void 0 : L.inputs, (j, R, M) => {
            var le;
            return v(), pe(pt, {
              id: "formula-field-" + M,
              key: M,
              type: j.type,
              label: j.label,
              placeholder: j.label,
              min: j.min ?? 0,
              max: j.max ?? null,
              default: j.default ?? 0,
              value: (le = w.value[M]) == null ? void 0 : le.value,
              "onUpdate:value": (de) => Y(M, de)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          S.value ? (v(), k("div", Pc, [
            E("div", Lc, se(x(r)("Hardware")), 1),
            (v(!0), k(we, null, Ae(S.value, (j, R) => (v(), k("div", { key: R }, se(j.name) + " x" + se(j.q) + " = " + se(i.formatPrice(j.totalCost)), 1))), 128)),
            E("div", Tc, se(x(r)("Hardware total")) + " = " + se(i.formatPrice(q.value)), 1)
          ])) : G("", !0),
          E("div", Ac, se(x(r)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Dc }, Symbol.toStringTag, { value: "Module" })), Ec = { id: "smartcut-notices" }, Rc = { class: "content" }, Mc = ["onClick"], Fc = ["innerHTML"], _c = /* @__PURE__ */ Oe({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = Ni(), n = N({}), r = J(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = _t("font-awesome-icon");
      return v(), pe(nn, { to: "body" }, [
        E("div", Ec, [
          be(Cr, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: ke(["notices-container", t.position])
          }, {
            default: us(() => [
              (v(!0), k(we, null, Ae(x(e), (u) => (v(), k("div", {
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
                E("div", Rc, [
                  E("div", {
                    class: "message",
                    onClick: (h) => u.action()
                  }, se(u.message), 9, Mc),
                  E("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, Fc)
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
}), oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: _c }, Symbol.toStringTag, { value: "Module" }));
export {
  Kt as A,
  _r as B,
  nh as C,
  Wi as D,
  sh as E,
  rh as F,
  ps as I,
  oh as N,
  Xi as O,
  Tt as S,
  Qt as _,
  zi as a,
  Bt as b,
  X as c,
  Te as d,
  th as e,
  ll as f,
  Qc as g,
  Fi as h,
  Lt as i,
  Yc as j,
  Xc as k,
  Kc as l,
  ih as m,
  Zc as n,
  Jc as o,
  A as p,
  jt as q,
  Vc as r,
  To as s,
  eh as t,
  jc as u,
  Uc as v,
  gt as w,
  dt as x,
  Et as y,
  _s as z
};

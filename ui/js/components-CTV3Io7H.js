var ar = Object.defineProperty;
var ur = (i, t, e) => t in i ? ar(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => ur(i, typeof t != "symbol" ? t + "" : t, e);
import { F as ui, c as cr, a as ln, b as Xe, g as Kt, d as Di, i as pi, v as ls, t as Mi, e as Ai, h as hr, s as dr, f as fr, o as pr, j as gr, k as mr, P as yr } from "./vendor-CtQQhE4g.js";
import { d as De, o as v, c as k, F as we, r as Oe, n as ke, a as xe, b as R, t as ie, w as as, v as us, e as vr, f as G, g as H, h as Z, i as Pe, j as ht, k as Ze, l as cs, m as li, u as S, p as Xt, q as pe, s as hs, x as br, y as Ui, z as Bt, A as ye, B as wr, C as Lt, D as Sr, E as xr, G as kr, H as Cr, I as ft, J as Ir, T as Pr, K as an, L as Lr, M as As, N as $r, O as Tr, P as Or, Q as Dr, R as Ar } from "./vendor-vue-CrziaopC.js";
import { u as un, a as ds, b as cn, c as Er, d as Rr, e as Mr } from "./composables-B6Dg3t6c.js";
import { l as et, a as Fi, b as _i, c as hn, d as dn, s as Re, e as ai, r as Mt, f as fn, p as Fr, g as _r, S as qr, h as Br, i as Hr, j as Gr, k as Nr } from "./vendor-d3-BrvhDTRC.js";
import { i as Wr } from "./vendor-i18n-D9hV6ZJH.js";
function gi(i) {
  return !(!i || typeof i != "string");
}
function Ur(i) {
  return !gi(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function Vt(i) {
  return gi(i) ? i.trim().split(" ").map((t) => Te(t)).join(" ") : "";
}
function Te(i) {
  return gi(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function ji(i) {
  return gi(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function jr(i, t = 100) {
  return gi(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let pn = Wr;
function th(i) {
  pn = i;
}
function Fe(i, t) {
  const e = pn.t(i, { ns: ["main", "errors"], ...t });
  return e || i;
}
const zt = 1e-10, zr = 10, Vr = Number.MAX_SAFE_INTEGER, Yr = 4294967295, qe = (i) => typeof i == "number" && Number.isFinite(i), Ei = (i) => Array.isArray(i) && i.length > 0;
function ri(i, t, e = zt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const Xr = {
  greaterThan: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) >= 0,
  lessThan: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) <= 0,
  equalTo: (i, t, e = zt) => !qe(i) || !qe(t) ? !1 : ri(i, t, e) === 0
};
function Kr(i) {
  return qe(i) ? Number.isInteger(i) ? i : Number(i.toFixed(zr)) : !1;
}
function Zr(i) {
  if (!qe(i) || i < 0 || i > Vr)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (Yr + 1) * i);
}
function Jr(i, t) {
  if (!Ei(i))
    throw new Error("Invalid array parameter");
  if (!qe(t) || t < 0 || t > i.length)
    throw new Error("Invalid size parameter");
  const e = i.slice(), s = i.length - t;
  for (let n = i.length - 1; n >= s; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e.slice(s);
}
class Ci {
  static calculateMean(t) {
    if (!Ei(t))
      throw new Error("Invalid input array");
    return t.reduce((e, s) => e + s, 0) / t.length;
  }
  static calculateStandardDeviation(t, e = null) {
    if (!Ei(t))
      throw new Error("Invalid input array");
    const s = e ?? this.calculateMean(t), n = t.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / t.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(t) {
    if (!Ei(t))
      throw new Error("Invalid input array");
    const e = this.calculateMean(t);
    if (e === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(t, e) / e;
  }
}
const ce = {
  ...Xr,
  isNumber: qe,
  round: Kr,
  getRandom: Zr,
  getRandomSample: Jr,
  calculateStandardDeviation: Ci.calculateStandardDeviation.bind(Ci),
  calculateCoefficientOfVariation: Ci.calculateCoefficientOfVariation.bind(Ci)
}, Qr = 10, eo = 0;
class fs extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
function to(i) {
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
    dp: u = Qr,
    pl: h = !1,
    fr: m = eo
  } = { nf: e, dp: s, pl: n, fr: r, ...l };
  if (t == null || t === "")
    return a === "decimal" ? null : "";
  try {
    const x = oo(t, h);
    return x ? a === "decimal" ? io(
      x,
      t,
      u
    ) : so(
      x,
      m
    ) : a === "decimal" ? 0 : "0";
  } catch (x) {
    throw new fs(
      `Failed to convert number format: ${t} to ${a}. ${x.message}`
    );
  }
}
function io(i, t, e) {
  if (!String(i).includes("/")) {
    const o = String(i);
    if (o.includes("e")) {
      if (typeof e == "number") {
        const l = Number(Number(o).toFixed(e));
        return oi(l);
      }
      return Number(o);
    }
    if (typeof e == "number") {
      const [l, a = ""] = o.split("."), u = a.padEnd(e, "0"), h = +`${l}.${u.slice(0, e)}`;
      return oi(h);
    }
    return oi(Number(o));
  }
  const n = new ui(i).valueOf();
  if (typeof t == "string" && t.includes("/"))
    return typeof e == "number" ? oi(Number(n.toFixed(e))) : n;
  const r = to(String(t));
  return oi(Number(n.toFixed(r)));
}
function so(i, t) {
  const e = new ui(i);
  if (t > 0) {
    const s = e.valueOf(), n = Math.round(s * t);
    return new ui(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function oi(i) {
  const t = i.toString();
  return t.includes(".") && /\.0+$/.test(t) ? parseInt(t, 10) : i;
}
function no(i = "en-US") {
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
function Ri(i) {
  if (i == null || i === "") return null;
  const t = String(i).trim();
  if (!t) return null;
  try {
    const { thousandsSeparator: e, decimalSeparator: s } = no(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch {
    throw new fs(`Failed to parse number: ${i}`);
  }
}
function ro(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  return /^(\d+\s+)?\d+\/\d+$|^\d+$|^\d+'\s*(\d+\s+)?\d+\/\d+"$|^\d+'\s*(\d+\s+)?\d+\/\d+$|^(\d+\s+)?\d+\/\d+"$/.test(t);
}
function oo(i, t = !1) {
  if (!i && i !== 0) return null;
  let e = String(i).trim();
  if (!e) return null;
  try {
    if (ro(i))
      return e.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
    {
      t ? (e = e.replace(/[^0-9,. -]/g, ""), e = e.replace(/\s/g, "")) : (e = e.replace(/[^0-9,.-]/g, ""), e = e.replace(/,/g, "")), e.startsWith(".") && (e = "0" + e), e.startsWith("-.") && (e = "-0." + e.slice(2));
      const s = t ? Ri(e) : parseFloat(e);
      return s === null || isNaN(s) ? null : s.toString();
    }
  } catch (s) {
    throw new fs(
      `Failed to clean numeric input: ${i}. ${s.message}`
    );
  }
}
function ih(i, t, e = null, s = null) {
  if (i && !(!Ce(i) && !gt(i))) {
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
function es(i) {
  const t = {
    l: i.l,
    w: i.w
  };
  return (typeof t.l == "string" || typeof t.w == "string") && (t.l = O({ v: i.l }), t.w = O({ v: i.w })), t;
}
function gn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function lo(i) {
  gn(i), [i.l, i.w] = [i.w, i.l];
}
function zi(i, t, e) {
  var u, h;
  if (!t || !i)
    throw new Error("Container and shape are required");
  const s = bs(t) ? (h = (u = t == null ? void 0 : t.saw) == null ? void 0 : u.options) == null ? void 0 : h.minSpacing : 0, n = es(t);
  function r(m, x) {
    return ce.equalTo(m, x) || ce.lessThanOrEqualTo(m, x - s);
  }
  function o(m) {
    const x = es(m);
    return r(x.l, n.l) && r(x.w, n.w);
  }
  const l = ps(i, t);
  if (i.orientationLock || [0, 1].includes(e)) {
    const x = Ji(i, e ?? (l === "w" ? 1 : 0));
    return o(x);
  }
  let a = Ji(i, 0);
  return o(a) ? !0 : (a = Ji(i, 1), o(a));
}
function mn(i) {
  let t = null;
  return Ot(i) ? t = i.direction : (ct(i) || Ce(i)) && (t = i.orientationLock), t;
}
function Ji(i, t) {
  const e = {
    l: i.l,
    w: i.w
  };
  return ((i == null ? void 0 : i.rot) ?? 0) === t || ([e.l, e.w] = [e.w, e.l]), e;
}
function ps(i, t) {
  const e = mn(i);
  return C(e) ? !t || Ot(i) ? e : bs(t) ? ao(i, t) : e : null;
}
function ao(i, t) {
  if (!t) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!bs(t)) throw new Error("container is not a container");
  const e = mn(i);
  if (Ot(i)) return e;
  if (!C(e)) return null;
  const s = t.getStock();
  return C(s.grain) ? e === s.grain ? "l" : "w" : e;
}
function ts(i, t = null, e = null) {
  if (!C(t))
    throw new Error("no rotation provided to canRotate");
  if (t === !0 && (t = 1), t === !1 && (t = 0), yn(i) && t || e && !zi(i, e, t))
    return !1;
  const s = ps(i, e);
  return !(s === "l" && t === 1 || s === "w" && t === 0);
}
function is(i, t = null, e = null) {
  return t === null && (t = i.rot === 0 ? 1 : 0), ts(i, t, e) ? (i.rot === t || lo(i), !0) : !1;
}
function Zt(i, t = null, e = null) {
  return t ? t = 1 : t = 0, e && t && !zi(i, e, t) ? !1 : is(i, t, e);
}
function uo(i, t) {
  if (!t)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const e = ps(i, t);
  return e === "l" ? Zt(i, 0) : e === "w" ? Zt(i, 1) : !1;
}
function co(i) {
  return i.orientationLock === "l" ? Zt(i, 0) : i.orientationLock === "w" ? Zt(i, 1) : !1;
}
function yn(i) {
  gn(i);
  const t = es(i);
  return ce.equalTo(t.l, t.w);
}
const qi = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function Es(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function Rs(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Ms(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const me = (i, t, e) => t in i ? i[t] : (console.warn(qi.missingProperty(String(t), e)), null), Ii = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, jt = (i, t) => {
  if (!Es(i) || !Es(t))
    return console.warn(qi.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, rt = (i, t) => {
  const e = me(i, "id", "first item"), s = me(t, "id", "second item");
  if (e === null || s === null) return 0;
  const n = e.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function ot(i) {
  const t = Array.isArray(i[0]) ? i.map(([e, s]) => ({ key: e, direction: s })) : i;
  return (e, s) => {
    for (const { key: n, direction: r } of t) {
      const o = me(e, n, "first item"), l = me(s, n, "second item");
      if (!(o === null || l === null) && o !== l)
        return r === "desc" ? o < l ? 1 : -1 : o < l ? -1 : 1;
    }
    return 0;
  };
}
const Bi = {
  // Dimension-based sorts
  WDLD: ot([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: ot([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: ot([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: ot([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: ot([["w", "desc"]]),
  LD: ot([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Ii(
    ot([["l", "desc"]]),
    rt
  ),
  WDIDA: Ii(
    ot([["w", "desc"]]),
    rt
  ),
  // Area-based sorts
  AD: (i, t) => -jt(i, t),
  AA: jt,
  AAID: Ii(
    jt,
    rt
  ),
  ADID: Ii(
    (i, t) => -jt(i, t),
    rt
  ),
  // ID sorts
  ID: rt,
  IDDesc: (i, t) => -rt(i, t),
  StockID: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    return !e || !s ? 0 : rt(e, s);
  },
  StockIDAD: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = rt(e, s);
    return n !== 0 ? n : -jt(i, t);
  },
  // Position sorts
  YX: ot([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: ot([
    ["x", "asc"],
    ["y", "asc"]
  ]),
  // Placement order sorts
  placementOrder: (i, t) => {
    const e = me(i, "placementOrder", "first item") ?? 0, s = me(t, "placementOrder", "second item") ?? 0;
    return e - s;
  },
  typePlacementOrder: (i, t) => {
    const e = me(i, "offcut", "first item"), s = me(t, "offcut", "second item"), n = me(i, "placementOrder", "first item") ?? 0, r = me(t, "placementOrder", "second item") ?? 0;
    return e && !s ? 1 : !e && s ? -1 : n - r;
  },
  stockIDTypePlacementOrder: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = rt(e, s);
    if (n !== 0) return n;
    const r = me(i, "offcut", "first item"), o = me(t, "offcut", "second item");
    if (r && !o) return 1;
    if (!r && o) return -1;
    const l = me(i, "placementOrder", "first item") ?? 0, a = me(t, "placementOrder", "second item") ?? 0;
    return l - a;
  },
  offcutPlacementOrder: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    if (!(e != null && e.id) || !(s != null && s.id)) return 0;
    const n = rt(e, s);
    if (n !== 0) return n;
    if ("placementOrder" in i && "placementOrder" in t) {
      const r = me(i, "placementOrder", "first item") ?? 0, o = me(t, "placementOrder", "second item") ?? 0;
      return r - o;
    }
    return 0;
  },
  groupPlacementOrder: (i, t) => {
    const e = me(i, "placementOrder", "first item") ?? 0, s = me(t, "placementOrder", "second item") ?? 0, n = e - s;
    if (n !== 0) return n;
    const r = me(i, "groupPlacementOrder", "first item") ?? 0, o = me(t, "groupPlacementOrder", "second item") ?? 0;
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
    return !Rs(i) || !Rs(t) ? (console.warn(qi.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Ms(t) || !Ms(e) ? (console.warn(qi.missingLongSide), 0) : e[i] === t[i] ? -jt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function ho(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function ci(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function fo(i) {
  return i ? i === "x" ? "y" : "x" : null;
}
class Yt {
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
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = po(this), this.direction = go(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
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
function Ct(i, t, e, s, n = null, r = null) {
  return new Yt({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function po(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function go(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function mo(i, t) {
  const e = i.getCorners(), s = {};
  return e.bottomLeft.x > 0 && e.bottomLeft.y > 0 && (s.bottomLeftDown = Ct(
    e.bottomLeft.x,
    e.bottomLeft.y,
    e.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = Ct(
    e.bottomLeft.x,
    e.bottomLeft.y,
    0,
    e.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), e.topLeft.x > 0 && e.topLeft.y < t.w && (s.topLeftLeft = Ct(
    e.topLeft.x,
    e.topLeft.y,
    0,
    e.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = Ct(
    e.topLeft.x,
    e.topLeft.y,
    e.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), e.topRight.y < t.w && e.topRight.x < t.l && (s.topRightTop = Ct(
    e.topRight.x,
    e.topRight.y,
    e.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = Ct(
    e.topRight.x,
    e.topRight.y,
    t.l,
    e.topRight.y,
    "topRight",
    "topRightRight"
  )), e.bottomRight.x < t.l && e.bottomRight.y > 0 && (s.bottomRightRight = Ct(
    e.bottomRight.x,
    e.bottomRight.y,
    t.l,
    e.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = Ct(
    e.bottomRight.x,
    e.bottomRight.y,
    e.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
const yo = {
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
  //samples include rotations so one shape with two rotations counts as two
  sample: {
    enable: !0,
    groupSize: 6,
    efficiency: 4,
    guillotine: 4
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
cr.showDiff = !0;
ln("tests");
ln("timers");
function vn() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function bn(i = [], t = null) {
  i != null && i.length && vn() && yo.runTests;
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
Xe("firstShapes");
Xe("calculations");
Xe("subset");
Xe("secondRun");
Xe("stack");
const vo = Xe("errors");
Xe("allStock");
vo.color = 1;
function bo(i) {
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
class Vi extends Yt {
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
    C(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new Gt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.guillotine = e.guillotine, this.guillotineData = C(e.guillotineData) ? e.guillotineData : {}, this.guillotineData.ptxDummyCut = (e == null ? void 0 : e.ptxDummyCut) || ((o = e == null ? void 0 : e.guillotineData) == null ? void 0 : o.ptxDummyCut) || !1, this.isTrim = C(e.isTrim) ? e.isTrim : !1, this.distances = C(e.distances) ? e.distances : {}, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1;
  }
  //compress for saving / transfer
  compress() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const e = structuredClone(this);
    return new Vi(e);
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
    return bo(this);
  }
  getArea() {
    if (!this.stock) return 0;
    const e = this.getLength();
    return e ? e * this.stock.getBladeWidth() : 0;
  }
}
const wo = {
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
}, Pi = {
  topLeft: {
    top: ["topRight"],
    default: ["topRight"]
  },
  bottomRight: {
    right: ["topRight"],
    default: ["topRight"]
  }
}, Li = {
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
      const s = wo[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Pi[this.corner] && (this.grid ? Pi[this.corner][this.grid] && Pi[this.corner][this.grid].forEach((s) => e.add(s)) : Pi[this.corner].default.forEach((s) => e.add(s))), e) : (Li[this.corner] && (this.grid ? Li[this.corner][this.grid] && Li[this.corner][this.grid].forEach((s) => e.add(s)) : Li[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class Ht {
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
  const r = So[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const So = {
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
function xo(i, t, e) {
  var o, l, a, u, h, m;
  const s = new Ht(), n = e.toArray().sort(wn), r = t.getBladeWidth();
  if (n.forEach((x) => {
    const d = x.corner, g = x.type;
    if (!r)
      s.addPoint(x);
    else
      switch (d) {
        case "topRight":
          s.addPoint(
            fe("top", x, r, d),
            g
          ), s.addPoint(
            fe("right", x, r, d),
            g
          );
          break;
        case "topLeft":
          s.addPoint(
            fe("top", x, r, d),
            g
          ), s.addPoint(
            fe("left", x, r, d),
            g
          );
          break;
        case "bottomRight":
          s.addPoint(
            fe("bottom", x, r, d),
            g
          ), s.addPoint(
            fe("right", x, r, d),
            g
          );
          break;
        case "bottomLeft":
          s.addPoint(
            fe("bottom", x, r, d),
            g
          ), s.addPoint(
            fe("left", x, r, d),
            g
          );
          break;
      }
    const w = s.toArray();
    if (r)
      for (let B = w.length; B--; ) {
        const j = w[B];
        e.contains(j) && s.deletePoint(j);
      }
    else
      for (let B = w.length; B--; ) {
        const j = w[B];
        for (let U = i.length; U--; ) {
          const V = i[U];
          if (j.x === V.x && j.y === V.y) {
            s.deletePoint(j);
            break;
          }
        }
      }
  }), r) {
    const x = /* @__PURE__ */ new Set();
    let d, g, w, B;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (d = t.x, g = t.y, w = t.x + t.l, B = t.y + t.w) : (d = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), g = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), w = t.x + t.l - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.x2), B = t.y + t.w - ((m = t == null ? void 0 : t.trim) == null ? void 0 : m.y2));
    let j = s.toArray();
    for (let U = j.length; U--; ) {
      const V = j[U];
      (ce.lessThan(V.x, d) || ce.lessThan(V.y, g) || ce.greaterThan(V.x, w) || ce.greaterThan(V.y, B)) && j.splice(U, 1);
    }
    s.clear(), s.addPoints(j), x.clear(), j = s.toArray();
    for (let U = j.length; U--; ) {
      const V = j[U];
      for (let J = i.length; J--; ) {
        const ae = i[J];
        if (V.collidesWith(ae)) {
          s.deletePoint(V);
          break;
        }
      }
    }
  }
  return s;
}
function ko(i, t, e) {
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
  const l = new Ht();
  for (const a of s)
    a.raycast = !0, l.addPoints(kn(i, a, e).toArray());
  return Cn(i, e, l), l;
}
function Co(i, t) {
  const e = new Ht();
  return i.sort(wn), i.forEach((s) => {
    Ot(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function Io(i = [], t, e) {
  const s = Co(
    i === null ? t : i,
    e
  );
  return xo(
    t,
    e,
    s
  );
}
function wn(i, t) {
  return i.y === t.y ? t.x - i.x : t.y - i.y;
}
function Sn(i, t, e, s, n, r) {
  i.a = t.id, i.b = e ? e.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function Po(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new Ht();
  const s = xn(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const h of u)
        Lo(
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
      const m = new Ee(h.x2, h.y2);
      r === h.direction && (Sn(m, l, null, h.direction, "edge"), e.addPoint(m));
    }
  }), e = $o(e), e;
}
function xn(i, t) {
  return i.map((e) => {
    const s = mo(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function Lo(i, t, e, s) {
  switch (i.direction) {
    case "rl":
      $i(
        i,
        t,
        e,
        s,
        e.x + e.l
      );
      break;
    case "lr":
      $i(
        i,
        t,
        e,
        s,
        e.x
      );
      break;
    case "tb":
      $i(
        i,
        t,
        e,
        s,
        e.y + e.w
      );
      break;
    case "bt":
      $i(
        i,
        t,
        e,
        s,
        e.y
      );
      break;
  }
}
function $i(i, t, e, s, n) {
  const r = i.dimension === "w", o = r ? "y" : "x", l = r ? "x" : "y", a = r ? "l" : "w";
  if (i[`${l}1`] >= e[l] && i[`${l}1`] <= e[l] + e[a]) {
    const u = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, h = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, m = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, x = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (u || h || m || x) {
      const g = r ? i[`${l}1`] : n, w = r ? n : i[`${l}1`], B = new Ee(g, w), j = i.origin;
      Sn(B, t, e, i.direction, "shape", j), s.addPoint(B);
    }
  }
}
function $o(i) {
  const t = new Ht();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = To(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function To(i, t) {
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
function kn(i, t, e) {
  const s = new Ht(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = Oo(t, i, e), r) {
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
  return Cn(i, e, s), s;
}
function Oo(i, t, e) {
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
function Cn(i, t, e) {
  var a, u, h, m, x, d;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (h = t == null ? void 0 : t.trim) == null ? void 0 : h.x1, n = (m = t == null ? void 0 : t.trim) == null ? void 0 : m.y1, r = t.l - ((x = t == null ? void 0 : t.trim) == null ? void 0 : x.x2) - i.l, o = t.w - ((d = t == null ? void 0 : t.trim) == null ? void 0 : d.y2) - i.w);
  const l = e.toArray();
  for (let g = l.length; g--; ) {
    const w = l[g];
    (ce.lessThan(w.x, s) || ce.lessThan(w.y, n) || ce.greaterThan(w.x, r) || ce.greaterThan(w.y, o) || w.x < 0 || w.y < 0) && e.deletePoint(w);
  }
}
function Do(i, t, e = !1, s = !1) {
  return t.filter((n, r) => {
    const o = {
      fit: Ao(i) && zi(i, n),
      material: Eo(i, n, e),
      thickness: Ro(i, n, s),
      width: Mo(i, n)
    };
    return Object.entries(o).forEach(([l, a]) => {
      i.stockMatch[l][r] = a;
    }), Object.values(o).every(Boolean);
  });
}
function Ao(i) {
  return Ce(i) || ct(i) || En(i);
}
function Eo(i, t, e) {
  var r, o;
  if (!e) return !0;
  const s = (r = t == null ? void 0 : t.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function Ro(i, t, e) {
  return e ? !C(i.t) || !C(t.t) ? !1 : ct(i) ? ce.equalTo(i.t, t.t) : i.t === t.t : !0;
}
function Mo(i, t) {
  var e;
  return ((e = t == null ? void 0 : t.saw) == null ? void 0 : e.stockType) !== "linear" || !ct(i) ? !0 : ts(i, 0, t) && ce.equalTo(i.w, t.w) || ts(i, 1, t) && ce.equalTo(i.l, t.w);
}
const Fs = (i) => i.some((t) => t === !0), Fo = (i, t) => i.some((e, s) => e && t[s]);
function _o(i, t, e) {
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
    const m = Do(h, t, r, o);
    h.stockMatch.fit = Fs(h.stockMatch.fit);
    const x = Fo(
      h.stockMatch.material,
      h.stockMatch.thickness
    );
    if (h.stockMatch.width = Fs(h.stockMatch.width), !s && m.length) {
      const d = m.map((g) => g.getParentID());
      h.stockLock = d, d.forEach((g) => l.add(g));
    }
    h.stockMatch.fit ? (x || new re({
      item: h,
      field: [["material"], ["t"]],
      message: "no_matching_stock_material_thickness"
    }), e === "linear" && !h.stockMatch.width && new re({
      item: h,
      field: [["w"]],
      message: "no_matching_stock_width"
    })) : new re({
      item: h,
      field: [["l"], ["w"]],
      message: "will_not_fit"
    }), h.stockMatch = null;
  }
  let a, u;
  return s || (a = i.filter((h) => !h.stockLock || !h.stockLock.length).sort(Bi.ID), u = t.filter((h) => !l.has(h.parentID)).sort(Bi.ID), t = t.filter((h) => Dt(h)).filter((h) => l.has(h.parentID)), (r || o) && (i = i.filter((h) => {
    var m;
    return (m = h == null ? void 0 : h.stockLock) == null ? void 0 : m.length;
  }))), {
    stockList: t,
    unusableStock: u,
    shapeList: i,
    unusableShapes: a
  };
}
class re {
  constructor({
    item: t = null,
    message: e = "",
    field: s = [],
    index: n = null,
    listId: r = null,
    issues: o = null,
    type: l = "error",
    throwError: a = !1,
    shouldTranslate: u = !0
  }) {
    c(this, "message");
    c(this, "identifier");
    c(this, "field");
    c(this, "index");
    c(this, "listId");
    c(this, "type", "error");
    var m, x, d, g;
    this.message = u ? Fe(e) : e, this.field = s, this.index = n, this.listId = r, this.type = l, t && ("name" in t && ((m = t.name) != null && m.length) ? this.identifier = t.name.toLocaleUpperCase() : "id" in t && ((x = t.id) != null && x.length) ? this.identifier = t.id : "parentID" in t && ((d = t.parentID) != null && d.length) ? this.identifier = t.parentID : typeof ((g = this == null ? void 0 : this.index) == null ? void 0 : g[0]) == "number" && (this.identifier = String(this.index[0] + 1)), "issues" in t && Array.isArray(t.issues) && t.issues.push(this)), Array.isArray(o) && o.push(this);
    const h = `issue created for ${yl(t)}: ${this.identifier || "N/A"} - ${this.message} for field ${this.field || "N/A"}`;
    if (a) throw new Error(h);
  }
}
const Qi = {
  partMaterial: "material",
  stockMaterial: "material"
};
function qo(i) {
  return (Qi == null ? void 0 : Qi[i]) || i;
}
function Pt(i) {
  return i.length ? (i == null ? void 0 : i.filter((t) => t.type === "error")) || [] : [];
}
function _s(i, t, e = !1) {
  var r;
  return !("issues" in i) || !((r = i.issues) != null && r.length) ? !1 : i.issues.filter((o) => o.type === (e ? "warning" : "error")).some((o) => {
    var l;
    if (!((l = o.field) != null && l.length))
      return !1;
    for (let a = 0; a < o.field.length; a++)
      if (o.field[a].every((u, h) => u === qo(t[h])))
        return !0;
    return !1;
  });
}
const Qt = ({ item: i, field: t, index: e, newIssues: s, min: n = null, max: r = null, required: o = !1, allowZero: l = !0, isWarning: a = !1 }) => {
  let u = Kt(i, t);
  if (o && (u == null || u === ""))
    return new re({
      item: i,
      message: Fe("not_set", { x: Me[t.join(".")] }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), null;
  if (!l && u === 0)
    return new re({
      item: i,
      message: Fe("greater_than", { x: Me[t.join(".")], y: 0 }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), 0;
  if (u == null || u === "") return null;
  try {
    u = O(u);
  } catch {
    return Bo({
      item: i,
      field: t,
      value: Kt(i, t),
      index: e,
      issues: s,
      isWarning: a
    }), null;
  }
  return Ho({ item: i, field: t, value: u, index: e, issues: s, min: n, isWarning: a }), Go({ item: i, field: t, value: u, index: e, issues: s, max: r, isWarning: a }), u;
}, Bo = ({ item: i, field: t, value: e, index: s, issues: n, isWarning: r }) => {
  new re({
    item: i,
    message: Fe("not_understood", { x: t.join("."), y: e }),
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, Ho = ({ item: i, field: t, value: e, index: s, issues: n, min: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e < r && new re({
    item: i,
    message: Fe("greater_than_or_equal", { x: Me[t.join(".")], y: r }),
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, Go = ({ item: i, field: t, value: e, index: s, issues: n, max: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e > r && new re({
    item: i,
    message: Fe("less_than_or_equal", { x: Me[t.join(".")], y: r }),
    field: [t],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, No = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "banding" in i && typeof i.banding != "object" && new re({
    item: i,
    message: Fe("must_be_object", { x: "banding" }),
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Wo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "x" in i && Qt({ item: i, field: ["x"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, Uo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "y" in i && Qt({ item: i, field: ["y"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, jo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "l" in i && Qt({ item: i, field: ["l"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, zo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "w" in i && Qt({ item: i, field: ["w"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, Vo = ({ item: i, index: t, max: e, isWarning: s, saw: n }) => {
  const r = [];
  return "t" in i && ((n == null ? void 0 : n.cutType) === "beam" && !i.t && new re({
    item: i,
    message: Fe("thickness_required_for_beam_saw"),
    field: [["t"]],
    index: [t],
    type: "error",
    issues: r
  }), Qt({ item: i, field: ["t"], index: t, newIssues: r, allowZero: !1, min: 0, max: e, isWarning: s })), r;
}, Yo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "q" in i && O({ v: i.q }) <= 0 && (!("autoAdd" in i) || (i == null ? void 0 : i.autoAdd) === !1) && new re({
    item: i,
    message: Fe("greater_than_or_equal", { x: Me.q, y: 0 }),
    field: [["q"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Xo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("orientationLock" in i) || i.orientationLock === void 0 || i.orientationLock === null || i.orientationLock === "") return s;
  const n = i.orientationLock.toLowerCase();
  return n !== "l" && n !== "w" && new re({
    item: i,
    message: Fe("must_be_values", { x: Me.orientationLock, y: "l, w" }),
    field: [["orientationLock"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Ko = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("grain" in i) || i.grain === void 0 || i.grain === null || i.grain === "") return s;
  const n = i.grain.toLowerCase();
  return n !== "l" && n !== "w" && new re({
    item: i,
    message: Fe("must_be_values", { x: Me.grain, y: "l, w" }),
    field: [["grain"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Zo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("customData" in i)) return s;
  const n = i.customData;
  if (typeof n != "object")
    return new re({
      item: i,
      message: Fe("must_be_object", { x: Me.customData }),
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const r in n) {
    const o = n[r];
    o != null && (["string", "number", "boolean"].includes(typeof o) || new re({
      item: i,
      message: Fe("must_be_string_number_boolean", { x: Me.customData }),
      field: [["customData"]],
      index: [t],
      type: e ? "warning" : "error",
      issues: s
    }));
  }
  return s;
}, Jo = ({
  item: i,
  partTrim: t,
  index: e = null,
  isWarning: s = !1
}) => {
  const n = [];
  if (!t || !("l" in i) || !("w" in i) || !i.l || !i.w) return n;
  const r = O({ v: t }), o = O({ v: i.l }), l = O({ v: i.w }), a = o - r * 2, u = l - r * 2;
  return (a <= 0 || u <= 0) && new re({
    item: i,
    message: Fe("too_much_trim", { x: "part", y: r, z: `${a}x${u}` }),
    field: [["l"], ["w"], ["trim"]],
    index: [e],
    type: s ? "warning" : "error",
    issues: n
  }), n;
}, Qo = ({
  item: i,
  index: t = null,
  min: e = null,
  max: s = null,
  isWarning: n = !1
}) => {
  const r = [];
  if (!("l" in i) || !("w" in i) || !i.l || !i.w || !("trim" in i)) return r;
  if (!Dt(i) || Dt(i) && !(i != null && i.trimmed)) {
    const o = ["l", "w"], [l, a] = o.map((u) => O(i[u]));
    for (const u in i.trim)
      Qt({ item: i, field: ["trim", u], index: t, newIssues: r, min: e, max: s });
    if (r.length) return r;
    if (l && a && l > 0 && a > 0) {
      const u = O({ v: i.trim.x1 }), h = O({ v: i.trim.x2 }), m = O({ v: i.trim.y1 }), x = O({ v: i.trim.y2 }), d = (u || 0) + (h || 0), g = (m || 0) + (x || 0);
      d >= l && new re({
        item: i,
        message: Fe("too_much_trim", {
          x: `${Me.x1.toUpperCase()} + ${Me.x2.toUpperCase()}`,
          y: Me.w,
          z: l
        }),
        field: [["trim", "x1"], ["trim", "x2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      }), g >= a && new re({
        item: i,
        message: Fe("too_much_trim", {
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
}, el = ({
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
  const l = _o([i], t, e);
  if (!l) return o;
  if ((a = l == null ? void 0 : l.unusableShapes) != null && a.length) {
    const h = l.unusableShapes[0].stockMatch;
    h.fit || new re({
      item: i,
      message: "will_not_fit",
      field: [["l"], ["w"]],
      listId: Ce(i) || gt(i) ? [i.listId] : null,
      index: [n],
      type: r ? "warning" : "error",
      issues: o
    }), h.material || new re({
      item: i,
      message: "no_matching_stock_material",
      field: [["material"]],
      listId: Ce(i) || gt(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), h.thickness || new re({
      item: i,
      message: "no_matching_stock_thickness",
      field: [["t"]],
      listId: Ce(i) || gt(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), !h.width && e === "linear" && new re({
      item: i,
      message: "no_matching_stock_width",
      field: [["w"]],
      listId: Ce(i) || gt(i) ? [i.listId] : null,
      index: [n],
      issues: o
    });
  }
  return o;
}, tl = ({ item: i = null, index: t = null }) => {
  i.machining.validateEverything(i, t);
}, We = {
  customData: Zo,
  banding: No,
  partTrim: Jo,
  trim: Qo,
  x: Wo,
  y: Uo,
  l: jo,
  w: zo,
  t: Vo,
  q: Yo,
  orientationLock: Xo,
  grain: Ko,
  stockMatch: el,
  machining: tl
}, Rt = [null, void 0, "none", ""], Ye = {
  stockTypes: ["sheet", "roll", "linear"],
  cutTypes: {
    sheet: ["guillotine", "efficiency", "beam"],
    roll: ["guillotine", "efficiency"],
    linear: Rt
  },
  cutPreferences: {
    sheet: {
      guillotine: ["l", "w", "flex"],
      beam: ["l"],
      efficiency: Rt
    },
    roll: {
      guillotine: ["w"],
      efficiency: Rt
    },
    linear: {
      guillotine: Rt,
      efficiency: Rt
    }
  },
  efficiencyCompression: {
    sheet: {
      efficiency: ["y", "x"]
    },
    roll: {
      efficiency: ["x"]
    }
  },
  defaults: {
    bladeWidth: 0,
    stackHeight: 100,
    guillotine: {
      strategy: "efficiency",
      maxPhase: 0
    },
    efficiency: {
      primaryCompression: "y"
    },
    options: {
      stockSelection: "efficiency",
      minSpacing: 0,
      minSpacingDimension: {
        dimension: 0,
        minSpacing: 0
      },
      stackingMode: "identical"
    }
  }
};
function il(i) {
  var t;
  return ((t = Ye.cutTypes) == null ? void 0 : t[i]) ?? Rt;
}
function sl(i, t) {
  var e, s;
  return ((s = (e = Ye.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? Rt;
}
function nl(i) {
  var t;
  return ((t = Ye.cutTypes) == null ? void 0 : t[i]) ?? [];
}
function rl(i, t) {
  var e, s;
  return ((s = (e = Ye.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? [];
}
function In(i) {
  return Ye.stockTypes.includes(i);
}
function Pn(i, t) {
  return il(i).includes(t);
}
function Ln(i, t, e) {
  return sl(i, t).includes(e);
}
function Ti(i, t, e, s = {}) {
  for (const n in s)
    (s[n] === "" || s[n] === null || s[n] === void 0) && (s[n] = "none");
  if (!$n(i)) {
    console.error(Fe(e, s));
    return;
  }
  new re({
    item: i,
    field: Array.isArray(t) ? t.map((n) => [n]) : [[t]],
    message: Fe(e, s),
    shouldTranslate: !1
  });
}
class _t {
  constructor(t, e) {
    c(this, "bladeWidth");
    c(this, "stockType");
    c(this, "cutType");
    c(this, "cutPreference");
    c(this, "stackHeight");
    c(this, "options");
    c(this, "guillotineOptions");
    c(this, "efficiencyOptions");
    c(this, "issues");
    t = qt(t), this.issues = [], e = e ?? (t == null ? void 0 : t.stockType) ?? Ye.stockTypes[0], ol(this, t, e), !this.issues.length && (this.bladeWidth = O({ v: t == null ? void 0 : t.bladeWidth }) ?? Ye.defaults.bladeWidth, this.stockType = e ?? (t == null ? void 0 : t.stockType) ?? Ye.stockTypes[0], In(this.stockType) || (this.stockType = Ye.stockTypes[0]), this.cutType = t == null ? void 0 : t.cutType, Pn(this.stockType, this.cutType) || (this.cutType = nl(this.stockType)[0]), this.cutPreference = t == null ? void 0 : t.cutPreference, Ln(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = rl(this.stockType, this.cutType)[0]), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? Ye.defaults.stackHeight, this.guillotineOptions = Di({}, t == null ? void 0 : t.guillotineOptions, Ye.defaults.guillotine), this.efficiencyOptions = Di({}, t == null ? void 0 : t.efficiencyOptions, Ye.defaults.efficiency), this.options = Di({}, t == null ? void 0 : t.options, Ye.defaults.options));
  }
  clone() {
    const t = structuredClone(this);
    return new _t(t);
  }
}
function ol(i, t, e) {
  if (C(t == null ? void 0 : t.bladeWidth) && (t.bladeWidth = typeof t.bladeWidth == "string" ? O({ v: t.bladeWidth }) : t.bladeWidth), (pi(t.bladeWidth) || t.bladeWidth < 0) && Ti(
    i,
    "bladeWidth",
    "saw.validation.bladeWidth.invalid",
    { width: t.bladeWidth ?? "none" }
  ), !In(e)) {
    Ti(
      i,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType: e }
    );
    return;
  }
  t.cutType && !Pn(e, t.cutType) && Ti(
    i,
    "cutType",
    "saw.validation.cutType.invalid",
    { cutType: t.cutType, stockType: e }
  ), t.cutType && t.cutPreference && !Ln(e, t.cutType, t.cutPreference) && Ti(
    i,
    ["cutPreference", "cutType"],
    "saw.validation.cutPreference.invalid",
    {
      preference: t.cutPreference || "none",
      cutType: t.cutType || "none",
      stockType: e
    }
  );
}
function $n(i) {
  return i instanceof _t;
}
function ss(i) {
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
function ll(i, t, e) {
  if (!mi.includes(t) || !i.machining.corners) return 0;
  const s = Tn(i, t);
  return e * s;
}
function Tn(i, t) {
  if (!mi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Hi(i, t, e, s) {
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
class ns {
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
    ], u = t.machining.corners.map((g, w) => {
      const B = w === 0 || w === 3, j = w < 2, U = B ? e : r - e;
      let V = null;
      this.face === 0 ? V = j ? s : o - s : this.face === 1 && (V = j ? o - s : s);
      const J = Math.sqrt(U * U + V * V);
      return {
        c: g,
        distance: J
      };
    }), h = Math.min(...a.map((g) => g.distance)), m = Math.min(...u.map((g) => g.distance)), x = u.findIndex((g) => g.distance === m), d = t.machining.corners[x];
    if (d && d.type === "radius") {
      let g = x === 0 || x === 3 ? 0 : r, w = x < 2 ? 0 : o;
      const B = x < 2;
      g += x === 0 || x === 3 ? l[x] : -l[x], w += B ? l[x] : -l[x];
      const U = e - g, V = x < 2;
      let J;
      this.face === 0 ? J = V ? s : o - s : this.face === 1 && (J = V ? o - s : s);
      const ae = J - w, W = Math.sqrt(U * U + ae * ae), Y = l[x] - W - n;
      let y = !1;
      return d.index === 0 ? y = e <= g && J <= w : d.index === 1 ? y = e >= g && J <= w : d.index === 2 ? y = e >= g && J >= w : d.index === 3 && (y = e <= g && J >= w), y && Y < h ? Y : h;
    } else if (d && d.type === "bevel") {
      let g, w, B;
      d.index === 0 ? (g = 1, w = 1, B = -d.size) : d.index === 1 ? (g = 1, w = -1, B = -r + d.size) : d.index === 2 ? (g = 1, w = 1, B = -r - o + d.size) : d.index === 3 && (g = -1, w = 1, B = -o + d.size);
      const j = d.index === 0 ? 1 : -1, U = (g * e + w * s + B) / Math.sqrt(g * g + w * w) * j - n;
      return U < h ? U : h;
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
    }), s && Hi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class qs {
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
    positionLimit: m = 0
  }, x) {
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
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = u, this.minimumHoleDistance = h, this.positionLimit = m, x && this.createHoles(x);
  }
  getFace() {
    return pt[this.face];
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
      const s = new ns({
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
    }), s && Hi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Bs {
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
let On = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: e = [],
    corners: s = []
  } = {}) {
    c(this, "holes", []);
    c(this, "corners", []);
    c(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new Bs(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new Bs({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new ns(n))), e && (this.hingeHoles = e.map((n) => new qs(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && new re({
      item: t,
      index: e,
      listId: Ce(t) ? [t.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    }), n.length && new re({
      item: t,
      index: e,
      listId: Ce(t) ? [t.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new re({
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
    const o = new ns({
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
    const m = new qs({
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
    return this.hingeHoles.push(m), m;
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
function gs(i) {
  var t, e, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (e = (t = i.machining) == null ? void 0 : t.holes) != null && e.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((u) => u.type && u.size) : !1;
}
function al(i) {
  var t, e, s, n;
  if ("machining" in i) {
    if (!gs(i)) {
      i.machining = null;
      return;
    }
    (t = i.machining.holes) != null && t.length || (i.machining.holes = null), (e = i.machining.hingeHoles) != null && e.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class ms {
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
      return new re({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    const s = e[0];
    if (ct(s)) {
      if (!(this != null && this.shapes) || ((o = this.shapes) == null ? void 0 : o.length) < 2)
        return new re({
          item: this,
          message: "Must have 2 or more parts."
        }), this.issues;
    } else if (!(this != null && this.shapeListIds) || ((l = this.shapeListIds) == null ? void 0 : l.length) < 2)
      return new re({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    if (e.forEach((a, u) => {
      !a.isSquare() && !["l", "w"].includes(a.orientationLock) && new re({
        item: this,
        field: [["orientationLock"]],
        message: `Part in position ${u + 1} must have orientation lock set to be part of a group.`
      });
    }), this.issues.length) return this.issues;
    const n = ci(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, u) => {
      if (a.id === s.id) return;
      const h = a.getTrimmedDimensions(!0)[n];
      ce.equalTo(h, r) || new re({
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
    if (!ct(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((h) => {
      const m = s.findIndex((x) => !x.inUserGroup && x.parentID === h.parentID);
      if (m === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(m, 1), co(h), h.inUserGroup = !0;
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
      u = new ut(h);
    } catch (h) {
      return console.error(h), !1;
    }
    return u.parentID = `ug${t}`, n && u.updateShapeSpacing(n), u;
  }
}
function nh(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new ms(s));
  return t.length && ul(e, t), e;
}
function ul(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function cl(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function hl(i, t, e = !0) {
  const s = cl(i), n = [];
  for (const r in s) {
    const o = s[r], l = t.findIndex((u) => u.listId === r);
    l < 0 && new re({
      message: "Cannot find at least one part in the list.",
      issues: n
    });
    const a = t[l];
    (!(a != null && a.q) || o > a.q) && new re({
      message: `Not enough of part ${a != null && a.name ? a.name : l + 1} to form groups - ${o} needed, ${a.q ?? 0} found.`,
      issues: n
    });
  }
  return e && i.forEach((r) => {
    const o = r.validate(t);
    o != null && o.length && n.push(...o);
  }), n;
}
const mt = ["y1", "y2", "x1", "x2"], mi = ["a", "b", "c", "d"], $t = [...mt, ...mi], pt = ["a", "b"];
function Dn(i) {
  return mi.includes(i);
}
function dl(i) {
  return $t.includes(i);
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
function fl(i) {
  return mt.map((t) => i[t] ?? null);
}
function qt(i) {
  if (!C(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function rh({
  stockList: i,
  removeScores: t = !1,
  saw: e = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    s && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new Gt(r, e);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(Bi.ID);
}
function oh({
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
    if (pl(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
      s.shapes = s.shapes.map((l) => new Tt(l));
      try {
        n = new ut(s);
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
  }).sort(Bi.ID);
}
function lh({
  cutList: i,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = new Vi(e), n = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return s.stock = n, s;
  });
}
function ah({
  segmentList: i,
  stockList: t
}) {
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return e.stock = s, new vs(e);
  });
}
function Gi(i, t, e = "decimal", s = !1) {
  return C(i == null ? void 0 : i[t]) ? O({ v: i[t], nf: e, pl: s }) : null;
}
class ys {
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
    t = qt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ls(), ["l", "w", "t"].forEach((a) => {
      this[a] = Gi(t, a, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? pi(Mi(t.q)) ? null : Mi(t.q) : null, this.autoAdd = C(t.autoAdd) ? t.autoAdd : !1, this.name = C(t.name) ? ji(t.name).toUpperCase() : "", this.material = C(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((a) => {
      this.trim[a] = Gi(t.trim, a, e, s);
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
    yn(this);
  }
  validate(t) {
    return this.issues = [], ["l", "w", "t"].forEach((e) => We[e]({ item: this, saw: t })), We.trim({ item: this }), ["q"].forEach((e) => We[e]({ item: this, isWarning: !0 })), this.issues = this.issues.filter((e) => e), this.issues;
  }
}
class Yi {
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
      $t.map((t) => [t, !1])
    ));
    c(this, "bandingOptions", Object.fromEntries([
      ...$t,
      "all"
    ].map((t) => [t, {}])));
    c(this, "finish", Object.fromEntries(
      pt.map((t) => [t, ""])
    ));
    c(this, "finishOptions", Object.fromEntries(
      pt.map((t) => [t, {}])
    ));
    var r, o, l, a, u;
    t = t = qt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + ls(), ["l", "w", "t"].forEach((h) => {
      this[h] = Gi(t, h, e, s);
    }), this.q = C(t == null ? void 0 : t.q) ? pi(Mi(t.q)) ? null : Mi(t.q) : null, this.name = C(t.name) ? ji(t.name).toUpperCase() : "", this.material = C(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, this.notes = t != null && t.notes ? (r = t.notes) == null ? void 0 : r.replace(/,/g, " ") : "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [];
    for (const h of Object.keys(this.trim))
      this.trim[h] = Gi(t.trim, h, e, s);
    for (const h of Object.keys(this.banding))
      this.banding[h] = C((o = t == null ? void 0 : t.banding) == null ? void 0 : o[h]) ? t.banding[h] : !1;
    for (const h of Object.keys(this.bandingOptions))
      this.bandingOptions[h] = C((l = t == null ? void 0 : t.bandingOptions) == null ? void 0 : l[h]) ? t.bandingOptions[h] : {};
    for (const h of Object.keys(this.finish))
      this.finish[h] = C((a = t == null ? void 0 : t.finish) == null ? void 0 : a[h]) ? t.finish[h] : "";
    for (const h of Object.keys(this.finishOptions))
      this.finishOptions[h] = C((u = t == null ? void 0 : t.finishOptions) == null ? void 0 : u[h]) ? t.finishOptions[h] : {};
    this.orientationLock = C(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new On(t.machining ?? {
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
          $t.map((e) => [e, !1])
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
class ei {
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
    ["x", "y", "l", "w", "t"].forEach((s) => e.push(...We[s]({ item: t }))), this.issues.push(...We.customData({ item: t })), this.issues.push(...e.filter((s) => s));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = C(t.id) ? t.id.toString() : this.id || null, this.setParentID(), C(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = C(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = jr(ji(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, C(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = C(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = C(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && C(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.trimmed = C(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.offcut = C(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
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
    }), !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = ci(this.grain))), C(t == null ? void 0 : t.stock) && (Dt(t.stock) ? this.stock = t.stock : this.stock = new Gt(t.stock), this.stockId = this.stock.id);
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      mt.map((e) => [e, 0])
    ), !!Jt(t, !0))
      for (const e of mt) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = O({ v: t[e] });
          } catch {
            s = 0, new re({ item: this, field: [["trim", e]], message: `${t[e] ?? "N/A"} is not a valid value for trim: ${e}` });
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
        return new Yt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Yt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Yt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Yt({
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
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !pi(parseFloat(String(r)))).length && (C(this.l) && (this.l -= (C((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (C((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new re({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), C(this.w) && (this.w -= (C((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (C((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new re({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
    if (Ot(this)) {
      if (t.id === this.id) return !0;
    } else {
      if (t.parentID === this.parentID) return !0;
      if (ct(this) && e && this.parentID !== t.parentID) return !1;
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
    const s = new ei({
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
    return ct(this);
  }
  isSegment() {
    return ml(this);
  }
  isStock() {
    return Dt(this);
  }
  isGroup() {
    return Ot(this);
  }
  isUserGroup() {
    return En(this);
  }
}
class Xi extends ei {
  //used by evo
  constructor(e, s) {
    var n, r;
    super(e);
    // type: StockType;
    c(this, "shapes", []);
    c(this, "saw");
    c(this, "algoBenchmark");
    switch (this.shapes = e.shapes, ["sheet", "linear", "roll", null, void 0, ""].includes((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) || new re({ item: this, field: [["type"]], message: `Container type ${((r = e == null ? void 0 : e.saw) == null ? void 0 : r.stockType) ?? "N/A"} is not valid`, shouldTranslate: !1 }), this.setSaw(e, s), this.cutType) {
      case "beam":
        (!C(this.t) || this.t <= 0) && new re({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e, s) {
    var n, r, o, l;
    if (!(!e && !s)) {
      if (!s)
        if (C(e == null ? void 0 : e.saw)) {
          if (!((r = e == null ? void 0 : e.saw) != null && r.cutType)) {
            const { cutType: a, cutPreference: u } = ss(e.saw.cutPreference);
            e.saw.cutType = a, e.saw.cutPreference = u;
          }
        } else {
          e.saw = {};
          const { cutType: a, cutPreference: u } = ss(e.cutPreference);
          e.saw.cutType = a, e.saw.cutPreference = u, C(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), C((n = e == null ? void 0 : e.blade) == null ? void 0 : n.width) && (e.saw.bladeWidth = e.blade.width), C(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), C(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), C(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
        }
      try {
        const a = s ?? (e == null ? void 0 : e.saw);
        a && ($n(a) ? this.saw = a : this.saw = new _t(a)), (l = (o = this.saw) == null ? void 0 : o.issues) != null && l.length && this.issues.push(...this.saw.issues);
      } catch (a) {
        throw new Error("error creating saw", { cause: a });
      }
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
    return pi(e) ? 0 : e;
  }
  getStock() {
    return Dt(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class Gt extends Xi {
  constructor(e, s) {
    var n;
    e = qt(e), e.preventAutoRotation = ((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
    super(e, s);
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
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = Dt(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
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
    return Dt(this.stack) || typeof this.stack == "string";
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = parseInt(s.pop()), e++), s.push(e.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new Gt(r);
  }
}
class An extends ei {
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
function uh({
  offcuts: i,
  stockList: t,
  preventAutoRotation: e = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    const n = t.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, e && (s.preventAutoRotation = !0), new An(s);
  });
}
class Tt extends ei {
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
      $t.map((e) => [e, !1])
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
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = C(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, C(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = C(e == null ? void 0 : e.machining) ? new On(e.machining) : null), this.added = C(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = C(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = C(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = C(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = C(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = C(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = C(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = C(e == null ? void 0 : e.placementOrder) ? e.placementOrder : this.placementOrder || null, this.groupPlacementOrder = C(e == null ? void 0 : e.groupPlacementOrder) ? e.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (e == null ? void 0 : e.minSpacing) ?? (this.minSpacing || 0), this.priority = (e == null ? void 0 : e.priority) ?? {};
  }
  initGuillotineData(e) {
    var s, n, r, o, l, a, u, h;
    this.guillotineData = Di({}, e == null ? void 0 : e.guillotineData, {
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
    return (e = this.guillotineData) != null && e.myStripParent && (ct(this.guillotineData.myStripParent) || Ot(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(e, s = !1) {
    var o, l;
    if (!e) return 0;
    const n = e.getBladeWidth();
    if (e.cutType !== "efficiency")
      return s ? 0 : n;
    let r = (this == null ? void 0 : this.minSpacing) || ((l = (o = e.saw) == null ? void 0 : o.options) == null ? void 0 : l.minSpacing) || 0;
    return n > r && (r = n), s && (r -= n), r < 0 && (r = 0), r;
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
    e = qt(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      $t.map((s) => [s, !1])
    ), !!Jt(e, !0))
      for (const s of $t)
        this._banding[s] = C(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return fl(this._banding);
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
    ), !!Jt(e, !0))
      for (const s of pt)
        this._finish[s] = C(e == null ? void 0 : e[s]) ? e[s] : "";
  }
  //compress for saving / transfer
  save() {
    var e, s, n;
    delete this.group, (e = this == null ? void 0 : this.guillotineData) == null || delete e.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, $t.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), pt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), al(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = ci(e.grain)), bn([
      () => Ai(this.isInsideStock(e), `shape ${this.id} is not inside stock`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, Ot(this) && this.shapes.forEach((e) => e.removeFromStock());
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
    this.removeFromStock(), this.resetPosition(), Zt(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, e || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
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
    return !dl(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : Dn(e) ? Tn(this, e) : 0;
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
      return s.push(new Vi({
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
    Zt(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(e, s = null) {
    return zi(this, e, s);
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
    return e.myStripParent = gl(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
class vs extends Xi {
  constructor(e) {
    var t = (...bh) => (super(...bh), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
    c(this, "parent"), c(this, "segmentType"), c(this, "completed"), //used by vis only
    c(this, "rowSegment"), //used by cuts
    c(this, "placementOrder"), c(this, "hasBeamTrim"), this);
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.shapes = C(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = C(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = C(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = C(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = C(e == null ? void 0 : e.parent) ? e.parent : null, this.children = C(e == null ? void 0 : e.children) ? e.children : [], this.siblings = C(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = C(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = C(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = C(e == null ? void 0 : e.cutDirection) ? e.cutDirection : "l", this.hasBeamTrim = C(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1);
  }
  validateSegment(e) {
    var s, n;
    (ce.lessThanOrEqualTo(e.w, 0) || ce.lessThanOrEqualTo(e.l, 0)) && new re({
      item: this,
      message: `Zero / negative dimension - l: ${e.l}, w: ${e.w}.`,
      field: [["l"], ["w"]]
    }), (ce.lessThan(e.x, 0) || ce.lessThan(e.y, 0)) && new re({
      item: this,
      message: `Negative position - x: ${e.x}, y: ${e.y}.`,
      field: [["x"], ["y"]]
    }), e != null && e.stock && (ce.greaterThan(e.x + e.l, e.stock.l) || ce.greaterThan(e.y + e.w, e.stock.w)) && new re({
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
class ut extends Tt {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = qt(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
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
    const s = ho(this.direction);
    let n = 0;
    for (const l of this.shapes)
      this.positions.push({
        shape: l.id,
        [s]: e,
        [fo(s)]: 0,
        rot: l.rot.valueOf()
      }), l.inGroup = !0, e += n === this.shapes.length - 1 ? l[this.direction] : l[this.direction] + l.getMinSpacing(this.container), n++;
    this[this.direction] = e;
    const r = ci(this.direction), o = this.shapes.reduce((l, a) => a[r] > l ? a[r] : l, 0);
    if (this[r] = o, vn()) {
      const l = this.shapes.slice(0, -1).reduce((h, m) => h + m.getMinSpacing(this.container), 0), u = this.shapes.reduce((h, m) => h + m[this.direction], 0) + l;
      bn([
        () => Ai(ce.equalTo(u, this[this.direction]), "group dimension is incorrect in direction").to.be.true,
        () => Ai(e, "currentPosition is incorrect in direction").to.equal(this[this.direction]),
        () => Ai(o, "group dimension in other direction is not correct").to.equal(this[r])
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
      if (!is(s, n.rot, e)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const e = ci(this.direction);
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
      if (n.x = this.x + r.x, n.y = this.y + r.y, !is(n, r.rot, e)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(e) {
    this.orientateShapes(e), uo(this, e);
  }
  clone(e = []) {
    const n = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container, l = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = e, a.id = n, new ut(a);
  }
  compress() {
    const e = super.compress.call(this);
    return e.direction = this.direction, e.positions = structuredClone(this.positions), e.shapes = this.shapes.map((s) => s.compress()), e.type = this.type, e.cloneType = "group", e;
  }
}
function ch(i) {
  if (!i.length) return "n";
  const t = i.map((e) => e.grain).filter((e) => e);
  return t.length ? t.every((e) => e === "l") ? "l" : t.every((e) => e === "w") ? "w" : t.some((e) => e === "l" || e === "w") ? "y" : "n" : "n";
}
function pl(i) {
  return i.shapes !== void 0;
}
function Ot(i) {
  return i instanceof ut && i.type !== "user";
}
function En(i) {
  return i instanceof ut && i.type === "user";
}
function Ft(i) {
  return i instanceof ms;
}
function gt(i) {
  return i instanceof ys;
}
function Ce(i) {
  return i instanceof Yi;
}
function Dt(i) {
  return i instanceof Gt;
}
function bs(i) {
  return i instanceof Xi;
}
function ct(i) {
  return i instanceof Tt && !(i instanceof ut);
}
function gl(i) {
  return i instanceof Tt || i instanceof ut;
}
function ml(i) {
  return i instanceof vs;
}
function yl(i) {
  return i instanceof ut ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof ms ? "inputUserGroup" : i instanceof ys ? "inputStock" : i instanceof Yi ? "inputShape" : i instanceof Gt ? "stock" : i instanceof Xi ? "container" : i instanceof Tt && !(i instanceof ut) ? "shape" : i instanceof vs ? "segment" : i instanceof An ? "offcut" : i instanceof _t ? "saw" : i instanceof ei ? "rectangle" : null;
}
function Hs(i, t) {
  return hr(i, t);
}
function Et(i, t) {
  return Kt(i, t);
}
function vl(i, t, e) {
  dr(i, t, e);
}
function C(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function Jt(i, t = !1) {
  if (!C(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => C(s) && s) : e.some((s) => C(s));
}
function hh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return gt(e) && e.autoAdd ? s = 1 : s = C(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function dh(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = bl(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function bl(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function wl() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function rs(i = 0, t, e = null, s = null, n = null) {
  if (!Ce(e) && !Ft || s === "stock") return !1;
  let r, o;
  if (Ce(e) ? r = e.orientationLock : Ft(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || Ft(e))
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
function Gs(i, t, e = null, s = null, n = null) {
  if (!Ce(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? rs(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Sl(i) {
  i.banding && (i.banding = Ni(i.banding, "cc")), i.trim && (i.trim = Ni(i.trim, "cc"));
}
function fh(i, t = 0) {
  return ct(i) || Ce(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && Sl(i)), i;
}
function Ni(i, t = "cc", e = {
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
const { addNotice: lt } = ds(), {
  inputs: Ie,
  totalInputShapes: xl,
  totalInputStock: kl,
  createStockList: Cl,
  createShapeList: Il,
  validateInputShapes: Pl,
  validateInputStock: Rn,
  removeShape: Ns,
  removeStock: Ws
} = un(), Ll = {
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
}, $l = () => {
  var i, t;
  if ((i = Ie == null ? void 0 : Ie.inputStock) != null && i.value) {
    for (let e = Ie.inputStock.value.length - 1; e >= 0; e--) {
      const s = Ie.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ie.inputStock.value.length > 1 || e !== 0) && Ws(s.listId);
    }
    if ((t = Ie == null ? void 0 : Ie.inputShapes) != null && t.value)
      for (let e = Ie.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Ie.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Ie.inputShapes.value.length > 1 || e !== 0) && Ns(s.listId);
      }
  }
}, Tl = (i, t = !1) => {
  var s, n;
  if (!t) return [];
  const e = [];
  if (!((s = Ie == null ? void 0 : Ie.inputShapes) != null && s.value)) return e;
  for (let r = Ie.inputShapes.value.length - 1; r >= 0; r--) {
    const o = Ie.inputShapes.value[r];
    if (!o) continue;
    if (!C(o.material)) {
      e.push(new re({
        item: o,
        message: "no_material",
        listId: [o.listId]
      }));
      continue;
    }
    const l = i.items.find((a) => a._id === o.material);
    (n = l == null ? void 0 : l.t) != null && n.length && (o.t ? l.t.includes(o.t) || e.push(new re({
      item: o,
      message: "invalid_thickness",
      listId: [o.listId]
    })) : e.push(new re({
      item: o,
      message: "no_thickness",
      listId: [o.listId]
    })));
  }
  return e;
}, Mn = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...Ll,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, Ol = (i = {}) => {
  const t = Mn(i), e = t.t;
  $l();
  const s = [];
  t.useInventory || s.push(...Rn(i == null ? void 0 : i.sawData)), s.push(...Pl({
    saw: t.sawData,
    partTrim: O({ v: t.partTrim }),
    useInventory: t.useInventory
  }));
  const n = Pt(s);
  return n.length > 0 ? (console.warn("Validation errors:", JSON.parse(JSON.stringify(n))), lt({
    type: "error",
    message: e("inputs_issue", { x: "part" }),
    additional: n.map((r) => e(r.message))
  }), !1) : !0;
};
async function Dl(i) {
  var s, n;
  const t = Mn(i), e = t.t;
  try {
    if (!Ol(t))
      return { valid: !1 };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (xl.value > t.maxShapes || kl.value > t.maxStock))
      return t.onLimit(), { valid: !1 };
    if (t.useInventory) {
      const d = Tl(t.materialStore, !0), g = Pt(d);
      if (g.length > 0)
        return lt({
          type: "error",
          message: e("inputs_issue", { x: "material" }),
          additional: g.map((w) => e(w.message))
        }), { valid: !1 };
    } else {
      const d = Rn(), g = Pt(d);
      if (g.length > 0)
        return lt({
          type: "error",
          message: e("inputs_issue", { x: "stock" }),
          additional: g.map((w) => e(w.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new _t(t.selectedSaw) : new _t(t.sawData), o = Pt(r.issues);
    if (o.length > 0)
      return lt({
        type: "error",
        message: e("inputs_issue", { x: "saw" }),
        additional: o.map((d) => e(d.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await Cl(r), u = Pt(a);
    if (u.length > 0)
      return lt({
        type: "error",
        message: e("inputs_issue", { x: "stock" }),
        additional: u.map((d) => e(d.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return lt({
        type: "error",
        message: e("no_stock")
      }), { valid: !1 };
    const { shapeList: h, issues: m } = await Il({
      orientationModel: t.orientationModel
    }), x = Pt(m);
    if (x.length > 0)
      return lt({
        type: "error",
        message: e("inputs_issue", { x: "part" }),
        additional: x.map((d) => e(d.message))
      }), { valid: !1 };
    if (!(h != null && h.length))
      return lt({
        type: "error",
        message: e("no_parts_list")
      }), { valid: !1 };
    if (((n = (s = Ie.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      Ie.userGroups.value.forEach((w) => w.populateParentID(Ie.inputShapes.value));
      const d = hl(
        Ie.userGroups.value,
        Ie.inputShapes.value
      ), g = Pt(d);
      if (g.length > 0)
        return lt({
          type: "error",
          message: e("inputs_issue", { x: "group" }),
          additional: g.map((w) => e(w.message))
        }), { valid: !1 };
    }
    return {
      valid: !0,
      saw: r,
      stockList: l,
      shapeList: h
    };
  } catch (r) {
    return console.error("Validation error:", r), lt({
      type: "error",
      message: e("unexpected_error"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
  }
}
function Al(i) {
  return !i || !Jt(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function ws(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function Ss(i) {
  return `${i}Options`;
}
function El(i, t, e) {
  const s = Ss(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function Rl(i, t, e = !0) {
  if (!ws(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    xs(i, t, r, e);
  e && Fn(i, t, "all");
}
function xs(i, t, e, s = !0) {
  s && Fn(i, t, e), e !== "all" && ws(i, t) && (i[t][e] = !1);
}
function Fn(i, t, e) {
  if (!ws(i, t, "Options")) return;
  const n = i[`${t}Options`][e];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function ks(i, t, e, s, n, r) {
  var h;
  const o = t + "Options";
  if (!((h = i == null ? void 0 : i[o]) != null && h[e]) || !(s in i[o][e])) return;
  hi(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((m) => m);
  if (!Array.isArray(a)) return;
  const u = Wi(i, t, e, r);
  hi(i, t, e, !!qe(u));
}
function _n(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Wi(i, t, "all", r), u = i[o][e], h = Object.values(u || {}).filter((m) => m);
  for (const m of l)
    m !== "all" && (n.includes(m) || (ks(i, t, m, e, s, r), Array.isArray(h) || hi(i, t, m, !1), hi(i, t, m, !!qe(a))));
}
function hi(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = Ss(t), r = Al((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
  s ? i[t][e] = r || !0 : i[t][e] = !1;
}
function Wi(i, t, e, s) {
  var a;
  const n = t + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[e])) return !1;
  const r = i[n][e], o = Object.values(r || {}).filter((u) => u);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && Dn(e) && qe(l) ? ll(i, e, l) / 1e3 : l;
}
function ph(i) {
  i != null && i.type && delete i.type, Ml.call(this, i);
}
function Ml(i) {
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
function Fl(i) {
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
const _l = { id: "mini-stock-nav" }, ql = ["onMousedown"], Bl = { class: "id" }, Hl = /* @__PURE__ */ De({
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
    return (r, o) => (v(), k("div", _l, [
      (v(!0), k(we, null, Oe(e.stockList, (l, a) => (v(), k("button", {
        key: a,
        class: ke(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: xe({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        R("div", Bl, ie(a + 1), 1),
        as(R("div", { class: "stack legibility" }, ie(l.stack), 513), [
          [us, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, ql))), 128))
    ]));
  }
}), ti = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, Gl = {
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
}, Nl = { id: "spinner" }, Wl = ["width", "height"], Ul = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function jl(i, t, e, s, n, r) {
  return v(), k("div", Nl, [
    e.complete ? G("", !0) : (v(), k("svg", {
      key: 0,
      class: "loading",
      style: xe({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      vr('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, Wl)),
    e.complete ? (v(), k("svg", {
      key: 1,
      class: "complete",
      style: xe({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      R("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : G("", !0),
    e.showNumber ? (v(), k("div", Ul, ie(e.number), 1)) : G("", !0)
  ]);
}
const Us = /* @__PURE__ */ ti(Gl, [["render", jl]]);
function zl(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function Vl(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function Yl(i, t, e, s, n = []) {
  const r = Vl(i, e, s);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((h) => h.id)), u = o.map((h) => h.id).filter((h) => !a.has(h)).map((h) => `'${h}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return n.length && (o.sort((a, u) => {
    const h = n.indexOf(a.id), m = n.indexOf(u.id);
    return h === -1 ? 1 : m === -1 ? -1 : h - m;
  }), console.log(o)), o;
}
const Xl = ["id"], Kl = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, Zl = /* @__PURE__ */ De({
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
    const e = i, s = t, n = H(0), r = H(!1), o = (y, $, X, I) => {
      if (!Ce(X) || $ === 0)
        return y;
      const M = l();
      return $ === 1 || $ === 2 && I !== "n" && y ? M : y;
    }, l = (y) => {
      const $ = { ...e, ...y };
      if (!$.rectangle || !Ce($.rectangle)) return "";
      let X = "";
      switch ($.orientationModel) {
        case 0:
          X = V.value;
          break;
        case 1:
          $.stockGrain === "y" || $.stockGrain === "n" ? X = $.rectangle.l >= $.rectangle.w ? "l" : "w" : $.rectangle.l >= $.rectangle.w ? X = $.stockGrain : X = X = $.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          X = $.rectangle.l >= $.rectangle.w ? "l" : "w";
          break;
      }
      return X;
    }, a = () => {
      if (e.disabled || j.value.length <= 1) return;
      let y = null;
      [1, 2].includes(e.orientationModel) ? y = m() : y = h(), n.value = y;
    }, u = (y) => {
      const $ = j.value.findIndex((X) => X === y);
      return $ === -1 ? 0 : $;
    }, h = () => {
      let y = 0;
      return y = u(V.value) + 1, y > j.value.length - 1 && (y = 0), y;
    }, m = () => {
      let y = 0;
      if (V.value)
        y = j.value.findIndex(($) => $ === "");
      else {
        const $ = l();
        y = j.value.findIndex((X) => X === $);
      }
      return y;
    }, x = (y) => {
      s("updateOrientation", y);
    }, d = () => {
      const y = V.value;
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
        V.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (y !== V.value) {
        w(y);
        return;
      }
      if (n.value = u(V.value), !!Ce(e.rectangle)) {
        if (e.orientationModel === 1) {
          const $ = ae.value ? l() : V.value;
          w($);
          return;
        }
        if (e.orientationModel === 2) {
          let $;
          ae.value ? $ = e.stockGrain !== "n" ? l() : "" : $ = V.value, w($);
        }
      }
    }, w = (y) => {
      n.value = u(y), x(y);
    }, B = () => {
      const y = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], $ = ["l", "w", "y", "n"], X = [0, 1, 2], I = {
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
      }, se = [];
      y.forEach((A) => {
        $.forEach((_) => {
          X.forEach((z) => {
            const te = new Yi({
              l: A.l,
              w: A.w
            }), ve = l({
              orientationModel: z,
              rectangle: te,
              stockGrain: _
            });
            let de = "";
            te.l === te.w ? de = "l === w" : te.l > te.w ? de = "l >= w" : de = "w > l";
            const Ne = ["l", "w", "y"].includes(_) ? I : M;
            se.push({
              Model: z,
              "Stock grain": _,
              "Stock grain description": le[_],
              Dimensions: de,
              "Orientation lock": ve || "N/A",
              "Orientation Lock description": Ne[ve] || "N/A"
            });
          });
        });
      }), se.sort((A, _) => {
        if (A.Model !== _.Model)
          return A.Model - _.Model;
        if (A["Stock grain"] !== _["Stock grain"])
          return A["Stock grain"].localeCompare(_["Stock grain"]);
        const z = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return z[A.Dimensions] - z[_.Dimensions];
      }), console.table(se);
    }, j = Z(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Ft(e.rectangle)) return ["l", "w"];
      let y = ["", "l", "w"];
      return e.rectangle.multiEdit && (y = [" ", "", "l", "w"]), U.value && (y = y.filter(($) => $ !== "w")), y;
    }), U = Z(() => {
      var y, $, X, I;
      return Ce(e.rectangle) || gt(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((y = e.rectangle) != null && y.l) && (($ = e.rectangle) != null && $.w) ? ((X = e.rectangle) == null ? void 0 : X.l) === ((I = e.rectangle) == null ? void 0 : I.w) : !1;
    }), V = Z(() => {
      let y = "";
      return Ft(e.rectangle) ? y = e.rectangle.direction : Ce(e.rectangle) ? y = e.rectangle.orientationLock ?? "" : gt(e.rectangle) && (y = e.rectangle.grain ?? ""), y;
    }), J = Z(() => Ft(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), ae = Z(() => !J.value.l && !J.value.w), W = Z(() => rs(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), Y = Z(() => {
      var I;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (gt(e.rectangle) || e.rectangleType === "stock")
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
      }, $ = e.stockGrain || "default";
      let X = "default";
      return Ce(e.rectangle) || e.rectangleType === "shape" ? X = d() : Ft(e.rectangle) && (X = e.rectangle.direction || "default"), ((I = y[$]) == null ? void 0 : I[X]) || y[$].default;
    });
    return Pe(n, (y, $) => {
      r.value && $ !== void 0 && x(j.value[y]);
    }, { immediate: !1 }), Pe(J, (y, $) => {
      if (!e.rectangle || e.orientationModel === 0 || !Ce(e.rectangle) || Ce(e.rectangle) && (e.orientationModel === 2 && $.l && $.w && !V.value || e.stockGrain === "n" && !V.value))
        return;
      const X = l();
      V.value !== X && x(X);
    }, { immediate: !1 }), Pe(() => e.stockGrain, (y, $) => {
      y !== $ && g();
    }, { immediate: !0 }), ht(() => {
      g(), Ze(() => {
        r.value = !0, e.debug && B();
      });
    }), (y, $) => (v(), k("div", {
      id: y.id,
      class: ke(["orientation-button", { rot: W.value, square: U.value, disabled: y.disabled, [Y.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: xe({
        backgroundColor: y.buttonBackground
      }),
      onClick: a
    }, [
      Y.value === "delete" ? (v(), k("svg", Kl, $[0] || ($[0] = [
        R("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : G("", !0),
      Y.value === "freeRotation" ? (v(), k("svg", {
        key: 1,
        class: "arrow",
        style: xe({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, $[1] || ($[1] = [
        R("g", null, [
          R("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          R("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          R("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          R("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : G("", !0),
      Y.value === "leftRight" ? (v(), k("svg", {
        key: 2,
        class: "arrow",
        style: xe({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, $[2] || ($[2] = [
        R("g", null, [
          R("path", { d: "m5.408 19.408h61.095" }),
          R("g", null, [
            R("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            R("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      Y.value === "topBottom" ? (v(), k("svg", {
        key: 3,
        class: "arrow",
        style: xe({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, $[3] || ($[3] = [
        R("g", null, [
          R("path", { d: "m19.408 66.503v-61.095" }),
          R("g", null, [
            R("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            R("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      Y.value === "grainLeftRight" ? (v(), k("svg", {
        key: 4,
        class: "grain",
        style: xe({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, $[4] || ($[4] = [
        R("g", null, [
          R("path", { d: "m3 3h99.887" }),
          R("path", { d: "m3.113 32h99.887" }),
          R("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : G("", !0),
      Y.value === "grainTopBottom" ? (v(), k("svg", {
        key: 5,
        class: "grain",
        style: xe({
          stroke: y.iconColor ? y.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, $[5] || ($[5] = [
        R("g", null, [
          R("path", { d: "m61 3v99.887" }),
          R("path", { d: "m32 3.113v99.887" }),
          R("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : G("", !0)
    ], 14, Xl));
  }
}), Jl = ["id"], Ql = /* @__PURE__ */ De({
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
    Pe(() => e.inputShape.orientationLock, () => {
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = Gs(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Ni(l, a, {
        x1: "y2",
        x2: "y1",
        y1: "x1",
        y2: "x2"
      })), n.value = l;
    }, { deep: !0, immediate: !0 }), Pe([
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
      const a = Gs(
        e.orientationModel,
        e.stockGrain,
        e.inputShape
      );
      a && (l = Ni(l, a, {
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
    return ht(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), cs(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (v(), k("div", {
      id: l.id,
      class: ke(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      R("div", {
        class: ke(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        R("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, Jl));
  }
}), ea = (i) => {
  i = i.replace(/['"]+/g, "");
  try {
    return new ui(i).valueOf();
  } catch {
    return null;
  }
};
function ta({
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
          const u = ea(a);
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
function ia({
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
function sa({
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
const na = ["id", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "required", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], ra = /* @__PURE__ */ De({
  __name: "TextInput",
  props: {
    type: {},
    inputType: {},
    inputMode: {},
    placeholder: {},
    focus: { type: Boolean },
    allowZero: { type: Boolean },
    min: {},
    max: {},
    default: {},
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
      handleCompositionEnd: m,
      handlePaste: x
    } = ta({
      props: e,
      emit: s,
      isMounted: n
    });
    return ht(() => {
      (C(e.default) && e.value === void 0 || e.value === null) && s("update:value", e.default), e.focus && Ze(() => {
        var d;
        (d = r.value) == null || d.focus();
      });
    }), cs(() => {
      n.value = !1;
    }), (d, g) => (v(), k("input", li(d.$attrs, {
      id: e.id,
      ref_key: "inputRef",
      ref: r,
      value: e.value,
      inputmode: e.inputMode,
      type: e.inputType,
      placeholder: e.placeholder,
      disabled: e.disabled,
      default: e.default,
      readonly: e.readonly,
      required: e.required,
      min: e.min,
      max: e.max,
      "aria-label": e.ariaLabel,
      "aria-invalid": !!e.issue,
      "aria-describedby": e.errorId,
      onInput: g[0] || (g[0] = //@ts-ignore
      (...w) => S(o) && S(o)(...w)),
      onFocus: g[1] || (g[1] = //@ts-ignore
      (...w) => S(l) && S(l)(...w)),
      onBlur: g[2] || (g[2] = //@ts-ignore
      (...w) => S(a) && S(a)(...w)),
      onKeydown: g[3] || (g[3] = //@ts-ignore
      (...w) => S(u) && S(u)(...w)),
      onCompositionstart: g[4] || (g[4] = //@ts-ignore
      (...w) => S(h) && S(h)(...w)),
      onCompositionend: g[5] || (g[5] = //@ts-ignore
      (...w) => S(m) && S(m)(...w)),
      onPaste: g[6] || (g[6] = //@ts-ignore
      (...w) => S(x) && S(x)(...w))
    }), null, 16, na));
  }
}), oa = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], la = /* @__PURE__ */ De({
  __name: "CheckBoxInput",
  props: {
    trueValue: {},
    falseValue: {},
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
    } = sa({
      props: e,
      emit: s,
      isMounted: n
    });
    return (u, h) => (v(), k("input", {
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
      (...m) => S(o) && S(o)(...m)),
      onFocus: h[1] || (h[1] = //@ts-ignore
      (...m) => S(l) && S(l)(...m)),
      onBlur: h[2] || (h[2] = //@ts-ignore
      (...m) => S(a) && S(a)(...m))
    }, null, 40, oa));
  }
}), aa = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], ua = ["disabled", "selected"], ca = {
  key: 0,
  value: " "
}, ha = ["hidden", "value", "disabled"], da = /* @__PURE__ */ De({
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
      var m, x, d;
      return {
        value: h.value,
        label: ((m = h.label) == null ? void 0 : m.toUpperCase()) ?? ((d = (x = h.value) == null ? void 0 : x.toString()) == null ? void 0 : d.toUpperCase()),
        hidden: h.hidden ?? !1,
        disabled: h.disabled ?? !1
      };
    })), {
      handleSelectChange: l,
      handleFocus: a,
      handleBlur: u
    } = ia({
      props: e,
      emit: s,
      isMounted: n
    });
    return (h, m) => {
      var x, d, g, w;
      return v(), k("select", li(h.$attrs, {
        id: e.id,
        ref_key: "inputRef",
        ref: r,
        value: e.value,
        disabled: e.readonly || e.disabled,
        required: e.required,
        "aria-label": e.ariaLabel,
        "aria-invalid": !!e.issue,
        "aria-describedby": e.errorId,
        onChange: m[0] || (m[0] = //@ts-ignore
        (...B) => S(l) && S(l)(...B)),
        onFocus: m[1] || (m[1] = //@ts-ignore
        (...B) => S(a) && S(a)(...B)),
        onBlur: m[2] || (m[2] = //@ts-ignore
        (...B) => S(u) && S(u)(...B))
      }), [
        R("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, ie(((d = (x = e.text) == null ? void 0 : x.select) == null ? void 0 : d.toUpperCase()) ?? "SELECT"), 9, ua),
        e.multiEdit ? (v(), k("option", ca, ie(((w = (g = e.text) == null ? void 0 : g.delete) == null ? void 0 : w.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
        (v(!0), k(we, null, Oe(o.value, (B) => (v(), k("option", {
          key: B.value,
          hidden: B.hidden,
          value: B.value,
          disabled: B.disabled
        }, ie(B.label), 9, ha))), 128))
      ], 16, aa);
    };
  }
}), fa = ["for"], pa = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, js = /* @__PURE__ */ De({
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
      Xt(ie(t.label) + " ", 1),
      t.required ? (v(), k("span", pa, "*")) : G("", !0)
    ], 8, fa));
  }
}), ga = ["data-field-id"], ma = ["disabled", "selected"], ya = {
  key: 0,
  value: " "
}, va = ["hidden", "value", "disabled"], at = /* @__PURE__ */ De({
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
    const e = t, s = i, n = H(null), r = H(null), o = H(!0), l = H(s.numberFormat), a = Z(() => s.custom ? "custom-" + s.id : s.id), u = Z(() => `${a.value}-error`), h = Z(() => s.label || s.placeholder), m = Z(() => Y(s.type, s.numberFormat)), x = Z(() => y(s.type, s.numberFormat)), d = Z(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), g = Z(() => {
      let I = s.value;
      if (!C(s.value) && C(s.default) && (I = s.default), s.type !== "unitDependent" || !I) return I;
      try {
        return O({ v: I, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), w = Z(() => s.options.map((I) => {
      var M, le;
      return {
        value: I.value,
        label: ((M = I.label) == null ? void 0 : M.toUpperCase()) || ((le = I.value) == null ? void 0 : le.toString().toUpperCase()),
        hidden: I.hidden || !1,
        disabled: I.disabled || !1
      };
    })), B = Z(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), j = Z(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": h.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), U = Z(() => ({
      ...j.value,
      type: s.type,
      inputMode: x.value,
      inputType: m.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      numberFormat: s.numberFormat,
      default: s.default
    })), V = Z(() => ({
      ...j.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), J = Z(() => ({
      ...j.value,
      options: w.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      text: s.text
    })), ae = (I) => {
      r.value = I;
    }, W = (I) => s.label && s.enableLabel && s.labelPosition === I, Y = (I, M) => {
      if (I === "unitDependent")
        return M === "fraction" ? "text" : "number";
      switch (I) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, y = (I, M) => {
      if (I === "unitDependent")
        return M === "fraction" ? "text" : "decimal";
      switch (I) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, $ = (I) => {
      e("update:value", I);
    }, X = (I, M) => {
      I.valid === void 0 || I.valid === !0 ? (o.value = !0, e("validation", n.value, I)) : I.valid === !1 && I.message && (o.value = !1, console.warn(`Field validation error for field ${M} - ${I.message}`), e("validation", n.value, I));
    };
    return Pe(() => s.numberFormat, (I, M) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && I !== M && s.value)
          try {
            const le = O({ v: s.value, nf: I });
            e("update:value", le);
          } catch {
            e("update:value", I === "decimal" ? 0 : "0");
          }
        l.value = I;
      }
    }), (I, M) => (v(), k("div", {
      ref_key: "fieldRef",
      ref: n,
      class: ke(["input-wrapper", B.value]),
      "data-field-id": a.value
    }, [
      W("first") ? (v(), pe(js, {
        key: 0,
        id: a.value,
        label: I.label,
        required: I.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      d.value ? (v(), pe(ra, li({
        key: 1,
        ref: ae
      }, U.value, {
        "input-type": m.value,
        "input-mode": x.value,
        value: g.value,
        onValidation: X,
        "onUpdate:value": $
      }), null, 16, ["input-type", "input-mode", "value"])) : I.type === "checkbox" ? (v(), pe(la, li({
        key: 2,
        ref: ae,
        type: "checkbox"
      }, V.value, {
        checked: I.value === I.trueValue,
        "onUpdate:value": M[0] || (M[0] = (le) => e("update:value", le))
      }), null, 16, ["checked"])) : I.type === "select" ? (v(), pe(da, li({
        key: 3,
        ref: ae
      }, J.value, {
        "onUpdate:value": M[1] || (M[1] = (le) => e("update:value", le))
      }), {
        default: hs(() => {
          var le, se, A, _;
          return [
            R("option", {
              value: "",
              disabled: I.selectFirstOptionDisabled,
              selected: !I.value
            }, ie(((se = (le = I.text) == null ? void 0 : le.select) == null ? void 0 : se.toUpperCase()) ?? "SELECT"), 9, ma),
            I.multiEdit ? (v(), k("option", ya, ie(((_ = (A = I.text) == null ? void 0 : A.delete) == null ? void 0 : _.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
            (v(!0), k(we, null, Oe(w.value, (z) => (v(), k("option", {
              key: z.value,
              hidden: z.hidden,
              value: z.value,
              disabled: z.disabled
            }, ie(z.label), 9, va))), 128))
          ];
        }),
        _: 1
      }, 16)) : G("", !0),
      W("last") ? (v(), pe(js, {
        key: 4,
        id: a.value,
        label: I.label,
        required: I.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      br(I.$slots, "default")
    ], 10, ga));
  }
}), ba = {
  key: 0,
  class: "inputs"
}, wa = { class: "label" }, Sa = { class: "label" }, xa = { class: "label" }, ka = ["onClick"], Ca = { class: "price" }, Ia = ["aria-label"], os = /* @__PURE__ */ De({
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
    const e = i, s = t, { t: n } = Ui(["main", "errors"]), r = H(!1), o = Z(() => e.extraType + "Options"), l = Z(() => {
      var w;
      if (!((w = e.allOptions) != null && w.length)) return "auto";
      const d = e.allOptions.length;
      return d ? `repeat(${d + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), a = (d, g) => {
      s("update-all", e.shape, e.extraType, d, g);
    }, u = (d, g, w) => {
      s("set", e.shape, e.extraType, d, g, w);
    }, h = (d, g, w, B, j) => {
      var ae;
      if (!d) return [];
      const U = (ae = g == null ? void 0 : g[w]) == null ? void 0 : ae[B];
      if (!U)
        return console.error(`ExtrasInputs: cannot find pricing options for ${w} > ${B}`), [];
      const V = Object.values(U);
      if (!V.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${w} > ${B}`), [];
      const J = V.filter((W) => typeof W == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(d, J, j) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, m = (d) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const g = e.getPrice(e.shape, e.extraType, d);
      return g ? e.formatPrice(g) : "";
    }, x = () => {
      const d = [];
      e.extraType in e.shape || new re(
        {
          item: e.shape,
          message: `The extra type '${e.extraType}' does not exist in the part`
        }
      ), o.value in e.shape || new re(
        {
          item: e.shape,
          message: `The options key '${o.value}' does not exist in the part`
        }
      ), d.length && (r.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + d.map((g) => g.message).join(" ")));
    };
    return ht(() => x()), (d, g) => {
      var B, j, U, V, J, ae, W, Y;
      const w = Bt("font-awesome-icon");
      return r.value ? G("", !0) : (v(), k("div", {
        key: 0,
        class: ke(["extras group", [d.extraType]]),
        style: xe({ "grid-column-end": "span " + d.partColumns })
      }, [
        d.allOptions.length === 1 && d.allOptions[0].length === 1 ? (v(), k("div", ba, [
          R("div", wa, ie((j = (B = d.allOptions) == null ? void 0 : B[0]) == null ? void 0 : j[0]), 1),
          R("div", null, [
            (U = d.shape) != null && U[o.value] && "all" in d.shape[o.value] ? (v(), pe(at, {
              key: 0,
              id: `${d.extraType}-all-${d.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: S(Vt)(S(n)("all")),
              "true-value": (J = (V = d.allOptions) == null ? void 0 : V[0]) == null ? void 0 : J[0],
              "false-value": "",
              value: (W = d.shape[o.value].all) == null ? void 0 : W[(ae = d.labels) == null ? void 0 : ae[0]],
              "onUpdate:value": g[0] || (g[0] = (y) => {
                var $, X;
                u("all", ($ = d.labels) == null ? void 0 : $[0], y), a((X = d.labels) == null ? void 0 : X[0], y);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : G("", !0)
          ]),
          (v(!0), k(we, null, Oe(d.extraKeys, (y) => {
            var $, X, I, M, le, se;
            return v(), k("div", { key: y }, [
              ($ = d.labels) != null && $[0] && ((I = (X = d.shape) == null ? void 0 : X[o.value]) != null && I[y]) && d.labels[0] in d.shape[o.value][y] ? (v(), pe(at, {
                key: 0,
                id: `${d.extraType}-${y}-${d.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: S(Vt)(S(n)(((M = d.userFriendlyFieldMap) == null ? void 0 : M[y]) || y)),
                "true-value": (se = (le = d.allOptions) == null ? void 0 : le[0]) == null ? void 0 : se[0],
                "false-value": "",
                value: d.shape[o.value][y][d.labels[0]],
                "onUpdate:value": (A) => u(y, d.labels[0], A)
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
          (Y = d.shape) != null && Y[o.value] && "all" in d.shape[o.value] ? (v(), k(we, { key: 0 }, [
            R("div", Sa, ie(S(Vt)(S(n)("all"))), 1),
            (v(!0), k(we, null, Oe(d.allOptions, (y, $) => {
              var X, I;
              return v(), pe(at, {
                id: `${d.extraType}-all-${d.labels[$]}-${$}-${d.shapeIndex}`,
                key: `${d.extraType}-all-${d.labels[$]}-${$}-${d.shapeIndex}`,
                type: "select",
                disabled: h(d.pricing, d.shape, o.value, "all", $).length === 0,
                options: h(d.pricing, d.shape, o.value, "all", $).map((M) => ({ value: M, label: M })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: (I = d.shape[o.value].all) == null ? void 0 : I[(X = d.labels) == null ? void 0 : X[$]],
                "onUpdate:value": (M) => {
                  var le, se;
                  u("all", (le = d.labels) == null ? void 0 : le[$], M), a((se = d.labels) == null ? void 0 : se[$], M);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            g[2] || (g[2] = R("div", null, null, -1)),
            g[3] || (g[3] = R("div", null, null, -1))
          ], 64)) : G("", !0),
          (v(!0), k(we, null, Oe(d.extraKeys, (y) => {
            var $, X;
            return v(), k(we, { key: y }, [
              ($ = d.shape) != null && $[o.value] && y in d.shape[o.value] ? (v(), k(we, { key: 0 }, [
                R("div", xa, ie(S(Vt)(S(n)(((X = d.userFriendlyFieldMap) == null ? void 0 : X[y]) || y))), 1),
                (v(!0), k(we, null, Oe(d.allOptions, (I, M) => {
                  var le;
                  return v(), pe(at, {
                    id: `${d.extraType}-${y}-${d.labels[M]}-${M}-${d.shapeIndex}`,
                    key: `${d.extraType}-${y}-${d.labels[M]}-${M}-${d.shapeIndex}`,
                    type: "select",
                    disabled: h(d.pricing, d.shape, o.value, y, M).length === 0,
                    options: h(d.pricing, d.shape, o.value, y, M).map((se) => ({
                      value: se,
                      label: se
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: d.shape[o.value][y][(le = d.labels) == null ? void 0 : le[M]],
                    "onUpdate:value": (se) => {
                      var A;
                      return u(y, (A = d.labels) == null ? void 0 : A[M], se);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : G("", !0),
              R("div", {
                class: "delete",
                onClick: () => S(xs)(d.shape, d.extraType, y)
              }, [
                ye(w, { icon: ["fass", "trash"] })
              ], 8, ka),
              R("div", Ca, ie(m(y) || S(n)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        R("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": S(n)("action_item", { a: "delete", i: d.extraLabel }),
          onClick: g[1] || (g[1] = () => S(Rl)(d.shape, d.extraType, !0))
        }, [
          ye(w, { icon: ["fass", "trash"] }),
          Xt(" " + ie(S(n)("action_item", { a: "delete", i: d.extraLabel })), 1)
        ], 8, Ia)
      ], 6));
    };
  }
}), Pa = ["id", "disabled"], La = { class: "icon" }, $a = /* @__PURE__ */ De({
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
      var a, u, h, m;
      const l = Bt("font-awesome-icon");
      return v(), k("button", {
        id: r.id,
        class: ke(["finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (m = (h = r.inputShape) == null ? void 0 : h.finish) == null ? void 0 : m.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        R("div", La, [
          ye(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = R("div", { class: "indicator" }, null, -1))
      ], 10, Pa);
    };
  }
}), Ta = De({
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
      return gs(this.inputShape);
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
}), Oa = ["id", "disabled"];
function Da(i, t, e, s, n, r) {
  const o = Bt("font-awesome-icon");
  return v(), k("button", {
    id: i.id,
    class: ke(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    ye(o, { icon: ["fass", "hammer"] })
  ], 10, Oa);
}
const Aa = /* @__PURE__ */ ti(Ta, [["render", Da]]), Ea = { id: "uploader" }, Ra = {
  key: 0,
  class: "debug"
}, Ma = {
  key: 1,
  class: "selected-files"
}, Fa = ["src"], _a = ["onClick"], qa = !0, Ba = /* @__PURE__ */ De({
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
    const e = Lt(() => Promise.resolve().then(() => Zi)), s = H(null), n = H({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (d) => ["image/jpeg", "image/jpg", "image/png"].includes(d.type), a = () => {
      var d;
      (d = s.value) == null || d.click();
    }, u = (d) => {
      const g = d.target, w = g.files;
      if (!w) return;
      const B = Array.from(w), j = B.filter((y) => !l(y));
      if (j.length > 0) {
        const y = j.map(($) => $.name).join(", ");
        alert(`Invalid file type(s): ${y}
Only JPG and PNG files are allowed.`), g.value = "";
        return;
      }
      const U = n.value.files || [];
      if (U.length + B.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), g.value = "";
        return;
      }
      const J = [...U, ...B], ae = h(J), W = J.map((y, $) => ({
        originalName: y.name,
        newName: `${r.prefix}-${$ + 1}-${r.uniqueId}${m(y.name)}`
      })), Y = {
        shapeId: r.shapeId,
        files: J,
        previewUrls: ae,
        metadata: W
      };
      n.value = Y, o("update", Y), g.value = "";
    }, h = (d) => d.map((g) => URL.createObjectURL(g)), m = (d) => d.substring(d.lastIndexOf(".")), x = (d) => {
      URL.revokeObjectURL(n.value.previewUrls[d]);
      const g = [...n.value.files], w = [...n.value.previewUrls], B = [...n.value.metadata];
      if (g.splice(d, 1), w.splice(d, 1), B.splice(d, 1), g.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const j = {
          shapeId: r.shapeId,
          files: g,
          previewUrls: w,
          metadata: B
        };
        n.value = j, o("update", j);
      }
    };
    return wr(() => {
      var d;
      (d = n.value) != null && d.previewUrls && n.value.previewUrls.forEach((g) => URL.revokeObjectURL(g));
    }), ht(() => {
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
      var B;
      const w = Bt("font-awesome-icon");
      return v(), k("div", Ea, [
        i.env === "development" && qa ? (v(), k("div", Ra, [
          ye(S(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        R("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        R("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          ye(w, { icon: ["fass", "files"] })
        ]),
        (B = n.value.files) != null && B.length ? (v(), k("div", Ma, [
          (v(!0), k(we, null, Oe(n.value.files, (j, U) => (v(), k("div", {
            key: U,
            class: "selected-file"
          }, [
            R("img", {
              src: n.value.previewUrls[U],
              alt: "Preview"
            }, null, 8, Fa),
            R("button", {
              class: "remove-file",
              type: "button",
              onClick: (V) => x(U)
            }, [
              ye(w, { icon: ["fass", "trash"] })
            ], 8, _a)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}), Ha = /* @__PURE__ */ ti(Ba, [["__scopeId", "data-v-bb77aee9"]]);
function Ga(i) {
  var l, a;
  const t = i.x, e = i.x + i.l, s = et().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = et().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
  this.axes.shapeXAxis ? this.axes.shapeXAxis.call(Fi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(Fi(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((a = (l = i == null ? void 0 : i.stock) == null ? void 0 : l.saw) == null ? void 0 : a.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.call(_i(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(_i(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function Na() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(hn(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(dn(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function qn(i, t, e) {
  !e || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    e === "x" ? Wa.call(this, r, o, t[n]) : Ua.call(this, r, o, t[n]);
  });
}
function Wa(i, t, e) {
  const s = et().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = Bn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(Fi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, h;
    return ((h = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : h.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function Ua(i, t, e) {
  const s = et().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = Bn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(_i(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  ja(r), this.axes.cutMeasurementYAxes.push(r);
}
function Bn(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function ja(i) {
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
function di() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function za() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Ki() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function Va() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text id").text((t) => Ya.call(this, t)).classed("hidden", (t, e, s) => this.isTextHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1),
    (i) => i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text name").text((t) => Xa.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, e, s) => this.isNameHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (i) => i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text length").text((t) => zs.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    }),
    (i) => i.text((t) => zs.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text width").text((t) => Ka.call(this, t)).classed("hidden", (t, e, s) => this.isWidthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (t, e, s) => {
      const n = s[e], r = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    }),
    (i) => i.attr("transform", (t, e, s) => {
      const n = s[e], r = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    })
  );
}
function Ya(i) {
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
function Xa(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function zs(i) {
  return this.state.debug === "guillotine" ? "" : O({ v: i.l, o: this.numberConfig }).toString();
}
function Ka(i) {
  return this.state.debug === "guillotine" ? "" : O({ v: i.w, o: this.numberConfig }).toString();
}
function Za(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = Io(
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
      const a = xn(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (u) => u.append("line").call((h) => o.call(this, h)),
        (u) => u.call((h) => o.call(this, h)),
        (u) => u.remove()
      );
    }
    s = Po(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Ht();
  for (const r of e.toArray()) {
    const o = kn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = ko(i, o, this.props.stock.value);
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
  return Ja.call(this, t, i), Qa.call(this, t, i), !!(t != null && t.length);
}
function Ja(i, t) {
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
function Qa(i, t) {
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
const eu = (i) => `${i.parentID}-${i.x}-${i.y}-${i.w}-${i.l}`;
function tu() {
  if (!this.props.containerWidth) return;
  di.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && su.call(this), iu.call(this);
}
function iu() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, eu).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return Vs.call(this, t), t.size() > 0 && Zs.call(this, t.data()), Ys.call(this, t), t.on("mousedown", Xs.bind(this)), t;
    },
    (i) => (Vs.call(this, i), i.size() > 0 && Zs.call(this, i.data()), Ys.call(this, i), i.on("mousedown", Xs.bind(this)), i),
    (i) => i.remove()
  ), this.settings.main && requestAnimationFrame(() => Va.call(this)), this.selections.shapeWrappers.size() > 0;
}
function su() {
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
  this.scales.scoreColorScale = ai([Mt(251, 224, 255), Mt(122, 0, 138)]).domain([e, s]);
}
function Vs(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => {
    var s;
    return (s = fi.call(this, e)) == null ? void 0 : s.toString();
  });
  this.selections.shapeRectangles ? this.selections.shapeRectangles = fn(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function nu(i) {
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
function Ys(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (t) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const e = Re(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    var n;
    const s = Re(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", (n = fi.call(this, e)) == null ? void 0 : n.toString());
  }, { passive: !0 });
}
function Xs(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && ru.call(this, i, t), (this.settings.app || this.settings.embed) && au.call(this, i, t), this.state.device === "desktop" && (Ki.call(this), Ga.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function ru(i, t) {
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
        ], lu.call(this, t);
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
    console.table(ou(t, e));
  }
}
function ou(i, t) {
  return t.reduce((e, s) => {
    const n = Un(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function lu(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function au(i, t) {
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
    color: (r = fi.call(this, t)) == null ? void 0 : r.toString(),
    notes: t == null ? void 0 : t.notes
  };
  this.state.env === "development" && console.log(e);
  const s = new CustomEvent("partClick", {
    detail: e
  });
  if (this.selections.htmlEl.dispatchEvent(s), this.settings.app) return !1;
}
function fi(i) {
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
function uu(i) {
  const t = [];
  for (const e of i)
    if (e != null && e._banding)
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = nu.call(this, s));
        const o = cu.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function Ks(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Oi.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Oi.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Oi.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Oi.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function Zs(i) {
  if (!this.settings.main) return;
  const t = uu.call(this, i);
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t).join(
    (e) => e.append("line").call((s) => Ks.call(this, s)),
    (e) => e.call((s) => Ks.call(this, s)),
    (e) => e.remove()
  );
}
function Oi(i, t) {
  var s;
  return ((s = {
    y1: { x: 0, y: this.flipY ? 1 : -1 },
    y2: { x: 0, y: this.flipY ? -1 : 1 },
    x1: { x: this.flipX ? -1 : 1, y: 0 },
    x2: { x: this.flipX ? 1 : -1, y: 0 }
  }[i]) == null ? void 0 : s[t]) ?? 0;
}
function cu(i, t) {
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
function hu(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const Js = (i) => `${i.w}-${i.l}-${i.grain}`;
function Qs(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function en(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function du() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), Na.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], Js).join(
    (i) => i.append("rect").attr("class", "background stock").call((t) => Qs.call(this, t)),
    (i) => i.call((t) => Qs.call(this, t)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], Js).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((t) => en.call(this, t)),
    (i) => i.call((t) => en.call(this, t)),
    (i) => i.remove()
  );
}
function Hn(i) {
  return `${i.x}-${i.y}-${i.w}-${i.l}`;
}
function tn(i) {
  if (!this.props.containerWidth)
    return !1;
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(i, Hn).join(
    (t) => t.append("rect").attr("class", "segment").call((e) => sn.call(this, e)),
    (t) => t.call((e) => sn.call(this, e)),
    (t) => t.remove()
  ), fu.call(this, this.selections.segmentRectangles), !this.settings.app && this.state.env === "development" && gu.call(this);
}
function sn(i) {
  return i.style("opacity", (t) => (t == null ? void 0 : t.offcut) === !0 ? 0.5 : 1).classed("offcut", (t) => t.offcut).classed("merged", (t) => t.merged).classed("near", (t) => t.shapePosition === "near").classed("far", (t) => t.shapePosition === "far").classed("completed", (t) => t.completed).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function fu(i) {
  this.selections.segmentGroup.selectAll("text").data(i, Hn).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => nn.call(this, e)),
    (t) => t.call((e) => nn.call(this, e)),
    (t) => t.remove()
  );
}
function nn(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").text(pu.call(this)).attr("dominant-baseline", "middle");
}
function pu(i) {
  if (this.state.env !== "development" || i.offcut) return null;
  const t = i.cutDirection === "l" ? "→" : "↑";
  return this.state.env === "development" ? `${t} ${i.id}` : t;
}
function gu() {
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
    ].reduce((n, r) => (n[r] = Un(e, r), n), {}));
  });
}
function Gn(i) {
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
function mu(i) {
  return `${i.stock.saw.bladeWidth}-${i.x1}-${i.y1}-${i.x2}-${i.y2}`;
}
function yu() {
  this.props.containerWidth && (this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, mu).join(
    (i) => i.append("line").attr("class", "cut").call((t) => rn.call(this, t)),
    (i) => i.call((t) => rn.call(this, t)),
    (i) => i.remove()
  ));
}
function rn(i) {
  return i.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return e < 1 ? 1 : Math.ceil(e);
  }).attr("x1", (t) => this.scales.xPositionScale(t.getVisCoords("x1"))).attr("x2", (t) => this.scales.xPositionScale(t.getVisCoords("x2"))).attr("y1", (t) => this.scales.yPositionScale(t.getVisCoords("y1"))).attr("y2", (t) => this.scales.yPositionScale(t.getVisCoords("y2"))).classed("trim", (t) => t.isTrim);
}
function Nn(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function Wn(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function vu(i, t, e, s) {
  this.selections.cutLines.style("visibility", (n) => typeof i.guillotineData[e] == "number" && n.guillotineData[e] <= i.guillotineData[e] || !s && n.guillotineData.parentSegmentID === t ? "visible" : "hidden"), this.selections.cutLines.classed("highlight", (n) => i.stock.cutType === "guillotine" && n.isTrim ? n.type === i.type : n.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (n) => n.guillotineData.ptxDummyCut), s || wu.call(this, i, t);
}
function bu(i, t, e, s, n) {
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
    this.state.device === "desktop" && !i.isTrim && qn.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function wu(i, t) {
  var r, o, l, a, u, h;
  const e = (r = i == null ? void 0 : i.guillotineData) == null ? void 0 : r.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (m) => Nn(m, t, e)), this.selections.cutLines.classed("inside-segment", (m) => Wn(m, t));
  const s = Gn.call(this, i);
  if (s === !1) return;
  const n = (l = s == null ? void 0 : s.siblings) == null ? void 0 : l[(o = s.main) != null && o.hasBeamTrim ? e - 1 : e];
  if (n) {
    let m = [], x;
    const d = this.getHalfBladeWidth(i.stock), g = i.dimension === "l" ? "y" : "x";
    (i == null ? void 0 : i.dimension) === "l" ? (m = [
      [
        n.y,
        n.y + n.w
      ],
      [
        i.y1 + d,
        (s == null ? void 0 : s.main.y) + (s == null ? void 0 : s.main.w)
      ]
    ], x = [(a = i == null ? void 0 : i.distances) == null ? void 0 : a.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (m = [
      [
        n.x,
        n.x + n.l
      ],
      [
        i.x1 + d,
        (s == null ? void 0 : s.main.x) + (s == null ? void 0 : s.main.l)
      ]
    ], x = [(u = i == null ? void 0 : i.distances) == null ? void 0 : u.left, (h = i == null ? void 0 : i.distances) == null ? void 0 : h.right]), this.state.device === "desktop" && !i.isTrim && x && qn.call(this, m, x, g);
  }
}
function Su(i = null, t = "") {
  var d, g, w, B;
  if (i === null || this.selections.cutLines.empty()) return;
  const e = this.props.cuts.value[i];
  di.call(this), Ki.call(this), Re(this.selections.cutLines.nodes()[i].parentElement).raise();
  const s = (d = e.guillotineData) == null ? void 0 : d.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (g = e == null ? void 0 : e.stock) == null ? void 0 : g.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((w = e == null ? void 0 : e.stock) == null ? void 0 : w.cutType) && s !== null && typeof s < "u" ? vu.call(this, e, s, l, t) : bu.call(this, e, i, o, r, n), xu.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = Gn.call(this, e);
  if (a === !1) return;
  const { main: u, siblings: h } = a;
  if (!((B = e == null ? void 0 : e.guillotineData) != null && B.parentSegmentID))
    return tn.call(this, [u]);
  const m = h == null ? void 0 : h.length;
  let x = [];
  if (m) {
    for (let U = m; U--; )
      h[U] && (h[U].completed = !1);
    if (e.guillotineData.segmentCutOrder === void 0 || e.guillotineData.segmentCutOrder === null)
      return;
    const j = e.guillotineData.segmentCutOrder;
    for (let U = 0; U < m; U++)
      U < j && (h[U].completed = !0);
    x.push(...h), x = x.filter((U) => U);
  }
  x.length && tn.call(this, x);
}
function xu(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var l;
    let r = Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock)));
    const o = (l = i == null ? void 0 : i.guillotineData) == null ? void 0 : l.segmentCutOrder;
    return (Nn(s, e, o) || Wn(s, e)) && (r += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (r = 5), r;
  });
}
function ku() {
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), this.selections.cutLines.attr("stroke-width", (i) => {
    const t = this.scales.measurementScale(this.getBladeWidth(i.stock));
    return t < 1 ? 1 : Math.ceil(t);
  }), di.call(this), Ki.call(this);
}
function Cu(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Un(i, t) {
  return Kt(i, t);
}
class Iu {
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
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = Re(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: et(),
      yScale: et(),
      yPositionScale: et(),
      xPositionScale: et(),
      yAxisScale: et(),
      measurementScale: et(),
      shapeColorScale: ai(),
      scoreColorScale: ai()
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
    }, s = (n, r) => Mt("#" + (Cu(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = ai([
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
      let m = h.getComputedTextLength();
      const x = this.getWidthAttribute(n) - 20;
      for (; m > x && u.length > 0; )
        u = u.slice(0, -1), a.text(u.length ? u + "..." : ""), m = a.node().getComputedTextLength();
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => fi.call(this, s));
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
    tu.call(this);
  }
  drawStock() {
    du.call(this);
  }
  drawCuts() {
    yu.call(this);
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), di.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), za.call(this);
  }
  removeCuts() {
    this.selections.cutGroup && this.selections.cutGroup.selectAll("*").remove(), Ki.call(this);
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
      const h = this.scales.measurementScale(t.l), m = this.scales.measurementScale(t.w);
      return h < 50 || m < 50;
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
    (t = this == null ? void 0 : this.selections) != null && t.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => fi.call(this, s)), (e = this == null ? void 0 : this.selections) != null && e.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    di.call(this);
  }
  updateShapeVisibility() {
    hu.call(this);
  }
  drawPositions(t) {
    Za.call(this, t);
  }
  showCut(t) {
    Su.call(this, t);
  }
  resetCuts() {
    ku.call(this);
  }
}
const Pu = ["id"], Lu = /* @__PURE__ */ De({
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
    const { r: s, activeStock: n, activeShapes: r, activeCuts: o, activeSegments: l, currentCutIndex: a, getStock: u, getShapes: h, getSegments: m, getCuts: x } = cn(), d = i, g = e, w = (ne) => {
      g("shape-colour-update", ne);
    }, B = (ne) => {
      ne != null && ne.id && g("shape-select", ne.id.toString());
    }, j = (ne) => {
      ne && g("add-to-parts-bin", ne);
    }, U = (ne, it) => {
      ne && g("move-shape", ne, it);
    }, V = H(0), J = H(0), ae = H(null);
    let W, Y = H(!1);
    ht(() => le());
    const y = Z(() => ({
      format: d.numberFormat,
      decimals: d.decimalPlaces
    })), $ = Z(() => d.stockId ? u(d.stockId) : n.value), X = Z(() => d.stockId ? h(d.stockId) : r.value), I = Z(() => d.main ? d.stockId ? x(d.stockId) : o.value : []), M = Z(() => d.main ? d.stockId ? m(d.stockId) : l.value : []);
    Sr(ae, (ne) => {
      const it = ne[0], { width: st } = it.contentRect;
      st > 0 && (V.value = st);
    }), xr(
      V,
      (ne) => {
        W && (ne <= 0 || (W.setDevice(), W.resetShapeAxes(), W.drawAll()));
      },
      { throttle: 100 }
    ), Pe(n, (ne) => {
      ne && (V.value <= 0 || (W.setDevice(), W.drawStock()));
    }), Pe(r, (ne) => {
      ne && (V.value <= 0 || (W.setDevice(), W.drawShapes()));
    }), Pe(o, () => {
      V.value <= 0 || W.drawCuts();
    }), Pe(a, () => {
      V.value <= 0 || (W.toggleSegments(!0), W.showCut(a.value));
    }), Pe(y, (ne) => {
      W.updateNumberFormat(ne.format, ne.decimals, null);
    });
    const le = () => {
      const ne = {
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
          containerWidth: V,
          stock: $,
          shapes: X,
          cuts: I,
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
          onShapeColourUpdate: w,
          onShapeSelect: B,
          onAddToPartsBin: j,
          onMoveShape: U
        }
      };
      W = new Iu(ne), Y.value = !0;
    };
    return t({
      loaded: Y,
      toggleShapes: (ne = !1) => {
        W && W.toggleShapes(ne);
      },
      toggleCuts: (ne = !1) => {
        W && W.toggleCuts(ne);
      },
      toggleSegments: (ne = !1) => {
        W && W.toggleSegments(ne);
      },
      drawShapes: () => {
        W && W.drawShapes();
      },
      drawStock: () => {
        W && W.drawStock();
      },
      drawPositions: (ne) => {
        W && W.drawPositions(ne);
      },
      resetPositions: () => {
        W && W.removePositions();
      },
      findShape: (ne) => {
        W && W.findShape(ne);
      },
      clearSelection: () => {
        W && W.clearSelection();
      },
      resetCuts: () => {
        W && (W.toggleSegments(!1), W.resetCuts());
      },
      showCut: (ne) => {
        W && (W.toggleSegments(!0), W.showCut(ne));
      },
      requiresStretch: (ne) => {
        W && W.requiresStretch(ne);
      }
    }), (ne, it) => (v(), k("div", {
      id: ne.elementId,
      ref_key: "diagramContainerRef",
      ref: ae,
      class: "diagram-container"
    }, null, 8, Pu));
  }
}), $u = {
  key: 0,
  class: "debug"
}, Tu = { key: 2 }, Ou = {
  key: 0,
  class: "row table-heading"
}, Du = {
  key: 0,
  class: "cell center"
}, Au = {
  key: 1,
  class: "cell delete"
}, Eu = { class: "cell" }, Ru = ["id", "disabled", "onClick"], Mu = {
  key: 0,
  class: "cell center"
}, Fu = ["onClick"], _u = {
  key: 1,
  class: "cell"
}, qu = ["aria-label", "onClick"], Bu = { class: "button-wrapper main" }, Hu = ["aria-label"], Gu = ["aria-label", "disabled"], Nu = ["aria-label"], Wu = { id: "part-count" }, Uu = {
  key: 3,
  id: "messages"
}, ju = {
  key: 0,
  class: "heading"
}, zu = { class: "content" }, Vu = {
  key: 4,
  id: "progress"
}, Yu = !1, Xu = /* @__PURE__ */ De({
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
    inputType: {
      type: String,
      default: "manual"
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["inputs-changed", "calculating", "validation-error", "result", "no-result", "log", "error"],
  setup(i, { expose: t, emit: e }) {
    const s = Lt(() => Promise.resolve().then(() => lc)), n = Lt(() => Promise.resolve().then(() => uc)), r = Lt(() => Promise.resolve().then(() => Tc)), o = Lt(() => Promise.resolve().then(() => Mc)), l = Lt(() => Promise.resolve().then(() => Zi)), { t: a } = Ui(["main", "errors"]), { inputs: u, totalInputShapes: h, getShapeGrainSummary: m, updateNumberFormat: x, validateInputStock: d } = un(), { r: g, updateFromResult: w, stackedStock: B, uniqueAddedShapes: j, uniqueUsedStock: U, activeStockId: V, setActiveStockId: J } = cn(), { progress: ae, reset: W } = Mr(), { addNotice: Y } = ds(), { tip: y, update: $, hide: X } = Er(), I = i, M = e, le = "production", se = H((navigator == null ? void 0 : navigator.language) || "en-US"), A = kr(null), _ = window.location.hostname, z = H(!1), te = H(!0), oe = Cr("Checkout/currentURL", window.location.href), ve = ls(), de = H([]), Ne = H(!1), tt = H(!1), E = H(!1), dt = H(!1), ne = H(!1), it = H(wl()), st = H(!1), { socket: nt } = Rr({
      refs: {
        connected: z,
        thinking: E
      },
      callbacks: {
        onResult(f) {
          var P, q, D, Q, T;
          const p = f.result;
          if (w(p), !((P = p.shapeList) != null && P.length) || !((q = p.stockList) != null && q.length)) {
            W(), Y({
              type: "error",
              message: Te(a("no_result")),
              additional: [Te(a("check_inputs"))]
            }), E.value = !1;
            return;
          }
          ir();
          const b = {
            jobId: f.jobId,
            metadata: g.metadata.value,
            parts: j.value.map((F) => {
              var Se, xt, kt;
              return {
                l: F.l,
                w: F.w,
                t: F == null ? void 0 : F.t,
                material: F.material,
                orientationLock: F.orientationLock,
                q: (xt = (Se = g.metadata.value) == null ? void 0 : Se.addedPartTally) == null ? void 0 : xt[F.parentID],
                name: F.name,
                banding: F.banding,
                finish: F.finish,
                customData: F.customData,
                stockId: ((kt = F == null ? void 0 : F.stock) == null ? void 0 : kt.id) || (F == null ? void 0 : F.stockId)
              };
            }),
            stock: U.value.map((F) => {
              var Se, xt;
              return {
                id: F.id,
                name: F == null ? void 0 : F.name,
                l: F.l,
                w: F.w,
                t: F == null ? void 0 : F.t,
                material: F.material,
                q: (xt = (Se = g.metadata.value) == null ? void 0 : Se.usedStockTally) == null ? void 0 : xt[F.parentID],
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
          if ((T = (Q = (D = g == null ? void 0 : g.metadata) == null ? void 0 : D.value) == null ? void 0 : Q.unplacedParts) != null && T.length) {
            const F = g.metadata.value.unplacedParts.map((Se) => Se.id).join();
            Y({
              type: "warning",
              message: Te(a("parts_not_fit")) + ": " + F
            });
          }
          M("result", b), E.value = !1;
        },
        onUser(f) {
          A.value = f;
        },
        onConnectError(f) {
          Y({
            type: "error",
            message: Te(a("cannot_connect")),
            additional: [f]
          });
        },
        onError(f) {
          Y({
            type: "error",
            message: Te(a("error_occurred")),
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
      partTrim: 0
    }, K = ft(yt), ee = ft({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), Ke = H(null), Ue = H(!1), Nt = H(""), $e = H(""), Le = ft({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), Be = H([]), _e = H([]), At = H([]), Wt = H(!1), je = ft({
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
    }), be = ft({
      labels: [],
      pricing: {},
      options: {},
      keys: mt
    }), Ae = ft({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), ii = ft({
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
    }), Ut = H([]), yi = Z(() => {
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
          placeholder: "l",
          required: !0,
          allowZero: !1
        },
        {
          id: "w",
          fieldMap: "w",
          type: "unitDependent",
          label: "width",
          placeholder: "w",
          min: 0,
          required: !0,
          allowZero: !1
        },
        {
          id: "q",
          fieldMap: "q",
          type: "integer",
          placeholder: "q",
          default: 1,
          label: "quantity",
          min: 0
        },
        {
          id: "name",
          fieldMap: "name",
          type: "string",
          placeholder: "name",
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
      ], ...Ut.value];
    }), vt = Z(() => Yl(
      ii,
      yi.value,
      "parts",
      ee.stockType,
      K.fieldOrder
    )), bt = Z(() => {
      let f = vt.value.length + 1;
      return u.inputShapes.value.length > 1 && f++, f;
    }), vi = Z(() => {
      const f = {
        id: "34px",
        del: "30px",
        info: "30px"
      }, p = [];
      for (const b of vt.value)
        b.id !== "trim" && p.push(b.w ?? "minmax(20px, 1fr)");
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
    })), ue = Z(() => {
      var f, p;
      return A.value ? !(A.value && ((p = (f = A.value) == null ? void 0 : f.api) != null && p.whiteLabel)) : !0;
    }), ge = {
      stockType: (f) => {
        const p = ["sheet", "linear", "roll"];
        p.includes(f) || console.warn(`${f} is not a valid stockType, expected ${p.join("|")}`), ee.stockType = f, f === "linear" && (ee.cutType = null, ee.cutPreference = null);
      },
      stockSelection: (f) => {
        const p = ["efficiency", "smallest"];
        f && !p.includes(f) ? console.warn(`${f} is not a valid stockSelection, expected ${p.join("|")}`) : ee.options.stockSelection = f;
      },
      minSpacing: (f) => {
        ee.options.minSpacing = f;
      },
      stackHeight: (f) => {
        ee.stackHeight = f;
      },
      cutPreference: (f) => {
        const p = ["efficiency", "length", "width", "beam"];
        if (p.includes(f)) {
          const { cutType: b, cutPreference: P } = ss(f);
          ee.cutType = b, ee.cutPreference = P;
        } else
          console.warn(`SmartCut - ${f} is not one of ${p.join("|")}`);
      },
      bladeWidth: (f) => {
        f >= 0 ? ee.bladeWidth = f : console.warn(`SmartCut - you provided an incorrect blade width of: ${f}`);
      },
      maxParts: (f) => {
        K.maxParts = f;
      },
      locale: (f) => {
        se.value = f.replace(/_/g, "-");
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
        for (const b in yt.enable)
          b in f && (K.enable[b] = f[b]);
        for (const b in p)
          Ve(b, Et(f, [p[b]]) ?? yt.enable[p[b]]);
        ne.value = Et(f, ["csvImport"]) ?? yt.enable.csvImport;
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
        f.forEach((b, P) => {
          p.push(b), p[P].custom = !0;
          const q = si(b.id);
          p[P].id = q, p[P].fieldMap = "customData." + q, b.type === "checkbox" && (p[P].w = "32px"), b.type === "select" && (p[P].output = b.output ?? "string", p[P].options = b.options);
        }), Ut.value = p;
        for (const b of u.inputShapes.value)
          b.customData = f.reduce((P, q) => {
            const D = si(q.id);
            return P[D] = b.customData[D] || q.default || "", P;
          }, {});
      }
    }, ze = (f) => {
      if (I.debug && M("log", ["checkout init...", f]), f != null && f.options) {
        const b = f.options;
        Fl(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((D) => {
          D in b || M("error", `${D} is a required option`);
        });
        const q = ["enable", "colors"];
        for (const D in b)
          q.includes(D) || (K[D] = b[D]), D in ge && ge[D](b[D]);
      }
      f.colors && "colors" in ge && ge.colors(f.colors), Os("banding", f), Os("finish", f), Je(f), Vn(f), tt.value = !0, I.debug && M("log", ["init complete"]);
      const p = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(p), Ze(() => {
        ue.value && !Jn() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, He = (f, p) => {
      f && (f.orientationLock = p);
    }, Ve = (f, p = !1) => {
      zl(ii, "parts", ee.stockType, f, p);
    }, si = (f) => f ? ji(f).toLowerCase() : null, Ge = (f, p, b, P) => {
      if (p.valid) {
        if (X(), b && P) {
          const q = b.issues.findIndex((D) => D.field.some((Q) => Q.length === P.length && Q.every((T, F) => T === P[F])));
          q !== -1 && b.issues.splice(q, 1);
        }
      } else
        $({
          referenceEl: f,
          show: !0,
          content: a(`fieldValidation.${p.message}`),
          type: "error"
        });
    }, Je = (f) => {
      var p, b, P, q, D;
      if (Et(K, ["enable", "machining"]) && f != null && f.machining) {
        for (const Q in je)
          f.machining[Q] && (je[Q] = f.machining[Q]);
        if (["holes", "hingeHoles"].forEach((Q) => {
          var T, F;
          (T = f == null ? void 0 : f.machining) != null && T[Q] && (je[Q].enabled = (F = f == null ? void 0 : f.machining) == null ? void 0 : F[Q].enabled);
        }), (P = (b = (p = f == null ? void 0 : f.machining) == null ? void 0 : p.corners) == null ? void 0 : b.types) != null && P.length && (je.corners.enabled = !0, je.corners.types = f.machining.corners.types), f.banding && ((D = (q = f == null ? void 0 : f.options) == null ? void 0 : q.enable) != null && D.banding)) {
          if (!be) return;
          je.banding = {
            enabled: !0
          }, be.options.length && (je.banding.options = be.options), be.labels.length && (je.banding.labels = be.labels), Jt(be.pricing) && (je.banding.pricing = be.pricing);
        }
      }
    }, he = (f = null) => {
      Ke.value = f, f && f.l && f.w ? Wt.value = !0 : alert("Please enter dimensions first");
    }, wt = () => {
      Wt.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, St = (f = []) => {
      if (_e.value = [], At.value = [], Ve("t", !1), !!f.length) {
        for (const p of f)
          if (p != null && p.t)
            if (typeof p.t == "string" && p.t.includes(",")) {
              const b = Cs(p.t, !0);
              b.length === 2 ? (Yn(b), Ve("t", !0), p.t = _e.value[0]) : M("error", "bonded thickness found which does not have 2 options");
            } else _e.value.includes(p.t) || _e.value.push(p.t);
        _e.value.length > 1 && Ve("t", !0);
      }
    }, jn = (f) => {
      var q;
      if (!f) return { thicknesses: [], bondedThicknesses: [] };
      if (!((q = Be.value) != null && q.length))
        return {
          thicknesses: _e.value,
          bondedThicknesses: []
        };
      if (!f.material) return { thicknesses: [], bondedThicknesses: [] };
      const p = Be.value.find((D) => D.name === f.material);
      if (!p) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...p.thicknesses], P = [];
      for (let D = 0; D < b.length; D++) {
        const Q = b[D], T = Cs(Q), F = [];
        if (T.length) {
          for (const Se of T)
            b[D] = Se, F.push(D);
          D++;
        }
        F.length && P.push(F);
      }
      return {
        thicknesses: b,
        bondedThicknesses: P
      };
    }, zn = (f) => jn(f).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), Vn = (f) => {
      var p, b;
      if ((p = f == null ? void 0 : f.stock) != null && p.some((P) => P == null ? void 0 : P.material)) {
        Be.value = [], _e.value = [], At.value = [];
        const P = /* @__PURE__ */ new Map();
        for (const q of f.stock) {
          if (!q.material) continue;
          const D = q.material.toUpperCase();
          P.has(D) || P.set(D, /* @__PURE__ */ new Set()), q.t != null && ((b = P.get(D)) == null || b.add(O({ v: q.t })));
        }
        Be.value = Array.from(P.entries()).map(([q, D]) => ({
          name: q,
          thicknesses: Array.from(D).sort((T, F) => T - F)
        })), Be.value.length > 1 && Ve("material", !0);
      } else
        St(f.stock);
    }, Yn = (f, p = null) => {
      if (!Array.isArray(f)) {
        M("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let P = 0; P < f.length; P++) {
        let q = f[P];
        K.numberFormat === "decimal" && (q = parseFloat(q)), _e.value.push(q), p && p.thicknesses.push(q), b.push(_e.value.length - 1);
      }
      At.value.push(b);
    }, Cs = (f, p = !1) => {
      if (typeof f == "string" && f.includes(",")) {
        const b = f.split(",");
        return p ? b.map((P) => O({ v: P })) : b;
      }
      return [];
    }, Xn = () => {
      st.value ? Zn() : Kn();
    }, Kn = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), st.value = !0;
    }, Zn = () => {
      document.exitFullscreen && document.exitFullscreen(), st.value = !1;
    }, Jn = () => {
      var P, q;
      if ((q = (P = A.value) == null ? void 0 : P.api) != null && q.whiteLabel) return !0;
      let f = !0;
      const p = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [p, b].forEach((D, Q) => {
        if (!D) return f = !1;
        const T = window.getComputedStyle(D);
        if (T.display === "none" || T.display === "hidden" || T.opacity === "0" || T.color === "transparent" || T.position !== "relative" || Q === 1 && T.color !== "#4e4e4e" && T.color !== "rgb(78, 78, 78)")
          return f = !1;
      }), te.value = f, f;
    }, Is = (f, p, b, P, q) => {
      ks(
        f,
        p,
        b,
        P,
        q,
        I.findExtrasPrice
      );
    }, Ps = (f, p, b, P) => {
      _n(
        f,
        p,
        b,
        P,
        p === "banding" ? mi : [],
        I.findExtrasPrice
      );
    }, bi = (f, p) => {
      const b = p === "banding" ? be == null ? void 0 : be.labels : Ae == null ? void 0 : Ae.labels;
      El(f, p, b);
      const P = Ss(p);
      if (f != null && f[P])
        for (const q in f[P]) {
          const D = Wi(f, p, q, I.findExtrasPrice);
          !D && q && f[p][q] && new re({
            item: f,
            field: [[p, q]],
            type: "error",
            message: Te(a("option_not_available", { x: f[p][q], y: a(p) }))
          }), hi(f, p, q, !!D);
        }
    }, Ls = (f) => {
      const p = Object.keys(f);
      return Math.max(...p.map((P) => P.split("|").length));
    }, $s = (f) => {
      const p = [], b = Object.keys(f), P = Ls(f);
      for (let q = P; q--; ) p.push(/* @__PURE__ */ new Set());
      for (const q of b)
        q.split("|").forEach((Q, T) => p[T].add(Q));
      for (let q = 0; q < P; q++)
        p[q] = Array.from(p[q]);
      return p;
    }, wi = (f, p = [], b) => {
      if (!f) return [];
      if (b > 0 && !p[b - 1]) return [];
      const P = /* @__PURE__ */ new Set();
      for (const q of Object.keys(f)) {
        const D = q.split("|");
        if (D.length > b) {
          let Q = !0;
          for (let T = 0; T < b; T++)
            if (p[T] && D[T] !== p[T]) {
              Q = !1;
              break;
            }
          Q && P.add(D[b]);
        }
      }
      return Array.from(P);
    }, Si = (f, p, b) => Wi(
      f,
      p,
      b,
      I.findExtrasPrice
    ), Qn = (f) => {
      const p = de.value.findIndex((b) => b.shapeId === f.shapeId);
      p !== -1 ? de.value[p] = f : de.value.push(f), window.smartcutImages = de.value;
    }, er = (f) => {
      de.value = de.value.filter((p) => p.shapeId !== f), window.smartcutImages = de.value;
    }, xi = (f = 1) => {
      for (let p = f; p--; ) {
        let b;
        if (u.inputShapes.value.length > 0) {
          const P = u.inputShapes.value[u.inputShapes.value.length - 1];
          b = ni({
            material: P.material,
            t: P.t
          });
        } else
          b = ni();
        u.inputShapes.value.push(b);
      }
    }, tr = (f) => {
      var b;
      if (u.inputShapes.value.length === 1) return;
      const p = u.inputShapes.value[f].listId;
      u.inputShapes.value.splice(f, 1), ((b = Ke.value) == null ? void 0 : b.listId) === p && (Ke.value = null), W();
    }, ni = (f = {
      l: null,
      w: ee.stockType === "linear" ? ((p) => (p = u.inputStock.value[0]) == null ? void 0 : p.w)() : null,
      t: _e.value.length ? _e.value[0] : null,
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
      var q, D;
      f.id = (u.inputShapes.value.length + 1).toString();
      const P = new Yi(f, K.numberFormat);
      return (q = be == null ? void 0 : be.labels) != null && q.length && bi(P, "banding"), (D = Ae == null ? void 0 : Ae.labels) != null && D.length && bi(P, "finish"), P;
    }, ir = () => {
      _e.value.length && g.shapeList.value.forEach((f) => {
        if (!f.t) return;
        const p = _e.value.findIndex(
          (q) => O({ v: q }) === f.t
        ), b = At.value.find((q) => q.includes(p));
        if (!b) return;
        const P = Math.min(
          ...b.map((q) => _e.value[q])
        );
        f.t > P && (f.q = f.q * (f.t / P), f.t = P);
      });
    }, Ts = () => {
      W(), J(null), g.stockList.value = [], g.shapeList.value = [], g.cutList.value = [];
    }, sr = () => {
      u.inputShapes.value.length = 0, I.inputType !== "formula" && Ze(() => xi(1));
    }, nr = async () => {
      if (M("calculating"), E.value) return !1;
      E.value = !0, dt.value = !1;
      const { valid: f, saw: p, stockList: b, shapeList: P } = await Dl({
        t: a,
        partTrim: K.partTrim,
        maxShapes: K.maxParts,
        orientationModel: K.orientationModel,
        sawData: ee,
        onLimit: () => {
          Y({
            type: "error",
            message: a("max_parts") + " " + K.maxParts
          });
        }
      });
      if (!f) {
        M("validation-error"), E.value = !1;
        return;
      }
      Ts(), I.debug && console.log(
        "SmartCut - calculating",
        "stock",
        b.map((D) => D.dimensions()),
        "parts",
        P.map((D) => D.dimensions())
      );
      const q = {
        inputs: {
          parts: u.inputShapes.value,
          stock: u.inputStock.value,
          saw: p
        },
        saw: p,
        shapeList: P,
        stockList: b,
        enableEvo: !0,
        domain: _
      };
      await nt.connect(), nt.emit("calculate", q);
    }, Os = (f, p) => {
      var xt;
      if (Ve(f, !1), !f || !p || !(p != null && p[f]) || !Et(K, ["enable", f])) return;
      const b = [f, "pricing"];
      if (!Hs(p, b)) {
        M("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const P = Et(p, b);
      if (typeof P != "object") {
        M("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!Jt(P)) {
        M("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const q = Object.keys(P), D = Object.values(P);
      if (!q.length) {
        M("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const Q = /,/;
      for (const kt of q)
        if (Q.test(kt)) {
          M("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (D.some((kt) => isNaN(kt))) {
        M("error", `${b} values must be a number`);
        return;
      }
      const T = Ls(P), F = [f, "labels"];
      let Se = [];
      if (Hs(p, F))
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
      switch (f) {
        case "banding":
          be.labels = Se, be.pricing = P, be.options = $s(P);
          break;
        case "finish":
          Ae.labels = Se, Ae.pricing = P, Ae.options = $s(P);
          break;
      }
      if (Ve(f, !0), !!((xt = u.inputShapes.value) != null && xt.length))
        for (const kt of u.inputShapes.value)
          bi(kt, f);
    }, ki = (f, p) => {
      if (!p) return;
      f !== "info" && Object.keys(Le).forEach((P) => {
        P !== f && P !== "info" && (Le[P] = null);
      });
      const b = u.inputShapes.value.indexOf(p);
      Le[f] === b ? (Ke.value = null, Le[f] = null) : (Ke.value = p, Le[f] = b);
    }, Ds = (f) => {
      if (M("log", ["load event received"]), !tt.value) {
        M("log", ["load event received"]);
        return;
      }
      rr(f.detail);
    }, rr = (f) => {
      var P, q, D;
      if (M("log", ["loading parts..."]), !f || !((q = (P = f == null ? void 0 : f.inputs) == null ? void 0 : P.parts) != null && q.length)) {
        M("log", ["could not find any parts to import"]);
        return;
      }
      u.inputShapes.value.length = 0;
      let p = 0;
      for (const Q of f.inputs.parts) {
        const T = ni(Q);
        T ? (u.inputShapes.value.push(T), (D = T.issues) != null && D.length && M("log", [`SmartCut - issues found while importing part at index ${p}`, T.issues])) : M("log", [`SmartCut - error loading part at index ${p}`, Q]), p++;
      }
      u.inputShapes.value.flatMap((Q) => Pt(Q.issues)).length && Y({
        type: "error",
        message: Te(a("issues_found"))
      }), M("log", [`loaded ${u.inputShapes.value.length} parts`]);
    }, or = (f) => {
      u.inputShapes.value.length = 0, Ze(() => {
        var p, b;
        for (const P of f)
          P.t = ((b = (p = u.inputStock.value) == null ? void 0 : p[0]) == null ? void 0 : b.t) ?? null, u.inputShapes.value.push(ni(P));
      });
    };
    Pe(() => I.stock, (f) => {
      if (Ts(), Array.isArray(f) || console.warn("SmartCut - stock must be passed as an array"), !!(f != null && f.length)) {
        u.inputStock.value.length = 0, Be.value.length || St(f);
        for (const p of f) {
          const b = new ys({
            ...p,
            autoAdd: !0,
            id: (u.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, K.numberFormat);
          u.inputStock.value.push(b);
        }
        if (u.inputStock.value.length) {
          u.inputShapes.value.length ? Ze(() => {
            u.inputShapes.value.forEach((b) => {
              if (b.material) {
                const P = Be.value.find((q) => q.name === b.material);
                P && (P.thicknesses.includes(O({ v: b.t })) || (b.t = O({ v: P.thicknesses[0] })));
              } else b.t || (b.t = O({ v: u.inputStock.value[0].t }));
            });
          }) : I.inputType !== "formula" && Ze(() => xi(1));
          const p = d(ee);
          p.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(p))), Y({
            type: "error",
            message: Te(a("stock_issue")),
            additional: p.map((b) => a(b.message))
          }));
        }
      }
    }, { immediate: !0 }), Pe(u.inputShapes, (f) => {
      M("inputs-changed"), f.forEach((p) => {
        var P;
        ee.stockType === "linear" && (p.w = (P = u.inputShapes.value[0]) == null ? void 0 : P.w);
        const b = Be.value.find((q) => q.name === p.material);
        b && (b.thicknesses.includes(O({ v: p.t })) || (p.t = O({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), Pe(() => K.numberFormat, (f) => {
      x(f);
    }), ht(async () => {
      if (Ne.value) return;
      const f = new URL(window.location.href), p = f.searchParams.toString(), b = f.origin + f.pathname + (p ? `?${p}` : "");
      oe.value !== b && (u.inputShapes.value.length = 0, I.inputType !== "formula" && xi(1)), oe.value = b, se.value = K.locale, await nt.connect(), nt.emit("getUserFromDomain"), window.addEventListener("smartcut/load", Ds), Ne.value = !0, I.debug && M("log", [
        "ready...",
        "fields:",
        vt.value.map((P) => P.id)
      ]);
    });
    const lr = () => {
      nt && nt.disconnect();
    };
    return cs(() => {
      window.removeEventListener("smartcut/load", Ds), lr(), delete window.smartcutCheckout;
    }), t({
      init: ze,
      getAvailablePricingOptions: wi,
      getExtrasPrice: Si,
      formatPrice: I.formatPrice,
      findExtrasPrice: I.findExtrasPrice,
      inputShapes: u.inputShapes,
      initExtrasOptions: bi,
      createInputShape: ni
    }), (f, p) => {
      var P, q;
      const b = Bt("font-awesome-icon");
      return v(), k(we, null, [
        ye(S(s), {
          content: S(y).content,
          type: S(y).type,
          show: S(y).show,
          "reference-el": S(y).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        S(le) === "development" && Yu ? (v(), k("div", $u, [
          p[5] || (p[5] = R("div", null, "Developer information", -1)),
          ye(S(l), {
            data: [S(u).inputShapes.value[0]],
            paths: ["inputs.inputShapes[0]"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        Wt.value && ((P = Ke.value) != null && P.machining) ? (v(), pe(S(r), {
          key: 1,
          shape: Ke.value,
          "onUpdate:shape": p[0] || (p[0] = (D) => Ke.value = D),
          translate: !0,
          options: je,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": Si,
          "get-available-pricing-options": wi,
          "format-price": i.formatPrice,
          onClose: wt
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : G("", !0),
        tt.value ? G("", !0) : (v(), k("div", Tu, [
          ye(Us, {
            size: 50,
            "show-number": !1
          })
        ])),
        tt.value ? (v(), k("div", {
          key: 3,
          id: "smartcut-checkout",
          class: ke({ fullscreen: st.value })
        }, [
          it.value && !i.readonly ? (v(), k("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: p[1] || (p[1] = (D) => Xn())
          }, [
            ye(b, { icon: ["fasr", "expand"] }),
            Xt(" " + ie(S(Te)(S(a)("full_screen"))), 1)
          ])) : G("", !0),
          ue.value ? (v(), k("div", {
            key: 1,
            id: "credit",
            style: xe(L.value)
          }, [
            R("a", {
              title: "SmartCut | Cut list optimization software",
              style: xe(N.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, ie(S(Ur)(S(a)("powered_by"))), 5)
          ], 4)) : G("", !0),
          R("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: xe({ "grid-template-columns": vi.value })
          }, [
            S(u).inputShapes.value.length ? (v(), k("div", Ou, [
              p[6] || (p[6] = R("div", { class: "cell id" }, null, -1)),
              (v(!0), k(we, null, Oe(vt.value, (D) => (v(), k("div", {
                key: D.id,
                class: ke(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(D.id) || D.type === "checkbox" }])
              }, ie(S(Te)(S(a)(D.label))), 3))), 128)),
              S(le) === "development" ? (v(), k("div", Du, " Info ")) : G("", !0),
              S(u).inputShapes.value.length > 1 ? (v(), k("div", Au)) : G("", !0)
            ])) : G("", !0),
            (v(!0), k(we, null, Oe(S(u).inputShapes.value, (D, Q) => (v(), k("div", {
              key: Q,
              class: "row inputs"
            }, [
              R("div", Eu, [
                R("div", {
                  class: "id",
                  style: xe({
                    background: K.colors.partA,
                    color: K.colors.text
                  })
                }, ie(Q + 1), 5)
              ]),
              (v(!0), k(we, null, Oe(vt.value, (T) => (v(), k("div", {
                key: T.fieldMap,
                class: ke(["cell", [`${T.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(T.id) || T.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(T.id) ? T.id === "orientationLock" ? (v(), pe(Zl, {
                  key: 1,
                  id: "orientation-" + Q,
                  rectangle: D,
                  disabled: i.readonly,
                  "stock-grain": S(m)(D),
                  "button-background": K.colors.button,
                  "icon-color": K.colors.buttonText,
                  "orientation-model": K.orientationModel,
                  onUpdateOrientation: (F) => He(D, F)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : T.id === "banding" ? (v(), pe(Ql, {
                  key: 2,
                  id: "banding-" + Q,
                  "input-shape": D,
                  disabled: i.readonly,
                  "stock-grain": S(m)(D),
                  open: Le.banding === Q,
                  "orientation-model": K.orientationModel,
                  onClicked: (F) => ki("banding", D)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : T.id === "finish" ? (v(), pe($a, {
                  key: 3,
                  id: "finish-" + Q,
                  "input-shape": D,
                  disabled: i.readonly,
                  open: Le.finish === Q,
                  onClicked: (F) => ki("finish", D)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : T.fieldMap === "machining" && it.value ? (v(), pe(Aa, {
                  key: 4,
                  id: "machining-" + Q,
                  disabled: i.readonly,
                  "input-shape": D,
                  onOpen: (F) => he(D)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : T.fieldMap === "imageUpload" ? (v(), k("button", {
                  key: 5,
                  id: "image-upload-" + Q,
                  type: "button",
                  disabled: i.readonly,
                  class: ke({ selected: Le.info === Q }),
                  onClick: (F) => ki("imageUpload", D)
                }, [
                  ye(b, { icon: ["fass", "image"] })
                ], 10, Ru)) : G("", !0) : (v(), pe(at, {
                  key: 0,
                  id: T.id + "-" + Q,
                  focus: !i.readonly && K.enable.focus && Q === S(u).inputShapes.value.length - 1 && T.id === "l",
                  issue: S(_s)(D, [T.fieldMap]),
                  warning: S(_s)(D, [T.fieldMap], !0),
                  type: T.type,
                  output: T.output,
                  label: T != null && T.label ? S(Te)(S(a)(T.label)) : null,
                  placeholder: T != null && T.placeholder ? S(Te)(S(a)(T.placeholder)) : null,
                  "enable-label": !1,
                  "number-format": K.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (T == null ? void 0 : T.required) ?? !1,
                  "allow-zero": (T == null ? void 0 : T.allowZero) ?? !0,
                  options: T.id === "t" ? zn(D) : T == null ? void 0 : T.options,
                  "true-value": T == null ? void 0 : T.trueValue,
                  "false-value": T == null ? void 0 : T.falseValue,
                  default: T == null ? void 0 : T.default,
                  min: typeof (T == null ? void 0 : T.min) == "number" ? T.min : null,
                  max: typeof (T == null ? void 0 : T.max) == "number" ? T.max : null,
                  custom: T == null ? void 0 : T.custom,
                  value: S(Et)(D, T == null ? void 0 : T.fieldMap),
                  text: {
                    delete: S(Vt)(S(a)("delete")),
                    select: S(Vt)(S(a)("select"))
                  },
                  onValidation: (F, Se) => Ge(F, Se, D, [T.fieldMap]),
                  "onUpdate:value": (F) => {
                    T.fieldMap && S(vl)(D, T.fieldMap, F);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ], 2))), 128)),
              S(le) === "development" ? (v(), k("div", Mu, [
                R("button", {
                  type: "button",
                  class: ke({ selected: Le.info === Q }),
                  onClick: (T) => ki("info", D)
                }, " i ", 10, Fu)
              ])) : G("", !0),
              S(u).inputShapes.value.length > 1 ? (v(), k("div", _u, [
                R("button", {
                  type: "button",
                  class: "delete",
                  "aria-label": S(Te)(S(a)("action_item", { a: "remove", i: "part" })),
                  onClick: (T) => tr(Q)
                }, [
                  ye(b, { icon: ["fass", "trash"] })
                ], 8, qu)
              ])) : G("", !0),
              ye(S(n), {
                item: D,
                "num-columns": bt.value
              }, null, 8, ["item", "num-columns"]),
              Le.banding === Q && be.options.length > 0 ? (v(), pe(os, {
                key: 2,
                shape: D,
                "shape-index": Q,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": be.keys,
                "all-options": be.options,
                pricing: be.pricing,
                labels: be.labels,
                "user-friendly-field-map": S(Me),
                "part-columns": bt.value,
                "get-price": Si,
                "format-price": i.formatPrice,
                "orientation-model": K.orientationModel,
                "get-available-pricing-options": wi,
                onUpdateAll: Ps,
                onSet: Is
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              Le.finish === Q && Ae.options.length > 0 ? (v(), pe(os, {
                key: 3,
                shape: D,
                "shape-index": Q,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Ae.keys,
                "all-options": Ae.options,
                pricing: Ae.pricing,
                labels: Ae.labels,
                "user-friendly-field-map": S(Me),
                "part-columns": bt.value,
                "get-price": Si,
                "format-price": i.formatPrice,
                "orientation-model": K.orientationModel,
                "get-available-pricing-options": wi,
                onUpdateAll: Ps,
                onSet: Is
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              Le.info === Q ? (v(), k("div", {
                key: 4,
                id: "shape-info",
                style: xe({ "grid-column-end": "span " + bt.value })
              }, [
                ye(S(l), {
                  data: [D == null ? void 0 : D.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : G("", !0),
              Le.imageUpload === Q ? (v(), pe(Ha, {
                key: 5,
                prefix: (Q + 1).toString(),
                "unique-id": S(ve),
                "shape-id": D.listId,
                style: xe({ "grid-column-end": "span " + bt.value }),
                images: de.value,
                onUpdate: Qn,
                onRemove: er
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : G("", !0)
            ]))), 128))
          ], 4),
          R("div", Bu, [
            i.readonly ? G("", !0) : (v(), k("button", {
              key: 0,
              type: "button",
              "aria-label": S(a)("action_item", { a: "add", i: "part" }),
              style: xe({ background: K.colors.button, color: K.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: p[2] || (p[2] = (D) => xi(1))
            }, [
              ye(b, { icon: ["fasr", "plus-large"] }),
              Xt(" " + ie(S(Te)(S(a)("action_item", { a: S(a)("add"), i: S(a)("part") }))), 1)
            ], 12, Hu)),
            R("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": S(Te)(S(a)("calculate")),
              style: xe({
                background: K.colors.button,
                color: K.colors.buttonText
              }),
              disabled: !((q = S(u).inputStock.value) != null && q.length) || E.value,
              onClick: p[3] || (p[3] = (D) => nr())
            }, [
              ye(b, { icon: ["fass", "calculator"] }),
              Xt(ie(S(Te)(S(a)("calculate"))), 1)
            ], 12, Gu),
            i.readonly ? G("", !0) : (v(), k("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": S(Te)(S(a)("clear")),
              onClick: p[4] || (p[4] = (D) => sr())
            }, [
              ye(b, { icon: ["fass", "trash"] })
            ], 8, Nu)),
            R("div", Wu, ie(S(h)) + ie(K != null && K.maxParts ? "/" + K.maxParts : ""), 1)
          ]),
          ne.value && !i.readonly ? (v(), pe(S(o), {
            key: 2,
            ref: "import",
            "number-format": K.numberFormat,
            "custom-fields": Ut.value,
            "banding-options": be.options,
            "banding-labels": be.labels,
            "finish-options": Ae.options,
            "finish-labels": Ae.labels,
            onImport: or
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : G("", !0),
          Ue.value ? (v(), k("div", Uu, [
            Nt.value ? (v(), k("div", ju, ie(Nt.value), 1)) : G("", !0),
            R("pre", zu, ie($e.value), 1)
          ])) : G("", !0),
          (K.enable.diagram ? E.value && !S(ae).complete : E.value || S(ae).complete) ? (v(), k("div", Vu, [
            ye(Us, {
              size: 50,
              number: S(ae).shapeCount,
              complete: S(ae).complete,
              "show-number": K.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : G("", !0),
          as(ye(Lu, {
            "element-id": "diagram",
            "number-format": K.numberFormat,
            "decimal-places": K.decimalPlaces,
            colors: K.colors
          }, null, 8, ["number-format", "decimal-places", "colors"]), [
            [us, K.enable.diagram && S(ae).complete]
          ]),
          K.enable.diagram && S(B).length > 1 && S(ae).complete ? (v(), pe(Hl, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": S(V),
            "stock-list": S(B),
            onShowStock: S(J)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : G("", !0)
        ], 2)) : G("", !0)
      ], 64);
    };
  }
}), gh = /* @__PURE__ */ ti(Xu, [["__scopeId", "data-v-e3f8dac3"]]), Ku = {
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
}, Zu = { class: "smartcut-object-viewer" }, Ju = ["onClick"], Qu = { class: "toggle-icon" }, ec = { class: "path-label" }, tc = {
  key: 0,
  class: "object-properties"
}, ic = { class: "key" };
function sc(i, t, e, s, n, r) {
  return v(), k("div", Zu, [
    (v(!0), k(we, null, Oe(e.data, (o, l) => (v(), k("div", {
      key: l,
      class: "array-item"
    }, [
      R("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        R("div", Qu, ie(n.expanded[l] ? "▼" : "▶"), 1),
        R("div", ec, ie(e.paths[l] || l), 1)
      ], 8, Ju),
      n.expanded[l] ? (v(), k("div", tc, [
        (v(!0), k(we, null, Oe(o, (a, u) => (v(), k("div", {
          key: u,
          class: "property-item"
        }, [
          R("div", ic, ie(u) + ": ", 1),
          R("div", {
            class: ke(["value", r.getValueType(a)])
          }, ie(r.formatValue(a)), 3)
        ]))), 128))
      ])) : G("", !0)
    ]))), 128))
  ]);
}
const nc = /* @__PURE__ */ ti(Ku, [["render", sc]]), Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: nc }, Symbol.toStringTag, { value: "Module" })), rc = ["data-placement"], oc = /* @__PURE__ */ De({
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
        var m;
        return ((m = t.referenceEl) == null ? void 0 : m.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      pr(8),
      gr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      mr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      Lr({ element: s })
    ], { floatingStyles: o, middlewareData: l, placement: a } = Ir(
      n,
      e,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (m, x, d) => fr(
          m,
          x,
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
      const { x: m, y: x } = l.value.arrow, d = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: m != null ? `${m}px` : void 0,
        top: x != null ? `${x}px` : void 0,
        [d]: "-4px"
      };
    });
    return (m, x) => (v(), pe(an, { to: "body" }, [
      ye(Pr, { name: "fade" }, {
        default: hs(() => [
          m.show && m.referenceEl ? (v(), k("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: ke(["tooltip", m.type]),
            style: xe(u.value),
            "data-placement": S(a)
          }, [
            Xt(ie(m.content) + " ", 1),
            R("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: xe(h.value)
            }, null, 4)
          ], 14, rc)) : G("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: oc }, Symbol.toStringTag, { value: "Module" })), ac = /* @__PURE__ */ De({
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
          R("pre", null, ie(t.item.issues.filter((a) => a.type === "error").flatMap((a) => S(Te)(a.message)).join(`
`)), 1)
        ], 4)) : G("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (v(), k("div", {
          key: 1,
          class: "group warnings",
          style: xe({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          R("pre", null, ie(t.item.issues.filter((a) => a.type === "warning").flatMap((a) => S(Te)(a.message)).join(`
`)), 1)
        ], 4)) : G("", !0)
      ], 64);
    };
  }
}), uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: ac }, Symbol.toStringTag, { value: "Module" })), Qe = {
  precisionFixed: Fr,
  format: _r,
  select: Re,
  selectAll: fn,
  scaleLinear: et,
  scaleSequential: ai,
  axisTop: hn,
  axisBottom: Fi,
  axisRight: dn,
  axisLeft: _i,
  symbol: qr,
  path: Br,
  arc: Hr,
  symbolTriangle: Gr,
  symbolSquare: Nr
};
class cc {
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
    c(this, "xScale", Qe.scaleLinear());
    c(this, "yScale", Qe.scaleLinear());
    c(this, "yScaleFlipped", Qe.scaleLinear());
    c(this, "measurementScale", Qe.scaleLinear());
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
      if (this.el = Qe.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = Qe.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
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
      Qe.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      Qe.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = Qe.path(), e = this.shape.machining.corners, s = [], n = [];
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
    const n = Qe.path();
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
      Qe.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
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
function hc(i) {
  var t;
  if (!(i != null && i[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[i[0]]) < "u")
    return Kt(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return Kt(this, i);
}
const dc = { id: "machining" }, fc = {
  key: 0,
  class: "debug"
}, pc = { class: "inputs" }, gc = {
  key: 0,
  class: "shape-name"
}, mc = { class: "shape-dimensions" }, yc = {
  key: 1,
  class: "sides-wrapper"
}, vc = { class: "menu" }, bc = { class: "button-wrapper" }, wc = { class: "row table-heading" }, Sc = {
  key: 0,
  class: "cell id"
}, xc = {
  key: 0,
  class: "cell"
}, kc = { class: "id" }, Cc = ["onClick"], Ic = { class: "remove" }, Pc = { key: 5 }, Lc = !1, $c = /* @__PURE__ */ De({
  __name: "Machining",
  props: /* @__PURE__ */ As({
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
  emits: /* @__PURE__ */ As(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var Be, _e, At, Wt, je, be, Ae, ii, Ut, yi, vt, bt, vi;
    const e = Lt(() => Promise.resolve().then(() => Zi)), s = i, n = t, r = Z(() => gs(E.value)), o = Z(() => hc.call({ options: s.options }, ["units"])), l = Z(() => {
      var N;
      if (!((N = h.value) != null && N.length)) return 0;
      if (ee.value === "banding") return 1;
      let L = Object.values(u.value).filter((ue) => ue.enabled).length;
      return L += 2, L;
    }), a = Z(() => {
      if (!h.value.length || ee.value === "banding") return;
      const L = {
        id: "34px",
        del: "30px"
      }, N = [];
      return h.value.forEach((ue) => {
        const ge = u.value[ue];
        ge.enabled && N.push(ge.w ?? "1fr");
      }), N.unshift(L.id), N.push(L.del), N.join(" ");
    }), u = Z(() => !ee.value || ee.value === "banding" ? null : Nt[ee.value]), h = Z(() => !ee.value || ee.value === "banding" ? [] : Object.keys(Nt[ee.value]).filter((L) => Nt[ee.value][L].enabled)), m = Z(() => ee.value ? V() : []), x = Z(() => {
      var N, ue, ge, ze;
      const L = ((ze = (ge = (ue = (N = E.value) == null ? void 0 : N.machining) == null ? void 0 : ue.corners) == null ? void 0 : ge.map((He) => {
        var Ve;
        return (Ve = He == null ? void 0 : He.isPresent) != null && Ve.call(He) ? He.getCorner() : null;
      })) == null ? void 0 : ze.filter((He) => He)) ?? [];
      return [...mt, ...L];
    }), d = (L = !0) => {
      L ? nt.value = L : Ze(() => nt.value = !1);
    }, g = () => {
      X(), I(), M(), le();
    }, w = (L, N, ue) => {
      Ze(() => {
        L[N] = ue;
      });
    }, B = (L) => {
      if (ee.value === "corners")
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
    }, j = () => ee.value !== "banding", U = (L, N = null) => {
      if (!(L != null && L.length)) return [];
      let ue = "None";
      N === "depth" && (ue = "Through");
      const ge = [{ label: ue, value: null }];
      return L.forEach((ze) => {
        const He = ze.toString().charAt(0).toUpperCase() + ze.toString().slice(1);
        ge.push({ label: He, value: ze });
      }), ge;
    }, V = () => {
      if (!ee.value) return [];
      if (ee.value === "banding") return [];
      const L = E.value.machining[ee.value];
      return Array.isArray(L) ? L : [L];
    };
    let J = null;
    const ae = () => {
      E.value && (J = new cc({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: E.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), J.init(), st.value = !0, setTimeout(() => {
        J.updateSize();
      }, 100));
    }, W = () => {
      K.value = K.value === 0 ? 1 : 0, J.flip();
    }, Y = () => {
      switch (ee.value) {
        case "holes":
          y();
          break;
        case "hingeHoles":
          $();
          break;
      }
    }, y = () => {
      E.value.machining.createHole(
        O({ v: E.value.getLongSide() }) / 2,
        O({ v: E.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        K.value
      ), J.createHoles();
    }, $ = () => {
      E.value.machining.createHingeHoles({
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
    }, X = () => {
      E.value.machining.holes.length = 0;
    }, I = () => {
      E.value.machining.hingeHoles.length = 0;
    }, M = () => {
      E.value.machining.corners.forEach((L) => {
        L.size = null, L.type = null;
      }), E.value.banding.a = !1, E.value.banding.b = !1, E.value.banding.c = !1, E.value.banding.d = !1;
    }, le = () => {
      E.value.banding = {
        a: "",
        b: "",
        c: "",
        d: "",
        y1: "",
        y2: "",
        x1: "",
        x2: ""
      };
    }, se = (L) => {
      switch (ee.value) {
        case "holes":
          return E.value.machining.holes.splice(L, 1);
        case "hingeHoles":
          return E.value.machining.hingeHoles.splice(L, 1);
        case "corners":
          E.value.machining.corners[L].size = null, E.value.machining.corners[L].type = null;
          return;
      }
    }, A = () => {
      switch (ee.value) {
        case "holes":
          return X();
        case "hingeHoles":
          return I();
        case "corners":
          return M();
      }
    }, _ = () => {
      var L;
      if (Ue.value = [], !!s.options.banding.enabled) {
        d();
        for (const N in E.value.banding)
          E.value.banding[N] ? s.options.banding.enableTypes && ((L = s.options.banding.types) != null && L.length) && (E.value.banding[N] || Ue.value.push({
            index: N,
            message: "Please select a type"
          })) : E.value.banding[N] = "";
        d(!1);
      }
    }, z = (L) => {
      const N = Ue.value.filter((ue) => ue.index === L);
      return N.length ? N.map((ue) => ue.message) : [];
    }, te = (L) => {
      const N = Ue.value.filter((ge) => ge.index === L && (ge == null ? void 0 : ge.fields)), ue = N.flatMap((ge) => ge.fields);
      return N.length ? ue : [];
    }, oe = (L, N) => {
      const ue = te(L);
      return ue != null && ue.length ? ue.includes(N) : !1;
    }, ve = () => {
      n("close");
    }, de = (L) => L && typeof L.disabled == "function" ? L.disabled : !1, Ne = (L, N, ue, ge, ze) => {
      ks(L, N, ue, ge, ze, s.findExtrasPrice);
    }, tt = (L, N, ue, ge) => {
      _n(
        L,
        N,
        ue,
        ge,
        [],
        s.findExtrasPrice
      );
    }, E = $r(i, "shape");
    if (!((Be = E.value) != null && Be.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const dt = H(null), ne = H(null), it = H(!1), st = H(!1), nt = H(!1), yt = H(!1), K = H(0), ee = H(null), Ke = H(0), Ue = H([]), Nt = ft({
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
          type: (_e = s.options.holes.diameters) != null && _e.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (At = s.options.holes.diameters) != null && At.length ? "float" : void 0,
          options: (Wt = s.options.holes.diameters) != null && Wt.length ? U(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof E.value.t < "u" && O({ v: E.value.t }) > 0,
          //[]
          required: !1,
          type: (je = s.options.holes.depths) != null && je.length ? "select" : "unitDependent",
          output: (be = s.options.holes.depths) != null && be.length ? "float" : void 0,
          options: (Ae = s.options.holes.depths) != null && Ae.length ? U(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof E.value.t < "u" && O({ v: E.value.t }) > 0,
          required: !1,
          type: (ii = s.options.holes.depths) != null && ii.length ? "select" : "unitDependent",
          output: (Ut = s.options.holes.depths) != null && Ut.length ? "float" : void 0,
          options: (yi = s.options.holes.depths) != null && yi.length ? U(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (vt = s.options.holes.diameters) != null && vt.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (bt = s.options.holes.diameters) != null && bt.length ? "float" : void 0,
          options: (vi = s.options.holes.diameters) != null && vi.length ? U(s.options.holes.diameters) : void 0
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
          options: U(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: "Size",
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? O({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? O({ v: s.options.corners.maxValue, o: s.options }) : O({ v: E.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), $e = ft({
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
    }), Le = () => {
      var L;
      return !(!((L = E == null ? void 0 : E.value) != null && L.machining) || !it.value || nt.value);
    };
    return Pe(() => {
      var L;
      return (L = E.value) == null ? void 0 : L.listId;
    }, () => {
      Le() && ae();
    }), Pe(() => {
      var L;
      return (L = E.value) == null ? void 0 : L.id;
    }, () => {
      Le() && ae();
    }), Pe(ee, (L) => {
      if (Le()) {
        if (L === "banding") {
          d(), _(), d(!1);
          return;
        }
        if (!L) {
          Ue.value = [];
          return;
        }
        d(), Ue.value = E.value.machining.validate(
          E.value,
          L,
          $e == null ? void 0 : $e[L]
        ), L === "hingeHoles" && E.value.machining.hingeHoles.forEach((N, ue) => {
          Hi(N, $e == null ? void 0 : $e.holes, Ue.value, ue);
        }), d(!1);
      }
    }, { deep: !0, immediate: !0 }), Pe(() => {
      var L, N;
      return (N = (L = E == null ? void 0 : E.value) == null ? void 0 : L.machining) == null ? void 0 : N.holes;
    }, () => {
      Le() && (d(), Ue.value = E.value.machining.validate(
        E.value,
        "holes",
        $e == null ? void 0 : $e.holes
      ), J.createHoles(), d(!1));
    }, { deep: !0, immediate: !0 }), Pe(() => {
      var L, N;
      return (N = (L = E == null ? void 0 : E.value) == null ? void 0 : L.machining) == null ? void 0 : N.hingeHoles;
    }, () => {
      Le() && (d(), E.value.machining.updateHingeHoles(E.value), Ue.value = E.value.machining.validate(
        E.value,
        "hingeHoles",
        $e == null ? void 0 : $e.hingeHoles
      ), E.value.machining.hingeHoles.forEach((L, N) => {
        Hi(L, $e == null ? void 0 : $e.holes, Ue.value, N);
      }), J.createHingeHoles(), d(!1));
    }, { deep: !0, immediate: !0 }), Pe(() => {
      var L, N;
      return (N = (L = E == null ? void 0 : E.value) == null ? void 0 : L.machining) == null ? void 0 : N.corners;
    }, () => {
      if (Le()) {
        d(), Ue.value = E.value.machining.validate(
          E.value,
          "corners",
          $e == null ? void 0 : $e.corners
        ), E.value.machining.validate(E.value, "holes"), E.value.machining.validate(E.value, "hingeHoles"), J.createShape(), J.createHoles(), J.createHingeHoles();
        for (const L of E.value.machining.corners)
          L.isPresent() || xs(E.value, "banding", L.getCorner(), !0);
        J.createBanding(), d(!1);
      }
    }, { deep: !0, immediate: !0 }), Pe(() => {
      var L;
      return (L = E == null ? void 0 : E.value) == null ? void 0 : L.banding;
    }, () => {
      Le() && (_(), J.createBanding());
    }, { deep: !0, immediate: !0 }), ht(() => {
      var N;
      if ((N = document.getElementById("machining")) == null || N.requestFullscreen(), !E.value || !E.value.l || !E.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      Ze(() => ae());
      const L = document.querySelector("#smartcut-app #machining .diagram");
      dt.value || (dt.value = new ResizeObserver((ue) => {
        clearTimeout(ne.value ?? void 0), st.value && (ne.value = window.setTimeout(() => {
          if (yt.value) {
            yt.value = !1;
            return;
          }
          ue[0].contentRect.width !== Ke.value && (Ke.value = ue[0].contentRect.width, Ke.value && J.updateSize());
        }, 10));
      }), dt.value.observe(L)), it.value = !0;
    }), (L, N) => {
      var ge, ze, He, Ve, si;
      const ue = Bt("font-awesome-icon");
      return v(), k("div", dc, [
        L.env === "development" && Lc ? (v(), k("div", fc, [
          ye(S(e), {
            data: [E.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        R("div", null, [
          R("div", pc, [
            R("button", {
              type: "button",
              class: "close",
              onClick: ve
            }, [
              ye(ue, { icon: ["fass", "xmark"] })
            ]),
            (ge = E.value) != null && ge.name ? (v(), k("div", gc, ie(E.value.name), 1)) : G("", !0),
            R("div", mc, ie((ze = E.value) == null ? void 0 : ze.l) + " x " + ie((He = E.value) == null ? void 0 : He.w) + " " + ie((Ve = E.value) != null && Ve.t ? "x " + ((si = E.value) == null ? void 0 : si.t) : null), 1),
            L.options.faces.enabled ? (v(), k("div", yc, [
              R("div", {
                ref: "sides",
                class: ke(["sides", { flipped: K.value === 1 }]),
                onClick: W
              }, N[4] || (N[4] = [
                R("div", { class: "side-a" }, " A ", -1),
                R("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              N[5] || (N[5] = R("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : G("", !0),
            r.value ? (v(), k("button", {
              key: 2,
              onClick: g
            }, " Delete all machining ")) : G("", !0),
            R("div", vc, [
              L.options.holes.enabled ? (v(), k("div", {
                key: 0,
                class: ke({ selected: ee.value === "holes" }),
                onClick: N[0] || (N[0] = (Ge) => ee.value = "holes")
              }, " Holes ", 2)) : G("", !0),
              L.options.hingeHoles.enabled ? (v(), k("div", {
                key: 1,
                class: ke({ selected: ee.value === "hingeHoles" }),
                onClick: N[1] || (N[1] = (Ge) => ee.value = "hingeHoles")
              }, " Hinge holes ", 2)) : G("", !0),
              L.options.corners.enabled ? (v(), k("div", {
                key: 2,
                class: ke({ selected: ee.value === "corners" }),
                onClick: N[2] || (N[2] = (Ge) => ee.value = "corners")
              }, " Corners ", 2)) : G("", !0),
              L.options.banding.enabled ? (v(), k("div", {
                key: 3,
                class: ke({ selected: ee.value === "banding" }),
                onClick: N[3] || (N[3] = (Ge) => ee.value = "banding")
              }, " Banding ", 2)) : G("", !0)
            ]),
            R("div", bc, [
              ee.value === "holes" || ee.value === "hingeHoles" ? (v(), k("button", {
                key: 0,
                type: "button",
                onClick: Y
              }, " Create ")) : G("", !0),
              ee.value && ee.value !== "banding" ? (v(), k("button", {
                key: 1,
                type: "button",
                onClick: A
              }, " Delete all ")) : G("", !0)
            ]),
            ee.value === "banding" && E.value ? (v(), pe(os, {
              key: 3,
              shape: E.value,
              env: L.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": x.value,
              labels: L.options.banding.labels,
              "all-options": L.options.banding.options,
              pricing: L.options.banding.pricing,
              "user-friendly-field-map": S(Me),
              "part-columns": 1,
              translate: L.translate,
              "orientation-model": 0,
              "get-price": L.getExtrasPrice,
              "format-price": L.formatPrice,
              "get-available-pricing-options": L.getAvailablePricingOptions,
              onSet: Ne,
              onUpdateAll: tt
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : G("", !0),
            ee.value !== "banding" && m.value.length ? (v(), k("div", {
              key: 4,
              class: ke(["grid-table", ee.value]),
              style: xe({ "grid-template-columns": a.value })
            }, [
              R("div", wc, [
                j() ? (v(), k("div", Sc)) : G("", !0),
                (v(!0), k(we, null, Oe(u.value, (Ge, Je, he) => as((v(), k("div", {
                  key: he,
                  class: "cell"
                }, ie(Ge.label ?? Je), 1)), [
                  [us, Ge.enabled]
                ])), 128)),
                N[6] || (N[6] = R("div", { class: "cell del" }, null, -1))
              ]),
              (v(!0), k(we, null, Oe(m.value, (Ge, Je) => (v(), k("div", {
                key: Je,
                class: "row"
              }, [
                j() ? (v(), k("div", xc, [
                  R("div", kc, ie(B(Je)), 1)
                ])) : G("", !0),
                (v(!0), k(we, null, Oe(h.value, (he, wt) => (v(), k("div", {
                  key: wt,
                  class: "cell"
                }, [
                  u.value[he].type !== "select" && u.value[he].type !== "checkbox" ? (v(), pe(at, {
                    key: 0,
                    id: he + "-" + wt,
                    warning: oe(Je, he),
                    type: u.value[he].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: u.value[he].label ?? he,
                    disabled: de(u.value[he]),
                    value: Ge[he],
                    units: o.value,
                    output: u.value[he].output,
                    "onUpdate:value": (St) => w(Ge, he, St)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : u.value[he].type === "checkbox" ? (v(), pe(at, {
                    key: 1,
                    id: he + "-" + wt,
                    type: "checkbox",
                    warning: oe(Je, he),
                    "enable-label": !1,
                    disabled: de(u.value[he]),
                    value: Ge[he],
                    output: u.value[he].output,
                    "onUpdate:value": (St) => w(Ge, he, St)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : u.value[he].type === "select" ? (v(), pe(at, {
                    key: 2,
                    id: he + "-" + wt,
                    type: "select",
                    "enable-label": !1,
                    warning: oe(Je, he),
                    disabled: de(u.value[he]),
                    value: Ge[he],
                    options: u.value[he].options,
                    output: u.value[he].output,
                    "onUpdate:value": (St) => w(Ge, he, St)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : G("", !0)
                ]))), 128)),
                R("div", {
                  class: "cell",
                  onClick: (he) => se(Je)
                }, [
                  R("div", Ic, [
                    ye(ue, { icon: ["fass", "trash"] })
                  ])
                ], 8, Cc),
                (v(!0), k(we, null, Oe(z(Je), (he, wt) => (v(), k("div", {
                  key: wt,
                  class: "group validation",
                  style: xe({ "grid-column-end": "span " + l.value })
                }, ie(he), 5))), 128))
              ]))), 128))
            ], 6)) : ee.value !== "banding" ? (v(), k("div", Pc, " Please select from the menu above ")) : G("", !0)
          ]),
          R("div", {
            id: "machining-diagram",
            class: ke(["diagram", { flipped: K.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
}), Tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: $c }, Symbol.toStringTag, { value: "Module" })), Oc = {
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
      files: Tr([])
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
function Dc(i, t, e, s, n, r) {
  return v(), k("div", {
    id: "drop",
    class: ke({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = Or((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    R("div", null, ie(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const Ac = /* @__PURE__ */ ti(Oc, [["render", Dc]]), Ec = { id: "import-file" }, Rc = /* @__PURE__ */ De({
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
    const e = i, s = t, { t: n } = Ui(["main", "errors"]), r = H([]), o = H([]), l = H([]), a = H([]), u = H({}), h = H([]), m = H(!1), x = H(null), d = H(null), g = [
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
    ], w = Z(() => {
      const A = {};
      return r.value.forEach((_, z) => {
        A[z] = {};
        for (const [te, oe] of Object.entries(_)) {
          if (!g.includes(te)) continue;
          const ve = U(te, oe);
          (ve === !0 || ve === !1) && (A[z][te] = ve);
        }
      }), A;
    }), B = Z(() => e.customFields.map((A) => A.label)), j = (A, _) => {
      if (_) {
        const z = Object.keys(_), te = [[]];
        z.forEach((ve) => {
          const de = _[ve], Ne = [];
          te.forEach((tt) => {
            de.forEach((E) => Ne.push([...tt, E]));
          }), te.splice(0, te.length, ...Ne);
        });
        const oe = /* @__PURE__ */ new Set();
        te.forEach((ve) => oe.add(ve.join("|").toLowerCase())), A === "banding" ? x.value = oe : d.value = oe;
      }
    }, U = (A, _) => {
      if (_ === "???") return !0;
      function z(oe) {
        return oe ? (oe = oe.trim().toLowerCase(), oe === "l" || oe === "w") : !0;
      }
      const te = {
        banding: (oe) => V(oe, x.value, "banding"),
        finish: (oe) => V(oe, d.value, "finish"),
        orientationLock: z
      };
      return A in te ? te[A](_) : null;
    }, V = (A, _, z) => {
      if (A = I(A), !A) return !0;
      const te = A.split(","), oe = te.every((ve) => !ve || _.has(ve.toLowerCase()));
      if (!oe) {
        const ve = te.filter((de) => !_.has(de.toLowerCase()));
        console.log(`Valid ${z} choices...`), console.table(Array.from(_)), console.log(`The following ${z} choices are invalid`, ve);
      }
      return oe;
    }, J = (A, _) => {
      const z = {
        bandingOptions: (te) => ae(te, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (te) => ae(te, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return A in z ? z[A](_) : null;
    }, ae = (A, _, z, te) => {
      if (A = I(A), !A)
        return te.reduce((de, Ne) => ({ ...de, [Ne]: {} }), {});
      const oe = A.split(",").map((de) => de.toLowerCase()), ve = {};
      return te.forEach((de, Ne) => {
        ve[de] = {}, Object.keys(_).forEach((tt, E) => {
          var dt;
          ve[de][z[E]] = ((dt = oe[Ne]) == null ? void 0 : dt.split("|")[E]) || "";
        });
      }), ve;
    }, W = () => r.value.map((A, _) => ({
      l: e.numberFormat === "decimal" ? Ri(A.l) : A.l,
      w: e.numberFormat === "decimal" ? Ri(A.w) : A.w,
      t: e.numberFormat === "decimal" ? Ri(A.t) : A.t,
      q: A.q,
      orientationLock: A.orientationLock,
      name: A.name,
      material: A.material,
      bandingOptions: w.value[_].banding ? J("bandingOptions", A.banding) : null,
      finishOptions: w.value[_].finish ? J("finishOptions", A.finish) : null,
      numberFormat: e.numberFormat,
      customData: le(A)
    })), Y = (A) => {
      var z;
      const _ = (z = A == null ? void 0 : A[0]) == null ? void 0 : z.data;
      _ && yr.parse(_, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (te) => y(te),
        error: () => s("error")
      });
    }, y = (A) => {
      o.value = A.data.filter((_) => _.some((z) => z)), l.value = o.value[0], u.value = {};
      for (let _ = l.value.length; _--; ) {
        const z = l.value[_], te = $(z);
        te ? u.value[_] = te : (u.value[_] = null, B.value.includes(z) && (u.value[_] = "customData." + e.customFields.find((oe) => oe.label === z).id));
      }
      X(), o.value.shift(), M(), se();
    }, $ = (A) => {
      const _ = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", n("l"), n("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", n("w"), n("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", n("t"), n("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", n("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", n("quantity"), n("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", n("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", n("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", n("banding")],
        finish: ["finish", "paint"]
      }, z = Object.entries(_).reduce(
        (te, [oe, ve]) => (ve.some((de) => A && A.toLowerCase() === de) && te.push(oe), te),
        []
      );
      return z.length > 1 ? null : z[0];
    }, X = () => {
      m.value = !1, a.value = Object.values(u.value).map((_) => !_ || _ === "N" ? null : g.includes(_) ? _ : (m.value = !0, null));
      const A = a.value.filter((_, z) => a.value.indexOf(_) !== z);
      h.value = A.map((_) => a.value.reduce(
        (z, te, oe) => (te && te === _ && z.push(oe), z),
        []
      ));
    }, I = (A) => A && A.replace(/\s*,\s*/g, ","), M = () => {
      const A = o.value.map((_) => {
        const z = {};
        return l.value.forEach((te, oe) => {
          if (h.value.flat().includes(oe))
            return z[u.value[oe]] = "???";
          z[u.value[oe]] = _[oe];
        }), z;
      });
      r.value = A;
    }, le = (A) => {
      let _ = {};
      for (let z in A)
        if (z.startsWith("customData.")) {
          let te = z.slice(11);
          _[te] = A[z];
        }
      return _;
    }, se = () => {
      const A = W();
      A != null && A.length && s("import", A);
    };
    return ht(() => {
      j("banding", e.bandingOptions), j("finish", e.finishOptions);
    }), (A, _) => (v(), k("div", Ec, [
      ye(Ac, {
        label: S(n)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: Y
      }, null, 8, ["label"])
    ]));
  }
}), Mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Rc }, Symbol.toStringTag, { value: "Module" }));
class It extends Error {
  constructor(t, e) {
    super(t), this.code = e, this.name = "FormulaError";
  }
}
class on {
  constructor({ url: t = null, spec: e = null }) {
    c(this, "url");
    c(this, "spec");
    // Update the operations object to use the FormulaOperation type
    c(this, "operations", {
      add: (t, e) => t + e,
      subtract: (t, e) => t - e,
      multiply: (t, e) => t * e,
      divide: (t, e) => {
        if (e === 0) throw new It("Division by zero", "DIVISION_BY_ZERO");
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
        const w = n[u];
        if (w)
          return h === "q" ? w.q : w[h];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const m = t.nodes.get(a);
      if (typeof m.formula == "number")
        return r.set(a, m.formula), m.formula;
      o.add(a);
      const x = t.edges.get(a) || /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
      for (const w of x)
        if (w.startsWith("input.")) {
          const B = w.split(".")[1];
          d.set(w, s[B]);
        } else
          d.set(w, l(w));
      const g = this.evaluateFormulaWithDeps(m.formula, d, s);
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
    if (!((e = this.spec) != null && e.inputs)) throw new It("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
      if (r === void 0)
        throw new It(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new It(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new It("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new It(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new It(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new It(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
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
const Fc = {
  key: 0,
  class: "debug"
}, _c = { id: "formula-pricing" }, qc = {
  key: 1,
  class: "extras"
}, Bc = { class: "heading" }, Hc = { id: "hardware-total" }, Gc = { class: "heading panels" }, Nc = !0, Wc = /* @__PURE__ */ De({
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
    const e = Lt(() => Promise.resolve().then(() => Zi)), s = i, { t: n } = Ui(["main", "errors"]), r = t, o = Dr("calculator"), l = Z(() => o()), a = H("production");
    let u = null;
    const h = H(null), m = H([]), x = H(!1), d = H(""), g = Z(() => {
      if (!x.value || !m.value.length || m.value.every((y) => y.value === null)) return null;
      const Y = J();
      return Ze(() => r("panel-result", Y)), Y;
    }), w = Z(() => {
      if (!l.value || !x.value || !m.value.length || m.value.every((y) => y.value === null)) return;
      const Y = ae();
      return Ze(() => r("hardware-result", Y, B.value)), Y;
    }), B = Z(() => {
      if (w.value)
        return Object.values(w.value).reduce((Y, y) => Y + y.totalCost, 0);
    });
    Pe(g, (Y) => {
      var I, M, le;
      if (!x.value || !Y || !l.value || !((I = l.value) != null && I.inputShapes)) return;
      const y = (se) => se != null && se.name ? se.name.toLowerCase() : "", $ = new Map(
        l.value.inputShapes.map((se) => [y(se), se])
      ), X = /* @__PURE__ */ new Set();
      for (const se of Object.values(g.value)) {
        if (!se.name) continue;
        const A = y(se), _ = $.get(A), z = {
          ...se,
          name: se.name.toUpperCase() || (_ == null ? void 0 : _.name.toUpperCase()),
          material: ((M = se.material) == null ? void 0 : M.toUpperCase()) || ((le = _ == null ? void 0 : _.material) == null ? void 0 : le.toUpperCase()),
          bandingOptions: se.bandingOptions || {},
          finishOptions: se.finishOptions || {},
          orientationLock: se.orientationLock || null,
          notes: d.value,
          readonly: !0
        }, te = _ || l.value.createInputShape(z);
        if (_) {
          Object.assign(_, z);
          for (const oe of ["banding", "finish"])
            l.value.initExtrasOptions(_, oe);
        } else
          l.value.inputShapes.push(te);
        X.add(A);
      }
      l.value.inputShapes = l.value.inputShapes.filter(
        (se) => X.has(y(se))
      );
    }, { immediate: !1 }), ht(() => W());
    const j = (Y) => {
      s.debug && console.log(Y);
    }, U = () => {
      m.value = Object.values(h.value.inputs).map(() => ({
        value: null
      }));
    }, V = (Y, y) => {
      m.value[Y] && (m.value[Y].value = y);
    }, J = () => {
      try {
        return u.calculatePanelsFromFields(m.value);
      } catch (Y) {
        return l.value.inputShapes.length = 0, console.error(Y), null;
      }
    }, ae = () => {
      try {
        return u.calculateHardwareFromFields(m.value);
      } catch (Y) {
        return console.error(Y), null;
      }
    }, W = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (j(`SmartCut - Formula calculator init from url: ${s.url}`), u = new on({ url: s.url }), h.value = await u.getSpec()) : s.spec && (j("SmartCut - Formula calculator init with JSON"), u = new on({ spec: s.spec }), h.value = await u.getSpec()), U(), x.value = !0;
    };
    return (Y, y) => {
      var $, X;
      return v(), k(we, null, [
        a.value === "development" && Nc ? (v(), k("div", Fc, [
          y[1] || (y[1] = R("div", null, "Developer information", -1)),
          ye(S(e), {
            data: [g.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        R("div", _c, [
          ($ = h.value) != null && $.projectName ? (v(), pe(at, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: d.value,
            "onUpdate:value": y[0] || (y[0] = (I) => d.value = I)
          }, null, 8, ["value"])) : G("", !0),
          (v(!0), k(we, null, Oe((X = h.value) == null ? void 0 : X.inputs, (I, M, le) => {
            var se;
            return v(), pe(at, {
              id: "formula-field-" + le,
              key: le,
              type: I.type,
              label: I.label,
              placeholder: I.label,
              min: I.min ?? 0,
              max: I.max ?? null,
              default: I.default ?? 0,
              value: (se = m.value[le]) == null ? void 0 : se.value,
              "onUpdate:value": (A) => V(le, A)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          w.value ? (v(), k("div", qc, [
            R("div", Bc, ie(S(n)("Hardware")), 1),
            (v(!0), k(we, null, Oe(w.value, (I, M) => (v(), k("div", { key: M }, ie(I.name) + " x" + ie(I.q) + " = " + ie(i.formatPrice(I.totalCost)), 1))), 128)),
            R("div", Hc, ie(S(n)("Hardware total")) + " = " + ie(i.formatPrice(B.value)), 1)
          ])) : G("", !0),
          R("div", Gc, ie(S(n)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Wc }, Symbol.toStringTag, { value: "Module" })), Uc = { id: "smartcut-notices" }, jc = { class: "content" }, zc = ["onClick"], Vc = ["innerHTML"], Yc = /* @__PURE__ */ De({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = ds(), n = H({}), r = Z(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Bt("font-awesome-icon");
      return v(), pe(an, { to: "body" }, [
        R("div", Uc, [
          ye(Ar, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: ke(["notices-container", t.position])
          }, {
            default: hs(() => [
              (v(!0), k(we, null, Oe(S(e), (u) => (v(), k("div", {
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
                R("div", jc, [
                  R("div", {
                    class: "message",
                    onClick: (h) => u.action()
                  }, ie(u.message), 9, zc),
                  R("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, Vc)
                ]),
                u.persistent ? G("", !0) : (v(), pe(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (h) => S(s)(u.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Yc }, Symbol.toStringTag, { value: "Module" }));
export {
  Jt as A,
  jr as B,
  gh as C,
  ji as D,
  ph as E,
  mh as F,
  ys as I,
  yh as N,
  Zi as O,
  Tt as S,
  ti as _,
  Yi as a,
  Gt as b,
  re as c,
  Te as d,
  dh as e,
  bl as f,
  ch as g,
  Bi as h,
  _t as i,
  rh as j,
  oh as k,
  lh as l,
  fh as m,
  ah as n,
  uh as o,
  O as p,
  Vt as q,
  nh as r,
  _o as s,
  hh as t,
  ih as u,
  th as v,
  mt as w,
  pt as x,
  Et as y,
  Hs as z
};

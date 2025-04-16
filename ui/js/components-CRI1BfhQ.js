var wr = Object.defineProperty;
var Sr = (i, t, e) => t in i ? wr(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var c = (i, t, e) => Sr(i, typeof t != "symbol" ? t + "" : t, e);
import { F as di, g as ei, d as Ai, i as $t, c as xr, a as vn, b as Je, v as us, t as Fi, e as Ei, h as kr, s as Cr, f as Ir, o as Lr, j as Dr, k as Pr, P as Tr } from "./vendor-Y3hHrfRC.js";
import { i as $r } from "./vendor-i18n-nUcHjT4U.js";
import { d as Me, c as C, o as y, F as xe, r as Ee, n as ke, a as Ce, b as T, w as cs, t as te, v as hs, e as G, f as Or, g as H, h as Q, i as De, j as pt, k as et, l as ds, m as ci, u as k, p as Qt, q as ge, s as Ar, x as fs, y as ji, z as Nt, A as ye, B as Er, C as Tt, D as Mr, E as Rr, G as Fr, H as _r, I as bt, J as qr, T as Br, K as yn, L as Hr, M as qs, N as Gr, O as Wr, P as Nr, Q as Ur, R as jr } from "./vendor-vue-CJxGe4Gd.js";
import { u as bn, a as ps, b as gs, c as zr, d as Vr, e as Yr } from "./composables-2cx3fLQ9.js";
import { a as wn, b as Sn, l as nt, c as _i, d as qi, s as _e, r as Ht, e as hi, f as xn, g as Xr, h as Kr, i as Zr, p as Jr, S as Qr, j as eo, k as to } from "./vendor-d3-B-JATA3m.js";
function yi(i) {
  return !(!i || typeof i != "string");
}
function io(i) {
  return !yi(i) || !i || typeof i != "string" ? "" : i.toUpperCase();
}
function Zt(i) {
  return yi(i) ? i.trim().split(" ").map((t) => Ae(t)).join(" ") : "";
}
function Ae(i) {
  return yi(i) ? i.trim().charAt(0).toUpperCase() + i.slice(1) : "";
}
function zi(i) {
  return yi(i) ? (i = i.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^ a-z0-9._\-|]/gim, ""), i.trim()) : "";
}
function so(i, t = 100) {
  return yi(i) ? (i = i.trim(), i = i.substring(0, t), i) : "";
}
let kn = $r;
function fh(i) {
  kn = i;
}
function Be(i, t) {
  const e = kn.t(i, { ns: ["main", "errors"], ...t });
  return e || i;
}
const Kt = 1e-10, no = 10, ro = Number.MAX_SAFE_INTEGER, oo = 4294967295, We = (i) => typeof i == "number" && Number.isFinite(i), Mi = (i) => Array.isArray(i) && i.length > 0;
function ui(i, t, e = Kt) {
  if (i === t) return 0;
  if (Number.isInteger(i) && Number.isInteger(t))
    return i > t ? 1 : -1;
  const s = i - t;
  return Math.abs(s) < e ? 0 : s;
}
const lo = {
  greaterThan: (i, t, e = Kt) => !We(i) || !We(t) ? !1 : ui(i, t, e) > 0,
  greaterThanOrEqualTo: (i, t, e = Kt) => !We(i) || !We(t) ? !1 : ui(i, t, e) >= 0,
  lessThan: (i, t, e = Kt) => !We(i) || !We(t) ? !1 : ui(i, t, e) < 0,
  lessThanOrEqualTo: (i, t, e = Kt) => !We(i) || !We(t) ? !1 : ui(i, t, e) <= 0,
  equalTo: (i, t, e = Kt) => !We(i) || !We(t) ? !1 : ui(i, t, e) === 0
};
function ao(i) {
  return We(i) ? Number.isInteger(i) ? i : Number(i.toFixed(no)) : !1;
}
function uo(i) {
  if (!We(i) || i < 0 || i > ro)
    throw new Error("Invalid length parameter");
  return Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (oo + 1) * i);
}
function co(i, t) {
  if (!Mi(i))
    throw new Error("Invalid array parameter");
  if (!We(t) || t < 0 || t > i.length)
    throw new Error("Invalid size parameter");
  const e = i.slice(), s = i.length - t;
  for (let n = i.length - 1; n >= s; n--) {
    const r = Math.floor(Math.random() * (n + 1));
    [e[n], e[r]] = [e[r], e[n]];
  }
  return e.slice(s);
}
class Ii {
  static calculateMean(t) {
    if (!Mi(t))
      throw new Error("Invalid input array");
    return t.reduce((e, s) => e + s, 0) / t.length;
  }
  static calculateStandardDeviation(t, e = null) {
    if (!Mi(t))
      throw new Error("Invalid input array");
    const s = e ?? this.calculateMean(t), n = t.reduce((r, o) => {
      const l = o - s;
      return r + l * l;
    }, 0) / t.length;
    return Math.sqrt(n);
  }
  static calculateCoefficientOfVariation(t) {
    if (!Mi(t))
      throw new Error("Invalid input array");
    const e = this.calculateMean(t);
    if (e === 0)
      throw new Error("Mean is zero, coefficient of variation undefined");
    return this.calculateStandardDeviation(t, e) / e;
  }
}
const ce = {
  ...lo,
  isNumber: We,
  round: ao,
  getRandom: uo,
  getRandomSample: co,
  calculateStandardDeviation: Ii.calculateStandardDeviation.bind(Ii),
  calculateCoefficientOfVariation: Ii.calculateCoefficientOfVariation.bind(Ii)
}, Bs = 10, ho = 0;
class ms extends Error {
  constructor(t) {
    super(t), this.name = "NumberFormatError";
  }
}
function fo(i) {
  const t = i.toString(), e = t.indexOf(".");
  return e === -1 ? 0 : t.length - e - 1;
}
function S(i) {
  var o, l, a, u;
  if (i.v == null || i.v === "")
    return i.nf === "decimal" || !i.nf && !((o = i.o) != null && o.numberFormat) ? null : "";
  if (typeof i.v == "number" && (i.nf === "decimal" || !i.nf && !((l = i.o) != null && l.numberFormat))) {
    if (i.dp === void 0 && ((a = i.o) == null ? void 0 : a.decimalPlaces) === void 0)
      return i.v;
    const f = i.dp ?? ((u = i.o) == null ? void 0 : u.decimalPlaces) ?? Bs, p = Math.pow(10, f);
    return Math.round(i.v * p) / p;
  }
  const t = i.o ?? {}, e = i.nf ?? t.numberFormat ?? "decimal", s = i.dp ?? t.decimalPlaces ?? Bs, n = i.pl ?? t.parseLocale ?? !1, r = i.fr ?? t.fractionRoundTo ?? ho;
  try {
    const f = yo(i.v, n);
    return f ? e === "decimal" ? po(f, i.v, s) : go(f, r) : e === "decimal" ? 0 : "0";
  } catch (f) {
    throw new ms(
      `Failed to convert number format: ${i.v} to ${e}. ${f.message}`
    );
  }
}
function po(i, t, e) {
  if (typeof i == "number" && !String(t).includes("/")) {
    if (typeof e != "number")
      return i;
    const l = Math.pow(10, e);
    return Math.round(i * l) / l;
  }
  if (typeof i == "string" && !i.includes("/")) {
    const l = Number(i);
    if (typeof e != "number")
      return Li(l);
    const a = Math.pow(10, e);
    return Li(Math.round(l * a) / a);
  }
  const n = new di(i).valueOf();
  if (typeof t == "string" && t.includes("/")) {
    if (typeof e == "number") {
      const l = Math.pow(10, e);
      return Li(Math.round(n * l) / l);
    }
    return n;
  }
  const r = fo(String(t)), o = Math.pow(10, r);
  return Li(Math.round(n * o) / o);
}
function go(i, t) {
  if (typeof i == "number" && Number.isInteger(i))
    return `${i}/1`;
  const e = new di(i);
  if (t > 0) {
    const s = e.mul(t), n = Math.round(s.valueOf());
    return new di(n, t).toFraction(!0);
  }
  return e.simplify().toFraction(!0);
}
function Li(i) {
  const t = i.toString();
  return t.includes(".") && /\.0+$/.test(t) ? parseInt(t, 10) : i;
}
function mo(i = "en-US") {
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
    const { thousandsSeparator: e, decimalSeparator: s } = mo(), n = t.replace(new RegExp(`\\${e}`, "g"), "").replace(new RegExp(`\\${s}`), "."), r = Number(n);
    return isFinite(r) ? r : null;
  } catch {
    throw new ms(`Failed to parse number: ${i}`);
  }
}
function vo(i) {
  if (!i) return !1;
  const t = i.toString().trim();
  return /^(\d+\s+)?\d+\/\d+$|^\d+$|^\d+'\s*(\d+\s+)?\d+\/\d+"$|^\d+'\s*(\d+\s+)?\d+\/\d+$|^(\d+\s+)?\d+\/\d+"$/.test(t);
}
function yo(i, t = !1) {
  if (!i && i !== 0) return null;
  let e = String(i).trim();
  if (!e) return null;
  try {
    if (vo(i))
      return e.replace(/[^0-9\s/]/g, "").replace(/\s+/g, " ").trim();
    {
      t ? (e = e.replace(/[^0-9,. -]/g, ""), e = e.replace(/\s/g, "")) : (e = e.replace(/[^0-9,.-]/g, ""), e = e.replace(/,/g, "")), e.startsWith(".") && (e = "0" + e), e.startsWith("-.") && (e = "-0." + e.slice(2));
      const s = t ? Ri(e) : parseFloat(e);
      return s === null || isNaN(s) ? null : s.toString();
    }
  } catch (s) {
    throw new ms(
      `Failed to clean numeric input: ${i}. ${s.message}`
    );
  }
}
function ph(i, t, e = null, s = null) {
  if (i && !(!Se(i) && !ot(i))) {
    if (!["decimal", "fraction"].includes(t)) {
      console.warn("Attempting to update to an invalid number format:", t);
      return;
    }
    for (const n of i.numberFormatKeys) {
      if (typeof i[n] == "object") {
        for (const r in i[n])
          i[n][r] = S({ v: i[n][r], nf: t, dp: e, pl: !1, fr: s });
        return;
      }
      i[n] = S({ v: i[n], nf: t, dp: e, pl: !1, fr: s });
    }
  }
}
const Bi = {
  missingProperty: (i, t) => `[Sorting Warning] Missing property "${i}" in ${t}`,
  missingMethod: (i, t) => `[Sorting Warning] Missing method "${i}" in ${t}`,
  missingArea: "[Sorting Warning] One or both objects missing getArea method",
  missingAspect: "[Sorting Warning] One or both objects missing getAspect method",
  missingLongSide: "[Sorting Warning] One or both objects missing getLongSide method"
};
function Hs(i) {
  return typeof (i == null ? void 0 : i.getArea) == "function";
}
function Gs(i) {
  return typeof (i == null ? void 0 : i.getAspect) == "function";
}
function Ws(i) {
  return typeof (i == null ? void 0 : i.getLongSide) == "function";
}
const me = (i, t, e) => t in i ? i[t] : (console.warn(Bi.missingProperty(String(t), e)), null), Di = (i, t) => (e, s) => {
  const n = i(e, s);
  return n !== 0 ? n : t(e, s);
}, Xt = (i, t) => {
  if (!Hs(i) || !Hs(t))
    return console.warn(Bi.missingArea), 0;
  const e = i.getArea(), s = t.getArea();
  return e < s ? -1 : e > s ? 1 : 0;
}, ut = (i, t) => {
  const e = me(i, "id", "first item"), s = me(t, "id", "second item");
  if (e === null || s === null) return 0;
  const n = e.toString().split("."), r = s.toString().split(".");
  return n[0] !== r[0] ? parseInt(n[0]) - parseInt(r[0]) : parseInt(n[1]) - parseInt(r[1]);
};
function ct(i) {
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
const Hi = {
  // Dimension-based sorts
  WDLD: ct([
    ["w", "desc"],
    ["l", "desc"]
  ]),
  WALA: ct([
    ["w", "asc"],
    ["l", "asc"]
  ]),
  LDWD: ct([
    ["l", "desc"],
    ["w", "desc"]
  ]),
  LAWA: ct([
    ["l", "asc"],
    ["w", "asc"]
  ]),
  WD: ct([["w", "desc"]]),
  LD: ct([["l", "desc"]]),
  // ID-based sorts
  LDIDA: Di(
    ct([["l", "desc"]]),
    ut
  ),
  WDIDA: Di(
    ct([["w", "desc"]]),
    ut
  ),
  // Area-based sorts
  AD: (i, t) => -Xt(i, t),
  AA: Xt,
  AAID: Di(
    Xt,
    ut
  ),
  ADID: Di(
    (i, t) => -Xt(i, t),
    ut
  ),
  // ID sorts
  ID: ut,
  IDDesc: (i, t) => -ut(i, t),
  StockID: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    return !e || !s ? 0 : ut(e, s);
  },
  StockIDAD: (i, t) => {
    const e = me(i, "stock", "first item"), s = me(t, "stock", "second item");
    if (!e || !s) return 0;
    const n = ut(e, s);
    return n !== 0 ? n : -Xt(i, t);
  },
  // Position sorts
  YX: ct([
    ["y", "asc"],
    ["x", "asc"]
  ]),
  XY: ct([
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
    const n = ut(e, s);
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
    const n = ut(e, s);
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
    return !Gs(i) || !Gs(t) ? (console.warn(Bi.missingAspect), 0) : t.getAspect() - i.getAspect();
  },
  fillThenArea(i) {
    return (t, e) => !Ws(t) || !Ws(e) ? (console.warn(Bi.missingLongSide), 0) : e[i] === t[i] ? -Xt(t, e) : parseFloat(String(e[i])) - parseFloat(String(t[i]));
  }
};
function bo(i) {
  return Se(i) || Ze(i) || Gn(i);
}
function wo(i, t, e) {
  var r, o;
  if (!e) return !0;
  const s = (r = t == null ? void 0 : t.material) == null ? void 0 : r.toLowerCase(), n = (o = i == null ? void 0 : i.material) == null ? void 0 : o.toLowerCase();
  return !s && !n || s === n;
}
function So(i, t, e) {
  return e ? !x(i.t) || !x(t.t) ? !1 : Ze(i) ? ce.equalTo(i.t, t.t) : i.t === t.t : !0;
}
function xo(i, t) {
  var e;
  return ((e = t == null ? void 0 : t.saw) == null ? void 0 : e.stockType) !== "linear" || !Ze(i) ? !0 : ns(i, 0, t) && ce.equalTo(i.w, t.w) || ns(i, 1, t) && ce.equalTo(i.l, t.w);
}
function ko(i, t, e) {
  const s = Se(i[0]), n = e.stockType;
  if (i.some((p) => x(p.stockLock) && p.stockLock.length)) return { stockList: t, shapeList: i, unusableShapes: [], unusableStock: [] };
  s || (t = t.filter((p) => p.autoAdd === !0 || x(p.q) && p.q > 0));
  const o = t.some((p) => x(p.material)), l = t.some((p) => x(p.t)), a = /* @__PURE__ */ new Set();
  for (const p of i) {
    p.stockMatch = {
      material: [],
      thickness: [],
      width: [],
      fit: []
    };
    const I = Co(p, t, e, o, l), h = I.map((m) => t.findIndex((w) => w === m || Ke(m) && Ke(w) && m.parentID === w.parentID));
    if (p.stockMatch.fit = h.length > 0, p.stockMatch.width = n === "linear" && h.length > 0, !s && I.length) {
      const m = I.map((w) => w.getParentID());
      p.stockLock = m, m.forEach((w) => a.add(w));
    }
    p.stockMatch.fit ? n === "linear" && !p.stockMatch.width && new re({
      item: p,
      field: [["w"]],
      message: "no_matching_stock_width"
    }) : new re({
      item: p,
      field: [["l"], ["w"]],
      message: "will_not_fit"
    }), p.stockMatch = null;
  }
  let u, f;
  return s || (u = i.filter((p) => !p.stockLock || !p.stockLock.length).sort(Hi.ID), f = t.filter((p) => !a.has(p.parentID)).sort(Hi.ID), t = t.filter((p) => Ke(p)).filter((p) => a.has(p.parentID)), (o || l) && (i = i.filter((p) => {
    var I;
    return (I = p == null ? void 0 : p.stockLock) == null ? void 0 : I.length;
  }))), {
    stockList: t,
    unusableStock: f,
    shapeList: i,
    unusableShapes: u
  };
}
function Co(i, t, e, s = !1, n = !1) {
  return t.filter((r, o) => {
    const l = {
      fit: bo(i) && Vi(i, r, void 0, e),
      material: wo(i, r, s),
      thickness: So(i, r, n),
      width: xo(i, r)
    };
    return Object.entries(l).forEach(([a, u]) => {
      i.stockMatch[a][o] = u;
    }), Object.values(l).every(Boolean);
  });
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
    var p, I, h, m;
    this.message = u ? Be(e) : e, this.field = s, this.index = n, this.listId = r, this.type = l, t && ("name" in t && ((p = t.name) != null && p.length) ? this.identifier = t.name.toLocaleUpperCase() : "id" in t && ((I = t.id) != null && I.length) ? this.identifier = t.id : "parentID" in t && ((h = t.parentID) != null && h.length) ? this.identifier = t.parentID : typeof ((m = this == null ? void 0 : this.index) == null ? void 0 : m[0]) == "number" && (this.identifier = String(this.index[0] + 1)), "issues" in t && Array.isArray(t.issues) && t.issues.push(this)), Array.isArray(o) && o.push(this);
    const f = `issue created for ${$l(t)}: ${this.identifier || "N/A"} - ${this.message} for field ${this.field || "N/A"}`;
    if (a) throw new Error(f);
  }
}
const Qi = {
  partMaterial: "material",
  stockMaterial: "material"
};
function Io(i) {
  return (Qi == null ? void 0 : Qi[i]) || i;
}
function Pt(i) {
  return i.length ? (i == null ? void 0 : i.filter((t) => t.type === "error")) || [] : [];
}
function Ns(i, t, e = !1) {
  var r;
  return !("issues" in i) || !((r = i.issues) != null && r.length) ? !1 : i.issues.filter((o) => o.type === (e ? "warning" : "error")).some((o) => {
    var l;
    if (!((l = o.field) != null && l.length))
      return !1;
    for (const a of o.field)
      if (a.every((u, f) => u === Io(a[f])))
        return !0;
    return !1;
  });
}
const si = ({ item: i, field: t, index: e, newIssues: s, min: n = null, max: r = null, required: o = !1, allowZero: l = !0, isWarning: a = !1 }) => {
  let u = ei(i, t);
  if (o && (u == null || u === ""))
    return new re({
      item: i,
      message: Be("not_set", { x: qe[t.join(".")] }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), null;
  if (!l && u === 0)
    return new re({
      item: i,
      message: Be("greater_than", { x: qe[t.join(".")], y: 0 }),
      field: [t],
      index: [e],
      type: a ? "warning" : "error",
      issues: s
    }), 0;
  if (u == null || u === "") return null;
  try {
    u = S(u);
  } catch {
    return Lo({
      item: i,
      field: t,
      value: ei(i, t),
      index: e,
      issues: s,
      isWarning: a
    }), null;
  }
  return Do({ item: i, field: t, value: u, index: e, issues: s, min: n, isWarning: a }), Po({ item: i, field: t, value: u, index: e, issues: s, max: r, isWarning: a }), u;
}, Lo = ({ item: i, field: t, value: e, index: s, issues: n, isWarning: r }) => {
  new re({
    item: i,
    message: Be("not_understood", { x: t.join("."), y: e }),
    field: [t],
    index: [s],
    type: r ? "warning" : "error",
    issues: n
  });
}, Do = ({ item: i, field: t, value: e, index: s, issues: n, min: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e < r && new re({
    item: i,
    message: Be("greater_than_or_equal", { x: qe[t.join(".")], y: r }),
    field: [t],
    index: [s],
    type: o ? "warning" : "error",
    issues: n
  });
}, Po = ({ item: i, field: t, value: e, index: s, issues: n, max: r, isWarning: o }) => {
  typeof e == "number" && typeof r == "number" && e > r && new re({
    item: i,
    message: Be("less_than_or_equal", { x: qe[t.join(".")], y: r }),
    field: [t],
    index: [s],
    issues: n,
    type: o ? "warning" : "error"
  });
}, To = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "banding" in i && typeof i.banding != "object" && new re({
    item: i,
    message: Be("must_be_object", { x: "banding" }),
    field: [["banding"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, $o = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "x" in i && si({ item: i, field: ["x"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, Oo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "y" in i && si({ item: i, field: ["y"], index: t, newIssues: n, min: 0, max: e, isWarning: s }), n;
}, Ao = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "l" in i && si({ item: i, field: ["l"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, Eo = ({ item: i, index: t, max: e, isWarning: s }) => {
  const n = [];
  return "w" in i && si({ item: i, field: ["w"], index: t, newIssues: n, required: !0, allowZero: !1, min: 0, max: e, isWarning: s }), n;
}, Mo = ({ item: i, index: t, max: e, isWarning: s, saw: n }) => {
  const r = [];
  return "t" in i && ((n == null ? void 0 : n.cutType) === "beam" && !i.t && new re({
    item: i,
    message: Be("thickness_required_for_beam_saw"),
    field: [["t"]],
    index: [t],
    type: "error",
    issues: r
  }), si({ item: i, field: ["t"], index: t, newIssues: r, allowZero: !1, min: 0, max: e, isWarning: s })), r;
}, Ro = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  return "q" in i && S({ v: i.q }) <= 0 && (!("autoAdd" in i) || (i == null ? void 0 : i.autoAdd) === !1) && new re({
    item: i,
    message: Be("greater_than_or_equal", { x: qe.q, y: 0 }),
    field: [["q"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, Fo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("orientationLock" in i) || i.orientationLock === void 0 || i.orientationLock === null || i.orientationLock === "") return s;
  const n = i.orientationLock.toLowerCase();
  return n !== "l" && n !== "w" && new re({
    item: i,
    message: Be("must_be_values", { x: qe.orientationLock, y: "l, w" }),
    field: [["orientationLock"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, _o = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("grain" in i) || i.grain === void 0 || i.grain === null || i.grain === "") return s;
  const n = i.grain.toLowerCase();
  return n !== "l" && n !== "w" && new re({
    item: i,
    message: Be("must_be_values", { x: qe.grain, y: "l, w" }),
    field: [["grain"]],
    index: [t],
    type: e ? "warning" : "error",
    issues: s
  }), s;
}, qo = ({ item: i, index: t, isWarning: e }) => {
  const s = [];
  if (!("customData" in i)) return s;
  const n = i.customData;
  if (typeof n != "object")
    return new re({
      item: i,
      message: Be("must_be_object", { x: qe.customData }),
      field: [["customData"]],
      index: [t],
      issues: s
    }), s;
  for (const r in n) {
    const o = n[r];
    o != null && (["string", "number", "boolean"].includes(typeof o) || new re({
      item: i,
      message: Be("must_be_string_number_boolean", { x: qe.customData }),
      field: [["customData"]],
      index: [t],
      type: e ? "warning" : "error",
      issues: s
    }));
  }
  return s;
}, Bo = ({
  item: i,
  partTrim: t,
  index: e = null,
  isWarning: s = !1
}) => {
  const n = [];
  if (!t || !("l" in i) || !("w" in i) || !i.l || !i.w) return n;
  const r = S({ v: t }), o = S({ v: i.l }), l = S({ v: i.w }), a = o - r * 2, u = l - r * 2;
  return (a <= 0 || u <= 0) && new re({
    item: i,
    message: Be("too_much_trim", { x: "part", y: r, z: `${a}x${u}` }),
    field: [["l"], ["w"], ["trim"]],
    index: [e],
    type: s ? "warning" : "error",
    issues: n
  }), n;
}, Ho = ({
  item: i,
  index: t = null,
  min: e = null,
  max: s = null,
  isWarning: n = !1
}) => {
  const r = [];
  if (!("l" in i) || !("w" in i) || !i.l || !i.w || !("trim" in i)) return r;
  if (!Ke(i) || Ke(i) && !(i != null && i.trimmed)) {
    const o = ["l", "w"], [l, a] = o.map((u) => S(i[u]));
    for (const u in i.trim)
      si({ item: i, field: ["trim", u], index: t, newIssues: r, min: e, max: s });
    if (r.length) return r;
    if (l && a && l > 0 && a > 0) {
      const u = S({ v: i.trim.x1 }), f = S({ v: i.trim.x2 }), p = S({ v: i.trim.y1 }), I = S({ v: i.trim.y2 }), h = (u || 0) + (f || 0), m = (p || 0) + (I || 0);
      h >= l && new re({
        item: i,
        message: Be("too_much_trim", {
          x: `${qe.x1.toUpperCase()} + ${qe.x2.toUpperCase()}`,
          y: qe.w,
          z: l
        }),
        field: [["trim", "x1"], ["trim", "x2"]],
        index: [t],
        type: n ? "warning" : "error",
        issues: r
      }), m >= a && new re({
        item: i,
        message: Be("too_much_trim", {
          x: `${qe.y1.toUpperCase()} + ${qe.y2.toUpperCase()}`,
          y: qe.l,
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
}, Go = ({
  item: i,
  inputStockList: t,
  saw: e,
  partTrim: s = 0,
  index: n = null,
  isWarning: r = !1
}) => {
  var u;
  const o = [], l = e.stockType;
  if (!("q" in i) || !("l" in i) || !("w" in i) || !i.l || !i.w || ("applyPartTrim" in i && i.applyPartTrim(s, l), i.issues.length)) return o;
  const a = ko([i], t, e);
  if (!a) return o;
  if ((u = a == null ? void 0 : a.unusableShapes) != null && u.length) {
    const p = a.unusableShapes[0].stockMatch;
    p.fit || new re({
      item: i,
      message: "will_not_fit",
      field: [["l"], ["w"]],
      listId: Se(i) || ot(i) ? [i.listId] : null,
      index: [n],
      type: r ? "warning" : "error",
      issues: o
    }), p.material || new re({
      item: i,
      message: "no_matching_stock_material",
      field: [["material"]],
      listId: Se(i) || ot(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), p.thickness || new re({
      item: i,
      message: "no_matching_stock_thickness",
      field: [["t"]],
      listId: Se(i) || ot(i) ? [i.listId] : null,
      index: [n],
      issues: o
    }), !p.width && l === "linear" && new re({
      item: i,
      message: "no_matching_stock_width",
      field: [["w"]],
      listId: Se(i) || ot(i) ? [i.listId] : null,
      index: [n],
      issues: o
    });
  }
  return o;
}, Wo = ({ item: i = null, index: t = null }) => {
  i.machining.validateEverything(i, t);
}, Ye = {
  customData: qo,
  banding: To,
  partTrim: Bo,
  trim: Ho,
  x: $o,
  y: Oo,
  l: Ao,
  w: Eo,
  t: Mo,
  q: Ro,
  orientationLock: Fo,
  grain: _o,
  stockMatch: Go,
  machining: Wo
};
function is(i) {
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
const Bt = [null, void 0, "none", ""], rt = {
  stockTypes: ["sheet", "roll", "linear"],
  cutTypes: {
    sheet: ["guillotine", "efficiency", "beam"],
    roll: ["guillotine", "efficiency"],
    linear: Bt
  },
  cutPreferences: {
    sheet: {
      guillotine: ["l", "w", "flex"],
      beam: ["l"],
      efficiency: Bt
    },
    roll: {
      guillotine: ["w"],
      efficiency: Bt
    },
    linear: {
      guillotine: Bt,
      efficiency: Bt
    }
  },
  defaults: {
    bladeWidth: 0,
    stackHeight: 100,
    guillotine: {
      strategy: "efficiency",
      maxPhase: 0,
      headCuts: !1
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
function No(i) {
  var t;
  return ((t = rt.cutTypes) == null ? void 0 : t[i]) ?? Bt;
}
function Uo(i, t) {
  var e, s;
  return ((s = (e = rt.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? Bt;
}
function jo(i) {
  var t;
  return ((t = rt.cutTypes) == null ? void 0 : t[i]) ?? [];
}
function zo(i, t) {
  var e, s;
  return ((s = (e = rt.cutPreferences) == null ? void 0 : e[i]) == null ? void 0 : s[t]) ?? [];
}
function es() {
  return rt.stockTypes;
}
function Cn(i) {
  return rt.stockTypes.includes(i);
}
function In(i, t) {
  return No(i).includes(t);
}
function Ln(i, t, e) {
  return Uo(i, t).includes(e);
}
function yt(i, t, e, s = {}) {
  for (const n in s)
    (s[n] === "" || s[n] === null || s[n] === void 0) && (s[n] = "none");
  if (!vs(i)) {
    console.error(Be(e, s));
    return;
  }
  new re({
    item: i,
    field: Array.isArray(t) ? t.map((n) => [n]) : [[t]],
    message: Be(e, s),
    shouldTranslate: !1
  });
}
class At {
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
    t = Wt(t), this.issues = [], e = e ?? (t == null ? void 0 : t.stockType) ?? es()[0], Vo(this, t, e), this.bladeWidth = S({ v: t == null ? void 0 : t.bladeWidth }) ?? rt.defaults.bladeWidth, this.stockType = e ?? (t == null ? void 0 : t.stockType) ?? es()[0], Cn(this.stockType) || (this.stockType = es()[0]), this.cutType = t == null ? void 0 : t.cutType, In(this.stockType, this.cutType) || (this.cutType = jo(this.stockType)[0]), this.cutPreference = t == null ? void 0 : t.cutPreference, Ln(this.stockType, this.cutType, this.cutPreference) || (this.cutPreference = zo(this.stockType, this.cutType)[0]), this.stackHeight = (t == null ? void 0 : t.stackHeight) ?? rt.defaults.stackHeight, this.guillotineOptions = Ai({}, t == null ? void 0 : t.guillotineOptions, rt.defaults.guillotine), this.efficiencyOptions = Ai({}, t == null ? void 0 : t.efficiencyOptions, rt.defaults.efficiency), this.options = Ai({}, t == null ? void 0 : t.options, rt.defaults.options), this.options.minSpacing = S({ v: this.options.minSpacing }) ?? 0, this.options.minSpacingDimension.dimension = S({ v: this.options.minSpacingDimension.dimension }) ?? 0, this.options.minSpacingDimension.minSpacing = S({ v: this.options.minSpacingDimension.minSpacing }) ?? 0;
  }
  clone() {
    const t = structuredClone(this);
    return new At(t);
  }
  //does not cater for shape dimensions
  get minSpacing() {
    return this.cutType !== "efficiency" ? 0 : this.options.minSpacing;
  }
}
function Vo(i, t, e) {
  var s, n, r, o, l, a, u, f, p, I;
  if (x(t == null ? void 0 : t.bladeWidth) && (t.bladeWidth = typeof t.bladeWidth == "string" ? S({ v: t.bladeWidth }) : t.bladeWidth), ($t(t.bladeWidth) || t.bladeWidth < 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.bladeWidth.invalid",
    { width: t.bladeWidth ?? "none" }
  ), !Cn(e)) {
    yt(
      i,
      "stockType",
      "saw.validation.stockType.invalid",
      { stockType: e }
    );
    return;
  }
  t.cutType && !In(e, t.cutType) && yt(
    i,
    "cutType",
    "saw.validation.cutType.invalid",
    { cutType: t.cutType, stockType: e }
  ), t.cutType && t.cutPreference && !Ln(e, t.cutType, t.cutPreference) && yt(
    i,
    ["cutPreference", "cutType"],
    "saw.validation.cutPreference.invalid",
    {
      preference: t.cutPreference || "none",
      cutType: t.cutType || "none",
      stockType: e
    }
  ), (t == null ? void 0 : t.cutType) === "efficiency" && ((s = t == null ? void 0 : t.options) != null && s.minSpacing && (t.options.minSpacing = typeof t.options.minSpacing == "string" ? S({ v: t.options.minSpacing }) : t.options.minSpacing, (!x(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    { minSpacing: t.options.minSpacing }
  ), ($t(t.options.minSpacing) || t.options.minSpacing < 0) && yt(
    i,
    "options.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacing: t.options.minSpacing ?? "none" }
  )), (n = t == null ? void 0 : t.options) != null && n.minSpacingDimension && (x((o = (r = t == null ? void 0 : t.options) == null ? void 0 : r.minSpacingDimension) == null ? void 0 : o.dimension) && (t.options.minSpacingDimension.dimension = typeof t.options.minSpacingDimension.dimension == "string" ? S({ v: t.options.minSpacingDimension.dimension }) : t.options.minSpacingDimension.dimension, ($t(t.options.minSpacingDimension.dimension) || t.options.minSpacingDimension.dimension < 0) && yt(
    i,
    "options.minSpacingDimension.dimension",
    "saw.validation.minSpacing.dimension.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.dimension ?? "none" }
  )), (a = (l = t == null ? void 0 : t.options) == null ? void 0 : l.minSpacingDimension) != null && a.minSpacing && (t.options.minSpacingDimension.minSpacing = typeof t.options.minSpacingDimension.minSpacing == "string" ? S({ v: t.options.minSpacingDimension.minSpacing }) : t.options.minSpacingDimension.minSpacing, ($t(t.options.minSpacingDimension.minSpacing) || t.options.minSpacingDimension.minSpacing < 0) && yt(
    i,
    "options.minSpacingDimension.minSpacing",
    "saw.validation.minSpacing.invalid",
    { minSpacingDimension: t.options.minSpacingDimension.minSpacing ?? "none" }
  )), (f = (u = t == null ? void 0 : t.options) == null ? void 0 : u.minSpacingDimension) != null && f.dimension && ((I = (p = t == null ? void 0 : t.options) == null ? void 0 : p.minSpacingDimension) != null && I.minSpacing) && (!x(t == null ? void 0 : t.bladeWidth) || t.bladeWidth <= 0) && yt(
    i,
    "bladeWidth",
    "saw.validation.required.bladeWidthMinSpacing",
    {
      dimension: t.options.minSpacingDimension.dimension,
      minSpacing: t.options.minSpacingDimension.minSpacing
    }
  )));
}
function vs(i) {
  return i instanceof At;
}
function ss(i, t = !1) {
  var o, l, a, u;
  const e = typeof i.l == "string" ? S({ v: i.l }) : i.l, s = typeof i.w == "string" ? S({ v: i.w }) : i.w;
  if (!t || !Wn(i) || Nn(i) || Dl(i) && !(i != null && i.hasTrim))
    return { l: e, w: s };
  const n = S({ v: ((o = i == null ? void 0 : i.trim) == null ? void 0 : o.x1) ?? 0 }) + S({ v: ((l = i == null ? void 0 : i.trim) == null ? void 0 : l.x2) ?? 0 }), r = S({ v: ((a = i == null ? void 0 : i.trim) == null ? void 0 : a.y1) ?? 0 }) + S({ v: ((u = i == null ? void 0 : i.trim) == null ? void 0 : u.y2) ?? 0 });
  return {
    l: e - (typeof n == "string" ? S({ v: n }) : n),
    w: s - (typeof r == "string" ? S({ v: r }) : r)
  };
}
function Yo(i, t) {
  var e, s, n, r;
  return Wn(i) && !Nn(i) && (t.l = t.l - (S({ v: ((e = i == null ? void 0 : i.trim) == null ? void 0 : e.x1) ?? 0 }) + S({ v: ((s = i == null ? void 0 : i.trim) == null ? void 0 : s.x2) ?? 0 })), t.w = t.w - (S({ v: ((n = i == null ? void 0 : i.trim) == null ? void 0 : n.y1) ?? 0 }) + S({ v: ((r = i == null ? void 0 : i.trim) == null ? void 0 : r.y2) ?? 0 }))), t;
}
function ts(i, t, e = !1) {
  let s = {
    l: S({ v: i.l }),
    w: S({ v: i.w })
  };
  const n = (i == null ? void 0 : i.rot) ?? 0;
  return e && (s = Yo(i, s)), n === t || ([s.l, s.w] = [s.w, s.l]), s;
}
function Dn(i) {
  if (!("l" in i) || !("w" in i)) throw new Error("rotatable item must have l & w properties");
}
function Xo(i) {
  Dn(i), [i.l, i.w] = [i.w, i.l];
}
function Vi(i, t, e = null, s) {
  var I, h;
  if (!t || !i)
    throw new Error("Container and shape are required");
  let n = 0;
  s && vs(s) ? n = s.minSpacing : s && ((I = s == null ? void 0 : s.options) != null && I.minSpacing) ? n = S({ v: s.options.minSpacing }) : ks(t) && (n = (h = t == null ? void 0 : t.saw) == null ? void 0 : h.minSpacing);
  const r = ss(t, !0), o = ss(i, !0);
  if (o.l * o.w > r.l * r.w)
    return !1;
  function l(m, w) {
    return ce.equalTo(m, w) || ce.lessThanOrEqualTo(m, w - n * 2);
  }
  function a(m) {
    return l(m.l, r.l) && l(m.w, r.w);
  }
  const u = ys(i, t);
  if (i.orientationLock || e !== null) {
    const w = ts(i, e ?? (u === "w" ? 1 : 0), !0);
    return a(w);
  }
  const f = ts(i, 0, !0);
  if (a(f)) return !0;
  const p = ts(i, 1, !0);
  return a(p);
}
function Pn(i) {
  let t = null;
  return Mt(i) ? t = i.direction : (Ze(i) || Se(i)) && (t = i.orientationLock), t;
}
function ys(i, t) {
  const e = Pn(i);
  return x(e) ? !t || Mt(i) ? e : ks(t) ? Ko(i, t) : e : null;
}
function Ko(i, t) {
  if (!t) throw new Error("container not supplied to convertShapeGrainToOrientationLock");
  if (!ks(t)) throw new Error("container is not a container");
  const e = Pn(i);
  if (Mt(i)) return e;
  if (!x(e)) return null;
  const s = t.getStock();
  return x(s.grain) ? e === s.grain ? "l" : "w" : e;
}
function ns(i, t = null, e = null) {
  if (!x(t))
    throw new Error("no rotation provided to canRotate");
  if (t === !0 && (t = 1), t === !1 && (t = 0), Tn(i) && t || e && !Vi(i, e, t))
    return !1;
  const s = ys(i, e);
  return !(s === "l" && t === 1 || s === "w" && t === 0);
}
function rs(i, t = null, e = null) {
  return t === null && (t = i.rot === 0 ? 1 : 0), ns(i, t, e) ? (i.rot === t || Xo(i), !0) : !1;
}
function ti(i, t = null, e = null) {
  return t ? t = 1 : t = 0, e && t && !Vi(i, e, t) ? !1 : rs(i, t, e);
}
function Zo(i, t) {
  if (!t)
    throw new Error("container not supplied to setRotationToOrientationLock");
  const e = ys(i, t);
  return e === "l" ? ti(i, 0) : e === "w" ? ti(i, 1) : !1;
}
function Jo(i) {
  return i.orientationLock === "l" ? ti(i, 0) : i.orientationLock === "w" ? ti(i, 1) : !1;
}
function Tn(i) {
  Dn(i);
  const t = ss(i);
  return ce.equalTo(t.l, t.w);
}
function Qo(i) {
  if (i === "l") return "x";
  if (i === "w") return "y";
}
function fi(i) {
  return i ? i === "l" ? "w" : "l" : null;
}
function el(i) {
  return "y";
}
function tl(i, t) {
  const e = "l", s = el();
  if (!(i != null && i.length)) return null;
  const n = i.reduce((o, l) => o[t] + o[e] > l[t] + l[e] ? o : l);
  return i.filter((o) => o[t] === n[t] && o[e] === n[e]).sort((o, l) => o[s] - l[s])[0];
}
class Jt {
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
    this.x1 = t.x1, this.x2 = t.x2, this.y1 = t.y1, this.y2 = t.y2, this.dimension = il(this), this.direction = sl(this), this.type = t != null && t.type ? t.type : null, this.origin = t != null && t.origin ? t.origin : null;
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
function Lt(i, t, e, s, n = null, r = null) {
  return new Jt({ x1: i, y1: t, x2: e, y2: s, origin: n, type: r });
}
function il(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 === i.x2 && i.y1 !== i.y2 ? "w" : i.y1 === i.y2 && i.x1 !== i.x2 ? "l" : null;
}
function sl(i) {
  return typeof i > "u" || !ce.isNumber(i.x1) || !ce.isNumber(i.x2) || !ce.isNumber(i.y1) || !ce.isNumber(i.y2) ? null : i.x1 < i.x2 ? "lr" : i.x1 > i.x2 ? "rl" : i.y1 < i.y2 ? "bt" : i.y1 > i.y2 ? "tb" : null;
}
function nl(i, t) {
  const e = i.getCorners(), s = {};
  return e.bottomLeft.x > 0 && e.bottomLeft.y > 0 && (s.bottomLeftDown = Lt(
    e.bottomLeft.x,
    e.bottomLeft.y,
    e.bottomLeft.x,
    0,
    "bottomLeft",
    "bottomLeftDown"
  ), s.bottomLeftLeft = Lt(
    e.bottomLeft.x,
    e.bottomLeft.y,
    0,
    e.bottomLeft.y,
    "bottomLeft",
    "bottomLeftLeft"
  )), e.topLeft.x > 0 && e.topLeft.y < t.w && (s.topLeftLeft = Lt(
    e.topLeft.x,
    e.topLeft.y,
    0,
    e.topLeft.y,
    "topLeft",
    "topLeftLeft"
  ), s.topLeftTop = Lt(
    e.topLeft.x,
    e.topLeft.y,
    e.topLeft.x,
    t.w,
    "topLeft",
    "topLeftTop"
  )), e.topRight.y < t.w && e.topRight.x < t.l && (s.topRightTop = Lt(
    e.topRight.x,
    e.topRight.y,
    e.topRight.x,
    t.w,
    "topRight",
    "topRightTop"
  ), s.topRightRight = Lt(
    e.topRight.x,
    e.topRight.y,
    t.l,
    e.topRight.y,
    "topRight",
    "topRightRight"
  )), e.bottomRight.x < t.l && e.bottomRight.y > 0 && (s.bottomRightRight = Lt(
    e.bottomRight.x,
    e.bottomRight.y,
    t.l,
    e.bottomRight.y,
    "bottomRight",
    "bottomRightRight"
  ), s.bottomRightDown = Lt(
    e.bottomRight.x,
    e.bottomRight.y,
    e.bottomRight.x,
    0,
    "bottomRight",
    "bottomRightDown"
  )), s;
}
const rl = {
  runTests: !1
};
xr.showDiff = !0;
vn("tests");
vn("timers");
function $n() {
  return typeof process < "u" && (process != null && process.env), !1;
}
function On(i = [], t = null) {
  i != null && i.length && $n() && rl.runTests;
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
Je("firstShapes");
Je("calculations");
Je("subset");
Je("secondRun");
Je("stack");
const ol = Je("errors");
Je("allStock");
ol.color = 1;
function ll(i) {
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
class Yi extends Jt {
  //used to mark for removal
  constructor(e) {
    var s, n, r;
    e.x2 < e.x1 && ([e.x1, e.x2] = [e.x2, e.x1]), e.y2 < e.y1 && ([e.y1, e.y2] = [e.y2, e.y1]);
    super(e);
    c(this, "stock");
    c(this, "stockId");
    c(this, "isGuillotine");
    c(this, "guillotineData");
    c(this, "ptxData");
    c(this, "type", null);
    c(this, "isHead");
    c(this, "isTrim");
    c(this, "beamTrimX1");
    c(this, "beamTrimY1");
    // isPtxDummyCut: boolean
    c(this, "distances");
    c(this, "remove");
    x(e == null ? void 0 : e.stock) && (((n = (s = e.stock) == null ? void 0 : s.constructor) == null ? void 0 : n.name) === "Stock" ? this.stock = e.stock : this.stock = new zt(e.stock), this.stockId = this.stock.id), this.stockId = (r = e == null ? void 0 : e.stock) == null ? void 0 : r.id, this.type = e.type ?? null, this.isGuillotine = e.isGuillotine, this.guillotineData = x(e.guillotineData) ? e.guillotineData : {}, this.ptxData = x(e.ptxData) ? e.ptxData : {}, this.isHead = x(e.isHead) ? e.isHead : !1, this.isTrim = x(e.isTrim) ? e.isTrim : !1, this.beamTrimX1 = e.beamTrimX1, this.beamTrimY1 = e.beamTrimY1, this.distances = x(e.distances) ? e.distances : {};
  }
  //compress for saving / transfer
  compress() {
    var e;
    this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), delete this.shapeCollisions, delete this.stock;
  }
  clone() {
    const e = structuredClone(this);
    return new Yi(e);
  }
  bladeWidth() {
    return this.stock.getBladeWidth();
  }
  halfBladeWidth() {
    return this.stock.getHalfBladeWidth();
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
  //[] do on init
  getLength() {
    return ll(this);
  }
  /* get length()
  {
  	return getCutLength( this )
  } */
  //[] do on init
  getArea() {
    if (!this.stock) return 0;
    const e = this.getLength();
    return e ? e * this.stock.getBladeWidth() : 0;
  }
}
const al = {
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
}, Ti = {
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
class Fe {
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
    const s = new Fe(t ?? this.x, e ?? this.y);
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
      const s = al[this.direction];
      return s && s[this.corner] && s[this.corner][this.grid] && e.add(s[this.corner][this.grid]), e;
    }
    return (t == null ? void 0 : t.cutType) !== "efficiency" ? (Pi[this.corner] && (this.grid ? Pi[this.corner][this.grid] && Pi[this.corner][this.grid].forEach((s) => e.add(s)) : Pi[this.corner].default.forEach((s) => e.add(s))), e) : (Ti[this.corner] && (this.grid ? Ti[this.corner][this.grid] && Ti[this.corner][this.grid].forEach((s) => e.add(s)) : Ti[this.corner].default.forEach((s) => e.add(s))), e);
  }
}
class Ut {
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
  const r = ul[i](t, e);
  return s && (r.corner = s), n && (r.direction = n), r;
}
const ul = {
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
function cl(i, t, e) {
  var o, l, a, u, f, p;
  const s = new Ut(), n = e.toArray().sort(An), r = t.getBladeWidth();
  if (n.forEach((I) => {
    const h = I.corner, m = I.type;
    if (!r)
      s.addPoint(I);
    else
      switch (h) {
        case "topRight":
          s.addPoint(
            pe("top", I, r, h),
            m
          ), s.addPoint(
            pe("right", I, r, h),
            m
          );
          break;
        case "topLeft":
          s.addPoint(
            pe("top", I, r, h),
            m
          ), s.addPoint(
            pe("left", I, r, h),
            m
          );
          break;
        case "bottomRight":
          s.addPoint(
            pe("bottom", I, r, h),
            m
          ), s.addPoint(
            pe("right", I, r, h),
            m
          );
          break;
        case "bottomLeft":
          s.addPoint(
            pe("bottom", I, r, h),
            m
          ), s.addPoint(
            pe("left", I, r, h),
            m
          );
          break;
      }
    const w = s.toArray();
    if (r)
      for (let R = w.length; R--; ) {
        const N = w[R];
        e.contains(N) && s.deletePoint(N);
      }
    else
      for (let R = w.length; R--; ) {
        const N = w[R];
        for (let ee = i.length; ee--; ) {
          const X = i[ee];
          if (N.x === X.x && N.y === X.y) {
            s.deletePoint(N);
            break;
          }
        }
      }
  }), r) {
    const I = /* @__PURE__ */ new Set();
    let h, m, w, R;
    ((o = t == null ? void 0 : t.constructor) == null ? void 0 : o.name) === "Stock" && (t != null && t.trimmed) || ((l = t == null ? void 0 : t.constructor) == null ? void 0 : l.name) === "Segment" ? (h = t.x, m = t.y, w = t.x + t.l, R = t.y + t.w) : (h = t.x + ((a = t == null ? void 0 : t.trim) == null ? void 0 : a.x1), m = t.y + ((u = t == null ? void 0 : t.trim) == null ? void 0 : u.y1), w = t.x + t.l - ((f = t == null ? void 0 : t.trim) == null ? void 0 : f.x2), R = t.y + t.w - ((p = t == null ? void 0 : t.trim) == null ? void 0 : p.y2));
    let N = s.toArray();
    for (let ee = N.length; ee--; ) {
      const X = N[ee];
      (ce.lessThan(X.x, h) || ce.lessThan(X.y, m) || ce.greaterThan(X.x, w) || ce.greaterThan(X.y, R)) && N.splice(ee, 1);
    }
    s.clear(), s.addPoints(N), I.clear(), N = s.toArray();
    for (let ee = N.length; ee--; ) {
      const X = N[ee];
      for (let Z = i.length; Z--; ) {
        const he = i[Z];
        if (X.collidesWith(he)) {
          s.deletePoint(X);
          break;
        }
      }
    }
  }
  return s;
}
function hl(i, t, e) {
  let s = [];
  const n = i.getMinSpacing(e.saw), r = t.corner, o = t.direction;
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
  const l = new Ut();
  for (const a of s)
    a.raycast = !0, l.addPoints(Rn(i, a, e).toArray());
  return Fn(i, e, l), l;
}
function dl(i, t) {
  const e = new Ut();
  return i.sort(An), i.forEach((s) => {
    Mt(s) ? (e.addPoints(s.getCoords(t)), s.shapes.forEach((n) => {
      const r = n.getCoords(t);
      e.addPoints(r, "group");
    })) : e.addPoints(s.getCoords(t));
  }), e.points.forEach((s) => {
    s.stockID = t.getStock().id;
  }), e;
}
function fl(i = [], t, e) {
  const s = dl(
    i === null ? t : i,
    e
  );
  return cl(
    t,
    e,
    s
  );
}
function An(i, t) {
  return i.y === t.y ? t.x - i.x : t.y - i.y;
}
function En(i, t, e, s, n, r) {
  i.a = t.id, i.b = e ? e.id : null, i.direction = s, i.raycast = !0, i.type = n, i.corner = r;
}
function pl(i, t) {
  if (i.saw.cutType !== "efficiency" || t.length <= 1) return null;
  let e = new Ut();
  const s = Mn(t, i);
  for (const l of t)
    for (const a of s) {
      if (a.shape.id === l.id) continue;
      const u = Object.values(a.rays);
      for (const f of u)
        gl(
          f,
          a.shape,
          l,
          e
        );
    }
  const r = i.saw.efficiencyOptions.primaryCompression === "x" ? "lr" : "tb", o = t.reduce((l, a) => (r === "tb" ? l.x + l.l > a.x + a.l : l.y + l.w > a.y + a.w) ? l : a);
  return s.filter(({ shape: l }) => l.id === o.id).forEach(({ shape: l, rays: a }) => {
    const u = Object.values(a);
    for (const f of u) {
      const p = new Fe(f.x2, f.y2);
      r === f.direction && (En(p, l, null, f.direction, "edge"), e.addPoint(p));
    }
  }), e = ml(e), e;
}
function Mn(i, t) {
  return i.map((e) => {
    const s = nl(e, t);
    return {
      shape: e,
      rays: s
    };
  });
}
function gl(i, t, e, s) {
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
    const u = i.direction === "lr" && i[`${o}1`] <= n && i[`${o}2`] >= n, f = i.direction === "rl" && i[`${o}1`] >= n && i[`${o}2`] <= n, p = i.direction === "bt" && i[`${o}1`] <= n && i[`${o}2`] >= n, I = i.direction === "tb" && i[`${o}1`] >= n && i[`${o}2`] <= n;
    if (u || f || p || I) {
      const m = r ? i[`${l}1`] : n, w = r ? n : i[`${l}1`], R = new Fe(m, w), N = i.origin;
      En(R, t, e, i.direction, "shape", N), s.addPoint(R);
    }
  }
}
function ml(i) {
  const t = new Ut();
  return i.points.size === 0 || new Set(i.toArray().map((s) => s.a)).forEach((s) => {
    const n = i.toArray().filter((r) => r.a === s);
    ["right", "left", "top", "bottom"].forEach((r) => {
      const o = vl(
        n,
        r
      );
      o && t.addPoint(o);
    });
  }), t;
}
function vl(i, t) {
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
function Rn(i, t, e) {
  const s = new Ut(), n = t.getAvailableShapePositions(e);
  for (const r of n) {
    let o;
    switch (o = yl(t, i, e), r) {
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
  return Fn(i, e, s), s;
}
function yl(i, t, e) {
  if (e.saw.cutType !== "efficiency") return i;
  const s = t.getMinSpacing(e.saw), n = e.getBladeWidth();
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
function Fn(i, t, e) {
  var a, u, f, p, I, h;
  let s, n, r, o;
  ((a = t == null ? void 0 : t.constructor) == null ? void 0 : a.name) === "Stock" && (t != null && t.trimmed) || ((u = t == null ? void 0 : t.constructor) == null ? void 0 : u.name) === "Segment" ? (s = 0, n = 0, r = t.x + t.l - i.l, o = t.y + t.w - i.w) : (s = (f = t == null ? void 0 : t.trim) == null ? void 0 : f.x1, n = (p = t == null ? void 0 : t.trim) == null ? void 0 : p.y1, r = t.l - ((I = t == null ? void 0 : t.trim) == null ? void 0 : I.x2) - i.l, o = t.w - ((h = t == null ? void 0 : t.trim) == null ? void 0 : h.y2) - i.w);
  const l = e.toArray();
  for (let m = l.length; m--; ) {
    const w = l[m];
    (ce.lessThan(w.x, s) || ce.lessThan(w.y, n) || ce.greaterThan(w.x, r) || ce.greaterThan(w.y, o) || w.x < 0 || w.y < 0) && e.deletePoint(w);
  }
}
function bl(i, t, e) {
  if (!bi.includes(t) || !i.machining.corners) return 0;
  const s = _n(i, t);
  return e * s;
}
function _n(i, t) {
  if (!bi.includes(t) || !i.machining.corners) return 0;
  const e = i.machining.corners.find((n) => n.getCorner() === t);
  return e ? e.getLength() : 0;
}
function Gi(i, t, e, s) {
  Object.keys(t).forEach((n) => {
    var r, o;
    n in i && ((r = t[n]) != null && r.min && S({ v: i[n] }) < S({ v: t[n].min }) ? e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be less than ${t[n].min}.`,
      fields: [n]
    }) : (o = t[n]) != null && o.max && S({ v: i[n] }) > S({ v: t[n].max }) && e.push({
      index: s,
      message: `${n.charAt(0).toUpperCase() + n.slice(1)} cannot be greater than ${t[n].max}.`,
      fields: [n]
    }));
  });
}
class os {
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
    return wt[this.face];
  }
  getXDrawPosition(t) {
    let e = 0;
    const s = S({ v: this.x });
    return t.rot ? e = t.l - S({ v: this.y }) + ("x" in t ? S({ v: t.x }) : 0) : e = s + ("x" in t ? S({ v: t.x }) : 0), e;
  }
  getYDrawPosition(t, e, s) {
    let n = t.rot ? S({ v: this.x }) : S({ v: this.y });
    return n += "y" in t ? S({ v: t.y }) : 0, e === 1 && (s ? n = S({ v: s.w }) - n : n = S({ v: t.w }) - n), n;
  }
  shouldShow(t, e) {
    return this.face === e || this.isThroughShape(t) === !0;
  }
  isThroughShape(t) {
    return !this.depth || S({ v: this.depth }) >= S({ v: t.t });
  }
  getDistanceToEdge(t) {
    const e = this.x, s = this.y, n = this.diameter / 2, r = S({ v: t.getLongSide() }), o = S({ v: t.getShortSide() }), l = t.machining.corners.map((m) => m.type ? m.size : 0), a = [
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
    ], u = t.machining.corners.map((m, w) => {
      const R = w === 0 || w === 3, N = w < 2, ee = R ? e : r - e;
      let X = null;
      this.face === 0 ? X = N ? s : o - s : this.face === 1 && (X = N ? o - s : s);
      const Z = Math.sqrt(ee * ee + X * X);
      return {
        c: m,
        distance: Z
      };
    }), f = Math.min(...a.map((m) => m.distance)), p = Math.min(...u.map((m) => m.distance)), I = u.findIndex((m) => m.distance === p), h = t.machining.corners[I];
    if (h && h.type === "radius") {
      let m = I === 0 || I === 3 ? 0 : r, w = I < 2 ? 0 : o;
      const R = I < 2;
      m += I === 0 || I === 3 ? l[I] : -l[I], w += R ? l[I] : -l[I];
      const ee = e - m, X = I < 2;
      let Z;
      this.face === 0 ? Z = X ? s : o - s : this.face === 1 && (Z = X ? o - s : s);
      const he = Z - w, _ = Math.sqrt(ee * ee + he * he), J = l[I] - _ - n;
      let v = !1;
      return h.index === 0 ? v = e <= m && Z <= w : h.index === 1 ? v = e >= m && Z <= w : h.index === 2 ? v = e >= m && Z >= w : h.index === 3 && (v = e <= m && Z >= w), v && J < f ? J : f;
    } else if (h && h.type === "bevel") {
      let m, w, R;
      h.index === 0 ? (m = 1, w = 1, R = -h.size) : h.index === 1 ? (m = 1, w = -1, R = -r + h.size) : h.index === 2 ? (m = 1, w = 1, R = -r - o + h.size) : h.index === 3 && (m = -1, w = 1, R = -o + h.size);
      const N = h.index === 0 ? 1 : -1, ee = (m * e + w * s + R) / Math.sqrt(m * m + w * w) * N - n;
      return ee < f ? ee : f;
    } else
      return f;
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
    return S({ v: this.diameter }) <= 0 && n.push({
      index: e,
      message: "Diameter cannot be negative or zero.",
      fields: ["diameter"]
    }), S({ v: this.depth }) < 0 && n.push({
      index: e,
      message: "Depth cannot be negative.",
      fields: ["depth"]
    }), "t" in t && S({ v: t.t }) > 0 && S({ v: this.depth }) > S({ v: t.t }) && n.push({
      index: e,
      message: "Depth cannot be greater than part thickness.",
      fields: ["depth"]
    }), (!("t" in t) || !t.t) && S({ v: this.depth }) > 0 && n.push({
      index: e,
      message: "Part thickness is not defined.",
      fields: ["depth"]
    }), this.getDistanceToEdge(t) < 0 && n.push({
      index: e,
      message: "Outside of part."
    }), s && Gi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class Us {
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
    minimumHoleDistance: f = 0,
    positionLimit: p = 0
  }, I) {
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
    this.position = t, this.edge = e, this.face = s, this.numHoles = n, this.diameter = r, this.depth = o, this.distanceFromEdge = l, this.outerSpacing = a, this.hingeLength = u, this.minimumHoleDistance = f, this.positionLimit = p, I && this.createHoles(I);
  }
  getFace() {
    return wt[this.face];
  }
  getHoleSpacing() {
    const t = S({ v: this.hingeLength }) - S({ v: this.outerSpacing }) * 2, e = this.numHoles - 1;
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
        s = t.getLongSide() - S({ v: this.distanceFromEdge });
        break;
      case "y1":
      case "y2":
        s = S({ v: this.position }) + S({ v: this.outerSpacing }) + n * e;
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
        s = S({ v: this.position }) + S({ v: this.outerSpacing }) + n * e;
        break;
      case "y1":
        s = S({ v: this.distanceFromEdge });
        break;
      case "y2":
        s = t.getShortSide() - S({ v: this.distanceFromEdge });
        break;
    }
    return s;
  }
  createHoles(t) {
    this.holes = [];
    for (let e = 0; e < this.numHoles; e++) {
      const s = new os({
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
    }), s && Gi(this, s, n, e), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
class js {
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
    return this.type && S({ v: this.size }) <= 0 && n.push({
      index: e,
      message: "Corner size cannot be zero or negative"
    }), this.type && S({ v: this.size }) > s / 2 && (this.size = s / 2), n.length ? this.valid = !1 : this.valid = !0, n;
  }
}
let qn = class {
  //shelfHoles?: ShelfHoles[] = [];
  constructor({
    holes: t = [],
    hingeHoles: e = [],
    corners: s = []
  } = {}) {
    c(this, "holes", []);
    c(this, "corners", []);
    c(this, "hingeHoles", []);
    s && s.length === 4 ? this.corners = s.map((n) => new js(n)) : [0, 1, 2, 3].forEach((n) => {
      this.corners.push(new js({
        type: null,
        size: null,
        index: n
      }));
    }), t && (this.holes = t.map((n) => new os(n))), e && (this.hingeHoles = e.map((n) => new Us(n)));
  }
  validateEverything(t, e = null) {
    const s = this.validate(t, "holes"), n = this.validate(t, "hingeHoles"), r = this.validate(t, "corners");
    s.length && new re({
      item: t,
      index: e,
      listId: Se(t) ? [t.listId] : null,
      message: "Issue with machining -> holes",
      field: [["machining"]]
    }), n.length && new re({
      item: t,
      index: e,
      listId: Se(t) ? [t.listId] : null,
      message: "Issue with machining -> hinge holes",
      field: [["machining"]]
    }), r.length && new re({
      item: t,
      index: e,
      listId: Se(t) ? [t.listId] : null,
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
    const o = new os({
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
    hingeLength: f = 0
  }) {
    const p = new Us({
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
      hingeLength: f
    });
    return this.hingeHoles.push(p), p;
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
function bs(i) {
  var t, e, s, n, r, o, l, a;
  return !i || !(i != null && i.machining) ? !1 : (e = (t = i.machining) == null ? void 0 : t.holes) != null && e.length || (n = (s = i.machining) == null ? void 0 : s.hingeHoles) != null && n.length ? !0 : (o = (r = i.machining) == null ? void 0 : r.corners) != null && o.length ? (a = (l = i.machining) == null ? void 0 : l.corners) == null ? void 0 : a.some((u) => u.type && u.size) : !1;
}
function wl(i) {
  var t, e, s, n;
  if ("machining" in i) {
    if (!bs(i)) {
      i.machining = null;
      return;
    }
    (t = i.machining.holes) != null && t.length || (i.machining.holes = null), (e = i.machining.hingeHoles) != null && e.length || (i.machining.hingeHoles = null), (n = (s = i.machining) == null ? void 0 : s.corners) != null && n.some((r) => r.type && r.size) || (i.machining.corners = null);
  }
}
class ws {
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
      return new re({
        item: this,
        message: "Must have 2 or more parts."
      }), this.issues;
    const s = e[0];
    if (Ze(s)) {
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
    const n = fi(this.direction), r = s.getTrimmedDimensions(!0)[n];
    return e.forEach((a, u) => {
      if (a.id === s.id) return;
      const f = a.getTrimmedDimensions(!0)[n];
      ce.equalTo(f, r) || new re({
        item: this,
        message: `Part in position ${u + 1} final ${n === "l" ? "length" : "width"} is not correct for the group. Expected ${r} and is ${f}. Check the dimensions, trim & orientation lock.`
      });
    }), this.issues;
  }
  findShapes(t = []) {
    var s, n;
    if (!t.length) return [];
    let e = [];
    if (Se(t[0])) {
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
    if (!Ze(s[0]))
      throw new Error("shapeList must be of type Shape[]");
    const r = this.findShapes(s);
    if (!r.length) return !1;
    const o = r[0];
    r.forEach((f) => {
      const p = s.findIndex((I) => !I.inUserGroup && I.parentID === f.parentID);
      if (p === -1)
        throw new Error("shape not found in shapeList while creating user group.");
      s.splice(p, 1), Jo(f), f.inUserGroup = !0;
    });
    let l = 0, a = 0;
    this.direction === "l" ? a = o.w : l = o.l;
    let u;
    try {
      const f = {
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
      u = new ft(f);
    } catch (f) {
      return console.error(f), !1;
    }
    return u.parentID = `ug${t}`, n && u.updateShapeSpacing(n), u;
  }
}
function mh(i, t = []) {
  if (!(i != null && i.length)) return [];
  const e = i.map((s) => new ws(s));
  return t.length && Sl(e, t), e;
}
function Sl(i = [], t = []) {
  i.length && t.length && i.forEach((e) => {
    e.shapeListIds = e.shapeListIds.filter((s) => t.find((n) => n.listId === s));
  });
}
function xl(i) {
  const t = {};
  return i.forEach((e) => {
    e.shapeListIds.forEach((s) => {
      const n = e.q || 1;
      t[s] ? t[s] += n : t[s] = n;
    });
  }), t;
}
function kl(i, t, e = !0) {
  const s = xl(i), n = [];
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
const St = ["y1", "y2", "x1", "x2"], bi = ["a", "b", "c", "d"], Ot = [...St, ...bi], wt = ["a", "b"];
function Bn(i) {
  return bi.includes(i);
}
function Cl(i) {
  return Ot.includes(i);
}
const qe = {
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
function Il(i) {
  return St.map((t) => i[t] ?? null);
}
function Wt(i) {
  if (!x(i) || typeof i != "object") return {};
  i = { ...i };
  for (const [t, e] of Object.entries(i))
    t !== "_id" && t.startsWith("_") && (i[t.substring(1)] = e, delete i[t]);
  return i;
}
function vh({
  stockList: i,
  removeScores: t = !1,
  saw: e = null,
  preventAutoRotation: s = !1,
  preventGrainRotation: n = !1
}) {
  return !i || !(i != null && i.length) ? [] : i.filter((r) => r).map((r) => {
    (s || r.preventAutoRotation) && (r.preventAutoRotation = !0), n && (r.preventGrainRotation = !0);
    const o = new zt(r, e);
    if (o.issues.length)
      throw new Error(
        `Issues found when attempting to recreate stock list - ${o.issues.map((l) => l.message).join()}`,
        { cause: o.issues }
      );
    return t && delete o.algoBenchmark, o;
  }).sort(Hi.ID);
}
function yh({
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
    if (Ll(s) && ((o = s == null ? void 0 : s.shapes) != null && o.length)) {
      s.shapes = s.shapes.map((l) => new Et(l));
      try {
        n = new ft(s);
      } catch {
        throw new Error("error creating group from shape data");
      }
    } else
      n = new Et(s);
    if (n.issues.length)
      throw new Error(`Issues found when attempting to recreate shape list - ${n.issues.map((l) => l.message).join(", ")}`);
    const r = t.find((l) => {
      var a;
      return l.id === (((a = s == null ? void 0 : s.stock) == null ? void 0 : a.id) ?? (s == null ? void 0 : s.stockId));
    });
    return n.stock = r, n;
  }).sort(Hi.ID);
}
function bh({
  cutList: i,
  stockList: t
}) {
  if (typeof t > "u")
    throw new Error("recreateCutList requires stockList");
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = new Yi(e), n = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return s.stock = n, s;
  });
}
function wh({
  segmentList: i,
  stockList: t
}) {
  return !i || !(i != null && i.length) ? [] : i.map((e) => {
    const s = t.find((r) => {
      var o;
      return r.id === (((o = e == null ? void 0 : e.stock) == null ? void 0 : o.id) ?? (e == null ? void 0 : e.stockId));
    });
    return e.stock = s, new xs(e);
  });
}
function Wi(i, t, e = "decimal", s = !1) {
  return x(i == null ? void 0 : i[t]) ? S({ v: i[t], nf: e, pl: s }) : null;
}
class Ss {
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
    t = Wt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + us(), ["l", "w", "t"].forEach((a) => {
      this[a] = Wi(t, a, e, s);
    }), this.q = x(t == null ? void 0 : t.q) ? $t(Fi(t.q)) ? null : Fi(t.q) : null, this.autoAdd = x(t.autoAdd) ? t.autoAdd : !1, this.name = x(t.name) ? zi(t.name).toUpperCase() : "", this.material = x(t.material) ? t.material.trim().toUpperCase() : "";
    const r = ["x1", "x2", "y1", "y2"];
    this.trim = {
      x1: null,
      x2: null,
      y1: null,
      y2: null
    }, r.forEach((a) => {
      this.trim[a] = Wi(t.trim, a, e, s);
    }), this.cost = x(t.cost) ? t.cost : null, t.grain = (o = t == null ? void 0 : t.grain) == null ? void 0 : o.toLowerCase(), (t == null ? void 0 : t.grain) === " " && (t.grain = ""), this.grain = t.grain, this.grain = x(t.grain) && ["l", "w"].includes(t.grain.toLowerCase()) ? t.grain.toLowerCase() : "", this.multiEdit = t.multiEdit, this.allowExactFitShapes = x(t == null ? void 0 : t.allowExactFitShapes) ? t.allowExactFitShapes : !1, this.preventGrainRotation = !0, typeof ((l = t == null ? void 0 : t.notes) == null ? void 0 : l.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "";
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
  getTrimmedDimensions() {
    const t = this.l > this.w ? this.l : this.w, e = this.l < this.w ? this.l : this.w, s = { l: S({ v: t }), w: S({ v: e }) };
    return {
      name: this.name,
      id: null,
      listId: this.listId,
      l: s.l - (S({ v: this.trim.x1 }) + S({ v: this.trim.x2 })),
      w: s.w - (S({ v: this.trim.y1 }) + S({ v: this.trim.y2 }))
    };
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  isSquare() {
    Tn(this);
  }
  validate(t) {
    return this.issues = [], ["l", "w", "t"].forEach((e) => Ye[e]({ item: this, saw: t })), Ye.trim({ item: this }), ["q"].forEach((e) => Ye[e]({ item: this, isWarning: !0 })), this.issues = this.issues.filter((e) => e), this.issues;
  }
}
class pi {
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
    c(this, "upDirection", null);
    //objects
    c(this, "machining");
    c(this, "trim", Object.fromEntries(
      St.map((t) => [t, 0])
    ));
    c(this, "banding", Object.fromEntries(
      Ot.map((t) => [t, !1])
    ));
    c(this, "bandingOptions", Object.fromEntries([
      ...Ot,
      "all"
    ].map((t) => [t, {}])));
    c(this, "finish", Object.fromEntries(
      wt.map((t) => [t, ""])
    ));
    c(this, "finishOptions", Object.fromEntries(
      wt.map((t) => [t, {}])
    ));
    /**
     * to align with Shape
     * @remarks input shapes are always 0
     */
    c(this, "rot", 0);
    var r, o, l, a, u;
    t = t = Wt(t), this.readonly = t.readonly, this.id = t.id, this.listId = t != null && t.listId ? t.listId : Date.now().toString() + us(), ["l", "w", "t"].forEach((f) => {
      this[f] = Wi(t, f, e, s);
    }), this.q = x(t == null ? void 0 : t.q) ? $t(Fi(t.q)) ? null : Fi(t.q) : null, this.name = x(t.name) ? zi(t.name).toUpperCase() : "", this.material = x(t.material) ? t.material.trim().toUpperCase() : "", this.multiEdit = t.multiEdit, typeof ((r = t == null ? void 0 : t.notes) == null ? void 0 : r.replace) == "function" ? this.notes = t.notes.replace(/,/g, " ") : this.notes = "", this.stockLock = (t == null ? void 0 : t.stockLock) ?? [], this.upDirection = (t == null ? void 0 : t.upDirection) ?? null;
    for (const f of Object.keys(this.trim))
      this.trim[f] = Wi(t.trim, f, e, s);
    for (const f of Object.keys(this.banding))
      this.banding[f] = x((o = t == null ? void 0 : t.banding) == null ? void 0 : o[f]) ? t.banding[f] : !1;
    for (const f of Object.keys(this.bandingOptions))
      this.bandingOptions[f] = x((l = t == null ? void 0 : t.bandingOptions) == null ? void 0 : l[f]) ? t.bandingOptions[f] : {};
    for (const f of Object.keys(this.finish))
      this.finish[f] = x((a = t == null ? void 0 : t.finish) == null ? void 0 : a[f]) ? t.finish[f] : "";
    for (const f of Object.keys(this.finishOptions))
      this.finishOptions[f] = x((u = t == null ? void 0 : t.finishOptions) == null ? void 0 : u[f]) ? t.finishOptions[f] : {};
    this.orientationLock = x(t.orientationLock) && ["l", "w"].includes(t.orientationLock.toLowerCase()) ? t.orientationLock.toLowerCase() : "", this.machining = new qn(t.machining ?? {
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
          Ot.map((e) => [e, !1])
        );
        break;
    }
  }
  createId(t, e = 0) {
    this.id = `${t + 1}.${e}`;
  }
  getLongSide() {
    return S({ v: this.l }) > S({ v: this.w }) ? S({ v: this.l }) : S({ v: this.w });
  }
  getShortSide() {
    return S({ v: this.l }) < S({ v: this.w }) ? S({ v: this.l }) : S({ v: this.w });
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
    let e = { l: S({ v: this.l }), w: S({ v: this.w }) };
    return t && (e = this.getRotatedDimensions()), {
      name: this.name,
      id: null,
      listId: this.listId,
      l: e.l - (S({ v: this.trim.x1 }) + S({ v: this.trim.x2 })),
      w: e.w - (S({ v: this.trim.y1 }) + S({ v: this.trim.y2 })),
      orientationLock: this.orientationLock
    };
  }
  //used to apply a single trim value to all sides
  applyPartTrim(t, e) {
    if (!this.readonly)
      if (t = S({ v: t }), this.trim) {
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
  validate({
    inputStockList: t = [],
    index: e = null,
    partTrim: s = 0,
    useInventory: n = !1,
    saw: r = null
  }) {
    if (this.issues = [], ["l", "w", "t"].forEach((o) => Ye[o]({ item: this, index: e, saw: r })), s = S({ v: s }), Ye.partTrim({ item: this, partTrim: s, index: e }), Ye.trim({ item: this, index: e }), Ye.machining({ item: this, index: e }), ["q"].forEach((o) => {
      Ye[o]({ item: this, index: e, isWarning: !0 });
    }), t.length && !n) {
      const o = new At(r);
      Ye.stockMatch({ item: this, inputStockList: t, saw: o, partTrim: s, index: e, isWarning: !0 });
    }
    return this.issues = this.issues.filter((o) => o), this.issues;
  }
}
class jt {
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
    c(this, "area");
    c(this, "identicalTo");
    c(this, "hasTrim");
    c(this, "infiniteLength");
    c(this, "proximity");
    //objects
    c(this, "_trim", Object.fromEntries(
      St.map((t) => [t, 0])
    ));
    c(this, "customData");
    this.initRectangle(t);
  }
  validateRectangle(t) {
    this.issues = [];
    const e = [], s = ["x", "y", "t", "w"];
    t != null && t.infiniteLength || s.push("l"), s.forEach((n) => e.push(...Ye[n]({ item: t }))), this.issues.push(...Ye.customData({ item: t })), this.issues.push(...e.filter((n) => n));
  }
  initRectangle(t, e = !1) {
    var n, r, o;
    if (!e) {
      this.validateRectangle(t), this.id = x(t.id) ? t.id.toString() : this.id || null, this.setParentID(), x(t == null ? void 0 : t.q) ? typeof t.q == "string" ? this.q = parseInt(t.q) : this.q = t.q : this.q = 0, this.name = x(t.name) && ((n = t == null ? void 0 : t.name) != null && n.length) ? (r = so(zi(t == null ? void 0 : t.name))) == null ? void 0 : r.toUpperCase() : null, x(t == null ? void 0 : t.cost) ? typeof t.cost == "string" ? this.cost = parseFloat(t.cost) : typeof t.cost == "number" && (this.cost = t.cost) : this.cost = 0, this.material = x(t.material) ? t.material.trim().toLowerCase() : null, this.duplicate = x(t == null ? void 0 : t.duplicate) ? t.duplicate : !1, this.grain = typeof t.grain < "u" && x(t == null ? void 0 : t.grain) ? t.grain.toLowerCase() : null, this.area = this.getArea(), this.offcut = x(t == null ? void 0 : t.offcut) ? t.offcut : !1, this.notes = typeof (t == null ? void 0 : t.notes) == "string" && t.notes.length ? t.notes.replace(/,/g, "").substring(0, 200) : "", this.customData = (t == null ? void 0 : t.customData) ?? {}, this.proximity = {
        rectangle: null,
        distance: null
      }, this.infiniteLength = x(t == null ? void 0 : t.infiniteLength) ? t.infiniteLength : !1;
      try {
        this.trim = (t == null ? void 0 : t.trim) || (t == null ? void 0 : t._trim);
      } catch (l) {
        if ((o = l == null ? void 0 : l.cause) != null && o.issues) this.issues.push(...l.cause.issues);
        else throw new Error(`error when attempting to set trim ${JSON.stringify(l)}`);
      }
      this.trimmed = x(t == null ? void 0 : t.trimmed) ? t.trimmed : !1, this.hasTrim = [this.trim.x1, this.trim.x2, this.trim.y1, this.trim.y2].some((l) => typeof l == "number" && l !== 0);
    }
    this.identicalTo = (t == null ? void 0 : t.identicalTo) ?? [], [
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
      typeof a == "string" && (a = S({ v: a })), this[l.key] = a;
    }), !(t != null && t.infiniteLength) && !(t != null && t.preventAutoRotation) && !t.trimmed && this.w > this.l && ([this.l, this.w] = [this.w, this.l], this.grain && !(t != null && t.preventGrainRotation) && (this.grain = fi(this.grain))), x(t == null ? void 0 : t.stock) && (Ke(t.stock) ? this.stock = t.stock : this.stock = new zt(t.stock), this.stockId = this.stock.id);
  }
  updateRectangle(t) {
    t.preventAutoRotation = !0, this.initRectangle(t, !0);
  }
  set trim(t) {
    if (this._trim = Object.fromEntries(
      St.map((e) => [e, 0])
    ), !!ii(t, !0))
      for (const e of St) {
        let s;
        if (typeof t[e] == "string")
          try {
            s = S({ v: t[e] });
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
  get dimensions() {
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
  get coords() {
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
        return new Jt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y,
          type: "bottom"
          // parentID: this.id
        });
      case "right":
        return new Jt({
          x1: this.x + this.l,
          x2: this.x + this.l,
          y1: this.y,
          y2: this.y + this.w,
          type: "right"
          // parentID: this.id
        });
      case "top":
        return new Jt({
          x1: this.x,
          x2: this.x + this.l,
          y1: this.y + this.w,
          y2: this.y + this.w,
          type: "top"
          // parentID: this.id
        });
      case "left":
        return new Jt({
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
    const s = new Fe(this.x + this.l, this.y);
    s.corner = "bottomRight";
    const n = new Fe(this.x, this.y + this.w);
    if (n.corner = "topLeft", (t == null ? void 0 : t.cutType) !== "efficiency" && !e)
      return [n, s];
    const r = new Fe(this.x, this.y);
    r.corner = "bottomLeft";
    const o = new Fe(this.x + this.l, this.y + this.w);
    return o.corner = "topRight", [r, n, o, s];
  }
  getCorners() {
    return {
      bottomLeft: new Fe(this.x, this.y),
      topLeft: new Fe(this.x, this.y + this.w),
      topRight: new Fe(this.x + this.l, this.y + this.w),
      bottomRight: new Fe(this.x + this.l, this.y)
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
    return this.trimmed || !this.l || !this.w ? !1 : (this.trim && Object.values(this.trim).filter((r) => !$t(parseFloat(String(r)))).length && (x(this.l) && (this.l -= (x((t = this == null ? void 0 : this.trim) == null ? void 0 : t.x1) ? this.trim.x1 : 0) + (x((e = this == null ? void 0 : this.trim) == null ? void 0 : e.x2) ? this.trim.x2 : 0), this.l <= 0 && new re({ item: this, field: [["trim", "x1"], ["trim", "x2"]], message: "Applying trim has produced a negative length" })), x(this.w) && (this.w -= (x((s = this == null ? void 0 : this.trim) == null ? void 0 : s.y1) ? this.trim.y1 : 0) + (x((n = this == null ? void 0 : this.trim) == null ? void 0 : n.y2) ? this.trim.y2 : 0), this.w <= 0 && new re({ item: this, field: [["trim", "y1"], ["trim", "y2"]], message: "Applying trim has produced a negative width" }))), this.trimmed = !0, !0);
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
  //[] cater for rotation / stock
  isIdentical(t, e = !1) {
    var u;
    if (this.constructor !== t.constructor || this.t !== t.t || this.orientationLock !== t.orientationLock || this.material !== t.material)
      return !1;
    if (Ze(this) && ((u = this.identicalTo) != null && u.length) && (this.parentID === t.parentID || this.identicalTo.includes(t.parentID)))
      return !0;
    if (Mt(this)) {
      if (t.id === this.id) return !0;
    } else {
      if (t.parentID === this.parentID) return !0;
      if (Ze(this) && e && this.parentID !== t.parentID) return !1;
    }
    const { w: s, l: n } = this, { w: r, l: o } = t;
    if (!(s === r && n === o) && !(s === o && n === r)) return !1;
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
    const s = new jt({
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
    return Ze(this);
  }
  isSegment() {
    return Tl(this);
  }
  isStock() {
    return Ke(this);
  }
  isGroup() {
    return Mt(this);
  }
  isUserGroup() {
    return Gn(this);
  }
}
class Xi extends jt {
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
        (!x(this.t) || this.t <= 0) && new re({ item: this, message: "Stock for beam saws must have a thickness set" });
        break;
    }
  }
  setSaw(e, s) {
    var n, r, o, l;
    if (!(!e && !s)) {
      if (!s)
        if (x(e == null ? void 0 : e.saw)) {
          if (!((r = e == null ? void 0 : e.saw) != null && r.cutType)) {
            const { cutType: a, cutPreference: u } = is(e.saw.cutPreference);
            e.saw.cutType = a, e.saw.cutPreference = u;
          }
        } else {
          e.saw = {};
          const { cutType: a, cutPreference: u } = is(e.cutPreference);
          e.saw.cutType = a, e.saw.cutPreference = u, x(e == null ? void 0 : e.bladeWidth) && (e.saw.bladeWidth = e.bladeWidth), x((n = e == null ? void 0 : e.blade) == null ? void 0 : n.width) && (e.saw.bladeWidth = e.blade.width), x(e == null ? void 0 : e.efficiencyOptions) && (e.saw.efficiencyOptions = e.efficiencyOptions), x(e == null ? void 0 : e.guillotineOptions) && (e.saw.guillotineOptions = e.guillotineOptions), x(e == null ? void 0 : e.stackHeight) && (e.saw.stackHeight = e.stackHeight);
        }
      try {
        const a = s ?? (e == null ? void 0 : e.saw);
        a && (vs(a) ? this.saw = a : this.saw = new At(a)), (l = (o = this.saw) == null ? void 0 : o.issues) != null && l.length && this.issues.push(...this.saw.issues);
      } catch (a) {
        throw new Error("error creating saw", { cause: a });
      }
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
    return $t(e) ? 0 : e;
  }
  getStock() {
    return Ke(this) ? this : this != null && this.stock ? this.stock : null;
  }
}
class zt extends Xi {
  constructor(e, s) {
    var n;
    e = Wt(e), e.preventAutoRotation = e.preventAutoRotation || ((n = e == null ? void 0 : e.saw) == null ? void 0 : n.stockType) === "roll", e.autoAdd && !e.q && (e.q = 1);
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
    delete this.stock, this._id = e == null ? void 0 : e._id, this.autoAdd = x(e == null ? void 0 : e.autoAdd) ? e.autoAdd : !1, this.allowExactFitShapes = x(e == null ? void 0 : e.allowExactFitShapes) ? e.allowExactFitShapes : !1, this.analysis = x(e.analysis) ? e.analysis : null, this.tidy = x(e == null ? void 0 : e.tidy) ? e.tidy : !1, this.algoBenchmark = null, this.used = x(e == null ? void 0 : e.used) ? e.used : !1, this.stack = x(e == null ? void 0 : e.stack) ? e.stack : !1, this.duplicatePattern = (e == null ? void 0 : e.duplicatePattern) ?? null, this.initStock(e);
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
    e.autoAdd || ["q"].forEach((n) => s.push(...Ye[n]({ item: e }))), ["grain"].forEach((n) => s.push(...Ye[n]({ item: e }))), this.issues.push(...s.filter((n) => n));
  }
  /**
   * compress for saving / transfer
   */
  save() {
    delete this.tidy, delete this.score, delete this.rootSegment, delete this.shapes, delete this.saw, this == null || delete this.algoBenchmark, this.stack = Ke(this.stack) ? this.stack.id : this.stack, !this.trim.x1 && !this.trim.x2 && !this.trim.y1 && !this.trim.y2 && (this.trim = null);
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
    return Ke(this.stack) || typeof this.stack == "string";
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = parseInt(s.pop()), e++), s.push(e.toString());
    const n = s.join("."), r = structuredClone(this);
    return r.id = n, r.used = !1, r.duplicate = !0, r.stack = !1, r.saw = this.saw, new zt(r);
  }
  getCroppedLength(e = [], s = 0) {
    if (!(e != null && e.length)) return;
    const n = tl(e.filter((o) => o.added && o.stock.id === this.id), "x"), r = n.x + n.l;
    if (r > this.l) throw new Error("Furthest shape position exceeds stock length");
    return ce.equalTo(r, this.l) ? r : r + s;
  }
}
class Hn extends jt {
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
    return (e = this.stock) != null && e.isStock() && this.stock ? parseFloat((this.area / this.stock.area * this.stock.cost).toFixed(2)) : 0;
  }
}
function Sh({
  offcuts: i,
  stockList: t,
  preventAutoRotation: e = !0
}) {
  return !i || !(i != null && i.length) ? [] : i.map((s) => {
    const n = t.find((o) => {
      var l;
      return o.id === (((l = s == null ? void 0 : s.stock) == null ? void 0 : l.id) ?? (s == null ? void 0 : s.stockId));
    });
    return s.stock = n, e && (s.preventAutoRotation = !0), new Hn(s);
  });
}
class Et extends jt {
  // override _trim: Trim = { x1: 0, x2: 0, y1: 0, y2: 0 }
  constructor(e) {
    e = Wt(e);
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
    c(this, "fitsStock");
    c(this, "upDirection");
    c(this, "_banding", Object.fromEntries(
      Ot.map((e) => [e, !1])
    ));
    c(this, "_finish", Object.fromEntries(
      wt.map((e) => [e, ""])
    ));
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
    s || (this.validateShape(e), e.orientationLock = (n = e == null ? void 0 : e.orientationLock) == null ? void 0 : n.toLowerCase(), (e == null ? void 0 : e.orientationLock) === " " && (e.orientationLock = ""), this.orientationLock = x(e == null ? void 0 : e.orientationLock) && this.l !== this.w ? e.orientationLock : null, x(e == null ? void 0 : e.stockLock) ? Array.isArray(e == null ? void 0 : e.stockLock) && (this.stockLock = e.stockLock.map((r) => r.toString())) : this.stockLock = [], this.banding = (e == null ? void 0 : e.banding) || (e == null ? void 0 : e._banding), this.finish = (e == null ? void 0 : e.finish) || (e == null ? void 0 : e._finish), this.machining = x(e == null ? void 0 : e.machining) ? new qn(e.machining) : null, this.fitsStock = x(e == null ? void 0 : e.fitsStock) ? e.fitsStock : null, this.upDirection = x(e == null ? void 0 : e.upDirection) ? e.upDirection : null), this.added = x(e == null ? void 0 : e.added) ? e.added : !1, this.initGuillotineData(e), this.inGroup = x(e == null ? void 0 : e.inGroup) ? e.inGroup : this.inGroup || !1, this.inUserGroup = x(e == null ? void 0 : e.inUserGroup) ? e.inUserGroup : this.inUserGroup || !1, this.groupID = x(e == null ? void 0 : e.groupID) ? e.groupID : this.groupID || null, this.addedAsGroup = x(e == null ? void 0 : e.addedAsGroup) ? e.addedAsGroup : this.addedAsGroup || !1, this.score = x(e == null ? void 0 : e.score) ? e.score : this.score || null, this.bestScore = x(e == null ? void 0 : e.bestScore) ? e.bestScore : this.bestScore || {
      x: 0,
      y: 0,
      rot: null,
      total: null,
      group: null
    }, this.placementOrder = x(e == null ? void 0 : e.placementOrder) ? e.placementOrder : this.placementOrder || null, this.groupPlacementOrder = x(e == null ? void 0 : e.groupPlacementOrder) ? e.groupPlacementOrder : this.groupPlacementOrder || null, this.minSpacing = (e == null ? void 0 : e.minSpacing) ?? (this.minSpacing || 0), this.priority = (e == null ? void 0 : e.priority) ?? {};
  }
  initGuillotineData(e) {
    var s, n, r, o, l, a, u, f;
    this.guillotineData = Ai({}, e == null ? void 0 : e.guillotineData, {
      firstShape: ((s = this == null ? void 0 : this.guillotineData) == null ? void 0 : s.firstShape) || null,
      myPhase: ((n = this == null ? void 0 : this.guillotineData) == null ? void 0 : n.myPhase) || null,
      myStripParent: ((r = this == null ? void 0 : this.guillotineData) == null ? void 0 : r.myStripParent) || null,
      myStripDirection: ((o = this == null ? void 0 : this.guillotineData) == null ? void 0 : o.myStripDirection) || null,
      stripShapeBatches: {
        subsetUsed: ((a = (l = this == null ? void 0 : this.guillotineData) == null ? void 0 : l.stripShapeBatches) == null ? void 0 : a.subsetUsed) || !1,
        groups: ((f = (u = this == null ? void 0 : this.guillotineData) == null ? void 0 : u.stripShapeBatches) == null ? void 0 : f.groups) || {}
      }
    });
  }
  cloneGuillotineData() {
    var e;
    return (e = this.guillotineData) != null && e.myStripParent && (Ze(this.guillotineData.myStripParent) || Mt(this.guillotineData.myStripParent)) && (this.guillotineData.myStripParent = this.guillotineData.myStripParent.compress()), structuredClone(this.guillotineData);
  }
  getCopyNumber() {
    return parseInt(this.id.split(".").pop());
  }
  getMinSpacing(e, s = !1) {
    var o, l, a, u, f, p, I, h;
    const n = e.bladeWidth;
    if (e.cutType !== "efficiency")
      return s ? 0 : n;
    if (this.minSpacing > 0) return this.minSpacing;
    let r = (e == null ? void 0 : e.minSpacing) || 0;
    if (n > r && (r = n), (l = (o = e.options) == null ? void 0 : o.minSpacingDimension) != null && l.dimension && ((u = (a = e.options) == null ? void 0 : a.minSpacingDimension) != null && u.minSpacing)) {
      const m = (p = (f = e.options) == null ? void 0 : f.minSpacingDimension) == null ? void 0 : p.dimension;
      (this.l <= m || this.w <= m) && (r = ((h = (I = e.options) == null ? void 0 : I.minSpacingDimension) == null ? void 0 : h.minSpacing) || r);
    }
    return s && (r -= n), r < 0 && (r = 0), this.minSpacing = r, r;
  }
  validateShape(e) {
    const s = [];
    ["q", "orientationLock", "banding"].forEach((n) => s.push(...Ye[n]({ item: e }))), this.issues.push(...s.filter((n) => n)), this.machining && this.machining.validateEverything(this);
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
    e = Wt(e), this.initShape(e, !0), this.updateRectangle(e);
  }
  //banding
  set banding(e) {
    if (this._banding = Object.fromEntries(
      Ot.map((s) => [s, !1])
    ), !!ii(e, !0))
      for (const s of Ot)
        this._banding[s] = x(e == null ? void 0 : e[s]) ? e[s] : !1;
  }
  get banding() {
    return this._banding;
  }
  //get an array of banding in the order L1, L2, W1, W2
  get bandingArray() {
    return Il(this._banding);
  }
  get finish() {
    return this._finish;
  }
  set finish(e) {
    if (this._finish = Object.fromEntries(
      wt.map((s) => [s, ""])
    ), !!ii(e, !0))
      for (const s of wt)
        this._finish[s] = x(e == null ? void 0 : e[s]) ? e[s] : "";
  }
  get facesArray() {
    return wt.map((e) => {
      var s;
      return (s = this.finish) == null ? void 0 : s[e];
    });
  }
  //compress for saving / transfer
  save() {
    var e, s, n;
    delete this.group, (e = this == null ? void 0 : this.guillotineData) == null || delete e.stripShapeBatches, this.stockId = (s = this == null ? void 0 : this.stock) == null ? void 0 : s.id, delete this.stock, delete this.score, delete this.proximity, delete this.firstShapeSampleRotations, delete this.index, delete this.patternMatch, delete this.stockMatch, delete this.bestScore, Ot.every((r) => {
      var o;
      return !((o = this._banding) != null && o[r]);
    }) && (this._banding = null), wt.every((r) => {
      var o;
      return !((o = this._finish) != null && o[r]);
    }) && (this._finish = null), wl(this), (n = this.guillotineData) == null || delete n.myStripParent, delete this.score, delete this.inGroup, delete this.groupID, delete this.addedAsGroup;
  }
  isExactFit(e) {
    return this.orientationLock === "w" && this.w === e.w || this.orientationLock === "l" && this.l === e.l || !this.orientationLock && this.w === e.w && this.l === e.l;
  }
  addToStock(e) {
    this.stock = e, this.stockId = e.id, this.added = !0, this.inGroup = !1, e.used = !0, this.grain = e.grain, e != null && e.grain && this.rot && (this.grain = fi(e.grain)), On([
      () => Ei(this.isInsideStock(e), `shape ${this.id} is not inside stock ${e.id}`).to.be.true
    ]);
  }
  removeFromStock() {
    this.placementOrder = null, this.stock = null, this.stockId = null, this.added = !1, this.addedAsGroup = !1, this == null || delete this.isFirstShape, Mt(this) && this.shapes.forEach((e) => e.removeFromStock());
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
    this.removeFromStock(), this.resetPosition(), ti(this, 0), this.placementOrder = null, this == null || delete this.isFirstShape, this.patternMatch = !1, e || this.resetBothScores(), n || this.resetGroupData(), this.resetGuillotineData(s);
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
    return !Cl(e) || !this.banding[e] ? 0 : e === "x1" || e === "x2" ? this.getShortSide() : e === "y1" || e === "y2" ? this.getLongSide() : Bn(e) ? _n(this, e) : 0;
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
      return s.push(new Yi({
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
    ti(this, this.bestScore.rot), this.x = this.bestScore.x, this.y = this.bestScore.y;
  }
  /**
   * will this shape fit in a container
   */
  willItFit(e, s = null) {
    var n, r, o;
    return Ke(e) && typeof ((n = this.fitsStock) == null ? void 0 : n[e.parentID]) < "u" ? ((o = (r = this.fitsStock) == null ? void 0 : r[e.parentID]) == null ? void 0 : o[s ?? "any"]) === !0 : Vi(this, e, s);
  }
  clone(e = null) {
    const s = this.id.split(".");
    e ? s.pop() : (e = s.pop(), e++), s.push(e);
    const n = s.join("."), r = this.stock;
    this.stock = null;
    const o = structuredClone(this);
    return o.stock = r, o.id = n, o.added = !1, o.duplicate = !0, delete o.score, delete o.bestScore, delete o.stock, delete o.placementOrder, delete o.inGroup, delete o.addedAsGroup, delete o.groupID, delete o.isFirstShape, new Et(o);
  }
  //this is a compressed version of the shape to help with memory management
  compress() {
    const e = this.cloneGuillotineData();
    return e.myStripParent = Pl(this.guillotineData.myStripParent) ? this.guillotineData.myStripParent.id : this.guillotineData.myStripParent, {
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
class xs extends Xi {
  constructor(e) {
    var t = (...Oh) => (super(...Oh), c(this, "cuts"), c(this, "phase"), c(this, "cutDirection"), c(this, "firstShape"), c(this, "merged"), c(this, "children"), c(this, "siblings"), //used by vis only
    c(this, "parent"), c(this, "segmentType"), c(this, "completed"), //used by vis only
    c(this, "rowSegment"), //used by cuts
    c(this, "placementOrder"), c(this, "hasBeamTrim"), c(this, "hasHeadCut"), c(this, "isInitial"), this);
    e && (e.preventAutoRotation = !0, t(e), this.validateSegment(e), delete this.trim, delete this.trimmed, this.parentID = x(e == null ? void 0 : e.parentID) ? e.parentID : null, this.shapes = x(e == null ? void 0 : e.shapes) ? e.shapes : [], this.firstShape = x(e == null ? void 0 : e.firstShape) ? e.firstShape : null, this.cuts = [], this.phase = x(e == null ? void 0 : e.phase) ? e.phase : null, this.merged = x(e == null ? void 0 : e.merged) ? e.merged : !1, this.parent = x(e == null ? void 0 : e.parent) ? e.parent : null, this.children = x(e == null ? void 0 : e.children) ? e.children : [], this.siblings = x(e == null ? void 0 : e.siblings) ? e.siblings : [], this.offcut = x(e == null ? void 0 : e.offcut) ? e.offcut : !1, this.segmentType = x(e == null ? void 0 : e.segmentType) ? e.segmentType : null, this.placementOrder = null, this.cutDirection = x(e == null ? void 0 : e.cutDirection) ? e.cutDirection : null, this.hasBeamTrim = x(e == null ? void 0 : e.hasBeamTrim) ? e.hasBeamTrim : !1, this.hasHeadCut = x(e == null ? void 0 : e.hasHeadCut) ? e.hasHeadCut : !1, this.isInitial = x(e == null ? void 0 : e.isInitial) ? e.isInitial : !1);
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
    var e, s;
    this.children = this.children.map((n) => {
      var r;
      return n ? {
        id: n.id,
        parentID: (r = n.parent) == null ? void 0 : r.id,
        x: n.x,
        y: n.y,
        l: n.l,
        w: n.w,
        offcut: n.offcut,
        segmentType: n.segmentType,
        hasHeadCut: n.hasHeadCut,
        cutDirection: n.cutDirection,
        phase: n.phase
      } : null;
    }), this.stockId = (this == null ? void 0 : this.stockId) ?? ((e = this == null ? void 0 : this.stock) == null ? void 0 : e.id), this.parentID = (s = this == null ? void 0 : this.parent) == null ? void 0 : s.id, delete this.stock, delete this.shapes, delete this.saw, delete this.siblings, delete this.parent, delete this.trim, this.algoBenchmark = null;
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
class ft extends Et {
  //used for sorting
  constructor(e) {
    var s, n;
    if (e = Wt(e), !((s = e == null ? void 0 : e.shapes) != null && s.length))
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
    const s = Qo(this.direction);
    let n = 0;
    for (const l of this.shapes) {
      const a = {
        shape: l.id,
        x: 0,
        y: 0,
        rot: l.rot.valueOf()
      };
      s === "x" ? a.x = e : a.y = e, this.positions.push(a), l.inGroup = !0, e += n === this.shapes.length - 1 ? l[this.direction] : l[this.direction] + l.getMinSpacing(this.container.saw), n++;
    }
    this[this.direction] = e;
    const r = fi(this.direction), o = this.shapes.reduce(
      (l, a) => a[r] > l ? a[r] : l,
      0
    );
    if (this[r] = o, $n()) {
      const l = this.shapes.slice(0, -1).reduce((f, p) => f + p.getMinSpacing(this.container.saw), 0), u = this.shapes.reduce((f, p) => f + p[this.direction], 0) + l;
      On([
        () => Ei(
          ce.equalTo(u, this[this.direction]),
          "group dimension is incorrect in direction"
        ).to.be.true,
        () => Ei(
          e,
          "currentPosition is incorrect in direction"
        ).to.equal(this[this.direction]),
        () => Ei(
          o,
          "group dimension in other direction is not correct"
        ).to.equal(this[r])
      ]);
    }
    if (this.w > this.container.w || this.l > this.container.l)
      throw new Error(
        `group ${this.id} is bigger than container - group ${this.l}x${this.w}, container ${this.container.l}x${this.container.w}`
      );
  }
  //update the shape spacing and overall group dimensions to account for min spacing
  updateShapeSpacing(e) {
    this.container = e, this.setShapePositions(), this.w > this.l ? this.orientationLock = "w" : this.orientationLock = "l", this.container && (this.efficiency = this[this.direction] / this.container[this.direction]), this.area = this.getArea();
  }
  //get the area of the shapes (does not include blade width) - overwrites the rectangle method
  /* getArea()
  {
  	return this.shapes.reduce( ( total, shape ) => total + shape.getArea(), 0 )
  } */
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
      if (!rs(s, n.rot, e)) throw new Error("orientateShapes - unable to rotate shape in group");
    });
  }
  /**
   * sort the shapes by size
   */
  sortShapes() {
    const e = fi(this.direction);
    this.shapes.sort((s, n) => n[e] === s[e] ? n[this.direction] === s[this.direction] ? s.id.localeCompare(n.id, void 0, { numeric: !0 }) : n[this.direction] - s[this.direction] : n[e] - s[e]);
  }
  /**
   * place the group shapes on the stock
   */
  placeMyShapes(e) {
    if (!e) throw new Error("placeShapes requires stock");
    this.addToStock(e);
    for (let s = 0; s < this.shapes.length; s++) {
      const n = this.shapes[s], r = this.positions.find((a) => a.shape === n.id);
      if (!r) throw new Error("position not found for shape in group");
      if (n.x = this.x + r.x, n.y = this.y + r.y, !rs(n, r.rot, e)) throw new Error("placeMyShapes - unable to rotate shape in group");
      s === 0 && this.x === 0 && this.y === 0 && (n.isFirstShape = !0), n.addedAsGroup = this.id, n.inGroup = !1, n.score = this.score;
      const l = n.guillotineData.stripShapeBatches;
      n.guillotineData = this.cloneGuillotineData(), n.guillotineData.stripShapeBatches = l, n.bestScore = this.bestScore, typeof this.placementOrder == "number" && (n.groupPlacementOrder = s, n.placementOrder = this.placementOrder + s / 1e6), n.addToStock(e);
    }
  }
  //this is for groups which are created once and reused between stock e.g. user groups
  orientateCorrectly(e) {
    this.orientateShapes(e), Zo(this, e);
  }
  clone(e = []) {
    const n = `g${parseInt(this.id.split("g")[1]) + 1}`, r = this.shapes, o = this.container, l = this.stock;
    this.shapes = [], this.container = null, this.stock = null;
    const a = structuredClone(this);
    return this.shapes = r, this.container = o, this.stock = l, a.container = this.container, a.shapes = e, a.id = n, new ft(a);
  }
  compress() {
    const e = super.compress.call(this);
    return e.direction = this.direction, e.positions = structuredClone(this.positions), e.shapes = this.shapes.map((s) => s.compress()), e.type = this.type, e.cloneType = "group", e;
  }
}
function xh(i) {
  if (!i.length) return "n";
  const t = i.map((e) => e.grain).filter((e) => e);
  return t.length ? t.every((e) => e === "l") ? "l" : t.every((e) => e === "w") ? "w" : t.some((e) => e === "l" || e === "w") ? "y" : "n" : "n";
}
function Ll(i) {
  return i.shapes !== void 0;
}
function Mt(i) {
  return i instanceof ft && i.type !== "user";
}
function Gn(i) {
  return i instanceof ft && i.type === "user";
}
function Gt(i) {
  return i instanceof ws;
}
function ot(i) {
  return i instanceof Ss;
}
function Se(i) {
  return i instanceof pi;
}
function Dl(i) {
  return i instanceof jt;
}
function Ke(i) {
  return i instanceof zt;
}
function ks(i) {
  return i instanceof Xi;
}
function Ze(i) {
  return i instanceof Et && !(i instanceof ft);
}
function Pl(i) {
  return i instanceof Et || i instanceof ft;
}
function Tl(i) {
  return i instanceof xs;
}
function Wn(i) {
  return Ze(i) || Ke(i) || Se(i) || ot(i);
}
function Nn(i) {
  return Se(i) || ot(i) ? !1 : Ze(i) || Ke(i) ? i.trimmed : !1;
}
function $l(i) {
  return i instanceof ft ? i.type === "user" ? "userGroup" : i.type === "strip" ? "stripGroup" : "group" : i instanceof ws ? "inputUserGroup" : i instanceof Ss ? "inputStock" : i instanceof pi ? "inputShape" : i instanceof zt ? "stock" : i instanceof Xi ? "container" : i instanceof Et && !(i instanceof ft) ? "shape" : i instanceof xs ? "segment" : i instanceof Hn ? "offcut" : i instanceof At ? "saw" : i instanceof jt ? "rectangle" : null;
}
function zs(i, t) {
  return kr(i, t);
}
function qt(i, t) {
  return ei(i, t);
}
function Ol(i, t, e) {
  Cr(i, t, e);
}
function x(i) {
  return !(i === void 0 || i === null || i === "" || typeof i == "object" && !Object.values(i).length);
}
function ii(i, t = !1) {
  if (!x(i) || typeof i != "object") return !1;
  const e = Object.values(i);
  return e.length === 0 ? !1 : t ? e.some((s) => x(s) && s) : e.some((s) => x(s));
}
function kh(i) {
  return !i || !Array.isArray(i) ? 0 : i.reduce((t, e) => {
    let s = 0;
    return ot(e) && e.autoAdd ? s = 1 : s = x(e.q) && typeof e.q == "string" ? parseInt(e.q) : e.q, !isNaN(s) && s > 0 ? t + s : t;
  }, 0);
}
function Ch(i) {
  if (!(i != null && i.length)) return [];
  const t = i.filter((s) => !s.added).map((s) => (s.parentID = s.getParentID(), s)), e = {};
  return t.forEach((s) => {
    const n = Al(s.stock) || 1;
    e[s.parentID] ? e[s.parentID].count += n : (e[s.parentID] = {}, e[s.parentID].count = n, e[s.parentID].id = s.parentID, e[s.parentID].name = s != null && s.name ? s.name : s.id, e[s.parentID].l = s.l, e[s.parentID].w = s.w, e[s.parentID].t = s.t, e[s.parentID].material = s.material, e[s.parentID].rot = s.rot);
  }), Object.values(e);
}
function Al(i, t = []) {
  return i ? i.stack === !1 ? 1 : typeof (i == null ? void 0 : i.stack) == "number" ? i.stack : typeof (i == null ? void 0 : i.stack) == "string" ? t.find((s) => s.id === i.stack).stack : 0 : 0;
}
function El() {
  const i = document.documentElement;
  return "requestFullscreen" in i || "webkitRequestFullscreen" in i || "mozRequestFullScreen" in i || "msRequestFullscreen" in i;
}
function ls(i = 0, t, e = null, s = null, n = null) {
  if (!Se(e) && !Gt || s === "stock") return !1;
  let r, o;
  if (Se(e) ? r = e.orientationLock : Gt(e) ? r = e.direction : s === "shape" && (r = n), i === 0 || Gt(e))
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
function Vs(i, t, e = null, s = null, n = null) {
  if (!Se(e) || s === "shape") return !1;
  let r;
  return i === 0 || i === 1 ? ls(i, t, e, s, n) ? "cc" : !1 : i === 2 ? t === "w" ? e.l < e.w ? "c" : "cc" : !1 : r;
}
function Ml(i) {
  i.banding && (i.banding = Ni(i.banding, "cc")), i.trim && (i.trim = Ni(i.trim, "cc"));
}
function Ih(i, t = 0) {
  return Ze(i) || Se(i) || !t || (i.preventAutoRotation = !0, t === 2 && i.l < i.w && Ml(i)), i;
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
const { addNotice: ht } = ps(), {
  inputs: Le,
  totalInputShapes: Rl,
  totalInputStock: Fl,
  createStockList: _l,
  createShapeList: ql,
  validateInputShapes: Bl,
  validateInputStock: Un,
  removeShape: Ys,
  removeStock: Xs
} = bn(), Hl = {
  t: (i) => i,
  isAdmin: !1,
  partTrim: 0,
  shared: !1,
  maxShapes: 1 / 0,
  maxStock: 1 / 0,
  useInventory: !1,
  selectedSaw: void 0,
  materialStore: void 0,
  inputShapes: null,
  onLimit: null
}, Gl = () => {
  var i, t;
  if ((i = Le == null ? void 0 : Le.inputStock) != null && i.value) {
    for (let e = Le.inputStock.value.length - 1; e >= 0; e--) {
      const s = Le.inputStock.value[e];
      !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Le.inputStock.value.length > 1 || e !== 0) && Xs(s.listId);
    }
    if ((t = Le == null ? void 0 : Le.inputShapes) != null && t.value)
      for (let e = Le.inputShapes.value.length - 1; e >= 0; e--) {
        const s = Le.inputShapes.value[e];
        !(s != null && s.l) && !(s != null && s.w) && (e === 0 && Le.inputShapes.value.length > 1 || e !== 0) && Ys(s.listId);
      }
  }
}, Wl = (i, t = !1) => {
  var s, n;
  if (!t) return [];
  const e = [];
  if (!((s = Le == null ? void 0 : Le.inputShapes) != null && s.value)) return e;
  for (let r = Le.inputShapes.value.length - 1; r >= 0; r--) {
    const o = Le.inputShapes.value[r];
    if (!o) continue;
    if (!x(o.material)) {
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
}, jn = (i) => {
  if (i.orientationModel === void 0 || i.sawData === void 0)
    throw new Error("orientationModel and sawData are required options");
  return {
    ...Hl,
    ...i,
    // Ensure required properties are present
    orientationModel: i.orientationModel,
    sawData: i.sawData
  };
}, Nl = (i = {}) => {
  const t = jn(i), e = t.t;
  Gl();
  const s = [];
  t.useInventory || s.push(...Un(i == null ? void 0 : i.sawData)), s.push(...Bl({
    saw: t.sawData,
    partTrim: S({ v: t.partTrim }),
    useInventory: t.useInventory,
    inputShapesOverride: t.inputShapes
  }));
  const n = Pt(s);
  return n.length > 0 ? (console.warn("Validation errors:", JSON.parse(JSON.stringify(n))), ht({
    type: "error",
    message: e("inputs_issue", { x: "part" }),
    additional: n.map((r) => e(r.message))
  }), !1) : !0;
};
async function Ul(i) {
  var s, n;
  const t = jn(i), e = t.t;
  try {
    if (!Nl(t))
      return { valid: !1 };
    if (t.maxShapes !== 1 / 0 && t.maxShapes && !t.isAdmin && !t.shared && (Rl.value > t.maxShapes || Fl.value > t.maxStock))
      return t.onLimit(), { valid: !1 };
    if (t.useInventory) {
      const h = Wl(t.materialStore, !0), m = Pt(h);
      if (m.length > 0)
        return ht({
          type: "error",
          message: e("inputs_issue", { x: "material" }),
          additional: m.map((w) => e(w.message))
        }), { valid: !1 };
    } else {
      const h = Un(), m = Pt(h);
      if (m.length > 0)
        return ht({
          type: "error",
          message: e("inputs_issue", { x: "stock" }),
          additional: m.map((w) => e(w.message))
        }), { valid: !1 };
    }
    const r = t.useInventory ? new At(t.selectedSaw) : new At(t.sawData), o = Pt(r.issues);
    if (o.length > 0)
      return ht({
        type: "error",
        message: e("inputs_issue", { x: "saw" }),
        additional: o.map((h) => e(h.message))
      }), { valid: !1 };
    const { stockList: l, issues: a } = await _l(r), u = Pt(a);
    if (u.length > 0)
      return ht({
        type: "error",
        message: e("inputs_issue", { x: "stock" }),
        additional: u.map((h) => e(h.message))
      }), { valid: !1 };
    if (!(l != null && l.length))
      return ht({
        type: "error",
        message: e("no_stock")
      }), { valid: !1 };
    const { shapeList: f, issues: p } = await ql({
      orientationModel: t.orientationModel,
      trim: t.partTrim,
      inputShapesOverride: t.inputShapes
    }), I = Pt(p);
    if (I.length > 0)
      return ht({
        type: "error",
        message: e("inputs_issue", { x: "part" }),
        additional: I.map((h) => e(h.message))
      }), { valid: !1 };
    if (!(f != null && f.length))
      return ht({
        type: "error",
        message: e("no_parts_list")
      }), { valid: !1 };
    if (((n = (s = Le.userGroups) == null ? void 0 : s.value) == null ? void 0 : n.length) > 0) {
      Le.userGroups.value.forEach((w) => w.populateParentID(Le.inputShapes.value));
      const h = kl(
        Le.userGroups.value,
        Le.inputShapes.value
      ), m = Pt(h);
      if (m.length > 0)
        return ht({
          type: "error",
          message: e("inputs_issue", { x: "group" }),
          additional: m.map((w) => e(w.message))
        }), { valid: !1 };
    }
    return {
      valid: !0,
      saw: r,
      stockList: l,
      shapeList: f
    };
  } catch (r) {
    return console.error("Validation error:", r), ht({
      type: "error",
      message: e("unexpected_error"),
      additional: [(r == null ? void 0 : r.message) ?? ""]
    }), { valid: !1 };
  }
}
function jl(i) {
  return !i || !ii(i, !0) ? "" : Object.values(i).filter((t) => t).join("|");
}
function Cs(i, t, e = "Options") {
  if (!e && `${t}` in i && typeof i[t] == "object") return !0;
  const s = `${t}${e}`;
  return !!(e && s in i && typeof i[s] == "object");
}
function Is(i) {
  return `${i}Options`;
}
function zl(i, t, e) {
  const s = Is(t);
  for (const n in i[s]) {
    const r = Object.keys(i[s][n]);
    for (const o of r)
      e.includes(o) || o in i[s][n] && delete i[s][n][o];
    for (const o of e)
      (n === "all" || !(o in i[s][n])) && (i[s][n][o] = "");
  }
}
function Vl(i, t, e = !0) {
  if (!Cs(i, t, "Options")) return;
  const s = i[t], n = Object.keys(s);
  for (const r of n)
    Ls(i, t, r, e);
  e && zn(i, t, "all");
}
function Ls(i, t, e, s = !0) {
  s && zn(i, t, e), e !== "all" && Cs(i, t) && (i[t][e] = !1);
}
function zn(i, t, e) {
  if (!Cs(i, t, "Options")) return;
  const n = i[`${t}Options`][e];
  if (typeof n != "object" || n === null) return;
  Object.keys(n).forEach((o) => n[o] = "");
}
function Ds(i, t, e, s, n, r) {
  var f;
  const o = t + "Options";
  if (!((f = i == null ? void 0 : i[o]) != null && f[e]) || !(s in i[o][e])) return;
  gi(i, t, e, !1), i[o][e][s] = n;
  const l = i[o][e], a = Object.values(l || {}).filter((p) => p);
  if (!Array.isArray(a)) return;
  const u = Ui(i, t, e, r);
  gi(i, t, e, !!We(u));
}
function Vn(i, t, e, s, n = [], r) {
  const o = t + "Options";
  if (!i[o] || typeof i[o] != "object") return;
  const l = Object.keys(i[o]);
  if (!l.length) return;
  const a = Ui(i, t, "all", r), u = i[o][e], f = Object.values(u || {}).filter((p) => p);
  for (const p of l)
    p !== "all" && (n.includes(p) || (Ds(i, t, p, e, s, r), Array.isArray(f) || gi(i, t, p, !1), gi(i, t, p, !!We(a))));
}
function gi(i, t, e, s) {
  var o;
  if (e === "all") return;
  const n = Is(t), r = jl((o = i == null ? void 0 : i[n]) == null ? void 0 : o[e]);
  s ? i[t][e] = r || !0 : i[t][e] = !1;
}
function Ui(i, t, e, s) {
  var a;
  const n = t + "Options";
  if (!((a = i == null ? void 0 : i[n]) != null && a[e])) return !1;
  const r = i[n][e], o = Object.values(r || {}).filter((u) => u);
  if (!Array.isArray(o) || !s || typeof s != "function")
    return !1;
  const l = s(t, o);
  return t === "banding" && Bn(e) && We(l) ? bl(i, e, l) / 1e3 : l;
}
function Lh(i) {
  i != null && i.type && delete i.type, Yl.call(this, i);
}
function Yl(i) {
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
function Xl(i) {
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
const Kl = { id: "mini-stock-nav" }, Zl = ["onMousedown"], Jl = { class: "id" }, Ql = /* @__PURE__ */ Me({
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
    return (r, o) => (y(), C("div", Kl, [
      (y(!0), C(xe, null, Ee(e.stockList, (l, a) => (y(), C("button", {
        key: a,
        class: Ce(["nav-button", { selected: l.id === e.activeStockId }]),
        type: "button",
        style: ke({
          backgroundColor: l.id === e.activeStockId ? "#" + e.secondaryColor : "#" + e.primaryColor
        }),
        onMousedown: (u) => n(l.id)
      }, [
        T("div", Jl, te(a + 1), 1),
        cs(T("div", { class: "stack legibility" }, te(l.stack), 513), [
          [hs, typeof l.stack == "number" && l.stack > 1]
        ])
      ], 46, Zl))), 128))
    ]));
  }
}), ni = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, ea = {
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
}, ta = { id: "spinner" }, ia = ["width", "height"], sa = {
  key: 2,
  id: "spinner-number",
  class: "stock-number"
};
function na(i, t, e, s, n, r) {
  return y(), C("div", ta, [
    e.complete ? G("", !0) : (y(), C("svg", {
      key: 0,
      class: "loading",
      style: ke({ width: e.size + "px", height: e.size + "px" }),
      width: e.size,
      height: e.size,
      viewBox: "0 0 300 300"
    }, t[0] || (t[0] = [
      Or('<rect class="square s1" x="0" y="0"></rect><rect class="square s2" x="100" y="0"></rect><rect class="square s3" x="200" y="0"></rect><rect class="square s4" x="0" y="100"></rect><rect class="square s5" x="200" y="100"></rect><rect class="square s6" x="0" y="200"></rect><rect class="square s7" x="100" y="200"></rect>', 7)
    ]), 12, ia)),
    e.complete ? (y(), C("svg", {
      key: 1,
      class: "complete",
      style: ke({ width: e.size + "px", height: e.size + "px" }),
      viewBox: "0 0 448 512",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[1] || (t[1] = [
      T("path", { d: "m203.3 331.3c-6.2 6.3-16.4 6.3-22.6 0l-64-64c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l52.7 52.7 116.7-116.7c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6zm-203.3-235.3c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64h-320c-35.35 0-64-28.7-64-64zm32 0v320c0 17.7 14.33 32 32 32h320c17.7 0 32-14.3 32-32v-320c0-17.67-14.3-32-32-32h-320c-17.67 0-32 14.33-32 32z" }, null, -1)
    ]), 4)) : G("", !0),
    e.showNumber ? (y(), C("div", sa, te(e.number), 1)) : G("", !0)
  ]);
}
const Ks = /* @__PURE__ */ ni(ea, [["render", na]]);
function ra(i, t, e, s, n = !0) {
  var o;
  if (!i || !e || !s || !((o = i == null ? void 0 : i[t]) != null && o[e])) return;
  const r = i[t][e].find((l) => l.id === s);
  if (r)
    return n ? r.enabled = !0 : r.enabled = !1, !0;
}
function oa(i, t, e) {
  var s;
  return (s = i == null ? void 0 : i[t]) != null && s[e] ? i[t][e].filter((n) => n.enabled === !0).map((n) => n.id) : [];
}
function la(i, t, e, s, n = []) {
  const r = oa(i, e, s);
  if (!r.length) return [];
  const o = t.filter((a) => r.includes(a.id) || a.custom === !0), l = o.filter((a) => (a == null ? void 0 : a.fieldMap) && !a.fieldMap.startsWith("customData."));
  if (r.length !== l.length) {
    const a = new Set(l.map((f) => f.id)), u = o.map((f) => f.id).filter((f) => !a.has(f)).map((f) => `'${f}'`);
    console.warn(`Inputs - these fields do not have a field definition - ${u.join()}`);
  }
  return n.length && (o.sort((a, u) => {
    const f = n.indexOf(a.id), p = n.indexOf(u.id);
    return f === -1 ? 1 : p === -1 ? -1 : f - p;
  }), console.log(o)), o;
}
const aa = ["id"], ua = {
  key: 0,
  class: "delete",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, ca = /* @__PURE__ */ Me({
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
    const e = i, s = t, n = H(0), r = H(!1), o = (v, D, K, $) => {
      if (!Se(K) || D === 0)
        return v;
      const U = l();
      return D === 1 || D === 2 && $ !== "n" && v ? U : v;
    }, l = (v) => {
      const D = { ...e, ...v };
      if (!D.rectangle || !Se(D.rectangle)) return "";
      let K = "";
      switch (D.orientationModel) {
        case 0:
          K = X.value;
          break;
        case 1:
          D.stockGrain === "y" || D.stockGrain === "n" ? K = D.rectangle.l >= D.rectangle.w ? "l" : "w" : D.rectangle.l >= D.rectangle.w ? K = D.stockGrain : K = K = D.stockGrain === "l" ? "w" : "l";
          break;
        case 2:
          K = D.rectangle.l >= D.rectangle.w ? "l" : "w";
          break;
      }
      return K;
    }, a = () => {
      if (e.disabled || N.value.length <= 1) return;
      let v = null;
      [1, 2].includes(e.orientationModel) ? v = p() : v = f(), n.value = v;
    }, u = (v) => {
      const D = N.value.findIndex((K) => K === v);
      return D === -1 ? 0 : D;
    }, f = () => {
      let v = 0;
      return v = u(X.value) + 1, v > N.value.length - 1 && (v = 0), v;
    }, p = () => {
      let v = 0;
      if (X.value)
        v = N.value.findIndex((D) => D === "");
      else {
        const D = l();
        v = N.value.findIndex((K) => K === D);
      }
      return v;
    }, I = (v) => {
      s("updateOrientation", v);
    }, h = () => {
      const v = X.value;
      switch (e.orientationModel) {
        case 0:
          return v ? e.stockGrain === "n" ? v || e.shapeOrientation || "default" : e.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        case 1:
          return v ? e.stockGrain === "n" ? v || e.shapeOrientation || "default" : e.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        case 2:
          return v ? e.stockGrain === "n" ? v || e.shapeOrientation || "default" : e.stockGrain === "w" ? v === "w" ? "w" : "l" : v === "l" ? "l" : "w" : "default";
        default:
          return "default";
      }
    }, m = () => {
      if (!e.rectangle) return;
      const v = o(
        X.value,
        e.orientationModel,
        e.rectangle,
        e.stockGrain
      );
      if (v !== X.value) {
        w(v);
        return;
      }
      if (n.value = u(X.value), !!Se(e.rectangle)) {
        if (e.orientationModel === 1) {
          const D = he.value ? l() : X.value;
          w(D);
          return;
        }
        if (e.orientationModel === 2) {
          let D;
          he.value ? D = e.stockGrain !== "n" ? l() : "" : D = X.value, w(D);
        }
      }
    }, w = (v) => {
      n.value = u(v), I(v);
    }, R = () => {
      const v = [
        { l: 100, w: 50, desc: "l > w" },
        { l: 50, w: 50, desc: "l === w" },
        { l: 50, w: 100, desc: "w > l" }
      ], D = ["l", "w", "y", "n"], K = [0, 1, 2], $ = {
        "": "Free rotation",
        l: "Long side follows grain",
        w: "Short side follows grain"
      }, U = {
        "": "Free rotation",
        l: "Long side follows stock length (long side)",
        w: "Long side follows stock width (short side)"
      }, W = {
        l: "Grain along stock length (long side)",
        w: "Grain along stock width (short side)",
        y: "Grain along a mix of stock length (long side) and width (short side)",
        n: "No stock grain set"
      }, ie = [];
      v.forEach((O) => {
        D.forEach((M) => {
          K.forEach((V) => {
            const se = new pi({
              l: O.l,
              w: O.w
            }), ve = l({
              orientationModel: V,
              rectangle: se,
              stockGrain: M
            });
            let Ie = "";
            se.l === se.w ? Ie = "l === w" : se.l > se.w ? Ie = "l >= w" : Ie = "w > l";
            const Te = ["l", "w", "y"].includes(M) ? $ : U;
            ie.push({
              Model: V,
              "Stock grain": M,
              "Stock grain description": W[M],
              Dimensions: Ie,
              "Orientation lock": ve || "N/A",
              "Orientation Lock description": Te[ve] || "N/A"
            });
          });
        });
      }), ie.sort((O, M) => {
        if (O.Model !== M.Model)
          return O.Model - M.Model;
        if (O["Stock grain"] !== M["Stock grain"])
          return O["Stock grain"].localeCompare(M["Stock grain"]);
        const V = {
          "l >= w": 0,
          "l === w": 1,
          "w > l": 2
        };
        return V[O.Dimensions] - V[M.Dimensions];
      }), console.table(ie);
    }, N = Q(() => {
      if (!e.rectangle) return ["l", "w"];
      if (Gt(e.rectangle)) return ["l", "w"];
      let v = ["", "l", "w"];
      return e.rectangle.multiEdit && (v = [" ", "", "l", "w"]), ee.value && (v = v.filter((D) => D !== "w")), v;
    }), ee = Q(() => {
      var v, D, K, $;
      return Se(e.rectangle) || ot(e.rectangle) ? e.rectangle.isSquare() : e.rectangleType && ((v = e.rectangle) != null && v.l) && ((D = e.rectangle) != null && D.w) ? ((K = e.rectangle) == null ? void 0 : K.l) === (($ = e.rectangle) == null ? void 0 : $.w) : !1;
    }), X = Q(() => {
      let v = "";
      return Gt(e.rectangle) ? v = e.rectangle.direction : Se(e.rectangle) ? v = e.rectangle.orientationLock ?? "" : ot(e.rectangle) && (v = e.rectangle.grain ?? ""), v;
    }), Z = Q(() => Gt(e.rectangle) || !e.rectangle ? {
      l: null,
      w: null
    } : {
      l: e.rectangle.l,
      w: e.rectangle.w
    }), he = Q(() => !Z.value.l && !Z.value.w), _ = Q(() => ls(
      e.orientationModel,
      e.stockGrain,
      e.rectangle,
      e.rectangleType,
      e.shapeOrientation
    )), J = Q(() => {
      var $;
      if (!e.rectangle)
        return e.shapeOrientation ? "noGrain" : "freeRotation";
      if (ot(e.rectangle) || e.rectangleType === "stock")
        return {
          " ": "delete",
          l: "grainLeftRight",
          w: "grainTopBottom"
        }[e.rectangle.grain] || "noGrain";
      const v = {
        n: { " ": "delete", l: "leftRight", w: "leftRight", default: "freeRotation" },
        y: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        l: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        w: { " ": "delete", l: "grainLeftRight", w: "grainTopBottom", default: "freeRotation" },
        default: { " ": "delete", l: "leftRight", w: "topBottom", default: "freeRotation" }
      }, D = e.stockGrain || "default";
      let K = "default";
      return Se(e.rectangle) || e.rectangleType === "shape" ? K = h() : Gt(e.rectangle) && (K = e.rectangle.direction || "default"), (($ = v[D]) == null ? void 0 : $[K]) || v[D].default;
    });
    return De(n, (v, D) => {
      r.value && D !== void 0 && I(N.value[v]);
    }, { immediate: !1 }), De(Z, (v, D) => {
      if (!e.rectangle || e.orientationModel === 0 || !Se(e.rectangle) || Se(e.rectangle) && (e.orientationModel === 2 && D.l && D.w && !X.value || e.stockGrain === "n" && !X.value))
        return;
      const K = l();
      X.value !== K && I(K);
    }, { immediate: !1 }), De(() => e.stockGrain, (v, D) => {
      v !== D && m();
    }, { immediate: !0 }), pt(() => {
      m(), et(() => {
        r.value = !0, e.debug && R();
      });
    }), (v, D) => (y(), C("div", {
      id: v.id,
      class: Ce(["orientation-button", { rot: _.value, square: ee.value, disabled: v.disabled, [J.value]: !0 }]),
      tabindex: "0",
      "aria-label": "Part orientation",
      style: ke({
        backgroundColor: v.buttonBackground
      }),
      onClick: a
    }, [
      J.value === "delete" ? (y(), C("svg", ua, D[0] || (D[0] = [
        T("path", { d: "M144 0L128 32H0V96H448V32H320L304 0H144zM416 128H32L56 512H392l24-384z" }, null, -1)
      ]))) : G("", !0),
      J.value === "freeRotation" ? (y(), C("svg", {
        key: 1,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 67 63",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[1] || (D[1] = [
        T("g", null, [
          T("path", { d: "m9.296 31.378c0-3.305.67-6.455 1.88-9.322 3.642-8.621 12.179-14.678 22.12-14.678 10.63 0 19.656 6.927 22.806 16.509" }),
          T("path", { d: "m57.296 31.378c0 13.246-10.754 24-24 24-10.631 0-19.656-6.926-22.806-16.508" }),
          T("path", { d: "m61.183 5.408-4.622 17.851-18.347-1.838" }),
          T("path", { d: "m5.408 57.349 4.622-17.851 18.348 1.838" })
        ], -1)
      ]), 4)) : G("", !0),
      J.value === "leftRight" ? (y(), C("svg", {
        key: 2,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 72 39",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[2] || (D[2] = [
        T("g", null, [
          T("path", { d: "m5.408 19.408h61.095" }),
          T("g", null, [
            T("path", { d: "m52.695 5.408 13.808 14-13.808 14" }),
            T("path", { d: "m17.408 33.408-12-14 12-14" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      J.value === "topBottom" ? (y(), C("svg", {
        key: 3,
        class: "arrow",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 39 72",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[3] || (D[3] = [
        T("g", null, [
          T("path", { d: "m19.408 66.503v-61.095" }),
          T("g", null, [
            T("path", { d: "m5.408 19.216 14-13.808 14 13.808" }),
            T("path", { d: "m33.408 54.503-14 12-14-12" })
          ])
        ], -1)
      ]), 4)) : G("", !0),
      J.value === "grainLeftRight" ? (y(), C("svg", {
        key: 4,
        class: "grain",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 106 64",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[4] || (D[4] = [
        T("g", null, [
          T("path", { d: "m3 3h99.887" }),
          T("path", { d: "m3.113 32h99.887" }),
          T("path", { d: "m3.113 61h99.887" })
        ], -1)
      ]), 4)) : G("", !0),
      J.value === "grainTopBottom" ? (y(), C("svg", {
        key: 5,
        class: "grain",
        style: ke({
          stroke: v.iconColor ? v.iconColor : "#ffffff"
        }),
        viewBox: "0 0 64 106",
        xmlns: "http://www.w3.org/2000/svg"
      }, D[5] || (D[5] = [
        T("g", null, [
          T("path", { d: "m61 3v99.887" }),
          T("path", { d: "m32 3.113v99.887" }),
          T("path", { d: "m3 3.113v99.887" })
        ], -1)
      ]), 4)) : G("", !0)
    ], 14, aa));
  }
}), ha = ["id"], da = /* @__PURE__ */ Me({
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
    De(() => e.inputShape.orientationLock, () => {
      let l = {
        x1: e.inputShape.banding.x1,
        x2: e.inputShape.banding.x2,
        y1: e.inputShape.banding.y1,
        y2: e.inputShape.banding.y2
      };
      const a = Vs(
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
    }, { deep: !0, immediate: !0 }), De([
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
      const a = Vs(
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
    return pt(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.addEventListener("keydown", r);
    }), ds(() => {
      var l;
      (l = document.getElementById(e.id)) == null || l.removeEventListener("keydown", r);
    }), (l, a) => (y(), C("div", {
      id: l.id,
      class: Ce(["banding-button", { open: l.open, disabled: l.disabled }]),
      tabindex: "0",
      onClick: o
    }, [
      T("div", {
        class: Ce(["outer", {
          x1: n.value.x1,
          x2: n.value.x2,
          y1: n.value.y1,
          y2: n.value.y2
        }])
      }, a[0] || (a[0] = [
        T("div", { class: "inner" }, null, -1)
      ]), 2)
    ], 10, ha));
  }
}), fa = (i) => {
  i = i.replace(/['"]+/g, "");
  try {
    return new di(i).valueOf();
  } catch {
    return null;
  }
};
function pa({
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
            const h = /^-?\d*\s*-?\d*\/?-?\d*$/.test(a);
            return {
              value: a,
              valid: h
            };
          }
          const u = fa(a);
          if (u === null)
            return {
              value: null,
              valid: !1,
              message: "invalid_fraction"
            };
          let f = u;
          return typeof i.min == "number" && (f = Math.max(f, i.min)), typeof i.max == "number" && (f = Math.min(f, i.max)), {
            value: new di(f).toFraction(!0),
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
          let f = u, p = !0, I = null;
          return typeof i.min == "number" && f < i.min && (p = !1, f = Math.max(f, i.min), I = "below_min"), typeof i.max == "number" && f > i.max && (p = !1, f = Math.min(f, i.max), I = "above_max"), { value: f, valid: p, message: p ? void 0 : I };
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
        } else {
          const u = a.replace(
            i.type === "integer" ? /[^0-9-]/g : /[^0-9.-]/g,
            ""
          );
          if (u === "" || u === "-")
            return i.required ? { value: null, valid: !1, message: "field_required" } : { value: null, valid: !0 };
          let f = i.type === "integer" ? parseInt(u, 10) : parseFloat(u);
          return isNaN(f) ? { value: null, valid: !1, message: "invalid_number" } : (typeof i.min == "number" && f < i.min && (f = i.min), typeof i.max == "number" && f > i.max && (f = i.max), i.allowZero === !1 && f === 0 ? {
            value: null,
            // Value becomes null because 0 is disallowed
            valid: !1,
            message: "zero_not_allowed"
            // Note: If the original input wasn't 0 but was clamped to 0,
            // this rule still applies. Decide if that's the desired UX.
          } : {
            value: f,
            valid: !0
            /*, clamped: clamped */
          });
        }
      // break; // Not needed after return
      default:
        return { value: o, valid: !0 };
    }
  };
  return {
    state: s,
    ...{
      handleInput: (o) => {
        if (!e.value) return;
        const l = o.target, a = n(l.value, !0);
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
function ga({
  props: i,
  emit: t,
  isMounted: e
}) {
  const s = H({
    isTyping: !1,
    isComposing: !1,
    lastValidValue: String(i.value ?? "")
  }), n = (r) => !(i != null && i.output) || i.output === "string" ? {
    value: r,
    valid: !0
  } : i.options && i.options.length > 0 && (i.numberFormat && (i.numberFormat === "fraction" ? r = String(r) : r = Number(r)), !i.options.some((l) => typeof l == "object" ? l.value === r : l === r)) ? {
    value: r,
    valid: !1,
    message: "invalid_option"
  } : {
    value: r,
    valid: !0
  };
  return {
    state: s,
    processValue: n,
    handleSelectChange: (r) => {
      if (!e.value) return;
      const o = r.target;
      if (i.multiEdit && o.value === " ") {
        t("update:value", null);
        return;
      }
      const l = n(o.value);
      t("validation", l, i.id), l.valid && t("update:value", l.value);
    }
  };
}
function ma({
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
const va = ["id", "name", "value", "inputmode", "type", "placeholder", "disabled", "default", "readonly", "min", "max", "aria-label", "aria-invalid", "aria-describedby"], ya = /* @__PURE__ */ Me({
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
      handleCompositionStart: f,
      handleCompositionEnd: p,
      handlePaste: I
    } = pa({
      props: e,
      emit: s,
      isMounted: n
    }), h = (m) => {
      const w = m.getBoundingClientRect(), R = window.getComputedStyle(m);
      return w.width > 0 && w.height > 0 && R.display !== "none" && R.visibility !== "hidden";
    };
    return pt(() => {
      (x(e.default) && e.value === void 0 || e.value === null) && s("update:value", e.default), e.focus && r.value && h(r.value) && et(() => r.value.focus());
    }), ds(() => {
      n.value = !1;
    }), (m, w) => (y(), C("input", ci(m.$attrs, {
      id: e.id,
      ref_key: "inputRef",
      ref: r,
      name: e.id,
      value: e.value,
      inputmode: e.inputMode,
      type: e.inputType,
      placeholder: e.placeholder,
      disabled: e.disabled,
      default: e.default,
      readonly: e.readonly,
      min: e.min,
      max: e.max,
      "aria-label": e.ariaLabel,
      "aria-invalid": !!e.issue,
      "aria-describedby": e.errorId,
      onInput: w[0] || (w[0] = //@ts-ignore
      (...R) => k(o) && k(o)(...R)),
      onFocus: w[1] || (w[1] = //@ts-ignore
      (...R) => k(l) && k(l)(...R)),
      onBlur: w[2] || (w[2] = //@ts-ignore
      (...R) => k(a) && k(a)(...R)),
      onKeydown: w[3] || (w[3] = //@ts-ignore
      (...R) => k(u) && k(u)(...R)),
      onCompositionstart: w[4] || (w[4] = //@ts-ignore
      (...R) => k(f) && k(f)(...R)),
      onCompositionend: w[5] || (w[5] = //@ts-ignore
      (...R) => k(p) && k(p)(...R)),
      onPaste: w[6] || (w[6] = //@ts-ignore
      (...R) => k(I) && k(I)(...R))
    }), null, 16, va));
  }
}), ba = ["id", "checked", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], wa = /* @__PURE__ */ Me({
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
    } = ma({
      props: e,
      emit: s,
      isMounted: n
    });
    return (u, f) => (y(), C("input", {
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
      onChange: f[0] || (f[0] = //@ts-ignore
      (...p) => k(o) && k(o)(...p)),
      onFocus: f[1] || (f[1] = //@ts-ignore
      (...p) => k(l) && k(l)(...p)),
      onBlur: f[2] || (f[2] = //@ts-ignore
      (...p) => k(a) && k(a)(...p))
    }, null, 40, ba));
  }
}), Sa = ["id", "value", "disabled", "required", "aria-label", "aria-invalid", "aria-describedby"], xa = ["disabled", "selected"], ka = {
  key: 0,
  value: " "
}, Ca = ["hidden", "value", "disabled"], Ia = /* @__PURE__ */ Me({
  __name: "SelectInput",
  props: {
    options: {},
    selectFirstOptionDisabled: { type: Boolean },
    multiEdit: { type: Boolean },
    numberFormat: {},
    output: {},
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
  emits: ["update:value", "focus", "blur", "validation"],
  setup(i, { emit: t }) {
    const e = i, s = t, n = H(!0), r = H(null), o = Q(() => e.options.map((a) => {
      var u, f, p;
      return {
        value: a.value,
        label: ((u = a.label) == null ? void 0 : u.toUpperCase()) ?? ((p = (f = a.value) == null ? void 0 : f.toString()) == null ? void 0 : p.toUpperCase()),
        hidden: a.hidden ?? !1,
        disabled: a.disabled ?? !1
      };
    })), {
      handleSelectChange: l
    } = ga({
      props: e,
      emit: s,
      isMounted: n
    });
    return (a, u) => {
      var f, p, I, h;
      return y(), C("select", ci(a.$attrs, {
        id: e.id,
        ref_key: "inputRef",
        ref: r,
        value: e.value,
        disabled: e.readonly || e.disabled,
        required: e.required,
        "aria-label": e.ariaLabel,
        "aria-invalid": !!e.issue,
        "aria-describedby": e.errorId,
        onChange: u[0] || (u[0] = //@ts-ignore
        (...m) => k(l) && k(l)(...m))
      }), [
        T("option", {
          value: "",
          disabled: e.selectFirstOptionDisabled,
          selected: !e.value
        }, te(((p = (f = e.text) == null ? void 0 : f.select) == null ? void 0 : p.toUpperCase()) ?? "SELECT"), 9, xa),
        e.multiEdit ? (y(), C("option", ka, te(((h = (I = e.text) == null ? void 0 : I.delete) == null ? void 0 : h.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
        (y(!0), C(xe, null, Ee(o.value, (m) => (y(), C("option", {
          key: m.value,
          hidden: m.hidden,
          value: m.value,
          disabled: m.disabled
        }, te(m.label), 9, Ca))), 128))
      ], 16, Sa);
    };
  }
}), La = ["for"], Da = {
  key: 0,
  class: "required-marker",
  "aria-hidden": "true"
}, Zs = /* @__PURE__ */ Me({
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
      Qt(te(t.label) + " ", 1),
      t.required ? (y(), C("span", Da, "*")) : G("", !0)
    ], 8, La));
  }
}), Pa = ["data-field-id"], Ta = ["disabled", "selected"], $a = {
  key: 0,
  value: " "
}, Oa = ["hidden", "value", "disabled"], dt = /* @__PURE__ */ Me({
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
    const e = t, s = i, n = H(null), r = H(null), o = H(!0), l = H(s.numberFormat), a = Q(() => s.custom ? "custom-" + s.id : s.id), u = Q(() => `${a.value}-error`), f = Q(() => s.label || s.placeholder), p = Q(() => J(s.type, s.numberFormat)), I = Q(() => v(s.type, s.numberFormat)), h = Q(() => ["string", "integer", "float", "unitDependent"].includes(s.type)), m = Q(() => {
      let $ = s.value;
      if (s.type !== "unitDependent" || !$) return $;
      try {
        return S({ v: $, nf: s.numberFormat });
      } catch {
        return s.numberFormat === "decimal" ? 0 : "0";
      }
    }), w = Q(() => s.options.map(($) => {
      var U, W;
      return {
        value: $.value,
        label: ((U = $.label) == null ? void 0 : U.toUpperCase()) || ((W = $.value) == null ? void 0 : W.toString().toUpperCase()),
        hidden: $.hidden || !1,
        disabled: $.disabled || !1
      };
    })), R = Q(() => ({
      input: !0,
      issue: s.issue || !o.value,
      warning: s.warning,
      required: s.required,
      disabled: s.disabled
    })), N = Q(() => ({
      id: a.value,
      value: s.value,
      disabled: s.disabled,
      readonly: s.readonly,
      required: s.required,
      "aria-label": f.value,
      "aria-invalid": !!s.issue,
      "aria-describedby": s.issue ? u.value : void 0
    })), ee = Q(() => ({
      ...N.value,
      type: s.type,
      inputMode: I.value,
      inputType: p.value,
      placeholder: s.placeholder,
      allowZero: s.allowZero,
      min: s.min,
      max: s.max,
      focus: s.focus,
      numberFormat: s.numberFormat,
      default: s.default
    })), X = Q(() => ({
      ...N.value,
      trueValue: s.trueValue,
      falseValue: s.falseValue
    })), Z = Q(() => ({
      ...N.value,
      options: w.value,
      selectFirstOptionDisabled: s.selectFirstOptionDisabled,
      multiEdit: s.multiEdit,
      numberFormat: s.numberFormat,
      text: s.text,
      output: s.output
    })), he = ($) => {
      r.value = $;
    }, _ = ($) => s.label && s.enableLabel && s.labelPosition === $, J = ($, U) => {
      if ($ === "unitDependent")
        return U === "fraction" ? "text" : "number";
      switch ($) {
        case "integer":
        case "float":
          return "number";
        case "string":
        default:
          return "text";
      }
    }, v = ($, U) => {
      if ($ === "unitDependent")
        return U === "fraction" ? "text" : "decimal";
      switch ($) {
        case "integer":
          return "numeric";
        case "float":
          return "decimal";
        case "string":
          return "text";
        default:
          return "text";
      }
    }, D = ($) => {
      e("update:value", $);
    }, K = ($, U) => {
      $.valid === void 0 || $.valid === !0 ? (o.value = !0, e("validation", n.value, $)) : $.valid === !1 && $.message && (o.value = !1, console.warn(`Field validation error for field ${U} - ${$.message}`), e("validation", n.value, $));
    };
    return De(() => s.numberFormat, ($, U) => {
      if (s.shouldConvertNumberFormat !== !1) {
        if (s.type === "unitDependent" && $ !== U && s.value)
          try {
            const W = S({ v: s.value, nf: $ });
            e("update:value", W);
          } catch {
            e("update:value", $ === "decimal" ? 0 : "0");
          }
        l.value = $;
      }
    }), ($, U) => (y(), C("div", {
      ref_key: "fieldRef",
      ref: n,
      class: Ce(["input-wrapper", R.value]),
      "data-field-id": a.value
    }, [
      _("first") ? (y(), ge(Zs, {
        key: 0,
        id: a.value,
        label: $.label,
        required: $.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      h.value ? (y(), ge(ya, ci({
        key: 1,
        ref: he
      }, ee.value, {
        "input-type": p.value,
        "input-mode": I.value,
        value: m.value,
        onValidation: K,
        "onUpdate:value": D
      }), null, 16, ["input-type", "input-mode", "value"])) : $.type === "checkbox" ? (y(), ge(wa, ci({
        key: 2,
        ref: he,
        type: "checkbox"
      }, X.value, {
        checked: $.value === $.trueValue,
        "onUpdate:value": U[0] || (U[0] = (W) => e("update:value", W))
      }), null, 16, ["checked"])) : $.type === "select" ? (y(), ge(Ia, ci({
        key: 3,
        ref: he
      }, Z.value, {
        "onUpdate:value": U[1] || (U[1] = (W) => e("update:value", W))
      }), {
        default: fs(() => {
          var W, ie, O, M;
          return [
            T("option", {
              value: "",
              disabled: $.selectFirstOptionDisabled,
              selected: !$.value
            }, te(((ie = (W = $.text) == null ? void 0 : W.select) == null ? void 0 : ie.toUpperCase()) ?? "SELECT"), 9, Ta),
            $.multiEdit ? (y(), C("option", $a, te(((M = (O = $.text) == null ? void 0 : O.delete) == null ? void 0 : M.toUpperCase()) ?? "DELETE"), 1)) : G("", !0),
            (y(!0), C(xe, null, Ee(w.value, (V) => (y(), C("option", {
              key: V.value,
              hidden: V.hidden,
              value: V.value,
              disabled: V.disabled
            }, te(V.label), 9, Oa))), 128))
          ];
        }),
        _: 1
      }, 16)) : G("", !0),
      _("last") ? (y(), ge(Zs, {
        key: 4,
        id: a.value,
        label: $.label,
        required: $.required
      }, null, 8, ["id", "label", "required"])) : G("", !0),
      Ar($.$slots, "default")
    ], 10, Pa));
  }
}), Aa = {
  key: 0,
  class: "inputs"
}, Ea = { class: "label" }, Ma = { class: "label" }, Ra = { class: "label" }, Fa = ["onClick"], _a = { class: "price" }, qa = ["aria-label"], as = /* @__PURE__ */ Me({
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
    const e = i, s = t, { t: n } = ji(["main", "errors"]), r = H(!1), o = Q(() => e.extraType + "Options"), l = Q(() => {
      var w;
      if (!((w = e.allOptions) != null && w.length)) return "auto";
      const h = e.allOptions.length;
      return h ? `repeat(${h + 3 - 1}, minmax(20px, max-content)) 1fr` : "auto";
    }), a = (h, m) => {
      s("update-all", e.shape, e.extraType, h, m);
    }, u = (h, m, w) => {
      s("set", e.shape, e.extraType, h, m, w);
    }, f = (h, m, w, R, N) => {
      var he;
      if (!h) return [];
      const ee = (he = m == null ? void 0 : m[w]) == null ? void 0 : he[R];
      if (!ee)
        return console.error(`ExtrasInputs: cannot find pricing options for ${w} > ${R}`), [];
      const X = Object.values(ee);
      if (!X.length)
        return console.error(`ExtrasInputs: cannot find pricing options for ${w} > ${R}`), [];
      const Z = X.filter((_) => typeof _ == "string");
      return e.getAvailablePricingOptions ? e.getAvailablePricingOptions(h, Z, N) : (console.error("ExtrasInputs: cannot find pricing function in parent"), []);
    }, p = (h) => {
      if (!e.pricing || !Object.values(e.pricing).length) return "";
      if (!e.getPrice)
        return console.error("ExtrasInputs: cannot find getExtrasPrice or formatPrice in parent"), "";
      const m = e.getPrice(e.shape, e.extraType, h);
      return m ? e.formatPrice(m) : "";
    }, I = () => {
      const h = [];
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
      ), h.length && (r.value = !0, console.error("pre-flight issues found in ExtrasInputs: " + h.map((m) => m.message).join(" ")));
    };
    return pt(() => I()), (h, m) => {
      var R, N, ee, X, Z, he, _, J;
      const w = Nt("font-awesome-icon");
      return r.value ? G("", !0) : (y(), C("div", {
        key: 0,
        class: Ce(["extras group", [h.extraType]]),
        style: ke({ "grid-column-end": "span " + h.partColumns })
      }, [
        h.allOptions.length === 1 && h.allOptions[0].length === 1 ? (y(), C("div", Aa, [
          T("div", Ea, te((N = (R = h.allOptions) == null ? void 0 : R[0]) == null ? void 0 : N[0]), 1),
          T("div", null, [
            (ee = h.shape) != null && ee[o.value] && "all" in h.shape[o.value] ? (y(), ge(dt, {
              key: 0,
              id: `${h.extraType}-all-${h.shapeIndex}`,
              type: "checkbox",
              output: "string",
              label: k(Zt)(k(n)("all")),
              "true-value": (Z = (X = h.allOptions) == null ? void 0 : X[0]) == null ? void 0 : Z[0],
              "false-value": "",
              value: (_ = h.shape[o.value].all) == null ? void 0 : _[(he = h.labels) == null ? void 0 : he[0]],
              "onUpdate:value": m[0] || (m[0] = (v) => {
                var D, K;
                u("all", (D = h.labels) == null ? void 0 : D[0], v), a((K = h.labels) == null ? void 0 : K[0], v);
              })
            }, null, 8, ["id", "label", "true-value", "value"])) : G("", !0)
          ]),
          (y(!0), C(xe, null, Ee(h.extraKeys, (v) => {
            var D, K, $, U, W, ie;
            return y(), C("div", { key: v }, [
              (D = h.labels) != null && D[0] && (($ = (K = h.shape) == null ? void 0 : K[o.value]) != null && $[v]) && h.labels[0] in h.shape[o.value][v] ? (y(), ge(dt, {
                key: 0,
                id: `${h.extraType}-${v}-${h.shapeIndex}`,
                type: "checkbox",
                output: "string",
                label: k(Zt)(k(n)(((U = h.userFriendlyFieldMap) == null ? void 0 : U[v]) || v)),
                "true-value": (ie = (W = h.allOptions) == null ? void 0 : W[0]) == null ? void 0 : ie[0],
                "false-value": "",
                value: h.shape[o.value][v][h.labels[0]],
                "onUpdate:value": (O) => u(v, h.labels[0], O)
              }, null, 8, ["id", "label", "true-value", "value", "onUpdate:value"])) : G("", !0)
            ]);
          }), 128))
        ])) : (y(), C("div", {
          key: 1,
          class: "grid inputs",
          style: ke({
            "grid-template-columns": l.value
          })
        }, [
          (J = h.shape) != null && J[o.value] && "all" in h.shape[o.value] ? (y(), C(xe, { key: 0 }, [
            T("div", Ma, te(k(Zt)(k(n)("all"))), 1),
            (y(!0), C(xe, null, Ee(h.allOptions, (v, D) => {
              var K, $;
              return y(), ge(dt, {
                id: `${h.extraType}-all-${h.labels[D]}-${D}-${h.shapeIndex}`,
                key: `${h.extraType}-all-${h.labels[D]}-${D}-${h.shapeIndex}`,
                type: "select",
                disabled: f(h.pricing, h.shape, o.value, "all", D).length === 0,
                options: f(h.pricing, h.shape, o.value, "all", D).map((U) => ({ value: U, label: U })),
                text: { select: "✘" },
                "select-first-option-disabled": !1,
                value: ($ = h.shape[o.value].all) == null ? void 0 : $[(K = h.labels) == null ? void 0 : K[D]],
                "onUpdate:value": (U) => {
                  var W, ie;
                  u("all", (W = h.labels) == null ? void 0 : W[D], U), a((ie = h.labels) == null ? void 0 : ie[D], U);
                }
              }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
            }), 128)),
            m[2] || (m[2] = T("div", null, null, -1)),
            m[3] || (m[3] = T("div", null, null, -1))
          ], 64)) : G("", !0),
          (y(!0), C(xe, null, Ee(h.extraKeys, (v) => {
            var D, K;
            return y(), C(xe, { key: v }, [
              (D = h.shape) != null && D[o.value] && v in h.shape[o.value] ? (y(), C(xe, { key: 0 }, [
                T("div", Ra, te(k(Zt)(k(n)(((K = h.userFriendlyFieldMap) == null ? void 0 : K[v]) || v))), 1),
                (y(!0), C(xe, null, Ee(h.allOptions, ($, U) => {
                  var W;
                  return y(), ge(dt, {
                    id: `${h.extraType}-${v}-${h.labels[U]}-${U}-${h.shapeIndex}`,
                    key: `${h.extraType}-${v}-${h.labels[U]}-${U}-${h.shapeIndex}`,
                    type: "select",
                    disabled: f(h.pricing, h.shape, o.value, v, U).length === 0,
                    options: f(h.pricing, h.shape, o.value, v, U).map((ie) => ({
                      value: ie,
                      label: ie
                    })),
                    text: { select: "✘" },
                    "select-first-option-disabled": !1,
                    value: h.shape[o.value][v][(W = h.labels) == null ? void 0 : W[U]],
                    "onUpdate:value": (ie) => {
                      var O;
                      return u(v, (O = h.labels) == null ? void 0 : O[U], ie);
                    }
                  }, null, 8, ["id", "disabled", "options", "value", "onUpdate:value"]);
                }), 128))
              ], 64)) : G("", !0),
              T("div", {
                class: "delete",
                onClick: () => k(Ls)(h.shape, h.extraType, v)
              }, [
                ye(w, { icon: ["fass", "trash"] })
              ], 8, Fa),
              T("div", _a, te(p(v) || k(n)("na").toUpperCase()), 1)
            ], 64);
          }), 128))
        ], 4)),
        T("button", {
          type: "button",
          class: "delete icon-left",
          "aria-label": k(n)("action_item", { a: "delete", i: h.extraLabel }),
          onClick: m[1] || (m[1] = () => k(Vl)(h.shape, h.extraType, !0))
        }, [
          ye(w, { icon: ["fass", "trash"] }),
          Qt(" " + te(k(n)("action_item", { a: "delete", i: h.extraLabel })), 1)
        ], 8, qa)
      ], 6));
    };
  }
}), Ba = ["id", "disabled"], Ha = { class: "icon" }, Ga = /* @__PURE__ */ Me({
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
      var a, u, f, p;
      const l = Nt("font-awesome-icon");
      return y(), C("button", {
        id: r.id,
        class: Ce(["finish-button", {
          "face-a": (u = (a = r.inputShape) == null ? void 0 : a.finish) == null ? void 0 : u.a,
          "face-b": (p = (f = r.inputShape) == null ? void 0 : f.finish) == null ? void 0 : p.b,
          selected: r.open
        }]),
        type: "button",
        tabindex: "0",
        disabled: r.disabled,
        onClick: n
      }, [
        T("div", Ha, [
          ye(l, { icon: ["fass", "spray-can"] })
        ]),
        o[0] || (o[0] = T("div", { class: "indicator" }, null, -1))
      ], 10, Ba);
    };
  }
}), Wa = Me({
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
      return bs(this.inputShape);
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
}), Na = ["id", "disabled"];
function Ua(i, t, e, s, n, r) {
  const o = Nt("font-awesome-icon");
  return y(), C("button", {
    id: i.id,
    class: Ce(["machining-button", { "has-machining": i.hasMachining }]),
    type: "button",
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...l) => i.openMachining && i.openMachining(...l))
  }, [
    ye(o, { icon: ["fass", "hammer"] })
  ], 10, Na);
}
const ja = /* @__PURE__ */ ni(Wa, [["render", Ua]]), za = { id: "uploader" }, Va = {
  key: 0,
  class: "debug"
}, Ya = {
  key: 1,
  class: "selected-files"
}, Xa = ["src"], Ka = ["onClick"], Za = !0, Ja = /* @__PURE__ */ Me({
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
    const e = Tt(() => Promise.resolve().then(() => Zi)), s = H(null), n = H({
      shapeId: "",
      files: [],
      previewUrls: [],
      metadata: []
    }), r = i, o = t, l = (h) => ["image/jpeg", "image/jpg", "image/png"].includes(h.type), a = () => {
      var h;
      (h = s.value) == null || h.click();
    }, u = (h) => {
      const m = h.target, w = m.files;
      if (!w) return;
      const R = Array.from(w), N = R.filter((v) => !l(v));
      if (N.length > 0) {
        const v = N.map((D) => D.name).join(", ");
        alert(`Invalid file type(s): ${v}
Only JPG and PNG files are allowed.`), m.value = "";
        return;
      }
      const ee = n.value.files || [];
      if (ee.length + R.length > r.maxImages) {
        alert(`Maximum ${r.maxImages} images allowed per shape.`), m.value = "";
        return;
      }
      const Z = [...ee, ...R], he = f(Z), _ = Z.map((v, D) => ({
        originalName: v.name,
        newName: `${r.prefix}-${D + 1}-${r.uniqueId}${p(v.name)}`
      })), J = {
        shapeId: r.shapeId,
        files: Z,
        previewUrls: he,
        metadata: _
      };
      n.value = J, o("update", J), m.value = "";
    }, f = (h) => h.map((m) => URL.createObjectURL(m)), p = (h) => h.substring(h.lastIndexOf(".")), I = (h) => {
      URL.revokeObjectURL(n.value.previewUrls[h]);
      const m = [...n.value.files], w = [...n.value.previewUrls], R = [...n.value.metadata];
      if (m.splice(h, 1), w.splice(h, 1), R.splice(h, 1), m.length === 0)
        n.value = {
          shapeId: r.shapeId,
          files: [],
          previewUrls: [],
          metadata: []
        }, o("remove", r.shapeId);
      else {
        const N = {
          shapeId: r.shapeId,
          files: m,
          previewUrls: w,
          metadata: R
        };
        n.value = N, o("update", N);
      }
    };
    return Er(() => {
      var h;
      (h = n.value) != null && h.previewUrls && n.value.previewUrls.forEach((m) => URL.revokeObjectURL(m));
    }), pt(() => {
      n.value.shapeId = r.shapeId;
      const h = r.images.find((m) => m.shapeId === r.shapeId);
      if (h) {
        const m = f(h.files);
        n.value = {
          ...h,
          previewUrls: m
        };
      }
    }), (h, m) => {
      var R;
      const w = Nt("font-awesome-icon");
      return y(), C("div", za, [
        i.env === "development" && Za ? (y(), C("div", Va, [
          ye(k(e), {
            data: [n.value],
            paths: ["imageData"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        T("input", {
          ref_key: "fileInput",
          ref: s,
          type: "file",
          accept: ".jpg,.jpeg,.png",
          class: "hidden",
          multiple: "",
          onChange: u
        }, null, 544),
        T("button", {
          type: "button",
          class: "upload-button",
          onClick: a
        }, [
          ye(w, { icon: ["fass", "files"] })
        ]),
        (R = n.value.files) != null && R.length ? (y(), C("div", Ya, [
          (y(!0), C(xe, null, Ee(n.value.files, (N, ee) => (y(), C("div", {
            key: ee,
            class: "selected-file"
          }, [
            T("img", {
              src: n.value.previewUrls[ee],
              alt: "Preview"
            }, null, 8, Xa),
            T("button", {
              class: "remove-file",
              type: "button",
              onClick: (X) => I(ee)
            }, [
              ye(w, { icon: ["fass", "trash"] })
            ], 8, Ka)
          ]))), 128))
        ])) : G("", !0)
      ]);
    };
  }
}), Qa = /* @__PURE__ */ ni(Ja, [["__scopeId", "data-v-0836e586"]]);
function eu(i) {
  var l, a;
  const t = i.x, e = i.x + i.l, s = nt().domain([t, e]).range([this.scales.xPositionScale(t), this.scales.xPositionScale(e)]), n = i.y, r = i.y + i.w, o = nt().domain([n, r]).range([this.scales.yPositionScale(n), this.scales.yPositionScale(r)]);
  this.axes.shapeXAxis ? this.axes.shapeXAxis.call(_i(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeXAxis = this.selections.axisGroup.append("g").attr("transform", `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`).attr("class", "axis shape x").call(_i(s).tickValues(s.domain()).tickSize(4).tickFormat(this.formatNumber)), ((a = (l = i == null ? void 0 : i.stock) == null ? void 0 : l.saw) == null ? void 0 : a.stockType) !== "linear" ? this.axes.shapeYAxis ? this.axes.shapeYAxis.call(qi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis = this.selections.axisGroup.append("g").attr("transform", `translate(${this.state.padding - this.state.axisSpacing}, 0)`).attr("class", "axis shape y").call(qi(o).tickValues(o.domain()).tickSize(4).tickFormat(this.formatNumber)) : this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function tu() {
  if (this.state.device !== "desktop" || !this.settings.main) return;
  this.axes.xAxis.attr("transform", `translate(0, ${this.state.padding})`).call((t) => {
    t.transition().duration(0).call(wn(this.scales.xScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dy", -5);
  });
  const i = this.requiresStretch(this.props.stock.value);
  (!i || i && this.state.stretched) && this.axes.yAxis.attr("transform", `translate(${this.state.w - this.state.padding}, 0)`).call((t) => {
    t.transition().duration(0).call(Sn(this.scales.yAxisScale).ticks(5).tickSize(5)), t.selectAll("text").attr("dx", 5);
  });
}
function Yn(i, t, e) {
  !e || !(i != null && i.length) || i.forEach((s, n) => {
    const [r, o] = s;
    e === "x" ? iu.call(this, r, o, t[n]) : su.call(this, r, o, t[n]);
  });
}
function iu(i, t, e) {
  const s = nt().domain([i, t]).range([
    this.scales.xPositionScale(i),
    this.scales.xPositionScale(t)
  ]), n = Xn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(0, ${this.state.h - this.state.padding + this.state.axisSpacing})`
  ).attr("class", "axis measurement x").call(_i(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  r.selectAll("text").attr("x", 0).attr("y", 0).attr("dy", (o, l, a) => {
    var u, f;
    return ((f = (u = a[l]) == null ? void 0 : u.getBBox()) == null ? void 0 : f.height) + 10;
  }), this.axes.cutMeasurementXAxes.push(r);
}
function su(i, t, e) {
  const s = nt().domain([i, t]).range([
    this.scales.yPositionScale(i),
    this.scales.yPositionScale(t)
  ]), n = Xn(s.domain()), r = this.selections.axisGroup.append("g").attr(
    "transform",
    `translate(${this.state.padding - this.state.axisSpacing}, 0)`
  ).attr("class", "axis measurement y").call(qi(s).tickValues([n]).tickSize(4).tickFormat(() => this.formatNumber(e)));
  nu(r), this.axes.cutMeasurementYAxes.push(r);
}
function Xn(i) {
  return (i[1] - i[0]) / 2 + i[0];
}
function nu(i) {
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
function mi() {
  this.axes.shapeXAxis && (this.axes.shapeXAxis.remove(), this.axes.shapeXAxis = null), this.axes.shapeYAxis && (this.axes.shapeYAxis.remove(), this.axes.shapeYAxis = null);
}
function ru() {
  this.axes.xAxis && this.axes.xAxis.remove(), this.axes.yAxis && this.axes.yAxis.remove();
}
function Ki() {
  var i, t;
  (i = this.axes.cutMeasurementXAxes) != null && i.length && (this.axes.cutMeasurementXAxes.forEach((e) => e.remove()), this.axes.cutMeasurementXAxes.length = 0), (t = this.axes.cutMeasurementYAxes) != null && t.length && (this.axes.cutMeasurementYAxes.forEach((e) => e.remove()), this.axes.cutMeasurementYAxes.length = 0);
}
function ou() {
  this.selections.shapeIDText = this.selections.shapeWrappers.selectAll("text.shape-text.id").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text id").text((t) => Js.call(this, t)).classed("hidden", (t, e, s) => this.isTextHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1),
    (i) => i.text((t) => Js.call(this, t)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("dy", 1)
  ), this.selections.shapeNameText = this.selections.shapeWrappers.selectAll("text.shape-text.name").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text name").text((t) => Qs.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, e, s) => this.isNameHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    }),
    (i) => i.text((t) => Qs.call(this, t)).call(this.trimNameToFit, this).classed("hidden", (t, e, s) => this.isNameHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const n = s[e];
      return this.getRectangleCoordinate(
        t,
        "y",
        "bottom",
        -(n.getBBox().height / 2 + 1)
      );
    })
  ), this.selections.shapeLengthText = this.selections.shapeWrappers.selectAll("text.shape-text.length").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text length").text((t) => en.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    }),
    (i) => i.text((t) => en.call(this, t)).classed("hidden", (t, e, s) => this.isLengthHidden(t, e, s)).attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t, e, s) => {
      const r = s[e].getBBox().height;
      return this.getRectangleCoordinate(t, "y", "top", -(r / 2 + 2));
    })
  ), this.selections.shapeWidthText = this.selections.shapeWrappers.selectAll("text.shape-text.width").data((i) => [i]).join(
    (i) => i.append("text").attr("class", "shape-text width").text((t) => tn.call(this, t)).classed("hidden", (t, e, s) => this.isWidthHidden(t, e, s)).attr("dominant-baseline", "middle").attr("fill", this.config.colors.text.toString()).attr("transform", (t, e, s) => {
      const n = s[e], r = this.getRectangleCoordinate(
        t,
        "x",
        "left",
        -(n.getBBox().height / 2 + 2)
      ), o = this.getRectangleCoordinate(t, "y", "center"), l = this.state.device === "mobile" ? 90 : -90;
      return `translate(${r},${o}) rotate(${l})`;
    }),
    (i) => i.text((t) => tn.call(this, t)).classed("hidden", (t, e, s) => this.isWidthHidden(t, e, s)).attr("transform", (t, e, s) => {
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
function Js(i) {
  var t, e;
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        {
          const s = i.guillotineData.myStripDirection, n = i.addedAsGroup;
          let r = "";
          if (s === "l" ? r = `→ ${i.id}` : s === "w" && (r = `↑ ${i.id}`), (e = i == null ? void 0 : i.priority) != null && e[(t = i == null ? void 0 : i.stock) == null ? void 0 : t.parentID] && (r += "P"), n && (r += "G"), r.length) return r;
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
function Qs(i) {
  return !(i != null && i.name) || typeof (i == null ? void 0 : i.name) != "string" ? null : i.name.toUpperCase().trim();
}
function en(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : S({ v: i.l, o: this.numberConfig }).toString();
}
function tn(i) {
  return this.state.env === "development" && this.state.debug === "guillotine" ? "" : S({ v: i.w, o: this.numberConfig }).toString();
}
function lu(i) {
  if (!this.props.stock || !i || !this.settings.main) return !1;
  let t;
  if (!i.willItFit(this.props.stock.value, i.rot)) return !1;
  const e = fl(
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
        u.attr("class", "ray").attr("x1", (f) => this.scales.xPositionScale(f.x1)).attr("x2", (f) => this.scales.xPositionScale(f.x2)).attr("y1", (f) => this.scales.yPositionScale(f.y1)).attr("y2", (f) => this.scales.yPositionScale(f.y2));
      };
      if (this.state.env !== "development") return;
      const a = Mn(this.props.shapes.value, this.props.stock.value).flatMap((u) => Object.values(u.rays));
      this.selections.ghostShapeGroup.selectAll("line").data(a, r).join(
        (u) => u.append("line").call((f) => o.call(this, f)),
        (u) => u.call((f) => o.call(this, f)),
        (u) => u.remove()
      );
    }
    s = pl(
      this.props.stock.value,
      this.props.shapes.value
    );
  }
  const n = new Ut();
  for (const r of e.toArray()) {
    const o = Rn(i, r, this.props.stock.value);
    o && n.addPoints(o.toArray());
  }
  if (s) {
    const r = s.toArray();
    for (const o of r) {
      const l = hl(i, o, this.props.stock.value);
      l && n.addPoints(l.toArray());
    }
  }
  this.props.stock.value.cutType === "efficiency" ? ([
    new Fe(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Fe(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0)),
    new Fe(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      0 + (this.props.stock.value.trim.y1 ?? 0)
    ),
    new Fe(
      0 + (this.props.stock.value.trim.x1 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    ),
    new Fe(
      this.props.stock.value.l - i.l - (this.props.stock.value.trim.x2 ?? 0),
      this.props.stock.value.w - i.w - (this.props.stock.value.trim.y2 ?? 0)
    )
  ].forEach((r) => n.addPoint(r)), t = n.toArray()) : (n.addPoint(new Fe(0 + (this.props.stock.value.trim.x1 ?? 0), 0 + (this.props.stock.value.trim.y1 ?? 0))), t = n.toArray());
  for (let r = t.length; r--; ) {
    const o = t[r];
    i.x = o.x, i.y = o.y;
    for (const l of this.props.shapes.value)
      if (this.collision(i, l, this.props.stock.value)) {
        t.splice(r, 1);
        break;
      }
  }
  return au.call(this, t, i), uu.call(this, t, i), !!(t != null && t.length);
}
function au(i, t) {
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
      n.stopPropagation(), _e(this).classed("hover", !0), _e(this).raise();
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), _e(this).classed("hover", !1);
    },
    {
      passive: !0
    }
  );
}
function uu(i, t) {
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
      n.stopPropagation(), _e(this).classed("hover", !0);
      const r = _e(this).attr("data-id"), o = _e(`.ghost[data-id="${r}"]`);
      o.raise(), o.classed("highlight", !0);
    },
    {
      passive: !0
    }
  ).on(
    "mouseout",
    function(n) {
      n.stopPropagation(), _e(this).classed("hover", !1);
      const r = _e(this).attr("data-id");
      _e(`.ghost[data-id="${r}"]`).classed(
        "highlight",
        !1
      );
    },
    {
      passive: !0
    }
  );
}
const cu = (i) => i.id;
function hu() {
  if (!this.props.containerWidth) return;
  mi.call(this);
  const i = this.props.shapes.value.reduce((t, e) => {
    const s = parseInt(e.parentID);
    return s > t ? s : t;
  }, 0);
  this.scales.shapeColorScale.domain([1, i]), this.state.env === "development" && fu.call(this), du.call(this);
}
function du() {
  return this.selections.shapeWrappers = this.selections.shapeGroup.selectAll("g.shape-group").data(this.props.shapes.value, cu).join(
    (i) => {
      const t = i.append("g").attr("class", "shape-group");
      return sn.call(this, t), nn.call(this, t), t.on("mousedown", rn.bind(this)), t;
    },
    (i) => (sn.call(this, i), nn.call(this, i), i.on("mousedown", rn.bind(this)), i),
    (i) => i.remove()
  ), wu.call(this, this.props.shapes.value), this.settings.main && requestAnimationFrame(() => ou.call(this)), this.selections.shapeWrappers.size() > 0;
}
function fu() {
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
  this.scales.scoreColorScale = hi([Ht(251, 224, 255), Ht(122, 0, 138)]).domain([e, s]);
}
function sn(i) {
  const t = i.selectAll("rect.shape").data((e) => [e]).join("rect").attr("class", "shape").attr("x", (e) => this.getRectangleCoordinate(e, "x")).attr("y", (e) => this.getRectangleCoordinate(e, "y")).attr("width", (e) => this.getWidthAttribute(e)).attr("height", (e) => this.getHeightAttribute(e)).style("fill", (e) => {
    var s;
    return (s = vi.call(this, e)) == null ? void 0 : s.toString();
  });
  this.selections.shapeRectangles ? this.selections.shapeRectangles = xn(
    this.selections.shapeRectangles.nodes().concat(t.nodes())
  ) : this.selections.shapeRectangles = t;
}
function pu(i) {
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
function nn(i) {
  !this.settings.main || this.settings.app || this.state.hasTouch || i.on("mouseover", (t) => {
    if (this != null && this.props.moveMode && this.state.moving) return;
    const e = _e(t.target);
    e.classed("hover", !0), e.classed("selected") || e.style("fill", this.config.colors.partHover.toString());
  }, { passive: !0 }).on("mouseout", (t, e) => {
    var n;
    const s = _e(t.target);
    s.classed("hover", !1), s.classed("selected") || s.style("fill", (n = vi.call(this, e)) == null ? void 0 : n.toString());
  }, { passive: !0 });
}
function rn(i, t) {
  if (this.state.moving || !this.settings.main) return !1;
  this.state.env === "development" && gu.call(this, i, t), (this.settings.app || this.settings.embed) && yu.call(this, i, t), this.state.device === "desktop" && (Ki.call(this), eu.call(this, t)), this.props.moveMode.value ? this.callbacks.onAddToPartsBin(t) : this.findShape.call(this, t.id);
}
function gu(i, t) {
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
        ], vu.call(this, t);
        break;
      case "groups":
        e = ["id", "addedAsGroup"];
        break;
      case "score":
        e = ["id", "bestScore.score"];
        break;
      default:
        e = ["id", "placementOrder", "priority", "addedAsGroup", "bestScore.score", "upDirection"];
    }
    console.table(mu(t, e)), console.log(t.bestScore.score);
  }
}
function mu(i, t) {
  return t.reduce((e, s) => {
    const n = Mu(i, s);
    return e[s] = Array.isArray(n) ? n.join(", ") : n, e;
  }, {});
}
function vu(i) {
  var s, n, r;
  this.selections.shapeWrappers.selectAll(".highlight-a").classed("highlight-a", !1), this.selections.shapeWrappers.selectAll(".highlight-b").classed("highlight-b", !1), this.selections.shapeWrappers.selectAll(".highlight-c").classed("highlight-c", !1);
  const t = (s = i.guillotineData) == null ? void 0 : s.myStripParent;
  t && this.selections.shapeWrappers.filter((l) => l.id === t || l.addedAsGroup === t).select("rect").classed("highlight-a", !0);
  const e = (r = (n = this.props.shapes.value.find((o) => o.id === t)) == null ? void 0 : n.guillotineData) == null ? void 0 : r.myStripParent;
  e && this.selections.shapeWrappers.filter((l) => l.id === e || l.addedAsGroup === t).select("rect").classed("highlight-b", !0);
}
function yu(i, t) {
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
    color: (r = vi.call(this, t)) == null ? void 0 : r.toString(),
    notes: t == null ? void 0 : t.notes
  };
  this.state.env === "development" && console.log(e);
  const s = new CustomEvent("partClick", {
    detail: e
  });
  if (this.selections.htmlEl.dispatchEvent(s), this.settings.app) return !1;
}
function vi(i) {
  var t;
  if (this.state.env === "development")
    switch (this.state.debug) {
      case "guillotine":
        if (i.addedAsGroup)
          return Ht(43, 156, 16);
        if (i.guillotineData.firstShape)
          return Ht(255, 171, 231);
        if (typeof i.guillotineData.myPhase == "number") {
          const e = [0, 115, 255], s = [176, 255, 231];
          return `rgb(${e.map((r, o) => Math.round(r + i.guillotineData.myPhase / 5 * (s[o] - r))).join(",")})`;
        }
        break;
      case "groups":
        if (i.addedAsGroup !== !1)
          return Ht(43, 156, 16);
        break;
      case "priorityShapes":
        if (i != null && i.priority && ((t = i.priority) != null && t[i.stock.parentID]))
          return Ht(139, 171, 46);
        break;
      case "score":
        return this.scales.scoreColorScale(i.bestScore.total);
    }
  return this.scales.shapeColorScale(parseInt(i.parentID));
}
function bu(i) {
  const t = [];
  for (const e of i)
    if (e.added && (e != null && e._banding))
      for (const [s, n] of Object.entries(e._banding)) {
        if (!n || ["a", "b", "c", "d"].includes(s)) continue;
        let r = s;
        e.rot && (r = pu.call(this, s));
        const o = Su.call(this, e, r);
        o && t.push(o);
      }
  return t;
}
function on(i) {
  return i.attr("class", "banding").attr("x1", (t) => this.scales.xPositionScale(t.x1) + Oi.call(this, t.type, "x")).attr("x2", (t) => this.scales.xPositionScale(t.x2) + Oi.call(this, t.type, "x")).attr("y1", (t) => this.scales.yPositionScale(t.y1) + Oi.call(this, t.type, "y")).attr("y2", (t) => this.scales.yPositionScale(t.y2) + Oi.call(this, t.type, "y")).attr("stroke-width", 2).attr("stroke", "white");
}
function wu(i) {
  if (!this.settings.main) return;
  const t = bu.call(this, i);
  if (t.length === 0) {
    this.selections.bandingGroup.selectAll("line").remove(), this.selections.bandingWrappers = null;
    return;
  }
  this.selections.bandingWrappers = this.selections.bandingGroup.selectAll("line").data(t, (e, s) => s).join(
    (e) => e.append("line").call((s) => on.call(this, s)),
    (e) => e.call((s) => on.call(this, s)),
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
function Su(i, t) {
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
function xu(i) {
  this.selections.shapeWrappers.style("visibility", (t) => (t == null ? void 0 : t.placementOrder) >= i ? "hidden" : "visible");
}
const ln = (i) => i.id;
function an(i) {
  return i.style("fill", this.config.colors.stock).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function un(i) {
  return i.style("fill", "url(#stripes)").attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t)).attr("x", this.state.padding).attr("y", this.state.padding);
}
function ku() {
  if (!this.props.stock.value || !this.props.stock.value.w || !this.props.stock.value.l || !this.props.containerWidth.value)
    return !1;
  this.setAspectRatio(), tu.call(this), this.selections.stockGroup.selectAll("rect.background.stock").data([this.props.stock.value], ln).join(
    (i) => i.append("rect").attr("class", "background stock").call((t) => an.call(this, t)),
    (i) => i.call((t) => an.call(this, t)),
    (i) => i.remove()
  ), this.selections.stockRectangle = this.selections.stockGroup.selectAll("rect.stock-pattern").data([this.props.stock.value], ln).join(
    (i) => i.append("rect").attr("class", "stock-pattern").call((t) => un.call(this, t)),
    (i) => i.call((t) => un.call(this, t)),
    (i) => i.remove()
  );
}
function Kn(i) {
  return i.id;
}
function cn({ parent: i, near: t, far: e }) {
  if (!this.props.containerWidth)
    return !1;
  const s = [i, t, e].filter((n) => n);
  this.selections.segmentRectangles = this.selections.segmentGroup.selectAll("rect").data(s, Kn).join(
    (n) => n.append("rect").attr("class", "segment").call((r) => hn.call(this, r)),
    (n) => n.call((r) => hn.call(this, r)),
    (n) => n.remove()
  ), this.state.env === "development" && Cu.call(this, s), !this.settings.app && this.state.env === "development" && Lu.call(this);
}
function hn(i) {
  return i.classed("offcut", (t) => t.offcut).classed("near", (t) => t.segmentType === "near").classed("far", (t) => t.segmentType === "far").classed("parent", (t, e) => t.id !== "root" && e === 0).attr("x", (t) => this.getRectangleCoordinate(t, "x")).attr("y", (t) => this.getRectangleCoordinate(t, "y")).attr("width", (t) => this.getWidthAttribute(t)).attr("height", (t) => this.getHeightAttribute(t));
}
function Cu(i) {
  this.selections.segmentGroup.selectAll("text").data(i, Kn).join(
    (t) => t.append("text").attr("class", "segment-text").call((e) => dn.call(this, e)),
    (t) => t.call((e) => dn.call(this, e)),
    (t) => t.remove()
  );
}
function dn(i) {
  return i.attr("x", (t) => this.getRectangleCoordinate(t, "x", "center")).attr("y", (t) => this.getRectangleCoordinate(t, "y", "center")).attr("text-anchor", "middle").text((t) => Iu.call(this, t)).attr("dominant-baseline", "middle");
}
function Iu(i) {
  if (this.state.env !== "development" || !i || i != null && i.offcut) return null;
  const t = i.cutDirection === "l" ? "→" : "↑";
  return this.state.env === "development" ? `${t} ${i.id}` : t;
}
function Lu() {
  this.selections.segmentRectangles.on("mousedown", function(i, t) {
    console.log("segment", `[${(t == null ? void 0 : t.parentID) || "-"}]->[${t.id}] {P${t.phase}} ${t.l}x${t.w} ${t.cutDirection} ${t.hasHeadCut ? "HEAD" : "NORM"}`);
  });
}
function Zn(i) {
  var n;
  const t = (n = i == null ? void 0 : i.guillotineData) == null ? void 0 : n.parentSegmentID;
  if (!this.props.segments.value.length) return !1;
  let e;
  if (t ? e = this.props.segments.value.find((r) => r.id === t) : e = this.props.segments.value.find((r) => r.segmentType === "root"), e === void 0) return !1;
  const s = e == null ? void 0 : e.children;
  return s != null && s.length ? {
    parent: e,
    children: s
  } : !1;
}
const { currentCutIndex: Jn } = gs();
function Du() {
  this.props.containerWidth && (this.selections.cutLabelGroup && this.selections.cutLabelGroup.remove(), this.selections.cutLines = this.selections.cutGroup.selectAll("line").data(this.props.cuts.value, (i, t) => t).join(
    (i) => i.append("line").attr("class", "cut").call((t) => fn.call(this, t)),
    (i) => i.call((t) => fn.call(this, t)),
    (i) => i.remove()
  ), this.selections.cutLabelGroup = this.selections.cutGroup.append("g").attr("class", "label-group"), this.selections.cutLabelGroup.selectAll("*").remove(), this.selections.cutBackgrounds = this.selections.cutLabelGroup.selectAll("circle.label-background").data(this.props.cuts.value, (i, t) => t).join(
    (i) => i.append("circle").attr("class", "label-background").call((t) => pn.call(this, t)),
    (i) => i.call((t) => pn.call(this, t)),
    (i) => i.remove()
  ), this.selections.cutLabels = this.selections.cutLabelGroup.selectAll("text.cut-label").data(this.props.cuts.value, (i, t) => t).join(
    (i) => i.append("text").attr("class", "cut-label").call((t) => gn.call(this, t)),
    (i) => i.call((t) => gn.call(this, t)),
    (i) => i.remove()
  ), tr.call(this));
}
function fn(i) {
  return i.attr("stroke-width", (t) => {
    const e = this.scales.measurementScale(this.getBladeWidth(t.stock));
    return e < 1 ? 1 : Math.ceil(e);
  }).attr("x1", (t) => this.scales.xPositionScale(t.getVisCoords("x1"))).attr("x2", (t) => this.scales.xPositionScale(t.getVisCoords("x2"))).attr("y1", (t) => this.scales.yPositionScale(t.getVisCoords("y1"))).attr("y2", (t) => this.scales.yPositionScale(t.getVisCoords("y2"))).classed("trim", (t) => t.isTrim).classed("head", (t) => t.isHead);
}
function pn(i) {
  return i.attr("cx", (t) => {
    const e = this.scales.xPositionScale(t.getVisCoords("x1")), s = this.scales.xPositionScale(t.getVisCoords("x2"));
    return e + (s - e) / 2;
  }).attr("cy", (t) => {
    const e = this.scales.yPositionScale(t.getVisCoords("y1")), s = this.scales.yPositionScale(t.getVisCoords("y2"));
    return e + (s - e) / 2;
  }).attr("r", 8).attr("fill", "black");
}
function gn(i) {
  return i.attr("x", (t) => {
    const e = this.scales.xPositionScale(t.getVisCoords("x1")), s = this.scales.xPositionScale(t.getVisCoords("x2"));
    return e + (s - e) / 2;
  }).attr("y", (t) => {
    const e = this.scales.yPositionScale(t.getVisCoords("y1")), s = this.scales.yPositionScale(t.getVisCoords("y2"));
    return e + (s - e) / 2 - 0.5;
  }).attr("text-anchor", "middle").attr("dominant-baseline", "central").attr("fill", "white").attr("dy", "0.1em").text((t) => {
    var e;
    return typeof ((e = t.guillotineData) == null ? void 0 : e.order) == "number" ? t.guillotineData.order + 1 : "-";
  });
}
function Qn(i, t, e) {
  return i.guillotineData.parentSegmentID === t && e && i.guillotineData.segmentCutOrder < e;
}
function er(i, t) {
  var e;
  return ((e = i.guillotineData) == null ? void 0 : e.parentSegmentID) !== null && !(i != null && i.isTrim) ? i.guillotineData.parentSegmentID === t : !1;
}
function Pu(i, t, e, s) {
  this.selections.cutLines.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] || !s && r.guillotineData.parentSegmentID === t ? "visible" : "hidden"), Jn.value !== null && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (r) => typeof i.guillotineData[e] == "number" && r.guillotineData[e] <= i.guillotineData[e] ? "visible" : "hidden")), this.selections.cutLines.classed("highlight", (r) => i.stock.cutType === "guillotine" && r.isTrim ? r.type === i.type : r.guillotineData[e] === i.guillotineData[e]), this.selections.cutLines.classed("ptx-dummy", (r) => {
    var o;
    return (o = r == null ? void 0 : r.ptxData) == null ? void 0 : o.isDummy;
  }), s || $u.call(this, i, t);
}
function Tu(i, t, e, s, n) {
  this.selections.cutLines.style("visibility", (o, l) => l <= t ? "visible" : "hidden"), this.state.env === "development" && this.selections.cutLabels && (this.selections.cutLabels.style("visibility", (o, l) => l <= t ? "visible" : "hidden"), this.selections.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", (o, l) => l <= t ? "visible" : "hidden"));
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
    this.state.device === "desktop" && !i.isTrim && Yn.call(this, r, o, s);
  }
  this.selections.cutLines.classed("highlight", (o, l) => l === t);
}
function tr() {
  var i, t;
  this.selections.cutLines.style("visibility", "visible").classed("highlight", !1).classed("completed", !1).classed("inside-segment", !1).classed("ptx-dummy", !1), (i = this.selections) != null && i.cutLabels && this.selections.cutLabels.style("visibility", "hidden"), (t = this.selections) != null && t.cutBackgrounds && this.selections.cutBackgrounds.style("visibility", "hidden"), this.selections.cutLines.attr("stroke-width", (e) => {
    const s = this.scales.measurementScale(this.getBladeWidth(e.stock));
    return Math.max(1, Math.ceil(s));
  }), mi.call(this), Ki.call(this);
}
function $u(i, t) {
  var p, I, h, m;
  const e = (p = i == null ? void 0 : i.guillotineData) == null ? void 0 : p.segmentCutOrder;
  if (e == null) return;
  this.selections.cutLines.classed("completed", (w) => Qn(w, t, e)), this.selections.cutLines.classed("inside-segment", (w) => er(w, t));
  const s = Zn.call(this, i);
  if (s === !1) return;
  const { parent: n, children: r } = s, { near: o } = ir(i, r);
  if (!o) return;
  let l = [], a;
  const u = this.getHalfBladeWidth(i.stock), f = i.dimension === "l" ? "y" : "x";
  (i == null ? void 0 : i.dimension) === "l" ? (l = [
    [
      o.y,
      o.y + o.w
    ],
    [
      i.y1 + u,
      n.y + n.w
    ]
  ], a = [(I = i == null ? void 0 : i.distances) == null ? void 0 : I.bottom, i == null ? void 0 : i.distances.top]) : (i == null ? void 0 : i.dimension) === "w" && (l = [
    [
      o.x,
      o.x + o.l
    ],
    [
      i.x1 + u,
      n.x + n.l
    ]
  ], a = [(h = i == null ? void 0 : i.distances) == null ? void 0 : h.left, (m = i == null ? void 0 : i.distances) == null ? void 0 : m.right]), this.state.device === "desktop" && !i.isTrim && a && Yn.call(this, l, a, f);
}
function Ou(i = null, t = "") {
  var h, m, w, R;
  if (i === null || this.selections.cutLines.empty()) return;
  if (this.props.stock.value.saw.cutType === "guillotine") {
    const N = this.props.cuts.value.filter((ee) => ee.isTrim);
    i = i + N.length, i - N.length >= this.props.cuts.value.length - N.length && (Jn.value = this.props.cuts.value.length - N.length - 1);
  }
  const e = this.props.cuts.value[i];
  if (!e) return;
  if (mi.call(this), Ki.call(this), i !== null && i >= 0 && i < this.selections.cutLines.size()) {
    const N = this.selections.cutLines.nodes()[i].parentElement;
    if (!N) return;
    _e(N).raise();
  }
  const s = (h = e.guillotineData) == null ? void 0 : h.parentSegmentID, n = this.getHalfBladeWidth(e.stock), r = e.dimension === "l" ? "y" : "x", o = (m = e == null ? void 0 : e.stock) == null ? void 0 : m.trim, l = t === "ptx" ? "ptxOrder" : "order";
  if (["guillotine", "beam"].includes((w = e == null ? void 0 : e.stock) == null ? void 0 : w.cutType) && s !== null && typeof s < "u" ? Pu.call(this, e, s, l, t) : Tu.call(this, e, i, o, r, n), Au.call(this, e, i, s), t === "ptx") {
    this.removeSegments();
    return;
  }
  const a = Zn.call(this, e);
  if (a === !1) return;
  const { parent: u, children: f } = a;
  if (!((R = e == null ? void 0 : e.guillotineData) != null && R.parentSegmentID))
    return cn.call(this, { parent: u });
  const { near: p, far: I } = ir(e, f);
  cn.call(this, { parent: u, near: p, far: I });
}
function ir(i, t) {
  const e = i.dimension === "l" ? "y" : "x", s = i.dimension === "l" ? "w" : "l", n = t.find((o) => o.segmentType === "near" && o[e] + o[s] === i[e + "1"] - i.halfBladeWidth()), r = t.find((o) => o.segmentType === "far" && o[e] === i[e + "1"] + i.halfBladeWidth());
  return { near: n, far: r };
}
function Au(i, t, e) {
  this.selections.cutLines.attr("stroke-width", (s, n) => {
    var a;
    const r = this.scales.measurementScale(this.getBladeWidth(s.stock));
    let o = Math.max(1, Math.ceil(r));
    const l = (a = i == null ? void 0 : i.guillotineData) == null ? void 0 : a.segmentCutOrder;
    return (Qn(s, e, l) || er(s, e)) && (o += 1), n === t && Math.ceil(this.scales.measurementScale(this.getBladeWidth(s.stock))) < 5 && (o = 5), o;
  });
}
function Eu(i) {
  return typeof i == "string" && i.length === 6 && !isNaN(+("0x" + i.replace("#", "")));
}
function Mu(i, t) {
  return ei(i, t);
}
class Ru {
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
    c(this, "formatNumber", (t) => S({
      v: t,
      o: this.numberConfig
    }).toString());
    if (this.config = t, this.selections = {}, !t.elementID || (this.selections.el = _e(t.elementID), this.selections.el === null)) return;
    const e = this.selections.el.node();
    e !== null && (this.selections.htmlEl = e, this.scales = {
      xScale: nt(),
      yScale: nt(),
      yPositionScale: nt(),
      xPositionScale: nt(),
      yAxisScale: nt(),
      measurementScale: nt(),
      shapeColorScale: hi(),
      scoreColorScale: hi()
    }, this.axes = {
      cutMeasurementXAxes: [],
      cutMeasurementYAxes: []
    }, this.state = {
      env: "production",
      device: "desktop",
      debug: null,
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
    }, s = (n, r) => Ht("#" + (Eu(n == null ? void 0 : n.replace("#", "")) ? n.replace("#", "") : r.replace("#", "")));
    this.config.colors = Object.fromEntries(
      Object.entries(e).map(([n, r]) => {
        var o;
        return [
          n,
          s((o = t.colors) == null ? void 0 : o[n], r)
        ];
      })
    ), this.scales.shapeColorScale = hi([
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
      this.selections.svgCanvas = _e(t);
    this.selections.axisGroup = this.selections.svgCanvas.append("g").attr("class", "axis-group"), this.axes.xAxis = this.selections.axisGroup.append("g").attr("class", "axis stock x"), this.axes.yAxis = this.selections.axisGroup.append("g").attr("class", "axis stock y"), this.selections.stockGroup = this.selections.svgCanvas.append("g").attr("class", "stock-group"), this.selections.shapeGroup = this.selections.svgCanvas.append("g").attr("class", "shapes"), this.selections.bandingGroup = this.selections.svgCanvas.append("g").attr("class", "banding-group"), this.selections.cutGroup = this.selections.svgCanvas.append("g").attr("class", "cuts"), this.selections.segmentGroup = this.selections.svgCanvas.append("g").attr("class", "segments").attr("display", "none"), this.selections.groupGroup = this.selections.svgCanvas.append("g").attr("class", "groups").attr("display", "none"), this.selections.ghostShapeGroup = this.selections.svgCanvas.append("g").attr("class", "positions"), this.selections.dotGroup = this.selections.svgCanvas.append("g").attr("class", "dots"), this.state.env === "development" && (this.selections.positionGroup = this.selections.svgCanvas.append("g").attr("class", "placements"));
  }
  updateNumberFormat(t, e, s) {
    this.numberConfig && (t && (this.numberConfig.numberFormat = t), e && (this.numberConfig.decimalPlaces = e), s && (this.numberConfig.fractionRoundTo = s));
  }
  trimNameToFit(t, e) {
    function s(n, r, o) {
      const l = o[r], a = _e(l);
      a.text(n.name);
      let u = a.text();
      const f = a.node();
      if (!f) return;
      let p = f.getComputedTextLength();
      const I = this.getWidthAttribute(n) - 20;
      for (; p > I && u.length > 0; )
        u = u.slice(0, -1), a.text(u.length ? u + "..." : ""), p = a.node().getComputedTextLength();
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
    if (!this.props.stock || !this.props.stock.value || !this.selections.htmlEl) return;
    const t = this.props.stock.value, e = this.props.containerWidth.value;
    if (e <= 0) return;
    const s = e - 2 * this.state.padding;
    if (s <= 0) return;
    this.scales.xScale.domain([0, t.l]), this.scales.yScale.domain([0, t.w]), this.scales.yAxisScale.domain(this.settings.flipY ? [0, t.w] : [t.w, 0]), this.scales.xPositionScale.domain([0, t.l]), this.scales.yPositionScale.domain([0, t.w]), this.scales.measurementScale.domain([0, t.l]);
    const n = t.l > 0 ? s * t.w / t.l : 0;
    this.state.w = s + 2 * this.state.padding, this.state.h = n + 2 * this.state.padding;
    const r = t.l > 0 ? t.w / t.l : 0;
    this.state.stretched = !1, this.requiresStretch(t, r) && this.options.enableStretch && (this.state.h = e * 0.15 + this.state.padding * 2, this.state.stretched = !0), this.scales.xScale.range([this.state.padding, this.state.w - this.state.padding]), this.scales.yScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.yAxisScale.range([this.state.padding, this.state.h - this.state.padding]), this.scales.xPositionScale.range(
      this.settings.flipX ? [this.state.w - this.state.padding, this.state.padding] : [this.state.padding, this.state.w - this.state.padding]
    ), this.scales.yPositionScale.range(
      this.settings.flipY ? [this.state.padding, this.state.h - this.state.padding] : [this.state.h - this.state.padding, this.state.padding]
      // Use calculated h
    ), this.scales.measurementScale.range([0, this.state.w - this.state.padding * 2]), this.state.w > 0 && this.state.h > 0 ? (this.selections.el.style("width", this.state.w + "px"), this.selections.el.style("height", this.state.h + "px")) : (this.selections.el.style("width", null), this.selections.el.style("height", null));
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
    this.selections.shapeRectangles.classed("selected", !1), this.selections.shapeRectangles.style("fill", (s) => vi.call(this, s));
    const e = _e(t).select("rect");
    if (e) {
      e.classed("selected", !0), e.style("fill", this.config.colors.partSelected.toString());
      const s = _e(t).datum();
      this.callbacks.onShapeSelect(s);
    }
  }
  //--------------------------------------------------------
  // DRAWING
  //--------------------------------------------------------
  drawShapes() {
    hu.call(this);
  }
  drawStock() {
    ku.call(this);
  }
  drawCuts() {
    Du.call(this);
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
    this.selections.shapeGroup && this.selections.shapeGroup.selectAll("*").remove(), this.selections.bandingGroup && this.selections.bandingGroup.selectAll("*").remove(), mi.call(this);
  }
  removeStock() {
    this.selections.stockGroup && this.selections.stockGroup.selectAll("*").remove(), this.selections.axisGroup && this.selections.axisGroup.selectAll("*").remove(), ru.call(this);
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
    this.selections.shapeGroup && (t ? (this.selections.shapeGroup.attr("display", "block"), this.selections.bandingGroup.attr("display", "block")) : (this.selections.shapeGroup.attr("display", "none"), this.selections.bandingGroup.attr("display", "none")));
  }
  toggleSegments(t = !0) {
    this.selections.segmentGroup && (t ? this.selections.segmentGroup.attr("display", "block") : this.selections.segmentGroup.attr("display", "none"));
  }
  toggleCuts(t = !0) {
    this.selections.cutGroup && (t ? this.selections.cutGroup.attr("display", "block") : this.selections.cutGroup.attr("display", "none"));
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
      const f = this.scales.measurementScale(t.l), p = this.scales.measurementScale(t.w);
      return f < 50 || p < 50;
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
    (t = this == null ? void 0 : this.selections) != null && t.shapeRectangles && this.selections.shapeRectangles.classed("selected", !1).classed("hover", !1).style("fill", (s) => vi.call(this, s)), (e = this == null ? void 0 : this.selections) != null && e.cutLines && this.selections.cutLines.classed("selected", !1).classed("highlight", !1).classed("inside-segment", !1).style("visibility", "visible").attr("stroke-width", (s) => {
      const n = this.scales.measurementScale(this.getBladeWidth(s.stock));
      return n < 1 ? 1 : Math.ceil(n);
    });
  }
  //--------------------------------------------------------
  // EXTERNAL METHODS
  //--------------------------------------------------------
  resetShapeAxes() {
    mi.call(this);
  }
  updateShapeVisibility() {
    xu.call(this);
  }
  drawPositions(t) {
    lu.call(this, t);
  }
  showCut(t) {
    Ou.call(this, t);
  }
  resetCuts() {
    tr.call(this);
  }
}
const Fu = ["id"], _u = /* @__PURE__ */ Me({
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
    const {
      r: s,
      activeStock: n,
      activeShapes: r,
      activeCuts: o,
      activeSegments: l,
      currentCutIndex: a,
      getStock: u,
      getShapes: f,
      getSegments: p,
      getCuts: I
    } = gs(), h = i, m = e, w = (ne) => {
      m("shape-colour-update", ne);
    }, R = (ne) => {
      ne != null && ne.id && m("shape-select", ne.id.toString());
    }, N = (ne) => {
      ne && m("add-to-parts-bin", ne);
    }, ee = (ne, lt) => {
      ne && m("move-shape", ne, lt);
    }, X = H(0), Z = H(0), he = H(null);
    let _, J = H(!1);
    pt(() => ie());
    const v = Q(() => ({
      format: h.numberFormat,
      decimals: h.decimalPlaces
    })), D = Q(() => h.stockId ? u(h.stockId) : n.value), K = Q(() => h.stockId ? f(h.stockId) : r.value), $ = Q(() => h.main ? h.stockId ? I(h.stockId) : o.value : []), U = Q(() => h.main ? h.stockId ? p(h.stockId) : l.value : []);
    Mr(he, (ne) => {
      const lt = ne[0], { width: tt } = lt.contentRect;
      tt > 0 && (X.value = tt);
    }), Rr(
      X,
      (ne) => {
        _ && (ne <= 0 || (_.setDevice(), _.resetShapeAxes(), _.drawAll(), a.value !== null && (_.toggleSegments(!0), _.showCut(a.value))));
      },
      { throttle: 100 }
    );
    let W = !1;
    De(() => D.value, (ne) => {
      ne && (X.value <= 0 || (W = !0, _.setDevice(), _.resetCuts(), _.removeSegments(), _.drawStock(), _.drawShapes(), _.drawCuts(), et(() => {
        W = !1;
      })));
    }, { immediate: !1 }), De(() => K.value, (ne) => {
      W || ne && (X.value <= 0 || (_.setDevice(), _.drawShapes()));
    }, { immediate: !1, deep: !0 }), h.main && (De(() => $.value, () => {
      W || X.value <= 0 || _.drawCuts();
    }, { immediate: !1, deep: !0 }), De(a, () => {
      a.value !== null && (X.value <= 0 || (_.toggleSegments(!0), _.showCut(a.value)));
    }, { immediate: !1 }), De(v, (ne) => {
      _.updateNumberFormat(ne.format, ne.decimals, null);
    }, { immediate: !1 }));
    const ie = () => {
      const ne = {
        // STATIC
        //--------------------------------------------------------
        elementID: `#${h.elementId}`,
        env: "production",
        numberConfig: {
          numberFormat: h.numberFormat,
          decimalPlaces: h.decimalPlaces,
          fractionRoundTo: 0
        },
        colors: h.colors || null,
        //[] check this
        settings: {
          main: h.main,
          app: !1,
          embed: !1,
          flipY: !1,
          flipX: !1
        },
        props: {
          containerHeight: Z,
          containerWidth: X,
          stock: D,
          shapes: K,
          cuts: $,
          segments: U,
          stockList: s.stockList,
          moveMode: h.moveMode
        },
        options: {
          disableClick: h.disableClick,
          enableStretch: h.enableStretch
        },
        // EVENTS
        //--------------------------------------------------------
        callbacks: {
          onShapeColourUpdate: w,
          onShapeSelect: R,
          onAddToPartsBin: N,
          onMoveShape: ee
        }
      };
      _ = new Ru(ne), J.value = !0;
    };
    return t({
      loaded: J,
      toggleShapes: (ne = !1) => {
        _ && _.toggleShapes(ne);
      },
      toggleCuts: (ne = !1) => {
        _ && _.toggleCuts(ne);
      },
      toggleSegments: (ne = !1) => {
        _ && _.toggleSegments(ne);
      },
      drawShapes: () => {
        _ && _.drawShapes();
      },
      drawStock: () => {
        _ && _.drawStock();
      },
      drawPositions: (ne) => {
        _ && _.drawPositions(ne);
      },
      resetPositions: () => {
        _ && _.removePositions();
      },
      findShape: (ne) => {
        _ && _.findShape(ne);
      },
      clearSelection: () => {
        _ && _.clearSelection();
      },
      resetCuts: () => {
        _ && (_.toggleSegments(!1), _.resetCuts());
      },
      showCut: (ne) => {
        _ && (_.toggleSegments(!0), _.showCut(ne));
      },
      requiresStretch: (ne) => {
        _ && _.requiresStretch(ne);
      }
    }), (ne, lt) => (y(), C("div", {
      id: ne.elementId,
      ref_key: "diagramContainerRef",
      ref: he,
      class: "diagram-container"
    }, null, 8, Fu));
  }
}), qu = {
  key: 0,
  class: "debug"
}, Bu = { key: 2 }, Hu = {
  key: 0,
  class: "row table-heading"
}, Gu = {
  key: 0,
  class: "cell center"
}, Wu = {
  key: 1,
  class: "cell delete"
}, Nu = { class: "cell" }, Uu = ["id", "disabled", "onClick"], ju = {
  key: 0,
  class: "cell center"
}, zu = ["onClick"], Vu = {
  key: 1,
  class: "cell"
}, Yu = ["aria-label", "onClick"], Xu = { class: "button-wrapper main" }, Ku = ["aria-label"], Zu = ["aria-label", "disabled"], Ju = ["aria-label"], Qu = { id: "part-count" }, ec = {
  key: 3,
  id: "messages"
}, tc = {
  key: 0,
  class: "heading"
}, ic = { class: "content" }, sc = {
  key: 4,
  id: "progress"
}, nc = { id: "diagram-wrapper" }, rc = {
  key: 0,
  id: "stack"
}, oc = !1, lc = /* @__PURE__ */ Me({
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
    const s = Tt(() => Promise.resolve().then(() => bc)), n = Tt(() => Promise.resolve().then(() => Sc)), r = Tt(() => Promise.resolve().then(() => Gc)), o = Tt(() => Promise.resolve().then(() => Vc)), l = Tt(() => Promise.resolve().then(() => Zi)), { t: a } = ji(["main", "errors"]), { inputs: u, totalInputShapes: f, getShapeGrainSummary: p, updateNumberFormat: I, validateInputStock: h } = bn(), { r: m, updateFromResult: w, stackedStock: R, uniqueAddedShapes: N, uniqueUsedStock: ee, activeStockId: X, activeStock: Z, setActiveStockId: he } = gs(), { progress: _, reset: J } = Yr(), { addNotice: v } = ps(), { tip: D, update: K, hide: $ } = zr(), U = i, W = e, ie = "production", O = H((navigator == null ? void 0 : navigator.language) || "en-US"), M = Fr(null), V = window.location.hostname, se = H(!1), oe = H(!0), ve = _r("Checkout/currentURL", window.location.href), Ie = us(), Te = H([]), xt = H(!1), E = H(!1), He = H(!1), ri = H(!1), ne = H(!1), lt = H(El()), tt = H(!1), { socket: gt } = Vr({
      refs: {
        connected: se,
        thinking: He
      },
      callbacks: {
        onResult(d) {
          var L, q, j, le, ae;
          const g = d.result;
          if (w(g), !((L = g.shapeList) != null && L.length) || !((q = g.stockList) != null && q.length)) {
            J(), v({
              type: "error",
              message: Ae(a("no_result")),
              additional: [Ae(a("check_inputs"))]
            }), He.value = !1;
            return;
          }
          const b = {
            jobId: d.jobId,
            metadata: m.metadata.value,
            parts: N.value.map((F) => {
              var Y, fe, B;
              return {
                l: F.l,
                w: F.w,
                t: F == null ? void 0 : F.t,
                material: F.material,
                orientationLock: F.orientationLock,
                q: (fe = (Y = m.metadata.value) == null ? void 0 : Y.addedPartTally) == null ? void 0 : fe[F.parentID],
                name: F.name,
                banding: F.banding,
                finish: F.finish,
                customData: F.customData,
                stockId: ((B = F == null ? void 0 : F.stock) == null ? void 0 : B.id) || (F == null ? void 0 : F.stockId)
              };
            }),
            stock: ee.value.map((F) => {
              var Y, fe;
              return {
                id: F.id,
                name: F == null ? void 0 : F.name,
                l: F.l,
                w: F.w,
                t: F == null ? void 0 : F.t,
                material: F.material,
                q: (fe = (Y = m.metadata.value) == null ? void 0 : Y.usedStockTally) == null ? void 0 : fe[F.parentID],
                trim: F == null ? void 0 : F.trim,
                cost: F == null ? void 0 : F.cost,
                analysis: F == null ? void 0 : F.analysis
                // type: s?.type
              };
            }),
            offcuts: m.offcuts.value.map((F) => ({
              l: F.l,
              w: F.w,
              t: (F == null ? void 0 : F.t) ?? null,
              q: F.q,
              stockId: F.stockId
            })),
            inputs: {
              parts: u.inputShapes.value.map((F) => {
                const Y = { ...F };
                return delete Y.listId, Y;
              })
            }
          };
          if ((ae = (le = (j = m == null ? void 0 : m.metadata) == null ? void 0 : j.value) == null ? void 0 : le.unplacedParts) != null && ae.length) {
            const F = m.metadata.value.unplacedParts.map((Y) => Y.id).join();
            v({
              type: "warning",
              message: Ae(a("parts_not_fit")) + ": " + F
            });
          }
          W("result", b), He.value = !1;
        },
        onUser(d) {
          M.value = d;
        },
        onConnectError(d) {
          v({
            type: "error",
            message: Ae(a("cannot_connect")),
            additional: [d]
          });
        },
        onError(d) {
          v({
            type: "error",
            message: Ae(a("error_occurred")),
            additional: [d]
          });
        }
      }
    }), Qe = {
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
      guillotineOptions: {
        headCuts: !1
      },
      bladeWidth: null,
      stockType: null,
      minSpacing: 0,
      stockGrain: null,
      partTrim: 0
    }, A = bt(Qe), $e = bt({
      bladeWidth: 1,
      cutPreference: "l",
      cutType: "guillotine",
      stockType: "sheet",
      stackHeight: 0,
      options: {
        stockSelection: "efficiency",
        minSpacing: 0
      }
    }), Oe = H(null), oi = H(!1), Pe = H(""), mt = H(""), Ne = bt({
      banding: null,
      finish: null,
      info: null,
      imageUpload: null
    }), ze = H([]), Ge = H([]), Rt = H([]), Vt = H(!1), Xe = bt({
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
    }), be = bt({
      labels: [],
      pricing: {},
      options: {},
      keys: St
    }), Re = bt({
      labels: [],
      pricing: {},
      options: {},
      keys: ["a", "b"]
    }), li = bt({
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
    }), Yt = H([]), wi = Q(() => {
      var g;
      return [...[
        {
          id: "material",
          fieldMap: "material",
          label: "material",
          w: "minmax(20px, max-content)",
          type: "select",
          output: "string",
          default: (g = ze.value[0]) == null ? void 0 : g.name,
          options: ze.value.map((b) => ({
            value: b.name,
            label: b.name
          }))
        },
        {
          id: "t",
          fieldMap: "t",
          w: "minmax(20px, max-content)",
          type: "select",
          output: A.numberFormat === "decimal" ? "number" : "string",
          label: "thickness",
          allowZero: !1
        },
        {
          id: "l",
          fieldMap: "l",
          type: "unitDependent",
          label: "length",
          min: (A == null ? void 0 : A.minDimension) ?? 0,
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
          min: (A == null ? void 0 : A.minDimension) ?? 0,
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
      ], ...Yt.value];
    }), kt = Q(() => la(
      li,
      wi.value,
      "parts",
      $e.stockType,
      A.fieldOrder
    )), Ct = Q(() => {
      let d = kt.value.length + 1;
      return u.inputShapes.value.length > 1 && d++, d;
    }), P = Q(() => {
      const d = {
        id: "34px",
        del: "30px"
      }, g = [];
      for (const b of kt.value)
        b.id !== "trim" && g.push(b.w ?? "minmax(20px, 1fr)");
      return g.unshift(d.id), u.inputShapes.value.length > 1 && g.push(d.del), g.join(" ");
    }), z = Q(() => ({
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
    })), ue = Q(() => ({
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "relative",
      visibility: "visible",
      opacity: "1",
      color: "#4e4e4e"
    })), we = Q(() => {
      var d, g;
      return M.value ? !(M.value && ((g = (d = M.value) == null ? void 0 : d.api) != null && g.whiteLabel)) : !0;
    }), Ue = {
      stockType: (d) => {
        const g = ["sheet", "linear", "roll"];
        g.includes(d) || console.warn(`${d} is not a valid stockType, expected ${g.join("|")}`), $e.stockType = d, d === "linear" && ($e.cutType = null, $e.cutPreference = null);
      },
      stockSelection: (d) => {
        const g = ["efficiency", "smallest"];
        d && !g.includes(d) ? console.warn(`${d} is not a valid stockSelection, expected ${g.join("|")}`) : $e.options.stockSelection = d;
      },
      minSpacing: (d) => {
        $e.options.minSpacing = d;
      },
      stackHeight: (d) => {
        $e.stackHeight = d;
      },
      cutPreference: (d) => {
        const g = ["efficiency", "length", "width", "beam"];
        if (g.includes(d)) {
          const { cutType: b, cutPreference: L } = is(d);
          $e.cutType = b, $e.cutPreference = L;
        } else
          console.warn(`SmartCut - cut preference ${d || "N/A"} is not one of ${g.join("|")}`);
      },
      guillotineOptions: (d) => {
        $e.guillotineOptions = d;
      },
      bladeWidth: (d) => {
        d >= 0 ? $e.bladeWidth = d : console.warn(`SmartCut - you provided an incorrect blade width of: ${d}`);
      },
      maxParts: (d) => {
        A.maxParts = d;
      },
      locale: (d) => {
        O.value = d.replace(/_/g, "-");
      },
      enable: (d) => {
        const g = {
          banding: "banding",
          name: "partName",
          finish: "finish",
          orientationLock: "orientation",
          machining: "machining",
          imageUpload: "imageUpload"
        };
        for (const b in Qe.enable)
          b in d && (A.enable[b] = d[b]);
        for (const b in g)
          at(b, qt(d, [g[b]]) ?? Qe.enable[g[b]]);
        ne.value = qt(d, ["csvImport"]) ?? Qe.enable.csvImport;
      },
      colors: (d) => {
        for (const g in Qe.colors)
          g in d && (A.colors[g] = d[g]);
      },
      orientationModel: (d) => {
        if (![0, 1, 2].includes(d)) {
          A.orientationModel = 0;
          return;
        }
        A.orientationModel = d;
      },
      numberFormat: (d) => {
        if (!["decimal", "fraction"].includes(d)) {
          A.numberFormat = "decimal";
          return;
        }
        A.numberFormat = d;
      },
      customFields: (d) => {
        if (!Array.isArray(d) || !(d != null && d.length)) return;
        const g = [];
        d.forEach((b, L) => {
          g.push(b), g[L].custom = !0;
          const q = je(b.id);
          g[L].id = q, g[L].fieldMap = "customData." + q, b.type === "checkbox" && (g[L].w = "32px"), b.type === "select" && (g[L].output = b.output ?? "string", g[L].options = b.options);
        }), Yt.value = g;
        for (const b of u.inputShapes.value)
          b.customData = d.reduce((L, q) => {
            const j = je(q.id);
            return L[j] = b.customData[j] || q.default || "", L;
          }, {});
      }
    }, Ve = (d) => {
      if (U.debug && W("log", ["checkout init...", d]), d != null && d.options) {
        const b = d.options;
        Xl(b), [
          "stockType",
          "cutPreference",
          "bladeWidth"
        ].forEach((j) => {
          j in b || W("error", `${j} is a required option`);
        });
        const q = ["enable", "colors"];
        for (const j in b)
          q.includes(j) || (A[j] = b[j]), j in Ue && Ue[j](b[j]);
      }
      d.colors && "colors" in Ue && Ue.colors(d.colors), Fs("banding", d), Fs("finish", d), de(d), rr(d), E.value = !0, U.debug && W("log", ["init complete"]);
      const g = new CustomEvent("smartcut/initComplete");
      window.dispatchEvent(g), et(() => {
        we.value && !cr() && alert("The SmartCut credit seems to have been tampered with - this is against our terms of service. Please contact support.");
      });
    }, Ft = (d, g) => {
      d && (d.orientationLock = g);
    }, at = (d, g = !1) => {
      ra(li, "parts", $e.stockType, d, g);
    }, je = (d) => d ? zi(d).toLowerCase() : null, it = (d, g, b, L) => {
      if (g.valid) {
        if ($(), b && L) {
          const q = b.issues.findIndex((j) => j.field.some((le) => le.length === L.length && le.every((ae, F) => ae === L[F])));
          q !== -1 && b.issues.splice(q, 1);
        }
      } else
        K({
          referenceEl: d,
          show: !0,
          content: a(`fieldValidation.${g.message}`),
          type: "error"
        });
    }, de = (d) => {
      var g, b, L, q, j;
      if (qt(A, ["enable", "machining"]) && d != null && d.machining) {
        for (const le in Xe)
          d.machining[le] && (Xe[le] = d.machining[le]);
        if (["holes", "hingeHoles"].forEach((le) => {
          var ae, F;
          (ae = d == null ? void 0 : d.machining) != null && ae[le] && (Xe[le].enabled = (F = d == null ? void 0 : d.machining) == null ? void 0 : F[le].enabled);
        }), (L = (b = (g = d == null ? void 0 : d.machining) == null ? void 0 : g.corners) == null ? void 0 : b.types) != null && L.length && (Xe.corners.enabled = !0, Xe.corners.types = d.machining.corners.types), d.banding && ((j = (q = d == null ? void 0 : d.options) == null ? void 0 : q.enable) != null && j.banding)) {
          if (!be) return;
          Xe.banding = {
            enabled: !0
          }, be.options.length && (Xe.banding.options = be.options), be.labels.length && (Xe.banding.labels = be.labels), ii(be.pricing) && (Xe.banding.pricing = be.pricing);
        }
      }
    }, It = (d = null) => {
      Oe.value = d, d && d.l && d.w ? Vt.value = !0 : alert("Please enter dimensions first");
    }, _t = () => {
      Vt.value = !1, document.exitFullscreen && document.exitFullscreen();
    }, Ps = (d = []) => {
      if (Ge.value = [], Rt.value = [], at("t", !1), !!d.length) {
        for (const g of d)
          if (g != null && g.t)
            if (typeof g.t == "string" && g.t.includes(",")) {
              const b = Ts(g.t, !0);
              b.length === 2 ? (or(b), at("t", !0), g.t = Ge.value[0]) : W("error", "bonded thickness found which does not have 2 options");
            } else Ge.value.includes(g.t) || Ge.value.push(g.t);
        Ge.value.length > 1 && at("t", !0);
      }
    }, sr = (d) => {
      var q;
      if (!d) return { thicknesses: [], bondedThicknesses: [] };
      if (!((q = ze.value) != null && q.length))
        return {
          thicknesses: Ge.value,
          bondedThicknesses: []
        };
      if (!d.material) return { thicknesses: [], bondedThicknesses: [] };
      const g = ze.value.find((j) => j.name === d.material);
      if (!g) return { thicknesses: [], bondedThicknesses: [] };
      const b = [...g.thicknesses], L = [];
      for (let j = 0; j < b.length; j++) {
        const le = b[j], ae = Ts(le), F = [];
        if (ae.length) {
          for (const Y of ae)
            b[j] = Y, F.push(j);
          j++;
        }
        F.length && L.push(F);
      }
      return {
        thicknesses: b,
        bondedThicknesses: L
      };
    }, nr = (d) => sr(d).thicknesses.map((b) => ({
      label: b == null ? void 0 : b.toString(),
      value: b
    })), rr = (d) => {
      var g, b;
      if ((g = d == null ? void 0 : d.stock) != null && g.some((L) => L == null ? void 0 : L.material)) {
        ze.value = [], Ge.value = [], Rt.value = [];
        const L = /* @__PURE__ */ new Map();
        for (const q of d.stock) {
          if (!q.material) continue;
          const j = q.material.toUpperCase();
          L.has(j) || L.set(j, /* @__PURE__ */ new Set()), q.t != null && ((b = L.get(j)) == null || b.add(S({ v: q.t })));
        }
        ze.value = Array.from(L.entries()).map(([q, j]) => ({
          name: q,
          thicknesses: Array.from(j).sort((ae, F) => ae - F)
        })), ze.value.length > 1 && at("material", !0);
      } else
        Ps(d.stock);
    }, or = (d, g = null) => {
      if (!Array.isArray(d)) {
        W("error", "addBondedThicknesses expects an array");
        return;
      }
      const b = [];
      for (let L of d)
        A.numberFormat === "decimal" && (L = parseFloat(L)), Ge.value.push(L), g && g.thicknesses.push(L), b.push(Ge.value.length - 1);
      Rt.value.push(b);
    }, Ts = (d, g = !1) => {
      if (typeof d == "string" && d.includes(",")) {
        const b = d.split(",");
        return g ? b.map((L) => S({ v: L })) : b;
      }
      return [];
    }, lr = () => {
      tt.value ? ur() : ar();
    }, ar = () => {
      document.getElementById("smartcut-checkout").requestFullscreen(), tt.value = !0;
    }, ur = () => {
      document.exitFullscreen && document.exitFullscreen(), tt.value = !1;
    }, cr = () => {
      var L, q;
      if ((q = (L = M.value) == null ? void 0 : L.api) != null && q.whiteLabel) return !0;
      let d = !0;
      const g = document.querySelector("#smartcut-app #credit"), b = document.querySelector("#smartcut-app #credit a");
      return [g, b].forEach((j, le) => {
        if (!j) return d = !1;
        const ae = window.getComputedStyle(j);
        if (ae.display === "none" || ae.display === "hidden" || ae.opacity === "0" || ae.color === "transparent" || ae.position !== "relative" || le === 1 && ae.color !== "#4e4e4e" && ae.color !== "rgb(78, 78, 78)")
          return d = !1;
      }), oe.value = d, d;
    }, $s = (d, g, b, L, q) => {
      Ds(
        d,
        g,
        b,
        L,
        q,
        U.findExtrasPrice
      );
    }, Os = (d, g, b, L) => {
      Vn(
        d,
        g,
        b,
        L,
        g === "banding" ? bi : [],
        U.findExtrasPrice
      );
    }, Si = (d, g) => {
      const b = g === "banding" ? be == null ? void 0 : be.labels : Re == null ? void 0 : Re.labels;
      zl(d, g, b);
      const L = Is(g);
      if (d != null && d[L])
        for (const q in d[L]) {
          const j = Ui(d, g, q, U.findExtrasPrice);
          j === !1 && q && d[g][q] && new re({
            item: d,
            field: [[g, q]],
            type: "error",
            message: Ae(a("option_not_available", { x: d[g][q], y: a(g) }))
          }), gi(d, g, q, !!j);
        }
    }, As = (d) => {
      const g = Object.keys(d);
      return Math.max(...g.map((L) => L.split("|").length));
    }, Es = (d) => {
      const g = [], b = Object.keys(d), L = As(d);
      for (let q = L; q--; ) g.push(/* @__PURE__ */ new Set());
      for (const q of b)
        q.split("|").forEach((le, ae) => g[ae].add(le));
      for (let q = 0; q < L; q++)
        g[q] = Array.from(g[q]);
      return g;
    }, xi = (d, g = [], b) => {
      if (!d) return [];
      if (b > 0 && !g[b - 1]) return [];
      const L = /* @__PURE__ */ new Set();
      for (const q of Object.keys(d)) {
        const j = q.split("|");
        if (j.length > b) {
          let le = !0;
          for (let ae = 0; ae < b; ae++)
            if (g[ae] && j[ae] !== g[ae]) {
              le = !1;
              break;
            }
          le && L.add(j[b]);
        }
      }
      return Array.from(L);
    }, ki = (d, g, b) => Ui(
      d,
      g,
      b,
      U.findExtrasPrice
    ), hr = (d) => {
      const g = Te.value.findIndex((b) => b.shapeId === d.shapeId);
      g !== -1 ? Te.value[g] = d : Te.value.push(d), window.smartcutImages = Te.value;
    }, dr = (d) => {
      Te.value = Te.value.filter((g) => g.shapeId !== d), window.smartcutImages = Te.value;
    }, Ms = (d = 1) => {
      for (let g = d; g--; ) {
        let b;
        if (u.inputShapes.value.length > 0) {
          const L = u.inputShapes.value[u.inputShapes.value.length - 1];
          b = ai({
            material: L.material,
            t: L.t
          });
        } else
          b = ai();
        u.inputShapes.value.push(b);
      }
    }, fr = (d) => {
      var b;
      if (u.inputShapes.value.length === 1) return;
      const g = u.inputShapes.value[d].listId;
      u.inputShapes.value.splice(d, 1), ((b = Oe.value) == null ? void 0 : b.listId) === g && (Oe.value = null), J();
    }, ai = (d = {
      l: null,
      w: $e.stockType === "linear" ? ((g) => (g = u.inputStock.value[0]) == null ? void 0 : g.w)() : null,
      t: Ge.value.length ? Ge.value[0] : null,
      q: 1,
      material: ((b) => (b = ze.value) == null ? void 0 : b.length)() === 1 ? ze.value[0].name : "",
      name: null,
      orientationLock: null,
      bandingOptions: null,
      finishOptions: null,
      banding: null,
      finish: null,
      customData: null,
      readonly: !1
    }) => {
      var q, j;
      d.id = (u.inputShapes.value.length + 1).toString();
      const L = new pi(d, A.numberFormat);
      return (q = be == null ? void 0 : be.labels) != null && q.length && Si(L, "banding"), (j = Re == null ? void 0 : Re.labels) != null && j.length && Si(L, "finish"), L;
    }, pr = (d) => {
      if (Ge.value.length)
        for (const g of d) {
          if (!g.t) return;
          const b = Ge.value.findIndex(
            (j) => S({ v: j }) === g.t
          ), L = Rt.value.find((j) => j.includes(b));
          if (!L) return;
          const q = Math.min(
            ...L.map((j) => Ge.value[j])
          );
          S({ v: g.t }) > q && (g.q = g.q * (S({ v: g.t }) / q), g.notes = `Bond to form ${g.t.valueOf()}`, g.t = q);
        }
    }, Rs = () => {
      J(), he(null), m.stockList.value = [], m.shapeList.value = [], m.cutList.value = [];
    }, Ji = () => {
      u.inputShapes.value.length = 0;
    }, gr = async () => {
      if (W("calculating"), He.value) return !1;
      He.value = !0, ri.value = !1;
      const d = u.inputShapes.value.map((le) => new pi(le));
      pr(d);
      const { valid: g, saw: b, stockList: L, shapeList: q } = await Ul({
        t: a,
        partTrim: A.partTrim,
        maxShapes: A.maxParts,
        orientationModel: A.orientationModel,
        sawData: $e,
        inputShapes: d,
        onLimit: () => {
          v({
            type: "error",
            message: a("max_parts") + " " + A.maxParts
          });
        }
      });
      if (!g) {
        W("validation-error"), He.value = !1;
        return;
      }
      Rs(), U.debug && console.log(
        "SmartCut - calculating",
        "stock",
        L.map((le) => le.dimensions),
        "parts",
        q.map((le) => le.dimensions)
      );
      const j = {
        inputs: {
          parts: d,
          stock: u.inputStock.value,
          saw: b
        },
        saw: b,
        shapeList: q,
        stockList: L,
        enableEvo: !0,
        domain: V
      };
      await gt.connect(), gt.emit("calculate", j);
    }, Fs = (d, g) => {
      var fe;
      if (at(d, !1), !d || !g || !(g != null && g[d]) || !qt(A, ["enable", d])) return;
      const b = [d, "pricing"];
      if (!zs(g, b)) {
        W("error", `${b.join(".")} not found in sent data`);
        return;
      }
      const L = qt(g, b);
      if (typeof L != "object") {
        W("error", `${b.join(".")} data must be an object`);
        return;
      }
      if (!ii(L)) {
        W("error", `if provided, ${b.join(".")} data must contain some values`);
        return;
      }
      const q = Object.keys(L), j = Object.values(L);
      if (!q.length) {
        W("error", `no ${b.join(".")} pricing found`);
        return;
      }
      const le = /,/;
      for (const B of q)
        if (le.test(B)) {
          W("error", `${b} keys must not contain commas and should only be separated by a pipe (|)`);
          return;
        }
      if (j.some((B) => isNaN(B))) {
        W("error", `${b} values must be a number`);
        return;
      }
      const ae = As(L), F = [d, "labels"];
      let Y = [];
      if (zs(g, F))
        Y = qt(g, F);
      else {
        W("error", `${F.join(".")} not found`);
        return;
      }
      if (!Y) {
        W("error", `${F.join(".")} data not provided`);
        return;
      }
      if (!Array.isArray(Y)) {
        W("error", `${F.join(".")} data must be an array`);
        return;
      }
      if (!(Y != null && Y.length)) {
        W("error", `if provided, ${F.join(".")} data must contain values`);
        return;
      }
      if (Y.length !== ae) {
        W("error", `${F.join(".")} length (${Y.length}) must match the number of levels in ${b.join(".")} (${ae})`);
        return;
      }
      switch (d) {
        case "banding":
          be.labels = Y, be.pricing = L, be.options = Es(L);
          break;
        case "finish":
          Re.labels = Y, Re.pricing = L, Re.options = Es(L);
          break;
      }
      if (at(d, !0), !!((fe = u.inputShapes.value) != null && fe.length))
        for (const B of u.inputShapes.value)
          Si(B, d);
    }, Ci = (d, g) => {
      if (!g) return;
      d !== "info" && Object.keys(Ne).forEach((L) => {
        L !== d && L !== "info" && (Ne[L] = null);
      });
      const b = u.inputShapes.value.indexOf(g);
      Ne[d] === b ? (Oe.value = null, Ne[d] = null) : (Oe.value = g, Ne[d] = b);
    }, _s = (d) => {
      if (W("log", ["load event received"]), !E.value) {
        W("log", ["load event received"]);
        return;
      }
      mr(d.detail);
    }, mr = (d) => {
      var L, q, j;
      if (W("log", ["loading parts..."]), !d || !((q = (L = d == null ? void 0 : d.inputs) == null ? void 0 : L.parts) != null && q.length)) {
        W("log", ["could not find any parts to import"]);
        return;
      }
      u.inputShapes.value.length = 0;
      let g = 0;
      for (const le of d.inputs.parts) {
        const ae = ai(le);
        ae ? (u.inputShapes.value.push(ae), (j = ae.issues) != null && j.length && W("log", [`SmartCut - issues found while importing part at index ${g}`, ae.issues])) : W("log", [`SmartCut - error loading part at index ${g}`, le]), g++;
      }
      u.inputShapes.value.flatMap((le) => Pt(le.issues)).length && v({
        type: "error",
        message: Ae(a("issues_found"))
      }), W("log", [`loaded ${u.inputShapes.value.length} parts`]);
    }, vr = (d) => {
      u.inputShapes.value.length = 0, et(() => {
        var g, b;
        for (const L of d)
          L.t = ((b = (g = u.inputStock.value) == null ? void 0 : g[0]) == null ? void 0 : b.t) ?? null, u.inputShapes.value.push(ai(L));
      });
    };
    De(() => U.stock, (d) => {
      if (Rs(), Array.isArray(d) || console.warn("SmartCut - stock must be passed as an array"), !!(d != null && d.length)) {
        u.inputStock.value.length = 0, ze.value.length || Ps(d);
        for (const g of d) {
          const b = new Ss({
            ...g,
            autoAdd: !0,
            id: (u.inputStock.value.length + 1).toString()
            // type: sawData.stockType
          }, A.numberFormat);
          u.inputStock.value.push(b);
        }
        if (u.inputStock.value.length) {
          u.inputShapes.value.length ? et(() => {
            u.inputShapes.value.forEach((b) => {
              if (b.material) {
                const L = ze.value.find((q) => q.name === b.material);
                L && (L.thicknesses.includes(S({ v: b.t })) || (b.t = S({ v: L.thicknesses[0] })));
              } else b.t || (b.t = S({ v: u.inputStock.value[0].t }));
            });
          }) : U.inputType !== "formula" && et(() => Ms(1));
          const g = h($e);
          g.length && (console.warn("inputStock issues", JSON.parse(JSON.stringify(g))), v({
            type: "error",
            message: Ae(a("stock_issue")),
            additional: g.map((b) => a(b.message))
          }));
        }
      }
    }, { immediate: !0 }), De(u.inputShapes, (d) => {
      W("inputs-changed"), d.forEach((g) => {
        var L;
        $e.stockType === "linear" && (g.w = (L = u.inputShapes.value[0]) == null ? void 0 : L.w);
        const b = ze.value.find((q) => q.name === g.material);
        b && (b.thicknesses.includes(S({ v: g.t })) || (g.t = S({ v: b.thicknesses[0] })));
      });
    }, { deep: !0 }), De(() => A.numberFormat, (d) => {
      I(d);
    }), pt(async () => {
      if (xt.value) return;
      const d = new URL(window.location.href), g = d.searchParams.toString(), b = d.origin + d.pathname + (g ? `?${g}` : "");
      ve.value !== b && Ji(), ve.value = b, O.value = A.locale, await gt.connect(), gt.emit("getUserFromDomain"), window.addEventListener("smartcut/load", _s), xt.value = !0, U.debug && W("log", [
        "ready...",
        "fields:",
        kt.value.map((L) => L.id)
      ]);
    });
    const yr = () => {
      gt && gt.disconnect();
    };
    return ds(() => {
      window.removeEventListener("smartcut/load", _s), yr(), delete window.smartcutCheckout;
    }), t({
      init: Ve,
      clear: Ji,
      getAvailablePricingOptions: xi,
      getExtrasPrice: ki,
      formatPrice: U.formatPrice,
      findExtrasPrice: U.findExtrasPrice,
      inputShapes: u.inputShapes,
      initExtrasOptions: Si,
      createInputShape: ai
    }), (d, g) => {
      var L, q, j, le, ae, F;
      const b = Nt("font-awesome-icon");
      return y(), C(xe, null, [
        ye(k(s), {
          content: k(D).content,
          type: k(D).type,
          show: k(D).show,
          "reference-el": k(D).referenceEl
        }, null, 8, ["content", "type", "show", "reference-el"]),
        k(ie) === "development" && oc ? (y(), C("div", qu, [
          g[5] || (g[5] = T("div", null, "Developer information", -1)),
          T("div", null, te(A.enable.focus), 1),
          ye(k(l), {
            data: [A],
            paths: ["options"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        Vt.value && ((L = Oe.value) != null && L.machining) ? (y(), ge(k(r), {
          key: 1,
          shape: Oe.value,
          "onUpdate:shape": g[0] || (g[0] = (Y) => Oe.value = Y),
          translate: !0,
          options: Xe,
          "find-extras-price": i.findExtrasPrice,
          "get-extras-price": ki,
          "get-available-pricing-options": xi,
          "format-price": i.formatPrice,
          onClose: _t
        }, null, 8, ["shape", "options", "find-extras-price", "format-price"])) : G("", !0),
        E.value ? G("", !0) : (y(), C("div", Bu, [
          ye(Ks, {
            size: 50,
            "show-number": !1
          })
        ])),
        E.value ? (y(), C("div", {
          key: 3,
          id: "smartcut-checkout",
          class: Ce({ fullscreen: tt.value })
        }, [
          lt.value && !i.readonly ? (y(), C("div", {
            key: 0,
            id: "smartcut-full-screen",
            class: "icon-left",
            onClick: g[1] || (g[1] = (Y) => lr())
          }, [
            ye(b, { icon: ["fass", "expand"] }),
            Qt(" " + te(k(Ae)(k(a)("full_screen"))), 1)
          ])) : G("", !0),
          we.value ? (y(), C("div", {
            key: 1,
            id: "credit",
            style: ke(z.value)
          }, [
            T("a", {
              title: "SmartCut | Cut list optimization software",
              style: ke(ue.value),
              tabindex: "-1",
              target: "_blank",
              href: "https://smartcut.dev"
            }, te(k(io)(k(a)("powered_by"))), 5)
          ], 4)) : G("", !0),
          T("div", {
            id: "part-input",
            class: "inputs no-margin-top grid-table",
            style: ke({ "grid-template-columns": P.value })
          }, [
            k(u).inputShapes.value.length ? (y(), C("div", Hu, [
              g[6] || (g[6] = T("div", { class: "cell id" }, null, -1)),
              (y(!0), C(xe, null, Ee(kt.value, (Y) => (y(), C("div", {
                key: Y.id,
                class: Ce(["cell", { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(Y.id) || Y.type === "checkbox" }])
              }, te(k(Ae)(k(a)(Y.label))), 3))), 128)),
              k(ie) === "development" ? (y(), C("div", Gu, " Info ")) : G("", !0),
              k(u).inputShapes.value.length > 1 ? (y(), C("div", Wu)) : G("", !0)
            ])) : G("", !0),
            (y(!0), C(xe, null, Ee(k(u).inputShapes.value, (Y, fe) => (y(), C("div", {
              key: fe,
              class: "row inputs"
            }, [
              T("div", Nu, [
                T("div", {
                  class: "id",
                  style: ke({
                    background: A.colors.partA,
                    color: A.colors.text
                  })
                }, te(fe + 1), 5)
              ]),
              (y(!0), C(xe, null, Ee(kt.value, (B) => (y(), C("div", {
                key: B.fieldMap,
                class: Ce(["cell", [`${B.id}`, { center: ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(B.id) || B.type === "checkbox" }]])
              }, [
                ["orientationLock", "banding", "finish", "machining", "imageUpload"].includes(B.id) ? B.id === "orientationLock" ? (y(), ge(ca, {
                  key: 1,
                  id: "orientation-" + fe,
                  rectangle: Y,
                  disabled: i.readonly,
                  "stock-grain": k(p)(Y),
                  "button-background": A.colors.button,
                  "icon-color": A.colors.buttonText,
                  "orientation-model": A.orientationModel,
                  onUpdateOrientation: (vt) => Ft(Y, vt)
                }, null, 8, ["id", "rectangle", "disabled", "stock-grain", "button-background", "icon-color", "orientation-model", "onUpdateOrientation"])) : B.id === "banding" ? (y(), ge(da, {
                  key: 2,
                  id: "banding-" + fe,
                  "input-shape": Y,
                  disabled: i.readonly,
                  "stock-grain": k(p)(Y),
                  open: Ne.banding === fe,
                  "orientation-model": A.orientationModel,
                  onClicked: (vt) => Ci("banding", Y)
                }, null, 8, ["id", "input-shape", "disabled", "stock-grain", "open", "orientation-model", "onClicked"])) : B.id === "finish" ? (y(), ge(Ga, {
                  key: 3,
                  id: "finish-" + fe,
                  "input-shape": Y,
                  disabled: i.readonly,
                  open: Ne.finish === fe,
                  onClicked: (vt) => Ci("finish", Y)
                }, null, 8, ["id", "input-shape", "disabled", "open", "onClicked"])) : B.fieldMap === "machining" && lt.value ? (y(), ge(ja, {
                  key: 4,
                  id: "machining-" + fe,
                  disabled: i.readonly,
                  "input-shape": Y,
                  onOpen: (vt) => It(Y)
                }, null, 8, ["id", "disabled", "input-shape", "onOpen"])) : B.fieldMap === "imageUpload" ? (y(), C("button", {
                  key: 5,
                  id: "image-upload-" + fe,
                  type: "button",
                  disabled: i.readonly,
                  class: Ce({ selected: Ne.info === fe }),
                  onClick: (vt) => Ci("imageUpload", Y)
                }, [
                  ye(b, { icon: ["fass", "image"] })
                ], 10, Uu)) : G("", !0) : (y(), ge(dt, {
                  key: 0,
                  id: B.id + "-" + fe,
                  focus: !i.readonly && A.enable.focus && fe === k(u).inputShapes.value.length - 1 && B.id === "l",
                  issue: k(Ns)(Y, [B.fieldMap]),
                  warning: k(Ns)(Y, [B.fieldMap], !0),
                  type: B.type,
                  output: B.output,
                  label: B != null && B.label ? k(Ae)(k(a)(B.label)) : null,
                  placeholder: B != null && B.placeholder ? k(Ae)(k(a)(B.placeholder)) : null,
                  "enable-label": !1,
                  "number-format": A.numberFormat,
                  "should-update-number-format": !1,
                  readonly: i.readonly,
                  required: (B == null ? void 0 : B.required) ?? !1,
                  "allow-zero": (B == null ? void 0 : B.allowZero) ?? !0,
                  options: B.id === "t" ? nr(Y) : B == null ? void 0 : B.options,
                  "true-value": B == null ? void 0 : B.trueValue,
                  "false-value": B == null ? void 0 : B.falseValue,
                  default: B == null ? void 0 : B.default,
                  min: typeof (B == null ? void 0 : B.min) == "number" ? B.min : null,
                  max: typeof (B == null ? void 0 : B.max) == "number" ? B.max : null,
                  custom: B == null ? void 0 : B.custom,
                  value: k(qt)(Y, B == null ? void 0 : B.fieldMap),
                  text: {
                    delete: k(Zt)(k(a)("delete")),
                    select: k(Zt)(k(a)("select"))
                  },
                  onValidation: (vt, br) => it(vt, br, Y, [B.fieldMap]),
                  "onUpdate:value": (vt) => {
                    B.fieldMap && k(Ol)(Y, B.fieldMap, vt);
                  }
                }, null, 8, ["id", "focus", "issue", "warning", "type", "output", "label", "placeholder", "number-format", "readonly", "required", "allow-zero", "options", "true-value", "false-value", "default", "min", "max", "custom", "value", "text", "onValidation", "onUpdate:value"]))
              ], 2))), 128)),
              k(ie) === "development" ? (y(), C("div", ju, [
                T("button", {
                  type: "button",
                  class: Ce({ selected: Ne.info === fe }),
                  onClick: (B) => Ci("info", Y)
                }, " i ", 10, zu)
              ])) : G("", !0),
              k(u).inputShapes.value.length > 1 ? (y(), C("div", Vu, [
                T("button", {
                  type: "button",
                  class: "delete",
                  "aria-label": k(Ae)(k(a)("action_item", { a: "remove", i: "part" })),
                  onClick: (B) => fr(fe)
                }, [
                  ye(b, { icon: ["fass", "trash"] })
                ], 8, Yu)
              ])) : G("", !0),
              ye(k(n), {
                item: Y,
                "num-columns": Ct.value
              }, null, 8, ["item", "num-columns"]),
              Ne.banding === fe && be.options.length > 0 ? (y(), ge(as, {
                key: 2,
                shape: Y,
                "shape-index": fe,
                "extra-type": "banding",
                "extra-label": "banding",
                "extra-keys": be.keys,
                "all-options": be.options,
                pricing: be.pricing,
                labels: be.labels,
                "user-friendly-field-map": k(qe),
                "part-columns": Ct.value,
                "get-price": ki,
                "format-price": i.formatPrice,
                "orientation-model": A.orientationModel,
                "get-available-pricing-options": xi,
                onUpdateAll: Os,
                onSet: $s
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              Ne.finish === fe && Re.options.length > 0 ? (y(), ge(as, {
                key: 3,
                shape: Y,
                "shape-index": fe,
                "extra-type": "finish",
                "extra-label": "finish",
                "extra-keys": Re.keys,
                "all-options": Re.options,
                pricing: Re.pricing,
                labels: Re.labels,
                "user-friendly-field-map": k(qe),
                "part-columns": Ct.value,
                "get-price": ki,
                "format-price": i.formatPrice,
                "orientation-model": A.orientationModel,
                "get-available-pricing-options": xi,
                onUpdateAll: Os,
                onSet: $s
              }, null, 8, ["shape", "shape-index", "extra-keys", "all-options", "pricing", "labels", "user-friendly-field-map", "part-columns", "format-price", "orientation-model"])) : G("", !0),
              Ne.info === fe ? (y(), C("div", {
                key: 4,
                id: "shape-info",
                style: ke({ "grid-column-end": "span " + Ct.value })
              }, [
                ye(k(l), {
                  data: [Y == null ? void 0 : Y.banding],
                  paths: ["banding"]
                }, null, 8, ["data"])
              ], 4)) : G("", !0),
              Ne.imageUpload === fe ? (y(), ge(Qa, {
                key: 5,
                prefix: (fe + 1).toString(),
                "unique-id": k(Ie),
                "shape-id": Y.listId,
                style: ke({ "grid-column-end": "span " + Ct.value }),
                images: Te.value,
                onUpdate: hr,
                onRemove: dr
              }, null, 8, ["prefix", "unique-id", "shape-id", "style", "images"])) : G("", !0)
            ]))), 128))
          ], 4),
          T("div", Xu, [
            i.readonly ? G("", !0) : (y(), C("button", {
              key: 0,
              type: "button",
              "aria-label": k(a)("action_item", { a: "add", i: "part" }),
              style: ke({ background: A.colors.button, color: A.colors.buttonText }),
              class: "add c-btn icon-left",
              onClick: g[2] || (g[2] = (Y) => Ms(1))
            }, [
              ye(b, { icon: ["fass", "plus-large"] }),
              Qt(" " + te(k(Ae)(k(a)("action_item", { a: k(a)("add"), i: k(a)("part") }))), 1)
            ], 12, Ku)),
            T("button", {
              id: "calculate-button",
              type: "button",
              class: "c-btn calculate icon-left",
              "aria-label": k(Ae)(k(a)("calculate")),
              style: ke({
                background: A.colors.button,
                color: A.colors.buttonText
              }),
              disabled: !((q = k(u).inputStock.value) != null && q.length) || He.value,
              onClick: g[3] || (g[3] = (Y) => gr())
            }, [
              ye(b, { icon: ["fass", "calculator"] }),
              Qt(te(k(Ae)(k(a)("calculate"))), 1)
            ], 12, Zu),
            i.readonly ? G("", !0) : (y(), C("button", {
              key: 1,
              type: "button",
              class: "c-btn clear",
              "aria-label": k(Ae)(k(a)("clear")),
              onClick: g[4] || (g[4] = (Y) => Ji())
            }, [
              ye(b, { icon: ["fass", "trash"] })
            ], 8, Ju)),
            T("div", Qu, te(k(f)) + te(A != null && A.maxParts ? "/" + A.maxParts : ""), 1)
          ]),
          ne.value && !i.readonly ? (y(), ge(k(o), {
            key: 2,
            ref: "import",
            "number-format": A.numberFormat,
            "custom-fields": Yt.value,
            "banding-options": be.options,
            "banding-labels": be.labels,
            "finish-options": Re.options,
            "finish-labels": Re.labels,
            onImport: vr
          }, null, 8, ["number-format", "custom-fields", "banding-options", "banding-labels", "finish-options", "finish-labels"])) : G("", !0),
          oi.value ? (y(), C("div", ec, [
            Pe.value ? (y(), C("div", tc, te(Pe.value), 1)) : G("", !0),
            T("pre", ic, te(mt.value), 1)
          ])) : G("", !0),
          (A.enable.diagram ? He.value && !k(_).complete : He.value || k(_).complete) ? (y(), C("div", sc, [
            ye(Ks, {
              size: 50,
              number: k(_).shapeCount,
              complete: k(_).complete,
              "show-number": A.enable.progressNumber
            }, null, 8, ["number", "complete", "show-number"])
          ])) : G("", !0),
          cs(T("div", nc, [
            ((le = (j = k(Z)) == null ? void 0 : j.saw) == null ? void 0 : le.stockType) !== "roll" ? (y(), C("div", rc, te((ae = k(Z)) != null && ae.stack ? (F = k(Z)) == null ? void 0 : F.stack : 1), 1)) : G("", !0),
            ye(_u, {
              "element-id": "diagram",
              "number-format": A.numberFormat,
              "decimal-places": A.decimalPlaces,
              colors: A.colors
            }, null, 8, ["number-format", "decimal-places", "colors"])
          ], 512), [
            [hs, A.enable.diagram && k(_).complete]
          ]),
          A.enable.diagram && k(R).length > 1 && k(_).complete ? (y(), ge(Ql, {
            key: 5,
            ref: "stockNavigation",
            "active-stock-id": k(X),
            "stock-list": k(R),
            onShowStock: k(he)
          }, null, 8, ["active-stock-id", "stock-list", "onShowStock"])) : G("", !0)
        ], 2)) : G("", !0)
      ], 64);
    };
  }
}), Dh = /* @__PURE__ */ ni(lc, [["__scopeId", "data-v-670e9630"]]), ac = {
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
}, uc = { class: "smartcut-object-viewer" }, cc = ["onClick"], hc = { class: "toggle-icon" }, dc = { class: "path-label" }, fc = {
  key: 0,
  class: "object-properties"
}, pc = { class: "key" };
function gc(i, t, e, s, n, r) {
  return y(), C("div", uc, [
    (y(!0), C(xe, null, Ee(e.data, (o, l) => (y(), C("div", {
      key: l,
      class: "array-item"
    }, [
      T("div", {
        class: "item-header",
        onClick: (a) => r.toggle(l)
      }, [
        T("div", hc, te(n.expanded[l] ? "▼" : "▶"), 1),
        T("div", dc, te(e.paths[l] || l), 1)
      ], 8, cc),
      n.expanded[l] ? (y(), C("div", fc, [
        (y(!0), C(xe, null, Ee(o, (a, u) => (y(), C("div", {
          key: u,
          class: "property-item"
        }, [
          T("div", pc, te(u) + ": ", 1),
          T("div", {
            class: Ce(["value", r.getValueType(a)])
          }, te(r.formatValue(a)), 3)
        ]))), 128))
      ])) : G("", !0)
    ]))), 128))
  ]);
}
const mc = /* @__PURE__ */ ni(ac, [["render", gc]]), Zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: mc }, Symbol.toStringTag, { value: "Module" })), vc = ["data-placement"], yc = /* @__PURE__ */ Me({
  __name: "ToolTip",
  props: {
    show: { type: Boolean },
    content: {},
    referenceEl: {},
    type: {}
  },
  setup(i) {
    const t = i, e = H(null), s = H(null), n = Q(() => ({
      getBoundingClientRect: () => {
        var p;
        return ((p = t.referenceEl) == null ? void 0 : p.getBoundingClientRect()) || new DOMRect();
      }
    })), r = [
      Lr(8),
      Dr({
        padding: 8,
        mainAxis: !0,
        crossAxis: !0,
        boundary: document.body
      }),
      Pr({
        padding: 8,
        fallbackPlacements: ["top", "bottom", "right", "left"]
      }),
      Hr({ element: s })
    ], { floatingStyles: o, middlewareData: l, placement: a } = qr(
      n,
      e,
      {
        placement: "top",
        middleware: r,
        whileElementsMounted: (p, I, h) => Ir(
          p,
          I,
          h,
          {
            ancestorScroll: !0,
            ancestorResize: !0,
            elementResize: !0,
            animationFrame: !0
          }
        )
      }
    ), u = Q(() => ({
      position: o.value.position,
      top: o.value.top,
      left: o.value.left,
      transform: o.value.transform,
      zIndex: "1000"
    })), f = Q(() => {
      if (!l.value.arrow) return {};
      const { x: p, y: I } = l.value.arrow, h = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
      }[a.value.split("-")[0]] || "top";
      return {
        left: p != null ? `${p}px` : void 0,
        top: I != null ? `${I}px` : void 0,
        [h]: "-4px"
      };
    });
    return (p, I) => (y(), ge(yn, { to: "body" }, [
      ye(Br, { name: "fade" }, {
        default: fs(() => [
          p.show && p.referenceEl ? (y(), C("div", {
            key: 0,
            ref_key: "floatingRef",
            ref: e,
            class: Ce(["tooltip", p.type]),
            style: ke(u.value),
            "data-placement": k(a)
          }, [
            Qt(te(p.content) + " ", 1),
            T("div", {
              ref_key: "arrowRef",
              ref: s,
              class: "arrow",
              style: ke(f.value)
            }, null, 4)
          ], 14, vc)) : G("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: yc }, Symbol.toStringTag, { value: "Module" })), wc = /* @__PURE__ */ Me({
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
      return y(), C(xe, null, [
        (r = (n = t.item.issues) == null ? void 0 : n.filter((a) => a.type === "error")) != null && r.length ? (y(), C("div", {
          key: 0,
          class: "group issues",
          style: ke({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          T("pre", null, te(t.item.issues.filter((a) => a.type === "error").flatMap((a) => k(Ae)(a.message)).join(`
`)), 1)
        ], 4)) : G("", !0),
        (l = (o = t.item.issues) == null ? void 0 : o.filter((a) => a.type === "warning")) != null && l.length ? (y(), C("div", {
          key: 1,
          class: "group warnings",
          style: ke({
            "grid-column-end": "span " + t.numColumns
          })
        }, [
          T("pre", null, te(t.item.issues.filter((a) => a.type === "warning").flatMap((a) => k(Ae)(a.message)).join(`
`)), 1)
        ], 4)) : G("", !0)
      ], 64);
    };
  }
}), Sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: wc }, Symbol.toStringTag, { value: "Module" })), st = {
  precisionFixed: to,
  format: eo,
  select: _e,
  selectAll: xn,
  scaleLinear: nt,
  scaleSequential: hi,
  axisTop: wn,
  axisBottom: _i,
  axisRight: Sn,
  axisLeft: qi,
  symbol: Qr,
  path: Jr,
  arc: Zr,
  symbolTriangle: Kr,
  symbolSquare: Xr
};
class xc {
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
    c(this, "xScale", st.scaleLinear());
    c(this, "yScale", st.scaleLinear());
    c(this, "yScaleFlipped", st.scaleLinear());
    c(this, "measurementScale", st.scaleLinear());
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
      if (this.el = st.select(this.HTMLElement), (this.decimalPlaces === null || this.decimalPlaces === void 0 || isNaN(this.decimalPlaces)) && (this.decimalPlaces = 2), this.formatDp = st.format(`.${this.decimalPlaces}f`), this.shapeL = this.shape.getLongSide(), this.shapeW = this.shape.getShortSide(), !this.svgCanvas && (this.svgCanvas = this.HTMLElement.querySelector("svg"), this.svgCanvas === null)) {
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
      st.axisTop(this.xScale).ticks(10).tickSize(-this.h + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dy", "-5px"), this.yAxis = this.svgCanvas.append("g").attr("transform", `translate(${this.w - this.padding}, 0)`).attr("class", "axis y"), this.yAxis.call(
      st.axisRight(this.yScale).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
    ), this.svgCanvas.selectAll(".axis.x text").attr("dx", "5px"), this.legendGroup = this.svgCanvas.append("g").attr("class", "legend-group"), this.cornerGroup = this.svgCanvas.append("g").attr("class", "corner-group"), this.createLegend();
  }
  addPoint(t, e) {
    this.pointGroup.append("circle").attr("cx", this.xScale(t)).attr("cy", this.getYScale()(e)).attr("r", 3).attr("fill", "magenta");
  }
  createShape() {
    if (this.svgCanvas.selectAll(".shape-group > *").remove(), this.svgCanvas.selectAll(".point-group > *").remove(), !this.shape || !this.shape.l || !this.shape.w || !this.w || !this.h) return !1;
    this.shapeGroup.append("rect").attr("class", "shape-background-fill").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2), this.shapeGroup.append("rect").attr("class", "shape-background").attr("x", this.padding).attr("y", this.padding).attr("width", this.w - this.padding * 2).attr("height", this.h - this.padding * 2).style("fill", "url(#stripes)");
    const t = st.path(), e = this.shape.machining.corners, s = [], n = [];
    [0, 1, 2, 3].forEach((o) => {
      const l = e[o];
      l && l.type ? (s.push(l.size ? S({ v: l.size ?? 0, o: this }) : 0), n.push(l.type)) : (s.push(0), n.push(null));
    });
    const r = (o, l, a, u, f) => {
      n[o] === "radius" ? t.arcTo(
        this.xScale(l),
        this.getYScale()(a),
        this.xScale(u),
        this.getYScale()(f),
        this.measurementScale(s[o])
      ) : n[o] === "bevel" ? t.lineTo(this.xScale(u), this.getYScale()(f)) : (t.lineTo(this.xScale(l), this.getYScale()(a)), t.lineTo(this.xScale(u), this.getYScale()(f)));
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
    for (const r of St)
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
    const n = st.path();
    this.shape.machining.corners.forEach((r, o) => {
      if (!r.type) return;
      let l, a, u;
      switch (o) {
        case 0:
          if (!x(t.a) || t.a === !1) return;
          l = {
            x: this.xScale(0) - e,
            y: this.getYScale()(S({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(S({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          };
          break;
        case 1:
          if (!x(t.b) || t.b === !1) return;
          l = {
            x: this.xScale(this.shapeL - S({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(0) + (this.currentSide === 0 ? e : 1)
          }, a = {
            x: this.xScale(this.shapeL) - e,
            y: this.getYScale()(0)
          }, u = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(S({ v: r.size ?? 0, o: this }))
          };
          break;
        case 2:
          if (!x(t.c) || t.c === !1) return;
          l = {
            x: this.xScale(this.shapeL) + e,
            y: this.getYScale()(this.shapeW - S({ v: r.size ?? 0, o: this }))
          }, a = {
            x: this.xScale(this.shapeL),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(this.shapeL - S({ v: r.size ?? 0, o: this })) - e,
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          };
          break;
        case 3:
          if (!x(t.d) || t.d === !1) return;
          l = {
            x: this.xScale(S({ v: r.size ?? 0, o: this })),
            y: this.getYScale()(this.shapeW) + (this.currentSide === 1 ? e : 1)
          }, a = {
            x: this.xScale(0),
            y: this.getYScale()(this.shapeW)
          }, u = {
            x: this.xScale(0) - e,
            y: this.getYScale()(this.shapeW - S({ v: r.size ?? 0, o: this })) + e
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
      st.axisRight(this.currentSide === 0 ? this.yScale : this.yScaleFlipped).ticks(Math.ceil(this.shapeW / this.shapeL * 10)).tickSize(-this.w + this.padding * 2)
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
function kc(i) {
  var t;
  if (!(i != null && i[0])) return null;
  if ("optionsStore" in this && typeof ((t = this == null ? void 0 : this.optionsStore) == null ? void 0 : t[i[0]]) < "u")
    return ei(this.optionsStore, i);
  if (typeof (this == null ? void 0 : this[i[0]]) < "u") return ei(this, i);
}
const Cc = { id: "machining" }, Ic = {
  key: 0,
  class: "debug"
}, Lc = { class: "inputs" }, Dc = {
  key: 0,
  class: "shape-name"
}, Pc = { class: "shape-dimensions" }, Tc = {
  key: 1,
  class: "sides-wrapper"
}, $c = { class: "menu" }, Oc = { class: "button-wrapper" }, Ac = { class: "row table-heading" }, Ec = {
  key: 0,
  class: "cell id"
}, Mc = {
  key: 0,
  class: "cell"
}, Rc = { class: "id" }, Fc = ["onClick"], _c = { class: "remove" }, qc = { key: 5 }, Bc = !1, Hc = /* @__PURE__ */ Me({
  __name: "Machining",
  props: /* @__PURE__ */ qs({
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
  emits: /* @__PURE__ */ qs(["update:shape", "close"], ["update:shape"]),
  setup(i, { emit: t }) {
    var Ne, ze, Ge, Rt, Vt, Xe, be, Re, li, Yt, wi, kt, Ct;
    const e = Tt(() => Promise.resolve().then(() => Zi)), s = i, n = t, r = Q(() => bs(E.value)), o = Q(() => kc.call({ options: s.options }, ["units"])), l = Q(() => {
      var z;
      if (!((z = f.value) != null && z.length)) return 0;
      if (A.value === "banding") return 1;
      let P = Object.values(u.value).filter((ue) => ue.enabled).length;
      return P += 2, P;
    }), a = Q(() => {
      if (!f.value.length || A.value === "banding") return;
      const P = {
        id: "34px",
        del: "30px"
      }, z = [];
      return f.value.forEach((ue) => {
        const we = u.value[ue];
        we.enabled && z.push(we.w ?? "1fr");
      }), z.unshift(P.id), z.push(P.del), z.join(" ");
    }), u = Q(() => !A.value || A.value === "banding" ? null : oi[A.value]), f = Q(() => !A.value || A.value === "banding" ? [] : Object.keys(oi[A.value]).filter((P) => oi[A.value][P].enabled)), p = Q(() => A.value ? X() : []), I = Q(() => {
      var z, ue, we, Ue;
      const P = ((Ue = (we = (ue = (z = E.value) == null ? void 0 : z.machining) == null ? void 0 : ue.corners) == null ? void 0 : we.map((Ve) => {
        var Ft;
        return (Ft = Ve == null ? void 0 : Ve.isPresent) != null && Ft.call(Ve) ? Ve.getCorner() : null;
      })) == null ? void 0 : Ue.filter((Ve) => Ve)) ?? [];
      return [...St, ...P];
    }), h = (P = !0) => {
      P ? tt.value = P : et(() => tt.value = !1);
    }, m = () => {
      K(), $(), U(), W();
    }, w = (P, z, ue) => {
      et(() => {
        P[z] = ue;
      });
    }, R = (P) => {
      if (A.value === "corners")
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
    }, N = () => A.value !== "banding", ee = (P, z = null) => {
      if (!(P != null && P.length)) return [];
      let ue = "None";
      z === "depth" && (ue = "Through");
      const we = [{ label: ue, value: null }];
      return P.forEach((Ue) => {
        const Ve = Ue.toString().charAt(0).toUpperCase() + Ue.toString().slice(1);
        we.push({ label: Ve, value: Ue });
      }), we;
    }, X = () => {
      if (!A.value) return [];
      if (A.value === "banding") return [];
      const P = E.value.machining[A.value];
      return Array.isArray(P) ? P : [P];
    };
    let Z = null;
    const he = () => {
      E.value && (Z = new xc({
        HTMLElement: document.querySelector("#machining-diagram"),
        shape: E.value,
        vueComponent: null
        // Changed from this to null since we're in setup
      }), Z.init(), lt.value = !0, setTimeout(() => {
        Z.updateSize();
      }, 100));
    }, _ = () => {
      Qe.value = Qe.value === 0 ? 1 : 0, Z.flip();
    }, J = () => {
      switch (A.value) {
        case "holes":
          v();
          break;
        case "hingeHoles":
          D();
          break;
      }
    }, v = () => {
      E.value.machining.createHole(
        S({ v: E.value.getLongSide() }) / 2,
        S({ v: E.value.getShortSide() }) / 2,
        s.options.holes.defaultDiameter ?? 1,
        s.options.holes.defaultDepth ?? 0,
        Qe.value
      ), Z.createHoles();
    }, D = () => {
      E.value.machining.createHingeHoles({
        numHoles: 3,
        position: 0,
        diameter: s.options.holes.defaultDiameter ?? 0,
        depth: s.options.holes.defaultDepth ?? 0,
        edge: "x1",
        face: Qe.value,
        distanceFromEdge: s.options.hingeHoles.defaultDistanceFromEdge,
        outerSpacing: s.options.hingeHoles.defaultOuterSpacing,
        minimumHoleDistance: s.options.hingeHoles.minimumHoleDistance,
        hingeLength: s.options.hingeHoles.defaultHingeLength
      }), Z.createHingeHoles();
    }, K = () => {
      E.value.machining.holes.length = 0;
    }, $ = () => {
      E.value.machining.hingeHoles.length = 0;
    }, U = () => {
      E.value.machining.corners.forEach((P) => {
        P.size = null, P.type = null;
      }), E.value.banding.a = !1, E.value.banding.b = !1, E.value.banding.c = !1, E.value.banding.d = !1;
    }, W = () => {
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
    }, ie = (P) => {
      switch (A.value) {
        case "holes":
          return E.value.machining.holes.splice(P, 1);
        case "hingeHoles":
          return E.value.machining.hingeHoles.splice(P, 1);
        case "corners":
          E.value.machining.corners[P].size = null, E.value.machining.corners[P].type = null;
          return;
      }
    }, O = () => {
      switch (A.value) {
        case "holes":
          return K();
        case "hingeHoles":
          return $();
        case "corners":
          return U();
      }
    }, M = () => {
      var P;
      if (Oe.value = [], !!s.options.banding.enabled) {
        h();
        for (const z in E.value.banding)
          E.value.banding[z] ? s.options.banding.enableTypes && ((P = s.options.banding.types) != null && P.length) && (E.value.banding[z] || Oe.value.push({
            index: z,
            message: "Please select a type"
          })) : E.value.banding[z] = "";
        h(!1);
      }
    }, V = (P) => {
      const z = Oe.value.filter((ue) => ue.index === P);
      return z.length ? z.map((ue) => ue.message) : [];
    }, se = (P) => {
      const z = Oe.value.filter((we) => we.index === P && (we == null ? void 0 : we.fields)), ue = z.flatMap((we) => we.fields);
      return z.length ? ue : [];
    }, oe = (P, z) => {
      const ue = se(P);
      return ue != null && ue.length ? ue.includes(z) : !1;
    }, ve = () => {
      n("close");
    }, Ie = (P) => P && typeof P.disabled == "function" ? P.disabled : !1, Te = (P, z, ue, we, Ue) => {
      Ds(P, z, ue, we, Ue, s.findExtrasPrice);
    }, xt = (P, z, ue, we) => {
      Vn(
        P,
        z,
        ue,
        we,
        [],
        s.findExtrasPrice
      );
    }, E = Gr(i, "shape");
    if (!((Ne = E.value) != null && Ne.machining))
      throw new Error("Machining component requires a shape with machining initialized");
    const He = H(null), ri = H(null), ne = H(!1), lt = H(!1), tt = H(!1), gt = H(!1), Qe = H(0), A = H(null), $e = H(0), Oe = H([]), oi = bt({
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
          type: (ze = s.options.holes.diameters) != null && ze.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (Ge = s.options.holes.diameters) != null && Ge.length ? "float" : void 0,
          options: (Rt = s.options.holes.diameters) != null && Rt.length ? ee(s.options.holes.diameters) : void 0,
          required: !0
        },
        depth: {
          enabled: s.options.holes.enableDepth && typeof E.value.t < "u" && S({ v: E.value.t }) > 0,
          //[]
          required: !1,
          type: (Vt = s.options.holes.depths) != null && Vt.length ? "select" : "unitDependent",
          output: (Xe = s.options.holes.depths) != null && Xe.length ? "float" : void 0,
          options: (be = s.options.holes.depths) != null && be.length ? ee(s.options.holes.depths) : void 0
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
          enabled: s.options.holes.enableDepth && typeof E.value.t < "u" && S({ v: E.value.t }) > 0,
          required: !1,
          type: (Re = s.options.holes.depths) != null && Re.length ? "select" : "unitDependent",
          output: (li = s.options.holes.depths) != null && li.length ? "float" : void 0,
          options: (Yt = s.options.holes.depths) != null && Yt.length ? ee(s.options.holes.depths) : void 0
        },
        //[] separate option for hinges
        diameter: {
          enabled: !0,
          required: !0,
          type: (wi = s.options.holes.diameters) != null && wi.length ? "select" : "unitDependent",
          label: "Diameter",
          output: (kt = s.options.holes.diameters) != null && kt.length ? "float" : void 0,
          options: (Ct = s.options.holes.diameters) != null && Ct.length ? ee(s.options.holes.diameters) : void 0
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
          options: ee(s.options.corners.types)
        },
        size: {
          enabled: !0,
          required: !0,
          label: "Size",
          type: "unitDependent",
          min: () => typeof s.options.corners.minValue < "u" ? S({ v: s.options.corners.minValue, o: s.options }) : 0,
          max: () => typeof s.options.corners.maxValue < "u" ? S({ v: s.options.corners.maxValue, o: s.options }) : S({ v: E.value.getShortSide(), o: s.options }) / 2
        }
      }
    }), Pe = bt({
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
    }), mt = () => {
      var P;
      return !(!((P = E == null ? void 0 : E.value) != null && P.machining) || !ne.value || tt.value);
    };
    return De(() => {
      var P;
      return (P = E.value) == null ? void 0 : P.listId;
    }, () => {
      mt() && he();
    }), De(() => {
      var P;
      return (P = E.value) == null ? void 0 : P.id;
    }, () => {
      mt() && he();
    }), De(A, (P) => {
      if (mt()) {
        if (P === "banding") {
          h(), M(), h(!1);
          return;
        }
        if (!P) {
          Oe.value = [];
          return;
        }
        h(), Oe.value = E.value.machining.validate(
          E.value,
          P,
          Pe == null ? void 0 : Pe[P]
        ), P === "hingeHoles" && E.value.machining.hingeHoles.forEach((z, ue) => {
          Gi(z, Pe == null ? void 0 : Pe.holes, Oe.value, ue);
        }), h(!1);
      }
    }, { deep: !0, immediate: !0 }), De(() => {
      var P, z;
      return (z = (P = E == null ? void 0 : E.value) == null ? void 0 : P.machining) == null ? void 0 : z.holes;
    }, () => {
      mt() && (h(), Oe.value = E.value.machining.validate(
        E.value,
        "holes",
        Pe == null ? void 0 : Pe.holes
      ), Z.createHoles(), h(!1));
    }, { deep: !0, immediate: !0 }), De(() => {
      var P, z;
      return (z = (P = E == null ? void 0 : E.value) == null ? void 0 : P.machining) == null ? void 0 : z.hingeHoles;
    }, () => {
      mt() && (h(), E.value.machining.updateHingeHoles(E.value), Oe.value = E.value.machining.validate(
        E.value,
        "hingeHoles",
        Pe == null ? void 0 : Pe.hingeHoles
      ), E.value.machining.hingeHoles.forEach((P, z) => {
        Gi(P, Pe == null ? void 0 : Pe.holes, Oe.value, z);
      }), Z.createHingeHoles(), h(!1));
    }, { deep: !0, immediate: !0 }), De(() => {
      var P, z;
      return (z = (P = E == null ? void 0 : E.value) == null ? void 0 : P.machining) == null ? void 0 : z.corners;
    }, () => {
      if (mt()) {
        h(), Oe.value = E.value.machining.validate(
          E.value,
          "corners",
          Pe == null ? void 0 : Pe.corners
        ), E.value.machining.validate(E.value, "holes"), E.value.machining.validate(E.value, "hingeHoles"), Z.createShape(), Z.createHoles(), Z.createHingeHoles();
        for (const P of E.value.machining.corners)
          P.isPresent() || Ls(E.value, "banding", P.getCorner(), !0);
        Z.createBanding(), h(!1);
      }
    }, { deep: !0, immediate: !0 }), De(() => {
      var P;
      return (P = E == null ? void 0 : E.value) == null ? void 0 : P.banding;
    }, () => {
      mt() && (M(), Z.createBanding());
    }, { deep: !0, immediate: !0 }), pt(() => {
      var z;
      if ((z = document.getElementById("machining")) == null || z.requestFullscreen(), !E.value || !E.value.l || !E.value.w) {
        console.warn("no part provided to machining");
        return;
      }
      et(() => he());
      const P = document.querySelector("#smartcut-app #machining .diagram");
      He.value || (He.value = new ResizeObserver((ue) => {
        clearTimeout(ri.value ?? void 0), lt.value && (ri.value = window.setTimeout(() => {
          if (gt.value) {
            gt.value = !1;
            return;
          }
          ue[0].contentRect.width !== $e.value && ($e.value = ue[0].contentRect.width, $e.value && Z.updateSize());
        }, 10));
      }), He.value.observe(P)), ne.value = !0;
    }), (P, z) => {
      var we, Ue, Ve, Ft, at;
      const ue = Nt("font-awesome-icon");
      return y(), C("div", Cc, [
        P.env === "development" && Bc ? (y(), C("div", Ic, [
          ye(k(e), {
            data: [E.value.machining],
            paths: ["shape.machining"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        T("div", null, [
          T("div", Lc, [
            T("button", {
              type: "button",
              class: "close",
              onClick: ve
            }, [
              ye(ue, { icon: ["fass", "xmark"] })
            ]),
            (we = E.value) != null && we.name ? (y(), C("div", Dc, te(E.value.name), 1)) : G("", !0),
            T("div", Pc, te((Ue = E.value) == null ? void 0 : Ue.l) + " x " + te((Ve = E.value) == null ? void 0 : Ve.w) + " " + te((Ft = E.value) != null && Ft.t ? "x " + ((at = E.value) == null ? void 0 : at.t) : null), 1),
            P.options.faces.enabled ? (y(), C("div", Tc, [
              T("div", {
                ref: "sides",
                class: Ce(["sides", { flipped: Qe.value === 1 }]),
                onClick: _
              }, z[4] || (z[4] = [
                T("div", { class: "side-a" }, " A ", -1),
                T("div", { class: "side-b" }, " B ", -1)
              ]), 2),
              z[5] || (z[5] = T("div", { class: "text" }, " [Click to flip] ", -1))
            ])) : G("", !0),
            r.value ? (y(), C("button", {
              key: 2,
              onClick: m
            }, " Delete all machining ")) : G("", !0),
            T("div", $c, [
              P.options.holes.enabled ? (y(), C("div", {
                key: 0,
                class: Ce({ selected: A.value === "holes" }),
                onClick: z[0] || (z[0] = (je) => A.value = "holes")
              }, " Holes ", 2)) : G("", !0),
              P.options.hingeHoles.enabled ? (y(), C("div", {
                key: 1,
                class: Ce({ selected: A.value === "hingeHoles" }),
                onClick: z[1] || (z[1] = (je) => A.value = "hingeHoles")
              }, " Hinge holes ", 2)) : G("", !0),
              P.options.corners.enabled ? (y(), C("div", {
                key: 2,
                class: Ce({ selected: A.value === "corners" }),
                onClick: z[2] || (z[2] = (je) => A.value = "corners")
              }, " Corners ", 2)) : G("", !0),
              P.options.banding.enabled ? (y(), C("div", {
                key: 3,
                class: Ce({ selected: A.value === "banding" }),
                onClick: z[3] || (z[3] = (je) => A.value = "banding")
              }, " Banding ", 2)) : G("", !0)
            ]),
            T("div", Oc, [
              A.value === "holes" || A.value === "hingeHoles" ? (y(), C("button", {
                key: 0,
                type: "button",
                onClick: J
              }, " Create ")) : G("", !0),
              A.value && A.value !== "banding" ? (y(), C("button", {
                key: 1,
                type: "button",
                onClick: O
              }, " Delete all ")) : G("", !0)
            ]),
            A.value === "banding" && E.value ? (y(), ge(as, {
              key: 3,
              shape: E.value,
              env: P.env,
              "extra-type": "banding",
              "extra-label": "banding",
              "extra-keys": I.value,
              labels: P.options.banding.labels,
              "all-options": P.options.banding.options,
              pricing: P.options.banding.pricing,
              "user-friendly-field-map": k(qe),
              "part-columns": 1,
              translate: P.translate,
              "orientation-model": 0,
              "get-price": P.getExtrasPrice,
              "format-price": P.formatPrice,
              "get-available-pricing-options": P.getAvailablePricingOptions,
              onSet: Te,
              onUpdateAll: xt
            }, null, 8, ["shape", "env", "extra-keys", "labels", "all-options", "pricing", "user-friendly-field-map", "translate", "get-price", "format-price", "get-available-pricing-options"])) : G("", !0),
            A.value !== "banding" && p.value.length ? (y(), C("div", {
              key: 4,
              class: Ce(["grid-table", A.value]),
              style: ke({ "grid-template-columns": a.value })
            }, [
              T("div", Ac, [
                N() ? (y(), C("div", Ec)) : G("", !0),
                (y(!0), C(xe, null, Ee(u.value, (je, it, de) => cs((y(), C("div", {
                  key: de,
                  class: "cell"
                }, te(je.label ?? it), 1)), [
                  [hs, je.enabled]
                ])), 128)),
                z[6] || (z[6] = T("div", { class: "cell del" }, null, -1))
              ]),
              (y(!0), C(xe, null, Ee(p.value, (je, it) => (y(), C("div", {
                key: it,
                class: "row"
              }, [
                N() ? (y(), C("div", Mc, [
                  T("div", Rc, te(R(it)), 1)
                ])) : G("", !0),
                (y(!0), C(xe, null, Ee(f.value, (de, It) => (y(), C("div", {
                  key: It,
                  class: "cell"
                }, [
                  u.value[de].type !== "select" && u.value[de].type !== "checkbox" ? (y(), ge(dt, {
                    key: 0,
                    id: de + "-" + It,
                    warning: oe(it, de),
                    type: u.value[de].output ?? "unitDependent",
                    "enable-label": !1,
                    placeholder: u.value[de].label ?? de,
                    disabled: Ie(u.value[de]),
                    value: je[de],
                    units: o.value,
                    output: u.value[de].output,
                    "onUpdate:value": (_t) => w(je, de, _t)
                  }, null, 8, ["id", "warning", "type", "placeholder", "disabled", "value", "units", "output", "onUpdate:value"])) : u.value[de].type === "checkbox" ? (y(), ge(dt, {
                    key: 1,
                    id: de + "-" + It,
                    type: "checkbox",
                    warning: oe(it, de),
                    "enable-label": !1,
                    disabled: Ie(u.value[de]),
                    value: je[de],
                    output: u.value[de].output,
                    "onUpdate:value": (_t) => w(je, de, _t)
                  }, null, 8, ["id", "warning", "disabled", "value", "output", "onUpdate:value"])) : u.value[de].type === "select" ? (y(), ge(dt, {
                    key: 2,
                    id: de + "-" + It,
                    type: "select",
                    "enable-label": !1,
                    warning: oe(it, de),
                    disabled: Ie(u.value[de]),
                    value: je[de],
                    options: u.value[de].options,
                    output: u.value[de].output,
                    "onUpdate:value": (_t) => w(je, de, _t)
                  }, null, 8, ["id", "warning", "disabled", "value", "options", "output", "onUpdate:value"])) : G("", !0)
                ]))), 128)),
                T("div", {
                  class: "cell",
                  onClick: (de) => ie(it)
                }, [
                  T("div", _c, [
                    ye(ue, { icon: ["fass", "trash"] })
                  ])
                ], 8, Fc),
                (y(!0), C(xe, null, Ee(V(it), (de, It) => (y(), C("div", {
                  key: It,
                  class: "group validation",
                  style: ke({ "grid-column-end": "span " + l.value })
                }, te(de), 5))), 128))
              ]))), 128))
            ], 6)) : A.value !== "banding" ? (y(), C("div", qc, " Please select from the menu above ")) : G("", !0)
          ]),
          T("div", {
            id: "machining-diagram",
            class: Ce(["diagram", { flipped: Qe.value === 1 }])
          }, null, 2)
        ])
      ]);
    };
  }
}), Gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: Hc }, Symbol.toStringTag, { value: "Module" })), Wc = {
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
      files: Wr([])
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
function Nc(i, t, e, s, n, r) {
  return y(), C("div", {
    id: "drop",
    class: Ce({ thinking: e.thinking, [n.dropClass]: !0 }),
    onDrop: t[0] || (t[0] = Nr((...o) => r.onDrop && r.onDrop(...o), ["prevent"]))
  }, [
    T("div", null, te(e.thinking ? "Loading, please wait..." : e.label), 1)
  ], 34);
}
const Uc = /* @__PURE__ */ ni(Wc, [["render", Nc]]), jc = { id: "import-file" }, zc = /* @__PURE__ */ Me({
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
    const e = i, s = t, { t: n } = ji(["main", "errors"]), r = H([]), o = H([]), l = H([]), a = H([]), u = H({}), f = H([]), p = H(!1), I = H(null), h = H(null), m = [
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
    ], w = Q(() => {
      const O = {};
      return r.value.forEach((M, V) => {
        O[V] = {};
        for (const [se, oe] of Object.entries(M)) {
          if (!m.includes(se)) continue;
          const ve = ee(se, oe);
          (ve === !0 || ve === !1) && (O[V][se] = ve);
        }
      }), O;
    }), R = Q(() => e.customFields.map((O) => O.label)), N = (O, M) => {
      if (M) {
        const V = Object.keys(M), se = [[]];
        V.forEach((ve) => {
          const Ie = M[ve], Te = [];
          se.forEach((xt) => {
            Ie.forEach((E) => Te.push([...xt, E]));
          }), se.splice(0, se.length, ...Te);
        });
        const oe = /* @__PURE__ */ new Set();
        se.forEach((ve) => oe.add(ve.join("|").toLowerCase())), O === "banding" ? I.value = oe : h.value = oe;
      }
    }, ee = (O, M) => {
      if (M === "???") return !0;
      function V(oe) {
        return oe ? (oe = oe.trim().toLowerCase(), oe === "l" || oe === "w") : !0;
      }
      const se = {
        banding: (oe) => X(oe, I.value, "banding"),
        finish: (oe) => X(oe, h.value, "finish"),
        orientationLock: V
      };
      return O in se ? se[O](M) : null;
    }, X = (O, M, V) => {
      if (O = $(O), !O) return !0;
      const se = O.split(","), oe = se.every((ve) => !ve || M.has(ve.toLowerCase()));
      if (!oe) {
        const ve = se.filter((Ie) => !M.has(Ie.toLowerCase()));
        console.log(`Valid ${V} choices...`), console.table(Array.from(M)), console.log(`The following ${V} choices are invalid`, ve);
      }
      return oe;
    }, Z = (O, M) => {
      const V = {
        bandingOptions: (se) => he(se, e.bandingOptions, e.bandingLabels, ["y1", "y2", "x1", "x2"]),
        finishOptions: (se) => he(se, e.finishOptions, e.finishLabels, ["a", "b"])
      };
      return O in V ? V[O](M) : null;
    }, he = (O, M, V, se) => {
      if (O = $(O), !O)
        return se.reduce((Ie, Te) => ({ ...Ie, [Te]: {} }), {});
      const oe = O.split(",").map((Ie) => Ie.toLowerCase()), ve = {};
      return se.forEach((Ie, Te) => {
        ve[Ie] = {}, Object.keys(M).forEach((xt, E) => {
          var He;
          ve[Ie][V[E]] = ((He = oe[Te]) == null ? void 0 : He.split("|")[E]) || "";
        });
      }), ve;
    }, _ = () => r.value.map((O, M) => ({
      l: e.numberFormat === "decimal" ? Ri(O.l) : O.l,
      w: e.numberFormat === "decimal" ? Ri(O.w) : O.w,
      t: e.numberFormat === "decimal" ? Ri(O.t) : O.t,
      q: O.q,
      orientationLock: O.orientationLock,
      name: O.name,
      material: O.material,
      bandingOptions: w.value[M].banding ? Z("bandingOptions", O.banding) : null,
      finishOptions: w.value[M].finish ? Z("finishOptions", O.finish) : null,
      numberFormat: e.numberFormat,
      customData: W(O)
    })), J = (O) => {
      var V;
      const M = (V = O == null ? void 0 : O[0]) == null ? void 0 : V.data;
      M && Tr.parse(M, {
        header: !1,
        dynamicTyping: !1,
        worker: !0,
        complete: (se) => v(se),
        error: () => s("error")
      });
    }, v = (O) => {
      o.value = O.data.filter((M) => M.some((V) => V)), l.value = o.value[0], u.value = {};
      for (let M = l.value.length; M--; ) {
        const V = l.value[M], se = D(V);
        se ? u.value[M] = se : (u.value[M] = null, R.value.includes(V) && (u.value[M] = "customData." + e.customFields.find((oe) => oe.label === V).id));
      }
      K(), o.value.shift(), U(), ie();
    }, D = (O) => {
      const M = {
        l: ["length", "l", "len", "lng", "long", "lgth", "lg", n("l"), n("length")],
        w: ["width", "w", "wd", "wide", "height", "h", "ht", "high", n("w"), n("width")],
        t: ["thickness", "t", "th", "depth", "dp", "dpth", "thk", "thick", n("t"), n("thickness")],
        name: ["name", "nom", "n", "nm", "nme", "label", "lbl", "description", "desc", n("name")],
        q: ["quantity", "qty", "q", "quant", "qnty", "qnt", n("quantity"), n("q"), "count"],
        material: ["material", "mat", "m", "matl", "mtl", "mtrl", "mtr", n("quantity")],
        orientationLock: ["rotation", "rot", "ro", "r", "o", "orientation", "orient", "or", "direction", "dir", n("orientation")],
        banding: ["b", "banding", "band", "ba", "bnd", "edging", "edge", "edn", n("banding")],
        finish: ["finish", "paint"]
      }, V = Object.entries(M).reduce(
        (se, [oe, ve]) => (ve.some((Ie) => O && O.toLowerCase() === Ie) && se.push(oe), se),
        []
      );
      return V.length > 1 ? null : V[0];
    }, K = () => {
      p.value = !1, a.value = Object.values(u.value).map((M) => !M || M === "N" ? null : m.includes(M) ? M : (p.value = !0, null));
      const O = a.value.filter((M, V) => a.value.indexOf(M) !== V);
      f.value = O.map((M) => a.value.reduce(
        (V, se, oe) => (se && se === M && V.push(oe), V),
        []
      ));
    }, $ = (O) => O && O.replace(/\s*,\s*/g, ","), U = () => {
      const O = o.value.map((M) => {
        const V = {};
        return l.value.forEach((se, oe) => {
          if (f.value.flat().includes(oe))
            return V[u.value[oe]] = "???";
          V[u.value[oe]] = M[oe];
        }), V;
      });
      r.value = O;
    }, W = (O) => {
      let M = {};
      for (let V in O)
        if (V.startsWith("customData.")) {
          let se = V.slice(11);
          M[se] = O[V];
        }
      return M;
    }, ie = () => {
      const O = _();
      O != null && O.length && s("import", O);
    };
    return pt(() => {
      N("banding", e.bandingOptions), N("finish", e.finishOptions);
    }), (O, M) => (y(), C("div", jc, [
      ye(Uc, {
        label: k(n)("Drop CSV file here"),
        "required-type": "text/csv",
        onDrop: J
      }, null, 8, ["label"])
    ]));
  }
}), Vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: zc }, Symbol.toStringTag, { value: "Module" }));
class Dt extends Error {
  constructor(t, e) {
    super(t), this.code = e, this.name = "FormulaError";
  }
}
class mn {
  constructor({ url: t = null, spec: e = null }) {
    c(this, "url");
    c(this, "spec");
    // Update the operations object to use the FormulaOperation type
    c(this, "operations", {
      add: (t, e) => t + e,
      subtract: (t, e) => t - e,
      multiply: (t, e) => t * e,
      divide: (t, e) => {
        if (e === 0) throw new Dt("Division by zero", "DIVISION_BY_ZERO");
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
      const [u, f] = a.split(".");
      if (!t.nodes.has(a)) {
        const w = n[u];
        if (w)
          return f === "q" ? w.q : w[f];
        throw new Error(`Node not found: ${a}`);
      }
      if (o.has(a))
        throw new Error(`Circular dependency detected at ${a}`);
      const p = t.nodes.get(a);
      if (typeof p.formula == "number")
        return r.set(a, p.formula), p.formula;
      o.add(a);
      const I = t.edges.get(a) || /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map();
      for (const w of I)
        if (w.startsWith("input.")) {
          const R = w.split(".")[1];
          h.set(w, s[R]);
        } else
          h.set(w, l(w));
      const m = this.evaluateFormulaWithDeps(p.formula, h, s);
      return r.set(a, m), o.delete(a), m;
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
    for (const n of t)
      if (this.isNumber(n) || this.isStringLiteral(n) || this.isIdentifier(n))
        e.push(this.isNumber(n) ? Number(n) : n);
      else if (n === "(")
        s.push(n);
      else if (n === ")") {
        for (; s.length && s[s.length - 1] !== "("; )
          e.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched parentheses");
        s.pop();
      } else if (n === "?") {
        for (; s.length && this.precedence[s[s.length - 1]] > this.precedence[n]; )
          e.push(s.pop());
        s.push(n);
      } else if (n === ":") {
        for (; s.length && s[s.length - 1] !== "?"; )
          e.push(s.pop());
        if (s.length === 0)
          throw new Error("Mismatched ternary operator");
        s.pop(), s.push("?:");
      } else if (n in this.precedence) {
        for (; s.length && this.precedence[s[s.length - 1]] >= this.precedence[n]; )
          e.push(s.pop());
        s.push(n);
      } else
        throw new Error(`Invalid token: ${n}`);
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
    if (!((e = this.spec) != null && e.inputs)) throw new Dt("No input specifications defined", "NO_INPUTS");
    for (const [s, n] of Object.entries(this.spec.inputs)) {
      const r = t[s];
      if (r === void 0)
        throw new Dt(`Missing required input: ${s}`, "MISSING_INPUT");
      if (r < n.min || r > n.max)
        throw new Dt(`Input ${s} value ${r} out of range [min: ${n.min}, max: ${n.max}]`, "INPUT_OUT_OF_RANGE");
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
      throw new Dt("No input specifications defined", "NO_INPUTS");
    const e = Object.keys(this.spec.inputs);
    if (t.length !== e.length)
      throw new Dt(`Expected ${e.length} fields, got ${t.length}`, "INVALID_FIELD_COUNT");
    let s = 0;
    for (const r of t) {
      const o = e[s], l = this.spec.inputs[o];
      if (r.value === null || r.value === void 0)
        throw new Dt(`Missing value for field ${s}`, "MISSING_FIELD_VALUE");
      if (r.value < l.min || r.value > l.max)
        throw new Dt(`Field ${s} value ${r.value} out of range [min: ${l.min}, max: ${l.max}]`, "FIELD_OUT_OF_RANGE");
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
const Yc = {
  key: 0,
  class: "debug"
}, Xc = { id: "formula-pricing" }, Kc = {
  key: 1,
  class: "extras"
}, Zc = { class: "heading" }, Jc = { id: "hardware-total" }, Qc = { class: "heading panels" }, eh = !1, th = /* @__PURE__ */ Me({
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
    const e = Tt(() => Promise.resolve().then(() => Zi)), s = i, { t: n } = ji(["main", "errors"]), r = t, o = Ur("calculator"), l = Q(() => o()), a = H("production");
    let u = null;
    const f = H(null), p = H([]), I = H(!1), h = H(""), m = Q(() => {
      if (!I.value || !p.value.length || p.value.every((v) => v.value === null)) return null;
      const J = Z();
      return et(() => r("panel-result", J)), J;
    }), w = Q(() => {
      if (!l.value || !I.value || !p.value.length || p.value.every((v) => v.value === null)) return;
      const J = he();
      return et(() => r("hardware-result", J, R.value)), J;
    }), R = Q(() => {
      if (w.value)
        return Object.values(w.value).reduce((J, v) => J + v.totalCost, 0);
    });
    De(m, (J) => {
      var $, U, W;
      if (!I.value || !J || !l.value || !(($ = l.value) != null && $.inputShapes)) return;
      const v = (ie) => ie != null && ie.name ? ie.name.toLowerCase() : "", D = new Map(
        l.value.inputShapes.map((ie) => [v(ie), ie])
      ), K = /* @__PURE__ */ new Set();
      for (const ie of Object.values(m.value)) {
        if (!ie.name) continue;
        const O = v(ie), M = D.get(O), V = {
          ...ie,
          name: ie.name.toUpperCase() || (M == null ? void 0 : M.name.toUpperCase()),
          material: ((U = ie.material) == null ? void 0 : U.toUpperCase()) || ((W = M == null ? void 0 : M.material) == null ? void 0 : W.toUpperCase()),
          bandingOptions: ie.bandingOptions || {},
          finishOptions: ie.finishOptions || {},
          orientationLock: ie.orientationLock || null,
          notes: h.value,
          readonly: !0
        }, se = M || l.value.createInputShape(V);
        if (M) {
          Object.assign(M, V);
          for (const oe of ["banding", "finish"])
            l.value.initExtrasOptions(M, oe);
        } else
          l.value.inputShapes.push(se);
        K.add(O);
      }
      l.value.inputShapes = l.value.inputShapes.filter(
        (ie) => K.has(v(ie))
      );
    }, { immediate: !1 }), pt(() => _());
    const N = (J) => {
      s.debug && console.log(J);
    }, ee = () => {
      p.value = Object.values(f.value.inputs).map((J) => ({
        value: J.default ?? null
      })), console.log(p.value);
    }, X = (J, v) => {
      p.value[J] && (p.value[J].value = v);
    }, Z = () => {
      try {
        return u.calculatePanelsFromFields(p.value);
      } catch (J) {
        return l.value.inputShapes.length = 0, console.error(J), null;
      }
    }, he = () => {
      try {
        return u.calculateHardwareFromFields(p.value);
      } catch (J) {
        return console.error(J), null;
      }
    }, _ = async () => {
      if (!s.url && !s.spec) {
        console.warn("SmartCut - No formula URL or JSON provided");
        return;
      }
      s.url ? (N(`SmartCut - Formula calculator init from url: ${s.url}`), u = new mn({ url: s.url }), f.value = await u.getSpec()) : s.spec && (N("SmartCut - Formula calculator init with JSON"), u = new mn({ spec: s.spec }), f.value = await u.getSpec()), ee(), I.value = !0;
    };
    return (J, v) => {
      var D, K;
      return y(), C(xe, null, [
        a.value === "development" && eh ? (y(), C("div", Yc, [
          v[1] || (v[1] = T("div", null, "Developer information", -1)),
          ye(k(e), {
            data: [m.value],
            paths: ["panelResult"]
          }, null, 8, ["data"])
        ])) : G("", !0),
        T("div", Xc, [
          (D = f.value) != null && D.projectName ? (y(), ge(dt, {
            key: 0,
            id: "project-name",
            type: "string",
            label: "Project name",
            placeholder: "Name",
            value: h.value,
            "onUpdate:value": v[0] || (v[0] = ($) => h.value = $)
          }, null, 8, ["value"])) : G("", !0),
          (y(!0), C(xe, null, Ee((K = f.value) == null ? void 0 : K.inputs, ($, U, W) => {
            var ie;
            return y(), ge(dt, {
              id: "formula-field-" + W,
              key: W,
              type: $.type,
              label: $.label,
              placeholder: $.label,
              min: $.min ?? 0,
              max: $.max ?? null,
              default: $.default ?? 0,
              value: (ie = p.value[W]) == null ? void 0 : ie.value,
              "onUpdate:value": (O) => X(W, O)
            }, null, 8, ["id", "type", "label", "placeholder", "min", "max", "default", "value", "onUpdate:value"]);
          }), 128)),
          w.value ? (y(), C("div", Kc, [
            T("div", Zc, te(k(n)("Hardware")), 1),
            (y(!0), C(xe, null, Ee(w.value, ($, U) => (y(), C("div", { key: U }, te($.name) + " x" + te($.q) + " = " + te(i.formatPrice($.totalCost)), 1))), 128)),
            T("div", Jc, te(k(n)("Hardware total")) + " = " + te(i.formatPrice(R.value)), 1)
          ])) : G("", !0),
          T("div", Qc, te(k(n)("Panels")), 1)
        ])
      ], 64);
    };
  }
}), Ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: th }, Symbol.toStringTag, { value: "Module" })), ih = { id: "smartcut-notices" }, sh = { class: "content" }, nh = ["onClick"], rh = ["innerHTML"], oh = /* @__PURE__ */ Me({
  __name: "Notices",
  props: {
    position: { default: "top-left" }
  },
  setup(i) {
    const t = i, { notices: e, dismissNotice: s } = ps(), n = H({}), r = Q(() => t.position.includes("right") ? "notice-right" : "notice-left");
    return (o, l) => {
      const a = Nt("font-awesome-icon");
      return y(), ge(yn, { to: "body" }, [
        T("div", ih, [
          ye(jr, {
            name: r.value,
            "move-class": "notice-move",
            tag: "div",
            class: Ce(["notices-container", t.position])
          }, {
            default: fs(() => [
              (y(!0), C(xe, null, Ee(k(e), (u) => (y(), C("div", {
                key: u.id,
                ref_for: !0,
                ref: (f) => {
                  f && (n.value[u.id] = f);
                },
                class: Ce([
                  "notice",
                  `notice--${u.type}`
                ])
              }, [
                T("div", sh, [
                  T("div", {
                    class: "message",
                    onClick: (f) => u.action()
                  }, te(u.message), 9, nh),
                  T("div", {
                    class: "additional-info",
                    innerHTML: u.additional
                  }, null, 8, rh)
                ]),
                u.persistent ? G("", !0) : (y(), ge(a, {
                  key: 0,
                  icon: ["fass", "trash"],
                  class: "dismiss",
                  onClick: (f) => k(s)(u.id)
                }, null, 8, ["onClick"]))
              ], 2))), 128))
            ]),
            _: 1
          }, 8, ["name", "class"])
        ])
      ]);
    };
  }
}), Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: oh }, Symbol.toStringTag, { value: "Module" }));
export {
  ii as A,
  so as B,
  Dh as C,
  zi as D,
  Lh as E,
  Ph as F,
  Ss as I,
  Th as N,
  Zi as O,
  zt as S,
  ni as _,
  pi as a,
  re as b,
  Et as c,
  Ae as d,
  Ch as e,
  Al as f,
  xh as g,
  At as h,
  vh as i,
  yh as j,
  wh as k,
  bh as l,
  Ih as m,
  Sh as n,
  Hi as o,
  S as p,
  Zt as q,
  mh as r,
  ko as s,
  kh as t,
  ph as u,
  fh as v,
  St as w,
  wt as x,
  qt as y,
  zs as z
};
